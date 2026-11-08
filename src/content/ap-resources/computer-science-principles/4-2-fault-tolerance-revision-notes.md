---
resourceId: "mb-ap-csp-4.2-revision-notes"
title: "Fault Tolerance: Revision Notes (Computer Science Principles 4.2)"
description: "One-page recap of fault tolerance, redundancy, multiple paths, single points of failure and the trade-off between reliability and extra resources."
course: "computer-science-principles"
unit: 4
topics: ["4.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-4.2-study-guide"]
learningObjectives: 
  - "Recall the key ideas of fault tolerance without notes"
  - "Spot the common errors before making them"
skills: ["1", "4", "5"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.2-study-guide", "mb-ap-csp-4.2-practice", "mb-ap-csp-4.2-checklist"]
next: "mb-ap-csp-4.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A system is fault-tolerant if it can keep working when some of its parts fail."
  - "Redundancy means extra components that can take over when others fail; for networks it often means more than one path between any two devices."
  - "The Internet was engineered to be fault-tolerant: if a device or connection fails, later data are sent by a different route if possible."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-study-guide/).

## Recap

- **Fault-tolerant**: a system that can support failures and still continue to function.
- **Redundancy**: extra components that can take over if others fail; in networks, more than one path between two devices.
- The Internet is **engineered to be fault-tolerant**; if a device or connection fails, data are sent by a different route, if possible.
- Redundancy needs **additional resources** but gives **reliability** and helps the system **scale**.
- A **single point of failure** breaks the system alone; find where all paths share a component.
- Complex systems fail at unexpected times, often in groups.

## Key relationships

| Idea | How to analyse it |
|---|---|
| Is a design fault-tolerant? | Remove one device or link at a time: is there still a path? |
| Single point of failure | A device or link on every path |
| Combinations | Check pairs of failures too if asked |
| Links in a full mesh of n devices | n × (n - 1) ÷ 2 |
| Cost of redundancy | More links, devices and maintenance |

## Assumptions and conventions

- When counting paths, do not repeat a device.
- Fault-tolerance questions usually ask about **intermediate** devices; the sender and receiver are necessarily needed.
- State both the benefit (reliability) and the cost (resources) when evaluating redundancy.

## Mistakes to avoid

1. Saying fault-tolerant means "never fails".
2. Counting a path that repeats a device.
3. Forgetting to test combinations of failures when the question asks.
4. Missing the single point of failure shared by all paths.
5. Giving only the benefit of redundancy, not the cost.
6. Treating a star network as having backup routes.

## Two quick worked examples

**1.** Devices A, B, C and D with links A-B, B-D, A-C and C-D. Paths from A to D: A, B, D and A, C, D. If B fails, A, C, D survives. If B and C both fail, no path is left.

**2.** A hospital adds a second cable between its server room and its emergency department. Benefit: if one cable is cut, data use the other. Cost: the second cable, its installation and its upkeep.

## A revision routine

Draw a network of six devices with at least two paths between a sender and a receiver. List every path, then test every single failure and every pair of failures among the middle devices. Mark any device that lies on every path. Finish by counting the links in a star, a ring and a full mesh of five devices, and say what the extra links buy.

## Quick self-check

1. Five devices are linked in a star around a hub. What happens if the hub fails? *(The other four are cut off from each other.)*
2. How many links does a full mesh of 6 devices need? *(6 × 5 ÷ 2 = 15.)*
3. Name one cost of redundancy. *(Extra resources such as cables, devices and maintenance.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/4-2-fault-tolerance-practice/).
