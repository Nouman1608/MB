---
title: "OCR A Level Mathematics A: Modulus, functions, inverses, composites and graph transformations (H240)"
seoTitle: "OCR A Level Maths: Modulus, Functions & Transformations"
resourceType: "study-guides"
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
description: "Study guide to modulus equations, functions, composites, inverses and graph transformations for OCR A Level Mathematics A (H240), with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It covers the modulus function and its graph (1.02l, 1.02s), functions, inverses and composites (1.02u, 1.02v) and graph transformations (1.02w, 1.02x). The specification lists Pure Mathematics content in each of its three components. Stage 1 content is common with AS (H230); Stage 2 content is A Level only, and each section below says which applies.

Use it with the [revision notes](/resources/ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-modulus-functions-inverses-composites-and-graph-practice/). Hub: [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/). Tick-list: [printable checklist](/checklists/ocr/a-level/mathematics/). To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## Scope of this guide

| Section | Skill | Stage |
|---|---|---|
| 1.02l | Use the modulus function and the notation |x| to solve equations and inequalities, including the rules for |p| = |q| and for |x − c| < d | Stage 2 (A Level only) |
| 1.02s | Sketch y = |ax + b| from the graph of y = ax + b (single modulus sign only) | Stage 2 (A Level only) |
| 1.02u | Use the definition of a function: domain, range, image, mapping, one-one, many-one, one-many | Stage 2 (A Level only) |
| 1.02v | Find and use inverse and composite functions: fg, f², f⁻¹; the condition for an inverse; its graph as a reflection in y = x | Stage 2 (A Level only) |
| 1.02w | Describe, find equations for and sketch single transformations: stretches and translations written af(x), f(x) + a, f(x + a) and f(ax) | Stage 1 (common with AS) |
| 1.02x | The same, for combinations of those transformations | Stage 2 (A Level only) |

## 1. The modulus function (1.02l, Stage 2)

|x| is the non-negative size of x: |x| = x when x ≥ 0 and |x| = −x when x < 0. So |7| = 7 and |−7| = 7. Two results do most of the work.

| If you have | Use |
|---|---|
| |p| = |q| | square both sides: p² = q² |
| |x − c| < d (d > 0) | c − d < x < c + d |
| |x − c| > d | x < c − d or x > c + d |

**Example 1.** Solve |x − 6| = 3x − 2.

Split into two cases, because the inside is either x − 6 or −(x − 6).

```
x − 6 = 3x − 2      →  −4 = 2x   →  x = −2
6 − x = 3x − 2      →   8 = 4x   →  x = 2
```

Check both in the original equation. x = −2: left side |−8| = 8, right side 3(−2) − 2 = −8. A modulus cannot equal a negative, so reject. x = 2: |−4| = 4 and 3(2) − 2 = 4, so it works. **x = 2.**

Always check when a modulus equals an expression in x.

**Example 2.** Solve |4x + 1| = |2x − 5|. Both sides are moduli, so square them.

```
(4x + 1)² = (2x − 5)²
16x² + 8x + 1 = 4x² − 20x + 25
12x² + 28x − 24 = 0
3x² + 7x − 6 = 0   →   (3x − 2)(x + 3) = 0
```

**x = 2/3 or x = −3.** No check is needed: squaring is reversible when both sides are moduli.

**Example 3.** Solve |3x − 2| > |x + 6|.

```
(3x − 2)² > (x + 6)²
9x² − 12x + 4 > x² + 12x + 36
8x² − 24x − 32 > 0   →   x² − 3x − 4 > 0
(x − 4)(x + 1) > 0
```

The quadratic is positive outside its roots: **x < −1 or x > 4.**

**Example 4.** Solve |4 − 3x| ≤ 8. This is the form |expression| ≤ b, so −8 ≤ 4 − 3x ≤ 8. Subtract 4: −12 ≤ −3x ≤ 4. Dividing by −3 reverses both inequalities: **−4/3 ≤ x ≤ 4.**

**Example 5.** Solve |2x − 1| < x + 4. The right side must be positive for any solution, so write −(x + 4) < 2x − 1 < x + 4. The left half gives 3x > −3, so x > −1. The right half gives x < 5. **−1 < x < 5.**

## 2. Graph of y = |ax + b| (1.02s, Stage 2)

Sketch the straight line y = ax + b first. Keep the part on or above the x-axis. Reflect the part below the x-axis in the x-axis. The result is a V with its corner on the x-axis at x = −b/a, crossing the y-axis at |b|, with arms of gradient a and −a. The specification excludes the modulus of other graphs.

**Example 6.** Sketch y = |5 − 2x|.

```
Line y = 5 − 2x:  crosses x-axis at 5/2, y-intercept 5
For x < 5/2 the line is above the axis:  y = 5 − 2x
For x > 5/2 the line is reflected:       y = −(5 − 2x) = 2x − 5
```

The vertex is (5/2, 0) and the graph passes through (0, 5). The line y = x meets one arm at x = 5/3 (from 5 − 2x = x) and the other at x = 5 (from 2x − 5 = x).

**Finding an equation from a V.** A V-shaped graph with vertex (−2, 3) is y = a|x + 2| + 3. If it passes through (0, 7), then 7 = 2a + 3, so a = 2.

## 3. Functions, domain and range (1.02u, Stage 2)

A function is a mapping from the domain to the range such that each x in the domain has exactly one image f(x). The range is the set of all possible values of f(x).

| Mapping type | Meaning | A function? |
|---|---|---|
| one-one | each output comes from exactly one input, e.g. x ↦ x³ | yes |
| many-one | different inputs share an output, e.g. x ↦ x² | yes |
| one-many | one input gives several outputs, e.g. y² = x | no |

A mapping diagram for x ↦ x² on {−2, −1, 0, 1, 2}:

```
 −2 ──┐
      ├──► 4
  2 ──┘
 −1 ──┐
      ├──► 1
  1 ──┘
  0 ─────► 0
```

Two arrows meeting at one output show many-one. Two arrows leaving one input would be one-many, not a function.

Set notation is expected where suitable: {x ∈ ℝ : x ≥ 2} means all real x with x ≥ 2. State a range using f(x), not x.

**Example 7.** f(x) = x² − 10x + 30 for 2 ≤ x ≤ 9. Find the range.

Complete the square: f(x) = (x − 5)² + 5, so the minimum is 5 at x = 5, which lies in the domain. Check the ends: f(2) = 14 and f(9) = 21. The greatest value is 21. **Range: 5 ≤ f(x) ≤ 21.**

## 4. Composite functions (1.02v, Stage 2)

fg(x) means f(g(x)): apply g first, then f. f²(x) means f(f(x)). In general fg ≠ gf.

fg exists only when the range of g fits inside the domain of f.

**Example 8.** g(x) = 3x − 1 for x ∈ ℝ, and h(x) = √x for x ≥ 0. Then hg(x) = √(3x − 1), which needs 3x − 1 ≥ 0, so its domain is x ≥ 1/3. But gh(x) = 3√x − 1 has domain x ≥ 0. The order changes both the rule and the domain.

**Example 9.** f(x) = 3/(x − 1), x ≠ 1. Find f²(x).

```
f²(x) = 3 / (3/(x − 1) − 1)
      = 3(x − 1) / (3 − (x − 1))
      = 3(x − 1) / (4 − x)
```

The domain excludes x = 1 (not in the domain of f) and x = 4 (where f(x) = 1, which f cannot accept).

## 5. Inverse functions (1.02v, Stage 2)

f⁻¹ undoes f: f⁻¹f(x) = x and ff⁻¹(x) = x. The condition for an inverse to exist is that f is one-one. f⁻¹ accepts the outputs of f, so its domain is the range of f; its outputs are the inputs of f, so its range is the domain of f.

**Method to find f⁻¹:** write y = f(x); make x the subject; replace y by x.

**Example 10.** f(x) = (3x − 2)/(x + 4), x ≠ −4.

```
y(x + 4) = 3x − 2
xy + 4y = 3x − 2
xy − 3x = −4y − 2
x(y − 3) = −(4y + 2)   →   x = (4y + 2)/(3 − y)
```

**f⁻¹(x) = (4x + 2)/(3 − x), x ≠ 3.** Writing f(x) = 3 − 14/(x + 4) shows that f(x) never equals 3, which is why 3 is excluded from the domain of f⁻¹.

**Example 11.** f(x) = x² + 10x + 7 for x ≥ −5. Complete the square: f(x) = (x + 5)² − 18. On x ≥ −5 this is one-one with range f(x) ≥ −18. Then y + 18 = (x + 5)², and x + 5 ≥ 0 selects the positive root, so f⁻¹(x) = −5 + √(x + 18) with domain x ≥ −18.

Without a restricted domain, x² + 10x + 7 on ℝ is many-one and has no inverse.

**Graph of f⁻¹.** Its graph is the mirror image of the graph of y = f(x), with the line y = x as the mirror. Each point (p, q) on f gives (q, p) on f⁻¹.

**Example 12.** Where do y = f(x) and y = f⁻¹(x) from Example 11 meet? Since f is increasing, they meet on y = x. Solve f(x) = x: x² + 9x + 7 = 0, so x = (−9 ± √53)/2. Only (−9 + √53)/2 ≈ −0.860 satisfies x ≥ −5, so the curves meet at one point, (−0.860, −0.860).

## 6. Single transformations (1.02w, Stage 1)

| Equation | Transformation of y = f(x) |
|---|---|
| y = f(x) + a | every point moves up by a: translation (0, a) |
| y = f(x + a) | every point moves a units left: translation (−a, 0) |
| y = af(x) | y-coordinates multiplied by a: stretch parallel to the y-axis (a < 0 also reflects in the x-axis) |
| y = f(ax) | x-coordinates multiplied by 1/a: stretch parallel to the x-axis (a < 0 also reflects in the y-axis) |

Changes inside the brackets act on x and "do the opposite" of what you expect. Changes outside act on y.

**Example 13.** y = f(x) has a minimum at (2, −3) and crosses the y-axis at (0, 1). Write down the image of these points under (a) y = f(x − 4), (b) y = f(x/2), (c) y = −2f(x).

(a) Translate 4 right: (6, −3) and (4, 1). (b) Stretch, scale factor 2, from the y-axis: (4, −3) and (0, 1). (c) Multiply y-coordinates by −2: (2, 6) and (0, −2). The minimum becomes a maximum.

## 7. Combinations of transformations (1.02x, Stage 2)

The order matters. Take f(x), then add 2, then multiply by 3: that gives 3(f(x) + 2) = 3f(x) + 6. Multiply by 3 first, then add 2: 3f(x) + 2.

**Tracking a point.** For y = 3f(2x − 4) + 1, a point (p, q) on y = f(x) goes to (X, Y) where 2X − 4 = p and Y = 3q + 1. So X = (p + 4)/2 and Y = 3q + 1.

**Example 14.** f(x) = x² − 2x − 1 has its minimum at (1, −2). Find the minimum of y = 3f(2x − 4) + 1.

X = (1 + 4)/2 = 5/2 and Y = 3(−2) + 1 = −5. The minimum is **(5/2, −5)**. Expanding confirms y = 12x² − 60x + 70, and at x = 5/2 this equals −5.

**Describing the sequence.** One valid order is: translation by (4, 0); stretch, scale factor 1/2, parallel to the x-axis; stretch, scale factor 3, parallel to the y-axis; translation by (0, 1). Another valid route stretches by 1/2 first and then translates by (2, 0), because 2x − 4 = 2(x − 2).

**Example 15.** Sketch y = 3|x − 1| − 6. Start with y = |x| (vertex at the origin). Translate by (1, 0), stretch in y by 3, translate by (0, −6). Vertex (1, −6). The y-intercept is 3(1) − 6 = −3. The x-intercepts need |x − 1| = 2, so x = −1 and x = 3.

The function f may be any function from Stage 1 or Stage 2 content. For y = 1/(x − 2) + 3, the asymptotes of y = 1/x move to x = 2 and y = 3.

## Common errors

- Giving a root of |x − 6| = 3x − 2 without checking that the right side is not negative.
- Squaring an inequality with a modulus on only one side and forgetting the sign condition.
- Reading f(x + 3) as a shift to the right. It moves left.
- Finding f⁻¹ for a many-one function without restricting the domain.
- Giving the domain of f⁻¹ from the algebra of the formula instead of from the range of f.

## Next steps

Once the methods feel familiar, use the revision notes for recall and the practice set for timed work.

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), first assessment 2018, published by OCR. Sections 1.02l, 1.02s, 1.02u, 1.02v, 1.02w and 1.02x.
