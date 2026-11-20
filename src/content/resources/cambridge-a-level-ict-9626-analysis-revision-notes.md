---
title: "Cambridge A Level Information Technology (ICT): 16.2 Analysis (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: Systems Analysis Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "System life cycle"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 16.02
syllabusTopics:
  - qualification: "a-level"
    topic: "system-life-cycle"
  - qualification: "a-level"
    topic: "system-life-cycle"
    subtopic: "analysis"
description: "Condensed revision notes on section 16.2 of Cambridge A Level IT 9626: four research methods compared, the three specifications and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

For full explanations and a worked example, read the [section 16.2 study guide](/resources/cambridge-a-level-ict-9626-analysis/) first. These notes condense **section 16.2 Analysis** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content, examined in Paper 3 (Advanced Theory).

Test yourself with the [practice questions](/resources/cambridge-a-level-ict-9626-analysis-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic and the [free diagnostics](/diagnostics/) show where to start.

## What analysis does

- First stage of development.
- **Research** the current situation, then **record** the findings as specifications.
- Question answered: *what is wrong, and what must the new system do?*

## Research methods at a glance

| Method | What it is | Advantages | Disadvantages |
|---|---|---|---|
| **Questionnaire** | Written questions to many people | Reaches many cheaply; anonymous; closed answers easy to analyse | Poor return rate; cannot follow up; wording can mislead |
| **Interview** | Conversation with one person | Detailed; follow-up questions; sees reactions | Slow, costly, hard to compare; interviewee may say what is expected |
| **Observation** | Watching the system in use | Shows real behaviour; reveals unnoticed problems | People act differently when watched; slow; may miss rare events |
| **Document analysis** | Studying forms, reports, manuals | Shows exact data, layouts and volumes; does not disturb staff | May be out of date; does not say why; can be slow |

### Choosing a method

- **Many users, simple opinions:** questionnaire.
- **Few experts, detailed needs:** interview.
- **Complex or physical process:** observation.
- **Need the data and formats in use:** document analysis.
- Most projects combine methods.

## The three specifications

| Specification | Says | Reader | Purpose |
|---|---|---|---|
| **User requirements (URS)** | *What* the users need: tasks, inputs, outputs, speed, volumes | Users, client, analysts | Agreed target; used later in evaluation |
| **System specification** | *With what*: hardware and software to run the system | Managers, purchasers, IT staff | Tells the organisation what to buy and install |
| **Design specification** | *How*: DFDs, data structures, forms, reports, validation | Developers, testers | Blueprint for building and testing |

### Typical contents

- **URS:** objectives, problems with the current system, required tasks, inputs and outputs, data volumes, performance, constraints (budget, time, law).
- **System specification:** computers, servers, peripherals, operating system, database and other software, network needs.
- **Design specification:** data flow diagrams, system flowcharts, file and database structures, screen and report layouts, validation rules.

## Worked example in brief

A dental practice wants online booking.

- Interview the dentist (detailed needs: types of appointment, length of each).
- Observe reception (how the phone is answered while patients wait).
- Analyse the appointment diary (fields and layout used now).
- Questionnaire to 500 patients (do they want online booking and text reminders?).

URS: "Patients must be able to book an appointment online." System specification: "One web server and a database package." Design specification: "A Booking table with fields PatientID, Date, Time and DentistID."

## Must-know distinctions

- **Interview** (talking, one person) vs **questionnaire** (written, many people).
- **Observation** (watching the process) vs **document analysis** (studying the paperwork).
- **URS** (what is needed) vs **system specification** (what hardware and software) vs **design specification** (how to build).
- **Advantage of a method** vs **reason it suits this scenario**: exam answers need both.

## Quick self-test

1. Name the four research methods in the syllabus.
2. Give one disadvantage of questionnaires.
3. Which method lets the analyst follow up an unexpected answer?
4. Why might staff behave differently during observation?
5. Which method would show the exact fields on an existing form?
6. Which specification lists the server needed?
7. Which specification is used to judge success in evaluation?
8. A school wants views from 900 students. Which method is most suitable, and why?
9. Which specification contains input form layouts?
10. Give one disadvantage of document analysis.

### Answers

1. Questionnaires, interviews, observation and document analysis.
2. Any one: low return rate, cannot ask follow-up questions, badly worded questions give poor data, answers may be untrue.
3. Interview.
4. They know they are being watched and may follow the rules more carefully or work faster or slower than normal.
5. Document analysis.
6. The system specification.
7. The user requirements specification.
8. A questionnaire, because the group is large and the answers can be collected cheaply and compared.
9. The design specification.
10. The documents may be out of date, or may not show what people actually do or why.

## Exam technique

- Name the method, then link it to the people or situation in the scenario.
- Give a disadvantage when the question asks for advantages **and** disadvantages.
- For specifications, say what the document contains and who uses it.
- With "evaluate" or "discuss", end with a recommendation, such as a combination of methods.
- Use the scenario's words: the manager, the call handlers, the 900 students.

## Where marks are usually lost

- Listing methods without linking them to the scenario's people.
- Giving the same advantage for every method, such as "it is quick".
- Describing the system specification as "what the system does".
- Mixing hardware lists into the URS.
- Answering "advantages and disadvantages" with only one side.
- Describing observation as asking people questions.

## Frequently asked questions

**Why is an interview better than a questionnaire for a manager?**
An interview lets the analyst ask detailed follow-up questions and explore complex requirements with one person, while a questionnaire cannot be adjusted once it has been sent out.

**Why are there three specifications?**
Each has a different reader and purpose. The URS records the needs, the system specification lists the platform and the design specification tells developers how to build.

**Can an analyst use more than one research method?**
Yes. Analysts often combine methods so that the weakness of one is covered by another.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.2: Analysis.
