---
title: "Edexcel International A Level Mathematics (YMA01): Discrete distributions -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths S1 discrete distributions: discrete uniform mean and variance, stepped values, counting probabilities, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "The S1 unit description lists 'discrete distributions' but the content table names only 5.4 'The discrete uniform distribution', so this page treats that statement as the subtopic; please confirm the mapping."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for the discrete distribution in Unit S1: content statement 5.4, "The discrete uniform distribution", with "the mean and variance of this distribution". The binomial and Poisson distributions belong to Unit S2 in this specification. For worked examples, use the [discrete distributions study guide](/resources/edexcel-a-level-mathematics-yma01-s1-discrete-distributions-edexcel-alevel-maths/).

## The formulae

```
X uniform on 1, 2, ..., n:
P(X = x) = 1/n        E(X) = (n + 1)/2        Var(X) = (n² − 1)/12
```

n is the **number** of equally likely values.

## Counting probabilities

```
P(X ≤ k) = k/n        P(X ≥ k) = (n − k + 1)/n        P(a ≤ X ≤ b) = (b − a + 1)/n
```

## Stepped values

For values a, a + d, ..., a + (n − 1)d:

```
E(X)   = a + d(n − 1)/2   = (first + last)/2
Var(X) = d² (n² − 1)/12
```

Method in words: write X = a + d(Y − 1) with Y uniform on 1 to n, then use E(aY + b) and Var(aY + b).

| Values | n | E(X) | Var(X) |
|---|---|---|---|
| 1, 2, ..., 6 | 6 | 3.5 | 35/12 |
| 0, 1, ..., 9 | 10 | 4.5 | 8.25 |
| 5, 10, ..., 50 | 10 | 27.5 | 25 × 8.25 = 206.25 |
| −2, −1, 0, 1, 2 | 5 | 0 | 2 |

## Key terms

| Term | Meaning |
|---|---|
| Discrete uniform distribution | Finite set of values, each equally likely |
| n | Number of values in the set |
| Parameter | n is the only parameter when values are 1 to n |
| Symmetric | Mean equals median for a discrete uniform distribution |
| Expected frequency | Number of trials ÷ n for each value |
| Linear transformation | Writing X = aY + b to reuse standard results |

## Properties worth knowing

- The distribution is symmetric, so the mean equals the median, (first + last)/2.
- With an even number of values, P(X > mean) = 1/2 exactly.
- The variance grows roughly like n²/12: doubling the number of values roughly quadruples the variance.
- Equally likely basic outcomes do not make a total, a difference or a maximum uniform.

## When to use (and not use) the model

**Suitable:** a fair die or spinner with equal sectors; a ticket drawn at random from a numbered set; a computer's random choice of a whole number.

**Unsuitable:** numbers chosen by people; weighted or asymmetric objects; a sum of two scores; open-ended counts such as arrivals per hour.

## Mini example

X is uniform on 1 to n and Var(X) = 10. Then n² − 1 = 120, so n = 11, E(X) = 6 and P(X ≤ 4) = 4/11.

## Mini example: stepped values and spread

X is uniform on 3, 6, 9, 12, 15, 18 (six values, step 3).

```
E(X) = (3 + 18)/2 = 10.5
Var(X) = 3² × (6² − 1)/12 = 9 × 35/12 = 26.25,   sd = 5.12
μ − σ = 5.38 and μ + σ = 15.62, so the values within one sd are 6, 9, 12, 15
P(within one sd) = 4/6 = 2/3
```

## Checking a uniform model against data

1. Expected frequency for each value = number of trials ÷ n.
2. Compare each observed frequency with it, quoting the largest differences.
3. Look for a pattern (for example, high values consistently more common) rather than one odd value.
4. Conclude in context; no significance test is needed in S1.

**Example.** A spinner numbered 1 to 5 is spun 100 times: 18, 22, 19, 21, 20. Each is within 2 of the expected 20, so the data are consistent with a uniform model.

## Where the formulae come from

E(X) = (1 + 2 + ... + n)/n = (n + 1)/2. E(X²) = (1² + ... + n²)/n = (n + 1)(2n + 1)/6, and subtracting [(n + 1)/2]² gives (n² − 1)/12. You do not need to derive them, but the derivation explains why the variance depends only on n.

## Exam traps

- Using the largest value as n when the values do not start at 1.
- Counting b − a values instead of b − a + 1 in an inclusive range.
- Adding a shift to the variance.
- Forgetting to square the step size d in the variance.
- Applying the uniform formulae to a total of two dice.
- Leaving a non-integer or negative value of n.

## Self-test

1. X is uniform on 1 to 12. Find E(X).
2. Find Var(X) for Question 1.
3. X is uniform on 1 to 20. Find P(X ≤ 6).
4. X is uniform on 1 to 20. Find P(8 ≤ X ≤ 15).
5. X is uniform on 1 to n and E(X) = 12. Find n.
6. X is uniform on 0, 1, ..., 9. Find E(X) and Var(X).
7. X is uniform on 4, 8, 12, ..., 40. Find E(X).
8. Find Var(X) for Question 7.
9. Why is the total of two fair dice not uniform?
10. Give one situation where a discrete uniform model is suitable.
11. Give one reason why the last digit of numbers chosen by people may not be uniform.
12. X is uniform on 1 to 6 and Y = 2X + 5. Find E(Y) and Var(Y).

**Answers:** 1. 6.5. 2. 143/12 = 11.9 (3 s.f.). 3. 6/20 = 0.3. 4. 8/20 = 0.4. 5. (n + 1)/2 = 12, so n = 23. 6. 4.5 and 8.25 (ten values, shifted down by 1 from 1 to 10). 7. (4 + 40)/2 = 22. 8. 4² × 99/12 = 132. 9. Middle totals, such as 7, can be made in more ways than 2 or 12. 10. A fair spinner with equal sectors, or a random draw from numbered tickets. 11. People tend to favour some digits and avoid others. 12. E(Y) = 2(3.5) + 5 = 12; Var(Y) = 4 × 35/12 = 35/3.
