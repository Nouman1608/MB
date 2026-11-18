---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.8 Local maximum and minimum points, optimization and points of inflexion -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.08
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-8"
description: "Revision notes for IB DP Maths AA section 5.8: testing stationary points, optimisation steps, points of inflexion, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.8 of IB DP Mathematics: Analysis and Approaches: local maximum and minimum points, optimisation and points of inflexion**. It is SL content, examined at SL and HL. The [section 5.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-8/) has the full explanations and worked examples.

## Core recall

- **Stationary point:** f′(x) = 0. Three types: local maximum, local minimum, stationary point of inflexion.
- **First derivative test:** f′ goes + to − → maximum; − to + → minimum; no sign change → stationary point of inflexion. Always conclusive.
- **Second derivative test:** f″ < 0 → maximum; f″ > 0 → minimum; f″ = 0 → no conclusion, use the first derivative test.
- **Point of inflexion:** f″ = 0 **and** f″ changes sign. The gradient there may be zero (stationary) or non-zero.
- f″ = 0 alone is not sufficient. For f(x) = x⁴, f″(0) = 0 but (0, 0) is a minimum.
- **Cubics:** at most two turning points and exactly one point of inflexion, halfway between the turning points when they exist.
- **Global versus local:** on a closed interval, compare the values at stationary points with the values at the end points.

## Optimisation checklist

1. Variables defined; diagram if geometric.
2. One expression for the quantity, in one variable (use the constraint).
3. Domain stated from the context.
4. Derivative = 0, solved; reject values outside the domain, with a reason.
5. Nature justified (f″ sign or f′ sign change).
6. Final answer to the question asked, with units.

Useful tricks:

- To minimise a distance D = √(…), minimise D² instead; the minimum occurs at the same point.
- For a sector of radius r and angle θ (radians): arc length rθ, area (1/2)r²θ.
- A closed cylinder: V = πr²h, surface area 2πr² + 2πrh. Open at one end: πr² + 2πrh.

## Key terms

| Term | Meaning |
|---|---|
| Stationary point | point where f′(x) = 0 |
| Local maximum | f′ changes from + to −; highest value nearby, not necessarily overall |
| Local minimum | f′ changes from − to +; lowest value nearby |
| Point of inflexion | point where the concavity changes: f″ = 0 and f″ changes sign |
| Stationary point of inflexion | point of inflexion where f′ = 0 too |
| Non-stationary point of inflexion | point of inflexion where f′ ≠ 0 |
| Constraint | equation linking variables, used to reduce to one variable |
| Domain (in context) | values the variable can take physically, such as 0 < x < 7.5 |

## Exam traps

- **f″ = 0 is not a classification.** Either switch to the sign-change test or show that f″ changes sign.
- **Two variables left in.** Differentiating V = πr²h with h still present is not valid; substitute for h first.
- **Answering the wrong thing.** "Find the maximum area" wants the area, not x.
- **Out-of-domain roots.** A negative length or a cut wider than the card must be rejected explicitly.
- **End points.** A question asking for the greatest value on a closed interval needs the end points checked.
- **Rounded intermediate values on Paper 2.** Store the x-value from the GDC and use the stored value to find y or the maximum.

## Self-test

1. Find the coordinates of the stationary points of y = x³ − 12x + 1.
2. Classify each stationary point in question 1 using the second derivative.
3. Find and classify the stationary point of y = x − 2 ln x, x > 0.
4. Why does f″(a) = 0 not prove that x = a is a point of inflexion? Give an example.
5. f′(x) = (x − 1)²(x + 3). Classify the stationary points of f.
6. Find the point of inflexion of f(x) = x³ − 3x² + 4x and the gradient there.
7. A rectangle has its base on the x-axis and its upper corners on y = 12 − x². Find the maximum area.
8. A sector has perimeter 20 cm. Find the radius that maximises its area, and the maximum area.
9. Why is it valid to minimise D² instead of D?
10. For f(x) = x + 2 cos x on 0 ≤ x ≤ 2π, where is the greatest value of f?
11. f(x) = x⁴ − 8x². Find the x-coordinates of the points of inflexion.
12. In a Paper 2 optimisation, the GDC gives x = 2.7183… State the good practice for the next step.

## Answers

1. dy/dx = 3x² − 12 = 0, x = ±2: (2, −15) and (−2, 17).
2. d²y/dx² = 6x. At x = 2 it is 12 > 0, so (2, −15) is a minimum; at x = −2 it is −12 < 0, so (−2, 17) is a maximum.
3. dy/dx = 1 − 2/x = 0 at x = 2; d²y/dx² = 2/x² = 1/2 > 0, so (2, 2 − 2 ln 2) is a minimum.
4. The concavity must change too. For f(x) = (x − 1)⁴ + 2, f″(1) = 0, but f″ = 12(x − 1)² ≥ 0 on both sides, and (1, 2) is a minimum.
5. x = −3: f′ changes − to +, a minimum. x = 1: f′ is positive on both sides, so a stationary point of inflexion.
6. f″(x) = 6x − 6 = 0 at x = 1 and changes sign; f(1) = 2, f′(1) = 1. The point (1, 2) has gradient 1.
7. A = 2x(12 − x²) = 24x − 2x³; A′ = 24 − 6x² = 0 at x = 2; A″ = −12x < 0, so maximum area 32.
8. 2r + rθ = 20 gives A = (1/2)r²θ = 10r − r²; A′ = 10 − 2r = 0 at r = 5 cm; maximum area 25 cm² (θ = 2 radians).
9. D ≥ 0 and squaring is increasing for non-negative values, so the smallest D gives the smallest D².
10. At the end point x = 2π: f(2π) = 2π + 2 ≈ 8.28, larger than the local maximum π/6 + √3 ≈ 2.26.
11. f″(x) = 12x² − 16 = 0, so x = ±2/√3 (= ±2√3/3); f″ changes sign at each.
12. Store the full value in the GDC and use it to calculate the optimum quantity; round only the final answer to 3 significant figures.

## Where next

Work through the [section 5.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-8-practice/). If concavity still feels shaky, revisit the [section 5.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-7-revision-notes/), and use the [AA differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/) for the wider unit.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.8.
