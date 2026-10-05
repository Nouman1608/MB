---
resourceId: "mb-ap-stats-2.2-revision-notes"
title: "Summary Statistics for Two Categorical Variables: Revision Notes (Statistics 2.2)"
description: "One-page recap of joint, marginal and conditional relative frequencies, how to pick the denominator, how to judge association, and the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.2-study-guide"]
learningObjectives:
  - "Recall the three kinds of relative frequency and the denominator each uses"
  - "Spot the common errors in two-way table calculations before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "four-function"
calculatorNote: "Only division is needed."
related: ["mb-ap-stats-2.2-study-guide", "mb-ap-stats-2.2-practice", "mb-ap-stats-2.2-checklist"]
next: "mb-ap-stats-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Joint and marginal: divide by the grand total. Conditional: divide by one row or column total."
  - "Different conditional distributions mean association."
  - "Read the group after \"of the\" to find the denominator."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-study-guide/).

## Recap

- Every summary statistic for two categorical variables is a **relative frequency**: a count ÷ a total.
- **Joint**: one cell as a share of all individuals ("A **and** B").
- **Marginal**: a row or column total as a share of all individuals (one variable on its own).
- **Conditional**: a cell as a share of one row or one column ("of the A, what proportion are B").
- A **conditional distribution** is the set of conditional relative frequencies within one group; it adds to 1.
- Variables are **associated** if the conditional distributions differ across groups.

## Key relationships

| Statistic | Numerator | Denominator | Example wording |
|---|---|---|---|
| Joint | cell count | grand total | "What proportion of all customers are under 30 **and** use the app?" |
| Marginal | row or column total | grand total | "What proportion of all customers use the app?" |
| Conditional (row) | cell count | that row's total | "Of the under-30s, what proportion use the app?" |
| Conditional (column) | cell count | that column's total | "Of the app users, what proportion are under 30?" |
| Link | joint = marginal × conditional | | 0.40 × 0.50 = 0.20 |
| No association | conditional distributions all equal (and equal to the marginal distribution) | | |

## Assumptions and conventions

- Each individual is in exactly one cell, so the joint relative frequencies add to 1.
- When one variable is explanatory, condition on it: compare the response **within each explanatory group**.
- Small differences between sample proportions can arise by chance. Describe the size of a difference; a formal test comes later in the course.

## Mistakes to avoid

1. **Swapping the direction** of a conditional relative frequency.
2. **Dividing by the grand total** when the question restricts to a group.
3. **Judging association from counts** or joint values instead of conditional proportions.
4. **Calling the largest share "most"** when it is under 0.50.
5. **Claiming cause** from observational data.

## Quick self-check

Use this table of 100 fictional people: Group A has 30 Yes and 20 No; Group B has 10 Yes and 40 No.

1. What proportion of all people are in Group A and said Yes? *(30 ÷ 100 = 0.30, a joint relative frequency)*
2. What proportion of all people said Yes? *(40 ÷ 100 = 0.40, a marginal relative frequency)*
3. Of the Group A people, what proportion said Yes? Of the Yes answers, what proportion came from Group A? *(30 ÷ 50 = 0.60; 30 ÷ 40 = 0.75)*
4. Are group and answer associated? *(Yes: 0.60 of Group A said Yes against 10 ÷ 50 = 0.20 of Group B)*

Next: [practice questions](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-practice/).
