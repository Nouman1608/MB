---
title: "IGCSE Mathematics: Statistics — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Statistics"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 2
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "classifying-statistical-data-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "interpreting-statistical-data-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "averages-and-range-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "statistical-charts-and-diagrams-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "scatter-diagrams-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "cumulative-frequency-diagrams-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "histograms-cambridge-igcse-maths"
description: "Recall notes on data types, tally and two-way tables, averages, charts, scatter diagrams, cumulative frequency and histograms for Cambridge IGCSE Maths 0580."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-06
updatedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

Condensed for the final weeks. Pair these notes with the [Statistics
practice questions](/resources/igcse-mathematics-statistics-practice/)
for worked exam-style application.

## Classifying, tabulating and interpreting data (Core and Extended)

The syllabus asks you to **classify and tabulate** data, for example in tally tables and two-way tables (C9.1/E9.1).

- **Qualitative (categorical)** data are words or categories, such as favourite sport. **Quantitative** data are numbers.
- Quantitative data are **discrete** (counted, such as number of siblings) or **continuous** (measured, such as height).
- A **tally table** records each item with a stroke, grouped in fives; the **frequency** is the total for each row.
- A **two-way table** sorts data by two features at once. Every row and column total must add up.

```
30 students: how they travel to school

          Walk   Bus   Total
Boys        8     6     14
Girls       5    11     16
Total      13    17     30
```

To fill a missing cell, use the totals: if the table gave only "Girls total 16" and "Girls walk 5", then girls by bus = 16 - 5 = 11.

When you **interpret** data (C9.2/E9.2), read values from the table or diagram, compare data sets using an average and a measure of spread, and say what the data **cannot** show: a small sample, or a sample from one place, may not represent everyone.

## The three averages and the measures of spread, and when to use each

**Mean** -- sum of all values divided by how many values there are; affected by every value, including extreme ones. **Median** -- the middle value once data is ordered; not affected by extreme values, so more representative for skewed data. **Mode** -- the most frequently occurring value; the only average that works for non-numerical (categorical) data. **Range** -- largest value minus smallest value; a simple measure of spread, but distorted by a single extreme value. Extended adds **quartiles** and **interquartile range** (upper quartile minus lower quartile), which measure the spread of the middle 50% of the data and are far less affected by extreme values than the range.

```
Data: 3, 5, 5, 7, 9, 20
Mean   = (3+5+5+7+9+20)/6 = 49/6 = 8.17 (3 s.f.)
Median = (5+7)/2 = 6          (average of middle two values)
Mode   = 5                     (most frequent)
Range  = 20 - 3 = 17
```

Note how the single outlier (20) pulls the mean well above the median -- this is exactly why a skewed dataset is usually better summarised by the median.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--01-three-averages.webp" width="900" height="770" alt="Six values 2, 3, 3, 4, 5, 13 on a dot plot. The mode is 3 (most common), the median is 3.5 (middle of 3 and 4), the mean is 30 divided by 6 = 5, and the range is 13 - 2 = 11. The large value 13 pulls the mean above the median." loading="lazy">
  <figcaption>The mean, median, mode and range of one small list of data.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--02-frequency-table-averages.webp" width="900" height="950" alt="A frequency table of pets owned by 20 students. Multiplying pets by students gives 0, 8, 8, 6 and 4, a total of 26, so the mean is 26 / 20 = 1.3. The mode is 1 and the median is 1." loading="lazy">
  <figcaption>For a frequency table, multiply each value by its frequency, add, then divide by the total frequency.</figcaption>
</figure>


## Estimating the mean of grouped data (Extended)

Grouped data hides the exact individual values, so the midpoint of each class stands in for every value within it:

```
estimate of mean = sum of (midpoint x frequency) / total frequency
```

This is always called an "estimate" precisely because the true individual values within each class are unknown -- using the midpoint is an approximation, not an exact calculation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--03-grouped-mean-midpoints.webp" width="900" height="932" alt="Heights of 40 students in four 10 cm classes. Each class midpoint (155, 165, 175, 185) times its frequency totals 6740, giving an estimated mean of 168.5 cm. The modal class is 160 to under 170." loading="lazy">
  <figcaption>Use the midpoint of each class, not a boundary, so the mean is only an estimate.</figcaption>
</figure>


## Statistical charts

| Chart | Best for |
|---|---|
| Bar chart (composite/dual) | Comparing categories, or comparing two datasets side by side |
| Pie chart | Showing proportions of a whole |
| Pictogram | Simple visual comparison, using a key for partial symbols |
| Stem-and-leaf | Showing every individual value while preserving overall shape -- must be ordered, with a key |

**Reading a stem-and-leaf diagram:** the stem is the leading digit(s), the leaves are the trailing digit(s), always read with the key. To find the median or quartiles from a stem-and-leaf diagram, the data must first be in order along each row.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--07-stem-and-leaf-order.webp" width="900" height="680" alt="The same 15 values as an unordered and an ordered stem-and-leaf diagram. Counting to the 8th leaf unordered gives 38, which is wrong. Ordered, the 8th leaf is 31, the median. Key: 3 | 1 means 31." loading="lazy">
  <figcaption>Order the leaves in each row before counting to the median.</figcaption>
</figure>


## Scatter diagrams and correlation

- **Positive correlation** -- as one variable increases, the other tends to increase too (points trend upward left-to-right).
- **Negative correlation** -- as one variable increases, the other tends to decrease (points trend downward left-to-right).
- **Zero correlation** -- no clear pattern; do **not** force a line of best fit onto a scatter diagram showing zero correlation.

A line of best fit: single ruled line, drawn by inspection, extending across the full data set, with points roughly evenly distributed either side over its entire length -- it does not need to pass through any actual data point.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--04-correlation-types.webp" width="900" height="1010" alt="Three scatter diagrams: positive correlation (y rises with x), negative correlation (y falls as x rises) and zero correlation (no pattern, so no line of best fit)." loading="lazy">
  <figcaption>Judge the correlation by eye before drawing any line.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--05-line-of-best-fit.webp" width="900" height="850" alt="A scatter diagram of revision hours and test score with a line of best fit through the mean point. Reading up from 6 hours gives a predicted score of about 67. The line is dashed beyond 8 hours where there is no data." loading="lazy">
  <figcaption>A line of best fit passes through the mean point and is used to predict inside the range of the data.</figcaption>
</figure>


## Cumulative frequency diagrams (Extended)

Plot cumulative frequency (running total) against the upper class boundary, joined with a smooth curve. Reading estimates from the curve:

```
Median            = value at cumulative frequency = n/2
Lower quartile    = value at cumulative frequency = n/4
Upper quartile    = value at cumulative frequency = 3n/4
Interquartile range = upper quartile - lower quartile
```

where n is the total frequency. Always read across from the correct cumulative frequency value on the vertical axis to the curve, then down to the horizontal axis -- starting from the wrong axis gives a nonsensical answer.

**Percentiles** (Extended) work the same way: the p-th percentile is the value at cumulative frequency p% of n. For n = 80, the 90th percentile is read at 0.9 x 80 = 72.

## Histograms with frequency density (Extended)

Used specifically when class widths are **unequal** -- plotting raw frequency would visually exaggerate wider classes.

```
frequency density = frequency / class width
```

```
Class 10 ≤ x < 15 (width 5), frequency 20
frequency density = 20/5 = 4

Class 15 ≤ x < 25 (width 10), frequency 30
frequency density = 30/10 = 3
```

Even though the second class has a higher frequency, its frequency density is lower because the class is wider -- the bar heights on a histogram reflect this density, not the raw frequency count.

## Exam traps

- Using a class boundary instead of the midpoint when estimating a grouped mean.
- Forcing a line of best fit onto data with zero correlation.
- Confusing frequency with frequency density on a histogram with unequal class widths.
- Reading a stem-and-leaf diagram before ordering the leaves within each row.
- Starting on the wrong axis of a cumulative frequency diagram: to find the median, start at n/2 on the **vertical** (cumulative frequency) axis, go across to the curve, then down to the horizontal axis.
- Giving the mode of grouped data as a single value, when a question at Extended level asks for the modal class (the class with the highest frequency).

## Self-test

1. Which average is least affected by an extreme outlier in the data?
2. State the formula for estimating the mean of grouped data.
3. What type of correlation should NOT have a line of best fit drawn onto it?
4. State the formula for frequency density.
5. From a cumulative frequency diagram with n = 80 items, at what cumulative frequency value would you read off the median?
6. Why must a stem-and-leaf diagram's leaves be ordered before finding the median?
7. Is the number of goals scored in a match discrete or continuous data?

**Answers:** 1. The median. 2. Estimate of mean = sum of (midpoint x frequency) / total frequency. 3. Zero correlation. 4. Frequency density = frequency / class width. 5. n/2 = 40. 6. Because the median is the middle value once data is in order -- an unordered stem-and-leaf diagram does not let you correctly identify which value is actually in the middle position. 7. Discrete -- it is counted, and can only take whole-number values.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-statistics--06-histogram-frequency-density.webp" width="900" height="850" alt="A histogram of ages of 120 people with unequal class widths. Frequency density = frequency / class width gives 2, 2.5, 3 and 1. The 10 to 30 class has most people (50) but the 30 to 40 bar is the tallest." loading="lazy">
  <figcaption>With unequal class widths the bar height is frequency density, and the bar area equals the frequency.</figcaption>
</figure>

## Frequently asked questions

**Which average is least affected by an outlier?**
The median, because it depends only on the middle value. The mean is affected by every value, including extreme ones.

**How do you estimate the mean of grouped data?**
Multiply each class midpoint by its frequency, add the results and divide by the total frequency. It is only an estimate because the exact values within each class are unknown.

**How should a line of best fit be drawn?**
Draw a single ruled line by eye that follows the trend of the points across the whole data set. Do not draw one on a scatter diagram showing zero correlation.

**What is a two-way table?**
A two-way table sorts data by two features at once, and every row and column total must add up. Missing cells can be found from the totals.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics (0580) syllabus
for examination in 2025, 2026 and 2027*: [official syllabus
PDF](https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf),
Subject content, section 9 "Statistics". Verified 2026-09-06.
