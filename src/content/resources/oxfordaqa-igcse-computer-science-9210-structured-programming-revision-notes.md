---
title: "OxfordAQA IGCSE Computer Science (9210): Structured programming -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.11
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "structured-programming-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.11: modules, interfaces, local variables, parameters, return values and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.11 Structured programming** of OxfordAQA International GCSE Computer Science
(9210). The restructuring example and library plan are in the [structured programming study
guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming/).

## What the specification asks

- **Describe** the structured approach, including **modularised programming**, **clear, well documented
  interfaces** (**local variables, parameters**) and **return values**.
- **Explain the advantages** of the structured approach.
- Exam material uses **"parameter"** for both parameters and arguments.

## The approach in five points

1. **Decompose** the problem into sub-problems.
2. Write each sub-problem as a **module** (subroutine) with **one task**.
3. Pass data **in** through **parameters**.
4. Pass results **out** through **return values**.
5. Keep working data in **local variables** and **document each interface**.

## What an interface documents

| Part | Example for `Fine(daysLate)` |
|---|---|
| Name | `Fine` |
| Purpose | Calculates the fine for a late book |
| Parameters (order, type, meaning) | `daysLate`: integer, days past the due date |
| Return value (type, meaning) | Real: fine in dollars, 0.0 if not late |

A programmer should be able to **use** a module from its interface alone, without reading the code.

## Local variables

| Local variable | Program-wide (global) variable |
|---|---|
| Declared inside a subroutine | Declared for the whole program |
| Exists only while the subroutine runs | Exists for the whole run |
| Only that subroutine can use or change it | Any part of the program can change it |
| Same name can be reused in other subroutines safely | A change in one place can break another |

## Advantages, with reasons

| Advantage | Because... |
|---|---|
| Easier to understand | Each module is small with one job; the main program reads like a plan |
| Easier testing and debugging | Modules are tested separately, so an error can be traced to one module |
| Easier maintenance | Change one module; if its interface is unchanged, nothing else needs editing |
| Reuse | A documented module can be used in other programs |
| Teamwork | Programmers work on separate modules using agreed interfaces |
| Fewer unintended effects | Local variables cannot be changed by other modules |

## Model description (4 points)

"The program is split into modules, each a subroutine with a single task. Data is passed into each module through
parameters and results are passed back with return values. Each module uses local variables, so it cannot affect
data in other modules. Every module has a documented interface stating its parameters and return value."

## Mini example

```
-- Area: returns the area of a rectangle (real)
-- Parameters: length, width (real, metres)
SUBROUTINE Area(length, width)
  result ← length * width        -- local variable
  RETURN result
ENDSUBROUTINE

OUTPUT Area(3.5, 2.0)            -- 7.0
```

The comment documents the interface; `result` is local; data enters through parameters and leaves through the
return value.

## Key terms

| Term | Meaning |
|---|---|
| Structured programming | Building a program from modules with clear interfaces, using sequence, selection and iteration |
| Module | A self-contained subroutine that carries out one task |
| Decomposition | Breaking a problem into smaller sub-problems |
| Interface | The name, parameters and return value of a module, which other code relies on |
| Local variable | A variable that exists and can be used only inside the subroutine where it is declared |
| Parameter | A value passed into a subroutine (the exam's term for arguments too) |
| Return value | The value passed back from a function to its caller |

## Exam traps

- A description that only says "use subroutines" misses interfaces, parameters, return values and local variables.
- "Local variables can be accessed by any subroutine": false; that describes a program-wide variable.
- "Easier to debug" without a reason earns little: add "because each module can be tested on its own".
- Interface ≠ code: it is what the module **needs and returns**.
- Repeating the same advantage in different words scores once.

## Self-test

1. Define the term module.
2. Name the four features the specification lists for the structured approach.
3. State what is meant by a local variable.
4. Give two items that should be documented in a module's interface.
5. Explain how a structured approach makes testing easier.
6. Explain how local variables reduce errors.
7. Explain why a clear interface helps a team of programmers.
8. Explain why changing the code inside a module need not affect the rest of the program.
9. Two subroutines each declare a local variable called `count`. Do they interfere? Explain.
10. Which term does the exam use for the values given in a subroutine call?
11. Give one advantage of a main program made mostly of subroutine calls.
12. A function returns a value. Explain why this is better than storing the result in a program-wide variable.

**Answers:**
1. A self-contained subroutine that performs one specific task.
2. Modularised programming; clear, well documented interfaces; local variables and parameters; return values.
3. A variable declared inside a subroutine that exists only while it runs and can only be used inside it.
4. Any two: name, purpose, parameters (with types), return value (with type).
5. Each module can be tested on its own with chosen parameters, so errors are found in a small piece of code.
6. They cannot be changed by other parts of the program, so modules cannot accidentally overwrite each other's
data.
7. Each programmer only needs the agreed parameters and return values to use another's module, so modules can be
written at the same time.
8. Other code depends only on the interface; if the parameters and return value stay the same, callers are
unaffected.
9. No; each `count` is local to its own subroutine and exists separately.
10. Parameter.
11. It is easy to read, because the calls describe the steps of the solution.
12. The caller decides what to do with the value, and no other module can change it unexpectedly; the function
stays independent and reusable.

## Related resources

- [Structured programming study guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming/)
- [Structured programming practice questions](/resources/oxfordaqa-igcse-computer-science-9210-structured-programming-practice/)
- [Subroutines revision notes](/resources/oxfordaqa-igcse-computer-science-9210-subroutines-procedures-and-functions-revision-notes/)
