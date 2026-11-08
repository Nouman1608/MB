---
resourceId: "mb-ap-csp-4.2-study-guide"
title: "Fault Tolerance: Study Guide (Computer Science Principles 4.2)"
description: "What fault tolerance and redundancy mean, how the Internet keeps working when devices fail, how to spot single points of failure, and how to compare network designs, with two worked examples."
course: "computer-science-principles"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 4.1 (networks, paths and routing)"
  - "Reading a network diagram"
prerequisiteResources: ["mb-ap-csp-4.1-study-guide"]
learningObjectives: 
  - "Define fault tolerance and redundancy and explain why complex systems need them"
  - "Explain how the Internet is fault-tolerant through multiple paths and dynamic routing"
  - "Find single points of failure and the combinations of failures that disconnect a network"
  - "Compare network designs by the redundancy they give and the extra resources they need"
skills: ["1", "4", "5"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.2-revision-notes", "mb-ap-csp-4.2-practice", "mb-ap-csp-4.2-checklist"]
next: "mb-ap-csp-4.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A system is fault-tolerant if it can keep working when some of its parts fail."
  - "Redundancy means extra components that can take over when others fail; for networks it often means more than one path between any two devices."
  - "The Internet was engineered to be fault-tolerant: if a device or connection fails, later data are sent by a different route if possible."
  - "Redundancy has a cost in extra resources but gives reliability and helps a system scale."
  - "A single point of failure is a component whose failure alone breaks the system."
faqs:
  - question: "What does fault-tolerant mean?"
    answer: "A system is fault-tolerant when it can support failures of some of its parts and still continue to function. For networks this lets users keep using the network even when a device or connection fails."
  - question: "What is redundancy?"
    answer: "The inclusion of extra components that can be used to reduce the effect of a failure if other components fail. In a network, having more than one path between two devices is one way of building in redundancy."
  - question: "Does redundancy have a cost?"
    answer: "Yes. It usually needs additional resources, such as more cables, routers or storage, but it provides the benefit of fault tolerance."
  - question: "Is a network with two paths always fault-tolerant?"
    answer: "It tolerates the failures that leave at least one path working. If a single device lies on both paths, or if the failures cut every path, the connection is still lost, so you must check which failures break it."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why do parts fail, and what do we do about it?

Every real system has parts that can fail: a cable is cut, a router overheats, a power supply stops. Failures are not rare in a large system, they happen **at unexpected times, often in groups**. A system that stops completely whenever one part fails would be useless at the scale of the Internet.

A system is **fault-tolerant** when it can **support failures and still continue to function**. For a network, fault tolerance means users can still send and receive data when a device or connection stops working.

## Redundancy: the idea behind fault tolerance

The key design idea is **redundancy**: the inclusion of **extra components** that can be used to mitigate the failure of a system if other components fail. In a network, the most common form is **having more than one path between any two connected devices**. If one path breaks, data use another.

The Internet has been **engineered to be fault-tolerant**, with abstractions for routing and transmitting data. Because routing is usually dynamic (Topic 4.1), when a particular device or connection fails, **subsequent data are sent via a different route, if possible**. The word "if possible" matters: redundancy protects against *some* failures, not all. The redundancy of routing options between two points **increases the reliability** of the Internet and helps it **scale** to more devices and more people.

**Redundancy costs something.** Extra paths need extra cables, routers and maintenance. The benefit is fault tolerance. Designers choose how much redundancy the importance of the system justifies.

## Weak points: single points of failure

A **single point of failure** is a component whose failure alone cuts the system. A hospital that has one link to the outside world has a single point of failure in that link. To **identify vulnerabilities to failure**, look for places where every path passes through the same device or link, and ask: if this fails, does the connection survive?

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="ft-title ft-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ft-title">A network where device D has failed but data still reach F</title>
<desc id="ft-desc">Six devices: A on the left, B and C in the middle upper and lower, D at the upper right, E at the lower right, F on the far right. Links: A to B, A to C, B to D, C to D, C to E, D to F, E to F. Device D is drawn with a cross through it to show it has failed, and its links are dotted. The surviving path A, C, E, F is drawn with a thick line.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g stroke="#1d2b44" fill="none">
<line x1="70" y1="130" x2="200" y2="60" stroke-width="2"/>
<line x1="70" y1="130" x2="200" y2="200" stroke-width="5"/>
<line x1="200" y1="60" x2="360" y2="60" stroke-width="2" stroke-dasharray="3 5"/>
<line x1="200" y1="200" x2="360" y2="60" stroke-width="2" stroke-dasharray="3 5"/>
<line x1="200" y1="200" x2="360" y2="200" stroke-width="5"/>
<line x1="360" y1="60" x2="540" y2="130" stroke-width="2" stroke-dasharray="3 5"/>
<line x1="360" y1="200" x2="540" y2="130" stroke-width="5"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="70" cy="130" r="22"/><circle cx="200" cy="60" r="22"/><circle cx="200" cy="200" r="22"/><circle cx="360" cy="60" r="22"/><circle cx="360" cy="200" r="22"/><circle cx="540" cy="130" r="22"/>
</g>
<g stroke="#1d2b44" stroke-width="3"><line x1="346" y1="46" x2="374" y2="74"/><line x1="374" y1="46" x2="346" y2="74"/></g>
<g fill="#1d2b44" font-size="16" text-anchor="middle" font-weight="bold">
<text x="70" y="136">A</text><text x="200" y="66">B</text><text x="200" y="206">C</text><text x="360" y="100" font-size="14">D (failed)</text><text x="360" y="206">E</text><text x="540" y="136">F</text>
</g>
<g fill="#1d2b44" font-size="14">
<text x="20" y="250">Thick line: surviving path A, C, E, F. Dotted lines: links to the failed device D.</text>
</g>
</svg>
<figcaption>Figure 1. Device D has failed, but the redundant path A, C, E, F still connects A to F. Redundancy means no single intermediate failure disconnects them.</figcaption>
</figure>

## Comparing designs

Different layouts give different amounts of redundancy for different costs. With five devices:

| Design | Links needed | If one device fails | Redundancy |
|---|---|---|---|
| **Star** (every device linked to one hub) | 4 | If the hub fails, **all** the others are cut off | None through the hub |
| **Ring** (each device linked to two neighbours in a circle) | 5 | Remaining devices can still reach each other | Two routes between any pair |
| **Full mesh** (every pair linked) | 10 | Remaining devices can still reach each other directly | Many routes |

A full mesh of n devices needs n × (n - 1) ÷ 2 links, which grows quickly, so a real network usually uses *some* redundancy rather than a full mesh. The Internet is not one design: it is built of many interconnected networks, giving many alternative routes in total.

## Worked example 1: analysing a network for failures

**Scenario.** Use the network in Figure 1 with all devices working. Links: A–B, A–C, B–D, C–D, C–E, D–F and E–F. Data must go from A to F.

**Task.** (a) List the paths from A to F with no repeated device. (b) Which single failure among B, C, D and E would disconnect A from F? (c) Which pairs of failures would?

**(a) Paths.** A, B, D, F. A, C, D, F. A, C, E, F. A, B, D, C, E, F. That is **four paths**.

**(b) Single failures.**

| Failed device | Surviving paths | Connected? |
|---|---|---|
| B | A, C, D, F and A, C, E, F | yes |
| C | A, B, D, F | yes |
| D | A, C, E, F | yes |
| E | A, B, D, F and A, C, D, F | yes |

No single failure of B, C, D or E disconnects A from F. The network **tolerates any one such failure**. (The devices A and F themselves are single points of failure for *this* connection: if the sender or receiver fails, there is nothing to connect.)

**(c) Pairs.** Check the combinations of two failures.

- B and C fail: A has links only to B and C, so A is cut off. **Disconnected.**
- C and D fail: F's links are to D and E, E's only other link is to C; A can reach B, but B's only other link is to D. **Disconnected.**
- D and E fail: F's links are only to D and E, so F is cut off. **Disconnected.**
- B and D, B and E, C and E: each leaves one working path (A, C, E, F or A, C, D, F or A, B, D, F respectively). **Still connected.**

**Interpretation.** The network is fault-tolerant against single failures but not against all pairs. More redundancy (for example another link into A or F) would be needed to tolerate those pairs, at a cost of extra cable.

**Check.** The count of six pairs from four devices (4 choose 2) is 6: three disconnect and three do not, which matches the list.

## Worked example 2: choosing a design for five offices

**Scenario.** A fictional firm has five offices and must decide how to link them. The budget allows at most 6 links. Offices must stay connected to each other even if any **one** office's equipment fails (but you may ignore the failed office's own connection).

**Task.** Decide which of star, ring and full mesh is suitable and justify.

**Step 1: count links.** Star: 4 links. Ring: 5 links. Full mesh: 5 × 4 ÷ 2 = 10 links. The mesh exceeds the 6-link budget, so it is ruled out.

**Step 2: test the star.** If the hub office fails, the other four have no links among themselves. The star **fails the requirement**.

**Step 3: test the ring.** If one office fails, the other four still form a chain (each linked to its neighbour), so they remain connected. The ring **meets the requirement** with 5 links, within budget.

**Step 4: conclude.** Choose the **ring**. It uses one more link than the star but removes the single point of failure.

**Check.** The ring does not tolerate *every* failure: if two non-adjacent offices fail, the other three split into separate groups. The requirement was one failure, so the design is adequate; if more resilience were needed, the extra links of a mesh would have to be funded.

## Fault tolerance beyond networks

The same idea appears wherever a failure would be costly. A hospital has a **backup generator** in case the mains power fails. A data centre keeps **copies of data on several disks**, so one failed disk loses nothing. An airliner has more than one engine and more than one set of controls. In each case the redundancy is extra equipment that is idle most of the time, and its cost is accepted because the failure it guards against would be serious. When a question asks you to evaluate redundancy, say what the extra component is, what failure it covers and what it costs.

## A method for failure questions

For any question that asks whether a network survives failures, follow the same steps.

1. **List every path** between the two devices that must stay connected (no repeated devices).
2. **Mark the devices or links that fail**, and cross out every path that uses one of them.
3. **Check whether any path is left.** If yes, the connection survives; if no, it does not.
4. **Look for a device that appears in every path.** That is a single point of failure.
5. **Repeat for pairs of failures** if the question asks about two failures at once.

Working from the list of paths avoids the common mistake of judging by the picture alone, where a network can look well connected while all routes share one device.

## Common misconceptions

- **"Fault-tolerant means nothing can ever fail."** It means the system keeps working despite some failures.
- **"Two paths mean no failure can break the connection."** If failures hit both paths, or a shared device, the connection is lost.
- **"Redundancy is wasteful."** It costs resources, but it is what gives reliability.
- **"A star network is fault-tolerant."** Its hub is a single point of failure.
- **"The Internet cannot fail."** It is designed to tolerate many failures, but a user with a single connection can still lose service.
- **"More redundancy is always better."** There is a trade-off between reliability and cost.
- **"Redundancy only matters for networks."** Extra servers, backup power and copies of data are redundancy as well.

## Where this leads

This topic shows one way a design copes with scale and failure. In [Parallel and Distributed Computing](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/), many computers share work, and the same questions about failures and cost appear. Security risks to networks come back in Unit 5, [Safe Computing](/advanced-course-resources/computer-science-principles/5-6-safe-computing-study-guide/). Practise with the [practice questions](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-checklist/).
