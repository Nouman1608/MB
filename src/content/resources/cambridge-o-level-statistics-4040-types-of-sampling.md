---
title: "Cambridge O Level Statistics (4040): Types of sampling"
resourceType: "study-guides"
subject: "statistics"
level: ["o-levels"]
topic: "Types of sampling: simple random, systematic, stratified and quota"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "For examination in 2025-2027"
order: 14
syllabusTopics:
  - qualification: "o-level"
    topic: "data-and-its-collection-4040"
    subtopic: "types-of-sampling-4040"
description: "Study guide to section 1.2 of O Level Statistics 4040: simple random, systematic, stratified and quota sampling, random number tables and choosing a method."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: types of sampling, which the syllabus says includes "knowledge of simple random, systematic, stratified and quota sampling methods" and the "use of random numbers". The syllabus is not tiered, so this is for every candidate.

The broader page [Data and Its Collection](/resources/o-level-cambridge-statistics-data-and-its-collection/) lists the methods in a table and works one stratified sample. This guide goes further on the four named methods: how to carry out each one step by step, how to read a random number table, what to do when stratified numbers do not round neatly, and how to choose and justify a method for a given situation. Other pages for this section: the [1.2 revision notes](/resources/cambridge-o-level-statistics-4040-types-of-sampling-revision-notes/) and the [1.2 practice questions](/resources/cambridge-o-level-statistics-4040-types-of-sampling-practice/). The ideas of population, census and representative sample are in [general ideas of sampling](/resources/cambridge-o-level-statistics-4040-general-ideas-of-sampling/).

## What this section covers

| Method | What you must be able to do |
|---|---|
| Simple random | Describe it, and select a sample using random numbers |
| Systematic | Describe it, find the interval and list the members chosen |
| Stratified | Describe it, calculate the number from each group, and say how they are chosen |
| Quota | Describe it, and compare it with stratified sampling |
| Random numbers | Read a table or use a calculator to select members fairly |

## The sampling frame

Three of the four methods need a **sampling frame**: a list of every member of the population, each with an identifying number. A school register, a list of employees or a numbered map of trees are sampling frames. Quota sampling does not need one.

## Simple random sampling

In a **simple random sample**, every member of the population has an equal chance of being chosen, and so does every possible sample of that size.

**Method.**

1. Number every member of the sampling frame, using the same number of digits for each (for 80 members: 00 to 79).
2. Use random numbers to select members: read digits from a random number table, use the random number function on a calculator, or draw numbered tickets from a container.
3. Ignore numbers outside the range and ignore repeats.
4. Continue until the required sample size is reached.

### Worked example 1: using a random number table

A club has 80 members, numbered 00 to 79. Choose a simple random sample of 6, starting at the beginning of this row of random digits and reading pairs:

```
83 21 07 49 52 18 07 66 34 90
```

```
83  > 79, ignore
21  choose
07  choose
49  choose
52  choose
18  choose
07  repeat, ignore
66  choose
```

The sample is members 21, 07, 49, 52, 18 and 66. Write down the numbers you ignore and why: this shows the method clearly.

**Strengths:** free from selection bias by the person choosing; every member has an equal chance. **Weaknesses:** needs a complete sampling frame; by chance, a sample may still contain too many from one group, especially if it is small; chosen members may be spread over a wide area.

## Systematic sampling

In a **systematic sample**, members are chosen at regular intervals from an ordered list, starting from a randomly chosen point.

**Method.**

1. Find the interval: k = population size ÷ sample size.
2. Choose a random starting number between 1 and k.
3. Select that member and then every kth member after it.

### Worked example 2

A list contains 600 customers. A systematic sample of 40 is needed.

```
k = 600 / 40 = 15
Random start between 1 and 15: say 7
Members chosen: 7, 22, 37, 52, ...
40th member: 7 + 39 x 15 = 592
```

**Strengths:** quick and simple once the list exists; spreads the sample evenly through the list. **Weaknesses:** needs an ordered list; if the list has a repeating pattern that matches the interval, the sample can be badly unrepresentative. For example, if every 15th flat in a list of flats is a corner flat, a sample with k = 15 might contain only corner flats. Only the starting point is random, so not every possible sample can occur.

## Stratified sampling

In a **stratified sample**, the population is divided into groups (**strata**) such as age groups, year groups or departments, and each stratum is sampled in proportion to its size. Members are then chosen at random within each stratum.

**Method.**

1. Find the size of each stratum.
2. Number from each stratum = (stratum size ÷ population size) × sample size.
3. Round to whole numbers so they add up to the sample size.
4. Choose that many members at random from each stratum, using simple random sampling.

### Worked example 3: when the numbers do not round neatly

A college has 312 science students, 205 arts students and 143 business students (660 in total). Take a stratified sample of 50.

```
Science:  312/660 x 50 = 23.64
Arts:     205/660 x 50 = 15.53
Business: 143/660 x 50 = 10.83

Rounded:  24 + 16 + 11 = 51   (one too many)
```

Rounding each number to the nearest whole number gives 51, one more than required. Reduce the stratum whose value was rounded up by the most: arts (15.53 was rounded up by 0.47, more than 23.64 by 0.36 or 10.83 by 0.17). The sample is 24 science, 15 arts and 11 business students, a total of 50. Say what you did and why; any sensible adjustment that keeps the proportions close is reasonable.

**Strengths:** every stratum is represented in the right proportion, so the sample reflects the population on that characteristic; random selection within strata. **Weaknesses:** the strata and their sizes must be known; needs a sampling frame for each stratum; takes more work.

## Quota sampling

In a **quota sample**, the interviewer is told how many people to survey from each group (the **quota**), often in proportion to the population, but chooses the individuals personally, for example by stopping people in the street until each quota is filled.

**Strengths:** quick and cheap; no sampling frame needed; the sample matches the population on the quota characteristics. **Weaknesses:** not random, so the interviewer's choices can introduce bias, for example by approaching people who look friendly or who are in one place at one time; people who are not around when the interviewer is working cannot be selected.

### Stratified or quota?

| | Stratified | Quota |
|---|---|---|
| Groups in the right proportions? | Yes | Yes |
| Who chooses the individuals? | Random selection | The interviewer |
| Sampling frame needed? | Yes | No |
| Risk of interviewer bias? | Low | Higher |
| Cost and speed | Slower, more expensive | Quicker, cheaper |

This comparison is a frequent exam question. The key difference is how the individuals are selected.

## Choosing a method

Ask: Is there a list? Are there important groups? Is time or money short?

| Situation | Suitable method | Reason |
|---|---|---|
| A numbered list of 500 members, no important groups | Simple random | A frame exists and every member can be given an equal chance |
| Checking every 20th item from a production line | Systematic | Items arrive in order and the method is quick |
| Pupils in five year groups whose views may differ | Stratified | Each year group should be represented in proportion |
| A street survey of shoppers with no list available | Quota | There is no sampling frame, and the survey must be quick |

## Common errors

- Forgetting the random start in systematic sampling.
- Taking equal numbers from each stratum instead of proportional numbers.
- Not saying that members within each stratum are chosen at random.
- Calling a quota sample random.
- Using numbers of different lengths (7 and 07) when reading a random number table.
- Including repeats or out-of-range numbers when using random numbers.
- Stratified numbers that do not add up to the sample size.

## Exam technique

- **Describe** a method: give the steps in order, including where randomness enters.
- **Use random numbers**: list each number read and whether it is chosen, ignored as out of range, or ignored as a repeat.
- **Calculate** a stratified sample: show the fraction for each stratum and check the total.
- **Compare** or **justify**: name a feature of the situation (list available, groups, cost) and link it to the method.

## Official syllabus

Cambridge O Level Statistics (4040), syllabus for examination in 2025, 2026 and 2027, Cambridge University Press & Assessment (Cambridge International). Section 1.2: types of sampling, including simple random, systematic, stratified and quota sampling and the use of random numbers.
