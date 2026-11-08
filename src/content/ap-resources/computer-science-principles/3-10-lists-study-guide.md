---
resourceId: "mb-ap-csp-3.10-study-guide"
title: "Lists: Study Guide (Computer Science Principles 3.10)"
description: "List operations (index, assign, INSERT, APPEND, REMOVE, LENGTH), FOR EACH and index traversals, and the standard algorithms: sum, average, maximum, counting and linear search. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.10"]
resourceType: "study-guide"
prerequisites:
  - "Data abstraction and lists (Topic 3.2)"
  - "Iteration (Topic 3.8)"
  - "Conditionals (Topic 3.6)"
prerequisiteResources: ["mb-ap-csp-3.2-study-guide", "mb-ap-csp-3.8-study-guide"]
learningObjectives:
  - "Use list indexing, assignment, INSERT, APPEND, REMOVE and LENGTH correctly"
  - "Traverse a list completely or partially with FOR EACH or an index loop"
  - "Write and trace algorithms for sum, average, maximum, minimum, counting and linear search"
  - "Explain how INSERT and REMOVE change the indices of later elements"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.10-revision-notes", "mb-ap-csp-3.10-practice", "mb-ap-csp-3.10-checklist"]
next: "mb-ap-csp-3.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "List indices run from 1 to LENGTH(aList); an index outside that range gives an error and ends the program."
  - "INSERT shifts elements right and adds one to the length; REMOVE shifts elements left and subtracts one; APPEND adds at the end."
  - "FOR EACH item IN aList gives item a copy of each element in turn; changing item does not change the list."
  - "Traversal is the basis of sum, average, max/min, counting and linear search."
  - "Linear search checks elements in order until found or all checked; it works on unsorted lists."
faqs:
  - question: "Does the first element of a list have index 0 or 1?"
    answer: "In the exam reference notation the first element has index 1."
  - question: "What does REMOVE do to the other elements?"
    answer: "It removes the element at the given index and shifts every later element one place left, so the length drops by 1."
  - question: "Can I change a list inside FOR EACH by assigning to the loop variable?"
    answer: "No. The loop variable holds a copy of each element. To change elements, assign to aList[i] using an index."
  - question: "What is a linear search?"
    answer: "An algorithm that checks each element of a list in order until the desired value is found or all elements have been checked."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Real programs deal with collections: the scores in a class, the songs in a playlist, the items in a basket. In Topic 3.2 you met the **list** as a data abstraction. This topic is about *using* lists: the operations the exam reference sheet provides for changing them, the loops that **traverse** them, and the standard algorithms built on those loops (finding the largest value, summing and averaging, and searching). List questions are among the most common on the exam, so it is worth being completely fluent.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## The list operations

In the reference notation the elements of a list `aList` have indices **1** to `LENGTH(aList)`. For every list operation, an index less than 1 or greater than the length gives an error message, and the program terminates. (`INSERT` is also used with the index of an existing position, so that elements shift to the right.)

| Operation | Effect | Example on `[10, 20, 30]` |
|---|---|---|
| `aList[i]` | The element at index `i` | `aList[2]` is 20 |
| `x ← aList[i]` | Copy an element into a variable | `x ← aList[3]` makes x = 30 |
| `aList[i] ← x` | Replace the element at index `i` | `aList[1] ← 5` gives `[5, 20, 30]` |
| `aList[i] ← aList[j]` | Copy the element at `j` into index `i` | `aList[1] ← aList[3]` gives `[30, 20, 30]` |
| `INSERT(aList, i, value)` | Shift elements at index `i` and above right; put `value` at `i`; length + 1 | `INSERT(aList, 2, 15)` gives `[10, 15, 20, 30]` |
| `APPEND(aList, value)` | Add `value` at the end; length + 1 | `APPEND(aList, 40)` gives `[10, 20, 30, 40]` |
| `REMOVE(aList, i)` | Remove the element at `i`; shift later ones left; length − 1 | `REMOVE(aList, 2)` gives `[10, 30]` |
| `LENGTH(aList)` | Number of elements now in the list | `LENGTH(aList)` is 3 |

<figure>
<svg viewBox="0 0 390 262" role="img" aria-labelledby="f310-t f310-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f310-t">A list before and after INSERT and REMOVE</title>
<desc id="f310-d">Four rows of boxes show a list changing. Row 1, start: 10, 20, 30, 40. Row 2, after INSERT at index 2: 10, 15, 20, 30, 40 with the new element 15 highlighted. Row 3, REMOVE index 4: the same five values with the element at index 4, which is 30, shown greyed and dashed and marked gone. Row 4, after REMOVE: 10, 15, 20, 40.</desc>
<rect x="0" y="0" width="390" height="262" fill="#ffffff"/>
<defs><marker id="f310-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="10" y="45" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">start</text><rect x="130" y="20" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="152.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">10</text><rect x="174" y="20" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="196.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">20</text><rect x="218" y="20" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="240.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">30</text><rect x="262" y="20" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="284.0" y="43" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">40</text><text x="10" y="103" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">after INSERT</text><rect x="130" y="78" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="152.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">10</text><rect x="174" y="78" width="44" height="36" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="196.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">15</text><text x="196.0" y="129" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">middle</text><rect x="218" y="78" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="240.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">20</text><rect x="262" y="78" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="284.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">30</text><rect x="306" y="78" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="328.0" y="101" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">40</text><text x="10" y="161" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">REMOVE index 4</text><rect x="130" y="136" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="152.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">10</text><rect x="174" y="136" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="196.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">15</text><rect x="218" y="136" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="240.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">20</text><rect x="262" y="136" width="44" height="36" fill="#e6e6e6" stroke="#1d2b44" stroke-width="2" stroke-dasharray="4 3"/><text x="284.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#6b7280">30</text><text x="284.0" y="187" text-anchor="middle" font-size="10" font-weight="normal" fill="#1d2b44">gone</text><rect x="306" y="136" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="328.0" y="159" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">40</text><text x="10" y="219" text-anchor="start" font-size="12" font-weight="bold" fill="#1d2b44">after REMOVE</text><rect x="130" y="194" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="152.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">10</text><rect x="174" y="194" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="196.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">15</text><rect x="218" y="194" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="240.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">20</text><rect x="262" y="194" width="44" height="36" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="284.0" y="217" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">40</text>
</svg>
<figcaption>Figure 1. INSERT shifts later elements right and makes the list longer; REMOVE closes the gap and makes it shorter. The element indices change for everything after the position.</figcaption>
</figure>

The most important consequence of INSERT and REMOVE is that **indices of later elements change**. After the `INSERT` in Figure 1 the value 20, which was at index 2, is now at index 3.

## Traversing a list

**Traversing** a list means visiting its elements. A **complete traversal** accesses every element; a **partial traversal** stops early or skips some. Two ways to traverse:

**1. FOR EACH.**

```text
FOR EACH item IN aList
{
  <block of statements>
}
```

The variable `item` is assigned the value of each element in turn, from the first to the last, and the block runs once for each. `item` holds a **copy** of the element, so assigning a new value to `item` does **not** change the list.

**2. An index loop.** Use a counter that runs from 1 up to `LENGTH(aList)`, and access `aList[i]`. You need this when the *position* matters (the index of the largest value) or when you want only part of the list.

```text
aList ← [3, 1, 2]
i ← 1
REPEAT LENGTH(aList) TIMES
{
  DISPLAY(aList[i])
  i ← i + 1
}
```

Output: `3 1 2`

## Worked example 1: a sequence of list operations

Trace the list through this segment and state what is displayed.

```text
aList ← [10, 20, 30, 40]
INSERT(aList, 2, 15)
APPEND(aList, 50)
REMOVE(aList, 4)
aList[1] ← aList[LENGTH(aList)]
FOR EACH item IN aList
{
  DISPLAY(item)
}
```

Output: `50 15 20 40 50`

| After line | `aList` | Length | Reasoning |
|---|---|---|---|
| 1 | [10, 20, 30, 40] | 4 | Create the list. |
| 2  INSERT at 2 | [10, 15, 20, 30, 40] | 5 | 20, 30, 40 shift right. |
| 3  APPEND 50 | [10, 15, 20, 30, 40, 50] | 6 | Added at the end. |
| 4  REMOVE index 4 | [10, 15, 20, 40, 50] | 5 | The element at index 4 is 30 (after the insert, index 4 holds 30). Later elements shift left. |
| 5  `aList[1] ← aList[LENGTH(aList)]` | [50, 15, 20, 40, 50] | 5 | `LENGTH(aList)` is 5, so copy `aList[5]` (50) into index 1. |

The `FOR EACH` loop then displays each element in order, giving `50 15 20 40 50`.

**Check.** The most common slip is removing the wrong element on line 4: index 4 is counted *after* the insert, so it is 30, not 40. Redrawing the list after every operation avoids it.

## Algorithms with lists

Four algorithms occur again and again. All of them rely on a traversal.

**Sum and average.** Start a total at 0, add each element, then divide by `LENGTH`.

```text
scores ← [14, 9, 21, 17, 9]
total ← 0
FOR EACH score IN scores
{
  total ← total + score
}
DISPLAY(total)
DISPLAY(total / LENGTH(scores))
```

Output: `70 14`

**Maximum (and its position).** Assume the first element is the largest so far, then compare every other element with it. The code below also records the index.

```text
scores ← [14, 9, 21, 17, 9]
best ← scores[1]
position ← 1
i ← 2
REPEAT LENGTH(scores) - 1 TIMES
{
  IF(scores[i] > best)
  {
    best ← scores[i]
    position ← i
  }
  i ← i + 1
}
DISPLAY(best)
DISPLAY(position)
```

Output: `21 3`

The loop starts at index 2 because index 1 is already in `best`. Changing `>` to `<` turns this into a minimum algorithm.

**Linear (sequential) search.** Check each element, in order, until the value is found or every element has been checked.

```text
scores ← [14, 9, 21, 17, 9]
target ← 17
found ← false
i ← 1
REPEAT UNTIL(found OR i > LENGTH(scores))
{
  IF(scores[i] = target)
  {
    found ← true
  }
  i ← i + 1
}
DISPLAY(found)
DISPLAY(i - 1)
```

Output: `true 4`

The loop stops as soon as `found` becomes true, so only four elements are examined: 14, 9, 21, 17. For a target that is **not** in the list, the loop runs until `i` exceeds `LENGTH`, so all five elements are checked. Linear search works on any list, sorted or not, which will be the key contrast with binary search in Topic 3.11.

**Counting items that meet a condition.** Replace the "add to total" with "add 1 if the test is true". This is the counter-plus-IF pattern from Topic 3.8, now driven by `FOR EACH`.

## Worked example 2: a complete algorithm on a list

A teacher stores quiz marks in `marks`. Write code that displays how many marks are **above the class average**, and trace it for `[8, 6, 10, 4, 7]`.

**Step 1. Plan the algorithm in words.** (1) Find the sum of the marks. (2) Divide by the length to get the average. (3) Go through the marks again and count each one that is bigger than the average. (4) Display the count. This combines two list algorithms: sum/average and counting.

**Step 2. Write the code.**

```text
marks ← [8, 6, 10, 4, 7]
total ← 0
FOR EACH mark IN marks
{
  total ← total + mark
}
average ← total / LENGTH(marks)
count ← 0
FOR EACH mark IN marks
{
  IF(mark > average)
  {
    count ← count + 1
  }
}
DISPLAY(average)
DISPLAY(count)
```

Output: `7 2`

**Step 3. Trace.** The sum is 8 + 6 + 10 + 4 + 7 = 35, and 35 / 5 = 7, so `average` is 7. Now count marks greater than 7:

| mark | `mark > 7` | count after |
|---|---|---|
| 8 | true | 1 |
| 6 | false | 1 |
| 10 | true | 2 |
| 4 | false | 2 |
| 7 | false (equal, not greater) | 2 |

Two marks, 8 and 10, are above average, so `2` is displayed along with the average. **Check.** The mark 7 equals the average, so it must **not** be counted: `>` is correct, `≥` would give 3. The question wording "above" decides the operator.

## Common misconceptions

- **"The first index is 0."** In the exam notation it is 1; the last is `LENGTH(aList)`.
- **"Changing `item` in a FOR EACH loop changes the list."** `item` is a copy of the element; the list itself is unchanged.
- **"REMOVE leaves a gap."** Later elements shift left, so indices after the removed one go down by 1.
- **"INSERT replaces the element at that index."** It shifts the element (and all after it) right and increases the length.
- **"Linear search needs the list to be sorted."** It works on any list. (Binary search is the one that requires sorted data.)
- **"`LENGTH(aList)` is a fixed value."** It is the number of elements *now*, so it changes after INSERT, APPEND and REMOVE.


## Where this leads

Lists feed straight into the next topic, binary search, which finds a value in a *sorted* list much faster than linear search, and into procedures (Topics 3.12 and 3.13), where a list is often passed to a procedure as a parameter.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-10-lists-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-10-lists-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-10-lists-checklist/). The next topic is [Topic 3.11, Binary Search](/advanced-course-resources/computer-science-principles/3-11-binary-search-study-guide/).
