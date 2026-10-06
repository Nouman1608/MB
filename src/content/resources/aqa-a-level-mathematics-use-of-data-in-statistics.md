---
title: "AQA A-Level Mathematics: Use of data in statistics (7357)"
seoTitle: "AQA A-Level Maths 7357 Use of Data in Statistics Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Use of data in statistics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 21
syllabusTopics:
  - qualification: "a-level"
    topic: "use-of-data-in-statistics-aqa-alevel-maths"
description: "Study guide to AQA A-Level Maths section 3.21: the large data set, spreadsheets, calculator analysis of subsets, real data and investigations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **section 3.21: Use of data in statistics** (including 3.21.1, Large data set)
of the **AQA A-level Mathematics (7357) specification**, version 1.3 (31 January 2018), for
A-level exams from June 2018 onwards. Section 3.21 has no lettered content references. It sets
out how you must work with real data across the statistics content. The specification does not
place 3.21 under a single paper, but the statistics sections it supports (K to O) are assessed
on **Paper 3**, which can also assess any Paper 1 content. A calculator is required in every
7357 paper.

Use it with the [Use of data revision notes](/resources/aqa-a-level-mathematics-use-of-data-in-statistics-revision-notes/)
and the [Use of data practice questions](/resources/aqa-a-level-mathematics-use-of-data-in-statistics-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start.

## What section 3.21 covers

The specification repeats four requirements from the Department for Education's content
document, common to all exam boards, and then adds AQA's own detail in 3.21.1.

| Ref | What you must be able to do |
|---|---|
| 3.21 (i) | Become familiar with one or more specific large data sets before the final assessment (real data, rich enough to explore the data presentation and interpretation content) |
| 3.21 (ii) | Use technology such as spreadsheets or specialist statistical packages to explore the data set |
| 3.21 (iii) | Interpret real data presented in summary or graphical form |
| 3.21 (iv) | Use data to investigate questions arising in real contexts |
| 3.21.1 | Know the contexts, main features of the data and how technology helps explore it; analyse a subset or features of the data using a calculator with standard statistical functions |

The bullets are numbered (i) to (iv) here for reference only. The specification lists them as
bullet points.

## The large data set

### What the specification says

For exams in 2018 and 2019, the data set was an extract of the data behind DEFRA's 'Family
Food 2014 report' (published in 2015): purchased quantities of household food and drink by
Government Office Region from 2001 to 2014. For exams from 2020 there is a new data set. The
specification says this replacement data set is available only on the AQA website, which also
has supporting resources. Download it from there, and do not rely on descriptions of it found
elsewhere.

### What "familiar" means

The specification asks you to know three things: the **contexts**, the **main features of the
data**, and the **ways technology can help explore it**. In practice, before the exam you should
be able to answer these questions about the data set without opening it:

- What does each variable measure, and in what **units**?
- Which variables are **categorical** (labels such as a region) and which are **numerical**?
- Who or what are the **individuals** (each row), and roughly how many are there?
- How are **missing values** shown: blanks, a code, a word?
- What are typical values and spreads of the main variables? Which variables are skewed?
- What can the data **not** tell you? Every data set has limits on what it records and who it
  covers.

Familiarity helps in two ways. You can spot an implausible value in a question at once. You can
also judge whether a conclusion makes sense in context.

## Using technology to explore data

Spreadsheets and statistical packages do the heavy lifting on a large data set. Function names
below are from Excel-style spreadsheets; other packages use similar ones.

| Task | Spreadsheet approach |
|---|---|
| Find structure | Sort and filter columns; count numerical entries with COUNT (it skips blanks and text) and blanks with COUNTBLANK |
| Summary statistics | AVERAGE, MEDIAN, MIN, MAX, QUARTILE.INC |
| Standard deviation | STDEV.P (divisor n) or STDEV.S (divisor n − 1) |
| Diagrams | Histogram, box plot or scatter chart of a selected column |
| Simple random sample | Add a column of =RAND(), sort by it, take the first rows |
| Compare groups | Filter by a category, then repeat the summaries |

Technology also has limits. The 4.1 aims ask you to recognise when its use may be
inappropriate. A spreadsheet will average a missing-value code of 0 without complaint, chart
software may start an axis away from zero, and different packages compute quartiles in slightly
different ways. You still decide what the numbers mean.

### Worked example 1: cleaning a spreadsheet extract

An **invented** survey records weekly household electricity use. These rows come from the
spreadsheet.

| ID | Region | Weekly use (kWh) |
|---|---|---|
| 101 | North | 82.4 |
| 102 | North | |
| 103 | North | 765 |
| 104 | North | 91.3 |
| 105 | North | −12.0 |
| 106 | North | 68.0 |
| 106 | North | 68.0 |
| 107 | North | 74.2 |

(a) Identify the problems and say what to do with each. (b) The original form for ID 103 shows
76.5. Find the mean and standard deviation of the cleaned values.

**(a)**

- ID 102 is **missing**. Leave it out and say so. Do not enter 0.
- ID 103 is about ten times the other values: likely a **decimal slip** for 76.5. Correct it only
  if the source confirms it; otherwise remove it.
- ID 105 is **negative**, which is impossible for energy used. Remove it.
- ID 106 appears **twice**. Keep one copy.

**(b)** The cleaned values are 82.4, 76.5, 91.3, 68.0 and 74.2.

```
n = 5,  Σx = 392.4,  Σx² = 31 107.34
x̄  = 392.4 / 5 = 78.48 = 78.5 kWh (3 s.f.)
σ² = 31 107.34/5 − 78.48² = 62.36
σ  = 7.90 kWh (3 s.f.)
```

## Analysing a subset with a calculator

The specification requires you to analyse a subset or features of the data using a calculator
with standard statistical functions. For Sections K to O it also says you must use calculator
technology to compute summary statistics. Enter the values in statistics mode and read off
x̄, σx (divisor n), sx (divisor n − 1), the quartiles and the median. Write the values down;
do not just give the final comment.

### Worked example 2

Ten households in Region A were chosen from the invented survey. Their weekly use, in kWh, is:

64.3, 71.5, 58.9, 80.3, 69.7, 75.1, 62.8, 98.6, 67.4, 73.0

(a) Find the mean, the standard deviation (divisor n) and the median. (b) Using Q₁ and Q₃ found
from the median of each half, show that 98.6 is an outlier under the 1.5 × IQR rule. (c) Find
the mean and standard deviation with 98.6 removed.

**(a)** From the calculator:

```
Σx = 721.6,  Σx² = 53 199.7
x̄ = 72.16 = 72.2 kWh (3 s.f.)
σ = 10.6 kWh (3 s.f.)      (sx = 11.2 with divisor n − 1)
Ordered: 58.9, 62.8, 64.3, 67.4, 69.7 | 71.5, 73.0, 75.1, 80.3, 98.6
Median = (69.7 + 71.5)/2 = 70.6 kWh
```

**(b)** Q₁ = 64.3 and Q₃ = 75.1, so IQR = 10.8.

```
Upper limit = 75.1 + 1.5 × 10.8 = 91.3
98.6 > 91.3, so 98.6 is an outlier
```

**(c)** Nine values remain: x̄ = 623.0/9 = 69.2 kWh and σ = 6.26 kWh (3 s.f.).

One extreme value raised the standard deviation by about 70%. Whether to remove it depends on
the investigation: a genuine large household belongs in the population, so you keep it and
prefer the median and IQR. The outlier rules are taught in the
[data presentation guide](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation/).

## Interpreting real data in summary form

Data are often given as a summary rather than raw values: n, Σx and Σx², or a table of means,
medians and quartiles. Convert them, then interpret **in context**.

### Worked example 3

A spreadsheet summary of 40 households in Region B gives n = 40, Σx = 2884 and
Σx² = 211 546.4. Compare Region B with the cleaned Region A sample in Worked example 2(c).

```
x̄  = 2884 / 40 = 72.1 kWh
σ² = 211 546.4/40 − 72.1² = 5288.66 − 5198.41 = 90.25
σ  = 9.5 kWh
```

Comparison, using one measure of location and one of spread:

- On average, Region B households used more electricity (72.1 kWh against 69.2 kWh).
- Region B's use was more variable (σ = 9.5 kWh against 6.26 kWh).

Then add a caution: the Region A sample has only nine values, so another sample could give a
different mean. Different samples can lead to different conclusions, as Section K of the
specification notes.

## Interpreting real data in graphical form

Read a graph for its **message**, then check whether its **construction** supports that message.

### Worked example 4: a truncated axis

A bar chart shows the annual mean weekly use for Region A from 2019 to 2024 (invented figures):
78.2, 81.5, 80.1, 74.6, 71.9 and 70.8 kWh. The vertical axis starts at 70.

(a) Find the percentage change from 2019 to 2024. (b) Explain why the chart exaggerates the
fall.

**(a)**

```
(70.8 − 78.2) / 78.2 × 100 = −9.46%
A fall of 9.46% (3 s.f.)
```

**(b)** Each bar shows only the part above 70. The 2019 bar shows 8.2 units and the 2024 bar
shows 0.8 units, so the 2024 bar is about a tenth of the height of the 2019 bar. A reader sees
a drop of about 90%, but the real drop is under 10%. Start the axis at zero, or mark the break
in the axis clearly.

Also check for: unlabelled units, unequal time gaps drawn as equal, and two charts compared on
different scales.

## Investigating questions in real contexts

Overarching theme OT2.6 describes the **problem-solving cycle**: specifying the problem,
collecting information, processing and representing information, and interpreting results,
which may show the need to repeat the cycle. Section 3.21 applies it to data.

### Worked example 5

Question: in the invented survey, do rural households use more electricity than urban ones?

1. **Specify.** Population: the households in the data set. Variable: weekly use in kWh. Compare
   the two groups by a measure of location and a measure of spread.
2. **Collect.** Filter by area type. In each group, give every row a random number with =RAND(),
   sort, and take the first 30: two simple random samples.
3. **Process and represent.** Clean the samples, then compute summaries:

| Sample | n | x̄ (kWh) | σ (kWh) |
|---|---|---|---|
| Urban | 30 | 68.4 | 8.1 |
| Rural | 30 | 77.9 | 12.6 |

   Draw box plots on one scale to check for skew and outliers.
4. **Interpret.** In these samples, rural households used more on average (77.9 against
   68.4 kWh) and their use varied more (σ 12.6 against 8.1 kWh). The data do not show **why**:
   house size or heating type could explain the difference.
5. **Repeat if needed.** A fresh pair of samples, or a larger sample, would show whether the gap
   is consistent. A formal test belongs to Section O, covered in the
   [hypothesis testing guide](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing/).

## Common errors

- Treating a missing-value code (0, −1, a blank) as real data.
- Removing an outlier without asking whether it is an error or a genuine value.
- Quoting σ when the question or software uses s, or the reverse, without saying which.
- Comparing two groups with two measures of location and no measure of spread.
- Drawing a conclusion about a whole population from one small sample, with no caution.
- Reading a graph's bar heights without checking where the axis starts.
- Claiming one variable causes another from observational data.

## Where to go next

Practise with the [practice questions](/resources/aqa-a-level-mathematics-use-of-data-in-statistics-practice/)
and recap with the [revision notes](/resources/aqa-a-level-mathematics-use-of-data-in-statistics-revision-notes/).
Sampling a subset is covered in the [statistical sampling guide](/resources/aqa-a-level-mathematics-statistical-sampling/),
and the problem-solving cycle in the [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.21, Use of data in statistics, including 3.21.1,
Large data set.
