---
title: "Cambridge A Level Computer Science (9618): Program Development Life Cycle"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12.1
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-development-life-cycle"
description: "Study guide to 9618 section 12.1: why a life cycle is used, the five stages and their outputs, and waterfall, iterative and RAD compared for scenarios."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 12.1 Program Development Life Cycle of Cambridge International AS & A Level Computer Science 9618 asks you to understand the purpose of a development life cycle, why different programs need different life cycles (waterfall, iterative and rapid application development), the principles, benefits and drawbacks of each, and the analysis, design, coding, testing and maintenance stages. It is AS content, examined in Paper 2.

Related: [Program Development Life Cycle revision notes](/resources/cambridge-a-level-computer-science-9618-program-development-life-cycle-revision-notes/) · [Program Development Life Cycle practice questions](/resources/cambridge-a-level-computer-science-9618-program-development-life-cycle-practice/) · [Software Development study guide (all of Topic 12)](/resources/cambridge-a-level-computer-science-software-development-study-guide/)

## Why use a development life cycle?

A **development life cycle** is a structured sequence of stages that a program passes through, from identifying the problem to supporting the finished product. Its purpose is to make development **planned and controllable**:

- each stage has a clear aim and produces defined outputs, so progress can be measured against milestones;
- time, cost and staff can be estimated and allocated to stages;
- the outputs of one stage (such as the requirement specification) become the inputs to the next, so nothing is built without a reason;
- problems are found at defined review points, when they are cheaper to fix than after release;
- documentation is produced as the work goes along, which the maintenance stage depends on.

## The five stages and what each produces

| Stage | Main activities | Typical outputs |
|---|---|---|
| Analysis | Define the problem; investigate the current system and the users' needs; identify inputs, processes, outputs and constraints such as hardware or deadlines | Requirement specification agreed with the client |
| Design | Decide how the requirements will be met: decompose the problem into modules, choose data structures and file formats, design algorithms and interfaces, plan tests | Structure charts, pseudocode or flowcharts, state-transition diagrams, interface designs, test plan |
| Coding | Write the program in the chosen language from the design, testing modules as they are written | Source code, with comments and meaningful identifiers |
| Testing | Run the program with the planned test data and compare actual with expected results; check it meets the requirement specification | Completed test plan, a list of faults found and corrected |
| Maintenance | Correct, adapt and improve the program after it is in use | Updated versions and documentation |

The stages are linked. A vague requirement specification leads to a design that misses what the client wanted; an incomplete design leads to code that is hard to test; poor documentation from any stage makes maintenance slow and costly.

## Why different programs need different life cycles

Programs differ in how well their requirements are known at the start, how much the requirements are likely to change, how soon the client needs something working, how large and risky the project is, and how available the users are to give feedback. A life cycle that suits one combination can fail badly for another, so the model is chosen to fit the project.

## Waterfall

**Principles**: the stages are done strictly in order. Each stage is completed, documented and signed off before the next begins, and the output of one stage flows down into the next. Going back to an earlier stage is possible but is treated as an exception.

**Benefits**: simple to understand and manage; clear milestones make progress easy to track; every stage is fully documented, which helps maintenance and auditing; suits projects whose requirements are fixed and well understood.

**Drawbacks**: the client sees no working program until late, so misunderstood requirements are discovered late and are costly to fix; changes to requirements are hard to accommodate once design is signed off; risky for long projects where needs evolve.

## Iterative

**Principles**: the program is developed in repeated cycles (iterations). A first version implements a core subset of the requirements; each later iteration goes through design, coding and testing again to add or refine features, using feedback from the previous version. The program grows until it meets all the requirements.

**Benefits**: a working version exists early, so the client can give feedback; changing requirements can be built into a later iteration; risks are spread, because problems show up in early iterations; each iteration is smaller and easier to test.

**Drawbacks**: the total time and cost are harder to predict; the overall design must allow features to be added, or later iterations need costly rework; frequent client involvement is needed.

## Rapid application development (RAD)

**Principles**: the emphasis is on producing working software quickly through **prototyping** rather than detailed up-front planning. Users are closely involved and evaluate each prototype, which is refined until it is accepted. Modules may be developed in parallel, often by small teams, and existing components and code are reused where possible.

**Benefits**: a usable product can be delivered quickly; constant user feedback means the final program closely matches what users want; changes are easy to make during development; reuse of components shortens development time.

**Drawbacks**: depends on users being available throughout; less documentation and planning can make the program harder to maintain; unsuited to large or safety-critical systems that need full analysis and design; the focus on speed can lead to weaker structure or code quality.

## Worked example: matching a life cycle to a project

**Question.** For each project, recommend a life cycle and justify your choice.

1. A bank must replace the module that calculates loan interest. The rules are set out in regulations that will not change, and every calculation must be correct.
2. A small company is launching a fitness app. It will release a basic version first and add features, such as diet tracking, once it sees how customers use it.
3. A school needs an online booking system for parents' evenings within six weeks. Staff are available every week to try it and say what is wrong.

**Model answer**

1. **Waterfall**, because the requirements are fully known and fixed, so there is no need for repeated feedback, and the documented sign-off at each stage supports the thorough testing that a financial calculation needs.
2. **Iterative**, because the requirements will grow after release: a core version can be built and released first, and later iterations add features in response to customer use.
3. **RAD**, because the deadline is short and the staff can evaluate prototypes every week, so the system can be refined quickly until it matches what they need.

*Why it scores:* each answer names one model and gives a reason drawn from a feature of the scenario (fixed rules, evolving features, short deadline with available users) that matches a principle of the model. "Waterfall because it is well documented" alone would score less, because it does not use the scenario.

## Common mistakes

- Listing the stage names without describing what happens in each.
- Treating iterative and RAD as identical. Iterative adds functionality in planned cycles; RAD centres on fast prototyping with heavy user involvement and reuse.
- Saying waterfall "cannot go back at all". It can, but doing so is costly and is avoided.
- Giving a benefit or drawback that does not relate to the model's principles, such as "RAD is cheaper".
- Forgetting that maintenance is a stage of the life cycle, not something outside it.

## Exam technique

**Describe** the principles of a model: say how the stages are ordered or repeated, when the client is involved and what is produced. **Explain** the need for different life cycles: link the type of program (fixed or changing requirements, size, urgency, risk) to a feature of a model. **Justify** a choice: name one model and give at least one scenario-based reason; a second reason, or a reason why another model would be less suitable, often secures the remaining mark. For benefit and drawback questions, give a point for each side and keep them specific to the model named.
