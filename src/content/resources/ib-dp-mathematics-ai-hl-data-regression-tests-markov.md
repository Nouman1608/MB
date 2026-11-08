---
title: "IB DP Mathematics: Applications and Interpretation -- Data collection, non-linear regression, hypothesis tests and Markov chains (HL) Study Guide"
seoTitle: "IB Maths AI HL Regression, Tests and Markov Chains Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Data collection, non-linear regression, hypothesis tests and Markov chains (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-18"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-19"
description: "IB Maths AI HL study guide: data collection, reliability and validity, non-linear regression and R², hypothesis tests, Type I/II errors, Markov chains."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29."
---

This study guide teaches one HL unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, and covers syllabus sections 4.12, 4.13, 4.18 and 4.19. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

At HL, Papers 1, 2 and 3 all require a GDC. You set problems up mathematically, calculate with technology and interpret in context.

Revise from the [revision notes](/resources/ib-dp-mathematics-ai-hl-data-regression-tests-markov-revision-notes/) and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-data-regression-tests-markov-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits. SL groundwork is in the [statistics and probability guide](/resources/ib-dp-mathematics-ai-statistics-probability/).

## What this unit covers

| Section | What you must be able to do | Level |
|---|---|---|
| 4.12 | Design valid surveys; choose relevant variables and data; choose χ² categories with expected frequencies over 5; set degrees of freedom when parameters are estimated; explain reliability (test-retest, parallel forms) and validity (content, criterion-related) | HL only |
| 4.13 | Fit linear, quadratic, cubic, exponential, power and sine models with technology; use SSres and R² to judge fit | HL only |
| 4.18 | Use critical values and regions; test a normal mean (z or t), a binomial proportion, a Poisson mean and ρ = 0; find Type I and Type II error probabilities | HL only |
| 4.19 | Use transition matrices and diagrams, sₙ = Tⁿs₀, regular Markov chains and steady states | HL only |

## 4.12 Designing valid data collection

A **biased** question pushes people towards one answer ("Don't you agree the canteen is too expensive?"). An **unbiased** question is neutral ("How would you rate canteen prices?"). **Personal** questions (income, health) may cause refusals or dishonest answers, so ask them only if needed.

**Unstructured** questions are open ("What do you think of the bus service?"). They give rich answers that are hard to analyse. **Structured** questions give consistent answer choices, such as a five-point scale or ranges that do not overlap. **Precise** questions fix the time frame and units: "How many hours did you spend on homework last week?" not "Do you do a lot of homework?"

You must also pick the **relevant variables** from a large data set and choose data that answers the question.

### Reliability and validity

- **Reliability**: the method gives consistent results when repeated.
  - *Test-retest*: give the same test to the same group at two different times and compare the results.
  - *Parallel forms*: give two equivalent versions of the test to the same group and compare the results.
- **Validity**: the method measures what it claims to measure.
  - *Content validity*: the questions cover every part of what is being measured.
  - *Criterion-related validity*: the results agree with an established measure (the criterion).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--01-imath-ai-hl-reliability-validity.webp" width="900" height="1065" alt="Four dartboards with seven crosses each. Top row clusters tightly (reliable); bottom row is scattered (not reliable). Left column is centred on the bullseye (valid); right column is centred off target (not valid). A box lists the checks: test-retest and parallel forms for reliability, content and criterion-related for validity." loading="lazy">
  <figcaption>Reliable means consistent, valid means accurate; the two are independent.</figcaption>
</figure>


### χ² goodness of fit with estimated parameters

For a χ² goodness of fit test, choose categories so that every **expected** frequency is greater than 5. Merge neighbouring categories if needed, and say why.

Degrees of freedom = (number of categories after merging) − 1 − (number of parameters estimated from the data).

Estimating a Poisson mean or a binomial p costs 1; estimating a normal μ and σ costs 2.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--02-imath-ai-hl-chi-squared-df.webp" width="900" height="1030" alt="Bar chart of Poisson(2) expected frequencies shows 5 and 6-or-more fall below 5 and are merged into a single category. A second chart compares observed and expected for the six categories. Degrees of freedom are 6 − 1 − 1 = 4, chi-squared 5.37, p 0.251, so H0 is not rejected." loading="lazy">
  <figcaption>Merge categories until every expected frequency exceeds 5, then subtract the estimated parameters from the number of categories minus 1.</figcaption>
</figure>


### Worked example 1

A café counts customers arriving in 120 five-minute intervals.

| Customers | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| Frequency | 22 | 31 | 27 | 20 | 10 | 6 | 3 | 1 |

Test at the 5% level whether a Poisson model fits.

```
H₀: the data follow a Poisson distribution
H₁: the data do not follow a Poisson distribution
Sample mean = 240/120 = 2, so use Po(2)
Expected: 0: 16.24  1: 32.48  2: 32.48  3: 21.65  4: 10.83
          5: 120 × P(X = 5) = 4.33,  ≥6: 120 × P(X ≥ 6) = 1.99
```

The expected frequencies for 5 and for ≥ 6 are below 5, so merge them into "≥ 5": expected 6.32, observed 10. There are now 6 categories and 1 parameter was estimated, so df = 6 − 1 − 1 = 4.

Technology gives χ² = 5.37 and p = 0.251. Since 0.251 > 0.05, do not reject H₀. There is not enough evidence that the Poisson model is unsuitable.

## 4.13 Non-linear regression

Your GDC fits least squares curves: linear, quadratic, cubic, exponential, power and sine models can all appear in examinations.

- The **residual** for a point is the observed y minus the value the model predicts.
- **SSres**, the sum of square residuals, measures fit. Smaller is better.
- The **coefficient of determination R²** is the proportion of the variability in y accounted for by the model. It lies between 0 and 1.
- For a linear model, R² = r², where r is Pearson's product moment correlation coefficient.

R² alone is not a good way to choose between models. Adding terms (quadratic to cubic) never lowers R². Also ask whether the model makes sense in context and outside the data range.

### Worked example 2 (SSres by hand)

Data: (1, 5), (2, 9), (3, 14), (4, 22). Compare model A: y = x² + x + 3 and model B: y = 3.2 × 1.6ˣ.

```
Model A predictions: 5, 9, 15, 23      residuals: 0, 0, −1, −1
SSres(A) = 0 + 0 + 1 + 1 = 2
Model B predictions: 5.12, 8.192, 13.107, 20.972
residuals: −0.12, 0.808, 0.893, 1.028
SSres(B) = 2.52 (3 s.f.)
```

Model A fits these four points better because its SSres is smaller.

### Worked example 3 (technology)

The area y m² of an algae patch after x weeks:

| x | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| y | 3.1 | 4.0 | 5.6 | 8.2 | 11.5 | 16.0 | 21.9 |

- Linear: y = 3.08x − 2.29, R² = 0.930.
- Quadratic: y = 0.487x² − 0.813x + 3.56, R² = 0.999.

The quadratic explains 99.9% of the variation in area, against 93.0% for the line. It predicts 28.2 m² at week 8, a small extrapolation. A cubic gives R² even closer to 1, but that alone does not make it better.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--03-imath-ai-hl-regression-r-squared.webp" width="900" height="1010" alt="Scatter plot of algae area against weeks 1 to 7 with a linear fit (R² 0.930) and a quadratic fit (R² 0.999). Dashed extensions predict 28.2 m² and 22.4 m² at week 8. A note warns that higher R² alone does not prove a better model." loading="lazy">
  <figcaption>A quadratic explains 99.9% of the variation against 93.0% for the line, but R² alone is not enough to choose a model.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--04-imath-ai-hl-ssres.webp" width="900" height="1250" alt="Two plots of the data (1,5), (2,9), (3,14), (4,22) with models A and B. Gold squares on each residual have side proportional to the residual (drawn 3 times larger). SSres is 2 for model A and 2.52 for model B, so A fits better." loading="lazy">
  <figcaption>SSres is the sum of squared residuals, and a smaller value means a better fit.</figcaption>
</figure>


## 4.18 Hypothesis testing

The **critical value** is the boundary of the **critical region**: the values of the test statistic that lead you to reject H₀.

- **Type I error**: rejecting H₀ when it is true.
- **Type II error**: accepting H₀ when it is false.

For a normal test with known σ, P(Type I) equals the significance level. For binomial and Poisson tests the variable is discrete. The critical region is chosen so that P(Type I) is as large as possible while staying below the significance level.

Which test?

| Situation | Test |
|---|---|
| Normal mean, σ known | z-test using X̄ ~ N(μ, σ²/n) |
| Normal mean, σ unknown (any n) | t-test |
| Matched pairs | t-test on the differences (a single sample) |
| Proportion | binomial, one-tailed only |
| Poisson mean | Poisson, one-tailed only |
| Correlation, bivariate normal | test ρ = 0 with technology |

You will not be asked to calculate critical regions for t-tests.

### Worked example 4 (normal, σ known)

Bottles are filled with volumes N(μ, 4²) ml. The label claims μ = 500. A sample of 25 has x̄ = 498.3. Test at 5% whether μ < 500.

```
H₀: μ = 500    H₁: μ < 500
Under H₀, X̄ ~ N(500, 4²/25), so the standard deviation of X̄ is 0.8
z = (498.3 − 500)/0.8 = −2.125,  p = 0.0168
```

Since 0.0168 < 0.05, reject H₀. There is evidence that the mean volume is below 500 ml.

Critical region: z < −1.645, which gives x̄ < 500 − 1.645 × 0.8 = 498.68.

If in fact μ = 498, then P(Type II) = P(X̄ ≥ 498.684 | X̄ ~ N(498, 0.8²)) = 0.196.

### Worked example 5 (matched pairs)

Eight runners' scores before and after a training plan:

| Before | 62 | 55 | 71 | 48 | 66 | 59 | 74 | 52 |
|---|---|---|---|---|---|---|---|---|
| After | 66 | 58 | 70 | 55 | 71 | 60 | 79 | 57 |

Let d = after − before: 4, 3, −1, 7, 5, 1, 5, 5. H₀: μ_d = 0, H₁: μ_d > 0. σ is unknown, so use a one-sample t-test on d. Technology gives t = 4.01 and p = 0.00258 < 0.05. Reject H₀: there is evidence that scores improved.

### Worked example 6 (binomial, with errors)

It is claimed that 30% of seeds fail. After a new treatment, 20 seeds are sown. Test at 5% whether the proportion has fallen.

```
H₀: p = 0.3    H₁: p < 0.3    X ~ B(20, 0.3) under H₀
P(X ≤ 2) = 0.0355 < 0.05     P(X ≤ 3) = 0.107 > 0.05
Critical region: X ≤ 2       P(Type I) = 0.0355
```

If the true proportion is 0.15, P(Type II) = P(X ≥ 3 | X ~ B(20, 0.15)) = 0.595.

### Worked example 7 (Poisson)

A junction averaged 3.5 accidents per month. In the 8 months after a redesign there were 19. Test at 5% whether the rate has fallen.

Under H₀ the total is Y ~ Po(8 × 3.5) = Po(28). P(Y ≤ 19) = 0.0478 < 0.05, so reject H₀. The critical region is Y ≤ 19, because P(Y ≤ 20) = 0.0727 is too big.

### Testing ρ = 0

For bivariate normal data, H₀: ρ = 0 and H₁: ρ > 0, ρ < 0 or ρ ≠ 0. The data will be given. Your GDC returns r and the p-value to compare with the significance level.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--05-imath-ai-hl-binomial-errors.webp" width="900" height="960" alt="Two bar charts. For B(20, 0.3) the bars 0 to 2 form the critical region with Type I probability 0.0355. For B(20, 0.15) the bars 3 or more are the Type II error with probability 0.595." loading="lazy">
  <figcaption>The critical region is the largest one with probability under the significance level; a Type II error depends on the true parameter.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--06-imath-ai-hl-normal-test-errors.webp" width="900" height="950" alt="Two normal curves for the sample mean, N(500, 0.8²) and N(498, 0.8²). The left tail of the first below 498.68 is the Type I error (0.05); the part of the second above 498.68 is the Type II error (0.196). The observed 498.3 lies in the critical region." loading="lazy">
  <figcaption>The same critical value splits both curves: its tail under H0 is Type I, its tail under the true mean is Type II.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--07-imath-ai-hl-poisson-critical-region.webp" width="900" height="830" alt="Bar chart of Po(28) with bars 12 to 19 shaded as the critical region, probability 0.0478. Including 20 would give 0.0727, over 0.05. The observed 19 lies in the region." loading="lazy">
  <figcaption>For discrete variables take the largest critical region whose probability stays under the significance level.</figcaption>
</figure>


## 4.19 Markov chains

A **transition matrix** T holds the probabilities of moving between states. In IB notation Tᵢⱼ is the probability of moving **from state j to state i**, so each **column** sums to 1. A **transition diagram** shows the same information as arrows between states.

If s₀ is the initial state matrix (a column), then after n transitions sₙ = Tⁿs₀.

A Markov chain is **regular** if some power of T has all entries positive. A regular chain has a **steady state** s, with Ts = s and entries summing to 1. You find it by working out Tⁿs₀ for large n, or by solving the linear equations. The steady state is the eigenvector for eigenvalue 1, scaled so its entries add to 1. Questions will say when an exact answer from equations is required.

### Worked example 8

Each week a gym member either attends (A) or does not (N). An attender attends the next week with probability 0.8. A non-attender attends with probability 0.3.

```
        from A  from N
T = [   0.8     0.3  ]  to A
    [   0.2     0.7  ]  to N

s₀ = (0.5, 0.5)ᵀ
s₁ = T s₀ = (0.55, 0.45)ᵀ
s₂ = T² s₀ = (0.575, 0.425)ᵀ
```

For the exact steady state, solve 0.8a + 0.3b = a with a + b = 1. This gives 0.2a = 0.3b, so a = 3/5 and b = 2/5. In the long run, 60% of members attend in a given week. Check: T¹⁰s₀ = (0.5999, 0.4001)ᵀ.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--08-imath-ai-hl-markov-transitions.webp" width="900" height="1010" alt="Two-state diagram for gym attendance with probabilities 0.8, 0.2, 0.3 and 0.7, matched to the transition matrix whose columns are the from-states and sum to 1. Starting at (0.5, 0.5), the states after one and two weeks are (0.55, 0.45) and (0.575, 0.425)." loading="lazy">
  <figcaption>Each column of T sums to 1 and s_n = Tⁿ s₀.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-data-regression-tests-markov--09-imath-ai-hl-markov-steady-state.webp" width="900" height="1010" alt="Line graph of the proportion attending over 10 weeks from two different starts (0.5 and 0), both approaching the steady state 0.6 = 3/5. A box shows solving 0.2a = 0.3b with a + b = 1." loading="lazy">
  <figcaption>A regular chain settles to the same steady state whatever the start.</figcaption>
</figure>


## Using your GDC

- **χ² goodness of fit**: enter observed and expected lists, and **change df** yourself when you estimate parameters.
- **Regression**: quote parameters to 3 s.f. but predict with the stored full values.
- **Tests**: write down the hypotheses, the distribution and the p-value, not just "GDC".

## Common errors

- Merging because an *observed* frequency is small. The *expected* frequencies must exceed 5.
- Forgetting to subtract estimated parameters from df.
- Mixing up reliability (consistent) with validity (accurate).
- Comparing models by R² alone, or extrapolating a polynomial far outside the data.
- Using z when σ is unknown, even for large n.
- Writing a two-tailed binomial or Poisson test.
- Giving a critical region with P(Type I) just over the significance level.
- Building T with rows summing to 1, then multiplying in the wrong order.

## Where to go next

Condense this with the [revision notes](/resources/ib-dp-mathematics-ai-hl-data-regression-tests-markov-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-ai-hl-data-regression-tests-markov-practice/). See also the [exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/), [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and [subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/).

## Frequently asked questions

**When do you merge categories in a χ² goodness of fit test?**
Merge neighbouring categories until every expected frequency is greater than 5, and say why you merged. Then count the categories after merging when working out the degrees of freedom.

**Can you choose between regression models using R² alone?**
No. Adding terms, such as going from quadratic to cubic, never lowers R², so also compare SSres and ask whether the model makes sense in context and outside the data range.

**What is a regular Markov chain?**
A Markov chain is regular when some power of the transition matrix T has all entries positive. Its steady state s satisfies Ts = s with entries summing to 1, which makes it the eigenvector for eigenvalue 1.

**What does a transition matrix entry mean in IB Maths AI?**
In the IB Maths AI convention, the entry Tᵢⱼ is the probability of moving from state j to state i, so each column sums to 1. Transposing the matrix is a common error.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections AHL 4.12, 4.13, 4.18 and 4.19.
