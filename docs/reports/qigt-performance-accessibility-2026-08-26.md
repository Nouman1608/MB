# QIGT Section 9 — Performance and accessibility, fresh multi-page evidence

2026-08-26. Real Lighthouse v13.4.1 runs (mobile, simulated throttling), taken against
a local production build (`npm run build` + `astro preview`) so the numbers reflect
exactly this session's code, not CDN cache timing. Six pages, per the brief: homepage,
a resource page, a board hub, the resources index, the Free Trial form, and search.

## Real issues found and fixed this pass

1. **Sitewide color-contrast failure (`--color-gold-600`)** — `#8A6D12` measured 4.47:1
   against the site's `--color-ivory` background, just under the 4.5:1 AA threshold for
   normal text; axe-core flagged it on every single page tested. Darkened to `#7A5E10`
   (5.56:1 vs ivory, 6.11:1 vs white) — `src/styles/global.css`.
2. **`text-gold-500` misused on light surfaces** — the "01/02/03" numbered list markers
   in `ResourcesSection.astro` (homepage) and `resources/index.astro` used the on-navy
   gold token (2.2-2.4:1 against light backgrounds) instead of the light-surface one.
   Switched both to `text-gold-600`.
3. **Inline links indistinguishable from body text** — resource/article markdown body
   links had no underline (relying on a slight color difference alone), flagged by
   axe's `link-in-text-block`. Added `[&_a]:underline` scoped to the rendered `<Content
   />` wrapper in both `resources/[slug].astro` and `articles/[slug].astro`.
4. **Cookie-consent banner link nearly invisible** — `<a>` inside the consent banner had
   no explicit text color, so it fell through to the global `a { color: navy-800 }`
   rule meant for light backgrounds — on the banner's navy-900 background this measured
   **1.1:1** contrast (essentially unreadable). Added `text-on-navy` — `src/components/
   analytics/ConsentAnalytics.astro`.
5. **Footer copyright/founding-year text** — hardcoded `#6E7D93` on navy-900 measured
   4.38:1, under threshold. Replaced with the existing `text-on-navy-mute` token
   (8.06:1) — `src/components/layout/Footer.astro`.

Result: accessibility score went from 93-97 (color-contrast failing on all 6 pages,
plus link-in-text-block on the resource page) to **100/100 on all 6 pages**, verified
by a second Lighthouse pass after each fix, not assumed.

## Real issue found, documented, not fixed this pass

**`/resources/` (resources index): Performance 71, Total Blocking Time 1,370ms.**
Root cause verified directly: the page renders all 731 resource cards into the DOM at
once (the existing subject/level filters hide non-matching cards via `hidden`, not by
removing them), producing ~5,200 DOM nodes and 3.7s of Style & Layout work on initial
paint (`mainthread-work-breakdown` audit). This is a real, structural cost, not
something a small change fixes safely -- pagination, DOM virtualization, or per-section
lazy rendering would each require restructuring the existing (working, tested) client-
side filter logic, which is more risk than this pass's scope of "smallest safe change"
justifies without dedicated follow-up testing. Recorded as a recommendation for a
future session, not silently left unmentioned.

## Full results table

| Page | Perf | A11y | LCP | CLS | TBT | FCP | Speed Index | TTFB |
|---|---|---|---|---|---|---|---|---|
| Homepage (`/`) | 97 | 100 | 2.3s | 0 | 120ms | 1.2s | 1.2s | 10ms |
| Resource page (`a-arenes-and-halogenoarenes`) | 98 | 100 | 2.3s | 0 | 70ms | 1.2s | 1.2s | 10ms |
| Board hub (`cambridge/a-level/english-literature`) | 96 | 100 | 2.3s | 0 | 160ms | 1.2s | 1.2s | 10ms |
| Resources index (`/resources/`) | 71 | 100 | 2.6s | 0 | 1,370ms | 1.7s | 1.9s | 20ms |
| Free Trial form (`/trial/`) | 94 | 100 | 2.3s | 0 | 230ms | 1.2s | 1.2s | 10ms |
| Search (`/search/`) | 95 | 100 | 2.3s | 0.042 | 180ms | 1.2s | 1.2s | 10ms |

CLS on Search (0.042) is a minor shift, well under Google's 0.1 "needs improvement"
threshold -- likely the Pagefind UI bundle mounting; not investigated further as it is
not a failing metric.

## Accessibility items confirmed already compliant (not re-tested manually — axe-core covers these)

Across all 6 pages and both before/after runs, no audit ever flagged: heading order,
accessible names/labels, ARIA attributes, `html[lang]`, form-field labeling, tabindex/
focus order, or target size. Only color-contrast and link-in-text-block were ever
flagged, and both are now fixed and re-verified.

## Method note

Lighthouse could not reach a real browser at first (`Unable to connect to Chrome` --
missing shared libraries for the sandboxed environment's bundled Chromium). Resolved by
downloading the required Ubuntu `.deb` packages with `apt-get download` (no root
required), extracting them with `dpkg-deb -x` into a local directory, and pointing
`LD_LIBRARY_PATH` at it. Each Lighthouse run used a fresh `astro preview` server
(matching this session's exact build output) rather than production, since several
merges from earlier today may not have finished deploying yet at the time of this pass
-- production verification is covered separately in the deployment workstream (#83).
