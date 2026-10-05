---
resourceId: "mb-ap-stats-3.5-study-guide"
title: "Setting Up a Test for a Population Proportion: Study Guide (Statistics 3.5)"
description: "Learn to set up a one-sample z-test for a population proportion: define the parameter in context, write the null and alternative hypotheses, and verify the three conditions."
course: "statistics"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "The sampling distribution of a sample proportion and the large-counts idea (Topic 3.2)"
  - "Constructing and interpreting a confidence interval for a population proportion (Topics 3.3 and 3.4)"
prerequisiteResources: ["mb-ap-stats-3.4-study-guide"]
learningObjectives:
  - "Decide when a one-sample z-test for a population proportion is the right procedure, and name it"
  - "Define the parameter p in context, naming the population and the response variable"
  - "Write the null and alternative hypotheses in symbols, and choose a one-sided or two-sided alternative from the question"
  - "Verify the random, 10% and normality conditions in context, using the null value p₀ for the normality check"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Only simple multiplication is needed in this topic. Write each condition check as a calculation with its result."
related: ["mb-ap-stats-3.5-revision-notes", "mb-ap-stats-3.5-practice", "mb-ap-stats-3.5-checklist"]
next: "mb-ap-stats-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A hypothesis test uses sample data to decide about a claimed value of a population parameter."
  - "For one population and a yes/no variable, the procedure is a one-sample z-test for a population proportion."
  - "H₀: p = p₀ is the status quo; Hₐ (p > p₀, p < p₀ or p ≠ p₀) is the claim you are collecting evidence for."
  - "Hypotheses are about the parameter p, never the statistic p̂, and are chosen before you look at the data."
  - "Conditions: a random sample; n ≤ 0.10N when sampling without replacement; np₀ ≥ 10 and n(1 − p₀) ≥ 10."
faqs:
  - question: "Why does the normality check use p₀ here, when the confidence interval used p̂?"
    answer: "A test works out what would happen if the null hypothesis were true. So the sampling distribution is centred at p₀, and the expected counts np₀ and n(1 − p₀) are what must be at least 10. An interval has no claimed value, so it uses the observed counts."
  - question: "The claim says 'at least 90%'. Should H₀ be p ≥ 0.90?"
    answer: "You may see it written that way, but the test is carried out at the boundary value. Write H₀: p = 0.90 and Hₐ: p < 0.90."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a hypothesis test does

In Topics 3.3 and 3.4 you used a confidence interval to **estimate** a population proportion. A **hypothesis test** answers a different kind of question. Someone has made a claim about the value of a population parameter. You collect a random sample and ask: do these data give **convincing evidence** against that claim?

A test always works the same way. You start by assuming the claimed value is true. Then you ask how surprising your sample result would be if it were. If the result would be very surprising, you have evidence against the claim.

A full test has four parts:

1. **State** the parameter and the hypotheses.
2. **Plan**: name the procedure and check its conditions.
3. **Do**: calculate the test statistic and the p-value.
4. **Conclude** in context.

This topic is about parts 1 and 2: setting the test up correctly. Topic 3.6 explains what a p-value means, and Topic 3.7 does the calculations and the conclusion. Many marks are lost at the set-up stage, so it is worth learning on its own.

## Choosing the procedure

For this topic the procedure is the **one-sample z-test for a population proportion**. Use it when all of these are true:

- There is **one population** (or one process), and one random sample from it.
- The variable is **categorical with two outcomes**. You count "successes", such as "composts food waste: yes or no".
- The question gives a **specific claimed value**, p₀, and asks whether the data provide evidence against it.

If the question asks you to *estimate* the proportion, use a confidence interval instead. If it compares *two* populations or two treatments, you need a two-sample procedure, which comes later in Unit 3. If the variable has more than two categories, you need a chi-square procedure, also later in the unit.

Write the name in full on an answer. "One-sample z-test for a population proportion" is clear. "z-test" alone may not be.

## Defining the parameter

The parameter is the unknown population value that the hypotheses are about. For this test it is **p, the true proportion** of the population with the outcome of interest. A good definition names three things:

- that it is the **true (population) proportion**,
- the **population**, and
- the **response variable** (what counts as a success).

Compare these definitions for a survey of households in a town:

| Definition | Verdict |
|---|---|
| "p = proportion" | Too vague: proportion of whom, doing what? |
| "p = the proportion of the 150 sampled households that compost" | Wrong: that is the statistic p̂, which we already know. |
| "p = the true proportion of all households in the town that compost food waste" | Correct: parameter, population and response variable are all named. |

## Writing the hypotheses

There are always two hypotheses.

- The **null hypothesis, H₀**, is the status quo. It is the claimed value, which we assume is correct unless the data give convincing evidence otherwise. It always contains an equals sign: **H₀: p = p₀**, where p₀ is the claimed value.
- The **alternative hypothesis, Hₐ**, is what the researcher suspects or wants to find evidence for. It never contains an equals sign.

There are three possible alternatives. Choose by reading the question's wording.

| Wording in the question | Alternative | Type |
|---|---|---|
| "more than", "has increased", "higher than claimed" | Hₐ: p > p₀ | one-sided |
| "less than", "has fallen", "fewer than claimed" | Hₐ: p < p₀ | one-sided |
| "different from", "has changed", "is the claim wrong?" | Hₐ: p ≠ p₀ | two-sided |

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ha-title ha-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ha-title">The three possible alternative hypotheses for a population proportion</title>
<desc id="ha-desc">Three horizontal number lines, each with the null value p zero marked in the middle. In the first, labelled H a: p greater than p zero, one-sided, a thick arrow points right from p zero. In the second, labelled H a: p less than p zero, one-sided, a thick arrow points left from p zero. In the third, labelled H a: p not equal to p zero, two-sided, thick arrows point both left and right from p zero.</desc>
<defs>
<marker id="ha-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<g font-size="14" fill="#1d2b44">
<text x="20" y="64">Hₐ: p &gt; p₀</text><text x="20" y="82" font-size="12">one-sided</text>
<text x="20" y="154">Hₐ: p &lt; p₀</text><text x="20" y="172" font-size="12">one-sided</text>
<text x="20" y="244">Hₐ: p ≠ p₀</text><text x="20" y="262" font-size="12">two-sided</text>
</g>
<g stroke="#1d2b44" stroke-width="2">
<line x1="180" y1="70" x2="620" y2="70"/><line x1="400" y1="62" x2="400" y2="78"/>
<line x1="180" y1="160" x2="620" y2="160"/><line x1="400" y1="152" x2="400" y2="168"/>
<line x1="180" y1="250" x2="620" y2="250"/><line x1="400" y1="242" x2="400" y2="258"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="400" y="96">p₀</text><text x="400" y="186">p₀</text><text x="400" y="276">p₀</text>
</g>
<g stroke="#1d2b44" stroke-width="5" marker-end="url(#ha-arrow)">
<line x1="412" y1="45" x2="590" y2="45"/>
<line x1="388" y1="135" x2="210" y2="135"/>
<line x1="412" y1="225" x2="590" y2="225"/>
<line x1="388" y1="225" x2="210" y2="225"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="500" y="32">evidence for Hₐ lies to the right</text>
<text x="300" y="122">evidence for Hₐ lies to the left</text>
<text x="400" y="212">evidence for Hₐ lies on either side</text>
</g>
</svg>
<figcaption>Figure 1. The direction of Hₐ says which sample results count as evidence against H₀: p = p₀. A one-sided alternative points one way; a two-sided alternative points both ways.</figcaption>
</figure>

Four rules keep hypotheses correct:

1. **Use p, never p̂.** The hypotheses are about the population. You already know p̂ exactly, so there is nothing to test about it.
2. **Use the claimed number for p₀**, not your sample result.
3. **Decide the direction before you look at the data.** The question, not the sample, tells you the direction. Choosing Hₐ: p > p₀ *because* your p̂ came out above p₀ is not allowed.
4. **Boundary claims.** Some claims are inequalities. A company may say "at least 90% of our batteries last two years", and a reviewer suspects fewer. You may see H₀ written as p ≥ 0.90, but the test is carried out at the boundary. In this course write **H₀: p = 0.90** and **Hₐ: p < 0.90**. In the same way, "at most 5% of parcels are damaged", with a suspicion of more, gives H₀: p = 0.05 and Hₐ: p > 0.05.

## The three conditions

The z-test uses a normal model for the sampling distribution of p̂. It assumes H₀ is true, so that model is centred at p₀. Check three conditions, each **in context** and with numbers.

| Condition | What to check | Why it matters |
|---|---|---|
| Random | The data come from a random sample of the population | Without randomness, the sample may be biased and the normal model does not describe it |
| 10% | When sampling without replacement, n ≤ 0.10N, where N is the population size | Keeps the trials close enough to independent for the standard deviation formula to work |
| Normality | **Expected** successes np₀ ≥ 10 and **expected** failures n(1 − p₀) ≥ 10 | Makes the sampling distribution of p̂ approximately normal when H₀ is true |

Two points catch many students:

- The normality check for a **test** uses **p₀**. For a confidence interval you used the observed counts, np̂ and n(1 − p̂). The test assumes H₀ is true, so it uses the counts you would expect under H₀.
- "SRS" or "random: ✓" is not a check. Say what was random: "The 150 households were selected at random from the town's register."

Rules such as "n ≥ 30" or "the population is normal" do not apply to proportions. Do not use them here.

## Worked example 1: a one-sided test that is ready to go

**Question.** The council of the fictional town of Oakhaven says that 40% of the town's households compost their food waste. An environmental group believes the proportion is now higher. It selects a random sample of 150 of the town's 9,200 households, and 71 of them compost. Set up a significance test. Do not carry it out.

**State.**

- Parameter: p = the true proportion of all households in Oakhaven that compost their food waste.
- H₀: p = 0.40 (the council's figure is correct).
- Hₐ: p > 0.40 (the group believes the proportion is higher).

The direction comes from "believes the proportion is now higher", not from the sample.

**Plan.** Procedure: one-sample z-test for a population proportion.

1. **Random:** the 150 households were a random sample of Oakhaven households. ✓
2. **10%:** sampling is without replacement, and 150 ≤ 0.10 × 9,200 = 920. ✓
3. **Normality:** np₀ = 150 × 0.40 = 60 ≥ 10 and n(1 − p₀) = 150 × 0.60 = 90 ≥ 10. ✓

All three conditions are met, so the z-test is appropriate.

**Check.** The sample proportion p̂ = 71/150 ≈ 0.473 was not used anywhere in the set-up. It is needed only in the "Do" step (Topic 3.7). The 10% condition would still hold for any town with at least 1,500 households.

## Worked example 2: a two-sided test where a condition fails

**Question.** The fictional courier Swiftpost advertises that 92% of its parcels arrive the next day. A consumer magazine wants to know whether the true figure is different from 92%. It tracks a random sample of 80 parcels from the 25,000 that Swiftpost sent in one month.

(a) Write the parameter and hypotheses.
(b) Check the conditions for a one-sample z-test for a population proportion.
(c) What is the smallest sample size that would meet the normality condition?

**(a)** p = the true proportion of all Swiftpost parcels sent that month that arrived the next day.
H₀: p = 0.92. Hₐ: p ≠ 0.92. The magazine asks whether the figure is "different", in either direction, so the test is **two-sided**.

**(b)**

1. **Random:** the 80 parcels were a random sample of that month's parcels. ✓
2. **10%:** 80 ≤ 0.10 × 25,000 = 2,500. ✓
3. **Normality:** np₀ = 80 × 0.92 = 73.6 ≥ 10, but n(1 − p₀) = 80 × 0.08 = **6.4 < 10**. ✗

The expected number of late parcels is too small. The sampling distribution of p̂ would be skewed, so a normal model is not appropriate, and the z-test should not be used with this sample.

**(c)** We need n × 0.08 ≥ 10, so n ≥ 10 ÷ 0.08 = 125. With n = 125: np₀ = 115 and n(1 − p₀) = 10, so both counts are at least 10. The 10% condition still holds, since 125 ≤ 2,500. The magazine should track **at least 125** randomly chosen parcels.

**Check.** With n = 124, n(1 − p₀) = 9.92, which is below 10. So 125 really is the smallest sample size that works.

## Common misconceptions

- **Writing hypotheses about p̂.** "H₀: p̂ = 0.40" tests something you already know. Hypotheses are about the parameter p.
- **Putting the claim you want to prove in H₀.** The researcher's suspicion goes in Hₐ. H₀ is the status quo, with an equals sign.
- **Choosing the direction from the data.** If the question says "different", the test is two-sided even if p̂ is above p₀.
- **Using p̂ in the normality check.** For a test, use np₀ and n(1 − p₀).
- **Checking "n ≥ 30" or "the population is normal".** Neither is a condition for proportions.
- **Vague parameter.** "p = proportion" or "p = the probability" earns nothing. Name the population and what counts as a success.
- **Writing "SRS ✓" with no context.** Say what was randomly selected, from what.
- **Forgetting that the 10% condition applies only when sampling without replacement**, or comparing n with 10% of the *sample* instead of the population.

## Where this leads

Once a test is set up, the next question is how surprising the sample result would be if H₀ were true. That is what a p-value measures, in [Topic 3.6, p-Values](/advanced-course-resources/statistics/3-6-p-values-study-guide/). Topic 3.7 then calculates the test statistic and draws a conclusion. First, try the [practice questions](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-practice/), then use the [revision notes](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-checklist/) to consolidate. For the interval method this topic builds on, see the [Topic 3.4 study guide](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/).
