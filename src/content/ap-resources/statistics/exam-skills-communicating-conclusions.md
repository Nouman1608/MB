---
resourceId: "mb-ap-stats-exam-skills-communicating-conclusions"
title: "Communicating Statistics: Context, Conditions and Conclusions: Exam Skills Guide (Statistics)"
description: "How to describe data in context, name and check conditions, set out inference in four steps and write conclusions about intervals, tests and regression without overclaiming."
course: "statistics"
unit: 1
topics: []
resourceType: "exam-skills"
prerequisites:
  - "You have studied most of the course, including at least one confidence interval and one significance test"
  - "You can find a regression line, r and r² with technology"
learningObjectives:
  - "Describe and compare distributions in context, covering shape, centre, variability and unusual features"
  - "Name the right inference procedure and check each of its conditions with numbers from the question"
  - "Set out a confidence interval or significance test in four clear steps"
  - "Write conclusions that link a p-value or interval to the claim, in context, without overclaiming"
  - "Interpret slope, intercept, r, r² and a confidence level, and decide when cause-and-effect language is justified"
skills: ["2", "3", "4"]
studyMinutes: 55
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use technology for intervals, test statistics, p-values and regression output, but write the procedure name, the formula with values substituted and the result. Round test statistics to 2 or 3 decimal places and p-values to 4."
related: ["mb-ap-stats-1.6-study-guide", "mb-ap-stats-1.13-study-guide", "mb-ap-stats-3.4-study-guide", "mb-ap-stats-4.5-study-guide", "mb-ap-stats-5.5-study-guide", "mb-ap-stats-exam-skills-task-verbs"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Context is not decoration: name the variable, its units and the population in every description, condition and conclusion."
  - "Describe a distribution with all four features (shape, centre, variability, unusual features) and give numbers."
  - "Name the procedure, then check each condition with a number or a fact from the question, not a label such as 'SRS'."
  - "A conclusion links the p-value to α (or the interval to the claimed value), states the decision and talks about the parameter, never proving H₀."
  - "Random assignment supports cause and effect; random selection supports generalising. Observational data support association only."
faqs:
  - question: "Do I lose credit for writing too much?"
    answer: "Extra correct writing rarely costs you, but a wrong or contradictory statement can. If you write 'we accept H₀' after a correct decision, the contradiction can lower your score. Write the four required parts clearly and stop."
  - question: "Is it enough to say 'conditions are met'?"
    answer: "No. Each condition needs evidence: the random sample or random assignment in the question, the actual 10% comparison with numbers, and the counts or sample-size check for normality."
  - question: "Should I use the word 'prove'?"
    answer: "No. Data give evidence, not proof. Use phrases such as 'convincing statistical evidence that' or 'not convincing statistical evidence that'."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## How to use this guide

This guide is for students who know the methods but lose marks in the writing, in any of the five units. Read the core sections and worked examples, then try "Practise it" before opening the model answers.

Every example and task here is **original Marlbridge practice**, with fictional data. None of it is past exam material. The marks shown are a **suggested Marlbridge rubric**, written to show what a complete answer includes. They are not official scoring.

## The free-response section at a glance

Section II has 4 questions, each worth 10 points, in 90 minutes. It is 50% of the exam.

| Question | Focus |
|---|---|
| Q1 | Multi-focus on Practices 1 and 2 (questions and data collection) |
| Q2 | Multi-focus on Practices 3 and 4 (analysis and interpretation) |
| Q3 | Inference: a hypothesis test or a confidence interval |
| Q4 | Multi-focus on Practices 2, 3 and 4 |

From May 2027 both sections are taken in the Bluebook app. A graphing calculator with statistical functions is expected, and formulas and tables are provided. A sensible Marlbridge pace is about 22 minutes per question, but that is a suggestion, not a rule.

Q1 centres on investigative questions and justifying how data are collected. Q2 centres on analysis and interpretation; Q4 adds data collection to both. Q3 rewards a complete, well-ordered inference answer.

## Context first

A reader should understand each sentence without seeing the question. Name:

- **the variable** and its **units** ("delivery time in minutes", not "the data");
- **the population** or the **treatment groups** ("all 18,500 card holders", not "people");
- **the parameter**, if you are doing inference ("the true mean weight of all loaves in today's batch").

Avoid the word "it" when it could mean the sample, the population or the sampling distribution.

## Describing a distribution

When a question says **describe** a quantitative distribution, give all four features, each with evidence.

| Feature | What to write | Example phrase |
|---|---|---|
| Shape | Symmetric or skewed (name the longer tail), number of peaks | "unimodal and skewed right" |
| Centre | Median for skewed data, mean for roughly symmetric data | "median of 14.5 minutes" |
| Variability | IQR with median, standard deviation with mean, or range | "IQR of 10.5 minutes" |
| Unusual features | Outliers, gaps, clusters, or say there are none | "52 minutes is an outlier" |

When you **compare** distributions, use comparative words ("greater than", "less variable", "similar shape") for each feature. Listing two separate descriptions is not a comparison.

## Naming and checking conditions

First **name** the procedure in full, such as "one-sample t-test for a population mean". Then check every condition **with evidence from the question**.

| Procedure | Randomization | 10% condition (sampling without replacement) | Normality or sample data |
|---|---|---|---|
| One-proportion z-interval | Random sample | n ≤ 10% of N | Observed successes and failures both ≥ 10 |
| One-proportion z-test | Random sample | n ≤ 10% of N | np₀ and n(1 − p₀) both ≥ 10 |
| Two-proportion z-procedures | Two independent random samples or a randomized experiment | Each n ≤ 10% of its N | Successes and failures in each group ≥ 10 (pooled p̂ for a test) |
| Chi-square tests | Random sample(s) or a randomized experiment | n ≤ 10% of N | All expected counts greater than 5 |
| t-procedures for means (one sample or paired) | Random sample or a randomized experiment | n ≤ 10% of N | Population roughly normal, or n ≥ 30, or the sample (of differences) shows no strong skewness or outliers |
| Two-sample t-procedures | Two independent random samples or a randomized experiment | Each n ≤ 10% of its N | As above, for each sample |

Three habits earn the condition marks:

1. **Show the numbers.** "148 successes and 252 failures, both at least 10" beats "large counts are met".
2. **Do not mix the conditions up.** The 10% condition is about the population size. It does not make the sample random.
3. **Say what the condition gives you.** "So the sampling distribution of p̂ is approximately normal." Never just "so it is normal".

## The four-step structure

Use the same four labelled steps for every interval and test.

| Step | Interval | Test |
|---|---|---|
| 1. State | Define the parameter in context; give the confidence level | Define the parameter; write H₀ and Hₐ; give α |
| 2. Plan | Name the procedure; check conditions | Name the procedure; check conditions |
| 3. Do | Formula with values, then the interval | Formula with values, test statistic, df if needed, p-value |
| 4. Conclude | Interpret the interval in context; answer the question | Compare p-value with α; decide; conclude in context about Hₐ |

## Writing conclusions without overclaiming

**Test, reject H₀:** "Because the p-value of ___ is less than α = ___, we reject H₀. There is convincing statistical evidence that [Hₐ in words, about the population parameter]."

**Test, fail to reject:** "Because the p-value of ___ is greater than α = ___, we fail to reject H₀. There is not convincing statistical evidence that [Hₐ in words]." Do not write "accept H₀", and do not claim that H₀ is true.

**Interval:** "We are C% confident that the interval from [lower] to [upper] captures the [parameter in context]."

**Confidence level:** "If we took many random samples of this size and built an interval from each, about C% of those intervals would capture the true [parameter]." The confidence level describes the **method**. It is not the probability that one finished interval is correct.

**Using an interval for a claim:** a value **inside** the interval is plausible, so there is no convincing evidence against it; that does not prove it. A value **outside** the interval is not plausible.

## Regression language

| Quantity | Model sentence |
|---|---|
| Slope b | "For each additional [x unit], the **predicted** [y] changes by b [y units]." |
| Intercept a | "The predicted [y] when [x] is 0 is a." Add whether that makes sense. |
| r | "There is a [strong/moderate/weak], [positive/negative] **linear** association between [x] and [y]." |
| r² | "About r² × 100% of the variation in [y] is explained by the linear relationship with [x]." |
| Residual | "The actual [y] is ___ [units] above/below the predicted value." |

Say **predicted**: the slope describes the line, not each individual.

## Cause and effect, and generalising

| | Random assignment | No random assignment |
|---|---|---|
| **Random selection** | Cause and effect, and generalise to the population | Generalise an association to the population, no cause |
| **No random selection** | Cause and effect for units like those in the study only | Association in this sample only |

An **observational study** never supports "causes", "leads to" or "increases" on its own. Name a possible **confounding variable**, and explain how it is linked to **both** variables.

## Worked example 1: describing a distribution (Unit 1)

**Question (fictional).** A rail company records how late, in minutes, 20 delayed trains arrived at one station during a week:

6, 8, 9, 10, 11, 12, 12, 13, 14, 14, 15, 16, 17, 19, 21, 23, 26, 30, 33, 52

Describe the distribution of arrival delays.

**Weak answer.** "The data are skewed with an outlier. The average is about 18 and the spread is big."

**What it misses.** No direction of skew, context or units; the mean is a poor centre for skewed data; "big" is not a measure; the outlier is not named or justified.

**Strong answer.** The distribution of arrival delays is unimodal and **skewed right**, with a long tail towards longer delays. The **median** delay is **14.5 minutes**. The middle half of delays spans an **IQR of 10.5 minutes** (Q1 = 11.5, Q3 = 22). The delay of **52 minutes is an outlier**: the upper fence is 22 + 1.5 × 10.5 = 37.75 minutes, and 52 is above it. There is also a gap between 33 and 52 minutes.

| Suggested Marlbridge rubric | Point |
|---|---|
| Shape, with direction of skew | 1 |
| Centre and variability, with values and units | 1 |
| Unusual feature identified and justified, in context | 1 |

## Worked example 2: an interval for a proportion (Unit 3)

**Question (fictional).** A city library has 18,500 card holders. It surveys a random sample of 400 of them, and 148 say they would use a Sunday opening. Construct and interpret a 95% confidence interval for the proportion of all card holders who would use a Sunday opening. The manager claims that more than 30% would use it. Does the interval support the claim?

**Weak answer.** "SRS, n is large. 0.37 ± 0.047. There is a 95% chance the proportion is between 0.323 and 0.417. So 30% is wrong."

**What it misses.** No parameter or procedure. "SRS" and "n is large" are labels, not checks. It gives a probability to a fixed interval, and "30% is wrong" overstates without judging the claim.

**Strong answer.**

1. **State.** p = the proportion of all 18,500 card holders who would use a Sunday opening. 95% confidence.
2. **Plan.** One-proportion z-interval. Randomization: the 400 were a random sample. 10%: 400 ≤ 1,850, which is 10% of 18,500. Normality: 148 successes and 252 failures, both at least 10, so the sampling distribution of p̂ is approximately normal.
3. **Do.** p̂ = 148/400 = 0.37. 0.37 ± 1.96 √(0.37 × 0.63 / 400) = 0.37 ± 0.0473, so the interval is (0.3227, 0.4173).
4. **Conclude.** We are 95% confident that the interval from 0.3227 to 0.4173 captures the true proportion of the library's card holders who would use a Sunday opening. Every value in the interval is above 0.30, so the interval gives convincing evidence for the manager's claim.

| Suggested Marlbridge rubric | Point |
|---|---|
| Parameter defined and procedure named | 1 |
| All three conditions checked with evidence | 1 |
| Correct interval | 1 |
| Interpretation in context, about the parameter | 1 |
| Claim judged using values in the interval | 1 |

## Worked example 3: a test that fails to reject (Unit 4)

**Question (fictional).** Loaves from a bakery are labelled 500 g. An inspector takes a random sample of 18 loaves from today's batch of 900. The sample mean is 497.4 g and the standard deviation is 7.4 g. A dot plot of the 18 weights shows no strong skewness and no outliers. At α = 0.05, is there convincing evidence that the mean weight of today's loaves is less than 500 g?

**Weak answer.** "t = −1.49, p = 0.077 > 0.05 so we accept H₀. The loaves weigh 500 g on average."

**What it misses.** No hypotheses, procedure or conditions. "Accept H₀" and "weigh 500 g" claim far more than a test can show.

**Strong answer.**

1. **State.** μ = the true mean weight of all loaves in today's batch. H₀: μ = 500 g; Hₐ: μ < 500 g; α = 0.05.
2. **Plan.** One-sample t-test for a population mean. Randomization: a random sample of loaves. 10%: 18 ≤ 90, which is 10% of 900. Sample data: n = 18 is under 30, but the dot plot shows no strong skewness or outliers.
3. **Do.** t = (497.4 − 500) / (7.4 / √18) = −2.6 / 1.7442 ≈ −1.491, df = 17, p-value ≈ 0.0772.
4. **Conclude.** Because the p-value of 0.0772 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true mean weight of today's loaves is less than 500 g.

The last sentence does **not** say the mean is 500 g. The true mean may be 500 g or a little less; this sample is not strong enough evidence to decide.

| Suggested Marlbridge rubric | Point |
|---|---|
| Hypotheses about μ, in context | 1 |
| Procedure named, conditions checked | 1 |
| Test statistic, df and p-value | 1 |
| Decision linked to α, conclusion in context about Hₐ | 1 |

## Worked example 4: regression and causation (Unit 5)

**Question (fictional).** A researcher records data for a random sample of 30 cafés in one city: x = distance from the nearest train station (metres) and y = average number of customers per day. The least-squares line is ŷ = 412 − 0.31x, with r = −0.78. Interpret the slope, r and r². A journalist writes: "Moving a café closer to a station will bring in more customers." Comment.

**Weak answer.** "The slope means customers go down by 0.31. r² = 0.61 so the line is 61% accurate. The study shows distance causes fewer customers, so the journalist is right."

**What it misses.** The slope sentence has no units and no "predicted". r is not interpreted. r² is misread as accuracy. An observational study cannot show cause.

**Strong answer.**

- **Slope:** for each additional metre from the nearest station, the predicted number of customers per day decreases by 0.31 (about 31 fewer per 100 m).
- **r = −0.78:** a fairly strong, negative linear association between distance from a station and daily customers.
- **r² = 0.6084:** about 60.8% of the variation in daily customers is explained by the linear relationship with distance from a station.
- **Journalist:** not justified. This is an observational study, because no café was assigned a location. Foot traffic could confound: cafés close to stations tend to be on busy streets, and busy streets bring more passing customers. Then distance and customers are both linked to foot traffic. We can say the variables are associated in this city, not that moving a café would change its customers.

| Suggested Marlbridge rubric | Point |
|---|---|
| Slope with "predicted", units and context | 1 |
| r: direction, strength, "linear" | 1 |
| r² as proportion of variation explained | 1 |
| No cause: observational, with a confounder linked to both variables | 1 |

## Common mistakes

- Describing a distribution with no units or no variable name.
- Leaving out unusual features, or saying "no outliers" without checking.
- Writing "SRS" or "large counts" with no evidence from the question.
- Using the 10% condition as a reason the sample is random.
- Writing hypotheses with p̂ or x̄ instead of the parameter.
- Concluding with "accept H₀" or "this proves that".
- Saying a 95% interval has a 95% probability of containing the parameter.
- Forgetting "predicted" in the slope interpretation.
- Treating r² as the percentage of points on the line, or as accuracy.
- Using causal words for an observational study.

## Practise it

**Task 1 (Unit 1).** Forty volunteers at a rowing club are randomly assigned to a new stretching routine or the usual one. The new group has a higher mean flexibility score. What can be concluded, and about whom?

<details><summary>Model answer</summary>

Because treatments were randomly assigned, a cause-and-effect conclusion is allowed if the difference is too large to be explained by chance (for example, a test gives a small p-value): the stretching routine would then be the likely cause of the greater flexibility. Because the 40 were volunteers, not a random sample, the conclusion applies only to people like these volunteers, not to all club members.

</details>

**Task 2 (Unit 2).** A hoopla stall charges $4 a turn. The expected net gain per turn is −$1.35. Interpret this value.

<details><summary>Model answer</summary>

Over a very large number of turns, a player loses about $1.35 per turn on average. It does not mean a player loses $1.35 on any single turn.

</details>

**Task 3 (Unit 3).** A random sample of 500 commuters in a city is classified by age group (3 groups) and main way of travelling (3 modes). A chi-square test for independence gives χ² = 4.78, df = 4, p-value = 0.3106. Using α = 0.05, write the conclusion.

<details><summary>Model answer</summary>

Because the p-value of 0.3106 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence of an association between age group and main way of travelling among the city's commuters. (Do not say the variables are independent.)

</details>

**Task 4 (Unit 4).** Tomato seedlings are randomly assigned to a new fertiliser or the standard one. A 90% confidence interval for μ_new − μ_standard, the difference in mean height in cm, is (−1.8, 6.4). Does this show the new fertiliser increases mean height?

<details><summary>Model answer</summary>

No. The interval contains 0, so a difference of 0 cm is plausible. There is not convincing evidence, at the 90% confidence level, that seedlings given the new fertiliser grow taller on average than those given the standard one. A real increase is not ruled out either.

</details>

**Task 5 (Unit 5).** Using ŷ = 412 − 0.31x from Worked example 4, a café 600 m from a station has 260 customers per day. Find and interpret the residual.

<details><summary>Model answer</summary>

Predicted ŷ = 412 − 0.31(600) = 226 customers. Residual = 260 − 226 = 34. This café has 34 more customers per day than the line predicts for its distance, so the model underpredicts for this café.

</details>

## Where to practise next

- [Describing one quantitative variable: practice](/advanced-course-resources/statistics/1-6-descriptions-one-quantitative-variable-distributions-practice/)
- [Experimental design: practice](/advanced-course-resources/statistics/1-13-experimental-design-practice/)
- [Justifying a claim with a confidence interval for a proportion](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/)
- [Carrying out a chi-square test: study guide](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/)
- [Carrying out a test for a population mean: practice](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-practice/)
- [Least-squares regression: practice](/advanced-course-resources/statistics/5-5-least-squares-regression-practice/)
- [Unit 3 mixed review](/advanced-course-resources/statistics/unit-3-review/)
- [Unit 4 mixed review](/advanced-course-resources/statistics/unit-4-review/)
