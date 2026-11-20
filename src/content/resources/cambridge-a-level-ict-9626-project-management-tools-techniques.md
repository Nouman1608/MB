---
title: "Cambridge A Level Information Technology (ICT): 15.3 Tools and techniques for project management tasks (9626)"
seoTitle: "Cambridge A Level IT 9626: Gantt, PERT and CPM Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Project management"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 15.3
syllabusTopics:
  - qualification: "a-level"
    topic: "project-management"
  - qualification: "a-level"
    topic: "project-management"
    subtopic: "tools-and-techniques-for-project-management-tasks"
description: "Study guide to section 15.3 of Cambridge A Level IT 9626: building and reading Gantt charts, PERT networks and the critical path method, with a fully worked example."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **15.3 Tools and techniques for project management tasks** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 3 (Advanced Theory) is based on sections 12 to 21, and calculators are not allowed, so every calculation here is done by hand with small whole numbers.

The syllabus asks you to be able to:

- create, use and interpret **Gantt charts**
- create, use and interpret **PERT charts**, and use **critical path method (CPM)** calculations to find the longest path of dependent activities
- recognise the components of a PERT network: activities or tasks, work breakdown structures (WBS), timings, float, end points, milestones, dependencies and deliverables
- use critical path analysis for work flow control, such as authorising work, costings and allocating resources
- give advantages and disadvantages of Gantt charts, PERT charts and CPM.

The wider topic is covered in the [project management study guide](/resources/a-level-cambridge-ict-project-management/). Use this page with the [revision notes](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## Why projects need planning tools

A project is a one-off piece of work with a start, an end and a goal. Examples are building a school booking app or moving an office to new computers. Even a small project has many tasks. Some can run at the same time, and some cannot start until others finish. A project manager needs to answer three questions:

- When will each task happen?
- Which tasks decide the finish date?
- Which tasks have spare time, and which have none?

A Gantt chart answers the first question well. A PERT network with a critical path calculation answers the second and third.

## Breaking the project down: the work breakdown structure

Before any chart is drawn, the project is split into smaller pieces. A **work breakdown structure (WBS)** divides the project into deliverables, then each deliverable into tasks (also called activities). A **deliverable** is something that is handed over, such as a signed-off design or a tested program. Work continues until each task is small enough to estimate in days and give to one person or team.

For a school app project the WBS might have the deliverables "requirements", "design", "software" and "launch". Under "software", the tasks might be "build interface", "build database" and "connect the two".

## Gantt charts

A **Gantt chart** is a horizontal bar chart of the schedule.

- The **left column** lists the tasks.
- The **horizontal axis** is time, in days, weeks or months.
- Each task is a **bar**. Its left edge is the planned start and its right edge is the planned finish. The bar length is the duration.
- A **milestone** (a key point such as "design approved") is shown as a diamond or a bar of zero length.
- **Dependencies** are shown by arrows from the end of one bar to the start of the next, or by the position of the bars.
- Progress can be shown by shading part of each bar, with a vertical "today" line.

### Creating a Gantt chart

1. List the tasks from the WBS.
2. Estimate each duration.
3. Decide each task's predecessors, the tasks that must finish first.
4. Place each bar at the earliest point its predecessors allow.
5. Add milestones and, if wanted, the people or resources for each bar.

### Using and interpreting a Gantt chart

Read down the chart to see what should be happening on any day: draw a vertical line and note every bar it crosses. Bars that overlap run in parallel. A task that starts after another has finished is dependent on it. If a task is behind its shading, the manager can see at once which later tasks are at risk.

A Gantt chart is easy to read and to share with stakeholders. Its weakness is that it does not clearly show which delays will move the end date. Two tasks may look equally important when only one is critical.

## PERT charts and the critical path method

A **Performance Evaluation and Review Technique (PERT)** chart is a network diagram. In the activity-on-node form used here, each task is a box and arrows show dependencies. The **critical path method (CPM)** uses the durations in the network to find the longest path from start to end. That path decides the shortest time in which the project can be completed.

Each box holds the task name, its duration and four times:

| Term | Meaning |
|---|---|
| **Earliest start (ES)** | The earliest the task can begin: the largest earliest finish of its predecessors |
| **Earliest finish (EF)** | ES + duration |
| **Latest finish (LF)** | The latest the task can end without delaying the project |
| **Latest start (LS)** | LF - duration |
| **Float** | LS - ES (the same as LF - EF): how long the task can slip without delaying the project |

The **end point** is the finish of the final task. A **milestone** is a point in the network with no duration, such as "all testing complete". An activity on the **critical path** has zero float.

### The two passes

1. **Forward pass.** Start at day 0. For each task, ES is the largest EF of its predecessors, and EF = ES + duration. The largest EF at the end is the project duration.
2. **Backward pass.** Start from the project duration. For each task, LF is the smallest LS of its successors, and LS = LF - duration.
3. **Float** = LS - ES. Tasks with float 0 form the critical path.

### Worked example

A school builds a small app. Times are in days and the project starts at day 0.

| Task | Duration | Depends on |
|---|---|---|
| A Gather requirements | 3 | none |
| B Design screens | 4 | A |
| C Design database | 5 | A |
| D Build interface | 6 | B |
| E Build database | 4 | C |
| F Connect interface and database | 3 | D, E |
| G Write user guide | 4 | B |
| H Test the app | 5 | F |
| I Launch and train staff | 2 | G, H |

**Forward pass.**

- A: ES 0, EF 3.
- B: ES 3, EF 7. C: ES 3, EF 8.
- D: ES 7, EF 13. E: ES 8, EF 12. G: ES 7, EF 11.
- F needs D (EF 13) and E (EF 12), so ES is the larger, 13. EF 16.
- H: ES 16, EF 21.
- I needs G (EF 11) and H (EF 21), so ES 21. EF 23.

The project takes **23 days**.

**Backward pass** (start with LF of I = 23).

- I: LF 23, LS 21.
- H: LF 21, LS 16. G: LF is LS of I, 21, so LS 17.
- F: LF 16, LS 13.
- D: LF 13, LS 7. E: LF 13, LS 9.
- B has two successors, D (LS 7) and G (LS 17). LF is the smaller, 7. LS 3.
- C: LF 9, LS 4.
- A has successors B (LS 3) and C (LS 4). LF 3, LS 0.

**Float.**

| Task | ES | EF | LS | LF | Float |
|---|---|---|---|---|---|
| A | 0 | 3 | 0 | 3 | 0 |
| B | 3 | 7 | 3 | 7 | 0 |
| C | 3 | 8 | 4 | 9 | 1 |
| D | 7 | 13 | 7 | 13 | 0 |
| E | 8 | 12 | 9 | 13 | 1 |
| F | 13 | 16 | 13 | 16 | 0 |
| G | 7 | 11 | 17 | 21 | 10 |
| H | 16 | 21 | 16 | 21 | 0 |
| I | 21 | 23 | 21 | 23 | 0 |

The **critical path** is A, B, D, F, H, I (3 + 4 + 6 + 3 + 5 + 2 = 23). Check: it is the longest path through the network, and no other path reaches 23. The path A, C, E, F, H, I adds up to 3 + 5 + 4 + 3 + 5 + 2 = 22, one day short, which is why C and E have 1 day of float.

### Interpreting the result

- If task C takes 1 day longer, the project still finishes on day 23, because C has 1 day of float.
- If task C takes 2 days longer, it uses its 1 day of float and the project finishes one day late, on day 24.
- If task D takes 2 days longer, the project is 2 days late, because D has no float.
- The user guide (G) has 10 days of float, so it can start any time up to day 17.

## Using critical path analysis to manage work

The syllabus names three uses.

- **Authorising work.** Work on critical tasks is authorised first, and the manager watches those start dates closely. A non-critical task can be released later without harm, up to its float.
- **Costings.** Costs are tied to tasks and their dates, so a budget can be given by period. Shortening the project ("crashing") means paying extra for the critical tasks only. Paying to speed up a non-critical task saves no time.
- **Allocating resources.** People and equipment should go to critical tasks first. A resource can be moved from a task with float to a critical task. When a non-critical task uses up its float, the critical path may change and the manager must recalculate.

## Advantages and disadvantages

| Tool | Advantages | Disadvantages |
|---|---|---|
| **Gantt chart** | Simple and quick to read; shows progress and parallel tasks; easy to share with stakeholders | Dependencies are hard to see on large projects; does not show float or the critical path clearly; must be redrawn when the plan changes |
| **PERT chart** | Shows all dependencies clearly; identifies tasks that can run in parallel; helps estimate the shortest time | Complicated for large projects; harder for non-specialists to read; relies on accurate duration estimates |
| **CPM** | Identifies critical tasks and float; shows where delay matters and where it does not; supports decisions on cost and resources | Results are only as good as the estimates; critical path can change during the project; needs recalculation after every change |

In practice managers often use both: the PERT network and CPM to analyse, and a Gantt chart to show the plan.

## Common errors

- Adding the durations of all tasks instead of following the longest dependent path.
- Taking the smaller EF at a merge point on the forward pass. Use the larger.
- Taking the larger LS at a split point on the backward pass. Use the smaller.
- Saying "critical tasks are the most important tasks". They are the ones with zero float.
- Forgetting that more than one critical path may exist.
- Describing float as "extra time added by the manager". It is spare time that already exists in the network.

## Frequently asked questions

**What is the difference between a Gantt chart and a PERT chart?**
A Gantt chart is a bar chart that shows when each task is planned to start and finish. A PERT chart is a network that shows dependencies between tasks and allows the critical path to be calculated.

**What is float in project management?**
Float is the length of time a task can be delayed without delaying the whole project. It is calculated as latest start minus earliest start. Tasks on the critical path have zero float.

**How do you find the critical path?**
Do a forward pass to find the earliest times, a backward pass to find the latest times, and calculate float. The tasks with zero float make up the critical path, which is the longest path of dependent activities.

**Can a project have more than one critical path?**
Yes. If two separate paths through the network both have the longest total duration, both are critical and a delay on either one delays the project.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 15.3: Tools and techniques for project management tasks.
