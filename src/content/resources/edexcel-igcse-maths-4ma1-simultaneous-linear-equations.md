---
title: "Edexcel International GCSE Mathematics A 4MA1: Simultaneous linear equations -- Study Guide"
seoTitle: "Edexcel IGCSE Maths 4MA1 Simultaneous Equations Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Simultaneous linear equations"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 2
syllabusTopics:
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "equations-formulae-and-identities-edexcel-igcse-maths"
    subtopic: "simultaneous-linear-equations-edexcel-igcse-maths"
description: "Study guide for Edexcel IGCSE Maths A 4MA1 section 2.6: solving simultaneous linear equations by elimination and substitution, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide covers section **2.6 Simultaneous linear equations** in Topic 2 (Equations, formulae and identities) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), for the January and June series examined on that specification. Statement 2.6A is on both tiers. Statement 2.6B, reading the equations as straight lines that meet at the solution, is **Higher tier only**. A calculator may be used on every 4MA1 paper (1F, 2F, 1H and 2H), but this topic is marked on method, so every step needs to be written down.

When you have worked through it, test your recall with the [revision notes](/resources/edexcel-igcse-maths-4ma1-simultaneous-linear-equations-revision-notes/) and then try the [practice questions](/resources/edexcel-igcse-maths-4ma1-simultaneous-linear-equations-practice/). The [Edexcel IGCSE Mathematics course hub](/boards/edexcel/igcse/mathematics/) links the rest of the course, and the [printable checklist](/checklists/edexcel/igcse/mathematics/) lists every specification statement. If expanding brackets or collecting like terms still slows you down, revise those first with the [algebraic manipulation revision notes](/resources/edexcel-igcse-mathematics-algebraic-manipulation-revision-notes/).

## What this section covers

| Spec | What you must be able to do | Tier |
|---|---|---|
| 2.6A | Calculate the exact solution of two simultaneous equations in two unknowns | Both tiers |
| 2.6B | Interpret the equations as lines and the common solution as the point of intersection | Higher tier only |

The Foundation examples in the specification have small coefficients, where at most one equation needs multiplying. The Higher example needs both equations multiplied before you can eliminate. The skill is the same; the numbers get harder.

Solving one linear and one quadratic equation together is a separate Higher tier statement, 2.7D, under quadratic equations. It is not part of this section.

## What "simultaneous" and "exact" mean

A single equation such as x + y = 10 has endless solutions: (1, 9), (2.5, 7.5), (−3, 13) and so on. A second equation, such as x − y = 4, also has endless solutions. **Simultaneous** means you want the pair of values that makes **both** equations true at the same time. Here that pair is x = 7, y = 3.

**Exact** means you give the values precisely. If x = 1/3, write 1/3, not 0.33. Integers, fractions and terminating decimals (such as 2.5) are all exact.

There are two methods. Use whichever makes the algebra shortest.

## Method 1: elimination

The idea is to add or subtract the equations so that one letter disappears.

1. Line the equations up, with x terms, y terms and numbers in columns.
2. Make the coefficients of one letter the same size, by multiplying one or both equations.
3. If the signs of that letter are **different**, add the equations. If they are the **same**, subtract.
4. Solve the one-letter equation you get.
5. Substitute that value into either original equation to find the other letter.
6. Check both values in the equation you did not use in step 5.

### Worked example 1: add to eliminate

Solve 4x + 3y = 26 and 2x − 3y = 4.

```
 4x + 3y = 26     (1)
 2x − 3y = 4      (2)
```

The y terms are +3y and −3y: same size, different signs, so add.

```
(1) + (2):   6x = 30
              x = 5
```

Substitute into (1): 4(5) + 3y = 26, so 3y = 6 and **y = 2**.

Check in (2): 2(5) − 3(2) = 10 − 6 = 4. Correct, so **x = 5, y = 2**.

### Worked example 2: multiply one equation, then subtract

Solve 2p + 3q = 13 and 5p + q = 26.

No coefficients match yet. The quickest fix is to multiply (2) by 3 so that both equations contain 3q.

```
 2p +  3q = 13    (1)
15p +  3q = 78    (2) × 3
```

Both 3q terms are positive, so subtract.

```
(2)×3 − (1):   13p = 65
                 p = 5
```

Substitute into (2): 5(5) + q = 26, so **q = 1**.

Check in (1): 2(5) + 3(1) = 13. Correct, so **p = 5, q = 1**.

Notice that the subtraction was set up as (2)×3 − (1), so the p term stays positive. That avoids dividing by a negative.

### Worked example 3: multiply both equations

Solve 4x + 3y = 5 and 6x − 5y = 17.

Neither coefficient divides the other, so multiply both equations. To eliminate x, use the lowest common multiple of 4 and 6, which is 12.

```
 4x + 3y = 5      (1)
 6x − 5y = 17     (2)

12x +  9y = 15    (1) × 3
12x − 10y = 34    (2) × 2
```

The 12x terms have the same sign, so subtract.

```
(1)×3 − (2)×2:   9y − (−10y) = 15 − 34
                         19y = −19
                           y = −1
```

Substitute into (1): 4x + 3(−1) = 5, so 4x = 8 and **x = 2**.

Check in (2): 6(2) − 5(−1) = 12 + 5 = 17. Correct, so **x = 2, y = −1**.

The dangerous line is 9y − (−10y). Subtracting a negative gives +10y, so the total is 19y. Write this line out in full rather than doing it in your head.

## Method 2: substitution

Substitution works best when one equation already says "y = …" or "x = …", or can easily be made to.

1. Make one letter the subject of one equation.
2. Replace that letter in the other equation with the expression, in brackets.
3. Solve the one-letter equation.
4. Substitute back to find the other letter.

### Worked example 4

Solve y = 3x − 7 and 5x + 2y = 19.

Replace y in the second equation with (3x − 7):

```
5x + 2(3x − 7) = 19
5x + 6x − 14   = 19
          11x  = 33
            x  = 3
```

Then y = 3(3) − 7 = **2**.

Check: 5(3) + 2(2) = 15 + 4 = 19. Correct, so **x = 3, y = 2**.

The brackets matter. Writing 5x + 2 × 3x − 7 loses the "2 × −7" and gives the wrong answer.

## Exact answers that are not whole numbers

Examination questions often have whole-number answers, but not always. Do not assume you have made a mistake because a fraction appears. Keep it as a fraction.

### Worked example 5

Solve 3x + 2y = 5 and 6x − 2y = −2, giving your answers exactly.

```
(1) + (2):   9x = 3
              x = 3/9 = 1/3
```

Substitute into (1): 3(1/3) + 2y = 5, so 1 + 2y = 5 and **y = 2**.

Check in (2): 6(1/3) − 2(2) = 2 − 4 = −2. Correct, so **x = 1/3, y = 2**.

If you had written x = 0.33, then 3x = 0.99 and y = 2.005, which is wrong. Rounding part-way through spoils the second value.

## Setting up the equations from a context

Word problems need you to write the equations yourself. This uses the skill in statement 2.4B, setting up linear equations from given data, together with 2.6A.

1. Choose a letter for each unknown and say what it stands for, with units.
2. Write one equation for each fact you are given.
3. Solve, then answer the question in words.

### Worked example 6

At a museum, 3 adult tickets and 4 child tickets cost £57. 2 adult tickets and 5 child tickets cost £52. Find the cost of one adult ticket and one child ticket.

Let an adult ticket cost £a and a child ticket cost £c.

```
3a + 4c = 57      (1)
2a + 5c = 52      (2)

6a +  8c = 114    (1) × 2
6a + 15c = 156    (2) × 3

(2)×3 − (1)×2:   7c = 42
                  c = 6
```

Substitute into (1): 3a + 24 = 57, so 3a = 33 and a = 11.

Check in (2): 2(11) + 5(6) = 22 + 30 = 52. Correct.

**An adult ticket costs £11 and a child ticket costs £6.**

End with a sentence that answers the question. "a = 11, c = 6" is not quite the same as saying what each ticket costs.

## Lines and their point of intersection (Higher tier only)

Statement 2.6B asks you to see the algebra as a graph. Every linear equation in x and y is a straight line: each point on the line is one solution of that equation. Two lines that cross meet at exactly one point, and that point lies on both lines. So **the solution of the simultaneous equations is the point of intersection of the two lines**.

### Worked example 7

The lines y = 2x − 1 and x + y = 5 are drawn on the same axes. Find the coordinates of the point where they cross.

Substitute y = 2x − 1 into x + y = 5:

```
x + (2x − 1) = 5
       3x    = 6
        x    = 2
```

Then y = 2(2) − 1 = 3. The lines cross at **(2, 3)**.

You can see this on a sketch. The line y = 2x − 1 has gradient 2 and crosses the y-axis at (0, −1). The line x + y = 5 passes through (0, 5) and (5, 0). Both pass through (2, 3).

### When there is no solution

Rearrange 4x − 2y = 6 to get y = 2x − 3. Compare it with y = 2x + 1. Both have gradient 2, but they cross the y-axis at different points. The lines are **parallel**, so they never meet, and the pair of equations has **no solution**. If you try to eliminate, both letters disappear and you get a false statement such as 0 = 8.

To compare two lines given in the form ax + by = c, rearrange each into y = mx + c first. The gradient is not the coefficient of x until y is the subject.

### A drawn graph versus algebra

A graph drawn by hand shows roughly where the lines cross, and is useful for checking. The specification asks for the **exact** solution in 2.6A, so when a question says "solve", use algebra. Read values from a graph only when the question tells you to use it.

## About your calculator

A calculator may be used on every 4MA1 paper, but calculators with built-in symbolic algebra manipulation are prohibited in all examinations. Whatever model you use, show the elimination or substitution in full. Much of the credit on simultaneous equations questions is for method, and a correct answer with no working may not earn full marks.

## Common errors

- **Adding when you should subtract.** If the letter you want to remove has the same sign in both equations, subtract. Different signs, add.
- **Multiplying only one side.** When you multiply (2) by 3, every term changes, including the number on the right.
- **Sign slips when subtracting.** −5y − (+9y) is −14y, and 9y − (−10y) is 19y. Write these lines out.
- **Dropping brackets in substitution.** 2(3x − 7) is 6x − 14, not 6x − 7.
- **Rounding a fraction too early.** Keep 1/3 as 1/3 until the end.
- **Finding one value only.** The question wants both. Substitute back.
- **Skipping the check.** Substituting into the equation you did not use catches almost every arithmetic slip, and takes ten seconds.
- **No final statement in context.** Say what each letter means in the answer: "£11 per adult ticket".
- **Reading the gradient of ax + by = c as a** (Higher tier only work). Rearrange to y = mx + c first.

## Where next

- Fix the methods in memory: [simultaneous linear equations revision notes](/resources/edexcel-igcse-maths-4ma1-simultaneous-linear-equations-revision-notes/)
- Test yourself with marked answers: [simultaneous linear equations practice questions](/resources/edexcel-igcse-maths-4ma1-simultaneous-linear-equations-practice/)
- Earlier in Topic 2: [use of symbols and algebraic manipulation](/resources/igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation/) and its [practice questions](/resources/edexcel-igcse-mathematics-algebraic-manipulation-practice/)
- Find your weaker topics: [free 10-minute diagnostics](/diagnostics/)

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification, Issue 2, November 2017, Pearson Education Limited (first assessment June 2018). Topic 2, Equations, formulae and identities, section 2.6 Simultaneous linear equations: statement 2.6A (Foundation and Higher tiers) and statement 2.6B (Higher tier only).
