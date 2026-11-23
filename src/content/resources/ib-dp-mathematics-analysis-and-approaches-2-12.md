---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.12 Polynomial functions, zeros, roots and factors (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-12"
description: "HL study guide to IB Maths AA 2.12: polynomial graphs, zeros and factors, polynomial division, factor and remainder theorems, and sums and products of roots."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 2.12 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021): polynomial functions, their graphs and equations; zeros, roots and factors; the factor and remainder theorems; and the sum and product of the roots of a polynomial equation. It is **HL only** (AHL). The overview of all five HL function sections is in the [further functions study guide](/resources/ib-dp-mathematics-aa-hl-further-functions/); this page goes further on division, sketching from factors, building a polynomial from given information and using the root formulae.

Afterwards, use the [polynomials revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-12-revision-notes/) and the [polynomials practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-12-practice/).

## The vocabulary, used precisely

- A **polynomial** of degree n has the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀, with aₙ ≠ 0. aₙ is the **leading coefficient** and a₀ the **constant term**.
- A **zero** of the function p is a value of x where p(x) = 0. A **root** is a solution of the equation p(x) = 0. They are the same numbers, but "zero" belongs to a function and "root" to an equation.
- (x − r) is a **factor** of p(x) exactly when r is a zero.
- A root r has **multiplicity** k when (x − r)ᵏ is a factor but (x − r)ᵏ⁺¹ is not.

A degree-n polynomial has exactly n roots if complex roots are counted with multiplicity, but at most n real ones, so its graph meets the x-axis at most n times. It has at most n − 1 turning points.

## Polynomial division

The factor theorem finds one factor; division finds what is left. Long division works exactly like numerical long division. Always write in every power, using 0 for missing terms.

Divide 2x³ − 3x² − 11x + 6 by (x − 3):

```
2x³ ÷ x = 2x²       2x²(x − 3) = 2x³ − 6x²    subtract → 3x² − 11x
3x² ÷ x = 3x        3x(x − 3)  = 3x² − 9x     subtract → −2x + 6
−2x ÷ x = −2        −2(x − 3)  = −2x + 6      subtract → 0
Quotient 2x² + 3x − 2 = (2x − 1)(x + 2), remainder 0
```

So 2x³ − 3x² − 11x + 6 = (x − 3)(2x − 1)(x + 2).

A faster route for a cubic is **comparing coefficients**: write p(x) = (x − 3)(ax² + bx + c), read a from the x³ term and c from the constant term, then find b from one middle term.

## Factor and remainder theorems in action

- p(x) divided by (x − r) leaves remainder p(r).
- p(x) divided by (ax − b) leaves remainder p(b/a), since ax − b = 0 when x = b/a.
- p(r) = 0 if and only if (x − r) is a factor.

Example: the remainder when 4x³ − 2x + 5 is divided by (2x − 1) is p(1/2) = 4(1/8) − 1 + 5 = **9/2**.

**Searching for a first root.** For a polynomial with integer coefficients and leading coefficient 1, any integer root must divide the constant term. So for x³ − 2x² − 5x + 6, try ±1, ±2, ±3, ±6. When the leading coefficient is not 1, fractions such as 1/2 are also possible.

### Worked example 1: a quartic by two factors

Factorise p(x) = x⁴ − x³ − 7x² + x + 6 fully and sketch y = p(x).

```
p(1)  = 1 − 1 − 7 + 1 + 6 = 0      so (x − 1) is a factor
p(−1) = 1 + 1 − 7 − 1 + 6 = 0      so (x + 1) is a factor
So (x − 1)(x + 1) = x² − 1 is a factor.
p(x) = (x² − 1)(x² + bx − 6)       (x⁴ term and constant term)
x³ terms: b = −1
p(x) = (x² − 1)(x² − x − 6) = (x − 1)(x + 1)(x − 3)(x + 2)
```

Check with the root formulae (next section): the sum of the roots is 1 − 1 + 3 − 2 = 1 = −(−1)/1, and the product is 6 = (−1)⁴ × 6/1.

To sketch: degree 4 with a positive leading coefficient, so both ends rise. The graph crosses the x-axis at −2, −1, 1 and 3 and meets the y-axis at (0, 6). With four single roots it has three turning points.

## Reading and building graphs from factors

The shape near each zero depends on its multiplicity:

| Factor | Behaviour at the zero |
|---|---|
| (x − r) | crosses the axis |
| (x − r)² | touches the axis (a turning point on the axis) |
| (x − r)³ | crosses with a flattening (a point of inflection on the axis) |

The ends follow the leading term aₙxⁿ: even degree means both ends go the same way, odd degree means opposite ways, and the sign of aₙ decides which.

### Worked example 2: a cubic from its graph

A cubic graph touches the x-axis at x = 2, crosses it at x = −1 and meets the y-axis at (0, 8). Find its equation.

```
Touch at 2 → (x − 2)²;  cross at −1 → (x + 1)
y = a(x − 2)²(x + 1)
At (0, 8): a(4)(1) = 8, so a = 2
y = 2(x − 2)²(x + 1) = 2x³ − 6x² + 8
```

The unknown constant a is the step students forget. Without it, the y-intercept would be 4, not 8.

## Sum and product of the roots

For aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₀ = 0, counting complex and repeated roots:

```
sum of the roots     = −aₙ₋₁ / aₙ
product of the roots = (−1)ⁿ a₀ / aₙ
```

These are in the formula booklet; the skill is using them with other facts.

### Worked example 3: with a complex root

The cubic x³ + bx² + cx + d = 0, with real coefficients, has roots 2 and 1 + i. Find b, c and d.

```
Real coefficients → 1 − i is also a root.
Sum:     2 + (1 + i) + (1 − i) = 4 = −b          → b = −4
Product: 2(1 + i)(1 − i) = 2 × 2 = 4 = (−1)³ d   → d = −4
p(2) = 0: 8 − 16 + 2c − 4 = 0                    → c = 6
```

So the equation is x³ − 4x² + 6x − 4 = 0, and indeed (x − 2)(x² − 2x + 2) expands to this. The conjugate-pair fact comes from section 1.14, covered in the [complex numbers study guide](/resources/ib-dp-mathematics-aa-hl-complex-numbers/).

## Common mistakes

- Using p(3) for the remainder on division by (x + 3). It is p(−3).
- Using p(2) for division by (2x − 1). It is p(1/2).
- Leaving out a zero coefficient in long division, so the columns misalign.
- Forgetting the leading constant a when building a polynomial from its zeros.
- Sign of the product: for odd n it is −a₀/aₙ.
- Counting only real roots in the sum and product formulae.
- Saying a root of multiplicity 2 "crosses" the axis.

## Exam technique: command words

- **Show that (x − r) is a factor**: substitute and state "p(r) = 0, so (x − r) is a factor". The concluding sentence earns the mark.
- **Hence factorise fully**: use the factor you were given; do not start from scratch.
- **Find the values of a and b**: build two equations, usually one from the factor theorem and one from the remainder theorem, and solve simultaneously.
- **Sketch**: show intercepts with coordinates, the correct touch or cross at each zero, and the correct end behaviour. Turning points need not be exact unless asked.
- **Write down** the sum or product of roots: quote the value directly from the coefficients.

Paper 1 is calculator-free, so division, factorising cubics and quartics and the root formulae must all work by hand. On Papers 2 and 3, a GDC finds real roots quickly, but you must still use algebra when the question asks for exact values or unknown coefficients.

## Where to go next

Fix the key facts with the [polynomials revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-12-revision-notes/) and then try the [polynomials practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-12-practice/). Polynomial factorising is used again for [solving inequalities g(x) ≥ f(x)](/resources/ib-dp-mathematics-analysis-and-approaches-2-15/) and in the [rational functions of higher degree guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-13/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.12.
