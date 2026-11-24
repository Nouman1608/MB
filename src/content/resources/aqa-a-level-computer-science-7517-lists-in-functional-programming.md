---
title: "AQA A-Level Computer Science (7517): Lists in Functional Programming"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of functional programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 12.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-functional-programming"
    subtopic: "lists-in-functional-programming-7517"
description: "Deeper guide to AQA 7517 section 4.12.3: lists as a head and a tail, the empty list, and the operations head, tail, empty test, length, prepend and append, with recursive definitions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.12.3 Lists in functional programming** in AQA A-Level Computer Science (7517). The specification asks you to be familiar with **representing a list as a concatenation of a head and a tail**, and to know that **the head is an element of a list and the tail is a list**, and that **a list can be empty**. You must **describe and apply** seven operations: **return head of list, return tail of list, test for empty list, return length of list, construct an empty list, prepend an item to a list and append an item to a list.** You should also have experience of **writing programs** for these operations in a functional language, or one with support for the functional paradigm.

The wider [fundamentals of functional programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/) covers all of section 4.12. This page works through each operation with traced examples, including recursive definitions of length and append. Examples use a Haskell-style notation, and the results were checked by evaluating equivalent code.

Condensed notes are in the [lists in functional programming revision notes](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes/), and exam-style questions are in the [lists in functional programming practice questions](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-practice/).

## A list as a head and a tail

In a functional language a list is built from two parts:

- the **head**: the first element of the list (a single item);
- the **tail**: the **rest of the list** after the head (itself a list).

The list `[4, 3, 5]` can be written in the form `head : tail`, where `:` joins an item to the front of a list. So

**[4, 3, 5] = 4 : [3, 5]**

where **4 is the head** and **[3, 5] is the tail**. The tail can be split again: `[3, 5] = 3 : [5]`, and `[5] = 5 : []`. So in full, `[4, 3, 5] = 4 : (3 : (5 : []))`.

**The empty list** is written `[]`. It has no head and no tail. A list that contains one item, `[5]`, has head 5 and tail `[]`.

**Be careful:** the head is an **element**, but the tail is a **list**. The tail of `[5]` is `[]`, not 5, and the tail of `[3, 5]` is `[5]`, not 5.

## The seven operations

| Operation | Haskell-style | On `[4, 3, 5]` |
|---|---|---|
| Return head of list | `head xs` | 4 |
| Return tail of list | `tail xs` | `[3, 5]` |
| Test for empty list | `null xs` | False |
| Return length of list | `length xs` | 3 |
| Construct an empty list | `[]` | `[]` |
| Prepend an item to a list | `x : xs` | `9 : [4, 3, 5]` gives `[9, 4, 3, 5]` |
| Append an item to a list | `xs ++ [x]` | `[4, 3, 5] ++ [9]` gives `[4, 3, 5, 9]` |

Notes:

- `head` and `tail` are **not defined for the empty list**: asking for the head of `[]` is an error. Test for empty first.
- **Prepending** takes an item and a list: `item : list`.
- **Appending** joins two lists with `++`, so a single item is first written as a one-element list, `[9]`.
- All of these **return a new list**. The original list is not changed (it is immutable).

In Python the same operations are `xs[0]` (head), `xs[1:]` (tail), `len(xs) == 0` (test for empty), `len(xs)`, `[]`, `[x] + xs` (prepend) and `xs + [x]` (append). Python creates new lists in each of these expressions.

**Worked example 1: applying operations.** Let `xs = [4, 3, 5]`.

| Expression | Value |
|---|---|
| `head (tail xs)` | head of `[3, 5]` = 3 |
| `tail (tail xs)` | tail of `[3, 5]` = `[5]` |
| `tail (tail (tail xs))` | tail of `[5]` = `[]` |
| `null (tail (tail (tail xs)))` | True |
| `length (7 : xs)` | length of `[7, 4, 3, 5]` = 4 |
| `head (xs ++ [1])` | head of `[4, 3, 5, 1]` = 4 |
| `tail [8]` | `[]` |
| `head []` | error |

## Defining the operations by recursion

A list is either empty or has a head and a tail, so functions on lists have two cases: a **base case** for `[]` and a **recursive case** for `x : xs`, which works on the smaller list `xs`.

### Length

```
length' []     = 0
length' (x:xs) = 1 + length' xs
```

**Worked example 2: length' [4, 3, 5].**

- `length' [4, 3, 5]` = 1 + `length' [3, 5]`
- = 1 + (1 + `length' [5]`)
- = 1 + (1 + (1 + `length' []`))
- = 1 + (1 + (1 + 0)) = **3**

### Append

```
append []     ys = ys
append (x:xs) ys = x : append xs ys
```

**Worked example 3: append [1, 2] [3].**

- `append [1, 2] [3]` = 1 : `append [2] [3]`
- = 1 : (2 : `append [] [3]`)
- = 1 : (2 : [3]) = **[1, 2, 3]**

Because the first list must be taken apart and rebuilt item by item, appending takes time proportional to the length of the first list, whereas **prepending takes a single step**. That is why functional programs prefer to build lists by prepending.

### Sum, member and reverse

```
sumList []     = 0
sumList (x:xs) = x + sumList xs

member _ []     = False
member y (x:xs) = (y == x) || member y xs

reverse' []     = []
reverse' (x:xs) = reverse' xs ++ [x]
```

- `sumList [3, 1, 4]` = 3 + (1 + (4 + 0)) = **8**.
- `member 5 [4, 3, 5]`: 5 is not 4, so check `[3, 5]`; 5 is not 3, so check `[5]`; 5 equals 5, so **True**. `member 7 [4, 3, 5]` reaches `[]` and gives **False**.
- `reverse' [1, 2, 3]` = `reverse' [2, 3] ++ [1]` = (`reverse' [3] ++ [2]`) ++ [1] = (([] ++ [3]) ++ [2]) ++ [1] = **[3, 2, 1]**.

## Using higher-order functions with lists

The operations combine with `map`, `filter` and `fold` (4.12.2). For `xs = [4, 3, 5]`:

- `map (\x -> x * 2) xs` gives `[8, 6, 10]`;
- `filter (\x -> x > 3) xs` gives `[4, 5]`;
- `foldl (+) 0 xs` gives `12`.

## Why lists are built this way

- The head and tail structure allows a list to be processed **one element at a time** by recursion, with the base case for the empty list.
- Because lists are **immutable**, prepending creates a new list that can share the tail of the old one, so nothing is copied or changed, which suits the functional style.
- Recursion on the tail is the functional equivalent of a loop through the elements.

## Common mistakes

- Treating the **tail** as a single item. It is a **list**; `tail [5]` is `[]`.
- Asking for the **head or tail of the empty list** with no empty test.
- Confusing **prepend** (`x : xs`) with **append** (`xs ++ [x]`), or writing `xs ++ x` with a single item.
- Forgetting the **base case** in a recursive definition.
- Writing the recursive case on the **whole list** instead of the tail, so the recursion never ends.
- Thinking the operations **change the original list**. They return new lists.
- Counting the length of `[[1, 2], [3]]` as 3. It is 2 (two elements, each a list).

## Exam technique

- When tracing, **expand the recursion line by line** and show each substitution.
- When writing a function, write the **base case first**, then the recursive case using the tail.
- State clearly whether an expression gives an **item** or a **list**.
- If the question uses another notation (for example pseudo-code with `Head(list)` and `Tail(list)`), use the operations as defined there.

## More resources on this topic

- [Lists in functional programming revision notes](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes/)
- [Lists in functional programming practice questions](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-practice/)
- [Writing functional programs study guide](/resources/aqa-a-level-computer-science-7517-writing-functional-programs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.12.3 Lists in functional programming. Always check the current specification on the AQA website.*
