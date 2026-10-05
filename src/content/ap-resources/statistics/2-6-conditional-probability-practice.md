---
resourceId: "mb-ap-stats-2.6-practice"
title: "Conditional Probability: Practice Questions (Statistics 2.6)"
description: "Seven original Marlbridge practice questions on conditional probability, two-way tables, the general multiplication rule and tree diagrams, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.6"]
resourceType: "practice-questions"
prerequisites:
  - "Joint probability from a two-way table (Topic 2.5)"
prerequisiteResources: ["mb-ap-stats-2.6-study-guide"]
learningObjectives:
  - "Calculate conditional probabilities from two-way tables and from given probabilities"
  - "Use the general multiplication rule, including for draws without replacement"
  - "Use a tree diagram to find a joint probability, a total probability and a reversed conditional probability"
  - "Explain in context why P(A | B) and P(B | A) differ"
skills: ["3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Give probabilities as exact fractions or as decimals rounded to 4 decimal places. Do not round intermediate values."
related: ["mb-ap-stats-2.6-study-guide", "mb-ap-stats-2.6-revision-notes", "mb-ap-stats-2.6-checklist"]
next: "mb-ap-stats-2.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Show the formula, the substituted values and the answer for each calculation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: "chosen at random" means every individual or item has the same chance of being chosen; give probabilities as exact fractions or as decimals rounded to 4 decimal places, and do not round intermediate values. For each calculation, show the formula or method, the values you substitute and the answer.

## Question 1 (multiple choice · foundation)

A fictional café recorded the drink and the time of day for 240 orders.

| Time | Coffee | Tea | Juice | Total |
|---|---|---|---|---|
| Morning | 64 | 20 | 16 | 100 |
| Afternoon | 46 | 54 | 40 | 140 |
| Total | 110 | 74 | 56 | 240 |

One order is chosen at random. What is P(tea | afternoon)?

- (A) 0.2250
- (B) 0.3857
- (C) 0.5833
- (D) 0.7297

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The condition is "afternoon", so restrict to the 140 afternoon orders. Of these, 54 were tea. P(tea | afternoon) = 54/140 ≈ 0.3857.

- (A) is 54/240, the joint probability P(tea ∩ afternoon). It divides by the grand total instead of the condition's total.
- (C) is 140/240 = P(afternoon). It ignores tea altogether.
- (D) is 54/74 = P(afternoon | tea). It swaps the condition: of the tea orders, the proportion in the afternoon.
</details>

## Question 2 (multiple choice · core)

At a fictional gym, for a member chosen at random, P(attends a class) = 0.5, P(uses the pool) = 0.3 and P(attends a class ∩ uses the pool) = 0.12. Given that a member attends a class, what is the probability that the member uses the pool?

- (A) 0.12
- (B) 0.15
- (C) 0.24
- (D) 0.40

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** P(pool | class) = P(pool ∩ class) / P(class) = 0.12 / 0.5 = 0.24.

- (A) is the joint probability. It answers "attends a class **and** uses the pool", not "uses the pool **given** a class".
- (B) is 0.5 × 0.3. Multiplying the two separate probabilities is only valid for independent events (Topic 2.7), and it would give the joint probability, not a conditional one.
- (D) is 0.12 / 0.3 = P(class | pool). It divides by the wrong event.
</details>

## Question 3 (multiple choice · core)

A box holds 10 batteries, and 3 of them are faulty. Two batteries are taken at random, one after the other, without replacement. What is the probability that both are faulty?

- (A) 0.0600
- (B) 0.0667
- (C) 0.0900
- (D) 0.2222

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** By the general multiplication rule, P(both faulty) = P(first faulty) · P(second faulty | first faulty) = (3/10) × (2/9) = 6/90 = 1/15 ≈ 0.0667.

- (A) is (3/10) × (2/10). It reduces the faulty count but forgets that only 9 batteries remain.
- (C) is (3/10)², which treats the draws as if the first battery were put back.
- (D) is 2/9 alone, the conditional probability for the second draw. It leaves out the first stage.
</details>

## Question 4 (constructed response · core)

In a fictional office, 20% of the emails that reach the inbox are spam. A filter flags 92% of spam emails and also flags 3% of genuine (non-spam) emails by mistake. One email is chosen at random.

(a) Draw a tree diagram with all branch probabilities and all four end probabilities.
(b) Find the probability that the email is flagged.
(c) An email has been flagged. Find the probability that it is spam. Interpret your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** First stage: spam 0.20, genuine 0.80. Second stage from spam: flagged 0.92, not flagged 0.08. Second stage from genuine: flagged 0.03, not flagged 0.97. End probabilities (multiply along each path):

- spam ∩ flagged = 0.20 × 0.92 = 0.184
- spam ∩ not flagged = 0.20 × 0.08 = 0.016
- genuine ∩ flagged = 0.80 × 0.03 = 0.024
- genuine ∩ not flagged = 0.80 × 0.97 = 0.776

Check: 0.184 + 0.016 + 0.024 + 0.776 = 1.

**(b)** P(flagged) = 0.184 + 0.024 = **0.208**.

**(c)** P(spam | flagged) = P(spam ∩ flagged) / P(flagged) = 0.184 / 0.208 ≈ **0.8846**.

**Interpretation.** Of the emails this filter flags, about 88.5% are spam. The other 11.5% or so are genuine emails flagged by mistake. In 1,000 emails, about 208 are flagged, and about 24 of those are genuine.

| Point | What earns it |
|---|---|
| 1 | Tree with correct first-stage and conditional second-stage probabilities |
| 1 | Correct end probabilities from multiplying along paths |
| 1 | P(flagged) = 0.208, adding the two flagged paths |
| 1 | P(spam \| flagged) = 0.184 / 0.208 ≈ 0.8846 with an interpretation in context |

A two-way table of a hypothetical 1,000 emails (184, 16, 24, 776) is an equally good method.
</details>

## Question 5 (constructed response · core)

A fictional college surveyed 300 students about whether they sing in the choir and whether they play a musical instrument.

| | Plays an instrument | Does not play | Total |
|---|---|---|---|
| In choir | 36 | 24 | 60 |
| Not in choir | 54 | 186 | 240 |
| Total | 90 | 210 | 300 |

One student is chosen at random.

(a) Find P(plays an instrument | in choir).
(b) Find P(in choir | plays an instrument).
(c) Explain, in context, why the answers to (a) and (b) are different.
(d) Show that the general multiplication rule gives P(in choir ∩ plays an instrument) correctly.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Restrict to the 60 choir members: P(instrument | choir) = 36/60 = **0.6**.

**(b)** Restrict to the 90 instrument players: P(choir | instrument) = 36/90 = **0.4**.

**(c)** Both use the 36 students who are in the choir and play an instrument, but they compare them with different groups. In (a) the group is the 60 choir members, and 60% of them play. In (b) the group is the 90 instrument players, and only 40% of them sing in the choir. The groups have different sizes, so the probabilities differ.

**(d)** P(choir) = 60/300 = 0.2, so P(choir) · P(instrument | choir) = 0.2 × 0.6 = 0.12. From the table, P(choir ∩ instrument) = 36/300 = 0.12. ✓ (Equally, P(instrument) · P(choir | instrument) = 0.3 × 0.4 = 0.12.)

| Point | What earns it |
|---|---|
| 1 | (a) 36/60 = 0.6 |
| 1 | (b) 36/90 = 0.4 |
| 1 | (c) identifies the different denominators (choir members vs instrument players), in context |
| 1 | (d) 0.2 × 0.6 = 0.12 matches 36/300 |
</details>

## Question 6 (constructed response · stretch)

A crate holds 15 phone cases, and 4 of them are defective. An inspector takes 2 cases at random without replacement.

(a) Find the probability that both cases are defective.
(b) Find the probability that at least one case is defective.
(c) Given that at least one case is defective, find the probability that both are defective.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P(both defective) = (4/15) × (3/14) = 12/210 = 2/35 ≈ **0.0571**.

**(b)** Use the complement. P(neither defective) = (11/15) × (10/14) = 110/210 = 11/21 ≈ 0.5238.
P(at least one defective) = 1 − 11/21 = 10/21 ≈ **0.4762**.

**(c)** Let A = "both defective" and B = "at least one defective". If both are defective, then at least one is, so A ∩ B is just A.

P(A | B) = P(A ∩ B) / P(B) = (12/210) / (100/210) = 12/100 = **0.12**.

**Interpretation.** If the inspector knows at least one of the two cases is defective, the chance that both are defective rises from about 0.057 to 0.12.

| Point | What earns it |
|---|---|
| 1 | (a) 4/15 × 3/14 with the second probability conditional on the first |
| 1 | (b) correct P(neither) and use of the complement |
| 1 | (c) recognises A ∩ B = A, so P(A ∩ B) = 12/210 |
| 1 | (c) correct division by P(at least one) to get 0.12 |

Adding P(exactly one) = 44/105 ≈ 0.4190 and P(both) = 2/35 ≈ 0.0571 is an acceptable alternative for (b).
</details>

## Question 7 (interpretation · stretch)

A fictional city running club looked at 1,000 runners in a 10 km race.

| | Finished under 50 min | Did not | Total |
|---|---|---|---|
| Trained with a club | 120 | 180 | 300 |
| Did not train with a club | 30 | 670 | 700 |
| Total | 150 | 850 | 1,000 |

A club poster says: "80% of runners who finished under 50 minutes trained with a club. Join us and you have an 80% chance of finishing under 50 minutes!"

(a) Write the 80% as a conditional probability in symbols, and check it with the table.
(b) Find the probability that a club-trained runner finished under 50 minutes.
(c) Explain the mistake in the poster.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** P(club | under 50) = 120/150 = **0.8**. The condition is "finished under 50 minutes".

**(b)** P(under 50 | club) = 120/300 = **0.4**.

**(c)** The poster swaps the condition. The 80% describes the 150 fast finishers: most of them trained with a club. The claim "you have an 80% chance" is about club runners, which is P(under 50 | club), and that is only 0.4 in these data: 120 of the 300 club runners finished under 50 minutes. Also, these are observational data, so even the higher rate for club runners (0.4 against 30/700 ≈ 0.0429 for others) does not show that joining a club causes faster times; faster runners may be more likely to join clubs.

| Point | What earns it |
|---|---|
| 1 | P(club \| under 50) = 120/150 = 0.8 with the correct condition |
| 1 | P(under 50 \| club) = 120/300 = 0.4 |
| 1 | Explains that the poster confuses P(club \| under 50) with P(under 50 \| club), in context |
| 1 | Notes that observational data do not show the club causes faster times |
</details>

## How did you do?

- **Q1 or Q5 wrong:** revisit "Conditional probability from a two-way table" and Worked example 1 in the [study guide](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/). Name the condition, then divide by its total.
- **Q2 wrong:** revisit "Notation and the formula".
- **Q3 or Q6 wrong:** revisit "The general multiplication rule", especially drawing without replacement.
- **Q4 wrong:** work through Worked example 2 and Figure 1 again.
- **Q7 wrong:** revisit the first misconception, P(A | B) ≠ P(B | A).

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-6-conditional-probability-checklist/).
