---
resourceId: "mb-ap-stats-1.7-study-guide"
title: "Summary Statistics for One Quantitative Variable: Study Guide (Statistics 1.7)"
description: "Learn to calculate and interpret the mean, median, quartiles, percentiles, range, IQR and standard deviation, check for outliers two ways, and choose resistant statistics."
course: "statistics"
unit: 1
topics: ["1.7"]
resourceType: "study-guide"
prerequisites:
  - "Ordering numbers and finding a middle value"
  - "Describing the shape, centre and variability of a dot plot or histogram (Topics 1.5 and 1.6)"
learningObjectives:
  - "Calculate the mean, median, quartiles and percentiles of a quantitative data set, by hand and with technology"
  - "Calculate the range, interquartile range and sample standard deviation, and interpret each in context with units"
  - "Identify potential outliers with the 1.5 × IQR rule and the 2-standard-deviation rule"
  - "Explain how changing the unit of measurement changes summary statistics"
  - "Justify the choice of a resistant or non-resistant summary statistic for a given distribution"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Use the one-variable statistics function on a graphing calculator to check hand calculations. Report Sx (the n − 1 version), not σx."
related: ["mb-ap-stats-1.7-revision-notes", "mb-ap-stats-1.7-practice", "mb-ap-stats-1.7-checklist"]
next: "mb-ap-stats-1.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Centre: the mean x̄ = Σxᵢ / n uses every value; the median is the middle of the ordered data."
  - "Variability: range = max − min; IQR = Q3 − Q1; the sample standard deviation s divides by n − 1."
  - "The median and IQR are resistant to outliers; the mean, range and standard deviation are not."
  - "Flag a potential outlier if it is more than 1.5 × IQR beyond a quartile, or more than 2 standard deviations from the mean."
  - "Every interpretation names the variable, the context and the units."
faqs:
  - question: "Why does the sample standard deviation divide by n − 1 and not n?"
    answer: "The deviations are measured from x̄, which is itself calculated from the same data, so they are slightly too small on average. Dividing by n − 1 corrects for this. The course uses s with n − 1 throughout; on a calculator this is Sx."
  - question: "My calculator gives a different Q1 from my textbook. Which is right?"
    answer: "Several quartile methods exist. This guide uses the method most graphing calculators use: split the ordered data at the median and, when n is odd, leave the median out of both halves. Show your method and the answer will be clear."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why summarise a distribution with numbers?

A dot plot or histogram shows the whole distribution. But you often need to report it in one line, or compare two groups fairly. Summary statistics do this. They answer two questions:

- **Centre:** what is a typical value?
- **Variability (spread):** how much do the values differ from each other?

A summary statistic is only useful when you say what it means **in context**: which variable, which individuals, and which units. "The median is 17.5" earns little credit. "The median commute time of these 12 students is 17.5 minutes" is a full statement.

## The data set used in this guide

A fictional school, Larkfield Academy, asked 12 students how long their journey to school took on one Monday. The variable is **commute time, in minutes**. The values are:

**14, 9, 22, 17, 12, 25, 18, 11, 20, 15, 46, 19**

Ordered from smallest to largest:

**9, 11, 12, 14, 15, 17, 18, 19, 20, 22, 25, 46** (n = 12)

Always order the data before finding a median, quartile or percentile.

## Measures of centre

**The mean** adds every value and divides by the number of values. For a sample it is written x̄ ("x-bar"):

**x̄ = Σxᵢ / n**

Here xᵢ is the i-th value and n is the number of values. For the commute data, Σxᵢ = 228 minutes, so x̄ = 228 ÷ 12 = **19 minutes**.

**The median** is the middle value of the ordered data.

- If n is odd, it is the single middle value, at position (n + 1) / 2.
- If n is even, it is the mean of the two middle values.

With n = 12, the middle values are the 6th and 7th: 17 and 18. The median is (17 + 18) ÷ 2 = **17.5 minutes**.

The **minimum** is the smallest value (9 minutes) and the **maximum** is the largest (46 minutes).

## Measures of position: quartiles and percentiles

The **first quartile, Q1**, is the median of the lower half of the ordered data. The **third quartile, Q3**, is the median of the upper half. The median itself is sometimes called Q2. About 25% of values are at or below Q1, and about 75% are at or below Q3. So Q1 and Q3 mark the edges of the middle 50% of the data.

For the commute data, the lower half is 9, 11, 12, 14, 15, 17, so Q1 = (12 + 14) ÷ 2 = **13 minutes**. The upper half is 18, 19, 20, 22, 25, 46, so Q3 = (20 + 22) ÷ 2 = **21 minutes**.

**Convention when n is odd.** Leave the median out of both halves. This is what most graphing calculators do. Other textbooks sometimes include it, which can give slightly different quartiles; state your method if it matters.

The **p-th percentile** is the value with p% of the data at or below it. Q1 is the 25th percentile and Q3 is the 75th. For example, 20 minutes has 9 of the 12 values at or below it, and 9 ÷ 12 = 0.75, so a 20-minute commute is at the **75th percentile** of this data set.

## Measures of variability

**Range = maximum − minimum.** Here 46 − 9 = **37 minutes**. It depends on only two values, so one unusual value changes it a lot.

**Interquartile range, IQR = Q3 − Q1.** Here 21 − 13 = **8 minutes**. The middle half of the commute times spans 8 minutes.

**Standard deviation** measures a typical distance of the values from their mean. The course uses the **sample standard deviation**, s, which divides by n − 1:

**s = √[ Σ(xᵢ − x̄)² / (n − 1) ]**

The square of s, written s², is the **sample variance**. Its units are squared (minutes²), which is one reason we usually report s instead.

How to calculate s by hand:

1. Find x̄.
2. Subtract x̄ from each value to get its **deviation**. The deviations always add to 0.
3. Square each deviation.
4. Add the squares.
5. Divide by n − 1. This is s².
6. Take the square root.

A graphing calculator's one-variable statistics gives this as **Sx**. The value labelled σx divides by n; do not report it as s.

## Seeing the statistics on a dot plot

<figure>
<svg viewBox="0 0 640 220" role="img" aria-labelledby="commute-title commute-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="commute-title">Dot plot of commute times for 12 students</title>
<desc id="commute-desc">A horizontal axis from 0 to 50 minutes with one dot for each student at 9, 11, 12, 14, 15, 17, 18, 19, 20, 22, 25 and 46 minutes. A solid vertical line marks the median at 17.5 minutes. A dashed vertical line marks the mean at 19 minutes. A bracket above the dots runs from Q1 at 13 minutes to Q3 at 21 minutes and is labelled IQR equals 8 minutes. A dotted vertical line marks the upper fence at 33 minutes. The dot at 46 minutes lies beyond the fence and is labelled as an outlier.</desc>
<rect x="0" y="0" width="640" height="220" fill="#ffffff"/>
<line x1="40" y1="150" x2="590" y2="150" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="40" y1="150" x2="40" y2="157"/><line x1="95" y1="150" x2="95" y2="157"/><line x1="150" y1="150" x2="150" y2="157"/><line x1="205" y1="150" x2="205" y2="157"/><line x1="260" y1="150" x2="260" y2="157"/><line x1="315" y1="150" x2="315" y2="157"/><line x1="370" y1="150" x2="370" y2="157"/><line x1="425" y1="150" x2="425" y2="157"/><line x1="480" y1="150" x2="480" y2="157"/><line x1="535" y1="150" x2="535" y2="157"/><line x1="590" y1="150" x2="590" y2="157"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="40" y="172">0</text><text x="95" y="172">5</text><text x="150" y="172">10</text><text x="205" y="172">15</text><text x="260" y="172">20</text><text x="315" y="172">25</text><text x="370" y="172">30</text><text x="425" y="172">35</text><text x="480" y="172">40</text><text x="535" y="172">45</text><text x="590" y="172">50</text>
</g>
<text x="315" y="200" text-anchor="middle" font-size="14" fill="#1d2b44">Commute time (minutes)</text>
<g fill="#1d2b44">
<circle cx="139" cy="140" r="5"/><circle cx="161" cy="140" r="5"/><circle cx="172" cy="140" r="5"/><circle cx="194" cy="140" r="5"/><circle cx="205" cy="140" r="5"/><circle cx="227" cy="140" r="5"/><circle cx="238" cy="140" r="5"/><circle cx="249" cy="140" r="5"/><circle cx="260" cy="140" r="5"/><circle cx="282" cy="140" r="5"/><circle cx="315" cy="140" r="5"/><circle cx="546" cy="140" r="5"/>
</g>
<line x1="232.5" y1="60" x2="232.5" y2="150" stroke="#1d2b44" stroke-width="2"/>
<text x="228" y="55" text-anchor="end" font-size="13" fill="#1d2b44">median 17.5</text>
<line x1="249" y1="60" x2="249" y2="150" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="254" y="55" text-anchor="start" font-size="13" fill="#1d2b44">mean 19</text>
<path d="M183 112 V102 H271 V112" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="227" y="96" text-anchor="middle" font-size="12" fill="#1d2b44">Q1 = 13 to Q3 = 21: IQR = 8</text>
<line x1="403" y1="70" x2="403" y2="150" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="403" y="64" text-anchor="middle" font-size="12" fill="#1d2b44">upper fence 33</text>
<text x="546" y="124" text-anchor="middle" font-size="12" fill="#1d2b44">46: outlier</text>
</svg>
<figcaption>Figure 1. Commute times (minutes) of 12 students at the fictional Larkfield Academy. Solid line: median. Dashed line: mean. Dotted line: upper fence, Q3 + 1.5 × IQR. The single long commute pulls the mean to the right of the median.</figcaption>
</figure>

## Checking for outliers: two common rules

There are several ways to flag a **potential outlier**. The course uses two.

| Rule | A value is a potential outlier if it is… | Commute data |
|---|---|---|
| 1.5 × IQR rule | more than 1.5 × IQR above Q3, or more than 1.5 × IQR below Q1 | fences 13 − 12 = 1 and 21 + 12 = 33 minutes |
| 2-standard-deviation rule | more than 2s above or below x̄ | 19 ± 2(9.70) gives −0.39 to 38.39 minutes |

Here both rules flag the 46-minute commute. The two rules do not always agree, so state which rule you used. Drawing boxplots, which show the fences and outliers, comes next in Topic 1.8.

## Resistant and non-resistant statistics

A statistic is **resistant** (robust) if one or two extreme values hardly change it.

- **Resistant:** median, quartiles, IQR. They depend only on the positions near the middle.
- **Non-resistant:** mean, range, standard deviation. They use the actual size of every value, including extreme ones.

Use this to choose a summary. For a roughly symmetric distribution with no outliers, the mean and standard deviation are fine and use all of the data. For a strongly skewed distribution, or one with outliers, the median and IQR describe a typical value and spread better.

## Changing the units

If every value is multiplied by the same positive number (for example, minutes × 60 = seconds), **every** statistic in this guide is multiplied by that number: mean, median, quartiles, range, IQR and s. The variance is multiplied by the square of the number. If a constant is added to every value, the measures of centre and position shift by that constant but the range, IQR and s do not change.

For the commute data in seconds: x̄ = 19 × 60 = 1,140 s, IQR = 8 × 60 = 480 s and s = 9.70 × 60 ≈ 582 s.

## Worked example 1: every summary statistic for the commute data

**Question.** Calculate the mean, five-number summary, range, IQR and sample standard deviation of the 12 commute times. Interpret the standard deviation in context.

1. **Order the data:** 9, 11, 12, 14, 15, 17, 18, 19, 20, 22, 25, 46 minutes.
2. **Mean:** Σxᵢ = 228, so x̄ = 228 ÷ 12 = 19 minutes.
3. **Median:** mean of the 6th and 7th values = (17 + 18) ÷ 2 = 17.5 minutes.
4. **Quartiles:** Q1 = (12 + 14) ÷ 2 = 13 minutes; Q3 = (20 + 22) ÷ 2 = 21 minutes.
5. **Five-number summary:** min 9, Q1 13, median 17.5, Q3 21, max 46 (all in minutes).
6. **Range** = 46 − 9 = 37 minutes. **IQR** = 21 − 13 = 8 minutes.
7. **Deviations** (xᵢ − 19): −10, −8, −7, −5, −4, −2, −1, 0, 1, 3, 6, 27. Check: they add to 0.
8. **Squared deviations:** 100, 64, 49, 25, 16, 4, 1, 0, 1, 9, 36, 729. Sum = 1,034.
9. **Variance:** s² = 1,034 ÷ (12 − 1) = 94 minutes².
10. **Standard deviation:** s = √94 = 9.6954… ≈ 9.70 minutes.

**Interpretation.** The commute times of these 12 students typically vary by about 9.70 minutes from the mean of 19 minutes.

**Check.** A calculator's one-variable statistics gives x̄ = 19, Sx ≈ 9.695 and σx ≈ 9.283. We report Sx. Ten of the 12 values lie within one s of the mean (9.30 to 28.70 minutes), which is typical for a standard deviation.

## Worked example 2: outliers, resistance and choosing a summary

**Question.** (a) Use both outlier rules to decide whether the 46-minute commute is a potential outlier. (b) Recalculate the mean, median, IQR and s without it. (c) Which measure of centre better describes a typical commute? Justify your choice.

**(a)** 1.5 × IQR = 1.5 × 8 = 12 minutes. Upper fence = Q3 + 12 = 21 + 12 = 33 minutes. Since 46 > 33, it is a potential outlier. With the 2s rule: x̄ + 2s = 19 + 2(9.6954) = 38.39 minutes. Since 46 > 38.39, it is again a potential outlier. Both rules agree.

**(b)** Without 46, n = 11 and Σxᵢ = 228 − 46 = 182.

1. Mean: 182 ÷ 11 = 16.545… ≈ 16.55 minutes (down by about 2.45 minutes).
2. Median: the 6th of 11 ordered values = 17 minutes (down by only 0.5 minutes).
3. Quartiles (median left out of each half): lower half 9, 11, 12, 14, 15 gives Q1 = 12; upper half 18, 19, 20, 22, 25 gives Q3 = 20. IQR = 8 minutes (unchanged).
4. Standard deviation (calculator, Sx): s ≈ 4.89 minutes (down from 9.70, roughly halved).

**(c)** The **median** better describes a typical commute. The one very long commute (46 minutes) pulls the mean up: with it, the mean (19 minutes) is greater than 7 of the 12 values and less than only 4. The median changed by only 0.5 minutes when the outlier was removed, while the mean changed by about 2.45 minutes and s roughly halved. So the median of 17.5 minutes, with an IQR of 8 minutes, is the better summary of these students' commutes.

**Check.** The outlier is real data, not an error, so we do not delete it from the data set. We removed it here only to show how much each statistic depends on it.

## Common misconceptions

- **"Find the median of the data as listed."** The median needs ordered data. The 6th and 7th values of the *unordered* list are 25 and 18, which gives the wrong answer of 21.5.
- **"The IQR is the range of the middle values" or "Q3 − median".** IQR = Q3 − Q1, the spread of the middle half.
- **"The standard deviation is the largest distance from the mean."** It is a typical distance; some values (here 46) lie much further away.
- **Dividing by n for s.** The course's sample standard deviation divides by n − 1. Report Sx, not σx.
- **Quoting a statistic with no context.** "s = 9.70" is incomplete. Say "the commute times typically vary by about 9.70 minutes from the mean of 19 minutes".
- **"An outlier must be deleted."** An outlier is a value to investigate. Remove it only if it is a recording error, and say so.
- **"Changing units does not change the standard deviation."** Multiplying the data by a constant multiplies s by the same constant. Only *adding* a constant leaves s unchanged.
- **"The mean is always the best centre."** For skewed data or data with outliers, the resistant median is usually better.

## Where this leads

Next you will display the five-number summary as a boxplot (Topic 1.8) and use these statistics to compare distributions (Topic 1.9). Standard deviation returns when you meet the normal distribution and inference later in the course. Try the [practice questions](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-revision-notes/) and the [checklist](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-checklist/) to consolidate.
