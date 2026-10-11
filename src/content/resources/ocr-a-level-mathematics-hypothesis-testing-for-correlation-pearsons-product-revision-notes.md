---
title: "OCR A Level Mathematics A: Hypothesis testing for correlation: Pearson's product-moment coefficient (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Pearson's r Test Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Hypothesis testing for correlation: Pearson's product-moment coefficient"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 130
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-hypothesis-testing-ocr-alevel-maths"
description: "Condensed revision notes on Pearson's product-moment coefficient and the correlation hypothesis test for OCR A Level Mathematics A, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense references 2.05f and 2.05g of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Both are Stage 2, so **A Level only**. For full explanations and worked examples, read the [study guide](/resources/ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product/). Then test yourself with the [practice questions](/resources/ocr-a-level-mathematics-hypothesis-testing-for-correlation-pearsons-product-practice/). Other links: the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the wider [Statistics revision notes](/resources/ocr-a-level-mathematics-statistics-revision-notes/) and the [free diagnostics](/diagnostics/).

## Key facts (2.05f)

| Idea | Remember |
|---|---|
| What r measures | How close the points lie to a straight line |
| Range | −1 ≤ r ≤ 1 |
| r = 1 or r = −1 | All points exactly on a line, upward or downward |
| Sign | Direction of the trend |
| Size of r | Tightness of the points, not the gradient |
| r near 0 | No linear pattern; a curve is still possible |
| Change of units | Positive scaling or shifting leaves r unchanged; a negative multiplier flips its sign |
| Sample and population | r is for the sample, ρ is for the population |

The specification excludes calculating r. You are given it, or you are given a p-value.

## The test (2.05g) at a glance

| Item | Statement |
|---|---|
| Null hypothesis | H₀: ρ = 0 |
| Alternatives | H₁: ρ > 0, or ρ < 0, or ρ ≠ 0 |
| Test statistic | The sample coefficient r |
| Sample size n | Number of pairs |
| Critical value c | From the table: n, significance level and tails |
| Assumption | Data may be assumed to come from a bivariate normal distribution |
| Table | The specification says a table of critical values will be provided |

### Method in steps: critical value

1. Define ρ in context and write H₀ and H₁. Pick the alternative from the wording.
2. Note n (pairs), the significance level and whether the test is one-tail or two-tail.
3. Read c from the table. For a two-tail test at α%, use the one-tail column for (α ÷ 2)%, unless the table is labelled by two-tail level.
4. Compare r with c.
5. Decide and write a contextual conclusion.

| H₁ | Reject H₀ if |
|---|---|
| ρ > 0 | r > c |
| ρ < 0 | r < −c |
| ρ ≠ 0 | r > c or r < −c |

### Method in steps: p-value

1. Write the hypotheses as above.
2. Check that the p-value belongs to your tails. Double a one-tail p-value for a two-tail test.
3. Reject H₀ if p is less than the significance level.
4. With a table only, bracket p: if r lies between the 5% and 2.5% one-tail critical values, then 0.025 < p < 0.05.
5. Write the conclusion in context.

## Reading r from a scatter diagram

| What you see | What it suggests about r |
|---|---|
| Narrow band rising from left to right | r positive and close to 1 |
| Narrow band falling from left to right | r negative and close to −1 |
| Wide, shapeless cloud | r close to 0 |
| Clear curve, such as a U shape | r can be near 0 even though the relationship is strong |
| One point far from the rest | r may be pulled up or down by that point, so check it |

Only the first two rows show a strong linear pattern. For the curve, a test on r would be misleading, because the test assesses straight-line correlation. Always look at the diagram when one is given, and say what you see before you quote the test result.

## Second worked reminder: negative correlation with a p-value

Eighteen pairs give r = −0.49 and a one-tail p-value of 0.0195 for H₁: ρ < 0.

```
H₀: ρ = 0,  H₁: ρ < 0
p = 0.0195 < 0.05, reject H₀ at 5%
p = 0.0195 > 0.01, do not reject H₀ at 1%
```

Conclusion at 5%: there is evidence of negative correlation in the population. At 1% there is not enough evidence. Quote the level you used each time.

## Sentence frames

- Hypotheses: "H₀: ρ = 0 and H₁: ρ < 0 (or > 0, or ≠ 0). Here ρ stands for the population product-moment correlation coefficient linking [x] with [y]."
- Reject: "Reject H₀ at the 5% level: there is evidence of correlation (state its direction) between [x] and [y]."
- Do not reject: "Do not reject H₀ at the 5% level: the sample gives insufficient evidence of correlation between [x] and [y]."

## Worked reminder

Twelve pairs of measurements give r = 0.58. Test at 5% for positive correlation, given the one-tail 5% critical value for n = 12 is 0.4973.

```
H₀: ρ = 0,  H₁: ρ > 0
0.58 > 0.4973, so reject H₀
```

There is evidence at the 5% level of positive correlation. If the question asked about correlation of either sign, the 2.5% one-tail value for n = 12 is 0.5760. Since 0.58 > 0.5760, you would still reject H₀.

## Must-know distinctions

| Pair | Difference |
|---|---|
| r and ρ | Sample value you are given, and population value you test |
| Strong and significant | Strong describes the size of r; significant describes the test result |
| One-tail and two-tail | Wording such as "positive" or "negative" gives one tail; "correlation" or "relationship" gives two |
| No correlation and no relationship | r near zero rules out only a linear pattern |
| Do not reject and accept | A failed test means a lack of evidence, not proof that ρ = 0 |
| Correlation and causation | A significant r does not show one variable causes the other |

Sample size effect: the same r can fail with a small n and pass with a large n, because the critical value falls as n rises.

## Quick self-test

Critical values below are supplied as data and computed to 4 decimal places.

1. Samples have r = 0.2, −0.9 and 0.6. Which is closest to a straight line?
2. Write the hypotheses for a test of whether there is negative correlation between altitude and temperature.
3. A study has 8 pairs of readings. What value of n do you use?
4. For n = 8, the 5% one-tail critical value is 0.6215. Test H₁: ρ < 0 when r = −0.70.
5. For n = 11, the 5% one-tail value is 0.5214. A two-tail test at 10% gives r = 0.55. What is the decision?
6. A two-tail test at 5% is given a two-tail p-value of 0.07. What is the decision?
7. Points plotted on a diagram form a clear U shape, yet r = 0.02. Can we say the two variables are unrelated?
8. For n = 16, the 1% one-tail critical value is 0.5742. Test H₁: ρ > 0 at 1% when r = 0.45.
9. For n = 40, r = 0.28. The 5% one-tail value is 0.2638 and the 2.5% one-tail value is 0.3120. Give the decision for a one-tail and a two-tail test at 5%.
10. All the x-values are converted from centimetres to metres. What happens to r?
11. A test finds significant positive correlation between ice-skating attendance and woollen hat sales. Is it right to say attendance causes the sales?
12. Why is r = 0.5 convincing for n = 30 but not for n = 6?

### Answers

1. r = −0.9, because its size is the largest.
2. H₀: ρ = 0, H₁: ρ < 0, where ρ is the population product-moment correlation coefficient between altitude and temperature.
3. n = 8, the number of pairs.
4. −0.70 < −0.6215, so reject H₀. At the 5% level the data support negative correlation.
5. Two-tail 10% uses the 5% one-tail column: c = 0.5214. Since 0.55 > 0.5214, reject H₀.
6. 0.07 > 0.05, so do not reject H₀. There is not enough evidence of correlation.
7. No. A value near zero rules out only a straight-line pattern, and the U shape is a strong curved relationship.
8. 0.45 < 0.5742, so do not reject H₀. There is not enough evidence at the 1% level of positive correlation.
9. One-tail: 0.28 > 0.2638, reject H₀. Two-tail: 0.28 < 0.3120, do not reject H₀.
10. r is unchanged, because the scaling is by a positive number.
11. No. A third variable such as cold weather could drive both; the test shows association only.
12. The critical value is lower for n = 30 (0.3061 at 5% one-tail) than for n = 6 (0.7293), so 0.5 passes the first and fails the second.

## Where marks are usually lost

- Writing hypotheses about r instead of ρ, or leaving ρ undefined.
- Choosing the tail from the sign of r instead of from the wording.
- Using n as the number of values rather than pairs.
- Using the 5% column for a two-tail 5% test, instead of the 2.5% one-tail column.
- Comparing a negative r with a positive critical value without changing the inequality.
- Stating "reject H₀" with no conclusion in context.
- Wording the answer as certain: "proves", "shows that H₀ is true", "accept H₀".
- Treating a significant result as proof of causation.
- Forgetting that a one-tail p-value must be doubled for a two-tail test.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, section 2.05 Statistical Hypothesis Testing, references 2.05f and 2.05g.
