---
resourceId: "mb-ap-csa-1.15-revision-notes"
title: "String Manipulation: Revision Notes (Computer Science A 1.15)"
description: "A one-page recap of String objects, immutability, concatenation, indices, the String methods length, substring, indexOf, equals and compareTo, and out-of-range errors."
course: "computer-science-a"
unit: 1
topics: ["1.15"]
resourceType: "revision-notes"
prerequisites: ["Read the study guide first, or use this page as a recap"]
learningObjectives: ["Recall how strings are created, joined and indexed", "Recall what each Quick Reference String method returns", "Spot out-of-range indices and the effect of immutability"]
skills: ["2", "3", "4"]
studyMinutes: 15
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Work every result by hand; use a Java compiler only to check your answers afterwards."
related: ["mb-ap-csa-1.15-study-guide", "mb-ap-csa-1.15-practice", "mb-ap-csa-1.15-checklist"]
next: "mb-ap-csa-1.15-practice"
framework: {"schoolYear": "2026-27", "examSeries": "May 2027"}
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints: ["Strings are immutable objects: methods return new values and do not change the string.", "Indices run from 0 to length() - 1; substring(from, to) excludes to.", "Use equals for content and compareTo for order; indexOf gives -1 when not found."]
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/computer-science-a/1-15-string-manipulation-study-guide/).

## Recap

- A **`String` object** represents a sequence of characters. It is created with a **string literal** or by calling the **`String` constructor**. The class is in `java.lang`, so it is available by default.
- A `String` is **immutable**: once created, its attributes cannot be changed. Methods called on it do not change its content.
- `+` and `+=` **concatenate** and produce a **new** `String`. A primitive concatenated with a `String` is implicitly converted to a `String`. A `String` concatenated with any object implicitly calls that object's `toString` method.
- A `String` has indices from **0 to one less than its length**. Using an index outside the range throws a **`StringIndexOutOfBoundsException`**.
- `substring(index, index + 1)` is a one-character string.

## Key relationships

| Method | Result for `"microscope"` (length 10) |
|---|---|
| `length()` | `10` |
| `substring(2, 6)` | `"cros"` (indices 2 to 5) |
| `substring(6)` | `"cope"` |
| `substring(0, 1)` | `"m"` |
| `substring(10)` | `""` (legal) |
| `indexOf("sco")` | `5` |
| `indexOf("z")` | `-1` |
| `equals("microscope")` | `true` |
| `compareTo("microscope")` | `0` |

| Expression | Value |
|---|---|
| `"a" + 1 + 2` | `"a12"` |
| `1 + 2 + "a"` | `"3a"` |
| `"a" + (1 + 2)` | `"a3"` |
| `"x" + 2.5 + true` | `"x2.5true"` |
| `"apple".compareTo("banana")` | negative |
| `"banana".compareTo("apple")` | positive |

## Five steps for a string question

1. Write the string with its indices under every character (spaces count).
2. For `substring(from, to)` mark `from` and the character just before `to`.
3. Use `indexOf` to find positions instead of counting.
4. Remember immutability: an unstored result is lost; a reassignment makes a new string.
5. Check `0 <= from <= to <= length()`; otherwise the answer is a `StringIndexOutOfBoundsException`.

To "change" one letter, build a new string from the parts around it: `s.substring(0, 3) + "x" + s.substring(4)`.

## Assumptions and conventions

- `substring(from, to)` includes the character at `from` and excludes the one at `to`.
- `compareTo` is guaranteed only in its **sign**: below 0, zero or above 0.
- Compare string contents with `equals`, not `==`.
- A `String` variable that holds `null` causes a `NullPointerException` when a method is called on it.
- A string identical to the single character at `index` is `substring(index, index + 1)`.

## Mistakes to avoid

1. **Calling `word.substring(1);` and expecting `word` to change.** Store the result.
2. **Off-by-one errors with `substring(from, to)`**: forgetting that `to` is excluded.
3. **Using index `length()`** for a character (the last index is `length() - 1`).
4. **Misreading `"a" + 1 + 2`.** Work left to right.
5. **Treating `-1` from `indexOf` as an index.**
6. **Comparing strings with `==`.**
7. **Expecting a particular value from `compareTo`** instead of its sign.

## Quick self-check

1. What is `"banana".substring(1, 4)`? *(`"ana"`)*
2. What is `"banana".indexOf("na")`? *(`2`)*
3. What does `3 + 4 + "x"` evaluate to? *(`"7x"`)*
4. What happens with `"abc".substring(1, 5)`? *(`StringIndexOutOfBoundsException`)*
5. After `String s = "go"; s += "al";` what does `s` refer to? *(A new string, `"goal"`.)*

Next: [practice questions](/advanced-course-resources/computer-science-a/1-15-string-manipulation-practice/).
