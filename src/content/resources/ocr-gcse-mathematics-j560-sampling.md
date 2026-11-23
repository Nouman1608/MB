---
title: "OCR GCSE Mathematics (J560): Sampling"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 12 – Statistics"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 12.1
syllabusTopics:
  - qualification: "gcse"
    topic: "statistics-ocr-gcse-maths"
    subtopic: "sampling-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 12.01 in depth: defining a population, inferring from a sample, simple random sampling with random numbers, and spotting bias."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 12.01, Sampling, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. The statement sits in the column headed "Foundation tier learners should also be able to", so it is content for **both tiers**. Sampling questions are usually short, but they reward precise wording more than almost any other topic: an answer must name the population, the sample and the problem in the context of the question.

The [sampling, charts, cumulative frequency and histograms guide](/resources/ocr-gcse-mathematics-sampling-and-representing-data-with-charts-line-graphs/) introduces 12.01 alongside 12.02. This page goes further on 12.01 alone: defining a population exactly, inferring totals, means and whole distributions from a sample, combining samples, choosing a simple random sample from random numbers, and writing a full evaluation of a sampling method. Condense it with the [12.01 revision notes](/resources/ocr-gcse-mathematics-j560-sampling-revision-notes/) and test yourself with the [12.01 practice questions](/resources/ocr-gcse-mathematics-j560-sampling-practice/).

## What the specification asks

Section 12.01a, Populations and samples, asks you to:

- "Define the population in a study, and understand the difference between population and sample."
- "Infer properties of populations or distributions from a sample."
- "Understand what is meant by simple random sampling, and bias in sampling."

Simple random sampling is the only sampling method the statement names, so that is the one to describe in detail.

## Defining the population

The **population** is the complete set of people, items or events that a study wants to draw a conclusion about. Defining it means saying exactly who or what is included, often with a place and a time.

| Question being investigated | Population |
|---|---|
| Do Year 11 students at Hill School want a later start? | All Year 11 students at Hill School |
| How long do Brand X light bulbs last? | All Brand X light bulbs made |
| How many cars use Mill Lane between 8 am and 9 am on weekdays? | All car journeys along Mill Lane in that hour on weekdays |

A common error is to define the population too widely ("all students") or too narrowly ("the students I asked"). The second is the sample, not the population.

### Why take a sample?

A **sample** is part of the population, chosen to stand for the whole. Surveying everyone is often impossible or pointless because:

- the population is too large, or not all of it can be listed or reached;
- it would cost too much or take too long;
- testing destroys the item, as when a bulb is run until it fails or a match is struck.

The price of sampling is that the answer is an estimate. Two different samples from the same population will usually give slightly different results.

## Inferring from a sample

To **infer** is to use the sample to estimate something about the population. Assume the sample is representative, then scale up.

### Proportions and totals

**Worked example 1.** An orchard has 3000 apples. A sample of 50 is checked and 7 are bruised. Estimate the number of bruised apples in the orchard.

```
proportion bruised in sample = 7/50 = 0.14
estimate for orchard = 0.14 × 3000 = 420
```

About 420 apples are bruised. Say "about" or "estimate": this is not an exact count.

### Means

The mean of a sample is used as an estimate of the mean of the population.

**Worked example 2.** The same 50 apples have a total mass of 7.25 kg. Estimate the total mass of all 3000 apples.

```
sample mean = 7.25 ÷ 50 = 0.145 kg = 145 g
estimated total = 0.145 × 3000 = 435 kg
```

### Whole distributions

"Distributions" in the specification means you can estimate how the whole population is spread across categories, not just one figure.

**Worked example 3.** A sports centre has 1200 members. A sample of 80 members gives their favourite activity.

| Activity | Gym | Swimming | Classes | Courts |
|---|---|---|---|---|
| Sample frequency | 32 | 20 | 18 | 10 |
| Estimate for all members | 32/80 × 1200 = 480 | 300 | 270 | 150 |

Each estimate uses the same scale factor, 1200 ÷ 80 = 15. Check that the estimates add to the population: 480 + 300 + 270 + 150 = 1200.

### Comparing and combining samples

Two students sample the same population of 1200 members. Ava asks 40 and finds 12 prefer swimming. Ben asks 60 and finds 21.

```
Ava: 12/40 = 0.30 → estimate 0.30 × 1200 = 360
Ben: 21/60 = 0.35 → estimate 0.35 × 1200 = 420
combined: 33/100 = 0.33 → estimate 0.33 × 1200 = 396
```

The estimates differ because each sample is a different selection. The combined estimate is based on the larger sample (100 members), so it is likely to be more reliable, provided both samples were chosen fairly. Notice that you combine the counts (12 + 21 out of 40 + 60); you do not average 0.30 and 0.35.

## Simple random sampling

In a **simple random sample**, every member of the population has an equal chance of being chosen, and every possible sample of that size is equally likely. "Random" describes the method, not the result: picking people "without thinking" is not random.

### Choosing one using random numbers

1. Obtain a list of the whole population. This list is the **sampling frame**.
2. Give each member a number with the same number of digits.
3. Generate random numbers (a calculator or computer random number function, or numbered tickets drawn from a bag).
4. Ignore numbers outside the range, and ignore repeats.
5. Continue until the sample is the size you need.

**Worked example 4.** A club has 640 members numbered 001 to 640. A sample of 3 is needed. The random number generator gives these three-digit numbers:

```
583  902  117  583  000  664  249
```

- 583: in range, choose it.
- 902: above 640, ignore.
- 117: choose it.
- 583: a repeat, ignore.
- 000: no member has this number, ignore.
- 664: above 640, ignore.
- 249: choose it.

The sample is members **583, 117 and 249**.

## Bias in sampling

A sample is **biased** when the way it is chosen makes some members of the population more likely to be included than others, so the results lean one way. Bias comes from the method, so collecting more data the same way does not remove it.

| Source of bias | Example | Better method |
|---|---|---|
| Sampling frame misses people | Using a list of club members who have email | Use the full membership list |
| Convenience | Asking the first 30 people at the school gate | Random selection from the whole year group |
| Time or place | Surveying shoppers on a weekday morning | Sample at a range of times, or from a full list |
| Volunteers | An online poll anyone can answer | Choose people at random and follow up non-replies |
| Non-response | Only 20% of posted forms come back | Follow up non-replies; increase the response rate |
| Question wording | "Don't you agree the fee is too high?" | "What is your view of the fee?" |

### Annotated model answer: evaluating a method

**Question.** A town council wants to know what residents think of a plan to build a new leisure centre. It surveys the first 100 people who enter the old leisure centre on a Saturday morning. Give two reasons why this sample may be biased, and describe a better method.

**Model answer.**

1. The people asked all already use the leisure centre, so they are more likely to support a new one than residents who never go. *(Names the group that is over-represented, and the effect on the result.)*
2. Only people free on a Saturday morning can be asked, so, for example, residents who work on Saturdays are left out. *(A second, different source of bias, linked to the context.)*
3. Better method: take a list of every household address in the town, number it, and use random numbers to choose 100 households to survey. *(Defines the sampling frame and the random method.)*

Each point is tied to this council, this survey and this population. "It is not random" alone earns little: say who is left out or over-represented, and why that matters.

## Common mistakes

- Giving the sample when asked for the population.
- Saying a larger sample "removes bias". It improves reliability only if the method is fair.
- Averaging two sample proportions instead of combining their counts.
- Describing random sampling as "picking anyone" or "picking without looking".
- Forgetting to ignore repeated or out-of-range random numbers.
- Writing a criticism that would fit any survey, with no reference to the context.
- Presenting an estimate as an exact fact.

## Exam technique

- **"Define the population"**: name exactly who or what is included, using the words of the question.
- **"Explain why the sample may be biased"**: name who is over- or under-represented and how that pushes the result.
- **"Estimate"**: show the proportion or scale factor, then multiply; finish with "about".
- **"Describe how to take a simple random sample"**: list, number, generate random numbers, ignore repeats, stop at the sample size.
- **"Comment on reliability"**: refer to the sample size and to whether the method was random.

## Where to go next

Condense the methods with the [12.01 revision notes](/resources/ocr-gcse-mathematics-j560-sampling-revision-notes/), then try the [12.01 practice questions](/resources/ocr-gcse-mathematics-j560-sampling-practice/). Charts and tables for the data you collect follow in the [12.02 interpreting and representing data guide](/resources/ocr-gcse-mathematics-j560-interpreting-and-representing-data/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 12.01, Sampling (12.01a Populations and samples).
