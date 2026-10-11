---
title: "OxfordAQA International AS and A-level Mathematics: Hypothesis testing for a proportion and a Poisson mean (9660)"
seoTitle: "OxfordAQA A-level Maths Proportion and Poisson Tests Guide"
resourceType: "study-guides"
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
description: "Study guide to hypothesis tests for a binomial proportion and a Poisson mean, with Type I and II errors, for OxfordAQA International A-level Maths S2.6."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide follows the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, and covers the first part of S2.6: hypothesis testing for a population proportion (exact binomial probabilities) and for the mean of a Poisson distribution (exact Poisson probabilities), plus the language of testing and Type I and Type II errors. The specification states this content is part of International A-level (A2) Unit S2 (Statistics). It is not examined at International AS. The tests for means of normal distributions in S2.6 are a separate topic and are not repeated here.

Course hub: [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/). Printable [checklist](/checklists/oxfordaqa/a-level/mathematics/). Next: [revision notes](/resources/oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-practice/). Not sure where you stand? Try the [free diagnostics](/diagnostics/).

## What this unit covers

| Spec content | What you must be able to do |
|---|---|
| Null and alternative hypotheses | Write H₀ as "a parameter takes a specified value" and choose H₁ from the context |
| One- and two-tailed tests | Decide which from the wording and split the significance level correctly |
| Significance level, critical value, critical region, acceptance region | Find them from exact probabilities and state them clearly |
| Test statistic and p-value | Use the observed count as the test statistic and compare tail probabilities |
| Type I and Type II errors | Define both in context; state the risk of a Type I error. Calculating a Type II risk is not set |
| Tests for a population proportion | Use exact binomial probabilities |
| Tests for the mean of a Poisson distribution | Use exact Poisson probabilities |

The specification says the significance level to be used in a test will be given. You will not be asked to choose one.

You need the binomial and Poisson distributions first. See the [binomial guide](/resources/a-level-oxfordaqa-mathematics-bernoulli-and-binomial-distributions/) and the [Poisson guide](/resources/oxfordaqa-a-level-mathematics-the-poisson-distribution/).

## The language of a test

A hypothesis test asks whether sample data are surprising enough to doubt a claim about a population parameter.

- **Null hypothesis, H₀:** the claim being tested. It must say that the parameter takes a specified value, for example H₀: p = 0.15 or H₀: λ = 4.5.
- **Alternative hypothesis, H₁:** what you will accept if the evidence goes against H₀.
- **One-tailed test:** H₁ says the parameter is greater than, or less than, the value in H₀.
- **Two-tailed test:** H₁ says the parameter is different from the value in H₀ (≠).
- **Test statistic:** the quantity calculated from the sample. In this unit it is simply the observed count X.
- **Significance level:** the probability you are willing to accept of rejecting H₀ when it is true. It is given in the question.
- **Critical region:** the values of X for which you would reject H₀. The value at the edge of this region is the **critical value**.
- **Acceptance region:** the remaining values, where you do not reject H₀.
- **p-value:** how likely a result as far out as yours, or further, would be if H₀ were true.

Always define the parameter in words. Write "Let p be the probability that a loaf is faulty", not just "p".

### Two ways to run the same test

1. **p-value method.** Work out the tail probability of the observed value, then compare it with the significance level.
2. **Critical region method.** Find the critical region first, then see whether the observed value lies in it.

Both give the same decision. For a two-tailed test at significance level α, compare each tail with α/2. With the p-value method you can instead double the tail probability and compare with α.

When you reject H₀, say "there is sufficient evidence at the 5% level to suggest that..." in the context of the question. When you do not, say there is insufficient evidence. Never say H₀ has been proved.

## Testing a population proportion

**Model.** Suppose a fixed number n of independent trials each have the same probability p of success. Under H₀ the number of successes is X ~ B(n, p₀), where p₀ is the value in H₀. Every probability is an exact binomial probability.

### Worked example 1: one-tailed, lower tail

A printing firm says 15% of its cartridges are defective. A new supplier claims to have reduced this. In a random sample of 24 cartridges, 1 is defective. Test at the 5% level.

```
Let p = probability a cartridge is defective.
H₀: p = 0.15    H₁: p < 0.15    (one-tailed)
Under H₀, X ~ B(24, 0.15)
P(X ≤ 1) = 0.0202 + 24 × 0.15 × 0.85²³ = 0.1059
0.1059 > 0.05, so do not reject H₀.
```

The sample does not give enough evidence, at the 5% level, that the defect rate has fallen.

To find the critical region for the same test, work down from zero. P(X ≤ 0) = 0.0202, which is at most 0.05. P(X ≤ 1) = 0.1059, which is not. The critical region is X = 0, and the **actual significance level** is 0.0202. The observed 1 is outside it, so the decision matches.

### Worked example 2: two-tailed

A spinner is said to land on red with probability 0.35. You suspect it is biased, in either direction. You spin it 28 times and get 16 reds. Test at the 10% level.

```
Let p = probability of red.
H₀: p = 0.35    H₁: p ≠ 0.35    (two-tailed)
Under H₀, X ~ B(28, 0.35). Each tail gets 5%.
```

Critical region method. Lower tail: P(X ≤ 5) = 0.0393 (at most 0.05) and P(X ≤ 6) = 0.0923 (too big), so X ≤ 5. Upper tail: P(X ≥ 15) = 0.0337 (at most 0.05) and P(X ≥ 14) = 0.0736 (too big), so X ≥ 15.

Critical region: X ≤ 5 or X ≥ 15. Acceptance region: 6 ≤ X ≤ 14. The actual significance level is 0.0393 + 0.0337 = 0.0730.

The observed value 16 is in the critical region, so reject H₀. There is sufficient evidence at the 10% level that the probability of red is not 0.35.

p-value check. P(X ≥ 16) = 0.0136. Doubling gives 0.0272, which is less than 0.10. Same conclusion.

### Worked example 3: finding an upper critical region

A shop's records say 30% of visitors buy something. After a refit, the owner thinks the proportion has risen. She will watch 25 visitors and test at the 5% level. Find the critical region.

```
H₀: p = 0.3    H₁: p > 0.3
Under H₀, X ~ B(25, 0.3)
P(X ≥ 11) = 0.0978   > 0.05
P(X ≥ 12) = 0.0442   ≤ 0.05
```

The critical region is X ≥ 12, and the critical value is 12. The actual significance level is 0.0442.

Notice that the actual level is below 5%. The binomial distribution is discrete, so you cannot usually hit the stated level exactly. Take the biggest region you can without going over the stated level.

## Testing the mean of a Poisson distribution

**Model.** Events occur singly, independently and at a constant average rate. Under H₀ the count is X ~ Po(λ₀), where λ₀ is the mean in H₀.

**Match the interval.** The mean must refer to the interval you observe. If calls arrive at a mean of 2.5 per day and you count for 4 days, the sum of independent Poisson variables is Poisson, so the mean is 10 and X ~ Po(10).

### Worked example 4: one-tailed

A helpline records a mean of 2.5 complaints per day. After a change of procedure, a manager fears complaints have risen. Over 4 days there are 15 complaints. Test at the 5% level.

```
Let λ = mean number of complaints per day.
H₀: λ = 2.5    H₁: λ > 2.5
Over 4 days, under H₀: X ~ Po(10)
P(X ≥ 15) = 1 − P(X ≤ 14) = 1 − 0.9165 = 0.0835
0.0835 > 0.05, so do not reject H₀.
```

At the 5% level there is not enough evidence that complaints have risen.

Critical region: P(X ≥ 15) = 0.0835 is too big, but P(X ≥ 16) = 0.0487 is within 5%. So the critical region is X ≥ 16.

### Worked example 5: two-tailed

A fabric roll has a mean of 4.5 flaws. A new loom is installed and you test whether the mean has changed, at the 5% level, using one roll.

```
H₀: λ = 4.5    H₁: λ ≠ 4.5    Each tail 2.5%
X ~ Po(4.5)
Lower: P(X ≤ 0) = 0.0111 ≤ 0.025;  P(X ≤ 1) = 0.0611 > 0.025
Upper: P(X ≥ 10) = 0.0171 ≤ 0.025; P(X ≥ 9) = 0.0403 > 0.025
```

Critical region: X = 0 or X ≥ 10. The actual significance level is 0.0111 + 0.0171 = 0.0282. If the roll has 11 flaws, then P(X ≥ 11) = 0.0067, and doubling gives 0.0134, below 0.05. Reject H₀.

## Type I and Type II errors

| Decision | If H₀ is really true | If H₀ is really false |
|---|---|---|
| Reject H₀ | **Type I error** | Right decision |
| Do not reject H₀ | Right decision | **Type II error** |

- A Type I error means rejecting H₀ when it is true. Its probability is the actual significance level of the test. In example 2 it is 0.0730. In example 5 it is 0.0282.
- A Type II error means accepting H₀ when it is false. The specification says you must understand the idea, but questions requiring you to calculate the risk of a Type II error will not be set.

Describe both in the context. In example 1, a Type I error means concluding that the defect rate has fallen when it has not. A Type II error means failing to find evidence of a fall when the new supplier really has improved things.

A lower significance level makes a Type I error less likely, but it makes a Type II error more likely for a sample of the same size.

## Common errors

- Writing H₀ with an inequality such as p ≤ 0.3. Here H₀ must state a specified value.
- Writing hypotheses about the sample, such as "X = 18". Hypotheses are about the parameter p or λ.
- Using P(X = 1) instead of a tail probability. The p-value is P(X ≤ 1) for a lower tail and P(X ≥ c) for an upper tail.
- Forgetting that P(X ≥ c) = 1 − P(X ≤ c − 1). The "minus one" is the most common slip.
- Not halving the significance level for a two-tailed critical region.
- Using a daily Poisson mean when the data cover several days.
- Writing "H₀ is true" or "the claim is wrong" instead of a conclusion in context.
- Saying "accept H₀" as if it were proved. Write "there is insufficient evidence to reject H₀".

## Next steps

Use the [revision notes](/resources/oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-revision-notes/) for a condensed version. Then work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-hypothesis-testing-for-a-proportion-and-a-poisson-mean-practice/). The [exam preparation guide](/resources/oxfordaqa-a-level-mathematics-exam-preparation/) covers wider revision planning.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: Unit S2 (Statistics), section S2.6, Hypothesis testing.
