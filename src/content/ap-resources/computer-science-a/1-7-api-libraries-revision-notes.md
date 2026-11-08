---
resourceId: "mb-ap-csa-1.7-revision-notes"
title: "Application Program Interface (API) and Libraries: Revision Notes (Computer Science A 1.7)"
description: "A one-page recap of libraries, packages, classes, API specifications, attributes and behaviors, and how to read a method entry in the documentation."
course: "computer-science-a"
unit: 1
topics: ["1.7"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the vocabulary: library, package, class, API specification, attribute, behavior", "Read a method entry and use it correctly", "Say which classes need an import statement"]
skills: ["4"]
studyMinutes: 15
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.7-study-guide", "mb-ap-csa-1.7-practice", "mb-ap-csa-1.7-checklist"]
next: "mb-ap-csa-1.7-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Libraries are collections of classes; the API specification documents how to use them.", "Attributes are data stored in variables; behaviors are what methods let objects do.", "java.lang classes are available by default; other packages need an import."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-7-api-libraries-study-guide/).

## Recap

- A **library** is a collection of classes. An **application programming interface (API) specification** informs the programmer how to use them.
- Classes in the APIs and libraries are grouped into **packages**.
- A **class** defines a specific **reference type**. Existing classes and class libraries can be used to create objects.
- **Attributes** are the data related to the class, stored in **variables**.
- **Behaviors** are what instances of the class can do (or what can be done with them), defined by **methods**.
- The documentation in API specifications is essential for understanding the attributes and behaviors of a class.
- The Java Quick Reference, provided on the exam, lists accessible library methods and explains them.

## Key relationships

| Idea | Example |
|---|---|
| Default package | `java.lang`: `String`, `Math`, `Integer` |
| Needs an import | `java.util`: `Scanner`, `ArrayList` |
| Method entry | `static double sqrt(double x)`: return type `double`, name `sqrt`, one `double` parameter |
| Return type position | before the method name |
| Parameter list | after the name, in brackets, with types in order |
| `String` attribute | the sequence of characters |
| `String` behaviors | `length()`, `substring(...)`, `indexOf(...)`, `equals(...)` |
| `indexOf` not found | returns `-1` |
| `substring(from, to)` | characters from index `from` up to **but not including** `to` |
| `int` passed to a `double` parameter | converted automatically |

## Assumptions and conventions

- You are expected to read documentation, not to memorise it.
- A method entry gives return type, name and parameters, plus a description of what it does.
- A class method such as `Math.sqrt` is called with the class name and a dot (Topic 1.10).
- A missing import produces a compile-time "cannot find symbol" error.

## A four-step routine for any API entry

1. Decide how the method is reached: through an object, or through the class name (a `static` method).
2. Match the parameters: the number, the types (an `int` fits a `double`; the reverse needs a cast) and the order.
3. Use the return type: the call is an expression of that type, and `void` means there is no value to use.
4. Read the description for special cases, such as "returns -1 if not found" or "ending at index `to - 1`".

## Mistakes to avoid

1. **Confusing the library with its documentation.**
2. **Expecting every class to be available without an import.**
3. **Mixing up attributes (data) and behaviors (methods).**
4. **Ignoring the return type**, for example storing a `double` result in an `int` variable.
5. **Passing arguments in the wrong order or number.**
6. **Forgetting that `substring(from, to)` excludes index `to`.**
7. **Forgetting the special return value `-1` for "not found".**

## Quick self-check

1. Which package holds `String` and `Math`? *(`java.lang`, available by default.)*
2. In `String substring(int from, int to)` what is the return type? *(`String`)*
3. Is `length()` an attribute or a behavior of `String`? *(A behavior: it is a method.)*
4. What does `"banana".indexOf("x")` return? *(`-1`)*
5. What does `Math.pow(2, 3)` return and of what type? *(`8.0`, a `double`)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-7-api-libraries-practice/).
