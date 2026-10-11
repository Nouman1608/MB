---
title: "Cambridge O Level Statistics: Venn, box-and-whisker and stem-and-leaf diagrams, choosing and interpreting representations (4040) -- Revision Notes"
seoTitle: "O Level Statistics 4040 Venn, Box, Stem-Leaf Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Venn, box-and-whisker and stem-and-leaf diagrams, choosing and interpreting representations"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 17
syllabusTopics:
  - qualification: "o-level"
    topic: "summary-representation-of-data-4040"
    subtopic: "representation-pictorial-diagrammatic-4040"
  - qualification: "o-level"
    topic: "summary-representation-of-data-4040"
    subtopic: "purpose-use-representation-advantages-disadvantages-4040"
  - qualification: "o-level"
    topic: "summary-representation-of-data-4040"
    subtopic: "interpretation-data-tabular-pictorial-diagrammatic-4040"
description: "Condensed revision notes on Venn, box-and-whisker and stem-and-leaf diagrams, choosing between them and comparing data, for O Level Statistics 4040."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 2.2 to 2.4 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027, version 1: Venn, box-and-whisker and stem-and-leaf diagrams, then choosing and interpreting representations. The detailed teaching and longer examples are in [the study guide](/resources/cambridge-o-level-statistics-venn-box-and-whisker-and-stem-and-leaf-diagrams/). Test yourself with [the practice set](/resources/cambridge-o-level-statistics-venn-box-and-whisker-and-stem-and-leaf-diagrams-practice/), use [the 4040 hub](/boards/cambridge/o-level/statistics/) and [the printable checklist](/checklists/cambridge/o-level/statistics/), and find gaps with the [free diagnostics](/diagnostics/). The wider topic is in [the topic 2 revision notes](/resources/o-level-statistics-summary-representation-revision-notes/).

## Venn diagrams (2.2)

| Symbol | Meaning |
|---|---|
| n(A) | number of items in A |
| A∩B | in both A and B |
| A∪B | in A or B or both |
| A′ | not in A |

Key results:

- n(A∪B) = n(A) + n(B) - n(A∩B)
- n(A′) = total - n(A)
- The regions of the whole diagram add to the total, including "neither".

Method in steps:

1. Fill the centre first.
2. Subtract the centre from each pair total to get "pair only" regions.
3. Subtract everything already placed from each circle total to get "only" regions.
4. Neither = total minus everything inside the circles.
5. Add all regions to check.

Worked reminder. Total 30. n(A) = 14, n(B) = 11, n(A∩B) = 5. Then n(A∪B) = 14 + 11 - 5 = 20, so neither = 30 - 20 = **10**. A only = 9, B only = 6.

Three-set reminder. Total 50. n(A) = 20, n(B) = 18, n(C) = 15. Pairs: A and B 7, B and C 6, A and C 5. All three 3.

```
Centre = 3
A and B only = 7 - 3 = 4
B and C only = 6 - 3 = 3
A and C only = 5 - 3 = 2
A only = 20 - 4 - 2 - 3 = 11
B only = 18 - 4 - 3 - 3 = 8
C only = 15 - 3 - 2 - 3 = 7
Inside circles = 11 + 8 + 7 + 4 + 3 + 2 + 3 = 38
Neither = 50 - 38 = 12
```

Exactly one set: 11 + 8 + 7 = **26**. A common slip is subtracting the whole pair total (7) instead of only the part outside the centre.

## Stem-and-leaf diagrams (2.2)

Rules checklist:

- Stems in order, no missing stems.
- Leaves in order, equally spaced.
- A key with units, for example 3 | 4 means 3.4 kg.
- Back-to-back: leaves ordered outwards from the stem on both sides, with a key for each side.

Reading it:

| Want | How |
|---|---|
| Frequency | count the leaves |
| Mode | the most repeated stem-and-leaf pair |
| Median | middle leaf (odd n) or mean of the two middle leaves (even n) |
| Range | largest minus smallest |
| Quartiles | median of each half |

Worked reminder. Values: 7, 9, 12, 12, 14, 15, 19, 21, 22 (n = 9).

```
0 | 7 9
1 | 2 2 4 5 9
2 | 1 2
Key: 1 | 2 means 12
```

Median is the 5th value, 14. Mode 12. Range 22 - 7 = 15. Lower half 7, 9, 12, 12 gives 10.5. Upper half 15, 19, 21, 22 gives 20. IQR = 20 - 10.5 = **9.5**.

## Box-and-whisker diagrams (2.2)

Five numbers: minimum, lower quartile, median, upper quartile, maximum.

| Measure | Calculation |
|---|---|
| Range | maximum - minimum |
| IQR | upper quartile - lower quartile |
| Box width | the IQR |
| Box holds | about half the data |

Method for small lists in this set of notes: order the data, find the median, then find the median of the lower half and of the upper half (leave the median out of both halves when n is odd). If your course uses another convention, use that and state it.

Method in steps for drawing:

1. Order the data.
2. Find the five numbers.
3. Draw one scale and mark the five numbers above it.
4. Draw a box from the lower to the upper quartile, a line at the median, and whiskers to the minimum and maximum.
5. Draw several diagrams on the same scale when comparing.

Worked reminder. Data 3.1, 3.4, 3.8, 4.0, 4.2, 4.5, 4.9, 5.3 (n = 8). Median = (4.0 + 4.2) ÷ 2 = 4.1. Lower half 3.1, 3.4, 3.8, 4.0 gives 3.6. Upper half 4.2, 4.5, 4.9, 5.3 gives 4.7. Five numbers: 3.1, 3.6, 4.1, 4.7, 5.3. IQR = **1.1**, range = **2.2**.

## Choosing a representation (2.3)

| Representation | Use it to | Advantage | Disadvantage |
|---|---|---|---|
| Venn | show overlaps and "neither" | counts at a glance | hard with many sets; counts only |
| Stem-and-leaf | show every value of a small set | no data lost; shape visible | long for large sets |
| Back-to-back | compare two small sets | values kept | only two sets |
| Box-and-whisker | compare median and spread | quick; any data size | values lost; no mean |

Sentence frame: "A [diagram] is suitable because it [purpose]. Its advantage is [x], but it [disadvantage]."

## Interpreting and comparing (2.4)

Comparison checklist:

1. One average (median).
2. One spread (IQR or range).
3. A sentence in context, using comparison words: "higher", "whereas", "more consistent".
4. A conclusion that answers the question asked.

Say what a measure means in context. "The median is higher" is incomplete. "The typical journey is longer for group A" answers the question.

For tables: read headings and units, check counts versus percentages, and compare like with like.

Worked reminder (comparison). Two classes sat the same test. Class 1: minimum 35, lower quartile 57, median 64, upper quartile 71, maximum 89. Class 2: minimum 30, lower quartile 56, median 64, upper quartile 80, maximum 95.

```
IQR:   Class 1 = 71 - 57 = 14,   Class 2 = 80 - 56 = 24
Range: Class 1 = 89 - 35 = 54,   Class 2 = 95 - 30 = 65
```

Model sentence: "Both classes have the same median mark of 64, so the typical pupil did equally well. Class 1 is more consistent, because its IQR (14) is smaller than Class 2's (24). Class 2 has both the highest and the lowest marks."

Reading a table in a comparison: quote figures from the same row or column, name the unit, and say whether you compared counts or percentages. If the groups are different sizes, compare percentages or fractions, not raw counts.

Worked reminder (table). Club X has 240 members and 60 took part in the quiz. Club Y has 80 members and 24 took part. Club X has more quiz entrants (60 against 24), but the proportions are 60 ÷ 240 = 25% and 24 ÷ 80 = 30%. A fair comparison says Club Y has the higher rate of participation, while Club X has the larger number.

## Must-know distinctions

- Range uses the extremes. IQR uses the middle half and is not affected by one extreme value.
- A box plot median is not the mean.
- Venn pair totals include the centre. "Only" regions do not.
- A stem-and-leaf diagram keeps values. A box plot summarises them.
- Spread and average are separate ideas. Two groups can have the same median and very different spread.

## Quick self-test

1. In a group of 30, n(A) = 14, n(B) = 11 and n(A∩B) = 5. How many are in neither set?
2. Find the five numbers for 7, 9, 12, 12, 14, 15, 19, 21, 22.
3. For 3.1, 3.4, 3.8, 4.0, 4.2, 4.5, 4.9, 5.3, state the lower quartile, median and upper quartile.
4. A row in a stem-and-leaf diagram reads 2 | 4 4 9 and the key is 2 | 4 means 2.4 cm. Write out the three values.
5. What fraction of the data does the box in a box plot hold?
6. Which of Venn, stem-and-leaf or box plot keeps every original value?
7. In a back-to-back diagram, where is the smallest leaf of each row placed?
8. Why can you not read the mean from a box plot?
9. You must compare the spread of marks for five classes. Which representation is best, and why?
10. A universal set has 50 items and n(A) = 18. Find n(A′).

### Answers

1. 30 - (14 + 11 - 5) = 30 - 20 = **10**.
2. **7, 10.5, 14, 20, 22**.
3. Lower quartile **3.6**, median **4.1**, upper quartile **4.7**.
4. **2.4 cm, 2.4 cm and 2.9 cm**.
5. About **half** (the middle 50%).
6. **Stem-and-leaf**.
7. Nearest the stem.
8. It shows only the five summary numbers, and the mean needs all the values.
9. **Box-and-whisker diagrams**, drawn on one scale, because they show median and spread and compare directly.
10. 50 - 18 = **32**.

## Where marks are usually lost

- Drawing a stem-and-leaf diagram without a key, or with unordered leaves.
- Missing out a stem that has no leaves.
- Reading a Venn pair total as an "only" region and placing it without removing the centre.
- Forgetting the "neither" region when the total is bigger than the sum of the circles.
- Quoting a median or range without comparing it with the other group.
- Writing comparison answers with numbers alone, and no statement about context.
- Naming an advantage that does not match the purpose given in the question.
- Calling the median the mean, or reading a box plot as if it showed every value.
- Drawing two box plots on different scales.

## Official syllabus

Cambridge O Level Statistics 4040, syllabus for examination in 2025, 2026 and 2027 (version 1), published by Cambridge Assessment International Education, part of Cambridge University Press & Assessment. Sections 2.2, 2.3 and 2.4.
