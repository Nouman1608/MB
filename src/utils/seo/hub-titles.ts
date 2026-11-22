/**
 * Search titles for the subject hubs (/subjects/<slug>/) and board hubs
 * (/boards/<board>/). Their visible headings are one word or a name
 * ("Biology", "Cambridge"), which is right on the page but says little in a
 * search result. These add the qualifications the page actually covers,
 * read from the same published-course list the page renders.
 *
 * Both are hubs of free study material, so the title says "Resources". The
 * tuition pages (/tutoring/, /pricing/, /programs/, the regional pages)
 * keep "Tuition" to themselves.
 *
 * A subject's own `seoTitle` still wins where an editor has written one.
 * Pure functions: the page passes in the qualification names it already has.
 */
export const HUB_TITLE_TARGET = 60;

/** Canonical order, and the short form each qualification takes in a title. */
const SHORT: readonly [name: string, short: string][] = [
  ['IGCSE', 'IGCSE'],
  ['O Level', 'O Level'],
  ['GCSE', 'GCSE'],
  ['AS Level', 'AS Level'],
  ['A Level', 'A Level'],
  ['IB Middle Years Programme', 'IB MYP'],
  ['IB Diploma Programme', 'IB Diploma'],
];

const list = (xs: readonly string[]) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} & ${xs.at(-1)}`);

/**
 * ["A Level", "IGCSE", "IB Diploma Programme"] -> ["IGCSE", "A Level", "IB Diploma"].
 * AS Level is folded into A Level when both are present, and the two IB
 * programmes into "IB". Names this list does not know are kept as given.
 */
export function shortQualifications(names: readonly string[], opts: { compactIb?: boolean } = {}): string[] {
  const present = new Set(names);
  const known = SHORT.filter(([name]) => present.has(name));
  const out = known.map(([, short]) => short).filter((s) => !(s === 'AS Level' && present.has('A Level')));
  const ib = out.filter((s) => s.startsWith('IB '));
  const merged = ib.length > 1 || (opts.compactIb && ib.length > 0) ? [...out.filter((s) => !s.startsWith('IB ')), 'IB'] : out;
  const unknown = [...present].filter((n) => !SHORT.some(([name]) => name === n));
  return [...merged, ...unknown];
}

/** The first candidate within the target length, else the shortest. */
const fit = (candidates: readonly string[]) =>
  candidates.find((c) => c.length <= HUB_TITLE_TARGET) ?? candidates.reduce((a, b) => (b.length < a.length ? b : a));

/**
 * "IGCSE, O Level, GCSE, A Level & IB Biology Resources".
 * A subject that belongs to one IB programme and says so in its own name
 * ("Sciences (MYP)") is not given the programme twice.
 */
export function subjectHubTitle(subject: string, qualificationNames: readonly string[], seoTitle?: string): string {
  if (seoTitle) return seoTitle;
  const full = shortQualifications(qualificationNames);
  const compact = shortQualifications(qualificationNames, { compactIb: true });
  if (full.length === 0) return `${subject} Study Resources`;
  if (full.length === 1 && new RegExp(`\\b${full[0].replace(/^IB /, '')}\\b`).test(subject)) return `IB ${subject} Resources`;
  return fit([
    `${list(full)} ${subject} Resources`,
    `${list(compact)} ${subject} Resources`,
    `${subject} Study Resources`,
  ]);
}

/**
 * /resources/<type>/<subject>/ -- "IGCSE, O Level & A Level Accounting Study Guides".
 * `type` is the category's own label ("Study Guides"); the qualifications are
 * those of the courses that have at least one resource in this list.
 */
export function resourceListingTitle(subject: string, type: string, qualificationNames: readonly string[]): string {
  const plain = `${subject} ${type}`;
  const full = shortQualifications(qualificationNames);
  const compact = shortQualifications(qualificationNames, { compactIb: true });
  if (full.length === 0) return plain;
  if (full.length === 1 && new RegExp(`\\b${full[0].replace(/^IB /, '')}\\b`).test(subject)) return `IB ${plain}`;
  return fit([`${list(full)} ${plain}`, `${list(compact)} ${plain}`, plain]);
}

/** "Cambridge IGCSE, O Level & A Level Subjects and Resources". */
export function boardHubTitle(board: string, qualificationNames: readonly string[]): string {
  // On a board page the board is already named, so its programmes drop the "IB" prefix and stay separate.
  const quals = shortQualifications(qualificationNames.map((n) => n.replace(/^IB (.+) Programme$/, '$1'))).map((q) => q.replace(/^Middle Years$/, 'MYP'));
  return fit([
    ...(quals.length > 0 ? [`${board} ${list(quals)} Subjects and Resources`, `${board} ${list(quals)} Subjects`] : []),
    `${board} Qualifications and Subjects`,
  ]);
}
