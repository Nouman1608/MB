---
title: "Cambridge O Level Statistics: Quartiles, percentiles and combining data sets (4040)"
seoTitle: "O Level Statistics 4040 Quartiles and Combined Data Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Quartiles, percentiles and combining data sets"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 22
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "quartiles-and-percentiles-4040"
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "measures-for-combined-sets-of-data-4040"
description: "Study guide to estimating quartiles and percentiles from cumulative frequency graphs and tables, and the mean and standard deviation of combined sets."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers sections 5.3 and 5.4 of the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027: quartiles and percentiles, and measures for combined sets of data. The syllabus is not tiered, so everything here is for every candidate.

You need cumulative frequency tables and graphs first, so read the [cumulative frequency guide](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/) if they are new. The mean and standard deviation are in the [averages guide](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class/). Track progress with the [4040 course hub](/boards/cambridge/o-level/statistics/) and the [printable checklist](/checklists/cambridge/o-level/statistics/). For drills, use the [revision notes](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets-revision-notes/) and the [practice questions](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets-practice/). To find weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Syllabus section | What you must be able to do |
|---|---|
| 5.3 | Estimate the median, quartiles and percentiles from a cumulative frequency curve or polygon |
| 5.3 | Estimate the same measures by linear interpolation from a cumulative frequency table |
| 5.4 | Calculate the mean of two or more combined sets of data |
| 5.4 | Calculate the standard deviation of two or more combined sets of data |

## Section 5.3: quartiles and percentiles

### What they mean

The **median** splits the data into two equal halves. The **lower quartile** (Q1) has a quarter of the data at or below it. The **upper quartile** (Q3) has three quarters at or below it. The **interquartile range** is Q3 − Q1. It tells you how widely the central 50% of the data is scattered.

A **percentile** divides the data into hundredths. The 90th percentile has 90% of the data at or below it. So Q1 and Q3 are just the 25th and 75th percentiles, with the median at the 50th.

### Which cumulative frequency to look for

For grouped data you only have estimates, so use the fraction of the total n:

| Measure | Cumulative frequency to find |
|---|---|
| Lower quartile | n/4 |
| Median | n/2 |
| Upper quartile | 3n/4 |
| P-th percentile | (P/100) × n |

If a question tells you to use a different position rule, follow the question.

### Method for a cumulative frequency table

1. Build the cumulative frequency column at the upper class boundaries, and check that the last value equals n.
2. Work out the target position from the table above.
3. Find the class where the cumulative frequency first reaches or passes the target.
4. Interpolate in that class:

```
value = lower boundary + (target − CF before the class) / (frequency of the class) × (class width)
```

This assumes the observations are spread evenly across the class. That is why the answer is an estimate.

**Worked example 1.** A clinic records the waiting time, t minutes, of 120 patients.

| Time, t minutes | 0 < t ≤ 10 | 10 < t ≤ 20 | 20 < t ≤ 30 | 30 < t ≤ 40 | 40 < t ≤ 60 | 60 < t ≤ 80 |
|---|---|---|---|---|---|---|
| Frequency | 8 | 22 | 34 | 30 | 18 | 8 |
| Upper boundary | 10 | 20 | 30 | 40 | 60 | 80 |
| Cumulative frequency | 8 | 30 | 64 | 94 | 112 | 120 |

Lower quartile: target 120/4 = 30. The cumulative frequency is exactly 30 at t = 20, so Q1 = **20 minutes**.

Median: target 60. Cumulative frequency before the class 20–30 is 30, and the class has 34 patients.

```
median = 20 + (60 − 30)/34 × 10 = 20 + 8.82... = 28.8 minutes
```

Upper quartile: target 90, in the class 30–40 (cumulative frequency before it is 64, class frequency 30).

```
Q3 = 30 + (90 − 64)/30 × 10 = 30 + 8.67 = 38.7 minutes
```

Interquartile range = 38.67 − 20 = **18.7 minutes**.

90th percentile: target 0.9 × 120 = 108, in the class 40–60 (cumulative frequency before it is 94, class frequency 18, width 20).

```
P90 = 40 + (108 − 94)/18 × 20 = 40 + 15.56 = 55.6 minutes
```

Notice the unequal class widths. The formula uses the width of the class you are in, so it copes with them.

### Going the other way: value to percentile

To find what percentage of the data lies at or below a value, find the cumulative frequency at that value, then divide by n.

**Worked example 2.** Using the clinic data, what percentage waited 50 minutes or less, and how many waited longer than 50?

At t = 50 you are halfway through the class 40–60, so the cumulative frequency is 94 + (10/20) × 18 = 103.

```
103/120 = 0.858...  so about 85.8% waited 50 minutes or less
patients waiting more than 50 minutes = 120 − 103 = 17
```

So 50 minutes is about the 86th percentile.

### Reading from a curve or polygon

A cumulative frequency graph does the same job by eye. Plot at the upper class boundaries, add the starting point at cumulative frequency 0, then draw straight lines (polygon) or a smooth curve.

1. Mark the target on the vertical axis (n/4, n/2, 3n/4, or P/100 of n).
2. Draw a horizontal line across to the graph.
3. Draw a vertical line down to the horizontal axis and read the value.

Keep the guide lines on the paper, because they show your method. For the clinic data the polygon passes through (0, 0), (10, 8), (20, 30), (30, 64), (40, 94), (60, 112) and (80, 120). Reading across at 60 meets the polygon in the segment from (20, 30) to (30, 64), so the reading is the same 28.8 that interpolation gives. A smooth curve drawn by hand will give a slightly different reading, which is acceptable for an estimate.

To read a percentile rank from a curve, go up from the value first, then across.

### Data rounded to a unit

If the classes have gaps, use the true boundaries (half a unit beyond the limits) before interpolating.

**Worked example 3.** A test is marked out of 100, in whole marks. The scores of 160 candidates are grouped.

| Score | 1–20 | 21–40 | 41–60 | 61–80 | 81–100 |
|---|---|---|---|---|---|
| Frequency | 12 | 28 | 56 | 44 | 20 |
| Upper boundary | 20.5 | 40.5 | 60.5 | 80.5 | 100.5 |
| Cumulative frequency | 12 | 40 | 96 | 140 | 160 |

The first class starts at 0.5. Median: target 80, in the class 40.5 to 60.5.

```
median = 40.5 + (80 − 40)/56 × 20 = 40.5 + 14.29 = 54.8
```

Upper quartile: target 120, in the class 60.5 to 80.5.

```
Q3 = 60.5 + (120 − 96)/44 × 20 = 60.5 + 10.91 = 71.4
```

The lower quartile is the score at cumulative frequency 40, which is exactly 40.5. Using the limits 40 or 60 instead of the boundaries 40.5 and 60.5 would shift every answer.

## Section 5.4: combining data sets

### Why you cannot just average the averages

Suppose a group of 30 has mean 54 and a group of 20 has mean 64. The combined mean is not (54 + 64)/2, because the larger group should count for more. For standard deviation it is worse: you cannot average two standard deviations at all. You must go back to the totals.

For a set of n values with mean x̄ and standard deviation σ, these two facts rebuild the totals:

```
Σx = n × x̄
Σx² = n × (σ² + x̄²)
```

The second comes from σ² = Σx²/n − x̄², the working form of the standard deviation (the syllabus notation uses σ for the population standard deviation). If your course notes define it another way, use your course's definition consistently.

### Method for combined sets

1. For each set, find n, Σx and Σx² (from the raw data, or rebuilt from the mean and σ).
2. Add the n values, the Σx values and the Σx² values.
3. Combined mean = total Σx / total n.
4. Combined σ = √(total Σx² / total n − combined mean²).

**Worked example 4.** Group A: 30 pupils, mean mark 54, standard deviation 5. Group B: 20 pupils, mean mark 64, standard deviation 7. Find the mean and standard deviation of all 50.

```
Group A: Σx = 30 × 54 = 1620;   Σx² = 30 × (25 + 2916) = 88 230
Group B: Σx = 20 × 64 = 1280;   Σx² = 20 × (49 + 4096) = 82 900
Total:   n = 50, Σx = 2900, Σx² = 171 130

mean = 2900/50 = 58
σ² = 171 130/50 − 58² = 3422.6 − 3364 = 58.6
σ = 7.66 (3 s.f.)
```

The combined mean, 58, is 4 above 54 and 6 below 64. It sits nearer 54, as it should, because group A has more pupils.

The combined standard deviation, 7.66, is larger than both 5 and 7. That is possible because the two group means differ, which adds spread.

**Worked example 5 (from raw data).** Set A: 12, 15, 9, 18, 12, 12. Set B: 20, 14, 17, 13. Find the mean and standard deviation of the ten values together.

```
A: n = 6, Σx = 78, Σx² = 144 + 225 + 81 + 324 + 144 + 144 = 1062
B: n = 4, Σx = 64, Σx² = 400 + 196 + 289 + 169 = 1054
Total: n = 10, Σx = 142, Σx² = 2116

mean = 14.2
σ² = 2116/10 − 14.2² = 211.6 − 201.64 = 9.96
σ = 3.16 (3 s.f.)
```

### Removing or adding a value

The same totals handle a corrected or extra observation.

**Worked example 6.** Twelve readings have mean 40 and standard deviation 5. One reading, 40, is removed. Find the new mean and standard deviation.

```
Σx = 12 × 40 = 480;    Σx² = 12 × (25 + 1600) = 19 500
After removal: n = 11, Σx = 440, Σx² = 19 500 − 1600 = 17 900

mean = 440/11 = 40
σ² = 17 900/11 − 1600 = 27.27...
σ = 5.22 (3 s.f.)
```

The mean is unchanged because the value removed equalled the mean. The standard deviation rises because 40 sat exactly at the centre and contributed nothing to the spread.

### Finding an unknown

**Worked example 7.** A set of 20 values has mean 55. It is combined with a set of 30 values to give 50 values with mean 58. Find the mean of the 30.

```
Σx (all 50) = 50 × 58 = 2900
Σx (first 20) = 20 × 55 = 1100
Σx (the 30) = 1800, so the mean is 1800/30 = 60
```

## Common errors

- Averaging two means as if the groups were the same size.
- Averaging two standard deviations. Rebuild Σx² instead.
- Forgetting that Σx² = n(σ² + x̄²) includes the square of the mean.
- Subtracting the combined mean squared too early, or using a group mean instead of the combined mean in the last step.
- Using the position (n + 1)/2 or similar when the question works with n/2 for grouped data.
- Interpolating with the wrong class width, or using the class limits instead of boundaries for rounded data.
- Reading a percentile from the top when it counts from the bottom (and the reverse for "the highest 10%").
- Quoting a graph reading as exact. Say "estimate" or "about".

## Next steps

Work through the [revision notes](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets-revision-notes/), then the [practice questions](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets-practice/). The next topic, section 6, is in the [guide on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and/).

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment, topic 5, sections 5.3 and 5.4.
