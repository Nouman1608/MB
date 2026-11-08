---
title: "OCR A Level Mathematics: Statistics — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Statistics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
description: "Condensed OCR A Level Mathematics A (H240) statistics notes on sampling, data, correlation, probability, binomial and normal distributions and hypothesis tests."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-09-02
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

Condensed for the final weeks. For the full explanation, use the
[Statistics study guide](/resources/ocr-a-level-mathematics-statistics/).

## Sampling methods

Random, systematic, stratified, opportunity, quota, cluster. Practise **justifying** a chosen method against the specific investigation described — not just naming it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--04-sampling-methods.webp" width="900" height="1250" alt="Three grids of the same 60 numbered people, in 6 rows of 10, with three groups shown by shape: group A circles (24), group B squares (20) and group C diamonds (16). Systematic sampling picks every 4th person from a random start of 3, giving 15 people (3, 7, 11 up to 59); the risk is a repeating pattern in the list. Stratified sampling picks 6, 5 and 4 people at random from groups A, B and C, in proportion to group size, again 15 people. Cluster sampling picks 2 of the 6 rows at random and asks everyone in them, 20 people. A note says quota sampling is like stratified sampling but the people asked are not chosen at random." loading="lazy">
  <figcaption>How each method picks its sample; quota is stratified without random selection.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--08-sampling-distribution.webp" width="900" height="990" alt="Edexcel International A Level. The population has three equally likely values 1, 3 and 5. A 3 by 3 grid shows the nine equally likely samples of size 2 taken with replacement, each labelled with M, the larger value: M = 1 for one pair (1,1), M = 3 for three pairs (1,3), (3,1) and (3,3), and M = 5 for five pairs. A bar chart shows the sampling distribution of M: P(M=1) = 1/9, P(M=3) = 3/9, P(M=5) = 5/9. E(M) is 35/9, about 3.89, which is more than the population mean 3, so M is a biased guide to the mean." loading="lazy">
  <figcaption>A statistic varies from sample to sample, and its sampling distribution shows how it behaves.</figcaption>
</figure>


## Worked example: binomial probability

A biased coin lands heads with probability 0.6; tossed 5 times. Find P(exactly 3 heads).

```
X ~ B(5, 0.6)
P(X = 3) = C(5,3) x 0.6^3 x 0.4^2 = 10 x 0.216 x 0.16 = 0.3456
```

Recognising a scenario **is binomial** (fixed n independent trials, two outcomes, constant p) is the first, most commonly mis-assessed step, before any calculation.

## Worked example: hypothesis test

A machine should have a 5% defect rate. In a sample of 100, 9 are defective. Test at 5% significance whether the defect rate has increased.

```
H0: p = 0.05, H1: p > 0.05, where p is the population
    proportion of defective components
    -- ONE-TAILED, since the question asks specifically
       about an increase
Under H0: X ~ B(100, 0.05)
P(X >= 9) = 0.0631 (4 d.p.) > 0.05
Critical region: X >= 10, since P(X >= 10) = 0.0282 <= 0.05
                 but P(X >= 9) = 0.0631 > 0.05
Observed value 9 is NOT in the critical region, so do not
reject H0.
Conclusion IN CONTEXT, worded as not certain:
"There is insufficient evidence at the 5% level to reject H0.
There is no reason to suppose that the defect rate has
increased."
-- never just "reject H0" or "do not reject H0" alone
```

Word conclusions so they reflect uncertainty: the specification gives "H0 is rejected. Waiting times have increased." as an example of an **incorrect** conclusion, because it states the change as fact. If the result had been significant (for example 10 or more defectives here), the form would be "There is evidence at the 5% level to reject H0. It is likely that the defect rate has increased."

## Worked example: normal distribution probability

Heights of adult men are modelled as X ~ N(175, 49) (mean 175 cm, variance 49 cm²). Find P(X > 182).

```
Step 1: standardise using z = (x - mu) / sigma
        sigma = sqrt(49) = 7
        z = (182 - 175) / 7 = 1
Step 2: use the standard normal table (or calculator) to find
        P(Z > 1) = 1 - P(Z < 1) = 1 - 0.8413 = 0.1587
```

Standardising to a z-value before reading a probability table is the reliable method for any normal-distribution question -- always identify the mean and standard deviation (taking a square root from variance if given) before substituting into the standardisation formula.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--09-clt-sample-mean.webp" width="900" height="1060" alt="OxfordAQA International A Level. Top: a skewed parent distribution of times between helpline calls with mean 4 minutes and standard deviation 4 minutes (an exponential curve is used as an example). Bottom: the distribution of the mean of 64 such values. It is close to bell-shaped, centred on 4, with standard error 4 divided by the square root of 64, which is 0.5, so it is approximately N(4, 0.5 squared) by the Central Limit Theorem. The exact curve and the normal curve almost coincide. The area to the right of 4.9, where z is 1.8, is shaded: P(mean greater than 4.9) is 0.0359." loading="lazy">
  <figcaption>For large n the sample mean is approximately normal whatever the parent, with standard error sigma over root n.</figcaption>
</figure>


## Recognising which distribution to use

The specification expects a deliberate check, not a guess, when choosing between the binomial and normal models. A binomial model fits a **fixed number of discrete trials** with two outcomes and constant probability (e.g. counting defective items in a sample). A normal model fits **continuous data** clustering symmetrically around a mean (e.g. heights, reaction times, exam scores). A binomial distribution with large n can be approximated by a normal distribution, and this specification requires you to understand that (2.04h) and to know and use μ = np and σ² = npq when choosing the normal model to use as the approximation (2.04d). What is excluded is questions explicitly requiring calculations using the normal approximation to the binomial (2.04h), and the use of the normal approximation in a binomial hypothesis test (2.05c).

## Data presentation and interpretation

Interpreting standard graphical and numerical summaries (mean, median, standard deviation, quartiles, box plots, histograms) of real, often large, data sets is assessed alongside the calculation-heavy content. Since some questions are set directly on OCR's pre-released large data set, revision cannot be purely abstract -- practise summarising and interpreting the actual released data set's specific variables and context, not just generic data-handling technique.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--02-variance-squares.webp" width="900" height="1058" alt="Eight data values 2, 4, 4, 4, 5, 5, 7 and 9 are shown on a number line with their distances from the mean 5: minus 3, minus 1, minus 1, minus 1, 0, 0, plus 2 and plus 4. A square is drawn on each distance, with areas 9, 1, 1, 1, 0, 0, 4 and 16, which total 32. The mean of these areas is 32 divided by 8, which is 4: that is the variance. Its square root, the side of a square of area 4, is the standard deviation 2. The shortcut sum of x squared over n minus the mean squared gives 232 over 8 minus 25, which is also 4." loading="lazy">
  <figcaption>Variance is the mean of the squared distances from the mean; the standard deviation is the side of that mean square.</figcaption>
</figure>


## Bivariate data and correlation (2.02c-e, 2.05f-g)

- Interpret **scatter diagrams** and **regression lines**, including diagrams that show distinct sections of the population. You may add to a diagram but not draw a complete one; calculating a regression line equation is excluded.
- Interpret correlation informally, and remember **correlation does not imply causation**.
- **Correlation test:** H0: ρ = 0 against H1: ρ > 0, ρ < 0 (one-tailed) or ρ ≠ 0 (two-tailed), where ρ is the population product-moment correlation coefficient. Compare the given r with a given critical value, or use a p-value and the table of critical values OCR provides. Calculating r is excluded; the data may be assumed to come from a bivariate normal distribution.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--06-two-groups-one-line.webp" width="900" height="910" alt="A scatter diagram of journey time in minutes against distance in kilometres for 6 cyclists (circles) and 6 van drivers (squares). Both groups rise left to right but the cyclists form a steeper band. A single dashed line fitted to all 12 points predicts about 17 minutes for 4 km, but the cyclist took 21.5 minutes and the van driver 14 minutes, so the line matches neither. The better approach is a separate line for each type of courier." loading="lazy">
  <figcaption>One line through two distinct groups matches neither, so fit and use a separate line for each group.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--07-extrapolation.webp" width="900" height="818" alt="A graph of the regression line y = 78 minus 2.4x for resting heart rate against weekly training hours. The data covered 2 to 10 hours, shown as a shaded band; the line is solid there and dashed outside. At 5 hours the prediction is 66 beats per minute, which is interpolation and reasonably reliable. At 30 hours the line gives 6 beats per minute, which is not credible, so predicting outside the data range is unreliable. The intercept 78 at x = 0 also lies outside the data." loading="lazy">
  <figcaption>Predictions are reliable inside the range of the data and unreliable outside it.</figcaption>
</figure>


## Key terms

**Hypothesis test** — a formal procedure to assess whether sample evidence supports rejecting an assumption (H0) about a population. **Critical region** — the set of values that would lead to rejecting H0 at a given significance level. **One-tailed test** — tests for a change in one specified direction only. **Pre-release large data set** — a genuine dataset released in advance that some exam questions are set on directly.

## How Statistics is assessed alongside Pure Mathematics

Statistics is examined together with Pure Mathematics in component 02, so practise questions that combine a pure-maths skill (such as algebraic manipulation to find an unknown probability) inside a statistics context, since OCR's papers are not written to keep the two strands in fully separate questions. Build the habit of writing hypotheses formally in terms of a population parameter (p or mu) before attempting any calculation, since this is where marks are most often lost even by students who calculate correctly afterwards.

## Common mistakes

- Stating hypotheses in words instead of using p with a correct inequality, or getting a one-tailed test's direction wrong.
- Confusing sample and population when describing a sampling method.
- Choosing the wrong distribution (normal vs binomial) without checking the conditions each requires.
- Forgetting to interpret a hypothesis test conclusion in context — "reject H0" alone loses marks.
- Treating the pre-released large data set as optional rather than genuine exam content.

## Quick self-test

1. State the conditions required for a binomial model to apply.
2. A test asks whether a proportion has *decreased*. Is this one-tailed or two-tailed, and which direction?
3. Why must a hypothesis test conclusion be written in context?
4. Name three sampling methods named in this specification.
5. Why does OCR issue a pre-release large data set for Statistics specifically?
6. X ~ N(60, 16). Find P(X < 64).

**Answers:** 1. A fixed number of independent trials, each with the same two possible outcomes and the same probability of success. 2. One-tailed, testing H1: p < the stated value. 3. Because a numerically correct test with no contextual conclusion, or one that inverts "reject" and "do not reject," loses marks even when the calculation is right — OCR's mark schemes require conclusions written back into the original question's context. 4. Any three: random, systematic, stratified, opportunity, quota, cluster. 5. Because some data presentation and interpretation questions are set directly on it, so genuine familiarity with its specific variables and structure is required, not generic data-handling skill alone. 6. sigma = 4; z = (64 − 60) / 4 = 1; P(X < 64) = P(Z < 1) = 0.8413.

## Frequently asked questions

**How should you word the conclusion of a hypothesis test in OCR A Level Mathematics?**
Write it in context and show that it is not certain, for example "There is evidence at the 5% level to reject H₀. It is likely that the defect rate has increased." The specification lists a flat statement of change as fact as incorrect.

**How do you find a normal probability such as P(X > 182)?**
Standardise using z = (x − μ)/σ, taking the square root of the variance first, then use the standard normal table or a calculator. For X ~ N(175, 49), z = (182 − 175)/7 = 1 and P(Z > 1) = 0.1587.

**Do you have to calculate Pearson's correlation coefficient in OCR H240?**
No. Calculating r is excluded; you are given r and compare it with a critical value, or use a p-value and the table of critical values OCR provides.

**Why does the pre-release large data set matter for OCR A Level Mathematics statistics?**
Some data presentation and interpretation questions are set directly on it, so you need to have explored its variables and context before the exam.

## Related resources

- [Statistics study guide](/resources/ocr-a-level-mathematics-statistics/)
- [Statistics practice questions](/resources/ocr-a-level-mathematics-statistics-practice/)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-data-presentation-and-interpretation--05-sample-variability.webp" width="900" height="955" alt="Three dot plots of one-way commuting times in minutes. Analyst A's random sample of 8 (18, 22, 25, 27, 30, 35, 38, 41) has mean 29.5. Analyst B's random sample of 8 (15, 17, 19, 20, 21, 24, 26, 33) has mean 21.9. Together the 16 values have mean 25.7. Triangles mark each mean. Both samples came from a fair method, so the 7.6 minute gap is sampling variability; combining the samples, or using larger ones, reduces it." loading="lazy">
  <figcaption>Two fair random samples from the same firm give different means, so samples are only estimates.</figcaption>
</figure>


## Official syllabus

OCR, *AS and A Level Mathematics A (H230, H240) Specification*, Statistics —
[ocr.org.uk](https://www.ocr.org.uk/Images/308723-specification-accredited-a-level-gce-mathematics-a-h240.pdf).
