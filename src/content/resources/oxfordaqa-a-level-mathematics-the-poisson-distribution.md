---
title: "OxfordAQA International AS and A-level Mathematics: The Poisson distribution (9660)"
seoTitle: "OxfordAQA A-level Maths Poisson Distribution Guide"
resourceType: "study-guides"
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
description: "A worked study guide to the Poisson distribution for OxfordAQA International A-level Mathematics: conditions, probabilities, mean and variance, and sums."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide covers section S2.1 (Poisson distribution) of the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2. The specification places this content in International A-level (A2) Unit S2 (Statistics). It is not examined at International AS. The guide teaches every outcome in S2.1 from scratch and works each one through in full.

Related pages: the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), the [revision notes](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution-revision-notes/), the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution-practice/) and the earlier [Bernoulli and binomial distributions guide](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/). To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Outcome in S2.1 | What you must be able to do |
|---|---|
| Conditions for a Poisson distribution | Decide whether a situation can be modelled by Po(λ), and say why in context |
| Poisson as a limiting form of the binomial | Use n large, p small, np = λ to approximate a binomial |
| Probabilities from formula and tables | Calculate P(X = r) and cumulative probabilities, including values of e^−λ from a calculator |
| Mean, variance and standard deviation | Know that all three follow from λ, and use this to find λ or test a model |
| Sum of independent Poisson variables | Use the result that the sum is Poisson with the rates added (result only, no proof) |

## 1. When does a Poisson model apply?

A Poisson distribution counts how many times something happens in a fixed interval of time, length, area or volume. Typical cases are calls arriving at a switchboard in an hour, flaws along a length of cable, or typing errors on a page.

If X is the number of events in the interval, we write X ~ Po(λ). The parameter λ is the average number of events in that interval. For X ~ Po(λ) to be a sensible model, these conditions must hold:

- events occur singly (two events do not happen at exactly the same instant)
- events occur at random
- events occur independently of one another
- events occur at a constant average rate, so the mean number in an interval is proportional to its size

Compare this with the binomial. A binomial has a fixed number of trials and counts successes. A Poisson has no fixed number of trials: the count could in principle be any non-negative whole number, 0, 1, 2, 3, and so on, with no upper limit.

In an exam you are usually asked to state a condition and relate it to the context. "Events are independent" earns little. "The calls from different customers are independent of each other" is what the question wants.

Conditions can fail. Buses arriving in a rush-hour queue do not arrive at a constant rate. Faults in a machine that tends to fail in clusters are not independent. Say what is wrong, then say what effect it has: clustering makes the variance larger than the mean.

## 2. Calculating probabilities

For X ~ Po(λ), the probability function is:

P(X = r) = e^(−λ) × λ^r / r!, for r = 0, 1, 2, 3, ...

The values of e^(−λ) come from a calculator. The specification names this skill explicitly, so be ready to work from the formula and not only from tables. Keep e^(−λ) as one number and multiply each time.

### Worked example 1: using the formula

Typing errors in a printed report occur at random, independently, at a mean rate of 1.8 per page. Let X be the number of errors on one page. Find (a) P(X = 0), (b) P(X = 2), (c) P(X ≥ 1).

```
X ~ Po(1.8)
(a) P(X = 0) = e^(−1.8) × 1.8⁰ / 0! = e^(−1.8) = 0.1653
(b) P(X = 2) = e^(−1.8) × 1.8² / 2! = 0.16530 × 3.24 / 2 = 0.2678
(c) P(X ≥ 1) = 1 − P(X = 0) = 1 − 0.1653 = 0.8347
```

Part (c) uses the complement. "At least one" is the cheapest case to do this way, because the alternative needs infinitely many terms.

### Tables

Cumulative Poisson tables give P(X ≤ r) for chosen values of λ. In the questions below, the values you need are supplied in the question, so the method matters more than the source. The three moves are:

- P(X = r) = P(X ≤ r) − P(X ≤ r − 1)
- P(X ≥ r) = 1 − P(X ≤ r − 1)
- P(a ≤ X ≤ b) = P(X ≤ b) − P(X ≤ a − 1)

The most common slip is the "r − 1" in the second and third lines. Writing out the integers the inequality includes removes the doubt: X ≥ 9 means 9, 10, 11 ..., so you remove 0 to 8.

### Worked example 2: cumulative values

The number of calls to a helpdesk in an hour is modelled by X ~ Po(6). You are given: P(X ≤ 3) = 0.1512, P(X ≤ 4) = 0.2851, P(X ≤ 8) = 0.8472, P(X ≤ 9) = 0.9161. Find (a) P(X = 4), (b) P(X > 8), (c) P(4 ≤ X ≤ 8).

```
(a) P(X = 4) = P(X ≤ 4) − P(X ≤ 3) = 0.2851 − 0.1512 = 0.1339
(b) P(X > 8) = P(X ≥ 9) = 1 − P(X ≤ 8) = 1 − 0.8472 = 0.1528
(c) P(4 ≤ X ≤ 8) = P(X ≤ 8) − P(X ≤ 3) = 0.8472 − 0.1512 = 0.6960
```

In (b), "greater than 8" starts at 9, so you subtract the cumulative probability up to 8, not up to 9. The value P(X ≤ 9) is a distractor here.

## 3. Changing the interval

The rate is proportional to the size of the interval. If the mean is 2.5 per hour, the mean in 90 minutes is 3.75, and in 20 minutes it is 2.5/3 = 0.8333. Always write down the new distribution before calculating anything. This is where the constant-rate condition is used.

### Worked example 3

Emails to a small office arrive at random at a mean rate of 2.5 per hour. Find the probability that (a) at most 2 arrive in a 90-minute period, (b) at most 1 arrives in a 20-minute period.

```
(a) 90 minutes = 1.5 hours, so λ = 2.5 × 1.5 = 3.75, X ~ Po(3.75)
    P(X ≤ 2) = e^(−3.75) (1 + 3.75 + 3.75²/2)
             = 0.023518 × 11.78125 = 0.2771
(b) 20 minutes = 1/3 hour, so λ = 2.5/3 = 0.8333, Y ~ Po(0.8333)
    P(Y ≤ 1) = e^(−0.8333) (1 + 0.8333)
             = 0.43460 × 1.8333 = 0.7968
```

Do not write "P(X ≤ 2) = P(X = 2)". "At most 2" means 0, 1 or 2, so three terms are needed.

## 4. The Poisson as a limit of the binomial

Suppose X ~ B(n, p), where n is large and p is small. Put λ = np. As n becomes large and p becomes small with np held fixed at λ, the binomial probabilities approach the Poisson probabilities for Po(λ). So for n large and p small you may use Po(np) in place of B(n, p).

The condition "p small" matters as much as "n large". The binomial variance is np(1 − p), which is close to np only when p is small. A binomial with n = 100 and p = 0.5 is not helped by this.

### Worked example 4

A factory packs bolts, and each bolt is faulty with probability 0.012, independently. In a box of 300 bolts, X is the number of faulty bolts. Find P(X = 2) (a) using the binomial distribution and (b) using a Poisson approximation, and comment.

```
(a) X ~ B(300, 0.012)
    P(X = 2) = 300C2 × 0.012² × 0.988^298 = 0.17689
(b) n is large and p is small, so use Po(300 × 0.012) = Po(3.6)
    P(X = 2) = e^(−3.6) × 3.6² / 2 = 0.027324 × 6.48 = 0.17706
```

The two answers agree to three significant figures (0.177 each). The approximation is good because n = 300 is large and p = 0.012 is small.

## 5. Mean, variance and standard deviation

For X ~ Po(λ):

```
E(X) = λ     Var(X) = λ     standard deviation = √λ
```

You do not need to derive these formally. The specification asks you to deduce them from the binomial results. For B(n, p), the mean is np and the variance is np(1 − p). As p gets close to 0, the factor (1 − p) gets close to 1, so the variance tends to np. Since np = λ, both the mean and the variance tend to λ.

Because mean and variance are equal, a Poisson model can be tested against data. If a sample has mean 3.2 but variance 7.9, the data is much more spread out than Po(3.2) allows. That points to events that are not independent, or a rate that is not constant.

### Worked example 5: finding λ

X ~ Po(λ) and P(X = 3) = 0.9 × P(X = 2). Find λ, and then find P(X = 2).

```
P(X = 3) / P(X = 2) = [e^(−λ) λ³ / 6] / [e^(−λ) λ² / 2] = λ/3
So λ/3 = 0.9, giving λ = 2.7
P(X = 2) = e^(−2.7) × 2.7² / 2 = 0.067206 × 3.645 = 0.2450
```

Notice that e^(−λ) cancels in a ratio. When a question links two probabilities, divide them first.

## 6. Sums of independent Poisson variables

If X ~ Po(a) and Y ~ Po(b) are independent, then X + Y ~ Po(a + b). You use this as a result. The specification does not require a proof. The same idea extends to any number of independent Poisson variables: add the rates.

This is also the reason rates scale with the interval in section 3. A count over 3 days is the sum of three daily counts.

### Worked example 6

Two independent sets of sensors detect faults. Faults in set A per day follow Po(1.4) and faults in set B per day follow Po(2.2). Find the probability that the total number of faults in one day is exactly 5.

```
T = X + Y ~ Po(1.4 + 2.2) = Po(3.6)
P(T = 5) = e^(−3.6) × 3.6⁵ / 5! = 0.027324 × 60.466 / 120 = 0.1377
```

The result applies to sums. Do not assume the difference X − Y is Poisson. The mean of X − Y is a − b, but its variance is a + b, so mean and variance cannot be equal, which means X − Y does not follow a Poisson distribution.

## Common errors

- Writing P(X ≥ 5) = 1 − P(X ≤ 5). It should be 1 − P(X ≤ 4).
- Forgetting to change λ when the interval changes.
- Using a Poisson approximation when p is not small.
- Giving a condition without a context, or naming "constant rate" when the question hints at a rush hour.
- Adding standard deviations for a sum. Add the rates, and take the square root of the total if the standard deviation is needed.
- Writing P(X = r) = λ^r / r! and dropping e^(−λ).

## What to do next

Condense the content with the [revision notes](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution-revision-notes/), then work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution-practice/) under timed conditions. The [diagnostics](/diagnostics/) show which unit to revise next.

## Official syllabus

This page follows the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section 3.4 (International A-level Unit S2: Statistics), S2.1 Poisson distribution, published by OxfordAQA.
