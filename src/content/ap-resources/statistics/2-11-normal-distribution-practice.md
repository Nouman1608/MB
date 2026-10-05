---
resourceId: "mb-ap-stats-2.11-practice"
title: "The Normal Distribution: Practice Questions (Statistics 2.11)"
description: "Seven original Marlbridge practice questions on normal curves, the empirical rule, interval probabilities, boundary values and percentiles, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.11"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating z-scores"
prerequisiteResources: ["mb-ap-stats-2.11-study-guide"]
learningObjectives:
  - "Describe how the mean and standard deviation determine a normal curve"
  - "Estimate percentages with the empirical rule and calculate interval probabilities with technology or a table"
  - "Find boundary values for the lowest, highest, middle and most extreme p% of a normal distribution"
  - "Compare relative positions with percentiles and judge whether a normal model is appropriate"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf and invNorm, or a standard normal table. Give probabilities to 4 decimal places and boundary values to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-2.11-study-guide", "mb-ap-stats-2.11-revision-notes", "mb-ap-stats-2.11-checklist"]
next: "mb-ap-stats-2.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every calculation names the distribution, its parameters, the boundary and the direction."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: N(μ, σ) means a normal distribution with mean μ and **standard deviation** σ; a z-table gives the area to the left of z; technology answers are given first, with table answers where they differ. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

The random variables X and Y are normally distributed: X ~ N(50, 4) and Y ~ N(50, 8). Their curves are drawn on the same axes. Which statement is correct?

- (A) The curve for Y is taller than the curve for X, because Y has the larger standard deviation.
- (B) The curve for X is taller and more concentrated around 50 than the curve for Y.
- (C) The total area under the curve for Y is twice the total area under the curve for X.
- (D) The curves have different centres, because their standard deviations are different.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both curves have total area 1. X has the smaller standard deviation, so its area is packed into a narrower range and its curve must be taller. (Its peak is exactly twice as high as Y's.)

- (A) reverses the relationship: a larger σ gives a **shorter**, wider curve.
- (C) is impossible: the total area under any probability density curve is 1.
- (D) confuses the parameters: the centre is set by μ, which is 50 for both.
</details>

## Question 2 (multiple choice · foundation)

A fictional reaction-time app finds that its users' reaction times are approximately normal with mean 250 milliseconds (ms) and standard deviation 30 ms. Using the empirical rule, approximately what percentage of users have a reaction time between 190 ms and 280 ms?

- (A) 47.5%
- (B) 68%
- (C) 81.5%
- (D) 95%

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 190 = 250 − 2(30), which is μ − 2σ, and 280 = 250 + 30, which is μ + σ. From μ − 2σ to μ is half of 95%, which is 47.5%. From μ to μ + σ is half of 68%, which is 34%. Total: 47.5% + 34% = 81.5%. (Technology gives 81.86%.)

- (A) is only the part from 190 ms to 250 ms; it leaves out 250 ms to 280 ms.
- (B) is the percentage within one standard deviation on **both** sides (220 ms to 280 ms).
- (D) is the percentage within two standard deviations on both sides (190 ms to 310 ms).
</details>

## Question 3 (multiple choice · core)

Delivery times for a fictional parcel company, Swiftbox, are approximately normal with mean 32 minutes and standard deviation 5 minutes. What is the probability that a randomly chosen delivery takes more than 40 minutes?

- (A) 0.4452
- (B) 0.0548
- (C) 0.1096
- (D) 0.9452

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** X ~ N(32, 5). z = (40 − 32) ÷ 5 = 1.6. P(X > 40) = P(Z > 1.6) = 1 − 0.9452 = 0.0548. Technology: normalcdf(lower = 40, upper = 10⁹⁹, μ = 32, σ = 5) = 0.0548.

- (A) is the area between the mean (32) and 40 minutes, not the area above 40.
- (C) doubles the answer, as if the question asked for times more than 8 minutes from the mean in either direction.
- (D) is P(X < 40), the area to the **left** of 40. The question asks "more than".
</details>

## Question 4 (calculation · core)

At the fictional Halden Café, the time the coffee machine takes to make a flat white is approximately normal with mean 28 seconds and standard deviation 2.5 seconds.

(a) Find the probability that a randomly chosen flat white takes between 25 and 30 seconds. Show your work, including a labelled sketch.
(b) The café makes 200 flat whites on a busy day. How many would you expect to take more than 33 seconds?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

1. X = time to make one flat white; X ~ N(28, 2.5). We want P(25 < X < 30). Sketch: a normal curve centred on 28 s, with the region between 25 s and 30 s shaded.
2. z-scores: (25 − 28) ÷ 2.5 = −1.2 and (30 − 28) ÷ 2.5 = 0.8.
3. Table: P(Z < 0.8) − P(Z < −1.2) = 0.7881 − 0.1151 = 0.6730. Technology: normalcdf(lower = 25, upper = 30, μ = 28, σ = 2.5) = **0.6731**.

There is about a 0.67 probability that a flat white takes between 25 and 30 seconds.

**(b)** z = (33 − 28) ÷ 2.5 = 2. P(X > 33) = 1 − 0.9772 = 0.0228 (technology: 0.02275). Expected number = 200 × 0.02275 ≈ **4.55**, so about 4 or 5 flat whites. (The empirical rule estimate, 2.5% of 200 = 5, is close.)

| Point | What earns it |
|---|---|
| 1 | Names the distribution and parameters, N(28, 2.5), and shows the boundaries and direction (sketch or probability statement) |
| 1 | Correct z-scores, or calculator inputs labelled with μ and σ |
| 1 | Correct probability, 0.6731 (accept 0.6730 from a table) |
| 1 | P(X > 33) ≈ 0.0228 and expected count ≈ 4.55 in context |

Dividing by the variance (2.5² = 6.25) instead of the standard deviation gives 0.3099 and loses points 2 and 3. An unlabelled command such as "normalcdf(25, 30, 28, 2.5)" earns point 3 but not point 1.
</details>

## Question 5 (constructed response · core)

A seed company sells a fictional sunflower variety, Velora. At 8 weeks, the heights of Velora plants are approximately normal with mean 145 cm and standard deviation 18 cm.

(a) Find the height below which the shortest 15% of plants fall.
(b) Find the interval that contains the middle 60% of heights.
(c) The company labels the most extreme 10% of plants (very short or very tall) as "off-type". Find the boundaries.
(d) One plant is 170 cm tall. At what percentile is it?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

Let X = height of a Velora plant at 8 weeks; X ~ N(145, 18).

**(a)** P(X < xₐ) = 0.15. invNorm(area = 0.15) gives z = −1.0364. xₐ = 145 + (−1.0364)(18) = **126.34 cm**.

**(b)** The middle 60% leaves 40% in the tails, 20% each side. z = ±0.8416 (areas to the left 0.20 and 0.80). Interval: 145 ± 0.8416(18) = **129.85 cm to 160.15 cm**.

**(c)** The most extreme 10% means 5% in each tail. Areas to the left 0.05 and 0.95 give z = ±1.6449. Boundaries: 145 ± 1.6449(18) = **115.39 cm and 174.61 cm**. Plants shorter than 115.39 cm or taller than 174.61 cm are labelled off-type.

**(d)** z = (170 − 145) ÷ 18 = 1.3889. P(Z < 1.3889) = 0.9176, so the plant is at about the **92nd percentile** (91.76th). About 92% of Velora plants are 170 cm or shorter at 8 weeks. (Table with z = 1.39: 0.9177.)

| Point | What earns it |
|---|---|
| 1 | (a) correct z for area 0.15 and height 126.34 cm |
| 1 | (b) splits the remaining 40% equally and gives 129.85 cm to 160.15 cm |
| 1 | (c) splits 10% into 5% per tail and gives 115.39 cm and 174.61 cm |
| 1 | (d) percentile about 92 with a context sentence |

A common error in (c) is putting 10% in **each** tail, which gives 121.93 cm and 168.07 cm (the middle 80%). Table z-values (for example 1.04, 0.84, 1.645) give answers within about 0.1 cm and are acceptable.
</details>

## Question 6 (constructed response · stretch)

Two fictional schools use different entrance tests. Scores on the Northgate test are approximately N(62, 6). Scores on the Southmere test are approximately N(500, 32). Amira scored 71 on the Northgate test. Bilal scored 540 on the Southmere test.

(a) Use percentiles to decide which student did better relative to the other candidates on their own test.
(b) What proportion of Southmere candidates scored between 470 and 540?
(c) Northgate offers a scholarship to the top 10% of scores. What is the lowest score that qualifies?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Amira: z = (71 − 62) ÷ 6 = 1.5. P(Z < 1.5) = 0.9332, about the **93rd percentile**. Bilal: z = (540 − 500) ÷ 32 = 1.25. P(Z < 1.25) = 0.8944, about the **89th percentile**. Amira did better relative to her test: only about 6.68% of Northgate candidates scored higher than her, compared with about 10.56% of Southmere candidates who scored higher than Bilal.

**(b)** Y ~ N(500, 32). z-scores: (470 − 500) ÷ 32 = −0.9375 and 1.25. normalcdf(lower = 470, upper = 540, μ = 500, σ = 32) = **0.7201**. About 72% of Southmere candidates scored between 470 and 540. (Table with z = −0.94: 0.8944 − 0.1736 = 0.7208.)

**(c)** Area to the left of the cut-off = 0.90, so z = 1.2816. Score = 62 + 1.2816(6) = **69.69**. A candidate needs a score of about 69.69 or more (70 or more if scores are whole numbers).

| Point | What earns it |
|---|---|
| 1 | Both percentiles (or both proportions above) correct |
| 1 | Correct comparison: Amira is relatively higher, justified by the percentiles in context |
| 1 | (b) 0.7201 with distribution, boundaries and direction shown |
| 1 | (c) uses area 0.90 to the left (not 0.10) and gives 69.69 |

Saying "Bilal did better because 540 > 71" earns no credit for (a): the scores are on different scales. Using area 0.10 in (c) gives 54.31, which is the cut-off for the **bottom** 10%.
</details>

## Question 7 (explanation · stretch)

A fictional phone-repair shop records how long each customer waits in the queue. The waiting times have mean 6 minutes and standard deviation 5 minutes. A manager proposes modelling waiting time with N(6, 5).

(a) Under the manager's model, find the probability that a customer waits less than 0 minutes. What does this tell you about the model?
(b) The manager asks, "What is the probability that a customer waits exactly 6 minutes?" Explain what a continuous model gives for this, and suggest a better question.
(c) Describe the shape you would expect the real distribution of waiting times to have. Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** z = (0 − 6) ÷ 5 = −1.2. P(X < 0) = **0.1151**. The model says about 11.5% of customers wait a **negative** time, which is impossible. So N(6, 5) is not a good model for these waiting times.

**(b)** For a continuous random variable, the probability of any single exact value is 0, so the model gives P(X = 6) = 0. A better question asks about an interval, for example "What is the probability that a customer waits between 5.5 and 6.5 minutes?"

**(c)** Probably **skewed to the right**. Waiting times cannot go below 0, yet the standard deviation (5 minutes) is almost as large as the mean (6 minutes). Two standard deviations below the mean is −4 minutes, so the values cannot spread equally on both sides. Most customers wait a short time and a few wait much longer, which gives a long right tail.

| Point | What earns it |
|---|---|
| 1 | 0.1151 and the conclusion that negative times make the normal model unsuitable |
| 1 | P(X = 6) = 0 for a continuous model, with an interval question suggested |
| 1 | Right skew, justified by the lower limit of 0 and σ being large compared with μ |
</details>

## How did you do?

- **Q1 wrong:** re-read "How σ changes the curve" in the [study guide](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/).
- **Q2 wrong:** revisit "The empirical rule" and Worked example 1. Locate each boundary in standard deviations first.
- **Q3 or Q4 wrong:** revisit Worked example 2. Sketch and shade, and check the direction.
- **Q5 or Q6(c) wrong:** revisit "Working backwards" and Worked example 3. Remember invNorm uses the area to the left.
- **Q6(a) wrong:** revisit Worked example 4 on percentiles.
- **Q7 incomplete:** revisit "Continuous random variables" and the misconceptions list.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-11-normal-distribution-checklist/).
