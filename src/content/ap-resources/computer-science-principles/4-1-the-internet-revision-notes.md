---
resourceId: "mb-ap-csp-4.1-revision-notes"
title: "The Internet: Revision Notes (Computer Science Principles 4.1)"
description: "One-page recap of computing devices, networks, paths, routing, bandwidth, the Internet and its protocols, packets, scalability, and the Internet versus the World Wide Web."
course: "computer-science-principles"
unit: 4
topics: ["4.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-4.1-study-guide"]
learningObjectives: 
  - "Recall the key ideas of the internet without notes"
  - "Spot the common errors before making them"
skills: ["1", "4", "5"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.1-study-guide", "mb-ap-csp-4.1-practice", "mb-ap-csp-4.1-checklist"]
next: "mb-ap-csp-4.1-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A computer network is a group of interconnected computing devices that can send or receive data; a path is a sequence of directly connected devices from sender to receiver."
  - "The Internet is a network of interconnected networks using standardised, open protocols, so new devices can join easily."
  - "Data are sent as a stream of packets; each packet holds a chunk of data plus metadata for routing and reassembly, and packets may arrive in order, out of order or not at all."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/4-1-the-internet-study-guide/).

## Recap

- **Computing device**: a physical artifact that can run a program. **Computing system**: devices and programs working together. **Computer network**: interconnected devices that send or receive data.
- **Path**: a sequence of directly connected devices from sender to receiver. **Routing**: finding a path.
- **Bandwidth**: maximum data per fixed time, usually in **bits per second**.
- **The Internet**: interconnected networks using standardised, open protocols. **Protocol**: an agreed-upon set of rules.
- Routing is usually **dynamic**; the Internet is **scalable**.
- Data travel as a stream of **packets**: a data chunk plus metadata for routing and reassembly. Packets may arrive in order, out of order or not at all.
- **IP, TCP and UDP** are common protocols.
- The **World Wide Web** is a system of linked pages, programs and files; it uses the Internet and **HTTP**.

## Key relationships

| Idea | How to work it out |
|---|---|
| Number of paths | List sequences of linked devices from sender to receiver with no repeats |
| Transfer time | File size in bits ÷ bandwidth in bits per second |
| File size to bits | bytes × 8 |
| Reassembly | Use the packet numbers in the metadata |
| Dynamic routing | A different route can be chosen if one is busy or fails |
| Internet versus Web | Internet is the network; the Web is a service on it (HTTP) |

## Assumptions and conventions

- Bandwidth problems assume the link is the only limit and the data flow continuously.
- 1 byte = 8 bits. Say which unit you use at each step.
- In diagrams, count **links** (connections), not devices, when giving the length of a path.

## Mistakes to avoid

1. Forgetting to multiply bytes by 8 before dividing by bandwidth in bits per second.
2. Calling the Web "the Internet".
3. Counting devices instead of links in a path.
4. Assuming packets arrive in order.
5. Saying a network has one path when the diagram shows alternatives.
6. Describing protocols as private to one company.

## Two quick worked examples

**1.** A 12 MB photo crosses a 24 Mbps link. 12 × 8 = 96 megabits; 96 ÷ 24 = 4 seconds.

**2.** A message is sent as packets 1 to 5 and arrives in the order 2, 1, 5, 3. The receiver can reorder using the packet numbers to get 1, 2, 3, 5 and sees that packet 4 is missing. With a protocol that re-requests missing packets, packet 4 is asked for again; with one that does not, there is a gap.

## Quick self-check

1. A 10 MB file crosses a 40 Mbps link. How long does it take? *(10 × 8 = 80 megabits; 80 ÷ 40 = 2 seconds.)*
2. Why can a receiver put out-of-order packets back in order? *(Each packet's metadata includes its place in the message.)*
3. Is email part of the Web? *(No; it uses the Internet but is not a linked page system over HTTP.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/4-1-the-internet-practice/).
