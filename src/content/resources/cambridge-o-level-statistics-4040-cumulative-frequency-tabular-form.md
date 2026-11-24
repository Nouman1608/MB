---
title: "Cambridge O Level Statistics (4040): Cumulative frequency distributions: representation in tabular form"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 4 – Formation of frequency distributions into cumulative frequency distributions"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 4.1
syllabusTopics:
  - qualification: "o-level"
    topic: "formation-of-cumulative-frequency-distributions-4040"
    subtopic: "cumulative-frequency-tabular-form-4040"
description: "Cumulative frequency tables in depth for 4040: discrete and grouped data, fewer-than and more-than wording, cumulative percentages and unknown frequencies."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: cumulative frequency distributions, "Representation in tabular form". It sits in topic 4, "Formation of frequency distributions into cumulative frequency distributions", and leads into the graphs of section 4.2 and the quartiles and percentiles of section 5.3.

The basic running-total method, class boundaries and plotting points are covered in the guide to [cumulative frequency tables, curves and polygons](/resources/cambridge-o-level-statistics-cumulative-frequency-tables-curves-and-polygons/). This page goes deeper on the table itself: the exact meaning of each entry for discrete and continuous data, the wording "fewer than", "at most" and "at least", cumulative percentages, "more than" tables, and tables with unknown frequencies. Afterwards, use the [cumulative frequency table revision notes](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form-revision-notes/) and the [cumulative frequency table practice questions](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form-practice/).

## What this unit covers

| Part of 4.1 | What you must be able to do |
|---|---|
| Forming the table | Turn an ungrouped or grouped frequency distribution into running totals |
| Labelling | Label each total with the value or upper boundary it applies to |
| Reading | Answer "fewer than", "at most", "at least", "more than" and "between" questions |
| Converting | Recover frequencies from cumulative frequencies, including unknowns |
| Cumulative percentages | Express totals as percentages of n to compare groups |

## What a cumulative frequency means

A cumulative frequency is a count of observations **up to and including** a stated value or boundary. Every entry must say what it counts. A table whose top row reads "Cumulative frequency: 6, 17, 26, ..." with no labels is incomplete.

## Discrete ungrouped data: the wording matters

**Worked example 1.** Goals scored by a team in 35 matches.

| Goals, x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Frequency | 6 | 11 | 9 | 5 | 3 | 1 |
| Cumulative frequency (≤ x) | 6 | 17 | 26 | 31 | 34 | 35 |

With whole numbers, "fewer than 3" and "at most 2" mean the same thing.

```
Fewer than 3 goals  = number scoring at most 2  = 26
At most 3 goals     = 31
At least 3 goals    = 35 − (at most 2) = 35 − 26 = 9
More than 3 goals   = 35 − 31 = 4
From 1 to 4 goals   = (at most 4) − (at most 0) = 34 − 6 = 28
```

The safest habit is to translate every phrase into "at most" form before reading the table.

## Grouped data: label with the upper boundary

For continuous data, the cumulative frequency of a class is labelled with its **upper class boundary**. Use the same inequality sign as the classes.

**Worked example 2.** Masses of 80 eggs, m grams.

| Mass, m g | 45 ≤ m < 50 | 50 ≤ m < 55 | 55 ≤ m < 60 | 60 ≤ m < 65 | 65 ≤ m < 70 | 70 ≤ m < 75 |
|---|---|---|---|---|---|---|
| Frequency | 4 | 14 | 27 | 23 | 9 | 3 |

| Mass | m < 45 | m < 50 | m < 55 | m < 60 | m < 65 | m < 70 | m < 75 |
|---|---|---|---|---|---|---|---|
| Cumulative frequency | 0 | 4 | 18 | 45 | 68 | 77 | 80 |
| Cumulative percentage | 0 | 5 | 22.5 | 56.25 | 85 | 96.25 | 100 |

The starting entry, m < 45 with cumulative frequency 0, is part of the table: it becomes the first point of the graph in section 4.2.

Questions that use boundaries can be answered exactly from the table:

```
Eggs lighter than 60 g          = 45
Eggs of 65 g or more            = 80 − 68 = 12
Eggs from 55 g up to 65 g       = 68 − 18 = 50
Percentage lighter than 65 g    = 85%
```

A question about a value that is **not** a boundary, such as "lighter than 62 g", needs an estimate: by linear interpolation in the table or by reading a graph (section 4.2). From the table: 45 + (2/5) × 23 = 54.2, so about 54 eggs.

### Discrete data in groups

Marks out of 50 grouped as 0–9, 10–19, 20–29, ... are whole numbers. Label the cumulative frequencies "≤ 9", "≤ 19", "≤ 29", ..., or use the boundaries 9.5, 19.5, 29.5 if a graph will follow. Both describe the same counts.

### Ages in completed years

Classes 0–19, 20–39, 40–59 years, with ages in completed years, have upper boundaries 20, 40 and 60. Label them "under 20", "under 40", "under 60".

## Cumulative percentages

A cumulative percentage is the cumulative frequency divided by n and multiplied by 100. It lets you compare two distributions with different totals at the same boundary, and it reads directly as a percentile at that boundary: 85% of the eggs are lighter than 65 g.

## "More than" cumulative tables

Some data are presented counting downwards: how many are **at least** each lower boundary. Using the egg data:

| Mass | m ≥ 45 | m ≥ 50 | m ≥ 55 | m ≥ 60 | m ≥ 65 | m ≥ 70 | m ≥ 75 |
|---|---|---|---|---|---|---|---|
| Number of eggs | 80 | 76 | 62 | 35 | 12 | 3 | 0 |

Each entry is 80 minus the "less than" entry at the same boundary. Recognise which kind of table you have before using it: a "more than" table **decreases** from n to 0.

## Working backwards and unknown frequencies

Frequency of a class = cumulative frequency at its upper boundary − cumulative frequency at its lower boundary.

**Worked example 3.** The frequencies of five classes are 5, a, 12, b and 4. The total is 40, and the cumulative frequency at the end of the third class is 25.

```
5 + a + 12 = 25        so a = 8
5 + 8 + 12 + b + 4 = 40  so b = 11
Cumulative frequencies: 5, 13, 25, 36, 40
```

Check: the last total equals 40.

## Common errors

- Labelling a cumulative frequency with the class midpoint or the lower boundary.
- Reading "fewer than 3" at x = 3 for discrete data.
- Leaving out the starting entry with cumulative frequency 0.
- Using a "more than" table as if it were a "less than" table.
- Giving an exact answer from the table for a value that is not a boundary.
- Not checking that the final cumulative frequency equals n.

## Exam technique

- **Form the cumulative frequency table**: give every entry its label ("m < 60") and show the additions.
- **Find the number of ...**: rewrite the phrase as "at most" or "less than", then subtract from n if needed.
- **Find the percentage**: divide by n, not by the number of classes.
- **Estimate**: say it is an estimate and show the interpolation.

## More on this topic

Condense the reading rules with the [revision notes on cumulative frequency tables](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form-revision-notes/), then practise with the [cumulative frequency table practice questions](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-tabular-form-practice/). The graphs come next in [cumulative frequency in graphical form](/resources/cambridge-o-level-statistics-4040-cumulative-frequency-graphical-form/).

## Frequently asked questions

**For discrete data, is "less than 4" the same as "at most 4"?**
No. For whole numbers, "less than 4" means at most 3. Read the cumulative frequency at 3.

**Why include a cumulative frequency of 0 at the start?**
It records that no observations lie below the first lower boundary, and it gives the first point of the cumulative frequency graph.

**What is a cumulative percentage used for?**
It compares distributions with different totals and shows what percentage of the data lies below each boundary.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment. Topic 4, section 4.1: Representation in tabular form.
