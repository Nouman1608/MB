---
title: "OCR A Level Business (H431): Project management -- Revision Notes"
seoTitle: "OCR A Level Business Project Management Notes"
resourceType: "revision-notes"
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
description: "Revision notes on project management for OCR A Level Business H431: Gantt charts, CPA, float, PERT, qualitative factors, evaluation and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes on the Project management content (4.6 on this site) in The production process, OCR A Level Business H431, Version 2.1 (January 2026), final assessment summer 2027. Full explanations and the Hartley Cafes worked network are in the [project management study guide](/resources/ocr-a-level-business-h431-project-management/); test yourself with the [project management practice questions](/resources/ocr-a-level-business-h431-project-management-practice/). The overview of the whole topic is in the [operational strategy revision notes](/resources/ocr-a-level-business-operational-strategy-revision-notes/).

## The specification points

1. Explain what is meant by project management, and the reasons for using it.
2. Explain how and why Gantt charts, critical path analysis (CPA) and PERT are used.
3. Complete and interpret Gantt charts, including duration and overlap.
4. Calculate and interpret EST, LFT, total float and free float, and identify the critical path using CPA.
5. Calculate and interpret O, P, M, expected time, total float and free float, and identify the critical path using PERT.
6. Evaluate the usefulness and importance of quantitative methods.
7. Explain and evaluate the qualitative factors affecting project management.

## Core recall

### Project and project management

A project is a one-off set of activities with a start, an end and a goal. Project management plans, organises and controls resources, people and time to finish on time, within budget and to quality. Reasons: meet deadlines; coordinate people and suppliers; spot problems early; use resources well; show progress; cut the risk of delay.

### Gantt chart

- Bars against a time scale: start, finish, duration.
- Overlap: activities running at the same time.
- Completing it: place each bar at its earliest start (or planned start) and length.
- Interpreting it: total project length, which tasks overlap, where there is slack.

### CPA: step by step

1. List activities, durations and predecessors.
2. Forward pass: EST = latest earliest finish of the predecessors (start at 0). Earliest finish = EST + duration.
3. Project duration = the largest earliest finish.
4. Backward pass: LFT of the last activity = project duration. For others, LFT = smallest latest start of the following activities. Latest start = LFT − duration.
5. Total float = LFT − EST − duration.
6. Free float = smallest EST of following activities − earliest finish.
7. Critical path = activities with total float of 0. Its length is the project duration.

### Float: meaning

| Float | Meaning |
|---|---|
| Total float | Delay possible without delaying the project |
| Free float | Delay possible without affecting any following activity's earliest start |

Free float is never greater than total float.

### PERT

- Three estimates per activity: optimistic (O), most likely (M), pessimistic (P).
- Expected time = (O + 4M + P) ÷ 6.
- Use expected times in the network, then find EST, LFT, floats and the critical path as in CPA.
- A wide gap between O and P shows risk. Estimates are still subjective.

### Evaluation

| Method | Usefulness | Limits |
|---|---|---|
| Gantt | Easy to read; shows overlap and progress | Dependencies unclear; hard to update |
| CPA | Critical path and float; resource planning | Assumes certain durations; complex for large networks |
| PERT | Allows for uncertainty | Estimates subjective; more complex |

Most important for large, complex, costly projects, and where delay carries a penalty.

### Qualitative factors

Leadership and communication; team skills and motivation; stakeholder expectations and changes; supplier reliability; external factors (weather, law, permissions); culture and resources (sharing staff with other projects); risk and quality under deadline pressure.

## Quick worked reminder

Hartley Cafes (invented): A 4, B 5, C 3, D 6, E 4, F 2, G 5, H 3 days. ESTs: A 0, B 4, C 4, D 9, E 9, F 15, G 15, H 20. Duration 23. Critical path A, B, D, G, H. Float: C total 4, free 2; E total 2, free 2; F total 3, free 3. Delay C by 5: project 24. Delay D by 2: 25.

PERT expected times (A to H): 4, 5, 3, 7, 4, 2, 6, 3 give 25 days; critical path unchanged. Expected time for D = (4 + 24 + 14) ÷ 6 = 7.

## Key terms

| Term | Meaning |
|---|---|
| Critical path | The longest path through the network; activities with no float |
| EST | Earliest start time of an activity |
| LFT | Latest finish time without delaying the project |
| Total float | LFT − EST − duration |
| Free float | Smallest following EST − earliest finish |
| Expected time | (O + 4M + P) ÷ 6 in PERT |
| Dependency | An activity that must finish before another can start |
| Crashing | Speeding up an activity at extra cost |

## Evaluation prompts

- How many activities are critical, and could a delay on one of them be recovered?
- Is the saving from finishing earlier worth the extra cost, and does the critical path change?
- How reliable are the time estimates, and is there a gap between O and P?
- Which qualitative factors (team, suppliers, weather) threaten the plan?
- Is the project large and complex enough to justify the cost of the planning?
- Finish with a judgement about the project in the case.

## Exam traps

- Use the largest earliest finish when there are two predecessors.
- For LFT use the smallest latest start of the following activities.
- Total float is not free float.
- Use expected time, not most likely time, in PERT.
- Mention qualitative factors in evaluation.

## Self-test

1. Define a project.
2. Give two reasons for using project management.
3. What does a Gantt chart show?
4. Activity X: EST 6, duration 4, LFT 15. Find total float.
5. Which activities form the critical path?
6. Activity Y finishes (earliest) at 12; the next activity can start at 14. Find the free float.
7. O = 3, M = 6, P = 15. Find the expected time.
8. Activity with float 2 is delayed by 3 days. By how much is the project delayed?
9. Give one limit of CPA.
10. Give one advantage of PERT over CPA.
11. Give two qualitative factors that could delay a project.
12. Total float is 5. Could free float be 7?

### Answers

1. A one-off set of activities with a start, an end and a goal.
2. Any two: finish on time; stay in budget; coordinate people and suppliers; spot problems early; use resources efficiently.
3. Each activity's start, finish and duration against a time scale, and which activities overlap.
4. 15 − 6 − 4 = **5**.
5. The activities with zero total float.
6. 14 − 12 = **2**.
7. (3 + 24 + 15) ÷ 6 = 42 ÷ 6 = **7**.
8. **1 day** (3 − 2).
9. Any one: assumes certain durations; complex for big networks; needs accurate data.
10. It allows for uncertainty by using three estimates.
11. Any two: poor communication; low team skill; late suppliers; weather; changing client requirements.
12. **No**: free float cannot exceed total float.

## Official syllabus

OCR, Advanced GCE in Business (H431), specification Version 2.1 (January 2026): area of study The production process, content Project management.
