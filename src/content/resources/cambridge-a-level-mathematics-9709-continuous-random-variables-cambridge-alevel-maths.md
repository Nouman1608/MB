---
title: "Cambridge A Level Mathematics (9709): Continuous random variables"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "continuous-random-variables-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 6 subtopic 6.3 in depth: properties of a probability density function, probabilities as areas, mean, variance, medians and percentiles."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.3 Continuous random variables brings integration from Pure Mathematics into statistics. In Paper 6 of Cambridge International AS & A Level Mathematics 9709, the questions are predictable in structure: find a constant, find a probability, find the mean and variance, find the median or another percentile. Marks are lost mainly on accuracy in the integration and on misreading what a probability density function represents. This guide sets out the properties you must use, shows each calculation in full, and includes an example on an infinite domain, which the syllabus names specifically.

The [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/) summarises the whole paper. This page is paired with the [continuous random variables revision notes](/resources/cambridge-a-level-mathematics-9709-continuous-random-variables-cambridge-alevel-maths-revision-notes/) and the [continuous random variables practice questions](/resources/cambridge-a-level-mathematics-9709-continuous-random-variables-cambridge-alevel-maths-practice/).

## What the syllabus asks for

Candidates should be able to:

- understand the concept of a continuous random variable, and recall and use properties of a probability density function;
- use a probability density function to solve problems involving probabilities, and to calculate the mean and variance of a distribution.

The notes add three restrictions and clarifications. Density functions are defined over a **single interval only**, though the domain may be infinite (the syllabus example is f(x) = 3/x⁴ for x ≥ 1). The median or other percentiles are located **by direct consideration of an area** using the density function. **Explicit knowledge of the cumulative distribution function is not included.** Calculus from Pure Mathematics 3 is assumed.

## What a density function is

For a continuous random variable X, probabilities are areas under the graph of the probability density function f:

```
P(a < X < b) = ∫ₐᵇ f(x) dx
```

Two properties define a valid density function:

1. **f(x) ≥ 0** for every x in the interval;
2. **the total area is 1**: the integral of f over the whole interval equals 1.

Since the area above a single point is zero, P(X = a) = 0, and so P(X < a) and P(X ≤ a) are equal. The value f(a) is **not** a probability; it can exceed 1, as long as the total area is 1. Outside the stated interval f(x) = 0.

## Mean and variance

```
E(X)   = ∫ x f(x) dx
E(X²)  = ∫ x² f(x) dx
Var(X) = E(X²) − [E(X)]²
```

All integrals are over the interval where f is non-zero. If the graph of f is symmetrical about a line x = c, then E(X) = c, which saves an integration and gives a check.

## Worked example 1: a finite interval

The random variable X has density function f(x) = kx(4 − x) for 0 ≤ x ≤ 4, and 0 otherwise. Find k, E(X), Var(X) and P(X < 1).

**The constant.**

```
∫₀⁴ k(4x − x²) dx = k[2x² − x³/3]₀⁴ = k(32 − 64/3) = 32k/3 = 1   →   k = 3/32
```

**The mean.** The graph is a symmetrical arch about x = 2, so **E(X) = 2**. (Integrating (3/32)∫₀⁴(4x² − x³) dx gives (3/32)(256/3 − 64) = 2, confirming it.)

**The variance.**

```
E(X²) = (3/32) ∫₀⁴ (4x³ − x⁴) dx = (3/32)[x⁴ − x⁵/5]₀⁴ = (3/32)(256 − 204.8) = 4.8
Var(X) = 4.8 − 2² = 0.8
```

**A probability.**

```
P(X < 1) = (3/32)[2x² − x³/3]₀¹ = (3/32)(2 − 1/3) = 5/32
```

*Annotation:* expand the integrand before integrating. Trying to integrate x(4 − x) without expanding is the usual source of errors in the first mark.

## Worked example 2: an infinite domain

The syllabus example is f(x) = 3/x⁴ for x ≥ 1, and 0 otherwise. Improper integrals are handled by integrating to an upper limit and letting it grow; in practice, terms such as 1/x³ simply tend to 0.

**Validity.** f(x) > 0 for x ≥ 1, and ∫₁^∞ 3x⁻⁴ dx = [−x⁻³]₁^∞ = 0 − (−1) = 1.

**Mean and variance.**

```
E(X)  = ∫₁^∞ 3x⁻³ dx = [−3/(2x²)]₁^∞ = 3/2
E(X²) = ∫₁^∞ 3x⁻² dx = [−3/x]₁^∞ = 3
Var(X) = 3 − (3/2)² = 3/4
```

**A tail probability.** P(X > 2) = [−x⁻³]₂^∞ = 1/8.

## Medians and percentiles

The median m is the value that splits the area in half. Because the syllabus excludes explicit use of the cumulative distribution function, set up the area directly:

```
∫ (from the lower end of the interval to m) f(x) dx = 0.5
```

For the upper quartile use 0.75, for the 90th percentile 0.9, and so on.

**Example (infinite domain).** For f(x) = 3/x⁴, x ≥ 1: ∫₁ᵐ 3x⁻⁴ dx = 1 − m⁻³ = 0.5, so m³ = 2 and **m = 1.26**.

**Example (finite domain).** For f(x) = x/8, 0 ≤ x ≤ 4: ∫₀ᵐ x/8 dx = m²/16. The median satisfies m²/16 = 0.5, so m = √8 = **2.83**. The upper quartile satisfies m²/16 = 0.75, so m = √12 = **3.46**. The mean of this distribution is ∫₀⁴ x²/8 dx = 8/3 ≈ 2.67, which is less than the median: the density increases with x, so more of the area lies towards the upper end, and the long tail is on the left.

When the equation for m has more than one solution, choose the one inside the interval. A median outside the interval where f is non-zero means an error.

## Finding two unknown constants

If f(x) = a + bx for 0 ≤ x ≤ 2, and E(X) = 1.2, there are two conditions:

```
Total area:   ∫₀² (a + bx) dx = 2a + 2b = 1
Mean:         ∫₀² (ax + bx²) dx = 2a + 8b/3 = 1.2
Subtract:     (2/3)b = 0.2   →   b = 0.3,   a = 0.2
```

Then check that f(x) ≥ 0 throughout the interval: f(0) = 0.2 and f(2) = 0.8, so f is valid.

## Common mistakes

- Treating f(a) as P(X = a).
- Integrating over the wrong interval, or forgetting that f is zero outside it.
- Writing Var(X) = E(X²) − E(X), without squaring the mean.
- Not checking f(x) ≥ 0 when asked whether a function is a valid density function.
- Finding the median by setting f(m) = 0.5 instead of using an area.
- Sign errors in the limits of an infinite-domain integral, especially −x⁻³ at the lower limit.

## Exam technique

- **Show that** k equals a given value: write the integral, the anti-derivative with limits, and the equation equal to 1.
- **Find E(X):** check for symmetry first; if you use it, say so, for example "by symmetry, E(X) = 2".
- **Find the median:** write the area equation equal to 0.5 and solve, rejecting any root outside the interval.
- **Explain why** a function is not a valid density function: show either a negative value of f in the interval or a total area that is not 1.
- Keep exact fractions in E(X) and E(X²) until the final subtraction to avoid rounding drift.

## Official syllabus

Cambridge International, *Cambridge International AS & A Level Mathematics (9709) syllabus for examination in 2026 and 2027*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf), Subject content, section 6.3 "Continuous random variables" (Probability & Statistics 2, Paper 6).
