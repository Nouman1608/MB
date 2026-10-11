---
title: "Pearson Edexcel International Advanced Level Mathematics: Statistical models and data summary (YMA01)"
seoTitle: "Edexcel IAL Maths S1: Models and Data Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Statistical models and the representation and summary of data"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 161
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-mathematical-models-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-representation-and-summary-of-data-edexcel-alevel-maths"
description: "Study guide to modelling, histograms, stem and leaf, box plots, mean, variance, coding, outliers and skewness for Edexcel IAL Mathematics Statistics 1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit S1: Statistics 1, sections 1.1 and 2.1 to 2.4. The specification states that S1 is an optional unit for IAS Mathematics and Further Mathematics, and an optional unit for IAL Mathematics and Further Mathematics.

Use the [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) alongside this page. The [revision notes](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary-revision-notes/) condense it, and the [practice set](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary-practice/) tests it. Unsure where you stand? Try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 1.1 | Describe how a mathematical model is built, tested and refined |
| 2.1 | Use histograms, stem and leaf diagrams (including back-to-back) and box plots to compare distributions |
| 2.2 | Find and interpret mean, median and mode for discrete, continuous, grouped or ungrouped data; use coding |
| 2.3 | Find and interpret variance, standard deviation, range and interpercentile ranges; use simple interpolation |
| 2.4 | Describe skewness; understand outliers and show them on a box plot |

The specification says drawing diagrams will not be the direct focus of questions, and nor will the plain calculation of mean, median, mode, range or interquartile range. Expect to read diagrams, interpret results and comment in context. It also says any rule for identifying outliers will be specified in the question, and that significance tests are not expected.

## 1.1 Mathematical models

A model is a simplified description of a real situation. You build it by making assumptions, then test it against data.

1. State the real problem and decide what to measure.
2. Make simplifying assumptions.
3. Build the model and use it to make predictions.
4. Compare the predictions with observed data.
5. Refine the assumptions and repeat if the fit is poor.

**Worked example.** A school models lateness this way: each of 40 students is late with probability 0.05, independently of everyone else. The model predicts 40 × 0.05 = 2 late students a day. Over ten mornings the counts were 0, 5, 1, 0, 0, 6, 1, 0, 5, 2.

The total is 20, so the mean is 2.0 per day. That agrees with the model. The spread does not: four mornings had none, but three had five or more. Friends who travel on the same bus will be late together, so independence is doubtful. A refinement is to treat students on the same bus as a group, with a different probability for each group.

Strengths of a model: it is cheap, quick and can predict. Limits: it depends on its assumptions, and results outside the range of the data are unreliable.

## 2.1 Histograms

For grouped continuous data, the **area** of each bar is proportional to frequency.

```
frequency density = frequency ÷ class width
```

Classes need not have equal widths, which is why the vertical axis shows frequency density and not frequency.

**Worked example.** 80 pupils recorded their cycling time t minutes.

| Time t | 0–10 | 10–15 | 15–20 | 20–30 | 30–50 |
|---|---|---|---|---|---|
| Frequency | 9 | 14 | 20 | 24 | 13 |
| Frequency density | 0.9 | 2.8 | 4.0 | 2.4 | 0.65 |

To estimate how many pupils took less than 18 minutes, assume values are spread evenly inside a class. Cumulative frequency to 15 is 9 + 14 = 23, and the part of the 15–20 bar up to 18 has area 3 × 4.0 = 12. So about 35 pupils took under 18 minutes.

## 2.1 Stem and leaf diagrams and box plots

A stem and leaf diagram keeps every value. Order the leaves and always give a key. In a **back-to-back** diagram two data sets share the stems, and the left-hand leaves read outwards from the stem.

**Worked example.** Parcels delivered per day by two couriers over 15 days.

```
 Courier Q          Courier P
             8 | 3 |
 8 6 5 4 3 1 0 | 4 | 2 5 7 8
       9 5 2 0 | 5 | 1 3 3 5 6 8
           9 4 | 6 | 0 1 3 6
             2 | 7 |
               | 8 | 4

Key: 1 | 4 means 41 for Q; 4 | 2 means 42 for P
```

Use the convention below to find quartiles of ungrouped data. It is a common one, so state the positions you use. If a question gives a different method, follow it.

```
position = n/4 (Q1), n/2 (median), 3n/4 (Q3)
whole number: take the mean of that value and the next
not whole: round up and take that value
```

For n = 15 the positions are 3.75, 7.5 and 11.25, so Q1, median and Q3 are the 4th, 8th and 12th values.

| | Q1 | Median | Q3 | IQR | Mean |
|---|---|---|---|---|---|
| Courier P | 48 | 55 | 61 | 13 | 56.13 |
| Courier Q | 43 | 48 | 59 | 16 | 51.07 |

A **box plot** shows the minimum, Q1, median, Q3 and maximum on a scale. A box runs from Q1 to Q3 with a line at the median. Whiskers reach to the lowest and highest values that are not outliers.

**Comparing distributions.** Make one comment on location and one on spread, each with numbers and in context. Here P has the higher median (55 against 48), so P delivers more on a typical day. Q has the larger interquartile range (16 against 13), so Q is less consistent.

## 2.2 Measures of location

- **Mean** = Σx / n, or Σfx / Σf for a frequency table.
- **Median**: the middle value of ordered data.
- **Mode**: the most frequent value, or the modal class for grouped data.

For a grouped table use the class mid-points, so the mean is an estimate. For the median and quartiles of grouped continuous data, use **interpolation**: find the class containing the position (n/2, n/4 or 3n/4), then count along it linearly.

**Worked example.** The cycling times above (n = 80).

```
Cumulative frequency: 9, 23, 43, 67, 80
Mean = (9×5 + 14×12.5 + 20×17.5 + 24×25 + 13×40) / 80
     = 1690 / 80 = 21.125
Median position 40 lies in 15–20 (23 before it):
  15 + 5 × (40 − 23)/20 = 19.25
Q1 position 20 lies in 10–15 (9 before it):
  10 + 5 × (20 − 9)/14 = 13.93
Q3 position 60 lies in 20–30 (43 before it):
  20 + 10 × (60 − 43)/24 = 27.08
```

So the IQR is 27.08 − 13.93 = 13.15 minutes.

**Drawing inferences.** The mean uses every value, so extreme values pull it. The median resists them. A mean much larger than the median suggests a few large values. No significance test is expected: describe what the numbers suggest, in context.

## 2.3 Measures of dispersion

- **Range** = maximum − minimum.
- **Interquartile range** = Q3 − Q1.
- **Interpercentile range**: the difference between two percentiles, for example the 10th to 90th. It uses interpolation in the same way.
- **Variance** = Σx²/n − (mean)², that is, average the squared values, then subtract the squared average.
- **Standard deviation** = √variance, as the specification states.

For a frequency table, variance = Σfx²/Σf − (mean)². The notation list in the specification also includes s², an unbiased estimate with divisor n − 1. Use divisor n unless a question asks for that estimate.

**Worked example (ungrouped).** Eight readings: Σx = 102 and Σx² = 1360.

```
mean = 102/8 = 12.75
variance = 1360/8 − 12.75² = 170 − 162.5625 = 7.4375
standard deviation = √7.4375 = 2.73 (3 s.f.)
```

**Worked example (grouped).** For the cycling times, Σfx² = 9×25 + 14×156.25 + 20×306.25 + 24×625 + 13×1600 = 44 337.5.

```
variance = 44 337.5/80 − 21.125² = 554.22 − 446.27 = 107.95
standard deviation = 10.4 minutes (3 s.f.)
```

A 10th to 90th interpercentile range for the same data: the 10th percentile is the 8th value, in 0–10, giving 10 × 8/9 = 8.89. The 90th is the 72nd value, in 30–50 with 67 before it, giving 30 + 20 × 5/13 = 37.69. The range is 28.8 minutes.

## Coding

Coding changes each value by y = (x − a)/b to make the numbers smaller. Then:

- mean of x = b × (mean of y) + a
- standard deviation of x = b × (standard deviation of y), taking b > 0
- adding or subtracting a constant does not change the spread; multiplying by b multiplies the standard deviation by |b| and the variance by b²

**Worked example.** For ten values of x, Σ(x − 40) = 80 and Σ(x − 40)² = 1038.

```
mean of (x − 40) = 8, so mean of x = 48
variance = 1038/10 − 8² = 103.8 − 64 = 39.8
standard deviation = √39.8 = 6.31 (3 s.f.)
```

Another case: if y = (x − 1500)/20 has mean 4.2 and standard deviation 1.5, then x has mean 20 × 4.2 + 1500 = 1584 and standard deviation 20 × 1.5 = 30.

## 2.4 Outliers and skewness

An **outlier** is a value far from the rest. The question will give the rule. A common one marks a value as an outlier if it is more than 1.5 × IQR above Q3 or below Q1.

**Worked example.** Courier P has Q1 = 48, Q3 = 61 and IQR = 13, with this rule.

```
upper limit = 61 + 1.5 × 13 = 80.5
lower limit = 48 − 19.5 = 28.5
```

The value 84 is above 80.5, so it is an outlier. On the box plot, mark it with a cross. The upper whisker stops at the largest value inside the limits, 66, and the lower whisker at 42. Courier Q has limits 19 and 83, so none of its values is an outlier.

**Skewness** describes asymmetry.

| | Positive skew | Symmetric | Negative skew |
|---|---|---|---|
| Long tail | right | neither | left |
| Quartile gaps | Q2 − Q1 < Q3 − Q2 | about equal | Q2 − Q1 > Q3 − Q2 |
| Mean and median | mean > median | about equal | mean < median |

Courier Q: Q2 − Q1 = 5 and Q3 − Q2 = 11, and the mean 51.07 exceeds the median 48. Q's deliveries show positive skew.

## Common errors

- Plotting frequency as bar height when class widths are unequal.
- Taking the mean of class boundaries, not mid-points.
- Switching position rules part-way through a question. Pick one, state it and use it throughout.
- Forgetting to square the mean in the variance formula, or square-rooting too early.
- Treating "standard deviation of y" as the answer for x when decoding.
- Stopping a whisker at an outlier instead of at the last value inside the limits.
- Comparing without numbers or without context.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited: Unit S1: Statistics 1, sections 1.1 and 2.1 to 2.4.
