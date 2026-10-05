---
resourceId: "mb-ap-stats-2.7-revision-notes"
title: "Independent Events and Unions of Events: Revision Notes (Statistics 2.7)"
description: "One-page recap of independence checks, the multiplication rule for independent events, the general addition rule for P(A or B), and the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.7-study-guide"]
learningObjectives:
  - "Recall the three equivalent conditions for independence and the general addition rule"
  - "Spot the common errors in independence and union questions before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
calculatorNote: "Keep at least 4 decimal places in working."
related: ["mb-ap-stats-2.7-study-guide", "mb-ap-stats-2.7-practice", "mb-ap-stats-2.7-checklist"]
next: "mb-ap-stats-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Independent: P(A | B) = P(A). Check one condition and show both numbers."
  - "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) for any two events."
  - "Mutually exclusive events with non-zero probabilities are not independent."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/).

## Recap

- A and B are **independent** if knowing whether A happened does not change the probability of B.
- Check independence with **one** of three equivalent conditions. Show both numbers and compare them.
- The **union** A ∪ B means A or B or both. "Or" includes "both".
- The **general addition rule** subtracts the overlap once, because it is counted inside both P(A) and P(B).
- For repeated independent trials, find "at least one" with the complement: 1 − P(none).

## Key relationships

| Idea | Rule | When it applies |
|---|---|---|
| Independence check 1 | P(A \| B) = P(A) | any events (P(B) > 0) |
| Independence check 2 | P(B \| A) = P(B) | any events (P(A) > 0) |
| Independence check 3 | P(A ∩ B) = P(A) · P(B) | any events |
| Multiplication rule | P(A ∩ B) = P(A) · P(B) | **independent** events only |
| General multiplication rule | P(A ∩ B) = P(A) · P(B \| A) | any events |
| General addition rule | P(A ∪ B) = P(A) + P(B) − P(A ∩ B) | any events |
| Mutually exclusive | P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B) | disjoint events only |
| At least one in n independent trials | 1 − P(none) = 1 − (1 − p)ⁿ when each has probability p | independent trials |
| Complement of a union | P(A ∪ B) = 1 − P(neither A nor B) | any events |

## Assumptions

- Use the multiplication rule only when independence is **given**, **checked**, or **justified** by how the outcomes are produced (for example, separate spins). Say which.
- With a two-way table, the probabilities refer to one individual chosen at random from that table.
- Independence of A and B also means independence of their complements.

## Mistakes to avoid

1. **Confusing independent with mutually exclusive.** Disjoint events with non-zero probabilities are dependent.
2. **Adding P(A) + P(B) for overlapping events.** Subtract P(A ∩ B).
3. **Multiplying P(A) · P(B) for dependent events.** Use P(A) · P(B | A) instead.
4. **"At least one" = n × p.** Use 1 − P(none).
5. **Gambler's fallacy:** past independent outcomes do not change the next one.
6. **Comparing P(A | B) with P(B).** Compare it with P(A).
7. **A verdict with no numbers.** Write "0.40 ≠ 0.46, so not independent".

## Quick self-check

1. A and B are independent with P(A) = 0.5 and P(B) = 0.3. Find P(A ∩ B) and P(A ∪ B). *(0.15 and 0.5 + 0.3 − 0.15 = 0.65)*
2. P(A) = 0.2, P(B) = 0.6 and P(A ∩ B) = 0.15. Are A and B independent? *(No: P(A) · P(B) = 0.12 and 0.12 ≠ 0.15)*
3. Each of 3 independent alarms fails with probability 0.1. Find P(at least one fails). *(1 − 0.9³ = 0.271)*

Next: [practice questions](/advanced-course-resources/statistics/2-7-independent-events-unions-events-practice/).
