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
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--01-chord-to-tangent.webp" width="900" height="920" alt="Graph of y = x cubed. Point P is at (2, 8). Three copper chords from P to points a distance h to the right (h = 1, 0.5 and 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is ((2 + h) cubed minus 8) divided by h. A table gives its value for h = 0.1, 0.01, 0.001, minus 0.001, minus 0.01 and minus 0.1 as about 12.61, 12.06, 12.006, 11.994, 11.94 and 11.41. From both sides the values approach 12, the gradient of the curve at x = 2." loading="lazy">
  <figcaption>Graph of y = x³ with P(2, 8), three chords to points h = 1, 0.5, 0.25 to the right and the gold tangent of gradient 12. A table of chord gradients for h = ±0.1, ±0.01, ±0.001 shows values approaching 12 from both sides.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--03-tangent-and-normal.webp" width="900" height="1214" alt="Equal-scale graph of y = x squared minus 3x plus 2 over x, for x greater than 0. At P (2, minus 1) the gradient is dy/dx = 2x minus 3 minus 2/x squared = 0.5. The gold tangent y = 0.5x minus 2 touches the curve at P. The teal normal is perpendicular to the tangent, with gradient minus 1 divided by 0.5 = minus 2, and equation y = minus 2x plus 3. A small right-angle mark at P shows the two lines are perpendicular." loading="lazy">
  <figcaption>Equal-scale graph of y = x² − 3x + 2/x with the tangent y = 0.5x − 2 and normal y = −2x + 3 at P(2, −1), with a right-angle mark.</figcaption>
</figure>


### Increasing, decreasing and stationary points

1. Find f′(x).
2. Solve f′(x) = 0 (by factorising or with the GDC).
3. Test the sign of f′ in each interval.
4. + to − is a local maximum; − to + is a local minimum.
5. If a domain is given, compare with the values at the end points.

At SL you classify with the sign of f′ or a GDC graph. The second derivative test is HL only (AHL 5.10).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--02-rising-falling-turning-points.webp" width="900" height="1180" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 6x squared plus 9x plus 1, rising to a local maximum at (1, 5), falling to a local minimum at (3, 1), then rising again; at the end point x = 5 on the domain 0 to 5 the value is 21, greater than the local maximum. Bottom: the gradient function f dash = 3(x minus 1)(x minus 3), a U-shaped parabola that is positive for x less than 1, negative between 1 and 3 and positive for x greater than 3, crossing zero at x = 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash is zero at the turning points." loading="lazy">
  <figcaption>Aligned graphs of f(x) = x³ − 6x² + 9x + 1 and f′(x) = 3(x − 1)(x − 3). f rises where f′ &gt; 0, falls where f′ &lt; 0, with local maximum (1, 5) and minimum (3, 1); on 0 ≤ x ≤ 5 the end point value f(5) = 21 exceeds the local maximum.</figcaption>
</figure>


### Boundary condition

1. Integrate dy/dx and include + C.
2. Substitute the known x and y.
3. Solve for C and write the full equation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--04-constant-of-integration.webp" width="900" height="980" alt="Four curves y = 2x cubed minus 2x squared plus 3x plus C for C = minus 2, 0, 2 and 4. They are vertical shifts of one another, and at x = 1 each has the same gradient 5 because dy/dx = 6x squared minus 4x plus 3 gives 5 there, shown by parallel dashed tangents. The boundary condition y = 5 when x = 1 picks out the gold curve through (1, 5), which has C = 2." loading="lazy">
  <figcaption>Four curves y = 2x³ − 2x² + 3x + C for C = −2, 0, 2, 4 shifted vertically, each with the same gradient 5 at x = 1; the boundary condition y = 5 at x = 1 selects C = 2.</figcaption>
</figure>


### Area with technology

1. Check f(x) > 0 on the interval (sketch or GDC).
2. Write A = ∫ₐᵇ f(x) dx with the limits.
3. Evaluate on the GDC; give 3 s.f. unless told otherwise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--05-definite-integral-area.webp" width="900" height="830" alt="Graph of y = minus x squared plus 4x plus 12, an upside-down parabola crossing the x-axis at x = minus 2 and x = 6 with its maximum (2, 16). The region between the curve, the x-axis, the y-axis and the line x = 4 is shaded and lies wholly above the axis. Its area is the definite integral from 0 to 4 of minus x squared plus 4x plus 12, which a GDC gives as 58.7 square units, exactly 176 over 3." loading="lazy">
  <figcaption>Graph of y = −x² + 4x + 12 with the region between the curve, axes and x = 4 shaded; A = ∫₀⁴ (−x² + 4x + 12) dx = 58.7 (exactly 176/3).</figcaption>
</figure>


### Optimisation

1. Write the quantity to optimise.
2. Use the constraint to reduce it to one variable.
3. Differentiate, set equal to 0, solve.
4. Justify max or min.
5. Answer in context, with units. At SL, kinematics questions are not set.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--06-optimisation-box.webp" width="900" height="960" alt="Graph of the surface area S = x squared plus 16000 over x of an open-top box with a square base of side x cm and volume 4000 cubic centimetres. The curve falls then rises, with its minimum at x = 20 where S = 1200 square centimetres. The gradient dS/dx is negative just left of x = 20 (about minus 6.3 at x = 19) and positive just right (about 5.7 at x = 21), so the point is a minimum. A drawing of the open-top box shows the dimensions 20 cm by 20 cm by 10 cm, since h = 4000 over 400 = 10." loading="lazy">
  <figcaption>Graph of S = x² + 16000/x for an open-top box with volume 4000 cm³: minimum S = 1200 at x = 20, with gradient negative then positive, and a drawing of the 20 × 20 × 10 cm box.</figcaption>
</figure>


### Trapezoidal rule

1. h = (b − a)/n, where n is the number of strips (one less than the number of x-values).
2. List y₀ to yₙ.
3. Ends once, middle values twice, multiply by h/2.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-calculus-sl--07-trapezoidal-rule.webp" width="900" height="870" alt="The curve y = 8 over x squared from x = 1 to x = 3 is split into 4 strips of width h = 0.5, each topped by a straight line to form a trapezium. The y-values are 8, 3.56, 2, 1.28 and 0.89. The estimate is 0.25 times (8 + 0.89 + 2 times (3.56 + 2 + 1.28)) = 5.64, compared with the exact area 16 over 3 = 5.33 from a GDC, a percentage error of 5.75 percent. The estimate is too big because the curve bends so every straight top edge lies above it; the gold gaps show the overestimate." loading="lazy">
  <figcaption>Curve y = 8/x² from 1 to 3 with four trapezia of width 0.5; estimate 5.64 against 5.33, a 5.75% overestimate because the top edges lie above the curve.</figcaption>
</figure>


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

## Frequently asked questions

**Is the second derivative test in IB Maths AI SL?**
No. The second derivative test is HL only (AHL 5.10). At SL you classify stationary points using the sign of f′(x) on each side or a GDC graph.

**What is the difference between a local maximum and the greatest value of a function?**
A local maximum is higher than the points close to it, but it need not be the greatest value on the whole domain. When a domain is given, compare the local maximum with the values at the end points.

**How many strips are there in the trapezoidal rule?**
The number of strips is one less than the number of x-values, so 6 x-values give 5 strips. The strip width is h = (b − a)/n, and the rule is (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)].

**How do you find the equation of a normal to a curve?**
Find the y-coordinate at x = a from f, then the tangent gradient m = f′(a). The normal passes through the same point with gradient −1/m, so use y − y₁ = (−1/m)(x − x₁).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
