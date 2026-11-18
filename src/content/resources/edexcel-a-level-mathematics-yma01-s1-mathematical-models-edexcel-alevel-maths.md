---
title: "Edexcel International A Level Mathematics (YMA01): Mathematical models in probability and statistics"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S1: Statistics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 7.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s1-statistics-1-edexcel-alevel-maths"
    subtopic: "s1-mathematical-models-edexcel-alevel-maths"
description: "Edexcel IAL Maths S1 guide to mathematical models in probability and statistics: the modelling cycle, assumptions, testing a model against data and refining it."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1 of **Unit S1: Statistics 1** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3. The specification's wording is short: "The basic ideas of mathematical modelling as applied in probability and statistics." Short as it is, the idea runs through the whole unit. Every distribution you meet later in S1 (the discrete uniform distribution and the Normal distribution) is a model, and questions on those distributions often end with a part asking you to comment on the model.

The broader S1 guide on [statistical models and the representation and summary of data](/resources/edexcel-ial-mathematics-statistical-models-and-the-representation-and-summary/) lists the steps of the modelling cycle. This page explains each step in more depth, shows how to judge a model against data without a significance test, and practises the written answers examiners expect. Use the [mathematical models revision notes](/resources/edexcel-a-level-mathematics-yma01-s1-mathematical-models-edexcel-alevel-maths-revision-notes/) for quick recall and the [mathematical models practice set](/resources/edexcel-a-level-mathematics-yma01-s1-mathematical-models-edexcel-alevel-maths-practice/) to test yourself.

## What a model is, and what it is not

A **mathematical model** is a simplified mathematical description of a real-world situation, built so that it can be used to make predictions. In probability and statistics the model usually takes the form of a probability distribution or a set of probabilities: "each face of the die has probability 1/6", or "heights of adult women follow a Normal distribution with mean 162 cm and standard deviation 6 cm".

Two features separate a statistical model from a description of data:

- **It is chosen before, or independently of, the data it is tested on.** Summarising last year's results is description; predicting next year's from stated assumptions is modelling.
- **It involves randomness.** A deterministic model (such as distance = speed × time) gives one answer. A probability model gives the chance of each possible outcome, so individual observations are expected to vary around the prediction.

That second point is the source of the most common weak answer. A model is not wrong just because one observation differs from the prediction. It is in doubt when the pattern of many observations differs from what it predicts.

## The modelling cycle, step by step

1. **Recognise the real-world problem.** Decide what question needs answering and which quantity is random: the number of faulty items in a box, the time a customer waits, the score on a spinner.
2. **Make simplifying assumptions and devise the model.** Typical assumptions are that outcomes are equally likely, that trials are independent, that a probability stays constant, or that a variable is continuous when in reality it is measured to the nearest unit.
3. **Use the model to make predictions.** Calculate probabilities, expected frequencies, a predicted mean or a predicted spread.
4. **Collect data from the real situation.** Run an experiment or survey.
5. **Compare the predictions with the observed data.** Look at the shape of the distribution, its location and its spread, not just one number.
6. **Refine the model if necessary.** Change an assumption or a parameter, then repeat from step 3.

Examiners mark the cycle as a sequence, so a full answer needs the steps in order and needs the word "compare" or equivalent. Leaving out the refinement step, or describing it as "start again", usually loses the final mark.

## Why statisticians use models

**Advantages**

- They are quick and cheap compared with collecting complete data on every possible situation.
- They simplify a complicated situation so it can be analysed and understood.
- They allow predictions about situations that have not yet been observed.
- They let you change a parameter to see its effect (for example, how much a lower defect rate would reduce returns).

**Disadvantages**

- A simplification may leave out a factor that matters.
- The model only works for the situations its assumptions fit.
- Predictions are only as reliable as the assumptions behind them, and predictions far outside the range of the data used to test the model are unreliable.

## Worked example 1: testing an equally-likely model

A four-sided spinner is labelled A, B, C, D. Its maker models it as fair. In an experiment it is spun 200 times with these results:

| Outcome | A | B | C | D |
|---|---|---|---|---|
| Observed frequency | 38 | 61 | 52 | 49 |

**(a) State the predicted frequencies.** Under the model each outcome has probability 1/4, so each predicted frequency is 200 × 1/4 = 50.

**(b) Comment on the model.** The observed frequencies for C and D are close to 50. A is 12 below and B is 11 above, which are the largest differences. With 200 spins, differences of this size could arise by chance, so the data neither clearly support nor clearly reject the model; S1 does not expect a significance test. A sensible written answer says this and names the outcomes that fit least well.

**(c) Suggest a refinement.** If further experiments continue to show fewer A and more B, refine the model by replacing 1/4 with probabilities estimated from relative frequency, for example P(A) = 38/200 = 0.19 and P(B) = 61/200 = 0.305, and test the refined model on new spins. Testing a refined model on the same data used to build it proves nothing.

## Worked example 2: questioning an assumption

A garden centre models the germination of its seeds as follows: each seed germinates with probability 0.8, independently of every other seed. Seeds are sown in trays of 40.

**(a) Predicted mean per tray:** 40 × 0.8 = 32 seeds.

**(b)** Ten trays give these germination counts:

```
33  31  24  35  30  34  23  32  36  22
```

The total is 300, so the mean is 30 per tray, a little below the prediction of 32. More striking is the spread: three trays (24, 23, 22) are far below the rest, while the other seven lie between 30 and 36.

**(c) Which assumption is most doubtful?** Independence. Seeds in the same tray share soil, water and light, so if one tray is too dry, many of its seeds fail together. The low trays suggest a shared cause rather than chance failures of separate seeds.

**(d) Refinement:** record the position of each tray, model the probability of germination as depending on position (for example, a lower probability near the door), and compare again with new trays.

The structure of this answer (prediction, comparison of location and spread, the doubtful assumption with a reason in context, a specific refinement) is what earns full marks.

## Choosing and criticising models later in S1

You will meet these modelling decisions again:

- **Discrete uniform distribution:** assumes every value is equally likely. Ask whether there is any physical reason (shape, weighting, human choice) that could favour some values.
- **Normal distribution:** assumes a symmetric, bell-shaped continuous distribution. Check whether the data are roughly symmetric, whether the mean, median and mode are close, and whether the model gives a sensible probability to impossible values (a negative time, for example). A Normal model for a quantity that cannot be negative is acceptable only if the mean is several standard deviations above zero.
- **Data summaries:** a histogram or box plot of real data is often the evidence used to judge a model's shape.

## Common mistakes

- Describing the cycle without the comparison step, or without saying what is compared (predictions against observed data).
- Claiming a model is "proved" or "disproved" by a single observation.
- Giving a generic refinement ("collect more data") instead of a specific change to an assumption or a parameter.
- Giving an advantage that is really a definition ("a model represents the situation").
- Commenting on the mean only, when the evidence lies in the spread or shape.
- Answering out of context: name the spinner, seeds or customers in every sentence.

## Exam technique

- **"Describe"** the process: give the steps in order, using the words predict, collect, compare and refine.
- **"Comment on"** a model: make a numerical comparison (prediction against observation) and a conclusion about the fit, in context.
- **"State an assumption"**: write one assumption that the model actually makes, for example "each seed germinates independently".
- **"Explain why"** an assumption may not hold: give a reason rooted in the situation, not a general remark.
- **"Suggest a refinement"**: say what changes in the model and how it would then be tested.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S1, section 1 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
