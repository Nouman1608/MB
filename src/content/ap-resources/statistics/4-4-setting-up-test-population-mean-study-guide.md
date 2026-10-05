---
resourceId: "mb-ap-stats-4.4-study-guide"
title: "Setting Up a Test for a Population Mean or Population Mean Difference: Study Guide (Statistics 4.4)"
description: "Learn to set up a one-sample t-test for a mean or a matched-pairs mean difference: choose the procedure, define μ or μd in context, write the hypotheses and verify the three conditions."
course: "statistics"
unit: 4
topics: ["4.4"]
resourceType: "study-guide"
prerequisites:
  - "Setting up a test for a population proportion (Topic 3.5)"
  - "Constructing and interpreting a t-interval for a mean or mean difference (Topics 4.2 and 4.3)"
  - "The 1.5 × IQR rule for outliers (Topic 1.7)"
prerequisiteResources: ["mb-ap-stats-4.3-study-guide"]
learningObjectives:
  - "Decide when a one-sample t-test for a population mean or for a population mean difference is the right procedure, and name it in full"
  - "Recognise matched-pairs data and explain why it is analysed as one sample of differences"
  - "Define μ or μd in context, naming the population, the response variable and, for pairs, the order of subtraction"
  - "Write the null and alternative hypotheses in symbols, choosing a one-sided or two-sided alternative from the question"
  - "Verify the random, 10% and sample data conditions in context, using the differences for matched pairs"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Only quartiles, fences and simple multiplication are needed in this topic. Use one-variable statistics to find quartiles, then check for outliers with the 1.5 × IQR rule."
related: ["mb-ap-stats-4.4-revision-notes", "mb-ap-stats-4.4-practice", "mb-ap-stats-4.4-checklist"]
next: "mb-ap-stats-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "One quantitative variable, one sample, σ unknown, a claimed value μ₀: use a one-sample t-test for a population mean."
  - "Two measurements on the same individuals (or natural pairs): take differences and use a one-sample t-test for a population mean difference."
  - "H₀: μ = μ₀ or H₀: μd = 0. Hₐ uses <, > or ≠, chosen from the question before you see the data."
  - "Define the parameter with the population, the variable, units and, for pairs, the order of subtraction."
  - "Conditions: random sample or random assignment; n ≤ 10% of N when sampling without replacement; normal population, n ≥ 30, or no strong skew or outliers in the sample (of differences)."
faqs:
  - question: "Why a t-test and not a z-test for a mean?"
    answer: "A z-test would need the population standard deviation σ, which is almost never known for a quantitative variable. Using s in its place adds extra variability, and the t-distributions allow for that."
  - question: "For matched pairs, do I check the two sets of measurements for skewness?"
    answer: "No. The test analyses the differences, so the sample data condition is about the differences: at least 30 of them, or, with fewer than 30, a distribution of differences free from strong skewness and outliers."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From proportions to means

In Topic 3.5 you set up a test for a claimed population proportion. Now the variable is **quantitative**: a weight, a time, a score. The claim is about a population **mean**.

The structure of a test does not change. You assume the claimed value is true, then ask whether your sample would be surprising if it were. A full test has four parts: **State** (parameter and hypotheses), **Plan** (procedure and conditions), **Do** (test statistic and p-value) and **Conclude**. This topic covers State and Plan. Topic 4.5 does the rest.

What does change is the procedure. The population standard deviation σ is almost never known for a quantitative variable. So the test uses the sample standard deviation s, and the reference distribution is a **t-distribution** with n − 1 degrees of freedom, as in Topic 4.2.

## Choosing the procedure

Ask three questions.

1. **Is the variable quantitative, and is the question about a mean?** If the variable is categorical, you need a proportion procedure.
2. **Is the question asking whether the data give evidence against a claimed value?** If it asks you to estimate, use an interval (Topics 4.2 and 4.3).
3. **How were the data produced?**
   - One sample, one measurement per individual → **one-sample t-test for a population mean**.
   - Two measurements on each individual, or natural pairs → **matched pairs**: take the differences and use a **one-sample t-test for a population mean difference**.
   - Two separate groups with no pairing → a two-sample t-test, which comes later in this unit (Topic 4.9).

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="flow-title flow-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flow-title">Choosing a t procedure for a test about means</title>
<desc id="flow-desc">A decision diagram. The top box reads: quantitative variable, claim about a mean, sigma unknown. An arrow leads down to a question box: how were the data produced? Three arrows lead to three result boxes. Left, labelled one sample, one value each: one-sample t-test for a population mean, with H zero mu equals mu zero. Middle, labelled two values on each individual or natural pairs: take differences, then one-sample t-test for a population mean difference, with H zero mu d equals 0. Right, labelled two separate groups, no pairing: two-sample t-test, Topic 4.9.</desc>
<defs>
<marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="120" y="12" width="400" height="40" rx="6"/>
<rect x="210" y="84" width="220" height="36" rx="6"/>
<rect x="12" y="196" width="196" height="88" rx="6"/>
<rect x="222" y="196" width="196" height="88" rx="6"/>
<rect x="432" y="196" width="196" height="88" rx="6" stroke-dasharray="6 4"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#flow-arrow)">
<line x1="320" y1="52" x2="320" y2="80"/>
<line x1="270" y1="120" x2="110" y2="192"/>
<line x1="320" y1="120" x2="320" y2="192"/>
<line x1="370" y1="120" x2="530" y2="192"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="320" y="37">Quantitative variable, claim about a mean, σ unknown</text>
<text x="320" y="107">How were the data produced?</text>
<text x="110" y="216" font-weight="bold">One-sample t-test</text>
<text x="110" y="234">for a population mean</text>
<text x="110" y="262">H₀: μ = μ₀</text>
<text x="320" y="216" font-weight="bold">Take differences, then</text>
<text x="320" y="234">one-sample t-test for a</text>
<text x="320" y="252">population mean difference</text>
<text x="320" y="274">H₀: μd = 0</text>
<text x="530" y="216" font-weight="bold">Two-sample t-test</text>
<text x="530" y="234">(later: Topic 4.9)</text>
</g>
<g font-size="11" fill="#1d2b44">
<text x="160" y="150" text-anchor="end">one sample,</text><text x="160" y="163" text-anchor="end">one value each</text>
<text x="327" y="150" text-anchor="start">two values on each</text><text x="327" y="163" text-anchor="start">individual, or pairs</text>
<text x="500" y="150" text-anchor="start">two separate</text><text x="500" y="163" text-anchor="start">groups, no pairing</text>
</g>
</svg>
<figcaption>Figure 1. Choosing a procedure. The left and middle boxes are this topic; the dashed box on the right comes later in Unit 4.</figcaption>
</figure>

### Recognising matched pairs

Data are paired when each value in one set has a **partner** in the other set, and the partners belong together:

- the same person measured **before and after** something;
- the same person (or item) given **both treatments**, ideally in a random order;
- **natural pairs**, such as twins, or the left and right side of the same car.

Pairing removes much of the person-to-person variation, so the differences show the effect more clearly. Because each pair gives one difference, the analysis is a **one-sample** procedure on the differences. Treating paired data as two separate samples ignores the pairing and is a serious error.

## Defining the parameter

The hypotheses are about a **population** value, so define it carefully.

| Definition | Verdict |
|---|---|
| "μ = mean" | Too vague: mean of what, for whom? |
| "μ = the mean volume of the 12 bottles sampled" | Wrong: that is the statistic x̄, which we know. |
| "μ = the true mean volume (mL) of all bottles filled by machine 3 today" | Correct: parameter, variable, units and population. |
| "μd = the true mean difference in reaction time" | Incomplete: which way was the subtraction? |
| "μd = the true mean of (with music − without music) reaction time, in ms, for people like these volunteers" | Correct. |

## Writing the hypotheses

**One-sample mean.** H₀: μ = μ₀, where μ₀ is the claimed value. Hₐ is one of μ < μ₀, μ > μ₀ or μ ≠ μ₀.

**Matched pairs.** "No difference on average" is H₀: μd = 0. Hₐ is one of μd < 0, μd > 0 or μd ≠ 0.

The same rules as Topic 3.5 apply:

1. Hypotheses use **μ or μd**, never x̄ or x̄d.
2. μ₀ comes from the **claim**, not from the sample.
3. The **direction** of Hₐ comes from the question's wording ("less than", "increases", "differs"), decided before looking at the data.
4. For an **"at least" or "at most"** claim, test at the boundary: "at least 500 mL", with a suspicion of less, gives H₀: μ = 500 and Hₐ: μ < 500.

**Direction for pairs depends on the order of subtraction.** "The new method improves scores" with d = after − before gives Hₐ: μd > 0. With d = before − after, the same claim gives Hₐ: μd < 0. Choose an order, state it, and keep it.

## The three conditions

| Condition | What to check | Why it matters |
|---|---|---|
| Random | Data from a random sample, or from a randomized experiment (for pairs: random order of treatments, or a random sample of pairs) | Without randomness the t-distribution does not describe how x̄ varies |
| 10% | When sampling without replacement, n ≤ 10% of N | Keeps the observations close to independent. Not needed for a randomized experiment with no sampling |
| Sample data | You are told the population is roughly normal; **or** n ≥ 30; **or**, when n is below 30, a graph of the sample shows no strong skewness and no outliers | Makes the sampling distribution of x̄ close enough to normal for the t-procedure |

For matched pairs, apply the sample data condition to the **differences**: at least 30 differences, or fewer than 30 with no strong skew or outliers.

Notice what is **not** here: there is no "np₀ ≥ 10" check. That is for proportions only. When n < 30, you must look at the sample data, for example with a dotplot and the 1.5 × IQR rule. Saying "n < 30 so the condition fails" is wrong; small samples are fine if the data are not strongly skewed and have no outliers.

## Worked example 1: a one-sided test for a mean

**Question.** A machine at a fictional bottling plant should fill bottles with 500 mL of water. An inspector suspects it is underfilling. She selects a random sample of 12 of the 8,000 bottles filled that day. The volumes (mL) are:

497.8, 501.2, 499.5, 498.1, 500.4, 496.9, 499.0, 498.6, 500.9, 497.5, 499.8, 498.3

Set up a significance test. Do not carry it out.

**State.**

- μ = the true mean volume (mL) of all bottles filled by the machine that day.
- H₀: μ = 500. Hₐ: μ < 500. The direction comes from "suspects it is underfilling".

**Plan.** One-sample t-test for a population mean (σ is unknown).

1. **Random:** the 12 bottles were a random sample of that day's bottles. ✓
2. **10%:** 12 ≤ 10% of 8,000 = 800. ✓
3. **Sample data:** n = 12 < 30, so check the data. Ordered: 496.9, 497.5, 497.8, 498.1, 498.3, 498.6, 499.0, 499.5, 499.8, 500.4, 500.9, 501.2. Q1 = 497.95, Q3 = 500.1, IQR = 2.15. Fences: 497.95 − 3.225 = 494.725 and 500.1 + 3.225 = 503.325. No value is outside the fences, and the values are spread fairly evenly, with no strong skew. ✓

All conditions are met, so the t-test is appropriate.

**Check.** The sample mean (499.0 mL) was not used in the set-up. It is needed in the Do step.

## Worked example 2: a matched-pairs test where a condition fails

**Question.** A psychology student asks whether background music **affects** reaction time. Each of 14 volunteers did a reaction test with music and without music, in an order decided by a coin toss. The differences, d = with music − without music, in milliseconds, are:

12, −8, 5, 15, 3, −2, 9, 7, 11, 4, 6, −5, 10, 68

(a) Explain why this is a matched-pairs design.
(b) Define the parameter and write the hypotheses.
(c) Check the conditions.

**(a)** Each volunteer was measured under both conditions, so the two times for one person form a pair. The analysis uses one difference per person.

**(b)** μd = the true mean difference in reaction time (with music − without music), in ms, for people like these volunteers. H₀: μd = 0. Hₐ: μd ≠ 0. "Affects" does not give a direction, so the test is two-sided.

**(c)**

1. **Random:** the order of the conditions was randomly assigned for each volunteer. ✓
2. **10%:** not needed: the volunteers were not sampled from a population. (So any conclusion applies to people like these volunteers.)
3. **Sample data:** only 14 differences, so check them. Q1 = 3, Q3 = 11, IQR = 8. Upper fence = 11 + 1.5 × 8 = 23 ms. The difference of **68 ms is an outlier** (Figure 2). ✗

<figure>
<svg viewBox="0 0 640 170" role="img" aria-labelledby="rt-title rt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rt-title">Dotplot of 14 reaction-time differences</title>
<desc id="rt-desc">A horizontal axis from minus 10 to 70 milliseconds, labelled difference with music minus without music. Thirteen dots lie between minus 8 and 15. One dot lies far to the right at 68 and is labelled outlier. A dotted vertical line at 23 is labelled upper fence 23.</desc>
<rect x="0" y="0" width="640" height="170" fill="#ffffff"/>
<line x1="60" y1="110" x2="580" y2="110" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="110" x2="60" y2="117"/><line x1="125" y1="110" x2="125" y2="117"/><line x1="190" y1="110" x2="190" y2="117"/><line x1="255" y1="110" x2="255" y2="117"/><line x1="320" y1="110" x2="320" y2="117"/><line x1="385" y1="110" x2="385" y2="117"/><line x1="450" y1="110" x2="450" y2="117"/><line x1="515" y1="110" x2="515" y2="117"/><line x1="580" y1="110" x2="580" y2="117"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="133">−10</text><text x="125" y="133">0</text><text x="190" y="133">10</text><text x="255" y="133">20</text><text x="320" y="133">30</text><text x="385" y="133">40</text><text x="450" y="133">50</text><text x="515" y="133">60</text><text x="580" y="133">70</text>
<text x="320" y="158">Difference in reaction time, with music − without music (ms)</text>
</g>
<g fill="#1d2b44">
<circle cx="73" cy="100" r="5"/><circle cx="92.5" cy="100" r="5"/><circle cx="112" cy="100" r="5"/><circle cx="144.5" cy="100" r="5"/><circle cx="151" cy="88" r="5"/><circle cx="157.5" cy="100" r="5"/><circle cx="164" cy="88" r="5"/><circle cx="170.5" cy="100" r="5"/><circle cx="183.5" cy="100" r="5"/><circle cx="190" cy="88" r="5"/><circle cx="196.5" cy="100" r="5"/><circle cx="203" cy="88" r="5"/><circle cx="222.5" cy="100" r="5"/><circle cx="567" cy="100" r="5"/>
</g>
<line x1="274.5" y1="40" x2="274.5" y2="110" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="274.5" y="34" text-anchor="middle" font-size="12" fill="#1d2b44">upper fence 23</text>
<text x="567" y="80" text-anchor="middle" font-size="12" fill="#1d2b44">68: outlier</text>
</svg>
<figcaption>Figure 2. The 14 differences. Close dots are raised slightly so that none overlap. The value 68 ms lies far beyond the upper fence of 23 ms, so the sample data condition is not met.</figcaption>
</figure>

With fewer than 30 differences and a clear outlier, the t-test is **not** appropriate as it stands. The outlier would have a large effect: the mean difference is 9.64 ms with it and 5.15 ms without it.

**What could the student do?** First, investigate the 68 ms value. If it was a recording error, correct it. If that trial was spoiled (for example, the volunteer was distracted), the student could repeat or remove it, and must report this. If it is genuine, collect more pairs: with at least 30 differences the sample data condition is met.

## Worked example 3: which procedure?

For each study, name the procedure and write H₀.

1. *A gym records the resting heart rate of 20 randomly chosen members before and after a 12-week programme, to see whether it falls.* Same people measured twice: **one-sample t-test for a population mean difference**. With d = before − after, H₀: μd = 0, Hₐ: μd > 0.
2. *A café claims its average wait is 4 minutes. A reviewer times 35 randomly chosen orders, suspecting longer waits.* One sample, one value each: **one-sample t-test for a population mean**. H₀: μ = 4, Hₐ: μ > 4 (minutes).
3. *A teacher compares test scores of 25 students taught by method A with 25 different students taught by method B.* Two separate groups with no pairing: **not** this topic; a two-sample t-test (Topic 4.9).

## Common misconceptions

- **Hypotheses about x̄.** "H₀: x̄ = 500" tests a number you already know. Use μ.
- **Analysing paired data as two independent samples.** If the same individuals give both values, take differences.
- **Not stating the order of subtraction**, or switching it between the definition and Hₐ.
- **Using np₀ ≥ 10 for a mean.** That check is for proportions.
- **"n < 30, so the conditions fail."** Small samples are fine if the data show no strong skew or outliers.
- **Checking the two sets of measurements instead of the differences** for matched pairs.
- **Choosing Hₐ from the data.** "Affects" means two-sided even if most differences are positive.
- **Applying the 10% condition to a randomized experiment** with volunteers. It is about sampling without replacement.

## Where this leads

With the test set up, Topic 4.5 calculates the t test statistic and p-value and writes the conclusion: [Carrying Out a Test for a Population Mean or Population Mean Difference](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/). First, try the [practice questions](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-practice/), then use the [revision notes](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-checklist/) to consolidate. For the interval approach to the same kind of claim, see the [Topic 4.3 study guide](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/).
