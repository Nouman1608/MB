---
title: "Cambridge IGCSE ICT (0417): Analysis"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7.1
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "analysis-0417"
description: "Research methods, recording inputs, outputs, processing and problems, requirements and the system specification for Cambridge IGCSE ICT 0417 7.1."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Analysis is the first stage of the systems life cycle in Cambridge IGCSE ICT 0417. The syllabus divides section 7.1 into three parts: **analysis of the current system** using four research methods; **recording and analysing information** about the current system (its inputs, outputs and processing, its problems, and the user and information requirements for the new system); and the **system specification**, where you "identify and justify suitable hardware and software for the new system". Exam questions are set in a scenario, so the skill being tested is choosing and justifying, not listing.

The [systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/) gives an overview of all six stages. This page goes further into analysis. Use the [analysis revision notes](/resources/cambridge-igcse-ict-0417-analysis-revision-notes/) for recall and the [analysis practice questions](/resources/cambridge-igcse-ict-0417-analysis-practice/) to apply it.

## Why analysis comes first

A new system can only solve the right problems if the analyst first finds out exactly how the current system works and where it fails. Mistakes here are expensive: a feature missed in analysis may not be noticed until the system is in use, when changing it costs far more. The analysis stage ends with a clear statement of what the new system must do and what hardware and software it needs.

## Part 1: the four research methods

The syllabus asks for the "characteristics, uses, advantages and disadvantages" of each method. Learn them as a set, because questions often ask you to choose between two for a given organisation.

### Observation

The analyst watches staff using the current system and records what they do, how long tasks take and where delays or errors happen.

- **Use it when** the process is practical and visible, such as a receptionist booking appointments or a warehouse picking orders.
- **Advantages**: the analyst sees what really happens, including shortcuts and workarounds staff might not mention; the information is first-hand and reliable; it costs relatively little.
- **Disadvantages**: people often work differently when they know they are being watched; it is time-consuming; it shows *what* is done but not *why*; problems that occur rarely may not happen while the analyst is there.

### Interviews

The analyst talks face to face (or by video call) with selected users, asking prepared questions and following up on the answers.

- **Use it when** a small number of people hold detailed knowledge, such as managers or the one member of staff who runs the payroll.
- **Advantages**: questions can be adapted and followed up; the interviewee can explain reasons and show examples; the analyst can see from the person's reaction whether a topic needs more questions.
- **Disadvantages**: time-consuming for both people, so only a few can be interviewed; the interviewee is not anonymous and may give the answer they think the manager wants; it can be expensive in staff time; answers are harder to compare than questionnaire answers.

### Questionnaires

A set of written questions, on paper or online, given to many users.

- **Use it when** there are many users, spread across sites or shifts, and the analyst wants a broad picture.
- **Advantages**: many people can answer in a short time; they can answer when convenient; answers can be anonymous, so they may be more honest; closed questions (tick boxes, rating scales) are quick to analyse, and online responses can be analysed automatically.
- **Disadvantages**: response rates are often low; questions cannot be followed up; questions may be misunderstood; people may rush or not answer truthfully; poorly designed questions give useless answers.

### Examination of existing documents

The analyst studies the paper and electronic documents the current system uses and produces: forms, files, invoices, reports, receipts.

- **Use it when** the analyst needs to know the data items that are stored and the outputs produced, which will feed into designing the file structures and report layouts.
- **Advantages**: shows exactly which data is collected and in what format; shows the volume of data, for example how many orders are handled a day; can be done without disturbing staff.
- **Disadvantages**: documents may be out of date or not filled in properly; they show what is recorded but not how people actually use it; reading large numbers of documents takes time.

### Choosing methods

No method is enough on its own. An analyst might examine documents to learn the data items, observe staff to see the process, then interview the manager about the problems. When a question asks you to choose a method, link it to a fact in the scenario, such as the number of staff, whether they work shifts, or whether they are on one site.

## Part 2: record and analyse information about the current system

Once the research is complete, the analyst records what was found under five headings the syllabus names.

| Heading | What it means |
|---|---|
| **Inputs** | The data that enters the current system, and how |
| **Processing** | What is done to the data: calculations, searches, sorting, updating |
| **Outputs** | What the system produces: reports, lists, letters, screen displays |
| **Problems with the current system** | What is slow, error-prone, costly or unreliable |
| **User and information requirements** | What the users need the new system to do, and what information it must produce |

**User requirements** describe what the users need to be able to *do*: for example, "staff must be able to find a customer's record by surname". **Information requirements** describe the information the system must *produce*: for example, "a printed list of overdue accounts every Monday". Keep the two separate when a question asks for one of them.

### Worked example: a vet's surgery

A vet's surgery uses a paper appointment book and paper record cards for each animal. The analyst's findings might be recorded like this:

| Heading | Findings |
|---|---|
| Inputs | Owner's name, address and phone number; animal's name, species and date of birth; requested appointment date and time; treatment notes written by the vet |
| Processing | Finding a free slot in the book; finding the animal's card; adding treatment notes; working out the bill |
| Outputs | Daily appointment list for each vet; handwritten bill; reminder postcards for vaccinations |
| Problems | Double bookings when two receptionists use the book; cards misfiled or illegible; reminder cards often forgotten; finding a card takes several minutes |
| User requirements | Book an appointment in under a minute; search for an animal by owner surname or animal name; two receptionists able to book at the same time |
| Information requirements | Daily appointment list per vet; automatic vaccination reminders; printed bills |

Notice how each problem leads to a requirement: double bookings lead to "two receptionists able to book at the same time" without clashes; forgotten reminders lead to automatic reminders. Examiners reward this link.

## Part 3: the system specification

The system specification sets out the **hardware** and **software** the new system needs. The syllabus wording is "identify and justify", so every item needs a reason taken from the scenario.

### Worked example: specification for the vet's surgery

| Item | Justification |
|---|---|
| Two networked computers at reception | Both receptionists must be able to book at once, using the same shared data |
| Database management software | Owner and animal records must be stored, searched and updated quickly |
| Laser printer | Bills and daily lists are printed in quantity, quickly and clearly |
| Sufficient storage with a back-up device or cloud back-up | Records build up over many years and must not be lost |
| Email or text messaging software | To send vaccination reminders automatically instead of postcards |
| Tablet for each consulting room | Vets can see and add treatment notes without paper cards |

A weak answer says "a computer and a printer". A strong answer names the type of device or software and says *why this organisation* needs it.

## Annotated model answer

*Question: a supermarket chain with 200 checkout staff on different shifts is replacing its stock system. Explain why the analyst might use a questionnaire rather than interviews.*

"There are 200 staff, so interviewing all of them would take far too long, whereas a questionnaire can be given to everyone at once **[reason linked to the number of staff]**. Because staff work different shifts, they can fill in the questionnaire when it suits them, which would be hard to arrange for interviews **[second reason linked to shifts]**. The answers can also be anonymous, so staff may be more honest about problems with the current system **[additional valid point]**."

## Common mistakes

- Describing the research method without its advantage or disadvantage when the question asks for both.
- Giving the advantages of interviews as "you get more information". Say *why*: questions can be followed up.
- Confusing analysis tasks with design tasks. Designing forms and validation happens later, in design.
- Listing hardware with no justification, or justifying it with "so it works".
- Mixing up user requirements (what users must be able to do) with information requirements (what the system must output).

## Exam technique

- **Describe** a method: say what the analyst does, then a characteristic such as who is involved.
- **Explain** why a method is suitable: give a reason tied to a fact in the scenario.
- **Compare** two methods: make points about both, ideally with "whereas".
- **Identify and justify** hardware or software: name the item, then give a reason from the scenario.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.1 "Analysis".
