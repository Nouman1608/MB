---
title: "Cambridge A Level Mathematics (9709): Linear combinations of random variables -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "linear-combinations-of-random-variables-cambridge"
description: "Twelve original 9709 Paper 6 questions on 6.2: expectation and variance, normal totals and differences, comparisons and Poisson sums, with answers."
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

These questions cover subtopic 6.2 Linear combinations of random variables of Cambridge International AS & A Level Mathematics 9709 (Paper 6). All random variables in a question are independent unless stated otherwise. Give answers to 3 significant figures.

Related: [linear combinations study guide](/resources/cambridge-a-level-mathematics-9709-linear-combinations-of-random-variables-cambridge/) | [linear combinations revision notes](/resources/cambridge-a-level-mathematics-9709-linear-combinations-of-random-variables-cambridge-revision-notes/)

## Section A

**1.** E(X) = 8 and Var(X) = 3. Find E(5X − 2) and Var(5X − 2). **[2]**

**2.** E(X) = 10, Var(X) = 4, E(Y) = 6 and Var(Y) = 2.5. Find E(2X − 3Y) and Var(2X − 3Y). **[3]**

**3.** X ~ N(30, 4). State the distribution of 3X + 5, giving its parameters. **[2]**

**4.** X ~ Po(1.2) and Y ~ Po(2.3). Find P(X + Y ≤ 2). **[3]**

**5.** X ~ Po(3). By considering its mean and variance, show that 2X does not have a Poisson distribution. **[2]**

**6.** X₁, X₂ and X₃ are independent observations of X ~ N(20, 9). State the distributions of X₁ + X₂ + X₃ and of 3X₁. **[2]**

## Section B

**7.** The mass of an empty jar is normally distributed with mean 150 g and standard deviation 5 g. The mass of jam put into a jar is normally distributed with mean 450 g and standard deviation 12 g.

**(a)** Find the probability that a filled jar has mass more than 610 g.

**(b)** Twelve filled jars are packed into a crate. The mass of an empty crate is normally distributed with mean 500 g and standard deviation 30 g. Find the probability that a packed crate has mass more than 7800 g. **[8]**

**8.** In a 400 m race, Ana's times are normally distributed with mean 62.0 s and standard deviation 1.5 s, and Bel's times are normally distributed with mean 63.5 s and standard deviation 2.0 s. Find the probability that Bel beats Ana in a race between them. **[5]**

**9.** The masses of large tins are normally distributed with mean 820 g and standard deviation 15 g. The masses of small tins are normally distributed with mean 400 g and standard deviation 8 g.

**(a)** Find the probability that a randomly chosen large tin has more than twice the mass of a randomly chosen small tin.

**(b)** Find the probability that a randomly chosen large tin has more mass than two randomly chosen small tins together. **[7]**

**10.** Faults occur at random on machine A at a mean rate of 0.8 per day and, independently, on machine B at a mean rate of 1.5 per day.

**(a)** Find the probability that the total number of faults on the two machines over a 2-day period is at most 3.

**(b)** Find the probability that on a given day there are exactly 2 faults in total, both on machine A. **[6]**

**11.** The random variable X has mean 4 and variance 2, and Y has mean 7 and variance 5. X₁, X₂ and X₃ are independent observations of X. Find the mean and variance of X₁ + X₂ + X₃ − Y. **[3]**

**12.** X ~ N(50, 3²) and Y ~ N(40, 4²). Find the value of k such that P(X − Y > k) = 0.05. **[4]**

## Answers

**1.** E = 5 × 8 − 2 = **38** [1]; Var = 25 × 3 = **75** [1] **[2]**

**2.** E = 20 − 18 = **2** [1]; Var = 4 × 4 + 9 × 2.5 [1] = **38.5** [1] **[3]**

**3.** Mean 3 × 30 + 5 = 95 [1]; variance 9 × 4 = 36, so **N(95, 36)** [1] **[2]**

**4.** X + Y ~ Po(3.5) [1]; e^(−3.5)(1 + 3.5 + 3.5²/2) [1] = **0.321** [1] **[3]**

**5.** E(2X) = 6 and Var(2X) = 4 × 3 = 12 [1]; for a Poisson variable the mean equals the variance, and 6 ≠ 12 [1] **[2]**

**6.** Total: **N(60, 27)** [1]; 3X₁: **N(60, 81)** [1] **[2]**

**7. (a)** F = J + K, E(F) = 600 [1]; Var(F) = 25 + 144 = 169 [1]; z = (610 − 600)/13 = 0.769 [1]; 1 − Φ(0.769) = **0.221** [1]

**(b)** T = F₁ + … + F₁₂ + C, E(T) = 12 × 600 + 500 = 7700 [1]; Var(T) = 12 × 169 + 30² = 2928 [1]; z = 100/√2928 = 1.848 [1]; 1 − Φ(1.848) = **0.0323** [1] **[8]**

*Examiner insight:* the twelve jars are separate jars, so Var(T) includes 12 × 169, not 144 × 169.

**8.** Bel wins if B < A, i.e. A − B > 0 [1]; E(A − B) = −1.5 [1]; Var(A − B) = 2.25 + 4 = 6.25 [1]; z = 1.5/2.5 = 0.6 [1]; P = 1 − Φ(0.6) = **0.274** [1] **[5]**

**9. (a)** D = L − 2S: E(D) = 820 − 800 = 20 [1]; Var(D) = 225 + 4 × 64 = 481 [1]; P(D > 0) = P(Z > −20/√481) [1] = Φ(0.912) = **0.819** [1]

**(b)** E = 820 − 800 = 20; Var(L − S₁ − S₂) = 225 + 64 + 64 = 353 [1]; z = −20/√353 = −1.064 [1]; P = Φ(1.064) = **0.856** [1] **[7]**

*Examiner insight:* (a) and (b) have the same mean but different variances. "Twice the mass of a small tin" is 2S; "two small tins" is S₁ + S₂.

**10. (a)** Total over 2 days ~ Po(2 × 2.3) = Po(4.6) [1]; P(≤ 3) = e^(−4.6)(1 + 4.6 + 4.6²/2 + 4.6³/6) [1] = **0.326** [1]

**(b)** A has 2 faults and B has none [1]: e^(−0.8) × 0.8²/2 × e^(−1.5) [1] = **0.0321** [1] **[6]**

**11.** Mean = 3 × 4 − 7 = **5** [1]; Var = 3 × 2 + 5 [1] = **11** [1] **[3]**

**12.** X − Y ~ N(10, 25) [1]; (k − 10)/5 = 1.645 [1]; k = 10 + 8.225 [1] = **18.2** [1] **[4]**

## Where marks are usually lost

- Variances subtracted for a difference.
- The total of several independent items treated as a multiple of one item.
- Coefficients not squared in the variance.
- Variance used instead of standard deviation when standardising.
- A comparison not rewritten as "combination > 0" before calculating.
