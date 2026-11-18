---
title: "Cambridge IGCSE Mathematics (0580): Limits of accuracy -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 0580 subtopic 1.10 Limits of accuracy: half-unit rule, error intervals, counted data, Extended bounds of calculations and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **1.10 Limits of accuracy** of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. Core candidates need the first part only: bounds of a single rounded value. Extended candidates also find bounds of the results of calculations; those sections are labelled **(Extended)**. Full explanations are in the [limits of accuracy study guide](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths/), and exam-style questions are in the [limits of accuracy practice questions](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths-practice/).

## What each tier must do

| Tier | Statement |
|---|---|
| Core and Extended | Give upper and lower bounds for data rounded to a specified accuracy |
| Extended only | Find upper and lower bounds of the results of calculations which have used data rounded to a specified accuracy |

The Core syllabus notes state that Core candidates are not expected to find the bounds of calculation results.

## Key terms

| Term | Meaning |
|---|---|
| Lower bound (LB) | The smallest value that rounds to the given value |
| Upper bound (UB) | The limit above: values up to it, but not including it, round to the given value |
| Unit of rounding | The step the value was rounded to: 10, 0.1, 5, and so on |
| Error interval | The bounds written as an inequality, LB ⩽ x < UB |
| Continuous data | Measured data, such as length, mass and time |
| Discrete data | Counted data, such as numbers of people |

## The half-unit rule

```
LB = value - (half the unit)
UB = value + (half the unit)
```

| Value and accuracy | Half-unit | Error interval |
|---|---|---|
| 860 m, nearest 10 m | 5 | 855 ⩽ d < 865 |
| 3.4 kg, 1 d.p. | 0.05 | 3.35 ⩽ m < 3.45 |
| 0.075 litres, 2 s.f. | 0.0005 | 0.0745 ⩽ v < 0.0755 |
| 120 g, nearest 20 g | 10 | 110 ⩽ m < 130 |
| 15 cm, nearest 0.5 cm | 0.25 | 14.75 ⩽ l < 15.25 |

**Significant figures:** find the place value of the last significant figure first. 6000 to 1 s.f. is rounded to the nearest 1000, so 5500 ⩽ x < 6500.

## Why ⩽ on the left and < on the right

- The lower bound itself rounds **up** to the value, so it is included.
- The upper bound rounds up to the **next** value, so it is excluded.
- In calculations, still use the upper bound itself (for example 865, not 864.99).

## Counted (discrete) data

- 340 students, to the nearest 10: the interval is 335 ⩽ n < 345.
- Whole numbers only, so the smallest number is **335** and the largest is **344**.
- Only use "largest whole number below the upper bound" when the data must be whole numbers.

## (Extended) Bounds of calculations

**The combination table**

| Result wanted | a + b | a − b | a × b | a ÷ b |
|---|---|---|---|---|
| Maximum | UB + UB | UB − LB | UB × UB | UB ÷ LB |
| Minimum | LB + LB | LB − UB | LB × LB | LB ÷ UB |

**Memory hook:** subtraction and division **cross over**. To make a result big, subtract or divide by something small.

**Method for any formula**

1. Write down both bounds of every rounded value.
2. Look at the outermost operation and decide which bound each part needs.
3. Work inwards through brackets and fractions.
4. Substitute and calculate. Do not round the input bounds.
5. Leave the answer unrounded, or round only as the question instructs.

**Common Extended contexts**

| Quantity | Formula | Upper bound uses |
|---|---|---|
| Perimeter of a rectangle | 2(l + w) | UB of l and w |
| Area of a rectangle | l × w | UB of l and w |
| Speed | distance ÷ time | UB distance, LB time |
| Density | mass ÷ volume | UB mass, LB volume |
| Remaining length | total − piece cut off | UB total, LB piece |

Values that are exact, such as the 2 in 2(l + w) or a count stated as exact, have no bounds.

## Exam traps

- Adding a whole unit: 860 to the nearest 10 does not have an upper bound of 870.
- Writing 864.9 or 864.99 as the upper bound of a continuous measurement.
- Reading the digits instead of the accuracy statement, especially "to the nearest 5" or "to the nearest 0.5".
- Using the bounds of a count as decimals, for example 344.5 students.
- (Extended) Using UB − UB for the largest difference, or LB ÷ LB for the smallest quotient.
- (Extended) Rounding the bounds before substituting them.
- (Extended) Giving an upper bound that is rounded down, which is then no longer an upper bound.

## Self-test

1. A distance is 860 m, correct to the nearest 10 m. Write down its upper bound.
2. A mass is 3.4 kg, correct to 1 decimal place. Write down the error interval.
3. A volume is 0.075 litres, correct to 2 significant figures. Write down the lower bound.
4. A number is 6000, correct to 1 significant figure. Write down the bounds.
5. A mass is 120 g, correct to the nearest 20 g. Write down the bounds.
6. A school has 340 students, correct to the nearest 10. What is the largest possible number of students?
7. A length is 15 cm, correct to the nearest 0.5 cm. Write down the error interval.
8. (Extended) a = 64 and b = 38, each correct to the nearest whole number. Find the upper bound of a + b.
9. (Extended) p = 8.3 and q = 2.3, each correct to 1 decimal place. Find the upper bound of p − q.
10. (Extended) A square has side 6.2 cm, correct to 1 decimal place. Find the lower bound of its area.
11. (Extended) A cyclist travels 45 km, correct to the nearest km, in 2.7 hours, correct to 1 decimal place. Find the upper bound of the average speed.
12. (Extended) Which bounds of x and y give the lower bound of x ÷ y?

### Answers

1. **865 m**
2. **3.35 ⩽ m < 3.45**
3. **0.0745 litres**
4. **5500 ⩽ x < 6500**
5. **110 g and 130 g**
6. **344**
7. **14.75 ⩽ l < 15.25**
8. 64.5 + 38.5 = **103**
9. 8.35 − 2.25 = **6.1**
10. 6.15² = **37.8225 cm²**
11. 45.5 ÷ 2.65 = 17.169... = **17.2 km/h** (3 s.f.)
12. **Lower bound of x ÷ upper bound of y**

## Where to go next

- Worked examples, including three-value formulas: the [limits of accuracy study guide](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths/).
- Exam-style questions for both tiers: the [limits of accuracy practice questions](/resources/cambridge-igcse-mathematics-0580-limits-of-accuracy-cambridge-igcse-maths-practice/).
- Rounding to decimal places and significant figures: the [estimation revision notes](/resources/cambridge-igcse-mathematics-0580-estimation-cambridge-igcse-maths-revision-notes/).
- All of Topic 1: the [Number revision notes](/resources/igcse-mathematics-number-revision-notes/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (Version 3), Cambridge International. Topic 1 Number, subtopic C1.10 / E1.10 Limits of accuracy.
