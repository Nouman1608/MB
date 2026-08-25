# Lighthouse / PageSpeed Insights baseline — 2026-08-25

Real, on-demand Lighthouse run against production (`https://marlbridge.com/`)
via [pagespeed.web.dev](https://pagespeed.web.dev/), taken after the Aug
2026 SEO remediation (Phases 1, 2, 3, 5, 7, 10) was live. No CrUX field
data exists yet for this site ("Discover what your real users are
experiencing: No Data") — traffic volume is below the threshold Chrome UX
Report needs to publish real-user data, so these are lab scores only,
honestly reported as such rather than presented as field data.

## Homepage (`/`)

| | Mobile | Desktop |
|---|---|---|
| Performance | 92 | 98 |
| Accessibility | 96 | 96 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| Agentic Browsing | 3/3 | 3/3 |

Report timestamp: Aug 25, 2026, 10:48:08 PM.

## Notes

- This is a single homepage measurement, not a before/after comparison —
  no prior Lighthouse baseline was captured before this session's changes
  shipped, so there is nothing to diff against. This report is now the
  baseline for any future comparison.
- SEO and Best Practices already sit at the maximum score, consistent
  with this session's Phase 5 (metadata) and Phase 10 (structured data)
  audits both coming back clean.
- Performance is strong but not maximal on mobile (92) — worth a closer
  Lighthouse diagnostics pass (specific LCP/CLS/TBT figures, not just the
  top-line score) in a future session if squeezing the last few points is
  a priority; this run captured the headline scores as the real,
  verified baseline the brief asked for, not a full diagnostic teardown.
