---
title: "OCR A Level Mathematics A: Parametric equations of curves and their use in modelling (H240)"
seoTitle: "OCR A Level Maths Parametric Equations Study Guide"
resourceType: "study-guides"
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
description: "Parametric curves, converting to and from Cartesian form, sketching and modelling, with worked examples for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers parametric equations of curves for OCR A Level Mathematics A (H240), using the OCR specification Version 3.1 (August 2026). It teaches content statements 1.03g and 1.03h in Pure Mathematics section 1.03, Coordinate Geometry in the x–y Plane. Both statements sit in the Stage 2 column, so they are **A Level only** and are not part of the common Stage 1 content shared with AS Level (H230).

Differentiating parametric equations is a separate statement (1.07s) and is not taught here. Use the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) to find the rest of the course, and the [printable checklist](/checklists/ocr/a-level/mathematics/) to tick off what you can do. When you finish, try the [revision notes](/resources/ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-practice/), or take a [free 10-minute diagnostic](/diagnostics/) first.

## What you must be able to do

| Ref | Statement (A Level only) | In this guide |
|---|---|---|
| 1.03g | Understand and use parametric equations of curves; convert between Cartesian and parametric forms; know the terms **parameter** and **parametric equation**; sketch simple parametric curves | Sections 1 to 4 |
| 1.03h | Use parametric equations in modelling, in pure mathematics or realistic contexts | Section 5 |

## 1. Parameter and parametric equations

A Cartesian equation links x and y directly, such as y = x² − 3. A **parametric equation** gives x and y separately as functions of a third variable, the **parameter**. The parameter is usually t or θ.

```
x = f(t),  y = g(t)
```

Each value of the parameter gives one point (x, y). As the parameter increases, the point moves along the curve, so a parametric curve has a **direction**. A Cartesian equation has no direction. When t is time, the pair also tells you where the object is at each moment.

The parameter often has a stated range, such as 0 ≤ t ≤ 4 or 0 ≤ θ < 2π. That range decides which part of the curve exists.

### Example 1: plotting from a table

A curve has x = t² − 4 and y = 2t. Find the points for t = −3 to 3 and the axis crossings.

```
t :   -3   -2   -1    0    1    2    3
x :    5    0   -3   -4   -3    0    5
y :   -6   -4   -2    0    2    4    6
```

The curve is a parabola lying on its side, with its vertex at (−4, 0) and passing through (0, ±4). It crosses the y-axis where x = 0, so t² = 4 and t = ±2, giving (0, −4) and (0, 4). It crosses the x-axis where y = 0, so t = 0, giving (−4, 0). Moving with t increasing, the point travels upward.

## 2. Parametric to Cartesian: eliminating the parameter

**Method A: substitute.** Make t the subject of the simpler equation and put it into the other.

### Example 2: a restriction you must find

Find a Cartesian equation of x = 1/(t + 1), y = t/(t + 1), for t ≠ −1.

```
x = 1/(t+1)   so   t + 1 = 1/x
y = (t+1-1)/(t+1) = 1 - 1/(t+1) = 1 - x
```

The Cartesian equation is **y = 1 − x**. But x = 1/(t + 1) can never be 0, so the point (0, 1) is missing. The curve is the line y = 1 − x with that point removed. State restrictions like this whenever the parameter cannot take every value.

**Method B: use a trigonometric identity.** When x and y involve sin θ and cos θ, rearrange each to get sin θ and cos θ alone, then use

```
sin²θ + cos²θ ≡ 1
```

Other useful identities are cos 2θ ≡ 1 − 2sin²θ ≡ 2cos²θ − 1, sin 2θ ≡ 2 sin θ cos θ, and sec²θ ≡ 1 + tan²θ.

### Example 3: an ellipse

Find the Cartesian equation of x = 2 + 6cos θ, y = −1 + 4sin θ, for 0 ≤ θ < 2π.

```
cos θ = (x - 2)/6      sin θ = (y + 1)/4
((x-2)/6)² + ((y+1)/4)² = 1
```

This is an **ellipse** with centre (2, −1). Because −1 ≤ cos θ ≤ 1, x runs from −4 to 8. Because −1 ≤ sin θ ≤ 1, y runs from −5 to 3.

### Example 4: squaring and an identity

Find the Cartesian equation of x = sin θ + cos θ, y = sin 2θ, for 0 ≤ θ < 2π, and state the range of x.

```
x² = sin²θ + 2 sin θ cos θ + cos²θ = 1 + sin 2θ = 1 + y
y = x² - 1
```

To find the range of x, write sin θ + cos θ as √2 sin(θ + π/4). Its values lie between −√2 and √2. So the curve is **y = x² − 1 for −√2 ≤ x ≤ √2**. The Cartesian equation alone would continue forever, so the restriction matters.

### Example 5: a curve traced back and forth

For x = 3 sin θ and y = 1 − cos 2θ, use cos 2θ ≡ 1 − 2sin²θ to get y = 2sin²θ = 2(x/3)² = 2x²/9. Since −3 ≤ x ≤ 3, only that part of the parabola exists, so 0 ≤ y ≤ 2. As θ goes from 0 to 2π the point runs along the arc and back more than once. A parametric curve can be traced several times by the same range of the parameter.

### Example 6: sec and tan

Find the Cartesian equation of x = tan θ, y = 3 sec θ, for −π/2 < θ < π/2. Using sec²θ ≡ 1 + tan²θ:

```
y² = 9 sec²θ = 9(1 + tan²θ) = 9(1 + x²)
```

On this range sec θ > 0, so y > 0. The curve is the upper branch only: **y = 3√(1 + x²)**.

## 3. Cartesian to parametric

There is always more than one correct answer. Choose a substitution that suits the curve.

- **Any curve y = f(x):** put x = t, so y = f(t). For y = x³ − 2x, use x = t, y = t³ − 2t.
- **Circle (x − a)² + (y − b)² = r²:** use x = a + r cos θ, y = b + r sin θ.
- **Ellipse ((x − a)/p)² + ((y − b)/q)² = 1:** use x = a + p cos θ, y = b + q sin θ.
- **Line segment:** from A to B, use x = x_A + t(x_B − x_A), y = y_A + t(y_B − y_A), 0 ≤ t ≤ 1.

### Example 7: a circle given in expanded form

Write x² + y² − 6x + 4y − 12 = 0 in parametric form.

```
(x - 3)² - 9 + (y + 2)² - 4 - 12 = 0
(x - 3)² + (y + 2)² = 25
```

Centre (3, −2), radius 5. So **x = 3 + 5cos θ, y = −2 + 5sin θ**, for 0 ≤ θ < 2π.

### Example 8: a line segment

Give parametric equations for the segment from A(1, 2) to B(5, 10). Then x = 1 + 4t and y = 2 + 8t, with 0 ≤ t ≤ 1. At t = 0 you are at A, at t = 1/2 you are at the midpoint (3, 6), and at t = 1 you are at B.

## 4. Sketching parametric curves

To sketch a simple parametric curve:

1. Make a table of values, including the ends of the range and any turning behaviour.
2. Find where it crosses the axes. For the y-axis, solve x(t) = 0. For the x-axis, solve y(t) = 0.
3. Convert to Cartesian form if you can. It tells you the shape, and the restrictions tell you where the curve starts and stops.
4. Mark the extreme values of x and y.
5. Add an arrow to show the direction of increasing t when the question expects one.

For Example 3 you would draw an ellipse touching x = −4, x = 8, y = −5 and y = 3. For Example 4 you would draw the parabola y = x² − 1 from x = −√2 to x = √2 only, with end points at (±√2, 1).

## 5. Modelling with parametric equations

In a model the parameter is usually time. Positions then come from substituting a time into both equations.

### Example 9: a projectile

A ball is hit from ground level. Its position t seconds later is x = 24t, y = 15t − 5t², in metres, with x horizontal and y vertical.

**(a) Greatest height.** Since y = 15t − 5t² is a downward-opening quadratic in t, its maximum is at t = 15/10 = 1.5. Then y = 15(1.5) − 5(1.5)² = 22.5 − 11.25 = **11.25 m**.

**(b) Time of flight and range.** The ball lands where y = 0: 5t(3 − t) = 0, so t = 3. Then x = 24 × 3 = **72 m**.

**(c) Cartesian equation.** Put t = x/24: y = 15x/24 − 5x²/576, so **y = 5x/8 − 5x²/576** for 0 ≤ x ≤ 72.

**(d) A fence 7 m high stands 60 m away.** At x = 60, t = 2.5 and y = 15(2.5) − 5(2.5)² = 37.5 − 31.25 = 6.25. Since 6.25 < 7, the ball **does not clear** the fence.

**(e) Time above 10 m.** Solve 15t − 5t² ≥ 10, so t² − 3t + 2 ≤ 0, so (t − 1)(t − 2) ≤ 0. The ball is above 10 m for 1 ≤ t ≤ 2, which is **1 second**.

### Example 10: a circular path

A seat on a wheel moves so that x = 14 sin(πt/15), y = 16 − 14cos(πt/15), with t in seconds, x and y in metres, and y the height above the ground.

**Path.** Rearranging, x/14 = sin(πt/15) and (16 − y)/14 = cos(πt/15). So x² + (y − 16)² = 196. It is a circle with centre (0, 16) and radius 14. The lowest height is 2 m and the highest is 30 m.

**Period.** The angle πt/15 completes 2π when t = 30, so one turn takes **30 s**.

**Time above 25 m in one turn.** Solve 16 − 14cos(πt/15) > 25, so cos(πt/15) < −9/14. Let α = arccos(−9/14) = 2.269 radians (work in radians, because the model uses π). Then α < πt/15 < 2π − α, giving 10.83 < t < 19.17. The seat is above 25 m for about **8.33 s** each turn.

### Example 11: meeting or just crossing?

Particle P has position (2t, t²) and particle Q has position (10 − 2s, 4s − 8), where t and s are times measured on the same clock, so s = t at any moment. The paths are y = x²/4 and y = 12 − 2x. Setting them equal gives x² + 8x − 48 = 0, so x = 4 or x = −12. Only x = 4 is reachable by P (x ≥ 0), giving the point (4, 4). P is there at t = 2. Q is there when 10 − 2s = 4, so s = 3. The particles are at the same point at **different times**, so they do not collide even though their paths cross.

This is the key modelling distinction. To find where **paths** cross, eliminate the parameters. To find whether **objects meet**, the times must match.

### Related rates of change

The specification gives related rates of change as an example of a realistic context. Finding how fast a position changes with t needs differentiation, which is statement 1.07s and is not taught here.

### Stating limitations

After modelling a projectile or a wheel, you may be asked how realistic the model is. Useful, specific points are: air resistance is ignored, the ball is treated as a particle, the model holds only until the ball lands (0 ≤ t ≤ 3 above), and a wheel seat is assumed to move at constant speed.

## Common errors

- Giving the Cartesian equation but not the range of x or y that the parameter allows.
- Reading a circle's centre with the wrong sign. In x = 3 + 5cos θ, the centre's x-coordinate is +3, and in (x − 3)² it is also +3.
- Using x = a cos θ and y = a sin θ for an ellipse with different semi-axes. Each needs its own coefficient.
- Setting the two parameters equal when asked for where **paths** cross, or leaving them separate when asked whether objects **meet**.
- Working in degrees when the model uses πt/15.
- Rounding t early, then using the rounded value to find x.
- Forgetting to reject a root outside the stated range of the parameter, such as a negative time.

## Next steps

Check you can do each skill without notes, then use the [revision notes](/resources/ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-revision-notes/) to memorise the methods. The [practice questions](/resources/ocr-a-level-mathematics-parametric-equations-of-curves-and-their-use-in-practice/) have full worked answers. For the wider Pure Mathematics course, see [OCR A Level Mathematics: Pure Mathematics](/resources/ocr-a-level-mathematics-pure-mathematics/) and the [pure practice set](/resources/ocr-a-level-mathematics-pure-practice/). A [free 10-minute diagnostic](/diagnostics/) shows which topic to revise next.

## Official syllabus

This guide follows the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. The content statements used are 1.03g and 1.03h.
