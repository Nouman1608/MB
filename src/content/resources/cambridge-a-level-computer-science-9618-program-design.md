---
title: "Cambridge A Level Computer Science (9618): Program Design"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Software Development"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 12.2
syllabusTopics:
  - qualification: "a-level"
    topic: "software-development"
    subtopic: "program-design"
description: "Study guide to 9618 section 12.2: structure charts, parameters between modules, deriving pseudocode from a chart, and state-transition diagrams."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please confirm the structure chart symbols described in words (data and flag couples, diamond for selection, curved arrow for iteration) match the notation Cambridge uses in current 9618 papers."
---

Section 12.2 Program Design of Cambridge International AS & A Level Computer Science 9618 covers two design tools. You must "use a structure chart to decompose a problem into sub-tasks and express the parameters passed between the various modules / procedures / functions", which includes describing its purpose, constructing one for a given problem and deriving equivalent pseudocode from one. You must also show understanding of the purpose of state-transition diagrams to document an algorithm. It is AS content, examined in Paper 2.

Related: [Program Design revision notes](/resources/cambridge-a-level-computer-science-9618-program-design-revision-notes/) · [Program Design practice questions](/resources/cambridge-a-level-computer-science-9618-program-design-practice/) · [Software Development study guide (all of Topic 12)](/resources/cambridge-a-level-computer-science-software-development-study-guide/)

## Purpose of a structure chart

A **structure chart** shows how a problem is **decomposed** into modules and how those modules are related. It has the whole program as a single module at the top and the sub-tasks beneath, each broken down further until every module is a manageable, single task. It also shows the **parameters** passed between modules.

Its purposes are to:

- show the hierarchy of modules, so the design is clear before coding;
- show the interface of each module: what data it receives and what it sends back;
- allow modules to be shared between programmers, because each one's inputs and outputs are fixed;
- give a direct basis for the procedure and function headers in the code.

A structure chart shows **which** modules exist and **what** they pass, not the detailed steps inside each module; that is the job of pseudocode or a flowchart.

## Structure chart notation

- **Module**: a rectangle containing the module's name.
- **Connection**: a line from a module down to each module it calls. Modules at the same level are usually read left to right in the order they are called.
- **Data parameter**: a short arrow beside the connection with an open (unfilled) circle at its tail, labelled with the data item. The arrow's direction shows whether the data goes down to the called module or back up to the caller.
- **Flag parameter**: the same kind of arrow with a filled circle, used for a BOOLEAN value that controls what happens next, such as Valid or Found.
- **Selection**: a diamond on the connection shows that the module is called only if a condition is met.
- **Iteration**: a curved arrow across the connections shows that the modules beneath are called repeatedly.

## From structure chart to pseudocode

Each module becomes a procedure or a function, and each arrow becomes a parameter or a return value.

| What the chart shows for a module | Pseudocode |
|---|---|
| Data passed down only | A procedure with BYVAL parameters |
| Exactly one item passed back up | A function returning that item, with any items passed down as parameters |
| Two or more items passed back up | A procedure with BYREF parameters for the items passed up |
| An item passed down, changed and passed back up | A BYREF parameter |
| A diamond on the connection | The call is inside an IF statement |
| A curved arrow over the connections | The calls are inside a loop |

The top module becomes the main program, which calls the modules beneath it in left-to-right order.

## Worked example 1: constructing a chart and deriving pseudocode

**Problem.** A car park program repeatedly inputs a vehicle's arrival and departure times until they are valid, works out the length of stay in minutes, calculates the fee from the minutes, and prints a ticket showing the minutes and the fee.

**Structure chart, described level by level**

- Top: **CarParkCharge**.
- Beneath it, left to right: **GetTimes**, **ValidateTimes**, **CalculateStay**, **CalculateFee**, **PrintTicket**.
- A curved arrow spans GetTimes and ValidateTimes: they repeat until the times are valid.
- GetTimes passes Arrival and Departure up (data couples).
- ValidateTimes receives Arrival and Departure and passes Valid up (flag couple, filled circle).
- CalculateStay receives Arrival and Departure and passes Minutes up.
- CalculateFee receives Minutes and passes Fee up.
- PrintTicket receives Minutes and Fee; nothing comes back.

**Derived pseudocode**

```
PROCEDURE GetTimes(BYREF Arrival : INTEGER, BYREF Departure : INTEGER)
FUNCTION ValidateTimes(Arrival : INTEGER, Departure : INTEGER) RETURNS BOOLEAN
FUNCTION CalculateStay(Arrival : INTEGER, Departure : INTEGER) RETURNS INTEGER
FUNCTION CalculateFee(Minutes : INTEGER) RETURNS REAL
PROCEDURE PrintTicket(Minutes : INTEGER, Fee : REAL)

// main program (CarParkCharge)
REPEAT
   CALL GetTimes(Arrival, Departure)
   Valid ← ValidateTimes(Arrival, Departure)
UNTIL Valid
Minutes ← CalculateStay(Arrival, Departure)
Fee ← CalculateFee(Minutes)
CALL PrintTicket(Minutes, Fee)
```

*Why it scores:* GetTimes sends **two** values up, so it is a procedure with BYREF parameters; ValidateTimes, CalculateStay and CalculateFee each send **one** value up, so they are functions whose return types match the data (BOOLEAN, INTEGER, REAL); PrintTicket only receives data, so it is a procedure with BYVAL parameters; the curved arrow becomes a REPEAT loop around the first two calls, controlled by the flag.

## State-transition diagrams

A **state-transition diagram** documents an algorithm whose behaviour depends on what has happened before. It shows:

- **states**, drawn as circles, each representing a situation the system can be in;
- **transitions**, drawn as arrows from one state to another, each labelled with the **event** or input that causes it, and optionally the output produced (often written as input | output);
- the **start state**, marked by an arrow that comes from no other state;
- an **accepting** or **halting** state, if there is one, drawn as a double circle.

Its purpose is to show every state and every possible change between states in one diagram, so that the designer can check that each input is handled in each state and that no situation has been forgotten. The same information can be written as a **state-transition table** with columns for current state, event, next state and output.

## Worked example 2: a state-transition diagram for a parity check

An algorithm reads a string of bits one at a time and reports whether the string contains an even number of 1s.

**States**: Even (the start state, and accepting) and Odd.

**Transitions**

| Current state | Input | Next state |
|---|---|---|
| Even | 0 | Even |
| Even | 1 | Odd |
| Odd | 0 | Odd |
| Odd | 1 | Even |

**Trace for 10110**: Even, then 1 gives Odd, 0 keeps Odd, 1 gives Even, 1 gives Odd, 0 keeps Odd. The final state is Odd, so the string has an odd number of 1s, which matches the three 1s it contains.

Notice what the diagram documents: the algorithm only needs to remember which of two states it is in, not the count of 1s, and every input in every state has a defined transition. That completeness check is exactly what the diagram is for.

## Common mistakes

- Drawing a structure chart that shows the steps of an algorithm (input, process, output boxes) instead of the modules.
- Leaving out the parameter arrows, or drawing them without showing direction.
- Using a data couple for a BOOLEAN that controls the program; use a flag couple.
- Making a module that returns two values a function.
- On a state-transition diagram, labelling arrows with states rather than with the event that causes the change, or leaving out the start state.
- Forgetting a transition for one of the inputs in one of the states.

## Exam technique

**Describe the purpose** of a structure chart: mention decomposition into sub-tasks and the parameters passed between modules. **Construct** a structure chart: name each module from the scenario, put the top module first, add every parameter with direction, and add selection or iteration symbols where the description says "if" or "repeat". **Derive pseudocode**: write one header per module, choosing procedure or function from what is passed up, then write the main program's calls in order. For a state-transition diagram question, list the states first, then for each state ask what each possible input does.
