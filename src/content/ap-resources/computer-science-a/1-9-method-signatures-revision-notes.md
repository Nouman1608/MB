---
resourceId: "mb-ap-csa-1.9-revision-notes"
title: "Method Signatures: Revision Notes (Computer Science A 1.9)"
description: "A one-page recap of methods, parameters and arguments, method signatures, void and non-void methods, call by value, overloading and the flow of control in a method call."
course: "computer-science-a"
unit: 1
topics: ["1.9"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the definitions of method, parameter, argument, signature and overloading", "Match calls to signatures and predict return types", "Trace the order of execution in a program with method calls"]
skills: ["3", "4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.9-study-guide", "mb-ap-csa-1.9-practice", "mb-ap-csa-1.9-checklist"]
next: "mb-ap-csa-1.9-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Signature = method name + ordered list of parameter types; the return type and parameter names are not part of it.", "Arguments must match parameters in number, order and compatible type; they are passed by value (copies).", "A void method has no value; a non-void method's value must be stored or used in an expression."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-9-method-signatures-study-guide/).

## Recap

- A **method** is a named block of code that runs only when called. A **block** is any code enclosed in braces.
- **Procedural abstraction** lets a programmer use a method by knowing what it does without knowing how it was written.
- A **parameter** is a variable declared in the header of a method. An **argument** is a value passed into the method when it is called.
- A **method signature** consists of the method name and the ordered list of parameter types. With no parameters, the list is empty.
- A **void method** has no return value and is not called as part of an expression. A **non-void method** returns a value of its return type, which must be stored in a variable or used in an expression to be of any use.
- Arguments must be compatible in number and order with the parameter types, and are passed by **call by value**: the parameters are initialized with copies of the arguments.
- **Overloaded** methods have the same name and different signatures.
- A call interrupts sequential execution; when the last statement or a `return` is executed, control goes back to the point immediately after the call.

## Key relationships

| Header | Signature | Return type |
|---|---|---|
| `static int square(int n)` | `square(int)` | `int` |
| `static double average(int a, int b)` | `average(int, int)` | `double` |
| `static void greet(String name)` | `greet(String)` | `void` |
| `static void second()` | `second()` | `void` |

| Call | Meaning |
|---|---|
| `greet("Ada");` | void call as a statement |
| `int s = square(6);` | return value stored |
| `println(square(2 + 3));` | return value used in an expression; the argument is an expression too |
| `int r = greet("x");` | compile-time error: nothing to store |
| `square(2, 3)` | compile-time error: wrong number of arguments |
| `square("3")` | compile-time error: wrong type |

## Assumptions and conventions

- `public static` is treated as part of the pattern in this topic.
- Return type and parameter names are not part of the signature, so two methods cannot differ only by return type.
- A primitive parameter that is changed inside a method does not change the argument variable.
- An `int` argument can fill a `double` parameter, not the reverse.

## Mistakes to avoid

1. **Putting the return type in the signature.**
2. **Expecting a method to change a primitive argument.**
3. **Using a void method in an expression**, or forgetting to store a non-void result you need.
4. **Mismatching the number, order or type of arguments.**
5. **Defining two methods that differ only in return type.**
6. **Losing track of where control returns:** immediately after the call.
7. **Confusing parameter (in the header) with argument (in the call).**

## Quick self-check

1. What is the signature of `static double avg(int a, int b)`? *(`avg(int, int)`)*
2. Can `static int f(int x)` and `static double f(int y)` both exist in one class? *(No: same signature; only the return type differs.)*
3. After `int n = 5; change(n);` where `change` adds 10 to its parameter, what is `n`? *(Still 5.)*
4. What does `twice(2.5)` call if both `twice(int)` and `twice(double)` exist? *(The `double` version.)*
5. Where does control go when a method finishes? *(To the point immediately after the call.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-9-method-signatures-practice/).
