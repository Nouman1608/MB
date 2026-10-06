---
title: "AQA A-Level Mathematics: K: Statistical sampling (7357)"
seoTitle: "AQA A-Level Maths 7357 Statistical Sampling Study Guide"
resourceType: "study-guides"
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
description: "Study guide to AQA A-Level Maths Section K: populations, samples, random and opportunity sampling, informal inference and critiquing methods."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section K: Statistical sampling** (content reference K1) of the
**AQA A-level Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018
onwards. Section K is listed under Paper 3 in the specification, alongside the rest of the
statistics content (Sections L to O). A calculator is required in every 7357 paper, and for
Sections K to O the specification says you must be able to use calculator technology to compute
summary statistics.

Use it with the [Statistical sampling revision notes](/resources/aqa-a-level-mathematics-statistical-sampling-revision-notes/)
and the [Statistical sampling practice questions](/resources/aqa-a-level-mathematics-statistical-sampling-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start. The problem-solving cycle that
frames any statistical enquiry is covered in the
[overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/).

## What Section K covers

| Ref | What you must be able to do |
|---|---|
| K1 | Understand and use the terms 'population' and 'sample' |
| K1 | Use samples to make informal inferences about the population |
| K1 | Understand and use sampling techniques, including simple random sampling and opportunity sampling |
| K1 | Select or critique sampling techniques in the context of solving a statistical problem, including understanding that different samples can lead to different conclusions about the population |

The specification names two techniques, simple random sampling and opportunity sampling, and
says "including", so other standard techniques can appear. This guide also covers systematic,
stratified, quota and cluster sampling, more briefly. Section K has no formulas to learn. The
marks come from precise language and from judging a method against the context.

## Population and sample

The **population** is the whole set of items or people you want to know about. A **sample** is
a part of the population that you actually collect data from.

Two related terms help you describe a method clearly:

- A **census** collects data from every member of the population.
- A **sampling frame** is a list of the population from which a sample can be chosen, such as
  a register, a membership list or a list of serial numbers.

Why sample instead of taking a census? A sample is cheaper and quicker. It is the only option
when testing destroys the item (testing the burn time of candles, say). It also gives
manageable data when the population is very large. A census gives complete information, but it
takes longer and can be impractical.

### Worked example 1: naming the population and sample

A gym has 1,200 members. The manager asks 60 members, chosen from the membership list, how many
times a week they visit.

- Population: **all 1,200 members of the gym**.
- Sample: **the 60 members who were asked**.
- Sampling frame: **the membership list**.

Be specific. "People who go to the gym" is not the population. The population is the members of
this gym, because that is the group the manager wants to describe.

## Informal inference from a sample

A sample statistic, such as a sample mean or a sample proportion, is used to estimate the
matching value for the population. The specification calls this **informal inference**: you
make a sensible estimate and comment on it, without a formal test.

### Worked example 2: estimating a proportion

In the gym survey, 9 of the 60 members said they visit more than four times a week. Estimate how
many of the 1,200 members visit more than four times a week.

```
sample proportion = 9/60 = 0.15
estimate for population = 0.15 × 1200 = 180
```

About **180 members**. State it as an estimate. Another sample of 60 would very likely give a
different figure.

### How good is the estimate?

An estimate from a sample is more reliable when:

- the sample is **larger**, because one unusual member has less effect;
- the sample is **random**, so no part of the population is favoured;
- the sampling frame **matches the population**, so nobody is left out.

An estimate from a biased sample stays biased however large the sample. Asking 600 people
leaving a gym class about how often they visit will overstate visits, because frequent visitors
are more likely to be there.

## Simple random sampling

In a **simple random sample** of size n, every possible sample of size n has the same chance of
being chosen. It follows that every member of the population has the same chance of selection.

Method in steps:

1. Get a sampling frame and number every member, e.g. 1 to 1,200.
2. Use a random number generator (your calculator's random integer function or a computer) to
   generate numbers in that range.
3. Select the matching members. Ignore repeats and any numbers outside the range.
4. Continue until you have n members.

A lottery method (names on identical slips drawn from a hat) also gives a simple random sample
for a small population.

**Advantages:** free from bias in the selection; easy to explain; each member has an equal
chance.

**Disadvantages:** needs a full sampling frame; can be slow and costly for a large or spread-out
population; by chance it may under-represent a group.

When a question asks you to "describe how to take a simple random sample", give all four steps.
"Pick people at random" earns nothing, because it does not say how the randomness is produced.

## Opportunity sampling

An **opportunity sample** (also called a convenience sample) uses whoever is available at the
time and place of collection. For example, you ask the first 30 people who walk past.

**Advantages:** quick, cheap and easy; no sampling frame is needed.

**Disadvantages:** it is unlikely to be representative, and the bias is often linked to the time
and place chosen.

### Worked example 3: critiquing an opportunity sample

A council wants to know how adults in a town travel to work. A researcher stands at the railway
station from 7.30 am to 8.30 am on a Tuesday and asks 100 adults.

Critique:

- Everyone at the station is near a train, so train users are over-represented and drivers and
  cyclists are under-represented. The proportion who travel by train will be **overestimated**.
- People who work from home, start late or work shifts are missed by the time window.
- One weekday may not reflect the whole week.

A better approach is a simple random sample of adults from a list such as the electoral
register, contacted by post or online. Note how each point names the **group affected** and the
**direction of the bias**. That is what earns credit in a critique.

## Other sampling techniques

### Systematic sampling

Choose every k-th member from an ordered list, where k = population size ÷ sample size. Pick the
starting point at random from 1 to k.

**Worked example 4.** Take a systematic sample of 60 from the 1,200 gym members.

```
k = 1200 ÷ 60 = 20
random start between 1 and 20, say 7
members 7, 27, 47, ..., 1187
last member = 7 + 59 × 20 = 1187
```

It is quick and spreads the sample across the list. It is **not** a simple random sample: once
member 7 is chosen, member 8 cannot be, so not every sample of 60 is possible. It can be biased
if the list has a repeating pattern that lines up with k.

### Stratified sampling

Split the population into groups (**strata**) such as age bands or departments. Take a sample
from each stratum in proportion to its size, then use simple random sampling within each
stratum.

**Worked example 5.** A company has 150 staff in Sales, 270 in Production and 80 in Admin. Choose
a stratified sample of 40.

```
total = 150 + 270 + 80 = 500
Sales:      150/500 × 40 = 12
Production: 270/500 × 40 = 21.6 → 22
Admin:       80/500 × 40 = 6.4  → 6
check: 12 + 22 + 6 = 40
```

Round to whole people and check the total is still 40. Stratified sampling reflects the
structure of the population, but you need to know the size of each stratum and have a list for
each.

### Quota sampling

The interviewer is told how many people to find in each group (for example, 12 Sales, 22
Production, 6 Admin) and fills each quota with whoever is available. It is like stratified
sampling, but the selection within each group is **not random**, so it can be biased. It needs
no sampling frame.

### Cluster sampling

The population is split into naturally occurring groups (**clusters**), such as schools or
streets. Some clusters are chosen at random and members are sampled from those clusters. It is
cheaper when the population is spread out, but it is less accurate if the clusters differ from
each other.

## Different samples, different conclusions

Two samples from the same population almost always give different statistics. This is
**sampling variability**, and the specification expects you to understand that it can lead to
different conclusions.

### Worked example 6: two samples of commuting times

Two analysts each take a random sample of 8 employees from the same firm and record one-way
commuting times, in minutes.

```
Sample A: 22 35 18 41 27 30 25 38   mean = 236/8 = 29.5
Sample B: 15 20 26 19 33 21 17 24   mean = 175/8 = 21.875 ≈ 21.9
```

Analyst A might conclude the typical commute is about half an hour. Analyst B might conclude it
is nearer 20 minutes. Both used a fair method. With samples of only 8, chance alone can produce a
gap this size. To reduce the effect:

- use a larger sample;
- combine the samples (here the 16 values give a mean of 411/16 ≈ 25.7 minutes);
- repeat the sampling and look at how much the estimates vary.

Use your calculator's statistics mode to find these means. The specification expects summary
statistics to come from calculator technology in Sections K to O.

## Selecting a technique: a checklist

When asked to choose or critique a method, run through these questions:

1. **Is there a sampling frame?** If not, simple random, systematic and stratified sampling are
   hard. Opportunity or quota may be the only practical choices.
2. **Are there distinct groups that may answer differently?** Then stratified (or quota)
   sampling makes sure each group is represented.
3. **Is cost or time the main constraint?** Opportunity, systematic or cluster sampling are
   cheaper.
4. **Who is missed or over-represented?** Name the group and the direction of the bias.
5. **Is the sample big enough** for the conclusion being drawn?

## Large data set

The specification requires you to become familiar with a large data set in advance of the final
assessment. AQA provides it only on its website, and the specification says you should be able
to analyse a subset or features of the data using a calculator with standard statistical
functions. Choosing a subset of the data is a sampling decision, so the methods in this guide
apply directly. Practise taking a simple random sample and a systematic sample from it, and
compare the summary statistics you get.

## Common errors

- Describing the population too loosely ("people") instead of the exact group in the question.
- Writing "choose at random" without naming a sampling frame, numbering and a random number
  generator.
- Forgetting to ignore repeats when generating random numbers.
- Calling a systematic sample a simple random sample.
- Rounding stratum sizes so the total no longer equals the sample size.
- Confusing quota and stratified sampling: the difference is whether selection within each
  group is random.
- Saying a method is "biased" without saying which group is over- or under-represented.
- Treating a sample estimate as the exact population value.

## Next steps

Condense this into recall with the
[Statistical sampling revision notes](/resources/aqa-a-level-mathematics-statistical-sampling-revision-notes/),
then test yourself with the
[Statistical sampling practice questions](/resources/aqa-a-level-mathematics-statistical-sampling-practice/).
For exam technique across all three papers, see the
[7357 exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.12, K: Statistical sampling.
