---
title: "Pearson Edexcel International Advanced Level Mathematics: The Binomial and Poisson distributions and the Poisson approximation to the binomial (YMA01)"
seoTitle: "Edexcel IAL Maths S2 Binomial and Poisson Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The Binomial and Poisson distributions and the Poisson approximation to the binomial"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 165
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-binomial-and-poisson-distributions-edexcel-alevel-maths"
description: "Study guide to the binomial and Poisson distributions, mean and variance, and the Poisson approximation for Edexcel IAL Mathematics Unit S2, fully worked."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

This study guide is written against Pearson's International Advanced Subsidiary/Advanced Level specification for Mathematics, Further Mathematics and Pure Mathematics (YMA01), Issue 3, April 2019. It covers Unit S2 section 1 (topics 1.1 to 1.3). The specification states that Unit S2 is optional for IAS Further Mathematics and optional for IAL Mathematics and Further Mathematics.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-practice/). The [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) show where the unit sits, and the [diagnostics](/diagnostics/) help you find gaps first. The specification assumes Unit S1 and binomial coefficients, so the [S1 probability guide](/resources/edexcel-ial-mathematics-probability-and-correlation-and-regression/) is useful background.

## What this unit covers

| Topic | You must be able to |
|---|---|
| 1.1 | Use the binomial and Poisson distributions to model real situations and comment critically on whether they suit; find cumulative probabilities by calculation or from tables; use the additive property, so Po(λ) per unit becomes Po(5λ) over five units |
| 1.2 | Use the mean and variance of the binomial and Poisson distributions (no derivations are required) |
| 1.3 | Use the Poisson distribution as an approximation to the binomial distribution |

The specification says calculators may be used in the S2 assessment and that the booklet Mathematical Formulae and Statistical Tables is provided. Questions may ask for a cumulative probability "by calculation or by reference to tables", so practise both. This page gives table-style values as data in the question and does not rely on any particular table.

## The binomial distribution B(n, p)

Use B(n, p) when all of these hold:

- there is a fixed number n of trials
- each trial has two outcomes, success or failure
- the probability of success p is the same every trial
- the trials are independent

Then X, the number of successes, has

P(X = r) = (n choose r) pʳ (1 − p)ⁿ⁻ʳ, for r = 0, 1, …, n

where (n choose r) = n! / (r!(n − r)!). Write X ~ B(n, p).

**Worked example 1.** A seed supplier claims each seed germinates with probability 0.85, independently. Twelve seeds are sown. The number that germinate is X ~ B(12, 0.85).

Find P(X = 10) and P(X ≥ 10).

```
P(X = 10) = (12 choose 10) × 0.85¹⁰ × 0.15²
          = 66 × 0.85¹⁰ × 0.0225
          = 0.2924
P(X = 11) = 12 × 0.85¹¹ × 0.15 = 0.3012
P(X = 12) = 0.85¹² = 0.1422
P(X ≥ 10) = 0.2924 + 0.3012 + 0.1422 = 0.7358
```

So P(X = 10) = 0.292 and P(X ≥ 10) = 0.736 (3 s.f.). Adding three terms was shorter than finding P(X ≤ 9) and subtracting, so choose the shorter route.

### Cumulative probabilities

A table or calculator function gives F(r) = P(X ≤ r). Convert every request into this form:

| You want | Write it as |
|---|---|
| P(X = r) | F(r) − F(r − 1) |
| P(X < r) | F(r − 1) |
| P(X ≥ r) | 1 − F(r − 1) |
| P(X > r) | 1 − F(r) |
| P(a ≤ X ≤ b) | F(b) − F(a − 1) |

**Worked example 2.** X ~ B(20, 0.3). Given F(8) = 0.8867 and F(3) = 0.1071, find P(4 ≤ X ≤ 8).

```
P(4 ≤ X ≤ 8) = F(8) − F(3)
             = 0.8867 − 0.1071
             = 0.7796
```

The lower limit 4 gives F(3), not F(4). This is the most common slip with cumulative probabilities.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--02-poisson-shapes.webp" width="900" height="1090" alt="Three bar charts of P(X = r) on one scale for Po(0.8), Po(3) and Po(9). Po(0.8) is strongly skewed, Po(3) peaks at 2 and 3, and Po(9) is wide and nearly symmetric. A dashed line marks the mean λ." loading="lazy">
  <figcaption>As λ grows the distribution moves right, spreads out and becomes more symmetric.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--07-binomial-critical-region.webp" width="900" height="1010" alt="Bar chart of B(28, 0.35). The critical region X ≤ 5 or X ≥ 15 is shaded gold with tails 0.0393 and 0.0337, total 0.0730. The observed 16 is in the critical region so H0 is rejected; doubling P(X ≥ 16) = 0.0136 gives 0.0272 which is below 0.10." loading="lazy">
  <figcaption>At the 10% level each tail gets at most 5%, and the actual significance level 0.0730 is the probability of a Type I error.</figcaption>
</figure>


## The Poisson distribution Po(λ)

A variable X ~ Po(λ) counts events in a fixed stretch of time, length or area, provided the events occur

- singly (never two at exactly the same instant)
- independently of each other
- at random, at a constant average rate

with P(X = r) = e⁻λ λʳ / r!, for r = 0, 1, 2, …. There is no upper limit on r.

**Worked example 3.** Flaws in a roll of fabric occur at an average rate of 0.8 per square metre. Find the probability that in 2.5 m² there are (a) no flaws and (b) at least two flaws.

The mean for 2.5 m² is 0.8 × 2.5 = 2, so X ~ Po(2).

```
(a) P(X = 0) = e⁻² = 0.1353
(b) P(X ≥ 2) = 1 − P(X = 0) − P(X = 1)
             = 1 − e⁻² − 2e⁻²
             = 1 − 3e⁻²
             = 0.5940
```

So the answers are 0.135 and 0.594 (3 s.f.).

### Scaling the mean

If the number of events per unit has mean λ and the counts in separate units are independent, the count over t units has mean tλ, so Po(tλ). This is the additive property in the specification: Po(λ) per minute gives Po(5λ) per five minutes. It works down as well as up.

**Worked example 4.** Emails arrive at an average of 1.5 per 10 minutes. Find the probability that (a) at least 10 arrive in one hour and (b) at most 3 arrive in 20 minutes.

```
(a) One hour is six lots of 10 minutes: mean 6 × 1.5 = 9.
    Y ~ Po(9).  P(Y ≥ 10) = 1 − P(Y ≤ 9) = 1 − 0.5874 = 0.4126
(b) 20 minutes: mean 2 × 1.5 = 3.
    W ~ Po(3).  P(W ≤ 3) = e⁻³(1 + 3 + 4.5 + 4.5) = 13e⁻³ = 0.6472
```

The answers are 0.413 and 0.647 (3 s.f.). Always state the new distribution before you calculate. The sum of independent Poisson variables is also Poisson: if A ~ Po(a) and B ~ Po(b) are independent, A + B ~ Po(a + b).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--01-poisson-vs-binomial-setup.webp" width="900" height="1040" alt="A timeline shows seven events in an interval, so X counts events with no upper limit. Below it, ten trial boxes show six successes, so a binomial X can never exceed n. Poisson events must be single, independent and at a constant average rate." loading="lazy">
  <figcaption>Poisson counts events in an interval with no upper limit; binomial counts successes in a fixed number of trials.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--03-poisson-scaling-interval.webp" width="900" height="1080" alt="Six 10-minute blocks each with mean 1.5 show 20 minutes has λ = 3 and one hour has λ = 9. Po(3) with r ≤ 3 shaded gives 0.647 and Po(9) with r ≥ 10 shaded gives 0.413." loading="lazy">
  <figcaption>Rescale the mean to the interval you observe before calculating any probability.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--06-poisson-critical-region.webp" width="900" height="1010" alt="Bar chart of Po(4.5). The critical region X = 0 or X ≥ 10 is shaded gold with tail probabilities 0.0111 and 0.0171, total 0.0282. The observed 11 lies in the critical region so H0 is rejected." loading="lazy">
  <figcaption>At the 5% level each tail gets at most 2.5%, and the actual significance level 0.0282 is the probability of a Type I error.</figcaption>
</figure>


## Mean and variance (topic 1.2)

| Distribution | Mean | Variance |
|---|---|---|
| B(n, p) | np | np(1 − p) |
| Po(λ) | λ | λ |

No derivations are required. Know them, and use them in both directions.

**Worked example 5.** A binomial random variable has mean 15 and variance 10.5. Find n and p.

```
np = 15 and np(1 − p) = 10.5
Divide: 1 − p = 10.5 / 15 = 0.7, so p = 0.3
Then n = 15 / 0.3 = 50
```

So n = 50 and p = 0.3.

A binomial variance is always smaller than its mean, because 1 − p < 1. A Poisson variance equals its mean. This gives a quick test of a Poisson model: if a data set of counts has mean 2.3 and variance 2.2, a Poisson model looks plausible. If the mean is 2.6 and the variance is 5.9, the counts are too spread out, which suggests events cluster or the rate varies.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--05-poisson-variance-equals-mean.webp" width="900" height="940" alt="A number line of variance divided by mean. B(50, 0.3) gives 0.70, data with mean 2.3 and variance 2.2 give 0.96, Po(λ) gives exactly 1, and data with mean 2.6 and variance 5.9 give 2.27. Values near 1 suit Poisson, values above 1 suggest clustering." loading="lazy">
  <figcaption>A Poisson count has variance equal to its mean; a ratio well above 1 signals clustered events or a varying rate.</figcaption>
</figure>


## Modelling and commenting critically (topic 1.1)

A model answer names the condition and ties it to the context. Compare:

| Situation | Model | Comment |
|---|---|---|
| Number of 15 plants in one greenhouse that get a disease | B(15, p) is doubtful | Disease spreads, so trials are not independent |
| Number of customers entering a shop each minute all day | Po(λ) is doubtful | The rate is higher at lunchtime, so it is not constant |
| Number of heads in 40 fair coin tosses | B(40, 0.5) | Fixed number of independent trials, constant p |
| Number of typing errors in a 500-word passage | Po(λ) is reasonable | Errors are rare, independent and at a steady rate, with no fixed maximum |

A phrase such as "it is not independent" earns little. Say which events depend on which, and why.

## The Poisson approximation to the binomial (topic 1.3)
<!-- marlbridge-diagram:maths-b18-binomial-poisson -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b18-binomial-poisson.svg" aria-label="Open full-size diagram: maths-b18-binomial-poisson"><img src="/images/learning/mathematics/maths-b18-binomial-poisson.svg" width="1600" height="1050" alt="Comparison of Binomial(20,0.1) and Poisson mean 2; at k=2 probabilities are approximately 0.2852 and 0.2707." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Comparison of Binomial(20,0.1) and Poisson mean 2; at k=2 probabilities are approximately 0.2852 and 0.2707. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b18-binomial-poisson -->

When n is large and p is small, B(n, p) behaves like Po(np). The two have mean np, and the variance np(1 − p) is close to np when p is small. The specification lists the topic without numerical limits, so follow the conditions your teacher gives, which are typically large n and small p.

**Worked example 6.** X ~ B(150, 0.02). Estimate P(X ≤ 2) with a Poisson approximation, then compare it with the exact value.

```
np = 150 × 0.02 = 3, so use Y ~ Po(3)
P(Y ≤ 2) = e⁻³(1 + 3 + 4.5) = 8.5e⁻³ = 0.4232
Exact: 0.98¹⁵⁰ + 150 × 0.02 × 0.98¹⁴⁹ + 11175 × 0.02² × 0.98¹⁴⁸ = 0.4209
```

The approximation 0.423 is close to the exact 0.421. When p is not small the approximation fails. For X ~ B(20, 0.4), P(X ≤ 5) = 0.1256, but Po(8) gives 0.1912.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson--04-poisson-approximates-binomial.webp" width="900" height="1190" alt="Binomial bars with Poisson values as dots. B(150, 0.02) and Po(3) match closely (0.4209 against 0.4232 for P(X ≤ 2)). B(20, 0.4) and Po(8) do not (0.1256 against 0.1912), because p is not small." loading="lazy">
  <figcaption>The approximation works when n is large and p is small, and fails when p is not small.</figcaption>
</figure>


## Common errors

- Writing P(X ≥ r) as 1 − F(r) instead of 1 − F(r − 1).
- Forgetting to rescale λ when the interval changes, or rescaling a probability instead of the mean.
- Using Po(λ) for a count with an upper limit (for example, defective items in a box of 10), when binomial fits.
- Using the Poisson approximation when p is not small.
- Saying "the events are not random" without explaining which condition fails.
- Giving mean and variance for B(n, p) as np and np(1 + p).

## Frequently asked questions

**What are the mean and variance of a binomial distribution?**
For X ~ B(n, p), the mean is np and the variance is np(1 − p). Because 1 − p < 1, the variance is always less than the mean.

**What are the mean and variance of a Poisson distribution?**
For X ~ Po(λ), both the mean and the variance are equal to λ.

**What is the sum of two independent Poisson variables?**
If X ~ Po(λ) and Y ~ Po(μ) are independent, then X + Y ~ Po(λ + μ).

**Should a count with an upper limit be modelled by a Poisson distribution?**
No. A count with a fixed maximum, such as faulty items in a box of 10, is better modelled by a binomial distribution because there is a fixed number of trials.

## Next steps

Try the [practice questions](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-practice/), then condense the unit with the [revision notes](/resources/edexcel-ial-mathematics-the-binomial-and-poisson-distributions-and-the-poisson-revision-notes/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited). This page covers Unit S2, section 1.
