---
title: "OCR GCSE Mathematics: Simultaneous equations, graphical solutions and iteration (J560) -- Revision Notes"
seoTitle: "OCR GCSE Maths Simultaneous Equations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Simultaneous equations, graphical solutions and iteration"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 48
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "algebraic-equations-ocr-gcse-maths"
description: "Condensed revision notes on simultaneous equations, graph solutions and sign-change methods for OCR GCSE Mathematics J560, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for the last stretch before the exam. Use the [study guide](/resources/ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and/) for full explanations and worked examples. These notes follow sections 6.03c, 6.03d and 6.03e of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026). Linear simultaneous equations and the graph work on lines and quadratics are for both tiers. Quadratic simultaneous equations, curve-and-line intersections and sign-change methods are marked **Higher tier only**.

Links: [OCR GCSE Mathematics hub](/boards/ocr/gcse/mathematics/), [printable checklist](/checklists/ocr/gcse/mathematics/), [practice questions](/resources/ocr-gcse-mathematics-simultaneous-equations-graphical-solutions-and-practice/), [10-minute diagnostics](/diagnostics/).

## Choosing a method

| Situation | Best method |
|---|---|
| Both equations look like ax + by = c | Elimination |
| One equation already says y = ... or x = ... | Substitution |
| One equation is quadratic (Higher tier only) | Substitution, then solve the quadratic |
| The question says "draw" or "use the graph" | Graph, and give an approximate answer |
| No exact method exists (Higher tier only) | Sign change: decimal search or bisection |

## 6.03c Linear simultaneous equations (both tiers)

### Elimination in steps

1. Label the equations (1) and (2).
2. Multiply so one unknown has coefficients of equal size in both.
3. Same signs: subtract. Opposite signs: add.
4. Solve for the unknown that is left.
5. Substitute into an original equation.
6. Check in the other original equation.

**Reminder.** Solve 5x + 4y = 13 and 2x + 3y = 8.

```
(1)×2: 10x + 8y = 26
(2)×5: 10x + 15y = 40
Subtract: 7y = 14,  so y = 2
Then 5x + 8 = 13,  so x = 1
```

**x = 1, y = 2**

### Substitution in steps

1. Take the equation that gives one letter alone.
2. Replace that letter in the other equation, using brackets.
3. Expand, collect, solve.
4. Substitute back into the simpler equation.

### Setting up

| Wording | Equation |
|---|---|
| "3 pens and 2 pencils cost £3.30" | 3p + 2q = 3.30 |
| "A is 4 more than B" | a = b + 4 |
| "Twice A plus B totals 20" | 2a + b = 20 |

Define each letter with its unit before writing equations. Answer in the context of the question.

## 6.03d Graphs and approximate solutions

| To solve | Draw | Read |
|---|---|---|
| A linear equation such as 2x − 5 = 3 (both tiers) | y = 2x − 5 and y = 3 | x where they cross |
| ax² + bx + c = 0 (both tiers) | y = ax² + bx + c | x where the curve meets the x-axis |
| Two linear simultaneous equations (both tiers) | Both lines | (x, y) where they cross |
| A curve and a line (Higher tier only) | Both on the same axes | (x, y) of each intersection |
| Quadratic = k (Higher tier only) | The curve and y = k | x of each intersection |

### Drawing the lines

- For ax + by = c, find the intercepts. Set x = 0 for the y-axis point and y = 0 for the x-axis point.
- For y = mx + c, the intercept is c and the gradient is m. Check with a second point.
- Draw lines with a ruler and curves as one smooth curve through the plotted points.
- A graph answer is approximate. Give it to the accuracy the scale allows, usually 1 decimal place.

### Graph reminder

The curve y = x² − 8x + 12 gives the values below. It lies under the x-axis for x between 2 and 6, with its lowest point at x = 4.

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| y | 12 | 5 | 0 | −3 | −4 | −3 | 0 | 5 | 12 |

To solve x² − 8x + 12 = 3 (**Higher tier only**), draw y = 3 across the same graph. It meets the curve where x is near 1.4 and near 6.6. The exact values are 4 ± √7, which are 1.354 and 6.646.

### Number of solutions (Higher tier only)

A line can cut a curve twice, touch it at one point, or miss it. The number of intersections equals the number of solutions of the pair.

## 6.03c Quadratic simultaneous equations (Higher tier only)

1. Rearrange the linear equation so that x or y stands alone.
2. Put that expression into the quadratic equation.
3. Tidy up to ax² + bx + c = 0.
4. Solve it by factorising, completing the square or the formula.
5. Feed each value into the **linear** equation to get its partner.
6. Write the answers as coordinate pairs.

**Reminder.** Solve x + y = 9 and xy = 20.

```
y = 9 − x
x(9 − x) = 20   →   x² − 9x + 20 = 0
(x − 4)(x − 5) = 0
x = 4 gives y = 5;  x = 5 gives y = 4
```

**Solutions: (4, 5) and (5, 4).**

**Circle form.** In x² + y² = r², the right-hand side is a number. Substituting a linear expression for y gives a quadratic in x with an x² term from each part.

## 6.03e Sign-change methods (Higher tier only)

| Term | Meaning |
|---|---|
| f(x) = 0 | The equation rearranged so one side is zero |
| Sign change | f(a) and f(b) have opposite signs |
| Conclusion | A root lies between a and b, provided f is continuous on the interval |

The specification states that specific methods will not be requested, so choose the one you prefer.

**Decimal search.** Test values one decimal place apart until the sign changes, then repeat at the next place. Test the half-way value to settle rounding.

**Interval bisection.** Test the midpoint, keep the half with the sign change, repeat. The interval halves each time.

Write a table with the interval, the midpoint or test value, the sign of f, and what you keep.

**Where a sign change misleads.** For f(x) = 1/x, f(−1) = −1 and f(1) = 1, yet there is no root, because the graph breaks at x = 0. An interval holding two roots can also show no sign change at all.

## Must-know distinctions

| Idea A | Idea B |
|---|---|
| Elimination removes a letter by adding or subtracting | Substitution replaces a letter by an expression |
| A root of y = f(x) is where it meets y = 0 | A solution of f(x) = k is where it meets y = k |
| Graph answer: approximate | Algebra answer: exact |
| x-values of a solution | Coordinates (x, y) of a solution |

## Quick self-test

1. Solve x + y = 11 and x − y = 3.
2. Solve 2x + 3y = 12 and 4x − y = 10.
3. Solve y = x + 4 and 3x + 2y = 23.
4. A pen costs £p and a pencil costs £q. Three pens and two pencils cost £3.30. One pen and four pencils cost £3.10. Find p and q.
5. Lines y = x + 2 and y = 8 − x are drawn. Write the solution of the pair.
6. Where does y = x² − 7x + 10 cross the x-axis?
7. **Higher tier only.** Solve x² + y² = 13 and y = x + 1.
8. **Higher tier only.** A curve is y = x² − 5 and a line is y = 2x + 3. Find where they meet.
9. **Higher tier only.** Show that x³ + x − 9 = 0 has a root between 1 and 2.
10. **Higher tier only.** For the equation in question 9, which interval do you keep after testing the midpoint 1.5?

### Answers

1. Add: 2x = 14, so x = 7. Then y = 4. **x = 7, y = 4**
2. Multiply the second by 3 to get 12x − 3y = 30, then add it to 2x + 3y = 12. This gives 14x = 42, so x = 3, and then y = 2. **x = 3, y = 2**
3. 3x + 2(x + 4) = 23, so 5x = 15 and x = 3. **x = 3, y = 7**
4. Multiply the second by 3: 3p + 12q = 9.30. Subtract the first: 10q = 6.00, so q = 0.60. Then p = 0.70. **Pen £0.70, pencil £0.60**
5. The lines meet where x + 2 = 8 − x, so x = 3 and y = 5. **(3, 5)**
6. Set y = 0: (x − 2)(x − 5) = 0. **At x = 2 and x = 5**
7. x² + (x + 1)² = 13 gives x² + x − 6 = 0, so x = 2 or x = −3. **(2, 3) and (−3, −2)**
8. x² − 5 = 2x + 3 gives x² − 2x − 8 = 0, so x = 4 or x = −2. **(4, 11) and (−2, −1)**
9. f(1) = −7 and f(2) = 1. The signs differ and the graph of f has no breaks, so there is a root between 1 and 2.
10. f(1.5) = −4.125, which is negative, so the sign change is between 1.5 and 2. **Keep 1.5 to 2**

## Where marks are usually lost

- Arithmetic slips with negatives when subtracting equations. Write each line out.
- Scaling one term but not the whole equation.
- Stopping after finding only one unknown.
- Not checking in the second original equation.
- Pairing x-values and y-values in the wrong order in a quadratic pair.
- Finding y from the quadratic equation, which produces extra false pairs.
- Reading a graph carelessly from the scale, such as treating each small square as 0.1 when it is 0.2.
- Giving a graph reading as an exact value.
- Saying "there is a root" without showing both function values and their signs.
- Rounding a root to a decimal place without testing the half-way value.

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR.
