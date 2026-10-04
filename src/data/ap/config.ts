/**
 * Advanced-course (College Board AP) resource library -- publication switch.
 *
 * The library is built and fully integrated, but it is NOT public. College Board's
 * trademark guidelines (https://privacy.collegeboard.org/copyright-trademark/guidelines,
 * checked 2026-10-05) say third-party use of its marks needs prior written consent, and
 * that the marks must not be used in domain names, web addresses or meta tags. Adding a
 * disclaimer does not replace permission. See docs/ap-library/editorial-integration-note.md.
 *
 * While AP_LIBRARY_PUBLIC is false:
 *   - no /advanced-course-resources/ page is built in a normal (production) build;
 *   - nothing links to the library, and the sitemap excludes it;
 *   - a preview build (MB_PREVIEW_DRAFTS=1) builds every page with noindex and a
 *     "not published" banner, for owner and teacher review.
 *
 * Turn this on only after the owner has (a) permission or written legal advice on the
 * College Board marks and (b) decided which pages are ready (editorialStatus).
 */
export const AP_LIBRARY_PUBLIC = false;

/** Route prefix. Deliberately neutral: no College Board mark in any URL. */
export const AP_LIBRARY_BASE = '/advanced-course-resources/';

/** Same switch as src/utils/content/media.ts previewDrafts(), read without importing astro:content. */
export const apPreviewBuild = (): boolean => process.env.MB_PREVIEW_DRAFTS === '1';

/** Whether library routes are generated in this build. */
export const apLibraryBuilt = (): boolean => AP_LIBRARY_PUBLIC || apPreviewBuild();

/**
 * Trademark attribution shown at the foot of every library page that uses a College
 * Board mark (wording follows the form College Board's guidelines specify).
 */
export const AP_TRADEMARK_ATTRIBUTION =
  'AP® and Advanced Placement® are trademarks registered by the College Board, which is not affiliated with, and does not endorse, this website.';

/**
 * Metadata wording. College Board's guidelines ask third parties not to use its marks in
 * meta tags, so <title>, meta description, Open Graph and JSON-LD names use the neutral
 * form ("Chemistry (advanced course)") unless the owner records a permission that says
 * otherwise and flips this switch. Visible headings use the referential "Marlbridge guide
 * to AP® Chemistry" form the guidelines give as an example.
 */
export const AP_MARK_IN_METADATA = false;
