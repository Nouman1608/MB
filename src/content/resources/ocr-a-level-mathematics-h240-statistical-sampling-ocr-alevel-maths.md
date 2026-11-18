---
title: "OCR A Level Mathematics A (H240): Statistical sampling"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Statistical sampling"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 2.1
syllabusTopics:
  - qualification: "a-level"
    topic: "statistics-ocr-alevel-maths"
    subtopic: "statistical-sampling-ocr-alevel-maths"
description: "OCR H240 statistical sampling in depth: populations and frames, informal inference, bias versus variability, carrying out samples and critiquing methods in context."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide teaches specification section **2.01 Statistical sampling** (2.01a to 2.01d) of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. All four references are in Stage 1, the content shared with AS Level, and Statistics is examined in component 02, Pure Mathematics and Statistics. The [Sampling and interpreting single-variable data study guide](/resources/ocr-a-level-mathematics-sampling-and-interpreting-single-variable-data/) covers 2.01 alongside data presentation, with a method table and one context. This page concentrates on 2.01 alone and goes deeper into the vocabulary, the difference between bias and sampling variability, the two methods you must carry out, and a step-by-step way to critique a method in context. Recall is in the [Statistical sampling revision notes](/resources/ocr-a-level-mathematics-h240-statistical-sampling-ocr-alevel-maths-revision-notes/), and exam-style questions are in the [Statistical sampling practice questions](/resources/ocr-a-level-mathematics-h240-statistical-sampling-ocr-alevel-maths-practice/).

## What the specification asks

| Ref | Learners should | What it means in practice |
|---|---|---|
| 2.01a | Understand and be able to use the terms "population" and "sample" | Identify both in any context, precisely |
| 2.01b | Be able to use samples to make informal inferences about the population | Estimate a population quantity from a sample and say how far to trust it |
| 2.01c | Understand and be able to use sampling techniques, including simple random sampling and opportunity sampling | Describe exactly how to take each; know their properties |
| 2.01d | Be able to select or critique sampling techniques in the context of solving a statistical problem, including understanding that different samples can lead to different conclusions about the population | Choose a method and justify it; criticise a method using the context |

Two guidance notes matter. When considering random samples, you may assume the population is large enough to sample **without replacement** unless told otherwise. You should be familiar with, and able to critique in context, **systematic, stratified, cluster and quota** sampling, but you will not be required to carry them out.

## The vocabulary, used precisely

| Term | Meaning | Example: a council survey of bus users |
|---|---|---|
| Population | Every member of the group the question is about | All adults who used the town's buses last month |
| Sample | The members actually observed | The 200 bus users interviewed |
| Census | Observing every member of the population | Interviewing every bus user, which is impractical |
| Sampling unit | One member of the population | One bus user |
| Sampling frame | A list of the population from which the sample is drawn | Records of registered travel-card holders |

The population must match the question being asked: if the council wants the views of *all residents*, a sample of bus users comes from the wrong population, however carefully it is chosen. Name the group, the place and the time.

**Why sample instead of using a census?** A census can be too expensive or slow, the population may be too large or hard to list, and some tests destroy the item (testing the breaking strain of every cable leaves none to sell). A census, when possible, gives the true value with no sampling variability, but it can still contain measurement errors.

## Informal inference: what a sample can and cannot tell you

A **statistic** calculated from a sample, such as a sample mean or proportion, is used as an estimate of the corresponding population value. The inference is *informal*: you say what is likely, without a formal test or confidence level.

### Worked example 1

A café owner wants to know the mean amount spent per customer. She records spending for a simple random sample of 50 customers and finds a mean of £7.40. A second simple random sample of 50 gives £8.10.

- **Inference:** the mean spend for all customers is probably around £7 to £8.
- **Different samples, different conclusions:** the two estimates differ by 70p because each sample contains different customers. This is **sampling variability**, and it does not mean either sample was badly chosen.
- **Improving the estimate:** larger random samples vary less from one sample to the next, so the estimates would be closer to each other and, typically, to the population mean.

### Bias is not the same as variability

| | Sampling variability | Bias |
|---|---|---|
| Cause | Chance: each random sample contains different members | The method systematically favours some members |
| Effect | Estimates scatter around the true value | Estimates are consistently too high or too low |
| Cure | Larger sample | Change the method; a larger sample does not help |

**Worked example 2.** If the café owner had recorded only customers at lunchtime, when people buy meals, every sample would tend to overestimate the mean spend. Taking 500 lunchtime customers instead of 50 would make the estimate *more consistent* but would not remove the overestimate.

## The two methods you must carry out

### Simple random sampling

**Definition.** Every possible sample of the chosen size has the same chance of being selected. It follows that every member has the same chance of being chosen.

**Method.**

1. Obtain a sampling frame and number its members, for example 001 to N.
2. Use a random number generator (on a calculator or computer) or random number tables to generate numbers in that range.
3. Ignore any number outside the range and any repeat, because the sample is taken without replacement.
4. Continue until n different members are selected.

**Strengths:** free from selection bias; every member equally likely; the basis for the statistical theory used later in the course.
**Weaknesses:** needs a complete, up-to-date frame; can be slow or costly if members are spread out; a small sample may, by chance, miss a small subgroup.

### Opportunity (convenience) sampling

**Method.** Take members who are available and willing at the time, for example the first 40 shoppers leaving a supermarket on Tuesday morning.

**Strengths:** quick, cheap, needs no frame.
**Weaknesses:** not random; the sample depends on who is present, so particular groups may be missed or over-represented, and the results may be biased.

An opportunity sample is a poor choice when the quantity studied is likely to depend on who happens to be available, as opinions and spending usually do.

## Methods to critique (not carry out)

| Method | Description | Typical critique point |
|---|---|---|
| Systematic | Choose every kth member of a list after a random start | A repeating pattern in the list can line up with k, giving a biased sample |
| Stratified | Divide the population into groups (strata) and take a random sample from each, in proportion to size | Represents each group, but needs a frame with every member's group known |
| Cluster | Divide into clusters (such as schools or streets), choose some clusters at random and survey everyone in them | Cheap for spread-out populations, but chosen clusters may not be typical |
| Quota | Interviewer chooses people to fill a set number in each group | No frame needed, but the interviewer's choice is not random and can introduce bias |

## Critiquing in context: a five-question checklist

1. **Is it random?** If not, say whose choice decides membership (interviewer, volunteers, availability).
2. **Is the frame complete and up to date?** Who is missing from the list?
3. **Who is over- or under-represented, and why?** Use details from the question: time, place, method of contact.
4. **How would that affect the estimate?** Too high or too low, if you can tell.
5. **What would be better?** A specific improvement that fixes the problem you named.

### Worked example 3: a full critique

A gym wants to estimate how many hours per week its 1200 members exercise. The manager hands questionnaires to the first 60 members who arrive on Monday morning.

- This is an **opportunity sample**, so it is not random.
- Members who come on Monday morning may be those with more free time, such as retired members, and people who attend once a week at weekends are excluded.
- Members who arrive at all on that morning are likely to exercise more often than average, so the estimate of weekly hours is likely to be **too high**.
- **Improvement:** number the membership list 0001 to 1200 and take a simple random sample of 60, contacting the chosen members directly.

Every sentence is tied to the gym. "Opportunity samples are biased", with no reason in context, earns little credit.

### Worked example 4: selecting a method

A school of 900 students wants students' views on a new timetable, and views may differ by year group. The school has a full list of students with their year groups.

- A **simple random sample** is unbiased but could, by chance, contain few students from one year.
- Because the list includes year groups, **stratified** sampling by year would guarantee each year is represented in proportion. (You need to recommend and justify it; you are not required to calculate the numbers.)
- **Opportunity** or **quota** sampling at lunchtime would be quicker but risks bias towards students who are in the canteen.

The recommendation: stratified by year group, because the population divides into groups whose views may differ and a suitable frame exists.

## Common mistakes

- A vague population ("people") or confusing the population with the sampling frame.
- Calling any sample chosen "at random" by a person a simple random sample.
- Forgetting to reject repeats and out-of-range numbers.
- Saying a larger sample removes bias.
- Critiques with no reference to the context.
- Suggesting an improvement that does not fix the problem identified.

## Exam technique for the command words

- **State** or **identify**: a short precise answer, in context ("the 1200 gym members").
- **Describe** how to take a sample: list the frame, numbering, random numbers and the rule for rejects.
- **Explain** or **comment**: give a reason tied to the situation, then its effect on the conclusion.
- **Criticise** or **critique**: one weakness, why it matters here, and (if asked) an improvement.

## Frequently asked questions

**What is the difference between a population and a sampling frame?**
The population is everyone the question is about. The frame is the list you actually sample from. If the list leaves people out, the sample cannot represent them.

**Do I need to calculate a stratified sample for OCR H240?**
The specification says you should be familiar with stratified, systematic, cluster and quota sampling and able to critique them in context, but you will not be required to carry them out.

## Official syllabus

The OCR A Level in Mathematics A (H240) specification, Version 3.1 (August 2026), published by OCR, section 2.01 Statistical sampling (2.01a to 2.01d).
