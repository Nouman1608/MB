---
resourceId: "mb-ap-stats-2.4-practice"
title: "Introduction to Probability: Practice Questions (Statistics 2.4)"
description: "Seven original Marlbridge practice questions on sample spaces, equally likely outcomes, the basic probability rules and complements, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.4"]
resourceType: "practice-questions"
prerequisites:
  - "Working with fractions and decimals"
prerequisiteResources: ["mb-ap-stats-2.4-study-guide"]
learningObjectives:
  - "List a sample space and count equally likely outcomes"
  - "Use 0 ≤ P(E) ≤ 1 and P(S) = 1 to check and complete probabilities"
  - "Apply the complement rule, including to “at least one” events"
  - "Explain why counting fails when outcomes are not equally likely"
skills: ["3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Give answers as exact fractions or as decimals to 4 decimal places unless told otherwise."
related: ["mb-ap-stats-2.4-study-guide", "mb-ap-stats-2.4-revision-notes", "mb-ap-stats-2.4-checklist"]
next: "mb-ap-stats-2.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Check every probability is between 0 and 1."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: dice and spinners are fair, spinner sectors are equal unless stated, and "chosen at random" means every individual is equally likely to be chosen. Give answers as exact fractions or as decimals to 4 decimal places unless stated.

## Question 1 (multiple choice · foundation)

Which of these values **cannot** be the probability of an event?

- (A) 0
- (B) 0.999
- (C) 7/6
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 7/6 ≈ 1.167 is greater than 1. Every probability must be from 0 to 1, inclusive.

- (A) is allowed: probability 0 means the event cannot happen.
- (B) is allowed: 0.999 is between 0 and 1, an event that is very likely but not certain.
- (D) is allowed: probability 1 means the event is certain, like the whole sample space.
</details>

## Question 2 (multiple choice · core)

A fictional football club models the number of goals it scores in a home match:

| Goals | 0 | 1 | 2 | 3 or more |
|---|---|---|---|---|
| Probability | 0.18 | 0.36 | 0.30 | 0.16 |

Let E be the event "the club scores at least 1 goal". What is P(Eᶜ)?

- (A) 0.18
- (B) 0.82
- (C) 0.54
- (D) 0.36

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The complement of "at least 1 goal" is "0 goals", so P(Eᶜ) = 0.18. Check with the rule: P(E) = 0.36 + 0.30 + 0.16 = 0.82, and 1 − 0.82 = 0.18.

- (B) is P(E) itself, not its complement.
- (C) adds P(0) and P(1), treating the complement as "at most 1 goal". That is the complement of "at least 2 goals".
- (D) is P(exactly 1 goal), which is part of E.
</details>

## Question 3 (multiple choice · core)

A fair four-sided die (faces 1 to 4) is rolled twice and the two results are added. What is the probability that the total is 5?

- (A) 1/7
- (B) 1/4
- (C) 1/8
- (D) 1/16

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The sample space has 4 × 4 = 16 equally likely ordered pairs. A total of 5 comes from (1, 4), (2, 3), (3, 2) and (4, 1): 4 pairs. P(total = 5) = 4/16 = 1/4.

- (A) counts the 7 possible totals (2 to 8) as if they were equally likely. They are not.
- (C) is 2/16. It counts (1, 4) and (2, 3) but forgets that (4, 1) and (3, 2) are different outcomes (first roll, then second roll).
- (D) counts only one pair.
</details>

## Question 4 (calculation · foundation)

A fictional cinema asks customers for their favourite snack. A customer is chosen at random. The probability model is:

| Snack | Popcorn | Nachos | Ice cream | Nothing |
|---|---|---|---|---|
| Probability | 0.42 | 0.19 | ? | 0.24 |

(a) Find P(ice cream).
(b) Find the probability that the chosen customer's favourite is **not** popcorn.
(c) A manager writes 0.17 for ice cream. Explain why this cannot be right.

<details>
<summary>Worked solution</summary>

**(a)** The four outcomes make up the sample space, so their probabilities add to 1. 0.42 + 0.19 + 0.24 = 0.85, so P(ice cream) = 1 − 0.85 = **0.15**.

**(b)** P(not popcorn) = 1 − 0.42 = **0.58**.

**(c)** With 0.17, the four probabilities would add to 0.85 + 0.17 = 1.02. The probabilities of all outcomes in the sample space must add to exactly 1.

Suggested mark points (3): 1 for using "the probabilities add to 1" to get 0.15; 1 for the complement 0.58; 1 for explaining that the total would be 1.02, not 1.
</details>

## Question 5 (constructed response · core)

A fictional town library recorded the main reason for each of 160 visits on one Saturday:

| Reason | Study | Borrow books | Computers | Events | Total |
|---|---|---|---|---|---|
| Visits | 62 | 48 | 30 | 20 | 160 |

One of these visits is chosen at random.

(a) Find the probability that the main reason was study.
(b) Use the complement rule to find the probability that the main reason was **not** borrowing books.
(c) Find the probability that the main reason was computers or events.
(d) A student says, "There are 4 reasons, so the probability that the reason was events is 1/4." Explain the error and give the correct probability.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P(study) = 62/160 = **0.3875**.

**(b)** P(borrow books) = 48/160 = 0.3. P(not borrow books) = 1 − 0.3 = **0.7** (112 of the 160 visits).

**(c)** Each visit has exactly one main reason, so count the visits in either category: 30 + 20 = 50. P = 50/160 = **0.3125**.

**(d)** The formula "outcomes in E ÷ total outcomes" needs equally likely outcomes. The **visits** are equally likely to be chosen, but the four **reasons** are not, because they have different counts. Count visits: P(events) = 20/160 = **0.125**, not 0.25.

| Point | What earns it |
|---|---|
| 1 | (a) 62/160 = 0.3875 |
| 1 | (b) uses 1 − 48/160 to get 0.7 |
| 1 | (c) 50/160 = 0.3125 |
| 1 | (d) says the reasons are not equally likely (the visits are) **and** gives 20/160 = 0.125 |
</details>

## Question 6 (constructed response · core)

In a fictional board game, a player spins two fair spinners. Each spinner has 5 equal sectors numbered 1 to 5.

(a) How many outcomes are in the sample space? Explain why they are equally likely.
(b) The player may move only if at least one spinner shows 5. Use the complement rule to find the probability that the player may move.
(c) Find the probability that the two spinners show **different** numbers.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each outcome is an ordered pair (first spinner, second spinner). There are 5 × 5 = **25** outcomes. Each spinner is fair with equal sectors, so every pair is equally likely.

**(b)** The complement of "at least one 5" is "**no** 5 on either spinner". With no 5, each spinner shows 1 to 4, so there are 4 × 4 = 16 such pairs. P(no 5) = 16/25. P(at least one 5) = 1 − 16/25 = **9/25 = 0.36**.
Check by counting: (1, 5), (2, 5), (3, 5), (4, 5), (5, 1), (5, 2), (5, 3), (5, 4), (5, 5) are 9 pairs.

**(c)** The complement is "the same number": (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), which is 5 pairs. P(same) = 5/25 = 0.2. P(different) = 1 − 0.2 = **0.8**.

| Point | What earns it |
|---|---|
| 1 | 25 outcomes with a reason that the pairs are equally likely |
| 1 | Identifies "no 5" as the complement and counts 16 pairs |
| 1 | P(at least one 5) = 9/25 = 0.36 |
| 1 | P(different) = 0.8, using the complement or a correct count of 20 pairs |

A common error in (b) is 1/5 + 1/5 = 0.4. This counts (5, 5) twice.
</details>

## Question 7 (explanation · stretch)

Read each statement made by a student. Say what is wrong and correct it.

(a) "A penalty kick can be scored, saved or missed, so the probability that a penalty is scored is 1/3."
(b) "The complement of 'at least 2 of the 3 days are sunny' is 'none of the days is sunny'."
(c) "In the fictional town of Brightwater, P(a resident owns a bike) = 0.38 and P(a resident owns a car) = 0.71. So P(a resident owns neither) = 1 − 0.38 − 0.71 = −0.09."

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The rule "outcomes in E ÷ total outcomes" only works if the outcomes are equally likely. There is no reason to think scored, saved and missed are equally likely; the chances depend on the kicker and the goalkeeper. The probability must come from data (a long-run relative frequency) or from a model, not from counting the three results.

**(b)** "At least 2 of 3" means 2 or 3 sunny days. Its complement is everything else: 0 or 1 sunny days, that is, "**at most 1** day is sunny". "None is sunny" leaves out the outcomes with exactly 1 sunny day.

**(c)** A probability can never be negative, so −0.09 shows the method is wrong. Subtracting both probabilities from 1 assumes no resident owns both a bike and a car. Some residents can own both, so those residents have been subtracted twice. (You will learn how to handle this in Topics 2.5 and 2.7.)

| Point | What earns it |
|---|---|
| 1 | (a) Names "not equally likely" as the reason the 1/3 is wrong |
| 1 | (b) Gives the correct complement, "at most 1 sunny day" (0 or 1) |
| 1 | (c) States that a probability cannot be below 0 |
| 1 | (c) Explains that residents who own both have been counted twice (the events can happen together) |
</details>

## How did you do?

- **Q1 or Q7(c) wrong:** re-read "The basic rules" in the [study guide](/advanced-course-resources/statistics/2-4-introduction-probability-study-guide/).
- **Q2, Q6(b) or Q7(b) wrong:** revisit "The complement of an event" and its table, then Worked example 2.
- **Q3 or Q5(d) or Q7(a) wrong:** revisit "Probabilities when outcomes are equally likely" and Worked example 1(d).
- **Q4 wrong:** use P(S) = 1 to find a missing probability.
- **Q6(a) wrong:** list pairs with a grid, as in Figure 1.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-4-introduction-probability-checklist/).
