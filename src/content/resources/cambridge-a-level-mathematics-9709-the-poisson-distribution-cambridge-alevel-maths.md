---
title: "Cambridge A Level Mathematics (9709): The Poisson distribution"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.1
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "the-poisson-distribution-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 6 subtopic 6.1 in depth: Poisson probabilities, rescaling the mean, modelling conditions, and the Poisson and normal approximations."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.1 The Poisson distribution opens Probability & Statistics 2 (Paper 6) of Cambridge International AS & A Level Mathematics 9709. It introduces a distribution for counting random events in a fixed interval of time or space, then links it back to the binomial and forward to the normal distribution through two approximations. Questions in this subtopic combine a small amount of calculation with a good deal of judgement: is the Poisson model appropriate, what is the mean for this interval, and which approximation is justified?

The [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/) summarises the whole paper. This page goes further on 6.1 and is paired with the [Poisson distribution revision notes](/resources/cambridge-a-level-mathematics-9709-the-poisson-distribution-cambridge-alevel-maths-revision-notes/) and the [Poisson distribution practice questions](/resources/cambridge-a-level-mathematics-9709-the-poisson-distribution-cambridge-alevel-maths-practice/).

## What the syllabus asks for

Candidates should be able to:

- use formulae to calculate probabilities for the distribution Po(λ);
- use the fact that if X ~ Po(λ) then the mean and variance of X are each equal to λ (proofs are not required);
- understand the relevance of the Poisson distribution to the distribution of random events, and use the Poisson distribution as a model;
- use the Poisson distribution as an approximation to the binomial distribution where appropriate, knowing the conditions that n is large and p is small (approximately n > 50 and np < 5);
- use the normal distribution, with continuity correction, as an approximation to the Poisson distribution where appropriate, knowing the condition that λ is large (approximately λ > 15).

Paper 6 assumes the content of Paper 5, so the binomial and normal work from Probability & Statistics 1 is used freely here.

## The Poisson formula

If X ~ Po(λ), then

```
P(X = r) = e^(−λ) λʳ / r!,   r = 0, 1, 2, …
E(X) = λ,   Var(X) = λ
```

Unlike the binomial, there is no upper limit to r. "At least" probabilities therefore have to be found through the complement: P(X ≥ 3) = 1 − P(X ≤ 2).

**Worked example.** Telephone calls arrive at a help desk at random at a mean rate of 3 per 10 minutes.

- P(exactly 2 calls in 10 minutes): X ~ Po(3), so P(X = 2) = e^(−3) × 3²/2 = **0.224**.
- P(at least 3 calls in 20 minutes): the mean for 20 minutes is 6, so Y ~ Po(6) and P(Y ≥ 3) = 1 − e^(−6)(1 + 6 + 18) = 1 − 25e^(−6) = **0.938**.

The mean scales in proportion to the length of the interval. That step is the first thing to do in any Poisson question that changes the interval, and it is often worth a mark on its own.

## When is a Poisson model suitable?

A Poisson distribution models the number of events in a fixed interval when the events occur:

- **randomly**, so that they cannot be predicted individually;
- **independently** of one another;
- **singly**, so that two events cannot happen at exactly the same moment;
- at a **constant mean rate** throughout the interval.

In an exam answer, state the condition in the context: "breakdowns occur independently of one another" or "customers arrive at a constant average rate during the hour". A condition that obviously fails, such as more customers arriving at lunchtime than mid-morning, is a reason to doubt the model.

Because the mean and variance of a Poisson distribution are equal, data with a sample mean and variance that are close support a Poisson model, while a variance much larger than the mean suggests clustering, which a Poisson model would not capture.

## Working backwards to λ

If P(X = 0) = 0.2, then e^(−λ) = 0.2 and λ = ln 5 = **1.61**. If P(X = 2) = P(X = 3), then λ²/2 = λ³/6 and λ = 3. These reverse questions use the formula directly, so write it out with λ in place.

## The Poisson approximation to the binomial

When n is large and p is small, B(n, p) is close to Po(np). The syllabus guide is n > 50 and np < 5.

**Worked example.** 0.5% of the items produced by a machine are defective. Use a suitable approximation to find the probability that a delivery of 400 items contains at most one defective item.

X ~ B(400, 0.005). Since n = 400 > 50 and np = 2 < 5, use X ≈ Po(2).

```
P(X ≤ 1) ≈ e^(−2)(1 + 2) = 3e^(−2) = 0.406 (3 s.f.)
```

The exact binomial probability is 0.405, so the approximation is very good. The justification must quote both conditions with their values; "n is large and p is small" without numbers is weaker.

The Poisson approximation also works when p is close to 1: count failures instead of successes, so that the new p is small.

## The normal approximation to the Poisson

When λ is large (λ > 15 approximately), Po(λ) is close to N(λ, λ). The Poisson distribution is discrete, so a continuity correction is needed, exactly as for the binomial.

**Worked example.** The number of emails a manager receives on a working day has distribution Po(30). Find the probability that she receives at least 35 emails on a given day.

```
λ = 30 > 15, so use Y ~ N(30, 30)
P(X ≥ 35) ≈ P(Y > 34.5) = P(Z > 4.5/√30)
          = P(Z > 0.822) = 1 − 0.7944 = 0.206 (3 s.f.)
```

Note that both the mean and the variance are 30; the standard deviation is √30, not 30.

## Choosing the right distribution

| Situation | Distribution |
|---|---|
| Random events in an interval, mean λ given | Po(λ) |
| Mean λ is large (> 15) | approximate by N(λ, λ) with continuity correction |
| Binomial with n > 50 and np < 5 | approximate by Po(np) |
| Binomial with np > 5 and nq > 5 | approximate by N(np, npq) with continuity correction (Paper 5) |

## Common mistakes

- Forgetting to rescale λ when the interval changes.
- Using the standard deviation λ instead of √λ in a normal approximation.
- Leaving out the continuity correction when approximating Po(λ) by a normal distribution.
- Using a continuity correction for the Poisson approximation to the binomial: both are discrete, so none is needed.
- Stating modelling conditions with no reference to the context.
- Truncating the sum for P(X ≥ r) instead of using the complement.

## Exam technique

- **State a condition** for a Poisson model: choose one that is relevant to the context and write it about the events in the question.
- **Use a suitable approximation:** name the distribution with its parameter or parameters, give the condition with numbers, and apply a continuity correction if moving from discrete to continuous.
- **Find the probability:** write the formula with the numbers substituted before giving the final value.
- **Explain why** a model may not be suitable: point to a condition the context breaks, such as a rate that varies through the day.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 6.1 "The Poisson distribution" (Probability & Statistics 2, Paper 6).
