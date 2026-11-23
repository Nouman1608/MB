---
title: "Cambridge A Level Mathematics (9709): The normal distribution -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "the-normal-distribution-cambridge-alevel-maths"
description: "Twelve original 9709 Paper 5 questions on 5.5: normal probabilities, reverse problems, unknown mean and standard deviation, binomial approximation."
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
> mark tariffs -- Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

These questions cover subtopic 5.5 The normal distribution of Cambridge International AS & A Level Mathematics 9709 (Paper 5). Use normal distribution tables, show your standardisation in full, and give answers to 3 significant figures.

Related: [normal distribution study guide](/resources/cambridge-a-level-mathematics-9709-the-normal-distribution/) | [normal distribution revision notes](/resources/cambridge-a-level-mathematics-9709-the-normal-distribution-revision-notes/)

## Section A

**1.** X ~ N(50, 16). Find P(X < 56). **[2]**

**2.** The masses of a type of apple are normally distributed with mean 120 g and standard deviation 15 g. Find the probability that a randomly chosen apple has mass more than 100 g. **[2]**

**3.** Z ~ N(0, 1). Find P(−0.5 < Z < 1.2). **[2]**

**4.** X ~ N(30, 2.5²). Find the value of k such that P(X > k) = 0.05. **[3]**

**5.** The masses of bags of flour are normally distributed with mean 500 g. 2% of bags have mass less than 490 g. Find the standard deviation. **[3]**

**6.** For any normal distribution, find the proportion of values that lie within 1.5 standard deviations of the mean. **[2]**

## Section B

**7.** The lengths of fish of a certain species are normally distributed with mean 28 cm and standard deviation 3.2 cm.

**(a)** Find the probability that a randomly chosen fish has length between 25 cm and 32 cm.

**(b)** In a sample of 250 of these fish, find the expected number longer than 32 cm.

**(c)** Find the length that is exceeded by 80% of these fish. **[7]**

**8.** The times taken to complete a task are normally distributed. 15% of people take more than 50 minutes and 40% take less than 35 minutes. Find the mean and standard deviation of the times. **[5]**

**9.** 45% of people in a town prefer brand A. A random sample of 80 people is taken.

**(a)** Show that a normal approximation to the number who prefer brand A is suitable.

**(b)** Use this approximation to find the probability that more than 40 people in the sample prefer brand A. **[5]**

**10.** X ~ B(100, 0.2). Use a suitable approximation to find P(X = 20), justifying your choice of approximation. **[4]**

**11.** The diameters of bolts made by a machine are normally distributed with mean μ mm and standard deviation 0.05 mm. Bolts with diameter more than 8.1 mm are rejected, and 10% of bolts are rejected for this reason.

**(a)** Find μ.

**(b)** Bolts with diameter less than 7.95 mm are also rejected. Find the probability that a randomly chosen bolt is rejected for being too small.

**(c)** Three bolts are chosen at random. Find the probability that exactly one of them is rejected. **[8]**

**12.** X ~ N(40, σ²) and P(X < 34) = 0.2.

**(a)** Write down P(X > 46).

**(b)** Write down P(34 < X < 46).

**(c)** Find σ. **[4]**

## Answers

**1.** z = (56 − 50)/4 = 1.5 [1]; Φ(1.5) = **0.933** [1] **[2]**

*Examiner insight:* 16 is the variance, so σ = 4. Dividing by 16 gives z = 0.375 and no credit.

**2.** z = (100 − 120)/15 = −1.333 [1]; P = Φ(1.333) = **0.909** [1] **[2]**

**3.** Φ(1.2) − (1 − Φ(0.5)) = 0.8849 − 0.3085 [1] = **0.576** [1] **[2]**

**4.** P(X < k) = 0.95, so z = 1.645 [1]; (k − 30)/2.5 = 1.645 [1]; **k = 34.1** [1] **[3]**

**5.** Area 0.02 to the left, so z = −2.054 [1]; (490 − 500)/σ = −2.054 [1]; **σ = 4.87 g** [1] **[3]**

**6.** P(−1.5 < Z < 1.5) = 2Φ(1.5) − 1 [1] = 2 × 0.9332 − 1 = **0.866** [1] **[2]**

**7. (a)** z-values (25 − 28)/3.2 = −0.9375 and (32 − 28)/3.2 = 1.25 [1]; Φ(1.25) − (1 − Φ(0.9375)) = 0.8944 − 0.1743 [1] = **0.720** [1]

**(b)** P(X > 32) = 1 − 0.8944 = 0.1056 [1]; 250 × 0.1056 = 26.4, so about **26 fish** [1]

**(c)** P(X < a) = 0.2, so z = −0.842 [1]; a = 28 − 0.842 × 3.2 = **25.3 cm** [1] **[7]**

**8.** (50 − μ)/σ = 1.036 [1]; (35 − μ)/σ = −0.253 [1]; subtracting, 15 = 1.289σ [1]; **σ = 11.6** [1]; μ = 35 + 0.253 × 11.64 = **37.9** [1] **[5]**

*Examiner insight:* 40% below 35 means 35 is below the mean, so its z-value is negative.

**9. (a)** np = 80 × 0.45 = 36 and nq = 80 × 0.55 = 44, both greater than 5 [1]

**(b)** Y ~ N(36, 19.8) [1]; "more than 40" means X ≥ 41, so P(Y > 40.5) [1]; z = 4.5/√19.8 = 1.011 [1]; 1 − Φ(1.011) = **0.156** [1] **[5]**

**10.** np = 20 and nq = 80, both greater than 5, so use N(20, 16) [1]; P(19.5 < Y < 20.5) [1]; z = ±0.125 [1]; 2Φ(0.125) − 1 = 2 × 0.5497 − 1 = **0.0995** [1] **[4]**

**11. (a)** P(X < 8.1) = 0.9, so z = 1.282 [1]; (8.1 − μ)/0.05 = 1.282 [1]; **μ = 8.04** (8.0359) [1]

**(b)** z = (7.95 − 8.0359)/0.05 = −1.718 [1]; 1 − Φ(1.718) = **0.0429** [1]

**(c)** P(rejected) = 0.1 + 0.0429 = 0.1429 [1]; 3 × 0.1429 × 0.8571² [1] = **0.315** [1] **[8]**

**12. (a)** 46 is as far above 40 as 34 is below it, so **0.2** [1]

**(b)** 1 − 0.2 − 0.2 = **0.6** [1]

**(c)** (34 − 40)/σ = −0.842 [1]; **σ = 7.13** [1] **[4]**

## Where marks are usually lost

- Variance used in place of standard deviation.
- z-values with the wrong sign in reverse problems.
- Continuity correction omitted or in the wrong direction.
- Only one of np > 5 and nq > 5 checked.
- Standardisation written without numbers, so the method mark cannot be awarded.
