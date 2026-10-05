---
resourceId: "mb-ap-stats-2.6-revision-notes"
title: "Conditional Probability: Revision Notes (Statistics 2.6)"
description: "One-page recap of conditional probability, the formula P(A | B) = P(A ∩ B) / P(B), the general multiplication rule and tree diagrams, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.6-study-guide"]
learningObjectives:
  - "Recall the conditional probability formula and the general multiplication rule"
  - "Spot the common errors in conditional probability questions before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "graphing"
calculatorNote: "Keep fractions exact, or round decimals to 4 decimal places at the end only."
related: ["mb-ap-stats-2.6-study-guide", "mb-ap-stats-2.6-practice", "mb-ap-stats-2.6-checklist"]
next: "mb-ap-stats-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "P(A | B) = P(A ∩ B) / P(B): the condition B goes on the bottom."
  - "P(A ∩ B) = P(A) · P(B | A): multiply along a tree path."
  - "P(A | B) and P(B | A) are usually different."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, a tree diagram and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/).

## Recap

- A **conditional probability** P(A | B) is the probability that A happens **given that** B has happened. Read the bar as "given".
- The condition B shrinks the set of possible outcomes to those in B. You then ask what fraction of B is also in A.
- The **general multiplication rule** finds a joint probability in stages: first A, then B given A.
- A **tree diagram** shows the stages. Later branches are conditional on the earlier path.

## Key relationships

| Idea | Formula or method |
|---|---|
| Conditional probability | P(A \| B) = P(A ∩ B) / P(B), with P(B) > 0 |
| From a two-way table | P(A \| B) = (cell for A and B) ÷ (total for B) |
| General multiplication rule | P(A ∩ B) = P(A) · P(B \| A) |
| Drawing without replacement | second-draw probability is conditional: reduce the totals after the first draw |
| Tree diagram | branches from one point add to 1; multiply along a path; add paths that make up an event |
| Reversing a condition | P(B \| A) = P(A ∩ B) / P(A): find the joint probability, then divide by the new condition |

## Assumptions and conventions

- The condition must have a probability above 0. You cannot condition on an impossible event.
- In a two-way table, one individual is chosen **at random** from the whole table.
- Words like "of the …", "among the …", "given that …" and "if … then …" usually name the condition.
- Keep exact values until the final step.

## Mistakes to avoid

1. **Swapping the condition.** P(late | van) is not P(van | late).
2. **Dividing by the grand total** when the question gives a condition. That gives the joint probability.
3. **Ignoring "without replacement".** The second draw has one fewer item.
4. **Multiplying unconditional probabilities.** P(A) · P(B) is only for independent events (Topic 2.7). Use P(A) · P(B | A).
5. **Rounding early**, especially before dividing to reverse a condition.
6. **Reading cause into a conditional probability** from observational data.

## Quick self-check

1. P(A ∩ B) = 0.12 and P(B) = 0.4. Find P(A | B). *(0.12 ÷ 0.4 = 0.3)*
2. A box has 6 working bulbs and 2 broken bulbs. Two bulbs are taken at random without replacement. Find P(both broken). *(2/8 × 1/7 = 1/28 ≈ 0.0357)*
3. P(A) = 0.5 and P(B | A) = 0.3. Find P(A ∩ B). *(0.5 × 0.3 = 0.15)*

Next: [practice questions](/advanced-course-resources/statistics/2-6-conditional-probability-practice/).
