---
title: "OxfordAQA A-Level Computer Science: Program design (9645)"
seoTitle: "OxfordAQA A-Level Computer Science Program Design 9645"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
stage: "AS"
order: 3
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
description: "Study guide to OxfordAQA A-Level Computer Science program design: structured code, charts, abstraction, tracing, testing and evaluation."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches section 3.3 Program design of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It covers sections 3.3.1 to 3.3.4. All of it is AS content, which is also part of the full International A-level. The specification places this section in AS Unit 1: Programming, an on-screen exam available in C#, Python or VB.Net.

Use it with the [revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-computer-science-program-design-practice/). The course hub is [/boards/oxfordaqa/a-level/computer-science/](/boards/oxfordaqa/a-level/computer-science/), and the printable checklist is at [/checklists/oxfordaqa/a-level/computer-science/](/checklists/oxfordaqa/a-level/computer-science/). To find your weak spots first, try one of the free [diagnostics](/diagnostics/).

## What this section covers

| Spec | What you must be able to do |
|---|---|
| 3.3.1 | Describe the structured approach (modularised programming, parameters and return values, local or block scope variables); explain its advantages; construct and use hierarchy charts and structure charts |
| 3.3.2 | Be familiar with abstraction and decomposition |
| 3.3.3 | Understand the term algorithm; understand pseudocode; convert pseudocode into high-level language code; hand-trace algorithms |
| 3.3.4 | Be aware of analysis, design, implementation and testing; know the criteria for evaluating a computer system |

Subroutines, parameters and local versus global variables are taught in full in section 3.1.2.7. See the [procedural programming guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/). This page shows how they fit together as a design approach.

## 3.3.1 The structured approach

The structured approach builds a program from small, separate pieces rather than one long block of code. The specification names three features.

- **Modularised programming.** The program is split into modules (subroutines), each with one clear job.
- **Parameters and return values.** Data goes into a module through its parameters and comes back as a return value. Modules don't reach out and change shared data.
- **Local or block scope variables.** Each module keeps its working variables to itself. Local variables exist only while the subroutine runs. In C# and VB.Net, a variable declared inside a selection or loop block exists only in that block. Python does not create a new scope for an `if` or loop block, so a loop variable is still visible after the loop ends inside the same function.

A small Python module written in this style:

```python
def spaces_left(capacity, booked):
    return capacity - booked

free = spaces_left(20, 17)   # free is 3
```

`spaces_left` uses only what it is given and hands back one result. You can test it alone, and changing it cannot break code elsewhere, provided its parameters and return value stay the same.

### Advantages of the structured approach

- Each module can be **tested on its own** before the modules are joined, so errors are easier to locate.
- Modules can be **written by different programmers** at the same time.
- A module can be **reused** in other parts of the program or in other programs.
- The program is **easier to read and maintain**: a change is made in one module, not in many places.
- Local variables stop one module **accidentally changing data** that another module relies on.

### Hierarchy charts and structure charts

A **hierarchy chart** shows how a program is broken into modules. The whole program is at the top. Each module sits below the module that calls it. It shows *which* modules exist and how they are grouped. It does not show the detailed logic, such as decisions and loops, or the data passed.

A **structure chart** shows the same modules but adds the **data that passes between them**: the parameters going down to a called module and the values coming back up.

**Worked example.** A gym's class booking program must read a member ID, let the member choose a class, check there are spaces left, then confirm the booking by updating the register and printing a receipt. Choosing a class involves showing the timetable and validating the choice.

Hierarchy chart, drawn as an indented tree:

```
Gym class booking
├── Read member ID
├── Choose class
│   ├── Show timetable
│   └── Validate choice
├── Check spaces
└── Confirm booking
    ├── Update register
    └── Print receipt
```

The structure chart for the top level adds the data flows. Here ↓ means passed into the module and ↑ means returned from it:

```
Gym class booking
├── Read member ID     ↑ memberID
├── Choose class       ↑ classCode
├── Check spaces       ↓ classCode      ↑ spacesLeft
└── Confirm booking    ↓ memberID, classCode
```

Read across each row: `Check spaces` needs the class code and returns the number of spaces. That tells you its parameter list and return value before you write any code.

## 3.3.2 Abstraction and decomposition

**Abstraction** is removing unnecessary details from a problem to make it easier to solve. You keep only what the solution needs.

Take a parcel-locker app at a railway station. The program needs each locker's number, its size, whether it is occupied, and the collection code. It doesn't need the locker's colour, the metal it is made from or the courier's vehicle. By leaving these out, you get a simple data model: one record per locker with four fields.

**Decomposition** is breaking a problem into sub-problems, so that each sub-problem does one identifiable task. A sub-problem can be broken down again. The specification notes that decomposition can be achieved with subroutines: each sub-problem becomes one.

Decomposing "produce a monthly electricity bill":

```
Produce monthly bill
├── Get readings          (previous and current meter readings)
├── Calculate units used
├── Calculate charge
│   ├── Apply unit rate
│   └── Add standing charge
└── Output bill
```

Decomposition gives you the shape of a hierarchy chart. Abstraction decides what data flows through it.

## 3.3.3 Following and writing algorithms

### What makes an algorithm

The specification defines an **algorithm** as a sequence of steps that can be followed to complete a task and that **always terminates**. The last part matters. This loop is meant to count down to zero in steps of 2:

```
WHILE n ≠ 0
    n ← n - 2
ENDWHILE
```

Starting at 6, n goes 6, 4, 2, 0 and the loop stops. Starting at 7, n goes 7, 5, 3, 1, −1, −3 … and never equals 0. The loop runs forever for odd inputs, so as written it is not an algorithm for every input. Changing the condition to `WHILE n > 0` makes it terminate for every whole-number start.

### Pseudocode

The specification expects you to understand algorithms written in pseudocode, but you will not be expected to write pseudocode in the exam. You will be expected to convert pseudocode into program code. The specification doesn't set out its own pseudo-code conventions, so the pseudo-code on this page is language-neutral: `←` is assignment, arrays are indexed from 0, and blocks end with `ENDIF`, `ENDFOR` or `ENDWHILE`.

### Hand-tracing: worked example

This algorithm finds the longest run of consecutive days with rainfall. A reading of 0 means a dry day.

```
readings ← [0, 3, 5, 0, 2, 4, 1, 0]
best ← 0
current ← 0
FOR i ← 0 TO LEN(readings) - 1
    IF readings[i] > 0 THEN
        current ← current + 1
        IF current > best THEN
            best ← current
        ENDIF
    ELSE
        current ← 0
    ENDIF
ENDFOR
OUTPUT best
```

Draw one column per variable and add a new row each time a value changes. Here, one row per pass of the loop is enough:

| i | readings[i] | current | best |
|---|---|---|---|
| – | – | 0 | 0 |
| 0 | 0 | 0 | 0 |
| 1 | 3 | 1 | 1 |
| 2 | 5 | 2 | 2 |
| 3 | 0 | 0 | 2 |
| 4 | 2 | 1 | 2 |
| 5 | 4 | 2 | 2 |
| 6 | 1 | 3 | 3 |
| 7 | 0 | 0 | 3 |

Output: **3** (days 4 to 6). Check the result against the purpose: the wet runs are 3, 5 (length 2) and 2, 4, 1 (length 3), so 3 is right.

### Converting to program code

The same algorithm in Python, written as a subroutine with a parameter and a return value:

```python
def longest_wet_run(readings):
    best = 0
    current = 0
    for value in readings:
        if value > 0:
            current = current + 1
            if current > best:
                best = current
        else:
            current = 0
    return best

print(longest_wet_run([0, 3, 5, 0, 2, 4, 1, 0]))   # 3
```

When you convert, check three things. Loop bounds: `FOR i ← 0 TO LEN − 1` covers every index, as does Python's `for value in readings`. Assignment versus comparison: `←` becomes `=`, while the pseudo-code `=` in a condition becomes `==`. Output versus return: if the question asks for a subroutine, return the value rather than printing it. C# and VB.Net versions follow the same structure with their own syntax.

## 3.3.4 Aspects of software development

The specification lists five aspects. You need to be aware of each and know the evaluation criteria.

### Analysis

Before a problem can be solved it must be **defined**. The **requirements** of the system must be established, and a **data model** created. Requirements are established by **interaction with the intended users**. Clarifying them may involve **prototyping** or an **agile approach**: you show users an early version, get feedback, and refine the requirements.

### Design

Before you build a solution, you design and specify it. That means planning data structures for the data model, designing algorithms, designing a modular structure (a hierarchy chart is one way) and designing the human user interface. Design can also be iterative, using prototyping or an agile approach.

### Implementation

The models and algorithms are turned into data structures and code that a computer can process. The final solution may come from an iterative process, using prototyping or an agile approach, **solving the critical path first**. The critical path is the part of a solution that everything else depends on. In the gym booking program, reading and updating the class register is the critical path: receipts, timetables and spaces checks are all useless without it.

### Testing

The implementation must be tested for errors with selected test data of three types:

- **Normal (typical)**: valid data the program should accept.
- **Boundary**: values at the edges of the valid range, and just outside them.
- **Erroneous**: data the program should reject.

**Worked example.** A sign-up form accepts passwords of 10 to 16 characters inclusive.

| Type | Test value | Length | Expected result |
|---|---|---|---|
| Normal | `harbourview7` | 12 | Accept |
| Boundary | `riverstone` | 10 | Accept |
| Boundary | `lanternfish2024x` | 16 | Accept |
| Boundary | `ninechars` | 9 | Reject |
| Boundary | `seventeen-letters` | 17 | Reject |
| Erroneous | empty input | 0 | Reject with message |
| Erroneous | a 40-character string | 40 | Reject with message |

Every row has an expected result. Without one you cannot tell whether the test passed.

### Evaluation

The specification's criteria for evaluating a computer system include:

- **Correctness**: does it produce the right results for all valid inputs, and handle invalid ones properly?
- **Efficiency**: does it use reasonable time and memory for the task?
- **Maintainability**: can another programmer understand, correct and extend it? Meaningful names, comments, modules with clear interfaces and local variables all help.

## Common errors

- Drawing a hierarchy chart like a flowchart, with decision boxes and loops. A hierarchy chart is a tree of modules.
- Leaving data flows off a structure chart. They are what makes it a structure chart.
- Defining abstraction as "hiding" without saying it removes **unnecessary** detail to make a problem easier to solve.
- Calling any set of steps an algorithm. It must always terminate.
- Updating several variables in a trace row before the line that changes them has run.
- Testing only one side of a boundary, such as 10 and 16, but not 9 and 17.
- Listing test data without the expected result.

## Where next

Drill the key terms in the [revision notes](/resources/oxfordaqa-a-level-computer-science-program-design-revision-notes/), then try the [practice questions](/resources/oxfordaqa-a-level-computer-science-program-design-practice/). For timed trace practice, see the [exam preparation guide](/resources/oxfordaqa-a-level-computer-science-exam-preparation/). The algorithms you will most often trace use [arrays and lists](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.3 Program design.
