---
title: "Cambridge A Level Information Technology (ICT): 16.4 Development and testing (9626)"
seoTitle: "Cambridge A Level IT 9626: Development and Testing Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.04
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "development-and-testing"
description: "Study guide to section 16.4 of Cambridge A Level IT 9626: test plans, test data, alpha and beta testing, white box and black box testing, with a worked test plan."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.4 Development and testing** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed.

The syllabus asks you to know:

- **test plans**: the need for testing, the purpose and contents of a test plan, and how to create one for a given situation
- **test data**: the types and purpose of test data
- **alpha and beta testing** and the differences between them
- **white box and black box testing** and the differences between them
- the advantages and disadvantages of the different types of testing.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.4 revision notes](/resources/cambridge-a-level-ict-9626-development-testing-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-development-testing-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Development and testing in the life cycle

In development, the design is turned into a working system: databases are created, forms and reports are built and programs are written. Testing runs alongside and after the building. Faults found are corrected and the part is tested again.

## Why test?

- To find faults before users do, when they are cheaper to fix.
- To check that the system meets the requirements and design.
- To check that it copes with wrong, unusual and extreme input.
- To give users and the client confidence that it is safe to use.

A system that is not tested may lose data, give wrong results, crash or put users at risk. Testing can show that faults exist. It can never prove that none remain, which is why a plan is needed to cover as much as possible.

## Test plans

A **test plan** is a document, written before testing begins, that lists every test to be carried out. Its purposes are to make sure that nothing is missed, to give testers clear instructions, to allow results to be compared with what was expected and to provide a record for later checking.

### Contents of a test plan

| Item | Purpose |
|---|---|
| **Test number** | Identifies the test |
| **What is being tested** (the description or purpose) | Says which feature or requirement the test checks |
| **Test data** | The exact values entered |
| **Type of test data** | Normal, abnormal or extreme |
| **Expected result** | What should happen, stated precisely |
| **Actual result** | What did happen, recorded during testing |
| **Pass or fail / comments** | Whether the actual result matched, and any action taken |

A plan written for a given situation must test each requirement and each validation rule with data that is suitable for that situation.

## Test data

Test data is the data used in tests. It has three main types.

| Type | Meaning | Expected outcome |
|---|---|---|
| **Normal** | Valid data well inside the allowed limits | Accepted |
| **Extreme (boundary)** | Valid data at the very edge of the allowed range | Accepted |
| **Abnormal** | Data that should be rejected: outside the range (just beyond the limits), the wrong data type or the wrong format | Rejected with an error message |

*Purpose:* normal data shows the system does its job; extreme data shows that limits are correct; abnormal data shows that the system protects itself and gives helpful errors. Many faults occur at boundaries, such as using "greater than" instead of "greater than or equal to".

### Worked example: a book order test plan

A bookshop's system accepts a quantity as a whole number from 1 to 500. A book costs £8. Orders of 10 to 49 books get 5% off, and orders of 50 or more get 10% off.

| No. | Purpose | Test data | Type | Expected result |
|---|---|---|---|---|
| 1 | Valid quantity, no discount | 9 | Normal | Accepted; total £72.00 |
| 2 | Lower bound of discount band | 10 | Normal (edge of discount band) | Accepted; total £76.00 |
| 3 | Mid-band discount | 30 | Normal | Accepted; total £228.00 |
| 4 | Upper bound of 5% band | 49 | Normal (edge of discount band) | Accepted; total £372.40 |
| 5 | Lower bound of 10% band | 50 | Normal (edge of discount band) | Accepted; total £360.00 |
| 6 | Lowest allowed quantity | 1 | Extreme | Accepted |
| 7 | Highest allowed quantity | 500 | Extreme | Accepted; total £3,600.00 |
| 8 | Just below the range | 0 | Abnormal | Rejected with an error message |
| 9 | Just above the range | 501 | Abnormal | Rejected with an error message |
| 10 | Wrong data type | "ten" | Abnormal | Rejected with a message asking for a whole number |

Working: test 2 is 10 × £8 = £80, less 5% (£4) = £76.00. Test 3 is 30 × £8 = £240, less 5% (£12) = £228.00. Test 4 is 49 × £8 = £392, less 5% = £372.40. Test 5 is 50 × £8 = £400, less 10% (£40) = £360.00. Test 7 is 500 × £8 = £4,000, less 10% (£400) = £3,600.00.

Tests 2, 4 and 5 are inside the valid range, so they are normal data even though they sit at the edge of a discount band. Notice that the plan tests both the validation range (1 to 500) and the calculation boundaries (9 and 10, 49 and 50). Each expected result is precise: "Accepted; total £76.00", not just "works".

## Alpha and beta testing

| | **Alpha testing** | **Beta testing** |
|---|---|---|
| Who | The developer's own staff, such as the development team or in-house testers | A limited group of real users or customers outside the developer |
| Where | In the developer's environment | In the users' own environment, with their own equipment and data |
| When | First, before the system is released outside | After alpha testing, shortly before final release |
| Aim | Find major faults and check it against the specification | Find faults that appear in real use and see how users react |
| Typical advantages | Faults are found in a controlled setting, can be fixed quickly, no risk of reputation damage | Real conditions, variety of equipment, real users give honest feedback |
| Typical disadvantages | Testers know the system well, so may miss problems; the setting is not realistic | Less control; faults may be reported badly or not at all; users may be put off; may delay release |

## White box and black box testing

| | **White box testing** | **Black box testing** |
|---|---|---|
| Knowledge needed | The tester sees and uses the internal code and logic | The tester does not need the code and treats the system as a "black box" |
| Method | Tests are designed to run through every path, branch and loop in the code | Tests are designed from the requirements: enter inputs and compare outputs with expected results |
| Who | Usually the programmers or technical testers | Testers or users |
| Advantages | Thorough; finds hidden errors in the code; can find unused or unreachable code | Needs no programming knowledge; tests what the user will do; independent of the code; finds missing requirements |
| Disadvantages | Needs skilled testers and access to the code; time-consuming; will not find missing features | Cannot be sure that every path through the code has been tested; faults inside the code can be missed |

Most projects use both: white box testing for the code, black box testing for the requirements.

## Common errors

- Calling a boundary value abnormal. Values at the limits of the valid range are **extreme** and are accepted. Values just beyond are abnormal.
- Writing "error" or "works" as an expected result. State accepted or rejected, and give any output.
- Leaving out a test of the wrong data type.
- Describing alpha testing as being done by "customers". It is done within the developer's own organisation.
- Saying beta testing "finds all the faults". Testing can never show that no faults remain.
- Saying white box testing needs no code. It needs the code, which is the point.

## Frequently asked questions

**What is the purpose of a test plan?**
To list what will be tested, with what data and what result is expected, so that testing is complete and results can be checked against expectations.

**What are the three types of test data?**
Normal, extreme (boundary) and abnormal.

**What is the difference between alpha and beta testing?**
Alpha testing is done by the developer's own staff in the developer's environment. Beta testing is done by a limited group of real users in their own environment, after alpha testing.

**What is the difference between white box and black box testing?**
White box testing uses knowledge of the internal code to test every path. Black box testing tests inputs against expected outputs without looking at the code.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.4: Development and testing.
