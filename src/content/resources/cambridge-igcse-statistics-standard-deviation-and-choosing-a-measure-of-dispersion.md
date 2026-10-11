---
title: "Cambridge IGCSE Statistics: Standard deviation and choosing a measure of dispersion (0479)"
seoTitle: "Cambridge IGCSE Statistics: Standard Deviation Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["igcse"]
topic: "Standard deviation and choosing a measure of dispersion"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 30
syllabusTopics:
  - qualification: "igcse"
    topic: "quartiles-percentiles-and-measures-of-dispersion-0479"
description: "Calculate and estimate standard deviation by both formulae, then choose between range, IQR and standard deviation in context -- Cambridge IGCSE Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. It covers two outcomes from Topic 5, Quartiles, percentiles and measures of dispersion: outcome 5.6 (calculating and estimating standard deviation) and outcome 5.7 (weighing up the range, the interquartile range and the standard deviation, and justifying a choice in context). The syllabus does not split these outcomes into tiers.

Other pages in this set: the [revision notes](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-revision-notes/) and the [practice questions](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-practice/). For midpoints and grouped tables, see [Frequency distributions](/resources/igcse-cambridge-statistics-frequency-distributions/). The course page is [Cambridge IGCSE Statistics](/boards/cambridge/igcse/statistics/), the printable list is the [syllabus checklist](/checklists/cambridge/igcse/statistics/), and you can test yourself with the [free diagnostics](/diagnostics/).

## What you must be able to do

| Outcome | You must be able to |
|---|---|
| 5.6 | Calculate the standard deviation of a small data set and of an ungrouped frequency distribution |
| 5.6 | Calculate an estimate of the standard deviation of a grouped frequency distribution |
| 5.6 | Recall and use both standard deviation formulae |
| 5.7 | State the advantages and disadvantages of the range, the interquartile range (IQR) and the standard deviation |
| 5.7 | Justify the use of one measure of dispersion in a given context |

The assessment overview says that a calculator is required and that essential working must be shown for full marks. So write the sums that feed your answer, not only the final number.

## What standard deviation measures

The mean tells you where the centre of a data set is. Dispersion tells you how far the values spread around it. Standard deviation is a typical distance of a value from the mean, and it uses every value in the set.

Its units are the units of the data. If the data are in minutes, the standard deviation is in minutes. A small standard deviation means the values are bunched near the mean. A large one means they are scattered. It cannot be negative, and it is zero only when every value is identical.

## The two formulae

The syllabus expects you to recall and use a formula, and gives two forms. Here x̄ is the mean and n is the number of values.

```
Form 1:  SD = √[ Σ(x − x̄)² / n ]
Form 2:  SD = √[ Σx² / n − (Σx / n)² ]
```

Form 2 is Form 1 rearranged: the second term is x̄², so it reads "mean of the squares minus the square of the mean". Both give the same answer.

Which to use:

- Form 1 shows the idea clearly and is easy to check when the mean is a whole number.
- Form 2 needs only Σx and Σx², so it is shorter when the mean is awkward, and it suits frequency tables.

For a frequency distribution, replace n by Σf, Σx by Σfx and Σx² by Σfx².

## Small data set

### Worked example 1

Six pupils take 12, 15, 9, 18, 14 and 10 minutes to finish a puzzle. Find the mean and standard deviation.

Mean: Σx = 78, so x̄ = 78 / 6 = 13.

Form 1:

```
x       12   15    9   18   14   10
x − 13  −1    2   −4    5    1   −3
squared  1    4   16   25    1    9     Σ(x − x̄)² = 56
```

SD = √(56 / 6) = √9.333... = **3.06 minutes** (3 s.f.).

Form 2 as a check: Σx² = 144 + 225 + 81 + 324 + 196 + 100 = 1070.

```
SD = √(1070/6 − 13²) = √(178.333... − 169) = √9.333... = 3.06
```

Keep the unrounded variance until the last step. Rounding 9.333 to 9.3 before the square root changes the third significant figure.

## Ungrouped frequency distribution

Each value x occurs f times. Add columns for fx and fx², then use Form 2.

### Worked example 2

A factory checks 40 batches and counts faulty items in each.

| Faulty items, x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Frequency, f | 5 | 12 | 15 | 6 | 2 |
| fx | 0 | 12 | 30 | 18 | 8 |
| fx² | 0 | 12 | 60 | 54 | 32 |

Σf = 40, Σfx = 68, Σfx² = 158.

```
Mean = 68/40 = 1.7
SD = √(158/40 − 1.7²) = √(3.95 − 2.89) = √1.06 = 1.03 (3 s.f.)
```

So the typical batch is within about one faulty item of the mean of 1.7.

## Grouped frequency distribution: an estimate

In a grouped table you do not know the individual values. You use the midpoint of each class as if every value in it were at the midpoint. The result is an **estimate**, and you should say so.

### Worked example 3

The table shows the time, in minutes, that 40 people spend queueing.

| Time, t | 0 ≤ t < 10 | 10 ≤ t < 20 | 20 ≤ t < 30 | 30 ≤ t < 40 | 40 ≤ t < 50 |
|---|---|---|---|---|---|
| Frequency | 4 | 9 | 15 | 8 | 4 |
| Midpoint, x | 5 | 15 | 25 | 35 | 45 |
| fx | 20 | 135 | 375 | 280 | 180 |
| fx² | 100 | 2025 | 9375 | 9800 | 8100 |

Σf = 40, Σfx = 990, Σfx² = 29 400.

```
Estimated mean = 990/40 = 24.75
Estimated SD = √(29400/40 − 24.75²) = √(735 − 612.5625) = √122.4375 = 11.1 (3 s.f.)
```

For continuous data the midpoint of 10 ≤ t < 20 is 15. For a discrete class such as 10 to 19, the midpoint is halfway between the class limits, 14.5.

## Advantages and disadvantages of each measure

Outcome 5.7 asks you to understand these and to justify a choice. The IQR is the upper quartile minus the lower quartile, so it describes the middle half of the data.

| Measure | Advantages | Disadvantages |
|---|---|---|
| Range | Quick to find. Easy to explain. | Uses only the two extreme values. One unusual value changes it a lot. Says nothing about the values between. |
| IQR | Not affected by extreme values. Describes the middle 50% of the data. Can be estimated from a cumulative frequency graph, including for tables with an open-ended class if the quartiles fall outside it. | Ignores the lowest 25% and highest 25% of the values, so it ignores the tails entirely. |
| Standard deviation | Uses every value. Works well alongside the mean for roughly symmetrical data. | Longer to calculate. Pulled by extreme values. Cannot be found if a class is open-ended. |

### Worked example 4: how an extreme value affects each measure

A courier records 11 delivery times in minutes. Version A has a last value of 36. Version B has a last value of 61 (a van breakdown).

```
Sorted (first ten): 22 24 25 27 28 29 31 32 34 35, then 36 (A) or 61 (B)
```

For 11 values, the lower quartile is the 3rd value (25) and the upper quartile is the 9th value (34). Both versions have IQR = 34 − 25 = 9.

| | Version A | Version B |
|---|---|---|
| Range | 36 − 22 = 14 | 61 − 22 = 39 |
| IQR | 9 | 9 |
| Σx | 323 | 348 |
| Σx² | 9701 | 12 126 |
| SD | √(9701/11 − (323/11)²) = 4.44 | √(12126/11 − (348/11)²) = 10.1 |

One unusual delivery more than doubles the standard deviation and nearly triples the range. The IQR does not move. The first ten values are the same in both versions, so the IQR reports the same typical spread for each.

## Justifying a choice in context

Do not just name a measure. Link the property of the measure to the data in the question. A good answer has three parts:

1. Name the measure you choose.
2. Give the property that matters (resists extremes, uses all values, can be found from the table).
3. Tie it to the context.

Example: "The IQR is the better choice for the delivery times, because the breakdown is an extreme value that would inflate the range and standard deviation, whereas the IQR describes the spread of the typical deliveries."

Reverse example: for the 40 batches in Worked example 2, the standard deviation is a sensible choice, because there are no extreme values and you want a measure that uses every batch count.

Useful rules of thumb:

- Data with an outlier or a very skewed shape: IQR.
- A data set where every value matters, and a mean is the chosen average: standard deviation.
- A table with an open-ended class (for example, "60 and over"): the range and standard deviation cannot be calculated, but the IQR can often be estimated.
- A very quick comparison of two small sets: range, with a caution about extremes.

When two sets are compared, say which has the larger spread and which is more consistent in the context, using the same measure for both.

## Common errors

- Forgetting the square root, so you give the variance. Check: is your answer about the size of the typical deviation?
- In Form 2, squaring the sum instead of finding the mean of the squares: Σx²/n is the mean of the squares, and (Σx/n)² is the square of the mean.
- In a frequency table, using Σx² instead of Σfx², or dividing by the number of classes instead of Σf.
- Using class boundaries instead of midpoints in a grouped table.
- Describing an estimate as exact.
- Choosing a measure without a reason from the context.

## Next steps

Try the [practice questions](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-practice/), then use the [revision notes](/resources/cambridge-igcse-statistics-standard-deviation-and-choosing-a-measure-of-dispersion-revision-notes/) for a quick recall of the formulae and the table above.

## Official syllabus

Cambridge IGCSE Statistics (0479) syllabus for examination in 2027, Cambridge University Press and Assessment (Cambridge International Education), Topic 5, outcomes 5.6 and 5.7.
