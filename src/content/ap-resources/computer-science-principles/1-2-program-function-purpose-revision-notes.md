---
resourceId: "mb-ap-csp-1.2-revision-notes"
title: "Program Function and Purpose: Revision Notes (Computer Science Principles 1.2)"
description: "One-page recap of program purpose, function and behavior, inputs, outputs, events, code segments and describing programs at two levels of detail."
course: "computer-science-principles"
unit: 1
topics: ["1.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-1.2-study-guide"]
learningObjectives: 
  - "Recall the key ideas of program function and purpose without notes"
  - "Spot the common errors before making them"
skills: ["1", "3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.2-study-guide", "mb-ap-csp-1.2-practice", "mb-ap-csp-1.2-checklist"]
next: "mb-ap-csp-1.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Purpose is why a program exists (solve a problem or express creativity); function is what it does; behavior is what happens when it runs and a user interacts with it."
  - "Input is data sent to a program (tactile, audio, visual or text); output is data sent from a program to a device."
  - "An event (a key press, a click, a program start) supplies input and can trigger code; this is event-driven programming."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-study-guide/).

## Recap

- **Purpose**: why the innovation exists (solve a problem or pursue an interest through creative expression).
- **Function**: what the program does to serve that purpose.
- **Behavior**: how the program acts when it runs, usually described by how a user interacts with it.
- A **program** is a collection of statements that performs a specific task; a **code segment** is part of a program.
- **Input**: data sent to a program (tactile, audio, visual, text), from a user or another program.
- **Output**: data sent from a program to a device (screen, speaker, vibration); usually depends on input and prior state.
- **Event**: an action (key press, click, program start) that supplies input and can trigger code; programs that run code when events occur are **event-driven**.
- A program can be described **broadly** (what) or **in detail** (what and how).
- A program must work for a **variety of inputs and situations**.

## Key relationships

| Idea | How to recognise it |
|---|---|
| Purpose | "In order to..." (the problem solved or interest pursued) |
| Function | "The program does..." (a task it carries out) |
| Behavior | "When the user does X, Y happens" |
| Input | Data going **to** the program |
| Output | Data going **from** the program to a device |
| Event | The **trigger** that starts some code running |
| State | A value the program remembers between events, such as a score |

## Assumptions and conventions

- In the pseudocode used here, `←` assigns a value, `INPUT()` reads input and `DISPLAY()` shows output. This is Marlbridge's rendering of the reference notation, not the official sheet.
- When asked to **describe**, give what the code does in plain words; when asked to **explain how**, refer to the statements.
- Test boundary inputs: values exactly at the limit of a condition.

## Mistakes to avoid

1. Mixing up purpose and function.
2. Treating output as an input (or the reverse) when a device is involved.
3. Describing a code segment line by line when a broad function was asked for.
4. Forgetting that stored state can affect the output.
5. Checking only one input and assuming the program is correct.
6. Using "greater than" and "greater than or equal to" interchangeably.

## A quick worked check

An app shows "Welcome back" when it starts, adds 1 to a visit counter each time a user taps Refresh, and displays the counter. **Event:** starting the app; tapping Refresh. **Input:** the tap. **Output:** the message and the counter value. **State:** the counter. After three taps the counter shows 3, because each tap adds to what was stored. If asked for the **purpose**, say why the app exists (for example, to help people see how often they check updates), not what a button does.

## Quick self-check

1. A game plays a sound when the player taps a button. Name the event, the input and the output. *(Event: the tap. Input: the tap data, such as which button. Output: the sound.)*
2. A program shows the price after subtracting 10 when the price is above 100. What does it display for 100? *(100: the condition "greater than 100" is false.)*
3. Is "helps patients remember to take medicine" a purpose or a function? *(A purpose: why the app exists.)*

Next: [practice questions](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-practice/).
