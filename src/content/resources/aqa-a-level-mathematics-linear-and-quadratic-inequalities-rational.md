---
title: "AQA A-level Mathematics: Linear and Quadratic Inequalities, Rational Inequalities and Regions (7357)"
seoTitle: "AQA A-level Maths B5 Inequalities and Regions Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Linear and Quadratic Inequalities, Rational Inequalities and Regions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b5-inequalities-aqa-alevel-maths"
description: "Study guide to AQA A-level Maths 7357 B5: linear, quadratic and fraction inequalities, and, or and set notation, and shading regions on a graph."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the AQA A-level Mathematics 7357 specification (version 1.3, dated 31 January 2018) and covers the single content statement B5 in Section B, Algebra and functions. It teaches how to solve linear and quadratic inequalities, including those with brackets and fractions, how to write the answer with "and", "or" or set notation, and how to show an inequality in two variables as a region on a graph. The shorter [quadratics, simultaneous equations and inequalities guide](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/) gives a broad overview; this page adds the fraction and region work.

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [revision notes](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational-revision-notes/) | [practice questions](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational-practice/) | [free 10-minute diagnostics](/diagnostics/)

## What this unit covers

| Spec reference | What you must be able to do | Where in this guide |
|---|---|---|
| B5 | Solve linear inequalities in one variable, including brackets and numerical fractions | Section 2 |
| B5 | Solve quadratic inequalities in one variable and interpret them graphically | Sections 3 and 4 |
| B5 | Solve inequalities with algebraic fractions | Section 5 |
| B5 | Express solutions with "and" and "or", or in set notation | Section 1 |
| B5 | Represent inequalities such as y > x + 1 and y > ax² + bx + c graphically | Sections 6 and 7 |

The specification wording is "brackets and fractions". This guide treats both numerical fractions (in a linear inequality) and fractions with x in the denominator, because both appear in algebra questions. Sections 3 and 5 rely on factorising, which is B3 and B6 content.

## 1. Writing a solution: and, or, set notation

A solution to an inequality is a set of values, usually an interval. Three ways to write the same set:

| Words | Inequality | Set or interval notation |
|---|---|---|
| between −3 and 4, with 4 excluded | −3 ≤ x < 4 | {x ∈ ℝ: −3 ≤ x < 4} or [−3, 4) |
| outside two values | x < −2 or x ≥ 5 | {x: x < −2} ∪ {x: x ≥ 5} |
| every real number except 3 | x < 3 or x > 3 | {x ∈ ℝ: x ≠ 3} |

Use "and" when both conditions must hold at once, which gives one connected interval. Use "or" when either condition is enough, which gives two separate pieces. Never write x < −2 and x ≥ 5: no number satisfies both. The symbol ∩ means "and" for sets and ∪ means "or". A round bracket excludes the end value and a square bracket includes it.

## 2. Linear inequalities

Treat the inequality like an equation with one rule added. **If you multiply or divide by a negative number, the inequality sign turns round.** Adding or subtracting never changes it.

**Worked example 1.** Solve 3(2x − 1) − 5 ≥ 4(x + 2).

```
6x − 3 − 5 ≥ 4x + 8      (expand)
6x − 8 ≥ 4x + 8
2x ≥ 16
x ≥ 8
```

**Worked example 2 (fractions).** Solve (2x + 1)/3 − (x − 4)/2 ≤ 5.

Multiply every term by 6, the lowest common multiple of 3 and 2. This is positive, so the sign stays.

```
2(2x + 1) − 3(x − 4) ≤ 30
4x + 2 − 3x + 12 ≤ 30
x + 14 ≤ 30
x ≤ 16
```

**Worked example 3 (negative coefficient).** Solve 7 − 3x > 22.

```
−3x > 15
x < −5          (divide by −3, so reverse the sign)
```

**Worked example 4 (double inequality).** Solve −5 < 3 − 2x ≤ 9.

Subtract 3 from every part, then divide every part by −2 and reverse both signs.

```
−8 < −2x ≤ 6
4 > x ≥ −3
```

Read it back in order: **−3 ≤ x < 4**. Check x = 0: 3 − 0 = 3, which lies between −5 and 9.

## 3. Quadratic inequalities

Solve a quadratic inequality with a sketch, not by guessing from the roots.

**Method.**
1. Rearrange so one side is 0.
2. Solve the matching equation to find the roots.
3. Sketch the quadratic, marking the roots on the x-axis.
4. Read off where the curve is above the axis (> 0) or below it (< 0).
5. Write the answer with "and" or "or" or in set notation.

**Worked example 5.** Solve 2x² + x − 15 < 0.

```
2x² + x − 15 = (2x − 5)(x + 3) = 0   so x = 5/2 or x = −3
```

The curve is a ∪-shape, so it is below the axis between the roots.

**Solution: −3 < x < 5/2**, which is {x: −3 < x < 5/2}.

**Worked example 6 (negative x² term).** Solve 12 + 4x − x² ≥ 0.

```
12 + 4x − x² = −(x − 6)(x + 2) = 0   so x = 6 or x = −2
```

The curve is a ∩-shape, so it lies on or above the axis between the roots. **−2 ≤ x ≤ 6**.

**Worked example 7 (roots that are not whole numbers).** Solve x² − 6x + 4 > 0.

The expression does not factorise. Use the formula: x = (6 ± √(36 − 16))/2 = 3 ± √5, which is about 0.76 and 5.24. The ∪-shape is above the axis outside the roots.

**Solution: x < 3 − √5 or x > 3 + √5.**

**Special cases.** Look at the discriminant first if the roots may be missing.

| Inequality | Reason | Solution |
|---|---|---|
| x² − 6x + 9 ≤ 0 | (x − 3)² ≥ 0, so only the repeated root works | x = 3 |
| x² − 6x + 9 > 0 | the curve touches the axis at x = 3 and is above it elsewhere | x ≠ 3 |
| x² + 2x + 5 > 0 | discriminant 4 − 20 = −16 < 0, so the curve never reaches the axis | all real x |

## 4. Brackets, rearranging and reading a graph

When both sides are products or expressions, expand and collect everything on one side before you factorise. Do not set a product equal to a number and then read off factors: (x − 2)(x + 5) < 2x + 2 is not solved by comparing each bracket with 2x + 2.

**Worked example 8.** Solve (x − 2)(x + 5) < 2x + 2.

```
x² + 3x − 10 < 2x + 2
x² + x − 12 < 0
(x + 4)(x − 3) < 0
```

**−4 < x < 3.**

**A warning about cancelling.** In x² > 4x, do not divide by x, because x could be negative and you would lose solutions. Move everything to one side: x² − 4x > 0, so x(x − 4) > 0, which gives **x < 0 or x > 4**.

**Reading a graph.** The solution of f(x) > g(x) is the set of x-values where the graph of y = f(x) lies above the graph of y = g(x). Find the intersections first.

**Worked example 9.** The curve y = x² − 4x + 3 and the line y = 3 − 2x are drawn on the same axes. Find the values of x for which the curve is below the line.

```
x² − 4x + 3 = 3 − 2x
x² − 2x = 0
x(x − 2) = 0      x = 0 or x = 2
```

The curve is a ∪-shape cutting the line at x = 0 and x = 2, so it is below the line between those points: **0 < x < 2**. The same working shows that the curve is above the line when x < 0 or x > 2.

## 5. Inequalities with algebraic fractions

**Do not multiply both sides by an expression such as (x − 2).** Its sign depends on x. If it is negative, the inequality should reverse, and you cannot tell which case applies. Two safe methods:

- **Method A:** multiply both sides by the square of the denominator, which is never negative, so the sign stays. Take care with the excluded value, where the fraction is undefined.
- **Method B:** collect everything on one side as a single fraction and decide where it is positive or negative using the signs of the top and bottom.

**Worked example 10.** Solve 5/(x − 2) > 3. Note x ≠ 2.

Method A: multiply by (x − 2)², which is positive for x ≠ 2.

```
5(x − 2) > 3(x − 2)²
0 > (x − 2)(3(x − 2) − 5)
(x − 2)(3x − 11) < 0
```

The roots are 2 and 11/3, and the ∪-shape is below the axis between them: **2 < x < 11/3**.

Method B as a check: 5/(x − 2) − 3 = (11 − 3x)/(x − 2). This is positive when top and bottom have the same sign: both positive needs x < 11/3 and x > 2; both negative needs x > 11/3 and x < 2, which is impossible. Same answer.

**Worked example 11.** Solve 4/(x + 1) ≥ 3/(x − 2). Note x ≠ −1 and x ≠ 2.

Multiply by (x + 1)²(x − 2)², which is positive.

```
4(x + 1)(x − 2)² ≥ 3(x − 2)(x + 1)²
(x + 1)(x − 2)[4(x − 2) − 3(x + 1)] ≥ 0
(x + 1)(x − 2)(x − 11) ≥ 0
```

Sketch the cubic with positive x³ coefficient: it crosses the axis at −1, 2 and 11, starting below on the left. It is above or on the axis between −1 and 2, and to the right of 11.

**Solution: −1 < x < 2 or x ≥ 11.** The value 11 is included because both sides equal 1/3 there; −1 and 2 are excluded because the fractions are undefined.

## 6. Regions: one inequality in two variables

An inequality such as y > x + 1 is satisfied by a whole set of points (x, y). Its boundary is the line y = x + 1.

1. Draw the boundary: a **dashed line** for < or >, because points on it do not satisfy the inequality; a **solid line** for ≤ or ≥.
2. Choose a test point not on the boundary. The origin is the easiest if the boundary misses it.
3. Substitute. If the inequality is true, shade the side containing that point; if false, shade the other side.

For y > x + 1, test (0, 0): 0 > 1 is false, so the region is the side **away from the origin**, above the line. For y ≤ 3 − 2x, the origin gives 0 ≤ 3, which is true, so the region on the origin's side is correct, with a solid line.

Always state or label which side you shade. If the question asks you to shade the unwanted region and leave the required region clear, or the reverse, follow its instruction. If it does not say, label the region you want R.

## 7. Regions with curves and several inequalities

For y > ax² + bx + c the boundary is a parabola. Sketch it with its intercepts and turning point, make it dashed or solid, then test a point not on the curve. For a ∪-shaped curve, the inside of the bowl is above it.

**Worked example 12.** The region R satisfies both y ≥ x² − 2x − 3 and y < x + 1. Describe R fully and test the points (2, 0) and (3, 4).

```
Parabola: y = (x − 3)(x + 1); roots −1 and 3; y-intercept −3; turning point (1, −4); solid.
Line: y = x + 1; gradient 1; y-intercept 1; dashed.
Intersections: x² − 2x − 3 = x + 1 → x² − 3x − 4 = 0 → x = −1 or 4
              giving (−1, 0) and (4, 5)
```

R is the area between the curve and the line: on or above the parabola and strictly below the line, for −1 < x < 4. The two intersection points lie on the dashed line, so they are not in R.

- (2, 0): 0 ≥ 4 − 4 − 3 = −3 is true, and 0 < 3 is true. **Inside R.**
- (3, 4): 4 ≥ 0 is true, but 4 < 4 is false. **Not in R**, as it lies on the dashed line.

**Writing inequalities from a region.** Find each boundary's equation, decide solid or dashed from the drawing, then test a point inside the region to choose the sign. A vertical line x = a gives x ≥ a or x ≤ a; a horizontal line y = b gives y ≥ b or y ≤ b. A shaded region bounded by several lines needs one inequality per boundary, joined by "and".

## Common errors

- Failing to reverse the sign when dividing by a negative, for example 7 − 3x > 22 giving x > −5.
- Writing an "or" answer as one impossible double inequality such as 5 < x < −2.
- Multiplying a fraction inequality by (x − a) without considering its sign.
- Dividing by x in x² > 4x and losing the solutions with x < 0.
- Giving the "between the roots" answer for a ∪-shaped curve above the axis.
- Drawing a solid line for a strict inequality, or testing a point that lies on the boundary.
- Forgetting excluded values where a denominator is zero.

Next, use the [revision notes](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational-revision-notes/) for a condensed version, then the [practice questions](/resources/aqa-a-level-mathematics-linear-and-quadratic-inequalities-rational-practice/). The [diagnostics](/diagnostics/) show whether B5 is secure.

## Official syllabus

AQA, *A-level Mathematics 7357 specification*, for first teaching in 2017 (version 1.3, 31 January 2018), content B5. Published by AQA.
