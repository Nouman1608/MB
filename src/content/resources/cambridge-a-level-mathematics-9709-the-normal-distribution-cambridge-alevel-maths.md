---
title: "Cambridge A Level Mathematics (9709): The normal distribution"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 5 – Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "the-normal-distribution-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 5 subtopic 5.5 in depth: normal tables, standardising, finding unknown values, mean or standard deviation, binomial approximation."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Subtopic 5.5 The normal distribution closes Paper 5 of Cambridge International AS & A Level Mathematics 9709 and usually carries some of the paper's longest questions. The calculations are routine once the method is fixed, but they reward careful presentation: the syllabus states that full details of standardisation should be shown. This guide sets out the three question types the syllabus lists, shows how to use the tables in each direction, and explains when and how to approximate a binomial distribution.

The [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/) summarises the whole paper. This guide is paired with the [normal distribution revision notes](/resources/cambridge-a-level-mathematics-9709-the-normal-distribution-cambridge-alevel-maths-revision-notes/) and the [normal distribution practice questions](/resources/cambridge-a-level-mathematics-9709-the-normal-distribution-cambridge-alevel-maths-practice/).

## What the syllabus asks for

Candidates should be able to:

- understand the use of a normal distribution to model a continuous random variable, and use normal distribution tables (sketches of normal curves to illustrate distributions or probabilities may be required);
- solve problems concerning a variable X ~ N(μ, σ²), including finding P(X > x₁), or a related probability, given x₁, μ and σ, and finding a relationship between x₁, μ and σ given the value of P(X > x₁) or a related probability. For calculations involving standardisation, full details of the working should be shown, using Z = (X − μ)/σ;
- recall conditions under which the normal distribution can be used as an approximation to the binomial distribution, and use this approximation, with a continuity correction, in solving problems. The condition given is that n is large enough for both np > 5 and nq > 5.

## The normal model

A normal distribution is symmetrical about its mean μ, bell-shaped, and spreads further as σ increases. Since a continuous variable has P(X = a) = 0 for any single value, P(X < a) and P(X ≤ a) are equal. That is why the continuity correction is needed only when a discrete variable is approximated.

The notation N(μ, σ²) gives the **variance**, not the standard deviation. N(65, 64) has standard deviation 8. Misreading the second parameter is one of the most expensive slips on the paper.

## Using the tables

The tables give Φ(z) = P(Z < z) for z ≥ 0. Everything else follows from symmetry and the total area of 1:

```
P(Z > z)       = 1 − Φ(z)
P(Z < −z)      = 1 − Φ(z)
P(Z > −z)      = Φ(z)
P(a < Z < b)   = Φ(b) − Φ(a)
```

A quick sketch with the region shaded tells you which line to use, and avoids the common error of using Φ(z) when 1 − Φ(z) is needed.

## Type 1: finding a probability

X ~ N(65, 8²). Find P(X > 75) and P(55 < X < 70).

```
P(X > 75) = P(Z > (75 − 65)/8) = P(Z > 1.25) = 1 − 0.8944 = 0.1056

P(55 < X < 70) = P(−1.25 < Z < 0.625)
               = Φ(0.625) − (1 − Φ(1.25))
               = 0.7340 − 0.1056 = 0.628 (3 s.f.)
```

For an "expected number" question, multiply the probability by the number in the sample and round sensibly at the end only.

## Type 2: finding a value from a probability

Here the table is used in reverse: find the z-value with a given area, then un-standardise.

**Finding x₁.** For X ~ N(65, 8²), find a such that P(X < a) = 0.2. The area 0.2 is less than 0.5, so a lies below the mean and its z-value is negative. From the tables, Φ(0.842) ≈ 0.8, so z = −0.842 and a = 65 − 0.842 × 8 = **58.3**.

**Finding μ (σ known).** X ~ N(μ, 5²) and P(X > 40) = 0.1. Then P(X < 40) = 0.9 and z = 1.282, so (40 − μ)/5 = 1.282 and μ = 40 − 6.41 = **33.6**.

**Finding μ and σ.** P(X < 20) = 0.3 and P(X > 35) = 0.05. Form one equation for each fact:

```
(20 − μ)/σ = −0.524        (area 0.3 to the left: negative z)
(35 − μ)/σ =  1.645        (area 0.95 to the left)
Subtract:  15/σ = 2.169   →   σ = 6.92,   μ = 20 + 0.524 × 6.92 = 23.6
```

*Annotation:* the sign of each z-value is fixed by the side of the mean on which the value lies. Here 20 is below the mean (only 30% lie below it), so its z-value is negative; 35 is above the mean, so its z-value is positive. Getting a sign wrong gives a negative σ, which is a useful warning that something has gone wrong.

The tables include a short list of critical values for common areas, such as 1.282 (0.9), 1.645 (0.95), 1.960 (0.975) and 2.326 (0.99). Use those exact values where they apply rather than reading from the main table.

## Type 3: the normal approximation to the binomial

If X ~ B(n, p) with n large enough that **np > 5 and nq > 5**, then X is approximately N(np, npq). Both conditions must be checked and stated.

The binomial is discrete and the normal is continuous, so each integer value r is represented by the interval from r − 0.5 to r + 0.5. This is the **continuity correction**.

| Binomial statement | Write as integers first | Normal statement |
|---|---|---|
| X ≤ 15 | X ≤ 15 | Y < 15.5 |
| X < 15 | X ≤ 14 | Y < 14.5 |
| X ≥ 15 | X ≥ 15 | Y > 14.5 |
| X > 15 | X ≥ 16 | Y > 15.5 |
| X = 20 | X = 20 | 19.5 < Y < 20.5 |

**Worked example.** 30% of customers at a shop pay in cash. In a random sample of 60 customers, use a suitable approximation to find the probability that at most 15 pay in cash.

X ~ B(60, 0.3). Then np = 18 and nq = 42, both greater than 5, so use Y ~ N(18, 12.6).

```
P(X ≤ 15) ≈ P(Y < 15.5) = P(Z < (15.5 − 18)/√12.6)
          = P(Z < −0.704) = 1 − 0.7593 = 0.241 (3 s.f.)
```

The exact binomial value is 0.244, so the approximation is close. Without the continuity correction, using 15 instead of 15.5 gives 0.199, which is badly wrong.

## Common mistakes

- Using the variance where the standard deviation is needed in Z = (X − μ)/σ.
- Choosing Φ(z) when 1 − Φ(z) is required, especially with negative z.
- Giving the wrong sign to a z-value when working backwards.
- Forgetting the continuity correction, or applying it in the wrong direction.
- Checking only np > 5 and not nq > 5.
- Rounding z-values to 2 decimal places, which can move the final answer outside the accepted range.

## Exam technique

- **Find the probability:** write the standardisation with numbers, the z-value, the table value and the final answer. Mark schemes typically credit the standardisation separately.
- **Sketch** a normal curve: draw a symmetrical bell shape, mark μ on the axis and shade the relevant region.
- **Use a suitable approximation:** name the approximating distribution with its parameters, state that np and nq both exceed 5, and show the continuity correction.
- **Find μ and σ:** write both equations with correctly signed z-values before solving.
- Give probabilities to 3 significant figures, and work with z to 3 decimal places to match the tables.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 5.5 "The normal distribution" (Probability & Statistics 1, Paper 5).
