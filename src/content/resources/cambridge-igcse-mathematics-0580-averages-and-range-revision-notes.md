---
title: "Cambridge IGCSE Mathematics (0580): Averages and range -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 9 – Statistics"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9.3
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "averages-and-range-cambridge-igcse-maths"
description: "Revision notes for Cambridge IGCSE Maths 0580 section 9.3: mean, median, mode, range, quartiles, IQR and grouped mean estimates, with traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **9.3** of Topic 9 Statistics in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. Core (**C9.3 Averages and range**) covers the mean, median, mode and range of individual data in a list or an ungrouped frequency table, and when to use each. Extended (**E9.3 Averages and measures of spread**) adds quartiles and the interquartile range, an estimate of the mean for grouped data, and the modal class. Lines marked **(Extended)** are for Extended candidates only.

For worked examples in full, use the [averages and range study guide](/resources/cambridge-igcse-mathematics-0580-averages-and-range/). For marked questions, use the [averages and range practice questions](/resources/cambridge-igcse-mathematics-0580-averages-and-range-practice/).

## Key terms

| Term | Meaning | Tier |
|---|---|---|
| Mean | Sum of values ÷ number of values | Core and Extended |
| Median | Middle value of the ordered data | Core and Extended |
| Mode | Most common value | Core and Extended |
| Range | Largest − smallest | Core and Extended |
| Lower quartile (LQ) | Value a quarter of the way through the ordered data | Extended |
| Upper quartile (UQ) | Value three quarters of the way through | Extended |
| Interquartile range (IQR) | UQ − LQ: the spread of the middle half | Extended |
| Midpoint | Centre of a class: (lower end + upper end) ÷ 2 | Extended |
| Modal class | The class with the highest frequency | Extended |

## Formulae and positions

```
Mean (list)             = sum of values ÷ n
Mean (frequency table)  = Σ(f × x) ÷ Σf
Median position         = (n + 1) ÷ 2
LQ position (Extended)  = (n + 1) ÷ 4
UQ position (Extended)  = 3(n + 1) ÷ 4
Range                   = largest − smallest
IQR (Extended)          = UQ − LQ
Estimated mean (Ext.)   = Σ(f × midpoint) ÷ Σf
```

Σ means "the total of". Σf is the number of data items, not the number of rows.

## Lists: method

```
1. Put the values in order. Count them (n).
2. Median: find position (n + 1) ÷ 2. If it ends in .5, take
   the mean of the two values either side.
3. Mode: the value that appears most often (there may be two, or none).
4. Mean: add all values, divide by n.
5. Range: largest − smallest, as ONE number.
```

## Frequency tables: method

```
1. Add an f × x column. Total f and total f × x.
2. Mean = total f × x ÷ total f.
3. Median: running totals of f until you pass position (n + 1) ÷ 2.
4. Mode: the x with the biggest f. Give x, not f.
5. Range: largest x with non-zero f − smallest such x.
```

## Working backwards

- Total = mean × number of values.
- Missing value = total needed − total of the values you know.
- Combined mean = (total of group 1 + total of group 2) ÷ (n₁ + n₂). Never just average the two means.

## Purposes: which measure when?

| Measure | Use it when | Weakness |
|---|---|---|
| Mean | Data have no extreme values; every value should count | Pulled by extreme values |
| Median | There are extreme values (wages, prices, delays) | Ignores the size of most values |
| Mode | Data are qualitative, or the most common value matters | May not exist, or there may be several |
| Range | A quick idea of spread is enough | Uses only the two extremes |
| IQR (Extended) | Spread without the effect of extreme values | Ignores the top and bottom quarters |

## (Extended) Quartiles from a list

For n values in order, LQ is the (n + 1) ÷ 4 th value and UQ the 3(n + 1) ÷ 4 th. Lists with 7, 11, 15 or 19 values give whole-number positions.

**Small reminder.** 4, 6, 7, 8, 10, 11, 13, 14, 15, 18, 21 (n = 11). Positions 3, 6, 9: LQ = 7, median = 11, UQ = 15, IQR = 8.

## (Extended) Grouped data

```
1. Midpoint of each class.
2. f × midpoint for each class; total it.
3. Estimated mean = total f × midpoint ÷ total f.
4. Modal class = class with the highest frequency (write the interval).
```

It is an **estimate** because each value is assumed to be at its class midpoint.

## Exam traps

- Median taken from unordered data.
- Writing "the 5th value" instead of the value itself.
- Frequency-table mean divided by the number of rows.
- Mode given as the highest frequency (for example 14) instead of its value.
- Combined mean found by averaging two means of different-sized groups.
- Range written as "3 to 12" instead of 9.
- (Extended) Using class end points or class widths instead of midpoints.
- (Extended) Giving a modal class as a single number.
- Rounding a mean that is exact. 2.3 is exact, so write 2.3, not 2.30.

## Quick self-test

1. Find the mean, median, mode and range of 7, 3, 9, 3, 12, 5, 8.
2. Find the median of 2, 4, 6, 9, 10, 15.
3. The table shows the goals scored by a team in 30 matches. Find the mean, median and mode.

```
Goals (x)       0   1   2   3   4
Frequency (f)   3   9  12   4   2
```

4. The mean of five numbers is 12. Four of them are 10, 14, 9 and 15. Find the fifth.
5. 12 boys have a mean height of 150 cm and 18 girls have a mean height of 155 cm. Find the mean height of all 30.
6. Which average should a shop use to decide which shirt size to stock most of? Why?
7. A company's salaries include the owner's very large salary. Which average best describes a typical salary? Why?
8. Why is the range a poor measure of spread for 3, 4, 4, 5, 5, 6, 40?
9. (Extended) Find the quartiles and IQR of 4, 6, 7, 8, 10, 11, 13, 14, 15, 18, 21.
10. (Extended) Estimate the mean of: 0 < x ≤ 20, f = 4; 20 < x ≤ 40, f = 9; 40 < x ≤ 60, f = 5; 60 < x ≤ 80, f = 2.
11. (Extended) Write down the modal class in question 10.
12. (Extended) Why is the answer to question 10 only an estimate?

### Answers

1. In order: 3, 3, 5, 7, 8, 9, 12. Mean = 47 ÷ 7 = **6.71** (3 s.f.); median **7**; mode **3**; range 12 − 3 = **9**.
2. (6 + 9) ÷ 2 = **7.5**.
3. Σfx = 0 + 9 + 24 + 12 + 8 = 53; mean = 53 ÷ 30 = **1.77** (3 s.f.). Median: position 15.5; running totals 3, 12, 24, so the 15th and 16th values are both 2: **median 2**. **Mode 2.**
4. 5 × 12 = 60; 60 − 48 = **12**.
5. (12 × 150 + 18 × 155) ÷ 30 = (1800 + 2790) ÷ 30 = 4590 ÷ 30 = **153 cm**.
6. **The mode**: it shows the size bought most often.
7. **The median**: it is not pulled up by the one very large salary.
8. The single value 40 makes the range **37**, although six of the seven values lie between 3 and 6.
9. Positions 3, 6, 9: **LQ 7, median 11, UQ 15, IQR 8**.
10. Midpoints 10, 30, 50, 70; Σf × x = 40 + 270 + 250 + 140 = 700; 700 ÷ 20 = **35**.
11. **20 < x ≤ 40.**
12. The individual values are unknown, so each is **assumed to be at the class midpoint**.

## More on this topic

- Re-read the worked examples in the [averages and range study guide](/resources/cambridge-igcse-mathematics-0580-averages-and-range/).
- Try the [averages and range practice questions](/resources/cambridge-igcse-mathematics-0580-averages-and-range-practice/).
- Use the measures in comparisons: [interpreting statistical data revision notes](/resources/cambridge-igcse-mathematics-0580-interpreting-statistical-data-revision-notes/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (Version 3), Cambridge International. Topic 9 Statistics, C9.3 Averages and range and E9.3 Averages and measures of spread.
