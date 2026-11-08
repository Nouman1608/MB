---
resourceId: "mb-ap-csa-1.14-revision-notes"
title: "Calling Instance Methods: Revision Notes (Computer Science A 1.14)"
description: "A one-page recap of instance methods, calling them with an object name and the dot operator, how void and non-void calls behave, and the NullPointerException on a null reference."
course: "computer-science-a"
unit: 1
topics: ["1.14"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall how instance methods are called and how they differ from class methods", "Predict the effect of void and non-void calls on objects", "Recall when a NullPointerException occurs"]
skills: ["2", "3"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.14-study-guide", "mb-ap-csa-1.14-practice", "mb-ap-csa-1.14-checklist"]
next: "mb-ap-csa-1.14-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Instance methods are called on objects: objectName.method(args).", "Each object has its own attribute values; void methods change the object, non-void methods return values.", "A method call on a null reference throws a NullPointerException."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-study-guide/).

## Recap

- **Instance methods** are called on objects of the class. The **dot operator** is used along with the **object name**: `box.area()`.
- A **class method** is called with the class name and needs no object; an instance method needs an object and cannot be called with just the class name.
- Each object has its own attribute values, so one method can give different results for different objects.
- A **void** method is called as a statement and can change the object. A **non-void** method returns a value to store or use in an expression.
- Arguments must match parameters in number, order and compatible type, and are passed by value.
- A method call on a **`null`** reference results in a **`NullPointerException`**: a run-time error.
- `String` methods such as `length()` and `indexOf(...)` are instance methods called on `String` objects.

## Key relationships

| Call | Kind | Example |
|---|---|---|
| `Math.sqrt(16)` | class method | called through the class name |
| `small.area()` | instance method, non-void | an expression with the returned value |
| `small.grow(1);` | instance method, void | a statement that changes `small` |
| `word.length()` | instance method of `String` | on a `String` object |
| `Rectangle.area()` | error | instance method called through a class name |
| `t.area()` with `t == null` | run-time error | `NullPointerException` |

| Situation | Result |
|---|---|
| `Rectangle s = r;` then `s.grow(4);` | `r` sees the change: same object |
| two separate objects | each keeps its own values |
| `int c = r.grow(2);` | compile-time error: void |
| `r.grow("2");` | compile-time error: wrong argument type |

## Assumptions and conventions

- The object name before the dot is a reference variable that must refer to an object when the call runs.
- Exceptions interrupt the normal flow: nothing after the failing call runs (Topic 1.1).
- The compiler checks that the method exists for the variable's class, not that the variable is non-null.
- No calculator is allowed on the exam; trace the objects with a table.

## Mistakes to avoid

1. **Calling an instance method with the class name.**
2. **Forgetting that a void method changes the object but returns nothing.**
3. **Assuming a call on one object changes all objects of the class.**
4. **Missing that two names can refer to one object.**
5. **Expecting a compile error for a `null` call.**
6. **Storing the result of a void method.**
7. **Passing the wrong number, order or type of arguments.**

## Quick self-check

1. How do you call `area` on a `Rectangle` named `r`? *(`r.area()`)*
2. Does `r.grow(2);` return a value? *(No: it is a void method that changes `r`.)*
3. If `s` and `r` refer to the same object and `s.grow(1);` is called, what does `r.area()` see? *(The changed object.)*
4. What happens when `t.area()` runs and `t` is `null`? *(A `NullPointerException`.)*
5. What does `"banana".length()` return? *(`6`)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-14-calling-instance-methods-practice/).
