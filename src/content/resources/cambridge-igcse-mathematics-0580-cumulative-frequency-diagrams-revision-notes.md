---
title: "Cambridge IGCSE Mathematics (0580): Cumulative frequency diagrams -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 9 – Statistics"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9.6
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "cumulative-frequency-diagrams-cambridge-igcse-maths"
description: "Revision notes for Cambridge IGCSE Maths 0580 section 9.6 (Extended): cumulative frequency tables and curves, median, quartiles, IQR and percentiles."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **E9.6 Cumulative frequency diagrams** from Topic 9 Statistics of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The syllabus lists C9.6 as "Extended content only", so this whole page is for **Extended** candidates (Papers 2 and 4). You must "Draw and interpret cumulative frequency tables and diagrams" and "Estimate and interpret the median, percentiles, quartiles and interquartile range from cumulative frequency diagrams". The notes say plotted points should be clearly marked, for example as small crosses, "and be joined with a smooth curve".

The full teaching is in the [cumulative frequency diagrams study guide](/resources/igcse-mathematics-0580-cumulative-frequency-diagrams/). Test yourself afterwards with the [cumulative frequency practice questions](/resources/cambridge-igcse-mathematics-0580-cumulative-frequency-diagrams-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Cumulative frequency | Running total of the frequencies up to a value |
| Upper class boundary | The top of a class; each cumulative frequency is plotted here |
| Cumulative frequency diagram (curve) | Points (upper boundary, cumulative frequency) joined with a smooth curve |
| Median | Value at cumulative frequency n/2 |
| Lower quartile (LQ) | Value at cumulative frequency n/4 |
| Upper quartile (UQ) | Value at cumulative frequency 3n/4 |
| Interquartile range (IQR) | UQ − LQ: spread of the middle half |
| p-th percentile | Value at cumulative frequency (p ÷ 100) × n |

Here n is the total frequency, which is the last cumulative frequency.

## Building the table

```
1. Running total: add each class frequency to the total so far.
2. Write each total against the UPPER boundary: "m ≤ 140", not "120–140".
3. Check: the last cumulative frequency = total frequency n.
```

**Small reminder.** Masses of 80 apples.

```
Mass m (g)         Frequency   Cumulative frequency
100 < m ≤ 120           4          m ≤ 120:   4
120 < m ≤ 140          12          m ≤ 140:  16
140 < m ≤ 160          24          m ≤ 160:  40
160 < m ≤ 180          28          m ≤ 180:  68
180 < m ≤ 200          12          m ≤ 200:  80
```

## Drawing the curve

- Horizontal axis: the variable. Vertical axis: **cumulative frequency**, from 0 to n.
- Plot (upper boundary, cumulative frequency) as small crosses.
- Add the starting point (lowest boundary, 0): here (100, 0).
- Join with a **smooth curve** through every cross. The curve never goes down.

Points for the apples: (100, 0), (120, 4), (140, 16), (160, 40), (180, 68), (200, 80).

## Reading values

```
Median:            across at n/2,      down to the value
LQ:                across at n/4,      down
UQ:                across at 3n/4,     down
IQR:               UQ − LQ             (a subtraction, not a reading)
p-th percentile:   across at p% of n,  down
```

For the apples (n = 80): median at 40, LQ at 20, UQ at 60, 90th percentile at 72.

- The median height 40 is a plotted point, so the median is **160 g**.
- LQ height 20 lies between (140, 16) and (160, 40), so the LQ is a little above 140 g (about 143 g).
- UQ height 60 lies between (160, 40) and (180, 68): about 174 g. IQR ≈ 174 − 143 = 31 g.

Use the plotted points to check each reading is in the right class.

## Reading the other way

```
"How many are less than x?"  up from x to the curve, across: read the cumulative frequency.
"How many are more than x?"  n − (cumulative frequency at x).
"How many between a and b?"  (cumulative frequency at b) − (cumulative frequency at a).
```

From the table alone: more than 140 g is 80 − 16 = 64 apples; between 140 g and 180 g is 68 − 16 = 52 apples.

## Interpreting

- **Steepest part** of the curve: where the data are most concentrated.
- **Comparing** two distributions: compare the medians (typical value) and the IQRs (consistency), in context.
- All values read from the curve are **estimates**: the individual data values are unknown, and hand-drawn curves differ slightly.

## Exam traps

- Plotting at the class midpoint or lower boundary instead of the upper boundary.
- Forgetting the starting point at cumulative frequency 0.
- Joining the crosses with ruled straight lines, or drawing a curve that misses them.
- Reading the median across at the middle of the horizontal axis instead of at n/2 on the vertical axis.
- Reading from the frequency, not the cumulative frequency.
- Giving the IQR as a reading instead of UQ − LQ.
- "More than" questions answered with the cumulative frequency itself, without subtracting from n.
- Reading the scale wrongly: check what one small square stands for on each axis.
- A last cumulative frequency that does not equal n, from an adding slip.

## Quick self-test

Use the apple data above for questions 1 to 9.

1. Write down the point plotted for the class 160 < m ≤ 180.
2. Which point is plotted to start the curve?
3. At what cumulative frequency do you read the lower quartile?
4. Write down the median.
5. Which class contains the upper quartile?
6. How many apples have a mass of more than 140 g?
7. How many apples have a mass of more than 140 g but no more than 180 g?
8. At what cumulative frequency do you read the 90th percentile?
9. The curve gives about 54 apples with mass 170 g or less. About how many are heavier than 170 g?
10. Why is a median found from a cumulative frequency diagram only an estimate?
11. A second orchard's apples have median 152 g and IQR 22 g. The first orchard's median is 160 g and IQR is about 31 g. Make two comparisons.
12. What does the steepest part of a cumulative frequency curve show?

### Answers

1. **(180, 68).**
2. **(100, 0).**
3. 80 ÷ 4 = **20.**
4. **160 g** (the curve passes through (160, 40), and 40 = 80 ÷ 2).
5. Height 60 is between 40 and 68, so **160 < m ≤ 180.**
6. 80 − 16 = **64.**
7. 68 − 16 = **52.**
8. 0.9 × 80 = **72.**
9. 80 − 54 = **26.**
10. The data are grouped, so individual values are unknown; the curve **assumes** how values spread within each class.
11. The first orchard's apples are **heavier on average** (median 160 g against 152 g); the second orchard's masses are **more consistent** (IQR 22 g against about 31 g).
12. Where the data are **most concentrated** (most values per unit on the horizontal axis).

## Next steps

- Re-read the worked examples in the [cumulative frequency diagrams study guide](/resources/igcse-mathematics-0580-cumulative-frequency-diagrams/).
- Try the [cumulative frequency practice questions](/resources/cambridge-igcse-mathematics-0580-cumulative-frequency-diagrams-practice/).
- Quartiles of individual data: [averages and range revision notes](/resources/cambridge-igcse-mathematics-0580-averages-and-range-revision-notes/).
- Unequal class widths: [histograms revision notes](/resources/cambridge-igcse-mathematics-0580-histograms-revision-notes/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027 (Version 3), Cambridge International. Topic 9 Statistics, E9.6 Cumulative frequency diagrams (C9.6: "Extended content only").
