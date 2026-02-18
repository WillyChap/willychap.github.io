import { db } from "./firebase-config.js";
import {
  collection, doc, getDoc, setDoc, getDocs, updateDoc,
  writeBatch, serverTimestamp, deleteDoc
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// ── Surfers ──────────────────────────────────────────

export async function getSurfers() {
  const snap = await getDocs(collection(db, "surfers"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((s) => s.active !== false);
}

export async function getSurfer(surferId) {
  const snap = await getDoc(doc(db, "surfers", surferId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function saveSurfer(surferId, data) {
  await setDoc(doc(db, "surfers", surferId), data, { merge: true });
}

export async function deleteSurfer(surferId) {
  await deleteDoc(doc(db, "surfers", surferId));
}

// ── Events ───────────────────────────────────────────

export async function getEvents(season = 2026) {
  const snap = await getDocs(collection(db, "events"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((e) => e.season === season)
    .sort((a, b) => (a.eventNumber || 0) - (b.eventNumber || 0));
}

export async function getEvent(eventId) {
  const snap = await getDoc(doc(db, "events", eventId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function getCurrentEvent(season = 2026) {
  const events = await getEvents(season);
  // Try "live" first, then "upcoming"
  return events.find((e) => e.status === "live")
    || events.find((e) => e.status === "upcoming")
    || null;
}

export async function saveEvent(eventId, data) {
  await setDoc(doc(db, "events", eventId), data, { merge: true });
}

export async function deleteEvent(eventId) {
  await deleteDoc(doc(db, "events", eventId));
}

// ── Results ──────────────────────────────────────────

export async function getResults(eventId) {
  const snap = await getDocs(collection(db, "results"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((r) => r.eventId === eventId);
}

export async function saveResult(eventId, surferId, data) {
  const docId = `${eventId}_${surferId}`;
  await setDoc(doc(db, "results", docId), { eventId, surferId, ...data }, { merge: true });
}

export async function saveResultsBatch(eventId, resultsArray) {
  const batch = writeBatch(db);
  for (const r of resultsArray) {
    const docId = `${eventId}_${r.surferId}`;
    batch.set(doc(db, "results", docId), { eventId, ...r }, { merge: true });
  }
  await batch.commit();
}

// ── Teams ────────────────────────────────────────────

export async function getTeam(userId, eventId) {
  const docId = `${userId}_${eventId}`;
  const snap = await getDoc(doc(db, "teams", docId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function saveTeam(userId, eventId, teamData) {
  const docId = `${userId}_${eventId}`;
  await setDoc(doc(db, "teams", docId), {
    userId,
    eventId,
    savedAt: serverTimestamp(),
    ...teamData
  }, { merge: true });
}

export async function getTeamsForEvent(eventId) {
  const snap = await getDocs(collection(db, "teams"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((t) => t.eventId === eventId);
}

export async function lockTeamsForEvent(eventId, locked = true) {
  const teams = await getTeamsForEvent(eventId);
  const batch = writeBatch(db);
  for (const t of teams) {
    batch.update(doc(db, "teams", t.id), { locked });
  }
  await batch.commit();
}

// ── Leaderboard ──────────────────────────────────────

export async function getLeaderboard(season = 2026) {
  const snap = await getDocs(collection(db, "leaderboard"));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .filter((e) => e.season === season);
}

export async function saveLeaderboardEntry(userId, season, data) {
  const docId = `${userId}_${season}`;
  await setDoc(doc(db, "leaderboard", docId), {
    userId,
    season,
    ...data
  }, { merge: true });
}

// ── Users ────────────────────────────────────────────

export async function getUser(userId) {
  const snap = await getDoc(doc(db, "users", userId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function createUser(userId, profile) {
  await setDoc(doc(db, "users", userId), profile);
}

export async function updateUser(userId, data) {
  await updateDoc(doc(db, "users", userId), data);
}

export async function getAllUsers() {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// ── Previous team snapshot (for revert) ──────────────

export async function getPreviousTeam(userId, currentEventNumber, season = 2026) {
  // Find the event before the current one
  const events = await getEvents(season);
  const prevEvent = events.find((e) => e.eventNumber === currentEventNumber - 1);
  if (!prevEvent) return null;
  return getTeam(userId, prevEvent.id);
}
