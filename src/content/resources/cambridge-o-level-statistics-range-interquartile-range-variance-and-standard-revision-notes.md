---
title: "Cambridge O Level Statistics: Range, interquartile range, variance and standard deviation (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Spread Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on range, IQR, variance and standard deviation, with formulas, method steps and a self-test, for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes are for Cambridge O Level Statistics (4040), aligned to the syllabus for examination in 2025, 2026 and 2027. They cover section 5.2: range, interquartile range, variance and standard deviation, from a set of numbers, an ungrouped frequency distribution and a grouped frequency distribution, plus interpretation and comparison of spread. For the reasoning and longer worked examples, read the [study guide](/resources/cambridge-o-level-statistics-range-interquartile-range-variance-and-standard/). For questions, use the [practice set](/resources/cambridge-o-level-statistics-range-interquartile-range-variance-and-standard-practice/).

Related pages: the [Cambridge O Level Statistics course page](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/), the [averages notes](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class/) and the [cumulative frequency notes](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/). Not sure where you stand? Take a [free diagnostic](/diagnostics/).

## Definitions

- **Dispersion (spread):** how widely the values are scattered around the centre.
- **Range:** largest value minus smallest value.
- **Lower quartile Q1:** the middle value of the bottom half of the ordered data.
- **Upper quartile Q3:** the middle value of the top half of the ordered data.
- **Interquartile range (IQR):** Q3 − Q1, the width of the middle half of the data.
- **Variance:** the mean of the squared distances from the mean.
- **Standard deviation:** the square root of the variance, in the same units as the data.

## Formulas

| Item | Set of numbers | Frequency table (ungrouped or grouped) |
|---|---|---|
| Mean | x̄ = Σx / n | x̄ = Σfx / Σf |
| Variance (deviations form) | Σ(x − x̄)² / n | Σf(x − x̄)² / Σf |
| Variance (squares form) | Σx² / n − x̄² | Σfx² / Σf − x̄² |
| Standard deviation | √variance | √variance |
| Range | largest − smallest | grouped: estimate from class boundaries |
| IQR | Q3 − Q1 | grouped: Q3 − Q1 by interpolation |

In a grouped table, x is the class midpoint. Here the divisor is n (or Σf). If a question gives you its own formula or says what to divide by, use that.

## Method in steps

**Range and IQR from a list**

1. Put the values in order.
2. Range = largest − smallest.
3. Find the median. If n is odd, leave it out of both halves.
4. Q1 = middle of the bottom half. Q3 = middle of the top half.
5. IQR = Q3 − Q1.

**Range and IQR from an ungrouped table**

1. Build a cumulative frequency column.
2. Use the halves method on the ordered values. With n = 40, each half has 20 values, so Q1 lies between the 10th and 11th values and Q3 between the 30th and 31st.
3. Read the value whose cumulative range contains each position.

**Variance and standard deviation from a list**

1. Find x̄.
2. Either find each (x − x̄)² and add them, or add all the x² and use Σx²/n − x̄².
3. Divide by n.
4. Take the square root for the standard deviation.

**From a table (ungrouped or grouped)**

1. Grouped only: write the midpoint of each class.
2. Add columns fx and fx² (multiply x² by f).
3. Total f, fx and fx².
4. Mean = Σfx/Σf. Variance = Σfx²/Σf − mean².
5. Square root for the standard deviation. Grouped answers are estimates.

**IQR from a grouped table by interpolation**

1. Build the cumulative frequency, with the upper boundary of each class.
2. Find the positions n/4 and 3n/4.
3. In the class containing the position: lower boundary + (position − cumulative before)/(class frequency) × class width.
4. Subtract.

## Small worked reminders

**Variance of a list.** Values 2, 6, 6, 10. The mean is 6. The squared deviations are 16, 0, 0, 16, which total 32. Variance = 32/4 = **8**. Standard deviation = √8 = **2.83** (3 s.f.). Check: Σx² = 4 + 36 + 36 + 100 = 176, and 176/4 − 36 = 8.

**Ungrouped table.** Values 1, 2, 3, 4 with frequencies 2, 3, 3, 2. Here n = 10, Σfx = 2 + 6 + 9 + 8 = 25, so the mean is 2.5. Σfx² = 2 + 12 + 27 + 32 = 73. Variance = 7.3 − 6.25 = **1.05**, and the standard deviation is about **1.02**. The range is 4 − 1 = **3**.

**Grouped estimate.** Classes 0 to under 10 (frequency 4) and 10 to under 20 (frequency 6). Midpoints are 5 and 15. Mean = (20 + 90)/10 = 11. Σfx² = 4 × 25 + 6 × 225 = 1450. Variance = 145 − 121 = **24**, so the standard deviation is about **4.90**.

**Grouped IQR.** 80 values, classes 0 to under 20 (15), 20 to under 40 (30), 40 to under 60 (25), 60 to under 100 (10). Cumulative: 15, 45, 70, 80. Positions 20 and 60. Q1 = 20 + (20 − 15)/30 × 20 = 23.3. Q3 = 40 + (60 − 45)/25 × 20 = 52. IQR = about **28.7**.

## Must-know distinctions

| Compare | Key point |
|---|---|
| Range and IQR | The range uses two values and is affected by extremes. The IQR uses the middle half and ignores extremes. |
| Variance and standard deviation | Variance is in squared units. The standard deviation is in the original units. |
| Σ(x − x̄)² and (Σ(x − x̄))² | The first is positive. The second is always zero. |
| Σx² and (Σx)² | Square each value, then add. Not add, then square. |
| Σfx² and Σ(fx)² | Square x, then multiply by f. |
| Exact and estimate | Ungrouped answers are exact. Grouped answers are estimates because values are replaced by midpoints. |

## Checks before you finish

- The variance can never be negative. If Σfx²/Σf − mean² comes out negative, you have made an arithmetic slip.
- The standard deviation is usually smaller than the range. For a grouped table it is a sensible fraction of the estimated range.
- The IQR must be positive and no larger than the range.
- Units: standard deviation in the units of the data, variance in squared units.

## Interpretation

- Small spread: values are close together, so the average represents them well. The data is consistent.
- Large spread: values are scattered, so the average hides a lot of variation.
- Comparing: name the measure, quote both values and say what it means in the context. Compare the same measure for both sets and use the same units.
- Skewed data or outliers: prefer the median and IQR.
- Roughly symmetrical data: the mean and standard deviation use every value and suit it well.
- An extreme value changes the range and standard deviation a great deal, and the IQR little or not at all.

## Quick self-test

1. Find the range of 14, 9, 22, 17, 5, 30.
2. Find Q1, Q3 and the IQR of 3, 5, 6, 8, 9, 12, 14.
3. Find the variance and standard deviation of 3, 5, 7, 9.
4. For ten values, Σx = 60 and Σx² = 400. Find the variance and the standard deviation.
5. The values 1, 2 and 3 occur 2, 5 and 3 times. Find the mean and the standard deviation.
6. Classes 0 to under 10 (frequency 4) and 10 to under 20 (frequency 6). Estimate the standard deviation.
7. 80 values, classes 0 to under 20 (15), 20 to under 40 (30), 40 to under 60 (25), 60 to under 100 (10). Estimate the IQR.
8. A data set has variance 2.25. What is its standard deviation?
9. One value in a data set is made far larger. Which of the range, IQR and standard deviation stays the same?
10. Team A has a standard deviation of 4.1 points and team B has 7.3 points, with equal means. Which team is more consistent? Give a reason.

### Answers

1. 30 − 5 = **25**.
2. The median is 8. The lower half is 3, 5, 6, so Q1 = **5**. The upper half is 9, 12, 14, so Q3 = **12**. IQR = **7**.
3. Mean 6. Squared deviations 9, 1, 1, 9 total 20. Variance = **5**. Standard deviation = √5 = **2.24**.
4. Variance = 400/10 − 6² = 40 − 36 = **4**. Standard deviation = **2**.
5. n = 10. Σfx = 2 + 10 + 9 = 21, so the mean is **2.1**. Σfx² = 2 + 20 + 27 = 49. Variance = 4.9 − 4.41 = 0.49. Standard deviation = **0.7**.
6. The variance is 24, as in the reminder above. The standard deviation is about **4.90**.
7. Q1 = **23.3**, Q3 = **52**, so the IQR is about **28.7**.
8. √2.25 = **1.5**.
9. The **IQR**.
10. **Team A**. Its standard deviation is smaller, so its scores are closer to the mean.

## Where marks are usually lost

- Stopping at the variance when the question asks for the standard deviation.
- Using Σx² when the table needs Σfx².
- Subtracting a rounded mean in the squares form, which spoils the final digits.
- Using class boundaries instead of midpoints for the grouped mean and standard deviation.
- Reading quartiles from the wrong positions: n/4 and 3n/4 are positions in the data, not values.
- Quoting Q1 and Q3 but never subtracting.
- Writing a grouped answer as exact instead of an estimate.
- Comparing two sets with "A is bigger" and no mention of what spread means in context.
- Comparing a range for one set with a standard deviation for the other.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, from Cambridge Assessment International Education, part of Cambridge University Press & Assessment. These notes cover section 5.2, measures of dispersion.
