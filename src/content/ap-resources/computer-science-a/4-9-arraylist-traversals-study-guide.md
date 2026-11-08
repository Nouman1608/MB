---
resourceId: "mb-ap-csa-4.9-study-guide"
title: "ArrayList Traversals: Study Guide (Computer Science A 4.9)"
description: "How to traverse a Java ArrayList with for, enhanced for and while loops, why removing elements during a traversal skips elements or throws an exception, and three safe fixes."
course: "computer-science-a"
unit: 4
topics: ["4.9"]
resourceType: "study-guide"
prerequisites:
  - "ArrayList methods size, get, set, add and remove (Topic 4.8)"
  - "for, enhanced for and while loops (Topics 2.7 and 2.8) and array traversal (Topic 4.4)"
  - "Comparing Strings with equals (Topic 1.15)"
learningObjectives:
  - "Traverse an ArrayList with an indexed for loop, an enhanced for loop and a while loop, and choose between them"
  - "Explain why removing elements inside a forward traversal skips elements, and apply the backward-loop or index-adjusting fix"
  - "Predict when a traversal throws IndexOutOfBoundsException or ConcurrentModificationException"
  - "State why assigning to an enhanced for variable does not change the list, and use set in an indexed loop instead"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.9-revision-notes", "mb-ap-csa-4.9-practice", "mb-ap-csa-4.9-checklist"]
next: "mb-ap-csa-4.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Traversing an ArrayList means visiting its elements in order with a loop: indexed for (0 to size() - 1), enhanced for, or while."
  - "The indexed loop must stop before size(); using <= size() throws IndexOutOfBoundsException."
  - "Removing during a forward index loop skips the element that slides into the vacated index; fix it by looping backwards or by not advancing the index after a removal."
  - "Adding or removing inside an enhanced for loop can throw ConcurrentModificationException; assigning to the loop variable never changes the list."
faqs:
  - question: "When should I use an enhanced for loop instead of an indexed loop?"
    answer: "Use an enhanced for loop to read every element in order when you do not need the index and do not add, remove or replace elements. Use an indexed loop when you need the index, need to change elements with set, or need to remove elements."
  - question: "Why does removing inside a loop skip an element?"
    answer: "After remove(i) every later element moves one place left, so the next element is now at index i. The loop's i++ then moves past it without testing it."
  - question: "What is a ConcurrentModificationException?"
    answer: "It is thrown when the size of an ArrayList is changed while an enhanced for loop is traversing it. The course advice is not to add or remove elements in an enhanced for loop."
  - question: "Can I change an element through the enhanced for variable?"
    answer: "No. The variable holds a copy of the reference or value. Assigning to it does not change the list. Use set(i, newValue) in an indexed loop."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## What a traversal is

To **traverse** an `ArrayList` is to visit its elements in order, one after another, using iteration (or recursion, which Topic 4.17 covers). Nearly every list algorithm starts with a traversal: add up the values, count the matches, find the largest, delete the unwanted ones. Because an `ArrayList` is numbered from 0 to `size() - 1`, the traversal has an obvious shape: begin at index 0, stop when the index reaches `size()`.

The ideas of this topic come down to two questions. First, which loop form fits the job? Second, what happens when the list changes size while the loop is running?

## The three loop forms

**Indexed `for` loop.** The standard form, and the only one that lets you use the position of an element.

```java
for (int i = 0; i < list.size(); i++)
{
    // list.get(i) reads the element; list.set(i, value) replaces it
}
```

The condition is `i < list.size()`, not `<=`. Using `<=` makes the last pass ask for index `size()`, which does not exist. In the run of a three-element list, the loop printed `2 4 6` and then threw `java.lang.IndexOutOfBoundsException`.

**Enhanced `for` loop.** Reads each element in turn without an index.

```java
for (String word : words)
{
    // word is each element in order
}
```

It is shorter and cannot go out of range, but it has two limits: you have no index, and the loop variable is a **copy of the element** (a copy of the reference for objects). Assigning to the variable does not change the list. In the run, `for (Integer x : d) { x = x * 2; }` left `d` as `[1, 2, 3]`.

**`while` loop.** Useful when the index does not move on every pass, which is exactly what happens when you remove elements. You manage the index yourself:

```java
int i = 0;
while (i < list.size())
{
    // ... sometimes i++, sometimes not
}
```

## Reading and replacing during a traversal

- **Read** with `get(i)` in an indexed loop, or the loop variable in an enhanced loop.
- **Replace** with `set(i, newValue)` in an indexed loop. Replacing never changes the size, so the traversal is safe. After `for (int i = 0; i < d.size(); i++) { d.set(i, d.get(i) * 2); }` the list `[1, 2, 3]` became `[2, 4, 6]` in the run.

Replacing is safe because `set` does not shift anything. The danger comes only from `add` and `remove`.

## Changing the size during a traversal

When `remove(i)` runs, every later element shifts left. The element that was at `i + 1` is now at `i`. A normal `for` loop then performs `i++` and moves on, so that shifted element is never tested. Figure 1 shows it.

<figure>
<svg viewBox="0 0 400 300" role="img" aria-labelledby="skip49-t skip49-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="skip49-t">Why removing during a forward traversal skips an element</title>
<desc id="skip49-d">Three rows of boxes for the list 3, -1, -2, 5, -4. Row one: when i is 1 the element at index 1 is -1, shown with a thick border, and it is about to be removed. Row two: after remove(1) the list is 3, -2, 5, -4 and -2 has moved into index 1. Row three: the loop then adds 1 to i, so i is 2 and the element at index 2 is 5, shown with a thick border; the element -2 at index 1 was never tested.</desc>
<rect width="400" height="300" fill="#ffffff"/>
<text x="20" y="27" font-size="13" fill="#1d2b44" font-weight="bold">1. i = 1: element -1 is negative, so remove(1)</text>
<rect x="20" y="35" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="55.0" y="56" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="55.0" y="83" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="90" y="35" width="70" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="125.0" y="56" text-anchor="middle" font-size="15" fill="#1d2b44">-1</text>
<text x="125.0" y="83" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="160" y="35" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="195.0" y="56" text-anchor="middle" font-size="15" fill="#1d2b44">-2</text>
<text x="195.0" y="83" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="230" y="35" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="265.0" y="56" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="265.0" y="83" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<rect x="300" y="35" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="335.0" y="56" text-anchor="middle" font-size="15" fill="#1d2b44">-4</text>
<text x="335.0" y="83" text-anchor="middle" font-size="12" fill="#1d2b44">4</text>
<text x="20" y="112" font-size="13" fill="#1d2b44" font-weight="bold">2. After remove(1): -2 has slid into index 1</text>
<rect x="20" y="120" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="55.0" y="141" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="55.0" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="90" y="120" width="70" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="125.0" y="141" text-anchor="middle" font-size="15" fill="#1d2b44">-2</text>
<text x="125.0" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="160" y="120" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="195.0" y="141" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="195.0" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="230" y="120" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="265.0" y="141" text-anchor="middle" font-size="15" fill="#1d2b44">-4</text>
<text x="265.0" y="168" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<text x="20" y="197" font-size="13" fill="#1d2b44" font-weight="bold">3. Loop does i++ so i = 2: element 5 is tested</text>
<rect x="20" y="205" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="55.0" y="226" text-anchor="middle" font-size="15" fill="#1d2b44">3</text>
<text x="55.0" y="253" text-anchor="middle" font-size="12" fill="#1d2b44">0</text>
<rect x="90" y="205" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="125.0" y="226" text-anchor="middle" font-size="15" fill="#1d2b44">-2</text>
<text x="125.0" y="253" text-anchor="middle" font-size="12" fill="#1d2b44">1</text>
<rect x="160" y="205" width="70" height="32" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="195.0" y="226" text-anchor="middle" font-size="15" fill="#1d2b44">5</text>
<text x="195.0" y="253" text-anchor="middle" font-size="12" fill="#1d2b44">2</text>
<rect x="230" y="205" width="70" height="32" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="265.0" y="226" text-anchor="middle" font-size="15" fill="#1d2b44">-4</text>
<text x="265.0" y="253" text-anchor="middle" font-size="12" fill="#1d2b44">3</text>
<text x="20" y="288" font-size="12" fill="#1d2b44">-2 at index 1 is never tested: it was skipped.</text>
</svg>
<figcaption>Figure 1. After a removal the later elements move left, but a normal for loop still adds one to the index. The element that slid into the removed position is skipped.</figcaption>
</figure>

Three safe patterns:

1. **Traverse backwards.** Start at `size() - 1` and go down to 0. A removal only shifts elements that have already been visited (those at higher indices).
2. **Do not advance after a removal.** Use a `while` loop, and add one to `i` only when nothing was removed. (Or, in a `for` loop, write `i--` after the removal so the loop's `i++` cancels it.)
3. **Build a new list** of the elements to keep, and use that instead.

For enhanced `for` loops, the course's advice is blunt: **do not add or remove elements while traversing with one**. Changing the size of an `ArrayList` during an enhanced `for` traversal can throw a `ConcurrentModificationException`. Calling `t.remove(x)` inside `for (String x : t)` on the list `[a, b, c]`; the exception was thrown.

## Worked example 1: removing negatives, three ways

**Task.** `a` holds `[3, -1, -2, 5, -4]`. Remove every negative number. Compare the buggy forward loop with the two fixes.

**Buggy forward loop.**

```java
for (int i = 0; i < a.size(); i++)
{
    if (a.get(i) < 0)
    {
        a.remove(i);
    }
}
```

| `i` | `a` at the start of the pass | `a.get(i)` | Action | `a` after |
|---|---|---|---|---|
| 0 | `[3, -1, -2, 5, -4]` | 3 | keep | unchanged |
| 1 | `[3, -1, -2, 5, -4]` | -1 | remove | `[3, -2, 5, -4]` |
| 2 | `[3, -2, 5, -4]` | 5 | keep (the -2 at index 1 is skipped) | unchanged |
| 3 | `[3, -2, 5, -4]` | -4 | remove | `[3, -2, 5]` |
| 4 | `[3, -2, 5]` | loop ends (4 < 3 is false) | | `[3, -2, 5]` |

The result `[3, -2, 5]` still holds a negative number. Running it prints `[3, -2, 5]`.

**Fix 1: backwards.**

```java
for (int i = a.size() - 1; i >= 0; i--)
{
    if (a.get(i) < 0)
    {
        a.remove(i);
    }
}
```

Trace: `i` = 4 removes -4 giving `[3, -1, -2, 5]`; `i` = 3 keeps 5; `i` = 2 removes -2 giving `[3, -1, 5]`; `i` = 1 removes -1 giving `[3, 5]`; `i` = 0 keeps 3. Result `[3, 5]` (run and confirmed).

**Fix 2: do not advance after a removal.**

```java
int i = 0;
while (i < a.size())
{
    if (a.get(i) < 0)
    {
        a.remove(i);
    }
    else
    {
        i++;
    }
}
```

Trace: i = 0 keep 3 (i becomes 1); remove -1 (list `[3, -2, 5, -4]`, i stays 1); remove -2 (`[3, 5, -4]`); keep 5 (i = 2); remove -4 (`[3, 5]`); i = 2 and `2 < 2` is false. Result `[3, 5]`.

**A trap in the bug.** When the unwanted elements are never next to each other, the buggy loop happens to give the right answer. On `[1, -2, 3, -4, 5, -6]` it produced `[1, 3, 5]`. A bug that passes some tests is the most dangerous kind, so test with two matches in a row.

## Worked example 2: filtering and doubling

**Task.** `words` holds `["tree", "at", "sun", "a", "planet", "go"]`. Remove every word with fewer than 3 letters, then describe how to double a list of numbers in place.

```java
public static void removeShort(ArrayList<String> words, int minLen)
{
    for (int i = words.size() - 1; i >= 0; i--)
    {
        if (words.get(i).length() < minLen)
        {
            words.remove(i);
        }
    }
}
```

Trace with `minLen` 3, going from the back:

| `i` | `words.get(i)` | length | Action | list afterwards |
|---|---|---|---|---|
| 5 | go | 2 | remove | `[tree, at, sun, a, planet]` |
| 4 | planet | 6 | keep | same |
| 3 | a | 1 | remove | `[tree, at, sun, planet]` |
| 2 | sun | 3 | keep | same |
| 1 | at | 2 | remove | `[tree, sun, planet]` |
| 0 | tree | 4 | keep | same |

Result `[tree, sun, planet]` (run and confirmed). The indices stayed valid on every pass because removals only affected elements already visited.

**Doubling in place.** Use an indexed loop with `set`, because the enhanced loop variable is only a copy: `for (int i = 0; i < d.size(); i++) { d.set(i, d.get(i) * 2); }`.

**Accumulating while traversing** is safe in any loop form, since it does not change the list. For `[2, 4, 6]`, `for (int x : v) sum += x;` gives 12, and a backwards indexed loop that appends `v.get(i) + ","` to a String gives `6,4,2,`. Both came from the run.

## Common misconceptions

- **"`i <= list.size()` is fine."** The last index is `size() - 1`. The extra pass throws `IndexOutOfBoundsException`.
- **"Removing inside a forward loop is fine if I test it once."** It skips the element that slides into the gap, but only shows when removable elements are adjacent.
- **"The enhanced for variable is the element itself."** It is a copy; assigning to it does nothing to the list.
- **"`ConcurrentModificationException` means two threads."** For this course it simply means the list changed size during an enhanced for traversal.
- **"A backward loop needs a different condition."** It starts at `size() - 1`, tests `i >= 0` and uses `i--`.
- **"`while` loops cannot be used for lists."** They are the cleanest way to hold the index still after a removal.
- **"`get(i)` is as safe as the loop variable."** Inside the loop body `get(i)` is only safe while `i` is a valid index; check this after any removal.

## Where this leads

Traversals are the engine of the algorithms in Topic 4.10: sum, average, minimum, maximum, counting, duplicates, shifting and reversing. The skipped-element bug returns there in the insert and delete algorithms, and the same care with indices is needed again in 2D arrays (Topic 4.12). Practise with the [Topic 4.9 practice questions](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-revision-notes/) and use the [checklist](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-checklist/). Next: the [Topic 4.10 study guide on ArrayList algorithms](/advanced-course-resources/computer-science-a/4-10-implementing-arraylist-algorithms-study-guide/).
