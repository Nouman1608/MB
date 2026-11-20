---
title: "AQA A-Level Computer Science (7517): Writing Functional Programs -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of functional programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 12.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-functional-programming"
    subtopic: "writing-functional-programs-7517"
description: "Condensed AQA 7517 section 4.12.2 recall: higher-order functions, map, filter, reduce and fold, lambda expressions and pipelines, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.12.2 Writing functional programs**, AQA A-Level Computer Science (7517): construct simple programs in a functional language, and use the higher-order functions **map, filter and reduce or fold**. Worked pipelines are in the [writing functional programs study guide](/resources/aqa-a-level-computer-science-7517-writing-functional-programs/); questions are in the [writing functional programs practice questions](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-practice/).

## Higher-order function

A function that **takes a function as an argument, returns a function as a result, or does both**.

## The three standard functions

| Function | Does | Result | Haskell-style example |
|---|---|---|---|
| **map** | Applies a function to every element | List of the same length | `map (\x -> x * 2) [3, 1, 4]` gives `[6, 2, 8]` |
| **filter** | Keeps exactly the elements satisfying a condition | List, same length or shorter | `filter (\x -> x > 2) [3, 1, 4, 1, 5]` gives `[3, 4, 5]` |
| **reduce / fold** | Combines all elements into one value | A single value | `foldl (+) 0 [3, 1, 4]` gives `8` |

- Function first, list last.
- The original list is not changed.
- Fold needs a **starting value** (0 for sum, 1 for product, "" for strings).

Python equivalents: `map(lambda x: x * 2, xs)`, `filter(lambda x: x > 2, xs)`, `functools.reduce(lambda acc, x: acc + x, xs, 0)`.

## Lambda expressions

An unnamed function: `\x -> x * x` (Haskell style) or `lambda x: x * x` (Python). Operators can be passed in brackets: `(+)`.

## Fold trace

`foldl (+) 0 [3, 1, 4]`:

| Element | acc before | acc after |
|---|---|---|
| 3 | 0 | 3 |
| 1 | 3 | 4 |
| 4 | 4 | 8 |

**Direction:** `foldl` goes from the left, `foldr` from the right. They agree for addition but not subtraction.

- `foldl (-) 0 [1, 2, 3]` = ((0 − 1) − 2) − 3 = −6
- `foldr (-) 0 [1, 2, 3]` = 1 − (2 − (3 − 0)) = 2

## Common fold uses

| Task | Expression | Result for sample |
|---|---|---|
| Sum | `foldl (+) 0 [3, 1, 4]` | 8 |
| Product | `foldl (*) 1 [2, 3, 4]` | 24 |
| Count | `foldl (\acc x -> acc + 1) 0 [5, 6, 7]` | 3 |
| Join strings | `foldl (++) "" ["a", "b", "c"]` | "abc" |

## Pipelines

Filter, then map, then fold.

**Sum of squares of the even numbers 1 to 10:**

```
foldl (+) 0 (map (\x -> x * x) (filter even [1..10]))
```

filter gives `[2, 4, 6, 8, 10]`; map gives `[4, 16, 36, 64, 100]`; fold gives `220`.

**Count marks above 50 in `[72, 45, 88, 50, 51]`:** `length (filter (\m -> m > 50) marks)` gives 3.

## Writing functions

```
square x = x * x
longLengths ws = map length (filter (\w -> length w > 3) ws)

total []     = 0
total (x:xs) = x + total xs
```

- A recursive definition has a **base case** and a **recursive case**.
- Functions return new values; they do not change variables.

## Choosing the function

| Wording in the question | Likely function |
|---|---|
| "each", "every", "convert all" | map |
| "only those", "that satisfy", "remove" | filter |
| "total", "largest", "combine into one" | fold or reduce |
| "how many that..." | length of a filtered list |

## Languages

- Functional: Haskell, Standard ML, Scheme, Lisp.
- With built-in support for the paradigm: Python, F#, C#, Scala, Java 8, Delphi XE onwards, VB.NET 2008 onwards.

## Key terms

| Term | Definition |
|---|---|
| Higher-order function | A function that takes or returns a function |
| map | Applies a function to each element of a list, returning a list of results |
| filter | Returns the elements of a list that match a condition |
| reduce / fold | Reduces a list to a single value by repeatedly applying a combining function |
| Accumulator | The running value built up by a fold |
| Lambda expression | A function written without a name |
| Recursion | A function defined in terms of itself, with a base case |
| Pure function | A function with no side effects whose result depends only on its arguments |
| Pipeline | A chain of functions where each output feeds the next |

## Exam traps

- **map and filter return lists;** fold returns one value.
- **filter's function must return a Boolean.**
- **A fold needs a starting value** that suits the operation.
- **Function first, list second.**
- **foldl and foldr differ** for operations that are not order-independent.
- **No loops or variable assignment** in a functional answer.
- **A recursive function needs a base case.**

## Self-test

1. What makes a function higher-order?
2. What does map return?
3. What does filter return?
4. What does a fold return?
5. What is the starting value for a product fold?
6. Evaluate `map (\x -> x + 3) [2, 5, 8]`.
7. Evaluate `filter (\x -> x > 4) [3, 6, 4, 9]`.
8. Evaluate `foldl (+) 0 [2, 4, 6]`.
9. What is `foldl (-) 0 [5, 2, 1]`?
10. How many items might a filter return compared with its input?
11. Which function would you use to convert all words to upper case?
12. What is the base case in `total [] = 0`?

**Answers**

1. It takes a function as an argument, returns a function, or both.
2. A list of the results of applying the function to every element.
3. A list of the elements that satisfy the condition.
4. A single value.
5. 1.
6. [5, 8, 11].
7. [6, 9].
8. 12.
9. ((0 − 5) − 2) − 1 = −8.
10. The same number or fewer.
11. map.
12. The empty list, for which the total is 0.

## Related resources

- [Writing functional programs study guide](/resources/aqa-a-level-computer-science-7517-writing-functional-programs/)
- [Writing functional programs practice questions](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-practice/)
- [Functional programming paradigm revision notes](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-revision-notes/)
