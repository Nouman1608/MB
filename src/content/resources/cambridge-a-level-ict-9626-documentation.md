---
title: "Cambridge A Level Information Technology (ICT): 16.6 Documentation (9626)"
seoTitle: "Cambridge A Level IT 9626: Documentation Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.06
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "documentation"
description: "Study guide to section 16.6 of Cambridge A Level IT 9626: requirements and design, technical, user and marketing documentation, their contents and their advantages and disadvantages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.6 Documentation** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory).

The syllabus asks you to know:

- the **types of documentation** and why each is needed: requirements and design documentation, technical documentation, and user and marketing documentation
- the **contents** of the different types of documentation
- the **advantages and disadvantages** of the different types of documentation.

Use it with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.6 revision notes](/resources/cambridge-a-level-ict-9626-documentation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-documentation-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Why documentation matters

Documentation is the written (or recorded) description of a system. Different people need different information at different times, so there is not one document but several. The key idea for exams is **who the reader is** and **what they need to do with it**.

Without documentation:

- developers cannot be sure what they were asked to build
- technicians cannot repair or change the system when the original developers have left
- users cannot learn the system, so training and support costs rise
- buyers do not know what the system offers.

Documentation is not only written at the end of a project. Requirements and design documents are written early, and technical and user documents are completed as the system is built and tested.

## Requirements and design documentation

**Reader:** the client, analysts, designers, developers and testers.

**Why it is needed:** to record what was agreed, to give developers a plan to build from, to give testers something to test against, and to give evaluators a standard to compare the finished system with.

**Contents:**

- the user requirements specification: objectives, current problems, required tasks, inputs, outputs and constraints
- the system specification: hardware and software required
- the design specification: data flow diagrams, system flowcharts, data and file structures, input form and output report layouts, validation rules and processing rules
- the project plan, such as a Gantt chart, and the test plan.

| Advantages | Disadvantages |
|---|---|
| Clear agreement between client and developer, which reduces disputes | Takes time and effort to write |
| Developers and testers know exactly what to build and check | Out of date quickly if requirements change and it is not revised |
| Evaluation can compare the system against the original aims | Can be long and technical, so clients may not read all of it |
| Supports maintenance and future developments | |

## Technical documentation

**Reader:** programmers, technicians and support staff who install, maintain, repair or extend the system.

**Why it is needed:** so that the system can be fixed, updated and moved to new hardware even when the people who built it are no longer available.

**Contents:**

- the program code with comments, and the algorithms or flowcharts used
- the data dictionary and file or database structures: fields, types, sizes, keys and relationships
- the input and output formats and the validation rules
- the hardware and software requirements, and installation and configuration instructions
- the test plans, test data and results
- security arrangements, backup and recovery procedures
- known faults and how they can be fixed.

| Advantages | Disadvantages |
|---|---|
| Makes maintenance faster and cheaper because the structure is recorded | Written for specialists, so it is hard for other staff to understand |
| Allows new staff to take over without the original developers | Must be updated with every change or it misleads |
| Helps in finding the cause of faults | Time-consuming and costly to produce |
| Supports upgrading or moving the system | May reveal security details, so access must be controlled |

## User documentation

**Reader:** the people who use the system day to day, who are not technical.

**Why it is needed:** so users can learn the system, use it correctly and solve common problems without calling for help.

**Contents:**

- how to start up and log in, and how to close and save
- step-by-step instructions for each task, often with screenshots
- a tutorial or quick-start guide for new users
- an explanation of menus, buttons and screens
- a list of error messages and what to do about them
- troubleshooting advice and frequently asked questions
- a glossary of terms and the contact details of the help desk.

It may be a printed manual, an online help system, a built-in tutorial or a video.

| Advantages | Disadvantages |
|---|---|
| Users become productive faster, so less training time is needed | Costly to produce well, especially with screenshots and tutorials |
| Fewer calls to the help desk | Printed copies go out of date when the software is updated |
| Users can look up how to do a task at any time | Users may not read it |
| Consistent instructions for all users | Must be written in plain language, which is hard to do |

## Marketing documentation

**Reader:** potential customers and buyers, including managers deciding whether to buy.

**Why it is needed:** to describe what the system does and to persuade people to buy or adopt it.

**Contents:**

- a description of the system's main features and benefits
- screenshots or a demonstration
- the hardware and software requirements to run it
- prices, licensing and support options
- quotations from satisfied customers, and contact details.

Examples are brochures, web pages, product videos and data sheets.

| Advantages | Disadvantages |
|---|---|
| Informs customers about what the system can do | May exaggerate, so customers may be disappointed |
| Helps sell the system and so increases income | Costs money to design and print or host |
| Shows requirements before purchase, so fewer unsuitable purchases | Quickly out of date as features change |

## Choosing the right document

| Question | Document |
|---|---|
| What was the system supposed to do? | Requirements documentation |
| How was it designed? | Design documentation |
| Where is the customer table and what fields does it have? | Technical documentation |
| How do I print a monthly report? | User documentation |
| What does this system offer, and how much is it? | Marketing documentation |

### Worked example: a new school timetable system

- The headteacher and the supplier agree a **requirements** document that says the system must produce a clash-free timetable and show room use.
- The **design** document shows the tables for staff, rooms and classes and the layouts of the timetable grid.
- The IT technician receives **technical** documentation: the database structure, the backup schedule and the steps to restore the system if the server fails.
- The deputy head and the teachers receive **user** documentation: a step-by-step guide to requesting a room change, with screenshots, and an FAQ.
- The supplier uses **marketing** documentation, a brochure and website page, to sell the same product to other schools.

If the technician asks "how do I move the database to a new server?", only the technical documentation can answer. If a teacher asks "how do I swap a lesson?", only the user guide should be needed.

## Common errors

- Saying that user documentation contains program code. It does not.
- Saying that technical documentation is for users. It is for support staff.
- Mixing up marketing documentation (to sell the system) with user documentation (to teach the system).
- Writing "documentation is a record of the system" without saying who it is for.
- Giving a content list that suits only one type, for example screenshots in technical documentation.
- Leaving out disadvantages when asked for both.

## Frequently asked questions

**What types of documentation does Cambridge 9626 include?**
Requirements and design documentation, technical documentation, and user and marketing documentation.

**What is the difference between technical and user documentation?**
Technical documentation is for support staff and describes how the system is built and maintained. User documentation is for users and describes how to use it.

**Why does documentation need updating?**
If the system changes and the document does not, it misleads readers, so every change should be recorded.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.6: Documentation.
