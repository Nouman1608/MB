---
title: "Cambridge O Level Statistics: Cumulative frequency tables, curves and polygons (4040)"
seoTitle: "O Level Statistics 4040 Cumulative Frequency Study Guide"
resourceType: "study-guides"
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
description: "Study guide to forming cumulative frequency tables and drawing and reading cumulative frequency curves and polygons for Cambridge O Level Statistics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers topic 4, "Formation of frequency distributions into cumulative frequency distributions", of the Cambridge O Level Statistics 4040 syllabus for examination in 2025, 2026 and 2027: section 4.1 (representation in tabular form) and section 4.2 (representation in graphical form, with cumulative frequency curves and polygons for continuous data). The syllabus is not tiered, so everything here is for every candidate.

Start from a grouped or ungrouped frequency distribution, which the [frequency distributions guide](/resources/cambridge-o-level-statistics-frequency-distributions/) covers. Use the [4040 course hub](/boards/cambridge/o-level/statistics/) and the [printable checklist](/checklists/cambridge/o-level/statistics/) to track progress. For drills, go to the [revision notes](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons-revision-notes/) and the [practice questions](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons-practice/). To find your gaps first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Syllabus section | What you must be able to do |
|---|---|
| 4.1 | Form a cumulative frequency table from an ungrouped or grouped frequency distribution |
| 4.2 | Draw a cumulative frequency curve or polygon for continuous data, plotting at upper class boundaries, and read values from it |

Finding the median, quartiles and percentiles from a curve is part of section 5.3 and has its own unit. Here you learn to build the table, draw the graph and read values off it. That reading skill is what section 5.3 later uses.

## What cumulative frequency means

The **cumulative frequency** of a value is the number of observations that are less than or equal to that value. It is a running total of the frequencies. The final cumulative frequency always equals the total number of observations, and that is your built-in check.

## Section 4.1: forming the table

### Ungrouped data

For each value, add its frequency to the running total of all the smaller values.

**Worked example 1.** A depot records the number of vans arriving late in a week, over 40 weeks.

| Late arrivals, x | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Frequency | 4 | 9 | 12 | 8 | 4 | 2 | 1 |
| Cumulative frequency (≤ x) | 4 | 13 | 25 | 33 | 37 | 39 | 40 |

```
4
4 + 9 = 13
13 + 12 = 25
25 + 8 = 33
33 + 4 = 37
37 + 2 = 39
39 + 1 = 40   (matches the 40 weeks, so the table is right)
```

Reading the table: weeks with more than 3 late arrivals = 40 − 33 = **7**. Weeks with 2, 3 or 4 late arrivals = 37 − 13 = **24**.

### Grouped continuous data

Each cumulative frequency belongs to the **upper class boundary**, because every item in that class is counted only once you have reached the top of the class. Label the columns "less than or equal to" the boundary (or "less than", if the class limits are written with a strict upper limit).

**Worked example 2.** A courier records the delivery time, t hours, of 150 parcels. The classes have unequal widths.

| Time, t hours | 0 < t ≤ 6 | 6 < t ≤ 12 | 12 < t ≤ 18 | 18 < t ≤ 24 | 24 < t ≤ 36 | 36 < t ≤ 48 |
|---|---|---|---|---|---|---|
| Frequency | 9 | 23 | 41 | 37 | 30 | 10 |

```
t ≤ 6:   9
t ≤ 12:  9 + 23 = 32
t ≤ 18:  32 + 41 = 73
t ≤ 24:  73 + 37 = 110
t ≤ 36:  110 + 30 = 140
t ≤ 48:  140 + 10 = 150
```

| Upper boundary | 6 | 12 | 18 | 24 | 36 | 48 |
|---|---|---|---|---|---|---|
| Cumulative frequency | 9 | 32 | 73 | 110 | 140 | 150 |

Unequal widths cause no difficulty here. You add frequencies as they stand. (Frequency density matters for histograms, not for cumulative frequency.)

### Data rounded to a unit

When measurements are rounded, the class limits have gaps, and the real boundaries lie halfway across each gap.

**Worked example 3.** The heights of 80 seedlings are measured to the nearest centimetre.

| Height (cm) | 20–24 | 25–29 | 30–34 | 35–39 | 40–44 | 45–49 |
|---|---|---|---|---|---|---|
| Frequency | 6 | 14 | 27 | 19 | 9 | 5 |

A seedling in the class 20–24 has a true height from 19.5 cm up to 24.5 cm. So the boundaries are 19.5, 24.5, 29.5, 34.5, 39.5, 44.5 and 49.5.

| Upper boundary | 24.5 | 29.5 | 34.5 | 39.5 | 44.5 | 49.5 |
|---|---|---|---|---|---|---|
| Cumulative frequency | 6 | 20 | 47 | 66 | 75 | 80 |

The first class has lower boundary 19.5, and no seedling is shorter than that, so the cumulative frequency at 19.5 is 0.

### Working backwards

To recover a frequency from a cumulative table, subtract the cumulative frequency before it. The first class keeps its cumulative frequency.

**Worked example 4.** Monthly rainfall, r mm, at a weather station over 96 months:

| r ≤ | 20 | 40 | 60 | 80 | 100 | 120 |
|---|---|---|---|---|---|---|
| Cumulative frequency | 5 | 21 | 52 | 78 | 91 | 96 |

```
0 < r ≤ 20:    5
20 < r ≤ 40:   21 − 5  = 16
40 < r ≤ 60:   52 − 21 = 31
60 < r ≤ 80:   78 − 52 = 26
80 < r ≤ 100:  91 − 78 = 13
100 < r ≤ 120: 96 − 91 = 5
```

Check: 5 + 16 + 31 + 26 + 13 + 5 = 96.

## Section 4.2: drawing the graph

### Steps

1. Put the variable on the horizontal axis and cumulative frequency on the vertical axis. Label both, with units, and use an even scale.
2. Plot each cumulative frequency at the **upper class boundary**, never at the class midpoint.
3. Add a starting point where the first class begins (its lower boundary), at cumulative frequency 0.
4. Mark each point clearly with a small cross.
5. Join the points. For a **cumulative frequency polygon**, join consecutive points with straight lines. For a **cumulative frequency curve**, draw one smooth curve through the points. The syllabus allows flexicurves as instruments, which suit this.

For worked example 2 the points are:

```
(0, 0)  (6, 9)  (12, 32)  (18, 73)  (24, 110)  (36, 140)  (48, 150)
```

The graph never goes down, because a running total cannot fall. It is steepest where the class has the most data per unit of the variable, and nearly flat where there is little. Here it climbs fastest between 12 and 24 hours and flattens after 36.

A polygon is the quick, exact version of the same picture. The smooth curve is usually a better estimate, because real data is spread smoothly across each class instead of changing direction sharply at the boundaries. Use whichever the question asks for.

## Reading values from the graph

The graph lets you estimate things the table cannot, because it fills in the values between boundaries. With grouped data you never know the exact values, so every reading is an **estimate**.

**From a value to a count (go up, then across).** Start on the horizontal axis at the value, go up to the graph, then across to the cumulative frequency axis.

**From a count to a value (go across, then down).** Start on the vertical axis at the count, go across to the graph, then down to the horizontal axis.

Draw these guide lines on your graph, because they show your method.

**Worked example 5.** Use the delivery-time graph (150 parcels).

(a) How many parcels took 15 hours or less? Up from 15, across: about **52** (between the plotted points (12, 32) and (18, 73), 15 is halfway, and halfway between 32 and 73 is 52.5).

(b) How many took more than 30 hours? At 30 the graph is halfway between (24, 110) and (36, 140), which is 125. So 150 − 125 = **25** parcels.

(c) Within what time were half the parcels delivered? Half of 150 is 75. Across from 75: the point lies just beyond (18, 73), at about **18.3 hours**.

(d) The slowest 20 parcels took longer than what time? 150 − 20 = 130. Across from 130, between (24, 110) and (36, 140): 24 + (20/30) × 12 = **32 hours**.

Part (d) is the usual trap. "The slowest 20" is counted from the top, so you read at 130, not at 20.

**Worked example 6.** Use the seedling table (80 seedlings), plotted at 19.5, 24.5 and so on.

(a) The height that 60 seedlings do not exceed: across at 60, between (34.5, 47) and (39.5, 66). Then 34.5 + (13/19) × 5 ≈ **37.9 cm**.

(b) The number taller than 42 cm: at 42 the graph is between (39.5, 66) and (44.5, 75), at 66 + (2.5/5) × 9 = 70.5. So 80 − 70.5 = 9.5, and the answer is about **10** seedlings.

Interpolation like this is what a straight-line polygon gives exactly. A curve drawn by hand will give readings close to these, and a small difference is expected. Clear guide lines and an accurate scale reading are the working that matters, and the interpolation sum is a good check.

## Common errors

- Plotting at the class midpoint. Cumulative frequency goes at the upper boundary.
- Leaving out the starting point (lower boundary of the first class, cumulative frequency 0). Without it the graph starts at the wrong height.
- Using class limits instead of boundaries for rounded data, such as plotting 24 instead of 24.5.
- Adding wrongly and not checking that the last total equals the number of observations.
- Reading the wrong end for "the highest 20", "the slowest 20" or "the top 10%". Subtract from the total first.
- Joining a curve question with ruled straight lines, or a polygon question with a smooth curve.
- Unlabelled axes, or an uneven scale.
- Treating a reading as exact. Say "about" or "estimate".

The syllabus notes that essential working must be shown for full marks, so give the table, the plotted coordinates and the guide lines on the graph.

## Next steps

Work through the [revision notes](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons-revision-notes/) for a short summary and a self-test, then the [practice questions](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons-practice/). Earlier grouping skills are in the [summary representation guide](/resources/o-level-cambridge-statistics-summary-representation-of-data/).

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment, topic 4, sections 4.1 and 4.2.
