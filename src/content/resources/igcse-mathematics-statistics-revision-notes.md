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
description: "Condensed recall notes on classifying data, averages, statistical charts, scatter diagrams, cumulative frequency and histograms for Cambridge IGCSE Mathematics 0580."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

Condensed for the final weeks. Pair these notes with the [Statistics
practice questions](/resources/igcse-mathematics-statistics-practice/)
for worked exam-style application.

## The four averages, and when to use each

**Mean** -- sum of all values divided by how many values there are; affected by every value, including extreme ones. **Median** -- the middle value once data is ordered; not affected by extreme values, so more representative for skewed data. **Mode** -- the most frequently occurring value; the only average that works for non-numerical (categorical) data. **Range** -- largest value minus smallest value; a simple measure of spread, but distorted by a single extreme value. Extended adds **quartiles** and **interquartile range** (upper quartile minus lower quartile), which measure the spread of the middle 50% of the data and are far less affected by extreme values than the range.

```
Data: 3, 5, 5, 7, 9, 20
Mean   = (3+5+5+7+9+20)/6 = 49/6 = 8.17 (3 s.f.)
Median = (5+7)/2 = 6          (average of middle two values)
Mode   = 5                     (most frequent)
Range  = 20 - 3 = 17
```

Note how the single outlier (20) pulls the mean well above the median -- this is exactly why a skewed dataset is usually better summarised by the median.

## Estimating the mean of grouped data (Extended)

Grouped data hides the exact individual values, so the midpoint of each class stands in for every value within it:

```
estimate of mean = sum of (midpoint x frequency) / total frequency
```

This is always called an "estimate" precisely because the true individual values within each class are unknown -- using the midpoint is an approximation, not an exact calculation.

## Statistical charts

| Chart | Best for |
|---|---|
| Bar chart (composite/dual) | Comparing categories, or comparing two datasets side by side |
| Pie chart | Showing proportions of a whole |
| Pictogram | Simple visual comparison, using a key for partial symbols |
| Stem-and-leaf | Showing every individual value while preserving overall shape -- must be ordered, with a key |

**Reading a stem-and-leaf diagram:** the stem is the leading digit(s), the leaves are the trailing digit(s), always read with the key. To find the median or quartiles from a stem-and-leaf diagram, the data must first be in order along each row.

## Scatter diagrams and correlation

- **Positive correlation** -- as one variable increases, the other tends to increase too (points trend upward left-to-right).
- **Negative correlation** -- as one variable increases, the other tends to decrease (points trend downward left-to-right).
- **Zero correlation** -- no clear pattern; do **not** force a line of best fit onto a scatter diagram showing zero correlation.

A line of best fit: single ruled line, drawn by inspection, extending across the full data set, with points roughly evenly distributed either side over its entire length -- it does not need to pass through any actual data point.

## Cumulative frequency diagrams (Extended)

Plot cumulative frequency (running total) against the upper class boundary, joined with a smooth curve. Reading estimates from the curve:

```
Median            = value at cumulative frequency = n/2
Lower quartile    = value at cumulative frequency = n/4
Upper quartile    = value at cumulative frequency = 3n/4
Interquartile range = upper quartile - lower quartile
```

where n is the total frequency. Always read across from the correct cumulative frequency value on the vertical axis to the curve, then down to the horizontal axis -- reading in the wrong order gives a nonsensical answer.

## Histograms with frequency density (Extended)

Used specifically when class widths are **unequal** -- plotting raw frequency would visually exaggerate wider classes.

```
frequency density = frequency / class width
```

```
Class 10-<15 (width 5), frequency 20
frequency density = 20/5 = 4

Class 15-<25 (width 10), frequency 30
frequency density = 30/10 = 3
```

Even though the second class has a higher frequency, its frequency density is lower because the class is wider -- the bar heights on a histogram reflect this density, not the raw frequency count.

## Exam traps

- Using a class boundary instead of the midpoint when estimating a grouped mean.
- Forcing a line of best fit onto data with zero correlation.
- Confusing frequency with frequency density on a histogram with unequal class widths.
- Reading a stem-and-leaf diagram before ordering the leaves within each row.
- Reading a cumulative frequency value across to the curve and up to the axis (wrong order) instead of across to the curve, then down.
- Stating only the modal class was found, when a question at Extended level explicitly requires identifying it as a class, not a single value.

## Self-test

1. Which average is least affected by an extreme outlier in the data?
2. State the formula for estimating the mean of grouped data.
3. What type of correlation should NOT have a line of best fit drawn onto it?
4. State the formula for frequency density.
5. From a cumulative frequency diagram with n = 80 items, at what cumulative frequency value would you read off the median?
6. Why must a stem-and-leaf diagram's leaves be ordered before finding the median?

**Answers:** 1. The median. 2. Estimate of mean = sum of (midpoint x frequency) / total frequency. 3. Zero correlation. 4. Frequency density = frequency / class width. 5. n/2 = 40. 6. Because the median is the middle value once data is in order -- an unordered stem-and-leaf diagram does not let you correctly identify which value is actually in the middle position.

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics (0580) syllabus
for examination in 2025, 2026 and 2027*: [official syllabus
PDF](https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf),
Subject content, section 9 "Statistics". Verified 2026-09-06.
