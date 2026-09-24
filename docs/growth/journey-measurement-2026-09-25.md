# Resource → diagnostic/practice → trial: measured baseline

## Update, 25 Sep 2026 01:55 PKT (D-329): current measurement plan

This section supersedes the "lower bound" wording, the "Is each step measurable?" table and the
"When to measure again" ratios further down. Those are kept below as the 25 Sep 00:17 record.

### What changed on 25 Sep

- **`cta_location` is now a GA4 custom dimension** (event scope, parameter `cta_location`), created
  in property 550438391 on 2026-09-25 at 01:43 PKT. GA4 had already seen the parameter: it
  offered it in the parameter picker. Custom dimensions apply from the time they are created, so
  there is **no backfill**. Expect `trial_cta_click` by `cta_location` in standard reports from
  about 26-27 Sep, after GA4's usual processing delay of 24-48 hours.
- **New event `diagnostic_start`** (`course_code`, `diagnostic_set`, `question_count`), fired once
  per run when Start is pressed. Without it a page view could not be told apart from an attempt.
- **Fixed attribution:** the `/diagnostics/` hub's trial link sent `source=diagnostics-hub`,
  which the trial form ignores (so the lead would have been labelled `trial-page`). It now
  sends `source=diagnostic`; `cta_location` (`diagnostics-hub-trial`) still tells the hub apart
  from the set pages. `npm run audit:trial-sources` now guards every `/trial/?source=` link.

### Property facts

- Property "Marlbridge", ID 550438391. Reporting time zone: Pakistan (GMT+05:00), so GA4 days are
  PKT days. Learners Academy is a **separate property** (542913234) and was not changed.
- **Consent.** Visitors who accept, and visitors outside the UK and Europe who don't reject, send
  page views and events with cookies (`gcs=G101`). Visitors who reject, and UK/EU visitors who
  haven't chosen, send **no page views**; their events go as cookieless pings (`gcs=G100`), as
  `/legal/cookies/` discloses. So event counts and page-view counts come from **different
  populations**. User counts for cookieless pings are not real people. None of the counts is a
  guaranteed lower bound.
- **Test traffic.** The checks below captured every GA request in the browser and never delivered
  it to Google, so they added nothing to the property. GA4's internal-traffic filter is not set
  up; the owner's own browsing counts like anyone else's.

### The three journeys, as GA4 can see them

| Journey | Stages recorded | What joins the stages |
|---|---|---|
| A. Resource → diagnostic → trial | resource `page_view` → `recommended_resource_click` (`source=resource_next_steps`, `link_kind=diagnostic`) → diagnostic `page_view` → `diagnostic_start` → `diagnostic_complete` → `trial_cta_click` (`cta_location=diagnostic-trial`) → `/trial/` `page_view` → `trial_form_start` → `generate_lead` (`trial_source=diagnostic`) | Same session: GA4 Explore → Funnel exploration, closed, sequential |
| B. Resource → trial directly | resource `page_view` → `trial_cta_click` (`cta_location=resource-trial-top` or `resource-trial`) → `/trial/` → `trial_form_start` → `generate_lead` (`trial_source=resource`) | Same session, as above |
| C. Learners Academy → Marlbridge → trial | Marlbridge session with source `learnersacademy.com.pk` / referral, then A or B | Session source only. Learners Academy links carry no UTM tags and the referrer policy sends the origin only, so GA4 sees the site but not the page. The two GA4 properties are separate: no person-level journey across the sites can be shown, and adding up both sites' reports does not produce one |

What each stage is, and is not:

- A link click is not an arrival.
- A page view is not a start.
- `trial_cta_click` is intent, not a lead.
- `trial_form_start` is the first keystroke, not a submission.
- `generate_lead` fires only after the server accepts the request (`result.ok`). A test submission counts too.
- None of these is a booked, attended or paid trial.

### Instrumentation checks, 25 Sep 2026

Run in an isolated headless browser. GA requests were captured and never delivered.

| Check | Result |
|---|---|
| Resource trial button emits `trial_cta_click` with `cta_location` | `cta_location=resource-trial-top` on production; the request was issued 5 of 5 times, logged in-page across the navigation |
| One click, one event | One `trial_cta_click` per click in every run |
| Diagnostic trial button | `cta_location=diagnostic-trial`, link `?course=cambridge/igcse/chemistry&source=diagnostic` |
| `diagnostic_complete` not on page load | Nothing fired on load; one `diagnostic_complete` per run, even with Finish pressed twice |
| `diagnostic_start` (local build) | Once per run; a Restart then Start sends a new one |
| No answers sent | Typed answers were searched for in every payload and never found; `mbTrack` also strips PII-like keys |
| `trial_form_start` | Once, although two fields were typed in |
| `generate_lead` only on server success | Code: fires inside `if (result.ok)`, and `result.ok` comes from `response.ok` (`src/utils/forms/submit.ts`). No real enquiry was sent to test it |
| Consent granted | `gcs=G101`, with page views |
| Consent denied | No page view; `trial_cta_click` sent as a cookieless ping `gcs=G100`, as the cookie policy says |

### Baseline and dates

- **Pre-launch:** 28 Aug-22 Sep 2026.
- **Launch days, partial exposure:** 23-24 Sep. D-286 put the first diagnostics live on 23 Sep; D-312 to D-326 added the rest of the 31 sets, the `/diagnostics/` hub and the resource-page trial link on 24 Sep. The 28 Aug-24 Sep read below (1 diagnostic page view, 0 completions, 6 `generate_lead`) straddles the launch, so it is **not** a pre/post comparison.
- **This change** (D-329) deploys on 25 Sep. The first complete day with `diagnostic_start`, the fixed hub source and a registered `cta_location` is **26 Sep**.

**Early health check: 3 Oct 2026, covering 26 Sep-2 Oct.** Extend to 9 Oct if there are fewer than a handful of diagnostic arrivals. Check only function:
- set pages get views;
- `diagnostic_start` and `diagnostic_complete` both arrive;
- `trial_cta_click` shows `cta_location` values;
- trial links land on `/trial/` with the right `trial_source`;
- no start-without-completion pattern concentrated on one set, which would point to a fault.

Also open two or three set pages and complete them by hand. Do not judge the product on a week of data.

**First full-month review: 24 Oct 2026.**
- Window 24 Sep-23 Oct.
- Segment the instrumented metrics (`diagnostic_start`, `cta_location`, hub `trial_source`) to 26 Sep-23 Oct.
- Leave 24-25 Sep out of any rate.

Report as **counts**, each with its window:
- resource views and users;
- `recommended_resource_click` with `link_kind=diagnostic`;
- diagnostic page views;
- `diagnostic_start`;
- `diagnostic_complete`;
- `trial_cta_click` by `cta_location`;
- `/trial/` views;
- `trial_form_start`;
- `generate_lead` by `trial_source`.

Break down by syllabus (`course_code`), device and country only where there are enough events to mean something.

**Rates** come only from a closed, same-session GA4 Funnel exploration, and each one states the step, the population (sessions with the first step), the date window and "same session". Don't divide event totals by page-view totals and call it a conversion rate: repeats, direct arrivals and the consent split make both numbers different populations. Where the Funnel exploration cannot be run, report counts only. Missing data is "not available", never zero.

**Deciding on content.** Differences between journeys, or between before and after, are not proof of cause, and no fixed number of leads makes a comparison valid. Commission more content only when there is a reason beyond this funnel:
- a syllabus gap;
- demonstrated search demand;
- a topic students are shown to struggle with;
- or a journey that visibly produces enquiries.

Resources do not each need to generate leads.

---


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
