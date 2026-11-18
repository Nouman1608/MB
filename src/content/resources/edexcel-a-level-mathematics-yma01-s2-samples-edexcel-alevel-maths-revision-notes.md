---
title: "Edexcel International A Level Mathematics (YMA01): Samples -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit S2: Statistics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 8.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-samples-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths S2 samples: census versus sample, sampling units and frames, statistics, sampling distributions, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit S2, content statements 4.1 ("Population, census and sample. Sampling unit, sampling frame") and 4.2 ("Concepts of a statistic and its sampling distribution"). For worked examples, use the [samples study guide](/resources/edexcel-a-level-mathematics-yma01-s2-samples-edexcel-alevel-maths/).

## Key terms

| Term | Meaning |
|---|---|
| Population | The whole collection of items of interest |
| Census | Every member of the population is observed |
| Sample | Observations from a subset of the population, used to learn about the population |
| Sample survey | An investigation using a sample |
| Sampling unit | A single member of the population that may be chosen |
| Sampling frame | A list of all the sampling units, from which the sample is chosen |
| Statistic | A random variable calculated from the sample values only, with no unknown parameters |
| Sampling distribution | The probability distribution of a statistic: all its possible values with their probabilities |
| Parameter | A fixed (often unknown) population value, such as μ or p |

## Census versus sample

| | Census | Sample |
|---|---|---|
| Accuracy | Exact (unbiased, no sampling variation) | Subject to natural variation; may be biased |
| Cost and time | High | Lower |
| Destructive testing | Impossible | Possible |
| Data volume | Large, harder to process | Smaller |
| Best when | Population small, exact answer needed | Population large, or testing destroys items |

## Identifying the parts in context

Ask three questions:

1. Who or what is the investigation about? That is the **population**.
2. What is one of them? That is a **sampling unit**.
3. What list could you choose from? That is the **sampling frame**.

| Context | Population | Sampling unit | Sampling frame |
|---|---|---|---|
| Members' views at a gym | All members of the gym | A member | The membership list |
| Quality of a day's output of bottles | All bottles made that day | A bottle | A numbered list of the day's bottles |
| Opinions of a town's voters | All registered voters in the town | A voter | The electoral register |

A frame may be **incomplete or out of date**, which can bias the sample.

## Statistic or not?

For a random sample X₁, ..., Xₙ from a population with unknown mean μ and unknown variance σ²:

| Expression | Statistic? | Reason |
|---|---|---|
| X̄ | Yes | Uses sample values only |
| ΣXᵢ² | Yes | Uses sample values only |
| max(Xᵢ) − min(Xᵢ) | Yes | Uses sample values only |
| X̄ − μ | No | Contains unknown μ |
| ΣXᵢ/σ | No | Contains unknown σ |

If a parameter's value is **given** in the question, an expression using it is a statistic.

## Building a sampling distribution

1. List every possible sample (ordered, if sampling is with replacement or from a large population).
2. Find the probability of each sample by multiplying.
3. Calculate the statistic for each sample.
4. Collect equal values and add their probabilities.
5. Check the total is 1.

**Shortcut for counts:** the number of sample members with a property, from a large population where a proportion p has it, has sampling distribution B(n, p).

**Check for the mean:** E(X̄) equals the population mean.

## Mini example

A large population has values 1, 2 and 3, each equally likely. For samples of size 3, the largest value L satisfies P(L ≤ m) = (m/3)³, so

```
P(L = 1) = 1/27      P(L = 2) = 8/27 − 1/27 = 7/27      P(L = 3) = 1 − 8/27 = 19/27
```

## Exam traps

- Giving the population when asked for the sampling frame.
- Writing a generic reason ("a census is expensive") with no link to the context.
- Missing reordered samples, so probabilities do not add to 1.
- Calling an expression with an unknown parameter a statistic.
- Forgetting that a sample survey still has natural variability even if it is unbiased.
- Saying a census is impossible: it is only impractical, unless testing is destructive.

## Self-test

1. Define a census.
2. Give two advantages of a sample survey over a census.
3. Give one disadvantage of a sample survey.
4. Explain why a census is unsuitable for testing the breaking strain of ropes.
5. A head teacher surveys pupils about homework. Suggest a sampling frame.
6. What is a sampling unit in Question 5?
7. Define a statistic.
8. μ is unknown. Is (X₁ + X₂)/2 − μ a statistic?
9. What is a sampling distribution?
10. Samples of 2 are taken from a large population in which half the values are 0 and half are 4. Find the sampling distribution of the sample mean.
11. Why might a sample chosen from a telephone directory be biased?
12. A large population has 30% red items. Name the sampling distribution of the number of red items in a sample of 15.

**Answers:** 1. An investigation in which every member of the population is observed. 2. Any two: cheaper; quicker; possible when testing is destructive; less data to process. 3. It may not represent the population (natural variation or bias), so results are uncertain. 4. Testing breaks the ropes, so none would be left. 5. The school register (list of pupils). 6. A pupil. 7. A random variable calculated only from the sample values, with no unknown parameters. 8. No, because it contains the unknown μ. 9. The probability distribution of a statistic: every value it can take with its probability. 10. Means 0, 2, 4 with probabilities 1/4, 1/2, 1/4. 11. People not listed (for example, those with only mobile numbers) cannot be chosen, so the frame is incomplete. 12. B(15, 0.3).
