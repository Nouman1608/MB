---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.14 Implicit differentiation, related rates of change and optimisation (AHL only)"
resourceType: "study-guides"
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
description: "IB DP Maths AA HL section 5.14 study guide: implicit differentiation, related rates of change and optimisation problems, with fully worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.14, implicit differentiation, related rates of change and optimisation problems**. It is AHL content, examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

The [AA HL further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/) gives one example of each skill. This page builds the method for each in stages, with a second derivative found implicitly, rates involving angles and shadows, and an optimisation where the end points must be checked. The SL optimisation method it extends is in the [section 5.8 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-8/).

## What section 5.14 asks of you

- Differentiate equations in which y is not given explicitly as a function of x.
- Solve related rates problems: find how fast one quantity changes from the rate of change of another.
- Solve optimisation problems, including those where the optimum is at the edge of the allowed domain.

## Implicit differentiation

Differentiate every term of the equation with respect to x. A term in x alone differentiates as usual. A term in y is a function of a function, so the chain rule gives a factor dy/dx:

```
d/dx (y²)   = 2y dy/dx
d/dx (sin y) = cos y dy/dx
d/dx (eʸ)   = eʸ dy/dx
d/dx (xy)   = y + x dy/dx         (product rule)
d/dx (x²y³) = 2xy³ + 3x²y² dy/dx  (product rule)
```

Then collect the dy/dx terms on one side and factorise.

### Worked example 1 (calculator-free): tangent to a curve

Find the equation of the tangent to x³ + y³ = 6xy at (3, 3).

```
Check: 27 + 27 = 54 = 6(3)(3) ✓
3x² + 3y² dy/dx = 6y + 6x dy/dx
dy/dx (3y² − 6x) = 6y − 3x²
dy/dx = (2y − x²)/(y² − 2x)
At (3, 3): (6 − 9)/(9 − 6) = −1
Tangent: y − 3 = −(x − 3), so y = 6 − x
```

Substituting the point **before** rearranging is often quicker: 27 + 27 dy/dx = 18 + 18 dy/dx gives 9 dy/dx = −9 directly.

### Worked example 2: exponentials and products

Find the gradient of eʸ + xy = e at (0, 1).

```
eʸ dy/dx + y + x dy/dx = 0
dy/dx = −y/(eʸ + x) = −1/(e + 0) = −1/e
```

### Worked example 3: a second derivative implicitly

For x² + y² = 25, find d²y/dx² in terms of y.

```
2x + 2y dy/dx = 0  →  dy/dx = −x/y
d²y/dx² = −[y − x dy/dx]/y²          (quotient rule)
        = −[y + x²/y]/y² = −(y² + x²)/y³ = −25/y³
```

On the upper semicircle y > 0, so d²y/dx² < 0: concave-down, as expected. Using the original equation to simplify (x² + y² = 25) is a standard final step.

## Related rates of change

Two quantities linked by an equation both change with time. Differentiating the equation with respect to t links their rates. The method:

1. Draw a diagram; name the variables that change, and treat constants as numbers.
2. Write down the given rate and the rate required, with units.
3. Find an equation linking the variables (geometry, similar triangles, trigonometry).
4. Differentiate with respect to t, using the chain rule: d/dt (r²) = 2r dr/dt.
5. Substitute the values at the instant asked about, **only after differentiating**.

### Worked example 4 (calculator-free): a shadow

A lamp is at the top of a 6 m post. A person 1.8 m tall walks away from the post at 1.2 m s⁻¹. How fast is the length of the shadow increasing?

```
x = distance from post to person, s = length of shadow
Similar triangles: s/1.8 = (x + s)/6
6s = 1.8x + 1.8s  →  4.2s = 1.8x  →  s = (3/7)x
ds/dt = (3/7) dx/dt = (3/7)(1.2) = 0.514 m s⁻¹ (3 s.f.)
```

The rate does not depend on x, so it is the same at every instant. The tip of the shadow moves at dx/dt + ds/dt = 1.2 + 0.514 = 1.71 m s⁻¹.

### Worked example 5 (calculator-free): an angle

A balloon rises vertically at 3 m s⁻¹ from a point 100 m from an observer. Find the rate at which the angle of elevation θ increases when the balloon is 100 m high.

```
tan θ = h/100
sec²θ dθ/dt = (1/100) dh/dt
When h = 100, θ = π/4 and sec²θ = 2
2 dθ/dt = 3/100  →  dθ/dt = 0.015 rad s⁻¹
```

Angles in calculus are in radians, so the rate is in radians per second.

## Optimisation, including end points

At HL, optimisation questions often restrict the domain. The greatest or least value can then occur at an end point, where the derivative need not be zero. Compare the values at stationary points **and** at the end points.

### Worked example 6 (calculator allowed): rowing and walking

A woman is in a boat 2 km from the nearest point P on a straight shore. Her destination Q is on the shore, 6 km from P. She rows at 3 km h⁻¹ to a point x km from P (0 ≤ x ≤ 6), then walks at 5 km h⁻¹ to Q.

```
T(x) = √(x² + 4)/3 + (6 − x)/5
T′(x) = x/(3√(x² + 4)) − 1/5 = 0
5x = 3√(x² + 4)  →  25x² = 9x² + 36  →  x² = 9/4  →  x = 1.5

T(1.5) = 2.5/3 + 4.5/5 = 1.73 h (26/15 h)
T(0)   = 2/3 + 6/5  = 1.87 h
T(6)   = √40/3      = 2.11 h
```

The least time is 26/15 h, about 1 hour 44 minutes, landing 1.5 km from P. Here the stationary point gives the minimum, but writing the end-point values is what proves it is the least value on the whole domain.

### Worked example 7: optimising on an implicit curve

A rectangle with sides parallel to the axes is inscribed in the ellipse x²/9 + y²/4 = 1. Find its maximum area.

```
A = (2x)(2y) = 4xy for a corner (x, y) in the first quadrant
dA/dx = 4y + 4x dy/dx, and from the ellipse dy/dx = −4x/(9y)
dA/dx = 4y − 16x²/(9y) = 0  →  9y² = 4x²
Substitute in the ellipse: x²/9 + x²/9 = 1  →  x = 3/√2, y = √2
A = 4(3/√2)(√2) = 12
```

At the end points x = 0 and x = 3 the area is 0, so 12 is the maximum.

## Common mistakes

- Forgetting the factor dy/dx when differentiating a term in y.
- Differentiating xy as y dy/dx or as 1 · dy/dx instead of using the product rule.
- Substituting the instantaneous values before differentiating in a related rates problem, which turns variables into constants.
- Mixing up which rate is given and which is wanted; writing both with units first prevents this.
- Using degrees when differentiating trigonometric functions.
- Ignoring end points when the domain is restricted.

## Exam technique: the command words

- **Find dy/dx in terms of x and y**: an implicit answer is acceptable; do not try to make y the subject.
- **Show that** the tangent has a given equation: show the gradient calculation and the line.
- **Find the rate**: give units and a sign; a negative rate means the quantity is decreasing.
- **Justify** that a value is a minimum: sign of the derivative either side, the second derivative, or a comparison with the end points.

## Where next

Condense this section with the [section 5.14 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-14-revision-notes/) and practise with the [section 5.14 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-14-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.14.
