---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.9 Exponential and logarithmic functions"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.09
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-9"
description: "Study guide to IB Maths AA 2.9: graphs of aˣ, eˣ, logₐ x and ln x, the link aˣ = e^(x ln a), exponentials and logs as inverses, and growth and decay models."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.9 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists exponential functions and their graphs, f(x) = aˣ with a > 0 and f(x) = eˣ, and logarithmic functions and their graphs, f(x) = logₐ x and f(x) = ln x for x > 0. It also lists the relationships aˣ = e^(x ln a) and logₐ aˣ = x = a^(logₐ x), where a, x > 0 and a ≠ 1, and the understanding that exponential and logarithmic functions are inverses of each other.

The [rational, exponential and logarithmic functions guide](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations/) lists the graph facts with one example. This page goes further: comparing graphs with different bases, transformed exponentials and logarithms with their asymptotes, finding inverses of these functions, and reading the parameters of growth and decay models. The laws of logarithms themselves are in the [exponents, logarithms, binomial theorem and proof guide](/resources/ib-dp-mathematics-aa-exponents-logarithms-binomial-proof/). Afterwards, use the [2.9 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-9-revision-notes/) and the [2.9 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-9-practice/).

## The two families side by side

| | y = aˣ (a > 0, a ≠ 1) | y = logₐ x (a > 0, a ≠ 1) |
|---|---|---|
| Domain | x ∈ ℝ | x > 0 |
| Range | y > 0 | y ∈ ℝ |
| Fixed point | (0, 1) | (1, 0) |
| Asymptote | y = 0 (horizontal) | x = 0 (vertical) |
| a > 1 | Increasing (growth) | Increasing |
| 0 < a < 1 | Decreasing (decay) | Decreasing |

Every row on the right is the row on the left with x and y swapped, because the two functions are inverses.

## Comparing bases

- All graphs y = aˣ pass through (0, 1).
- For x > 0, a larger base gives a higher graph: 3ˣ > 2ˣ. For x < 0 the order reverses: 3⁻¹ = 1/3 < 2⁻¹ = 1/2.
- y = (1/a)ˣ = a⁻ˣ is the reflection of y = aˣ in the y-axis. So (1/2)ˣ is the mirror image of 2ˣ.
- y = eˣ, with e ≈ 2.718, lies between 2ˣ and 3ˣ for x > 0.

## Changing base with aˣ = e^(x ln a)

Since a = e^(ln a), raising both sides to the power x gives aˣ = e^(x ln a). This lets you write any exponential model in base e.

**Example.** Write 5(0.8)ᵗ in the form 5e^(kt).

```
0.8ᵗ = e^(t ln 0.8), so k = ln 0.8 = −0.223 (3 s.f.)
```

The negative k confirms decay. The reverse direction is just as useful: e^(0.035t) = (e^0.035)ᵗ = 1.0356ᵗ, a growth of about 3.56% per unit time.

## Inverses: undoing each other

logₐ aˣ = x says "log base a undoes raising a to a power". a^(logₐ x) = x says the reverse. So:

```
log₂ 2⁹ = 9        5^(log₅ 7) = 7        ln e^(−3) = −3        e^(ln 0.5) = 0.5
```

To find the inverse of a transformed exponential or logarithm, use the usual method from 2.5 and these two identities.

### Worked example 1: a transformed exponential

Let f(x) = 2 − 3e^(−x).

(a) State the asymptote, intercepts and range. (b) Find f⁻¹(x) and its domain.

```
(a) As x → ∞, e^(−x) → 0, so f(x) → 2: asymptote y = 2
    y-intercept: f(0) = 2 − 3 = −1  →  (0, −1)
    x-intercept: e^(−x) = 2/3, so −x = ln(2/3) and x = ln(3/2)  →  (0.405, 0)
    3e^(−x) > 0, so f(x) < 2: range y < 2
(b) y = 2 − 3e^(−x)
    e^(−x) = (2 − y)/3
    −x = ln((2 − y)/3)
    f⁻¹(x) = ln(3/(2 − x)),  x < 2
```

The domain of f⁻¹ is the range of f, and the horizontal asymptote y = 2 of f becomes the vertical asymptote x = 2 of f⁻¹. The graph of f is e^(−x) (a reflection of eˣ in the y-axis) stretched by 3, reflected in the x-axis and translated up 2, which is why it increases towards 2 from below.

### Worked example 2: a transformed logarithm

Let g(x) = log₃(x + 9) − 2.

```
Domain:    x + 9 > 0, so x > −9; vertical asymptote x = −9
x-intercept: log₃(x + 9) = 2, so x + 9 = 9 and x = 0
y-intercept: g(0) = log₃ 9 − 2 = 0
Inverse:   y + 2 = log₃(x + 9), so x + 9 = 3^(y + 2)
           g⁻¹(x) = 3^(x + 2) − 9, with horizontal asymptote y = −9
```

Both intercepts are at the origin, a coincidence worth checking rather than assuming. The asymptote of the inverse is again the swapped asymptote.

## Exponential models

A model y = A e^(kt) (or y = A bᵗ) has:

- **A**, the initial value at t = 0;
- **k > 0** for growth and **k < 0** for decay (equivalently b > 1 or 0 < b < 1);
- a horizontal asymptote y = 0, unless a constant is added, as in T = 20 + 70e^(−0.1t), which levels off at 20.

### Worked example 3: doubling time

In an invented model, a town's population is P(t) = 2400e^(0.035t), t years after 2020.

```
Initial population: P(0) = 2400
Growth factor per year: e^0.035 = 1.0356, about 3.56% per year
Doubling: 2400e^(0.035t) = 4800
          e^(0.035t) = 2
          t = ln 2 / 0.035 = 19.8 years
```

The doubling time does not depend on the starting value: any population following this model doubles every 19.8 years. For decay, the same algebra with e^(kt) = 1/2 gives the half-life, ln 2/|k|.

### Worked example 4: a model from two readings

An invented quantity is 50 units at t = 0 and 30 units at t = 4. Find k in N = 50e^(kt), and predict N at t = 10.

```
50e^(4k) = 30
e^(4k) = 0.6
k = ln(0.6)/4 = −0.128 (3 s.f.)
N(10) = 50e^(10k) = 50(0.6)^2.5 = 13.9 units
```

Writing e^(10k) as (e^(4k))^2.5 = 0.6^2.5 avoids rounding k before the prediction; carry the exact form as long as you can.

## Common mistakes

- Giving the range of aˣ as y ≥ 0; the graph never reaches 0.
- Forgetting that ln and logₐ need a positive input, so ln(x + 9) needs x > −9.
- Writing aˣ = e^(a ln x) instead of e^(x ln a).
- Sign errors with e^(−x): it is a decreasing function.
- Treating ln(a + b) as ln a + ln b.
- Leaving the domain of an inverse unstated, or stating it as all real numbers.

## Exam technique

- **Write down the asymptote:** an equation such as y = 2, not a number.
- **Find the inverse:** isolate the exponential or the log first, then apply ln or the base to both sides.
- **Exact answers:** ln(3/2) is exact; 0.405 is not. Give exact forms on Paper 1 unless told otherwise.
- **Interpret a parameter:** say what it means in the context, with units.

## Where to go next

Condense this with the [2.9 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-9-revision-notes/), then try the [2.9 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-9-practice/). Solving exponential and logarithmic equations is developed in the [2.10 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-10/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.9.
