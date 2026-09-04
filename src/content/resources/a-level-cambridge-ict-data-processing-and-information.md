---
title: "Cambridge A-Level ICT: Data Processing and Information (9626)"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Section 1 – Data Processing and Information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
description: "Data, information and the data-processing cycle -- the opening section of Cambridge International AS & A Level ICT (9626), a 21-section syllabus staged across AS and A Level."
author: "marlbridge-academic-team"
publishedDate: 2026-08-21
featured: false
---

This guide covers **Section 1 Data Processing and Information**, the
first of 21 sections in Cambridge International AS & A Level ICT
(9626), for examination 2025-2027. The syllabus is staged: AS Level
candidates study sections 1-11 only, while the full A Level extends
to all 21 sections.

## Where this fits in 9626

Section 1 opens the AS-level content, alongside foundational sections
on Hardware and software, Monitoring and control, Algorithms and
flowcharts, eSecurity, The digital divide and Expert systems. The
distinction between data and information established here recurs
throughout the syllabus, including in later A-Level-only sections on
systems analysis and design.

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL ICT (9626) — SECTION 1 DATA
PROCESSING AND INFORMATION**

Section 1 establishes the core vocabulary the rest of the syllabus
builds on: the distinction between data and information, how data is
processed and encoded into meaningful information, and the stages of
the data-processing cycle (input, processing, output and storage)
that underpin ICT systems generally.

## How to approach it

Because ICT syllabuses are applied rather than purely theoretical,
practise explaining the data-information distinction using concrete,
real-world examples -- a barcode scan versus the stock update it
triggers, for instance -- rather than only definitions, since exam
questions typically embed this concept in scenario-based contexts. The
data-processing cycle you learn here (input, processing, output,
storage) is a recurring analytical frame used throughout the syllabus,
so get comfortable applying it to new systems described in exam
scenarios rather than treating it as a one-off definition to memorise.

## Official syllabus

Cambridge International AS & A Level ICT (9626) syllabus for
examination 2025, 2026 and 2027 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/662482-2025-2027-syllabus.pdf).

## Data, information and knowledge

**Data** consists of raw facts and figures with no context — the number 37 alone means nothing. **Information** is data given context and meaning: 37 degrees Celsius, a patient's temperature. **Knowledge** is the ability to act on information: knowing that 37 degrees is normal and requires no treatment.

Information has quality only if it is accurate, complete, relevant, timely, and presented in a suitable form for its user. Poor decisions usually trace back to a failure in one of these.

**Static** information does not change once produced, such as a printed book. **Dynamic** information updates automatically, such as a live departures board — more useful but dependent on the reliability of its source.

**Direct data** is collected for the specific purpose at hand — a researcher's own questionnaire, or a business's own sensor readings — and is relevant, current and of known accuracy, but is often costly and slow to gather. **Indirect data** is collected for some other purpose and reused, such as census data or loyalty-card records used for marketing — cheap, immediately available and often very large in scale, but it may be out of date, in the wrong format, carry unknown bias, or include irrelevant data the new user cannot filter out. The "wrong format" disadvantage of indirect data is easy to overlook but frequently worth a mark.

## Encoding and coding data

Coding replaces a value with a shorter representation — M and F for gender, a three-letter airport code. It saves storage, speeds entry, and allows validation against a defined set.

The costs are real: coarse coding loses precision, values may be misinterpreted by users unfamiliar with the scheme, and information can be lost irretrievably. Encoding colour as "R" cannot distinguish scarlet from crimson.

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

**Verification** checks that data has been *accurately transferred* — usually by double entry, as with password confirmation, or by visual proofreading against the source.

Neither guarantees correctness: a date of birth may be valid, verified, and still the wrong date.

## Processing methods

- **Batch processing** — transactions collected and processed together, with no user interaction. Suited to payroll and billing, where immediate response is unnecessary.
- **Online / real-time transaction processing** — each transaction processed immediately, keeping the master file always current. Required for booking systems, where two people must not book the same seat.
- **Real-time control** — a system responds to sensor input quickly enough to influence the process, as in a chemical plant or aircraft control.

## Worked example

A booking system must not allow double booking. Which processing method, and why?

```
Real-time transaction processing.

Master file is updated immediately as each booking is confirmed.
The seat is marked unavailable before the next enquiry is answered.

Batch processing would be unsuitable: bookings queued for later
processing would allow two customers to reserve the same seat
in the interval before the file is updated.
```

## Common mistakes

Treating validation and verification as the same thing, or swapping their definitions. Claiming validation ensures data is correct — it ensures only that it is reasonable. Describing a check digit as a validation of meaning rather than an arithmetic check. Saying batch processing is "old" rather than appropriate where immediacy is not needed. Defining information as "processed data" without mentioning context and meaning.

## Quick revision checklist

- Distinguish data, information and knowledge with a clear example.
- State the qualities that make information useful.
- Explain coding with both its benefits and its loss of precision.
- Name and describe every validation check, and contrast validation with verification.
- Compare batch, online transaction and real-time control processing, and justify a choice for a scenario.
