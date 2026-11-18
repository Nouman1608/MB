---
title: "Cambridge O Level Mathematics (4024): Cumulative Frequency Diagrams"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Statistics"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 9.6
syllabusTopics:
  - qualification: "o-level"
    topic: "statistics"
    subtopic: "cumulative-frequency-diagrams-4024"
description: "Study guide to 4024 section 9.6: cumulative frequency tables and curves, estimating the median, quartiles, percentiles and IQR, and interpreting readings."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 9.6, Cumulative frequency diagrams, in the Statistics topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Every candidate studies it. The broader page [Scatter Diagrams, Correlation and Cumulative Frequency Diagrams](/resources/cambridge-o-level-mathematics-scatter-diagrams-correlation-and-cumulative-frequency/) works through the basic method; this guide adds checking readings against the table, "more than" questions, working back from a curve to frequencies, and full comparisons. Afterwards, use the [cumulative frequency diagrams revision notes](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams-revision-notes/) and the [cumulative frequency diagrams practice questions](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams-practice/).

## What section 9.6 asks for

| Outcome | What you must be able to do |
|---|---|
| 9.6 (1) | Draw and interpret cumulative frequency tables and diagrams; plotted points should be clearly marked, for example as small crosses, and joined with a smooth curve |
| 9.6 (2) | Estimate and interpret the median, percentiles, quartiles and interquartile range from cumulative frequency diagrams |

## Building the table

Cumulative frequency (CF) is a running total of the frequencies. Each CF value counts how many items are **less than or equal to the upper boundary** of that class.

### Worked example 1

The finishing times of 120 runners in a 5 km race are shown.

| Time t (minutes) | Frequency | Upper boundary | Cumulative frequency |
|---|---|---|---|
| 15 < t ≤ 20 | 6 | 20 | 6 |
| 20 < t ≤ 25 | 18 | 25 | 24 |
| 25 < t ≤ 30 | 34 | 30 | 58 |
| 30 < t ≤ 35 | 30 | 35 | 88 |
| 35 < t ≤ 40 | 20 | 40 | 108 |
| 40 < t ≤ 45 | 12 | 45 | 120 |

The last CF equals the total, 120. If it does not, an addition has gone wrong.

## Drawing the diagram

1. Horizontal axis: the variable (time in minutes). Vertical axis: cumulative frequency, from 0 to the total.
2. Plot each CF against its **upper boundary**: (20, 6), (25, 24), (30, 58), (35, 88), (40, 108), (45, 120).
3. Plot the starting point (15, 0) at the lower boundary of the first class, because no runner finished in 15 minutes or less.
4. Mark each point with a small cross and join them with a **smooth curve**.

The curve always rises or stays level; it can never go down. Its steepest part is where the data is most crowded: here between 25 and 35 minutes.

**Why upper boundaries?** The CF of 24 means 24 runners took 25 minutes or less. Plotting it at the midpoint, 22.5, would claim that 24 runners had finished by 22.5 minutes, which the table does not show.

## Reading the median, quartiles and percentiles

With n items, read across from these heights to the curve, then down to the horizontal axis:

| Measure | Height |
|---|---|
| Lower quartile | n/4 |
| Median | n/2 |
| Upper quartile | 3n/4 |
| p-th percentile | p% of n |

### Worked example 2

Estimate the median, the quartiles, the interquartile range and the 90th percentile of the race times.

```
Median:          height 60  → about 30.3 minutes
Lower quartile:  height 30  → about 25.9 minutes
Upper quartile:  height 90  → about 35.5 minutes
IQR = 35.5 − 25.9 ≈ 9.6 minutes
90th percentile: height 108 → 40 minutes
```

**Check against the table.** Height 60 lies between CF 58 (at 30 minutes) and CF 88 (at 35 minutes), and only just above 58, so the median should be just over 30 minutes. It is. Do this check for every reading: it catches misread scales.

**Interpreting.** The median, 30.3 minutes, is the time by which half the runners had finished. The IQR, 9.6 minutes, is the spread of the middle half of the runners; it is not affected by the very fastest or slowest. The 90th percentile means 90% of runners took 40 minutes or less, so the slowest 10% took more than 40 minutes.

Your readings come from your own curve, so small differences are expected. Answers are estimates because the data is grouped and the curve is drawn by hand.

## "Less than" and "more than" questions

A reading up from a value on the horizontal axis gives the number of items **up to** that value.

### Worked example 3

(a) Estimate how many runners finished in under 28 minutes.

Up from 28 to the curve and across: about **44 runners**. (Check: between CF 24 at 25 minutes and 58 at 30 minutes.)

(b) Estimate how many runners took more than 38 minutes.

Up from 38: about 100 runners took 38 minutes or less. So 120 − 100 = **20 runners** took more than 38 minutes.

(c) Runners who finished in 22 minutes or less won a medal. What percentage won a medal?

Up from 22: about 13 runners. 13 ÷ 120 × 100 ≈ **11%**.

The subtraction in (b) is the step most often forgotten. Always ask: does the question want the count below the value, or above it?

## From the curve back to frequencies

If you read the CF at two values, the difference is the frequency between them. This lets you rebuild a frequency table from a curve.

### Worked example 4

A cumulative frequency curve for 80 parcels passes through (0, 0), (2, 10), (4, 34), (6, 62), (8, 74) and (10, 80), where the horizontal axis is mass in kg. Find the frequency of each class of width 2 kg.

```
0 < m ≤ 2:   10 − 0  = 10
2 < m ≤ 4:   34 − 10 = 24
4 < m ≤ 6:   62 − 34 = 28
6 < m ≤ 8:   74 − 62 = 12
8 < m ≤ 10:  80 − 74 = 6
```

The frequencies add to 80, as they must.

## Comparing two distributions

A full comparison uses the **median** for the average and the **IQR** for the spread, each with values and context.

### Worked example 5

The next year, the same race had median 28.5 minutes and IQR 6.8 minutes. Compare the two years.

"The median time fell from about 30.3 to 28.5 minutes, so runners were faster on average in the second year. The IQR fell from about 9.6 to 6.8 minutes, so the middle half of the runners' times were more consistent in the second year."

## Common mistakes

- Plotting at midpoints or lower boundaries instead of upper boundaries.
- Forgetting the starting point at zero cumulative frequency.
- Joining points with straight segments, or drawing a curve that dips.
- Reading the median at n/2 on the horizontal axis instead of the vertical.
- Giving the quartile heights (30 and 90) instead of the values read from the curve.
- Forgetting to subtract from the total for "more than" questions.
- Comparing medians without commenting on the IQR.

## Exam technique for the command words

- **Complete the cumulative frequency table:** running totals, last value equal to the total.
- **Draw the cumulative frequency diagram:** crosses at upper boundaries, starting point, smooth curve.
- **Use your diagram to estimate:** draw the reading lines on the graph so the method is visible.
- **Compare:** median and IQR, values quoted, in context.

## Next steps

Try the [cumulative frequency diagrams practice questions](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams-practice/) and revise from the [cumulative frequency diagrams revision notes](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams-revision-notes/). For other measures of average and spread, see [averages and measures of spread](/resources/cambridge-o-level-mathematics-4024-averages-and-measures-of-spread/), and for comparison technique, [interpreting statistical data](/resources/cambridge-o-level-mathematics-4024-interpreting-statistical-data/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 9.6 Cumulative frequency diagrams.
