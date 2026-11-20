---
title: "OxfordAQA A-Level Computer Science (9645): The functional programming paradigm"
seoTitle: "OxfordAQA 9645 Functional Programming Paradigm Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.12.1 in depth: function types, domain and co-domain, number sets, first-class objects, composition and higher-order functions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.12.1 The functional programming paradigm** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.12 Functional programming. It is International A-level content, examined in Unit 4, the written paper. The specification says exam questions on functional programming use the Haskell language, so code here is Haskell. You need to write a function's type as f: A → B, name the domain and co-domain, know the number sets ℕ, ℤ, ℚ and ℝ, know what a first-class object is, and explain function application, composition and higher-order functions.

The topic-level [functional programming study guide](/resources/oxfordaqa-a-level-computer-science-functional-programming/) covers all of topic 3.12 in one pass. This page gives sub-topic 3.12.1 its own space, with different examples and more practice at the reasoning the paper asks for. Afterwards use the [paradigm revision notes](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-revision-notes/) and the [paradigm practice questions](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-practice/).

## What "functional" means

In an imperative program you give the computer a list of commands that change variables. In a **functional** program you build the answer by applying functions to values. A function is a rule: put in a value, get out a value. Nothing else needs to change. This makes functional programs easy to reason about, because a function given the same input always gives the same output.

## Function types: f: A → B

The type of a function is written

```
f: A → B
```

Read it as "f takes an argument from set A and gives a result in set B". A is the **argument type** and is called the **domain**. B is the **result type** and is called the **co-domain**. The function must give an output for every member of the domain, but it need not produce every member of the co-domain.

| Function | Type | Domain | Co-domain | Does it use all of the co-domain? |
|---|---|---|---|---|
| double | ℕ → ℕ | natural numbers | natural numbers | No: odd numbers are never output |
| isEven | ℤ → Boolean | integers | {True, False} | Yes |
| len | String → ℕ | all strings | natural numbers | Yes: every length 0, 1, 2, … is possible |
| sqr | ℝ → ℝ | real numbers | real numbers | No: a negative value is never output |
| halve | ℤ → ℚ | integers | rational numbers | No: for example 1/3 is never output |

A common mistake is to write the types the wrong way round. For `len`, the argument is a string and the result is a number, so the type is `String → ℕ`, not `ℕ → String`.

## The number sets

| Symbol | Name | Contains | Example members |
|---|---|---|---|
| ℕ | Natural numbers (including 0) | 0, 1, 2, 3, … | 0, 17 |
| ℤ | Integers | …, −2, −1, 0, 1, 2, … | −8, 0, 25 |
| ℚ | Rational numbers | anything that can be written as a fraction of integers | 3/5, 0.25, −4 (as −4/1) |
| ℝ | Real numbers | all possible real-world quantities | √2, π, 0.25 |

Each set sits inside the next one: every natural number is an integer, every integer is rational (because 7 is 7/1) and every rational number is real.

| Number | In ℕ? | In ℤ? | In ℚ? | In ℝ? |
|---|---|---|---|---|
| 12 | Yes | Yes | Yes | Yes |
| 0 | Yes | Yes | Yes | Yes |
| −5 | No | Yes | Yes | Yes |
| 0.75 | No | No | Yes (3/4) | Yes |
| √2 | No | No | No | Yes |

When you pick a type for a function, choose the **smallest set that is correct**. A function that returns a person's age in whole years fits ℕ. A function that halves an integer needs ℚ, because an odd integer halves to a fraction.

## First-class objects

A **first-class object** (or value) can do four things:

1. appear in an expression
2. be assigned to a variable
3. be passed as an argument
4. be returned in a function call.

Integers, floating-point values, characters and strings are first class in many languages. In a functional language **functions are first class too**. Each of the four properties in Haskell:

```haskell
double x = x * 2

total = double 3 + double 4        -- 1. appears in an expression: 6 + 8 = 14
twice = double                     -- 2. assigned to a name
result = map double [1, 5, 2]      -- 3. passed as an argument: [2,10,4]
adder n = (+ n)                    -- 4. returned: adder 5 is a function that adds 5
```

After this, `adder 5 20` evaluates to 25, because `adder 5` is a function waiting for one more argument. The same four tests apply to any language that supports functions as values; some imperative languages do.

## Function application

Giving particular inputs to a function is **function application**. In `volume 2 3 4`, the function `volume` is applied to the arguments 2, 3 and 4. When a function takes more than one argument, the domain is a **Cartesian product**, the set of all possible ordered groups of inputs. For `volume l w h = l * w * h`:

```
volume: ℝ × ℝ × ℝ → ℝ
```

`volume 2 3 4` evaluates to 24. Compare this with a one-argument function such as `double 7`, which is 14 and has type `ℕ → ℕ`. Count the arguments and the number of × signs in the domain will match.

## Composition of functions

**Composition** combines two functions into one. Given

```
f: A → B
g: B → C
```

the function **g ∘ f** (read "g after f") has domain A and co-domain C, so its type is A → C. The function **f is applied first**, then g is applied to the result of f. Composition only makes sense when the co-domain of f fits the domain of g.

### Worked example 1: arithmetic

Let f(x) = x − 4 and g(y) = 3y, both on ℝ.

- (g ∘ f)(x) = g(f(x)) = 3(x − 4) = 3x − 12
- (f ∘ g)(x) = f(g(x)) = 3x − 4

For x = 10: (g ∘ f)(10) = g(6) = **18**, and (f ∘ g)(10) = f(30) = **26**. The order matters, so g ∘ f and f ∘ g are different functions. In Haskell the composition operator is a full stop, so with `f x = x - 4` and `g y = 3 * y`, the call `(g . f) 10` evaluates to 18.

### Worked example 2: types

Let `len: String → ℕ`, `double: ℕ → ℕ` and `isBig: ℕ → Boolean`, where isBig n is True when n > 6. Then **isBig ∘ double ∘ len** has type `String → Boolean`. Applied to "kiwi": len gives 4, double gives 8, isBig gives True. The reverse, `len ∘ isBig`, makes no sense: isBig gives a Boolean and len needs a string.

A good check in an exam is to write the types in a row and see that each co-domain matches the next domain:

```
String → ℕ → ℕ → Boolean
```

## Higher-order functions

A function is **higher-order** if it takes a function as an argument, returns a function as its result, or does both.

| Function | Takes a function? | Returns a function? | Higher-order? |
|---|---|---|---|
| `double x = x * 2` | No | No | No |
| `twice f x = f (f x)` | Yes (f) | No | Yes |
| `adder n = (+ n)` | No | Yes | Yes |
| `map double [1,2,3]` (map itself) | Yes | No | Yes |

Evaluating `twice double 5`: the inner call gives double 5 = 10, the outer gives double 10 = **20**. The next sub-topic uses the higher-order functions `map`, `filter`, `foldl` and `foldr`; see [writing functional programs](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/).

## Exam technique

- **Write types in full.** Give the domain and co-domain by name as well as the arrow.
- **Composition order.** The rightmost function in g ∘ f runs first. Work from the inside out.
- **Number sets.** Quote a counter-example, such as "−5 is not in ℕ", when asked why a value does not fit a set.
- **Definitions.** Learn the four properties of a first-class object as a list. Marks go for each.
- **Higher-order.** Say "takes a function as an argument or returns a function" and point to which one applies.

## Common mistakes

- Treating ℕ as starting at 1. The specification includes zero.
- Saying the co-domain is the set of values actually output. It is the set the outputs are chosen from.
- Reading g ∘ f as "g first".
- Giving a function that returns a number as higher-order. It must take or return a function.
- Forgetting that every integer is a rational number.

## Next steps

- [Paradigm revision notes](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-revision-notes/)
- [Paradigm practice questions](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-practice/)
- [Writing functional programs study guide](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.1 The functional programming paradigm.
