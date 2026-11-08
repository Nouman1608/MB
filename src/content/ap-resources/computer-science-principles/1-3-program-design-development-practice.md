---
resourceId: "mb-ap-csp-1.3-practice"
title: "Program Design and Development: Practice Questions (Computer Science Principles 1.3)"
description: "Ten original practice questions on development phases, iterative and incremental processes, requirements, design, documentation and acknowledgement, with explanations and rubrics."
course: "computer-science-principles"
unit: 1
topics: ["1.3"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 1.2 (purpose, inputs and outputs)"
prerequisiteResources: ["mb-ap-csp-1.3-study-guide"]
learningObjectives: 
  - "Apply program design and development to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.3-study-guide", "mb-ap-csp-1.3-revision-notes", "mb-ap-csp-1.3-checklist"]
next: "mb-ap-csp-1.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Code and comments use Marlbridge's rendering of the course's reference notation. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

A fictional team watches shoppers use a self-checkout and interviews the staff before deciding what the new checkout software must do. Which phase is this?

- (A) Prototyping
- (B) Investigating and reflecting
- (C) Testing the finished product
- (D) Writing documentation

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Observation and interviews are investigation: finding out requirements and constraints.

- (A) prototyping means building an early version.
- (C) there is no finished product yet.
- (D) documentation describes code and development, not user needs.
</details>

## Question 2 (multiple choice · foundation)

Which description best matches an **incremental** development process?

- (A) The team repeatedly revises the whole design after each survey.
- (B) The team builds one small part, checks that it works, and then adds the next part.
- (C) The team writes the whole program before testing anything.
- (D) The team copies a finished program from another source.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Incremental means breaking the problem into smaller pieces and making sure each works before adding it.

- (A) describes an iterative process.
- (C) is the opposite: nothing is checked along the way.
- (D) is not a development process; it also needs acknowledgement.
</details>

## Question 3 (multiple choice · core)

A student reads this comment in a program: `/* Calculates the total cost including tax. */`. Which statement is accurate?

- (A) The comment changes the cost that is calculated.
- (B) The comment is documentation for people and does not affect how the program runs.
- (C) The comment makes the program run faster.
- (D) The comment must be removed before the program can run.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Comments are a form of documentation written to be read by people.

- (A), (C) comments have no effect on calculation or speed.
- (D) comments can stay in the program.
</details>

## Question 4 (multiple choice · core)

A fictional team has this requirement for a library app: "Users must be able to renew a book from the book's page." In which phase would the team decide which screens and modules deliver this?

- (A) Investigating
- (B) Designing
- (C) Testing
- (D) Acknowledging

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The design phase outlines how to accomplish the specification, for example by planning screens and modules.

- (A) the requirement already exists, so investigation has done its job.
- (C) testing checks the result against the requirement.
- (D) acknowledging is crediting sources of code.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** are activities that may be part of the **design** phase?

- (A) Sketching a storyboard of the app's screens
- (B) Running the program with defined test inputs
- (C) Organising the program into modules
- (D) Fixing a syntax error reported by the language

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).** Storyboarding and organising into modules are design activities.

- (B) is testing.
- (D) is correcting an error after code exists, which belongs to implementation and testing.
</details>

## Question 6 (multiple choice · core)

A fictional team releases a first version with only the sign-up screen. User feedback shows people want to sign up with a phone number, so the team returns to the design and changes the sign-up form. This is best described as

- (A) incremental only
- (B) iterative, because feedback led them to revise and revisit an earlier phase
- (C) neither iterative nor incremental
- (D) exploratory, which cannot also be iterative

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Revising based on feedback and revisiting design is iterative. Building a first version with one screen is also incremental, but the question asks about the response to feedback.

- (A) ignores the revision.
- (C) is wrong: both ideas are present.
- (D) an exploratory process can also be iterative.
</details>

## Question 7 (multiple choice · stretch)

A student uses a short code segment from a classmate's project in their own program. Which action is **best**?

- (A) Say nothing, because the segment is short.
- (B) Add a comment naming the classmate and what the segment does.
- (C) Delete all comments so the source is not obvious.
- (D) Rename the variables and present the code as their own.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Code developed by another source must be acknowledged, including the origin or author's name; documentation is a natural place.

- (A) length does not remove the need to acknowledge.
- (C) hides the origin; it is the opposite of acknowledging.
- (D) renaming does not change who wrote it; this is passing others' work off as your own.
</details>

## Question 8 (constructed response · core)

A fictional team builds a quiz app for a school club. (a) Name **two** ways they could investigate what club members need. (2 points) (b) Give **one** example of a requirement that could come from that investigation. (1 point) (c) Explain how the requirement could be used later when testing. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1, 2 | names two valid methods (survey, interview, direct observation, user testing of a similar app) |
| 3 | gives a requirement stated as what the program must do (for example, "players must see their score after each question") |
| 4 | says the requirement tells you what outcome to expect in a test |
| 5 | gives or implies a test (for example, answer a question and check that the score is shown) |

**Sample response.** (a) A survey of club members and watching them use a similar quiz. (b) Players must see their score after every question. (c) In testing, the team can enter one answer and check that the score appears right after it; the requirement tells them what correct behavior looks like.
</details>

## Question 9 (constructed response · core)

A student writes the comment `/* Adds 1 to count. */` above the statement `count ← count + 1`. (a) Explain why this comment is not very useful. (1 point) (b) Rewrite it so that it is more useful for the reader, assuming the statement counts the number of correct answers in a quiz. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (3 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the comment only repeats what the statement already shows and does not explain purpose |
| 2 | rewrite states the purpose (counts the correct answers so far) |
| 3 | rewrite adds context useful to a reader (for example, this happens each time an answer is correct, and the count is used for the final score) |

**Sample response.** (a) A reader can already see that 1 is added; the comment does not say why. (b) `/* Count one more correct answer; count is used to show the final score. */`
</details>

## Question 10 (constructed response · stretch)

A team builds a weather app. In week 1 they interview users. In week 2 they sketch screens. In week 3 they build and test the forecast screen. In week 4 they learn from testing that users want an hourly view, so they redesign the forecast screen, rebuild it and test it again. Only then do they begin the alerts screen.

(a) Identify where the team is **iterative** and justify. (2 points) (b) Identify where the team is **incremental** and justify. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | identifies week 4 (redesigning after testing) as iterative |
| 2 | justifies: feedback from testing led to revision and a return to an earlier phase |
| 3 | identifies building and finishing the forecast screen before the alerts screen as incremental |
| 4 | justifies: one piece is checked and working before the next piece is added |

**Sample response.** The redesign in week 4 is iterative because test feedback sends the team back to design and they revise. Finishing the forecast screen before starting the alerts screen is incremental because one part is made to work before the next is added.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you mixed up iterative and incremental, re-read "Iterative and incremental" in the [study guide](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/). For documentation and acknowledgement, re-read Worked example 2. Then try the [checklist](/advanced-course-resources/computer-science-principles/1-3-program-design-development-checklist/).
