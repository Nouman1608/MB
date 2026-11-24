---
title: "OxfordAQA A-Level Computer Science (9645): Aspects of software development"
seoTitle: "OxfordAQA A-Level CS 9645 Software Development Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.3.4 in depth: analysis, design, implementation, testing with normal, boundary and erroneous data, and evaluation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.3.4 Aspects of software development** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.3 Program design (AS). The specification names five aspects: **analysis**, **design**, **implementation**, **testing** and **evaluation**. For each it lists what you should be aware of, including prototyping and agile approaches, the **critical path**, the three kinds of test data (**normal**, **boundary** and **erroneous**) and three evaluation criteria (**correctness**, **efficiency** and **maintainability**).

For quick recall use the [aspects of software development revision notes](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-revision-notes/), then try the [aspects of software development practice questions](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-practice/). The topic-level [program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/) covers the whole of section 3.3.

## The five aspects in order

| Aspect | Question it answers | Typical output |
|---|---|---|
| Analysis | What problem are we solving, and what must the solution do? | Requirements, data model |
| Design | How will the solution be structured? | Data structures, algorithms, module structure, user interface designs |
| Implementation | How do we build it? | Code and data structures |
| Testing | Does it work, including in awkward cases? | Test plan and results |
| Evaluation | How good is the finished solution? | Judgement against criteria |

These are often shown as a sequence, but real projects move **back and forth**. Testing may expose a design flaw, and a change request may send the team back to analysis. The specification stresses that clarifying requirements and design can be **iterative** and may use a **prototyping or agile approach**.

## Analysis

Before a problem can be solved it must be **defined**. The specification names three activities.

1. **Define the problem.** State clearly what is to be solved.
2. **Establish the requirements** of the system that will solve it, by **interaction with the intended users** (for example interviews, questionnaires and observation).
3. **Create a data model:** decide what data the system must store and how it relates, such as the fields of a record.

Requirements are things the system must do ("let a member borrow up to 5 books") or conditions it must meet ("respond within 2 seconds"). Good requirements are specific and testable. "The system should be easy to use" is vague; "a new user can complete a booking in under 2 minutes" can be tested.

Users often cannot describe their needs until they see something. The specification says the process of clarifying requirements may involve **prototyping** (building a rough working model for users to try) or an **agile** approach (working in short cycles, with frequent contact with users and regular delivery of working pieces).

## Design

Before building, the solution should be **designed and specified**. The specification gives these examples:

- planning **data structures** for the data model (for instance a list of records);
- designing **algorithms** (pseudocode or flowcharts);
- designing an appropriate **modular structure**, such as a hierarchy chart (sub-topic 3.3.1);
- designing the human **user interface**, such as screen layouts.

Design can also be iterative: a prototype of the interface may be shown to users, changed and shown again. The benefit of designing first is that mistakes are found on paper, where they are cheap to fix, instead of in finished code.

## Implementation

Implementation turns the models and algorithms into **data structures and code** that a computer can process. Where prototyping or agile working is used, the final solution may be reached through repeated cycles. The specification introduces the idea of solving the **critical path** first.

The **critical path** is the part of a solution that everything else depends upon. If it fails, nothing else works. For a booking system, the critical path might be saving and retrieving a booking; a loyalty-points feature depends on it, but not the other way round. Building the critical path first means the riskiest, most important part is tested early, and the remaining features can be added on a working base.

## Testing

The implementation must be tested for errors using selected test data covering **normal (typical)**, **boundary** and **erroneous** data. You should also have practical experience of designing and using such data.

| Type | Meaning | Expected behaviour |
|---|---|---|
| Normal | Typical valid data well within the allowed range | Accepted and processed correctly |
| Boundary | Data on the very edge of the valid range, and the nearest invalid values either side | The valid edge values are accepted; the nearest invalid values are rejected |
| Erroneous | Invalid data that should be rejected, including the wrong type | Rejected with a sensible message; no crash |

### Worked example 1: test data for an age check

A program accepts ages from 16 to 60 inclusive. Here are suitable tests, with the expected results checked by running the rule.

| Test data | Type | Expected outcome |
|---|---|---|
| 30 | Normal | Accepted |
| 16 | Boundary (lowest valid) | Accepted |
| 60 | Boundary (highest valid) | Accepted |
| 15 | Boundary (just below) | Rejected |
| 61 | Boundary (just above) | Rejected |
| −5 | Erroneous | Rejected |
| "abc" | Erroneous (wrong type) | Rejected, with no crash |

The boundary tests catch the commonest coding mistake: writing `>` where `>=` was needed. If the code used `age > 16`, the test with 16 would be wrongly rejected.

### Worked example 2: a password length rule

A password must be 8 to 12 characters long. A test with an 8-character password is accepted and a 7-character password is rejected; a 12-character password is accepted and a 13-character password is rejected; an empty string is rejected. The boundary tests are 7, 8, 12 and 13 characters, and the empty string is erroneous.

### What testing can and cannot show

Testing can show that errors exist; it cannot prove there are none, because it is impossible to try every possible input. That is why test data is *selected* to cover the three types. A **test plan** lists each test, its data, the expected result and the actual result. Writing the expected result **before** running the test is important, because otherwise it is tempting to accept whatever the program does.

## Evaluation

Evaluation judges the finished system against criteria. The specification gives three.

| Criterion | Question | Example evidence |
|---|---|---|
| Correctness | Does it do what the requirements say, with correct results? | All test results match the expected results; every requirement is met |
| Efficiency | Does it use time, memory and other resources sensibly? | Fast response on large data; small memory use; no wasted steps |
| Maintainability | Can it be understood and changed easily by others later? | Meaningful names, comments, modular structure, documentation |

A good evaluation compares the result with the original requirements, uses test evidence, includes user feedback and identifies improvements. It also recognises trade-offs: a very efficient algorithm may be harder to read, and a highly maintainable design may use a little more memory.

## Iteration and feedback

Because each stage can reveal problems with an earlier one, careful teams build in feedback. A prototype shown to users in the analysis stage prevents a misunderstood requirement from being built. Reviewing a design with users prevents an unusable interface. Testing early on the critical path prevents a late discovery that the foundation of the system does not work. Each loop back costs less than finding the same problem after the system has been delivered.

## Linking the aspects

| If a problem is found in... | The cause may lie in... |
|---|---|
| A test that fails | Implementation (code bug), design (wrong algorithm) or analysis (misunderstood requirement) |
| A user saying "this is not what I wanted" | Analysis, because the requirements were incomplete |
| Slow performance | Design (inefficient algorithm or data structure) |
| Code that nobody can modify | Implementation style (naming, structure, comments) |

## Exam technique

- **Name the stage** the question is about, and use the specification's own words: analysis, design, implementation, testing, evaluation.
- **For test data questions,** give the data value, its type and the expected result. Include boundary values on both sides of every limit.
- **For critical path,** define it (the part everything else depends upon) and link it to the scenario.
- **For evaluation,** apply all three criteria, not just "it works".

## Common mistakes

- Treating the stages as a one-way chain that is never revisited.
- Giving only one boundary value for a range with two limits.
- Calling an erroneous value "boundary" or a typical value "normal" without checking the rule.
- Listing test data without the expected outcome.
- Confusing efficiency (resources used) with correctness (right results).
- Describing maintainability as "easy to use" instead of easy to understand and change.

## More on this topic

- [Aspects of software development revision notes](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-revision-notes/)
- [Aspects of software development practice questions](/resources/oxfordaqa-a-level-computer-science-9645-aspects-software-development-practice/)
- [Following and writing algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.4 Aspects of software development.
