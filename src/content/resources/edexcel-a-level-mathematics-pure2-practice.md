---
title: "Edexcel A Level Mathematics: Pure Mathematics 2 — Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
description: "Original exam-style practice questions with full worked answers on proof, the factor and remainder theorems, coordinate geometry of the circle, sequences and series, logarithms, and stationary points, for Pearson Edexcel International A Level Mathematics (YMA01), Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-09-04
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) | [Pure Mathematics 2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/)

---

## Section A

**1.** Show that (x − 2) is a factor of f(x) = x³ − 3x² − 4x + 12, and find the remainder when f(x) is divided by (x + 1). **[3]**

**2.** State the condition on the common ratio r for a geometric series to have a sum to infinity. **[1]**

## Section B

**3.** Prove, by exhaustion, that n² + n is even for every integer n from 1 to 5. **[4]**

**4.** An arithmetic sequence has first term 6 and common difference 5.

**(a)** Find the 15th term. **[2]**
**(b)** Find the sum of the first 15 terms. **[3]**

**5.** A geometric sequence has first term 8 and common ratio 0.5.

**(a)** Find the 6th term. **[2]**
**(b)** Explain why this series has a sum to infinity, and find it. **[3]**

**6.** Solve the equation 2ˣ⁺¹ = 30, giving your answer to 3 significant figures. **[3]**

**7.** Write log₃ 45 − log₃ 5 as a single logarithm, and evaluate it. **[3]**

**8.** Find the coordinates of the stationary points of y = x³ − 12x + 5, and use the second derivative to classify each. **[5]**

**9.** Find the area enclosed between the curve y = 4x − x² and the x-axis. **[4]**

**10.** An investment of £2,000 grows by 4% each year, compounded annually.

**(a)** Find its value after 5 years, to the nearest penny. **[2]**
**(b)** Find the least number of complete years for the investment to first exceed £2,800. **[4]**

## Answers

**1.** f(2) = 8 − 12 − 8 + 12 = 0 [1], so (x − 2) is a factor. By the remainder theorem, dividing by (x + 1) leaves remainder f(−1) = −1 − 3 + 4 + 12 [1] = **12** [1].

**2.** **|r| < 1** [1].

**3.** n = 1: 1 + 1 = 2 (even) [1]. n = 2: 4 + 2 = 6 (even). n = 3: 9 + 3 = 12 (even). n = 4: 16 + 4 = 20 (even). n = 5: 25 + 5 = 30 (even) [1] — all five cases stated explicitly [1]. Since every case within this stated, complete range gives an even result, n² + n is even for all integers 1 to 5 [1].

**4. (a)** u₁₅ = 6 + 14 × 5 [1] = **76** [1].
**(b)** S₁₅ = 15/2 (2×6 + 14×5) [1] = 15/2 (12 + 70) = 15/2 × 82 [1] = **615** [1].

**5. (a)** u₆ = 8 × 0.5⁵ = 8 × 0.03125 [1] = **0.25** [1].
**(b)** The series has a sum to infinity because |r| = 0.5 < 1 [1]; S∞ = a ÷ (1 − r) = 8 ÷ (1 − 0.5) = 8 ÷ 0.5 [1] = **16** [1].

**6.** Take logs of both sides: (x + 1) log 2 = log 30 [1]; x + 1 = log 30 ÷ log 2 [1]; x = (log 30 ÷ log 2) − 1 = 4.907 − 1 = **3.91** (3 s.f.) [1].

**7.** log₃ 45 − log₃ 5 = log₃(45 ÷ 5) [1] = log₃ 9 [1] = **2** (since 3² = 9) [1].

**8.** dy/dx = 3x² − 12 [1]; setting this to 0 gives x² = 4, so x = 2 or x = −2 [1]. y(2) = 8 − 24 + 5 = −11; y(−2) = −8 + 24 + 5 = 21 [1]. d²y/dx² = 6x: at x = 2, d²y/dx² = 12 > 0, so **(2, −11) is a minimum** [1]; at x = −2, d²y/dx² = −12 < 0, so **(−2, 21) is a maximum** [1].

**9.** The curve meets the x-axis where 4x − x² = 0, i.e. x = 0 and x = 4 [1]. Area = ∫₀⁴ (4x − x²) dx = [2x² − x³/3]₀⁴ [1] = (32 − 64/3) − 0 [1] = **32/3** (≈ 10.7) [1].

**10. (a)** Value = 2000 × 1.04⁵ [1] = **£2,433.31** [1].
**(b)** Need 2000 × 1.04ⁿ > 2800 [1]; 1.04ⁿ > 1.4 [1]; n > log 1.4 ÷ log 1.04 = 8.58 [1]; least whole number of complete years is **n = 9** [1].

## A note on proof by exhaustion

Question 3 illustrates the two things a proof-by-exhaustion answer must show explicitly to earn full marks: first, that the set of cases genuinely covers everything the statement claims (here, every integer from 1 to 5, with none silently skipped), and second, that each individual case has actually been checked and shown to satisfy the statement, rather than merely asserted. Presenting the cases as a clearly labelled list, in order, with each result shown, is what distinguishes a complete proof from an unstructured set of examples that happens to look similar — examiners specifically credit the visible completeness of the case list, not just the correctness of the arithmetic within it.

## Where marks are usually lost

- Substituting the wrong value when applying the factor or remainder theorem — for (ax − b), the value to substitute is x = b/a, not x = −b/a.
- Applying the arithmetic series sum formula to a geometric sequence, or vice versa, without first checking for a common difference or common ratio.
- Using the sum-to-infinity formula without checking or stating the |r| < 1 convergence condition.
- Not checking the sign of d²y/dx² either side of a stationary point when the second derivative is itself zero there, and evaluating a definite integral straight through a root without splitting it to find a true area.
- In compound growth "least number of years" questions, rounding down instead of up when the inequality requires the value to first exceed a target — the answer must be the smallest whole number of years satisfying the inequality, not the nearest one.

## Approaching pure mathematics 2 questions

When applying the factor theorem, substitute the value of x that makes the candidate factor zero — for (ax − b), that is x = b/a — and confirm the result is genuinely zero before factorising further; the remainder theorem uses exactly the same substitution to find what's left over instead. Before applying either series sum formula, explicitly check whether consecutive terms share a common difference or a common ratio, since this one-line check prevents an otherwise correct calculation from being built on the wrong formula. For stationary points, always complete the classification step — stating only that dy/dx = 0 at a point, without applying d²y/dx² (or checking the gradient's sign either side when the second derivative is itself zero), leaves the question unfinished. When a definite integral is asked to find an *area* rather than evaluated as a signed value, check first whether the curve crosses the x-axis within the given limits; if it does, split the integral at each root and add the absolute value of each part instead of evaluating straight through. Finally, for "least number of years" or similar inequality-based growth questions, always take logs correctly, solve for the boundary value, and then round in the direction the inequality actually requires, checking the answer against the original context rather than simply rounding to the nearest whole number by habit.
