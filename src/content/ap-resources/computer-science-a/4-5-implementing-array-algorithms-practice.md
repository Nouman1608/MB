---
resourceId: "mb-ap-csa-4.5-practice"
title: "Implementing Array Algorithms: Practice Questions (Computer Science A 4.5)"
description: "Nine original Marlbridge practice questions on implementing array algorithms: max and min, any and all, counting, pairs, duplicates, rotating and reversing, tracing and fixing code, with rubrics."
course: "computer-science-a"
unit: 4
topics: ["4.5"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-4.5-study-guide"]
learningObjectives:
  - "Write traversal code that finds a minimum or maximum, a sum or an average, and a count of elements with a property"
  - "Write code that decides whether at least one element, or every element, has a property"
  - "Access all consecutive pairs of elements and detect the presence or absence of duplicates"
  - "Shift or rotate elements left or right, and reverse the order of the elements"
  - "Trace an array algorithm on a small array and find faults such as a wrong starting value or a returning-too-early loop"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.5-study-guide", "mb-ap-csa-4.5-revision-notes", "mb-ap-csa-4.5-checklist"]
next: "mb-ap-csa-4.5-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All data is fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The methods named `maxOf`, `minOf`, `average`, `countAbove`, `countRisingPairs`, `hasDuplicates`, `rotateLeft`, `rotateRight` and `reverse` are the class methods printed in the [study guide](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/). Every output was produced by compiling and running the code.

## Question 1 (multiple choice · core)

`maxOf` sets `best = a[0]` and then, for each later element, replaces `best` if the element is larger. What does `maxOf` return for `{-4, -9, -2}`?

- (A) `0`
- (B) `-2`
- (C) `-4`
- (D) `-9`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The largest of -4, -9 and -2 is -2. The method starts from `a[0]` = -4, replaces it with -2 and keeps it.

- (A) is what a faulty version that starts `best` at 0 returns (0 is not in the array).
- (C) stops after the first element.
- (D) is the smallest element.
</details>

## Question 2 (multiple choice · core)

```java
public static boolean allEven(int[] a)
{
    for (int v : a)
    {
        if (v % 2 == 0)
        {
            return true;
        }
    }
    return false;
}
```

The method is meant to return `true` only if every element is even. What does it return for `{2, 4, 5}`, and for `{1, 3, 5}`?

- (A) `false` and `false`
- (B) `true` and `false`
- (C) `true` and `true`
- (D) `false` and `true`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The method returns `true` as soon as it finds an even element, so it tests "at least one even", not "all even". For `{2, 4, 5}` it returns `true` (the correct answer for "all even" is `false`). For `{1, 3, 5}` there is no even element, so it returns `false`. This was confirmed by running it: `true` for `{2, 4, 5}`.

- (A) assumes it is a correct "all even" test on the first array.
- (C) and (D) do not follow the code's behaviour.

**Fix:** return `false` when `v % 2 != 0` and `true` after the loop.
</details>

## Question 3 (multiple choice · core)

```java
int[] ca = {7, 2, 9, 4, 9};
System.out.println(countAbove(ca, 5));
```

where `countAbove` counts elements greater than its second argument. What is printed?

- (A) `2`
- (B) `3`
- (C) `4`
- (D) `5`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The elements greater than 5 are 7, 9 and 9. The compiled program printed `3`.

- (A) misses one of the 9s.
- (C) includes a value of 4 or 2 wrongly.
- (D) counts every element.
</details>

## Question 4 (multiple choice · core)

`countRisingPairs` counts the positions `i` where `a[i] < a[i + 1]`, using the loop `for (int i = 0; i < a.length - 1; i++)`. What does `countRisingPairs(cp)` return for `cp = {1, 5, 3, 8, 9}`?

- (A) `2`
- (B) `3`
- (C) `4`
- (D) It throws `ArrayIndexOutOfBoundsException`.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The pairs are (1, 5) rising, (5, 3) not, (3, 8) rising and (8, 9) rising: three. The loop stops at `i = 3`, so `a[i + 1]` is `a[4]`, which exists. The compiled program printed `3`.

- (A) misses one rising pair.
- (C) counts the (5, 3) pair or every pair.
- (D) would happen only if the test were `i < a.length`.
</details>

## Question 5 (multiple choice · core)

```java
int[] r = {1, 2, 3, 4, 5};
rotateLeft(r);
rotateRight(r);
rotateRight(r);
```

`rotateLeft` moves each element one place left and puts the first at the end; `rotateRight` moves each element one place right and puts the last at the front. What does `r` hold at the end?

- (A) `1 2 3 4 5`
- (B) `2 3 4 5 1`
- (C) `5 1 2 3 4`
- (D) `4 5 1 2 3`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** After `rotateLeft`: `2 3 4 5 1`. After the first `rotateRight`: `1 2 3 4 5`. After the second `rotateRight`: `5 1 2 3 4`. The compiled program printed these three arrays in order.

- (A) is the array after only the first `rotateRight`.
- (B) is the array after only `rotateLeft`.
- (D) would need two right rotations from the original array without the left rotation.
</details>

## Question 6 (multiple choice · core)

```java
int[] v = {4, 8, 15, 16, 23};
reverse(v);
```

`reverse` swaps `a[i]` with `a[a.length - 1 - i]` for `i < a.length / 2`. What does `v` hold afterwards?

- (A) `4 8 15 16 23`
- (B) `23 16 15 8 4`
- (C) `23 16 8 4 15`
- (D) `16 23 15 4 8`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The loop runs for i = 0 and 1 (5 / 2 is 2): `a[0]` swaps with `a[4]`, `a[1]` with `a[3]`; the middle element stays. The compiled program printed `23 16 15 8 4`.

- (A) is the array if the loop ran to the end and swapped every pair twice.
- (C) and (D) are not results of the code.
</details>

## Question 7 (constructed response · core)

(a) Write a method `public static boolean hasDuplicates(int[] a)` that returns `true` if any value occurs more than once.

(b) Explain why the inner loop starts at `i + 1`.

(c) State the result for `{3, 1, 4, 1, 5}` and for `{2, 7, 1, 8}`.

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
public static boolean hasDuplicates(int[] a)
{
    for (int i = 0; i < a.length; i++)
    {
        for (int j = i + 1; j < a.length; j++)
        {
            if (a[i] == a[j])
            {
                return true;
            }
        }
    }
    return false;
}
```

**(b)** If `j` started at `i`, every element would be compared with itself and the method would always return `true`. Starting at `i + 1` also avoids comparing each pair twice.

**(c)** `true` for `{3, 1, 4, 1, 5}` (the two 1s) and `false` for `{2, 7, 1, 8}`. Both were confirmed by running the code.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Outer loop over every index |
| 1 | Inner loop starts at `i + 1` and runs to the end |
| 1 | Compares `a[i] == a[j]` |
| 1 | Returns `true` inside the loops on a match |
| 1 | Returns `false` after both loops |
| 1 | Parts (b) and (c) correct |
</details>

## Question 8 (constructed response · core)

(a) Write a method `public static void rotateRight(int[] a)` that moves every element one place to the right and puts the last element at index 0.

(b) Trace it on `{1, 2, 3, 4, 5}`.

(c) Explain why the loop must start at the end of the array.

<details>
<summary>Answer and explanation</summary>

**(a)**

```java
public static void rotateRight(int[] a)
{
    int last = a[a.length - 1];
    for (int i = a.length - 1; i > 0; i--)
    {
        a[i] = a[i - 1];
    }
    a[0] = last;
}
```

**(b)** `last` = 5. i = 4: `a[4] = a[3]` gives `1 2 3 4 4`. i = 3: `a[3] = a[2]` gives `1 2 3 3 4`. i = 2: `a[2] = a[1]` gives `1 2 2 3 4`. i = 1: `a[1] = a[0]` gives `1 1 2 3 4`. Then `a[0] = last` gives `5 1 2 3 4`.

**(c)** Working from the front, `a[1] = a[0]` would overwrite `a[1]` before its value had been copied to `a[2]`, so every position would end up holding the original first value.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Saves the last element before the loop |
| 1 | Loop starts at the last index and moves down |
| 1 | Loop body copies `a[i - 1]` into `a[i]` and stops before index 0 |
| 1 | Writes the saved value into `a[0]` |
| 1 | Part (b): trace ends with `5 1 2 3 4` |
| 1 | Part (c): copying forwards would overwrite values not yet moved |
</details>

## Question 9 (constructed response · stretch)

Two methods contain faults.

```java
public static int maxFlawed(int[] a)
{
    int best = 0;
    for (int v : a)
    {
        if (v > best)
        {
            best = v;
        }
    }
    return best;
}

public static double averageFlawed(int[] a)
{
    int total = 0;
    for (int v : a)
    {
        total += v;
    }
    return total / a.length;
}
```

(a) State the result of each method on `{-4, -9, -2}` and `{1, 2, 2}` respectively, and what each should return.

(b) Explain each fault.

(c) Give a corrected line for each method.

<details>
<summary>Answer and explanation</summary>

**(a)** `maxFlawed({-4, -9, -2})` returns `0`, not the correct `-2`. `averageFlawed({1, 2, 2})` returns `1.0`, not the correct 5 ÷ 3 = `1.6666666666666667`. Both were confirmed by running the code.

**(b)** The maximum is started at 0, which is not in the array and beats every negative value. The average divides two `int` values, so integer division discards the fraction before the result is converted to `double`.

**(c)** `int best = a[0];` and `return (double) total / a.length;`.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): 0 for the maximum, with the correct value -2 |
| 1 | Part (a): 1.0 for the average, with the correct value 5/3 |
| 1 | Part (b): maximum started at a value that may not be in the array |
| 1 | Part (b): integer division |
| 1 | Part (c): `best = a[0]` |
| 1 | Part (c): cast to `double` before dividing |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: Unit 4 continues with text files, wrapper classes and `ArrayList`; first try the [Unit 3 review](/advanced-course-resources/computer-science-a/unit-3-review/) if you have not.
- Missed Questions 1, 2 or 9: reread "Minimum and maximum", "At least one, and all" and "Common faults".
- Missed Questions 3 or 4: reread "Counting" and "Consecutive pairs".
- Missed Questions 5, 6 or 8: reread "Shifting, rotating and reversing" and Worked example 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-checklist/).
