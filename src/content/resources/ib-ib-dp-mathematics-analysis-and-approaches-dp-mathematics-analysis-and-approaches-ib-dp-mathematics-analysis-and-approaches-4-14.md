---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.14 Variance of discrete and continuous random variables (HL)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.95
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-14"
description: "HL study guide to IB DP Maths AA section 4.14: variance of discrete variables, probability density functions, mode, median, mean and linear transformations."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 4.14 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) is additional
higher level (AHL) content, examined at HL only. It covers the **variance of a discrete random
variable**, **continuous random variables and their probability density functions**, the **mode and
median** of continuous random variables, the **mean, variance and standard deviation** of both kinds
of variable, and **the effect of linear transformations of X**. Probability density functions can be
piecewise.

The [probability and distributions study guide](/resources/ib-dp-mathematics-aa-probability-distributions/)
introduces each of these with one example. This page explains the ideas behind the formulae and works
through a polynomial pdf, a piecewise pdf and a transformation problem in full. Afterwards, use the
[4.14 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-14-revision-notes/)
and the
[4.14 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-14-practice/).
The integration you need is covered in the
[integration and kinematics study guide](/resources/ib-dp-mathematics-aa-sl-integration-kinematics/).

## Variance of a discrete random variable

The mean E(X) = μ = Σ x P(X = x) measures the centre of a distribution. The variance measures spread
as the **expected squared distance from the mean**:

```
Var(X) = E((X − μ)²) = Σ (x − μ)² P(X = x)
```

Expanding the bracket gives the form that is usually quicker:

```
Var(X) = E(X²) − [E(X)]²,   where E(X²) = Σ x² P(X = x)
```

The standard deviation is √Var(X), in the same units as X.

### Worked example 1

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.1 | 0.3 | 0.4 | 0.2 |

```
E(X)  = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7
E(X²) = 0(0.1) + 1(0.3) + 4(0.4) + 9(0.2) = 3.7
Var(X) = 3.7 − 1.7² = 3.7 − 2.89 = 0.81
SD = √0.81 = 0.9
```

Check with the definition: (−1.7)²(0.1) + (−0.7)²(0.3) + (0.3)²(0.4) + (1.3)²(0.2)
= 0.289 + 0.147 + 0.036 + 0.338 = 0.81. Both routes agree.

**Square the values, not the probabilities.** E(X²) uses x² with the original P(X = x).

## Continuous random variables

A continuous random variable can take any value in an interval, so P(X = a) = 0 for any single
value; only intervals have probability. Its distribution is described by a **probability density
function (pdf)** f, with

```
f(x) ≥ 0 for all x,       ∫ f(x) dx = 1 over the whole domain
P(a < X < b) = ∫ₐᵇ f(x) dx
```

Because single values have zero probability, P(a < X < b) and P(a ≤ X ≤ b) are equal. The height
f(x) is not a probability; it is a density, and it can exceed 1.

The summary measures replace sums with integrals:

| Measure | Definition |
|---|---|
| Mean | E(X) = ∫ x f(x) dx |
| E(X²) | ∫ x² f(x) dx |
| Variance | Var(X) = E(X²) − [E(X)]² |
| Mode | The value of x at which f(x) is greatest |
| Median m | The value with ∫ f(x) dx from the lower end of the domain up to m equal to 1/2 |

## Worked example 2: a polynomial pdf

f(x) = k(4 − x²) for 0 ≤ x ≤ 2, and f(x) = 0 otherwise.

```
Total area:  k ∫₀² (4 − x²) dx = k[4x − x³/3]₀² = k(8 − 8/3) = 16k/3 = 1
             so k = 3/16
E(X)  = (3/16) ∫₀² (4x − x³) dx = (3/16)[2x² − x⁴/4]₀² = (3/16)(8 − 4) = 3/4
E(X²) = (3/16) ∫₀² (4x² − x⁴) dx = (3/16)(32/3 − 32/5) = (3/16)(64/15) = 4/5
Var(X) = 4/5 − (3/4)² = 4/5 − 9/16 = 19/80
```

**Mode.** f′(x) = −(3/8)x ≤ 0, so f is decreasing on [0, 2] and its greatest value is at the end of
the domain: the mode is 0. A mode at an endpoint is common; always check where f is largest, not
only where f′(x) = 0.

**Median.** (3/16)(4m − m³/3) = 1/2, which simplifies to m³ − 12m + 8 = 0. Using technology, the
root in [0, 2] is m = 0.695 (3 s.f.). The median lies above the mode and below the mean, as expected
for a distribution with a long tail to the right.

## Worked example 3: a piecewise pdf

f(x) = kx for 0 ≤ x ≤ 2, f(x) = k(6 − x)/2 for 2 < x ≤ 6, and 0 otherwise.

```
Area of first piece:  ∫₀² kx dx = 2k
Area of second piece: ∫₂⁶ k(6 − x)/2 dx = (k/2)[6x − x²/2]₂⁶ = (k/2)(18 − 10) = 4k
6k = 1, so k = 1/6
```

**Mode.** Both pieces equal 1/3 at x = 2, the peak of the graph, so the mode is 2.

**Median.** P(X ≤ 2) = 2k = 1/3, which is less than 1/2, so the median is in the second piece:

```
1/3 + ∫₂ᵐ (6 − x)/12 dx = 1/2
(1/12)(6m − m²/2 − 10) = 1/6
m² − 12m + 24 = 0   →   m = 6 − 2√3 = 2.54 (3 s.f.)
```

The other root, 6 + 2√3, lies outside the domain and is rejected.

**Mean and variance.** Integrate each piece separately and add:

```
E(X)  = ∫₀² x²/6 dx + ∫₂⁶ x(6 − x)/12 dx = 4/9 + 20/9 = 8/3
E(X²) = ∫₀² x³/6 dx + ∫₂⁶ x²(6 − x)/12 dx = 2/3 + 8 = 26/3
Var(X) = 26/3 − 64/9 = 14/9
```

## Linear transformations

If Y = aX + b, for constants a and b, then for discrete and continuous variables alike:

```
E(aX + b) = aE(X) + b
Var(aX + b) = a² Var(X)
SD(aX + b) = |a| × SD(X)
```

Adding b shifts every value, so the mean moves but the spread does not. Multiplying by a scales every
distance from the mean by a, so squared distances, and hence the variance, scale by a².

### Worked example 4

Using the distribution in worked example 1, a game pays Y = 5X − 2 points.

```
E(Y)  = 5(1.7) − 2 = 6.5
Var(Y) = 5² × 0.81 = 20.25
SD(Y) = 5 × 0.9 = 4.5
```

For Y = 2 − 5X, the mean becomes 2 − 8.5 = −6.5, but the variance is still 25 × 0.81 = 20.25, since
(−5)² = 25.

## Common mistakes

- Writing Var(X) = E(X²) − E(X) or forgetting to square E(X).
- Squaring the probabilities when finding E(X²).
- Integrating a piecewise pdf as one expression across the join.
- Finding the mode by setting f′(x) = 0 when f is monotonic on its domain, so the maximum is at an end.
- Solving for the median and keeping a root outside the domain.
- Writing Var(aX + b) = aVar(X) + b, or a negative variance for negative a.

## Exam technique and command words

- **Show that** k = …: write the integral equal to 1 and evaluate it with visible steps.
- **Find** E(X) or Var(X): write the integral or sum before the value. On Paper 2, a GDC may evaluate
  the integral, but the expression earns method marks.
- **Hence**: use E(X) or Var(X) from an earlier part with the transformation rules, rather than
  starting again.
- **Write down** the mode: from a sketch or the shape of f, with no calculation needed.

## Where to go next

Condense the section with the
[4.14 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-14-revision-notes/),
then work through the
[4.14 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-14-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section AHL 4.14: variance of a discrete random variable; continuous
random variables and their probability density functions; mode and median of continuous random
variables; mean, variance and standard deviation of discrete and continuous random variables; the
effect of linear transformations of X.
