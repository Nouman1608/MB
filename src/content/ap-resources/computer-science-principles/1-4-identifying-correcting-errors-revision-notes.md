---
resourceId: "mb-ap-csp-1.4-revision-notes"
title: "Identifying and Correcting Errors: Revision Notes (Computer Science Principles 1.4)"
description: "One-page recap of error types, test cases, expected outputs, boundary inputs and debugging techniques such as hand tracing and extra output statements."
course: "computer-science-principles"
unit: 1
topics: ["1.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-1.4-study-guide"]
learningObjectives: 
  - "Recall the key ideas of identifying and correcting errors without notes"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.4-study-guide", "mb-ap-csp-1.4-practice", "mb-ap-csp-1.4-checklist"]
next: "mb-ap-csp-1.4-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "A logic error gives wrong behavior; a syntax error breaks the language's rules; a run-time error happens while the program runs; an overflow error comes from a number outside the representable range."
  - "Testing uses defined inputs and the outputs expected from the requirements; a mismatch shows an error."
  - "Good test inputs include values at or just beyond the extremes of the allowed input, as well as typical values."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/).

## Recap

- **Syntax error**: the language's rules are not followed.
- **Logic error**: the algorithm or program behaves incorrectly or unexpectedly; it still runs.
- **Run-time error**: a mistake that occurs during execution; each language defines its own.
- **Overflow error**: a value outside the representable range (integers use a fixed number of bits in many languages).
- **Testing** uses **defined inputs** to check **expected outputs**, which come from the requirements.
- Good tests show the different expected outcomes and include values **at or just beyond the extremes** and at boundaries.
- Ways to find errors: **test cases, hand tracing, visualisations, debuggers, extra output statements**.
- After a correction, **retest**.

## Key relationships

| Symptom | Likely error |
|---|---|
| Will not run; points to a line | Syntax |
| Runs, shows a wrong answer | Logic |
| Stops during running (for example, divide by zero) | Run-time |
| Number too big for its storage | Overflow |
| Condition wrong by exactly one value | Logic error at a boundary (`>` or `>=`) |
| Loop does one pass too many or too few | Logic error (off by one) |

## Assumptions and conventions

- In a trace table, record each variable after **every statement** or after each pass, and keep the columns consistent.
- Compare **expected** with **actual** output; the expected value comes from the requirement.
- Pseudocode here is Marlbridge's rendering of the reference notation: `←` assigns, `*` multiplies, `>=` means at least.

## Mistakes to avoid

1. Calling every error a "syntax error".
2. Taking expected outputs from the program under test.
3. Using only typical values and skipping boundaries.
4. Making the trace table too coarse, so the error is stepped over.
5. Stopping after the first failing test without retesting the whole set after a fix.
6. Forgetting that a fix can break something else.

## Two quick worked examples

**1.** Requirement: "free entry for ages under 12". Code: `IF (age <= 12)`. The input 12 should be refused free entry but is accepted, so this is a **logic error at the boundary**; the test inputs 11, 12 and 13 reveal it.

**2.** A list has 4 items and the code asks for item 5. The program stops while running: a **run-time error**. Adding `DISPLAY(LENGTH(list))` just before the line would show the length is 4, which is an example of using an **extra output statement** to find an error.

## A revision routine

Cover the page and write out the four error types with one example each. Then take any short code segment from the study guide, write a requirement for it, choose five test inputs including two boundary values, and predict the expected outputs **before** tracing the code. Finally trace the code in a table and compare. Practising in this order, requirement first and code second, stops you from accepting whatever the program happens to print.

## Quick self-check

1. The requirement is "pass if score is at least 40". The code tests `score > 40`. Which input shows the error? *(40: expected pass, actual fail.)*
2. A loop meant to add 1 to 10 runs 9 times. Error type? *(Logic error: off by one.)*
3. A program stops when it divides a total by a count of zero. Error type? *(Run-time error.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-practice/).
