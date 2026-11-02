---
title: "Pearson Edexcel International Advanced Level Mathematics: Critical path analysis and scheduling (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths D1 Critical Path Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on networks, dummies, forward and backward passes, float, cascade charts and scheduling for Pearson Edexcel IAL Maths D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense critical path analysis for Pearson Edexcel International Advanced Level Mathematics (YMA01), Specification Issue 3, April 2019: unit D1, section 4, topics 4.1 to 4.4. The specification states that D1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. For full explanations, start with the [study guide](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt-practice/). Related links: [course hub](/boards/edexcel/a-level/mathematics/), [checklist](/checklists/edexcel/a-level/mathematics/) and [all free 10-minute diagnostics](/diagnostics/).

## Key terms

| Term | Meaning |
|---|---|
| Activity | A job with a duration, drawn as an arc |
| Event | A node where activities finish and others start |
| Precedence table | Lists each activity's immediate predecessors only |
| Dummy | A dashed arc of duration 0 |
| eᵢ | Earliest time event i can occur |
| lᵢ | Latest time event i can occur without delaying the project |
| Critical activity | An activity with total float 0 |
| Critical path | A path of critical activities from start to end |
| Total float | F(i, j) = lⱼ − eᵢ − duration (i, j) |

## Formulae at a glance

| Quantity | Rule |
|---|---|
| Earliest start of (i, j) | eᵢ |
| Earliest finish | eᵢ + duration |
| Latest finish | lⱼ |
| Latest start | lⱼ − duration |
| Forward pass at an event | largest of (eᵢ + duration) over arriving arcs |
| Backward pass at an event | smallest of (lⱼ − duration) over leaving arcs |
| Lower bound on workers | total of durations ÷ project time, rounded up |

## Method in steps

**Drawing a network (4.1)**

1. Start all activities with no predecessor at event 1.
2. Give each other activity a start event reached by exactly its predecessors.
3. Add a dummy wherever one event would add an unwanted dependence, or where two activities would share both end events.
4. Finish all activities with no successor at one end event.
5. Number events so every arc points to a larger number.

**Reading a table from a network (4.2)**

1. Go to the start event of the activity.
2. Look back along the arcs arriving there.
3. Follow dummies back until you reach real activities.
4. Write only the activities that end immediately before.

**Critical path (4.3)**

1. Forward pass from e = 0; take maximums.
2. Backward pass from the end event; take minimums.
3. Mark an activity critical if eᵢ = lᵢ, eⱼ = lⱼ and eⱼ − eᵢ equals its duration.
4. Write the minimum project time and the critical path.

**Float, Gantt, scheduling (4.4)**

1. Total float = lⱼ − eᵢ − duration for every activity.
2. Draw one row per activity from its earliest start, float shown after.
3. Divide total duration by project time and round up for the minimum workers.
4. Build a schedule using float and check every precedence.

## Worked reminder

Table: G (4 days, none), H (3 days, none), J (5 days, G and H), K (6 days, G), L (2 days, J and K).

G ends at its own event, where K starts. J needs H as well, so a dummy joins the end of G to J's start event.

| Arc | From | To | Duration |
|---|---|---|---|
| G | 1 | 2 | 4 |
| H | 1 | 3 | 3 |
| dummy | 2 | 3 | 0 |
| K | 2 | 4 | 6 |
| J | 3 | 5 | 5 |
| dummy | 4 | 5 | 0 |
| L | 5 | 6 | 2 |

```
Forward:  e1 = 0, e2 = 4, e3 = max(3, 4) = 4, e4 = 4 + 6 = 10,
          e5 = max(4 + 5, 10) = 10, e6 = 12
Backward: l6 = 12, l5 = 10, l4 = 10, l3 = 10 - 5 = 5,
          l2 = min(5, 10 - 6) = 4, l1 = min(4 - 4, 5 - 3) = 0
```

Minimum project time 12. Critical path: G, K, L. Floats: H = 5 − 0 − 3 = 2 and J = 10 − 4 − 5 = 1. Total of durations is 20, and 20/12 = 1.67, so at least 2 workers.

### Gantt chart and schedule for the same project

One column is one day: # is critical, = is non-critical, - is float.

```
day  0    5    10
G    ####........
H    ===--.......
K    ....######..
J    ....=====-..
L    ..........##
```

Worker 1 takes the critical activities: G (0–4), K (4–10), L (10–12). Worker 2 takes H (0–3) and J (4–9). J starts at day 4, after G and H have both finished, and L starts at day 10, after J and K. So 2 workers meet the 12-day project time, which matches the lower bound.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--07-float-shared.webp" width="900" height="1100" alt="Two cascade charts: A starting 1 day late keeps the project at 15 days but cuts C’s float from 4 to 3; A starting 3 days late pushes D, F and G back so the project ends on day 17, two days late." loading="lazy">
  <figcaption>Delaying one activity uses float that later activities in its chain share.</figcaption>
</figure>


### Reading a table from a network

Take arcs X (1→2), Y (1→3), a dummy (2→3), Z (3→4) and W (2→4). Z starts at event 3, which is reached by Y and, through the dummy, by X, so Z has predecessors X and Y. W starts at event 2, reached by X only, so W has the single predecessor X. The dummy is why Z has two predecessors while W has one.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--01-table-to-network.webp" width="900" height="790" alt="A precedence table for activities A to G sits above its activity-on-arc network with seven events. Two dashed zero-duration dummies (2 to 3 and 4 to 5) let A count towards D and C towards F." loading="lazy">
  <figcaption>A table of immediate predecessors becomes a network; dummies carry extra dependences.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--02-dummies.webp" width="900" height="1090" alt="Top: a dashed dummy from event 2 to 3 lets D depend on A and B while C depends only on A. Bottom: J and K drawn between the same two events is wrong; sending K to event 4 and adding a dummy from 3 to 4 is right." loading="lazy">
  <figcaption>A logic dummy carries a dependence; a uniqueness dummy keeps each activity’s start and end events distinct.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--03-network-to-table.webp" width="900" height="830" alt="A network with arcs P to V and a dummy, with S highlighted: looking back from its start event 3 finds Q and, through the dummy, P. A table lists immediate predecessors for every activity." loading="lazy">
  <figcaption>Read predecessors by looking back from an activity’s start event, following dummies.</figcaption>
</figure>


### Presenting your working

The specification asks you to show clearly how an algorithm has been applied. A tidy layout makes your reasoning easy to follow and easy to check:

- Write the forward pass as a list, one line per event, showing the values being compared.
- Write the backward pass the same way, working from the end event.
- Show the event times in a table or beside each node, in the form eᵢ and lᵢ.
- Name the critical path in full and total its durations to confirm the project time.
- Draw dummies dashed, and label every arc with its letter and duration.

## Must-know distinctions

| Idea | Distinction |
|---|---|
| Event time and activity time | Event times belong to nodes. Start and finish times belong to arcs and come from eᵢ and lⱼ |
| Forward and backward pass | Forward uses the largest value, backward the smallest |
| Logic dummy and uniqueness dummy | One carries a dependence between events, the other separates two arcs with the same end events |
| Lower bound and schedule | The bound is only a minimum. A valid schedule must be shown |
| Critical activity and critical event | An event can have e = l while an arc into it is not critical |

A project can have more than one critical path. Delaying a critical activity delays the project by the same amount. Delaying a non-critical activity by more than its float delays the project by the excess.

Float is shared along a chain. In the worked reminder, H has 2 days of float and J has 1, but they sit on the same route into event 5, so delaying H by 2 days leaves J with no float at all. Check every activity on a route before you promise that a delay is harmless.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--04-forward-pass.webp" width="900" height="820" alt="The example network shows earliest times 0, 3, 4, 5, 9, 13, 15 for events 1 to 7. Events 3, 5 and 6 take the largest of two values; the minimum project time is 15 days." loading="lazy">
  <figcaption>The forward pass takes the largest value at each event, giving the minimum project time.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--08-scheduling-workers.webp" width="900" height="726" alt="One worker takes 23 days; two workers finish in 15. Worker 1 does B, D, F, G; worker 2 does A, C, E. The lower bound is 23 divided by 15 = 1.53, so at least 2 workers." loading="lazy">
  <figcaption>Two workers can finish the project in the minimum 15 days.</figcaption>
</figure>


## Quick self-test

1. Write the formula for total float F(i, j).
2. An activity (3, 5) lasts 6 days. e₃ = 8 and l₅ = 17. Find its total float.
3. An activity (4, 6) lasts 4 days. e₄ = 9, l₄ = 12, e₆ = 14 and l₆ = 19. Find its earliest and latest start and finish.
4. In the worked reminder, what is the total float of H?
5. In the worked reminder, which activities are on the critical path?
6. Total duration is 46 days and the project takes 20 days. What is the lower bound on workers?
7. State two reasons for using a dummy.
8. A network has two activities with no successors. How are they drawn?
9. A critical activity is delayed by 3 days. What happens to the project?
10. A non-critical activity with float 5 is delayed by 7 days. What happens to the project?
11. In the worked reminder, what are L's immediate predecessors?
12. Can a network have two critical paths?

### Answers

1. F(i, j) = lⱼ − eᵢ − duration (i, j).
2. 17 − 8 − 6 = 3 days.
3. Earliest start 9, earliest finish 13, latest finish 19, latest start 15. The total float is 19 − 9 − 4 = 6.
4. 2 days.
5. G, K and L.
6. 46/20 = 2.3, so at least 3 workers.
7. To show a dependence correctly (logic), and to give two activities different pairs of end events (uniqueness).
8. Both end at the single final event.
9. The project finishes 3 days late.
10. The project finishes 2 days late (7 − 5).
11. J and K.
12. Yes, and every activity on either path has float 0.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--06-cascade-float.webp" width="900" height="786" alt="A cascade chart with rows A to G over 0 to 15 days. Critical activities B, D, F, G are solid with no float; A, C and E are followed by dashed float of 1, 4 and 5 days." loading="lazy">
  <figcaption>Total float is the slack after an activity’s earliest finish.</figcaption>
</figure>


## Where marks are usually lost

- Writing every earlier activity in a precedence table instead of immediate predecessors only.
- Missing a dummy, so an activity depends on something it should not.
- Giving a dummy a duration, or counting it in a path total.
- Using the wrong operation in a pass: largest forward, smallest backward.
- Not showing each event's working, so one slip hides the method used.
- Declaring a path critical without totalling its durations against the project time.
- Reading float off the wrong events: it is lⱼ − eᵢ − duration, with i the start event and j the end event.
- Stopping at the lower bound for workers and giving no schedule.
- Starting a Gantt bar before a predecessor has finished.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt--05-backward-pass-critical.webp" width="900" height="930" alt="The network shows earliest and latest times in each event. Latest times are 0, 4, 4, 9, 9, 13, 15. The critical path B, D, F, G is drawn thick and sums to 15; A is not critical since event 2 has e = 3 but l = 4." loading="lazy">
  <figcaption>The backward pass takes the smallest value; critical activities need matching event times and duration.</figcaption>
</figure>


## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited. Unit D1, section 4, topics 4.1 to 4.4, and the D1 glossary definition of total float.
