---
title: "Cambridge A Level Information Technology (ICT): 15.3 Tools and techniques for project management tasks (9626) -- Revision Notes"
seoTitle: "Cambridge A Level IT 9626: Gantt, PERT, CPM Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on section 15.3 of Cambridge A Level IT 9626: Gantt charts, PERT, the forward and backward pass, float, critical path and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

For full explanations and a worked example, read the [section 15.3 study guide](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques/) first. These notes condense **section 15.3 Tools and techniques for project management tasks** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content and appears in Paper 3 (Advanced Theory), where calculators are not allowed.

Test yourself with the [practice questions](/resources/cambridge-a-level-ict-9626-project-management-tools-techniques-practice/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) has every topic, and the [free diagnostics](/diagnostics/) show where to start.

## Key terms

| Term | Meaning |
|---|---|
| **Work breakdown structure (WBS)** | The project split into deliverables, then into tasks small enough to estimate and assign |
| **Task / activity** | A piece of work with a duration |
| **Deliverable** | Something handed over at the end of a piece of work, such as an approved design |
| **Dependency** | A task that cannot start until another has finished (the other is its predecessor) |
| **Milestone** | A key point with no duration, such as "testing complete" |
| **End point** | The finish of the last task; it fixes the project duration |
| **Float** | Spare time: LS - ES (or LF - EF). Zero float means critical |
| **Critical path** | The longest path of dependent activities. It sets the shortest possible project time |

## Gantt charts

- Horizontal bar chart: tasks down the side, time across the top.
- Bar start = planned start, bar end = planned finish, bar length = duration.
- Milestones are diamonds or zero-length bars. Arrows or bar position show dependencies.
- Shading and a "today" line show progress.

**Create:** list tasks, estimate durations, record predecessors, place each bar at the earliest allowed start, add milestones.
**Interpret:** draw a vertical line to see which tasks are running that day; look for bars that fall behind their planned shading.

| Advantages | Disadvantages |
|---|---|
| Simple, quick to read | Dependencies unclear on large projects |
| Shows progress and parallel tasks | Does not show float or the critical path clearly |
| Good for reporting to stakeholders | Must be redrawn when the plan changes |

## PERT and CPM

PERT: a network of tasks (boxes) joined by arrows showing dependencies. CPM: using the durations to find the critical path.

**Forward pass** (start at day 0)
- ES = largest EF of the predecessors (the larger at a merge)
- EF = ES + duration
- The largest final EF is the project duration

**Backward pass** (start at the project duration)
- LF = smallest LS of the successors (the smaller at a split)
- LS = LF - duration

**Float** = LS - ES. Float 0 means the task is on the critical path.

### Mini example

| Task | Duration | Depends on |
|---|---|---|
| P | 2 | none |
| Q | 5 | P |
| R | 3 | P |
| S | 4 | Q, R |

Forward: P 0 to 2. Q 2 to 7. R 2 to 5. S starts at the larger of 7 and 5, so 7 to 11. Duration 11.
Backward: S LS 7. Q LF 7, LS 2. R LF 7, LS 4. P LF is the smaller of 2 and 4, so 2, LS 0.
Float: P 0, Q 0, R 4 - 2 = 2, S 0. Critical path P, Q, S (2 + 5 + 4 = 11).

R can slip 2 days without delaying the project. A 3-day slip delays the end by 1 day.

## Using critical path analysis

- **Authorising work:** release critical tasks first and watch their start dates; non-critical work can wait up to its float.
- **Costings:** pay extra to speed up critical tasks only; speeding up a task with float saves no time. Costs by task and date give a budget over time.
- **Allocating resources:** put people and equipment on critical tasks first; move them from tasks with float. Recalculate after changes, because the critical path can move.

## Advantages and disadvantages

| Tool | Advantages | Disadvantages |
|---|---|---|
| **Gantt** | Easy to read and share; shows progress | Weak on dependencies and float |
| **PERT** | Clear dependencies; shows parallel tasks | Hard to read when large; needs good estimates |
| **CPM** | Shows critical tasks and float; supports cost and resource decisions | Only as accurate as the estimates; needs recalculating |

## Must-know distinctions

- **Gantt** (when tasks happen) vs **PERT** (how tasks depend on each other).
- **ES/EF** (forward pass, earliest) vs **LS/LF** (backward pass, latest).
- **Float** (spare time on a task) vs **duration** (time the task takes).
- **Milestone** (a point in time, zero length) vs **task** (has a duration).
- **Critical task** (zero float) vs "important task" (a matter of opinion).

## Quick self-test

1. What does the length of a bar on a Gantt chart show?
2. State the formula for float using LS and ES.
3. At a merge point, do you take the larger or smaller EF on the forward pass?
4. Tasks A (3 days) and B (5 days) both follow task X and both must finish before task Y. Which task has float, and how much?
5. A task has ES 6, duration 4 and LF 14. What is its float?
6. A path has tasks of 2, 6 and 3 days one after another. How long is the path?
7. Why is speeding up a task with float a poor use of money?
8. Name two ways a PERT network helps a manager allocate resources.
9. A task on the critical path is delayed by 3 days. By how much is the project delayed?
10. Give one disadvantage of a Gantt chart for a large project.

### Answers

1. The duration of the task.
2. Float = LS - ES (or LF - EF).
3. The larger.
4. Task A has float. B is the longer path, so it is critical. A can slip by 5 - 3 = 2 days.
5. LS = 14 - 4 = 10. Float = 10 - 6 = 4 days.
6. 2 + 6 + 3 = 11 days.
7. The project does not finish any sooner, because the task was never on the critical path.
8. Send people and equipment to critical tasks first; move them away from tasks that have float.
9. By 3 days, because it has no float.
10. Dependencies are hard to see, and float and the critical path are not shown clearly.

## Where marks are usually lost

- Adding every duration together instead of following the longest dependent path.
- Not stating the project duration after the forward pass.
- Using the smaller EF at a merge or the larger LS at a split.
- Defining float as "the time a task takes".
- Describing a Gantt chart without mentioning bars, time axis or dependencies.
- Giving only advantages when the command word is "discuss" or "evaluate".
- Forgetting to link a use of the critical path (authorising, costing, resources) to the scenario.

## Frequently asked questions

**What is the critical path?**
The critical path is the longest path of dependent activities through the network. Its length is the shortest time in which the project can finish, and its tasks have zero float.

**How is float calculated?**
Float is latest start minus earliest start for a task, which equals latest finish minus earliest finish. It is the time the task can slip without delaying the project.

**Why use both a Gantt chart and a PERT chart?**
The PERT network and CPM calculation show dependencies, float and the critical path, while the Gantt chart presents the resulting schedule in a form that is easy to read and share.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 15.3: Tools and techniques for project management tasks.
