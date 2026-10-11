---
title: "OCR A Level Mathematics A: Modulus, functions, inverses and transformations (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths: Modulus & Functions Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Modulus, functions, inverses, composites and graph transformations"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 107
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "algebra-and-functions-ocr-alevel-maths"
description: "Condensed revision notes on modulus, composite and inverse functions and graph transformations for OCR A Level Mathematics A (H240), with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
Short recall notes for the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), first assessment 2018, sections 1.02l, 1.02s, 1.02u, 1.02v, 1.02w and 1.02x. Full explanations and worked examples are in the [study guide](/resources/ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph/). When you are ready, move on to the [practice questions](/resources/ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-practice/). Related: [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

Stage 1 content is common with AS (H230). Stage 2 content is A Level only. Only 1.02w (single transformations) is Stage 1; everything else here is A Level only.

## 1. Modulus (1.02l and 1.02s, A Level only)

| Fact | Detail |
|---|---|
| Definition | |x| = x if x ≥ 0; |x| = −x if x < 0 |
| Two moduli | |p| = |q| gives p² = q² |
| Less than | |x − c| < d means c − d < x < c + d |
| Greater than | |x − c| > d means x < c − d or x > c + d |
| Graph | y = |ax + b|: V shape, vertex on the x-axis at x = −b/a, y-intercept |b| |

**Method: equation |linear| = linear.**
1. Write two cases: inside = right side, and −(inside) = right side.
2. Solve each.
3. Substitute back. Reject any answer that makes the right side negative.

**Method: modulus on both sides.**
1. Square both sides.
2. Move everything to one side and factorise.
3. For an inequality, sketch the quadratic and read off the region.

**Method: sketch y = |ax + b|.**
1. Sketch the line y = ax + b with both intercepts.
2. Reflect the part below the x-axis in the x-axis.
3. Label the vertex and the y-intercept.

**Worked reminder.** Solve |3x + 5| = x + 1.

```
3x + 5 = x + 1    →  x = −2   →  right side −1: reject
−3x − 5 = x + 1   →  x = −3/2 →  right side −1/2: reject
```

The equation has no solutions. A sketch would show the arm of the V never reaching the line.

Check by inequality: |3x + 5| = x + 1 needs x + 1 ≥ 0, so x ≥ −1, but both candidates are below −1.

**Inequality reminder.** Solve |x − 2| ≥ 3. Distance from 2 is at least 3, so x − 2 ≤ −3 or x − 2 ≥ 3. **x ≤ −1 or x ≥ 5.** Two separate regions, joined by "or", not one chain.

## 2. Functions (1.02u, A Level only)

| Term | Meaning |
|---|---|
| Function | a mapping where every x in the domain has exactly one image f(x) |
| Domain | the set of allowed inputs |
| Range | the set of all outputs f(x) |
| One-one | each output from exactly one input |
| Many-one | at least two inputs share an output (still a function) |
| One-many | one input has several outputs (not a function) |

- State a range in terms of f(x) (or y), never x.
- Set notation example: {x ∈ ℝ : x > 3}.
- A quadratic on a restricted domain: complete the square, find the turning point, and check both ends of the domain.

**Worked reminder.** f(x) = x² + 2x − 2 for −3 ≤ x ≤ 2. Write f(x) = (x + 1)² − 3. The minimum −3 is at x = −1, inside the domain. f(−3) = 1 and f(2) = 6. **Range: −3 ≤ f(x) ≤ 6.**

## 3. Composite functions (1.02v, A Level only)

| Notation | Meaning |
|---|---|
| fg(x) | f(g(x)): g first, then f |
| f²(x) | f(f(x)) |
| gf | exists if the range of f lies inside the domain of g |

**Worked reminder.** f(x) = 2x − 1 and g(x) = x² + 3, both on ℝ.

- fg(x) = 2(x² + 3) − 1 = **2x² + 5**
- gf(x) = (2x − 1)² + 3 = **4x² − 4x + 4**

They are different, so the order of composition matters.

- Solving fg(x) = a number means solve the composite as one equation; do not evaluate piece by piece unless you want to.
- The domain of fg is the part of the domain of g whose outputs are allowed by f.

## 4. Inverse functions (1.02v, A Level only)

| Fact | Detail |
|---|---|
| Existence | f must be one-one on its domain |
| Swap | f⁻¹ takes the range of f as its domain, and the domain of f as its range |
| Identity | f⁻¹f(x) = x and ff⁻¹(x) = x |
| Graph | mirror image of y = f(x) in y = x; (p, q) on f gives (q, p) on f⁻¹ |
| Meeting | for an increasing f, the graphs of f and f⁻¹ meet on y = x: solve f(x) = x |

**Method to find f⁻¹.**
1. Write y = f(x).
2. Make x the subject (collect x terms and factorise if x appears twice).
3. Swap y for x. Write the domain from the range of f.

**Worked reminder.** f(x) = 4/(x − 3) + 1, x ≠ 3. Then y − 1 = 4/(x − 3), so x − 3 = 4/(y − 1) and x = 3 + 4/(y − 1) = (3y + 1)/(y − 1). So **f⁻¹(x) = (3x + 1)/(x − 1), x ≠ 1.** The value 1 is excluded because the range of f omits 1.

**Quadratic reminder.** To give x² − 12x + 7 an inverse, restrict to one side of the vertex: (x − 6)² − 29, so x ≥ 6 or x ≤ 6. Choose the root sign to match the side: x ≥ 6 gives 6 + √(x + 29), x ≤ 6 gives 6 − √(x + 29).

## 5. Graph transformations (1.02w Stage 1; 1.02x A Level only)

| Equation | Effect on y = f(x) |
|---|---|
| y = f(x) + a | up by a: translation (0, a) |
| y = f(x + a) | a units left: translation (−a, 0) |
| y = af(x) | y-values times a: stretch parallel to the y-axis |
| y = f(ax) | x-values times 1/a: stretch parallel to the x-axis |
| negative a | adds a reflection (x-axis for af, y-axis for f(ax)) |

**Point tracking for combinations.** For y = p·f(qx + r) + s, a point (u, v) on y = f(x) goes to (X, Y) with qX + r = u and Y = pv + s. So X = (u − r)/q.

**Worked reminder.** (6, −2) lies on y = f(x). On y = 2f(x − 1) + 3 the image is X = 6 + 1 = 7 and Y = 2(−2) + 3 = −1, so **(7, −1)**.

**Describing a combination.** y = f(2x + 6) can be written y = f(2(x + 3)). Stretch y = f(x) parallel to the x-axis with scale factor 1/2 to get f(2x), then translate by (−3, 0). The other order uses a translation of (−6, 0) first, then the stretch.

- Order matters when a stretch and a translation act on the same coordinate.
- Asymptotes, intercepts and turning points are all moved by the same rules.
- When describing, give the full name: "translation by the vector", "stretch, scale factor, parallel to the axis".
- You may be asked for an equation, a description, or a sketch with labelled points.

## Must-know distinctions

| Often confused | Difference |
|---|---|
| f(x + 3) and f(x) + 3 | the first moves the graph 3 left; the second moves it 3 up |
| f(2x) and 2f(x) | the first halves x-values; the second doubles y-values |
| fg and gf | fg applies g first; the two are usually different |
| f⁻¹(x) and 1/f(x) | inverse function against reciprocal |
| Range and domain of f⁻¹ | they are the range and domain of f, swapped |
| Many-one and one-many | a many-one mapping is a function; a one-many mapping is not |

## Quick self-test

1. Solve |2x − 9| = 5.
2. Solve |x + 3| < 4.
3. Solve |x − 1| = |3x + 5|.
4. State the vertex and the y-intercept of y = |4x − 12|.
5. Find the range of f(x) = x² + 2x − 2 for −3 ≤ x ≤ 2.
6. f(x) = 2x − 1 and g(x) = x² + 3. Find fg(x) and gf(x).
7. Find f⁻¹(x) for f(x) = 4/(x − 3) + 1, x ≠ 3, and state its domain.
8. Find the smallest k for which f(x) = x² − 12x + 7, x ≥ k, has an inverse.
9. A curve y = f(x) contains the point (6, −2). Give the new coordinates of this point after the curve is replaced by (a) y = f(x + 5), (b) y = f(3x).
10. Where does (6, −2) go when y = f(x) is replaced by y = 2f(x − 1) + 3?

### Answers

1. 2x − 9 = 5 gives x = 7, and 2x − 9 = −5 gives x = 2. **x = 2 or x = 7.**
2. −4 < x + 3 < 4. **−7 < x < 1.**
3. Square: x² − 2x + 1 = 9x² + 30x + 25, so 8x² + 32x + 24 = 0 and x² + 4x + 3 = 0. **x = −1 or x = −3.**
4. The vertex is where 4x − 12 = 0. **Vertex (3, 0); y-intercept 12.**
5. (x + 1)² − 3. **−3 ≤ f(x) ≤ 6.**
6. **fg(x) = 2x² + 5; gf(x) = 4x² − 4x + 4.**
7. **f⁻¹(x) = (3x + 1)/(x − 1), domain x ≠ 1.**
8. f(x) = (x − 6)² − 29. **k = 6.**
9. (a) Translate 5 left: **(1, −2)**. (b) Divide x by 3: **(2, −2)**.
10. **(7, −1).**

## Where marks are usually lost

- Not checking solutions of |linear| = linear for a negative right side.
- Squaring an inequality or equation in which only one side is a modulus without thinking about the sign.
- Shifting the graph right when the bracket says x + a.
- Giving the stretch factor for f(ax) as a instead of 1/a.
- Stating the range using x.
- Using only the end points of the domain when the turning point lies inside.
- Forgetting the domain and range statement for an inverse when the question asks for it.
- Choosing the wrong root sign when inverting a restricted quadratic.
- Describing a transformation without its vector or scale factor.

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), first assessment 2018, published by OCR.
