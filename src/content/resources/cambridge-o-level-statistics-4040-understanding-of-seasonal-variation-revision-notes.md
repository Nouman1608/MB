---
title: "Cambridge O Level Statistics (4040): Understanding of seasonal variation -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 10 – Time series"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 10.2
syllabusTopics:
  - qualification: "o-level"
    topic: "time-series-4040"
    subtopic: "understanding-of-seasonal-variation-4040"
description: "Condensed notes on seasonal variation, mean seasonal variation and prediction from a trend line and seasonal component, with exam traps and a self-test, for 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 10.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: understanding of seasonal variation, including calculation of mean seasonal variation and use of a trend line and seasonal component in prediction. Full worked examples are in the [seasonal variation study guide](/resources/cambridge-o-level-statistics-4040-understanding-of-seasonal-variation/), and exam-style questions are in the [seasonal variation practice questions](/resources/cambridge-o-level-statistics-4040-understanding-of-seasonal-variation-practice/). Moving averages and the trend line are revised in the [trend revision notes](/resources/cambridge-o-level-statistics-4040-understanding-of-trend-revision-notes/).

## Core recall

```
actual = trend + seasonal variation + random variation

individual seasonal variation = actual − moving average (centred if needed)
mean seasonal variation       = mean of the individual values for that season
prediction                    = trend value from the trend line + mean seasonal variation
```

- Positive seasonal variation: the season is typically above the trend.
- Negative: typically below the trend.
- Check: the mean seasonal variations over one cycle add up to roughly zero.

## Key terms

| Term | Meaning |
|---|---|
| Season | Any fixed part of the cycle: quarter, term, month, day |
| Individual seasonal variation | Actual value minus the moving average for one period |
| Mean seasonal variation (seasonal component) | Average of the individual seasonal variations for one season |
| Trend value | Value on the trend line for a period |
| Prediction | Trend value plus the seasonal component for that season |
| Random variation | What is left after trend and seasonal effects |

## Method in five steps

1. Moving averages of the right order (centred if even).
2. Actual − moving average for every period that has one.
3. Group by season; mean of each group.
4. Check the means total about zero.
5. Predict: extend the trend line, read the trend value for the future period, add the seasonal component.

## Small worked reminders

### Mean seasonal variation from individual values

| Season | Individual values | Mean |
|---|---|---|
| Q1 | −8.5, −7.5 | −8.0 |
| Q2 | 3.0, 4.0 | 3.5 |
| Q3 | 14.5, 13.5 | 14.0 |
| Q4 | −9.0, −10.0 | −9.5 |

Check: −8.0 + 3.5 + 14.0 − 9.5 = 0.

### Prediction from a trend described by a rate

The trend line passes through 150 at Year 3 Q2 and rises by 2.5 per quarter. The Q4 component is −9.5.

```
Year 3 Q4 is 2 quarters later: trend ≈ 150 + 2 × 2.5 = 155
prediction ≈ 155 − 9.5 = 145.5
```

### Termly data

With 3 terms a year, use 3-point moving averages; no centring. Each term's component is the mean of actual − moving average for that term.

## Reading seasonal components

| Component | Sentence |
|---|---|
| Q4 = +25.8 (sales, $ thousand) | "Fourth-quarter sales are typically about $25 800 above the trend" |
| Term 2 = 0 | "Term 2 is typically on the trend" |
| Monday = −12 (visitors) | "Mondays typically have about 12 fewer visitors than the trend" |

## Reliability of predictions

| More reliable | Less reliable |
|---|---|
| Moving averages close to a straight line | Moving averages curve or scatter |
| Individual values for each season similar | Individual values for a season vary widely |
| Short extension of the trend line | Long extension into the future |
| Conditions unchanged | New factors, such as a competitor or a price change |

## Exam traps

- Moving average − actual instead of actual − moving average.
- Averaging all individual values together instead of by season.
- Using the last moving average as the trend for a future period.
- Adding a negative component instead of subtracting it.
- Miscounting quarters when extending the trend.
- Adding the component to last year's actual value instead of the trend.
- Skipping the zero-total check, so an arithmetic slip goes unnoticed.
- Calling a prediction exact; it is an estimate.

## Quick self-test

1. Write the formula for an individual seasonal variation.
2. An actual value is 84 and the centred moving average is 91.5. Find the individual seasonal variation.
3. Individual values for Q3 are 6.2, 5.4 and 6.4. Find the mean seasonal variation.
4. Three mean seasonal variations for quarterly data are 12, −5 and −9. Estimate the fourth.
5. What does a mean seasonal variation of −14 for Q1 mean?
6. A trend value is 230 and the seasonal component is −18. Predict the value.
7. A trend line passes through 64 at Year 2 Q3 and rises by 1.5 per quarter. Find the trend value for Year 3 Q2.
8. Why should a prediction use the trend line rather than the last moving average?
9. Give one reason a prediction might be unreliable.
10. Why should the mean seasonal variations total roughly zero?
11. For termly data, which order of moving average is used?
12. A student predicts next year's Q4 by adding the Q4 component to this year's Q4 actual value. Explain the error.

### Answers

1. Actual value − moving average for that period.
2. 84 − 91.5 = −7.5.
3. 18 ÷ 3 = 6.0.
4. About 2, since the four should total roughly zero: −(12 − 5 − 9) = 2.
5. Q1 values are typically about 14 below the trend.
6. 230 − 18 = 212.
7. Year 2 Q3 to Year 3 Q2 is 3 quarters: 64 + 4.5 = 68.5.
8. The last moving average belongs to a period before the end of the data; the trend line extends to the period being predicted.
9. Any one of: the trend line is extended a long way; the individual seasonal values vary widely; conditions may change.
10. Over a full cycle, periods above and below the trend balance out.
11. 3-point.
12. The seasonal component measures the difference from the trend, so it must be added to the trend value for that period, not to an actual value that already contains a seasonal effect.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 10.2: understanding of seasonal variation, including calculation of mean seasonal variation and use of a trend line and seasonal component in prediction.
