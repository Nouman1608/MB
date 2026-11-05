/**
 * D-438 -- browser logic for the flashcard pages (/flashcards/{board}/{qualification}/{subject}/
 * and .../{topic}/).
 *
 * Two phases:
 *   setup    choose which cards (a subtopic or topic, Core only, only the
 *            cards not yet marked "Got it", shuffled or in syllabus order)
 *   session  one card at a time: show the front, reveal the back, then the
 *            student says "Again" or "Got it". "Again" puts the card back
 *            into the queue (requeueIndex below); "Got it" retires it for
 *            this session. The session ends when the queue is empty.
 *
 * Marking is the student's own judgement -- nothing is checked automatically,
 * and the page says so.
 *
 * Storage, in this browser only (listed on /legal/cookies/):
 *   mb-flashcards-{code} -- { v: 1, cards: { [cardId]: { k: 1, t: 'YYYY-MM-DD' } } }
 *                           k = 1 means the card was last marked "Got it".
 *                           "Reset my progress" removes the record.
 *
 * Analytics: `flashcards_start` and `flashcards_complete`, with the course
 * code, the page scope ('course' or 'topic') and the number of cards in the
 * session. No card ids, no topics, no Again/Got it counts
 * (docs/growth/measurement-guide.md).
 */
import { track } from './catalogue-client';

interface Card { id: string; f: string; b: string; g: string; sup: boolean }
interface Group { key: string; label: string }
interface Data { code: string; scope: 'course' | 'topic'; tiered: boolean; groupNoun: string; groups: Group[]; cards: Card[] }
interface Store { v: 1; cards: Record<string, { k: 0 | 1; t: string }> }

const dataEl = document.getElementById('fc-data');
if (dataEl) init(JSON.parse(dataEl.textContent ?? '{}') as Data);

/**
 * Where does a card the student marked "Again" go back into the queue?
 *
 * `queue` is the cards still to be seen this session, NOT including the card
 * just answered. `misses` is how many times this card has now been marked
 * "Again" in this session (1 the first time). Return the index at which to
 * re-insert it (0 = it comes straight back next; queue.length = the very end).
 *
 * TODO(owner): choose the re-study gap. See the note in the D-438 entry of
 * docs/decision-log.md. The default below brings the card back after a few
 * others, or at the end of a short queue.
 */
export function requeueIndex(queue: readonly string[], misses: number): number {
  void misses;
  return Math.min(3, queue.length);
}

function loadStore(key: string): Store {
  try {
    const raw = window.localStorage.getItem(key);
    const s = raw ? (JSON.parse(raw) as Store) : null;
    if (s && s.v === 1 && s.cards && typeof s.cards === 'object') return s;
  } catch { /* private mode or blocked storage: progress is simply not kept */ }
  return { v: 1, cards: {} };
}

function saveStore(key: string, s: Store): void {
  try { window.localStorage.setItem(key, JSON.stringify(s)); } catch { /* see loadStore */ }
}

function shuffled<T>(xs: T[]): T[] {
  const a = xs.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function init(d: Data): void {
  const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
  const storeKey = `mb-flashcards-${d.code}`;
  const byId = new Map(d.cards.map((c) => [c.id, c]));
  const groupLabel = new Map(d.groups.map((g) => [g.key, g.label]));

  const setup = $('fc-setup');
  const session = $('fc-session');
  const done = $('fc-done');
  const groupSel = $<HTMLSelectElement>('fc-group');
  const coreOnly = $<HTMLInputElement>('fc-core');
  const unknownOnly = $<HTMLInputElement>('fc-unknown');
  const shuffle = $<HTMLInputElement>('fc-shuffle');
  const countEl = $('fc-count');
  const knownEl = $('fc-known');
  const startBtn = $<HTMLButtonElement>('fc-start');
  const resetBtn = $<HTMLButtonElement>('fc-reset');

  const progressEl = $('fc-progress');
  const groupEl = $('fc-card-group');
  const tierEl = $('fc-card-tier');
  const frontEl = $('fc-front');
  const backWrap = $('fc-back-wrap');
  const backEl = $('fc-back');
  const revealBtn = $<HTMLButtonElement>('fc-reveal');
  const gradeRow = $('fc-grade');
  const againBtn = $<HTMLButtonElement>('fc-again');
  const gotBtn = $<HTMLButtonElement>('fc-got');
  const endBtn = $<HTMLButtonElement>('fc-end');

  let store = loadStore(storeKey);
  let queue: string[] = [];
  let current: string | null = null;
  let revealed = false;
  let sessionIds: string[] = [];
  let gotCount = 0;
  const misses = new Map<string, number>();

  function selection(): Card[] {
    return d.cards.filter((c) =>
      (groupSel.value === '' || c.g === groupSel.value) &&
      (!coreOnly?.checked || !c.sup) &&
      (!unknownOnly.checked || store.cards[c.id]?.k !== 1));
  }

  function refreshSetup(): void {
    const n = selection().length;
    countEl.textContent = n === 0
      ? (unknownOnly.checked ? 'You have marked every card in this selection “Got it”. Untick “Only cards I have not got yet” to go through them again.' : 'No cards match this selection.')
      : `${n} card${n === 1 ? '' : 's'} selected.`;
    startBtn.disabled = n === 0;
    const scope = d.cards.filter((c) => (groupSel.value === '' || c.g === groupSel.value) && (!coreOnly?.checked || !c.sup));
    const known = scope.filter((c) => store.cards[c.id]?.k === 1).length;
    knownEl.textContent = known > 0 ? `In this browser you have marked ${known} of these ${scope.length} cards “Got it”.` : '';
    resetBtn.hidden = Object.keys(store.cards).length === 0;
  }

  function show(id: string): void {
    const c = byId.get(id)!;
    current = id;
    revealed = false;
    groupEl.textContent = groupLabel.get(c.g) ?? '';
    tierEl.hidden = !(d.tiered && c.sup);
    frontEl.textContent = c.f;
    backEl.textContent = c.b;
    backWrap.hidden = true;
    gradeRow.hidden = true;
    revealBtn.hidden = false;
    progressEl.textContent = `${gotCount} of ${sessionIds.length} got · ${queue.length + 1} card${queue.length ? 's' : ''} left to go through`;
    revealBtn.focus();
  }

  function reveal(): void {
    if (!current || revealed) return;
    revealed = true;
    backWrap.hidden = false;
    revealBtn.hidden = true;
    gradeRow.hidden = false;
    gotBtn.focus();
  }

  function grade(got: boolean): void {
    if (!current || !revealed) return;
    const id = current;
    const today = new Date().toISOString().slice(0, 10);
    store.cards[id] = { k: got ? 1 : 0, t: today };
    saveStore(storeKey, store);
    if (got) gotCount++;
    else {
      const m = (misses.get(id) ?? 0) + 1;
      misses.set(id, m);
      const at = Math.max(0, Math.min(queue.length, Math.floor(requeueIndex(queue, m))));
      queue.splice(at, 0, id);
    }
    next();
  }

  function next(): void {
    const id = queue.shift();
    if (id) show(id);
    else finish();
  }

  function start(ids: string[]): void {
    if (ids.length === 0) return;
    sessionIds = ids;
    queue = ids.slice();
    misses.clear();
    gotCount = 0;
    setup.hidden = true;
    done.hidden = true;
    session.hidden = false;
    track('flashcards_start', { course_code: d.code, scope: d.scope, card_count: ids.length });
    next();
  }

  function finish(): void {
    current = null;
    session.hidden = true;
    done.hidden = false;
    const missed = sessionIds.filter((id) => misses.has(id));
    const first = sessionIds.length - missed.length;
    $('fc-done-summary').textContent = `${sessionIds.length} card${sessionIds.length === 1 ? '' : 's'}: ${first} got first time${missed.length ? `, ${missed.length} needed another go` : ''}.`;
    const list = $('fc-done-missed');
    list.replaceChildren(...missed.map((id) => {
      const li = document.createElement('li');
      li.textContent = `${byId.get(id)!.f.split('\n')[0]} (${groupLabel.get(byId.get(id)!.g) ?? ''})`;
      return li;
    }));
    $('fc-done-missed-wrap').hidden = missed.length === 0;
    $<HTMLButtonElement>('fc-again-missed').hidden = missed.length === 0;
    track('flashcards_complete', { course_code: d.code, scope: d.scope, card_count: sessionIds.length });
    const h = $('fc-done-heading');
    h.focus();
    lastMissed = missed;
  }

  let lastMissed: string[] = [];

  function begin(): void {
    const cards = selection();
    start((shuffle.checked ? shuffled(cards) : cards).map((c) => c.id));
  }

  // Deep link from a hub topic or the course page: ?group=<subtopic or topic slug>
  const wanted = new URLSearchParams(window.location.search).get('group');
  if (wanted && d.groups.some((g) => g.key === wanted)) groupSel.value = wanted;

  [groupSel, coreOnly, unknownOnly].forEach((x) => x?.addEventListener('change', refreshSetup));
  startBtn.addEventListener('click', begin);
  resetBtn.addEventListener('click', () => {
    if (!window.confirm('Clear your saved “Got it” marks for every card in this deck, in this browser?')) return;
    try { window.localStorage.removeItem(storeKey); } catch { /* ignore */ }
    store = { v: 1, cards: {} };
    refreshSetup();
  });
  revealBtn.addEventListener('click', reveal);
  againBtn.addEventListener('click', () => grade(false));
  gotBtn.addEventListener('click', () => grade(true));
  endBtn.addEventListener('click', finish);
  $<HTMLButtonElement>('fc-restart').addEventListener('click', () => { done.hidden = true; setup.hidden = false; refreshSetup(); startBtn.focus(); });
  $<HTMLButtonElement>('fc-again-missed').addEventListener('click', () => start(shuffle.checked ? shuffled(lastMissed) : lastMissed));

  document.addEventListener('keydown', (e) => {
    if (session.hidden || e.altKey || e.ctrlKey || e.metaKey) return;
    const t = e.target as HTMLElement | null;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA')) return;
    if (!revealed && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); reveal(); }
    else if (revealed && e.key === '1') { e.preventDefault(); grade(false); }
    else if (revealed && e.key === '2') { e.preventDefault(); grade(true); }
  });

  setup.hidden = false;
  $('fc-nojs').hidden = true;
  refreshSetup();
}
