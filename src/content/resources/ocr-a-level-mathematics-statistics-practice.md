---
title: "OCR A Level Mathematics: Statistics — Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Statistics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "For first assessment 2018"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
description: "Original exam-style practice questions with full worked answers on sampling, probability, the binomial and normal distributions, and hypothesis testing, for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-04
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Statistics study guide](/resources/ocr-a-level-mathematics-statistics/) | [Statistics revision notes](/resources/ocr-a-level-mathematics-statistics-revision-notes/)

---

## Section A

**1.** State two conditions required for a binomial distribution to be an appropriate model. **[2]**

**2.** A school wants to survey students, split proportionally across four year groups of different sizes. Name and briefly describe the most suitable sampling method. **[2]**

## Section B

**3.** A biased die lands on a six with probability 0.25. It is rolled 8 times. Find the probability of getting exactly 2 sixes. **[3]**

**4.** Heights of a species of plant are modelled as X ~ N(30, 16), measured in cm.

**(a)** Find P(X > 34). **[3]**
**(b)** Find P(26 < X < 34). **[3]**

**5.** A factory claims that 10% of its light bulbs are defective. In a random sample of 60 bulbs, 10 are found to be defective. Test at the 5% significance level whether the true proportion of defective bulbs is greater than claimed. **[6]**

**6.** Events A and B are such that P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2.

**(a)** Find P(A ∪ B). **[2]**
**(b)** Determine, with a reason, whether A and B are independent. **[2]**

**7.** A random variable is defined as X ~ N(μ, 25). It is known that P(X > 40) = 0.1587. Find μ. **[4]**

**8.** A dataset of 15 exam scores has a mean of 62 and the sum of squared deviations from the mean is 840. Calculate the standard deviation of the dataset. **[2]**

## Answers

**1.** Any two: a **fixed number of trials** [1]; each trial has **only two possible outcomes** [1]; trials are **independent** [1]; the **probability of success is constant** across trials [1].

**2.** **Stratified sampling** [1]: the population is divided into groups (strata) — here, the four year groups — and a sample is taken from each stratum in proportion to its size in the population, then combined [1].

**3.** X ~ B(8, 0.25) [1]. P(X = 2) = C(8,2) × 0.25² × 0.75⁶ = 28 × 0.0625 × 0.1780 [1] = **0.3115** (4 d.p.) [1] (award full marks for equivalent unrounded working).

**4. (a)** σ = √16 = 4 [1]; z = (34 − 30) ÷ 4 = 1 [1]; P(X > 34) = P(Z > 1) = 1 − 0.8413 = **0.1587** [1].
**(b)** z for 26: (26 − 30) ÷ 4 = −1 [1]; P(26 < X < 34) = P(−1 < Z < 1) = 1 − 2 × 0.1587 [1] = **0.6826** [1].

**5.** H₀: p = 0.10 (defect rate unchanged) [1]; H₁: p > 0.10 (defect rate has increased) — one-tailed, since the question asks specifically about an increase [1]. Under H₀, X ~ B(60, 0.10) [1]. For a one-tailed test at the 5% significance level, the critical region is the set of highest values x for which P(X ≥ x) ≤ 0.05: P(X ≥ 10) = 0.0731, which is too large, but P(X ≥ 11) = 0.0342, which is ≤ 0.05, so the critical region is **X ≥ 11** [1]. The observed value, 10 defective bulbs, lies **outside** this critical region [1], so there is insufficient evidence at the 5% level to conclude that the true defective rate has increased — the factory's original 10% claim cannot be rejected [1].

**6. (a)** P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.4 + 0.5 − 0.2 = **0.7** [2].
**(b)** If independent, P(A ∩ B) should equal P(A) × P(B) = 0.4 × 0.5 = 0.2 [1]. Since this **matches** the given P(A ∩ B) = 0.2, A and B **are independent** [1].

**7.** Since P(X > 40) = 0.1587, and 0.1587 corresponds to P(Z > 1) from the standard normal distribution [1], the value 40 must be exactly 1 standard deviation above the mean [1]. σ = √25 = 5 [1], so μ = 40 − 5 = **35** [1].

**8.** Variance = sum of squared deviations ÷ n = 840 ÷ 15 = 56 [1]; standard deviation = √56 = **7.48** (3 s.f.) [1].

## A note on recognising the correct distribution

Question 3 and question 4 look superficially similar — both ask for a probability involving a defined variable — but they require entirely different methods, and choosing the wrong one is the single most common error across this topic. A binomial model applies when the situation involves a fixed, countable number of discrete trials, each with the same two possible outcomes and the same probability of success, as in rolling a die a set number of times. A normal model applies instead to continuous data that clusters symmetrically around a mean, such as a physical measurement like height, and is handled by standardising to a z-value rather than by any combinatorial calculation. Before starting any distribution question, it is worth explicitly stating which of the two situations applies and why, since this single sentence of justification is often what separates a fully correct method from one that has quietly applied the wrong model to data it happens to superficially resemble.

## Where marks are usually lost

- Attempting a binomial calculation on continuous data, or a normal-distribution calculation on discrete count data, without checking which model the scenario actually describes.
- Stating a hypothesis test's conclusion as simply "reject H0" without writing it back into the context of the original question.
- Getting the direction of a one-tailed test wrong relative to the wording of the question — testing for a decrease when the question asks about an increase, or vice versa.
- Forgetting to take a square root when a distribution is given in terms of variance rather than standard deviation.
- Testing for independence by comparing P(A ∩ B) only informally, rather than explicitly calculating and comparing it against P(A) × P(B).

## Approaching statistics questions

Before any probability calculation, identify explicitly which distribution the scenario describes and state the reason, since this single judgement determines the entire method that follows. For any distribution given as N(μ, variance), always take the square root of the stated variance to find the standard deviation before standardising, since substituting the variance directly into the standardisation formula in place of the standard deviation is a common and entirely avoidable error. For hypothesis-testing questions specifically, write out the null and alternative hypotheses formally in terms of the population parameter before attempting any calculation, identify whether the test is one-tailed or two-tailed directly from the question's wording, and always finish by writing the conclusion back into the context of the original scenario rather than stopping at a bare "reject" or "do not reject" statement, since OCR's mark schemes consistently reward this final contextual step as a distinct, separately creditable part of the answer.
