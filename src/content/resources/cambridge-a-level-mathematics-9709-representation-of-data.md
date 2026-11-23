---
title: "Cambridge A Level Mathematics (9709): Representation of data"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.1
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "representation-of-data-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 5 subtopic 5.1 in depth: choosing diagrams, back-to-back stem-and-leaf, histograms, percentiles, and grouped and coded totals."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 5.1 Representation of data opens Probability & Statistics 1 (Paper 5) of Cambridge International AS & A Level Mathematics 9709. It is the only part of the paper where you are asked to *discuss* as well as calculate: questions regularly ask which diagram suits a data set, or what a comparison of two data sets shows. This guide covers each syllabus statement in turn, with fully worked examples on the techniques that are easiest to get slightly wrong: class boundaries, frequency density, interpolation on a cumulative frequency graph and coded totals.

The [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/) summarises the whole paper. For condensed recall, see the [representation of data revision notes](/resources/cambridge-a-level-mathematics-9709-representation-of-data-revision-notes/), and for exam-style questions with mark schemes, use the [representation of data practice questions](/resources/a-level-maths-9709-representation-of-data-practice/).

## What the syllabus asks for

Candidates should be able to:

- select a suitable way of presenting raw statistical data, and discuss advantages and/or disadvantages that particular representations may have;
- draw and interpret stem-and-leaf diagrams (including back-to-back), box-and-whisker plots, histograms and cumulative frequency graphs;
- understand and use measures of central tendency (mean, median, mode) and variation (range, interquartile range, standard deviation), for example in comparing and contrasting data sets;
- use a cumulative frequency graph to estimate medians, quartiles, percentiles, and the proportion of a distribution above, below or between given values;
- calculate and use the mean and standard deviation of data, including grouped data, from the data itself or from totals Σx and Σx², or coded totals Σ(x − a) and Σ(x − a)², including problems with up to two data sets.

## Choosing a representation

| Diagram | Best for | Advantage | Disadvantage |
|---|---|---|---|
| Stem-and-leaf | small sets of raw data | keeps every value; shows shape; median and quartiles can be read off | impractical for large data sets |
| Back-to-back stem-and-leaf | comparing two small sets | direct visual comparison with all values kept | same size limit |
| Box-and-whisker plot | comparing sets on one scale | shows median, quartiles and range at a glance | individual values and detail of shape are lost |
| Histogram | large sets of continuous grouped data | handles unequal class widths; area shows frequency | original values are lost |
| Cumulative frequency graph | large grouped sets | estimates median, quartiles and percentiles | values are only estimates; shape is less obvious |

A good "discuss" answer names a specific feature of the data. "A stem-and-leaf diagram is suitable because there are only 22 values, so every value can be shown" earns credit; "a stem-and-leaf diagram is clear" does not.

## Back-to-back stem-and-leaf diagrams

In a back-to-back diagram the stem runs down the middle, the leaves of one set read outwards to the left and the other set outwards to the right. The key must explain both sides, for example "3 | 2 | 6 means 23 for group X and 26 for group Y". Leaves on the left are written in increasing order *from the stem outwards*, which is where most drawing errors arise.

**Worked example.** Eleven values in each of two groups:

- Group X: 12, 15, 18, 21, 23, 23, 27, 30, 34, 36, 41
- Group Y: 19, 24, 26, 28, 31, 33, 33, 35, 38, 42, 47

With 11 values the median is the 6th, and the quartiles are the 3rd and 9th values.

| | Median | Lower quartile | Upper quartile | IQR |
|---|---|---|---|---|
| X | 23 | 18 | 34 | 16 |
| Y | 33 | 26 | 38 | 12 |

*Comparison:* group Y's values are generally higher (median 33 compared with 23), and Y is less spread out in its middle half (IQR 12 compared with 16). An answer needs both a comparison of centre and a comparison of spread, each **in context** and each supported by a figure.

## Histograms and class boundaries

In a histogram, **area** is proportional to frequency, so the height of each bar is the **frequency density** = frequency ÷ class width. Before calculating widths, find the true class boundaries:

- Data recorded **to the nearest minute** in classes 10–14 and 15–19 have boundaries 9.5, 14.5 and 19.5, so each class has width 5.
- **Ages in completed years** in a class 20–29 cover 20 ≤ age < 30, so the width is 10 and the boundaries are 20 and 30.
- Classes written as **10 ≤ t < 15** already show their boundaries.

**Worked example.** Times to the nearest minute:

| Time (min) | 10–14 | 15–19 | 20–29 | 30–49 |
|---|---|---|---|---|
| Frequency | 12 | 20 | 24 | 16 |
| Boundaries | 9.5–14.5 | 14.5–19.5 | 19.5–29.5 | 29.5–49.5 |
| Width | 5 | 5 | 10 | 20 |
| Frequency density | 2.4 | 4 | 2.4 | 0.8 |

To estimate how many times lie between 25 and 40 minutes, take the parts of the bars in that range: (29.5 − 25) × 2.4 + (40 − 29.5) × 0.8 = 10.8 + 8.4 = 19.2, so about **19** times. This assumes values are spread evenly within each class.

## Cumulative frequency graphs

Plot cumulative frequency against the **upper class boundary**, starting from zero at the lowest boundary. For the table above the points are (9.5, 0), (14.5, 12), (19.5, 32), (29.5, 56) and (49.5, 72).

To estimate the *p*th percentile, read across at p% of the total frequency. With 72 values:

- median: read at 36, which falls in the 19.5–29.5 class;
- 90th percentile: read at 0.9 × 72 = 64.8, in the 29.5–49.5 class.

Reading from a graph with the points joined by straight lines is the same as linear interpolation. For the median, 19.5 + (36 − 32) ÷ 24 × 10 ≈ 21.2 minutes; for the 90th percentile, 29.5 + (64.8 − 56) ÷ 16 × 20 = 40.5 minutes. To estimate the proportion *above* a value, read the cumulative frequency at that value and subtract it from the total.

## Mean and standard deviation from grouped data

Use the class mid-points as representative values. For the times above, the mid-points are 12, 17, 24.5 and 39.5.

```
Σfx  = 12(12) + 20(17) + 24(24.5) + 16(39.5) = 1704
Σfx² = 12(144) + 20(289) + 24(600.25) + 16(1560.25) = 46 878
mean = 1704 ÷ 72 = 23.7 minutes
variance = 46 878 ÷ 72 − (1704 ÷ 72)² = 90.97
standard deviation = 9.54 minutes
```

The results are estimates, because mid-points stand in for the unknown actual values. Keep the unrounded mean in the variance formula: rounding it to 23.7 before squaring shifts the answer.

## Coded totals and combining two data sets

If y = x − a, the values are shifted but their spread is unchanged:

```
mean of x = a + Σ(x − a) ÷ n
variance of x = Σ(x − a)² ÷ n − (Σ(x − a) ÷ n)²
```

**Worked example (coded).** For 20 values, Σ(x − 50) = 84 and Σ(x − 50)² = 1360. The mean of x − 50 is 4.2, so the mean of x is **54.2**. The variance is 1360 ÷ 20 − 4.2² = 68 − 17.64 = 50.36, so the standard deviation is **7.10**.

**Worked example (two sets).** Set A has 12 values with Σx = 300 and Σx² = 7800. Set B has 8 values with mean 20 and standard deviation 3. For B, Σx = 8 × 20 = 160 and Σx² = 8 × (3² + 20²) = 3272. Combined: n = 20, Σx = 460, Σx² = 11 072. The mean is 23 and the variance is 11 072 ÷ 20 − 23² = 24.6, so the standard deviation is **4.96**.

The key step is rebuilding Σx² from a mean and standard deviation: Σx² = n(σ² + x̄²). Means and standard deviations can never be combined directly.

## Common mistakes

- Using stated class limits (10–14) as boundaries instead of 9.5–14.5.
- Plotting bar heights as frequency when class widths are unequal.
- Plotting cumulative frequency at mid-points instead of upper boundaries.
- Averaging two standard deviations to combine data sets.
- A comparison that gives figures but no context, or context with no figures.

## Exam technique

- **Draw:** label both axes with quantities and units, use a linear scale, and plot histogram bars at the true boundaries.
- **Estimate:** say that a value is an estimate when it comes from grouped data or a graph.
- **Compare:** give one comment on centre and one on spread, each with values and in context.
- **Explain why** a representation is suitable: point to the size or type of the data.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 5.1 "Representation of data" (Probability & Statistics 1, Paper 5).
