---
title: "AQA A-Level Computer Science (7517): Aspects of Software Development -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Systematic approach to problem solving"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 13.1
syllabusTopics:
  - qualification: "a-level"
    topic: "systematic-approach-to-problem-solving-7517"
    subtopic: "aspects-of-software-development-7517"
description: "Condensed AQA 7517 section 4.13.1 recall: analysis, design, implementation, testing and evaluation, prototyping and agile, and normal, boundary and erroneous test data."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
reviewNeeded: true
reviewNote: "2026-11-20: the specification does not itemise the evaluation criteria (4.13.1.5); the criteria listed (meets requirements, usability, robustness, efficiency, maintainability) are the commonly taught set. Check against current exam mark schemes."
---

Condensed recall for **4.13.1 Aspects of software development**, AQA A-Level Computer Science (7517): **analysis, design, implementation, testing and evaluation**. A worked design and test plan are in the [aspects of software development study guide](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development/); questions are in the [aspects of software development practice questions](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-practice/).

## The five stages

| Stage | Key points |
|---|---|
| **Analysis** | Define the problem; establish requirements by interacting with the intended users; create a data model; use abstraction; prototyping or agile can clarify requirements |
| **Design** | Plan data structures; design algorithms; design a modular structure with clear documented interfaces; design the human user interface; can be iterative (prototyping or agile) |
| **Implementation** | Turn models and algorithms into data structures and code; write, debug and test; argue for correctness and efficiency with logical reasoning, test data and user feedback; iterative, solving the critical path first |
| **Testing** | Test for errors with selected normal, boundary and erroneous data; acceptance testing with the intended users |
| **Evaluation** | Judge the solution against criteria for evaluating a computer system |

The stages can loop back: testing may expose a design fault.

## Analysis detail

- **Requirements come from users:** interviews, questionnaires, observation, existing documents.
- **Abstraction:** keep the details that matter, ignore the rest.
- **Data model:** entities, attributes and relationships.
- **Prototype:** an early version that users react to, revealing needs they could not describe.

## Design detail

- **Module:** a subroutine with a clear, documented interface (inputs, outputs, purpose).
- **Benefits of a modular structure:** modules can be written and tested separately, reused, and shared between programmers; the program is easier to maintain.
- **User interface:** layout, navigation, validation, messages, accessibility.

| Module | Inputs | Output |
|---|---|---|
| `calculateFine(daysLate)` | integer | decimal, 0.20 × days, capped at 5.00 |

## Implementation detail

- Meaningful names and comments.
- Test each module as it is finished and debug it.
- **Critical path first:** build the parts everything depends on, or that carry most risk, first.

## Test data

| Type | Meaning | Example (age accepted from 11 to 18) |
|---|---|---|
| **Normal** | Valid, typical data | 15 |
| **Boundary** | At the edge of what is valid, and just outside | 11, 18 (valid); 10, 19 (invalid) |
| **Erroneous** | Invalid data that should be rejected | "abc", −5 |

- Always give the **expected result** with each test, before running it.
- **Acceptance testing:** the intended users check that the system meets its specification.

**Check (fine capped at 5.00, 20p a day):** the cap is reached at 5.00 ÷ 0.20 = 25 days. Boundary tests: 24 days gives 4.80, 25 gives 5.00, 26 gives 5.00.

## Evaluation criteria (commonly used)

| Criterion | Question |
|---|---|
| Meets requirements | Does it do everything in the analysis? |
| Usability | Is it easy to learn and use? |
| Robustness | Does it cope with invalid or unexpected input? |
| Efficiency | Does it use time, memory and storage sensibly? |
| Maintainability | Can it be understood and changed later? |

Use evidence (test results, user feedback), note limitations, and suggest improvements.

## Prototyping and agile

| | Prototyping | Agile |
|---|---|---|
| Idea | Build an early version for feedback | Short cycles delivering working parts |
| Strength | Clarifies requirements; users see something early | Copes with change; frequent user contact |
| Weakness | May be mistaken for the finished product | Scope and cost less certain; documentation can slip |

## Key terms

| Term | Definition |
|---|---|
| Requirement | A statement of what the system must do |
| Abstraction | Removing detail that is not relevant to the problem |
| Data model | A description of the data and its relationships |
| Module | A self-contained part of a program with a defined interface |
| Interface | The inputs, outputs and purpose of a module |
| Prototype | An early working version used to get feedback |
| Critical path | The parts of the work on which everything else depends |
| Acceptance testing | Testing by the intended users that the system meets its specification |
| Boundary data | Test data at the limits of the valid range |
| Erroneous data | Invalid test data that should be rejected |

## Exam traps

- **The process is iterative,** not a one-way line.
- **Requirements come from the users.**
- **Every test needs an expected result.**
- **Boundary is not the same as erroneous.**
- **Give normal, boundary and erroneous data** in a test plan.
- **Acceptance testing is by the user.**
- **Evaluate with evidence** against stated criteria.

## Self-test

1. Name the five stages.
2. How are requirements established?
3. What is abstraction?
4. What is a modular structure?
5. Name three kinds of test data.
6. Give a boundary value for a mark accepted from 0 to 100.
7. Give an erroneous value for the same input.
8. What is acceptance testing?
9. What does "critical path first" mean?
10. Name two criteria for evaluating a system.
11. Give one strength of an agile approach.
12. Why must an expected result be stated for each test?

**Answers**

1. Analysis, design, implementation, testing, evaluation.
2. By interaction with the intended users, for example interviews, questionnaires and observation.
3. Keeping the details relevant to the problem and ignoring the rest.
4. A program divided into modules with clear, documented interfaces.
5. Normal, boundary and erroneous.
6. 0 or 100 (also 101 or −1 just outside).
7. For example "abc" or −20.
8. Testing by the intended users that the system meets its specification.
9. Build first the parts everything else depends on, or that carry most risk.
10. Any two of: meets requirements, usability, robustness, efficiency, maintainability.
11. For example: copes with changing requirements; users see working parts early.
12. Otherwise there is nothing to compare the actual result with, so an error cannot be recognised.

## Related resources

- [Aspects of software development study guide](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development/)
- [Aspects of software development practice questions](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-practice/)
- [Data modelling revision notes](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes/)
