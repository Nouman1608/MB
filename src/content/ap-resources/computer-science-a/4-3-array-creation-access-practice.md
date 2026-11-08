---
resourceId: "mb-ap-csa-4.3-practice"
title: "Array Creation and Access: Practice Questions (Computer Science A 4.3)"
description: "Nine original Marlbridge practice questions on creating and accessing 1D arrays: default values, initializer lists, length, valid indices, tracing assignments and compile errors, with rubrics."
course: "computer-science-a"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-4.3-study-guide"]
learningObjectives:
  - "Declare and create a one-dimensional array with new, with the correct type and length"
  - "Create and initialise an array with an initializer list"
  - "State the default value of each element of a new int, double, boolean or reference array"
  - "Read and assign array elements using an index, including computed indices"
  - "Use the length attribute and give the valid index range, and explain what causes ArrayIndexOutOfBoundsException"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.3-study-guide", "mb-ap-csa-4.3-revision-notes", "mb-ap-csa-4.3-checklist"]
next: "mb-ap-csa-4.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data is fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. Every code fragment was compiled and run, and the stated outputs are the real ones.

## Question 1 (multiple choice · foundation)

Which statement creates an array that can hold 5 `int` values, all initially 0?

- (A) `int[] a = new int(5);`
- (B) `int[] a = new int[5];`
- (C) `int a = new int[5];`
- (D) `int[5] a;`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `new int[5]` creates five `int` elements with the default value 0, and `int[]` is the correct variable type.

- (A) uses parentheses, which would call a constructor, and `int` has none.
- (C) assigns an array to a plain `int` variable.
- (D) is not valid Java syntax for declaring an array.
</details>

## Question 2 (multiple choice · foundation)

An array `data` has length 8. Which set contains **exactly** the valid indices?

- (A) 1 to 8
- (B) 0 to 8
- (C) 0 to 7
- (D) 1 to 7

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Valid indices run from 0 through `length - 1`, which is 7.

- (A) starts at 1 and includes 8, which is out of range.
- (B) includes 8, which throws `ArrayIndexOutOfBoundsException`.
- (D) omits both the first element (index 0) and the last (index 7).
</details>

## Question 3 (multiple choice · core)

```java
int[] counts = new int[4];
double[] prices = new double[3];
boolean[] flags = new boolean[3];
String[] names = new String[2];
System.out.println(counts.length + " " + counts[0] + " " + prices[1] + " " + flags[2] + " " + names[1]);
```

What is printed?

- (A) `4 0 0 false ""`
- (B) `4 0 0.0 false null`
- (C) `3 0 0.0 true null`
- (D) `4 null 0.0 false null`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `counts.length` is 4; the defaults are 0, 0.0, `false` and `null`. The compiled program printed `4 0 0.0 false null`.

- (A) prints `0` for a `double` and an empty string for a reference.
- (C) uses the wrong length and makes the `boolean` true.
- (D) gives an `int` element the value `null`.
</details>

## Question 4 (multiple choice · core)

```java
int[] w = new int[5];
w[0] = 3;
w[1] = w[0] * 2;
w[w[0]] = 8;
System.out.println(w[0] + " " + w[1] + " " + w[2] + " " + w[3] + " " + w[4]);
```

What is printed?

- (A) `3 6 8 0 0`
- (B) `3 6 0 8 0`
- (C) `8 6 0 0 0`
- (D) The code throws `ArrayIndexOutOfBoundsException`.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `w[w[0]]` is `w[3]`, since `w[0]` is 3, so 8 goes at index 3. The result is `[3, 6, 0, 8, 0]`.

- (A) puts the 8 at index 2.
- (C) puts the 8 at index 0.
- (D) is wrong: index 3 is within 0 to 4.
</details>

## Question 5 (multiple choice · core)

```java
int[] q = {5, 4, 3, 2, 1};
q[q[4]] = q[q[3]] + 10;
System.out.println(q[0] + " " + q[1] + " " + q[2] + " " + q[3] + " " + q[4]);
```

What is printed?

- (A) `5 4 3 2 1`
- (B) `5 12 3 2 1`
- (C) `5 13 3 2 1`
- (D) `15 4 3 2 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** On the left, `q[4]` is 1, so the target is `q[1]`. On the right, `q[3]` is 2, `q[2]` is 3, and 3 + 10 = 13. So `q[1]` becomes 13: `[5, 13, 3, 2, 1]`. This was confirmed by running the code.

- (A) assumes the assignment changes nothing.
- (B) uses `q[3]` (2) plus 10 and forgets the inner index lookup.
- (D) puts the result in `q[0]`.
</details>

## Question 6 (multiple choice · core)

An array `int[] s = new int[4];` is declared. Which statement throws `ArrayIndexOutOfBoundsException` when executed?

- (A) `s[0] = 1;`
- (B) `s[s.length - 1] = 1;`
- (C) `s[s.length] = 1;`
- (D) `s[2] = s[1] + 1;`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `s.length` is 4, and the valid indices are 0 to 3, so `s[4]` is one past the end.

- (A) is the first element.
- (B) is the last element, index 3.
- (D) uses indices 2 and 1, both valid.
</details>

## Question 7 (constructed response · core)

```java
int[] v = {4, 9, 1};
int temp = v[0];
v[0] = v[2];
v[2] = temp;
v[1] = v[1] + v[0];
System.out.println(v[0] + " " + v[1] + " " + v[2]);
```

(a) Complete a trace table showing `temp` and the three elements after each statement.

(b) State the output.

(c) Explain why the variable `temp` is needed.

<details>
<summary>Answer and explanation</summary>

**(a)**

| Statement | `temp` | v[0] | v[1] | v[2] |
|---|---|---|---|---|
| start | | 4 | 9 | 1 |
| `int temp = v[0];` | 4 | 4 | 9 | 1 |
| `v[0] = v[2];` | 4 | 1 | 9 | 1 |
| `v[2] = temp;` | 4 | 1 | 9 | 4 |
| `v[1] = v[1] + v[0];` | 4 | 1 | 10 | 4 |

**(b)** `1 10 4`.

**(c)** After `v[0] = v[2];` the original `v[0]` (4) would be lost. `temp` holds it until it is stored in `v[2]`.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `temp` is 4 from the second row |
| 1 | Part (a): rows 3 and 4 correct for `v[0]` and `v[2]` |
| 1 | Part (a): last row `v[1]` is 10 |
| 1 | Part (b): output `1 10 4` |
| 1 | Part (c): temp saves the value that would otherwise be overwritten |
</details>

## Question 8 (constructed response · core)

(a) Write one statement that creates a `double` array `prices` holding 10.0, 12.5, 11.0, 9.5, 13.0 and 12.0, using an initializer list.

(b) Write a statement that sets element 3 to 2.5 more than element 0.

(c) Write a statement that prints the last element without using the number 5, and give the output of (b) followed by (c).

<details>
<summary>Answer and explanation</summary>

**(a)** `double[] prices = {10.0, 12.5, 11.0, 9.5, 13.0, 12.0};`

**(b)** `prices[3] = prices[0] + 2.5;` (element 3 becomes 12.5).

**(c)** `System.out.println(prices[prices.length - 1]);` prints `12.0`.

Running these, `prices[3]` is 12.5 and the last element is 12.0 (output of a combined print: `12.5 12.0`).

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `double[]` type with an initializer list |
| 1 | Part (a): all six values in order |
| 1 | Part (b): assigns to `prices[3]` |
| 1 | Part (b): uses `prices[0] + 2.5` |
| 1 | Part (c): last element via `prices.length - 1`, output 12.0 |
</details>

## Question 9 (constructed response · stretch)

Each statement below does not compile. State the compiler's complaint in your own words and give a fix.

```java
int[] s = {1, 2, 3};
System.out.println(s.length());
String[] n = new String[2];
n[0] = 5;
int k = s[1.0];
int[] z = new int[3.0];
```

<details>
<summary>Answer and explanation</summary>

- `s.length()`: an array has a `length` attribute, not a `length()` method (`cannot find symbol`). Fix: `s.length`.
- `n[0] = 5;`: an `int` cannot be stored in a `String` element (`int cannot be converted to String`). Fix: `n[0] = "5";`.
- `s[1.0]`: an index must be an `int` (`possible lossy conversion from double to int`). Fix: `s[1]`.
- `new int[3.0]`: the length must be an `int`. Fix: `new int[3]`.

All four messages were confirmed by compiling.

**Suggested Marlbridge rubric (8 marks).** One mark for the correct complaint and one for a valid fix, for each of the four statements.
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Array Traversals study guide](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/).
- Missed Questions 1, 2 or 6: reread "Creating an array" and "Out-of-range indexes" in the [study guide](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/).
- Missed Questions 3, 4 or 5: reread "Accessing and changing elements" and Worked example 1.
- Missed Questions 7, 8 or 9: reread Worked example 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/4-3-array-creation-access-checklist/).
