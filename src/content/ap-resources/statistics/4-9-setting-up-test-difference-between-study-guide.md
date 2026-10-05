---
resourceId: "mb-ap-stats-4.9-study-guide"
title: "Setting Up a Test for the Difference Between Two Population Means: Study Guide (Statistics 4.9)"
description: "Learn to set up a two-sample t-test: recognise independent samples, define μ₁ and μ₂ in context, write the null and alternative hypotheses, and verify the three conditions."
course: "statistics"
unit: 4
topics: ["4.9"]
resourceType: "study-guide"
prerequisites:
  - "Setting up a one-sample t-test for a mean or a mean difference (Topic 4.4)"
  - "The two-sample t-interval and its conditions (Topic 4.7)"
  - "The 1.5 × IQR rule for outliers (Topic 1.7)"
prerequisiteResources: ["mb-ap-stats-4.8-study-guide"]
learningObjectives:
  - "Decide when a two-sample t-test for a difference between two population means is the right procedure, and tell it apart from a paired test or a test for proportions"
  - "Define the two population means in context, naming the parameter, the response variable with units and each population or treatment"
  - "Write the null hypothesis and a one-sided or two-sided alternative in either equivalent form, keeping the order of subtraction consistent"
  - "Verify the randomization, 10% and sample data conditions for both groups, and say which apply to a randomized experiment"
  - "Explain why a test should not go ahead when a condition fails, and what could be done instead"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Only 10% checks, quartiles and fences are needed in this topic. Use one-variable statistics for the quartiles of each sample, then apply the 1.5 × IQR rule."
related: ["mb-ap-stats-4.9-revision-notes", "mb-ap-stats-4.9-practice", "mb-ap-stats-4.9-checklist"]
next: "mb-ap-stats-4.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Two independent groups, a quantitative response, and a question about whether the population means differ: use a two-sample t-test for μ₁ − μ₂."
  - "H₀: μ₁ − μ₂ = 0 (or μ₁ = μ₂). Hₐ: μ₁ − μ₂ < 0, > 0 or ≠ 0, chosen from the question before you see the data."
  - "Define μ₁ and μ₂ in context: the mean of which variable, in which units, for which population or treatment."
  - "Conditions: two independent random samples or a randomized experiment; n₁ ≤ 10% of N₁ and n₂ ≤ 10% of N₂ when sampling without replacement; both n ≥ 30, or populations approximately normal, or both samples free from strong skewness and outliers."
  - "Paired data are not two independent samples. Use the one-sample t-test on the differences instead."
faqs:
  - question: "Should I write H₀: μ₁ = μ₂ or H₀: μ₁ − μ₂ = 0?"
    answer: "Either is correct; they say the same thing. The difference form is useful because it shows the order of subtraction, which then fixes the direction of a one-sided alternative."
  - question: "One sample has 50 values and the other has 20. Which samples do I check for skewness?"
    answer: "Because one sample has fewer than 30 values and the populations are not known to be normal, the course asks you to check that both sample distributions are free from strong skewness and outliers. Show a graph or a fence calculation for each."
  - question: "Is a two-sample t-test the same as a pooled t-test?"
    answer: "No. The course's two-sample t-test does not assume the two population standard deviations are equal. On a calculator, choose the option that does not pool."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From an interval to a test

In Topics 4.7 and 4.8 you estimated a difference in means with a two-sample t-interval. Sometimes the question is not "how big is the difference?" but "is there convincing evidence of a difference at all?" That question calls for a **significance test**.

A test for μ₁ − μ₂ has the same four parts as every test in the course:

1. **State:** define the parameters and write the hypotheses.
2. **Plan:** name the procedure and check the conditions.
3. **Do:** calculate the test statistic and p-value.
4. **Conclude:** compare the p-value with α and answer the question in context.

This topic covers **State** and **Plan**. Topic 4.10 carries out the Do and Conclude steps. A careful set-up is worth the effort: if the hypotheses are about the wrong thing, or a condition fails, no calculation can rescue the test.

## Choosing the procedure

Use a **two-sample t-test for a difference between two population means** when all of these are true:

- the response variable is **quantitative** (a time, a mass, a score);
- you are comparing **two groups**: two populations, or two treatments;
- the two samples are **independent**: no value in one group is linked to a particular value in the other; and
- the question asks whether the data give **evidence** of a difference, not for an estimate of its size.

Why "t"? The population standard deviations σ₁ and σ₂ are almost never known. The test replaces them with the sample standard deviations s₁ and s₂, and that extra uncertainty means the test statistic follows a t-distribution, not the standard normal.

The most common wrong turn is **paired data**. If each value in one group is matched to one value in the other for a real reason (the same person measured twice, two halves of the same leaf, twins), the samples are not independent. Then you take the differences within each pair and use a one-sample t-test for the mean difference μd, as in Topic 4.4.

Figure 1 sums up the decision.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="choose-title choose-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="choose-title">Choosing a test when the question is about means</title>
<desc id="choose-desc">A flow chart with three question boxes stacked on the left, joined by downward arrows labelled yes, or for the third question no. Question 1: Is the response variable quantitative? An arrow labelled no leads right to a box: use a proportion procedure, Unit 3. Question 2: Are you comparing two groups? An arrow labelled no leads right to a box: one-sample t-test for mu, Topic 4.4. Question 3: Is each value in one group linked to one value in the other? An arrow labelled yes leads right to a box: paired data, one-sample t-test for mu d on the differences, Topic 4.4. An arrow labelled no, independent groups, leads down from question 3 to the final box, drawn with a thick border: two-sample t-test for mu 1 minus mu 2, this topic.</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<defs><marker id="arr49" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<rect x="20" y="16" width="290" height="46" rx="6"/>
<rect x="20" y="100" width="290" height="46" rx="6"/>
<rect x="20" y="184" width="290" height="46" rx="6"/>
<rect x="380" y="16" width="240" height="46" rx="6" stroke-dasharray="5 4"/>
<rect x="380" y="100" width="240" height="46" rx="6" stroke-dasharray="5 4"/>
<rect x="380" y="184" width="240" height="46" rx="6" stroke-dasharray="5 4"/>
<rect x="20" y="268" width="290" height="46" rx="6" stroke-width="3.5"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="34" y="44">1. Is the response quantitative?</text>
<text x="34" y="128">2. Are you comparing two groups?</text>
<text x="34" y="203">3. Is each value in one group linked</text>
<text x="34" y="220">to one value in the other?</text>
<text x="34" y="287" font-weight="bold">Two-sample t-test for μ₁ − μ₂</text>
<text x="34" y="304">(this topic)</text>
<text x="392" y="35">Not a means test: use a</text>
<text x="392" y="52">proportion procedure (Unit 3)</text>
<text x="392" y="119">One-sample t-test for μ</text>
<text x="392" y="136">(Topic 4.4)</text>
<text x="392" y="203">Paired: one-sample t-test for μd</text>
<text x="392" y="220">on the differences (Topic 4.4)</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#arr49)">
<line x1="310" y1="39" x2="376" y2="39"/>
<line x1="310" y1="123" x2="376" y2="123"/>
<line x1="310" y1="207" x2="376" y2="207"/>
<line x1="165" y1="62" x2="165" y2="96"/>
<line x1="165" y1="146" x2="165" y2="180"/>
<line x1="165" y1="230" x2="165" y2="264"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="330" y="33">no</text><text x="330" y="117">no</text><text x="328" y="201">yes</text>
<text x="173" y="84">yes</text><text x="173" y="168">yes</text><text x="173" y="252">no: independent groups</text>
</g>
</svg>
<figcaption>Figure 1. Choosing a test for a question about means. Follow the questions down; a dashed box means a different procedure. Only independent groups lead to the two-sample t-test (thick border).</figcaption>
</figure>

## Defining the parameters

The hypotheses are statements about **population** means, so define them first. A full definition names three things:

1. the **parameter**: a population (or true) mean;
2. the **response variable**, with units; and
3. the **population** or **treatment** in context.

Template: *μ₁ = the mean [response, units] of all [population 1]; μ₂ = the mean [response, units] of all [population 2].* For an experiment: *μ₁ = the true mean [response] for [subjects like these] who receive treatment 1.*

| Definition | Verdict |
|---|---|
| "μ₁ and μ₂ are the means of the two groups" | Too vague: means of what, for whom? |
| "μ₁ = the mean of the 45 Hillcrest students sampled" | Wrong: that is the statistic x̄₁, which you already know |
| "μ_H = the mean weekly hours of paid work of all first-year students at Hillcrest campus" | Correct: parameter, variable, units, population |

Use subscripts that remind you of the groups (μ_H, μ_R) rather than plain 1 and 2. It makes the order of subtraction harder to mix up.

## Writing the hypotheses

The null hypothesis says there is **no difference** between the population means. You may write it either way:

**H₀: μ₁ − μ₂ = 0** or **H₀: μ₁ = μ₂**

The alternative hypothesis comes from the question's wording:

| Wording in the question | Hₐ (two equivalent forms) |
|---|---|
| "group 1 has a greater mean", "is higher", "takes longer" | μ₁ − μ₂ > 0, or μ₁ > μ₂ |
| "group 1 has a smaller mean", "is lower", "reduces" | μ₁ − μ₂ < 0, or μ₁ < μ₂ |
| "differs", "is different", "has an effect", "changes" | μ₁ − μ₂ ≠ 0, or μ₁ ≠ μ₂ |

Four rules keep the hypotheses honest:

1. Use **μ**, never x̄. The sample means are known numbers; there is nothing to test about them.
2. Choose Hₐ **before** looking at the data. If the question says "differs", the test is two-sided even when one sample mean is clearly larger.
3. **Keep the order of subtraction.** "Riverside students work more" is μ_R − μ_H > 0, or equally μ_H − μ_R < 0. Both are right; mixing the two orders in one answer is not.
4. Choose the **significance level α** at the start too (often 0.05) if the question does not give one.

## The three conditions

These are the same three conditions you checked for the two-sample t-interval in Topic 4.7. Each must hold for **both** groups.

| Condition | What to check | Why it matters |
|---|---|---|
| Randomization | Two **independent random samples**, or a **randomized experiment** | Makes the samples representative and the groups independent; without it the t-distribution does not describe the test statistic |
| 10% | n₁ ≤ 10% of N₁ **and** n₂ ≤ 10% of N₂ | Only when sampling **without replacement**. Keeps the observations within each sample close to independent. Not needed for a randomized experiment |
| Sample data | Both n₁ ≥ 30 and n₂ ≥ 30; **or** both populations are stated to be approximately normal; **or**, if either sample is smaller than 30, **both** sample distributions are free from strong skewness and outliers | Makes the sampling distribution of x̄₁ − x̄₂ close enough to normal for the t-test |

Two points cause most errors.

- **Small samples are not automatically a failure.** "n < 30, so the condition fails" is wrong. Look at the data, with a dot plot or the 1.5 × IQR rule. A small sample with no strong skewness and no outliers is fine.
- **Add nothing up.** The condition is about each sample, so n₁ + n₂ ≥ 30 and 10% of the combined populations are not valid checks.

## Worked example 1: two random samples, one-sided

**Context.** A fictional university has two campuses. Hillcrest has 3,200 first-year students and Riverside has 2,100. A student newspaper believes that Riverside first-years spend more hours per week in paid work. It selects a random sample of 45 Hillcrest first-years and, separately, a random sample of 38 Riverside first-years, and asks each how many hours of paid work they did last week. Many students reported 0 hours, so both samples are strongly skewed to the right.

**Question.** Set up a test of the newspaper's belief at α = 0.05. Do not carry it out.

**State.**

- μ_R = the mean number of hours of paid work last week for all first-year students at Riverside.
- μ_H = the mean number of hours of paid work last week for all first-year students at Hillcrest.
- H₀: μ_R − μ_H = 0. Hₐ: μ_R − μ_H > 0. The direction comes from "Riverside first-years spend **more** hours".

**Plan.** Two-sample t-test for μ_R − μ_H: the response is quantitative, there are two campuses, and the two samples were selected separately, so they are independent.

1. **Randomization:** two independent random samples, one from each campus. ✓
2. **10%:** 45 ≤ 10% of 3,200 = 320 and 38 ≤ 10% of 2,100 = 210. ✓
3. **Sample data:** n_R = 38 ≥ 30 and n_H = 45 ≥ 30. ✓ The strong right skew does not matter here, because both samples are large enough for the sampling distribution of x̄_R − x̄_H to be approximately normal.

All three conditions are met, so a two-sample t-test is appropriate.

**Check.** The sample means were not needed. They come in at the Do step (Topic 4.10). If you had written the hypotheses as μ_H − μ_R = 0 and μ_H − μ_R < 0, that is equally correct.

## Worked example 2: a randomized experiment, two-sided

**Context.** A fictional sports science class wants to know whether the type of warm-up **affects** vertical jump height. Twenty-two volunteers were randomly assigned, 11 to a dynamic warm-up (moving drills) and 11 to static stretching. Each then did one jump, measured in centimetres.

- Dynamic: 41, 38, 45, 43, 36, 47, 40, 44, 39, 42, 46
- Static: 37, 40, 34, 39, 42, 35, 38, 33, 41, 36, 44

**Question.** Set up a test at α = 0.05.

**State.**

- μ_D = the true mean jump height (cm) for volunteers like these after a dynamic warm-up.
- μ_S = the true mean jump height (cm) for volunteers like these after static stretching.
- H₀: μ_D = μ_S. Hₐ: μ_D ≠ μ_S. "Affects" gives no direction, so the test is two-sided.

**Plan.** Two-sample t-test for μ_D − μ_S. Each volunteer did one warm-up only, so the groups are independent.

1. **Randomization:** the warm-ups were randomly assigned to the volunteers. ✓
2. **10%:** not needed. This is a randomized experiment with volunteers, not a sample drawn without replacement from a population.
3. **Sample data:** both groups have 11 < 30 values and nothing is said about the populations, so check both samples (Figure 2).
   - Dynamic, ordered: 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47. Q1 = 39, Q3 = 45, IQR = 6. Fences: 39 − 9 = 30 and 45 + 9 = 54 cm. All values lie inside.
   - Static, ordered: 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44. Q1 = 35, Q3 = 41, IQR = 6. Fences: 35 − 9 = 26 and 41 + 9 = 50 cm. All values lie inside.
   - Neither dot plot shows strong skewness. ✓

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="jump-title jump-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="jump-title">Dot plots of jump heights after two warm-ups</title>
<desc id="jump-desc">Two dot plots share a horizontal axis from 30 to 50 centimetres. The top row, labelled Dynamic, shows eleven filled circles at 36, 38, 39, 40, 41, 42, 43, 44, 45, 46 and 47 centimetres, with a short dashed line marking the mean at about 41.9. The bottom row, labelled Static, shows eleven open circles at 33, 34, 35, 36, 37, 38, 39, 40, 41, 42 and 44 centimetres, with a short dashed line marking the mean at about 38.1. Both rows are spread fairly evenly with no gaps or isolated values.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<text x="10" y="75" font-size="13" fill="#1d2b44">Dynamic</text>
<text x="10" y="135" font-size="13" fill="#1d2b44">Static</text>
<line x1="60" y1="170" x2="580" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="170" x2="60" y2="177"/><line x1="164" y1="170" x2="164" y2="177"/><line x1="268" y1="170" x2="268" y2="177"/><line x1="372" y1="170" x2="372" y2="177"/><line x1="476" y1="170" x2="476" y2="177"/><line x1="580" y1="170" x2="580" y2="177"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="193">30</text><text x="164" y="193">34</text><text x="268" y="193">38</text><text x="372" y="193">42</text><text x="476" y="193">46</text><text x="580" y="193">50</text>
</g>
<text x="320" y="218" text-anchor="middle" font-size="13" fill="#1d2b44">Jump height (cm)</text>
<g fill="#1d2b44">
<circle cx="216" cy="70" r="6"/><circle cx="268" cy="70" r="6"/><circle cx="294" cy="70" r="6"/><circle cx="320" cy="70" r="6"/><circle cx="346" cy="70" r="6"/><circle cx="372" cy="70" r="6"/><circle cx="398" cy="70" r="6"/><circle cx="424" cy="70" r="6"/><circle cx="450" cy="70" r="6"/><circle cx="476" cy="70" r="6"/><circle cx="502" cy="70" r="6"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="138" cy="130" r="6"/><circle cx="164" cy="130" r="6"/><circle cx="190" cy="130" r="6"/><circle cx="216" cy="130" r="6"/><circle cx="242" cy="130" r="6"/><circle cx="268" cy="130" r="6"/><circle cx="294" cy="130" r="6"/><circle cx="320" cy="130" r="6"/><circle cx="346" cy="130" r="6"/><circle cx="372" cy="130" r="6"/><circle cx="424" cy="130" r="6"/>
</g>
<line x1="369.6" y1="44" x2="369.6" y2="92" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="369.6" y="38" text-anchor="middle" font-size="12" fill="#1d2b44">mean 41.9</text>
<line x1="270.4" y1="104" x2="270.4" y2="152" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="270.4" y="100" text-anchor="middle" font-size="12" fill="#1d2b44">mean 38.1</text>
</svg>
<figcaption>Figure 2. Jump heights of 11 volunteers after a dynamic warm-up (filled circles) and 11 after static stretching (open circles). Neither sample shows strong skewness or outliers, so the sample data condition is met even though both samples are small.</figcaption>
</figure>

All conditions are met, so the two-sample t-test is appropriate.

**Check.** Because the warm-ups were randomly assigned, a significant result could be read as cause and effect. Because the subjects were volunteers, it would apply to people like them, not to a wider population. Planning this now helps you write the conclusion later.

## Worked example 3: is this test appropriate?

**Question.** For each study, say whether a two-sample t-test for μ₁ − μ₂ is appropriate. If not, say why.

**(a)** A dentist measures the plaque score on the left and right sides of the mouth of 25 patients, after one side was brushed with a new toothpaste (side chosen by coin toss). **Not appropriate.** Both scores come from the same patient, so the data are paired. Use a one-sample t-test on the 25 differences.

**(b)** An estate agent takes random samples of 15 house sale prices from each of two towns. One town's sample contains a mansion priced at three times any other house. **Not appropriate as it stands.** Both samples are under 30, and the mansion is almost certainly an outlier, so the sample data condition fails. Check the value; a larger sample from each town would help.

**(c)** Random samples of 200 adults in each of two cities are asked whether they own a bicycle. **Not appropriate.** The response is categorical (yes or no), so the question is about proportions (Unit 3).

**(d)** A researcher takes a random sample of 40 of the 4,000 nurses at one hospital trust and a random sample of 35 of the 300 nurses at another, and records the length of each nurse's last shift. **The 10% condition fails for the second trust:** 35 > 10% of 300 = 30. The first trust is fine (40 ≤ 400). The standard error formula would not be reliable for the second sample as drawn.

## Common misconceptions

- **Hypotheses about sample means.** "H₀: x̄₁ = x̄₂" tests numbers you already know. Use μ₁ and μ₂.
- **Treating paired data as two independent samples.** If each value has a natural partner in the other group, analyse the differences.
- **Choosing Hₐ from the data.** "Is there a difference?" means two-sided, even if one sample mean is much larger.
- **Mixing the order of subtraction** between the parameter definition and Hₐ.
- **"n < 30, so the conditions fail."** Small samples are fine if both sample distributions show no strong skewness and no outliers.
- **Checking only one sample.** Randomization, 10% and sample data are checked for both groups.
- **Adding sample sizes or populations.** n₁ + n₂ ≥ 30 and 10% of N₁ + N₂ are not the conditions.
- **Applying the 10% condition to a randomized experiment** with volunteers. It is about sampling without replacement.
- **Writing H₀ with an inequality.** H₀ always states equality: μ₁ − μ₂ = 0.

## Where this leads

With the test set up, Topic 4.10 calculates the t-statistic and p-value and writes the conclusion: [Carrying Out a Test for the Difference Between Two Population Means](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/). First, try the [practice questions](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-practice/), then use the [revision notes](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-checklist/) to consolidate. To see the same conditions used for an interval, look back at [Topic 4.7](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/).
