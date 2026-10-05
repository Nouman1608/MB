---
resourceId: "mb-ap-stats-u5-diagnostic"
title: "Regression Analysis: Unit Diagnostic (Statistics Unit 5)"
description: "A 30-minute check with short questions on scatterplots, correlation, prediction, residuals and least-squares regression, showing which Unit 5 topics to revisit."
course: "statistics"
unit: 5
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 5.1 to 5.5"
learningObjectives:
  - "Find out which Unit 5 topics are secure and which need more work"
  - "Practise short questions on scatterplots, r, predictions, residuals and the least-squares line"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use linear regression on a graphing calculator (form a + bx, diagnostics on) for Question 10. All other questions need only simple arithmetic. Round to 2 decimal places unless stated."
related: ["mb-ap-stats-u5-review", "mb-ap-stats-5.2-study-guide", "mb-ap-stats-5.4-study-guide", "mb-ap-stats-5.5-study-guide"]
next: "mb-ap-stats-u5-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Ten short questions: two for each of the five topics in Unit 5."
  - "Seven are multiple choice; three need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this diagnostic to find **which Unit 5 topics to revisit**: two short questions for each of Topics 5.1 to 5.5.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes; answer everything before opening any answer. Graphing calculator allowed. Every model ŷ = a + bx gives a **predicted** response; residual = observed y − predicted y. The interval of x-values in the data includes its end points.

## Question 1 (multiple choice · 5.1)

Which of these is a **bivariate quantitative** data set?

- (A) The heights of 25 sunflowers in one bed and the heights of 25 different sunflowers in another bed
- (B) For each of 25 sunflowers, the hours of sunshine it received and the height it reached
- (C) For each of 25 sunflowers, its flower colour (yellow, red or orange) and its height
- (D) The heights of 25 sunflowers, measured on one day

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Two quantitative values are recorded on the **same** individual, so each sunflower gives one ordered pair (x, y).

- (A) has two quantitative lists, but on different plants, so the values cannot be paired.
- (C) pairs a categorical variable with a quantitative one.
- (D) is one quantitative variable.

**If you missed this:** [Topic 5.1 study guide](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-study-guide/).
</details>

## Question 2 (short answer · 5.1)

A fictional cycling club recorded the average gradient (%) and the average speed (km/h) of ten rides.

| Gradient (%) | 1 | 2 | 2.5 | 3 | 4 | 4.5 | 5 | 6 | 6.5 | 7 |
|---|---|---|---|---|---|---|---|---|---|---|
| Speed (km/h) | 29.5 | 28.0 | 17.0 | 26.1 | 24.0 | 23.4 | 21.8 | 20.5 | 19.6 | 18.4 |

(a) Which variable belongs on the x-axis of a scatterplot? Why?
(b) Describe the association in context.
(c) A rider claims: "Every ride with a gradient below 3% averaged more than 25 km/h." Is the claim supported?

<details>
<summary>Answer and explanation</summary>

**(a)** **Gradient.** The club would use the route's gradient to predict its speed, so gradient is explanatory and speed is the response (y-axis).

**(b)** Apart from one ride, there is a **strong, negative, linear** association between gradient and average speed: rides on steeper routes tended to be slower. One ride is **unusual**: at 2.5% the club averaged only 17.0 km/h, far below the 26 to 28 km/h of rides with similar gradients. There are no clusters.

**(c)** **Not supported.** Three rides had gradients below 3%. Two averaged more than 25 km/h, but the 2.5% ride averaged 17.0 km/h. One counterexample is enough.

**If you missed this:** [Topic 5.1 study guide](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-study-guide/), "Describing a scatterplot: four features".
</details>

## Question 3 (multiple choice · 5.2)

For 120 students at a fictional college, the correlation between the number of classes missed and the final mark is r = −0.91. The scatterplot is linear. Which statement is correct?

- (A) There is a strong, negative, linear association: students who missed more classes tended to have lower final marks.
- (B) Each missed class causes a student's final mark to fall.
- (C) The association is weak, because r is negative.
- (D) 91% of students who missed many classes got low marks.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The sign gives the direction; |−0.91| is close to 1, so the linear association is strong.

- (B) claims cause from an observational study. Motivation, for example, could affect both attendance and marks.
- (C) confuses direction with strength.
- (D) reads r as a percentage of students. r is not a proportion of anything.

**If you missed this:** [Topic 5.2 study guide](/advanced-course-resources/statistics/5-2-correlation-study-guide/).
</details>

## Question 4 (multiple choice · 5.2)

Eight points lie almost exactly on a rising straight line, with r = 0.9997. A ninth point is added. Its x-value is in the middle of the others, but its y-value is far below the pattern. What happens to r?

- (A) r moves closer to 0, because the new point is far from the linear pattern.
- (B) r increases, because there are more points.
- (C) r stays the same, because r has no units.
- (D) r becomes negative, because the new point lies below the line.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** r is **not resistant**. In one fictional example of this kind, r falls from 0.9997 to 0.80.

- (B) is wrong: extra points only strengthen r if they fit the pattern.
- (C) mixes up two facts: r has no units, but it does depend on the data.
- (D) is too strong: the other eight points still show a positive association.

**If you missed this:** [Topic 5.2 study guide](/advanced-course-resources/statistics/5-2-correlation-study-guide/), "When r misleads (2)".
</details>

## Question 5 (multiple choice · 5.3)

A fictional park uses ŷ = 3.2 + 0.65x to predict the height (m) of a tree from its age x (years). The trees in the data were **2 to 15 years** old. Which statement is correct?

- (A) For an 8-year-old tree, the predicted height is 8.4 m, an interpolation.
- (B) For a 20-year-old tree, the predicted height is 16.2 m, an interpolation.
- (C) For a 15-year-old tree, the prediction of 12.95 m is an extrapolation, because 15 is the largest age.
- (D) An 8-year-old tree will be exactly 8.4 m tall.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ŷ = 3.2 + 0.65(8) = 8.4 m, and 8 lies inside 2 to 15.

- (B) has the right arithmetic, but 20 is outside the data: an extrapolation.
- (C) forgets that the interval includes its end points.
- (D) treats ŷ as an exact value; real trees vary around the line.

**If you missed this:** [Topic 5.3 study guide](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/).
</details>

## Question 6 (multiple choice · 5.3)

A fictional town's population is modelled by ŷ = 8.2 + 0.31x, where x is **years since 2015** and ŷ is the predicted population in thousands. The data cover 2016 to 2025. What does the model predict for 2030?

- (A) 12.85 thousand; an extrapolation, 5 years beyond the data
- (B) 12.85 thousand; an interpolation
- (C) 637.5 thousand; an extrapolation
- (D) 4.65 thousand; an extrapolation

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For 2030, x = 15: ŷ = 8.2 + 0.31(15) = 12.85 thousand. The data stop at x = 10, so this is an extrapolation and less reliable.

- (B) misclassifies a year outside 2016 to 2025.
- (C) substitutes x = 2030 instead of x = 15.
- (D) leaves out the intercept 8.2.

**If you missed this:** [Topic 5.3 study guide](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/), "Interpolation and extrapolation".
</details>

## Question 7 (multiple choice · 5.4)

A fictional nursery predicts the price ($) of a bonsai tree from its age x (years) with ŷ = 14 + 6.2x. A 9-year-old bonsai sold for $62. Which is correct?

- (A) The residual is −$7.80; the model overpredicted its price.
- (B) The residual is +$7.80; the model underpredicted its price.
- (C) The residual is −$7.80; the model underpredicted its price.
- (D) The residual is $69.80.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ŷ = 14 + 6.2(9) = $69.80. Residual = 62 − 69.80 = −$7.80. The actual price was below the prediction, so the model predicted too high.

- (B) calculates predicted − observed.
- (C) has the right number but the wrong word: negative means overpredicted.
- (D) is the predicted price, not the residual.

**If you missed this:** [Topic 5.4 study guide](/advanced-course-resources/statistics/5-4-residuals-study-guide/).
</details>

## Question 8 (short answer · 5.4)

A fictional bakery recorded its oven temperature (°C) every 2 minutes after switching it on.

| Time (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|---|
| Temperature (°C) | 20 | 75 | 120 | 152 | 175 | 190 | 197 |

Technology gives ŷ = 45.29 + 14.57x and r = 0.96.

(a) Find the residuals at 0, 6 and 12 minutes.
(b) Interpret the residual at 6 minutes.
(c) The other residuals are 0.57 (2 min), 16.43 (4 min), 13.15 (8 min) and −0.99 (10 min). Describe the residual plot. Is a linear model appropriate?

<details>
<summary>Answer and explanation</summary>

**(a)** 0 min: 20 − 45.29 = **−25.29 °C**. 6 min: ŷ = 132.71, so 152 − 132.71 = **19.29 °C**. 12 min: ŷ = 220.13, so 197 − 220.13 = **−23.13 °C**.

**(b)** At 6 minutes the oven was 19.29 °C **hotter** than the model predicted, so the model **underpredicted** its temperature.

**(c)** In time order the residuals are negative, then positive from 2 to 8 minutes, then negative: an **arch**, not random scatter. The oven heats fast at first (55 °C in the first 2 minutes) and slowly later (7 °C in the last 2). A linear model is **not** the most appropriate, even though r = 0.96.

**If you missed this:** [Topic 5.4 study guide](/advanced-course-resources/statistics/5-4-residuals-study-guide/), "Residual plots".
</details>

## Question 9 (multiple choice · 5.5)

At a fictional ski resort, the least-squares line for predicting daily lift-pass sales (hundreds) from the maximum temperature (°C) has slope −1.6 and r² = 0.81. Which is correct?

- (A) r = −0.90; about 81% of the variation in daily lift-pass sales is explained by the linear relationship with maximum temperature.
- (B) r = 0.90; about 81% of the variation in daily lift-pass sales is explained by the linear relationship with maximum temperature.
- (C) r = −0.81; about 90% of the variation in daily lift-pass sales is explained by the linear relationship with maximum temperature.
- (D) r = −0.90; the line predicts sales correctly on about 81% of days.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** √0.81 = 0.90, and r takes the sign of the slope.

- (B) forgets the sign.
- (C) swaps r and r².
- (D) misreads r² as a success rate.

**If you missed this:** [Topic 5.5 study guide](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/).
</details>

## Question 10 (short answer · 5.5)

A fictional fruit stall recorded the price of cherries ($ per kg) and the mass sold (kg) on seven days.

| Price ($/kg) | 4 | 5 | 5.5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|
| Sold (kg) | 48 | 41 | 40 | 35 | 30 | 22 | 19 |

(a) Use technology to find the least-squares regression line, r and r².
(b) Interpret the slope in context.
(c) Should the y-intercept be interpreted? Explain.
(d) Interpret r² in context.

<details>
<summary>Answer and explanation</summary>

**(a)** **predicted mass sold = 71.64 − 5.99 × (price)**, with r = −0.9944 ≈ −0.99 and r² = 0.9888.

**(b)** For each $1 per kg increase in price, the predicted mass of cherries sold decreases by about 5.99 kg.

**(c)** **No.** It predicts 71.64 kg sold at a price of $0. Prices in the data run from $4 to $9, so $0 is a far extrapolation, and the stall does not give cherries away.

**(d)** About 98.9% of the variation in the mass of cherries sold is explained by the linear relationship with price.

**If you missed this:** [Topic 5.5 study guide](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/), "Interpreting the slope and the y-intercept".
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 5.1 | 1, 2 | [Scatterplots](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-study-guide/) |
| 5.2 | 3, 4 | [Correlation](/advanced-course-resources/statistics/5-2-correlation-study-guide/) |
| 5.3 | 5, 6 | [Linear regression models](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/) |
| 5.4 | 7, 8 | [Residuals](/advanced-course-resources/statistics/5-4-residuals-study-guide/) |
| 5.5 | 9, 10 | [Least-squares regression](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/) |

## How to use your result

- **Mark each question right, partly right or wrong.** A description or interpretation with no context is only partly right.
- **Fix weak topics in order**: residuals (5.4) need predictions from 5.3, and r² (5.5) builds on r from 5.2.
- **Read the study guide, then do its practice set.**
- **Then try the [Unit 5 mixed review](/advanced-course-resources/statistics/unit-5-review/)**, which combines topics.
