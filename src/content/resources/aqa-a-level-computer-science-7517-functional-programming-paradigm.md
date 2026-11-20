---
title: "AQA A-Level Computer Science (7517): Functional Programming Paradigm"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.12.1: function type, domain and co-domain, first-class objects, function application, partial application and composition of functions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.12.1 Functional programming paradigm** in AQA A-Level Computer Science (7517). There are five strands: **function type** (with domain and co-domain), **functions as first-class objects**, **function application**, **partial function application** and **composition of functions**. They are mathematical ideas, and exam questions ask you to read and write function types, evaluate applications, and work out what a composition does.

The wider [fundamentals of functional programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/) covers all of section 4.12. This page takes each strand slowly, with worked evaluations. The examples are written in a Haskell-like style, in which a function is applied by writing its name followed by its arguments without brackets, and all examples were checked by evaluating them.

Condensed notes are in the [functional programming paradigm revision notes](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-revision-notes/), and exam-style questions are in the [functional programming paradigm practice questions](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-practice/).

## The functional paradigm in brief

In the **functional paradigm** a program is built from **functions** that map inputs to outputs. A pure function always gives the same result for the same arguments and changes nothing else. Programs are written by applying functions to values and combining the results, not by changing variables step by step as in imperative programming.

## Function type

A function `f` has a **function type** written

**f : A → B**

- `A` is the **argument type** and `B` is the **result type**.
- `A` is called the **domain**: the set from which the function's input values are chosen.
- `B` is called the **co-domain**: the set from which the function's output values are chosen.
- The domain and co-domain are always **subsets of objects in some data type**, such as the integers, the characters or the Booleans.

Loosely speaking, a function is a rule that, for each element of the domain, assigns an output chosen from the co-domain. **Not every member of the co-domain has to be an output.**

**Worked example 1.** `f : {a, b, c, ..., z} → {0, 1, 2, ..., 25}` maps each letter to its position, counting a as 0. Then f(a) = 0, f(c) = 2 and f(z) = 25. Here every member of the co-domain is used. But consider `isEven : integer → Boolean`, where the domain is all integers and the co-domain is {True, False}. Both values are used, since there are even and odd integers. And `square : integer → integer` has co-domain integer, but never outputs 2 or −1, so not every member of the co-domain is an output. That is allowed.

**Worked example 2: reading types.**

| Function | Type | Meaning |
|---|---|---|
| `length` | string → integer | takes a string, returns how many characters it has |
| `toUpper` | character → character | takes a character, returns its capital |
| `isPositive` | integer → Boolean | takes an integer, returns True or False |

## First-class objects

A **first-class object** (or value) is something that may:

- **appear in expressions**;
- **be assigned to a variable**;
- **be passed as an argument**;
- **be returned from a function call**.

Integers, floating-point values, characters and strings are first-class objects in most languages. In functional languages, and in imperative languages that support them, **functions are first-class objects too**. So a function can be an argument to another function, and the result of a function call.

**Example.** `twice f x = f (f x)` takes a function `f` and a value `x`, and applies `f` two times. With `double x = 2 * x`, the call `twice double 5` evaluates as double (double 5) = double 10 = **20**. The function `double` is passed as an argument, which is only possible because functions are first-class.

A function that takes a function as an argument or returns one is called a **higher-order function** (4.12.2).

## Function application

**Function application** means applying a function to its arguments, which gives it particular inputs. For example `add(3, 4)` is the application of `add` to the integers 3 and 4. The result is 7.

The type of `add` is

**add : integer × integer → integer**

where `integer × integer` is the **Cartesian product** of the set of integers with itself, that is, the set of all pairs of integers. Although we say `add` takes two arguments, in fact it takes **one argument, which is a pair**, for example (3, 4).

## Partial function application

In the **partially applied** (curried) view, a function that seems to take several arguments is treated as taking **one argument at a time**, each application returning a function that is waiting for the next argument.

The function `add` can be viewed as

**add : integer → (integer → integer)**

- `add 4` is a **function**, of type integer → integer, that adds 4 to whatever integer it is given.
- `(add 4) 5` applies that function to 5 and gives **9**.

The brackets can be dropped, because `→` associates to the right, so we write

**add : integer → integer → integer**

and read it as "takes one integer, then another integer, and returns an integer".

**Worked example 3: three arguments.** Let `volume l w h = l * w * h`, with type

**volume : integer → integer → integer → integer**

| Expression | Type | Value or meaning |
|---|---|---|
| `volume` | integer → integer → integer → integer | the whole function |
| `volume 2` | integer → integer → integer | a function that still needs w and h |
| `volume 2 3` | integer → integer | a function that still needs h |
| `volume 2 3 4` | integer | 2 × 3 × 4 = **24** |

Using the partial application `volume 2 3`, called with 10, gives 2 × 3 × 10 = **60**. Partial application with one, two or three arguments is a regular exam topic: the type of the result tells you how many arguments are still needed.

**Worked example 4: naming a partial application.** `addTen = add 10` defines a new function of type integer → integer. Then `addTen 5` is **15**. This is useful with higher-order functions such as `map (add 10) [1, 2, 3]`, which gives [11, 12, 13].

## Composition of functions

**Composition** combines two functions to make a new one. Given

- `f : A → B`
- `g : B → C`

the composition **g ∘ f** is a function with **domain A and co-domain C**. It applies **f first**, then applies **g to the result**:

**(g ∘ f)(x) = g(f(x))**

The output type of `f` must match the input type of `g`, or the composition is not defined.

**Worked example 5.** Let `f(x) = x + 2` and `g(y) = y³`, both on the real numbers. Then `g ∘ f (x) = (x + 2)³`.

- (g ∘ f)(1) = g(f(1)) = g(3) = 27.
- (g ∘ f)(2) = g(4) = 64.
- (g ∘ f)(0) = g(2) = 8.

**Order matters.** (f ∘ g)(1) = f(g(1)) = f(1) = **3**, which is different from (g ∘ f)(1) = 27. Composition is read **right to left**: the function written nearest the argument is applied first.

**Worked example 6: types in composition.** Let `length : string → integer` and `isEven : integer → Boolean`. Then `isEven ∘ length : string → Boolean` tells you whether a string has an even number of characters. For "cat" (length 3) the result is False. The reverse, `length ∘ isEven`, is not defined, because isEven returns a Boolean and length needs a string.

## Why these ideas matter

- Functions as **first-class** values let programs be assembled from small pieces and passed around.
- **Partial application** lets you make specialised functions from general ones.
- **Composition** builds a pipeline of steps from simple functions, which are easy to test one at a time.
- Together they support the style of programming that makes distributed processing easier (see Big Data, 4.11.1).

## Common mistakes

- Confusing **domain** (inputs) with **co-domain** (the set outputs are chosen from).
- Assuming every member of the co-domain **must** be an output.
- Reading g ∘ f as "g then f". It is **f first, then g**.
- Counting a partial application's remaining arguments wrongly. Count the arrows left in the type.
- Writing function application with brackets and commas in Haskell style (`add (3, 4)`), when the curried form is `add 3 4`.
- Forgetting that composition needs the **result type of f to match the argument type of g**.

## Exam technique

- When given a type, **list the types of the arguments in order** and the result at the end.
- When asked about a partial application, remove arguments from the **front** of the type.
- For composition, evaluate the **inner function first**, and write each intermediate value.
- State domain and co-domain as sets or data types, using the notation in the question.

## Related resources

- [Functional programming paradigm revision notes](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-revision-notes/)
- [Functional programming paradigm practice questions](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-practice/)
- [Writing functional programs study guide](/resources/aqa-a-level-computer-science-7517-writing-functional-programs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.12.1 Functional programming paradigm. Always check the current specification on the AQA website.*
