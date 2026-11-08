---
resourceId: "mb-ap-csa-4.7-revision-notes"
title: "Wrapper Classes: Revision Notes (Computer Science A 4.7)"
description: "A short recap of Integer and Double: boxing and unboxing rules, immutability, parseInt, parseDouble, null and equality traps, and a self-check."
course: "computer-science-a"
unit: 4
topics: ["4.7"]
resourceType: "revision-notes"
prerequisites:
  - "Primitive types int and double, and casting (Topics 1.2 and 1.5)"
  - "Calling methods on objects and class (static) methods (Topics 1.10 and 1.14)"
  - "The String type and its methods (Topic 1.15)"
learningObjectives:
  - "Recall the boxing and unboxing rules"
  - "Recall parseInt and parseDouble"
  - "Avoid the common traps"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.7-study-guide", "mb-ap-csa-4.7-practice", "mb-ap-csa-4.7-checklist"]
next: "mb-ap-csa-4.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Primitive to wrapper is autoboxing; wrapper to primitive is unboxing."
  - "parseInt and parseDouble are static methods that convert a String to a number."
  - "A wrapper variable can be null; unboxing null throws NullPointerException."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Full explanation and traced examples: [Topic 4.7 study guide](/advanced-course-resources/computer-science-a/4-7-wrapper-classes-study-guide/).

## Recap

`Integer` and `Double` are **wrapper classes** in `java.lang`: each object holds one `int` or one `double`. They are **immutable**. The compiler converts automatically between a primitive and its wrapper. **Autoboxing** goes from primitive to wrapper (on assignment or when passed to a method expecting the wrapper). **Unboxing** goes from wrapper to primitive (on assignment or when passed to a method expecting the primitive). Arithmetic on wrapper objects unboxes them first.

```java
Integer a = 5;          // autoboxing
int b = a + 3;          // unboxing, then int arithmetic: 8
double r = Double.parseDouble("3.5");   // 3.5
int n = Integer.parseInt("42");         // 42
```

## Key relationships

| Idea | Rule | Example |
|---|---|---|
| Autoboxing | `int` to `Integer`, `double` to `Double` only | `Integer i = 4;` |
| Unboxing | `Integer` to `int`, `Double` to `double` | `int j = i;` |
| No cross-boxing | `int` cannot box to `Double` | `Double d = 7;` does not compile |
| `parseInt` | `static int parseInt(String s)` | `Integer.parseInt("007")` is 7 |
| `parseDouble` | `static double parseDouble(String s)` | `Double.parseDouble("4")` is 4.0 |
| Bad text | `NumberFormatException` | `"12a"`, `"4.0"` for parseInt, `" 5"` |
| Division | unboxes first, so two `Integer`s use integer division | `Integer` 10 / 3 is 3 |
| Immutable | `n++` makes `n` refer to a new object | other references keep the old value |
| `null` | unboxing `null` throws `NullPointerException` | `Integer z = null; int w = z;` |

## Assumptions

- The String passed to a parse method holds exactly one valid number, with no spaces.
- Wrapper variables used in arithmetic are not `null`.
- `equals` (not `==`) is used to compare the values of two wrapper objects.

## Mistakes to avoid

1. Writing `Double d = 7;`. Use `7.0`, or declare the variable as `double`.
2. Calling `parseInt` on a String such as `"3.5"`; use `parseDouble`.
3. Expecting decimals from `Integer / Integer`.
4. Comparing wrapper objects with `==`.
5. Joining Strings with `+` and expecting addition of numbers.
6. Forgetting that `Integer` and `Double` need no `import`.

## A mini-example to rehearse

```java
Integer a = 5;           // autoboxing: a refers to an Integer holding 5
int b = a + 3;           // unboxing a, int addition: b is 8
Double d = 2.5;          // autoboxing
double e = d * b;        // unbox d; b widened to 8.0; e is 20.0
Integer c = b;           // autoboxing: c holds 8
```

Output of printing `a`, `b`, `d`, `e`, `c` with spaces: `5 8 2.5 20.0 8`. Printing a wrapper shows its value.

For text data: `"3.5,4.25,2".split(",")` gives three Strings; `Double.parseDouble` on each gives 3.5, 4.25 and 2.0, whose mean is 3.25. `Integer.parseInt("3.5")` would throw `NumberFormatException`.

## How this topic is usually tested

- **Predict the type and value** of a mixed expression (`Integer` with `double`, `Integer / Integer`).
- **Find the line that does not compile** (`Double d = 7;`).
- **Convert text to numbers** inside a loop and total or average the results.
- **Explain a run-time failure**: `NumberFormatException` from bad text, `NullPointerException` from unboxing `null`.

When a question shows `Integer` or `Double` variables in arithmetic, mentally replace each with its primitive first, then apply the normal rules for `int` and `double` arithmetic.

## Quick self-check

1. `Integer a = 4; int b = a * 2;` What is `b`? **8**, after unboxing `a`.
2. Does `Double d = 5;` compile? **No**, an `int` cannot box to `Double`.
3. What is `Integer.parseInt("42") + Integer.parseInt("8")`? **50**.
4. What is `Double.parseDouble("2")`? **2.0**.
5. `Integer z = null; int w = z;` happens at run time. What is thrown? **`NullPointerException`**.
