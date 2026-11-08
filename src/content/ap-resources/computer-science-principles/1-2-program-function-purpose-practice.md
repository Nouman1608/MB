---
resourceId: "mb-ap-csp-1.2-practice"
title: "Program Function and Purpose: Practice Questions (Computer Science Principles 1.2)"
description: "Ten original practice questions on program purpose, inputs, outputs, events, code segments and predicting behavior, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 1
topics: ["1.2"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 1.1 (what a computing innovation is)"
prerequisiteResources: ["mb-ap-csp-1.2-study-guide"]
learningObjectives: 
  - "Apply program function and purpose to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.2-study-guide", "mb-ap-csp-1.2-revision-notes", "mb-ap-csp-1.2-checklist"]
next: "mb-ap-csp-1.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Code is written in Marlbridge's rendering of the course's reference notation (assignment `←`, `DISPLAY`, `INPUT`). The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

A fictional app lets a user dictate a shopping list by speaking. Which of the following is the **input** to the program?

- (A) The spoken words
- (B) The list shown on the screen
- (C) The app's name
- (D) The sound the phone makes when the list is saved

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The spoken words are audio data sent to the program for processing.

- (B) is output: data sent from the program to a screen.
- (C) is not data the program processes.
- (D) is output (sound) from the program to a speaker.
</details>

## Question 2 (multiple choice · foundation)

Which statement best describes the **purpose** of a fictional language-flashcard app?

- (A) It stores each word in a list and shows them in random order.
- (B) It helps learners memorise vocabulary by practising words they find difficult.
- (C) It runs when the user taps the app icon.
- (D) It displays a card with the word on one side and its meaning on the other.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Purpose says why the app exists: to help a user with a problem.

- (A) and (D) describe what the program does (function).
- (C) describes an event that starts the program (behavior).
</details>

## Question 3 (multiple choice · core)

A user of a fictional drawing program presses the Z key to undo the last stroke. Which of the following is correct?

- (A) Pressing the key is an event that supplies input and can trigger the undo code.
- (B) Pressing the key is an output.
- (C) The undo code runs only if it appears first in the program.
- (D) Pressing the key is a code segment.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A key press is an action that supplies data and can cause code to run, which is how event-driven programs work.

- (B) confuses direction: outputs go from the program to a device.
- (C) is false: in event-driven programming, code runs when its event occurs, not only in its written order.
- (D) a key press is not a collection of statements.
</details>

## Question 4 (multiple choice · core)

```text
x ← 5
y ← 3
x ← x + y
y ← x - y
DISPLAY(x)
DISPLAY(y)
```

What is displayed?

- (A) 5 then 3
- (B) 8 then 5
- (C) 8 then 3
- (D) 3 then 5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Trace: x is 5, y is 3. After `x ← x + y`, x is 8. After `y ← x - y`, y is 8 - 3 = 5. The output is 8 then 5.

- (A) shows the starting values and ignores the assignments.
- (C) uses the old y (3) for the second display.
- (D) mixes up the order of display.
</details>

## Question 5 (multiple choice, select two · core)

A fictional weather app displays a rain warning when the forecast probability of rain is above 70 percent. Which **two** statements describe the behavior or function of the app?

- (A) When the forecast reaches 75 percent, the app displays a warning.
- (B) The app solves the problem of people being caught in the rain unprepared.
- (C) The app displays a warning only when the probability is greater than 70 percent.
- (D) The app was written by a team of four developers.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (C).** Both describe what the app does or how it acts when it runs.

- (B) describes the purpose (why it exists), not the function or behavior.
- (D) is information about development, not about what the program does.
</details>

## Question 6 (multiple choice · core)

```text
count ← 0
score ← INPUT()
IF (score >= 50)
{
  count ← count + 1
}
DISPLAY(count)
```

Which input produces the output 1?

- (A) 49
- (B) 50
- (C) 0
- (D) -50

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The condition `score >= 50` is true when the score is 50 (greater than or equal to), so `count` becomes 1.

- (A) 49 is less than 50, so the condition is false and 0 is displayed.
- (C) and (D) are also less than 50, so 0 is displayed.
</details>

## Question 7 (multiple choice · stretch)

A developer tests the segment in Question 6 only with the input 80 and concludes the program is correct. Which is the best criticism?

- (A) The developer should have used a different programming language.
- (B) A single input cannot show the program works for a variety of inputs; a boundary input such as 50 or 49 should also be tested.
- (C) The developer should have used no input.
- (D) Testing is unnecessary because the code is short.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Programs need to work for a variety of inputs, and the boundary is where mistakes (for example, `>` instead of `>=`) show up.

- (A) language is not the issue; the exam is language independent.
- (C) removing input would remove the thing being tested.
- (D) short code can still have errors.
</details>

## Question 8 (constructed response · core)

A fictional school builds a bus-tracking app. Parents open the app and see a map showing where the bus is. A message pops up when the bus is five minutes from the stop.

(a) State the purpose of the app. (1 point)

(b) Identify one input and one output. (2 points)

(c) Identify one event and say what the program might do when it occurs. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a purpose that says why the app exists (for example, helps parents know when to meet the bus) |
| 2 | gives a correct input (the bus's location data, the user opening the app, the stop the parent chose) |
| 3 | gives a correct output (the map, the pop-up message) |
| 4 | names a valid event (the bus reaching five minutes from the stop; the app being opened) |
| 5 | says what the program does in response (displays the message; shows the map) |

**Sample response.** (a) The app helps parents avoid waiting at the stop by showing when the bus will arrive. (b) Input: the bus's location data. Output: the map on the screen. (c) Event: the bus reaches a point five minutes from the stop; the program then displays a pop-up message.

Do not award point 3 for the same item as point 2.
</details>

## Question 9 (constructed response · core)

```text
a ← INPUT()
b ← INPUT()
IF (a > b)
{
  DISPLAY(a)
}
ELSE
{
  DISPLAY(b)
}
```

(a) Describe the function of this code segment in one sentence. (1 point)

(b) Give the output when the inputs are 7 and 12, and when they are 9 and 9. (2 points)

(c) A teammate says "this segment always displays the larger of two inputs". Explain whether the claim is accurate, including the case where the inputs are equal. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the segment displays the larger of the two input numbers |
| 2 | gives 12 for inputs 7 and 12 (the condition 7 > 12 is false, so b is displayed) |
| 3 | gives 9 for inputs 9 and 9 (the condition is false, so b, which is 9, is displayed) |
| 4 | concludes that the claim is accurate, because when the inputs differ the larger one is displayed |
| 5 | handles the equal case: both values are the same, so displaying b still displays the larger (equal) value |

**Sample response.** (a) It displays the larger of the two numbers entered. (b) 12; and 9. (c) The claim is accurate: if a is larger, a is displayed; otherwise b is displayed, which is larger or equal. When both are 9, b is displayed, which is 9, the same as the larger.
</details>

## Question 10 (constructed response · stretch)

A fictional team builds a quiz app. The team says: "The app works. We tried it with one question and it gave the right score." Explain two reasons why that is not enough evidence, and describe one type of input they should add. (4 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives a first reason (one test input cannot show the program works for a variety of inputs) |
| 2 | gives a second reason (different paths in the code, such as correct and incorrect answers, might not have been run) |
| 3 | names a type of input to add (a wrong answer, no answer, the maximum number of questions) |
| 4 | explains what that input would check |

**Sample response.** One question tests only one path through the code; the app has to work for a variety of inputs, such as a wrong answer or a skipped question. They should test a skipped question to see whether the score stays correct when no answer is entered.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 4 or 6, re-trace with a table of variable values. If you lost points on a written question, check that you named the thing asked for (purpose, input, event) rather than a neighbouring idea. Re-read "Inputs, outputs and events" in the [study guide](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-checklist/).
