# Content expansion decision engine

Programme: Search Intelligence & Demand-Led Growth (Section 41, WS12). This is
the formal rule for whether a new page/resource gets created, replacing "does
this subject have fewer pages than that one" as a justification.

## The rule

New content (a new resource, hub, or practice set) requires **at least one** of:

1. **Search demand** — a query classified `QUICK_WIN`, `NEAR_PAGE_ONE`,
   `EMERGING_DEMAND`, or `CONTENT_GAP` by `scripts/growth/gsc-opportunity-report.mjs`
   with no existing page that already targets it.
2. **Practice demand** — a topic flagged by the practice-gap dashboard
   (`/admin/practice-gaps/`, `scripts/practice-gap-report.mjs`) as having zero
   questions against a real, sourced syllabus subtopic.
3. **Conversion demand** — a page/topic with meaningfully above-average
   `teacher_support_click` or enquiry-adjacent event rate relative to its
   traffic, once that instrumentation exists (see
   `docs/growth/practice-conversion-analytics.md`, currently
   `IMPLEMENTED_AWAITING_DATA` for the practice side).
4. **Academic necessity** — a syllabus-required topic with `NOT_YET_MODELED`
   assessment-structure status (currently 19/160 ACTIVE combinations, per
   `npm run validate:academic`'s coverage line) or a genuine `0` practice-
   question gap.
5. **Flagship strategy** — directly strengthens one of 0620/0625/0580/9701/9702.
6. **Specification change** — a board publishes a syllabus revision affecting
   existing content.
7. **Assessment gap** — a real gap surfaced by `validate:assessments` or the
   grade-threshold/assessment validators.

**None of these is "the subject has fewer pages than a comparable subject."**
That comparison is explicitly excluded as a justification (Section 11, Section 41).

## What this looks like in practice

Before writing new content, run (or read a recent run of):

```
npm run report:practice-gaps
npm run coverage:academic-v2
npm run growth:gsc -- --input <folder>   # once an export exists
```

and cite which of the seven criteria above the specific gap satisfies, in the
commit message or decision-log entry — matching this repo's existing
convention (see `docs/decision-log.md` D-108 through D-117 for the practice-
gap-driven content rounds, which already implicitly followed criterion 2/4).

## Status

**COMPLETE** as a written rule. Not yet wired into a script/lint that blocks a
commit failing all seven criteria — that would be a reasonable future
enhancement but wasn't attempted here (a process rule enforced by a script is
a meaningfully bigger piece of work than documenting the rule itself, and this
repo's existing content-round discipline already shows the rule being followed
in practice without automated enforcement).
