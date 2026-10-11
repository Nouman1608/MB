---
title: "Cambridge O Level Statistics: Frequency polygons and histograms (4040)"
seoTitle: "O Level Statistics 4040 Polygons and Histograms Guide"
resourceType: "study-guides"
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
description: "Step-by-step guide to frequency polygons and histograms for Cambridge O Level Statistics, with frequency density, unequal class widths and worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers section 3.2, representation in frequency polygons and histograms, of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027. It sits inside topic 3, formation of data into ungrouped or grouped frequency distributions, and it assumes you can already find class boundaries and midpoints (section 3.1; see the [frequency distributions guide](/resources/cambridge-o-level-statistics-frequency-distributions/)). The syllabus is not tiered, so everything here is for every candidate.

Related pages: the [revision notes](/resources/cambridge-o-level-statistics-frequency-polygons-and-histograms-revision-notes/), the [practice set](/resources/cambridge-o-level-statistics-frequency-polygons-and-histograms-practice/), the [Cambridge O Level Statistics hub](/boards/cambridge/o-level/statistics/), the [printable checklist](/checklists/cambridge/o-level/statistics/) and the [summary representation guide](/resources/o-level-cambridge-statistics-summary-representation-of-data/). To find out where you stand first, take one of the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Outcome (3.2) | What you must be able to do |
|---|---|
| Frequency polygons | Build one from a grouped table using midpoints, close it at both ends, read it and compare two |
| Histograms, equal widths | Draw bars on class boundaries with no gaps, height = frequency |
| Histograms, unequal widths | Work out frequency density, draw bars of that height, and understand that area represents frequency |
| Reading from them | Find frequencies, totals, modal class and estimates for part of a class; find a missing bar |

## Step 0: boundaries and midpoints

Both diagrams are drawn on a continuous scale, so they use class boundaries, not the printed class limits.

- Continuous data, classes written like 6 ≤ x < 8: the boundaries are 6 and 8.
- Whole-number data, classes written like 30–39: the boundaries are 29.5 and 39.5, so the bars meet.
- Midpoint = (lower boundary + upper boundary) ÷ 2. Class width = upper boundary − lower boundary.

For 30–39 the midpoint is (29.5 + 39.5) ÷ 2 = 34.5 and the width is 10, not 9. Using 9 is a classic slip.

## Frequency polygons

A frequency polygon shows a grouped distribution as a line graph. The method:

1. Find the midpoint of each class.
2. Plot frequency (vertical) against midpoint (horizontal).
3. Add a point with frequency 0 at the midpoint of the empty class just before the first class, and another at the midpoint of the empty class just after the last class.
4. Join the points with straight lines, using a ruler.

Do not draw a smooth curve, and do not join the last point back to the first. The two zero points make the polygon start and finish on the axis, and with equal class widths they keep the area under the polygon equal to the area of the histogram.

### Worked example 1: leaf lengths

A botanist measures 50 leaves, in cm.

| Length l (cm) | 4 ≤ l < 6 | 6 ≤ l < 8 | 8 ≤ l < 10 | 10 ≤ l < 12 | 12 ≤ l < 14 |
|---|---|---|---|---|---|
| Frequency | 5 | 12 | 20 | 9 | 4 |

Midpoints are 5, 7, 9, 11, 13. The empty class before is 2 ≤ l < 4 (midpoint 3) and the empty class after is 14 ≤ l < 16 (midpoint 15). Points to plot:

```
(3, 0)  (5, 5)  (7, 12)  (9, 20)  (11, 9)  (13, 4)  (15, 0)
```

The peak is at (9, 20), so the modal class is 8 ≤ l < 10. Check: 5 + 12 + 20 + 9 + 4 = 50.

### Why use a polygon at all?

A polygon is better than a histogram when you want to compare two distributions on one set of axes, because two sets of bars overlap and become unreadable while two lines do not. If the two samples have different sizes, raw frequencies mislead: the larger sample's line is taller simply because it has more items. Compare proportions (relative frequencies) instead, or say clearly that the sizes differ.

## Histograms with equal class widths

A histogram represents grouped continuous data by bars.

- The horizontal axis is a continuous number line marked with class boundaries.
- The bars touch, because there are no gaps between classes. (A bar chart is different: separate bars, categories or discrete values.)
- When every class has the same width, the height of a bar is its frequency, so the vertical axis is labelled "Frequency".
- Give the diagram a title and label both axes with units.

### Worked example 2: typing speeds

Fifty people take a typing test (words per minute, whole numbers).

| Speed | 30–39 | 40–49 | 50–59 | 60–69 | 70–79 |
|---|---|---|---|---|---|
| Frequency | 6 | 14 | 18 | 9 | 3 |

Boundaries and heights:

| Bar | Boundaries | Width | Height |
|---|---|---|---|
| 30–39 | 29.5 to 39.5 | 10 | 6 |
| 40–49 | 39.5 to 49.5 | 10 | 14 |
| 50–59 | 49.5 to 59.5 | 10 | 18 |
| 60–69 | 59.5 to 69.5 | 10 | 9 |
| 70–79 | 69.5 to 79.5 | 10 | 3 |

The bars run from 29.5 to 79.5 without a gap. If you also wanted the polygon, the points would be at the midpoints 34.5, 44.5, 54.5, 64.5, 74.5 (plus zero-frequency points at 24.5 and 84.5), which are the centres of the tops of the bars.

A rough text sketch of the bar heights:

```
18 |            ####
14 |      ####  ####
 9 |      ####  ####  ####
 6 | #### ####  ####  ####
 3 | #### ####  ####  ####  ####
   29.5  39.5  49.5  59.5  69.5  79.5
```

## Histograms with unequal class widths

Data are often grouped with narrow classes where most values lie and wide classes in the tails. If you drew bars whose heights were frequencies, a wide class would look far bigger than it is. The fix is to make the area of each bar represent frequency.

```
frequency density = frequency ÷ class width
area of bar = frequency density × class width = frequency
```

So the vertical axis is labelled "Frequency density" and includes the unit, for example "people per minute". A wide class has its frequency spread over a longer base, which lowers its bar.

### Worked example 3: journey times

Seventy-four employees record their journey times to work.

| Time t (min) | 0 ≤ t < 10 | 10 ≤ t < 15 | 15 ≤ t < 20 | 20 ≤ t < 30 | 30 ≤ t < 50 |
|---|---|---|---|---|---|
| Frequency | 8 | 14 | 22 | 18 | 12 |
| Width | 10 | 5 | 5 | 10 | 20 |
| Frequency density | 0.8 | 2.8 | 4.4 | 1.8 | 0.6 |

Each density is frequency ÷ width, for example 14 ÷ 5 = 2.8 and 12 ÷ 20 = 0.6. Draw bars from 0 to 10 at height 0.8, from 10 to 15 at height 2.8, and so on, touching one another.

The class with the highest frequency (15 ≤ t < 20, 22 people) is also the tallest bar here, but that is not guaranteed. The modal class in a histogram is the class with the greatest frequency density.

### Polygons with unequal widths

If a question asks for a polygon on unequal classes, plotting raw frequency against midpoint distorts the shape in the same way. Plotting frequency density against midpoint matches the histogram. Label the vertical axis so the reader can see what you plotted.

## Reading from a histogram

Always convert back to frequency using the area.

- Frequency of a bar = frequency density × class width.
- Total frequency = sum of all bar areas.
- Estimate for part of a class: assume the items are spread evenly through the class, so the part of the bar's width that you want, times the bar's density, gives the estimate.
- Missing bar: total frequency minus the frequencies already found gives the missing frequency; divide by its width for the height.
- Scale questions: if a bar is drawn at a stated height for a stated frequency, every other density is in the same ratio.

### Worked example 4: estimates from example 3

How many employees travel for between 12 and 18 minutes?

```
12 to 15 minutes:  3 × 2.8 = 8.4
15 to 18 minutes:  3 × 4.4 = 13.2
Total estimate:    8.4 + 13.2 = 21.6, so about 22 people
```

How many travel for more than 25 minutes?

```
25 to 30 minutes:  5 × 1.8 = 9
30 to 50 minutes:  12 (the whole bar)
Total:             9 + 12 = 21 people
```

Both answers are estimates because the exact spread inside each class is unknown. Say "estimate" in your answer.

### Worked example 5: finding a bar height from a scale

On a histogram, the bar for 0 ≤ x < 4 is 2.5 cm tall and represents 20 items. How tall is the bar for 4 ≤ x < 10, which represents 27 items?

```
Density of first bar  = 20 ÷ 4  = 5 items per unit  <-> 2.5 cm
So 1 unit of density  = 2.5 ÷ 5 = 0.5 cm
Density of second bar = 27 ÷ 6  = 4.5
Height                = 4.5 × 0.5 = 2.25 cm
```

## Choosing between the two diagrams

| Feature | Frequency polygon | Histogram |
|---|---|---|
| Shape shown by | Straight-line graph through midpoints | Touching bars on boundaries |
| Best for | Comparing two or more distributions | Showing one distribution, especially with unequal widths |
| Original class limits visible | No, only midpoints | Yes, as bar edges |
| Area | With equal widths and both end points added, equals the area of the histogram | Each bar's area represents its frequency, for any widths |

## Common errors

- Plotting a polygon at class limits or upper boundaries instead of midpoints.
- Forgetting the two zero-frequency end points, so the polygon floats above the axis.
- Leaving gaps between histogram bars for continuous data.
- Using class limits (29 and 39) to compute widths, rather than boundaries (29.5 and 39.5).
- Using frequency as the bar height when the widths are unequal.
- Labelling the vertical axis "Frequency" on a frequency density histogram.
- Reading a bar's height as the number of items in the class; the number is height × width.
- Naming the modal class from the largest frequency rather than the largest frequency density.
- Stating an estimate for part of a class as if it were exact.

## Next steps

Work through the [practice set](/resources/cambridge-o-level-statistics-frequency-polygons-and-histograms-practice/), then use the [revision notes](/resources/cambridge-o-level-statistics-frequency-polygons-and-histograms-revision-notes/) as a quick reference. Cumulative frequency, the next stage, builds on the same grouped tables. You can also see what 4040 expects in the [exam preparation guide](/resources/cambridge-o-level-statistics-exam-preparation/).

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027, published by Cambridge University Press & Assessment. This page follows section 3.2.
