---
resourceId: "mb-ap-csa-4.4-practice"
title: "Array Traversals: Practice Questions (Computer Science A 4.4)"
description: "Nine original Marlbridge practice questions on array traversals: indexed loops, steps and direction, while loops, enhanced for loops with primitives and objects, and off-by-one errors, with rubrics."
course: "computer-science-a"
unit: 4
topics: ["4.4"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-4.4-study-guide"]
learningObjectives:
  - "Write an indexed for loop and a while loop that traverse all or part of an array"
  - "Traverse an array forwards, backwards and with a step greater than one"
  - "Explain that the enhanced for loop variable holds a copy of each element and that assigning to it does not change the array"
  - "Explain how calling a method on the enhanced for variable can change an object stored in the array without changing the stored reference"
  - "Rewrite an enhanced for loop as an indexed for loop and a while loop, and find off-by-one errors"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.4-study-guide", "mb-ap-csa-4.4-revision-notes", "mb-ap-csa-4.4-checklist"]
next: "mb-ap-csa-4.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All data is fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The array used is `int[] a = {3, 8, 1, 6};` unless stated, and the class `Counter` is in the [study guide](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/). Every output below was produced by running the code.

## Question 1 (multiple choice · foundation)

Which loop header visits **every** element of the array `nums` exactly once, from first to last?

- (A) `for (int i = 1; i <= nums.length; i++)`
- (B) `for (int i = 0; i <= nums.length; i++)`
- (C) `for (int i = 0; i < nums.length; i++)`
- (D) `for (int i = 0; i < nums.length - 1; i++)`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Indices run from 0 to `length - 1`, so start at 0 and continue while `i < nums.length`.

- (A) skips index 0 and tries index `length`, which throws an exception.
- (B) visits index `length`, which does not exist.
- (D) stops one element early and misses the last.
</details>

## Question 2 (multiple choice · core)

```java
int altSum = 0;
for (int i = 0; i < a.length; i += 2)
{
    altSum += a[i];
}
System.out.println(altSum);
```

What is printed?

- (A) `18`
- (B) `9`
- (C) `4`
- (D) `14`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `i` takes the values 0 and 2, so the sum is `a[0] + a[2] = 3 + 1 = 4`.

- (A) is the sum of all four elements.
- (B) is 8 + 1, which uses indices 1 and 2.
- (D) is 8 + 6, the elements at indices 1 and 3.
</details>

## Question 3 (multiple choice · core)

```java
for (int x : a)
{
    x = x * 2;
}
System.out.println(a[0] + " " + a[1] + " " + a[2] + " " + a[3]);
```

What is printed?

- (A) `6 16 2 12`
- (B) `3 8 1 6`
- (C) `0 0 0 0`
- (D) The code does not compile.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The loop variable `x` is a copy of each element, so doubling it does not change the array.

- (A) is what an indexed loop assigning `a[i] = a[i] * 2` would produce.
- (C) has no basis in the code.
- (D) is false: assigning to the loop variable is legal.
</details>

## Question 4 (multiple choice · core)

`Counter` has an instance variable `ticks`, a method `bump()` that adds 1 to it, and `getTicks()`.

```java
Counter[] cs = {new Counter(0), new Counter(5), new Counter(9)};
for (Counter c : cs)
{
    c.bump();
}
for (Counter c : cs)
{
    c = new Counter(100);
}
System.out.println(cs[0].getTicks() + " " + cs[1].getTicks() + " " + cs[2].getTicks());
```

What is printed?

- (A) `0 5 9`
- (B) `100 100 100`
- (C) `1 6 10`
- (D) `101 101 101`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The first loop calls `bump()` on each object through the copied reference, which changes the objects. The second loop reassigns only the loop variable, so the array still holds the same objects. Output: `1 6 10`.

- (A) ignores the first loop's effect.
- (B) and (D) assume the second loop replaces the stored objects.
</details>

## Question 5 (multiple choice · core)

```java
int j = 0;
int big = 0;
while (j < a.length)
{
    if (a[j] > 5)
    {
        big++;
    }
    j++;
}
System.out.println(big);
```

What is printed?

- (A) `1`
- (B) `2`
- (C) `3`
- (D) `4`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The elements greater than 5 are 8 and 6.

- (A) counts only one of them.
- (C) includes the value 3 or 1 wrongly.
- (D) counts every element.
</details>

## Question 6 (multiple choice · stretch)

Which statement about enhanced `for` loops is **true**?

- (A) The loop variable is an index into the array.
- (B) Any enhanced `for` loop can be rewritten using an indexed `for` loop.
- (C) An enhanced `for` loop can be used to change the values stored in an `int` array.
- (D) An enhanced `for` loop can traverse an array backward.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** An enhanced for loop can be rewritten with an indexed for loop (or a while loop).

- (A) is false: the variable holds a copy of an element.
- (C) is false: assigning to the variable does not alter the array.
- (D) is false: it always goes first to last.
</details>

## Question 7 (constructed response · core)

For `int[] d = {5, 3, 8, 1}`:

(a) Write an indexed `for` loop that stores in `evenSum` the sum of the elements at even indices.

(b) Write the same traversal with a `while` loop.

(c) State the value of `evenSum` and explain why an enhanced `for` loop is a poor fit.

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
int evenSum = 0;
for (int i = 0; i < d.length; i += 2)
{
    evenSum += d[i];
}
```

(An equivalent loop tests `i % 2 == 0` for every index.)

**(b)**

```java
int evenSum = 0;
int i = 0;
while (i < d.length)
{
    evenSum += d[i];
    i += 2;
}
```

**(c)** `evenSum` is 5 + 8 = 13 (confirmed by running the loop). An enhanced for loop gives each element but not its position, so it cannot easily select the even indices without keeping a separate counter.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `evenSum` initialised to 0 before the loop |
| 1 | Part (a): correct loop bounds and step (or index test) |
| 1 | Part (a): adds `d[i]` |
| 1 | Part (b): index initialised, tested with `< d.length` and updated inside the loop |
| 1 | Part (b): same additions as (a) |
| 1 | Part (c): 13, with the reason about the missing index |
</details>

## Question 8 (constructed response · core)

Using `Counter` and `Counter[] cs = {new Counter(0), new Counter(5), new Counter(9)};`:

(a) State the three tick counts after `for (Counter c : cs) { c.bump(); }`.

(b) State the three tick counts after the additional loop `for (Counter c : cs) { c = new Counter(100); }`.

(c) Explain both results using the words reference and copy.

<details>
<summary>Answer and explanation</summary>

**(a)** `1 6 10`.

**(b)** `1 6 10`: unchanged.

**(c)** In each iteration the loop variable `c` holds a **copy of the reference** to an element. Calling `bump()` through it follows the reference to the same object, so the object's state changes. Assigning `new Counter(100)` to `c` only changes the copy, so the references stored in the array are not altered and the array still holds the original objects.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `1 6 10` |
| 1 | Part (b): `1 6 10` |
| 1 | Part (c): the loop variable is a copy of the reference |
| 1 | Part (c): a mutator call changes the shared object |
| 1 | Part (c): assignment to the variable does not change the array's references |
</details>

## Question 9 (constructed response · stretch)

For `int[] b = {2, 4, 6}` each loop has a flaw relative to its stated goal. Describe the effect of each and give a corrected header.

(i) Goal: print every element. `for (int i = 0; i <= b.length; i++) { System.out.print(b[i] + " "); }`

(ii) Goal: add every element. `for (int i = 1; i < b.length; i++) { s += b[i]; }`

(iii) Goal: count the elements. `for (int i = 0; i < b.length - 1; i++) { count++; }`

<details>
<summary>Answer and explanation</summary>

**(i)** It prints `2 4 6 ` and then throws `ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3`, because `i` reaches `b.length`. Fix: `i < b.length`.

**(ii)** It skips `b[0]`, so `s` is 10 instead of 12. Fix: start at `int i = 0`.

**(iii)** It runs for `i` = 0 and 1 only, so `count` is 2 instead of 3. Fix: `i < b.length`.

The first two effects were confirmed by running the code; (iii) follows from the same arithmetic (for the four-element `a` the equivalent loop ran 3 times).

**Suggested Marlbridge rubric (6 marks).** One mark for the correct effect and one for a correct fix, for each of (i), (ii) and (iii).
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Implementing Array Algorithms study guide](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/).
- Missed Questions 1, 2 or 5: reread "The indexed for loop" and "The while loop" in the [study guide](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/).
- Missed Questions 3, 4, 6 or 8: reread "The enhanced for loop" and Figure 1.
- Missed Questions 7 or 9: reread Worked examples 1 and 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/4-4-array-traversals-checklist/).
