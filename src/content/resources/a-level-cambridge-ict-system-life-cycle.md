---
title: "Cambridge A Level Information Technology (ICT): System life cycle (9626)"
seoTitle: "Cambridge A Level IT 9626: System Life Cycle Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
description: "Study guide to the system life cycle for Cambridge A Level IT 9626: analysis, DFDs, testing, changeover, documentation, prototyping and maintenance."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 16, System life cycle** (sections 16.1–16.10) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content. The syllabus states that Paper 3 (Advanced Theory) questions are based on sections 12–21, so this is a theory topic examined there; Paper 4 tasks are set on sections 17–21, though candidates apply knowledge of all subject content.

Use it with the [revision notes](/resources/a-level-cambridge-ict-system-life-cycle-revision-notes/) and the [practice questions](/resources/a-level-cambridge-ict-system-life-cycle-practice/). The full course is on the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), and the [printable 9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome. To find your gaps first, try a [free diagnostic](/diagnostics/).

## What this topic covers

| Section | What you must be able to do | Level |
|---|---|---|
| 16.1 Stages | Define a system; the stages and how they link | A Level only |
| 16.2 Analysis | Research methods; three specifications | A Level only |
| 16.3 Design | DFDs, system flowcharts, storage, forms, reports | A Level only |
| 16.4 Development and testing | Test plans, test data, alpha/beta, white/black box | A Level only |
| 16.5 Implementation | Parallel, direct, phased, pilot | A Level only |
| 16.6 Documentation | Four types, contents, pros and cons | A Level only |
| 16.7 Evaluation | Criteria and three techniques | A Level only |
| 16.8 Development methods | Agile, iterative, incremental, RAD, waterfall | A Level only |
| 16.9 Prototyping | Evolutionary, incremental, throwaway, rapid | A Level only |
| 16.10 Maintenance | Perfective, adaptive, preventive, corrective | A Level only |

One scenario runs through the worked examples: **a leisure centre replacing its paper membership cards and phone bookings with a computerised booking system.**

## 16.1 Systems and the stages of the life cycle

A **system** is a collection of components that work together to form a whole. It may be a **hardware system** (a network of tills and card readers), a **software system** (a booking application), or a **combination of hardware and software** (self-service kiosks running the booking software).

The stages of developing a system are:

analysis → design → development and testing → implementation → documentation → evaluation, followed by maintenance (16.10).

**How the stages relate.** Each stage's output feeds the next: requirements drive the design; the design specification drives development and the test plan. Evaluation compares the working system with the requirements from analysis, and any shortfall starts a new round of analysis, which is why it is a *cycle*. Requirements and design documents are written early, not only at the end.

## 16.2 Analysis

### Researching the current situation

| Method | Advantages | Disadvantages |
|---|---|---|
| **Questionnaires** | Reach many people quickly; anonymous; easy to analyse | No follow-up; low return rates; questions misread |
| **Interviews** | Follow-up questions; detailed answers | Slow, so few people; answers may please the analyst |
| **Observation** | Shows what really happens, including workarounds | People act differently when watched; slow |
| **Document analysis** | Shows exact data, layouts and volumes | May be out of date; shows data, not problems |

**Worked example: choosing methods.** The leisure centre has 3 managers, 12 reception staff and about 4,000 members.

- **Interview** the managers: few people, detailed needs, and follow-up questions on pricing rules.
- **Observe** reception at a busy time: shows how phone bookings and double bookings actually happen.
- **Questionnaire** the members: too many to interview; an online survey gathers views on booking times.
- **Analyse documents**: the paper membership form and booking sheets show every field the new system must store.

Each choice fits the group's size and the information needed.

### Specifications

- **User requirements specification** – what users need the system to do (members book online; double bookings are blocked). Agreed with the client; used again in evaluation.
- **System specification** – the hardware and software needed (kiosks, server, operating system, database software).
- **Design specification** – how it will be built: data structures, forms, reports, validation rules, layouts, fonts and colours.

## 16.3 Design

### Data flow diagrams

A **DFD** shows how data moves through a system. It uses four elements from the syllabus symbol table: **process**, **data store**, **data source or destination** (an external entity that supplies or receives data), and a **duplication** mark used when the same source or destination appears more than once on one diagram. Arrows are data flows, each labelled with the data it carries. Draw each element with the symbol printed at the end of the syllabus subject content.

- **Level 0 (context level)**: the whole system as one process, with every external entity and the data flows to and from it. No data stores.
- **Level 1**: the single process is split into the main processes, with the data stores between them.
- **Level 2**: one level 1 process is split further into its own sub-processes.

Rules: data moves only through a process, never directly between entities and stores. Every process has an input and an output.

**Worked example: level 0 and level 1.** Entities: Member, Instructor.

Level 0 flows: Member → *Booking system*: booking request. *Booking system* → Member: booking confirmation. *Booking system* → Instructor: class register.

Level 1:

| Process | Input flow(s) | Output flow(s) | Data store used |
|---|---|---|---|
| 1 Check membership | Booking request (from Member) | Valid request | Members file (read) |
| 2 Record booking | Valid request | Booking confirmation (to Member) | Bookings file (write); Classes file (read places left) |
| 3 Produce register | Class bookings | Class register (to Instructor) | Bookings file (read) |

Every store is reached through a process, and the level 0 flows still appear.

### System flowcharts

A **system flowchart** shows hardware, files and processes, not program logic. Its syllabus symbols are: input/output, process, single document output, multiple document output, magnetic disk file, magnetic tape file, and display. (For program flowcharts, see [algorithms and flowcharts](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/).)

**Worked example in words:** Input/output (member enters booking at a kiosk) → Process (validate and record booking), which reads and updates the Members and Bookings **magnetic disk files** → Display (confirmation on screen) and Single document output (printed receipt). Overnight, a Process reads the Bookings file and produces a Multiple document output (one register per class).

### Data storage, input forms and output reports

**Data storage**: a **database** of related tables (Members, Classes, Bookings; see [database and file concepts](/resources/a-level-cambridge-ict-database-and-file-concepts/)) plus **files**: input files (the day's bookings) and output files (an exported register).

**Input forms** need a clear title and instructions, fields in the same order as the source document, suitable box sizes, and drop-downs, radio buttons and check boxes to limit choices. Forms suit data that must be collected the same way every time. Each field gets **validation** (range, type, presence, format, lookup), and **checking** such as a confirmation screen (see [data processing and information](/resources/a-level-cambridge-ict-data-processing-and-information/)). **Input screen layouts** plan field positions, labels, buttons and error messages.

**Output reports**: an **output screen layout** (live timetable, full classes highlighted) and a **printed copy layout** (register with headings, page numbers, date, space for ticks).

## 16.4 Development and testing

Testing finds errors before users depend on the system and proves it meets the design. A **test plan** lists, for each test: test number, what is being tested, the test data, the type of test data, the expected result, the actual result, and any action or comment.

**Test data types**: **normal** (valid, within range: accepted), **extreme** (valid, on the boundary: accepted), **abnormal** (invalid: rejected with a message), and **live** data (real data from the old system, run to compare results). (For spreadsheet test plans, see [spreadsheets](/resources/a-level-cambridge-ict-spreadsheets/).)

**Worked example.** Rule: a member books 1 to 6 places on a class, whole numbers only.

| No. | Test | Data | Type | Expected result |
|---|---|---|---|---|
| 1 | Places field | 3 | Normal | Accepted |
| 2 | Places field | 1 | Extreme | Accepted |
| 3 | Places field | 6 | Extreme | Accepted |
| 4 | Places field | 7 | Abnormal | Rejected: "Enter 1 to 6" |
| 5 | Places field | 2.5 | Abnormal | Rejected: whole numbers only |
| 6 | Places field | two | Abnormal | Rejected: numbers only |

**Alpha testing** is done in-house by the developer's team before release; **beta testing** by a limited group of real users in their own environment afterwards. **White box testing** checks the internal code and every path through it; **black box testing** checks inputs against expected outputs without looking at the code.

| Type | Advantage | Disadvantage |
|---|---|---|
| Alpha | Faults found privately | Testers may miss real-user mistakes |
| Beta | Real users and conditions | Faults reach users |
| White box | Tests every path | Needs programming skill; slow |
| Black box | User's view; no code knowledge | Untested paths may hide faults |

## 16.5 Implementation

| Method | How it is done | Advantages | Disadvantages |
|---|---|---|---|
| **Parallel running** | Old and new run together; outputs compared | Old system is a backup | Double the work and cost |
| **Direct changeover** | Old stops; new starts at once | Quick and cheap | No fallback if it fails |
| **Phased** | One part (module) introduced at a time | Problems confined to one part | Slow; parts must work with the old system |
| **Pilot** | Whole system live in one branch or department first | Real trial, limited risk; pilot staff train others | Slow rollout; pilot site bears the risk |

**Worked example.** The leisure centre has one site and one reception team, so there is nothing separate to pilot in; direct changeover risks lost bookings. **Parallel running** for two weeks suits it: paper sheets remain a backup, at the cost of extra staff time.

## 16.6 Documentation

- **Requirements and design documentation**: the specifications, DFDs and screen designs, so client and developers agree what is built.
- **Technical documentation**: for those who maintain the system: program listings, algorithms, data structures, file layouts, DFDs, validation rules, test plans and results, hardware and software requirements.
- **User documentation**: installing and logging in, step-by-step instructions with screenshots, error messages, troubleshooting, FAQs, glossary.
- **Marketing documentation**: to sell the system: features, benefits, minimum requirements, price.

Printed documents work without the system but date quickly; online help is searchable and easy to update but needs a device. Technical documents are too detailed for users; user guides are too shallow for maintenance.

## 16.7 Evaluation

Judge **efficiency** (speed, staff time saved), **ease of use** (learning time, errors made) and **appropriateness for intended use**. Techniques: **checking against the specifications**, **meeting user requirements**, and **feedback from users** after go-live.

## 16.8 Methods of software development

| Method | Stages and process | Advantages | Disadvantages |
|---|---|---|---|
| **Waterfall** | Each stage finished and signed off before the next | Clear plan and documents | Late changes costly; users see little until the end |
| **Iterative** | Repeated design–build–test–review cycles refine the system | Feedback improves each version | Total time and cost hard to fix |
| **Incremental** | System split into parts, each built and delivered in turn | Useful parts arrive early | Parts must fit together |
| **Agile** | Short time-boxed cycles; small working features; customer involved throughout | Responds to change | Needs committed users; less documentation |
| **RAD** | Little planning; quick prototypes in user workshops; reused components; strict time limits | Fast; matches what users want | Needs skilled staff and available users; weak for large systems |

## 16.9 Prototyping

A **prototype** is a working model shown to users to get feedback.

- **Evolutionary**: refined repeatedly until it becomes the final system. Nothing is wasted, but early poor design can stay.
- **Incremental**: separate prototypes for parts of the system, combined at the end. Parts are tested early, but joining them can be hard.
- **Throwaway**: built to clarify requirements, then discarded. Quick and cheap, but effort is thrown away.
- **Rapid**: built very quickly to gather feedback in short cycles. Fast, but users may think the system is nearly finished.

## 16.10 Maintenance

| Type | Why needed | How carried out |
|---|---|---|
| **Corrective** | Faults found after release | Diagnose, fix, retest, release a patch |
| **Adaptive** | The environment changes: new law, tax rate, operating system or hardware | Change the system so it still works in the new conditions |
| **Perfective** | Users want better performance or new features | Improve speed or add features from feedback |
| **Preventive** | To stop future faults | Tidy code, update documentation, fix weaknesses before they fail |

Corrective work is unplanned; perfective work adds value but costs money with no fault to fix; adaptive work keeps the system legal and compatible; preventive work cuts future costs but users see no change.

## Common errors

- Naming a research method without linking it to the scenario.
- Drawing a flow straight from an entity into a data store.
- Calling a boundary value "abnormal": it is **extreme** and accepted.
- Recommending pilot with no separate branch or department to trial it.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 16: System life cycle.
