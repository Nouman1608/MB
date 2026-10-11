---
title: "OCR A Level Mathematics A: Sampling and interpreting single-variable data (H240)"
seoTitle: "OCR A Level Maths A Sampling & Data Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Sampling and interpreting single-variable data"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 124
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-sampling-ocr-alevel-maths"
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "data-presentation-and-interpretation-ocr-alevel-maths"
description: "Study guide to sampling, histograms, averages, standard deviation, outliers and data cleaning for OCR A Level Mathematics A, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches specification sections 2.01a to 2.01d (statistical sampling) and 2.02a, 2.02b and 2.02f to 2.02j (single-variable data) of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026). All of this content is in Stage 1, the column shared with AS Level, and there is no A Level only item here. The specification places Statistics in component 02 and says some items there are set in the context of the pre-release large data set, so practise reading summary statistics and diagrams from real data.

Scatter diagrams, correlation and regression (2.02c to 2.02e) are taught separately and are not repeated here. Use this guide with the [revision notes](/resources/ocr-a-level-mathematics-sampling-and-interpreting-single-variable-data-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-sampling-and-interpreting-single-variable-data-practice/). The [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) and the [printable checklist](/checklists/ocr/a-level/mathematics/) show the whole course, the [Statistics overview](/resources/ocr-a-level-mathematics-statistics/) sets this unit in context, and the free [10-minute diagnostics](/diagnostics/) show where to start.

## What you must be able to do

| Ref | Outcome |
|---|---|
| 2.01a | Use the terms population and sample |
| 2.01b | Use samples to make informal inferences about the population |
| 2.01c | Use simple random sampling and opportunity sampling |
| 2.01d | Select or critique sampling techniques in context; know that different samples can lead to different conclusions. Systematic, stratified, cluster and quota sampling are to be critiqued, not carried out |
| 2.02a | Interpret tables and diagrams for single-variable data, including non-standard ones |
| 2.02b | Know that histogram area represents frequency; link histograms to probability distributions; weigh advantages and disadvantages of diagrams |
| 2.02f | Calculate and interpret mean, median, mode, percentiles, quartiles, IQR, standard deviation and variance |
| 2.02g | Mean and standard deviation from a list, summary statistics or a frequency distribution |
| 2.02h | Recognise and interpret possible outliers |
| 2.02i | Select or critique data presentation |
| 2.02j | Clean data: missing data, errors and outliers |

## Population, sample and inference (2.01a, 2.01b)

A **population** is every item or person you want information about. A **sample** is the part of it you actually observe. Observing the whole population is a **census**. A census is often too slow or costly, or it destroys the items tested, so you sample.

A sample gives an **informal inference**: an estimate that something is probably true of the population, never a certainty. Different samples give different estimates.

**Worked example 1.** A theatre has 900 season-ticket holders. A sample of 60 is asked whether they would attend a matinee, and 21 say yes.

```
estimate = 21/60 × 900 = 315 holders
```

A second sample of 60 finds 15 saying yes.

```
estimate = 15/60 × 900 = 225 holders
```

The two samples disagree by 90 holders, yet both may be fair. This is the point of 2.01d. Larger samples usually vary less, but no size repairs a biased method.

## Sampling techniques (2.01c, 2.01d)

For random samples, the specification lets you assume the population is large enough to sample without replacement unless told otherwise.

**Simple random sampling (carry out).** Each member has an equal chance of selection, and each possible sample of the chosen size can occur with equal probability. You need a **sampling frame**, a list of the population.

1. Number the members 1 to N.
2. Generate random numbers in that range.
3. Skip repeats and numbers outside the range. Stop when you have n members.

**Worked example 2.** A register lists 480 students, numbered 001 to 480. Random three-digit numbers come out as 417, 962, 083, 417, 255, 391, 504, 138, 462. Reject 962 (too big), the second 417 (repeat) and 504 (too big). The sample of six is students **417, 083, 255, 391, 138, 462**.

**Opportunity sampling (carry out).** You take whoever is available and willing, such as the first 30 people to walk past. It is quick and cheap and needs no frame, but it is not random, so it is likely to be biased towards people who are in that place at that time.

**Methods to critique.** You need to know how these work, but you are not required to carry them out.

| Method | How it works | Strength | Weakness |
|---|---|---|---|
| Systematic | Every kth member from a random start | Simple, spreads across the list | Can clash with a pattern in the list; not every sample is possible |
| Stratified | Population split into groups; each sampled in proportion to its size | Every group represented | Needs a full frame with group labels |
| Cluster | Choose whole groups at random and survey all in them | Cheap when the population is spread out | Clusters may differ from the population |
| Quota | Interviewer fills set numbers per group | No frame needed, quick | Not random; the interviewer picks who to ask |

For the theatre, 360 holders sit in the stalls, 330 in the circle and 210 in the balcony. A stratified sample of 60 takes 24, 22 and 14 respectively, because 360/900 × 60 = 24 and so on. A systematic sample of 60 uses every 15th holder (900/60 = 15) from a random start between 1 and 15.

**How to critique in context.** Name the method, then name what it does to this population (who could be missed, which pattern could interfere), then say what the conclusion should be. Writing only "it is biased" gives a reader little to credit. Say who is under-represented and why.

## Interpreting diagrams (2.02a, 2.02b, 2.02i)

| Diagram | Best for | Limitation |
|---|---|---|
| Vertical line chart, dot plot | Small discrete data sets | Hard to read with many values |
| Bar chart | Categories | Not for continuous data |
| Stem-and-leaf | Keeps every value; shows shape | Awkward with large sets |
| Box-and-whisker | Comparing median, spread and skew | Hides the individual values and modes |
| Cumulative frequency | Medians, quartiles, percentiles | Shape is harder to see |
| Histogram | Shape of continuous grouped data | Original values are lost |

The specification includes non-standard representations. Read the axis labels, the units and the scale before anything else, and ask what a bar or area stands for.

### Histograms

In a histogram **area represents frequency**. With unequal class widths the vertical axis shows **frequency density**.

```
density = frequency ÷ width of class
frequency = density × width of class
```

**Worked example 3.** Waiting times (minutes) at a clinic for 110 patients.

| Time t | 0 to <5 | 5 to <10 | 10 to <20 | 20 to <40 | 40 to <60 |
|---|---|---|---|---|---|
| Frequency | 12 | 20 | 36 | 30 | 12 |
| Frequency density | 2.4 | 4.0 | 3.6 | 1.5 | 0.6 |

Estimate how many waited between 15 and 30 minutes.

```
15 to 20: 5 × 3.6 = 18
20 to 30: 10 × 1.5 = 15
total ≈ 33 patients
```

This assumes the patients are spread evenly inside each class, so it is an estimate.

**Link to probability.** If each frequency is divided by the total (110) before dividing by width, the total area is 1, and area between two values is a probability. Here P(T < 10) = (12 + 20)/110 = 32/110 ≈ 0.291. This is how a histogram of real data suggests the shape of a probability distribution.

## Measures of average and spread (2.02f, 2.02g)

**Mean** = Σx/n, or Σfx/Σf. **Median** is the middle value; the **mode** is the most frequent value (modal class for grouped data). The lower quartile Q1 is a quarter of the way through the ordered data, the upper quartile Q3 is three quarters of the way, and a **percentile** is the same idea at any percentage. The **interquartile range** is IQR = Q3 − Q1.

Different methods exist for finding quartiles in a short list, so state the method you use. In the list examples below, n is chosen so that the usual methods agree.

**Variance** is found by averaging the squared distances of the values from the mean. **Standard deviation** is its square root, which is why the specification calls it the root mean square deviation from the mean.

```
sd = √[ Σ(x − x̄)²/n ] = √[ Σx²/n − x̄² ]
sd = √[ Σf(x − x̄)²/Σf ] = √[ Σfx²/Σf − x̄² ]
```

You must use calculator statistical functions, and the specification asks you to know what the symbols on your own calculator represent. Check which of its standard deviation outputs divides by n, because that matches these formulae.

**Worked example 4 (summary statistics).** Twenty readings have Σx = 300 and Σx² = 4820.

```
mean = 300/20 = 15
variance = 4820/20 − 15² = 241 − 225 = 16
sd = 4
```

**Worked example 5 (grouped data).** Use the clinic data and class midpoints 2.5, 7.5, 15, 30 and 50.

```
Σfx  = 30 + 150 + 540 + 900 + 600 = 2220
Σfx² = 75 + 1125 + 8100 + 27000 + 30000 = 66300
mean = 2220/110 ≈ 20.2
variance = 66300/110 − 20.18² ≈ 195.4
sd ≈ 14.0
```

For grouped data both values are **estimates**, because one midpoint is used to represent all the values in a class. For the median, interpolate. Half of 110 is 55, and 32 patients are below 10, so the median lies in the 10 to <20 class.

```
median ≈ 10 + (55 − 32)/36 × 10 ≈ 16.4
```

The same method gives Q1 ≈ 8.9 (position 27.5) and Q3 ≈ 29.7 (position 82.5), so the IQR is about 20.8. The mean (20.2) exceeds the median (16.4), which fits the long right tail.

**Comparing distributions.** Comment on both a measure of average and a measure of spread, in context. If two classes both average 62 on a test but have standard deviations 8 and 14, the second class is more spread out and less consistent. The median and IQR are not pulled by extreme values, while the mean and standard deviation are.

## Outliers and cleaning data (2.02h, 2.02j)

The specification asks you to know two definitions. A value is a possible outlier if it is

1. more than 1.5 × IQR beyond the nearer quartile, or
2. more than 2 standard deviations from the mean.

Use the definition a question gives. If none is given, state the one you use.

**Worked example 6.** A courier's parcels delivered on 11 days, in order: 14, 17, 18, 21, 22, 23, 25, 26, 28, 31, 52.

```
median = 23 (6th value), Q1 = 18 (3rd), Q3 = 28 (9th), IQR = 10
upper fence: 28 + 1.5 × 10 = 43
lower fence: 18 − 15 = 3
```

52 exceeds 43, so it is an outlier by definition 1. Also Σx = 277, mean ≈ 25.18, sd ≈ 9.71, and mean + 2sd ≈ 44.6, so 52 is an outlier by definition 2 as well. Without 52 the mean falls from 25.2 to 22.5. The median barely moves (23 to 22.5).

**Cleaning data.** An outlier is only a flag, not a reason to delete.

- **Errors:** if you can show a value is impossible or mis-typed (for example 52 typed for 25), correct it from the source or remove it, and say so.
- **Outliers that may be genuine:** keep them and comment, or report results with and without them.
- **Missing data:** do not enter 0. Exclude those cases from the calculation, state the new n, and ask whether the gaps are random or hide a pattern.

If 52 was a typing error for 25, the mean becomes (277 − 52 + 25)/11 ≈ 22.7 and the standard deviation about 4.79.

## Common errors

- Plotting frequency, not frequency density, on a histogram with unequal widths.
- Using class boundaries instead of midpoints for grouped mean and standard deviation.
- Forgetting to subtract the mean squared: Σx²/n is not the variance.
- Quoting a grouped mean or standard deviation as exact.
- Calling every outlier an error, or removing one without giving a reason.
- Writing "it is random" for an opportunity or quota sample.

## Official syllabus

The OCR A Level in Mathematics A (H240) specification, Version 3.1 (August 2026), published by OCR, sections 2.01 and 2.02.
