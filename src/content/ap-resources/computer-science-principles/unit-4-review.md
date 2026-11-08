---
resourceId: "mb-ap-csp-u4-review"
title: "Computer Systems and Networks: Mixed Unit Review (Computer Science Principles Unit 4)"
description: "Big ideas, a one-table method summary and six original exam-style questions that combine Unit 4 topics, with worked solutions and suggested rubrics."
course: "computer-science-principles"
unit: 4
topics: []
resourceType: "unit-review"
prerequisites: 
  - "You have studied Topics 4.1 to 4.3"
  - "You have tried the Unit 4 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-csp-u4-diagnostic"]
learningObjectives: 
  - "Connect the ideas of Unit 4: how the Internet moves data, how it tolerates failure, and how work is shared between computers"
  - "Combine bandwidth, path and failure analysis in one network scenario"
  - "Calculate sequential and parallel times and speedup, and explain the limit set by the sequential portion"
  - "Write precise short explanations of design choices and their trade-offs"
skills: ["1", "4", "5"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-u4-diagnostic", "mb-ap-csp-4.1-checklist", "mb-ap-csp-4.2-checklist", "mb-ap-csp-4.3-checklist"]
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "The Internet is interconnected networks with open protocols; data travel as independently routed packets over paths found by dynamic routing."
  - "Fault tolerance comes from redundancy, such as multiple paths; it costs extra resources and does not guard against every combination of failures."
  - "Parallel time is the sequential tasks plus the longest task of each parallel group; speedup is sequential time divided by parallel time."
  - "The sequential portion limits how much parallel and distributed computing can help."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Read the big ideas and the method table, then try the six questions without notes.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The rubrics are a **suggested Marlbridge rubric**, not official scoring. No calculator is needed. 1 byte = 8 bits.

## Big ideas of the unit

- **A network moves data along paths.** The Internet is interconnected networks using open, standardised protocols. Data are split into packets that are routed independently, can arrive out of order or not at all, and are reassembled using metadata. Bandwidth is the maximum data per unit time ([4.1](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/)).
- **Failure is expected.** Redundancy, usually more than one path, makes a system fault-tolerant. It costs resources and protects against some failures, not all ([4.2](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/)).
- **Work can be shared.** Parallel computing runs parts at the same time; distributed computing uses multiple devices. Speedup is limited by the sequential portion ([4.3](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/)).

## Key relationships and methods

| If the question asks you to... | Use... | Watch out for... |
|---|---|---|
| Find paths | List sequences of linked devices with no repeats | Counting devices instead of links, or repeating a device |
| Find transfer time | Size in bits (bytes × 8) ÷ bandwidth in bits per second | Forgetting the factor of 8 |
| Test fault tolerance | Remove one device (then pairs) and look for a surviving path | Checking only single failures when pairs are asked |
| Compare designs | Count links and test failures | Giving the benefit without the cost |
| Find parallel time | Sequential tasks + longest task of each parallel group | Adding every parallel task |
| Find speedup | Sequential time ÷ parallel time | Inverting it |
| Find the best possible speedup | Total time ÷ sequential portion | Ignoring the sequential portion |

## Question 1 (multiple choice · mixed)

A fictional company streams live video using a protocol that does not resend lost packets. A viewer's video has small glitches but never freezes. Which reasoning best explains why this design is chosen?

- (A) A re-sent packet would often arrive too late to be useful in live video, so speed matters more than perfect delivery.
- (B) Lost packets are impossible on the Internet.
- (C) Without re-sending, the video file is always smaller.
- (D) Packets cannot be put in order without re-sending.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For live media a late packet is of little use, so a protocol that skips resending can give smoother playback.

- (B) packets may not arrive.
- (C) re-sending does not change the file size.
- (D) packet numbers allow reordering without any re-sending.
</details>

## Question 2 (multiple choice · mixed)

A fictional university links four campuses with a ring (A–B, B–C, C–D, D–A). The link between B and C is cut. Which statement is correct?

- (A) B can no longer reach C by any path.
- (B) B can still reach C through A and D, because the ring provides a second route.
- (C) The ring automatically adds a new link.
- (D) All four campuses are disconnected.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The path B, A, D, C avoids the cut link.

- (A) the second route exists.
- (C) a ring does not create links by itself.
- (D) the four campuses remain connected in a chain.
</details>

## Question 3 (multiple choice, select two · mixed)

A fictional research group divides a very large data set among 20 computers connected by a network and combines the results afterwards. Which **two** statements are correct?

- (A) This is distributed computing.
- (B) The combining step is a sequential portion that limits the speedup.
- (C) The speedup will be exactly 20.
- (D) The computers do not need a network.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).**

- (C) the sequential portion (and communication) prevents a perfect speedup.
- (D) a network is how the devices are linked.
</details>

## Question 4 (constructed response · 4.1 and 4.2)

A fictional school has a laptop L, two routers R and S, and a server V. The links are L–R, L–S, R–V and S–V. Every link has a bandwidth of 80 Mbps. A 40 MB file is sent from V to L.

(a) List the paths from V to L. (2 points)

(b) Calculate the transfer time, assuming the link is the only limit. (2 points)

(c) Router R fails. Explain what happens to the transfer. (1 point)

(d) Name the failures that would disconnect L from V, and suggest how the school could tolerate them, stating a cost. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (7 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives V, R, L |
| 2 | gives V, S, L |
| 3 | converts: 40 × 8 = 320 megabits |
| 4 | divides: 320 ÷ 80 = 4 seconds |
| 5 | says routing uses the path through S, so the transfer still completes |
| 6 | names R and S failing together (or the failure of L or V themselves) |
| 7 | suggests another path (a third router or a link between R and S) and states the cost (extra equipment and maintenance) |

**Sample response.** (a) V, R, L and V, S, L. (b) 40 MB is 320 megabits; at 80 Mbps it takes 4 seconds. (c) The packets are routed through S, so the transfer still works. (d) R and S failing together would disconnect them. A third router linked to L and V would add a path, at the cost of extra equipment.
</details>

## Question 5 (constructed response · 4.3)

A fictional rendering job has these tasks. Task 1 splits the scene (8 s) and runs first. Then four render tasks of 30 s, 45 s, 25 s and 45 s run at the same time on four processors. Task 6 merges the images (12 s) and runs after all render tasks.

(a) Calculate the sequential time. (1 point)

(b) Calculate the parallel time. (2 points)

(c) Calculate the speedup to 2 decimal places. (1 point)

(d) A fifth render task of 40 s is added to the parallel group on a fifth processor. Explain what happens to the parallel time. (1 point)

(e) State the greatest possible speedup if the render tasks could be shared among unlimited processors so that their total time becomes very small. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives 8 + 30 + 45 + 25 + 45 + 12 = 165 s |
| 2 | identifies tasks 1 and 6 as sequential and the longest render task as 45 s |
| 3 | gives 8 + 45 + 12 = 65 s |
| 4 | gives 165 ÷ 65, about 2.54 |
| 5 | says the time does not change, because 40 s is less than the longest task, 45 s |
| 6 | gives about 8.25 (165 ÷ 20, because only the 20 s of sequential tasks 8 + 12 remains) |

**Sample response.** (a) 165 s. (b) 8 + 45 + 12 = 65 s. (c) 165 ÷ 65 is about 2.54. (d) No change: the group still ends when the 45 s task ends. (e) The sequential tasks take 8 + 12 = 20 s, so the speedup cannot exceed 165 ÷ 20 = 8.25.
</details>

## Question 6 (constructed response · 4.1, 4.2 and 4.3)

A fictional video service stores its films on servers in many different cities and delivers them over the Internet. It also uses many computers at the same time to convert each new film into several formats.

(a) Explain **two** features of the Internet's design that help the service keep working when a connection fails. (2 points)

(b) Explain why the service uses distributed computing to convert films. (1 point)

(c) Explain one limit to how much faster adding more computers can make the conversion. (1 point)

(d) State one cost of the redundancy in (a). (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives redundancy: more than one path between devices |
| 2 | gives dynamic routing: packets are sent by another route if one fails (or packets are reassembled from metadata) |
| 3 | says distributed computing shares the work, so conversion finishes faster or handles more data than one computer |
| 4 | says some part of the work is sequential (such as combining or checking), so extra computers stop helping |
| 5 | says redundancy needs extra resources (cables, routers, servers, maintenance) |

**Sample response.** (a) The Internet has many alternative paths between devices, and routing is dynamic, so packets are sent a different way if a connection fails. (b) Many computers converting different films or parts of a film at the same time finish sooner than one. (c) A sequential step, such as combining the pieces, cannot be shared, so adding computers eventually stops helping. (d) Extra paths and equipment cost money to buy and maintain.
</details>

## How did you do?

If you lost marks on the scenario questions, check whether you named the specific idea asked for (redundancy, dynamic routing, sequential portion) and linked it to the scenario. For gaps, return to the topic checklists: [4.1](/advanced-course-resources/computer-science-principles/4-1-the-internet-checklist/), [4.2](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-checklist/) and [4.3](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-checklist/).
