---
title: "Cambridge O Level Statistics (4040): Representation in pictorial or diagrammatic form"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 2 – Summary representation of data"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 2.2
syllabusTopics:
  - qualification: "o-level"
    topic: "summary-representation-of-data-4040"
    subtopic: "representation-pictorial-diagrammatic-4040"
description: "Drawing the diagrams named in 4040 section 2.2 accurately: choosing keys and scales, awkward pie angles, comparative pie radii, Venn unknowns and box plots."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: "Representation in pictorial or diagrammatic form". The syllabus lists the diagrams included: pictograms, pie charts, comparative pie charts, Venn diagrams, bar charts, sectional and percentage bar charts, dual bar charts, box-and-whisker diagrams and stem-and-leaf diagrams.

The basic construction of each diagram is taught in two existing guides: [tables and bar-type, pie and pictorial charts](/resources/cambridge-o-level-statistics-tables-and-bar-type-pie-and-pictorial-charts/) and [Venn, box-and-whisker and stem-and-leaf diagrams](/resources/cambridge-o-level-statistics-venn-box-and-whisker-and-stem-and-leaf-diagrams/). This page concentrates on the harder decisions: choosing a key or scale, handling angles that are not whole numbers, working backwards from comparative pie charts, Venn diagrams with an unknown, and drawing a box-and-whisker diagram from three-digit data. Follow up with the [diagram revision notes](/resources/cambridge-o-level-statistics-4040-representation-pictorial-diagrammatic-revision-notes/) and the [diagram practice questions](/resources/cambridge-o-level-statistics-4040-representation-pictorial-diagrammatic-practice/).

## What this unit covers

| Diagram named in 2.2 | Data it suits | Must include |
|---|---|---|
| Pictogram | Category counts | Key; equal-sized symbols |
| Pie chart | Parts of one whole | Sector labels; angles adding to 360° |
| Comparative pie charts | Parts of two wholes of different size | Radii in the ratio of the square roots of the totals |
| Venn diagram | Overlapping categories | Rectangle for the whole group; counts in every region |
| Bar chart | Category or discrete counts | Equal widths and gaps; labelled scale from zero |
| Dual bar chart | Two groups across the same categories | Paired bars; key |
| Sectional bar chart | Totals and their parts | Stacked sections; key |
| Percentage bar chart | Proportions in groups of different size | Bars of equal height for 100% |
| Stem-and-leaf diagram | Small sets of numerical data | Ordered leaves; key with units |
| Box-and-whisker diagram | Numerical data summarised by five values | Linear scale; median line; whiskers to the extremes |

## Standards that earn the accuracy marks

- A **title** and labelled axes or sectors.
- A **linear scale** with equal steps, starting at zero for bar-type charts.
- A **key** wherever a symbol, shading or stem needs explaining.
- **Working shown** for every calculated length or angle, because a correct method still earns credit if a measurement is slightly off.
- A sharp pencil, ruler and protractor; plotted heights checked against the scale.

## Pictograms: choosing the key

The key should turn every frequency into whole, half or quarter symbols.

**Worked example 1.** Guests at a guest house on five nights: 45, 60, 27, 54, 36.

```
Key of 10: 4.5, 6, 2.7, 5.4, 3.6 symbols   (2.7 and 3.6 cannot be drawn clearly)
Key of 6:  7.5, 10, 4.5, 9, 6 symbols      (all whole or half symbols)
```

Use one symbol = 6 guests. Reading back is the reverse: 4½ symbols represent 4.5 × 6 = 27 guests. If a key gives quarter symbols, say so in your working, because a quarter is hard to draw exactly.

## Pie charts when the angles are awkward

**Worked example 2.** 52 commuters: bus 19, car 14, walk 11, cycle 5, train 3.

```
One person = 360 ÷ 52 = 6.923...°
Bus   19 × 6.923 = 131.5°
Car   14 × 6.923 =  96.9°
Walk  11 × 6.923 =  76.2°
Cycle  5 × 6.923 =  34.6°
Train  3 × 6.923 =  20.8°
Total                360.0°
```

To the nearest degree the angles are 132°, 97°, 76°, 35° and 21°, which add to 361°. A protractor cannot draw tenths of a degree, so draw to the nearest degree but trim the angle that was rounded up by the most: 131.5° became 132°, so draw it as 131°. The total is then 360° and every sector is within 1° of its true angle.

Keep the unrounded value (6.923...) in the calculator for each multiplication. Rounding 6.923 to 7 first would give a total of 364°.

## Comparative pie charts: working backwards

For comparative pie charts the **area** of each circle is proportional to its total, so:

```
(r₂ / r₁)² = total₂ / total₁
r₂ = r₁ × √(total₂ / total₁)      total₂ = total₁ × (r₂ / r₁)²
```

**Worked example 3.** A shop's March sales of 1200 items are shown by a pie chart of radius 4 cm. The April chart has radius 5 cm. In March the sportswear sector is 150°; in April it is 120°.

```
April total = 1200 × (5/4)² = 1200 × 1.5625 = 1875 items
Sportswear in March = 150/360 × 1200 = 500 items
Sportswear in April = 120/360 × 1875 = 625 items
```

The April sector has the smaller angle but shows more items, because the April circle stands for a larger total. An angle compares **shares**; only the angle combined with the total compares **amounts**.

A common error is to scale the radius in the same ratio as the totals: radius 5 cm against 4 cm would then suggest a total of 1500, not 1875.

## Venn diagrams with an unknown

When one region is unknown, call it x, write every region in terms of x, and use the total.

**Worked example 4.** 80 people are asked which of three newspapers A, B and C they read. 20 read A only, 15 read C only, and twice as many read B only as read all three. 6 read A and B but not C, 5 read B and C but not A, and 4 read A and C but not B. 12 read none.

```
Let x = number reading all three; B only = 2x
20 + 2x + 15 + 6 + 5 + 4 + x + 12 = 80
62 + 3x = 80, so x = 6
B only = 12
```

From the completed diagram: number reading A = 20 + 6 + 4 + 6 = 36; number reading exactly two papers = 6 + 5 + 4 = 15; number reading B = 12 + 6 + 5 + 6 = 29.

Write the region values in the diagram, not just in the working, when asked to complete it.

## Stem-and-leaf with three-digit data

For values such as 142 g, the stem is the first two digits and the leaf is the last digit.

**Worked example 5.** Masses of 15 apples, in grams: 142, 155, 138, 161, 149, 152, 147, 133, 158, 166, 151, 144, 139, 157, 150.

```
13 | 3 8 9
14 | 2 4 7 9
15 | 0 1 2 5 7 8
16 | 1 6
Key: 14 | 2 means 142 g
```

Leaves are ordered and evenly spaced, so the row lengths act like a bar chart turned on its side. Count: 3 + 4 + 6 + 2 = 15.

## Box-and-whisker diagram from the stem-and-leaf

Using the halves method for the quartiles of a list:

```
n = 15, median = 8th value = 150
Lower half (7 values): 133 138 139 142 144 147 149 → Q1 = 142
Upper half (7 values): 151 152 155 157 158 161 166 → Q3 = 157
Minimum 133, maximum 166
```

Draw a scale from 130 g to 170 g with, say, 2 cm for 10 g. Then:

1. Draw the box from 142 to 157, above the scale.
2. Draw a vertical line across the box at 150.
3. Draw whiskers from the box to 133 and to 166.
4. Label the scale "Mass (g)" and give the diagram a title.

The diagram is only as accurate as its scale: the median line at 150 must be 1.6 cm from the left end of the box (8 g at 2 cm per 10 g), not halfway along it.

To compare two data sets, draw both box-and-whisker diagrams above **one** common scale.

## Common errors

- A pictogram key that forces fractions such as 0.7 of a symbol.
- Rounding the angle for one item before multiplying.
- Angles that add to 359° or 361° with no adjustment or comment.
- Comparative pie radii in the ratio of the totals instead of their square roots.
- A Venn region that double-counts the centre.
- A stem-and-leaf diagram with unordered leaves, a missing stem or no units in the key.
- Box-and-whisker diagrams on separate scales, or with the median drawn by eye in the middle of the box.

## Exam technique

- **Draw** or **construct**: show the calculation of every angle, height or radius before drawing.
- **Complete the Venn diagram**: write a number in every region, including outside the circles.
- **Find the total represented by the second pie chart**: square the ratio of the radii.
- **Calculate the radius**: give it to 2 or 3 significant figures and use it in the drawing.

## Next steps

Condense the methods with the [revision notes on diagrams](/resources/cambridge-o-level-statistics-4040-representation-pictorial-diagrammatic-revision-notes/), then practise with the [diagram practice questions](/resources/cambridge-o-level-statistics-4040-representation-pictorial-diagrammatic-practice/). Choosing between diagrams is covered in [purpose, advantages and disadvantages of representations](/resources/cambridge-o-level-statistics-4040-purpose-use-representation-advantages-disadvantages/).

## Frequently asked questions

**Why do comparative pie charts use square roots?**
Because the area of a circle is proportional to the square of its radius. For area to be proportional to the total, the radius must be proportional to the square root of the total.

**What should I do if my pie chart angles do not add to 360°?**
Check your arithmetic first. If the difference comes from rounding, adjust the angle that was rounded by the largest amount so the total is 360°.

**Which quartile method should I use for a box-and-whisker diagram?**
Use the method you have been taught, show the ordered values and positions, and use the same method throughout an answer.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 2, section 2.2: Representation in pictorial or diagrammatic form, including pictograms, pie charts, comparative pie charts, Venn diagrams, bar charts, sectional and percentage bar charts, dual bar charts, box-and-whisker diagrams and stem-and-leaf diagrams.
