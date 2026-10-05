---
resourceId: "mb-ap-stats-5.5-revision-notes"
title: "Least-Squares Regression: Revision Notes (Statistics 5.5)"
description: "One-page recap of the least-squares regression line: what least squares means, the point (x̄, ȳ), interpreting slope, intercept and r², and the mistakes that cost marks."
course: "statistics"
unit: 5
topics: ["5.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-5.5-study-guide"]
learningObjectives:
  - "Recall what the least-squares line minimises and the facts that follow from it"
  - "Recall the interpretation templates for slope, intercept and r²"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find a, b, r and r² with linear regression (a + bx), diagnostics on."
related: ["mb-ap-stats-5.5-study-guide", "mb-ap-stats-5.5-practice", "mb-ap-stats-5.5-checklist"]
next: "mb-ap-stats-5.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The LSRL minimises the sum of squared residuals and passes through (x̄, ȳ)."
  - "Slope and intercept are predictions: say 'predicted' and use context and units."
  - "r² is the proportion of variation in y explained by the linear relationship with x."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/5-5-least-squares-regression-study-guide/).

## Recap

- The **least-squares regression line** ŷ = a + bx is the one line with the **smallest sum of squared residuals**, Σ(y − ŷ)².
- You find a, b, r and r² with **technology**. Enter the explanatory variable as x.
- The line always passes through **(x̄, ȳ)**, and its residuals add to 0.
- a and b are **statistics** from one sample; a different sample would give different values.

## Key relationships

| Quantity | Meaning | Interpretation template |
|---|---|---|
| Slope b | predicted change in y per 1-unit increase in x | "For each additional [unit of x], the predicted [y] increases/decreases by [b units]." |
| Intercept a | predicted y when x = 0 | "When [x] is 0, the predicted [y] is [a units]." Say if it has no sensible meaning. |
| r | direction and strength of the linear association | same sign as b; −1 ≤ r ≤ 1 |
| r² | coefficient of determination, 0 ≤ r² ≤ 1 | "About [r²%] of the variation in [y] is explained by the linear relationship with [x]." |
| (x̄, ȳ) | always on the line | ȳ = a + b·x̄, so a = ȳ − b·x̄ |
| Background | b = r·s_y / s_x | not needed for calculation; explains why b and r share a sign |

## Assumptions and conventions

- Only fit a line when the scatterplot looks linear and the residual plot shows no pattern.
- The intercept has **no reasonable meaning** when x = 0 is outside the data (extrapolation) or the prediction is impossible (for example a negative length).
- In technology output, "Constant" is a; the row named after x is b; "R-sq" is r².

## Mistakes to avoid

1. Leaving out **"predicted"** when interpreting the slope or intercept.
2. Interpreting an intercept that makes no sense instead of saying so.
3. Calling r² "the percentage of points on the line" or "how often the line is right".
4. Taking r = +√r² when the slope is negative.
5. Swapping x and y in technology: the line changes.
6. Treating a steep slope as a strong association: strength comes from r, not b.
7. Claiming cause and effect from a regression line.

## Quick self-check

1. r² = 0.49 and the slope is negative. What is r? *(r = −0.7)*
2. An LSRL has slope 2, x̄ = 12 and ȳ = 50. What is the intercept? *(a = 50 − 2(12) = 26)*
3. ŷ = 3.1 + 0.42x. What is the predicted y at x = 20? *(3.1 + 8.4 = 11.5)*
4. ŷ = −40 + 0.9x predicts a mass (g) from a length (mm) for lengths 80 to 150 mm. Should you interpret the intercept? *(No: x = 0 is outside the data and −40 g is impossible.)*

Next: [practice questions](/advanced-course-resources/statistics/5-5-least-squares-regression-practice/).
