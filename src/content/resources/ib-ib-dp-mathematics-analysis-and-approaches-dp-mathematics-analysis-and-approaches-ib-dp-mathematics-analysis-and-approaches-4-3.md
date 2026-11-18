---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.3 Measures of central tendency and measures of dispersion"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 -- Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-3"
description: "IB Maths AA study guide to section 4.3: mean, median, mode, grouped estimates, quartiles of discrete data, standard deviation, variance and constant changes."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.3** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **measures of central tendency (mean, median and mode); estimation of the mean from
grouped data; modal class; measures of dispersion (interquartile range, standard deviation and variance);
the effect of constant changes on the original data; quartiles of discrete data**. It is SL and HL content.

The [sampling, data presentation, summary statistics and regression study guide](/resources/ib-dp-mathematics-aa-statistics-correlation-regression/)
introduces these measures. This page works through the question types that 4.3 produces on its own:
statistics from a frequency table, finding an unknown frequency from the mean, combining groups, choosing
the right average, and working backwards from a linear change.

## Measures of central tendency

| Measure | Raw data | Frequency table |
|---|---|---|
| Mean | x̄ = Σx / n | x̄ = Σfx / Σf |
| Median | Middle value: position (n + 1)/2 in ordered data | Use cumulative frequencies to locate position (n + 1)/2 |
| Mode | Most frequent value | Value with the highest frequency |

For **grouped data** you do not know the individual values, so:

- the mean is **estimated** using mid-interval values as x in Σfx / Σf;
- the **modal class** (the class with the highest frequency, for equal class widths) replaces the mode.

**Choosing an average.** The mean uses every value, so one extreme value can pull it a long way. The median
is resistant to outliers, so it is the better summary for data with outliers or a long tail (house prices,
incomes). The mode is the only one of the three that makes sense for non-numerical categories and is useful
when the most common value matters (the most popular shoe size to stock).

## Measures of dispersion

- **Range** = maximum − minimum. Simple, but depends only on the two most extreme values.
- **Interquartile range** IQR = Q₃ − Q₁: the spread of the middle half. Resistant to outliers.
- **Standard deviation** σ: a typical distance of the values from the mean, in the same units as the data.
- **Variance** σ²: the square of the standard deviation, in squared units.

```
σ² = Σ(x − x̄)² / n      (for a frequency table: Σf(x − x̄)² / Σf)
σ  = √σ²
```

The guide expects standard deviation and variance to be found with **technology**; the formula is there to
show what σ measures. On a GDC, use the value labelled σx (division by n), and treat the data as the whole
population unless the question says otherwise. If you are given σ and asked for the variance, square it; if
given the variance, take the square root.

**Quartiles of discrete data by hand.** Order the data and find the median. Q₁ is the median of the values
below the median position and Q₃ the median of the values above it. With an odd number of values, the
median itself belongs to neither half. Different textbooks and calculators use slightly different quartile
rules, so on Paper 2 a GDC answer and a hand answer can occasionally differ.

### Worked example 1: everything from a frequency table

Forty students recorded how many books they read over a holiday.

| Books x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency f | 3 | 7 | 12 | 9 | 6 | 3 |
| Cumulative frequency | 3 | 10 | 22 | 31 | 37 | 40 |

```
Σfx = 0 + 7 + 24 + 27 + 24 + 15 = 97
Mean = 97/40 = 2.425 books
Mode = 2 books
Median: 20th and 21st values; cumulative frequency reaches 22 at x = 2
        so both are 2 → median = 2
Q₁: median of values 1 to 20 → mean of 10th and 11th values = (1 + 2)/2 = 1.5
Q₃: median of values 21 to 40 → mean of 30th and 31st values = (3 + 3)/2 = 3
IQR = 3 − 1.5 = 1.5 books
GDC (list x, frequency f): σ ≈ 1.34 books, variance ≈ 1.79 books²
```

Notice that Q₁ = 1.5 is not a possible number of books. Quartiles and means need not be possible data
values.

## Working backwards from the mean

Many Paper 1 questions give the mean and ask for a missing value or frequency. Write Σfx and Σf in terms of
the unknown, then set Σfx / Σf equal to the mean.

### Worked example 2: an unknown frequency

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| f | 5 | k | 8 | 2 |

The mean is 2.25. Find k.

```
Σf = 15 + k
Σfx = 5 + 2k + 24 + 8 = 37 + 2k
(37 + 2k)/(15 + k) = 2.25
37 + 2k = 33.75 + 2.25k
3.25 = 0.25k   →   k = 13
Check: Σfx = 63, Σf = 28, 63/28 = 2.25 ✓
```

**Combining groups.** The mean of two groups together is not the average of the two means unless the groups
are the same size. Use totals: if 18 students have mean 64 and 12 have mean 71, the combined mean is
(18 × 64 + 12 × 71)/30 = 2004/30 = 66.8.

## The effect of constant changes

If every value x is replaced by ax + b (a > 0):

| Statistic | New value |
|---|---|
| Mean, median, mode, quartiles | a × old + b |
| Standard deviation, range, IQR | a × old |
| Variance | a² × old |

Adding b shifts every value the same distance, so the centre moves but the spread does not. Multiplying by a
stretches all distances, including the spread. (If a is negative, the spread measures are multiplied by |a|
and the order of the data reverses, so Q₁ and Q₃ swap roles.)

### Worked example 3: finding the transformation

Raw test scores have mean 52 and standard deviation 8. The teacher wants scaled scores y = ax + b with mean
60 and standard deviation 10.

```
Standard deviation:  8a = 10   →   a = 1.25
Mean:                1.25 × 52 + b = 60   →   65 + b = 60   →   b = −5
Scaled score for a raw score of 70: 1.25 × 70 − 5 = 82.5
```

Always find a from the spread first: b does not affect the standard deviation, so the spread equation has
only one unknown.

## Common mistakes

- Dividing Σfx by the number of classes (or the number of different x values) instead of Σf.
- Using class boundaries or class widths instead of mid-interval values for a grouped mean.
- Calling an estimate from grouped data "the mean" without saying it is an estimate.
- Locating the median of a frequency table at the value whose frequency is largest.
- Adding the constant b to the standard deviation, or multiplying the variance by a instead of a².
- Averaging two group means when the groups are different sizes.
- Using sx from the GDC instead of σx.

## Exam technique

- **"Write down"** the mean or standard deviation (Paper 2): enter the list and frequencies in the GDC and
  copy the value to 3 significant figures. No working is needed, but a wrong list entry gets no credit, so
  check Σf matches the total.
- **"Find"** on Paper 1: show Σfx and Σf, or the ordered positions for the median and quartiles.
- **"Estimate"**: grouped data; state the mid-interval values you used.
- **"Explain"** which average is more appropriate: name it and link the reason to a feature of the data
  (an outlier, skewed values, categories).
- **"Hence"** after a constant change: use the rules in the table rather than recalculating from raw data.

## Where to go next

Use the [4.3 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-3-revision-notes/)
for recall and the [4.3 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-3-practice/)
to test yourself. Next, section 4.4 looks at two variables together: see the
[4.4 linear correlation and regression study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-4/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.3 (SL and HL): measures of central tendency (mean, median and mode); estimation of mean from
grouped data; modal class; measures of dispersion (interquartile range, standard deviation and variance);
effect of constant changes on the original data; quartiles of discrete data.
