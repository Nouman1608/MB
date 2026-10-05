---
resourceId: "mb-ap-stats-u2-diagnostic"
title: "Probability, Random Variables and Probability Distributions: Unit Diagnostic (Statistics Unit 2)"
description: "A 30-minute check with one short question per topic of Unit 2, from two-way tables and probability rules to binomial, normal and sampling distributions."
course: "statistics"
unit: 2
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 2.1 to 2.12"
learningObjectives:
  - "Find out which Unit 2 topics are secure and which need more work"
  - "Practise short questions on two-way tables, probability rules, random variables and the binomial and normal models"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use binomial and normal functions (binompdf, binomcdf, normalcdf, invNorm) for Questions 11, 12 and 14 if you wish, but name the distribution and its parameters. Give probabilities to 4 decimal places unless stated."
related: ["mb-ap-stats-u2-review", "mb-ap-stats-2.6-study-guide", "mb-ap-stats-2.7-study-guide", "mb-ap-stats-2.10-study-guide", "mb-ap-stats-2.11-study-guide"]
next: "mb-ap-stats-u2-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Fifteen short questions: at least one for each of the 12 topics in Unit 2."
  - "Twelve are multiple choice; three need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Use this diagnostic to find **which Unit 2 topics to revisit**: one question per topic, two for Topics 2.6, 2.10 and 2.11.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes and answer everything before opening any answer. Graphing calculator allowed. N(μ, σ) means a normal distribution with mean μ and **standard deviation** σ. "Or" includes "both".

## Question 1 (multiple choice · 2.1)

A segmented bar chart shows how pupils travel to two fictional schools: Ashdown (300 pupils) and Brookvale (600). Segment heights:

| School | Walk | Bus | Car |
|---|---|---|---|
| Ashdown | 0.50 | 0.30 | 0.20 |
| Brookvale | 0.25 | 0.30 | 0.45 |

Which statement is supported?

- (A) More Ashdown pupils walk than Brookvale pupils.
- (B) School and travel mode are associated: 0.45 of Brookvale pupils come by car, against 0.20 at Ashdown.
- (C) The same number of pupils at each school come by bus.
- (D) The variables are not associated, because the bus segments match.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The conditional distributions differ, so the variables are associated.

- (A): 0.50 × 300 = 0.25 × 600 = 150, the same.
- (C) confuses proportions with counts: 90 against 180.
- (D): one matching category does not cancel differences elsewhere.

**If you missed this:** [Topic 2.1 study guide](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-study-guide/).
</details>

## Question 2 (multiple choice · 2.2)

The fictional Larkspur Hotel recorded 500 guests:

| Booked through | Business | Leisure | Total |
|---|---|---|---|
| Website | 90 | 210 | 300 |
| Agent | 110 | 90 | 200 |
| Total | 200 | 300 | 500 |

What proportion of the **business guests** booked through the website?

- (A) 0.18
- (B) 0.30
- (C) 0.45
- (D) 0.60

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Divide by the Business total: 90 ÷ 200 = 0.45.

- (A) is the joint relative frequency, 90 ÷ 500.
- (B) swaps the direction: 90 ÷ 300.
- (D) is the marginal relative frequency 300 ÷ 500.

**If you missed this:** [Topic 2.2 study guide](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-study-guide/).
</details>

## Question 3 (multiple choice · 2.3)

A fictional footballer scores each penalty with probability 0.7, independently. Which simulation correctly estimates P(at least 4 goals in 5 penalties)?

- (A) One digit per penalty, 0–6 = scored; 5 digits per trial; record whether at least 4 are 0–6; repeat many times.
- (B) As (A), but 0–7 = scored.
- (C) As (A), but skip digits that repeat within a trial.
- (D) One digit per trial: 0–6 = "at least 4 scored".

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Seven of ten digits give 0.7, and one trial is 5 penalties.

- (B) gives 0.8.
- (C) is for sampling without replacement.
- (D) gives the whole event probability 0.7; it is about 0.53.

**If you missed this:** [Topic 2.3 study guide](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-study-guide/).
</details>

## Question 4 (multiple choice · 2.4)

A fictional café app gives one of three equally likely stamps (Sun, Moon, Star) per visit, independently. Over two visits, what is P(two **different** stamps)?

- (A) 1/9
- (B) 1/3
- (C) 1/2
- (D) 2/3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Of the 3 × 3 = 9 equally likely ordered pairs, 3 repeat a stamp, so P = 1 − 3/9 = 2/3.

- (A) is one particular pair.
- (B) is P(same stamp), the complement.
- (C) wrongly treats 6 unordered results as equally likely.

**If you missed this:** [Topic 2.4 study guide](/advanced-course-resources/statistics/2-4-introduction-probability-study-guide/).
</details>

## Question 5 (multiple choice · 2.5)

For a random day at a fictional ferry port, P(fog) = 0.12, P(a sailing is cancelled) = 0.05 and P(fog ∩ cancelled) = 0.03. Which statement is correct **and** correctly justified?

- (A) Not mutually exclusive, because P(fog ∩ cancelled) = 0.03 > 0.
- (B) Mutually exclusive, because fog does not always lead to a cancellation.
- (C) Mutually exclusive, because 0.03 is smaller than both 0.12 and 0.05.
- (D) Not mutually exclusive, because 0.12 + 0.05 is less than 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Mutually exclusive events have joint probability 0; here both happen on about 3% of days.

- (B) and (C) ignore the test: a joint probability above 0 means both can happen.
- (D) has the right verdict for the wrong reason.

**If you missed this:** [Topic 2.5 study guide](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/).
</details>

## Question 6 (multiple choice · 2.6)

At a fictional college, 40% of students take Spanish, and 25% of these also take French. What is P(a randomly chosen student takes **both**)?

- (A) 0.25
- (B) 0.10
- (C) 0.625
- (D) 0.65

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** General multiplication rule: P(S ∩ F) = P(S) · P(F | S) = 0.40 × 0.25 = 0.10.

- (A) is the conditional probability P(F | S).
- (C) divides, 0.25 ÷ 0.40.
- (D) adds the two values.

**If you missed this:** [Topic 2.6 study guide](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/).
</details>

## Question 7 (short answer · 2.6)

A fictional cycle-hire scheme has 60% e-bikes and 40% standard bikes. After a hire, 5% of e-bikes and 15% of standard bikes need a repair. One returned bike is chosen at random.

(a) Find the probability that it needs a repair.
(b) It needs a repair. Find the probability that it is an e-bike, and explain why this is not 0.60.

<details>
<summary>Answer and explanation</summary>

**(a)** Multiply along tree branches, then add: P(repair) = 0.60 × 0.05 + 0.40 × 0.15 = 0.03 + 0.06 = **0.09**.

**(b)** P(e-bike | repair) = 0.03 ÷ 0.09 ≈ **0.3333**. Standard bikes need repairs three times as often, so they cause most repairs.

**If you missed this:** [Topic 2.6 study guide](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/), Worked example 2.
</details>

## Question 8 (multiple choice · 2.7)

For a randomly chosen household in a fictional town, P(has a garden) = 0.70, P(has a pet) = 0.40 and P(both) = 0.28. Which statement is correct?

- (A) Independent; P(garden or pet) = 1.10
- (B) Not independent, because P(both) is not 0; P(garden or pet) = 0.82
- (C) Independent; P(garden or pet) = 0.82
- (D) Independent; P(garden or pet) = 0.54

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 0.70 × 0.40 = 0.28 = P(both), so the events are independent; P(G ∪ P) = 0.70 + 0.40 − 0.28 = 0.82.

- (A) forgets the overlap; it exceeds 1.
- (B) confuses independent with mutually exclusive.
- (D) subtracts the overlap twice.

**If you missed this:** [Topic 2.7 study guide](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/).
</details>

## Question 9 (multiple choice · 2.8)

X = the number of a fictional ski resort's 3 lifts closed on a random morning. Cumulative distribution:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X ≤ x) | 0.55 | 0.85 | 0.97 | 1.00 |

Find P(**at least 2** lifts closed).

- (A) 0.12
- (B) 0.15
- (C) 0.45
- (D) 0.97

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0.85 = 0.15.

- (A) is P(X = 2) only, leaving out X = 3.
- (C) is P(X ≥ 1).
- (D) reads P(X ≤ 2), the wrong direction.

**If you missed this:** [Topic 2.8 study guide](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-study-guide/).
</details>

## Question 10 (multiple choice · 2.9)

A fictional raffle ticket costs $2. It wins $50 with probability 0.01, $10 with probability 0.05 and nothing otherwise. What is the expected **net gain** per ticket?

- (A) −$1.00
- (B) $1.00
- (C) $18.00
- (D) −$2.00

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Net gains are $48, $8 and −$2 with probabilities 0.01, 0.05 and 0.94: E(X) = 0.48 + 0.40 − 1.88 = −$1.00. In the long run, buyers lose about $1 per ticket.

- (B) ignores the $2 cost.
- (C) averages 48, 8 and −2 without weighting.
- (D) is the most likely value, not the mean.

**If you missed this:** [Topic 2.9 study guide](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/).
</details>

## Question 11 (multiple choice · 2.10)

A fictional player makes each free throw with probability 0.75, independently. In 8 throws, what is P(**at least 7** made)?

- (A) 0.1001
- (B) 0.2670
- (C) 0.3671
- (D) 0.6329

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** X ~ B(8, 0.75). P(X ≥ 7) = ₈C₇(0.75)⁷(0.25) + (0.75)⁸ = 0.2670 + 0.1001 = 0.3671.

- (A) is P(X = 8), from the off-by-one 1 − P(X ≤ 7).
- (B) is P(X = 7) only.
- (D) is P(X ≤ 6), the complement.

**If you missed this:** [Topic 2.10 study guide](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/).
</details>

## Question 12 (short answer · 2.10)

On a fictional airline, 6% of booked passengers do not show up. The airline sells 124 tickets for a flight with 120 seats. Let X = the number of no-shows.

(a) State the binomial conditions in context. Which is most open to doubt?
(b) Find and interpret the mean of X, and find its standard deviation.
(c) The flight is over-full if fewer than 4 passengers fail to show. Find this probability.

<details>
<summary>Answer and explanation</summary>

**(a)** Two outcomes (show or not); n = 124 fixed; p = 0.06 for each; independent passengers. **Independence** is most doubtful: groups travel together.

**(b)** μ = 124 × 0.06 = **7.44 no-shows**: over many such flights, no-shows average about 7.44 per flight. σ = √[124 × 0.06 × 0.94] ≈ **2.64 no-shows**.

**(c)** "Fewer than 4" is X ≤ 3. X ~ B(124, 0.06), so P(X ≤ 3) = **0.0561**.

**If you missed this:** [Topic 2.10 study guide](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/).
</details>

## Question 13 (multiple choice · 2.11)

The lifetimes of a fictional battery are approximately N(40, 3) hours. Using the empirical rule, about what percentage last **more than 34 hours**?

- (A) 2.5%
- (B) 84%
- (C) 95%
- (D) 97.5%

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 34 = μ − 2σ. Half of the 5% outside μ ± 2σ lies below it, so 97.5% lies above.

- (A) is the area **below** 34 hours.
- (B) is the area above μ − σ = 37 hours.
- (C) is the area between 34 and 46 hours.

**If you missed this:** [Topic 2.11 study guide](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/).
</details>

## Question 14 (short answer · 2.11)

At a fictional swimming club, 100 m times are approximately N(68, 2.4) seconds.

(a) Find the probability that a randomly chosen swim takes less than 64 seconds.
(b) The **fastest** 5% of times earn a squad place. Find the qualifying time.

<details>
<summary>Answer and explanation</summary>

**(a)** z = (64 − 68) ÷ 2.4 ≈ −1.67. P(T < 64) = normalcdf(lower = −10⁹⁹, upper = 64, μ = 68, σ = 2.4) = **0.0478** (table: 0.0475).

**(b)** Fastest means **lowest** times, so the area to the left is 0.05: z = −1.6449, and 68 + (−1.6449)(2.4) ≈ **64.05 s**. Using 0.95 gives 71.95 s, the slowest 5%.

**If you missed this:** [Topic 2.11 study guide](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/).
</details>

## Question 15 (multiple choice · 2.12)

Sixteen fictional volunteers were randomly assigned, 8 to a mint drink and 8 to water, before a typing test. The mint group's mean was 1.5 words per minute higher. In 1,000 random reallocations of the 16 scores, 229 differences (mint − water) were 1.5 or more. Best conclusion?

- (A) The reallocations prove that mint has no effect.
- (B) The randomization distribution is centred near 1.5, so the result is typical.
- (C) The mint group typed faster, so mint improves typing.
- (D) Chance assignment alone often gives a difference this large, so there is no convincing evidence that mint helps.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Reallocating moves only the labels, showing what happens if mint makes no difference; 229 ÷ 1,000 ≈ 0.23 is not small.

- (A) is too strong: a typical result is not proof.
- (B) is wrong: it is centred near 0.
- (C) ignores chance variation from random assignment.

**If you missed this:** [Topic 2.12 study guide](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 2.1 | 1 | [Two-way tables](/advanced-course-resources/statistics/2-1-tabular-graphical-representations-distributions-two-study-guide/) |
| 2.2 | 2 | [Two-way summary statistics](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-study-guide/) |
| 2.3 | 3 | [Simulation](/advanced-course-resources/statistics/2-3-estimating-probabilities-simulation-study-guide/) |
| 2.4 | 4 | [Probability basics](/advanced-course-resources/statistics/2-4-introduction-probability-study-guide/) |
| 2.5 | 5 | [Mutually exclusive events](/advanced-course-resources/statistics/2-5-mutually-exclusive-events-study-guide/) |
| 2.6 | 6, 7 | [Conditional probability](/advanced-course-resources/statistics/2-6-conditional-probability-study-guide/) |
| 2.7 | 8 | [Independence and unions](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/) |
| 2.8 | 9 | [Random variables](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-study-guide/) |
| 2.9 | 10 | [Mean and standard deviation](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/) |
| 2.10 | 11, 12 | [Binomial distribution](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/) |
| 2.11 | 13, 14 | [Normal distribution](/advanced-course-resources/statistics/2-11-normal-distribution-study-guide/) |
| 2.12 | 15 | [Sampling distributions](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/) |

## How to use your result

- **Mark each question right, partly right or wrong.**
- **Fix weak topics in order**: 2.6 underpins 2.7, and both feed 2.10.
- **Read the study guide, then do its practice set.**
- **Then try the [Unit 2 mixed review](/advanced-course-resources/statistics/unit-2-review/).**
