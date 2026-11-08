---
resourceId: "mb-ap-csp-3.13-revision-notes"
title: "Developing Procedures: Revision Notes (Computer Science Principles 3.13)"
description: "One-page recap of developing procedures: abstraction, modularity, reuse and parameters, a five-step method for writing a procedure, and the explanation pattern for exam and Create task answers."
course: "computer-science-principles"
unit: 3
topics: ["3.13"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.13-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.13-study-guide", "mb-ap-csp-3.13-practice", "mb-ap-csp-3.13-checklist"]
next: "mb-ap-csp-3.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Procedural abstraction names a process so a procedure can be used knowing what it does, not how."
  - "Parameters generalise a procedure so it can be reused with a range of arguments."
  - "Modularity splits a program into subprograms; shared features are extracted to avoid duplicated code."
  - "The internals of a procedure can change without notifying users as long as what it does is preserved."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- **Procedural abstraction** gives a name to a process; users need to know **what** it does, not **how**.
- It manages complexity through **subproblems**, **modularity** (separate subprograms), **reuse** (extracting shared features) and **readability**.
- **Parameters** generalise a procedure so it works with a range of arguments.
- A procedure can **return** a value; `RETURN` may appear anywhere and returns **immediately**.
- The **inside** of a procedure can change without notifying users, if **what it does** is preserved.

## Key relationships

| Idea | What it means | Example |
|---|---|---|
| Abstraction | Use by purpose, not method | `grade(score)` returns a letter |
| Modularity | Program split into subprograms | `total`, `highest`, `average` |
| Reuse | Shared code extracted once | `average` calls `total` |
| Parameter | Input that varies per call | `aList`, `score` |
| Return value | Result the caller can use | `RETURN(sum)` |
| Safe change | Internals change, behaviour does not | Two versions of `isEven` |

## Assumptions

- A procedure uses only its parameters and its own variables.
- Callers rely only on the documented behaviour.
- "What it does" means the result for every possible argument.

## Method for writing a procedure

1. **Name the job** in a few words.
2. **List the inputs** that change per call: each becomes a parameter.
3. **Decide the output**: return it where possible.
4. **Write the body**; test typical, boundary and special arguments.
5. **Call it** from the main program, replacing any repeated code.

## The explanation pattern

When asked how a procedure manages complexity, write: (1) the **name** of the procedure and **what it does**; (2) how the **parameter** lets it work for many inputs; (3) where it is **reused**; (4) what the program would be like **without** it (longer, repeated, harder to correct).

## Mistakes to avoid

- Describing only the *steps* inside the procedure rather than the benefit.
- Giving no parameter when the values change from call to call.
- Displaying inside a procedure when the caller needs the value.
- Changing what a procedure does and still expecting callers to work.
- Writing "it makes code shorter" with no further reason.

## Worked mini-example

```text
PROCEDURE bigger(a, b)
{
  IF(a > b)
  {
    RETURN(a)
  }
  RETURN(b)
}
DISPLAY(bigger(bigger(4, 9), 6))
```

Output: `9`

`bigger(4, 9)` returns 9; `bigger(9, 6)` returns 9. Reusing `bigger` twice finds the largest of three without new comparison code.

## Quick self-check

1. What is the difference between modularity and procedural abstraction?
2. Why can the inside of `isEven` change without informing callers?
3. Give one reason a procedure should use a parameter rather than a fixed value.

<details>
<summary>Answers</summary>

1. Modularity is splitting a program into separate subprograms; procedural abstraction is naming a process so it can be used without knowing how it works. Procedures provide both.
2. Callers rely on what it does (returns whether n is even), which is unchanged.
3. A parameter lets the same procedure be reused for different values.

</details>

## Where marks are won and lost

Two kinds of question appear. The first shows a procedure and asks what it returns for given arguments (see Topic 3.12 for tracing). The second asks you to explain how procedural abstraction manages complexity or which benefit a change gives. A strong explanation names the procedure, says what it does, refers to its parameter, and contrasts with code that is repeated. The Create task asks the same of a procedure you wrote that has at least one parameter affecting its behaviour.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-study-guide/) for worked examples and explanations.
