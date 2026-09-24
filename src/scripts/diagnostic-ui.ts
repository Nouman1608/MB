/**
 * D-286 -- browser logic for /practice/{code}/diagnostic/{set}/.
 *
 * Three phases: attempt (questions shown one at a time, answers optional and
 * never stored), mark (worked answers shown, the student awards their own
 * marks), results (per-topic summary, recommended resources, next actions).
 *
 * Storage, in this browser only:
 *   mb-practice-{code}   -- the practice page's existing store. Each question
 *                           is recorded as correct only when full marks were
 *                           awarded, so misses reach its weak-topic list and
 *                           error notebook.
 *   mb-diagnostic-{code} -- per-topic marks for the revision planner's
 *                           "Use my diagnostic results".
 *
 * Analytics: one `diagnostic_start` event when a run begins (the Start
 * button; D-329 -- without it a page view could not be told apart from a
 * genuine attempt) and one `diagnostic_complete` event per completed run,
 * with the course code, set, question count and, on completion, a duration
 * bucket. No marks, no answers, no topics.
 */
import { track } from './catalogue-client';

interface Q { id: string; qHtml: string; aHtml: string; marks: number; topicSlug: string; topicName: string; source: string; sourceTitle: string }
interface Rec { t: string; u: string; k: 'learn' | 'practice' | 'review' }
interface Data { code: string; set: string; courseId: string; questions: Q[]; recs: Record<string, Rec[]>; minutes: number }

const dataEl = document.getElementById('diag-data');
if (dataEl) init(JSON.parse(dataEl.textContent ?? '{}') as Data);

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

/** Question and answer HTML is built at build time from repository content (client-questions.ts escapes it). */
function trustedHtml(target: HTMLElement, html: string): void {
  target.innerHTML = html;
}

function init(d: Data): void {
  const $ = (id: string) => document.getElementById(id)!;
  const intro = $('diag-intro');
  const attempt = $('diag-attempt');
  const mark = $('diag-mark');
  const results = $('diag-results');
  const answerBox = $('diag-answer') as HTMLTextAreaElement;
  const timer = $('diag-timer');

  const answers: string[] = d.questions.map(() => '');
  const awarded: (number | null)[] = d.questions.map(() => null);
  let index = 0;
  let startedAt = 0;
  let tick: number | undefined;
  let completedOnce = false;
  let startedOnce = false;

  const show = (which: HTMLElement) => {
    for (const p of [intro, attempt, mark, results]) p.hidden = p !== which;
  };

  const fmtTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  const renderQuestion = () => {
    const q = d.questions[index];
    $('diag-progress').textContent = `Question ${index + 1} of ${d.questions.length}`;
    $('diag-qlabel').textContent = `${q.topicName} · ${q.marks} ${q.marks === 1 ? 'mark' : 'marks'}`;
    trustedHtml($('diag-question'), q.qHtml);
    answerBox.value = answers[index];
    ($('diag-prev') as HTMLButtonElement).disabled = index === 0;
    $('diag-next').textContent = index === d.questions.length - 1 ? 'Finish and see the answers' : 'Next question →';
  };

  $('diag-start').addEventListener('click', () => {
    index = 0;
    startedAt = Date.now();
    if (!startedOnce) {
      track('diagnostic_start', { course_code: d.code, diagnostic_set: d.set, question_count: d.questions.length });
      startedOnce = true;
    }
    window.clearInterval(tick);
    tick = window.setInterval(() => { timer.textContent = fmtTime(Date.now() - startedAt); }, 1000);
    show(attempt);
    renderQuestion();
    ($('diag-question') as HTMLElement).focus?.();
    attempt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  answerBox.addEventListener('input', () => { answers[index] = answerBox.value; });
  $('diag-prev').addEventListener('click', () => { if (index > 0) { index--; renderQuestion(); } });
  $('diag-next').addEventListener('click', () => {
    if (index < d.questions.length - 1) { index++; renderQuestion(); return; }
    window.clearInterval(tick);
    renderMarking();
    show(mark);
    ($('diag-mark-heading') as HTMLElement).focus();
  });

  function renderMarking(): void {
    const list = $('diag-mark-list');
    list.replaceChildren();
    d.questions.forEach((q, i) => {
      const li = el('li', 'm-0 rounded-sm border border-rule bg-white p-[clamp(18px,2.4vw,28px)]');
      li.append(el('p', 'm-0 mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-gold-600', `Question ${i + 1} · ${q.topicName} · ${q.marks} ${q.marks === 1 ? 'mark' : 'marks'}`));
      const qd = el('div', 'diag-prose text-[16px] leading-[1.6]');
      trustedHtml(qd, q.qHtml);
      li.append(qd);
      if (answers[i].trim()) {
        const yours = el('div', 'mt-3 rounded-sm bg-ivory p-3 text-[15px]');
        yours.append(el('p', 'm-0 mb-1 text-[12px] font-medium uppercase tracking-[0.08em] text-ink-mute', 'Your answer'));
        yours.append(el('p', 'm-0 whitespace-pre-wrap', answers[i]));
        li.append(yours);
      }
      li.append(el('p', 'm-0 mb-1 mt-4 text-[12px] font-medium uppercase tracking-[0.1em] text-gold-600', 'Worked answer'));
      const ad = el('div', 'diag-prose text-[15.5px] leading-[1.6]');
      trustedHtml(ad, q.aHtml);
      li.append(ad);
      const fs = el('fieldset', 'mt-4 border-0 p-0');
      fs.append(el('legend', 'mb-2 p-0 text-[14.5px] font-medium', `Self-assessed: how many marks do you award yourself for question ${i + 1}?`));
      const row = el('div', 'flex flex-wrap gap-2');
      for (let m = 0; m <= q.marks; m++) {
        const lab = el('label', 'flex min-h-11 min-w-11 cursor-pointer items-center justify-center gap-2 rounded-sm border border-rule px-3 text-[15px] has-[:checked]:border-navy-800 has-[:checked]:bg-navy-800 has-[:checked]:text-ivory');
        const r = el('input', 'sr-only');
        r.type = 'radio';
        r.name = `diag-m-${i}`;
        r.value = String(m);
        r.checked = awarded[i] === m;
        r.addEventListener('change', () => { awarded[i] = m; });
        lab.append(r, document.createTextNode(`${m}`));
        row.append(lab);
      }
      fs.append(row);
      li.append(fs);
      list.append(li);
    });
  }

  $('diag-finish').addEventListener('click', () => {
    const missing = awarded.map((a, i) => (a === null ? i + 1 : 0)).filter(Boolean);
    const err = $('diag-mark-error');
    if (missing.length) {
      err.textContent = `Choose a mark for question${missing.length > 1 ? 's' : ''} ${missing.join(', ')} (choose 0 if you did not answer it).`;
      err.classList.remove('hidden');
      const first = document.querySelector<HTMLInputElement>(`input[name="diag-m-${missing[0] - 1}"]`);
      first?.focus();
      return;
    }
    err.classList.add('hidden');
    renderResults();
    show(results);
    ($('diag-results-heading') as HTMLElement).focus();
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function renderResults(): void {
    const total = d.questions.reduce((n, q) => n + q.marks, 0);
    const got = awarded.reduce<number>((n, a) => n + (a ?? 0), 0);
    $('diag-total').textContent = `You awarded yourself ${got} of ${total} marks.`;

    // Per topic (one question each in these sets, but grouped in case a set ever samples a topic twice).
    const topics = new Map<string, { name: string; awarded: number; max: number }>();
    d.questions.forEach((q, i) => {
      const t = topics.get(q.topicSlug) ?? { name: q.topicName, awarded: 0, max: 0 };
      t.awarded += awarded[i] ?? 0;
      t.max += q.marks;
      topics.set(q.topicSlug, t);
    });
    const sorted = [...topics.entries()].sort((a, b) => a[1].awarded / a[1].max - b[1].awarded / b[1].max);
    const list = $('diag-topic-list');
    list.replaceChildren();
    for (const [slug, t] of sorted) {
      const ratio = t.awarded / t.max;
      const status = ratio >= 1 ? 'Full marks on this question' : ratio >= 0.5 ? 'Some gaps — practise this' : 'Needs practice';
      const cls = ratio >= 1 ? 'bg-[#e6f4ea] text-[#1e5b33]' : ratio >= 0.5 ? 'bg-[#fff4d6] text-[#6b4b00]' : 'bg-[#fbe9e7] text-[#9a3412]';
      const li = el('li', 'm-0 rounded-sm border border-rule bg-white p-4');
      const head = el('div', 'flex flex-wrap items-center justify-between gap-2');
      head.append(el('span', 'text-[15.5px] font-semibold text-navy-800', t.name));
      head.append(el('span', `rounded-sm px-2 py-0.5 text-[12.5px] font-medium ${cls}`, `${status} · ${t.awarded}/${t.max}`));
      li.append(head);
      if (ratio < 1 && d.recs[slug]?.length) {
        const ul = el('ul', 'm-0 mt-2 grid list-none gap-1 p-0 text-[14px]');
        for (const r of d.recs[slug]) {
          const a = el('a', 'underline decoration-gold-500 underline-offset-2 hover:text-gold-600', r.t);
          a.href = r.u;
          a.addEventListener('click', () => track('recommended_resource_click', { source: 'diagnostic', link_kind: r.k, course_code: d.code }));
          const item = el('li', 'm-0');
          item.append(el('span', 'mr-1 text-ink-mute', r.k === 'learn' ? 'Study guide:' : r.k === 'review' ? 'Revision notes:' : 'Practice:'), a);
          ul.append(item);
        }
        li.append(ul);
      }
      list.append(li);
    }
    const weakest = sorted.find(([, t]) => t.awarded < t.max);
    const next = $('diag-next-session');
    if (weakest) {
      const recs = d.recs[weakest[0]] ?? [];
      next.textContent = `Start with ${weakest[1].name}: read the ${recs.find((r) => r.k === 'learn') ? 'study guide' : 'notes'}, then try its practice questions. Plan about ${d.minutes * 3}–${d.minutes * 4} minutes.`;
    } else {
      next.textContent = 'Full marks on every question here. Try the other diagnostic for this syllabus, or practise mixed questions to test other topics.';
    }

    // Worked answers again, for review.
    const review = $('diag-review');
    review.replaceChildren();
    d.questions.forEach((q, i) => {
      const li = el('li', 'm-0 rounded-sm border border-rule bg-white p-4');
      li.append(el('p', 'm-0 mb-1 text-[12px] font-medium uppercase tracking-[0.1em] text-gold-600', `Question ${i + 1} · ${q.topicName} · you awarded ${awarded[i]}/${q.marks} (self-assessed)`));
      const qd = el('div', 'diag-prose text-[15px] leading-[1.6]');
      trustedHtml(qd, q.qHtml);
      const ad = el('div', 'diag-prose mt-2 border-s-2 border-gold-500 ps-3 text-[15px] leading-[1.6]');
      trustedHtml(ad, q.aHtml);
      const src = el('p', 'm-0 mt-2 text-[13px] text-ink-mute');
      const a = el('a', 'underline decoration-gold-500 underline-offset-2', q.sourceTitle);
      a.href = q.source;
      src.append(document.createTextNode('From: '), a);
      li.append(qd, ad, src);
      review.append(li);
    });

    // Save for the practice page and the planner -- this browser only.
    try {
      const key = `mb-practice-${d.code}`;
      const store = JSON.parse(localStorage.getItem(key) ?? '{"attempts":{}}');
      store.attempts ??= {};
      d.questions.forEach((q, i) => { store.attempts[q.id] = { correct: awarded[i] === q.marks, ts: Date.now(), timedMode: false }; });
      localStorage.setItem(key, JSON.stringify(store));
      const dkey = `mb-diagnostic-${d.code}`;
      const ds = JSON.parse(localStorage.getItem(dkey) ?? '{"sets":{}}');
      ds.sets ??= {};
      ds.sets[d.set] = { completedAt: new Date().toISOString(), topics: Object.fromEntries([...topics.entries()].map(([k, v]) => [k, { awarded: v.awarded, max: v.max }])) };
      localStorage.setItem(dkey, JSON.stringify(ds));
    } catch { /* storage blocked: results still show on this page */ }

    if (!completedOnce) {
      const mins = (Date.now() - startedAt) / 60000;
      track('diagnostic_complete', {
        course_code: d.code,
        diagnostic_set: d.set,
        question_count: d.questions.length,
        duration_bucket: mins < 5 ? '<5min' : mins < 10 ? '5-10min' : mins < 15 ? '10-15min' : '15min+',
      });
      completedOnce = true;
    }
  }

  $('diag-restart').addEventListener('click', () => {
    answers.fill('');
    awarded.fill(null);
    completedOnce = false;
    startedOnce = false;
    timer.textContent = '0:00';
    show(intro);
    intro.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
