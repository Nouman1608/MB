---
title: "AQA A-Level Mathematics: O: Statistical hypothesis testing (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Hypothesis Testing Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "O: Statistical hypothesis testing"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 16
syllabusTopics:
  - qualification: "a-level"
    topic: "o-statistical-hypothesis-testing-aqa-alevel-maths"
description: "Revision notes for AQA A-Level Maths Section O: test vocabulary, binomial and Normal mean tests, correlation tests and a quick self-test with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section O: Statistical hypothesis testing** (O1 to O3) of the **AQA A-level
Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018 onwards. Section O
is listed under Paper 3, and a calculator is required in every 7357 paper. For full explanations and
six worked examples, use the [hypothesis testing study guide](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing/);
for exam-style questions, use the [practice set](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing-practice/).

Course links: [7357 hub](/boards/aqa/a-level/mathematics/) |
[printable checklist](/checklists/aqa/a-level/mathematics/) |
[free 10-minute diagnostics](/diagnostics/) |
[statistical sampling notes](/resources/aqa-a-level-mathematics-statistical-sampling-revision-notes/) |
[data presentation notes](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation-revision-notes/)

## O1: Vocabulary you must use correctly

| Term | Meaning |
|---|---|
| Null hypothesis H₀ | The starting belief; one value of the parameter, e.g. p = 0.3, μ = 50, ρ = 0 |
| Alternative hypothesis H₁ | Accepted if evidence is strong enough; uses <, > or ≠ |
| Test statistic | Value from the sample used to decide, e.g. X (count) or X̄ (sample mean) |
| 1-tail test | H₁ is one-directional (< or >) |
| 2-tail test | H₁ uses ≠; significance level split equally between the tails |
| Significance level | Threshold probability for rejecting H₀; the probability of incorrectly rejecting H₀ |
| Critical region | Values of the test statistic that lead to rejecting H₀ |
| Critical value | The boundary value of the critical region (first value inside it) |
| Acceptance region | Values not in the critical region; H₀ is not rejected |
| p-value | P(result at least as extreme as observed, assuming H₀ is true) |

Decision rules:

- p-value < significance level → reject H₀.
- Test statistic in critical region → reject H₀.
- Otherwise → do not reject H₀ (never "accept H₁" or "prove H₀").

A test uses a **sample** to make an **inference about the population**. Hypotheses always refer to
the population parameter, not to the sample result.

## Key distributions and formulas

| Test | Under H₀ | Notes |
|---|---|---|
| Binomial proportion | X ~ B(n, p₀) | X = number of successes in the sample |
| Normal mean | X̄ ~ N(μ₀, σ²/n) | σ known, given or assumed unchanged |
| Standardised mean | z = (x̄ − μ₀)/(σ/√n) | compare with critical z |
| Correlation | H₀: ρ = 0 | r is given; compare with a given critical value or p-value |

Common critical z values (to 3 d.p.):

| Level | 1-tail | 2-tail |
|---|---|---|
| 10% | 1.282 | ±1.645 |
| 5% | 1.645 | ±1.960 |
| 1% | 2.326 | ±2.576 |

## O2: Binomial test, method in steps

```
1. "Let p = proportion of ... in the population."
2. H₀: p = p₀    H₁: p > p₀  (or < or ≠)
3. Under H₀, X ~ B(n, p₀)
4. p-value: P(X ≥ x) for H₁: p > p₀;  P(X ≤ x) for H₁: p < p₀
   2-tail: find the tail the observed x lies in, compare with half the level
5. Compare, decide, conclude in context with "suggest"
```

**Remember:** P(X ≥ k) = 1 − P(X ≤ k − 1).

### Worked reminder: lower-tail critical region

Under H₀, X ~ B(20, 0.35). Find the critical region for H₁: p < 0.35 at 5%.

```
P(X ≤ 3) = 0.0444  ≤ 0.05
P(X ≤ 4) = 0.1182  > 0.05
Critical region: X ≤ 3
Actual significance level: 0.0444 (4.44%)
```

Always quote both probabilities either side of the boundary.

### Worked reminder: 2-tail p-value

Under H₀, X ~ B(16, 0.5), with H₁: p ≠ 0.5 at 5%. You observe x = 13, which is well above
half of 16, so it lies in the upper tail.

```
P(X ≥ 13) = 0.0106
Compare with 0.025 (half of 5%): 0.0106 < 0.025
Reject H₀: evidence that p is not 0.5
```

Had you observed 12, P(X ≥ 12) = 0.0384 > 0.025, so you would not reject H₀, even though
0.0384 < 0.05.

### Actual significance level

For a binomial test, the actual significance level is P(test statistic in critical region | H₀
true). It is the true probability of incorrectly rejecting H₀ and is usually less than the stated
level, because X is discrete. In a 2-tail test, add the two tail probabilities.

## O3: Normal mean test, method in steps

```
1. "Let μ = mean ... of the population."
2. H₀: μ = μ₀    H₁: μ > μ₀  (or < or ≠)
3. Under H₀, X̄ ~ N(μ₀, σ²/n)
4. Either: z = (x̄ − μ₀)/(σ/√n) and compare with critical z
   Or:     p-value = P(X̄ ≥ x̄) or P(X̄ ≤ x̄) from the calculator
   Or:     critical value of X̄ = μ₀ ± z × σ/√n
5. Decide and conclude in context
```

For a continuous test statistic, the probability of incorrectly rejecting H₀ equals the stated
significance level exactly.

### Worked reminder

Under H₀, μ = 64, σ = 6, n = 9, so σ/√n = 2. For H₁: μ < 64 at 5%, the critical value of X̄ is
64 − 1.645 × 2 = 60.71 (2 d.p.). A sample mean of 61.0 is not in the critical region X̄ < 60.71,
so do not reject H₀.

## O1: Correlation test, method in steps

```
1. H₀: ρ = 0
   H₁: ρ > 0 (positive), ρ < 0 (negative) or ρ ≠ 0 (any correlation)
2. Use the critical value given for the right sample size, level and tails
3. Positive H₁: reject if r > critical value
   Negative H₁: reject if r < −critical value
   2-tail: reject if |r| > critical value
   Or: reject if the given p-value < significance level
4. Conclude about correlation in the population, in context
```

The correlation coefficient measures how close points lie to a straight line. Calculating r is
excluded from this section. A significant correlation is not evidence of causation.

## Must-know distinctions

- **Sample vs population.** r, x̄ and the observed count describe the sample. ρ, μ and p describe
  the population and appear in hypotheses.
- **1-tail vs 2-tail.** Words like "increased", "fewer" and "positive" give a 1-tail test.
  "Changed", "different" and "any correlation" give a 2-tail test.
- **Critical value vs critical region.** The value is a single boundary; the region is a set,
  written as an inequality.
- **Stated vs actual significance level.** Stated: the level chosen before the test. Actual: the
  probability of the critical region under H₀ (only different for a discrete distribution).
- **p-value vs significance level.** The significance level is fixed before you collect data. The
  p-value comes from the data. Reject H₀ only when the p-value is the smaller of the two.
- **σ vs σ/√n.** The population standard deviation σ describes single values. Use σ/√n for the
  sample mean.

## Quick self-test

1. Write H₀ and H₁ for a test of the claim that more than 10% of a school's pupils are
   left-handed.
2. State what a 5% significance level means for a binomial test.
3. Under H₀, X ~ B(12, 0.5). H₁: p > 0.5 and 10 successes are observed. Test at 5%.
4. Under H₀, X ~ B(15, 0.4). H₁: p < 0.4 and 2 successes are observed. Test at 2.5%.
5. Under H₀, X ~ B(10, 0.3). Find the critical region for H₁: p > 0.3 at 5%, and the actual
   significance level.
6. A sample gives r = 0.52 with a 1-tail p-value of 0.03 for H₁: ρ > 0. Test at 1%.
7. X ~ N(μ, 5²). For n = 25, x̄ = 31.8. Test H₀: μ = 30 against H₁: μ > 30 at 5%.
8. State the critical z values for a 1-tail test at 1% and a 2-tail test at 5%.
9. X ~ N(μ, σ²). State the distribution of the mean X̄ of a random sample of size n.
10. For 12 pairs, r = −0.55. The 1-tail 5% critical value for a sample of 12 is 0.4973. Test
    H₁: ρ < 0.

### Answers

1. **H₀: p = 0.1, H₁: p > 0.1**, where p is the proportion of all pupils who are left-handed.
2. The probability of rejecting H₀ when it is true is **at most 0.05**.
3. P(X ≥ 10) = **0.0193** < 0.05, so reject H₀: evidence that p > 0.5.
4. P(X ≤ 2) = **0.0271** > 0.025, so do not reject H₀.
5. P(X ≥ 6) = 0.0473 ≤ 0.05 and P(X ≥ 5) = 0.1503 > 0.05, so **X ≥ 6**; actual level
   **0.0473**.
6. 0.03 > 0.01, so **do not reject H₀**: insufficient evidence of positive correlation at 1%.
7. σ/√n = 1, z = **1.8** > 1.645 (p-value 0.0359 < 0.05), so **reject H₀**.
8. **2.326** and **±1.960**.
9. **X̄ ~ N(μ, σ²/n)**.
10. −0.55 < −0.4973, so **reject H₀**: evidence of negative correlation in the population.

## Where marks are usually lost

- Hypotheses written with the sample statistic (r, x̄ or a sample proportion) instead of ρ, μ or p.
- No definition of the parameter, so the hypotheses have no meaning.
- P(X = k) given as the p-value instead of a cumulative tail probability.
- P(X ≥ k) found as 1 − P(X ≤ k) rather than 1 − P(X ≤ k − 1).
- 2-tail test compared with the full level instead of half of it in each tail.
- Critical region given without the probabilities either side of the boundary.
- σ used instead of σ/√n for the distribution of X̄.
- Conclusions that are too definite ("this proves") or not in context.
- Correlation conclusion that implies causation.
- Wrong critical value chosen because the number of tails was misread.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June
2018 onwards, Section 3.16 O: Statistical hypothesis testing. Published by AQA.
