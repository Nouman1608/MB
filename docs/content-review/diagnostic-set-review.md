# Diagnostic sets — verification and teacher review

**Written 2026-09-25 00:45 PKT (D-328).** Covers the 31 ten-minute diagnostics in
`src/data/diagnostics.ts` (19 syllabuses, 166 question slots, 165 distinct questions).

## Where things stand

| state | count | evidence |
|---|---|---|
| Sets built and live | 31 of 31 | Every set page returned 200 on 2026-09-25 00:40 PKT |
| Sets passing the build checks | 31 of 31 | `npm run validate:diagnostics`: questions exist in the bank, belong to the right code, have a topic tag, avoid figures and tables, fit the tier, 4-8 questions, at most 16 marks |
| Question tariffs matching the marks field | 166 of 166 | Every `[n]` in the question adds up to the question's `marks` |
| Answers with enough mark points for the marks | 166 of 166 | Checked by script on 2026-09-25 |
| Independent AI working of every question | 166 of 166 worked; **1 likely error** | See "Found so far" below. An AI check is not academic verification. |
| **Sets reviewed as a set by a subject teacher** | **0 of 31** | `setReview` is unset on every set; every page says "This selection has not yet been reviewed as a set by a subject teacher." |
| Practice files behind the questions read by the content audit | 70 of the 140 source files were **never** read by the audit | 88 of 166 questions come from files added on 2026-09-21 and 2026-09-24, after audit round 19 |

**Nothing here makes a set "reviewed".** Only a named subject teacher can, one set at a time.

## Found so far (fix before or during review)

1. **9609 A Level, `a-level-business-finance-a-level-practice-q1` (ARR)** — the answer divides the
   average annual profit by the *average investment* and gives 23.5%. The independent check
   expected division by the *initial capital cost*: 80 000 ÷ 600 000 × 100 = 13.3%. The answer
   also claims the June 2024 examiner report calls capital-cost division "the most common error".
   Which formula Cambridge 9609 uses (and whether that examiner-report claim is real) must be
   settled against the 9609 syllabus and the June 2024 Paper 32 mark scheme **by the Business
   teacher**. Until then the question is ambiguous at best: a student using the other method is
   marked wrong. Not changed here, because the right fix depends on that document.
2. **9709, `a-level-mathematics-probability-statistics-1-practice-q1`** is in both the AS set and
   the A Level set. Probability & Statistics 1 is AS content. The Mathematics reviewer should say
   whether the A Level set should swap it for a second-year question.
3. **9618 A Level** — two questions refer to "Question 1" / "Question 4" of their source file,
   which the diagnostic does not show. The reviewer should check both can be answered alone.

## What a reviewer checks

The pack for each subject is generated from the live data:

    npm run review:diagnostics -- chemistry      (or physics, mathematics, biology,
                                                  economics, business, computer-science)

For every set: the topic spread for the stated audience, whether the marks fit ten minutes,
nothing outside the syllabus or tier. For every question: the answer is right, the mark points
give exactly the stated marks, and — the part no script can do — **the "Try the real question
next" paper reference (132 answers) and the "Examiner insight" claim (80 answers) match the
real published paper, mark scheme and examiner report.**

## Proposed reviewers

Only teachers already marked `isReviewer: true` can be recorded. The validator now rejects a
review by anyone else, or by a teacher whose role does not name the subject (D-328).

| subject | sets | codes | proposed reviewer | note |
|---|---|---|---|---|
| Chemistry | 6 | 0620 ×2, 9701 ×2, 4CH1, 5070 | Nouman Ahmed | — |
| Physics | 6 | 9702 ×2, 0625 ×2, 4PH1, 5054 | Iftikhar Azeemi | — |
| Mathematics | 5 | 0580 ×2, 4024, 9709 ×2 | Muhammad Ghazali Siddiqui | — |
| Biology | 4 | 0610 ×2, 9700 ×2 | Saad Zai or Ameer Hamza | Owner to choose one |
| Economics | 3 | 9708 ×2, 2281 | Salman Ahmad | — |
| Business | 3 | 9609 ×2, 7115 | Asif Iqbal or Salman Ahmad | Settle the ARR question (item 1) first |
| Computer Science | 4 | 9618 ×2, 2210 ×2 | **None available** | Harris Khan teaches it but is not `isReviewer: true`. **Owner decision needed:** make him a reviewer (set `isReviewer: true` in `src/content/authors/harris-khan.md`), or name another reviewer |

## Recording a review

When a teacher returns a completed pack:

1. Fix anything they found, and have them re-check the fixed question.
2. Add to that set in `src/data/diagnostics.ts`:
   `setReview: { reviewerSlug: '<author-slug>', reviewedOn: 'YYYY-MM-DD' }` — the date they
   finished, never a planned date.
3. Keep the returned pack (scan or email) and cite it in the decision-log entry.
4. `npm run validate:diagnostics` checks the reviewer exists, is `isReviewer: true`, teaches the
   subject, and that the date is real and not in the future.

The set page then says "This set was reviewed by <name> on <date>" — for that set only. It says
nothing about the rest of the practice bank.
