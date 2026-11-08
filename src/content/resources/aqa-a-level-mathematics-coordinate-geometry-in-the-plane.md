---
title: "AQA A-Level Mathematics: C: Coordinate geometry in the (x, y) plane (7357)"
seoTitle: "AQA A-Level Maths 7357 Coordinate Geometry Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "C: Coordinate geometry in the (x, y) plane"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "c-coordinate-geometry-aqa-alevel-maths"
description: "Straight lines, circles and parametric equations taught from scratch with worked examples for AQA A-Level Mathematics (7357), Section C, C1 to C4."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches **Section C: Coordinate geometry in the (x, y) plane** of the AQA A-level
Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018
onwards. It covers every content reference in the section, C1 to C4: straight lines, circles, and
parametric equations. Section C is listed under Paper 1, and Papers 2 and 3 can assess any Paper 1
content as well, so these skills can earn marks on all three papers. A calculator is required in
every 7357 assessment, but most coordinate geometry marks come from exact algebra, so show it.

Use it with the [revision notes](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane-revision-notes/)
and the [practice questions](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane-practice/).
The course hub is at [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/) and the printable
checklist at [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/).

## What this section covers

| Ref | What you must be able to do |
|---|---|
| C1 | Use the equation of a straight line, including y − y₁ = m(x − x₁) and ax + by + c = 0; use the gradient conditions for parallel and perpendicular lines; use straight-line models in context |
| C2 | Use the circle (x − a)² + (y − b)² = r²; complete the square to find the centre and radius; use three circle properties (angle in a semicircle, perpendicular from the centre to a chord, radius and tangent) |
| C3 | Use parametric equations of curves and convert between Cartesian and parametric forms |
| C4 | Use parametric equations in modelling in a variety of contexts |

Two results here are in Appendix B of the specification, which lists formulae you must recall
because they are **not** given in the exam: the line y − y₁ = m(x − x₁), and the condition
m₁m₂ = −1 for perpendicular lines.

## C1: Straight lines

<!-- marlbridge-diagram:maths-aqa-coordinate-line-circle -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-aqa-coordinate-line-circle.svg" aria-label="Open full-size diagram: maths-aqa-coordinate-line-circle"><img src="/images/learning/mathematics/maths-aqa-coordinate-line-circle.svg" width="1600" height="1050" alt="Diagram follows the source line example with A(−2,5), B(4,1), line equation 2x+3y−11=0 and perpendicular bisector 3x−2y+3=0; circle conversion included." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Diagram follows the source line example with A(−2,5), B(4,1), line equation 2x+3y−11=0 and perpendicular bisector 3x−2y+3=0; circle conversion included. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-aqa-coordinate-line-circle -->


The gradient of the line through (x₁, y₁) and (x₂, y₂) is

```
m = (y₂ − y₁)/(x₂ − x₁)
```

You will meet three forms of the equation:

- **y = mx + c** — gradient m, y-intercept c. Best for reading off the gradient.
- **y − y₁ = m(x − x₁)** — gradient m through (x₁, y₁). Fastest way to write an equation.
- **ax + by + c = 0** — a general form. Questions often ask for a, b and c as integers.

To find the gradient from ax + by + c = 0, rearrange to y = −(a/b)x − c/b. The gradient is −a/b.

**Parallel and perpendicular lines.** Parallel lines have equal gradients: m₁ = m₂. Perpendicular
lines have m₁m₂ = −1, so the perpendicular gradient is the **negative reciprocal**: −1/m.
A gradient of −2/3 becomes 3/2.

### Worked example 1

A is (−2, 5) and B is (4, 1). Find the equation of line AB in the form ax + by + c = 0, where a, b
and c are integers, then find the perpendicular bisector of AB.

```
Gradient AB = (1 − 5)/(4 − (−2)) = −4/6 = −2/3
y − 5 = −(2/3)(x + 2)
3y − 15 = −2x − 4
2x + 3y − 11 = 0
```

The perpendicular bisector passes through the midpoint of AB at right angles to it.

```
Midpoint = ((−2 + 4)/2, (5 + 1)/2) = (1, 3)
Perpendicular gradient = 3/2
y − 3 = (3/2)(x − 1)
2y − 6 = 3x − 3
3x − 2y + 3 = 0
```

Check: (1, 3) gives 3 − 6 + 3 = 0. The length AB = √(6² + 4²) = √52 = 2√13, which you will need
when a circle has AB as a diameter.

### Straight-line models

C1 also asks you to use straight lines as models. The gradient is a **rate of change** and the
intercept is a **starting value**. You must interpret both in context and say where the model stops
working.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--01-line-segment-toolkit.webp" width="900" height="950" alt="A(-2,5) and B(4,1): gradient, midpoint M, line 2x+3y-11=0 and perpendicular bisector 3x-2y+3=0 whose gradients multiply to -1." loading="lazy">
  <figcaption>The gradient triangle, the midpoint and the perpendicular bisector all come from the same two points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--02-straight-line-model.webp" width="900" height="880" alt="Candle height h = 24 - 1.8t: intercept 24 cm, gradient -1.8 cm per hour, burnt out at t = 40/3 h; the model is invalid beyond that. Worked example from the AQA lesson." loading="lazy">
  <figcaption>The gradient is a rate of change, the intercept a starting value, and the model has a limited domain. AQA and OCR.</figcaption>
</figure>


### Worked example 2

A candle is 24 cm tall when it is lit. After 3 hours it is 18.6 cm tall. Assume the height h cm
falls linearly with time t hours.

```
Gradient = (18.6 − 24)/3 = −1.8
h = 24 − 1.8t
```

The gradient −1.8 means the candle gets 1.8 cm shorter each hour. The intercept 24 is the height
when lit. The candle has burnt down when h = 0, so t = 24/1.8 = 40/3 hours (13 hours 20 minutes).
The model is only valid for 0 ≤ t ≤ 40/3; it would give negative heights after that. A refinement
might allow for the wick and the base, which do not burn at the same rate.

## C2: Circles

A circle with centre (a, b) and radius r has equation

```
(x − a)² + (y − b)² = r²
```

This is Pythagoras' theorem: every point (x, y) on the circle is a distance r from (a, b). Watch the
signs. (x + 4)² means a = −4.

### Completing the square

If the equation is expanded, complete the square in x and in y separately.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--04-is-it-a-circle.webp" width="900" height="1070" alt="Equation x^2+y^2-4x+6y+k=0 completes to (x-2)^2+(y+3)^2=13-k: circles for k=0 and 9, a point at k=13 and nothing for k&gt;13." loading="lazy">
  <figcaption>After completing the square the right-hand side is r squared, so it must be positive for a circle to exist.</figcaption>
</figure>


### Worked example 3

Find the centre and radius of x² + y² − 6x + 10y + 9 = 0.

```
(x² − 6x) + (y² + 10y) + 9 = 0
(x − 3)² − 9 + (y + 5)² − 25 + 9 = 0
(x − 3)² + (y + 5)² = 25
```

Centre (3, −5), radius 5. If the right-hand side comes out zero or negative, the equation does not
describe a circle.

### Property 1: the angle in a semicircle is a right angle

If PQ is a diameter and R is any other point on the circle, angle PRQ = 90°. You can use it both
ways: a right angle at R tells you PQ is a diameter, so the centre is the midpoint of PQ.

### Worked example 4

P(1, 7) and Q(7, −1) are the ends of a diameter. Find the circle's equation and show that angle PRQ
is a right angle, where R is (8, 6).

```
Centre = midpoint of PQ = (4, 3)
PQ = √(6² + 8²) = √100 = 10, so r = 5
Circle: (x − 4)² + (y − 3)² = 25
R: (8 − 4)² + (6 − 3)² = 16 + 9 = 25, so R is on the circle
Gradient PR = (6 − 7)/(8 − 1) = −1/7
Gradient QR = (6 + 1)/(8 − 7) = 7
Product = −1, so PR is perpendicular to QR
```

### Property 2: the perpendicular from the centre to a chord bisects the chord

So the centre always lies on the **perpendicular bisector** of any chord. This lets you find a
centre from two points on the circle.

### Worked example 5

A circle passes through A(2, 1) and B(6, 5). Its centre lies on y = x − 3. Find its equation.

```
Midpoint AB = (4, 3); gradient AB = 4/4 = 1
Perpendicular bisector: y − 3 = −1(x − 4), so y = −x + 7
Centre: −x + 7 = x − 3, so x = 5, y = 2
r² = (2 − 5)² + (1 − 2)² = 9 + 1 = 10
Circle: (x − 5)² + (y − 2)² = 10
```

Check with B: (6 − 5)² + (5 − 2)² = 1 + 9 = 10.

The same property gives chord lengths. If a chord is a distance d from the centre, half the chord
is √(r² − d²).

### Property 3: the radius is perpendicular to the tangent

At a point on the circle, the tangent is at right angles to the radius. Find the gradient of the
radius, then take its negative reciprocal.

### Worked example 6

Find the tangent to (x − 3)² + (y + 5)² = 25 at (6, −1).

```
Check: (6 − 3)² + (−1 + 5)² = 9 + 16 = 25
Gradient of radius = (−1 − (−5))/(6 − 3) = 4/3
Gradient of tangent = −3/4
y + 1 = −(3/4)(x − 6)
4y + 4 = −3x + 18
3x + 4y − 14 = 0
```

### Lines meeting circles

To find where a line meets a circle, substitute the line into the circle and solve the quadratic.
Its discriminant tells you how many points there are: two (b² − 4ac > 0), one, so the line is a
tangent (= 0), or none (< 0). The [quadratics study guide](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/)
covers the discriminant itself.

### Worked example 7

Find where y = x + 4 meets (x − 2)² + (y − 1)² = 25, and the length of the chord.

```
(x − 2)² + (x + 3)² = 25
2x² + 2x + 13 = 25
x² + x − 6 = 0
(x + 3)(x − 2) = 0, so x = −3 or x = 2
Points (−3, 1) and (2, 6)
Chord = √(5² + 5²) = 5√2
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--03-circle-equation.webp" width="900" height="1046" alt="Circle centre (3,-5) radius 5 with a 3-4-5 right triangle from the centre to P(6,-1), showing the equation (x-3)^2+(y+5)^2=25 is Pythagoras." loading="lazy">
  <figcaption>Every point on the circle satisfies Pythagoras with the centre, which is why the equation has that form.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--05-angle-in-semicircle.webp" width="900" height="1046" alt="Circle with diameter PQ, P(1,7), Q(7,-1), point R(8,6): gradients -1/7 and 7 multiply to -1, so angle PRQ is 90 degrees." loading="lazy">
  <figcaption>A diameter subtends a right angle at any other point of the circle, which can be proved with gradients.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--06-chord-bisector-centre.webp" width="900" height="1070" alt="Chord AB with A(2,1), B(6,5); its perpendicular bisector y=-x+7 meets y=x-3 at the centre (5,2); d^2 + half-chord^2 = r^2. AQA worked example 5." loading="lazy">
  <figcaption>The centre always lies on the perpendicular bisector of any chord, so two chords fix the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--07-tangent-and-normal.webp" width="900" height="1026" alt="Circle centre (3,-5), point P(6,-1): radius gradient 4/3, tangent gradient -3/4 giving 3x+4y-14=0, normal 4x-3y-27=0 through the centre. No calculus needed." loading="lazy">
  <figcaption>The tangent is perpendicular to the radius, and the normal runs along it through the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--09-two-circles.webp" width="900" height="1058" alt="OCR only. Circles x^2+y^2=16 and (x-6)^2+(y-2)^2=9 with d=sqrt(40) between 1 and 7 so they cross at two points; number line of d shows the touching and separate cases." loading="lazy">
  <figcaption>Compare the distance between centres with the sum and difference of the radii.</figcaption>
</figure>


## C3: Parametric equations

A parametric curve gives x and y separately in terms of a third variable, the **parameter** (often
t or θ). Each value of the parameter gives one point.

**Parametric to Cartesian:** eliminate the parameter. Either make t the subject of one equation and
substitute, or use an identity such as sin²θ + cos²θ ≡ 1 or cos 2θ ≡ 2cos²θ − 1.

**Cartesian to parametric:** choose a substitution that fits. The circle (x − a)² + (y − b)² = r²
has parametric form x = a + r cos θ, y = b + r sin θ, for 0 ≤ θ < 2π.

### Worked example 8

Find the Cartesian equation of x = 1 + 2t, y = t² − 3.

```
t = (x − 1)/2
y = ((x − 1)/2)² − 3
y = (x² − 2x − 11)/4
```

### Worked example 9

A curve has x = 2cos θ, y = cos 2θ, 0 ≤ θ ≤ π. Find its Cartesian equation and state the possible
values of x.

```
cos 2θ = 2cos²θ − 1 and cos θ = x/2
y = 2(x/2)² − 1 = x²/2 − 1
```

Since −1 ≤ cos θ ≤ 1, the curve is only the part of y = x²/2 − 1 with **−2 ≤ x ≤ 2**. Always state
this restriction: the Cartesian equation alone describes a longer curve.

Parametric curves are differentiated using dy/dx = (dy/dt) ÷ (dx/dt); that method is content
reference G5, covered in the [differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--08-line-meets-circle.webp" width="900" height="1124" alt="Lines y=x+k against x^2+y^2=18: discriminant 144-4k^2 gives two points at k=0, a tangent at k=6 and no points at k=8." loading="lazy">
  <figcaption>Substituting a line into a circle gives a quadratic whose discriminant counts the intersections.</figcaption>
</figure>


## C4: Parametric equations in modelling

In a model, the parameter is usually time. The parametric form tells you **where** something is
**when**, which a Cartesian equation cannot.

### Worked example 10

A ball is thrown from a point 1.5 m above level ground. Its position t seconds later is modelled by
x = 12t, y = 1.5 + 14t − 4.9t², where x and y are in metres, x horizontal and y vertical.

(a) Find the greatest height. The y-equation is a quadratic in t; complete the square or use its
symmetry. The maximum is at t = 14/9.8 = 10/7 s.

```
y = 1.5 + 14(10/7) − 4.9(10/7)² = 1.5 + 20 − 10 = 11.5 m
```

(b) Find how far the ball travels horizontally before it lands. Solve y = 0 and take the positive
root.

```
4.9t² − 14t − 1.5 = 0
t = (14 + √(196 + 29.4))/9.8 = 2.96 s (3 s.f.)
x = 12 × 2.960... = 35.5 m (3 s.f.)
```

Use the unrounded t to find x. The negative root is rejected because the model starts at t = 0.

(c) Limitations: the model ignores air resistance and treats the ball as a particle. It only holds
from release until the ball lands, 0 ≤ t ≤ 2.96. The [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/)
explains the modelling cycle (OT3) that this question uses.

## Common errors

- Writing the gradient of ax + by + c = 0 as a/b or −b/a. It is −a/b.
- Taking the perpendicular gradient as 1/m or −m instead of −1/m.
- Reading the centre of (x + 4)² + (y − 1)² = 25 as (4, −1). It is (−4, 1).
- Giving r² as the radius: (x − 1)² + y² = 49 has radius 7, not 49.
- Forgetting to subtract both completed-square constants before reading off r².
- Using the gradient of the radius as the tangent gradient.
- Not giving integer a, b, c when the question asks for ax + by + c = 0 "where a, b and c are integers".
- Leaving out the x-range after eliminating a trigonometric parameter.
- Rounding t before using it to find x in a parametric model.

## Frequently asked questions

**How do you find the gradient of ax + by + c = 0?**
Rearrange to y = −(a/b)x − c/b, so the gradient is −a/b. Writing a/b or −b/a is a common error.

**How do you find the centre of a circle through two given points?**
The centre lies on the perpendicular bisector of the chord joining them. Find that line, then intersect it with any other line the centre is known to lie on.

**How do you interpret a straight-line model in AQA 7357?**
The gradient is a rate of change and the intercept is a starting value. Interpret both in context with units, and state where the model stops working.

**Why use parametric equations in a model?**
In a model the parameter is usually time, so the parametric form tells you where something is at each moment, which a Cartesian equation cannot.

**Which AQA 7357 papers can test coordinate geometry?**
Section C is listed under Paper 1, but Papers 2 and 3 can assess any Paper 1 content, so these skills can earn marks on all three papers.

## Next steps

Condense this into the [revision notes](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane-revision-notes/),
then test yourself on the [practice questions](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane-practice/).
For exam technique across all three papers, read the [7357 exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/).
You can also try one of the free [diagnostics](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018 (A-level exams June 2018
onwards), section 3.4 C: Coordinate geometry in the (x, y) plane, content references C1 to C4.
Published by AQA.
