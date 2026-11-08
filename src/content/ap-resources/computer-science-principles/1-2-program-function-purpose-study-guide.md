---
resourceId: "mb-ap-csp-1.2-study-guide"
title: "Program Function and Purpose: Study Guide (Computer Science Principles 1.2)"
description: "The difference between purpose, function and behavior; how to identify inputs, outputs and events; and how to describe a program at two levels, with two worked examples."
course: "computer-science-principles"
unit: 1
topics: ["1.2"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 1.1 (what a computing innovation is)"
  - "Reading simple pseudocode"
prerequisiteResources: ["mb-ap-csp-1.1-study-guide"]
learningObjectives: 
  - "Distinguish the purpose of a computing innovation from the function and behavior of its program"
  - "Identify the inputs, outputs and events of a described program"
  - "Describe a program or code segment at a broad level and at a more detailed level"
  - "Explain why a program must work for a variety of inputs, and predict the output of a short code segment"
skills: ["1", "3", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.2-revision-notes", "mb-ap-csp-1.2-practice", "mb-ap-csp-1.2-checklist"]
next: "mb-ap-csp-1.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Purpose is why a program exists (solve a problem or express creativity); function is what it does; behavior is what happens when it runs and a user interacts with it."
  - "Input is data sent to a program (tactile, audio, visual or text); output is data sent from a program to a device."
  - "An event (a key press, a click, a program start) supplies input and can trigger code; this is event-driven programming."
  - "A code segment is part of a program; a program is a collection of statements that performs a task."
  - "A good program must work for a variety of inputs and situations, not only the one the developer had in mind."
faqs:
  - question: "What is the difference between a program's purpose and its function?"
    answer: "Purpose is why the program exists: the problem it solves or the interest it pursues. Function is what the program does to achieve that. A budgeting app has the purpose of helping people manage money; one function is totalling the spending in each category."
  - question: "Is a mouse click an input or an event?"
    answer: "Both. The click is an event, an action that supplies data to the program and can trigger code. The information it carries, such as which button was clicked, is input."
  - question: "What is the difference between a program and a code segment?"
    answer: "A program is a complete collection of statements that performs a task. A code segment is a smaller collection of statements that is part of a program."
  - question: "Do I need to write code in this topic?"
    answer: "You need to read short code segments and describe or predict what they do. The exam uses its own pseudocode rather than a real language, so no particular language is required."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## What is a program for, and what does it do?

Three words sound alike in this topic, and exams test whether you can separate them.

- **Purpose** is *why* a computing innovation exists. The purpose of an innovation is to solve a problem or to pursue an interest through creative expression. A recipe app's purpose might be to help people cook with what they already have.
- **Function** is *what the program does* to serve that purpose, for example "searches a list of recipes for ones that use the ingredients the user typed".
- **Behavior** is *how the program acts while it runs*, usually described by how a user interacts with it: "when the user taps Search, a list appears; when the user taps a recipe, its steps are shown".

A **program** is a collection of program statements that performs a specific task when run by a computer (often called software). A **code segment** is a smaller collection of statements that is part of a program. Knowing the purpose helps developers build the right thing, because every design choice can be checked against it: "does this help someone cook?".

## Inputs, outputs and events

Programs take in data, process it and send data out.

**Input** is data sent to a program for processing. It comes in many forms: *tactile* (touch, keys, buttons), *audio* (a spoken command), *visual* (a camera image) and *text* (a typed search). Input can come from a user or from another program.

**Output** is data sent from a program to a device, such as text on a screen, a sound from a speaker, an image or a vibration. Output is usually based on the program's input or on its prior state (values it has stored, such as a score).

An **event** is an action that supplies input to a program and can change what executes. Pressing a key, clicking a mouse, tapping a screen, starting the program or a timer reaching zero are all events. In **event-driven programming**, statements run when an event triggers them rather than only in a fixed top-to-bottom order.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="io-title io-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="io-title">Inputs, a program with stored state, and outputs</title>
<desc id="io-desc">Three boxes in a row joined by arrows. The left box, inputs, lists tapped buttons, typed text and spoken commands, with a note that an event such as a tap triggers code. An arrow leads to the central box, program, which holds a code segment and stored state such as a score. A second arrow leads to the right box, outputs, listing text on screen, sound and vibration. A curved note below says output depends on both the input and the stored state.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="15" y="25" width="170" height="120" rx="8"/>
<rect x="235" y="25" width="170" height="120" rx="8" stroke-dasharray="6 4"/>
<rect x="455" y="25" width="170" height="120" rx="8"/>
</g>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="185" y1="85" x2="227" y2="85"/><path d="M219 79 L229 85 L219 91"/>
<line x1="405" y1="85" x2="447" y2="85"/><path d="M439 79 L449 85 L439 91"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="100" y="50" font-weight="bold">Input</text>
<text x="100" y="75">tap, key press, click</text>
<text x="100" y="95">typed text</text>
<text x="100" y="115">spoken command</text>
<text x="320" y="50" font-weight="bold">Program</text>
<text x="320" y="75">code segments</text>
<text x="320" y="95">stored state</text>
<text x="320" y="115">(for example, score)</text>
<text x="540" y="50" font-weight="bold">Output</text>
<text x="540" y="75">text on screen</text>
<text x="540" y="95">sound</text>
<text x="540" y="115">vibration</text>
<text x="320" y="185">An event (a tap, a key press) supplies input and can trigger code.</text>
<text x="320" y="208">Output depends on the input and on the stored state.</text>
</g>
</svg>
<figcaption>Figure 1. Input flows into a program, which may hold stored state, and produces output. Events trigger the statements that process the input.</figcaption>
</figure>

## Describing a program at two levels

A program can be described **broadly**, by what it does ("calculates the final price of an order"), or **in more detail**, by both what it does and how the statements do it ("subtracts 10 from the price if the price is more than 100, then displays the result"). Exam questions often ask you to move between the two. A short, accurate description of function is more valuable than a line-by-line reading that misses the point.

## A note on the pseudocode in these resources

The exam does not use a real programming language. It uses its own reference notation, provided as a sheet in both block and text forms. The examples here use **Marlbridge's rendering of that reference notation**: assignment is written with an arrow (`a ← 5`), output with `DISPLAY(...)`, input with `INPUT()`, conditions with `IF ... ELSE`, and curly brackets around blocks. It is a faithful style guide, not a copy of the official sheet, and you should practise with the official reference sheet your teacher provides.

## A program must work for a variety of inputs

A program that works for one test input but fails on others is not correct. Developers need a program to work for a **variety of inputs and situations**, including unusual ones: an empty entry, a very large number, a value exactly on a boundary. Topic 1.4 develops this idea into test cases.

## Worked example 1: purpose, inputs, outputs and events

**Scenario.** A fictional app, StepMate, counts a walker's steps. The user opens the app, which shows today's total so far. The phone's motion sensor sends a signal for each step, and the app adds one to the total. When the total reaches a goal the user has typed in, the phone vibrates and the screen shows "Goal reached!".

**Task.** Identify the purpose, an input, an output and an event, and describe the stored state.

**Step 1: purpose.** To help people become more active by tracking their walking against a goal. (It solves a problem: knowing how much you have walked.)

**Step 2: inputs.** Text input: the goal the user types. Sensor data: the signal for each step. Both are data sent to the program for processing.

**Step 3: events.** The app being opened (the program starts) is an event. Each step signal is also an event, because it triggers the statements that add one to the total.

**Step 4: outputs.** Text on the screen showing the total; the "Goal reached!" message; the vibration (tactile output).

**Step 5: stored state.** The running step total and the goal. The output "Goal reached!" depends on the *input* (the goal typed in) and the *state* (the current total).

**Check.** Each item answers a different question: *what comes in*, *what triggers code*, *what goes out*, *what is remembered*. If you listed the vibration as an input, re-read the definitions: output goes *from* the program *to* a device.

## Worked example 2: describing and tracing a code segment

Here is a code segment in Marlbridge's rendering of the reference notation.

```text
total ← 0
price ← INPUT()
IF (price > 100)
{
  total ← price - 10
}
ELSE
{
  total ← price
}
DISPLAY(total)
```

**Task.** (a) Describe the function broadly. (b) Describe it in more detail. (c) Give the output for inputs 120, 100 and 40.

**(a) Broadly.** The segment takes a price and displays the amount to pay after a discount.

**(b) In more detail.** It stores 0 in `total`, reads a price, and checks whether the price is greater than 100. If so, it stores the price minus 10 in `total`; otherwise it stores the price unchanged. It then displays `total`. So prices above 100 get a flat 10 discount.

**(c) Outputs.**

| Input | Is `price > 100`? | `total` after the IF | Output |
|---|---|---|---|
| 120 | yes (120 > 100) | 120 - 10 = 110 | 110 |
| 100 | no (100 is not greater than 100) | 100 | 100 |
| 40 | no | 40 | 40 |

**Check.** The input 100 sits exactly on the boundary. Because the test is "greater than", not "greater than or equal to", a price of 100 gets no discount. This is the kind of input a thorough test would include. The first assignment `total ← 0` is overwritten in both branches, so it does not change the result here, which is a reminder that not every statement affects the output.

## A four-question routine for any scenario

When a question describes a program, ask yourself four things in order, and write down the answers before reading the options.

1. **What is it for?** (purpose)
2. **What goes in, and what triggers the code?** (inputs and events)
3. **What comes out?** (outputs)
4. **What does it remember?** (stored state)

State matters because the same input can give different outputs depending on what the program remembers. Consider an event handler that runs each time a button is pressed, in Marlbridge's rendering of the reference notation:

```text
score ← 0
/* each time the Add button is pressed, run the two lines below */
score ← score + 5
DISPLAY(score)
```

The press is the event. The first press displays 5, the second 10 and the third 15, even though the user does exactly the same thing each time. The output depends on the **prior state** (the value of `score`) as well as on the input. A trace table with one row per press makes this visible: after press 1 the score is 5, after press 2 it is 10, after press 3 it is 15. Questions that ask "what is displayed after the third press?" are testing exactly this idea, and the wrong options are usually the output for the first press or the sum of the outputs.

## Common misconceptions

- **"Purpose and function are the same."** Purpose is why; function is what. A program can have one purpose and many functions.
- **"Input means something the user types."** Input can be tactile, audio, visual or text, and can come from another program or a sensor.
- **"An event is the same as output."** Events *trigger* code and supply input. Output is what the program sends back.
- **"A code segment is a small program that can run alone."** A code segment is part of a program; it may not be meaningful on its own.
- **"If it worked once, it is correct."** A program must work for a variety of inputs, including boundaries.
- **"A longer description is a better one."** A description should match what is asked: broad function, or function plus how the statements achieve it.
- **"Output only means text on a screen."** Sound, vibration and images are outputs too.

## Where this leads

Topic 1.3 shows how developers move from an understanding of purpose to a design, a prototype and tests, and Topic 1.4 uses inputs and expected outputs to find errors. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-revision-notes/), and check your skills on the [checklist](/advanced-course-resources/computer-science-principles/1-2-program-function-purpose-checklist/). The next topic is [Program Design and Development](/advanced-course-resources/computer-science-principles/1-3-program-design-development-study-guide/).
