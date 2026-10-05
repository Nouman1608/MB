---
resourceId: "mb-ap-stats-5.3-practice"
title: "Linear Regression Models: Practice Questions (Statistics 5.3)"
description: "Seven original Marlbridge practice questions on linear regression models: predicting with ŷ = a + bx, reporting in context, and judging interpolation and extrapolation, with worked solutions."
course: "statistics"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
prerequisites:
  - "Substituting into a linear equation"
  - "Describing a scatterplot (Topic 5.1)"
prerequisiteResources: ["mb-ap-stats-5.3-study-guide"]
learningObjectives:
  - "Calculate predicted values from a linear regression model and state them in context"
  - "Classify predictions as interpolation or extrapolation"
  - "Explain why far extrapolation and curved patterns make a linear model unreliable"
skills: ["3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the equation as given. Round final predictions to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.3-study-guide", "mb-ap-stats-5.3-revision-notes", "mb-ap-stats-5.3-checklist"]
next: "mb-ap-stats-5.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Every prediction must be stated in context, with units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: each model was found with technology from the data described; ŷ is the predicted value of the response; the interval of x-values includes its end points; round final answers to 2 decimal places unless stated.

## Question 1 (multiple choice · foundation)

A fictional car-hire firm uses the model ŷ = 18.0 + 0.42x to predict the price, in dollars, of a one-way hire, where x is the distance driven in kilometres. What is the predicted price for a 150 km hire?

- (A) $63.00
- (B) $81.00
- (C) $314.29
- (D) $2,700.42

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ŷ = 18.0 + 0.42(150) = 18.0 + 63.0 = $81.00. The model predicts a price of $81.00 for a 150 km hire.

- (A) leaves out the y-intercept: 0.42 × 150 = 63.00. The model always adds a.
- (C) puts 150 in place of ŷ and solves for x: (150 − 18) ÷ 0.42 = 314.29. That treats 150 as a price, but 150 is the distance.
- (D) swaps the roles of a and b: 0.42 + 18(150) = 2,700.42. In ŷ = a + bx, the slope 0.42 multiplies x.
</details>

## Question 2 (multiple choice · foundation)

A fictional city farm recorded the age (months) and mass (kg) of 15 young goats aged **3 to 18 months**. A linear model predicts mass from age. For which age is a prediction an **interpolation**?

- (A) 0 months
- (B) 2 months
- (C) 11 months
- (D) 24 months

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 11 months lies inside the interval of ages in the data, 3 to 18 months, so predicting the mass of an 11-month-old goat is an interpolation.

- (A) 0 months is below the smallest age (3 months), so it is an extrapolation. This is the age at which ŷ equals the y-intercept.
- (B) 2 months is just below 3 months. It is close to the data, but it is still outside the interval, so it is an extrapolation.
- (D) 24 months is above the largest age (18 months), so it is an extrapolation.
</details>

## Question 3 (multiple choice · core)

A fictional rowing club fitted a linear model to predict a rower's 2 km time (seconds) from training hours per week. The rowers in the data trained between **4 and 12 hours** a week, and the scatterplot is linear. Which statement is correct?

- (A) A rower who trains 8 hours a week will finish in exactly the time the model predicts.
- (B) A prediction for 13 hours is exactly as reliable as a prediction for 8 hours, because both use the same equation.
- (C) A prediction for 30 hours is less reliable than one for 13 hours, because it is much further outside the data and the linear pattern may not continue.
- (D) The model cannot be used for any prediction, because the correlation is not exactly −1.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Both 13 and 30 hours are extrapolations, but 30 hours is far beyond the largest value of 12 hours. The further you extrapolate, the less reliable the prediction. Times cannot keep falling by the same amount forever; at some point, more training will not make a rower much faster.

- (A) confuses ŷ with y. The model gives a predicted (typical) time; individual rowers vary around it.
- (B) is wrong because 13 hours is outside the interval 4 to 12, so it is an extrapolation and is less reliable than the interpolation at 8 hours, even though the arithmetic is the same.
- (D) is wrong because a model does not need a perfect correlation. A linear form with a reasonably strong association is enough to make useful predictions inside the data.
</details>

## Question 4 (calculation · core)

A fictional recycling centre collected glass from 30 streets. The number of households per street ranged from **20 to 80**. Technology gives the model

ŷ = 6.4 + 1.15x

where x is the number of households and ŷ is the predicted mass of glass collected per week, in kilograms.

(a) Predict the mass of glass for streets with 45, 80 and 120 households.
(b) Classify each prediction as an interpolation or an extrapolation.
(c) Which prediction is least reliable? Explain.

<details>
<summary>Worked solution</summary>

**(a)**

- x = 45: ŷ = 6.4 + 1.15(45) = 6.4 + 51.75 = **58.15 kg**
- x = 80: ŷ = 6.4 + 1.15(80) = 6.4 + 92.00 = **98.40 kg**
- x = 120: ŷ = 6.4 + 1.15(120) = 6.4 + 138.00 = **144.40 kg**

**(b)** 45 households: interpolation (inside 20 to 80). 80 households: **interpolation**, because 80 is the largest value in the data and the end points belong to the interval. 120 households: extrapolation (above 80).

**(c)** The prediction for 120 households is least reliable. It is 40 households beyond the largest street in the data, so we have no evidence that the linear pattern continues there. For example, a street that large might be a block of flats with a shared recycling bank, which could change how much glass is collected.

Suggested mark points (3): 1 for all three predictions correct with units; 1 for the correct classifications, including 80 as an interpolation; 1 for choosing 120 households with a reason based on being outside the data.
</details>

## Question 5 (constructed response · core)

A fictional walking club recorded the distance (km) and the time taken (hours) for eight of its hikes.

| Distance (km) | 6 | 8 | 9 | 11 | 12 | 14 | 16 | 18 |
|---|---|---|---|---|---|---|---|---|
| Time (hours) | 2.1 | 2.6 | 3.1 | 3.2 | 3.7 | 4.2 | 4.4 | 5.2 |

The scatterplot is strongly linear (r = 0.99). Technology gives ŷ = 0.68 + 0.245x.

(a) Identify the explanatory and response variables.
(b) Rewrite the model using the names of the variables.
(c) Predict the time for a 13 km hike. Interpret the prediction in context.
(d) The club is planning a 40 km hike in one day. Should it trust the model's prediction? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Explanatory variable: **distance** of the hike (km). Response variable: **time** taken (hours). The club uses distance to predict time.

**(b)** predicted time (hours) = 0.68 + 0.245 × (distance in km).

**(c)** ŷ = 0.68 + 0.245(13) = 0.68 + 3.185 = **3.865 hours**, about **3.87 hours** (roughly 3 hours 52 minutes). The model predicts that a 13 km hike will take the club about 3.87 hours. 13 km is inside 6 to 18 km, so this is an interpolation.

**(d)** No, not with confidence. ŷ = 0.68 + 0.245(40) = 10.48 hours, but 40 km is more than twice the longest hike in the data (18 km), so this is a far extrapolation. On a very long hike, walkers tire and need longer breaks, so their pace may not stay the same. The real time could be much longer than 10.48 hours.

| Point | What earns it |
|---|---|
| 1 | Correct explanatory (distance) and response (time) variables |
| 1 | Correct prediction 3.87 hours (accept 3.865) |
| 1 | Interpretation in context: "predicted" time for a 13 km hike, with units |
| 1 | Says 40 km is an extrapolation far beyond 18 km **and** explains why the linear pattern may not continue |

Do not award point 3 for "the time is 3.87 hours" without "predicted" or "about". In (d), "it is an extrapolation" with no link to the data range earns no credit.
</details>

## Question 6 (constructed response · stretch)

The winning times (minutes) in the women's race of the fictional Harbourside 10 km run are shown for every second year from 2008 to 2024. Let x = years since 2000.

| Year | 2008 | 2010 | 2012 | 2014 | 2016 | 2018 | 2020 | 2022 | 2024 |
|---|---|---|---|---|---|---|---|---|---|
| x | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 |
| Winning time (min) | 33.0 | 32.8 | 32.3 | 32.4 | 31.9 | 31.7 | 31.5 | 31.3 | 31.0 |

The scatterplot is strongly linear (r = −0.99). Technology gives ŷ = 33.96 − 0.123x.

(a) Use the model to predict the winning time in 2016. Compare it with the actual winning time.
(b) Predict the winning time in 2026. Is this an interpolation or an extrapolation?
(c) A journalist uses the model to predict the winning time in 2300. Calculate this prediction and explain what it shows about extrapolation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For 2016, x = 16. ŷ = 33.96 − 0.123(16) = 33.96 − 1.968 = **31.99 minutes**. The actual winning time was 31.9 minutes, so the model's prediction is about 0.09 minutes too high. This is an interpolation.

**(b)** For 2026, x = 26. ŷ = 33.96 − 0.123(26) = 33.96 − 3.198 = **30.76 minutes**. 26 is outside the interval 8 to 24, so this is an **extrapolation**. It is only 2 years beyond the data, so it may be a fair estimate, but it is less reliable than an interpolation.

**(c)** For 2300, x = 300. ŷ = 33.96 − 0.123(300) = 33.96 − 36.9 = **−2.94 minutes**. A negative race time is impossible. The model assumes winning times keep falling by 0.123 minutes every year for ever. In fact the line reaches 0 minutes at about x = 276, the year 2276. Human runners cannot keep improving at a steady rate; times must level off. This shows that a far extrapolation can give meaningless results: the further outside the data, the less reliable the prediction.

| Point | What earns it |
|---|---|
| 1 | Correct prediction for 2016 (31.99 min), using x = 16, compared with 31.9 min |
| 1 | Correct prediction for 2026 (30.76 min) **and** identifies it as an extrapolation |
| 1 | Correct prediction for 2300 (−2.94 min) and states that it is impossible |
| 1 | Explains that the linear trend cannot continue far beyond the data, so far extrapolation is unreliable |

Substituting x = 2016 instead of x = 16 gives −214.01 minutes; this loses the first point because the model was defined with x = years since 2000. Always check how x is defined.
</details>

## Question 7 (explanation · stretch)

A fictional short video was posted online. Its total views (thousands) at the end of each of the first eight days were:

| Day | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Total views (thousands) | 2 | 3 | 4 | 7 | 10 | 16 | 25 | 39 |

A student finds r = 0.92 and writes: "y = −8.61 + 4.86x, so on day 9 the video will have 35.13 thousand views."

(a) Identify **two** problems with how the student has written the model and the prediction.
(b) Explain why a linear model is not appropriate for these data, using the table.
(c) Explain why the prediction of 35.13 thousand views for day 9 is not sensible.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** First, the student wrote **y** instead of **ŷ**: the equation gives predicted values, not exact ones. Second, "will have" treats the prediction as certain; it should say "the model predicts about…". (Also accept: no units or variable names; day 9 is an extrapolation, not flagged.)

**(b)** The views do not rise by a roughly constant amount each day. From day 1 to day 2 they rise by 1 thousand; from day 7 to day 8 they rise by 14 thousand. The increases keep growing, so the scatterplot curves upwards. A linear model needs a linear form, and a high r (0.92) does not prove that the form is linear.

**(c)** Day 9 is outside the data (days 1 to 8), so it is an extrapolation of a model that already does not fit. The prediction, 35.13 thousand, is **less** than the 39 thousand views already reached on day 8, which is impossible for a running total. If growth carried on as it has recently (each total is roughly 1.5 to 1.6 times the day before), day 9 would be somewhere near 60 thousand. The model also predicts −3.75 thousand views on day 1, another sign that the line does not fit.

| Point | What earns it |
|---|---|
| 1 | Two valid problems with the notation or wording (for example, y instead of ŷ, and certainty) |
| 1 | Uses the data to show the pattern is curved (increases not constant), not just "r is not 1" |
| 1 | Explains that the day 9 value is less than the day 8 total (or otherwise impossible) and that it is an extrapolation from a poor model |
</details>

## How did you do?

- **Q1 wrong:** revisit "The equation ŷ = a + bx" in the [study guide](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/). Multiply b by x, then add a.
- **Q2, Q4(b) or Q6(b) wrong:** revisit "Interpolation and extrapolation". The interval runs from the smallest to the largest x-value, end points included.
- **Q3, Q5(d) or Q6(c) wrong:** work through Worked example 2 again, especially part (b).
- **Q5(c) incomplete:** every prediction needs "predicted", the context and units.
- **Q7 wrong:** re-read "From a scatterplot to a model" and the misconceptions list. A line needs a linear form.

Then tick off the [topic checklist](/advanced-course-resources/statistics/5-3-linear-regression-models-checklist/).
