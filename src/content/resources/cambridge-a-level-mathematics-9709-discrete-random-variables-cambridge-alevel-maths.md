---
title: "Cambridge A Level Mathematics (9709): Discrete random variables"
resourceType: "study-guides"
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
description: "Cambridge 9709 Paper 5 subtopic 5.4 in depth: building probability distribution tables, E(X) and Var(X), binomial and geometric models, and finding n or p."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 5.4 Discrete random variables turns the probability rules of 5.3 into distributions: complete lists of the values a random variable can take, with their probabilities. Paper 5 of Cambridge International AS & A Level Mathematics 9709 tests three things here. Can you build a distribution table from a described situation? Can you find its mean and variance? And can you recognise when the binomial or geometric distribution is the right model, then use it accurately?

The [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/) gives an overview of the whole paper. This guide is paired with the [discrete random variables revision notes](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-cambridge-alevel-maths-revision-notes/) and the [discrete random variables practice questions](/resources/cambridge-a-level-mathematics-9709-discrete-random-variables-cambridge-alevel-maths-practice/).

## What the syllabus asks for

Candidates should be able to:

- draw up a probability distribution table relating to a given situation involving a discrete random variable X, and calculate E(X) and Var(X);
- use formulae for probabilities for the binomial and geometric distributions, and recognise practical situations where these distributions are suitable models, using the notations B(n, p) and Geo(p);
- use formulae for the expectation and variance of the binomial distribution and for the expectation of the geometric distribution. Proofs are not required.

The syllabus defines Geo(p) as the distribution with P(X = r) = p(1 − p)^(r − 1) for r = 1, 2, 3, …, so X counts the trials up to and including the first success. Notice that the variance of the geometric distribution is not on the list.

## Building a distribution table

A distribution table lists every possible value of X with its probability, and the probabilities must add to 1. The work is in finding each probability from the situation, usually with a tree diagram or counting.

**Worked example.** A bag contains 3 red and 5 blue counters. Two counters are taken at random without replacement. X is the number of red counters taken. Find the distribution of X, E(X) and Var(X).

```
P(X = 0) = 5/8 × 4/7 = 20/56
P(X = 2) = 3/8 × 2/7 = 6/56
P(X = 1) = 1 − 20/56 − 6/56 = 30/56
```

| x | 0 | 1 | 2 |
|---|---|---|---|
| P(X = x) | 5/14 | 15/28 | 3/28 |

```
E(X)  = Σx p = 0 + 30/56 + 12/56 = 42/56 = 3/4
E(X²) = Σx² p = 0 + 30/56 + 24/56 = 54/56 = 27/28
Var(X) = E(X²) − [E(X)]² = 27/28 − 9/16 = 45/112 ≈ 0.402
```

*Annotation:* finding P(X = 1) by subtraction is quick, but it hides any earlier mistake. A check by direct calculation, 2 × (3/8 × 5/7) = 30/56, confirms the table. X is **not** binomial here: the draws are without replacement, so the probability of red changes between draws.

## Distributions with an unknown constant

If P(X = x) = kx for x = 1, 2, 3, 4, then k(1 + 2 + 3 + 4) = 1, so k = 1/10. Then E(X) = (1 + 4 + 9 + 16)/10 = 3 and E(X²) = (1 + 8 + 27 + 64)/10 = 10, so Var(X) = 10 − 9 = 1. Questions sometimes give two unknown probabilities and a value of E(X); the two equations "probabilities add to 1" and "Σxp = E(X)" then solve together.

## The binomial distribution

X ~ B(n, p) when there is a **fixed number n of trials**, each trial has **two outcomes** (success or failure), the trials are **independent**, and the **probability of success p is constant**.

```
P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ,   r = 0, 1, …, n
E(X) = np,   Var(X) = np(1 − p)
```

**Worked example.** 15% of seeds of a variety fail to germinate. Ten seeds are planted. Find the probability that at least two fail.

X ~ B(10, 0.15). "At least two" is easiest through its complement:

```
P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)
         = 1 − 0.85¹⁰ − 10 × 0.15 × 0.85⁹
         = 1 − 0.1969 − 0.3474 = 0.456 (3 s.f.)
```

When stating suitability, link each condition to the context: "each seed either germinates or fails; seeds germinate independently of one another; the probability of failure is the same for every seed". A list of conditions with no context earns little.

## Finding n

A typical reverse problem: each attempt succeeds with probability 0.2. Find the least number of attempts needed for the probability of at least one success to exceed 0.95.

```
1 − 0.8ⁿ > 0.95   →   0.8ⁿ < 0.05
0.8¹³ = 0.0550 (too large),   0.8¹⁴ = 0.0440 (small enough)
```

So **n = 14**. Logarithms give n > 13.4 directly, but remember that dividing by ln 0.8, which is negative, reverses the inequality. Testing the two neighbouring values, as above, is a safe check and shows clearly why 14 is the least value.

## The geometric distribution

X ~ Geo(p) models the number of trials up to and including the **first** success, with independent trials and constant p. There is no fixed number of trials.

```
P(X = r) = p(1 − p)^(r − 1),   r = 1, 2, 3, …
P(X > r) = (1 − p)ʳ           (the first r trials all fail)
P(X ≤ r) = 1 − (1 − p)ʳ
E(X) = 1/p
```

For X ~ Geo(0.1), the probability that the first success happens on one of trials 3 to 6 inclusive is P(X > 2) − P(X > 6) = 0.9² − 0.9⁶ = 0.81 − 0.5314 = **0.279**. Using the "all fail" form avoids adding four separate terms.

## Binomial or geometric?

| Feature of the question | Model |
|---|---|
| "Out of 20 attempts, how many succeed?" | B(20, p) |
| "How many attempts until the first success?" | Geo(p) |
| "The first success is on the 5th attempt" | Geo(p): P(X = 5) |
| "Exactly one success in the first 5 attempts" | B(5, p): P(X = 1) |

The last two rows look alike but differ. With q = 1 − p, the first success on the 5th attempt has probability pq⁴, while exactly one success in five attempts allows the success to be on any of the five, so its probability is 5pq⁴.

## Common mistakes

- Using a binomial model for draws without replacement.
- Writing P(X > 3) as 1 − P(X ≤ 2) instead of 1 − P(X ≤ 3) for a discrete variable.
- Forgetting to square E(X) in Var(X) = E(X²) − [E(X)]².
- Treating "the first success on trial r" as binomial.
- Giving the variance of a geometric distribution, which is not on the syllabus; a question will not ask for it.
- Rounding intermediate probabilities to 2 significant figures before adding.

## Exam technique

- **Draw up the probability distribution:** a table with every value of X, each probability as an exact fraction where possible, and a check that the total is 1.
- **Show that** P(X = a) is a given value: show the tree branches or counts that produce it.
- **State an assumption** or **condition** for a binomial model: phrase it in context and choose the condition the question can challenge (usually independence or constant probability).
- **Find the least n:** show the inequality and the values on either side of the boundary.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 5.4 "Discrete random variables" (Probability & Statistics 1, Paper 5).
