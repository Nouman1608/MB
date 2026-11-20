---
title: "OCR A Level Business (H431): Project management"
seoTitle: "OCR A Level Business Project Management Guide"
resourceType: "study-guides"
subject: "business"
level: ["a-levels"]
topic: "Operational strategy"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H431"]
syllabusSeries: "Version 2.1 (January 2026), for first assessment in 2017; final assessment summer 2027"
order: 4.06
syllabusTopics:
  - qualification: "a-level"
    topic: "operational-strategy-ocr-alevel-business"
    subtopic: "project-management-ocr-alevel-business"
description: "Study guide to project management for OCR A Level Business H431: Gantt charts, critical path analysis, float, PERT, and qualitative factors, with worked networks."
author: "marlbridge-academic-team"
reviewer: "salman-ahmad"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to salman-ahmad (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers the content Project management in the area of study The production process of the OCR A Level Business (H431) specification, Version 2.1 (January 2026), final assessment summer 2027. It is numbered 4.6 on this site; the specification does not number its content. The [operational strategy study guide](/resources/ocr-a-level-business-operational-strategy/) gives the overview of the whole topic. This page goes further: it builds a Gantt chart and a network from one set of activities, works through the forward and backward passes, float and the critical path, repeats the work with PERT estimates, and covers the qualitative factors. All businesses and figures are invented.

Use it with the [project management revision notes](/resources/ocr-a-level-business-h431-project-management-revision-notes/) and the [project management practice questions](/resources/ocr-a-level-business-h431-project-management-practice/). The course hub is [OCR A Level Business](/boards/ocr/a-level/business/).

## What the specification asks for

| Learners should be able to | Covered below |
|---|---|
| explain what is meant by project management and the reasons for using it | What project management is |
| explain how and why quantitative methods are used: Gantt charts, CPA, PERT | The quantitative methods |
| complete and interpret Gantt charts, including duration and overlap | Worked example 1 |
| calculate and interpret EST, LFT, total float and free float, and identify the critical path | Worked example 2 |
| calculate and interpret O, P, M, expected time, total float and free float, and the critical path using PERT | Worked example 3 |
| evaluate the usefulness and importance of quantitative methods | Worked example 4; Evaluating the methods |
| explain and evaluate the qualitative factors affecting project management | Qualitative factors |

## What project management is

A **project** is a one-off set of activities with a start, an end and a goal, such as opening a new shop, launching a product or installing a new computer system. **Project management** is the planning, organising and controlling of the resources, people and time needed to complete it on time, within budget and to the required quality.

Reasons for using it: to finish on time and within budget, to coordinate people and suppliers, to spot problems early and to cut the risk of costly delay.

## The quantitative methods

- **Gantt chart:** a bar chart showing each activity against a time scale. It shows duration, start and finish, and which activities **overlap**.
- **Critical path analysis (CPA):** a network diagram showing the order of activities and their dependencies, from which the shortest possible project time, the **critical path** and the spare time (**float**) are found.
- **PERT (programme evaluation and review technique):** uses CPA but with three time estimates for each activity to allow for uncertainty.

## Worked example 1: a Gantt chart

Hartley Cafes is fitting out a new branch. The activities, durations (in days) and what must be finished first are:

| Activity | Task | Days | Must follow |
|---|---|---|---|
| A | Design layout | 4 | none |
| B | Order and receive equipment | 5 | A |
| C | Recruit and train staff | 3 | A |
| D | Build and install counters | 6 | B |
| E | Install ovens and till system | 4 | B, C |
| F | Paint and decorate | 2 | D |
| G | Stock and test equipment | 5 | D, E |
| H | Final clean and opening | 3 | F, G |

The Gantt chart below draws each activity at its earliest start. **#** is the activity; **-** is the spare time it could slip without delaying the project; **.** is not active. Each column is one day.

```
Day   12345678901234567890123
A     ####...................
B     ....#####..............
C     ....###----............
D     .........######........
E     .........####--........
F     ...............##---...
G     ...............#####...
H     ....................###
```

**Reading it.** The project lasts **23 days**. B and C **overlap** on days 5 to 7, and D and E on days 10 to 13. C has four days of spare time, E two and F three. A, B, D, G and H have none.

## Worked example 2: critical path analysis

**Forward pass (earliest start time, EST).** An activity's EST is the latest of the earliest finish times of the activities before it. Earliest finish = EST + duration.

- A starts at 0 and finishes at 4. B and C both start at 4 and finish at 9 and 7.
- D starts at 9 and finishes at 15. E must wait for both B (9) and C (7), so EST = **9**, finish 13.
- F starts at 15 and finishes at 17. G must wait for D (15) and E (13), so EST = **15**, finish 20.
- H must wait for F (17) and G (20), so EST = **20**, finish 23.

**Backward pass (latest finish time, LFT).** H's LFT is the project length, 23. An activity's LFT is the earliest of the latest start times of the activities after it. Latest start = LFT − duration.

- H: latest start 20. G: LFT 20, latest start 15. F: LFT 20, latest start 18.
- E: LFT 15, latest start 11. D: LFT = smaller of 18 and 15 = **15**, latest start 9.
- C: LFT 11, latest start 8. B: LFT = smaller of D's 9 and E's 11 = **9**, latest start 4. A: LFT = smaller of 4 and 8 = **4**.

**Float.**

- **Total float** = LFT − EST − duration. It is the time an activity can be delayed without delaying the whole project.
- **Free float** = the earliest EST of the following activities − the activity's earliest finish. It is the delay possible without affecting any following activity's earliest start.

| Activity | Days | EST | LFT | Total float | Free float |
|---|---|---|---|---|---|
| A | 4 | 0 | 4 | 0 | 0 |
| B | 5 | 4 | 9 | 0 | 0 |
| C | 3 | 4 | 11 | 11 − 4 − 3 = **4** | 9 − 7 = **2** |
| D | 6 | 9 | 15 | 0 | 0 |
| E | 4 | 9 | 15 | 15 − 9 − 4 = **2** | 15 − 13 = **2** |
| F | 2 | 15 | 20 | 20 − 15 − 2 = **3** | 20 − 17 = **3** |
| G | 5 | 15 | 20 | 0 | 0 |
| H | 3 | 20 | 23 | 0 | 0 |

**Critical path.** Activities with zero total float are critical: **A, B, D, G, H**, with a length of 4 + 5 + 6 + 5 + 3 = **23 days**. Any delay to these delays the project.

**Interpretation.** Managers should watch the critical activities most closely and put the best staff on them. The float on the other activities can be used to move workers. For example, training can be delayed by up to two days without affecting anything else.

## Worked example 3: PERT

PERT uses three estimates for each activity: **optimistic (O)**, **most likely (M)** and **pessimistic (P)**. The **expected time** is a weighted average:

expected time = (O + 4M + P) ÷ 6

Hartley's managers are unsure of some durations.

| Activity | O | M | P | Expected time |
|---|---|---|---|---|
| A | 2 | 4 | 6 | (2 + 16 + 6) ÷ 6 = **4** |
| B | 3 | 5 | 7 | (3 + 20 + 7) ÷ 6 = **5** |
| C | 2 | 3 | 4 | (2 + 12 + 4) ÷ 6 = **3** |
| D | 4 | 6 | 14 | (4 + 24 + 14) ÷ 6 = **7** |
| E | 3 | 4 | 5 | (3 + 16 + 5) ÷ 6 = **4** |
| F | 1 | 2 | 3 | (1 + 8 + 3) ÷ 6 = **2** |
| G | 4 | 5 | 12 | (4 + 20 + 12) ÷ 6 = **6** |
| H | 2 | 3 | 4 | (2 + 12 + 4) ÷ 6 = **3** |

Using the expected times in the same network:

- ESTs: A 0, B 4, C 4, D 9, E 9, F 16, G 16, H 22, so the project takes 22 + 3 = **25 days**. LFTs: H 25, G 22, F 22, E 16, D 16, C 12, B 9, A 4.
- Total float: C = 12 − 4 − 3 = **5**; E = 16 − 9 − 4 = **3**; F = 22 − 16 − 2 = **4**; others 0. Free float: C = 9 − 7 = **2**; E = 16 − 13 = **3**; F = 22 − 18 = **4**.
- Critical path: **A, B, D, G, H** again, now 4 + 5 + 7 + 6 + 3 = **25 days**.

**Interpretation.** The pessimistic estimates for D (14) and G (12) push the expected time up from the most likely 6 and 5 to 7 and 6, raising the project from 23 to 25 days. PERT warns that these two activities are the main source of uncertainty, so Hartley might arrange a back-up builder for D. Its weakness is that O, M and P are still estimates.

## Worked example 4: delays and speeding up

Using the CPA network (23 days):

- **Delay C by 3 days:** C has 4 days of total float, so the project is not delayed.
- **Delay C by 5 days:** the delay uses the 4 days of float and the extra day makes the project **24 days**.
- **Delay D by 2 days:** D is critical, so the project becomes **25 days**.
- **Delay E by 3 days:** float is 2, so the project is delayed by 1 day to **24 days**.

**Speeding up the project.** Hartley is charged £1,500 for each day of delay and can shorten D by up to 2 days at an extra cost of £1,200 a day. Shortening D by 2 days makes the project **21 days**. The saving is 2 × £1,500 = £3,000 against a cost of 2 × £1,200 = £2,400, a net gain of **£600**. But the path A, B, E, G, H now also totals 4 + 5 + 4 + 5 + 3 = 21 days, so it is critical too, and shortening D by a third day would save nothing. The critical path can change when time is saved.

## Evaluating the methods

| Method | Usefulness | Limits |
|---|---|---|
| Gantt chart | Easy to read; shows progress, overlap and duration | Does not show dependencies clearly; hard to update for large projects |
| CPA | Finds the critical path and float; shows where delay matters; supports resource planning | Assumes durations are certain; complex for big networks; needs accurate data |
| PERT | Allows for uncertainty; highlights risky activities | Estimates of O, M and P are subjective; more complex |

Quantitative methods matter most for large, complex, costly projects, and where delay carries a penalty. Stakeholders gain too: clients get realistic dates, staff know the schedule and suppliers know when to deliver. But a plan is only as good as its inputs.

## Qualitative factors

Numbers do not capture everything. Qualitative factors affecting project management include:

- **leadership and communication:** a clear leader and regular meetings reduce errors;
- **team skills and motivation:** an experienced, motivated team works faster; conflict slows it;
- **stakeholder expectations:** a client who changes requirements causes delay;
- **supplier reliability:** late deliveries delay critical activities;
- **external factors:** weather, laws, planning permission;
- **resources and culture:** senior support, and whether staff are shared with other projects;
- **quality:** deadline pressure may lower it.

These matter because a network assumes that each activity takes its stated time, while in practice a poor team or late delivery may add days.

## Common mistakes

- Forgetting to use the largest earliest finish when an activity has two predecessors.
- Using the largest latest start, instead of the smallest, in the backward pass.
- Confusing total float with free float.
- Using the most likely time instead of the expected time in PERT.

## Exam technique

Show the forward and backward pass in a table, state the critical path and the project duration, interpret the float, and relate any evaluation to the project in the case. For PERT, show the expected time calculation for each activity.

## Official syllabus

OCR, Advanced GCE in Business (H431), specification Version 2.1 (January 2026), for first assessment in 2017: area of study The production process, content Project management.
