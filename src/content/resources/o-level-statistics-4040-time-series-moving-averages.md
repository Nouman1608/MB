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
description: "Time series graphs, centred moving averages, trend lines, seasonal components and predictions: Cambridge O Level Statistics 4040 and IGCSE 0479 study guide."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-29
featured: false
reviewNote: "2026-11-08: reviewed by muhammad-ghazali-siddiqui."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--13-seasonal-vs-trend.webp" width="900" height="860" alt="A line graph of quarterly sales for 2023 to 2025 repeats a pattern each year, with the highest value in every fourth quarter (64, 68, 74) and the lowest in the third quarter. A dashed straight trend line underneath rises from 48.5 to 56.25." loading="lazy">
  <figcaption>Quarterly sales repeat a seasonal pattern around an upward trend.</figcaption>
</figure>


## 2. Calculating moving averages

Average the first cycle of values, then move along one place and repeat.
Each average is plotted at the **middle** of the values it covers.

- **Odd number of points (3-point).** The middle is one of the data points, so
  each average is plotted against an actual time period. No centring is needed.
- **Even number of points (4-point).** The middle falls *between* two time
  periods (for quarterly data, between Q2 and Q3). To line the averages up with
  actual quarters, **centre** them: average each pair of neighbouring moving
  averages. This is the "centring, where appropriate" in the syllabus.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--14-moving-average-window.webp" width="900" height="900" alt="Twelve quarterly sales values in a row. A window of four values is averaged and then slid one place at a time: 52, 40, 36, 64 give 48.0 between Q2 and Q3; 40, 36, 64, 56 give 49.0 between Q3 and Q4; 36, 64, 56, 44 give 50.0 between Q4 and Q1. Twelve quarters give nine averages from 48.0 to 57.0." loading="lazy">
  <figcaption>A 4-point moving average averages four values, then moves along one place each time.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--15-odd-even-points.webp" width="900" height="800" alt="Two schematic panels with no data. A 3-point average over terms T1 to T3 lands on T2, so no centring is needed. A 4-point average over quarters Q1 to Q4 lands between Q2 and Q3, so it must be centred." loading="lazy">
  <figcaption>An odd-point average lands on a time period; an even-point average lands between two and needs centring.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--16-centring.webp" width="900" height="800" alt="Three rows on a timeline from 2023 Q2 to 2024 Q2. Sales are 40, 36, 64, 56 and 44. The 4-point averages 48.0, 49.0, 50.0 and 51.0 sit between quarters. Averaging neighbouring pairs gives centred values 48.5 on 2023 Q3, 49.5 on 2023 Q4 and 50.5 on 2024 Q1." loading="lazy">
  <figcaption>Centring: average each pair of neighbouring 4-point averages to place the result on a quarter.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--17-trend-line.webp" width="900" height="860" alt="Quarterly sales in light grey with the eight centred moving averages marked as diamonds from 48.5 (2023 Q3) to 56.25 (2025 Q2). A straight trend line through them rises 7.75 over 7 quarters, about 1.1 per quarter." loading="lazy">
  <figcaption>The trend line is drawn through the centred moving averages, not through the sales.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--18-seasonal-components.webp" width="900" height="890" alt="Bars show sales minus the centred moving average. Q1: +5.5 and +7.0, mean +6.25. Q2: −7.5 and −8.25, mean −7.875. Q3: −12.5 and −12.75, mean −12.625. Q4: +14.5 and +14.0, mean +14.25. Q4 is the strong quarter." loading="lazy">
  <figcaption>The seasonal component is the mean of sales minus trend for each quarter.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-statistics-4040-time-series-moving-averages--19-time-series-prediction.webp" width="900" height="860" alt="The sales line with the trend line extended by a dashed line to 2026 Q1, where the trend value is about 59.6. Adding the Q1 seasonal component of +6.25 gives a prediction of about 66 thousand units." loading="lazy">
  <figcaption>Predict by reading the trend value, then adding the seasonal component: about 66 thousand units for 2026 Q1.</figcaption>
</figure>


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

## Frequently asked questions

**How many points should a moving average have?**
The number of values in each average should equal the number of seasons in one cycle: 4 points for quarterly data, 3 for data by school term and 12 for monthly data.

**When do you need to centre moving averages?**
Centre them when the moving average has an even number of points, such as a 4-point average for quarterly data. Each average then falls between two time periods, so you average neighbouring pairs to line them up with actual quarters.

**How do you calculate a seasonal component?**
For each period, work out sales minus the centred moving average, then average these differences for each season. Working out moving average minus sales reverses the sign of every component.

**How do you predict a future value from a time series?**
Read the trend value for the period you want from the extended trend line, then add that season's component. Adding the component to an actual value instead of the trend value is a common error.

**Where is time series in the Cambridge O Level Statistics 4040 and IGCSE 0479 syllabuses?**
Time series is Topic 10 of Cambridge O Level Statistics 4040 for examination in 2025, 2026 and 2027, and Topic 12 of Cambridge IGCSE Statistics 0479 for 2027.

## Related pages

- [Time series: practice questions with worked answers](/resources/o-level-statistics-4040-time-series-moving-averages-practice/)
- [Index numbers (4040 Topic 8)](/resources/o-level-statistics-4040-index-numbers/)
- [Crude and standardised rates (4040 Topic 7)](/resources/o-level-statistics-4040-crude-and-standardised-rates/)
- [Cambridge O Level Statistics 4040 syllabus hub](/boards/cambridge/o-level/statistics/) and [topic checklist](/checklists/cambridge/o-level/statistics/)
- [Cambridge IGCSE Statistics 0479 syllabus hub](/boards/cambridge/igcse/statistics/)
