---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.12 Continuity, differentiability and derivative from first principles (AHL only)"
resourceType: "study-guides"
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
description: "IB DP Maths AA HL section 5.12 study guide: informal continuity and differentiability, limits, first principles for polynomials and higher derivatives."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.12, an informal understanding of continuity and differentiability of a function at a point, understanding of limits (convergence and divergence), the definition of the derivative from first principles, and higher derivatives**. It is AHL content, so it is examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

The [AA HL further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/) covers this section in one worked example. This page explains each idea in more depth and shows how first principles questions are laid out for full marks.

## What section 5.12 asks of you

- Understand, informally, what it means for a function to be continuous or differentiable at a point. The treatment is intuitive: the guide does not expect formal tests of continuity or differentiability in examinations.
- Understand limits, including the convergence and divergence of sequences and functions.
- Use the definition f′(x) = lim (h→0) [f(x + h) − f(x)]/h to differentiate polynomials from first principles.
- Find and use higher derivatives, written dⁿy/dxⁿ or f⁽ⁿ⁾(x).

## Limits, convergence and divergence

A limit describes the value an expression approaches, not necessarily a value it reaches. An expression **converges** if it approaches a finite limit and **diverges** otherwise.

```
(3n + 1)/(n + 2) → 3 as n → ∞       (divide top and bottom by n: (3 + 1/n)/(1 + 2/n))
(2x² − 1)/(x² + 5) → 2 as x → ∞     (divide by x²)
(x² − 9)/(x − 3) → 6 as x → 3       (factorise: x + 3, for x ≠ 3)
(1.5)ⁿ diverges; (0.5)ⁿ → 0
```

The third example matters for first principles. At x = 3 the expression is undefined (0/0), yet the limit exists: for every x ≠ 3 the expression equals x + 3. A limit asks what happens as x gets close to 3, never what happens at 3 itself.

## Continuity, informally

A function is **continuous at x = a** if its graph can be drawn through x = a without lifting the pen. In terms of limits: f(a) exists, and f(x) → f(a) as x → a from either side. Three ways to fail:

- a gap or hole: (x² − 9)/(x − 3) is undefined at x = 3;
- a jump: a piecewise function whose two pieces meet at different heights;
- a vertical asymptote: 1/x at x = 0.

## Differentiability, informally

A function is **differentiable at x = a** if the graph has a single, non-vertical tangent there: the chord gradients from the left and from the right approach the same finite value.

- f(x) = |x| is continuous at 0, but the gradient is −1 to the left and +1 to the right. There is a corner, so it is **not differentiable** at 0.
- f(x) = x^(1/3) is continuous at 0, but its tangent there is vertical (the gradient grows without bound), so it is not differentiable at 0.

Differentiable at a point implies continuous there, but not the reverse: |x| is the standard counter-example.

**Illustration: joining two pieces smoothly.** Let f(x) = x² for x ≤ 1 and f(x) = ax + b for x > 1. For the pieces to meet, 1 = a + b. For the join to have no corner, the gradients must also agree: the left gradient at x = 1 is 2, so a = 2 and b = −1. The line y = 2x − 1 is exactly the tangent to y = x² at (1, 1), which is the geometric meaning of "differentiable at the join".

## The derivative from first principles

The gradient of the chord from (x, f(x)) to (x + h, f(x + h)) is [f(x + h) − f(x)]/h. As h → 0 the chord becomes the tangent:

```
f′(x) = lim (h→0) [f(x + h) − f(x)] / h
```

The guide limits first principles questions to polynomials. Use this five-line layout, which shows every step the mark scheme looks for.

### Worked example 1: f(x) = 4 − 3x²

```
f(x + h) = 4 − 3(x + h)² = 4 − 3x² − 6xh − 3h²
f(x + h) − f(x) = −6xh − 3h²
[f(x + h) − f(x)]/h = −6x − 3h         (h ≠ 0)
f′(x) = lim (h→0) (−6x − 3h) = −6x
```

### Worked example 2: f(x) = x⁴

The binomial theorem from the Number and algebra topic does the expanding:

```
(x + h)⁴ = x⁴ + 4x³h + 6x²h² + 4xh³ + h⁴
[f(x + h) − f(x)]/h = 4x³ + 6x²h + 4xh² + h³
f′(x) = lim (h→0) (4x³ + 6x²h + 4xh² + h³) = 4x³
```

### Worked example 3: the derivative at a point

For f(x) = x³ − x, find f′(2) from first principles.

```
f(2 + h) = (2 + h)³ − (2 + h) = 8 + 12h + 6h² + h³ − 2 − h
f(2) = 6
[f(2 + h) − f(2)]/h = (11h + 6h² + h³)/h = 11 + 6h + h²
f′(2) = lim (h→0) (11 + 6h + h²) = 11
```

The check f′(x) = 3x² − 1, f′(2) = 11 confirms the result, but in a first principles question the rule itself earns no marks.

**The key step** is cancelling h *before* letting h → 0. Substituting h = 0 first gives 0/0, which is exactly the indeterminate form the limit is designed to avoid. Write "lim (h→0)" on every line until the h has gone; dropping it early can cost a mark for notation.

## Higher derivatives

Differentiating repeatedly gives f″, f‴ and then f⁽ⁿ⁾(x), also written dⁿy/dxⁿ. Look for patterns:

| f(x) | f′ | f″ | f‴ | f⁽ⁿ⁾(x) |
|---|---|---|---|---|
| e^(3x) | 3e^(3x) | 9e^(3x) | 27e^(3x) | 3ⁿe^(3x) |
| 1/x | −1/x² | 2/x³ | −6/x⁴ | (−1)ⁿ n!/xⁿ⁺¹ |
| x e^(2x) | (2x + 1)e^(2x) | (4x + 4)e^(2x) | (8x + 12)e^(2x) | (2ⁿx + n2ⁿ⁻¹)e^(2x) |
| sin 2x | 2 cos 2x | −4 sin 2x | −8 cos 2x | repeats every four, with factor 2ⁿ |

A conjectured formula for f⁽ⁿ⁾(x) is proved by **mathematical induction** (HL proof, in the Number and algebra topic): check n = 1, assume the formula for n = k, differentiate once more, and show it gives the formula for n = k + 1. For f(x) = 1/x, differentiating (−1)ᵏ k!/xᵏ⁺¹ gives (−1)ᵏ k! × (−(k + 1))/xᵏ⁺² = (−1)ᵏ⁺¹ (k + 1)!/xᵏ⁺², which is the formula for n = k + 1.

## Common mistakes

- Letting h → 0 before dividing by h, which produces 0/0.
- Expanding (x + h)³ or (x + h)⁴ incorrectly; use the binomial coefficients 1, 3, 3, 1 and 1, 4, 6, 4, 1.
- Dropping "lim (h→0)" from the working before the final line.
- Quoting the power rule in a first principles question.
- Believing that continuous implies differentiable.
- In higher derivative patterns, losing the alternating sign (−1)ⁿ or the factorial.

## Exam technique: the command words

- **Use the definition / from first principles**: the limit definition must appear, with the algebra leading to the result; the power rule scores nothing.
- **Show that**: end with exactly the printed expression.
- **Conjecture**: write a formula for f⁽ⁿ⁾(x) from the first few derivatives; **prove** then means induction.

## Where next

Condense this section with the [section 5.12 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-12-revision-notes/) and practise with the [section 5.12 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-12-practice/). Limits of the form 0/0 return in section 5.13, in the [l'Hôpital's rule study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-13/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.12.
