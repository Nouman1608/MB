---
title: "Cambridge A Level Computer Science (9618): Computational Thinking Skills"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "computational-thinking-skills"
description: "Abstraction and decomposition for Cambridge AS Computer Science 9618 section 9.1: producing an abstract model, and breaking a problem into procedures and functions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **9.1 Computational Thinking Skills** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content and is assessed mainly on Paper 2, Fundamental Problem-solving and Programming Skills. The [Algorithm Design and Problem-solving study guide](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-study-guide/) introduces the whole of Topic 9; this page stays with 9.1 and shows, through two new worked examples, how to **produce** an abstract model and how decomposition leads to modules. Condensed notes are in the [Computational Thinking Skills revision notes](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills-revision-notes/), and the [Computational Thinking Skills practice questions](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills-practice/) let you test yourself.

## What 9.1 asks you to do

The syllabus has two statements:

- **show an understanding of abstraction**: the need for and benefits of abstraction, the purpose of abstraction, and producing an abstract model of a system by **only including essential details**
- **describe and use decomposition**: breaking problems down into sub-problems, leading to the concept of a **program module** (procedure or function).

Both are skills you apply, not just define. Expect a scenario and questions such as "identify the details to include", "give two benefits" or "break this task into modules".

## Abstraction

**Abstraction** is the process of removing, or hiding, the details of a problem that are not needed for its solution, so that only the essential details remain. The result is an **abstract model**: a simplified representation that keeps what matters for one particular purpose.

The phrase "for one particular purpose" is the heart of it. The same real thing gives different abstract models for different programs. A car in a car-park payment system is a registration number and an arrival time; the same car in a garage's servicing system is a make, model, mileage and service history.

### Why abstraction is needed

Real systems contain far more detail than any program can or should handle. Without abstraction, a design would try to represent irrelevant facts, the program would be larger and harder to write, and the important behaviour would be buried among unimportant data.

### Benefits

- The problem is **simpler to understand**, so a solution can be designed more quickly.
- The program stores and processes **less data**, so it needs less memory and processing time.
- The program is **smaller and easier to write, test and maintain**, because it has fewer parts.
- The design focuses on what the **user needs**, so the solution is more likely to meet the requirements.
- Hidden detail can often be changed without affecting the rest of the program.

### Purpose

Put simply, the purpose of abstraction is to make a problem **manageable** by reducing it to the details that are needed to solve it, and to produce a model that a program can represent.

## Worked example 1: producing an abstract model

*An invented city runs a bike-share scheme. Bikes are kept in docking stations. A program is needed so that a user can find the nearest station with a free bike, and the scheme can see which stations need bikes moving to them. Produce an abstract model of the system.*

**Step 1: identify the purpose.** Two tasks: show available bikes near a user, and show stations that are empty or full.

**Step 2: list the real details and decide.**

| Real-world detail | Include? | Reason |
|---|---|---|
| Station location (coordinates) | Yes | Needed to find the nearest station |
| Station name | Yes | Shown to the user |
| Number of docks at the station | Yes | Needed to know when a station is full |
| Number of bikes currently docked | Yes | Needed to know whether a bike is free |
| Colour of each bike | No | Does not affect either task |
| Station's street furniture and signage | No | Irrelevant to the tasks |
| Exact walking route to the station | No | A straight-line distance is enough to rank stations |
| Each bike's tyre pressure | No | Not needed for availability (a maintenance system might need it) |

**Step 3: state the model.** Each station becomes one record:

```
TYPE TStation
   DECLARE StationName : STRING
   DECLARE Latitude : REAL
   DECLARE Longitude : REAL
   DECLARE Docks : INTEGER
   DECLARE BikesDocked : INTEGER
ENDTYPE

DECLARE Stations : ARRAY[1:150] OF TStation
```

The number of free docks does not need storing, because it can be calculated as Docks − BikesDocked. A station needs bikes moving to it when BikesDocked is 0, and has too many when BikesDocked = Docks.

Notice what the table does: for every excluded detail it gives a **reason tied to the purpose**. In an exam, "colour is not needed" earns less than "colour does not affect whether a bike is available".

## Decomposition

**Decomposition** is breaking a problem down into smaller **sub-problems**, each of which is easier to understand and solve. Each sub-problem can be broken down again until every part is small enough to be solved directly. In a program, each part becomes a **module**: a **procedure** or a **function**.

| Module | What it does | Pseudocode form |
|---|---|---|
| Procedure | Carries out a task; called as a statement | `PROCEDURE Name(Parameters) ... ENDPROCEDURE`, used with `CALL Name(...)` |
| Function | Carries out a task and **returns a single value**; used in an expression | `FUNCTION Name(Parameters) RETURNS Type ... ENDFUNCTION` |

### Benefits of decomposition

- Each sub-problem is **simpler** than the whole and can be solved on its own.
- Modules can be **written and tested separately**, so errors are easier to locate.
- Different modules can be given to **different programmers** at the same time.
- A module can be **reused** wherever the same task is needed, in this program or another.
- A change to one task means changing **one module**, which makes maintenance easier.

## Worked example 2: from problem to modules

*The bike-share program must, each evening, read the station data, identify stations that are empty or full, and output a list of instructions for the van crew.*

**Level 1: the whole problem.** Produce the evening rebalancing list.

**Level 2: sub-problems.**

1. Load the data for all stations.
2. For each station, decide whether it is empty, full or neither.
3. Output an instruction for each empty or full station.

**Level 3: modules.** Sub-problem 2 is a decision that gives one answer per station, so it suits a **function**. Sub-problems 1 and 3 carry out actions and return nothing, so they suit **procedures**.

```
PROCEDURE LoadStations()
   // reads every station record into the array Stations
ENDPROCEDURE

FUNCTION StationStatus(ThisStation : TStation) RETURNS STRING
   IF ThisStation.BikesDocked = 0 THEN
      RETURN "EMPTY"
   ENDIF
   IF ThisStation.BikesDocked = ThisStation.Docks THEN
      RETURN "FULL"
   ENDIF
   RETURN "OK"
ENDFUNCTION

PROCEDURE OutputInstruction(ThisStation : TStation, Status : STRING)
   IF Status = "EMPTY" THEN
      OUTPUT "Deliver bikes to ", ThisStation.StationName
   ELSE
      OUTPUT "Collect bikes from ", ThisStation.StationName
   ENDIF
ENDPROCEDURE
```

The main program then becomes short and readable:

```
CALL LoadStations()
FOR Index ← 1 TO 150
   Status ← StationStatus(Stations[Index])
   IF Status <> "OK" THEN
      CALL OutputInstruction(Stations[Index], Status)
   ENDIF
NEXT Index
```

StationStatus can be tested on its own with three test stations (empty, full, part-full) before the rest of the program exists, and the same function could be reused in the user-facing app to grey out empty stations.

## How the two skills work together

Abstraction decides **what data** the solution needs; decomposition decides **how the work** is divided. In the worked examples, abstraction produced TStation, and decomposition produced three modules that work on TStation records. The detailed refinement of each module into pseudocode steps is **stepwise refinement**, covered in 9.2; see the [Algorithms study guide](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2/).

## Common mistakes

- Defining abstraction as "making the problem simpler" with no mention of **removing unnecessary detail**.
- Listing details to exclude without a reason linked to the program's purpose.
- Confusing decomposition with abstraction: decomposition **splits** the problem; abstraction **removes** detail.
- Saying a function and a procedure are the same. A function returns a value.
- Giving a benefit of decomposition that applies to any program, such as "it works better", with no explanation.

## Exam technique

For **identify** questions in a scenario, choose details that are clearly essential or clearly irrelevant, and match the number asked for. For **explain** or **describe** questions on benefits, give the benefit and why it follows: "modules can be tested separately, *so* an error can be traced to one module". For **decompose** questions, name each sub-problem as an action ("calculate the fine"), and say whether it would be a procedure or a function when asked.
