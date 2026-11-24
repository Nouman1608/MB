/**
 * D-482 -- search title (<title>) for an advanced-course resource page.
 *
 * Page titles follow "<Topic>: <Type> (<Course> <n.n>)", which Google cuts
 * off past about 60 characters (2,140 of 3,270 on 16 Nov 2026). In order:
 * 1. a hand-written `seoTitle` in the page's frontmatter, if present;
 * 2. the same words reordered course-first with a short type,
 *    "<Course> <n.n> <Topic> <Short type>", when that fits in 60 characters;
 * 3. otherwise the full title, unchanged.
 * Every result starts with "AP" (audit 3, item 28): titles over 60 characters are accepted (D-529).
 * The on-page heading always stays the full title.
 */
const SHORT_TYPE: Record<string, string> = {
  'Practice Questions': 'Practice',
  'Topic Checklist': 'Checklist',
  'Revision Notes': 'Notes',
  'Study Guide': 'Guide',
  'Mixed Unit Review': 'Unit Review',
  'Unit Diagnostic': 'Diagnostic',
  'Worked Solutions': 'Solutions',
};

const PATTERN = /^(.*): ([A-Z][\w ]+?) \((.+?) ((?:Unit )?\d+(?:\.\d+)?)\)$/;

export const SEARCH_TITLE_MAX = 60;

/** Audit 3 item 28: every AP search title starts with "AP" (hand-written seoTitles and fallbacks included). */
const withAp = (t: string): string => (/^AP\b/.test(t) ? t : `AP ${t}`);

export function apSearchTitle(title: string, seoTitle?: string): string {
  if (seoTitle) return withAp(seoTitle);
  const m = PATTERN.exec(title);
  if (m) {
    const [, topic, type, course, num] = m;
    const short = SHORT_TYPE[type] ?? type;
    // D-527 (owner, 24 Nov 2026): the AP name may appear in titles, and people search "AP Chemistry ...".
    // Best form that fits in 60 characters: "AP <course> <n>: <topic> <type>", then the short type.
    const what = topic === type ? type : `${topic} ${type}`;
    const whatShort = topic === type ? short : `${topic} ${short}`;
    const candidates = [
      `AP ${course} ${num}: ${what}`,
      `AP ${course} ${num}: ${whatShort}`,
      `AP ${course} ${num} ${whatShort}`,
    ];
    const fit = candidates.find((c) => c.length <= SEARCH_TITLE_MAX);
    if (fit) return fit;
    // No AP form fits: keep the earlier behaviour (course-first short form, else the full title).
    const old = `AP ${course} ${num} ${topic} ${short}`;
    return old.length <= SEARCH_TITLE_MAX ? old : withAp(title);
  }
  return withAp(title);
}
