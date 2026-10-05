---
resourceId: "mb-ap-stats-2.10-practice"
title: "The Binomial Distribution: Practice Questions (Statistics 2.10)"
description: "Seven original Marlbridge practice questions on binomial conditions, probabilities, mean, standard deviation and simulation estimates, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.10"]
resourceType: "practice-questions"
prerequisites:
  - "Mean and standard deviation of a discrete random variable"
prerequisiteResources: ["mb-ap-stats-2.10-study-guide"]
learningObjectives:
  - "Justify whether a random variable is binomial"
  - "Calculate exact, cumulative and complement binomial probabilities"
  - "Calculate and interpret the mean and standard deviation of a binomial variable"
  - "Estimate a binomial probability from simulation results and use probabilities to judge a claim"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use binomial pdf and cdf to check your work, but show the distribution, n, p and the values. Round probabilities to 4 decimal places and other answers to 2 decimal places."
related: ["mb-ap-stats-2.10-study-guide", "mb-ap-stats-2.10-revision-notes", "mb-ap-stats-2.10-checklist"]
next: "mb-ap-stats-2.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every probability, mean and standard deviation must be interpreted in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: P(X = x) = ₙCₓ · pˣ · (1 − p)ⁿ⁻ˣ, μ = np and σ = √[ np(1 − p) ]; round probabilities to 4 decimal places and other answers to 2 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Which of these random variables has a binomial distribution?

- (A) A bag holds 6 red and 4 blue counters. Four counters are drawn without replacement. X = the number of red counters drawn.
- (B) A fair coin is tossed until it lands heads. X = the number of tosses.
- (C) Each customer at a fictional market stall pays by card with probability 0.6, independently of other customers. X = the number of the next 30 customers who pay by card.
- (D) Ten apples are picked from a tree. X = the total mass of the apples, in grams.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each customer either pays by card or does not (two outcomes); n = 30 is fixed; customers are independent; p = 0.6 for every customer. X counts successes, so X ~ B(30, 0.6).

- (A) Drawing without replacement from only 10 counters changes the probability of red after each draw, so the trials are not independent and p is not constant.
- (B) The number of tosses is not fixed in advance; X counts trials until the first success.
- (D) X is a measurement, not a count of successes, and an apple's mass has many possible values, not two outcomes.
</details>

## Question 2 (multiple choice · core)

In a fictional large city, each adult owns an electric bicycle with probability 0.15. A researcher selects 40 adults at random. Let X = the number who own an electric bicycle. What are the mean and standard deviation of X?

- (A) Mean 6, standard deviation 5.1
- (B) Mean 6, standard deviation 2.26
- (C) Mean 6, standard deviation 2.45
- (D) Mean 34, standard deviation 2.26

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** μ = np = 40 × 0.15 = 6 adults. σ = √[40 × 0.15 × 0.85] = √5.1 = 2.26 adults.

- (A) gives the variance, np(1 − p) = 5.1, instead of its square root.
- (C) is √(np) = √6, which leaves out the factor (1 − p).
- (D) uses n(1 − p) = 34, the mean number who do **not** own one.
</details>

## Question 3 (multiple choice · core)

Each visitor to a fictional museum buys a guidebook with probability 0.3, independently. Five visitors are chosen at random. What is the probability that exactly 2 of them buy a guidebook?

- (A) 0.0309
- (B) 0.1323
- (C) 0.3087
- (D) 0.8369

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** X ~ B(5, 0.3). P(X = 2) = ₅C₂ (0.3)² (0.7)³ = 10 × 0.09 × 0.343 = 0.3087.

- (A) is (0.3)²(0.7)³, the probability of one particular order only. It leaves out ₅C₂ = 10.
- (B) swaps the powers: 10 × (0.7)² × (0.3)³ is the probability of exactly 3 buyers.
- (D) is P(X ≤ 2), a cumulative probability, not "exactly 2".
</details>

## Question 4 (calculation · core)

A fictional phone app crashes in a session with probability 0.06, independently from session to session. A tester runs 15 sessions. Let X = the number of sessions in which the app crashes.

(a) Find the probability that the app crashes in at least one session.
(b) Interpret your answer in context.

<details>
<summary>Worked solution</summary>

**(a)** X ~ B(15, 0.06). Use the complement:

P(X ≥ 1) = 1 − P(X = 0) = 1 − (0.94)¹⁵ = 1 − 0.3953 = **0.6047**.

**(b)** If the tester repeated a set of 15 sessions many times, the app would crash at least once in about 60% of the sets.

Suggested mark points (3): 1 for identifying B(15, 0.06) and the complement P(X ≥ 1) = 1 − P(X = 0); 1 for the correct value 0.6047; 1 for an interpretation in context (sets of 15 sessions, at least one crash). Answering 15 × 0.06 = 0.9 does not earn the first two points: it is the expected number of crashes, not a probability.
</details>

## Question 5 (constructed response · core)

A fictional sports-shoe website finds that 30% of visitors who add an item to their basket go on to buy. Assume this is true. Take 20 such visitors, chosen at random from a very large number. Let X = the number of these visitors who buy.

(a) Justify that X has a binomial distribution.
(b) Calculate the mean and standard deviation of X, and interpret the mean in context.
(c) Find the probability that at most 3 of the 20 visitors buy.
(d) Find the probability that at least 10 buy. Would 10 or more buyers be unusual? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each visitor either buys (success) or does not (failure). n = 20 visitors is fixed. Visitors are chosen at random from a very large number, so one visitor's choice does not affect another's (independence). Each has the same probability of buying, p = 0.3. So X ~ B(20, 0.3).

**(b)** μ = 20 × 0.3 = **6 visitors**. σ = √[20 × 0.3 × 0.7] = √4.2 = **2.05 visitors**. If the website looked at many groups of 20 such visitors, the number who buy would average about 6 per group.

**(c)** P(X ≤ 3) = P(0) + P(1) + P(2) + P(3) = **0.1071** (binomial cdf with n = 20, p = 0.3, x = 3).

**(d)** P(X ≥ 10) = 1 − P(X ≤ 9) = **0.0480**. Yes, this would be unusual: if 30% buy, only about 5% of groups of 20 would have 10 or more buyers.

| Point | What earns it |
|---|---|
| 1 | All four conditions stated in context |
| 1 | μ = 6 and σ = 2.05, with an interpretation of μ as a long-run average per group of 20 |
| 1 | P(X ≤ 3) = 0.1071 with the distribution, parameters and boundary shown |
| 1 | P(X ≥ 10) = 0.0480 using 1 − P(X ≤ 9), **and** a judgement linked to the small probability |

Using 1 − P(X ≤ 10) in (d) gives the wrong boundary and does not earn point 4.
</details>

## Question 6 (constructed response · stretch)

A fictional mobile network claims that 90% of its customers are satisfied with their service. Two regional managers each survey 25 customers chosen at random from their region's very large customer base. Assume the claim is true for both regions, and let X = the number of satisfied customers in a sample of 25.

(a) Find the mean and standard deviation of X.
(b) In the North region, 21 of the 25 customers are satisfied. In the South region, only 18 are satisfied. For each region, find the probability of a result this low or lower if the claim is true.
(c) Which region's result gives convincing evidence that fewer than 90% of its customers are satisfied? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** X ~ B(25, 0.9). μ = 25 × 0.9 = **22.5 customers**; σ = √[25 × 0.9 × 0.1] = √2.25 = **1.5 customers**.

**(b)** North: P(X ≤ 21) = **0.2364**. South: P(X ≤ 18) = **0.0095**.

**(c)** **South.** If 90% of customers were satisfied, a sample with 18 or fewer satisfied customers would happen in only about 1% of samples of 25. That is very unlikely, so the South result gives convincing evidence that fewer than 90% of South customers are satisfied. The North result (21 or fewer) would happen in about 24% of samples by chance alone, so it is not convincing evidence against the claim.

| Point | What earns it |
|---|---|
| 1 | μ = 22.5 and σ = 1.5 with B(25, 0.9) identified |
| 1 | Both cumulative probabilities correct, with the "or lower" direction (X ≤ 21, X ≤ 18) |
| 1 | Chooses South **and** links the small probability to the claim being unlikely |
| 1 | Explains why North's result is not convincing, in context |

Saying "the South result proves the claim is false" loses point 3: a small probability is evidence, not proof. Using P(X = 18) = 0.0072 instead of P(X ≤ 18) does not earn point 2.
</details>

## Question 7 (explanation · stretch)

A fictional vending machine gives a free bonus snack with probability 0.2 on each purchase, independently. Let X = the number of bonus snacks in 5 purchases. A student simulates this with random digits: each purchase uses one digit, and the digits 0 and 1 mean "bonus". The student runs 40 simulated sets of 5 purchases and records:

| Bonus snacks in 5 purchases | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Number of simulated sets | 13 | 15 | 9 | 2 | 1 | 0 |

(a) Explain why using the digits 0 and 1 for "bonus" is correct, and give the value of X for the digits 7 1 4 0 9.
(b) Use the simulation to estimate P(X ≥ 2).
(c) Calculate the exact value of P(X ≥ 2).
(d) Explain why the two answers differ, and how the student could get a better estimate.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** There are 10 equally likely digits, and 2 of them (0 and 1) mean "bonus", so P(bonus) = 2/10 = 0.2, as required. For 7 1 4 0 9, the digits 1 and 0 are bonuses, so X = 2.

**(b)** Sets with X ≥ 2: 9 + 2 + 1 + 0 = 12. Estimate: 12 ÷ 40 = **0.30**.

**(c)** X ~ B(5, 0.2). P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) = 1 − (0.8)⁵ − 5(0.2)(0.8)⁴ = 1 − 0.32768 − 0.4096 = **0.2627**.

**(d)** A simulation gives a relative frequency that varies by chance from run to run; with only 40 sets, a difference of about 0.04 is not surprising. Running many more sets (for example, several thousand) would usually give an estimate closer to 0.2627.

| Point | What earns it |
|---|---|
| 1 | Explains 2 out of 10 digits gives 0.2, and X = 2 for the digits shown |
| 1 | Estimate 12/40 = 0.30 from the table |
| 1 | Exact value 0.2627 with the complement or the sum shown |
| 1 | Explains chance variation in a simulation **and** that more repetitions give a better estimate |
</details>

## How did you do?

- **Q1 wrong:** re-read "When is a random variable binomial?" and Worked example 2 in the [study guide](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/).
- **Q2 or Q6(a) wrong:** revisit "Mean and standard deviation"; remember the square root.
- **Q3 wrong:** revisit "The binomial probability function"; include ₙCₓ and check the powers.
- **Q4, Q5(c) or Q5(d) wrong:** write the inequality first, then use a sum or a complement.
- **Q6(c) incomplete:** link a small probability to evidence against a claim, in context.
- **Q7 wrong:** revisit Worked example 3 and the simulation section.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-10-binomial-distribution-checklist/).
