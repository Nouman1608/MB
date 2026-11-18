---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.1 Concepts of population, sample, sampling techniques and outliers"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-1"
description: "IB Maths AA study guide to section 4.1: populations and samples, data types, bias and reliability, five sampling techniques and how to judge outliers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **4.1** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **concepts of population, sample, random sample, discrete and continuous data;
reliability of data sources and bias in sampling; interpretation of outliers; sampling techniques and their
effectiveness**. It is SL and HL content.

The [sampling, data presentation, summary statistics and regression study guide](/resources/ib-dp-mathematics-aa-statistics-correlation-regression/)
summarises 4.1 alongside the rest of the statistics unit. This page goes further into the judgement
questions that 4.1 produces: classifying awkward data, choosing and criticising a sampling method, handling
rounding in a stratified sample, and deciding what to do with an outlier.

## Population, sample and random sample

The **population** is the complete set of items you want to know about. A **sample** is the subset you
actually measure. A **random sample** is one in which every member of the population has an equal chance of
being chosen.

Being precise about the population matters. "Students" is vague; "all 640 students enrolled at the school
this year" is a population. A question that asks you to identify the population expects the specific group
in its context.

We sample because measuring a whole population is often too slow, too expensive or impossible (testing
every light bulb to destruction would leave none to sell). The price is that a sample may not represent the
population. Good sampling reduces that risk; it cannot remove it.

## Discrete and continuous data

| Type | Definition | Examples |
|---|---|---|
| Discrete | Can take only separate (countable) values | Number of siblings, goals scored, shoe size |
| Continuous | Can take any value within a range; measured, not counted | Time, mass, height, temperature |

Borderline cases are where marks are lost:

- **Shoe size** is discrete: sizes come in fixed steps such as 6, 6.5, 7, even though feet vary
  continuously.
- **Age** is continuous (time since birth), although it is usually recorded in whole years. Recording a
  continuous variable to the nearest unit does not make it discrete.
- **Money** is usually treated as discrete because it moves in steps of the smallest coin.

## Reliability and bias

A data source is **reliable** if it would give consistent, trustworthy values. Ask:

- Who collected the data, and do they have a reason to want a particular result?
- How was it collected? Self-reported data (such as hours of revision) can be exaggerated or misremembered.
- Is information missing, out of date or recorded wrongly?

A sample is **biased** if the method makes some members of the population more likely to be included than
others, so that the sample systematically misrepresents the population. Bias is a property of the
**method**, not of one unlucky sample. A random method can still produce an unusual sample by chance; that
is not bias.

## The five sampling techniques

| Technique | How it works | Strength | Weakness |
|---|---|---|---|
| Simple random | Number every member; select using random numbers, ignoring repeats | Free from selection bias | Needs a complete list; may under-represent small groups by chance |
| Systematic | Choose every kth member from a list, with a random start between 1 and k | Quick; spreads the sample through the list | Biased if the list has a repeating pattern every k items |
| Stratified | Divide into groups (strata); take a random sample from each in proportion to its size | Each group is represented in proportion | Needs the size of every stratum; strata must not overlap |
| Quota | Fill a fixed number from each group, chosen by the interviewer | Quick; no list needed | Not random; interviewer choice brings bias |
| Convenience | Use members who are easiest to reach | Cheap and fast | Very likely to be biased |

For a systematic sample of size n from a population of size N, the interval is k = N/n. Choose the start
at random from 1 to k, then add k repeatedly.

Stratified and quota sampling can look alike: both use groups and both set numbers per group. The
difference is that **stratified sampling selects at random within each stratum**; quota sampling lets the
interviewer pick.

### Worked example 1: stratified sampling with rounding

A sports club has 85 junior, 140 adult and 55 senior members. A stratified sample of 40 is required.

```
Total = 85 + 140 + 55 = 280
Juniors: (85/280) × 40 = 12.14  → 12
Adults:  (140/280) × 40 = 20    → 20
Seniors: (55/280) × 40 = 7.86   → 8
Check: 12 + 20 + 8 = 40 ✓
```

Rounding each stratum to the nearest whole number usually keeps the total correct. If it does not (for
example three strata each ending in .5), adjust the stratum whose unrounded value is closest to the
rounding boundary, and say so. Then select the 12 juniors at random from the 85, and so on.

## Outliers

The IB defines an **outlier** as a data value more than 1.5 × IQR from the nearest quartile:

```
outlier if  x < Q₁ − 1.5 × IQR   or   x > Q₃ + 1.5 × IQR
```

Finding an outlier is only half the job. In context, decide whether it is:

- **a genuine value** that belongs in the data (a student who really does travel 45 minutes to school), which
  should be kept; or
- **an error** (a mistyped value, a faulty instrument, a unit mix-up), which should be checked and corrected
  or removed.

A value is not an error just because it is extreme. Removing genuine outliers makes the data look less
varied than they really are.

### Worked example 2: identifying and interpreting an outlier

Eleven students recorded their journey time to school, in minutes:

4, 15, 17, 18, 20, 21, 23, 24, 26, 27, 45

```
Median = 6th value = 21
Lower half: 4, 15, 17, 18, 20    → Q₁ = 17
Upper half: 23, 24, 26, 27, 45   → Q₃ = 26
IQR = 26 − 17 = 9,   1.5 × IQR = 13.5
Lower boundary: 17 − 13.5 = 3.5   → 4 is NOT an outlier
Upper boundary: 26 + 13.5 = 39.5  → 45 IS an outlier
```

Here 4 is unusually low but inside the boundary, so it is not an outlier by the IB definition, however
odd it looks. The 45-minute journey is plausible for a student who lives further away, so it is likely
genuine and should be kept.

The effect of removing it shows why the decision matters: the mean falls from 240/11 ≈ 21.8 to
195/10 = 19.5 minutes, while the median moves only from 21 to 20.5. The median and IQR are resistant to
outliers; the mean is not.

## Common mistakes

- Describing the population as "people" instead of the specific group in the question.
- Calling age discrete because it is recorded in whole years.
- Saying a sample is "biased because it is small". Small samples are less precise, which is a different
  problem from bias.
- Confusing quota and stratified sampling: only stratified uses random selection within groups.
- Measuring the outlier boundary from the median instead of from the nearest quartile.
- Removing an outlier without considering whether it is genuine.
- Writing a systematic sample interval but forgetting the random start.

## Exam technique

Section 4.1 questions are mostly short and worded, so the command word sets the length of the answer.

- **"State" / "Identify"**: a word or phrase, such as "quota sampling" or "continuous".
- **"Explain"**: a reason tied to the context. "This is convenience sampling because the researcher asked
  only students in the library, who may study more than average" earns more than a definition.
- **"Suggest"**: a sensible proposal, such as a better sampling method with a one-line reason.
- **"Show that"** a value is an outlier: give Q₁, Q₃, the IQR and the boundary, then compare.
- **"Comment"** on an outlier: say whether it is likely genuine or an error, and what should be done.

The 4.1 calculations (stratified numbers, systematic intervals, outlier boundaries) need no technology and
can appear on Paper 1, so practise them by hand.

## Where to go next

Use the [4.1 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-1-revision-notes/)
for quick recall and the [4.1 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-1-practice/)
to test yourself. Section 4.2 shows how to display the data you collect: see the
[4.2 presentation of data study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-2/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 4.1 (SL and HL): population, sample, random sample, discrete and continuous data; reliability
of data sources and bias in sampling; interpretation of outliers; sampling techniques (simple random,
convenience, systematic, quota and stratified) and their effectiveness.
