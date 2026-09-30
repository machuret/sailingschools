'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';

const KEY = 'saily-reading-progress-v1';
const EVENT = 'saily-reading-progress';
let temporaryProgress = '';
let storageUnavailable = false;
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(EVENT, callback);
  return () => { window.removeEventListener('storage', callback); window.removeEventListener(EVENT, callback); };
}
function snapshot() {
  if (storageUnavailable) return temporaryProgress;
  try { return localStorage.getItem(KEY) ?? ''; } catch { return temporaryProgress; }
}
const serverSnapshot = () => '';
function writeProgress(next: string[]) {
  temporaryProgress = JSON.stringify(next);
  let saved = false;
  try {
    localStorage.setItem(KEY, temporaryProgress);
    storageUnavailable = false;
    saved = true;
  } catch { storageUnavailable = true; }
  window.dispatchEvent(new Event(EVENT));
  return saved;
}
type LessonLink = { slug: string; title: string };

export default function BasicProgress({ lessons, slug }: { lessons: LessonLink[]; slug?: string }) {
  const raw = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const [notice, setNotice] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);
  let read: string[] = [];
  try {
    const value: unknown = JSON.parse(raw || '[]');
    if (Array.isArray(value)) read = [...new Set(value.filter((item): item is string => typeof item === 'string' && lessons.some(l => l.slug === item)))];
  } catch { /* Ignore malformed or older saved data. */ }
  function save(next: string[]) {
    setNotice(writeProgress(next) ? 'Reading progress saved on this device.' : 'Your browser could not save progress. It will last only for this visit.');
  }
  const isRead = Boolean(slug && read.includes(slug));
  const next = lessons.find(l => !read.includes(l.slug));
  return <section className="basic-progress" aria-label="Your reading progress">
    <div className="basic-progress-heading"><h2>Your reading journey</h2><span>{read.length} of {lessons.length} read</span></div>
    <progress value={read.length} max={lessons.length} aria-label={`${read.length} of ${lessons.length} lessons marked as read`} />
    <p>Saved in this browser only. A reading record, not a sailing qualification.</p>
    {slug ? <button type="button" aria-pressed={isRead} onClick={() => save(isRead ? read.filter(s => s !== slug) : [...read, slug])}>{isRead ? '✓ Marked as read — undo' : 'Mark this lesson as read'}</button> : <>
      {next ? <Link className="pill pill-sky" href={`/learn-the-basics/${next.slug}/`}>{read.length ? 'Continue' : 'Begin'}: {next.title} →</Link> : <p><strong>You have read all {lessons.length} lessons.</strong> Revisit any topic below or <Link href="/sailing-schools/">find a school for practical instruction</Link>.</p>}
      {read.length > 0 && <details><summary>View your read lessons</summary><ul>{lessons.filter(l => read.includes(l.slug)).map(l => <li key={l.slug}><Link href={`/learn-the-basics/${l.slug}/`}>{l.title}</Link></li>)}</ul></details>}
      {read.length > 0 && (confirmReset ? <div className="basic-progress-actions"><span>Clear your reading record on this device?</span><button type="button" onClick={() => { save([]); setConfirmReset(false); }}>Yes, clear progress</button><button type="button" onClick={() => setConfirmReset(false)}>Keep progress</button></div> : <button className="basic-reset" type="button" onClick={() => setConfirmReset(true)}>Reset reading progress</button>)}
    </>}
    <p className="basic-feedback" role="status">{notice}</p>
  </section>;
}
