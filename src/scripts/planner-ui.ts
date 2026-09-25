/**
 * D-286 -- the revision planner's browser UI (/revision-planner/).
 *
 * State lives in one object, is saved to localStorage under STORE_KEY, and
 * is never sent anywhere: no network request carries it, no URL contains
 * it, and analytics receives only counts (subjects, weeks, whether the plan
 * fits). All visitor-entered or catalogue text is inserted with
 * textContent, never as HTML.
 *
 * Accepted URL parameters (public catalogue ids only, validated against the
 * catalogue before use):
 *   ?course=cambridge/igcse/chemistry   add this course
 *   &from=diagnostic                    pre-fill topic ratings from this
 *                                        browser's saved diagnostic results
 */
import { loadCatalogue, loadCourse, courseLabel, track, type CatalogueEntry, type CourseDetail } from './catalogue-client';
import { generatePlan, kindLabel, fmt, type Plan, type PlanInput, type SubjectInput, type Session, type Link } from './planner-engine';

const STORE_KEY = 'mb-revision-planner-v1';
const MAX_SUBJECTS = 6;

interface TopicState { slug: string; name: string; confidence: number | null; difficult: boolean }
interface SubjectState {
  id: string;
  label: string;
  code?: string;
  examDate: string | null;
  unknownDate: boolean;
  topics: TopicState[];
}
interface Stored {
  v: 1;
  subjects: SubjectState[];
  weekdayMinutes: number[];
  sessionMinutes: number;
  breakMinutes: number;
  horizonWeeks: number;
  start: string;
  plan: Plan | null;
  savedAt?: string;
}

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const form = $('planner-form') as unknown as HTMLFormElement;
if (form) init();

function load(): Stored | null {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Stored;
    return s && s.v === 1 && Array.isArray(s.subjects) ? s : null;
  } catch {
    return null;
  }
}

function save(state: Stored): boolean {
  try {
    state.savedAt = new Date().toISOString();
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function todayLocal(): string {
  const d = new Date();
  return fmt(new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())));
}

function prettyDate(iso: string, opts: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' }): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(undefined, { ...opts, timeZone: 'UTC' }).format(new Date(Date.UTC(y, m - 1, d)));
}

/** Diagnostic results saved by /practice/{code}/diagnostic/ (see diagnostic-ui.ts). */
function diagnosticRatings(code: string | undefined): Map<string, number> {
  const out = new Map<string, number>();
  if (!code) return out;
  try {
    const raw = localStorage.getItem(`mb-diagnostic-${code}`);
    if (!raw) return out;
    const data = JSON.parse(raw) as { sets?: Record<string, { topics?: Record<string, { awarded: number; max: number }> }> };
    for (const set of Object.values(data.sets ?? {})) {
      for (const [slug, r] of Object.entries(set.topics ?? {})) {
        if (!r || !r.max) continue;
        const ratio = r.awarded / r.max;
        out.set(slug, ratio >= 1 ? 4 : ratio >= 0.5 ? 2 : 1);
      }
    }
  } catch { /* ignore */ }
  return out;
}

function init(): void {
  const qSel = $<HTMLSelectElement>('pl-q');
  const bSel = $<HTMLSelectElement>('pl-b');
  const sSel = $<HTMLSelectElement>('pl-s');
  const addBtn = $<HTMLButtonElement>('pl-add');
  const addStatus = $('pl-add-status');
  const list = $<HTMLOListElement>('pl-subjects');
  const empty = $('pl-empty');
  const errors = $('pl-errors');
  const output = $('plan');
  const summary = $('pl-summary');
  const warningsBox = $('pl-warnings');
  const weeksOut = $('pl-weeks-out');
  const savedMsg = $('pl-saved');
  const startInput = $<HTMLInputElement>('pl-start');
  const sessionSel = $<HTMLSelectElement>('pl-session');
  const breakSel = $<HTMLSelectElement>('pl-break');
  const weeksSel = $<HTMLSelectElement>('pl-weeks');
  const daySels = [...document.querySelectorAll<HTMLSelectElement>('[data-day]')];

  let catalogue: CatalogueEntry[] = [];
  const details = new Map<string, CourseDetail | null>();
  const stored = load();
  const state: Stored = stored ?? {
    v: 1, subjects: [], weekdayMinutes: daySels.map((s) => Number(s.value)),
    sessionMinutes: 45, breakMinutes: 10, horizonWeeks: 8, start: todayLocal(), plan: null,
  };

  // Restore the time inputs.
  daySels.forEach((s, i) => { if (state.weekdayMinutes[i] !== undefined) s.value = String(state.weekdayMinutes[i]); });
  sessionSel.value = String(state.sessionMinutes);
  breakSel.value = String(state.breakMinutes);
  weeksSel.value = String(state.horizonWeeks);
  startInput.value = state.start && state.start >= todayLocal() ? state.start : todayLocal();

  const persist = (msg?: string) => {
    const ok = save(state);
    savedMsg.textContent = ok ? (msg ?? 'Saved on this device.') : 'Could not save in this browser (private mode or storage blocked). Your plan still works while this page is open.';
  };

  const readTime = () => {
    state.weekdayMinutes = daySels.map((s) => Number(s.value) || 0);
    state.sessionMinutes = Number(sessionSel.value) || 45;
    state.breakMinutes = Number(breakSel.value) || 10;
    state.horizonWeeks = Number(weeksSel.value) || 8;
    state.start = startInput.value || todayLocal();
  };
  [...daySels, sessionSel, breakSel, weeksSel, startInput].forEach((x) => x.addEventListener('change', () => { readTime(); persist(); }));

  /* ---------- course picker ---------- */

  const fill = (sel: HTMLSelectElement, placeholder: string, items: { value: string; label: string }[]) => {
    sel.replaceChildren(new Option(placeholder, ''));
    items.forEach((it) => sel.append(new Option(it.label, it.value)));
    sel.disabled = items.length === 0;
  };
  const ensureCatalogue = async () => {
    if (catalogue.length) return true;
    addStatus.textContent = 'Loading courses…';
    catalogue = await loadCatalogue();
    addStatus.textContent = catalogue.length ? '' : 'Courses could not be loaded. Check your connection and try again.';
    return catalogue.length > 0;
  };
  qSel.addEventListener('change', async () => {
    addBtn.disabled = true;
    fill(sSel, 'Choose a board first', []);
    if (!qSel.value || !(await ensureCatalogue())) { fill(bSel, 'Choose a qualification first', []); return; }
    const boards = [...new Map(catalogue.filter((e) => e.qs === qSel.value).map((e) => [e.bs, e.b])).entries()];
    fill(bSel, 'Choose…', boards.map(([value, label]) => ({ value, label })));
    if (boards.length === 1) { bSel.value = boards[0][0]; bSel.dispatchEvent(new Event('change')); }
  });
  bSel.addEventListener('change', () => {
    addBtn.disabled = true;
    const subs = catalogue.filter((e) => e.qs === qSel.value && e.bs === bSel.value);
    fill(sSel, bSel.value ? 'Choose…' : 'Choose a board first', subs.map((e) => ({ value: e.id, label: e.code ? `${e.s} (${e.code})` : e.s })));
  });
  sSel.addEventListener('change', () => { addBtn.disabled = !sSel.value; });

  const addCourse = async (id: string, fromDiagnostic = false) => {
    if (!(await ensureCatalogue())) return;
    const entry = catalogue.find((e) => e.id === id);
    if (!entry) return;
    if (state.subjects.some((s) => s.id === id)) { addStatus.textContent = `${courseLabel(entry)} is already in your plan.`; return; }
    if (state.subjects.length >= MAX_SUBJECTS) { addStatus.textContent = `You can plan up to ${MAX_SUBJECTS} subjects at once.`; return; }
    addStatus.textContent = 'Loading topics…';
    const detail = await loadCourse(id);
    details.set(id, detail);
    const ratings = fromDiagnostic ? diagnosticRatings(entry.code) : new Map<string, number>();
    state.subjects.push({
      id,
      label: courseLabel(entry),
      code: entry.code,
      examDate: null,
      unknownDate: false,
      topics: (detail?.topics ?? []).map((t) => ({
        slug: t.slug,
        name: `${t.number}. ${t.name}`,
        confidence: ratings.get(t.slug) ?? null,
        difficult: (ratings.get(t.slug) ?? 5) <= 1,
      })),
    });
    addStatus.textContent = detail
      ? `${courseLabel(entry)} added${ratings.size ? `, with ratings from your diagnostic for ${ratings.size} ${ratings.size === 1 ? 'topic' : 'topics'}` : ''}.`
      : `${courseLabel(entry)} added. Its topic list could not be loaded, so the plan will use whole-course sessions.`;
    renderSubjects();
    persist();
  };
  addBtn.addEventListener('click', () => { if (sSel.value) void addCourse(sSel.value); });

  /* ---------- subject cards ---------- */

  function renderSubjects(): void {
    list.replaceChildren();
    empty.hidden = state.subjects.length > 0;
    state.subjects.forEach((s, idx) => {
      const li = el('li', 'm-0 rounded-sm border border-rule bg-white p-[clamp(16px,2vw,24px)]');
      const head = el('div', 'flex flex-wrap items-start justify-between gap-3');
      head.append(el('h3', 'm-0 text-[18px] font-semibold tracking-[-0.01em] text-navy-800', s.label));
      const rm = el('button', 'min-h-11 rounded-sm px-3 text-[14px] text-error underline underline-offset-2', 'Remove');
      rm.type = 'button';
      rm.setAttribute('aria-label', `Remove ${s.label}`);
      rm.addEventListener('click', () => { state.subjects.splice(idx, 1); renderSubjects(); persist(); });
      head.append(rm);
      li.append(head);

      const dateRow = el('div', 'mt-3 flex flex-wrap items-end gap-x-6 gap-y-3');
      const dWrap = el('div', 'grid gap-1.5');
      const dId = `pl-exam-${idx}`;
      const dl = el('label', 'text-[13.5px] font-medium', 'Exam date (first paper)');
      dl.htmlFor = dId;
      const di = el('input', 'min-h-11 rounded-sm border border-rule bg-white px-3 text-[15px] disabled:bg-ivory');
      di.type = 'date';
      di.id = dId;
      di.value = s.examDate ?? '';
      di.disabled = s.unknownDate;
      di.addEventListener('change', () => { s.examDate = di.value || null; persist(); });
      dWrap.append(dl, di);
      const uWrap = el('label', 'flex min-h-11 items-center gap-2 text-[14.5px]');
      const ui = el('input', 'h-5 w-5');
      ui.type = 'checkbox';
      ui.checked = s.unknownDate;
      ui.addEventListener('change', () => {
        s.unknownDate = ui.checked;
        di.disabled = ui.checked;
        if (ui.checked) { s.examDate = null; di.value = ''; }
        persist();
      });
      uWrap.append(ui, document.createTextNode("I don't know the date yet"));
      dateRow.append(dWrap, uWrap);
      li.append(dateRow);

      if (s.topics.length === 0) {
        li.append(el('p', 'm-0 mt-3 text-[14px] text-ink-mute', 'Marlbridge does not hold a topic list for this course yet, so the plan uses whole-course sessions linked to its free material.'));
      } else {
        const det = el('details', 'mt-4');
        det.open = s.topics.length <= 12;
        const sum = el('summary', 'min-h-11 cursor-pointer py-2 text-[15px] font-medium text-navy-800', `Rate your ${s.topics.length} topics`);
        det.append(sum);
        const hint = el('p', 'm-0 mb-3 text-[13.5px] text-ink-mute', 'Leave a topic as "Not rated" if you are unsure; it is treated as 3.');
        det.append(hint);
        if (s.code && diagnosticRatings(s.code).size > 0) {
          const imp = el('button', 'mb-3 min-h-11 rounded-sm border border-gold-500 bg-ivory px-4 text-[14px] font-medium', 'Use my diagnostic results');
          imp.type = 'button';
          imp.addEventListener('click', () => {
            const r = diagnosticRatings(s.code);
            s.topics.forEach((t) => { if (r.has(t.slug)) { t.confidence = r.get(t.slug)!; t.difficult = r.get(t.slug)! <= 1; } });
            renderSubjects();
            persist('Ratings updated from your diagnostic and saved on this device.');
          });
          det.append(imp);
        }
        const tl = el('ul', 'm-0 grid list-none gap-2 p-0');
        s.topics.forEach((t, ti) => {
          const row = el('li', 'm-0 grid items-center gap-2 border-t border-rule pt-2 sm:grid-cols-[1fr_auto_auto] sm:gap-4');
          const id = `pl-t-${idx}-${ti}`;
          const lab = el('label', 'text-[14.5px] text-ink', t.name);
          lab.htmlFor = id;
          const sel = el('select', 'min-h-11 rounded-sm border border-rule bg-white px-2 text-[14.5px]');
          sel.id = id;
          [['', 'Not rated'], ['1', '1 — very weak'], ['2', '2 — weak'], ['3', '3 — OK'], ['4', '4 — good'], ['5', '5 — confident']]
            .forEach(([v, l]) => sel.append(new Option(l, v)));
          sel.value = t.confidence ? String(t.confidence) : '';
          sel.addEventListener('change', () => { t.confidence = sel.value ? Number(sel.value) : null; persist(); });
          const dLab = el('label', 'flex min-h-11 items-center gap-2 text-[14px]');
          const dCb = el('input', 'h-5 w-5');
          dCb.type = 'checkbox';
          dCb.checked = t.difficult;
          dCb.addEventListener('change', () => { t.difficult = dCb.checked; persist(); });
          dLab.append(dCb, document.createTextNode('I find this difficult'));
          row.append(lab, sel, dLab);
          tl.append(row);
        });
        det.append(tl);
        li.append(det);
      }
      list.append(li);
    });
  }

  /* ---------- building the engine input ---------- */

  const linksOfKind = (d: CourseDetail | null, slug: string, k: 'learn' | 'practice' | 'review'): Link[] =>
    (d?.topics.find((t) => t.slug === slug)?.res ?? []).filter((r) => r.k === k).map((r) => ({ t: r.t, u: r.u }));

  const buildInput = async (): Promise<PlanInput> => {
    readTime();
    await ensureCatalogue();
    const subjects: SubjectInput[] = [];
    for (const s of state.subjects) {
      let d = details.get(s.id);
      if (d === undefined) { d = await loadCourse(s.id); details.set(s.id, d); }
      const entry = catalogue.find((e) => e.id === s.id);
      const practiceLinks: Link[] = [];
      for (const dg of entry?.diagnostics ?? []) practiceLinks.push({ t: `10-minute diagnostic: ${dg.label}`, u: dg.url });
      if (entry?.practice) practiceLinks.push({ t: 'Self-check practice questions', u: entry.practice });
      (d?.general ?? []).filter((r) => r.k === 'practice').slice(0, 2).forEach((r) => practiceLinks.push({ t: r.t, u: r.u }));
      subjects.push({
        id: s.id,
        label: s.label,
        examDate: s.unknownDate ? null : s.examDate,
        practiceLinks,
        checklist: entry?.checklist ?? entry?.hub,
        topics: s.topics.map((t) => ({
          slug: t.slug, name: t.name, confidence: t.confidence, difficult: t.difficult,
          learn: linksOfKind(d ?? null, t.slug, 'learn'),
          practice: linksOfKind(d ?? null, t.slug, 'practice'),
          review: linksOfKind(d ?? null, t.slug, 'review'),
        })),
      });
    }
    return {
      start: state.start, weekdayMinutes: state.weekdayMinutes, sessionMinutes: state.sessionMinutes,
      breakMinutes: state.breakMinutes, horizonWeeks: state.horizonWeeks, subjects,
    };
  };

  const validate = (): string[] => {
    const errs: string[] = [];
    if (state.subjects.length === 0) errs.push('Add at least one subject.');
    for (const s of state.subjects) {
      if (!s.unknownDate && !s.examDate) errs.push(`${s.label}: enter the exam date, or tick "I don't know the date yet".`);
      // D-332 -- a past (or same-day) exam date used to produce and save an
      // empty "everything fits" plan. Refuse it here, before anything is saved.
      else if (!s.unknownDate && s.examDate && s.examDate <= (state.start || todayLocal())) errs.push(`${s.label}: the exam date ${s.examDate} is not after the plan's start date. Check the year, or tick "I don't know the date yet".`);
    }
    if (state.weekdayMinutes.every((m) => m === 0)) errs.push('Choose some study time on at least one day.');
    return errs;
  };

  /* ---------- rendering the plan ---------- */

  const KIND_CLASS: Record<string, string> = {
    learn: 'bg-[#E8EEF7] text-navy-800',
    practice: 'bg-[#fff4d6] text-[#6b4b00]',
    review: 'bg-[#e6f4ea] text-[#1e5b33]',
    mixed: 'bg-[#f3e8f7] text-[#5b2a6b]',
    catchup: 'bg-ivory text-ink-mute',
  };

  function renderPlan(): void {
    const plan = state.plan;
    if (!plan) { output.classList.add('hidden'); return; }
    output.classList.remove('hidden');
    const hours = Math.round((plan.studyMinutes / 60) * 10) / 10;
    summary.textContent = `${prettyDate(plan.start, { day: 'numeric', month: 'long', year: 'numeric' })} to ${prettyDate(plan.end, { day: 'numeric', month: 'long', year: 'numeric' })} · ${plan.totalSessions} sessions · about ${hours} hours of study` +
      (plan.fits ? ' · everything fits.' : '.');

    warningsBox.replaceChildren();
    warningsBox.classList.toggle('hidden', plan.warnings.length === 0);
    if (plan.warnings.length) {
      warningsBox.append(el('p', 'm-0 mb-2 font-semibold text-navy-800', plan.fits ? 'Please check' : 'Not everything fits in the time you have'));
      const ul = el('ul', 'm-0 grid gap-1.5 pl-5 text-[14.5px] text-ink');
      plan.warnings.forEach((w) => ul.append(el('li', '', w)));
      warningsBox.append(ul);
      for (const s of plan.subjects.filter((x) => x.unscheduled.length)) {
        const det = el('details', 'mt-3 text-[14px]');
        det.append(el('summary', 'cursor-pointer font-medium text-navy-800', `${s.label}: ${s.unscheduled.length} sessions not scheduled`));
        const ul2 = el('ul', 'm-0 mt-2 grid gap-1 pl-5 text-ink-mute');
        s.unscheduled.forEach((u) => ul2.append(el('li', '', u)));
        det.append(ul2);
        warningsBox.append(det);
      }
    }

    weeksOut.replaceChildren();
    plan.weeks.forEach((w, wi) => {
      const sessions = w.days.reduce((n, d) => n + d.sessions.length, 0);
      if (sessions === 0) return;
      const done = w.days.reduce((n, d) => n + d.sessions.filter((s) => s.done).length, 0);
      const sec = el('section', 'pl-week rounded-sm border border-rule bg-white');
      const h = el('h3', 'm-0 border-b border-rule px-5 py-3 text-[16px] font-semibold text-navy-800', `Week ${wi + 1} · from ${prettyDate(w.start, { day: 'numeric', month: 'short' })}`);
      h.append(el('span', 'ml-2 text-[13px] font-normal text-ink-mute', `${done}/${sessions} done`));
      sec.append(h);
      const dl = el('div', 'divide-y divide-rule');
      w.days.forEach((d) => {
        if (d.sessions.length === 0) return;
        const day = el('div', 'pl-day grid gap-2 px-5 py-3 sm:grid-cols-[9rem_1fr]');
        day.append(el('p', 'm-0 text-[14px] font-medium text-ink', prettyDate(d.date)));
        const ul = el('ul', 'm-0 grid list-none gap-2 p-0');
        d.sessions.forEach((s) => ul.append(sessionRow(s, d.sessions)));
        day.append(ul);
        dl.append(day);
      });
      sec.append(dl);
      weeksOut.append(sec);
    });
  }

  function sessionRow(s: Session, siblings: Session[]): HTMLLIElement {
    const li = el('li', 'm-0 flex flex-wrap items-start gap-x-3 gap-y-1');
    const cb = el('input', 'mt-1 h-5 w-5 shrink-0');
    cb.type = 'checkbox';
    cb.checked = s.done;
    cb.setAttribute('aria-label', `Mark done: ${s.note ?? s.title}`);
    cb.addEventListener('change', () => { s.done = cb.checked; persist(); renderPlan(); });
    const body = el('div', 'min-w-0 flex-1');
    const line = el('p', `m-0 text-[14.5px] ${s.done ? 'text-ink-mute line-through' : 'text-ink'}`);
    line.append(el('span', `mr-2 inline-block rounded-sm px-1.5 py-0.5 text-[11.5px] font-medium uppercase tracking-[0.06em] ${KIND_CLASS[s.kind] ?? ''}`, kindLabel(s.kind)));
    if (s.subjectLabel) line.append(el('span', 'font-medium', `${s.subjectLabel} — `));
    line.append(document.createTextNode(s.note ?? s.title.replace(/^[^:]+:\s*/, '')));
    body.append(line);
    if (s.links.length && !s.note) {
      const links = el('p', 'm-0 mt-0.5 text-[13.5px]');
      s.links.forEach((l, i) => {
        if (i) links.append(document.createTextNode(' · '));
        const a = el('a', 'underline decoration-gold-500 underline-offset-2 hover:text-gold-600', l.t);
        a.href = l.u;
        a.addEventListener('click', () => track('recommended_resource_click', { source: 'planner', link_kind: s.kind }));
        links.append(a);
      });
      body.append(links);
    }
    const actions = el('div', 'pl-session-actions flex gap-2');
    const edit = el('button', 'min-h-9 rounded-sm px-2 text-[13px] text-navy-800 underline underline-offset-2', 'Edit');
    edit.type = 'button';
    edit.setAttribute('aria-label', `Edit session: ${s.note ?? s.title}`);
    edit.addEventListener('click', () => {
      const input = el('input', 'min-h-11 w-full rounded-sm border border-rule px-3 text-[14.5px]');
      input.type = 'text';
      input.maxLength = 140;
      input.value = s.note ?? s.title;
      input.setAttribute('aria-label', 'Session description');
      const ok = el('button', 'min-h-11 rounded-sm bg-navy-800 px-4 text-[14px] text-ivory', 'Save');
      ok.type = 'button';
      const finish = () => { const v = input.value.trim(); s.note = v && v !== s.title ? v : undefined; persist(); renderPlan(); };
      ok.addEventListener('click', finish);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); finish(); } if (e.key === 'Escape') renderPlan(); });
      body.replaceChildren(input, ok);
      body.className = 'flex min-w-0 flex-1 flex-wrap gap-2';
      input.focus();
    });
    const del = el('button', 'min-h-9 rounded-sm px-2 text-[13px] text-error underline underline-offset-2', 'Remove');
    del.type = 'button';
    del.setAttribute('aria-label', `Remove session: ${s.note ?? s.title}`);
    del.addEventListener('click', () => { siblings.splice(siblings.indexOf(s), 1); persist(); renderPlan(); });
    actions.append(edit, del);
    li.append(cb, body, actions);
    return li;
  }

  /* ---------- actions ---------- */

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    readTime();
    const errs = validate();
    errors.replaceChildren();
    errors.classList.toggle('hidden', errs.length === 0);
    if (errs.length) {
      const ul = el('ul', 'm-0 grid gap-1 pl-5');
      errs.forEach((x) => ul.append(el('li', '', x)));
      errors.append(ul);
      errors.focus?.();
      return;
    }
    const btn = $<HTMLButtonElement>('pl-generate');
    btn.disabled = true;
    btn.textContent = 'Making your plan…';
    try {
      const input = await buildInput();
      state.plan = generatePlan(input);
      // D-332 -- belt and braces: never save a plan that planned no subject.
      if (state.plan.subjects.length === 0) {
        errors.replaceChildren(el('p', 'm-0', state.plan.warnings[0] ?? 'No subject could be planned. Check the exam dates.'));
        errors.classList.remove('hidden');
        errors.focus?.();
        state.plan = null;
        renderPlan();
        return;
      }
      persist('Plan made and saved on this device.');
      renderPlan();
      track('revision_plan_generated', {
        subjects_count: state.subjects.length,
        weeks: state.plan.weeks.length,
        has_unknown_date: state.subjects.some((s) => s.unknownDate),
        plan_fits: state.plan.fits,
      });
      output.scrollIntoView({ behavior: 'smooth', block: 'start' });
      ($('pl-plan-heading') as HTMLElement).focus({ preventScroll: true });
    } finally {
      btn.disabled = false;
      btn.textContent = 'Make my plan';
    }
  });

  $('pl-print').addEventListener('click', () => window.print());
  $('pl-regenerate').addEventListener('click', () => { form.scrollIntoView({ behavior: 'smooth' }); qSel.focus({ preventScroll: true }); });
  $('pl-clear').addEventListener('click', () => {
    if (!window.confirm('Delete your saved subjects, ratings and plan from this browser?')) return;
    try { localStorage.removeItem(STORE_KEY); } catch { /* ignore */ }
    state.subjects = [];
    state.plan = null;
    renderSubjects();
    renderPlan();
    addStatus.textContent = 'Saved plan deleted from this browser.';
  });

  renderSubjects();
  renderPlan();
  if (state.savedAt && state.plan) savedMsg.textContent = `Saved on this device ${new Date(state.savedAt).toLocaleString()}.`;

  // URL prefill: only a catalogue id, validated by addCourse against the catalogue.
  const params = new URLSearchParams(window.location.search);
  const course = params.get('course');
  if (course && /^[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+$/.test(course)) {
    void addCourse(course, params.get('from') === 'diagnostic');
  }
}
