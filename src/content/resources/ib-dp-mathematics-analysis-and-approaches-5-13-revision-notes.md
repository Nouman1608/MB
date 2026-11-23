---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.13 Evaluation of limits using l’Hôpital’s rule or Maclaurin series (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-13"
description: "Revision notes for IB DP Maths AA HL section 5.13: indeterminate forms, l'Hôpital's rule, Maclaurin series limits, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.13 of IB DP Mathematics: Analysis and Approaches: evaluating limits of f(x)/g(x), as x → a and as x → ∞, by l'Hôpital's rule (including repeated use) or by Maclaurin series**. It is AHL content, examined at HL only. Full worked examples are in the [section 5.13 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-13/).

## Core recall

- **Always substitute first.** A number means you are done.
- **Indeterminate forms in this section:** 0/0 and ∞/∞.
- **l'Hôpital's rule:** for 0/0 or ∞/∞, lim f/g = lim f′/g′, differentiating top and bottom separately.
- **Repeat** while the form is still 0/0 or ∞/∞; check and state the form each time.
- **Maclaurin method:** expand, cancel the lowest power of x, then let x → 0.
- **Other forms** (such as 0 × ∞): rewrite as a quotient first. x ln x = (ln x)/(1/x).
- **Unknown constant:** for the limit to exist, every term that would blow up must have a zero coefficient.

## Series to have ready

| Function | Series about 0 |
|---|---|
| eˣ | 1 + x + x²/2 + x³/6 + … |
| sin x | x − x³/6 + x⁵/120 − … |
| cos x | 1 − x²/2 + x⁴/24 − … |
| ln(1 + x) | x − x²/2 + x³/3 − … |
| arctan x | x − x³/3 + x⁵/5 − … |
| (1 + x)ᵖ | 1 + px + p(p − 1)x²/2 + … |

Replace x by kx and include the powers: sin 3x = 3x − (27/6)x³ + …; e^(x²) = 1 + x² + x⁴/2 + ….

## Choosing a method

| Situation | Better method |
|---|---|
| x → ∞ | l'Hôpital (or divide by the highest power) |
| one application settles it | l'Hôpital |
| difference of nearly equal terms, several applications needed | Maclaurin series |
| unknown constant to find | Maclaurin series (shows which terms must vanish) |
| question names a method | that method |

## Useful results

- lim (x→0) (sin x)/x = 1
- lim (x→0) (1 − cos x)/x² = 1/2
- lim (x→0) (eˣ − 1)/x = 1
- lim (x→0) ln(1 + x)/x = 1
- lim (x→∞) xⁿ/eˣ = 0 for any n
- lim (x→∞) (ln x)/x = 0

## Worked mini-examples

**One application.** lim (x→0) (e^(2x) − 1)/sin x: form 0/0; 2e^(2x)/cos x → 2.

**Repeated.** lim (x→0) (eˣ − 1 − x)/x²: 0/0 → (eˣ − 1)/(2x), still 0/0 → eˣ/2 → 1/2.

**At infinity.** lim (x→∞) x²/eˣ: ∞/∞ → 2x/eˣ → 2/eˣ → 0.

**By series.** lim (x→0) (ln(1 + x) − x)/x²: numerator −x²/2 + x³/3 − …, so −1/2.

**Unknown constant.** lim (x→0) (sin 3x − ax)/x³ is finite only if the x term vanishes: a = 3, limit −9/2.

**Product form.** x ln x as x → 0⁺: write (ln x)/(1/x), ∞/∞ → −x → 0.

**Not indeterminate.** (cos x)/(x + 1) at x = 0 is 1 by substitution; the rule must not be used. Applying it anyway gives −sin x → 0, a wrong answer.

**Lowest powers.** By series, compare the lowest powers of x top and bottom: equal powers give the ratio of coefficients; a higher power on top gives 0.

## Key terms

| Term | Meaning |
|---|---|
| Indeterminate form | 0/0 or ∞/∞: substitution does not decide the limit |
| l'Hôpital's rule | replace f/g by f′/g′ when the form is indeterminate |
| Repeated use | applying the rule again while the form remains indeterminate |
| Maclaurin series | power series of a function about x = 0 |
| Leading term | the lowest-power non-zero term, which decides the limit |

## Exam traps

- Quotient rule used by mistake.
- Rule applied to a determinate limit, such as (cos x)/(x + 1) as x → 0 (answer 1, not 0).
- Stopping while still 0/0.
- Series truncated before the power in the denominator.
- Chain rule factor missing from a series: sin 2x starts 2x − (8/6)x³, not 2x − x³/6.
- Form not stated: losing the method mark for justification.

## Self-test

1. lim (x→0) (tan x − x)/x³
2. lim (x→0) (1 − cos x)/x²
3. lim (x→0) (arctan x)/x
4. lim (x→0) ln(1 + 2x)/(3x)
5. lim (x→∞) (3x² + 2x)/(5x² − 1)
6. lim (x→∞) x³e^(−x)
7. lim (x→0⁺) x ln x
8. Explain why l'Hôpital's rule cannot be used for lim (x→0) (x + 2)/(x + 1).
9. lim (x→0) (sin 3x − 3x)/x³
10. Find a so that lim (x→0) (eˣ − 1 − ax)/x² is finite, and the limit.
11. lim (x→0) (2ˣ − 1)/x
12. lim (x→0) (√(1 + x) − 1 − x/2)/x²

## Answers

1. 0/0; sec²x − 1 = tan²x over 3x², and tan²x/x² → 1, so 1/3.
2. Series: 1 − cos x = x²/2 − …, so 1/2.
3. Series: (x − x³/3 + …)/x → 1.
4. 0/0 → (2/(1 + 2x))/3 → 2/3.
5. 3/5 (divide by x², or l'Hôpital twice).
6. x³/eˣ: ∞/∞ three times → 6/eˣ → 0.
7. (ln x)/(1/x): ∞/∞ → (1/x)/(−1/x²) = −x → 0.
8. Substitution gives 2/1 = 2, which is not indeterminate; the limit is 2.
9. sin 3x − 3x = −(9/2)x³ + …, so −9/2.
10. eˣ − 1 − ax = (1 − a)x + x²/2 + …; finite needs a = 1, and then the limit is 1/2.
11. 0/0 → 2ˣ ln 2 / 1 → ln 2.
12. (1 + x)^(1/2) = 1 + x/2 − x²/8 + …, so the quotient → −1/8.

## Where next

Use the [section 5.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-13-practice/) for exam-style work, and the [AA HL further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/) for the wider HL unit.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.13.
