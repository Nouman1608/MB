---
resourceId: "mb-ap-stats-5.2-revision-notes"
title: "Correlation: Revision Notes (Statistics 5.2)"
description: "One-page recap of the correlation coefficient r: its range, sign, strength, lack of units, limits with curves and outliers, and why correlation does not imply causation."
course: "statistics"
unit: 5
topics: ["5.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-5.2-study-guide"]
learningObjectives:
  - "Recall the properties of r and how to interpret it in context"
  - "Spot the common errors in correlation questions before making them"
skills: ["4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find r with technology. Round to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-5.2-study-guide", "mb-ap-stats-5.2-practice", "mb-ap-stats-5.2-checklist"]
next: "mb-ap-stats-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "r measures the direction and strength of a linear association only."
  - "−1 ≤ r ≤ 1; r has no units."
  - "Check the scatterplot, and never treat correlation as proof of cause."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/5-2-correlation-study-guide/).

## Recap

- The **correlation coefficient r** summarises the **direction** and **strength** of a **linear** association between two quantitative variables.
- You find r with **technology**; you interpret it in context.
- Model sentence: "r = 0.93 shows a **strong, positive, linear** association between **trunk diameter** and **apple yield**: trees with wider trunks tend to produce more apples."

## Key relationships

| Fact | Meaning |
|---|---|
| −1 ≤ r ≤ 1 | Any value outside this interval is an error |
| r > 0 / r < 0 | positive / negative association |
| \|r\| close to 1 | strong linear association; \|r\| close to 0 means weak or no linear association |
| r = ±1 | perfect linear association: all points on one line |
| r = 0 | no linear association (a curve is still possible) |
| Units | none; changing units does not change r |
| Swap x and y | r is unchanged |
| Rough working guide (not official) | \|r\| > 0.8 strong; 0.5 to 0.8 moderate; < 0.5 weak |

## Assumptions and conventions

- Both variables are quantitative.
- r describes **linear** association only, so look at the scatterplot first.
- r is **not resistant**: one unusual point can change it a lot.
- An association in an **observational study** cannot show cause and effect; a well-designed **experiment** can.

## Mistakes to avoid

1. **Judging strength by sign**: −0.85 is stronger than 0.60.
2. **"r = 0 means no relationship"**: only no *linear* relationship.
3. **"r near 1 means linear"**: a curve can give r = 0.98. Check the plot.
4. **Giving r units**, or saying it changes when units change.
5. **Confusing r with the slope**: r is about closeness to a line, not steepness.
6. **Claiming cause** from correlation; name a possible lurking variable instead.
7. **No context**: name strength, direction, "linear" and both variables.

## Quick self-check

1. Heights are converted from cm to inches. The correlation with weight was 0.66. What is it now? *(Still 0.66: r has no units)*
2. Which is the stronger linear association: r = −0.72 or r = 0.45? *(r = −0.72, because 0.72 > 0.45)*
3. A scatterplot shows a perfect U-shape and r = 0. Is there an association? *(Yes, a strong non-linear one; there is no linear association)*
4. Towns with more hospitals have more deaths (r = 0.88). Do hospitals cause deaths? *(No. Population is a likely lurking variable; this is observational data)*

Next: [practice questions](/advanced-course-resources/statistics/5-2-correlation-practice/).
