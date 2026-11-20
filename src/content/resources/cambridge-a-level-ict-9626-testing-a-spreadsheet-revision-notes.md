---
title: "Cambridge A Level Information Technology (9626): Testing a spreadsheet -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 8 – Spreadsheets"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 8.2
syllabusTopics:
  - qualification: "a-level"
    topic: "spreadsheets"
  - qualification: "a-level"
    topic: "spreadsheets"
    subtopic: "testing-a-spreadsheet"
description: "Revision notes for Cambridge 9626 IT section 8.2: test plans, normal, extreme and abnormal data, boundary testing and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 8.2 Testing a spreadsheet** (Topic 8 Spreadsheets) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory and applied in Paper 2 Practical. Full explanations and a complete worked test plan are in the [testing a spreadsheet study guide](/resources/cambridge-a-level-ict-9626-testing-a-spreadsheet/); test yourself with the [testing a spreadsheet practice questions](/resources/cambridge-a-level-ict-9626-testing-a-spreadsheet-practice/).

## What the syllabus asks

- **Testing the structure:** create and apply a test plan that tests **functions**, **validation rules** and **conditional formatting**.
- **Testing data:** explain the need for **appropriate test data**; choose **normal**, **extreme** and **abnormal** data for the plan.

## Key terms

| Term | Meaning |
|---|---|
| Test plan | A table of tests, test data, expected results and actual results, written before testing |
| Test data | The values entered to check the spreadsheet |
| Normal data | Valid, typical data that should be accepted |
| Extreme data | Valid data at the very edge of the allowed range |
| Abnormal data | Invalid data that should be rejected |
| Boundary | The point where a rule changes, such as 40 hours |
| Expected result | The outcome worked out in advance |
| Actual result | What really happened when the test was run |

## The test plan layout

| No. | What is tested | Test data | Type | Expected result | Actual result | Pass/fail and action |
|---|---|---|---|---|---|---|

Complete the first five columns **before** testing. A mark in an exam is for exact data and a specific expected result, not for a general statement.

## Telling the three types of data apart

Ask: **would the spreadsheet accept it?**

| Rule: whole number from 1 to 10 | Data | Type |
|---|---|---|
| Typical value | 6 | Normal |
| At the edges | 1 and 10 | Extreme |
| Just outside | 0 and 11 | Abnormal |
| Wrong type | "five", 3.5 | Abnormal |
| Missing | blank | Abnormal (check how it is handled) |

Remember: extreme data is **accepted**; abnormal data is **rejected**.

## What to test, and how

| Feature | What to test | Example |
|---|---|---|
| Functions | Every outcome and every boundary | An IF with a limit of 40: test 39 or 40 and 41 |
| Validation rules | Accepted at both limits; rejected just outside; wrong type | Range 0 to 60: test 0, 60, 61, -1, "ten" |
| Conditional formatting | The format appears when the condition is met, and not when it is not | Red above 50: test 50 (no) and 51 (yes) |

Also check input messages and error messages appear with the correct wording.

## Choosing appropriate data

- Use the **limits given** in the scenario.
- Test **both sides** of every boundary.
- Use values that are **easy to calculate by hand**.
- Cover **every branch** of a decision.
- Include at least one **accepted** and one **rejected** value for each validation rule.

## Worked expected results

For a pay formula with 12 pounds an hour and time-and-a-half after 40 hours, the expected pay is:

| Hours | Working | Pay |
|---|---|---|
| 20 | 20 × 12 | 240 |
| 40 | 40 × 12 | 480 |
| 41 | 480 + 1 × 12 × 1.5 | 498 |
| 60 | 480 + 20 × 18 | 840 |

If a test gives a different value, the **difference** often points to the fault. A result of 492 for 41 hours is 6 less than expected, meaning the overtime multiplier of 1.5 was left out.

## Worked plan extract: validation on hours (0 to 60)

| No. | Tests | Data | Type | Expected result |
|---|---|---|---|---|
| 1 | Typical value | 35 | Normal | Accepted |
| 2 | Lowest allowed | 0 | Extreme | Accepted |
| 3 | Highest allowed | 60 | Extreme | Accepted |
| 4 | Just above the limit | 61 | Abnormal | Rejected; error message shown |
| 5 | Below the limit | -5 | Abnormal | Rejected; error message shown |
| 6 | Wrong data type | ten | Abnormal | Rejected; error message shown |

Tests 3 and 4 are a pair: the highest accepted value and the lowest rejected value. The same pairing is used for every limit.

## Running the tests

1. Enter the data.
2. Record the actual result (screenshot as evidence).
3. Compare with the expected result.
4. Fix any fault.
5. **Repeat** the failed test and the related tests.

## Why test?

- Formula errors are easy to make and hard to spot.
- People trust figures on screen.
- Validation and formatting rules often contain boundary mistakes.
- A test plan is evidence the spreadsheet is fit for purpose.

## Exam traps

- Confusing extreme and abnormal data.
- Expected results such as "it works" or "an error".
- Only normal data in the plan.
- Missing the data just outside a limit.
- Working out the expected result after seeing the output.
- Not stating what the test is for.

## Self-test

1. What is a test plan?
2. Which columns are completed before the tests are run?
3. Define normal data.
4. Define extreme data.
5. Define abnormal data.
6. A cell accepts whole numbers from 18 to 65. Give an example of each of the three types of data.
7. What would you test in a validation rule?
8. A cell turns green when marks are 50 or more. Which two values test the boundary?
9. Why is expected pay for 41 hours (12 pounds an hour, overtime after 40 at time and a half) 498?
10. Why should earlier tests be repeated after a correction?
11. Give one reason for testing a spreadsheet.
12. Why is a blank cell included as test data?

### Answers

1. A table listing tests, test data, expected results and actual results.
2. Test number, what is tested, test data, type of data and expected result.
3. Valid, typical data that should be accepted and processed.
4. Valid data at the very edge of the allowed range.
5. Invalid data that should be rejected.
6. Normal: 30. Extreme: 18 or 65. Abnormal: 17, 66, "twenty" or blank.
7. That valid data (inside the limits and at the limits) is accepted and invalid data is rejected with the correct message.
8. 49 (no green) and 50 (green).
9. 40 × 12 = 480, plus 1 hour × 12 × 1.5 = 18, giving 498.
10. The correction may have affected something that worked before.
11. Any one: to find formula errors, to check validation works, to be sure results can be trusted.
12. To check whether the spreadsheet accepts missing data or flags it.
