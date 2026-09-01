// scripts/growth/types.mjs
// Normalized data interfaces for the Marlbridge growth engine (Search
// Console demand engine + conversion/practice analytics), per the Search
// Intelligence & Demand-Led Growth Programme (docs/programme-register.md).
//
// Design rule: analysis code in this directory consumes ONLY these shapes.
// It never reads a GSC-CSV-specific or GA4-CSV-specific field directly.
// That keeps the analysis engine reusable across import paths --
// CSV export today, a live GSC/GA4 API or a connector (e.g. Supermetrics)
// later -- without touching gsc-opportunity-report.mjs or its callers.
// See docs/growth/README.md for the full architecture note.

/**
 * @typedef {Object} SearchPerformanceRecord
 * @property {string} date            ISO date (YYYY-MM-DD), or a period label
 *                                     like "last28" if the export is pre-aggregated
 * @property {string} query
 * @property {string} page             the URL Google actually ranks for this query
 * @property {string} [country]
 * @property {string} [device]
 * @property {string} [searchAppearance]
 * @property {number} clicks
 * @property {number} impressions
 * @property {number} ctr              0-1, not a percentage string
 * @property {number} position
 */

/**
 * @typedef {Object} ConversionEvent
 * @property {string} date             ISO date, or a period label
 * @property {string} eventName        e.g. "generate_lead", "whatsapp_click",
 *                                      "teacher_support_click", "practice_start"
 * @property {string} [page]
 * @property {string} [subjectSlug]
 * @property {string} [boardSlug]
 * @property {string} [qualificationSlug]
 * @property {string} [specificationCode]
 * @property {string} [source]         e.g. "resource", "practice", "hub"
 * @property {number} count
 */

/**
 * @typedef {Object} IndexingPageRecord
 * @property {string} url
 * @property {string} reason           GSC's own "Why pages aren't indexed" label,
 *                                      verbatim (e.g. "Crawled - currently not indexed")
 * @property {string} [lastCrawled]
 */

export const OPPORTUNITY_TYPES = /** @type {const} */ ([
  'QUICK_WIN',
  'CTR_OPPORTUNITY',
  'NEAR_PAGE_ONE',
  'EMERGING_DEMAND',
  'QUERY_PAGE_MISMATCH',
  'CANNIBALIZATION',
  'CONTENT_GAP',
  'LOW_PRIORITY',
]);

export const FLAGSHIP_CODES = ['0620', '0625', '0580', '9701', '9702'];
