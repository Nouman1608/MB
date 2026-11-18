---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.9 Reciprocal trigonometric ratios and inverse circular functions (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-9"
description: "IB Maths AA HL 3.9 revision notes: sec, cosec, cot, the tan and cot Pythagorean identities, and domains, ranges and graphs of arcsin, arccos and arctan."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.9 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): the reciprocal ratios sec θ, cosec θ and cot θ, the identities 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ, and the inverse functions arcsin, arccos and arctan with their domains, ranges and graphs. For explanations and longer examples, use the [3.9 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9/); then try the [3.9 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9-practice/).

## Definitions and identities

| Result | Note |
|---|---|
| sec θ = 1/cos θ | undefined at θ = π/2 + kπ; \|sec θ\| ≥ 1 |
| cosec θ = 1/sin θ | undefined at θ = kπ; \|cosec θ\| ≥ 1 |
| cot θ = cos θ/sin θ = 1/tan θ | undefined at θ = kπ; any real value |
| 1 + tan²θ = sec²θ | cos²θ + sin²θ = 1 divided by cos²θ |
| 1 + cot²θ = cosec²θ | cos²θ + sin²θ = 1 divided by sin²θ |
| Rearranged | tan²θ = sec²θ − 1; sec²θ − tan²θ = 1; cosec²θ − cot²θ = 1 |

Signs: a reciprocal always has the same sign as its parent ratio.

## Inverse functions

| | arcsin x | arccos x | arctan x |
|---|---|---|---|
| Domain | −1 ≤ x ≤ 1 | −1 ≤ x ≤ 1 | x ∈ ℝ |
| Range | −π/2 ≤ y ≤ π/2 | 0 ≤ y ≤ π | −π/2 < y < π/2 |
| Endpoints or asymptotes | (−1, −π/2), (1, π/2) | (−1, π), (1, 0) | y = ±π/2 |
| Passes through | (0, 0) | (0, π/2) | (0, 0) |
| Shape | increasing, odd | decreasing | increasing, odd |

Each graph is the reflection of the restricted sin, cos or tan graph in y = x.

## Key terms

| Term | Meaning |
|---|---|
| Reciprocal ratio | One divided by a ratio, such as sec θ = 1/cos θ |
| One-to-one | Each output comes from exactly one input; needed for an inverse function |
| Restricted domain | The part of the domain kept so that the function is one-to-one |
| Principal value | The single value an inverse function returns, from its range |
| Asymptote | A line the graph approaches but never meets, such as y = π/2 for arctan |

## Methods

**All ratios from one**

1. Use 1 + tan²θ = sec²θ or 1 + cot²θ = cosec²θ to find the squared reciprocal.
2. Fix the sign from the quadrant.
3. Take reciprocals to get cos θ or sin θ, then any other ratio.

**Prove an identity**

1. Change sec, cosec, cot into sin and cos.
2. Combine fractions over a common denominator.
3. Use cos²θ + sin²θ = 1 in the numerator.
4. Finish with the other side exactly.

**Ratio of an inverse**: for cos(arcsin k), let θ = arcsin k, so θ is in [−π/2, π/2] and cos θ ≥ 0; then cos θ = √(1 − k²).

**Inverse of a ratio**: for arccos(cos α), find cos α, then the angle in [0, π] with that cosine.

**Transformed inverse**: domain from "argument between −1 and 1" (arcsin and arccos); range by applying the vertical stretch and translation to the basic range.

## Worked reminders

- sec(2π/3) = 1/cos(2π/3) = −2; cosec(7π/6) = −2; cot(π/3) = √3/3.
- cosec θ = −3 with θ in the fourth quadrant: cot²θ = 8, cot negative, so cot θ = −2√2.
- sin(arccos(−3/5)) = 4/5, because arccos gives an angle in [0, π], where sin ≥ 0.
- arcsin(sin(2π/3)) = π/3.
- y = arctan(x) + π/2 has range 0 < y < π.
- sec x = 2 for 0 ≤ x ≤ 2π: cos x = 1/2, so x = π/3, 5π/3.
- cot x = −1 for 0 ≤ x ≤ π: tan x = −1, so x = 3π/4. (cot x = 0 would need cos x = 0, at x = π/2.)
- 2 arcsin x = π/3: arcsin x = π/6, so x = 1/2; always check the value lies in [−1, 1].
- Sketching y = arccos x: plot (−1, π), (0, π/2) and (1, 0); the curve is steepest at the endpoints.

## Exam traps

- **Pairing.** sec goes with cos, cosec with sin.
- **sin⁻¹ notation.** sin⁻¹x means arcsin x; (sin x)⁻¹ means cosec x.
- **Range of arccos.** Always between 0 and π: arccos(−1/2) = 2π/3.
- **Inverse of a ratio.** arcsin(sin θ) = θ only when θ is in [−π/2, π/2].
- **Strict inequalities for arctan.** −π/2 < arctan x < π/2.
- **Impossible values.** sec x = 0.5 and cosec x = −0.2 have no solutions.
- **Missing squares.** 1 + tan²θ = sec²θ, not sec θ.
- **Quadrant for the square root.** sec²θ = 9/4 gives sec θ = ±3/2 until the quadrant decides.

## Self-test

1. Find the exact value of sec(π/4).
2. Find the exact value of cot(5π/6).
3. Given tan θ = 3 and θ is in the third quadrant, find sec θ.
4. Given cot θ = −1/2 and θ is obtuse, find cosec θ.
5. Simplify (sec²θ − 1) cot θ.
6. Find arcsin(−√2/2).
7. Find arccos(−1).
8. Find tan(arccos(1/3)).
9. Find arccos(cos(5π/3)).
10. Write down the domain and range of f(x) = arcsin(x/2).
11. Write down the range of g(x) = 2 arctan x − π.
12. Solve cosec x = √2 for 0 ≤ x ≤ 2π.

### Answers

1. √2.
2. −√3.
3. sec²θ = 10, sec negative in the third quadrant: sec θ = −√10.
4. cosec²θ = 1 + 1/4 = 5/4, sin positive when θ is obtuse: cosec θ = √5/2.
5. tan²θ × cot θ = tan θ.
6. −π/4.
7. π.
8. sin θ = 2√2/3, so tan θ = 2√2.
9. cos(5π/3) = 1/2, so π/3.
10. Domain −2 ≤ x ≤ 2; range −π/2 ≤ f(x) ≤ π/2.
11. −2π < g(x) < 0.
12. sin x = √2/2: x = π/4, 3π/4.

## Links

Re-learn the inverse graphs in the [3.9 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-9/), and see the whole unit in the [circular functions revision notes](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities-revision-notes/).
