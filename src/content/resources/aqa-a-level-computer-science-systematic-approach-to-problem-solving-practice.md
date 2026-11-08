---
title: "AQA A-Level Computer Science: Systematic Approach to Problem Solving — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13: Systematic approach to problem solving"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "systematic-approach-to-problem-solving-7517"
description: "Original scenario-based practice questions with answers on analysis, design, test data, acceptance testing and evaluation for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Systematic approach to problem solving study guide](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-study-guide/) | [Systematic approach to problem solving revision notes](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-revision-notes/)

These questions cover section 4.13.1 of the AQA A-Level Computer Science (7517) specification: analysis,
design, implementation, testing and evaluation. All questions use this scenario.

**Scenario.** A community sports centre wants a program for members to book badminton courts. There are
6 courts, bookable in one-hour slots from 07:00 to 21:00 (the last slot starts at 20:00). A member may book up to
3 slots per week. Members currently book by phone, and staff record bookings on paper.

---

## Section A: analysis

**1.** Explain why the requirements of the system must be established by interaction with the intended users.
**[2]**

**2.** Describe two methods the developer could use to find out the centre's requirements. **[4]**

**3.** Write two requirements for the system that are specific enough to be tested. **[2]**

**4.** Explain how a prototype could help clarify the requirements. **[2]**

**5.** Describe what the data model for this system would need to represent. **[3]**

## Section B: design and implementation

**6.** Give three aspects of the solution that should be designed before coding begins, with an example for this
scenario. **[6]**

**7.** Explain two benefits of designing the solution as modules with clear, documented interfaces. **[4]**

**8.** The developer uses an agile approach and solves "the critical path first". Explain what this means for the
booking system and why it is sensible. **[3]**

## Section C: testing

**9.** The program asks the member for the start hour of a booking as a whole number.
Give, with a reason, one item of **normal**, two items of **boundary** and two items of **erroneous** test data for
this input. **[5]**

**10.** Complete a test plan row for checking the rule that a member may book at most 3 slots per week. **[3]**

**11.** Explain what is meant by **acceptance testing** and who should carry it out. **[2]**

## Section D: evaluation

**12.** Describe how the developer should evaluate the finished booking system. **[4]**

**13.** Suggest one realistic extension to the system and explain why it would be useful. **[2]**

---

## Answers

**1.** The users know what the system must do and how they work [1]; if the developer guesses, the finished system
may solve the wrong problem or miss essential features, which is expensive to fix later [1].

**2.** Any two, described [2 each]:
- **Interviews** with the manager and staff to find out how bookings work now and what is wanted.
- **Questionnaires** to members to gather views from many people, e.g. preferred booking times and devices.
- **Observation** of staff taking phone bookings, to see the real process and its problems.
- **Examining documents**, such as the paper booking sheets, to identify the data recorded.

**3.** Any two testable requirements, e.g. "the system must reject a booking for a court and slot that is already
booked" [1]; "a member must not be able to book more than 3 slots in one week" [1]; "the system must display
available courts for a chosen date" [1].

**4.** Users try an early, simplified version of the system [1] and give feedback, which shows whether the developer
has understood their needs so that requirements can be corrected before the full system is built [1].

**5.** Members (e.g. member ID, name, contact details) [1]; courts and time slots [1]; bookings that link a member to
a court, date and slot [1].

**6.** Any three, each with an example [2 each]:
- **Data structures** -- e.g. a Booking record with MemberID, CourtNumber, Date and StartHour, stored in a table.
- **Algorithms** -- e.g. checking whether a slot is free and counting a member's bookings for the week.
- **Modular structure** -- e.g. separate modules for login, searching availability, making and cancelling bookings.
- **User interface** -- e.g. a grid of courts against times, with free slots highlighted.

**7.** Any two, explained [2 each]: each module can be written and **tested separately**, so errors are easier to
find; different programmers can work on different modules at the same time; modules can be **reused**; a module can
be changed without affecting others as long as its interface stays the same.

**8.** The developer builds first the parts everything else depends on -- storing members, courts and bookings and
checking whether a slot is free [1]. Features such as email reminders are added in later iterations [1]. This gives a
working core early that users can test and comment on, and reduces the risk of the project failing [1].

**9.** Normal: e.g. **14** -- a typical hour well inside the range [1].
Boundary: **7** and **20**, the earliest and latest valid start hours (accept also **6** and **21** as invalid
values just outside the range, expected to be rejected) [2].
Erroneous: e.g. **"two"** (wrong data type) and **25** (outside any possible range) or **14.5** (not a whole number)
[2].

**10.** For example:

| Purpose | Test data | Expected result |
|---|---|---|
| Check the 3-per-week limit | A member who already has 3 bookings this week tries to book a 4th | Booking refused with a message explaining the weekly limit; no booking saved |

Purpose [1]; suitable data [1]; precise expected result [1].

**11.** Testing carried out by the **intended users** of the system (e.g. centre staff and some members) [1] to check
that the solution meets its specification and works for them in practice [1].

**12.** Compare the system against **each requirement** from the analysis [1], stating whether it is fully, partly or
not met [1], using evidence from test results and **user feedback** [1], and explain any shortcomings and how they
could be improved [1].

**13.** Any realistic extension with a reason, e.g. email reminders the day before a booking to reduce no-shows [1];
an online payment option so courts are paid for when booked [1].

---

## Where marks are usually lost

- Giving generic answers that never mention the sports centre, courts or slots.
- Choosing boundary data that is not actually at the edge of the valid range.
- Writing expected results such as "it works" instead of describing exactly what should happen.
- Evaluating without referring back to the original requirements.

## Frequently asked questions

**Are these questions in the written paper or the project?**
Both. The AQA 7517 specification says Paper 1 tests the skills of section 4.13, and the non-exam assessment expects
students to follow a systematic approach to problem solving.

**How many items of test data should I give?**
Give exactly what the question asks for, with a reason or expected result for each. For boundary data, giving both
edges of the range is safest.
