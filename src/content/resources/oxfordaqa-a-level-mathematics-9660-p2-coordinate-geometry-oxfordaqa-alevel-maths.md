---
title: "OxfordAQA A-level Mathematics (9660): Coordinate geometry in the (x, y) plane"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Maths (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-coordinate-geometry-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 P2.3 study guide: converting between parametric and Cartesian equations, choosing an elimination method, and the restrictions a parameter brings."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section P2.3 (Coordinate geometry in the (x, y) plane) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. P2.3 is in Unit P2 (Pure Maths), which is International A-level content. Its one content statement is "Cartesian and parametric equations of curves and conversion between the two forms".

The broader [parametric equations and exponential functions guide](/resources/oxfordaqa-a-level-mathematics-parametric-equations-and-exponential-and-logarithmic/) works through the four example curves the specification lists. This page focuses on choosing the right elimination method, on the restrictions a parameter places on a curve, and on using the parameter to find special points. Condense it with the [coordinate geometry revision notes](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths-revision-notes/) and test yourself with the [coordinate geometry practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths-practice/).

## What the specification asks for

The specification's examples show the range of curves expected:

| Example in the specification | Type of elimination |
|---|---|
| x = t², y = 2t | Make t the subject of one equation and substitute |
| x = a cos θ, y = b sin θ | Use sin²θ + cos²θ = 1 |
| x = 1/t, y = 3t | Combine the equations (here, multiply) |
| x = t + 1/t, y = t − 1/t, giving (x + y)(x − y) = 4 | Add and subtract, then multiply |

Differentiation of parametric curves, and tangents and normals to them, belong to P2.6. P2.3 is about the equations themselves.

## 1. Choosing an elimination method

To convert from parametric to Cartesian form you eliminate the parameter. Decide on a method before you start.

- **Substitution.** If one equation is linear in the parameter, make the parameter its subject.
- **Combination.** If the parameter appears as t and 1/t, or in matching expressions, add, subtract, multiply or divide the equations so that it cancels.
- **Identity.** If x and y are trigonometric, find an identity linking them: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, or a double angle formula from P2.4.
- **Laws of indices.** If x and y are exponentials, write one as a power of the other.

### Worked example 1: a sum and a difference

Find the Cartesian equation of x = sin θ + cos θ, y = sin θ − cos θ.

Neither equation makes θ easy to isolate, but squaring both and adding removes the cross terms:

```
x² = sin²θ + 2 sin θ cos θ + cos²θ
y² = sin²θ − 2 sin θ cos θ + cos²θ
x² + y² = 2(sin²θ + cos²θ) = 2
```

The curve is the circle x² + y² = 2, with centre the origin and radius √2.

### Worked example 2: a secant and tangent pair

Find the Cartesian equation of x = 3 sec θ, y = 2 tan θ.

Here sec θ = x/3 and tan θ = y/2. The identity 1 + tan²θ = sec²θ gives

```
1 + y²/4 = x²/9
x²/9 − y²/4 = 1
```

Because |sec θ| ≥ 1, |x| ≥ 3. The curve is a hyperbola with no points between x = −3 and x = 3.

### Worked example 3: exponentials

Find the Cartesian equation of x = eᵗ, y = e²ᵗ + 1, and state the set of values x and y can take.

Since e²ᵗ = (eᵗ)² = x², the equation is y = x² + 1. But eᵗ > 0 for every t, so x > 0 and y > 1. The parametric curve is only the right-hand half of the parabola, without its vertex.

## 2. Restrictions from the parameter

The Cartesian equation often describes more points than the parametric curve does. You must state the restriction when the question asks for "the Cartesian equation of the curve", and it is good practice to state it every time.

Restrictions come from three sources:

1. **A stated range for the parameter**, such as −1 ≤ t ≤ 2.
2. **The functions themselves**: a square is never negative, eᵗ is always positive, and sine and cosine lie between −1 and 1.
3. **Values the parameter cannot take**, such as t ≠ 0 in 1/t, which can remove a single point.

### Worked example 4: a parameter with a range

A curve has parametric equations x = 2t − 1, y = t², for −1 ≤ t ≤ 2. Find its Cartesian equation and the possible values of x and y.

```
t = (x + 1)/2
y = (x + 1)²/4
```

As t runs from −1 to 2, x = 2t − 1 runs from −3 to 3. For y, do not just substitute the end points: t = −1 gives y = 1 and t = 2 gives y = 4, but t = 0 lies in the range and gives y = 0. So the curve is the part of y = (x + 1)²/4 with −3 ≤ x ≤ 3 and 0 ≤ y ≤ 4. It is a finite arc, not the whole parabola.

### Worked example 5: a missing point

A curve has x = t/(1 + t), y = 1/(1 + t), for t ≠ −1. Show that every point of the curve lies on the line x + y = 1, and find the one point of that line which is not on the curve.

```
x + y = t/(1 + t) + 1/(1 + t) = (t + 1)/(1 + t) = 1
```

The value y = 1/(1 + t) can never be 0, so the point with y = 0 on the line, (1, 0), is never reached. Every other point is reached, because t = 1/y − 1 gives the right t for any y ≠ 0. The curve is the line x + y = 1 with the point (1, 0) removed.

## 3. Converting from Cartesian to parametric form

There is no single correct answer. Choose the parameter so that both coordinates are simple.

- A circle (x − 3)² + (y + 2)² = 25 becomes x = 3 + 5 cos θ, y = −2 + 5 sin θ, for 0 ≤ θ < 2π.
- A parabola y² = 8x becomes x = 2t², y = 4t. Check: y² = 16t² and 8x = 16t².
- A rectangular hyperbola xy = 9 becomes x = 3t, y = 3/t, for t ≠ 0.

Always check a proposed parametric form by eliminating the parameter again. If the question asks for particular forms, such as "x = at²", compare coefficients to find the constant.

## 4. Using the parameter to find special points

Many questions are easier in parametric form, because each point corresponds to one value of t.

### Worked example 6: axes and a self-intersection

A curve has parametric equations x = t² − 4, y = t³ − t.

(a) Find where the curve meets the axes. (b) Show that the curve passes through one point twice. (c) Find its Cartesian equation.

**(a)** On the x-axis, y = 0: t³ − t = t(t − 1)(t + 1) = 0, so t = 0, 1 or −1. These give the points (−4, 0) and (−3, 0). On the y-axis, x = 0: t² = 4, so t = ±2, giving (0, 6) and (0, −6).

**(b)** Both t = 1 and t = −1 give the point (−3, 0). Two different parameter values give the same point, so the curve crosses itself there.

**(c)** Write y = t(t² − 1) and square it: y² = t²(t² − 1)². With t² = x + 4 and t² − 1 = x + 3,

```
y² = (x + 4)(x + 3)²,   for x ≥ −4
```

The restriction x ≥ −4 comes from t² ≥ 0.

### Worked example 7: meeting another curve

Find where the curve x = t², y = 2t meets the circle x² + y² = 5.

Substitute the parametric expressions into the circle:

```
t⁴ + 4t² = 5
t⁴ + 4t² − 5 = 0
(t² + 5)(t² − 1) = 0
```

t² = −5 has no real solutions, so t = ±1. The points are (1, 2) and (1, −2). Treating the equation as a quadratic in t² is quicker than eliminating t first.

## Common mistakes

- Giving the Cartesian equation without the restriction on x or y.
- Using only the end values of a parameter range to find the range of y, and missing a turning value inside it.
- Forgetting that two values of t can give the same point.
- Using x² + y² = 1 for x = a cos θ, y = b sin θ when a ≠ b.
- Using sec²θ + tan²θ = 1. The identity is 1 + tan²θ = sec²θ.
- Squaring an equation and accepting the new solutions it introduces without checking them.

## Exam technique

- **Find the Cartesian equation**: give it in a clear form, such as y = f(x) or a factorised equation, and add any restriction.
- **Show that**: the final line must match the given equation exactly, with every algebraic step visible.
- **Hence**: use the result just found, such as a Cartesian equation, rather than starting again.
- **State the values of x for which the curve is defined**: look at each function of the parameter, not just the formula you end with.
- When the parameter is an angle, check whether the question uses degrees or radians for the range.

## Where next

Practise with the [coordinate geometry practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths-practice/), then condense with the [coordinate geometry revision notes](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths-revision-notes/). The trigonometric identities used here are taught in the [trigonometric identities guide](/resources/oxfordaqa-a-level-mathematics-trigonometric-identities-and-solving-trigonometric/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.3 Coordinate geometry in the (x, y) plane, published by OxfordAQA.
