---
title: "Cambridge O Level Mathematics (4024): Exponential growth and decay"
seoTitle: "O Level Maths 4024 Exponential Growth and Decay Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Number"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 1.17
syllabusTopics:
  - qualification: "o-level"
    topic: "number"
  - qualification: "o-level"
    topic: "number"
    subtopic: "exponential-growth-and-decay-4024"
description: "Cambridge O Level Maths 4024 subtopic 1.17 in depth: growth and decay by a constant multiplier, depreciation, population change, doubling, halving and finding the number of periods."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers subtopic **1.17 Exponential growth and decay** in Topic 1, Number, of Cambridge O Level Mathematics (Syllabus D) 4024, 2025 to 2027 series. Exponential change happens when a quantity is multiplied by the same factor in each equal period. The [Number revision notes](/resources/o-level-mathematics-number-revision-notes/) give a brief summary. This page explains the model, the multiplier for any rate, and how to find a value, a rate or a number of periods.

Companion pages: the [Exponential growth and decay revision notes](/resources/cambridge-o-level-mathematics-4024-exponential-growth-and-decay-revision-notes/) and the [Exponential growth and decay practice questions](/resources/cambridge-o-level-mathematics-4024-exponential-growth-and-decay-practice/).

## What the syllabus asks

The syllabus asks you to use exponential growth and decay. Its examples are depreciation and population change. It also states that knowledge of e is **not required**. So all the work uses a simple repeated multiplier, with the same ideas as compound interest in the percentages subtopic.

## The model

If a quantity starts at a value A and is multiplied by a constant factor r each period, then after n periods it is

```
value = A x r^n
```

- If r > 1, the quantity grows (**exponential growth**).
- If 0 < r < 1, the quantity decreases (**exponential decay**).

The factor r is the **multiplier**. For a percentage change:

| Change per period | Multiplier r | Type |
|---|---|---|
| increase by 2.5% | 1.025 | growth |
| increase by 100% (doubling) | 2 | growth |
| decrease by 15% | 0.85 | decay |
| decrease by 50% (halving) | 0.5 | decay |
| decrease by 8% | 0.92 | decay |

The period must match the rate. A rate of 5% per year is applied once per year, so n is the number of years.

### How it differs from linear change

Linear change adds the same **amount** each period. Exponential change multiplies by the same **factor**, so the amount added grows when the quantity grows. Compare $1 200 increased by 10% of the original each year (linear) with $1 200 increased by 10% of the current value each year (exponential):

```
after 3 years, linear:      1200 + 3 x 120 = $1 560
after 3 years, exponential: 1200 x 1.1^3 = $1 597.20
```

The exponential result is higher. The longer the time, the larger the gap.

## Growth

**Worked example (population).** A town has population 12 000 and grows by 2.5% each year. Find its population after 10 years.

```
multiplier = 1.025
population = 12 000 x 1.025^10
           = 12 000 x 1.28008...
           = 15 361.01...
```

The population is about 15 361, or 15 400 to 3 significant figures. A population is a whole number, so round to the nearest person if asked.

**Worked example (doubling).** A culture has 500 bacteria, and the number doubles every 3 hours. Find the number after 12 hours.

```
12 hours = 4 periods of 3 hours
number = 500 x 2^4 = 500 x 16 = 8 000
```

Notice that the period is 3 hours, so n is 4, not 12.

**Worked example (value of a house).** A house is worth $250 000 and rises in value by 4% each year. Find its value after 3 years.

```
250 000 x 1.04^3 = $281 216
```

## Decay

**Worked example (depreciation).** A car costs $18 000 and loses 15% of its value each year. Find its value after 3 years.

```
multiplier = 0.85
value = 18 000 x 0.85^3
      = 18 000 x 0.614125
      = $11 054.25
```

**Worked example (halving).** A sample of 640 g of a substance halves in mass every 4 days. Find the mass after 12 days.

```
12 days = 3 periods
mass = 640 x 0.5^3 = 640 x 0.125 = 80 g
```

**Worked example (population decline).** A population of 60 000 falls by 5% per year. Find the population after 4 years.

```
60 000 x 0.95^4 = 60 000 x 0.81450625 = 48 870.375
```

To the nearest whole number this is 48 870.

## Finding the percentage rate from two values

If a quantity changes by a constant percentage each period, you can find the multiplier by comparing values.

**Worked example.** The value of a machine falls from $8 000 to $5 832 in 3 years, by the same percentage each year. Find the yearly percentage decrease.

```
r^3 = 5832 ÷ 8000 = 0.729
0.9 x 0.9 x 0.9 = 0.729, so r = 0.9
decrease = 1 - 0.9 = 0.1 = 10% per year
```

When the numbers do not work out as neatly, the calculator can find the cube root: r = 0.729^(1/3) = 0.9.

## Finding the number of periods by trial

Without logarithms, find the number of periods by trying values of n in order. This is what the syllabus expects.

**Worked example.** $3 000 is invested at 8% compound interest. After how many whole years will it first be worth more than $6 000?

```
multiplier 1.08
n = 8:  3000 x 1.08^8  = 5 552.79
n = 9:  3000 x 1.08^9  = 5 997.01     (just under 6 000)
n = 10: 3000 x 1.08^10 = 6 476.77     (over 6 000)
```

The answer is 10 years. Show two or three lines so the examiner can see that 9 years is not enough.

**Worked example.** Equipment worth $40 000 loses 20% of its value each year. After how many whole years will its value first be less than half the original?

```
multiplier 0.8, half of 40 000 is 20 000
n = 3: 40 000 x 0.8^3 = 20 480    (still above 20 000)
n = 4: 40 000 x 0.8^4 = 16 384    (below)
```

The answer is 4 years.

## Writing the general formula

**Worked example.** An investment of $P grows at r% compound per year. Write an expression for its value after n years.

```
value = P x (1 + r/100)^n
```

For a decrease, use (1 - r/100). Always check that your multiplier makes sense: 1 + 0.05 = 1.05 for a 5% rise, and 1 - 0.05 = 0.95 for a 5% fall.

## Two stages with different rates

Multiply the stages in order, using the right multiplier and the right number of periods for each.

**Worked example.** $1 000 grows at 5% per year for 2 years and then at 3% per year for 3 years. Find the final value.

```
1000 x 1.05^2 x 1.03^3 = 1000 x 1.1025 x 1.092727 = $1 204.73
```

## Using the calculator

Use the power key. Enter the whole expression at once, such as 12000 × 1.025^10. Keep the full display until the end. Round money to the nearest cent, populations to whole numbers, and other values to 3 significant figures unless told otherwise.

## The shape of exponential change

Plot the value against the number of periods. A growth graph starts at A and rises more and more steeply, because each period adds more than the one before. A decay graph starts at A and falls quickly at first, then more and more slowly, because each period removes less than the one before. A decay graph never reaches zero, however long the time. These shapes link to the graphs of functions in the algebra and graphs topic.

For doubling and halving, a short table helps you check results without a calculator:

```
n:      0    1    2    3    4     5
2^n:    1    2    4    8    16    32
0.5^n:  1  0.5 0.25 0.125 0.0625 0.03125
```

## Exam technique

- Write the multiplier before you calculate. This earns the method mark even if the arithmetic is wrong.
- Match the period to the rate: halving every 4 days means n counts lots of 4 days.
- For "after how many years", show a table of values around the answer.
- State the type of answer: whole years, whole people, money to the nearest cent.
- Use the multiplier from the right direction: decay needs a number less than 1.
- Do not calculate the percentage on the original amount each time. That would be linear change.

## Common mistakes

- Using 1.5 for a 5% increase instead of 1.05.
- Using n = 12 hours instead of n = 4 periods.
- Multiplying the change by n: 18 000 × (1 - 0.15 × 3) is linear and wrong.
- Using 0.15 as the multiplier for a 15% decrease instead of 0.85.
- Stopping at the first value above the target without checking the one before it.
- Rounding the multiplier in the middle of a calculation.

## Where this leads

Exponential change is the model behind compound interest, population studies and depreciation, and it returns in index equations and in graphs of functions of the form y = ab^x. It also strengthens the percentage multiplier idea used throughout the course.
