---
resourceId: "mb-ap-csp-2.2-revision-notes"
title: "Data Compression: Revision Notes (Computer Science Principles 2.2)"
description: "One-page recap of data compression: lossless versus lossy, redundancy, run-length encoding, size-reduction calculations and choosing a method for a situation."
course: "computer-science-principles"
unit: 2
topics: ["2.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-2.2-study-guide"]
learningObjectives: 
  - "Recall the key ideas of data compression without notes"
  - "Spot the common errors before making them"
skills: ["1", "3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.2-study-guide", "mb-ap-csp-2.2-practice", "mb-ap-csp-2.2-checklist"]
next: "mb-ap-csp-2.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Data compression reduces the number of bits needed to store or transmit data."
  - "Lossless compression allows complete reconstruction of the original; lossy compression allows only an approximation."
  - "Lossy methods can usually reduce size more than lossless methods."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/2-2-data-compression-study-guide/).

## Recap

- **Data compression** reduces the number of bits needed to store or transmit data.
- **Fewer bits does not necessarily mean less information.**
- The size saved depends on the **redundancy** in the data and the **algorithm**.
- **Lossless**: usually reduces bits and guarantees **complete reconstruction** of the original.
- **Lossy**: can reduce bits **significantly**, but allows reconstruction of only an **approximation**.
- Lossy usually reduces size more than lossless.
- Choose **lossless** when quality or exact reconstruction matters most; choose **lossy** when minimising size or transmission time matters most.
- **Run-length encoding** (lossless): store a value and the length of its run.

## Key relationships

| Idea | How to work it out |
|---|---|
| Percentage saved | (original size - compressed size) ÷ original size × 100 |
| Size after run-length coding | Number of runs × size of one (count, value) pair |
| Does a method suit the data? | Many repeats: good saving. Few repeats: little or negative saving |
| Lossless or lossy? | Can the exact original be rebuilt? Yes: lossless. Only an approximation: lossy |
| Which to choose? | State the priority (quality or size), then match, then name the trade-off |

## Assumptions and conventions

- In size calculations, state the bits per character or pixel you assume (for example 8 bits).
- A "run" is a block of identical values that appear next to each other.
- No specific named algorithm is required.

## Mistakes to avoid

1. Claiming all compression loses information.
2. Choosing lossy for text or code where a single change could corrupt meaning.
3. Choosing lossless when the scenario's priority is small size and speed.
4. Forgetting that run-length coding can make data longer if there are few repeats.
5. Computing the percentage saved against the compressed size instead of the original.
6. Giving a choice without naming the trade-off.

## Two quick worked examples

**1.** `WWWWWBBWWWWWWWW` has runs of 5 W, 2 B and 8 W, giving `5W2B8W`: 15 characters become 6, a saving of 9 ÷ 15 = 60%. Decoding gives back exactly the original, so the scheme is lossless.

**2.** A picture with 256 shades uses 8 bits per pixel; reducing it to 16 shades uses 4 bits per pixel, halving the size. The original shading cannot be recovered afterwards, so this is lossy.

## A revision routine

Write the definitions of lossless and lossy from memory, with one situation where each is the better choice and the reason. Then run-length encode two strings of your own, one with long runs and one with none, and compute the percentage saved or lost for each. Seeing a method fail on the second string fixes the idea that savings depend on redundancy.

## Quick self-check

1. Encode `AAAABBBCC` by run-length. *(4A3B2C)*
2. Which type lets you rebuild the exact original? *(Lossless.)*
3. A 40 MB video becomes 10 MB. What percentage is saved? *((40 - 10) ÷ 40 = 75%)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/2-2-data-compression-practice/).
