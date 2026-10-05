---
resourceId: "mb-ap-stats-u5-review"
title: "Regression Analysis: Mixed Unit Review (Statistics Unit 5)"
description: "Big ideas, a one-table method summary and seven original exam-style questions that each combine two or more Unit 5 topics, with worked solutions and suggested rubrics."
course: "statistics"
unit: 5
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 5.1 to 5.5"
  - "You have tried the Unit 5 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-stats-u5-diagnostic"]
learningObjectives:
  - "Connect the ideas of Unit 5: scatterplots, correlation, prediction, residuals and the least-squares line"
  - "Carry out a full regression analysis with technology and interpret every result in context"
  - "Use residuals and residual plots to judge whether a linear model is appropriate"
  - "Explain how unusual points, extrapolation and lurking variables limit what a regression can show"
skills: ["3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use linear regression (form a + bx, diagnostics on) to find a, b, r and r² for Questions 4, 6 and 7. Enter the explanatory variable as x. Keep full precision for predictions; round reported values to 2 or 3 decimal places."
related: ["mb-ap-stats-u5-diagnostic", "mb-ap-stats-5.1-checklist", "mb-ap-stats-5.2-checklist", "mb-ap-stats-5.3-checklist", "mb-ap-stats-5.4-checklist", "mb-ap-stats-5.5-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Start every regression with the scatterplot: form, direction, strength and unusual features, in context."
  - "r measures the strength and direction of a linear association only; a value near 1 or −1 does not prove a line fits."
  - "Residual = observed − predicted. Random scatter in the residual plot supports a linear model; curvature does not."
  - "The least-squares line passes through (x̄, ȳ); interpret its slope, intercept and r² with 'predicted' and context."
  - "Regression shows association, not cause, and predictions far outside the data are unreliable."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Read the big ideas and the method table, then try the seven questions without notes. Each question combines two or more Unit 5 topics.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The rubrics are a **suggested Marlbridge rubric**, not official scoring.

## Big ideas of the unit

- **Two variables, one individual.** Bivariate data pair two quantitative values from the same individual. The explanatory variable goes on the x-axis and the response on the y-axis ([5.1](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-study-guide/)).
- **Look before you calculate.** Describe form, direction, strength and unusual features in context. The form decides whether any straight-line tool makes sense ([5.1](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-study-guide/)).
- **r is a summary of a linear pattern.** It has no units and lies between −1 and 1. It is not resistant, and a curve can still give r near ±1 ([5.2](/advanced-course-resources/statistics/5-2-correlation-study-guide/)).
- **Association is not causation.** A strong r or a steep line from observational data cannot show cause; lurking variables may explain the pattern ([5.2](/advanced-course-resources/statistics/5-2-correlation-study-guide/)).
- **A model predicts; it does not promise.** ŷ = a + bx gives a predicted value. Interpolation is safer than extrapolation, and far extrapolation can give nonsense ([5.3](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/)).
- **Residuals measure each miss.** Residual = y − ŷ: positive means the model underpredicted, negative means it overpredicted ([5.4](/advanced-course-resources/statistics/5-4-residuals-study-guide/)).
- **The residual plot is the linearity check.** Random scatter supports a linear model; a curve in the residuals says the line misses the form, whatever r says ([5.4](/advanced-course-resources/statistics/5-4-residuals-study-guide/)).
- **Least squares picks one line.** It minimises the sum of squared residuals, passes through (x̄, ȳ), and its residuals add to 0. The slope, intercept, r and r² come from technology and are sample statistics ([5.5](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/)).

## Key relationships and methods

| If the question asks you to… | Use… | Watch out for… |
|---|---|---|
| Describe a scatterplot | Form, direction, strength, unusual features, in context | "Steep" is not "strong"; write "tends to" |
| Interpret r | Sign for direction, closeness to ±1 for strength, "linear", both variables | Treating r as a percentage or as a slope |
| Make a prediction | Substitute x into ŷ = a + bx; say "predicted", with units | Extrapolation; using the wrong coded x |
| Find or interpret a residual | y − ŷ; positive = underpredicted, negative = overpredicted | Reversing the order; forgetting units |
| Judge a linear model | Residual plot: random scatter vs curvature | Relying on r alone |
| Find the LSRL | Technology; line passes through (x̄, ȳ); a = ȳ − b·x̄ | Swapping x and y gives a different line |
| Interpret slope and intercept | Predicted change per 1-unit increase in x; predicted y at x = 0 | Intercepts outside the data or impossible |
| Interpret r² | Proportion of variation in y explained by the linear relationship with x | "Percentage of points on the line" |
| Get r from r² | ±√r² with the sign of the slope | Dropping the sign |

## Question 1 (multiple choice · mixed)

A fictional river authority predicts the rise in a river's level (cm) from rainfall in the previous 24 hours (mm). The least-squares slope is 2.4 cm per mm and r = 0.87. The analyst re-expresses every river rise in **metres** and refits the line. What are the new slope and r?

- (A) Slope 240 m per mm; r = 0.87
- (B) Slope 0.024 m per mm; r = 0.0087
- (C) Slope 0.024 m per mm; r = 0.87
- (D) Slope 2.4 m per mm; r = 0.87

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Every y-value is divided by 100, so the predicted rise per mm of rain is divided by 100: 2.4 cm = 0.024 m. r has no units, so the pattern, and r, do not change.

- (A) multiplies by 100 instead of dividing.
- (B) wrongly gives r units.
- (D) treats the slope as unit-free; the slope has units of y per unit of x.

Topics: 5.2 (r has no units), 5.5 (meaning of the slope).
</details>

## Question 2 (multiple choice · mixed)

A fictional hotel fits the least-squares line ŷ = 4.1 + 0.6x to predict rooms cleaned (y) from hours worked (x) for 10 cleaning shifts. The mean shift length was x̄ = 15 hours. The residuals for nine of the shifts add to −2.4 rooms. What is the residual for the tenth shift, and what is ȳ?

- (A) −2.4 rooms; ȳ = 13.1 rooms
- (B) +2.4 rooms; ȳ = 13.1 rooms
- (C) +2.4 rooms; ȳ = 15 rooms
- (D) 0 rooms; ȳ = 13.1 rooms

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Least-squares residuals add to 0, so the tenth is +2.4. The line passes through (x̄, ȳ): ȳ = 4.1 + 0.6(15) = 13.1 rooms.

- (A) copies the sign of the sum instead of balancing it.
- (C) assumes ȳ equals x̄.
- (D) confuses "the residuals add to 0" with "each residual is 0".

Topics: 5.4 (residuals), 5.5 (properties of the least-squares line).
</details>

## Question 3 (multiple choice · mixed)

A researcher has the least-squares line for predicting a child's height from age. She now wants to predict a child's **age** from **height**. Which is correct?

- (A) She can rearrange the first equation to make age the subject, because the data are the same.
- (B) r changes sign, because the variables have swapped axes.
- (C) She cannot predict age, because age must always be the explanatory variable.
- (D) r is the same, but she must fit a new least-squares line with height as x; rearranging the first equation gives a different, non-least-squares line.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** r treats the two variables the same way, but the least-squares line minimises vertical misses in the **response**. Swapping roles changes which misses are squared, so the line changes. (With the van data in Question 4, rearranging gives slope 0.7069, but the fitted line for age from cost has slope 0.6972.)

- (A) gives a line that is not least squares for predicting age.
- (B) is wrong: swapping x and y leaves r unchanged.
- (C) is wrong: the explanatory variable is whichever one you predict **from**.

Topics: 5.1 (explanatory and response), 5.2 (r), 5.5 (the LSRL depends on which variable is y).
</details>

## Question 4 (constructed response · mixed)

A fictional delivery firm recorded the age (years) and last year's maintenance cost ($ hundreds) of 10 vans.

| Age (years) | 1 | 2 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|---|
| Cost ($ hundreds) | 4.2 | 5.0 | 6.1 | 6.8 | 8.9 | 9.4 | 11.8 | 12.1 | 14.5 | 15.3 |

The scatterplot is linear with no unusual points, and the residual plot shows random scatter.

(a) Use technology to find the least-squares regression line, r and r².
(b) Describe the association in context, using r.
(c) Interpret the slope and the y-intercept in context.
(d) Predict the cost for a 6.5-year-old van and for a 15-year-old van. Comment on how far you would trust each.
(e) Interpret r² in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **predicted cost = 2.76 + 1.41 × (age)**, with a = 2.7617, b = 1.4145, r = 0.9931 ≈ 0.99 and r² = 0.9862.

**(b)** There is a strong, positive, linear association between van age and annual maintenance cost: older vans tend to cost more to maintain.

**(c)** **Slope:** for each additional year of age, the predicted annual maintenance cost increases by about 1.41 hundred dollars ($141.45). **Intercept:** a brand-new van (age 0) has a predicted cost of about $276. This is a sensible value, but x = 0 is just below the youngest van (1 year), so it is a mild extrapolation.

**(d)** 6.5 years: ŷ = 2.7617 + 1.4145(6.5) = **11.96 hundred dollars** ($1,196). This is an interpolation (inside 1 to 9 years), so it is reasonable. 15 years: ŷ = **23.98 hundred dollars** ($2,398). This is an extrapolation, 6 years beyond the oldest van; costs may rise faster for very old vans, so trust it much less. (The rounded equation gives 11.93 and 23.91; accept either.)

**(e)** About 98.6% of the variation in annual maintenance cost of these vans is explained by the linear relationship with age.

| Point | What earns it |
|---|---|
| 1 | Equation with variables named, r ≈ 0.99 and r² ≈ 0.986 |
| 1 | Strong, positive, linear, both variables in context |
| 1 | Slope with "predicted", per-year increase and units |
| 1 | Intercept interpreted, noting the mild extrapolation |
| 1 | Both predictions, interpolation vs extrapolation **and** reduced trust at 15 years |
| 1 | r² as variation in cost explained by the linear relationship with age |

**Total: 6 points.** Topics: 5.1, 5.2, 5.3, 5.5.
</details>

## Question 5 (constructed response · mixed)

A fictional school recorded hours of sunshine and energy generated (kWh) by its solar panels on 30 days with between 2 and 13 hours of sunshine. The mean was x̄ = 7.4 hours. Technology output:

| Predictor | Coefficient |
|---|---|
| Constant | 1.8 |
| Sunshine | 1.42 |

R-sq = 92.2%. The residual plot shows random scatter around 0.

(a) Write the least-squares equation, defining the variables, and interpret the slope.
(b) Find the mean daily energy generated, ȳ.
(c) On a day with 10 hours of sunshine the panels generated 13.1 kWh. Find and interpret the residual.
(d) On a 5-hour day the residual was +1.2 kWh. How much energy was generated?
(e) Find r, and explain whether a linear model is appropriate.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **predicted energy (kWh) = 1.8 + 1.42 × (hours of sunshine)**. For each additional hour of sunshine, the predicted energy generated increases by 1.42 kWh.

**(b)** The line passes through (x̄, ȳ): ȳ = 1.8 + 1.42(7.4) = **12.31 kWh**.

**(c)** ŷ = 1.8 + 1.42(10) = 16.00 kWh. Residual = 13.1 − 16.00 = **−2.90 kWh**. The panels generated 2.90 kWh **less** than predicted, so the model **overpredicted** that day.

**(d)** ŷ = 1.8 + 1.42(5) = 8.90 kWh. Observed = ŷ + residual = 8.90 + 1.2 = **10.10 kWh**.

**(e)** r = +√0.922 = **0.96**, positive because the slope is positive. The random scatter in the residual plot supports a linear form, so a linear model is appropriate. (The high r alone would not show this.)

| Point | What earns it |
|---|---|
| 1 | Equation with "predicted" and variables defined, **and** slope interpreted with units |
| 1 | ȳ = 12.31 kWh from the point (x̄, ȳ) |
| 1 | Residual −2.90 kWh, interpreted as less than predicted (overpredicted) |
| 1 | Observed 10.10 kWh using y = ŷ + residual |
| 1 | r = 0.96 with sign from the slope **and** linear model justified by the residual plot |

**Total: 5 points.** Topics: 5.2, 5.3, 5.4, 5.5.
</details>

## Question 6 (constructed response · mixed)

A fictional farm trial gave nine plots different amounts of fertiliser and recorded the yield.

| Fertiliser (kg per plot) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| Yield (kg) | 12.0 | 17.5 | 21.6 | 24.6 | 26.8 | 28.3 | 29.2 | 29.7 | 29.9 |

(a) Use technology to find the least-squares line and r.
(b) Using the rounded equation, find the residuals at 0, 4 and 8 kg.
(c) The other residuals, in order, are −0.55 (1 kg), 1.43, 2.31, 1.77, 0.55 and −1.07 (7 kg). Describe the residual plot and decide whether a linear model is appropriate.
(d) A farm manager says: "r is 0.93, so the line is fine. It predicts 41.37 kg of yield for 12 kg of fertiliser." Respond.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **predicted yield = 15.93 + 2.12 × (fertiliser)**, with r = 0.9295 ≈ 0.93.

**(b)** 0 kg: 12.0 − 15.93 = **−3.93 kg**. 4 kg: ŷ = 24.41, residual = 26.8 − 24.41 = **2.39 kg**. 8 kg: ŷ = 32.89, residual = 29.9 − 32.89 = **−2.99 kg**.

**(c)** Plotted against fertiliser, the residuals are negative at 0 and 1 kg, positive from 2 to 6 kg, and negative at 7 and 8 kg: an **arch**. This curvature shows the form is not linear, so a linear model is **not** the most appropriate. The data agree: each extra kilogram adds 5.5 kg of yield at first but only 0.2 kg at the end, so yield levels off.

**(d)** A high r shows a strong association, not a linear form; the residual plot shows curvature. 12 kg is also an **extrapolation** beyond 8 kg. Residuals are already negative and falling at 7 and 8 kg, so the line overpredicts there, and as yield levels off, 41.37 kg is probably **too high**.

| Point | What earns it |
|---|---|
| 1 | Equation with variables named and r ≈ 0.93 |
| 1 | All three residuals correct |
| 1 | Arch described (negative, positive, negative) as non-random |
| 1 | Linear model not appropriate, supported by the residual pattern or the shrinking increases |
| 1 | High r does not establish linearity |
| 1 | 12 kg is an extrapolation **and** the prediction is likely too high, with a reason |

**Total: 6 points.** Topics: 5.1, 5.2, 5.3, 5.4, 5.5.
</details>

## Question 7 (constructed response · mixed)

A fictional county has nine libraries. For each, it recorded the hours open per week and the books borrowed per week (hundreds). Eight are small branches; the ninth is the large central library.

| Hours open | 20 | 24 | 28 | 30 | 32 | 36 | 40 | 44 | 70 (central) |
|---|---|---|---|---|---|---|---|---|---|
| Borrowed (hundreds) | 6.1 | 5.4 | 7.0 | 6.2 | 7.5 | 6.8 | 8.1 | 7.4 | 31.0 |

(a) Use technology to find r and the least-squares line for all nine libraries, and for the eight small branches only.
(b) Describe how the central library affects the analysis.
(c) Interpret the slope of the eight-branch line in context.
(d) A councillor says: "The nine-library line proves that longer opening hours make people borrow more. If a small branch opened 70 hours a week, it would lend about 2,600 books a week." Give **two** reasons to doubt this.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** All nine: **predicted borrowed = −8.17 + 0.491 × (hours)**, r = 0.8964 ≈ 0.90. Eight small branches: **predicted borrowed = 4.17 + 0.0833 × (hours)**, r = 0.7628 ≈ 0.76.

**(b)** The central library is an **unusual point**, far beyond the others in both hours and borrowing. It strengthens r (0.76 to 0.90) and makes the slope about six times steeper (0.0833 to 0.491). One library is driving the nine-library line, so its slope does not describe the small branches.

**(c)** For each additional hour a small branch is open per week, the predicted number of books borrowed increases by about 0.0833 hundred, about **8 books** a week.

**(d)** Any two of:
- **Not causation.** This is observational. A lurking variable, such as the number of people each library serves, could explain both longer hours and more borrowing.
- **The 2,600 relies on one point.** The nine-library line gives ŷ = −8.17 + 0.491(70) = 26.19 hundred, but that slope comes from the central library. The small-branch line gives only 10.00 hundred (about 1,000 books).
- **Extrapolation.** Small branches were open 20 to 44 hours, so 70 hours is far outside their data.

| Point | What earns it |
|---|---|
| 1 | Both lines with variables named |
| 1 | Both values of r |
| 1 | Central library identified as unusual **and** its effect on r and slope described |
| 1 | Eight-branch slope with "predicted", per hour and units |
| 1 | First valid reason with explanation |
| 1 | Second valid reason with explanation |

**Total: 6 points.** Topics: 5.1, 5.2, 5.3, 5.5.
</details>

## How did you do?

Mark your answers with the rubrics and note the topics listed under each question you missed. Re-read those study guides, then tick off each checklist. If many topics went wrong, use the [Unit 5 diagnostic](/advanced-course-resources/statistics/unit-5-diagnostic/) to find the gaps.

Topic checklists: [5.1](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-checklist/) · [5.2](/advanced-course-resources/statistics/5-2-correlation-checklist/) · [5.3](/advanced-course-resources/statistics/5-3-linear-regression-models-checklist/) · [5.4](/advanced-course-resources/statistics/5-4-residuals-checklist/) · [5.5](/advanced-course-resources/statistics/5-5-least-squares-regression-checklist/)
