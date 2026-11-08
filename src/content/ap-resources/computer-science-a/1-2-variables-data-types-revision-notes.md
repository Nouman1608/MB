---
resourceId: "mb-ap-csa-1.2-revision-notes"
title: "Variables and Data Types: Revision Notes (Computer Science A 1.2)"
description: "A one-page recap of data types, the primitive types int, double and boolean, reference types, and declaring variables, with a quick self-check."
course: "computer-science-a"
unit: 1
topics: ["1.2"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall what a data type and a variable are", "Choose int, double or boolean for a described value", "Decide whether a declaration compiles and what the variable holds"]
skills: ["2", "3"]
studyMinutes: 15
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.2-study-guide", "mb-ap-csa-1.2-practice", "mb-ap-csa-1.2-checklist"]
next: "mb-ap-csa-1.2-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["A data type is a set of values with the operations on them; it is either primitive or reference.", "int, double and boolean are the three primitive types in this course.", "A variable has a name, a fixed type and a value that can change."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-2-variables-data-types-study-guide/).

## Recap

- A **data type** is a set of values and a set of operations on those values. Types are **primitive** or **reference**.
- The primitive types used in this course are **`int`** (an integer), **`double`** (a real number) and **`boolean`** (`true` or `false`).
- A **reference type** defines objects. `String` is a reference type: a `String` variable holds a reference to a `String` object.
- A **variable** is a storage location with a name, a data type and a value. The value can change while the program runs; the type cannot.
- A variable of a primitive type holds a primitive value of that type.
- The compiler checks that the value stored in a variable is of a compatible type.

## Key relationships

| Idea | How to use it |
|---|---|
| Declare | `int count;` gives the type and name |
| Declare and initialize | `int count = 12;` |
| Change the value later | `count = 20;` (no type on the left) |
| int in a double variable | allowed: `double rate = 4;` stores `4.0` |
| double in an int variable | **not** allowed: `int size = 3.0;` fails to compile |
| `String` in a boolean or int variable | not allowed |
| Valid name | letters, digits, `_` or `$`; cannot start with a digit; cannot be a keyword |
| Case | `count` and `Count` are different names |
| Choosing a type | count with `int`, measure with `double`, yes/no with `boolean`, text with `String` |

## Assumptions and conventions

- The other five Java primitive types (`long`, `short`, `byte`, `float`, `char`) are outside the course and exam.
- Variable names start with a lower-case letter by convention, with later words capitalised (`totalPrice`).
- A value written with a decimal point (such as `4.0`) is a `double`; one without (such as `4`) is an `int`.
- Text values are called string literals and are written in double quotes.

## Mistakes to avoid

1. **Treating `4` and `4.0` as identical.** They have different types and print differently.
2. **Storing a `double` in an `int`.** The compiler rejects it.
3. **Leaving out the quotes** around a `String` value, or putting quotes around a number or `true`.
4. **Declaring the same name twice** in the same method, or mixing up `count` and `Count`.
5. **Starting a name with a digit** or using a keyword as a name.
6. **Expecting `double x = 9 / 2;` to give 4.5.** The integer division happens first, so `x` holds `4.0`.

## Quick self-check

1. Which type is best for the number of pages in a book? *(`int`)*
2. Which type is best for a mass of 62.4 kg? *(`double`)*
3. Does `boolean open = "true";` compile? *(No: `"true"` is a `String`, not a `boolean`.)*
4. What do `a` and `b` hold after `int a = 6; double b = a; a = 10;`? *(`a` holds 10 and `b` holds 6.0; `b` has its own copy.)*
5. Is `int total = 5; int Total = 9;` allowed? *(Yes: they are two different variables.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-2-variables-data-types-practice/).
