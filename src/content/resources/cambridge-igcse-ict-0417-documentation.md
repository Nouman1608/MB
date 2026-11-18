---
title: "Cambridge IGCSE ICT (0417): Documentation"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7.5
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "documentation-0417"
description: "Technical and user documentation for Cambridge IGCSE ICT 0417 section 7.5: purpose, audience and every syllabus-named component explained, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 7.5 of Cambridge IGCSE ICT 0417 asks for the "characteristics, uses and purpose of technical and user documentation", and then lists the components of each: thirteen for technical documentation and sixteen for user documentation. Some components appear in both lists. Exam questions ask you to name components, to explain why a particular reader needs a particular document, or to sort items into the right type, so you need to know what each component actually contains.

The [systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/) introduces the two types briefly. This page explains every named component. For quick recall use the [documentation revision notes](/resources/cambridge-igcse-ict-0417-documentation-revision-notes/), and test yourself with the [documentation practice questions](/resources/cambridge-igcse-ict-0417-documentation-practice/).

## Two documents, two audiences

| | Technical documentation | User documentation |
|---|---|---|
| **Who reads it** | Technicians, programmers and analysts who maintain, repair or upgrade the system | The people who use the system day to day |
| **Purpose** | To explain how the system works, so it can be maintained, corrected and improved, even by someone who did not build it | To explain how to use the system, so users can do their tasks and solve common problems without help |
| **Style** | Technical detail, diagrams, program code, data definitions | Plain language, step-by-step instructions, screenshots, little jargon |

The deciding question for any component is: *does the reader need it to change the system, or to use it?*

## Components of technical documentation

The syllabus lists these components. For each, know what it contains and why a technician needs it.

- **Purpose of the system/program**: what the system was built to do. A technician needs this to understand what any change must still achieve.
- **Limitations of the system**: what the system cannot do, such as a maximum number of records or users. This shows where an upgrade might be needed.
- **Program listing**: the full code of the program. Needed to find and correct errors and to add features.
- **Program language**: the programming language the system is written in, so the right skills and tools are used.
- **Program flowcharts/algorithms**: diagrams or step-by-step descriptions of how each program works. They help a technician follow the logic without reading every line of code.
- **System flowcharts**: diagrams showing how data moves through the whole system, including inputs, files, processes and outputs, and which hardware is used.
- **Hardware and software requirements**: the minimum hardware (processor, memory, storage, devices) and software (operating system, other programs) the system needs, so it can be installed and upgraded correctly.
- **File structures**: the design of each file or table: field names, data types, field lengths and key fields.
- **List of variables**: the name and purpose of each variable used in the programs, so code can be understood and changed safely.
- **Input format**: how data is entered, such as the layout of input screens and data capture forms.
- **Output format**: the layout of screen output and reports.
- **Sample runs/test runs**: the results of running the system with test data, showing what correct output looks like. These help a technician check that a change has not broken anything.
- **Validation routines**: the validation checks applied to each field, with their rules, so they can be corrected or changed.

## Components of user documentation

- **Purpose of the system**: what the system does for the user.
- **Limitations of the system**: what it cannot do, so users do not expect it to.
- **Hardware and software requirements**: what the user's computer needs, for example before installing the software at home.
- **How to load/run/install software**: step-by-step instructions to get the system working.
- **How to save a file**: where and how work is saved.
- **How to print data**: how to produce printed output and choose what to print.
- **How to add records**: the steps to enter new data.
- **How to delete/edit records**: the steps to change or remove existing data.
- **Input format**: what data to enter and how, often with screenshots of input screens.
- **Output format**: what the screens and reports look like, so users can read them.
- **Sample runs**: worked examples showing what to enter and what should appear.
- **Error messages**: what each message means.
- **Error handling**: what to do when an error occurs.
- **Troubleshooting guide/helpline**: solutions to common problems and who to contact.
- **Frequently asked questions**: answers to questions users often ask.
- **Glossary of terms**: meanings of technical words used in the guide.

## Components that appear in both

Six items are in both lists: **purpose**, **limitations**, **hardware and software requirements**, **input format**, **output format** and **sample runs**. The difference is depth. A user's hardware requirements might say "Windows or macOS, 8 GB memory, internet connection". The technician's version might add the exact database server version and network settings. A user's input format shows a labelled screenshot; the technician's input format includes field names and validation rules linked to each input box.

## Worked example: sorting components

A games developer releases a quiz app for schools. Which document should each item go in?

| Item | Document | Reason |
|---|---|---|
| "Tap the + button to add a new quiz question" | User | Step-by-step instruction for adding a record |
| A diagram of how scores move from the device to the school's server | Technical | System flowchart showing data flow |
| "Error 4: no internet connection. Check your Wi-Fi and try again." | User | Error message with error handling |
| The table of variables such as *score*, *timeLeft*, *questionNumber* | Technical | List of variables |
| A list of the meanings of words such as "leaderboard" and "sync" | User | Glossary of terms |
| The rule that a quiz title must be 3 to 40 characters | Technical | Validation routine |

## Annotated model answer

*Question: a technician who did not write a stock control program has been asked to add a new feature. Explain why she needs technical documentation, referring to two components.*

"She did not write the program, so she needs to understand how it works before she can change it safely **[purpose of technical documentation, tied to the scenario]**. The **program listing** shows her the code that must be changed **[component and reason]**, and the **file structures** show the fields and data types already stored, so the new feature uses the data correctly **[second component and reason]**. The user guide would only show how to use the existing features, not how they work **[contrast with user documentation]**."

## Common mistakes

- Placing "program listing" or "list of variables" in user documentation.
- Thinking a glossary or FAQ belongs in technical documentation; they are written to help users.
- Saying purpose, limitations or sample runs are in only one type: they are in both.
- Writing that user documentation is "for beginners" without saying what it helps them do.
- Giving a component name with no explanation when the question says **describe** or **explain**.

## Exam technique

- **State** or **give**: name components exactly as the syllabus does.
- **Describe** a component: say what it contains.
- **Explain** why a reader needs it: link the content to the task the reader must do (use the system, or change it).
- **Compare** the two types: contrast audience, purpose and level of detail, with "whereas".

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.5 "Documentation".
