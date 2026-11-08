---
title: "OxfordAQA International AS and A-level Mathematics: Hypothesis tests for means: z-tests and t-tests (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths z-test and t-test Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Hypothesis tests for means: z-tests and t-tests"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 207
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-hypothesis-testing-oxfordaqa-alevel-maths"
description: "Condensed revision notes on z-tests and t-tests for a mean, with formulae, method steps, a self-test and common errors for OxfordAQA A-level Maths Unit S2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense S2.6 (tests for a mean) from the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The content belongs to International A-level Unit S2 (Statistics) and is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests/). Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-practice/). See also the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Scope in one table

| Spec outcome | Test statistic | Reference distribution |
|---|---|---|
| Normal population, variance known | z = (x̄ − μ₀)/(σ/√n) | N(0, 1) |
| Any population, large n, variance known | z = (x̄ − μ₀)/(σ/√n) | N(0, 1), approximate |
| Any population, large n, variance unknown | z = (x̄ − μ₀)/(s/√n) | N(0, 1), approximate |
| Normal population, variance unknown | t = (x̄ − μ₀)/(s/√n) | t with n − 1 degrees of freedom |

The significance level is given in the question. You must understand Type I and Type II errors, but you will not be asked to calculate the risk of a Type II error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-statistical-hypothesis-testing--01-p-value-tail-area.webp" width="900" height="960" alt="Bar chart of B(25, 0.2) with the bars for X of 9 or more shaded gold, giving the p-value 0.0468. A number line below shows 0.0468 inside the reject zone below the 5% level, so H0 is rejected." loading="lazy">
  <figcaption>The p-value is the probability of a result at least as extreme as the one observed, compared with the significance level.</figcaption>
</figure>


## Definitions

| Term | Meaning |
|---|---|
| Null hypothesis H₀ | μ takes one stated value, μ = μ₀ |
| Alternative hypothesis H₁ | μ > μ₀, μ < μ₀ (one-tailed) or μ ≠ μ₀ (two-tailed) |
| Test statistic | The z or t value worked out from the sample |
| Significance level α | The probability of rejecting H₀ that the test is designed to allow when H₀ is true |
| Critical value | The boundary of the critical (rejection) region |
| Critical region | Values of the statistic (or of x̄) that lead to rejecting H₀ |
| Acceptance region | Values that lead to not rejecting H₀ |
| p-value | The probability, if H₀ is true, of a result at least as extreme as the one observed |
| Type I error | Rejecting H₀ when H₀ is true |
| Type II error | Accepting H₀ when H₀ is false |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-statistical-hypothesis-testing--03-type-i-and-ii-errors.webp" width="900" height="1060" alt="Two bar charts with critical region X at most 4 or at least 14 for n = 20. If H0 (p = 0.45) is true the chance of rejecting it, a Type I error, is 0.0403. If the true p is 0.7 the chance of keeping H0, a Type II error, is 0.392 (0.762 if the true p is 0.3)." loading="lazy">
  <figcaption>Type I is rejecting a true H0; Type II is keeping a false H0.</figcaption>
</figure>


## Key facts to recall

- Unbiased estimators: x̄ for μ, and s² = [Σx² − (Σx)²/n]/(n − 1) for σ².
- Standard error of the mean: σ/√n, estimated by s/√n.
- Under H₀ with a normal population, X̄ ~ N(μ₀, σ²/n).
- For a fixed critical region, P(Type I error) equals the significance level.
- The t-distribution has heavier tails than N(0, 1), so its critical values are larger. It approaches N(0, 1) as the degrees of freedom increase.
- Useful z critical values: one-tailed 5% is 1.645, one-tailed 1% is 2.326, two-tailed 5% is ±1.960, two-tailed 10% is ±1.645.

## Method in steps

1. Define μ and write H₀ and H₁ from the wording.
2. State the distribution of X̄ under H₀ (or say t with n − 1 degrees of freedom).
3. Find x̄, and s from summary data if σ is not known.
4. Calculate the test statistic using the standard error.
5. Compare with the critical value, or find the p-value and compare with α (or α/2 for one tail of a two-tailed test).
6. Write: "Reject H₀" or "Do not reject H₀", then a conclusion in context, without claiming proof.

### Critical region for the sample mean

Work backwards from the statistic. For H₀: μ = μ₀ with σ known and a two-tailed test at 5%:

```
x̄ ≤ μ₀ − 1.960 × σ/√n      or      x̄ ≥ μ₀ + 1.960 × σ/√n
```

For a one-tailed test use 1.645 (5%) or 2.326 (1%) and put the region in the tail given by H₁.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-statistical-hypothesis-testing--02-two-tail-critical-region.webp" width="900" height="1020" alt="Bar chart of B(40, 0.25) with X at most 5 and X at least 16 in gold as the critical region and 6 to 15 as the acceptance region. Boundary checks 0.0433 and 0.0962, 0.0262 and 0.0544 prove the boundaries, and the actual significance level is 0.0695." loading="lazy">
  <figcaption>A 2-tail critical region puts at most 5% in each tail, and the actual level is the sum of the two tail probabilities.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-statistical-hypothesis-testing--04-sample-mean-spread.webp" width="900" height="960" alt="Two normal curves centred on 48: one value X with standard deviation 6 has P(X &gt; 50) = 0.3694, while the mean of 9 values has standard deviation 2 and P(X-bar &gt; 50) = 0.1587. Larger samples cluster more tightly around the population mean." loading="lazy">
  <figcaption>The sample mean has the same centre as X but a smaller spread, sigma over root n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-statistical-hypothesis-testing--05-normal-mean-critical-region.webp" width="900" height="960" alt="Normal curve N(72, 1.5 squared) with the upper 1% tail beyond 75.49 shaded as the critical region. The observed sample mean 75.2 lies outside it, and the p-value 0.0164 is greater than 0.01, so H0 is not rejected." loading="lazy">
  <figcaption>A sample mean outside the critical region, equivalently a p-value above the level, means H0 is not rejected.</figcaption>
</figure>


## Small worked reminders

**z-test, known σ.** H₀: μ = 14.0, H₁: μ > 14.0, σ = 2.1, n = 20, x̄ = 15.1, 1% level. Here z = 1.1/(2.1/√20) = 1.1/0.4696 = 2.343. This is above 2.326 (p-value 0.0096), so reject H₀.

**Large sample, σ unknown.** n = 120, Σx = 4032, Σx² = 136 550. Then x̄ = 33.6 and s² = [136 550 − 4032²/120]/119 = 9.03, so s = 3.005. The standard error estimate is 3.005/√120 = 0.2743. For H₀: μ = 33, z = 0.6/0.2743 = 2.19.

**t-test, small sample.** n = 20, x̄ = 18.4, s = 2.5, H₀: μ = 17.5, H₁: μ > 17.5, 5% level, critical value 1.729 for 19 degrees of freedom. Here t = 0.9/(2.5/√20) = 0.9/0.559 = 1.610, which is below 1.729. Do not reject H₀.

**Two-tailed t-test, summary data.** n = 15, Σx = 412.5, Σx² = 11 420, H₀: μ = 28, H₁: μ ≠ 28, 5% level, critical values ±2.145 for 14 degrees of freedom. Then x̄ = 27.5 and s² = [11 420 − 412.5²/15]/14 = 5.446, so s = 2.334. Then t = (27.5 − 28)/(2.334/√15) = −0.5/0.6026 = −0.830, which lies inside ±2.145. Do not reject H₀.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-statistical-hypothesis-testing--06-z-versus-t.webp" width="900" height="1130" alt="N(0, 1) and t with 8 degrees of freedom are both symmetric, but t has a lower peak and fatter tails. In the zoomed right tail the one-tail 5% critical value is 1.860 for t compared with 1.645 for z, and cards show it falls towards 1.645 as the degrees of freedom increase." loading="lazy">
  <figcaption>When sigma is unknown and n is small, t gives larger critical values than z.</figcaption>
</figure>


## Assumptions to state

- z-test with known variance: the population is normal (or n is large), and the sample is random.
- Large-sample z-test: n is large, so the Central Limit Theorem makes X̄ approximately normal and s is a good estimate of σ. Say that the conclusion is approximate.
- t-test: the population is normal, σ is unknown, and the sample is random. State "assume the population is normal" in your answer unless the question already tells you.

## Wording a conclusion

A good final sentence has three parts: the decision, the level, and the context. For example: "Reject H₀. There is evidence at the 5% level that the mean delivery time is more than 36 minutes." For a result that is not significant: "Do not reject H₀. There is insufficient evidence at the 5% level that the mean has changed." Avoid certainty words such as "proves" or "shows definitely".

## Must-know distinctions

- **z or t.** Normal population with small n and unknown σ needs t. Large n allows z with s in place of σ. Known σ with a normal population allows z at any n.
- **σ or s.** σ is the population value, given. s is calculated from the sample, with divisor n − 1.
- **Standard deviation or standard error.** The standard deviation describes single values. The standard error σ/√n describes the sample mean.
- **One-tailed or two-tailed.** The words "greater", "less" or "fallen" give one tail. The words "changed", "different" or "differs" give two tails.
- **Significance level or p-value.** The level is chosen in advance. The p-value comes from the data.
- **"Not rejected" or "accepted".** A test does not prove H₀. Write "insufficient evidence to reject".

## Quick self-test

1. A population has σ = 6. Find the standard error of the mean for a sample of 36.
2. Find z when x̄ = 52.4, μ₀ = 50, σ = 8 and n = 64.
3. How many degrees of freedom does a t-test have for a sample of 14?
4. A sample of 10 has Σx = 50 and Σx² = 290. Find s².
5. State the one-tailed 1% critical value of z.
6. A test is carried out at the 5% level using a fixed critical region. What is the probability of a Type I error?
7. A normal population has unknown variance and you have 8 observations. Which statistic do you use, and with how many degrees of freedom?
8. A two-tailed z-test at the 5% level gives a two-tailed p-value of 0.03. State the decision.
9. H₀: μ = 100, σ = 10, n = 25, two-tailed 5% test. Give the critical region for x̄.
10. A lower-tail t-test with 15 degrees of freedom has critical value −1.753 at the 5% level, and t = −1.9. State the decision.
11. Why is it wrong to use N(0, 1) for a sample of 5 from a normal population with unknown variance?

### Answers

1. 6/√36 = **1**.
2. z = 2.4/(8/8) = **2.4**.
3. 14 − 1 = **13**.
4. s² = (290 − 50²/10)/9 = 40/9 = **4.44**.
5. **2.326**.
6. **0.05**.
7. t = (x̄ − μ₀)/(s/√n), with **7 degrees of freedom**.
8. 0.03 < 0.05, so **reject H₀**.
9. Standard error = 2, and 1.960 × 2 = 3.92. Critical region: **x̄ ≤ 96.08 or x̄ ≥ 103.92**.
10. −1.9 < −1.753, so **reject H₀**.
11. s from 5 values is an unreliable estimate of σ, so the statistic does not follow N(0, 1). It follows a t-distribution with 4 degrees of freedom, which has heavier tails.

## Where marks are usually lost

- Forgetting the √n and dividing by σ instead of σ/√n.
- Using divisor n instead of n − 1 when calculating s² from Σx and Σx².
- Using n instead of n − 1 as the degrees of freedom.
- Using a z critical value for a small sample with unknown variance.
- Writing hypotheses in terms of x̄ instead of the population mean μ.
- Mixing up tails, for example comparing with a positive critical value in a lower-tail test.
- Comparing a two-tailed p-value with α/2, or a one-tail probability with α in a two-tailed test.
- Stopping at "reject H₀" with no sentence in context, or writing "the mean is proved to be higher".
- Not stating the assumption that the population is normal when using t.

## Frequently asked questions

**When do you use a t-test instead of a z-test?**
Use a t-test when the population is normal, the variance is unknown and the sample is small. With a large sample you can use z with s in place of σ as an approximation.

**What is the difference between standard deviation and standard error?**
The standard deviation describes the spread of single values. The standard error, σ/√n, describes the spread of the sample mean.

**What are the critical values of z for common significance levels?**
The one-tailed 5% value is 1.645, the one-tailed 1% value is 2.326, and the two-tailed 5% values are ±1.960.

**Why are t critical values larger than z critical values?**
The t-distribution has heavier tails than N(0, 1), so a larger value is needed to cut off the same tail probability. As the degrees of freedom increase, it approaches N(0, 1).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA. Content: S2.6 Hypothesis testing, tests for the mean (z-statistic and t-statistic), within Unit S2 (Statistics).
