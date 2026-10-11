---
title: "Cambridge O Level Statistics: Averages: mean, median, mode and modal class (4040)"
seoTitle: "O Level Statistics 4040 Averages Study Guide"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Averages: mean, median, mode and modal class"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 20
syllabusTopics:
  - qualification: "o-level"
    topic: "statistical-measures-interpretation-and-use-4040"
    subtopic: "measures-of-central-tendency-4040"
description: "Study guide to finding the mean, median, mode and modal class from lists and frequency tables, and choosing the right average, for O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers section 5.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: measures of central tendency, which are the mean, median, mode and modal class. The syllabus asks for calculation or estimation from a set of numbers, an ungrouped frequency distribution or a grouped frequency distribution. It sits under topic 5, "Statistical measures, their interpretation and appropriate use", so you also need to say which average suits a given set of data and why.

Useful links: the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/), the [revision notes](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class-revision-notes/) and the [practice questions](/resources/cambridge-o-level-statistics-averages-mean-median-mode-and-modal-class-practice/). Frequency tables, class limits and boundaries are covered in [formation of frequency distributions](/resources/cambridge-o-level-statistics-frequency-distributions/). If you are unsure where you stand, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Syllabus point | What you must be able to do |
|---|---|
| 5.1 from a set of numbers | Find the mean, median and mode of a list |
| 5.1 ungrouped frequency distribution | Find all three from a table of values and frequencies |
| 5.1 grouped frequency distribution | Estimate the mean, find the modal class, and estimate the median |
| 5.1 appropriate use | Choose the average that suits the data and justify it |

## The three averages

An average is a single value that represents the centre of a data set.

| Average | Definition | Uses every value? | Affected by extreme values? |
|---|---|---|---|
| Mean | Total of all the values divided by how many there are | Yes | Yes, strongly |
| Median | The middle value once the data is ordered | No | No |
| Mode | Most frequent value | No | No |

For a list of n values, the median is the value in position (n + 1)/2 once the list is in order. With an even n, there are two middle values and the median is halfway between them. There can be one mode, several modes, or none if every value occurs once.

### Worked example 1: a list of numbers

Nine commuters' journey times, in minutes: 24, 31, 18, 27, 31, 45, 22, 31, 29.

```
Mean: 24+31+18+27+31+45+22+31+29 = 258
      258 ÷ 9 = 28.67 (to 2 d.p.)

Median: order the data
      18 22 24 27 29 31 31 31 45
      n = 9, position (9+1)/2 = 5th value → 29

Mode: 31 occurs three times, more than any other value → 31
```

Here the three averages are close (28.67, 29 and 31), but they answer different questions, and the mode is the highest of the three because 31 repeats.

For an even number of values, take the two middle values. For the ordered data 9, 9, 9, 12, 14, 15, 17, 20, 22, 31 (ten values), the 5th and 6th values are 14 and 15, so the median is 14.5.

## Ungrouped frequency distributions

Here each distinct value x has a frequency f. Always add a column for f × x.

The mean is (sum of f × x) ÷ (sum of f), written Σfx / Σf.

### Worked example 2

Books borrowed in a week by 40 library members:

| Books (x) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency (f) | 5 | 9 | 12 | 8 | 4 | 2 |
| f × x | 0 | 9 | 24 | 24 | 16 | 10 |

```
Σf = 40,  Σfx = 0+9+24+24+16+10 = 83
Mean = 83 ÷ 40 = 2.075 books (2.08 to 3 s.f.)

Median: n = 40, so the median lies between the 20th and 21st values.
Cumulative frequencies: 5, 14, 26, 34, 38, 40
Both the 20th and 21st values fall in the group "2 books" (positions 15 to 26).
Median = 2

Mode: the highest frequency is 12, which belongs to x = 2.
Mode = 2 books (not 12)
```

The mode is the value that occurs most, not the frequency itself. A common slip is to quote 12.

## Grouped frequency distributions

When values are in classes you no longer know the exact data, so every answer is an estimate. This unit asks for three things.

1. **Modal class**: the class with the highest frequency, if all classes have equal width.
2. **Estimated mean**: assume every value in a class sits at the class midpoint, then use Σfx / Σf with x as the midpoint.
3. **Estimated median**: find the class containing the middle position, then interpolate linearly inside it.

### Worked example 3: equal class widths

Waiting times (minutes) for 52 patients:

| Time t (minutes) | 0 ≤ t < 5 | 5 ≤ t < 10 | 10 ≤ t < 15 | 15 ≤ t < 20 | 20 ≤ t < 25 | 25 ≤ t < 30 |
|---|---|---|---|---|---|---|
| Frequency | 4 | 11 | 17 | 12 | 6 | 2 |
| Midpoint x | 2.5 | 7.5 | 12.5 | 17.5 | 22.5 | 27.5 |
| f × x | 10 | 82.5 | 212.5 | 210 | 135 | 55 |

```
Modal class: highest frequency is 17 → 10 ≤ t < 15

Estimated mean: Σfx = 705, Σf = 52
      705 ÷ 52 = 13.56 minutes (13.6 to 3 s.f.)

Estimated median: n/2 = 26, so we need the 26th value.
      Cumulative frequencies: 4, 15, 32, 44, 50, 52
      Only 15 values lie below 10, and 32 lie below 15,
      so the 26th value is in the class 10 ≤ t < 15.
      Another 26 − 15 = 11 values are needed inside that class,
      which holds 17 values over a width of 5.
      Median ≈ 10 + (11/17) × 5 = 13.24 minutes (13.2 to 3 s.f.)
```

The estimated mean (13.6) and estimated median (13.2) differ because the data is skewed to the right: a few long waits pull the mean above the median.

### Worked example 4: discrete data in classes

Ages of 50 members of a club are recorded in classes 10-19, 20-29, 30-39, 40-49 and 50-59 with frequencies 7, 13, 18, 9 and 3. Class limits are whole numbers, and the midpoint of 10-19 is 14.5 (halfway between 10 and 19, or between the boundaries 9.5 and 19.5). The midpoints are 14.5, 24.5, 34.5, 44.5 and 54.5.

```
Σfx = 7×14.5 + 13×24.5 + 18×34.5 + 9×44.5 + 3×54.5
    = 101.5 + 318.5 + 621 + 400.5 + 163.5 = 1605
Estimated mean = 1605 ÷ 50 = 32.1 years
Modal class: 30-39 (frequency 18)
```

For the median here, n/2 = 25 and 20 members are in the first two classes, so the median is in 30-39. Using the lower boundary 29.5, the estimate is 29.5 + (5/18) × 10 = 32.28, so about 32.3 years. Use the class boundary, not the stated limit, as the start of the class.

### Worked example 5: unequal class widths

Masses of fruit crates (kg) at a market stall, 56 crates:

| Mass m (kg) | 0 < m ≤ 2 | 2 < m ≤ 4 | 4 < m ≤ 8 | 8 < m ≤ 12 | 12 < m ≤ 20 |
|---|---|---|---|---|---|
| Frequency | 6 | 14 | 20 | 10 | 6 |
| Class width | 2 | 2 | 4 | 4 | 8 |
| Frequency density | 3 | 7 | 5 | 2.5 | 0.75 |
| Midpoint | 1 | 3 | 6 | 10 | 16 |
| f × midpoint | 6 | 42 | 120 | 100 | 96 |

```
Estimated mean = 364 ÷ 56 = 6.5 kg
Median position: 56 ÷ 2 = 28th; cumulative 6, 20, 40 → class 4 < m ≤ 8
```

The class with the highest frequency (20) is 4 < m ≤ 8, but that class is twice as wide as the one before it. When widths are unequal, compare frequency density (frequency ÷ class width). The highest density is 7, in 2 < m ≤ 4, so this is the sensible modal class. The syllabus names the modal class for grouped data, and a statement of the density you compared makes your choice clear to a reader.

## Choosing the appropriate average

Ask what the data is and what the reader needs.

| Situation | Best choice | Reason |
|---|---|---|
| Categories (favourite colour, most common shoe size) | Mode | Mean and median make no sense for categories |
| Data with extreme values or skew (earnings, house prices) | Median | Not pulled by extreme values |
| Roughly symmetrical numerical data; totals matter | Mean | Uses every value; mean × n recovers the total |
| Grouped data, quick description | Modal class | Needs no midpoints |

### Worked example 6: an outlier

Seven weekly wages (hundreds of rupees): 18, 19, 19, 20, 21, 22, 95.

```
Mean = 214 ÷ 7 = 30.57   Median = 20   Mode = 19
```

The mean (30.57) is larger than six of the seven wages, so it overstates what a typical worker earns. The median (20) describes the typical wage better. A fair answer states the figure and the reason: "the median, because the value 95 is extreme and inflates the mean."

An employer arguing for low pay might quote the mode or median, and a union arguing for high pay might quote the mean. Naming the average used is part of reading data honestly.

## Common errors

- Finding the median without ordering the data first.
- Using the number of classes as the divisor, when it should be Σf.
- Quoting the highest frequency as the mode.
- Using the class limit instead of the midpoint when estimating the mean.
- Calling an estimated mean exact. Write "estimated" or "approximately".
- Picking the modal class from the largest frequency when the classes are not equally wide.
- Stating "the median is best" without giving the reason linked to the data.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International). Section 5.1: measures of central tendency, mean, median, mode and modal class.
