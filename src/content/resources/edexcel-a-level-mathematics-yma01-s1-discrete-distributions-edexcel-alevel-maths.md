---
title: "Edexcel International A Level Mathematics (YMA01): Discrete distributions"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-discrete-distributions-edexcel-alevel-maths"
description: "Edexcel IAL Maths S1 discrete distributions guide: the discrete uniform model, its mean and variance, values in steps, finding n and judging when the model fits."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "The S1 unit description lists 'discrete distributions' but the content table names only 5.4 'The discrete uniform distribution', so this page treats that statement as the subtopic; please confirm the mapping."
publishedDate: 2026-11-18
featured: false
---

This guide covers the discrete distribution named in **Unit S1: Statistics 1** of Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3. The unit description lists "discrete distributions", and the content statement is 5.4: "The discrete uniform distribution", with the guidance "The mean and variance of this distribution." The binomial and Poisson distributions are not in S1 for this specification; they are in Unit S2.

The S1 guide on [discrete random variables](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-random-variables-edexcel-alevel-maths/) covers probability functions, E(X) and Var(X), which this page relies on. The broader page on [discrete random variables and the discrete uniform distribution](/resources/edexcel-ial-mathematics-discrete-random-variables-probability-functions/) states the formulae and shows where they come from. This page goes further: uniform variables whose values go up in steps other than 1, cumulative probabilities, finding n from a probability, and recognising when a uniform model is and is not appropriate. Use the [discrete distributions revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-distributions-edexcel-alevel-maths-revision-notes/) for recall and the [discrete distributions practice set](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-distributions-edexcel-alevel-maths-practice/) to test yourself.

## The model

A discrete random variable X has a **discrete uniform distribution** over the values 1, 2, ..., n when each value is equally likely:

```
P(X = x) = 1/n          x = 1, 2, ..., n
E(X)     = (n + 1)/2
Var(X)   = (n² − 1)/12
```

Learn the mean and variance; check your copy of the formulae booklet to see whether they are printed there. Note that n is the **number of values**, which is also the largest value only when the values start at 1.

The model is appropriate when there is a fixed, finite set of outcomes and a physical or procedural reason to treat them as equally likely: a fair die, a fair spinner with equal sectors, a ticket drawn at random from a numbered set, or a computer choosing a whole number at random.

## Cumulative probabilities

Because each value has the same probability, counting replaces adding:

```
P(X ≤ k)      = k/n
P(X > k)      = (n − k)/n
P(a ≤ X ≤ b)  = (b − a + 1)/n      (a, b whole numbers between 1 and n)
```

The "+ 1" in the last line is the usual source of error. From 4 to 9 inclusive there are six values, not five.

## Values that go up in steps

Many exam questions use values such as 3, 6, 9, ..., 30 or 10, 15, 20, ..., 60. Write X as a linear function of a standard uniform variable Y on 1, 2, ..., n, then use the rules from S1 section 5.3:

```
E(aY + b) = aE(Y) + b          Var(aY + b) = a² Var(Y)
```

For values a, a + d, a + 2d, ..., a + (n − 1)d this gives X = a + d(Y − 1), so

```
E(X)   = a + d(n − 1)/2        (the mean of the first and last values)
Var(X) = d²(n² − 1)/12
```

Shifting all the values changes the mean only. Spacing them further apart multiplies the variance by the square of the spacing.

## Worked example 1: values in steps of 3

A spinner has ten equal sectors labelled 3, 6, 9, ..., 30. X is the score on one spin.

**(a) Find E(X) and Var(X).** X = 3Y, where Y is uniform on 1, 2, ..., 10.

```
E(Y) = 11/2 = 5.5        Var(Y) = (100 − 1)/12 = 8.25
E(X) = 3 × 5.5 = 16.5    Var(X) = 9 × 8.25 = 74.25
standard deviation = √74.25 = 8.62 (3 s.f.)
```

**(b) Find P(X > E(X)).** The values above 16.5 are 18, 21, 24, 27, 30: five of the ten values, so the probability is **1/2**. This holds for any discrete uniform distribution with an even number of values, because the mean sits exactly in the middle.

**(c) Find the probability that X lies within one standard deviation of the mean.** μ − σ = 7.88 and μ + σ = 25.12. The values between are 9, 12, 15, 18, 21 and 24: six values, so the probability is **0.6**.

## Worked example 2: finding n

A computer chooses a whole number X at random from 1 to n. P(X ≤ 7) = 0.35.

```
7/n = 0.35,  so n = 20
P(5 < X < 12) = P(6 ≤ X ≤ 11) = 6/20 = 0.3
E(X) = 21/2 = 10.5
Var(X) = (400 − 1)/12 = 33.25
```

Questions can also give E(X) or Var(X) and ask for n. Set the formula equal to the given value and solve; reject a negative or non-integer n, since n counts values.

## Worked example 3: a total that is not uniform

Two fair four-sided spinners, each numbered 1 to 4, are spun and S is the total. Each spinner is uniform, but S is not:

| s | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|
| P(S = s) | 1/16 | 2/16 | 3/16 | 4/16 | 3/16 | 2/16 | 1/16 |

Middle totals can be made in more ways (5 arises from (1, 4), (2, 3), (3, 2) and (4, 1)), so they are more likely. Directly from the table, E(S) = 5 and E(S²) = 440/16 = 27.5, so Var(S) = 27.5 − 25 = 2.5.

The lesson for modelling: equal likelihood of the basic outcomes does not make a derived quantity uniform. Before using the uniform formulae, check that the variable itself takes each value with the same probability.

## When the model fails

A discrete uniform model is a modelling assumption and can be criticised like any other (see the guide to [mathematical models in probability and statistics](/resources/edexcel-a-level-mathematics-yma01-s1-mathematical-models-edexcel-alevel-maths/)). It is unlikely to fit when:

- people choose the value, since some numbers are favoured;
- the physical object is not symmetric, such as a weighted die or unequal sectors;
- the variable is a total, difference or maximum of several uniform outcomes;
- the set of values is not fixed and finite, such as the number of customers in an hour.

If data are available, compare the observed frequencies with the expected frequency (total ÷ n) for each value.

## Common mistakes

- Using the largest value instead of the number of values as n.
- Applying (n + 1)/2 and (n² − 1)/12 to values that do not start at 1 without first transforming.
- Adding the shift to the variance.
- Miscounting inclusive ranges: P(a ≤ X ≤ b) needs b − a + 1 values.
- Assuming a sum or difference of uniform variables is uniform.

## Exam technique

- **"Write down"** E(X) or Var(X): quote the formula with n substituted; little working is needed.
- **"Find"** the mean and variance for stepped values: show the linear transformation you are using.
- **"Explain why"** a discrete uniform model is suitable: refer to equally likely outcomes in context (equal sectors, a fair die, random selection).
- **"Criticise"** the model: give a specific reason why some values may be more likely.
- Give probabilities as exact fractions where possible.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S1, unit description and content statement 5.4 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
