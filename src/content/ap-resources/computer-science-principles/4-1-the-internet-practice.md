---
resourceId: "mb-ap-csp-4.1-practice"
title: "The Internet: Practice Questions (Computer Science Principles 4.1)"
description: "Ten original practice questions on networks, paths, bandwidth calculations, packets, protocols and the Internet versus the Web, with explanations and suggested rubrics."
course: "computer-science-principles"
unit: 4
topics: ["4.1"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 2.1 (data stored as bits)"
prerequisiteResources: ["mb-ap-csp-4.1-study-guide"]
learningObjectives: 
  - "Apply the internet to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "4", "5"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.1-study-guide", "mb-ap-csp-4.1-revision-notes", "mb-ap-csp-4.1-checklist"]
next: "mb-ap-csp-4.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Where units matter: 1 byte = 8 bits; "Mbps" means megabits (millions of bits) per second. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which best defines a **path** in a computer network?

- (A) The amount of data a link can carry per second
- (B) A sequence of directly connected devices from a sender to a receiver
- (C) A set of rules that devices follow
- (D) A chunk of data with metadata

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A path begins at the sender and ends at the receiver, passing through directly connected devices.

- (A) describes bandwidth.
- (C) describes a protocol.
- (D) describes a packet.
</details>

## Question 2 (multiple choice · foundation)

Which statement about the Internet and the World Wide Web is correct?

- (A) They are different names for the same thing.
- (B) The Web is a system of linked pages, programs and files that uses the Internet.
- (C) The Internet is a system of linked web pages.
- (D) The Web does not use any protocols.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The Web runs on the Internet and uses HTTP.

- (A) the two are not the same.
- (C) reverses the relationship.
- (D) the Web uses HTTP.
</details>

## Question 3 (multiple choice · core)

A fictional 30 MB video is sent over a link with a bandwidth of 60 Mbps. Which is the shortest time the transfer could take?

- (A) 0.5 seconds
- (B) 4 seconds
- (C) 5 seconds
- (D) 30 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 30 MB × 8 = 240 megabits. 240 ÷ 60 = 4 seconds.

- (A) is 30 ÷ 60, which forgets the factor of 8.
- (C) uses 10 bits per byte (300 megabits ÷ 60) instead of 8.
- (D) ignores the bandwidth and treats the size in megabytes as seconds.
</details>

## Question 4 (multiple choice · core)

A message is divided into packets and sent across the Internet. Which statement is **true**?

- (A) All packets travel the same route and arrive in order.
- (B) Packets may arrive in order, out of order or not at all.
- (C) Packets contain only data, with no information about where they belong.
- (D) A packet can only be sent if every earlier packet has arrived.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Packets are routed independently.

- (A) routes can differ and order is not guaranteed.
- (C) packets include metadata for routing and reassembly.
- (D) packets are sent without waiting for earlier ones to arrive.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** features help the Internet add new devices easily?

- (A) Its protocols are open (nonproprietary).
- (B) A single company controls every connection.
- (C) It was designed to be scalable.
- (D) Every message must follow one fixed route.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) would make joining dependent on one company.
- (D) fixed routes would make growth and failure handling hard.
</details>

## Question 6 (multiple choice · core)

A fictional network has devices P, Q, R, S and U joined by exactly these links: P–Q, Q–R, R–U, P–S, S–U. How many different paths are there from P to U that do not visit any device twice?

- (A) 1
- (B) 2
- (C) 3
- (D) 5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P, Q, R, U and P, S, U.

- (A) misses one of the two.
- (C) and (D) count paths that do not exist or repeat devices.
</details>

## Question 7 (multiple choice · stretch)

A fictional video call is poor because some packets are late. A designer says the call software should use a protocol that sends packets quickly without re-sending late or lost ones. Which reasoning supports this?

- (A) A re-sent packet would arrive too late to be useful in a live conversation, so speed matters more than perfect delivery.
- (B) Late packets must never be re-sent in any application.
- (C) Without re-sending, packets can no longer be identified.
- (D) Lost packets cannot occur on the Internet.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For live audio and video a late packet is often useless, so a protocol such as UDP that skips resending can be a better fit.

- (B) overgeneralises; file downloads need re-sent packets.
- (C) packets still carry metadata.
- (D) packets can be lost.
</details>

## Question 8 (constructed response · core)

A fictional school network has this layout: a laptop L connects to a switch W. W connects to router A and to router B. A connects to server V. B connects to server V as well.

(a) List the paths from L to V that do not repeat a device. (2 points)

(b) A 15 MB file is sent from V to L. Every link has a bandwidth of 30 Mbps. How many seconds will the transfer take, ignoring other delays? (2 points)

(c) Router A stops working. Explain what happens to the transfer. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives path L, W, A, V |
| 2 | gives path L, W, B, V |
| 3 | converts correctly: 15 × 8 = 120 megabits |
| 4 | divides by bandwidth: 120 ÷ 30 = 4 seconds |
| 5 | says routing can use the other path through router B, so the transfer still completes |

**Sample response.** (a) L, W, A, V and L, W, B, V. (b) 15 MB is 120 megabits; at 30 Mbps it takes 4 seconds. (c) Packets are routed through B instead, so the transfer still works.
</details>

## Question 9 (constructed response · core)

A web page text is sent as six packets numbered 1 to 6 and they arrive in the order 4, 1, 2, 6, 3. Packet 5 does not arrive.

(a) Explain how the receiver knows packet 5 is missing and can still place the other packets. (2 points)

(b) Describe what happens if the protocol re-requests missing packets, and what happens if it does not. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | says each packet's metadata includes its number, so the receiver can order them |
| 2 | says the gap in the numbers (no 5) shows a packet is missing |
| 3 | says with a protocol such as TCP the receiver asks for packet 5 again and the page is completed |
| 4 | says without re-requesting (such as UDP), the page has a gap that is not repaired automatically |

**Sample response.** (a) Packets carry numbers, so the receiver sorts them 1, 2, 3, 4, 6 and sees that 5 is absent. (b) With TCP it asks for packet 5 again and rebuilds the whole page. With UDP the page would be missing that part.
</details>

## Question 10 (constructed response · stretch)

A student says: "The Internet is the Web, and it is one big computer owned by a single company." Write a short reply that corrects **both** claims, using the terms network, protocols and World Wide Web. (4 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the Internet is a network of interconnected networks (not one computer) |
| 2 | says it is not owned by a single company; it uses open, standardised protocols |
| 3 | says the World Wide Web is a system of linked pages, programs and files |
| 4 | says the Web uses the Internet (and HTTP), so they are different |

**Sample response.** The Internet is a network of interconnected networks that uses open protocols that anyone can follow, so no single company owns it. The World Wide Web is only a system of linked pages and files that runs on the Internet using HTTP, so the two are not the same.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 3 or lost marks in Question 8, re-check the factor of 8 between bytes and bits. Re-read "Packets" in the [study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/4-1-the-internet-checklist/).
