---
title: "Cambridge A Level Information Technology (ICT): Project management (9626) -- Revision Notes"
seoTitle: "9626 A Level IT: Project Management Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Project management"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 15
syllabusTopics:
  - qualification: "a-level"
    topic: "project-management"
description: "Condensed revision notes on project management for Cambridge A Level IT 9626: life cycle stages, software types, Gantt, PERT and float."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, use the [project management study guide](/resources/a-level-cambridge-ict-project-management/). These notes condense **topic 15, Project management** (sections 15.1–15.3) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3). It is **A Level only** content, and the syllabus states that Paper 3 (Advanced Theory) questions are based on sections 12–21. Calculators are not allowed in Paper 3.

Test yourself with the [practice questions](/resources/a-level-cambridge-ict-project-management-practice/), see the whole course on the [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/), tick outcomes off on the [9626 checklist](/checklists/cambridge/a-level/ict/), and check your gaps with a [free diagnostic](/diagnostics/).

## 15.1 The stages of the project life cycle

### The four stages at a glance

| Stage | Key activities (syllabus terms) | Typical output |
|---|---|---|
| Initiation | Identify objectives; resources required; success criteria; stakeholders and their needs; project scope; high-level schedule | Approved project outline |
| Planning | Detailed planning of resources; scheduling of tasks | Detailed plan, Gantt/PERT charts, budget |
| Execution and monitoring | Implement the plan; monitor progress against time, cost and quality; report to stakeholders | Deliverables, progress reports |
| Close | Completion and review; reasons for reviews | Sign-off, review report, lessons learned |

### Definitions

- **Objective**: what the project must achieve. Make it specific and measurable.
- **Success criteria**: the measures used at the end to judge whether the objectives were met.
- **Stakeholder**: a person or group affected by, or with an interest in, the project (client, managers, users, customers, team).
- **Scope**: the boundary of the project, what is in and what is out. Uncontrolled growth is **scope creep**.
- **High-level schedule**: main phases and key dates only.
- **Resources**: people, skills, hardware, software, money, time, premises.

### Must-know distinctions

- **Initiation vs planning**: initiation decides *what* and *whether*; planning decides *how* and *when*, task by task.
- **Objective vs success criterion**: "launch online booking" is an objective; "60% of bookings online within two months" is a success criterion.
- **Monitoring the three constraints**: *time* (against the schedule), *cost* (against the budget), *quality* (against agreed standards, for example by testing).

### Why projects are reviewed at close

1. Check objectives and success criteria were met.
2. Compare actual time and cost with the plan.
3. Find what went well and what went wrong.
4. Record lessons to improve future planning.
5. Confirm the client and other stakeholders are satisfied.

## 15.2 Project management software

### Types

| Type | One-line definition | Key plus | Key minus |
|---|---|---|---|
| Desktop | Installed on one computer | Works offline | Hard to share |
| Web-based | Runs in a browser, data online | One live version anywhere | Needs internet; ongoing fees |
| Mobile | App on phone/tablet | Instant updates on the move | Small screen, fewer features |
| Personal | Manages one person's own tasks | Simple | Not for teams |
| Single-user | One manager controls the plan | Cheap, easy | Others depend on the manager |
| Collaborative | Many users share a live plan | Everyone sees current status | Training and permissions needed |

### Uses (learn all six)

| Use | What the software does |
|---|---|
| Planning | Stores tasks, durations, dependencies; draws charts |
| Scheduling of tasks | Calculates dates and critical path; moves dependent tasks automatically |
| Allocation of resources | Assigns people and equipment; flags over-allocation |
| Costings | Totals budgets; compares actual with planned cost |
| Communication | Notifications, messages, shared files, automatic reports |
| Collaborative working and decisions | Several users edit one plan and decide from the same live data |

### Using software overall

- **For**: automatic recalculation, fewer errors, clashes flagged, quick reports, shared information.
- **Against**: cost, training, set-up and update time, only as good as the data entered, overkill for small projects, dependence on the system.

## 15.3 Tools and techniques

### Gantt chart

Tasks down the side, time along the top, one bar per task from start to end. Read off: start and end dates, tasks running at the same time, project length, milestones, and progress against today's date.

**Method in steps: creating a Gantt chart**

1. List every task with its duration and the tasks it depends on.
2. Draw the time scale (days or weeks) along the top.
3. Start each bar no earlier than the end of every task it depends on.
4. Mark milestones and the current date.

**Reading progress**: if a 4-week task is planned for weeks 2–5 and today is the end of week 3, it should be half done. If a quarter is done, it is about one week behind. Check whether any later task depends on it: if so, that task will also start late unless resources are added.

### PERT chart and CPM components

| Component | Meaning |
|---|---|
| Activity/task | A unit of work with a duration |
| Work breakdown structure (WBS) | The project split into smaller and smaller pieces of work |
| Timings | Duration, EST, EFT, LST, LFT |
| Float | Delay allowed without delaying the project |
| End points | Start and finish of the network |
| Milestone | A significant point, zero duration |
| Dependency | An activity that must wait for another to finish |
| Deliverable | A product of an activity or phase |

**Method in steps: creating a PERT chart**

1. Draw a start node.
2. Add a box for each activity, showing its duration.
3. Draw an arrow from each activity to every activity that depends on it.
4. Join the final activities to a finish node, then add EST, LST and float to each box.

### Timing formulas

| Quantity | Rule |
|---|---|
| EFT | EST + duration |
| EST (with several predecessors) | **Largest** EFT of the predecessors |
| Project duration | Largest EFT in the network |
| LST | LFT − duration |
| LFT (with several successors) | **Smallest** LST of the successors |
| Float | LST − EST = LFT − EFT = LFT − EST − duration |
| Critical activity | Float = 0 |

### Method in steps: critical path

1. Forward pass from 0, taking the largest EFT where paths join.
2. Project duration = final EFT.
3. Backward pass from the project duration, taking the smallest LST where paths split.
4. Float = LST − EST for each activity.
5. Critical path = the chain of zero-float activities from start to finish. Check that its durations add up to the project duration.

### Worked reminder

Activities (days): A 2; B 3 after A; C 5 after A; D 1 after B; E 1 after C and D.

```
Forward:  A 0-2   B 2-5   C 2-7   D 5-6   E 7-8   (E waits for larger of 7 and 6)
Duration: 8 days
Backward: E LST 7   C LST 2   D LST 6   B LST 3   A LST 0
Float:    B 1, D 1; A, C, E 0
Critical path: A -> C -> E   (2 + 5 + 1 = 8)
```

### Critical path analysis in management

- **Authorising work**: approve an activity once its predecessors are complete; know its latest start.
- **Costings**: attach costs to activities to know when money is spent; release budget stage by stage.
- **Allocating resources**: move staff from activities with float to critical ones; delay non-critical work to avoid clashes.

### Advantages and disadvantages

| Tool | For | Against |
|---|---|---|
| Gantt | Easy to read; dates and progress clear | Dependencies and float not clear; cluttered when large |
| PERT | Dependencies and parallel tasks clear | Slow to draw; hard for non-specialists |
| CPM | Minimum duration, critical activities, float | Depends on accurate estimates; recalculate after changes |

## Quick self-test

1. State two items decided at project initiation.
2. Give the difference between an objective and a success criterion.
3. State the three things progress is monitored against during execution.
4. Give two reasons for conducting a project review.
5. Name the type of project management software that lets many users update one live plan.
6. State one disadvantage of mobile project management software.
7. State one thing a Gantt chart shows less clearly than a PERT chart.
8. An activity has EST 7, duration 5 and LFT 15. Calculate its float.
9. Two activities, ending at days 9 and 12, must both finish before activity K starts. State the EST of K.
10. What is the float of every activity on the critical path?
11. Explain why the critical path is the longest path.
12. State how critical path analysis helps with allocating resources.

### Answers

1. Any two: objectives, resources required, success criteria, stakeholders and their needs, scope, high-level schedule.
2. An objective is what the project must achieve; a success criterion is the measure used to judge whether it was achieved.
3. Time, cost and quality.
4. Any two: check objectives and success criteria were met; compare actual time and cost with the plan; identify what went well or badly; record lessons for future projects; confirm stakeholder satisfaction.
5. Collaborative.
6. Small screen limits detailed planning, or fewer features, or the device can be lost.
7. Dependencies between tasks (or float).
8. Float = 15 − 7 − 5 = **3 days**.
9. Day **12** (the larger EFT).
10. Zero.
11. Every activity on it must happen one after another, so the project cannot finish until the longest chain is complete.
12. Staff can be moved from activities with float to critical activities, so the project end date is protected.

## Where marks are usually lost

- Using the smallest EFT in the forward pass where two paths join.
- Using the largest LST in the backward pass where paths split.
- Calling the critical path the "shortest route" through the network.
- Listing a critical path whose durations do not add up to the project duration.
- Writing "the software makes it easier" without naming a use such as rescheduling dependent tasks.
- Mixing up single-user (one person controls a whole project) and personal (one person's own tasks).
- Describing initiation activities, such as setting scope, as part of planning.
- Giving only advantages when the question asks for advantages and disadvantages.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, version 3 (published July 2025), Cambridge International, part of Cambridge University Press & Assessment. Topic 15, Project management, sections 15.1–15.3.
