---
title: "Cambridge O Level Statistics (4040): Understanding of seasonal variation"
resourceType: "study-guides"
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
description: "Seasonal variation, calculating mean seasonal variation, and predicting with a trend line and seasonal component, with two worked examples, for O Level Statistics 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 10.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "understanding of seasonal variation", which the syllabus says includes the "calculation of mean seasonal variation" and the "use of a trend line and seasonal component in prediction". It follows on from section 10.1, explained in the [trend study guide](/resources/cambridge-o-level-statistics-4040-understanding-of-trend/), and the whole of topic 10 is introduced in the [time series and moving averages study guide](/resources/o-level-statistics-4040-time-series-moving-averages/). For recall and practice, use the [seasonal variation revision notes](/resources/cambridge-o-level-statistics-4040-understanding-of-seasonal-variation-revision-notes/) and the [seasonal variation practice questions](/resources/cambridge-o-level-statistics-4040-understanding-of-seasonal-variation-practice/).

## What seasonal variation is

Seasonal variation is the regular, repeating pattern within each cycle of a time series: higher sales every December, fewer visitors every winter term, more electricity used every summer quarter. "Season" means any fixed part of the cycle, so a quarter, a term, a month or a day of the week can each be a season.

The model used in this course treats each observation as

```
actual value = trend value + seasonal variation + random variation
```

Rearranging, for any period where a trend value is known:

```
individual seasonal variation = actual value − trend value (moving average)
```

A positive value means the season was above the trend; a negative value means below.

## From individual to mean seasonal variation

The individual values for the same season differ from year to year because random variation is still in them. Averaging them for each season gives the **mean seasonal variation** (sometimes called the seasonal component), the best estimate of that season's typical effect.

The steps are:

1. Calculate the moving averages of the correct order, centred if the order is even.
2. For every period that has a moving average, find actual − moving average.
3. Group these by season and find the mean for each season.
4. Check that the mean seasonal variations add up to roughly zero. Over a full cycle the seasons above and below the trend should balance; a total far from zero signals an arithmetic error.

## Worked example 1: quarterly data

Sales of garden furniture ($ thousand):

| | Q1 | Q2 | Q3 | Q4 |
|---|---|---|---|---|
| Year 1 | 64 | 40 | 52 | 88 |
| Year 2 | 70 | 44 | 57 | 95 |
| Year 3 | 75 | 49 | 62 | 100 |

**Steps 1 and 2.** The 4-point totals are 244, 250, 254, 259, 266, 271, 276, 281, 286. Centred moving averages are found as neighbouring totals ÷ 8.

| Period | Actual | Centred moving average | Actual − moving average |
|---|---|---|---|
| Year 1 Q3 | 52 | 61.75 | −9.75 |
| Year 1 Q4 | 88 | 63.0 | 25.0 |
| Year 2 Q1 | 70 | 64.125 | 5.875 |
| Year 2 Q2 | 44 | 65.625 | −21.625 |
| Year 2 Q3 | 57 | 67.125 | −10.125 |
| Year 2 Q4 | 95 | 68.375 | 26.625 |
| Year 3 Q1 | 75 | 69.625 | 5.375 |
| Year 3 Q2 | 49 | 70.875 | −21.875 |

**Step 3.** Each quarter has two individual values.

```
Q1: (5.875 + 5.375) ÷ 2    = 5.625
Q2: (−21.625 − 21.875) ÷ 2 = −21.75
Q3: (−9.75 − 10.125) ÷ 2   = −9.9375
Q4: (25.0 + 26.625) ÷ 2    = 25.8125
```

**Step 4.** 5.625 − 21.75 − 9.9375 + 25.8125 = −0.25, close to zero.

**Interpret.** "Fourth-quarter sales are typically about $25 800 above the trend and second-quarter sales about $21 800 below it."

## Predicting with a trend line and seasonal component

```
predicted value = estimated trend value + mean seasonal variation for that season
```

The estimated trend value comes from the **trend line**, extended into the future period. In an exam you read it from the line you have drawn by eye through the moving averages. Here, for a value you can check, take the line through the first and last centred values.

```
Rate = (70.875 − 61.75) ÷ 7 = 1.304 per quarter
Year 4 Q1 is 10 quarters after Year 1 Q3:
  trend ≈ 61.75 + 10 × 1.304 = 74.8
  prediction ≈ 74.8 + 5.625 = 80.4, about $80 400
Year 4 Q4 is 13 quarters after Year 1 Q3:
  trend ≈ 61.75 + 13 × 1.304 = 78.7
  prediction ≈ 78.7 + 25.81 = 104.5, about $104 500
```

A negative seasonal component is subtracted. A prediction for Year 4 Q2 would be about 76.09 − 21.75 = 54.3.

Two points are often missed:

- Use the **trend line**, not the last moving average. The last centred value is for Year 3 Q2, two quarters before the end of the data, and the trend has moved on since.
- Add the seasonal component to the **trend**, never to the actual value of the same season last year, which would count the trend's rise inaccurately and include last year's random variation.

## Worked example 2: termly data (odd cycle, no centring)

A college runs three terms a year. Course enrolments:

| | Term 1 | Term 2 | Term 3 |
|---|---|---|---|
| Year 1 | 120 | 90 | 60 |
| Year 2 | 132 | 99 | 69 |
| Year 3 | 141 | 111 | 78 |

3-point moving averages, each plotted at the middle term, are 90, 94, 97, 100, 103, 107 and 110, from Year 1 Term 2 to Year 3 Term 2.

```
Individual seasonal variations (actual − moving average):
Term 1: 132 − 97 = 35,   141 − 107 = 34          mean 34.5
Term 2: 90 − 90 = 0,     99 − 100 = −1,   111 − 110 = 1    mean 0
Term 3: 60 − 94 = −34,   69 − 103 = −34          mean −34
Check: 34.5 + 0 − 34 = 0.5, close to zero.
```

The trend rises (110 − 90) ÷ 6 = 3.33 enrolments per term. Year 4 Term 1 is two terms after Year 3 Term 2:

```
trend ≈ 110 + 2 × 3.33 = 116.7
prediction ≈ 116.7 + 34.5 = 151
```

Term 2 has a mean seasonal variation of 0, so in Term 2 enrolments are typically on the trend.

## How reliable is a prediction?

A prediction is more trustworthy when:

- the moving averages lie close to a straight trend line;
- the individual seasonal variations for each season are similar, so the mean is a fair summary (Term 3 above gave −34 twice, which is very consistent);
- the prediction is only a short way beyond the data.

It is less reliable when the trend line is extended a long way, when the individual values for a season vary widely, or when conditions change, such as a new competitor or a change in opening hours. Each prediction is an estimate; random variation will still affect the real value.

## Common mistakes

- Calculating moving average − actual, which reverses every sign.
- Averaging all the individual values together instead of season by season.
- Including a season's value where no moving average exists.
- Forgetting the check that the mean seasonal variations total roughly zero.
- Predicting from the last moving average rather than the extended trend line.
- Adding a negative seasonal component instead of subtracting its size.
- Counting quarters wrongly when extending the trend.
- Rounding moving averages before subtracting.

## Exam technique for the command words

- **Calculate** the mean seasonal variation: lay out a table of actual − moving average and group by season; show each mean.
- **Interpret** a seasonal component: "sales in Q4 are typically about 25.8 thousand dollars above the trend".
- **Estimate** or **Predict**: state the trend value read from the line, name the seasonal component used, and combine them.
- **Comment on the reliability**: refer to how far the trend line is extended and how consistent the individual seasonal variations are.

## Official syllabus

Cambridge International, Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, section 10.2: understanding of seasonal variation, including calculation of mean seasonal variation and use of a trend line and seasonal component in prediction.
