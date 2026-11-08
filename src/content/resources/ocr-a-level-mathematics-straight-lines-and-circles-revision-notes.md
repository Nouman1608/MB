---
title: "OCR A Level Mathematics A: Straight lines and circles (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Straight Lines Circles Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Straight lines and circles"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 108
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "coordinate-geometry-in-the-xy-plane-ocr-alevel-maths"
description: "Condensed revision notes on lines, gradients, line models, circle equations and tangents for OCR A Level Mathematics A (H240), with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense OCR A Level Mathematics A (H240) content references 1.03a to 1.03f (straight lines and circles) from the OCR specification, Version 3.1 (August 2026). All of it is Stage 1, common to AS and A Level. The [study guide](/resources/ocr-a-level-mathematics-straight-lines-and-circles/) has the full explanations and longer examples. Test yourself with the [practice set](/resources/ocr-a-level-mathematics-straight-lines-and-circles-practice/), tick topics off on the [checklist](/checklists/ocr/a-level/mathematics/), see the [course hub](/boards/ocr/a-level/mathematics/) and try the [free diagnostics](/diagnostics/). Parametric equations (1.03g, 1.03h) are not covered here.

## Key results

| Ref | Result |
|---|---|
| 1.03a | Gradient m = (y2 - y1)/(x2 - x1) |
| 1.03a | y = mx + c; y - y1 = m(x - x1); ax + by + c = 0 |
| 1.03a | Midpoint ((x1 + x2)/2, (y1 + y2)/2) |
| 1.03a | Distance √[(x2 - x1)² + (y2 - y1)²] |
| 1.03b | Parallel: m1 = m2. Perpendicular: m1 × m2 = -1 |
| 1.03d | Circle: (x - a)² + (y - b)² = r², centre (a, b), radius r |
| 1.03e | Expanded circle: complete the square in x and in y |
| 1.03f | Angle in a semicircle = 90°; centre-to-chord perpendicular bisects the chord; radius ⊥ tangent |

## 1.03a Straight lines

**Method: line through two points**

1. Find m = change in y over change in x.
2. Use y - y1 = m(x - x1) with either point.
3. Rearrange to the form asked for.

**Worked reminder.** Line through (-1, 4) with gradient 2/3:

```
y - 4 = (2/3)(x + 1)
3y - 12 = 2x + 2
2x - 3y + 14 = 0
```

**Reading a gradient from ax + by + c = 0.** Rearrange. For 4x + 6y - 9 = 0:

```
y = -(2/3)x + 3/2
```

So the gradient is -2/3 and the y-intercept is 3/2. In general the gradient is -a/b.

**Intersection of two lines.** Solve simultaneously. For 2x + y = 7 and x - 3y = -7: from the first, y = 7 - 2x. Then x - 21 + 6x = -7, so x = 2 and y = 3. Check in both equations.

**Midpoint and length.** For (-3, 6) and (5, -2): midpoint (1, 2), distance √(64 + 64) = 8√2.

**Drawing a line.** Put x = 0 and y = 0 to find the intercepts, plot both and join them.

## 1.03b Parallel and perpendicular

**Method: perpendicular through a point**

1. Find the gradient m of the given line.
2. Perpendicular gradient = -1/m.
3. Use y - y1 = m(x - x1) with the given point.

For 5x - 2y = 7 the gradient is 5/2, so the perpendicular gradient is -2/5.

**Perpendicular bisector.** Midpoint first, then negative reciprocal gradient, then equation.

**Right angle test.** Two gradients with product -1 mean a right angle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--01-line-segment-toolkit.webp" width="900" height="950" alt="A(-2,5) and B(4,1): gradient, midpoint M, line 2x+3y-11=0 and perpendicular bisector 3x-2y+3=0 whose gradients multiply to -1." loading="lazy">
  <figcaption>The gradient triangle, the midpoint and the perpendicular bisector all come from the same two points.</figcaption>
</figure>


## 1.03c Line models

| Part of y = mx + c | Meaning in a model |
|---|---|
| m | rate of change: units of y per unit of x |
| c | starting value when x = 0 |
| Prediction | substitute x, or solve for x |

Say what the gradient means in the context, with units. Comment on validity: a straight line may stop being sensible outside the range of the data, or when it gives negative lengths, times or counts. An average rate of change between two readings is the gradient of the line joining them.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--02-straight-line-model.webp" width="900" height="880" alt="Candle height h = 24 - 1.8t: intercept 24 cm, gradient -1.8 cm per hour, burnt out at t = 40/3 h; the model is invalid beyond that. Worked example from the AQA lesson." loading="lazy">
  <figcaption>The gradient is a rate of change, the intercept a starting value, and the model has a limited domain. AQA and OCR.</figcaption>
</figure>


## 1.03d and 1.03e Circles

**Equation from centre and radius.** Centre (-1, 3), radius 4: (x + 1)² + (y - 3)² = 16.

**Equation from a diameter.** Centre is the midpoint of the ends; radius is the distance from the centre to an end.

**Position of a point P.** Work out (x - a)² + (y - b)² for the point, then set it beside r²: a smaller value puts the point inside, the same value puts it on the circle, a larger value puts it outside.

**Method: expanded form to centre and radius**

1. Divide through so x² and y² each have coefficient 1.
2. Group x terms and y terms; move the constant right.
3. Complete the square in each: x² + px becomes (x + p/2)² - p²/4.
4. Read off the centre; r² is the right-hand side.

**Worked reminder.** x² + y² + 6x - 4y - 12 = 0:

```
(x + 3)² - 9 + (y - 2)² - 4 = 12
(x + 3)² + (y - 2)² = 25
```

Centre (-3, 2), radius 5.

For x² + y² - 6x + 10y + c = 0 the right-hand side is 34 - c, so it is a circle only when c < 34.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--04-is-it-a-circle.webp" width="900" height="1070" alt="Equation x^2+y^2-4x+6y+k=0 completes to (x-2)^2+(y+3)^2=13-k: circles for k=0 and 9, a point at k=13 and nothing for k&gt;13." loading="lazy">
  <figcaption>After completing the square the right-hand side is r squared, so it must be positive for a circle to exist.</figcaption>
</figure>


## 1.03f Circle properties

| Property | Typical use |
|---|---|
| Angle in a semicircle is 90° | show a point is on a circle with a given diameter, using gradients with product -1 |
| Centre-to-chord perpendicular bisects the chord | find the midpoint or length of a chord without solving for both ends |
| Radius ⊥ tangent | find the tangent or normal at a point |

**Method: tangent and normal at P on a circle**

1. Check P is on the circle by substitution.
2. Find the gradient of the radius from the centre to P.
3. Tangent gradient = negative reciprocal. The normal is the radius line itself.
4. Write each with y - y1 = m(x - x1) using P.

**Worked reminder.** Circle (x + 3)² + (y - 2)² = 25, point (-6, 6). Check: 9 + 16 = 25.

```
radius gradient = (6 - 2)/(-6 + 3) = -4/3
tangent gradient = 3/4
tangent: 4y - 24 = 3x + 18  →  3x - 4y + 42 = 0
normal: passes through the centre (-3, 2):  4x + 3y + 6 = 0
```

**Line and circle: do they meet?** Substitute the line into the circle, rearrange to a quadratic, and use the discriminant: b² - 4ac > 0 means two points, = 0 means tangent, < 0 means no intersection.

**Worked reminder.** Does y = 3x - 4 meet x² + y² = 10?

```
x² + (3x - 4)² = 10
10x² - 24x + 6 = 0
discriminant = 576 - 240 = 336 > 0
```

The discriminant is positive, so the line cuts the circle at two points. Quote the discriminant and say what its sign tells you.

**Two circles.** With d the distance between centres: two intersections if |r1 - r2| < d < r1 + r2; touching if d = r1 + r2 or d = |r1 - r2|; separate or one inside the other otherwise.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--03-circle-equation.webp" width="900" height="1046" alt="Circle centre (3,-5) radius 5 with a 3-4-5 right triangle from the centre to P(6,-1), showing the equation (x-3)^2+(y+5)^2=25 is Pythagoras." loading="lazy">
  <figcaption>Every point on the circle satisfies Pythagoras with the centre, which is why the equation has that form.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--05-angle-in-semicircle.webp" width="900" height="1046" alt="Circle with diameter PQ, P(1,7), Q(7,-1), point R(8,6): gradients -1/7 and 7 multiply to -1, so angle PRQ is 90 degrees." loading="lazy">
  <figcaption>A diameter subtends a right angle at any other point of the circle, which can be proved with gradients.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--07-tangent-and-normal.webp" width="900" height="1026" alt="Circle centre (3,-5), point P(6,-1): radius gradient 4/3, tangent gradient -3/4 giving 3x+4y-14=0, normal 4x-3y-27=0 through the centre. No calculus needed." loading="lazy">
  <figcaption>The tangent is perpendicular to the radius, and the normal runs along it through the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--08-line-meets-circle.webp" width="900" height="1124" alt="Lines y=x+k against x^2+y^2=18: discriminant 144-4k^2 gives two points at k=0, a tangent at k=6 and no points at k=8." loading="lazy">
  <figcaption>Substituting a line into a circle gives a quadratic whose discriminant counts the intersections.</figcaption>
</figure>


## Must-know distinctions

- Parallel means equal gradients; perpendicular means gradients multiply to -1.
- Tangent is perpendicular to the radius; the normal lies along the radius.
- (x + 3)² gives a = -3; the sign in the bracket is the opposite of the centre coordinate.
- The right-hand side of the circle equation is r², not r.
- A chord joins two points on the circle; the tangent touches at one.

## Quick self-test

1. Find the equation of the line through (2, -3) with gradient 4, in the form y = mx + c.
2. Find the midpoint and the distance between (1, -2) and (7, 6).
3. Find the gradient of the line 2x + 5y = 1 and the gradient of a line perpendicular to it.
4. Write down the equation of the circle with centre (-2, 5) and radius 3.
5. Find the centre and radius of x² + y² - 6x + 10y + 9 = 0.
6. Is (4, 4) inside, on or outside the circle (x - 1)² + (y - 1)² = 16?
7. The ends of a diameter are (1, -2) and (7, 6). Find the equation of the circle.
8. A circle has centre (0, 0) and radius 5. Find the tangent at (3, 4).
9. For which values of c does y = x + c meet x² + y² = 9 at two points?
10. A plant is 12 cm tall after 2 weeks and 21 cm after 5 weeks. Assuming linear growth, find the rate in cm per week and the height at 8 weeks.

### Answers

1. y + 3 = 4(x - 2), so **y = 4x - 11**.
2. Midpoint **(4, 2)**; distance √(36 + 64) = **10**.
3. y = -(2/5)x + 1/5, so gradient **-2/5**; perpendicular gradient **5/2**.
4. **(x + 2)² + (y - 5)² = 9**.
5. (x - 3)² + (y + 5)² = 25; centre **(3, -5)**, radius **5**.
6. 9 + 9 = 18 > 16, so **outside**.
7. Centre (4, 2), r = 5 (half of 10): **(x - 4)² + (y - 2)² = 25**.
8. Radius gradient 4/3, tangent gradient -3/4: y - 4 = -(3/4)(x - 3), so **3x + 4y - 25 = 0**.
9. x² + (x + c)² = 9 gives 2x² + 2cx + c² - 9 = 0; discriminant 72 - 4c² > 0, so **-3√2 < c < 3√2**.
10. Rate (21 - 12)/3 = **3 cm per week**; height at 8 weeks 21 + 9 = **30 cm**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--06-chord-bisector-centre.webp" width="900" height="1070" alt="Chord AB with A(2,1), B(6,5); its perpendicular bisector y=-x+7 meets y=x-3 at the centre (5,2); d^2 + half-chord^2 = r^2. AQA worked example 5." loading="lazy">
  <figcaption>The centre always lies on the perpendicular bisector of any chord, so two chords fix the centre.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-mathematics-pure-mathematics-1-coordinate-geometry--09-two-circles.webp" width="900" height="1058" alt="OCR only. Circles x^2+y^2=16 and (x-6)^2+(y-2)^2=9 with d=sqrt(40) between 1 and 7 so they cross at two points; number line of d shows the touching and separate cases." loading="lazy">
  <figcaption>Compare the distance between centres with the sum and difference of the radii.</figcaption>
</figure>


## Where marks are usually lost

- Writing the perpendicular gradient as the reciprocal without changing the sign, or the other way round.
- Substituting into the wrong form: using the midpoint's coordinates as x1 and y1 for a line that does not pass through it.
- Sign slips when reading the centre from a bracket such as (y + 5)².
- Forgetting to divide by the coefficient of x² and y² before completing the square.
- Giving r² as the radius, or leaving the radius out of the answer.
- Taking the centre as the point of contact when finding a tangent.
- Stating a gradient with no meaning or units in a modelling question.
- Quoting a decimal when the question expects an exact value such as 8√2.
- Not showing the substitution or the discriminant in a "show that" or "find the values" question, so the reasoning is not visible.

## Frequently asked questions

**How do you find the centre and radius of x² + y² + 6x − 4y − 12 = 0?**
Complete the square in x and in y: (x + 3)² + (y − 2)² = 25, so the centre is (−3, 2) and the radius is 5. If x² and y² have a coefficient, divide by it first.

**How do you decide whether a line meets a circle?**
Substitute the line into the circle to get a quadratic and use the discriminant: b² − 4ac > 0 means two intersection points, = 0 means the line is a tangent, and < 0 means they do not meet.

**Which circle properties are in OCR A Level Mathematics A (H240)?**
Reference 1.03f uses the angle in a semicircle being 90°, the perpendicular from the centre bisecting a chord, and the radius being perpendicular to the tangent.

**What do m and c mean in a straight-line model?**
The gradient m is the rate of change, in units of y per unit of x, and the intercept c is the starting value when x = 0.

## Official syllabus

*OCR Level 3 Advanced GCE in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: section 1.03, Coordinate Geometry in the x-y plane, references 1.03a to 1.03f.
