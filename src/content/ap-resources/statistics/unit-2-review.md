---
resourceId: "mb-ap-stats-u2-review"
title: "Probability, Random Variables and Probability Distributions: Mixed Unit Review (Statistics Unit 2)"
description: "Big ideas, a one-table method summary and seven original exam-style questions that each combine two or more Unit 2 topics, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 2.1 to 2.12"
  - "You have tried the Unit 2 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-stats-u2-diagnostic"]
learningObjectives:
  - "Connect the ideas of Unit 2: two-way tables, probability rules, random variables, the binomial and normal models and sampling distributions"
  - "Choose the right rule or model for a question and justify the choice"
  - "Answer multi-part questions that move between tables, trees, distributions and simulations"
  - "Interpret probabilities, expected values and simulation results in context, without overclaiming"
skills: ["3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use binomial and normal functions to check calculations, but always name the distribution, its parameters and the boundary. N(μ, σ) uses the standard deviation. Give probabilities to 4 decimal places and other answers to 2 decimal places unless stated."
related: ["mb-ap-stats-u2-diagnostic", "mb-ap-stats-2.1-checklist", "mb-ap-stats-2.2-checklist", "mb-ap-stats-2.3-checklist", "mb-ap-stats-2.4-checklist", "mb-ap-stats-2.5-checklist", "mb-ap-stats-2.6-checklist", "mb-ap-stats-2.7-checklist", "mb-ap-stats-2.8-checklist", "mb-ap-stats-2.9-checklist", "mb-ap-stats-2.10-checklist", "mb-ap-stats-2.11-checklist", "mb-ap-stats-2.12-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A two-way table is a probability model in disguise: joint, marginal and conditional relative frequencies become joint, marginal and conditional probabilities."
  - "Name the condition before you divide: P(A | B) and P(B | A) share a numerator but not a denominator."
  - "Mutually exclusive means P(A ∩ B) = 0; independent means P(A ∩ B) = P(A) · P(B). They are different ideas."
  - "A random variable is summarised by its distribution, mean (long-run average) and standard deviation; binomial and normal models give these by formula."
  - "Simulations and sampling distributions show how much a statistic varies by chance, which is how you judge whether a result is unusual."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Read the big ideas and the method table, then try the seven questions without notes.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The rubrics are a **suggested Marlbridge rubric**, not official scoring.

## Big ideas of the unit

- **Two categorical variables are compared through conditional distributions.** Compare proportions within groups, not counts; different conditional distributions mean association, not cause ([2.1](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-study-guide/), [2.2](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-study-guide/)).
- **Probability is long-run relative frequency.** Simulation estimates it, and the law of large numbers says more trials give a better estimate ([2.3](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-study-guide/)).
- **Counting works only for equally likely outcomes.** Every probability lies from 0 to 1, the sample space has probability 1, and "at least one" is usually quickest by the complement ([2.4](/advanced-course-resources/statistics/2-4-introduction-probability-study-guide/)).
- **The joint probability links the rules.** P(A ∩ B) = 0 means mutually exclusive ([2.5](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/)); dividing it by P(B) gives P(A | B) ([2.6](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/)); comparing it with P(A) · P(B) tests independence, and subtracting it once gives P(A ∪ B) ([2.7](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/)).
- **Trees reverse conditions.** Multiply along branches, add the paths that give the event, then divide ([2.6](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/)).
- **A random variable turns outcomes into numbers.** Its distribution, built from the rules or estimated by simulation, must be valid ([2.8](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-study-guide/)); its mean and standard deviation are fixed parameters, interpreted as a long-run average and a typical distance from it ([2.9](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/)).
- **Two models save work.** A count of successes in n independent trials with constant p is binomial ([2.10](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/)); many continuous variables are approximately normal, and areas under the curve are probabilities ([2.11](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/)).
- **Statistics vary from sample to sample.** A sampling or randomization distribution shows how much; sample means are approximately normal for large samples (the central limit theorem), and an observed result far in the tail is evidence against the assumed model ([2.12](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/)).

## Key relationships and methods

| If the question asks you to… | Use… | Watch out for… |
|---|---|---|
| Compare groups in a two-way table | Conditional relative frequencies within each group | Comparing counts when groups differ in size |
| Find P(A \| B) | Count in both ÷ count in B, or P(A ∩ B) ÷ P(B) | Dividing by the wrong total |
| Find P(A and B) | P(A) · P(B \| A); P(A) · P(B) only if independent | Multiplying without justifying independence |
| Find P(A or B) | P(A) + P(B) − P(A ∩ B) | Adding without subtracting the overlap |
| Decide "mutually exclusive" or "independent" | P(A ∩ B) = 0, or P(A \| B) = P(A) | Treating the two ideas as the same |
| Summarise a discrete random variable | μ = Σx · P(x), σ = √[Σ(x − μ)² · P(x)] | Averaging the values without weights |
| Model a count of successes | B(n, p): μ = np, σ = √[np(1 − p)] | Checking only some of the four conditions |
| Find a normal probability or boundary | z = (x − μ) ÷ σ, normalcdf, invNorm | Direction: invNorm uses the area to the left |
| Judge whether a result is unusual | Simulated sampling or randomization distribution | Calling a small probability "proof" |

## Question 1 (multiple choice · mixed)

The fictional Riverlight streaming service recorded whether each of 600 subscribers watched a documentary last month.

| Plan | Watched | Did not | Total |
|---|---|---|---|
| Basic | 108 | 252 | 360 |
| Premium | 72 | 168 | 240 |
| Total | 180 | 420 | 600 |

For a subscriber chosen at random, which statement is correct?

- (A) "Premium" and "watched" are independent, because P(watched | premium) = 0.30 = P(watched).
- (B) They are not independent, because more Basic subscribers watched (108 against 72).
- (C) They are not independent, because P(premium | watched) = 0.40 ≠ P(watched) = 0.30.
- (D) They are not independent, because P(premium ∩ watched) = 0.12 ≠ 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** P(watched | premium) = 72 ÷ 240 = 0.30 and P(watched) = 180 ÷ 600 = 0.30. Knowing the plan does not change the probability. Check: P(premium) · P(watched) = 0.40 × 0.30 = 0.12 = 72 ÷ 600.

- (B) compares counts from groups of different sizes.
- (C) compares the wrong pair: P(premium | watched) must be compared with P(premium) = 0.40, and they are equal.
- (D) is the test for mutually exclusive events, not for independence.

Topics: 2.2 (conditional relative frequencies), 2.6, 2.7.
</details>

## Question 2 (multiple choice · mixed)

At a fictional bike shop, a customer buys a helmet with probability 0.30 and lights with probability 0.50. What is P(helmet or lights) if the events were **mutually exclusive**, and what is it if they were **independent**?

- (A) Mutually exclusive: 0.65; independent: 0.80
- (B) 0.80 in both cases
- (C) Mutually exclusive: 0.80; independent: 0.65
- (D) Mutually exclusive: 0.80; independent: 0.15

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Mutually exclusive: P(H ∩ L) = 0, so P(H ∪ L) = 0.30 + 0.50 = 0.80. Independent: P(H ∩ L) = 0.30 × 0.50 = 0.15, so P(H ∪ L) = 0.80 − 0.15 = 0.65.

- (A) swaps the two cases.
- (B) forgets that independent events with non-zero probabilities overlap.
- (D) gives P(H ∩ L), not the union.

Topics: 2.5, 2.7.
</details>

## Question 3 (multiple choice · mixed)

A fictional shop's mosaic plot of purchases has two columns: Online (width 0.30) and In-store (width 0.70). The "Returned" segment has height 0.20 in the Online column and 0.05 in the In-store column. A returned purchase is chosen at random. What is the probability that it was bought online?

- (A) 0.06
- (B) 0.20
- (C) 0.30
- (D) 0.63

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Each area is a joint probability: online and returned 0.30 × 0.20 = 0.06; in-store and returned 0.70 × 0.05 = 0.035. P(returned) = 0.095, so P(online | returned) = 0.06 ÷ 0.095 ≈ 0.6316.

- (A) is the joint probability P(online ∩ returned).
- (B) is P(returned | online), the condition reversed.
- (C) is P(online) for all purchases.

Topics: 2.1 (mosaic plots), 2.2, 2.6.
</details>

## Question 4 (constructed response · mixed)

At the fictional Lockstep Escape Rooms, a team must open three locks in order and stops at the first lock it fails to open. The probability of opening lock 1 is 0.8. Given lock 1 is open, the probability of opening lock 2 is 0.6. Given lock 2 is open, the probability of opening lock 3 is 0.5. Let X = the number of locks a randomly chosen team opens.

(a) Construct the probability distribution of X and show that it is valid.
(b) Construct the cumulative distribution and find P(X ≥ 2).
(c) Calculate the mean and standard deviation of X. Interpret both in context.
(d) A student says X is binomial with n = 3. Give two reasons why it is not.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Multiply along the sequence of locks.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.20 | 0.8 × 0.4 = 0.32 | 0.8 × 0.6 × (1 − 0.5) = 0.24 | 0.8 × 0.6 × 0.5 = 0.24 |

Every probability is between 0 and 1, and 0.20 + 0.32 + 0.24 + 0.24 = 1.

**(b)** P(X ≤ x): 0.20, 0.52, 0.76, 1.00. P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0.52 = **0.48**.

**(c)** μ = 0(0.20) + 1(0.32) + 2(0.24) + 3(0.24) = **1.52 locks**. Squared deviations weighted by probability: 0.4621 + 0.0865 + 0.0553 + 0.5257 = 1.1296, so σ = √1.1296 ≈ **1.06 locks**. Over very many teams, the mean is about 1.52 locks per team, and a team's count typically differs from 1.52 by about 1.06 locks.

**(d)** The number of trials is not fixed (a team stops at its first failure), and the probability of success changes from lock to lock (0.8, 0.6, 0.5), so the trials do not share one p and are not independent.

| Point | What earns it |
|---|---|
| 1 | P(X = 1) and P(X = 2) found by multiplying conditional probabilities |
| 1 | Complete distribution with a validity check |
| 1 | Cumulative values and P(X ≥ 2) = 0.48 |
| 1 | μ = 1.52 and σ ≈ 1.06 with working |
| 1 | Both interpreted in context, μ as a long-run average |
| 1 | Two binomial conditions that fail, linked to the context |

**Total: 6 points.** Topics: 2.6, 2.8, 2.9, 2.10.
</details>

## Question 5 (constructed response · mixed)

The fictional online game Starforge claims that each treasure chest contains a rare item with probability 0.10, independently of other chests. Kofi opens 30 chests and gets no rare items. Let X = the number of rare items in 30 chests, and assume the claim is true.

(a) Explain why X is binomial, and find its mean and standard deviation.
(b) Find P(X = 0) and P(X ≥ 1).
(c) Kofi's friend simulates 1,000 sets of 30 chests, using random integers 1 to 10 with 1 = rare item. In 36 sets there were no rare items. Give the simulation's estimate of P(X = 0) and explain why it differs from (b).
(d) Does Kofi's result give evidence that the true probability is less than 0.10? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each chest has a rare item or not; n = 30 is fixed; chests are independent; p = 0.10 for every chest. So X ~ B(30, 0.10). μ = 30 × 0.10 = **3 items**; σ = √[30 × 0.10 × 0.90] = √2.7 ≈ **1.64 items**.

**(b)** P(X = 0) = (0.90)³⁰ ≈ **0.0424**. By the complement, P(X ≥ 1) = 1 − 0.0424 = **0.9576**.

**(c)** Estimate = 36 ÷ 1,000 = **0.036**. A simulation gives an estimate that varies by chance; by the law of large numbers, many more sets would usually give a value closer to 0.0424.

**(d)** If the claim were true, a set of 30 chests with no rare item would happen only about 4% of the time. That is fairly unusual, so Kofi's result gives **some evidence** that the probability is below 0.10. It does not prove it: about 1 player in 24 would see this even if the claim were true.

| Point | What earns it |
|---|---|
| 1 | Four binomial conditions in context, with μ = 3 and σ ≈ 1.64 |
| 1 | P(X = 0) ≈ 0.0424 and P(X ≥ 1) ≈ 0.9576 using the complement |
| 1 | Estimate 0.036 with chance variation **and** more trials as the explanation |
| 1 | Links the small probability to evidence against the claim, without calling it proof |

**Total: 4 points.** Topics: 2.3, 2.4, 2.10.
</details>

## Question 6 (constructed response · mixed)

Bottles from the fictional Clearbrook Water plant are labelled 500 ml. The volume in a bottle is approximately N(503, 2.5) ml.

(a) Find the probability that a randomly chosen bottle holds less than 500 ml.
(b) A pack holds 6 bottles. Assuming bottles are independent, find the probability that at least one bottle in a pack holds less than 500 ml.
(c) An inspector takes a random sample of 10 bottles each hour and records the sample mean x̄. A computer simulated 1,000 such samples from N(503, 2.5). The 1,000 values of x̄ formed a roughly symmetric, bell-shaped distribution with mean 502.97 ml and standard deviation 0.79 ml; 12 of them were 501.2 ml or less. Describe the sampling distribution of x̄ and compare its spread with that of single bottles.
(d) One hour, x̄ = 501.2 ml. Find the probability that a **single** bottle holds 501.2 ml or less. Is the hour's sample mean, or a single bottle of 501.2 ml, more surprising if the machine is working as stated? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** z = (500 − 503) ÷ 2.5 = −1.2. P(V < 500) = normalcdf(lower = −10⁹⁹, upper = 500, μ = 503, σ = 2.5) ≈ **0.1151**.

**(b)** The number of under-filled bottles in a pack is B(6, 0.1151). P(at least one) = 1 − (1 − 0.1151)⁶ = 1 − 0.4802 ≈ **0.5198**.

**(c)** The simulated sampling distribution of x̄ is approximately normal, centred near 503 ml (mean 502.97 ml), with standard deviation about 0.79 ml. Sample means vary much less than single bottles (0.79 ml against 2.5 ml), because averaging cancels out much of the bottle-to-bottle variation.

**(d)** Single bottle: z = (501.2 − 503) ÷ 2.5 = −0.72, so P(V ≤ 501.2) ≈ **0.2358**; about 1 bottle in 4 is this low, which is ordinary. Sample mean: only 12 of 1,000 simulated means (0.012) were this low. The **sample mean** is far more surprising, so this hour's result is evidence that the machine is now filling below 503 ml on average.

| Point | What earns it |
|---|---|
| 1 | (a) 0.1151 with the distribution, boundary and direction shown |
| 1 | (b) 0.5198 using the complement and independence |
| 1 | (c) Shape, centre and variability of x̄ in context |
| 1 | (c) Sample means vary less than single bottles, with both values |
| 1 | (d) 0.2358 for one bottle **and** 0.012 for the mean, with the conclusion about the machine |

**Total: 5 points.** Topics: 2.10, 2.11, 2.12.
</details>

## Question 7 (constructed response · mixed)

A fictional dental clinic randomly assigned 40 volunteer patients to receive an appointment reminder by text (20 patients) or by email (20 patients). Of the text group, 17 attended; of the email group, 11 attended.

(a) Construct a two-way table. Use conditional relative frequencies to decide whether reminder type and attendance are associated for these patients.
(b) One of the 40 patients is chosen at random. Are "text reminder" and "attended" independent? Justify. Then find P(text reminder or attended).
(c) The observed difference in attendance proportions (text − email) is 0.30. Describe how to carry out one random reallocation to test whether this could be due to chance.
(d) In 1,000 reallocations, 48 differences were 0.30 or more. What should the clinic conclude, and about whom?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

| Outcome | Text | Email | Total |
|---|---|---|---|
| Attended | 17 | 11 | 28 |
| Missed | 3 | 9 | 12 |
| Total | 20 | 20 | 40 |

Attended: 17 ÷ 20 = 0.85 for text against 11 ÷ 20 = 0.55 for email. The conditional distributions differ, so reminder type and attendance are **associated** for these patients.

**(b)** P(attended | text) = 0.85 but P(attended) = 28 ÷ 40 = 0.70. Since 0.85 ≠ 0.70, the events are **not independent**. P(text ∪ attended) = 20/40 + 28/40 − 17/40 = 31/40 = **0.775**.

**(c)** Write "attended" on 28 cards and "missed" on 12. Shuffle and deal 20 to "text" and 20 to "email". Record (proportion attended in "text") − (proportion attended in "email"). This keeps every outcome and moves only the labels.

**(d)** Only 48 of 1,000 reallocations (0.048) gave a difference of 0.30 or more, so a difference this large would be unusual if reminder type made no difference. Because reminders were **randomly assigned**, this is evidence that text reminders **cause** higher attendance. The patients were volunteers, so the conclusion applies to patients like them.

| Point | What earns it |
|---|---|
| 1 | Correct table **and** association justified with 0.85 and 0.55 |
| 1 | Not independent, comparing 0.85 with 0.70 |
| 1 | P(text ∪ attended) = 0.775 with the addition rule |
| 1 | Reallocation keeps the 28 and 12 outcomes and the group sizes, and records the difference |
| 1 | Uses 48 of 1,000 to call 0.30 unusual, with cause from random assignment **and** scope limited to similar volunteers |

**Total: 5 points.** Topics: 2.1, 2.2, 2.7, 2.12.
</details>

## How did you do?

Mark your answers with the rubrics and note the topics under each question you missed. Re-read those study guides, then tick off each checklist. If many topics went wrong, use the [Unit 2 diagnostic](/advanced-course-resources/statistics/unit-2-diagnostic/) to find the gaps.

Topic checklists: [2.1](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-checklist/) · [2.2](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-checklist/) · [2.3](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-checklist/) · [2.4](/advanced-course-resources/statistics/2-4-introduction-probability-checklist/) · [2.5](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-checklist/) · [2.6](/advanced-course-resources/statistics/2-6-conditional-probability-checklist/) · [2.7](/advanced-course-resources/statistics/2-7-independent-events-unions-events-checklist/) · [2.8](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-checklist/) · [2.9](/advanced-course-resources/statistics/2-9-parameters-random-variables-checklist/) · [2.10](/advanced-course-resources/statistics/2-10-binomial-distribution-checklist/) · [2.11](/advanced-course-resources/statistics/2-11-normal-distribution-checklist/) · [2.12](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-checklist/)
