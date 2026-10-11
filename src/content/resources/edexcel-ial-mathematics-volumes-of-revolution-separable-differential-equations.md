---
title: "Pearson Edexcel International Advanced Level Mathematics: Volumes of revolution, separable differential equations and areas from parametric equations (YMA01)"
seoTitle: "Edexcel IAL Maths Volumes, Separable DEs, Parametric Area"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Volumes of revolution, separable differential equations and areas from parametric equations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 153
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-integration-edexcel-alevel-maths"
description: "Study guide to volumes of revolution, separable differential equations and area from parametric equations for Pearson Edexcel IAL Mathematics P4."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (Issue 3, April 2019) and covers Pure Mathematics 4 (P4) integration sections 6.1, 6.4 and 6.5. P4 is a compulsory unit for IAL Mathematics and Pure Mathematics; the specification gives its IAS weighting as N/A, so it is not part of IAS. Substitution, integration by parts and partial fractions (6.2 and 6.3) are taught elsewhere, so every integral here is a standard one.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-practice/). See the [Edexcel A-level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/). Parametric differentiation is in [parametric and implicit differentiation](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit/), and exponential and reciprocal integrals are in [integration of exponential and reciprocal functions](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and/).

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 6.1 | Find a volume of revolution about the x-axis using π∫y² dx, including when the curve is given by parametric equations |
| 6.4 | Solve first-order differential equations with separable variables, giving general and particular solutions |
| 6.5 | Use integration to find the area under a curve given by parametric equations |

The specification says π∫y² dx is required, but not π∫x² dy. You are not expected to sketch a curve from its parametric equations.

## 6.1 Volume of revolution

Spin the region bounded by a curve, the x-axis and the vertical lines x = a and x = b through 360° about the x-axis. Each thin slice of width δx is almost a disc of radius y, so its volume is about πy² δx. Adding the slices gives

V = π ∫ y² dx, with limits x = a to x = b.

Square the whole of y before you integrate. For y = 3x the integrand is 9x², not 3x².

### Worked example 1

Find the exact volume of the solid made by turning the region under y = e^(2x), for 0 ≤ x ≤ ½, a full turn about the x-axis.

```
y² = e^(4x)
V = π ∫ (0 to ½) e^(4x) dx
  = π [ ¼ e^(4x) ] (0 to ½)
  = ¼ π (e² − 1)
```

**V = π(e² − 1)/4**

### Worked example 2

The region under y = 1/√(2x + 1) between x = 0 and x = 4 is spun a full turn around the x-axis. What is the exact volume of the solid?

```
y² = 1/(2x + 1)
V = π ∫ (0 to 4) 1/(2x + 1) dx
  = π [ ½ ln(2x + 1) ] (0 to 4)
  = π (½ ln 9 − ½ ln 1)
  = π ln 3
```

Here ½ ln 9 = ln 3, because ½ ln 9 = ln 9^(½).

**V = π ln 3**

### A region bounded by a curve and a line

If the region lies between a curve and a horizontal line, rotate the outer boundary and subtract the inner one. For a line y = k that is a cylinder of radius k, so subtract πk² times its length.

### Worked example 3

The curve y = 6/x meets the line y = 3 at the point (2, 3). The finite region R is enclosed by the curve, the line y = 3 and the line x = 1. R is spun a full turn around the x-axis. Find the volume of the solid.

```
Curve above the line for 1 ≤ x ≤ 2.
Volume from the curve:  π ∫ (1 to 2) 36/x² dx = π [−36/x] (1 to 2)
                        = π (−18 + 36) = 18π
Cylinder: radius 3, length 1:  π × 3² × 1 = 9π
V = 18π − 9π
```

**V = 9π**

## 6.1 Volume from parametric equations

If x = x(t) and y = y(t), then dx = (dx/dt) dt, so

V = π ∫ y² (dx/dt) dt, with limits in t.

Three steps: differentiate x, write y² in terms of t, and change the limits from x-values to t-values.

### Worked example 4

A curve has parametric equations x = 2t, y = sin t. Find the exact volume of the solid formed by spinning the region under the curve, for 0 ≤ t ≤ π/2, a full turn around the x-axis.

```
dx/dt = 2
V = π ∫ (0 to π/2) sin²t × 2 dt
  = 2π ∫ (0 to π/2) ½ (1 − cos 2t) dt        [cos 2t = 1 − 2sin²t]
  = π [ t − ½ sin 2t ] (0 to π/2)
  = π (π/2 − 0)
```

**V = π²/2**

### Worked example 5

A curve has equations x = t², y = t + 2, where t > 0. The region under the curve between x = 1 and x = 4 is spun a full turn around the x-axis. Find the volume of the solid.

```
x = 1 gives t = 1; x = 4 gives t = 2.
dx/dt = 2t
V = π ∫ (1 to 2) (t + 2)² × 2t dt
  = 2π ∫ (1 to 2) (t³ + 4t² + 4t) dt
  = 2π [ t⁴/4 + 4t³/3 + 2t² ] (1 to 2)
  = 2π (68/3 − 43/12)
  = 2π × 229/12
```

**V = 229π/6**

If dx/dt is negative on part of the range, x runs backwards as t increases. Keep the limits in the order that matches x increasing. Reversing them gives a negative volume.

## 6.4 Separable differential equations

A first-order equation is separable if dy/dx = f(x) g(y). Move all the y terms to one side and all the x terms to the other, then integrate both sides:

∫ 1/g(y) dy = ∫ f(x) dx

Put one constant c on one side only. The result with c is the general solution. Substituting a given pair of values to find c gives the particular solution.

### Worked example 6

Solve dy/dx = 3x²y, given that y = 2 when x = 0. Assume y > 0.

```
∫ 1/y dy = ∫ 3x² dx
ln y = x³ + c
y = e^(x³ + c) = A e^(x³)        where A = e^c
x = 0, y = 2:  2 = A
```

**y = 2e^(x³)**

For general solutions with ln|y| you can write y = A e^(x³), where A is any non-zero constant.

### Worked example 7

Solve dy/dx = e^(x − y), given that y = ln 2 when x = 0. Give y in terms of x.

```
dy/dx = e^x × e^(−y)
e^y dy = e^x dx
e^y = e^x + c
x = 0, y = ln 2:  2 = 1 + c, so c = 1
e^y = e^x + 1
```

**y = ln(e^x + 1)**

### Worked example 8

For x > 0, solve x dy/dx = 2y + 1, given that y = 2 when x = 1.

```
dy/dx = (2y + 1)/x
∫ 1/(2y + 1) dy = ∫ 1/x dx
½ ln(2y + 1) = ln x + c
x = 1, y = 2:  ½ ln 5 = c
ln(2y + 1) = 2 ln x + ln 5 = ln(5x²)
2y + 1 = 5x²
```

**y = (5x² − 1)/2**

Check: at x = 1 this gives y = 2, and x dy/dx = 5x² = 2y + 1.

### Worked example 9 (a model)

A crystal grows so that its radius r mm at time t hours satisfies dr/dt = k/r², where k > 0. At t = 0, r = 1, and at t = 7, r = 2. Find k, and the time when r = 3.

```
∫ r² dr = ∫ k dt
r³/3 = kt + c
t = 0, r = 1:  1/3 = c
t = 7, r = 2:  8/3 = 7k + 1/3, so k = 1/3
r = 3:  9 = t/3 + 1/3, so t = 26
```

**k = 1/3 and t = 26 hours**

## 6.5 Area from parametric equations

The area under a curve is ∫ y dx. With a parameter,

Area = ∫ y (dx/dt) dt, with limits in t.

Find the limits by solving for t at each given x-value, or at each point where y = 0 if the curve meets the axis.

### Worked example 10

A curve has parametric equations x = t², y = t(6 − t) for t ≥ 0. Work out the area enclosed by the curve, the x-axis, and the ordinates at t = 1 and t = 3 (that is, x = 1 and x = 9).

```
dx/dt = 2t
Area = ∫ (1 to 3) t(6 − t) × 2t dt
     = 2 ∫ (1 to 3) (6t² − t³) dt
     = 2 [ 2t³ − t⁴/4 ] (1 to 3)
     = 2 (33.75 − 1.75)
```

**Area = 64**

### Worked example 11

The curve with equations x = t² + 2t, y = 3t (t > 0) bounds a region with the x-axis, between the lines x = 3 and x = 8. Calculate its area.

```
t² + 2t = 3 gives t = 1;  t² + 2t = 8 gives t = 2.
dx/dt = 2t + 2
Area = ∫ (1 to 2) 3t (2t + 2) dt = 3 ∫ (1 to 2) (2t² + 2t) dt
     = 3 [ 2t³/3 + t² ] (1 to 2)
     = 3 (28/3 − 5/3)
```

**Area = 23**

### Worked example 12 (x decreasing)

A curve has equations x = 5 cos t, y = 2 sin t, 0 ≤ t ≤ π. Find the area between the curve and the x-axis.

x runs from 5 (at t = 0) to −5 (at t = π). Integrate from the left-hand end, which is t = π.

```
dx/dt = −5 sin t
Area = ∫ (t = π to 0) 2 sin t × (−5 sin t) dt
     = 10 ∫ (0 to π) sin²t dt
     = 5 [ t − ½ sin 2t ] (0 to π)
```

**Area = 5π**

This is half the area of an ellipse with semi-axes 5 and 2, which is ½ × π × 5 × 2 = 5π.

## Common errors

- Forgetting to square y, or squaring only part of it, such as writing (t + 2)² as t² + 4.
- Using π∫x² dy. The specification asks for π∫y² dx.
- Leaving limits as x-values after changing to t.
- Forgetting dx/dt, so integrating y dt in place of y (dx/dt) dt.
- Dividing by y without noting that y = 0 may be a solution.
- Putting a constant on both sides of a separated equation.
- Applying the initial condition before the constant has been introduced.
- Losing a negative sign when dx/dt is negative.

## Next steps

Try the [practice questions](/resources/edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-practice/), then condense with the [revision notes](/resources/edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-revision-notes/). For an overview of all papers, see [IAL Mathematics exam preparation](/resources/edexcel-ial-mathematics-exam-preparation/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. Unit P4, section 6: 6.1, 6.4 and 6.5.
