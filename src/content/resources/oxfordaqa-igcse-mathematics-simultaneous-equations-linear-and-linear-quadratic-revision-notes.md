---
title: "OxfordAQA International GCSE Mathematics: Simultaneous equations, linear and linear-quadratic (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Simultaneous Equations Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Simultaneous equations, linear and linear-quadratic"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 83
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-oxfordaqa-igcse-maths"
    subtopic: "solving-equations-and-inequalities-oxfordaqa-igcse-maths"
description: "Condensed revision notes on simultaneous equations for OxfordAQA International GCSE Mathematics: methods, special cases, graphs and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes condense statement A21 in section 3.2.3 of the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). Core content is also assessable at Extension. Solving a linear equation with a quadratic one is **Extension only**. For full explanations, read the [study guide](/resources/oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic/), then test yourself with the [practice questions](/resources/oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-practice/).

Also useful: the [course hub](/boards/oxfordaqa/igcse/mathematics/), the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/), [algebra manipulation revision notes](/resources/oxfordaqa-igcse-mathematics-algebra-manipulation-revision-notes/) and [all free 10-minute diagnostics](/diagnostics/).

## Key ideas

* A solution is a pair (x, y) that makes both equations true.
* Each linear equation is a straight line. The solution is where the lines meet.
* Lines can cross once, be parallel (no solution) or be the same line (infinitely many solutions).
* A line and a curve can meet twice, touch once or miss each other.

## Choosing a method

| Situation | Best method |
|---|---|
| Both equations look like ax + by = c | Elimination |
| One equation already says y = … or x = … | Substitution |
| Question says "use a graph" | Draw both lines, read the crossing |
| One linear and one quadratic (Extension only) | Substitution, then solve a quadratic |

## Elimination in steps

1. Label the equations (1) and (2).
2. Multiply so one letter has the same coefficient in both.
3. Matching signs mean subtract. Opposite signs mean add.
4. Solve the equation that remains.
5. Substitute into an original equation to find the other letter.
6. Test your pair in the equation you left untouched.

Worked reminder: 2x + 3y = 12 and 3x − y = 7.

```
(2) × 3:  9x − 3y = 21
Add to (1): 11x = 33, so x = 3
2(3) + 3y = 12, so 3y = 6, y = 2
Check in (2): 9 − 2 = 7 ✓
```

**x = 3, y = 2**

## Substitution in steps

1. Rearrange one equation to y = … (or x = …).
2. Put the expression into the other equation, in brackets.
3. Expand, collect terms and solve.
4. Substitute back to find the second letter.
5. Check in the other equation.

Worked reminder: y = 2x + 1 and 3x + y = 16 gives 3x + 2x + 1 = 16, so 5x = 15, x = 3 and y = 7.

## Special cases

| What you get after eliminating | Meaning |
|---|---|
| Both letters vanish and the statement is false (for example 0 = 5) | Parallel lines, no solution |
| Both letters vanish and the statement is true (0 = 0) | Same line, infinitely many solutions |
| A normal value for one letter | One solution |

Quick test for parallel lines: scale one equation until its x and y terms match the other's. If the constants then differ, there is no solution. For 2x + 3y = 5 and 4x + 6y = 7, doubling the first gives 4x + 6y = 10, not 7.

## Graphs

* Find two or three points on each line, using a table of values. Pick x-values that give whole-number y-values where you can.
* Draw with a ruler and extend the lines until they cross.
* Read the coordinates at the crossing and state the precision your scale allows.
* A graph gives an approximate answer. If the question says "solve algebraically", a graph reading does not earn the answer.
* If the lines look parallel on your grid, check the gradients before writing "no solution".

## Getting equations into shape

Before you eliminate, write both equations in the same layout, with the x term first, then the y term, then the constant on the right.

* 2y = x + 3 becomes −x + 2y = 3 (or x − 2y = −3).
* y + 4x = 9 becomes 4x + y = 9.
* Clear any fractions at the start by multiplying every term by the common denominator.

Keep the equals signs lined up in a column. It makes the add-or-subtract decision much easier to see.

## Sign-check routine

Most lost marks in this topic are sign slips. Use this short routine each time.

1. Circle the two terms you want to cancel.
2. Look at their signs. Same sign: subtract. Opposite signs: add.
3. Write the new equation on its own line before solving it.
4. With both letters found, test them in the equation you did not use.

If the check fails, the error is nearly always in the elimination line or in the multiplication of the right-hand side.

## Graphs: a quick reminder

A line written as y = mx + c has gradient m and crosses the y-axis at c. To draw 4x + y = 9, find the intercepts: when x = 0, y = 9, and when y = 0, x = 9/4. A third point, such as (2, 1), checks your arithmetic. If three points do not lie on one straight line, one of them is wrong.

To use a graph for a linear-quadratic pair (Extension only), plot the curve from a table of values and join the points with a smooth curve, not with ruled segments. The line can cross it twice, so read both crossings.

## Linear and quadratic together (Extension only)

1. Write the linear equation as y = … (or x = …).
2. Replace y in the quadratic with that expression, in brackets.
3. Collect everything on one side as ax² + bx + c = 0.
4. Solve it by factorising, completing the square or the formula.
5. Find each y-value from the **linear** equation.
6. Write matched pairs.

Worked reminder: y = x² − 3x and y = x + 5.

```
x² − 3x = x + 5
x² − 4x − 5 = 0
(x − 5)(x + 1) = 0
x = 5 or x = −1
y = 5 + 5 = 10   or   y = −1 + 5 = 4
Check: 25 − 15 = 10 ✓   1 + 3 = 4 ✓
```

**(5, 10) and (−1, 4)**

If the linear equation is not already in the form y = …, rearrange it first. Where the quadratic has a number in front of x², collect terms so that the x² term is positive before you factorise or use the formula.

### How many points of intersection (Extension only)

| b² − 4ac of the quadratic you obtain | Intersections |
|---|---|
| greater than 0 | 2 |
| equal to 0 | 1 (line touches the curve) |
| less than 0 | 0 |

## Must-know distinctions

* **Elimination or substitution:** both give the same answer. Choose the one with less arithmetic.
* **No solution or infinite solutions:** parallel lines have the same gradient but different intercepts. Identical lines have the same gradient and the same intercept.
* **Exact or approximate:** algebra gives exact values. A graph gives readings. Surds and fractions stay exact until the final rounding.
* **Which equation to substitute back into:** for a linear-quadratic pair, always the linear one.

## Quick self-test

1. Solve x + y = 9 and x − y = 3.
2. Solve 3x + 2y = 14 and 5x − 2y = 18.
3. Solve y = 2x + 1 and 3x + y = 16.
4. Explain why 6x + 9y = 12 and 2x + 3y = 5 have no solution.
5. Find k so that x − 3y = 2 and 2x − 6y = k have infinitely many solutions.
6. Lines y = x + 1 and y = 7 − 2x are drawn. Where do they cross?
7. (Extension only) Solve y = x² and y = 3x + 4.
8. (Extension only) Solve y = x² + x − 9 and y = 3x − 1.
9. (Extension only) Show that y = x² + 2 and y = 4x − 2 meet at exactly one point.
10. (Extension only) Show that y = x² + 3x and y = 2x − 5 do not meet.

### Answers

1. Adding gives 2x = 12, so x = 6 and y = 3. **(6, 3)**
2. Adding gives 8x = 32, so x = 4. Then 12 + 2y = 14 gives y = 1. **(4, 1)**
3. 3x + 2x + 1 = 16, so x = 3 and y = 7. **(3, 7)**
4. Multiplying the second equation by 3 gives 6x + 9y = 15. This contradicts 6x + 9y = 12, so the lines are parallel.
5. Doubling the first equation gives 2x − 6y = 4, so **k = 4**.
6. x + 1 = 7 − 2x gives x = 2, then y = 3. **(2, 3)**
7. x² − 3x − 4 = 0 gives (x − 4)(x + 1) = 0. **(4, 16) and (−1, 1)**
8. x² + x − 9 = 3x − 1 gives x² − 2x − 8 = 0, so (x − 4)(x + 2) = 0. Then y = 3x − 1 gives **(4, 11) and (−2, −7)**
9. x² + 2 = 4x − 2 gives x² − 4x + 4 = 0, which is (x − 2)² = 0. One repeated root, so one point: **(2, 6)**.
10. x² + 3x = 2x − 5 gives x² + x + 5 = 0. Here b² − 4ac = 1 − 20 = −19, which is negative, so there is **no real solution**.

## Where marks are usually lost

* Subtracting an equation but changing the sign of only some of its terms.
* Multiplying the left side of an equation by a number and leaving the right side unchanged.
* Finding one letter and not going on to find the other.
* Leaving out brackets when substituting, so that 5y becomes 5 × 3x − 4.
* Expanding a squared bracket such as (3 − 2x)² as 9 + 4x², leaving out the middle term.
* In a linear-quadratic pair, giving the two x-values and the two y-values as separate lists with no pairing.
* Finding y from the quadratic rather than the line, which can give a value that is not on the line.
* Giving a graph reading when the question asks for an algebraic solution, or the reverse.
* Writing a reading such as 2.3333 from a graph, which claims accuracy the drawing cannot support.
* Writing no working: a wrong final pair with clear steps shows the examiner what you did, while a bare wrong pair shows nothing.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. This page follows section 3.2.3, statement A21.
