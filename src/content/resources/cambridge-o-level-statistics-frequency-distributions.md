---
title: "Cambridge O Level Statistics: Formation of Frequency Distributions (4040)"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Formation of data into ungrouped or grouped frequency distributions"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 3
syllabusTopics:
  - qualification: "o-level"
    topic: "formation-of-data-into-frequency-distributions-4040"
    subtopic: "class-measures-grouped-frequency-4040"
description: "Topic 3 of Cambridge O Level Statistics 4040: class limits, boundaries, midpoints and intervals, grouped vs ungrouped tables, and choosing class widths."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: reviewed by sajawal-zahid."
publishedDate: 2026-09-09
featured: false
---

This guide covers **Topic 3: Formation of data into ungrouped or grouped frequency distributions** in
Cambridge O Level Statistics (4040), following the site's existing guides to
[Data and Its Collection](/resources/o-level-cambridge-statistics-data-and-its-collection/) and
[Summary Representation of Data](/resources/o-level-cambridge-statistics-summary-representation-of-data/).
Where those two topics establish how data is collected and summarised in simple charts, Topic 3 turns to
the specific structures -- ungrouped and grouped frequency distributions -- used to organise larger data
sets before further analysis.

## Where this fits in 4040

This topic is foundational for much of the rest of the syllabus: cumulative frequency distributions
(Topic 4), several statistical measures (Topic 5), and later graphical techniques all build directly on
correctly forming a frequency distribution first.

## Syllabus coverage

**CAMBRIDGE O LEVEL STATISTICS (4040) -- TOPIC 3: FORMATION OF DATA INTO FREQUENCY DISTRIBUTIONS**

- Ungrouped frequency distributions: tallying individual data values directly, appropriate when a data set
  has relatively few distinct values
- Grouped frequency distributions: organising data into class intervals, appropriate when a data set spans
  a wide range of values
- Class measures for grouped data: class limits, class boundaries, class midpoints, and class intervals
- Choosing an appropriate number and width of class intervals for a given data set
- Representing frequency distributions graphically through frequency polygons and histograms

## How to approach it

The distinction between class limits and class boundaries is one of the most commonly tested, and most
commonly confused, ideas in this topic -- building genuine confidence in converting between the two, rather
than memorising a single worked example, is the most reliable preparation.

## Official syllabus

Cambridge O Level Statistics (4040) syllabus, for examination in 2025-2027 --
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/664481-2025-2027-syllabus.pdf).

## Class limits vs class boundaries

Class limits are the stated lower and upper values of a class interval as written in the data table (for
example, a class of "10-19"). Class boundaries adjust these stated limits to remove any gap between
consecutive classes, typically by extending each limit by half a unit (so "10-19" becomes a boundary of
9.5 to 19.5) -- this matters because boundaries, not limits, are what should be used when constructing a
histogram, since a histogram's bars must be continuous with no gaps between them. The class midpoint,
used when estimating summary statistics like the mean from grouped data, is the value exactly halfway
between the class boundaries (or equivalently, between the class limits).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-distributions--02-limits-to-boundaries.webp" width="900" height="880" alt="Classes 20-29, 30-39 and 40-49 are printed with a gap of 1 between 29 and 30. Moving each limit out by half the gap (0.5) makes the classes touch at boundaries 19.5, 29.5, 39.5 and 49.5." loading="lazy">
  <figcaption>Boundaries remove the gaps between printed class limits by moving each limit out by half the gap.</figcaption>
</figure>


## Choosing sensible class intervals

A grouped frequency distribution with too few classes can hide meaningful patterns in the data by
over-simplifying it, while too many classes can leave individual classes with very low frequencies,
making the distribution's overall shape hard to see. There is no single fixed rule for the "correct"
number of classes, but exam questions often expect candidates to recognise when a given choice of class
width is clearly too coarse or too fine for the data set described, and to suggest a more appropriate
alternative with reasoning.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-distributions--05-choosing-class-intervals.webp" width="900" height="1140" alt="The same 80 illustrative values drawn with 2, 10 and 50 classes. Two wide classes hide the pattern, ten classes show two peaks, and fifty classes leave very small frequencies so the shape is hard to see." loading="lazy">
  <figcaption>Too few classes over-simplify the data; too many leave tiny frequencies.</figcaption>
</figure>


## Ungrouped vs grouped: choosing the right approach

An ungrouped frequency distribution simply tallies how often each individual value occurs, which works
well when a data set has only a small number of distinct values -- for example, the number of siblings
each student in a class has, where values might only range from 0 to 5. A grouped frequency distribution
becomes necessary once a data set spans a wide range of possible values, since tallying every individual
value separately would produce an unwieldy table with many classes containing only one or two
observations each. Recognising which approach a given data set calls for, before starting to construct a
table, is itself a skill this topic tests -- a data set is not automatically grouped just because it is
large, but because its range of individual values is wide relative to the number of observations.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-distributions--01-ungrouped-vs-grouped.webp" width="900" height="1080" alt="Top: a tally table for sibling counts 0 to 5 in a class of 24, with frequencies 4, 8, 8, 2, 1, 1. Bottom: 30 different values between 0 and 99 shown as dots in five classes of width 20, with counts 5, 7, 7, 7, 4. Few distinct values suit tallying each value; a wide range needs classes." loading="lazy">
  <figcaption>Few distinct values can be tallied one by one; a wide spread of values is grouped into classes.</figcaption>
</figure>


## Worked example: converting limits to boundaries

The routine below is an original model written for this resource, not a reproduction of any official past
paper or mark scheme.

```
Given class: 20-29 (stated as whole-number class limits)

Step 1 - identify the gap between this class and the next:
the next class starts at 30, so there is a gap of 1 unit between
29 and 30.

Step 2 - split that gap in half:
half of 1 unit is 0.5.

Step 3 - extend the lower limit down by that half-gap, and the
upper limit up by that half-gap:
lower boundary = 20 - 0.5 = 19.5
upper boundary = 29 + 0.5 = 29.5

Step 4 - find the midpoint, if needed:
midpoint = (19.5 + 29.5) / 2 = 24.5
```

This half-unit adjustment specifically applies to data recorded in whole numbers; for data recorded to
one decimal place, the same principle applies but the adjustment becomes half of one decimal place (0.05)
instead of 0.5 -- always check what precision the original data was recorded to before adjusting.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-distributions--03-midpoint-and-width.webp" width="900" height="900" alt="A bar from boundary 19.5 to boundary 29.5 stands for the class 20-29, with the limits 20 and 29 inside it. The midpoint is (19.5 + 29.5) / 2 = 24.5. The class width is 29.5 minus 19.5 = 10, not 29 minus 20 = 9." loading="lazy">
  <figcaption>Midpoint and class width are found from the boundaries of 20-29: 24.5 and 10.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-distributions--04-precision-half-gap.webp" width="900" height="940" alt="Two zoomed number lines. For whole numbers the gap between 29 and 30 is 1, so the half-gap is 0.5 and the boundary is 29.5. For one decimal place the gap between 29.9 and 30.0 is 0.1, so the half-gap is 0.05 and the boundary is 29.95." loading="lazy">
  <figcaption>The half-gap adjustment is half of the last recorded decimal place: 0.5 for whole numbers, 0.05 for one decimal place.</figcaption>
</figure>


## Common mistakes

Using class limits instead of class boundaries when constructing a histogram, leaving gaps between bars
that should be continuous. Miscalculating the half-gap adjustment when precision is not whole numbers (for
example, forgetting to halve 0.1 rather than 1 for data recorded to one decimal place). Choosing an
unreasonably wide or narrow set of class intervals without justifying the choice. Confusing a frequency
polygon (points plotted at class midpoints and joined by straight lines) with a histogram (bars drawn
between class boundaries).

## Quick revision checklist

- Practise converting class limits to class boundaries for data recorded at different levels of precision.
- Be able to calculate a class midpoint from either limits or boundaries.
- Know when a histogram requires class boundaries specifically, not class limits.
- Practise judging whether a given choice of class interval width is too coarse or too fine for a data
  set.
- Distinguish clearly between a frequency polygon and a histogram, both in construction and in when each
  is appropriate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-statistics-frequency-distributions--06-gaps-vs-touching-bars.webp" width="900" height="940" alt="Two histograms of the same illustrative table with classes 10-19 to 50-59. Bars drawn at the printed limits leave gaps; bars drawn at boundaries 9.5 to 59.5 touch." loading="lazy">
  <figcaption>A histogram must use class boundaries so its bars are continuous.</figcaption>
</figure>


## Frequently asked questions

**What is Topic 3 of Cambridge O Level Statistics 4040 about?**
Topic 3 covers forming data into ungrouped or grouped frequency distributions, including class limits, boundaries, midpoints and intervals, choosing sensible class widths, and representing distributions with frequency polygons and histograms.

**Why does a histogram use class boundaries instead of class limits?**
A histogram's bars must be continuous with no gaps between them. Class boundaries remove the gap between consecutive classes, whereas class limits would leave gaps between the bars.

**When should you use an ungrouped frequency distribution?**
Use an ungrouped table when a data set has only a small number of distinct values, such as the number of siblings each student has. A grouped table is needed when the values span a wide range relative to the number of observations.

**What happens if you choose too many or too few classes?**
Too few classes can hide meaningful patterns by over-simplifying the data, while too many leave individual classes with very low frequencies, making the overall shape hard to see.

**What is the difference between a frequency polygon and a histogram?**
A frequency polygon plots points at class midpoints and joins them with straight lines, while a histogram draws bars between class boundaries.
