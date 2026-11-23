---
title: "Pearson Edexcel International A Level Mathematics (YMA01): P4 Coordinate geometry in the (x, y) plane"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-coordinate-geometry-edexcel-alevel-maths"
description: "Edexcel IAL Maths P4 parametric equations: converting to and from cartesian form, domains and ranges, trig identities and where parametric curves meet lines."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3 of Unit P4: Pure Mathematics 4 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. The specification statement is short: "Parametric equations of curves and conversion between cartesian and parametric forms." This one statement is the base for parametric differentiation in section 5 and for parametric areas and volumes in section 6. Weak conversion skills cost marks in all three.

## What the specification asks for

| Skill | Typical wording in a question |
|---|---|
| Use a parameter to find points | "Find the coordinates of the point where t = 2" |
| Parametric to cartesian | "Find a cartesian equation of the curve" or "Show that C has equation y = …" |
| Domain and range | "State the domain of f" or "Find the range of f", where y = f(x) |
| Cartesian to parametric | "Show that x = …, y = … is a parametric form of the curve" |
| Intersections | "Find the points where C meets the line l" |

The specification guidance for section 6 adds that you "will not be expected to sketch a curve from its parametric equations". You will be expected to read information from equations and from a sketch you are given.

## What a parameter does

In a parametric curve, x and y are each given in terms of a third variable, the parameter, usually t or θ. Each value of t gives one point (x, y). As t changes, the point traces out the curve.

The range of t matters. If 0 ≤ t ≤ π, only the part of the curve made by those t values exists. Converting to cartesian form can hide this, so you must carry the restriction across as a domain for x.

## Converting parametric to cartesian

There are three standard methods. Choose by looking at how t appears.

**1. Make t the subject of one equation.** Use this when one equation is linear or easy to invert in t. If x = 3t − 1 and y = 2t², then t = (x + 1)/3 and y = 2(x + 1)²/9.

**2. Use a trigonometric identity.** Use this when both equations contain trig functions of the same angle. Rearrange so each equation gives one trig function on its own, then substitute into an identity.

| If the equations contain | Use |
|---|---|
| sin t and cos t | sin²t + cos²t = 1 |
| sec t and tan t | sec²t = 1 + tan²t |
| cosec t and cot t | cosec²t = 1 + cot²t |
| sin t and cos 2t | cos 2t = 1 − 2sin²t |
| cos t and cos 2t | cos 2t = 2cos²t − 1 |
| sin t, cos t and sin 2t | sin 2t = 2 sin t cos t |

**3. Combine the equations directly.** Sometimes adding, dividing or multiplying the two equations removes t straight away. If x = 2t/(1 + t) and y = 1/(1 + t), then x + 2y = (2t + 2)/(1 + t) = 2. The curve is part of the straight line x + 2y = 2.

## Domain and range

Find the domain of the cartesian function from the possible x values, and the range from the possible y values. Work out what each one can be as t moves over its permitted values.

Example: x = t², y = t⁴ + 1 for all real t. Eliminating t gives y = x² + 1. But x = t² cannot be negative, so the curve is only the right-hand half, x ≥ 0. Without the domain, the answer describes a different curve.

## Worked example 1: a circle in parametric form

A curve has parametric equations x = 3 + 2 cos t, y = −1 + 2 sin t, for 0 ≤ t ≤ π. Find a cartesian equation and describe the curve.

```
cos t = (x - 3)/2,   sin t = (y + 1)/2
cos^2 t + sin^2 t = 1
(x - 3)^2/4 + (y + 1)^2/4 = 1
(x - 3)^2 + (y + 1)^2 = 4
```

This is a circle, centre (3, −1), radius 2. For 0 ≤ t ≤ π, sin t ≥ 0, so y ≥ −1. At t = 0 the point is (5, −1) and at t = π it is (1, −1). The curve is the upper semicircle. The general pattern x = a + r cos t, y = b + r sin t always gives the circle with centre (a, b) and radius r.

## Worked example 2: exponentials, logarithms and the domain

A curve has parametric equations x = ln(t + 2), y = 1/(t + 3), for t > −1.

**(a)** Show that the cartesian equation is y = 1/(eˣ + 1). **(b)** State the domain and find the range.

```
x = ln(t + 2)  ->  e^x = t + 2  ->  t = e^x - 2
y = 1/(t + 3) = 1/(e^x - 2 + 3) = 1/(e^x + 1)
```

For the domain, t > −1 means t + 2 > 1, so x = ln(t + 2) > ln 1 = 0. The domain is x > 0.

For the range, x > 0 gives eˣ > 1, so eˣ + 1 > 2 and 0 < y < ½.

The mark for the domain comes from working with the restriction on t. Writing "x is any real number" because eˣ is defined everywhere ignores the parameter.

## Converting cartesian to parametric

The reverse direction is usually a "show that" or a substitution:

- **Verify a parametric form:** substitute the given x and y into the cartesian equation and simplify until both sides agree. For y² = 8x with x = 2t², y = 4t: y² = 16t² and 8x = 16t², so the parametric form fits.
- **Choose a parametric form:** if you are told to let x = t + 2 in y = x² − 4x, then y = (t + 2)² − 4(t + 2) = t² − 4.
- **Find the parameter of a given point:** solve one equation for t, then check that value in the other. If they disagree, the point is not on the curve.

## Worked example 3: where a parametric curve meets a line

The curve C has parametric equations x = 2t², y = 4t. Find the coordinates of the points where C meets the line y = x − 6.

Substitute the parametric expressions into the line equation, then solve for t:

```
4t = 2t^2 - 6
2t^2 - 4t - 6 = 0
t^2 - 2t - 3 = 0
(t - 3)(t + 1) = 0,  so  t = 3 or t = -1
t = 3:   (18, 12)
t = -1:  (2, -4)
```

Both points satisfy y = x − 6, which is a quick check. Substituting into the line keeps the working in one variable. Converting C to y² = 8x first also works, but it takes longer and gives a quadratic in y instead.

## Common mistakes

- Leaving t in the final cartesian equation, or giving an equation in x, y and t.
- Ignoring the parameter's range and so giving no domain, or the wrong one.
- Choosing the wrong form of cos 2t. If the other equation contains sin t, use 1 − 2sin²t.
- Squaring both equations as a first step without checking the signs. If x = √t, then x ≥ 0 even though x² = t allows negative x.
- Finding t from one equation and not checking it in the other, when testing whether a point lies on the curve.
- Writing the range in terms of t instead of y.

## Exam technique

- **"Find a cartesian equation of C"** accepts any correct form. If the question says "in the form y = f(x)", rearrange fully.
- **"Show that"** questions give the target. Write each line of the elimination; a jump straight to the answer earns little.
- **"State the domain of f"** wants an inequality in x. Work it out from the range of t, and say how.
- **"Hence"** after a conversion means use your cartesian equation, or your values of t, in the next part.
- When a sketch is given, use it to check your answer. A curve drawn only to the right of the y-axis confirms a domain such as x > 0.

## Where next

- [Parametric equations revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-coordinate-geometry-edexcel-alevel-maths-revision-notes/) for the identities, methods and a self-test.
- [Parametric equations practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-coordinate-geometry-edexcel-alevel-maths-practice/) with full answers.
- [P4 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p4-differentiation-edexcel-alevel-maths/), which uses parametric equations to find gradients, tangents and normals.
- [Parametric and implicit differentiation](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit/), the broader P4 guide.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
