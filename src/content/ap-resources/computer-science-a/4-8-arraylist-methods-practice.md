---
resourceId: "mb-ap-csa-4.8-practice"
title: "ArrayList Methods: Practice Questions (Computer Science A 4.8)"
description: "Ten original questions on ArrayList methods: tracing add, set and remove, return values, index exceptions, generics, aliasing, plus two code-writing tasks."
course: "computer-science-a"
unit: 4
topics: ["4.8"]
resourceType: "practice-questions"
prerequisites:
  - "Arrays: creating, indexing and length (Topic 4.3)"
  - "Wrapper classes Integer and Double (Topic 4.7)"
  - "Calling instance methods on objects and reading their return values (Topic 1.14)"
learningObjectives:
  - "Trace sequences of ArrayList calls"
  - "Predict return values and exceptions"
  - "Write methods that modify an ArrayList"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.8-study-guide", "mb-ap-csa-4.8-revision-notes", "mb-ap-csa-4.8-checklist"]
next: "mb-ap-csa-4.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Ten questions: eight multiple choice, two constructed response."
  - "Every code fragment was compiled and run; the printed forms like [Ana, Cy, Ben] are real output."
  - "Rubrics are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. Every code fragment was compiled and run, and the printed lists quoted come from those runs. Assume `import java.util.ArrayList;` is present.

## Question 1 (multiple choice · foundation)

What is printed?

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Ana");
names.add("Ben");
names.add(1, "Cy");
System.out.println(names);
```

- (A) `[Ana, Ben, Cy]`
- (B) `[Cy, Ana, Ben]`
- (C) `[Ana, Cy, Ben]`
- (D) `[Ana, Cy]`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `add(1, "Cy")` inserts at index 1, and Ben moves right to index 2.

- (A) is what `add("Cy")` (append) would give.
- (B) is what `add(0, "Cy")` would give.
- (D) loses Ben; `add` with an index never overwrites.
</details>

## Question 2 (multiple choice · core)

After the code runs, what are the values of `old` and the list?

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Dee");
names.add("Cy");
names.add("Ben");
String old = names.set(1, "Kim");
```

- (A) `old` is `"Kim"`; list `[Dee, Kim, Ben]`
- (B) `old` is `"Cy"`; list `[Dee, Kim, Ben]`
- (C) `old` is `"Cy"`; list `[Dee, Kim, Cy, Ben]`
- (D) `old` is `"Ben"`; list `[Dee, Cy, Kim]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `set` replaces the element at index 1 and returns the element that was there, `"Cy"`.

- (A) mixes up the new and old elements.
- (C) describes an insertion; `set` never changes the size.
- (D) replaces the wrong index.
</details>

## Question 3 (multiple choice · core)

An `ArrayList<Integer>` has exactly 3 elements. Which call throws an `IndexOutOfBoundsException`?

- (A) `list.add(3, 7)`
- (B) `list.add(5, 7)`
- (C) `list.get(2)`
- (D) `list.remove(0)`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For `add(index, obj)` the valid indices are 0 to `size()`, which is 0 to 3 here. Index 5 is beyond that, and the run threw `java.lang.IndexOutOfBoundsException`.

- (A) Index 3 equals `size()`, which is allowed and appends.
- (C) Index 2 is the last element.
- (D) Index 0 is the first element.
</details>

## Question 4 (multiple choice · core)

Which statement does **not** compile?

- (A) `ArrayList<String> a = new ArrayList<String>();`
- (B) `ArrayList<Integer> b = new ArrayList<Integer>();`
- (C) `ArrayList<int> c = new ArrayList<int>();`
- (D) `ArrayList<Double> d = new ArrayList<Double>();`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A type parameter must be a class; `int` is a primitive. The compiler said `unexpected type, required: reference`.

- (A), (B) and (D) all use classes (`String`, `Integer`, `Double`).
</details>

## Question 5 (multiple choice · core)

What is printed?

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);
nums.add(8);
nums.add(0, 1);
nums.set(1, nums.get(2) + 5);
nums.remove(0);
System.out.println(nums + " " + nums.size());
```

- (A) `[13, 8] 2`
- (B) `[1, 13, 8] 3`
- (C) `[9, 8] 2`
- (D) `[4, 13] 2`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The lists after each step are `[4]`, `[4, 8]`, `[1, 4, 8]`, `[1, 13, 8]` (`get(2)` is 8, plus 5 is 13) and finally `[13, 8]`, size 2.

- (B) forgets the final `remove(0)`.
- (C) computes `get(1) + 5` for the `set` instead of `get(2) + 5`.
- (D) ignores the insertion at index 0, so the indices are off by one.
</details>

## Question 6 (multiple choice · core)

`ArrayList<Integer> list` holds `[10, 20, 30, 40]`. What do `x` and the list hold afterwards?

```java
Integer x = list.remove(1);
```

- (A) `x` is 10; list `[20, 30, 40]`
- (B) `x` is 20; list `[10, 30, 40]`
- (C) `x` is 20; list `[10, 20, 30, 40]` because `x` keeps a copy
- (D) `x` is 1; list `[10, 20, 30, 40]`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `remove(1)` removes the element at **index** 1 (the value 20) and returns it. The list becomes `[10, 30, 40]` (run and confirmed).

- (A) removes index 0.
- (C) The removal really happens; the returned value is just a reference to what was removed.
- (D) Treats the argument as the value to return and removes nothing.
</details>

## Question 7 (multiple choice · core)

What is printed?

```java
ArrayList<String> a = new ArrayList<String>();
ArrayList<String> c = a;
c.add("x");
System.out.println(a.size());
```

- (A) 0
- (B) 1
- (C) 2
- (D) The code does not compile

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `c = a` copies the reference, so both variables name the same list. Adding through `c` is visible through `a`.

- (A) assumes `c` is a separate copy.
- (C) would require two additions.
- (D) The code is valid.
</details>

## Question 8 (multiple choice · stretch)

A list `t` holds `[p, q, r, s]`. After this method call, what does `t` hold?

```java
public static void moveToFront(ArrayList<String> list, int index)
{
    String item = list.remove(index);
    list.add(0, item);
}
```

called as `moveToFront(t, 2)`.

- (A) `[r, p, q, s]`
- (B) `[p, q, s, r]`
- (C) `[p, q, s]`
- (D) `[p, r, q, s]`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** `remove(2)` removes `r` and returns it, leaving `[p, q, s]`. Then `add(0, item)` inserts `r` at the front: `[r, p, q, s]` (run and confirmed).

- (B) is the result of `add(item)`, which appends at the end instead of inserting at index 0.
- (C) forgets that the removed element is added back.
- (D) is the result of inserting at index 1 instead of index 0.
</details>

## Question 9 (constructed response · core)

Write `swapFirstLast(ArrayList<String> list)`, which swaps the first and last elements. A list of fewer than two elements is left unchanged.

<details>
<summary>Answer and explanation</summary>

```java
public static void swapFirstLast(ArrayList<String> list)
{
    if (list.size() < 2)
    {
        return;
    }
    String first = list.get(0);
    list.set(0, list.get(list.size() - 1));
    list.set(list.size() - 1, first);
}
```

On `[p, q, r, s]` this gives `[s, q, r, p]`; a single-element list `[z]` is unchanged (both run and confirmed).

**Suggested Marlbridge rubric (4 points)**

| Point | Award for |
|---|---|
| 1 | Guards against lists with fewer than two elements |
| 2 | Saves the first element before overwriting it |
| 3 | Uses `get` with `size() - 1` for the last element |
| 4 | Uses `set` (not `add` or `remove`) so that the size does not change and both swaps happen |

Using `remove` and `add` with correct indices is acceptable if the final list is correct.
</details>

## Question 10 (constructed response · stretch)

(a) Write `moveToFront(ArrayList<String> list, int index)`, which moves the element at `index` to the front and keeps the order of the others. Assume `index` is valid.

(b) Give the contents of `[s, q, r, p]` after `moveToFront(list, 2)`, and explain why the call `list.add(0, item)` must come after the `remove`.

<details>
<summary>Answer and explanation</summary>

(a)

```java
public static void moveToFront(ArrayList<String> list, int index)
{
    String item = list.remove(index);
    list.add(0, item);
}
```

(b) `remove(2)` returns `"r"` and leaves `[s, q, p]`; `add(0, "r")` gives `[r, s, q, p]` (run and confirmed). If the insertion came first, the element at `index` would already have shifted right, so the wrong element (or a duplicate) would be removed.

**Suggested Marlbridge rubric (5 points)**

| Point | Award for |
|---|---|
| 1 | Uses the value returned by `remove(index)` (or saves it with `get` first) |
| 2 | Removes the element at the given index |
| 3 | Inserts it at index 0 with `add(0, ...)` |
| 4 | Part (b): the list `[r, s, q, p]` |
| 5 | Part (b): explains that insertion first shifts the elements, so `index` no longer names the same element |
</details>

## How did you do?

Questions 1 to 8 are one mark each. If you mis-traced a shift, re-read the shifting section of the [Topic 4.8 study guide](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-study-guide/); then tick off the [checklist](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-checklist/).
