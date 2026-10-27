/**
 * Page-2 boost (D-404, 8 Oct 2026).
 *
 * Study resources that Search Console (6 Sep-5 Oct 2026, D1
 * `mb-search-demand`) shows on Google's second page: average position
 * 10.5-20 with at least 25 impressions. Page 2 gets almost no clicks, and a
 * few more links from pages Google already ranks are one of the few levers
 * the site controls. relatedResources() gives at most ONE of its slots on a
 * resource page to a listed page of the SAME course (sameCourse()), so the
 * link is always relevant and the D-322 ring of sibling links keeps its
 * other slots.
 *
 * Review this list when the next Search Console comparison is run: pages
 * that reach page 1 should leave it, and new page-2 pages can join.
 *
 * Refreshed 27 Oct 2026 (D-434) from Search Console 9-23 Oct: 17 of the 25
 * original pages averaged position 10 or better and left the list; the 8
 * still below page 1 stay, and 17 new page-2 pages (position 10.5-20, 25 or
 * more impressions) join. If a page that left slips back below position 10
 * at the next check, put it back.
 */
export const PAGE_TWO_RESOURCES: ReadonlySet<string> = new Set([
  'ib-dp-mathematics-aa-hl-further-functions',
  'a-electrochemistry-electrolysis-and-electrode-potentials',
  'edexcel-ial-physics-electric-circuits-practice',
  'ib-myp-individuals-and-societies-syllabus-guide',
  'igcse-accounting-analysis-revision-notes',
  'aqa-gcse-chemistry-exam-preparation',
  'edexcel-ial-chemistry-exam-preparation',
  'edexcel-igcse-english-language-revision-notes',
  // Added 27 Oct 2026 (D-434).
  'ib-dp-environmental-systems-and-societies-syllabus-guide',
  'edexcel-igcse-chemistry-4ch1-atomic-structure-and-the-periodic-table-revision-notes',
  'ib-myp-individuals-and-societies-global-contexts-revision-notes',
  'ib-myp-design-criteria-in-practice-revision-notes',
  'ib-dp-language-b-paper-1-writing-text-types',
  'o-level-commerce-commercial-operations-revision-notes',
  'edexcel-ial-mathematics-the-normal-distribution-standardising-tables-and',
  'ib-dp-geography-subject-guide',
  'environmental-management-land-revision-notes',
  'edexcel-igcse-economics-exam-preparation',
  'ib-dp-economics-syllabus-guide',
  'edexcel-ial-mathematics-sequences-and-series-arithmetic-geometric-and-the-revision-notes',
  'ib-dp-business-management-finance-accounts',
  'edexcel-ial-physics-mechanics-revision-notes',
  'ib-dp-chemistry-electron-sharing-reactions',
  'ib-dp-chemistry-energy-cycles-in-reactions',
  'a-level-biology-9700-photosynthesis-practice',
]);
