---
title: "Cambridge IGCSE ICT (0417): Development and testing"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7.3
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "development-and-testing-0417"
description: "Test designs, test strategies, test plans with remedial action, normal, abnormal and extreme test data and live data, for Cambridge IGCSE ICT 0417 section 7.3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 7.3 of Cambridge IGCSE ICT 0417 is about building the system from the design and, above all, **testing** it. The syllabus asks for: the need to test the system before implementation; **test designs** (testing data structures, file structures, input formats, output formats and validation routines); **test strategies** (testing each module, each function and the whole system); the **test plan** (test data, expected outcomes, actual outcomes and remedial action); the definition, characteristics and use of **normal, abnormal and extreme** test data; and the use of **live data**.

The [systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/) introduces test data in one worked example. This page goes further, especially into test plans and remedial action. Recall notes are in the [development and testing revision notes](/resources/cambridge-igcse-ict-0417-development-and-testing-revision-notes/), and exam-style questions are in the [development and testing practice questions](/resources/cambridge-igcse-ict-0417-development-and-testing-practice/).

## Development: building from the design

During development the system is created to match the design: the file or database structure is set up with the planned field names, data types and lengths; the data capture screens and report layouts are built; and the validation routines are added to each field. Development and testing are linked because each part is tested as soon as it is built.

## Why test before implementation?

Testing finds errors while they are cheap and safe to fix. If an error is found after the system goes live:

- real data may be lost or corrupted, such as customer orders or patient records;
- the organisation may make wrong decisions based on wrong output;
- users lose confidence in the system;
- fixing the fault takes longer and costs more, because the system is in use and data may have to be corrected.

Testing also checks that the system does what the requirements specification said it should, so the client can accept it.

## Test designs: what is tested

The syllabus lists five things a test design covers. Each needs its own tests.

| Item | What a test checks | Example |
|---|---|---|
| **Data structures** | Data is stored with the right type and length | Does a 30-character surname fit without being cut off? |
| **File structures** | Fields, records and links between files work | Can a new record be added, saved and found again? |
| **Input formats** | Data capture screens work as designed | Do drop-down lists show the right options? Does the cursor move in a logical order? |
| **Output formats** | Screens and reports show the right information, laid out correctly | Does the report sort by surname and show the total at the end? |
| **Validation routines** | Each check accepts what it should and rejects what it should | Does the range check accept 1 and reject 0? |

## Test strategies: how much is tested at a time

- **Each module**: a module is a self-contained part of the system, such as the booking module or the payments module. It is tested on its own first, so an error can be traced to that module.
- **Each function**: every individual function within a module, such as "search for a customer", "calculate the total" or "print an invoice", is tested to check it gives the right result.
- **The whole system**: once modules work separately, they are tested together, to check that data passes correctly between them, for example that a booking made in one module appears on the invoice produced by another.

Testing in this order means small problems are found early and are easy to locate, while whole-system testing catches problems that only appear when parts work together.

## Test data: normal, abnormal and extreme

| Type | Definition | Characteristics | Use |
|---|---|---|---|
| **Normal** | Data that is valid and within the accepted range | Typical values the system will meet every day | Checks the system accepts and processes correct data and gives the right results |
| **Abnormal** | Data that is invalid and should be rejected | Outside the range, wrong type, wrong format or missing | Checks validation rejects bad data with a suitable error message |
| **Extreme** | Data at the very limits of the valid range | The largest and smallest values that should be accepted | Checks that the boundaries have been set correctly |

Extreme data is still **valid**, so it should be **accepted**. Values just outside the limits are **abnormal**.

### Test data for different kinds of check

Test data is not only for ranges of numbers:

- **Length check** on a password of 8 to 20 characters: normal, a 12-character password; extreme, exactly 8 and exactly 20 characters; abnormal, 7 or 21 characters.
- **Format check** on a product code of two letters then three digits: normal, *KT407*; abnormal, *K4070* or *KTT07*. (Extreme data does not really apply to a pattern.)
- **Presence check** on Surname: normal, *Okafor*; abnormal, the field left empty.
- **Date range check** that a booking date is today or within the next 90 days: extreme, today's date and the date exactly 90 days ahead; abnormal, yesterday or day 91.

## The test plan

A test plan is a table, written **before** testing, that lists every test. After each test is run, the remaining columns are completed. The syllabus names the four elements: **test data**, **expected outcome**, **actual outcome** and **remedial action**.

### Worked example: a test plan with a fault

A cinema's booking screen has a field *Tickets* that should accept whole numbers from 1 to 10.

| Test | Test data | Type | Expected outcome | Actual outcome | Remedial action |
|---|---|---|---|---|---|
| 1 | 4 | Normal | Accepted | Accepted | None |
| 2 | 1 | Extreme | Accepted | **Rejected**, error message shown | Range check corrected from "greater than 1" to "1 or more"; test repeated |
| 3 | 10 | Extreme | Accepted | Accepted | None |
| 4 | 0 | Abnormal | Rejected with message | Rejected with message | None |
| 5 | 11 | Abnormal | Rejected with message | Rejected with message | None |
| 6 | "two" | Abnormal | Rejected with message | Rejected with message | None |

Test 2 shows why extreme data matters. Normal data such as 4 passed, so without test 2 the fault would only have appeared when a customer tried to buy one ticket. The **remedial action** column records what was done to fix it; after the fix, the test is repeated and the actual outcome is recorded again.

## Live data

After testing with prepared test data, the system can be tested with **live data**: real data from the organisation's current work, for which the results are already known from the old system. For example, last month's sales are entered into a new accounts system and its totals compared with those the old system produced.

- **Why use it**: it shows how the system copes with real situations, real volumes of data and the errors real users make, which prepared test data may not include.
- **Limitation**: live data may not include every unusual case, so it does not replace normal, abnormal and extreme testing.

## Annotated model answer

*Question: explain why extreme data should be included in a test plan.*

"Extreme data is the largest and smallest values the system should accept **[definition]**. Testing it checks that the limits in the validation rules have been set correctly, for example that 1 is accepted when the rule is 1 to 10 **[purpose with example]**. A mistake at the boundary would not be found with normal data alone, so it might only appear when a real user enters that value **[consequence]**."

## Common mistakes

- Calling values just outside the range "extreme". They are abnormal.
- Writing "it works" as an expected outcome. State exactly what should happen: "accepted" or "rejected with an error message".
- Leaving out remedial action, or writing it when the test passed.
- Describing live data as "data typed in live". It is real data with already known results.
- Saying the whole system is tested first. Modules and functions are tested before the whole system.

## Exam technique

For **describe** questions on test data, give the definition and an example tied to the field in the question. For test plan questions, fill in every column with precise values and outcomes. For **explain** questions, give the reason for testing and its consequence for the organisation in the scenario.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.3 "Development and testing".
