---
resourceId: "mb-ap-stats-1.7-practice"
title: "Summary Statistics for One Quantitative Variable: Practice Questions (Statistics 1.7)"
description: "Seven original Marlbridge practice questions on mean, median, quartiles, IQR, standard deviation, outliers, resistance and unit changes, with worked solutions and suggested rubrics."
course: "statistics"
unit: 1
topics: ["1.7"]
resourceType: "practice-questions"
prerequisites:
  - "Ordering data and finding a median"
prerequisiteResources: ["mb-ap-stats-1.7-study-guide"]
learningObjectives:
  - "Calculate quartiles, IQR, mean and sample standard deviation correctly"
  - "Apply the 1.5 × IQR and 2-standard-deviation outlier rules"
  - "Predict how outliers and unit changes affect summary statistics"
  - "Compare two distributions and justify a choice of summary statistic in context"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use one-variable statistics to check your work. Use Sx (n − 1) for the standard deviation. Round final answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-1.7-study-guide", "mb-ap-stats-1.7-revision-notes", "mb-ap-stats-1.7-checklist"]
next: "mb-ap-stats-1.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "exam-statistics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every interpretation must be in context, with units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: s means the **sample** standard deviation (divide by n − 1; Sx on a calculator); quartiles are found by splitting the ordered data at the median and, when n is odd, leaving the median out of both halves; round final answers to 2 decimal places unless stated. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Ten students recorded how long they took to solve a puzzle, in seconds:

31, 45, 28, 52, 39, 41, 36, 60, 33, 47

What is the interquartile range of these times?

- (A) 2 seconds
- (B) 7 seconds
- (C) 14 seconds
- (D) 32 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Ordered: 28, 31, 33, 36, 39, 41, 45, 47, 52, 60. The median is (39 + 41) ÷ 2 = 40 s. Lower half 28, 31, 33, 36, 39 gives Q1 = 33 s. Upper half 41, 45, 47, 52, 60 gives Q3 = 47 s. IQR = 47 − 33 = 14 seconds.

- (A) uses the two middle values used for the median (39 and 41) as if they were the quartiles, giving 41 − 39 = 2. Quartiles are the medians of each half, not the values next to the median.
- (B) is Q3 − median = 47 − 40, which measures only the upper quarter of the middle half.
- (D) is the range, 60 − 28 = 32 s, not the IQR.
</details>

## Question 2 (multiple choice · core)

In the data from Question 1, the largest time, 60 s, was typed by mistake as 600 s. Which statement about the effect of this error is correct?

- (A) The median and the mean both increase.
- (B) The median does not change, and the mean increases by 54 s.
- (C) The median does not change, and the mean increases by 540 s.
- (D) Neither the median nor the mean changes, because only one value is wrong.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The largest value stays the largest, so the two middle values (39 and 41) are unchanged and the median stays 40 s. The sum increases by 600 − 60 = 540 s, so the mean increases by 540 ÷ 10 = 54 s (from 41.2 s to 95.2 s).

- (A) assumes the median responds to the size of an extreme value. The median is resistant: it depends only on the middle positions.
- (C) forgets to divide the change in the sum by n = 10.
- (D) assumes one value cannot matter. The mean uses every value, so it is not resistant.
</details>

## Question 3 (multiple choice · core)

The lengths of leaves from a fictional plant species have mean 40 cm and standard deviation 6 cm. A researcher converts every length to millimetres (1 cm = 10 mm). What are the new mean and standard deviation?

- (A) Mean 400 mm, standard deviation 6 mm
- (B) Mean 400 mm, standard deviation 60 mm
- (C) Mean 400 mm, standard deviation 600 mm
- (D) Mean 50 mm, standard deviation 16 mm

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Multiplying every value by 10 multiplies every distance from the mean by 10, so both the mean and the standard deviation are multiplied by 10: 400 mm and 60 mm.

- (A) treats the change like *adding* a constant, which would leave the spread unchanged. Multiplying stretches the spread.
- (C) multiplies s by 10², which is what happens to the **variance**, not to s.
- (D) adds 10 instead of multiplying by 10.
</details>

## Question 4 (calculation · core)

The lengths of five fish caught in a fictional river are 22, 25, 28, 30 and 35 cm. Calculate, showing each step, the sample standard deviation. Interpret it in context.

<details>
<summary>Worked solution</summary>

1. Mean: x̄ = (22 + 25 + 28 + 30 + 35) ÷ 5 = 140 ÷ 5 = 28 cm.
2. Deviations: −6, −3, 0, 2, 7 (sum = 0, as a check).
3. Squared deviations: 36, 9, 0, 4, 49. Sum = 98.
4. Variance: s² = 98 ÷ (5 − 1) = 24.5 cm².
5. s = √24.5 = **4.95 cm**.

**Interpretation.** The lengths of these five fish typically vary by about 4.95 cm from the mean length of 28 cm.

Suggested mark points (3): 1 for the deviations from the mean; 1 for dividing by n − 1 = 4 and taking the square root; 1 for an interpretation that names fish lengths, the mean and the unit (cm). Dividing by 5 gives 4.43 cm; this is σx and does not earn the second point.
</details>

## Question 5 (constructed response · core)

A water company measured the volume of water used in one shower by each of 10 households in the fictional town of Vellmar. The volumes, in litres, are:

40, 52, 35, 43, 95, 38, 48, 32, 45, 41

For these data, x̄ = 46.9 litres and s = 17.90 litres.

(a) Find the five-number summary and the IQR.
(b) Use the 1.5 × IQR rule to decide whether 95 litres is a potential outlier. Then check the same value with the 2-standard-deviation rule.
(c) The company wants one number to describe a typical shower in Vellmar. Should it report the mean or the median? Justify your answer using the data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Ordered: 32, 35, 38, 40, 41, 43, 45, 48, 52, 95. Median = (41 + 43) ÷ 2 = **42 L**. Lower half 32, 35, 38, 40, 41 → **Q1 = 38 L**. Upper half 43, 45, 48, 52, 95 → **Q3 = 48 L**. Five-number summary: 32, 38, 42, 48, 95 litres. **IQR = 10 L**.

**(b)** 1.5 × IQR = 15 L. Upper fence = 48 + 15 = 63 L. Since 95 > 63, 95 L is a potential outlier. With the 2s rule: 46.9 + 2(17.90) = 82.70 L. Since 95 > 82.70, it is also a potential outlier.

**(c)** The **median** (42 L). The distribution is skewed to the right by the one very large value of 95 L. The mean (46.9 L) is pulled towards it: it is greater than 7 of the 10 volumes. The median is resistant and is not affected by how large the 95 L value is. So 42 litres per shower better describes a typical household in this sample.

| Point | What earns it |
|---|---|
| 1 | Correct ordered data, median, Q1 and Q3 (five-number summary) and IQR = 10 L |
| 1 | Correct fence (63 L) and conclusion that 95 L is a potential outlier, with comparison shown |
| 1 | Correct 2s bound (82.70 L) and conclusion, with comparison shown |
| 1 | Chooses the median **and** justifies it by the outlier/skew and the resistance of the median, in context with units |

Accept an alternative quartile method (for example, including the median in each half when n is odd) if the method is shown; here n is even, so both split-at-the-median methods agree (software that interpolates between values may give slightly different quartiles). Do not award point 4 for "the median is better" with no reason.
</details>

## Question 6 (constructed response · stretch)

A consumer group tested the battery life, in hours, of 20 phones of each of two fictional models. The summary statistics are:

| Model | n | Min | Q1 | Median | Q3 | Max | Mean | s |
|---|---|---|---|---|---|---|---|---|
| Ardent | 20 | 18 | 21 | 23 | 25 | 27 | 23.1 | 2.6 |
| Brio | 20 | 14 | 20 | 26 | 29 | 31 | 24.0 | 5.4 |

(a) Compare the centres and the variabilities of the two distributions, in context.
(b) Show that neither model has a potential outlier by the 1.5 × IQR rule.
(c) A buyer wants a phone whose battery life is predictable. Which model should the buyer choose? Justify your answer with statistics.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Centre:** Brio's median battery life (26 h) is 3 hours greater than Ardent's (23 h). **Variability:** Brio's battery lives are much more spread out. Its IQR is 29 − 20 = 9 h against 25 − 21 = 4 h for Ardent, and its standard deviation (5.4 h) is about twice Ardent's (2.6 h). The ranges are 17 h and 9 h. For Brio the mean (24.0 h) is below the median (26 h), which suggests a left-skewed distribution; for Ardent the mean and median are close.

**(b)** Ardent: 1.5 × 4 = 6, fences 21 − 6 = 15 h and 25 + 6 = 31 h; min 18 and max 27 lie inside. Brio: 1.5 × 9 = 13.5, fences 20 − 13.5 = 6.5 h and 29 + 13.5 = 42.5 h; min 14 and max 31 lie inside. No potential outliers in either model.

**(c)** **Ardent.** Its battery lives vary less: the middle half of Ardent phones lasted between 21 and 25 hours (IQR 4 h), compared with 20 to 29 hours for Brio (IQR 9 h). Brio lasts longer on average, but a buyer who wants predictability should choose the model with the smaller spread.

| Point | What earns it |
|---|---|
| 1 | Compares centres using a named statistic (median or mean), with values and units |
| 1 | Compares variability using IQR, s or range, with values and units |
| 1 | Correct fences for both models and a correct conclusion |
| 1 | Chooses Ardent **and** links "predictable" to smaller variability, quoting a measure of spread |

Comparing means (23.1 h and 24.0 h) instead of medians is acceptable in (a) if the comparison is correct. A comparison must use comparative words ("greater than", "more spread out"); listing the numbers alone does not earn the point.
</details>

## Question 7 (explanation · stretch)

For the 12 Larkfield Academy commute times in the study guide (9, 11, 12, 14, 15, 17, 18, 19, 20, 22, 25, 46 minutes), x̄ = 19 minutes and s = 9.70 minutes. A student writes: "The standard deviation is 9.70 minutes, so every student's commute is within 9.70 minutes of 19 minutes."

(a) Explain what the standard deviation of 9.70 minutes tells you, in context.
(b) Use the data to show that the student's statement is wrong.
(c) A student's commute is 12 minutes. At what percentile is this commute? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The commute times of these 12 students typically differ from the mean of 19 minutes by about 9.70 minutes.

**(b)** "Within 9.70 minutes of 19" means between 9.30 and 28.70 minutes. The commutes of 9 minutes and 46 minutes are outside this interval, so not every commute is that close. The standard deviation is a typical distance, not a maximum distance.

**(c)** Three of the 12 commutes (9, 11 and 12 minutes) are at or below 12 minutes. 3 ÷ 12 = 0.25, so a 12-minute commute is at the **25th percentile**: 25% of these students had a commute of 12 minutes or less.

| Point | What earns it |
|---|---|
| 1 | Interprets s as a typical (not maximum) distance from the mean, in context with units |
| 1 | Finds the interval 9.30 to 28.70 minutes and names at least one value outside it |
| 1 | 25th percentile with the count 3 out of 12 shown and a context sentence |
</details>

## How did you do?

- **Q1 wrong:** re-read "Measures of position" in the [study guide](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-study-guide/). Order first; IQR = Q3 − Q1.
- **Q2 or Q5(c) wrong:** revisit "Resistant and non-resistant statistics" and Worked example 2.
- **Q3 wrong:** revisit "Changing the units".
- **Q4 or Q7 wrong:** work through Worked example 1 again, especially the n − 1 step and the context sentence.
- **Q5(b) or Q6(b) wrong:** revisit "Checking for outliers: two common rules".
- **Q6 incomplete:** a comparison needs comparative words, values and units for both centre and variability.

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-7-summary-statistics-one-quantitative-variable-checklist/).
