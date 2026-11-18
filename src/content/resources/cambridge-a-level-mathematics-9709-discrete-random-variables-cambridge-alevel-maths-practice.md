---
title: "Cambridge A Level Mathematics (9709): Discrete random variables -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.4
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "discrete-random-variables-cambridge-alevel-maths"
description: "Twelve original 9709 Paper 5 questions on 5.4: distribution tables, E(X), Var(X), binomial and geometric models and finding n, with mark schemes."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

These questions cover subtopic 5.4 Discrete random variables of Cambridge International AS & A Level Mathematics 9709 (Paper 5). Give non-exact answers to 3 significant figures.

Related: [discrete random variables study guide](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-cambridge-alevel-maths/) | [discrete random variables revision notes](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-cambridge-alevel-maths-revision-notes/)

## Section A

**1.** The random variable X takes the values 1, 2, 3 and 4 with probabilities 0.1, 0.3, p and 0.2 respectively. Find p and E(X). **[3]**

**2.** For the random variable X in question 1, find Var(X). **[2]**

**3.** X ~ B(8, 0.3). Find P(X = 3). **[2]**

**4.** X ~ B(8, 0.3). Find P(X < 2). **[2]**

**5.** X ~ Geo(0.25). Find P(X = 4) and P(X > 4). **[3]**

**6.** X ~ B(20, 0.35). Find E(X) and Var(X). **[2]**

## Section B

**7.** A fair die is thrown twice. The random variable X is the larger of the two scores (or the common score if they are equal).

**(a)** Draw up the probability distribution table of X.

**(b)** Find E(X).

**(c)** Find Var(X). **[7]**

**8.** The random variable X has the distribution shown, where a and b are constants.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | a | 0.3 | b | 0.1 |

E(X) = 1.4.

**(a)** Find a and b.

**(b)** Find Var(X). **[6]**

**9.** A basketball player scores with 40% of her shots. She takes 12 shots.

**(a)** Find the probability that she scores with at least 3 and at most 5 of these shots.

**(b)** State two assumptions, in context, needed for the binomial model to be valid. **[5]**

**10.** The probability that a particular machine part passes a stress test is 0.3. Parts are tested one after another. Find the least number of parts that must be tested for the probability that at least one passes to be greater than 0.99. **[4]**

**11.** On average, 1 in 10 cereal boxes contains a prize. Boxes are opened one at a time, and X is the number of boxes opened up to and including the first box with a prize.

**(a)** State the value of E(X).

**(b)** Find P(X ≤ 8).

**(c)** Find the least value of n such that P(X ≤ n) > 0.9. **[6]**

**12.** X ~ B(n, p), where E(X) = 6 and Var(X) = 4.2.

**(a)** Find n and p.

**(b)** Find P(X = 6). **[5]**

## Answers

**1.** 0.1 + 0.3 + p + 0.2 = 1, so **p = 0.4** [1]; E(X) = 0.1 + 0.6 + 1.2 + 0.8 [1] = **2.7** [1] **[3]**

**2.** E(X²) = 0.1 + 1.2 + 3.6 + 3.2 = 8.1 [1]; Var(X) = 8.1 − 2.7² = **0.81** [1] **[2]**

**3.** ⁸C₃ × 0.3³ × 0.7⁵ [1] = **0.254** [1] **[2]**

**4.** P(X ≤ 1) = 0.7⁸ + 8 × 0.3 × 0.7⁷ [1] = 0.0576 + 0.1977 = **0.255** [1] **[2]**

**5.** P(X = 4) = 0.75³ × 0.25 [1] = **0.105** [1]; P(X > 4) = 0.75⁴ = **0.316** [1] **[3]**

**6.** E(X) = 20 × 0.35 = **7** [1]; Var(X) = 7 × 0.65 = **4.55** [1] **[2]**

**7. (a)** X = x when both scores are at most x but not both at most x − 1, so P(X = x) = (x² − (x − 1)²)/36 = (2x − 1)/36 [1].

| x | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| P(X = x) | 1/36 | 3/36 | 5/36 | 7/36 | 9/36 | 11/36 |

All six values correct [1]; total = 36/36 = 1 [1]

**(b)** E(X) = (1 + 6 + 15 + 28 + 45 + 66)/36 [1] = 161/36 = **4.47** [1]

**(c)** E(X²) = (1 + 12 + 45 + 112 + 225 + 396)/36 = 791/36 [1]; Var(X) = 791/36 − (161/36)² = 2555/1296 = **1.97** [1] **[7]**

*Examiner insight:* the counting argument in (a) is quicker than listing the 36 outcomes, but a 6 × 6 grid of maximum scores earns the same credit.

**8. (a)** a + 0.3 + b + 0.1 = 1, so a + b = 0.6 [1]; 0.3 + 2b + 0.3 = 1.4 [1]; **b = 0.4** [1], **a = 0.2** [1]

**(b)** E(X²) = 0.3 + 1.6 + 0.9 = 2.8 [1]; Var(X) = 2.8 − 1.96 = **0.84** [1] **[6]**

**9. (a)** X ~ B(12, 0.4) [1]; P(3) + P(4) + P(5) = 0.1419 + 0.2128 + 0.2270 [1] = **0.582** [1]

**(b)** Any two, in context [2]: the probability of scoring is 0.4 for every shot; the outcome of each shot is independent of the outcomes of the others **[5]**

*Examiner insight:* "each shot is either a score or a miss" is true by definition and is unlikely to earn credit as an assumption.

**10.** 1 − 0.7ⁿ > 0.99, so 0.7ⁿ < 0.01 [1]; 0.7¹² = 0.0138 [1]; 0.7¹³ = 0.00969 [1]; least n = **13** [1] **[4]**

**11. (a)** X ~ Geo(0.1), so **E(X) = 10** [1]

**(b)** 1 − 0.9⁸ [1] = **0.570** [1]

**(c)** 0.9ⁿ < 0.1 [1]; 0.9²¹ = 0.109 and 0.9²² = 0.0985 [1]; **n = 22** [1] **[6]**

**12. (a)** q = 4.2 ÷ 6 = 0.7 [1], so **p = 0.3** [1]; n = 6 ÷ 0.3 = **20** [1]

**(b)** ²⁰C₆ × 0.3⁶ × 0.7¹⁴ [1] = **0.192** [1] **[5]**

## Where marks are usually lost

- "Fewer than 2" translated as X ≤ 2.
- Binomial conditions stated without context.
- The variance formula used without squaring E(X), or E(X²) found as [E(X)]².
- A least-n answer given from logarithms with the inequality reversed, or without testing neighbouring values.
- Probabilities in a table that do not add to 1, with no check.
