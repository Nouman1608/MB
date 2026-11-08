---
resourceId: "mb-ap-csa-4.8-revision-notes"
title: "ArrayList Methods: Revision Notes (Computer Science A 4.8)"
description: "A short recap of ArrayList: the constructor, the six Quick Reference methods, what each returns, how elements shift, exceptions, and a self-check."
course: "computer-science-a"
unit: 4
topics: ["4.8"]
resourceType: "revision-notes"
prerequisites:
  - "Arrays: creating, indexing and length (Topic 4.3)"
  - "Wrapper classes Integer and Double (Topic 4.7)"
  - "Calling instance methods on objects and reading their return values (Topic 1.14)"
learningObjectives:
  - "Recall each ArrayList method and its return value"
  - "Recall index ranges and shifting"
  - "Avoid the common traps"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.8-study-guide", "mb-ap-csa-4.8-practice", "mb-ap-csa-4.8-checklist"]
next: "mb-ap-csa-4.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Create: ArrayList<String> list = new ArrayList<String>(); and import java.util.ArrayList."
  - "Return values: add(obj) true; set old element; remove removed element; get the element."
  - "Indices start at 0 and end at size() - 1."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation and traced examples: [Topic 4.8 study guide](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/).

## Recap

An `ArrayList<E>` is a resizable list of object references, from `java.util`. It is created empty with `new ArrayList<E>()`. Indices run from 0 to `size() - 1`. Use the generic form: `ArrayList<String>`, `ArrayList<Integer>`, never `ArrayList<int>`.

```java
import java.util.ArrayList;
ArrayList<String> names = new ArrayList<String>();
names.add("Ana");         // [Ana]
names.add(0, "Zed");      // [Zed, Ana]
String x = names.get(1);  // "Ana"
String y = names.set(0, "Kim");   // y is "Zed"; list [Kim, Ana]
String z = names.remove(1);       // z is "Ana"; list [Kim]
int n = names.size();             // 1
```

## Key relationships

| Method | Effect on size | Shifts elements? | Returns |
|---|---|---|---|
| `size()` | none | no | count |
| `add(E obj)` | +1 | no | `true` |
| `add(int index, E obj)` | +1 | yes, right from `index` | nothing |
| `get(int index)` | none | no | element |
| `set(int index, E obj)` | none | no | old element |
| `remove(int index)` | -1 | yes, left after `index` | removed element |

Valid index: `get`, `set`, `remove` need 0 to `size() - 1`; `add(index, obj)` allows 0 to `size()`. Anything else throws `IndexOutOfBoundsException`.

## Assumptions

- The list is created before it is used (otherwise a `NullPointerException`).
- Every index passed is in range.
- A list variable assigned to another is an alias, not a copy.

## Mistakes to avoid

1. Using `length`, `length()` or `[ ]` on a list.
2. Treating `set` like `add`.
3. Forgetting that `remove(index)` changes the indices of later elements.
4. Evaluating a later statement against an old version of the list.
5. Using `size()` as a valid index for `get`.
6. Declaring `ArrayList<int>`.

## A mini-example to rehearse

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);               // [4]
nums.add(8);               // [4, 8]
nums.add(0, 1);            // [1, 4, 8]  (4 and 8 shifted right)
nums.set(1, nums.get(2) + 5);   // get(2) is 8, so [1, 13, 8]
nums.remove(0);            // [13, 8]  (13 and 8 shifted left); returns 1
```

Final list `[13, 8]`, size 2. Three habits make traces reliable: rewrite the whole list after every statement; recompute indices from the current list, not an earlier one; and note the **return value** of `set` and `remove` if the code stores it.

## How this topic is usually tested

- **Trace** a sequence of `add`, `add(index, obj)`, `set` and `remove` calls and print the list.
- **Return values**: what `set` and `remove` hand back (the old or removed element).
- **Error spotting**: `ArrayList<int>`, `length` instead of `size()`, an index equal to `size()`, a missing import.
- **Aliasing**: two variables, one list.
- **Short code writing**: swap two elements, move an element, insert at a position.

A quick way to decide between methods: if the size must change, think `add` or `remove`; if the size must stay the same, think `set`.

## Quick self-check

1. New list; `add("a")`, `add("b")`, `add(0, "c")`. List? **`[c, a, b]`**
2. `set(1, "z")` on `[c, a, b]` returns what? **`"a"`**, and the list becomes `[c, z, b]`.
3. `remove(0)` on `[c, z, b]` returns what and what is the size afterwards? **`"c"`, size 2.**
4. `get(3)` on a list of size 3 throws what? **`IndexOutOfBoundsException`**.
5. `ArrayList<String> p = q;` then `p.add("x")`. What happens to `q`? **It also contains `"x"`**: same list.
