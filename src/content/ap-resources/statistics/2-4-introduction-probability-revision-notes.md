---
resourceId: "mb-ap-stats-2.4-revision-notes"
title: "Introduction to Probability: Revision Notes (Statistics 2.4)"
description: "One-page recap of sample spaces, equally likely outcomes, the 0-to-1 rule, P(S) = 1 and the complement rule, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.4-study-guide"]
learningObjectives:
  - "Recall the basic probability rules and the complement rule"
  - "Spot the common errors in counting outcomes before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Fractions are exact; if you use decimals, keep 3 or 4 decimal places."
related: ["mb-ap-stats-2.4-study-guide", "mb-ap-stats-2.4-practice", "mb-ap-stats-2.4-checklist"]
next: "mb-ap-stats-2.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Count outcomes only when they are equally likely."
  - "0 ≤ P(E) ≤ 1 and P(S) = 1."
  - "P(Eᶜ) = 1 − P(E); “at least one” = 1 − P(none)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-4-introduction-probability-study-guide/).

## Recap

- The **sample space** S is the set of all possible outcomes, with no overlaps. One outcome happens on every trial.
- An **event** E is a set of outcomes. Its probability is written **P(E)**.
- With **equally likely** outcomes, find P(E) by counting.
- The **complement** of E (written Eᶜ, E′ or Ē) is "E does not happen".
- For two-stage processes, list outcomes as pairs in a grid or a systematic list.

## Key relationships

| Rule | Statement | Use it to… |
|---|---|---|
| Sample space | P(S) = 1; probabilities of all separate outcomes add to 1 | find a missing probability |
| Range | 0 ≤ P(E) ≤ 1 (0 = impossible, 1 = certain) | check every answer |
| Equally likely outcomes | P(E) = outcomes in E ÷ outcomes in S | calculate an exact probability |
| Random choice from a table | P(category) = count ÷ total | turn relative frequencies into probabilities |
| Complement | P(Eᶜ) = 1 − P(E) | handle "not" and "at least one" |
| At least one | P(at least one) = 1 − P(none) | avoid counting many outcomes |

## Assumptions

- The counting formula needs **equally likely** outcomes: a fair die or coin, equal sectors, or one individual chosen at random.
- Outcomes in the sample space must not overlap, and none may be missing.
- Order matters when the stages are different (day 1 then day 2; die then spinner).

## Mistakes to avoid

1. **"Three outcomes, so 1/3 each"** when the outcomes are not equally likely.
2. **Counting totals or scores** instead of the equally likely pairs behind them.
3. **Missing or double-counting** outcomes; use a grid.
4. **Answers below 0 or above 1.** Always impossible.
5. **Wrong complement:** the complement of "at least 2" is "at most 1".
6. **Writing a percentage as a probability** (87.5 instead of 0.875).

## Quick self-check

1. P(E) = 0.27. Find P(Eᶜ). *(1 − 0.27 = 0.73)*
2. A fair spinner has 5 equal sectors numbered 1 to 5. Find P(even number). *(2 of 5 outcomes: 2/5 = 0.4)*
3. What is the complement of "at least one of the three days is sunny"? *(None of the three days is sunny.)*

Next: [practice questions](/advanced-course-resources/statistics/2-4-introduction-probability-practice/).
