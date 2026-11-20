---
title: "AQA A-Level Computer Science (7517): Functional Programming Paradigm -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of functional programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 12.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-functional-programming"
    subtopic: "functional-programming-paradigm-7517"
description: "Original AQA 7517 section 4.12.1 questions with answers: function types, first-class functions, function application, partial application and composition."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Functional programming paradigm study guide](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm/) | [Functional programming paradigm revision notes](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-revision-notes/)

In these questions a function is applied by writing its name followed by its arguments, so `add 3 4` means add applied to 3, then to 4.

---

## Section A

**1.** A function f has the type f : A → B. State what A and B are called. **[2]**

**2.** State what is meant by a first-class object. **[2]**

**3.** The function `isPositive` takes an integer and returns True if it is greater than zero. State its function type. **[1]**

**4.** State the meaning of g ∘ f. **[1]**

## Section B

**5.** The function `len` takes a string and returns the number of characters in it. The function `isOdd` takes an integer and returns True if it is odd.

**(a)** State the function type of each function. **[2]**
**(b)** State the type of `isOdd ∘ len` and describe what it computes. **[2]**
**(c)** Explain why `len ∘ isOdd` cannot be formed. **[1]**

**6.** The function `double` has type integer → integer and doubles its argument. The function `twice` is defined as `twice f x = f (f x)`.

**(a)** Evaluate `twice double 5`, showing each step. **[2]**
**(b)** Explain why `twice` can only be written in a language where functions are first-class objects. **[2]**

**7.** The function `mult` has the type integer → integer → integer, and `mult a b` returns a multiplied by b.

**(a)** State the type of the expression `mult 6`. **[1]**
**(b)** Evaluate `(mult 6) 7`. **[1]**
**(c)** Explain why `mult` can be said to take one argument at a time. **[2]**

**8.** The function `add3` has the type integer → integer → integer → integer, and `add3 a b c` returns a + b + c.

**(a)** State the type of `add3 1`, `add3 1 2` and `add3 1 2 3`. **[3]**
**(b)** Evaluate `add3 1 2 3`. **[1]**
**(c)** The function `addTen` is defined as `addTen = add3 4 6`. State its type and the value of `addTen 5`. **[2]**

**9.** The function f is defined by f(x) = 3x − 1 and g by g(x) = x × x, both on the integers.

**(a)** Evaluate (g ∘ f)(2). **[2]**
**(b)** Evaluate (f ∘ g)(2). **[2]**
**(c)** State what your answers to (a) and (b) show about composition. **[1]**
**(d)** Write an expression for (g ∘ f)(x) in terms of x. **[1]**

**10.** A function `f` is defined as `f : {a, b, c} → {0, 1, 2, 3}` with f(a) = 0, f(b) = 1 and f(c) = 3.

**(a)** State the domain and the co-domain. **[2]**
**(b)** State a member of the co-domain that is not an output, and explain whether this is allowed. **[2]**

**11.** The function `map` takes a function and a list and applies the function to every item. Explain how partial application can be used to write `map (add 10) [1, 2, 3]`, and state the result. **[4]**

**12.** Explain **two** benefits of functions being first-class objects in a programming language. **[4]**

---

## Answers

**1.** A is the domain (argument type) [1]; B is the co-domain (result type) [1].

**2.** A value that can appear in expressions [1]; and can be assigned to a variable, passed as an argument, or returned as the result of a function call [1].

**3.** isPositive : integer → Boolean [1].

**4.** The composition of g and f: apply f first, then apply g to the result of f [1].

**5. (a)** len : string → integer [1]; isOdd : integer → Boolean [1].
**(b)** string → Boolean [1]; it tells you whether a string has an odd number of characters [1].
**(c)** isOdd returns a Boolean, which len cannot accept, because len needs a string [1].

**6. (a)** twice double 5 = double (double 5) [1] = double 10 = 20 [1].
**(b)** `twice` takes a function (f) as an argument [1] and applies it, so functions must be values that can be passed as arguments to other functions, which is what first-class means [1].

**7. (a)** integer → integer [1].
**(b)** 42 [1].
**(c)** mult : integer → (integer → integer) in partial application form [1]; supplying one argument (6) returns a function that is waiting for the second argument [1].

**8. (a)** add3 1 : integer → integer → integer [1]; add3 1 2 : integer → integer [1]; add3 1 2 3 : integer [1].
**(b)** 6 [1].
**(c)** integer → integer [1]; addTen 5 = 4 + 6 + 5 = 15 [1].

**9. (a)** f(2) = 3 × 2 − 1 = 5 [1]; g(5) = 25 [1].
**(b)** g(2) = 4 [1]; f(4) = 3 × 4 − 1 = 11 [1].
**(c)** The order of composition matters: g ∘ f and f ∘ g give different results [1].
**(d)** (3x − 1) × (3x − 1), or (3x − 1)² [1].

**10. (a)** Domain {a, b, c} [1]; co-domain {0, 1, 2, 3} [1].
**(b)** 2 (is not an output) [1]; this is allowed, because not every member of the co-domain needs to be an output [1].

**11.** `add 10` is add supplied with only one of its two arguments [1], so it is a new function of type integer → integer that adds 10 to its input [1]. `map` applies this function to each item of the list [1], giving [11, 12, 13] [1].

**12.** Any two benefits, each with an explanation [2 marks each]. Functions can be passed as arguments, so general-purpose functions such as map or filter can be written once and customised by the function passed in [1 each part]. Functions can be returned as results, so new specialised functions can be built (for example by partial application) [1 each part]. Functions can be stored in variables or data structures, which lets a program choose which function to apply at run time [1 each part]. Programs can be built by composing small functions, which makes them easier to test [1 each part].

---

## Where marks are usually lost

- Swapping domain and co-domain.
- Reading g ∘ f as "g then f".
- Giving the wrong type for a partial application (remove arguments from the front).
- Assuming every member of the co-domain must be used.
- Writing types without the arrow between each argument.
