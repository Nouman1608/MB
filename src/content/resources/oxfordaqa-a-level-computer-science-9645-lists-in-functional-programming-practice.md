---
title: "OxfordAQA A-Level Computer Science (9645): Lists in functional programming -- Practice Questions"
seoTitle: "OxfordAQA 9645 Functional Lists Practice Questions"
resourceType: "practice-questions"
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
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.12.3 Lists in functional programming: head and tail, list operations and recursive list functions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.12.3 Lists in functional programming** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: Haskell lists, head and tail, the list operations, and recursive functions using `(x:xs)` patterns. Code is Haskell.

Related pages: [lists in functional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming/) ·
[lists in functional programming revision notes](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming-revision-notes/)

## Section A

**1.** State the head and the tail of the list `[6, 1, 9, 4]`. **[2]**

**2.** State the head and the tail of the list `[3]`. **[2]**

**3.** Evaluate each expression.

**(a)** `length (tail [2, 4, 6, 8])` **[1]**
**(b)** `[1, 2] ++ [3]` **[1]**
**(c)** `7 : [8, 9]` **[1]**
**(d)** `null (tail [5])` **[1]**

**4.** A student writes `[1, 2, 3] ++ 4` to add 4 to the end of a list. Explain the error and correct it. **[2]**

## Section B

**5.** The function `addOne` is defined as follows.

```haskell
addOne [] = []
addOne (x:xs) = (x + 1) : addOne xs
```

**(a)** State what x and xs refer to when `addOne [5, 0, 9]` is evaluated. **[2]**
**(b)** Evaluate `addOne [5, 0, 9]`, showing each step. **[3]**

**6.** Write a recursive Haskell function `multAll` that returns the product of all the numbers in a list. Give the base case and the recursive case, and show that `multAll [2, 5, 3]` evaluates to 30. **[4]**

**7.** The function `lastItem` returns the last item of a non-empty list.

```haskell
lastItem [x] = x
lastItem (x:xs) = lastItem xs
```

**(a)** Explain why the base case is a list with one item rather than the empty list. **[1]**
**(b)** Show, step by step, that `lastItem [4, 8, 2]` evaluates to 2. **[2]**

**8.** A function is defined by

```haskell
rev [] = []
rev (x:xs) = rev xs ++ [x]
```

**(a)** Evaluate `rev [3, 1, 2]`, showing each step. **[3]**
**(b)** Explain why x is written as `[x]` in the second equation. **[1]**

**9.** Explain what happens when `head []` is evaluated, and describe how a programmer can prevent the problem. **[2]**

**10.** The function `join` combines two lists.

```haskell
join [] ys = ys
join (x:xs) ys = x : join xs ys
```

**(a)** Evaluate `join [1, 2] [3]`, showing each step. **[3]**
**(b)** State which built-in Haskell operator gives the same result as `join`. **[1]**

**11.** Evaluate each expression.

**(a)** `head (tail [9, 8, 7])` **[1]**
**(b)** `length ([1] ++ [2, 3])` **[1]**
**(c)** `null (tail [4])` **[1]**
**(d)** `0 : [5]` **[1]**

**12.** The function `allPositive` returns True if every number in a list is greater than 0.

**(a)** Write a recursive Haskell definition of `allPositive`, using patterns for the empty list and for `(x:xs)`. **[3]**
**(b)** Evaluate `allPositive [3, 5, 0]` by substitution. **[2]**

## Answers

**1.** Head: **6** **[1]**; tail: **[1, 9, 4]** **[1]**. **[2]**

**2.** Head: **3** **[1]**; tail: the empty list **[]** **[1]**. **[2]**

**3. (a)** The tail is `[4,6,8]`, so the length is **3** **[1]**
**(b)** `[1,2,3]` **[1]**
**(c)** `[7,8,9]` **[1]**
**(d)** `tail [5]` is `[]`, so `null` gives **True** **[1]**

**4.** The operator `++` joins two lists, but 4 is a single item, not a list **[1]**. Correct form: `[1, 2, 3] ++ [4]` **[1]**. **[2]**

**5. (a)** x refers to the head, the number **5**, and xs refers to the tail, the list **[0, 9]** **[1] [1]**. **[2]**
**(b)** `addOne [5, 0, 9]` = `6 : addOne [0, 9]` **[1]** = `6 : (1 : addOne [9])` = `6 : (1 : (10 : addOne []))` **[1]** = `6 : (1 : (10 : []))` = **[6,1,10]** **[1]**. **[3]**

**6.** Example answer:

```haskell
multAll [] = 1                      -- [1] base case; 1 is the identity for multiplication
multAll (x:xs) = x * multAll xs     -- [1] recursive case on head and tail
```

`multAll [2, 5, 3]` = 2 * (5 * (3 * multAll [])) = 2 * (5 * (3 * 1)) **[1]** = 2 * 15 = **30** **[1]**. **[4]**

**7. (a)** An empty list has no last item, so the function must stop when one item is left **[1]**.
**(b)** `lastItem [4, 8, 2]` = `lastItem [8, 2]` **[1]** = `lastItem [2]` = **2** **[1]**. **[2]**

**8. (a)** `rev [3, 1, 2]` = `rev [1, 2] ++ [3]` **[1]** = `(rev [2] ++ [1]) ++ [3]` = `((rev [] ++ [2]) ++ [1]) ++ [3]` **[1]** = `[2] ++ [1]` then `++ [3]` = **[2,1,3]** **[1]**. **[3]**
**(b)** `++` joins two lists, so the single item x must be put in a list **[1]**.

**9.** The empty list has no first item, so `head []` produces an error **[1]**. The programmer can test with `null` first, or use patterns so that the empty list has its own equation **[1]**. **[2]**

**10. (a)** `join [1, 2] [3]` = `1 : join [2] [3]` **[1]** = `1 : (2 : join [] [3])` **[1]** = `1 : (2 : [3])` = **[1,2,3]** **[1]**. **[3]**
**(b)** `++` **[1]**

**11. (a)** The tail is `[8,7]` and its head is **8** **[1]**
**(b)** `[1] ++ [2, 3]` is `[1,2,3]`, so the length is **3** **[1]**
**(c)** `tail [4]` is the empty list, so `null` gives **True** **[1]**
**(d)** `[0,5]` **[1]**

**12. (a)** Example answer:

```haskell
allPositive [] = True                          -- [1] base case: no number fails
allPositive (x:xs) = x > 0 && allPositive xs   -- [1] test the head, [1] recurse on the tail
```

**[3]**
**(b)** `allPositive [3, 5, 0]` = `3 > 0 && allPositive [5, 0]` = `True && (5 > 0 && allPositive [0])` **[1]** = `True && (True && (0 > 0 && allPositive []))` = `True && (True && (False && True))` = **False** **[1]**. **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.3 Lists in functional programming.
