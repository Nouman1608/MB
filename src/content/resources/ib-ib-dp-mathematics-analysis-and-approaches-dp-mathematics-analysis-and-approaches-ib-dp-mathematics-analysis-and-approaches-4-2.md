---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.2 Presentation of data: frequency distributions, histograms and box-and-whisker diagrams"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-2"
description: "IB Maths AA study guide to section 4.2: frequency tables, class boundaries, histograms, cumulative frequency graphs, percentiles and comparing box plots."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.2** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **presentation of data (discrete and continuous): frequency distributions
(tables), histograms, cumulative frequency and cumulative frequency graphs, and their use to find the
median, quartiles, percentiles, range and interquartile range (IQR); production and understanding of box
and whisker diagrams**. It is SL and HL content.

The [sampling, data presentation, summary statistics and regression study guide](/resources/ib-dp-mathematics-aa-statistics-correlation-regression/)
gives a first pass through 4.2. This page adds the details that decide marks: class boundaries for rounded
data, reading a cumulative frequency graph in both directions, percentiles, and writing a comparison of two
box plots that earns full credit.

## Frequency tables

A **frequency distribution** lists each value (or class of values) with how often it occurs.

- **Discrete data** can be tabulated value by value (0 goals, 1 goal, 2 goals ...).
- **Continuous data**, or discrete data with many values, is grouped into **classes**.

For continuous data the classes should leave no gaps: 10 ≤ t < 20, 20 ≤ t < 30, and so on. When data are
**recorded to the nearest unit**, the printed classes may look as if they have gaps, and you need the
**class boundaries**:

```
Lengths to the nearest cm, printed class 15–19
Lower boundary = 14.5,  upper boundary = 19.5
Class width = 19.5 − 14.5 = 5
Mid-interval value = (14.5 + 19.5)/2 = 17
```

Boundaries matter for histograms (bars must meet) and for cumulative frequency graphs (points are plotted
at upper boundaries).

## Histograms

The syllabus uses **frequency histograms with equal class intervals**: the height of each bar is the
frequency, the bars touch, and the horizontal axis is a continuous scale. The **modal class** is the class
with the tallest bar.

A histogram is not a bar chart. A bar chart has gaps between bars and suits categories or discrete values;
a histogram shows continuous (or grouped) data on a number line.

From a histogram you can recover the frequency table, the total frequency, the modal class and the number
of values above or below a class boundary. You cannot recover individual values or the exact minimum and
maximum: grouping loses that information.

## Cumulative frequency

**Cumulative frequency** is a running total of frequencies. On a cumulative frequency graph:

- plot each cumulative frequency against the **upper class boundary**;
- start the graph at the lower boundary of the first class with cumulative frequency 0;
- join the points with a smooth curve or straight line segments.

For n values, read across from the vertical axis:

| Statistic | Read across at |
|---|---|
| Lower quartile Q₁ | n/4 |
| Median | n/2 |
| Upper quartile Q₃ | 3n/4 |
| pth percentile | (p/100) × n |

The graph also works the other way: read **up** from a value on the horizontal axis to find how many data
values are below it. "How many are **more than** x?" is n minus that reading.

### Worked example 1: reading a cumulative frequency graph

The masses of 80 apples are summarised below.

| Mass m (g) | 100 ≤ m < 120 | 120 ≤ m < 140 | 140 ≤ m < 160 | 160 ≤ m < 180 | 180 ≤ m < 200 | 200 ≤ m < 220 |
|---|---|---|---|---|---|---|
| Frequency | 4 | 13 | 25 | 22 | 12 | 4 |
| Cumulative frequency | 4 | 17 | 42 | 64 | 76 | 80 |

Plot (100, 0), (120, 4), (140, 17), (160, 42), (180, 64), (200, 76), (220, 80). Joining the points with
straight lines is the same as linear interpolation, so the readings can be checked by calculation:

```
Median (40th):          140 + (40 − 17)/25 × 20 = 158.4 g
Q₁ (20th):              140 + (20 − 17)/25 × 20 = 142.4 g
Q₃ (60th):              160 + (60 − 42)/22 × 20 ≈ 176.4 g
IQR ≈ 176.4 − 142.4 = 34.0 g
10th percentile (8th):  120 + (8 − 4)/13 × 20 ≈ 126.2 g
Heavier than 170 g:     CF at 170 ≈ 42 + 22 × 0.5 = 53, so about 80 − 53 = 27 apples
```

On a smooth curve your readings may differ slightly from these interpolated values. The range cannot be found exactly from grouped data: the best you can say is that it is at most
220 − 100 = 120 g.

## Box and whisker diagrams

A box and whisker diagram (box plot) shows the five-number summary: minimum, Q₁, median, Q₃, maximum,
drawn against a scale.

**With outliers:** mark each outlier with a cross, and end the whisker at the most extreme value that is
**not** an outlier. Check for outliers first (more than 1.5 × IQR from the nearest quartile) or the
whiskers will be drawn too long.

**Symmetry and normality.** If the median is near the centre of the box and the two whiskers are roughly
equal in length, the data are roughly symmetric and **may** be normally distributed. If the median sits
close to one end of the box or one whisker is much longer, the data are not symmetric and a normal model is
unlikely to fit.

### Worked example 2: comparing two distributions

Two classes recorded the time, in minutes, they spent on homework one evening.

| | Minimum | Q₁ | Median | Q₃ | Maximum |
|---|---|---|---|---|---|
| Class A | 12 | 18 | 22 | 26 | 31 |
| Class B | 8 | 15 | 27 | 31 | 34 |

A comparison that scores well makes two comparisons, each with values and context:

- **Centre:** the median for Class B (27 minutes) is higher than for Class A (22 minutes), so students in
  Class B typically spent longer on homework.
- **Spread:** the IQR for Class B (16 minutes) is twice that of Class A (8 minutes), so Class B's times were
  more varied.
- **Shape:** Class A's median sits in the middle of the box and its whiskers are similar (6 and 5 minutes),
  so its times may be normally distributed. Class B's median is close to Q₃ and its lower whisker (7) is
  much longer than its upper whisker (3), so a normal model is unlikely.

Comparing ranges alone is weaker than comparing IQRs, because a single extreme value changes the range.

## Common mistakes

- Plotting cumulative frequencies at the mid-interval values instead of the upper boundaries.
- Forgetting the starting point with cumulative frequency 0, which distorts the first part of the graph.
- Using printed class limits (15–19) as boundaries for rounded data instead of 14.5 and 19.5.
- Answering "more than 170 g" with the reading at 170 instead of n minus it.
- Giving the frequency at a point when the question asks for a cumulative total, or the reverse.
- Drawing a whisker to an outlier.
- Comparing two box plots by listing values without saying which is larger and what it means in context.

## Exam technique

- **"Write down"** a value read from a graph: show the reading lines on the graph if it is printed in the
  answer booklet.
- **"Estimate"**: values from grouped data or a cumulative frequency graph are estimates; say so and give 3
  significant figures unless the context suggests otherwise.
- **"Draw" / "Sketch"** a box plot: use the scale given, label the axis, and mark outliers separately.
- **"Compare"**: one statement about centre, one about spread, each with numbers and context.
- **"Comment on"** the shape: link symmetry to whether a normal model may be appropriate.

Paper 1 may ask for all of these without technology. On Paper 2, a GDC gives quartiles from raw data or a
frequency list, but it cannot read your cumulative frequency graph for you.

## Where to go next

Use the [4.2 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-2-revision-notes/)
for recall and the [4.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-2-practice/)
to test yourself. Section 4.3 turns tables into averages and measures of spread: see the
[4.3 measures of central tendency and dispersion study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-3/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.2 (SL and HL): presentation of data (discrete and continuous): frequency distributions
(tables); histograms; cumulative frequency; cumulative frequency graphs, and their use to find median,
quartiles, percentiles, range and interquartile range; production and understanding of box and whisker
diagrams.
