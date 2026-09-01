# Teacher-support click → lead attribution (scaffold)

Programme: Search Intelligence Execution Round follow-up. Companion to
`docs/growth/practice-analytics-events.md` (event design) and
`scripts/growth/practice-analytics-report.mjs` (practice-usage reporting).

This document is a **data model and analysis approach**, not a built
pipeline. It exists to answer one question honestly: *can a
`teacher_support_click` fired from the practice diagnostic be correlated,
in a future GA4 export, with a `generate_lead` conversion?* The answer is
"yes, loosely, using GA4's own tools" -- and this document says exactly what
that loose correlation can and cannot support, rather than proposing
infrastructure this repo does not have.

**Status of every number in this document: AWAITING_DATA.** No GA4 export
has been pulled for either event. Nothing below is a real attribution rate
-- every "X%" you might expect a document like this to contain is
deliberately absent. A live GA4 property is configured for this site
(`site.analytics.ga4MeasurementId` in `src/data/site.ts`), but this repo has
no API connector, no BigQuery export, and no server-side database to join
against -- see "Constraints," below.

## The two real events, as actually implemented

### `teacher_support_click`

Fires once, client-side, when a visitor clicks "Get teacher support" on the
practice diagnostic's results screen. Source:
`src/pages/practice/[code]/index.astro`, inside the `teacherSupport` click
listener:

```js
track('teacher_support_click', {
  source: 'practice_diagnostic',
  score_percent: lastDiagnosticScorePercent,
});
```

`track()` merges this with the page's shared `analyticsContext` before
calling `window.mbTrack`, so the full parameter set GA4 actually receives
is:

| Parameter | Value | Notes |
|---|---|---|
| `source` | `'practice_diagnostic'` | Fixed literal -- every fire of this event has the same value; distinguishes it from any other future "teacher support" entry point, should one be added. |
| `score_percent` | integer 0-100, or `null` | The diagnostic run's own score, computed in `showDiagnosticResults()`. `null` is possible if the click somehow fires before a diagnostic completed (defensive -- not expected in the normal flow, since the button only renders on the diagnostic-results screen). |
| `specCode` | e.g. `'0620'` | From shared page context, not this event's own params. |
| `board`, `qualification`, `subject` | e.g. `'Cambridge'`, `'IGCSE'`, `'Biology'` | Same. |

No name, email, phone, or any personally-identifying field is ever included
-- consistent with the PII denylist `mbTrack` enforces (see
`docs/growth/practice-analytics-events.md`, "Privacy").

### `generate_lead`

Fires once, client-side, on a successful submit of `EnquiryForm.astro` (the
`student`/`trial`/`tutoring`/`school` enquiry forms -- the site's actual lead
form). Source, `src/components/forms/EnquiryForm.astro`:

```js
(window as any).gtag?.('event', 'generate_lead', {
  enquiry_kind: (form.dataset.kind as EnquiryKind) ?? 'student',
});
```

Full parameter set: **only `enquiry_kind`** (`'student'` | `'trial'` |
`'tutoring'` | `'school'`). This is a pre-existing, already-live GA4 key
event, deliberately left unchanged by the practice-analytics instrumentation
round (see `docs/growth/practice-analytics-events.md`, "Architecture" --
"smallest high-value change" discipline: a working conversion path was not
touched to make it use the new `mbTrack` helper it doesn't need).

Critically: **`generate_lead` carries no reference back to a practice
session, a diagnostic score, a spec code, or anything else that would let a
join key be read directly off the event itself.** The enquiry form's free-text
`message` field *might* mention a subject or board if the visitor typed it
in, but that field is never sent to GA4 (it would violate the PII/free-text
exclusion this analytics system enforces throughout), so it is not usable
for attribution.

## Constraints (why this has to stay simple)

- **Client-side only.** All instrumentation on this site lives in
  browser-executed `gtag()`/`mbTrack()` calls. There is no server that
  receives, logs, or joins these events -- `functions/api/enquiry.ts` handles
  the enquiry form's actual submission (sending the notification email,
  running Turnstile/honeypot spam checks) but does not read or forward any
  analytics event, and has no database to write one to. Any join between
  `teacher_support_click` and `generate_lead` has to happen inside GA4
  itself, using data GA4 already collects -- not a new pipeline.
- **No user accounts.** Visitors are anonymous. There is no login, no
  persistent visitor ID this site controls, no CRM record to attach either
  event to.
- **No custom session-stitching.** This site does not set its own
  first-party tracking cookie, does not generate its own session ID, and
  does not pass any identifier between the practice page and the enquiry
  form. The *only* identifiers available for correlation are the ones GA4's
  own `gtag.js` already manages by default: **`client_id`** (a
  browser-generated, GA4-assigned identifier, persisted in GA4's own first-
  party cookie once analytics consent is granted) and GA4's own
  **session ID** (derived automatically from event timing/gaps, again once
  consent is granted). This document proposes using exactly those two --
  nothing invented on top.
- **Consent-gated.** Both events only reach GA4 after the visitor has
  clicked "Accept" on this site's consent banner (`ConsentAnalytics.astro`
  -- see `docs/decision-log.md` D-003 for why the gate exists). A visitor who
  rejects or ignores the banner produces neither event in GA4 at all, which
  necessarily understates the true click-through-to-enquiry rate by an
  unknown amount. There is no way to correct for this from client-side data
  alone.
- **Low current volume.** Per the last known GA4/GSC check referenced in
  `docs/growth/practice-analytics-events.md` (D-079), traffic to this site
  is low hundreds of clicks/month site-wide. Whatever `teacher_support_click`
  → `generate_lead` correlation eventually shows will likely rest on a small
  number of underlying events for some time -- a real constraint on how much
  confidence any resulting percentage should carry, independent of the
  attribution method itself.

## Proposed attribution approach

Given the constraints above, the honest approach is: **use GA4's own
session-scoped exploration reports, not a custom join.**

1. **GA4 Funnel exploration.** Build a funnel with step 1 = `teacher_support_click`
   filtered to `source = practice_diagnostic`, step 2 = `generate_lead`
   (any `enquiry_kind`). Set the funnel to session-scoped (GA4's default) so
   a `generate_lead` only counts toward the funnel if it happened in the
   same GA4 session as the qualifying click. This directly answers "of
   visitors who clicked teacher support from a diagnostic, what share
   generated a lead in that same visit" -- the tightest, most defensible cut.

2. **GA4 Path exploration (starting point: `teacher_support_click`).**
   Complements the funnel by showing what visitors who clicked actually did
   next, without presupposing `generate_lead` is the only outcome worth
   seeing (e.g. some may browse further pages first, or leave and never
   convert -- the funnel alone hides that shape).

3. **Optional, looser cut: same `client_id` within N days.** GA4 Explore
   can also be scoped by user (`client_id`) rather than session, with a
   custom lookback window (e.g. 7 or 30 days) instead of "same session."
   This would catch a visitor who clicked teacher support, left, and came
   back later on the same browser/device to submit the enquiry form. It is
   a real, supportable GA4 capability -- **but it should be presented
   alongside the tighter session-scoped number, never in place of it**,
   and always labeled with its exact window (e.g. "within 7 days, same
   browser"), because it is inherently looser: it cannot distinguish "the
   diagnostic caused the later enquiry" from "this visitor was already
   likely to enquire and happened to also try the diagnostic once."

4. **Report the raw counts alongside any rate.** Given the low-volume
   constraint above, any report using this approach should always show the
   underlying numerator/denominator (e.g. "3 of 19 teacher_support_click
   sessions included a generate_lead") rather than a bare percentage, so a
   reader isn't misled by a precise-looking figure built on a small sample.

**What this deliberately does NOT propose:** a custom backend event-join
pipeline, a first-party tracking cookie or session ID beyond what GA4's
`gtag.js` already sets, a CRM/database correlation, or any mechanism this
repo does not already have. GA4's funnel/path exploration tools exist
specifically to answer this class of question without additional
engineering -- building a parallel system to do the same job worse would be
the wrong trade for a site at this traffic volume.

## Explicit limits on what this can honestly claim

- **Correlation is not causation.** Even a clean session-scoped funnel
  result only shows two events occurred in the same visit, not that the
  diagnostic click caused the enquiry. A visitor who was already planning
  to enquire might also try the diagnostic out of curiosity on the same
  visit.
- **No de-duplication across devices.** A visitor who clicks teacher support
  on their phone and later submits the enquiry form on a laptop will show
  as two unrelated `client_id`s in GA4 -- the funnel/session approach above
  will not connect them, and no method available to this site can, short of
  the visitor logging into an account this site does not have.
- **`generate_lead` cannot be split by originating diagnostic score without
  a GA4-side change.** Because `generate_lead` carries only `enquiry_kind`
  (see above), a report cannot currently show "leads generated by visitors
  who scored under 50% on their diagnostic" directly from the `generate_lead`
  event's own parameters -- only indirectly, by joining to the *separate*
  `teacher_support_click` event's `score_percent` within the same GA4
  session/funnel, which is exactly what the funnel/path approach above does.
  This is a real, accepted limitation of the "smallest high-value change"
  decision not to modify the already-live `generate_lead` event.
- **Rejected/absent consent silently drops both sides.** As above -- the
  true underlying rate is unknowable from GA4 data alone, since visitors who
  never granted consent appear in neither event.

## When this becomes real

Once a GA4 Explore funnel or path export (or a GA4 API pull, if that
connector is ever added to this repo) is available, the actual numbers
belong in a dated report under `docs/growth/` (following the same
`IMPLEMENTED_AWAITING_DATA` → real-data convention used elsewhere in this
programme -- e.g. `docs/growth/indexing-audit-2026-09-01.md` →
`docs/growth/indexing-audit-2026-09-02-real-data.md`), not edited into this
scaffold document. This document should be revisited only if the underlying
event instrumentation itself changes (e.g. if `generate_lead` is ever
extended with a referring-diagnostic parameter -- a real, available
follow-up that was out of scope for the current "smallest high-value
change" round, and would need its own explicit sign-off since it touches an
already-live conversion event).
