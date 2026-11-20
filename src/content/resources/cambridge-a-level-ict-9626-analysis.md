---
title: "Cambridge A Level Information Technology (ICT): 16.2 Analysis (9626)"
seoTitle: "Cambridge A Level IT 9626: Systems Analysis Study Guide"
resourceType: "study-guides"
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
description: "Study guide to section 16.2 of Cambridge A Level IT 9626: questionnaires, interviews, observation, document analysis and the three specifications, with advantages and disadvantages."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **16.2 Analysis** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content examined in Paper 3 (Advanced Theory).

The syllabus asks you to know:

- the methods of researching a given situation: **questionnaires, interviews, observation and document analysis**
- the content and purpose of the **user requirements specification**, the **system specification** and the **design specification**
- the advantages and disadvantages of the different methods of researching a given situation.

Use this guide with the [whole-topic study guide](/resources/a-level-cambridge-ict-system-life-cycle/), the [section 16.2 revision notes](/resources/cambridge-a-level-ict-9626-analysis-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-analysis-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What analysis is for

Analysis is the first stage of the system life cycle. The analyst finds out how the current system works, what is wrong with it and what the new system must do. Poor analysis is expensive: if the wrong problem is studied, every later stage builds the wrong thing.

Analysis has two parts. First the analyst **researches** the situation. Then the analyst **records** the findings in specifications that the rest of the project follows.

## Methods of researching a situation

No single method is best. Analysts choose, and often combine, methods to suit the people and the situation. The key skill in an exam is to link the method to the scenario.

### Questionnaires

A set of written questions given to many people, on paper or online. Questions may be closed (choose from a list) or open (write an answer).

- **Advantages:** many people can be reached at the same time and cheaply; people can answer in their own time and may be more honest if answers are anonymous; closed answers are quick to analyse.
- **Disadvantages:** people may not return them, so the sample may be small; questions cannot be explained or followed up; badly worded questions give poor data; answers can be rushed or untrue; open answers take a long time to analyse.
- **Best when:** there are many users in different places, such as 1,200 students or 500 customers, and simple opinions are needed.

### Interviews

A face-to-face (or video) conversation between the analyst and one person.

- **Advantages:** questions can be explained and followed up, so detailed information is gathered; body language and tone can be noticed; the analyst can ask about unexpected points.
- **Disadvantages:** time-consuming and expensive for many people; the answers are hard to compare, since each interview differs; the interviewee may give the answers they think the analyst wants; the quality depends on the interviewer.
- **Best when:** a few key people, such as a manager or a specialist, can give detailed requirements.

### Observation

The analyst watches the system and its users in action.

- **Advantages:** shows what really happens, not what people say happens; the analyst sees problems that users have stopped noticing; first-hand and reliable.
- **Disadvantages:** people may behave differently when watched, so the data may not be typical; it takes a long time; it may disturb the work; it may miss tasks that happen rarely or at other times.
- **Best when:** the process is complicated or physical, such as how goods move through a warehouse, and the analyst needs to see it.

### Document analysis

The analyst studies existing documents: forms, reports, manuals, invoices, filing records and old plans.

- **Advantages:** shows exactly what data is collected and in what format; evidence is available without disturbing staff; may reveal rules and volumes, such as how many invoices a month.
- **Disadvantages:** documents may be out of date, incomplete or not what is used in practice; does not explain why something is done; can be slow if there are many; some documents may be confidential.
- **Best when:** the analyst needs to know the data, file layouts, calculations and volumes of the current system.

### Choosing methods

| Situation | Suitable method | Reason |
|---|---|---|
| 800 parents asked what they want from a school app | Questionnaire | Large group, simple answers |
| The head teacher explains reporting needs | Interview | One expert, detailed and complex requirements |
| How the office team deal with absence calls | Observation | Shows the real process |
| What data is recorded on the attendance register | Document analysis | The analyst needs the actual layout |

A strong answer says why the method suits the people and the information needed, and, where asked, gives a drawback.

## The three specifications

The findings are recorded in specifications. Each has a different reader and a different purpose.

| Specification | Content | Purpose |
|---|---|---|
| **User requirements specification** | What the users need the system to do: the tasks, inputs, outputs, volumes, speed and constraints, written in the users' language | Agreed with the users and client, it is the reference for what counts as success and is used for evaluation |
| **System specification** | The hardware and software needed to run the system: for example computers, servers, scanners, operating system, database software and network | Tells the organisation what to buy or install, and what its staff need to run |
| **Design specification** | How the system will be built: data flow diagrams, file and database structures, input forms, output layouts, validation and processing rules | Tells developers precisely what to build and testers what to test against |

### How they differ

- The URS is about **what** the users need. It says nothing about technology.
- The system specification is about the **platform**: which hardware and software.
- The design specification is about **how** the software and data will be built.

A common memory aid: requirements = *what*, system = *with what*, design = *how*.

### Worked example: a veterinary clinic

The clinic uses paper cards and a diary. The owner wants a computer system.

**Research.**
- An *interview* with the practice manager shows that appointments are double-booked and the owner wants reminder messages.
- *Observation* of reception on a Monday shows staff searching the card box while customers wait.
- *Document analysis* of the record card shows 14 fields, including a free-text field with "allergies" noted in many styles.
- A *questionnaire* to 300 pet owners shows that most want text reminders.

**User requirements specification (extract).** The system must allow reception to book, move and cancel appointments; show a day's appointments on one screen; hold each pet's record, including allergies; and send a text reminder one day before each appointment.

**System specification (extract).** Three desktop computers, one server, a label printer, a database package and a text-message service.

**Design specification (extract).** A Pet table with fields such as PetID, Name and Species; an Appointment table linked to Pet; an appointment input form with a drop-down list of vets; a daily list report.

Notice how each specification answers a different question from the same research.

## Common errors

- Writing "a questionnaire is cheap" without linking to the scenario, such as many users in different places.
- Giving advantages only. When asked about methods, give a disadvantage too.
- Describing the system specification as "what the system does". That is the user requirements specification.
- Placing hardware lists in the URS, or user wishes in the system specification.
- Confusing observation (watching) with interview (talking).
- Treating document analysis as reading emails. It means studying the documents used in the system, such as forms and reports.

## Frequently asked questions

**What methods of researching are named in the Cambridge 9626 syllabus?**
Questionnaires, interviews, observation and document analysis.

**What is the user requirements specification?**
It records what the users need the system to do. It is agreed with the users and later used to evaluate the finished system.

**What does the system specification contain?**
It lists the hardware and software needed to run the new system.

**What does the design specification contain?**
It describes how the system will be built, including data flow, data storage, forms and reports.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 16.2: Analysis.
