---
resourceId: "mb-ap-csa-4.3-revision-notes"
title: "Array Creation and Access: Revision Notes (Computer Science A 4.3)"
description: "One-page recap of 1D arrays in Java: creating with new or an initializer list, default values, length, indexing from 0, assigning elements and out-of-bounds errors."
course: "computer-science-a"
unit: 4
topics: ["4.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-4.3-study-guide"]
learningObjectives:
  - "Declare and create a one-dimensional array with new, with the correct type and length"
  - "Create and initialise an array with an initializer list"
  - "State the default value of each element of a new int, double, boolean or reference array"
  - "Read and assign array elements using an index, including computed indices"
  - "Use the length attribute and give the valid index range, and explain what causes ArrayIndexOutOfBoundsException"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.3-study-guide", "mb-ap-csa-4.3-practice", "mb-ap-csa-4.3-checklist"]
next: "mb-ap-csa-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "An array stores multiple values of the same type: primitive values or object references."
  - "The length of an array is fixed when it is created and is read with the length attribute, with no parentheses."
  - "new initialises every element to a default: 0 for int, 0.0 for double, false for boolean and null for a reference type; an initializer list sets the values directly."
  - "Square brackets with an index read and assign elements; valid indices run from 0 to length - 1."
  - "An index outside that range throws ArrayIndexOutOfBoundsException when the program runs."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These notes recap Topic 4.3. Full explanations and worked examples are in the [study guide](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/).

## Recap

- An **array** stores multiple values of the **same type**: primitives or object references.
- The **length** is fixed at creation and is read with the **`length` attribute** (no parentheses).
- `new` sets every element to a **default**: `0`, `0.0`, `false` or `null`.
- An **initializer list** such as `{72, 65, 90}` creates and fills an array in one statement.
- **Square brackets** read or assign an element using an **index**.
- Valid indices are **0 through `length - 1`**. Outside that range, the program throws **`ArrayIndexOutOfBoundsException`** at run time.

## Key relationships

| Task | Code |
|---|---|
| Create with defaults | `int[] counts = new int[4];` |
| Create with values | `int[] scores = {72, 65, 90, 58, 81};` |
| Number of elements | `scores.length` |
| First element | `scores[0]` |
| Last element | `scores[scores.length - 1]` |
| Assign | `scores[1] = 70;` |
| Computed index | `w[w[0]] = 8;` evaluates the inner `w[0]` first |

## Default values

| Element type | Default |
|---|---|
| `int` | 0 |
| `double` | 0.0 |
| `boolean` | false |
| `String` (any reference type) | `null` |

## Worked reminder

`int[] w = new int[5]; w[0] = 3; w[1] = w[0] * 2; w[w[0]] = 8;` leaves `[3, 6, 0, 8, 0]`, because `w[w[0]]` is `w[3]`. For `scores = {72, 65, 90, 58, 81}`, `scores.length` is 5 and `scores[5]` throws `ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5`. Swapping needs a temporary: `int temp = v[0]; v[0] = v[2]; v[2] = temp;`.

## Tracing arrays in the exam

Draw the array as a row of boxes with the indices underneath. Update the boxes as each assignment runs. When an index is itself an array element, evaluate the inner one first. Before you answer, check every index against 0 to `length - 1`: if one is outside, the answer is the exception, not a value.

## Compile and run-time errors

| Message or exception | Cause |
|---|---|
| `cannot find symbol ... method length()` | Writing `scores.length()` for an array |
| `incompatible types: int cannot be converted to String` | Storing an `int` in a `String[]` |
| `incompatible types: possible lossy conversion from double to int` | Using a `double` as an index or length |
| `ArrayIndexOutOfBoundsException` (run time) | An index below 0 or at least `length` |

## Mistakes to avoid

- Using `length` as the last index.
- Writing `length()` for an array.
- Expecting `null` Strings to behave like `""`.
- Assuming `b = a` copies an array.
- Forgetting a temporary variable when swapping.

## Quick self-check

1. What is the default value of a `boolean` array element? *Answer: `false`.*
2. For `int[] a = new int[8];`, what are the valid indices? *Answer: 0 to 7.*
3. After `int[] x = {5, 6, 7}; x[x[0] - 3] = 1;`, what is `x[2]`? *Answer: 1, because `x[0] - 3` is 2.*
4. What does `new String[2]` contain? *Answer: two `null` elements.*
