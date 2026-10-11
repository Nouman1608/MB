---
title: "Cambridge O Level Statistics: Cumulative frequency tables, curves and polygons (4040) -- Revision Notes"
seoTitle: "O Level Statistics Cumulative Frequency Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Cumulative frequency tables, curves and polygons"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 19
syllabusTopics:
  - qualification: "o-level"
    topic: "formation-of-cumulative-frequency-distributions-4040"
    subtopic: "cumulative-frequency-tabular-form-4040"
  - qualification: "o-level"
    topic: "formation-of-cumulative-frequency-distributions-4040"
    subtopic: "cumulative-frequency-graphical-form-4040"
description: "Condensed revision notes with a method, a worked reminder, a self-test and common slips for cumulative frequency in Cambridge O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense topic 4 of the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027: section 4.1 (cumulative frequency in tabular form) and section 4.2 (cumulative frequency curves and polygons for continuous data). For full explanations and more worked examples, read the [study guide](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/) first. Then test yourself with the [practice questions](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons-practice/), and check your gaps with the [free 10-minute diagnostics](/diagnostics/).

The wider course is on the [4040 hub](/boards/cambridge/o-level/statistics/), with a [printable checklist](/checklists/cambridge/o-level/statistics/). If grouping and class boundaries feel shaky, revise the [frequency distributions guide](/resources/cambridge-o-level-statistics-frequency-distributions/) first.

## Key definitions

| Term | Meaning |
|---|---|
| Cumulative frequency | The running total of frequencies: how many observations are less than or equal to a given value |
| Upper class boundary | The true top of a class. It is where its cumulative frequency is plotted |
| Cumulative frequency polygon | Plotted points joined by straight lines |
| Cumulative frequency curve | Plotted points joined by one smooth curve |
| Class boundary | The halfway point across a gap between classes of rounded data (for example 24.5 between 24 and 25) |

## Section 4.1: the table

**Method in steps**

1. Write the frequencies in order, smallest value or class first.
2. Add each frequency to the running total.
3. For grouped data, label each total with the upper class boundary.
4. Check that the last total equals the total frequency.
5. To go backwards, subtract each cumulative frequency from the next. The first class keeps its value.

**Boundaries of rounded data.** Measured to the nearest 1: the class 30–39 has boundaries 29.5 and 39.5. Measured to 1 decimal place: the class 5.0–5.9 has boundaries 4.95 and 5.95.

## Section 4.2: the graph

**Method in steps**

1. Variable on the horizontal axis, cumulative frequency on the vertical axis. Label both and use an even scale.
2. Plot each total at its **upper** class boundary.
3. Plot the start: the first lower boundary with cumulative frequency 0.
4. Mark points with small crosses.
5. Join with straight lines (polygon) or a smooth curve (curve).

**Reading the graph**

| You are given | Start | Go | Read |
|---|---|---|---|
| A value of the variable | Horizontal axis | Up to the graph, then across | A number of items (at most that value) |
| A number of items | Vertical axis | Across to the graph, then down | A value of the variable |

For "more than" a value, take the total number of items minus the number read at that value. For the "highest k items", read at (total − k).

## Worked reminder

A survey of 140 commuters records the one-way distance, d km. The class widths are unequal.

| Distance, d km | 0 < d ≤ 2 | 2 < d ≤ 5 | 5 < d ≤ 10 | 10 < d ≤ 20 | 20 < d ≤ 40 |
|---|---|---|---|---|---|
| Frequency | 12 | 30 | 38 | 42 | 18 |
| Cumulative frequency | 12 | 42 | 80 | 122 | 140 |

```
12
12 + 30 = 42
42 + 38 = 80
80 + 42 = 122
122 + 18 = 140   (equals the total, so the table is right)
```

Points to plot: (0, 0), (2, 12), (5, 42), (10, 80), (20, 122), (40, 140).

Readings from the straight-line polygon:

```
Number travelling 8 km or less:
  between (5, 42) and (10, 80): 42 + (3/5) × 38 = 64.8, so about 65

Number travelling more than 15 km:
  between (10, 80) and (20, 122): at 15 the value is 80 + (5/10) × 42 = 101
  140 − 101 = 39

Distance beyond which the furthest 20 commuters travel:
  140 − 20 = 120, so read across at 120
  10 + (40/42) × 10 ≈ 19.5 km
```

A smooth curve drawn through the same points will give slightly different readings. That is expected, because every reading from grouped data is an estimate.

## Second reminder: rounded data

The lengths of 65 leaves are measured to the nearest millimetre.

| Length (mm) | 30–39 | 40–49 | 50–59 | 60–69 | 70–79 |
|---|---|---|---|---|---|
| Frequency | 7 | 18 | 25 | 12 | 3 |

The boundaries are 29.5, 39.5, 49.5, 59.5, 69.5 and 79.5. The cumulative frequencies are found by adding as before.

```
7
7 + 18 = 25
25 + 25 = 50
50 + 12 = 62
62 + 3 = 65   (equals the total)
```

Points to plot: (29.5, 0), (39.5, 7), (49.5, 25), (59.5, 50), (69.5, 62), (79.5, 65).

```
Number of leaves of length 55 mm or less:
  between (49.5, 25) and (59.5, 50): 25 + (5.5/10) × 25 = 38.75, so about 39

Number longer than 65 mm:
  between (59.5, 50) and (69.5, 62): 50 + (5.5/10) × 12 = 56.6
  65 − 56.6 = 8.4, so about 8

Length that 33 leaves do not exceed:
  between (49.5, 25) and (59.5, 50): 49.5 + (8/25) × 10 = 52.7 mm
```

The starting point sits at 29.5 and not at 30, because 30 is the class limit and 29.5 is the true boundary.

## Quick check on a table alone

You can answer some questions without any graph, as long as the value asked about is a class boundary.

- Items up to a boundary: read the cumulative frequency directly.
- Items between two boundaries: subtract the two cumulative frequencies.
- Items above a boundary: total minus the cumulative frequency.

For a value that is not a boundary, you have to estimate. Use the graph, or a straight-line estimate between the two nearest boundaries as in the worked reminders.

## Must-know distinctions

- **Frequency or cumulative frequency.** Frequency is the number in one class. Cumulative frequency is the number up to and including the class.
- **Midpoint or upper boundary.** A frequency polygon uses midpoints. Cumulative frequency uses the upper boundary.
- **Polygon or curve.** Straight lines or a smooth curve through the same points. Read the question to see which is wanted.
- **Limit or boundary.** 24 is a class limit for rounded data. 24.5 is the boundary. Plot at the boundary.
- **Cumulative frequency or cumulative percentage.** Divide by the total and multiply by 100 to convert. Convert before comparing groups of different sizes.
- **Graph readings or table readings.** The table gives exact totals at boundaries only. The graph estimates values between them.

Finding the median, quartiles and percentiles from a cumulative frequency graph builds on these readings and belongs to section 5.3. Get the readings right here first.

## Quick self-test

1. In one sentence, what does a cumulative frequency of 33 at x = 3 mean?
2. Frequencies for x = 1, 2, 3, 4 are 5, 8, 6, 3. Write the cumulative frequencies.
3. Cumulative frequencies at the end of four consecutive classes are 3, 10, 24 and 30. Find the frequency of each class.
4. A length is measured to the nearest millimetre. State the boundaries of the class 40–49.
5. At which value on the horizontal axis do you plot the cumulative frequency of the class 40–49 in question 4?
6. What is the first point you plot for a table whose first class is 10 < t ≤ 20?
7. A graph shows 80 items, and the graph reaches 62 at x = 30. How many items are greater than 30?
8. Use the worked reminder polygon. How many commuters travel 8 km or less?
9. Use the worked reminder polygon. How many travel more than 15 km?
10. Use the worked reminder polygon. Beyond what distance do the furthest 20 commuters travel?
11. Use the leaf table in the second reminder. How many leaves are longer than 59.5 mm, and what is that as a percentage of 65, to the nearest whole number?

### Answers

1. 33 observations are less than or equal to 3.
2. 5, 13, 19, 22.
3. 3, 7, 14, 6.
4. 39.5 and 49.5.
5. 49.5.
6. (10, 0).
7. 80 − 62 = 18.
8. About 65 (64.8 from the polygon).
9. 39.
10. About 19.5 km (read across at 120).
11. 65 − 50 = 15 leaves, and 15/65 × 100 = 23.08, so about 23%.

## Where marks are usually lost

- Plotting at the midpoint instead of the upper boundary.
- Forgetting the starting point with cumulative frequency 0.
- Plotting at 24 instead of 24.5 for rounded data.
- Arithmetic slips in the running total, with no check against the total frequency.
- Reading the wrong end for "the slowest 20" or "the highest 10%". Subtract from the total first.
- Joining a curve with a ruler, or a polygon with a smooth line, against the wording of the question.
- Giving a graph reading as exact, and giving no unit. Write "about 65 commuters" or "19.5 km (estimate)", with the unit in the answer.
- Quoting a percentage without dividing by the correct total, or comparing counts when the groups have different sizes.
- Leaving out guide lines, so a misread scale leaves no evidence of method. The syllabus says essential working must be shown for full marks.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment, topic 4, sections 4.1 and 4.2.
