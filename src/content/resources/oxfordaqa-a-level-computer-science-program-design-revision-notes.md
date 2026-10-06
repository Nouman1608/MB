---
title: "OxfordAQA A-Level Computer Science: Program design (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Program Design Revision Notes 9645"
resourceType: "revision-notes"
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
description: "Condensed OxfordAQA A-Level Computer Science revision notes on program design, with key definitions, tracing steps and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense section 3.3 Program design (3.3.1 to 3.3.4) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. All of it is AS content, also needed for the full International A-level. For full explanations and worked examples, use the [program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/). Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-computer-science-program-design-practice/).

Course hub: [/boards/oxfordaqa/a-level/computer-science/](/boards/oxfordaqa/a-level/computer-science/). Checklist: [/checklists/oxfordaqa/a-level/computer-science/](/checklists/oxfordaqa/a-level/computer-science/). Free 10-minute checks: [/diagnostics/](/diagnostics/).

## Key definitions

| Term | Definition to learn |
|---|---|
| Structured approach | Designing and building a program from separate modules, passing data by parameters and return values, using local (or block scope) variables |
| Hierarchy chart | Diagram of the modules in a program, each placed below the module that calls it |
| Structure chart | A hierarchy-style chart that also shows the data passed between modules |
| Abstraction | Removing unnecessary details from a problem to make it easier to solve |
| Decomposition | Breaking a problem into sub-problems, each of which does an identifiable task and may be broken down further |
| Algorithm | A sequence of steps that can be followed to complete a task and that always terminates |
| Critical path | The part of a solution that everything else depends on |
| Normal data | Typical valid data that should be accepted |
| Boundary data | Values at the edges of the valid range and just outside them |
| Erroneous data | Data that should be rejected |

## 3.3.1 Structured approach

**The three features to name:**

1. Modularised programming: one module (subroutine) per task.
2. Parameters in, return values out.
3. Local variables (block scope in C# and VB.Net, where the language supports it).

**Advantages (give a reason with each):**

- Modules are tested separately, so faults are easier to locate.
- Several programmers can work on different modules at once.
- Modules can be reused.
- Easier to read and maintain: a change is made in one place.
- Local variables prevent one module changing data another depends on.

The full treatment of subroutines, parameters and scope is in section 3.1.2.7. See the [procedural programming revision notes](/resources/a-computer-science-procedural-revision-notes/).

### Hierarchy chart vs structure chart

| | Hierarchy chart | Structure chart |
|---|---|---|
| Shows the modules | Yes | Yes |
| Shows which module calls which | Yes | Yes |
| Shows data passed between modules | No | Yes: parameters down, return values up |

**Method: building a hierarchy chart**

1. Put the whole program in one box at the top.
2. List the main tasks from the problem description. Each becomes a box on the second level.
3. Split any task that does more than one job into its own level below it.
4. Stop when each box is one task you could write as one subroutine.
5. For a structure chart, label each link with the data going down and the data coming back.

Tiny example, a library self-checkout:

```
Self-checkout
├── Scan card        ↑ borrowerID
├── Scan book        ↑ bookID
├── Record loan      ↓ borrowerID, bookID   ↑ dueDate
└── Print slip       ↓ dueDate
```

## 3.3.2 Abstraction and decomposition

**Must-know distinction:**

- **Abstraction** asks "what can I leave out?" It removes detail.
- **Decomposition** asks "what smaller jobs is this made of?" It divides the problem.

Abstraction shapes the data model. Decomposition shapes the module structure. Decomposition can be carried out using subroutines.

Reminder: for a cinema seat-booking program, abstraction keeps seat row, seat number, price band and booked or free. It drops the seat colour and the fabric. Decomposition splits the program into "show seating plan", "select seats", "take payment" and "issue tickets".

## 3.3.3 Algorithms, pseudocode and tracing

- The defining feature to remember: an algorithm **always terminates**.
- You must **understand** pseudocode and **convert** it to program code. The specification says you will not be expected to write pseudocode in the exam.
- The specification doesn't set out its own pseudo-code conventions. These notes use language-neutral pseudo-code with `←` for assignment and arrays indexed from 0.

**Method: hand-tracing**

1. One column per variable, plus one for output.
2. Write the starting values in the first row.
3. Work line by line. Change a value only when the line that changes it runs.
4. Check each loop condition with the current values before going round again.
5. Record output at the moment it happens.
6. Compare the final result with what the algorithm is meant to do.

**Worked reminder:**

```
total ← 0
k ← 1
WHILE k < 20
    total ← total + k
    k ← k * 3
ENDWHILE
OUTPUT total
```

| total | k | k < 20? |
|---|---|---|
| 0 | 1 | true |
| 1 | 3 | true |
| 4 | 9 | true |
| 13 | 27 | false |

Output: **13**.

**Method: converting pseudocode to code**

1. Match each loop's bounds exactly. `FOR i ← 0 TO n − 1` is `for i in range(n)` in Python.
2. Turn `←` into assignment, and `=` in a condition into the language's comparison (`==` in Python and C#).
3. Keep the same variable names unless the question says otherwise.
4. If the question asks for a subroutine, include the parameters and return the value.
5. Run the code with the values from the question and compare the output with your trace.

## 3.3.4 Aspects of software development

| Aspect | What to be aware of |
|---|---|
| Analysis | Define the problem; establish requirements by interaction with intended users; create a data model; may use prototyping or an agile approach |
| Design | Plan data structures, algorithms, modular structure and the user interface; can be iterative |
| Implementation | Turn models and algorithms into data structures and code; may be iterative, solving the critical path first |
| Testing | Test for errors using normal, boundary and erroneous data |
| Evaluation | Judge the system on criteria including correctness, efficiency and maintainability |

**Method: choosing test data for a range rule**

1. Normal: one or two values comfortably inside the range.
2. Boundary: the lowest and highest valid values, and the values just outside each.
3. Erroneous: a value of the wrong type, or a missing value.
4. Write the expected result beside every value.

For a month number from 1 to 12: normal 7; boundary 1 and 12 (accept), 0 and 13 (reject); erroneous "June" or blank (reject).

**Evaluation criteria in one line each:**

- Correctness: right output for all valid input, and sensible handling of invalid input.
- Efficiency: reasonable use of processing time and memory.
- Maintainability: other programmers can understand, fix and extend it.

## Quick self-test

1. State the three features of the structured approach named in the specification.
2. What does a structure chart show that a hierarchy chart does not?
3. Define abstraction.
4. Define decomposition, and name the programming feature used to achieve it.
5. What property must a sequence of steps have to count as an algorithm?
6. Trace this and give the output:
   ```
   data ← [12, 7, 20, 9, 16]
   c ← 0
   FOR i ← 0 TO 4
       IF data[i] MOD 4 = 0 THEN
           c ← c + 1
       ENDIF
   ENDFOR
   OUTPUT c
   ```
7. Trace this for n = 472 and give the final value of r:
   ```
   r ← 0
   WHILE n > 0
       r ← r * 10 + n MOD 10
       n ← n DIV 10
   ENDWHILE
   ```
8. How are a system's requirements established during analysis?
9. What is the critical path, and why is it solved first?
10. A field accepts a house number from 1 to 250. Give the four boundary test values.
11. Name the three evaluation criteria listed in the specification.

### Answers

1. Modularised programming; the use of parameters and return values; local (or block scope) variables.
2. The data passed between modules: parameters going down and return values coming back.
3. Removing unnecessary details from a problem to make it easier to solve.
4. Breaking a problem into sub-problems, each doing an identifiable task and possibly broken down further. Achieved with subroutines.
5. It must always terminate.
6. 12, 20 and 16 are multiples of 4, so the output is **3**.
7. After each pass: n = 47, r = 2; n = 4, r = 27; n = 0, r = 274. Final r = **274**, the digits reversed.
8. By interaction with the intended users of the system, possibly using prototyping or an agile approach.
9. The part of the solution that everything else depends on. It is solved first because nothing else can work or be tested properly until it does.
10. 1 and 250 (accept); 0 and 251 (reject).
11. Correctness, efficiency and maintainability.

## Where marks are usually lost

- Drawing a hierarchy chart like a flowchart, with decision boxes and loops, instead of a tree of modules.
- Drawing a structure chart without labelling the data on each link.
- Saying abstraction "hides" detail, without saying the detail is unnecessary and removing it makes the problem easier to solve.
- Defining an algorithm without the word "terminates".
- Writing pseudocode when the question asks for program code in your chosen language.
- Starting or ending a converted loop one place too early or too late.
- Changing a variable in the trace table before the line that changes it.
- Giving boundary values on only one side of a limit.
- Listing an advantage of the structured approach with no reason, such as "easier" without saying why.
- Naming "speed" as an evaluation criterion instead of efficiency in time and memory.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.3 Program design.
