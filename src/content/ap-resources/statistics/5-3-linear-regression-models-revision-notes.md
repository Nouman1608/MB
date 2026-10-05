---
resourceId: "mb-ap-stats-5.3-revision-notes"
title: "Linear Regression Models: Revision Notes (Statistics 5.3)"
description: "One-page recap of linear regression models: the equation ŷ = a + bx, making predictions in context, and the difference between interpolation and extrapolation."
course: "statistics"
unit: 5
topics: ["5.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-5.3-study-guide"]
learningObjectives:
  - "Recall the parts of a linear regression model and how to use it to predict"
  - "Spot the common errors in prediction questions before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the coefficients as given and round only the final prediction."
related: ["mb-ap-stats-5.3-study-guide", "mb-ap-stats-5.3-practice", "mb-ap-stats-5.3-checklist"]
next: "mb-ap-stats-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "ŷ = a + bx predicts the response y from the explanatory variable x."
  - "Report every prediction in context: 'the model predicts…', with units."
  - "Interpolation is inside the data's x-interval; extrapolation is outside and gets less reliable the further you go."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/5-3-linear-regression-models-study-guide/).

## Recap

- If a scatterplot has a **linear form**, a **linear regression model** can approximate the relationship.
- The model uses the **explanatory variable** x to predict the **response variable** y.
- ŷ ("y-hat") is a **predicted** value. Real observed values, y, are scattered around it.
- Model sentence: "The model predicts that the kiosk will sell about **99 iced drinks** on a day with a maximum temperature of **24 °C**."

## Key relationships

| Idea | What to remember |
|---|---|
| Model | ŷ = a + bx |
| a | y-intercept: ŷ when x = 0 |
| b | slope: change in ŷ for each increase of 1 in x |
| Predicting | substitute x, multiply by b, add a; round at the end |
| Interpolation | x inside the interval from the smallest to the largest x-value in the data (end points included) |
| Extrapolation | x outside that interval; less reliable, and more so the further out |

## Assumptions and conventions

- The scatterplot shows a **linear** form. A line is a poor model for a curved pattern, even when r is close to −1 or 1.
- In this topic a and b are **given**. In Topic 5.5 you find them with technology (least-squares regression).
- Write the model with the hat, and preferably with variable names: "predicted sales = −30.26 + 5.37 × (temperature)".

## Mistakes to avoid

1. **Dropping the hat**: y = a + bx says every point is on the line.
2. **Treating ŷ as certain**: it is a prediction; actual values vary.
3. **Mixing up a and b**: b is the number multiplied by x.
4. **Substituting a y-value for x**: the model predicts y from x, not the other way round.
5. **Calling an end-point prediction an extrapolation**: the end points are inside the interval.
6. **Trusting a far extrapolation**: it can give impossible values, such as negative heights.
7. **Rounding coefficients early**, which can shift the prediction a lot.
8. **No context or units** in the final answer.

## Quick self-check

1. ŷ = 4.5 + 2.2x. Predict y when x = 10. *(ŷ = 4.5 + 22 = 26.5)*
2. ŷ = 120 − 3.5x was fitted to data with x from 2 to 15. Find ŷ at x = 8. Is this interpolation or extrapolation? *(ŷ = 120 − 28 = 92; interpolation, since 8 is between 2 and 15)*
3. The same model is used at x = 40. Why should you be cautious? *(40 is far outside 2 to 15, so it is an extrapolation; the linear pattern may not continue. Here ŷ = −20, which may be impossible in context.)*

Next: [practice questions](/advanced-course-resources/statistics/5-3-linear-regression-models-practice/).
