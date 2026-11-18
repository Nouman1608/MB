---
title: "OxfordAQA A-level Mathematics (9660): Coordinate geometry in the (x, y) plane -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA 9660 P2.3: parametric to Cartesian conversion, standard curve forms, restrictions on x and y, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section P2.3 (Coordinate geometry in the (x, y) plane) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, in International A-level Unit P2. The content is "Cartesian and parametric equations of curves and conversion between the two forms". For explanations and longer worked examples, read the [coordinate geometry study guide](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths/); to practise, use the [coordinate geometry practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths-practice/).

## Core idea

A parametric curve gives x and y separately in terms of a parameter (t or θ). Each parameter value gives one point. The Cartesian equation links x and y directly. Converting means eliminating the parameter, then stating any restriction the parameter places on x and y.

## Elimination: which method when

| What you see | Method | Example |
|---|---|---|
| One equation linear in t | Make t the subject, substitute | x = 3t, y = t² − 1 gives y = x²/9 − 1 |
| t and 1/t | Multiply or divide the equations | x = 1/t, y = 3t gives xy = 3 |
| t + 1/t and t − 1/t | Add and subtract, then multiply | gives (x + y)(x − y) = 4 |
| cos θ and sin θ | sin²θ + cos²θ = 1 | x = a cos θ, y = b sin θ gives x²/a² + y²/b² = 1 |
| sec θ and tan θ | 1 + tan²θ = sec²θ | x = sec θ, y = tan θ gives x² − y² = 1 |
| cos θ and cos 2θ | cos 2θ = 2cos²θ − 1 | x = 2 cos θ, y = cos 2θ gives y = x²/2 − 1 |
| sin θ ± cos θ | Square both and add | x² + y² = 2 |
| eᵗ and e²ᵗ | Laws of indices | x = eᵗ, y = e²ᵗ gives y = x², x > 0 |

## Standard parametric forms to recognise

| Curve | Parametric form |
|---|---|
| Circle centre (p, q), radius r | x = p + r cos θ, y = q + r sin θ |
| Ellipse x²/a² + y²/b² = 1 | x = a cos θ, y = b sin θ |
| Parabola y² = 4ax | x = at², y = 2at |
| Rectangular hyperbola xy = c² | x = ct, y = c/t |
| Any y = f(x) | x = t, y = f(t) |

Parametric forms are not unique. Check any form you write by eliminating the parameter.

## Restrictions checklist

- **Parameter range given**: find the least and greatest values of x and of y over the whole range, including turning values inside it.
- **Squares**: x = t² forces x ≥ 0.
- **Exponentials**: x = eᵗ forces x > 0.
- **Sine and cosine**: x = 4 sin θ forces −4 ≤ x ≤ 4.
- **Secant**: x = sec θ forces |x| ≥ 1.
- **Excluded parameter values**: t ≠ 0 or t ≠ −1 can remove a single point or a line of points.

## Key terms

| Term | Meaning |
|---|---|
| Parameter | The third variable, such as t or θ, on which x and y both depend |
| Parametric equations | A pair of equations x = f(t), y = g(t) |
| Cartesian equation | An equation relating x and y only |
| Eliminate | Remove the parameter to obtain the Cartesian equation |
| Domain of the curve | The set of x-values the parametric curve actually reaches |
| Self-intersection | A point reached by two different parameter values |

## Using the parameter

- **Axes**: put y = 0 (or x = 0) and solve for the parameter, then find the other coordinate.
- **Intersection with a curve**: substitute both parametric expressions into the other curve's equation and solve for t.
- **Self-intersection**: look for two parameter values giving the same x and the same y.
- **Point with a given x**: solve x(t) = value; there may be more than one t, so more than one point.

## Exam traps

- Leaving out "x > 0" or "−2 ≤ x ≤ 2" when the parametric curve is only part of the Cartesian curve.
- Finding the range of y from end values only, when the curve has a turning point inside the parameter range.
- Writing x² + y² = 1 for x = a cos θ, y = b sin θ: divide by a² and b².
- Confusing 1 + tan²θ = sec²θ with 1 + cot²θ = cosec²θ.
- Squaring both sides, then accepting points that do not satisfy the original parametric equations.
- Using degrees for a parameter range given in radians.

## Self-test

1. Find the Cartesian equation of x = 3t, y = t² − 1.
2. Describe the curve x = 4 cos θ, y = 4 sin θ.
3. Find the Cartesian equation of x = 2 + cos θ, y = sin θ − 1.
4. Find the Cartesian equation of x = 1/t, y = t², stating any restriction on x.
5. Find the Cartesian equation of x = 2 cos θ, y = cos 2θ, and the possible values of x.
6. Find the Cartesian equation of x = t + 1, y = 2/t.
7. Find the Cartesian equation of x = e⁻ᵗ, y = eᵗ, and the possible values of x.
8. Write x² + y² = 49 in parametric form.
9. For y = t², −2 ≤ t ≤ 1, find the possible values of y.
10. Find where x = t², y = 2t meets the line y = 4.
11. For x = 1 + 1/t, y = 1 − t, which value can y never take?
12. Which identity eliminates θ from x = sec θ, y = tan θ, and what is the result?

### Answers

1. t = x/3, so y = x²/9 − 1.
2. A circle with centre (0, 0) and radius 4.
3. (x − 2)² + (y + 1)² = 1, a circle with centre (2, −1) and radius 1.
4. t = 1/x, so y = 1/x², with x ≠ 0.
5. y = 2(x/2)² − 1 = x²/2 − 1, for −2 ≤ x ≤ 2.
6. t = x − 1, so y = 2/(x − 1), with x ≠ 1.
7. xy = 1, with x > 0.
8. x = 7 cos θ, y = 7 sin θ, for 0 ≤ θ < 2π.
9. 0 ≤ y ≤ 4 (t = 0 gives 0 and t = −2 gives 4).
10. 2t = 4, so t = 2, giving the point (4, 4).
11. y = 1, since that would need t = 0, which makes 1/t undefined.
12. 1 + tan²θ = sec²θ, giving x² − y² = 1 with |x| ≥ 1.

## Related pages

- [Coordinate geometry study guide](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths/)
- [Coordinate geometry practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-coordinate-geometry-oxfordaqa-alevel-maths-practice/)
- [Parametric equations and exponential functions revision notes](/resources/oxfordaqa-a-level-mathematics-parametric-equations-and-exponential-and-logarithmic-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.3 Coordinate geometry in the (x, y) plane, published by OxfordAQA.
