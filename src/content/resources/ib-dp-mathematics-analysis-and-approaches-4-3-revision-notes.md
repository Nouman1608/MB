---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.3 Measures of central tendency and measures of dispersion -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-3"
description: "Revision notes for IB Maths AA 4.3: averages, grouped mean estimates, quartiles, standard deviation, variance and constant changes, with a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.3** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): measures of central tendency and of dispersion. Explanations and worked
examples are in the
[4.3 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-4-3/).

## Formulae and definitions

```
Mean (raw):            x̄ = Σx / n
Mean (table):          x̄ = Σfx / Σf
Grouped mean:          use mid-interval values for x (an estimate)
Median position:       (n + 1)/2 in ordered data
IQR:                   Q₃ − Q₁
Variance:              σ² = Σf(x − x̄)² / Σf      (found with technology)
Standard deviation:    σ = √variance
```

- **Mode:** most frequent value. **Modal class:** class with highest frequency (equal widths).
- **Quartiles of discrete data by hand:** split the ordered data at the median; Q₁ and Q₃ are the medians of
  the lower and upper halves. For odd n, leave the median out of both halves.
- **GDC:** use σx (divides by n); treat the data as the population unless told otherwise.

## Which measure, and why

| Situation | Best centre | Best spread |
|---|---|---|
| Roughly symmetric, no outliers | Mean | Standard deviation |
| Outliers or a long tail | Median | IQR |
| Categories, or "most common" matters | Mode | — |

## Constant changes: y = ax + b

| Measure | Effect |
|---|---|
| Mean, median, mode, quartiles | a × old + b |
| Standard deviation, IQR, range | a × old (use the size of a if a is negative) |
| Variance | a² × old |

Adding a constant moves the centre only. Multiplying scales everything, including spread.

**Working backwards:** use the spread first (it does not involve b) to find a, then the mean to find b.

## Combining and adjusting

- Combined mean of two groups = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂), not the average of the means.
- New mean when a value v is added: (nx̄ + v)/(n + 1).
- Unknown frequency or value: write Σfx and Σf in terms of the unknown and solve Σfx/Σf = mean.

## Worked reminder: median of a frequency table

For x = 0, 1, 2, 3 with frequencies 5, 8, 6, 2 (n = 21), the cumulative frequencies are 5, 13, 19, 21. The
median is the 11th value, which falls in the block of values with cumulative frequency up to 13, so the
median is 1. The mode is also 1 here, but that is a coincidence: always locate the median's position
first.

## Key terms

| Term | Meaning |
|---|---|
| Measure of central tendency | A single value representing the centre: mean, median or mode |
| Measure of dispersion | A value describing spread: range, IQR, standard deviation, variance |
| Mid-interval value | Centre of a class, used to estimate the mean of grouped data |
| Modal class | Class with the highest frequency |
| Standard deviation | A typical distance of values from the mean, in the units of the data |
| Variance | The square of the standard deviation, in squared units |

## Exam traps

- Dividing by the number of classes rather than Σf.
- Calling a grouped mean exact: it is an estimate.
- Reading the median as the value with the greatest frequency.
- Adding b to the standard deviation, or multiplying variance by a.
- Averaging two means from groups of different sizes.
- Using sx from the GDC instead of σx.
- Giving variance in the original units: it is in squared units.

## Self-test

1. Find the mean, median and mode of 7, 3, 9, 3, 12, 6, 2, 10.
2. The mean of 8 values is 15.5. A ninth value, 20, is added. Find the new mean.
3. Write down the standard deviation when the variance is 6.25.
4. Data have mean 40 and standard deviation 6. Each value is multiplied by 3 and then 10 is subtracted. Find
   the new mean, standard deviation and variance.
5. Estimate the mean of the grouped data: 0 ≤ x < 10 (5), 10 ≤ x < 20 (9), 20 ≤ x < 30 (14),
   30 ≤ x < 40 (2).
6. Write down the modal class in question 5.
7. Find Q₁, Q₃ and the IQR of 9, 11, 12, 14, 16, 17, 19, 20, 21, 23, 25.
8. A group of 20 has mean 50 and a group of 30 has mean 60. Find the combined mean.
9. Seven house prices (in thousands) are 210, 225, 240, 250, 265, 280, 1450. Which average best represents
   them? Why?
10. Raw scores have mean 45 and standard deviation 12. They are scaled to y = ax + b with mean 60 and
    standard deviation 9. Find a and b.
11. Why is the standard deviation usually quoted rather than the variance?
12. Explain why a mean found from grouped data is only an estimate.

### Answers

1. Sum 52, so mean 6.5; ordered 2, 3, 3, 6, 7, 9, 10, 12, so median (6 + 7)/2 = 6.5; mode 3.
2. (8 × 15.5 + 20)/9 = 144/9 = 16.
3. √6.25 = 2.5.
4. Mean 3 × 40 − 10 = 110; standard deviation 3 × 6 = 18; variance 18² = 324.
5. Mid-interval values 5, 15, 25, 35: Σfx = 580 and Σf = 30, so the mean ≈ 19.3.
6. 20 ≤ x < 30.
7. Median 17 (6th value). Q₁ = 12, Q₃ = 21, IQR = 9.
8. (1000 + 1800)/50 = 56.
9. The median (250 thousand): the mean (about 417 thousand) is pulled up by the one very expensive house and
   is higher than six of the seven prices.
10. 12a = 9, so a = 0.75; 0.75 × 45 + b = 60, so b = 26.25.
11. It is in the same units as the data, so it can be compared directly with the values and the mean.
12. The individual values are unknown, so each is assumed to be at its class's mid-interval value.

## Where to go next

Practise with the [4.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-4-3-practice/)
and see the [4.2 presentation of data revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-4-2-revision-notes/)
for quartiles from cumulative frequency graphs.
