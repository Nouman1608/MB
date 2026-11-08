---
resourceId: "mb-ap-csp-3.12-revision-notes"
title: "Calling Procedures: Revision Notes (Computer Science Principles 3.12)"
description: "One-page recap of calling procedures: parameters and arguments, return values, flow of control, DISPLAY versus RETURN, INPUT, and a checklist for reading any call."
course: "computer-science-principles"
unit: 3
topics: ["3.12"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.12-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.12-study-guide", "mb-ap-csp-3.12-practice", "mb-ap-csp-3.12-checklist"]
next: "mb-ap-csp-3.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A procedure is a named group of instructions that may have parameters and return a value."
  - "Parameters are the input variables in the definition; arguments are the values given in the call, matched by position."
  - "A call interrupts sequential execution; after the last statement or a RETURN, control resumes immediately after the call."
  - "DISPLAY shows a value to the user; RETURN sends a value back to the caller and ends the procedure."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- A **procedure** is a named group of instructions; it may have **parameters** and **return a value**. (Method and function are other names.)
- **Parameter:** input variable in the definition. **Argument:** value given in the call, matched by **position**.
- A call **interrupts** sequential flow. After the last statement or a `RETURN`, control goes back to the point **just after** the call.
- `RETURN(expression)` sends the value back and ends the procedure **at once**.
- `DISPLAY(expression)` shows a value (and a space). It does not return anything.
- `INPUT()` returns a value typed by the user.
- A call that returns a value can be **assigned** or **used inside an expression**.

## Key relationships

| Idea | Notation | Example |
|---|---|---|
| Definition | `PROCEDURE name(p1, p2) { ... }` | `PROCEDURE rectArea(width, height)` |
| Call as statement | `name(a1, a2)` | `greet("Mina")` |
| Call as expression | `result ← name(a1, a2)` | `a ← rectArea(3, 4)` |
| Return a value | `RETURN(expression)` | `RETURN(width * height)` |
| Nested call | Inner call is evaluated first | `DISPLAY(rectArea(rectArea(1, 2), 3))` |

## Assumptions

- Arguments are evaluated before the procedure body runs.
- The number of arguments matches the number of parameters.
- A definition does nothing until the procedure is called.

## Method for tracing a call

1. Write the parameters, then the argument values beside them.
2. Run the body line by line; note any `DISPLAY` output **in order**.
3. Stop at the first `RETURN` that runs.
4. Replace the call by its returned value and continue evaluating.

## Mistakes to avoid

- Swapping the order of arguments.
- Confusing `DISPLAY` with `RETURN`.
- Running statements after a `RETURN`.
- Forgetting that `DISPLAY` inside a procedure happens during the call.
- Treating parameters as variables that existed before the call.

## Worked mini-example

```text
PROCEDURE f(n)
{
  DISPLAY(n)
  RETURN(n + 1)
}
DISPLAY(f(7))
```

Output: `7 8`

The call `f(7)` runs first: it displays 7 and returns 8. Then the outer `DISPLAY` shows the returned 8. Output: `7 8`.

## Quick self-check

1. In `PROCEDURE total(a, b)` and the call `total(2, 5)`, which are parameters and which are arguments?
2. What does a `RETURN` statement do besides giving a value back?
3. After `x ← f(7)` finishes, where does the program continue?

<details>
<summary>Answers</summary>

1. `a` and `b` are parameters; `2` and `5` are arguments.
2. It ends the procedure immediately.
3. At the statement immediately after the call.

</details>

## Where marks are won and lost

Tracing questions give a procedure definition and a few calls and ask what is displayed or returned. Watch the order of arguments, early returns, and calls inside expressions. A second type asks which line of the program runs next after a call finishes. Others ask the difference between a parameter and an argument. Use the five-step checklist every time and track variables in a table. In the Create task, your own procedure must have at least one parameter that affects what it does, and you must show a call to it, so be ready to explain which argument went in and what came back.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/) for worked examples and explanations.
