---
title: "AQA A-Level Computer Science (7517): Writing Functional Programs"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.12.2: constructing simple functional programs and using the higher-order functions map, filter and reduce or fold, with checked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.12.2 Writing functional programs** in AQA A-Level Computer Science (7517). The specification asks you to **show experience of constructing simple programs in a functional programming language**, and to know what a **higher-order function** is. You should have experience of using **map, filter and reduce (or fold)** in a functional language. The specification lists Haskell, Standard ML, Scheme and Lisp as functional languages, and Python, F#, C#, Scala, Java 8, Delphi and VB.NET as languages with built-in support for the functional paradigm alongside others.

The wider [fundamentals of functional programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/) covers all of section 4.12. This page gives a working method for writing small programs. Examples are shown in a Haskell-style notation, with the same idea in Python alongside, and every result was checked by running the Python version.

Condensed notes are in the [writing functional programs revision notes](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes/), and exam-style questions are in the [writing functional programs practice questions](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-practice/).

## Higher-order functions

A function is **higher-order** if it **takes a function as an argument, or returns a function as a result, or does both**. This is possible because functions are first-class objects (4.12.1). The three standard examples process lists, and they replace the loops of imperative programs.

| Function | What it does | Type (in Haskell style) |
|---|---|---|
| **map** | Applies a function to **every element** of a list and returns the list of results | (a → b) → [a] → [b] |
| **filter** | Returns a list of **exactly the elements that satisfy a condition** | (a → Boolean) → [a] → [a] |
| **reduce / fold** | **Reduces a list to a single value** by repeatedly applying a combining function | (b → a → b) → b → [a] → b |

Note that map and filter return **lists**, and the original list is not changed (it is immutable). Fold returns a **single value**.

## Anonymous functions (lambda expressions)

Higher-order functions are often given a short function with no name, written as a **lambda expression**. In Haskell-style notation `\x -> x * 2` means "the function that takes x and returns x * 2". In Python it is `lambda x: x * 2`. Operators can also be passed in brackets: `(+)` is the addition function.

## map

`map f list` applies `f` to each element in turn.

```
map (\x -> x * 2) [3, 1, 4]        -- gives [6, 2, 8]
```

Python: `list(map(lambda x: x * 2, [3, 1, 4]))` gives `[6, 2, 8]`.

The result has **the same length** as the input. Further examples:

- `map length ["tree", "sky", "moon"]` gives `[4, 3, 4]`.
- `map toUpper "abc"` gives `"ABC"` (a string is a list of characters).

## filter

`filter p list` keeps only the elements for which the condition `p` is True.

```
filter (\x -> x > 2) [3, 1, 4, 1, 5]    -- gives [3, 4, 5]
```

The result is **the same length or shorter**. The condition function must return a Boolean. Order is preserved.

## reduce or fold

`fold f start list` combines the elements one at a time, beginning with the `start` value.

```
foldl (+) 0 [3, 1, 4]       -- ((0 + 3) + 1) + 4 = 8
```

Python: `functools.reduce(lambda acc, x: acc + x, [3, 1, 4], 0)` gives `8`.

Step by step, with accumulator `acc`:

| Element | acc before | acc after |
|---|---|---|
| 3 | 0 | 3 |
| 1 | 3 | 4 |
| 4 | 4 | 8 |

The starting value matters: for a sum it is 0, and for a product it is 1. Other uses:

- Product: `foldl (*) 1 [1, 2, 3, 4]` gives `24`.
- Maximum: `foldl max 3 [9, 2]` gives `9` (starting from the first element).
- Counting: `foldl (\acc x -> acc + 1) 0 [5, 6, 7]` gives `3`.
- Joining strings: `foldl (++) "" ["a", "b", "c"]` gives `"abc"`.

**Direction.** `foldl` works from the **left**; `foldr` works from the **right**. For operations such as addition the answer is the same, but not for subtraction:

- `foldl (-) 0 [1, 2, 3]` = ((0 − 1) − 2) − 3 = **−6**
- `foldr (-) 0 [1, 2, 3]` = 1 − (2 − (3 − 0)) = **2**

Many languages call the left fold `reduce`; check the definition if a question uses that word.

## Combining the three

A program is often a **pipeline**: filter the data, transform it with map, then reduce to an answer.

**Worked example 1: the sum of the squares of the even numbers from 1 to 10.**

1. Filter the even numbers: `filter even [1..10]` gives `[2, 4, 6, 8, 10]`.
2. Square each: `map (\x -> x * x) [2, 4, 6, 8, 10]` gives `[4, 16, 36, 64, 100]`.
3. Sum them: `foldl (+) 0 [4, 16, 36, 64, 100]` gives `220`.

Written as one expression:

```
foldl (+) 0 (map (\x -> x * x) (filter even [1..10]))     -- 220
```

**Worked example 2: how many marks are above 50?** For the list `[72, 45, 88, 50, 51]`:

```
length (filter (\m -> m > 50) [72, 45, 88, 50, 51])     -- 3
```

The filter keeps 72, 88 and 51 (50 is not greater than 50), and `length` counts them: 3.

**Worked example 3: the mean.** For `[7, 9, 5, 3]`, the mean is the sum divided by the count:

```
mean xs = foldl (+) 0 xs / length xs      -- 24 / 4 = 6
```

(In a typed language, you may need to convert the length to a decimal type. Say so if the question's language requires it.)

## Writing your own functions

A function is defined by giving it a name, parameters and a body expression. There are no assignments to change variables: the function **returns a new value**.

```
square x = x * x
isLong s = length s > 5
average a b = (a + b) / 2
```

**Recursion** replaces loops where no suitable higher-order function exists. A recursive definition has a **base case** and a **recursive case**:

```
total []     = 0
total (x:xs) = x + total xs
```

`total [3, 1, 4]` = 3 + (1 + (4 + 0)) = 8. List patterns such as `(x:xs)` are explained in 4.12.3.

**Worked example 4: a function that uses a higher-order function.** "Return a list of the lengths of all words longer than 3 characters".

```
longLengths ws = map length (filter (\w -> length w > 3) ws)
```

For `["tree", "sky", "moon"]` the filter keeps `["tree", "moon"]` and map gives `[4, 4]`.

## Why use this style?

- The code says **what** is wanted, not the steps of a loop, so it is short and easier to check.
- Data is not changed, and functions have no side effects, so pieces can be tested separately.
- `map` and `filter` handle each element independently, which makes the work easy to split across processors or machines (see Big Data, 4.11.1).

## Common mistakes

- Expecting **map** or **filter** to change the original list. They return a new list.
- Using **filter** with a function that does not return a Boolean.
- Forgetting the **starting value** in a fold, or using 0 for a product.
- Mixing up the arguments: map takes the **function first**, then the list.
- Assuming **foldl** and **foldr** always give the same answer.
- Writing a recursive function with **no base case**.
- Writing a loop and variable assignment in a question that asks for a functional solution.

## Exam technique

- Read the question for the verb: "each" suggests map; "only those" suggests filter; "single value" suggests fold.
- Write the pipeline from the inside out, and check it on a short list by hand.
- State the language you are using in your answer if the question allows a choice, and keep its syntax consistent.
- Show intermediate lists when asked to trace.

## More resources on this topic

- [Writing functional programs revision notes](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes/)
- [Writing functional programs practice questions](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-practice/)
- [Lists in functional programming study guide](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming/)

*Written against the AQA A-level Computer Science (7517) specification, 4.12.2 Writing functional programs. Always check the current specification on the AQA website.*
