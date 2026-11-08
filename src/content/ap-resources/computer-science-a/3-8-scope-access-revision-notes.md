---
resourceId: "mb-ap-csa-3.8-revision-notes"
title: "Scope and Access: Revision Notes (Computer Science A 3.8)"
description: "One-page recap of scope and access: local variables, parameters, blocks, public and private, and what happens when a local variable has the same name as an instance variable."
course: "computer-science-a"
unit: 3
topics: ["3.8"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.8-study-guide"]
learningObjectives:
  - "Say where a local variable or parameter can be used, and where it cannot"
  - "Explain that parameters are local variables and cannot be public or private"
  - "Trace code in which a local variable or parameter has the same name as an instance variable"
  - "Find and fix cannot-find-symbol errors caused by scope"
  - "Describe the behaviour of a code segment that hides an instance variable by mistake"
skills: ["3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.8-study-guide", "mb-ap-csa-3.8-practice", "mb-ap-csa-3.8-checklist"]
next: "mb-ap-csa-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "A local variable is declared in the header or body of a block and can be used only in the block where it is declared."
  - "Constructors and methods are blocks, so their parameters are local variables, usable only inside that constructor or method and never public or private."
  - "If a local variable or parameter has the same name as an instance variable, the name refers to the local variable inside the body."
  - "Writing name = name in a constructor therefore assigns the parameter to itself and leaves the instance variable unchanged."
  - "Instance variables and class variables are in scope throughout their class, subject to public and private access from outside."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 3.8. For worked examples, read the [study guide](/advanced-course-resources/computer-science-a/3-8-scope-access-study-guide/).

## Recap

- A **local variable** is declared in the header or body of a block and can be used **only in that block**.
- Constructors and methods are blocks, so their **parameters are local variables**. They cannot be declared `public` or `private`.
- **Instance and class variables** are in scope throughout the class. `public` / `private` decide access from other classes.
- If a **local variable or parameter has the same name as an instance variable**, the name refers to the **local** one inside that constructor or method.
- `name = name;` in a constructor assigns the parameter to itself and leaves the instance variable at its default.

## Key relationships

| Variable kind | Declared | Visible | Access modifier? |
|---|---|---|---|
| Instance variable | In the class, outside methods | Whole class; others by access | Yes |
| Class variable | In the class with `static` | Whole class; others by access | Yes |
| Parameter | In a method or constructor header | That method or constructor | No |
| Local variable | In a method, constructor or inner block | That block, after its declaration | No |
| Loop variable | In a `for` header | The loop only | No |

## Worked reminder

For `class Calc` with `private int x = 2;` and `calc(int y)`: `calc(1)` has `z = 3` and skips the `if`, returning 3; `calc(4)` has `z = 6`, enters the `if`, makes `w = 12` and returns 12. For `Pet(String name, int age) { name = name; age = age; }` the object prints `null 0`. For `Scorer` with `total` 7, a method whose parameter is also named `total` returns 25 and leaves the object's `total` at 7.

## Reading scope in the exam

Underline each declaration and draw a bracket from it to the closing brace of its block. A use of the name outside the bracket is a compile error. When a parameter and an instance variable share a name, cross out the instance variable inside that method: the name now means the parameter, and a change to it never reaches the object.

## Compile errors to recognise

| Message | Typical cause |
|---|---|
| `cannot find symbol` (variable) | Used outside its block, in another method, or never declared |
| (no error, wrong output) | A parameter or local variable hides an instance variable |

## Mistakes to avoid

- Using a loop variable after the loop.
- Declaring a variable inside an `if` and using it after the `if`.
- Naming a constructor parameter the same as an instance variable and writing `x = x;`.
- Re-declaring an instance variable inside a method when you meant to change it (`int total = ...` instead of `total = ...`).
- Believing a local variable can be public or private.

## Quick self-check

1. Where can a variable declared in a `for` header be used? *Answer: only in that loop.*
2. A method has `int count = 0;` and the class also has an instance variable `count`. Which does `count++` change? *Answer: the local variable.*
3. What does `new Pet("Rex", 4).describe()` print for the buggy constructor with `name = name;`? *Answer: `null 0`.*
4. Can a parameter be declared `private`? *Answer: No.*
