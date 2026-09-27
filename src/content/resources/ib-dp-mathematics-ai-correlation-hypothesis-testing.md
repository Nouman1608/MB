---
title: "IB DP Mathematics: Applications and Interpretation -- Correlation, regression and hypothesis testing Study Guide"
seoTitle: "IB Maths AI Correlation and Hypothesis Testing Study Guide"
resourceType: "study-guides"
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
description: "Study guide to Pearson and Spearman correlation, the regression line, χ² tests and the t-test, with worked examples, for IB DP Maths AI SL and HL."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches correlation, regression and hypothesis testing for IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, and covers syllabus sections 4.4, 4.10 and 4.11, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

Every paper in this course is "technology required", so the guide expects you to find r, rₛ, regression lines, χ² statistics and p-values on your GDC. Your job in the exam is to choose the right tool, set up the hypotheses and interpret the result in context.

Useful links: the [course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/), the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/), the [revision notes for this unit](/resources/ib-dp-mathematics-ai-correlation-hypothesis-testing-revision-notes/) and the [practice questions for this unit](/resources/ib-dp-mathematics-ai-correlation-hypothesis-testing-practice/). For the wider strand, see the [statistics and probability overview](/resources/ib-dp-mathematics-ai-statistics-probability/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 4.4 | Describe correlation from a scatter diagram; draw a line of best fit by eye through the mean point; find Pearson's r and the regression line of y on x with technology; predict, and interpret a and b in y = ax + b | SL and HL |
| 4.10 | Find Spearman's rank correlation coefficient rₛ with technology, averaging tied ranks; judge when Pearson or Spearman is appropriate and how outliers affect each | SL and HL |
| 4.11 | Write H₀ and H₁; use significance levels and p-values; carry out χ² tests for independence and goodness of fit; use the pooled two-sample t-test to compare two population means | SL and HL |

## Section 4.4: Scatter diagrams and Pearson's r

### Describing correlation

A scatter diagram plots bivariate data: pairs (x, y). Describe what you see with two words:

- **direction**: positive, negative or zero
- **strength**: strong, weak or no correlation

A **line of best fit by eye** should pass through the **mean point** (x̄, ȳ). Plot that point first.

### Pearson's product-moment correlation coefficient, r

r measures the strength of a **linear** relationship. It lies between −1 and 1.

- r close to 1: strong positive linear correlation
- r close to −1: strong negative linear correlation
- r close to 0: little or no **linear** correlation

r is only meaningful for linear relationships. A clear curved pattern can give a small r even though the variables are closely related. The guide says technology should be used to calculate r. If a question gives a critical value of r, compare your r with it to decide whether the correlation is significant.

**Correlation does not imply causation.** A strong r shows that two variables move together. It does not show that one causes the other.

### The regression line of y on x

IB writes the regression line of y on x as **y = ax + b**. Find it with technology. The line always passes through (x̄, ȳ).

- **a** (the gradient) is the change in y for each increase of 1 in x.
- **b** (the y-intercept) is the value of y predicted when x = 0. This only has a sensible meaning if x = 0 is realistic in the context.

Two warnings from the guide:

1. **Extrapolation** (predicting outside the range of the x data) is unreliable.
2. You cannot always reliably predict x from a value of y using a y on x line. The y on x line is built to predict y.

### Worked example 1

A school café records the day's maximum temperature x (°C) and the number of cold drinks sold y on eight days.

| x | 14 | 17 | 19 | 21 | 22 | 25 | 27 | 30 |
|---|---|---|---|---|---|---|---|---|
| y | 52 | 66 | 63 | 78 | 74 | 90 | 86 | 104 |

**(a) Find r and describe the correlation.**

Enter x in List 1 and y in List 2 and run a linear regression.

```
r = 0.966 (3 s.f.)
```

This is a strong positive linear correlation.

**(b) Find the regression line of y on x.**

```
a = 3.0253...   b = 10.444...
y = 3.03x + 10.4 (3 s.f.)
```

Check: x̄ = 21.875 and ȳ = 76.625, and 3.0254 × 21.875 + 10.444 = 76.625, so the line passes through the mean point.

**(c) Interpret a.** Each extra 1 °C is associated with about 3 more cold drinks sold.

**(d) Estimate the sales when the temperature is 23 °C.**

```
y = 3.0253... × 23 + 10.444... = 80.03...
```

About **80 drinks**. Use the unrounded values stored in your GDC, then round the answer. 23 °C lies inside the data range (14 to 30), so this is interpolation and is reasonable.

**(e) Comment on using the line at 40 °C.** 40 °C is outside the data range. The line gives 131 drinks, but this is extrapolation and may be unreliable: the café might sell out, or the trend might not continue.

## Section 4.10: Spearman's rank correlation coefficient

### What rₛ measures

Spearman's rank correlation coefficient rₛ is Pearson's r applied to the **ranks** of the data. It measures how well the relationship is described by a **monotonic** function (one that always increases, or always decreases), not necessarily a straight line.

In examinations, find rₛ using technology. The method:

1. Rank the x values (1 = smallest). Rank the y values the same way.
2. If data items are equal, give each the **average** of the ranks they would occupy.
3. Find Pearson's r for the two lists of ranks. That value is rₛ.

### Worked example 2

| x | 3 | 5 | 5 | 8 | 10 | 12 | 15 |
|---|---|---|---|---|---|---|---|
| y | 20 | 26 | 24 | 31 | 30 | 45 | 60 |

The two 5s would take ranks 2 and 3, so each gets (2 + 3)/2 = 2.5.

| Rank of x | 1 | 2.5 | 2.5 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| Rank of y | 1 | 3 | 2 | 5 | 4 | 6 | 7 |

Put the two rank lists into your GDC and find r:

```
rₛ = 0.955 (3 s.f.)
```

This shows a strong positive monotonic relationship: as x increases, y tends to increase.

### Pearson or Spearman?

- **Pearson's r** tests only for **linearity**.
- **Spearman's rₛ** tests for **any monotonic relationship**.
- Spearman's rₛ is **less sensitive to outliers** than Pearson's r, because an extreme value can only move to the top or bottom rank.

Example: for x = 1, 2, 3, 4, 5, 6 and y = 2, 3, 5, 9, 17, 33, y always increases, so rₛ = 1. The curve is not a straight line, so r = 0.906. Here rₛ describes the relationship better.

## Section 4.11: Hypothesis testing

### The language of a test

- **Null hypothesis H₀**: the "no effect" statement, for example "the variables are independent" or μ₁ = μ₂.
- **Alternative hypothesis H₁**: what you are looking for evidence of, for example "the variables are not independent" or μ₁ > μ₂.

Write them as an equation, an inequality or in words, as suits the test.

- **Significance level**: the threshold for rejecting H₀. Exam questions use 1%, 5% or 10%.
- **p-value**: the probability of getting a result at least as extreme as the one observed, if H₀ is true.

**Decision rule:** if the p-value < significance level, reject H₀. Otherwise, do not reject H₀. Equivalently, for a χ² test, reject H₀ if χ²calc > the critical value. The guide says you will either compare a p-value with the significance level or compare the χ² statistic with a given critical value.

Always finish with a sentence **in context**.

### Observed and expected frequencies

The χ² statistic is

```
χ²calc = Σ (f_o − f_e)² / f_e
```

where f_o is an observed frequency and f_e the expected frequency if H₀ is true. In the exam you find χ² and the p-value with technology, but calculating expected values by hand is a useful check. The guide's exam conditions: tables have at most 4 rows or columns, degrees of freedom are always greater than 1, expected frequencies are greater than 5, and only upper-tail tests are set.

### The χ² test for independence

For a contingency table:

```
expected frequency = (row total × column total) / grand total
degrees of freedom = (rows − 1)(columns − 1)
```

**Worked example 3.** 150 students were asked for their preferred revision method.

|  | Flashcards | Past papers | Notes | Total |
|---|---|---|---|---|
| Year 12 | 28 | 19 | 13 | 60 |
| Year 13 | 22 | 31 | 37 | 90 |
| Total | 50 | 50 | 50 | 150 |

Test at the 5% level whether revision method is independent of year group.

H₀: revision method and year group are independent.
H₁: revision method and year group are not independent.

Expected Year 12, Flashcards = 60 × 50 / 150 = 20. Every Year 12 cell expects 20; every Year 13 cell expects 30.

Degrees of freedom = (2 − 1)(3 − 1) = 2.

```
χ²calc = 8²/20 + 1²/20 + 7²/20 + 8²/30 + 1²/30 + 7²/30
       = 5.7 + 3.8 = 9.5
p-value = 0.00865 (3 s.f.)
```

0.00865 < 0.05, so reject H₀. There is evidence that revision method is not independent of year group. (Using the critical value instead: 9.5 > 5.99, the same decision.)

### The χ² goodness of fit test

This tests whether observed data fit a claimed distribution. At SL the degrees of freedom will always be n − 1, where n is the number of categories.

**Worked example 4.** A café owner claims customers are spread equally over five weekdays. A sample of 200 customers gives:

| Day | Mon | Tue | Wed | Thu | Fri |
|---|---|---|---|---|---|
| Observed | 38 | 45 | 52 | 30 | 35 |

H₀: customers are spread equally over the five days. H₁: they are not.

Each expected frequency is 200/5 = 40. Degrees of freedom = 5 − 1 = 4.

```
χ²calc = (4 + 25 + 144 + 100 + 25)/40 = 298/40 = 7.45
p-value = 0.114 (3 s.f.)
```

0.114 > 0.05, so do not reject H₀. There is insufficient evidence at the 5% level that customers are not spread equally.

### The t-test for two means

The t-test uses a p-value to compare the means of two populations. At SL the samples are **unpaired** and the population variance is unknown. In exams, assume the two groups have equal variance and use the **pooled two-sample t-test** on your GDC. The underlying distribution of each variable must be **normal** for the t-test to apply.

- **One-tailed test**: H₁: μ₁ > μ₂ (or μ₁ < μ₂). Use this when the question names a direction.
- **Two-tailed test**: H₁: μ₁ ≠ μ₂. Use this when it only asks whether the means differ.

**Worked example 5.** Test scores for two groups taught by different methods:

```
Method A: 64, 71, 58, 69, 75, 66, 70
Method B: 59, 62, 55, 68, 60, 57
```

Test at the 5% level whether Method A gives a higher mean score. Assume both populations are normal.

H₀: μ_A = μ_B. H₁: μ_A > μ_B.

Run the 2-sample t-test with pooled variance and the ">" alternative:

```
x̄_A = 67.6, x̄_B = 60.2 (3 s.f.)
t = 2.62, p-value = 0.0120 (3 s.f.)
```

0.0120 < 0.05, so reject H₀. There is evidence that Method A gives a higher mean score.

## Common errors

- Saying r close to 0 means "no relationship". It means no **linear** relationship.
- Stating that correlation proves one variable causes the other.
- Rounding a and b to 3 s.f. and then predicting with the rounded values. Predict with the stored values.
- Using a y on x line to estimate x from a given y.
- Forgetting to average tied ranks for rₛ.
- Writing H₀ as "the variables are dependent". H₀ is always the "independent" or "no difference" statement.
- Using rows × columns instead of (rows − 1)(columns − 1) for degrees of freedom.
- Choosing a two-tailed t-test when the question says "higher" or "lower", or the reverse.
- Writing "accept H₀" or ending without a conclusion in context.

## Where to go next

Condense this into recall with the [revision notes](/resources/ib-dp-mathematics-ai-correlation-hypothesis-testing-revision-notes/), then test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-correlation-hypothesis-testing-practice/). The [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), [subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/) and [exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/) show how this unit fits the whole course.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
