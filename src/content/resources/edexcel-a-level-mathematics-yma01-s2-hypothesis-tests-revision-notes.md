---
title: "Pearson Edexcel International A Level Mathematics (YMA01): Hypothesis tests -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths S2 hypothesis tests: hypotheses, critical regions, tails, binomial and Poisson tests, normal approximation and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit S2, content statements 4.3 to 4.6: the concept and interpretation of a hypothesis test, null and alternative hypotheses, critical regions, one- and two-tailed tests, and tests for the parameter p of a binomial distribution and the mean of a Poisson distribution, including the normal approximation. For worked examples, use the [hypothesis tests study guide](/resources/edexcel-a-level-mathematics-yma01-s2-hypothesis-tests/).

## Key terms

| Term | Meaning |
|---|---|
| Hypothesis test | A procedure for deciding whether sample evidence contradicts a claim about a parameter |
| Null hypothesis H₀ | The claimed value of the parameter, assumed true during the test |
| Alternative hypothesis H₁ | The direction in which the parameter may differ |
| Test statistic | The sample quantity used to decide, such as the number of successes |
| Significance level | Threshold probability for rejecting H₀ |
| Critical region | Values of the test statistic that lead to rejecting H₀ |
| Critical value | The boundary value of the critical region |
| Actual significance level | Probability of the critical region when H₀ is true |
| One-tailed test | H₁ uses < or > |
| Two-tailed test | H₁ uses ≠; the significance level is split equally between the tails |

## The six-line test

```
1  H₀: p = p₀ (or λ = λ₀)
2  H₁: p < p₀, p > p₀ or p ≠ p₀
3  Under H₀, X ~ B(n, p₀) or Po(λ₀)
4  Tail probability, or critical region
5  Compare with the significance level (halved per tail if two-tailed)
6  Conclusion in context, naming the parameter
```

## Reading tables

Tables give P(X ≤ x).

```
P(X ≤ k)  = table value at k
P(X < k)  = table value at k − 1
P(X ≥ k)  = 1 − table value at k − 1
P(X > k)  = 1 − table value at k
```

## Finding a critical region

- **Lower tail:** the largest c with P(X ≤ c) ≤ α.
- **Upper tail:** the smallest c with P(X ≥ c) ≤ α.
- **Two-tailed:** use α/2 for each tail.
- Show the probability on each side of each boundary.

**Mini example.** X ~ B(10, 0.25), H₁: p > 0.25, 5% level. P(X ≥ 6) = 0.0197 and P(X ≥ 5) = 0.0781, so the critical region is X ≥ 6 with actual significance level 0.0197.

## Poisson tests

- Scale λ to the observation period using the additive property: a rate of λ per week gives 3λ per three weeks.
- Test the total count against the scaled mean.

## Normal approximation for a binomial test

- Use when n is large and p is close to 0.5 (beyond the tables).
- X ~ B(n, p) ≈ N(np, np(1 − p)).
- Apply a continuity correction: P(X ≥ k) ≈ P(Y > k − 0.5); P(X ≤ k) ≈ P(Y < k + 0.5).

## Conclusions

| Result | Statistical statement | Context sentence |
|---|---|---|
| Tail probability < α, or in critical region | Reject H₀ | "There is evidence that [parameter] has [changed / increased / decreased]." |
| Tail probability > α, or not in critical region | Do not reject H₀ | "There is insufficient evidence that [parameter] has [changed / ...]." |

Never "accept H₀" as proof, and never "prove".

## Mini examples

**Poisson, scaled period.** Breakdowns occur at 1.5 per month. In a three-month period after servicing there is 1 breakdown. Test at 5% for a decrease: λ = 4.5 for three months, P(X ≤ 1) = 0.0611 > 0.05, so do not reject H₀; there is insufficient evidence that the breakdown rate has fallen.

**Normal approximation.** H₀: p = 0.5, H₁: p > 0.5, n = 100, observed 60. N(50, 25): P(X ≥ 60) ≈ P(Y > 59.5), z = 9.5/5 = 1.9, P(Z > 1.9) = 0.0287 < 0.05, so reject H₀; there is evidence that p > 0.5.

## Exam traps

- Hypotheses written in terms of X or the sample proportion.
- One-tailed test used for "changed".
- Not halving α in a two-tailed test.
- P(X ≥ k) found as 1 − P(X ≤ k).
- Using P(X = observed) instead of the tail probability.
- Forgetting to scale λ to the time period.
- Missing the continuity correction or applying it in the wrong direction.
- A conclusion with no context.

## Self-test

1. Define the critical region of a test.
2. What is meant by the actual significance level?
3. A claim says a coin is fair; you suspect it is biased. Write the hypotheses.
4. A rate is 3 per day. What is the mean for a five-day period?
5. Write P(X ≥ 7) in terms of a table value.
6. A two-tailed test is at the 10% level. What probability goes in each tail?
7. X ~ B(10, 0.25), H₁: p > 0.25, 5% level. Give the critical region.
8. A tail probability is 0.062 at the 5% level. What is the decision?
9. Why are hypotheses written in terms of p and not X?
10. State the normal approximation to B(200, 0.5).
11. With the approximation in Question 10, write P(X ≤ 90) with a continuity correction.
12. Why should a conclusion not say "H₀ is true"?

**Answers:** 1. The set of values of the test statistic that would lead to H₀ being rejected. 2. The probability of the test statistic falling in the critical region when H₀ is true. 3. H₀: p = 0.5, H₁: p ≠ 0.5, where p is the probability of a head. 4. 15. 5. 1 − P(X ≤ 6). 6. 5%. 7. X ≥ 6 (actual significance level 0.0197). 8. 0.062 > 0.05, so do not reject H₀. 9. The hypotheses are claims about the population parameter; X is the sample result used to test them. 10. N(100, 50). 11. P(Y < 90.5). 12. Not rejecting H₀ only means there is not enough evidence against it; the test cannot show it is true.
