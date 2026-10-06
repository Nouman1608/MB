---
title: "AQA A-Level Mathematics: Use of data in statistics (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Use of Data Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-Level Maths revision notes on using real data: large data set, spreadsheets, cleaning, summary statistics and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **section 3.21: Use of data in statistics** (including 3.21.1, Large data
set) of the **AQA A-level Mathematics (7357) specification**, version 1.3 (31 January 2018), for
A-level exams from June 2018 onwards. Section 3.21 has no lettered content references. The
specification does not place it under one paper, but the statistics sections it supports (K to
O) are assessed on **Paper 3**. A calculator is required in every 7357 paper. For full
explanations and worked examples, read the
[Use of data study guide](/resources/aqa-a-level-mathematics-use-of-data-in-statistics/) first.

Test yourself with the [Use of data practice questions](/resources/aqa-a-level-mathematics-use-of-data-in-statistics-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/), the
[printable checklist](/checklists/aqa/a-level/mathematics/) and the free
[10-minute diagnostics](/diagnostics/) help you plan.

## The four requirements (3.21)

From the Department for Education's content document, common to all exam boards. You must:

1. **become familiar** with one or more specific large data sets before the final assessment
   (real data, rich enough to explore data presentation and interpretation)
2. **use technology** such as spreadsheets or specialist statistical packages to explore them
3. **interpret real data** presented in summary or graphical form
4. **use data to investigate questions** arising in real contexts.

## The large data set (3.21.1)

- Exams in 2018 and 2019: an extract of the data behind DEFRA's 'Family Food 2014 report'
  (published 2015), on purchased quantities of household food and drink by Government Office
  Region, 2001 to 2014.
- Exams from 2020: a new data set, available only on the AQA website (which also has
  supporting resources).
- You must know the **contexts**, the **main features** of the data and how **technology** helps
  explore it.
- You must be able to analyse a **subset or features** of the data using a calculator with
  standard statistical functions.

### Familiarity checklist

Tick each one for the current data set.

- what each variable measures, and its units
- which variables are categorical and which are numerical
- what one row (one individual) represents
- how missing values are shown
- typical values, spread and skew of the main variables
- what the data cannot tell you

## Technology

| Job | Excel-style function or tool |
|---|---|
| Mean, median | AVERAGE, MEDIAN |
| Quartiles, extremes | QUARTILE.INC, MIN, MAX |
| Standard deviation, divisor n | STDEV.P |
| Standard deviation, divisor n − 1 | STDEV.S |
| Count values, count blanks | COUNT, COUNTBLANK |
| Random sample | =RAND() column, sort, take the first rows |
| Group comparison | Filter by category, then repeat |

Function names vary between packages. Quartile methods vary too, so a spreadsheet and a
calculator can give slightly different Q₁ and Q₃ for the same data.

**Limits of technology:** software does not know that 0 means "no response", it may start a
chart axis above zero, and it cannot judge whether a value is an error. You do that.

## Formulas for summary data

| Quantity | Formula |
|---|---|
| Mean | x̄ = Σx / n |
| Variance (divisor n) | σ² = Σx²/n − x̄² |
| Standard deviation | σ = √(σ²) |
| s from σ | s = σ × √(n/(n − 1)) |
| Percentage change | (new − old) / old × 100 |

The specification uses σ for a population standard deviation and s for a sample one. Say which
you are using.

### Method: subset analysis with a calculator

1. Enter the subset in statistics mode (with a frequency column if grouped).
2. Write down n, x̄ and σx (or sx), and the median and quartiles if needed.
3. Check for possible outliers with the rule the question gives.
4. Comment in context: one measure of location, one of spread, and a caution about sample size.

### Worked reminder

A spreadsheet summary gives n = 25, Σx = 1300, Σx² = 68 900.

```
x̄  = 1300/25 = 52
σ² = 68 900/25 − 52² = 2756 − 2704 = 52
σ  = √52 = 7.21 (3 s.f.)
s  = 7.21 × √(25/24) = 7.36 (3 s.f.)
```

### Interpreting summary data in context

A good comment has three parts:

1. **Location**: which group is higher on average, with both values and units.
2. **Spread**: which group is more variable (or more consistent), with both values.
3. **Caution**: sample size, how the data were chosen, or what the data cannot show.

Use the mean and standard deviation for roughly symmetrical data, and the median and IQR when
the data are skewed or contain extreme values.

## Cleaning data

| Problem | Action |
|---|---|
| Missing value (blank, code, "n/a") | Exclude from calculations; reduce n; say so |
| Impossible value (negative mass, age 240) | Correct from the source if possible, otherwise remove |
| Typing slip (decimal point moved) | Correct only if confirmed; otherwise remove |
| Duplicate row | Keep one copy |
| Genuine extreme value | Keep it; prefer median and IQR |

Never replace a missing value with 0. It drags the mean down and inflates the spread.

## Reading graphs: five checks

1. Where does the vertical axis start? A truncated axis exaggerates differences.
2. Are the units and labels given?
3. Are equal gaps on the axis equal steps in the data?
4. When two diagrams are compared, do they use the same scale?
5. What does the diagram hide: sample size, individual values, how the data were collected?

**Truncated-axis test:** if the axis starts at a, a bar of value v appears as v − a. Compare
(v₁ − a)/(v₂ − a) with the true ratio v₁/v₂.

## Investigating a question: the problem-solving cycle

From overarching theme OT2.6:

1. **Specify the problem**: population, variable, what you will compare.
2. **Collect information**: choose or sample the data (random where possible); clean it.
3. **Process and represent**: summary statistics and a suitable diagram.
4. **Interpret results** in context, with limitations.
5. **Repeat** the cycle if the results raise a new question or need checking.

## Must-know distinctions

- **σ and s**: divisor n against divisor n − 1. Close for large n.
- **Missing and zero**: a missing value is not a measurement of 0.
- **Error and outlier**: an error is wrong and is corrected or removed; an outlier may be real.
- **Sample and population**: a sample statistic estimates a population value, and another sample
  would give a different estimate.
- **Correlation and causation**: data from a survey can show association, not cause.
- **Summary and raw data**: from n, Σx and Σx² you can find x̄ and σ, but not the median.

## Quick self-test

1. State two things the specification says you must be able to do with the large data set.
2. Find the mean and the standard deviation (divisor n) of 12, 15, 9, 14, 10.
3. n = 20, Σx = 450, Σx² = 10 530. Find x̄ and σ.
4. Which Excel-style function gives a standard deviation with divisor n − 1?
5. A spreadsheet column has 120 rows, of which 6 are blank. What is n for that variable?
6. Ten values have mean 40. One of them is a 0 that means "no response". Find the mean of the
   valid values.
7. A bar chart's axis starts at 50. Bars show 60 and 55. How many times as tall does the first
   bar look, and what is the true ratio?
8. A mean rises from 72 to 81. Find the percentage change.
9. Name the four stages of the problem-solving cycle in OT2.6.
10. Two random samples from the same data set have means 31.2 and 33.0. Does this show that
    the data set has changed?
11. A data set has mean 80 and standard deviation 5. Is 88 an outlier under the rule "more than
    2 standard deviations from the mean"?
12. Your calculator and a spreadsheet give different Q₁ for the same data. Suggest why.

### Answers

1. Any two: become familiar with it before the final assessment; know its contexts and main
   features; use technology to explore it; analyse a subset or features with a calculator.
2. x̄ = **12**; σ² = 26/5 = 5.2, so **σ = 2.28** (3 s.f.).
3. x̄ = **22.5**; σ² = 526.5 − 506.25 = 20.25, so **σ = 4.5**.
4. **STDEV.S**.
5. **114**.
6. Total = 400 over 9 valid values: **44.4** (3 s.f.).
7. Appears (60 − 50)/(55 − 50) = **2 times** as tall; true ratio 60/55 = **1.09** (3 s.f.).
8. (81 − 72)/72 × 100 = **12.5%**.
9. **Specifying the problem, collecting information, processing and representing information,
   interpreting results.**
10. **No.** Different samples give different means (sampling variation).
11. Limits 70 and 90; 88 lies inside, so **no**.
12. They use **different quartile methods**.

## Where marks are usually lost

- Including a missing-value code as a real 0 in a mean or standard deviation.
- Removing a genuine extreme value with no reason given.
- Giving x̄ and σ without stating whether σ or s was used when the question asks.
- Writing σ² = Σx²/n − x̄ (forgetting to square the mean).
- Comparing two groups using only averages, with no measure of spread.
- Comments with no context: "the mean is higher" instead of "Region B households used more
  electricity on average".
- Missing a truncated axis when asked why a chart is misleading.
- Treating one sample's result as a fact about the whole population.
- Claiming cause from survey data.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.21, Use of data in statistics, including 3.21.1,
Large data set.
