# Diagnostic sets — verification and teacher review

**Written 2026-09-25 00:15 PKT (D-328).** Covers the 31 ten-minute diagnostics in
`src/data/diagnostics.ts` (19 syllabuses, 166 question slots, 165 distinct questions).

## Where things stand

| state | count | evidence |
|---|---|---|
| Sets built and live | 31 of 31 | Every set page returned 200 on 2026-09-25 00:13 PKT |
| Sets passing the build checks | 31 of 31 | `npm run validate:diagnostics`: questions exist in the bank, belong to the right code, have a topic tag, avoid figures and tables, fit the tier, 4-8 questions, at most 16 marks |
| Question tariffs matching the marks field | 166 of 166 | Every `[n]` in the question adds up to the question's `marks` |
| Answers with enough mark points for the marks | 166 of 166 | Checked by script on 2026-09-25 |
| Independent AI working of every question | 166 of 166 worked; 1 suspected error, **disproved on 2026-09-25** against Cambridge's own documents | See "Dispositions, 25 Sep 2026" below. An AI check is not academic verification. |
| **Sets reviewed as a set by a subject teacher** | **0 of 31** | `setReview` is unset on every set; every page says "This selection has not yet been reviewed as a set by a subject teacher." |
| Practice files behind the questions read by the content audit | 70 of the 140 source files were **never** read by the audit | 88 of 166 questions come from files added on 2026-09-21 and 2026-09-24, after audit round 19 |

**Nothing here makes a set "reviewed".** Only a named subject teacher can, one set at a time.

## Dispositions, 25 Sep 2026 (D-329)

**The owner excluded the teacher-review programme from this round.** No reviewer was assigned, no
`setReview` was filled, and reviewer roles were not changed. Every set still says it has not been
reviewed as a set. The three items recorded on 24-25 Sep (kept below as the original record) were
worked against primary documents, as follows.

**A. 9609 ARR (`a-level-business-finance-a-level-practice-q1`): DISPROVED. The answer is right and
was not changed.**
- Formula: the Cambridge 9609 syllabus defines ARR as (average profit / average investment) × 100,
  in section 10.3.2. Checked in the 2026-2028 syllabus (Version 2, published December 2025, p. 34)
  and in the 2023-2025 syllabus (Version 1), which governed the June 2024 series.
- Method: the June 2024 Paper 31 mark scheme (the variant Cambridge publishes), Question 3(a),
  p. 13 of 25, credits "Average investment" found as (capital cost + residual value) ÷ 2.
- Examiner-report claim: the June 2024 Principal Examiner Report for 9609, section "Paper 9609/32",
  Question 4(a) (p. 27 of 43), says many candidates did not use the syllabus equation, and that the
  most common error was using the capital cost rather than the average investment. It also says
  some candidates subtracted the residual value instead of adding it. The resource's attribution
  is accurate, and its real-paper pointer (June 2024, Paper 32, Question 4) matches.
- The Paper 32 question paper and mark scheme are not published by Cambridge, so they were not
  read. Nothing in the conclusion depends on them.
- Recalculated from the question's own data: profit = (200 000 + 220 000 + 240 000 + 260 000) −
  600 000 = 320 000; average profit = 80 000; average investment = (600 000 + 80 000) ÷ 2 = 340 000;
  ARR = 23.53%. The question gives everything needed, including that Year 4 includes the resale,
  so the answer is unique under the syllabus definition. Question 6 of the same file uses 23.5%
  consistently.
- The independent check's 13.3% (dividing by the initial cost) is the convention of other boards,
  not Cambridge 9609. No other 9609 resource uses ARR. The OCR H431 and IB files that use initial
  cost follow their own boards and were not in scope.

**B. 9709 AS content in the A Level set: SCOPE CONCERN DISPROVED; the repeated question is
DISCLOSED, not replaced.**
- The 9709 syllabus (2026-2027, Version 4, "Three routes") puts Paper 5 (Probability &
  Statistics 1) on **every** A Level route: Papers 1, 3, 4 and 5, or Papers 1, 3, 5 and 6.
- The A Level set is labelled "Pure Mathematics 3 with AS applied topics", so an S1 question is
  in scope.
- The one real issue is that `probability-statistics-1-practice-q1` is also in the AS set.
  Every other S1 question is worth 4-5 marks, so a straight swap takes the set over its 16-mark
  limit. Dropping the Pure 1 question to make room leaves 3 topics, below the minimum of 4. The
  only swap that fits both rules drops one of the three Pure 3 questions, which is the paper the
  set is built around (June 2025 Paper 32). That would trade a disclosed repeat for weaker coverage
  of the set's main paper.
- So the repeat is now stated on the page ("Its Probability & Statistics 1 question is also in the
  AS diagnostic.") and explained in `src/data/diagnostics.ts`. No new question was written.

**C. 9618 A Level questions that leaned on other questions: CONFIRMED AND FIXED.**
- `data-representation-a-level-practice-q5` said "Using the same system as Question 4". It now
  states the system itself: a 12-bit mantissa and a 4-bit exponent, both in two's complement.
  The answer (mantissa 1.00100110000, exponent 0100) was re-checked: −0.8515625 × 2⁴ = −13.625.
- `further-programming-a-level-practice-q2` said "In the Bicycle class from Question 1", while its
  answer named attributes the question never gave. It now names them: BikeID, Colour and Station.
- The same wording is used in the source resources, so the resource pages and the diagnostic
  match.
- `validate-diagnostics` now rejects a diagnostic question whose text refers to "Question n" or a
  previous/earlier question. Only question text is checked, because answers rightly cite real
  past-paper questions. It flagged exactly these two items among 166. Negative fixture [AI]
  proves the check.

Documents (all from cambridgeinternational.org): `697371-2026-2028-syllabus.pdf`,
`595459-2023-2025-syllabus.pdf`, `566847-june-2024-mark-scheme-paper-31.pdf`,
`566845-june-2024-examiner-report.pdf`, `697427-2026-2027-syllabus.pdf`.

## Found so far (original record, 25 Sep 00:15 — superseded by the dispositions above)

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
