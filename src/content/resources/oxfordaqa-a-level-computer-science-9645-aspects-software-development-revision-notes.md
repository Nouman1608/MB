---
title: "OxfordAQA A-Level Computer Science (9645): Aspects of software development -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Software Development Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "aspects-of-software-development-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.3.4: analysis, design, implementation, testing, evaluation, the critical path and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.3.4 Aspects of software development** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.3 Program design). For worked test data and fuller explanations, see the [aspects of software development study guide](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development/); then practise with the [aspects of software development practice questions](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-practice/).

## What the specification requires

Be aware of five aspects:

- **Analysis:** define the problem, establish requirements through interaction with users, create a data model. Clarifying may use prototyping or an agile approach.
- **Design:** plan data structures, algorithms, a modular structure and the user interface. Can be iterative.
- **Implementation:** build the models and algorithms as data structures and code. May be iterative, solving the **critical path** first.
- **Testing:** test with selected **normal, boundary and erroneous** data. Have practical experience of designing and applying test data.
- **Evaluation:** judge against **correctness**, **efficiency** and **maintainability**.

## Key terms

| Term | Meaning |
|---|---|
| Requirements | What the system must do and the conditions it must meet |
| Data model | A description of the data to be stored and how it is organised |
| Prototype | A rough working model used to clarify requirements or design |
| Agile approach | Short development cycles with frequent user contact and regular working releases |
| Iterative | Repeated in cycles, each refining the last |
| Critical path | The part of a solution that everything else depends upon |
| Normal data | Typical valid data |
| Boundary data | Data at the edges of the valid range, and just outside |
| Erroneous data | Invalid data that should be rejected |
| Correctness | The system produces the right results and meets its requirements |
| Efficiency | Sensible use of time, memory and other resources |
| Maintainability | The ease with which others can understand and change the code |

## The stages at a glance

| Stage | Key question | Output |
|---|---|---|
| Analysis | What must it do? | Requirements, data model |
| Design | How will it be built? | Data structures, algorithms, modules, interface |
| Implementation | Build it | Code |
| Testing | Does it work? | Test results |
| Evaluation | How good is it? | Judgement against criteria |

The stages are revisited. A failed test can send you back to design or analysis.

## Test data worked reminder

Age must be 16 to 60 inclusive. Recomputed expected results:

| Data | Type | Result |
|---|---|---|
| 30 | Normal | Accepted |
| 16 | Boundary | Accepted |
| 60 | Boundary | Accepted |
| 15 | Boundary (below) | Rejected |
| 61 | Boundary (above) | Rejected |
| −5 | Erroneous | Rejected |
| "abc" | Erroneous | Rejected, no crash |

Password length 8 to 12: boundary tests are 7 (rejected), 8 (accepted), 12 (accepted), 13 (rejected); an empty string is erroneous.

Pass mark 40: tests at 39 (Fail), 40 (Pass) and 41 (Pass) check the boundary.

## Critical path

The part everything else depends on. Build and test it first.

| System | Likely critical path | Dependent features |
|---|---|---|
| Booking system | Storing and retrieving a booking | Reminders, loyalty points |
| Online shop | Basket and payment | Reviews, wish lists |
| Quiz app | Asking a question and checking the answer | High-score table |

## Prototyping and agile

| | Prototyping | Agile |
|---|---|---|
| Idea | Build a rough model to show users | Short cycles, frequent releases |
| Benefit | Users see something and refine requirements | Early feedback; changes welcomed |
| Used in | Analysis and design | Analysis, design and implementation |

## Evaluation criteria

| Criterion | Evidence |
|---|---|
| Correctness | Tests match expected results; requirements met |
| Efficiency | Speed and memory acceptable on realistic data |
| Maintainability | Meaningful names, comments, modular structure, documentation |

## Exam traps

- **Boundary needs both sides.** For 16 to 60, test 15, 16, 60 and 61.
- **Write the expected result** for each test.
- **Erroneous is not just out of range.** A wrong type also counts.
- **Stages overlap.** Do not describe a strict one-way sequence.
- **Maintainability is not usability.** It is about how easily code is understood and changed.
- **Critical path needs a definition** and a link to the scenario.
- **Testing cannot prove there are no errors.**

## Quick self-test

1. List the five aspects.
2. Who should be involved in establishing requirements?
3. What is a data model?
4. Name two things that are planned at the design stage.
5. Define critical path.
6. Why build the critical path first?
7. A field accepts 1 to 100 inclusive. Give four boundary values and say which are accepted.
8. Give one example of erroneous data for that field.
9. Name the three evaluation criteria.
10. What is meant by iterative development?
11. Give one benefit of an agile approach.
12. Can testing prove a program has no errors?

### Answers

1. Analysis, design, implementation, testing, evaluation.
2. The intended users.
3. A description of the data to be stored and how it is organised.
4. Any two of: data structures, algorithms, modular structure, user interface.
5. The part of a solution that everything else depends upon.
6. The most important part is tested early and the rest is added to a working base.
7. 0 (rejected), 1 (accepted), 100 (accepted), 101 (rejected).
8. Any invalid value, such as "ten" or −20.
9. Correctness, efficiency, maintainability.
10. Repeated in cycles, each one refining the earlier version.
11. Early and frequent user feedback (or working pieces delivered regularly).
12. No. It can only show the presence of errors.

## Next steps

- [Aspects of software development study guide](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development/)
- [Aspects of software development practice questions](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-practice/)
- [Program design revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.4 Aspects of software development.
