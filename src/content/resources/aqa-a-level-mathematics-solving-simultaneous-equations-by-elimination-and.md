---
title: "AQA A-level Mathematics: Solving Simultaneous Equations by Elimination and Substitution (7357)"
seoTitle: "AQA A-level Maths Simultaneous Equations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Solving Simultaneous Equations by Elimination and Substitution"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b4-simultaneous-equations-aqa-alevel-maths"
description: "Full study guide to solving simultaneous equations by elimination and substitution, including line-curve problems, for AQA A-level Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers statement B4 of Section B (Algebra and functions) in the AQA A-level Mathematics specification, first teaching 2017. B4 asks you to use both elimination and substitution on pairs of equations in two unknowns, including one linear and one quadratic equation. Use this page with the [revision notes](/resources/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and-revision-notes/) and the [practice set](/resources/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and-practice/), then see the [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/) and the [printable checklist](/checklists/aqa/a-level/mathematics/).

Quadratic functions and the discriminant (B3) have their own pages: see [Quadratics, Simultaneous Equations and Inequalities](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/). This guide goes deeper on B4 only. To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What B4 asks you to do

| Skill | What it looks like |
|---|---|
| Elimination | Scale the equations, then add or subtract to remove one letter |
| Substitution | Rearrange one equation, then replace that letter in the other |
| Linear pair, awkward answers | Fractions or decimals as exact solutions |
| Linear and quadratic pair | Substitute to reach one quadratic, solve, then find the partner values |
| Surd solutions | Quadratic formula, then keep exact form |
| Line and curve | Intersections, tangent and no-intersection cases using the discriminant |
| Context problems | Build the equations from words, solve, interpret |

## Two linear equations

A pair of linear equations in x and y describes two straight lines. A solution is a point lying on both. Usually the lines cross once, so there is one solution.

### Elimination

Make the coefficients of one letter the same size, then add or subtract so that letter disappears.

**Worked example 1.** Solve 5x + 3y = 11 and 2x − 7y = 4.

```
(1) 5x + 3y = 11
(2) 2x − 7y = 4

Remove y: multiply (1) by 7 and (2) by 3
35x + 21y = 77
 6x − 21y = 12
Add:  41x = 89
      x = 89/41

Substitute into (1):
5(89/41) + 3y = 11
445/41 + 3y = 451/41
3y = 6/41
y = 2/41

Check in (2): 2(89/41) − 7(2/41) = 178/41 − 14/41 = 164/41 = 4 ✓
```

The solution is x = 89/41, y = 2/41. Leave answers as exact fractions unless the question asks for decimals. If it asks for three significant figures, write x = 2.17 and y = 0.0488.

Rule of thumb: add when the signs of the letter you are removing differ, subtract when they match. A slip here is the commonest source of wrong answers, so write "add" or "subtract" beside the working.

### Substitution

Rearrange the equation that is easiest to make "y = ..." or "x = ...", then replace that letter in the other equation. Use brackets every time you substitute.

**Worked example 2.** Solve 4x − y = 7 and 3x + 2y = 9.

```
From (1): y = 4x − 7
Into (2): 3x + 2(4x − 7) = 9
          3x + 8x − 14 = 9
          11x = 23
          x = 23/11
Then y = 4(23/11) − 7 = 92/11 − 77/11 = 15/11
```

The solution is x = 23/11, y = 15/11.

### When there is no single solution

If the equations are multiples of each other with the same constant ratio (such as x + 2y = 3 and 2x + 4y = 6), they are the same line and there are infinitely many solutions. If the left sides are multiples but the right sides are not (such as 2x + 3y = 5 and 4x + 6y = 7), elimination leads to a false statement such as 0 = −3. The lines are parallel and there is no solution.

## One linear and one quadratic equation

Always substitute from the linear equation into the quadratic one. Rearranging the quadratic instead leads to messy square roots.

1. Rearrange the linear equation so that one letter stands alone.
2. Replace that letter in the quadratic, using brackets.
3. Expand, then gather terms as ax² + bx + c = 0.
4. Solve by factorising, completing the square or the quadratic formula.
5. Return to the linear equation to get the matching value of the other letter.

The last step matters. If you substitute into the quadratic instead, you can create false pairs.

**Worked example 3.** Solve y = 2x + 1 and x² + y² = 34.

```
x² + (2x + 1)² = 34
x² + 4x² + 4x + 1 = 34
5x² + 4x − 33 = 0
(5x − 11)(x + 3) = 0
x = 11/5  or  x = −3
```

From y = 2x + 1: when x = 11/5, y = 27/5. When x = −3, y = −5.

The solutions are (11/5, 27/5) and (−3, −5). Check one pair in the original quadratic: (−3)² + (−5)² = 9 + 25 = 34 ✓.

Here the quadratic is in both letters, not just a curve y = f(x). The method is the same. Note that the answers are always written as matched pairs.

### Surd solutions

When the quadratic does not factorise, use the quadratic formula and keep the exact form.

**Worked example 4.** Solve y = x + 3 and y = x² − 2x.

```
Equate:  x² − 2x = x + 3
         x² − 3x − 3 = 0
         x = (3 ± √(9 + 12))/2 = (3 ± √21)/2
Then y = x + 3 = (9 ± √21)/2
```

The solutions are x = (3 + √21)/2, y = (9 + √21)/2 and x = (3 − √21)/2, y = (9 − √21)/2. Match the signs: the plus sign in x goes with the plus sign in y. As decimals, the points are about (3.79, 6.79) and (−0.791, 2.21).

## Choosing a method

Elimination suits two linear equations where both letters have awkward coefficients. Substitution suits any pair in which one letter already has coefficient 1 or is on its own, and it is the only sensible method once one equation is quadratic. If both equations give y on its own, equating them is substitution done in one step.

Whichever you choose, finish by checking in the equation you did not use for the last step. A check takes ten seconds and catches most arithmetic slips.

## Lines meeting curves

Solving the curve and the line together finds the points where they meet. Equating the two right-hand sides eliminates y and gives a quadratic in x. Its discriminant, b² − 4ac, tells you how many intersections there are.

| Discriminant | Real roots | Line and curve |
|---|---|---|
| b² − 4ac > 0 | two different | cuts the curve at two points |
| b² − 4ac = 0 | one repeated | touches the curve: tangent |
| b² − 4ac < 0 | none | misses the curve completely |

**Worked example 5.** The line y = 2x + k, with k a constant, is drawn with the curve y = x² − 4x + 6.

(a) Work out k so that the line is a tangent to the curve.
(b) Work out the range of k for which the line meets the curve at two points.
(c) Give the point of contact in the tangent case.

```
(a) Equate: x² − 4x + 6 = 2x + k
    x² − 6x + (6 − k) = 0
    Discriminant: (−6)² − 4(1)(6 − k) = 36 − 24 + 4k = 12 + 4k
    Tangent: 12 + 4k = 0, so k = −3

(b) Two points: 12 + 4k > 0, so k > −3
    (No intersection when k < −3.)

(c) With k = −3: x² − 6x + 9 = 0, so (x − 3)² = 0, x = 3
    y = 2(3) − 3 = 3
    Point of contact: (3, 3)
```

Check the contact point on the curve: 9 − 12 + 6 = 3 ✓.

### Length of a chord

If a line cuts a curve at two points, you can find the distance between them from the two solutions. In worked example 4 the x-values differ by √21, and the y-values also differ by √21 because the line has gradient 1. The distance between the points is √(21 + 21) = √42.

## Context problems

Read the situation, define two letters, write two equations, then solve. Answers must make sense: lengths cannot be negative, and counts must be whole numbers.

**Worked example 6.** Two square lawns have sides a metres and b metres. Their perimeters add up to 44 m and their areas add up to 61 m². Find a and b.

```
Perimeters: 4a + 4b = 44, so a + b = 11
Areas:      a² + b² = 61

Substitute b = 11 − a:
a² + (11 − a)² = 61
2a² − 22a + 121 = 61
a² − 11a + 30 = 0
(a − 5)(a − 6) = 0
a = 5 or a = 6
```

If a = 5, then b = 6, and if a = 6, then b = 5. The lawns have sides 5 m and 6 m. Both solutions describe the same pair of lawns, so say so rather than listing two different answers.

## Common errors

- Subtracting when you should add (or the reverse) after scaling. Write the operation beside the line.
- Multiplying only one side of an equation by the scaling factor. Every term, including the constant, must be scaled.
- Dropping brackets when substituting. Replacing y by 2x + 1 in y² must give (2x + 1)², not 2x² + 1.
- Stopping after finding the x-values. A solution to a simultaneous pair is a pair.
- Pairing the wrong y with an x. Always use the linear equation to find y.
- Cancelling a factor of x from both sides of an equation such as x² = 3x. That loses the solution x = 0. Move everything to one side and factorise.
- Using b² − 4ac with the wrong signs when the quadratic has a negative middle term. Write a, b and c out first.
- Giving only decimals when the question asks for exact values.

## Where next

Work through the [practice set](/resources/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and-practice/), then move on to the [revision notes](/resources/aqa-a-level-mathematics-solving-simultaneous-equations-by-elimination-and-revision-notes/). Linked ideas appear in [coordinate geometry in the plane](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, published by AQA. Statement B4, Section B: Algebra and functions.
