---
title: "IB DP Mathematics: Applications and Interpretation -- Correlation, regression and hypothesis testing Revision Notes"
seoTitle: "IB Maths AI Correlation and Hypothesis Testing Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Correlation, regression and hypothesis testing"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 4.4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-statistics-and-probability"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-4-11"
description: "Condensed revision notes on r, rₛ, regression, χ² tests and the t-test, with a quick self-test, for IB DP Mathematics: Applications and Interpretation."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and worked examples, read the [study guide for this unit](/resources/ib-dp-mathematics-ai-correlation-hypothesis-testing/) first.

These revision notes cover correlation, regression and hypothesis testing for IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 4.4, 4.10 and 4.11, which are common content for SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Links: [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) · [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) · [practice questions](/resources/ib-dp-mathematics-ai-correlation-hypothesis-testing-practice/) · [statistics and probability overview](/resources/ib-dp-mathematics-ai-statistics-probability/) · [exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/)

## Definitions

- **Bivariate data**: pairs of values (x, y) from the same individual or item.
- **Mean point**: (x̄, ȳ). A line of best fit by eye passes through it, and so does the regression line.
- **Pearson's r**: strength and direction of a **linear** relationship, −1 ≤ r ≤ 1. Find it with technology.
- **Spearman's rₛ**: Pearson's r applied to ranks. Measures a **monotonic** relationship. Find it with technology; average tied ranks.
- **Regression line of y on x**: y = ax + b, found with technology. Use it to predict y from x.
- **H₀**: null hypothesis ("independent", "fits the distribution", "means equal").
- **H₁**: alternative hypothesis (what you want evidence for).
- **Significance level**: 1%, 5% or 10% in exam questions.
- **p-value**: probability of a result at least as extreme as the one observed, assuming H₀ is true.
- **Degrees of freedom (df)**: the number used with the χ² distribution; always greater than 1 in exams.

## Formulas and rules

| Item | Rule |
|---|---|
| Regression line | y = ax + b (technology); passes through (x̄, ȳ) |
| a | change in y per unit increase in x |
| b | value of y when x = 0 (only meaningful if x = 0 makes sense) |
| χ² statistic | χ²calc = Σ (f_o − f_e)² / f_e |
| Expected frequency (independence) | (row total × column total) / grand total |
| df, independence test | (rows − 1)(columns − 1) |
| df, goodness of fit (SL) | n − 1, where n is the number of categories |
| Decision (p-value) | reject H₀ if p-value < significance level |
| Decision (critical value) | reject H₀ if χ²calc > critical value |
| t-test at SL | unpaired samples, pooled, variance unknown, populations normal |

## Correlation words

| r (or rₛ) | Description |
|---|---|
| close to 1 | strong positive |
| about 0.5 | weak/moderate positive |
| close to 0 | no linear (or monotonic) correlation |
| close to −1 | strong negative |

Say "linear" for r and "monotonic" for rₛ.

## Method in steps

**Regression and prediction**

1. Enter x and y as two lists. Run linear regression.
2. Write r, a and b to 3 s.f.
3. Predict with the stored (unrounded) a and b.
4. Check the x value is inside the data range. If not, say "extrapolation, unreliable".
5. Never use the y on x line to predict x.

**Spearman's rₛ**

1. Rank each variable separately (smallest = 1).
2. Tied values share the average rank: two values in positions 4 and 5 both get 4.5.
3. Find r for the two rank lists. That is rₛ.

**χ² test (either type)**

1. Write H₀ and H₁ in context.
2. Find expected frequencies (check they are greater than 5).
3. State df.
4. Find χ²calc and the p-value with technology.
5. Compare: p-value with the significance level, or χ²calc with the given critical value.
6. Conclude in context.

**Pooled two-sample t-test**

1. H₀: μ₁ = μ₂. H₁: μ₁ ≠ μ₂ (two-tailed) or μ₁ > μ₂ / μ₁ < μ₂ (one-tailed).
2. Enter both samples. Choose pooled, and the right alternative.
3. Read the p-value. Compare with the significance level.
4. Conclude in context. State the normality assumption if asked.

## Small worked reminders

- 2 × 3 table, row totals 60 and 90, every column total 50, grand total 150: expected top-left = 60 × 50 / 150 = 20. df = 1 × 2 = 2.
- Five equally likely days, 200 customers: each expected frequency is 40; df = 4.
- y = 3.03x + 10.4 for drinks sold (y) against temperature in °C (x): about 3 more drinks per extra degree.
- x = 1, 2, 3, 4, 5, 6 and y = 2, 3, 5, 9, 17, 33: rₛ = 1 (always increasing) but r = 0.906 (curved).

## Worked reminder: a full χ² conclusion

Revision method against year group, 150 students, test at 5%.

```
H₀: revision method and year group are independent
H₁: revision method and year group are not independent
df = (2 − 1)(3 − 1) = 2
χ²calc = 9.5, p-value = 0.00865
0.00865 < 0.05 → reject H₀
```

Conclusion: there is evidence at the 5% level that revision method depends on year group. The final sentence carries a mark, so never stop at "reject H₀".

## Worked reminder: a t-test conclusion

Method A scores against Method B scores, test at 5% whether A has the higher mean.

```
H₀: μ_A = μ_B    H₁: μ_A > μ_B   (one-tailed)
pooled 2-sample t-test: t = 2.62, p-value = 0.0120
0.0120 < 0.05 → reject H₀
```

Conclusion: there is evidence that Method A gives a higher mean score. If the question had asked whether the means **differ**, the test would be two-tailed and the p-value would double to 0.0240.

## Exam conditions stated in the guide

- Contingency tables have at most 4 rows or 4 columns.
- Degrees of freedom are always greater than 1.
- Expected frequencies are greater than 5.
- Only upper-tail χ² tests at 1%, 5% or 10% are set.
- The χ² critical value is given where appropriate; so are critical values of r.
- You find χ², p-values and t-test results with technology. Hand calculation of expected values is a useful check, not a requirement.
- At SL, t-test samples are unpaired and the population variance is unknown; assume equal variances and use the pooled test.
- rₛ is found with technology in examinations.

## Must-know distinctions

- **Pearson vs Spearman**: Pearson tests only for linearity; Spearman tests for any monotonic relationship and is less sensitive to outliers.
- **Correlation vs causation**: a strong correlation does not show that one variable causes the other.
- **Interpolation vs extrapolation**: inside the data range is reasonable; outside is unreliable.
- **Independence vs goodness of fit**: independence uses a contingency table and df = (r − 1)(c − 1); goodness of fit compares one row of data with a claimed distribution and at SL uses df = n − 1.
- **One-tailed vs two-tailed**: "greater", "higher", "less" → one-tailed; "different", "differ" → two-tailed.
- **p-value vs critical value**: small p-value means reject; large χ²calc means reject.
- **"Do not reject H₀" vs "accept H₀"**: a test never proves H₀. Say there is insufficient evidence.

## Quick self-test

1. State the degrees of freedom for a χ² test for independence on a 3 × 4 contingency table.
2. In a contingency table, a row total is 45, a column total is 60 and the grand total is 180. Find the expected frequency for that cell.
3. A goodness of fit test at SL has 5 categories. State the degrees of freedom.
4. A test gives a p-value of 0.032. State the decision at the 5% level and at the 1% level.
5. χ²calc = 7.21 and the critical value at 5% with df = 3 is 7.81. State the decision.
6. Rank the values 12, 15, 15, 18, 20 for Spearman's rₛ.
7. y = 1.8x + 25. Predict y when x = 10.
8. The scatter diagram shows y always increasing with x, but along a curve. Which coefficient describes the relationship better?
9. A spinner with 5 equal sectors is spun 120 times. Find each expected frequency under H₀.
10. Write H₀ and H₁ to test whether the mean time for Group 1 is greater than for Group 2.
11. A scatter diagram shows a clear U-shape, and r = 0.12. What can you conclude?
12. The regression line is y = 2.5x + 4 and x̄ = 6. Find ȳ.

### Answers

1. (3 − 1)(4 − 1) = **6**
2. 45 × 60 / 180 = **15**
3. 5 − 1 = **4**
4. 5%: 0.032 < 0.05, **reject H₀**. 1%: 0.032 > 0.01, **do not reject H₀**.
5. 7.21 < 7.81, so **do not reject H₀**.
6. **1, 2.5, 2.5, 4, 5**
7. 1.8 × 10 + 25 = **43**
8. **Spearman's rₛ** (monotonic, not linear).
9. 120 / 5 = **24**
10. **H₀: μ₁ = μ₂; H₁: μ₁ > μ₂**
11. Only that there is **no linear correlation**. The variables are clearly related, but not linearly, so r is not meaningful here.
12. ȳ = 2.5 × 6 + 4 = **19** (the line passes through the mean point).

## Where marks are usually lost

- Describing r without both direction and strength, or without the word "linear".
- Rounding a and b before predicting, so the prediction is off in the third significant figure.
- Making a prediction outside the data range without a warning about extrapolation.
- Rearranging y = ax + b to estimate x from a given y.
- Leaving tied values with different ranks instead of the average rank.
- Writing H₀ and H₁ the wrong way round, or without context.
- Giving df as rows × columns, or as n rather than n − 1 for goodness of fit.
- Comparing the p-value with the critical value, or χ²calc with the significance level.
- Choosing a two-tailed alternative when the question asks whether one mean is higher.
- Stating the decision ("reject H₀") without a sentence in the context of the question.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
