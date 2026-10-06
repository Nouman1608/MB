---
title: "OxfordAQA A-Level Computer Science: Functional programming (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Functional Programming Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Functional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 12
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "functional-programming"
description: "Original Haskell practice questions with worked answers on function types, composition, recursion, map, filter, folds and lists for OxfordAQA A-level CS."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

This set covers section **3.12 Functional programming** (3.12.1 to 3.12.3) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Every question is on International A-level only content from the written Unit 4 paper. The specification says exam questions on this topic use Haskell, so all code here is Haskell.

Stuck on a question? The [study guide](/resources/oxfordaqa-a-level-computer-science-functional-programming/) explains each idea and the [revision notes](/resources/oxfordaqa-a-level-computer-science-functional-programming-revision-notes/) list the key facts. See also the [course hub](/boards/oxfordaqa/a-level/computer-science/), the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) and the [free diagnostics](/diagnostics/).

## Questions

**1.** A function has the type f: A → B. State what is meant by the domain and by the co-domain of f. **[2]**

**2.** For each number below, state the smallest of the sets ℕ, ℤ, ℚ and ℝ that contains it: 0, -12, 3.25. **[3]**

**3.** A Haskell function is defined as:

```haskell
boost g n = g n * 10
```

**(a)** State two things that a first-class object may do. **[2]**
**(b)** Explain why `boost` is a higher-order function. **[2]**
**(c)** Evaluate `boost (+4) 3`. **[1]**

**4.** Two functions on ℤ are defined by f(x) = 2x + 3 and g(y) = y².

**(a)** Evaluate (g ∘ f)(6) and (f ∘ g)(6). **[2]**
**(b)** Write a Haskell expression that applies the composition g ∘ f to 6. **[1]**
**(c)** A function p has type Char → ℕ and a function q has type ℕ → Boolean. State the type of q ∘ p. **[1]**

**5.** A ticket offer uses this function:

```haskell
eligible a h = (a >= 16 && h < 40) || a >= 65
```

Evaluate `eligible 17 45`, `eligible 70 50` and `eligible 16 39`. **[3]**

**6.** This function counts the digits of a positive whole number:

```haskell
digits 0 = 0
digits n = 1 + digits (n `div` 10)
```

**(a)** Identify the base case. **[1]**
**(b)** Trace the evaluation of `digits 4093`, showing each recursive call. **[3]**
**(c)** Explain why the brackets around ``n `div` 10`` are needed. **[1]**

**7.** A list is defined as `scores = [48, 73, 91, 55, 66]`. Evaluate:

**(a)** `filter (> 60) scores` **[1]**
**(b)** ``map (`div` 10) scores`` **[1]**
**(c)** `length (filter even scores)` **[2]**

**8.** **(a)** Evaluate `foldl (-) 100 [30, 25, 5]`, showing the bracketed expansion. **[2]**
**(b)** Evaluate `foldr (-) 100 [30, 25, 5]`, showing the bracketed expansion. **[2]**
**(c)** `foldl (+) 0 [30, 25, 5]` and `foldr (+) 0 [30, 25, 5]` give the same result. Explain why the two folds agree for `+` but not for `-`. **[2]**

**9.** A list is defined as `queue = [2, 9, 4]`. Evaluate:

**(a)** `head queue` **[1]**
**(b)** `tail queue` **[1]**
**(c)** `null queue` **[1]**
**(d)** `length (queue ++ [7])` **[1]**
**(e)** `tail (tail queue)` **[1]**
**(f)** Write `queue` in head:tail form. **[1]**

**10.** **(a)** Write a recursive Haskell function `listProduct` that returns the product of all the numbers in a list. The product of the empty list is 1. Use pattern matching on the head and tail. **[4]**
**(b)** Write an expression using a fold that gives the same result as `listProduct`, and state its value for the list [3, 4, 5]. **[2]**

**11.** A shop stores item prices (in whole units) in a list:

```haskell
prices = [120, 45, 300, 80, 15]
addTax p = p + p `div` 5
```

**(a)** Evaluate `filter (< 100) prices`. **[1]**
**(b)** Evaluate `map addTax (filter (< 100) prices)`, showing the value for each item. **[2]**
**(c)** Evaluate `foldl (+) 0 (map addTax (filter (< 100) prices))`. **[2]**
**(d)** State what the whole expression in (c) calculates, in words. **[1]**
**(e)** Name the higher-order functions used in (c) and explain what makes them higher-order. **[2]**

**12.** This function is written in Haskell:

```haskell
myAppend [] ys = ys
myAppend (x:xs) ys = x : myAppend xs ys
```

**(a)** Identify the base case. **[1]**
**(b)** Trace `myAppend ['c', 'a'] ['t']`, showing each call. **[3]**
**(c)** Explain why the recursive call uses `xs` rather than `(x:xs)`. **[1]**
**(d)** Name the built-in Haskell operator that does the same job. **[1]**
**(e)** State the result of `myAppend [] []`. **[1]**

## Answers

**1.** The domain is the set from which the function's input values are chosen (A). [1] The co-domain is the set from which the output values are chosen (B); not every member of it needs to be output. [1]
*Examiner insight:* "The co-domain is the outputs" is incomplete; the credited idea is the set the outputs are chosen from.

**2.** 0 is in **ℕ** (natural numbers include zero). [1] -12 is in **ℤ**. [1] 3.25 = 13/4, so it is in **ℚ**. [1]
*Examiner insight:* Each part needs one set only; listing several sets ("ℤ, ℚ and ℝ") does not answer "smallest".

**3. (a)** Any two of: appear in expressions; be assigned to a variable; be passed as an argument; be returned from a function call. [1] [1]
**(b)** Its first parameter `g` is a function, [1] and a function that takes a function as an argument is higher-order. [1]
**(c)** (3 + 4) * 10 = **70** [1]
*Examiner insight:* In (b) you must point to the function argument; saying it "uses a function" without naming `g` is too vague to gain both points.

**4. (a)** f(6) = 15, so (g ∘ f)(6) = 15² = **225**. [1] g(6) = 36, so (f ∘ g)(6) = 72 + 3 = **75**. [1]
**(b)** `(g . f) 6` (or `g (f 6)`) [1]
**(c)** **Char → Boolean** [1]
*Examiner insight:* g ∘ f means f first; doing g first swaps the two answers and loses both points in (a).

**5.** `eligible 17 45`: 45 < 40 is False and 17 >= 65 is False, so **False**. [1] `eligible 70 50`: 70 >= 65 is True, so **True**. [1] `eligible 16 39`: 16 >= 16 and 39 < 40 are both True, so **True**. [1]
*Examiner insight:* Watch the boundary: `>=` includes 16, so the third call is True; misreading it as `>` is a common slip.

**6. (a)** `digits 0 = 0` [1]
**(b)**

```
digits 4093 = 1 + digits 409
            = 1 + 1 + digits 40
            = 1 + 1 + 1 + digits 4
            = 1 + 1 + 1 + 1 + digits 0
            = 1 + 1 + 1 + 1 + 0
```

Correct arguments 409, 40, 4 from `div` 10; [1] reaching the base case `digits 0`; [1] result **4**. [1]
**(c)** Function application binds more tightly than operators, so without brackets it would be read as ``(digits n) `div` 10``, calling `digits n` again and never reaching the base case. [1]
*Examiner insight:* A trace question expects every call written out; a bare final answer of 4 shows no evidence of the recursion.

**7. (a)** **[73,91,66]** [1]
**(b)** **[4,7,9,5,6]** [1]
**(c)** `filter even scores` is [48, 66] [1], so the length is **2**. [1]
*Examiner insight:* `div` rounds down, so 48 gives 4, not 5; keep the order of the original list in every answer.

**8. (a)** ((100 − 30) − 25) − 5 [1] = **40** [1]
**(b)** 30 − (25 − (5 − 100)) [1] = 30 − (25 + 95) = 30 − 120 = **-90** [1]
**(c)** Addition gives the same total whatever order or grouping is used, [1] but subtraction does not: foldl puts the running value on the left and foldr puts each list item on the left, so the grouping changes the answer. [1]
*Examiner insight:* Write the brackets before calculating: the start value 100 belongs on the right of the innermost subtraction, (5 − 100), and putting it on the left is a common slip.

**9. (a)** **2** [1]
**(b)** **[9,4]** [1]
**(c)** **False** [1]
**(d)** [2, 9, 4, 7] has length **4** [1]
**(e)** `tail [9, 4]` = **[4]** [1]
**(f)** **2:[9, 4]** [1]
*Examiner insight:* A tail is always a list, so the square brackets are required in (e); a bare 4 is an element, not a list.

**10. (a)**

```haskell
listProduct [] = 1
listProduct (x:xs) = x * listProduct xs
```

Base case for the empty list returning 1; [1] pattern `(x:xs)` to split head and tail; [1] recursive call on the tail `xs`; [1] head multiplied by the recursive result. [1]
**(b)** `foldr (*) 1 xs` (or `foldl (*) 1 xs`) [1]; for [3, 4, 5] the value is **60**. [1]
*Examiner insight:* A start value of 0 makes every product 0; the base case and the fold's start value must both be 1.

**11. (a)** **[45,80,15]** [1]
**(b)** 45 + 9 = 54, 80 + 16 = 96, 15 + 3 = 18, [1] giving **[54,96,18]**. [1]
**(c)** 0 + 54 + 96 + 18 [1] = **168** [1]
**(d)** The total cost, including the added amount, of the items priced under 100. [1]
**(e)** `filter`, `map` and `foldl`; [1] each takes a function as an argument (`(< 100)`, `addTax`, `(+)`). [1]
*Examiner insight:* In (b) ``p `div` 5`` is worked out before the addition, so 45 becomes 54, not 10.

**12. (a)** `myAppend [] ys = ys` [1]
**(b)**

```
myAppend ['c', 'a'] ['t'] = 'c' : myAppend ['a'] ['t']
                          = 'c' : ('a' : myAppend [] ['t'])
                          = 'c' : ('a' : ['t'])
```

First call splits the head 'c' from the tail; [1] the third call matches the base case and returns ['t']; [1] result **['c','a','t']**, which Haskell displays as "cat". [1]
**(c)** `xs` is the tail, one item shorter than the original list, so each call moves closer to the base case `[]`. [1]
**(d)** **`++`** [1]
**(e)** **[]** [1]
*Examiner insight:* Show the `:` operations being built up; jumping straight to the final list leaves no evidence for the trace marks.

## Where marks are usually lost

- Applying g before f when evaluating g ∘ f.
- Defining the co-domain as the outputs actually produced.
- Forgetting that this specification puts 0 in ℕ.
- Leaving brackets out of recursive calls, such as ``digits n `div` 10``.
- Placing the start value on the wrong side when expanding `foldr`.
- Writing the tail of a list as an element instead of a list.
- Skipping intermediate lists when evaluating nested `map` and `filter` expressions.
- Using 0 as the base case or start value for a product.
- Describing a recursive function as higher-order when no function is passed or returned.

## Next steps

- Go back over the key facts in the [revision notes](/resources/oxfordaqa-a-level-computer-science-functional-programming-revision-notes/).
- Revisit the matching part of the [study guide](/resources/oxfordaqa-a-level-computer-science-functional-programming/).
- Plan the rest of the course from the [course hub](/boards/oxfordaqa/a-level/computer-science/) and the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. These questions cover section 3.12 Functional programming (3.12.1 to 3.12.3).
