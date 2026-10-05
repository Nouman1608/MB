---
resourceId: "mb-ap-stats-2.9-study-guide"
title: "Parameters of Random Variables: Study Guide (Statistics 2.9)"
description: "Learn what a parameter is, then calculate and interpret the mean (expected value) and standard deviation of a discrete random variable from its probability distribution."
course: "statistics"
unit: 2
topics: ["2.9"]
resourceType: "study-guide"
prerequisites:
  - "Reading a probability distribution table for a discrete random variable (Topic 2.8)"
  - "Mean and standard deviation of a data set (Topic 1.7)"
prerequisiteResources: ["mb-ap-stats-2.8-study-guide"]
learningObjectives:
  - "Explain the difference between a parameter, which is fixed, and a statistic, which changes from sample to sample"
  - "Calculate the expected value (mean) of a discrete random variable as a probability-weighted sum"
  - "Calculate the standard deviation and variance of a discrete random variable from its distribution"
  - "Interpret the mean as a long-run average and the standard deviation as a typical long-run distance from the mean, in context"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Put the values in one list and the probabilities in another, then run one-variable statistics with the probability list as frequencies. Read x̄ as μ and σx as σ. Round final answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-2.9-revision-notes", "mb-ap-stats-2.9-practice", "mb-ap-stats-2.9-checklist"]
next: "mb-ap-stats-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A parameter describes a whole probability distribution or population. It is one fixed number."
  - "Mean (expected value): μ = E(X) = Σ xᵢ · P(xᵢ). It is the long-run average value of X."
  - "Standard deviation: σ = √[ Σ (xᵢ − μ)² · P(xᵢ) ]. It is a typical long-run distance of X from μ."
  - "The variance is σ². There is no n − 1 here, because a distribution is not a sample."
  - "Every interpretation names the random variable, the population or process, and the units."
faqs:
  - question: "Why is there no n − 1 in the standard deviation of a random variable?"
    answer: "The n − 1 in the sample standard deviation corrects for estimating the mean from the same sample. A probability distribution describes the whole process, and μ is known exactly, so each squared deviation is simply weighted by its probability."
  - question: "Can the expected value be a number that X can never take?"
    answer: "Yes. If X counts call-outs per day, E(X) = 1.3 is impossible on any one day. It is the average over a very large number of days."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From a distribution to two numbers

In Topic 2.8 you described a discrete random variable with a probability distribution: a list of every possible value and its probability. A table like that tells you everything, but it is hard to compare or report. So, just as you summarised a data set with a mean and a standard deviation in Topic 1.7, you now summarise a **probability distribution** with two numbers:

- the **mean**, or **expected value**, which tells you the centre;
- the **standard deviation**, which tells you the variability.

A **discrete** random variable can take only a countable set of values, often a finite list such as 0, 1, 2, 3, 4. That is why we can add up over every value.

## Parameters and statistics

A **parameter** is a number that describes a whole probability distribution, or a whole population. It has **one fixed value**. It does not change from one day, sample or experiment to the next.

A **statistic** is a number calculated from data, such as a sample. Different samples give different values, so a statistic varies.

| | Parameter | Statistic |
|---|---|---|
| Describes | a probability distribution or population | a sample of data |
| Value | fixed | changes from sample to sample |
| Mean written as | μ, μ_X or E(X) | x̄ |
| Standard deviation written as | σ, σ_X or SD(X) | s |

The subscript in μ_X and σ_X names the random variable, which helps when a problem has more than one. The mean and standard deviation of a random variable are **parameters**. When you collect or simulate data, the sample mean x̄ is a **statistic** that estimates μ.

## The data used in this guide

A fictional mountain rescue station, Harrowmoor Rescue, studied its records. Let **X = the number of call-outs the station receives on a randomly chosen day**. Its probability distribution is:

| x (call-outs) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| P(X = x) | 0.25 | 0.40 | 0.20 | 0.10 | 0.05 |

Check: 0.25 + 0.40 + 0.20 + 0.10 + 0.05 = 1, so this is a valid distribution.

## The mean (expected value) of a discrete random variable

Multiply each value by its probability and add:

**μ = E(X) = Σ xᵢ · P(xᵢ)**

Here xᵢ is a possible value of X and P(xᵢ) is its probability. This is a **weighted average**: values that happen more often count for more.

**Interpretation.** The expected value is the **long-run average** value of X. If you observed X again and again, for a very large number of repetitions, the average of the results would get closer and closer to μ.

Notice two things.

- μ need **not** be a value that X can take. You will see that μ = 1.3 call-outs, even though a day always has a whole number of call-outs.
- μ is **not** the most likely value. The most likely value here is 1.

## The standard deviation of a discrete random variable

The standard deviation measures how far the values of X typically are from μ, in the long run. Weight each squared deviation by its probability:

**σ = SD(X) = √[ Σ (xᵢ − μ)² · P(xᵢ) ]**

The square of the standard deviation is the **variance**, written σ² or V(X). Its units are squared, so we usually report σ.

How to calculate σ by hand:

1. Find μ.
2. Subtract μ from each value of X to get its deviation.
3. Square each deviation.
4. Multiply each squared deviation by its probability.
5. Add the results. This is the variance, σ².
6. Take the square root.

**Interpretation.** The standard deviation is a **typical distance** between a value of X and its mean, over the long run. It is not the largest possible distance.

## Seeing μ and σ on a probability histogram

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="rescue-title rescue-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rescue-title">Probability histogram of daily call-outs at a fictional rescue station</title>
<desc id="rescue-desc">Five vertical bars for X equals 0, 1, 2, 3 and 4 call-outs, with heights 0.25, 0.40, 0.20, 0.10 and 0.05. The tallest bar is at 1. A dashed vertical line marks the mean at 1.3 call-outs, between the bars for 1 and 2. A bracket above the bars runs from 0.2 to 2.4 call-outs and is labelled mu minus sigma to mu plus sigma. The distribution is skewed to the right.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="80" y1="250" x2="600" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="80" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="73" y1="250" x2="80" y2="250"/><line x1="73" y1="210" x2="80" y2="210"/><line x1="73" y1="170" x2="80" y2="170"/><line x1="73" y1="130" x2="80" y2="130"/><line x1="73" y1="90" x2="80" y2="90"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="68" y="254">0</text><text x="68" y="214">0.1</text><text x="68" y="174">0.2</text><text x="68" y="134">0.3</text><text x="68" y="94">0.4</text>
</g>
<text x="24" y="170" font-size="14" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 170)">Probability</text>
<g fill="#c9d3e6" stroke="#1d2b44" stroke-width="1.5">
<rect x="110" y="150" width="60" height="100"/><rect x="210" y="90" width="60" height="160"/><rect x="310" y="170" width="60" height="80"/><rect x="410" y="210" width="60" height="40"/><rect x="510" y="230" width="60" height="20"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="140" y="144">0.25</text><text x="240" y="84">0.40</text><text x="340" y="164">0.20</text><text x="440" y="204">0.10</text><text x="540" y="224">0.05</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="140" y="270">0</text><text x="240" y="270">1</text><text x="340" y="270">2</text><text x="440" y="270">3</text><text x="540" y="270">4</text>
</g>
<text x="340" y="298" text-anchor="middle" font-size="14" fill="#1d2b44">X = number of call-outs in a day</text>
<line x1="270" y1="62" x2="270" y2="250" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="278" y="76" text-anchor="start" font-size="13" fill="#1d2b44">μ = 1.3 (balance point)</text>
<path d="M160 50 V40 H380 V50" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="270" y="32" text-anchor="middle" font-size="12" fill="#1d2b44">μ − σ = 0.2 to μ + σ = 2.4</text>
</svg>
<figcaption>Figure 1. Probability distribution of daily call-outs at the fictional Harrowmoor Rescue station. Dashed line: the mean μ = 1.3 call-outs, where the histogram would balance. The bracket shows one standard deviation (σ = 1.1 call-outs) either side of the mean. The long right tail pulls μ above the most likely value, 1.</figcaption>
</figure>

The mean is the **balance point** of the probability histogram. The long right tail (3 and 4 call-outs) pulls it to the right of the tallest bar.

## Worked example 1: mean and standard deviation of daily call-outs

**Question.** For the Harrowmoor distribution above, calculate μ, σ² and σ. Interpret μ and σ in context.

**Mean.**

| x | P(x) | x · P(x) |
|---|---|---|
| 0 | 0.25 | 0 |
| 1 | 0.40 | 0.40 |
| 2 | 0.20 | 0.40 |
| 3 | 0.10 | 0.30 |
| 4 | 0.05 | 0.20 |
| **Sum** | 1 | **1.30** |

μ = 0(0.25) + 1(0.40) + 2(0.20) + 3(0.10) + 4(0.05) = **1.3 call-outs**.

**Standard deviation.**

| x | x − μ | (x − μ)² | (x − μ)² · P(x) |
|---|---|---|---|
| 0 | −1.3 | 1.69 | 0.4225 |
| 1 | −0.3 | 0.09 | 0.0360 |
| 2 | 0.7 | 0.49 | 0.0980 |
| 3 | 1.7 | 2.89 | 0.2890 |
| 4 | 2.7 | 7.29 | 0.3645 |
| **Sum** | | | **1.2100** |

σ² = 1.21 (call-outs)², so σ = √1.21 = **1.1 call-outs**.

**Interpretation of μ.** Over a very large number of days, Harrowmoor Rescue averages about 1.3 call-outs per day.

**Interpretation of σ.** Over the long run, the number of call-outs on a day typically differs from the mean of 1.3 by about 1.1 call-outs.

**Check.** With values in one list and probabilities in another, one-variable statistics gives x̄ = 1.3 and σx = 1.1. The unweighted average of the five values, (0 + 1 + 2 + 3 + 4) ÷ 5 = 2, is wrong because it ignores the probabilities. As a sense check, over 30 days the station should expect about 30 × 1.3 = 39 call-outs in total.

## Parameter versus statistic: a simulation

A computer simulated days at Harrowmoor using the distribution above.

| Number of simulated days | Mean number of call-outs (a statistic) |
|---|---|
| 50 | 1.2 |
| 1,000 | 1.285 |
| 100,000 | 1.30 |

Each run's mean is a **statistic**: a different run of 50 days would give a different value. The expected value μ = 1.3 is a **parameter**: it never changes. As the number of simulated days grows, the simulated mean settles close to μ. That is exactly what "long-run average" means.

## Worked example 2: is the charity game worth playing?

**Question.** At a fictional school fair, a spinner game costs $5 to play. A player wins $20 with probability 0.10, wins $5 (their money back) with probability 0.20, and wins nothing with probability 0.70. Let X = the player's **net gain** in dollars on one play.

(a) Write the probability distribution of X.
(b) Calculate E(X) and SD(X).
(c) Interpret both in context, and say what the charity can expect from 400 plays.

**(a)** Net gain = prize − $5.

| Net gain x ($) | 15 | 0 | −5 |
|---|---|---|---|
| P(X = x) | 0.10 | 0.20 | 0.70 |

The probabilities add to 1.

**(b)** Mean:

E(X) = 15(0.10) + 0(0.20) + (−5)(0.70) = 1.5 + 0 − 3.5 = **−$2**.

Standard deviation, using deviations from −2:

1. Deviations: 15 − (−2) = 17; 0 − (−2) = 2; −5 − (−2) = −3.
2. Squared: 289, 4, 9.
3. Weighted: 289(0.10) + 4(0.20) + 9(0.70) = 28.9 + 0.8 + 6.3 = 36.
4. σ² = 36 dollars², so SD(X) = √36 = **$6**.

**(c)** **Mean:** over many, many plays, players lose an average of $2 per play. Equivalently, the charity gains an average of $2 per play, so over 400 plays it can expect about 400 × $2 = **$800**.

**Standard deviation:** a player's net gain on one play typically differs from the mean of −$2 by about $6, over the long run. The large σ comes from the rare $15 gain: most plays lose $5, but a few win.

**Check.** The negative mean makes sense: the charity designed the game to raise money. No single play ever gives exactly −$2; it is a long-run average.

## Common misconceptions

- **"The mean is the average of the possible values."** Averaging 0, 1, 2, 3, 4 gives 2 call-outs and ignores the probabilities. Always weight by P(xᵢ).
- **"The expected value is what will happen" or "the most likely value".** E(X) is a long-run average. One day can never have 1.3 call-outs, and the most likely number is 1.
- **Dividing by n or n − 1.** For a random variable, each squared deviation is multiplied by its probability. There is no division by a count. On a calculator, read σx, not Sx.
- **Forgetting the square root.** Σ(xᵢ − μ)² · P(xᵢ) is the variance. Report σ, in the units of X.
- **Squaring the deviations but not weighting them,** or weighting the deviations but not squaring them. The weighted deviations (not squared) always add to 0, which is a useful check on μ.
- **"A parameter is any number in the problem."** A parameter describes the whole distribution or population and is fixed. A mean from simulated or collected data is a statistic.
- **Interpreting with no context.** "μ = 1.3" is incomplete. Say "over a very large number of days, the station averages about 1.3 call-outs per day".
- **"Standard deviation is the maximum distance from the mean."** On a day with 4 call-outs, X is 2.7 from μ, more than σ = 1.1. σ is a typical distance.

## Where this leads

Next, in Topic 2.10, you meet the binomial distribution, a family of discrete random variables whose mean and standard deviation come from short formulas instead of a full table. Try the [practice questions](/advanced-course-resources/statistics/2-9-parameters-random-variables-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/2-9-parameters-random-variables-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-9-parameters-random-variables-checklist/). When you are ready, move on to [The Binomial Distribution](/advanced-course-resources/statistics/2-10-binomial-distribution-study-guide/).
