---
title: "Cambridge O Level Statistics (4040): Measures for combined sets of data"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 5 – Statistical measures, their interpretation and appropriate use"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 5.4
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "measures-for-combined-sets-of-data-4040"
description: "Combined mean and standard deviation for 4040: three or more groups, summary totals, a missing standard deviation, corrections and which measures combine."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5.4 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "Measures for combined sets of data", which the syllabus says includes calculation of the mean and standard deviation. The skill is to merge groups whose individual values you may never see, working only from their sizes, means and standard deviations, or from their totals.

The core method for two groups, removing one value and finding an unknown mean are in the guide to [quartiles, percentiles and combining data sets](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets/). This page goes further: three or more groups, data given as Σx and Σx², finding a missing standard deviation, correcting a misrecorded value, and why some measures cannot be combined. Afterwards, use the [combined sets revision notes](/resources/cambridge-o-level-statistics-4040-measures-for-combined-sets-of-data-revision-notes/) and the [combined sets practice questions](/resources/cambridge-o-level-statistics-4040-measures-for-combined-sets-of-data-practice/).

## What this unit covers

| Part of 5.4 | What you must be able to do |
|---|---|
| Combined mean | Find the mean of two or more groups from their sizes and means (or totals) |
| Combined standard deviation | Find it from sizes, means and standard deviations (or Σx and Σx²) |
| Working backwards | Find a missing mean, standard deviation or group size from combined figures |
| Changes to a data set | Recalculate after values are added, removed or corrected |

## The two totals that make combining possible

For a group of n values with mean x̄ and standard deviation σ (dividing by n):

```
Σx  = n × x̄
Σx² = n × (σ² + x̄²)
```

The second line rearranges σ² = Σx²/n − x̄². Totals **add** when groups are merged; means and standard deviations do not. So the method is always the same: convert to totals, add, convert back.

```
combined mean     = (total Σx) / (total n)
combined variance = (total Σx²) / (total n) − (combined mean)²
combined σ        = √(combined variance)
```

These pages use the divide-by-n form of the standard deviation; if a question defines it differently, follow the question.

## Worked example 1: three groups

Three classes take the same test.

| Class | n | Mean | σ |
|---|---|---|---|
| A | 20 | 15 | 2 |
| B | 30 | 18 | 3 |
| C | 50 | 20 | 4 |

```
A: Σx = 20 × 15 = 300    Σx² = 20 × (4 + 225)  = 4580
B: Σx = 30 × 18 = 540    Σx² = 30 × (9 + 324)  = 9990
C: Σx = 50 × 20 = 1000   Σx² = 50 × (16 + 400) = 20 800
Total: n = 100, Σx = 1840, Σx² = 35 370

mean = 1840 / 100 = 18.4
variance = 35 370 / 100 − 18.4² = 353.7 − 338.56 = 15.14
σ = √15.14 = 3.89 (3 s.f.)
```

Sense check: the combined mean lies between the smallest and largest group means and is pulled towards Class C, the largest group. The combined variance, 15.14, is larger than the size-weighted average of the three group variances (0.2 × 4 + 0.3 × 9 + 0.5 × 16 = 11.5), because it also includes the spread between the group means of 15, 18 and 20.

## Worked example 2: data given as totals

Sometimes the question gives Σx and Σx² directly. Then there is nothing to rebuild.

Set 1: n = 12, Σx = 150, Σx² = 1920. Set 2: n = 8, Σx = 120, Σx² = 1850.

```
Set 1 alone: mean = 12.5, variance = 1920/12 − 12.5² = 160 − 156.25 = 3.75
Set 2 alone: mean = 15,   variance = 1850/8 − 15² = 231.25 − 225 = 6.25

Combined: n = 20, Σx = 270, Σx² = 3770
mean = 270/20 = 13.5
variance = 3770/20 − 13.5² = 188.5 − 182.25 = 6.25
σ = 2.5
```

Do not average the two variances (3.75 and 6.25); the combined variance comes only from the added totals.

## Worked example 3: finding a missing standard deviation

Group A has 20 values with mean 30 and standard deviation 4. Group B has 30 values with mean 35. The combined standard deviation of all 50 values is 5. Find the standard deviation of Group B.

```
Combined mean = (20 × 30 + 30 × 35) / 50 = (600 + 1050) / 50 = 33
Combined Σx² = 50 × (5² + 33²) = 50 × 1114 = 55 700
Group A Σx²  = 20 × (4² + 30²) = 20 × 916  = 18 320
Group B Σx²  = 55 700 − 18 320 = 37 380

Group B: σ² = 37 380 / 30 − 35² = 1246 − 1225 = 21
σ = √21 = 4.58 (3 s.f.)
```

The pattern for any unknown: write the combined totals, subtract the known group's totals, and convert what is left.

## Worked example 4: correcting a value

Thirty values have mean 52 and standard deviation 8. One value was recorded as 75 but should have been 57. Find the correct mean and standard deviation.

```
Σx  = 30 × 52 = 1560
Σx² = 30 × (64 + 2704) = 83 040

Correct the totals: remove 75, add 57
Σx  = 1560 − 75 + 57 = 1542
Σx² = 83 040 − 75² + 57² = 83 040 − 5625 + 3249 = 80 664

mean = 1542 / 30 = 51.4
variance = 80 664 / 30 − 51.4² = 2688.8 − 2641.96 = 46.84
σ = 6.84 (3 s.f.)
```

The mean falls by 18/30 = 0.6, and the standard deviation falls noticeably because the wrong value, 75, was far from the mean.

When several values are added, treat them as a second group: find their n, Σx and Σx², and add.

## Which measures can be combined from summaries?

| Measure | Combine from group summaries? | Needs |
|---|---|---|
| Mean | Yes | Each n and mean |
| Standard deviation | Yes | Each n, mean and σ (or Σx, Σx²) |
| Range | Yes | Each minimum and maximum: the smallest minimum to the largest maximum |
| Median and quartiles | No | The values themselves, or a combined frequency table |
| Mode | No | The combined frequencies |

**Why medians do not combine.** Set A is 1, 2, 3 (median 2) and Set B is 2, 10, 11 (median 10). The combined data 1, 2, 2, 3, 10, 11 have median 2.5, not 6. The medians alone do not say where the other values lie.

## Common errors

- Averaging group means without weighting by group size.
- Averaging standard deviations or variances.
- Using x̄ instead of x̄² in Σx² = n(σ² + x̄²).
- Subtracting a group mean squared, rather than the combined mean squared, in the last step.
- Forgetting to remove the old value's square when correcting Σx².
- Rounding the combined mean before squaring it.

## Exam technique

- **Calculate the combined mean and standard deviation**: lay out n, Σx and Σx² for each group in a table, then total.
- **Find the missing value**: write the combined totals first and subtract.
- **Explain why the combined standard deviation is larger than either group's**: refer to the difference between the group means.
- Keep full calculator values until the final answer, then give 3 significant figures.

## More on this topic

Drill the totals method with the [revision notes on combined sets](/resources/cambridge-o-level-statistics-4040-measures-for-combined-sets-of-data-revision-notes/), then use the [practice questions on combined sets](/resources/cambridge-o-level-statistics-4040-measures-for-combined-sets-of-data-practice/). The effect of adding or multiplying every value by a constant is the next section, covered in [adding or multiplying by a constant](/resources/cambridge-o-level-statistics-4040-effect-of-adding-or-multiplying-by-a-constant/).

## Frequently asked questions

**Can the combined standard deviation be bigger than every group's standard deviation?**
Yes. When the group means differ, the gap between them adds to the overall spread.

**Can I find a combined median from two medians?**
No. You need the individual values or a combined frequency distribution.

**What if the question gives Σx and Σx² rather than means and standard deviations?**
Add the totals directly, then use mean = Σx/n and variance = Σx²/n − mean².

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 5, section 5.4: Measures for combined sets of data, including calculation of mean and standard deviation.
