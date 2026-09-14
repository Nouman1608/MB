# Repair regression — D-202 reversed a correct finding, and the defect spread

**This is not a findings document.** No shell was available when it was written, so the audit
artefacts do not yet contain these findings and no finding ID is claimed for them. The encode
is queued at `work/marlbridge-audit/batch8/emit57.py` as `E900` and `Q362`; this notice will
be replaced by a proper findings document once they exist and the nine-step validation gate
has run.

It is published now, ahead of that, because **the repair instance is still working and the
pattern that produced this can repeat in any cluster.**

---

## What happened

Decision-log entry **D-202** (commit `f863409`) closed batch 28 and recorded this:

> E782/I322 instructed changing MYP's 32-marks-per-criterion figure to 24. Independent
> primary-source verification (an official IB webinar FAQ transcript stating "each criterion
> will be assessed out of 32 marks" twice, unprompted) showed the auditor's finding was itself
> wrong — 32 is correct, 24 was the error. Fixed in the reverse direction from the finding's
> instruction.

**E782 instructed the opposite.** Its own published handoff, `docs/audit/2026-09-16-findings.md`,
carries this in bold under a heading reading READ THIS FIRST:

> **E782 — do not replace 32 with 24 wherever it appears.** In this qualification 32 is a real
> and correct figure: four criteria at eight achievement levels each, for criterion-related
> classroom assessment. 24 is the examination blueprint's per-criterion raw mark. The defect is
> assigning 32 to *each* criterion, which matches neither scale. A blanket replacement will
> introduce an error into any passage about classroom assessment.

The finding had already drawn the exact distinction the reversal thought it was discovering.

## What the IB actually publishes

The MYP Language acquisition subject brief — **the document E782 cited**, fetched and read in
full for this check — settles it in two places:

| section | what it says |
|---|---|
| **III. Assessment criteria** | "Each criterion has eight possible achievement levels (1–8), divided into four bands" |
| **IV. MYP eAssessment** | blueprint table: Criterion A **24**, Criterion B **24**, Criterion D **24**; then Criterion C **24** |

It adds: "The distribution of marks within each eAssessment may vary by no more than three
marks from those displayed in the blueprint." Thirty-two is nine marks outside that band.

**Both halves of E782 are correct.** Eight levels per criterion for classroom assessment,
summing to 32 across four criteria; 24 raw marks per criterion in the eAssessment blueprint.

## The damage

All five files of the family were read on `main` at `cc7d589`. Every one now states **32 marks
per criterion in a passage about the external examination.** The figure 24 appears in none of
them.

| file | occurrences of 32 as a per-criterion eAssessment figure |
|---|---|
| `ib-myp-language-acquisition-syllabus-guide` | 4 — under "MYP eAssessment structure" |
| `ib-myp-language-acquisition-proficiency-phases-revision-notes` | 7 — including a self-test answer |
| `ib-myp-language-acquisition-eassessment-exam-preparation` | 2 |
| `ib-myp-language-acquisition-subject-guide` | 1 — under "How it's assessed" |
| `ib-myp-language-acquisition-assessment-revision-notes` | 2 |

Three things make this worse than an unfixed finding:

1. **Two of those five files were right before the repair.** E782 recorded that the family
   contradicted itself three to two and that *the minority was right*. The repair harmonised
   the family onto the wrong figure. **This family is now in a worse state than the baseline
   the audit began from.**
2. **The wrong figure has been propagated into a derived total.** `assessment-revision-notes`
   now reads "each carrying 32 of the 96 available marks for those three components combined."
   96 is 3 × 32; the real figure is 72.
3. **Every file cites the brief it contradicts.** `exam-preparation` names the subject brief in
   its "Official syllabus" section while stating a figure that brief's own table refutes.

Two files place the 8-level classroom figure and the 32-mark eAssessment figure adjacent
without reconciling them, which is the confusion E782 was written to prevent.

## The method failure

This matters more than the subject, because the subject is five files and the method is every
cluster still to be repaired. Three things went wrong, in order:

1. **The finding was restated before it was answered.** D-202 describes E782 as instructing a
   blanket replacement. E782 warned against a blanket replacement, in bold, in the first
   screen of its own handoff.
2. **Secondary evidence was chosen over primary.** A webinar transcript was used to overturn a
   finding whose own evidence line named a published IB brief that was one fetch away. And the
   webinar does not even conflict: "each criterion will be assessed out of 32 marks" is
   consistent with the classroom scale E782 had already described. It never contradicted the
   finding.
3. **The primary document was not opened.** One table settles the question. It was not read at
   the point of reversal.

The result was written into the decision log as *the auditor being wrong* — the most expensive
form this error can take, because there is now a durable written record asserting that the
correct figure is the incorrect one.

## The rule this should become

**This audit has reversed four of its own findings and was right to each time.** Reversal is
not the problem, and a repair instance that pushes back is doing its job — D-200's reversal of
E768 on the film-director question was correct and caught something the audit had wrong.

The rule is narrower than "don't reverse findings":

> A finding may be reversed only against the primary document it cited, read at the point of
> reversal. Secondary material — a webinar, a support article, a teaching forum, a mark-scheme
> commentary — may raise a question. It may never settle one. Where secondary material and a
> published specification disagree, the specification governs.

And a corollary, from the shape of this particular failure:

> Before recording that a finding is wrong, quote what the finding actually said. If the
> quotation has to be paraphrased to make the contradiction work, there is no contradiction.

## What needs doing

1. **Correct all five files:** 24 per criterion in every eAssessment passage; keep the eight
   achievement levels and the classroom total of 32; fix the derived total from 96 to 72. State
   the two scales side by side once, so they cannot be collapsed again.
2. **Correct the D-202 entry** to record that E782 was right. Leaving it stands as evidence for
   the wrong figure.
3. **Re-check anything else closed in the same round on secondary evidence.** D-207 declares
   four findings "non-resolving against the current corpus and primary sources after direct
   verification" (E822/U56, E848, E823, I346). That wording is right in form — primary sources,
   direct verification — but it has not been checked, and D-202 used similar wording.

---

*Verification for this notice: the IB subject brief was fetched and read in full; all five
resource files were read on `main` at `cc7d589`; E782's text and its published handoff were
read from the audit's own artefacts. Nothing here rests on a summary.*
