---
title: "Cambridge O Level Statistics (4040): Understanding of trend"
resourceType: "study-guides"
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
description: "What a trend is, choosing the right moving average, centring, running totals, drawing and describing a trend line, for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 10.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "understanding of trend", which the syllabus says includes "determination by calculation of moving averages, with centring, where appropriate". The whole of topic 10 is introduced in the [time series and moving averages study guide](/resources/o-level-statistics-4040-time-series-moving-averages/). This page concentrates on the trend itself: what it is, how to choose and calculate the right moving average, and how to draw and describe a trend line. Seasonal variation, the second half of the topic, has its own [seasonal variation study guide](/resources/cambridge-o-level-statistics-4040-understanding-of-seasonal-variation/). For recall and practice, use the [trend revision notes](/resources/cambridge-o-level-statistics-4040-understanding-of-trend-revision-notes/) and the [trend practice questions](/resources/cambridge-o-level-statistics-4040-understanding-of-trend-practice/).

## What a trend is

A time series is a set of observations recorded at successive, usually equal, intervals of time: daily visitors, monthly rainfall, quarterly sales. A time series graph plots the observations against time and joins consecutive points with straight lines, because the order matters.

The value at any time can be thought of as made up of parts:

| Component | Meaning | Example in shop sales |
|---|---|---|
| Trend | The long-term underlying movement | Sales slowly rising as the town grows |
| Seasonal variation | A pattern that repeats over a fixed cycle | Every fourth quarter is higher because of holiday spending |
| Random (irregular) variation | Unpredictable movements left over | A week of flooding closes the shop |

The trend is what remains when the short-term ups and downs are smoothed away. It answers the question "ignoring the season, is the series going up, going down or staying level, and how fast?"

## Why moving averages reveal the trend

A moving average replaces each block of consecutive values by their mean, then moves along one period and repeats. If each block covers **exactly one complete cycle**, it contains one value from each season. High and low seasons then balance inside every average, so the seasonal pattern largely disappears and the trend shows through. Random variation is also reduced, because averaging damps single unusual values.

This is why the **order** of the moving average must match the length of the cycle:

| Data | Cycle | Order of moving average |
|---|---|---|
| Three school terms per year | 3 terms | 3-point |
| Quarterly | 4 quarters | 4-point |
| Days of a five-day working week | 5 days | 5-point |
| Days of a full week | 7 days | 7-point |
| Monthly, with a yearly pattern | 12 months | 12-point |

A moving average of the wrong order leaves part of the seasonal pattern in the averages, so they still zigzag.

## Calculating moving averages efficiently: running totals

For long series, find each new total from the previous one: subtract the value that leaves the block and add the value that joins it. Then divide every total by the order. This is faster than adding each block from scratch and makes a slip easy to spot, because each total differs from the last by a small amount.

## Worked example 1: an odd order (no centring)

A library records visitors on weekdays (Monday to Friday) for two weeks.

| | Mon | Tue | Wed | Thu | Fri |
|---|---|---|---|---|---|
| Week 1 | 120 | 95 | 100 | 110 | 150 |
| Week 2 | 130 | 100 | 108 | 117 | 160 |

The cycle is five days, so use 5-point moving averages.

```
First total:  120 + 95 + 100 + 110 + 150           = 575  → 115.0  (Week 1 Wed)
Next:         575 − 120 + 130                      = 585  → 117.0  (Week 1 Thu)
              585 − 95 + 100                       = 590  → 118.0  (Week 1 Fri)
              590 − 100 + 108                      = 598  → 119.6  (Week 2 Mon)
              598 − 110 + 117                      = 605  → 121.0  (Week 2 Tue)
              605 − 150 + 160                      = 615  → 123.0  (Week 2 Wed)
```

Each average is plotted against the **middle** day of its block, so the first sits at Week 1 Wednesday. Because the order is odd, the middle is an actual day and no centring is needed. Ten values give only six averages: two days are lost at each end.

**Describe the trend.** "The number of visitors shows a steady upward trend, rising by about 1.6 visitors per day, from 115 to 123 over five days."

## Worked example 2: an even order (with centring)

A firm's quarterly sales ($ thousand) for three years:

| | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| Year 1 | 42 | 58 | 66 | 50 |
| Year 2 | 46 | 62 | 71 | 53 |
| Year 3 | 50 | 67 | 75 | 58 |

Four-point totals, by running totals: 216, 220, 224, 229, 232, 236, 241, 245, 250. Dividing by 4 gives 54.0, 55.0, 56.0, 57.25, 58.0, 59.0, 60.25, 61.25, 62.5.

The first 4-point average is the mean of Q1 to Q4 of Year 1, so its middle is halfway between Q2 and Q3. None of these averages sits on an actual quarter. **Centring** fixes this: average each neighbouring pair.

```
(54.0 + 55.0) ÷ 2 = 54.5    plotted at Year 1 Q3
(55.0 + 56.0) ÷ 2 = 55.5    Year 1 Q4
(56.0 + 57.25) ÷ 2 = 56.625 Year 2 Q1
...
(61.25 + 62.5) ÷ 2 = 61.875 Year 3 Q2
```

The full set of centred values is 54.5, 55.5, 56.625, 57.625, 58.5, 59.625, 60.75 and 61.875.

**Shortcut:** a centred value equals the sum of two neighbouring 4-point totals divided by 8. For example (216 + 220) ÷ 8 = 54.5. It avoids rounding the 4-point averages before centring.

**Describe the trend.** From 54.5 at Year 1 Q3 to 61.875 at Year 3 Q2 is a rise of 7.375 over 7 quarters, about $1050 per quarter. "Sales show a steady upward trend of roughly $1000 per quarter."

## Drawing a trend line

1. Plot the moving averages (centred if necessary) on the same axes as the time series, using a different symbol.
2. Draw a straight line **by eye** through the moving averages, not through the original data, with roughly equal numbers of averages on each side.
3. Extend the line beyond the last moving average only if the question asks you to estimate future trend values.

Reading a value off the trend line gives an **estimated trend value** for that period. These estimates are the starting point for predictions, which add a seasonal component; that step belongs to section 10.2.

If the moving averages bend clearly, the trend is not linear. Describe what you see, for example "rising, but more slowly in the later years", rather than forcing a straight line through the bend.

## Describing a trend in words

A complete description gives:

- **direction**: increasing, decreasing or level;
- **rate**, with units: about how much per period, read from the start and end of the moving averages or the trend line;
- **consistency**: steady, speeding up, slowing down;
- **context**: what the variable is.

"Visitors are rising" is a direction only. "The number of visitors shows a steady upward trend of about 1.6 per day" is complete.

## Common mistakes

- Using a moving average whose order does not match the cycle.
- Plotting each moving average at the end of its block instead of the middle.
- Plotting 4-point averages against actual quarters without centring them.
- Rounding the 4-point averages before centring, which accumulates error.
- Drawing the trend line through the original data points instead of through the moving averages.
- Joining the moving averages with a zigzag line and calling it the trend line.
- Describing the trend from the raw data, where the seasonal swings hide it.
- Stating "upward trend" with no rate or context.

## Exam technique for the command words

- **Calculate** moving averages: show at least the first total, and set the values out in a table aligned with the periods they belong to.
- **Explain why** a 4-point moving average is appropriate: "the data are quarterly, so each average contains one value from each quarter and the seasonal effect is removed".
- **Explain why** centring is needed: "the 4-point averages fall between quarters, so neighbouring pairs are averaged to place them on actual quarters".
- **Plot** and **draw** the trend line: different symbols for the data and the moving averages; one ruled straight line through the averages.
- **Describe** or **Comment on** the trend: direction, rate with units, and context.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 10.1: understanding of trend, including determination by calculation of moving averages, with centring, where appropriate.
