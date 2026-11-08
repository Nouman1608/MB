---
resourceId: "mb-ap-csp-4.2-practice"
title: "Fault Tolerance: Practice Questions (Computer Science Principles 4.2)"
description: "Ten original practice questions on fault tolerance, redundancy, single points of failure, network designs and the cost of redundancy, with explanations and suggested rubrics."
course: "computer-science-principles"
unit: 4
topics: ["4.2"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 4.1 (networks, paths and routing)"
prerequisiteResources: ["mb-ap-csp-4.2-study-guide"]
learningObjectives: 
  - "Apply fault tolerance to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "4", "5"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.2-study-guide", "mb-ap-csp-4.2-revision-notes", "mb-ap-csp-4.2-checklist"]
next: "mb-ap-csp-4.2-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All networks are fictional. When counting paths, no device may be used twice. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which statement best describes a **fault-tolerant** system?

- (A) It never has any failing parts.
- (B) It can support failures of some parts and still continue to function.
- (C) It uses as few components as possible.
- (D) It has only one path between any two devices.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Fault tolerance is the ability to keep working despite failures.

- (A) real systems have failing parts; fault tolerance deals with them.
- (C) fewer components usually means less redundancy.
- (D) a single path is a single point of failure.
</details>

## Question 2 (multiple choice · foundation)

Which is an example of **redundancy** in a network?

- (A) Two separate paths between a school's server and the Internet
- (B) A shorter cable
- (C) A faster processor in a laptop
- (D) A password on a router

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Extra components (a second path) can carry data if the first fails.

- (B), (C) and (D) may improve speed or security but not provide backup.
</details>

## Question 3 (multiple choice · core)

Six fictional computers are each linked to one central switch and to nothing else. The switch breaks. What happens?

- (A) The computers can still talk to each other through other routes.
- (B) The computers cannot reach each other, because the switch is a single point of failure.
- (C) Only one computer is affected.
- (D) The network automatically gains redundancy.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every path passes through the switch.

- (A) there are no other routes in a star.
- (C) all the paths between computers are cut.
- (D) redundancy must be designed in, not gained automatically.
</details>

## Question 4 (multiple choice · core)

A full mesh joins every pair of devices directly. How many links does a full mesh of 6 devices need?

- (A) 6
- (B) 12
- (C) 15
- (D) 36

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 6 × 5 ÷ 2 = 15.

- (A) is the number of devices.
- (B) is 6 × 2.
- (D) is 6 × 6, which counts each link twice and includes a device linked to itself.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** statements about redundancy are correct?

- (A) It usually requires additional resources.
- (B) It can increase the reliability of a system.
- (C) It guarantees that no failure can ever disconnect a network.
- (D) It means using exactly one path.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).**

- (C) redundancy protects against some failures, not all.
- (D) redundancy means more than one path.
</details>

## Question 6 (multiple choice · core)

A ring of four devices P, Q, R and S has links P–Q, Q–R, R–S and S–P. Device Q fails. Can P still reach R?

- (A) No, because Q is on every path.
- (B) Yes, through S.
- (C) Yes, but only if a new link is added.
- (D) No, because rings have no redundancy.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P, S, R is a path that avoids Q.

- (A) the path through S avoids Q.
- (C) no new link is needed.
- (D) a ring has two routes between any pair.
</details>

## Question 7 (multiple choice · stretch)

A fictional network has links P–Q, Q–R, Q–S, R–S and S–T. Data must go from P to T. Which devices, if any **one** of them failed, would disconnect P from T?

- (A) Q only
- (B) S only
- (C) Q and S
- (D) R only

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The paths are P, Q, S, T and P, Q, R, S, T. Both use Q and S, so either one failing disconnects P from T. R is not on every path.

- (A) and (B) each name only one of the two.
- (D) R is avoided by the first path.
</details>

## Question 8 (constructed response · core)

A fictional network has links A–B, B–E, A–C, C–D and D–E. Data must go from A to E.

(a) List all paths from A to E. (2 points)

(b) Explain whether the connection survives if device B fails. (1 point)

(c) Name a pair of intermediate devices whose failure would disconnect A from E. (1 point)

(d) Suggest one link to add to tolerate the failure in (c), and say what the cost is. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives path A, B, E |
| 2 | gives path A, C, D, E |
| 3 | says the connection survives, using A, C, D, E |
| 4 | names a disconnecting pair: B and C, or B and D |
| 5 | suggests a valid extra link (for example A–D, which gives A, D, E) and states the cost (extra cable or equipment) |

**Sample response.** (a) A, B, E and A, C, D, E. (b) It survives because A, C, D, E avoids B. (c) B and C: A is linked only to B and C. (d) Add a link A–D, so A, D, E exists if B and C fail; the cost is another cable and port.

Alternative valid links are accepted if they genuinely give a path that avoids the failed pair.
</details>

## Question 9 (constructed response · core)

A fictional hospital connects its emergency department to its records server through one cable.

(a) Identify the vulnerability. (1 point)

(b) Describe how redundancy could remove it. (2 points)

(c) Give one reason the hospital might not add much redundancy anywhere else in its network. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | identifies the single cable as a single point of failure |
| 2 | proposes a second, separate cable or path to the server |
| 3 | explains that if one fails, data use the other, so the department keeps working |
| 4 | gives a cost-based reason (extra cables and equipment cost money and need maintenance, so redundancy is added where failure matters most) |

**Sample response.** (a) One cable carries everything, so its failure cuts off the department. (b) Add a second cable, ideally along a different route; if one fails, data use the other. (c) Redundancy costs money and maintenance, so it is added first where failure is most serious.
</details>

## Question 10 (constructed response · stretch)

A fictional college links four buildings. Design 1 uses a star with a hub in building 1 (3 links). Design 2 uses a ring (4 links). The college wants the buildings to stay connected if any one building's equipment fails.

(a) Evaluate Design 1 against the requirement. (2 points)

(b) Evaluate Design 2 against the requirement. (2 points)

(c) State one additional failure that Design 2 does **not** tolerate. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the hub failing disconnects the other buildings |
| 2 | concludes Design 1 does not meet the requirement |
| 3 | says that when any one building fails in the ring, the other three remain linked in a chain |
| 4 | concludes Design 2 meets the requirement, at the cost of one more link |
| 5 | gives a valid failure, such as two non-adjacent buildings failing, which splits the remaining two buildings |

**Sample response.** (a) If building 1 fails, buildings 2, 3 and 4 have no links among them, so the requirement is not met. (b) If any one building fails, the remaining three are still linked in a chain, so it is met; it costs one extra link. (c) If buildings 1 and 3 failed, buildings 2 and 4 would be cut off from each other.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 7 or lost marks in Question 8, redo the failure check: remove one device at a time and look for a surviving path. Re-read "Weak points: single points of failure" in the [study guide](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-checklist/).
