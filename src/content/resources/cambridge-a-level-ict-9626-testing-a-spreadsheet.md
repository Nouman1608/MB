---
title: "Cambridge A Level Information Technology (9626): Testing a spreadsheet"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 8.2 study guide: test plans for functions, validation rules and conditional formatting, and choosing normal, extreme and abnormal test data."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 8.2 Testing a spreadsheet** of Topic 8 Spreadsheets in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. It is examined in Paper 1 Theory, where you may be asked to write or complete a test plan, and used in Paper 2 Practical when you check your own work. The [Spreadsheets overview](/resources/a-level-cambridge-ict-spreadsheets/) lists the three types of test data; this page shows how to build a complete test plan with calculated expected results. Use it with the [testing a spreadsheet revision notes](/resources/cambridge-a-level-ict-9626-testing-a-spreadsheet-revision-notes/) and the [testing a spreadsheet practice questions](/resources/cambridge-a-level-ict-9626-testing-a-spreadsheet-practice/).

## What section 8.2 covers

| Syllabus point | What you must be able to do |
|---|---|
| Testing a spreadsheet structure | Create and apply a test plan to test functions, validation rules and conditional formatting |
| Testing data | Explain the need to choose appropriate test data, and select normal, extreme and abnormal data for the plan |

## Why spreadsheets must be tested

A spreadsheet is a small program. A mistake in a formula can pass unnoticed and lead to wrong pay, wrong prices or wrong decisions, and people tend to trust figures on a screen. Testing shows whether the spreadsheet:

- gives the **correct results** for the formulas and functions;
- **rejects** invalid data through its validation rules;
- **responds** correctly through conditional formatting;
- is **fit for purpose** for the people who will use it.

Testing should be **planned before it is carried out**, so that the expected results are known in advance. If you work out the expected result only after seeing the answer on screen, you are tempted to accept it.

## The test plan

A **test plan** is a table that lists each test, the data to be entered, what should happen and what actually happened. Typical columns:

| Column | Purpose |
|---|---|
| Test number | Identifies the test |
| What is being tested | The function, validation rule or conditional format |
| Test data | The exact values entered |
| Type of data | Normal, extreme or abnormal |
| Expected result | What should happen, worked out in advance |
| Actual result | What did happen, recorded when the test is run |
| Pass or fail, and action | Whether it matches; what was done to correct a fault |

The first five columns are written **before** testing; the last two are completed during testing. A good plan has a **purpose** for every test and does not repeat tests that prove the same thing.

## Types of test data

### Normal data

**Normal (valid) data** is data the spreadsheet should accept and process in the usual way. It is typical of what users will enter. Example: 20 hours in a field that accepts 0 to 60.

### Extreme data

**Extreme data** is valid data on the **very edge** of what is accepted: the lowest and highest allowed values. It tests the **boundaries** of validation rules and conditions, where mistakes such as `>` instead of `>=` are most likely to show. Example: 0 hours and 60 hours.

### Abnormal data

**Abnormal (invalid) data** is data the spreadsheet should **reject**. It includes values of the wrong type, out of range or in the wrong format. Examples: -5 hours; 61 hours (just outside the upper limit); the text "ten"; a blank cell; 12.5.5.

Many exam answers confuse extreme and abnormal data. The test is: **would this data be accepted?** Extreme data is accepted, but only just. Abnormal data is rejected.

### Choosing appropriate data

Test data must be **appropriate** to what is being tested. It should:

- come from the real range of values, so results are meaningful;
- include **boundary** values on each side of every limit, such as the highest accepted value and the one just above it;
- be easy to **check by hand**, so the expected result is certain;
- cover **every branch** of a decision, such as every outcome of an IF;
- test each validation rule with at least one accepted and one rejected value.

## Worked example 1: a pay spreadsheet

**The spreadsheet.** Staff enter weekly hours in cell B2. The hourly rate is 12 pounds in C2. Pay is calculated in D2 with:

`=IF(B2>40, 40*C2+(B2-40)*C2*1.5, B2*C2)`

This means that hours over 40 are paid at one and a half times the rate. A **validation rule** on B2 allows only numbers from 0 to 60, with the error message "Hours must be between 0 and 60". **Conditional formatting** on D2 shades the cell red when hours are over 50.

**Working out expected results by hand.**
- 0 hours: 0 × 12 = 0.
- 20 hours: 20 × 12 = 240.
- 40 hours: 40 × 12 = 480 (exactly at the boundary; no overtime).
- 41 hours: 40 × 12 + 1 × 12 × 1.5 = 480 + 18 = 498.
- 50 hours: 480 + 10 × 18 = 660.
- 60 hours: 480 + 20 × 18 = 840.

### Testing the function

| No. | Tests | Data (hours) | Type | Expected result |
|---|---|---|---|---|
| 1 | Pay below the overtime threshold | 20 | Normal | 240 |
| 2 | Pay at the threshold | 40 | Extreme (boundary of the IF) | 480 |
| 3 | Pay just above the threshold | 41 | Normal | 498 |
| 4 | Lowest valid hours | 0 | Extreme | 0 |
| 5 | Highest valid hours | 60 | Extreme | 840 |

Tests 2 and 3 are a pair on either side of the threshold. Together they show that overtime starts after 40 hours and not at 40, and that the overtime part of the formula is correct.

### Testing the validation rule

| No. | Tests | Data | Type | Expected result |
|---|---|---|---|---|
| 6 | Value inside the range | 35 | Normal | Accepted |
| 7 | Lower limit | 0 | Extreme | Accepted |
| 8 | Upper limit | 60 | Extreme | Accepted |
| 9 | Just above the upper limit | 61 | Abnormal | Rejected with the error message |
| 10 | Negative number | -5 | Abnormal | Rejected with the error message |
| 11 | Text | ten | Abnormal | Rejected with the error message |
| 12 | Blank entry | (empty) | Abnormal | Check if rejected, or flagged by a presence check |

The upper limit appears in tests 8 and 9 as a pair: the highest accepted value and the lowest rejected value.

### Testing the conditional formatting

| No. | Tests | Data | Type | Expected result |
|---|---|---|---|---|
| 13 | Condition not met | 50 | Extreme (boundary: not over 50) | No red shading |
| 14 | Condition just met | 51 | Normal | Red shading |
| 15 | Well inside the condition | 60 | Extreme | Red shading |
| 16 | Condition not met | 20 | Normal | No red shading |

Test 13 checks that 50 does not trigger the format because the rule is "over 50".

## Carrying out the tests

1. Enter the first test data in the input cell.
2. Record the **actual result** in the plan (a screenshot is often used as evidence).
3. Compare with the expected result and mark **pass** or **fail**.
4. For a fail, find the cause, correct it, and **repeat** the test. Re-run earlier tests too, because the change may have broken something else.
5. When all tests pass, the plan is the evidence that the spreadsheet works.

## Worked example 2: finding a fault with the plan

Suppose test 3 gave 492 instead of the expected 498. The difference from the 480 for the first 40 hours is 12, which is one hour at the normal rate of 12 pounds. So the extra hour was not multiplied by 1.5. The formula had been typed as `40*C2+(B2-40)*C2`. The fix is to add `*1.5` at the end. After the fix, repeat tests 3 and 5, and any others that include overtime, which should now give 498 and 840.

This shows why expected results must be calculated independently first: the difference between 498 and 492 exposes the fault.

## Common mistakes

- Mixing up **extreme** data (accepted at the edge of a range) and **abnormal** data (rejected).
- Writing expected results as "it works" instead of a specific value or action.
- Testing only normal data.
- Failing to test **both sides** of a boundary.
- Not testing every outcome of a decision.
- Giving no purpose for a test.
- Repeating many tests that prove the same thing instead of covering different rules.
- Not retesting after a correction.

## Exam technique

- When asked to **complete a test plan**, give exact data values, the type of data and a specific expected result.
- Use the **limits stated in the scenario** to choose the data: the lowest and highest allowed value and the values just outside.
- Show how you worked out the expected result, especially for formulas with several steps.
- When asked **why** testing is needed, mention correct results, rejection of invalid data and trust in the figures.
- Test every feature the question names: functions, validation rules and conditional formatting.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 8 Spreadsheets, section 8.2 Testing a spreadsheet.
