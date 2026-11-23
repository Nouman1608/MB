---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.12 Continuity, differentiability and derivative from first principles (AHL only) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-12"
description: "Original IB DP Maths AA HL practice on section 5.12: limits, continuity, differentiability, first principles and higher derivatives, with mark schemes."
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

These questions cover **section 5.12 of IB DP Mathematics: Analysis and Approaches: continuity and differentiability, limits, the derivative from first principles and higher derivatives**. It is AHL content, for HL students. All questions are calculator-free. Where a question says "from first principles", the limit definition must be used.

Learn the methods first in the [section 5.12 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-12/) and the [section 5.12 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-12-revision-notes/).

## Section A

**1.** Find lim (n→∞) (4n² + 1)/(2n² − n). **[2]**

**2.** Find lim (x→−1) (x² + 3x + 2)/(x + 1). **[2]**

**3.** State, with a reason, whether each sequence converges or diverges as n → ∞.

**(a)** uₙ = (2/3)ⁿ **[1]**
**(b)** uₙ = (−1)ⁿ **[1]**

**4.** Let f(x) = x + 1 for x < 0 and f(x) = x² + 1 for x ≥ 0.

**(a)** Explain why f is continuous at x = 0. **[1]**
**(b)** Explain why f is not differentiable at x = 0. **[2]**

**5.** Differentiate f(x) = 3x² − 2x from first principles. **[4]**

**6.** Let y = x⁵ − 2x³. Find d³y/dx³. **[2]**

## Section B

**7.** Differentiate f(x) = x³ + 2x² from first principles. **[5]**

**8.** Let f(x) = 2x³ − x. Use first principles to find f′(−1). **[4]**

**9.** **(a)** Show from first principles that the derivative of f(x) = ax² + bx + c is 2ax + b. **[4]**
**(b)** Hence write down the gradient of y = 7x² − 3x + 2 at x = 1. **[1]**

**10.** Let f(x) = x²eˣ.

**(a)** Show that f′(x) = (x² + 2x)eˣ. **[2]**
**(b)** Find f″(x) and f‴(x), each in the form (x² + px + q)eˣ. **[3]**
**(c)** Conjecture an expression for f⁽ⁿ⁾(x), n ∈ ℤ⁺. **[2]**

**11.** Let f(x) = 1/(1 − x), x ≠ 1.

**(a)** Find f′(x), f″(x) and f‴(x). **[3]**
**(b)** Conjecture a formula for f⁽ⁿ⁾(x). **[1]**
**(c)** Prove your conjecture by mathematical induction. **[5]**

**12.** Let f(x) = ax² + 1 for x ≤ 1 and f(x) = 4x + b for x > 1, where a, b ∈ ℝ. The graph of f has no break and no corner at x = 1. Find the values of a and b. **[4]**

## Answers

**1.** Divide by n²: (4 + 1/n²)/(2 − 1/n) [1] → **2** [1] **[2]**

**2.** (x + 1)(x + 2)/(x + 1) = x + 2 for x ≠ −1 [1]; limit **1** [1] **[2]**

**3. (a)** **Converges** to 0, because |2/3| < 1 [1]
**(b)** **Diverges**: the terms alternate between −1 and 1 and approach no single value [1] **[2]**

**4. (a)** Both pieces give 1 as x → 0, and f(0) = 1 [1]
**(b)** Gradient from the left is 1 (from x + 1) [1]; gradient from the right is 2x = 0 at x = 0; they differ, so there is a corner [1] **[3]**

**5.** f(x + h) − f(x) = 3(x + h)² − 2(x + h) − 3x² + 2x [1] = 6xh + 3h² − 2h [1]; [f(x + h) − f(x)]/h = 6x + 3h − 2 [1]; f′(x) = lim (h→0) (6x + 3h − 2) = **6x − 2** [1] **[4]**

**6.** dy/dx = 5x⁴ − 6x², d²y/dx² = 20x³ − 12x [1]; **d³y/dx³ = 60x² − 12** [1] **[2]**

**7.** f′(x) = lim (h→0) [(x + h)³ + 2(x + h)² − x³ − 2x²]/h [1]; (x + h)³ = x³ + 3x²h + 3xh² + h³ and 2(x + h)² = 2x² + 4xh + 2h² [1]; numerator = 3x²h + 3xh² + h³ + 4xh + 2h² [1]; divide by h: 3x² + 3xh + h² + 4x + 2h [1]; limit **3x² + 4x** [1] **[5]**
*Examiner insight:* Every term left in the numerator must contain h; if one does not, the expansion is wrong.

**8.** f(−1 + h) = 2(−1 + h)³ − (−1 + h) = −1 + 5h − 6h² + 2h³ [1]; f(−1) = −1 [1]; [f(−1 + h) − f(−1)]/h = 5 − 6h + 2h² [1]; **f′(−1) = 5** [1] **[4]**

**9. (a)** f(x + h) − f(x) = a(x + h)² + b(x + h) + c − ax² − bx − c [1] = 2axh + ah² + bh [1]; divide by h: 2ax + ah + b [1]; limit as h → 0 is 2ax + b [1]
**(b)** 2(7)(1) − 3 = **11** [1] **[5]**

**10. (a)** Product rule: 2x eˣ + x²eˣ [1] = (x² + 2x)eˣ [1]
**(b)** f″(x) = (2x + 2)eˣ + (x² + 2x)eˣ = **(x² + 4x + 2)eˣ** [1] [1]; f‴(x) = **(x² + 6x + 6)eˣ** [1]
**(c)** The x coefficient is 2n [1]; the constants 0, 2, 6 are n(n − 1): **f⁽ⁿ⁾(x) = (x² + 2nx + n(n − 1))eˣ** [1] **[7]**

**11. (a)** f(x) = (1 − x)⁻¹; **f′(x) = (1 − x)⁻²** [1]; **f″(x) = 2(1 − x)⁻³** [1]; **f‴(x) = 6(1 − x)⁻⁴** [1]
**(b)** **f⁽ⁿ⁾(x) = n!/(1 − x)ⁿ⁺¹** [1]
**(c)** n = 1: 1!/(1 − x)² = f′(x), true [1]; assume f⁽ᵏ⁾(x) = k!(1 − x)^(−(k + 1)) [1]; differentiate: f⁽ᵏ⁺¹⁾(x) = k! × (−(k + 1))(1 − x)^(−(k + 2)) × (−1) [1] = (k + 1)!/(1 − x)ᵏ⁺² [1]; true for n = 1, and true for n = k implies true for n = k + 1, so true for all n ∈ ℤ⁺ by induction [1] **[9]**
*Examiner insight:* The chain rule factor −1 from differentiating (1 − x) is what makes every derivative positive; leaving it out produces a spurious (−1)ⁿ.

**12.** No break: a + 1 = 4 + b [1]; no corner: gradients equal, 2a(1) = 4 [1]; **a = 2** [1]; **b = −1** [1] **[4]**

## Where next

Check any errors against the first principles layout in the [section 5.12 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-12/), then try the limit questions in the [section 5.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-13-practice/) and the mixed HL set in the [AA HL further calculus practice questions](/resources/ib-dp-mathematics-aa-hl-further-calculus-practice/).
