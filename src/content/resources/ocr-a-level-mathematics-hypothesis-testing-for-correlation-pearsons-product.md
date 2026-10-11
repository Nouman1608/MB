---
title: "OCR A Level Mathematics A: Hypothesis testing for correlation: Pearson's product-moment coefficient (H240)"
seoTitle: "OCR A Level Maths: Pearson's Correlation Hypothesis Test"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Hypothesis testing for correlation: Pearson's product-moment coefficient"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 130
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-hypothesis-testing-ocr-alevel-maths"
description: "Study guide to Pearson's product-moment coefficient and the hypothesis test for correlation in OCR A Level Mathematics A, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is for OCR A Level Mathematics A and follows the OCR specification (H240, Version 3.1, August 2026, for first assessment in 2018). It covers specification references 2.05f and 2.05g: what Pearson's product-moment correlation coefficient tells you about a scatter of points, and how to use it as the test statistic in a hypothesis test. Both references sit in the Stage 2 column, so they are **A Level only** and not part of the common AS content. Statistics is assessed in component 02, Pure Mathematics and Statistics. The rest of the hypothesis-testing strand is covered elsewhere, so this guide does not teach the general language of tests, binomial tests or tests on a sample mean.

Related pages: [revision notes](/resources/ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-revision-notes/), [practice questions](/resources/ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-practice/), the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the wider [Statistics guide](/resources/ocr-a-level-mathematics-statistics/) and the [10-minute diagnostics](/diagnostics/).

## What you must be able to do

| Ref | Outcome | Stage |
|---|---|---|
| 2.05f | Understand Pearson's product-moment correlation coefficient as a measure of how close data points lie to a straight line | A Level only |
| 2.05g | Use and interpret the coefficient in hypothesis tests, using either a given critical value or a p-value and a table of critical values | A Level only |

The specification adds three notes. The data may be assumed to come from a bivariate normal distribution. A table of critical values will be provided. Calculation of correlation coefficients is excluded, so you are always given r.

## 2.05f: what the coefficient measures

For n pairs of data (x, y), the sample coefficient is written r. Its value always satisfies −1 ≤ r ≤ 1.

| Value of r | What the scatter diagram looks like |
|---|---|
| r = 1 | All points exactly on a straight line with positive gradient |
| r = −1 | All points exactly on a straight line with negative gradient |
| close to 1 or −1 | Points lie close to a straight line |
| close to 0 | No clear straight-line pattern |

Three ideas matter more than the formula.

- **Closeness, not steepness.** The size of r tells you how tightly the points hug a line. It does not tell you the gradient of that line. A shallow line with tight scatter and a steep line with tight scatter can have the same r.
- **Sign gives direction.** Positive r means y tends to increase as x increases. Negative r means y tends to decrease.
- **Straight lines only.** The coefficient measures linear association. A strong curved pattern can give r near 0.

Changing units does not change r. If you multiply every x by a positive number or add a constant to every y, the points keep their relative positions and r stays the same. Multiplying one variable by a negative number reverses the sign of r.

### Worked example 1: ordering and interpreting

Four samples of equal size have these coefficients: sample A, r = −0.93; sample B, r = 0.41; sample C, r = 0.99; sample D, r = −0.08.

(a) Put the samples in order, closest to a straight line first.
(b) Which samples show a downward trend?

(a) Compare the sizes of r: C is 0.99, A is 0.93, B is 0.41, D is 0.08. The order is **C, A, B, D**.

(b) Negative r means a downward trend, and D is so close to zero that it shows almost no linear trend. The clear downward trend is **sample A**.

### Worked example 2: r = 0 does not mean no relationship

Seven points have x = −3, −2, −1, 0, 1, 2, 3 and y = 9, 4, 1, 0, 1, 4, 9, so y = x². Here r = 0 exactly. The points lie on a perfect parabola, a precise relationship, yet there is no linear association: the left side slopes down and the right side slopes up, and these cancel.

So a coefficient near zero supports the statement "no linear correlation". It never supports "no relationship". Look at the scatter diagram before you trust any test based on r.

## 2.05g: the hypothesis test for correlation

You have a sample of n pairs, and you want to know whether the correlation seen in the sample is evidence of correlation in the whole population. The sample coefficient is r. The population coefficient is written ρ (rho).

### Hypotheses

The null hypothesis always says there is no correlation in the population:

- H₀: ρ = 0
- H₁: ρ > 0 (positive correlation), or ρ < 0 (negative correlation), or ρ ≠ 0 (some correlation)

Define ρ in context, for example "ρ is the population product-moment correlation coefficient between water speed and pebble mass". The wording of the question chooses the alternative.

| Wording | Alternative | Tails |
|---|---|---|
| "positive correlation", "tends to increase together" | ρ > 0 | one |
| "negative correlation", "tends to decrease" | ρ < 0 | one |
| "correlation", "some association", "a relationship" | ρ ≠ 0 | two |

Decide the alternative from the wording before you look at the sign of r. A negative sample r does not turn a question about "correlation" into a negative-correlation test.

### Using a critical value

The critical value depends on three things: the sample size n (the number of pairs, not the number of numbers), the significance level, and whether the test has one tail or two. Tables are usually laid out by one-tail level. A two-tail test at 5% therefore uses the 2.5% one-tail column. Check how the table you are given is labelled.

Critical values used in this guide (computed for these notes, to 4 decimal places; one-tail levels in the column heads):

| n | 5% | 2.5% | 1% | 0.5% |
|---|---|---|---|---|
| 6 | 0.7293 | 0.8114 | 0.8822 | 0.9172 |
| 9 | 0.5822 | 0.6664 | 0.7498 | 0.7977 |
| 10 | 0.5494 | 0.6319 | 0.7155 | 0.7646 |
| 14 | 0.4575 | 0.5324 | 0.6120 | 0.6614 |
| 25 | 0.3365 | 0.3961 | 0.4622 | 0.5052 |
| 30 | 0.3061 | 0.3610 | 0.4226 | 0.4629 |
| 100 | 0.1654 | 0.1966 | 0.2324 | 0.2565 |

Let c be the critical value for your test.

| Alternative | Reject H₀ when |
|---|---|
| ρ > 0 | r is greater than c |
| ρ < 0 | r is less than −c |
| ρ ≠ 0 | r is greater than c or less than −c (c from the half-level column) |

### Worked example 3: one-tail test, positive

Nine mountain streams are sampled. For each, the water speed and the mass of the heaviest pebble it moves are recorded. The coefficient is r = 0.64. Test at the 5% level whether there is positive correlation.

```
H₀: ρ = 0,  H₁: ρ > 0
ρ = population product-moment correlation coefficient between
    water speed and pebble mass
n = 9, one-tail, 5%: critical value 0.5822
r = 0.64 > 0.5822, so r is in the critical region
```

Reject H₀. There is evidence at the 5% level of positive correlation between water speed and the heaviest pebble moved.

### Worked example 4: two-tail test, negative sample r

For 25 adults, hours of sleep and resting heart rate give r = −0.38. Test at the 5% level whether there is any correlation.

```
H₀: ρ = 0,  H₁: ρ ≠ 0
Two-tail, 5%: use the 2.5% one-tail column, n = 25: c = 0.3961
size of r = 0.38 < 0.3961, so r is not in the critical region
```

Do not reject H₀. There is not enough evidence at the 5% level of correlation between sleep and resting heart rate. The sample value is negative, but with 25 pairs it is not extreme enough.

### Using a p-value

The p-value answers this: if H₀ were true, how likely is a sample coefficient as far from zero as the one you have, or further? A small p-value counts as evidence against H₀.

- If you are given a p-value, reject H₀ when it is smaller than the significance level.
- Check the tails. A p-value quoted for a one-tail test is compared with the full significance level. A p-value quoted for a two-tail test is also compared with the full level. A one-tail p-value for a two-tail test must be doubled first.
- With only a table, you can place the p-value in a band. If r lies between the 5% and 2.5% critical values, the one-tail p-value lies between 0.025 and 0.05.

### Worked example 5: a p-value and a table together

For 14 pairs, r = 0.52 and the one-tail p-value is 0.0283.

(a) Test for positive correlation at 5% and at 1% using the p-value.
(b) Show that the table agrees.

(a) At 5%: 0.0283 < 0.05, so reject H₀. At 1%: 0.0283 > 0.01, so do not reject H₀.

(b) For n = 14 the one-tail critical values are 0.4575 (5%), 0.5324 (2.5%) and 0.6120 (1%). Since 0.4575 < 0.52 < 0.5324, r is beyond the 5% value but not the 2.5% value. The p-value must lie between 0.025 and 0.05, and 0.0283 does.

The conclusion at 5% is: there is evidence of positive correlation in the population. At 1% there is not enough evidence.

### Worked example 6: the same r under different tests

Ten pairs give r = 0.62.

| Test | Critical value | Decision |
|---|---|---|
| H₁: ρ > 0 at 5% | 0.5494 | 0.62 > 0.5494, reject H₀ |
| H₁: ρ ≠ 0 at 5% | 0.6319 | 0.62 < 0.6319, do not reject H₀ |
| H₁: ρ > 0 at 1% | 0.7155 | 0.62 < 0.7155, do not reject H₀ |

One value of r supports different conclusions, because a two-tail test is harder to pass than a one-tail test at the same level. This is why you commit to the alternative before looking at the data.

### Sample size and strength

A given r is more convincing when n is larger. Take r = 0.5 as a one-tail 5% test. With n = 6 the critical value is 0.7293, so you do not reject H₀. With n = 30 it is 0.3061, so you do reject H₀. A tiny sample cannot rule out chance, even when the points look close to a line.

The reverse also holds. With n = 100 and r = 0.21, the 5% value is 0.1654 so H₀ is rejected, but the scatter is still wide. Evidence of correlation in the population is not the same as strong correlation. Say "significant" about the test and "strong" or "weak" about |r|.

### Conclusions and context

State the result in two parts, cautiously and in context:

1. The statistical decision: "reject H₀" or "do not reject H₀".
2. The meaning: "There is evidence at the 5% level of positive correlation between water speed and pebble mass."

Avoid "this proves" and avoid "H₀ is true". A non-significant result means you lack evidence, not that you have shown ρ = 0. Correlation is also not causation: a significant r says two variables vary together, not that one produces the other, since a third variable may drive both.

The specification allows you to assume the data come from a bivariate normal distribution. If a question states this, you can quote it as the condition for the test. If the scatter diagram shows a clear curve, say a linear test is not suitable.

## Common errors

- Counting values instead of pairs: 9 pairs means n = 9, not 18.
- Choosing a two-tail test because r is negative. The wording of the question decides the tail.
- Reading the 5% column for a two-tail 5% test, instead of the 2.5% one-tail column.
- Comparing −0.7 with a positive critical value in the wrong direction: for H₁: ρ < 0, the test is r < −c.
- Writing hypotheses about r instead of ρ. Hypotheses are about the population.
- Saying "r = 0 means no relationship" or "high r proves one variable causes the other".
- Concluding without context, or stating certainty.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, section 2.05 Statistical Hypothesis Testing, references 2.05f and 2.05g.
