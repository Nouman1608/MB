---
title: "Pearson Edexcel International Advanced Level Mathematics: Continuous random variables: pdf, cdf, mean, variance, mode, median and quartiles (YMA01)"
seoTitle: "Edexcel IAL Maths S2 Continuous Random Variables Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Continuous random variables: pdf, cdf, mean, variance, mode, median and quartiles"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 166
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-continuous-random-variables-edexcel-alevel-maths"
description: "Study guide to continuous random variables for Edexcel IAL Mathematics S2: pdf, cdf, mean, variance, mode, median and quartiles, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide covers section 2 of Unit S2 (Statistics 2) in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Specification Issue 3, April 2019: topics 2.1 to 2.5 on continuous random variables. The specification lists S2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. Use it with the [revision notes](/resources/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode-practice/). The [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) show where this unit sits, and the [free diagnostics](/diagnostics/) help you find weak spots first.

The specification assumes you can differentiate and integrate polynomials. If that is shaky, revise it in the [Pure 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/) first. Every integral in this unit is a polynomial integral, so all of it can be done by hand.

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 2.1 | Explain what a continuous random variable is and why single values have zero probability |
| 2.2 | Use a pdf f(x) and a cdf F(x0), including simple polynomials defined piecewise |
| 2.3 | Move between f and F using f(x) = dF/dx |
| 2.4 | Find the mean and variance of a continuous random variable |
| 2.5 | Find the mode, median and quartiles |

The specification restricts the formulae defining f(x) to simple polynomials, which may be expressed piecewise. It also lists P(a < X ≤ b) = ∫ f(x) dx and f(x) = dF(x)/dx among the formulae you are expected to remember.

## 2.1 Continuous random variables

A discrete random variable takes separate values, such as 0, 1, 2. A continuous random variable can take any value in an interval, such as a waiting time or a length. You cannot list its values, so you cannot give each one a probability. Probability is spread over the number line like a smooth layer, and a probability is an area under a curve.

A single point has no width, so P(X = a) = 0 for every a. Two consequences follow:

- P(a < X < b), P(a ≤ X ≤ b) and P(a < X ≤ b) are all equal.
- A probability of zero does not mean a value is impossible, only that a single exact value carries no area.

## 2.2 The probability density function

The pdf f(x) describes how probability is spread. It must satisfy two conditions:

1. f(x) ≥ 0 for every x.
2. The total area under f(x) is 1.

Probabilities come from area:

```
P(a < X ≤ b) = ∫ f(x) dx   (x from a to b)
```

Outside the stated interval, f(x) = 0. Always say so when you write f(x), and only integrate over the interval where f is non-zero.

### Worked example 1: finding k and a probability

The random variable X has pdf f(x) = k(6 − x) for 2 ≤ x ≤ 6, and f(x) = 0 otherwise.

Total area is 1:

```
∫ k(6 − x) dx (x from 2 to 6) = k[6x − x²/2] from 2 to 6
= k[(36 − 18) − (12 − 2)]
= k(18 − 10) = 8k
8k = 1, so k = 1/8
```

Now P(3 < X ≤ 5):

```
∫ (6 − x)/8 dx (x from 3 to 5) = (1/8)[6x − x²/2] from 3 to 5
= (1/8)[(30 − 12.5) − (18 − 4.5)]
= (1/8)(17.5 − 13.5) = 1/2
```

So k = 1/8 and P(3 < X ≤ 5) = **1/2**.

The graph is a straight line falling from f(2) = 1/2 to f(6) = 0, a right-angled triangle of area (1/2) × 4 × (1/2) = 1. Sketching first is a quick check that your k is sensible.

## 2.2 and 2.3 The cumulative distribution function

The cdf gives the probability of being at most a given value:

```
F(x0) = P(X ≤ x0) = ∫ f(x) dx   (x from −∞ to x0)
```

In practice you integrate f from the bottom of its interval up to x. Properties you can use as checks:

- F(x) = 0 below the interval and F(x) = 1 above it.
- F is non-decreasing.
- For a continuous variable, F has no jumps, so the pieces join up.
- P(a < X ≤ b) = F(b) − F(a), and P(X > a) = 1 − F(a).

The link in 2.3 runs both ways. Integrating f gives F. Differentiating F gives f:

```
f(x) = dF(x)/dx
```

### Worked example 2: a piecewise pdf and its cdf

The random variable X has pdf

```
f(x) = x/6      for 0 ≤ x < 2
f(x) = 1/3      for 2 ≤ x ≤ 4
f(x) = 0        otherwise
```

Check the area: ∫ x/6 dx from 0 to 2 is [x²/12] = 4/12 = 1/3, and the rectangle gives (1/3) × 2 = 2/3. The total is 1.

For the cdf, work through the pieces in order. For 0 ≤ x < 2:

```
F(x) = ∫ t/6 dt (t from 0 to x) = x²/12
```

At x = 2 this gives F(2) = 1/3. For 2 ≤ x ≤ 4 you must add the area already collected:

```
F(x) = 1/3 + ∫ 1/3 dt (t from 2 to x) = 1/3 + (x − 2)/3 = (x − 1)/3
```

Check: F(4) = 3/3 = 1. So:

```
F(x) = 0           x < 0
F(x) = x²/12       0 ≤ x < 2
F(x) = (x − 1)/3   2 ≤ x ≤ 4
F(x) = 1           x > 4
```

Then P(1 < X < 3) = F(3) − F(1) = 2/3 − 1/12 = **7/12**.

### Worked example 3: from F back to f

A random variable has cdf F(x) = (x³ − 1)/26 for 1 ≤ x ≤ 3, with F(x) = 0 for x < 1 and F(x) = 1 for x > 3.

Check F(1) = 0 and F(3) = 26/26 = 1. Differentiate:

```
f(x) = 3x²/26   for 1 ≤ x ≤ 3, and 0 otherwise
```

Also P(X > 2) = 1 − F(2) = 1 − 7/26 = **19/26**.

## 2.4 Mean and variance

For a continuous random variable the sums of S1 become integrals:

```
E(X) = ∫ x f(x) dx
E(X²) = ∫ x² f(x) dx
Var(X) = E(X²) − [E(X)]²
```

All integrals run over the interval where f is non-zero. For a piecewise pdf, integrate each piece separately and add. If f is symmetric about a value, E(X) is that value, which saves an integral.

Continue example 2. Mean:

```
E(X) = ∫ x²/6 dx (0 to 2) + ∫ x/3 dx (2 to 4)
     = [x³/18] from 0 to 2 + [x²/6] from 2 to 4
     = 8/18 + (16 − 4)/6 = 4/9 + 2 = 22/9
```

Second moment:

```
E(X²) = ∫ x³/6 dx (0 to 2) + ∫ x²/3 dx (2 to 4)
      = [x⁴/24] from 0 to 2 + [x³/9] from 2 to 4
      = 16/24 + (64 − 8)/9 = 2/3 + 56/9 = 62/9
Var(X) = 62/9 − (22/9)² = 558/81 − 484/81 = 74/81
```

So E(X) = 22/9 and Var(X) = **74/81** (about 0.914). The standard deviation is the square root, about 0.956.

## 2.5 Mode, median and quartiles

**Mode.** The mode is the value of x where f(x) is greatest.

- If f has a turning point inside the interval, set f′(x) = 0 and check it is a maximum.
- If f is increasing or decreasing throughout, the mode is at an end of the interval.
- For a piecewise pdf, find the greatest value in each piece and compare them.
- If f is constant over a range, there is no single mode.

In example 2, f rises to 1/3 at x = 2 and stays at 1/3 until x = 4. Every value from 2 to 4 gives the greatest density, so there is no unique mode. In example 1, f(x) = (6 − x)/8 falls throughout, so the mode is at the left end, **x = 2**.

**Median and quartiles.** These are values of the cdf. The median m satisfies F(m) = 1/2. The lower quartile satisfies F(x) = 1/4 and the upper quartile satisfies F(x) = 3/4. The interquartile range is upper minus lower.

With a piecewise cdf, decide which piece to use before solving. Compare the target probability with F at the boundary.

Continue example 2, where F(2) = 1/3:

- Lower quartile: 1/4 is less than 1/3, so use the first piece. x²/12 = 1/4 gives x² = 3, so the lower quartile is √3 ≈ 1.73.
- Median: 1/2 is more than 1/3, so use the second piece. (m − 1)/3 = 1/2 gives m = **5/2**.
- Upper quartile: (x − 1)/3 = 3/4 gives x = **13/4**.

If you solve a quadratic, reject any root outside the interval.

### Worked example 4: all the summary measures

f(x) = k x²(3 − x) for 0 ≤ x ≤ 3, and 0 otherwise.

```
∫ (3x² − x³) dx (0 to 3) = [x³ − x⁴/4] = 27 − 81/4 = 27/4
k × 27/4 = 1, so k = 4/27
```

Mode: f(x) = (4/27)(3x² − x³), so f′(x) = (4/27)(6x − 3x²) = 0 gives x = 0 or x = 2. At x = 2, f″(x) = (4/27)(6 − 6x) = (4/27)(−6) < 0, so it is a maximum. The mode is **x = 2**, and f(2) = 16/27.

Mean:

```
E(X) = (4/27) ∫ (3x³ − x⁴) dx (0 to 3)
     = (4/27)[3x⁴/4 − x⁵/5]
     = (4/27)(243/4 − 243/5) = (4/27)(243/20) = 9/5
```

Second moment:

```
E(X²) = (4/27) ∫ (3x⁴ − x⁵) dx (0 to 3)
      = (4/27)[3x⁵/5 − x⁶/6]
      = (4/27)(729/5 − 243/2) = (4/27)(243/10) = 18/5
Var(X) = 18/5 − (9/5)² = 90/25 − 81/25 = 9/25
```

So E(X) = 1.8, Var(X) = **0.36** and the standard deviation is 0.6.

The cdf is F(x) = (4/27)(x³ − x⁴/4) = (4x³ − x⁴)/27. Setting F(m) = 1/2 gives the quartic 2m⁴ − 8m³ + 27 = 0, which has no neat root. A numerical method gives a median of about 1.84, a little above the mean and below the mode of 2. When an exact answer is not possible, a question will ask for a numerical value or a sign-change check.

## Common errors

- Forgetting the 0 ≤ x ≤ 2 type limits and integrating over the wrong range.
- Finding k from f(x) = 1 instead of from total area 1.
- Writing F(x) for the second piece without adding F at the boundary.
- Using the wrong piece when solving F(m) = 1/2.
- Forgetting to square the mean: Var(X) = E(X²) − [E(X)]², not E(X²) − E(X).
- Setting f′(x) = 0 and not checking it, or ignoring an endpoint mode.
- Claiming P(X = a) is not zero, or treating < and ≤ differently.

## Next steps

Work through the [revision notes](/resources/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode-revision-notes/), then try the [practice questions](/resources/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode-practice/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Unit S2, section 2 (topics 2.1 to 2.5), published by Pearson Education Limited.
