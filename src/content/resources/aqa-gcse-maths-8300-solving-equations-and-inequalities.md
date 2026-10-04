---
title: "AQA GCSE Mathematics 8300: Solving equations and inequalities -- Study Guide"
seoTitle: "AQA GCSE Maths 8300 Solving Equations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Solving equations and inequalities"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 2
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
    subtopic: "solving-equations-and-inequalities-aqa-gcse-maths"
description: "Study guide for AQA GCSE Maths 8300 section 3.2.3 (A17-A22): linear and quadratic equations, simultaneous equations, iteration and inequalities."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches subsection 3.2.3, **Solving equations and inequalities** (specification references A17 to A22), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Linear equations, factorising quadratics, linear/linear simultaneous equations, forming equations and linear inequalities are Foundation content, so they appear at both tiers. Completing the square, the quadratic formula, linear/quadratic simultaneous equations, iteration (A20) and quadratic inequalities are **Higher tier only** and are labelled below.

The [Algebra study guide](/resources/aqa-gcse-mathematics-algebra/) gives the overview of all of Topic 2; this page goes deeper on 3.2.3 only. Use it with the [solving equations revision notes](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-revision-notes/) and the [solving equations practice questions](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-practice/). The course hub is [AQA GCSE Mathematics](/boards/aqa/gcse/mathematics/), the [printable checklist](/checklists/aqa/gcse/mathematics/) lists every statement, and the [free diagnostics](/diagnostics/) show where to start.

## What this subsection covers

| Spec | What you must be able to do | Tier |
|---|---|---|
| A17 | Solve linear equations in one unknown, including brackets and the unknown on both sides; find approximate solutions from a graph | Both |
| A18 | Solve quadratic equations by factorising; find approximate solutions from a graph | Both |
| A18 | Quadratics that need rearranging; completing the square; the quadratic formula | Higher tier only |
| A19 | Solve two linear simultaneous equations algebraically; find approximate solutions from a graph | Both |
| A19 | Linear/quadratic simultaneous equations | Higher tier only |
| A20 | Find approximate solutions numerically by iteration, using suffix notation | Higher tier only |
| A21 | Translate situations into expressions or formulae; derive equations, solve them and interpret the answer | Both |
| A22 | Solve linear inequalities in one variable and show them on a number line | Both |
| A22 | Linear inequalities in two variables, quadratic inequalities, set notation, regions on a graph | Higher tier only |

Any of this can appear on the non-calculator Paper 1 or the calculator Papers 2 and 3.

## A17: Linear equations

Do the same operation to both sides until the unknown is alone. The specification note says "including use of brackets", so expect to expand first.

**Method**

1. Expand any brackets.
2. Collect the unknown on the side with the larger coefficient.
3. Collect the numbers on the other side.
4. Divide by the coefficient.

**Worked example 1.** Solve 4(2x − 3) = 3(x + 6).

```
8x - 12 = 3x + 18      expand both brackets
5x - 12 = 18           subtract 3x from both sides
5x = 30                add 12
x = 6                  divide by 5
Check: 4(12 - 3) = 36 and 3(6 + 6) = 36
```

**From a graph.** To solve 2x + 1 = 6, draw y = 2x + 1 and y = 6 and read the x-coordinate where they cross. Graph readings are approximate.

## A18: Quadratic equations

Get zero on one side of ax² + bx + c = 0 before you do anything else.

### By factorising (both tiers)

If two factors multiply to give 0, one of them must be 0.

**Worked example 2.** Solve x² + 3x − 28 = 0.

```
Need two numbers that multiply to -28 and add to +3: +7 and -4
(x + 7)(x - 4) = 0
x + 7 = 0  or  x - 4 = 0
x = -7  or  x = 4
```

Two special cases come up often:

- **Common factor:** x² − 9x = 0 gives x(x − 9) = 0, so x = 0 or x = 9. Never divide both sides by x; you lose the solution x = 0.
- **Difference of two squares:** x² − 49 = 0 gives (x − 7)(x + 7) = 0, so x = 7 or x = −7.

### Equations that need rearranging (Higher tier only)

**Worked example 3.** Solve 3x² = 5x + 2.

```
3x^2 - 5x - 2 = 0                rearrange so one side is 0
(3x + 1)(x - 2) = 0              factorise ax^2 + bx + c
x = -1/3  or  x = 2
```

### Completing the square (Higher tier only)

Write x² + bx + c as (x + b/2)² − (b/2)² + c, then solve.

**Worked example 4.** Solve x² − 6x + 4 = 0, giving exact answers.

```
x^2 - 6x + 4 = (x - 3)^2 - 9 + 4 = (x - 3)^2 - 5
(x - 3)^2 - 5 = 0
(x - 3)^2 = 5
x - 3 = ±√5
x = 3 + √5  or  x = 3 - √5
```

The same form gives the turning point of y = x² − 6x + 4 at (3, −5) (reference A11).

### The quadratic formula (Higher tier only)

For ax² + bx + c = 0, where a ≠ 0:

x = (−b ± √(b² − 4ac)) / (2a)

The specification's appendix lists this among the formulae you must know: **it is not given in the exam**.

**Worked example 5.** Solve 3x² + 7x − 5 = 0, giving answers to 2 decimal places.

```
a = 3, b = 7, c = -5
b^2 - 4ac = 49 - 4(3)(-5) = 49 + 60 = 109
x = (-7 ± √109) / 6
x = 0.57  or  x = -2.91   (2 d.p.)
```

Write the substitution down first: it can earn method marks even if the final answer is wrong.

### Approximate solutions from a graph (both tiers)

The solutions of ax² + bx + c = 0 are the x-coordinates where y = ax² + bx + c crosses the x-axis (the roots). To solve x² − 2x − 4 = 1, draw y = x² − 2x − 4 and the line y = 1 and read off where they cross: about x = −1.4 and x = 3.4. (The exact values are 1 ± √6, which round to −1.45 and 3.45.) The readings should sit equally either side of the line of symmetry, x = 1.

## A19: Simultaneous equations

### Linear/linear by elimination (both tiers)

**Worked example 6.** Solve 3x + 2y = 17 and 5x − 2y = 7.

```
The y terms are +2y and -2y, so ADD the equations
8x = 24
x = 3
Substitute into the first: 9 + 2y = 17, so 2y = 8, y = 4
Check in the second: 15 - 8 = 7
```

When no coefficients match, multiply one or both equations first.

**Worked example 7.** Solve 2x + 3y = 12 and 5x + 4y = 23.

```
Multiply the first by 4:   8x + 12y = 48
Multiply the second by 3:  15x + 12y = 69
Subtract:                  7x = 21, so x = 3
Substitute: 6 + 3y = 12, so y = 2
```

Rule of thumb: same signs, subtract; different signs, add.

### Linear/quadratic by substitution (Higher tier only)

Rearrange the linear equation to make one letter the subject, then substitute into the quadratic.

**Worked example 8.** Solve x² + y² = 25 and y = x + 1.

```
x^2 + (x + 1)^2 = 25
x^2 + x^2 + 2x + 1 = 25
2x^2 + 2x - 24 = 0
x^2 + x - 12 = 0
(x + 4)(x - 3) = 0
x = -4  or  x = 3
y = x + 1 gives y = -3  or  y = 4
Solutions: x = -4, y = -3  and  x = 3, y = 4
```

Pair each x with its own y.

### From a graph (both tiers)

The solution is the point where the two graphs cross. A line can meet a curve twice, once (touching) or not at all.

## A20: Iteration (Higher tier only)

Iteration finds an approximate solution by feeding each answer back into a formula. The specification note asks for **suffix notation** in recursive formulae: xₙ₊₁ means the next value and xₙ the current one.

**Step 1: locate the root by a change of sign.** For x³ − 5x − 3 = 0, let f(x) = x³ − 5x − 3.

```
f(2) = 8 - 10 - 3 = -5
f(3) = 27 - 15 - 3 = 9
The sign changes, so there is a solution between x = 2 and x = 3
```

**Step 2: rearrange into an iterative formula.**

```
x^3 = 5x + 3
x = ∛(5x + 3)
So xₙ₊₁ = ∛(5xₙ + 3)
```

**Step 3: iterate.** Start with x₀ = 2.5. On a calculator, type 2.5, press =, then type ∛(5 × ANS + 3) and press = repeatedly.

```
x₁ = 2.4933...
x₂ = 2.4915...
x₃ = 2.4910...
```

The values are settling at 2.49 to 2 decimal places. To confirm, check the sign change across the rounding interval: f(2.485) = −0.0796 and f(2.495) = 0.0564. The sign changes, so the solution is 2.49 to 2 d.p.

Write every iterate to at least 4 decimal places.

## A21: Forming and solving equations

Turn words or a diagram into algebra, solve, then answer in context. The specification note includes geometrical problems and problems set in context.

**Worked example 9 (geometry).** A rectangle is 4 cm longer than it is wide. Its area is 45 cm². Find its width.

```
Let the width be x cm, so the length is (x + 4) cm
x(x + 4) = 45
x^2 + 4x - 45 = 0
(x + 9)(x - 5) = 0
x = -9  or  x = 5
A length cannot be negative, so the width is 5 cm
```

The rejection step is part of "interpret the solution". Say why you reject −9.

**Worked example 10 (two equations).** 3 adult tickets and 2 child tickets cost £39. 2 adult tickets and 5 child tickets cost £48. Find the price of each.

```
Let an adult ticket be £a and a child ticket £c
3a + 2c = 39
2a + 5c = 48
Multiply the first by 2:  6a + 4c = 78
Multiply the second by 3: 6a + 15c = 144
Subtract: 11c = 66, so c = 6
3a + 12 = 39, so a = 9
Adult £9, child £6
```

Define your letters and finish with a sentence that answers the question.

## A22: Inequalities

### Linear inequalities in one variable (both tiers)

Solve them like equations, with one extra rule: **if you multiply or divide by a negative number, reverse the inequality sign.**

**Worked example 11.** Solve 5 − 2x < 11.

```
-2x < 6
x > -3      dividing by -2 reverses < to >
```

**Worked example 12.** Find the integers n that satisfy −3 ≤ 2n + 1 < 7.

```
-4 ≤ 2n < 6       subtract 1 from all three parts
-2 ≤ n < 3        divide all three parts by 2
Integers: -2, -1, 0, 1, 2
```

**Number lines.** The specification sets the convention: an **open circle** for a strict inequality (< or >) and a **closed circle** for an included boundary (≤ or ≥). For −2 ≤ n < 3, draw a closed circle at −2, an open circle at 3, and a line joining them.

### Set notation (Higher tier only)

x > −3 can be written {x : x > −3}, read as "the set of x such that x is greater than −3". Two separate parts join with the union symbol ∪.

### Quadratic inequalities (Higher tier only)

Find the roots, sketch the parabola, then read off which part you need.

**Worked example 13.** Solve x² − x − 12 > 0.

```
x^2 - x - 12 = (x - 4)(x + 3), roots x = -3 and x = 4
y = x^2 - x - 12 is a U-shape, so it is above the x-axis
outside the roots
x < -3  or  x > 4
Set notation: {x : x < -3} ∪ {x : x > 4}
```

For x² ≤ 16, the answer is −4 ≤ x ≤ 4. Writing only x ≤ 4 misses the negative root.

### Regions on a graph (Higher tier only)

An inequality in two variables describes a region. Draw each boundary line: **dashed for a strict inequality** and **solid for an included one**, as the specification requires. Then shade or label the region.

For y ≥ 1, y < 2x and x + y ≤ 6: y = 1 and x + y = 6 are solid lines, and y = 2x is dashed. The point (3, 3) is in the region, because it lies on the solid line x + y = 6. The point (2, 4) is not, because it lies on the dashed line y = 2x and 4 < 4 is false.

## Calculator or not?

On Paper 1 you must do everything by hand, including exact surd answers. On Papers 2 and 3 use the calculator for the quadratic formula and iteration, but still write the substitution and each iterate.

## Common errors

- Expanding 3(x + 6) as 3x + 6.
- Dividing by x in x² = 9x and losing x = 0.
- Writing −b as b in the quadratic formula when b is already negative.
- Forgetting the ± when square-rooting in completing the square.
- Not reversing the sign when dividing an inequality by a negative.
- Using a closed circle for < or a solid line for a strict inequality.
- Giving x < 5 for a quadratic inequality that needs two parts.

## Next steps

Condense this page with the [revision notes](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-revision-notes/), then test yourself with the [practice questions](/resources/aqa-gcse-maths-8300-solving-equations-and-inequalities-practice/). For the rest of Topic 2, use the [Algebra revision notes](/resources/aqa-gcse-mathematics-algebra-revision-notes/) and [Algebra practice questions](/resources/aqa-gcse-mathematics-algebra-practice/).

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.2.3 Solving equations and inequalities (A17 to A22), with the Appendix on mathematical formulae.
