---
title: "Cambridge IGCSE ICT (0417): Development and testing -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE ICT 0417 7.3: why test, test designs and strategies, test plans, normal, abnormal and extreme data, live data, self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 7.3 of Cambridge IGCSE ICT 0417 covers developing the new system and testing it before it is implemented. These notes condense it. The [development and testing study guide](/resources/cambridge-igcse-ict-0417-development-and-testing/) has a full test plan with a failed test and its remedial action, and the [development and testing practice questions](/resources/cambridge-igcse-ict-0417-development-and-testing-practice/) let you build your own.

## Syllabus coverage

| Syllabus wording | Recall |
|---|---|
| The need to test the system before implementation | Find errors while cheap and safe to fix; check requirements are met |
| Test designs | Testing data structures, file structures, input formats, output formats, validation routines |
| Test strategies | Test each module, each function, the whole system |
| Test plan | Test data, expected outcomes, actual outcomes, remedial action |
| Test data | Normal, abnormal, extreme: definition, characteristics, use |
| Live data | Real data with known results |

## Why test before implementation

- Errors found after go-live can **corrupt or lose real data**.
- Wrong output leads to **wrong decisions** (wrong bills, wrong stock orders).
- Fixing a live system is **slower and dearer**.
- Users **lose confidence**.
- Testing proves the system **meets the requirements specification**.

## Test designs: five things to test

1. **Data structures**: right data type and length; data not cut off.
2. **File structures**: records can be added, saved, edited, deleted and found.
3. **Input formats**: screens and forms work, in logical order, with correct options.
4. **Output formats**: screens and reports show correct data, sorted and laid out as designed.
5. **Validation routines**: each check accepts valid and rejects invalid data.

## Test strategies

| Strategy | What it means | Why |
|---|---|---|
| Each module | Test each self-contained part (bookings, payments) separately | Errors are easy to trace to one part |
| Each function | Test each individual operation (search, calculate, print) | Every operation is proved to give the right result |
| Whole system | Test all modules together | Checks data passes correctly between parts |

Order: functions and modules first, whole system last.

## Test data

| Type | Accept or reject? | Example for a field 1 to 10 |
|---|---|---|
| Normal | Accept | 5 |
| Extreme | Accept | 1 and 10 |
| Abnormal | Reject with error message | 0, 11, "five", blank |

### Test data for other checks

| Check | Normal | Extreme | Abnormal |
|---|---|---|---|
| Length 8 to 20 characters | 12 characters | 8 and 20 characters | 7 or 21 characters |
| Format: two letters + three digits | KT407 | (not applicable) | K4070 |
| Presence | Any surname | (not applicable) | Blank |
| Date within next 90 days | Day 30 | Today and day 90 | Yesterday or day 91 |

## The test plan

| Column | Completed | Content |
|---|---|---|
| Test data | Before testing | The exact value entered |
| Expected outcome | Before testing | Exactly what should happen |
| Actual outcome | After the test | What did happen |
| Remedial action | After the test, if outcomes differ | What was changed to fix it; the test is then repeated |

## Live data

- Real data from the organisation, whose results are **already known** from the current system.
- Results from the new system are **compared** with known results.
- Shows how the system copes with real volumes and real mistakes.
- Does not replace normal, abnormal and extreme testing, because it may not contain unusual cases.

## Key terms

| Term | Meaning |
|---|---|
| Test design | Plan of what aspects of the system will be tested |
| Test strategy | How testing is organised: by module, function, whole system |
| Module | Self-contained part of a system |
| Test plan | Table of tests with data, expected and actual outcomes, remedial action |
| Normal data | Valid data the system should accept |
| Abnormal data | Invalid data the system should reject |
| Extreme data | Valid data at the limits of the accepted range |
| Expected outcome | What should happen when the test data is entered |
| Actual outcome | What did happen |
| Remedial action | Change made to correct a fault found by a test |
| Live data | Real data with known results used to test the new system |

## Exam traps

- **Extreme is accepted.** 0 and 11 for a 1 to 10 field are abnormal, not extreme.
- **Expected outcomes must be precise**: "accepted" or "rejected with an error message", not "it works".
- **Remedial action** only applies when expected and actual outcomes differ.
- **Live data is not "typing in real time"**: it is real data with known results.
- **Test plans are written before testing**; actual outcomes are filled in afterwards.

## Self-test

1. Give two reasons why a system must be tested before implementation.
2. Name the five items listed under test designs.
3. Name the three test strategies.
4. Why are modules tested before the whole system?
5. Define abnormal data.
6. A field accepts quantities from 5 to 50. Give one value each of normal, extreme and abnormal data.
7. A password must have 6 to 12 characters. Give the extreme test data.
8. Name the four elements of a test plan in the syllabus.
9. When is remedial action needed?
10. What is live data?
11. Give one advantage of testing with live data.
12. Why is normal data alone not enough for testing?

## Self-test answers

1. Any two of: errors could corrupt real data; wrong output could lead to wrong decisions; fixing a live system costs more; to check requirements are met.
2. Data structures, file structures, input formats, output formats, validation routines.
3. Test each module, each function, the whole system.
4. An error can be traced to one module, so it is easier to find and fix.
5. Invalid data that should be rejected, such as data outside the range or of the wrong type.
6. For example: normal 20; extreme 5 or 50; abnormal 4, 51 or text.
7. A password of exactly 6 characters and one of exactly 12 characters.
8. Test data, expected outcome, actual outcome, remedial action.
9. When the actual outcome is different from the expected outcome.
10. Real data from the organisation whose results are already known.
11. It shows the system working with real volumes of data and real situations, and results can be compared with known results.
12. It does not show whether invalid data is rejected or whether the limits of the range are set correctly.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.3 "Development and testing".
