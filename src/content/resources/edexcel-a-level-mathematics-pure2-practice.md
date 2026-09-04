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
description: "Original exam-style practice questions with full worked answers on proof, the modulus function, sequences and series, logarithms, and the chain rule, for Pearson Edexcel International A Level Mathematics (YMA01), Unit P2."
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

**1.** Solve |3x − 2| = 10. **[3]**

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

**8.** Differentiate y = (5x² − 3)⁴ using the chain rule. **[3]**

**9.** Differentiate y = x³ sin x using the product rule. **[3]**

**10.** An investment of £2,000 grows by 4% each year, compounded annually.

**(a)** Find its value after 5 years, to the nearest penny. **[2]**
**(b)** Find the least number of complete years for the investment to first exceed £2,800. **[4]**

## Answers

**1.** Either 3x − 2 = 10, giving x = 4 [1], or 3x − 2 = −10, giving x = −8/3 [1]; solutions **x = 4 or x = −8/3** [1].

**2.** **|r| < 1** [1].

**3.** n = 1: 1 + 1 = 2 (even) [1]. n = 2: 4 + 2 = 6 (even). n = 3: 9 + 3 = 12 (even). n = 4: 16 + 4 = 20 (even). n = 5: 25 + 5 = 30 (even) [1] — all five cases stated explicitly [1]. Since every case within this stated, complete range gives an even result, n² + n is even for all integers 1 to 5 [1].

**4. (a)** u₁₅ = 6 + 14 × 5 [1] = **76** [1].
**(b)** S₁₅ = 15/2 (2×6 + 14×5) [1] = 15/2 (12 + 70) = 15/2 × 82 [1] = **615** [1].

**5. (a)** u₆ = 8 × 0.5⁵ = 8 × 0.03125 [1] = **0.25** [1].
**(b)** The series has a sum to infinity because |r| = 0.5 < 1 [1]; S∞ = a ÷ (1 − r) = 8 ÷ (1 − 0.5) = 8 ÷ 0.5 [1] = **16** [1].

**6.** Take logs of both sides: (x + 1) log 2 = log 30 [1]; x + 1 = log 30 ÷ log 2 [1]; x = (log 30 ÷ log 2) − 1 = 4.907 − 1 = **3.91** (3 s.f.) [1].

**7.** log₃ 45 − log₃ 5 = log₃(45 ÷ 5) [1] = log₃ 9 [1] = **2** (since 3² = 9) [1].

**8.** Let u = 5x² − 3, so y = u⁴ [1]; dy/du = 4u³, du/dx = 10x [1]; dy/dx = 4(5x² − 3)³ × 10x = **40x(5x² − 3)³** [1].

**9.** Product rule: dy/dx = (d/dx[x³]) × sin x + x³ × (d/dx[sin x]) [1] = 3x² sin x + x³ cos x [1] = **3x² sin x + x³ cos x** [1].

**10. (a)** Value = 2000 × 1.04⁵ [1] = **£2,433.31** [1].
**(b)** Need 2000 × 1.04ⁿ > 2800 [1]; 1.04ⁿ > 1.4 [1]; n > log 1.4 ÷ log 1.04 = 8.58 [1]; least whole number of complete years is **n = 9** [1].

## A note on proof by exhaustion

Question 3 illustrates the two things a proof-by-exhaustion answer must show explicitly to earn full marks: first, that the set of cases genuinely covers everything the statement claims (here, every integer from 1 to 5, with none silently skipped), and second, that each individual case has actually been checked and shown to satisfy the statement, rather than merely asserted. Presenting the cases as a clearly labelled list, in order, with each result shown, is what distinguishes a complete proof from an unstructured set of examples that happens to look similar — examiners specifically credit the visible completeness of the case list, not just the correctness of the arithmetic within it.

## Where marks are usually lost

- Finding only one solution to a modulus equation, forgetting that the expression inside the modulus could equal either the positive or negative version of the target value.
- Applying the arithmetic series sum formula to a geometric sequence, or vice versa, without first checking for a common difference or common ratio.
- Using the sum-to-infinity formula without checking or stating the |r| < 1 convergence condition.
- Forgetting to multiply by the derivative of the inner function when applying the chain rule, especially when it is combined with the product or quotient rule in the same question.
- In compound growth "least number of years" questions, rounding down instead of up when the inequality requires the value to first exceed a target — the answer must be the smallest whole number of years satisfying the inequality, not the nearest one.

## Approaching pure mathematics 2 questions

For any modulus equation or inequality, always split into the two cases — the expression inside the modulus equal to the positive target and equal to the negative target — since forgetting the second case is the single most common way marks are lost on this sub-topic. Before applying either series sum formula, explicitly check whether consecutive terms share a common difference or a common ratio, since this one-line check prevents an otherwise correct calculation from being built on the wrong formula. For chain-rule differentiation, name the inner and outer functions separately before differentiating each, then combine them, rather than attempting the whole expression in one step — this is especially important once the chain rule is combined with the product or quotient rule, as in longer Unit P2 questions. Finally, for "least number of years" or similar inequality-based growth questions, always take logs correctly, solve for the boundary value, and then round in the direction the inequality actually requires, checking the answer against the original context rather than simply rounding to the nearest whole number by habit.
