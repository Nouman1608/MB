---
resourceId: "mb-ap-stats-4.4-revision-notes"
title: "Setting Up a Test for a Population Mean or Population Mean Difference: Revision Notes (Statistics 4.4)"
description: "One-page recap of setting up a one-sample t-test for a mean or a matched-pairs mean difference: procedure, parameter, hypotheses, conditions and the mistakes that cost marks."
course: "statistics"
unit: 4
topics: ["4.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-4.4-study-guide"]
learningObjectives:
  - "Recall the procedure names, hypotheses and conditions for a t-test about μ or μd"
  - "Spot the common set-up errors before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use one-variable statistics for quartiles when you check a small sample for outliers."
related: ["mb-ap-stats-4.4-study-guide", "mb-ap-stats-4.4-practice", "mb-ap-stats-4.4-checklist"]
next: "mb-ap-stats-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "One sample → one-sample t-test for μ. Paired data → differences → one-sample t-test for μd."
  - "Hypotheses use μ or μd and a direction taken from the question."
  - "When n < 30, check the sample (or the differences) for strong skew and outliers."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/).

## Recap

- A test asks whether sample data give **convincing evidence against** a claimed value of a parameter.
- For a quantitative variable, σ is unknown, so use **s** and a **t-distribution** with df = n − 1.
- **Matched pairs:** two values on the same individual (before/after, both treatments) or natural pairs. Analyse **one sample of differences**.
- This topic is **State** and **Plan**. Topic 4.5 does **Do** and **Conclude**.

## Key relationships

| Situation | Procedure | Parameter | H₀ | Hₐ options |
|---|---|---|---|---|
| One sample, claimed mean μ₀ | One-sample t-test for a population mean | μ = true mean [variable, units] of all [population] | μ = μ₀ | μ < μ₀, μ > μ₀, μ ≠ μ₀ |
| Paired data | One-sample t-test for a population mean difference | μd = true mean of (A − B) for [population] | μd = 0 | μd < 0, μd > 0, μd ≠ 0 |
| Two separate groups | Two-sample t-test (Topic 4.9) | — | — | — |

## Conditions

| Condition | Check |
|---|---|
| Random | Random sample, or random assignment (random order of treatments for pairs) |
| 10% | n ≤ 10% of N when sampling without replacement; not needed for an experiment with no sampling |
| Sample data | Population approximately normal, or n ≥ 30, or (n < 30) no strong skew and no outliers in the sample. For pairs: apply to the differences |

## Mistakes to avoid

1. **Hypotheses with x̄** instead of μ.
2. **Two-sample analysis of paired data.** Take the differences.
3. **No order of subtraction** for μd, or an Hₐ that does not match it.
4. **"np₀ ≥ 10"** for a mean. That is a proportion check.
5. **"n < 30, so we cannot test."** Check the data first.
6. **Direction chosen from the sample.** Use the question's wording.

## Quick self-check

1. A fictional brand says its dishwashers use "at most 9.0 litres of water per cycle" on average, and a tester suspects more. Write the hypotheses. *(H₀: μ = 9.0, Hₐ: μ > 9.0, where μ is the true mean water use, in litres per cycle, of all the brand’s dishwashers.)*
2. Each of 25 workers is timed doing a task with an old tool and a new tool. Which procedure? *(One-sample t-test for a population mean difference, on the 25 differences.)*
3. A random sample of 18 values has an outlier, and nothing says the population is normal. Is the sample data condition met? *(No: with n < 30 the data must be free from outliers.)*

Next: [practice questions](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-practice/).
