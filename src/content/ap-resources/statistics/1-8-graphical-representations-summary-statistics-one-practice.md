---
resourceId: "mb-ap-stats-1.8-practice"
title: "Graphical Representations of Summary Statistics: Practice Questions (Statistics 1.8)"
description: "Seven original Marlbridge practice questions on five-number summaries, boxplots with outliers, reading boxplots, and the link between shape, mean and median, with worked solutions."
course: "statistics"
unit: 1
topics: ["1.8"]
resourceType: "practice-questions"
prerequisites:
  - "Finding quartiles, the IQR and the 1.5 × IQR fences"
prerequisiteResources: ["mb-ap-stats-1.8-study-guide"]
learningObjectives:
  - "Construct a boxplot that shows outliers, with whiskers in the right place"
  - "Read the share of the data in each section of a boxplot"
  - "Use a boxplot or a five-number summary to describe shape and predict whether the mean or the median is larger"
  - "Explain what a boxplot hides"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use one-variable statistics and the boxplot that shows outliers to check your work. Round final answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-1.8-study-guide", "mb-ap-stats-1.8-revision-notes", "mb-ap-stats-1.8-checklist"]
next: "mb-ap-stats-1.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Whiskers stop at the most extreme values that are not outliers."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: quartiles are found by splitting the ordered data at the median and, when n is odd, leaving the median out of both halves; outliers are judged with the 1.5 × IQR rule; a boxplot marks outliers with a separate symbol. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A boxplot of the heights of 60 students at a fictional school shows minimum 140 cm, Q1 152 cm, median 158 cm, Q3 163 cm and maximum 175 cm. There are no outliers. About what percentage of these students are taller than 152 cm?

- (A) 25%
- (B) 50%
- (C) 75%
- (D) It cannot be estimated without the original data.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 152 cm is Q1. About 25% of the values are at or below Q1, so about 75% are above it: the left part of the box, the right part of the box and the upper whisker, each about 25%.

- (A) is the share **below** Q1, not above it.
- (B) is the share above the **median** (158 cm), not above Q1.
- (D) is wrong because the quartiles tell you approximate shares directly. That is what a five-number summary is for.
</details>

## Question 2 (multiple choice · core)

The number of hours of homework done in one week by 50 students at a fictional school has five-number summary 2, 4, 6, 12, 23 hours. There are no outliers. Which statement is most likely true?

- (A) The mean is close to 6 hours, because the median is 6 hours.
- (B) The mean is greater than 6 hours.
- (C) The mean is less than 6 hours.
- (D) The mean is 12.5 hours, halfway between the minimum and the maximum.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The distribution is skewed right: the median to Q3 (6 hours) is much longer than Q1 to the median (2 hours), and the upper whisker (11 hours) is much longer than the lower whisker (2 hours). In a right-skewed distribution the mean is usually pulled towards the long right tail, so it is likely greater than the median of 6 hours.

- (A) would fit a roughly symmetric distribution. This one is clearly skewed.
- (C) describes a left-skewed distribution, the opposite direction.
- (D) is the midrange, (2 + 23) ÷ 2 = 12.5. The mean is not found from the minimum and maximum alone.
</details>

## Question 3 (multiple choice · core)

The numbers of books read last year by 11 members of a fictional reading club are:

3, 5, 6, 6, 7, 8, 9, 10, 11, 12, 21

In a boxplot that shows outliers, where does the upper whisker end?

- (A) 11 books
- (B) 12 books
- (C) 18.5 books
- (D) 21 books

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** n = 11, so the median is the 6th value, 8. Lower half 3, 5, 6, 6, 7 gives Q1 = 6. Upper half 9, 10, 11, 12, 21 gives Q3 = 11. IQR = 5, 1.5 × IQR = 7.5, upper fence = 11 + 7.5 = 18.5. So 21 is an outlier. The whisker stops at the largest value that is not an outlier: 12 books.

- (A) is Q3, the end of the box, not the end of the whisker.
- (C) is the fence. It is not a data value, so a whisker never ends there unless a value happens to equal it.
- (D) is the maximum. The whisker reaches the maximum only when the maximum is not an outlier.
</details>

## Question 4 (constructed response · core)

In a fictional PE class, 12 students held a plank position for as long as they could. The times, in seconds, are:

64, 71, 48, 67, 74, 61, 70, 66, 77, 63, 72, 68

(a) Find the five-number summary.
(b) Use the 1.5 × IQR rule to identify any potential outliers.
(c) Describe exactly how you would draw the boxplot.
(d) The mean time is 66.75 seconds. Describe the shape of the distribution and explain whether the mean is where you would expect it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Ordered: 48, 61, 63, 64, 66, 67, 68, 70, 71, 72, 74, 77. Median = (67 + 68) ÷ 2 = **67.5 s**. Lower half 48, 61, 63, 64, 66, 67 gives **Q1 = (63 + 64) ÷ 2 = 63.5 s**. Upper half 68, 70, 71, 72, 74, 77 gives **Q3 = (71 + 72) ÷ 2 = 71.5 s**. Five-number summary: **48, 63.5, 67.5, 71.5, 77 seconds**.

**(b)** IQR = 71.5 − 63.5 = 8 s, so 1.5 × IQR = 12 s. Lower fence = 63.5 − 12 = 51.5 s. Upper fence = 71.5 + 12 = 83.5 s. Since 48 < 51.5, **48 s is a potential outlier**. No value is above 83.5 s.

**(c)** Draw a number line from 40 to 80 seconds with equal steps, labelled "Plank time (seconds)". Draw a box from 63.5 to 71.5 with a line at 67.5. Draw the lower whisker from 63.5 to **61**, the smallest value that is not an outlier. Draw the upper whisker from 71.5 to 77. Mark 48 with a separate symbol.

**(d)** The middle of the distribution is roughly symmetric: the median is in the centre of the box (4 s each side). But there is a low outlier at 48 s, which gives a tail to the left, so the distribution is **slightly skewed left**. We would expect the mean to be a little below the median. It is: 66.75 s < 67.5 s.

| Point | What earns it |
|---|---|
| 1 | Correct ordered data and five-number summary |
| 1 | Correct IQR and fences, and identifies 48 s as the only potential outlier, with the comparison shown |
| 1 | Boxplot description with a labelled scale, whisker ending at 61 (not 48 or 51.5) and the outlier marked separately |
| 1 | Describes the shape as skewed left (or symmetric middle with a low outlier) **and** links mean < median to the low value |

Accept "roughly symmetric apart from a low outlier" for the shape in (d) if the mean–median comparison is explained.
</details>

## Question 5 (constructed response · stretch)

A fictional family event had 20 guests. Their ages, in years, are:

4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45

(a) Find the five-number summary and the mean.
(b) A student draws the boxplot and says, "The boxplot is roughly symmetric and the mean is close to the median, so this is a single-peaked, mound-shaped distribution." Use the data to explain why the student is wrong.
(c) A newsletter reports "the typical guest was about 23 or 24 years old". Explain why this is misleading.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** n = 20. Median = (12 + 35) ÷ 2 = **23.5 years**. Lower half (first 10) gives Q1 = (7 + 8) ÷ 2 = **7.5 years**. Upper half gives Q3 = (40 + 41) ÷ 2 = **40.5 years**. Five-number summary: **4, 7.5, 23.5, 40.5, 45 years**. Mean = 482 ÷ 20 = **24.1 years**. (IQR = 33, fences −42 and 90, so no outliers.)

**(b)** The boxplot does look roughly symmetric: Q1 to the median is 16 years and the median to Q3 is 17 years, and the whiskers are 3.5 and 4.5 years. The mean (24.1) is close to the median (23.5). But the data form **two clusters**: 10 children aged 4 to 12 and 10 adults aged 35 to 45, with a **gap** and no guests aged 13 to 34. The distribution is bimodal, not single-peaked. A boxplot is built from five numbers, so it cannot show gaps, clusters or the number of peaks.

**(c)** No guest was aged between 13 and 34. The median and the mean both fall in the gap, so "about 23 or 24" does not describe any actual guest. A better summary describes the two groups separately.

| Point | What earns it |
|---|---|
| 1 | Correct five-number summary and mean, with units |
| 1 | Identifies the two clusters and the gap (or two peaks) using the data |
| 1 | Explains that a boxplot cannot show clusters, gaps or peaks, so symmetry of the boxplot does not imply a mound shape |
| 1 | Explains in context that the centre lies in the gap and matches no guest |

Do not award point 3 for "boxplots are inaccurate" with no reason.
</details>

## Question 6 (constructed response · stretch)

The number of minutes of exercise on one day for 30 workers at a fictional office has five-number summary 0, 10, 20, 45, 120 minutes. The largest value that is not an outlier is 85 minutes.

(a) Show that 120 minutes is a potential outlier and that no low value is an outlier.
(b) Describe the boxplot you would draw.
(c) The mean is either 16.4 minutes or 30.3 minutes. Which is it? Justify your answer without calculating.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** IQR = 45 − 10 = 35 minutes, so 1.5 × IQR = 52.5. Upper fence = 45 + 52.5 = 97.5 minutes. Since 120 > 97.5, it is a potential outlier. Lower fence = 10 − 52.5 = −42.5 minutes. No one can exercise for a negative time, so no low value can be an outlier.

**(b)** A scale from 0 to 120 minutes (or beyond), labelled "Exercise time (minutes)". Box from 10 to 45 with a line at 20. Lower whisker from 10 to 0. Upper whisker from 45 to **85**. A separate symbol at 120.

**(c)** **30.3 minutes.** The distribution is strongly skewed right: the median to Q3 (25 minutes) is much longer than Q1 to the median (10 minutes), the upper whisker reaches 85 while the lower one stops at 0, and there is a high outlier. In a right-skewed distribution the mean is usually greater than the median, which is 20 minutes. 16.4 is less than the median, so it would suggest left skew.

| Point | What earns it |
|---|---|
| 1 | Correct IQR and upper fence, with the comparison 120 > 97.5 |
| 1 | Correct lower fence (or an argument that times cannot be negative) and conclusion |
| 1 | Boxplot description with labelled scale and upper whisker ending at 85, outlier marked |
| 1 | Chooses 30.3 **and** justifies it by right skew and the mean being pulled towards the tail, compared with the median of 20 |

For the fictional data set behind this summary, the mean is 910 ÷ 30 ≈ 30.33 minutes.
</details>

## Question 7 (explanation · stretch)

A boxplot shows the mobile data used in one month by 24 students at a fictional college. The five-number summary is 1, 3, 4, 9, 14 GB, and there are no outliers. Three students make these claims:

- **Claim 1:** "The section from 4 to 9 GB is the longest part of the box, so more students used between 4 and 9 GB than between 3 and 4 GB."
- **Claim 2:** "About half of the students used more than 4 GB."
- **Claim 3:** "The boxplot has no gaps, so there are no gaps in the data."

For each claim, say whether it is correct and explain why.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Claim 1: incorrect.** Each section of a boxplot holds about 25% of the data, so about 6 students are in each part of the box. The 4 to 9 GB section is longer because those data-use values are more **spread out**, not because there are more students in it.

**Claim 2: correct.** 4 GB is the median, so about half of the 24 students (about 12) used more than 4 GB.

**Claim 3: incorrect.** A boxplot only shows five numbers. It cannot show gaps or clusters inside a section. For example, the upper whisker from 9 to 14 GB could hide a gap. A dot plot or histogram would be needed to check.

| Point | What earns it |
|---|---|
| 1 | Claim 1 incorrect, explained by "each section holds about 25%" and length meaning spread |
| 1 | Claim 2 correct, linked to the median |
| 1 | Claim 3 incorrect, explained by a boxplot not showing gaps or clusters |

A claim judged correctly with no reason earns no point.
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Reading a boxplot" in the [study guide](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-study-guide/). Each section holds about 25%.
- **Q2 or Q6(c) wrong:** revisit "Shape, the mean and the median" and Worked example 2.
- **Q3, Q4(c) or Q6(b) wrong:** revisit "Outliers and where the whiskers stop". Whiskers end at data values, never at the fence.
- **Q4(a) or (b) wrong:** work through Worked example 1 again, and check quartiles in the [Topic 1.7 study guide](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-study-guide/).
- **Q5 wrong:** revisit "What a boxplot cannot show".

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-8-graphical-representations-summary-statistics-one-checklist/).
