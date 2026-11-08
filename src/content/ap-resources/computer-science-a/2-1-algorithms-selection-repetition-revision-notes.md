---
resourceId: "mb-ap-csa-2.1-revision-notes"
title: "Algorithms with Selection and Repetition: Revision Notes (Computer Science A 2.1)"
description: "One-page recap of algorithms built from sequencing, selection and repetition: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.1-study-guide"]
learningObjectives:
  - "Name the three building blocks of an algorithm and recognise each in a description, a flowchart or code"
  - "Describe an everyday process as an algorithm using written steps or a flowchart"
skills: ["1", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.1-study-guide", "mb-ap-csa-2.1-practice", "mb-ap-csa-2.1-checklist"]
next: "mb-ap-csa-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "Every algorithm is built from three blocks: sequencing (steps in order), selection (a true or false decision picks a path) and repetition (a process repeats until a goal is met)."
  - "Selection asks a yes or no question once; repetition asks it again and again."
  - "The order and the nesting of the blocks decide the outcome: a decision inside a loop is not the same algorithm as a loop inside a decision."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

An **algorithm** is a finite list of precise steps that solves a problem. Every algorithm is assembled from three **building blocks**.

| Block | What it does | Everyday example | Flowchart shape |
|---|---|---|---|
| Sequencing | Steps run one after another, in order | Fill the kettle, then boil it, then pour | Boxes joined by arrows |
| Selection | A true or false decision picks one path | If it is raining, take an umbrella | Diamond with two exits |
| Repetition | A process repeats until a desired outcome is reached | Stir until the sauce thickens | An arrow that goes back to an earlier step |

**Order matters in two ways.**

- The order of the steps: shoes before socks is a different algorithm from socks before shoes.
- The nesting of the blocks: a decision inside a loop is asked on every pass; a loop inside a decision runs only if the decision comes out the right way.

## Key relationships

| Idea | Rule to remember |
|---|---|
| Selection vs repetition | Selection asks once; repetition asks again and again |
| Typical pattern | A selection inside a repetition: go through everything, act only on some |
| Stopping condition | Every repetition needs one, and something must move toward it |
| Tracing | One row per pass, one column per changing value |
| Two ways to describe | Numbered steps in plain language, or a flowchart |

## Assumptions

- The steps are precise: anyone following them gets the same result.
- The algorithm finishes after a finite number of steps.
- A decision is a question whose answer is exactly true or false.

## Mistakes to avoid

- Treating a loop and an `if` as interchangeable because both involve a test.
- Moving a step inside or outside a loop without checking how many times it now happens.
- Writing a repeat step with no condition that can ever end it.
- Describing the algorithm vaguely ("deal with the late books") instead of with exact steps and values.
- Tracing without writing the values down.

## Quick self-check

1. Which building block does this describe? "Keep adding eggs until the bowl holds 6." *Answer: repetition, the process repeats until the desired outcome (6 eggs) is reached.*
2. A program asks whether a number is negative once and prints a message if it is. Which block is that? *Answer: selection (a single decision, no repeating).*
3. In which algorithm is the decision made more times: "for each of 5 students, if the student is absent, record it" or "if student 1 is absent, then for each of 5 students, record it"? *Answer: the first: its decision is inside the loop, so it is made 5 times; the second makes it once.*
4. Trace: `total = 0; repeat 4 times: if total < 6, add 2 to total.` What is `total` at the end? *Answer: 0, 2, 4, 6 after passes 1 to 3; on pass 4 the test 6 < 6 is false, so total stays 6.*

Full explanations and diagrams are in the [Topic 2.1 study guide](/advanced-course-resources/computer-science-a/2-1-algorithms-selection-repetition-study-guide/).
