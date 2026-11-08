---
title: "AQA A-Level Computer Science: Fundamentals of Functional Programming — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Fundamentals of functional programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-functional-programming"
description: "Original practice questions with answers on function types, partial application, composition, map, filter, fold and lists for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Functional programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/) | [Functional programming revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-revision-notes/)

These questions cover section 4.12 of the AQA A-Level Computer Science (7517) specification: the functional
programming paradigm (4.12.1), writing functional programs (4.12.2) and list processing (4.12.3). Code is
written in Haskell notation: `foldl` folds from the left, `foldr` from the right, `:` prepends and `++` joins
lists.

---

## Section A: the paradigm

**1.** A function is defined as f: {1, 2, 3} -> {0, 1, 2, ..., 9} with the rule f(x) = 2x.
**(a)** State the domain and the co-domain of f. **[2]**
**(b)** List the members of the co-domain that are outputs of f, and explain why this does not stop
{0, ..., 9} being a valid co-domain. **[2]**

**2.** Explain what is meant by saying that functions are **first-class objects**. **[3]**

**3.** The function `multiply` takes two integers and returns their product.
**(a)** Give its function type using the Cartesian product. **[1]**
**(b)** Explain why it can be said to take only one argument. **[1]**

**4.** A function is defined:
```haskell
volume :: Int -> Int -> Int -> Int
volume l w h = l * w * h
```
**(a)** State the type of `volume 2` and of `volume 2 3`. **[2]**
**(b)** State the value of `volume 2 3 4`. **[1]**
**(c)** Explain what is meant by **partial function application**, using `volume 2` as an example. **[2]**

**5.** f x = 3 * x and g x = x - 1, both with domain and co-domain the integers.
**(a)** Evaluate `(f . g) 5` and `(g . f) 5`. **[2]**
**(b)** Explain what is meant by the composition g ∘ f, stating which function is applied first. **[2]**

## Section B: higher-order functions

**6.** Define a **higher-order function**. **[1]**

**7.** Evaluate:
**(a)** `map (+3) [2, 4, 6]` **[1]**
**(b)** `filter (> 10) [5, 12, 8, 20]` **[1]**
**(c)** `foldl (*) 1 [1, 2, 3, 4]` **[1]**
**(d)** `foldl (-) 0 [5, 3, 1]` **[1]**
**(e)** `foldr (-) 0 [5, 3, 1]` **[2]**

**8.** `words = ["sun", "cloud", "rain", "sky"]`. Write a single expression using `filter`, `map` and a fold that
returns the total number of letters in the words longer than three letters, and state its value. **[4]**

**9.** For each, state whether `map`, `filter` or `fold` is most suitable: (a) converting a list of temperatures
from Celsius to Fahrenheit (b) finding the largest value in a list (c) keeping only the passwords at least 12
characters long. **[3]**

## Section C: lists

**10.** `xs = [7, 2, 9]`. State the result of:
**(a)** `head xs` **(b)** `tail xs` **(c)** `head (tail xs)` **(d)** `tail (tail (tail xs))`
**(e)** `null []` **(f)** `length xs` **(g)** `1 : xs` **(h)** `xs ++ [5]` **[8]**

**11.** Explain the difference between the head and the tail of a list. **[2]**

**12.** **(a)** Write a recursive function `len` that returns the length of a list, using head and tail
pattern matching. **[3]**
**(b)** Show how `len [7, 2, 9]` is evaluated. **[2]**

---

## Answers

**1. (a)** Domain: {1, 2, 3} [1]. Co-domain: {0, 1, 2, ..., 9} [1].
**(b)** {2, 4, 6} [1]. The co-domain is the set from which outputs are chosen; not every member has to be an
output [1].

**2.** A first-class object can appear in expressions [1], be assigned to a variable [1], and be passed as an
argument to a function and returned as the result of a function call [1].

**3. (a)** multiply: integer × integer -> integer [1].
**(b)** Its single argument is a **pair** of integers, e.g. (3, 4), from the Cartesian product integer × integer
[1].

**4. (a)** `volume 2 :: Int -> Int -> Int` [1]; `volume 2 3 :: Int -> Int` [1].
**(b)** **24** [1].
**(c)** Supplying fewer arguments than the function takes returns a **new function** that expects the remaining
arguments [1]: `volume 2` is a function that takes a width and a height and returns 2 × width × height [1].

**5. (a)** `(f . g) 5` = f(g(5)) = f(4) = **12** [1]; `(g . f) 5` = g(15) = **14** [1].
**(b)** Composition combines two functions to make a new function [1]; in g ∘ f, **f is applied first** and g is
applied to the result returned by f [1].

**6.** A function that takes a function as an argument, returns a function as its result, or both [1].

**7. (a)** `[5, 7, 9]` [1] **(b)** `[12, 20]` [1] **(c)** `24` [1]
**(d)** ((0 - 5) - 3) - 1 = **-9** [1]
**(e)** 5 - (3 - (1 - 0)) = 5 - 2 = **3** [1 working, 1 answer].

**8.**
```haskell
foldl (+) 0 (map length (filter (\w -> length w > 3) words))
```
`filter` with a correct condition [1] -> ["cloud", "rain"]; `map length` [1] -> [5, 4]; fold with `+` and 0 [1];
value **9** [1].

**9.** (a) `map` [1] (b) `fold` -- e.g. `foldl max` with a suitable starting value [1] (c) `filter` [1].

**10.** (a) `7` (b) `[2, 9]` (c) `2` (d) `[]` (e) `True` (f) `3` (g) `[1, 7, 2, 9]` (h) `[7, 2, 9, 5]`
[1 each].

**11.** The head is the **first element** of the list [1]; the tail is the **list** of all the remaining elements,
which may be the empty list [1].

**12. (a)**
```haskell
len :: [a] -> Int
len []     = 0
len (_:xs) = 1 + len xs
```
Base case for the empty list returning 0 [1]; pattern splitting head and tail [1]; recursive call on the tail
adding 1 [1].
**(b)** len [7, 2, 9] = 1 + len [2, 9] = 1 + (1 + len [9]) = 1 + (1 + (1 + len [])) [1] = 1 + 1 + 1 + 0 = **3** [1].

---

## Where marks are usually lost

- Composing in the wrong order: `(f . g) x` means g first.
- Giving the type of a partially applied function as a value, or dropping one of the remaining arrows.
- Folding subtraction from the wrong end.
- Writing `tail [9]` as `9` or "nothing" instead of `[]`.
- Writing the condition of `filter` correctly but then applying `map` to the original list rather than the
  filtered one.

## Frequently asked questions

**Will I have to write full Haskell programs in the exam?**
The written paper expects you to read and evaluate short functional expressions and to understand the terms. Writing
simple functional programs is part of the course experience the specification requires, so practise in a real
language.

**Is reduce the same as fold?**
Yes. The 7517 specification names the function "reduce or fold": it reduces a list to a single value by
repeatedly applying a combining function.
