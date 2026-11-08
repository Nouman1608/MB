---
resourceId: "mb-ap-csa-1.4-revision-notes"
title: "Assignment Statements and Input: Revision Notes (Computer Science A 1.4)"
description: "A one-page recap of assignment statements, initialization, compatible types, null, and reading keyboard input with the Scanner class."
course: "computer-science-a"
unit: 1
topics: ["1.4"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall how an assignment statement works and what initialization means", "Decide whether an assignment is type-compatible", "Recall what the Scanner methods return and the nextLine pitfall"]
skills: ["2", "4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.4-study-guide", "mb-ap-csa-1.4-practice", "mb-ap-csa-1.4-checklist"]
next: "mb-ap-csa-1.4-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Assignment: evaluate the right side, then store the value in the variable on the left.", "Initialize before use; the value must be of a compatible type.", "Scanner methods return the next int, double, boolean, word or line."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-4-assignment-input-study-guide/).

## Recap

- The **assignment operator** `=` stores the value of the expression on its right in the variable on its left. It can initialize a variable or change its value.
- A variable is **initialized** the first time it is assigned a value. A variable must be assigned a value before it is used in an expression.
- The assigned value must be of a **compatible** type.
- During execution an expression is evaluated to a **single value**, and that value has a type.
- A reference variable may hold an object reference or **`null`**, a special literal meaning "no object".
- **Input** can take many forms. `Scanner` is one way to read text from the keyboard.

## Key relationships

| Idea | Example | Result |
|---|---|---|
| Update from itself | `n = n + 1;` | `n` goes up by 1 |
| Right side uses old values | `a = 3; a = a * 2 + a;` | `a` is 9 |
| int into double | `double d = 5;` | `d` holds `5.0` |
| double into int | `int n = 5.0;` | compile-time error |
| Use before assignment | `int y; int z = y + 1;` | compile-time error (not initialized) |
| null | `String s = null;` | legal; `int n = null;` is not |
| `nextInt()` | reads `42` | the `int` 42 |
| `nextDouble()` | reads `3` | the `double` 3.0 |
| `nextLine()` after `nextInt()` | on the same line | often `""` (empty string) |
| Wrong input type | `nextInt()` reads `abc` | `InputMismatchException` at run time |

## Assumptions and conventions

- Examples use `Scanner in = new Scanner(System.in);` with `import java.util.Scanner;` at the top.
- Any specific form of user input is outside the scope of the exam; reading and tracing assignments is what matters.
- Trace tables show a variable after each statement; a dash means it does not exist yet.
- Primitive assignment copies a value, so later changes to one variable do not affect the other.

## Mistakes to avoid

1. **Reading `=` as "equals".** It means "store".
2. **Using a variable before giving it a value.**
3. **Storing a `double` in an `int`** without conversion.
4. **Working out the right side with values from later statements.** Use the values as they are when the statement runs.
5. **Forgetting that `nextInt()` leaves the rest of the line.**
6. **Assuming `null` is 0 or `""`.**
7. **Expecting the type of an input value to be fixed by what the user typed** rather than by the method called.

## Quick self-check

1. After `int a = 4; a = a + a * 2;` what is `a`? *(`a + a * 2` is 4 + 8 = 12.)*
2. After `int x = 5; int y = x; x = 9;` what is `y`? *(5: `y` holds its own copy.)*
3. Does `double d = 3 / 2;` compile, and what does `d` hold? *(Yes; the integer division gives 1, so `d` holds 1.0.)*
4. What happens with `int y; System.out.println(y);`? *(It does not compile: `y` might not have been initialized.)*
5. If the user types `3.5` when `nextInt()` is called, what happens? *(An `InputMismatchException` at run time.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-4-assignment-input-practice/).
