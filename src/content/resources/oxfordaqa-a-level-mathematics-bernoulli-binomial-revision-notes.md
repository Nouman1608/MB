---
title: "OxfordAQA A Level Mathematics: Bernoulli and Binomial Distributions — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- S1: Statistics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-s1-statistics-oxfordaqa-alevel-maths"
    subtopic: "s1-bernoulli-and-binomial-distributions-oxfordaqa-alevel-maths"
description: "Condensed recall notes on Bernoulli trials, the binomial distribution, and calculating binomial probabilities, mean and variance, for OxfordAQA International A-Level Mathematics (9660), sub-topic S1.3."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Bernoulli and Binomial Distributions study guide](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/).

## Bernoulli trial and distribution

A **Bernoulli trial** has exactly two outcomes: success (probability **p**) and failure (probability **1 − p**).

| Statistic | Bernoulli | Binomial (n trials) |
|---|---|---|
| Mean | E(X) = p | np |
| Variance | Var(X) = p(1 − p) | np(1 − p) |

A **binomial distribution** is the sum of **n independent** Bernoulli trials, written X ~ B(n, p). Its mean and variance are direct scaled-up versions of the single-trial values — build binomial formulas up from the Bernoulli ones rather than memorising them separately.

## Four conditions for a binomial model

1. A fixed number of trials, **n**.
2. Each trial has only **two possible outcomes**.
3. The probability of success, **p**, is **constant** across trials.
4. Trials are **independent** of each other.

Check all four before applying the binomial formula — sampling without replacement from a small population is a common condition-breaker (it violates independence), and exam questions sometimes describe exactly this scenario to test whether you notice.

## Worked example: binomial probability

A factory tests components with a 0.1 probability of a randomly selected component being defective. In a sample of 8, find P(exactly 2 defective).

```
Step 1: confirm conditions -- n = 8, p = 0.1, independent trials assumed
Step 2: P(X = x) = (nCx) x p^x x (1-p)^(n-x)
        P(X = 2) = (8C2) x (0.1)^2 x (0.9)^6
Step 3: 8C2 = 28
        P(X = 2) = 28 x 0.01 x 0.531441 ~= 0.149
```

Show the binomial coefficient (ⁿCₓ) as a distinct step — it allows partial credit if a later arithmetic step slips.

## Worked example: cumulative binomial probability using tables

Find P(X <= 3) for X ~ B(10, 0.3) using a cumulative binomial table rather than summing four separate formula calculations.

```
Step 1: confirm the binomial conditions hold (n = 10, p = 0.3, constant
        and independent)
Step 2: locate the row for n = 10, p = 0.3 in the cumulative binomial
        table
Step 3: read off P(X <= 3) directly as the tabulated value
```

The specification explicitly expects fluency with **both** routes -- the full formula calculation for a single value of X, and reading a cumulative table for P(X ≤ x) -- since summing several individual terms by hand is slower and more error-prone than reading one table value. Practise recognising which route a question is asking for from its wording: "find the probability that exactly..." usually points to the formula; "find the probability that at most..." or "no more than..." usually points to a cumulative table read.

## Deriving the binomial mean and variance conceptually

The specification's own framing expects more than quoting np and np(1 − p) — it expects you to explain why these follow from the single-trial Bernoulli values. Since a binomial random variable is the **sum of n independent Bernoulli trials**, and the mean of a sum of independent random variables is the sum of their individual means, E(X) for the binomial is simply n lots of the single-trial mean p, giving np. The same logic extends to variance: because the trials are independent, the variance of the sum equals the sum of the individual variances, giving n lots of p(1 − p), or np(1 − p). Being able to state this derivation in a sentence, not just the final formulas, is what separates a strong answer on this sub-topic from one that has only memorised the result.

## Key terms

**Bernoulli trial** — a single experiment with exactly two outcomes. **Bernoulli distribution** — the distribution of one Bernoulli trial, mean p, variance p(1 − p). **Binomial distribution** — the distribution of the number of successes in n independent, identical Bernoulli trials, X ~ B(n, p). **Independent trials** — outcomes that do not affect one another. **ⁿCₓ (n choose x)** — the number of ways to arrange x successes among n trials, n! / (x!(n − x)!).

## Common mistakes

- Applying the binomial formula without checking all four conditions hold.
- Confusing single-trial Bernoulli mean/variance (p, p(1 − p)) with the full binomial values (np, np(1 − p)).
- Miscalculating or omitting the binomial coefficient ⁿCₓ.
- Forgetting variance is np(1 − p) — standard deviation needs an extra square-root step.

## Quick self-test

1. State the four conditions required for a binomial distribution to apply.
2. Give the mean and variance of a single Bernoulli trial with probability p.
3. Give the mean and variance of X ~ B(n, p).
4. Calculate 5C2.
5. Why might sampling without replacement break the binomial model?

**Answers:** 1. Fixed number of trials n; two outcomes per trial; constant probability p; independent trials. 2. Mean = p, variance = p(1 − p). 3. Mean = np, variance = np(1 − p). 4. 5C2 = 10. 5. It removes independence, since removing an item changes the probability of success for the next trial.

## How this connects within the unit

S1.3 builds directly on S1.1 (further probability) and S1.2 (discrete random variables) earlier in Unit PSM1 -- the binomial distribution is itself an example of a discrete random variable, and the probability rules from S1.1 are the reason the binomial formula takes the form it does. Reviewing those two sub-topics alongside S1.3 makes the mean and variance derivations above considerably more intuitive than treating the formulas in isolation.

## Related resources

- [Bernoulli and Binomial Distributions study guide](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/)
- [Bernoulli and Binomial Distributions practice questions](/resources/oxfordaqa-a-level-mathematics-bernoulli-binomial-practice/)

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2 —
[oxfordaqa.com/9660](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf).
