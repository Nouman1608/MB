---
resourceId: "mb-ap-stats-5.5-practice"
title: "Least-Squares Regression: Practice Questions (Statistics 5.5)"
description: "Seven original Marlbridge practice questions on the least-squares line: technology output, slope, intercept, r and r², the point (x̄, ȳ) and sums of squared residuals, with suggested rubrics."
course: "statistics"
unit: 5
topics: ["5.5"]
resourceType: "practice-questions"
prerequisites:
  - "Predicting with ŷ = a + bx and calculating residuals (Topics 5.3 and 5.4)"
prerequisiteResources: ["mb-ap-stats-5.5-study-guide"]
learningObjectives:
  - "Find the least-squares regression line, r and r² with technology"
  - "Interpret the slope, the intercept and r² in context"
  - "Use the point (x̄, ȳ) and the sign of the slope in calculations"
  - "Explain what makes the least-squares line the best line and judge claims made from it"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use linear regression (a + bx) with diagnostics on. Keep full precision for predictions. Round final answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.5-study-guide", "mb-ap-stats-5.5-revision-notes", "mb-ap-stats-5.5-checklist"]
next: "mb-ap-stats-5.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every interpretation must name the variables and units and use the word 'predicted'."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: "the line" means the least-squares regression line ŷ = a + bx, found with technology with the explanatory variable as x; residual = observed y − predicted y; r² is the coefficient of determination. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A fictional café recorded the day's maximum temperature (°C) and the number of iced drinks sold on 40 days with temperatures from 15 °C to 35 °C. The least-squares line is

predicted iced drinks = −18 + 4.5 × (maximum temperature)

Which is the correct interpretation of the slope?

- (A) For each 1 °C increase in maximum temperature, the café sells exactly 4.5 more iced drinks.
- (B) For each 1 °C increase in maximum temperature, the predicted number of iced drinks sold increases by 4.5.
- (C) For each additional iced drink sold, the predicted maximum temperature increases by 4.5 °C.
- (D) About 4.5% of the variation in iced drinks sold is explained by maximum temperature.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The slope is the predicted change in the response (iced drinks) for each one-unit increase in the explanatory variable (temperature).

- (A) leaves out "predicted". The line describes a trend; actual sales on a given day vary around it.
- (C) reverses the roles of the variables. The line predicts drinks from temperature, not temperature from drinks.
- (D) confuses the slope with r². The slope is not a percentage of variation.
</details>

## Question 2 (multiple choice · foundation)

A fictional survey of 60 students recorded daily screen time (hours) and hours of sleep. The least-squares line for predicting sleep from screen time has slope −0.35 and r² = 0.64. What is the correlation coefficient?

- (A) 0.80
- (B) −0.80
- (C) −0.64
- (D) −0.4096

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** √0.64 = 0.80, and r always has the same sign as the slope. The slope is negative, so r = −0.80.

- (A) forgets the sign. r² has no sign, so you must take it from the slope.
- (C) treats r² as if it were r.
- (D) squares r² again: 0.64² = 0.4096.
</details>

## Question 3 (multiple choice · core)

At a fictional school, the least-squares line for predicting final exam score from mock exam score (both out of 100) has slope 0.75. The mean mock score was 62 and the mean final score was 66. What is the y-intercept of the line?

- (A) 4
- (B) 19.5
- (C) 49.5
- (D) 112.5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The least-squares line passes through (x̄, ȳ) = (62, 66). So 66 = a + 0.75(62), which gives a = 66 − 46.5 = 19.5.

- (A) is ȳ − x̄ = 66 − 62. It ignores the slope.
- (C) is 0.75 × 66. It multiplies the wrong mean and does not use the point (x̄, ȳ).
- (D) adds 0.75 × 62 to 66 instead of subtracting it.
</details>

## Question 4 (calculation · core)

Seven members of a fictional running club recorded their average weekly training distance (km) and their time in a 5 km race (minutes).

| Weekly distance (km), x | 12 | 18 | 20 | 25 | 30 | 34 | 40 |
|---|---|---|---|---|---|---|---|
| Race time (min), y | 29.8 | 28.6 | 27.9 | 27.3 | 25.6 | 25.9 | 23.8 |

The scatterplot is linear.

(a) Use technology to find the least-squares regression line, r and r².
(b) Interpret the slope in context.
(c) Predict the race time of a member who trains 28 km a week.
(d) Find the residual for the member who trains 25 km a week, and say whether the line overpredicts or underpredicts that time.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Technology gives a = 32.2163… and b = −0.2045…:

**predicted race time = 32.22 − 0.205 × (weekly distance)**

r = −0.9839 ≈ −0.98 and r² = 0.9681 ≈ 0.97.

**(b)** For each additional kilometre of weekly training, the predicted 5 km race time decreases by about 0.205 minutes (about 2.05 minutes for each extra 10 km a week).

**(c)** ŷ = 32.2163 − 0.2045(28) = **26.49 minutes**. This is interpolation, since 28 km lies inside 12 to 40 km.

**(d)** ŷ = 32.2163 − 0.2045(25) = 27.10 minutes. Residual = 27.3 − 27.10 = **0.20 minutes**. The residual is positive, so the line **underpredicts** this member's time: they ran about 0.20 minutes slower than predicted. (The rounded equation gives 0.21; accept either.)

| Point | What earns it |
|---|---|
| 1 | Correct equation (a ≈ 32.22, b ≈ −0.205) with variables named, and r ≈ −0.98, r² ≈ 0.97 |
| 1 | Slope interpreted with "predicted", "decreases", 1-km increase in training, and minutes |
| 1 | Correct prediction, about 26.49 minutes |
| 1 | Residual about 0.20 minutes **and** "underpredicts" linked to the positive sign |

Using the rounded equation gives 26.48 minutes in (c); accept 26.48 or 26.49. An equation written with x and y only, with no definition of the variables, does not earn point 1.
</details>

## Question 5 (constructed response · core)

A fictional energy company studied 25 flats with floor areas from 40 m² to 110 m². It used technology to predict the monthly electricity bill ($) from floor area (m²). The mean floor area was 72 m².

| Predictor | Coefficient |
|---|---|
| Constant | −6.80 |
| Area | 0.412 |

R-sq = 71.6%

(a) Write the equation of the least-squares regression line, defining your variables.
(b) Interpret the slope in context.
(c) Explain why the y-intercept should not be interpreted in this context.
(d) Interpret r² in context and find the correlation coefficient.
(e) Find the mean monthly bill of the 25 flats.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** predicted monthly bill ($) = −6.80 + 0.412 × (floor area in m²).

**(b)** For each additional square metre of floor area, the predicted monthly electricity bill increases by $0.412 (about $4.12 for each extra 10 m²).

**(c)** The intercept says a flat with 0 m² of floor area has a predicted bill of −$6.80. A flat cannot have zero area, x = 0 is far below the smallest area in the data (40 m²), so this is an extrapolation, and a negative bill is impossible.

**(d)** About 71.6% of the variation in monthly electricity bills of these flats is explained by the linear relationship with floor area. The slope is positive, so r = +√0.716 = 0.8462 ≈ **0.85**.

**(e)** The line passes through (x̄, ȳ): ȳ = −6.80 + 0.412(72) = 22.864, so the mean bill is about **$22.86**.

| Point | What earns it |
|---|---|
| 1 | Equation with "predicted" (or ŷ) and both variables defined, **and** a slope interpretation in context with units |
| 1 | Intercept not meaningful, with a reason: x = 0 outside the data (extrapolation) **or** a negative bill is impossible |
| 1 | r² interpreted as the proportion of variation in **bills** explained by the linear relationship with **area**, and r = 0.85 with a positive sign justified by the slope |
| 1 | Mean bill $22.86 using the fact that the line passes through (x̄, ȳ) |

Do not award point 3 for "71.6% of bills are predicted correctly" or for r = ±0.85 without choosing the sign.
</details>

## Question 6 (constructed response · stretch)

A fictional weekend market recorded, for four stalls, the hours the stall was open (x) and the number of sales (y, in dozens).

| Hours open, x | 2 | 4 | 6 | 8 |
|---|---|---|---|---|
| Sales (dozens), y | 5 | 6 | 10 | 11 |

Ama draws Line P: ŷ = 3 + 1.0x. Technology gives Line Q: ŷ = 2.5 + 1.1x.

(a) Show that both lines pass through (x̄, ȳ) and that the residuals for each line add to 0.
(b) Calculate the sum of squared residuals for each line. Use your answers to explain which line is the least-squares regression line.
(c) Ama says: "My residuals add to zero, so my line is the least-squares line." Explain why she is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x̄ = 20 ÷ 4 = 5 and ȳ = 32 ÷ 4 = 8. Line P at x = 5: 3 + 5 = 8. Line Q at x = 5: 2.5 + 5.5 = 8. Both pass through (5, 8).

| x | y | P: ŷ | P: residual | Q: ŷ | Q: residual |
|---|---|---|---|---|---|
| 2 | 5 | 5 | 0 | 4.7 | 0.3 |
| 4 | 6 | 7 | −1 | 6.9 | −0.9 |
| 6 | 10 | 9 | 1 | 9.1 | 0.9 |
| 8 | 11 | 11 | 0 | 11.3 | −0.3 |

Residual sums: P: 0 − 1 + 1 + 0 = 0. Q: 0.3 − 0.9 + 0.9 − 0.3 = 0.

**(b)** P: 0² + (−1)² + 1² + 0² = **2.00**. Q: 0.09 + 0.81 + 0.81 + 0.09 = **1.80**. The least-squares line is the line with the **smallest** sum of squared residuals. Line Q has the smaller sum, so Line Q is the least-squares line (and it is the line technology gives).

**(c)** Any line through (x̄, ȳ) has residuals that add to 0, so many different lines share that property. The least-squares line is defined by minimising the **sum of squared residuals**, not the sum of residuals. Line P has a residual sum of 0 but a larger sum of squares (2.00 > 1.80), so it is not the least-squares line.

| Point | What earns it |
|---|---|
| 1 | x̄ = 5, ȳ = 8 and both lines shown to give ŷ = 8 at x = 5 |
| 1 | All residuals for both lines correct, with both sums equal to 0 |
| 1 | Sums of squared residuals 2.00 and 1.80, and Line Q chosen **because** its sum is smaller |
| 1 | Explains that a zero residual sum holds for any line through (x̄, ȳ), so the criterion is the sum of **squared** residuals |
</details>

## Question 7 (explanation · stretch)

A fictional regional survey of 40 villages, between 5 km and 55 km from the nearest city, recorded distance from the city (km) and average internet download speed (Mbps). The least-squares line is

predicted speed = 92.4 − 1.35 × (distance)

with r² = 0.78. Three students comment.

- **Student A:** "r² = 0.78 means the line predicts the speed correctly for 78% of the villages."
- **Student B:** "A village 80 km from the city will have a speed of 92.4 − 1.35(80) = −15.6 Mbps."
- **Student C:** "The slope proves that being further from the city causes slower internet."

(a) Explain what is wrong with each comment.
(b) Find the correlation coefficient and write a correct interpretation of the slope.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)**

- **Student A** has misread r². It is not a proportion of villages or of correct predictions. Correct version: about 78% of the variation in internet speed across these villages is explained by the linear relationship with distance from the city.
- **Student B** has extrapolated. 80 km is far outside the 5 to 55 km used to fit the line, so there is no evidence the linear trend continues. The result, a negative speed, is impossible, which shows the line cannot be used there.
- **Student C** claims cause from an observational survey. The line describes an association only. Lurking variables, such as the type of network installed in more remote villages, could explain the pattern. Only a well-designed experiment could show cause, and distance cannot be randomly assigned to villages.

**(b)** The slope is negative, so r = −√0.78 = −0.8832 ≈ **−0.88**. Slope: for each additional kilometre from the city, the predicted average download speed decreases by 1.35 Mbps.

| Point | What earns it |
|---|---|
| 1 | Student A: correct interpretation of r² as variation in speed explained by the linear relationship with distance |
| 1 | Student B: names extrapolation (80 km outside 5 to 55 km) and notes the impossible negative value |
| 1 | Student C: association, not causation, with a reason (observational study or a named lurking variable) |
| 1 | r = −0.88 with the sign from the slope, **and** a slope interpretation with "predicted", context and units |
</details>

## How did you do?

- **Q1 or Q7(b) wrong:** re-read "Interpreting the slope and the y-intercept" in the [study guide](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/). Always say "predicted".
- **Q2 wrong:** revisit "The coefficient of determination, r²". r takes the sign of the slope.
- **Q3 or Q5(e) wrong:** revisit "Facts about the least-squares line": the line passes through (x̄, ȳ).
- **Q4 wrong:** work through Worked example 1 again, then the residuals guide for Topic 5.4.
- **Q5(c) wrong:** revisit Worked example 2 on intercepts with no meaning.
- **Q6 wrong:** revisit "Seeing least squares on a small data set".
- **Q7(a) incomplete:** check each claim against r², extrapolation and causation in turn.

Then tick off the [topic checklist](/advanced-course-resources/statistics/5-5-least-squares-regression-checklist/).
