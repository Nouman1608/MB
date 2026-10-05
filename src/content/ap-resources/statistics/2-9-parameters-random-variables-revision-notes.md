---
resourceId: "mb-ap-stats-2.9-revision-notes"
title: "Parameters of Random Variables: Revision Notes (Statistics 2.9)"
description: "One-page recap of parameters versus statistics and the mean, variance and standard deviation of a discrete random variable, with interpretations and the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.9-study-guide"]
learningObjectives:
  - "Recall the formulas for the mean, variance and standard deviation of a discrete random variable"
  - "Spot the common errors in calculating and interpreting parameters before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Values in one list, probabilities as frequencies in another; read x̄ as μ and σx as σ."
related: ["mb-ap-stats-2.9-study-guide", "mb-ap-stats-2.9-practice", "mb-ap-stats-2.9-checklist"]
next: "mb-ap-stats-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics"]
keyPoints:
  - "A parameter is fixed; a statistic varies from sample to sample."
  - "μ = Σ xᵢ · P(xᵢ); σ = √[ Σ (xᵢ − μ)² · P(xᵢ) ]."
  - "Interpret μ as a long-run average and σ as a typical long-run distance from μ, in context."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/).

## Recap

- A **parameter** describes a whole probability distribution or population. It is a single fixed value.
- A **statistic** is calculated from data (a sample or a simulation). It changes from sample to sample.
- The **expected value** (mean) of a discrete random variable is the probability-weighted average of its values.
- The **standard deviation** of a random variable measures the typical distance of its values from the mean, over the long run.
- The expected value does not have to be a possible value of X, and it is not the most likely value.

## Key relationships

| Quantity | Symbol | How to find it | Interpretation |
|---|---|---|---|
| Mean (expected value) | μ or E(X) | Σ xᵢ · P(xᵢ) | long-run average value of X |
| Variance | σ² or V(X) | Σ (xᵢ − μ)² · P(xᵢ) | squared units; a step towards σ |
| Standard deviation | σ or SD(X) | √(variance) | typical long-run distance of X from μ |
| Check on μ | | Σ (xᵢ − μ) · P(xᵢ) = 0 | deviations balance at the mean |
| Sample mean from data | x̄ | Σ x ÷ n | a statistic that estimates μ |

## Assumptions and conventions

- X is **discrete**: its possible values can be listed (countable), often a finite list.
- The probabilities must each be between 0 and 1 and add to 1. Check this first.
- No n − 1 and no division by a count: the probabilities do the weighting.
- On a calculator, use the probability list as frequencies and read **σx**, not Sx.

## Mistakes to avoid

1. **Averaging the values without weighting** by their probabilities.
2. **Calling E(X) "what will happen"** on one trial. It is a long-run average.
3. **Forgetting the square root**, so reporting the variance as σ.
4. **Using Sx** or dividing by n − 1.
5. **Calling a simulated mean a parameter.** It is a statistic; μ is the parameter.
6. **No context or units**: name the random variable, the process (days, plays, customers) and the units.

## Quick self-check

1. X = 0 or 2, each with probability 0.5. Find μ and σ. *(μ = 1, σ = 1)*
2. Y = 10 with probability 0.2 and 20 with probability 0.8 (minutes). Find μ and σ. *(μ = 18 minutes; σ² = 64(0.2) + 4(0.8) = 16, so σ = 4 minutes)*
3. A simulation of 200 plays of a game gives a mean gain of $0.35. Is $0.35 a parameter or a statistic? *(A statistic: another 200 plays would give a different value.)*

Next: [practice questions](/advanced-course-resources/statistics/2-9-parameters-random-variables-practice/).
