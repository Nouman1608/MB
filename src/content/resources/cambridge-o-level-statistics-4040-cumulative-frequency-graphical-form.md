---
title: "Cambridge O Level Statistics (4040): Cumulative frequency distributions: representation in graphical form"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 4 – Formation of frequency distributions into cumulative frequency distributions"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 4.2
syllabusTopics:
  - qualification: "o-level"
    topic: "formation-of-cumulative-frequency-distributions-4040"
    subtopic: "cumulative-frequency-graphical-form-4040"
description: "Cumulative frequency curves and polygons for continuous data in 4040: scales, plotting, reading the shape and comparing groups with percentage polygons."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: cumulative frequency distributions, "Representation in graphical form", which the syllabus describes as cumulative frequency curves and polygons for continuous data. The graph turns the table of section 4.1 into a picture you can read at any value, not just at class boundaries.

Plotting at upper boundaries, the starting point and basic readings are taught in the guide to [cumulative frequency tables, curves and polygons](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/). This page adds what that guide does not dwell on: choosing scales, deciding between a curve and a polygon, reading the shape of the distribution from the graph, and comparing two groups with cumulative percentage polygons on one grid. Use the [cumulative frequency graph revision notes](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form-revision-notes/) and the [cumulative frequency graph practice questions](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form-practice/) afterwards.

## What this unit covers

| Part of 4.2 | What you must be able to do |
|---|---|
| Drawing | Plot cumulative frequency against upper class boundary, with the starting point, on sensible scales |
| Curve or polygon | Join points with a smooth curve or with straight lines, as the question asks |
| Reading | Read a count from a value and a value from a count, including "more than" and "between" |
| Interpreting | Describe what the steepness and shape of the graph show |
| Comparing | Compare distributions using cumulative percentages on one grid |

## Why only continuous data?

A cumulative frequency graph joins its points, so it assumes that values can lie anywhere between the plotted boundaries. That is true for continuous data such as time, mass and length. For discrete data such as goals scored, nothing lies between 2 and 3, so a joined graph would suggest values that cannot exist. The syllabus therefore names curves and polygons **for continuous data**.

## Choosing scales

1. Horizontal axis: from the first lower boundary to the last upper boundary. Choose a scale where boundaries such as 29.5 or 4.95 can be plotted accurately, for example 2 cm for 10 units.
2. Vertical axis: from 0 to at least n, in convenient steps (such as 2 cm for 10 or 20).
3. Use as much of the graph paper as possible; a small graph gives inaccurate readings.
4. Label both axes with the variable and units, and "Cumulative frequency" (or "Cumulative percentage").

A broken horizontal axis (a zig-zag near the origin) is acceptable when the first boundary is far from zero, such as 140 cm, provided the scale is linear after the break.

## Curve or polygon?

| | Polygon | Curve |
|---|---|---|
| Joined by | Straight lines between plotted points | One smooth freehand curve through the points |
| Assumes | Values spread evenly within each class | Values change gradually across boundaries |
| Readings | Match linear interpolation in the table exactly | Slightly different, still estimates |
| Drawn with | Ruler | Freehand (a flexicurve is allowed in this examination) |

Use whichever the question names. If it says "curve", a ruled polygon may lose the mark for the line, and the reverse is also true.

## Reading the shape

The **gradient** of the graph shows how many observations lie in each part of the range.

- A **steep** section: many values in a short interval; this is where the data are concentrated.
- A **nearly flat** section: few values in that interval.
- A graph that is steepest in the **middle**, giving an S shape, shows data concentrated around the centre with fewer values at each end: roughly symmetrical.
- A graph that rises **steeply at first** and then levels off slowly shows most values are small, with a long tail of larger values: skewed towards the larger values.
- A graph that rises **slowly at first** and steeply near the end shows most values are large: skewed towards the smaller values.
- A graph that is close to a **straight line** shows values spread fairly evenly across the range.

## Comparing two groups with cumulative percentages

When groups have different sizes, plot **cumulative percentage** against the boundary so both graphs end at 100%.

**Worked example 1.** Two factories test light bulbs, recording lifetimes in hours. Cumulative percentages failed by each time are:

| Hours (≤) | 200 | 400 | 600 | 800 | 1000 | 1200 |
|---|---|---|---|---|---|---|
| Factory X | 0 | 10 | 35 | 70 | 95 | 100 |
| Factory Y | 0 | 5 | 20 | 50 | 85 | 100 |

Plot both polygons on one grid, from (200, 0), with a key.

```
Percentage failed by 700 hours:
  X: halfway from 35 to 70 → 52.5%
  Y: halfway from 20 to 50 → 35%

Time by which half the bulbs had failed (read across at 50%):
  X: 600 + (15/35) × 200 ≈ 686 hours
  Y: exactly 800 hours (a plotted point)

Time by which 90% had failed:
  X: 800 + (20/25) × 200 = 960 hours
  Y: 1000 + (5/15) × 200 ≈ 1067 hours
```

Interpretation: Factory Y's polygon lies to the right of (below) Factory X's at every time strictly between 200 and 1200 hours, so at any given time a smaller percentage of Y's bulbs has failed. Factory Y's bulbs tend to last longer.

**Rule of thumb.** For the same cumulative percentage, the graph further to the right has the larger values.

## Readings that need care

**Worked example 2.** A cumulative frequency polygon for 120 commuters passes through (0, 0), (10, 14), (20, 50), (30, 86), (45, 108) and (60, 120), where the horizontal axis is journey time in minutes.

```
Number taking between 15 and 40 minutes:
  at 15: 14 + (5/10) × 36 = 32
  at 40: 86 + (10/15) × 22 = 100.7
  between: 100.7 − 32 ≈ 69 commuters

Percentage taking more than 25 minutes:
  at 25: 50 + (5/10) × 36 = 68
  more than 25: 120 − 68 = 52, and 52/120 = 43.3%

Time exceeded by the slowest 30 commuters:
  read across at 120 − 30 = 90
  30 + (4/22) × 15 ≈ 32.7 minutes
```

The steepest segments, 10 to 20 and 20 to 30 minutes (36 commuters in each 10 minutes), show where journey times are concentrated.

On a drawn graph, the same readings are taken with ruled guide lines: up from the horizontal axis and across, or across from the vertical axis and down. Leave the guide lines visible as working.

## Common errors

- Plotting at midpoints or lower boundaries.
- Starting the graph at the origin when the first boundary is not 0.
- Joining points with a curve when a polygon was asked for (or the reverse).
- Plotting cumulative frequencies, not percentages, when comparing groups of different sizes.
- Reading "more than" directly from the graph without subtracting from n.
- A non-linear scale on an axis, such as uneven gaps between labelled values.
- Describing a steep section as "high values" rather than "many values".

## Exam technique

- **Draw a cumulative frequency polygon (or curve)**: list the coordinates first, include the starting point, plot with small crosses.
- **Use your graph to estimate**: draw the guide lines and quote the reading as an estimate with units.
- **Compare the distributions**: use figures read from both graphs and say which group has the larger values or greater concentration.
- **Describe the shape**: link steepness to where the values are concentrated.

## Next steps

Revise the drawing and reading rules with the [revision notes on cumulative frequency graphs](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form-revision-notes/), then use the [cumulative frequency graph practice questions](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form-practice/). Medians, quartiles and percentiles read from these graphs are in [quartiles and percentiles](/resources/cambridge-o-level-statistics-4040-quartiles-and-percentiles/).

## Frequently asked questions

**Can I draw a cumulative frequency graph for discrete data?**
The syllabus specifies curves and polygons for continuous data, because joining the points assumes values exist between them.

**Why compare cumulative percentages rather than cumulative frequencies?**
Groups of different sizes end at different heights on a frequency graph; percentages put both on a 0 to 100 scale.

**What does a steep part of the graph mean?**
Many observations lie in that interval, so the data are concentrated there.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 4, section 4.2: Representation in graphical form, including cumulative frequency curves and polygons for continuous data.
