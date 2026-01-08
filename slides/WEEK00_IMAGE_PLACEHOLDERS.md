# Week 0 Image Placeholders & Improvements

## 📊 What Was Created

**Week 0 Introduction Slides:** 45 slides of pedagogically-designed course introduction

- Built from scratch using content from original PowerPoint
- Follows same pedagogical framework as Weeks 1-5
- Warm, welcoming tone that reduces intimidation
- Clear expectations and course structure
- Addresses "elephant in the room" (AI/LLMs) proactively

---

## 🖼️ Image Placeholders Needed

### **Slide 8: Your Instructor**
**Current:** Uses existing `/images/william_chapman_square.jpg`
**Status:** ✅ Already working (uses your profile photo)

### **Slide 10: Your TA - Aiden Pape**
**Location:** Line 93
**Current text:** `**PLACEHOLDER: Photo of Aiden**`
**What to add:** Photo of Aiden Pape

**Suggested code:**
```markdown
![Aiden Pape](/images/aiden_pape.jpg){width=200}
```

**To add:**
1. Get Aiden's photo
2. Save as `/images/aiden_pape.jpg`
3. Replace placeholder text with image code above

---

### **Slide 20: Runestone Dashboard**
**Location:** Line 260
**Current:** `**PLACEHOLDER: Screenshot of Runestone dashboard**`
**What to add:** Screenshot showing Runestone interface

**Suggested code:**
```markdown
![Runestone Dashboard](/images/runestone_dashboard.png){width=800}
```

**To add:**
1. Log into Runestone Academy
2. Take screenshot of dashboard
3. Save as `/images/runestone_dashboard.png`
4. Replace placeholder with image code

---

### **Slide 28: VS Code Extensions Panel**
**Location:** Line 391
**Current:** `**PLACEHOLDER: Screenshot of VS Code extensions panel**`
**What to add:** Screenshot of VS Code showing extensions marketplace

**Suggested code:**
```markdown
![VS Code Extensions](/images/vscode_extensions.png){width=800}
```

**To add:**
1. Open VS Code
2. Click Extensions icon (left sidebar)
3. Take screenshot showing the 5 required extensions
4. Save as `/images/vscode_extensions.png`
5. Replace placeholder

---

## 🌐 Images That Could Be Pulled from Web

None in this version—I kept it minimal. However, you could add:

**Optional additions:**

1. **CU Boulder logo** - Could add to title slide
2. **ATOC department photo** - Building exterior
3. **Climate data visualization examples** - To show what students will create

---

## ✅ Pedagogical Design Decisions

### **1. Warm, Non-Intimidating Tone**

**Problem:** Week 0 can intimidate students, especially those with no coding experience

**Solution:**
- Friendly, conversational language
- "We're in this together" framing
- Will admits it's his first time teaching the class
- Emphasizes support resources prominently

**Example:**
```markdown
**My promise to you:** I will work harder than anyone to make this valuable for your career.
```

---

### **2. Address AI/LLMs Proactively**

**Problem:** Students are using ChatGPT/Copilot, but unclear on ethics

**Solution:** Dedicated 3-slide section on AI use

**Slides 15-17:**
- Explicit policy: what's allowed, what's not
- Gray areas identified
- Rationale explained (learning vs. cheating)
- Interactive exercise to check understanding

**Impact:** Sets clear expectations early, reduces anxiety

---

### **3. The Question Number System (Slide 24-26)**

**Your innovative 0-5 finger system:**

- Explained clearly with examples
- Rationale provided (why it's better than silence)
- Practice round included
- Escape clause: "If you hate this, tell me!"

**Impact:** Students understand the system before Week 1, buy-in established

---

### **4. Multiple Entry Points for Different Skill Levels**

**Whiteboard game (Slide 23):**
- Low-pressure way to share background
- Visual representation of class diversity
- Normalizes wide range of experience levels

**Grading with 115% buffer (Slide 27):**
- Explicitly states: "Consistent effort = A"
- Removes grade anxiety
- Encourages risk-taking and learning

---

### **5. Practical "Getting Started" Focus**

**Slides 28-30:**
- Clear, step-by-step setup instructions
- Links to video tutorials
- Time estimates ("5 minutes")
- Troubleshooting section in backup slides

**Impact:** Students leave Week 0 ready to code, not confused

---

### **6. Support Resources Front and Center**

**Slide 11:** Basic Needs + Mental Health

- Acknowledges students are whole humans
- Links provided immediately
- "My door is always open" message

**Impact:** Creates safe, supportive learning environment

---

## 📈 Structure Comparison

### Original PowerPoint (25 slides):
- Straightforward introduction
- Syllabus details
- Setup instructions
- Some slides were image-only

### New Quarto Version (45 slides):
- All content from original
- **Plus:** AI/LLM policy (3 slides)
- **Plus:** Question system explanation (3 slides)
- **Plus:** Expanded course goals (2 slides)
- **Plus:** Interactive exercises (3 slides)
- **Plus:** Clear "What to Do This Week" (2 slides)
- **Plus:** Backup slides for troubleshooting

**Pedagogical improvements:**
- Incremental reveals for cognitive pacing
- Interactive elements (whiteboard game, practice round)
- Clear hierarchies (what's required vs. optional)
- Multiple formats (text, tables, examples)

---

## 🎯 Key Themes

**Theme 1: "You Belong Here"**

Slides emphasizing inclusivity:
- Wide range of backgrounds welcome (Slide 23)
- Support resources (Slide 11)
- 115% grading buffer (Slide 27)
- "No stupid questions" (Slide 42)

**Theme 2: "Clear Expectations"**

Slides setting expectations:
- Course goals (Slides 17-19)
- Grading breakdown (Slide 27)
- AI policy (Slides 15-17)
- Assignment structure (Slide 21-22)

**Theme 3: "We're Partners in This"**

Will's transparency:
- First time teaching (Slide 9)
- "We're figuring this out together"
- Question system is an experiment
- Asks for feedback explicitly

**Theme 4: "Skills for Your Career"**

Future-oriented framing:
- Where former students are now (Slide 44)
- Employer feedback (Slide 44)
- Transferable skills beyond class (Slide 19)

---

## 📝 Recommended Next Steps

### Before Using These Slides:

1. **Add Aiden's photo** (Slide 10)
2. **Add Runestone screenshot** (Slide 20)
3. **Add VS Code screenshot** (Slide 28)
4. **Review Canvas links** - Make sure all Canvas URLs are updated
5. **Update environment file link** (Slide 30)
6. **Confirm key dates:**
   - Midterm 1: Feb 3
   - Midterm 2: Mar 12
   - Final Project: Apr 27

### During Class:

1. **Slide 23: Whiteboard Game**
   - Have markers ready
   - Reserve ~10 minutes for this
   - Take photo afterward (could use for future years)

2. **Slides 24-26: Question System Practice**
   - Actually do the practice round
   - Gauge student reaction
   - Be ready to explain further if needed

3. **Slides 28-30: Live Setup**
   - Budget 20-30 minutes
   - Have Aiden help troubleshoot
   - Don't rush—this is crucial

### After Class:

1. **Survey students:**
   - Did they get setup working?
   - Was anything confusing?
   - Feedback on question system?

2. **Update slides based on feedback:**
   - Add FAQs to backup slides
   - Clarify any confusing points
   - Adjust timing for next year

---

## 🔧 Technical Notes

**File:** `atoc4815-week00-intro.qmd`

**Renders to:** `atoc4815-week00-intro.html`

**Uses existing:**
- `custom.scss` theme
- `styles.css` for spacing
- `/images/william_chapman_square.jpg` (already exists)

**Needs:**
- `/images/aiden_pape.jpg` (new)
- `/images/runestone_dashboard.png` (new)
- `/images/vscode_extensions.png` (new)

**Optional additions:**
- `/images/cu_boulder_logo.png`
- `/images/atoc_building.jpg`
- `/images/example_figures/` (student project examples)

---

## 💡 Why This Approach Works

**Traditional Week 0:**
- Boring syllabus readthrough
- Students zone out
- Nobody remembers anything

**This Week 0:**
- Interactive from start (whiteboard game)
- Addresses student concerns (AI, difficulty, support)
- Hands-on setup (leave ready to code)
- Memorable systems (question numbers)
- Sets tone for active learning

**Expected outcomes:**
- ✅ Students feel welcome
- ✅ Students understand expectations
- ✅ Students know how to get help
- ✅ Students have working setup
- ✅ Students excited for Week 1

---

## 📊 Slide Breakdown

**Welcome & Motivation:** Slides 1-4
**Who We Are:** Slides 5-10
**Support & Resources:** Slides 11-12
**The Elephant (AI):** Slides 13-17
**Course Overview:** Slides 18-28
**Getting Started:** Slides 29-32
**Interactive Introduction:** Slides 33-37
**Next Steps:** Slides 38-45
**Backup Slides:** Slides 46-47

**Total:** 47 slides (45 main + 2 backup)

---

## 🎨 Visual Design Notes

**Background colors:**
- Dark grey (#2F2F2F): Major section breaks
- Sage green (#9CA898): Supporting sections
- White: Content slides

**Incremental reveals:**
- Used throughout for pacing
- Prevents cognitive overload
- Creates "aha!" moments

**Tables:**
- Clear, easy-to-scan
- Used for comparisons and schedules
- Tiny font for dense info (with .tiny class)

**Code blocks:**
- Syntax-highlighted
- Used for terminal commands
- Clear prompts (# comments)

---

## 🚀 Ready to Use!

Once you add the 3 images, these slides are ready for Spring 2026!

**Final checklist:**
- [ ] Add Aiden's photo
- [ ] Add Runestone screenshot
- [ ] Add VS Code screenshot
- [ ] Update Canvas links
- [ ] Verify all dates
- [ ] Test environment file link
- [ ] Review backup slides
- [ ] Print slide deck (optional backup)

**You've got this! 🌟**
