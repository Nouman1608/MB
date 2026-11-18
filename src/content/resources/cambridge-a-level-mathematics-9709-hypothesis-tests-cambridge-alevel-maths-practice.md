---
title: "Cambridge A Level Mathematics (9709): Hypothesis tests -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "hypothesis-tests-cambridge-alevel-maths"
description: "Twelve original Cambridge 9709 Paper 6 questions with mark-by-mark answers on binomial, Poisson and normal-mean tests, critical regions and error types."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section **6.5 Hypothesis tests** of Probability & Statistics 2 (Paper 6) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. A scientific calculator is allowed, but unsupported calculator answers earn no marks. Give non-exact answers to 3 significant figures. The number in square brackets after the last part of each question is the total for the whole question.

Related: the [6.5 Hypothesis tests study guide](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths/) and the [6.5 Hypothesis tests revision notes](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths-revision-notes/).

## Questions

### Section A: short questions

**1.** A factory tests whether the mean diameter of its bolts has changed from 8.0 mm.

**(a)** Describe a Type I error in this context.

**(b)** Describe a Type II error in this context. **[2]**

**2.** Accidents on a stretch of road occurred at random at a mean rate of 1.8 per month. After speed cameras were installed, there was 1 accident in the next 3 months. Test, at the 5% significance level, whether the mean rate of accidents has decreased. **[4]**

**3.** A shop claims that 40% of its customers use a loyalty card. The owner believes the proportion is higher. In a random sample of 15 customers, 10 use a loyalty card. Test the owner's belief at the 5% significance level. **[4]**

**4.** The times taken to assemble a chair are normally distributed with standard deviation 2.4 minutes. The mean time was 30 minutes. After a new worker joins, a random sample of 16 of her times has mean 31.1 minutes. Test, at the 5% significance level, whether her mean time is greater than 30 minutes. **[4]**

**5.** A coin is tossed 8 times to test whether it is biased. It will be declared biased if it shows either 0 heads or 8 heads. Find the probability of a Type I error. **[2]**

### Section B: longer questions

**6.** In a game, the probability of winning a prize is thought to be 0.3. A player wants to test whether this is correct, using 20 plays and a 10% significance level.

**(a)** Find the rejection region for the test.

**(b)** State the probability of a Type I error.

**(c)** The player wins 9 times. State the conclusion of the test in context. **[7]**

**7.** In a city, 30% of adults are thought to cycle to work. A researcher suspects the proportion is lower in one district. In a random sample of 150 adults from that district, 33 cycle to work.

**(a)** Justify the use of a normal approximation.

**(b)** Use a normal approximation to test the researcher's suspicion at the 5% significance level. **[7]**

**8.** Emergency calls to a small fire station arrive at random at a mean rate of 3 per day. Over a 10-day period of hot weather there were 41 calls. Use a suitable approximation to test, at the 1% significance level, whether the mean rate has increased. **[6]**

**9.** A machine is set to cut cables of mean length 50 cm. The lengths, x cm, of a random sample of 100 cables are summarised by Σx = 4870 and Σx² = 239 800.

**(a)** Find unbiased estimates of the population mean and variance.

**(b)** Test, at the 5% significance level, whether the machine's mean length differs from 50 cm.

**(c)** Explain why it was not necessary to know the distribution of the lengths. **[7]**

**10.** The masses of apples from an orchard are normally distributed with standard deviation 5 g. A test of H₀: μ = 80 against H₁: μ < 80 is carried out at the 2.5% level using a random sample of 25 apples.

**(a)** Find the set of values of the sample mean for which H₀ is rejected.

**(b)** State the probability of a Type I error.

**(c)** Find the probability of a Type II error if the true mean is 77 g. **[5]**

**11.** The number of faulty items produced by a machine in a day has a Poisson distribution with mean 2.2. A manager will decide that the machine needs servicing if 6 or more faulty items are produced in a day.

**(a)** Find the probability of a Type I error.

**(b)** Find the probability of a Type II error if the mean has risen to 4 per day.

**(c)** Explain what a Type II error would mean for the manager. **[5]**

**12.** A seed company claims that 60% of its seeds produce a flower. A gardener suspects that the proportion is lower and plants 10 seeds.

**(a)** Find the rejection region for a test at the 5% significance level.

**(b)** Find the probability of a Type II error if the true proportion is 0.3. **[5]**

## Answers

**1.** **(a)** Concluding that the mean diameter has changed from 8.0 mm when it has not [1].

**(b)** Concluding that the mean diameter is still 8.0 mm when it has in fact changed [1].

**2.** H₀: λ = 1.8, H₁: λ < 1.8 (per month); over 3 months use Po(5.4) [1]. P(X ≤ 1) = e^(−5.4)(1 + 5.4) [1] = 0.0289 [1]. 0.0289 < 0.05, so reject H₀: there is evidence at the 5% level that the mean accident rate has decreased [1].

**3.** H₀: p = 0.4, H₁: p > 0.4; X ~ B(15, 0.4) [1]. P(X ≥ 10) = 1 − P(X ≤ 9) [1] = 0.0338 [1]. 0.0338 < 0.05, so reject H₀: evidence at the 5% level that more than 40% of customers use a loyalty card [1].

**4.** H₀: μ = 30, H₁: μ > 30 [1]. z = (31.1 − 30)/(2.4/√16) = 1.833 [1]. 1.833 > 1.645 [1], so reject H₀: evidence at the 5% level that her mean assembly time is greater than 30 minutes [1].

**5.** P(X = 0) + P(X = 8) = 2 × 0.5⁸ [1] = **0.00781** [1].

**6.** **(a)** H₀: p = 0.3, H₁: p ≠ 0.3; X ~ B(20, 0.3); compare each tail with 0.05 [1]. Lower tail: P(X ≤ 3) = 0.1071, P(X ≤ 2) = 0.0355, so X ≤ 2 [1]. Upper tail: P(X ≥ 9) = 0.1133, P(X ≥ 10) = 0.0480, so X ≥ 10 [1]. Rejection region **X ≤ 2 or X ≥ 10** [1].

**(b)** 0.0355 + 0.0480 = **0.0834** (3 s.f.) [1].

**(c)** 9 is not in the rejection region [1], so there is insufficient evidence at the 10% level that the probability of winning a prize is not 0.3 [1].

**7.** **(a)** np = 45 and nq = 105 are both greater than 5 [1].

**(b)** H₀: p = 0.3, H₁: p < 0.3 [1]. X ≈ N(45, 31.5) [1]. P(X ≤ 33) ≈ P(Y < 33.5) [1]. z = (33.5 − 45)/√31.5 = −2.049 [1]. Φ(−2.049) = 0.0202 < 0.05 (or −2.049 < −1.645) [1], so reject H₀: evidence at the 5% level that the proportion who cycle to work is lower in this district [1].

**8.** H₀: λ = 30, H₁: λ > 30 for 10 days [1]. λ is large, so use N(30, 30) [1]. P(X ≥ 41) ≈ P(Y > 40.5) [1]. z = (40.5 − 30)/√30 = 1.917 [1]. 1.917 < 2.326 (or P = 0.0276 > 0.01) [1], so do not reject H₀: insufficient evidence at the 1% level that the mean rate of calls has increased [1].

**9.** **(a)** x̄ = **48.7** [1]. s² = (239 800 − 4870²/100)/99 = 2631/99 = **26.6** (3 s.f.) [1].

**(b)** H₀: μ = 50, H₁: μ ≠ 50 [1]. z = (48.7 − 50)/√(26.58/100) = −2.522 [1]. −2.522 < −1.960 [1], so reject H₀: evidence at the 5% level that the mean length differs from 50 cm [1].

**(c)** The sample is large, so by the Central Limit Theorem the sample mean is approximately normal [1].

**10.** **(a)** Reject when x̄ < 80 − 1.96 × 5/√25 [1], that is **x̄ < 78.04** [1].

**(b)** **0.025** [1].

**(c)** P(X̄ > 78.04 | μ = 77) = 1 − Φ((78.04 − 77)/1) [1] = 1 − Φ(1.04) = **0.149** [1].

**11.** **(a)** P(X ≥ 6 | λ = 2.2) = 1 − P(X ≤ 5) [1] = **0.0249** [1].

**(b)** P(X ≤ 5 | λ = 4) [1] = **0.785** [1].

**(c)** The manager decides the machine does not need servicing when its fault rate has in fact risen [1].

**12.** **(a)** H₀: p = 0.6, H₁: p < 0.6; X ~ B(10, 0.6) [1]. P(X ≤ 3) = 0.0548 > 0.05 and P(X ≤ 2) = 0.0123 < 0.05 [1]. Rejection region **X ≤ 2** [1].

**(b)** P(X ≥ 3 | p = 0.3) = 1 − P(X ≤ 2 | p = 0.3) [1] = 1 − 0.3828 = **0.617** [1].

## Where marks are usually lost

- Not scaling the Poisson mean in questions 2 and 8 to the period observed.
- Comparing a two-tailed tail probability with 10% instead of 5% in question 6.
- Missing or misdirected continuity corrections in questions 7 and 8.
- Writing hypotheses with x̄ rather than μ in questions 4 and 9.
- Quoting 0.05 as the Type I probability for a discrete test.
- Ending with "reject H₀" and no sentence in context.

## Next steps

Review any slips with the [Hypothesis tests study guide](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths/), and revisit the sample-mean results behind questions 9 and 10 in the [Sampling and estimation practice questions](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths-practice/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, Topic 6 Probability & Statistics 2 (Paper 6), section 6.5 Hypothesis tests.
