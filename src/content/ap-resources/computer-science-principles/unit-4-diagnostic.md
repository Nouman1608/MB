---
resourceId: "mb-ap-csp-u4-diagnostic"
title: "Computer Systems and Networks: Unit Diagnostic (Computer Science Principles Unit 4)"
description: "A 25-minute check with short questions on every topic of Unit 4: the Internet, fault tolerance, and parallel and distributed computing."
course: "computer-science-principles"
unit: 4
topics: []
resourceType: "unit-diagnostic"
prerequisites: 
  - "You have studied some or all of Topics 4.1 to 4.3"
learningObjectives: 
  - "Find out which Unit 4 topics are secure and which need more work"
  - "Practise short questions on paths, bandwidth, packets, redundancy and run-time calculations"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["1", "4", "5"]
studyMinutes: 25
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-u4-review", "mb-ap-csp-4.1-study-guide", "mb-ap-csp-4.2-study-guide", "mb-ap-csp-4.3-study-guide"]
next: "mb-ap-csp-u4-review"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Eleven short questions: at least three for each of the three topics in Unit 4."
  - "Nine are multiple choice (one selects two answers); two need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Use this diagnostic to find **which Unit 4 topics to revisit**: at least three questions for each topic.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 25 minutes and answer everything before opening any answer. No calculator. 1 byte = 8 bits; Mbps means megabits per second.

## Question 1 (multiple choice · 4.1)

Which best describes a **protocol**?

- (A) The maximum amount of data a link can carry per second
- (B) An agreed-upon set of rules that specifies the behavior of a system
- (C) A sequence of connected devices from sender to receiver
- (D) A system of linked web pages

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**

- (A) is bandwidth.
- (C) is a path.
- (D) is the World Wide Web.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/).
</details>

## Question 2 (multiple choice · 4.1)

A fictional 20 MB file is sent over a link with a bandwidth of 40 Mbps. About how long does the transfer take?

- (A) 0.5 seconds
- (B) 2 seconds
- (C) 4 seconds
- (D) 8 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 20 MB × 8 = 160 megabits; 160 ÷ 40 = 4 seconds.

- (A) is 20 ÷ 40, which ignores the conversion to bits.
- (B) is 80 ÷ 40, using the wrong factor.
- (D) is 320 ÷ 40, using 16 bits per byte.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/).
</details>

## Question 3 (multiple choice · 4.1)

A message sent as packets arrives with the packets out of order. Which statement is correct?

- (A) The message is lost, because packets must arrive in order.
- (B) The receiver can use the metadata in each packet, such as its number, to put them back in order.
- (C) The sender must send the message again from the start.
- (D) Packets have no metadata.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Packets carry metadata for routing and reassembly.

- (A) out-of-order arrival is normal.
- (C) not needed unless a packet is missing.
- (D) packets contain metadata.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/).
</details>

## Question 4 (multiple choice · 4.1)

A student says "the Internet and the World Wide Web are the same thing". Which reply is best?

- (A) Correct.
- (B) Incorrect: the Web is a system of linked pages, programs and files that uses the Internet.
- (C) Incorrect: the Internet is a part of the Web.
- (D) Correct, because both use HTTP.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**

- (A) and (D) are wrong: email, for example, uses the Internet without being part of the Web.
- (C) reverses the relationship.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/).
</details>

## Question 5 (multiple choice, select two · 4.2)

Which **two** statements about fault tolerance and redundancy are correct?

- (A) A fault-tolerant system can continue to function when some parts fail.
- (B) Redundancy requires no extra resources.
- (C) Having more than one path between two devices is one way to build redundancy.
- (D) A fault-tolerant system never has any part that fails.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) redundancy usually needs additional resources.
- (D) fault tolerance is about coping with failures, not preventing them.

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/).
</details>

## Question 6 (multiple choice · 4.2)

Five fictional computers are each linked to one central router and to nothing else. Which statement is correct?

- (A) The router is a single point of failure.
- (B) The network has several paths between any two computers.
- (C) If one computer fails, all the others lose their connection.
- (D) The network is fully redundant.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every path between two computers goes through the router.

- (B) there is exactly one path.
- (C) the others stay connected through the router.
- (D) there is no redundancy for the router.

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/).
</details>

## Question 7 (multiple choice · 4.2)

How many links does a full mesh of 4 devices need (every pair directly linked)?

- (A) 4
- (B) 6
- (C) 8
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 4 × 3 ÷ 2 = 6.

- (A) is the number of devices (a ring would use 4 links).
- (C) is 4 × 2.
- (D) is 4 × 4.

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/).
</details>

## Question 8 (multiple choice · 4.3)

A 10 s task runs first. Then three independent tasks of 20 s, 35 s and 5 s run at the same time on separate processors. How long does the whole job take?

- (A) 35 seconds
- (B) 45 seconds
- (C) 60 seconds
- (D) 70 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 10 + the longest of (20, 35, 5) = 10 + 35 = 45.

- (A) leaves out the 10 s task.
- (C) is 20 + 35 + 5, the sum of the parallel tasks alone.
- (D) is the sequential total: 10 + 20 + 35 + 5.

**If you missed this:** [Topic 4.3 study guide](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/).
</details>

## Question 9 (multiple choice · 4.3)

A job takes 120 seconds sequentially and 40 seconds in parallel. What is the speedup?

- (A) 3
- (B) 80
- (C) 160
- (D) 0.33

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 120 ÷ 40 = 3.

- (B) is the time saved.
- (C) is the sum.
- (D) is the inverse.

**If you missed this:** [Topic 4.3 study guide](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/).
</details>

## Question 10 (constructed response · 4.1 and 4.2)

A fictional network has links A–B, A–C, B–D and C–D. Data go from A to D. (a) List the paths. (b) Does the connection survive if B fails? (c) Which pair of failures would disconnect A from D? (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | lists A, B, D and A, C, D |
| 2 | says it survives, using A, C, D |
| 3 | names B and C failing together |

**Sample response.** (a) A, B, D and A, C, D. (b) Yes, through C. (c) B and C failing together disconnects A from D.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/) and [Topic 4.2 study guide](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/).
</details>

## Question 11 (constructed response · 4.3)

A fictional program takes 50 seconds on one processor. Five seconds is a sequential portion; the other 45 seconds can be divided equally among any number of processors. (a) Calculate the time with 9 processors. (b) State the greatest possible speedup. (c) Explain why. (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives 5 + 45 ÷ 9 = 10 seconds |
| 2 | gives the greatest speedup 50 ÷ 5 = 10 |
| 3 | explains that the sequential 5 seconds remains however many processors are used |

**Sample response.** (a) 10 seconds. (b) 10. (c) The 5 second sequential portion cannot be shortened by adding processors, so the time cannot go below 5 seconds.

**If you missed this:** [Topic 4.3 study guide](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/).
</details>

## What next?

For each question you missed, read the study guide linked in its answer. If you missed two or more in one topic, work through that topic's practice questions. When you are ready, try the [Unit 4 mixed review](/advanced-course-resources/computer-science-principles/unit-4-review/).
