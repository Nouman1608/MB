---
title: "Cambridge O Level Statistics (4040): General ideas of sampling"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "General ideas of sampling: population, census, sample and representative sample"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 13
syllabusTopics:
  - qualification: "o-level"
    topic: "data-and-its-collection-4040"
    subtopic: "general-ideas-of-sampling-4040"
description: "Study guide to section 1.1 of O Level Statistics 4040: populations, census or sample, what makes a sample representative, and estimating from a sample."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1.1 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: general ideas of sampling, which the syllabus says includes "knowledge of the terms: population, census, sample, representative sample." The syllabus is not tiered, so this is for every candidate.

The broader page [Data and Its Collection](/resources/o-level-cambridge-statistics-data-and-its-collection/) gives a short comparison of census and sample alongside the rest of Topic 1. This guide goes further on section 1.1 itself: defining a population precisely, deciding between a census and a sample with reasons tied to the situation, checking whether a sample is representative, and using a sample to estimate something about a population. Other pages for this section: the [1.1 revision notes](/resources/cambridge-o-level-statistics-4040-general-ideas-of-sampling-revision-notes/) and the [1.1 practice questions](/resources/cambridge-o-level-statistics-4040-general-ideas-of-sampling-practice/). Methods of selecting a sample are in [types of sampling](/resources/cambridge-o-level-statistics-4040-types-of-sampling/).

## What this section covers

| Term | What you must be able to do |
|---|---|
| Population | Define it for a given investigation, including what counts as a member |
| Census | Say what it is, and when it is or is not sensible |
| Sample | Say what it is, and give advantages and disadvantages compared with a census |
| Representative sample | Explain what makes a sample representative, and judge whether a given sample is |

## Population

In statistics, the **population** is the whole set of people or items that an investigation is about. It is not necessarily people: it can be every light bulb made in a factory in a week, every tree in a park, or every journey made on a bus route in a month.

A good definition of a population answers three questions:

- **Who or what?** For example, adults, pupils, households, cars, fish.
- **Where?** For example, in one town, in one school, caught in one lake.
- **When?** For example, on a given date, during one term, in 2026.

**Example.** "Investigating the time pupils spend on homework" is vague. A precise population would be "all pupils enrolled at Hillside School during the autumn term". Without the where and when, you cannot tell who should be included.

The individual people or items in the population are its **members**, and the number of members is often written N.

## Census

A **census** collects data from every member of the population.

**When a census is sensible:**

- The population is small, such as the 28 pupils in one class.
- Complete, exact information is needed, for example for a register or a legal requirement.
- Every member can be found and measured.

**When a census is not sensible:**

- The population is very large, so a census would cost too much and take too long.
- Testing **destroys** the item. If a factory tested every match to see whether it lights, it would have no matches to sell.
- The population is hard to define or keeps changing, such as the fish in a lake.
- The data are needed quickly, and by the time a census is finished they would be out of date.

A national census, carried out by many governments every ten years, is the most familiar example. It is used because governments need information about every household for planning, and they have the resources to do it.

## Sample

A **sample** is a part of the population from which data are collected. The aim is to use the sample to learn about the whole population.

| Compared with a census, a sample is... | Because... |
|---|---|
| Cheaper | Fewer members are contacted or measured |
| Quicker | Less data to collect and process |
| The only option for destructive testing | Only the items tested are lost |
| Sometimes more accurate in practice | Fewer, better-trained data collectors can take more care |
| Less certain | Results vary from sample to sample, and only part of the population is seen |
| At risk of not being representative | The chosen members may differ from the population as a whole |

Note the fourth row. A census is not automatically more accurate in practice: a huge census carried out quickly by many untrained collectors can contain more errors than a careful sample.

## Representative sample

A **representative sample** has the same characteristics as the population, in roughly the same proportions. If 40% of a school's pupils are in Year 9, about 40% of a representative sample of those pupils should be in Year 9.

A sample can be large and still unrepresentative. Size reduces the variation between one sample and another, but it does not fix a sample that has been chosen from the wrong part of the population. Ways of choosing samples that aim to be representative are covered in section 1.2, and the ways samples become unrepresentative are covered under bias in section 1.3.

### Worked example 1: checking representativeness

A school has 600 pupils: 240 in Year 9, 210 in Year 10 and 150 in Year 11. A sample of 60 pupils contains 35 from Year 9, 15 from Year 10 and 10 from Year 11. Is the sample representative of year groups?

```
Population:  Year 9  240/600 = 40%
             Year 10 210/600 = 35%
             Year 11 150/600 = 25%

Sample:      Year 9  35/60 = 58.3%
             Year 10 15/60 = 25.0%
             Year 11 10/60 = 16.7%
```

The sample is not representative of year groups: Year 9 is over-represented (58.3% against 40%), and Years 10 and 11 are under-represented. A representative sample of 60 would contain about 24, 21 and 15 pupils. If homework time differs between year groups, this sample would give a misleading picture of the school.

### Worked example 2: estimating from a sample

A town has 5,000 households. In a representative sample of 200 households, 46 have no car. Estimate the number of households in the town with no car.

```
Proportion in sample = 46 / 200 = 0.23
Estimate for population = 0.23 x 5000 = 1150 households
```

The answer is an estimate, not an exact count. A different sample of 200 would probably give a slightly different figure. The estimate is only sensible if the sample is representative.

### Worked example 3: census or sample?

For each investigation, decide whether a census or a sample is more suitable, and give a reason.

| Investigation | Choice | Reason tied to the situation |
|---|---|---|
| Mean lifetime of batteries made in a factory | Sample | Testing lifetime uses up the battery, so testing every one would leave none to sell |
| Shoe sizes of the 30 members of a sports club | Census | The population is small and every member is easy to reach |
| Opinions of a country's voters before an election | Sample | The population is millions of people; a census would be too slow and costly |
| Number of pupils in each class for a school timetable | Census | Exact figures for every class are needed |

The reason must refer to the situation given. "A sample is cheaper" earns less than "testing destroys the batteries".

## Common errors

- Defining the population without saying where or when.
- Thinking a population must be people.
- Saying a census is always more accurate, or always better.
- Choosing a sample for a tiny population that could easily be surveyed in full.
- Assuming a large sample must be representative.
- Calling an estimate from a sample exact.
- Giving a reason for a choice that would apply to any situation, instead of one that fits the question.

## Exam technique

- **State** or **define**: a short definition, such as "a census collects data from every member of the population".
- **Give a reason**: refer to a feature of the situation in the question (size, cost, destruction, time).
- **Explain why the sample may not be representative**: compare the sample's make-up with the population's and name the group that is over- or under-represented.
- **Estimate**: scale up a sample proportion, show the working, and say it is an estimate.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International). Section 1.1: general ideas of sampling, including the terms population, census, sample and representative sample.
