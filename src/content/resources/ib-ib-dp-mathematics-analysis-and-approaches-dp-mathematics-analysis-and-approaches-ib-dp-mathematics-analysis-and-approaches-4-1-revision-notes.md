---
title: "IB DP Mathematics: Analysis and Approaches (AA): 4.1 Concepts of population, sample, sampling techniques and outliers -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 4 – Statistics and probability"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 4.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-statistics-and-probability"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-4-1"
description: "Revision notes for IB Maths AA 4.1: population and sample, data types, bias, five sampling methods and the outlier rule, with traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **4.1** of IB DP Mathematics: Analysis and Approaches (first
assessment 2021, SL and HL): population, sample, random sample, discrete and continuous data, reliability
and bias, outliers, and sampling techniques. For full explanations and worked examples, use the
[4.1 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-1/).

## Core recall

- **Population:** every item of interest, stated in context ("all 900 employees of the company").
- **Sample:** the part of the population you measure.
- **Random sample:** each member of the population has an equal chance of selection.
- **Discrete data:** separate, countable values. **Continuous data:** any value in a range; measured.
- **Reliable source:** gives consistent, trustworthy values; consider who collected the data, how, and why.
- **Biased sample:** the method systematically favours some members, so the sample misrepresents the
  population.
- **Outlier:** more than 1.5 × IQR below Q₁ or above Q₃.

## Sampling techniques in one line each

| Technique | Key feature | Random? |
|---|---|---|
| Simple random | Every member numbered; random numbers choose; repeats ignored | Yes |
| Systematic | Every kth member, k = N/n, random start from 1 to k | Start only |
| Stratified | Random sample from each stratum, in proportion to stratum size | Yes, within strata |
| Quota | Fixed number from each group, chosen by the collector | No |
| Convenience | Easiest members to reach | No |

**Stratified number from a stratum** = (stratum size ÷ population size) × sample size, rounded so the
total is still correct.

## Effectiveness: what to say in context

- Simple random: unbiased selection, but a full list (sampling frame) is needed and small groups may be
  missed.
- Systematic: easy to carry out from a list; biased if the list has a pattern with period k (for example,
  every 10th house on a street plan being a corner house).
- Stratified: guarantees each group is represented in proportion; needs stratum sizes and random
  selection inside each.
- Quota: quick and cheap, no list needed; interviewer choices bring bias.
- Convenience: cheapest; the people easiest to reach are rarely typical.

## Outliers: the procedure

1. Order the data; find Q₁ and Q₃ (for an odd number of values, leave the median out of both halves).
2. IQR = Q₃ − Q₁.
3. Boundaries: Q₁ − 1.5 × IQR and Q₃ + 1.5 × IQR.
4. Compare each extreme value with its boundary.
5. In context: genuine (keep) or error (check, correct or remove)?

Removing an outlier changes the mean and range a lot, the median and IQR very little.

## Key terms

| Term | Meaning |
|---|---|
| Sampling frame | The list of population members from which a sample is drawn |
| Stratum (plural strata) | A non-overlapping group within the population used in stratified sampling |
| Bias | A systematic tendency of a method to misrepresent the population |
| Reliability | How trustworthy and consistent a data source is |
| Outlier | A value more than 1.5 × IQR from the nearest quartile |
| Interquartile range | Q₃ − Q₁, the spread of the middle half of the data |

## Exam traps

- **Population too vague.** Name the specific group, place and time given in the question.
- **Age and time recorded in whole numbers** are still continuous.
- **"Small sample, so biased"** is wrong reasoning. Small samples are less precise; bias comes from the
  method.
- **Quota versus stratified.** If the collector chooses who fills each group, it is quota.
- **Outlier boundary from the median.** Always measure from Q₁ and Q₃.
- **Value near the boundary.** Compare carefully: 4 is not an outlier when the boundary is 3.5.
- **Removing every outlier automatically.** Comment in context first.

## Self-test

1. Classify as discrete or continuous: (a) number of pets; (b) mass of a parcel; (c) dress size.
2. A school of 750 students wants a systematic sample of 30. Find the sampling interval.
3. State one difference between quota sampling and stratified sampling.
4. A company has 120 managers and 480 other staff. Find how many managers belong in a stratified sample of
   45.
5. Q₁ = 18 and Q₃ = 30. Find the boundaries for outliers.
6. Using question 5, is 47 an outlier? Is 0 an outlier?
7. A council emails a survey about bin collections to residents who signed up for its newsletter. Name the
   sampling method and give one reason it may be biased.
8. Explain why a sample of size 10 chosen by simple random sampling is not biased, even though it may be
   unrepresentative.
9. Give one reason why a data set on revision hours collected by asking students might be unreliable.
10. A data set of reaction times includes 0.02 seconds. Suggest whether this outlier is likely to be
    genuine or an error.
11. Which of the median and the mean changes less when an outlier is removed?
12. Why does a systematic sample need a random start?

### Answers

1. (a) Discrete; (b) continuous; (c) discrete (sizes come in fixed steps).
2. 750 ÷ 30 = 25: every 25th student, starting from a random number between 1 and 25.
3. Stratified sampling selects at random within each group; quota sampling lets the collector choose.
4. (120/600) × 45 = 9 managers.
5. IQR = 12; 1.5 × 12 = 18; boundaries 18 − 18 = 0 and 30 + 18 = 48.
6. 47 < 48, so no. 0 is not less than 0, so no.
7. Convenience sampling (or a self-selected sample). Newsletter subscribers may be more engaged with
   council services than other residents, and only those who reply are counted.
8. Bias is a property of the method; every student had an equal chance of selection, so the method does
   not favour any group, even if one particular sample is unusual by chance.
9. Self-reported values can be exaggerated, rounded or misremembered.
10. Likely an error: a human reaction time of 0.02 seconds is implausibly fast, so the value should be
    checked.
11. The median.
12. Without a random start the first item is always chosen, so members are not equally likely to be
    selected; the random start gives every member an equal chance.

## Where to go next

Try the [4.1 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-4-1-practice/),
then review the whole statistics unit with the
[sampling, data presentation, summary statistics and regression revision notes](/resources/ib-dp-mathematics-aa-statistics-correlation-regression-revision-notes/).
