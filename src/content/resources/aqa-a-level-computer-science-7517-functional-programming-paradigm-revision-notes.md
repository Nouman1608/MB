---
title: "AQA A-Level Computer Science (7517): Functional Programming Paradigm -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.12.1 recall: function type, domain, co-domain, first-class objects, function application, partial application and composition."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.12.1 Functional programming paradigm**, AQA A-Level Computer Science (7517): function type, first-class objects, function application, partial function application and composition. Worked evaluations are in the [functional programming paradigm study guide](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm/); questions are in the [functional programming paradigm practice questions](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-practice/).

## Function type

**f : A → B**

| Term | Meaning |
|---|---|
| Argument type | A, the type of the input |
| Result type | B, the type of the output |
| Domain | The set from which the inputs are chosen (A) |
| Co-domain | The set from which the outputs are chosen (B) |

- Domain and co-domain are always **subsets of objects in some data type**.
- **Not every member of the co-domain must be an output.**
- A function assigns **one output** to each input in the domain.

| Function | Type |
|---|---|
| `length` | string → integer |
| `isPositive` | integer → Boolean |
| `toUpper` | character → character |

## First-class objects

A first-class object can:

1. appear in expressions;
2. be assigned to a variable;
3. be passed as an argument;
4. be returned from a function call.

In functional languages (and imperative languages that support them) **functions are first-class**, so a function can be an argument to another function and the result of a call. Integers, floats, characters and strings are first-class in most languages.

**Check:** `twice f x = f (f x)`. With `double x = 2 * x`: `twice double 5` = double (double 5) = 20.

## Function application

Applying a function to its arguments: `add(3, 4)` = 7.

**add : integer × integer → integer**

- `integer × integer` is the **Cartesian product**: all pairs of integers.
- Strictly, `add` takes **one argument, a pair** such as (3, 4).

## Partial function application

**add : integer → integer → integer** means `add : integer → (integer → integer)`.

- `add 4` is a function of type integer → integer ("add four to the input").
- `(add 4) 5` = 9.
- `→` associates to the right, so brackets can be dropped.

| Expression | Type | Value |
|---|---|---|
| `volume` (l, w, h) | integer → integer → integer → integer | the function |
| `volume 2` | integer → integer → integer | needs w and h |
| `volume 2 3` | integer → integer | needs h |
| `volume 2 3 4` | integer | 24 |

**Rule:** each argument supplied removes one type from the **front** of the type. The number of arrows left is the number of arguments still needed.

`addTen = add 10`, then `addTen 5` = 15. `map (add 10) [1, 2, 3]` = [11, 12, 13].

## Composition

Given f : A → B and g : B → C:

**g ∘ f : A → C** and **(g ∘ f)(x) = g(f(x))**

- **f is applied first**, then g. Read right to left.
- The result type of f must match the argument type of g.
- Order matters.

**Check:** f(x) = x + 2 and g(y) = y³. (g ∘ f)(1) = g(3) = 27. (f ∘ g)(1) = f(1) = 3.

**Type check:** `isEven ∘ length : string → Boolean`. `length ∘ isEven` is not defined, because isEven returns a Boolean.

## Pure function

A **pure** function gives the same result for the same arguments and has no side effects. This is why functions can be applied, partially applied and composed freely.

## Imperative versus functional

| | Imperative | Functional |
|---|---|---|
| Main building block | Sequence of statements changing variables | Functions applied to values |
| State | Variables are changed in place | Values are not changed; new values are returned |
| Repetition | Loops | Recursion and higher-order functions |
| Functions | May have side effects | Pure; functions are first-class |

## Key terms

| Term | Definition |
|---|---|
| Function type | The type A → B, showing argument type and result type |
| Domain | The set of input values |
| Co-domain | The set from which output values are chosen |
| First-class object | A value that can be used in expressions, assigned, passed and returned |
| Function application | Giving particular inputs to a function |
| Partial application | Supplying fewer arguments than a function needs, giving a new function |
| Composition | Combining two functions so that the output of one feeds the next |
| Cartesian product | The set of all pairs of elements from two sets |
| Higher-order function | A function that takes or returns a function |

## Exam traps

- **Domain is the input set; co-domain is the output set.**
- **Not all co-domain members need to be outputs.**
- **g ∘ f means f first.**
- **Count arrows** to find how many arguments remain.
- **Types must match** in a composition.
- **Remove arguments from the front** of the type in a partial application.
- **Do not write `add (3, 4)` for the curried form;** use `add 3 4`.

## Self-test

1. In f : A → B, what is A called?
2. In f : A → B, what is B called?
3. Must every member of the co-domain be an output?
4. State two things a first-class object can do.
5. Give the type of an addition function on integers in partial application form.
6. What is the type of `add 4`?
7. What does `(add 4) 5` evaluate to?
8. What is the type of `volume 2 3` if volume : integer → integer → integer → integer?
9. In g ∘ f, which function is applied first?
10. If f(x) = x + 2 and g(y) = y³, what is (g ∘ f)(2)?
11. What is (f ∘ g)(2) for the same functions?
12. What condition must be true for g ∘ f to be defined?

**Answers**

1. The domain (argument type).
2. The co-domain (result type).
3. No.
4. Any two of: appear in expressions; be assigned to a variable; be passed as an argument; be returned from a function call.
5. integer → integer → integer.
6. integer → integer.
7. 9.
8. integer → integer.
9. f.
10. g(4) = 64.
11. f(8) = 10.
12. The result type of f must match the argument type of g.

## More resources on this topic

- [Functional programming paradigm study guide](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm/)
- [Functional programming paradigm practice questions](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-practice/)
- [Writing functional programs revision notes](/resources/aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes/)
