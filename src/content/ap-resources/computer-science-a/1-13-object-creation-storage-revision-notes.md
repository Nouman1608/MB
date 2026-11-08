---
resourceId: "mb-ap-csa-1.13-revision-notes"
title: "Object Creation and Storage (Instantiation): Revision Notes (Computer Science A 1.13)"
description: "A one-page recap of constructors, creating objects with new, constructor signatures and overloading, null references, and how arguments and control flow work in a constructor call."
course: "computer-science-a"
unit: 1
topics: ["1.13"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall how an object is created and what a constructor is", "Identify which overloaded constructor a call uses from its arguments", "Recall call by value and the flow of control for constructor calls"]
skills: ["2", "4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.13-study-guide", "mb-ap-csa-1.13-practice", "mb-ap-csa-1.13-checklist"]
next: "mb-ap-csa-1.13-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Constructors have the class name, no return type and are called with new to create an object.", "The arguments' number, order and types select the constructor; constructors with different signatures are overloaded.", "A reference variable holds an object reference or null; arguments are passed by value."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-study-guide/).

## Recap

- A class contains **constructors** that are called to **create objects**. They have the **same name as the class**.
- An object is typically created using the keyword **`new`** followed by a call to one of the class's constructors.
- A **constructor signature** is the constructor's name (the class name) plus the ordered list of parameter types. Constructors are **overloaded** when there are several with different signatures.
- **Parameters** allow constructors to accept values that establish the **initial values of the attributes**.
- A **constructor argument** is a value passed in when the constructor is called. Arguments must match the parameter types in order and number. They are passed by **call by value**: parameters are initialized with copies of the arguments.
- A variable of a reference type holds an **object reference** or, if there is no object, **`null`**.
- A constructor call interrupts the sequential execution; once its last statement runs, control returns to the point immediately after the call.

## Key relationships

| Statement | Meaning |
|---|---|
| `Box b;` | declares a variable; no object |
| `new Box(3, 5)` | calls `Box(int, int)` and creates an object |
| `Box c = new Box(3, 5);` | declare, create and store the reference |
| `Box d = null;` | `d` refers to no object |
| `Box e = c;` | `e` and `c` refer to the same object |
| `c = new Box(9);` | `c` now refers to a different, new object |

| Call | Constructor used |
|---|---|
| `new Box()` | `Box()` |
| `new Box(4)` | `Box(int)` |
| `new Box(3, 5)` | `Box(int, int)` |
| `new Box(1, 2, 3)` | none: compile-time error |
| `new Box("x")` or `new Box(2.5)` | none: compile-time error |

## Assumptions and conventions

- A constructor header has no return type, not even `void`.
- Only a statement containing `new` creates an object.
- `Scanner` and `String` also have constructors listed in the Java Quick Reference.
- Calling a method on a `null` reference causes a `NullPointerException` (Topic 1.14).

## Mistakes to avoid

1. **Confusing declaring a variable with creating an object.**
2. **Leaving out `new`.**
3. **Counting parameter names as part of the signature.**
4. **Expecting a constructor to change the caller's variable.**
5. **Passing arguments that fit no constructor** (wrong number or type).
6. **Thinking `b = a;` makes a new object.**
7. **Forgetting that the constructor runs to its end before the next statement.**

## Quick self-check

1. What is the signature of `public Box(int w, int h)`? *(`Box(int, int)`)*
2. Which constructor does `new Box(7)` call? *(The one with a single `int` parameter.)*
3. After `Box b = null;` what does `b` refer to? *(No object.)*
4. If a constructor adds 5 to its parameter, is the caller's variable changed? *(No: only the copy changes.)*
5. How many objects exist after `Box a = new Box(2); Box b = a;`? *(One.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-13-object-creation-storage-practice/).
