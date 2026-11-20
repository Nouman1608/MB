---
title: "OxfordAQA A-Level Computer Science (9645): Lists in functional programming"
seoTitle: "OxfordAQA 9645 Lists in Functional Programming Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12 – Functional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 12.3
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "functional-programming"
  - qualification: "a-level"
    topic: "functional-programming"
    subtopic: "lists-in-functional-programming-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.12.3 in depth: Haskell lists, head and tail, the standard list operations and recursive functions that use x:xs patterns."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.12.3 Lists in functional programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.12 Functional programming. It is International A-level content, examined in Unit 4, and the code is Haskell. The specification asks you to know that a list stores a sequence of values and can be empty, to define a list, to see a list as a **head** and a **tail**, to describe and apply six list operations (head, tail, test for empty, length, construct an empty list, append an item), to write programs for those operations in Haskell, and to understand how the head and tail of a list argument are referred to inside a function.

The topic-level [functional programming study guide](/resources/oxfordaqa-a-level-computer-science-functional-programming/) covers lists briefly. This page works through the list operations and recursive list functions step by step, with new examples. Afterwards use the [lists in functional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-revision-notes/) and the [lists in functional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-practice/).

## What a list is

A **list** stores a sequence of values in order. Lists are written in square brackets with the items separated by commas.

```haskell
listOne = [10, 7, 8]
listTwo = ["Adam", "Ananya"]
listThree = []
```

`[]` is the **empty list**. A list can be empty, and a function that processes a list must say what to do when it is. In Haskell all items in one list must have the same type, so `[10, 7, 8]` is a list of numbers and `["Adam", "Ananya"]` is a list of strings.

## Head and tail

Every non-empty list can be split into its first item and everything after it.

- The **head** is the first item. It is a single element.
- The **tail** is the rest of the list. It is always a **list**, even when it holds only one item or none.

The two are joined by the colon operator, so the list [4, 3, 5] can be written as `4:[3, 5]`. Here 4 is the head and [3, 5] is the tail. The list [9] is `9:[]`: its head is 9 and its tail is the empty list.

| List | Head | Tail |
|---|---|---|
| `[4, 3, 5]` | 4 | `[3, 5]` |
| `[9]` | 9 | `[]` |
| `["x", "y"]` | "x" | `["y"]` |

The most common error is to treat the tail as an item. The tail of [4, 3, 5] is [3, 5], not 3, and the tail of [9] is [], not nothing.

## The list operations

Let `listOne = [1, 2, 3]`, `listTwo = [4, 5]` and `listThree = []`.

| Operation | Haskell | Example | Result |
|---|---|---|---|
| Return head | `head` | `head listOne` | 1 |
| Return tail | `tail` | `tail listOne` | `[2,3]` |
| Test for empty list | `null` | `null listOne` | False |
| Test for empty list | `null` | `null listThree` | True |
| Return length | `length` | `length listOne` | 3 |
| Construct an empty list | `[]` | `listThree = []` | an empty list |
| Append lists | `++` | `listOne ++ listTwo` | `[1,2,3,4,5]` |
| Add an item at the front | `:` | `0 : listOne` | `[0,1,2,3]` |

Two points are easy to miss.

1. **`++` joins two lists, so the item to append must itself be in a list.** To put 9 at the end of listOne, write `listOne ++ [9]`, which gives [1,2,3,9]. Writing `listOne ++ 9` is a type error.
2. **`head []` and `tail []` have no answer.** The empty list has no first item. Always test with `null` (or use a pattern for `[]`) before taking a head or tail.

Chains of operations are built by nesting: `head (tail listOne)` is the second item, 2, and `length (tail listOne)` is 2.

## Naming head and tail inside a function

When a function is given a list, a pattern of the form `(x:xs)` splits the argument. The name `x` refers to the head (one item) and `xs` refers to the tail (a list). The brackets around the pattern are required. The specification's example is

```haskell
sum (x:xs) = x + sum (xs)
```

If this were called with `[8, 3, 2]`, then x would be 8 and xs would be [3, 2]. The letters are only names; `x` and `xs` are conventional because `xs` reads as "more x's".

A second pattern, `[]`, matches the empty list. Together they cover every list.

## Recursive functions on lists

A recursive list function has a base case for `[]` (or for a single item) and a recursive case on `(x:xs)` that handles the head and calls itself on the tail. The tail is always shorter, so the recursion ends.

### Worked example 1: total and count

```haskell
total [] = 0
total (x:xs) = x + total xs

count [] = 0
count (x:xs) = 1 + count xs
```

Tracing `total [8, 3, 2]`:

```
total [8, 3, 2]
= 8 + total [3, 2]
= 8 + (3 + total [2])
= 8 + (3 + (2 + total []))
= 8 + (3 + (2 + 0))
= 13
```

`count [7, 2, 1, 9]` works the same way: 1 + (1 + (1 + (1 + 0))) = 4. This does the same job as the built-in `length`.

### Worked example 2: largest item

For the largest item, an empty list has no answer, so the base case is a list with exactly one item:

```haskell
largest [x] = x
largest (x:xs) = max x (largest xs)
```

`largest [4, 9, 2, 7]` = max 4 (max 9 (max 2 7)) = max 4 (max 9 7) = max 4 9 = **9**.

### Worked example 3: member

A test for whether a value occurs in a list uses a Boolean base case and the `||` operator:

```haskell
member v [] = False
member v (x:xs) = x == v || member v xs
```

`member 3 [1, 2, 3]`: 1 == 3 is False, so check the tail; 2 == 3 is False, so check [3]; 3 == 3 is True, so the result is **True**. `member 9 [1, 2, 3]` reaches `member 9 []` and gives **False**.

### Worked example 4: building a new list

To return a new list, put the processed head in front of the recursive result with the colon operator:

```haskell
doubleAll [] = []
doubleAll (x:xs) = (x * 2) : doubleAll xs
```

`doubleAll [3, 1, 4]` = 6 : (2 : (8 : [])) = **[6,2,8]**. This is exactly what `map (* 2)` does; writing it by hand shows how `map` itself could be defined.

### Worked example 5: reversing a list

```haskell
rev [] = []
rev (x:xs) = rev xs ++ [x]
```

The head x is moved to the end by appending `[x]` to the reversed tail. Note the brackets around x: `++` needs a list on each side.

```
rev [1, 2, 3, 4]
= rev [2, 3, 4] ++ [1]
= (rev [3, 4] ++ [2]) ++ [1]
= ((rev [4] ++ [3]) ++ [2]) ++ [1]
= (((rev [] ++ [4]) ++ [3]) ++ [2]) ++ [1]
= ((([] ++ [4]) ++ [3]) ++ [2]) ++ [1]
= [4,3,2,1]
```

## Choosing between colon and double-plus

| You want to | Use | Example | Result |
|---|---|---|---|
| Put one item at the front | `item : list` | `0 : [1, 2]` | `[0,1,2]` |
| Put one item at the end | `list ++ [item]` | `[1, 2] ++ [3]` | `[1,2,3]` |
| Join two lists | `list ++ list` | `[1] ++ [2, 3]` | `[1,2,3]` |

The colon takes an item on its left and a list on its right. The `++` operator takes a list on each side.

## Exam technique

- **Name the parts.** In your pattern, use `(x:xs)` and say what x and xs are.
- **Write the base case first.** Decide what the function returns for `[]`, or for a single-item list if an empty list has no answer.
- **Trace by substitution** on a short list, as in the `total` example.
- **Wrap single items** in brackets before `++`.
- **Test before head or tail** unless the pattern already guarantees the list is not empty.

## Common mistakes

- Giving the tail as a single value rather than a list.
- Writing `xs ++ x` instead of `xs ++ [x]`.
- Omitting the base case, so the function fails on `[]`.
- Missing brackets round `(x:xs)`.
- Confusing `length`, which counts items, with `head`, which returns one.
- Forgetting that `null` returns True for the **empty** list.

## Next steps

- [Lists in functional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-revision-notes/)
- [Lists in functional programming practice questions](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-practice/)
- [Writing functional programs study guide](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.3 Lists in functional programming.
