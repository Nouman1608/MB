---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.1 Equations of a straight line"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.01
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-1"
description: "Study guide to IB Maths AA 2.1: the three forms of a straight line, gradients, intercepts, parallel and perpendicular lines, with worked examples and contexts."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.1 of IB Diploma Programme Mathematics: Analysis and Approaches, the first subtopic of the Functions topic and common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists three forms of the equation of a straight line, y = mx + c, ax + by + d = 0 and y − y₁ = m(x − x₁); gradients; intercepts; and the conditions for lines with gradients m₁ and m₂ to be parallel (m₁ = m₂) or perpendicular (m₁ × m₂ = −1). The guide also points to gradients of real inclines, such as roads and ramps.

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) introduces these forms alongside the rest of 2.1–2.7. This page stays on lines and goes further: moving fluently between forms, shortcuts for parallel and perpendicular lines, lines with unknown constants, intersections, and interpreting gradient and intercept in a model. Afterwards, use the [2.1 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-1-revision-notes/) and the [2.1 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-1-practice/).

## The three forms and when to use each

| Form | Best when you know | What you read off |
|---|---|---|
| y = mx + c | The gradient and y-intercept | Gradient m, y-intercept (0, c) |
| y − y₁ = m(x − x₁) | The gradient and any point | Quickest route to an equation |
| ax + by + d = 0 | A final answer "in the form ax + by + d = 0" | Gradient −a/b, intercepts by setting x = 0 or y = 0 |

The gradient of the line through (x₁, y₁) and (x₂, y₂) is m = (y₂ − y₁)/(x₂ − x₁). A positive gradient rises from left to right; a negative one falls.

When a question asks for the form ax + by + d = 0 "where a, b, d ∈ ℤ", clear every fraction and collect all terms on one side. The equation 2x + 3y − 11 = 0 is acceptable; y = −(2/3)x + 11/3 is not, even though it is the same line.

## Special lines

- **Horizontal lines** y = k have gradient 0.
- **Vertical lines** x = k have no defined gradient, so they cannot be written as y = mx + c.
- A horizontal and a vertical line are always perpendicular, even though m₁ × m₂ = −1 cannot be used for them.
- The line y = x has gradient 1 and passes through the origin; inverse functions are reflections in it (section 2.2).

## Worked example 1: reading a general-form equation

Find the gradient and the axis intercepts of 4x − 6y + 9 = 0.

```
Rearrange: 6y = 4x + 9, so y = (2/3)x + 3/2
Gradient = 2/3          (check: −a/b = −4/(−6) = 2/3)
y-intercept: x = 0  →  (0, 3/2)
x-intercept: y = 0  →  4x + 9 = 0  →  (−9/4, 0)
```

Give intercepts as coordinates when the question says "point"; give the value of x or y when it says "intercept" alone. Either way, keep exact fractions on Paper 1.

## Parallel and perpendicular lines: a shortcut

For a line ax + by + d = 0:

- every **parallel** line is ax + by + e = 0 (same a and b, new constant);
- every **perpendicular** line is bx − ay + e = 0 (swap a and b, change one sign).

Find e by substituting the given point.

**Example.** Through (−2, 7), find the lines parallel and perpendicular to 3x + 5y = 1.

```
Parallel:       3x + 5y = 3(−2) + 5(7) = 29       →  3x + 5y − 29 = 0
Perpendicular:  5x − 3y = 5(−2) − 3(7) = −31      →  5x − 3y + 31 = 0
```

Check: the gradients are −3/5 and 5/3, and (−3/5)(5/3) = −1.

## Worked example 2: perpendicular bisector

Find the perpendicular bisector of P(−3, 2) and Q(5, 6).

```
Midpoint of PQ: ((−3 + 5)/2, (2 + 6)/2) = (1, 4)
Gradient of PQ: (6 − 2)/(5 − (−3)) = 4/8 = 1/2
Perpendicular gradient: −2
y − 4 = −2(x − 1)  →  y = −2x + 6  →  2x + y − 6 = 0
```

Every point on this line is the same distance from P and Q. For example, (3, 0) lies on it, and its squared distances to P and Q are 6² + 2² = 40 and 2² + 6² = 40.

## Worked example 3: lines with an unknown constant

Lines L₁: kx + 2y = 5 and L₂: 3x − (k + 1)y = 4 are given, where k is a constant.

(a) Find k if the lines are perpendicular. (b) Show that they can never be parallel.

```
Gradient of L₁: −k/2          Gradient of L₂: 3/(k + 1),  k ≠ −1
(a) (−k/2) × 3/(k + 1) = −1
    3k = 2(k + 1)  →  k = 2
    Check: L₁ is 2x + 2y = 5 (gradient −1), L₂ is 3x − 3y = 4 (gradient 1)
(b) Parallel needs −k/2 = 3/(k + 1)
    −k(k + 1) = 6  →  k² + k + 6 = 0
    Discriminant 1 − 24 = −23 < 0, so no real k
```

The case k = −1 also needs a check: L₂ becomes the vertical line x = 4/3, and L₁ becomes −x + 2y = 5 with gradient 1/2, so they are neither parallel nor perpendicular. Separate cases like this earn the final reasoning mark.

## Worked example 4: intersection and a linear model

Two invented phone plans charge C dollars for m minutes. Plan A: C = 12 + 0.05m. Plan B: C = 20 + 0.03m.

(a) Interpret the gradient and intercept of Plan A. (b) Find when the plans cost the same.

```
(a) Gradient 0.05: each extra minute costs $0.05.
    Intercept 12: the fixed monthly charge is $12.
(b) 12 + 0.05m = 20 + 0.03m
    0.02m = 8  →  m = 400,  C = 12 + 0.05(400) = 32
```

The plans cost the same, $32, at 400 minutes. Plan A is cheaper below 400 minutes, because it starts lower and its line lies below Plan B's until they cross.

The point of intersection of any two lines is found the same way: substitute one equation into the other, or eliminate a variable. For 2x + 3y = 12 and y = x − 1: 2x + 3x − 3 = 12, so x = 3 and y = 2.

## Gradients of inclines

In a context, gradient = vertical rise ÷ horizontal distance, with both in the same units. A road that climbs 84 m over a horizontal distance of 1.2 km has gradient 84 ÷ 1200 = 0.07, often quoted as 7%. Because the line at angle θ to the horizontal has gradient tan θ (section 3.5), the road rises at about 4.00° to the horizontal. Use the horizontal distance, not the length along the slope.

## Collinear points

Three points are collinear if the gradient from the first to the second equals the gradient from the second to the third (they share the middle point). For A(1, 2), B(4, 8) and C(7, 14): both gradients are 2, so A, B and C lie on one line.

## Common mistakes

- Taking the gradient of ax + by + d = 0 as a, or as −b/a. It is −a/b.
- Using the gradient of the given line, not the negative reciprocal, for a perpendicular line.
- Writing a "general form" answer with fractions when integers were requested.
- Subtracting coordinates in different orders on the top and bottom of the gradient formula.
- Using the length along a slope instead of the horizontal distance for an incline.
- Forgetting the special case where a coefficient becomes zero, giving a vertical or horizontal line.

## Exam technique

- **Write down:** the answer can be read off, so no working is needed, for example "the gradient of y = 4 − 2x".
- **Find:** show the gradient calculation and the substitution, then simplify.
- **Show that two lines are perpendicular:** find both gradients and state that their product is −1.
- **Hence:** use the line you have just found, for example to find where it meets another line.
- Paper 1 has no calculator, so fractions must be handled exactly; on Paper 2 you may check an intersection on the GDC.

## Where to go next

Recap this page with the [2.1 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-1-revision-notes/), then test yourself with the [2.1 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-1-practice/). The next subtopic, the [concept of a function, domain, range and inverse](/resources/ib-dp-mathematics-analysis-and-approaches-2-2/), uses lines as its simplest examples.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.1.
