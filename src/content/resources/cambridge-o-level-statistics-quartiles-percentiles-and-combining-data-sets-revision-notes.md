---
title: "Cambridge O Level Statistics: Quartiles, percentiles and combining data sets (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Quartiles Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on quartiles, percentiles, interpolation and combined means and standard deviations for Cambridge O Level Statistics, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes cover sections 5.3 and 5.4 of the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027, which is not tiered. For full explanations and longer worked examples, read the [study guide](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets/) first. Then test yourself with the [practice questions](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets-practice/).

Use the [4040 course hub](/boards/cambridge/o-level/statistics/) and the [printable checklist](/checklists/cambridge/o-level/statistics/) to tick off the outcomes. Not sure where you stand? Take the [free 10-minute diagnostics](/diagnostics/). Cumulative frequency tables and graphs are revised in the [cumulative frequency guide](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/).

## Section 5.3: definitions

| Term | Meaning |
|---|---|
| Median | Value with half of the data at or below it (the 50th percentile) |
| Lower quartile, Q1 | Value with a quarter of the data at or below it (the 25th percentile) |
| Upper quartile, Q3 | Value with three quarters of the data at or below it (the 75th percentile) |
| Interquartile range | Q3 − Q1, the width of the central 50% of the data |
| P-th percentile | Value with P% of the data at or below it |
| Percentile rank of a value | Percentage of the data at or below that value |

## Section 5.3: target positions

For a total frequency n, the cumulative frequency you look for is:

| Measure | Target |
|---|---|
| Q1 | n/4 |
| Median | n/2 |
| Q3 | 3n/4 |
| P-th percentile | P/100 × n |

For "the top 10%" or "the highest 20 values", subtract first: the 90th percentile marks the top 10%, and the highest 20 of n values start at cumulative frequency n − 20.

## Method in steps: from a cumulative frequency table

1. List the upper class boundaries with their cumulative frequencies. The last one must equal n.
2. Work out the target position.
3. Find the first class whose cumulative frequency reaches the target.
4. Apply the interpolation formula.

```
value = lower boundary + (target − CF before) / (class frequency) × (class width)
```

For rounded data, use the true boundaries (for example 9.5 and 19.5 for the classes 10–19 and 20–29). If the target equals a cumulative frequency in the table exactly, the answer is that class's upper boundary and no interpolation is needed.

## Method in steps: from a curve or polygon

1. Plot points at the upper boundaries, starting from (lower boundary of the first class, 0).
2. Mark the target on the cumulative frequency axis.
3. Draw a line across to the graph, then down to the variable axis.
4. Read the value. Leave the guide lines on the graph.
5. For a percentile rank, go the other way: up from the value, then across.

A polygon uses straight segments, so readings equal the interpolation formula. A smooth curve gives a nearby reading. Both are estimates.

## Small worked reminder: interpolation

A table has n = 50 values. The class 40–60 has 22 values before it (cumulative frequency 22 at 40) and holds 19 values, so the cumulative frequency at 60 is 41. The upper quartile target is 3 × 50/4 = 37.5, which falls in this class.

```
Q3 = 40 + (37.5 − 22)/19 × 20 = 40 + 16.3 = 56.3
```

## Section 5.4: combined sets, key facts

| Quantity | Formula |
|---|---|
| Total of a set | Σx = n × mean |
| Sum of squares of a set | Σx² = n × (σ² + mean²) |
| Combined mean | (Σx of all sets) / (total n) |
| Combined σ | √( (Σx² of all sets) / (total n) − combined mean² ) |

The standard deviation here is the population standard deviation σ, which divides by n. The working form is σ² = Σx²/n − mean².

## Method in steps: combining sets

1. For each set, write n, Σx and Σx².
2. Add each of the three totals.
3. Find the combined mean from the totals.
4. Find the combined variance, then take the square root.

## Small worked reminder: combining two sets

Set P has 5 values, mean 6, σ = 2. Set Q has 3 values, mean 10, σ = 1.

```
P: Σx = 30,  Σx² = 5 × (4 + 36) = 200
Q: Σx = 30,  Σx² = 3 × (1 + 100) = 303
Total: n = 8, Σx = 60, Σx² = 503

mean = 60/8 = 7.5
σ² = 503/8 − 7.5² = 62.875 − 56.25 = 6.625
σ = 2.57 (3 s.f.)
```

## Must-know distinctions

- **Mean of means versus combined mean.** Weight each mean by its group size.
- **Average of standard deviations versus combined standard deviation.** The first is never correct. Rebuild Σx².
- **Class limits versus class boundaries.** Interpolate between boundaries.
- **Value to count versus count to value.** Reading a median goes across then down. Reading a percentile rank goes up then across.
- **Quartile versus interquartile range.** The quartile is a value on the scale, and the range is a difference of two quartiles.
- **Percentile versus percentage.** A percentile is a value in the data. A percentage is a share of the data.
- **Adding a value equal to the mean.** The mean stays the same and the standard deviation falls. Removing such a value keeps the mean the same and raises the standard deviation.

## Quick self-test

1. A set has n = 84 values. State the cumulative frequency to read for the lower quartile, the median, the upper quartile and the 40th percentile.
2. Which percentile is the lower quartile?
3. In a cumulative frequency table, 22 values are at or below 30. The next class, 30 < x ≤ 40, holds 16 values. Estimate the value with 30 values at or below it.
4. Ten values have mean 8 and thirty values have mean 12. Find the mean of all forty.
5. Five values have mean 6 and standard deviation 2. Find Σx².
6. Eight values have Σx = 40 and Σx² = 260. Find the standard deviation.
7. Whole-number scores are grouped as 5–9 and 10–14. What is the upper boundary of the class 5–9?
8. A student says the combined standard deviation of two sets is the mean of their standard deviations. Give one reason this is wrong.
9. A value equal to the mean is removed from a set. State what happens to the mean and to the standard deviation.
10. A table of 50 values has classes 0–20, 20–40, 40–60 and 60–100 with cumulative frequencies 6, 22, 41 and 50. Estimate the lower quartile, the upper quartile and the interquartile range.
11. Twelve values have mean 30. They are combined with n values of mean 40 and the combined mean is 36. Find n.

### Answers

1. Lower quartile 21, median 42, upper quartile 63, 40th percentile 33.6.
2. The 25th percentile.
3. 30 + (30 − 22)/16 × 10 = **35**.
4. (10 × 8 + 30 × 12)/40 = 440/40 = **11**.
5. 5 × (4 + 36) = **200**.
6. Mean = 5. σ² = 260/8 − 25 = 7.5, so σ = **2.74** (3 s.f.).
7. **9.5**.
8. The standard deviation depends on the squares of the values, which depend on the group means and sizes, so it cannot be averaged. The two means being different also adds to the combined spread.
9. The mean is unchanged. The standard deviation increases, because n falls while the sum of squared deviations stays the same.
10. Q1 target 12.5, in the class 20–40: 20 + (12.5 − 6)/16 × 20 = 28.1. Q3 target 37.5, in the class 40–60: 40 + (37.5 − 22)/19 × 20 = 56.3. Interquartile range = 56.32 − 28.13 = **28.2**.
11. 12 × 30 + 40n = 36 × (12 + n), so 360 + 40n = 432 + 36n, so 4n = 72 and n = **18**.

## Where marks are usually lost

- Using the class limits instead of the boundaries for rounded data.
- Leaving out the starting point (0 at the lower boundary of the first class) when drawing the graph, so readings are wrong.
- Interpolating in the wrong class, or using the cumulative frequency of the class itself instead of the one before it.
- Reading at n/2 for the lower quartile, or at n/4 for the median, through careless target positions.
- Taking the mean of two standard deviations, or of two means for groups of different sizes.
- Forgetting that Σx² for each set includes the mean squared, so it is not just n × σ².
- Rounding the combined mean before using it to find the combined variance, which shifts the standard deviation.
- Giving a graph reading with no guide lines. Show the lines, because the examiner needs to see your method.
- Quoting an estimate to too many figures. A value read from a graph does not justify four decimal places.

## Next steps

Work through the [practice questions](/resources/cambridge-o-level-statistics-quartiles-percentiles-and-combining-data-sets-practice/) once you can finish the self-test without notes. Section 6 builds on this unit, in the [guide on adding or multiplying by a constant](/resources/cambridge-o-level-statistics-effects-of-adding-or-multiplying-by-a-constant-and/).

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment, topic 5, sections 5.3 and 5.4.
