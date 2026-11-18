---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.11 Relationships between trigonometric functions and symmetry of their graphs (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-11"
description: "IB Maths AA HL 3.11 revision notes: the π ± θ and π/2 ± θ results, odd and even functions, graph symmetries of sin, cos and tan, and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section 3.11 of IB DP Mathematics: Analysis and Approaches (first assessment 2021), which is HL only (AHL): relationships between trigonometric functions and the symmetry properties of their graphs. The explanations and worked examples are in the [3.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-11/); test yourself afterwards with the [3.11 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-11-practice/).

## Core results

| | sin | cos | tan |
|---|---|---|---|
| −θ | −sin θ | cos θ | −tan θ |
| π − θ | sin θ | −cos θ | −tan θ |
| π + θ | −sin θ | −cos θ | tan θ |
| 2π − θ | −sin θ | cos θ | −tan θ |
| π/2 − θ | cos θ | sin θ | cot θ |
| π/2 + θ | cos θ | −sin θ | −cot θ |
| θ + 2π | sin θ | cos θ | tan θ |
| θ + π | −sin θ | −cos θ | tan θ |

**Two-step rule for any row.**

1. Swap sin and cos (and tan with cot) only for π/2 ± θ or 3π/2 ± θ.
2. Choose the sign by imagining θ small and positive and finding the quadrant of the new angle.

**Check by compound angle**, for example cos(3π/2 − θ) = cos(3π/2) cos θ + sin(3π/2) sin θ = −sin θ.

## Key terms

| Term | Meaning |
|---|---|
| Even function | f(−x) = f(x); graph symmetric about the y-axis; cos x |
| Odd function | f(−x) = −f(x); graph has rotational symmetry about the origin; sin x, tan x |
| Line of symmetry | A vertical line x = a with f(a − h) = f(a + h) for all h |
| Centre of rotational symmetry | A point (a, 0) with f(a − h) = −f(a + h) for all h |
| Periodic | f(x + p) = f(x) for all x |

## Graph symmetries

- **y = sin x:** lines x = π/2 + kπ; centres (kπ, 0); period 2π.
- **y = cos x:** lines x = kπ; centres (π/2 + kπ, 0); period 2π.
- **y = tan x:** no lines; centres (kπ/2, 0), at zeros and where the asymptotes cross the axis; period π.
- **Translations between graphs:** cos x = sin(x + π/2); −sin x = cos(x + π/2); −cos x = cos(x + π) = cos(x − π).

A test for a line of symmetry x = a: show f(2a − x) = f(x). For a = π/4, show f(π/2 − x) = f(x).

## Using symmetry to solve

If α is one solution:

- sin x = k: also π − α; then add or subtract 2π.
- cos x = k: also −α (or 2π − α); then add or subtract 2π.
- tan x = k: add or subtract π.

Example: sin x = 0.8 has α = 0.927 in [0, π/2]. In [0, 4π] the solutions are 0.927, π − 0.927 = 2.21, 0.927 + 2π = 7.21 and 2.214 + 2π = 8.50.

## Worked reminders

- sin(π + x) + sin(−x) = −sin x − sin x = −2 sin x.
- cos(π − x) cos(π + x) = (−cos x)(−cos x) = cos²x.
- tan(π/2 − x) tan x = cot x tan x = 1.
- If cos β = q, β acute: sin(π/2 + β) = q and cos(π − β) = −q.
- x² cos x is even; x² sin x is odd.
- sin(3π/2 − x) = −cos x: swap (3π/2 is an odd multiple of π/2), and for small x the angle is in the third quadrant, where sin is negative.
- The graph of y = cos(x − π) is the graph of y = cos x reflected in the x-axis, since cos(x − π) = −cos x.

## Exam traps

- **π − θ vs π + θ.** sin(π − θ) = sin θ; sin(π + θ) = −sin θ.
- **Forgetting the swap.** sin(π/2 − θ) is cos θ, not sin θ.
- **Wrong quadrant.** Use the quadrant of the new angle, not of θ.
- **Even and odd confused.** cos is even; sin and tan are odd.
- **Lines of symmetry for tan.** There are none; tan has only rotational symmetry.
- **A sketch is not a proof.** "Show that" needs an identity-based argument.
- **Periodic repeats.** After the partner solution, keep adding or subtracting the period until the interval is exhausted.

## Self-test

1. Simplify sin(2π − θ).
2. Simplify cos(π/2 + θ).
3. Simplify tan(π + θ).
4. Simplify sin(π − x) − sin(π + x).
5. Given cos α = 0.6 with α acute, write down cos(π + α) and sin(π/2 − α).
6. Given tan β = 3 with β acute, write down tan(π − β) and tan(π/2 − β).
7. State whether x³ cos x is odd, even or neither.
8. State the equations of the lines of symmetry of y = cos x for 0 < x < 3π.
9. State the centres of rotational symmetry of y = tan x for 0 < x < 2π.
10. Show that cos(3π/2 + θ) = sin θ.
11. Given x = 1.2 is a solution of cos x = k, find the other solution in [0, 2π].
12. Describe a translation that maps y = sin x onto y = cos x.

### Answers

1. −sin θ.
2. −sin θ.
3. tan θ.
4. sin x − (−sin x) = 2 sin x.
5. −0.6 and 0.6.
6. −3 and 1/3.
7. Odd: (−x)³ cos(−x) = −x³ cos x.
8. x = π and x = 2π.
9. (π/2, 0), (π, 0) and (3π/2, 0).
10. cos(3π/2) cos θ − sin(3π/2) sin θ = 0 − (−1) sin θ = sin θ.
11. 2π − 1.2 = 5.08.
12. Translation π/2 to the left.

## Links

Re-learn the reasoning in the [3.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-11/). The identities that prove these results are summarised in the [3.10 compound angle revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-10-revision-notes/).
