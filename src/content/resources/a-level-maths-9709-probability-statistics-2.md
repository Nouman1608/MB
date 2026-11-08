---
title: "Cambridge International AS & A Level Mathematics 9709: Probability & Statistics 2 -- Study Guide"
seoTitle: "A Level Maths 9709 Probability & Statistics 2 Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "the-poisson-distribution-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "linear-combinations-of-random-variables-cambridge"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "continuous-random-variables-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "sampling-and-estimation-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "hypothesis-tests-cambridge-alevel-maths"
description: "Study guide for Cambridge 9709 Probability & Statistics 2 (Paper 6): Poisson, linear combinations, PDFs, estimation and hypothesis tests, fully worked."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This guide teaches topic 6, Probability & Statistics 2, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It covers syllabus sections 6.1 to 6.5. This content is examined on **Paper 6**: 1 hour 15 minutes, 50 marks, 6 to 8 structured questions, worth 20% of the A Level. Paper 6 is offered only as part of the full A Level, and it cannot be combined with Paper 4 (Mechanics). The syllabus assumes you know all of Probability & Statistics 1 and the calculus in Pure Mathematics 3. A scientific calculator is allowed, and you get MF19 (formulae and statistical tables).

Related pages: the [Probability & Statistics 2 revision notes](/resources/a-level-maths-9709-probability-statistics-2-revision-notes/), the [Probability & Statistics 2 practice questions](/resources/a-level-maths-9709-probability-statistics-2-practice/), the [Probability & Statistics 1 study guide](/resources/a-level-maths-9709-probability-statistics-1/), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/) and the free [A Level diagnostic](/practice/9709/diagnostic/a-level/).

## What this unit covers

| Section | What you must be able to do | Paper |
|---|---|---|
| 6.1 The Poisson distribution | Po(λ) probabilities; mean = variance = λ; model random events; approximate B(n, p) by Poisson; approximate Po(λ) by a normal | 6 |
| 6.2 Linear combinations of random variables | E and Var of aX + b and aX + bY; normal and Poisson sums | 6 |
| 6.3 Continuous random variables | Properties of a probability density function (single interval); probabilities, mean, variance, median and percentiles | 6 |
| 6.4 Sampling and estimation | Samples and randomness; distribution of X̄; Central Limit Theorem; unbiased estimates; confidence intervals for a mean and a proportion | 6 |
| 6.5 Hypothesis tests | One- and two-tailed tests for binomial, Poisson and normal means; Type I and Type II errors | 6 |

## 6.1 The Poisson distribution

X ~ Po(λ) models the number of events in a fixed interval of time or space when events occur **singly, independently, at random, and at a constant average rate**. From MF19:

```
P(X = r) = e^(−λ) λʳ / r!        mean = λ        variance = λ
```

If the rate is λ per unit, the count in t units is Po(λt). A mean and variance that are roughly equal in data is evidence that a Poisson model may fit.

**Worked example.** Calls reach a help desk at random at a mean rate of 3.2 per hour.

```
X ~ Po(3.2)
P(X = 2) = e^(−3.2) × 3.2² / 2 = 0.209 (3 s.f.)
P(X ≥ 3) = 1 − e^(−3.2)(1 + 3.2 + 3.2²/2) = 0.620 (3 s.f.)
P(no calls in 30 minutes): Y ~ Po(1.6), P(Y = 0) = e^(−1.6) = 0.202 (3 s.f.)
```

### Poisson approximation to the binomial

If X ~ B(n, p) with n large and p small (the syllabus gives n > 50 and np < 5, approximately), use X ≈ Po(np).

**Worked example.** 1.5% of items are faulty; a box holds 200. n = 200 > 50 and np = 3 < 5, so use Po(3).

```
P(at most 2 faulty) ≈ e^(−3)(1 + 3 + 9/2) = 8.5e^(−3) = 0.423 (3 s.f.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--02-poisson-approx-binomial.webp" width="900" height="890" alt="Paired bars for r = 0 to 9 compare the exact binomial B(200, 0.015) with Po(3); they are almost identical. P(X ≤ 2) is 0.421 exactly and 0.423 by the Poisson. The rule is n &gt; 50 and np &lt; 5." loading="lazy">
  <figcaption>B(200, 0.015) and Po(3) side by side, showing why Po(np) works for large n and small p.</figcaption>
</figure>


### Normal approximation to the Poisson

If λ is large (λ > 15, approximately), use X ≈ N(λ, λ) with a continuity correction.

**Worked example.** X ~ Po(25). Find P(X > 30).

```
N(25, 25):  P(X > 30) = P(X ≥ 31) ≈ P(Y > 30.5)
z = (30.5 − 25)/5 = 1.1
P = 1 − Φ(1.1) = 1 − 0.8643 = 0.136 (3 s.f.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--01-poisson-events.webp" width="900" height="900" alt="Bar chart of Po(3.2) for r = 0 to 10. The bar at r = 2 is gold with probability 0.209 and the bars from r = 3 upward are dark teal with total 0.620. A dashed line at 3.2 marks the mean, which equals the variance." loading="lazy">
  <figcaption>The Po(3.2) distribution, with P(X = 2) = 0.209 and P(X ≥ 3) = 0.620 marked.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--03-poisson-normal-correction.webp" width="900" height="950" alt="Bars for Po(25) with the curve N(25, 25) drawn over them. Bars from r = 31 are gold and a dashed line at 30.5 shows the continuity-corrected boundary. z = 1.1 gives 1 − Φ(1.1) = 0.136." loading="lazy">
  <figcaption>Why P(X &gt; 30) becomes P(Y &gt; 30.5) when a Poisson is approximated by a normal.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--09-normal-68-95-997.webp" width="900" height="950" alt="Bell curve for N(250, 4²), symmetric about 250 g. Shaded bands show 68% within 1 sd (246 to 254), 95% within 2 sd and 99.7% within 3 sd. The points of inflection at 246 and 254 are marked, and a second row gives z from −3 to 3." loading="lazy">
  <figcaption>The Normal curve is symmetrical, has inflection points at μ ± σ and holds about 68%, 95% and 99.7% of values within 1, 2 and 3 sd.</figcaption>
</figure>


## 6.2 Linear combinations of random variables

These results are **not** in MF19. Learn them; proofs are not required.

```
E(aX + b) = aE(X) + b              Var(aX + b) = a² Var(X)
E(aX + bY) = aE(X) + bE(Y)
Var(aX + bY) = a² Var(X) + b² Var(Y)     (X, Y independent)
```

Variances always **add**, even for a difference: Var(X − Y) = Var(X) + Var(Y).

- If X is normal, aX + b is normal.
- If X and Y are independent normals, aX + bY is normal.
- If X and Y are independent Poissons, X + Y is Poisson with mean λ₁ + λ₂.

**Two separate items or one item scaled?** The total mass of 4 separate bags is X₁ + X₂ + X₃ + X₄, with variance 4σ². Four times the mass of one bag is 4X, with variance 16σ².

**Worked example.** Bags of flour have mass X ~ N(1010, 8²) grams. A crate has mass Y ~ N(150, 5²) grams. Four bags are packed into one crate. Find the probability that the total mass exceeds 4200 g.

```
T = X₁ + X₂ + X₃ + X₄ + Y
E(T) = 4 × 1010 + 150 = 4190
Var(T) = 4 × 64 + 25 = 281
P(T > 4200): z = (4200 − 4190)/√281 = 0.5965
P = 1 − Φ(0.5965) = 0.275 (3 s.f.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--04-linear-combinations-variance.webp" width="900" height="940" alt="Two normal curves share mean 4040 g. The tall narrow one is the total of four separate bags (variance 4σ² = 256) and the low wide one is four times one bag (variance 16σ² = 1024)." loading="lazy">
  <figcaption>Adding four independent bags gives variance 4σ², but scaling one bag by 4 gives 16σ².</figcaption>
</figure>


## 6.3 Continuous random variables

A probability density function f(x) defined on one interval must satisfy f(x) ≥ 0 and ∫ f(x) dx = 1 over that interval. Probabilities are areas: P(a < X < b) = ∫ from a to b of f(x) dx. For a continuous variable, P(X = a) = 0, so < and ≤ give the same answer. From MF19:

```
E(X) = ∫ x f(x) dx        Var(X) = ∫ x² f(x) dx − {E(X)}²
```

The **median** m solves ∫ from the lower limit to m of f(x) dx = 1/2. Other percentiles work the same way. The syllabus excludes explicit use of the cumulative distribution function, so find these by direct integration of f(x).

**Worked example.** f(x) = k(4x − x²) for 0 ≤ x ≤ 3, and 0 otherwise.

```
∫₀³ (4x − x²) dx = [2x² − x³/3]₀³ = 18 − 9 = 9,  so k = 1/9
E(X)  = (1/9) ∫₀³ (4x² − x³) dx = (1/9)(36 − 81/4) = 7/4
E(X²) = (1/9) ∫₀³ (4x³ − x⁴) dx = (1/9)(81 − 243/5) = 18/5
Var(X) = 18/5 − (7/4)² = 0.5375 = 0.538 (3 s.f.)
median: (1/9)(2m² − m³/3) = 1/2  →  m³ − 6m² + 13.5 = 0
        root in [0, 3]: m = 1.79 (3 s.f.)
```

**Infinite domain.** The syllabus allows domains such as x ≥ 2. If f(x) = k/x⁴ for x ≥ 2, then ∫₂^∞ kx⁻⁴ dx = k/24, so k = 24. E(X) = ∫₂^∞ 24x⁻³ dx = 3. The median solves 1 − 8/m³ = 1/2, so m³ = 16 and m = 2.52 (3 s.f.).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--05-pdf-area-mean-median.webp" width="900" height="950" alt="Graph of f(x) = (4x − x²)/9 on 0 to 3. The total area is 1 and a dashed line at the median 1.79 splits it into two halves. The mean, 7/4, sits just left of the median. Variance is 0.538." loading="lazy">
  <figcaption>A pdf has area 1; the median splits the area in half and the mean is the balance point.</figcaption>
</figure>


## 6.4 Sampling and estimation

A **population** is the whole group; a **sample** is the part you observe. A sample should be random so that every member has an equal chance of selection and the results are not biased. A method is unsatisfactory if some members cannot be chosen (for example, only surveying people at one place or time). Random numbers can produce a random sample: number the population, generate random numbers, and select the matching members, ignoring repeats and numbers out of range. Named methods such as quota or stratified sampling are not required.

### The sample mean

X̄ is a random variable with E(X̄) = μ and Var(X̄) = σ²/n.

- If X is normal, X̄ is exactly normal: X̄ ~ N(μ, σ²/n).
- If X is not normal but n is large, the **Central Limit Theorem** says X̄ is approximately N(μ, σ²/n).

**Worked example.** A population has mean 30 and standard deviation 6. A random sample of 50 is taken. n is large, so by the CLT X̄ ≈ N(30, 36/50).

```
P(X̄ > 31): z = (31 − 30)/(6/√50) = 1.179
P = 1 − Φ(1.179) = 0.119 (3 s.f.)
```

### Unbiased estimates

From MF19:

```
x̄ = Σx / n        s² = (1/(n − 1)) ( Σx² − (Σx)²/n )
```

"Unbiased" means that although individual estimates vary, the method gives the right value on average.

### Confidence intervals

For a mean with known σ (normal population), or a large sample (use s):

```
x̄ ± z × σ/√n
```

For a proportion from a large sample, with p̂ the sample proportion:

```
p̂ ± z √( p̂(1 − p̂)/n )
```

Common z values from the critical values table: 90% → 1.645, 95% → 1.960, 98% → 2.326, 99% → 2.576.

**Worked example.** For a sample of 40 values, Σx = 2260 and Σx² = 128 400. Find a 95% confidence interval for μ.

```
x̄ = 2260/40 = 56.5
s² = (128400 − 2260²/40)/39 = 710/39 = 18.21
interval: 56.5 ± 1.96 × √(18.21/40) = 56.5 ± 1.322
          (55.2, 57.8)
```

The sample is large, so the CLT means you do not need to assume the population is normal.

**Proportion.** In a sample of 200, 72 have a property. p̂ = 0.36. A 90% interval is 0.36 ± 1.645 × √(0.36 × 0.64/200) = 0.36 ± 0.0558, giving (0.304, 0.416).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--06-sample-mean-distribution.webp" width="900" height="890" alt="Two normal curves centred on 30: a wide one for a single value (sd 6) and a narrow one for the mean of 50 values (sd 0.85). The area of the narrow curve above 31 is shaded and equals 0.119." loading="lazy">
  <figcaption>The mean of 50 values varies far less than one value, so P(X̄ &gt; 31) is only 0.119.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--07-confidence-interval-95.webp" width="900" height="910" alt="A normal curve of the sample mean centred on 56.5 with standard error 0.675. The central 95% of area, from 55.2 to 57.8, is shaded teal with 2.5% in each tail, and a bracket marks the interval (55.2, 57.8)." loading="lazy">
  <figcaption>The 95% interval is the sample mean plus or minus 1.96 standard errors.</figcaption>
</figure>


## 6.5 Hypothesis tests

<!-- marlbridge-diagram:maths-ps2-hypothesis-test-workflow -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-ps2-hypothesis-test-workflow.svg" aria-label="Open full-size diagram: maths-ps2-hypothesis-test-workflow"><img src="/images/learning/mathematics/maths-ps2-hypothesis-test-workflow.svg" width="1600" height="1050" alt="Five-step right-tailed Poisson significance test using the lesson data, with Type I and Type II errors." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>State hypotheses, model, tail, decision and contextual conclusion. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-ps2-hypothesis-test-workflow -->


Vocabulary: **null hypothesis** H₀ (the parameter has its usual value), **alternative hypothesis** H₁ (it has changed: <, > or ≠), **significance level**, **test statistic**, **rejection (critical) region**, **acceptance region**. A one-tailed test looks for change in one direction; a two-tailed test splits the significance level between both tails. Conclusions must be in context and not overstated: "there is evidence at the 5% level that…" or "there is insufficient evidence that…".

**Binomial, direct evaluation.** A claim says p = 0.3. In 20 trials there are 2 successes. Test H₀: p = 0.3 against H₁: p < 0.3 at the 5% level.

```
X ~ B(20, 0.3) under H₀
P(X ≤ 2) = 0.0355 < 0.05
Reject H₀: evidence at the 5% level that p is less than 0.3.
```

**Poisson, direct evaluation.** A shop sells a mean of 4.5 umbrellas per week. In one week after an advert it sells 9. Test at 5% whether the mean has increased.

```
H₀: λ = 4.5    H₁: λ > 4.5
P(X ≥ 9) = 1 − P(X ≤ 8) = 0.0403 < 0.05
Reject H₀: evidence at the 5% level that mean weekly sales have increased.
```

For large n or large λ, the syllabus also allows a normal approximation, with a continuity correction, in place of direct evaluation.

**Normal mean.** Lengths have σ = 12 cm. H₀: μ = 500, H₁: μ ≠ 500, 5% level, sample of 36 with x̄ = 496.

```
z = (496 − 500)/(12/√36) = −2.000
two-tailed critical values ±1.960; −2.000 < −1.960
Reject H₀: evidence at the 5% level that the mean length is not 500 cm.
```

### Type I and Type II errors

- **Type I error**: rejecting H₀ when it is true. P(Type I) = probability of landing in the rejection region when H₀ is true. For a discrete test, find the actual value, which is usually below the stated significance level.
- **Type II error**: accepting H₀ when it is false. You need a specific alternative value of the parameter.

**Worked example (Poisson).** In the umbrella test, P(X ≥ 8) = 0.0866 and P(X ≥ 9) = 0.0403 under H₀, so the rejection region is X ≥ 9 and P(Type I) = 0.0403. If the true mean is now 7, P(Type II) = P(X ≤ 8 | λ = 7) = 0.729 (3 s.f.).

**Worked example (normal).** In the lengths test, H₀ is accepted when 500 − 1.96 × 2 < x̄ < 500 + 1.96 × 2, that is 496.08 < x̄ < 503.92. If in fact μ = 505:

```
P(Type II) = Φ((503.92 − 505)/2) − Φ((496.08 − 505)/2)
           = Φ(−0.54) − Φ(−4.46) = 0.295 (3 s.f.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-probability-statistics-2--08-type-i-type-ii-poisson.webp" width="900" height="990" alt="Two bar charts share a dashed boundary between 8 and 9. Under H0 (Po(4.5)) the bars from 9 upward have probability 0.0403, the Type I error. If the true mean is 7 (Po(7)) the bars up to 8 have probability 0.729, the Type II error." loading="lazy">
  <figcaption>Type I error is landing in the rejection region when H0 is true; Type II is landing outside it when H0 is false.</figcaption>
</figure>


## Common errors

- Rate not scaled to the interval (a rate per hour used for a 30-minute count).
- Subtracting variances for X − Y.
- Using 4X for four independent items.
- Forgetting to check that k makes the total area 1 before finding E(X).
- Dividing by n instead of n − 1 for an unbiased variance estimate.
- Using σ²/n for a proportion instead of p̂(1 − p̂)/n.
- Comparing a single probability, P(X = 9), with 5% instead of the tail P(X ≥ 9).
- A conclusion that "proves" H₁, or that has no context.

## Frequently asked questions

**Can you take Cambridge 9709 Paper 6 with Paper 4?**
No. Paper 6 is offered only as part of the full A Level, and it cannot be combined with Paper 4 (Mechanics). It assumes all of Probability & Statistics 1 and the calculus in Pure Mathematics 3.

**What conditions does a Poisson model need?**
Events must occur singly, independently, at random, and at a constant average rate in a fixed interval of time or space. For a Poisson distribution the mean equals the variance.

**How do you find the median of a continuous random variable?**
Solve the equation that sets the integral of f(x) from the lower limit up to m equal to 1/2. The 9709 syllabus excludes explicit use of the cumulative distribution function, so integrate f(x) directly.

**What does the Central Limit Theorem say?**
For a large sample, the sample mean X̄ is approximately normally distributed with mean μ and variance σ²/n, even if the population is not normal. If the population is normal, X̄ is exactly normal for any n.

**What is a Type II error?**
A Type II error is accepting H₀ when it is false. To find its probability you need a specific alternative value of the parameter.

## Next steps

Test yourself with the [Probability & Statistics 2 practice questions](/resources/a-level-maths-9709-probability-statistics-2-practice/), then keep the [revision notes](/resources/a-level-maths-9709-probability-statistics-2-revision-notes/) for the final weeks.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 6, Probability & Statistics 2 (for Paper 6): sections 6.1 to 6.5.
