---
title: "Data and Its Collection (O Level 4040): Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["o-levels"]
topic: "Topic 1 – Data and Its Collection"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4040"]
syllabusSeries: "2025-2027"
order: 1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-and-its-collection-4040"
description: "Condensed recall notes on data types, sampling and census methods for Cambridge O Level Statistics 4040."
author: "marlbridge-academic-team"
publishedDate: 2026-08-26
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data and Its Collection study guide](/resources/o-level-cambridge-statistics-data-and-its-collection/).

## Types of data

```
        DATA
     /        \
QUALITATIVE   QUANTITATIVE
(categories,      /        \
 e.g. colour)  DISCRETE   CONTINUOUS
              (counted,   (measured,
               e.g. cars)  e.g. height)
```

- **Qualitative** — described by category, not number (favourite subject, eye colour).
- **Discrete quantitative** — countable, exact values (number of siblings, goals scored).
- **Continuous quantitative** — measured, can take any value in a range (height, time, mass).

## Primary vs secondary data

| | Primary | Secondary |
|---|---|---|
| Collected by | The researcher themselves | Someone else, for another purpose |
| Accuracy for your question | High — designed for your exact need | May not fit exactly |
| Cost/time | Higher | Lower |
| Example | Your own survey | Government census data |

## Census vs sample

| | Census | Sample |
|---|---|---|
| Coverage | Every member of the population | A selected subset |
| Accuracy | No sampling error | Sampling error possible |
| Cost/time | Very high | Lower |
| Practicality | Only feasible for small populations | Used for large populations |

## Sampling methods

| Method | How it works | Key weakness |
|---|---|---|
| Simple random | Every member has equal chance (lottery/random numbers) | Can still be unrepresentative by chance |
| Systematic | Every *k*th member from a list | Risk of hidden pattern matching the interval |
| Stratified | Population split into groups (strata), random sample from each in proportion | Requires accurate group data in advance |
| Quota | Interviewer fills fixed quotas per category, non-random within group | Not truly random — interviewer bias possible |
| Cluster | Whole groups (clusters) selected at random, everyone within a chosen cluster is included | Less precise if clusters differ from each other |
| Opportunity | Whoever happens to be available is sampled | Highly unrepresentative |

**Worked example — stratified sample.** A factory has 240 production
workers, 90 in sales and 30 in admin (360 total). Take a stratified
sample of 36.

```
sampling fraction = 36 / 360 = 1/10

Production: 240 x 1/10 = 24
Sales:       90 x 1/10 =  9
Admin:       30 x 1/10 =  3
                        ----
                          36
```

Each stratum's share is then chosen **randomly within itself** — a
stratified sample is still a random sample, just one taken separately
within each group so the proportions match the population.

## Continuous data and class boundaries

Continuous data is always recorded to a stated accuracy, so grouping
it requires care with **class boundaries**. A time recorded as 12.4
seconds (to 1 decimal place) actually lies anywhere in the range
**12.35 ≤ t < 12.45** — the boundaries sit halfway between adjacent
recorded values, not at the recorded values themselves. Class
intervals must not overlap (writing 10–20 followed by 20–30 leaves it
ambiguous which class 20 itself belongs to) and should normally have
equal width so frequencies can be compared fairly.

## Designing a questionnaire

A good questionnaire uses clear, unambiguous language, avoids leading
questions, and offers response options that are **exhaustive** (cover
every possible answer) and **non-overlapping**. Sensitive questions
(age, income) are usually placed last, once the respondent is more
comfortable. A **pilot survey** — trialling the questionnaire on a
small group before full deployment — catches confusing wording or
missing response options before they affect the real results.

## Sources of bias

- **Leading/loaded questions** — wording pushes a particular answer.
- **Unrepresentative sample** — e.g. surveying only one location or age group.
- **Non-response bias** — those who don't respond may differ systematically from those who do.
- **Interviewer bias** — presence or tone of the interviewer affects answers.

## Exam traps

- "Sample" is not automatically inaccurate — it has sampling error, which is different from bias.
- Stratified sampling must be **proportional** to each stratum's size in the population, not equal-sized groups.
- Discrete vs continuous: if it's *counted*, it's discrete; if it's *measured*, it's continuous — even if the result happens to be a whole number.
- Writing overlapping class intervals (10–20, 20–30) instead of correctly stated, non-overlapping boundaries.
- Claiming a larger sample size removes **bias** — it only reduces **sampling error**; a biased method stays biased however large the sample.
- Confusing cluster sampling (whole groups included) with stratified sampling (proportional selection from every group).

## Self-test

1. Classify: number of pets owned; height of a plant; favourite colour.
2. Give one advantage and one disadvantage of a census compared with a sample.
3. Describe how you would take a systematic sample of 20 students from a school of 800.
4. Name one source of bias in a face-to-face street survey.
5. A time is recorded as 8.6 seconds to 1 decimal place. State its class boundaries.
6. What is the purpose of a pilot survey?

**Answers:** 1. Discrete quantitative; continuous quantitative; qualitative. 2. Advantage: no sampling error / fully accurate. Disadvantage: high cost and time, often impractical for large populations. 3. List all 800 students, calculate sampling interval 800 ÷ 20 = 40, pick a random start between 1 and 40, then select every 40th student thereafter. 4. Any one: interviewer bias, non-response bias, unrepresentative location/time of day. 5. 8.55 ≤ t < 8.65. 6. To trial the questionnaire on a small group first, so confusing wording or missing response options can be fixed before the full survey is carried out.

For the full explanation, including how cluster and opportunity
sampling compare with the other methods, see the [Data and Its
Collection study guide](/resources/o-level-cambridge-statistics-data-and-its-collection/).
