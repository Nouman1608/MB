---
title: "Cambridge O Level Statistics: Range, interquartile range, variance and standard deviation (4040)"
seoTitle: "O Level Statistics 4040 Spread: IQR, Variance, SD"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Range, interquartile range, variance and standard deviation"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 21
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "measures-of-dispersion-4040"
description: "Study guide to range, IQR, variance and standard deviation from lists and frequency tables, with worked examples, for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is for Cambridge O Level Statistics (4040), aligned to the syllabus for examination in 2025, 2026 and 2027. It covers section 5.2, measures of dispersion: the range, the interquartile range, the variance and the standard deviation. The syllabus note asks for these to be calculated or estimated from a list, an ungrouped table and a grouped table. The course is not tiered.

Pair it with the [revision notes](/resources/cambridge-o-level-statistics-range-interquartile-range-variance-and-standard-revision-notes/) and the [practice questions](/resources/cambridge-o-level-statistics-range-interquartile-range-variance-and-standard-practice/). Averages are in the [averages guide](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class/), and cumulative frequency graphs are in the [cumulative frequency guide](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/). The course page is [Cambridge O Level Statistics](/boards/cambridge/o-level/statistics/) and the printable list is the [checklist](/checklists/cambridge/o-level/statistics/). To find your weak spots first, try the [free diagnostics](/diagnostics/).

## What you need to do

| Measure | From a set of numbers | From an ungrouped table | From a grouped table |
|---|---|---|---|
| Range | Calculate | Calculate | Estimate |
| Interquartile range (IQR) | Calculate | Calculate | Estimate |
| Variance | Calculate | Calculate | Estimate |
| Standard deviation | Calculate | Calculate | Estimate |

You must also interpret and compare spread: say what a value tells you, and choose a sensible measure when you compare two data sets.

## The idea of spread

An average tells you where the data sits. A measure of dispersion tells you how widely it is scattered around that average. Two classes can both have a mean mark of 61 and still be very different. In one, every pupil is close to 61. In the other, some pupils score 30 and some score 93.

The four measures answer slightly different questions:

| Measure | What it uses | Weakness |
|---|---|---|
| Range | Largest and smallest value only | One extreme value changes it a lot |
| IQR | The middle half of the data | Ignores the top and bottom quarter |
| Variance | Every value, via squared distances from the mean | Units are squared, so hard to picture |
| Standard deviation | Every value, in the original units | Pulled up by extreme values |

## The range

```
range = largest value − smallest value
```

For a list, subtract the smallest from the largest. For an ungrouped frequency table, use the smallest and largest values that have a frequency above zero. For a grouped table you do not know the actual extremes, so you can only estimate: use the upper boundary of the last class minus the lower boundary of the first class. That is the widest the range could be, so say "estimate".

## Quartiles and the interquartile range

Put the data in order and split it at the median. The **lower quartile** Q1 is the middle value of the bottom half. The **upper quartile** Q3 is the middle value of the top half. With an odd n, the median itself belongs to neither half.

```
IQR = Q3 − Q1
```

The syllabus wording does not fix one rule for placing quartiles in a small list. This page uses the halves method for lists and tables, and linear interpolation at n/4 and 3n/4 for grouped data. Use one method throughout an answer and show it.

**Worked example 1 (list, n odd and n even).** Eleven pupils score these marks out of 60: 34, 41, 28, 52, 45, 39, 47, 31, 60, 38, 43. Find the range and the IQR.

```
Ordered: 28, 31, 34, 38, 39, 41, 43, 45, 47, 52, 60
Range = 60 − 28 = 32
Median = 6th value = 41
Lower half: 28, 31, 34, 38, 39   → Q1 = 34
Upper half: 43, 45, 47, 52, 60   → Q3 = 47
IQR = 47 − 34 = 13
```

Now remove the 28, leaving ten values: 31, 34, 38, 39, 41, 43, 45, 47, 52, 60. The median is the mean of the 5th and 6th values, (41 + 43)/2 = 42. The halves are 31, 34, 38, 39, 41 and 43, 45, 47, 52, 60. So Q1 = 38 and Q3 = 47, and the IQR is **9**. The range is 60 − 31 = **29**.

**Worked example 2 (ungrouped table).** A school team's goals per match over 40 matches:

| Goals x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency f | 4 | 9 | 12 | 8 | 5 | 2 |

Cumulative frequencies are 4, 13, 25, 33, 38, 40. Each half holds 20 values. The 10th and 11th values straddle Q1. Both fall in the group 5th to 13th, which is x = 1, so Q1 = 1. The 30th and 31st values straddle Q3. Both fall in the group 26th to 33rd, which is x = 3, so Q3 = 3.

```
Range = 5 − 0 = 5
IQR = 3 − 1 = 2
```

## Variance and standard deviation

The **variance** is the mean of the squared distances of the values from the mean. The **standard deviation** is the positive root of that.

```
variance = Σ(x − x̄)² / n
standard deviation = √variance
```

This page divides by n, which treats the data as the whole group being described. If a question supplies a formula or tells you to divide by something else, follow the question.

There is an equivalent form that avoids finding every deviation:

```
variance = Σx² / n − x̄²
```

In words: average the squared values, then take away the squared average. It is quicker with large numbers or tables, but it breaks down if you round x̄ early, because you subtract two close numbers. Keep x̄ exact or to several decimal places until the end.

**Worked example 3 (list).** Eight times, in seconds, for a short race: 12, 15, 9, 20, 14, 11, 17, 10. Find the variance and standard deviation.

```
Σx = 108, so x̄ = 108 ÷ 8 = 13.5

x       12     15    9      20    14    11     17    10
x − x̄  −1.5   1.5  −4.5   6.5   0.5  −2.5   3.5  −3.5
(x−x̄)²  2.25  2.25 20.25  42.25 0.25  6.25  12.25 12.25

Σ(x − x̄)² = 98
variance = 98 ÷ 8 = 12.25
standard deviation = √12.25 = 3.5
```

Check with the other form. Σx² = 144 + 225 + 81 + 400 + 196 + 121 + 289 + 100 = 1556. Then 1556/8 − 13.5² = 194.5 − 182.25 = 12.25. The two forms agree. The variance is **12.25 s²** and the standard deviation is **3.5 s**.

## Ungrouped frequency distributions

Each value x is repeated f times, so multiply:

```
x̄ = Σfx / Σf
variance = Σfx² / Σf − x̄²
```

Add columns for fx and fx², then total them.

**Worked example 4.** Using the goals table from example 2:

| x | f | fx | fx² |
|---|---|---|---|
| 0 | 4 | 0 | 0 |
| 1 | 9 | 9 | 9 |
| 2 | 12 | 24 | 48 |
| 3 | 8 | 24 | 72 |
| 4 | 5 | 20 | 80 |
| 5 | 2 | 10 | 50 |
| Total | 40 | 87 | 259 |

```
x̄ = 87 ÷ 40 = 2.175
variance = 259/40 − 2.175² = 6.475 − 4.730625 = 1.744375
standard deviation = √1.744375 = 1.32 (3 s.f.)
```

The mean is 2.175 goals per match, with a standard deviation of about **1.32** goals.

## Grouped frequency distributions

When data is grouped you do not know the individual values. Treat every value in a class as if it sat at the class **midpoint**, then use the same formulas. The answers are estimates, because the real values inside each class are unknown.

**Worked example 5.** The time, in minutes, that 50 customers waited in a queue:

| Time t | 10 to under 20 | 20 to under 30 | 30 to under 50 | 50 to under 60 | 60 to under 80 |
|---|---|---|---|---|---|
| Frequency | 6 | 14 | 20 | 8 | 2 |

Estimate the mean, the standard deviation and the IQR.

```
Midpoints x: 15, 25, 40, 55, 70
fx : 90, 350, 800, 440, 140   → Σfx = 1820
fx²: 1350, 8750, 32000, 24200, 9800 → Σfx² = 76100

x̄ = 1820 ÷ 50 = 36.4
variance = 76100/50 − 36.4² = 1522 − 1324.96 = 197.04
standard deviation = √197.04 = 14.0 (3 s.f.)
```

For the IQR, locate the 25% and 75% positions. These are the 12.5th and 37.5th values. Cumulative frequencies are 6, 20, 40, 48, 50.

```
Q1: the 12.5th value is in 20–30 (6 values before it)
    Q1 = 20 + (12.5 − 6)/14 × 10 = 24.6
Q3: the 37.5th value is in 30–50 (20 values before it)
    Q3 = 30 + (37.5 − 20)/20 × 20 = 47.5
IQR = 47.5 − 24.6 = 22.9 (estimate)
```

The estimated range is 80 − 10 = 70 minutes, as an upper limit.

You can also read Q1 and Q3 from a cumulative frequency curve, as covered in the [cumulative frequency guide](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/).

## Interpreting and comparing spread

A small standard deviation or IQR means the values are close together and the mean or median is a good summary of the typical value. A large one means the values are scattered.

**Worked example 6.** Two classes of ten pupils sit the same test.

| | Class P | Class Q |
|---|---|---|
| Marks, in order | 48, 52, 55, 57, 60, 61, 63, 66, 70, 78 | 30, 45, 52, 58, 60, 62, 65, 70, 75, 93 |
| Mean | 61 | 61 |
| Range | 30 | 63 |
| IQR | 11 | 18 |
| Standard deviation | 8.38 | 16.2 |

Both classes have the same mean, so on average they did equally well. Class P is more consistent: its marks are closer together on all three measures. Class Q has a much wider spread, with a few very low and very high marks.

A good comparison names the measure, gives both values and says what they mean in context. Write "Class P has the smaller standard deviation (8.38 against 16.2), so its marks are more consistent", not just "P is smaller".

### Choosing a measure

The effect of an extreme value shows why the choice matters. Take the eleven marks from example 1 and change the 60 to 100.

| | Original | With 100 |
|---|---|---|
| Range | 32 | 72 |
| IQR | 13 | 13 |
| Standard deviation | 8.87 | 18.56 |

The IQR does not move, because the upper quartile is still 47. The range more than doubles and the standard deviation rises from 8.87 to 18.56. So:

- If the data has outliers or is skewed, the IQR (with the median) is the safer measure.
- If the data is roughly symmetrical with no extreme values, the standard deviation (with the mean) uses every value and is a good choice.
- Compare measures of the same type: IQR with IQR, standard deviation with standard deviation, and always in the same units.

## Common errors

- Quoting the variance when the standard deviation was asked for.
- Squaring after summing: Σ(x − x̄)² is not (Σ(x − x̄))², which is always zero.
- In a table, adding x² without multiplying by f.
- Dividing by the number of classes instead of Σf.
- Rounding x̄ early in the Σx²/n − x̄² form.
- Using class boundaries instead of midpoints for the grouped mean and standard deviation.
- Giving the IQR as the pair "Q1 to Q3" instead of subtracting.
- Dropping the word "estimate" for grouped data.
- Comparing without context: say what the numbers mean for the situation.

## Next steps

Work through the [practice questions](/resources/cambridge-o-level-statistics-range-interquartile-range-variance-and-standard-practice/), then use the [revision notes](/resources/cambridge-o-level-statistics-range-interquartile-range-variance-and-standard-revision-notes/) to fix the formulas. Box plots draw the quartiles, as covered in the [box-and-whisker guide](/resources/cambridge-o-level-statistics-venn-box-and-whisker-and-stem-and-leaf-diagrams/).

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, from Cambridge Assessment International Education, part of Cambridge University Press & Assessment. This page covers section 5.2, measures of dispersion.
