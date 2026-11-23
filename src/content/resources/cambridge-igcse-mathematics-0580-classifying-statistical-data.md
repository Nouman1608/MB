---
title: "Cambridge IGCSE Mathematics (0580): Classifying statistical data"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 9 – Statistics"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 9.1
syllabusTopics:
  - qualification: "igcse"
    topic: "statistics-cambridge-igcse-maths"
    subtopic: "classifying-statistical-data-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Maths 0580 section 9.1: classifying data types, choosing class intervals, tally tables and building two-way tables."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide teaches section **9.1 Classifying statistical data** from Topic 9 Statistics of the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The syllabus statement is short: "Classify and tabulate statistical data", with the note "e.g. tally tables, two-way tables". The Core (C9.1) and Extended (E9.1) statements are word for word the same, so everything here applies to both tiers.

The [classifying and interpreting data study guide](/resources/igcse-mathematics-0580-classifying-and-interpreting-data/) introduces the data types and a first two-way table. This page goes further: the awkward cases when deciding a data type, how to choose and write classes for discrete and for continuous data, and how to build a two-way table straight from raw records or from fractions and percentages. Test yourself afterwards with the [classifying data revision notes](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data-revision-notes/) and the [classifying data practice questions](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data-practice/).

## What this subtopic covers

| Part of 9.1 | What you must be able to do |
|---|---|
| Classify | Decide whether data are qualitative or quantitative, and whether quantitative data are discrete or continuous |
| Classify into groups | Choose sensible class intervals and put each value in exactly one class |
| Tabulate: tally tables | Record raw data with tallies and turn the tallies into frequencies |
| Tabulate: two-way tables | Sort data by two features at once and complete the row and column totals |

Classification matters because it decides what you can do next. Qualitative data can go in a bar chart or pie chart but cannot have a mean. Discrete data can be shown with separate bars. Continuous data need classes with no gaps, which leads to the histograms and cumulative frequency diagrams of the Extended course.

## Deciding the type of data: the awkward cases

The basic split is **qualitative** (words or categories) against **quantitative** (numbers), and quantitative data are **discrete** (counted, separate values) or **continuous** (measured, any value in a range). Most variables are easy. Examiners like the ones that are not.

### Worked example 1

Classify each variable.

| Variable | Type | Reason |
|---|---|---|
| Shoe size | Quantitative, discrete | Only values such as 5, 5½, 6 exist; there is no size 5.37 |
| Age of a student | Quantitative, continuous | Time since birth is measured; giving it in whole years only rounds it |
| Amount of money in a purse | Quantitative, discrete | It goes up in steps of the smallest coin, such as 1 cent |
| Time to run 100 m, to the nearest 0.1 s | Quantitative, continuous | Rounding the reading does not change what is being measured |
| Number of letters in a word | Quantitative, discrete | It is counted |
| Mass of a parcel | Quantitative, continuous | It is measured |
| Bus route number | Qualitative | The number is a label; adding route 12 to route 30 means nothing |

Two tests settle almost every case.

1. **Does arithmetic on the values make sense?** If not, the "numbers" are labels and the data are qualitative. Route numbers, phone numbers and shirt numbers are all qualitative.
2. **Was the value counted or measured?** Counted means discrete. Measured means continuous, even when the measurement is recorded as a whole number.

The second test is why age and time are continuous. A runner timed at 12.3 s ran for somewhere between 12.25 s and 12.35 s; the recorded value is a rounded measurement, not a separate step.

## Grouping data into classes

When there are many different values, list them in **classes**. The rules are different for discrete and continuous data.

### Discrete data

Classes such as 1–10, 11–20, 21–30 are fine. There is no value between 10 and 11, so nothing falls in a gap. Each end value belongs to the class that names it: 30 goes in 21–30, and 31 goes in 31–40.

### Continuous data

Classes must meet with no gap and no overlap, so they are written with inequalities, such as 150 ≤ h < 160 and 160 ≤ h < 170. The value 160 belongs only to the second class. Writing 150–160 and 160–170 is ambiguous, because 160 seems to belong to both.

### Choosing the classes yourself

- Look at the smallest and largest values first, so the classes cover all the data.
- Use about 4 to 8 classes. Too few hide the shape; too many leave most frequencies at 0 or 1.
- Use equal widths unless the question tells you otherwise. Unequal widths are possible, but they belong with histograms (section 9.7).
- An **open-ended** class such as "50 or more" can hold a few extreme values, but you then cannot say how big those values were.

### Worked example 2

The marks out of 50 of 30 students are:

```
23  37  41  12  28  35  19  44  31  26
 8  38  29  33  47  15  22  36  40  27
30  11  34  39  25  18  42  32  21  10
```

Tabulate the marks using the classes 1–10, 11–20, 21–30, 31–40 and 41–50.

Go through the list once, row by row, putting a tally stroke in the right class for each value. Do not hunt for all the values in one class at a time; that is how values get missed.

```
Mark      Tally            Frequency
1–10      ||                   2
11–20     ||||/                5
21–30     ||||/ ||||           9
31–40     ||||/ ||||/         10
41–50     ||||                 4
                    Total     30
```

Here ||||/ stands for a gate of five. The boundary values 10, 30 and 40 each go in the class that ends with them. Check the total: 2 + 5 + 9 + 10 + 4 = 30, which matches the number of students.

The table now answers questions the raw list makes slow. For example, 10 + 4 = 14 students scored more than 30, which is 14/30 = 7/15 of the group. What the table cannot tell you is how many scored exactly 35: grouping loses the individual values.

## Two-way tables from raw records

A two-way table classifies every item by two variables at once. When the data arrive as a list of records, tally into the cells directly.

### Worked example 3

Twenty students recorded their year group (10 or 11) and how they usually travel to school: walk (W), bus (B) or car (C).

```
10W  11B  10B  10C  11W  11B  10W  10B  11C  11B
10W  11W  10B  11B  10C  11B  10W  11C  10B  11W
```

Draw a two-way table with year group in the rows and travel method in the columns, then count each pair.

```
           Walk   Bus   Car   Total
Year 10      4     4     2     10
Year 11      3     5     2     10
Total        7     9     4     20
```

Two checks: the row totals add to 20, and the column totals add to 20. If either check fails, a record has been missed or counted twice.

Now read it carefully. "How many Year 11 students take the bus?" is one cell: 5. "What fraction of bus users are in Year 11?" uses the bus column total: 5/9. "What fraction of Year 11 take the bus?" uses the Year 11 row total: 5/10 = 1/2. The same cell gives different fractions depending on the group named.

## Two-way tables from fractions and percentages

Many questions give the information as fractions, percentages or ratios. Turn each statement into a number of people before you write it in the table, and be sure which total each fraction is "of".

### Worked example 4

A museum had 120 visitors one morning. Each visitor was an adult or a child, and each was a member or a non-member.

- 3/5 of the visitors were adults.
- 25% of the children were members.
- 40 visitors were members.

Complete a two-way table.

```
Adults   = 3/5 of 120 = 72
Children = 120 − 72   = 48
Child members     = 25% of 48 = 12      (25% of the CHILDREN, not of 120)
Adult members     = 40 − 12  = 28
Adult non-members = 72 − 28  = 44
Child non-members = 48 − 12  = 36
```

```
            Member   Non-member   Total
Adults        28         44         72
Children      12         36         48
Total         40         80        120
```

Check across and down: 28 + 44 = 72, 12 + 36 = 48, 40 + 80 = 120 and 72 + 48 = 120.

The trap is the second statement. 25% of 120 would be 30, which is a different (wrong) cell value. Underline the group after "of" in each statement before you calculate.

## Common mistakes

- Calling age, height or time discrete because the values were written as whole numbers. Measured data are continuous.
- Treating labels made of digits, such as route or shirt numbers, as quantitative.
- Writing continuous classes as 10–20, 20–30, so that 20 appears to belong to two classes.
- Leaving a gap in continuous classes, such as 10 ≤ t < 19 followed by 20 ≤ t < 29.
- Missing a value when tallying. Always check the frequency total against the number of data items.
- Taking a percentage of the grand total when the question says "of the children" or "of the adults".
- Filling a two-way table without checking both the row totals and the column totals.

## Exam technique

- **"Complete the table"**: fill every empty cell, including totals. A blank total cell is a lost mark even if the other cells are right.
- **"Classify" or "State the type of data"**: two words are needed for numerical data, such as "quantitative, discrete". If a reason is asked for, say "it is counted" or "it is measured".
- **"Write down"**: you should be reading one value from your table with no working.
- **"Show that"**: in a two-way table question, show the calculation for each cell in the order you found it, so the method is visible.
- On Papers 1 and 2 (no calculator) the fractions and percentages in two-way questions are chosen to work by hand: 25% is a quarter, 3/5 is three lots of a fifth.

## Next steps

- Condensed recall: [classifying data revision notes](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data-revision-notes/).
- Questions with marked answers: [classifying data practice questions](/resources/cambridge-igcse-mathematics-0580-classifying-statistical-data-practice/).
- What to do with the tables once they are built: [interpreting statistical data study guide](/resources/cambridge-igcse-mathematics-0580-interpreting-statistical-data/).
- The whole topic: [Statistics study guide](/resources/igcse-mathematics-statistics/) and [Statistics revision notes](/resources/igcse-mathematics-statistics-revision-notes/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027* (Version 3), Subject content, Topic 9 Statistics, C9.1 and E9.1 Classifying statistical data: "Classify and tabulate statistical data", notes "e.g. tally tables, two-way tables".
