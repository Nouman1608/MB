---
title: "AQA A-Level Mathematics: K: Statistical sampling (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Statistical Sampling Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "K: Statistical sampling"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "k-statistical-sampling-aqa-alevel-maths"
description: "Condensed AQA A-Level Maths revision notes on statistical sampling: key terms, sampling methods compared, informal inference and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section K: Statistical sampling** (K1) of the **AQA A-level Mathematics
(7357) specification**, version 1.3, for A-level exams from June 2018 onwards. Section K is
Paper 3 content in the specification. A calculator is required in every 7357 paper. For full
explanations and longer worked examples, read the
[Statistical sampling study guide](/resources/aqa-a-level-mathematics-statistical-sampling/) first.

Then test yourself with the
[Statistical sampling practice questions](/resources/aqa-a-level-mathematics-statistical-sampling-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/), the
[printable checklist](/checklists/aqa/a-level/mathematics/) and the free
[10-minute diagnostics](/diagnostics/) help you plan what to revise next.

## K1 at a glance

K1 asks you to:

- understand and use the terms **population** and **sample**;
- use samples to make **informal inferences** about the population;
- understand and use **sampling techniques**, including **simple random** and **opportunity**
  sampling;
- **select or critique** sampling techniques in context, knowing that **different samples can
  lead to different conclusions**.

Simple random and opportunity sampling are named in the specification. The other methods below
are standard techniques that the word "including" allows questions to use.

## Key terms

| Term | Meaning |
|---|---|
| Population | The whole set of items or people of interest |
| Sample | A part of the population from which data are collected |
| Census | Data collected from every member of the population |
| Sampling frame | A list of the population from which the sample is chosen |
| Sample statistic | A value worked out from the sample, e.g. sample mean or proportion |
| Informal inference | Using a sample statistic to estimate a population value, with a comment on reliability |
| Sampling variability | Different samples from one population give different statistics |
| Bias | A method that tends to over- or under-represent part of the population |

**Census or sample?** A census gives complete information but is slow, costly and impossible if
testing destroys the item. A sample is quicker and cheaper but carries sampling variability.

## The methods compared

| Method | How | Main advantage | Main drawback |
|---|---|---|---|
| Simple random | Number the frame; random numbers choose members; ignore repeats | Every sample of size n equally likely; no selection bias | Needs a full frame; slow for large or spread-out populations |
| Opportunity | Whoever is available at the time and place | Quick, cheap, no frame needed | Unlikely to be representative |
| Systematic | Every k-th item, k = N ÷ n, random start from 1 to k | Quick; spread across the list | Not simple random; biased if the list has a pattern |
| Stratified | Split into strata; sample each in proportion; random within each | Reflects population structure | Needs stratum sizes and a frame for each |
| Quota | Fill a set number per group with whoever is available | No frame needed; covers each group | Selection within groups is not random |
| Cluster | Randomly choose natural groups, then sample within them | Cheap for spread-out populations | Less accurate if clusters differ |

## Method in steps

**Simple random sample of size n**

1. Obtain a sampling frame and number every member 1 to N.
2. Generate random integers from 1 to N (calculator or computer).
3. Select the matching members, ignoring repeats.
4. Stop when n members are chosen.

**Systematic sample**

1. Work out k = N ÷ n.
2. Choose a random start r from 1 to k.
3. Take members r, r + k, r + 2k, ... The last is r + (n − 1)k.

**Stratified sample**

1. Find each stratum's share: stratum size ÷ N × n.
2. Round to whole numbers and check the total is still n.
3. Take a simple random sample of that size from each stratum.

**Informal inference**

1. Work out the sample statistic (mean or proportion).
2. Scale to the population if asked (proportion × N).
3. Say it is an estimate, and comment on the sample's size and method.

## Small worked reminders

- 2,400 tickets, sample of 80 by systematic sampling: k = 2400 ÷ 80 = **30**.
- Strata of 60 and 140, sample of 30: 60/200 × 30 = **9** and 140/200 × 30 = **21**.
- 12 of 50 sampled bulbs are faulty, batch of 5,000: 12/50 = 0.24, estimate **1,200** faulty.

## Must-know distinctions

- **Simple random vs systematic.** In a simple random sample every possible sample of size n is
  equally likely. In a systematic sample, once the start is fixed, the rest is fixed.
- **Stratified vs quota.** Both fix how many come from each group. Stratified selects at random
  within groups; quota does not.
- **Stratified vs cluster.** Strata are each sampled; clusters are themselves sampled, and
  unchosen clusters contribute nobody.
- **Population vs sampling frame.** The frame is the list you can use; it may miss part of the
  population (e.g. a phone directory misses people with no listed number).
- **Biased vs variable.** Bias is a systematic error from the method. Variability is chance
  difference between samples. A larger sample reduces variability, not bias.

## Different samples, different conclusions

Two fair samples from one population give different statistics. Small samples vary more. If two
samples suggest different conclusions, do not assume one is "wrong". Prefer the larger or
better-designed sample, or combine them, and say the conclusion is uncertain. Calculator
statistics mode gives the summary statistics quickly; the specification expects you to use it
for Sections K to O.

## Writing a critique in three moves

A good criticism of a sampling method has three parts:

1. **Name the feature** of the method (where, when or how people are chosen).
2. **Name the group** that is over- or under-represented as a result.
3. **State the effect** on the estimate (overestimate or underestimate).

Reminder: a gym owner wants to know how many local residents would join a new pool. She asks
50 people in the gym's café on a Sunday morning.

- Feature: only people already at the gym on a Sunday morning are asked.
- Group: regular exercisers are over-represented; people who never use gyms are missed.
- Effect: interest in joining is likely to be **overestimated**.

A suggested improvement should fix the named problem, for example a simple random sample of
local households from a list of addresses. Saying "use a bigger sample" does not fix bias.

## Large data set

The specification requires familiarity with a large data set, which AQA provides only on its
website, and expects you to analyse a subset of it with a calculator. Choosing that subset is a
sampling decision, so state which method you used and why.

## Quick self-test

1. A school has 900 pupils. 45 are asked about lunch. State the population and the sample.
2. Give two reasons for using a sample rather than a census.
3. A list has 750 names. Find the interval for a systematic sample of 25.
4. A club has 320 juniors, 480 adults and 200 seniors. How many of each go in a stratified
   sample of 50?
5. In a random sample of 80 households, 14 own an electric car. Estimate how many of 3,600
   households in the town own one.
6. The total mass of 24 randomly sampled apples is 1,446 g. Estimate the mean mass of an apple
   in the crop.
7. A systematic sample uses interval 30 and starts at 4. What is the 25th item chosen?
8. Explain why a systematic sample is not a simple random sample.
9. State the key difference between quota and stratified sampling.
10. A researcher asks shoppers in a sports shop how often they exercise. Give one criticism.
11. Two random samples of 10 from the same population have means 14.2 and 17.6. Explain why.
12. Does a larger sample remove bias? Explain briefly.

### Answers

1. Population: all **900 pupils** at the school. Sample: the **45 pupils** asked.
2. Any two: quicker; cheaper; testing may destroy items; a census of a large population is
   impractical.
3. k = 750 ÷ 25 = **30**.
4. Total 1,000. Juniors 320/1000 × 50 = **16**, adults **24**, seniors **10**.
5. 14/80 = 0.175; 0.175 × 3600 = **630** households.
6. 1446 ÷ 24 = **60.25 g** (about 60 g), as an estimate.
7. 4 + 24 × 30 = **724**.
8. Not every possible sample of the same size can be chosen: once the start is fixed, the other
   members are fixed.
9. Stratified sampling selects **at random** within each group; quota sampling does not.
10. People in a sports shop are likely to exercise more than average, so frequency of exercise
    will be **overestimated**.
11. **Sampling variability**: each sample contains different members, and small samples vary
    more.
12. **No.** A larger sample reduces variability, but a biased method stays biased.

## Where marks are usually lost

- Stating the population as "everyone" or "people" instead of the exact group in the question.
- Describing simple random sampling without a sampling frame, numbering or a random number
  generator.
- Not saying "ignore repeats" when describing random number selection.
- Giving the systematic interval but no random start.
- Rounding stratum sizes so they no longer add to the sample size.
- Describing quota sampling as random within groups.
- Saying a method is "biased" without naming the group and the direction of the effect.
- Presenting an estimate from a sample as the exact population value.
- Claiming a larger sample fixes a biased method.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.12, K: Statistical sampling.
