---
title: "OxfordAQA A-Level Computer Science (9645): The functional programming paradigm -- Practice Questions"
seoTitle: "OxfordAQA 9645 Functional Paradigm Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12 – Functional programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 12.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "functional-programming"
  - qualification: "a-level"
    topic: "functional-programming"
    subtopic: "the-functional-programming-paradigm-oxfordaqa-alevel-cs"
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.12.1 The functional programming paradigm: function types, number sets, composition and higher-order functions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.12.1 The functional programming paradigm** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: function types, domain and co-domain, number sets, first-class objects, composition and higher-order functions. Code is Haskell.

Related pages: [paradigm study guide](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm/) ·
[paradigm revision notes](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-revision-notes/)

## Section A

**1.** Explain what is meant by the **domain** and the **co-domain** of a function. **[2]**

**2.** State every one of the sets ℕ, ℤ, ℚ and ℝ that contains each number.

**(a)** 0 **[1]**
**(b)** −7 **[1]**
**(c)** 2.5 **[1]**

**3.** State **three** things that a first-class object may do. **[3]**

**4.** A function `absolute` takes an integer and returns its size without the sign, so `absolute (-4)` is 4 and `absolute 9` is 9.

**(a)** Write the type of `absolute` in the form f: A → B using the number sets. **[1]**
**(b)** State whether the function can output every member of its co-domain, with a reason. **[1]**

## Section B

**5.** A Haskell program defines

```haskell
triple x = 3 * x
```

**(a)** State the value of `map triple [2, 0, 5]`. **[1]**
**(b)** Explain why `map` is a higher-order function. **[1]**
**(c)** Explain how this shows that `triple` is a first-class object. **[1]**

**6.** Two functions on the real numbers are f(x) = 2x + 3 and g(y) = y − 1.

**(a)** Give an expression for (g ∘ f)(x) in its simplest form. **[2]**
**(b)** Evaluate (f ∘ g)(5). **[2]**

**7.** Three functions are defined with these types:

```
len:     String → ℕ
sq:      ℕ → ℕ
isSmall: ℕ → Boolean      (isSmall n is True when n < 10)
```

**(a)** State the type of isSmall ∘ sq ∘ len. **[1]**
**(b)** Evaluate (isSmall ∘ sq ∘ len) applied to "tea", showing each step. **[2]**
**(c)** A student writes len ∘ isSmall. Explain why this is not a valid composition. **[1]**

**8.** Consider these Haskell definitions.

```haskell
inc x = x + 1
applyThrice f x = f (f (f x))
multiplier n = (* n)
```

**(a)** Identify which of the three functions are higher-order and explain each answer. **[3]**
**(b)** Evaluate `applyThrice inc 4`. **[1]**

**9.** A function `maxOf` returns the larger of two integers. For example `maxOf 8 (-3)` is 8.

**(a)** Write the type of `maxOf`. **[1]**
**(b)** Explain what is meant by function application and identify the application in `maxOf 8 (-3)`. **[2]**

**10.** A function f has type String → ℕ and a function g has type Boolean → ℕ. Explain why g ∘ f cannot be formed. **[2]**

**11.** A programmer writes this Haskell definition.

```haskell
compose f g x = f (g x)
```

**(a)** Explain why `compose` is a higher-order function. **[1]**
**(b)** With `double x = x * 2` and `inc x = x + 1`, evaluate `compose double inc 5`, showing each step, and write the result as a composition of the two functions. **[2]**

## Answers

**1.** The **domain** is the set from which the function's input values are chosen **[1]**. The **co-domain** is the set from which the output values are chosen, and not every member of it has to be an output **[1]**. **[2]**

**2. (a)** ℕ, ℤ, ℚ and ℝ (all four) **[1]**
**(b)** ℤ, ℚ and ℝ (not ℕ) **[1]**
**(c)** ℚ and ℝ (2.5 = 5/2; not ℕ or ℤ) **[1]**

**3.** Any three from: appear in expressions; be assigned to a variable; be passed as an argument; be returned in a function call. **[3]**

**4. (a)** absolute: ℤ → ℕ **[1]**
**(b)** Yes, every natural number n is the size of the integer n, so every member of ℕ can be output **[1]**.

**5. (a)** [6,0,15] **[1]**
**(b)** It takes a function (here triple) as one of its arguments **[1]**.
**(c)** `triple` is passed as an argument to `map`, which a first-class object is allowed to be **[1]**.

**6. (a)** g(f(x)) = (2x + 3) − 1 **[1]** = 2x + 2 **[1]**. **[2]**
**(b)** g(5) = 4 **[1]**, then f(4) = 11 **[1]**. **[2]**

**7. (a)** String → Boolean **[1]**
**(b)** len "tea" = 3 **[1]**, sq 3 = 9, isSmall 9 = **True** **[1]**. **[2]**
**(c)** isSmall returns a Boolean, but len needs a String as its argument, so the co-domain of isSmall does not match the domain of len **[1]**.

**8. (a)** `applyThrice` is higher-order because it takes a function f as an argument **[1]**. `multiplier` is higher-order because it returns a function (for example `multiplier 4` is a function that multiplies by 4) **[1]**. `inc` is not higher-order because it only takes and returns a number **[1]**. **[3]**
**(b)** inc 4 = 5, inc 5 = 6, inc 6 = **7** **[1]**

**9. (a)** maxOf: ℤ × ℤ → ℤ **[1]**
**(b)** Function application is giving a function particular inputs **[1]**; here `maxOf` is applied to the arguments 8 and −3 **[1]**. **[2]**

**10.** The result of f is a natural number (the co-domain of f is ℕ) **[1]**, but g needs a Boolean as its argument, so the co-domain of f does not match the domain of g **[1]**. **[2]**

**11. (a)** It takes two functions (f and g) as arguments **[1]**.
**(b)** inc 5 = 6 **[1]**, then double 6 = **12** **[1]**. The result is double ∘ inc (inc is applied first). **[2]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.1 The functional programming paradigm.
