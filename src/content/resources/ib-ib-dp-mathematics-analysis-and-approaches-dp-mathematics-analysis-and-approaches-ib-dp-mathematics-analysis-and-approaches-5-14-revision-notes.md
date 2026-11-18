---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.14 Implicit differentiation, related rates of change and optimisation (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-14"
description: "Revision notes for IB DP Maths AA HL section 5.14: implicit differentiation, related rates and optimisation with end points, traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.14 of IB DP Mathematics: Analysis and Approaches: implicit differentiation, related rates of change and optimisation problems**. It is AHL content, examined at HL only. Full worked examples are in the [section 5.14 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-14/).

## Implicit differentiation

- Differentiate every term with respect to x; terms in y gain a factor dy/dx (chain rule).
- Products of x and y need the product rule: d/dx(xy) = y + x dy/dx.
- Collect dy/dx terms, factorise, divide.
- At a given point, substituting before rearranging is often quicker.
- Horizontal tangent: numerator of dy/dx = 0 (and the point lies on the curve). Vertical tangent: denominator = 0.
- Second derivative: differentiate dy/dx again (quotient rule), substitute dy/dx, then simplify with the original equation.

| Term | Derivative with respect to x |
|---|---|
| yⁿ | nyⁿ⁻¹ dy/dx |
| xy | y + x dy/dx |
| x²y | 2xy + x² dy/dx |
| eʸ | eʸ dy/dx |
| sin y | cos y dy/dx |
| ln y | (1/y) dy/dx |

Derivatives of inverse functions can be found this way: y = arcsin x gives sin y = x, cos y dy/dx = 1, dy/dx = 1/√(1 − x²).

## Related rates

1. Diagram and variables; identify constants.
2. Given rate and required rate, with units.
3. Equation linking the variables.
4. Differentiate with respect to t (chain rule).
5. Substitute the instant's values, then solve.

Common linking equations: circle A = πr²; sphere V = (4/3)πr³, S = 4πr²; cone V = (1/3)πr²h with r/h fixed by similar triangles; right triangle x² + y² = L²; angle tan θ = opposite/adjacent; similar triangles for shadows.

## Optimisation at HL

- Optimise one variable after using the constraint.
- On a closed domain, compare stationary values **and** end-point values.
- An implicit constraint can be used directly: differentiate both, then eliminate dy/dx.
- State the answer to the question asked, with units.

## A related rates answer, in brief

A balloon rises at 3 m s⁻¹ from a point 100 m from an observer. tan θ = h/100; differentiating, sec²θ dθ/dt = (1/100) dh/dt. At h = 100, θ = π/4 and sec²θ = 2, so dθ/dt = 0.015 rad s⁻¹. Note the order: equation, differentiate, then substitute.

## Key terms

| Term | Meaning |
|---|---|
| Implicit equation | relation between x and y not solved for y |
| Implicit differentiation | differentiating each term with respect to x, using the chain rule on y-terms |
| Related rates | rates of change of linked quantities, connected through the chain rule |
| Global (absolute) maximum | the greatest value on the whole domain |
| End-point optimum | an optimum at the edge of the domain, where f′ need not be 0 |

## Exam traps

- Missing dy/dx on a y-term, or on one side of a product.
- Substituting values before differentiating in related rates.
- Wrong sign: a quantity decreasing has a negative rate.
- Degrees instead of radians when θ changes.
- Reporting a stationary value as the minimum without checking end points.
- Units: rates are "per second" (or the given time unit).

## Self-test

1. Find dy/dx for x² + 3xy + y² = 11 at (1, 2).
2. Find dy/dx for y³ + 2y = x² + 2.
3. Find dy/dx if sin y = x, −π/2 < y < π/2, in terms of x.
4. A circular ripple has radius increasing at 0.5 cm s⁻¹. Find dA/dt when r = 4 cm.
5. The side of a cube increases at 0.2 cm s⁻¹. Find the rate of increase of volume when the side is 5 cm.
6. xy = 12 and x increases at 2 units per second. Find dy/dt when x = 3.
7. For x² + y² = 25, find d²y/dx² in terms of y.
8. Find the points on x² − xy + y² = 7 where the tangent is horizontal.
9. A sand pile is a cone with height equal to its radius. Sand is added at 2 m³ per minute. Find dh/dt when h = 3 m.
10. A 6 m post has a lamp on top; a 1.8 m person walks away at 1.2 m s⁻¹. Find the rate of change of the shadow length.
11. Find the gradient of eʸ + xy = e at (0, 1).
12. T(x) = √(x² + 4)/3 + (6 − x)/5 for 0 ≤ x ≤ 6. Why must T(0) and T(6) be calculated?

## Answers

1. 2x + 3y + 3x y′ + 2y y′ = 0; y′ = −(2x + 3y)/(3x + 2y) = −8/7.
2. (3y² + 2) dy/dx = 2x, so dy/dx = 2x/(3y² + 2).
3. cos y dy/dx = 1; cos y = √(1 − x²) (positive on this interval), so dy/dx = 1/√(1 − x²).
4. dA/dt = 2πr dr/dt = 2π(4)(0.5) = 4π cm² s⁻¹.
5. dV/dt = 3s² ds/dt = 3(25)(0.2) = 15 cm³ s⁻¹.
6. y = 4; x dy/dt + y dx/dt = 0, so dy/dt = −(4)(2)/3 = −8/3 units per second.
7. −25/y³.
8. dy/dx = (y − 2x)/(2y − x) = 0 gives y = 2x; then 3x² = 7: (√(7/3), 2√(7/3)) and (−√(7/3), −2√(7/3)).
9. V = πh³/3, dV/dt = πh² dh/dt; 2 = 9π dh/dt, so dh/dt = 2/(9π) ≈ 0.0707 m per minute.
10. s = (3/7)x, so ds/dt = (3/7)(1.2) ≈ 0.514 m s⁻¹.
11. dy/dx = −y/(eʸ + x) = −1/e.
12. The domain is closed, so the least value could be at an end point; comparing all three values proves the stationary point gives the minimum.

## Where next

Practise exam-style problems on the [section 5.14 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-14-practice/). For SL optimisation technique, see the [section 5.8 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-8-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.14.
