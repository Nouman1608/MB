---
resourceId: "mb-ap-stats-3.14-revision-notes"
title: "Setting Up a Chi-Square Test for Homogeneity or Independence: Revision Notes (Statistics 3.14)"
description: "One-page recap of chi-square distributions, choosing between homogeneity and independence, writing hypotheses and checking conditions, with the mistakes that cost marks."
course: "statistics"
unit: 3
topics: ["3.14"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-3.14-study-guide"]
learningObjectives:
  - "Recall the features of chi-square distributions and the set-up for each chi-square test"
  - "Spot the common errors in choosing the test, writing hypotheses and checking conditions"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "The chi-square test function stores expected counts in a matrix; use them to check the expected counts condition."
related: ["mb-ap-stats-3.14-study-guide", "mb-ap-stats-3.14-practice", "mb-ap-stats-3.14-checklist"]
next: "mb-ap-stats-3.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The design decides the test: separate samples or treatments → homogeneity; one sample, two variables → independence."
  - "Hypotheses are about populations, in words, in context."
  - "All expected counts must be greater than 5."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/).

## Recap

- A chi-square test compares **observed counts** in a two-way table with the **expected counts** you would see if H₀ were true.
- The chi-square statistic measures the distance between observed and expected counts, **relative to the expected counts**. It is never negative; larger values are stronger evidence against H₀.
- **Chi-square distributions** take only positive values and are **skewed right**. As the degrees of freedom increase, the skew becomes less pronounced and the peak moves right.
- The p-value of a chi-square test is always a right-tail area.

## Key relationships

| | Homogeneity | Independence |
|---|---|---|
| Design | Independent random samples from 2+ populations, or a randomized experiment with 2+ treatments | One random sample from one population |
| Variables | One categorical variable | Two categorical variables per individual |
| H₀ | No difference in the distribution of [variable] across [populations/treatments] | No association between [variable 1] and [variable 2] in [population] |
| Hₐ | There is a difference in the distribution of [variable] across [populations/treatments] | There is an association between [variable 1] and [variable 2] in [population] |
| Randomization | Independent random samples or random assignment | One random sample |
| 10% condition | Each n ≤ 10% of its N (not needed for an experiment) | n ≤ 10% of N |
| Expected counts | All greater than 5 | All greater than 5 |

## Assumptions and conventions

- Use **counts**, not percentages, in the table.
- Expected counts come from technology or from (row total × column total) ÷ table total (calculated in Topic 3.15).
- If the expected counts condition fails, do not carry out the test as it stands: take a larger sample, or combine categories if that still answers a sensible question.

## Mistakes to avoid

1. **Choosing the test from the table's shape** instead of the design.
2. **Checking observed counts** instead of expected counts.
3. **Hypotheses about the sample**, or with no context.
4. **Hₐ: "all distributions are different"** instead of "there is a difference".
5. **Reading an association as cause** in an observational study.
6. **Checking the 10% condition for an experiment.**

## Quick self-check

1. Is a chi-square distribution with 2 degrees of freedom more or less skewed than one with 12? *(More skewed. Skew weakens as df increases.)*
2. A shop asks one random sample of 300 customers their age group and preferred payment method. Which test? *(Independence: one sample, two variables.)*
3. In a two-way table with 150 individuals, a row total is 60 and a column total is 45. What is that cell's expected count, and does it meet the condition? *(60 × 45 ÷ 150 = 18, which is greater than 5.)*

Next: [practice questions](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-practice/).
