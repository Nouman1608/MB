---
title: "Edexcel International A Level Mathematics (YMA01): Samples"
resourceType: "study-guides"
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
description: "Edexcel IAL Maths S2 guide to samples: populations, censuses, sampling units and frames, statistics and finding a sampling distribution, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers the sampling content of **Unit S2: Statistics 2** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3. The unit description lists "samples" as one of its five areas, and the content statements are 4.1: "Population, census and sample. Sampling unit, sampling frame", with the guidance that students should "know the advantages and disadvantages associated with a census and a sample survey"; and 4.2: "Concepts of a statistic and its sampling distribution."

These ideas open the S2 hypothesis-testing section, and the test itself is covered in the companion guide on [hypothesis tests](/resources/edexcel-a-level-mathematics-yma01-s2-hypothesis-tests-edexcel-alevel-maths/). The broader S2 page on [samples and hypothesis tests](/resources/edexcel-ial-mathematics-populations-and-samples-sampling-distributions-and/) gives the definitions with one example each. This page practises the written answers on censuses and sampling frames in more contexts, and builds sampling distributions for statistics other than the mean. Use the [samples revision notes](/resources/edexcel-a-level-mathematics-yma01-s2-samples-edexcel-alevel-maths-revision-notes/) for recall and the [samples practice set](/resources/edexcel-a-level-mathematics-yma01-s2-samples-edexcel-alevel-maths-practice/) to test yourself.

## The vocabulary, precisely

| Term | Definition |
|---|---|
| Population | The whole set of items of interest |
| Census | An investigation in which every member of the population is observed or measured |
| Sample | A selection of observations taken from a subset of the population, used to find out about the whole population |
| Sampling unit | An individual member of the population that can be sampled |
| Sampling frame | A list of the sampling units, used to select the sample (for example, a register, a customer database or numbered items) |

Exam questions usually give a context and ask you to identify each of these. In a survey of a school's students about lunch options, the population is all the students at the school, a sampling unit is one student, and a suitable sampling frame is the school register. Note that the sampling frame is a **list**, not the population itself: "all the students" is the population, "the list of all the students' names" is the frame.

A sampling frame can be imperfect. A list of customers who have registered online misses those who pay in cash, so a sample drawn from it may not represent all customers.

## Census or sample?

**Advantages of a census**

- It should give a completely accurate result, because every member is measured.
- There is no sampling variability, so no doubt about whether the sample was representative.

**Disadvantages of a census**

- It is time-consuming and expensive, especially for a large population.
- It cannot be used when the testing destroys the item.
- The volume of data is large and harder to process.

**Advantages of a sample**

- It is cheaper and quicker than a census.
- It is the only option when testing is destructive.
- Less data need processing.

**Disadvantages of a sample**

- There is uncertainty from natural variation between samples, so the result may differ from the true population value.
- It may be biased, for example if the sampling frame is incomplete or some units are less likely to respond.

## Worked example 1: choosing a method

For each situation, say whether a census or a sample is more appropriate, with a reason.

**(a)** A manufacturer wants to know the mean lifetime of the light bulbs it produced this month. **Sample**: measuring lifetime destroys the bulb, so a census would leave nothing to sell.

**(b)** A tutor with 12 students wants to know how many hours each spent revising last week. **Census**: the population is small, so asking every student is quick and gives an exact answer.

**(c)** A national water company wants to know the proportion of households who would accept a meter. **Sample**: the population is very large, so a census would be too costly and slow.

In each case, the reason must be linked to the context: "destroys the bulb", "only 12 students", "millions of households". A general phrase such as "a sample is cheaper" scores less on its own.

## Statistics and sampling distributions

A **statistic** is a random variable calculated from the sample values alone, containing no unknown parameters. If X₁, X₂, ..., Xₙ is a random sample from a population with unknown mean μ, then

- X̄ = (X₁ + ... + Xₙ)/n is a statistic;
- the largest value, max(X₁, ..., Xₙ), is a statistic;
- X₁ + X₂ − 2 is a statistic;
- X̄ − μ is **not** a statistic, because μ is unknown.

A statistic varies from sample to sample, so it has a probability distribution of its own. That distribution is the **sampling distribution** of the statistic: a list (or formula) of every value the statistic can take, with its probability.

## Worked example 2: mean and median of a sample of three

A large population of counters is such that 60% show the number 1 and 40% show the number 5. A random sample of three counters is taken. Find the sampling distributions of the median M and the mean X̄.

Let K be the number of 5s in the sample. Since the population is large, K can be treated as B(3, 0.4):

```
P(K = 0) = 0.6³              = 0.216
P(K = 1) = 3 × 0.4 × 0.6²    = 0.432
P(K = 2) = 3 × 0.4² × 0.6    = 0.288
P(K = 3) = 0.4³              = 0.064
```

**Median.** With three values, the median is the middle one. It is 1 when at most one 5 is drawn, and 5 otherwise.

| m | 1 | 5 |
|---|---|---|
| P(M = m) | 0.648 | 0.352 |

**Mean.** X̄ = (number of 1s + 5 × number of 5s)/3 = (3 + 4K)/3.

| x̄ | 1 | 7/3 | 11/3 | 5 |
|---|---|---|---|---|
| P(X̄ = x̄) | 0.216 | 0.432 | 0.288 | 0.064 |

A check: E(X̄) = 0.216 + 1.008 + 1.056 + 0.32 = 2.6, which equals the population mean 0.6 × 1 + 0.4 × 5 = 2.6. The mean of the sampling distribution of X̄ is always the population mean, a useful way to catch errors.

## Worked example 3: a count as a statistic

A council believes 25% of residents support a new bus route. A random sample of 10 residents is asked, and Y is the number who support it. If the council is right, the sampling distribution of Y is B(10, 0.25). For instance,

```
P(Y ≥ 5) = 1 − P(Y ≤ 4) = 1 − 0.9219 = 0.0781
```

So if 5 or more of the 10 support the route, that would happen less than 8% of the time when the council's figure is correct. Using the sampling distribution of a statistic in this way is exactly how a hypothesis test works.

## Common mistakes

- Naming the population as the sampling frame, or the reverse.
- Writing a sampling unit as a group ("students") rather than one member ("a student").
- Giving advantages of a sample that are not linked to the context.
- Calling a quantity that includes an unknown parameter a statistic.
- Listing the values of a statistic but not their probabilities when asked for a sampling distribution.
- Forgetting that ordered samples matter when listing outcomes: (1, 5) and (5, 1) are different.

## Exam technique

- **"Identify"** or **"State"** the sampling frame: name a specific list in the context.
- **"Give a reason"** for a census or a sample: refer to the size of the population, cost, or whether testing is destructive in this context.
- **"Explain what is meant by"** a statistic: "a random variable that is a function of the sample values only, involving no unknown parameters".
- **"Find the sampling distribution"**: list every possible value with its probability, and check that the probabilities add to 1.
- **"State, with a reason, whether"** an expression is a statistic: look for unknown parameters.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit S2, content statements 4.1 and 4.2 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
