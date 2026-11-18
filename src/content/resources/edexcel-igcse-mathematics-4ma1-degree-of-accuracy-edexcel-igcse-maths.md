---
title: "Pearson Edexcel International GCSE Mathematics A (4MA1): Degree of accuracy"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Numbers and the number system"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 1.08
syllabusTopics:
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
    subtopic: "degree-of-accuracy-edexcel-igcse-maths"
description: "Edexcel IGCSE Maths 4MA1 section 1.8 study guide: rounding, significant figures, upper and lower bounds, estimation and bounds problems for Higher tier."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide covers **section 1.8, Degree of accuracy**, in topic 1 (Numbers and the number system) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017). Statements 1.8 A to D are Foundation Tier content needed on both tiers. The Higher Tier adds **solving problems using upper and lower bounds**, marked **(Higher tier only)** below.

Degree of accuracy is also taught with standard form in the [degree of accuracy and standard form study guide](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form/). This page treats section 1.8 on its own, with new examples, discrete as well as continuous bounds, and a full method for choosing bounds in calculations. Afterwards, use the [section 1.8 revision notes](/resources/edexcel-igcse-mathematics-4ma1-degree-of-accuracy-edexcel-igcse-maths-revision-notes/) and the [section 1.8 practice questions](/resources/edexcel-igcse-mathematics-4ma1-degree-of-accuracy-edexcel-igcse-maths-practice/).

## What section 1.8 covers

| Statement | Students should be taught to | Tier |
|---|---|---|
| 1.8 A (Foundation) | round integers to a given power of 10 | Both |
| 1.8 B | round to a given number of significant figures or decimal places | Both |
| 1.8 C | identify upper and lower bounds where values are given to a degree of accuracy | Both |
| 1.8 D | use estimation to evaluate approximations to numerical calculations (by rounding values to 1 significant figure) | Both |
| 1.8 A (Higher) | solve problems using upper and lower bounds where values are given to a degree of accuracy | Higher only |

## Rounding to a power of 10 (1.8 A)

Look at the digit **after** the place you are rounding to: 5 or more rounds up, 4 or less rounds down. Fill the places after it with zeros so the number keeps its size.

For 3 846 509:

| Round to the nearest | Deciding digit | Answer |
|---|---|---|
| 10 | 9 (units) | 3 846 510 |
| 1000 | 5 (hundreds) | 3 847 000 |
| 100 000 | 4 (ten thousands) | 3 800 000 |
| 1 000 000 | 8 (hundred thousands) | 4 000 000 |

## Significant figures and decimal places (1.8 B)

**Decimal places** count digits after the point. **Significant figures** count from the first non-zero digit, wherever it is.

- 14.0952 to 1 d.p. = 14.1; to 3 d.p. = 14.095.
- 63 549 to 2 s.f. = 64 000 (zeros keep the place value; they are not significant).
- 0.004 978 2 to 3 s.f. = 0.004 98; to 2 s.f. = 0.0050.

In the last case the final zero must be written: 0.0050 shows two significant figures, and 0.005 would show only one. Zeros between non-zero digits are always significant: 4.07 has three significant figures.

Rounding up can ripple through several digits: 0.0999 to 2 s.f. is 0.10.

## Upper and lower bounds (1.8 C)

A rounded value stands for a range. The **bounds** are half a unit of the rounding either side.

**Worked example 1.** Write down the bounds of each value.

```
length 8.4 cm, to 1 d.p.         unit 0.1, half 0.05   8.35 ≤ l < 8.45
mass 5.70 kg, to 2 d.p.          unit 0.01, half 0.005 5.695 ≤ m < 5.705
height 2300 m, to nearest 100 m  unit 100, half 50     2250 ≤ h < 2350
time 14 s, to nearest second     unit 1, half 0.5      13.5 ≤ t < 14.5
```

The **upper bound** is written with "<", because a value exactly equal to it would round up to the next value. You still use that number as the upper bound in calculations.

**Error intervals.** The inequality form, such as 8.35 ≤ l < 8.45, is called an error interval.

**Discrete data.** When a quantity can only be a whole number, the bounds are whole numbers. If 12 500 people attended a concert, to the nearest 100, then the smallest possible number is 12 450 and the largest is 12 549.

## Estimation (1.8 D)

Round every number to **1 significant figure**, then calculate. The specification says this is the method, so show the rounded numbers.

**Worked example 2.** Estimate (58.3 × 0.211) ÷ 0.0397.

```
58.3 → 60    0.211 → 0.2    0.0397 → 0.04
(60 × 0.2) ÷ 0.04 = 12 ÷ 0.04 = 1200 ÷ 4 = 300
```

The calculator value is 309.86 (2 d.p.), so the estimate is sensible. Dividing by a small decimal is easiest as "multiply both by 100".

**Is the estimate too big or too small?** Look at how each number was rounded. In √48.7 ÷ 0.52, rounding gives √50 ÷ 0.5 ≈ 7 ÷ 0.5 = 14. The divisor 0.52 was rounded down to 0.5, which makes the quotient bigger, so 14 is likely an overestimate (the true value is 13.4 to 3 s.f.).

## Problems with bounds (Higher tier only)

To find the largest or smallest possible result, choose each bound to push the answer the way you want.

| Calculation | Upper bound of result | Lower bound of result |
|---|---|---|
| a + b | UB a + UB b | LB a + LB b |
| a − b | UB a − LB b | LB a − UB b |
| a × b | UB a × UB b | LB a × LB b |
| a ÷ b | UB a ÷ LB b | LB a ÷ UB b |

For subtraction and division, the bounds are "crossed". Subtracting the smallest possible b gives the largest difference.

**Worked example 3.** A car travels 120 km, correct to the nearest km, using 8.6 litres of fuel, correct to 1 d.p. Find the bounds of its fuel consumption in km per litre, and give the consumption to a suitable degree of accuracy.

```
distance: 119.5 ≤ d < 120.5        fuel: 8.55 ≤ f < 8.65
upper bound = 120.5 ÷ 8.55 = 14.0935…
lower bound = 119.5 ÷ 8.65 = 13.8150…
to 2 s.f. both bounds round to 14
consumption = 14 km per litre (2 s.f.)
```

**Choosing a suitable degree of accuracy.** Round both bounds to the same accuracy, starting with more figures. Use the most accurate level at which they agree. Here they differ at 3 s.f. (14.1 and 13.8) but agree at 2 s.f., so 14 km per litre is justified. Always give this reason in words.

**"Definitely fits" problems.** A 2.4 m shelf (nearest 0.1 m) holds books 3 cm thick (nearest cm). To be certain the books fit, use the shortest shelf and the thickest books: 235 cm ÷ 3.5 cm = 67.1…, so 67 books will definitely fit.

## Common mistakes

- Dropping place-holding zeros: 63 549 to 2 s.f. is 64 000, not 64.
- Counting leading zeros as significant: 0.0063 has two significant figures, not four.
- Giving an upper bound such as 8.449 or 8.44999 instead of 8.45.
- Using "both upper bounds" for a quotient or difference.
- Estimating with numbers rounded to 1 decimal place instead of 1 significant figure.
- Rounding a bounds answer without checking that both bounds agree.

## Exam technique

- **Write down** the bounds: two values are needed, and the order matters; "lower bound 8.35, upper bound 8.45".
- **Work out an estimate**: you must show the rounded values; a calculator answer earns nothing here.
- **Give your answer to 3 significant figures** or **to 2 decimal places**: write down the full calculator value first, then round once.
- **Give a reason** for a suitable degree of accuracy: say that both bounds round to the same value at that accuracy.
- **Explain** whether an estimate is an over- or underestimate: refer to the direction each value was rounded.

## Where next

Condense this section with the [section 1.8 revision notes](/resources/edexcel-igcse-mathematics-4ma1-degree-of-accuracy-edexcel-igcse-maths-revision-notes/) and test yourself with the [section 1.8 practice questions](/resources/edexcel-igcse-mathematics-4ma1-degree-of-accuracy-edexcel-igcse-maths-practice/). Very large and very small numbers are rounded in the same way in the [section 1.9 standard form study guide](/resources/edexcel-igcse-mathematics-4ma1-standard-form-edexcel-igcse-maths/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 1, Numbers and the number system: 1.8 Degree of accuracy (Foundation Tier 1.8 A–D; Higher Tier 1.8 A).
