---
resourceId: "mb-ap-calcbc-7.9-revision-notes"
title: "Logistic Models with Differential Equations: Revision Notes (Calculus BC 7.9)"
description: "One-page recap of logistic models: the equation and its forms, carrying capacity, long-run limits, fastest growth at half capacity, concavity, and the mistakes to avoid."
course: "calculus-bc"
unit: 7
topics: ["7.9"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-7.9-study-guide"]
learningObjectives:
  - "Recall the logistic equation and read its key features without solving it"
  - "Spot the common errors with logistic models before making them"
skills: ["3", "1"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Everything on this page is done by hand."
related: ["mb-ap-calcbc-7.9-study-guide", "mb-ap-calcbc-7.9-practice", "mb-ap-calcbc-7.9-checklist"]
next: "mb-ap-calcbc-7.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "dy/dt = ky(a − y): carrying capacity a, limit a for any y(0) > 0."
  - "Fastest change at y = a/2, with rate ka²/4."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-study-guide/). **BC-only material.** Prerequisites (Topics 7.1, 7.4 and 7.8, and concavity from Unit 5) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- **Logistic growth:** the rate is jointly proportional to the amount y and to the room left, a − y.
- So **dy/dt = ky(a − y)** with k > 0. The constant a is the **carrying capacity**.
- Growth starts almost exponentially, slows down, and levels off at a.
- You can read everything you need from the equation and the initial condition. No solving needed.

## Key relationships

| Feature | How to find it | Example: dy/dt = 0.03y(90 − y) |
|---|---|---|
| Carrying capacity | a in ky(a − y) | 90 |
| Constant solutions | y = 0 and y = a | y = 0, y = 90 |
| Long-run limit | a if y(0) > 0; 0 if y(0) = 0 | 90 |
| y when changing fastest | a/2 | 45 |
| Greatest rate | ka²/4 = k(a/2)(a/2) | 0.03 × 45 × 45 = 60.75 |
| Second derivative | d²y/dt² = k(a − 2y) · dy/dt | Inflection at y = 45 |
| Other form | ry(1 − y/a) with r = ka | 2.7y(1 − y/90) |

## Behaviour by starting value

| y(0) | What y does | Concavity |
|---|---|---|
| 0 or a | Stays constant | None |
| Between 0 and a/2 | Increases to a; S-shaped | Up, then down after y = a/2 |
| Between a/2 and a | Increases to a | Down |
| Above a | Decreases to a | Up |

## Mistakes to avoid

1. **Reading a from the wrong place.** Rewrite as ky(a − y) first. For 0.6y − 0.002y², factor: 0.002y(300 − y), so a = 300.
2. **"Fastest at a."** The rate is 0 at a. Fastest is at a/2.
3. **Answering with a time** when the question asks for the value of y.
4. **Forgetting the chain rule** in d²y/dt²: differentiate with respect to t, so dy/dt appears.
5. **Assuming growth.** If y(0) > a, the quantity falls.

## Quick self-check

1. For dy/dt = 0.03y(90 − y) with y(0) = 10, find the limit as t → ∞ and the value of y when it grows fastest. *(90; 45)*
2. Find the carrying capacity of dP/dt = 0.6P − 0.002P². *(Factor: 0.002P(300 − P), so 300.)*
3. A logistic quantity starts at y(0) = 0. What is its limit? *(0: it is a constant solution.)*
4. For dy/dt = ky(a − y) with y(0) > a, is y increasing or decreasing? *(Decreasing, towards a.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-practice/).
