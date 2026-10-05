---
resourceId: "mb-ap-stats-5.4-revision-notes"
title: "Residuals: Revision Notes (Statistics 5.4)"
description: "One-page recap of residuals: observed minus predicted, what a positive or negative residual means, working backwards to an observed value, and reading residual plots."
course: "statistics"
unit: 5
topics: ["5.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-5.4-study-guide"]
learningObjectives:
  - "Recall how to calculate and interpret a residual"
  - "Recall what random scatter and curvature in a residual plot mean"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Round residuals to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.4-study-guide", "mb-ap-stats-5.4-practice", "mb-ap-stats-5.4-checklist"]
next: "mb-ap-stats-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Residual = y − ŷ (observed − predicted)."
  - "Positive: underpredicted. Negative: overpredicted."
  - "Random residual plot: linear model appropriate. Curved residual plot: it is not."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/5-4-residuals-study-guide/).

## Recap

- A **residual** is the prediction error for one data point: how far the observed value is from the line, measured vertically.
- It has the **units of the response variable**.
- Model sentence: "The residual of −$1.67 means the actual fare for the 6.8 km ride was $1.67 **less** than the model predicted, so the model **overpredicted** it."
- A **residual plot** shows residuals against x (or ŷ) and is the main check of whether a line is the right model.

## Key relationships

| Idea | What to remember |
|---|---|
| Residual | y − ŷ = observed − predicted |
| Observed value | y = ŷ + residual |
| Positive residual | point above the line; model **underpredicts** |
| Negative residual | point below the line; model **overpredicts** |
| Residual of 0 | point on the line |
| Worst prediction | residual furthest from 0, either sign |
| Residual plot | residuals (vertical) against x or ŷ (horizontal), with a line at 0 |
| Random scatter | linear form; a linear model is appropriate |
| Curvature (U or arch) | non-linear form; a linear model is not the most appropriate |

## Assumptions and conventions

- Residuals come from a stated model, ŷ = a + bx. Calculate ŷ first, then subtract it from y.
- With one explanatory variable, plotting residuals against x or against ŷ shows the same pattern (mirrored if the slope is negative).
- A high r does not replace the residual plot: curved data can have r close to −1 or 1.

## Mistakes to avoid

1. **Predicted − observed**: the wrong order flips the sign.
2. **Swapping the meanings**: negative means **over**prediction.
3. **No units or no context** in an interpretation.
4. **Choosing the most negative residual** as the worst prediction instead of the one furthest from 0.
5. **Trusting r alone**: always look at the residual plot.
6. **Thinking random scatter means small residuals**: it only shows the form is linear.

## Quick self-check

1. A model predicts 47.5 g and the observed value is 52 g. Find the residual. *(52 − 47.5 = +4.5 g; the model underpredicted)*
2. ŷ = 30 minutes and the residual is −2.4 minutes. What was observed? *(30 + (−2.4) = 27.6 minutes)*
3. A residual plot is positive at both ends and negative in the middle. Is a linear model appropriate? *(No: the U-shape shows curvature, so the form is not linear)*

Next: [practice questions](/advanced-course-resources/statistics/5-4-residuals-practice/).
