---
title: "AQA A-Level Computer Science: Fundamentals of Functional Programming — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 12: Fundamentals of functional programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 12
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-functional-programming"
description: "Recall notes on function types, first-class objects, partial application, composition, map, filter, fold and list processing for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Fundamentals of functional programming (section 4.12 of AQA A-Level Computer Science 7517) treats a program
as the evaluation of functions. You need the vocabulary -- function type, domain and co-domain, first-class
object, function application, partial application, composition -- and you must evaluate expressions using
**map**, **filter** and **fold** and the list operations on a **head:tail** list. Paper 2 tests it with short
questions that often use Haskell notation, so these notes use Haskell with a Python equivalent where useful.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of functional programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/).
Practise with the [functional programming practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.12, assessed on Paper 2:

- **4.12.1** Functional programming paradigm -- function type (4.12.1.1), first-class object (4.12.1.2),
  function application (4.12.1.3), partial function application (4.12.1.4), composition of functions
  (4.12.1.5)
- **4.12.2** Writing functional programs -- simple programs in a functional language; higher-order
  functions map, filter, reduce or fold
- **4.12.3** Lists in functional programming -- head and tail, the empty list and the list operations

## Definitions

| Term | Meaning (from the specification) |
|---|---|
| **Function** | A rule that assigns to each element of a set A of inputs an output chosen from a set B |
| **Function type** | f: A -> B, where A is the **argument type** and B the **result type** |
| **Domain** | The set from which the function's **input** values are chosen |
| **Co-domain** | The set from which the **output** values are chosen -- not every member has to be an output |
| **First-class object** | A value that can appear in expressions, be assigned to a variable, be passed as an argument and be returned from a function call |
| **Function application** | Giving a function particular inputs, e.g. add(3, 4) |
| **Higher-order function** | A function that takes a function as an argument, returns a function as a result, or both |

Domain and co-domain are always subsets of objects in some data type. Example from the specification:
f: {a, b, c, ..., z} -> {0, 1, 2, ..., 25} mapping a to 0, b to 1 and so on.

## Function application and partial application

`add(3, 4)` has type **integer × integer -> integer**: strictly it takes **one** argument, the pair (3, 4),
from the Cartesian product of integer with itself.

In the partial application view the same function has type:

```
add : integer -> (integer -> integer)     brackets may be dropped:
add : integer -> integer -> integer
```

`add 4` returns a **new function** that adds 4 to its argument, so `(add 4) 3 = 7`. A three-argument function
f : A -> B -> C -> D can be given one argument (returning B -> C -> D), two (returning C -> D) or all three.

```haskell
add :: Int -> Int -> Int
add x y = x + y
addFour = add 4        -- addFour :: Int -> Int
addFour 3              -- 7
```

## Composition of functions

Given f : A -> B and g : B -> C, the composition **g ∘ f** has domain A and co-domain C. **f is applied
first**, then g is applied to f's result.

Specification example: f(x) = x + 2, g(y) = y³, so g ∘ f = (x + 2)³.
In Haskell: `(g . f) 1` = g(f(1)) = g(3) = **27**. Note that f ∘ g would give 1³ + 2 = 3 -- order matters.

## Map, filter and fold

| Function | What it does | Example | Result |
|---|---|---|---|
| **map** | Applies a function to **each element** of a list, returning a list of results | `map (*2) [1,2,3]` | `[2,4,6]` |
| **filter** | Returns a new list of exactly the elements that **match a condition** | `filter even [1,2,3,4,5,6]` | `[2,4,6]` |
| **fold / reduce** | **Reduces a list to a single value** by repeatedly applying a combining function | `foldl (+) 0 [1,2,3,4]` | `10` |

Python equivalents: `list(map(lambda x: x*2, [1,2,3]))`, `list(filter(lambda x: x % 2 == 0, xs))`,
`functools.reduce(lambda a, b: a + b, xs, 0)`.

### Worked example: combining them

Sum of the squares of the odd numbers in [1, 2, 3, 4, 5]:

```haskell
foldl (+) 0 (map (^2) (filter odd [1,2,3,4,5]))
-- filter odd        -> [1,3,5]
-- map (^2)          -> [1,9,25]
-- foldl (+) 0       -> ((0 + 1) + 9) + 25 = 35
```

**foldl vs foldr:** foldl combines from the left, `foldl (-) 10 [1,2,3]` = ((10 - 1) - 2) - 3 = **4**; foldr
combines from the right, `foldr (-) 10 [1,2,3]` = 1 - (2 - (3 - 10)) = **-8**. For + and × the answers are the
same; for - and / they are not.

## Lists: head and tail

A list is a **head** (its first **element**) joined to a **tail** (the **list** of the rest):
`[4, 3, 5]` = `4 : [3, 5]`. `[]` is the empty list.

| Operation | Haskell | Result for [4, 3, 5] |
|---|---|---|
| Return head | `head [4,3,5]` | `4` |
| Return tail | `tail [4,3,5]` | `[3,5]` |
| Test for empty list | `null [4,3,5]` | `False` |
| Return length | `length [4,3,5]` | `3` |
| Construct an empty list | `[]` | `[]` |
| Prepend an item | `2 : [4,3,5]` | `[2,4,3,5]` |
| Append an item | `[4,3,5] ++ [7]` | `[4,3,5,7]` |

The tail of a one-element list is `[]`, not nothing. Recursion over head and tail is the usual way to
process a list:

```haskell
total :: [Int] -> Int
total []     = 0
total (x:xs) = x + total xs     -- total [4,3,5] = 4 + (3 + (5 + 0)) = 12
```

## Common mistakes / exam traps

- Calling the co-domain "the outputs": it is the set outputs are **chosen from**; not all members need be used.
- Applying composition in the wrong order: in g ∘ f, **f first**.
- Stating that the tail is the last element -- the tail is a **list** of everything after the head.
- Writing the result of `filter` as true/false values instead of the elements that pass.
- Treating foldl and foldr as identical for subtraction or division.
- Forgetting that `add 4` is a function, not a number, when asked for its type (integer -> integer).

## Frequently asked questions

**What does it mean that functions are first-class objects?**
A function can be used like any other value: it can appear in expressions, be assigned to a variable, be passed
as an argument to another function and be returned as a result.

**What is the type of add 4 if add : integer -> integer -> integer?**
integer -> integer. Supplying one argument returns a function that is still waiting for the second integer.

**Which functional language should I use?**
The specification lists Haskell, Standard ML, Scheme and Lisp, and languages that support the paradigm such as
Python, F#, C#, Scala, Java 8, Delphi XE onwards and VB.NET 2008 onwards. Exam questions often use Haskell-style
notation, so practise reading it.

## Related resources

[Functional programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/) |
[Functional programming practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-practice/) |
[Big Data revision notes](/resources/aqa-a-level-computer-science-big-data-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.12 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
