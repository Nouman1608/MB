---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.13 Evaluation of limits using l’Hôpital’s rule or Maclaurin series (AHL only) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original IB DP Maths AA HL practice on section 5.13: limits by l'Hôpital's rule, repeated use and Maclaurin series, including unknown constants, with answers."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **section 5.13 of IB DP Mathematics: Analysis and Approaches: evaluating limits using l'Hôpital's rule or Maclaurin series**. It is AHL content, for HL students. All questions are calculator-free. Where a method is named, use it; otherwise choose either.

Learn the methods first in the [section 5.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-13/) and the [section 5.13 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-13-revision-notes/).

## Section A

**1.** Use l'Hôpital's rule to find lim (x→0) (eˣ − e^(−x))/sin x. **[3]**

**2.** Find lim (x→0) sin x/(eˣ − 1). **[3]**

**3.** Find lim (x→∞) (ln x)/√x. **[3]**

**4.** Find lim (x→2) (x² − 4)/ln(x − 1). **[3]**

**5.** Find lim (x→∞) (ln x)²/x. **[4]**

**6.** A student writes lim (x→0) (x + cos x)/(1 + x) = lim (x→0) (1 − sin x)/1 = 1. Explain why the method is invalid, even though the answer happens to be correct. **[2]**

## Section B

**7.** **(a)** Use l'Hôpital's rule to find lim (x→0) (cos 2x − 1)/(x sin x). **[4]**
**(b)** Verify your answer using Maclaurin series. **[3]**

**8.** **(a)** Write down the Maclaurin series of e^(x²) up to the term in x⁴. **[1]**
**(b)** Hence find lim (x→0) (e^(x²) − 1)/(1 − cos x). **[4]**

**9.** Find lim (x→0) (arctan x − x)/x³. **[4]**

**10.** Find lim (x→0) (1 − cos 3x)/(x sin 2x). **[5]**

**11.** **(a)** Show that (1 − cos x)/sin²x = 1/(1 + cos x). **[2]**
**(b)** Hence, or otherwise, find lim (x→0) (x − sin x)/(x − tan x). **[5]**

**12.** Given that lim (x→0) [ln(1 + x) − ax − bx²]/x³ = 1/3, find the values of a and b. **[5]**

**13.** **(a)** Find lim (x→0) (e^(3x) − 1 − 3x)/x² using l'Hôpital's rule. **[3]**
**(b)** Verify your answer using the Maclaurin series of e^(3x). **[2]**

**14.** Given that lim (x→0) (1 − cos kx)/x² = 8, where k > 0, find the value of k. **[4]**

## Answers

**1.** Form 0/0 [1]; (eˣ + e^(−x))/cos x [1]; → 2/1 = **2** [1] **[3]**

**2.** Form 0/0 [1]; cos x/eˣ [1] → **1** [1] **[3]**

**3.** Form ∞/∞ [1]; (1/x)/((1/2)x^(−1/2)) = 2/√x [1] → **0** [1] **[3]**

**4.** Form 0/0, since ln 1 = 0 [1]; 2x/(1/(x − 1)) = 2x(x − 1) [1] → **4** [1] **[3]**

**5.** Form ∞/∞ [1]; (2 ln x × 1/x)/1 = (2 ln x)/x, still ∞/∞ [1]; (2/x)/1 [1] → **0** [1] **[4]**

**6.** Substitution gives (0 + 1)/1 = 1, which is not an indeterminate form [1]; l'Hôpital's rule applies only to 0/0 or ∞/∞, so the step is invalid (the limit is 1 by direct substitution) [1] **[2]**

**7. (a)** Form 0/0 [1]; (−2 sin 2x)/(sin x + x cos x), still 0/0 [1]; (−4 cos 2x)/(2 cos x − x sin x) [1] → −4/2 = **−2** [1]
**(b)** cos 2x − 1 = −2x² + … [1]; x sin x = x² − … [1]; quotient → −2 [1] **[7]**

**8. (a)** **1 + x² + x⁴/2 + …** [1]
**(b)** e^(x²) − 1 = x² + x⁴/2 + … [1]; 1 − cos x = x²/2 − x⁴/24 + … [1]; quotient = (1 + x²/2 + …)/(1/2 − x²/24 + …) [1] → **2** [1] **[5]**

**9.** arctan x − x = −x³/3 + x⁵/5 − … [1] [1]; divide by x³: −1/3 + x²/5 − … [1]; limit **−1/3** [1] **[4]**
*Examiner insight:* By l'Hôpital this needs one application and then algebra: (1/(1 + x²) − 1)/(3x²) = −1/(3(1 + x²)) → −1/3.

**10.** Series: 1 − cos 3x = (9/2)x² − … [1] [1]; x sin 2x = 2x² − … [1]; quotient → (9/2)/2 [1] = **9/4** [1] **[5]**

**11. (a)** sin²x = 1 − cos²x = (1 − cos x)(1 + cos x) [1], so the quotient simplifies to 1/(1 + cos x) [1]
**(b)** Form 0/0 [1]; l'Hôpital: (1 − cos x)/(1 − sec²x) [1]; 1 − sec²x = −tan²x = −sin²x/cos²x, so the expression is −cos²x (1 − cos x)/sin²x [1] = −cos²x/(1 + cos x) [1] → −1/2, so the limit is **−1/2** [1] **[7]**

**12.** ln(1 + x) − ax − bx² = (1 − a)x + (−1/2 − b)x² + x³/3 − … [1] [1]; the limit is finite only if 1 − a = 0 and −1/2 − b = 0 [1]; **a = 1** [1], **b = −1/2** [1], and then the limit is indeed 1/3 **[5]**
*Examiner insight:* l'Hôpital's rule can reach the same conditions, but the series makes visible which coefficients must vanish; that reasoning is what the marks reward.

**13. (a)** Form 0/0 [1]; (3e^(3x) − 3)/(2x), still 0/0 [1]; 9e^(3x)/2 → **9/2** [1]
**(b)** e^(3x) = 1 + 3x + 9x²/2 + 9x³/2 + … [1]; so e^(3x) − 1 − 3x = 9x²/2 + …, and the quotient → 9/2 [1] **[5]**

**14.** cos kx = 1 − k²x²/2 + … [1]; 1 − cos kx = k²x²/2 − … [1]; the limit is k²/2 = 8 [1]; k > 0, so **k = 4** [1] **[4]**
*Examiner insight:* With l'Hôpital's rule twice, (k sin kx)/(2x) and then (k² cos kx)/2 → k²/2 give the same equation.

## How this set builds

Questions 1 to 5 each need one or two applications of the rule, so they test the routine: state the form, differentiate top and bottom separately, substitute. Question 6 tests the validity condition, which is a common short question. Questions 7, 8 and 13 compare the two methods on the same limit. Questions 9 and 10 reward choosing series, and questions 12 and 14 show how unknown constants are found from the condition that a limit exists.

## Where next

If questions 7 to 12 were difficult, revisit the method comparison in the [section 5.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-13/). For mixed HL practice, see the [AA HL further calculus practice questions](/resources/ib-dp-mathematics-aa-hl-further-calculus-practice/).
