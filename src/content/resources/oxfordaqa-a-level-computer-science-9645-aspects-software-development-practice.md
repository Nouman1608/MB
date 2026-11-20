---
title: "OxfordAQA A-Level Computer Science (9645): Aspects of software development -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Software Development Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "aspects-of-software-development-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.3.4: analysis, design, the critical path, normal, boundary and erroneous test data, and evaluation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.3.4 Aspects of software development** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: analysis, design, implementation, testing and evaluation. Code is Python.

Related pages: [aspects of software development study guide](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development/) · [aspects of software development revision notes](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-revision-notes/)

## Section A

**1.** Name the five aspects of software development in the order they are usually carried out. **[2]**

**2.** State what is meant by the **critical path** of a solution. **[1]**

**3.** Give **two** things that are produced at the design stage. **[2]**

**4.** State the **three** criteria used to evaluate a computer system. **[3]**

## Section B

**5.** A school wants a program to record students' attendance.

**(a)** Describe **two** ways in which the analyst could establish the requirements. **[2]**
**(b)** Explain why prototyping could help clarify the requirements. **[2]**
**(c)** State what a data model for this system would describe. **[1]**

**6.** A program accepts a pass mark entered as a whole number from 0 to 100 inclusive and shows "Pass" for 40 or more.

**(a)** Complete the table by giving the type of each test (normal, boundary or erroneous) and the expected outcome. **[6]**

| Test data | Type | Expected outcome |
|---|---|---|
| 72 | | |
| 40 | | |
| 39 | | |
| 101 | | |
| "pass" | | |

**(b)** Explain why 39 and 40 are both useful test values. **[1]**

**7.** The code below should accept only ages from 16 to 60 inclusive.

```python
def valid_age(age):
    return age > 16 and age < 60
```

**(a)** State **two** test values that would show the code is wrong, and the result the code gives for each. **[2]**
**(b)** Write a corrected version of the function. **[2]**
**(c)** Explain why testing with only the value 30 would not have found the fault. **[1]**

**8.** A team builds an online ticket booking system. They plan to build the ticket search, the seat selection, the payment, a loyalty-points scheme and an email reminder service.

**(a)** Identify the part of this system that is most likely to be the critical path and justify your choice. **[2]**
**(b)** Explain one advantage of building the critical path first. **[2]**

**9.** A developer says: "Our program passed all the tests, so it has no errors." Evaluate this statement. **[3]**

**10.** A company's payroll program gives the right answers but takes 40 seconds to run, and no other programmer can understand the code.

**(a)** State which of the three evaluation criteria the program meets. **[1]**
**(b)** State which of the criteria it does not meet, giving evidence for each. **[4]**

## Answers

**1.** Analysis, design, implementation, testing, evaluation [2 marks: all five in order [2]; four in order [1]]. **[2]**

**2.** The part of the solution that **everything else depends upon** [1]. **[1]**

**3.** Any two [1 each]: **data structures** for the data model; **algorithms**; a **modular structure** (such as a hierarchy chart); the **user interface** design. **[2]**

**4.** **Correctness** [1]; **efficiency** [1]; **maintainability** [1]. **[3]**

**5. (a)** Any two [1 each]: **interview** teachers and office staff; give them **questionnaires**; **observe** how attendance is currently recorded; examine the existing forms.
**(b)** A prototype is a rough working model that users can try [1]; seeing it helps them say what is missing or wrong, so requirements become clearer [1]. **[2]**
**(c)** The data to be stored (such as student, date, present or absent) and how items relate [1]. **[1]**

**6. (a)**

| Test data | Type | Expected outcome |
|---|---|---|
| 72 | Normal | Accepted; shows "Pass" |
| 40 | Boundary | Accepted; shows "Pass" |
| 39 | Boundary | Accepted; shows "Fail" |
| 101 | Boundary (just above range) | Rejected |
| "pass" | Erroneous | Rejected, with no crash |

Each correct type [3 marks for the five types: 5 correct [3]; 3 or 4 correct [2]; 1 or 2 correct [1]] and each correct outcome [3 marks, same scale]. Accept 101 as erroneous; accept 39 described as the value just below the pass boundary. **[6]**
**(b)** They sit either side of the pass boundary, so they show whether the condition uses `>=` rather than `>` [1]. **[1]**

**7. (a)** 16 returns False [1] and 60 returns False [1], although both should be accepted. **[2]**
**(b)** `return age >= 16 and age <= 60` [2: `>=` for the lower limit [1]; `<=` for the upper limit [1]]. **[2]**
**(c)** 30 is in the middle of the range and gives True for both versions, so it does not test the **boundaries** [1]. **[1]**

*Examiner insight:* the code gives `False` for 16 because `16 > 16` is False, and `False` for 60 because `60 < 60` is False.

**8. (a)** Payment together with ticket search and seat selection, or the **booking process as a whole** (search, select seat, pay) [1]; the loyalty scheme and email reminders both **depend on** a completed booking [1]. **[2]**
**(b)** Any one advantage with explanation [2]: the most important part is **tested early** [1], so serious problems are found before other features rely on it [1]; or the later features are added to a **working base** [1], so the team always has something that works [1]. **[2]**

**9.** The statement is **not necessarily true** [1]. Testing can show that errors are present but cannot prove that none exist, because not every possible input can be tried [1]; the tests might not have included boundary or erroneous data or covered every requirement [1]. **[3]**

**10. (a)** **Correctness** (the answers are right) [1]. **[1]**
**(b)** **Efficiency**: it takes 40 seconds to run, which suggests wasted time or resources [2: not met [1]; evidence [1]]. **Maintainability**: no other programmer can understand the code, so it cannot easily be changed (poor names, no comments or structure) [2: not met [1]; evidence [1]]. **[4]**

## Frequently asked questions

**Is a boundary test the same as an erroneous test?**
No. A boundary test is at the edge of the range (and just outside it); erroneous data is invalid for other reasons, such as the wrong type.

**Do I need to know a particular agile method?**
No. The specification only expects awareness of a prototyping or agile approach and its focus on solving the critical path first.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.4 Aspects of software development.
