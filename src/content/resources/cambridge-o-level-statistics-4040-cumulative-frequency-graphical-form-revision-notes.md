---
title: "Cambridge O Level Statistics (4040): Cumulative frequency distributions: representation in graphical form -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on drawing and reading cumulative frequency curves and polygons, interpreting shape and comparing groups, with a self-test, for 4040."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 4.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: cumulative frequency curves and polygons for continuous data. Worked examples are in the [cumulative frequency graph study guide](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form/), and the [cumulative frequency graph practice questions](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form-practice/) give exam-style drill. The tables behind the graphs are summarised in the [cumulative frequency table revision notes](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Cumulative frequency polygon | Points (upper boundary, cumulative frequency) joined by straight lines |
| Cumulative frequency curve | The same points joined by one smooth curve |
| Starting point | (first lower boundary, 0) |
| Cumulative percentage graph | Cumulative percentage plotted against upper boundary, ending at 100% |
| Gradient | Steepness of the graph; shows how concentrated the data are |
| Guide lines | Ruled lines showing how a reading was taken |
| Broken axis | A zig-zag near the origin when the scale does not start at 0 |

## Drawing checklist

- Horizontal axis: variable and units; linear scale covering all boundaries.
- Vertical axis: "Cumulative frequency" from 0 to n (or 0 to 100%).
- Points at **upper** boundaries, plus the starting point.
- Small, neat crosses.
- Straight lines (polygon) or one smooth curve (curve), as the question says.
- Key when two graphs share a grid.

## Readings

| You want | Start at | Then |
|---|---|---|
| Number at or below x | x on horizontal axis | up to graph, across |
| Number above x | as above | subtract reading from n |
| Number between a and b | readings at a and b | subtract |
| Value below which k items lie | k on vertical axis | across to graph, down |
| Value exceeded by the top k items | n − k on vertical axis | across, down |
| Percentage at or below x | reading at x | ÷ n × 100 (or read a percentage graph directly) |

Every reading is an **estimate**; quote it with units and an approximate sign or the word "about".

## Polygon readings by calculation

On a polygon, a reading between plotted points (x₁, c₁) and (x₂, c₂) is:

```
at x:  c = c₁ + (x − x₁)/(x₂ − x₁) × (c₂ − c₁)
at c:  x = x₁ + (c − c₁)/(c₂ − c₁) × (x₂ − x₁)
```

**Worked reminder.** Points (20, 30) and (30, 70). At x = 24: 30 + (4/10) × 40 = 46. At c = 60: 20 + (30/40) × 10 = 27.5.

## Reading the shape

| Graph | Meaning |
|---|---|
| Steep section | Many values in that interval |
| Flat section | Few values in that interval |
| S shape, steepest in middle | Values concentrated near the centre; roughly symmetrical |
| Steep early, then levels slowly | Most values small, long tail of large values |
| Slow early, steep late | Most values large, tail of small values |
| Nearly straight line | Values spread evenly |

## Comparing two groups

- Plot cumulative **percentages** when group sizes differ.
- At a given value, the lower graph has a smaller percentage at or below it, so its values tend to be larger.
- At a given percentage, the graph further right has the larger value.
- Quote readings from both graphs.

**Worked reminder.** At 30 minutes, Group A's percentage graph reads 60% and Group B's reads 40%. So 60% of A but only 40% of B took 30 minutes or less: Group B tended to take longer.

## Exam traps

- Plotting at midpoints.
- Missing the starting point, or starting at (0, 0) when the first boundary is not 0.
- A ruled polygon when a curve was asked for, or the reverse.
- Forgetting to subtract from n for "more than" or "top k".
- Reading the wrong graph when two share a grid; label each with a key.
- Uneven or non-linear scales.
- Using cumulative frequencies to compare groups of different size.
- Joining points for discrete data; the syllabus specifies continuous data.

## Quick self-test

1. At which value is a class's cumulative frequency plotted?
2. The first class is 40 ≤ m < 50. What is the starting point?
3. Lengths to the nearest cm in classes 20–24, 25–29. At what x-value is the first cumulative frequency plotted?
4. What is the difference between a curve and a polygon?
5. A graph for 80 items reads 52 at x = 30. How many items exceed 30?
6. Polygon points (10, 15) and (20, 45). Estimate the reading at x = 14.
7. Using question 6, at what x-value is the cumulative frequency 36?
8. For n = 160, at what height do you read to find the value exceeded by the top 40?
9. What does a nearly flat part of the graph show?
10. Two groups of sizes 50 and 120 are compared. What should be plotted?
11. At 20 kg, Graph P reads 70% and Graph Q reads 45%. Which group tends to be heavier?
12. Why should guide lines be left on the graph?

### Answers

1. Its upper class boundary.
2. (40, 0).
3. 24.5.
4. A polygon joins points with straight lines; a curve joins them with one smooth line.
5. 80 − 52 = 28.
6. 15 + (4/10) × 30 = 27.
7. 10 + (21/30) × 10 = 17.
8. At 160 − 40 = 120.
9. Few values lie in that interval.
10. Cumulative percentages.
11. Group Q, since a smaller percentage is 20 kg or less.
12. They show the method, which can earn credit if a reading is slightly off.

## Frequently asked questions

**Is a flexicurve allowed?**
The syllabus states that candidates may use flexicurves in this examination, which helps when drawing a smooth curve.

**Will polygon and curve readings agree?**
At plotted points, yes. Between points they may differ slightly; both are estimates.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 4, section 4.2: Representation in graphical form, including cumulative frequency curves and polygons for continuous data.
