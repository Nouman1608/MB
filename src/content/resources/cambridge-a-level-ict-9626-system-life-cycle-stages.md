---
title: "Cambridge A Level Information Technology (ICT): 16.1 The stages in the system life cycle (9626)"
seoTitle: "Cambridge A Level IT 9626: System Life Cycle Stages Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.01
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "the-stages-in-the-system-life-cycle"
description: "Study guide to section 16.1 of Cambridge A Level IT 9626: what a system is, the stages of developing one and how each stage feeds the next."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.1 The stages in the system life cycle** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 3 (Advanced Theory) is based on sections 12 to 21, and calculators are not allowed.

The syllabus asks you to know:

- the definition of a system: a collection of components that form a whole, which may be a **hardware system**, a **software system** or a **combination of hardware and software**
- the different stages of developing a system
- the relationship between the different stages of the system life cycle.

Read it with the wider [system life cycle study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [revision notes for the whole topic](/resources/a-level-cambridge-ict-system-life-cycle-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-system-life-cycle-stages-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What is a system?

A **system** is a collection of components that work together to form a whole. Each component does a job, and the system does something that no single component could do alone.

The syllabus names three kinds.

| Kind | What it is | Example |
|---|---|---|
| **Hardware system** | Physical components working together | A set of sensors, a control box and a siren that make up a burglar alarm |
| **Software system** | Programs and data working together, running on existing hardware | A payroll package made of a database, a calculation module and a report generator |
| **Combination of hardware and software** | Physical parts and the programs that control them | A supermarket self-checkout: scanner, scales, touch screen, card reader and the program that links them |

Most systems that an organisation builds are a combination. A school library system needs barcode scanners and computers (hardware) as well as the lending program and the member database (software). It also involves people and procedures, such as who scans a book and what happens when a book is overdue.

## Why develop systems in stages?

Building a system in one rush is risky. Nobody has checked what is needed, so the finished system may solve the wrong problem. Errors found late cost much more to fix than errors found early. The stages split the work into manageable steps, each with its own purpose and its own output. Managers can check each output before the next stage begins.

## The stages

The stages in the syllabus are analysis, design, development and testing, implementation, documentation and evaluation. Maintenance follows once the system is in use. Each has its own section later in this topic.

| Stage | Main purpose | Main outputs |
|---|---|---|
| **Analysis** | Find out what is wrong with the current system and what the new one must do | Research findings, user requirements specification, system specification |
| **Design** | Plan how the new system will work | Data flow diagrams, system flowcharts, data storage design, input forms, output reports, design specification |
| **Development and testing** | Build the system and check that it works | Working system, test plan, test results |
| **Implementation** | Put the system into use | Live system; users and data transferred from the old system |
| **Documentation** | Record how the system works and how to use it | Requirements and design documents, technical documentation, user documentation |
| **Evaluation** | Judge whether the system does what it was meant to | Evaluation report with recommendations |
| **Maintenance** | Keep the system working and up to date | Corrections, updates, improvements |

### Analysis

Analysts study the existing situation by questionnaires, interviews, observation and document analysis. They agree what the users need and record it in specifications. This stage answers the question "what must the system do?"

### Design

Designers decide how the requirements will be met. They plan how data moves through the system, how it is stored, what the input forms look like and what the output reports contain. This stage answers "how will the system do it?"

### Development and testing

Programmers and technicians build the parts of the system to the design and test them against a test plan. Faults found are corrected and the part is tested again.

### Implementation

The finished system replaces the old one. The organisation chooses a method, such as parallel running, direct changeover, phased implementation or pilot implementation. Users are trained and data is moved over.

### Documentation

Documents are produced for different readers. Some describe requirements and design, some are for technical staff and some are for users. Documentation is often written throughout the project, not only at this point in the list.

### Evaluation

The new system is judged against the specifications, the user requirements and the feedback of users, looking at efficiency, ease of use and whether it is right for its purpose.

## How the stages relate

The stages are linked in three ways.

1. **Each stage's output is the next stage's input.** The specifications from analysis tell designers what to design. The design tells developers what to build. The tested system is what gets implemented. The evaluation compares the live system with the specifications written in analysis.
2. **The stages can send work backwards.** A test that fails may mean a fault in the code, so the work goes back within development. If the fault is in the design, such as a missing field on an input form, the work goes back to design, and the design documents are updated. If users say that the system does not do what they asked for, the cause could even be in analysis.
3. **Evaluation and maintenance feed a new cycle.** Evaluation shows weaknesses and new needs. Maintenance deals with some of them. A large change begins analysis again. This repeated returning is why it is called a life cycle, not a one-way line.

### Worked example: a school library system

A school replaces card-index lending with a computer system.

- **Analysis.** Analysts interview the librarian, give a questionnaire to staff and observe how books are issued at break time. They find that finding overdue books takes hours. They write that the new system must show all overdue books on one screen.
- **Design.** A data flow diagram shows the librarian and students as external entities. A design for the member and book tables, a loan form and an overdue report is produced.
- **Development and testing.** The tables, form and report are built. A test with a return date earlier than the loan date should be rejected. It is accepted, so the validation is corrected and retested.
- **Implementation.** The library runs both systems for a month (parallel running) and then switches fully.
- **Documentation.** The librarian gets a user guide. The IT technician gets the table layouts.
- **Evaluation.** After a term, the librarian reports that issuing is faster but the screen is crowded. The overdue report meets the requirement.
- **Maintenance and the next cycle.** A button layout is changed (perfective). When the school adds e-books, a new round of analysis starts.

Notice that the testing problem went back to development, and the crowded screen goes back to design for the next version.

## Common errors

- Defining a system as "a computer". A system is a collection of components, and may include no software at all.
- Treating documentation as something done only at the end. It is needed from analysis onwards.
- Saying that the stages happen once in a straight line. The relationship includes returning to earlier stages.
- Confusing the purpose of analysis (what is needed) with design (how it will be done).
- Putting maintenance before implementation. It starts once the system is in use.

## Frequently asked questions

**What are the stages of the system life cycle in Cambridge 9626?**
The syllabus stages are analysis, design, development and testing, implementation, documentation and evaluation, with maintenance once the system is running.

**What is the difference between a hardware system and a software system?**
A hardware system is made of physical components, such as sensors and a control box. A software system is made of programs and data. Many real systems combine both.

**Why is it called a life cycle?**
Evaluation and maintenance show weaknesses and new needs, and that can start analysis again, so the stages repeat rather than finishing once.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.1: The stages in the system life cycle.
