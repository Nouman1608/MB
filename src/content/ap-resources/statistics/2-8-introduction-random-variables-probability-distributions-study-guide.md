---
resourceId: "mb-ap-stats-2.8-study-guide"
title: "Introduction to Random Variables and Probability Distributions: Study Guide (Statistics 2.8)"
description: "Learn what a discrete random variable is and how to build, check, graph and use its probability distribution and cumulative distribution, from probability rules or a simulation."
course: "statistics"
unit: 2
topics: ["2.8"]
resourceType: "study-guide"
prerequisites:
  - "Probability rules, including complements (Topic 2.4)"
  - "Independent events and the multiplication rule (Topic 2.7)"
  - "Estimating probabilities with a simulation (Topic 2.3)"
prerequisiteResources: ["mb-ap-stats-2.7-study-guide"]
learningObjectives:
  - "Explain what a random variable is and identify its possible values in context"
  - "Construct the probability distribution of a discrete random variable using probability rules"
  - "Check that a table or function is a valid probability distribution"
  - "Estimate a probability distribution from the results of a simulation"
  - "Represent a distribution as a table, a probability histogram or a function, and build its cumulative distribution"
  - "Use a distribution or a cumulative distribution to find probabilities such as P(X ≤ a) and P(a < X ≤ b)"
skills: ["3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "A scientific calculator is enough. A graphing calculator or software is useful for running simulations. Give probabilities to 4 decimal places unless they are exact."
related: ["mb-ap-stats-2.8-revision-notes", "mb-ap-stats-2.8-practice", "mb-ap-stats-2.8-checklist"]
next: "mb-ap-stats-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A random variable gives a number to each outcome of a random process. It is written with a capital letter, such as X."
  - "A discrete probability distribution lists every possible value of X with its probability."
  - "Valid distribution: every probability is between 0 and 1, and the probabilities add to 1."
  - "A distribution can come from probability rules (exact) or from a simulation (an estimate)."
  - "The cumulative distribution gives P(X ≤ x) for each value x. It never decreases and ends at 1."
faqs:
  - question: "What is the difference between X and x?"
    answer: "Capital X is the random variable: the rule that turns outcomes into numbers. Small x stands for one particular value it can take. So P(X = 2) means 'the probability that the random variable takes the value 2'."
  - question: "Do I need to find the mean of the distribution in this topic?"
    answer: "No. Building and using the distribution is Topic 2.8. The mean (expected value) and standard deviation of a random variable come next, in Topic 2.9."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What is a random variable?

A **random variable** is a variable whose value is a number that comes from a random process. Before the process happens, you do not know which value you will get. You only know which values are possible and how likely each one is.

Examples:

- X = the number of questions a contestant answers correctly out of 3.
- Y = the number of customers who arrive at a shop counter in one minute.
- W = the score shown on a weighted die after one roll.

We use **capital letters** (X, Y, W) for random variables and **small letters** (x, y, w) for particular values. "P(X = 2)" is read as "the probability that X equals 2".

A random variable must give a **number**. "The colour of the next car" is a random outcome, but not a random variable. "The number of red cars among the next 10" is a random variable.

**Discrete or continuous?** A **discrete** random variable has values you can list, with gaps between them, such as 0, 1, 2, 3. A **continuous** random variable can take any value in an interval, such as a waiting time in seconds. This topic is about discrete random variables. You will meet a continuous one, the normal distribution, in Topic 2.11.

## The probability distribution of a discrete random variable

The **probability distribution** of a discrete random variable lists **every** possible value with its probability. Two rules make a distribution **valid**:

1. Every probability is between 0 and 1: 0 ≤ P(X = x) ≤ 1.
2. The probabilities add to 1: ΣP(X = x) = 1.

If either rule fails, the table is not a probability distribution. Check both whenever you build or are given a distribution.

You can show a distribution in three ways:

- **A table**, with the values of X in one row and their probabilities in the next.
- **A graph**, usually a **probability histogram**: one bar per value, with height equal to the probability.
- **A function**, a formula such as P(X = x) = x ÷ 10 for x = 1, 2, 3, 4.

**Where do the probabilities come from?** There are two routes.

- **Probability rules** (Topics 2.4 to 2.7). List the outcomes of the process, find the probability of each, and add the probabilities of the outcomes that give the same value of X. This gives the **exact** distribution, as long as the assumptions behind the rules hold.
- **Simulation** (Topic 2.3). Imitate the process many times and record the value of X each time. The relative frequencies **estimate** the distribution. More trials give better estimates.

## The cumulative distribution

The **cumulative probability distribution** gives, for each value x, the probability that X is **less than or equal to** x: P(X ≤ x). You get it by adding the probabilities from the smallest value up to x.

It can be shown as a table or a function. It has three features you can use as checks:

- It never decreases as x increases.
- Its last value is 1.
- You can get back to single probabilities by subtracting: P(X = x) = P(X ≤ x) − P(X ≤ previous value).

**Read the inequality carefully.** For a discrete variable, "less than 3" and "at most 3" are different events. With values 0, 1, 2, 3, P(X < 3) = P(X ≤ 2), but P(X ≤ 3) also includes P(X = 3). Words to translate:

| Words | Symbol |
|---|---|
| at most 2, no more than 2 | X ≤ 2 |
| fewer than 2, less than 2 | X < 2, which is X ≤ 1 here |
| at least 2, no fewer than 2 | X ≥ 2 |
| more than 2 | X > 2, which is X ≥ 3 here |

## Worked example 1: building a distribution with probability rules

**Question.** On a fictional quiz show, *Brainwave*, a contestant answers three questions. From past shows, the probabilities that this contestant answers correctly are 0.9 for question 1, 0.6 for question 2 and 0.3 for question 3. Assume the results of the three questions are independent. Let X = the number of questions answered correctly.

(a) Construct the probability distribution of X and check that it is valid.
(b) Construct the cumulative distribution.
(c) Find the probability that the contestant answers at least 2 questions correctly.

**(a)** X can be 0, 1, 2 or 3. List all 2 × 2 × 2 = 8 outcomes (C = correct, W = wrong). Because the questions are independent, multiply along each outcome.

| Outcome | X | Probability |
|---|---|---|
| CCC | 3 | 0.9 × 0.6 × 0.3 = 0.162 |
| CCW | 2 | 0.9 × 0.6 × 0.7 = 0.378 |
| CWC | 2 | 0.9 × 0.4 × 0.3 = 0.108 |
| WCC | 2 | 0.1 × 0.6 × 0.3 = 0.018 |
| CWW | 1 | 0.9 × 0.4 × 0.7 = 0.252 |
| WCW | 1 | 0.1 × 0.6 × 0.7 = 0.042 |
| WWC | 1 | 0.1 × 0.4 × 0.3 = 0.012 |
| WWW | 0 | 0.1 × 0.4 × 0.7 = 0.028 |

The outcomes are mutually exclusive, so add the probabilities for each value of X:

- P(X = 0) = 0.028
- P(X = 1) = 0.252 + 0.042 + 0.012 = 0.306
- P(X = 2) = 0.378 + 0.108 + 0.018 = 0.504
- P(X = 3) = 0.162

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X = x) | 0.028 | 0.306 | 0.504 | 0.162 |

**Check.** Every probability is between 0 and 1, and 0.028 + 0.306 + 0.504 + 0.162 = 1.000. The distribution is valid.

**(b)** Add as you go:

| x | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| P(X ≤ x) | 0.028 | 0.334 | 0.838 | 1.000 |

**(c)** P(X ≥ 2) = P(X = 2) + P(X = 3) = 0.504 + 0.162 = **0.666**. Or, with the cumulative table, P(X ≥ 2) = 1 − P(X ≤ 1) = 1 − 0.334 = 0.666.

**Interpretation.** In the long run, this contestant would answer at least 2 of the 3 questions correctly on about 66.6% of shows like this one.

**Note.** There are 8 outcomes but only 4 values of X. Do not give each outcome its own row in the distribution, and do not assume the outcomes are equally likely: here they are not.

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="quiz-title quiz-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="quiz-title">Probability histogram of the number of correct answers</title>
<desc id="quiz-desc">A probability histogram with the number of correct answers, X, on the horizontal axis at 0, 1, 2 and 3, and probability on the vertical axis from 0 to 0.6. The bar heights are 0.028 at X equals 0, 0.306 at X equals 1, 0.504 at X equals 2 and 0.162 at X equals 3. The tallest bar is at 2. The distribution is skewed to the left.</desc>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<line x1="80" y1="250" x2="580" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="40" x2="80" y2="250" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1"><line x1="74" y1="250" x2="80" y2="250"/><line x1="74" y1="215" x2="80" y2="215"/><line x1="74" y1="180" x2="80" y2="180"/><line x1="74" y1="145" x2="80" y2="145"/><line x1="74" y1="110" x2="80" y2="110"/><line x1="74" y1="75" x2="80" y2="75"/><line x1="74" y1="40" x2="80" y2="40"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="70" y="254">0</text><text x="70" y="219">0.1</text><text x="70" y="184">0.2</text><text x="70" y="149">0.3</text><text x="70" y="114">0.4</text><text x="70" y="79">0.5</text><text x="70" y="44">0.6</text></g>
<text x="24" y="145" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 145)">Probability</text>
<g fill="#c9d3e6" stroke="#1d2b44" stroke-width="1.5">
<rect x="120" y="240.2" width="80" height="9.8"/>
<rect x="230" y="142.9" width="80" height="107.1"/>
<rect x="340" y="73.6" width="80" height="176.4"/>
<rect x="450" y="193.3" width="80" height="56.7"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="160" y="233">0.028</text><text x="270" y="136">0.306</text><text x="380" y="67">0.504</text><text x="490" y="186">0.162</text>
<text x="160" y="270">0</text><text x="270" y="270">1</text><text x="380" y="270">2</text><text x="490" y="270">3</text>
</g>
<text x="330" y="296" text-anchor="middle" font-size="14" fill="#1d2b44">X = number of questions answered correctly</text>
</svg>
<figcaption>Figure 1. Probability histogram for the fictional Brainwave contestant. Each bar sits over one value of X, and its height is the probability of that value; the heights add to 1. The distribution is skewed to the left.</figcaption>
</figure>

## Worked example 2: a distribution given as a function

**Question.** A fictional board game uses a weighted four-sided die. The score X on one roll has P(X = x) = kx for x = 1, 2, 3, 4, where k is a constant.

(a) Find k. (b) Write the distribution and the cumulative distribution as tables. (c) Find P(X ≤ 2), P(X > 2) and P(X = 3) from the cumulative table.

**(a)** The probabilities must add to 1:

k(1) + k(2) + k(3) + k(4) = 10k = 1, so **k = 0.1**.

**(b)**

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| P(X = x) | 0.1 | 0.2 | 0.3 | 0.4 |
| P(X ≤ x) | 0.1 | 0.3 | 0.6 | 1.0 |

Check: all probabilities are between 0 and 1 and they add to 1, so this is valid. The cumulative row never decreases and ends at 1.

**(c)**

1. P(X ≤ 2) = **0.3**, read straight from the table.
2. P(X > 2) = 1 − P(X ≤ 2) = 1 − 0.3 = **0.7**.
3. P(X = 3) = P(X ≤ 3) − P(X ≤ 2) = 0.6 − 0.3 = **0.3**, which matches the distribution row.

**Interpretation.** On about 70% of rolls in the long run, this die shows a score of 3 or 4.

## Worked example 3: estimating a distribution by simulation

**Question.** In a fictional phone game, each pack contains one of 3 characters, each equally likely, independently of other packs. A player opens 3 packs. Let X = the number of **different** characters the player gets. (a) Describe a simulation to estimate the distribution of X. (b) Use the results of one simulation to estimate the distribution. (c) Compare with the exact distribution.

**(a)** Label the characters 1, 2 and 3. For one trial, use a random number generator to produce three whole numbers from 1 to 3 (repeats allowed), one for each pack. Record X, the number of different labels. For example, 2, 1, 1 gives X = 2. Repeat for many trials, such as 300.

**(b)** One simulation of 300 trials gave these results:

| x | 1 | 2 | 3 | Total |
|---|---|---|---|---|
| Number of trials | 24 | 214 | 62 | 300 |
| Estimated P(X = x) | 0.0800 | 0.7133 | 0.2067 | 1 |

Each estimate is a relative frequency: for example, 214 ÷ 300 ≈ 0.7133.

**(c)** With rules: there are 3 × 3 × 3 = 27 equally likely outcomes. All three the same: 3 outcomes. All three different: 3 × 2 × 1 = 6 outcomes. Exactly two different: 27 − 3 − 6 = 18 outcomes.

| x | 1 | 2 | 3 |
|---|---|---|---|
| Exact P(X = x) | 3/27 ≈ 0.1111 | 18/27 ≈ 0.6667 | 6/27 ≈ 0.2222 |

The simulated estimates are close to the exact values but not equal. A simulation estimate changes from one run to the next. With more trials, the estimates tend to get closer to the exact probabilities.

## Common misconceptions

- **"The probabilities in a table add to 1, so it must be valid."** Also check that every probability is between 0 and 1. A negative value makes it invalid even if the sum is 1.
- **Forgetting a value.** Every possible value must appear, including 0 when it is possible. If the sum is less than 1, a value is probably missing.
- **"Each value of X is equally likely."** Only if the process makes it so. In Worked example 1, the 4 values have very different probabilities.
- **Listing outcomes instead of values.** The distribution has one entry per value of X, not one per outcome.
- **Mixing up < and ≤.** For a discrete variable, P(X < 3) does not include P(X = 3). Translate the words first.
- **"The cumulative probability for x is P(X = x)."** It is P(X ≤ x), the running total.
- **"A simulation gives the exact distribution."** It gives an estimate. It is close for many trials, but it is not exact.
- **Treating X as an unknown to solve for.** X is a random variable. You find probabilities of its values; you do not solve for X.

## Where this leads

A distribution describes everything about a random variable, but you often want a single "typical value" and a measure of spread. In Topic 2.9 you will calculate the mean (expected value) and standard deviation of a random variable from its distribution. Read [Parameters of Random Variables](/advanced-course-resources/statistics/2-9-parameters-random-variables-study-guide/) next. Later, the binomial distribution (Topic 2.10) gives a function for one important family of discrete distributions.

First, try the [practice questions](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-practice/), then use the [revision notes](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-revision-notes/) and the [checklist](/advanced-course-resources/statistics/2-8-introduction-random-variables-probability-distributions-checklist/). If the multiplication rule felt unfamiliar in Worked example 1, revisit [Independent Events and Unions of Events](/advanced-course-resources/statistics/2-7-independent-events-unions-events-study-guide/).
