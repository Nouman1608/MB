---
title: "AQA A-Level Computer Science: Systematic Approach to Problem Solving — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13: Systematic approach to problem solving"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "systematic-approach-to-problem-solving-7517"
description: "Recall notes on analysis, design, implementation, normal, boundary and erroneous test data, acceptance testing and evaluation for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

A systematic approach to problem solving (section 4.13 of AQA A-Level Computer Science 7517) means developing
software in planned stages: **analysis, design, implementation, testing and evaluation**. The specification
lists the skills from 4.13 as part of what Paper 1 assesses, and the same stages structure the non-exam
assessment project, so you must be able to describe each stage, choose test data and justify decisions for
a given scenario.

Condensed for the final weeks. For the full explanation, use the
[Systematic approach to problem solving study guide](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-study-guide/).
Practise with the [systematic approach to problem solving practice questions](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section **4.13.1 Aspects of software development**:

- **4.13.1.1 Analysis** -- define the problem, establish requirements with the intended users, create a
  data model; prototyping/agile may be used to clarify requirements
- **4.13.1.2 Design** -- plan data structures, algorithms, a modular structure and the user interface;
  design can be iterative
- **4.13.1.3 Implementation** -- turn models and algorithms into data structures and code; iterative,
  solving the **critical path first**
- **4.13.1.4 Testing** -- normal (typical), boundary and erroneous test data; acceptance testing with the
  intended users
- **4.13.1.5 Evaluation** -- know the criteria for evaluating a computer system

## The five stages at a glance

| Stage | What happens (specification wording in bold) | Typical output |
|---|---|---|
| **Analysis** | The problem is **defined**, the **requirements** of the system are established **by interaction with the intended users**, and a **data model** is created | Problem statement, requirements list, data model |
| **Design** | The solution is designed and specified: **data structures**, **algorithms**, a **modular structure** and the **human user interface** | Structure chart, pseudocode, data dictionary, screen designs |
| **Implementation** | Models and algorithms are implemented as **data structures and code** a computer can understand | Working program |
| **Testing** | The implementation is tested for errors with **normal, boundary and erroneous** data, then **acceptance testing** with the users | Test plan and evidence, user feedback |
| **Evaluation** | The system is judged against **criteria for evaluating** a computer system | Evaluation against the requirements |

## Analysis

- You cannot solve a problem until it is **defined** and its requirements are agreed with the people who
  will use the system -- through interviews, questionnaires, observation or examining current documents.
- **Abstraction** is used to model the relevant parts of the real world in the program and leave out the
  rest.
- The **data model** describes the data the system will hold and how it is related.
- Requirements may be clarified with a **prototype** that users try out, as in an **agile** approach.
- Good requirements are **specific and measurable**, so that they can be tested and evaluated later.

## Design

- Plan the **data structures** for the data model (arrays, records, files, database tables).
- Design the **algorithms** (pseudocode, flowcharts).
- Design a **modular structure**: break the solution into modules (subroutines, classes) with **clear,
  documented interfaces** -- what each receives and returns -- so they can be written and tested separately.
- Design the **human user interface** (screen layouts, inputs, outputs).
- Design can be **iterative**: prototypes are shown to users and the design is refined.

## Implementation

- Code and data structures are written from the design.
- Development may be iterative, using prototyping or an agile approach with a focus on **solving the
  critical path first** -- the parts that the rest of the system depends on.
- You should be able to argue that the program is **correct and efficient** using logical reasoning, test
  data and user feedback.

## Testing: choosing test data

| Type | Meaning | Example: a field accepting whole-number ages 11 to 18 |
|---|---|---|
| **Normal (typical)** | Data that should be accepted and is well within range | 14 |
| **Boundary** | Values at the edges of the valid range (and just outside) | 11 and 18 (accept); 10 and 19 (reject) |
| **Erroneous** | Data that should be rejected: wrong type or out of range | "fifteen", -3, 14.5 |

### Worked example: a test plan row

```
Test  Purpose                    Data     Type        Expected result
1     Accept a typical age       14       Normal      Accepted, record saved
2     Accept lowest valid age    11       Boundary    Accepted
3     Reject just below range    10       Boundary    Error "Age must be 11-18"
4     Reject non-integer input   "abc"    Erroneous   Error "Enter a whole number"
```

**Acceptance testing** is carried out **with the intended users** to make sure the solution meets its
specification. For the NEA you need evidence of **user feedback**, not details of every test the user ran.

## Evaluation

The specification asks you to know the **criteria for evaluating** a computer system. The most useful
criterion is whether each **requirement from the analysis has been met**; others include how well the system
suits its users (ease of use), its reliability, its efficiency, and how maintainable it is. A good evaluation:

- takes each requirement in turn and states whether it is fully, partly or not met, **with evidence**
  (test results, user feedback)
- explains any shortfalls
- suggests realistic **improvements or extensions**

## Common mistakes / exam traps

- Writing that requirements come from the developer's own ideas -- they are established **with the users**.
- Giving only one boundary value; test **both edges** and, ideally, the values just outside.
- Calling out-of-range data "boundary" when it is far from the edge -- that is erroneous.
- Treating acceptance testing as the developer's own testing: it is done **with the intended users**.
- Evaluating with vague comments ("it works well") instead of measuring against the requirements.
- Describing stages without linking them to the scenario in the question.

## Frequently asked questions

**What is the difference between boundary and erroneous test data?**
Boundary data lies at the edges of the valid range, such as the smallest and largest accepted values, with the
values just outside. Erroneous data is clearly invalid, such as text where a number is expected.

**Why use a prototyping or agile approach?**
Users can try an early version and give feedback, so misunderstandings in the requirements or design are found and
fixed early, before the whole system is built.

**What does "solving the critical path first" mean?**
Building first the parts of the system that everything else depends on, so the core of the solution works before
less essential features are added.

## Related resources

[Systematic approach to problem solving study guide](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-study-guide/) |
[Systematic approach to problem solving practice questions](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-practice/) |
[Theory of computation revision notes](/resources/aqa-a-level-computer-science-theory-of-computation-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.13 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
