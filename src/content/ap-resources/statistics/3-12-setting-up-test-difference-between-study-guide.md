---
resourceId: "mb-ap-stats-3.12-study-guide"
title: "Setting Up a Test for the Difference Between Two Population Proportions: Study Guide (Statistics 3.12)"
description: "Learn to choose the two-sample z-test for p₁ − p₂, define both parameters in context, write the null and alternative hypotheses, and check the conditions using the pooled proportion."
course: "statistics"
unit: 3
topics: ["3.12"]
resourceType: "study-guide"
prerequisites:
  - "Setting up a one-sample z-test for a proportion: parameter, hypotheses and conditions (Topic 3.5)"
  - "Conditions for a two-sample z-interval for p₁ − p₂ (Topic 3.10)"
prerequisiteResources: ["mb-ap-stats-3.11-study-guide"]
learningObjectives:
  - "Recognise when a question calls for a two-sample z-test for the difference between two population proportions, and name it in full"
  - "Define p₁ and p₂ with the response variable and the two populations or treatments in context"
  - "Write the null hypothesis of no difference and a one-sided or two-sided alternative, in either the p₁ = p₂ or the p₁ − p₂ = 0 form"
  - "Calculate the combined (pooled) proportion and use it to check the normality condition"
  - "Check the randomization and 10% conditions, and explain when the 10% condition is not needed or a condition fails"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Only simple arithmetic is needed. Give the pooled proportion to 4 decimal places and the condition counts to 1 decimal place."
related: ["mb-ap-stats-3.12-revision-notes", "mb-ap-stats-3.12-practice", "mb-ap-stats-3.12-checklist"]
next: "mb-ap-stats-3.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Procedure: two-sample z-test for the difference between two population proportions."
  - "Define p₁ and p₂ as population (or treatment) proportions, naming the response and each population in context."
  - "H₀: p₁ = p₂ (or p₁ − p₂ = 0). Hₐ: p₁ > p₂, p₁ < p₂ or p₁ ≠ p₂, chosen from the question before seeing the data."
  - "Conditions: two independent random samples or a randomized experiment; each sample ≤ 10% of its population (sampling only); n₁p̂c, n₁(1 − p̂c), n₂p̂c and n₂(1 − p̂c) all at least 10."
  - "The pooled proportion p̂c = (x₁ + x₂)/(n₁ + n₂) is used because the test assumes H₀ is true, so both groups share one proportion."
faqs:
  - question: "Why does the test use the pooled proportion when the interval in Topic 3.10 did not?"
    answer: "A test is carried out assuming H₀ is true, and H₀ says p₁ = p₂. If the proportions are equal, both samples estimate the same value, so combining them gives the best estimate. An interval assumes nothing about the two proportions, so it uses p̂₁ and p̂₂ separately."
  - question: "Should I write H₀: p₁ = p₂ or H₀: p₁ − p₂ = 0?"
    answer: "Either is fine; they mean the same thing. Keep the alternative in the same form: Hₐ: p₁ > p₂ goes with H₀: p₁ = p₂, and Hₐ: p₁ − p₂ > 0 goes with H₀: p₁ − p₂ = 0."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## When the question compares two proportions

In Topic 3.11 you used a confidence interval to judge whether two population proportions differ. A **significance test** answers the same kind of question in a different way. It starts by assuming there is **no difference**, then asks how surprising the observed difference in sample proportions would be if that were true.

Use a **two-sample z-test for the difference between two population proportions** when all of these hold:

- There are **two groups**: two populations, each with its own random sample, or two treatments in a randomized experiment.
- The response is **categorical with two outcomes**, so each group gives a proportion of "successes".
- The question asks whether there is **convincing evidence of a difference** (or of a difference in a stated direction), not for an estimate of its size.

Compare the procedures you know so far:

| The question… | Procedure |
|---|---|
| estimates one proportion | one-sample z-interval for p |
| tests a claimed value of one proportion | one-sample z-test for p |
| estimates a difference between two proportions | two-sample z-interval for p₁ − p₂ |
| asks for evidence of a difference between two proportions | **two-sample z-test for p₁ − p₂** |

Write the name in full. "Two-sample z-test for the difference between two population proportions" is clear; "z-test" alone is not.

As in Topic 3.5, a full test has four parts: hypotheses, method and conditions, calculations, conclusion. This topic covers the first two. Topic 3.13 does the calculations and the conclusion.

## Defining the parameters

The hypotheses are about **two** parameters, so you define both. Each definition names:

- that it is a **true (population) proportion**;
- the **response variable** (what counts as a success);
- the **population** (or, in an experiment, the **treatment**) it belongs to.

Weak: "p₁ = proportion of Seabrook people, p₂ = proportion of Thornby people."
Strong: "p₁ = the true proportion of **all adults in Seabrook** who **can swim 50 metres**; p₂ = the true proportion of **all adults in Thornby** who can."

For an experiment, describe the treatment: "p₁ = the true proportion of learners like these who would **pass first time** after the **simulator course**."

Subscripts that match the groups (p_S and p_T) are often clearer than 1 and 2. Whatever you choose, keep it for the whole answer.

## Writing the hypotheses

The **null hypothesis** says there is no difference:

**H₀: p₁ = p₂**, or equivalently **H₀: p₁ − p₂ = 0**.

The **alternative hypothesis** says what you are looking for evidence of. Read it from the question's wording, **before** you look at the data.

| Question wording | Alternative (two equivalent forms) |
|---|---|
| "Is p₁ **greater**, higher, more likely…?" | Hₐ: p₁ > p₂, or Hₐ: p₁ − p₂ > 0 |
| "Is p₁ **less**, lower, reduced…?" | Hₐ: p₁ < p₂, or Hₐ: p₁ − p₂ < 0 |
| "Is there a **difference**? Does the treatment **affect**…?" | Hₐ: p₁ ≠ p₂, or Hₐ: p₁ − p₂ ≠ 0 |

Hypotheses are always about the parameters, p₁ and p₂, never the statistics p̂₁ and p̂₂. You already know the sample proportions; the test asks about the populations.

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="ha-title ha-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ha-title">The three possible alternative hypotheses for p₁ − p₂</title>
<desc id="ha-desc">Three horizontal number lines, one above another, each for the value of p₁ − p₂ and each with an open circle at 0, the value stated by H₀: p₁ − p₂ = 0 (labelled under the top circle). On the top line an arrow points right from 0, labelled "Hₐ: p₁ − p₂ &gt; 0 (p₁ greater)". On the middle line an arrow points left from 0, labelled "Hₐ: p₁ − p₂ &lt; 0 (p₁ less)". On the bottom line two arrows point away from 0 in both directions, labelled "Hₐ: p₁ − p₂ ≠ 0 (any difference)". Below the lines a scale runs from −0.2 to 0.2.</desc>
<defs>
<marker id="ha-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="55" x2="580" y2="55"/><line x1="60" y1="115" x2="580" y2="115"/><line x1="60" y1="175" x2="580" y2="175"/>
</g>
<g stroke="#1d2b44" stroke-width="5">
<line x1="330" y1="55" x2="565" y2="55" marker-end="url(#ha-arrow)"/>
<line x1="310" y1="115" x2="75" y2="115" marker-end="url(#ha-arrow)"/>
<line x1="330" y1="175" x2="565" y2="175" marker-end="url(#ha-arrow)"/>
<line x1="310" y1="175" x2="75" y2="175" marker-end="url(#ha-arrow)"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2.5">
<circle cx="320" cy="55" r="7"/><circle cx="320" cy="115" r="7"/><circle cx="320" cy="175" r="7"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="450" y="40" text-anchor="middle">Hₐ: p₁ − p₂ &gt; 0 (p₁ greater)</text>
<text x="190" y="100" text-anchor="middle">Hₐ: p₁ − p₂ &lt; 0 (p₁ less)</text>
<text x="320" y="160" text-anchor="middle">Hₐ: p₁ − p₂ ≠ 0 (any difference)</text>
<text x="320" y="82" text-anchor="middle" font-size="12">H₀: p₁ − p₂ = 0</text>
</g>
<line x1="60" y1="205" x2="580" y2="205" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="205" x2="60" y2="212"/><line x1="190" y1="205" x2="190" y2="212"/><line x1="320" y1="205" x2="320" y2="212"/><line x1="450" y1="205" x2="450" y2="212"/><line x1="580" y1="205" x2="580" y2="212"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="228">−0.2</text><text x="190" y="228">−0.1</text><text x="320" y="228">0</text><text x="450" y="228">0.1</text><text x="580" y="228">0.2</text>
<text x="320" y="246" font-size="13">Possible values of p₁ − p₂</text>
</g>
</svg>
<figcaption>Figure 1. Every test of two proportions starts from H₀: p₁ − p₂ = 0 (open circle). The alternative points to the values you are looking for evidence of: above 0, below 0, or either side. The direction comes from the question, not from the sample results.</figcaption>
</figure>

## The pooled proportion

The test is calculated **assuming H₀ is true**. If p₁ = p₂, both samples are estimating the same proportion, so the best estimate of it combines them. This is the **combined (pooled) proportion**:

**p̂c = (x₁ + x₂) / (n₁ + n₂) = (n₁p̂₁ + n₂p̂₂) / (n₁ + n₂)**

Here x₁ and x₂ are the numbers of successes. In words: total successes divided by total individuals. Do not simply average p̂₁ and p̂₂ unless n₁ = n₂.

## The three conditions

| Condition | What to check | Notes |
|---|---|---|
| Randomization | Two **independent random samples**, one from each population, **or** a **randomized experiment**. | Independent means the two samples do not affect each other: no person in both, no pairing. |
| 10% | When sampling without replacement: n₁ ≤ 10% of N₁ **and** n₂ ≤ 10% of N₂. | **Not needed** for a randomized experiment. |
| Normality | n₁p̂c, n₁(1 − p̂c), n₂p̂c and n₂(1 − p̂c) are **all at least 10**. | Uses the **pooled** proportion, because the test assumes H₀ is true. |

The normality check is the one that differs from Topic 3.10. For an interval you checked the **observed** successes and failures in each group. For a test you check **expected** counts based on p̂c. The values need not be whole numbers; 44.4 is fine.

Show the numbers for every condition. "Conditions are met" with no evidence earns nothing.

## Worked example 1: independent random samples, one-sided

**Context (fictional).** A swimming charity compares two coastal towns, Seabrook (about 8,000 adults) and Thornby (about 11,000 adults). Its question: *Is the proportion of adults who can swim 50 metres lower in Thornby than in Seabrook?* It takes independent random samples: 124 of 160 Seabrook adults and 136 of 200 Thornby adults can swim 50 metres. Set up the test at α = 0.05.

**1. Hypotheses.** Let p_S = the true proportion of all Seabrook adults who can swim 50 metres, and p_T = the true proportion of all Thornby adults who can.

- H₀: p_S = p_T
- Hₐ: p_S > p_T (the question asks whether Thornby's proportion is **lower**)
- Equivalent form: H₀: p_S − p_T = 0 and Hₐ: p_S − p_T > 0.
- α = 0.05

**2. Method.** Two-sample z-test for the difference between two population proportions.

**3. Conditions.**

1. **Randomization:** independent random samples of adults from each town.
2. **10%:** 160 ≤ 10% of 8,000 = 800, and 200 ≤ 10% of 11,000 = 1,100.
3. **Normality:** p̂c = (124 + 136) ÷ (160 + 200) = 260 ÷ 360 ≈ 0.7222. Then n_Sp̂c ≈ 115.6, n_S(1 − p̂c) ≈ 44.4, n_Tp̂c ≈ 144.4 and n_T(1 − p̂c) ≈ 55.6. All four are at least 10.

All three conditions are met, so the test can go ahead (Topic 3.13).

**Check.** The sample proportions are 0.775 and 0.68, but they do not appear in the hypotheses. The direction came from the word "lower" in the question. If you prefer p_T first, write Hₐ: p_T < p_S; it is the same hypothesis.

## Worked example 2: a randomized experiment, two-sided

**Context (fictional).** A driving school has 180 learner drivers who agree to take part in a study. It randomly assigns 90 to a course that includes simulator lessons and 90 to its standard course. Of the simulator group, 58 pass their test at the first attempt; of the standard group, 49 do. The question: *Is there a difference in first-attempt pass rates between the two courses?* Set up the test at α = 0.05.

**1. Hypotheses.** Let p_Sim = the true proportion of learners like these who would pass at the first attempt after the simulator course, and p_Std = the true proportion who would pass after the standard course.

- H₀: p_Sim − p_Std = 0
- Hₐ: p_Sim − p_Std ≠ 0 (the question asks about **a difference**, with no direction)
- α = 0.05

**2. Method.** Two-sample z-test for the difference between two population proportions.

**3. Conditions.**

1. **Randomization:** the two courses were randomly assigned to the learners.
2. **10%:** not needed. The learners are volunteers in an experiment, not a random sample from a population.
3. **Normality:** p̂c = (58 + 49) ÷ 180 = 107 ÷ 180 ≈ 0.5944. Both groups have n = 90, so the counts are 90 × 0.5944 ≈ 53.5 successes and 90 × 0.4056 ≈ 36.5 failures in each group. All at least 10.

**Check.** Because the learners volunteered, any conclusion applies to learners like these, not to all learners. Because the courses were randomly assigned, a significant result could be read as cause and effect.

## Worked example 3: when the two-sample z-test is not appropriate

**(a) Expected counts too small (fictional).** A consumer group selects random samples of 120 bulbs from each of two brands' large production runs. Within a year, 4 Brand A bulbs and 9 Brand B bulbs fail. Is the normality condition met for a test of H₀: p_A = p_B?

p̂c = (4 + 9) ÷ 240 = 13 ÷ 240 ≈ 0.0542. Then n_Ap̂c = n_Bp̂c = 120 × 13/240 = 6.5, which is **less than 10**. The normality condition fails. The sampling distribution of p̂_A − p̂_B may not be approximately normal, so a z-test is not appropriate. Say so, and do not carry on with the calculation. Larger samples would be needed.

**(b) Samples not independent (fictional).** A college asks the same 150 students, before and after a careers talk, whether they plan to apply for an apprenticeship. It wants to compare the "before" and "after" proportions. The two sets of answers come from the **same** students, so they are not independent samples: a student's "after" answer is linked to their "before" answer. The randomization condition for a two-sample z-test is not met. A method for paired data would be needed, and that is beyond this topic.

## Common misconceptions

- **Writing hypotheses with p̂₁ and p̂₂.** Hypotheses are about the population proportions.
- **Choosing Hₐ from the data.** "p̂₁ is bigger, so Hₐ: p₁ > p₂" is wrong. The direction comes from the question, decided in advance.
- **Putting "≠" or "<" in H₀.** The null hypothesis is always no difference.
- **Defining the parameters with the samples.** "The proportion of the 160 adults sampled" is a statistic.
- **Checking normality with observed counts.** For the test, use p̂c: n₁p̂c, n₁(1 − p̂c), n₂p̂c and n₂(1 − p̂c).
- **Averaging p̂₁ and p̂₂ to get p̂c.** Add the successes and add the sample sizes.
- **Checking only two counts, or using n ≥ 30.** Check all four counts against 10.
- **Applying the 10% condition to an experiment.** It is only for sampling without replacement.
- **Treating "before and after" data on the same people as two independent samples.**

## Where this leads

Next, Topic 3.13 uses the pooled proportion to calculate the test statistic and p-value and to write the conclusion: see [Carrying Out a Test for the Difference Between Two Population Proportions](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-checklist/). To compare this with the confidence-interval approach, revisit [Topic 3.11](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/); for the one-proportion set-up, see [Topic 3.5](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/).
