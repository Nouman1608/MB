---
resourceId: "mb-ap-stats-1.9-practice"
title: "Comparisons of the Distributions for One Quantitative Variable: Practice Questions (Statistics 1.9)"
description: "Seven original Marlbridge practice questions on comparing distributions with stemplots, boxplots and frequency tables, justifying claims and using z-scores, with worked solutions."
course: "statistics"
unit: 1
topics: ["1.9"]
resourceType: "practice-questions"
prerequisites:
  - "Five-number summary, IQR and outlier fences"
prerequisiteResources: ["mb-ap-stats-1.9-study-guide"]
learningObjectives:
  - "Compare two distributions in context using shape, centre, variability and unusual features"
  - "Recognise what boxplots can and cannot show"
  - "Calculate and interpret z-scores from population parameters or sample statistics"
  - "Use z-scores and summary statistics to justify or reject a claim"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use one-variable statistics for each group separately. Round z-scores to 2 decimal places and other answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-1.9-study-guide", "mb-ap-stats-1.9-revision-notes", "mb-ap-stats-1.9-checklist"]
next: "mb-ap-stats-1.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "A comparison needs comparative words, values for both groups, units and context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All people, places and data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: quartiles are found by splitting the ordered data at the median and, when n is odd, leaving the median out of both halves; potential outliers use the 1.5 × IQR rule; s means the sample standard deviation (Sx); round final answers to 2 decimal places unless stated. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A teacher at a fictional school recorded the minutes of exercise per day for 60 students in each of two year groups. She drew parallel boxplots of the two distributions on one scale. Which question **cannot** be answered from the boxplots alone?

- (A) Which year group has the greater median exercise time?
- (B) Which year group has the greater interquartile range?
- (C) Is there a gap, with no students at all, between 20 and 30 minutes in either year group?
- (D) Is either distribution skewed to the right?

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A boxplot is built from the five-number summary and any outliers. Each whisker and each half of the box covers about a quarter of the data whether those values are spread out or bunched, so a gap is invisible. You would need a dot plot, stemplot or histogram.

- (A) can be answered: compare the median lines.
- (B) can be answered: compare the box widths (Q3 − Q1).
- (D) can be answered: a median near the left of the box with a long right whisker shows right skew.
</details>

## Question 2 (multiple choice · core)

All 600 runners in the fictional Millbrook 5 km fun run had a mean finishing time of μ = 31.5 minutes, with standard deviation σ = 4.5 minutes. Tomás finished in 24.3 minutes. What is the z-score of his time?

- (A) 1.60
- (B) 5.40
- (C) −0.36
- (D) −1.60

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** z = (x − μ) ÷ σ = (24.3 − 31.5) ÷ 4.5 = −7.2 ÷ 4.5 = −1.60. Tomás's time was 1.60 standard deviations below the mean time. In a race that is a fast time.

- (A) has the correct size but the wrong sign: it calculates μ − x. His time is below the mean, so z must be negative.
- (B) is x ÷ σ = 24.3 ÷ 4.5. It forgets to subtract the mean first.
- (C) divides by the variance, σ² = 20.25, instead of by σ: −7.2 ÷ 20.25 ≈ −0.36.
</details>

## Question 3 (multiple choice · core)

Four students each entered a different fictional competition. For each competition the mean and standard deviation of **all** entrants' scores are known.

| Student | Competition | Score | μ | σ |
|---|---|---|---|---|
| Ana | Geography Bowl | 88 | 70 | 15 |
| Ben | Science Sprint | 81 | 72 | 6 |
| Chen | Puzzle League | 45 | 38 | 4 |
| Dara | Spelling Cup | 92 | 80 | 10 |

Whose score was highest **relative to the other entrants in their own competition**?

- (A) Dara
- (B) Chen
- (C) Ana
- (D) Ben

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Compare z-scores. Ana: (88 − 70) ÷ 15 = 1.20. Ben: (81 − 72) ÷ 6 = 1.50. Chen: (45 − 38) ÷ 4 = 1.75. Dara: (92 − 80) ÷ 10 = 1.20. Chen's score is the most standard deviations above its mean, even though it is the lowest raw score.

- (A) picks the highest raw score, but scores from different competitions are on different scales. Dara's z-score is only 1.20.
- (C) picks the largest distance above the mean (18 points), but with σ = 15 that is only 1.20 standard deviations.
- (D) Ben's z-score of 1.50 is high, but Chen's 1.75 is higher.
</details>

## Question 4 (constructed response · core)

Two fictional cafés recorded how long 14 customers each waited for their food one Saturday lunchtime, in minutes. The back-to-back stemplot uses split stems: the first stem in each pair holds leaves 0–4, the second holds leaves 5–9.

| Café North leaves | Stem | Café South leaves |
|---:|:---:|:---|
| 4 | 0 | |
| 9 9 8 7 6 | 0 | 6 8 9 |
| 4 3 2 1 1 0 | 1 | 0 1 2 3 |
| 7 5 | 1 | |
| | 2 | 1 2 3 4 |
| | 2 | 5 6 |
| | 3 | |
| | 3 | |
| | 4 | 0 |

Key: 1 | 2 | 3 means 12 minutes at Café North and 13 minutes at Café South.

(a) Find the median and the IQR of the waiting times at each café.
(b) Compare the two distributions of waiting times.
(c) The owner of Café South says, "A typical customer here waits about 17 minutes." Explain why this description is misleading, and name one feature of the South data that a boxplot would hide.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** North ordered: 4, 6, 7, 8, 9, 9, 10, 11, 11, 12, 13, 14, 15, 17. Median = (10 + 11) ÷ 2 = **10.5 min**. Q1 = 8 (median of the lower 7), Q3 = 13 (median of the upper 7), **IQR = 5 min**.
South ordered: 6, 8, 9, 10, 11, 12, 13, 21, 22, 23, 24, 25, 26, 40. Median = (13 + 21) ÷ 2 = **17 min**. Q1 = 10, Q3 = 24, **IQR = 14 min**.

**(b)** **Shape:** North's waits are roughly symmetric with one peak around 9 to 12 minutes. South's form two clusters, 6 to 13 and 21 to 26 minutes, with a gap between them and one long wait of 40 minutes. **Centre:** the median wait at South (17 min) is 6.5 minutes longer than at North (10.5 min). **Variability:** South's waits are much more variable (IQR 14 min against 5 min). **Unusual features:** neither café has an outlier by the 1.5 × IQR rule (South's upper fence is 24 + 21 = 45 min), but South's 40-minute wait is well separated from the rest.

**(c)** No South customer waited between 14 and 20 minutes: seven waited 13 minutes or less and seven waited 21 minutes or more. So 17 minutes sits in the gap and describes nobody's wait. A boxplot would hide the **two clusters** and the **gap**.

| Point | What earns it |
|---|---|
| 1 | Correct medians and IQRs for both cafés, with units |
| 1 | Compares centre and variability with comparative words and values for both cafés |
| 1 | Describes South's shape as two clusters with a gap (or bimodal), contrasted with North's single peak |
| 1 | Explains that 17 min lies in the gap where no customer waited, and names clusters or the gap as hidden by a boxplot |

Means are also acceptable for centre in (b) (North 10.43 min, South 17.86 min) if the comparison is correct.
</details>

## Question 5 (constructed response · core)

A class tested two fictional paper-plane designs, throwing 20 planes of each. The flight distances, in metres, are summarised below. The longest Design X flight that is not the maximum was 8.5 m; the shortest Design Y flight that is not the minimum was 4.8 m.

| Design | n | Min | Q1 | Median | Q3 | Max | Mean | s |
|---|---|---|---|---|---|---|---|---|
| X | 20 | 4.6 | 6.05 | 6.75 | 7.55 | 12.4 | 6.98 | 1.62 |
| Y | 20 | 3.9 | 7.15 | 8.35 | 9.20 | 10.4 | 7.99 | 1.73 |

(a) Use the 1.5 × IQR rule to identify any outliers in each design.
(b) Compare the two distributions of flight distance.
(c) The inventor of Design X says: "My design is better, because it produced the longest flight of all 40 planes." Do the data support this claim? Justify your answer. You may also use these facts: 16 of the 20 Design Y flights went further than 6.75 m, and 2 of the 20 Design X flights went further than 8.35 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Design X: IQR = 1.50 m, so the fences are 6.05 − 2.25 = 3.80 m and 7.55 + 2.25 = 9.80 m. The maximum, 12.4 m, is an outlier; the next longest, 8.5 m, is inside. Design Y: IQR = 2.05 m, so the fences are 7.15 − 3.075 = 4.075 m and 9.20 + 3.075 = 12.275 m. The minimum, 3.9 m, is an outlier; the next shortest, 4.8 m, is inside.

**(b)** **Centre:** the median Design Y flight (8.35 m) is 1.6 m longer than the median Design X flight (6.75 m). **Variability:** Design Y's distances are slightly more variable (IQR 2.05 m against 1.50 m; s 1.73 m against 1.62 m). **Shape and outliers:** Design X has a high outlier (12.4 m) that stretches it to the right. Design Y is skewed to the left, with a long lower whisker and a low outlier (3.9 m).

**(c)** No. The 12.4 m flight is one unusual throw, not typical of Design X. 16 of the 20 Design Y flights beat Design X's median of 6.75 m, while only 2 of the 20 Design X flights beat Design Y's median of 8.35 m. For a typical throw, Design Y flies further.

| Point | What earns it |
|---|---|
| 1 | Correct fences for both designs and correct outliers (12.4 m for X, 3.9 m for Y) |
| 1 | Compares centres with a named statistic, values and units |
| 1 | Compares variability and describes shape or outliers for both designs |
| 1 | Rejects the claim, explaining that one outlying flight does not describe the typical flight, and supports this with the medians or the counts |

Comparing means (7.99 m and 6.98 m) is acceptable in (b), but note that each mean is affected by its outlier.
</details>

## Question 6 (calculation · core)

A sample of 30 eggs from the fictional Ashby Farm has mean mass x̄ = 58.4 g and standard deviation s = 4.2 g. The population values are unknown.

(a) Calculate the z-score of an egg of mass 64.7 g and interpret it in context.
(b) Find the mass of an Ashby egg with a z-score of −2.00.
(c) A sample from Brook Farm has x̄ = 55.0 g and s = 3.0 g. One Brook egg weighs 61.0 g. Which egg is more unusually heavy compared with the other eggs from its own farm: the 64.7 g Ashby egg or the 61.0 g Brook egg? Justify your answer.

<details>
<summary>Worked solution</summary>

**(a)** z = (64.7 − 58.4) ÷ 4.2 = 6.3 ÷ 4.2 = **1.50**. This egg's mass is 1.50 standard deviations above the mean mass of the Ashby sample.

**(b)** x = x̄ + zs = 58.4 + (−2.00)(4.2) = 58.4 − 8.4 = **50.0 g**.

**(c)** Brook egg: z = (61.0 − 55.0) ÷ 3.0 = **2.00**. The Brook egg is 2.00 standard deviations above its farm's mean, against 1.50 for the Ashby egg. So the **61.0 g Brook egg** is more unusually heavy for its farm, even though it is the lighter egg.

Suggested mark points (3): 1 for z = 1.50 with an interpretation naming egg mass, the mean and "standard deviations above"; 1 for 50.0 g (adding 8.4 to get 66.8 g does not earn the point); 1 for both z-scores compared and the Brook egg chosen.
</details>

## Question 7 (constructed response · stretch)

Two fictional public libraries asked a random sample of members how many books they borrowed last month.

| Books borrowed | Pinewood (n = 40) | Quarry Lane (n = 80) |
|---|---|---|
| 0–1 | 4 | 22 |
| 2–3 | 8 | 24 |
| 4–5 | 12 | 16 |
| 6–7 | 10 | 10 |
| 8–9 | 6 | 8 |

A council officer says: "More Quarry Lane members borrowed 6 or more books (18 against 16), so Quarry Lane members tend to borrow more."

(a) Explain why the officer should not compare these counts directly. Calculate the relative frequency of each class for both libraries.
(b) State the class that contains the median for each library.
(c) Compare the two distributions and say whether the data support the officer's claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The samples are different sizes: Quarry Lane surveyed twice as many members, so its counts are larger for that reason alone. Relative frequencies (count ÷ n):

| Books borrowed | Pinewood | Quarry Lane |
|---|---|---|
| 0–1 | 0.100 | 0.275 |
| 2–3 | 0.200 | 0.300 |
| 4–5 | 0.300 | 0.200 |
| 6–7 | 0.250 | 0.125 |
| 8–9 | 0.150 | 0.100 |

**(b)** Pinewood: the median is the mean of the 20th and 21st values. Cumulative counts are 4, 12, 24, so both lie in **4–5 books**. Quarry Lane: the median is the mean of the 40th and 41st values. Cumulative counts are 22, 46, so both lie in **2–3 books**.

**(c)** Pinewood's distribution is roughly symmetric with a peak at 4–5 books; Quarry Lane's is skewed to the right with a peak at 2–3 books. Pinewood's median class (4–5 books) is higher than Quarry Lane's (2–3 books). 40% of Pinewood members (16 of 40) borrowed 6 or more books, against only 22.5% at Quarry Lane (18 of 80). The data do **not** support the claim: in these samples, Pinewood members tend to borrow more.

| Point | What earns it |
|---|---|
| 1 | Explains that the sample sizes differ, so proportions are needed, and gives correct relative frequencies |
| 1 | Correct median class for both libraries, with reasoning from cumulative counts |
| 1 | Compares shape or centre of the two distributions, in context |
| 1 | Rejects the claim using the proportions 40% and 22.5% (or equivalent) |
</details>

## How did you do?

- **Q1 wrong:** re-read "Which display shows which feature?" in the [study guide](/advanced-course-resources/statistics/1-9-comparisons-distributions-one-quantitative-variable-study-guide/).
- **Q2 or Q6 wrong:** revisit "Z-scores: relative position" and Worked example 3. Check the sign: x − μ.
- **Q3 wrong:** work through Worked example 2 again.
- **Q4 or Q5 incomplete:** revisit Worked example 1. Cover shape, centre, variability and unusual features, with comparative words, values and units.
- **Q7 wrong:** revisit the note on relative frequency for groups of different sizes.

Then tick off the [topic checklist](/advanced-course-resources/statistics/1-9-comparisons-distributions-one-quantitative-variable-checklist/).
