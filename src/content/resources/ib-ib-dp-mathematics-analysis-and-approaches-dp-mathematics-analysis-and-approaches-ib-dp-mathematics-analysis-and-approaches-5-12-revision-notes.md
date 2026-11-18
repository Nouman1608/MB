---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Continuity, differentiability and derivative from first principles (AHL only) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA HL section 5.12: limits, continuity, differentiability, first principles, higher derivatives, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.12 of IB DP Mathematics: Analysis and Approaches: continuity and differentiability (informally), limits, the derivative from first principles and higher derivatives**. It is AHL content, examined at HL only. The [section 5.12 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-12/) has the full explanations and worked examples.

## Core recall

- **Limit:** the value an expression approaches; it need not be the value at the point.
- **Converges:** approaches a finite limit. **Diverges:** does not.
- **Rational functions as x → ∞:** divide every term by the highest power of x in the denominator. Equal degrees give the ratio of leading coefficients.
- **Continuous at a:** f(a) exists and f(x) → f(a) from both sides. No hole, jump or asymptote.
- **Differentiable at a:** a single finite tangent gradient from both sides. No corner, cusp or vertical tangent.
- Differentiable ⟹ continuous. Continuous does **not** imply differentiable (|x| at 0).
- Continuity and differentiability are understood informally; the guide does not require formal tests in examinations.

## First principles

```
f′(x) = lim (h→0) [f(x + h) − f(x)] / h
```

Layout:

1. Write f(x + h) and expand (binomial coefficients for powers).
2. Subtract f(x); every remaining term contains h.
3. Divide by h (valid because h ≠ 0).
4. Let h → 0, keeping "lim (h→0)" until h has gone.

Examples: 4 − 3x² → −6x; x⁴ → 4x³; 5x² − 4x + 1 → 10x − 4.

At a point: f′(a) = lim (h→0) [f(a + h) − f(a)]/h. For f(x) = x³ − x at a = 2 the quotient simplifies to 11 + 6h + h², so f′(2) = 11.

Binomial rows to know: (x + h)² → 1, 2, 1; (x + h)³ → 1, 3, 3, 1; (x + h)⁴ → 1, 4, 6, 4, 1.

## Higher derivatives

- Notation: f″(x), f‴(x), f⁽ⁿ⁾(x), dⁿy/dxⁿ.
- e^(kx) → kⁿe^(kx).
- 1/x → (−1)ⁿ n!/xⁿ⁺¹.
- sin kx and cos kx cycle every four derivatives, gaining a factor k each time.
- x e^(kx) → (kⁿx + nkⁿ⁻¹)e^(kx).
- A general formula is proved by induction: assume for n = k, differentiate, obtain the n = k + 1 form.

## Key terms

| Term | Meaning |
|---|---|
| Limit | value approached as the variable approaches a value or infinity |
| Convergent | has a finite limit |
| Divergent | has no finite limit |
| Continuous at a point | no break in the graph there |
| Differentiable at a point | a unique non-vertical tangent there |
| First principles | the limit definition of the derivative |
| Higher derivative | f⁽ⁿ⁾(x), the result of differentiating n times |
| Indeterminate form | 0/0, which first principles avoids by cancelling h |

## Exam traps

- Substituting h = 0 before cancelling: 0/0 is not an answer.
- Missing "lim" notation in intermediate lines.
- Sign errors expanding −3(x + h)²: it is −3x² − 6xh − 3h².
- Using the power rule when the question says "from first principles".
- Writing f⁽ⁿ⁾ for 1/x without (−1)ⁿ, or with (n + 1)! instead of n!.
- Claiming |x| is not continuous at 0. It is continuous, but not differentiable.

## Self-test

1. Find lim (n→∞) (5n − 2)/(2n + 7).
2. Find lim (x→2) (x² − 4)/(x − 2).
3. Does (1.01)ⁿ converge or diverge as n → ∞?
4. Explain why f(x) = |x − 3| is continuous but not differentiable at x = 3.
5. Write down the definition of f′(x) from first principles.
6. Differentiate f(x) = x² + 5x from first principles.
7. Differentiate f(x) = 2x³ from first principles.
8. Use first principles to find f′(1) for f(x) = x² − 3x.
9. Write down d⁴y/dx⁴ for y = e^(−2x).
10. Write down f⁽ⁿ⁾(x) for f(x) = e^(5x).
11. Find f‴(x) for f(x) = 1/x and check it against (−1)ⁿ n!/xⁿ⁺¹.
12. f(x) = x² for x ≤ 2 and f(x) = 4x + c for x > 2. Find c so that f is continuous, and decide whether f is then differentiable at x = 2.

## Answers

1. 5/2 (divide by n).
2. (x − 2)(x + 2)/(x − 2) = x + 2 for x ≠ 2, so the limit is 4.
3. Diverges: 1.01 > 1, so the terms grow without bound.
4. The graph has no break at x = 3, but the gradient is −1 to the left and +1 to the right, so there is a corner.
5. f′(x) = lim (h→0) [f(x + h) − f(x)]/h.
6. f(x + h) − f(x) = 2xh + h² + 5h; divide by h: 2x + h + 5; limit 2x + 5.
7. 2(x + h)³ − 2x³ = 6x²h + 6xh² + 2h³; divide by h and let h → 0: 6x².
8. [(1 + h)² − 3(1 + h) − (−2)]/h = (h² − h)/h = h − 1 → −1.
9. (−2)⁴e^(−2x) = 16e^(−2x).
10. 5ⁿe^(5x).
11. f′ = −x⁻², f″ = 2x⁻³, f‴ = −6x⁻⁴; formula with n = 3: (−1)³ 3!/x⁴ = −6/x⁴. ✓
12. Continuity: 4 = 8 + c, so c = −4. Gradients: 2x = 4 from the left and 4 from the right, so f is also differentiable at x = 2 (y = 4x − 4 is the tangent to y = x² at (2, 4)).

## Where next

Practise with the [section 5.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-12-practice/), then move on to limits by l'Hôpital's rule with the [section 5.13 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-13-revision-notes/). The [AA HL further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/) summarise sections 5.12 to 5.19.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.12.
