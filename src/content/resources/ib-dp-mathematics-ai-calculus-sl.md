---
title: "IB DP Mathematics: Applications and Interpretation -- Differentiation, integration, optimisation and the trapezoidal rule Study Guide"
seoTitle: "IB Maths AI SL Calculus Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Differentiation, integration, optimisation and the trapezoidal rule"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 5.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-8"
description: "Study guide to IB DP Maths AI SL calculus: limits, derivatives, tangents, integration, area, optimisation and the trapezoidal rule, with worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the core calculus unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 5.1–5.8, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 SL and HL sessions.

When you have worked through it, condense it with the [revision notes](/resources/ib-dp-mathematics-ai-calculus-sl-revision-notes/) and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-calculus-sl-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits in the course.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 5.1 | Estimate a limit from a table or graph; read a derivative as a gradient function and a rate of change | SL and HL |
| 5.2 | Find where a function is increasing (f′(x) > 0) or decreasing (f′(x) < 0) | SL and HL |
| 5.3 | Differentiate axⁿ and sums of such terms, where n ∈ ℤ | SL and HL |
| 5.4 | Find equations of tangents and normals, by hand and with technology | SL and HL |
| 5.5 | Anti-differentiate axⁿ (n ∈ ℤ, n ≠ −1); use a boundary condition; find definite integrals and areas with technology | SL and HL |
| 5.6 | Solve f′(x) = 0; find local maximum and minimum points | SL and HL |
| 5.7 | Solve optimisation problems in context | SL and HL |
| 5.8 | Estimate an area with the trapezoidal rule, using intervals of equal width | SL and HL |

Both SL papers are 90 minutes and both require a GDC ("technology required" in the guide). There is no calculator-free paper in this course. Even so, you must be able to differentiate and anti-differentiate these polynomial-type functions by hand, because the working earns method marks.

## 5.1 Limits and the meaning of the derivative

A **limit** is the value a function approaches as x gets closer and closer to some number. In this course you only estimate limits from a table or a graph. Formal methods for calculating limits are not required.

The **gradient of a curve** at a point is the limit of the gradients of chords through that point as the chords get shorter.

### Worked example 1

Estimate the gradient of y = x³ at x = 2 by looking at chords from (2, 8) to (2 + h, (2 + h)³).

The chord gradient is ((2 + h)³ − 8)/h. Evaluate it for small h:

| h | 0.1 | 0.01 | 0.001 | −0.001 | −0.01 | −0.1 |
|---|---|---|---|---|---|---|
| chord gradient | 12.61 | 12.0601 | 12.006001 | 11.994001 | 11.9401 | 11.41 |

From both sides the values approach 12, so the gradient at x = 2 is about **12**.

The **derivative** is the gradient function. It also gives the **rate of change** of one quantity with respect to another. The guide lists these notations: dy/dx, f′(x), dV/dr and ds/dt. For example, dV/dr is the rate at which a volume V changes as a radius r changes. A derivative has units: if V is in cm³ and r in cm, then dV/dr is in cm³ per cm.

## 5.3 Differentiating axⁿ

The rule is:

```
If f(x) = axⁿ, then f′(x) = anxⁿ⁻¹,   n ∈ ℤ
```

Differentiate a sum term by term. A constant differentiates to 0. Because n can be any integer, you must first rewrite fractions as negative powers.

### Worked example 2

Find f′(x) for f(x) = 2x³ − 5x + 4/x, and find f′(2).

1. Rewrite: f(x) = 2x³ − 5x + 4x⁻¹.
2. Differentiate each term: f′(x) = 6x² − 5 − 4x⁻².
3. Tidy: f′(x) = 6x² − 5 − 4/x².
4. Substitute: f′(2) = 24 − 5 − 1 = **18**.

Your GDC can give a numerical derivative at a point. Use it to check, but write the derivative by hand when the question asks for f′(x).

## 5.2 Increasing and decreasing functions

- f′(x) > 0 on an interval: the function is **increasing** there.
- f′(x) < 0 on an interval: the function is **decreasing** there.
- f′(x) = 0: the tangent is horizontal.

### Worked example 3

Find the intervals on which f(x) = x³ − 6x² + 9x + 1 is increasing and decreasing.

1. f′(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3).
2. f′(x) = 0 at x = 1 and x = 3.
3. Test the sign: f′(0) = 9 > 0, f′(2) = −3 < 0, f′(4) = 9 > 0.
4. So f is **increasing for x < 1 and x > 3**, and **decreasing for 1 < x < 3**.

## 5.6 Stationary points: local maximum and minimum

Points where f′(x) = 0 are where the gradient is zero. The guide expects you to be able to use technology to generate f′(x) and solve f′(x) = 0, as well as doing it by hand for simple cases.

To classify a point at SL, look at the sign of f′(x) on each side (or at the graph on your GDC):

- f′ changes from + to −: **local maximum**.
- f′ changes from − to +: **local minimum**.

The second derivative test is HL only (AHL 5.10), so you do not need it at SL.

In worked example 3, f(1) = 5 and f(3) = 1. So (1, 5) is a local maximum and (3, 1) is a local minimum.

A local maximum is **not necessarily the greatest value** on a domain. On 0 ≤ x ≤ 5, f(5) = 21, which is greater than the local maximum value 5. Always check the end points of a given domain.

## 5.4 Tangents and normals

The **tangent** at x = a touches the curve and has gradient f′(a). The **normal** is perpendicular to the tangent, so its gradient is −1/f′(a) (if f′(a) ≠ 0). Use y − y₁ = m(x − x₁).

### Worked example 4

The curve y = x² − 3x + 2/x. Find the equations of the tangent and the normal at x = 2.

1. Point: y = 4 − 6 + 1 = −1, so (2, −1).
2. dy/dx = 2x − 3 − 2x⁻². At x = 2: 4 − 3 − 0.5 = 0.5.
3. Tangent: y + 1 = 0.5(x − 2), so **y = 0.5x − 2**.
4. Normal gradient: −1/0.5 = −2. Normal: y + 1 = −2(x − 2), so **y = −2x + 3**.

The guide expects both analytic approaches and technology here. Many GDCs draw a tangent and display its equation, which is a useful check.

## 5.5 Integration

### Anti-differentiation

Integration reverses differentiation:

```
∫ axⁿ dx = (a/(n + 1))xⁿ⁺¹ + C,   n ∈ ℤ, n ≠ −1
```

The constant of integration C is needed because constants vanish when you differentiate. For example, ∫ (3x² + 2x⁻³) dx = x³ − x⁻² + C.

### Worked example 5: boundary condition

dy/dx = 6x² − 4x + 3 and y = 5 when x = 1. Find y.

1. Integrate: y = 2x³ − 2x² + 3x + C.
2. Substitute x = 1, y = 5: 2 − 2 + 3 + C = 5, so C = 2.
3. **y = 2x³ − 2x² + 3x + 2**.

### Definite integrals and area

Anti-derivatives, definite integrals and area are linked. When f(x) > 0 between x = a and x = b, the area between the curve and the x-axis is

```
A = ∫ₐᵇ f(x) dx
```

The guide says definite integrals are found **using technology**, and that you must **write a correct expression first**, then calculate.

### Worked example 6

Find the area enclosed by y = −x² + 4x + 12, the x-axis, the y-axis and the line x = 4.

1. Check f(x) > 0 on 0 ≤ x ≤ 4: the curve crosses the x-axis only at x = −2 and x = 6, so yes.
2. Write the expression: A = ∫₀⁴ (−x² + 4x + 12) dx.
3. GDC: A = 58.666… ≈ **58.7** square units (exactly 176/3).

The SL content only covers regions where f(x) > 0, so the region always lies above the x-axis.

## 5.7 Optimisation in context

Optimisation means finding the greatest or least value of a quantity, such as profit, cost, area or volume. The method:

1. Define the variables and draw a diagram if it helps.
2. Use the constraint (a fixed volume, a fixed length) to write the quantity in terms of **one** variable.
3. Differentiate and solve the derivative = 0.
4. Show it is a maximum or minimum (sign of the derivative either side, or a GDC graph).
5. Answer the question asked, in context, with units.

Questions on kinematics are not set in SL examinations.

### Worked example 7

An open-top box has a square base of side x cm and height h cm. Its volume is 4000 cm³. Find the dimensions that make the surface area S as small as possible.

1. Constraint: x²h = 4000, so h = 4000/x².
2. S = x² + 4xh = x² + 4x(4000/x²) = x² + 16000/x = x² + 16000x⁻¹.
3. dS/dx = 2x − 16000x⁻².
4. Set 2x − 16000/x² = 0: x³ = 8000, so x = 20.
5. Check: dS/dx at x = 19 is about −6.3 (< 0) and at x = 21 is about 5.7 (> 0), so this is a minimum.
6. h = 4000/400 = 10. The box should be **20 cm × 20 cm × 10 cm**, with S = 400 + 800 = **1200 cm²**.

On a GDC you can graph S and find the minimum directly. If you do, still write the expression for S that you graphed.

## 5.8 The trapezoidal rule

The trapezoidal rule estimates an area by splitting it into n strips of equal width h and treating each strip as a trapezium:

```
Area ≈ (h/2)[y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁)],   h = (b − a)/n
```

It works from a table of data or from a function.

### Worked example 8: from data

The width of a pond is measured every 5 m along its length:

| Distance (m) | 0 | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|
| Width (m) | 0 | 6.2 | 8.4 | 9.0 | 7.1 | 0 |

h = 5 and there are 5 strips.

Area ≈ (5/2)[0 + 0 + 2(6.2 + 8.4 + 9.0 + 7.1)] = 2.5 × 61.4 = **153.5 m²**.

### Worked example 9: from a function

Estimate ∫₁³ 8/x² dx with 4 strips, and compare with the GDC value.

1. h = (3 − 1)/4 = 0.5. The x-values are 1, 1.5, 2, 2.5, 3.
2. y-values: 8, 3.5556, 2, 1.28, 0.8889.
3. Estimate = 0.25[8 + 0.8889 + 2(3.5556 + 2 + 1.28)] = **5.64**.
4. GDC: ∫₁³ 8/x² dx = 5.333… ≈ 5.33.
5. Percentage error = (5.64 − 5.333…)/5.333… × 100 = **5.75%**.

The estimate is too big because this curve bends so that each straight top edge lies above the curve. More strips give a better estimate.

## Common errors

- Differentiating 4/x as 4 or as 4/x⁰. Rewrite as 4x⁻¹ first, then get −4x⁻².
- Leaving out + C in an indefinite integral, or never finding C when a boundary condition is given.
- Using the tangent gradient for the normal, or forgetting the negative in −1/m.
- Substituting x into f(x) instead of f′(x) when you need a gradient.
- Stating a local maximum as "the greatest value" without checking the end points of the domain.
- In optimisation, differentiating before reducing to one variable.
- Writing only a GDC value for an area, with no integral shown.
- In the trapezoidal rule, doubling the first and last values, or using the number of x-values instead of the number of strips to find h.

## Where to go next

- [Revision notes for this unit](/resources/ib-dp-mathematics-ai-calculus-sl-revision-notes/)
- [Practice questions with marked answers](/resources/ib-dp-mathematics-ai-calculus-sl-practice/)
- [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and [subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/)
- [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/)
- Other AI units: [geometry and trigonometry](/resources/ib-dp-mathematics-ai-geometry-trigonometry/) and [statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
