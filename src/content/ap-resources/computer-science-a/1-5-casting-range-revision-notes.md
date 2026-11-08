---
resourceId: "mb-ap-csa-1.5-revision-notes"
title: "Casting and Range of Variables: Revision Notes (Computer Science A 1.5)"
description: "A one-page recap of the (int) and (double) casts, rounding with a cast, the range of int and integer overflow, and round-off error in double."
course: "computer-science-a"
unit: 1
topics: ["1.5"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall what each cast produces and how precedence affects it", "Recall the rounding formulas and the idea of overflow", "Recognise when round-off error occurs"]
skills: ["2", "4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.5-study-guide", "mb-ap-csa-1.5-practice", "mb-ap-csa-1.5-checklist"]
next: "mb-ap-csa-1.5-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["(int) truncates toward zero; (double) widens; a cast applies to the value immediately to its right.", "Round with (int) (x + 0.5) for non-negative x and (int) (x - 0.5) for negative x.", "int overflow gives an in-range but unexpected value; double has round-off error."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-5-casting-range-study-guide/).

## Recap

- The **casting operators** `(int)` and `(double)` convert between `double` and `int` values.
- Casting a `double` to an `int` **truncates**: the digits to the right of the decimal point are dropped.
- Some code widens `int` values to `double` **automatically** (assignment to a `double`, or an `int` meeting a `double` in an operator).
- A **cast has higher precedence** than `*`, `/` and `+` and applies to what is immediately to its right.
- `(int) (x + 0.5)` rounds a non-negative `double`; `(int) (x - 0.5)` rounds a negative one.
- `Integer.MAX_VALUE` and `Integer.MIN_VALUE` are the largest and smallest `int`. An `int` uses 4 bytes, so it must be in that range, inclusive.
- **Integer overflow**: the result is an `int` in range but not necessarily what you expected. No exception is thrown.
- **Round-off error**: a `double` more precise than can be stored is rounded to a representable value. Use `int` values to avoid it.

## Key relationships

| Expression | Value | Reason |
|---|---|---|
| `(int) 3.99` | `3` | truncation |
| `(int) -3.99` | `-3` | truncation toward zero |
| `(double) 7` | `7.0` | widening by cast |
| `(double) 7 / 2` | `3.5` | cast on 7 first, then a `double` division |
| `(double) (7 / 2)` | `3.0` | the integer division is done first |
| `(int) 2.5 * 2` | `4` | cast applies to 2.5 only |
| `(int) (2.5 * 2)` | `5` | bracket first |
| `(int) (87.5 + 0.5)` | `88` | rounds a non-negative value |
| `(int) (-3.6 - 0.5)` | `-4` | rounds a negative value |
| `Integer.MAX_VALUE + 1` | `Integer.MIN_VALUE` | overflow wraps around |
| `0.1 + 0.2` | `0.30000000000000004` | round-off error |

## Assumptions and conventions

- The only primitive types used are `int`, `double` and `boolean`.
- Brackets around the expression decide how far a cast reaches.
- Overflow throws no exception; the program carries on with a wrong value.
- The exam gives no calculator: do not expect to compute a wrapped overflow value digit by digit, but know that the result is in range and unexpected.

## Mistakes to avoid

1. **Treating `(int)` as rounding.** It truncates.
2. **Putting the cast in the wrong place**, so a fraction is lost before the cast happens.
3. **Using `(int) (x + 0.5)` for negative numbers.** Use `x - 0.5`.
4. **Expecting an exception on overflow.**
5. **Thinking `Integer.MAX_VALUE + 1` is bigger.** It wraps to the smallest value.
6. **Believing a `double` shows every decimal exactly.**
7. **Adding a needless cast** to store an `int` in a `double`.

## Quick self-check

1. What is `(int) 9.8`? *(9)*
2. What is `(double) 5 / 4`, and what is `(double) (5 / 4)`? *(1.25 and 1.0)*
3. Round 6.5 to the nearest `int` using a cast. *((int) (6.5 + 0.5) is 7)*
4. What is the value of `Integer.MAX_VALUE + 1`? *(Integer.MIN_VALUE, by overflow)*
5. Why might `0.1 + 0.2` not print exactly 0.3? *(Round-off error in the stored double values.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-5-casting-range-practice/).
