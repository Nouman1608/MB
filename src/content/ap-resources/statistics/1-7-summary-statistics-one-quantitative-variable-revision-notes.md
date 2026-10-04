---
resourceId: "mb-ap-stats-1.7-revision-notes"
title: "Summary Statistics for One Quantitative Variable: Revision Notes (Statistics 1.7)"
description: "One-page recap of mean, median, quartiles, percentiles, range, IQR, standard deviation, the two outlier rules, resistance and unit changes, with the mistakes that cost marks."
course: "statistics"
unit: 1
topics: ["1.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-1.7-study-guide"]
learningObjectives:
  - "Recall the formulas and definitions for measures of centre, position and variability"
  - "Spot the common errors in summary-statistic questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Report Sx (divides by n − 1), not σx."
related: ["mb-ap-stats-1.7-study-guide", "mb-ap-stats-1.7-practice", "mb-ap-stats-1.7-checklist"]
next: "mb-ap-stats-1.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics"]
keyPoints:
  - "Order the data first."
  - "Resistant: median and IQR. Non-resistant: mean, range and s."
  - "Interpret every statistic in context, with units."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-study-guide/).

## Recap

- **Centre** tells you a typical value; **variability** tells you how much values differ.
- **Mean** x̄ uses every value. **Median** is the middle of the ordered data.
- **Q1** and **Q3** are the medians of the lower and upper halves; they bound the middle 50%.
- The **p-th percentile** has p% of the values at or below it. Q1 = 25th, Q3 = 75th percentile.
- **Standard deviation s** is a typical distance of the values from the mean.

## Key relationships

| Statistic | How to find it | Resistant? |
|---|---|---|
| Mean | x̄ = Σxᵢ / n | No |
| Median | middle value (n odd) or mean of two middle values (n even) | Yes |
| Range | max − min | No |
| IQR | Q3 − Q1 | Yes |
| Sample standard deviation | s = √[ Σ(xᵢ − x̄)² / (n − 1) ]; variance = s² | No |
| 1.5 × IQR outlier rule | below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR | uses resistant statistics |
| 2s outlier rule | below x̄ − 2s or above x̄ + 2s | uses non-resistant statistics |
| Multiply data by k (k > 0) | centre, position, range, IQR and s all × k; variance × k² | — |
| Add c to data | centre and position + c; range, IQR and s unchanged | — |

## Assumptions and conventions

- The values are measurements of one **quantitative** variable on the same units.
- Quartiles: split at the median; when n is odd, leave the median out of both halves (graphing-calculator method). Other methods exist, so show your halves.
- s is the **sample** standard deviation (n − 1). On a calculator it is Sx.
- An outlier rule only flags a **potential** outlier. Investigate it; do not delete it unless it is an error.

## Mistakes to avoid

1. **Not ordering the data** before finding the median or quartiles.
2. **IQR = Q3 − median** or confusing IQR with range.
3. **Reporting σx** (divides by n) instead of Sx.
4. **Forgetting the square root**: s² is the variance, in squared units.
5. **No context**: always name the variable, the individuals and the units.
6. **Choosing the mean for skewed data** or data with outliers. Prefer the median and IQR.
7. **Thinking unit changes leave s unchanged**: multiplying the data multiplies s.

## Quick self-check

1. Data (kg): 4, 7, 7, 9, 13. What is the IQR? *(Q1 = 5.5, Q3 = 11, IQR = 5.5 kg)*
2. A data set has Q1 = 30 s and Q3 = 42 s. Is 61 s a potential outlier by the 1.5 × IQR rule? *(Yes: upper fence = 42 + 18 = 60 s, and 61 > 60)*
3. Lengths have mean 12 cm and s = 3 cm. What are the mean and s in millimetres? *(120 mm and 30 mm)*

Next: [practice questions](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-practice/).
