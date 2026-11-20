---
title: "OxfordAQA A-Level Computer Science (9645): Writing functional programs -- Practice Questions"
seoTitle: "OxfordAQA 9645 Writing Functional Programs Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12 – Functional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 12.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "functional-programming"
  - qualification: "a-level"
    topic: "functional-programming"
    subtopic: "writing-functional-programs-oxfordaqa-alevel-cs"
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.12.2 Writing functional programs: Haskell operators, recursion, pattern matching, map, filter and folds."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.12.2 Writing functional programs** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: defining and using Haskell functions, arithmetic and Boolean operators, recursion with pattern matching, and the higher-order functions map, filter, foldl and foldr. Code is Haskell.

Related pages: [writing functional programs study guide](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/) ·
[writing functional programs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-revision-notes/)

## Section A

**1.** Evaluate `div 29 6` and `mod 29 6`. **[2]**

**2.** A function is defined by `isTeen n = n > 12 && n < 20`.

**(a)** Evaluate `isTeen 13` and `isTeen 20`. **[2]**
**(b)** State the value of `not (isTeen 12)`. **[1]**

**3.** Evaluate `map (* 4) [3, 0, 6]`. **[1]**

**4.** Evaluate `filter (> 49) [62, 48, 50, 91, 77]`. **[1]**

## Section B

**5.** The function `power` is defined as follows.

```haskell
power b 0 = 1
power b e = b * power b (e - 1)
```

**(a)** Identify the base case and the recursive case. **[2]**
**(b)** Show, line by line, how `power 3 4` is evaluated. **[3]**

**6.** A student writes this definition of the factorial function.

```haskell
fact 0 = 1
fact n = n * fact n - 1
```

Explain what goes wrong when `fact 3` is evaluated, and give the corrected second equation. **[3]**

**7.** Write a recursive Haskell function `sumTo` such that `sumTo n` is the sum of the whole numbers from 1 to n, with `sumTo 0` equal to 0. Show that `sumTo 4` evaluates to 10. **[4]**

**8.** Evaluate each expression.

**(a)** `foldl (+) 0 [4, 9, 2]` **[1]**
**(b)** `foldl (*) 1 [3, 2, 5]` **[1]**
**(c)** `foldl (-) 50 [5, 10, 15]` **[1]**
**(d)** `foldr (-) 0 [1, 2, 3, 4]` **[1]**

**9.** Write one Haskell expression that finds the sum of the squares of those numbers in `[2, 7, 4, 9, 5]` that are greater than 4. Show the value of each stage. **[5]**

**10.** A sequence is defined by t 0 = 2, t 1 = 3 and, for larger n, each term is the sum of the two terms before it.

**(a)** Write a Haskell definition of `t` using pattern matching. **[3]**
**(b)** Calculate the value of `t 5`. **[2]**

**11.** Evaluate `foldr (+) 0 (map (* 2) (filter (> 3) [5, 1, 4, 3]))`, showing the result of each stage. **[3]**

**12.** State the value of `7 / 2` and the value of `div 7 2` in Haskell, and explain why they differ. **[2]**

## Answers

**1.** `div 29 6` = **4** **[1]**; `mod 29 6` = **5** **[1]**. **[2]**

**2. (a)** `isTeen 13` is **True** **[1]**; `isTeen 20` is **False** because 20 is not less than 20 **[1]**. **[2]**
**(b)** isTeen 12 is False (12 is not greater than 12), so `not` gives **True** **[1]**.

**3.** `[12,0,24]` **[1]**

**4.** `[62,50,91,77]` (48 is the only value removed) **[1]**

**5. (a)** Base case: `power b 0 = 1` **[1]**. Recursive case: `power b e = b * power b (e - 1)` **[1]**. **[2]**
**(b)** `power 3 4 = 3 * power 3 3` **[1]**
= `3 * (3 * (3 * (3 * power 3 0)))` after the calls down to the base case **[1]**
= `3 * (3 * (3 * (3 * 1)))` = **81** **[1]**
**[3]**

**6.** Without brackets, `fact n - 1` is read as `(fact n) - 1` **[1]**. So `fact 3` calls `fact 3` again with the same argument and never reaches the base case, so it recurses forever **[1]**. The corrected equation is `fact n = n * fact (n - 1)` **[1]**. **[3]**

**7.** Example answer:

```haskell
sumTo 0 = 0                    -- [1] base case
sumTo n = n + sumTo (n - 1)    -- [1] recursive case, with brackets
```

`sumTo 4 = 4 + sumTo 3 = 4 + (3 + sumTo 2) = 4 + (3 + (2 + sumTo 1)) = 4 + (3 + (2 + (1 + 0)))` [1] = 4 + (3 + (2 + 1)) = 4 + 6 = **10** [1]. **[4]**

**8. (a)** 15 **[1]**
**(b)** 30 **[1]**
**(c)** ((50 − 5) − 10) − 15 = **20** **[1]**
**(d)** 1 − (2 − (3 − (4 − 0))) = **-2** **[1]**

**9.** `foldl (+) 0 (map (^ 2) (filter (> 4) [2, 7, 4, 9, 5]))` **[2]** (award **[1]** for the filter and map in the correct nesting and **[1]** for the fold with initial value 0). Stages: filter gives `[7,9,5]` **[1]**; map gives `[49,81,25]` **[1]**; the fold gives **155** **[1]**. **[5]**

**10. (a)** Example answer:

```haskell
t 0 = 2
t 1 = 3
t n = t (n - 1) + t (n - 2)
```

Award **[1]** for each base case and **[1]** for the recursive case with correct brackets. **[3]**
**(b)** The terms are 2, 3, 5, 8, 13, 21 **[1]**, so `t 5` = **21** **[1]**. **[2]**

**11.** `filter (> 3) [5, 1, 4, 3]` gives `[5,4]` **[1]**; `map (* 2)` gives `[10,8]` **[1]**; `foldr (+) 0` gives 10 + (8 + 0) = **18** **[1]**. **[3]**

**12.** `7 / 2` is **3.5** and `div 7 2` is **3** **[1]**. The `/` operator is real (fractional) division, whereas `div` is whole-number division that discards the remainder **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.2 Writing functional programs.
