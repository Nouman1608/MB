---
title: "Pearson Edexcel International Advanced Level Mathematics: Critical path analysis and scheduling (YMA01)"
seoTitle: "Edexcel IAL Maths D1 Critical Path Analysis Study Guide"
resourceType: "study-guides"
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
description: "Study guide to activity-on-arc networks, dummies, earliest and latest times, total float, cascade charts and scheduling for Edexcel IAL Maths D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches critical path analysis for the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics (YMA01), Specification Issue 3, April 2019. It covers unit D1 (Decision Mathematics 1), section 4, topics 4.1 to 4.4. The specification states that D1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-practice/). The course page is [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/), the printable list is the [checklist](/checklists/edexcel/a-level/mathematics/), and [all free 10-minute diagnostics](/diagnostics/) help you find weak spots first.

## What this unit covers

| Topic | What you must be able to do |
|---|---|
| 4.1 | Model a project as an activity-on-arc network from a precedence table, including dummies |
| 4.2 | Complete the precedence table for a given network |
| 4.3 | Apply the critical path algorithm: earliest and latest event times, earliest and latest start and finish times |
| 4.4 | Find total float, draw Gantt (cascade) charts, and schedule activities |

The specification says that in a precedence network the tables show immediate predecessors only. It also asks you to show clearly how an algorithm has been applied, so every pass in this guide is written out step by step.

## 4.1 Building an activity-on-arc network

A project is split into activities, each with a duration. The precedence table says which activities must be finished before another can start. In an activity-on-arc network:

- each activity is an arc, drawn as an arrow with its letter and duration;
- each node is an event, a moment when activities finish and others may start;
- there is one start event and one end event;
- events are numbered so that every arc runs from a smaller number to a larger one.

An activity with no predecessor leaves the start event. An activity that nothing depends on arrives at the end event.

A dummy is an arc of duration 0, drawn dashed. It has two jobs. A logic dummy makes a precedence true: it carries a dependence from one event to another without adding any time. A uniqueness dummy stops two activities from sharing the same pair of start and end events, so each activity can be named by its events (i, j).

**Method**

1. Start every activity that has no predecessor at event 1.
2. For each other activity, find an event at which exactly its predecessors have finished.
3. If an event would wrongly make an activity depend on something extra, split the events and join them with a dummy.
4. Send every activity with no successor to one final event.
5. Number the events, then check each row of the table backwards.

### Worked example 1: table to network

| Activity | Duration (days) | Immediate predecessors |
|---|---|---|
| A | 3 | none |
| B | 4 | none |
| C | 2 | A |
| D | 5 | A, B |
| E | 3 | C |
| F | 4 | C, D |
| G | 2 | E, F |

A and B start at event 1. C needs only A, but D needs A and B. So A finishes at event 2, where C starts. D starts at event 3, where B finishes, and a dummy from event 2 to event 3 carries A into D. F needs C and D, and E needs C only. So C ends at its own event 4, where E starts, and a dummy from event 4 to event 5 sends C into F (D ends at event 5). E and F both finish at event 6, where G starts, and G ends at event 7.

| Arc | From | To | Duration |
|---|---|---|---|
| A | 1 | 2 | 3 |
| B | 1 | 3 | 4 |
| dummy | 2 | 3 | 0 |
| C | 2 | 4 | 2 |
| D | 3 | 5 | 5 |
| dummy | 4 | 5 | 0 |
| E | 4 | 6 | 3 |
| F | 5 | 6 | 4 |
| G | 6 | 7 | 2 |

Check: E starts at event 4, reached only through C, so E depends on C alone. F starts at event 5, reached through D and, by the dummy, C. Both are right.

### Worked example 2: a uniqueness dummy

H lasts 2 days with no predecessor. J (3 days) and K (5 days) both need only H. L (2 days) needs J and K. If J and K both ran from event 2 to event 3, they would share the same pair of events. Draw H from 1 to 2, J from 2 to 3, K from 2 to 4, a dummy from 3 to 4, and L from 4 to 5. The dummy keeps L dependent on both J and K.

## 4.2 From a network back to a precedence table

To read an activity's predecessors, stand at its start event and look back along the arcs that arrive there. Follow any dummy back to the event it leaves, and keep going until you reach real activities. List only the activities that end immediately before.

### Worked example 3

Arcs: P (1→2, 4), Q (1→3, 6), dummy (2→3), R (2→4, 3), S (3→4, 5), T (4→5, 3), U (3→5, 4), V (5→6, 2).

| Activity | Immediate predecessors | Reason |
|---|---|---|
| P | none | starts at event 1 |
| Q | none | starts at event 1 |
| R | P | event 2 is reached by P only |
| S | P, Q | event 3 is reached by Q and, by the dummy, P |
| U | P, Q | also starts at event 3 |
| T | R, S | event 4 is reached by R and S |
| V | T, U | event 5 is reached by T and U |

Notice that T lists R and S and not P or Q. Earlier activities are already covered through R and S.

## 4.3 The critical path algorithm

Let eᵢ be the earliest time event i can occur and lᵢ the latest time it can occur without delaying the project.

**Forward pass** (left to right): e at the start event is 0. For each later event, take the largest value of (eᵢ + duration) over all arcs arriving there. Dummies count as duration 0. The value at the end event is the minimum project time.

**Backward pass** (right to left): set l at the end event equal to its e. For each earlier event, take the smallest value of (lⱼ − duration) over all arcs leaving it.

### Worked example 4: the network from example 1

Forward pass:

```
e1 = 0
e2 = 0 + 3 = 3
e3 = max(0 + 4, 3 + 0) = 4
e4 = 3 + 2 = 5
e5 = max(4 + 5, 5 + 0) = 9
e6 = max(5 + 3, 9 + 4) = 13
e7 = 13 + 2 = 15
```

Backward pass:

```
l7 = 15
l6 = 15 - 2 = 13
l5 = 13 - 4 = 9
l4 = min(13 - 3, 9 - 0) = 9
l3 = 9 - 5 = 4
l2 = min(4 - 0, 9 - 2) = 4
l1 = min(4 - 3, 4 - 4) = 0
```

The minimum project time is 15 days. An activity (i, j) is critical when eᵢ = lᵢ, eⱼ = lⱼ and eⱼ − eᵢ equals its duration. Here B, D, F and G pass the test, so the critical path is B, D, F, G, and 4 + 5 + 4 + 2 = 15. Event 1 has e = l, but arc A does not qualify, because event 2 has e = 3 and l = 4. Matching event times alone is not enough; check the duration as well.

### Start and finish times for activities

For activity (i, j) with duration d:

- earliest start = eᵢ, earliest finish = eᵢ + d;
- latest finish = lⱼ, latest start = lⱼ − d.

| Activity | Duration | Earliest start | Earliest finish | Latest start | Latest finish |
|---|---|---|---|---|---|
| A | 3 | 0 | 3 | 1 | 4 |
| B | 4 | 0 | 4 | 0 | 4 |
| C | 2 | 3 | 5 | 7 | 9 |
| D | 5 | 4 | 9 | 4 | 9 |
| E | 3 | 5 | 8 | 10 | 13 |
| F | 4 | 9 | 13 | 9 | 13 |
| G | 2 | 13 | 15 | 13 | 15 |

## 4.4 Total float, Gantt charts and scheduling

The specification defines the total float of activity (i, j) as F(i, j) = lⱼ − eᵢ − duration (i, j). It equals latest finish minus earliest finish, and also latest start minus earliest start. Critical activities have total float 0.

From example 4: F(A) = 4 − 0 − 3 = 1, F(C) = 9 − 3 − 2 = 4, F(E) = 13 − 5 − 3 = 5, and the four critical activities have float 0.

Float belongs to a chain of activities, not to each activity separately. In the network above, A and C lie on one route into event 5, so a delay to A uses up slack that C could have used. Delay one activity by no more than its float, with nothing else late, and the project time is unchanged. Delay it by more and the project is late by the excess.

### Gantt (cascade) charts

A Gantt (cascade) chart has one row per activity and a time axis. Draw each activity as a bar from its earliest start, and show its float after it. Critical activities have no float. Dummies are left out, but their precedence must still hold. In the chart below, one column is one day, # is a critical activity, = is a non-critical activity and - is its float.

```
day  0    5    10   15
A    ===-...........
B    ####...........
C    ...==----......
D    ....#####......
E    .....===-----..
F    .........####..
G    .............##
```

Read the chart as a check on your network: no bar may start before the bars it depends on have ended. Here C starts at day 3 when A ends, and F starts at day 9 when D ends.

### Scheduling

Scheduling asks how the activities can be shared among workers so the project still finishes on time. Unless a question says otherwise, treat each activity as done by one worker without interruption.

A lower bound on the number of workers is the total of all activity durations divided by the minimum project time, rounded up. The total here is 3 + 4 + 2 + 5 + 3 + 4 + 2 = 23, and 23/15 = 1.53, so at least 2 workers are needed. This is only a lower bound. You must still find a schedule that works.

Put the critical activities on one worker, then fit the rest in around them, using float.

| Worker | Schedule |
|---|---|
| 1 | B (0–4), D (4–9), F (9–13), G (13–15) |
| 2 | A (0–3), C (3–5), E (5–8) |

Every activity starts after its predecessors finish, and the project ends at day 15, so 2 workers are enough. With one worker the project would take 23 days.

## Common errors

- Giving D in example 1 only B as a predecessor because B and D look linked on the page. Check every row of the table against the events.
- Listing every earlier activity, not just the immediate predecessors, in a precedence table.
- Taking the smaller value in the forward pass, or the larger in the backward pass. Forward takes the largest, backward the smallest.
- Calling an activity critical because its two event times match, without checking the duration.
- Adding a dummy duration to a path. Dummies take no time.
- Using the number of workers from the lower bound without showing a working schedule.

## Next steps

Condense the method with the [revision notes](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-revision-notes/), then test yourself on the [practice questions](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-practice/). Tick topics off on the [checklist](/checklists/edexcel/a-level/mathematics/) and see the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/) for related units.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited. Unit D1, section 4: Critical path analysis, topics 4.1 to 4.4, and the D1 glossary definition of total float.
