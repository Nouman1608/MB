# Resource → diagnostic/practice → trial: measured baseline

**Written 2026-09-25 00:17 PKT (D-328).** Source: GA4 property "Marlbridge" (550438391), read in
the GA4 interface on 2026-09-25 00:12 PKT. Range: **28 Aug to 24 Sep 2026** (GA4's "last 28
days"; 24 Sep may be incomplete). GA4 counts only visitors whose consent allows analytics, so
every figure is a lower bound.

**Decision this supports: do not commission more resources, diagnostics or practice sets yet.**
The journey cannot be judged on this data. The diagnostics are one to two days old, and the
numbers below are too small to rank anything.

## What the data shows

| step | measure | 28 days to 24 Sep |
|---|---|---|
| All pages | `page_view` | 2,442 views, 895 users |
| Resource pages (`/resources/<slug>/`, 733 pages with a view) | views | 1,552 (64% of all views) |
| `/resources/` index | views | 90 |
| Board hubs (65 pages with a view) | views | 222 |
| Practice engine (`/practice/`, `/practice/<code>/`) | views | 14 |
| **Diagnostic set pages** (`/practice/<code>/diagnostic/<set>/`) | views | **1** (`/practice/4PH1/diagnostic/all-topics/`) |
| `/diagnostics/` hub (live since 24 Sep) | views | 0 |
| Resource → next-step click (includes diagnostic links) | `recommended_resource_click` | 7 events, 5 users |
| Practice started | `practice_start` | 7 |
| **Diagnostic completed** | `diagnostic_complete` | **0** |
| Trial CTA pressed | `trial_cta_click` | 5 events, 4 users |
| Trial page | `/trial/` views | 53 views, 21 users |
| Trial form touched | `trial_form_start` | 8 events, 7 users |
| **Trial requested** | `generate_lead` | **6 events, 5 users** |
| Also: `whatsapp_click` 23, `form_start` 24, revision-email sign-ups confirmed 1 | | |

What it means, and no more than this:

- Resources carry the traffic. The practice engine and the diagnostics barely register yet.
- Leads exist (6 in 28 days) but are far too few to split by source.
- **Nothing can be said yet about whether diagnostics lead to trials.** They went live on
  23-24 Sep; there is one recorded diagnostic page view and no recorded completion.

## Is each step measurable? (checked in the code and in GA4 on 2026-09-25)

| step | how it is recorded | reportable by source? |
|---|---|---|
| Resource → diagnostic link | `recommended_resource_click` with `source=resource_next_steps`, `link_kind=diagnostic` (`ResourceNextSteps.astro`). 516 built resource pages carry a diagnostic link | Yes: `source` and `link_kind` are GA4 custom dimensions, **registered 23 Sep 2026**, so they report from that date only |
| Diagnostic viewed | `page_view` on `/practice/<code>/diagnostic/<set>/` | Yes |
| Diagnostic finished | `diagnostic_complete` with `course_code`, `diagnostic_set`, `duration_bucket` | Yes (all three registered) |
| Diagnostic → next step | `recommended_resource_click` with `source=diagnostic` | Yes |
| Any page → trial | `/trial/?…&source=<resource\|diagnostic\|region\|tuition-page…>` then `generate_lead` with `trial_source` | Yes: `trial_source` registered 23 Sep 2026 |
| Which trial button | `trial_cta_click` with `cta_location` | **No.** `cta_location` is sent but is not a registered custom dimension, so GA4 reports cannot split it. Owner action: GA4 → Admin → Custom definitions → Create custom dimension, event scope, parameter `cta_location` |
| Started a diagnostic but did not finish | nothing | Not recorded. A page view without `diagnostic_complete` is the only proxy |

No new tracking is needed to judge the journey. Only `cta_location` needs registering, and that is
a GA4 setting, not code.

## When to measure again, and exactly what to pull

Re-measure on **24 Oct 2026** (30 days after the diagnostics went live), for 24 Sep to 23 Oct:

1. GA4 → Reports → Engagement → Events: counts for `recommended_resource_click`,
   `diagnostic_complete`, `trial_cta_click`, `trial_form_start`, `generate_lead`.
2. The same report with a secondary dimension: `link_kind` and `source` for
   `recommended_resource_click`, `diagnostic_set` for `diagnostic_complete`, and `trial_source` for
   `generate_lead`.
3. Pages and screens, searched for `/diagnostic/`: views for each set page.

Read it this way:

- Diagnostic page views ÷ `recommended_resource_click` with `link_kind=diagnostic`: do people who
  click through actually arrive?
- `diagnostic_complete` ÷ diagnostic page views: do people finish?
- `generate_lead` with `trial_source=diagnostic` against `trial_source=resource`: does the
  diagnostic route produce trials at all, compared with going straight from a resource?

**Commission new content only if** a route shows at least a few completed journeys ending in
`generate_lead`. More than ten leads in the window would be a reasonable floor before comparing
routes. Below that, keep measuring and do not act on percentages.

## Limits

- Consent: visitors who decline analytics are not counted anywhere above.
- The Supermetrics connection used for earlier exports has expired (trial ended 22 Sep 2026), so
  this baseline was read in the GA4 interface by hand. The 24 Oct pull needs the interface, a
  renewed connector, or the GA4 Data API.
