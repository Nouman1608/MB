---
title: "Edexcel International A Level Mathematics (YMA01): Representation and summary of data"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-representation-and-summary-of-data-edexcel-alevel-maths"
description: "Edexcel IAL Maths S1 guide to representing and summarising data: histogram scales, interpolation, percentiles, coding, skewness and outliers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2 of **Unit S1: Statistics 1** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: histograms, stem and leaf diagrams and box plots (2.1); measures of location (2.2); measures of dispersion, including "variance, standard deviation, range and interpercentile ranges" (2.3); and "Skewness. Concepts of outliers" (2.4).

The specification's guidance shapes the questions. Drawing diagrams and plain calculation of the mean, median, mode, range and interquartile range "will not be the direct focus of examination questions". Instead, you are expected to read diagrams, use "simple interpolation", use coding, and "draw simple inferences and give interpretations". Any rule for outliers "will be specified in the question".

For a first pass through the whole section, see the broader S1 guide on [statistical models and the representation and summary of data](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary/). This page concentrates on the techniques that carry multi-step marks: histogram scale factors, interpolation for percentiles, coding both ways, and interpreting skewness. The [representation and summary of data revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-representation-and-summary-of-data-edexcel-alevel-maths-revision-notes/) condense it, and the [representation and summary of data practice set](/resources/edexcel-a-level-mathematics-yma01-s1-representation-and-summary-of-data-edexcel-alevel-maths-practice/) tests it.

## Histograms: area, not height

In a histogram of grouped continuous data, **area is proportional to frequency**. With unequal class widths, the vertical axis is frequency density:

```
frequency density = frequency ÷ class width
```

Exam questions often break the link between "units on the page" and "units of data". You may be told that one bar is 1.5 cm wide and 9 cm tall and asked for the dimensions of another. Work out two separate scale factors: one for width (cm per unit of the variable) and one for height (cm per unit of frequency density).

## Worked example 1: one data set, every technique

The times, t minutes, taken by 100 people to complete a task:

| t | 0–10 | 10–15 | 15–20 | 20–30 | 30–50 |
|---|---|---|---|---|---|
| Frequency | 12 | 18 | 25 | 30 | 15 |

**(a) Histogram scale.** On a histogram the 10–15 bar is 1.5 cm wide and 9 cm tall. Find the width and height of the 20–30 bar.

```
width:   5 minutes -> 1.5 cm, so 0.3 cm per minute; 10 minutes -> 3 cm
height:  fd(10–15) = 18 ÷ 5 = 3.6 -> 9 cm, so 2.5 cm per unit
         fd(20–30) = 30 ÷ 10 = 3   -> 7.5 cm
```

**(b) Median and quartiles by interpolation.** For grouped continuous data Edexcel uses the n/4, n/2 and 3n/4 positions. Cumulative frequencies are 12, 30, 55, 85, 100.

```
Q1 (25th):  10 + (25 − 12)/18 × 5  = 13.6
Q2 (50th):  15 + (50 − 30)/25 × 5  = 19.0
Q3 (75th):  20 + (75 − 55)/30 × 10 = 26.7
```

**(c) An interpercentile range.** The 10th and 90th percentiles are the 10th and 90th values here:

```
P10 = 0 + 10/12 × 10        = 8.33
P90 = 30 + (90 − 85)/15 × 20 = 36.7
10% to 90% interpercentile range = 28.3 minutes
```

An interpercentile range ignores the extreme 10% at each end, so it is less affected by outliers than the range.

**(d) Mean and standard deviation.** Use class midpoints 5, 12.5, 17.5, 25, 40.

```
Σfx  = 2072.5        mean = 20.7 minutes
Σfx² = 53 518.75
variance = 53 518.75/100 − 20.725² = 105.66
standard deviation = 10.3 minutes
```

These are estimates because the midpoints stand in for the unknown individual times.

**(e) Skewness.** Q3 − Q2 = 7.7 is greater than Q2 − Q1 = 5.4, and the mean (20.7) is greater than the median (19.0). Both point to **positive skew**: a long tail of slow times.

## Measures of location and spread: which to use

| Situation | Location | Spread |
|---|---|---|
| Roughly symmetric, no outliers | Mean | Standard deviation |
| Skewed, or with outliers | Median | Interquartile range (or an interpercentile range) |
| Most common value needed (sizes, categories) | Mode | — |

The mean and standard deviation use every value, which is their strength and their weakness: one extreme value moves both. The median and quartiles depend only on position.

## Variance with S notation

```
Sxx = Σx² − (Σx)²/n        variance = Sxx/n = Σx²/n − x̄²        sd = √variance
```

The two forms are the same calculation. Keep at least four significant figures for x̄ before squaring it; rounding x̄ first is the commonest source of a wrong variance.

## Coding

If y = (x − a)/b, then

```
ȳ = (x̄ − a)/b        sd(y) = sd(x)/|b|        so   x̄ = bȳ + a,   sd(x) = |b| sd(y)
```

Subtracting a moves location but not spread; dividing by b scales both.

## Worked example 2: decoding

The masses x grams of 20 bags are coded as y = (x − 250)/5, giving Σy = 36 and Σy² = 410. Find the mean and standard deviation of x.

```
ȳ = 36/20 = 1.8
var(y) = 410/20 − 1.8² = 17.26,  sd(y) = 4.155
x̄ = 5(1.8) + 250 = 259 g
sd(x) = 5 × 4.155 = 20.8 g
```

Do not add 250 to the standard deviation: adding a constant shifts every value equally and leaves the spread unchanged.

## Worked example 3: outliers and a box plot

Fifteen ordered values:

```
12 15 18 21 22 24 25 27 28 30 31 33 35 38 61
```

For ungrouped data, n/4 = 3.75 is not a whole number, so round up: Q1 is the 4th value, 21. The median is the 8th value, 27. 3n/4 = 11.25, so Q3 is the 12th value, 33. (If n/4 were a whole number, you would average that value and the next.)

The question states: an outlier is a value more than 1.5 × IQR beyond the nearer quartile.

```
IQR = 12,  1.5 × IQR = 18
upper limit = 33 + 18 = 51  -> 61 is an outlier
lower limit = 21 − 18 = 3   -> no low outliers
```

On the box plot, the upper whisker ends at 38, the largest value that is not an outlier, and 61 is marked with a cross.

## Comparing two distributions

A full comparison makes one statement about **location** and one about **spread**, each with figures and in context. "Group B has a higher median (54 against 47), so B's typical score is higher; B has a smaller IQR (9 against 15), so B's scores are more consistent." Use median and IQR for box plots and stem and leaf diagrams; use mean and standard deviation when they are given.

## Common mistakes

- Using frequency instead of frequency density on the vertical axis, or using one scale factor for both width and height.
- Using (n + 1)/2 for grouped data: Edexcel interpolates at n/2.
- Rounding the mean before computing the variance.
- Applying coding to the standard deviation by adding or subtracting the constant.
- Describing skewness without evidence: quote the quartile differences or compare mean and median.
- Comparing distributions without context, or only on location.

## Exam technique

- **"Estimate"** signals grouped data or interpolation: say why it is an estimate if asked.
- **"Interpret"** or **"Comment"**: a numerical comparison plus a sentence in context.
- **"Give a reason"** for choosing a measure: link it to skew or outliers in these data.
- **"Show that"** a value is an outlier: state the rule's limit with its calculation, then compare.
- **"State, with a reason, the skewness"**: give the direction and the evidence in one sentence.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S1, section 2 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
