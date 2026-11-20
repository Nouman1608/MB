---
title: "AQA A-Level Computer Science (7517): Lists in Functional Programming -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.12.3 questions with answers: head and tail, the empty list, list operations and writing and tracing recursive list functions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Lists in functional programming study guide](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming/) | [Lists in functional programming revision notes](/resources/aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes/)

Use a Haskell-style notation: `head xs`, `tail xs`, `null xs`, `length xs`, `x : xs` (prepend), `xs ++ ys` (join two lists) and `[]` (empty list). A list pattern `(x:xs)` has head x and tail xs.

---

## Section A

**1.** State the head and the tail of the list `[7, 2, 9]`. **[2]**

**2.** State the result of `tail [5]`. **[1]**

**3.** State the result of `null []`. **[1]**

**4.** Give an expression that constructs an empty list. **[1]**

**5.** State why `head []` is an error. **[1]**

## Section B

**6.** Let `xs = [4, 3, 5]`. Evaluate each expression.

**(a)** `head (tail xs)` **[1]**
**(b)** `tail (tail xs)` **[1]**
**(c)** `length (9 : xs)` **[1]**
**(d)** `xs ++ [8]` **[1]**
**(e)** `null (tail (tail (tail xs)))` **[1]**

**7.** Explain the difference between prepending an item to a list and appending an item to a list, giving the expression for each using the item 6 and the list `[1, 2]`. **[4]**

**8.** The function `size` is defined as:

```
size []     = 0
size (x:xs) = 1 + size xs
```

**(a)** State the purpose of the first line. **[1]**
**(b)** Trace the evaluation of `size [8, 6, 4]`. **[3]**

**9.** Write a recursive function `total` that returns the sum of a list of integers, with `total []` equal to 0. Show that `total [3, 1, 4]` is 8. **[4]**

**10.** The function `join` is defined as:

```
join []     ys = ys
join (x:xs) ys = x : join xs ys
```

Trace `join [1, 2] [3, 4]`, showing each step. **[4]**

**11.** Write a recursive function `last'` that returns the last element of a non-empty list, so that `last' [4, 3, 5]` is 5. State the base case. **[4]**

**12.** Write a recursive function `member` so that `member 5 [4, 3, 5]` is True and `member 7 [4, 3, 5]` is False. **[4]**

**13.** Trace `reverse' [1, 2, 3]` where:

```
reverse' []     = []
reverse' (x:xs) = reverse' xs ++ [x]
```
**[4]**

**14.** Using `map`, `filter` and `foldl`, write an expression that gives the sum of the doubled values of the numbers greater than 3 in the list `[4, 3, 5, 1]`, and state the result. **[4]**

**15.** Explain why building a long list by repeatedly prepending is more efficient than by repeatedly appending. **[2]**

---

## Answers

**1.** Head is 7 [1]; tail is `[2, 9]` [1].

**2.** `[]` (the empty list) [1].

**3.** True [1].

**4.** `[]` [1].

**5.** The empty list has no first element, so there is no head to return [1].

**6. (a)** 3 [1].
**(b)** `[5]` [1].
**(c)** 4 [1].
**(d)** `[4, 3, 5, 8]` [1].
**(e)** True [1].

**7.** Prepending adds an item to the front of the list [1]: `6 : [1, 2]` gives `[6, 1, 2]` [1]. Appending adds an item to the end [1]: `[1, 2] ++ [6]` gives `[1, 2, 6]` [1].

**8. (a)** It is the base case: the size of the empty list is 0, and it ends the recursion [1].
**(b)** size [8, 6, 4] = 1 + size [6, 4] [1]; = 1 + (1 + size [4]) = 1 + (1 + (1 + size [])) [1]; = 1 + (1 + (1 + 0)) = 3 [1].

**9.**
```
total []     = 0
total (x:xs) = x + total xs
```
Base case [1]; recursive case with head added to the total of the tail [1]. Trace: total [3, 1, 4] = 3 + total [1, 4] = 3 + (1 + (4 + total [])) [1] = 3 + (1 + (4 + 0)) = 8 [1].

**10.** join [1, 2] [3, 4] = 1 : join [2] [3, 4] [1]; = 1 : (2 : join [] [3, 4]) [1]; = 1 : (2 : [3, 4]) [1]; = [1, 2, 3, 4] [1].

**11.**
```
last' [x]    = x
last' (_:xs) = last' xs
```
Base case: a list with one element, whose last element is that element [1]; the pattern `[x]` correct [1]; recursive case on the tail [1]; the recursion always works on a shorter list, so it reaches the base case [1].

**12.**
```
member _ []     = False
member y (x:xs) = (y == x) || member y xs
```
Base case: nothing is in the empty list, so False [1]; compare y with the head [1]; otherwise search the tail [1]; use of OR so that a match gives True [1].

**13.** reverse' [1, 2, 3] = reverse' [2, 3] ++ [1] [1]; = (reverse' [3] ++ [2]) ++ [1] [1]; = ((reverse' [] ++ [3]) ++ [2]) ++ [1] = (([] ++ [3]) ++ [2]) ++ [1] [1]; = [3, 2, 1] [1].

**14.** `foldl (+) 0 (map (\x -> x * 2) (filter (\x -> x > 3) [4, 3, 5, 1]))` [3: 1 for filter with the correct condition, 1 for map doubling, 1 for foldl (+) 0]; filter gives [4, 5], map gives [8, 10], so the result is 18 [1].

**15.** Prepending takes one step however long the list is [1]; appending has to rebuild the whole list, taking a step for each element already in the list, so repeated appending takes much longer [1].

---

## Where marks are usually lost

- Treating the tail as a single item instead of a list.
- Taking the head or tail of the empty list.
- Confusing prepend with append, or appending a single item rather than a one-element list.
- Writing a recursive case with no base case.
- Recursing on the whole list rather than the tail.
