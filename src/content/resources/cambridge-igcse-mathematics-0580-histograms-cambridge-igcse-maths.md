---
title: "Cambridge IGCSE Mathematics (0580): Histograms"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 9 – Statistics"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9.7
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "histograms-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Maths 0580 section E9.7 (Extended): frequency density, drawing and reading histograms with unequal class widths, with examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide teaches section **E9.7 Histograms** from Topic 9 Statistics of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The syllabus lists C9.7 as "Extended content only", so everything here is **Extended**: it is assessed on Paper 2 (non-calculator) and Paper 4 (calculator). There are two learning outcomes:

1. "Draw and interpret histograms."
2. "Calculate with frequency density."

The notes add that "the vertical axis is labelled 'Frequency density'" and that "frequency density = frequency ÷ class width".

The [Statistics study guide](/resources/igcse-mathematics-statistics/) gives an overview of Topic 9. This page teaches histograms step by step, with new worked examples on drawing, reading, finding a scale from one bar and estimating within a class. Afterwards, use the [histograms revision notes](/resources/cambridge-igcse-mathematics-0580-histograms-cambridge-igcse-maths-revision-notes/) and the [histograms practice questions](/resources/cambridge-igcse-mathematics-0580-histograms-cambridge-igcse-maths-practice/).

## Why histograms use frequency density

A histogram shows grouped **continuous** data. The bars touch, because the classes meet with no gaps. When the classes are different widths, a bar chart of frequency gives a false picture: a wide class collects more values simply because it is wide.

Look at two classes: 10 < t ≤ 20 with frequency 30, and 5 < t ≤ 10 with frequency 25. The first has more values, but it is twice as wide. Per minute of width it holds 30 ÷ 10 = 3 values, against 25 ÷ 5 = 5. The second class is more crowded.

That "values per unit of width" is the **frequency density**:

```
frequency density = frequency ÷ class width
frequency         = frequency density × class width
```

In a histogram the bar's **height** is the frequency density, so the bar's **area** (height × width) is the frequency.

## Drawing a histogram

### Worked example 1

The time spent in a shop by 100 customers is shown.

```
Time t (min)   Frequency   Class width   Frequency density
0 < t ≤ 5          10            5         10 ÷ 5  = 2
5 < t ≤ 10         25            5         25 ÷ 5  = 5
10 < t ≤ 20        30           10         30 ÷ 10 = 3
20 < t ≤ 40        24           20         24 ÷ 20 = 1.2
40 < t ≤ 60        11           20         11 ÷ 20 = 0.55
Total             100
```

Steps:

1. Add a class width column and a frequency density column, as above.
2. Horizontal axis: time, with a continuous, even scale from 0 to 60. Every class edge goes at its true position.
3. Vertical axis: label it **Frequency density**, with an even scale from 0 to at least 5.
4. Draw each bar from its lower to its upper boundary, with height equal to its frequency density. Bars touch; there are no gaps.

Check one bar by area: the 20 < t ≤ 40 bar is 20 wide and 1.2 high, and 20 × 1.2 = 24, the frequency. If each bar's area matches its frequency, the histogram is right.

### The modal class

The **modal class** is the class with the tallest bar, so the highest **frequency density**, not the highest frequency. Here it is **5 < t ≤ 10** (density 5), even though 10 < t ≤ 20 has the highest frequency (30). The tallest bar shows where the data are most concentrated.

## Reading a histogram

To read frequencies back, reverse the calculation: frequency = frequency density × class width.

### Worked example 2

A histogram shows the heights, h cm, of some seedlings. The bars are:

```
Class          Bar height (frequency density)
0 < h ≤ 4             2.5
4 < h ≤ 6             9
6 < h ≤ 8            11
8 < h ≤ 12            4
12 < h ≤ 20           0.75
```

**(a) Find the frequency of each class and the total number of seedlings.**

```
0 < h ≤ 4:    4 × 2.5  = 10
4 < h ≤ 6:    2 × 9    = 18
6 < h ≤ 8:    2 × 11   = 22
8 < h ≤ 12:   4 × 4    = 16
12 < h ≤ 20:  8 × 0.75 = 6
Total = 10 + 18 + 22 + 16 + 6 = 72
```

**(b) Estimate the number of seedlings taller than 10 cm.**

The value 10 falls inside the class 8 < h ≤ 12. Assume the seedlings in that class are spread evenly across it. The part from 10 to 12 is half the class, so it holds about half the frequency, which is the area of that part of the bar:

```
10 < h ≤ 12:  width 2 × density 4 = 8
12 < h ≤ 20:  6
Estimate = 8 + 6 = 14 seedlings
```

The answer is an **estimate**, because the real heights within the class are not known.

**(c) Estimate the mean height.** (This uses the grouped mean method of E9.3.)

```
Midpoints:  2, 5, 7, 10, 16
Sum of f × midpoint = 10×2 + 18×5 + 22×7 + 16×10 + 6×16
                    = 20 + 90 + 154 + 160 + 96 = 520
Estimated mean = 520 ÷ 72 = 7.22 cm (3 s.f.)
```

## When the vertical scale is missing

Some questions show a histogram with no numbers on the vertical axis, but give the frequency of one class. Use that bar to find the scale.

### Worked example 3

On a histogram of the masses of parcels, the bar for 10 < m ≤ 15 is 6 cm tall and represents 15 parcels. The bar for 15 < m ≤ 25 is 4 cm tall, and the bar for 0 < m ≤ 10 is 3.2 cm tall. How many parcels are in each of these two classes?

```
Known bar:  frequency density = 15 ÷ 5 = 3, shown by a height of 6 cm
            so 1 cm of height = 3 ÷ 6 = 0.5 frequency density

15 < m ≤ 25:  density = 4 × 0.5   = 2     frequency = 2 × 10   = 20 parcels
0 < m ≤ 10:   density = 3.2 × 0.5 = 1.6   frequency = 1.6 × 10 = 16 parcels
```

An alternative uses area directly. The known bar has area 5 × 6 = 30 square units for 15 parcels, so 1 parcel is 2 square units. The 15 < m ≤ 25 bar has area 10 × 4 = 40 square units, which is 40 ÷ 2 = 20 parcels. Both methods agree.

Sense-check every frequency you find: a fraction of a parcel, such as 22.5, means a bar height or a class width has been misread.

## Completing a table from a histogram, and the reverse

A common Paper 4 question gives a table with some frequencies missing and a histogram with some bars missing. Work class by class:

- If you know the frequency, divide by the width to get the bar height.
- If you know the bar height, multiply by the width to get the frequency.

Always label the vertical axis "Frequency density" if you draw it. A histogram with "Frequency" on the vertical axis is a different (wrong) diagram when the widths are unequal.

## Common mistakes

- Plotting frequency instead of frequency density.
- Using the wrong class width, for example 9 instead of 10 for 10 < t ≤ 20, by subtracting carelessly or counting grid lines.
- Leaving gaps between bars, or drawing every bar the same width.
- An uneven horizontal scale, so that wide classes look narrow.
- Giving the modal class as the class with the highest frequency rather than the tallest bar.
- Reading a bar's height as its frequency.
- Taking a "fraction of a class" from the bar height instead of the bar area.
- Forgetting to label the vertical axis "Frequency density".

## Exam technique

- **"Complete the histogram"**: work out the frequency density for each missing bar first and write it in the table; this earns method credit even if a bar is drawn slightly wrongly.
- **"Complete the frequency table"**: frequency = frequency density × class width, one line of working per class.
- **"Estimate"**: when a value falls inside a class, assume the data are spread evenly and use the area of the relevant part of the bar.
- **Paper 2** (non-calculator): widths and densities are chosen to give neat arithmetic, such as 24 ÷ 20 = 1.2. **Paper 4**: give non-exact answers to 3 significant figures.

## Next steps

- Quick recall: [histograms revision notes](/resources/cambridge-igcse-mathematics-0580-histograms-cambridge-igcse-maths-revision-notes/).
- Marked questions: [histograms practice questions](/resources/cambridge-igcse-mathematics-0580-histograms-cambridge-igcse-maths-practice/).
- Grouped means and modal classes: [averages and range study guide](/resources/cambridge-igcse-mathematics-0580-averages-and-range-cambridge-igcse-maths/).
- Another diagram for grouped data: [cumulative frequency diagrams study guide](/resources/igcse-mathematics-0580-cumulative-frequency-diagrams/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027* (Version 3), Subject content, Topic 9 Statistics, E9.7 Histograms (C9.7: "Extended content only").
