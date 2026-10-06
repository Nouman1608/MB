---
title: "Cambridge A Level Information Technology (ICT): System life cycle (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: System Life Cycle Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on the system life cycle for Cambridge A Level IT 9626, with comparison tables, a quick self-test and common mark losses."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, read the [system life cycle study guide](/resources/a-level-cambridge-ict-system-life-cycle/) first. These notes cover **topic 16, System life cycle** (sections 16.1–16.10) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content, and the syllabus states that Paper 3 (Advanced Theory) questions are based on sections 12–21.

Test yourself with the [practice questions](/resources/a-level-cambridge-ict-system-life-cycle-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic, the [printable 9626 checklist](/checklists/cambridge/a-level/ict/) lists every outcome, and the [free diagnostics](/diagnostics/) show where to start.

## 16.1 Systems and stages

- **System**: a collection of components forming a whole: a hardware system, a software system, or a combination of both.
- **Stages**: analysis → design → development and testing → implementation → documentation → evaluation, then maintenance.
- **Relationship**: each stage's output is the next stage's input. Evaluation checks the system against the requirements from analysis; problems found feed a new analysis, closing the cycle.

## 16.2 Analysis

| Method | Best when | Main drawback |
|---|---|---|
| Questionnaire | Many people, simple facts or opinions | No follow-up; poor return rate |
| Interview | Few key people, detailed needs | Time-consuming; possibly biased answers |
| Observation | You need to see the real process | People change behaviour when watched |
| Document analysis | You need fields, layouts, data volumes | Shows data, not opinions or problems |

**Specifications**

| Specification | Answers the question | Typical contents |
|---|---|---|
| User requirements | What must the system do for users? | Tasks, outputs needed, response times, who uses it |
| System | What hardware and software are needed? | Processor, storage, peripherals, operating system, application software |
| Design | How will it be built? | Data structures, forms, reports, validation, layouts, colours, fonts |

## 16.3 Design

**DFD elements**: process, data store, data source or destination (external entity), duplication of a source or destination, and labelled data flows. Use the symbols printed at the end of the syllabus subject content.

| DFD level | Shows |
|---|---|
| Level 0 (context) | The whole system as one process; external entities; flows in and out; no stores |
| Level 1 | Main processes, numbered, with data stores |
| Level 2 | One level 1 process broken into sub-processes |

**DFD rules in steps**

1. Name every process with a verb phrase ("Calculate fee").
2. Label every flow with the data it carries ("Payment details").
3. Route every flow to or from a store through a process.
4. Never join two entities, or an entity and a store, directly.
5. Keep the level 0 inputs and outputs when you expand to level 1.

**Mini reminder (spot the error).** A level 1 DFD shows the flow "Customer details" going from the entity Customer straight into the data store Customers. This breaks rule 3: add a process such as "Register customer" between them, with a labelled flow in and out.

**System flowchart symbols**: input/output, process, single document output, multiple document output, magnetic disk file, magnetic tape file, display. A system flowchart shows *where data goes and on what hardware*; a program flowchart shows *program logic*.

**Data storage**: databases (related tables) and files (input and output).

**Input forms**: title and instructions; logical field order; suitable box sizes; drop-downs, radio buttons and check boxes; validation on each field; checking before submit; planned input screen layout.

**Output reports**: output screen layouts and printed copy layouts, each designed for its reader.

**Mini reminder (vet surgery).** A form field "Species" is best a drop-down list: it limits entries to valid values, acting as a lookup check, and speeds entry.

## 16.4 Development and testing

**Test plan columns**: test number, item tested, test data, type of test data, expected result, actual result, action or comment.

| Test data | Meaning | Expected |
|---|---|---|
| Normal | Valid, inside the range | Accepted |
| Extreme | Valid, on the boundary | Accepted |
| Abnormal | Invalid (wrong type or outside range) | Rejected with a message |
| Live | Real data from the old system | Results match the old system |

| Must-know distinction | First | Second |
|---|---|---|
| Alpha vs beta | Alpha: in-house, developer's team, before release | Beta: chosen real users, their own environment, after alpha |
| White box vs black box | White: tests internal code and every path | Black: tests inputs and outputs only, code not seen |

**Method in steps: writing a test plan for a rule**

1. Read the rule: type (whole number, date, text) and limits.
2. Pick one normal value well inside the range.
3. Pick both boundary values as extreme data.
4. Pick abnormal values just outside each limit and one of the wrong type.
5. State the expected result for each, including the error message for rejections.

## 16.5 Implementation

| Method | Choose it when | Avoid it when |
|---|---|---|
| Parallel running | Failure would be serious; outputs must be checked | Staff cannot cope with double work |
| Direct changeover | Old system is unusable, or the system is small and low risk | A failure would stop the business |
| Phased | The system splits into separate modules | Modules depend heavily on each other |
| Pilot | There are several similar branches or departments | There is only one site |

**Method in steps: recommending an implementation method**

1. Read the scenario for clues: number of sites, whether modules are separate, how serious a failure would be, staff time available.
2. Rule out unsuitable methods with a reason (one site rules out pilot).
3. Recommend one method and describe how it would be carried out in *this* scenario.
4. Give one benefit and one drawback of your choice for this organisation.
5. Conclude: why its benefits outweigh its drawbacks here.

## 16.6 Documentation

| Type | Reader | Contents |
|---|---|---|
| Requirements and design | Client, analysts, developers | Specifications, DFDs, screen designs |
| Technical | Programmers, technicians | Code listings, algorithms, data structures, file layouts, validation rules, test results, hardware and software requirements |
| User | People using the system | Installation, how-to steps with screenshots, error messages, troubleshooting, FAQs, glossary |
| Marketing | Possible buyers | Features, benefits, minimum requirements, price |

Printed: usable without a device, but dates quickly. Online: searchable and easy to update, but needs a working device.

## 16.7 Evaluation

- **Criteria**: efficiency, ease of use, appropriateness for intended use.
- **Techniques**: check against the specifications; check user requirements are met; collect feedback from users.

## 16.8 Development methods

| Method | Key idea | Plus | Minus |
|---|---|---|---|
| Waterfall | One stage at a time, signed off | Clear plan and documents | Changes late are expensive |
| Iterative | Repeat cycles to refine the system | Feedback built in | Open-ended time and cost |
| Incremental | Build and deliver in parts | Early working parts | Integration problems |
| Agile | Short cycles, close customer contact | Handles changing needs | Needs constant user time |
| RAD | Fast prototypes, workshops, time limits | Quick, user-focused | Poor for large, complex systems |

## 16.9 Prototyping

| Type | What happens to the prototype |
|---|---|
| Evolutionary | Refined until it becomes the final system |
| Incremental | Separate prototypes for parts, combined at the end |
| Throwaway | Discarded once requirements are clear |
| Rapid | Built very quickly for fast feedback cycles |

## 16.10 Maintenance

| Type | Trigger | Action |
|---|---|---|
| Corrective | A fault is found | Fix, retest, release a patch |
| Adaptive | Environment changes (law, operating system, hardware) | Modify to keep working |
| Perfective | Users want improvements | Improve speed or add features |
| Preventive | Risk of future faults | Tidy code, update documents, remove weaknesses |

## Must-know distinctions

- **User requirements specification** (what users need) vs **design specification** (how it will be built).
- **DFD** (movement of data) vs **system flowchart** (hardware, files and processes).
- **Phased** (part of the system everywhere) vs **pilot** (whole system in one place).
- **Incremental development** (deliver the system in parts) vs **incremental prototyping** (prototype the parts, then combine).
- **Adaptive** (the world changed) vs **perfective** (users want it better).

## Quick self-test

1. Give one example of a combined hardware and software system.
2. Which specification lists the operating system needed?
3. Which DFD level shows no data stores?
4. A field accepts 50 to 500 grams. Classify 500, 501 and 250.
5. Who carries out beta testing?
6. Which testing method needs knowledge of the program code?
7. A system's 4 modules are introduced one every 2 weeks, while the old system handles the rest. How long does the changeover take, and which method is it?
8. Name the implementation method with no fallback.
9. Which document would a technician use to find the file layouts?
10. A new tax rate means the payroll system must change. Which type of maintenance?
11. Which prototype becomes the final system?
12. Name the three evaluation techniques.

### Answers

1. A self-service kiosk: touch screen and card reader running booking software.
2. The system specification.
3. Level 0 (context level).
4. 500 extreme (accepted); 501 abnormal (rejected); 250 normal (accepted).
5. A limited group of real users, in their own environment, after alpha testing.
6. White box testing.
7. 4 × 2 = **8 weeks**; phased implementation.
8. Direct changeover.
9. Technical documentation.
10. Adaptive.
11. Evolutionary.
12. Checking against specifications, meeting user requirements, feedback from users.

## Where marks are usually lost

- Listing research methods with no reason linked to the scenario's people.
- Describing the system specification as "what the system does": that is the user requirements.
- Leaving data flows unlabelled, or joining an entity directly to a data store.
- Putting data stores on a level 0 diagram.
- Calling boundary values abnormal; they are extreme and should be accepted.
- Giving "cheap" for direct changeover without comparing it with another method.
- Mixing up phased and pilot implementation.
- Saying user documentation contains program code.
- Naming a maintenance type without saying why it is needed in the scenario.
- Answering "evaluate" questions with only advantages; give both sides and a conclusion.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 16: System life cycle.
