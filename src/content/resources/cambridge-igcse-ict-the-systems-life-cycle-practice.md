---
title: "IGCSE ICT: The Systems Life Cycle — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "analysis-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "design-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "development-and-testing-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "implementation-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "documentation-0417"
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "evaluation-0417"
description: "Original exam-style questions with worked answers on analysis, design, test data, implementation, documentation and evaluation for Cambridge IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These practice questions cover all six stages of the systems life cycle in Cambridge IGCSE ICT 0417 Topic 7: analysis, design, development and testing, implementation, documentation and evaluation. Topic 7 is assessed on Paper 1 (Theory), where questions are set in a scenario and answers must be applied to it.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [The Systems Life Cycle revision notes](/resources/cambridge-igcse-ict-the-systems-life-cycle-revision-notes/) · [The systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/)

---

## Section A: short answers

**1.** Name the stage of the systems life cycle in which a requirements specification is produced. **[1]**

**2.** Name two validation checks, other than a range check, that could be used on a field storing a student's email address. **[2]**

**3.** Give two components of user documentation that are not usually found in technical documentation. **[2]**

**4.** State what is meant by *live data*. **[1]**

---

## Section B: structured questions

**5.** A sports centre wants to replace its paper booking system. The systems analyst must research the current system.

**(a)** Describe how the analyst would use observation, and give one disadvantage of it. **[3]**
**(b)** The centre has 40 part-time staff who work different shifts. Explain why a questionnaire might be more suitable than interviews. **[2]**
**(c)** Apart from researching the current system, state two other tasks carried out during analysis. **[2]**

**6.** The new booking system stores details of each member.

**(a)** Complete a design for three fields: give a field name, data type and suitable field length for MemberID, DateOfBirth and Gender. **[3]**
**(b)** Gender is stored as M or F. Explain one benefit of coding data in this way. **[2]**

**7.** The field *CourtNumber* accepts whole numbers from 1 to 8.

**(a)** Complete a test plan row for each of normal, extreme and abnormal data, giving the test data and the expected outcome. **[3]**
**(b)** Explain why the system must be tested before it is implemented. **[2]**
**(c)** State what is recorded in a test plan after a test has been run. **[2]**

**8.** The sports centre has one site. A chain of 30 libraries is installing a similar system.

**(a)** Describe pilot running. **[2]**
**(b)** Explain why pilot running may suit the library chain but not the sports centre. **[2]**
**(c)** Give one advantage and one disadvantage of direct changeover for the sports centre. **[2]**

---

## Section C: extended questions

**9.** Compare parallel running with phased implementation for a hospital that is introducing a new patient records system. **[6]**

**10.** After six months the sports centre manager asks for the new system to be evaluated. Describe how the system should be evaluated. **[4]**

**11.** Explain why a technician who has to upgrade the booking system needs technical documentation rather than the user guide. Refer to three components of technical documentation in your answer. **[4]**

---

## Worked answers

**1.** Analysis. **[1]**

**2.** Any two of: presence check (field must not be empty); format check (contains text, then @, then a domain); length check (no more than a set number of characters); character check (only permitted characters, for example no spaces). **[2]** A type check is weak here because the whole address is text.

**3.** Any two of: how to load/run/install the software; how to save a file; how to print data; how to add, delete or edit records; error messages and error handling; troubleshooting guide/helpline; frequently asked questions; glossary of terms. **[2]**

**4.** Real data, whose results are already known, used to test the new system. **[1]**

**5. (a)** The analyst watches staff taking bookings and records what is done, the data used and any problems (1). This gives first-hand, reliable information (1). Disadvantage: staff may work differently because they know they are being watched / it is time-consuming (1). **[3]**
**(b)** Staff work different shifts, so it would be hard to arrange interviews with all 40 (1); a questionnaire can be completed by everyone at a convenient time, and answers can be anonymous and analysed quickly (1). **[2]**
**(c)** Any two of: identify the inputs, outputs and processing of the current system; identify problems with the current system; identify user and information requirements; identify and justify hardware and software for the new system. **[2]**

**6. (a)** One mark per correct row, for example: MemberID, Text (or alphanumeric), length 6; DateOfBirth, Date/Time, length 8 or 10 (DD/MM/YYYY); Gender, Text, length 1. **[3]**
**(b)** Less storage space is needed / data entry is faster (1), and validation is easier because only M or F is allowed, so fewer errors are made (1). **[2]**

**7. (a)** Normal: for example 5, accepted (1). Extreme: 1 or 8, accepted (1). Abnormal: for example 0, 9 or "two", rejected with an error message (1). **[3]** No mark if 0 or 9 are given as extreme data.
**(b)** To find errors and make sure the system works as designed (1) before staff and customers depend on it, so faults do not cause lost bookings or wrong data (1). **[2]**
**(c)** The actual outcome (1) and any remedial action needed if it differs from the expected outcome (1). **[2]**

**8. (a)** The whole new system is introduced in one branch or department first (1); when it works there it is introduced in the other branches (1). **[2]**
**(b)** The library chain has many branches, so one library can trial the system and limit any failure to one site (1); the sports centre has only one site, so there is nowhere separate to pilot it (1). **[2]**
**(c)** Advantage: fastest and cheapest method / benefits are immediate (1). Disadvantage: if the new system fails there is no old system to fall back on, so bookings could be lost (1). **[2]**

**9.** Up to 6 marks for points about both methods, for example:
- In parallel running both systems run together, so if the new system fails the old one is still available (1).
- Outputs of the two systems can be compared to check the new one is correct (1).
- Parallel running is expensive, because staff enter every record twice and need more time (1).
- In phased implementation one part of the system is introduced at a time, such as admissions first (1).
- If a part fails, only that part is affected, so the risk is limited (1).
- Phased implementation takes longer before the whole system is in use (1).
- Reasoned conclusion: for patient records, where a failure could endanger patients, parallel running is safer despite its cost (1). **[6]** A "compare" answer must contain points about both methods.

**10.** Any four of: compare the system with the original task requirements (1); evaluate the efficiency of the solution, for example time taken to make a booking (1); evaluate ease of use, for example by asking staff (1); evaluate the appropriateness of the solution (1); evaluate users' responses to the results of testing (1); identify limitations and necessary improvements (1). **[4]**

**11.** The technician needs to change how the system works, not just use it (1). Three components explained, for example: the program listing and program language show the code to be changed (1); system/program flowcharts or algorithms show how the processing works (1); file structures and the list of variables show how data is stored (1); validation routines and hardware/software requirements may also be credited. The user guide only explains how to use features such as adding a record, so would not help. **[4]**

## Frequently asked questions

**Which paper tests the systems life cycle?**
Paper 1 Theory (1 hour 30 minutes, 80 marks), which uses multiple-choice, short-answer and structured questions set in everyday ICT contexts. Each mark normally needs one point applied to the scenario.

**Do I have to name all four implementation methods?**
Only when asked. Most questions name one or two methods and ask you to describe, compare or justify them for the organisation given.

**What earns the final mark in a "compare" question?**
Points about both methods and, where asked, a justified conclusion linked to the scenario.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 7 "The systems life cycle" (7.1–7.6). See the [revision notes](/resources/cambridge-igcse-ict-the-systems-life-cycle-revision-notes/) for the condensed content.
