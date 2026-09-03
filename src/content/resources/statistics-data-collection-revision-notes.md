---
title: "Data and Its Collection: Revision Notes"
resourceType: "revision-notes"
subject: "statistics"
level: ["igcse"]
topic: "Topic 1 – Data and Its Collection"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0479"]
syllabusSeries: "2027"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "data-and-its-collection-0479"
description: "Condensed recall notes on data types, sampling methods and bias for Cambridge IGCSE Statistics 0479."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data and Its Collection study guide](/resources/igcse-cambridge-statistics-data-and-its-collection/).

## Classifying data

```
                    DATA
          /                      \
   QUALITATIVE                QUANTITATIVE
   (categories)              /            \
                       DISCRETE        CONTINUOUS
                     (counted)         (measured)
```

- **Discrete** — only certain values: number of children, goals scored, shoe size (even where half sizes exist, the set of possible values is still finite and listable).
- **Continuous** — any value in a range: height, mass, time (limited only by the precision of the measuring instrument used).

**Primary** = collected first-hand for this purpose, giving control over exactly what is measured and how. **Secondary** = already exists, collected by someone else for a different original purpose — faster and cheaper to obtain, but with no control over its accuracy or the exact definitions used.

## Class boundaries for continuous data

A value recorded to a stated accuracy lies in an interval:

```
12.4 s to 1 d.p.   ->   12.35 <= t < 12.45
6.3 cm to 1 d.p.   ->    6.25 <= l <  6.35
```

Lower bound uses **≤**, upper bound uses **<** — the convention avoids two adjacent classes ever overlapping at a shared boundary value.

## Census vs sample

| | Census | Sample |
|---|---|---|
| Coverage | Every member | Part of the population |
| Accuracy | Complete | Subject to sampling error |
| Cost/time | High | Lower |
| Use when | Population small, accuracy vital | Population large, or testing destroys the item |

## Sampling methods

| Method | How | Weakness |
|---|---|---|
| Simple random | Random numbers; all equally likely | Needs a complete sampling frame |
| Systematic | Every nth from a **random start** | Bias if the list is periodic |
| Stratified | Proportional numbers from each group | Strata must be identifiable |
| Quota | Set numbers per category, interviewer chooses | Not random; interviewer bias |
| Cluster | Whole groups chosen at random | Less precise if clusters differ |
| Opportunity | Whoever is available | Unrepresentative |

**Stratified sample size** = (group size ÷ population) × sample size. Round so the parts still total correctly.

**Worked example.** A school of 900 students has 400 in Key Stage 3, 350 in Key Stage 4 and 150 in Key Stage 5. Take a stratified sample of 60.
```
Sampling fraction = 60 / 900 = 1/15

KS3: 400 / 15 = 26.7  -> 27
KS4: 350 / 15 = 23.3  -> 23
KS5: 150 / 15 = 10    -> 10
                        ---
                        60
```
Round carefully so the parts still total the sample size — a frequent source of a lost mark when two roundings go the same way.

## Questionnaire design

A good questionnaire uses clear, unambiguous language, avoids leading
questions, provides response options that do not overlap and cover
every possibility, and keeps sensitive questions to the end. A **pilot
survey** tests it on a small group first, exposing ambiguous wording
before the full survey runs.

## Bias

Sources: incomplete sampling frame, non-response, self-selection, leading questions, interviewer effect — and, for a questionnaire specifically, overlapping or non-exhaustive response options.

**A larger sample reduces sampling error but does NOT remove bias.** A biased method stays biased at any size — the two concepts (random sampling error, and systematic bias in the method) are frequently confused but need to be argued separately.

## Exam traps

- Shoe size is **discrete**, even with half sizes — the deciding factor is a finite, listable set of possible values, not whether the values look like "whole numbers".
- Never write overlapping classes (10–20, 20–30).
- Stratified means **proportional**, not equal, numbers from each group.
- Systematic sampling still needs a random start.
- Upper bound uses < , not ≤ .
- Writing a leading or ambiguous question, or overlapping response options, in a questionnaire design question.
- Rounding all three parts of a stratified sample up (or all down) without checking the total still matches the required sample size.

## Self-test

1. Classify: eye colour, number of siblings, mass of a parcel.
2. A school has 300 girls and 200 boys. Take a stratified sample of 50.
3. State the class boundaries of a time recorded as 9.7 s to 1 d.p.
4. Give two sources of bias in a survey.
5. Why does increasing sample size not remove bias?
6. What is the purpose of a pilot survey?
7. A population of 900 splits into groups of 400, 350 and 150. Find the stratified sample sizes for a total sample of 60.

**Answers:** 1. Eye colour = qualitative; number of siblings = discrete quantitative; mass = continuous quantitative. 2. Fraction 50/500 = 1/10 → **30 girls and 20 boys**. 3. 9.65 ≤ t < 9.75. 4. Any two: incomplete sampling frame, non-response, self-selection, leading questions, interviewer effect. 5. Bias is a systematic error in the *method* — it shifts every result in the same direction, so collecting more data under the same flawed method simply produces more biased data. 6. To test the questionnaire on a small group first, exposing ambiguous or unclear wording before the full survey is run. 7. 27, 23 and 10 (sampling fraction 1/15, rounded so the parts total 60).

For the full worked explanation with additional detail, see the [Data and Its Collection study guide](/resources/igcse-cambridge-statistics-data-and-its-collection/); for exam-style questions with full mark schemes, see the [Data and Its Collection practice questions](/resources/statistics-data-collection-practice/).
