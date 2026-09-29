---
title: "IB DP Mathematics: Applications and Interpretation -- Differentiation, integration, optimisation and the trapezoidal rule Revision Notes"
seoTitle: "IB Maths AI SL Calculus Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB DP Maths AI calculus notes for SL and HL: rules, method steps and a quick self-test on derivatives, integrals and optimisation."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

These are the short-form notes. For full explanations and longer worked examples, use the [study guide for this unit](/resources/ib-dp-mathematics-ai-calculus-sl/).

These notes cover the core calculus unit of IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 5.1–5.8, which are common content for SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 SL and HL sessions.

Check your coverage against the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/), see the rest of the course on the [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/), and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-calculus-sl-practice/).

## Definitions

- **Limit**: the value a function approaches as x approaches a number. At this level you estimate it from a table or graph only.
- **Derivative**: the gradient function of a curve, and the rate of change of one variable with respect to another. Notation: dy/dx, f′(x), dV/dr, ds/dt.
- **Gradient of a curve at a point**: the limit of the gradients of chords through that point as the chords shrink.
- **Increasing**: f′(x) > 0. **Decreasing**: f′(x) < 0.
- **Stationary point**: where f′(x) = 0 (gradient zero).
- **Local maximum/minimum**: a stationary point that is higher/lower than the points close to it. It need not be the greatest/least value on the whole domain.
- **Tangent**: line touching the curve with the same gradient as the curve at that point.
- **Normal**: line through the same point, perpendicular to the tangent.
- **Anti-derivative**: a function whose derivative is the given function. Always includes + C.
- **Boundary condition**: a known point (x, y) used to find C.

## Key results

| Result | Formula | Condition |
|---|---|---|
| Derivative of a power | f(x) = axⁿ ⇒ f′(x) = anxⁿ⁻¹ | n ∈ ℤ |
| Derivative of a constant | 0 | |
| Integral of a power | ∫ axⁿ dx = (a/(n + 1))xⁿ⁺¹ + C | n ∈ ℤ, n ≠ −1 |
| Tangent at (x₁, y₁) | y − y₁ = m(x − x₁), m = f′(x₁) | |
| Normal at (x₁, y₁) | gradient −1/m | m ≠ 0 |
| Area under a curve | A = ∫ₐᵇ f(x) dx | f(x) > 0 on a ≤ x ≤ b |
| Trapezoidal rule | (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)] | h = (b − a)/n, equal strips |

## Method in steps

### Differentiate or integrate a sum of powers

1. Rewrite fractions as negative powers: 5/x² = 5x⁻².
2. Apply the rule term by term.
3. For an integral, add + C.

### Tangent and normal at x = a

1. Find y at x = a (use f, not f′).
2. Find m = f′(a).
3. Tangent: y − y₁ = m(x − x₁).
4. Normal: gradient −1/m, same point.

### Increasing, decreasing and stationary points

1. Find f′(x).
2. Solve f′(x) = 0 (by factorising or with the GDC).
3. Test the sign of f′ in each interval.
4. + to − is a local maximum; − to + is a local minimum.
5. If a domain is given, compare with the values at the end points.

At SL you classify with the sign of f′ or a GDC graph. The second derivative test is HL only (AHL 5.10).

### Boundary condition

1. Integrate dy/dx and include + C.
2. Substitute the known x and y.
3. Solve for C and write the full equation.

### Area with technology

1. Check f(x) > 0 on the interval (sketch or GDC).
2. Write A = ∫ₐᵇ f(x) dx with the limits.
3. Evaluate on the GDC; give 3 s.f. unless told otherwise.

### Optimisation

1. Write the quantity to optimise.
2. Use the constraint to reduce it to one variable.
3. Differentiate, set equal to 0, solve.
4. Justify max or min.
5. Answer in context, with units. At SL, kinematics questions are not set.

### Trapezoidal rule

1. h = (b − a)/n, where n is the number of strips (one less than the number of x-values).
2. List y₀ to yₙ.
3. Ends once, middle values twice, multiply by h/2.

## Small worked reminders

**Derivative with a negative power.** y = 3x² + 6/x = 3x² + 6x⁻¹, so dy/dx = 6x − 6x⁻² = 6x − 6/x².

**Integral with a negative power.** ∫ (3x² + 2x⁻³) dx = x³ − x⁻² + C.

**Local max is not the greatest value.** f(x) = x³ − 6x² + 9x + 1 has a local maximum at (1, 5), but on 0 ≤ x ≤ 5 the greatest value is f(5) = 21.

**Tangent and normal.** y = x² − 3x + 2/x at x = 2: y = −1 and dy/dx = 2x − 3 − 2x⁻² = 0.5. Tangent y = 0.5x − 2; normal gradient −2, so y = −2x + 3.

**Trapezoidal rule from data.** Widths 0, 6.2, 8.4, 9.0, 7.1, 0 at 5 m spacing: 5 strips, h = 5, area ≈ 2.5[0 + 0 + 2(30.7)] = 153.5 m².

**Profit.** P(x) = −2x² + 120x − 1000. P′(x) = −4x + 120 = 0 gives x = 30. P′ changes from + to −, so the maximum profit is P(30) = 800.

## Using your GDC

Both papers require a GDC, and the guide expects you to use it for this unit. Use it to:

- graph f and f′ together, and find the zeros of f′;
- find a local maximum or minimum directly from the graph of f;
- evaluate a definite integral once you have written it down;
- check a derivative at a point numerically, or draw a tangent.

Write down the function you graphed or the integral you evaluated. A bare GDC number earns no method mark if it is wrong.

## Must-know distinctions

- **f(a) vs f′(a)**: f(a) is a y-coordinate; f′(a) is a gradient.
- **Tangent vs normal**: gradients m and −1/m; both pass through the same point.
- **Local vs global**: a local maximum can be beaten by an end-point value.
- **Indefinite vs definite integral**: indefinite gives a function + C; definite gives a number (found with technology at SL).
- **Strips vs points**: 6 x-values means 5 strips in the trapezoidal rule.
- **Limit vs value**: a function may have a limit at a point where it cannot be evaluated (for example, a chord gradient with h = 0).
- **SL vs HL**: sections 5.1–5.8 are common to both; the second derivative, further functions and kinematics are HL only.

## Quick self-test

1. Differentiate y = 5x⁴ − 3x + 2.
2. Find f′(x) when f(x) = 3/x.
3. Find the gradient of y = x² − 6x at x = 1.
4. The tangent to a curve at P has gradient 4. State the gradient of the normal at P.
5. Find ∫ (4x³ + 2x) dx.
6. Find ∫ 6x⁻² dx.
7. dy/dx = 2x + 1 and y = 7 when x = 2. Find y.
8. For f(x) = x² − 8x + 3, state the interval where f is increasing.
9. f(x) = x³ − 12x. Find the x-coordinates of the stationary points and classify them.
10. Use the trapezoidal rule with h = 1 and y-values 2, 3, 5, 6 to estimate an area.
11. A table gives g(x) = 2.9, 2.99, 2.999 as x approaches 1 from below, and 3.001, 3.01 from above. Estimate the limit of g(x) as x → 1.
12. Write an expression for the area under y = 3x² from x = 1 to x = 3, and find it.

### Answers

1. dy/dx = 20x³ − 3
2. f′(x) = −3x⁻² = −3/x²
3. dy/dx = 2x − 6, so −4
4. −1/4
5. x⁴ + x² + C
6. −6x⁻¹ + C = −6/x + C
7. y = x² + x + C; 4 + 2 + C = 7, so C = 1 and y = x² + x + 1
8. f′(x) = 2x − 8 > 0, so x > 4
9. f′(x) = 3x² − 12 = 0 gives x = −2 and x = 2. f′(−3) = 15, f′(0) = −12, f′(3) = 15, so x = −2 is a local maximum and x = 2 is a local minimum
10. (1/2)[2 + 6 + 2(3 + 5)] = 12
11. 3
12. ∫₁³ 3x² dx = 26

## Where marks are usually lost

- Differentiating 6/x as 6 or as −6x⁻¹ (the power drops to −2, giving −6x⁻²).
- Dropping + C, or finding C and then not writing the final equation.
- Substituting x into f′ to get the "y-coordinate" of a tangent point.
- Giving the normal the same gradient as the tangent, or 1/m instead of −1/m.
- Stating intervals with the wrong inequality direction, or giving points instead of intervals.
- Calling a local maximum "the maximum value" without checking the domain end points.
- Writing a GDC area with no integral expression, so no method mark if the value is wrong.
- In optimisation, not justifying that the stationary point is a maximum or minimum.
- Rounding intermediate values (such as x in an optimisation) before the final answer.
- Trapezoidal rule with h found from the number of x-values instead of the number of strips.

## Links

- [Study guide](/resources/ib-dp-mathematics-ai-calculus-sl/) and [practice questions](/resources/ib-dp-mathematics-ai-calculus-sl-practice/)
- [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/)
- Related units: [geometry and trigonometry](/resources/ib-dp-mathematics-ai-geometry-trigonometry/) and [statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
