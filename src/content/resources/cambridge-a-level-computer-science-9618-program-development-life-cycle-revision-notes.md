---
title: "Cambridge A Level Computer Science (9618): Program Development Life Cycle -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 12.1: life cycle purpose, the five stages and outputs, waterfall, iterative and RAD compared, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 12.1 Program Development Life Cycle, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You need the purpose of a life cycle, the five stages (analysis, design, coding, testing, maintenance), and the principles, benefits and drawbacks of the waterfall, iterative and rapid application development (RAD) models, including why different programs need different models.

Related: [Program Development Life Cycle study guide](/resources/cambridge-a-level-computer-science-9618-program-development-life-cycle/) · [Program Development Life Cycle practice questions](/resources/cambridge-a-level-computer-science-9618-program-development-life-cycle-practice/) · [Software Development revision notes (all of Topic 12)](/resources/cambridge-a-level-computer-science-software-development-revision-notes/)

## Purpose of a life cycle

- Gives development a structure of stages with clear aims and outputs.
- Allows planning of time, cost and staff, and tracking against milestones.
- Makes each stage's output the input to the next.
- Finds problems at review points, when they are cheaper to fix.
- Produces documentation that maintenance relies on.

## The five stages

| Stage | Key question | Output |
|---|---|---|
| Analysis | What must the program do? | Requirement specification |
| Design | How will it do it? | Structure charts, algorithms, data structures, interface designs, test plan |
| Coding | Build it | Commented source code |
| Testing | Does it work and meet the requirements? | Completed test plan, faults fixed |
| Maintenance | Keep it working and useful | Corrected, adapted or improved versions |

## The three models compared

| | Waterfall | Iterative | RAD |
|---|---|---|---|
| Principle | Stages in strict order; each signed off before the next | Repeated cycles; each adds or refines features | Rapid prototypes refined with users; reuse of components |
| Client involvement | Mainly at the start and end | At the end of each iteration | Continuous |
| Working version | Only near the end | After the first iteration | Early prototypes |
| Handles changing requirements | Poorly | Well | Very well |
| Documentation | Thorough | Moderate | Often limited |
| Best for | Fixed, well-understood requirements; safety-critical work | Products that grow over time; large projects split into parts | Short deadlines, available users, small to medium systems |
| Main drawback | Faults in requirements found late and costly | Hard to predict total cost and time | Depends on users; may be hard to maintain |

## Choosing a model: trigger phrases

- "Requirements are fixed / set by law / must be fully documented" → waterfall.
- "Release a basic version, then add features" → iterative.
- "Needed quickly", "users can test it every week", "client unsure what they want" → RAD.
- Always give a reason from the scenario, not just the model's general benefit.

## Key terms

| Term | Meaning |
|---|---|
| Development life cycle | A structured series of stages used to develop and support a program |
| Requirement specification | The agreed statement of what the program must do, produced in analysis |
| Waterfall model | Life cycle in which stages are completed in sequence, each signed off before the next |
| Iterative model | Life cycle in which the program is built in repeated cycles, each adding functionality |
| Rapid application development | Life cycle based on quickly built prototypes refined through user feedback |
| Prototype | An early working model of all or part of a program, used to gather feedback |
| Milestone | A planned point at which a stage's output is checked and approved |

## Exam traps

- Naming the stages without what happens in them earns little.
- Iterative is not the same as RAD: iterative adds features in planned cycles; RAD prototypes rapidly with continuous user input and reuse.
- Waterfall can return to an earlier stage; doing so is costly, which is the point to make.
- "Cheaper" or "faster" without a reason linked to the model is not credited.
- A justification must quote the scenario.
- Maintenance is part of the life cycle.

## Self-test

1. State two reasons for following a development life cycle.
2. Which stage produces the requirement specification?
3. Name three outputs of the design stage.
4. Describe the main principle of the waterfall model.
5. Give one benefit and one drawback of waterfall.
6. How does each iteration in an iterative model relate to the stages?
7. State one drawback of the iterative model.
8. What is a prototype?
9. Give two principles of RAD.
10. Why might RAD be unsuitable for an air traffic control system?
11. A start-up wants an app released within weeks and refined using customer comments. Which model fits, and why?
12. In which stage is a test plan first written?

**Answers:** 1. Any two: it makes planning and cost estimates possible; progress can be tracked against milestones; each stage has defined outputs used by the next; faults are found earlier when cheaper to fix; documentation is produced for maintenance. 2. Analysis. 3. Any three: structure charts, algorithms in pseudocode or flowcharts, data structure designs, interface designs, state-transition diagrams, test plan. 4. Stages are completed one after another in order, and each is finished and signed off before the next begins. 5. Benefit: clear milestones and thorough documentation; drawback: the client sees a working program only near the end, so misunderstood requirements are costly to fix. 6. Each iteration passes through design, coding and testing again for the features being added or refined. 7. The total time and cost are hard to predict at the start. 8. An early working model of a program, or part of one, used to get user feedback. 9. Any two: quick prototypes; continuous user involvement and feedback; reuse of existing components; modules developed in parallel; less up-front planning. 10. It is large and safety-critical, so it needs complete analysis, detailed design and documentation, which RAD's speed and limited documentation do not provide. 11. RAD (or iterative), because a first version is needed quickly and users' comments are used to refine it. 12. Design.
