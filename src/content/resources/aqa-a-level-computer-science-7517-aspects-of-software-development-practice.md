---
title: "AQA A-Level Computer Science (7517): Aspects of Software Development -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Systematic approach to problem solving"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 13.1
syllabusTopics:
  - qualification: "a-level"
    topic: "systematic-approach-to-problem-solving-7517"
    subtopic: "aspects-of-software-development-7517"
description: "Original AQA 7517 section 4.13.1 questions with answers: analysis, design, implementation, testing and evaluation, including choosing test data and judging an approach."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
reviewNeeded: true
reviewNote: "2026-11-20: evaluation criteria (4.13.1.5) are not itemised in the specification; the marking points that name criteria use the commonly taught set. Check against current exam mark schemes."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Aspects of software development study guide](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development/) | [Aspects of software development revision notes](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-revision-notes/)

---

## Section A

**1.** Name the five stages of software development covered by the specification. **[5]**

**2.** State what is meant by abstraction when analysing a problem. **[1]**

**3.** State what is meant by acceptance testing. **[1]**

**4.** State the difference between boundary data and erroneous data. **[2]**

## Section B

**5.** A school wants a program to record the results of house sports events. Describe **two** ways in which the developer can establish the requirements, and explain why the intended users must be involved. **[4]**

**6.** Explain **two** benefits of designing a program as a set of modules with documented interfaces. **[4]**

**7.** A program accepts a student's mark for a test as a whole number from 0 to 50 inclusive. Complete a test plan with **one** normal value, **four** boundary values and **two** erroneous values, giving the expected result for each. **[7]**

**8.** A function `ticketPrice(age)` returns 0 for children under 5, 6 for ages 5 to 15 inclusive, 10 for ages 16 to 64 inclusive, and 7 for ages 65 and over.

**(a)** List the boundary values that should be tested. **[3]**
**(b)** Give the expected result for each value in part (a). **[2]**
**(c)** Give one erroneous test value and the expected behaviour. **[2]**

**9.** A developer builds the part of a stock control system that records deliveries first, before the reports and the user interface. Explain this decision using the idea of the critical path. **[2]**

**10.** Explain what a prototype is and how it can help during analysis. **[3]**

**11.** Compare an agile approach with a development in which each stage is completed before the next begins. **[4]**

**12.** A developer has finished a booking system for a sports centre.

**(a)** Describe **two** criteria that could be used to evaluate it. **[4]**
**(b)** State **two** sources of evidence that could be used for the evaluation. **[2]**

**13.** A student writes in an evaluation: "My program is good because it works." Explain why this is a weak evaluation and how it could be improved. **[3]**

---

## Answers

**1.** Analysis [1]; design [1]; implementation [1]; testing [1]; evaluation [1].

**2.** Keeping the details of the real-world situation that matter to the problem, and ignoring the rest, to build a model of it in the program [1].

**3.** Testing carried out with the intended users to confirm that the system meets its specification (what was agreed) [1].

**4.** Boundary data is at the edge of the valid range (and just outside it) and tests where the limits are applied [1]; erroneous data is invalid data of the wrong type or far out of range that should be rejected [1].

**5.** Any two methods [1 each]: interview the teachers or house captains; give questionnaires to the people who will use the program; observe how results are currently recorded; look at existing score sheets. Reason [2]: the users know what they need and the developer does not [1]; a system built without them risks not meeting their needs, so asking them avoids building the wrong thing [1]. (Maximum 4 marks.)

**6.** Any two benefits, each explained [2 marks each]. Modules can be written and tested separately [1], so errors are found and fixed in small parts [1]. Different programmers can write different modules at the same time [1] because the interface says what goes in and out, so the parts fit together [1]. A module can be reused in other programs or other places in the same program [1], which saves time [1]. The program is easier to maintain, since a change affects only one module [1] and the documented interface says what it must still do [1].

**7.** Normal: any value from 1 to 49, for example 25, expected: accepted [2: 1 for a valid normal value, 1 for the expected result]. Boundary: 0 and 50 accepted; −1 and 51 rejected [4: 1 for each of the four values with the correct expected result]. Erroneous: for example "forty" and 200, or 3.5, each rejected with a message [1 for two erroneous values, with the expected result]. Maximum 7 marks.

**8. (a)** Any three from: 4 and 5; 15 and 16; 64 and 65 [1 for each pair, up to 3 marks]. (0 is also a valid lowest value.)
**(b)** 4 gives 0 and 5 gives 6 [1]; 15 gives 6, 16 gives 10, 64 gives 10, 65 gives 7 [1].
**(c)** For example −3, or "abc" [1]; expected behaviour: rejected with an error message (and not a price) [1].

**9.** The critical path is the set of tasks on which the others depend [1]; reports and the interface need the delivery data to exist, so building that part first reduces the risk that the whole project is held up [1].

**10.** A prototype is an early, incomplete working version of the system [1]. It is shown to the users, who can react to something they can see [1], which often reveals requirements they had not been able to describe, so the analysis can be corrected before much has been built [1].

**11.** Agile: work is done in short cycles, each producing a working part [1], with frequent contact with users and regular review, so changing requirements can be handled [1]. Stage by stage: each stage is completed before the next begins, so the plan, cost and documents are clearer from the start [1], but mistakes in the requirements may only be found late, when they are costly to put right [1].

**12. (a)** Any two criteria, each described [2 marks each]: meets the requirements (does it do everything the analysis said, for example booking, cancelling and showing availability?) [1 each part]; usability (is it easy for staff and members to use, with clear screens and messages?) [1 each part]; robustness (does it cope with invalid input without failing?) [1 each part]; efficiency (does it respond quickly and use memory and storage sensibly?) [1 each part]; maintainability (is it modular and documented so it can be changed?) [1 each part].
**(b)** Any two from: results of testing against the test plan; feedback from the intended users or acceptance testing; comparison with the requirements list [1 each].

**13.** It is weak because "good" and "works" are vague and it gives no evidence [1]. It does not refer to the requirements or to any criteria such as usability or robustness [1]. It could be improved by checking each requirement against the test results and user feedback, saying which are met and which are not, noting limitations, and suggesting improvements [1].

---

## Where marks are usually lost

- Giving test data without expected results.
- Listing only normal data in a test plan.
- Confusing boundary data with erroneous data.
- Describing the stages as a one-way line without any return to earlier stages.
- Evaluating with opinion and no evidence.
