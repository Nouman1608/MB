---
resourceId: "mb-ap-stats-2.7-practice"
title: "Independent Events and Unions of Events: Practice Questions (Statistics 2.7)"
description: "Seven original Marlbridge practice questions on independence checks, the multiplication rule, the general addition rule and at-least-one problems, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.7"]
resourceType: "practice-questions"
prerequisites:
  - "Conditional probability from a two-way table"
prerequisiteResources: ["mb-ap-stats-2.7-study-guide"]
learningObjectives:
  - "Check whether two events are independent from a table or from given probabilities"
  - "Use the multiplication rule for independent events and the general addition rule"
  - "Find the probability of at least one success in several independent trials"
  - "Judge whether an independence assumption is reasonable in context"
skills: ["3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Round final probabilities to 4 decimal places unless told otherwise."
related: ["mb-ap-stats-2.7-study-guide", "mb-ap-stats-2.7-revision-notes", "mb-ap-stats-2.7-checklist"]
next: "mb-ap-stats-2.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Show the formula, the substituted values and the answer for every probability."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data and settings are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: "or" includes "both"; round final probabilities to 4 decimal places unless stated. Show the rule you use, the values you substitute and the answer.

## Question 1 (multiple choice · foundation)

Events A and B are independent, with P(A) = 0.6 and P(B) = 0.25. What is P(A ∪ B)?

- (A) 0.15
- (B) 0.55
- (C) 0.70
- (D) 0.85

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Because A and B are independent, P(A ∩ B) = 0.6 × 0.25 = 0.15. Then P(A ∪ B) = 0.6 + 0.25 − 0.15 = 0.70.

- (A) is P(A ∩ B), the probability of **both**, not of either.
- (B) subtracts the overlap twice: 0.85 − 2(0.15) = 0.55. The overlap is counted twice in P(A) + P(B), so it is subtracted once.
- (D) adds P(A) + P(B) without subtracting the overlap. That is correct only for mutually exclusive events, and these events overlap.
</details>

## Question 2 (multiple choice · core)

In which case are events A and B independent?

- (A) P(A) = 0.6, P(B) = 0.5, P(A | B) = 0.5
- (B) P(A) = 0.4, P(B) = 0.5, P(A ∪ B) = 0.9
- (C) P(A) = 0.4, P(B) = 0.5, P(A ∪ B) = 0.7
- (D) P(A) = 0.2, P(B) = 0.3, P(A ∪ B) = 0.45

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Rearranging the addition rule, P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.4 + 0.5 − 0.7 = 0.2. Also P(A) · P(B) = 0.4 × 0.5 = 0.2. They are equal, so A and B are independent.

- (A) P(A | B) = 0.5 but P(A) = 0.6. Knowing B changes the probability of A, so they are not independent. (It compares with the right quantity, P(A), and the values differ.)
- (B) P(A ∩ B) = 0.4 + 0.5 − 0.9 = 0, so the events are mutually exclusive. P(A) · P(B) = 0.2 ≠ 0, so they are dependent.
- (D) P(A ∩ B) = 0.2 + 0.3 − 0.45 = 0.05, but P(A) · P(B) = 0.06. Since 0.05 ≠ 0.06, not independent.
</details>

## Question 3 (multiple choice · core)

A fictional factory makes LED bulbs. Each bulb is defective with probability 0.05, independently of other bulbs. A box holds 4 bulbs. What is the probability that the box contains at least one defective bulb?

- (A) 0.00000625
- (B) 0.1855
- (C) 0.2000
- (D) 0.8145

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P(no defective bulbs) = 0.95⁴ ≈ 0.8145, using independence. So P(at least one defective) = 1 − 0.8145 = 0.1855.

- (A) is 0.05⁴ = 0.00000625, the probability that **all four** are defective.
- (C) is 4 × 0.05. This counts boxes with two or more defective bulbs more than once.
- (D) is the probability of **no** defective bulbs, the complement of the event asked for.
</details>

## Question 4 (constructed response · core)

A fictional sixth-form college, Brackenfield, surveyed all 250 of its first-year students. Event I: the student plays a musical instrument. Event L: the student studies a second language.

| | Studies a language (L) | No language | Total |
|---|---|---|---|
| Plays an instrument (I) | 60 | 40 | 100 |
| No instrument | 90 | 60 | 150 |
| Total | 150 | 100 | 250 |

One student is chosen at random.

(a) Find P(I ∩ L) and P(I ∪ L).
(b) Are events I and L independent? Justify your answer with a probability calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P(I) = 100 ÷ 250 = 0.4, P(L) = 150 ÷ 250 = 0.6, P(I ∩ L) = 60 ÷ 250 = **0.24**.

P(I ∪ L) = 0.4 + 0.6 − 0.24 = **0.76**. Check: 60 students do neither, and 1 − 60 ÷ 250 = 0.76.

**(b)** P(L | I) = 60 ÷ 100 = 0.6 and P(L) = 0.6. Since P(L | I) = P(L), knowing that a student plays an instrument does not change the probability that the student studies a language. I and L **are independent**.

(Equivalently: P(I) · P(L) = 0.4 × 0.6 = 0.24 = P(I ∩ L).)

| Point | What earns it |
|---|---|
| 1 | P(I ∩ L) = 0.24 |
| 1 | P(I ∪ L) = 0.76 with the general addition rule (or the complement of "neither") shown |
| 1 | A correct independence check with both values shown (P(L \| I) and P(L), or P(I ∩ L) and P(I) · P(L)) |
| 1 | Correct conclusion "independent", linked to the comparison |

Comparing P(L | I) = 0.6 with P(L | not I) = 90 ÷ 150 = 0.6 is also a valid check. Comparing P(L | I) with P(I) does not earn point 3.
</details>

## Question 5 (constructed response · core)

Sana travels to work by train, then by a connecting bus. On a fictional route, the train is on time with probability 0.9 and the bus is on time with probability 0.8.

(a) Assuming the two are independent, find the probability that both are on time.
(b) Assuming independence, find the probability that at least one of them is on time.
(c) Explain why the independence assumption might not be reasonable here, and what that would mean for your answer to (a).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let T = train on time, B = bus on time. P(T ∩ B) = P(T) · P(B) = 0.9 × 0.8 = **0.72**.

**(b)** P(T ∪ B) = 0.9 + 0.8 − 0.72 = **0.98**. Check: P(neither) = 0.1 × 0.2 = 0.02, and 1 − 0.02 = 0.98.

**(c)** Both journeys share conditions. On a day of heavy snow or a road and rail strike, both are more likely to be late. Then P(B | T) would not equal P(B). For example, if the bus tends to be on time on the same days the train is, P(B | T) would be more than 0.8, and the true P(T ∩ B) = 0.9 · P(B | T) would be **greater** than 0.72. The answer to (a) would then be wrong; we would need P(B | T) from data.

| Point | What earns it |
|---|---|
| 1 | (a) 0.72 with the multiplication rule shown |
| 1 | (b) 0.98 using the addition rule or 1 − P(neither) |
| 1 | (c) A specific, contextual reason why train and bus lateness could be linked |
| 1 | (c) States that without independence P(T ∩ B) = P(T) · P(B \| T), so 0.72 may be wrong |

A generic answer such as "they might not be independent" without a reason in context does not earn point 3.
</details>

## Question 6 (constructed response · stretch)

A fictional online bookshop finds that, for a randomly chosen order, the probability that the customer uses a discount code (event D) is 0.35, the probability that the order has more than one item (event M) is 0.40, and P(D ∪ M) = 0.61.

(a) Find P(D ∩ M).
(b) Are D and M independent? Justify your answer.
(c) Are D and M mutually exclusive? Explain.
(d) Find the probability that an order neither uses a discount code nor has more than one item.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** From the general addition rule, P(D ∩ M) = P(D) + P(M) − P(D ∪ M) = 0.35 + 0.40 − 0.61 = **0.14**.

**(b)** P(D) · P(M) = 0.35 × 0.40 = 0.14, which equals P(D ∩ M). So D and M **are independent**. In words: P(D | M) = 0.14 ÷ 0.40 = 0.35 = P(D). Customers with multi-item orders use codes at the same rate as all customers.

**(c)** **No.** P(D ∩ M) = 0.14, not 0. Some orders (14%) have both a discount code and more than one item.

**(d)** "Neither" is the complement of D ∪ M: 1 − 0.61 = **0.39**.

| Point | What earns it |
|---|---|
| 1 | (a) Rearranges the addition rule correctly to get 0.14 |
| 1 | (b) Compares P(D ∩ M) with P(D) · P(M) (or P(D \| M) with P(D)) and concludes independent |
| 1 | (c) "Not mutually exclusive" because P(D ∩ M) = 0.14 ≠ 0 |
| 1 | (d) 0.39 as the complement of the union |

In (b), a conclusion with no comparison shown does not earn the point.
</details>

## Question 7 (explanation · stretch)

A fictional fairground spinner lands on red with probability 0.25, blue with probability 0.30 and yellow with probability 0.45. Spins are independent.

(a) Find the probability that the spinner lands on red on each of 4 spins in a row.
(b) After 4 reds in a row, Tom says: "Red can't keep coming up. The next spin is less likely to be red." Explain why Tom is wrong, and give the probability that the fifth spin is red.
(c) Mia says: "On a single spin, the events 'red' and 'blue' are independent, because one colour has nothing to do with the other." Show that Mia is wrong, and find P(red or blue) on one spin.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** By the multiplication rule for independent spins, P(4 reds) = 0.25⁴ ≈ **0.0039**.

**(b)** The spins are independent, so the earlier results do not change the probability for the next spin. The spinner has no memory. P(red on fifth spin | 4 reds) = P(red) = **0.25**. A run of 4 reds is unusual (probability about 0.0039), but it does not make red less likely next time.

**(c)** On one spin the spinner cannot land on both colours, so P(red ∩ blue) = 0. But P(red) · P(blue) = 0.25 × 0.30 = 0.075. Since 0 ≠ 0.075, the events are **not independent**; they are mutually exclusive. Knowing the spin is blue tells you for certain it is not red.

P(red ∪ blue) = 0.25 + 0.30 − 0 = **0.55**.

| Point | What earns it |
|---|---|
| 1 | (a) 0.25⁴ ≈ 0.0039 |
| 1 | (b) Explains that independent spins mean past results do not change the next, and gives 0.25 |
| 1 | (c) Shows P(red ∩ blue) = 0 ≠ 0.075 and concludes not independent (mutually exclusive) |
| 1 | (c) P(red or blue) = 0.55 with the addition rule |
</details>

## How did you do?

- **Q1 or Q6(a) wrong:** re-read "The union of two events" in the [study guide](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/). Subtract the overlap once.
- **Q2, Q4(b) or Q6(b) wrong:** revisit "Three ways to check for independence" and Worked example 1. Show both numbers.
- **Q3 wrong:** revisit Worked example 2. "At least one" = 1 − P(none).
- **Q5(c) incomplete:** an assumption needs a reason in context and a consequence.
- **Q6(c) or Q7(c) wrong:** revisit Worked example 3 on independent versus mutually exclusive.
- **Q7(b) wrong:** read the gambler's-fallacy point in "Common misconceptions".

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-7-independent-events-unions-events-checklist/).
