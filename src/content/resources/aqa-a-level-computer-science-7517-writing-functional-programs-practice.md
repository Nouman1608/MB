---
title: "AQA A-Level Computer Science (7517): Writing Functional Programs -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.12.2 questions with answers: evaluating and writing map, filter and fold expressions and building simple functional programs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Writing functional programs study guide](/resources/aqa-a-level-computer-science-7517-writing-functional-programs/) | [Writing functional programs revision notes](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes/)

Use a Haskell-style notation: `\x -> x + 1` is a function with parameter x; `map`, `filter` and `foldl` take the function first; `foldl f start list` combines from the left. You may answer in any functional language or in a language with functional support, provided you say which and your syntax is consistent.

---

## Section A

**1.** State what is meant by a higher-order function. **[1]**

**2.** State what the function filter returns. **[1]**

**3.** Name the higher-order function that reduces a list of values to a single value. **[1]**

**4.** Evaluate `map (\x -> x + 3) [2, 5, 8]`. **[1]**

**5.** Evaluate `filter (\x -> x > 4) [3, 6, 4, 9]`. **[1]**

## Section B

**6.** Evaluate each expression.

**(a)** `foldl (+) 0 [2, 4, 6]` **[1]**
**(b)** `foldl (*) 1 [2, 3, 4]` **[1]**
**(c)** `foldl (-) 0 [5, 2, 1]` **[2]**

**7.** Trace `foldl (+) 0 [3, 1, 4]`, showing the value of the accumulator after each element is processed. **[3]**

**8.** Write a single expression, using map and foldl, that gives the sum of the squares of the numbers in the list `[1, 2, 3, 4]`, and state its value. **[3]**

**9.** The list `prices` is `[12, 5, 30, 8, 20]`. A shop gives a reduction of 2 on every price that is over 10.

**(a)** Write an expression to produce the list of prices over 10. **[2]**
**(b)** Write an expression to reduce each price in that list by 2. **[2]**
**(c)** Write an expression to give the total of the reduced prices, and state its value. **[3]**

**10.** The list `words` is `["apple", "fig", "banana", "kiwi", "cherry"]`. Write an expression, using filter and one other function, to find how many words have more than 4 letters, and state the result. **[3]**

**11.** Define a function `sumList` using recursion, so that `sumList []` is 0 and `sumList [3, 1, 4]` is 8. Explain the base case. **[4]**

**12.** Write a function `countEven` that takes a list of integers and returns how many are even, using a fold, and show how it evaluates `countEven [2, 3, 4, 6, 7]`. **[4]**

**13.** Explain why `foldl (-) 0 [5, 2, 1]` and `foldr (-) 0 [5, 2, 1]` give different results, and evaluate the second. **[3]**

**14.** A programmer says: "Replacing my for loop with map and filter makes the program shorter and easier to run on several processors." Evaluate this claim. **[4]**

---

## Answers

**1.** A function that takes a function as an argument, or returns a function as its result, or both [1].

**2.** A list of exactly those elements of the original list that satisfy the condition [1].

**3.** reduce (or fold) [1].

**4.** [5, 8, 11] [1].

**5.** [6, 9] [1].

**6. (a)** 12 [1].
**(b)** 24 [1].
**(c)** ((0 − 5) − 2) − 1 [1] = −8 [1].

**7.**

| Element | Accumulator after |
|---|---|
| (start) | 0 |
| 3 | 3 |
| 1 | 4 |
| 4 | 8 |

Start value 0 shown [1]; 3 then 4 correct [1]; final value 8 [1].

**8.** `foldl (+) 0 (map (\x -> x * x) [1, 2, 3, 4])` [2: 1 for map with the squaring function, 1 for foldl (+) 0 applied to the result]; the value is 1 + 4 + 9 + 16 = 30 [1].

**9. (a)** `filter (\p -> p > 10) prices` [1] giving [12, 30, 20] [1].
**(b)** `map (\p -> p - 2) (filter (\p -> p > 10) prices)` [1] giving [10, 28, 18] [1].
**(c)** `foldl (+) 0 (map (\p -> p - 2) (filter (\p -> p > 10) prices))` [2]; value 10 + 28 + 18 = 56 [1].

**10.** `length (filter (\w -> length w > 4) words)` [2: 1 for the filter with the correct condition, 1 for length applied to the result]; the result is 3 (apple, banana, cherry) [1].

**11.**
```
sumList []     = 0
sumList (x:xs) = x + sumList xs
```
Base case written correctly [1]; recursive case adding the head to the sum of the tail [1]. The base case is the empty list, for which the sum is 0 [1]; it stops the recursion, because the recursive case always works on a shorter list and eventually reaches the empty list [1].

**12.**
```
countEven xs = foldl (\acc x -> if even x then acc + 1 else acc) 0 xs
```
Fold with a start value of 0 [1]; function that adds 1 only for even numbers [1]. Trace: 2 gives 1; 3 stays 1; 4 gives 2; 6 gives 3; 7 stays 3 [1]; result 3 [1].

**13.** foldl combines from the left and foldr from the right, and subtraction depends on the order [1]. foldr (-) 0 [5, 2, 1] = 5 − (2 − (1 − 0)) [1] = 4 [1].

**14.** Partly true [1]. The functional version says what is wanted without loop counters and variables being changed, so it is usually shorter and easier to check [1]. Map and filter treat each element separately, and they do not alter the original list, so different elements can be handled by different processors without conflict [1]. However, the claim is not true in every case: a fold with a dependent step cannot simply be split, and a program is only faster if there is enough work to share [1].

---

## Where marks are usually lost

- Writing the list before the function in map, filter and fold.
- Forgetting the starting value in a fold, or using the wrong one.
- Expecting map or filter to change the original list.
- Giving a recursive function with no base case.
- Using loops and assignment in an answer that asks for a functional solution.
