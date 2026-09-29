---
title: "IB DP Mathematics: Analysis and Approaches -- Limits, derivatives, tangents, rules of differentiation and graph behaviour Revision Notes"
seoTitle: "IB Maths AA Differentiation Revision Notes (SL and HL)"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Limits, derivatives, tangents, rules of differentiation and graph behaviour"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-8"
description: "Condensed IB DP Maths AA differentiation revision notes: derivative rules table, tangent and stationary point methods, and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

These revision notes condense the differentiation unit of IB Diploma Programme Mathematics: Analysis and Approaches for the final weeks before the exam. For full explanations and longer worked examples, use the [differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/). The notes are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 5.1–5.4 and 5.6–5.8, which are SL content required at both SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

When you are ready, move on to the [practice questions](/resources/ib-dp-mathematics-aa-sl-differentiation-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) help you track the whole course. The older [calculus strand overview](/resources/ib-dp-mathematics-aa-calculus/) gives a one-page summary of the strand if you want the big picture first.

## Definitions

- **Limit (5.1):** the value f(x) approaches as x approaches a given value. At SL, estimate it from a table or graph. Formal analytic methods are not required.
- **Derivative (5.1):** the gradient function. f′(a) is the gradient of the tangent at x = a, found informally as the limit of chord gradients. It is also a rate of change: dV/dr, ds/dt.
- **Increasing / decreasing (5.2):** f′(x) > 0 / f′(x) < 0 on an interval.
- **Stationary point:** f′(x) = 0.
- **Concave-up / concave-down (5.8):** f″(x) > 0 / f″(x) < 0.
- **Point of inflexion (5.8):** f″(x) = 0 **and** f″ changes sign. Its gradient can be zero or non-zero.

## Formulas

| Function | Derivative | Section |
|---|---|---|
| axⁿ, n ∈ ℤ | anxⁿ⁻¹ | 5.3 |
| xⁿ, n ∈ ℚ | nxⁿ⁻¹ | 5.6 |
| sin x | cos x | 5.6 |
| cos x | −sin x | 5.6 |
| eˣ | eˣ | 5.6 |
| ln x | 1/x | 5.6 |
| f(g(x)) | chain rule: dy/dx = (dy/du)(du/dx) | 5.6 |
| uv | u(dv/dx) + v(du/dx) | 5.6 |
| u/v | (v(du/dx) − u(dv/dx))/v² | 5.6 |

Useful chain-rule results that follow from the table:

```
d/dx (e^(kx))       = ke^(kx)
d/dx (sin(kx + b))  = k cos(kx + b)
d/dx (cos(kx + b))  = −k sin(kx + b)
d/dx (ln(g(x)))     = g'(x)/g(x)
d/dx ((g(x))ⁿ)      = n(g(x))ⁿ⁻¹ g'(x)
```

Trigonometric derivatives only hold with x in radians.

## Method in steps

### Tangent and normal at x = a (5.4)

```
1. y₁ = f(a)                       (the point)
2. m = f'(a)                       (tangent gradient)
3. tangent: y − y₁ = m(x − a)
4. normal gradient = −1/m
5. normal:  y − y₁ = (−1/m)(x − a)
```

Small reminder: for y = e^(2x) at x = 0, the point is (0, 1) and m = 2. Tangent y = 2x + 1; normal y = −x/2 + 1.

### Intervals of increase and decrease (5.2)

```
1. Find f'(x) and factorise it
2. Solve f'(x) = 0
3. Test the sign of f' in each interval (or read it from the factors)
4. State intervals with strict inequalities
```

### Stationary points (5.8)

```
1. Solve f'(x) = 0
2. Find the y-coordinate from f(x), not from f'(x)
3. Classify:
   f''(x) > 0 → minimum
   f''(x) < 0 → maximum
   f''(x) = 0 → use the sign of f' either side
```

### Point of inflexion (5.8)

```
1. Solve f''(x) = 0
2. Check f'' changes sign either side
3. Find the y-coordinate from f(x)
4. f'(x) = 0 there → zero gradient; f'(x) ≠ 0 → non-zero gradient
```

### Optimisation (5.8)

```
1. Name variables; write the quantity Q in terms of them
2. Use the constraint to make Q a function of one variable
3. dQ/dx = 0; solve
4. Justify max/min (second derivative or sign change)
5. Answer the question asked, with units
```

## Small worked reminders

Rewrite first, then differentiate (5.3 and 5.6):

```
y = 7/x³ − 2√x = 7x⁻³ − 2x^(1/2)
dy/dx = −21x⁻⁴ − x^(−1/2)
```

Chain rule inside a product (5.6):

```
y = x cos(2x)
dy/dx = x(−2 sin(2x)) + cos(2x)(1) = cos(2x) − 2x sin(2x)
```

Quotient rule (5.6):

```
y = eˣ/(x + 1)
dy/dx = ((x + 1)eˣ − eˣ(1))/(x + 1)² = xeˣ/(x + 1)²
```

## Reading f, f′ and f″ together (5.7)

| If you see this on f | f′ does this | f″ does this |
|---|---|---|
| rising | positive | — |
| falling | negative | — |
| local maximum | crosses the axis from + to − | negative or zero |
| local minimum | crosses the axis from − to + | positive or zero |
| concave-up | increasing | positive |
| concave-down | decreasing | negative |
| point of inflexion | has a turning point | crosses the axis |

On Paper 2 you can sketch f′ and f″ with the GDC to check the table. On Paper 1 you must find them by hand.

## Must-know distinctions

- **Tangent vs normal.** Tangent gradient m; normal gradient −1/m. Both pass through the same point.
- **Stationary point vs point of inflexion.** A stationary point needs f′(x) = 0. An inflexion needs f″ to change sign. A point can be both (a horizontal inflexion), for example (0, 0) on y = x³.
- **f″(x) = 0 vs inflexion.** f″(x) = 0 is necessary but not enough. On y = x⁴, f″(0) = 0 but (0, 0) is a minimum.
- **Product vs chain.** x²·sin x is a product (two functions multiplied). sin(x²) is a composite (one function inside another). Mixing these up is the most common rule error.
- **Local vs global.** A local maximum is highest nearby. In an optimisation question with a restricted domain, check the end points if the question asks for the greatest value.
- **Reading f′ graphs.** Zeros of f′ are stationary points of f. Turning points of f′ are inflexions of f. Where f′ is above the axis, f is increasing.

## Quick self-test

**1.** Use the table to estimate lim (x→1) (x⁴ − 1)/(x − 1).

| x | 0.9 | 0.99 | 1.01 | 1.1 |
|---|---|---|---|---|
| (x⁴ − 1)/(x − 1) | 3.439 | 3.940399 | 4.060401 | 4.641 |

**2.** Differentiate y = 6x⁻² + x³/3.

**3.** Differentiate y = 5 sin 2x − 3 cos x.

**4.** Differentiate y = e^(1 − 4x).

**5.** Differentiate y = ln(3x − 2).

**6.** Differentiate y = x ln x.

**7.** Differentiate y = x/(x + 2), simplifying fully.

**8.** Differentiate y = (x² + 1)⁵.

**9.** Find the equation of the tangent to y = √x at x = 9.

**10.** f′(x) = (x − 1)²(x + 2). Find the x-coordinates of the stationary points of f and classify each.

**11.** Find the point of inflexion of y = x³ − 6x² + 5.

**12.** For what values of x is g(x) = 2x³ − 9x² + 12x decreasing?

### Answers

1. The values approach **4** from both sides.
2. dy/dx = −12x⁻³ + x².
3. dy/dx = 10 cos 2x + 3 sin x.
4. dy/dx = −4e^(1 − 4x).
5. dy/dx = 3/(3x − 2).
6. Product rule: dy/dx = ln x + x(1/x) = ln x + 1.
7. Quotient rule: ((x + 2)(1) − x(1))/(x + 2)² = 2/(x + 2)².
8. Chain rule: 5(x² + 1)⁴ × 2x = 10x(x² + 1)⁴.
9. Point (9, 3). dy/dx = 1/(2√x) = 1/6 at x = 9. Tangent y − 3 = (1/6)(x − 9), so y = x/6 + 3/2.
10. x = −2: f′ changes from − (f′(−3) = −16) to + (f′(0) = 2), so a **minimum**. x = 1: f′ is positive on both sides (f′(0) = 2, f′(2) = 4), so no max or min; it is a **point of inflexion with zero gradient**.
11. y″ = 6x − 12 = 0 at x = 2, and y″ changes from − to +. Point **(2, −11)**.
12. g′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2) < 0 for **1 < x < 2**.

## Where marks are usually lost

- Leaving 3/x or 1/√x as it is and applying the power rule wrongly. Rewrite as 3x⁻¹ or x^(−1/2) first.
- Missing the inner derivative in the chain rule, especially inside ln, e and sin.
- Getting the quotient rule numerator the wrong way round, which flips the sign of every answer that follows.
- Substituting into f′(x) instead of f(x) to get the y-coordinate of a stationary point or tangent point.
- Giving the tangent gradient for the normal, or writing 1/m instead of −1/m.
- Stating "f″(x) = 0 so it is a point of inflexion" with no sign-change check.
- Using a second-derivative test that gives 0 and then stopping, instead of switching to the sign of f′.
- Listing only one of two intervals of increase, or giving the x-values of the stationary points instead of an interval.
- In optimisation, finding the value of x but not the maximum or minimum quantity the question asked for, or leaving out units.
- On Paper 2, writing only a GDC value with no expression, so no method mark is available if the value is wrong.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020). These notes cover syllabus sections 5.1, 5.2, 5.3, 5.4, 5.6, 5.7 and 5.8.
