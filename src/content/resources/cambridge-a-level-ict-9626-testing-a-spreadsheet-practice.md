---
title: "Cambridge A Level Information Technology (9626): Testing a spreadsheet -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original Cambridge 9626 IT section 8.2 questions with answers on test plans, normal, extreme and abnormal data, and testing functions and validation."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Testing a spreadsheet study guide](/resources/cambridge-a-level-ict-9626-testing-a-spreadsheet/) | [Testing a spreadsheet revision notes](/resources/cambridge-a-level-ict-9626-testing-a-spreadsheet-revision-notes/)

These questions are for **section 8.2 Testing a spreadsheet** (Topic 8, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** Define extreme test data and give an example for a cell that accepts whole numbers from 1 to 100. **[2]**

**2.** A cell has a validation rule that accepts whole numbers from 1 to 100. State whether each entry is normal, extreme or abnormal data.

**(a)** 50 **[1]**

**(b)** 100 **[1]**

**(c)** 101 **[1]**

**(d)** abc **[1]**

**3.** Explain why the expected results in a test plan are worked out before the tests are carried out. **[2]**

**4.** State **two** column headings, other than "Test data", that a test plan should contain. **[2]**

## Section B

**5.** Greyfield Cinema uses a spreadsheet to find the ticket price from the customer's age in cell A2. The price is in B2:

`=IF(A2<16,6,IF(A2>=65,7,10))`

**(a)** Complete the expected result for each test. **[4]**

| No. | Test data (age) | Type | Expected price |
|---|---|---|---|
| 1 | 15 | Extreme | |
| 2 | 16 | Extreme | |
| 3 | 64 | Extreme | |
| 4 | 65 | Extreme | |

**(b)** Explain why both 64 and 65 are included in the plan. **[2]**

**(c)** When 65 was entered, the price shown was 10. Identify the likely fault and give the corrected formula. **[3]**

**6.** The age cell A2 has a validation rule that allows whole numbers from 0 to 110.

**(a)** Give **one** example of normal data, **two** examples of extreme data and **three** examples of abnormal data for this rule. **[6]**

**(b)** Explain why abnormal data is used when testing. **[2]**

**7.** A teacher's spreadsheet shades a mark cell red when the mark is below 40.

Create a test plan with **three** tests for this conditional formatting. For each, give the test data, the type of data and the expected result. **[6]**

**8.** A student writes this test plan for a spreadsheet that adds 20 per cent VAT to a price.

| No. | Test data | Expected result |
|---|---|---|
| 1 | 10 | 12 |
| 2 | 25 | 30 |
| 3 | 100 | 120 |

Evaluate the plan and suggest **three** improvements. **[5]**

**9.** A cell must contain a product code of exactly six characters. Give one example of data that is normal and one that is abnormal for this rule, and explain why the abnormal data would be rejected. **[3]**

**10.** Discuss why it is important to test a payroll spreadsheet thoroughly before it is used. **[4]**

**11.** The expected result for a test was 840, but the spreadsheet showed 660.

**(a)** State what should be done next. **[2]**

**(b)** Explain why previous tests should be repeated after the fault is corrected. **[2]**

**12.** A spreadsheet calculates a discount: 10 per cent off orders of 200 pounds or more, and none otherwise. Complete a test plan with **four** tests, including the boundary. Give test data, type and the expected discount. **[6]**

---

## Answers

**1.** Valid data at the very edge of the allowed range [1]. For example 1 or 100 [1]. **[2]**

**2. (a)** Normal [1].

**(b)** Extreme [1].

**(c)** Abnormal [1].

**(d)** Abnormal [1]. **[4]**

**3.** If the expected result is worked out first, it is independent of what the spreadsheet shows [1], so a wrong answer on screen is not mistaken for a correct one [1]. **[2]**

**4.** Any two from: test number [1]; what is being tested [1]; type of data [1]; expected result [1]; actual result [1]; pass or fail [1]. **[2]**

**5. (a)** 1: 6 [1]; 2: 10 [1]; 3: 10 [1]; 4: 7 [1].

**(b)** 64 is the highest age paid the standard price [1] and 65 is the lowest age paid the senior price [1], so together they show the boundary is in the right place.

**(c)** The comparison has been entered wrongly, for example as `A2>65` instead of `A2>=65` [1], so a person aged exactly 65 is not given the senior price [1]. The corrected formula is `=IF(A2<16,6,IF(A2>=65,7,10))` [1]. **[9]**

**6. (a)** Normal: any whole number such as 45 [1]. Extreme: 0 and 110 [2]. Abnormal: any three from -1, 111, 45.5, text such as "forty", or a blank cell [3].

**(b)** To check that invalid data is rejected [1] with an error message, so wrong values cannot enter the spreadsheet and spoil the results [1]. **[8]**

**7.** One mark each for a suitable test, plus a mark for the correct data type and expected result across the plan. Sample: Test 1: data 39, extreme (the highest mark that should be shaded), expected: red shading [2]. Test 2: data 40, extreme (the boundary), expected: no shading, because it is not below 40 [2]. Test 3: data 75, normal, expected: no shading [2]. **[6]**

**8.** The expected results are correct (10 × 1.2 = 12, 25 × 1.2 = 30, 100 × 1.2 = 120) [1]. However, all the data is normal [1]; there is no test of extreme data such as 0 [1] or abnormal data such as text or a negative price [1]; the plan has no heading for the type of data, no purpose and no actual result column [1]. Any five points, with at least one strength and three improvements. **[5]**

**9.** Normal: `AB1234` [1]. Abnormal: `AB12` (too short) or `AB123456` (too long) [1]. It would be rejected because a length check requires exactly six characters [1]. **[3]**

**10.** An error in a formula could result in staff being paid the wrong amount [1], which could harm staff and damage the company's reputation [1]. Errors are hard to see because the figures look plausible [1], and testing with boundary and invalid data finds faults before the spreadsheet is used for real pay [1]. **[4]**

**11. (a)** Find the cause of the difference [1], correct the formula, then repeat the test [1].

**(b)** The correction might have changed other results or broken something that worked before [1], so earlier tests are repeated to confirm everything still works [1]. **[4]**

**12.** Sample plan: 199.99, extreme (just below the boundary), expected discount 0 [2]; 200, extreme (the boundary), expected discount 20 [2]; 500, normal, expected discount 50 [1]; -10 or text, abnormal, expected to be rejected or flagged [1]. **[6]**

## Where marks are usually lost

- Confusing extreme data with abnormal data.
- Writing "it works" as an expected result.
- Testing only one side of a boundary.
- Not working out the expected values before testing.
- Giving data with no type and no purpose in a test plan.
