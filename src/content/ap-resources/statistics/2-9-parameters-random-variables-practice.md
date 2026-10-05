---
resourceId: "mb-ap-stats-2.9-practice"
title: "Parameters of Random Variables: Practice Questions (Statistics 2.9)"
description: "Seven original Marlbridge practice questions on parameters, expected value and standard deviation of discrete random variables, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.9"]
resourceType: "practice-questions"
prerequisites:
  - "Reading a probability distribution table"
prerequisiteResources: ["mb-ap-stats-2.9-study-guide"]
learningObjectives:
  - "Calculate the mean, variance and standard deviation of a discrete random variable"
  - "Tell a parameter from a statistic"
  - "Interpret the mean and standard deviation of a random variable in context"
  - "Use the mean and standard deviation to compare two random variables and support a decision"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use one-variable statistics with the probabilities as frequencies to check your work, and read σx. Round final answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-2.9-study-guide", "mb-ap-stats-2.9-revision-notes", "mb-ap-stats-2.9-checklist"]
next: "mb-ap-stats-2.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every interpretation must be in context, with units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and distributions are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: X is a discrete random variable; μ = E(X) = Σ xᵢ · P(xᵢ) and σ = √[ Σ (xᵢ − μ)² · P(xᵢ) ]; round final answers to 2 decimal places unless stated. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

At a fictional town library, let X = the number of books a member borrows on a visit. The probability distribution of X is:

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 0.45 | 0.30 | 0.15 | 0.10 |

What is the expected value of X?

- (A) 0.475 books
- (B) 1 book
- (C) 1.9 books
- (D) 2.5 books

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** E(X) = 1(0.45) + 2(0.30) + 3(0.15) + 4(0.10) = 0.45 + 0.60 + 0.45 + 0.40 = 1.9 books.

- (A) divides the correct sum by 4, the number of possible values. The probabilities already do the weighting, so there is no further division.
- (B) is the most likely value (the mode), not the mean.
- (D) is the unweighted average of 1, 2, 3 and 4. It ignores the fact that 1 book is much more likely than 4.
</details>

## Question 2 (multiple choice · foundation)

A fictional sandwich shop knows that the number of sandwiches left unsold at closing has a probability distribution with mean 6.2 sandwiches. Over one fortnight, the manager records the number left each day and finds an average of 5.6 sandwiches. Which statement is correct?

- (A) 6.2 is a statistic and 5.6 is a parameter.
- (B) 6.2 is a parameter and 5.6 is a statistic.
- (C) Both are parameters, because both are means.
- (D) Both are statistics, because both were calculated from numbers.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 6.2 sandwiches is the mean of the probability distribution, so it describes the whole process and has one fixed value: a parameter. 5.6 sandwiches is calculated from one fortnight's data; another fortnight would give a different value, so it is a statistic.

- (A) swaps the two. The value from recorded data is the one that varies.
- (C) is wrong because being a mean does not make a number a parameter. A sample mean is a statistic.
- (D) is wrong because a parameter can be calculated too (from the distribution). What matters is whether it describes the whole distribution and is fixed.
</details>

## Question 3 (multiple choice · core)

A fictional company sells yearly repair cover for bicycles. Let X = the company's profit, in dollars, on a randomly chosen policy. The company calculates E(X) = $12. Which is the best interpretation?

- (A) The company makes a profit of $12 on every policy it sells.
- (B) Over a very large number of policies, the company's profit averages about $12 per policy.
- (C) The most common profit on a policy is $12.
- (D) If the company sells 10 policies, its total profit will be exactly $120.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The expected value is a long-run average over many repetitions, here many policies.

- (A) treats the mean as a guaranteed outcome. Some policies make a loss (after a costly repair) and others make more than $12.
- (C) describes the mode. The mean is a weighted average and need not be the most common value, or even a possible one.
- (D) is close to the right idea but says "exactly". With only 10 policies the total can be far from $120; the average settles near $12 only in the long run.
</details>

## Question 4 (calculation · core)

At a fictional taxi firm, let X = the number of passengers in a randomly chosen ride.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 0.50 | 0.25 | 0.15 | 0.10 |

Calculate, showing each step, the mean and the standard deviation of X. Interpret the standard deviation in context.

<details>
<summary>Worked solution</summary>

1. Mean: μ = 1(0.50) + 2(0.25) + 3(0.15) + 4(0.10) = 0.50 + 0.50 + 0.45 + 0.40 = **1.85 passengers**.
2. Deviations from 1.85: −0.85, 0.15, 1.15, 2.15.
3. Squared deviations: 0.7225, 0.0225, 1.3225, 4.6225.
4. Weighted by probability: 0.36125, 0.005625, 0.198375, 0.46225. Sum = 1.0275 = σ².
5. σ = √1.0275 = **1.01 passengers** (1.0137…).

**Interpretation.** Over a very large number of rides, the number of passengers in a ride typically differs from the mean of 1.85 by about 1.01 passengers.

Suggested mark points (3): 1 for the correct mean with the weighted sum shown; 1 for weighting the squared deviations by their probabilities and taking the square root; 1 for an interpretation that names passengers per ride, the long run (or many rides) and the mean. Ignoring the probabilities and dividing the unweighted squared deviations from 1.85 by 3, as if the four values were a sample, gives 1.49 and does not earn the second point.
</details>

## Question 5 (constructed response · core)

A fictional cinema studies online ticket orders. Let X = the number of tickets in a randomly chosen order.

| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| P(X = x) | 0.20 | 0.45 | ? | 0.10 | 0.05 |

(a) Find the missing probability.
(b) Calculate the mean and standard deviation of X.
(c) Interpret the mean in context.
(d) Find P(X ≥ 3). The cinema expects 500 orders on Saturday. About how many tickets should it expect to sell through these orders? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The probabilities add to 1: 1 − (0.20 + 0.45 + 0.10 + 0.05) = 1 − 0.80 = **0.20**.

**(b)** μ = 1(0.20) + 2(0.45) + 3(0.20) + 4(0.10) + 5(0.05) = 0.20 + 0.90 + 0.60 + 0.40 + 0.25 = **2.35 tickets**.

Deviations: −1.35, −0.35, 0.65, 1.65, 2.65. Squared: 1.8225, 0.1225, 0.4225, 2.7225, 7.0225. Weighted: 0.3645, 0.055125, 0.0845, 0.27225, 0.351125. Sum: σ² = 1.1275. σ = √1.1275 = **1.06 tickets**.

**(c)** Over a very large number of online orders at this cinema, the number of tickets per order averages about 2.35.

**(d)** P(X ≥ 3) = 0.20 + 0.10 + 0.05 = **0.35**. For 500 orders, expect about 500 × 2.35 = **1,175 tickets**, because the mean is the long-run average number of tickets per order. The actual total on Saturday will vary around this value.

| Point | What earns it |
|---|---|
| 1 | Missing probability 0.20, using the fact that probabilities add to 1 |
| 1 | Correct μ = 2.35 and σ = 1.06 with the weighted sums shown |
| 1 | Interprets μ as a long-run average number of tickets per order, in context |
| 1 | P(X ≥ 3) = 0.35 **and** about 1,175 tickets, linked to the mean |

A correct σ from a calculator (σx) with the lists described is acceptable for (b) if μ is shown by hand. "Each order has 2.35 tickets" does not earn the interpretation point.
</details>

## Question 6 (constructed response · stretch)

A fictional charity is choosing between two games for its open day. For each game, let the random variable be the charity's **profit per play**, in dollars.

| Game A: profit ($) | 4 | −2 |
|---|---|---|
| Probability | 0.5 | 0.5 |

| Game B: profit ($) | 2 | −0.5 |
|---|---|---|
| Probability | 0.6 | 0.4 |

(a) Show that both games have the same expected profit per play.
(b) Calculate the standard deviation of the profit for each game.
(c) The charity expects 200 plays and wants its total income to be as predictable as possible. Which game should it choose? Justify your answer using parameters, in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Game A: 4(0.5) + (−2)(0.5) = 2 − 1 = **$1**. Game B: 2(0.6) + (−0.5)(0.4) = 1.2 − 0.2 = **$1**. Both expect $1 profit per play, so about $200 over 200 plays.

**(b)** Game A: deviations 3 and −3; squared 9 and 9; σ² = 9(0.5) + 9(0.5) = 9; **σ = $3**.
Game B: deviations 1 and −1.5; squared 1 and 2.25; σ² = 1(0.6) + 2.25(0.4) = 0.6 + 0.9 = 1.5; **σ = $1.22** (1.2247…).

**(c)** **Game B.** Both games give the same long-run average profit of $1 per play. But Game B's profit per play typically varies from $1 by only about $1.22, compared with about $3 for Game A. Smaller variability per play means the total from 200 plays is likely to be closer to the expected $200, so Game B's income is more predictable.

| Point | What earns it |
|---|---|
| 1 | Both means calculated correctly and shown equal ($1) |
| 1 | Both standard deviations correct, with working |
| 1 | Chooses Game B **and** links "predictable" to the smaller standard deviation, quoting both values |
| 1 | Context: profit per play for the charity, and that the means are equal so variability decides |

Answers that choose Game B because "it loses less often" (0.4 against 0.5) show some sense but do not earn point 3 without the standard deviations.
</details>

## Question 7 (explanation · stretch)

For the fictional Harrowmoor Rescue station in the study guide, X = the number of call-outs on a randomly chosen day has μ = 1.3 and σ = 1.1 call-outs. A student simulates 50 days and records:

| Call-outs | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| Number of simulated days | 11 | 19 | 11 | 6 | 3 |

(a) Calculate the mean number of call-outs per day in the simulation.
(b) Is your answer to (a) a parameter or a statistic? Is 1.3 a parameter or a statistic? Explain.
(c) The student says, "The simulation proves the true mean is 1.42, not 1.3." Explain why the student is wrong, and describe what you would expect if the simulation used 10,000 days.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Total call-outs = 0(11) + 1(19) + 2(11) + 3(6) + 4(3) = 0 + 19 + 22 + 18 + 12 = 71 over 50 days. Mean = 71 ÷ 50 = **1.42 call-outs per day**.

**(b)** 1.42 is a **statistic**: it comes from one set of 50 simulated days, and another 50 days would give a different value. 1.3 is a **parameter**: it is the mean of the probability distribution, a single fixed value for this process.

**(c)** A mean from 50 days varies from run to run by chance, so a difference of 0.12 call-outs from μ is not surprising and does not change the parameter. The distribution that the simulation used has mean 1.3 by definition. With 10,000 simulated days, the simulated mean would be expected to be much closer to 1.3, because the expected value is the long-run average.

| Point | What earns it |
|---|---|
| 1 | Correct total (71) and mean 1.42 call-outs per day |
| 1 | Identifies 1.42 as a statistic and 1.3 as a parameter, with "varies" versus "fixed" |
| 1 | Explains that the sample mean varies by chance and that with many more days it settles near 1.3 |
</details>

## How did you do?

- **Q1 or Q4 wrong:** work through Worked example 1 in the [study guide](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/) again; weight every value by its probability.
- **Q2 or Q7(b) wrong:** re-read "Parameters and statistics" and the simulation section.
- **Q3 or Q5(c) wrong:** revisit the interpretation of μ as a long-run average.
- **Q5(d) wrong:** remember that the expected total over many repetitions is the number of repetitions × μ.
- **Q6 incomplete:** when means are equal, compare standard deviations, quote both and link them to the context.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-9-parameters-random-variables-checklist/).
