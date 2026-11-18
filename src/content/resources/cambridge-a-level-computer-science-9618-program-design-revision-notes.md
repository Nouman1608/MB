---
title: "Cambridge A Level Computer Science (9618): Program Design -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 12.2: structure chart purpose and symbols, chart-to-pseudocode rules, state-transition diagrams, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please confirm the structure chart symbols described in words (data and flag couples, diamond for selection, curved arrow for iteration) match the notation Cambridge uses in current 9618 papers."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 12.2 Program Design, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You must describe the purpose of a structure chart, construct one that decomposes a problem and shows the parameters passed between modules, derive pseudocode from one, and explain the purpose of state-transition diagrams in documenting an algorithm.

Related: [Program Design study guide](/resources/cambridge-a-level-computer-science-9618-program-design/) · [Program Design practice questions](/resources/cambridge-a-level-computer-science-9618-program-design-practice/) · [Software Development revision notes (all of Topic 12)](/resources/cambridge-a-level-computer-science-software-development-revision-notes/)

## Structure charts: what and why

- A top-down diagram of a program's **modules**, from the whole program at the top to single tasks at the bottom.
- Shows **decomposition** into sub-tasks and the **parameters** passed between modules.
- Purposes: makes the design clear before coding; fixes each module's interface; lets modules be shared among programmers; gives the procedure and function headers directly.
- It shows **what** modules exist and pass, not **how** each works.

## Symbols

| Symbol | Meaning |
|---|---|
| Rectangle | A module |
| Line from a module down to another | The upper module calls the lower one |
| Arrow with an open circle | A data parameter; direction shows down (in) or up (out) |
| Arrow with a filled circle | A flag (BOOLEAN control value), such as Found or Valid |
| Diamond on a connection | Selection: the module is called only if a condition is met |
| Curved arrow across connections | Iteration: the modules beneath are called repeatedly |

## Chart to pseudocode rules

1. Top module → main program; call the modules beneath in left-to-right order.
2. Nothing passed up → procedure; items passed down become BYVAL parameters.
3. One item passed up → function returning it, with a RETURNS type matching the item.
4. Two or more items passed up → procedure; those items become BYREF parameters.
5. An item passed down and back up → BYREF parameter.
6. Diamond → IF around the call. Curved arrow → loop around the calls.

## State-transition diagrams

- Document an algorithm whose behaviour depends on its current **state** and the next **event** or input.
- **State**: a circle. **Transition**: an arrow labelled with the event (and optionally the output, written input | output).
- **Start state**: arrow coming from nowhere. **Accepting/halting state**: double circle.
- Purpose: shows every state and every possible change in one place, so missing or impossible cases can be spotted before coding.
- A **state-transition table** holds the same information: current state, event, next state, output.

## Chart to code: a quick example

A chart has top module Checkout. Beneath it: ScanItems passes Total and ItemCount up; CheckVoucher receives Total and passes Valid up (flag); ApplyVoucher, under a diamond, receives Total and passes it back changed; PrintReceipt receives Total and ItemCount.

```
PROCEDURE ScanItems(BYREF Total : REAL, BYREF ItemCount : INTEGER)
FUNCTION CheckVoucher(Total : REAL) RETURNS BOOLEAN
PROCEDURE ApplyVoucher(BYREF Total : REAL)
PROCEDURE PrintReceipt(Total : REAL, ItemCount : INTEGER)

CALL ScanItems(Total, ItemCount)
IF CheckVoucher(Total) THEN
   CALL ApplyVoucher(Total)
ENDIF
CALL PrintReceipt(Total, ItemCount)
```

Two values up gives BYREF parameters; one flag up gives a BOOLEAN function; a value passed down and back gives BYREF; the diamond gives the IF.

## Key terms

| Term | Meaning |
|---|---|
| Structure chart | A diagram showing the modules of a program, their hierarchy and the parameters passed between them |
| Decomposition | Breaking a problem into smaller sub-tasks |
| Module | A self-contained part of a program carrying out one task |
| Data couple | A structure chart arrow showing a data item passed between modules |
| Flag couple | A structure chart arrow showing a BOOLEAN control value |
| State | A condition the system can be in at a given time |
| Transition | A change from one state to another caused by an event |
| Event | The input or occurrence that triggers a transition |

## Exam traps

- A chart of input/process/output steps is not a structure chart; it must show modules.
- Parameter arrows without direction, or without a label, lose marks.
- A module that returns two values written as a function.
- A RETURNS type that does not match the data passed up.
- BOOLEAN control values drawn as data couples.
- State-transition arrows labelled with states, not events; start state missing.
- Not every input handled in every state.

## Self-test

1. State two purposes of a structure chart.
2. What does an arrow with a filled circle represent?
3. How is iteration shown on a structure chart?
4. A module receives Price and Quantity and passes Total back up. Write its header.
5. A module receives Name and passes nothing back. Is it a procedure or a function?
6. A module passes FirstName and Surname back up. Write its header.
7. How should a diamond on a connection appear in the derived pseudocode?
8. What does a state-transition diagram document?
9. How is the start state shown?
10. Name the four columns of a state-transition table.
11. A turnstile is Locked; a coin is inserted. Name the event and the likely next state.
12. Why is it useful to check every input in every state?

**Answers:** 1. Any two: shows decomposition of the problem into modules; shows the parameters passed between modules; fixes each module's interface so programmers can work separately; gives a basis for procedure and function headers. 2. A flag: a BOOLEAN value that controls what happens next. 3. A curved arrow across the connections to the modules that repeat. 4. FUNCTION CalculateTotal(Price : REAL, Quantity : INTEGER) RETURNS REAL (any sensible name). 5. A procedure. 6. PROCEDURE GetName(BYREF FirstName : STRING, BYREF Surname : STRING) (any sensible name). 7. As an IF statement around the call. 8. The states an algorithm or system can be in, and the events that move it from one state to another. 9. By an arrow that does not come from any other state. 10. Current state, event (input), next state, output. 11. The event is "coin inserted"; the next state is Unlocked. 12. It shows whether the design has missed a case, so the algorithm will not reach a situation it cannot handle.
