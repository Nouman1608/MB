---
title: "OCR A Level Mathematics A: Sampling and interpreting single-variable data (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths A Sampling & Data Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on sampling methods, histograms, mean and standard deviation, outliers and data cleaning for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 2.01a to 2.01d and 2.02a, 2.02b and 2.02f to 2.02j of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026). All of it is Stage 1 content, shared with AS Level. The [study guide](/resources/ocr-a-level-mathematics-sampling-and-interpreting-single-variable-data/) explains each idea in full. When you are ready, try the [practice questions](/resources/ocr-a-level-mathematics-sampling-and-interpreting-single-variable-data-practice/).

Related links: the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the [Statistics overview](/resources/ocr-a-level-mathematics-statistics/) and the free [10-minute diagnostics](/diagnostics/). Scatter diagrams and correlation (2.02c to 2.02e) are covered in a separate unit.

## Definitions (2.01a, 2.01b)

| Term | Meaning |
|---|---|
| Population | Everything you want information about |
| Sample | The part of the population actually observed |
| Census | Observing every member of the population |
| Sampling frame | A complete list from which a sample is drawn |
| Bias | A systematic tendency for a sample to differ from the population |
| Informal inference | A cautious estimate about the population from a sample |

An estimate from a sample: sample proportion × population size. Different samples give different estimates, so write "approximately" or "estimate".

## Sampling methods (2.01c, 2.01d)

| Method | Carry out? | In one line | Main weakness |
|---|---|---|---|
| Simple random | Yes | Every member and every sample equally likely | Needs a frame; may miss small groups |
| Opportunity | Yes | Whoever is available | Not random; biased to the place and time |
| Systematic | Critique only | Every kth from a random start | Pattern in the list can clash with k |
| Stratified | Critique only | Proportional sample from each group | Needs a full frame with group labels |
| Cluster | Critique only | Whole groups chosen at random | Clusters may not represent the population |
| Quota | Critique only | Fixed numbers per group, interviewer chooses | Not random; choice by interviewer |

**Simple random sample, in steps:**

1. Make a frame and number it 1 to N.
2. Generate random numbers in range.
3. Ignore repeats and out-of-range values.
4. Stop at n members.

**Critique, in steps:** name the method; say who could be missed or over-represented in this context; say how that could change the result; state whether the conclusion is safe.

**Systematic reminder.** Population 600, sample 40: interval 600/40 = 15, random start from 1 to 15.

For random samples you may assume the population is large enough to sample without replacement unless told otherwise.

## Diagrams (2.02a, 2.02b, 2.02i)

| Diagram | Use | Watch for |
|---|---|---|
| Vertical line chart / dot plot | Small discrete sets | Many values |
| Bar chart | Categories | Not for continuous data |
| Stem-and-leaf | Shape and every value | Needs a key |
| Box-and-whisker | Compare median, spread, skew | Hides modes and detail |
| Cumulative frequency | Median, quartiles, percentiles | Shape unclear |
| Histogram | Shape of continuous data | Detail lost |

Non-standard diagrams can appear. Read the title, axes, units and what each mark represents before you read any value.

## Histograms (2.02b)

```
density = frequency ÷ width of class
frequency = area of the bar = density × width
```

- Area, not height, is proportional to frequency.
- Probability link: divide frequency density by the total frequency and the total area is 1. Area under part of the histogram then estimates a probability.
- Values read from inside a bar are estimates, assuming even spread within the class.

**Reminder.** A class 30 to <50 holds 45 items. Width 20, so frequency density = 45/20 = 2.25.

## Averages and spread (2.02f, 2.02g)

| Quantity | Formula or rule |
|---|---|
| Mean | Σx/n, or Σfx/Σf |
| Median | Middle value; halfway position n/2 for grouped data |
| Mode | Most common value; modal class if grouped |
| IQR | Q3 − Q1 |
| Variance | Σx²/n − x̄², or Σfx²/Σf − x̄² |
| Standard deviation | √variance; root mean square deviation from the mean |

- Grouped data: use class midpoints. Mean, standard deviation and interpolated median are **estimates**.
- Interpolate for percentiles: find the class containing the position, then
  lower boundary + (position − frequency below) ÷ class frequency × class width.
- The median and IQR resist extreme values. The mean and standard deviation do not.
- Different conventions exist for naming these measures and for the symbols on a calculator. Know which output of your own calculator divides by n.
- Percentile positions: the pth percentile of grouped data is at position (p/100) × n. For n = 80, the 90th percentile is at position 72.
- Comparing: always give one comment on average and one on spread, in context.

**Method for sd from summary statistics:**

1. Find the mean: Σx ÷ n.
2. Find Σx² ÷ n.
3. Subtract the mean squared to get the variance.
4. Take the square root.

**Worked reminder.** n = 16, Σx = 224, Σx² = 3296.

```
mean = 224/16 = 14
variance = 3296/16 − 14² = 206 − 196 = 10
sd = √10 ≈ 3.16
```

## Outliers and cleaning (2.02h, 2.02j)

| Definition | A value is a possible outlier if it is |
|---|---|
| 1 | More than 1.5 × IQR below Q1 or above Q3 |
| 2 | More than 2 standard deviations from the mean |

Use the definition in the question. If none is given, state your choice.

**Worked reminder.** A list has Q1 = 22 and Q3 = 30, so IQR = 8 and 1.5 × IQR = 12.

```
lower fence = 22 − 12 = 10
upper fence = 30 + 12 = 42
```

A value of 45 lies beyond the upper fence, so it is a possible outlier. A value of 12 does not lie beyond the lower fence, so it is not. Always compare with the **nearer** quartile, and say what you conclude in context.

**Cleaning data, in steps:**

1. Look for errors: impossible, mis-typed or inconsistent values.
2. Correct from the source if you can; otherwise remove and say why.
3. Handle missing data by excluding those cases and stating the new n. Do not enter 0.
4. For outliers, ask whether they are errors or genuine. Do not delete a genuine value without a reason.
5. Say how the cleaning changes the mean, median or spread.

## Must-know distinctions

- **Sample vs census:** a census covers everyone; a sample covers some.
- **Opportunity vs simple random:** opportunity is convenient, random gives every member an equal chance.
- **Stratified vs quota:** stratified chooses members randomly within groups from a frame; quota lets the interviewer choose.
- **Histogram vs bar chart:** a histogram has a continuous scale with area as frequency; a bar chart has categories.
- **Mean vs median:** the mean uses every value and is pulled by outliers; the median is not.
- **Variance vs standard deviation:** variance is measured in squared units, so the standard deviation is the one that matches the data's units.

## Quick self-test

1. A class 30 to <50 has frequency density 2.25. What is its frequency?
2. A histogram bar of width 5 has height 3.2. How many items does it represent?
3. A sampling frame lists 600 people and a systematic sample of 40 is needed. What is the interval?
4. Data: 4, 6, 7, 9, 10, 12, 13, 15, 16, 19, 30. Find the median, Q1, Q3 and IQR.
5. Is 30 in question 4 an outlier by definition 1?
6. Is 30 in question 4 an outlier by definition 2, given mean ≈ 12.82 and sd ≈ 6.94?
7. A set has n = 16, Σx = 224 and Σx² = 3296. Find the standard deviation.
8. Values 0, 1, 2, 3, 4 have frequencies 7, 12, 9, 5, 2. Find the mean and standard deviation.
9. A set has mean 50 and sd 6. Is 63 an outlier by definition 2?
10. Why is a mean from grouped data only an estimate?
11. Give one weakness of quota sampling.
12. Two sets have the same median. Set A has IQR 5 and set B has IQR 11. Compare them.

### Answers

1. 2.25 × 20 = **45**.
2. 3.2 × 5 = **16** items.
3. 600/40 = **15**, with a random start from 1 to 15.
4. Median **12**, Q1 = 7, Q3 = 16, IQR = **9**.
5. Upper fence = 16 + 1.5 × 9 = 29.5. 30 exceeds it, so **yes**.
6. Mean + 2sd ≈ 12.82 + 13.88 = 26.7. 30 exceeds it, so **yes**.
7. Mean 14, variance 206 − 196 = 10, sd = **√10 ≈ 3.16**.
8. n = 35, Σfx = 53, Σfx² = 125. Mean = 53/35 ≈ **1.51**. Variance = 125/35 − 1.514² ≈ 1.278, so sd ≈ **1.13**.
9. 50 + 2 × 6 = 62. 63 is 13 above the mean, which is more than 12, so **yes**.
10. Each class is represented by one midpoint, and the true values inside it are not known.
11. The interviewer chooses who to ask, so it is **not random** and can be biased.
12. Same typical value; B is more spread out in its middle half, so A is more consistent.

## Where marks are usually lost

- Reading the height of a histogram bar as the frequency when class widths differ.
- Using class limits instead of midpoints for grouped mean and standard deviation.
- Giving Σx²/n as the variance without subtracting the mean squared.
- Stating a grouped estimate to many decimal places as if it were exact.
- Describing a sample as "biased" with no reason tied to the context.
- Writing "random" for a quota or opportunity sample.
- Removing an outlier without testing it against a stated definition.
- Comparing two distributions with an average only, and leaving out spread.
- Entering 0 for missing data.

## Official syllabus

The OCR A Level in Mathematics A (H240) specification, Version 3.1 (August 2026), published by OCR, sections 2.01 and 2.02.
