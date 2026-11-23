---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.2 Presentation of data: frequency distributions, histograms and box-and-whisker diagrams -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-2"
description: "Revision notes for IB Maths AA 4.2: frequency tables, histograms, cumulative frequency graphs, percentiles and box plots, with traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.2** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): frequency distributions, histograms, cumulative frequency graphs and box and
whisker diagrams. Full explanations and worked examples are in the
[4.2 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-2/).

## Frequency tables and class boundaries

- Discrete data: one row or column per value.
- Grouped data: classes with no gaps for continuous data, such as 30 ≤ x < 40.
- Data **rounded to the nearest unit**, printed class 15–19: boundaries 14.5 and 19.5, width 5,
  mid-interval value 17.
- Mid-interval value = (lower boundary + upper boundary) ÷ 2.

## Histograms (equal class widths)

- Bar height = frequency; bars touch; continuous horizontal scale.
- Modal class = tallest bar.
- Grouping hides individual values: the exact minimum, maximum, range and median cannot be read.
- Bar charts (with gaps) are for categories or discrete values; histograms are for grouped or continuous
  data.

## Cumulative frequency graphs

1. Make a running total of the frequencies.
2. Plot each total at the **upper class boundary**.
3. Start at (lower boundary of first class, 0).
4. Join with a smooth curve or straight segments.

| To find | Read across at |
|---|---|
| Q₁ | n/4 |
| Median | n/2 |
| Q₃ | 3n/4 |
| pth percentile | pn/100 |

Reading **up** from x gives how many values are below x. For "more than x", subtract from n. For "between a
and b", subtract the two readings.

Linear interpolation (straight segments) for a value inside a class:

```
value ≈ lower boundary + (target CF − CF before class) / (class frequency) × class width
```

## Worked reminder: interpolation

Sixty values; the class 20 ≤ x < 30 has frequency 18 and the cumulative frequency before it is 24. The
median (30th value) is about 20 + (30 − 24)/18 × 10 ≈ 23.3. The 50th percentile and the median are the
same thing, and Q₁ and Q₃ are the 25th and 75th percentiles.

## Box and whisker diagrams

- Five-number summary: minimum, Q₁, median, Q₃, maximum.
- Check outliers first: below Q₁ − 1.5 × IQR or above Q₃ + 1.5 × IQR. Mark them with crosses; the
  whisker ends at the most extreme non-outlier.
- **Symmetric** (median central in the box, whiskers similar): the data may be normally distributed.
- **Not symmetric**: a normal model is unlikely.

**Comparing two box plots:** one comparison of centre (medians) and one of spread (IQRs), each with numbers
and context. Comment on shape if asked.

## Key terms

| Term | Meaning |
|---|---|
| Frequency distribution | A table showing each value or class and its frequency |
| Class boundary | The true limit between two classes, used for histograms and CF plots |
| Mid-interval value | The centre of a class, used to estimate the mean |
| Cumulative frequency | The running total of frequencies up to an upper boundary |
| Percentile | The pth percentile is the value below which p% of the data lie |
| Interquartile range | Q₃ − Q₁ |
| Five-number summary | Minimum, Q₁, median, Q₃, maximum |

## Exam traps

- Plotting at mid-interval values instead of upper boundaries.
- Missing the zero starting point of a CF graph.
- Taking printed limits as boundaries for rounded data.
- Reading the median at (n + 1)/2 from a CF graph: for grouped data use n/2.
- Answering "more than" with the "less than" reading.
- Drawing a whisker to an outlier.
- Comparing box plots with values only and no conclusion in context.
- Claiming data "are normal" from a box plot: symmetry suggests a normal model **may** fit.

## Self-test

1. Times are recorded to the nearest second. For the class 40–44, give the class boundaries, the class width
   and the mid-interval value.
2. A cumulative frequency graph shows 160 values. At what cumulative frequencies would you read Q₁, the
   median, Q₃ and the 70th percentile?
3. Where is each point of a cumulative frequency graph plotted?
4. For 200 values, the cumulative frequency at x = 50 is 146. How many values are more than 50?
5. State the five values shown on a box plot without outliers.
6. Q₁ = 20, Q₃ = 28 and the largest value is 41. Is 41 an outlier? Where does the upper whisker end if it is?
7. A box plot has its median close to Q₁ and a long upper whisker. Is a normal model likely?
8. Why is the IQR often a better measure of spread than the range for comparing two groups?
9. Why can the range not be found exactly from a grouped frequency table?
10. State one difference between a histogram and a bar chart.
11. Classes 0 ≤ x < 5, 5 ≤ x < 10, 10 ≤ x < 15 have frequencies 9, 14, 11. Write down the modal class.
12. The 90th percentile of a set of masses is 62 kg. Interpret this.

### Answers

1. Boundaries 39.5 and 44.5; width 5; mid-interval value 42.
2. 40, 80, 120 and 112.
3. At (upper class boundary, cumulative frequency), with a starting point at (lower boundary of the first
   class, 0).
4. 200 − 146 = 54.
5. Minimum, lower quartile, median, upper quartile, maximum.
6. IQR = 8, boundary 28 + 12 = 40, and 41 > 40, so yes. The whisker ends at the largest value that is not
   an outlier.
7. No: the distribution is not symmetric.
8. The range depends only on the two most extreme values, so one unusual value changes it; the IQR uses the
   middle half of the data.
9. Individual values are hidden inside classes, so the exact minimum and maximum are unknown.
10. A histogram's bars touch on a continuous scale; a bar chart's bars are separated and show categories or
    discrete values.
11. 5 ≤ x < 10.
12. About 90% of the masses are 62 kg or less (and about 10% are more).

## Where to go next

Test yourself with the [4.2 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-2-practice/)
or review the wider unit in the
[sampling, data presentation, summary statistics and regression revision notes](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes/).
