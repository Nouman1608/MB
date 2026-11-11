---
title: "Cambridge O Level Statistics: Frequency polygons and histograms (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Polygons Histograms Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Frequency polygons and histograms"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 18
syllabusTopics:
  - qualification: "o-level"
    topic: "formation-of-data-into-frequency-distributions-4040"
    subtopic: "frequency-polygons-and-histograms-4040"
description: "Condensed revision notes on frequency polygons, histograms and frequency density for Cambridge O Level Statistics, with a quick self-test and answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense section 3.2, representation in frequency polygons and histograms, of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027. For full explanations and longer worked examples read the [study guide](/resources/cambridge-o-level-statistics-frequency-polygons-and-histograms/); then test yourself with the [practice set](/resources/cambridge-o-level-statistics-frequency-polygons-and-histograms-practice/). Course pages: the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/) and the [printable checklist](/checklists/cambridge/o-level/statistics/). If you are unsure which topics need most work, try the [free 10-minute diagnostics](/diagnostics/).

## Key facts at a glance

| Item | Rule |
|---|---|
| Boundary (whole-number classes such as 15–19) | 14.5 and 19.5 |
| Boundary (classes such as 15 ≤ x < 20) | 15 and 20 |
| Class width | Upper boundary − lower boundary |
| Midpoint | (Lower boundary + upper boundary) ÷ 2 |
| Frequency density | Frequency ÷ class width |
| Frequency of a bar | Frequency density × class width (the bar's area) |
| Polygon points | (midpoint, frequency), plus a zero point either side |
| Histogram bars | Touch each other, drawn on boundaries |

## Frequency polygon: method in steps

1. Write the midpoint of every class.
2. Add the empty class before the first and after the last, each with frequency 0, and find their midpoints.
3. Plot (midpoint, frequency) for all of them.
4. Join with straight lines using a ruler. No curves.
5. Label axes, with units, and give a title.

Use a polygon to compare two distributions on one pair of axes. If the samples differ in size, compare proportions, not raw frequencies.

### Worked reminder

| Distance d (km) | 0 ≤ d < 2 | 2 ≤ d < 4 | 4 ≤ d < 6 | 6 ≤ d < 8 |
|---|---|---|---|---|
| Frequency | 7 | 16 | 11 | 4 |

Midpoints 1, 3, 5, 7. Empty classes before and after have midpoints −1 and 9. Plot:

```
(-1, 0)  (1, 7)  (3, 16)  (5, 11)  (7, 4)  (9, 0)
```

The first zero point can fall at a negative value when the data start at 0. That is allowed; it is only a closing point.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-polygons-and-histograms--07-leaf-length-polygon.webp" width="900" height="850" alt="A frequency polygon for 50 leaves: points (3, 0), (5, 5), (7, 12), (9, 20), (11, 9), (13, 4) and (15, 0) joined by straight lines over faint class bars. The peak at (9, 20) shows the modal class 8 to under 10." loading="lazy">
  <figcaption>Plot frequency against midpoint, add zero-frequency end points and join with straight lines.</figcaption>
</figure>


## Histogram, equal widths: method in steps

1. Convert the classes to boundaries.
2. Mark the boundaries on a continuous horizontal axis.
3. Draw bars from boundary to boundary with no gaps.
4. Make each height the frequency. Label the vertical axis "Frequency".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-polygons-and-histograms--08-polygon-histogram-same-area.webp" width="900" height="880" alt="A histogram of 50 typing speeds with bars from 29.5 to 79.5 and a frequency polygon through the bar-top centres with end points at 24.5 and 84.5. Both have area 500." loading="lazy">
  <figcaption>With equal widths and both end points, the polygon has the same area as the histogram.</figcaption>
</figure>


## Histogram, unequal widths: method in steps

1. Find each class width from the boundaries.
2. Divide frequency by width to get frequency density.
3. Draw each bar from boundary to boundary at that height.
4. Label the vertical axis "Frequency density" with its unit, for example "pupils per km".

### Worked reminder

Distance travelled to school by 108 pupils:

| Distance (km) | 0–<1 | 1–<2 | 2–<4 | 4–<8 |
|---|---|---|---|---|
| Frequency | 20 | 34 | 30 | 24 |
| Width | 1 | 1 | 2 | 4 |
| Frequency density | 20 | 34 | 15 | 6 |

The 4–<8 class has 24 pupils, but its bar is only 6 high, because those pupils are spread across 4 km. Check: 20 + 34 + 30 + 24 = 108.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-polygons-and-histograms--09-unequal-widths-density.webp" width="900" height="1180" alt="Journey times of 74 employees. Top: bars with height equal to frequency make the wide 30-50 class look far too big. Bottom: bars with height equal to frequency density (0.8, 2.8, 4.4, 1.8, 0.6) make area equal frequency." loading="lazy">
  <figcaption>For unequal class widths the bar height must be frequency density, not frequency.</figcaption>
</figure>


## Reading from a histogram

| To find | Do this |
|---|---|
| Frequency in a bar | Density × width |
| Total | Add all the bar areas |
| Modal class | Class with the greatest frequency density |
| Frequency in part of a class | Density × the part of the width wanted (assumes even spread, so it is an estimate) |
| Missing bar | Total − known frequencies, then ÷ width for the height |
| Height from a scale | Find density per cm from a bar you know, then scale |

From the table above, estimate how many pupils travel under 3 km:

```
0 to 2 km:  20 + 34 = 54
2 to 3 km:  1 × 15  = 15
Estimate:   54 + 15 = 69 pupils
```

## Two more worked reminders

### Missing bar

A histogram of 90 items has three bars: 0–<5 with density 4, 5–<15 with density 3.2, and a third bar over 15–<30 whose height is unknown. Find the height.

```
0–<5:    4 × 5   = 20
5–<15:   3.2 × 10 = 32
Third:   90 − 20 − 32 = 38
Height:  38 ÷ 15 = 2.53 (3 s.f.)
```

Keep the height as a fraction (38/15) in later working if you need it, and round only the final answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-polygons-and-histograms--10-histogram-estimates.webp" width="900" height="1180" alt="Using the journey-time histogram, 12 to 18 minutes is 3 x 2.8 + 3 x 4.4 = 8.4 + 13.2 = 21.6, about 22 people. More than 25 minutes is 5 x 1.8 + the whole 30 to 50 bar of 12 = 21 people. Both are estimates." loading="lazy">
  <figcaption>Part of a class is estimated as bar height times the part of the width wanted.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-polygons-and-histograms--11-bar-height-from-scale.webp" width="900" height="800" alt="Bar 0 to 4 represents 20 items and is 2.5 cm tall, so density 5 equals 2.5 cm and one density unit is 0.5 cm. Bar 4 to 10 represents 27 items, density 4.5, so its height is 2.25 cm." loading="lazy">
  <figcaption>A scale from one bar gives the height of another: 4.5 x 0.5 = 2.25 cm.</figcaption>
</figure>


### Comparing two groups with different sizes

Group P has 50 items and group Q has 200. In the class 10–<20, P has 10 and Q has 60.

```
P: 10 ÷ 50  = 0.20 (20%)
Q: 60 ÷ 200 = 0.30 (30%)
```

Q has the larger proportion in that class even though both counts are different sizes. On a polygon, plotting proportions puts the two lines on a fair footing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-polygons-and-histograms--12-compare-with-polygons.webp" width="900" height="1150" alt="Two illustrative samples of 50 shown as overlapping histograms (hard to read) and as two frequency polygons on the same axes, A solid with circles and B dashed with squares (clear)." loading="lazy">
  <figcaption>Polygons compare two distributions better than overlapping bars.</figcaption>
</figure>


## Wording to use in answers

- "Frequency density = frequency ÷ class width" before any calculation, so the method is visible.
- "Area of bar = frequency" when reading a frequency from a histogram.
- "Assuming the values are evenly spread within the class" when estimating for part of a class.
- "The modal class is the one with the greatest frequency density" for unequal widths.
- "Midpoints are used because each class is represented by its central value."

## Polygon versus histogram: must-know distinctions

- Polygon: points at midpoints, joined by straight lines. Histogram: bars on boundaries.
- Histogram bars touch; bar-chart bars are separate. Histograms are for continuous or grouped data on a number line.
- Equal widths: height = frequency. Unequal widths: height = frequency density, area = frequency.
- Height of a bar is not the number of items when widths are unequal. The area is.
- Class limits are the printed values; class boundaries remove the gaps. Use boundaries for widths and bars.
- Modal class in a histogram: highest density, not necessarily highest frequency.

## Checklist before you hand in a diagram

- Horizontal axis has an even scale, and the first and last values you need are marked.
- Polygon points sit exactly above midpoints, not above limits.
- Polygon starts and ends on the horizontal axis.
- Histogram bars share edges, and every edge is a boundary.
- Vertical axis says what it measures and gives units.
- For unequal widths, total of density × width equals the total frequency in the table.
- Your estimates are labelled as estimates.

## Quick self-test

1. A class is written 15–19 (whole numbers). State its boundaries and midpoint.
2. What is the midpoint of the class 2.0 ≤ x < 2.5?
3. A polygon is drawn for classes 20–<30, 30–<40, 40–<50, 50–<60 and 60–<70. At which two x-values are the zero-frequency points plotted?
4. A class 15 ≤ x < 25 has frequency 35. Find its frequency density.
5. A class 5 ≤ x < 8 has frequency density 4. Find its frequency.
6. A bar of width 20 has height 0.65 on a frequency density axis. What frequency does it represent?
7. The class 10 ≤ x < 20 has frequency 30. Estimate how many items lie between 10 and 14, assuming an even spread.
8. Class A has width 10 and frequency 24. Class B has width 5 and frequency 15. Which has the greater frequency density, and which is the modal class of the two?
9. Should the bars of a histogram of continuous data have gaps between them?
10. A histogram has a bar for 0–<2 of density 6 and a bar for 2–<6 of density 3.5. Find the total frequency of the two bars.
11. Why are polygon points plotted at midpoints and not at class limits?
12. Two samples have 40 and 120 items. Why can the second polygon look much taller even if the distributions are alike?

### Answers

1. Boundaries 14.5 and 19.5, midpoint 17.
2. 2.25.
3. At x = 15 and x = 75.
4. Width 10, so 35 ÷ 10 = 3.5.
5. Width 3, so 4 × 3 = 12.
6. 0.65 × 20 = 13.
7. 4 × (30 ÷ 10) = 12.
8. A: 24 ÷ 10 = 2.4. B: 15 ÷ 5 = 3. B has the greater density, so B is the modal class of the two.
9. No. Continuous classes meet at their boundaries, so the bars touch.
10. 6 × 2 = 12 and 3.5 × 4 = 14, so the total is 26.
11. The midpoint stands for the whole class; a limit would be at one end of it and shift the shape.
12. The larger sample has more items in every class. Compare proportions instead.

## Where marks are usually lost

- Using printed limits for whole-number classes instead of boundaries, so widths and midpoints are wrong.
- Forgetting the two closing points of a polygon, or joining them with a curve.
- Drawing histogram bars with gaps, or bars that do not start and end at boundaries.
- Using frequency as height for unequal widths, so the wide classes look the biggest.
- Labelling the vertical axis "Frequency" when it is frequency density.
- Calling a tall bar "the biggest class" without checking its width.
- Giving an estimate for part of a class as an exact count.
- Dividing by the count of whole numbers in a class label (10 for 30–39 is right, but 9 from 39 − 30 is wrong) instead of the boundary width.
- Leaving off a title, axis labels or units, so the diagram does not communicate on its own.

## Frequently asked questions

**How do you draw a frequency polygon from a grouped frequency table?**
Find the midpoint of every class, add an empty class with frequency 0 before the first and after the last, plot (midpoint, frequency) for each, and join the points with straight lines using a ruler.

**Can the first point of a frequency polygon be at a negative value?**
Yes. When the data start at 0, the midpoint of the empty class before the first one can be negative. It is allowed because it is only a closing point that brings the polygon down to the axis.

**What is the modal class on a histogram with unequal class widths?**
It is the class with the greatest frequency density, which is not necessarily the class with the greatest frequency.

**What is the difference between a histogram and a bar chart?**
Histogram bars touch and are drawn on class boundaries on a continuous number line, for continuous or grouped data. Bar-chart bars are separate.

**Which Cambridge O Level Statistics 4040 section do these notes cover?**
They condense section 3.2, representation in frequency polygons and histograms, of the 4040 syllabus for examination in 2025, 2026 and 2027.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment. These notes follow section 3.2.
