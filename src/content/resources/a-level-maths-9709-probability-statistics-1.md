---
title: "Cambridge International AS & A Level Mathematics 9709: Probability & Statistics 1 -- Study Guide"
seoTitle: "A Level Maths 9709 Probability & Statistics 1 Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability & Statistics 1"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "representation-of-data-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "permutations-and-combinations-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "probability-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "discrete-random-variables-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-1-cambridge-alevel"
    subtopic: "the-normal-distribution-cambridge-alevel-maths"
description: "Study guide for Cambridge 9709 Probability & Statistics 1 (Paper 5): data, arrangements, probability, binomial, geometric and normal, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This guide teaches topic 5, Probability & Statistics 1, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It covers syllabus sections 5.1 to 5.5. This content is examined on **Paper 5**: 1 hour 15 minutes, 50 marks, 6 to 8 structured questions. Paper 5 is worth 40% of the AS Level and 20% of the A Level, and it is the foundation for Paper 6 (Probability & Statistics 2). A scientific calculator is allowed, and you get the formula list and statistical tables (MF19).

Related pages: the [Probability & Statistics 1 revision notes](/resources/a-level-maths-9709-probability-statistics-1-revision-notes/), the existing [Probability & Statistics 1 practice questions](/resources/a-level-mathematics-probability-statistics-1-practice/), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/) and the free [AS Level diagnostic](/practice/9709/diagnostic/as/).

## What this unit covers

| Section | What you must be able to do | Paper |
|---|---|---|
| 5.1 Representation of data | Choose and interpret stem-and-leaf (including back-to-back), box-and-whisker, histograms, cumulative frequency; mean, median, mode, range, IQR, standard deviation; use Σx, Σx² and coded totals, for up to two data sets | 5 |
| 5.2 Permutations and combinations | Selections; arrangements in a line with repetition and restriction (not circles) | 5 |
| 5.3 Probability | Enumeration, addition and multiplication rules, exclusive and independent events, conditional probability | 5 |
| 5.4 Discrete random variables | Probability distribution tables, E(X), Var(X); B(n, p) and Geo(p) | 5 |
| 5.5 The normal distribution | N(μ, σ²) using tables, finding μ or σ, normal approximation to the binomial | 5 |

The syllabus says Paper 5 questions are mainly numerical and use no algebra beyond Pure Mathematics 1.

## 5.1 Representation of data

### Choosing a diagram

- **Stem-and-leaf**: keeps every raw value; good for small data sets. A back-to-back diagram compares two sets on one shared stem. Always include a key, for example "3 | 7 means 37".
- **Box-and-whisker plot**: shows minimum, lower quartile, median, upper quartile and maximum. Good for comparing spread and skew; the raw values are lost.
- **Histogram**: for grouped continuous data. The **area** of each bar is proportional to frequency, so the height is the **frequency density** = frequency ÷ class width.
- **Cumulative frequency graph**: plot cumulative frequency against the **upper class boundary**, then read off medians, quartiles, percentiles, or the number above or below a value.

Example: a class 10 ≤ t < 20 with frequency 30 has frequency density 30 ÷ 10 = 3. A class 20 ≤ t < 25 with frequency 20 has frequency density 20 ÷ 5 = 4. The second bar is taller even though it holds fewer values.

### Measures of centre and spread

Mean, median and mode measure centre. Range, interquartile range (IQR = Q₃ − Q₁) and standard deviation measure spread. The median and IQR are not affected by extreme values; the mean and standard deviation are. When you compare two data sets, make one comment on centre and one on spread, each in context.

### Mean and standard deviation from totals

These formulas are in MF19:

```
mean x̄ = Σx / n        standard deviation = √( Σx²/n − x̄² )
grouped: x̄ = Σxf / Σf   standard deviation = √( Σx²f/Σf − x̄² )
```

For grouped data, use the class **mid-points** as x.

**Coded totals.** If you are given Σ(x − a) and Σ(x − a)², work with y = x − a. The mean shifts by a; the standard deviation does not change.

**Worked example.** For 12 values, Σ(x − 20) = 30 and Σ(x − 20)² = 210.

```
mean of (x − 20) = 30/12 = 2.5          so x̄ = 20 + 2.5 = 22.5
variance = 210/12 − 2.5² = 17.5 − 6.25 = 11.25
standard deviation = √11.25 = 3.35 (3 s.f.)
```

**Two data sets.** Set A: n = 8, Σx = 96, Σx² = 1240. Set B: n = 12, Σx = 168, Σx² = 2460. Add the totals, not the means:

```
n = 20,  Σx = 264,  Σx² = 3700
combined mean = 264/20 = 13.2
combined variance = 3700/20 − 13.2² = 185 − 174.24 = 10.76
combined standard deviation = √10.76 = 3.28 (3 s.f.)
```

## 5.2 Permutations and combinations

A **permutation** is an arrangement, so order matters. A **combination** is a selection, so order does not matter. The formula ⁿCᵣ = n! / (r!(n − r)!) is in MF19.

- n different objects in a line: n! ways.
- Repeated objects: divide by the factorial of each repeat count.
- "Must be together": glue the group into one unit, arrange the units, then arrange inside the group.
- "Must not be together": total minus together, or arrange the others and place the separated items in the gaps.
- Two rows: the syllabus allows questions on people seated in two or more rows. Treat each row as its own line and multiply.

Circular arrangements are not examined.

**Worked example.** The letters of PARALLEL are arranged in a line. There are 8 letters with A twice and L three times.

```
all arrangements = 8! / (2! × 3!) = 40320 / 12 = 3360
As together: treat AA as one unit → 7 units, L three times
            = 7! / 3! = 840
As not together = 3360 − 840 = 2520
```

**Worked example (selection).** A committee of 5 is chosen from 6 men and 4 women. At least 2 women must be included.

```
2 women, 3 men: ⁴C₂ × ⁶C₃ = 6 × 20 = 120
3 women, 2 men: ⁴C₃ × ⁶C₂ = 4 × 15 = 60
4 women, 1 man: ⁴C₄ × ⁶C₁ = 1 × 6  = 6
total = 186
```

Split "at least" into exact cases and add. Multiplying ⁴C₂ by ⁸C₃ counts some committees more than once.

## 5.3 Probability

### Equally likely outcomes

For two fair dice there are 36 equally likely outcomes. P(total 8) = 5/36, because (2,6), (3,5), (4,4), (5,3), (6,2) give 8. For balls drawn from a bag, you can count with combinations: P(event) = (ways to get the event) ÷ (total ways).

### Addition and multiplication

- **Mutually exclusive** events cannot both happen: P(A ∩ B) = 0, so P(A or B) = P(A) + P(B).
- **Independent** events: one does not change the probability of the other. Test by checking whether P(A ∩ B) = P(A) × P(B).

**Worked example.** Two fair dice are thrown. A is "the first die shows an even number" and B is "the total is 7". P(A) = 1/2 and P(B) = 6/36 = 1/6. The outcomes in A ∩ B are (2,5), (4,3), (6,1), so P(A ∩ B) = 3/36 = 1/12. Since 1/2 × 1/6 = 1/12, **A and B are independent**. They are not exclusive, because P(A ∩ B) ≠ 0.

### Conditional probability

```
P(A | B) = P(A ∩ B) / P(B)
```

This formula is not in MF19; learn it. Tree diagrams handle most questions.

**Worked example.** On 30% of days it rains. On a rainy day, P(Ali is late) = 0.25. On a dry day, P(Ali is late) = 0.1.

```
P(late) = 0.3 × 0.25 + 0.7 × 0.1 = 0.075 + 0.07 = 0.145
P(rain | late) = 0.075 / 0.145 = 15/29 = 0.517 (3 s.f.)
```

The numerator is one branch; the denominator is every branch that ends in "late".

## 5.4 Discrete random variables

### Probability distribution tables

List every value of X with its probability. The probabilities must add to 1. From MF19:

```
E(X) = Σxp        Var(X) = Σx²p − {E(X)}²
```

**Worked example.** Two counters are taken without replacement from a bag of 3 red and 2 blue. X is the number of red counters.

```
P(X = 0) = 2/5 × 1/4 = 1/10
P(X = 2) = 3/5 × 2/4 = 3/10
P(X = 1) = 1 − 1/10 − 3/10 = 3/5

E(X)  = 0 × 1/10 + 1 × 3/5 + 2 × 3/10 = 6/5
E(X²) = 1 × 3/5 + 4 × 3/10 = 9/5
Var(X) = 9/5 − (6/5)² = 9/25 = 0.36
```

### Binomial distribution B(n, p)

Use it when there is a fixed number n of independent trials, each with two outcomes and a constant probability p of success. From MF19:

```
P(X = r) = ⁿCᵣ pʳ (1 − p)ⁿ⁻ʳ     E(X) = np     Var(X) = np(1 − p)
```

**Worked example.** X ~ B(10, 0.3). Find P(X ≥ 2).

```
P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)
         = 1 − 0.7¹⁰ − 10 × 0.3 × 0.7⁹
         = 1 − 0.028248 − 0.121061 = 0.851 (3 s.f.)
E(X) = 3,  Var(X) = 2.1
```

### Geometric distribution Geo(p)

Use it when independent trials with constant p are repeated **until the first success**, and X is the trial number of that success (X = 1, 2, 3, …). From MF19:

```
P(X = r) = p(1 − p)ʳ⁻¹       E(X) = 1/p
```

Two results follow directly: P(X > r) = (1 − p)ʳ (the first r trials all fail) and P(X ≤ r) = 1 − (1 − p)ʳ. The syllabus asks only for the expectation of the geometric distribution, not its variance.

**Worked example.** A fair die is thrown until a six appears. P(first six on the 4th throw) = (5/6)³ × 1/6 = 125/1296 = 0.0965. The expected number of throws is 1 ÷ (1/6) = 6.

## 5.5 The normal distribution

If X ~ N(μ, σ²), standardise with Z = (X − μ)/σ and use the table of Φ(z) = P(Z ≤ z). For negative z, Φ(−z) = 1 − Φ(z). The syllabus requires full working for standardisation, and sketches may be required. A quick sketch with the mean marked and the region shaded stops most sign errors.

**Worked example.** X ~ N(120, 15²).

```
P(X > 140):  z = (140 − 120)/15 = 1.333
             P = 1 − Φ(1.333) = 1 − 0.9088 = 0.0912 (3 s.f.)

P(100 < X < 130):  z₁ = −1.3333, z₂ = 0.6667
             P = Φ(0.6667) − Φ(−1.3333) = 0.7475 − 0.0912 = 0.656 (3 s.f.)

value exceeded by 5%:  P(Z ≤ z) = 0.95 → z = 1.645 (critical values table)
             x = 120 + 1.645 × 15 = 145 (3 s.f.)
```

**Finding σ.** X ~ N(80, σ²) and P(X > 90) = 0.2. Then Φ(z) = 0.8, so z = 0.842, and (90 − 80)/σ = 0.842, giving **σ = 11.9** (3 s.f.). With both μ and σ unknown you get two equations of this form and solve them simultaneously.

### Normal approximation to the binomial

If X ~ B(n, p) and n is large enough that np > 5 and nq > 5 (q = 1 − p), use X ≈ N(np, npq) with a **continuity correction**.

**Worked example.** X ~ B(80, 0.25). np = 20 and nq = 60, both above 5, so use N(20, 15).

```
P(X ≤ 15) ≈ P(Y < 15.5)
z = (15.5 − 20)/√15 = −1.162
P = 1 − Φ(1.162) = 1 − 0.8774 = 0.123 (3 s.f.)
```

Write the discrete inequality first ("X ≤ 15"), then decide which side of 15 the half goes.

## Common errors

- Histogram heights drawn as frequency instead of frequency density.
- Cumulative frequency plotted at class mid-points instead of upper boundaries.
- Combined standard deviation found by averaging the two standard deviations.
- Forgetting to divide by the factorial of repeated letters.
- Treating "exclusive" and "independent" as the same thing.
- Using a geometric model for a fixed number of trials (that is binomial).
- Using n − 1 instead of n in the standard deviation formula for Paper 5 data.
- z-values from the table read to 2 d.p. when 3 d.p. are needed for 3 s.f. accuracy.

## Next steps

Condense this unit with the [revision notes and quick self-test](/resources/a-level-maths-9709-probability-statistics-1-revision-notes/), then try the [practice questions](/resources/a-level-mathematics-probability-statistics-1-practice/). Paper 6 builds on this unit: see the [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 5, Probability & Statistics 1 (for Paper 5): sections 5.1 to 5.5.
