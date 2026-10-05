---
resourceId: "mb-ap-stats-3.8-revision-notes"
title: "Potential Errors When Performing Tests: Revision Notes (Statistics 3.8)"
description: "One-page recap of Type I and Type II errors, α, power and β, the factors that change power, and how consequences guide α and sample size, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.8-study-guide"]
learningObjectives:
  - "Recall the definitions and probabilities of Type I and Type II errors and power"
  - "Spot the common errors in questions about test errors before making them"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "P(Type I) = α and P(Type II) = 1 − power; no other calculation is needed."
related: ["mb-ap-stats-3.8-study-guide", "mb-ap-stats-3.8-practice", "mb-ap-stats-3.8-checklist"]
next: "mb-ap-stats-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Type I: reject a true H₀. Type II: fail to reject a false H₀."
  - "P(Type I) = α; P(Type II) = 1 − power."
  - "Describe every error in context: what the test concluded and what is actually true."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/).

## Recap

- A test decision can be wrong because samples vary.
- **Type I error:** convincing evidence for Hₐ (H₀ rejected), but H₀ is true.
- **Type II error:** no convincing evidence for Hₐ (H₀ not rejected), but Hₐ is true.
- **Power:** the probability of correctly rejecting H₀ when it is false, for a stated alternative value.
- Reject H₀ → only a Type I error is possible. Fail to reject → only a Type II error is possible.

## Key relationships

| Item | Rule |
|---|---|
| P(Type I error) | α, chosen before collecting data (often 0.01, 0.05 or 0.10) |
| Power | P(reject H₀ when a particular alternative is true) |
| P(Type II error) | β = 1 − power |
| Good design target | power ≥ 0.80, so β ≤ 0.20 |
| Larger n | power up, β down (α unchanged) |
| Smaller standard error | power up, β down |
| True value further from p₀ | power up, β down |
| Larger α | power up, β down, but Type I risk up |
| Type I error more serious | choose a small α |
| Type II error more serious | choose a larger α and/or a larger n |

## Assumptions and conventions

- Each power value refers to one specific true value of the parameter; questions give it to you.
- "Others held constant": each factor is changed one at a time.
- Error template: "The test finds (does not find) convincing evidence that [Hₐ in context], when really [truth in context]."

## Mistakes to avoid

1. **No context** in an error description.
2. **Only half the error**: you must give both the conclusion and the true situation.
3. **P(Type II) = 1 − α.** Wrong: it is 1 − power.
4. **Calling α or power the probability that a hypothesis is true.**
5. **"Smaller α is always safer."** It raises the Type II risk.
6. **Naming the wrong possible error** after a decision: rejection → Type I only.
7. **Saying a larger sample lowers α.** It raises power; α is chosen.

## Quick self-check

1. H₀: p = 0.20, Hₐ: p < 0.20, where p is the proportion of a café's orders that are takeaway. Describe a Type II error. *(The test does not find convincing evidence that fewer than 20% of orders are takeaway, when really fewer than 20% are.)*
2. α = 0.05 and power = 0.83 against p = 0.12. Find P(Type II error). *(1 − 0.83 = 0.17)*
3. A test rejects H₀ with p-value 0.02. Which error could have been made? *(Type I only)*

Next: [practice questions](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-practice/).
