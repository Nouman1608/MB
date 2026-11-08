---
title: "Pearson Edexcel International Advanced Level Mathematics: Samples and hypothesis tests (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths S2 Hypothesis Tests Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Populations and samples, sampling distributions and hypothesis tests for binomial p and Poisson mean"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 168
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-samples-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-hypothesis-tests-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Mathematics Statistics 2 section 4: sampling terms, test method, critical regions, binomial and Poisson tests."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for section 4 (topics 4.1 to 4.6, "Hypothesis tests") of Unit S2: Statistics 2 in the
**Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure
Mathematics specification (YMA01), Issue 3, April 2019**. The specification lists S2 as an optional unit for IAS
Further Mathematics and for IAL Mathematics and Further Mathematics. The [study guide](/resources/edexcel-ial-mathematics-populations-and-samples-sampling-distributions-and/) explains each step
in depth, and the [practice questions](/resources/edexcel-ial-mathematics-populations-and-samples-sampling-distributions-and-practice/) let you check what you recall.

Course links: [hub](/boards/edexcel/a-level/mathematics/), [checklist](/checklists/edexcel/a-level/mathematics/), free [10-minute diagnostics](/diagnostics/).

## Definitions to recall (4.1 to 4.3)

| Term | Meaning |
|---|---|
| Population | Every item or person of interest |
| Census | Every member of the population is observed |
| Sample | A subset of the population |
| Sampling unit | One individual member that can be selected |
| Sampling frame | The list of all sampling units the sample is chosen from |
| Statistic | A quantity calculated from the sample only, with no unknown parameter in it |
| Sampling distribution | The distribution of a statistic over all possible samples of a given size |
| Null hypothesis H₀ | The assumed value of the parameter, written with an equals sign |
| Alternative hypothesis H₁ | How the parameter differs: >, < or ≠ |
| Test statistic | The statistic used to decide, for example the count X |
| Critical region | Outcomes of the test statistic for which H₀ is rejected |
| Critical value | The boundary of the critical region |
| Actual significance level | P(test statistic in the critical region | H₀ true) |

**Census versus sample.** Census: exact, but slow, costly, and impossible if testing destroys the item. Sample:
cheaper and faster, but results vary and a poor frame causes bias.

**Statistic or not.** For a sample X₁, X₂, X₃ from a population with unknown mean μ: the sample mean and the
maximum are statistics. X₁ − μ is not.

**Small sampling distribution.** Population {0, 2} equally likely, samples of size 2 with replacement, statistic = sample mean.

```
Pairs: 00, 02, 20, 22
Mean:   0,  1,  1,  2
x            0     1     2
P(mean = x) 1/4   1/2   1/4
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--08-sampling-distribution.webp" width="900" height="990" alt="Edexcel International A Level. The population has three equally likely values 1, 3 and 5. A 3 by 3 grid shows the nine equally likely samples of size 2 taken with replacement, each labelled with M, the larger value: M = 1 for one pair (1,1), M = 3 for three pairs (1,3), (3,1) and (3,3), and M = 5 for five pairs. A bar chart shows the sampling distribution of M: P(M=1) = 1/9, P(M=3) = 3/9, P(M=5) = 5/9. E(M) is 35/9, about 3.89, which is more than the population mean 3, so M is a biased guide to the mean." loading="lazy">
  <figcaption>A statistic varies from sample to sample, and its sampling distribution shows how it behaves.</figcaption>
</figure>


## Method box: any hypothesis test

1. Define the parameter in words (p, or λ per stated interval).
2. Write H₀ and H₁. Pick one-tailed or two-tailed from the wording before using data.
3. Give the distribution of the test statistic when H₀ holds.
4. Find the critical region, or the probability of a result as extreme as, or more extreme than, the one seen.
5. Compare with the significance level (halve it for each tail of a two-tailed test).
6. Say whether H₀ is rejected, then write a conclusion in context. Do not say "proved".

## Choosing the tails (4.5)

| Wording | H₁ | Tails |
|---|---|---|
| increased, higher, more than | p > p₀ | upper tail |
| decreased, lower, fewer than | p < p₀ | lower tail |
| changed, different, not equal | p ≠ p₀ | both tails, half the level each |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--03-outlier-fence.webp" width="900" height="1103" alt="A dot plot and box plot of 12 apple masses in grams: 138, 142, 144, 146, 147, 149, 150, 151, 153, 155, 160 and 210. The lower quartile is 145, the upper quartile 154 and the interquartile range 9. The outlier fences are 145 minus 13.5, which is 131.5, and 154 plus 13.5, which is 167.5. The value 210 lies beyond the upper fence, so it is marked with a cross as a possible outlier, and the upper whisker stops at 160, the largest value inside the fence. A second chart compares standard deviations: 17.9 grams with all 12 values and 5.91 grams with 210 left out. The figure warns that a value should be removed only if it is an error or does not belong to the population." loading="lazy">
  <figcaption>A value beyond Q3 + 1.5 x IQR is a possible outlier, but it is removed only if it is an error or not in the population.</figcaption>
</figure>


## Binomial test (4.6)

Under H₀, X ~ B(n, p₀). Choose the critical region so its probability is as large as possible without exceeding
the level (or the half-level in each tail).

**Reminder.** X ~ B(14, 0.5), H₁: p < 0.5, 5% level.

```
P(X <= 3) = 0.0287  (< 0.05)
P(X <= 4) = 0.0898  (> 0.05)
Critical region: X <= 3.  Actual significance level 2.87%.
```

## Poisson test (4.6)

Under H₀, X ~ Po(λ₀ × length of interval counted). Scale the mean first, always.

**Reminder.** H₀: λ = 6 per week, H₁: λ ≠ 6, 5% level, counted over one week. X ~ Po(6), 2.5% in each tail.

```
Lower: P(X <= 1) = 0.0174 (< 0.025),  P(X <= 2) = 0.0620 (> 0.025)  -> X <= 1
Upper: P(X >= 12) = 0.0201 (< 0.025), P(X >= 11) = 0.0426 (> 0.025) -> X >= 12
Critical region: X <= 1 or X >= 12.  Actual level 0.0174 + 0.0201 = 0.0374 (3.74%)
```

## Normal approximation to a binomial test (4.6)

For large n, X ~ B(n, p₀) is approximated by N(np₀, np₀(1 − p₀)). Apply a continuity correction.

| Required | Use |
|---|---|
| P(X ≥ k) | P(Y > k − 0.5) |
| P(X ≤ k) | P(Y < k + 0.5) |
| P(X > k) | P(Y > k + 0.5) |
| P(X < k) | P(Y < k − 0.5) |

**Reminder.** H₀: p = 0.5, H₁: p < 0.5, n = 80, observed X = 32. Under H₀, X ≈ N(40, 20).

```
P(X <= 32) = P(Y < 32.5) = P(Z < (32.5 - 40)/sqrt(20)) = P(Z < -1.677) = 0.0468
0.0468 < 0.05: reject H0
```

The exact binomial probability P(X ≤ 32) is 0.0465, so the approximation is close here.

## One-tailed Poisson reminder using the p-value

H₀: λ = 3 per day, H₁: λ > 3, 5% level. A 4-day record gives 19 events. Under H₀ the 4-day count is X ~ Po(12).

```
P(X >= 19) = 0.0374  < 0.05
```

Reject H₀. At the 5% level the sample gives enough evidence that the daily rate has increased. If the record had
shown 18 events, P(X ≥ 18) = 0.0630 and H₀ would not be rejected.

## Binomial reminder using a p-value

H₀: p = 0.15, H₁: p > 0.15, n = 25, 5% level. Suppose X = 7 is observed.

```
P(X >= 7) = 0.0695  > 0.05   -> do not reject H0
P(X >= 8) = 0.0255           -> the critical region would be X >= 8
```

Observing 7 gives insufficient evidence. The same data would reject H₀ at the 10% level, so always read the level
from the question.

## Writing the conclusion

Use this shape every time.

1. Decision: "Reject H₀" or "Do not reject H₀", with the comparison that led to it (for example 0.0374 < 0.05).
2. Evidence statement: "There is sufficient (or insufficient) evidence at the 5% level to support the claim that ..."
3. Context: name the quantity, such as "the daily rate of events" or "the proportion of parcels arriving on time".

## Spotting which test to use

| The question gives | Likely test |
|---|---|
| A fixed number of trials, each success or failure, and a proportion | Binomial test for p |
| A count of random events over time, area or length, and an average rate | Poisson test for λ |
| A binomial test with a large number of trials | Binomial test with a normal approximation |

## Must-know distinctions

- **Parameter and statistic.** Hypotheses are about the parameter (p or λ). The test statistic is the sample value.
- **Critical region and p-value.** Both give the same decision. A critical region is set before looking at the data.
- **Nominal and actual level.** Nominal is what the question asks for. Actual is what the critical region really has.
- **"Not reject" and "accept".** A result outside the critical region means insufficient evidence against H₀, not proof of it.
- **Binomial and Poisson.** A binomial variable counts successes in a set number of trials. A Poisson variable counts random events in an interval, and its mean scales with that interval.

## Quick self-test

1. In one phrase, what is a sampling frame?
2. Is X₁ + X₂ − 2μ a statistic when μ is unknown?
3. A company's mean number of faults per batch was 3. It now thinks the mean has changed. Write H₀ and H₁.
4. X ~ B(14, 0.5), H₁: p < 0.5, 5% level. State the critical region and the actual significance level.
5. For a Poisson test over 10 minutes, the rate is 0.7 per minute under H₀. What is the distribution of X?
6. X ~ Po(6), H₁: λ ≠ 6, total level 5%. Give the critical region.
7. A one-tailed binomial test gives P(X ≥ 11) = 0.0679 against a 5% level. Decision?
8. X ~ B(80, 0.5) is approximated by a normal variable Y. Write P(X ≤ 32) in terms of Y.
9. What is the mean and variance of the normal approximation in question 8?
10. Give one disadvantage of a census and one of a sample.

### Answers

1. The list of all sampling units from which the sample is taken.
2. No. It contains the unknown μ.
3. H₀: λ = 3, H₁: λ ≠ 3 (λ is the mean faults per batch).
4. X ≤ 3. Actual level 0.0287.
5. X ~ Po(7).
6. X ≤ 1 or X ≥ 12 (actual level 0.0374).
7. Do not reject H₀, because 0.0679 is greater than 0.05.
8. P(Y < 32.5).
9. Mean 40, variance 20.
10. Census: costly or time-consuming, and impossible if testing destroys the item. Sample: results vary, and a poor frame gives bias.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--02-variance-squares.webp" width="900" height="1058" alt="Eight data values 2, 4, 4, 4, 5, 5, 7 and 9 are shown on a number line with their distances from the mean 5: minus 3, minus 1, minus 1, minus 1, 0, 0, plus 2 and plus 4. A square is drawn on each distance, with areas 9, 1, 1, 1, 0, 0, 4 and 16, which total 32. The mean of these areas is 32 divided by 8, which is 4: that is the variance. Its square root, the side of a square of area 4, is the standard deviation 2. The shortcut sum of x squared over n minus the mean squared gives 232 over 8 minus 25, which is also 4." loading="lazy">
  <figcaption>Variance is the mean of the squared distances from the mean; the standard deviation is the side of that mean square.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--05-sample-variability.webp" width="900" height="955" alt="Three dot plots of one-way commuting times in minutes. Analyst A's random sample of 8 (18, 22, 25, 27, 30, 35, 38, 41) has mean 29.5. Analyst B's random sample of 8 (15, 17, 19, 20, 21, 24, 26, 33) has mean 21.9. Together the 16 values have mean 25.7. Triangles mark each mean. Both samples came from a fair method, so the 7.6 minute gap is sampling variability; combining the samples, or using larger ones, reduces it." loading="lazy">
  <figcaption>Two fair random samples from the same firm give different means, so samples are only estimates.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--07-extrapolation.webp" width="900" height="818" alt="A graph of the regression line y = 78 minus 2.4x for resting heart rate against weekly training hours. The data covered 2 to 10 hours, shown as a shaded band; the line is solid there and dashed outside. At 5 hours the prediction is 66 beats per minute, which is interpolation and reasonably reliable. At 30 hours the line gives 6 beats per minute, which is not credible, so predicting outside the data range is unreliable. The intercept 78 at x = 0 also lies outside the data." loading="lazy">
  <figcaption>Predictions are reliable inside the range of the data and unreliable outside it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--09-clt-sample-mean.webp" width="900" height="1060" alt="OxfordAQA International A Level. Top: a skewed parent distribution of times between helpline calls with mean 4 minutes and standard deviation 4 minutes (an exponential curve is used as an example). Bottom: the distribution of the mean of 64 such values. It is close to bell-shaped, centred on 4, with standard error 4 divided by the square root of 64, which is 0.5, so it is approximately N(4, 0.5 squared) by the Central Limit Theorem. The exact curve and the normal curve almost coincide. The area to the right of 4.9, where z is 1.8, is shaded: P(mean greater than 4.9) is 0.0359." loading="lazy">
  <figcaption>For large n the sample mean is approximately normal whatever the parent, with standard error sigma over root n.</figcaption>
</figure>


## Where marks are usually lost

- Hypotheses written about X or x̄ instead of p or λ.
- A Poisson mean not rescaled to the interval in the question.
- The wrong tail, because the wording was not read before the data.
- Setting a single tail against the whole level in a two-tailed test.
- A critical region that overshoots the level, such as taking X ≥ 10 when P(X ≥ 10) is above the level.
- A missing continuity correction, or one shifted the wrong way.
- Not quoting the actual significance level when the question asks for it.
- A conclusion that says "H₀ is accepted" or "the claim is proved", or has no context.
- Advantage and disadvantage answers that are generic and not tied to the scenario.

## Frequently asked questions

**What is the difference between a census and a sample?**
A census observes every member of the population and gives the true value, but it is slow and costly and impossible if testing destroys the item. A sample is cheaper and quicker, but results vary and a poor sampling frame can cause bias.

**What is the actual significance level of a test?**
The actual significance level is the probability of the test statistic falling in the critical region when H₀ is true. For a discrete distribution it is usually a little below the nominal level the question asks for.

**How do you choose between a binomial and a Poisson test?**
Use a binomial test for p when there is a fixed number of trials, each a success or failure. Use a Poisson test for λ when you are counting random events over time, area or length at an average rate.

**What continuity correction is used for P(X ≤ k) with a normal approximation?**
P(X ≤ k) becomes P(Y < k + 0.5), and P(X ≥ k) becomes P(Y > k − 0.5), where Y is the approximating normal variable.

**Is S2 compulsory in Edexcel IAL Mathematics?**
No. The Edexcel IAL specification (YMA01) lists Unit S2: Statistics 2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure
Mathematics, Specification, Issue 3, April 2019, Unit S2: Statistics 2, section 4 (Hypothesis tests), topics 4.1 to 4.6.
Published by Pearson Education Limited.
