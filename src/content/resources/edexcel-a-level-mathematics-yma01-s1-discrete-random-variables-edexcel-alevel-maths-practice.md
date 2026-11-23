---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Discrete random variables -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-random-variables-edexcel-alevel-maths"
description: "Twelve original Edexcel IAL Maths S1 questions on discrete random variables with full answers: p(x), F(x), E(X), Var(X), games and linear coding."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover Unit S1, section 5 (topics 5.1 to 5.3): the concept of a discrete random variable, probability functions, cumulative distribution functions, and the mean and variance, including E(aX + b) and Var(aX + b). Give exact answers where possible, otherwise 3 significant figures.

Related: [discrete random variables revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-random-variables-edexcel-alevel-maths-revision-notes/) and the [discrete random variables study guide](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-random-variables-edexcel-alevel-maths/).

---

## Section A

**1.** The discrete random variable X has probability function P(X = x) = kx² for x = 1, 2, 3. Find the value of k and P(X ≥ 2). **[3]**

**2.** The random variable X has the distribution below. Find E(X) and F(1.5).

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.1 | 0.4 | 0.3 | 0.2 |

**[3]**

**3.** E(X) = 2.5 and E(X²) = 8.5. Find Var(X), and the mean and standard deviation of Y = 2X + 3. **[3]**

**4.** Explain why p(x) = (x − 2)/6 for x = 1, 2, 3, 4 cannot be a probability function. **[2]**

## Section B

**5.** The discrete random variable X takes the values 1, 2, 3, 4 and has cumulative distribution function F(x) = kx³.

**(a)** Find k. **[1]**

**(b)** Find the probability distribution of X. **[3]**

**(c)** Find P(X ≥ 3). **[1]**

**(d)** Find E(X). **[2]**

**6.** A charity game costs £2 to play. The prize X, in pounds, has this distribution.

| x | 0 | 2 | 5 | 10 |
|---|---|---|---|---|
| P(X = x) | 0.5 | 0.3 | 0.15 | 0.05 |

**(a)** Find E(X). **[2]**

**(b)** Find the expected gain per game for a player, and the charity's expected profit from 200 games. **[2]**

**(c)** Find Var(X). **[3]**

**(d)** All prizes are doubled. Write down the new variance. **[1]**

**7.** The random variable X takes the values 1, 2 and 3 only. E(X) = 2.2 and Var(X) = 0.56. Find the probability distribution of X. **[6]**

**8.** A fair coin is tossed three times. X is the number of heads minus the number of tails.

**(a)** Find the probability distribution of X. **[3]**

**(b)** Find E(X) and Var(X). **[3]**

**9.** Two independent observations, X₁ and X₂, are taken of the random variable in Question 2.

**(a)** Find P(X₁ + X₂ = 4). **[2]**

**(b)** Find P(X₁ = X₂). **[2]**

**10.** For a random variable X, E(5 − 2X) = −1 and Var(5 − 2X) = 12. Find E(X), Var(X) and E(X²). **[3]**

**11.** The discrete random variable X has probability function p(x) = (2x + 1)/k for x = 0, 1, 2, 3, 4.

**(a)** Find k. **[2]**

**(b)** Find P(1 < X ≤ 3). **[1]**

**(c)** State the mode of X. **[1]**

**12.** Explain what is meant by a discrete random variable, giving an example of a discrete random variable and of a variable that is continuous. **[3]**

---

## Answers

**1.** k(1 + 4 + 9) = 1 [1], so **k = 1/14** [1]. P(X ≥ 2) = (4 + 9)/14 = **13/14** [1].

**2.** E(X) = 0 + 0.4 + 0.6 + 0.6 [1] = **1.6** [1]. F(1.5) = P(X ≤ 1.5) = P(X ≤ 1) = 0.1 + 0.4 = **0.5** [1].

**3.** Var(X) = 8.5 − 2.5² = **2.25** [1]. E(Y) = 2(2.5) + 3 = **8** [1]. Var(Y) = 4 × 2.25 = 9, so sd(Y) = **3** [1].

**4.** p(1) = −1/6, which is negative, and probabilities cannot be negative [1]. (Also the values sum to (−1 + 0 + 1 + 2)/6 = 1/3, not 1.) Either reason scores; the second mark is for stating the condition violated [1].

**5. (a)** F(4) = 64k = 1, so **k = 1/64** [1].

**(b)** p(1) = F(1) = 1/64; p(2) = 8/64 − 1/64 = 7/64 [1]; p(3) = 27/64 − 8/64 = 19/64 [1]; p(4) = 1 − 27/64 = 37/64 [1].

**(c)** P(X ≥ 3) = 1 − F(2) = 1 − 8/64 = **7/8** [1].

**(d)** E(X) = (1 × 1 + 2 × 7 + 3 × 19 + 4 × 37)/64 = 220/64 [1] = **55/16 = 3.44** (3 s.f.) [1].

**6. (a)** E(X) = 0 + 0.6 + 0.75 + 0.5 [1] = **£1.85** [1].

**(b)** Expected gain = 1.85 − 2 = **−£0.15** per game (an expected loss of 15p) [1]. Charity's expected profit = 200 × 0.15 = **£30** [1].

**(c)** E(X²) = 0 + 4(0.3) + 25(0.15) + 100(0.05) = 9.95 [1]. Var(X) = 9.95 − 1.85² [1] = **6.53** (3 s.f.) [1].

**(d)** Var(2X) = 4 × 6.5275 = **26.1** (3 s.f.) [1].

**7.** Let the probabilities be p, q, r. p + q + r = 1 [1]; p + 2q + 3r = 2.2 [1]; E(X²) = 0.56 + 2.2² = 5.4, so p + 4q + 9r = 5.4 [1]. Subtracting: q + 2r = 1.2 and 3q + 8r = 4.4 [1]. Solving: **r = 0.4, q = 0.4** [1], **p = 0.2** [1].

**8. (a)** Possible values −3, −1, 1, 3 [1]. P(X = −3) = P(X = 3) = 1/8 [1]; P(X = −1) = P(X = 1) = 3/8 [1].

**(b)** E(X) = **0** by symmetry (or by calculation) [1]. E(X²) = (9 + 3 + 3 + 9)/8 = 3 [1], so **Var(X) = 3 − 0 = 3** [1].

**9. (a)** Pairs (1, 3), (3, 1), (2, 2) [1]: 0.4 × 0.2 + 0.2 × 0.4 + 0.3 × 0.3 = **0.25** [1].

**(b)** 0.1² + 0.4² + 0.3² + 0.2² [1] = 0.01 + 0.16 + 0.09 + 0.04 = **0.3** [1].

**10.** 5 − 2E(X) = −1, so **E(X) = 3** [1]. 4Var(X) = 12, so **Var(X) = 3** [1]. E(X²) = 3 + 3² = **12** [1].

**11. (a)** (1 + 3 + 5 + 7 + 9)/k = 1 [1], so **k = 25** [1].

**(b)** P(X = 2) + P(X = 3) = (5 + 7)/25 = **12/25** [1].

**(c)** **4**, since p(4) = 9/25 is the largest probability [1].

**12.** A discrete random variable is a quantity whose value depends on the outcome of a random experiment [1] and which can take only separate (countable) values [1]. Example: the number of sixes in ten rolls of a die is discrete, while the mass of an apple is continuous [1].

---

## Where marks are usually lost

- Forgetting to subtract [E(X)]² in Questions 3, 6 and 8.
- In Question 5, using F(x) itself as the probability distribution instead of taking differences.
- Missing one of the orders in Question 9(a).
- Writing Var(5 − 2X) = −2Var(X) or 5 − 2Var(X) in Question 10.
- Leaving out the third equation, from E(X²), in Question 7.
