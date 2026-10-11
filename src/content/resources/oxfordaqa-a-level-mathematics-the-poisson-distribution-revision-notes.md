---
title: "OxfordAQA International AS and A-level Mathematics: The Poisson distribution (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Poisson Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "The Poisson distribution"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 201
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-poisson-distribution-oxfordaqa-alevel-maths"
description: "Condensed revision notes on the Poisson distribution for OxfordAQA International A-level Mathematics, with formulae, methods, a self-test and common slips."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense section S2.1 (Poisson distribution) of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2. Per the specification this belongs to International A-level (A2) Unit S2 (Statistics) and is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution/).

Related pages: the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution-practice/), the [Bernoulli and binomial revision notes](/resources/oxfordaqa-a-level-mathematics-bernoulli-binomial-revision-notes/) and the [free 10-minute diagnostics](/diagnostics/).

## Key facts at a glance

| Item | Result |
|---|---|
| Notation | X ~ Po(λ), where λ is the mean number of events in the interval |
| Probability function | P(X = r) = e^(−λ) λ^r / r!, for r = 0, 1, 2, ... |
| Mean | E(X) = λ |
| Variance | Var(X) = λ |
| Standard deviation | √λ |
| Sum of independent variables | Po(a) + Po(b) ~ Po(a + b) |
| Approximating a binomial | B(n, p) ≈ Po(np) when n is large and p is small |

## Conditions

For a Poisson model, events must:

- occur singly
- occur at random
- occur independently of each other
- occur at a constant average rate

Always tie each condition to the context. State which condition might fail and how. For example, if breakdowns come in clusters, the events are not independent and the variance will exceed the mean.

Poisson versus binomial:

| Binomial B(n, p) | Poisson Po(λ) |
|---|---|
| Fixed number of trials, n | No fixed number of trials |
| Counts successes, at most n | Counts events, no upper limit |
| Mean np, variance np(1 − p) | Mean and variance both λ |

## Method: probabilities from the formula

1. Identify the interval and write X ~ Po(λ) with the correct λ for that interval.
2. Substitute into e^(−λ) λ^r / r!.
3. Use the complement for "at least": P(X ≥ 1) = 1 − P(X = 0).
4. Round at the end, to at least 3 significant figures unless told otherwise.

Reminder: for X ~ Po(4), P(X = 3) = e^(−4) × 4³ / 3! = 0.01832 × 64 / 6 = 0.1954. Then P(X ≤ 2) = e^(−4) (1 + 4 + 8) = 0.2381, so P(X ≥ 3) = 1 − 0.2381 = 0.7619.

## Method: using cumulative values

Whether the values come from a table or are given in the question:

| You want | Write |
|---|---|
| P(X = r) | P(X ≤ r) − P(X ≤ r − 1) |
| P(X < r) | P(X ≤ r − 1) |
| P(X ≥ r) | 1 − P(X ≤ r − 1) |
| P(X > r) | 1 − P(X ≤ r) |
| P(a ≤ X ≤ b) | P(X ≤ b) − P(X ≤ a − 1) |

Check with a short list of integers. For P(X ≥ 5), the values 5, 6, 7 ... remain, so remove 0 to 4.

## Method: changing the interval

New λ = old rate × new length. If the rate is 12 per hour, then 30 minutes gives λ = 6 and 5 minutes gives λ = 1. Write the new distribution as the first line of working. A common structure is "X ~ Po(λ)" for the first interval and "Y ~ Po(new λ)" for the second.

## Method: Poisson approximation to the binomial

1. Check n is large and p is small.
2. Put λ = np.
3. Replace B(n, p) with Po(λ).
4. State that the approximation is being used.

Reminder: X ~ B(80, 0.025) gives λ = 2. Then P(X = 3) ≈ e^(−2) × 8 / 6 = 0.1804, against the exact binomial value of 0.1827.

The reason it works: the binomial variance np(1 − p) tends to np as p tends to 0, which matches the Poisson property that the mean and the variance are equal.

## Mean and variance

- Mean = variance = λ, so standard deviation = √λ.
- If the standard deviation is 2.5, then the variance is 6.25, so λ = 6.25.
- If data has mean much smaller than variance, the Poisson model is a poor fit. Say why in context.
- Do not derive these formally. The specification asks for the deduction from the binomial mean and variance.

## Sums of independent Poisson variables

If X ~ Po(2) and Y ~ Po(3) are independent, then X + Y ~ Po(5). The rule is a result and needs no proof. Reminder: P(X + Y = 4) = e^(−5) × 5⁴ / 4! = 0.1755.

Must-know distinctions:

- The sum of two independent Poisson variables is Poisson. The difference is not.
- Add rates, not standard deviations.
- Independence must be stated or assumed in context.
- Adding two Poisson variables over the same interval is the same idea as a longer interval for one variable.

## Worked reminders

### Reminder A: a small rate

Faults in a cable occur at random at a mean rate of 0.5 per metre. For one metre, X ~ Po(0.5).

```
P(X = 0) = e^(−0.5) = 0.6065
P(X = 1) = e^(−0.5) × 0.5 = 0.3033
P(X = 2) = e^(−0.5) × 0.25 / 2 = 0.0758
P(X ≥ 1) = 1 − 0.6065 = 0.3935
```

With a small λ, most of the probability sits on 0 and 1. The probabilities fall away quickly after that.

### Reminder B: linked probabilities

X ~ Po(λ) and P(X = 4) = 1.25 × P(X = 5). The ratio P(X = 5) / P(X = 4) equals λ/5, because e^(−λ) cancels and the powers and factorials leave one factor of λ over 5.

```
P(X = 5) / P(X = 4) = λ/5 = 1/1.25 = 0.8
λ = 4
```

### Reminder C: testing a model

A sample of 50 days gives a mean of 3.2 breakdowns per day and a variance of 7.9. For a Poisson model the mean and variance should be close. Here the variance is much larger than the mean, so the model is doubtful. Comment in context: breakdowns may be clustered, or the rate may change from day to day.

### Useful values of e^(−λ)

Know how to produce these on your calculator, and give four significant figures in working:

| λ | 0.5 | 0.7 | 1.2 | 2.5 | 3.6 | 4 |
|---|---|---|---|---|---|---|
| e^(−λ) | 0.6065 | 0.4966 | 0.3012 | 0.08208 | 0.02732 | 0.01832 |

## Setting out an answer

A short, clear layout keeps the marks available even if the arithmetic slips.

1. Define the variable and the interval: "Let X be the number of faults in one metre."
2. State the distribution with its parameter: "X ~ Po(0.5)."
3. Write the probability in terms of X before calculating: "P(X ≥ 1) = 1 − P(X = 0)."
4. Show the substitution into the formula or the cumulative values.
5. Give the answer to at least 3 significant figures, and a short sentence if the question is set in context.

For a "state a condition" question, write one sentence that names the condition and refers to the situation: "Faults occur independently, so a fault at one point does not make a fault at another point more likely."

## Quick self-test

1. State two conditions needed for a Poisson model of the number of flaws along a cable.
2. Write down the formula for P(X = r) when X ~ Po(λ).
3. Find P(X = 2) when X ~ Po(1.5).
4. If P(X = 0) = 0.2 for a Poisson variable, find λ to 3 significant figures.
5. X ~ Po(3). Find P(X ≤ 1).
6. Calls arrive at 12 per hour. State the distribution of the number of calls in a 30-minute period, and find the probability of at most 4 calls.
7. State the mean and the variance of Po(0.8).
8. X ~ Po(2.5) and Y ~ Po(1.5) are independent. Find P(X + Y ≤ 3).
9. Why must p be small before you approximate B(n, p) by Po(np)?
10. A Poisson variable has standard deviation 2. Find its mean.

### Answers

1. Any two of: flaws occur singly, at random, independently, at a constant average rate per unit length.
2. P(X = r) = e^(−λ) λ^r / r!, for r = 0, 1, 2, ...
3. e^(−1.5) × 1.5² / 2 = 0.22313 × 1.125 = 0.2510.
4. e^(−λ) = 0.2, so λ = ln 5 = 1.61.
5. e^(−3) (1 + 3) = 0.04979 × 4 = 0.1991.
6. Y ~ Po(6). P(Y ≤ 4) = e^(−6) (1 + 6 + 18 + 36 + 54) = 0.002479 × 115 = 0.2851.
7. Mean 0.8, variance 0.8.
8. X + Y ~ Po(4). P(≤ 3) = e^(−4) (1 + 4 + 8 + 32/3) = 0.018316 × 23.6667 = 0.4335.
9. The binomial variance np(1 − p) is close to the Poisson variance np only when 1 − p is close to 1.
10. Variance = 4, so the mean is 4.

## Where marks are usually lost

- Giving a condition in general terms, with no link to the situation described.
- Using the wrong λ after the interval has changed.
- Treating P(X ≥ r) as 1 − P(X ≤ r) rather than 1 − P(X ≤ r − 1).
- Dropping a term in "at most" probabilities, especially P(X = 0).
- Approximating a binomial by a Poisson without checking that p is small.
- Rounding e^(−λ) too early and losing accuracy in the final answer.
- Claiming a Poisson model fits because the data are counts, without comparing mean and variance.
- Using standard deviations rather than rates when adding Poisson variables.
- Treating the difference of two Poisson variables as Poisson.

## Official syllabus

These notes follow the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section 3.4 (International A-level Unit S2: Statistics), S2.1 Poisson distribution, published by OxfordAQA.
