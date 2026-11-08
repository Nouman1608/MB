---
resourceId: "mb-ap-csa-1.11-revision-notes"
title: "Math Class: Revision Notes (Computer Science A 1.11)"
description: "A one-page recap of the Math class methods abs, pow, sqrt and random, and the recipe for random numbers in a given range using scaling, casting and shifting."
course: "computer-science-a"
unit: 1
topics: ["1.11"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall the five Math methods in the Java Quick Reference and the type each returns", "Apply the scale, cast and shift recipe for random ints and doubles", "Spot the misplaced cast that makes a random expression constant"]
skills: ["2", "4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.11-study-guide", "mb-ap-csa-1.11-practice", "mb-ap-csa-1.11-checklist"]
next: "mb-ap-csa-1.11-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Math is in java.lang and contains only class methods: abs (int and double), pow, sqrt and random.", "Math.random() is at least 0.0 and less than 1.0.", "Random int from low to high inclusive: (int) (Math.random() * (high - low + 1)) + low."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-11-math-class-study-guide/).

## Recap

- The **`Math` class** is part of the `java.lang` package, so it is available by default. It contains only **class methods**.
- The methods in the Java Quick Reference: `static int abs(int x)`, `static double abs(double x)`, `static double pow(double base, double exponent)`, `static double sqrt(double x)` and `static double random()`.
- `Math.random()` returns a `double` that is **greater than or equal to 0.0 and less than 1.0**.
- Arithmetic and casting operators turn `Math.random()` into a random `int` or `double` in a defined range. Each end of a range can be **inclusive** (the value can occur) or **exclusive** (it cannot).

## Key relationships

| Call | Value | Type |
|---|---|---|
| `Math.abs(-7)` | `7` | `int` |
| `Math.abs(-2.5)` | `2.5` | `double` |
| `Math.pow(2, 5)` | `32.0` | `double` |
| `Math.pow(5, 0)` | `1.0` | `double` |
| `Math.sqrt(144)` | `12.0` | `double` |
| `(int) Math.pow(2, 10)` | `1024` | `int` |

| Want | Expression |
|---|---|
| double in `[0.0, 1.0)` | `Math.random()` |
| int `0` to `n - 1` | `(int) (Math.random() * n)` |
| int `low` to `high`, both inclusive | `(int) (Math.random() * (high - low + 1)) + low` |
| double `low` up to, not including, `high` | `Math.random() * (high - low) + low` |
| int 1 to 6 | `(int) (Math.random() * 6) + 1` |

## Four questions for any random-number problem

1. How many different values are wanted? That is the multiplier.
2. What is the smallest value wanted? That is the shift added at the end.
3. Is the result an `int` (cast the whole product, then add the shift) or a `double` (no cast)?
4. Test the extremes: `Math.random()` equal to 0.0, and just under 1.0.

## Assumptions and conventions

- Arguments of type `int` are converted automatically to `double` parameters.
- The Java Quick Reference is provided on the exam; you need to read and use it correctly.
- For a random expression you cannot say the output, only the possible range, so test the smallest (0.0) and largest (just under 1.0) values.
- Use `Math.sqrt` on non-negative values only; results for negative values are outside the course.

## Mistakes to avoid

1. **Writing `(int) Math.random() * n`.** The cast truncates `Math.random()` to 0 first, so the result is always 0.
2. **Multiplying by `high` instead of by the number of values** (`high - low + 1`).
3. **Expecting 1.0 from `Math.random()`.**
4. **Forgetting that `pow`, `sqrt` and `random` return `double`.** Storing the result in an `int` needs a cast.
5. **Importing `Math` or creating a `Math` object.**
6. **Thinking `abs` always returns `double`.**
7. **Adding the shift in the wrong place** without checking the range.

## Quick self-check

1. What does `Math.sqrt(49)` return, and what type? *(`7.0`, a `double`)*
2. How many values are in the range 5 to 12 inclusive? *(8)*
3. Write an expression for a random `int` from 1 to 100 inclusive. *(`(int) (Math.random() * 100) + 1`)*
4. What is the range of `(int) (Math.random() * 10 + 5)`? *(5 to 14 inclusive)*
5. What does `(int) Math.random() * 6 + 1` always equal? *(1)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-11-math-class-practice/).
