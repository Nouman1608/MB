---
title: "Cambridge A Level Information Technology (ICT): 16.4 Development and testing (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: Development and Testing Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on section 16.4 of Cambridge A Level IT 9626: test plan contents, test data types, alpha and beta, white and black box, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

For full explanations and a worked test plan, read the [section 16.4 study guide](/resources/cambridge-a-level-ict-9626-development-testing/) first. These notes condense **section 16.4 Development and testing** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content, examined in Paper 3 (Advanced Theory).

Test yourself with the [practice questions](/resources/cambridge-a-level-ict-9626-development-testing-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic and the [free diagnostics](/diagnostics/) show where to start.

## Why test?

- Find faults before the users do (cheaper to fix).
- Check the system meets the requirements and design.
- Check it copes with wrong, unusual and extreme input.
- Testing shows faults exist; it cannot prove none remain.

## Test plan

A document written **before** testing that lists every test.

**Purpose:** nothing missed; clear instructions; expected results to compare with; a record.

**Contents**

| Item | Notes |
|---|---|
| Test number | Identifies each test |
| Purpose / description | Which feature or requirement is tested |
| Test data | Exact values |
| Type of data | Normal, extreme, abnormal |
| Expected result | Precise: accepted or rejected, plus any output |
| Actual result | Filled in during testing |
| Pass/fail and comments | Action taken |

**Creating a plan for a situation:** read the rules (limits, formats, calculations); pick normal, extreme and abnormal values for each; work out each expected result by hand.

## Test data

| Type | Meaning | Result |
|---|---|---|
| **Normal** | Valid, inside the limits | Accepted |
| **Extreme** | Valid, at the very limit | Accepted |
| **Abnormal** | Invalid: beyond limits, wrong type or format | Rejected with a message |

### Example: a field accepting a whole number from 1 to 8

| Data | Type | Expected |
|---|---|---|
| 4 | Normal | Accepted |
| 1 | Extreme | Accepted |
| 8 | Extreme | Accepted |
| 0 | Abnormal | Rejected |
| 9 | Abnormal | Rejected |
| 3.5 | Abnormal (not a whole number) | Rejected |
| "four" | Abnormal (wrong type) | Rejected |

## Alpha and beta testing

| | Alpha | Beta |
|---|---|---|
| Who | Developer's own staff | Limited group of real users |
| Where | Developer's environment | Users' own environment |
| When | First | After alpha, before final release |
| Advantages | Controlled; quick fixes; no public embarrassment | Real conditions, equipment and users; honest feedback |
| Disadvantages | Testers know the system; not realistic | Little control; poor fault reports; may delay release |

## White box and black box

| | White box | Black box |
|---|---|---|
| Sees code? | Yes | No |
| Tests based on | Paths, branches, loops in the code | Requirements, inputs and expected outputs |
| Advantages | Thorough; finds hidden code faults and unused code | No programming knowledge needed; tests as users use it |
| Disadvantages | Needs skilled staff and access to code; slow; misses missing features | Cannot be sure all code paths tested; internal faults can be missed |

Most projects use both.

## Must-know distinctions

- **Extreme** (valid, at the limit) vs **abnormal** (invalid, beyond the limit).
- **Alpha** (inside the developer) vs **beta** (outside, real users).
- **White box** (code visible) vs **black box** (code hidden).
- **Test data** (what is entered) vs **expected result** (what should happen).
- **Expected result** (written before) vs **actual result** (recorded during).

## Quick self-test

1. Why is a test plan written before testing starts?
2. What type of data is the lowest allowed value?
3. A field accepts 18 to 65. Classify 17, 18 and 40.
4. What is wrong with the expected result "error"?
5. Who carries out alpha testing?
6. Give one disadvantage of beta testing.
7. Which testing method requires the code?
8. Give one advantage of black box testing.
9. A price is £5 and 3 or more items give 10% off. State the expected total for 3 items.
10. Name three items that appear in a test plan.

### Answers

1. So that every test, the data and the expected result are decided in advance, nothing is missed and results can be compared with expectations.
2. Extreme (boundary) data.
3. 17 is abnormal (rejected); 18 is extreme (accepted); 40 is normal (accepted).
4. It is vague; it should say that the data is rejected and give the message or behaviour expected.
5. The developer's own staff, such as the development team or in-house testers.
6. Any one: little control over testers; faults may be badly reported; users may be put off by a faulty version; it can delay release.
7. White box testing.
8. Any one: no programming knowledge needed; tests from the user's point of view; independent of the code.
9. 3 × £5 = £15, less 10% (£1.50) = £13.50.
10. Any three: test number, purpose, test data, type of data, expected result, actual result, pass or fail.

## Where marks are usually lost

- Calling boundary values abnormal.
- Writing "error" or "works" as the expected result.
- Giving test data without its type.
- Leaving out a wrong-data-type test.
- Mixing up who does alpha and beta testing.
- Describing white box testing as "testing the inputs and outputs".
- Giving only advantages when asked to evaluate types of testing.

## Frequently asked questions

**Why is extreme data accepted?**
Extreme data is at the limit of the valid range, so it is still valid. It is tested because errors often occur exactly at the limits.

**Can testing prove a system has no faults?**
No. Testing can show that faults exist, but it cannot prove that none remain, which is why a plan that covers as much as possible is needed.

**Which is used first, alpha or beta?**
Alpha testing is done first, by the developer's own staff. Beta testing follows with a limited group of real users.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.4: Development and testing.
