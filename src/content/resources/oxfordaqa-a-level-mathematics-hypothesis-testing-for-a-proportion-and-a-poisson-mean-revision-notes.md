---
title: "OxfordAQA International AS and A-level Mathematics: Hypothesis testing for a proportion and a Poisson mean (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Proportion and Poisson Tests Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Hypothesis testing for a proportion and a Poisson mean"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 206
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-hypothesis-testing-oxfordaqa-alevel-maths"
description: "Condensed revision notes with method boxes and a self-test on binomial and Poisson hypothesis tests and Type I and II errors, OxfordAQA A-level Maths S2.6."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
Condensed notes for the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, section S2.6 (first part): tests for a population proportion using exact binomial probabilities, tests for a Poisson mean using exact Poisson probabilities, and Type I and Type II errors. The specification places this content in International A-level (A2) Unit S2 (Statistics); it is not examined at International AS. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean/). Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-practice/).

Links: [course hub](/boards/oxfordaqa/a-level/mathematics/) · [checklist](/checklists/oxfordaqa/a-level/mathematics/) · [free diagnostics](/diagnostics/) · [binomial notes](/resources/oxfordaqa-a-level-mathematics-bernoulli-binomial-revision-notes/) · [Poisson notes](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution-revision-notes/)

## Key definitions

| Term | Meaning |
|---|---|
| H₀ | Null hypothesis: the parameter takes a specified value (p = p₀ or λ = λ₀) |
| H₁ | Alternative hypothesis: p or λ is greater than, less than, or different from that value |
| One-tailed test | H₁ uses > or < |
| Two-tailed test | H₁ uses ≠ |
| Test statistic | The observed count X from the sample |
| Significance level | Probability of rejecting H₀ when it is true that you will tolerate. It is given |
| Critical region | Values of X for which you reject H₀ |
| Critical value | The value on the boundary of the critical region |
| Acceptance region | Values of X that do not lead to rejection |
| p-value | How likely a result as far out as yours, or further, is if H₀ is true |
| Actual significance level | The true probability of landing in the critical region under H₀ |

## Method in steps

**Proportion (binomial)**

1. Define p in words.
2. State H₀: p = p₀ and H₁ (p < p₀, p > p₀ or p ≠ p₀).
3. Write the model: under H₀, X ~ B(n, p₀).
4. Find the tail probability: P(X ≤ x) for a lower tail, P(X ≥ x) = 1 − P(X ≤ x − 1) for an upper tail.
5. Compare with the significance level (halved for each tail if two-tailed).
6. Conclude in context.

**Poisson mean**

1. Define λ in words and state H₀: λ = λ₀, H₁.
2. Scale the mean to the interval observed.
3. Write the model: under H₀, X ~ Po(scaled mean).
4. Then follow steps 4 to 6 above.

**Finding a critical region**

1. Work outwards from the extreme end of the tail.
2. Take the biggest region that does not go over the stated level (or half of it, per tail).
3. Quote the probability of that region as the actual significance level.
4. For two tails, add the two probabilities.

## Decision rule table

| Test | Reject H₀ when |
|---|---|
| H₁: parameter smaller, one-tailed | P(X ≤ observed) ≤ significance level |
| H₁: parameter larger, one-tailed | P(X ≥ observed) ≤ significance level |
| H₁: parameter different, two-tailed | the relevant tail probability ≤ half the level (or twice it ≤ the level) |

## Type I and Type II errors

| Decision | H₀ really true | H₀ really false |
|---|---|---|
| Reject H₀ | Type I error | right decision |
| Do not reject H₀ | right decision | Type II error |

- P(Type I error) = actual significance level of the test.
- Type II errors must be understood, but the specification states that questions requiring the calculation of the risk of a Type II error will not be set.
- Always describe an error in the context of the question.

## Worked reminders

**Binomial lower tail.** X ~ B(15, 0.6), H₁: p < 0.6, observed 5, 5% level. P(X ≤ 5) = 0.0338 ≤ 0.05, so reject H₀. P(X ≤ 6) = 0.0950, so the critical region is X ≤ 5 and the acceptance region is 6 ≤ X ≤ 15.

**Two-tailed p-value.** X ~ B(12, 0.5), H₁: p ≠ 0.5, observed 10. P(X ≥ 10) = 0.0193. Doubling gives 0.0386, which is below 0.05. Reject H₀ at the 5% level.

**Poisson upper tail.** Misprints have a mean of 2.4 per page. Test H₁: λ > 2.4 on one page with 7 misprints. P(X ≥ 7) = 0.0116. This is below 5% but above 1%. Reject H₀ at 5%, but not at 1%.

**Poisson critical region.** X ~ Po(2.4), upper 5%. P(X ≥ 5) = 0.0959 (too big). P(X ≥ 6) = 0.0357 (within 5%). Critical region X ≥ 6, actual level 0.0357.

**Binomial two-tailed critical region.** X ~ B(20, 0.5), 5% level, H₁: p ≠ 0.5. Each tail is at most 0.025. P(X ≤ 5) = 0.0207 (within 0.025) and P(X ≤ 6) = 0.0577 (too big), so X ≤ 5. By symmetry the upper tail is X ≥ 15. The actual significance level is 0.0207 + 0.0207 = 0.0414.

**Poisson scaling.** A mean of 1.8 flaws per metre of ribbon becomes 9 over 5 metres. Under H₀ the count is Po(9). If you wrongly keep Po(1.8), every probability in the test is wrong.

## Wording bank

Hypotheses:
- "Let p be the probability that..." then H₀: p = ..., H₁: p < ... (or > or ≠).
- "Let λ be the mean number of ... per ..." then H₀: λ = ..., H₁: λ > ... (or < or ≠).

Model: "Under H₀, X ~ B(n, p)" or "Under H₀, X ~ Po(λ)".

Conclusion when rejecting: "There is sufficient evidence at the 5% level to suggest that [the proportion has fallen / the mean has changed]."

Conclusion when not rejecting: "There is insufficient evidence at the 5% level to suggest that [the proportion has fallen / the mean has changed]."

Type I error: "Concluding that [change] has happened when H₀ is in fact true."

Type II error: "Failing to conclude that [change] has happened when H₀ is in fact false."

## Must-know distinctions

- **Critical value vs observed value.** The critical value belongs to the test. The observed value comes from the data.
- **Significance level vs actual significance level.** The first is given. The second is the probability of the critical region you found, and it is usually smaller.
- **Reject vs accept.** "Do not reject H₀" is not the same as showing H₀ is true.
- **Lower-tail vs upper-tail algebra.** P(X ≤ x) is read straight from the cumulative probability. P(X ≥ x) needs the "1 − P(X ≤ x − 1)" step.
- **Hypotheses vs data.** H₀ and H₁ are about p or λ. They never mention the sample result.

## Quick self-test

1. State H₀ and H₁ for: "the mean number of misprints per page is 2.4; an editor thinks it has risen".
2. A two-tailed test is carried out at the 5% level. What probability do you aim for in each tail?
3. X ~ B(15, 0.6). The test is H₁: p < 0.6 at the 5% level. State the critical region.
4. X ~ Po(2.4). Test H₁: λ > 2.4 at the 5% level and find the critical region.
5. For the test in question 4, state the probability of a Type I error.
6. X ~ B(12, 0.5), H₁: p ≠ 0.5, observed 2. Calculate the p-value for the two-tailed test.
7. Is it correct to write H₀: p ≥ 0.3? Explain.
8. Calls arrive at a mean of 1.5 per hour. You will count calls over 6 hours. What is the distribution of the count under H₀?
9. A test rejects H₀ at 5% but not at 1%. What does that tell you about the p-value?
10. Describe a Type II error for the test in question 4.
11. Complete: P(X ≥ 9) = 1 − P(X ≤ ?).
12. A student's conclusion reads: "H₀ is accepted, so the mean is 2.4." Give a better wording.

### Answers

1. H₀: λ = 2.4, H₁: λ > 2.4, where λ is the mean number of misprints per page.
2. 2.5% (0.025) in each tail.
3. P(X ≤ 5) = 0.0338 ≤ 0.05 and P(X ≤ 6) = 0.0950 > 0.05, so the critical region is X ≤ 5.
4. P(X ≥ 6) = 0.0357 ≤ 0.05 and P(X ≥ 5) = 0.0959 > 0.05, so the critical region is X ≥ 6.
5. The actual significance level, 0.0357.
6. P(X ≤ 2) = 0.0193, doubled is 0.0386.
7. No. H₀ must state a specified value, so write H₀: p = 0.3.
8. X ~ Po(9), because 1.5 × 6 = 9.
9. The p-value (for a one-tailed test) lies between 0.01 and 0.05, so it is at most 0.05 but more than 0.01.
10. Concluding that there is insufficient evidence that the mean has risen, when it really has risen.
11. P(X ≥ 9) = 1 − P(X ≤ 8).
12. "There is insufficient evidence at the 5% level to suggest that the mean differs from 2.4."

## Where marks are usually lost

- Hypotheses written without defining the parameter, or about the sample.
- Using P(X = x) in place of a cumulative tail probability.
- Mistakes with the "−1" in upper-tail probabilities.
- A two-tailed critical region where the level has not been shared between two tails.
- Poisson mean not scaled to the length of time or space in the question.
- A bare "reject" or "accept" with no sentence in context.
- A critical region that goes over the level because "closest to 5%" was used instead of "not above 5%".
- Quoting the stated level instead of the actual significance level when asked for the probability of a Type I error.
- Describing a Type I error as a general mistake, with no reference to H₀ being true.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: Unit S2 (Statistics), section S2.6, Hypothesis testing.
