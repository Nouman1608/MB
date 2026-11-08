---
title: "Cambridge A Level Computer Science (9618): Software Development -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-development-life-cycle"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-design"
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-testing-and-maintenance"
description: "AS study guide to the program development life cycle, development models, program design tools, test data, test plans and maintenance for Cambridge 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Writing code is only one stage in producing software that works and keeps working. This topic follows a program from the first discussion with a client through design, coding and testing to years of maintenance afterwards. You need to name the stages, compare the common development models, use the standard design tools and design test plans that expose faults.

## Where this fits in the specification

Topic 12 is AS Level and is mainly assessed on Paper 1, with testing and design ideas also used when you write programs on Paper 2. It builds on algorithm design (Topic 9), where flowcharts and pseudocode come from, and on programming (Topic 11).

## The program development life cycle

The life cycle is a series of stages, and Cambridge names them as **analysis, design, coding, testing and maintenance**.

- **Analysis**: find out exactly what the program must do. This includes defining the problem, identifying the users, studying the existing system, collecting information by interview, questionnaire, observation or document study, and producing a **requirement specification**. A good specification is agreed with the client so that everyone knows what "finished" means.
- **Design**: plan the solution. Produce structure charts, flowcharts, pseudocode and screen layouts, decide the data structures and write the test plan.
- **Coding**: write the program in a chosen language following the design, with **iterative testing** of each module as it is written.
- **Testing**: run the program with test data to find errors, and check it against the requirement specification.
- **Maintenance**: change the program after delivery to correct faults or to keep it useful.

### Development models

A **waterfall** model completes each stage in order, with documentation at the end of each stage before the next begins. It is easy to manage and well documented, so it suits projects whose requirements are clear and stable, but it handles change badly because the client sees nothing working until late.

An **iterative** model builds a first version, tests it, gets feedback and repeats, improving the program in cycles. It copes with changing requirements and gives the client early sight of progress, but it can be harder to plan the cost and end date.

**Rapid application development (RAD)** builds prototypes quickly and refines them with heavy user involvement. A **prototype** is an early working model used to gather feedback. RAD can produce results quickly and match user needs, but the quality and documentation may suffer if the pace is too high. When asked to choose, tie your choice to the scenario: fixed requirements and a safety-critical product point to waterfall, a vague brief or a client who wants to see progress points to iterative or RAD.

## Program design

Design turns the specification into a description that a programmer can follow.

- A **structure chart** shows the modular hierarchy: the main program at the top and sub-modules beneath it, with the data passed between them.
- A **flowchart** shows the sequence and decisions of an algorithm using standard symbols.
- **Pseudocode** describes the algorithm in structured, language-independent text.
- **State-transition diagrams** and **state tables** show the states a system can be in and the inputs that change one state into another, as in a ticket machine that waits, accepts money, issues a ticket and returns to waiting.

**Modular design** is the aim. Each module should do one job, have a clear interface and be testable alone. Good design also includes choosing **identifier names** and a table of identifiers that lists each variable's name, type and purpose.

## Testing

Testing aims to find faults, not to prove there are none. A fault can be a **syntax error** (breaks the rules of the language and is found when the program is translated), a **logic error** (the program runs but gives wrong results), or a **run-time error** (the program fails while running, for example by dividing by zero).

### Test data

Select data that covers each type of case. For an input that accepts ages 13 to 19 inclusive:

| Type | Purpose | Examples |
|---|---|---|
| Normal | Valid data that should be accepted | 14, 18 |
| Boundary (extreme) | Values at the edge of what is allowed | 13 and 19 |
| Abnormal (erroneous) | Invalid data that should be rejected | 12, 20, "ten", -5 |

For a boundary check, also test the first value just outside each limit, which is why 12 and 20 are in the abnormal row.

### Test strategies and tools

- **Dry run** (walk-through): follow the algorithm on paper with a trace table, with no computer.
- **White-box testing** uses knowledge of the code so that every path and branch is exercised; **black-box testing** looks only at inputs and outputs against the specification.
- **Stub testing**: a simple dummy module returns a fixed answer so the modules that call it can be tested before the real module exists.
- **Integration testing** checks that modules work together once combined; **alpha testing** is done in-house by developers, and **beta testing** is done by selected real users; **acceptance testing** is done by the client to confirm the program meets the agreed requirements.
- A **test plan** lists for each test: the purpose, the test data, the expected result and the actual result.

## Maintenance

After release a program is changed for three reasons.

- **Corrective**: fix errors found in use.
- **Adaptive**: change the program to suit new conditions, such as a new operating system or a change in tax law.
- **Perfective**: improve performance or add features requested by users.

Maintenance is far easier if the program has good design documents, meaningful names, comments and a modular structure. Poor documentation is one of the main reasons a program becomes costly to maintain.

## Worked example 1: a test plan

A program accepts a score from 0 to 50 inclusive and prints "Pass" for 25 or more, otherwise "Fail". Design test data and expected results.

| Test | Data | Type | Expected result |
|---|---|---|---|
| 1 | 37 | Normal | Pass |
| 2 | 10 | Normal | Fail |
| 3 | 0 | Boundary | Fail |
| 4 | 50 | Boundary | Pass |
| 5 | 25 | Boundary (pass mark) | Pass |
| 6 | 24 | Boundary (just below) | Fail |
| 7 | 51 | Abnormal | Error message, rejected |
| 8 | -1 | Abnormal | Error message, rejected |
| 9 | "abc" | Abnormal | Error message, rejected |

Two sets of boundaries are tested here: the limits of valid input (0 and 50 with 51 and -1 just outside) and the pass mark (25 with 24 just below). A common weakness is to test only the first set. Nine tests cover each partition of the problem; adding a tenth such as 38 would add nothing new.

## Worked example 2: choosing a model

A hospital needs software to calculate drug doses. The rules are fixed by national guidance, and errors could harm patients. A small design studio needs a website for a new gallery whose owner is unsure what she wants. Which model fits each?

For the hospital, a **waterfall** approach with detailed specification, documented design and thorough testing at each stage suits fixed requirements and safety concerns. For the gallery, an **iterative** or **RAD** approach, where the owner sees prototype pages early and gives feedback, suits unclear requirements and avoids building something unwanted. Each recommendation gives a reason connected to the scenario, which is what earns the mark.

## Common mistakes

- Listing the stages without saying what happens in them.
- Describing validation data as "test data". Test data is chosen to test the program; validation is a check inside the program.
- Giving only normal data in a test plan, or giving test data without expected results.
- Confusing a syntax error, which stops translation, with a logic error, which does not.
- Saying that testing proves a program has no errors.
- Naming adaptive maintenance as "fixing bugs" instead of corrective.

## Exam technique

**Describe** the stages means a role for each. **Compare** the models needs a similarity or difference, with a strength and a weakness of each. In test-plan questions, include data, type, purpose and expected output, and set out your answer in a table. For maintenance, name the type and give a trigger from the scenario. Use "client" and "requirement specification" accurately and avoid casual words like "the thing".

## Check your understanding

1. Name the five stages of the program development life cycle. *Analysis, design, coding, testing, maintenance.*
2. State two methods of collecting information in analysis. *Interviews, questionnaires, observation, or study of documents.*
3. Give one advantage and one disadvantage of the waterfall model. *Advantage: well documented and easy to manage; disadvantage: hard to change requirements and the client sees results late.*
4. A field accepts a whole number from 1 to 12 for a month. Give one example of boundary data and one abnormal value. *Boundary: 1 or 12 (also 0 and 13 just outside); abnormal: -3 or "June".*
5. State the difference between alpha and beta testing. *Alpha is carried out in-house by the developers; beta is carried out by a selected group of real users before general release.*
6. What is a stub used for? *A simple stand-in for a module that is not written yet, so the calling module can be tested.*
7. A new tax rate means a payroll program must be changed. Which type of maintenance is this? *Adaptive.*
8. Explain why a dry run is useful before coding is finished. *It finds logic errors in the algorithm using a trace table without needing a working program.*

## Frequently asked questions

**What are the stages of the program development life cycle in Cambridge 9618?**
Cambridge names the stages as analysis, design, coding, testing and maintenance.

**What is the difference between boundary and abnormal test data?**
Boundary data is at the edge of the allowed range, such as 13 and 19 for ages 13 to 19. Abnormal data is invalid and should be rejected, including the first values just outside each limit and data of the wrong type.

**What is stub testing?**
In stub testing, a simple dummy module returns a fixed answer so that the modules that call it can be tested before the real module exists. It is not the same as integration testing.

**What are the three types of software maintenance?**
Corrective maintenance fixes errors found in use, adaptive maintenance changes a program to suit new conditions such as a new tax law, and perfective maintenance improves performance or adds features.
