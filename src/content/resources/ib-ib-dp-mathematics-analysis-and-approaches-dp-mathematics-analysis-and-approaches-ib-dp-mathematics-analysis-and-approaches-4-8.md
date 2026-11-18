---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.8 The binomial distribution"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.8
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-8"
description: "IB Maths AA study guide to section 4.8: when the binomial model applies, translating inequalities, mean and variance, finding n and two-stage binomial problems."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.8** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **the binomial distribution, and the mean and variance of the binomial
distribution**. It is SL and HL content. The guide states that binomial probabilities are found with
technology in examinations and that a formal proof of the mean and variance is not required.

The [probability, discrete and continuous distributions, binomial and normal study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
gives the conditions and one example. This page goes further: justifying the model in context, turning
words like "at least" and "between" into cumulative probabilities, finding an unknown number of trials, and
questions where a binomial probability feeds into a second binomial model.

## When is a binomial model appropriate?

X ~ B(n, p) counts the number of successes in n trials when:

1. there is a **fixed number** of trials, n;
2. each trial has **two outcomes**, success or failure;
3. the probability of success, p, is the **same** for every trial;
4. the trials are **independent**.

In context questions, you may be asked to state an assumption or explain why a model fails:

- Choosing people **without replacement** from a small group breaks conditions 3 and 4: the probability
  changes after each choice. From a very large population, the change is tiny and a binomial model is a
  reasonable approximation.
- "Number of attempts until the first success" has no fixed n, so it is not binomial.
- Days of rain in a week may not be independent: wet days tend to cluster.

## Where the probabilities come from

```
P(X = r) = C(n, r) p^r (1 − p)^(n − r),    r = 0, 1, ..., n
```

C(n, r), also written nCr, counts the arrangements of r successes among n trials (the binomial coefficients
of section 1.9); p^r (1 − p)^(n − r) is the probability of any one arrangement. Knowing this explains, for
example, why P(exactly 2 heads in 4 tosses) = 6 × (1/2)⁴ = 3/8. In the exam, use the GDC's binomial pdf
(one value) and cdf (cumulative, P(X ≤ r)).

## Translating the wording

Because the GDC's cdf gives P(X ≤ r), every other inequality must be converted:

| Words | Probability | GDC calculation |
|---|---|---|
| At most 4 | P(X ≤ 4) | cdf(4) |
| Fewer than 4 | P(X ≤ 3) | cdf(3) |
| At least 4 | P(X ≥ 4) | 1 − cdf(3) |
| More than 4 | P(X ≥ 5) | 1 − cdf(4) |
| Between 2 and 5 inclusive | P(2 ≤ X ≤ 5) | cdf(5) − cdf(1) |

Many GDCs also accept a lower and upper bound directly; either method is fine if you write the probability
statement first.

## Mean and variance

```
E(X) = np          Var(X) = np(1 − p)          standard deviation = √(np(1 − p))
```

E(X) = np is the expected number of occurrences from section 4.5. A question may give the mean and variance
and ask for n and p: divide Var(X) by E(X) to get 1 − p.

### Worked example 1: a guessing student

A quiz has 12 multiple-choice questions, each with 4 options. A student guesses every answer. X is the
number correct.

```
Conditions: 12 fixed trials; correct or not; p = 1/4 each time; guesses independent
X ~ B(12, 0.25)

P(X = 3) = 0.258                         (pdf)
P(X ≥ 5) = 1 − P(X ≤ 4) = 0.158          (cdf)
P(2 ≤ X ≤ 4) = P(X ≤ 4) − P(X ≤ 1) = 0.684
E(X) = 12 × 0.25 = 3,   Var(X) = 12 × 0.25 × 0.75 = 2.25
```

### Worked example 2: finding n

Each component from a machine is faulty with probability 0.04, independently. Find the smallest number of
components that must be tested for the probability of finding at least one faulty component to exceed 0.9.

```
P(at least one faulty) = 1 − 0.96^n > 0.9
0.96^n < 0.1
n > ln 0.1 / ln 0.96 = 56.4
Smallest n = 57
Check: n = 56 gives 0.898; n = 57 gives 0.902 ✓
```

Dividing by ln 0.96, which is negative, reverses the inequality. A GDC table of 1 − 0.96^n is an alternative
on Paper 2. Always check the integer either side.

### Worked example 3: a binomial inside a binomial

On any day, a train is late with probability 0.15, independently. A "good week" is a 5-day week with the
train late on at most one day. Find the probability that at least 8 of the next 10 weeks are good.

```
Stage 1: L ~ B(5, 0.15)
P(good week) = P(L ≤ 1) = 0.83521 (keep unrounded)

Stage 2: G ~ B(10, 0.83521)
P(G ≥ 8) = 1 − P(G ≤ 7) = 0.780
```

Use the unrounded stage 1 value in stage 2; rounding it to 0.84 changes the third significant figure.

### Worked example 4: from the mean and variance back to the model

A binomial variable X has E(X) = 4.8 and Var(X) = 2.88. Find n and p, and the most likely value of X.

```
Var(X)/E(X) = np(1 − p)/(np) = 1 − p = 2.88/4.8 = 0.6
p = 0.4,   n = 4.8/0.4 = 12
GDC table of P(X = r) for B(12, 0.4):
  r = 4: 0.213    r = 5: 0.227    r = 6: 0.177
Most likely value: 5
```

The most likely value is close to the mean, 4.8, but it must be a whole number, and it is found by comparing
probabilities, not by rounding np. Check that n comes out as a whole number: if it does not, a value has
been misread.

## Common mistakes

- Using cdf(4) for "at least 4" or "fewer than 4".
- Writing Var(X) = np or forgetting the square root for the standard deviation.
- Applying a binomial model without replacement from a small group.
- Stating the conditions in general terms without linking them to the context.
- Rounding a probability from stage 1 before using it as p in stage 2.
- Not reversing an inequality when dividing by a negative logarithm.

## Exam technique

- **"Define"** or **"state"** the distribution: write X ~ B(n, p) with numbers, and say what X counts.
- **"State an assumption"**: choose the condition most at risk in the context (usually independence or
  constant p) and phrase it in context.
- **"Find the probability"** (Paper 2): write the probability statement, such as P(X ≥ 5) = 1 − P(X ≤ 4),
  before the GDC value, so that a slip in the GDC entry still leaves a correct method on the page.
- **"Find the expected number"** or **"variance"**: use np and np(1 − p).
- **"Find the least value of n"**: set up the inequality, solve, and check neighbouring integers.

## Where to go next

Use the [4.8 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8-revision-notes/)
for recall and the [4.8 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-8-practice/)
to test yourself. Section 4.9 moves to a continuous distribution: see the
[4.9 normal distribution study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-9/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.8 (SL and HL): binomial distribution; mean and variance of the binomial distribution.
