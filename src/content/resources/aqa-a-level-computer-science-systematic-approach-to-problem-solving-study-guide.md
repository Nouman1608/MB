---
title: "AQA A Level Computer Science (7517): Systematic approach to problem solving -- Study Guide"
resourceType: "study-guides"
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
description: "Analysis, design, implementation, testing and evaluation of a computing solution for AQA A Level Computer Science, with a worked test plan."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check the exact list of development methods, testing types and analysis techniques the specification names for this section."
publishedDate: 2026-11-08
featured: false
---

A systematic approach means solving a problem in planned, ordered stages instead of starting to code at once. In the course this covers the whole life of a piece of software, from understanding what is wanted, through design and building, to testing and judging the result. You meet these stages in practice in the programming project, and in the written papers they appear as questions about a scenario that ask you to describe, justify or improve a stage.

## Where this fits in the specification

Systematic approach to problem solving is section 4.13 of AQA 7517. It supports the skills used across the programming and algorithm sections, so it is useful alongside [Fundamentals of programming](/resources/aqa-a-level-computer-science-fundamentals-of-programming/) and [Fundamentals of algorithms](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/). The same stages are also the structure you are expected to follow in your own project work.

## The stages of development

### Analysis

Analysis is finding out exactly what the problem is and what the solution must do. You identify the **stakeholders** (everyone affected, including users, owners and administrators) and gather information by **interviews**, **questionnaires**, **observation** and **examining existing documents** or systems. Each method has trade-offs: interviews give depth from few people, questionnaires reach many people but with shallower answers, and observation shows what people really do rather than what they say.

The result is a **requirements specification** with measurable **success criteria**, such as "a booking is confirmed in under 3 seconds", plus the **limitations** and **constraints** (time, cost, hardware, legal rules) and the data the system must store and process. A feasibility check, including whether the problem can be solved by computer at all, comes before work begins. Good criteria are specific and testable, because they become the benchmark for the evaluation.

### Design

Design decides how the solution will meet the requirements, before any code is written. It uses **decomposition** to split the problem into smaller parts, and **abstraction** to leave out unneeded detail. Design work includes:

- **Algorithms** in pseudocode or flowcharts, and the choice of **data structures**.
- **Data design**: tables, files, validation rules and data formats.
- **Interface design**: screen layouts, inputs and outputs, with the needs of the user in mind.
- **Modular structure**: a hierarchy of subroutines with defined parameters, so that modules can be written and tested separately.
- A **test plan** drawn up from the success criteria, before building starts.

### Implementation

Implementation turns the design into working code in a suitable language. Good practice includes meaningful identifier names, comments, consistent layout and modular code, which help later maintenance. Building in stages, with a prototype first, lets you check ideas early. A **prototype** is a partial working version used to get feedback, and building it can show a problem while it is still cheap to change.

### Testing

Testing checks that the solution works and meets the requirements. It is carried out against the test plan and does not just consist of running a program and hoping.

- **Unit testing** checks each subroutine or module on its own; **integration testing** checks that the modules work together; **system testing** checks the whole system against the specification.
- **Acceptance testing** is carried out by the client or end users to confirm that it meets their needs. **Alpha testing** is done in-house by developers or staff; **beta testing** is done by selected real users before general release.
- **White-box testing** designs tests from knowledge of the code, so that every path is exercised; **black-box testing** designs tests from the specification, without regard to the code.

Test data falls into three groups: **normal** (typical valid data), **boundary** (values at the edge of what is allowed, and just outside it) and **erroneous** (invalid data that must be rejected, including the wrong type). A good test plan records for each test the purpose, the data, the **expected result** and the **actual result**.

### Evaluation

Evaluation judges the finished solution against the original success criteria. You gather evidence from test results and user feedback, state which criteria were fully, partly or not met, and identify strengths and weaknesses, and then suggest improvements and further development. Maintenance follows release: **corrective** (fixing faults), **adaptive** (changing for new conditions) and **perfective** (improving performance or features).

## Development approaches

The **waterfall** model completes each stage in order and returns to a previous stage only with difficulty; it suits well-understood problems with fixed requirements, and produces thorough documentation, but changes late in the project are costly and users see nothing until the end. **Iterative** and **agile** approaches build the solution in short cycles, with working versions and regular feedback, so changing requirements are handled more easily, though planning, cost and finish date are harder to fix. **Extreme programming** is an agile method using pair programming, frequent small releases and tests written before code. **Rapid application development** relies on prototypes built quickly with user involvement.

## Worked example: a test plan with boundary data

A club sells tickets to members aged 11 to 16 inclusive. Under the specification, ages 11 to 13 pay 8 pounds and ages 14 to 16 pay 12 pounds. Anyone outside the range is refused. The success criterion is that every request gets the correct decision and price.

First, the **boundaries**: the range limits are 11 and 16, and the price limit is between 13 and 14. So test 10 and 11 (either side of the lower limit), 16 and 17 (either side of the upper limit), and 13 and 14 (either side of the price change).

| Test | Type | Age entered | Expected result |
|---|---|---|---|
| 1 | Normal | 12 | Accepted, 8 |
| 2 | Normal | 15 | Accepted, 12 |
| 3 | Boundary | 11 | Accepted, 8 |
| 4 | Boundary | 10 | Rejected |
| 5 | Boundary | 13 | Accepted, 8 |
| 6 | Boundary | 14 | Accepted, 12 |
| 7 | Boundary | 16 | Accepted, 12 |
| 8 | Boundary | 17 | Rejected |
| 9 | Erroneous | -3 | Rejected |
| 10 | Erroneous | "abc" | Rejected with message |
| 11 | Erroneous | 13.5 | Rejected |

Applying these rules in a short test function gives the expected result for all eleven tests. A party of 3 members aged 13 and 2 aged 15 would pay 3 x 8 + 2 x 12 = 48 pounds. Testing both sides of each limit is what finds an off-by-one error, such as writing `age > 11` instead of `age >= 11`: that fault would wrongly reject an 11-year-old, and test 3 would show it.

## Common mistakes

- Starting to code before the requirements are clear.
- Writing success criteria that cannot be measured, such as "easy to use".
- Testing only normal data. Boundary and erroneous data find the faults.
- Giving boundary tests on one side only. Test on both sides of each limit.
- Evaluating by describing the work done rather than judging it against the criteria.
- Confusing alpha testing (in-house) with beta testing (selected users).

## Exam technique

Name the stage that the question is about and keep to it: an analysis question wants stakeholders, methods and requirements, not code. For testing questions, give the data, the reason for choosing it and the expected output. For **evaluate** or **discuss** questions, refer to the scenario and give a judgement. For a **justify** question, link the choice to a stated feature of the problem, for example "agile suits this project because the client expects the requirements to change".

## Check your understanding

1. Give two ways of gathering information in analysis. *Answer: for example interviews and questionnaires.*
2. What is a success criterion? *Answer: a specific, measurable statement of what the finished system must achieve, used later to evaluate it.*
3. State one advantage of building a prototype. *Answer: users can give feedback early, while problems are cheap to fix.*
4. A field accepts whole numbers from 1 to 50. Give the boundary test data. *Answer: 0, 1, 50 and 51.*
5. Distinguish unit testing from integration testing. *Answer: unit tests check each module alone; integration tests check the modules together.*
6. What is the difference between alpha and beta testing? *Answer: alpha is done in-house, beta by selected real users before release.*
7. Give one drawback of the waterfall model. *Answer: changes late in the project are costly, and users see no working system until the end.*
8. What is evaluated at the end of a project? *Answer: how far the solution meets the original success criteria, plus user feedback and improvements.*

## Frequently asked questions

**What are the stages of a systematic approach to problem solving in AQA 7517?**
Analysis, design, implementation, testing and evaluation. The same stages are the structure expected in the programming project.

**What is the difference between alpha and beta testing?**
Alpha testing is done in-house by developers or staff. Beta testing is done by selected real users before general release.

**What makes a good success criterion?**
A good success criterion is specific and measurable, such as a booking being confirmed in under 3 seconds, because it becomes the benchmark for the evaluation. Criteria such as easy to use cannot be measured.

**What is the difference between white-box and black-box testing?**
White-box testing designs tests from knowledge of the code so that every path is exercised. Black-box testing designs tests from the specification without regard to the code.
