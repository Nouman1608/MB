---
title: "A Level Information Technology (ICT): Data Processing and Information — Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 1 – Data Processing and Information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
description: "Condensed recall notes on data and information, direct and indirect sources, quality of information, encryption, validation and verification, and processing methods for Cambridge AS & A Level Information Technology 9626, topic 1."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
updatedDate: 2026-09-27
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Data Processing and Information study guide](/resources/a-level-cambridge-ict-data-processing-and-information/).

These notes follow **topic 1, Data processing and information**, of Cambridge International AS & A Level Information Technology (9626), 2025–2027 syllabus. It is an **AS Level** topic, with five parts: 1.1 Data and information, 1.2 Quality of information, 1.3 Encryption, 1.4 Checking the accuracy of data and 1.5 Data processing.

## 1.1 Data and information

- **Data** — raw facts and figures with **no context**. `37`, `Smith`, `2410`.
- **Information** — data given **context and meaning**. "Patient Smith's temperature is 37 °C."

The definition that scores is **context**. The syllabus wording is that data becomes information "through context and meaning", so the same figure can be data in one system and information in another.

### Direct and indirect data

- **Direct** — collected for the **specific purpose** at hand. Syllabus examples: questionnaires, interviews, data logging, observation.
- **Indirect** — collected for **some other purpose** and reused. Syllabus examples: weather data, census data, the electoral register, personal information collected by a business and then used by third parties, and research from textbooks, journals and websites.

| | Advantage | Disadvantage |
|---|---|---|
| **Direct** | Relevant, current, known accuracy, in the required format | Costly, slow to gather, may need a large sample |
| **Indirect** | Cheap, immediately available, often very large | May be out of date, in the wrong format, of unknown bias, or include irrelevant data |

"May be in the wrong format" is an easy disadvantage of indirect data to forget.

## 1.2 Quality of information

The syllabus gives five examples of factors that affect the quality of information; learn these first:

- **Accuracy** — is it free from errors?
- **Relevance** — does it relate to the purpose it is needed for?
- **Age** — is it recent enough for the decision being made?
- **Level of detail** — is there enough detail, without so much that the key points are lost?
- **Completeness** — is anything essential missing?

Poor-quality information leads to poor decisions — the practical reason validation and verification matter.

## 1.3 Encryption

- **Why:** intercepted or stolen data cannot be read without the key. Encryption does not stop interception.
- **Symmetric** — one secret key (the syllabus calls it a "private key") both encrypts and decrypts, so sender and receiver must share it securely. Fast, but key sharing is the weak point.
- **Asymmetric** — a public key encrypts and only the matching private key decrypts. Solves key sharing, but slower. Systems often use asymmetric encryption to swap a symmetric key.
- **Protocols:** **TLS/SSL** secures a client–server session (e.g. a browser and a bank's server); **IPsec** encrypts and authenticates all packets between two hosts or networks, as in a VPN. TLS/SSL is simple to deploy per application; IPsec covers all traffic but is harder to configure.
- **Uses:** protection of data (in transit and stored) and **systems encryption** (a whole disk or device).

## 1.4 Checking the accuracy of data

**Validation and verification are easy to confuse.**

- **Validation** — an automatic computer check that data is **reasonable and of the correct type**. It cannot detect whether data is *correct*, only whether it is sensible.
- **Verification** — a check that data has been **accurately entered, transferred or copied**. The syllabus lists visual checking and double data entry, parity check, checksum, hash total and control total.

A valid but wrong date of birth passes every validation check ever written. Only verification against the source can catch it — and verification cannot catch an error that was already on the source document. That is why **both** are needed.

The syllabus names nine validation checks:

| Validation check | Tests |
|---|---|
| **Presence** | A required field is not blank |
| **Range** | Value falls between an upper and a lower limit |
| **Type** | Correct data type, e.g. a number in a numeric field |
| **Length** | Correct number of characters |
| **Format** | Matches a pattern, e.g. two letters then four digits |
| **Check digit** | Extra digit calculated from the others — used for ISBNs and barcodes |
| **Lookup** | Value exists in a defined list |
| **Consistency** | One field is checked against another for a logical match, e.g. a start date before an end date |
| **Limit** | Value is checked against one boundary only, e.g. no more than 60 hours |

| Verification method | How it works |
|---|---|
| **Visual checking** | Entered data compared by eye with the source document |
| **Double data entry** | Data entered twice and the two versions compared |
| **Parity check** | An extra bit makes the count of 1s odd or even; a wrong parity on arrival shows corruption |
| **Checksum** | A value calculated from a block of data is sent with it and recalculated on arrival |
| **Hash total** | A total with no meaning (e.g. of employee numbers) compared before and after entry or transfer |
| **Control total** | A meaningful total (e.g. of hours worked in a batch) compared in the same way |

**Advantages and disadvantages.** Validation is automatic and instant, but it only proves data is reasonable. Verification catches copying and transmission errors, but visual checking and double entry take extra time and staff, and a parity check misses an error that flips two bits.

## 1.5 Data processing

| Method | Description | Syllabus uses |
|---|---|---|
| **Batch** | Data collected, then processed later as a group, with no user interaction | Utility bills, credit and debit card accounts, customer accounts, payroll and customer orders (master and transaction files) |
| **Online** | Each transaction is processed as it is entered; the user waits for a response | Electronic funds transfer, automatic stock control, electronic data interchange, business-to-business buying and selling, online shopping |
| **Real-time** | Processed immediately, and **the output affects the input** | Greenhouses, central heating, air conditioning, burglar alarms, traffic control and smart motorways, car park barriers, traffic lights; wireless sensor and actuator networks (smart homes, guidance systems, autonomous vehicles) |

**Sequentially updating a master file.** The transaction file is sorted into master-file key order, then the two are read together: unmatched master records are copied unchanged to a new master file, matched ones are updated from the transaction and written, until both files end. The new file becomes the master; the old one is kept as a backup. Be ready to write these steps as an algorithm (the syllabus links 1.5 to 4.1).

**Batch suits payroll** because it is a large volume of similar transactions with no urgency, so processing can be scheduled overnight when the system is idle.

**Real-time control differs from online processing:** in a real-time control system the output feeds back to influence the next input, which is why a delay is unacceptable.

> **Also in the syllabus (topic 10, Database and file concepts) — not part of topic 1.**
> Databases are often revised alongside data processing, but in the 2025–2027 syllabus they belong to topic 10: flat-file versus relational databases, primary, foreign, compound and composite keys, **referential integrity** (every foreign key value must match an existing primary key, so records cannot be orphaned) and normalisation to 3NF. Revise them with topic 10, not with topic 1.

## Exam traps

- Defining data and information without mentioning **context**.
- Confusing validation with verification.
- Claiming validation guarantees accuracy.
- Mixing up a range check (two limits) and a limit check (one limit).
- Confusing direct with indirect data sources.
- Recommending batch processing where an immediate response is required.

## Self-test

1. Distinguish data from information, and give the key word.
2. Distinguish direct from indirect data sources, with one drawback of each.
3. Name the five examples of factors that affect the quality of information that the syllabus gives.
4. Explain the difference between validation and verification, and why validation is insufficient alone.
5. Name four validation checks and what each tests.
6. Why is batch processing suitable for payroll but not for airline booking?

**Answers:** 1. Data is raw facts without meaning; information is data with **context** (and meaning) applied. 2. Direct data is collected for the specific purpose but is costly and slow; indirect data was gathered for another purpose so it is cheap but may be out of date or in the wrong format. 3. Accuracy, relevance, age, level of detail and completeness. 4. Validation is an automatic check that data is reasonable; verification checks that data has been copied accurately. Validation alone is insufficient because incorrect data can still be entirely reasonable — a wrong but valid date of birth passes every check. 5. Range (value within limits), type (correct data type), length (correct number of characters), presence (field not blank) — also format, lookup, consistency, limit and check digit. 6. Payroll is a high volume of similar transactions with no urgency, so it can be scheduled; booking requires an immediate response and confirmation, so it must be processed online.
