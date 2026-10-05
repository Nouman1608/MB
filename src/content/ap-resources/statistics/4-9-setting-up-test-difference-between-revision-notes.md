---
resourceId: "mb-ap-stats-4.9-revision-notes"
title: "Setting Up a Test for the Difference Between Two Population Means: Revision Notes (Statistics 4.9)"
description: "One-page recap of setting up a two-sample t-test: choosing the procedure, defining μ₁ and μ₂, writing hypotheses and checking the three conditions, with the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.9-study-guide"]
learningObjectives:
  - "Recall the hypotheses and conditions for a two-sample t-test for μ₁ − μ₂"
  - "Spot the common set-up errors before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Only 10% checks, quartiles and fences are needed."
related: ["mb-ap-stats-4.9-study-guide", "mb-ap-stats-4.9-practice", "mb-ap-stats-4.9-checklist"]
next: "mb-ap-stats-4.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Two independent groups and a quantitative response: two-sample t-test for μ₁ − μ₂."
  - "H₀: μ₁ − μ₂ = 0. Hₐ from the wording, decided before seeing the data."
  - "Check randomization, 10% and sample data for both groups."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/).

## Recap

- A test asks whether the data give **convincing evidence** of a difference in population means. This topic covers **State** and **Plan**; Topic 4.10 covers **Do** and **Conclude**.
- Procedure: **two-sample t-test for a difference between two population means**. It uses t because σ₁ and σ₂ are unknown and are replaced by s₁ and s₂.
- The samples must be **independent**. Paired data (same individuals twice, natural pairs) use a one-sample t-test on the differences.
- Define **μ₁ and μ₂** in context: population (or true) mean, response variable with units, and which population or treatment.

## Key relationships

| Item | What to write |
|---|---|
| Null hypothesis | H₀: μ₁ − μ₂ = 0, or H₀: μ₁ = μ₂ |
| "Greater", "longer", "higher" | Hₐ: μ₁ − μ₂ > 0, or μ₁ > μ₂ |
| "Smaller", "shorter", "lower" | Hₐ: μ₁ − μ₂ < 0, or μ₁ < μ₂ |
| "Different", "affects", "changes" | Hₐ: μ₁ − μ₂ ≠ 0, or μ₁ ≠ μ₂ |
| Randomization | Two independent random samples, or a randomized experiment |
| 10% | n₁ ≤ 0.10N₁ and n₂ ≤ 0.10N₂ (sampling without replacement only) |
| Sample data | Both n ≥ 30; or populations approximately normal; or both samples free from strong skewness and outliers |

## Assumptions and conventions

- Pick the order of subtraction once and keep it from the definitions to Hₐ.
- The course's two-sample t-test does **not** pool: it does not assume σ₁ = σ₂.
- In an experiment with volunteers, the 10% condition is not needed, and results apply to subjects like those in the study.
- For a small sample, show the check: a dot plot description or the 1.5 × IQR fences.

## Mistakes to avoid

1. **x̄ in the hypotheses.** Use μ.
2. **Two-sample test on paired data.** Look for a natural partner for each value.
3. **One-sided Hₐ for a "difference" question** because one sample mean looks bigger.
4. **Inequality in H₀.** H₀ always states equality.
5. **"n < 30, so it fails."** Look at both samples first.
6. **Combining groups**: n₁ + n₂ ≥ 30, or 10% of N₁ + N₂.
7. **10% condition in a randomized experiment.**

## Quick self-check

1. "Does a new paint dry at a different rate from the old paint?" Write Hₐ. *(Hₐ: μ_new − μ_old ≠ 0, two-sided)*
2. Samples of 18 and 40 from populations of unknown shape. What must you check? *(Both sample distributions are free from strong skewness and outliers, because one sample is under 30.)*
3. Random samples of 45 from populations of 600 and 380 people. Is the 10% condition met? *(First: 45 ≤ 60, yes. Second: 45 > 38, no, so the condition fails.)*

Next: [practice questions](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-practice/).
