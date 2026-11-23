---
title: "Cambridge IGCSE Mathematics (0580): Averages and range"
resourceType: "study-guides"
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
description: "Study guide to Cambridge IGCSE Maths 0580 section 9.3: mean, median, mode and range from lists and tables, plus Extended quartiles, IQR and grouped means."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide teaches section **9.3** of Topic 9 Statistics in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The section has a different title and content for each tier.

- **Core, C9.3 Averages and range:** "Calculate the mean, median, mode and range for individual data and distinguish between the purposes for which these are used." The note says data "may be in a list or frequency table, but will not be grouped".
- **Extended, E9.3 Averages and measures of spread:** the same, plus **quartiles** and the **interquartile range** for individual data, "an estimate of the mean for grouped discrete or grouped continuous data", and the **modal class** of a grouped frequency distribution.

Sections marked **(Extended)** are for Extended candidates only. The [Statistics study guide](/resources/igcse-mathematics-statistics/) gives an overview of the topic; this page works through each calculation in more depth, with new examples. Afterwards, use the [averages and range revision notes](/resources/cambridge-igcse-mathematics-0580-averages-and-range-revision-notes/) and the [averages and range practice questions](/resources/cambridge-igcse-mathematics-0580-averages-and-range-practice/).

## The four measures

| Measure | How to find it | What it tells you |
|---|---|---|
| Mean | Total of the values ÷ number of values | A typical value that uses every item of data |
| Median | Middle value once the data are in order | The value that splits the data in half |
| Mode | The value that occurs most often | The most common value; works for qualitative data too |
| Range | Largest value − smallest value | How spread out the data are |

The range is a measure of **spread**, not an average. Give it as a single number: "the range is 16", not "9 to 25".

## From a list

### Worked example 1

The numbers of text messages sent by nine friends one day were:

```
14  9  22  9  17  11  9  25  15
```

Find the mean, median, mode and range.

```
In order:  9  9  9  11  14  15  17  22  25

Mean   = (9 + 9 + 9 + 11 + 14 + 15 + 17 + 22 + 25) ÷ 9
       = 131 ÷ 9 = 14.6 (3 s.f.)
Median = the 5th value of 9 = 14
Mode   = 9 (it appears three times)
Range  = 25 − 9 = 16
```

The median is in position (n + 1) ÷ 2. With 9 values that is (9 + 1) ÷ 2 = 5, the 5th value. The position is not the median; the value in that position is.

A tenth friend sent 19 messages. Now there are 10 values, so the median is in position 5.5, halfway between the 5th and 6th values.

```
In order:  9  9  9  11  14  15  17  19  22  25
Median = (14 + 15) ÷ 2 = 14.5
```

A median does not have to be one of the data values.

## From a frequency table

A frequency table is a compact list: "value 3, frequency 6" means six 3s. The syllabus expects Core candidates to use frequency tables, so learn the method with a working column.

### Worked example 2

A survey counted the number of people in each of 40 cars passing a school.

```
People in car (x)   Frequency (f)   f × x
       1                 14           14
       2                 11           22
       3                  6           18
       4                  7           28
       5                  2           10
     Total               40           92
```

```
Mean   = total of f × x ÷ total of f = 92 ÷ 40 = 2.3 people
Median = position (40 + 1) ÷ 2 = 20.5, between the 20th and 21st values
         Running totals: 14 (up to x = 1), 25 (up to x = 2)
         The 20th and 21st values are both 2, so median = 2
Mode   = 1 (the highest frequency, 14)
Range  = 5 − 1 = 4
```

Three classic errors here:

- dividing 92 by 5 (the number of rows) instead of by 40 (the number of cars);
- giving the mode as 14, which is the frequency, not the value;
- finding the "middle row" (x = 3) instead of the middle car.

A mean of 2.3 people is fine even though no car holds 2.3 people. The mean describes the data as a whole.

## Working backwards from the mean

Because mean × number of values = total, you can recover missing information.

### Worked example 3

**(a)** The mean of six numbers is 8. Five of them are 5, 7, 9, 10 and 6. Find the sixth.

```
Total of all six = 6 × 8 = 48
Total of the five = 5 + 7 + 9 + 10 + 6 = 37
Sixth number = 48 − 37 = 11
```

**(b)** Class A has 20 students with a mean mark of 64. Class B has 30 students with a mean mark of 59. Find the mean mark for all 50 students.

```
Total for Class A = 20 × 64 = 1280
Total for Class B = 30 × 59 = 1770
Mean for all = (1280 + 1770) ÷ 50 = 3050 ÷ 50 = 61
```

Averaging the two means, (64 + 59) ÷ 2 = 61.5, is wrong, because the classes are different sizes. Always go back to totals.

## Choosing the right average

The syllabus asks you to "distinguish between the purposes" of each measure.

- **Mean**: uses every value, so it is the best summary when the data have no extreme values. One extreme value can drag it a long way.
- **Median**: not affected by extreme values, so it is better when one or two values are far from the rest (salaries, house prices, journey times with one long delay).
- **Mode**: the only average for qualitative data, and the useful one when the most common value matters, such as the shoe size a shop should stock most of.
- **Range**: quick to find, but it uses only the two extreme values, so one unusual value can make it very large.

A good written answer names the measure and gives the reason in the context: "The median, because the one salary of $250 000 makes the mean higher than almost every salary."

## (Extended) Quartiles and the interquartile range

The **lower quartile** (LQ) is a quarter of the way through the ordered data; the **upper quartile** (UQ) is three quarters of the way through. The **interquartile range** is UQ − LQ. It measures the spread of the middle half of the data, so extreme values do not affect it.

For n ordered values, the LQ is the (n + 1) ÷ 4 th value and the UQ is the 3(n + 1) ÷ 4 th value.

### Worked example 4 (Extended)

The reaction times, in milliseconds, of 15 students are, in order:

```
212  218  225  231  236  240  244  248  251  255  262  270  278  290  315
```

```
n + 1 = 16
LQ     = 16 ÷ 4 = 4th value   = 231
Median = 16 ÷ 2 = 8th value   = 248
UQ     = 3 × 16 ÷ 4 = 12th value = 270
IQR    = 270 − 231 = 39 ms
Range  = 315 − 212 = 103 ms
```

The range is more than twice the IQR, mainly because of the slowest time, 315 ms. The IQR describes the spread of the typical students better.

## (Extended) Estimating the mean of grouped data

When data are grouped, the individual values are lost, so the mean can only be **estimated**. Assume every value in a class is at the class **midpoint**.

### Worked example 5 (Extended)

The journey times of 40 commuters are shown.

```
Time t (min)    Frequency f   Midpoint x   f × x
0 < t ≤ 10           6             5          30
10 < t ≤ 20         15            15         225
20 < t ≤ 30         11            25         275
30 < t ≤ 40          5            35         175
40 < t ≤ 50          3            45         135
Total               40                       840
```

```
Estimated mean = 840 ÷ 40 = 21 minutes
Modal class    = 10 < t ≤ 20 (highest frequency, 15)
```

The answer is an estimate because the midpoints stand in for the real times. The modal class is a **class**, so write the interval, not the frequency 15 or the midpoint 15.

For grouped discrete data such as 1–5, 6–10, the midpoint of 1–5 is (1 + 5) ÷ 2 = 3.

## Common mistakes

- Finding the median without first putting the data in order.
- Giving the position of the median, such as "5th", instead of the value.
- In a frequency table, dividing by the number of rows instead of the total frequency.
- Giving a frequency as the mode instead of the data value.
- Averaging two means from groups of different sizes.
- Writing the range as "9 to 25" instead of 16.
- (Extended) Using class widths or class end points instead of midpoints for a grouped mean.
- (Extended) Calling the grouped mean exact.

## Exam technique

- **"Calculate"** or **"Find"**: show the total and the division for a mean, and the ordered list or running totals for a median.
- **"Write down the mode"**: one value, read straight from the data; no working needed.
- **"Give a reason"** for choosing an average: refer to an extreme value, qualitative data or the most common value, using the context.
- **"Calculate an estimate of the mean"** (Extended): add a midpoint column and an f × x column; a table earns method marks even if the final division slips.
- On the calculator papers give non-exact means to 3 significant figures. On the non-calculator papers the totals are chosen to divide neatly.

## Next steps

- Quick recall: [averages and range revision notes](/resources/cambridge-igcse-mathematics-0580-averages-and-range-revision-notes/).
- Marked questions: [averages and range practice questions](/resources/cambridge-igcse-mathematics-0580-averages-and-range-practice/).
- Using these measures to compare data sets: [interpreting statistical data study guide](/resources/cambridge-igcse-mathematics-0580-interpreting-statistical-data/).
- (Extended) Quartiles from a curve: [cumulative frequency diagrams study guide](/resources/igcse-mathematics-0580-cumulative-frequency-diagrams/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027* (Version 3), Subject content, Topic 9 Statistics, C9.3 Averages and range and E9.3 Averages and measures of spread.
