---
resourceId: "mb-ap-csa-4.4-study-guide"
title: "Array Traversals: Study Guide (Computer Science A 4.4)"
description: "Learn to traverse a 1D array with indexed for loops, while loops and the enhanced for loop, and why assigning to the enhanced for variable never changes the array but calling a mutator on an element can."
course: "computer-science-a"
unit: 4
topics: ["4.4"]
resourceType: "study-guide"
prerequisites:
  - "Array creation and access (Topic 4.3)"
  - "for and while loops (Unit 2)"
prerequisiteResources: ["mb-ap-csa-4.3-study-guide"]
learningObjectives:
  - "Write an indexed for loop and a while loop that traverse all or part of an array"
  - "Traverse an array forwards, backwards and with a step greater than one"
  - "Explain that the enhanced for loop variable holds a copy of each element and that assigning to it does not change the array"
  - "Explain how calling a method on the enhanced for variable can change an object stored in the array without changing the stored reference"
  - "Rewrite an enhanced for loop as an indexed for loop and a while loop, and find off-by-one errors"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.4-revision-notes", "mb-ap-csa-4.4-practice", "mb-ap-csa-4.4-checklist"]
next: "mb-ap-csa-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Traversing an array means using repetition to access all, or an ordered sequence, of its elements."
  - "An indexed for loop or while loop reaches elements through their indices: for (int i = 0; i < a.length; i++) visits every element once."
  - "In an enhanced for loop the variable is assigned a copy of each element, without using its index."
  - "Assigning a new value to the enhanced for variable does not change the array; calling a mutator on an object element does change that object, but not the reference stored in the array."
  - "Any enhanced for loop can be rewritten with an indexed for loop or a while loop; the reverse is not always possible."
faqs:
  - {"question": "When should I use an enhanced for loop and when an indexed loop?", "answer": "Use an enhanced for loop when you only need to read each element in order. Use an indexed loop when you need the position, want to change the stored values of a primitive array, or want to skip, reverse or look at neighbours."}
  - {"question": "Why doesn't x = x * 2 change my array in an enhanced for loop?", "answer": "The loop variable x is a copy of the element, not the element itself. Doubling x doubles the copy, which is discarded at the next iteration; the array is untouched. To change the stored values, use an indexed loop and assign to a[i]."}
  - {"question": "Can an enhanced for loop change objects stored in an array?", "answer": "It can change their state by calling their mutator methods, because the copy is a copy of the reference, which still leads to the same object. It cannot change which object is stored in the array."}
  - {"question": "What causes an off-by-one error in array loops?", "answer": "Starting at the wrong index, or stopping at the wrong place. Using <= with length visits index length, which throws an exception; using < length - 1 skips the last element."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Visiting every element

Topic 4.3 gave you a structure that holds a data set. Topic 4.2 said a plan processes the values **one at a time**. **Traversing** an array is how the code does that: repetition statements are used to access **all, or an ordered sequence of, elements** in the array. Nearly every array algorithm in the rest of Unit 4 begins with a traversal, so getting it exactly right is worth the effort.

You have three ways to write one.

## The indexed for loop

An **indexed `for` loop** accesses elements through their **indices**. The standard form visits every element once, from first to last:

```java
for (int i = 0; i < a.length; i++)
{
    // use a[i]
}
```

Why exactly these three parts?

- `int i = 0` starts at the first index.
- `i < a.length` continues while `i` is a valid index, because valid indices are 0 to `length - 1`.
- `i++` moves to the next index.

Using `<=` instead of `<` would let `i` reach `a.length` and throw `ArrayIndexOutOfBoundsException`. Using `i < a.length - 1` would stop one early and skip the last element.

By changing the three parts you can traverse part of an array, step through it, or go backward. For `a = {3, 8, 1, 6}`:

```java
int sum = 0;
for (int i = 0; i < a.length; i++)
{
    sum += a[i];
}
System.out.println(sum);
```

This adds `a[0] + a[1] + a[2] + a[3] = 3 + 8 + 1 + 6`, and printed `18`. Visiting every other element:

```java
int altSum = 0;
for (int i = 0; i < a.length; i += 2)
{
    altSum += a[i];
}
System.out.println(altSum);
```

The index goes 0, 2 and then 4, which is not less than 4, so the loop stops: `3 + 1 = 4`, printed `4`. Going backward:

```java
String reversed = "";
for (int i = a.length - 1; i >= 0; i--)
{
    reversed += a[i] + " ";
}
System.out.println(reversed);
```

starts at the last index and counts down to 0; it printed `6 1 8 3 ` (the text ends with a space).

## The while loop

A `while` loop does the same job when you manage the index yourself. **Traversing an array with an indexed `for` loop or `while` loop requires elements to be accessed using their indices.** You write the initialisation, the test and the update separately, so it is easy to forget the update and create an infinite loop.

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

This counts the elements greater than 5 (8 and 6), so it printed `2`. A `while` loop is the natural choice when you may stop early, for example when you want to find the first element that meets a condition.

## The enhanced for loop

An **enhanced `for` loop** has a header with a **variable**, called the *enhanced for loop variable*, and the array:

```java
for (int value : a)
{
    // use value
}
```

On each iteration the variable is **assigned a copy of an element**, **without using its index**. It reads cleanly when you do not need the position:

```java
int total = 0;
for (int value : a)
{
    total += value;
}
System.out.println(total);
```

It printed `18`, the same as the indexed total.

Two consequences matter a great deal.

**1. Assigning to the variable does not change the array.** The variable holds a copy of the element, so changing the copy cannot change what is stored:

```java
for (int x : a)
{
    x = x * 2;
}
System.out.println(a[0] + " " + a[1] + " " + a[2] + " " + a[3]);
```

printed `3 8 1 6`: the array is unchanged. To change the stored values, use an indexed loop and assign to `a[i]`:

```java
for (int i = 0; i < a.length; i++)
{
    a[i] = a[i] * 2;
}
System.out.println(a[0] + " " + a[1] + " " + a[2] + " " + a[3]);
```

which printed `6 16 2 12`.

**2. When the array stores object references,** the enhanced for variable is a copy of a **reference**. Calling a **method** on it (such as a mutator) **changes the state of the object**, because the copied reference leads to the same object. But assigning a **new object** to the variable changes only the variable, not the references **stored in the array**.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="enh-title enh-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="enh-title">The enhanced for variable is a copy of the element</title>
<desc id="enh-desc">Top row: the array a holds 3, 8, 1 and 6 at indices 0 to 3. An arrow labelled copy of the element leads from the box at index 1, holding 8, to a separate variable box x. Executing x equals x times 2 changes x to 16. A note says the array still holds 3, 8, 1 and 6. A second row shows the array after an indexed loop assigns a at i equals a at i times 2: the boxes now hold 6, 16, 2 and 12.</desc>
<rect x="0" y="0" width="640" height="260" fill="#ffffff"/>
<text x="20" y="28" font-size="14" font-weight="bold" fill="#1d2b44">Enhanced for: x = x * 2;</text>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="40" y="44" width="70" height="40"/><rect x="110" y="44" width="70" height="40"/><rect x="180" y="44" width="70" height="40"/><rect x="250" y="44" width="70" height="40"/></g>
<g fill="#1d2b44" font-size="18" text-anchor="middle"><text x="75" y="71">3</text><text x="145" y="71">8</text><text x="215" y="71">1</text><text x="285" y="71">6</text></g>
<g fill="#1d2b44" font-size="12" text-anchor="middle"><text x="75" y="100">0</text><text x="145" y="100">1</text><text x="215" y="100">2</text><text x="285" y="100">3</text></g>
<path d="M145 108 L145 128 L400 128" stroke="#1d2b44" stroke-width="2" fill="none"/><polygon points="400,128 390,123 390,133" fill="#1d2b44"/>
<text x="270" y="122" font-size="12" fill="#1d2b44" text-anchor="middle">copy of the element</text>
<rect x="402" y="108" width="110" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="457" y="133" text-anchor="middle" font-size="16" fill="#1d2b44">x = 8, then 16</text>
<text x="40" y="170" font-size="13" fill="#1d2b44">After the loop the array still holds 3, 8, 1, 6.</text>
<text x="20" y="200" font-size="14" font-weight="bold" fill="#1d2b44">Indexed for: a[i] = a[i] * 2;</text>
<g fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"><rect x="40" y="212" width="70" height="40"/><rect x="110" y="212" width="70" height="40"/><rect x="180" y="212" width="70" height="40"/><rect x="250" y="212" width="70" height="40"/></g>
<g fill="#1d2b44" font-size="18" text-anchor="middle"><text x="75" y="239">6</text><text x="145" y="239">16</text><text x="215" y="239">2</text><text x="285" y="239">12</text></g>
<text x="340" y="239" font-size="13" fill="#1d2b44">the stored values changed</text>
</svg>
<figcaption>Figure 1. The enhanced for variable x is a separate variable that holds a copy of each element, so doubling x leaves the array alone. An indexed loop assigns to a[i] directly and changes the stored values. The numbers under the top boxes are indices.</figcaption>
</figure>

Here is the object case:

```java
public class Counter
{
    private int ticks;

    public Counter(int start)
    {
        ticks = start;
    }

    public void bump()
    {
        ticks++;
    }

    public int getTicks()
    {
        return ticks;
    }
}
```

```java
Counter[] cs = {new Counter(0), new Counter(5), new Counter(9)};
for (Counter c : cs)
{
    c.bump();
}
System.out.println(cs[0].getTicks() + " " + cs[1].getTicks() + " " + cs[2].getTicks());
for (Counter c : cs)
{
    c = new Counter(100);
}
System.out.println(cs[0].getTicks() + " " + cs[1].getTicks() + " " + cs[2].getTicks());
```

The first loop calls `bump()` on each `Counter` through the copied reference, so each counter's `ticks` rises by 1: `0 5 9` becomes `1 6 10`. The second loop assigns `new Counter(100)` to the loop variable `c`, which changes only `c`: the array still holds the same three objects, and the second line is again `1 6 10`. The program printed `1 6 10` twice.

Any enhanced `for` loop can be **rewritten** with an indexed `for` loop or a `while` loop, but not every indexed loop can be written as an enhanced one (for example, one that changes the elements, skips some, or goes backward).

## Worked example 1: three loops, one answer, and one that cannot be enhanced

**Task.** For `int[] d = {5, 3, 8, 1}`, find the sum of the elements at **even indices** (0 and 2) in three ways.

**Indexed for loop:**

```java
int evenSum = 0;
for (int i = 0; i < d.length; i++)
{
    if (i % 2 == 0)
    {
        evenSum += d[i];
    }
}
```

| `i` | `i % 2 == 0`? | Action | `evenSum` |
|---|---|---|---|
| (start) | | | 0 |
| 0 | yes | add `d[0]` = 5 | 5 |
| 1 | no | | 5 |
| 2 | yes | add `d[2]` = 8 | 13 |
| 3 | no | | 13 |

The result is **13** (confirmed by running it).

**While loop (same plan):** `int evenSum = 0; int i = 0; while (i < d.length) { if (i % 2 == 0) { evenSum += d[i]; } i++; }`. The `i++` at the bottom is essential; without it the loop would never end.

**Enhanced for loop:** there is no index to test, so the condition "even position" cannot be asked directly. You would have to maintain your own counter variable, which is simply an indexed loop in disguise. Choose the indexed loop.

**Check.** Reading the array by eye, positions 0 and 2 hold 5 and 8, which total 13.

## Worked example 2: off-by-one errors and stopping early

**Task.** Find what each loop does with `b = {2, 4, 6}` (length 3).

**(a) Starting at index 1 by mistake.**

```java
int s2 = 0;
for (int i = 1; i < b.length; i++) { s2 += b[i]; }
```

It adds `b[1] + b[2] = 4 + 6 = 10`, and skips `b[0]`. Output `10`. If the plan was to total everything (12), this is wrong by 2, the value of the first element.

**(b) Stopping one early.** Counting the iterations of `for (int i = 0; i < a.length - 1; i++)` on `a = {3, 8, 1, 6}` gives `i = 0, 1, 2`: **3** iterations rather than 4. The last element is never visited. The program printed `3`.

**(c) Running one too far.**

```java
for (int i = 0; i <= b.length; i++) { System.out.print(b[i] + " "); }
```

The loop prints `2 4 6 ` and then, at `i = 3`, `b[3]` does not exist and the program throws `ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3`. Everything before the exception was printed.

**(d) A while loop that stops early on purpose.** With `e = {4, 7, 2, 9}`:

```java
int k = 0;
while (k < e.length && e[k] != 2) { k++; }
```

`k` moves while the element is not 2: it stops at index 2, so `k` is **2**. The test `k < e.length` comes first, so `e[k]` is never evaluated when `k` is out of range. The program printed `2`.

**Check.** Each of these is "one value off" at the start or end of the loop, which is why you should check the first and last iteration by hand.

## Common misconceptions

- **"`x = x * 2` in an enhanced for loop doubles the array."** It doubles a copy and the array is unchanged.
- **"An enhanced for loop can never change anything."** It can change the **state** of object elements through mutator calls, but not the stored references.
- **"`i <= a.length` is safe because it includes the last element."** The last element is at `a.length - 1`; the index `a.length` does not exist.
- **"A while loop needs no update."** Forgetting `i++` makes an infinite loop.
- **"An enhanced for loop gives me the index."** It does not; use an indexed loop if you need positions.
- **"The loop variable of an enhanced for is the element itself."** It is a copy of it (for an object, a copy of the reference).

## Where this leads

Traversal is the engine of every array algorithm: [Implementing Array Algorithms](/advanced-course-resources/computer-science-a/4-5-implementing-array-algorithms-study-guide/) combines it with the count, total, maximum and reverse plans from [Introduction to Using Data Sets](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/). Practise with the [practice questions](/advanced-course-resources/computer-science-a/4-4-array-traversals-practice/), read the [revision notes](/advanced-course-resources/computer-science-a/4-4-array-traversals-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/4-4-array-traversals-checklist/). For array basics, revisit [Array Creation and Access](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/).
