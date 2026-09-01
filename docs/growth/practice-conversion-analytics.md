# Practice usage & teacher-support conversion analytics — audit, 1 Sep 2026

Programme: Search Intelligence & Demand-Led Growth (WS9-WS11, Sections 26-32).

## What's actually instrumented today (verified against the live repo, not assumed)

Confirmed by reading `src/components/analytics/ConsentAnalytics.astro`,
`src/components/forms/EnquiryForm.astro`, `src/components/ui/WhatsAppButton.astro`,
and `src/pages/practice/`:

- **GA4 is consent-gated** (Consent Mode v2, denied-by-default, granted only on
  explicit accept) — the only analytics path on the site, per D-081/D-091 (Zaraz
  removed).
- **`generate_lead`** fires from `EnquiryForm.astro` on real form submission —
  confirmed GA4 key event.
- **`whatsapp_click`** fires from `WhatsAppButton.astro` — confirmed GA4 key
  event as of D-080.
- **`qualify_lead` / `close_convert_lead`** are defined as GA4 key events in the
  GA4 property but **deliberately never fire from client code** — confirmed by
  this session's own code search (no references anywhere in `src/`). This is
  correct, not a gap: firing them client-side would mean the static site
  fabricating a downstream sales-process outcome (a real conversion happening
  off-site) it has no way of actually knowing. Resolving this for real needs a
  CRM-side integration, not more client JS.
- **Practice pages (`src/pages/practice/[code]/index.astro`,
  `src/pages/practice/index.astro`) and `src/utils/practice/` have zero
  `gtag`/`dataLayer`/event references.** No practice-usage analytics exists —
  not `practice_start`, not `question_answered`, none of Section 26's list.
  This is a genuine, confirmed gap, not a data-access problem.

## What Section 26/27 asks for vs. what exists

| Event (Section 26) | Status |
|---|---|
| `practice_start` | Not instrumented |
| `question_answered` | Not instrumented |
| `question_correct` / `question_incorrect` | Not instrumented |
| `quiz_complete` | Not instrumented |
| `retry` | Not instrumented |
| `bookmark` | Not instrumented (no bookmark feature exists in the UI at all) |
| `error_notebook_add` | Not instrumented (no error-notebook feature exists) |
| `weak_topic_click` | Not instrumented |
| `resource_from_practice` | Not instrumented (though practice pages do link to resources — the links exist, the click event doesn't) |
| `teacher_support_click` | Not instrumented as a distinct event — `whatsapp_click` is the closest existing proxy but isn't scoped to "from a practice page" |

## Why this wasn't built in this session

Instrumenting practice-page events is a real, scoped, buildable feature (add
`gtag('event', ...)` calls to `src/pages/practice/[code]/index.astro`'s client
script, following the exact pattern `WhatsAppButton.astro` already
establishes), but it's a site behavior change to a live production page —
deliberately sequenced after the research/audit deliverables in this session
(canonical register, GSC tooling, indexing audit, examiner evidence, decision
engine) so it can go through its own build+audit+PR review cycle rather than
being bundled in with documentation-only changes. See
`docs/programme-register.md`'s "Next 30 days" for this as the top queued item.

## Section 27/28 (topic-level practice prioritization) and Sections 29-32 (conversion attribution)

Both are genuinely **BLOCKED_BY_MISSING_DATA** until the instrumentation above
ships and accumulates real usage — there is no shortcut that produces honest
numbers without it. `docs/growth/monthly-growth-report-template.md` sections 4
and 5 are ready to receive this data the moment it exists.

## Status

**COMPLETE** as an audit of current instrumentation. **BLOCKED_BY_MISSING_DATA**
(not merely awaiting an export — the underlying tracking code doesn't exist
yet) for practice-usage and practice-sourced conversion reporting specifically.
