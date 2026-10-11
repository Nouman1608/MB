---
title: "OCR A Level Mathematics A: Hypothesis testing: language, binomial tests and the sample mean (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Hypothesis Testing Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Hypothesis testing: language, binomial tests and the sample mean"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 129
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-hypothesis-testing-ocr-alevel-maths"
description: "Condensed revision notes on hypothesis tests for OCR A Level Mathematics A: binomial proportion, errors, the sample mean and the normal mean test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 2.05a to 2.05e of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 2.05a to 2.05c are Stage 1, common with AS. Sections 2.05d and 2.05e are **A Level only**. For full explanations and worked examples read the [study guide](/resources/ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the/).

Links: [OCR Mathematics A hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [practice questions](/resources/ocr-a-level-mathematics-hypothesis-testing-language-binomial-tests-and-the-practice/) and [free diagnostics](/diagnostics/).

## Vocabulary (2.05a)

| Term | Meaning |
|---|---|
| H₀ | Null hypothesis: one stated value of the parameter, e.g. p = 0.2 |
| H₁ | Alternative: p < p₀, p > p₀ (one-tail) or p ≠ p₀ (two-tail) |
| Test statistic | The sample quantity you judge: X (a count) or X̄ (a mean) |
| Significance level | Probability chosen beforehand as the threshold for "unlikely" |
| Critical region | Outcomes for which H₀ is rejected |
| Critical value | Where the critical region starts |
| Acceptance region | Everything outside the critical region |
| p-value | Chance, if H₀ holds, of a sample as extreme as yours or more so |

Hypotheses are about population parameters. Define the symbol: "p is the probability that a randomly chosen seed germinates".

## Two equivalent decisions

| Route | Reject H₀ when |
|---|---|
| p-value | p-value ≤ significance level |
| Critical region | observed value is in the critical region |

Two-tail: either compare each tail with half the level, or compare double the tail probability with the whole level.

## Method in steps: binomial test (2.05b)

1. Define p. State H₀: p = p₀ and H₁.
2. Under H₀, X ~ B(n, p₀).
3. Find the p-value or the critical region.
4. Compare with the level.
5. Conclude in context, without certainty.

| H₁ | p-value |
|---|---|
| p > p₀ | P(X ≥ x) = 1 − P(X ≤ x − 1) |
| p < p₀ | P(X ≤ x) |
| p ≠ p₀ | 2 × the smaller tail probability |

**Critical region.** Choose the largest region whose probability does not exceed the level (the level, or half of it in each tail). The probability of the region is the **actual significance level**.

**Worked reminder.** X ~ B(25, 0.3), H₁: p ≠ 0.3, 5% level. Lower tail: P(X ≤ 2) = 0.0090 ≤ 0.025 but P(X ≤ 3) = 0.0332 > 0.025. Upper tail: P(X ≥ 13) = 0.0175 ≤ 0.025 but P(X ≥ 12) = 0.0442 > 0.025. Critical region: X ≤ 2 or X ≥ 13. Actual level: 0.0090 + 0.0175 = 0.0264.

## Conclusions (2.05a, 2.05b)

| Outcome | Good wording |
|---|---|
| Reject | The data support rejecting H₀ at the 5% level; the proportion has probably increased. |
| Not reject | The data do not support rejecting H₀ at the 5% level; no reason to think the proportion has changed. |

Do not write "H₀ is accepted", "H₀ is true", "this proves" or a bare "reject H₀" with no context.

## Errors (2.05c)

| Decision | H₀ really true | H₀ really false |
|---|---|---|
| Reject H₀ | Type I error | Right decision |
| Keep H₀ | Right decision | Type II error |

- P(Type I) = P(test statistic in the critical region | H₀ true). It is the actual significance level, never above the stated level.
- P(Type II) = P(test statistic not in the critical region | the stated true value). It needs a particular true parameter value.
- The further the true value from p₀ or μ₀, the smaller P(Type II).
- Sample data are used to make an inference about a population, so any conclusion may be wrong.

## Sample mean (2.05d, A Level only)

If X ~ N(μ, σ²) then X̄ ~ N(μ, σ²/n). The standard deviation of X̄ is σ/√n.

Reminder: X ~ N(80, 10²), n = 16. Then X̄ ~ N(80, 2.5²) and P(X̄ < 78) = P(Z < −0.8) = 0.2119, whereas P(X < 78) = P(Z < −0.2) = 0.4207.

## Method in steps: normal mean test (2.05e, A Level only)

1. Define μ. State H₀: μ = μ₀ and H₁.
2. Under H₀, X̄ ~ N(μ₀, σ²/n).
3. Standardise: z = (x̄ − μ₀)/(σ/√n), or find the critical region for X̄.
4. Compare with the critical z-value or find the p-value.
5. Conclude in context.

| Level | One-tail z | Two-tail z |
|---|---|---|
| 10% | 1.282 | 1.645 |
| 5% | 1.645 | 1.960 |
| 1% | 2.326 | 2.576 |

**Worked reminder.** H₀: μ = 60, H₁: μ < 60, σ = 5, n = 25, 5% level. Under H₀, X̄ ~ N(60, 1²). The critical region is X̄ < 60 − 1.645 × 1 = 58.36 (2 d.p.). A sample mean of 58.1 is in the region, so reject H₀ and conclude that the mean is likely to be below 60.

**Type II reminder.** In the test above, suppose the true mean is 57.5. Then X̄ ~ N(57.5, 1²) and a Type II error means X̄ ≥ 58.355. P(Z ≥ 0.855) = 0.1963, so about a 20% chance of missing the change.

The specification excludes tests for the mean of a non-normal distribution, the normal approximation to the binomial, and estimation of population parameters.

## Must-know distinctions

- **H₀ and H₁**: H₀ always has "=". The direction of H₁ comes from the wording of the question, not the data.
- **Significance level and p-value**: the level is chosen before; the p-value comes from the data.
- **Critical value and test statistic**: the critical value is a boundary; the test statistic is the sample result.
- **Type I and Type II**: Type I is wrongly rejecting a true H₀. Type II is failing to reject a false H₀.
- **σ and σ/√n**: use σ for individual values, σ/√n for sample means.

## Quick self-test

1. A retailer says 20% of items are returned. A buyer suspects more are. Write H₀ and H₁, defining p.
2. X ~ B(12, 0.2), H₁: p > 0.2, 5% level. Find the critical region and its actual significance level.
3. X ~ B(10, 0.5), H₁: p ≠ 0.5, 5% level. Find the critical region and its actual size.
4. A test has H₀: p = 0.2 against H₁: p > 0.2 with n = 10 and critical region X ≥ 5. Find P(Type I error).
5. For the test in question 4, find P(Type II error) when the true value of p is 0.5.
6. A statistician writes "H₀ is accepted, so the machine is working properly". Give a better conclusion for a non-rejection.
7. X ~ N(80, 10²), n = 16. Write the distribution of X̄ and find P(X̄ < 78).
8. H₀: μ = 200, H₁: μ > 200, σ = 12, n = 36, x̄ = 203.5. Find z and the p-value.
9. For the test in question 8, decide at the 5% level and write a conclusion.
10. A two-tail test on a normal mean gives z = −2.4. Find the p-value and decide at the 1% level.

### Answers

1. H₀: p = 0.2, H₁: p > 0.2, where p is the probability that an item is returned.
2. P(X ≥ 5) = 0.0726 > 0.05 and P(X ≥ 6) = 0.0194 ≤ 0.05. Critical region X ≥ 6, actual significance level 0.0194.
3. P(X ≤ 1) = 0.0107 ≤ 0.025 and P(X ≤ 2) = 0.0547 > 0.025; by symmetry P(X ≥ 9) = 0.0107. Critical region X ≤ 1 or X ≥ 9, actual level 0.0215.
4. P(X ≥ 5 | p = 0.2) = 0.0328.
5. P(X ≤ 4 | p = 0.5) = 0.377.
6. "The data do not support rejecting H₀ at the stated level, so nothing suggests the machine is faulty."
7. X̄ ~ N(80, 2.5²). P(X̄ < 78) = P(Z < −0.8) = 0.2119.
8. Standard deviation of X̄ = 12/6 = 2. z = 3.5/2 = 1.75. p-value = P(Z > 1.75) = 0.0401.
9. 1.75 > 1.645, and 0.0401 < 0.05, so reject H₀: at the 5% level the mean is probably above 200.
10. p-value = 2 × P(Z < −2.4) = 0.0164. Since 0.0164 > 0.01 (and |z| = 2.4 < 2.576), the data do not support rejecting H₀ at the 1% level.

## Where marks are usually lost

- Writing hypotheses with the sample result, for example H₀: p = 0.4 when 0.4 is the sample proportion.
- Leaving out the definition of the parameter, or defining it as a sample quantity.
- Using P(X = x) or P(X > x) when the test needs P(X ≥ x), so the boundary value is wrong by one.
- Not stating the distribution of X or X̄ under H₀.
- Comparing a one-tail probability with the full level in a two-tail test.
- Dividing by σ instead of σ/√n for a sample mean.
- Finishing with "reject H₀" or "accept H₀" and no sentence in context, or a conclusion that sounds certain.
- Treating a test that does not reject H₀ as proof that H₀ is true.
- Giving P(Type II) without using the true parameter value stated in the question.

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. This page covers section 2.05, parts a to e.
