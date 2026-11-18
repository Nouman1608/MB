---
title: "Cambridge IGCSE ICT (0417): Development and testing -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original questions with answers on test strategies, test plans, remedial action, normal, abnormal, extreme and live data for Cambridge IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These questions cover section 7.3 "Development and testing" of Cambridge IGCSE ICT 0417: the need for testing, test designs and strategies, test plans, test data and live data. All organisations are invented.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Development and testing study guide](/resources/cambridge-igcse-ict-0417-development-and-testing/) · [Development and testing revision notes](/resources/cambridge-igcse-ict-0417-development-and-testing-revision-notes/)

---

## Section A: short answers

**1.** Define *extreme data*. **[1]**

**2.** Name **three** test strategies. **[3]**

**3.** State the **two** columns of a test plan that are completed only after a test has been run. **[2]**

**4.** A field stores the number of children in a family and accepts whole numbers from 0 to 12. Identify the type of test data each value represents.

**(a)** 12 **[1]**

**(b)** 13 **[1]**

**(c)** 3 **[1]**

**5.** Give **two** consequences for a business if a new system is implemented without being tested. **[2]**

---

## Section B: structured questions

**6.** Lakeview Gym's new membership system has a field *Age* that must accept whole numbers from 16 to 80.

Copy and complete the test plan below with **four** different tests: one normal, two extreme and one abnormal.

| Test data | Type of test data | Expected outcome |
|---|---|---|
| | | |

**[4]**

**7.** During testing, the value 80 is rejected by the *Age* field.

**(a)** State what should be recorded in the test plan as the actual outcome. **[1]**

**(b)** Suggest the most likely cause of this fault. **[1]**

**(c)** Describe the remedial action that should be taken. **[2]**

**8.** The gym's system has a *Password* field that must contain between 8 and 16 characters.

**(a)** Give the extreme test data for this field. **[2]**

**(b)** Give **two** items of abnormal test data and explain why each should be rejected. **[2]**

**9.** The gym system has three modules: membership, class bookings and payments.

**(a)** Explain why each module should be tested separately before the whole system is tested. **[2]**

**(b)** Explain why the whole system must still be tested once each module works. **[2]**

**10.** Describe how the gym's output formats should be tested, with an example. **[3]**

**11.** Before switching over, the gym enters last month's real membership payments into the new system.

**(a)** State the name given to this type of data. **[1]**

**(b)** Explain how the results are used to check the system. **[2]**

**(c)** Explain why this does not replace testing with normal, abnormal and extreme data. **[2]**

**12.** Explain why a test plan should include abnormal data as well as normal data. **[3]**

---

## Answers

**1.** Valid data at the upper or lower limit of the accepted range [1]. **[1]**

**2.** Testing each module [1]; testing each function [1]; testing the whole system [1]. **[3]**

**3.** Actual outcome [1]; remedial action [1]. **[2]**

**4. (a)** Extreme [1].

**(b)** Abnormal [1].

**(c)** Normal [1]. **[3]**

**5.** Any two of: customer or financial data could be lost or corrupted [1]; wrong output such as incorrect invoices could be sent [1]; the business might make wrong decisions [1]; fixing faults while the system is in use costs more time and money [1]; staff and customers lose confidence [1]. Maximum 2. **[2]**

**6.** One mark per correct row:
- Normal: any whole number from 17 to 79, such as 35; accepted [1].
- Extreme: 16; accepted [1].
- Extreme: 80; accepted [1].
- Abnormal: such as 15, 81, a decimal such as 30.5, or text such as "thirty"; rejected with an error message [1]. **[4]**

**7. (a)** Rejected / an error message was displayed [1].

**(b)** The range check has been set as "less than 80" instead of "80 or less" [1].

**(c)** Correct the validation rule so that 80 is included in the range [1], then repeat the test (and the other range tests) and record the new actual outcome [1]. **[4]**

**8. (a)** A password of exactly 8 characters [1] and one of exactly 16 characters [1].

**(b)** Any two, each with reason: a 7-character password, because it is shorter than the minimum [1]; a 17-character password, because it is longer than the maximum [1]; an empty field, because no password has been entered [1]. Maximum 2. **[4]**

**9. (a)** If an error is found it can be traced to that module, so it is easier to locate and correct [1]; modules can be tested as soon as they are built, so problems are found early [1].

**(b)** Errors may only appear when modules work together [1], for example a class booking might not pass correctly to the payments module to produce a charge [1]. **[4]**

**10.** Produce each screen display and report from known test data [1]; check that the data shown is correct and complete, and laid out, sorted and totalled as in the design [1]; for example, check that the monthly membership report lists members in surname order with the correct total income at the end [1]. **[3]**

**11. (a)** Live data [1].

**(b)** The results from the old system are already known [1], so the new system's output, such as the total payments, is compared with them; any difference shows a fault [1].

**(c)** Last month's data may not contain unusual or invalid values [1], so it cannot show whether the validation rejects abnormal data or handles the limits of each range correctly [1]. **[5]**

**12.** Abnormal data checks that the validation routines reject invalid data [1] and that a suitable error message is shown [1]; normal data only shows that valid data is accepted, so faults that let invalid data into the system would not be found [1]. **[3]**

## Frequently asked questions

**Is 0 normal or extreme data if the range starts at 0?**
If 0 is the lowest accepted value, it is extreme data and should be accepted.

**Should every field have extreme data?**
Only fields with limits, such as ranges or lengths. A presence or format check is tested with normal and abnormal data.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.3 "Development and testing".
