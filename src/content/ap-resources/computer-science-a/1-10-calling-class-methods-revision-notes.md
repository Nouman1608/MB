---
resourceId: "mb-ap-csa-1.10-revision-notes"
title: "Calling Class Methods: Revision Notes (Computer Science A 1.10)"
description: "A one-page recap of class methods, the static keyword, calling a method with the class name and dot operator, nested calls and common compile-time call errors."
course: "computer-science-a"
unit: 1
topics: ["1.10"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall what makes a method a class method and how it is called", "Evaluate nested calls from the inside out", "Recall the four common reasons a method call does not compile"]
skills: ["2", "3"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.10-study-guide", "mb-ap-csa-1.10-practice", "mb-ap-csa-1.10-checklist"]
next: "mb-ap-csa-1.10-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A class method has static in its header and belongs to the class, not to instances.", "Call it with ClassName.method(args); the class name is optional inside the defining class.", "Non-void calls are expressions; void calls are statements; nested calls are worked out from the inside out."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-study-guide/).

## Recap

- **Class methods** are associated with the class, not with instances of the class.
- Class methods include the keyword **`static`** in the header, before the method name.
- Class methods are typically called using the **class name** and the **dot operator**: `Converter.toFahrenheit(100)`.
- When the call occurs in the **defining class**, the use of the class name is optional.
- Everything about parameters, arguments, return types, void and non-void methods from Topic 1.9 still applies.
- The `Math` class contains only class methods, so it is never instantiated.

## Key relationships

| Situation | Form of the call |
|---|---|
| Calling from a different class | `ClassName.method(args)` |
| Calling from inside the defining class | `method(args)` or `ClassName.method(args)` |
| Library class method | `Math.sqrt(16)` |
| Void method | a statement: `Converter.banner("x");` |
| Non-void method | an expression: `double f = Converter.toFahrenheit(100);` |
| Nested call | `f(g(x))`: `g(x)` first, then `f` with that value |
| Argument is an `int`, parameter is a `double` | allowed (converted) |
| Argument is a `double`, parameter is an `int` | compile-time error |

| Compile-time error | Typical cause |
|---|---|
| cannot find symbol | method defined in another class and the class name is missing, or a misspelt name |
| cannot be applied to given types | wrong number of arguments |
| incompatible types | wrong argument type, or a returned value stored in the wrong type |
| void cannot be converted | using the result of a void method |

## Assumptions and conventions

- `static` is shown in headers of class methods; non-static (instance) methods come in Topic 1.14.
- The class name is the name of the class that defines the method, not the name of a variable.
- Arguments are evaluated before the method is entered.
- No calculator is allowed on the exam; trace nested calls on paper from the inside out.

## Class methods and instance methods

- **Class method:** needs no object; `static` in the header; called through the class name (`Math.abs(-3)`). Used for work that does not depend on any one object.
- **Instance method:** belongs to an object; called on the object (`word.length()`); you cannot call it with only the class name (Topics 1.12 to 1.14).
- `main` is itself a class method, which is why it can start a program before any object exists.
- Class names are case-sensitive: `Converter` is not `converter`.

## Mistakes to avoid

1. **Calling a method from another class without its class name.**
2. **Reading `static` as "constant".**
3. **Creating an object just to call a class method** (such as `new Math()`).
4. **Passing a `double` to an `int` parameter.**
5. **Putting arguments in the wrong order.**
6. **Storing the result of a void method.**
7. **Working a nested call from the outside in.**

## Quick self-check

1. What keyword marks a class method? *(`static`)*
2. How do you call `wholeMinutes` of class `Converter` from another class, with the argument 200? *(`Converter.wholeMinutes(200)`)*
3. Is the class name optional inside `Converter` itself? *(Yes.)*
4. What does `Math.sqrt(Math.abs(-9))` return? *(`3.0`)*
5. Why does `Converter.wholeMinutes(2.5)` not compile? *(The parameter is an `int` and a `double` argument cannot be passed to it.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-10-calling-class-methods-practice/).
