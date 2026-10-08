---
title: "Cambridge A Level Information Technology (ICT): Data Processing and Information (9626)"
seoTitle: "Cambridge 9626 IT Topic 1: Data Processing and Information"
seoDescription: "Cambridge 9626 IT topic 1: data vs information, quality of information, encryption, validation vs verification, and batch, online and real-time processing."
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 1 – Data Processing and Information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
description: "Data and information, quality of information, encryption, validation and verification, and batch, online and real-time processing -- topic 1 of Cambridge International AS & A Level Information Technology (9626), a 21-topic syllabus staged across AS and A Level."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-21
updatedDate: 2026-09-27
featured: false
---

This guide covers **topic 1, Data processing and information**, the
first of 21 topics in Cambridge International AS & A Level Information
Technology (9626), for examination 2025-2027. The syllabus is staged:
AS Level candidates study topics 1-11 only, while the full A Level
extends to all 21 topics.

## Where this fits in 9626

Topic 1 opens the AS Level content, alongside foundational topics
on Hardware and software, Monitoring and control, Algorithms and
flowcharts, eSecurity, The digital divide and Expert systems. The
distinction between data and information established here recurs
throughout the syllabus, including in A Level topics such as 16
(System life cycle) and 17 (Data analysis and visualisation).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL INFORMATION TECHNOLOGY (9626) —
TOPIC 1 DATA PROCESSING AND INFORMATION**

- 1.1 Data and information — the difference between data and
information; direct and indirect data, their sources, uses and
advantages and disadvantages
- 1.2 Quality of information — factors such as accuracy, relevance,
age, level of detail and completeness
- 1.3 Encryption — the need for it, symmetric and asymmetric methods,
the TLS/SSL and IPsec protocols, and its uses
- 1.4 Checking the accuracy of data — validation and verification
methods, the difference between them, why both are needed, and their
advantages and disadvantages
- 1.5 Data processing — batch processing (including master and
transaction files and the steps in sequentially updating a master
file), online processing, and real-time processing where the output
affects the input

## How to approach it

Because Information Technology is an applied subject rather than a
purely theoretical one, practise explaining the data-information
distinction using concrete, real-world examples -- a barcode scan
versus the stock update it triggers, for instance -- rather than only
definitions, since exam questions typically embed this concept in
scenario-based contexts. The three processing methods (batch, online
and real-time) recur throughout the syllabus as a way of matching a
method to a scenario, so get comfortable justifying a choice for a new
system described in an exam scenario rather than treating them as a
one-off definition to memorise.

## Official syllabus

Cambridge International AS & A Level Information Technology (9626)
syllabus for examination 2025, 2026 and 2027 (version 3, July 2025) —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/662482-2025-2027-syllabus.pdf).

## Data and information

**Data** consists of raw facts and figures with no context — the number 37 alone means nothing. **Information** is data given context and meaning: 37 degrees Celsius, a patient's temperature.

**Direct data** is collected for the specific purpose at hand — the syllabus gives questionnaires, interviews, data logging and observation as examples — and is relevant, current and of known accuracy, but is often costly and slow to gather. **Indirect data** is collected for some other purpose and reused — the syllabus examples are weather data, census data, the electoral register, personal information collected by businesses and used by third parties, and research from textbooks, journals and websites. It is cheap, immediately available and often very large in scale, but it may be out of date, in the wrong format, carry unknown bias, or include irrelevant data the new user cannot filter out. The "wrong format" disadvantage of indirect data is easy to overlook.

## Quality of information

The syllabus gives five examples of factors that affect the quality of information: **accuracy**, **relevance**, **age**, **level of detail** and **completeness**; learn these first. Information that is inaccurate, irrelevant to the decision, too old, too vague or too detailed, or missing something essential leads to poor decisions.

## Data validation and verification

These are frequently confused, and the distinction is the point of the topic.

**Validation** checks that data is *reasonable* — performed by software as it is entered.

| Check | Purpose |
|---|---|
| Range | Value falls between limits |
| Type | Data is of the correct type |
| Length | Correct number of characters |
| Presence | A required field is not empty |
| Format | Matches a pattern, such as a postcode |
| Check digit | An extra digit calculated from the others |
| Lookup | Value must exist in a predefined list or reference table |
| Consistency | Compares one field against another for a logical match, e.g. a start date before an end date |
| Limit | Value must not exceed a single specified boundary (a one-sided range check) |

**Verification** checks that data has been *accurately entered or transferred*. The syllabus names six methods (in five bullets — visual checking and double data entry share one):

| Method | How it works |
|---|---|
| Visual checking | The entered data is compared by eye against the source document |
| Double data entry | Data is entered twice and the two versions compared, as with password confirmation |
| Parity check | An extra bit makes the number of 1s odd or even; a byte arriving with the wrong parity has been corrupted |
| Checksum | A value calculated from a block of data is sent with it and recalculated on arrival |
| Hash total | A meaningless total of a field (e.g. the sum of employee numbers) is calculated for a batch before and after entry or transfer |
| Control total | A meaningful total (e.g. the total of hours worked in a batch) is compared in the same way |

Neither guarantees correctness: a date of birth may be valid, verified, and still the wrong date. The syllabus also asks why **both** are needed: validation catches unreasonable values automatically but misses wrong-but-sensible ones, while verification catches copying and transmission errors but not an error already on the source. Validation is instant and needs no extra staff; visual checking and double entry cost time, and a parity check misses errors that flip an even number of bits.

## Processing methods

- **Batch processing** — transactions collected and processed together, with no user interaction. The syllabus's named uses are utility bills, credit and debit card accounts, customer accounts, and payroll and customer orders using **master and transaction files**. To **update a master file sequentially**: sort the transaction file into the same key order as the master file; read the first record of each; while the keys do not match, copy the master record unchanged to a new master file; when they match, apply the transaction and write the updated record; repeat to the end of both files. The new file becomes the master and the old one is kept as a backup.
- **Online processing** — each transaction is processed as it occurs, keeping the master file current. Named uses: electronic funds transfer, automatic stock control, electronic data interchange, business-to-business buying and selling, and online shopping. Required for booking systems, where two people must not book the same seat.
- **Real-time processing** — a system in which **the output affects the input**: sensors feed a processor whose output drives actuators, and the changed conditions are measured again. Named uses: computer-controlled greenhouses, central heating, air conditioning, burglar alarms, traffic and car-park control, and wireless sensor and actuator networks such as smart homes, guidance systems and autonomous vehicles.

The syllabus also asks you to **write an algorithm** showing the steps of each method (the syllabus cross-references 4.1, Algorithms).

## Encryption

Encryption protects data by scrambling it into an unreadable form that can only be reversed with the correct key. **Symmetric encryption** uses one shared key for both encrypting and decrypting, so the key itself must be exchanged securely in advance. **Asymmetric encryption** uses a mathematically linked public/private key pair: data encrypted with the public key can only be decrypted with the matching private key, which never needs to be transmitted. The syllabus names two families of protocol. **TLS/SSL** (Transport Layer Security and its predecessor, Secure Sockets Layer) secures a session between a client application such as a browser and a server, for example during online banking or shopping. **IPsec** (Internet Protocol Security) works at the network layer, encrypting and authenticating every packet between two hosts or networks, which is why it is used for virtual private networks. Uses named by the syllabus are the **protection of data** (in transit and in storage) and **systems encryption** (encrypting a whole disk or device so nothing on it can be read without the key). Symmetric encryption is faster but requires a secure way to share the key; asymmetric encryption solves the key-sharing problem but is slower, which is why many systems use asymmetric encryption to exchange a symmetric key and then switch to symmetric encryption for the rest of the session. Between the protocols: TLS/SSL needs no special set-up beyond a certificate on the server and protects individual applications, but leaves other traffic from the same device unprotected; IPsec protects all traffic between two points whatever the application, but is more complex to configure and both ends must support it.

## Worked example

A booking system must not allow double booking. Which processing method, and why?

```
Online processing.

Master file is updated immediately as each booking is confirmed.
The seat is marked unavailable before the next enquiry is answered.

Batch processing would be unsuitable: bookings queued for later
processing would allow two customers to reserve the same seat
in the interval before the file is updated.
```

## Common mistakes

Treating validation and verification as the same thing, or swapping their definitions. Claiming validation ensures data is correct — it ensures only that it is reasonable. Describing a check digit as a validation of meaning rather than an arithmetic check. Saying batch processing is "old" rather than appropriate where immediacy is not needed. Defining information as "processed data" without mentioning context and meaning.

## Quick revision checklist

- Distinguish data and information with a clear example, using the words context and meaning.
- Give examples of direct and indirect data sources, with an advantage and a disadvantage of each.
- State the syllabus's five examples of quality factors (accuracy, relevance, age, level of detail and completeness), learning these first.
- Name and describe every validation check, and contrast validation with verification.
- Compare batch, online and real-time processing, and justify a choice for a scenario.
- Describe the steps in sequentially updating a master file from a transaction file, and write them as an algorithm.
- Explain the need for encryption, contrast symmetric with asymmetric encryption, and describe the purpose and use of TLS/SSL and IPsec, with their advantages and disadvantages.
