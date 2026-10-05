---
resourceId: "mb-ap-stats-2.5-practice"
title: "Mutually Exclusive Events: Practice Questions (Statistics 2.5)"
description: "Seven original Marlbridge practice questions on joint probability and mutually exclusive events, from sample spaces and two-way tables, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.5"]
resourceType: "practice-questions"
prerequisites:
  - "Finding probabilities of equally likely outcomes (Topic 2.4)"
prerequisiteResources: ["mb-ap-stats-2.5-study-guide"]
learningObjectives:
  - "Find joint probabilities from a sample space and from a two-way table"
  - "Decide whether two events are mutually exclusive using P(A ∩ B)"
  - "Justify a claim about mutually exclusive events with a calculation and a conclusion in context"
  - "Explain the difference between events that cannot happen together and events that did not happen together in one data set"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Give probabilities as exact fractions or as decimals rounded to 4 decimal places."
related: ["mb-ap-stats-2.5-study-guide", "mb-ap-stats-2.5-revision-notes", "mb-ap-stats-2.5-checklist"]
next: "mb-ap-stats-2.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every justification needs P(A ∩ B), a comparison with 0 and a conclusion in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: dice, spinners and draws are fair, so all outcomes in a sample space are equally likely; "chosen at random" means every individual in the table has the same chance of being chosen; give probabilities as exact fractions or as decimals rounded to 4 decimal places.

## Question 1 (multiple choice · foundation)

A fair spinner has 8 equal sectors numbered 1 to 8. It is spun once. Which pair of events is mutually exclusive?

- (A) "an even number" and "a number greater than 5"
- (B) "an odd number" and "a multiple of 3"
- (C) "a number less than 3" and "a multiple of 4"
- (D) "a prime number" and "an even number"

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** "Less than 3" is {1, 2} and "multiple of 4" is {4, 8}. No outcome is in both, so P(both) = 0/8 = 0 and the events are mutually exclusive.

- (A) Even = {2, 4, 6, 8} and greater than 5 = {6, 7, 8} share 6 and 8, so P(both) = 2/8 = 0.25 > 0.
- (B) Odd = {1, 3, 5, 7} and multiple of 3 = {3, 6} share 3, so P(both) = 1/8 > 0.
- (D) Prime = {2, 3, 5, 7} and even = {2, 4, 6, 8} share 2. It is easy to forget that 2 is both prime and even. P(both) = 1/8 > 0.
</details>

## Question 2 (multiple choice · core)

A fictional transport survey asked 160 commuters how they travelled to work one morning and whether they arrived late.

| Travel mode | Late | On time | Total |
|---|---|---|---|
| Bus | 18 | 42 | 60 |
| Bike | 6 | 34 | 40 |
| Car | 12 | 48 | 60 |
| Total | 36 | 124 | 160 |

One commuter is chosen at random from the 160. What is the probability that the commuter travelled by bike **and** arrived late?

- (A) 0.0375
- (B) 0.0563
- (C) 0.1500
- (D) 0.1667

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** This is a joint probability. The cell (Bike, Late) holds 6 of the 160 commuters, so P(bike ∩ late) = 6/160 = 0.0375.

- (B) multiplies the two marginal probabilities: (40/160) × (36/160) ≈ 0.0563. The joint probability comes from the cell, not from multiplying totals. (Multiplying works only in a special case you will meet in Topic 2.7.)
- (C) is 6/40: it divides by the bike total, which answers "of the cyclists, what proportion were late?", a conditional probability.
- (D) is 6/36: it divides by the late total, another conditional probability.
</details>

## Question 3 (multiple choice · core)

Which statement **must** be true?

- (A) Any event and its complement are mutually exclusive.
- (B) If two events are mutually exclusive, one must be the complement of the other.
- (C) If P(A) = 0.3 and P(B) = 0.3, then A and B are mutually exclusive.
- (D) If A and B are mutually exclusive, then P(A ∩ B) = 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The complement E′ contains exactly the outcomes **not** in E, so no outcome can be in both. P(E ∩ E′) = 0 every time.

- (B) is the reverse, and it is false. On one roll of a die, {1} and {6} are mutually exclusive, but 2, 3, 4 and 5 are in neither, so neither is the complement of the other.
- (C) The individual probabilities say nothing about the overlap. For example, on a 10-sided die, {1, 2, 3} and {3, 4, 5} each have probability 0.3 but share 3.
- (D) has the value the wrong way round. Mutually exclusive events cannot happen together, so P(A ∩ B) = 0, not 1.
</details>

## Question 4 (calculation · core)

A bag holds 30 cards numbered 1 to 30. One card is drawn at random. Define the events:

- A = "the number is a multiple of 6"
- B = "the number is a multiple of 7"
- C = "the last digit is 8"

(a) List the outcomes in A, B and C.
(b) Find P(A ∩ B), P(A ∩ C) and P(B ∩ C).
(c) Which pair of events is mutually exclusive? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A = {6, 12, 18, 24, 30}; B = {7, 14, 21, 28}; C = {8, 18, 28}.

**(b)**

- A ∩ B: no number from 1 to 30 is a multiple of both 6 and 7 (the smallest is 42). P(A ∩ B) = 0/30 = **0**.
- A ∩ C = {18}. P(A ∩ C) = **1/30 ≈ 0.0333**.
- B ∩ C = {28}. P(B ∩ C) = **1/30 ≈ 0.0333**.

**(c)** **A and B** are mutually exclusive, because P(A ∩ B) = 0: no card can be both a multiple of 6 and a multiple of 7. A and C are not mutually exclusive (card 18 is in both), and B and C are not mutually exclusive (card 28 is in both).

| Point | What earns it |
|---|---|
| 1 | All three events listed correctly |
| 1 | All three joint probabilities correct, with the shared outcomes identified |
| 1 | Names A and B **and** justifies with P(A ∩ B) = 0 (or "no outcome in both"), and states why the other pairs fail |

A common slip is to include 36 or 42 in A or B; the cards stop at 30.
</details>

## Question 5 (constructed response · core)

A fictional museum recorded the ticket type and tour choice of 150 visitors on one day.

| Ticket type | Guided tour | Audio guide | No tour | Total |
|---|---|---|---|---|
| Member | 14 | 0 | 22 | 36 |
| Standard | 20 | 31 | 29 | 80 |
| Child (free) | 6 | 9 | 19 | 34 |
| Total | 40 | 40 | 70 | 150 |

One visitor is chosen at random from these 150.

(a) Find P(member ∩ guided tour). Are "member" and "guided tour" mutually exclusive? Justify.
(b) Are "member" and "audio guide" mutually exclusive? Justify.
(c) The museum manager concludes: "Members never use the audio guide." Do these data prove this? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P(member ∩ guided tour) = 14/150 ≈ **0.0933**. Since 0.0933 > 0, the events are **not** mutually exclusive: 14 visitors were members who took a guided tour.

**(b)** P(member ∩ audio guide) = 0/150 = **0**. For a visitor chosen at random from these 150, the events are **mutually exclusive**: no visitor in the data was a member who used the audio guide.

**(c)** **No.** The data show only that none of these 150 visitors, on this one day, was a member using the audio guide. Unlike a ticket rule, nothing in the question says members are *not allowed* to use the audio guide. With 36 members and 40 audio-guide users in the data, it is possible that the combination happens on other days and simply did not appear in this sample. The zero shows the events were mutually exclusive in this data set, not that they can never happen together.

| Point | What earns it |
|---|---|
| 1 | 14/150 ≈ 0.0933 and "not mutually exclusive" because it is greater than 0 |
| 1 | 0/150 = 0 and "mutually exclusive" for a visitor chosen from these 150 |
| 1 | Explains that the data cover only these visitors on one day, so the combination may occur elsewhere |
| 1 | Links the conclusion to context: no rule makes the combination impossible |

Do not award the last two points for "no, the sample is too small" with no link to why a zero does not prove impossibility.
</details>

## Question 6 (constructed response · stretch)

A fair coin is flipped twice. Let A = "the first flip is heads" and B = "the second flip is heads".

A student writes: "A and B are mutually exclusive, because the first flip cannot affect the second flip."

(a) List the sample space and find P(A ∩ B).
(b) Explain why the student is wrong.
(c) Give an event C, using these two flips, that **is** mutually exclusive with A. Show that P(A ∩ C) = 0.
(d) Are "exactly one head" and "at least one head" mutually exclusive? Justify.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Sample space: {HH, HT, TH, TT}, four equally likely outcomes. A = {HH, HT} and B = {HH, TH}, so A ∩ B = {HH} and P(A ∩ B) = **1/4 = 0.25**.

**(b)** Mutually exclusive means the events **cannot happen together**. A and B both happen when the result is HH, which has probability 0.25, not 0. So A and B are not mutually exclusive. The student is describing a different idea, whether one event changes the chance of the other. That idea is called independence (Topic 2.7).

**(c)** For example, C = "both flips are tails" = {TT}. A = {HH, HT} has no outcome in common with C, so P(A ∩ C) = 0/4 = 0. (Other correct answers: "the first flip is tails" = {TH, TT}, or "no heads".)

**(d)** Exactly one head = {HT, TH}; at least one head = {HH, HT, TH}. They share HT and TH, so P(both) = 2/4 = 0.5 > 0. They are **not** mutually exclusive.

| Point | What earns it |
|---|---|
| 1 | Correct sample space and P(A ∩ B) = 0.25 |
| 1 | Explains that mutually exclusive means "cannot happen together", and HH shows they can |
| 1 | A valid event C with P(A ∩ C) = 0 shown |
| 1 | Shared outcomes in (d) identified, P = 0.5 and correct conclusion |
</details>

## Question 7 (interpretation · stretch)

For a randomly chosen order from a fictional online shop:

- P(express delivery) = 0.25
- P(order is returned) = 0.08
- P(express delivery ∩ order is returned) = 0.02

(a) Interpret the value 0.02 in context.
(b) Are "express delivery" and "order is returned" mutually exclusive? Justify.
(c) The shop expects 5,000 orders next month. About how many orders would you expect to be express orders that are returned?
(d) The shop changes its policy so that express orders can no longer be returned. Under the new policy, what is P(express delivery ∩ order is returned)? What does this say about the two events?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** About 2% of the shop's orders are sent by express delivery **and** are returned. For one order chosen at random, the probability that both happen is 0.02.

**(b)** **No.** P(express ∩ returned) = 0.02, which is greater than 0, so an order can be both express and returned. The events are not mutually exclusive.

**(c)** 0.02 × 5,000 = **100 orders** (about).

**(d)** If express orders cannot be returned, no order can be in both events, so P(express ∩ returned) = **0**. Under the new policy the two events are **mutually exclusive**.

| Point | What earns it |
|---|---|
| 1 | Interprets 0.02 as the probability of **both** events for one order, in context |
| 1 | "Not mutually exclusive" justified by 0.02 > 0 |
| 1 | 100 orders, with 0.02 × 5,000 shown |
| 1 | P = 0 under the new policy and the conclusion "mutually exclusive" |

Do not award (a) for an interpretation that describes only one event, such as "2% of express orders are returned"; that would be a conditional probability, which is a different number.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read Worked example 1 in the [study guide](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/). List each event's outcomes before looking for overlaps.
- **Q2 wrong:** revisit "Seeing it in a two-way table". A joint probability divides by the grand total.
- **Q3 wrong:** revisit "Mutually exclusive (disjoint) events", especially the paragraph on complements.
- **Q5 wrong:** work through Worked example 2 and the misconception about zero cells.
- **Q6 or Q7 wrong:** revisit "Joint probability and the symbol ∩" and "How to justify a claim".

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-checklist/).
