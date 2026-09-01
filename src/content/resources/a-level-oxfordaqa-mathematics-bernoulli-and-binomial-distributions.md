---
title: "OxfordAQA A-Level Mathematics: Bernoulli and Binomial Distributions (9660)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- S1: Statistics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-s1-statistics-oxfordaqa-alevel-maths"
    subtopic: "s1-bernoulli-and-binomial-distributions-oxfordaqa-alevel-maths"
description: "Conditions for a Bernoulli distribution, deriving its mean and variance, and building the binomial distribution as a sum of independent Bernoulli trials -- S1.3 of OxfordAQA International AS and A-Level Mathematics (9660)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

This guide covers **S1.3 Bernoulli and Binomial Distributions**, from
Unit PSM1 (Statistics) in OxfordAQA International AS and A-level
Mathematics (9660), Version 5.2, International AS exams May/June 2018
onwards, International A-level exams May/June 2019 onwards.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL AS AND A-LEVEL MATHEMATICS (9660) — S1.3 BERNOULLI AND BINOMIAL DISTRIBUTIONS**

- Conditions for application of a Bernoulli distribution
- Mean and variance of a Bernoulli distribution, including derivations
of E(X) = p and Var(X) = p(1 − p)
- The binomial distribution, introduced as the sum of independent
Bernoulli trials
- Calculation of probabilities using the formula and tables, including
use of ⁿCₓ (n choose x) notation
- Mean, variance and standard deviation of a binomial distribution,
including deductions of np and np(1 − p) from the corresponding
Bernoulli values

## How to approach it

Build the binomial distribution up from the Bernoulli distribution
deliberately, rather than learning binomial formulas as a standalone
fact set — this is exactly how the specification frames it. A single
Bernoulli trial has only two outcomes (success, with probability p, and
failure, with probability 1 − p), with mean p and variance p(1 − p). A
binomial distribution is what results from summing n independent
Bernoulli trials, so its mean (np) and variance (np(1 − p)) are direct
scaled-up consequences of the single-trial values — being able to
explain this derivation, not just quote the formulas, is what the
specification's own "Additional information" column signals is
expected.

Before applying the binomial formula, always check the four conditions
for a binomial distribution explicitly: a fixed number of trials, n;
each trial has only two possible outcomes; the probability of success,
p, is constant across all trials; and the trials are independent of
each other. Exam questions sometimes describe a scenario that violates
one of these conditions (for example, sampling without replacement from
a small population, which breaks independence), and identifying that
the binomial model does not strictly apply is itself an assessable
skill.

This specification also expects you to be able to use tables to find
binomial probabilities directly, without computing every term by hand,
for standard combinations of n and p. Practise both routes — the full
formula calculation and reading a cumulative binomial table — since
exam questions may specify which method to use, or may reward either
approach when finding a cumulative probability such as P(X ≤ 3) across
several individual terms.

## Worked example: calculating a binomial probability

A factory tests components with a 0.1 probability of a randomly
selected component being defective. In a sample of 8 components, find
the probability that exactly 2 are defective.

```
Step 1: confirm binomial conditions
        n = 8 (fixed number of trials)
        p = 0.1 (constant probability of "success" = defective)
        independent trials assumed

Step 2: apply the binomial probability formula
        P(X = x) = (nCx) x p^x x (1-p)^(n-x)
        P(X = 2) = (8C2) x (0.1)^2 x (0.9)^6

Step 3: calculate
        8C2 = 28
        P(X = 2) = 28 x 0.01 x 0.531441 ~= 0.149
```

Showing the binomial coefficient calculation as a distinct step, rather
than folding it silently into a single line, is good exam practice
since it allows partial credit even if the final arithmetic slips.

## Key terms to define precisely

**Bernoulli trial** — a single random experiment with exactly two
possible outcomes, conventionally labelled success (probability p) and
failure (probability 1 − p). **Bernoulli distribution** — the
probability distribution of a single Bernoulli trial, with mean E(X) =
p and variance Var(X) = p(1 − p). **Binomial distribution** — the
probability distribution of the number of successes in n independent,
identically distributed Bernoulli trials, written X ~ B(n, p).
**Independent trials** — trials whose outcomes do not affect one
another, a condition required for the binomial model to apply exactly;
sampling without replacement from a small, finite population is a
common situation where trials are not truly independent. **ⁿCₓ (n
choose x)** — the binomial coefficient, giving the number of distinct
ways to arrange x successes among n trials, calculated as n! / (x!(n −
x)!). Every one of these terms appears in the specification's own
wording for S1.3, so using them precisely — rather than paraphrasing
loosely — is directly rewarded in how this content is assessed.

## Common mistakes

Applying the binomial formula without first checking that the four
conditions (fixed n, two outcomes, constant p, independence) genuinely
hold in the scenario described. Confusing the mean and variance
formulas for a single Bernoulli trial (p and p(1 − p)) with those for
the full binomial distribution (np and np(1 − p)), especially under
exam time pressure. Miscalculating the binomial coefficient ⁿCₓ, or
omitting it from the formula entirely. Forgetting that variance,
not standard deviation, is np(1 − p) — the standard deviation requires
an additional square root step.

## Quick revision checklist

- Learn the four conditions required for a binomial distribution to
apply.
- Be able to derive np and np(1 − p) conceptually from the single-trial
Bernoulli values p and p(1 − p).
- Practise calculating binomial probabilities using the full formula,
including the ⁿCₓ term, not just recalling table values.
- Keep variance and standard deviation clearly distinguished — the
latter requires a square root of the former.

S1.3 connects directly to S1.1 (Further probability) and S1.2
(Discrete random variables) earlier in this unit: the binomial
distribution is itself a specific example of a discrete random
variable, and the probability rules developed in S1.1 underpin why the
binomial formula takes the form it does. Reviewing those two sub-topics
alongside S1.3 makes the derivation of the binomial mean and variance
considerably more intuitive than treating the formulas in isolation.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification,
Version 5.2 —
[oxfordaqa.com/9660](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf).
