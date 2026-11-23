---
title: "OCR GCSE Mathematics (J560): Algebraic inequalities"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 6 – Algebra"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 6.4
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-ocr-gcse-maths"
    subtopic: "algebraic-inequalities-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 6.04 in depth: inequality symbols, linear and quadratic inequalities, number lines, set notation and graph regions."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 6.04, Algebraic inequalities, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Using the symbols and solving linear inequalities on a number line are for **both tiers**. Quadratic inequalities, set notation and inequalities in two variables are **Higher tier only** and are labelled.

The [inequalities and the language of functions guide](/resources/ocr-gcse-mathematics-inequalities-and-the-language-of-functions/) introduces 6.04 alongside functions. This page goes further on 6.04 alone: turning words into inequalities, why the sign reverses, inequalities with brackets and fractions, a double inequality with a negative coefficient, the x² > k trap, and working backwards from a region to its inequalities. Condense it with the [6.04 revision notes](/resources/ocr-gcse-mathematics-j560-algebraic-inequalities-revision-notes/) and test yourself with the [6.04 practice questions](/resources/ocr-gcse-mathematics-j560-algebraic-inequalities-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 6.04a | Understand and use the symbols <, ≤, > and ≥ | Both tiers |
| 6.04a | Solve linear inequalities in one variable, showing solutions on a number line using the conventional notation, for example 2x + 1 ≥ 7 and 1 < 3x − 5 ≤ 10 | Both tiers |
| 6.04a | Solve quadratic inequalities in one variable, for example x² − 2x > 3 | Higher tier only |
| 6.04a | Express solutions in set notation | Higher tier only |
| 6.04b | Solve several linear inequalities in two variables, representing the solution set on a graph | Higher tier only |

OCR's specification writes set notation with a vertical bar, with examples {x | x ≥ 3} and {x | 2 < x ≤ 5}. Read the bar as "such that": "the set of x such that x is at least 3". That is the form used on this page.

## Symbols and words

| Symbol | Meaning | Words that often signal it |
|---|---|---|
| x < 5 | x is less than 5 | fewer than, below, under |
| x ≤ 5 | x is less than or equal to 5 | at most, no more than, maximum of |
| x > 5 | x is greater than 5 | more than, over, exceeds |
| x ≥ 5 | x is greater than or equal to 5 | at least, no less than, minimum of |

**Number line convention.** An open (empty) circle means the end value is not included (< or >). A filled circle means it is included (≤ or ≥). An arrow shows the solution carries on for ever in that direction; a segment between two circles shows a double inequality.

**Worked example 1.** A taxi fare is £(3 + 2d) for a journey of d miles. Ravi can spend no more than £15. Write and solve an inequality for d.

```
3 + 2d ≤ 15
2d ≤ 12
d ≤ 6
```

Ravi can travel at most 6 miles. On a number line: a filled circle at 6 with an arrow to the left (in context, d must also be positive).

## Solving linear inequalities

Treat an inequality like an equation, with one extra rule: **multiplying or dividing both sides by a negative number reverses the sign**.

Why? Start with 3 > 1, which is true. Multiply both sides by −1: −3 and −1. Now −3 is less than −1, so the true statement is −3 < −1. The sign has to turn round to stay true. Adding, subtracting, and multiplying or dividing by a positive number never change the direction.

A neat way to avoid the rule is to collect the x terms on the side where the coefficient stays positive.

**Worked example 2.** Solve 2(x − 5) < 5x + 8.

```
2x − 10 < 5x + 8
−10 − 8 < 5x − 2x       (move 2x right so x stays positive)
−18 < 3x
−6 < x,   that is  x > −6
```

**Worked example 3 (fractions).** Solve (3x − 1)/2 ≥ x + 4.

```
3x − 1 ≥ 2(x + 4)       (multiply both sides by 2, a positive number)
3x − 1 ≥ 2x + 8
x ≥ 9
```

Multiply the whole right-hand side by 2, bracket included. Forgetting to multiply the 4 is the commonest slip.

### Double inequalities

Do the same thing to all three parts.

**Worked example 4.** Solve 5 ≤ 11 − 2x < 17 and list the integer solutions.

```
5 − 11 ≤ −2x < 17 − 11
−6 ≤ −2x < 6
3 ≥ x > −3              (divide by −2: both signs reverse)
−3 < x ≤ 3
```

The integers are −2, −1, 0, 1, 2 and 3. On a number line: an open circle at −3, a filled circle at 3 and a line joining them. Rewriting the answer with the smaller number on the left makes it easier to read and to draw.

## Quadratic inequalities (Higher tier only)

Do not try to "square root both sides" or divide through as for a linear inequality. Instead:

1. Rearrange so one side is 0.
2. Factorise (or use the quadratic formula) to find the critical values.
3. Sketch the parabola and read off where it is above or below the x-axis.

**Worked example 5 (the specification's example, Higher tier only).** Solve x² − 2x > 3. Give the answer in set notation.

```
x² − 2x − 3 > 0
(x − 3)(x + 1) > 0
critical values: x = 3 and x = −1
```

The curve y = (x − 3)(x + 1) is a U shape crossing the x-axis at −1 and 3. It is above the axis (greater than 0) outside the roots, so x < −1 or x > 3. In set notation: {x | x < −1} ∪ {x | x > 3}.

Two separate pieces need "or" (or the union symbol ∪). Writing −1 > x > 3 is wrong, because no number is both less than −1 and greater than 3.

**Worked example 6 (Higher tier only).** Find the integers that satisfy x² ≤ 2x + 15.

```
x² − 2x − 15 ≤ 0
(x − 5)(x + 3) ≤ 0
−3 ≤ x ≤ 5,   set notation {x | −3 ≤ x ≤ 5}
```

The curve is below or on the axis between the roots, so there is one interval. The integers are −3, −2, −1, 0, 1, 2, 3, 4 and 5, which is 9 values.

**The x² > k trap.** x² > 9 does not mean x > ±3. The curve y = x² − 9 is above the axis outside ±3, so x < −3 or x > 3. Likewise x² < 9 gives −3 < x < 3.

## Inequalities in two variables (Higher tier only)

Each inequality is a region on one side of a boundary line.

- ≤ or ≥: draw the boundary as a **solid** line (points on it are included).
- < or >: draw it **dashed** (points on it are not included).
- Test a point that is not on the line, such as (0, 0), to decide which side you want.

Questions may ask you to shade the required region (or shade the unwanted regions and label R, as the question instructs) or to work backwards from a drawn region.

**Worked example 7 (working backwards, Higher tier only).** A region R is the triangle with vertices (1, 1), (1, 5) and (3, 3). Its sides lie on x = 1 (solid), y = x (dashed) and x + y = 6 (solid). Write the three inequalities that define R, then list the points with integer coordinates in R.

Pick a point clearly inside, such as (2, 3).

```
x = 1:      2 ≥ 1, so R satisfies x ≥ 1
y = x:      3 > 2, so R satisfies y > x          (dashed, so strict)
x + y = 6:  5 ≤ 6, so R satisfies x + y ≤ 6
```

Integer points: when x = 1, y can be 2, 3, 4 or 5; when x = 2, y can be 3 or 4; when x = 3, y > 3 and y ≤ 3 cannot both hold. So R contains (1, 2), (1, 3), (1, 4), (1, 5), (2, 3) and (2, 4). The point (1, 1) is excluded because it lies on the dashed line.

## Common mistakes

- Forgetting to reverse the sign after multiplying or dividing by a negative number.
- Reversing the sign when it is not needed, such as after subtracting a number.
- Using a filled circle for < or >, or an open circle for ≤ or ≥.
- Listing integer solutions that include an excluded end point.
- Writing "x > ±3" for x² > 9, or joining two separate intervals into one impossible double inequality.
- Drawing every boundary line solid, whatever the symbol.
- Giving the answer as an equation (x = 4) rather than an inequality.

## Exam technique for OCR command words

- **Solve**: give the final answer as an inequality in x, not just a number.
- **Show your solution on the number line**: open or filled circles at the correct values, and an arrow or segment in the right direction.
- **List** or **Write down the integers**: check each end point against the strict or inclusive symbol.
- **Give your answer in set notation** (Higher tier only): use braces and the vertical bar, and ∪ for two pieces.
- **Show the region** or **Label the region R** (Higher tier only): follow the shading instruction in the question exactly, and use dashed lines for strict inequalities.

## Next steps

- Condense the methods with the [algebraic inequalities revision notes](/resources/ocr-gcse-mathematics-j560-algebraic-inequalities-revision-notes/).
- Test yourself with the [algebraic inequalities practice questions](/resources/ocr-gcse-mathematics-j560-algebraic-inequalities-practice/).
- Revise the boundary lines in the [straight line graphs guide](/resources/ocr-gcse-mathematics-straight-line-graphs-parallel-and-perpendicular-lines/) and factorising in the [factorising and completing the square guide](/resources/ocr-gcse-mathematics-factorising-completing-the-square-and-algebraic/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 6.04, Algebraic inequalities.
