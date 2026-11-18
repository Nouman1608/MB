---
title: "Edexcel International A Level Mathematics (YMA01): P4 Coordinate geometry in the (x, y) plane -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths P4 parametric equations: elimination methods, trig identities, domain and range, standard curves and intersections."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes cover section 3 of Unit P4 in Pearson Edexcel International A Level Mathematics (YMA01): "Parametric equations of curves and conversion between cartesian and parametric forms." The full explanations and worked examples are in the [P4 coordinate geometry study guide](/resources/edexcel-a-level-mathematics-yma01-p4-coordinate-geometry-edexcel-alevel-maths/).

## The core idea

- A parametric curve gives x = f(t) and y = g(t). Each value of t gives one point.
- The permitted values of t decide which part of the curve exists.
- A cartesian equation links x and y only. It must not contain t.

## Choosing an elimination method

| How t appears | Method | Example |
|---|---|---|
| Linear or simple in one equation | Make t the subject and substitute | x = 3t − 1, y = 2t² gives y = 2(x + 1)²/9 |
| Trig functions of the same angle | Isolate each function, then use an identity | x = sec t, y = 2 tan t gives x² − y²/4 = 1 |
| Exponential or logarithm | Take ln or exp of one equation | x = eᵗ + 1, y = e²ᵗ − 3 gives y = (x − 1)² − 3 |
| Fractions with the same denominator | Combine the equations | x = 2t/(1 + t), y = 1/(1 + t) gives x + 2y = 2 |
| Mixed angles, t and 2t | Double angle formula first | x = sin t, y = cos 2t gives y = 1 − 2x² |

## Identities to have ready

```
sin^2 t + cos^2 t = 1
sec^2 t = 1 + tan^2 t
cosec^2 t = 1 + cot^2 t
sin 2t = 2 sin t cos t
cos 2t = 1 - 2 sin^2 t = 2 cos^2 t - 1
(sin t + cos t)^2 = 1 + sin 2t
```

## Standard curves

| Parametric form | Cartesian form | Curve |
|---|---|---|
| x = a + r cos t, y = b + r sin t | (x − a)² + (y − b)² = r² | Circle, centre (a, b), radius r |
| x = at², y = 2at | y² = 4ax | Parabola, symmetric about the x-axis |
| x = ct, y = c/t | xy = c² | Rectangular hyperbola |
| x = p + qt, y = r + st | A straight line | Line through (p, r) with gradient s/q |

## Domain and range in four steps

1. Write down the permitted values of t.
2. Find the values x takes over that interval. This is the domain.
3. Find the values y takes. This is the range.
4. Check end points: is each one included (≤) or not (<)?

Example: x = 1 − 2 cos t, y = 3 sin²t, 0 ≤ t ≤ π. As cos t falls from 1 to −1, x rises from −1 to 3. Eliminating gives y = 3 − 3(1 − x)²/4, with domain −1 ≤ x ≤ 3 and range 0 ≤ y ≤ 3.

## Intersections and points

- **Meeting a line:** substitute x(t) and y(t) into the line's equation, solve for t, then find the points.
- **Meeting an axis:** set x = 0 (y-axis) or y = 0 (x-axis) and solve for t.
- **Testing a point:** solve one equation for t and check the other. Different t values mean the point is not on the curve.
- **Self-crossing:** if two different values of t give the same point, the curve passes through it twice. For x = t³ − t, y = t² + 1, both t = 1 and t = −1 give (0, 2).

## Key terms

| Term | Meaning |
|---|---|
| Parameter | The third variable, often t or θ, that x and y are each given in terms of |
| Parametric equations | A pair x = f(t), y = g(t) describing a curve |
| Cartesian equation | An equation linking x and y only |
| Eliminate | Remove the parameter by substitution or an identity |
| Domain of f | The set of x values for which y = f(x) describes the curve |
| Range of f | The set of y values the curve takes |

## Exam traps

- Leaving the final answer with t in it.
- No domain, or a domain copied from the t interval instead of worked out for x.
- The wrong version of cos 2t for the other equation.
- Losing a sign by squaring: x = √t forces x ≥ 0.
- Forgetting that a restricted t range gives only part of a circle or parabola.
- In intersection questions, solving for t and then stopping without giving the coordinates.

## Self-test

1. Eliminate t from x = 3t − 1, y = 2t².
2. Find a cartesian equation for x = 1 + 3 cos t, y = 4 − 3 sin t.
3. Which identity links sec t and tan t?
4. Eliminate t from x = sin t, y = cos 2t, and give the domain.
5. Eliminate t from x = eᵗ + 1, y = e²ᵗ − 3. What is the domain?
6. Why does x = t², y = t⁴ + 1 give only half of the curve y = x² + 1?
7. Show that x = 2t/(1 + t), y = 1/(1 + t) lies on a straight line.
8. Write y² = 12x in parametric form using x = 3t².
9. Find the points where x = t², y = t³ meets the line y = 2x.
10. How do you test whether a point lies on a parametric curve?
11. Find the y-intercepts of the circle x = 2 + 5 cos t, y = −3 + 5 sin t.
12. What do you do when the question says "in the form y = f(x)"?

**Answers:**

1. t = (x + 1)/3, so y = 2(x + 1)²/9.
2. (x − 1)² + (y − 4)² = 9, a circle with centre (1, 4) and radius 3.
3. sec²t = 1 + tan²t.
4. y = 1 − 2x², with −1 ≤ x ≤ 1 because x = sin t.
5. eᵗ = x − 1, so y = (x − 1)² − 3. The domain is x > 1, since eᵗ > 0.
6. x = t² cannot be negative, so only x ≥ 0 is traced.
7. x + 2y = (2t + 2)/(1 + t) = 2, which contains no t.
8. y² = 12(3t²) = 36t², so y = 6t. The form is x = 3t², y = 6t.
9. t³ = 2t² gives t = 0 or t = 2, so (0, 0) and (4, 8).
10. Solve one equation for t, then substitute that t into the other. The point is on the curve only if it fits.
11. x = 0 gives (0 − 2)² + (y + 3)² = 25, so y = −3 ± √21.
12. Rearrange fully so y is the subject and the right-hand side contains only x.

Next, try the [P4 coordinate geometry practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-coordinate-geometry-edexcel-alevel-maths-practice/).
