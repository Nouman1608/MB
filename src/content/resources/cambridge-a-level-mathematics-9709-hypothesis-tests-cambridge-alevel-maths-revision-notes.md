---
title: "Cambridge A Level Mathematics (9709): Hypothesis tests -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "hypothesis-tests-cambridge-alevel-maths"
description: "Revision notes for Cambridge 9709 section 6.5: test structure, critical regions, approximations, normal-mean tests, Type I and II errors and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for section **6.5 Hypothesis tests** of Paper 6. For full explanations and worked examples, use the [Hypothesis tests study guide](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths/).

## The structure that earns the marks

1. H₀ and H₁ written with a **parameter**: p (binomial), λ (Poisson) or μ (normal mean).
2. The distribution of the test statistic **assuming H₀ is true**.
3. A tail probability or a z value.
4. A comparison with the significance level or a critical value.
5. A conclusion in context: "there is (in)sufficient evidence at the α% level that…".

## Which test?

| Situation | Distribution under H₀ | What you compute |
|---|---|---|
| Single count of successes, n small | B(n, p) | Tail probability by direct evaluation |
| Single count of successes, n large, np > 5 and nq > 5 | N(np, npq) with continuity correction | z and its tail |
| Single count of random events, λ moderate | Po(λ), rate scaled to the period | Tail probability by direct evaluation |
| Single count of random events, λ > 15 | N(λ, λ) with continuity correction | z and its tail |
| Sample mean, normal population, σ known | N(μ, σ²/n) exactly | z = (x̄ − μ)/(σ/√n) |
| Sample mean, large sample | N(μ, s²/n) by the CLT | z using s |

## Critical z values

| Significance level | One-tailed | Two-tailed |
|---|---|---|
| 10% | 1.282 | 1.645 |
| 5% | 1.645 | 1.960 |
| 2% | 2.054 | 2.326 |
| 1% | 2.326 | 2.576 |

## Key terms

| Term | Meaning |
|---|---|
| Null hypothesis H₀ | The parameter has its assumed value |
| Alternative hypothesis H₁ | The parameter has changed: <, > or ≠ |
| One-tailed test | H₁ specifies a direction |
| Two-tailed test | H₁ is ≠; the level is split equally between the two tails |
| Significance level | The probability used to decide how unlikely a result must be to reject H₀ |
| Test statistic | The quantity calculated from the data, such as a count or z |
| Rejection (critical) region | Values of the test statistic that lead to rejecting H₀ |
| Acceptance region | Values that lead to accepting H₀ |
| Type I error | Rejecting H₀ when it is true |
| Type II error | Accepting H₀ when it is false |

## Error probabilities in one line each

- **Type I, normal test:** equals the significance level.
- **Type I, binomial or Poisson test:** P(rejection region | H₀), usually below the stated level.
- **Type II, any test:** P(acceptance region | a stated true value). No true value, no Type II probability.
- For a fixed sample size, reducing one error probability increases the other; a larger sample can reduce both.

## Finding a discrete critical region

Work through tail probabilities until the first one below the level, and quote it alongside the one just above. For B(10, 0.5) with H₁: p < 0.5 at 5%: P(X ≤ 2) = 0.0547 and P(X ≤ 1) = 0.0107, so the region is X ≤ 1 and P(Type I) = 0.0107.

## Exam traps

- **Point probability instead of tail.** Use P(X ≥ 9), never P(X = 9).
- **Two-tailed level not halved.** Compare each tail with α/2.
- **Rate not scaled.** 2.5 per hour for 8 hours is λ = 20.
- **Continuity correction direction.** P(X ≥ 40) becomes P(Y > 39.5); P(X ≤ 12) becomes P(Y < 12.5).
- **Hypotheses about the statistic.** "H₀: x̄ = 50" loses the mark; write μ.
- **Overstated conclusions.** Never "proves"; always include the context.
- **Type I for discrete tests quoted as the level.** Give the actual probability.
- **CLT omitted** when a large-sample test uses s and the population is not stated to be normal.

## Self-test

1. Explain what a Type I error is.
2. X ~ Po(4) under H₀. A single observation is 9. Test H₁: λ > 4 at the 5% level.
3. Find the 5% rejection region for H₀: p = 0.5, H₁: p < 0.5, with X ~ B(10, 0.5).
4. In a two-tailed test at 5% with a discrete distribution, what do you compare each tail with?
5. σ = 6, n = 36, x̄ = 52.1. Test H₀: μ = 50 against H₁: μ ≠ 50 at the 1% level.
6. State the conditions for using N(np, npq) in a binomial test.
7. A test of a normal mean uses the 5% level. What is P(Type I error)?
8. Events occur at 2.5 per hour. What is λ under H₀ for an 8-hour period?
9. A test rejects H₀: λ = 4 when X ≥ 9. Find P(Type II error) if λ = 7.
10. What happens to P(Type II error) if the significance level is lowered and n is unchanged?
11. State the one-tailed critical z value at the 1% level.
12. X ~ Po(30). Use a normal approximation to find P(X ≥ 40).

## Answers

1. Rejecting the null hypothesis when it is actually true.
2. P(X ≥ 9) = 1 − P(X ≤ 8) = **0.0214** < 0.05, so reject H₀: evidence at the 5% level that the mean has increased.
3. P(X ≤ 2) = 0.0547 > 0.05 and P(X ≤ 1) = 0.0107 < 0.05, so the region is **X ≤ 1**.
4. **0.025**, half the significance level.
5. z = (52.1 − 50)/(6/6) = 2.1. Critical values ±2.576; 2.1 < 2.576, so **do not reject** H₀: insufficient evidence at the 1% level that the mean is not 50.
6. n large with **np > 5 and nq > 5**; use a continuity correction.
7. **0.05**.
8. λ = 2.5 × 8 = **20**.
9. P(X ≤ 8 | λ = 7) = **0.729** (3 s.f.).
10. It **increases**, because the acceptance region becomes wider.
11. **2.326**.
12. N(30, 30): P(Y > 39.5), z = 9.5/√30 = 1.734, P = 1 − Φ(1.734) = **0.0414** (3 s.f.).

## Links

- [Hypothesis tests practice questions](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths-practice/)
- [Sampling and estimation revision notes](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths-revision-notes/)
- [Probability & Statistics 2 revision notes](/resources/a-level-maths-9709-probability-statistics-2-revision-notes/)
