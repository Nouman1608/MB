---
resourceId: "mb-ap-csa-1.6-revision-notes"
title: "Compound Assignment Operators: Revision Notes (Computer Science A 1.6)"
description: "A one-page recap of the compound assignment operators +=, -=, *=, /= and %=, the post-increment and post-decrement operators, and how to trace them."
course: "computer-science-a"
unit: 1
topics: ["1.6"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the meaning of each compound assignment operator and of ++ and --", "Rewrite a compound assignment as an ordinary assignment", "Trace a sequence of updates on int and double variables"]
skills: ["2", "3"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.6-study-guide", "mb-ap-csa-1.6-practice", "mb-ap-csa-1.6-checklist"]
next: "mb-ap-csa-1.6-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["x op= e evaluates the whole of e first, then stores x op (e) in x.", "++ and -- add or subtract 1; the course uses them after the variable and as statements.", "The variable's type decides whether /= is integer division."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-6-compound-assignment-study-guide/).

## Recap

- A **compound assignment operator** performs the arithmetic operation between the value on the left and the value on the right, then assigns the result to the variable on the left.
- The operators are `+=`, `-=`, `*=`, `/=` and `%=`; they can be used in place of `=` in numeric expressions.
- The **post-increment** `++` and **post-decrement** `--` add 1 to, or subtract 1 from, a numeric variable and store the new value.
- Prefix forms (`++x`) and uses inside other expressions (`arr[x++]`) are outside the course and exam.

## Key relationships

| Statement | Equivalent | Result for `int x = 8` |
|---|---|---|
| `x += 3;` | `x = x + 3;` | 11 |
| `x -= 3;` | `x = x - 3;` | 5 |
| `x *= 3;` | `x = x * 3;` | 24 |
| `x /= 3;` | `x = x / 3;` | 2 (integer division) |
| `x %= 3;` | `x = x % 3;` | 2 |
| `x++;` | `x += 1;` | 9 |
| `x--;` | `x -= 1;` | 7 |
| `x *= 2 + 3;` | `x = x * (2 + 3);` | 40 |
| `x /= 2 * 2;` | `x = x / (2 * 2);` | 2 |

For `double d = 9; d /= 2;` the result is `4.5`.

## The three jobs compound assignment does

- **Accumulate:** `sum += price;` keeps a running total.
- **Count:** `count++;` goes up by one each time; `remaining--;` counts down.
- **Scale or wrap:** `price *= 2;` doubles; `pot /= 4;` shares out whole units; `position %= 10;` keeps a non-negative value in the range 0 to 9.

Statement order matters: from 10, `x += 5; x *= 2;` leaves 30, but `x *= 2; x += 5;` leaves 25.

## Assumptions and conventions

- The right side is evaluated in full before it is combined with the variable.
- Use `++` and `--` as separate statements, after the variable.
- If an `int` variable is updated with a `double` value (`n *= 1.5;`), Java converts the result back to `int`, truncating the fraction.
- No calculator is allowed on the exam, so trace by hand with a table, one row per statement.

## Mistakes to avoid

1. **Reading `x *= 2 + 3` as `x = x * 2 + 3`.**
2. **Writing `=+` instead of `+=`.** `x =+ 5` just stores 5.
3. **Forgetting integer division** when `/=` is applied to an `int`.
4. **Using the original value** of a variable instead of the value left by the previous statement.
5. **Using `++` inside an expression** or in prefix form, which the course does not use.
6. **Treating `%=` as a percentage.** It stores the remainder.

## Quick self-check

1. After `int a = 12; a /= 5;` what is `a`? *(2)*
2. After `int b = 6; b *= 1 + 2;` what is `b`? *(18)*
3. After `double d = 7; d /= 2;` what is `d`? *(3.5)*
4. After `int c = 9; c %= 4; c++;` what is `c`? *(1 then 2, so 2)*
5. What does `int n = 3; n += 2.9;` leave in `n`? *(5, because 5.9 is truncated when stored)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-6-compound-assignment-practice/).
