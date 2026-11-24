---
title: "AQA A-Level Computer Science (7517): Aspects of Software Development"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.13.1: analysis, design, implementation, testing and evaluation, including prototyping, agile development and normal, boundary and erroneous test data."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: the specification says only 'know the criteria for evaluating a computer system' (4.13.1.5) and does not itemise them. The criteria listed here (meets requirements, usability, robustness, efficiency, maintainability) are the commonly taught set; check against current exam mark schemes. 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.13.1 Aspects of software development** in AQA A-Level Computer Science (7517). The specification describes five stages: **analysis, design, implementation, testing and evaluation**. For each stage you need to be aware of what happens and why, and to be able to apply the ideas to a given scenario. The stages also guide the non-exam assessment project, where you document your own development.

The wider [systematic approach to problem solving study guide](/resources/aqa-a-level-computer-science-systematic-approach-to-problem-solving-study-guide/) covers the topic as a whole. This page adds a worked case, a worked test plan, and a comparison of the iterative approaches the specification mentions.

Condensed notes are in the [aspects of software development revision notes](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-revision-notes/), and exam-style questions are in the [aspects of software development practice questions](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-practice/).

## The five stages at a glance

| Stage | Main question | Typical outputs |
|---|---|---|
| **Analysis** | What problem are we solving, and what must the solution do? | Problem definition, requirements, data model |
| **Design** | How will the solution be built? | Data structures, algorithms, modular structure, user interface |
| **Implementation** | Build it. | Data structures and working code |
| **Testing** | Does it work, including on difficult data? | Test plan, test results, acceptance by users |
| **Evaluation** | How well does it meet the need? | Judgement against criteria |

The stages are often presented in a line, but in practice work **loops back**: testing may show a design flaw, and users may change their minds during implementation.

## Analysis

Before a problem can be solved, it must be **defined**, the **requirements** of the system that solves it must be **established**, and a **data model** created.

- **Define the problem:** state clearly what is wanted, who it is for and what is out of scope.
- **Establish requirements by interaction with the intended users**: interviews, questionnaires, observation, looking at existing documents. Users know what they need, and developers do not.
- **Create a data model:** the things the system must hold data about and how they are related (see 4.10.1).
- **Use abstraction** to model aspects of the external world in a program: keep the details that matter to the problem and ignore the rest. A bus timetable program needs stops, times and routes; it does not need the colour of the buses.
- **Prototyping or an agile approach** can be used to clarify requirements: users react to something they can see, which often reveals needs that they could not describe in advance.

## Design

Before building a solution it should be **designed and specified**. The specification names several parts of design:

- **Planning data structures for the data model**: choosing records, arrays, queues, tables and so on.
- **Designing algorithms**: using pseudocode or flowcharts to plan the steps.
- **Designing an appropriate modular structure**: dividing the program into **modules (subroutines)** with **clear documented interfaces**, meaning that for each module it is stated what inputs it takes, what it returns and what it does. Modules can then be written and tested separately, reused, and shared between programmers.
- **Designing the human user interface**: layout, navigation, input validation, messages and accessibility.

Design can be an **iterative process involving a prototyping or agile approach**: a rough design is built, shown to users, and improved.

**Worked example 1: a modular design.** A library fines program charges 20p for each day a book is late, up to a maximum of £5.00.

| Module | Inputs | Output | Purpose |
|---|---|---|---|
| `getDaysLate(dueDate, returnDate)` | two dates | integer | number of days late (0 if on time) |
| `calculateFine(daysLate)` | integer | decimal | 0.20 × daysLate, never more than 5.00 |
| `displayFine(memberName, fine)` | text, decimal | none | shows the result on screen |

Each interface is documented, so one programmer can write `calculateFine` while another writes `displayFine`.

## Implementation

The models and algorithms are **implemented** as **data structures and code** that a computer can understand. Practice in writing, debugging and testing programs develops the skill of explaining **how programs work, and arguing for their correctness and efficiency using logical reasoning, test data and user feedback**.

- Write the code in the chosen language, module by module.
- Use meaningful names and comments, so others can maintain it.
- Test each module as it is finished, and fix errors (debugging).
- The final solution may be reached **iteratively** through prototyping or agile development, with a focus on **solving the critical path first**: the parts that everything else depends on, or that carry most risk, are built first.

## Testing

The implementation must be **tested for the presence of errors**, using **selected test data covering normal (typical), boundary and erroneous data**. It should also undergo **acceptance testing** with the intended user(s) to ensure that the solution meets its specification.

| Type of test data | Meaning |
|---|---|
| **Normal (typical)** | Valid data of the kind expected, which should be accepted |
| **Boundary** | Data at the very edge of what is valid, and just outside it, where errors are most likely |
| **Erroneous** | Invalid data that should be rejected, such as the wrong type or a value that is out of range |

**Worked example 2: a test plan.** The `calculateFine` module above takes `daysLate` (a whole number, 0 or more). The fine is 0.20 × daysLate, capped at 5.00. The cap is reached at 5.00 ÷ 0.20 = 25 days.

| Test | daysLate | Type | Expected result |
|---|---|---|---|
| 1 | 10 | Normal | 2.00 |
| 2 | 0 | Boundary (lowest valid) | 0.00 |
| 3 | 24 | Boundary (just below the cap) | 4.80 |
| 4 | 25 | Boundary (cap exactly reached) | 5.00 |
| 5 | 26 | Boundary (just above the cap) | 5.00 (cap applies) |
| 6 | −3 | Erroneous | Rejected with a message |
| 7 | "abc" | Erroneous | Rejected with a message |

Selecting test data with a purpose, and stating the expected result **before** running it, is what separates a test plan from random trial and error. For example, a fault that applied the cap one day too early, at 24 days, would give 5.00 for test 3 instead of 4.80, and a fault that never applied the cap would give 5.20 for test 5 instead of 5.00. Tests 3 to 5 would catch both, which is why tests at the edge of a rule are chosen on purpose.

**Acceptance testing** is carried out by the intended users, using realistic tasks, to confirm that the system does what was agreed in the requirements. For the project, students need only provide **evidence of user feedback**, not the details of the tests carried out by the user.

## Evaluation

The solution is evaluated against **criteria for evaluating a computer system**. Commonly used criteria are:

- **Meets the requirements:** does it do everything that the analysis said it should?
- **Usability:** is it easy to learn and use for its intended users?
- **Robustness:** does it cope with unexpected or invalid input without failing?
- **Efficiency:** does it use time, memory and storage sensibly?
- **Maintainability:** can it be understood and modified later, for example thanks to modular structure and documentation?

A good evaluation refers to **evidence** (test results, user feedback), is honest about **limitations**, and suggests **improvements**.

## Iterative approaches: prototyping and agile

The specification repeatedly mentions an iterative approach with prototyping or agile development.

- **Prototyping:** build an early, incomplete version quickly, show it to users, learn from their reaction and refine.
- **Agile:** work in short cycles, each delivering a working part of the system, with frequent contact with users and regular review of the plan.

Compared with a strictly sequential approach, these allow requirements to change, reduce the risk of building the wrong thing, and give users earlier sight of the product. Their drawbacks are that the final scope and cost are less certain, and that frequent changes can weaken documentation if not managed.

## Common mistakes

- Treating the stages as strictly one-way. Say that the process can be **iterative**.
- Writing a requirements list without saying that it comes from **talking to the intended users**.
- Giving test data with **no expected result**.
- Listing only normal data. A test plan needs **normal, boundary and erroneous** cases.
- Confusing **boundary** data (at the edge of valid) with **erroneous** data (invalid).
- Describing testing as "checking it works" instead of testing for **errors** with selected data.
- Evaluating only with opinions. Use **evidence** against stated criteria.

## Exam technique

- For a scenario question, name the stage and give an activity specific to the scenario.
- When asked for test data, give the **value, the type of test and the expected outcome**.
- When asked to justify modular design, mention separate writing and testing, reuse, and clear interfaces.
- For evaluation, link each criterion to evidence.

## More resources on this topic

- [Aspects of software development revision notes](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-revision-notes/)
- [Aspects of software development practice questions](/resources/aqa-a-level-computer-science-7517-aspects-of-software-development-practice/)
- [Data modelling study guide](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling/)

*Written against the AQA A-level Computer Science (7517) specification, 4.13.1 Aspects of software development. Always check the current specification on the AQA website.*
