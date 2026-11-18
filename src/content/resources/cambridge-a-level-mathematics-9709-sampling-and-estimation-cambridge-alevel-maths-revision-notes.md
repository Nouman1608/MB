---
title: "Cambridge A Level Mathematics (9709): Sampling and estimation -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.4
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "sampling-and-estimation-cambridge-alevel-maths"
description: "Revision notes for Cambridge 9709 section 6.4: sample mean distribution, CLT, unbiased estimates, confidence intervals, key terms, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for section **6.4 Sampling and estimation** of Paper 6. For full explanations and worked examples, use the [Sampling and estimation study guide](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths/).

## The six things to recall

1. A **sample** is part of a **population**. It must be random so that every member has the same chance of selection and the sample is not systematically different from the population.
2. X̄ is a random variable: E(X̄) = μ and Var(X̄) = σ²/n. Its standard deviation, σ/√n, is often called the **standard error**.
3. If X is normal, X̄ ~ N(μ, σ²/n) **exactly**, whatever n is.
4. If X is not normal (or unknown) and n is large, the **Central Limit Theorem** gives X̄ ≈ N(μ, σ²/n).
5. Unbiased estimates: x̄ for μ, and s² = (Σx² − (Σx)²/n)/(n − 1) for σ².
6. Confidence intervals: x̄ ± z σ/√n for a mean; p̂ ± z√(p̂(1 − p̂)/n) for a proportion from a large sample.

## Random numbers in one routine

Number the population (for 650 people: 001 to 650). Take digits from a random number table in groups of three. Keep a group only if it is in range and not already used. Stop when the sample is complete. Knowledge of named methods such as quota or stratified sampling is not required by the syllabus, so do not spend exam time on them.

## Which distribution for X̄?

| Population | Sample size | Distribution of X̄ | Reason to quote |
|---|---|---|---|
| Normal, σ known | Any n | N(μ, σ²/n) exactly | X is normal |
| Not normal or unknown | Large n | N(μ, σ²/n) approximately | Central Limit Theorem |
| Not normal or unknown | Small n | Not covered by these results | Neither applies |

For a large sample with σ unknown, use s from the sample in place of σ.

## Critical z values for intervals

| Confidence level | z |
|---|---|
| 90% | 1.645 |
| 95% | 1.960 |
| 98% | 2.326 |
| 99% | 2.576 |

For an unusual level, such as 92%, the tail on each side is 4%, so find z with Φ(z) = 0.96 (z = 1.751).

## Key terms

| Term | Meaning |
|---|---|
| Population | The whole set of items of interest |
| Sample | The items actually observed |
| Random sample | Every member, and every possible group of the given size, equally likely to be chosen |
| Biased sample | One likely to differ systematically from the population |
| Sample mean X̄ | A random variable: its value changes from sample to sample |
| Unbiased estimate | Varies between samples but is correct on average |
| Central Limit Theorem | For large n, X̄ is approximately normal whatever the population |
| Confidence interval | A range calculated by a method that captures the parameter in a stated percentage of samples |
| Width of interval | 2 × z × standard error; it shrinks in proportion to 1/√n |

## Formula shortcuts

- Coded data: if y = x − a, then x̄ = a + ȳ and s² is computed from Σy and Σy² unchanged.
- s² = n/(n − 1) × (the variance found by dividing by n).
- To find n from a required half-width h: n ≥ (zσ/h)², then round **up**.
- To find a confidence level from an interval: z = half-width ÷ standard error, then level = 2Φ(z) − 1.
- Probability that k independent 95% intervals all contain μ: 0.95ᵏ.

## Exam traps

- **σ versus σ/√n.** A question about "the mean of 25 items" needs the standard error, not σ.
- **"By the CLT" with a normal population.** The CLT is not needed and examiners may withhold the reasoning mark.
- **Small sample, non-normal population.** No interval or probability from these results is valid; say so if asked to comment.
- **n − 1, not n,** for the unbiased variance estimate.
- **Proportion intervals use p̂(1 − p̂)/n,** not σ²/n.
- **Rounding a sample size down** leaves the requirement unmet.
- **Interval written the wrong way round** or as a single value: always give (lower, upper).
- **Using an interval to check a claim:** a claimed value inside the interval is consistent with the data; it does not prove the claim.

## Self-test

1. X ~ N(40, 6²). State the distribution of the mean of 16 observations.
2. Using question 1, find P(X̄ > 41).
3. A population has standard deviation 12. Find the smallest n so that the standard deviation of X̄ is at most 1.5.
4. Find unbiased estimates of μ and σ² from: 5, 8, 6, 9, 7.
5. For 40 values, Σx = 1520 and Σx² = 58 600. Find unbiased estimates of μ and σ².
6. Use question 5 to find a 95% confidence interval for μ.
7. Why does question 6 not need the population to be normal?
8. In a random sample of 150, 45 people own a bicycle. Find a 90% confidence interval for the proportion.
9. A sample size is multiplied by 4. What happens to the width of a confidence interval for μ?
10. Three independent 95% intervals for μ are calculated. Find the probability that at least one does not contain μ.
11. A shop surveys customers on Saturday mornings to estimate weekly spending of all its customers. Give one reason the sample may be biased.
12. State the z value for a 98% confidence interval.

## Answers

1. X̄ ~ N(40, 36/16), that is N(40, 2.25), exactly, because X is normal.
2. z = (41 − 40)/1.5 = 0.667; P = 1 − Φ(0.667) = **0.252** (3 s.f.).
3. 12/√n ≤ 1.5 gives √n ≥ 8, so **n = 64**.
4. Σx = 35, Σx² = 255. x̄ = **7**; s² = (255 − 35²/5)/4 = 10/4 = **2.5**.
5. x̄ = 1520/40 = **38**; s² = (58 600 − 1520²/40)/39 = 840/39 = **21.5** (3 s.f.).
6. 38 ± 1.96 × √(21.54/40) = 38 ± 1.44, giving **(36.6, 39.4)**.
7. n = 40 is large, so the Central Limit Theorem makes X̄ approximately normal; s is used in place of σ.
8. p̂ = 0.3; 0.3 ± 1.645 × √(0.3 × 0.7/150) = 0.3 ± 0.0616, giving **(0.238, 0.362)**.
9. The standard error is divided by √4 = 2, so the width **halves**.
10. 1 − 0.95³ = **0.143** (3 s.f.).
11. Customers who shop only on weekdays cannot be chosen, and Saturday shoppers may buy more (or less) per visit, so the sample is not random.
12. **z = 2.326**.

## Links

- [Sampling and estimation practice questions](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths-practice/)
- [Probability & Statistics 2 revision notes](/resources/a-level-maths-9709-probability-statistics-2-revision-notes/)
- [Hypothesis tests revision notes](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths-revision-notes/)
