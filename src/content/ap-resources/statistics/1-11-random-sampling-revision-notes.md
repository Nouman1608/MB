---
resourceId: "mb-ap-stats-1.11-revision-notes"
title: "Random Sampling: Revision Notes (Statistics 1.11)"
description: "One-page recap of sampling with and without replacement, simple random, stratified, cluster and systematic samples, when to use each, and the mistakes that cost marks."
course: "statistics"
unit: 1
topics: ["1.11"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-stats-1.11-study-guide"]
learningObjectives:
  - "Recall the definition and selection steps of each random sampling method"
  - "Spot the common errors in sampling-method questions before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "foundation"
calculator: "graphing"
calculatorNote: "Any random number generator works. No calculation beyond simple division is needed."
related: ["mb-ap-stats-1.11-study-guide", "mb-ap-stats-1.11-practice", "mb-ap-stats-1.11-checklist"]
next: "mb-ap-stats-1.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Chance, not a person, must choose every individual."
  - "Strata: similar inside, sample from all. Clusters: mixed inside, take all of a few."
  - "Justify a method using this population and this question."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/statistics/1-11-random-sampling-study-guide/).

## Recap

- A **random sample** uses a chance process (random number generator, well-mixed numbered slips) to choose every individual.
- **Without replacement:** a chosen individual is not returned, so it can be chosen only once. **With replacement:** it is returned and could be chosen again.
- Surveys of people normally sample **without replacement**: ignore repeated labels.
- In an **SRS** of size n, every possible sample of size n is equally likely.

## Key relationships

| Method | How it works | Good when… |
|---|---|---|
| Simple random sample | label 1 to N; choose n different labels by chance | a full list exists and no groups matter |
| Stratified | split into strata of similar individuals; SRS within **every** stratum; combine | groups differ on the variable, or results are needed for each group |
| Cluster | split into clusters that each mirror the population; SRS **of clusters**; measure **everyone** in them | the population is spread out and visits are costly |
| Systematic | k ≈ N ÷ n; random start from 1 to k; then every k-th individual | individuals come in a line or a long list with no repeating pattern |

## Assumptions and conventions

- Labels all have the same number of digits (001 to 250, not 1 to 250).
- Skip numbers that are not labels, and skip repeats unless sampling with replacement.
- Stratified and systematic samples are random samples, but they are **not** SRSs: some samples of size n cannot happen.
- Proportional allocation in strata is common, not required.

## Mistakes to avoid

1. Calling a haphazard or convenience choice "random".
2. Saying "each individual has the same chance" as the definition of an SRS. It is every **sample** of size n.
3. Swapping strata and clusters.
4. Sampling a few people from every cluster. In a cluster sample you take everyone in the chosen clusters.
5. Forgetting the random start in a systematic sample.
6. Stratifying by a characteristic that has nothing to do with the variable measured.
7. A justification with no context: name the population, the groups and the variable.

## Quick self-check

1. A list has 500 names and you want a systematic sample of 25. What is k, and which names are chosen if the random start is 13? *(k = 500 ÷ 25 = 20; names 13, 33, 53, … , 493)*
2. A school has 300 boarders and 200 day students. Take a stratified sample of 50 in proportion to size. How many from each group? *(30 boarders and 20 day students)*
3. A pollster picks 4 blocks of flats at random and interviews every resident. Name the method. *(Cluster random sample, with blocks of flats as clusters)*

Next: [practice questions](/advanced-course-resources/statistics/1-11-random-sampling-practice/).
