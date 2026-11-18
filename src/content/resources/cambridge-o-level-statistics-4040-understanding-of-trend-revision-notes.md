---
title: "Cambridge O Level Statistics (4040): Understanding of trend -- Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 10 – Time series"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 10.1
syllabusTopics:
  - qualification: "o-level"
    topic: "time-series-4040"
    subtopic: "understanding-of-trend-4040"
description: "Condensed notes on trend, choosing and calculating moving averages, centring and describing a trend line, with exam traps and a self-test, for O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 10.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: understanding of trend, including determination by calculation of moving averages, with centring where appropriate. Full explanations and longer worked examples are in the [trend study guide](/resources/cambridge-o-level-statistics-4040-understanding-of-trend/), and exam-style questions are in the [trend practice questions](/resources/cambridge-o-level-statistics-4040-understanding-of-trend-practice/). Seasonal variation and prediction are revised in the [seasonal variation revision notes](/resources/cambridge-o-level-statistics-4040-understanding-of-seasonal-variation-revision-notes/).

## Core recall

- **Time series**: observations at successive, usually equal, time intervals, plotted in order and joined by straight lines.
- **Trend**: the long-term underlying movement of the series, with short-term variation smoothed out.
- **Moving average**: the mean of a block of consecutive values; the block moves on one period at a time.
- **Order**: the number of values in each block. It must equal the length of the seasonal cycle.
- **Odd order**: each average sits on the middle period of its block. No centring.
- **Even order**: each average sits between two periods. **Centre** by averaging neighbouring pairs.
- **Trend line**: a straight line drawn by eye through the moving averages.

## Key terms

| Term | Meaning |
|---|---|
| Trend | Long-term direction of the series |
| Seasonal variation | Regular pattern repeating over a fixed cycle |
| Random variation | Irregular, unpredictable movement |
| Cycle | The number of periods before the seasonal pattern repeats |
| Running total | Each new total = previous total − value leaving + value joining |
| Centred moving average | Mean of two neighbouring even-order moving averages, placed on an actual period |
| Estimated trend value | A value read from the trend line for a given period |

## Choosing the order

| Data | Order |
|---|---|
| Termly (3 terms a year) | 3 |
| Quarterly | 4 |
| Weekdays (Mon–Fri) | 5 |
| Every day of the week | 7 |
| Monthly with a yearly pattern | 12 |

Reason to quote: each average then contains one value from every season, so the seasonal effect cancels.

## Small worked reminders

### 3-point moving averages

Termly sales: 30, 18, 24 | 33, 21, 27 | 36, 24, 30.

```
(30+18+24)/3 = 24   plotted at term 2
(18+24+33)/3 = 25   term 3
then 26, 27, 28, 29, 30
```

Trend: steady rise of 1 unit per term.

### 4-point with centring

Quarterly values: 12, 20, 26, 14, 16, 24, 30, 18.

```
4-point totals:   72, 76, 80, 84, 88
4-point averages: 18, 19, 20, 21, 22      (between quarters)
Centred:          18.5, 19.5, 20.5, 21.5  (at Q3, Q4, Q1, Q2)
Shortcut:         (72 + 76) ÷ 8 = 18.5
```

Eight quarters give four centred values: two quarters are lost at each end.

## How many moving averages?

| Values n, order k | Number of moving averages |
|---|---|
| Odd k | n − k + 1 |
| Even k, after centring | n − k |

For example, 12 quarterly values give 9 four-point averages and 8 centred values.

## Drawing and describing the trend line

- Plot the moving averages with a different symbol from the data.
- Rule one straight line by eye through the moving averages, balancing points on each side.
- Do not draw the line through the original data.
- Describe direction, rate per period with units, consistency, and context.
- Rate: (last moving average − first) ÷ (number of periods between them).

## Sense checks

- Moving averages should vary much less than the data; if they still zigzag, the order is probably wrong.
- Each moving average lies between the smallest and largest values in its block.
- Consecutive running totals differ only by (value joining − value leaving).
- A centred value lies between the two averages it came from.

## Exam traps

- Order of moving average not equal to the cycle length.
- Plotting an average at the end of its block, not the middle.
- Skipping centring for an even order.
- Centring from rounded averages; use totals ÷ 8 instead.
- Trend line drawn through the data or as a zigzag through the averages.
- "Upward trend" without a rate or context.
- Counting the periods for the rate wrongly: from the 1st to the 8th centred value is 7 periods, not 8.

## Quick self-test

1. Define the trend of a time series.
2. Which order of moving average suits quarterly data, and why?
3. Find the first 3-point moving average of 14, 20, 11, 17.
4. A 5-point total is 340. The next value in the series is 75 and the value leaving the block is 62. Find the next total.
5. Why must 4-point moving averages be centred?
6. Two neighbouring 4-point averages are 36.5 and 38.0. Find the centred value.
7. Two neighbouring 4-point totals are 148 and 154. Find the centred value.
8. How many 7-point moving averages can be found from 21 daily values?
9. How many centred 4-point moving averages come from 16 quarterly values?
10. Centred values run from 40.0 at the first to 47.0 at the eighth. Estimate the rate of trend.
11. Where should a trend line be drawn?
12. Give two features of a complete description of a trend.

### Answers

1. The long-term underlying movement of the series once short-term variation is smoothed out.
2. 4-point, because each block then contains one value from each quarter, so the seasonal effect cancels.
3. (14 + 20 + 11) ÷ 3 = 15.
4. 340 − 62 + 75 = 353.
5. Their middle falls between two quarters, so they do not line up with actual periods.
6. (36.5 + 38.0) ÷ 2 = 37.25.
7. (148 + 154) ÷ 8 = 37.75.
8. 21 − 7 + 1 = 15.
9. 16 − 4 = 12.
10. 7.0 ÷ 7 = 1.0 per period.
11. Through the moving averages, as a straight line by eye.
12. Any two of: direction; rate per period with units; whether it is steady; the context.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 10.1: understanding of trend, including determination by calculation of moving averages, with centring, where appropriate.
