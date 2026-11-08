---
resourceId: "mb-ap-csp-u1-diagnostic"
title: "Creative Development: Unit Diagnostic (Computer Science Principles Unit 1)"
description: "A 25-minute check with short questions on every topic of Unit 1: collaboration, program function and purpose, design and development, and identifying and correcting errors."
course: "computer-science-principles"
unit: 1
topics: []
resourceType: "unit-diagnostic"
prerequisites: 
  - "You have studied some or all of Topics 1.1 to 1.4"
learningObjectives: 
  - "Find out which Unit 1 topics are secure and which need more work"
  - "Practise short questions on collaboration, program purpose, development processes and errors"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["1", "2", "4"]
studyMinutes: 25
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-u1-review", "mb-ap-csp-1.1-study-guide", "mb-ap-csp-1.2-study-guide", "mb-ap-csp-1.3-study-guide", "mb-ap-csp-1.4-study-guide"]
next: "mb-ap-csp-u1-review"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Eleven short questions covering all four topics in Unit 1."
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

Use this diagnostic to find **which Unit 1 topics to revisit**: at least two questions for each topic.

These are **original Marlbridge practice questions**, not past exam questions, with fictional scenarios. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 25 minutes and answer everything before opening any answer. No calculator. Code uses Marlbridge's rendering of the course's reference notation (assignment `←`, `DISPLAY`, `INPUT`).

## Question 1 (multiple choice · 1.1)

A fictional team builds a navigation app for a city. Which step best uses collaboration to improve the app?

- (A) The team members each test the app on their own phones in their own neighbourhoods.
- (B) The team asks wheelchair users, parents with prams and cyclists to try early versions and describe their problems.
- (C) The team copies the layout of a competitor's app.
- (D) The team lets the fastest programmer finish the project alone.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Consulting varied potential users brings in perspectives the team may lack.

- (A) stays within the team's own experience.
- (C) copies a design without asking users.
- (D) reduces the perspectives to one.

**If you missed this:** [Topic 1.1 study guide](/advanced-course-resources/computer-science-principles/1-1-collaboration-study-guide/).
</details>

## Question 2 (multiple choice · 1.1)

In pair programming, the **navigator**

- (A) types all the code while the driver relaxes
- (B) reviews each statement as it is written, watches for errors and thinks ahead, and swaps roles with the driver
- (C) tests the program only after it is finished
- (D) works on a separate program at a different computer

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The navigator actively reviews while the driver writes; the roles are swapped.

- (A) reverses the roles and ignores the review.
- (C) the review happens during writing.
- (D) pair programming is at one computer.

**If you missed this:** [Topic 1.1 study guide](/advanced-course-resources/computer-science-principles/1-1-collaboration-study-guide/).
</details>

## Question 3 (multiple choice · 1.2)

A fictional music app plays the next song when the user swipes the screen to the left. The swipe is

- (A) the purpose of the app
- (B) an event that supplies input and can trigger code
- (C) an output
- (D) a syntax error

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A swipe is an action that provides data and triggers the code that plays the next song.

- (A) the purpose is why the app exists, such as helping people enjoy music.
- (C) output goes from the program to a device.
- (D) an error type, unrelated here.

**If you missed this:** [Topic 1.2 study guide](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/).
</details>

## Question 4 (multiple choice · 1.2)

```text
n ← INPUT()
IF (n MOD 2 = 0)
{
  DISPLAY("even")
}
ELSE
{
  DISPLAY("odd")
}
```

(`n MOD 2` is the remainder when n is divided by 2.) What is displayed for the input 7?

- (A) even
- (B) odd
- (C) 1
- (D) Nothing is displayed.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 7 MOD 2 is 1, which is not 0, so the ELSE branch displays "odd".

- (A) would need a remainder of 0.
- (C) the remainder is computed but only the words are displayed.
- (D) one branch always runs.

**If you missed this:** [Topic 1.2 study guide](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/).
</details>

## Question 5 (multiple choice · 1.2)

Which statement describes the **purpose** of a fictional food-delivery app?

- (A) The app displays a list of restaurants sorted by distance.
- (B) The app lets hungry people order meals from nearby restaurants without phoning.
- (C) When the user taps Pay, the app sends the order.
- (D) The app stores the delivery address in a variable.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** It says why the app exists. (A) and (D) describe functions; (C) describes behavior.

**If you missed this:** [Topic 1.2 study guide](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/).
</details>

## Question 6 (multiple choice · 1.3)

A team interviews customers, sketches screens, builds a first screen, tests it with users, and then changes the sketches because of what they learn. The step in which they change the sketches is best described as

- (A) incremental, because they built one screen
- (B) iterative, because feedback sent them back to an earlier phase
- (C) documentation
- (D) a syntax error

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Revising after feedback and returning to design is iterative.

- (A) is a different idea: building in small verified pieces.
- (C) documentation describes the code; it does not change the design.
- (D) not an error.

**If you missed this:** [Topic 1.3 study guide](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/).
</details>

## Question 7 (multiple choice, select two · 1.3)

Which **two** statements about comments and documentation are accurate?

- (A) Comments are written for people and do not affect how a program runs.
- (B) Documentation should be written only after the program is finished.
- (C) Code from another source should be acknowledged, including the origin or author.
- (D) Comments make a program run faster.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).**

- (B) documentation should be written throughout development.
- (D) comments have no effect on speed.

**If you missed this:** [Topic 1.3 study guide](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/).
</details>

## Question 8 (multiple choice · 1.4)

The requirement is "free delivery for orders of 30 or more". The code is `IF (order > 30)`. Which input exposes the error?

- (A) 10
- (B) 29
- (C) 30
- (D) 80

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At 30 the requirement says free delivery, but `30 > 30` is false: a logic error at the boundary.

- (A), (B) both versions give no free delivery.
- (D) both versions give free delivery.

**If you missed this:** [Topic 1.4 study guide](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/).
</details>

## Question 9 (multiple choice · 1.4)

A program will not start; the environment reports that a closing bracket is missing. This is

- (A) a logic error
- (B) a syntax error
- (C) a run-time error
- (D) an overflow error

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A missing bracket breaks the language's rules.

- (A) logic errors do not stop the program from starting.
- (C) run-time errors happen during execution.
- (D) overflow concerns numbers beyond the representable range.

**If you missed this:** [Topic 1.4 study guide](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/).
</details>

## Question 10 (constructed response · 1.1 and 1.3)

A fictional team of four friends is building a website to help older people find local classes. All four are students and none has asked an older person what they want. (a) Describe **one** way they could investigate what older people need. (b) Explain how what they learn could affect the design. (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | names a specific method (interview, survey, observing someone use a similar site, user testing a prototype) |
| 2 | says what it could reveal (text size, phone numbers, printed lists, no apps) |
| 3 | links to a design change (larger text, a phone line, simpler navigation) |

**Sample response.** They could interview older people at a community centre. They may learn that many prefer large text and phone numbers, so the design could use bigger fonts and show a number for booking.

**If you missed this:** [Topic 1.1 study guide](/advanced-course-resources/computer-science-principles/1-1-collaboration-study-guide/) and [Topic 1.3 study guide](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/).
</details>

## Question 11 (constructed response · 1.2 and 1.4)

```text
total ← 0
i ← 1
REPEAT 3 TIMES
{
  total ← total + i * 2
  i ← i + 1
}
DISPLAY(total)
```

(a) Trace the code and state the output. (2 points) (b) The intention was to display 2 + 4 + 6 + 8. State what to change. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | shows a correct trace: after pass 1 total 2; pass 2 total 6; pass 3 total 12 |
| 2 | states the output 12 |
| 3 | says to change `REPEAT 3 TIMES` to `REPEAT 4 TIMES` (giving 20) |

**Sample response.** (a) The output is 12 (2, then 2 + 4 = 6, then 6 + 6 = 12). (b) Repeat four times, which gives 20.

**If you missed this:** [Topic 1.4 study guide](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/) and [Topic 1.2 study guide](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/).
</details>

## What next?

For each question you missed, read the study guide linked in its answer. If you missed two or more in one topic, work through that topic's practice questions. When you are ready, try the [Unit 1 mixed review](/advanced-course-resources/computer-science-principles/unit-1-review/).
