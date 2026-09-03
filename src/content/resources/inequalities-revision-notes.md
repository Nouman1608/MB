---
title: "Inequalities: Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.6
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "inequalities"
description: "Condensed recall notes on solving linear inequalities, number lines and regions for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For worked examples, use the
[Inequalities study guide](/resources/inequalities/).

## The symbols

| Symbol | Meaning | On a number line | On a graph |
|---|---|---|---|
| `<` | less than | **Open** circle ○ | **Dashed** line |
| `>` | greater than | **Open** circle ○ | **Dashed** line |
| `≤` | less than or equal | **Filled** circle ● | **Solid** line |
| `≥` | greater than or equal | **Filled** circle ● | **Solid** line |

Open/dashed = the boundary is **not** included. Filled/solid = it **is**.

## Solving linear inequalities

Solve exactly as you would an equation — with **one critical exception**:

> **Multiplying or dividing by a negative number REVERSES the inequality sign.**

```
-3x > 12
  x < -4        <- sign flipped
```

This single rule accounts for most lost marks in the topic. Adding and subtracting never flip it.

## Double inequalities

Operate on **all three parts** at once.

```
-5 <  2x + 1  <=  9
-6 <  2x      <=  8       (subtract 1 from each part)
-3 <  x       <=  4       (divide each part by 2)
```

## Integer solutions

When asked to **list** integer values, apply the endpoints carefully.

For −3 < x ≤ 4, the integers are **−2, −1, 0, 1, 2, 3, 4**. Note −3 is excluded (strict) but 4 is included.

## Regions on a graph

1. Draw each boundary line (dashed or solid as appropriate).
2. Decide which side satisfies the inequality — **test a point**, usually (0, 0) if it is not on the line.
3. Shade as the question instructs — read whether it asks you to shade the **required** region or the unwanted one.
4. Label the region **R**.

```
Test (0,0) in  y < 2x + 1:
   0 < 1  TRUE  ->  the origin side is the required region
```

Common region boundaries: `x ≥ 0`, `y ≥ 0`, `x + y ≤ 10`, `y ≤ 2x`.

**Worked example.** Represent x < 1 and y ≥ 1 on the same diagram.

Draw a **broken** vertical line at x = 1 (strict, so broken), and shade
the unwanted side (x ≥ 1, to the right). Draw a **solid** horizontal
line at y = 1 (inclusive, so solid), and shade the unwanted side (y < 1,
below it). What's left **unshaded** — to the left of x = 1 and on or
above y = 1 — is the region satisfying both inequalities.

## The reverse skill: reading inequalities from a region

Given a shaded diagram, identify each boundary line's equation, decide
whether it should be < / > (broken line) or ≤ / ≥ (solid line), and
decide which side of each line the **unshaded** (wanted) region lies on
— that determines the direction of each inequality sign.

**Note:** linear programming — optimising a quantity subject to a
system of inequalities — is explicitly **not** part of this syllabus;
the skill required stops at representing, solving and reading off
regions.

## Quadratic inequalities

Find the **critical values** by solving the quadratic as an equation
(factorise, complete the square, or use the formula), then use the
shape of the parabola to decide which region satisfies the inequality.

**Worked example.** Solve x² − 5x − 14 < 0.
```
(x - 7)(x + 2) = 0  ->  critical values x = 7 and x = -2
```
The graph of y = x² − 5x − 14 is a **positive parabola** (positive x²
coefficient), so it lies **below the x-axis between the roots**. The
solution is **−2 < x < 7**.

**Worked example.** Solve x² ≥ 9, and explain why the answer is not
simply x ≥ 3.
```
x^2 - 9 >= 0  ->  (x - 3)(x + 3) >= 0  ->  critical values x = 3 and x = -3
```
A positive parabola is **above the axis outside the roots**, so the
solution is **x ≤ −3 or x ≥ 3** — squaring removes the sign, so any
number with magnitude 3 or more satisfies the inequality, including
negative values such as −4 (since (−4)² = 16 ≥ 9).

## Exam traps

- Forgetting to flip the sign when dividing by a negative.
- Using an open circle where ≤ requires a filled one.
- Dashed vs solid lines — worth a mark on its own.
- Shading the wrong region: always test a point rather than guessing.
- When listing integers, checking whether each endpoint is included.
- Giving x > 7 or x < −2 for a quadratic inequality that should be a range **between** the roots — check the parabola's shape before deciding.
- Treating a double inequality one side at a time and losing a bound in the process.

## Self-test

1. Solve 4x − 3 ≤ 17.
2. Solve −2x > 10.
3. List the integers satisfying −2 ≤ x < 3.
4. Should y > x + 1 be drawn with a dashed or solid line?
5. How do you decide which side of a line to shade?

**Answers:** 1. 4x ≤ 20 → **x ≤ 5**. 2. Divide by −2 and flip: **x < −5**. 3. −2, −1, 0, 1, 2. 4. Dashed — the inequality is strict, so points on the line are not included. 5. Substitute a test point not on the line (usually the origin) into the inequality; if it is true, shade that side.

For the full worked explanation with additional detail, see the [Inequalities study guide](/resources/inequalities/); for exam-style questions including quadratic inequalities with full mark schemes, see the [Inequalities practice questions](/resources/inequalities-practice/).
