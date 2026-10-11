---
title: "OxfordAQA International GCSE Mathematics: Simultaneous equations, linear and linear-quadratic (9260)"
seoTitle: "OxfordAQA IGCSE Maths Simultaneous Equations Guide"
resourceType: "study-guides"
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
description: "Study guide to simultaneous equations for OxfordAQA International GCSE Mathematics: elimination, substitution, graphs and linear-quadratic pairs."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide covers statement A21 in section 3.2.3 of the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). The specification lists Core content and Extension content in two columns, and states that all content can be assessed on the Extension tier papers, so Core content is also Extension content. Solving one linear and one quadratic equation together is **Extension only**. Everything else here is Core.

Related pages: [revision notes](/resources/oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-revision-notes/), [practice questions](/resources/oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-practice/), the [course hub](/boards/oxfordaqa/igcse/mathematics/), the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/) and [all free 10-minute diagnostics](/diagnostics/). For the algebra skills used here, see [algebra notation and manipulation](/resources/igcse-oxfordaqa-mathematics-algebra-notation-and-manipulation/).

## What this unit covers

| Reference | What you must be able to do | Tier |
|---|---|---|
| A21 | Solve two linear simultaneous equations in two variables algebraically | Core |
| A21 | Find approximate solutions to two linear simultaneous equations using a graph | Core |
| A21 | Solve simultaneous equations where one is linear and one is quadratic | Extension only |

Equations that arrive as a word problem, quadratic equations on their own and inequalities are separate topics. Here you start from equations that are already written down.

## What "simultaneous" means

Two equations in x and y are simultaneous when you want one pair of values that makes both true at the same moment. Each linear equation is a straight line on a graph. A pair (x, y) satisfying both equations is a point on both lines, so the solution is where the lines cross.

There are three possible outcomes for two lines:

| Lines | Number of solutions |
|---|---|
| They cross | exactly one |
| They are parallel | none |
| They are the same line | infinitely many |

## Method 1: elimination

Make the coefficients of one letter the same size, then add or subtract the equations so that letter disappears.

1. Label the equations (1) and (2).
2. Multiply one or both so that x or y has the same number in front in each.
3. If the matching terms have the same sign, subtract. If they have opposite signs, add.
4. Solve for the remaining letter.
5. Put the value into one original equation to get the other letter.
6. Test the pair in the equation you did not use.

### Worked example 1

Solve 4x + 3y = 17 and 2x − 5y = −11.

```
(1)  4x + 3y = 17
(2)  2x − 5y = −11
(2) × 2:  4x − 10y = −22      (3)
(1) − (3): 13y = 39
           y = 3
Substitute in (1): 4x + 9 = 17, so 4x = 8, x = 2
Check in (2): 2(2) − 5(3) = 4 − 15 = −11 ✓
```

**x = 2, y = 3**

### Worked example 2: both equations need changing

Solve 5x + 3y = 1 and 2x + 7y = 12.

```
(1) × 2:  10x + 6y = 2        (3)
(2) × 5:  10x + 35y = 60      (4)
(4) − (3): 29y = 58
            y = 2
Substitute in (1): 5x + 6 = 1, so 5x = −5, x = −1
Check in (2): 2(−1) + 7(2) = −2 + 14 = 12 ✓
```

**x = −1, y = 2**

The most common slip is subtracting a negative incorrectly. When in doubt, add the equations if the signs differ, because adding avoids sign errors.

## Method 2: substitution

Use this when one equation already gives a letter in terms of the other, or can do so easily. Put that expression into the other equation, in brackets.

### Worked example 3

Solve y = 3x − 4 and 2x + 5y = 14.

```
Substitute y = 3x − 4 into 2x + 5y = 14:
2x + 5(3x − 4) = 14
2x + 15x − 20 = 14
17x = 34
x = 2
y = 3(2) − 4 = 2
Check: 2(2) + 5(2) = 14 ✓
```

**x = 2, y = 2**

Elimination is usually quicker when both equations look like ax + by = c. Substitution is quicker when one letter is already isolated.

## Special cases: no solution and infinitely many

If eliminating a letter makes both letters vanish, look at what is left.

* A false statement such as 0 = 3 means the lines are parallel and there is no solution.
* A true statement such as 0 = 0 means the equations describe the same line and there are infinitely many solutions.

Example: 2x + 3y = 5 and 4x + 6y = 7. Doubling the first gives 4x + 6y = 10, which cannot equal 7 as well. The lines have the same gradient but different positions, so there is no solution.

Example: 3x − 2y = 7 and 6x − 4y = 14. The second is exactly twice the first, so they are the same line.

## Method 3: solving by graph

A graph gives an **approximate** solution. Your reading is only as accurate as your drawing, so the answer is stated to the precision the scale allows (often 1 decimal place).

Method:

1. Rearrange each equation into a form you can plot, or find two or three points on each line.
2. Draw both lines accurately with a ruler, extended across the grid.
3. Read the coordinates of the crossing point.
4. Give the answer as x = … and y = …, and write "approximately" if the crossing is not on grid lines.

### Worked example 4

Use a graph to solve 4x + y = 9 and 2y = x + 3.

Points for the first line (y = 9 − 4x):

| x | 0 | 1 | 2 |
|---|---|---|---|
| y | 9 | 5 | 1 |

Points for the second line (y = (x + 3)/2):

| x | −1 | 1 | 3 |
|---|---|---|---|
| y | 1 | 2 | 3 |

Plot both lines. They cross a little to the right of x = 1.5 and a little above y = 2. Reading from the grid gives **x ≈ 1.7, y ≈ 2.3**.

Algebra confirms it. Substitute y = 9 − 4x into 2y = x + 3: 18 − 8x = x + 3, so 9x = 15 and x = 5/3, then y = 9 − 20/3 = 7/3. As decimals these are 1.67 and 2.33, which agrees with the graph reading.

When a question says "use a graph", an algebraic answer on its own does not answer it. When it says "solve algebraically", a graph reading does not answer it.

## Extension only: one linear and one quadratic equation

A line can meet a curve in two points, one point or none, so a pair of equations of this kind can have two solutions, one solution or no real solutions.

Method:

1. Rewrite the linear equation as y = … (or x = …).
2. Replace y in the quadratic with that expression, in brackets.
3. Rearrange into ax² + bx + c = 0 and solve it.
4. Put **each** x-value back into the **linear** equation to find its y-value.
5. Write the answers as matched pairs.

Use the linear equation for step 4. Using the quadratic equation can produce extra values that do not belong to the pair.

### Worked example 5: a parabola and a line

Solve y = x² − 5x + 4 and y = 2x − 6.

```
x² − 5x + 4 = 2x − 6
x² − 7x + 10 = 0
(x − 2)(x − 5) = 0
x = 2 or x = 5
y = 2(2) − 6 = −2   and   y = 2(5) − 6 = 4
Check in the curve: 4 − 10 + 4 = −2 ✓   25 − 25 + 4 = 4 ✓
```

**(2, −2) and (5, 4)**

### Worked example 6: the linear equation needs rearranging first

Solve x + 2y = 4 and y = x² − 3.

```
Substitute y = x² − 3 into x + 2y = 4:
x + 2(x² − 3) = 4
2x² + x − 10 = 0
(2x + 5)(x − 2) = 0
x = −5/2 or x = 2
y = x² − 3:  y = 25/4 − 3 = 13/4   and   y = 4 − 3 = 1
Check in the linear equation: −5/2 + 13/2 = 4 ✓   2 + 2 = 4 ✓
```

**(−5/2, 13/4) and (2, 1)**

Here the curve is the equation that gives y, so you may substitute it into the line. Take care to multiply the bracket by 2 as well as writing the x term.

### Worked example 7: when the quadratic does not factorise

Solve 2x + y = 3 and y = x² + x − 4, giving answers to 3 significant figures.

```
y = 3 − 2x
3 − 2x = x² + x − 4
x² + 3x − 7 = 0
x = (−3 ± √(9 + 28)) / 2 = (−3 ± √37) / 2
x = 1.54 or x = −4.54
y = 3 − 2x:  y = −0.0828  or  y = 12.1
```

**(1.54, −0.0828) and (−4.54, 12.1)**

The exact values are x = (−3 ± √37)/2. Keep exact values in your working and round only at the end.

### How many solutions?

After substituting, look at the discriminant b² − 4ac of the quadratic you obtain.

| b² − 4ac | Meaning |
|---|---|
| positive | the line cuts the curve in two points |
| zero | the line touches the curve at one point |
| negative | the line and curve do not meet |

Example: y = 2x − 5 and y = x² − 4x + 4 give x² − 6x + 9 = 0, which is (x − 3)² = 0. The only solution is x = 3, y = 1, so the line touches the curve.

Example: y = x² + 1 and y = 2x − 3 give x² − 2x + 4 = 0. Here b² − 4ac = 4 − 16 = −12, which is negative, so there is no real solution.

### Graphical version

You can also solve a linear-quadratic pair by plotting the curve and the line and reading the crossing points. For y = x² − 4x + 1 and y = x − 2:

| x | −1 | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|
| y = x² − 4x + 1 | 6 | 1 | −2 | −3 | −2 | 1 | 6 |
| y = x − 2 | −3 | −2 | −1 | 0 | 1 | 2 | 3 |

Draw a smooth curve through the first row of points and a straight line through the second. The crossings are at about x = 0.7 and x = 4.3. Algebra gives x² − 5x + 3 = 0, so x = (5 ± √13)/2, which is 0.697 and 4.30 to 3 significant figures.

## Common errors

* Subtracting only one side of an equation, or forgetting to multiply the right-hand side when scaling.
* Using the wrong operation for the signs: adding like signs or subtracting unlike ones.
* Substituting without brackets, for example writing 2x + 5 × 3x − 4.
* Stopping after finding one letter.
* Solving a linear-quadratic pair but pairing x-values with the wrong y-values.
* Giving only one solution when a line meets a curve twice.
* Reading a graph without a ruler and stating more decimal places than the scale supports.

## Check yourself

Try the [practice questions](/resources/oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-practice/), then use the [revision notes](/resources/oxfordaqa-igcse-mathematics-simultaneous-equations-linear-and-linear-quadratic-revision-notes/) to recall the methods quickly. The [diagnostics](/diagnostics/) show where to focus next.

## Official syllabus

OxfordAQA International GCSE Mathematics (9260), Version 5.1, for exams May/June 2018 onwards, published by OxfordAQA. This page follows section 3.2.3, statement A21.
