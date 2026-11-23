---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Hypothesis tests"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S2: Statistics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 8.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-hypothesis-tests-edexcel-alevel-maths"
description: "Edexcel IAL Maths S2 hypothesis tests guide: critical regions, one- and two-tailed binomial and Poisson tests, normal approximation and conclusions in context."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers the testing content of **Unit S2: Statistics 2** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "Concept and interpretation of a hypothesis test. Null and alternative hypotheses" (4.3), "Critical region" (4.4), "One-tailed and two-tailed tests" (4.5) and "Hypothesis tests for the parameter p of a binomial distribution and for the mean of a Poisson distribution" (4.6). The guidance adds that tests are used "for refinement of mathematical models", that you should know how to use tables, that questions "may also be set not involving tabular values", and that binomial tests "may involve the use of a normal approximation".

The ideas of a statistic and its sampling distribution, which every test relies on, are in the companion guide on [samples](/resources/edexcel-a-level-mathematics-yma01-s2-samples/). The broader S2 page on [samples and hypothesis tests](/resources/edexcel-ial-mathematics-populations-and-samples-sampling-distributions-and/) sets out the method. This page works through each test type with new contexts and focuses on the decisions that cost marks: which tail, how to split a two-tailed significance level, when a combined Poisson mean is needed, and how to word the conclusion. Use the [hypothesis tests revision notes](/resources/edexcel-a-level-mathematics-yma01-s2-hypothesis-tests-revision-notes/) for recall and the [hypothesis tests practice set](/resources/edexcel-a-level-mathematics-yma01-s2-hypothesis-tests-practice/) to test yourself.

## The logic of a test

A hypothesis test asks whether sample evidence is strong enough to doubt a claim about a population parameter.

- The **null hypothesis H₀** states the claimed value of the parameter: p = 0.3, or λ = 6. It is assumed true while the test is carried out.
- The **alternative hypothesis H₁** says how the parameter may differ: p < 0.3 or p > 0.3 (one-tailed), or p ≠ 0.3 (two-tailed). The context decides which: "has decreased" means one tail; "has changed" means two.
- The **test statistic** is the sample quantity whose distribution under H₀ is known, usually the number of successes X ~ B(n, p) or the number of events X ~ Po(λ).
- The **significance level** is the threshold probability: if a result as extreme as the one observed would occur with probability less than this when H₀ is true, H₀ is rejected.
- The **critical region** is the set of values of the test statistic that lead to rejecting H₀; the boundary value is the **critical value**. Because the distributions are discrete, the probability of landing in the critical region, called the **actual significance level**, is usually below the nominal level.

Hypotheses are always written in terms of the parameter (p or λ), never in terms of X or the sample result.

## Two equivalent methods

**Probability (p-value) method:** find P(X as extreme as observed, or more extreme) under H₀ and compare with the significance level.

**Critical region method:** find the critical region first, then see whether the observed value lies in it.

Both give the same decision. Use the critical region method when the question asks for a critical region; otherwise either is acceptable.

## Worked example 1: a one-tailed critical region

A seed supplier claims that 30% of its seeds produce white flowers. A gardener thinks the proportion is lower. She plants 20 seeds. Find the critical region for a test at the 5% level, and the actual significance level.

```
H₀: p = 0.3      H₁: p < 0.3      X ~ B(20, 0.3) under H₀
P(X ≤ 2) = 0.0355   (≤ 0.05)
P(X ≤ 3) = 0.1071   (> 0.05)
critical region: X ≤ 2      actual significance level: 0.0355
```

Look for the largest c with P(X ≤ c) ≤ 0.05. If 2 or fewer of the 20 flowers are white, there is evidence at the 5% level that the proportion is below 30%.

## Worked example 2: a two-tailed critical region

A school says 40% of its students walk to school. A governor thinks the figure has changed and asks 25 students. Find the critical region at the 5% level.

For a two-tailed test, put **2.5% in each tail**.

```
H₀: p = 0.4      H₁: p ≠ 0.4      X ~ B(25, 0.4)
lower tail:  P(X ≤ 4) = 0.0095,  P(X ≤ 5) = 0.0294      ->  X ≤ 4
upper tail:  P(X ≥ 16) = 1 − P(X ≤ 15) = 0.0132
             P(X ≥ 15) = 1 − P(X ≤ 14) = 0.0344        ->  X ≥ 16
critical region: X ≤ 4 or X ≥ 16
actual significance level = 0.0095 + 0.0132 = 0.0227
```

The upper tail is the commoner source of error. Tables give P(X ≤ x), so P(X ≥ 16) = 1 − P(X ≤ 15), not 1 − P(X ≤ 16).

## Worked example 3: Poisson tests and the additive property

A shop receives complaints at a mean rate of 6 per week.

**(a)** In one week after a change of supplier, it receives 12 complaints. Test at the 5% level whether the rate has increased.

```
H₀: λ = 6      H₁: λ > 6      X ~ Po(6)
P(X ≥ 12) = 1 − P(X ≤ 11) = 1 − 0.9799 = 0.0201 < 0.05
```

Reject H₀. There is evidence at the 5% level that the mean number of complaints per week has increased.

**(b)** A later policy aims to reduce complaints. Over the next two weeks there are 3 complaints in total. Test at the 5% level whether the weekly rate has fallen below 4, the rate before the policy.

The **additive property** in the S2 guidance applies: if complaints per week ~ Po(4), then complaints per two weeks ~ Po(8).

```
H₀: λ = 8 (per two weeks)      H₁: λ < 8      X ~ Po(8)
P(X ≤ 3) = 0.0424 < 0.05
```

Reject H₀: there is evidence that the rate of complaints has decreased. Scaling the rate to the observation period is a common first method mark.

## Worked example 4: the normal approximation

A manufacturer claims that 45% of customers buy an extended warranty. After new training, 65 of 120 customers buy one. Test at the 5% level whether the proportion has increased.

n = 120 is too large for tables, n is large and p is close to 0.5, so B(120, 0.45) is approximated by N(54, 29.7), using np and np(1 − p).

```
H₀: p = 0.45      H₁: p > 0.45
P(X ≥ 65) ≈ P(Y > 64.5)        (continuity correction)
z = (64.5 − 54)/√29.7 = 1.93
P(Z > 1.93) = 1 − 0.9732 = 0.0268 < 0.05
```

Reject H₀: there is evidence at the 5% level that the proportion buying the warranty has increased. The continuity correction runs in the direction that includes the observed value: "≥ 65" becomes "> 64.5".

## Writing the conclusion

A full conclusion has two parts:

1. A statistical statement: "0.0367 < 0.05, so reject H₀" or "12 is in the critical region".
2. A sentence in context that names the parameter: "There is evidence that the proportion of customers buying the warranty has increased."

Never write "H₀ is true" or "this proves". A test can only find evidence, or fail to find evidence, at a stated level. Not rejecting H₀ means "there is insufficient evidence that the rate has changed".

## Common mistakes

- Writing hypotheses in terms of X, or using the sample proportion as the value in H₀.
- Using a one-tailed test when the question says "changed".
- Forgetting to halve the significance level for each tail of a two-tailed test.
- Reading P(X ≥ k) as 1 − P(X ≤ k) instead of 1 − P(X ≤ k − 1).
- Testing a two-week total against a one-week mean.
- Comparing P(X = observed value) instead of the tail probability.
- Omitting the continuity correction with the normal approximation.

## Exam technique

- **"Test, at the 5% level of significance, whether ..."**: hypotheses, distribution under H₀, tail probability or critical region, comparison, conclusion in context.
- **"Find the critical region"**: show the two probabilities either side of the boundary in each tail.
- **"State the actual significance level"**: the probability of the critical region, adding both tails for a two-tailed test.
- **"Explain"** why a test is one-tailed or two-tailed: quote the claim's wording.
- Use the words of the question in the final sentence.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S2, content statements 4.3 to 4.6 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
