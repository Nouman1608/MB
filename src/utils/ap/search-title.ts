/**
 * D-482 -- search title (<title>) for an advanced-course resource page.
 *
 * Page titles follow "<Topic>: <Type> (<Course> <n.n>)", which Google cuts
 * off past about 60 characters (2,140 of 3,270 on 16 Nov 2026). In order:
 * 1. a hand-written `seoTitle` in the page's frontmatter, if present;
 * 2. the same words reordered course-first with a short type,
 *    "<Course> <n.n> <Topic> <Short type>", when that fits in 60 characters;
 * 3. otherwise the full title, unchanged.
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

export function apSearchTitle(title: string, seoTitle?: string): string {
  if (seoTitle) return seoTitle;
  if (title.length <= SEARCH_TITLE_MAX) return title;
  const m = PATTERN.exec(title);
  if (!m) return title;
  const [, topic, type, course, num] = m;
  const short = `${course} ${num} ${topic} ${SHORT_TYPE[type] ?? type}`;
  return short.length <= SEARCH_TITLE_MAX ? short : title;
}
