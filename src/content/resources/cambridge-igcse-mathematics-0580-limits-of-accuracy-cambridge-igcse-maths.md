---
title: "Cambridge IGCSE Mathematics (0580): Limits of accuracy"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 1 – Number"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 1.10
syllabusTopics:
  - qualification: "igcse"
    topic: "number-cambridge-igcse-maths"
    subtopic: "limits-of-accuracy-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 1.10: upper and lower bounds of rounded data for Core, and bounds of sums, differences, products and quotients for Extended."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **1.10 Limits of accuracy** in Topic 1 Number of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. Both tiers study it, but the tiers go to different depths:

- **Core (C1.10):** give upper and lower bounds for data rounded to a specified accuracy. The syllabus notes say Core candidates are **not** expected to find the bounds of the results of calculations.
- **Extended (E1.10):** the same, plus find upper and lower bounds of the results of calculations which have used rounded data, such as the perimeter or area of a rectangle, or the lower bound of a speed.

Bounds appear only briefly in the [Number revision notes](/resources/igcse-mathematics-number-revision-notes/). This page explains where the bounds come from, how to handle discrete data, and how to choose the right combination of bounds for any formula. Afterwards, use the [limits of accuracy revision notes](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths-revision-notes/) and the [limits of accuracy practice questions](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths-practice/).

## Why rounded data has bounds

If a length is recorded as 7 m "to the nearest metre", the real length is not known exactly. Any length from 6.5 m up to (but not including) 7.5 m would round to 7 m. These two values are the **lower bound** (LB) and the **upper bound** (UB):

```
6.5 <= length < 7.5
```

The lower bound uses ⩽ because 6.5 itself rounds up to 7. The upper bound uses < because 7.5 would round up to 8, so the length can get as close to 7.5 as you like without reaching it. In calculations you still use 7.5 as the upper bound: it is the limit, and no smaller number works.

## Core: finding the bounds of one value

The method is the same for every degree of accuracy:

1. Identify the **unit of rounding**: the size of the step the value was rounded to.
2. Halve it.
3. Subtract the half for the lower bound and add it for the upper bound.

| Rounded to | Unit | Half the unit |
|---|---|---|
| nearest 100 | 100 | 50 |
| nearest 5 | 5 | 2.5 |
| 1 decimal place | 0.1 | 0.05 |
| 2 significant figures, for 0.62 | 0.01 | 0.005 |
| nearest 0.5 | 0.5 | 0.25 |

For significant figures, the unit depends on the number: 0.62 to 2 s.f. is rounded to the nearest hundredth, but 6200 to 2 s.f. is rounded to the nearest hundred.

### Worked example 1 (Core)

Write down the lower and upper bounds of each value.

```
(a) mass 3700 g, to the nearest 100 g      unit 100, half 50
    3650 <= m < 3750

(b) length 0.62 m, to 2 significant figures    unit 0.01, half 0.005
    0.615 <= l < 0.625

(c) load 45 kg, to the nearest 5 kg        unit 5, half 2.5
    42.5 <= w < 47.5

(d) time 9.8 s, to 1 decimal place         unit 0.1, half 0.05
    9.75 <= t < 9.85
```

Notice in (c) that the half-unit is not always a 5 in a lower place. Read the accuracy statement, not the number of digits.

### Worked example 2 (Core): counted data

A newspaper reports that 2400 people attended a match, correct to the nearest 100. Find the smallest and largest possible numbers of people.

```
Bounds as an interval:   2350 <= n < 2450
People are counted in whole numbers.
Smallest possible number: 2350
Largest possible number:  2449
```

For a count, the largest possible value is the last whole number below the upper bound. For continuous data such as a length or a mass, the upper bound is the limit itself (as in 3750 g above), never a value just below it.

## Extended: bounds of calculations

When rounded values are put into a calculation, the result also has bounds. Choose, for each value, whichever bound pushes the result in the direction you want.

| To find the | Addition a + b | Subtraction a − b | Multiplication a × b | Division a ÷ b |
|---|---|---|---|---|
| upper bound | UB + UB | UB − LB | UB × UB | UB ÷ LB |
| lower bound | LB + LB | LB − UB | LB × LB | LB ÷ UB |

The rule behind the table: to make a result as large as possible, make what you add or multiply as large as possible, and make what you subtract or divide by as **small** as possible. The table assumes the values are positive, as measurements are.

### Worked example 3 (Extended): perimeter and area

A rectangle measures 12 cm by 8 cm, each correct to the nearest centimetre. Find (a) the upper bound of the perimeter, (b) the lower and upper bounds of the area.

```
Length: 11.5 <= l < 12.5        Width: 7.5 <= w < 8.5

(a) UB perimeter = 2 × (12.5 + 8.5) = 2 × 21 = 42 cm

(b) LB area = 11.5 × 7.5 = 86.25 cm^2
    UB area = 12.5 × 8.5 = 106.25 cm^2
```

Give bounds of a calculation in full unless the question asks for rounding. Rounding the lower bound 86.25 up to 86.3 would give a value above the true lower bound, so it would no longer be the smallest possible area.

### Worked example 4 (Extended): lower bound of a speed

A runner covers 200 m, correct to the nearest 10 m, in 24.6 seconds, correct to 1 decimal place. Find the lower bound of the average speed.

```
Distance: 195 <= d < 205         Time: 24.55 <= t < 24.65

speed = distance ÷ time
LB speed = LB distance ÷ UB time
         = 195 ÷ 24.65
         = 7.9107...
         = 7.91 m/s (3 s.f.)
```

The slowest possible speed comes from the shortest distance taking the longest time. A common error is LB ÷ LB, which gives 195 ÷ 24.55 = 7.94 m/s and loses the accuracy mark.

### Worked example 5 (Extended): a formula with three values

a = 17.3 and b = 4.7, each correct to 1 decimal place, and c = 3, correct to the nearest whole number. Find the upper and lower bounds of (a − b) ÷ c.

```
a: 17.25 to 17.35      b: 4.65 to 4.75      c: 2.5 to 3.5

UB: make (a - b) as large as possible and c as small as possible
    (17.35 - 4.65) ÷ 2.5 = 12.7 ÷ 2.5 = 5.08

LB: make (a - b) as small as possible and c as large as possible
    (17.25 - 4.75) ÷ 3.5 = 12.5 ÷ 3.5 = 3.571... = 3.57 (3 s.f.)
```

Work from the outside in. The outer operation is division, so the numerator needs its UB and c its LB; then the numerator is a subtraction, so a needs its UB and b its LB.

## Common mistakes

- Adding a whole unit instead of half: 7 m to the nearest metre does not have an upper bound of 8 m.
- Writing the upper bound as 7.49 or 7.4999 for continuous data. The upper bound is 7.5.
- Using the digits shown instead of the stated accuracy: 45 to the nearest 5 has bounds 42.5 and 47.5, not 44.5 and 45.5.
- (Extended) Using UB − UB or UB ÷ UB for an upper bound. Subtraction and division need the opposite bound for the second value.
- (Extended) Rounding the bounds of the inputs before calculating, or rounding a final bound when the question did not ask.
- (Extended) Forgetting to find the bounds of each measurement before substituting into a formula.

## Exam technique for the command words

- **Write down** the upper or lower bound: a single value, no working needed, but the half-unit must be correct.
- **Write** the bounds **as an inequality** or error interval: use ⩽ on the left and < on the right, with the variable in the middle.
- **Calculate** or **Work out** the bound of a result (Extended): show the bounds you are using, such as "195 ÷ 24.65", so that a method mark is available even if the arithmetic slips.
- **Explain** a choice of bounds: say which bound of each value you used and why, for example "the smallest distance divided by the largest time gives the smallest speed".

## Next steps

- Condensed rules and a self-test: the [limits of accuracy revision notes](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths-revision-notes/).
- Exam-style questions with mark schemes: the [limits of accuracy practice questions](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths-practice/).
- Rounding to decimal places and significant figures: the [estimation study guide](/resources/cambridge-igcse-mathematics-0580-estimation-cambridge-igcse-maths/).
- Speed, density and other rates used in bounds questions: the [rates, time and money study guide](/resources/igcse-mathematics-0580-rates-time-and-money/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027 (Version 3), Cambridge University Press & Assessment. Topic 1 Number, subtopic C1.10 / E1.10 Limits of accuracy.
