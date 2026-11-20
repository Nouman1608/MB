---
title: "OxfordAQA A-Level Computer Science (9645): Abstraction and decomposition -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Abstraction Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "abstraction-and-decomposition-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.3.2: abstraction, decomposition, choosing details to keep and splitting problems into subroutines."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and practice on this content. They are **not** reproduced past-paper questions, and they do **not** replicate the exam's exact structure, question count or mark tariffs -- examination boards hold copyright in their own papers. Use these alongside the official past papers from your board or school.

These questions practise sub-topic **3.3.2 Abstraction and decomposition** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: the definitions of the two ideas, applying them to scenarios, and using subroutines to achieve decomposition. Code is Python.

Related pages: [abstraction and decomposition study guide](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition/) · [abstraction and decomposition revision notes](/resources/oxfordaqa-a-level-computer-science-9645-abstraction-decomposition-revision-notes/)

## Section A

**1.** State what is meant by abstraction. **[2]**

**2.** State what is meant by decomposition. **[2]**

**3.** State the programming construct that is used to achieve decomposition. **[1]**

**4.** A map of a bus network shows only the order of stops and the names of the interchanges. Give **two** details that have been abstracted away. **[2]**

## Section B

**5.** A school stores data about students for two different systems: a library system and a canteen payment system.

**(a)** Give **two** items of data that the library system needs but the canteen system does not. **[2]**
**(b)** Give **two** items of data that the canteen system needs but the library system does not. **[2]**
**(c)** Explain why the two systems use different abstractions of a student. **[1]**

**6.** A quiz program must ask 10 questions, check each answer, keep a score and show the final result with a message.

**(a)** Decompose the problem into **four** sub-problems. **[4]**
**(b)** For one sub-problem, state the parameters it would receive and the value it would return. **[2]**

**7.** A car park charges 2.00 pounds for up to 60 minutes. After the first hour it adds 1.50 pounds for each further hour or part hour, with a maximum of 12.00 pounds.

```python
import math

def fee_for(minutes):
    if minutes <= 60:
        return 2.0
    extra_hours = math.ceil((minutes - 60) / 60)
    return min(12.0, 2.0 + 1.5 * extra_hours)
```

**(a)** State the values returned by `fee_for(60)`, `fee_for(61)` and `fee_for(300)`. **[3]**
**(b)** Explain how this subroutine is an example of abstraction for a programmer who calls it. **[2]**
**(c)** State **one** advantage of testing `fee_for` on its own. **[1]**

**8.** A programmer is designing a program to plan routes between cities for a delivery company. The programmer represents the road network as a list of cities with the distance between neighbouring cities.

**(a)** Give **two** details of the real road network that are abstracted away. **[2]**
**(b)** Explain why leaving out the colour of the delivery vans is an appropriate abstraction. **[1]**
**(c)** Describe a change to the company's requirements that would make the programmer need to keep more detail. **[2]**

**9.** A library program has these tasks: read a book code, find the book, check whether it is on loan, record the loan, print a receipt.

**(a)** Explain why these tasks are suitable for decomposition into subroutines. **[2]**
**(b)** Explain why a task such as "read the code, find the book and record the loan" would not be a good single subroutine. **[2]**

**10.** A student says: "Abstraction and decomposition are the same thing because both make the problem easier." Explain why the student is wrong. **[3]**

## Answers

**1.** Removing **unnecessary details** from a problem [1] to make it easier to solve (so that only what matters for the purpose remains) [1]. **[2]**

**2.** Breaking a problem into a number of **sub-problems** [1], each of which accomplishes an **identifiable task** and may itself be subdivided [1]. **[2]**

**3.** **Subroutines** [1]. **[1]**

**4.** Any two [1 each]: the real **distances** between stops; the **shape of the roads**; the **positions of buildings**; the **timetable** or journey times; traffic. **[2]**

**5. (a)** Any two [1 each]: books on loan; due dates; fines; library card number.
**(b)** Any two [1 each]: account balance; meal choices; dietary needs or allergies; payments made.
**(c)** Each system needs only the details relevant to **its own purpose**, so unrelated details are left out [1].

**6. (a)** Any four distinct sub-problems, one task each [1 each]. Example: ask a question and get an answer; check whether the answer is correct; update the score; choose the message and display the result. **[4]**
**(b)** Example: `check_answer(given, correct)` receives the given answer and the correct answer [1] and returns a Boolean saying whether they match [1]. (Accept any consistent parameters and return value for the sub-problem chosen.) **[2]**

**7. (a)** `fee_for(60)` is **2.0** [1]. For 61 minutes there is 1 part hour over the first hour: 2.0 + 1.5 = **3.5** [1]. For 300 minutes the time over the first hour is 240 minutes, which is 4 hours: 2.0 + 6.0 = **8.0** [1]. **[3]**
**(b)** The programmer can **use the subroutine through its name and parameter** [1] without knowing how the fee is worked out (the rounding up and the maximum are hidden) [1]. **[2]**
**(c)** Any one [1]: faults are found in that one subroutine; it needs no other code to run; tests can use chosen values such as 60 and 61.

**8. (a)** Any two [1 each]: the **shape and curves** of roads; **traffic lights** and junction layouts; **road works**; scenery or landmarks.
**(b)** The colour does not affect the route or distance [1].
**(c)** Any sensible change with a link to the detail [1 for change, 1 for the detail]. Example: if the company wants the fastest route rather than the shortest, the model must also keep **speed limits or journey times** for each road. **[2]**

**9. (a)** Each task is a **separate, identifiable job** [1] with a clear input and output, so each can be written as a subroutine, tested separately and reused [1]. **[2]**
**(b)** It does **more than one task** [1], so it is harder to test, reuse or change; for example, finding a book would be needed again without recording a loan [1]. **[2]**

**10.** Abstraction removes **unnecessary details** to simplify the problem [1]; decomposition breaks the problem **into sub-problems** [1]. Both help, but they work in different ways: one makes the problem simpler, the other makes it smaller, so they are not the same technique [1]. **[3]**

## Frequently asked questions

**Do I have to know hierarchy charts for this sub-topic?**
Hierarchy charts belong to sub-topic 3.3.1, but they are a natural way to show a decomposition, so practise drawing one for each problem you decompose.

**How many sub-problems should I list?**
Match the number to the mark tariff, and make each sub-problem one distinct task.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.2 Abstraction and decomposition.
