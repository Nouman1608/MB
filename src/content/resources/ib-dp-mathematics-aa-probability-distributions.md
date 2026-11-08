---
title: "IB DP Mathematics: Analysis and Approaches -- Probability, discrete and continuous distributions, binomial and normal Study Guide"
seoTitle: "IB Maths AA Probability and Distributions Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Probability, discrete and continuous distributions, binomial and normal"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.5
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-14"
description: "IB DP Maths AA study guide to probability, discrete and continuous random variables, binomial and normal distributions, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
---

This study guide teaches the probability and distributions unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 4.5–4.9 and 4.11–4.12 (SL and HL) and 4.13–4.14 (HL only). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

Once you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-aa-probability-distributions-revision-notes/) for recall and the [practice questions](/resources/ib-dp-mathematics-aa-probability-distributions-practice/) to test yourself. The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) lists every unit, and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) lets you tick them off. For where this unit sits in the course, see the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/).

## What this unit covers

| Section | What you must be able to do | Level |
|---|---|---|
| 4.5 | Use sample spaces, P(A) = n(A)/n(U), complements and expected number of occurrences | SL and HL |
| 4.6 | Use Venn, tree and sample space diagrams; combined, mutually exclusive, conditional and independent events | SL and HL |
| 4.7 | Work with discrete random variables and their expected value | SL and HL |
| 4.8 | Model with the binomial distribution; use its mean and variance | SL and HL |
| 4.9 | Use the normal distribution, its properties and inverse normal calculations | SL and HL |
| 4.11 | Use the formal definitions of conditional probability and test for independence | SL and HL |
| 4.12 | Standardize normal variables and find an unknown mean or standard deviation | SL and HL |
| 4.13 | Use Bayes' theorem for up to three events | HL only |
| 4.14 | Variance of discrete variables; continuous random variables; linear transformations | HL only |

## 4.5 Basic probability

A **trial** is one run of an experiment, such as rolling a die. An **outcome** is one possible result. The **sample space** U is the set of all outcomes, and an **event** A is a subset of U. When outcomes are equally likely:

`P(A) = n(A)/n(U)`

The **complement** A′ means "not A", and P(A′) = 1 − P(A). **Relative frequency** is the experimental probability: the number of times an event occurred divided by the number of trials.

The **expected number of occurrences** of A in n trials is n × P(A). It need not be a whole number.

**Worked example.** Two fair dice are rolled. Find P(sum = 8).

```
Sample space: 6 × 6 = 36 equally likely outcomes
Sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 outcomes
P(sum = 8) = 5/36
```

If 4% of items from a machine are faulty, the expected number faulty in a batch of 350 is 350 × 0.04 = 14.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--01-imath-aa-prob-sample-space.webp" width="900" height="952" alt="A six by six grid shows all 36 outcomes of two dice with their sums. The five cells with sum 8 are highlighted, so P(sum = 8) = 5/36 and the complement is 31/36." loading="lazy">
  <figcaption>Counting favourable cells in the sample space gives P(sum = 8) = 5/36.</figcaption>
</figure>


## 4.6 Combined events and diagrams

For any two events:

`P(A ∪ B) = P(A) + P(B) − P(A ∩ B)`

"Or" includes "both", so the overlap is subtracted once. Events are **mutually exclusive** if P(A ∩ B) = 0. They are **independent** if P(A ∩ B) = P(A)P(B). Conditional probability is

`P(A | B) = P(A ∩ B)/P(B)`, or equivalently `P(A ∩ B) = P(B)P(A | B)`.

Many problems are quicker with a Venn diagram, tree diagram or table of outcomes than with formulae.

**Worked example (Venn).** P(A) = 0.45, P(B) = 0.3 and P(A ∩ B) = 0.12.

```
P(A ∪ B) = 0.45 + 0.3 − 0.12 = 0.63
P(A | B) = 0.12/0.3 = 0.4
P(A)P(B) = 0.45 × 0.3 = 0.135 ≠ 0.12, so A and B are not independent
```

**Worked example (without replacement).** A bag holds 5 red and 3 blue counters. Two are taken without replacement. Find the probability they are the same colour, and the probability both are red given they are the same colour.

```
P(RR) = (5/8)(4/7) = 20/56
P(BB) = (3/8)(2/7) = 6/56
P(same) = 26/56 = 13/28
P(RR | same) = (20/56)/(26/56) = 10/13
```

On the second branch of the tree the denominator drops from 8 to 7. With replacement it would stay at 8.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--02-imath-aa-prob-venn.webp" width="900" height="916" alt="A Venn diagram with circle areas drawn in proportion to P(A) = 0.45 and P(B) = 0.30, overlap 0.12. Regions are 0.33, 0.12, 0.18 and 0.37 outside. P(A or B) = 0.63, P(A|B) = 0.4, and P(A)P(B) = 0.135 is not 0.12 so A and B are not independent." loading="lazy">
  <figcaption>The overlap is counted once in P(A ∪ B), and comparing P(A)P(B) with P(A ∩ B) tests independence.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--03-imath-aa-prob-tree.webp" width="900" height="940" alt="Tree for 5 red and 3 blue counters taken without replacement: first branches 5/8 and 3/8, second branches over 7. Outcomes RR 20/56, RB 15/56, BR 15/56, BB 6/56. P(same) = 13/28 and P(RR | same) = 10/13." loading="lazy">
  <figcaption>On the second branch the denominator drops from 8 to 7 without replacement.</figcaption>
</figure>


## 4.7 Discrete random variables

A **discrete random variable** X takes separate values, each with a probability. The distribution may be a table or a formula. The probabilities must sum to 1. The expected value is

`E(X) = Σ x P(X = x)`

If X is a player's gain, E(X) = 0 means the game is **fair**.

**Worked example.** P(X = x) = k(x + 2) for x ∈ {1, 2, 3, 4}. Find k, E(X) and P(X ≥ 3).

```
k(3 + 4 + 5 + 6) = 18k = 1  →  k = 1/18
E(X) = (1×3 + 2×4 + 3×5 + 4×6)/18 = 50/18 = 25/9
P(X ≥ 3) = (5 + 6)/18 = 11/18
```

**Fair game check.** You roll a fair die. You win 10 points on a six and lose 2 points otherwise. E(gain) = 10 × 1/6 − 2 × 5/6 = 0, so the game is fair.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--04-imath-aa-prob-discrete.webp" width="900" height="900" alt="Bar chart of P(X = x) = (x + 2)/18 for x = 1 to 4. Bars for 3 and 4 give P(X at least 3) = 11/18. A triangle marks E(X) = 25/9 as the balance point. HL note: Var(X) = 95/81." loading="lazy">
  <figcaption>E(X) is the balance point of the distribution; the HL variance is E(X²) − [E(X)]².</figcaption>
</figure>


## 4.8 The binomial distribution

X ~ B(n, p) models the number of successes in n trials when:

- there is a fixed number n of trials;
- each trial has two outcomes, success or failure;
- the probability of success p is the same on every trial;
- the trials are independent.

`E(X) = np` and `Var(X) = np(1 − p)`

The guide states that binomial probabilities should be found with technology in examinations. You do not need to prove the mean or variance.

**Worked example.** 15% of a type of seed fail to germinate. X is the number that fail in a pack of 20. X ~ B(20, 0.15).

```
P(X = 3) = 0.243        (binomial pdf)
P(X ≤ 2) = 0.405        (binomial cdf)
P(X ≥ 4) = 1 − P(X ≤ 3) = 0.352
E(X) = 20 × 0.15 = 3,  Var(X) = 20 × 0.15 × 0.85 = 2.55
```

The link to 4.5 is direct: np is the expected number of occurrences.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--05-imath-aa-prob-binomial.webp" width="900" height="856" alt="Bar chart of B(20, 0.15) for r = 0 to 9 with groups X at most 2 (0.405), X = 3 (0.243) and X at least 4 (0.352). A triangle marks the mean 3 and the variance is 2.55." loading="lazy">
  <figcaption>Binomial probabilities are found as pdf and cdf values; the mean np = 3 is the balance point.</figcaption>
</figure>


## 4.9 The normal distribution

X ~ N(μ, σ²) is a continuous distribution with a symmetric bell-shaped curve centred on μ. Many natural measurements are close to normal. Properties:

- mean = median = mode = μ, and the total area under the curve is 1;
- about 68% of values lie within μ ± σ, 95% within μ ± 2σ and 99.7% within μ ± 3σ.

Always sketch the curve and shade the region you want. Probabilities and inverse values must be found with technology. At this stage you do not transform to z.

**Worked example.** X ~ N(50, 4²).

```
P(45 < X < 58) = 0.872                 (normal cdf, lower 45, upper 58)
P(X < a) = 0.9  →  a = 55.1            (inverse normal, area 0.9 to the left)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--06-imath-aa-prob-normal.webp" width="900" height="1000" alt="Two curves for N(50, 4²). Area between 45 and 58 is 0.872 (z = −1.25 and 2). Area to the left of a is 0.9, giving a = 55.1." loading="lazy">
  <figcaption>Shade the region first; normal cdf finds an area and inverse normal finds the value.</figcaption>
</figure>


## 4.11 Formal conditional probability and independence

Section 4.11 makes the formal definitions precise. A and B are independent when

`P(A | B) = P(A) = P(A | B′)`

Knowing B does not change the probability of A.

**Worked example.** In a survey of 200 people, 90 are under 30. Of these, 36 cycle to work. Of the 110 aged 30 or over, 44 cycle. A = "cycles", B = "under 30".

```
P(A) = 80/200 = 0.4
P(A | B) = 36/90 = 0.4
P(A | B′) = 44/110 = 0.4
All three are equal, so A and B are independent.
```

## 4.12 Standardization and unknown parameters

The standardized value is

`z = (x − μ)/σ`

It gives the number of standard deviations x lies from the mean. For X ~ N(50, 4²), x = 58 has z = 2.

When μ or σ is unknown, find z from the inverse normal of the **standard** normal N(0, 1), then solve.

**Worked example (unknown σ).** X ~ N(120, σ²) and P(X > 130) = 0.2.

```
P(X < 130) = 0.8  →  z = 0.8416
(130 − 120)/σ = 0.8416  →  σ = 11.9
```

**Worked example (both unknown).** P(X < 30) = 0.1 and P(X > 60) = 0.05.

```
z for area 0.1:  −1.2816    so  30 = μ − 1.2816σ
z for area 0.95:  1.6449    so  60 = μ + 1.6449σ
Subtract: 30 = 2.9265σ  →  σ = 10.3,  μ = 43.1
```

Keep the unrounded σ when finding μ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--07-imath-aa-prob-normal-unknowns.webp" width="900" height="1150" alt="Two examples: P(X &gt; 130) = 0.2 for N(120, σ²) gives z = 0.8416 and σ = 11.9. P(X &lt; 30) = 0.1 and P(X &gt; 60) = 0.05 give z = −1.2816 and 1.6449, so σ = 10.3 and μ = 43.1." loading="lazy">
  <figcaption>Turn each area into a z-value, then solve for the unknown mean or standard deviation.</figcaption>
</figure>


## 4.13 Bayes' theorem (HL only)

Bayes' theorem reverses a conditional probability. For two events:

`P(B | A) = P(B)P(A | B) / [P(B)P(A | B) + P(B′)P(A | B′)]`

For three mutually exclusive, exhaustive events B₁, B₂, B₃, the denominator becomes the sum of three branches. The guide limits you to a maximum of three events. A tree diagram is the safest layout.

**Worked example.** 2% of a population has a condition. A test is positive for 95% of people with it and 8% of people without it. Find P(condition | positive).

```
P(D ∩ +) = 0.02 × 0.95 = 0.019
P(D′ ∩ +) = 0.98 × 0.08 = 0.0784
P(D | +) = 0.019/(0.019 + 0.0784) = 0.195
```

**Three events.** Machines A, B and C make 50%, 30% and 20% of the output, with fault rates 2%, 3% and 5%. P(faulty) = 0.010 + 0.009 + 0.010 = 0.029, so P(A | faulty) = 0.010/0.029 = 0.345.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--08-imath-aa-prob-bayes.webp" width="900" height="1140" alt="Proportional bars: of 10 000 people 200 have a condition; 190 of them and 784 of the others test positive, so P(D|+) = 190/974 = 0.195. Machines A, B, C make 50%, 30%, 20% of output with fault rates 2%, 3%, 5%, giving 0.010, 0.009, 0.010 and P(A|faulty) = 0.345." loading="lazy">
  <figcaption>Bayes’ theorem compares one branch with the total of all branches that lead to the observed result.</figcaption>
</figure>


## 4.14 Variance and continuous random variables (HL only)

**Variance of a discrete variable.**

`Var(X) = E(X²) − [E(X)]²`, where `E(X²) = Σ x² P(X = x)`

For the 4.7 example, E(X²) = (1×3 + 4×4 + 9×5 + 16×6)/18 = 80/9, so Var(X) = 80/9 − (25/9)² = 95/81.

**Continuous random variables.** A probability density function f satisfies f(x) ≥ 0 and

`∫ f(x) dx = 1` over (−∞, ∞), including piecewise functions.

- E(X) = ∫ x f(x) dx and E(X²) = ∫ x² f(x) dx
- Var(X) = E(X²) − [E(X)]², standard deviation = √Var(X)
- the **mode** is where f has its maximum value
- the **median** m satisfies ∫ f(x) dx from −∞ to m = 1/2

**Linear transformations** (discrete and continuous):

`E(aX + b) = aE(X) + b`, `Var(aX + b) = a²Var(X)`

**Worked example.** f(x) = kx² for 0 ≤ x ≤ 3, and 0 otherwise.

```
∫₀³ kx² dx = 9k = 1  →  k = 1/9
E(X)  = ∫₀³ x³/9 dx = 81/36 = 9/4
E(X²) = ∫₀³ x⁴/9 dx = 243/45 = 27/5
Var(X) = 27/5 − 81/16 = 27/80
Mode: f is increasing on [0, 3], so the mode is 3
Median: m³/27 = 1/2  →  m = 3/∛2 = 2.38
Y = 2X − 1:  E(Y) = 7/2,  Var(Y) = 4 × 27/80 = 27/20
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-probability-distributions--09-imath-aa-prob-continuous.webp" width="900" height="950" alt="Graph of f(x) = x²/9 on 0 to 3 with total area 1. The median 3/2^(1/3) ≈ 2.38 splits the area into two halves, the mean is 9/4, the mode is 3 and Var(X) = 27/80." loading="lazy">
  <figcaption>The median splits the area in half; mean, median and mode differ for a skewed pdf.</figcaption>
</figure>


## Using your GDC

Paper 1 allows no technology, at SL and HL. Venn and tree problems, discrete distributions, expected values, fair games, Bayes' theorem and pdf integrals of simple polynomials must be done by hand. Paper 2 (and HL Paper 3) require a GDC. There, use it for binomial pdf and cdf, normal cdf, inverse normal and definite integrals. Write the distribution and the calculator inputs, for example "X ~ B(20, 0.15), P(X ≤ 2)", before the answer.

## Common errors

- Adding P(A) + P(B) for "A or B" when the events overlap.
- Treating mutually exclusive and independent as the same thing. Exclusive events with non-zero probabilities are never independent.
- Keeping the same denominator on the second branch of a "without replacement" tree.
- Using P(X ≤ 4) for P(X < 4) with a binomial variable; for discrete variables P(X < 4) = P(X ≤ 3).
- Using the variance as the standard deviation, or entering σ² into the GDC where it asks for σ.
- Using the z-value of the wrong tail: P(X > 130) = 0.2 needs the z for area 0.8 to the left.
- In a pdf question, integrating outside the interval where f is non-zero, or forgetting that each piece of a piecewise f needs its own integral.
- Writing Var(aX + b) = aVar(X) + b.

## Next steps

Condense this unit with the [revision notes](/resources/ib-dp-mathematics-aa-probability-distributions-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-aa-probability-distributions-practice/). The integration skills for 4.14 are taught in the [AA calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). The [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/) helps you plan the final weeks.

## Frequently asked questions

**What does a fair game mean in probability?**
If X is a player's gain, the game is fair when E(X) = 0. For example, winning 10 points on a six and losing 2 otherwise with a fair die gives E(gain) = 0.

**What percentage of a normal distribution lies within one standard deviation of the mean?**
About 68% of values lie within μ ± σ, 95% within μ ± 2σ and 99.7% within μ ± 3σ. The mean, median and mode are all equal to μ.

**What does a standardized z-value tell you?**
z = (x − μ)/σ gives the number of standard deviations x lies from the mean. For X ~ N(50, 4²), x = 58 has z = 2.

**How do linear transformations affect the mean and variance?**
E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X), for both discrete and continuous random variables. Adding b shifts the mean but does not change the variance.

**Does the expected number of occurrences have to be a whole number?**
No. The expected number of occurrences of A in n trials is n × P(A), which need not be a whole number.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
