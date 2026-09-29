---
title: "Time Series, Moving Averages and Seasonal Variation: O Level Statistics 4040 and IGCSE 0479 Study Guide"
seoTitle: "Time Series and Moving Averages: Statistics 4040 and 0479"
seoDescription: "Moving averages with centring, trend lines, seasonal components and predictions for O Level Statistics 4040 and IGCSE Statistics 0479, with a worked example."
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels", "igcse"]
topic: "Topic 10 – Time Series"
boards: ["cambridge"]
qualifications: ["o-level", "igcse"]
syllabusCodes: ["4040", "0479"]
syllabusSeries: "2025-2027"
order: 10
syllabusTopics:
  - qualification: "o-level"
    topic: "time-series-4040"
    subtopic: "understanding-of-trend-4040"
  - qualification: "o-level"
    topic: "time-series-4040"
    subtopic: "understanding-of-seasonal-variation-4040"
  - qualification: "igcse"
    topic: "time-series-0479"
description: "Time series graphs, moving averages (with centring when the cycle has an even number of seasons), trend lines, mean seasonal variation and predictions — Cambridge O Level Statistics 4040 Topic 10 and IGCSE Statistics 0479 Topic 12, with a full quarterly worked example."
author: "marlbridge-academic-team"
publishedDate: 2026-09-29
featured: false
---

This guide covers **time series**: Topic 10 of Cambridge O Level Statistics
(4040, syllabus for examination in 2025, 2026 and 2027) and Topic 12 of
Cambridge IGCSE Statistics (0479, syllabus for examination in 2027). Practise
afterwards with the [time series practice questions](/resources/o-level-statistics-4040-time-series-moving-averages-practice/).

## What the syllabuses ask for

| 4040 Topic 10 | 0479 Topic 12 (learning outcomes) |
|---|---|
| | 12.1 Plot data to form a time series graph |
| 10.1 Understanding of trend, "including determination by calculation of moving averages, with centring, where appropriate" | 12.2 Understand the reasons for finding moving averages |
| | 12.3 Calculate and plot moving average values (may include centring; understand when centring is appropriate) |
| | 12.4 Understand trend and draw a trend line by eye using moving average values |
| 10.2 Understanding of seasonal variation, "including calculation of mean seasonal variation. Use of a trend line and seasonal component in prediction." | 12.5 Calculate seasonal components (average seasonal variation) from tables of values and moving averages, and from time series graphs and trend lines |
| | 12.6 Use a trend line and seasonal component to make predictions; understand the assumptions and limitations |

Sources: [4040 syllabus PDF](https://www.cambridgeinternational.org/Images/664481-2025-2027-syllabus.pdf),
[0479 syllabus PDF](https://www.cambridgeinternational.org/Images/718153-2027-syllabus.pdf).

## 1. Why moving averages?

Data recorded at regular intervals (monthly, quarterly, by school term) often
rises and falls in a repeating pattern: ice-cream sales peak every summer,
electricity use peaks every winter. That repeating pattern is **seasonal
variation**. The **trend** is the general direction underneath it.

A **moving average** smooths out the seasonal pattern so the trend can be
seen. The number of values in each average should equal the number of seasons
in one cycle: a **4-point** moving average for quarterly data, a **3-point**
moving average for data by school term, a **12-point** average for monthly data.

## 2. Calculating moving averages

Average the first cycle of values, then move along one place and repeat.
Each average is plotted at the **middle** of the values it covers.

- **Odd number of points (3-point).** The middle is one of the data points, so
  each average is plotted against an actual time period. No centring is needed.
- **Even number of points (4-point).** The middle falls *between* two time
  periods (for quarterly data, between Q2 and Q3). To line the averages up with
  actual quarters, **centre** them: average each pair of neighbouring moving
  averages. This is the "centring, where appropriate" in the syllabus.

## Worked example (quarterly data, with centring)

A shop's sales (in thousands of units) over three years:

| | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| 2023 | 52 | 40 | 36 | 64 |
| 2024 | 56 | 44 | 40 | 68 |
| 2025 | 62 | 48 | 44 | 74 |

**Step 1: 4-point moving averages**

- (52 + 40 + 36 + 64) ÷ 4 = 48.0 (between 2023 Q2 and Q3)
- (40 + 36 + 64 + 56) ÷ 4 = 49.0 (between 2023 Q3 and Q4)
- then 50.0, 51.0, 52.0, 53.5, 54.5, 55.5, 57.0

**Step 2: centre them** (average neighbouring pairs)

| Quarter | Sales | Centred moving average | Sales − moving average |
|---|---|---|---|
| 2023 Q3 | 36 | (48.0 + 49.0) ÷ 2 = 48.5 | −12.5 |
| 2023 Q4 | 64 | 49.5 | +14.5 |
| 2024 Q1 | 56 | 50.5 | +5.5 |
| 2024 Q2 | 44 | 51.5 | −7.5 |
| 2024 Q3 | 40 | 52.75 | −12.75 |
| 2024 Q4 | 68 | 54.0 | +14.0 |
| 2025 Q1 | 62 | 55.0 | +7.0 |
| 2025 Q2 | 48 | 56.25 | −8.25 |

There are no centred moving averages for the first two and last two quarters:
a 4-point average needs two quarters on each side.

**Step 3: trend line.** Plot the centred moving averages on the time series
graph and draw a straight line through them **by eye**. Here they rise steadily
from 48.5 to 56.25 over seven quarters, about 1.1 per quarter, so sales are
increasing.

**Step 4: seasonal components.** The difference *sales − moving average* shows
how far each quarter sits above or below the trend. Average these differences
for each quarter to get the **mean seasonal variation** (the seasonal
component):

- Q1: (5.5 + 7.0) ÷ 2 = **+6.25**
- Q2: (−7.5 + −8.25) ÷ 2 = **−7.875**
- Q3: (−12.5 + −12.75) ÷ 2 = **−12.625**
- Q4: (14.5 + 14.0) ÷ 2 = **+14.25**

Q4 is the strong quarter: on average, sales are about 14 thousand above the trend.

**Step 5: prediction.** Read the trend value for the quarter you want from the
extended trend line, then add the seasonal component.

Suppose the trend line drawn by eye passes through (2023 Q3, 48.5) and
(2025 Q2, 56.25). It rises by 7.75 over 7 quarters, about 1.107 per quarter.
2026 Q1 is 10 quarters after 2023 Q3, so the trend value there is about
48.5 + 10 × 1.107 = 59.6.

Predicted sales for 2026 Q1 = 59.6 + 6.25 ≈ **66 thousand units**.

(An answer read from your own graph will differ slightly, because the trend
line is drawn by eye. Show the trend value you read and the seasonal component
you add.)

## 3. Assumptions and limitations of the prediction

- It assumes the trend carries on in a straight line beyond the data
  (extrapolation), which becomes less reliable the further ahead you go.
- It assumes the seasonal pattern stays the same size each year.
- The trend line is drawn by eye, so different people get slightly different
  predictions.
- One-off events (a new competitor, a price change) are not captured.

## Where marks are usually lost

- Using the wrong number of points: the moving average must span one full cycle (4 for quarters, 3 for terms).
- Plotting 4-point moving averages against actual quarters without centring them.
- Working out "moving average − sales" instead of "sales − moving average", which reverses every seasonal component's sign.
- Adding the seasonal component to the *actual* value instead of to the *trend* value when predicting.
- Drawing the trend line through the original data points instead of through the moving averages.

## Related pages

- [Time series: practice questions with worked answers](/resources/o-level-statistics-4040-time-series-moving-averages-practice/)
- [Index numbers (4040 Topic 8)](/resources/o-level-statistics-4040-index-numbers/)
- [Crude and standardised rates (4040 Topic 7)](/resources/o-level-statistics-4040-crude-and-standardised-rates/)
- [Cambridge O Level Statistics 4040 syllabus hub](/boards/cambridge/o-level/statistics/) and [topic checklist](/checklists/cambridge/o-level/statistics/)
- [Cambridge IGCSE Statistics 0479 syllabus hub](/boards/cambridge/igcse/statistics/)
