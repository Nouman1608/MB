# Practice engagement analytics — event design, 2 September 2026

Programme: Search Intelligence Execution Round, Sections 4-11. Implements the
gap `docs/growth/practice-conversion-analytics.md` (1 Sep 2026) found: zero
practice-usage event tracking existed. This document is the required design
record for the decisions that document asked for.

## Architecture (Section 4)

Reused the existing, single analytics system — no second stack introduced.
`src/components/analytics/ConsentAnalytics.astro` (the sole GA4/consent path,
per its own header comment) now also defines `window.mbTrack(eventName,
params)`, a thin wrapper around the existing `window.gtag('event', ...)` call
that strips any parameter key matching a PII denylist (`email`, `name`,
`phone`, `address`, `answer_text`, `question_text`, `password`, `token` --
case-insensitive substring match) before sending, logging a console warning
if it does. Every new event in this round calls `window.mbTrack`, not
`gtag` directly. `EnquiryForm.astro`'s `generate_lead` and
`WhatsAppButton.astro`'s `whatsapp_click` are **unchanged** -- both are
already confirmed-live GA4 key events; this round's own "smallest high-value
change" discipline means not touching a working conversion path to make it
use a helper it doesn't need.

`window.mbTrack` is only ever called after `window.gtag` exists, and `gtag`
itself only sends anything once Consent Mode has been granted -- the existing
consent gate is completely unchanged by this work; see "Privacy" below.

## Real functionality inventory (Section 4/5) -- what actually exists on `/practice/<code>/`

Read directly from `src/pages/practice/[code]/index.astro` (741 lines) before
writing any event code:

- Attempt a question → reveal the worked answer → self-mark right/wrong
  (there is no auto-grading; the underlying content is prose worked answers,
  not machine-checkable answers -- see `src/utils/practice/bank.ts`'s own
  documented reasoning, D-067).
- Filter: all / unattempted / previously-wrong.
- Three modes: standard (browse), mixed (20-question topic-balanced set),
  diagnostic (25-question topic-balanced set with a defined end screen).
- Timed-mode toggle with a live elapsed timer.
- Weak-topics list (ranked by wrong-mark count, links to the syllabus hub's
  topics section).
- Error notebook (every currently-wrong question, click to jump back).
- Topic mastery levels (not-started/needs-review/developing/secure).
- Spaced-retry queue (wrong answers ≥24h old, click to jump back).
- Reset control.
- A "Get teacher support" link, shown only on the diagnostic-results screen.

**No bookmark feature and no interactive (JS-reachable) link from a practice
question back to its source resource page exist** -- see "Not implemented"
below.

## Event-by-event design

### `practice_start`
Fires once, when `init()` successfully loads the question bank and the app
becomes visible. Params: `spec_code`, `board`, `qualification`, `subject`.

### `question_answered` (Section 7 -- the volume-model decision)
Fires on every `markAttempt()` call -- i.e., every time a user reveals a
question and self-marks it. **Decision**: given this site's current real
traffic (last known GSC figures: low hundreds of clicks/month; GA4 showing
"no data for most dimensions" as of the last direct check, D-079), per-answer
event volume is nowhere near a cost or usability concern -- Option A (every
answer is an event) was chosen over aggregation-only. `question_answered`
carries `is_correct` (boolean) as a parameter rather than requiring a
separate lookup. **If real usage later grows enough that per-question event
volume becomes a genuine concern**, the documented mitigation is to drop
this event and rely on `quiz_complete`'s aggregates alone -- revisit then,
not now. No question or answer text is ever included -- only `question_id`
(an opaque content id, not the question text), `topic`, `marks`,
`practice_set_id` (the spec code), `practice_mode`, `timed_mode`.

### `question_correct` / `question_incorrect` (Section 5's explicit event names)
Fired as a second, thin event immediately after `question_answered`, carrying
only `practice_set_id` and `topic` -- exists so these can be used directly as
GA4 conversion/segment events without a custom parameter report. This is
extra event volume beyond the minimum (the same information is already in
`question_answered`'s `is_correct` param) -- a deliberate choice to satisfy
Section 5's explicit two-event-name requirement without removing the richer
combined event. Revisit if either turns out unused in practice.

### `quiz_complete`
Fires exactly once per diagnostic-mode run, at the same point
`showDiagnosticResults()` is triggered -- **the only mode with a real, defined
end**. Standard mode (open-ended browsing) and mixed mode (a 20-question set
that simply cycles, no completion screen) have no equivalent defined end, so
`quiz_complete` deliberately does not fire for them -- firing it there would
mean inventing a "completion" the UI doesn't actually have. Params:
`total_questions`, `correct_count`, `incorrect_count`, `score_percent`,
`practice_set_id`, and `duration_bucket` (`<2min` / `2-5min` / `5-10min` /
`10min+`), computed from a real wall-clock timestamp recorded the moment
diagnostic mode is entered (`applyMode()`) to the moment it completes -- a
quiz-level timer independent of the separate per-question "timed mode"
checkbox, so it's available on every diagnostic run rather than only when
that checkbox happens to be on.

### `retry`
Fires when a user clicks a question in the error notebook or the spaced-retry
list to jump back to it -- the two real, existing "go try this again" actions
in the UI. Params: `practice_set_id`, `topic`, `source` (`notebook` or
`spaced_retry`).

### `bookmark_question` -- **NOT_APPLICABLE**
No bookmark feature exists anywhere in the practice UI. Not fired. If a
bookmark feature is built later, this event should be added then, against
the real control -- not before.

### `error_notebook_add`
Fires inside `markAttempt(false)` only when the question is **newly**
entering the wrong-set this call (no prior attempt, or the prior attempt was
correct) -- not on every repeat wrong-mark of an already-notebooked question,
which would just be noise duplicating `question_answered`. Params:
`practice_set_id`, `topic`.

### `weak_topic_click`
Fires on click of the "N wrong · study this topic" link `updateWeakTopics()`
renders (a real `<a href="{hubPath}#topics-heading">`). Params:
`practice_set_id`, `topic`, `wrong_count`.

### `resource_from_practice` -- **NOT_APPLICABLE**
The only links from the practice page to underlying `/resources/<slug>/`
pages are in the `<noscript>` fallback, which is only rendered -- and
reachable -- when JavaScript is disabled. In that state `gtag`/`mbTrack`
cannot fire at all (no JS running), so there is no reachable code path where
this event could ever legitimately fire. Not implemented. If an interactive,
JS-enabled resource link is added to the practice UI later, this event
should be wired to it then.

### `teacher_support_click`
A **new, distinct** event (not a rename or duplicate of `whatsapp_click`) --
fires on the "Get teacher support" link shown on the diagnostic-results
screen (`href="/tutoring/"`). Distinct because this is a different real
signal: a student who just finished a diagnostic clicking through to teacher
support, with the diagnostic's own score attached -- genuinely richer
attribution than a generic WhatsApp click. Params: `source` (fixed value
`practice_diagnostic`), `practice_set_id`, `board`, `qualification`,
`subject`, `score_percent`.

## Privacy (Section 11)

No change to what triggers data collection or to the consent gate itself --
every event above still only reaches GA4 after the existing Consent Mode v2
"Accept" flow, completely unchanged (`ConsentAnalytics.astro`'s consent logic
was not touched, only extended with the additive `mbTrack` helper). No new
category of personal data is collected -- every parameter is categorical
(spec/board/qualification/subject/topic codes, booleans, counts, percentages)
per Section 6's requirement; the PII denylist in `mbTrack` is a second,
structural safety net on top of that design discipline, not a replacement
for it. `docs/legal/privacy.astro` and `docs/legal/cookies.astro` already
describe GA4 collection in general terms that cover additional first-party
events of this kind; **worth a follow-up read to confirm the language is
still accurate now that event *volume* is meaningfully higher**, but no
factual claim in either page becomes false by this change (no new
data category, same consent gate, same GA4 property).

## Tests (Section 10)

`scripts/test-practice-analytics.mjs` (added this round) statically checks
the built practice page's inline script source for: `mbTrack` calls exist for
every implemented event name; no `bookmark_question`/`resource_from_practice`
call exists (confirming the NOT_APPLICABLE decisions are actually honored in
code, not just in this document); no parameter name in any `mbTrack(...)`
call matches the PII denylist; `question_answered` is never called with a
`question_text` or `answer_text` key. Negative-fixture style: the script also
confirms `mbStripPii` in `ConsentAnalytics.astro` actually drops a
deliberately-injected `email` key when run in a small inline Node
sandbox eval, rather than only asserting the denylist array's contents.

## Reporting

`scripts/growth/practice-analytics-report.mjs` (added as a follow-up to this
document, alongside `docs/growth/teacher-support-attribution.md`) turns a GA4
export of the events above into a markdown practice-engagement report:
most-practiced topics, practice-mode usage split, self-reported
correct/incorrect rate by topic, retry rate, error-notebook and
weak-topic-click counts, and diagnostic (`quiz_complete`) completion counts.
It follows the same convention as `scripts/growth/gsc-opportunity-report.mjs`
(`--input <folder>` CLI arg, graceful `IMPLEMENTED_AWAITING_DATA` exit-0 when
no input is supplied, a "never fabricates data" banner, a reminder not to
commit raw exports).

**Run it:**

```
npm run growth:practice-report -- --input <folder>
# or, with output written to a file instead of stdout:
npm run growth:practice-report -- --input <folder> --out <file>
```

**Current status: IMPLEMENTED_AWAITING_DATA.** No GA4 export has been
supplied to this repo as of this writing -- running the script with no
`--input` (or `npm run growth:practice-report` on its own) prints
`IMPLEMENTED_AWAITING_DATA` and exits 0, along with the exact GA4 export
steps needed to populate it. See the script's own header comment for the
full expected file/column format; in short, it reads up to four CSVs from
the input folder (`events.csv` for totals, plus optional
`topic-breakdown.csv`, `mode-breakdown.csv`, `duration-breakdown.csv` for
per-dimension detail), matching GA4 Explore free-form export column headers
case-insensitively.

One implementation detail worth flagging for whoever eventually builds the
GA4 Explore reports to feed this script: the shared per-event context object
this page's `track()` wrapper merges into every event is emitted as
`specCode` (camelCase) -- not `spec_code` as this document's prose above
uses loosely -- and no `practice_set_id` parameter is ever sent. Confirmed by
reading the live `analyticsContext` object and every `track(...)` call site
in `src/pages/practice/[code]/index.astro` directly while writing the
reporting script. Use `specCode`, `board`, `qualification`, `subject`,
`topic`, `practice_mode`, `duration_bucket`, `question_id`, `marks`,
`timed_mode`, `is_correct`, `wrong_count`, `source`, and `score_percent` as
the real GA4 custom-dimension names if/when building the underlying Explore
reports -- those are the parameter names actually on the wire, not
placeholders.

The script has no dependency on the production website build (same "not a
build-time dependency" status as `gsc-opportunity-report.mjs` -- see
`docs/growth/README.md`), and any real export placed locally for it to read
must not be committed to the public repository (`.growth-private/` is
gitignored for this purpose).
