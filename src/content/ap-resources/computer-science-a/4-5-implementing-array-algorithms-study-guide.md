---
resourceId: "mb-ap-csa-4.5-study-guide"
title: "Implementing Array Algorithms: Study Guide (Computer Science A 4.5)"
description: "Learn the standard array algorithms in Java: minimum and maximum, sum and average, any and all, counting, consecutive pairs, duplicates, shifting and rotating, and reversing, with traces and common faults."
course: "computer-science-a"
unit: 4
topics: ["4.5"]
resourceType: "study-guide"
prerequisites:
  - "Array traversals with for, while and enhanced for loops (Topic 4.4)"
  - "Writing methods that take parameters and return values (Topic 3.5)"
prerequisiteResources: ["mb-ap-csa-4.4-study-guide"]
learningObjectives:
  - "Write traversal code that finds a minimum or maximum, a sum or an average, and a count of elements with a property"
  - "Write code that decides whether at least one element, or every element, has a property"
  - "Access all consecutive pairs of elements and detect the presence or absence of duplicates"
  - "Shift or rotate elements left or right, and reverse the order of the elements"
  - "Trace an array algorithm on a small array and find faults such as a wrong starting value or a returning-too-early loop"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.5-revision-notes", "mb-ap-csa-4.5-practice", "mb-ap-csa-4.5-checklist"]
next: "mb-ap-csa-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "The standard array algorithms are traversals with a small amount of extra state: a best value, a total, a count, or a flag."
  - "For a maximum or minimum, start with the first element, not with 0."
  - "At least one has a property: return true as soon as one is found, otherwise false after the loop; all have a property: return false as soon as one fails, otherwise true after the loop."
  - "Consecutive pairs use a[i] and a[i + 1] with the loop test i < a.length - 1; duplicates need a second loop starting at i + 1."
  - "Rotating needs a saved element and a loop in the right direction; reversing swaps elements from the two ends and stops at the middle."
faqs:
  - {"question": "Why start a maximum from a[0] rather than 0?", "answer": "If every element is negative, a starting value of 0 would never be replaced and the method would wrongly return 0, a value that is not in the array. Starting from a[0] always begins with a real element."}
  - {"question": "Why does the all-have-a-property loop return false inside the loop and true after it?", "answer": "One failing element is enough to make the claim false, so you can return false immediately. You can only say the claim is true after you have checked every element, so true comes after the loop."}
  - {"question": "How do I avoid going out of bounds when comparing neighbours?", "answer": "Compare a[i] with a[i + 1] and stop the loop at i < a.length - 1, so that i + 1 never reaches the length."}
  - {"question": "Do array algorithms change the array?", "answer": "Some do and some do not. Finding a maximum, sum or count only reads the array. Rotating, shifting and reversing change the stored elements, which is why they are usually void methods that work on the array they are given."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Standard plans, now in Java

Topic 4.2 taught you the shape of a plan for a data set: **set up, repeat for each value, report**. Topic 4.4 taught you how to traverse an array. This topic puts them together. The course names a set of **standard algorithms** that use array traversals, and you are expected to write them, trace them and spot faults in them. They are:

- determine a **minimum or maximum** value;
- compute a **sum or average**;
- determine whether **at least one** element has a particular property;
- determine whether **all** elements have a particular property;
- determine the **number** of elements having a particular property;
- access all **consecutive pairs** of elements;
- determine the presence or absence of **duplicate** elements;
- **shift or rotate** elements left or right;
- **reverse** the order of the elements.

Each one is a short traversal with one extra idea. The methods below are written as class methods (`static`) that take an array parameter. Remember from Topic 3.6 that an array parameter holds a **copy of the reference**: a method that only reads the array leaves it alone, and a method that assigns to `a[i]` changes the caller's array.

## Minimum and maximum

Keep a **best so far**, start it at the **first element**, and replace it when a better one appears.

```java
public static int maxOf(int[] a)
{
    int best = a[0];
    for (int i = 1; i < a.length; i++)
    {
        if (a[i] > best)
        {
            best = a[i];
        }
    }
    return best;
}

public static int minOf(int[] a)
{
    int best = a[0];
    for (int v : a)
    {
        if (v < best)
        {
            best = v;
        }
    }
    return best;
}
```

Starting from `a[0]` is essential. If you started `best` at 0 and every element were negative, nothing would ever beat it and the method would return 0, which is not in the array. In `maxOf` the loop starts at index 1 because index 0 is already the starting value; `minOf` uses an enhanced `for` loop, which is fine because only the values matter.

## Sum and average

Keep a **running total** that starts at 0.

```java
public static int sum(int[] a)
{
    int total = 0;
    for (int v : a)
    {
        total += v;
    }
    return total;
}

public static double average(int[] a)
{
    return (double) sum(a) / a.length;
}
```

The cast in `average` matters: `(double) sum(a) / a.length` divides as a `double`. Without the cast, `sum(a) / a.length` would use integer division and drop the fractional part.

## At least one, and all

These two are mirror images, and mixing them up is a classic fault.

```java
public static boolean anyNegative(int[] a)
{
    for (int v : a)
    {
        if (v < 0)
        {
            return true;
        }
    }
    return false;
}

public static boolean allPositive(int[] a)
{
    for (int v : a)
    {
        if (v <= 0)
        {
            return false;
        }
    }
    return true;
}
```

- **At least one** element has the property: as soon as you find one, you know the answer is `true`, so you `return true` inside the loop. Only after the loop has examined every element without success can you say `false`.
- **All** elements have the property: as soon as one element **fails**, the answer is `false`. Only after the loop has found no failure can you say `true`.

Note the test in `allPositive` checks for the **failure** (`v <= 0`), not the property.

## Counting

Keep a **count** that starts at 0 and add 1 for each element with the property. Never reset it inside the loop.

```java
public static int countAbove(int[] a, int limit)
{
    int count = 0;
    for (int v : a)
    {
        if (v > limit)
        {
            count++;
        }
    }
    return count;
}
```

## Consecutive pairs

To compare each element with the **next** one, use `a[i]` and `a[i + 1]`. The largest `i` that has a next element is `a.length - 2`, so the loop test is `i < a.length - 1`.

```java
public static int countRisingPairs(int[] a)
{
    int count = 0;
    for (int i = 0; i < a.length - 1; i++)
    {
        if (a[i] < a[i + 1])
        {
            count++;
        }
    }
    return count;
}
```

## Duplicates

To find out whether any two elements are equal you need to compare each element with every element **after** it. That takes a loop inside a loop. The inner loop starts at `i + 1` so that an element is never compared with itself.

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

## Shifting, rotating and reversing

These algorithms **change the array**.

To **rotate left** by one place, every element moves one place left and the first element wraps round to the end. You must **save the first element** before it is overwritten.

```java
public static void rotateLeft(int[] a)
{
    int first = a[0];
    for (int i = 0; i < a.length - 1; i++)
    {
        a[i] = a[i + 1];
    }
    a[a.length - 1] = first;
}

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

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="rot-title rot-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rot-title">Rotating the array 1 2 3 4 5 left by one place</title>
<desc id="rot-desc">Three rows of five boxes. Row 1, before: 1, 2, 3, 4, 5 with an arrow from the first box to a separate box labelled first, which holds 1. Row 2, during the loop: the values 2, 3, 4 and 5 have each been copied one place left, giving 2, 3, 4, 5, 5. Row 3, after the final assignment: the saved value 1 is written into the last box, giving 2, 3, 4, 5, 1. Rotating right is the same idea in the other direction: save the last element, move elements right starting from the end, then write the saved value into index 0.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<g font-size="13" fill="#1d2b44"><text x="20" y="32" font-weight="bold">Before</text><text x="20" y="112" font-weight="bold">After the loop</text><text x="20" y="192" font-weight="bold">After a[a.length - 1] = first</text></g>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="40" y="40" width="60" height="36"/><rect x="100" y="40" width="60" height="36"/><rect x="160" y="40" width="60" height="36"/><rect x="220" y="40" width="60" height="36"/><rect x="280" y="40" width="60" height="36"/>
<rect x="40" y="120" width="60" height="36"/><rect x="100" y="120" width="60" height="36"/><rect x="160" y="120" width="60" height="36"/><rect x="220" y="120" width="60" height="36"/><rect x="280" y="120" width="60" height="36"/>
<rect x="40" y="200" width="60" height="36"/><rect x="100" y="200" width="60" height="36"/><rect x="160" y="200" width="60" height="36"/><rect x="220" y="200" width="60" height="36"/><rect x="280" y="200" width="60" height="36"/></g>
<g fill="#1d2b44" font-size="18" text-anchor="middle"><text x="70" y="65">1</text><text x="130" y="65">2</text><text x="190" y="65">3</text><text x="250" y="65">4</text><text x="310" y="65">5</text>
<text x="70" y="145">2</text><text x="130" y="145">3</text><text x="190" y="145">4</text><text x="250" y="145">5</text><text x="310" y="145">5</text>
<text x="70" y="225">2</text><text x="130" y="225">3</text><text x="190" y="225">4</text><text x="250" y="225">5</text><text x="310" y="225">1</text></g>
<rect x="400" y="40" width="130" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="465" y="64" text-anchor="middle" font-size="15" fill="#1d2b44">first = 1 (saved)</text>
<path d="M70 38 C 70 12, 440 12, 440 38" stroke="#1d2b44" stroke-width="2" fill="none"/><polygon points="440,38 434,28 446,28" fill="#1d2b44"/>
<path d="M465 78 L465 218 L345 218" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" fill="none"/><polygon points="345,218 355,213 355,223" fill="#1d2b44"/>
<text x="470" y="150" font-size="12" fill="#1d2b44">1 is written back at the end</text>
</svg>
<figcaption>Figure 1. Rotate left by one: save the first element, move each element one place left (copying a[i + 1] into a[i]), then store the saved value in the last place. The solid arrow shows the save and the dashed arrow shows the write-back. The numbers inside the boxes are values.</figcaption>
</figure>

To **rotate right**, work from the **end** so you do not overwrite elements you still need: save the last element, copy each element one place right starting at the last index, then put the saved value at index 0. (Copying left to right would copy the same value over every box.)

To **reverse** the order, **swap** the elements at the two ends and move inwards, stopping at the middle. Stopping at the middle matters: if the loop went to the end, every pair would be swapped twice and the array would be restored to its original order.

```java
public static void reverse(int[] a)
{
    for (int i = 0; i < a.length / 2; i++)
    {
        int temp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = temp;
    }
}
```

## Worked example 1: max, average and count on one array

**Task.** For `t = {4, 9, 2, 7, 9}`, find the maximum, the minimum, the average and the count of elements greater than 5.

**Maximum.** `best` starts at `t[0]` = 4.

| `i` | `t[i]` | `t[i] > best`? | `best` |
|---|---|---|---|
| (start) | | | 4 |
| 1 | 9 | yes | 9 |
| 2 | 2 | no | 9 |
| 3 | 7 | no | 9 |
| 4 | 9 | no (9 > 9 is false) | 9 |

The maximum is **9**. The minimum, found the same way with `<`, is **2**.

**Sum and average.** 4 + 9 + 2 + 7 + 9 = 31, and `(double) 31 / 5` = **6.2**.

**Count above 5.** The elements above 5 are 9, 7 and 9, so the count is **3**.

The compiled program printed `9 2`, `31 6.2` and `3` for these three results. Starting from 0 would also have worked for this array, but for `{-4, -9, -2}` the correct maximum is -2, while a method starting at 0 returns `0`; the compiled program printed `-2 0` for the correct and the faulty method.

**Check.** The maximum 9 and minimum 2 can be read straight off the array; the sum can be rechecked by adding in a different order.

## Worked example 2: pairs, duplicates, rotation and reversal

**Rising pairs in `t = {4, 9, 2, 7, 9}`.** The pairs are (4, 9), (9, 2), (2, 7) and (7, 9). Rising means the first is less than the second: yes, no, yes, yes. The count is **3**. The loop ran for i = 0, 1, 2, 3, that is `i < 4`, which is `a.length - 1`.

**Duplicates in `t`.** i = 0 (value 4) compares with 9, 2, 7, 9: no match. i = 1 (value 9) compares with 2, 7, 9: the last is equal, so the method returns `true` at once. For `u = {2, 7, 1, 8}` every pair is different, the loops finish and the result is `false`. Printed: `true`, then `false`.

**Rotating `{1, 2, 3, 4, 5}` left.**

| Step | `first` | a[0] | a[1] | a[2] | a[3] | a[4] |
|---|---|---|---|---|---|---|
| start | | 1 | 2 | 3 | 4 | 5 |
| `first = a[0]` | 1 | 1 | 2 | 3 | 4 | 5 |
| i = 0: `a[0] = a[1]` | 1 | 2 | 2 | 3 | 4 | 5 |
| i = 1: `a[1] = a[2]` | 1 | 2 | 3 | 3 | 4 | 5 |
| i = 2: `a[2] = a[3]` | 1 | 2 | 3 | 4 | 4 | 5 |
| i = 3: `a[3] = a[4]` | 1 | 2 | 3 | 4 | 5 | 5 |
| `a[4] = first` | 1 | 2 | 3 | 4 | 5 | 1 |

The result is `2 3 4 5 1`. Applying `rotateRight` to that array gives `1 2 3 4 5`, and applying `rotateRight` again to the original gives `5 1 2 3 4` (all three confirmed by running the code).

**Reversing `{4, 8, 15, 16, 23}`.** The loop runs for `i < 5 / 2`, which is `i < 2`: i = 0 swaps `a[0]` and `a[4]`; i = 1 swaps `a[1]` and `a[3]`. The middle element, 15, stays where it is. The result is `23 16 15 8 4`. For an even length such as `{1, 2, 3, 4}`, the loop runs for `i < 2` and every element moves: `4 3 2 1`.

**Check.** After each of these algorithms, check the extreme positions (first and last), which is where off-by-one mistakes hide.

## Common faults the exam likes to test

- **Starting a maximum at 0.** Fails for all-negative data.
- **Returning too early.** For "all", `return true` on the first element that passes is wrong. `allEvenFlawed({2, 4, 5})` returns `true` because 2 is even; the correct `allEven` returns `false` because 5 is not. The compiled program printed `true false` for the flawed and correct methods on `{2, 4, 5}`.
- **Integer division in an average.** `total / a.length` with two `int`s drops the fraction: for `{1, 2, 2}` the flawed version printed `1.0` while the correct one printed `1.6666666666666667`.
- **Resetting a count inside the loop.**
- **Comparing neighbours with `i < a.length`.** It makes `a[i + 1]` go out of bounds on the last pass.
- **Rotating right from the front.** It copies one value into every position.
- **Reversing to the end instead of the middle.** The array comes back unchanged.

## Common misconceptions

- **"A maximum of an empty array is 0."** Starting from `a[0]` fails on an empty array; these methods assume at least one element.
- **"For 'at least one' I need a counter."** A `boolean` result and an early `return true` are enough.
- **"The two loops for duplicates can both start at 0."** Then each element matches itself.
- **"Rotating an array creates a new array."** These methods change the array they are given.
- **"The enhanced for loop can reverse or rotate."** Those need indices.

## Where this leads

These algorithms are the heart of the multiple-choice tracing questions and of the array free-response questions. Next in Unit 4 come text files, wrapper classes and the `ArrayList`, where the same plans reappear with different syntax. For a mixed check on Unit 3 first, use the [Unit 3 review](/advanced-course-resources/computer-science-a/unit-3-review/). Practise this topic with the [practice questions](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-practice/), read the [revision notes](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-checklist/). For the traversal tools, revisit [Array Traversals](/advanced-course-resources/computer-science-a/4-4-array-traversals-study-guide/).
