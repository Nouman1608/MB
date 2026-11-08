---
resourceId: "mb-ap-csa-4.8-study-guide"
title: "ArrayList Methods: Study Guide (Computer Science A 4.8)"
description: "How to create and use a Java ArrayList: size, add, add at an index, get, set and remove, their return values, shifting, index rules, generics, and two traced examples."
course: "computer-science-a"
unit: 4
topics: ["4.8"]
resourceType: "study-guide"
prerequisites:
  - "Arrays: creating, indexing and length (Topic 4.3)"
  - "Wrapper classes Integer and Double (Topic 4.7)"
  - "Calling instance methods on objects and reading their return values (Topic 1.14)"
learningObjectives:
  - "Create an ArrayList of a given element type and state why the generic form ArrayList<E> is preferred"
  - "Use size, add, add at an index, get, set and remove correctly and state the value each returns"
  - "Trace the contents and size of a list after a sequence of calls, including the shifting of elements"
  - "Predict when an IndexOutOfBoundsException occurs and recognise that a list holds references and can be aliased"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.8-revision-notes", "mb-ap-csa-4.8-practice", "mb-ap-csa-4.8-checklist"]
next: "mb-ap-csa-4.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "An ArrayList is a resizable list of object references; it starts empty with new ArrayList<E>() and its size changes as you add and remove."
  - "The Quick Reference methods are size(), add(obj), add(index, obj), get(index), set(index, obj) and remove(index). The valid indices are 0 to size() - 1 (and add may also use size())."
  - "add(index, obj) and remove(index) shift later elements; set replaces without shifting and returns the old element; remove returns the removed element."
  - "Elements must be objects, so use ArrayList<Integer> not ArrayList<int>; a bad index throws IndexOutOfBoundsException."
faqs:
  - question: "What is the difference between an array and an ArrayList?"
    answer: "An array has a fixed size set when it is created and can hold primitives or objects. An ArrayList can grow and shrink, holds only object references and is used through methods such as add, get and remove instead of square brackets."
  - question: "Is it size, length or length() for an ArrayList?"
    answer: "It is the method size(). An array uses the attribute length, a String uses the method length(), and an ArrayList uses size()."
  - question: "Why write ArrayList<String> and not just ArrayList?"
    answer: "The type in angle brackets tells the compiler what the list holds, so mistakes such as adding an Integer to a list of Strings are found when the code is compiled rather than when it runs. The course says ArrayList<E> is preferred."
  - question: "Do I need to import ArrayList?"
    answer: "Yes. ArrayList is in the java.util package, so you need import java.util.ArrayList; (or import java.util.*;)."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## The problem arrays do not solve

An array is created with a fixed size. If a program collects the names of students who sign up for a club, it does not know in advance how many there will be. An array big enough for the worst case wastes space, and an array too small fails. An **`ArrayList`** solves this. It is a list of object references whose **size changes** as you add and remove elements.

You can picture it as a row of numbered slots that stretches or shrinks. The slots are numbered from **0** up to **size() - 1**, just like the indexes of an array. The first element is at index 0 and the last at `size() - 1`.

## Creating an ArrayList

```java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<String>();
```

Three details matter.

- The `ArrayList` class is in `java.util`, so it needs an `import`.
- The **type parameter** in angle brackets, `<String>`, says what the list holds. This is the generic form `ArrayList<E>`; with it, the parameters and return types of the methods become type `E`, and the compiler can find type mistakes before the program runs. The course prefers it to the plain `ArrayList`.
- `new ArrayList<String>()` builds an **empty** list: `size()` is 0.

Elements must be **objects**. To hold numbers, use the wrapper classes from the last topic: `ArrayList<Integer>` or `ArrayList<Double>`. Writing `ArrayList<int>` does not compile; the compiler reported `unexpected type, required: reference`.

## The methods

These are the `ArrayList` members in the Java Quick Reference. `E` stands for the element type.

| Method | What it does | Returns |
|---|---|---|
| `int size()` | number of elements | the count |
| `boolean add(E obj)` | appends `obj` at the end | `true` |
| `void add(int index, E obj)` | inserts `obj` at `index` (0 up to `size()` allowed); elements from `index` onwards move right | nothing |
| `E get(int index)` | reads the element at `index` | that element |
| `E set(int index, E obj)` | replaces the element at `index` | the **old** element |
| `E remove(int index)` | removes the element at `index`; later elements move left | the **removed** element |

Printing an `ArrayList` displays its contents in square brackets, such as `[Ana, Cy, Ben]`.

Figure 1 shows the shifting that `add(index, obj)` causes.

<figure>
<svg viewBox="0 0 400 270" role="img" aria-labelledby="al48-t al48-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="al48-t">Inserting into an ArrayList shifts later elements right</title>
<desc id="al48-d">Two rows of boxes. The upper row, before the call, holds Ana at index 0 and Ben at index 1, size 2. The lower row, after names.add(1, Cy), holds Ana at index 0, Cy at index 1 and Ben at index 2, size 3. The text says Ben moved from index 1 to index 2 and the new element Cy, shown with a thick border, took index 1.</desc>
<rect width="400" height="270" fill="#ffffff"/>
<text x="20" y="32" font-size="13" fill="#1d2b44" font-weight="bold">Before: size 2</text>
<rect x="20" y="40" width="90" height="34" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="65" y="62" text-anchor="middle" font-size="15" fill="#1d2b44">Ana</text>
<text x="65" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">index 0</text>
<rect x="110" y="40" width="90" height="34" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="155" y="62" text-anchor="middle" font-size="15" fill="#1d2b44">Ben</text>
<text x="155" y="92" text-anchor="middle" font-size="12" fill="#1d2b44">index 1</text>
<text x="20" y="142" font-size="13" fill="#1d2b44" font-weight="bold">After names.add(1, "Cy"): size 3</text>
<rect x="20" y="150" width="90" height="34" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="65" y="172" text-anchor="middle" font-size="15" fill="#1d2b44">Ana</text>
<text x="65" y="202" text-anchor="middle" font-size="12" fill="#1d2b44">index 0</text>
<rect x="110" y="150" width="90" height="34" fill="#e8eefc" stroke="#1d2b44" stroke-width="3"/>
<text x="155" y="172" text-anchor="middle" font-size="15" fill="#1d2b44">Cy</text>
<text x="155" y="202" text-anchor="middle" font-size="12" fill="#1d2b44">index 1</text>
<rect x="200" y="150" width="90" height="34" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="245" y="172" text-anchor="middle" font-size="15" fill="#1d2b44">Ben</text>
<text x="245" y="202" text-anchor="middle" font-size="12" fill="#1d2b44">index 2</text>
<text x="20" y="250" font-size="12" fill="#1d2b44">Ben moved from index 1 to index 2. The new element (thick border) took index 1.</text>
</svg>
<figcaption>Figure 1. add(index, obj) makes room by moving the element at that index, and every element after it, one place to the right; the size grows by one. remove(index) does the reverse and moves later elements one place to the left.</figcaption>
</figure>

### Index rules

For `get`, `set` and `remove`, the valid indices are 0 to `size() - 1`. For `add(int index, E obj)` the valid indices are 0 to `size()`, because inserting at `size()` is the same as appending. Any other index throws an **`IndexOutOfBoundsException`**. Notice the difference from arrays, whose exception is `ArrayIndexOutOfBoundsException`. Running `get(3)` on a three-element list, `add(5, 7)` on a three-element list and `get(0)` on an empty list each threw `java.lang.IndexOutOfBoundsException`.

## The list holds references

An `ArrayList` stores **references to objects**, not the objects themselves. Two consequences follow.

1. Assigning one list variable to another copies the **reference**, not the list. After `ArrayList<String> c = a;` both names refer to the same list. Adding through `c` changes what `a` sees. Running this: after `c.add("x")` the call `a.size()` gave 1.
2. Removing an element from the list does not destroy the object it referred to if something else still refers to it.

## Worked example 1: a sequence of calls

**Task.** Show the list and the value of each variable after every statement.

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Ana");
names.add("Ben");
names.add(1, "Cy");
String old = names.set(0, "Dee");
String gone = names.remove(1);
names.add("Eli");
```

| Statement | `names` afterwards | `size()` | Other value |
|---|---|---|---|
| (constructor) | `[]` | 0 | |
| `add("Ana")` | `[Ana]` | 1 | returns `true` |
| `add("Ben")` | `[Ana, Ben]` | 2 | returns `true` |
| `add(1, "Cy")` | `[Ana, Cy, Ben]` | 3 | Ben moved to index 2 |
| `set(0, "Dee")` | `[Dee, Cy, Ben]` | 3 | `old` is `"Ana"` |
| `remove(1)` | `[Dee, Ben]` | 2 | `gone` is `"Cy"` |
| `add("Eli")` | `[Dee, Ben, Eli]` | 3 | |

After the code, `names.get(2)` is `"Eli"` and `names.size()` is 3. Running the code and printing the list after each step gives output that matches every row above.

**Check.** `set` did not change the size (3 before, 3 after), while `add` and `remove` did. That is the quickest way to tell them apart.

## Worked example 2: shifting and the numbers list

**Task.** Trace this code and give the final list and its size.

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);
nums.add(8);
nums.add(0, 1);
nums.set(1, nums.get(2) + 5);
nums.remove(0);
```

| Statement | Working | `nums` afterwards |
|---|---|---|
| `add(4)` | append | `[4]` |
| `add(8)` | append | `[4, 8]` |
| `add(0, 1)` | insert at 0; 4 and 8 shift right | `[1, 4, 8]` |
| `set(1, nums.get(2) + 5)` | `get(2)` is 8; 8 + 5 = 13; replace index 1 | `[1, 13, 8]` |
| `remove(0)` | remove 1; 13 and 8 shift left | `[13, 8]` |

The final list is `[13, 8]` with size 2. The output of the run was `[13, 8] 2`.

**Why the arguments of `set` are evaluated first.** Java works out `nums.get(2) + 5` before calling `set`. At that moment the list is `[1, 4, 8]`, so `get(2)` is 8. A common slip is to use the list as it was before `add(0, 1)`, which would give `get(2)` as nothing at all.

**Autoboxing at work.** `nums.add(4)` passes an `int` where an `Integer` is expected, so it is boxed. `nums.get(2) + 5` unboxes the `Integer`, adds, and `set` boxes the sum again.

## Methods that change a list in a method

Because a method parameter holds a **reference**, a method that changes the list changes the caller's list too. The next method swaps the first and last elements of a list of Strings:

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

On `[p, q, r, s]` it produces `[s, q, r, p]` (run and confirmed). The guard for a list shorter than two elements is needed because `get(0)` on an empty list throws an exception. The temporary `first` is needed because `set` overwrites the old value.

## Common misconceptions

- **"An ArrayList can hold `int` values."** It holds `Integer` objects; the boxing is automatic but the element type must be written as `Integer`.
- **"The last valid index is `size()`."** It is `size() - 1` for `get`, `set` and `remove`. Only `add(index, obj)` may use `size()`.
- **"`set` inserts a new element."** `set` replaces and does not change the size; `add(index, obj)` inserts and grows the list.
- **"`remove(index)` leaves a gap."** The later elements move left to close it.
- **"`remove` returns `true`."** In the form `remove(int index)` it returns the removed element.
- **"Assigning a list copies it."** Only the reference is copied; both variables see the same list.
- **"You can use `[ ]` or `.length` on an ArrayList."** Use `get(i)`, `set(i, x)` and `size()`.

## Where this leads

Topic 4.9 traverses lists with loops, where you meet the two classic dangers: skipping elements when you remove during a traversal, and index errors. Topic 4.10 builds the standard algorithms (sum, maximum, count, shift, reverse, remove) on top of these six methods. Practise with the [Topic 4.8 practice questions](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-revision-notes/) and use the [checklist](/advanced-course-resources/computer-science-a/4-8-arraylist-methods-checklist/). Next: the [Topic 4.9 study guide on ArrayList traversals](/advanced-course-resources/computer-science-a/4-9-arraylist-traversals-study-guide/).
