---
title: "Cambridge O Level Statistics (4040): Quartiles and percentiles -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 5 – Statistical measures, their interpretation and appropriate use"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 5.3
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "quartiles-and-percentiles-4040"
description: "Revision notes on quartiles and percentiles for 4040: targets, interpolation, lists and tables, cut-offs, percentile ranks, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 5.3 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "Quartiles and percentiles", including estimation from cumulative frequency curves or polygons and by linear interpolation from cumulative frequency tables. Full worked examples are in the [quartiles and percentiles study guide](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles/), and the [quartiles and percentiles practice questions](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles-practice/) give exam-style drill.

## Key terms

| Term | Meaning |
|---|---|
| Lower quartile (Q1) | Value with a quarter of the data at or below it |
| Median | Value with half the data at or below it |
| Upper quartile (Q3) | Value with three quarters of the data at or below it |
| Interquartile range | Q3 − Q1; spread of the middle half |
| P-th percentile | Value with P% of the data at or below it |
| Percentile rank | Percentage of the data at or below a given value |
| Linear interpolation | Estimating within a class by assuming values are spread evenly across it |

## Targets for grouped data

| Measure | Target cumulative frequency |
|---|---|
| Q1 | n/4 |
| Median | n/2 |
| Q3 | 3n/4 |
| P-th percentile | P × n/100 |
| Cut-off for the top k% | (100 − k) × n/100 |

## Interpolation formula

```
value = L + (target − F) / f × w

L = lower boundary of the class containing the target
F = cumulative frequency before that class
f = frequency of that class
w = width of that class
```

**Worked reminder.** Class 30 ≤ x < 40, F = 44, f = 36, n = 120. Median target 60: 30 + (16/36) × 10 = 34.4.

**Percentile rank (reverse).** Cumulative frequency at value v = F + (v − L)/w × f; then divide by n and multiply by 100.

## Lists and ungrouped tables (halves method)

1. Order the data; find the median.
2. Lower half: values below the median position; upper half: values above it (exclude the median itself when n is odd).
3. Q1 and Q3 are the medians of the halves.

**Worked reminder.** 12, 15, 18, 21, 24, 26, 30, 33, 41: median 24; Q1 = (15 + 18)/2 = 16.5; Q3 = (30 + 33)/2 = 31.5; IQR 15.

In an ungrouped frequency table, use the cumulative frequency column to find which value occupies each position.

## Reading from graphs

- Cumulative frequency graph: go across at the target height, then down.
- Cumulative percentage graph: go across at P% for the P-th percentile.
- Polygon readings equal interpolation; curve readings differ slightly. Both are estimates.

## Using the measures

- **Middle half**: between Q1 and Q3.
- **Top k% cut-off**: the (100 − k)th percentile.
- **Comparing groups**: compare medians (average) and IQRs (spread), with figures, in context.
- The IQR is not affected by a few extreme values, unlike the range.

**Worked reminder: a cut-off.** 200 applicants; the top 10% are interviewed. Target 0.9 × 200 = 180. If the cumulative frequency is 164 at a score of 70 and the class 70 ≤ s < 80 holds 24 applicants, the cut-off is 70 + (16/24) × 10 = 76.7, so a score of about 77 is needed.

**Worked reminder: when low is good.** For race times, "the fastest 25%" are the lowest times, so the qualifying time is Q1, not Q3.

## Exam traps

- Reading the 15th percentile for "the top 15%".
- Using the class frequency where F (the cumulative frequency before the class) is needed.
- Using the width of the wrong class when widths differ.
- Using limits (40) instead of boundaries (39.5) for rounded data.
- Mixing the halves method with n/4 positions in one answer.
- Leaving the overall median inside both halves when n is odd.
- Giving an estimate without saying it is one.

## Quick self-test

1. n = 180. Write the targets for Q1 and the 70th percentile.
2. What does it mean that the 90th percentile of masses is 62 kg?
3. Class 50 ≤ t < 55, F = 42, f = 54, target 80. Estimate the value.
4. What percentile marks the cut-off for the top 25%?
5. For 2, 4, 5, 7, 9, 11, 14, find Q1, median and Q3.
6. A cumulative percentage graph reads 72% at 48 s. What percentile is 48 s?
7. Using question 6, what percentage took longer than 48 s?
8. Class 60 ≤ x < 80, F = 165, f = 63, n = 250. Find the percentile rank of 70.
9. Why might a curve give a slightly different median from a polygon?
10. Lengths to the nearest cm in class 20–24. What lower boundary is used in interpolation?
11. Group A: median 40, IQR 12. Group B: median 46, IQR 7. Compare.
12. Why is the IQR preferred to the range when there is an extreme value?

### Answers

1. 45 and 126.
2. 90% of the masses are 62 kg or less.
3. 50 + (38/54) × 5 = 53.5.
4. The 75th percentile (the upper quartile).
5. Median 7; Q1 = 4 (from 2, 4, 5); Q3 = 11 (from 9, 11, 14).
6. The 72nd percentile.
7. 28%.
8. 165 + 0.5 × 63 = 196.5; 196.5/250 = 78.6%, about the 79th percentile.
9. A curve does not assume values are evenly spread within each class, so between plotted points it bends differently from straight lines.
10. 19.5.
11. Group B scored higher on average (median 46 against 40) and more consistently (IQR 7 against 12).
12. The IQR uses the middle half only, so one extreme value does not change it.

## Frequently asked questions

**Do I always interpolate for grouped data?**
Yes, when working from a table, unless the target equals a cumulative frequency exactly, in which case the answer is that boundary.

**Which quartile rule should I use for a list?**
Use the method you have been taught (these pages use the halves method), show the ordered values, and apply it consistently.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 5, section 5.3: Quartiles and percentiles.
