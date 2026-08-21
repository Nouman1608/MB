---
title: "A Level ICT: Data Processing and Information — Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Section 1 – Data Processing and Information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
description: "Condensed recall notes on data versus information, data quality, processing methods, databases and validation for Cambridge AS & A Level ICT 9626."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Processing and Information study guide](/resources/a-level-cambridge-ict-data-processing-and-information/).

## Data, information, knowledge

- **Data** — raw facts and figures with **no context**. `37`, `Smith`, `2410`.
- **Information** — data given **context and meaning**. "Patient Smith's temperature is 37 °C."
- **Knowledge** — information applied with understanding and rules. "37 °C is normal, so no action is required."

The definition that scores is **context**. Data becomes information when meaning is attached to it, so the same figure can serve as data in one system and information in another.

## Static and dynamic data

**Static** data does not change once recorded — a date of birth, a book's ISBN.
**Dynamic** data changes automatically as its source updates — a live share price, a sensor reading, a satellite navigation display.

## Direct and indirect data sources

- **Direct** — collected for the **specific purpose** at hand: your own questionnaire, your own sensor readings.
- **Indirect** — collected for **some other purpose** and reused: census data, loyalty-card records used for marketing.

| | Advantage | Disadvantage |
|---|---|---|
| **Direct** | Relevant, current, known accuracy, in the required format | Costly, slow to gather, may need a large sample |
| **Indirect** | Cheap, immediately available, often very large | May be out of date, wrong format, unknown bias, may include irrelevant data |

The "may be in the wrong format" point for indirect data is frequently omitted and frequently worth a mark.

## Quality of information

Information is only useful if it is:

- **Accurate** — free from error.
- **Relevant** — related to the purpose.
- **Up to date** — current enough for the decision.
- **Complete** — nothing essential missing.
- **Presented appropriately** — in a form the user can act on.
- **Available on time** — after the decision point it is worthless.

Poor-quality information leads to poor decisions — the practical reason validation and verification matter.

## Encoding data

Coding data (`M`/`F`, `L`/`M`/`S`, country codes) has clear gains: **less storage**, **faster entry**, **easier validation**, and **quicker searching and sorting**.

But it also causes problems: **coarse categories lose detail**, codes must be learnt, and value judgements are distorted. Coding a garment colour as `RD` loses the difference between scarlet and burgundy — an example worth having ready.

## Validation and verification

**They are not the same thing, and this is the most commonly confused pair in the syllabus.**

- **Validation** — an automatic computer check that data is **reasonable and of the correct type**. It cannot detect whether data is *correct*, only whether it is sensible.
- **Verification** — a check that data has been **accurately transferred or copied**, by double entry or visual proof-reading.

A valid but wrong date of birth passes every validation check ever written. Only verification against the source can catch it.

| Validation check | Tests |
|---|---|
| **Range** | Value falls between limits |
| **Type / character** | Correct data type or characters |
| **Length** | Correct number of characters |
| **Format / picture** | Matches a pattern, e.g. two letters then four digits |
| **Presence** | A required field is not blank |
| **Lookup** | Value exists in a defined list |
| **Check digit** | Extra digit calculated from the others — used for ISBNs and barcodes |

## Processing methods

| Method | Description | Best for |
|---|---|---|
| **Batch** | Data collected, processed later in a group, no user interaction | Payroll, billing, cheque clearing |
| **Online / interactive** | Processed as entered, user waits for a response | Booking systems, e-commerce |
| **Real-time** | Processed immediately, output affects the input source | Process control, autopilot, safety systems |

**Batch suits payroll** because it is a large volume of similar transactions with no urgency, so processing can be scheduled overnight when the system is idle.

**Real-time control differs from real-time transaction processing:** in control systems the output feeds back to influence the next input, which is why a delay is unacceptable.

## Databases

**Flat file** — a single table. Simple, but causes **data redundancy** (the same data stored repeatedly) and therefore **inconsistency** when one copy is updated and another is not.

**Relational database** — multiple linked tables. Reduces redundancy, improves integrity and security, and allows complex queries.

- **Primary key** — uniquely identifies each record.
- **Foreign key** — a primary key from another table, used to create the link.
- **Referential integrity** — prevents a record being deleted if other records still refer to it.

**Normalisation** organises data to eliminate redundancy. First normal form removes repeating groups; second removes partial dependencies; third removes transitive dependencies.

## Exam traps

- Defining data and information without mentioning **context**.
- Confusing validation with verification.
- Claiming validation guarantees accuracy.
- Confusing direct with indirect data sources.
- Giving the advantages of coding without the loss of detail.
- Recommending batch processing where an immediate response is required.

## Self-test

1. Distinguish data from information, and give the key word.
2. Distinguish direct from indirect data sources, with one drawback of each.
3. Explain the difference between validation and verification, and why validation is insufficient alone.
4. Name four validation checks and what each tests.
5. Why is batch processing suitable for payroll but not for airline booking?

**Answers:** 1. Data is raw facts without meaning; information is data with **context** applied. 2. Direct data is collected for the specific purpose but is costly and slow; indirect data was gathered for another purpose so it is cheap but may be out of date or in the wrong format. 3. Validation is an automatic check that data is reasonable; verification checks that data has been copied accurately. Validation alone is insufficient because incorrect data can still be entirely reasonable — a wrong but valid date of birth passes every check. 4. Range (value within limits), type (correct data type), length (correct number of characters), presence (field not blank) — also format, lookup and check digit. 5. Payroll is a high volume of similar transactions with no urgency, so it can be scheduled; booking requires an immediate response and confirmation, so it must be processed online.
