# Repair regression — D-202 reversed a correct finding, and the defect spread

*Repair verification, round one. The first check of the ~178 findings closed by D-200 to
D-210 found a regression on the first cluster examined.*

**Status:** this replaces the provisional notice published at this path before a shell was
available. Both findings are now encoded in the audit artefacts as **E900** and **Q362**;
the rebuild passes all nine validation steps (1651 findings, ids unique, headline totals
agreeing across MD and HTML).

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

1. **Correct all five files** per E900 below.
2. **Correct the D-202 entry** to record that E782 was right. Leaving it stands as evidence for
   the wrong figure.
3. **Re-check anything else closed in the same round on secondary evidence.** D-207 declares
   four findings "non-resolving against the current corpus and primary sources after direct
   verification" (E822/U56, E848, E823, I346). That wording is right in form — primary sources,
   direct verification — but it has not been checked, and D-202 used similar wording.

---

## E900 - A repair round reversed a correct finding and spread the defect to two files that had been right, so five resources now contradict the blueprint they cite [Confirmed error, High]

- **Files:** `ib-myp-language-acquisition-syllabus-guide`, `ib-myp-language-acquisition-proficiency-phases-revision-notes`, `ib-myp-language-acquisition-eassessment-exam-preparation`, `ib-myp-language-acquisition-subject-guide`, `ib-myp-language-acquisition-assessment-revision-notes`
- **Where:** Criterion mark figures in all five files of the family
- **Locate by:** `independently weighted, each worth an equal 32 marks, so no single`

**What is wrong.** An earlier finding of this audit recorded that three files of this family gave each of the four assessment criteria a mark total of thirty-two, which matches neither of the qualification two scales, and that two further files in the same family gave the blueprint figure of twenty-four and were right. That finding was careful about the distinction, because the figure thirty-two is real in this qualification: each criterion carries eight achievement levels and four criteria at eight levels total thirty-two for criterion-related classroom assessment, while the external on-screen examination blueprint allocates twenty-four raw marks to each criterion with a permitted variation of no more than three. The published handoff for that batch carried the warning in bold that thirty-two must not be replaced by twenty-four wherever it appears. A repair round has now reversed the finding on the ground that it was itself wrong, relying on a transcript of a board webinar rather than on the board published brief, and has changed the files in the opposite direction. The board own brief for this subject, which is the document the finding cited, prints a blueprint table giving twenty-four marks to each of the four criteria and states separately that each criterion has eight achievement levels. Every file of the family now states thirty-two marks for each criterion in a passage about the external examination, the figure twenty-four appears in none of the five, and one file has carried the wrong figure into a derived total of ninety-six for the three criteria assessed together. The two files that were right before the repair are now wrong, so this family is in a worse state than the baseline the audit began from. Note for correction: the classroom figure of eight levels per criterion, and the total of thirty-two across four criteria for classroom assessment, are correct and must be kept; only the per-criterion figure in external-examination passages is wrong.

**Fix.** Set the per-criterion figure to twenty-four in every passage about the on-screen examination across all five files, correct the derived total from ninety-six to seventy-two, keep the eight achievement levels and the classroom total of thirty-two, and state the two scales side by side once so the distinction cannot be collapsed again.

**Evidence.** International Baccalaureate Organization, MYP subject brief: Language acquisition, from 2020, first eAssessment May/November 2023 - section III gives eight achievement levels per criterion for classroom assessment, and the section IV eAssessment blueprint table gives 24 marks to each of criteria A, B, C and D, with the distribution permitted to vary by no more than three marks - https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-language-acquisition-2020-en.pdf

**Evidence.** Marlbridge decision log D-202, commit f8634099109c80cf57f2b5675102a03cd360e45e, which records the reversal and the webinar transcript relied on for it - https://github.com/Nouman1608/MB/commit/f8634099109c80cf57f2b5675102a03cd360e45e

---

## Q362 - A finding was reversed on secondary evidence without re-reading the primary document it cited, and the reversal was recorded as the audit being wrong [Questionable claim, High]

- **Files:** `ib-myp-language-acquisition-syllabus-guide`
- **Where:** Decision-log entry recording the reversal
- **Locate by:** `independently weighted, each worth an equal 32 marks, so no single`

**What is wrong.** The reversal described in the preceding finding is worth recording separately from its result, because the method rather than the subject is what will repeat. Three things went wrong in order. First, the finding was restated before it was answered: the decision-log entry says the finding instructed changing the figure wherever it appears, when the finding said the opposite in bold in its own handoff and drew the distinction between the two scales in its own body. Second, the evidence chosen to overturn it was a transcript of a board webinar, which is secondary, rather than the board published subject brief, which is primary and was named in the finding own evidence line; a webinar sentence that each criterion is assessed out of thirty-two is consistent with the classroom scale the finding had already described, so it does not contradict the finding at all. Third, the primary document was not re-read before the reversal was acted on, and it settles the question in a single printed table. The result was recorded in the decision log as the auditor being wrong, which is the most expensive possible form of this error, because a future reader now has a written record that the correct figure is the incorrect one. Note for correction: this audit has itself reversed four of its own findings and was right to, so reversal is not the problem. The problem is reversing against a primary source without opening it. Where a repair round believes a finding is wrong, the finding own cited document is the first thing to read and the only thing that settles it, and where a webinar, a support article or a teacher forum disagrees with a published specification, the specification governs.

**Fix.** Reopen the reversal and correct the decision-log entry to record that the finding was right. Adopt the rule that a finding may only be reversed against the primary document it cited, read at the point of reversal, and that secondary material may raise a question but never settle one. Re-check any other finding closed in the same round on secondary evidence.

**Evidence.** International Baccalaureate Organization, MYP subject brief: Language acquisition, from 2020, first eAssessment May/November 2023 - section III gives eight achievement levels per criterion for classroom assessment, and the section IV eAssessment blueprint table gives 24 marks to each of criteria A, B, C and D, with the distribution permitted to vary by no more than three marks - https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-language-acquisition-2020-en.pdf

**Evidence.** Marlbridge decision log D-202, commit f8634099109c80cf57f2b5675102a03cd360e45e, which records the reversal and the webinar transcript relied on for it - https://github.com/Nouman1608/MB/commit/f8634099109c80cf57f2b5675102a03cd360e45e

---

*Verification for this document: the IB subject brief was fetched and read in full; all five
resource files were read on `main` at `cc7d589`; E782's text and its published handoff were
read from the audit's own artefacts. Nothing here rests on a summary.*
