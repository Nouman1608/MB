---
title: "OxfordAQA International AS and A-level Mathematics: Probability density and cumulative distribution functions (9660)"
seoTitle: "OxfordAQA A-level Maths pdf and cdf Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability density and cumulative distribution functions"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 202
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-continuous-random-variables-oxfordaqa-alevel-maths"
description: "Study guide to probability density functions and cumulative distribution functions for OxfordAQA International A-level Maths, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide covers the first part of section S2.2 (Continuous random variables) in the OxfordAQA International AS and A-level Mathematics specification (9660), Version 5.2. It teaches how continuous and discrete random variables differ, how a probability density function f(x) and a cumulative distribution function F(x) are linked, how to find the probability of an interval, and how to find a value for a given probability, such as a median or quartile. The specification places this content in International A-level Unit S2 (Statistics), so it is not examined at International AS. Means, variances and the exponential distribution are separate topics and are not covered here.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-practice/). Check your progress against the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), and take a [free diagnostic](/diagnostics/) to find weak spots. The specification says students are expected to know the content of the International AS units and Unit P2, so integration from [P1](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/) is assumed. For the discrete case, see [Bernoulli and binomial distributions](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/).

## What this guide covers

| Specification point | What you must be able to do |
|---|---|
| S2.2 | State the differences between continuous and discrete random variables |
| S2.2 | Use a probability density function (pdf) and a cumulative distribution function (cdf), and the relationship between them |
| S2.2 | Find the probability of an observation lying in a given interval |
| S2.2 | Find the value that corresponds to a specified probability, for example a median or quartile |

The specification gives the relationship as F(x) = ∫ f(t) dt, integrated from −∞ to x, and f(x) = dF/dx. It also gives P(a < X < b) = ∫ f(x) dx from a to b, and P(X = a) = 0.

## 1. Continuous and discrete random variables

A discrete random variable takes separate values, usually whole numbers: the number of faulty bulbs in a box, or the score on a spinner. You list the values and give each a probability. These probabilities add to 1.

A continuous random variable can be any number within a range: a time, a length, a mass. Because there are infinitely many possible values, you cannot give each one a positive probability. Instead, probability is spread over the number line, and you ask for the probability of an interval.

| | Discrete | Continuous |
|---|---|---|
| Possible values | Separate, can be listed | Any value in an interval |
| Probability of one exact value | Can be positive | Always 0 |
| Described by | Probability function P(X = x) | Probability density function f(x) |
| Probabilities found by | Adding | Integrating (area under f) |
| Total | Probabilities add to 1 | Total area under f is 1 |

A consequence: for a continuous variable P(X = a) = 0, so P(X < a) = P(X ≤ a) and P(a < X < b) = P(a ≤ X ≤ b). The inequality signs do not change the answer. For a discrete variable they can.

## 2. The probability density function

A pdf f(x) describes where probability sits. It must satisfy two conditions:

```
f(x) ≥ 0 for all x
total area under the graph of f = ∫ f(x) dx over all x = 1
```

The value f(x) is not a probability. It is a height, and it can be greater than 1 provided the area is 1. A narrow, tall pdf is fine.

The probability that X lies in an interval is the area under the curve:

```
P(a < X < b) = ∫ f(x) dx from a to b
```

Most pdfs in this topic are defined in pieces and are zero outside a stated range. Write "f(x) = 0 otherwise" in your answer, and only integrate over the range where f is non-zero.

### Worked example 1: finding a constant and a probability

The random variable X has pdf f(x) = k(9 − x²) for 0 ≤ x ≤ 3, and f(x) = 0 otherwise. Find k, then find P(1 < X < 2) and P(X > 2).

```
Total area is 1:
∫ k(9 − x²) dx from 0 to 3 = k[9x − x³/3] from 0 to 3
                            = k(27 − 9) − 0 = 18k
18k = 1, so k = 1/18

P(1 < X < 2) = (1/18)[9x − x³/3] from 1 to 2
             = (1/18)[(18 − 8/3) − (9 − 1/3)]
             = (1/18)(46/3 − 26/3)
             = (1/18)(20/3) = 10/27

P(X > 2) = (1/18)[9x − x³/3] from 2 to 3
         = (1/18)[18 − (46/3)]
         = (1/18)(8/3) = 4/27
```

So **k = 1/18**, **P(1 < X < 2) = 10/27**, and **P(X > 2) = 4/27**. The upper limit for P(X > 2) is 3, not ∞, because f is zero beyond 3.

## 3. The cumulative distribution function

The cdf gives the probability up to a point:

```
F(x) = P(X ≤ x) = ∫ f(t) dt from −∞ to x
```

The letter t is a dummy variable inside the integral, so that x can be the upper limit. Properties to know:

- F(x) = 0 for x below the lowest possible value, and F(x) = 1 above the highest.
- F is non-decreasing, because f ≥ 0.
- F is continuous for a continuous random variable.
- P(a < X < b) = F(b) − F(a).
- P(X > a) = 1 − F(a).

Going the other way, differentiate:

```
f(x) = dF/dx
```

### From pdf to cdf when f is in pieces

Work through the pieces in order. For each piece, F(x) is the probability accumulated before the piece (found from the end value of the previous piece) plus the integral from the start of the piece to x. This is the step that most often goes wrong.

### Worked example 2: a two-piece pdf

X has pdf

```
f(x) = x/5          for 0 ≤ x < 2
f(x) = 3(5 − x)/20  for 2 ≤ x ≤ 4
f(x) = 0            otherwise
```

(a) Show that f is a valid pdf. (b) Find F(x). (c) Find P(1 < X < 3).

(a) Both pieces are non-negative on their ranges. Areas:

```
∫ x/5 dx from 0 to 2 = [x²/10] from 0 to 2 = 4/10 = 2/5
∫ 3(5 − x)/20 dx from 2 to 4 = (3/20)[5x − x²/2] from 2 to 4
                             = (3/20)[(20 − 8) − (10 − 2)] = (3/20)(4) = 3/5
2/5 + 3/5 = 1
```

(b) For 0 ≤ x < 2: F(x) = ∫ t/5 dt from 0 to x = **x²/10**. At x = 2 this gives F(2) = 2/5.

For 2 ≤ x ≤ 4:

```
F(x) = 2/5 + (3/20)[5t − t²/2] from 2 to x
     = 2/5 + (3/20)(5x − x²/2 − 8)
     = −3x²/40 + 3x/4 − 4/5
```

Check: F(4) = −48/40 + 3 − 4/5 = 1. So

```
F(x) = 0                        for x < 0
F(x) = x²/10                    for 0 ≤ x < 2
F(x) = −3x²/40 + 3x/4 − 4/5     for 2 ≤ x ≤ 4
F(x) = 1                        for x > 4
```

(c) P(1 < X < 3) = F(3) − F(1). F(3) = −27/40 + 9/4 − 4/5 = 31/40, and F(1) = 1/10. Then P = 31/40 − 4/40 = **27/40**.

Checking that F(4) = 1 and that the two pieces agree at x = 2 catches most slips.

## 4. From cdf to pdf

Differentiate each piece. The pdf is zero outside the range where F rises from 0 to 1.

### Worked example 3

The cdf of X is F(x) = (x³ + 2x)/12 for 0 ≤ x ≤ 2, with F(x) = 0 for x < 0 and F(x) = 1 for x > 2. Find f(x) and P(0.5 < X < 1.5).

```
F(2) = (8 + 4)/12 = 1, so F is consistent.
f(x) = dF/dx = (3x² + 2)/12   for 0 ≤ x ≤ 2, and 0 otherwise.

P(0.5 < X < 1.5) = F(1.5) − F(0.5)
F(1.5) = (3.375 + 3)/12 = 6.375/12
F(0.5) = (0.125 + 1)/12 = 1.125/12
P = 5.25/12 = 7/16
```

So **f(x) = (3x² + 2)/12** on the range and **P(0.5 < X < 1.5) = 7/16 = 0.4375**. You use F directly here, with no integration, which is why a given cdf is quicker to work with.

## 5. Finding a value for a given probability

To find the value q with P(X ≤ q) = p, solve F(q) = p.

| Quantity | Equation to solve |
|---|---|
| Median m | F(m) = 1/2 |
| Lower quartile Q₁ | F(Q₁) = 1/4 |
| Upper quartile Q₃ | F(Q₃) = 3/4 |
| p-th percentile | F(x) = p/100 |
| Value c with P(X > c) = 0.1 | F(c) = 0.9 |

Method:

1. Decide which piece contains the answer by comparing the target with the value of F at the break points.
2. Write F for that piece and set it equal to the target.
3. Solve, and reject any root outside that piece's range.

### Worked example 4: the median in a piece

For the pdf in worked example 2, F(2) = 2/5, which is below 1/2. So the median lies in the second piece (2 ≤ x ≤ 4).

```
−3m²/40 + 3m/4 − 4/5 = 1/2
Multiply by 40:   −3m² + 30m − 32 = 20
                   3m² − 30m + 52 = 0
m = (30 ± √(900 − 624))/6 = (30 ± √276)/6 = 5 ± √69/3
```

The root 5 + √69/3 ≈ 7.77 is outside 2 ≤ x ≤ 4, so reject it. The median is **m = 5 − √69/3 ≈ 2.23**, which lies in the second piece as expected.

### Worked example 5: quartiles when the equation has no neat solution

For the cdf in worked example 3, F(x) = (x³ + 2x)/12.

```
Lower quartile: x³ + 2x = 3. Try x = 1: 1 + 2 = 3, so Q₁ = 1.
Median:         x³ + 2x = 6, so m ≈ 1.456
Upper quartile: x³ + 2x = 9, so Q₃ ≈ 1.762
```

The median and upper quartile come from a cubic that has no simple factorisation. The specification states that electronic or graphical calculators may be used in this unit, so a numerical solution is acceptable. Check by substituting back: 1.456³ + 2(1.456) ≈ 6.00. All three values lie inside 0 ≤ x ≤ 2, as they must.

## Common errors

- Treating f(x) as a probability. It is a density, and it can exceed 1.
- Integrating over the wrong limits, for example to ∞ instead of the end of the range.
- Forgetting the accumulated probability from earlier pieces when building F for a later piece.
- Leaving out the "F(x) = 0 below, F(x) = 1 above" statements in a full cdf.
- Adding or subtracting 1 at a boundary, as you might for a discrete variable. For a continuous variable P(X ≥ a) = P(X > a) = 1 − F(a), because P(X = a) = 0.
- Solving F(m) = 1/2 in the wrong piece and accepting a root outside it.
- Differentiating a cdf and forgetting that f is zero outside the range.

## Next steps

Try the [practice questions](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-probability-density-and-cumulative-distribution-revision-notes/) for quick recall. Then use the [checklist](/checklists/oxfordaqa/a-level/mathematics/) to tick this topic off.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), specification Version 5.2, published by OxfordAQA: section 3.4 International A-level Unit S2 (Statistics), S2.2 Continuous random variables.
