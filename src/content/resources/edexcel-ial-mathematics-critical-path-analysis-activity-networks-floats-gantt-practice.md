---
title: "Pearson Edexcel International Advanced Level Mathematics: Critical path analysis and scheduling (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths D1 Critical Path Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Critical path analysis: activity networks, floats, Gantt charts and scheduling"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 171
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-critical-path-analysis-edexcel-alevel-maths"
description: "Eleven original questions with worked answers on activity networks, dummies, float, cascade charts and scheduling for Pearson Edexcel IAL Maths D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover critical path analysis for Pearson Edexcel International Advanced Level Mathematics (YMA01), Specification Issue 3, April 2019: unit D1, section 4, topics 4.1 to 4.4. The specification states that D1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. Learn the methods first from the [study guide](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt/) and the [revision notes](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-revision-notes/). See also the [course hub](/boards/edexcel/a-level/mathematics/), the [checklist](/checklists/edexcel/a-level/mathematics/) and [all free 10-minute diagnostics](/diagnostics/).

Networks are described by their arcs, written as activity (start event → end event). Times are in days.

## Questions

**1.** A project has these activities: J (3 days, no predecessor), K (4 days, after J), L (5 days, after J), M (2 days, after K and L), N (6 days, after L only), P (3 days, after M and N). Describe an activity-on-arc network for the project, giving each arc as activity (start event → end event) and using a dummy where needed. **[5]**

**2.** An activity network has these arcs: A (1→2), B (1→3), C (2→4), D (2→5), E (3→5), F (4→6), G (5→6), H (6→7), and a dummy (3→4). Complete the precedence table, showing immediate predecessors only. **[4]**

**3.** A network has these arcs, with durations in days: A (1→2, 5), B (1→3, 7), C (2→4, 4), D (3→4, 6), E (3→5, 5), F (4→6, 7), G (5→6, 6), H (6→7, 3), and a dummy (4→5).

**(a)** Carry out a forward pass to find the earliest time of every event. **[3]**
**(b)** Carry out a backward pass to find the latest time of every event. **[3]**
**(c)** State the critical path and the minimum project time. **[2]**

**4.** Using your answers to question 3, find the total float of A, C, E and G. **[4]**

**5.** Draw a cascade (Gantt) chart for the project in question 3, showing the float on each non-critical activity. **[4]**

**6.** For the project in question 3:

**(a)** Find a lower bound for the number of workers needed to finish in the minimum project time. **[2]**
**(b)** Give a schedule with that number of workers, in which each activity is done by one worker without a break. **[3]**

**7.** Activities X and Y each have P as their only predecessor. Z has X and Y as its only predecessors. Explain why a dummy is needed when these activities are drawn in an activity-on-arc network, and say where it goes. **[3]**

**8.** In the project in question 3, state the effect on the minimum project time of:

**(a)** G taking 3 days longer than planned, **[2]**
**(b)** C taking 4 days longer than planned. **[1]**

**9.** A network has arcs A (1→2, 6), B (1→3, 9), C (2→4, x), D (3→4, 5) and E (4→5, 4), where x is a positive number of days.

**(a)** Take x = 6. Find the critical activities, the project time and the total float of C. **[3]**
**(b)** Find the range of values of x for which the minimum project time is 18 days. **[2]**
**(c)** Take x = 11. Find the project time and the total float of D. **[2]**

**10.** A project has the following precedence table.

| Activity | Duration | Immediate predecessors |
|---|---|---|
| A | 4 | none |
| B | 6 | none |
| C | 7 | A |
| D | 3 | A, B |
| E | 5 | B |
| F | 4 | C, D |
| G | 2 | E, F |

**(a)** Describe an activity-on-arc network for the project, using dummies of duration 0 where needed. **[4]**
**(b)** Find the earliest and latest event times, the critical path and the minimum project time. **[4]**
**(c)** Find the total float of B, D and E. **[2]**
**(d)** Find a lower bound for the number of workers and give a schedule that uses that number. **[2]**

**11.** The table gives some results from a critical path analysis of another project.

| Activity | Duration | Earliest start | Latest finish |
|---|---|---|---|
| A | 4 | 0 | 4 |
| B | 3 | 0 | 4 |
| C | 6 | 4 | 10 |
| D | 2 | 4 | 9 |
| E | 5 | 3 | 9 |
| F | 3 | 10 | 13 |
| G | 4 | 8 | 13 |
| H | 2 | 13 | 15 |

**(a)** Find the total float of each activity. **[3]**
**(b)** State the critical activities and the minimum project time. **[2]**

## Answers

**1.** J (1→2) [1]. K and L both start at event 2, since only J precedes them [1]. L (2→3) ends at event 3, where N (3→5) starts, because N depends on L alone [1]. K (2→4) ends at event 4, and a dummy (3→4) makes M (4→5) depend on both K and L [1]. M and N both end at event 5, and P (5→6) ends the project at one final event [1]. **[5]**
*Examiner insight:* Check each activity against its table row.

**2.** A and B have no predecessors [1]. C and D start at event 2, reached by A only [1]. E starts at event 3, so its predecessor is B. F starts at event 4, reached by C and, through the dummy, by B [1]. G starts at event 5, reached by D and E. H starts at event 6, reached by F and G [1]. **[4]**
*Examiner insight:* Follow each dummy back to the activity that ends at its start. A is already covered through C, so it is not listed for F.

**3. (a)** Forward pass: e₁ = 0, e₂ = 5, e₃ = 7 [1]. e₄ = max(5 + 4, 7 + 6) = 13 [1]. e₅ = max(7 + 5, 13 + 0) = 13, e₆ = max(13 + 7, 13 + 6) = 20, e₇ = 20 + 3 = 23 [1]. **[3]**
**(b)** Backward pass: l₇ = 23, l₆ = 20, l₅ = 20 − 6 = 14 [1]. l₄ = min(20 − 7, 14 − 0) = 13, l₃ = min(13 − 6, 14 − 5) = 7 [1]. l₂ = 13 − 4 = 9, l₁ = min(9 − 5, 7 − 7) = 0 [1]. **[3]**
**(c)** Activities with equal early and late times and matching duration are B, D, F, H [1]. **Critical path B, D, F, H; minimum project time 23 days**, since 7 + 6 + 7 + 3 = 23 [1]. **[2]**
*Examiner insight:* Show each comparison inside max and min, so a slipped value can be traced.

**4.** Use F = lⱼ − eᵢ − duration. A: 9 − 0 − 5 = **4** [1]. C: 13 − 5 − 4 = **4** [1]. E: 14 − 7 − 5 = **2** [1]. G: 20 − 13 − 6 = **1** [1]. **[4]**
*Examiner insight:* Use the late time of the end event and the early time of the start event.

**5.** Each activity is drawn from its earliest start, with float shown after it (# critical, = non-critical, - float, one column per day) [1].

```
day  0    5    10   15   20
A    =====----..............
B    #######................
C    .....====----..........
D    .......######..........
E    .......=====--.........
F    .............#######...
G    .............======-...
H    ....................###
```

B, D, F, H run end to end [1]. A, C, E start at 0, 5, 7 and G at 13 [1]. Floats 4, 4, 2, 1 are shown as dashes, and no bar starts early [1]. **[4]**
*Examiner insight:* Label the axis. Leaving out the float answers only part of the question.

**6. (a)** Total of durations = 43 [1]. 43/23 = 1.87, so at least **2 workers** [1]. **[2]**
**(b)** Worker 1: B (0–7), D (7–13), F (13–20), H (20–23) [1]. Worker 2: A (0–5), C (5–9), E (9–14), G (14–20) [1]. Every precedence holds: G starts at 14, after C, D and E have finished, and H starts at 20, so the project still takes **23 days** [1]. **[3]**
*Examiner insight:* A lower bound is not a schedule. Show start and finish times that satisfy every precedence.

**7.** X and Y would share the same start and end events and could not be told apart [1]. So draw Y to a new event [1], and join it to Z's start event with a dummy of duration 0, so Z still depends on both [1]. **[3]**
*Examiner insight:* Say what the dummy preserves as well as where it sits.

**8. (a)** G has float 1 [1], so the project is delayed by 3 − 1 = **2 days** [1]. **[2]**
**(b)** C has float 4, so the project time is **unchanged at 23 days** [1]. **[1]**
*Examiner insight:* Compare the delay with the float you computed.

**9. (a)** A, C, E total 6 + 6 + 4 = 16 and B, D, E total 9 + 5 + 4 = 18 [1]. The critical activities are **B, D and E**, and the project time is **18 days** [1]. Float of C = 18 − 16 = **2 days** [1]. **[3]**
**(b)** The path A, C, E takes 10 + x days, so need 10 + x ≤ 18 [1]. Hence **0 < x ≤ 8** [1]. **[2]**
**(c)** Now 10 + 11 = 21 > 18, so A, C, E is critical and the project time is **21 days** [1]. B, D, E takes 18, so the float of D is 21 − 18 = **3 days** [1]. **[2]**
*Examiner insight:* Compare path totals, and decide deliberately whether the boundary value of x, where two paths tie, is included.

**10. (a)** A (1→2), B (1→3) [1]. C (2→5) follows A, and E (3→6) follows B [1]. D starts at event 4, with dummies (2→4) and (3→4) so it depends on both A and B; D is (4→5) [1]. F (5→6) follows C and D, G (6→7) follows E and F, and the network has one start and one end [1]. **[4]**
**(b)** Forward: e = 0, 4, 6, 6, 11, 15, 17 for events 1 to 7, for example e₅ = max(4 + 7, 6 + 3) = 11 [1] [1]. Backward: l = 0, 4, 8, 8, 11, 15, 17, for example l₃ = min(8, 15 − 5) = 8 [1]. Critical path **A, C, F, G**, with 4 + 7 + 4 + 2 = **17 days** [1]. **[4]**
**(c)** B: l₃ − e₁ − 6 = 8 − 0 − 6 = **2** [1]. D: l₅ − e₄ − 3 = 11 − 6 − 3 = **2**. E: l₆ − e₃ − 5 = 15 − 6 − 5 = **4** [1]. **[2]**
**(d)** Total of durations = 31, and 31/17 = 1.82, so at least **2 workers** [1]. Worker 1: A (0–4), C (4–11), F (11–15), G (15–17). Worker 2: B (0–6), D (6–9), E (9–14) [1]. **[2]**
*Examiner insight:* Keep your table, passes and floats in a clear order so later parts can reuse them.

**11. (a)** Float = latest finish − earliest start − duration [1]. A: 4 − 0 − 4 = 0; B: 4 − 0 − 3 = 1; C: 10 − 4 − 6 = 0; D: 9 − 4 − 2 = 3 [1]. E: 9 − 3 − 5 = 1; F: 13 − 10 − 3 = 0; G: 13 − 8 − 4 = 1; H: 15 − 13 − 2 = 0 [1]. **[3]**
**(b)** The critical activities, with float 0, are **A, C, F and H** [1]. H has latest finish 15 and no float, so the minimum project time is **15 days** [1]. **[2]**
*Examiner insight:* This table gives start and finish values, so apply the float formula directly to each row.

## Where marks are usually lost

- Listing all earlier activities, not immediate predecessors only.
- Missing a dummy, or putting it between the wrong events.
- Giving a dummy a duration.
- Using largest in the backward pass or smallest in the forward pass.
- Calculating float with the wrong events.
- Starting a Gantt bar before a predecessor ends, or leaving out float.

## Next steps

- Revisit the [revision notes](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-revision-notes/) and the [study guide](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt/).
- Tick off the topic on the [checklist](/checklists/edexcel/a-level/mathematics/) and see the [course hub](/boards/edexcel/a-level/mathematics/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited. Unit D1, section 4, topics 4.1 to 4.4, and the D1 glossary definition of total float.
