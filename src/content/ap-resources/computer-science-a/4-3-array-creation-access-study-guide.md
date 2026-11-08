---
resourceId: "mb-ap-csa-4.3-study-guide"
title: "Array Creation and Access: Study Guide (Computer Science A 4.3)"
description: "Learn how to create and use one-dimensional Java arrays: new and default values, initializer lists, the length attribute, indices from 0 to length minus 1, and ArrayIndexOutOfBoundsException."
course: "computer-science-a"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
prerequisites:
  - "Variables and data types, including String (Unit 1)"
  - "Planning algorithms for data sets (Topic 4.2)"
prerequisiteResources: ["mb-ap-csa-4.2-study-guide"]
learningObjectives:
  - "Declare and create a one-dimensional array with new, with the correct type and length"
  - "Create and initialise an array with an initializer list"
  - "State the default value of each element of a new int, double, boolean or reference array"
  - "Read and assign array elements using an index, including computed indices"
  - "Use the length attribute and give the valid index range, and explain what causes ArrayIndexOutOfBoundsException"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.3-revision-notes", "mb-ap-csa-4.3-practice", "mb-ap-csa-4.3-checklist"]
next: "mb-ap-csa-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "An array stores multiple values of the same type: primitive values or object references."
  - "The length of an array is fixed when it is created and is read with the length attribute, with no parentheses."
  - "new initialises every element to a default: 0 for int, 0.0 for double, false for boolean and null for a reference type; an initializer list sets the values directly."
  - "Square brackets with an index read and assign elements; valid indices run from 0 to length - 1."
  - "An index outside that range throws ArrayIndexOutOfBoundsException when the program runs."
faqs:
  - {"question": "Why do array indices start at 0?", "answer": "The index counts how far an element is from the start of the array, so the first element is 0 steps from the start. This is why the last valid index is length - 1, not length."}
  - {"question": "Is it length, length() or size()?", "answer": "For an array it is the attribute length, written without parentheses: scores.length. The method length() belongs to String, and size() belongs to ArrayList (Topic 4.8)."}
  - {"question": "Can I change the length of an array after creating it?", "answer": "No. The length is established at creation and cannot change. To hold more values you must create a new, longer array (or use an ArrayList, which grows)."}
  - {"question": "What does an array of Strings contain after new String[3]?", "answer": "Three elements, each null, because null is the default value for a reference type. Calling a method such as length() on a null element throws a NullPointerException."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why arrays?

Topic 4.2 planned algorithms for data sets: seven rainfall readings, five quiz marks. With what you know so far, storing those would need seven or five separate variables, and a loop could not step through them. An **array** solves that. It stores **multiple values of the same type** under one name, and each value has a numbered position. The values can be primitive values (`int`, `double`, `boolean`) or object references (`String`, or objects of your own classes).

An array is the Java structure that holds a data set so that a loop can visit the values one at a time.

## Creating an array

There are two ways to create a one-dimensional (1D) array.

**With `new`.** You give the element type and the length:

```java
int[] counts = new int[4];
```

Here `int[]` is the type "array of int", `counts` is the variable, and `new int[4]` creates the array object with four elements. When an array is created with `new`, **all of its elements are initialised to the default value for the element type**:

| Element type | Default value |
|---|---|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| a reference type such as `String` | `null` |

**With an initializer list.** If you already know the values, list them in braces. The length is the number of values you list:

```java
int[] scores = {72, 65, 90, 58, 81};
```

The **length of an array is established at creation and cannot be changed.** You read it with the **`length` attribute**: `scores.length` is 5. It is an *attribute*, not a method, so it has **no parentheses**. (Writing `scores.length()` does not compile: `cannot find symbol`, because `length()` is a `String` method.)

Here is what a `new` array of each type holds:

```java
int[] counts = new int[4];
double[] prices = new double[3];
boolean[] flags = new boolean[3];
String[] names = new String[2];
System.out.println(counts.length + " " + counts[0] + " " + prices[1] + " " + flags[2] + " " + names[1]);
```

It printed:

```
4 0 0.0 false null
```

meaning `counts.length` is 4, `counts[0]` is `0`, `prices[1]` is `0.0`, `flags[2]` is `false` and `names[1]` is `null`.

## Accessing and changing elements

Square brackets with an **index** access or modify an element. An index counts from the start of the array, so the **first element has index 0**. The **valid indices are 0 through `length - 1`, inclusive.** An array of length 5 has indices 0, 1, 2, 3, 4.

<figure>
<svg viewBox="0 0 640 210" role="img" aria-labelledby="arr-title arr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="arr-title">The array scores after two assignments, with indices 0 to 4</title>
<desc id="arr-desc">A row of five boxes holding 72, 70, 90, 58 and 162, with the indices 0, 1, 2, 3 and 4 written beneath them. The variable scores points to the array. A note says length is 5, so the valid indices are 0 to 4, and scores at index 5 would throw an ArrayIndexOutOfBoundsException. Index 1 was changed from 65 to 70 and index 4 from 81 to 162.</desc>
<rect x="0" y="0" width="640" height="210" fill="#ffffff"/>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="100" y="50" width="86" height="50"/><rect x="186" y="50" width="86" height="50"/><rect x="272" y="50" width="86" height="50"/><rect x="358" y="50" width="86" height="50"/><rect x="444" y="50" width="86" height="50"/></g>
<g fill="#1d2b44" font-size="20" text-anchor="middle"><text x="143" y="83">72</text><text x="229" y="83">70</text><text x="315" y="83">90</text><text x="401" y="83">58</text><text x="487" y="83">162</text></g>
<g fill="#1d2b44" font-size="15" text-anchor="middle"><text x="143" y="122">0</text><text x="229" y="122">1</text><text x="315" y="122">2</text><text x="401" y="122">3</text><text x="487" y="122">4</text></g>
<text x="60" y="82" text-anchor="end" font-size="15" fill="#1d2b44">scores</text>
<path d="M64 76 L98 76" stroke="#1d2b44" stroke-width="2"/><polygon points="98,76 88,71 88,81" fill="#1d2b44"/>
<text x="315" y="145" text-anchor="middle" font-size="13" fill="#1d2b44">index (position): the first element is at 0</text>
<text x="315" y="170" text-anchor="middle" font-size="13" fill="#1d2b44">length is 5, so valid indices are 0 to 4</text>
<text x="315" y="192" text-anchor="middle" font-size="13" fill="#1d2b44">Changed: index 1 (65 to 70) and index 4 (81 to 162).</text>
</svg>
<figcaption>Figure 1. The array scores after <code>scores[1] = 70;</code> and <code>scores[4] = scores[0] + scores[2];</code>. The numbers under the boxes are indices, not values. Text labels, not colour, mark the changes.</figcaption>
</figure>

```java
int[] scores = {72, 65, 90, 58, 81};
System.out.println(scores.length + " " + scores[0] + " " + scores[scores.length - 1]);
scores[1] = 70;
scores[4] = scores[0] + scores[2];
System.out.println(scores[1] + " " + scores[4] + " " + scores[2 + 1]);
```

Reading is as simple as using `scores[i]` in an expression; assigning is `scores[i] = value;`. The index can be any `int` expression, such as `scores.length - 1` (the last element) or `2 + 1`. The program printed:

```
5 72 81
70 162 58
```

First line: length 5, first element 72, last element 81 (`scores[scores.length - 1]`) before any change. Second line, after the assignments `scores[1] = 70;` and `scores[4] = scores[0] + scores[2];` (which is 72 + 90 = 162): `scores[1]` is 70, `scores[4]` is 162 and `scores[2 + 1]` is `scores[3]`, which is 58.

## Out-of-range indexes

Using an index outside 0 to `length - 1` is a **run-time error**: the program compiles, then throws an **`ArrayIndexOutOfBoundsException`**.

```java
System.out.println(scores[5]);     // scores has length 5
System.out.println(scores[-1]);
```

Either line stops the program with an exception. Running the first one produced:

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
```

and the second gave the same exception with `Index -1 out of bounds for length 5`. (The exact wording of the message can differ between Java versions; the exception type is what matters.) The most common cause is writing `scores[scores.length]`, one past the end.

## Worked example 1: building and tracing an array

**Task.** State the final contents of `w` and what is printed.

```java
int[] w = new int[5];
w[0] = 3;
w[1] = w[0] * 2;
w[w[0]] = 8;
System.out.println(w[0] + " " + w[1] + " " + w[2] + " " + w[3] + " " + w[4]);
```

**Step 1.** `new int[5]` makes five elements, all `0`: `[0, 0, 0, 0, 0]`.

**Step 2.** `w[0] = 3;` sets index 0: `[3, 0, 0, 0, 0]`.

**Step 3.** `w[1] = w[0] * 2;` reads `w[0]` (3), doubles it and stores 6 at index 1: `[3, 6, 0, 0, 0]`.

**Step 4.** `w[w[0]] = 8;` first works out the index inside the brackets: `w[0]` is 3, so this is `w[3] = 8;`: `[3, 6, 0, 8, 0]`.

| After | w[0] | w[1] | w[2] | w[3] | w[4] |
|---|---|---|---|---|---|
| `new int[5]` | 0 | 0 | 0 | 0 | 0 |
| `w[0] = 3;` | 3 | 0 | 0 | 0 | 0 |
| `w[1] = w[0] * 2;` | 3 | 6 | 0 | 0 | 0 |
| `w[w[0]] = 8;` | 3 | 6 | 0 | 8 | 0 |

The program printed `3 6 0 8 0`.

**Check.** The index in a bracket can itself be an array element; evaluate the inside first, then use the result.

## Worked example 2: swapping, and an array of references

**Part A: swap two elements.**

```java
int[] v = {4, 9, 1};
int temp = v[0];
v[0] = v[2];
v[2] = temp;
v[1] = v[1] + v[0];
System.out.println(v[0] + " " + v[1] + " " + v[2]);
```

Start with `v = {4, 9, 1}`.

| Statement | `temp` | v[0] | v[1] | v[2] |
|---|---|---|---|---|
| start | | 4 | 9 | 1 |
| `int temp = v[0];` | 4 | 4 | 9 | 1 |
| `v[0] = v[2];` | 4 | 1 | 9 | 1 |
| `v[2] = temp;` | 4 | 1 | 9 | 4 |
| `v[1] = v[1] + v[0];` | 4 | 1 | 10 | 4 |

It printed `1 10 4`. Without `temp`, the second assignment would have lost the original `v[0]`.

**Part B: an array of references.**

```java
String[] words = new String[3];
words[0] = "to";
words[2] = "go";
System.out.println(words[0] + " " + words[1] + " " + words[2].length());
```

`new String[3]` makes three `null` elements. After `words[0] = "to"; words[2] = "go";` the array is `["to", null, "go"]`. The print statement concatenates `words[0]` ("to"), `words[1]` (`null`, shown as the text `null`) and `words[2].length()` (the length of "go", which is 2). Output: `to null 2`. Note that `words[1].length()` would throw a `NullPointerException`, because there is no `String` there to call a method on.

**Check.** An array of objects holds *references*, and a new one holds `null` references until you assign real objects.

## Common misconceptions

- **"The last valid index is `length`."** It is `length - 1`. `scores[scores.length]` always throws an exception.
- **"`scores.length()` with brackets."** `length` is an attribute of arrays; `length()` is for `String`.
- **"An array can grow."** Its length is fixed at creation.
- **"`new int[5]` has random contents."** Every element is 0. For `boolean` it is `false`, and for a reference type `null`.
- **"An array of Strings starts with empty strings."** It starts with `null`, which is not the same as `""`.
- **"`int[] b = a;` copies the array."** It copies the reference. After `int[] a = {1, 2, 3}; int[] b = a; b[0] = 99;`, `a[0]` is also 99. The compiled program printed `99 3` for `a[0] + " " + b.length`, because both variables refer to one array.
- **"The index must be a literal number."** Any `int` expression works, as long as the result is in range.

## Where this leads

With arrays you can hold the data sets of Topic 4.2. [Array Traversals](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/) visits every element with loops, and [Implementing Array Algorithms](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/) writes the standard count, total and maximum plans. Practise with the [practice questions](/advanced-course-resources/computer-science-a/4-3-array-creation-access-practice/), read the [revision notes](/advanced-course-resources/computer-science-a/4-3-array-creation-access-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/4-3-array-creation-access-checklist/). To remind yourself what the plans look like, see [Introduction to Using Data Sets](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/).
