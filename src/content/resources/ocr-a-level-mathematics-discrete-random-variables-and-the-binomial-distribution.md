---
title: "OCR A Level Mathematics A: Discrete random variables and the binomial distribution (H240)"
seoTitle: "OCR A Level Maths Binomial Distribution Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Discrete random variables and the binomial distribution"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 127
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-distributions-ocr-alevel-maths"
description: "Study guide to discrete distributions and the binomial model B(n, p) for OCR A Level Mathematics A, with worked examples, mean and variance."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide follows the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It covers 2.04a to 2.04c, which are Stage 1 content (common with AS), and 2.04d, which is Stage 2 and so **A Level only**. The next unit applies the mean and variance formulae when a normal model is chosen.

Related pages: the [OCR Mathematics A hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the [revision notes](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-revision-notes/), the [practice set](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-practice/), the wider [Statistics guide](/resources/ocr-a-level-mathematics-statistics/), the [link to nCr in the binomial expansion](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational/) and the [free diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Stage |
|---|---|---|
| 2.04a | Use simple, finite, discrete probability distributions given as a table or a formula | Stage 1 (common with AS) |
| 2.04b | Use the binomial distribution as a model; know the conditions; separate conditions from assumptions | Stage 1 (common with AS) |
| 2.04c | Calculate binomial probabilities using the formula and calculator functions; use the notation X ~ B(n, p) | Stage 1 (common with AS) |
| 2.04d | Know and use μ = np and σ² = npq | Stage 2 (A Level only) |

Finding the mean and variance of a general distribution from its table is excluded by the specification, so those results appear here only for the binomial.

## Discrete random variables (2.04a)

A random variable is a number produced by a chance process. We write it with a capital letter, such as X, and write its possible values with a lower-case letter, such as x. It is **discrete** when it can only take separate values, usually whole numbers: a count of faulty items, a score on a spinner, a number of heads.

A **probability distribution** lists every possible value of X with its probability P(X = x). It can be given as a table or as a formula. Two facts hold for every distribution:

- each probability is at least 0 and at most 1;
- taken together, the probabilities sum to 1, so ΣP(X = x) = 1.

The second fact is the tool for almost every question. If one value is unknown, use the sum to find it. The distribution must also be **finite**, meaning there is a fixed list of values.

### Worked example 1: unknown in a table

The table shows the distribution of X.

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.15 | 3k | k | 0.25 |

Find k, then find P(X ≥ 2) and P(1 ≤ X < 3).

```
Sum is 1:  0.15 + 3k + k + 0.25 = 1
           4k + 0.40 = 1
           k = 0.15
P(X = 1) = 3 × 0.15 = 0.45,   P(X = 2) = 0.15
P(X ≥ 2) = P(X = 2) + P(X = 3) = 0.15 + 0.25 = 0.4
P(1 ≤ X < 3) = P(X = 1) + P(X = 2) = 0.45 + 0.15 = 0.6
```

Read the inequality signs carefully. The value 3 is included in X ≥ 2 and excluded from X < 3.

### Worked example 2: a formula

A distribution is given by P(X = x) = k/(x + 1) for x = 1, 2, 3. Find k and P(X ≤ 2).

```
Sum is 1:  k/2 + k/3 + k/4 = 1
           k(6/12 + 4/12 + 3/12) = 1
           13k/12 = 1,  so  k = 12/13
P(X = 1) = 6/13,  P(X = 2) = 4/13,  P(X = 3) = 3/13
P(X ≤ 2) = 6/13 + 4/13 = 10/13
```

Check: 6/13 + 4/13 + 3/13 = 1. Always run this check.

### Worked example 3: building a distribution

A fair six-sided die is rolled once. X is the number of factors of the score (including 1 and the score itself). The six scores give X = 1, 2, 2, 3, 2, 4 in order.

| Score | 1 | 2, 3 or 5 | 4 | 6 |
|---|---|---|---|---|
| x | 1 | 2 | 3 | 4 |
| P(X = x) | 1/6 | 3/6 | 1/6 | 1/6 |

Three of the six scores have exactly two factors, so P(X = 2) = 3/6 = 1/2. The probabilities sum to 6/6, so the table is complete. Then P(X ≥ 3) = 1/6 + 1/6 = 1/3.

## The binomial model (2.04b)

Many real situations count successes in a set of repeated trials. The binomial distribution is the model for that count. A random variable X has a binomial distribution when all four of these **conditions** hold:

1. There is a **fixed number of trials**, n.
2. Each trial has **two outcomes**, called success and failure.
3. The trials are **independent** of each other.
4. The probability of success, p, is the **same** for each trial.

Then X is the number of successes, and we write X ~ B(n, p). The probability of failure is q = 1 − p. Here n is a whole number and p is a probability. Note that X can take the values 0, 1, 2, …, n.

### Conditions and assumptions

The specification asks you to understand the distinction between conditions and assumptions. One way to keep them apart:

- A **condition** is a requirement of the binomial model itself. It is the same for every problem.
- An **assumption** is what you state about the real situation so that a condition can be taken to hold. It must mention the context.

The specification also expects you to pick out which conditions are relevant to a scenario and explain them in context. For example, 20 customers each ask for the same advertised phone. Suppose we model the number who buy it as B(20, 0.3).

- Condition: the trials are independent. Assumption in context: whether one customer buys the phone does not affect whether another customer buys it. This could fail if customers shop in groups and influence each other.
- Condition: p is constant. Assumption in context: every customer is equally likely to buy, with probability 0.3. This could fail if the 20 customers include both regular shoppers and first-time visitors.

### When the binomial model does not fit

- Five cards are dealt from a standard pack and X is the number of hearts. The trials are not independent, and p changes after each card, because the cards are not replaced.
- X is the number of throws of a die until the first six appears. The number of trials is not fixed.
- X is the number of days of rain in a month. Rain on one day affects the chance on the next, so independence is doubtful.

Whenever you reject or accept the model, say which condition fails or holds, and refer to the context.

## Calculating binomial probabilities (2.04c)

If X ~ B(n, p), the probability of exactly x successes is

> P(X = x) = nCx × pˣ × (1 − p)ⁿ⁻ˣ, for x = 0, 1, …, n

Here nCx is the number of ways of choosing which x trials are the successes. It is the same coefficient that appears in the binomial expansion, so Pascal's triangle gives it for small n. Each such arrangement has probability pˣqⁿ⁻ˣ.

### Worked example 4: the formula by hand

A café finds that each customer orders a dessert with probability 0.35, independently. Twelve customers arrive. Find the probability that exactly four order dessert.

Here X ~ B(12, 0.35).

```
P(X = 4) = 12C4 × 0.35⁴ × 0.65⁸
         = 495 × 0.0150063 × 0.0318645
         = 0.2367 (4 d.p.)
```

Write the substituted formula before the number. A calculator's binomial function gives the same value, and the specification says calculator functions may be used for this skill.

### Cumulative probabilities

The cumulative probability is P(X ≤ r), the chance of r or fewer successes. The cumulative function gives P(X ≤ r) directly, so every other inequality must be converted. Work with whole numbers:

| You need | Rewrite as |
|---|---|
| P(X < r) | P(X ≤ r − 1) |
| P(X ≥ r) | 1 − P(X ≤ r − 1) |
| P(X > r) | 1 − P(X ≤ r) |
| P(a ≤ X ≤ b) | P(X ≤ b) − P(X ≤ a − 1) |

### Worked example 5: cumulative values

Using X ~ B(12, 0.35) again, with values to 4 decimal places:

```
P(X ≤ 2)       = 0.1513
P(X ≥ 5)       = 1 − P(X ≤ 4) = 1 − 0.5833 = 0.4167
P(3 ≤ X ≤ 6)   = P(X ≤ 6) − P(X ≤ 2) = 0.9154 − 0.1513 = 0.7641
P(X > 7)       = 1 − P(X ≤ 7) = 1 − 0.9745 = 0.0255
```

The final answers are rounded from unrounded calculator values. If your subtraction of rounded values differs in the last digit, trust the calculator values. A small check is to keep one more figure while you work.

### Do the setup before you calculate

State the distribution first: "Let X be the number of customers who order dessert. Then X ~ B(12, 0.35)." That sentence shows the model and its parameters. It also stops you using p when the question gives you the failure probability.

## Mean and variance of a binomial distribution (2.04d, A Level only)

For X ~ B(n, p), the mean and variance are

> μ = np and σ² = npq, where q = 1 − p

The standard deviation is σ = √(npq). You need to know these formulae and use them. Their use in the specification is when choosing a particular normal model to approximate a binomial distribution, where the normal model takes the same mean and variance. The next unit covers that choice, so here you only need to find the values.

### Worked example 6: finding μ and σ²

X ~ B(80, 0.35).

```
q = 1 − 0.35 = 0.65
μ  = 80 × 0.35 = 28
σ² = 80 × 0.35 × 0.65 = 18.2
σ  = √18.2 = 4.27 (3 s.f.)
```

A normal model with these two values would be written N(28, 18.2).

### Worked example 7: working backwards

Y ~ B(n, p) has mean 12 and variance 7.2. Find n and p.

```
np = 12  and  npq = 7.2
Divide: q = 7.2 / 12 = 0.6,  so p = 0.4
n = 12 / 0.4 = 30
```

So Y ~ B(30, 0.4). Dividing the variance by the mean gives q straight away.

## Common errors

- Using P(X > r) as though it meant P(X ≥ r). Discrete variables make this difference matter.
- Writing P(X ≥ 5) = 1 − P(X ≤ 5). The correct complement of X ≥ 5 is X ≤ 4.
- Giving a list of conditions with no context. Say what the trial is, what counts as success, and why independence or constant p might fail.
- Using the binomial model for sampling without replacement from a small group.
- Forgetting that the probabilities in a table must add to 1, or not checking.
- Using npq as the standard deviation. It is the variance, so take the square root when σ is asked for.
- Writing q as the success probability. Check which of p and q the question gives you.

## Next steps

Condense this unit with the [revision notes](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-revision-notes/), then test yourself on the [practice set](/resources/ocr-a-level-mathematics-discrete-random-variables-and-the-binomial-distribution-practice/). Take one of the [free diagnostics](/diagnostics/) to find your weaker areas, and tick off 2.04a to 2.04d on the [checklist](/checklists/ocr/a-level/mathematics/).

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: sections 2.04a to 2.04d.
