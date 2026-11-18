---
title: "Cambridge O Level Statistics (4040): Types of sampling -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on simple random, systematic, stratified and quota sampling and random numbers for O Level Statistics 4040, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1.2 of the Cambridge O Level Statistics (4040) syllabus for examination in 2025, 2026 and 2027: simple random, systematic, stratified and quota sampling, and the use of random numbers. Full explanations and longer worked examples are in the [1.2 study guide](/resources/cambridge-o-level-statistics-4040-types-of-sampling/). For exam-style questions, use the [1.2 practice questions](/resources/cambridge-o-level-statistics-4040-types-of-sampling-practice/). Population, census and representative samples are in the [1.1 revision notes](/resources/cambridge-o-level-statistics-4040-general-ideas-of-sampling-revision-notes/).

## Definitions

| Term | Meaning |
|---|---|
| Sampling frame | A numbered list of every member of the population |
| Simple random sample | Every member, and every possible sample of that size, has an equal chance of selection |
| Systematic sample | Every kth member from an ordered list, after a random start |
| Interval k | Population size ÷ sample size |
| Stratum (plural strata) | A group within the population, such as an age group |
| Stratified sample | Each stratum sampled in proportion to its size, members chosen at random within it |
| Quota sample | Interviewer fills set numbers from each group, choosing the individuals personally |
| Random numbers | Digits in which each digit is equally likely and unrelated to the others; from tables, calculators or draws |

## The four methods at a glance

| Method | Frame needed? | Random? | Strength | Weakness |
|---|---|---|---|---|
| Simple random | Yes | Yes | No selection bias by the chooser | Small samples can over-represent a group by chance |
| Systematic | Yes (ordered) | Start only | Quick; spread through the list | Fails if list has a pattern matching k |
| Stratified | Yes, by stratum | Within strata | Correct proportions in each group | Strata sizes must be known; more work |
| Quota | No | No | Quick, cheap, no list needed | Interviewer bias; not random |

## Method in steps

### Simple random using a table

1. Number members with equal-length labels (00-79, or 001-500).
2. Read digits in groups of that length.
3. Ignore out-of-range numbers and repeats.
4. Stop when you have enough.

### Systematic

1. k = N ÷ n.
2. Random start from 1 to k.
3. Start, start + k, start + 2k, ...

### Stratified

1. Stratum share = stratum size ÷ N × n.
2. Round; adjust so the total is exactly n.
3. Choose randomly within each stratum.

### Quota

1. Decide the groups and the number needed in each.
2. Interviewer selects people until each quota is full.

## Small worked reminders

**Random numbers.** Population 00-59. Digits: 71 08 33 59 08 24. Read: 71 (ignore), 08, 33, 59, 08 (repeat, ignore), 24. Sample: 08, 33, 59, 24.

**Systematic.** N = 600, n = 40: k = 15. Start 7: 7, 22, 37, ..., 592.

**Stratified.** Strata 150, 90, 60 (N = 300), n = 30: 150/300 × 30 = 15; 90/300 × 30 = 9; 60/300 × 30 = 6. Check: 15 + 9 + 6 = 30.

**Rounding problem.** 23.64, 15.53, 10.83 round to 24, 16, 11 = 51. Reduce the one rounded up most (15.53 → 15): 24, 15, 11 = 50.

## Stratified versus quota

- Both give the right proportions in each group.
- Stratified chooses individuals randomly; quota lets the interviewer choose.
- Stratified needs a sampling frame; quota does not.
- Quota is quicker and cheaper but more open to bias.

## Choosing a method

- List available, no key groups → simple random.
- Items in a sequence, quick check needed → systematic.
- Groups that may differ in the variable being studied → stratified.
- No list, fast street or market survey → quota.

## Must-know distinctions

- Random start is essential in systematic sampling.
- Stratified uses proportional, not equal, numbers.
- Quota sampling is not random.
- Equal-length labels in random number tables (07, not 7).
- Repeats are ignored in sampling without replacement.

## Exam traps

- Systematic sample described with no random start.
- Equal numbers from each stratum.
- "Then choose people from each stratum" without saying "at random".
- Stratified numbers that do not total the sample size.
- Calling quota sampling random or saying it needs a list.
- Reading single digits when labels have two digits.

## Quick self-test

1. What is a sampling frame?
2. Which method does not need a sampling frame?
3. Members are numbered 00-49. Use the digits 62 14 09 47 14 88 31 to choose 4 members.
4. Find the interval for a systematic sample of 25 from 500.
5. With that interval and a random start of 13, list the first three members chosen.
6. Give one weakness of systematic sampling.
7. A school has 420 boys and 380 girls. Find the numbers of each in a stratified sample of 40.
8. After finding stratum sizes, how are individuals chosen in a stratified sample?
9. Give one advantage of quota sampling over stratified sampling.
10. Give one disadvantage of quota sampling.
11. Why are repeated random numbers ignored?
12. Which method would suit checking cans on a production line, and why?

### Answers

1. A list of every member of the population, each with a number.
2. Quota sampling.
3. 62 (ignore), 14, 09, 47, 14 (repeat, ignore), 88 (ignore), 31. Sample: 14, 09, 47, 31.
4. 500 ÷ 25 = 20.
5. 13, 33, 53.
6. If the list has a pattern that matches the interval, the sample may be unrepresentative (or: only the start is random).
7. Boys: 420/800 × 40 = 21. Girls: 380/800 × 40 = 19.
8. At random within each stratum, for example with random numbers.
9. It is quicker and cheaper and needs no sampling frame.
10. The interviewer chooses individuals, so it is not random and may be biased.
11. A member cannot be chosen twice in the same sample.
12. Systematic, because the cans pass in order and every kth one can be checked quickly.
