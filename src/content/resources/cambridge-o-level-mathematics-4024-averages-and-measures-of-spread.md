---
title: "Cambridge O Level Mathematics (4024): Averages and Measures of Spread"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Statistics"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 9.3
syllabusTopics:
  - qualification: "o-level"
    topic: "statistics"
    subtopic: "averages-and-measures-of-spread-4024"
description: "Study guide to 4024 section 9.3: mean, median, mode and range, choosing an average, frequency tables, estimated grouped means and the modal class."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 9.3, Averages and measures of spread, in the Statistics topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Every candidate studies it. The broader page [Statistics: Classifying Data, Averages, Spread and Statistical Charts](/resources/cambridge-o-level-mathematics-statistics-classifying-data-averages-spread-and/) shows the basic calculations; this guide goes further into choosing the right average, working backwards from a mean and combining groups. Afterwards, use the [averages and measures of spread revision notes](/resources/cambridge-o-level-mathematics-4024-averages-and-measures-of-spread-revision-notes/) and the [averages and measures of spread practice questions](/resources/cambridge-o-level-mathematics-4024-averages-and-measures-of-spread-practice/).

## What section 9.3 asks for

| Outcome | What you must be able to do |
|---|---|
| 9.3 (1) | Calculate the mean, median, mode and range for individual data, and distinguish between the purposes for which these are used |
| 9.3 (2) | Calculate an estimate of the mean for grouped discrete or grouped continuous data |
| 9.3 (3) | Identify the modal class from a grouped frequency distribution |

The interquartile range belongs to section 9.6, where it is read from a cumulative frequency diagram; in this section the measure of spread is the range.

## The four measures

| Measure | How to find it | Strengths | Weaknesses |
|---|---|---|---|
| Mean | total of values ÷ number of values | uses every value | pulled by extreme values |
| Median | middle value when the data is in order | not affected by extreme values | ignores most of the actual values |
| Mode | most common value | works for categorical data; shows the most typical item | may not exist, or there may be several |
| Range | largest − smallest | quick measure of spread | depends only on the two extreme values |

For n ordered values, the median is in position (n + 1) ÷ 2. If n is even, that position is halfway between two values, so take the mean of those two.

## Choosing an average

"Distinguish between the purposes" means you must be able to say which average suits a situation, and why.

- Use the **mode** for categorical data (most popular colour) or when the most common size matters (a shop restocking shoes).
- Use the **median** when there are extreme values that would distort the mean (house prices, incomes).
- Use the **mean** when the data has no extreme values and every value should count (marks on a test with similar scores).

### Worked example 1: the effect of an extreme value

The numbers of minutes seven trains were late are:

```
3 4 4 5 6 7 41
```

```
Mean   = (3 + 4 + 4 + 5 + 6 + 7 + 41) ÷ 7 = 70 ÷ 7 = 10
Median = 4th value = 5
Mode   = 4
Range  = 41 − 3 = 38
```

Six of the seven trains were 7 minutes late or less, yet the mean is 10. The single value 41 pulls the mean up. The median (5) describes a typical train better here. The range (38) is also inflated by the same value, which is a reason to treat a range with caution when one value is far from the rest.

## Averages from a frequency table

For discrete data in a frequency table, f is the frequency of each value x.

- **Mean** = Σfx ÷ Σf (add the products, divide by the total frequency).
- **Median**: use (n + 1) ÷ 2 to find the position, then count down the frequency column with a running total.
- **Mode**: the value with the highest frequency (not the frequency itself).

### Worked example 2

The numbers of siblings of 30 students are shown.

| Siblings x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Frequency f | 6 | 11 | 8 | 3 | 2 |
| fx | 0 | 11 | 16 | 9 | 8 |

```
Σf = 30, Σfx = 44
Mean = 44 ÷ 30 = 1.47 (to 3 s.f.)
```

**Median.** (30 + 1) ÷ 2 = 15.5, so the median is halfway between the 15th and 16th values. The running totals are 6 (for 0), then 17 (for 1). The 15th and 16th values are both 1, so the **median is 1**.

**Mode** = 1 (frequency 11). **Range** = 4 − 0 = 4.

A mean of 1.47 siblings is not a possible value, but it is still a correct mean. Do not round it to a whole number.

## Estimating the mean of grouped data

When data is grouped, the exact values are lost. Use the **midpoint** of each class to stand for every value in it.

```
estimated mean = Σ(f × midpoint) ÷ Σf
```

For continuous classes such as 10 ≤ t < 20, the midpoint is (10 + 20) ÷ 2 = 15. For discrete classes such as 1–5, it is (1 + 5) ÷ 2 = 3.

### Worked example 3

The times taken by 50 people to complete a form are shown. Estimate the mean and state the modal class.

| Time t (minutes) | Frequency f | Midpoint | f × midpoint |
|---|---|---|---|
| 0 ≤ t < 10 | 5 | 5 | 25 |
| 10 ≤ t < 20 | 12 | 15 | 180 |
| 20 ≤ t < 30 | 18 | 25 | 450 |
| 30 ≤ t < 40 | 10 | 35 | 350 |
| 40 ≤ t < 50 | 5 | 45 | 225 |
| Total | 50 | | 1230 |

```
estimated mean = 1230 ÷ 50 = 24.6 minutes
```

The **modal class** is **20 ≤ t < 30**, the class with the highest frequency (18). The classes here have equal widths, so the highest frequency identifies the modal class directly.

**Why "estimate"?** Using midpoints assumes the values in each class average out at the middle of the class. That may not be true, so the answer is approximate. Say "estimate" in your answer.

**Sense check.** The estimated mean must lie inside the range of the classes, and usually near the classes with the largest frequencies. 24.6 is in the modal class, which is reasonable.

## Working backwards and combining groups

Because mean = total ÷ number, you can always find the **total** as mean × number. This unlocks most problem-solving questions.

### Worked example 4

(a) The mean of six numbers is 8. Five of them are 5, 7, 9, 10 and 6. Find the sixth.

```
total = 6 × 8 = 48
known = 5 + 7 + 9 + 10 + 6 = 37
sixth = 48 − 37 = 11
```

(b) A class of 20 students has a mean mark of 62, and a class of 30 students has a mean mark of 70. Find the mean mark of all 50 students.

```
totals: 20 × 62 = 1240 and 30 × 70 = 2100
combined mean = (1240 + 2100) ÷ 50 = 3340 ÷ 50 = 66.8
```

The combined mean is **not** (62 + 70) ÷ 2 = 66, because the classes are different sizes; the larger class pulls the result towards 70.

## Common mistakes

- Finding the median without first putting the data in order.
- Taking the median position (n + 1) ÷ 2 as the median value.
- Giving the highest frequency as the mode instead of the value.
- Dividing Σfx by the number of rows instead of Σf.
- Using class boundaries rather than midpoints for a grouped mean.
- Averaging two means without weighting by group size.
- Rounding a mean to a whole number because the data is discrete.

## Exam technique for the command words

- **Calculate:** show Σfx and Σf, or the sum and the count, before dividing.
- **Calculate an estimate:** show the midpoints and the f × midpoint column.
- **Write down the modal class:** give the class as written in the table.
- **Explain which average is most suitable:** name the average and give a reason linked to the data, such as an extreme value.

## More on this topic

Try the [averages and measures of spread practice questions](/resources/cambridge-o-level-mathematics-4024-averages-and-measures-of-spread-practice/) and recap with the [averages and measures of spread revision notes](/resources/cambridge-o-level-mathematics-4024-averages-and-measures-of-spread-revision-notes/). To use these measures in comparisons, see [interpreting statistical data](/resources/cambridge-o-level-mathematics-4024-interpreting-statistical-data/); for quartiles and the interquartile range, see [cumulative frequency diagrams](/resources/cambridge-o-level-mathematics-4024-cumulative-frequency-diagrams/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 9.3 Averages and measures of spread.
