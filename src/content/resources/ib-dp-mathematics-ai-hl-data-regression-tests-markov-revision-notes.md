---
title: "IB DP Mathematics: Applications and Interpretation -- Data collection, non-linear regression, hypothesis tests and Markov chains (HL) Revision Notes"
seoTitle: "IB Maths AI HL Regression, Tests and Markov Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed IB Maths AI HL revision notes on survey design, χ² df, SSres and R², z, t, binomial and Poisson tests and Markov chains, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, use the [study guide for this unit](/resources/ib-dp-mathematics-ai-hl-data-regression-tests-markov/).

These revision notes cover one HL unit of IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 4.12, 4.13, 4.18 and 4.19, and all of it is HL only (AHL). The notes follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions. All three HL papers require a GDC.

When you are ready, test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-data-regression-tests-markov-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show the whole course. The SL tests these notes build on are in the [statistics and probability guide](/resources/ib-dp-mathematics-ai-statistics-probability/).

## Definitions

**Data collection (4.12)**

- **Biased question**: wording leads towards an answer. **Unbiased**: neutral wording.
- **Personal question**: sensitive (income, health). Risk of refusal or dishonest answers.
- **Unstructured question**: open answer. **Structured question**: fixed, consistent answer choices.
- **Precise question**: clear time frame, units and categories that do not overlap.
- **Reliability**: the method gives consistent results when repeated.
  - Test-retest: same test, same group, two different times.
  - Parallel forms: two equivalent versions of the test, same group.
- **Validity**: the method measures what it claims to.
  - Content validity: the questions cover every part of what is measured.
  - Criterion-related validity: results agree with an established measure.

**Regression (4.13)**

- **Residual** = observed y − predicted y.
- **SSres**: sum of the squared residuals. Smaller means a closer fit.
- **R²**: proportion of the variability in y accounted for by the model. 0 ≤ R² ≤ 1.
- Models in examinations: linear, quadratic, cubic, exponential, power, sine.

**Hypothesis tests (4.18)**

- **Critical region**: values of the test statistic that lead to rejecting H₀. **Critical value**: its boundary.
- **Type I error**: reject H₀ when H₀ is true.
- **Type II error**: accept H₀ when H₀ is false.

**Markov chains (4.19)**

- **Transition matrix T**: Tᵢⱼ = P(moving from state j to state i). Columns sum to 1.
- **Initial state matrix s₀**: column of starting probabilities.
- **Regular chain**: some power of T has all entries positive.
- **Steady state s**: Ts = s, entries sum to 1. It is the eigenvector for eigenvalue 1, scaled so its entries add to 1.

## Formulas

| Result | Formula |
|---|---|
| χ² goodness of fit df | categories − 1 − parameters estimated |
| Sum of square residuals | SSres = Σ(yᵢ − ŷᵢ)² |
| Linear model only | R² = r² |
| Sample mean (normal population) | X̄ ~ N(μ, σ²/n) |
| z statistic | z = (x̄ − μ)/(σ/√n) |
| State after n steps | sₙ = Tⁿs₀ |
| Steady state | Ts = s, sum of entries = 1 |
| Normal test, σ known | P(Type I) = significance level |

## Method in steps

**χ² goodness of fit with estimated parameters**

1. State H₀ (the data fit the named distribution) and H₁.
2. Estimate the parameter(s) from the data, for example the mean for a Poisson model.
3. Find the expected frequencies. Merge neighbouring categories until every expected frequency is greater than 5.
4. df = categories − 1 − parameters estimated.
5. Use technology for χ² and the p-value, setting df yourself. Compare with the significance level and conclude in context.

**Discrete critical region (binomial or Poisson, one-tailed)**

1. Write H₀, H₁ and the distribution under H₀.
2. For H₁: p < p₀, find the largest c with P(X ≤ c) below the significance level. For H₁: p > p₀, find the smallest c with P(X ≥ c) below it.
3. State the critical region and quote the probability either side of c.
4. P(Type I) = P(X in critical region | H₀).
5. P(Type II) = P(X not in critical region | the stated true value).

**Normal mean test**

1. σ known → z-test. σ unknown → t-test, whatever the sample size.
2. Matched pairs: find the differences, then do a one-sample test on them.
3. Quote the statistic and p-value, compare, and conclude in context.

**Steady state by equations**

1. Write Ts = s as equations. Drop one (they are dependent).
2. Add the equation "entries sum to 1".
3. Solve. Give exact fractions if the question asks for them.

## Small worked reminders

- **Merging**: Po(2) with n = 120 gives expected 4.33 for x = 5 and 1.99 for x ≥ 6. Merge them into "≥ 5" (6.32).
- **df**: a normal model with μ and σ estimated and 6 categories after merging has df = 6 − 1 − 2 = 3.
- **SSres**: model y = x² + x + 3 on (1, 5), (2, 9), (3, 14), (4, 22) gives residuals 0, 0, −1, −1, so SSres = 2.
- **Binomial**: H₀: p = 0.3, H₁: p < 0.3, n = 20, 5%. P(X ≤ 2) = 0.0355 and P(X ≤ 3) = 0.107, so the critical region is X ≤ 2.
- **Poisson over time**: 3.5 per month for 8 months → Po(28) for the total.
- **Markov**: T with columns (0.8, 0.2) and (0.3, 0.7), s₀ = (0.5, 0.5)ᵀ gives s₁ = (0.55, 0.45)ᵀ. The steady state is (3/5, 2/5)ᵀ.

## Must-know distinctions

- **Reliability vs validity**: consistent vs measuring the right thing. A scale that always reads 2 kg heavy is reliable but not valid.
- **Test-retest vs parallel forms**: same test twice vs two equivalent versions.
- **Content vs criterion-related validity**: covers the whole topic vs agrees with an established measure.
- **SSres vs R²**: SSres depends on the units of y. R² is a proportion, so it has no units.
- **R² vs r**: R² = r² only for a linear model. r has a sign; R² does not.
- **z vs t**: σ known vs σ unknown.
- **Continuous vs discrete tests**: for the normal test P(Type I) equals the significance level. For binomial and Poisson tests it is at most the significance level.
- **Type I vs Type II**: wrongly reject vs wrongly accept H₀.
- **Row vs column convention**: IB uses columns summing to 1 and sₙ = Tⁿs₀ with s₀ a column.

## Quick self-test

1. After merging there are 7 categories, and a binomial p was estimated from the data. Find the degrees of freedom.
2. What is wrong with the question "Do you exercise rarely, sometimes or often?" How would you fix it?
3. A class sits the same test twice, a month apart, and the scores are compared. Which reliability test is this?
4. A linear model has r = −0.85. Find R² and interpret it.
5. A model's residuals are 0.3, −0.5, 0.1 and 0.4. Find SSres.
6. X ~ N(μ, 6²). A sample of 16 has x̄ = 53.2. Test H₀: μ = 50 against H₁: μ > 50 at 5%.
7. Write down the critical value for an upper-tailed z-test at the 1% level.
8. Under H₀, X ~ B(15, 0.4), with H₁: p < 0.4 at 5%. Find the critical region and P(Type I).
9. Under H₀, X ~ Po(9), with H₁: λ > 9 at 5%. Find the critical region and P(Type I).
10. T has columns (0.9, 0.1) and (0.4, 0.6), and s₀ = (0, 1)ᵀ. Find s₁.
11. For the T in question 10, find the exact steady state.

### Answers

1. df = 7 − 1 − 1 = **5**.
2. The categories are vague and mean different things to different people. Ask **"How many times did you exercise last week?"** with ranges that do not overlap (0, 1–2, 3–4, 5 or more).
3. **Test-retest**.
4. R² = 0.85² = **0.7225**. About 72% of the variability in y is accounted for by the linear model.
5. 0.09 + 0.25 + 0.01 + 0.16 = **0.51**.
6. z = (53.2 − 50)/(6/4) = 2.13, p = **0.0164** < 0.05. **Reject H₀**: there is evidence that μ > 50.
7. **2.33** (2.326).
8. P(X ≤ 2) = 0.0271 < 0.05 and P(X ≤ 3) = 0.0905 > 0.05. Critical region **X ≤ 2**, and **P(Type I) = 0.0271**.
9. P(X ≥ 15) = 0.0415 < 0.05 and P(X ≥ 14) = 0.0739 > 0.05. Critical region **X ≥ 15**, and **P(Type I) = 0.0415**.
10. s₁ = T s₀ = **(0.4, 0.6)ᵀ**.
11. 0.1a = 0.4b with a + b = 1, so s = **(4/5, 1/5)ᵀ**.

## Where marks are usually lost

- Merging χ² categories because of a small observed frequency instead of a small expected one.
- Leaving df as categories − 1 after estimating a mean or proportion from the data.
- Defining reliability and validity the wrong way round, or naming a test without saying what it compares.
- Choosing a model on R² alone, with no comment on context or extrapolation.
- Giving R² as a percentage without saying "of the variability in y".
- Using a z-test with a sample standard deviation.
- Stating a discrete critical region without the probabilities that justify c.
- Finding P(Type II) with the H₀ parameter instead of the stated true value.
- Writing T with rows summing to 1, or finding s₀T instead of Ts₀.
- Giving a decimal steady state when the question asks for an exact answer.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections AHL 4.12, 4.13, 4.18 and 4.19.
