---
resourceId: "mb-ap-csa-1.3-revision-notes"
title: "Expressions and Output: Revision Notes (Computer Science A 1.3)"
description: "A one-page recap of print and println, string literals and escape sequences, the arithmetic operators, integer division, remainder and precedence."
course: "computer-science-a"
unit: 1
topics: ["1.3"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the effect of print and println and the three escape sequences", "Apply the int/double result rules, integer division, remainder and precedence", "Recognise the ArithmeticException caused by integer division by zero"]
skills: ["2", "3"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.3-study-guide", "mb-ap-csa-1.3-practice", "mb-ap-csa-1.3-checklist"]
next: "mb-ap-csa-1.3-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["println ends the line; print does not.", "int op int gives int; any double operand gives a double. Integer division truncates.", "*, / and % come before + and -; equal precedence goes left to right; parentheses override."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-3-expressions-output-study-guide/).

## Recap

- `System.out.println(x)` displays `x` and moves to a new line. `System.out.print(x)` displays `x` and stays on the same line.
- A **string literal** is characters in double quotes. **Escape sequences** start with a backslash: `\"` is a double quote, `\\` is a backslash and `\n` is a new line. Each is one character.
- The arithmetic operators are `+`, `-`, `*`, `/` and `%`.
- Two `int` operands give an `int`. At least one `double` operand gives a `double`.
- Integer division keeps only the integer part of the quotient: `7 / 2` is 3.
- `a % b` is the remainder when `a` is divided by `b`: `17 % 5` is 2.
- Dividing an `int` by the integer zero throws an `ArithmeticException`.

## Key relationships

| Expression | Value | Reason |
|---|---|---|
| `7 / 2` | `3` | integer division |
| `7 / 2.0` | `3.5` | one operand is a `double` |
| `7 % 2` | `1` | 7 = 3 * 2 + 1 |
| `2 + 3 * 4` | `14` | `*` before `+` |
| `(2 + 3) * 4` | `20` | parentheses first |
| `20 / 4 / 2` | `2` | left to right: 5, then 2 |
| `7 / 2 * 2.0` | `6.0` | `7 / 2` is 3 first, then 3 * 2.0 |
| `n % 10` | last digit of `n` | remainder after removing groups of ten |
| `n / 10` | `n` without its last digit | integer division by ten |
| `197 / 60` and `197 % 60` | 3 and 17 | whole hours and leftover minutes |

## Assumptions and conventions

- `%` is used with a non-negative first operand and a positive second operand in this course.
- The result type is decided one operation at a time, in evaluation order.
- Expressions that give special `double` values (such as infinity) are outside the course.
- No calculator is allowed on the exam, so evaluate by hand, one step per line.

## Mistakes to avoid

1. **Expecting `7 / 2` to be 3.5.**
2. **Thinking integer division rounds** instead of truncating.
3. **Evaluating strictly left to right** without applying precedence.
4. **Forgetting that equal-precedence operators go left to right** (`10 - 4 - 3` is 3).
5. **Writing a lone backslash** in a string, or forgetting the closing quote.
6. **Using `print` when `println` is needed**, so the output runs together.
7. **Dividing by a variable that holds 0**, which compiles but throws an exception.

## Quick self-check

1. What does `System.out.print("a"); System.out.println("b"); System.out.print("c");` leave on screen? *(`ab` on the first line and `c` on the second, with the cursor still after the `c`.)*
2. Evaluate `5 + 7 % 3 * 2`. *(7 % 3 is 1; 1 * 2 is 2; 5 + 2 is 7.)*
3. Evaluate `9 / 2 + 9 / 2.0`. *(4 + 4.5 = 8.5.)*
4. What is `345 % 100`? *(45.)*
5. What happens when `int n = 0; System.out.println(10 % n);` runs? *(It compiles; at run time an `ArithmeticException` is thrown.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-3-expressions-output-practice/).
