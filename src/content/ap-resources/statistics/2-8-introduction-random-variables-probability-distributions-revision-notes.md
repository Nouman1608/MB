---
resourceId: "mb-ap-stats-2.8-revision-notes"
title: "Introduction to Random Variables and Probability Distributions: Revision Notes (Statistics 2.8)"
description: "One-page recap of discrete random variables, valid probability distributions, tables, histograms and functions, cumulative distributions and simulation estimates, with common mistakes."
course: "statistics"
unit: 2
topics: ["2.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.8-study-guide"]
learningObjectives:
  - "Recall the rules for a valid discrete probability distribution and how a cumulative distribution is built"
  - "Spot the common errors in probability-distribution questions before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
calculatorNote: "Give probabilities to 4 decimal places unless they are exact."
related: ["mb-ap-stats-2.8-study-guide", "mb-ap-stats-2.8-practice", "mb-ap-stats-2.8-checklist"]
next: "mb-ap-stats-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Valid: each probability from 0 to 1, and the sum is 1."
  - "Cumulative: P(X ≤ x), a running total that ends at 1."
  - "Rules give the exact distribution; a simulation gives an estimate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-study-guide/).

## Recap

- A **random variable** (capital X) gives a numerical value to each outcome of a random process. Small x is one particular value.
- **Discrete** random variables have values you can list (0, 1, 2, …). Continuous ones take any value in an interval (Topic 2.11).
- A **probability distribution** lists every possible value of X with its probability.
- It can be shown as a **table**, a **probability histogram** or a **function**.
- The **cumulative distribution** gives P(X ≤ x) for each x.
- The exact distribution comes from **probability rules**; a **simulation** estimates it with relative frequencies.

## Key relationships

| Idea | Rule |
|---|---|
| Valid distribution | 0 ≤ P(X = x) ≤ 1 for every x, and ΣP(X = x) = 1 |
| Missing probability | P(X = one value) = 1 − (sum of all the others) |
| Unknown constant in a function | set the sum of all probabilities equal to 1 and solve |
| Cumulative probability | P(X ≤ x) = sum of P(X = t) for all values t ≤ x |
| Single value from cumulative | P(X = x) = P(X ≤ x) − P(X ≤ previous value) |
| "At least" | P(X ≥ a) = 1 − P(X ≤ value just below a) |
| "Between" | P(a < X ≤ b) = P(X ≤ b) − P(X ≤ a) |
| Simulation estimate | estimated P(X = x) = (trials with value x) ÷ (total trials) |

## Assumptions

- Building a distribution with rules uses the rules' assumptions, often independence. State them.
- A simulation must imitate the real process: correct probabilities, and independence between parts when the real process has it.
- Each trial of a simulation gives one value of X.

## Mistakes to avoid

1. **Checking only the sum.** Also check that no probability is negative or above 1.
2. **Leaving out a value**, often 0.
3. **One row per outcome** instead of one per value of X.
4. **Assuming the values are equally likely.**
5. **Mixing up < and ≤.** "Fewer than 3" excludes 3.
6. **Reading the cumulative table as P(X = x).**
7. **Calling a simulation estimate exact.**

## Quick self-check

1. X takes values 0, 1, 2, 3 with probabilities 0.2, 0.35, k, 0.15. Find k. *(k = 1 − 0.70 = 0.3)*
2. A cumulative table gives P(X ≤ 1) = 0.3, P(X ≤ 2) = 0.65, P(X ≤ 3) = 0.9, P(X ≤ 4) = 1. Find P(X = 2) and P(X > 2). *(0.65 − 0.3 = 0.35; 1 − 0.65 = 0.35)*
3. Is P(X = x) = x ÷ 6 for x = 1, 2, 3 a valid distribution? *(Yes: 1/6 + 2/6 + 3/6 = 1, and each value is between 0 and 1)*

Next: [practice questions](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-practice/).
