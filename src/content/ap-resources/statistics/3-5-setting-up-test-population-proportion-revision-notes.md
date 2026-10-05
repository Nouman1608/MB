---
resourceId: "mb-ap-stats-3.5-revision-notes"
title: "Setting Up a Test for a Population Proportion: Revision Notes (Statistics 3.5)"
description: "One-page recap of setting up a one-sample z-test for a proportion: the parameter, null and alternative hypotheses, one- and two-sided tests, and the three conditions."
course: "statistics"
unit: 3
topics: ["3.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.5-study-guide"]
learningObjectives:
  - "Recall the hypotheses and conditions for a one-sample z-test for a population proportion"
  - "Spot the common set-up errors before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Only multiplication is needed: np₀, n(1 − p₀) and 0.10N."
related: ["mb-ap-stats-3.5-study-guide", "mb-ap-stats-3.5-practice", "mb-ap-stats-3.5-checklist"]
next: "mb-ap-stats-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Hypotheses are about p, use the claimed value p₀, and are chosen before seeing the data."
  - "Normality for a test uses p₀: np₀ ≥ 10 and n(1 − p₀) ≥ 10."
  - "Check every condition in context, with numbers."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/).

## Recap

- A **hypothesis test** uses a random sample to decide whether there is convincing evidence against a claimed value of a parameter.
- For one population and a two-outcome variable, the procedure is the **one-sample z-test for a population proportion**.
- **Parameter:** p = the true proportion of [population] who/that [success], in context.
- **H₀** is the status quo and contains "=". **Hₐ** is the researcher's suspicion and never contains "=".
- Set-up = **State** (parameter, hypotheses) + **Plan** (name the test, check conditions).

## Key relationships

| Item | Form |
|---|---|
| Null hypothesis | H₀: p = p₀ |
| One-sided alternatives | Hₐ: p > p₀ ("increased", "more than") or Hₐ: p < p₀ ("decreased", "fewer than") |
| Two-sided alternative | Hₐ: p ≠ p₀ ("different", "changed") |
| "At least" / "at most" claims | Test at the boundary: H₀: p = p₀ |
| Random condition | Data from a random sample of the population |
| 10% condition | n ≤ 0.10N when sampling without replacement |
| Normality condition | np₀ ≥ 10 and n(1 − p₀) ≥ 10 (expected counts under H₀) |

## Assumptions and conventions

- The variable is categorical with two outcomes, and you count successes.
- p₀ comes from the claim in the question, not from the sample.
- The normal model for p̂ is centred at p₀ because the test assumes H₀ is true.
- For a confidence interval, normality used observed counts; for a test it uses expected counts.

## Mistakes to avoid

1. **Hypotheses with p̂** instead of p.
2. **The researcher's claim in H₀.** It belongs in Hₐ.
3. **A one-sided Hₐ chosen because of the sample result.** Read the question's wording instead.
4. **Using np̂** in the normality check for a test.
5. **"n ≥ 30" or "population is normal"**: not conditions for proportions.
6. **"SRS ✓"** with no context: say what was randomly selected.
7. **A vague parameter**: name the population and the response variable.

## Quick self-check

1. A café says 30% of customers order oat milk. The owner thinks the true figure has changed. Write the hypotheses. *(H₀: p = 0.30; Hₐ: p ≠ 0.30, where p is the true proportion of the café's customers who order oat milk)*
2. H₀: p = 0.10 with a random sample of n = 60. Is the normality condition met? *(No: np₀ = 6 < 10, although n(1 − p₀) = 54 ≥ 10)*
3. A random sample of 400 is taken without replacement from a population of 3,000. Is the 10% condition met? *(No: 0.10 × 3,000 = 300, and 400 > 300)*

Next: [practice questions](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-practice/).
