---
title: "Cambridge O Level Mathematics (4024): Proportion"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.8
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "proportion"
description: "Cambridge O Level Maths 4024 subtopic 2.8 in depth: direct and inverse proportion with squares, cubes and roots, and effect-of-change questions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.8 Proportion** in Topic 2, Algebra and graphs, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025–2027 series. The combined [Sequences and Proportion study guide](/resources/sequences-and-proportion/) sets out the forms y = kx, y = kx² and y = k/x with one example each. This page covers every form the syllabus names, including square root, cube root and inverse square proportion, working backwards to find x, and questions about the effect of a change, which can be answered without finding k at all.

Companion pages: the [proportion revision notes](/resources/cambridge-o-level-mathematics-4024-proportion-revision-notes/) and the [proportion practice questions](/resources/cambridge-o-level-mathematics-4024-proportion-practice/).

## What the syllabus asks

The 4024 syllabus states one outcome for 2.8: express direct and inverse proportion in algebraic terms and use this form of expression to find unknown quantities. Its notes say this includes **linear, square, square root, cube and cube root** proportion, and that knowledge of the proportional symbol **∝** is required.

## The forms

| In words | With ∝ | As an equation |
|---|---|---|
| y is directly proportional to x | y ∝ x | y = kx |
| y is directly proportional to the square of x | y ∝ x² | y = kx² |
| y is directly proportional to the square root of x | y ∝ √x | y = k√x |
| y is directly proportional to the cube of x | y ∝ x³ | y = kx³ |
| y is directly proportional to the cube root of x | y ∝ ∛x | y = k∛x |
| y is inversely proportional to x | y ∝ 1/x | y = k/x |
| y is inversely proportional to the square of x | y ∝ 1/x² | y = k/x² |
| y is inversely proportional to the square root of x | y ∝ 1/√x | y = k/√x |

k is the **constant of proportionality**. Any of the powers above can appear with inverse proportion, and the method is the same.

## The four-step method

1. Write the relationship as an equation with k.
2. Substitute the given pair of values to find k.
3. Write the equation again with the value of k.
4. Use it to find the unknown, either y from x or x from y.

Step 3 is often a separate part of the question ("find an equation connecting y and x") and carries its own mark.

### Square root proportion

**Worked example.** y is directly proportional to the square root of x. When x = 9, y = 12.

(a) Find y when x = 25. (b) Find x when y = 10.

```
y = k√x
12 = k√9 = 3k,  k = 4
y = 4√x

(a) y = 4√25 = 4 × 5 = 20
(b) 10 = 4√x
    √x = 2.5
    x = 6.25
```

In (b), square both sides **after** dividing by 4. Squaring first gives 100 = 16x, which also works but is easy to get wrong.

### Inverse square proportion

**Worked example.** The force F between two magnets is inversely proportional to the square of the distance d between them. When d = 3, F = 20.

(a) Find F when d = 6. (b) Find d when F = 0.8.

```
F = k/d²
20 = k/9,  k = 180
F = 180/d²

(a) F = 180/36 = 5
(b) 0.8 = 180/d²
    d² = 180/0.8 = 225
    d = 15
```

A distance is positive, so only the positive square root is taken.

### Cube proportion

**Worked example.** The mass m grams of a metal sphere is directly proportional to the cube of its radius r cm. A sphere of radius 3 cm has mass 54 g. Find the mass of a sphere of radius 5 cm, and the radius of a sphere of mass 16 g.

```
m = kr³
54 = 27k,  k = 2
m = 2r³

r = 5:   m = 2 × 125 = 250 g
m = 16:  r³ = 8,  r = 2 cm
```

### Cube root proportion

T ∝ ∛V, and T = 6 when V = 27. Then T = k∛V, 6 = 3k, k = 2, and when V = 125, T = 2 × 5 = 10.

## Inverse proportion in context

Inverse proportion describes situations where one quantity goes up as the other goes down and their product stays fixed.

**Worked example.** Six workers take 15 days to build a wall. Assuming the time is inversely proportional to the number of workers, how long would 9 workers take?

```
t = k/w
15 = k/6,  k = 90   (the job needs 90 worker-days)
t = 90/9 = 10 days
```

The value of k often has a meaning, here the total amount of work. Mentioning the assumption (all workers work at the same rate) is good practice in an "explain" part.

## Effect-of-change questions

Some questions ask what happens to y when x changes by a factor. You do not need k: apply the same power to the factor.

| Relationship | x is multiplied by | y is multiplied by |
|---|---|---|
| y ∝ x² | 2 | 2² = 4 |
| y ∝ x³ | 2 | 2³ = 8 |
| y ∝ √x | 4 | √4 = 2 |
| y ∝ 1/x | 3 | 1/3 |
| y ∝ 1/x² | 3 | 1/9 |

**Worked example.** y ∝ x². x is increased by 20%. Find the percentage increase in y.

```
x is multiplied by 1.2
y is multiplied by 1.2² = 1.44
y increases by 44%
```

A common wrong answer is 40%, from doubling the 20%.

## Recognising proportion from a table

Test a table by working out y/x, y/x², y/x³ or xy for each pair; the correct relationship gives the same value every time.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| y | 0.5 | 4 | 13.5 | 32 |

y/x³ = 0.5 in every column, so y ∝ x³ with k = 0.5.

## Graphs

- y = kx is a straight line through the origin.
- y = kx² is a curve through the origin, getting steeper.
- y = k/x is a curve that approaches both axes but never meets them.

The graphs of these and other power functions are studied in 2.10 Graphs of functions.

## Exam technique

- When the question uses the words "is proportional to", start by writing the equation with k; a mark is usually given for it.
- Give k exactly, as a fraction if necessary, not a rounded decimal.
- "Find an equation connecting y and x" wants y = …x… with the value of k substituted.
- For effect-of-change questions, state the multiplier and then convert to a percentage if asked.

## Common mistakes

- Using y = k + x instead of y = kx.
- Squaring the wrong quantity: in y ∝ x², square x, not y.
- Forgetting to square or cube the given value when finding k.
- Mixing up direct and inverse: "as one goes up the other goes down" is inverse.
- Taking a square root and forgetting that the context may need only the positive value.
- Doubling a percentage for square proportion instead of squaring the multiplier.
