---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.4 Tangents and normals at a given point -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.04
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-4"
description: "Revision notes on IB DP Maths AA section 5.4: tangent and normal equations, perpendicular gradients, special cases, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 5.4, tangents and normals at a given point**, in IB DP Mathematics:
Analysis and Approaches (first assessment 2021), examined at SL and HL. The
[5.4 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4/)
works through each question type; the
[5.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4-practice/)
test them. For the full differentiation unit, see the
[differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/).

## The formulae

```
Point on the curve:   P(x₁, y₁) with y₁ = f(x₁)
Tangent gradient:     m = f′(x₁)
Normal gradient:      −1/m        (m ≠ 0)
Line through P:       y − y₁ = m(x − x₁)
Perpendicular lines:  m₁ × m₂ = −1
```

## Condensed recall

- **Three ingredients.** Every tangent or normal question needs x₁, y₁ and the gradient. Find all three
  before writing the line.
- **f for height, f′ for slope.** y₁ comes from f; m comes from f′.
- **Horizontal tangent.** If f′(x₁) = 0, the tangent is y = y₁ and the normal is x = x₁.
- **Parallel to a line.** Set f′(x) equal to that line's gradient and solve; there may be several
  points.
- **Perpendicular to a line.** The tangent's gradient is −1 divided by that line's gradient.
- **Second intersection.** Solve the line and the curve simultaneously; the known x₁ must be one
  root, which helps you factorise.
- **Tangent through an external point.** Write the tangent at a general point (a, f(a)), substitute
  the external point and solve for a.
- **Intercepts and areas.** Set y = 0 for the x-intercept and x = 0 for the y-intercept; use lengths
  (positive) in area formulas.
- **Technology.** The GDC gives f′(x₁) numerically; you write the equation. For the normal, calculate
  −1/m yourself.
- **Forms.** Gradient–intercept y = mx + c, or general form ax + by + d = 0 with integers when asked.

## Key terms

| Term | Meaning |
|---|---|
| Tangent | Line touching the curve at P with the same gradient as the curve there |
| Normal | Line through P perpendicular to the tangent |
| Point-gradient form | y − y₁ = m(x − x₁) |
| Perpendicular | At right angles; gradients multiply to −1 |
| Parallel | Same gradient |
| Intercept | Where a line crosses an axis |

## Mini-example

Find the normal to y = 3x² − x³ at x = 1, in the form ax + by + d = 0.

```
y(1) = 3 − 1 = 2, P = (1, 2)
dy/dx = 6x − 3x², m = 3
normal gradient −1/3
y − 2 = −(1/3)(x − 1)  →  3y − 6 = −x + 1  →  x + 3y − 7 = 0
```

## Mini-example: tangent through an external point

Find the tangents to y = x² + 4 that pass through the origin.

```
Tangent at (a, a² + 4) has gradient 2a:  y − (a² + 4) = 2a(x − a)
Through (0, 0):  −a² − 4 = −2a²  →  a² = 4  →  a = ±2
a = 2:  y = 4x        a = −2:  y = −4x
```

## Exam traps

- **Trap: the gradient function in the line.** Writing y − y₁ = (2x − 4)(x − x₁) gives a curve, not a
  line. Substitute x₁ into f′ first.
- **Trap: the normal gradient.** If m = −2/3, the normal gradient is 3/2, not −3/2.
- **Trap: y₁ from f′.** The y-coordinate always comes from the original function.
- **Trap: missing the second point.** "Find the tangents parallel to…" often has two answers.
- **Trap: the given point.** When solving for a second intersection, do not report the original point
  as the answer.
- **Trap: rounding on Paper 2.** Use stored values; rounding m to 2 s.f. can change the intercept.

## Self-test

1. What is the gradient of the tangent to y = f(x) at x = a?
2. The tangent at P has gradient 4. Write down the gradient of the normal at P.
3. The tangent at P has gradient −1/5. Write down the gradient of the normal.
4. Find the tangent to y = x² + 1 at x = 2.
5. Find the normal to y = x² + 1 at x = 2.
6. The curve y = x² − 6x + 10 has a horizontal tangent at x = 3. Write down the equations of the
   tangent and normal there.
7. Find the x-coordinate of the point on y = x² where the tangent is parallel to y = 6x − 1.
8. Find the point on y = x² − 3x where the tangent is perpendicular to y = x/5.
9. The tangent to y = 4/x at x = 2 meets the x-axis at A. Find A.
10. Why can a normal not be found by −1/m when m = 0?
11. The line y = 2x + c is a tangent to y = x² + 3. Find c.
12. A GDC gives f(1.5) = 2.84 and f′(1.5) = −0.6. Write the tangent at x = 1.5 in the form
    y = mx + c.

**Answers**

1. f′(a).
2. −1/4.
3. 5.
4. y(2) = 5, m = 4: y = 4x − 3.
5. y − 5 = −(1/4)(x − 2), so x + 4y − 22 = 0 (or y = −x/4 + 11/2).
6. y(3) = 1: tangent y = 1, normal x = 3.
7. 2x = 6, so x = 3.
8. Gradient needed: −5. 2x − 3 = −5, x = −1, y = 4: the point (−1, 4).
9. y = 4x⁻¹, m = −4/x² = −1 at x = 2; point (2, 2); tangent y = −x + 4; A = (4, 0).
10. Division by zero is undefined; the tangent is horizontal, so the normal is the vertical line
    x = x₁.
11. 2x = 2 gives x = 1, point (1, 4); 4 = 2 + c, so c = 2.
12. y − 2.84 = −0.6(x − 1.5), so y = −0.6x + 3.74.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.4: tangents and normals at a given point, and their
equations, using analytic approaches and technology.
