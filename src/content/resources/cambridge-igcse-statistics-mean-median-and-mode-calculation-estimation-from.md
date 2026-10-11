---
title: "Cambridge IGCSE Statistics: Mean, median and mode: estimation and choosing an average (0479)"
seoTitle: "IGCSE Statistics 0479 Mean, Median, Mode Study Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["igcse"]
topic: "Mean, median and mode: calculation, estimation from grouped data and choosing the right average"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 28
syllabusTopics:
  - qualification: "igcse"
    topic: "measures-of-central-tendency-0479"
description: "Study guide to mean, median, mode and modal class from lists, frequency tables and grouped data, and choosing an average, for IGCSE Statistics 0479."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers Topic 4, Measures of central tendency, of the Cambridge IGCSE Statistics (0479) syllabus for examination in 2027. It follows outcomes 4.1 to 4.4: calculating the mean and finding the median and mode, estimating them from grouped data, identifying the modal class, and justifying the choice of average in context. It is written for all candidates on the course, and the syllabus gives no tier split for this topic.

Useful links: the [Cambridge IGCSE Statistics hub](/boards/cambridge/igcse/statistics/), the [printable checklist](/checklists/cambridge/igcse/statistics/), the [revision notes](/resources/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from-revision-notes/) and the [practice questions](/resources/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from-practice/). Class boundaries, midpoints and cumulative frequency are covered in [frequency distributions](/resources/igcse-cambridge-statistics-frequency-distributions/). To find out where you stand first, take the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Outcome | What you must be able to do |
|---|---|
| 4.1 | Calculate the mean, and find the median and mode, of a small data set and of an ungrouped frequency distribution, including problems where the mean is given |
| 4.2 | Estimate the mean and the median of a grouped frequency distribution; the median may come from a cumulative frequency polygon or curve, or from linear interpolation |
| 4.3 | Identify the modal class of a grouped frequency distribution |
| 4.4 | State advantages and disadvantages of each measure and justify one in context |

## The three averages

| Average | How to find it | Uses every value? | Pulled by extreme values? |
|---|---|---|---|
| Mean | Sum of the values ÷ number of values | Yes | Yes, strongly |
| Median | Middle value of the ordered data | No | No |
| Mode | Most frequent value | No | No |

For n ordered values the median is in position (n + 1)/2. When n is even the two middle values are averaged. Data can have one mode, several modes, or none if every value is different.

### Worked example 1: a small data set

Texts sent in a day by eight people: 12, 7, 15, 7, 20, 9, 7, 14.

```
Sum = 12+7+15+7+20+9+7+14 = 91
Mean = 91 ÷ 8 = 11.375

Ordered: 7 7 7 9 12 14 15 20
Median: n = 8, so average the 4th and 5th values
        (9 + 12) ÷ 2 = 10.5

Mode: 7 appears three times → 7
```

Note that the median, 10.5, is not one of the data values. That is allowed.

### Worked example 2: problems where the mean is given

A given mean fixes the total: total = mean × number of values.

(a) The mean of six numbers is 8.5. Five of them are 4, 9, 12, 7 and 10. Find the sixth.

```
Total of six = 8.5 × 6 = 51
Total of five = 4+9+12+7+10 = 42
Sixth number = 51 − 42 = 9
```

(b) The mean of 12 readings is 15.5. A 13th reading is added and the mean becomes 16. Find it.

```
New total = 16 × 13 = 208
Old total = 15.5 × 12 = 186
13th reading = 208 − 186 = 22
```

## Ungrouped frequency distributions

When a table lists each value x with its frequency f, add a row for f × x.

Mean = Σfx ÷ Σf. For the median, build a cumulative frequency row and find which value covers the middle position. The mode is the value with the highest frequency, not the frequency itself.

### Worked example 3

A batch of 50 bulbs is tested and the number of faulty parts in each is recorded.

| Faults (x) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency (f) | 6 | 11 | 14 | 9 | 6 | 4 |
| f × x | 0 | 11 | 28 | 27 | 24 | 20 |
| Cumulative frequency | 6 | 17 | 31 | 40 | 46 | 50 |

```
Σf = 50, Σfx = 110
Mean = 110 ÷ 50 = 2.2 faults

Median: n = 50, so use the 25th and 26th values.
        Cumulative frequency passes 25 within x = 2 (positions 18 to 31).
        Median = 2

Mode: highest frequency is 14, at x = 2 → mode = 2
```

## Grouped frequency distributions

Once data is grouped you no longer know the individual values, so the mean and median are estimates. The modal class needs no estimate.

### Estimating the mean

Take each class midpoint as the typical value in that class, then use Σfx ÷ Σf with x as the midpoint. For continuous classes such as 40 ≤ t < 50 the midpoint is (40 + 50) ÷ 2. For discrete classes such as 11–15 the midpoint is (11 + 15) ÷ 2 = 13.

### Estimating the median

The median is the value at position n/2 in the cumulative frequency distribution. There are two routes, and both give the same answer when the curve is drawn as a polygon with straight lines.

1. **Graph.** Plot cumulative frequency against the upper class boundary, join the points, go across from n/2 on the vertical axis, then down to read the value.
2. **Linear interpolation.** Find the class containing position n/2, then assume the values are spread evenly inside it:

```
median ≈ lower boundary + (n/2 − cumulative frequency before the class) ÷ (class frequency) × class width
```

### Worked example 4: equal class widths

Times, t seconds, taken by 60 people to finish a puzzle.

| Time t (s) | 20 ≤ t < 30 | 30 ≤ t < 40 | 40 ≤ t < 50 | 50 ≤ t < 60 | 60 ≤ t < 70 | 70 ≤ t < 80 |
|---|---|---|---|---|---|---|
| Frequency | 5 | 12 | 21 | 14 | 6 | 2 |
| Midpoint x | 25 | 35 | 45 | 55 | 65 | 75 |
| f × x | 125 | 420 | 945 | 770 | 390 | 150 |
| Cumulative frequency (upper boundary) | 5 (30) | 17 (40) | 38 (50) | 52 (60) | 58 (70) | 60 (80) |

```
Modal class: highest frequency is 21 → 40 ≤ t < 50

Mean ≈ Σfx ÷ Σf = 2800 ÷ 60 = 46.7 seconds (3 s.f.)

Median: n/2 = 30.
        Cumulative frequency before the 40–50 class is 17.
        Median ≈ 40 + (30 − 17) ÷ 21 × 10
               = 40 + 6.19...
               ≈ 46.2 seconds
```

On a cumulative frequency graph you would read across from 30 and down, giving a value near 46. A curve drawn by hand will differ slightly from the interpolated value, which is expected.

### Modal class with unequal class widths

When class widths differ, frequency alone is misleading because a wide class collects more data simply by being wide. Compare frequency density = frequency ÷ class width instead.

### Worked example 5

Journey times of 80 commuters.

| Time t (min) | 0 ≤ t < 10 | 10 ≤ t < 15 | 15 ≤ t < 20 | 20 ≤ t < 30 | 30 ≤ t < 50 |
|---|---|---|---|---|---|
| Frequency | 20 | 18 | 12 | 16 | 14 |
| Class width | 10 | 5 | 5 | 10 | 20 |
| Frequency density | 2 | 3.6 | 2.4 | 1.6 | 0.7 |
| Midpoint | 5 | 12.5 | 17.5 | 25 | 40 |

```
Highest frequency: 20, in 0 ≤ t < 10
Highest frequency density: 3.6, in 10 ≤ t < 15

The modal class is 10 ≤ t < 15, because that is where journeys are most
concentrated per minute of journey time.

Mean ≈ (20×5 + 18×12.5 + 12×17.5 + 16×25 + 14×40) ÷ 80
     = 1495 ÷ 80 ≈ 18.7 minutes

Median: n/2 = 40; cumulative frequencies are 20, 38, 50, 66, 80.
        Class 15 ≤ t < 20 contains position 40.
        Median ≈ 15 + (40 − 38) ÷ 12 × 5 ≈ 15.8 minutes
```

Here the mean (18.7) is above the median (15.8) because a few long journeys pull the mean upwards.

## Choosing the right average (outcome 4.4)

| Average | Advantages | Disadvantages |
|---|---|---|
| Mean | Uses every value; suits further calculation; good for roughly symmetrical data | Distorted by extreme values; may not be a value that can occur (2.2 faults); only an estimate for grouped data |
| Median | Not affected by extreme values; easy to find from an ordered list or cumulative frequency graph; suits skewed data | Ignores the size of most values; harder to combine for several groups; fiddly for large lists |
| Mode | The only average for non-numerical categories; easy to see; always a value that occurs | May not exist or may not be unique; ignores most of the data; can be unrepresentative |

### Worked example 6: justifying a choice

Annual pay, in thousands of dollars, for the nine people in a small firm: 21, 23, 24, 24, 26, 27, 29, 31, 240 (the last is the owner).

```
Mean = 445 ÷ 9 = 49.4
Median = 26 (5th value)
Mode = 24
```

Eight of the nine people earn between 21 and 31, so a mean of 49.4 describes nobody. Without the owner the mean of the other eight is 25.6, so one value moved it by about 24 thousand. The median, 26, is unaffected by how large the 240 is. For a statement about typical pay, use the median. An employer defending low pay might still quote the mode, and a union might quote the mean if it wanted to argue the firm can afford more, so say whose purpose the average serves.

Match the average to the purpose:

- A canteen choosing which dish to prepare most of wants the mode, since it picks the most common choice.
- A teacher giving a class an overall level from consistent marks can use the mean.
- Reporting house prices or incomes, where a few very large values exist, calls for the median.
- Grouped data with an open-ended class (such as "60 and over") has no midpoint for that class, so the mean cannot be estimated sensibly. The median and modal class can still be found if they do not fall in that class.

Always refer to the data in the question. "The median is better because it is not affected by outliers" earns less than "the median is better because the 240 would inflate the mean".

## Common errors

- Quoting the frequency as the mode. In the bulb table the mode is 2, not 14.
- Finding the median of a frequency table by taking the middle of the values row (2.5), instead of using cumulative frequency.
- Dividing Σfx by the number of classes instead of by Σf.
- Using class limits instead of midpoints, or forgetting the boundaries when interpolating for continuous data.
- Using n + 1 over 2 for the position of a grouped median, when the graph and interpolation methods use n/2.
- Picking the modal class by highest frequency when the class widths are unequal.
- Stating that the mean "is the middle". Say what it is: the total shared equally.
- Describing an estimate as exact. Say "estimate" or "approximately" for any grouped answer.

## Next steps

Test yourself with the [practice questions](/resources/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from-practice/), recap with the [revision notes](/resources/cambridge-igcse-statistics-mean-median-and-mode-calculation-estimation-from-revision-notes/), and tick off outcomes on the [checklist](/checklists/cambridge/igcse/statistics/).

## Official syllabus

This guide follows Topic 4, Measures of central tendency (outcomes 4.1 to 4.4), of the Cambridge IGCSE Statistics 0479 syllabus for examination in 2027, published by Cambridge University Press & Assessment (Cambridge International Education).
