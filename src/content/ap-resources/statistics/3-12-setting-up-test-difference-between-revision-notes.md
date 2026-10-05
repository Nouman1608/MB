---
resourceId: "mb-ap-stats-3.12-revision-notes"
title: "Setting Up a Test for the Difference Between Two Population Proportions: Revision Notes (Statistics 3.12)"
description: "One-page recap of choosing the two-sample z-test for p₁ − p₂, defining parameters, writing hypotheses and checking conditions with the pooled proportion, plus the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.12"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.12-study-guide"]
learningObjectives:
  - "Recall the hypotheses and conditions for a two-sample z-test for p₁ − p₂"
  - "Spot the common set-up errors before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "p̂c = (x₁ + x₂)/(n₁ + n₂). Give condition counts to 1 decimal place."
related: ["mb-ap-stats-3.12-study-guide", "mb-ap-stats-3.12-practice", "mb-ap-stats-3.12-checklist"]
next: "mb-ap-stats-3.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics"]
keyPoints:
  - "H₀ is always no difference: p₁ = p₂."
  - "Hₐ comes from the question's wording, not the data."
  - "The normality check uses the pooled proportion p̂c."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/).

## Recap

- **Procedure:** two-sample z-test for the difference between two population proportions. Use it when a question asks for evidence of a difference between two groups' proportions.
- **Parameters:** define both p₁ and p₂ as true proportions, with the response and the population (or treatment) for each.
- **Hypotheses:** H₀ says no difference; Hₐ says what you want evidence of.
- **Conditions:** randomization, 10% (sampling only), normality with p̂c.

## Key relationships

| Item | Form |
|---|---|
| Null hypothesis | H₀: p₁ = p₂, or H₀: p₁ − p₂ = 0 |
| "Greater / higher / more" | Hₐ: p₁ > p₂, or p₁ − p₂ > 0 |
| "Less / lower / reduced" | Hₐ: p₁ < p₂, or p₁ − p₂ < 0 |
| "Different / affects / changes" | Hₐ: p₁ ≠ p₂, or p₁ − p₂ ≠ 0 |
| Pooled proportion | p̂c = (x₁ + x₂)/(n₁ + n₂) = (n₁p̂₁ + n₂p̂₂)/(n₁ + n₂) |
| Normality condition | n₁p̂c, n₁(1 − p̂c), n₂p̂c, n₂(1 − p̂c) all ≥ 10 |
| 10% condition | n₁ ≤ 0.10N₁ and n₂ ≤ 0.10N₂ (not needed for an experiment) |

## Assumptions and conventions

- "Independent" samples: separate random samples with no individual in both and no pairing.
- In an experiment, the "populations" are the treatments: "subjects like these who would receive treatment 1".
- Choose α and the direction of Hₐ **before** looking at the data.
- Interval (Topic 3.10) uses observed counts and no pooling; test uses p̂c.

## Mistakes to avoid

1. **Hypotheses with p̂** instead of p.
2. **Direction of Hₐ taken from the sample results.**
3. **Parameters defined with the samples** ("of the 200 sampled").
4. **Averaging p̂₁ and p̂₂** instead of pooling the counts.
5. **Normality checked with observed counts, or with n ≥ 30.**
6. **10% condition applied to an experiment**, or missed for a survey.
7. **Paired or before-and-after data** treated as independent samples.
8. **"Conditions are met"** with no numbers.

## Quick self-check

1. A question asks: "Does the new timetable change the proportion of trains that run late?" Which Hₐ? *(Hₐ: p_new ≠ p_old: "change" has no direction.)*
2. Samples: 30 of 100 and 60 of 150. Find p̂c and check normality. *(p̂c = 90/250 = 0.36; counts 36, 64, 54, 96, all at least 10.)*
3. Is the 10% condition needed when 200 volunteers are randomly assigned to two diets? *(No: it is a randomized experiment.)*

Next: [practice questions](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-practice/).
