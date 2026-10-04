---
title: "Cambridge IGCSE Mathematics 0580: Cumulative frequency diagrams -- Study Guide"
seoTitle: "IGCSE Maths 0580 Cumulative Frequency Diagrams Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Cumulative frequency diagrams"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "cumulative-frequency-diagrams-cambridge-igcse-maths"
description: "Study guide to cumulative frequency tables and curves for Cambridge IGCSE Maths 0580 (Extended): median, quartiles, IQR and percentiles, worked through."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches subtopic E9.6, Cumulative frequency diagrams, from Topic 9 Statistics of the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. The syllabus lists C9.6 as "Extended content only", so everything on this page is **Extended only**: it is assessed on Paper 2 (non-calculator) and Paper 4 (calculator), and a Core candidate does not need it. You will learn to build a cumulative frequency table, draw the curve, and read and interpret the median, quartiles, interquartile range and percentiles.

For the whole of Topic 9, use the [Statistics study guide](/resources/igcse-mathematics-statistics/) and the [Statistics revision notes](/resources/igcse-mathematics-statistics-revision-notes/). The [0580 course hub](/boards/cambridge/igcse/mathematics/) and the [printable checklist](/checklists/cambridge/igcse/mathematics/) show where this subtopic sits in the course. To find your gaps first, try the [Extended diagnostic](/practice/0580/diagnostic/extended/).

## What this subtopic covers

| Syllabus ref | What you must be able to do | Tier |
|---|---|---|
| E9.6.1 | Draw and interpret cumulative frequency tables and diagrams. Plotted points should be clearly marked (for example as small crosses, ×) and joined with a smooth curve. | Extended only |
| E9.6.2 | Estimate and interpret the median, percentiles, quartiles and interquartile range from cumulative frequency diagrams. | Extended only |

Quartiles of a list of individual values belong to E9.3 and are covered in the topic-level guide. This page deals with grouped data on a cumulative frequency diagram.

## What cumulative frequency means

The **cumulative frequency** up to a value is a running total: the number of data items less than or equal to that value. For grouped continuous data, each running total belongs to the **upper boundary** of a class, because that is the point by which every item in the class has been counted.

A table answers "how many took 30 minutes or less?" at the class boundaries; a diagram lets you estimate the answer for any value.

## Building a cumulative frequency table (E9.6.1)

### Worked example 1

A school timed 120 students solving a logic puzzle. The times, t minutes, are grouped below.

| Time (t minutes) | 0 < t ≤ 10 | 10 < t ≤ 20 | 20 < t ≤ 30 | 30 < t ≤ 40 | 40 < t ≤ 50 | 50 < t ≤ 60 |
|---|---|---|---|---|---|---|
| Frequency | 6 | 18 | 36 | 32 | 20 | 8 |

Add each frequency to the running total so far.

```
t ≤ 10:   6
t ≤ 20:   6 + 18 = 24
t ≤ 30:  24 + 36 = 60
t ≤ 40:  60 + 32 = 92
t ≤ 50:  92 + 20 = 112
t ≤ 60: 112 + 8  = 120
```

| Time | t ≤ 10 | t ≤ 20 | t ≤ 30 | t ≤ 40 | t ≤ 50 | t ≤ 60 |
|---|---|---|---|---|---|---|
| Cumulative frequency | 6 | 24 | 60 | 92 | 112 | 120 |

**Check:** the last cumulative frequency must equal the total frequency, 120. If it does not, you have made an adding error.

### Interpreting the table directly

You can answer some questions from the table alone, with no graph.

- Students who took more than 40 minutes: 120 − 92 = **28**.
- Students who took more than 20 minutes but no more than 40 minutes: 92 − 24 = **68**.
- The class containing the median: the median is about the 60th value, and the running total reaches 60 at t = 30, so the median is at the top of the 20 < t ≤ 30 class.

## Drawing the cumulative frequency diagram (E9.6.1)

1. Put the variable (here, time) on the horizontal axis and **cumulative frequency** on the vertical axis. Label both axes.
2. Choose scales that use most of the grid and go up in equal steps.
3. Plot each cumulative frequency at the **upper class boundary**. Mark each point clearly with a small cross, as the syllabus notes ask.
4. Plot a starting point at the **lower boundary of the first class** with cumulative frequency 0, because no student finished in 0 minutes or less.
5. Join the points with a **smooth curve** through every cross. Do not join them with ruled straight lines, and do not draw a curve that misses the points.

For worked example 1, the points to plot are:

```
(0, 0)  (10, 6)  (20, 24)  (30, 60)  (40, 92)  (50, 112)  (60, 120)
```

The curve is S-shaped: slow at first, steep in the middle, flat near the top. It never goes down, because a running total cannot fall. The steepest part shows where the data is most concentrated: here, between 20 and 40 minutes.

## Reading the median, quartiles and IQR (E9.6.2)

With n items in total, read across from these heights on the cumulative frequency axis:

| Measure | Read across at cumulative frequency |
|---|---|
| Lower quartile (LQ) | n/4 |
| Median | n/2 |
| Upper quartile (UQ) | 3n/4 |
| Interquartile range (IQR) | UQ − LQ (a subtraction, not a reading) |

The method is the same each time: start on the **vertical** axis at the right height, go across to the curve, then straight down to the horizontal axis and read the value. Draw these lines on the graph in the exam; they are your evidence of method.

### Worked example 2

Use the curve from worked example 1, where n = 120.

```
Median:  n/2  = 120 ÷ 2       = 60  → across at 60, down to t = 30
LQ:      n/4  = 120 ÷ 4       = 30  → across at 30, down to t ≈ 22
UQ:     3n/4  = 3 × 120 ÷ 4   = 90  → across at 90, down to t ≈ 39
IQR = UQ − LQ ≈ 39 − 22 = 17 minutes
```

So the median time is **30 minutes** and the interquartile range is about **17 minutes**. Your readings may differ slightly, because hand-drawn curves differ; what matters is reading at the correct heights and reading the scale accurately.

A quick way to check that a reading is sensible: the lower quartile height, 30, is between the plotted points (20, 24) and (30, 60), so the lower quartile must be between 20 and 30, and nearer 20, because 30 is much closer to 24 than to 60. A reading outside that class means you have misread the scale.

The median is an estimate: with grouped data, the individual times are not known.

## Percentiles (E9.6.2)

The **p-th percentile** is the value below which p% of the data lies. Read across at:

```
cumulative frequency = (p ÷ 100) × n
```

The quartiles are special percentiles: the lower quartile is the 25th percentile, the median is the 50th, and the upper quartile is the 75th.

### Worked example 3

The school gives a certificate to the fastest 10% of students, and extra coaching to the slowest 10%. Using the curve with n = 120, estimate the time limits for each.

```
10th percentile: (10 ÷ 100) × 120 = 12  → across at 12, down to t ≈ 14
90th percentile: (90 ÷ 100) × 120 = 108 → across at 108, down to t ≈ 47
```

A student who finished in about **14 minutes or less** gets a certificate. A student who took more than about **47 minutes** is offered coaching.

"The slowest 10%" is the **top** 10% of times, so you need the 90th percentile, not the 10th.

## Reading the other way: from a value to a number of items

Some questions give a value on the horizontal axis and ask how many items are below or above it. Now you start on the **horizontal** axis, go up to the curve, then across to the cumulative frequency axis.

### Worked example 4

Use the puzzle curve again.

**(a)** Estimate how many students took 35 minutes or less.

Up from t = 35 to the curve, then across: cumulative frequency ≈ **77** students.

**(b)** Estimate the percentage of students who took more than 45 minutes.

```
Up from t = 45, across: cumulative frequency ≈ 103
More than 45 minutes ≈ 120 − 103 = 17 students
Percentage ≈ 17 ÷ 120 × 100 ≈ 14%
```

The curve gives the number **at or below** a value. For "more than", always subtract the reading from the total. Forgetting this step gives 103, which is the number who took 45 minutes or less.

## Interpreting and comparing (E9.6.2)

The syllabus asks you to **interpret** these measures, not only read them.

- The **median** is a typical value: half the data is below it and half above.
- The **interquartile range** is the spread of the middle half of the data. A small IQR means the data is consistent. Because it ignores the lowest and highest quarters, extreme values do not affect it.
- A **percentile** tells you what proportion of the data lies below a given value, so you can set a cut-off for "the top 20%" or say where one result stands.

### Worked example 5

The same puzzle was given to 120 teachers. From their cumulative frequency curve, the median was 26 minutes and the interquartile range was 11 minutes. Compare the two groups.

A full comparison makes **two** points, one about average and one about spread, each written in context:

- The teachers' median (26 minutes) is lower than the students' (30 minutes), so **on average the teachers solved the puzzle faster**.
- The teachers' IQR (11 minutes) is smaller than the students' (about 17 minutes), so **the teachers' times were more consistent**.

A comparison that only says "26 is less than 30" is incomplete. Say what the lower median means in context.

## Working back from a cumulative frequency table

You may be given cumulative frequencies and asked about frequencies or proportions. Subtract neighbouring running totals to get each class frequency.

### Worked example 6

The heights, h cm, of 80 seedlings are summarised below.

| Height | h ≤ 4 | h ≤ 8 | h ≤ 12 | h ≤ 16 | h ≤ 20 |
|---|---|---|---|---|---|
| Cumulative frequency | 5 | 17 | 41 | 66 | 80 |

**(a)** Find the frequency of each class.

```
0 < h ≤ 4:   5
4 < h ≤ 8:   17 − 5  = 12
8 < h ≤ 12:  41 − 17 = 24
12 < h ≤ 16: 66 − 41 = 25
16 < h ≤ 20: 80 − 66 = 14
```

**(b)** How many seedlings are taller than 8 cm but no taller than 16 cm?

66 − 17 = **49** seedlings.

**(c)** What percentage of seedlings are taller than 16 cm?

80 − 66 = 14, and 14 ÷ 80 × 100 = **17.5%**.

**(d)** The median is read at 80 ÷ 2 = 40. The running total reaches 40 just before h = 12, so the median lies in the 8 < h ≤ 12 class, close to 12 cm. A smooth curve through the points gives a median of about 12 cm.

All of this arithmetic works without a calculator. Make sure you can also find a percentage such as 15% of 80 by hand (10% is 8 and 5% is 4, so 15% is 12).

## Calculator and non-calculator papers

The syllabus places cumulative frequency in the Extended content, which is assessed on both Paper 2 and Paper 4. Reading a curve needs no calculator. On Paper 2 you must do the running totals, quartile heights, percentages and subtractions by hand. On Paper 4, the syllabus asks for non-exact answers to 3 significant figures unless the question says otherwise, but a value read from a graph is only as accurate as the reading itself.

## Common errors

- **Plotting at the midpoint** instead of the upper class boundary. The running total belongs to the end of the class.
- **Leaving out the starting point** at cumulative frequency 0, so the curve starts in mid-air.
- **Joining points with straight lines** or drawing a curve that does not pass through the plotted points.
- **Reading the median at n/2 on the wrong axis**, starting from the horizontal axis instead of the cumulative frequency axis.
- **Using (n + 1)/2** for the median. That rule is for a list of individual values. On a cumulative frequency diagram, use n/2.
- **Giving the upper quartile instead of the IQR**, or forgetting to subtract. Show both readings before subtracting.
- **Forgetting to subtract from the total** when the question says "more than" a value.
- **Reading the scale wrongly** when one small square is not worth 1. Work out what a small square represents before you read.
- **Comparing without context.** "The median is lower" is not enough; say what that means for the data.

## Where to go next

Practise these skills with the cumulative frequency questions in the [Statistics practice questions](/resources/igcse-mathematics-statistics-practice/) and the [Statistics and Probability (Extended) practice questions](/resources/igcse-mathematics-statistics-and-probability-extended-practice/). Those sets use different data from the examples above. For histograms and frequency density, the other Extended-only statistics subtopic, see the [Statistics study guide](/resources/igcse-mathematics-statistics/). Other resources for syllabus 0580 are on the [course hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027*, Subject content, Topic 9 Statistics, subtopic E9.6 Cumulative frequency diagrams (C9.6: Extended content only).
