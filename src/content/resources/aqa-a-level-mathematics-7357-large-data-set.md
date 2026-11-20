---
title: "AQA A-Level Mathematics (7357): The large data set"
seoTitle: "AQA A-Level Maths 7357 Large Data Set Study Guide"
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
  - qualification: "a-level"
    topic: "use-of-data-in-statistics-aqa-alevel-maths"
    subtopic: "large-data-set-aqa-alevel-maths"
description: "AQA A-level Maths 7357 section 3.21.1 in depth: getting familiar with the large data set, cleaning data, using technology, subsets, summary statistics and interpreting results in context."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
reviewNeeded: true
reviewNote: "2026-11-20: check which large data set AQA currently publishes for the exam series and that the generic wording here matches the current record."
---

This guide goes deeper into section **3.21.1 Large data set** of the AQA A-level Mathematics (7357) specification (version 1.3, for exams from June 2018). Section 3.21 has no lettered content references, and the data set is examined within the statistics content (sections K to O). The [use of data revision notes](/resources/aqa-a-level-mathematics-use-of-data-in-statistics-revision-notes/) give a condensed overview of the whole of 3.21; this page concentrates on how to work with the data set itself. Test yourself afterwards with the [large data set practice questions](/resources/aqa-a-level-mathematics-7357-large-data-set-practice/).

All the numbers in the worked examples below are invented. They are not extracts from AQA's data set, which is published only on the AQA website.

## What the specification says

Section 3.21 says that students must:

- become familiar with one or more specific large data sets in advance of the final assessment (the data must be real and rich enough to explore the specification's data presentation and interpretation)
- use technology such as spreadsheets or specialist statistical packages to explore the data sets
- interpret real data presented in summary or graphical form
- use data to investigate questions arising in real contexts.

Section 3.21.1 then says:

- For exams in 2018 and 2019, the data set was an extract of the data behind a DEFRA "Family Food 2014" report: purchased quantities of household food and drink by Government Office Region from 2001 to 2014.
- For exams from 2020, there is a replacement data set, also available only on the AQA website. Check the website for the data set for your exam series, because the specification points students to it.
- The data set must be used in teaching so that students build familiarity with the **contexts**, the **main features** of the data and the ways in which **technology** helps explore it.
- Students should be able to **analyse a subset or features** of the data using a **calculator with standard statistical functions**.

So there are two skills to master: knowing the data, and handling an extract of it.

## Becoming familiar with the data

You will not be asked to remember every value. You are expected to know the data well enough to answer questions about **what it measures**, **how it is organised** and **what its limits are**. Use this checklist for the current data set.

| Question | Why it matters |
|---|---|
| What does one row represent (a region, a year, a household)? | Tells you what an average is an average of |
| What does each column measure, and in what units? | Avoids unit errors (grams, millilitres, per person per week) |
| Which variables are categorical, and which are numerical? | Decides which summary or diagram is suitable |
| Over what period was it collected? | Needed for comments on trends |
| How are missing values shown? | A missing value is not zero |
| What range of values is typical for the main variables? | Lets you spot errors and outliers |
| What can the data not tell you? | Needed for evaluation and limitations |

Spend time with the data set in a spreadsheet. Sort the columns, filter by region and by year, scroll through to find blanks and strange codes, and draw some quick charts. Familiarity comes from using the data, not from reading about it.

## Cleaning an extract

Real data are untidy. Before calculating anything, check:

1. **Missing values:** blanks, "n/a", dashes or codes such as 0 or 999. Exclude them from calculations and reduce n accordingly. Never treat a missing value as 0.
2. **Impossible values:** a negative mass or a quantity far outside the range. Check the source; if it is an error, correct or remove it.
3. **Duplicates:** repeated rows inflate totals and counts.
4. **Units and scale:** make sure every value is in the same unit.
5. **Labels:** categories spelled in different ways should be merged.

Say what you did. "Two blank values for region K were excluded, so n = 10" is a complete, marks-worthy statement.

## Using technology

You are expected to use spreadsheets or statistics software during the course, and a calculator in the exam.

**On a spreadsheet:** use functions such as AVERAGE, MEDIAN, QUARTILE, STDEV (check whether it divides by n or n − 1), COUNT, MIN and MAX; sort and filter; draw charts; create a column of random numbers to take a random sample.

**On a calculator:** enter the subset in statistics mode, then read n, the mean x̄, the standard deviations σ (divisor n) and s (divisor n − 1), and Σx and Σx². Learn the key sequence on your own calculator and practise it. Quartiles from a calculator and a spreadsheet can differ slightly, because there are several methods; follow the method taught in your course.

**Limits of technology:** software does not know that a code means "not recorded", it can choose a misleading axis, and it cannot decide if a value is an error. These judgements are yours.

## Worked example: analysing a subset

An invented extract gives the fresh fruit purchased, in grams per person per week, in ten regions, in 2008 and 2014.

| Region | A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|---|
| 2008 | 1020 | 985 | 1105 | 960 | 1210 | 1075 | 990 | 1140 | 1015 | 1065 |
| 2014 | 1050 | 1010 | 1150 | 975 | 1290 | 1090 | 1005 | 1230 | 1020 | 1100 |

**Step 1: summary statistics (2008).**

- Σx = 10 565, so the mean = 10 565 ÷ 10 = **1056.5 g**
- Sorted: 960, 985, 990, 1015, 1020, 1065, 1075, 1105, 1140, 1210. Median = (1020 + 1065) ÷ 2 = **1042.5 g**
- Lower quartile = median of the lowest five = 990 g; upper quartile = median of the highest five = 1105 g; IQR = **115 g**
- Σx² = 11 217 125, so σ² = 11 217 125 ÷ 10 − 1056.5² = 5520.25, giving σ = **74.3 g**

**Step 2: the same for 2014.** Mean = **1092 g**, median = **1070 g**, Q₁ = 1010, Q₃ = 1150, IQR = **140 g**, σ = **98.3 g**.

**Step 3: check for outliers.** A common rule marks a value as a possible outlier if it is more than 1.5 × IQR beyond a quartile. For 2014: upper fence = 1150 + 1.5 × 140 = 1360. The largest value is 1290, which is below the fence, so there are no outliers.

**Step 4: change over time.** Percentage change in the mean = (1092 − 1056.5) ÷ 1056.5 × 100 = **3.4%** increase.

**Step 5: interpret in context.** On average, regions bought 35.5 g more fresh fruit per person per week in 2014 than in 2008, a rise of 3.4%. The spread (standard deviation and IQR) also grew, from 115 g to 140 g for the IQR, so regions became more varied. A comment that earns credit mentions location, spread and a caution: for example, this is an extract of ten regions and two years only, and regional averages do not describe individual households.

## Choosing and drawing subsets

Questions often give a small extract chosen by the examiners. Be ready to:

- calculate a mean, median, quartiles or standard deviation for the extract
- compare two regions or two years with a measure of location and a measure of spread
- find a percentage change or ratio
- identify values that stand out and say what could explain them
- comment on whether a sample is representative
- describe how to select a random sample from the full data (number the items, then use random numbers, ignoring repeats).

When you pick your own subset, state your selection rule. A subset chosen to support an answer, such as only the largest values, is biased.

## Comparing sets: a template

Use three parts.

1. **Location:** "The mean in 2014 (1092 g) is higher than in 2008 (1056.5 g)."
2. **Spread:** "The standard deviation is larger in 2014 (98.3 g against 74.3 g), so values are more spread out."
3. **Caution or reason:** "This is based on ten regions, so it may not represent all regions."

Use the mean and standard deviation for roughly symmetrical data without outliers, and the median and IQR when the data are skewed or contain extreme values.

## Limits of the data

When asked what a data set cannot show, think about:

- **Level of detail:** regional averages hide differences between households and between places in a region.
- **Purchases are not consumption:** a quantity bought is not the same as a quantity eaten.
- **Sample basis:** survey data come from a sample, so values have sampling error.
- **Time:** values describe particular years; trends may not continue.
- **Correlation is not causation:** two variables moving together does not prove one causes the other.
- **Prediction outside the range:** a line fitted to the years in the data is unreliable far beyond them.

## Exam technique

- Read the question for the units and the variable before calculating.
- Show the substitution into any formula you use, even when the calculator does the work.
- Round only at the end, and give answers to the accuracy asked for (usually 3 significant figures).
- Always answer in context: name the variable, the units and the group.
- If the question says "comment", give a measure of location, a measure of spread and a limitation.

## Common errors

- Counting a missing value as 0.
- Using n instead of n − 1, or the reverse, without checking which standard deviation is asked for.
- Quoting a result with no units or context.
- Describing a change with no figures.
- Treating an average of regions as the average for all people.
- Choosing a subset because it gives the answer you want.
