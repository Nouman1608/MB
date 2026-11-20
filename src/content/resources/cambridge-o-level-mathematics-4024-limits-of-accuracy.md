---
title: "Cambridge O Level Mathematics (4024): Limits of accuracy"
seoTitle: "O Level Maths 4024 Limits of Accuracy Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Number"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 1.1
syllabusTopics:
  - qualification: "o-level"
    topic: "number"
  - qualification: "o-level"
    topic: "number"
    subtopic: "limits-of-accuracy-4024"
description: "Cambridge O Level Maths 4024 subtopic 1.10 in depth: upper and lower bounds of rounded data and of sums, differences, products, quotients, perimeters, areas and speeds."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers subtopic **1.10 Limits of accuracy** in Topic 1, Number, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027 series. When a measurement is rounded, the true value could be anywhere in a small range. Bounds describe that range. The [Number revision notes](/resources/o-level-mathematics-number-revision-notes/) give a brief summary of the topic. This page explains how to write the bounds of a rounded value and how to find bounds of the result of a calculation.

Companion pages: the [Limits of accuracy revision notes](/resources/cambridge-o-level-mathematics-4024-limits-of-accuracy-revision-notes/) and the [Limits of accuracy practice questions](/resources/cambridge-o-level-mathematics-4024-limits-of-accuracy-practice/).

## What the syllabus asks

The syllabus asks you to:

1. give upper and lower bounds for data rounded to a specified accuracy
2. find upper and lower bounds of the results of calculations which have used data rounded to a specified accuracy.

Its example calculations include the upper bound of the perimeter or the area of a rectangle with dimensions measured to the nearest centimetre, and the lower bound of a speed found from rounded values of distance and time. You need the earlier skills of rounding and of the speed formula.

## Bounds of a rounded value

If a value has been rounded, the true value could be a little below or a little above it. The **lower bound** is the smallest value that would round to the stated number. The **upper bound** is the boundary at the top end. The rule is:

> Half of the rounding unit goes below and half goes above.

| Value | Rounded to | Half unit | Lower bound | Upper bound |
|---|---|---|---|---|
| 7 m | nearest metre | 0.5 | 6.5 | 7.5 |
| 4.3 kg | 1 decimal place | 0.05 | 4.25 | 4.35 |
| 12.0 cm | 1 decimal place | 0.05 | 11.95 | 12.05 |
| 5 600 | nearest 100 | 50 | 5 550 | 5 650 |
| 3 200 | 2 significant figures | 50 | 3 150 | 3 250 |
| 0.045 | 2 significant figures | 0.0005 | 0.0445 | 0.0455 |

To find the half unit, identify the place value of the last digit that was rounded. For 4.3 the last digit is in the tenths column (0.1), so the half unit is 0.05. For 3 200 to 2 significant figures the last significant digit is the hundreds digit (100), so the half unit is 50.

### Error interval notation

The true value lies in an interval. The lower bound is included and the upper bound is **not**, because a value exactly on the upper bound would round up to the next number.

```
x = 7 to the nearest metre:   6.5 ⩽ x < 7.5
m = 4.3 to 1 d.p.:            4.25 ⩽ m < 4.35
```

Check with 4.35: it rounds up to 4.4, so it is not part of the interval. In calculations the upper bound is treated as if it could be reached, because the exact value can get as close as we like to it.

**Worked example.** A length is 12.5 to 1 decimal place. Can it equal 12.55?

```
12.45 ⩽ L < 12.55
12.55 is the upper bound and is not included, so L cannot equal 12.55.
```

## Bounds of calculations

To find the largest or smallest result, choose the bounds that push the result in the right direction.

| Calculation | Upper bound of result uses | Lower bound of result uses |
|---|---|---|
| a + b | upper a, upper b | lower a, lower b |
| a - b | upper a, **lower** b | lower a, **upper** b |
| a × b (positive) | upper a, upper b | lower a, lower b |
| a ÷ b (positive) | upper a, **lower** b | lower a, **upper** b |

For a subtraction, you make the answer as big as possible by taking the largest first number and subtracting the smallest second number. For a division, a big top and a small bottom make the quotient large.

## Perimeter and area of a rectangle

**Worked example.** A rectangle has length 15 cm and width 9 cm, both measured to the nearest centimetre. Find the upper and lower bounds of its perimeter and its area.

```
length: 14.5 ⩽ l < 15.5
width:   8.5 ⩽ w < 9.5

Perimeter = 2(l + w)
upper: 2(15.5 + 9.5) = 50 cm
lower: 2(14.5 + 8.5) = 46 cm

Area = l x w
upper: 15.5 x 9.5 = 147.25 cm^2
lower: 14.5 x 8.5 = 123.25 cm^2
```

## Sums in context

**Worked example.** Each of three parcels has mass 2.4 kg to 1 decimal place. Find the bounds of the total mass.

```
each: 2.35 ⩽ m < 2.45
upper total: 3 x 2.45 = 7.35 kg
lower total: 3 x 2.35 = 7.05 kg
```

## Differences

**Worked example.** a = 9.6 and b = 3.9, both to 1 decimal place. Find the upper and lower bounds of a - b.

```
a: 9.55 ⩽ a < 9.65     b: 3.85 ⩽ b < 3.95

upper bound of a - b = upper a - lower b = 9.65 - 3.85 = 5.8
lower bound of a - b = lower a - upper b = 9.55 - 3.95 = 5.6
```

### Deducing an answer to a stated accuracy

Because both bounds, 5.6 and 5.8, round to 6 when given to 1 significant figure, the value of a - b is 6 to 1 significant figure. If the bounds had rounded differently (for example, 5.4 and 5.6 round to 5 and 6), then you could not give an answer to that accuracy.

## Speed, distance and time

Speed is distance divided by time. The smallest possible speed uses the smallest distance and the largest time.

**Worked example.** A cyclist travels 45 km, measured to the nearest kilometre, in 3.8 hours, measured to 1 decimal place. Find the lower and upper bounds of the average speed.

```
distance: 44.5 ⩽ d < 45.5
time:     3.75 ⩽ t < 3.85

lower speed = 44.5 ÷ 3.85 = 11.558... km/h
upper speed = 45.5 ÷ 3.75 = 12.133... km/h
```

The speed is between 11.56 km/h and 12.13 km/h to 2 decimal places. The lower speed uses the largest time because dividing by a bigger number gives a smaller result.

## Quotients

**Worked example.** a = 18.4 and b = 2.3, both to 1 decimal place. Find the bounds of a ÷ b and deduce a ÷ b to 1 significant figure.

```
a: 18.35 ⩽ a < 18.45     b: 2.25 ⩽ b < 2.35

upper = 18.45 ÷ 2.25 = 8.2
lower = 18.35 ÷ 2.35 = 7.8085...
```

Both bounds round to 8 to 1 significant figure, so a ÷ b = 8 to 1 significant figure.

## Using bounds to decide on accuracy

A common question asks: "Give a ÷ b to an accuracy that you can be sure about." Find both bounds, round each to the same number of significant figures and keep increasing the number of figures until they stop agreeing. The answer is the **greatest accuracy** at which both bounds round to the same value. If the bounds are 7.8085 and 8.2, they agree at 1 significant figure (8) but not at 2 (7.8 and 8.2).

## Exam technique

- Write each rounded value as an inequality with its lower and upper bounds before you start calculating. This earns method marks.
- Choose the combination that makes the result as large or small as required, and write which bounds you used.
- Do not round the bounds. Use exact values, as in 11.558..., and then round at the end.
- If the question asks for the upper bound, give the boundary value even though it is not included in the interval.
- Keep the units.

## Common mistakes

- Using ±1 instead of half of the rounding unit.
- Using the upper bound of both numbers in a subtraction or division, which does not give the largest result.
- Using the wrong place column for the half unit (for example 0.5 instead of 0.05 for 1 decimal place).
- Mixing up decimal place and significant figure rounding units.
- Rounding the bounds before calculating.
- Giving the error interval with ⩽ at the upper end.

## Where this leads

Bounds are used in speed, density and area problems and in trigonometry and mensuration questions where measurements are given to a stated accuracy. They also reinforce estimation and rounding from the previous subtopic.
