---
resourceId: "mb-ap-stats-2.5-revision-notes"
title: "Mutually Exclusive Events: Revision Notes (Statistics 2.5)"
description: "One-page recap of joint probability, the notation P(A ∩ B), the test for mutually exclusive events and how to justify it, with the mistakes that cost marks."
course: "statistics"
unit: 2
topics: ["2.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-2.5-study-guide"]
learningObjectives:
  - "Recall the meaning of joint probability and the test P(A ∩ B) = 0 for mutually exclusive events"
  - "Spot the common errors in mutually exclusive questions before making them"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Keep fractions exact, or round decimals to 4 decimal places."
related: ["mb-ap-stats-2.5-study-guide", "mb-ap-stats-2.5-practice", "mb-ap-stats-2.5-checklist"]
next: "mb-ap-stats-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Joint probability P(A ∩ B) = probability that A and B both happen on the same trial."
  - "Mutually exclusive (disjoint) ⇔ P(A ∩ B) = 0."
  - "Justify with the intersection, the value of P(A ∩ B) and a conclusion in context."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, a Venn diagram and worked examples, use the [full study guide](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/).

## Recap

- The **intersection** A ∩ B is the set of outcomes in **both** A and B. Read it "A and B".
- The **joint probability** P(A ∩ B) is the probability that A and B both happen on the same trial.
- Two events are **mutually exclusive** (or **disjoint**) if they cannot happen at the same time.
- So mutually exclusive events have P(A ∩ B) = 0. Any joint probability above 0, however small, means the events are **not** mutually exclusive.

## Key relationships

| Idea | How to find or use it |
|---|---|
| Joint probability, equally likely outcomes | P(A ∩ B) = (outcomes in both A and B) ÷ (total outcomes) |
| Joint probability from a two-way table | P(row ∩ column) = cell count ÷ grand total |
| Mutually exclusive | P(A ∩ B) = 0; on a Venn diagram, no overlap with outcomes in it |
| Not mutually exclusive | P(A ∩ B) > 0; at least one outcome is in both events |
| Event and its complement | always mutually exclusive |
| Two rows (or two columns) of one two-way table | always mutually exclusive: each individual is in one row and one column |

## Assumptions and conventions

- Both events refer to the **same trial** (the same roll, the same randomly chosen person or ticket).
- A two-way table is used for one individual chosen **at random** from the table.
- A zero cell shows P(A ∩ B) = 0 for an individual chosen from **that data set**. It does not, on its own, prove the combination is impossible in a wider population.

## Mistakes to avoid

1. **Calling small joint probabilities "mutually exclusive".** Only 0 counts.
2. **Thinking mutually exclusive means complement.** Disjoint events can leave outcomes in neither event.
3. **Dividing a cell by a row or column total** when you want a joint probability. Use the grand total.
4. **Mixing up "cannot happen together" with "does not affect each other".** The second idea is independence (Topic 2.7).
5. **No justification.** Always show P(A ∩ B), compare it with 0 and conclude in context.

## Quick self-check

1. A card is drawn at random from cards numbered 1 to 20. Are "multiple of 9" and "even and greater than 15" mutually exclusive? *(No: 18 is in both, so P(both) = 1/20 = 0.05 > 0.)*
2. For two events, P(A ∩ B) = 0. What can you conclude? *(A and B are mutually exclusive: they cannot happen on the same trial.)*
3. In a survey of 80 shoppers, none both paid by cash and used self-checkout. For one shopper chosen at random from these 80, what is P(cash ∩ self-checkout)? Does this prove no shopper ever does both? *(0/80 = 0, so the events are mutually exclusive for these 80 shoppers. It does not prove it for all shoppers: the combination may just not have appeared in this sample.)*

Next: [practice questions](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-practice/).
