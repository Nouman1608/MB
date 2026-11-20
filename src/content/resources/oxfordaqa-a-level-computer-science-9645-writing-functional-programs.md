---
title: "OxfordAQA A-Level Computer Science (9645): Writing functional programs"
seoTitle: "OxfordAQA 9645 Writing Functional Programs Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.12.2 in depth: Haskell functions, operators, Boolean logic, recursion with pattern matching, map, filter, foldl and foldr."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.12.2 Writing functional programs** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.12 Functional programming. It is International A-level content, examined in Unit 4. The specification says exam questions on functional programming use **Haskell**, and that the techniques can also be used in C#, Python and VB.Net. You need to define and use functions with arguments, use the arithmetic operations, perform and combine Boolean comparisons, define functions by recursion with base and recursive cases, use pattern matching, and use the higher-order functions `map`, `filter`, `foldl` and `foldr`.

The topic-level [functional programming study guide](/resources/oxfordaqa-a-level-computer-science-functional-programming/) gives a first pass through all of topic 3.12. This page works through sub-topic 3.12.2 with new examples and complete traces. Afterwards use the [writing functional programs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-revision-notes/) and the [writing functional programs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-practice/).

## Defining and applying functions

A Haskell function definition gives the name, the parameters separated by spaces, an equals sign and the result:

```haskell
add a b = a + b
double x = x * 2
```

To apply a function, write its name and then its arguments, separated by spaces. There are no brackets or commas around the arguments.

| Expression | Value |
|---|---|
| `add 3 4` | 7 |
| `double 6` | 12 |
| `add (double 2) 5` | 9 |

Brackets are needed only to group a sub-expression that is itself an argument. `add double 2 5` would be wrong, because it passes `double` as the first argument. A negative number as an argument also needs brackets: `double (-3)` gives -6.

## Arithmetic operations

| Operation | Haskell | Example | Result |
|---|---|---|---|
| Addition | `+` | `8 + 5` | 13 |
| Subtraction | `-` | `8 - 5` | 3 |
| Multiplication | `*` | `8 * 5` | 40 |
| Division | `/` | `7 / 2` | 3.5 |
| Power | `^` | `2 ^ 10` | 1024 |

Haskell's `/` always gives a fractional result. For whole-number division and remainder, use the functions `div` and `mod` written before their arguments: `div 7 2` gives 3 and `mod 7 2` gives 1. The usual precedence rules apply, with `^` binding tightest, then `*` and `/`, then `+` and `-`. So `2 + 3 * 4 ^ 2` is 2 + 3 × 16 = **50**, while `(2 + 3) * 4 ^ 2` is **80**.

## Boolean comparisons and combinations

The specification lists these operators. Each comparison gives `True` or `False`.

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `==` | equal to | `5 == 5` | True |
| `/=` | not equal to | `5 /= 5` | False |
| `>` | greater than | `7 > 3` | True |
| `<` | less than | `7 < 3` | False |
| `&&` | and | `True && False` | False |
| `\|\|` | or | `True \|\| False` | True |
| `not` | not | `not True` | False |

(Haskell also has `>=` and `<=`.) Comparisons combine into tests. A leap-year function:

```haskell
isLeap y = (mod y 4 == 0 && mod y 100 /= 0) || mod y 400 == 0
```

| y | mod y 4 == 0 | mod y 100 /= 0 | mod y 400 == 0 | isLeap y |
|---|---|---|---|---|
| 2024 | True | True | False | True |
| 1900 | True | False | False | False |
| 2000 | True | False | True | True |
| 2023 | False | True | False | False |

## Recursion: base case and recursive case

Functional programs do not use loops that change variables. Repetition is done by **recursion**: a function defined using itself. Every recursive definition needs:

- a **base case**, which gives the answer directly without calling the function again;
- a **recursive case**, which calls the function on a **smaller** problem and builds the answer from the result.

### Pattern matching

Haskell chooses which equation to use by **pattern matching** on the arguments. Equations are tried from the top, and the first one that matches is used. A literal such as `0` matches only that value; a variable such as `n` matches anything.

```haskell
fact 0 = 1
fact n = n * fact (n - 1)
```

The brackets in `fact (n - 1)` matter. Without them, `fact n - 1` means `(fact n) - 1`, which calls `fact n` again with the same argument and never stops.

### Worked example 1: tracing fact 4

```
fact 4
= 4 * fact 3
= 4 * (3 * fact 2)
= 4 * (3 * (2 * fact 1))
= 4 * (3 * (2 * (1 * fact 0)))
= 4 * (3 * (2 * (1 * 1)))
= 4 * (3 * (2 * 1))
= 4 * (3 * 2)
= 4 * 6
= 24
```

The first four lines go down to the base case; the rest multiply back up. If the equations were written in the other order, `fact n` would match every argument including 0, and the base case would never be reached.

### Worked example 2: Euclid's algorithm

The greatest common divisor of two whole numbers:

```haskell
gcdOf a 0 = a
gcdOf a b = gcdOf b (mod a b)
```

| Call | Matches | Next call |
|---|---|---|
| `gcdOf 84 36` | second equation | `gcdOf 36 (mod 84 36)` = `gcdOf 36 12` |
| `gcdOf 36 12` | second equation | `gcdOf 12 (mod 36 12)` = `gcdOf 12 0` |
| `gcdOf 12 0` | first equation (base case) | result **12** |

### Worked example 3: two base cases

The Fibonacci numbers need two base cases because each term depends on the two before it:

```haskell
fib 0 = 0
fib 1 = 1
fib n = fib (n - 1) + fib (n - 2)
```

`fib 0` to `fib 10` give 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Evaluating `fib 5` makes 15 calls in total, because the same smaller values are worked out many times. This is correct but slow for large n.

## The higher-order function map

`map f list` applies `f` to every item of the list and returns the list of results.

```haskell
map double [4, 1, 5]      -- [8,2,10]
map (* 3) [4, 1, 5]       -- [12,3,15]
```

The expression `(* 3)` is a function that multiplies by 3. Putting an operator and one argument inside brackets makes a function out of it.

## The higher-order function filter

`filter condition list` keeps exactly the items for which the condition gives `True`.

```haskell
filter (< 10) [15, 8, 20, 3]      -- [8,3]
filter (> 10) [12, 7, 30, 18, 5, 25]   -- [12,30,18,25]
```

The two functions combine by nesting. To square the odd numbers in a list, using the built-in test `odd`:

```haskell
map (^ 2) (filter odd [3, 8, 5, 2, 7])
```

`filter odd` gives [3,5,7] and `map (^ 2)` gives **[9,25,49]**.

## The folds: foldl and foldr

A fold reduces a list to a single value by repeatedly applying a combining function, starting from an initial value.

- `foldl` starts with the **leftmost** item and works forward: `foldl f z [a, b, c]` is `f (f (f z a) b) c`.
- `foldr` starts with the **rightmost** item and works backward: `foldr f z [a, b, c]` is `f a (f b (f c z))`.

| Expression | Working | Result |
|---|---|---|
| `foldl (+) 0 [3, 5, 8]` | ((0 + 3) + 5) + 8 | 16 |
| `foldr (+) 0 [3, 5, 8]` | 3 + (5 + (8 + 0)) | 16 |
| `foldl (*) 1 [1, 2, 3, 4, 5]` | 1×1×2×3×4×5 | 120 |
| `foldl (-) 100 [10, 20, 5]` | ((100 − 10) − 20) − 5 | 65 |
| `foldl (-) 0 [1, 2, 3, 4]` | (((0 − 1) − 2) − 3) − 4 | -10 |
| `foldr (-) 0 [1, 2, 3, 4]` | 1 − (2 − (3 − (4 − 0))) | -2 |

For `+` and `*` the two folds give the same answer, because the order of combining does not matter. For `-` they differ, which is why the specification uses it as the example. Choose the **initial value** carefully: 0 for a sum and 1 for a product, so the start does not change the result.

Putting the three tools together, the sum of squares of the odd numbers in [3, 8, 5, 2, 7] is

```haskell
foldl (+) 0 (map (^ 2) (filter odd [3, 8, 5, 2, 7]))
```

which is 9 + 25 + 49 = **83**.

## Other languages

The same techniques exist outside Haskell. Python has `map`, `filter` and `functools.reduce`, and lambda expressions; C# has LINQ methods such as `Select`, `Where` and `Aggregate`. In a Unit 4 question, though, expect Haskell.

## Exam technique

- **Trace by substitution.** Write each step as an expression on its own line, as in the `fact 4` example.
- **State the base case first** when you write a recursive function, then the recursive case.
- **Order equations** from the most specific pattern (such as `0`) to the most general.
- **Check brackets** around recursive calls and negative numbers.
- **For folds,** write out the bracketed expansion before you evaluate.

## Common mistakes

- Writing `fact n - 1` instead of `fact (n - 1)`.
- Putting commas or brackets around the arguments: `add(3, 4)` is not the Haskell way.
- Using `=` to compare. Comparison is `==`.
- Forgetting the base case, giving infinite recursion.
- Starting a product fold from 0, which always gives 0.
- Confusing `filter`, which selects items, with `map`, which transforms every item.

## Next steps

- [Writing functional programs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-revision-notes/)
- [Writing functional programs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-practice/)
- [Lists in functional programming study guide](/resources/oxfordaqa-a-level-computer-science-9645-lists-in-functional-programming/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.2 Writing functional programs.
