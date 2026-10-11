---
title: "OCR A Level Mathematics A: Parametric equations of curves and their use in modelling (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Parametric Equations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Parametric equations of curves and their use in modelling"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 109
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "coordinate-geometry-in-the-xy-plane-ocr-alevel-maths"
description: "Condensed formulae, methods, a checked self-test and common slips on parametric curves and modelling for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense parametric equations of curves for OCR A Level Mathematics A (H240), specification Version 3.1 (August 2026), content statements 1.03g and 1.03h. Both statements are in the Stage 2 column, so they are **A Level only**. For full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in/) first. Differentiating parametric equations is statement 1.07s and is not covered here. Find the rest of the course on the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) and tick off skills on the [printable checklist](/checklists/ocr/a-level/mathematics/).

## Key terms

- **Parameter:** the extra variable (t or θ) that gives x and y separately.
- **Parametric equations:** x = f(t) and y = g(t). Each value of the parameter gives one point.
- **Direction:** the curve is traced in the direction of increasing parameter. A Cartesian equation has no direction.
- **Range of the parameter:** decides which part of the curve exists, and can make some Cartesian points unreachable.

## Conversion toolkit

| Situation | Move |
|---|---|
| x or y is linear in t | Make t the subject of that equation and substitute into the other |
| Both x and y contain sin θ and cos θ | Rearrange to sin θ and cos θ alone, then use sin²θ + cos²θ ≡ 1 |
| One equation has a double angle | Use cos 2θ ≡ 1 − 2sin²θ ≡ 2cos²θ − 1 or sin 2θ ≡ 2 sin θ cos θ |
| tan and sec appear | Use sec²θ ≡ 1 + tan²θ |
| Sum or difference of sin and cos | Square it, then use sin²θ + cos²θ ≡ 1 and sin 2θ |
| Cartesian y = f(x) to parametric | Let x = t, so y = f(t) |

## Standard parametric forms

| Curve | Cartesian | Parametric |
|---|---|---|
| Circle of radius r about (a, b) | (x − a)² + (y − b)² = r² | y = b + r sin θ with x = a + r cos θ |
| Ellipse, centre (a, b) | ((x − a)/p)² + ((y − b)/q)² = 1 | x = a + p cos θ, y = b + q sin θ |
| Line segment from A to B | straight line between the points | x = x_A + t(x_B − x_A), y = y_A + t(y_B − y_A), 0 ≤ t ≤ 1 |

Parametric forms are **not unique**. Many correct answers exist for the same curve.

## Method: parametric to Cartesian

1. Look at which equation is simplest to rearrange.
2. Eliminate the parameter, by substitution or by an identity.
3. Simplify to a relation between x and y.
4. Work out the range of x (and y) that the parameter allows.
5. State the final answer with its restriction.

**Reminder.** x = 2 − 5t and y = t² + 1 give t = (2 − x)/5 and y = (2 − x)²/25 + 1. If t ≥ 0 is stated, then x ≤ 2.

**Reminder with restriction.** x = 3 − 2cos θ means −1 ≤ cos θ ≤ 1, so 1 ≤ x ≤ 5.

## Method: Cartesian to parametric

1. For a circle or ellipse, complete the square to find the centre and radii.
2. Match each squared bracket to cos²θ and sin²θ.
3. Write x and y with a range 0 ≤ θ < 2π, unless told otherwise.
4. Check by substituting back into the Cartesian equation.

**Reminder.** x² + y² + 10x − 2y + 10 = 0 gives (x + 5)² + (y − 1)² = 16. So x = −5 + 4 cos θ, y = 1 + 4 sin θ.

## Method: sketching

1. Table of values, including both ends of the parameter range.
2. Axis crossings: y-axis when x(t) = 0, x-axis when y(t) = 0.
3. Cartesian form for the overall shape.
4. Greatest and least x and y.
5. Arrow for the direction of increasing parameter.

If a curve crosses itself, two different values of t give the same point. Equal x and y at two parameter values means a self-intersection.

**Reminder.** For x = t² − 2, y = t³ − 2t, both t = √2 and t = −√2 give (0, 0), so the curve passes through the origin twice. The value t = 0 gives (−2, 0).

## Modelling checklist

1. Identify what the parameter means. Usually it is time.
2. Substitute a time into **both** equations to get a position.
3. For greatest height of a projectile, find the turning point of the y quadratic in t (a quadratic ax² + bx + c has its turning point at x = −b/(2a)).
4. For landing, solve y = 0 and reject roots outside the range of t.
5. For range, substitute the landing time into x.
6. To test a barrier at a given horizontal distance, find t from the x-equation, then check y.
7. For a time spent above or below a height, solve an inequality in t.
8. Use exact or unrounded values until the last line.
9. Comment on the model: air resistance ignored, particle model, valid only for the stated range of t.

**Reminder: barrier test.** A ball has x = 10t, y = 12t − 5t². A wall 3 m high stands 15 m away.

```
x = 15  gives  t = 1.5
y = 12(1.5) - 5(1.5)² = 18 - 11.25 = 6.75
6.75 > 3, so the ball clears the wall
```

**Reminder: time above a height.** For the same ball, y ≥ 6 means 5t² − 12t + 6 ≤ 0. Solve the quadratic equation and take the interval between the roots. The roots are t = (6 ± √6)/5, about 0.710 and 1.690, so the duration is 2√6/5, about 0.980 s.

## Paths versus objects

To find where two **paths** cross, eliminate the parameter in each and solve the Cartesian equations together. To find whether two **objects** meet, the parameters must also be equal at that point, because the objects must be there at the same time. Two paths can cross with no collision.

## Must-know distinctions

- **Cartesian equation vs parametric curve.** The Cartesian equation may describe more points than the parametric curve does.
- **Circle vs ellipse.** A circle has the same coefficient on cos θ and sin θ. An ellipse has different coefficients.
- **Centre sign.** (x − 3)² gives centre x-coordinate +3, so x = 3 + r cos θ.
- **Degrees vs radians.** If the parameter appears as πt/15 or similar, work in radians.
- **Path vs motion.** The path is the shape. The parametric form also tells you when each point is reached.

## Quick self-test

1. Find a Cartesian equation of x = 2t − 5, y = 4 − t.
2. Find a Cartesian equation of x = t², y = t³.
3. Find a Cartesian equation of x = 3 + 2 sin θ, y = 4 cos θ − 1.
4. Find a Cartesian equation of x = sin θ, y = 4 + cos 2θ, and state the range of x.
5. Write (x − 1)² + (y + 3)² = 9 in parametric form.
6. Give parametric equations for the segment from (0, 4) to (6, −2).
7. A ball has x = 5t, y = 20t − 5t² for t ≥ 0. Find the greatest height and the range.
8. A seat has x = 8 sin(πt/6), y = 10 − 8 cos(πt/6). Find its greatest height and the time for one turn.
9. Does the point (7, −3) lie on x = 2t + 1, y = t² − 4t?
10. State the range of x for x = 3 − 2 cos θ.

### Answers

1. t = 4 − y, so x = 2(4 − y) − 5 = 3 − 2y. **y = (3 − x)/2.**
2. Square y: y² = t⁶ = (t²)³. **y² = x³**, with x ≥ 0.
3. **((x − 3)/2)² + ((y + 1)/4)² = 1**, an ellipse.
4. cos 2θ = 1 − 2sin²θ, so y = 4 + 1 − 2x² = **5 − 2x²**, for **−1 ≤ x ≤ 1**.
5. **x = 1 + 3 cos θ, y = −3 + 3 sin θ**, 0 ≤ θ < 2π.
6. **x = 6t, y = 4 − 6t**, 0 ≤ t ≤ 1. Other correct forms exist.
7. Turning point at t = 2, so y = 40 − 20 = **20**. Landing: 5t(4 − t) = 0, t = 4, so x = **20**.
8. Greatest height at cos = −1, so y = 10 + 8 = **18**, reached at t = 6. One turn is 2π ÷ (π/6) = **12 s**.
9. x = 7 gives t = 3. Then y = 9 − 12 = −3. **Yes**, at t = 3.
10. −1 ≤ cos θ ≤ 1, so **1 ≤ x ≤ 5**.

## Where marks are usually lost

- Leaving out the range of x or y after eliminating a trigonometric parameter.
- Forgetting a point that is missing because the parameter can never reach it.
- Giving a circle's centre with the wrong sign.
- Using a single coefficient for an ellipse that needs two.
- Not writing down the identity used, so the step looks unsupported. In a "show that" question, show each stage.
- Treating "paths cross" as "objects meet".
- Rounding t early and carrying a rounded value into x or y.
- Keeping a negative time or a time past landing.
- Mixing degrees and radians in a model with π in it.
- Finishing a modelling question with a bare number and no units or context.

## Next steps

Try the [practice questions](/resources/ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-practice/) under timed conditions, and use the [free 10-minute diagnostics](/diagnostics/) to check wider Pure Mathematics. The course-level [Pure Mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/) put this unit in context.

## Official syllabus

These notes follow the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. The content statements used are 1.03g and 1.03h.
