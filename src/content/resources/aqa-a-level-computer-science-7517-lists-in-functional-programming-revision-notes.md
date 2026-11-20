---
title: "AQA A-Level Computer Science (7517): Lists in Functional Programming -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.12.3 recall: head and tail, the empty list, the seven list operations and recursive definitions of length, append, sum and reverse."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.12.3 Lists in functional programming**, AQA A-Level Computer Science (7517): a list as a **head and a tail**, the **empty list**, and the operations **head, tail, test for empty, length, construct empty, prepend and append**. Traced recursive definitions are in the [lists in functional programming study guide](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming/); questions are in the [lists in functional programming practice questions](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-practice/).

## Head and tail

`[4, 3, 5] = 4 : [3, 5]`

- **Head** = 4, the first element (an **item**).
- **Tail** = `[3, 5]`, the rest (a **list**).
- Fully: `4 : (3 : (5 : []))`.
- **Empty list** = `[]`: no head and no tail.
- `[5]` has head 5 and tail `[]`.

## The seven operations on `xs = [4, 3, 5]`

| Operation | Haskell-style | Python | Result |
|---|---|---|---|
| Head | `head xs` | `xs[0]` | 4 |
| Tail | `tail xs` | `xs[1:]` | `[3, 5]` |
| Test for empty | `null xs` | `len(xs) == 0` | False |
| Length | `length xs` | `len(xs)` | 3 |
| Construct empty list | `[]` | `[]` | `[]` |
| Prepend 9 | `9 : xs` | `[9] + xs` | `[9, 4, 3, 5]` |
| Append 9 | `xs ++ [9]` | `xs + [9]` | `[4, 3, 5, 9]` |

- `head []` and `tail []` are **errors**: test for empty first.
- Prepend: `item : list`. Append: `list ++ [item]` (two lists).
- Every operation returns a **new list**; the original is unchanged.

## Nested applications

| Expression | Value |
|---|---|
| `head (tail xs)` | 3 |
| `tail (tail xs)` | `[5]` |
| `tail (tail (tail xs))` | `[]` |
| `length (7 : xs)` | 4 |
| `head (xs ++ [1])` | 4 |

## Recursion on lists

Two cases: **base case** (`[]`) and **recursive case** (`x : xs`, using the tail).

```
length' []     = 0
length' (x:xs) = 1 + length' xs

append []     ys = ys
append (x:xs) ys = x : append xs ys

sumList []     = 0
sumList (x:xs) = x + sumList xs

member _ []     = False
member y (x:xs) = (y == x) || member y xs

reverse' []     = []
reverse' (x:xs) = reverse' xs ++ [x]
```

## Traces

- `length' [4, 3, 5]` = 1 + (1 + (1 + 0)) = 3.
- `append [1, 2] [3]` = 1 : (2 : [3]) = `[1, 2, 3]`.
- `sumList [3, 1, 4]` = 3 + (1 + (4 + 0)) = 8.
- `reverse' [1, 2, 3]` = (([] ++ [3]) ++ [2]) ++ [1] = `[3, 2, 1]`.

## Prepend versus append

| | Prepend | Append |
|---|---|---|
| Steps | One | One per element of the first list |
| Shape | `x : xs` | `xs ++ [x]` |
| Use | Preferred for building lists | Costs more on long lists |

## With higher-order functions

For `xs = [4, 3, 5]`: `map (\x -> x * 2) xs` gives `[8, 6, 10]`; `filter (\x -> x > 3) xs` gives `[4, 5]`; `foldl (+) 0 xs` gives 12.

## Key terms

| Term | Definition |
|---|---|
| Head | The first element of a list |
| Tail | The list of all elements after the head |
| Empty list | A list with no elements, written `[]` |
| Prepend | Add an item to the front of a list |
| Append | Add an item to the end of a list |
| Concatenate | Join two lists |
| Recursion | A function defined in terms of itself |
| Base case | The case that ends the recursion |
| Immutable | Cannot be changed after creation |

## Exam traps

- **The tail is a list, not an item.**
- **Test for empty** before taking a head or tail.
- **Prepend is `item : list`; append joins two lists** with `++`.
- **A recursive definition needs a base case.**
- **Recurse on the tail,** not the whole list.
- **Nested lists count as one element each.** `[[1, 2], [3]]` has length 2.
- **Operations return new lists.**

## Self-test

1. What is the head of `[7, 2, 9]`?
2. What is the tail of `[7, 2, 9]`?
3. What is the tail of `[5]`?
4. How is the empty list written?
5. What does `null []` return?
6. Prepend 1 to `[2, 3]`.
7. Append 1 to `[2, 3]`.
8. What is the length of `[[1, 2], [3]]`?
9. What is wrong with `head []`?
10. What is the base case of `length'`?
11. Why is prepending cheaper than appending?
12. Evaluate `head (tail [8, 6, 4])`.

**Answers**

1. 7.
2. `[2, 9]`.
3. `[]`.
4. `[]`.
5. True.
6. `[1, 2, 3]`.
7. `[2, 3, 1]`.
8. 2.
9. The empty list has no head, so it is an error.
10. `length' [] = 0`.
11. Prepending is one step; appending must rebuild the whole first list.
12. 6.

## Related resources

- [Lists in functional programming study guide](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming/)
- [Lists in functional programming practice questions](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-practice/)
- [Writing functional programs revision notes](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes/)
