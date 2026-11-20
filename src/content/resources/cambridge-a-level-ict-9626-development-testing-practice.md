---
title: "Cambridge A Level Information Technology (ICT): 16.4 Development and testing (9626) -- Practice Questions"
seoTitle: "Cambridge A Level IT 9626: Development and Testing Practice"
resourceType: "practice-questions"
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
description: "Original practice questions with marked answers on test plans, test data, alpha and beta testing and white and black box testing for section 16.4 of Cambridge A Level IT 9626."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **section 16.4 Development and testing** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). This is **A Level only** content examined in Paper 3 (Advanced Theory), where calculators are not allowed. All questions can be answered on paper.

Revise first with the [study guide](/resources/cambridge-a-level-ict-9626-development-testing/) and [revision notes](/resources/cambridge-a-level-ict-9626-development-testing-revision-notes/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Questions

**1.** Explain why a new system must be tested before it is used. **[2]**

**2.** State **four** items that a test plan should contain. **[4]**

**3.** A cinema booking system lets a customer book from 1 to 8 tickets. A ticket costs £7.50. If a customer books 5 or more tickets, every ticket in the booking costs £1.00 less.

**(a)** Complete a test plan with **eight** tests. Include at least: two normal values, both extreme values, one abnormal value just outside each limit, and one abnormal value of the wrong data type. For each, give the test data, its type and the expected result, including the total price where the data is accepted. **[8]**
**(b)** Explain why 4 and 5 are both worth including in the test plan, even though both are inside the valid range. **[2]**

**4.** Describe the purpose of each of the three types of test data (normal, extreme, abnormal). **[3]**

**5.** A software company has developed a new payroll package.

**(a)** Describe alpha testing of the package. **[2]**
**(b)** Describe beta testing of the package. **[2]**
**(c)** Give **one** advantage and **one** disadvantage of beta testing. **[2]**

**6.** A programmer tests a sorting module by reading the code and designing tests so that every branch of every `if` statement is run at least once.

**(a)** Name this type of testing. **[1]**
**(b)** Explain why a tester who does not have access to the code cannot carry it out. **[1]**
**(c)** The company also asks a group of office staff to enter sample orders and check the invoice totals without seeing the code. Name this type of testing and give **two** advantages of it. **[3]**

**7.** Compare white box testing with black box testing. **[4]**

**8.** A programmer says: "I have run 200 tests and all passed, so my program has no faults." Evaluate this statement. **[4]**

## Answers

**1.** To find faults before the users do [1], so that they can be corrected cheaply and so that the system meets its requirements and does not give wrong results or lose data. [1] **[2]**

**2.** Any four from: test number; purpose or description of the test; test data; type of data; expected result; actual result; pass or fail (or comments). [1 each] **[4]**

**3. (a)** One mark for each of the eight rows with correct data, type and expected result (the expected result must say accepted or rejected, and give the price where accepted):

| Test data | Type | Expected result |
|---|---|---|
| 3 | Normal | Accepted; £22.50 |
| 6 | Normal | Accepted; 6 × £6.50 = £39.00 |
| 1 | Extreme | Accepted; £7.50 |
| 8 | Extreme | Accepted; 8 × £6.50 = £52.00 |
| 0 | Abnormal | Rejected with an error message |
| 9 | Abnormal | Rejected with an error message |
| "two" | Abnormal | Rejected with a message asking for a whole number |
| (any eighth valid test, such as 5) | Normal | Accepted; 5 × £6.50 = £32.50 |

Other valid normal values are acceptable, with the correct price. **[8]**
**(b)** The discount applies from 5 tickets, so 4 and 5 are the values either side of the discount boundary [1]; faults often occur at a boundary, such as using "more than 5" instead of "5 or more", so both are needed (4 gives £30.00 and 5 gives £32.50). [1] **[2]**
*Examiner insight:* 4 and 5 are normal data, not extreme, because they are not at the limits of the valid range of 1 to 8.

**4.** Normal data shows that the system works correctly with ordinary valid input [1]. Extreme data checks that values at the limits of the valid range are accepted, which tests that the limits are set correctly [1]. Abnormal data checks that invalid data is rejected, with a suitable message, so the system protects itself. [1] **[3]**

**5. (a)** Testing by the company's own staff, such as the development team [1], in the company's own environment, before the package is released outside the company. [1] **[2]**
**(b)** Testing by a limited group of real users or customers [1], in their own environment with their own data, after alpha testing and before final release. [1] **[2]**
**(c)** Advantage (any one): real conditions and equipment; real users give honest feedback. [1] Disadvantage (any one): little control over the testers; faults may be badly reported; users may be put off by a faulty version. [1] **[2]**

**6. (a)** White box testing. [1] **[1]**
**(b)** White box tests are designed from the internal structure of the code, so the tester must be able to see the code. [1] **[1]**
**(c)** Black box testing. [1] Advantages (any two): no programming knowledge needed; tests the system as users use it; independent of how the code is written; can find missing requirements. [1 each] **[3]**

**7.** Knowledge of the code (1 mark): white box testers can see the code; black box testers cannot, and treat the system as a black box. Basis of tests (1 mark): white box tests are designed to run each path, branch and loop; black box tests are designed from requirements, using inputs and expected outputs. Strength (1 mark): white box finds hidden faults and unused code; black box needs no programming skill and tests what the user does. Weakness (1 mark): white box needs skilled staff, is slow and cannot find missing features; black box cannot be sure that all code paths were tested. **[4]**
*Examiner insight:* A comparison needs both sides of each point in the same answer.

**8.** The statement is not valid (conclusion, 1 mark). Testing can show that faults exist but cannot prove that none remain [1]. The 200 tests might not cover every path, boundary or kind of abnormal data [1]. Other people, such as beta testers or users, may use the program in ways that the programmer did not test, so it is also worth using different types of testing, such as black box and beta. [1] **[4]**

## Where marks are usually lost

- Giving the expected result as "error" or "works".
- Classifying 1 and 8 as normal or abnormal instead of extreme.
- Omitting the total price for accepted data.
- Forgetting a wrong-type test such as text in a number field.
- Mixing up alpha (inside the developer) and beta (real users).
- Saying that black box testing does not test the system's logic.

## Next steps

- Recap with the [revision notes](/resources/cambridge-a-level-ict-9626-development-testing-revision-notes/).
- Reread the [study guide](/resources/cambridge-a-level-ict-9626-development-testing/).
- Explore the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/).
- Try all free 10-minute [diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Frequently asked questions

**How many tests should a test plan have?**
Enough to cover every requirement and rule, with normal, extreme and abnormal data for each input that has limits. Quality matters more than number.

**Why is the expected result written before testing?**
So that the tester compares the actual result with a decision made in advance and does not talk themselves into accepting a wrong result.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.4: Development and testing.
