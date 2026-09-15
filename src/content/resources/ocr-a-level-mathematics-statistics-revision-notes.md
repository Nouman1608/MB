---
title: "OCR A Level Mathematics: Statistics — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Statistics"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "For first assessment 2018"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
description: "Condensed recall notes on sampling, data presentation including bivariate data, probability, statistical distributions and hypothesis testing (including the correlation test), for OCR A Level Mathematics A (H240), the Statistics strand."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Statistics study guide](/resources/ocr-a-level-mathematics-statistics/).

## Sampling methods

Random, systematic, stratified, opportunity, quota, cluster. Practise **justifying** a chosen method against the specific investigation described — not just naming it.

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

## Recognising which distribution to use

The specification expects a deliberate check, not a guess, when choosing between the binomial and normal models. A binomial model fits a **fixed number of discrete trials** with two outcomes and constant probability (e.g. counting defective items in a sample). A normal model fits **continuous data** clustering symmetrically around a mean (e.g. heights, reaction times, exam scores). A binomial distribution with large n can be approximated by a normal distribution, and this specification requires you to understand that (2.04h) and to know and use μ = np and σ² = npq when choosing the normal model to use as the approximation (2.04d). What is excluded is questions explicitly requiring calculations using the normal approximation to the binomial (2.04h), and the use of the normal approximation in a binomial hypothesis test (2.05c).

## Data presentation and interpretation

Interpreting standard graphical and numerical summaries (mean, median, standard deviation, quartiles, box plots, histograms) of real, often large, data sets is assessed alongside the calculation-heavy content. Since some questions are set directly on OCR's pre-released large data set, revision cannot be purely abstract -- practise summarising and interpreting the actual released data set's specific variables and context, not just generic data-handling technique.

## Bivariate data and correlation (2.02c-e, 2.05f-g)

- Interpret **scatter diagrams** and **regression lines**, including diagrams that show distinct sections of the population. You may add to a diagram but not draw a complete one; calculating a regression line equation is excluded.
- Interpret correlation informally, and remember **correlation does not imply causation**.
- **Correlation test:** H0: ρ = 0 against H1: ρ > 0, ρ < 0 (one-tailed) or ρ ≠ 0 (two-tailed), where ρ is the population product-moment correlation coefficient. Compare the given r with a given critical value, or use a p-value and the table of critical values OCR provides. Calculating r is excluded; the data may be assumed to come from a bivariate normal distribution.

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

## Related resources

- [Statistics study guide](/resources/ocr-a-level-mathematics-statistics/)
- [Statistics practice questions](/resources/ocr-a-level-mathematics-statistics-practice/)

## Official syllabus

OCR, *AS and A Level Mathematics A (H230, H240) Specification*, Statistics —
[ocr.org.uk](https://www.ocr.org.uk/Images/308723-specification-accredited-a-level-gce-mathematics-a-h240.pdf).
