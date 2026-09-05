---
title: "OxfordAQA A Level Mathematics: Bernoulli and Binomial Distributions — Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- S1: Statistics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-s1-statistics-oxfordaqa-alevel-maths"
    subtopic: "s1-bernoulli-and-binomial-distributions-oxfordaqa-alevel-maths"
description: "Original exam-style practice questions with full worked answers on Bernoulli trials, the conditions for a binomial distribution, calculating binomial probabilities, and the mean and variance of binomial and Bernoulli distributions."
author: "marlbridge-academic-team"
publishedDate: 2026-09-05
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Bernoulli and Binomial Distributions study guide](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/) · [Bernoulli and Binomial Distributions revision notes](/resources/oxfordaqa-a-level-mathematics-bernoulli-binomial-revision-notes/)

---

## Section A

**1.** State the **four** conditions required for a binomial distribution to apply. **[4]**

**2.** State the mean and variance of a single Bernoulli trial with probability of success p. **[2]**

## Section B

**3.** A biased coin has P(heads) = 0.35. It is tossed 6 times. Find the probability of exactly 4 heads. **[4]**

**4.** X ~ B(12, 0.25). Find the mean and variance of X. **[3]**

**5.** A bag contains 10 red and 5 blue balls. Five balls are drawn one at a time without replacement. Explain why the number of red balls drawn should not be modelled using a binomial distribution, and state what would need to change for the binomial model to apply. **[4]**

**6.** Derive the mean of a binomial distribution X ~ B(n, p) from the mean of a single Bernoulli trial, explaining your reasoning in full sentences rather than only quoting the formula. **[4]**

**7.** Describe how you would use a cumulative binomial table to find P(X ≤ 5) for X ~ B(15, 0.4), and explain why this approach is generally preferred over calculating each term of the formula separately. **[4]**

**8.** X ~ B(10, p) has variance 1.6. Find the two possible values of p. **[5]**

---

## Answers

**1.** **A fixed number of trials, n** [1]; **each trial has only two possible outcomes** [1]; **the probability of success, p, is constant across all trials** [1]; **the trials are independent of each other** [1].

**2.** Mean E(X) = **p** [1]. Variance Var(X) = **p(1 − p)** [1].

**3.** Confirm the conditions: n = 6, p = 0.35, trials independent [1].
P(X = 4) = ⁶C₄ × (0.35)⁴ × (0.65)² [1]
⁶C₄ = 15, (0.35)⁴ = 0.01500625, (0.65)² = 0.4225 [1]
P(X = 4) = 15 × 0.01500625 × 0.4225 = **0.0951** (3 s.f.) [1].

**4.** Mean = np = 12 × 0.25 = **3** [1] [1]. Variance = np(1 − p) = 12 × 0.25 × 0.75 = **2.25** [1].

**5.** Drawing without replacement means that **once a ball is removed, the probability of drawing a red ball on the next draw changes**, since the total number of balls and the number of red balls remaining are both different [1] [1]. This **violates the requirement that trials be independent and that p stays constant across all trials** [1], so the binomial model does not strictly apply. For the binomial model to apply, **each ball would need to be replaced (and the bag mixed) before the next draw**, keeping the composition of the bag, and therefore p, constant across all five draws [1].

**6.** A binomial random variable X ~ B(n, p) is the **sum of n independent, identically distributed Bernoulli trials** [1]. The **mean of a sum of independent random variables equals the sum of their individual means** [1]. Since each individual Bernoulli trial has mean p [1], summing n of them gives a total mean of **n × p = np** [1]. The same reasoning extends to variance: because the trials are **independent**, the variance of the sum equals the **sum of the individual variances**, giving n lots of p(1 − p), or **np(1 − p)** — stating this chain of reasoning, rather than only quoting the two final formulas, is what a strong answer on this sub-topic demonstrates [1].

**7.** First **confirm the binomial conditions hold** for X ~ B(15, 0.4) [1]; then **locate the row or column corresponding to n = 15 and p = 0.4** in the cumulative binomial table [1], and **read off the tabulated value for P(X ≤ 5) directly** [1]. This is preferred over calculating each term separately because **summing six individual formula calculations (P(X = 0) through P(X = 5)) by hand is slower and carries more opportunity for arithmetic error** than reading one value directly from a table that has already performed that summation [1].

**8.** Variance = np(1 − p), so 10 × p(1 − p) = 1.6 [1], giving **p(1 − p) = 0.16** [1].
Expanding: p − p² = 0.16, so **p² − p + 0.16 = 0** [1].
Using the quadratic formula: p = (1 ± √(1 − 0.64)) ÷ 2 = (1 ± 0.6) ÷ 2 [1].
So **p = 0.8 or p = 0.2** [1]. Both values are valid solutions of the variance equation, since p and 1 − p play symmetric roles in the product p(1 − p) — swapping which outcome is labelled "success" turns one solution into the other, so a full answer should give both roots rather than stopping at the first one found [1].

---

## Where marks are usually lost

- Applying the binomial formula without first checking all four conditions genuinely hold in the scenario described.
- Confusing single-trial Bernoulli mean/variance (p, p(1 − p)) with the full binomial values (np, np(1 − p)).
- Miscalculating or omitting the binomial coefficient ⁿCₓ.
- Giving only one root when a variance equation produces a quadratic in p, rather than both valid solutions.
- Describing dependence and non-constant probability as separate issues in a without-replacement scenario, rather than recognising that removing an item changes both at once.
