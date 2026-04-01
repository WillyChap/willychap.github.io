# Fantasy Surf League -- Implementation Plan

This document is a complete implementation spec for a Fantasy Surfer game embedded in the Chapman Research Group Jekyll site (willychap.github.io). It is designed so that a developer (or Claude instance) can build the entire application from this plan alone.

## Overview

A fantasy surfing game for a small friend group (~5-30 players) based on the WSL Championship Tour. Players draft teams of 8 surfers under a $50M salary cap, earn points based on real event results, and compete on a season-long leaderboard. The game lives at `willychap.github.io/lineup/` and appears in the site navigation as **"Lineup"**.

---

## 1. Architecture

### Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | Vanilla HTML/CSS/JS | Lives in `lineup/` folder on GitHub Pages, no build step needed |
| **Auth** | Firebase Authentication | Google sign-in, zero password management |
| **Database** | Cloud Firestore | NoSQL document DB, generous free tier, real-time listeners |
| **Hosting** | GitHub Pages (existing) | Static files served alongside the Jekyll site |
| **Styling** | Match existing site Japandi theme | Colors: `#2F2F2F`, `#9CA898`, `#FEFDFB`, `#F7F5F2` |

### Why This Works

- The Jekyll site is static HTML on GitHub Pages. The fantasy app is also static HTML/JS but uses Firebase as its backend.
- Firebase's free Spark plan allows 50K reads/day, 20K writes/day, 1GB storage. This game will use <1% of those limits.
- No server to maintain. No hosting costs. Firebase JS SDK runs entirely in the browser.
- Firestore security rules enforce game logic server-side (salary cap, trade locks, etc.).

### Directory Structure

```
lineup/
  index.html          # Landing page / dashboard (shows leaderboard + current event)
  team.html           # Team management (pick/trade surfers)
  event.html          # Event details + results
  admin.html          # Admin panel (enter results, manage surfers/events)
  css/
    fantasy.css       # Styles matching Japandi site theme
  js/
    firebase-config.js  # Firebase project config (public, not secret)
    auth.js             # Authentication logic
    db.js               # Firestore read/write helpers
    team.js             # Team management logic (salary cap, trades, retention)
    scoring.js          # Scoring calculations
    ui.js               # DOM manipulation, rendering
  img/
    surfer-placeholder.png  # Default surfer photo
```

### Integration with Jekyll Site

1. Add `lineup` to the `include` list in `_config.yml` (it's already there for `weather` and `slides`)
2. Add a nav entry in `_data/navigation.yml`:
   ```yaml
   - title: "Lineup"
     url: /lineup/
   ```
3. The `lineup/` directory contains plain HTML files -- Jekyll passes them through as-is (no front matter needed, no Liquid processing).
4. The fantasy pages should visually match the main site (same fonts, colors, header style) but they do NOT use Jekyll layouts. They are standalone HTML pages with their own `<head>` that loads Firebase SDK + the app's CSS/JS.

---

## 2. Firebase Setup

### Project Creation

1. Go to https://console.firebase.google.com
2. Create project: `chapman-fantasy-surf` (or similar)
3. Enable **Authentication** > Sign-in method > **Google**
4. Enable **Cloud Firestore** > Start in **production mode**
5. Register a **Web app** and copy the config object

### Firebase Config (public, safe to commit)

```javascript
// lineup/js/firebase-config.js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "chapman-fantasy-surf.firebaseapp.com",
  projectId: "chapman-fantasy-surf",
  storageBucket: "chapman-fantasy-surf.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};
```

> Note: Firebase API keys are safe to expose in client-side code. Security is enforced by Firestore rules + Auth, not by hiding the key.

### Firebase SDK Loading

Use CDN imports in each HTML file's `<head>`:

```html
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut }
    from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getFirestore, collection, doc, getDoc, setDoc, getDocs, query, where, orderBy, onSnapshot, writeBatch, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
</script>
```

---

## 3. Data Model (Firestore Collections)

### `surfers` collection

Each document ID is a URL-safe slug (e.g., `john-john-florence`).

```json
{
  "name": "John John Florence",
  "country": "HAW",
  "rank": 1,
  "value": 9500000,
  "photoUrl": "https://...",
  "priceBracket": "elite",
  "active": true
}
```

**Price brackets** (for alternate slot eligibility):
- `elite`: $8M+
- `high`: $5M-$7.9M
- `mid`: $3M-$4.9M
- `low`: $1M-$2.9M
- `budget`: <$1M (eligible for alternate slot)

Surfer values are updated by the admin between events. ~36 men's surfers + ~18 women's surfers.

### `events` collection

Document ID is a slug (e.g., `pipe-pro-2026`).

```json
{
  "name": "Billabong Pipe Pro",
  "location": "Pipeline, Oahu",
  "eventNumber": 1,
  "season": 2026,
  "status": "upcoming",
  "startDate": "2026-01-29T08:00:00Z",
  "endDate": "2026-02-10T18:00:00Z",
  "lockDate": "2026-01-29T08:00:00Z",
  "tradingOpen": true,
  "resultsEntered": false,
  "tour": "mens"
}
```

**Status values:** `upcoming` | `live` | `completed`

When `status` changes to `live`, `tradingOpen` is set to `false`. When `status` changes to `completed`, `tradingOpen` is set to `true`.

### `results` collection

Document ID: `{eventId}_{surferId}` (e.g., `pipe-pro-2026_john-john-florence`).

```json
{
  "eventId": "pipe-pro-2026",
  "surferId": "john-john-florence",
  "finish": 1,
  "points": 200,
  "season": 2026,
  "tour": "mens"
}
```

### `teams` collection

Document ID: `{userId}_{eventId}` (e.g., `abc123_pipe-pro-2026`).

```json
{
  "userId": "abc123",
  "eventId": "pipe-pro-2026",
  "season": 2026,
  "tour": "mens",
  "surfers": [
    { "surferId": "john-john-florence", "purchasePrice": 9500000 },
    { "surferId": "filipe-toledo", "purchasePrice": 8500000 },
    { "surferId": "griffin-colapinto", "purchasePrice": 7000000 },
    { "surferId": "jack-robinson", "purchasePrice": 6500000 },
    { "surferId": "ethan-ewing", "purchasePrice": 5500000 },
    { "surferId": "connor-oleary", "purchasePrice": 4000000 },
    { "surferId": "samuel-pupo", "purchasePrice": 3500000 },
    { "surferId": "matthew-mcgillivray", "purchasePrice": 2500000 }
  ],
  "alternate": { "surferId": "rookie-surfer", "purchasePrice": 800000 },
  "totalSpent": 47800000,
  "salaryCap": 50000000,
  "savedAt": "2026-01-28T20:00:00Z",
  "locked": false
}
```

### `users` collection

Document ID: Firebase Auth UID.

```json
{
  "displayName": "Will Chapman",
  "email": "wchapman@colorado.edu",
  "photoUrl": "https://...",
  "isAdmin": true,
  "joinedAt": "2026-01-15T10:00:00Z",
  "teamName": "Boulder Barrels"
}
```

### `leaderboard` collection (denormalized for fast reads)

Document ID: `{userId}_{season}`.

```json
{
  "userId": "abc123",
  "season": 2026,
  "displayName": "Will Chapman",
  "teamName": "Boulder Barrels",
  "eventScores": {
    "pipe-pro-2026": 723,
    "sunset-open-2026": 681
  },
  "bestNineTotal": 723,
  "allEventsTotal": 723,
  "eventsPlayed": 2
}
```

---

## 4. Game Rules (Implemented in Code)

### Team Composition
- **Men's:** 8 surfers + 1 alternate, $50,000,000 salary cap
- **Women's:** 5 surfers + 1 alternate, $30,000,000 salary cap
- Alternate must be from the `budget` price bracket (< $1M current value)

### Salary Cap
- Each surfer's cost against the cap is their **purchase price** (the value at the time you added them), not their current value.
- If you drop a surfer and re-add them later, you pay the **current** value.
- Total `purchasePrice` across all 8 (or 5) surfers must not exceed the cap.
- The alternate slot is **excluded** from the salary cap.

### Trading Windows
- Trading is **open** between events.
- Trading **closes** at the `lockDate` of the next event (typically the start of Round 1 heat 1).
- Trading **reopens** when the event status changes to `completed`.
- When trading is closed, the team management page shows a read-only view.

### Revert Button
- After Event 1, players can hit "Revert" to restore their team to the exact roster they had at the end of the previous event.
- This undoes all trades made during the current trading window.
- Implementation: When an event completes, snapshot each user's team. Store as `previousTeam` on the next event's team doc.

### Alternate Slot
- If a rostered surfer does not compete (injury, withdrawal), the alternate's points replace theirs.
- The alternate must be re-selected before every event (does not carry over).
- Only `budget` bracket surfers are eligible.
- Implementation: After results are entered, if any rostered surfer has no result for the event, swap in the alternate's points.

### Scoring (Men's)

```
Finish  Points     Finish  Points     Finish  Points
  1      200         13      71         25      40
  2      145         14      70         26      39
  3      125         15      69         27      38
  4      124         16      68         28      37
  5      103         17      48         29      36
  6      102         18      47         30      35
  7      101         19      46         31      34
  8      100         20      45         32      33
  9       75         21      44         33      13
 10       74         22      43         34      12
 11       73         23      42         35      11
 12       72         24      41         36      10
```

Store this as a constant array in `scoring.js`. A team's event score = sum of points for all 8 surfers (with alternate swap if applicable).

### Scoring (Women's)

```
Finish  Points     Finish  Points     Finish  Points
  1      250          7      125        13      80
  2      225          8      120        14      78
  3      200          9       88        15      76
  4      190         10       86        16      74
  5      135         11       84        17      45
  6      130         12       82        18      40
```

### Season Standings
- Overall winner = highest total from **best 9 events** (drop worst results).
- Tiebreaker: Compare top-scoring surfer from the most recent event, then second-highest, etc. Then compare total season points. Then earliest registration date.

---

## 5. Firestore Security Rules

```javascript

```

Key enforcement:
- Only admins can write surfers, events, results, and leaderboard.
- Users can only edit their own teams.
- Teams cannot be edited when `locked == true` (set by admin when event goes live).
- Users cannot grant themselves admin.

---

## 6. Pages & UI

### Page 1: `index.html` -- Dashboard

**Visible to:** Everyone (auth required)

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│  [Site header matching Japandi theme]                │
│  Fantasy Surf League           [User avatar] [Logout]│
├──────────────────────────────────────────────────────┤
│                                                      │
│  CURRENT EVENT                    SEASON STANDINGS    │
│  ┌─────────────────────┐         ┌────────────────┐  │
│  │ Billabong Pipe Pro  │         │ Rank  Team  Pts│  │
│  │ Pipeline, Oahu      │         │  1.  Boulder  │  │
│  │ Status: LIVE        │         │  2.  TeamX    │  │
│  │ Trading: LOCKED     │         │  3.  TeamY    │  │
│  │                     │         │  ...          │  │
│  │ [View Results]      │         │               │  │
│  └─────────────────────┘         └────────────────┘  │
│                                                      │
│  YOUR TEAM (Event: Pipe Pro)     RECENT ACTIVITY     │
│  ┌─────────────────────┐         ┌────────────────┐  │
│  │ 1. JJF    $9.5M 200│         │ Will added     │  │
│  │ 2. Filipe $8.5M 145│         │   Griffin C.   │  │
│  │ ...                 │         │ Jake dropped   │  │
│  │ Total: 723 pts      │         │   Kanoa I.     │  │
│  │ [Manage Team]       │         │                │  │
│  └─────────────────────┘         └────────────────┘  │
└──────────────────────────────────────────────────────┘
```

**Features:**
- Show current/next event with status badge (upcoming/live/completed)
- Season leaderboard (sortable, shows best-9 total)
- Current team summary with points
- Link to team management page
- If no team exists for current event, prompt to create one

### Page 2: `team.html` -- Team Management

**Visible to:** Authenticated user (their own team only)

**Layout:**
```
┌──────────────────────────────────────────────────────┐
│  MY TEAM -- Pipe Pro 2026        Cap: $47.8M / $50M │
├──────────────────────────────────────────────────────┤
│                                                      │
│  YOUR ROSTER                   AVAILABLE SURFERS     │
│  ┌───────────────────────┐     ┌──────────────────┐  │
│  │ [x] JJF       $9.5M  │     │ [+] Kanoa  $6.0M │  │
│  │ [x] Filipe    $8.5M  │     │ [+] Italo  $7.5M │  │
│  │ [x] Griffin   $7.0M  │     │ [+] Medina $8.0M │  │
│  │ ...                   │     │ ...              │  │
│  │                       │     │ Search: [______] │  │
│  │ ALT: Rookie   $0.8M  │     │ Filter: [bracket]│  │
│  └───────────────────────┘     └──────────────────┘  │
│                                                      │
│  Remaining cap: $2,200,000                           │
│  [REVERT]  [SAVE TEAM]                               │
│                                                      │
│  ⚠ Trading closes: Jan 29, 8:00 AM HST              │
└──────────────────────────────────────────────────────┘
```

**Features:**
- Left panel: current roster with drop buttons `[x]`
- Right panel: all available surfers with add buttons `[+]`, searchable, filterable by price bracket
- Salary cap bar (visual progress bar, turns red if over)
- Show each surfer's **current value** in the available list, but show **purchase price** in the roster
- Alternate slot clearly separated, only shows `budget` bracket surfers
- Revert button (restores previous event's team)
- Save button (writes to Firestore)
- Read-only mode when trading is closed (hide buttons, show "Trading Locked" banner)
- Validation: prevent saving if over cap or wrong team size

### Page 3: `event.html` -- Event Details

**Visible to:** Everyone (auth required)

**Query param:** `?id=pipe-pro-2026`

**Features:**
- Event name, location, dates, status
- If completed: full results table (finish position, surfer name, points)
- Each user's team score breakdown for this event
- Highlight the current user's surfers in the results

### Page 4: `admin.html` -- Admin Panel

**Visible to:** Users with `isAdmin == true` only

**Features:**
- **Manage Events:** Create/edit events, set status (upcoming/live/completed), set lock dates
- **Manage Surfers:** Add/edit surfers, update values between events, set active/inactive
- **Enter Results:** After an event, enter finish positions for all surfers. The page auto-calculates points from the scoring table.
- **Score Calculator:** Button that computes all team scores for an event and updates the leaderboard. This iterates over all teams for that event, sums points, handles alternate swaps, and writes to the leaderboard collection.
- **Lock/Unlock Trading:** Toggle `tradingOpen` for an event (also sets `locked` flag on all team docs).
- **Season Management:** Set which season is active.

---

## 7. Key JavaScript Modules

### `auth.js`
```javascript
// Exports:
//   initAuth()        -- sets up onAuthStateChanged listener
//   signIn()          -- triggers Google popup sign-in
//   signOut()         -- signs out
//   getCurrentUser()  -- returns current user object or null
//   requireAuth()     -- redirects to index if not signed in
//   requireAdmin()    -- redirects to index if not admin
```

### `db.js`
```javascript
// Exports:
//   getSurfers(tour)                    -- returns all active surfers for men's or women's tour
//   getEvents(season)                   -- returns all events for a season, ordered by eventNumber
//   getCurrentEvent(season)             -- returns the event with status "upcoming" or "live"
//   getTeam(userId, eventId)            -- returns a user's team for an event
//   saveTeam(userId, eventId, teamData) -- validates and saves a team
//   getPreviousTeam(userId, eventId)    -- gets team from the prior event (for revert)
//   getResults(eventId)                 -- returns all results for an event
//   getLeaderboard(season)             -- returns sorted leaderboard
//   getUser(userId)                    -- returns user profile
//   createUser(userId, profile)        -- creates user profile on first sign-in
```

### `team.js`
```javascript
// Exports:
//   validateTeam(surfers, alternate, salaryCap, tour)
//     -- returns { valid: bool, errors: string[] }
//     -- checks: team size (8 or 5), salary cap, alternate bracket, no duplicates
//
//   calculateRemaining(surfers, salaryCap)
//     -- returns remaining cap space
//
//   buildRevertTeam(previousTeam, currentSurferValues)
//     -- returns a team object with previous roster but at original purchase prices
```

### `scoring.js`
```javascript
// Exports:
//   MEN_SCORING    -- array mapping finish position (1-36) to points
//   WOMEN_SCORING  -- array mapping finish position (1-18) to points
//
//   scoreTeam(team, results)
//     -- returns { totalPoints, surferScores[], alternateUsed: bool }
//     -- handles alternate swap if a rostered surfer has no result
//
//   calculateSeasonStandings(allEventScores)
//     -- returns sorted standings using best-9-of-N rule
//
//   breakTie(teamA, teamB, latestEventResults)
//     -- implements the tiebreaker rules
```

---

## 8. Implementation Order

Build in this exact order. Each phase is independently testable.

### Phase 1: Firebase + Auth + Skeleton Pages
1. Create Firebase project, enable Auth (Google) + Firestore
2. Create `lineup/` directory with `index.html`, `team.html`, `event.html`, `admin.html`
3. Each page loads Firebase SDK, has a sign-in button, displays user name
4. Write `firebase-config.js` and `auth.js`
5. Style pages to match site Japandi theme (fonts: Lora for headings, Inter for body; colors: `#2F2F2F`, `#9CA898`, `#FEFDFB`, `#F7F5F2`)
6. Add "Lineup" tab to `_data/navigation.yml`
7. Add `lineup` to the `include` list in `_config.yml`
8. Deploy Firestore security rules
9. **Test:** Can sign in, see your name, sign out. Pages are styled correctly.

### Phase 2: Admin -- Surfer & Event Management
1. Build `admin.html` with forms to add/edit surfers (name, value, country, rank, bracket)
2. Add event management (create event, set dates, set status)
3. Seed the database with the 2026 CT roster and first few events
4. **Test:** Admin can add surfers, create events, change event status.

### Phase 3: Team Management
1. Build `team.html` -- display available surfers, roster, salary cap
2. Implement add/drop with salary cap validation
3. Implement alternate slot (filter to budget bracket only)
4. Implement save (write to Firestore with purchase prices)
5. Implement trade lock (read-only when event is live)
6. **Test:** Can draft a team under cap, save it, see it persisted.

### Phase 4: Results & Scoring
1. Add results entry form to `admin.html` (dropdown finish positions for each surfer)
2. Implement `scoring.js` -- score each team based on results
3. Add "Calculate Scores" button to admin that processes all teams for an event
4. Handle alternate swap logic
5. **Test:** Enter results, calculate scores, verify points match expected values.

### Phase 5: Leaderboard & Dashboard
1. Build season leaderboard on `index.html` (best 9 of N events)
2. Show current event status and user's team summary
3. Build `event.html` -- show results table with user's surfers highlighted
4. Implement tiebreaker logic
5. **Test:** Full game loop -- draft team, event goes live, enter results, see leaderboard update.

### Phase 6: Polish
1. Revert button (snapshot previous event's team, restore on click)
2. Responsive design (mobile-friendly team picker)
3. Surfer photos (optional -- can use placeholder silhouettes)
4. Trade deadline countdown timer
5. "Recent activity" feed on dashboard (optional)

---

## 9. Admin Workflow Per Event

This is the manual process the admin (Will) follows for each CT event:

1. **Before the event:** Update surfer values in admin panel if needed. Verify the event's `lockDate` is correct.
2. **When Round 1 Heat 1 starts:** Set event status to `live` in admin panel. This locks all trading automatically.
3. **When event ends:** Set event status to `completed`. Enter finish positions for all surfers in the results form. Click "Calculate Scores" to update all teams and the leaderboard. Trading reopens automatically.
4. **Between events:** Create the next event if needed. Update surfer values based on rankings/form.

Time commitment: ~10-15 minutes per event, ~10 events per season.

---

## 10. Surfer Pricing Strategy

Since there's no official pricing, use this formula based on WSL rankings:

```
Base value formula (men's, 36 surfers):
  Rank 1:  $10,000,000
  Rank 2:  $9,500,000
  Rank 3:  $9,000,000
  ...
  Rank N:  max($500,000, $10,000,000 - (N-1) * $275,000)
```

Adjust between events based on recent form:
- Won the last event: +$500,000
- Podium (2nd/3rd): +$250,000
- Eliminated early (25th+): -$250,000
- Injury/withdrawal: -$500,000

This keeps pricing dynamic without requiring complex algorithms. The admin manually adjusts in the admin panel.

---

## 11. Future Enhancements (Not in V1)

- **Automated WSL results scraping** via a GitHub Action or Cloud Function
- **Head-to-head matchups** between friends each event
- **Trade history** log
- **Chat/comments** per event
- **Women's tour** as a separate league (same code, different constants)
- **Push notifications** when trading window opens/closes (Firebase Cloud Messaging)
- **Draft mode** where players take turns picking surfers (live draft event)
- **Invite links** so only approved friends can join

---

## 12. Reference: 2026 WSL Men's CT Schedule

Use this to seed the events collection. Dates are approximate and should be verified against the WSL website before the season.

| # | Event | Location | Approx. Dates |
|---|-------|----------|---------------|
| 1 | Billabong Pipeline Pro | Oahu, Hawaii | Jan 27 - Feb 8 |
| 2 | Hurley Pro Sunset Beach | Oahu, Hawaii | Feb 14 - 23 |
| 3 | Rip Curl Pro Bells Beach | Victoria, Australia | Mar/Apr |
| 4 | MEO Rip Curl Pro Portugal | Peniche, Portugal | Mar/Apr |
| 5 | Corona Open J-Bay | Jeffreys Bay, South Africa | Jul |
| 6 | SHISEIDO Tahiti Pro | Teahupo'o, Tahiti | Aug |
| 7 | Surf Ranch Pro | Lemoore, California | Sep |
| 8 | Rip Curl WSL Finals | Lower Trestles, California | Sep |

> Verify and update from https://www.worldsurfleague.com before seeding.

---

## 13. Notes for Implementation

- **No npm, no bundler, no framework.** Plain HTML/JS with ES module imports from CDN. This keeps things simple and deployable to GitHub Pages with zero build steps.
- **Firebase SDK v11** (modular, tree-shakeable imports from CDN).
- **All game logic validation happens twice:** once in the client (for UX) and once in Firestore security rules (for enforcement). Never trust the client alone.
- **Responsive design:** The team picker needs to work on phones. Use CSS grid, not tables.
- **The `lineup/` folder should not have Jekyll front matter** (`---`) in any file. This prevents Jekyll from processing the HTML through Liquid, which would break any `{{ }}` syntax in the JavaScript.
- **Local development:** You can test by opening the HTML files directly or running `python -m http.server` in the `lineup/` folder. Firebase Auth requires a real domain or `localhost` -- add `localhost` to Firebase Auth's authorized domains.
