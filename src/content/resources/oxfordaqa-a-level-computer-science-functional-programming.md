---
title: "OxfordAQA A-Level Computer Science: Functional programming (9645)"
seoTitle: "OxfordAQA A-Level CS Functional Programming Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA International A-level Computer Science topic 12: function types, composition, Haskell recursion, map, filter, folds and lists."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches topic 12, Functional programming, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It covers sections 3.12.1 to 3.12.3. Every outcome here is International A-level only and is examined in the written Unit 4 paper.

The specification says exam questions on functional programming will use the Haskell language, so every code sample here is Haskell.

Use this guide with the [revision notes](/resources/oxfordaqa-a-level-computer-science-functional-programming-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-computer-science-functional-programming-practice/). Recursion in a procedural language is covered in [object-oriented and additional programming](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/), and AS list skills are revised in [arrays and lists](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/). For the whole course, see the [course hub](/boards/oxfordaqa/a-level/computer-science/) and the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/). A short [free diagnostic](/diagnostics/) shows where to start.

## Coverage

| Spec section | Outcomes | Status |
|---|---|---|
| 3.12.1 The functional programming paradigm | Write a function type as f: A → B; name the domain and co-domain; know ℕ, ℤ, ℚ and ℝ; know what a first-class object is; explain function application, composition and higher-order functions | International A-level only |
| 3.12.2 Writing functional programs | Define and apply functions with arguments; use + − * / and ^; use ==, /=, >, <, &&, \|\| and not; write recursive functions with base and recursive cases using pattern matching; use map, filter, foldl and foldr | International A-level only |
| 3.12.3 Lists in functional programming | Define lists, including the empty list; see a list as head:tail; use head, tail, null, length, [] and ++; refer to the head and tail of a list argument inside a function | International A-level only |

## 3.12.1 The functional programming paradigm

### Function types, domain and co-domain

A function is a rule. For each input taken from a set A, it gives one output taken from a set B. Its name and type are written

```
f: A → B
```

A is the **argument type**, also called the **domain**: the set the inputs are chosen from. B is the **result type**, also called the **co-domain**: the set the outputs are chosen from. The function does not have to produce every member of the co-domain.

Two examples:

- `toDigit: {'0', '1', …, '9'} → ℕ` maps each digit character to its value. Only 0 to 9 are ever output, so most of ℕ is never used.
- `sign: ℤ → {-1, 0, 1}` gives -1 for a negative input, 0 for zero and 1 for a positive input. Every member of this co-domain is used.

### The number sets

| Symbol | Set | Examples |
|---|---|---|
| ℕ | Natural numbers, **including zero**: {0, 1, 2, 3, …} | 0, 15 |
| ℤ | Integers: {…, -2, -1, 0, 1, 2, …} | -6, 0, 40 |
| ℚ | Rational numbers: anything that can be written as a fraction of two integers | 2.5 = 5/2, 7/3, -6 = -6/1 |
| ℝ | Real numbers: all "possible real-world quantities" | π, √2, 2.5 |

Each set sits inside the next: every natural number is an integer, every integer is rational (9 = 9/1), and every rational is real. So -6 is in ℤ, ℚ and ℝ but not ℕ. π is real but not rational.

### First-class objects

A **first-class object** (or value) is one that may:

- appear in an expression;
- be assigned to a variable;
- be passed as an argument;
- be returned from a function call.

Integers, floating-point values, characters and strings are first-class in most languages. In functional languages, and in imperative languages that support it, **functions are first-class too**. Here a function is passed in as an argument:

```haskell
applyTwice f x = f (f x)
```

`applyTwice (*3) 5` applies "multiply by 3" twice: 5 → 15 → **45**. `(*3)` is a function used as a value.

### Function application

Giving particular inputs to a function is **function application**. Take

```haskell
perimeter l w = 2 * (l + w)
```

`perimeter 9 4` is the application of `perimeter` to the integer arguments 9 and 4, giving **26**. Its type is

```
perimeter: integer × integer → integer
```

where integer × integer is the **Cartesian product** of the integer set with itself: every possible pair of integers.

### Composition of functions

**Composition** joins two functions into a new one. Given f: A → B and g: B → C, the composition g ∘ f has domain A and co-domain C, so its type is A → C. **f is applied first**, then g is applied to f's result. The co-domain of f must match the domain of g.

**Worked example.** On ℝ, let f(x) = 3x − 1 and g(y) = y².

```
g ∘ f = (3x − 1)²       (f first, then square)
f ∘ g = 3x² − 1         (square first, then f)

(g ∘ f)(4) = g(f(4)) = g(11) = 121
(f ∘ g)(4) = f(g(4)) = f(16) = 47
```

The order matters. In Haskell the composition operator is a full stop: `(g . f) 4` evaluates to 121.

A type-level example: if `len: String → ℕ` and `isEven: ℕ → Boolean`, then `isEven ∘ len` has type String → Boolean. `len ∘ isEven` makes no sense, because a Boolean is not a String.

### Higher-order functions

A function is **higher-order** if it takes a function as an argument, returns a function as its result, or both. `applyTwice` is higher-order. So are `map`, `filter`, `foldl` and `foldr`, covered next.

## 3.12.2 Writing functional programs

### Defining and applying functions

A Haskell definition gives the name, the parameters separated by spaces, then `=` and the result:

```haskell
area l w = l * w
```

There are no brackets or commas around the arguments: `area 6 3` evaluates to 18.

### Arithmetic

| Operation | Haskell | Example | Result |
|---|---|---|---|
| Addition | `+` | `12 + 5` | 17 |
| Subtraction | `-` | `12 - 5` | 7 |
| Multiplication | `*` | `12 * 5` | 60 |
| Division | `/` | `23 / 4` | 5.75 |
| Power | `^` | `2 ^ 10` | 1024 |

`/` gives a fractional result. For whole-number division Haskell has `div` and `mod`: ``23 `div` 4`` is 5 and ``23 `mod` 4`` is 3. `^` needs a whole-number power of 0 or more.

### Boolean comparisons

Use `==` (equal), `/=` (not equal), `>`, `<`, `>=`, `<=`, and combine with `&&` (and), `||` (or) and `not`.

```haskell
validScore s = s >= 0 && s <= 50
```

`validScore 50` is `True`; `validScore 51` is `False`, so `not (validScore 51)` is `True`.

### Recursion with pattern matching

A recursive function needs at least one **base case**, which gives an answer directly, and at least one **recursive case**, which calls the function on a smaller input. In Haskell each case is a separate equation. **Pattern matching** picks the case: Haskell tries the equations from top to bottom and uses the first one whose pattern fits the argument.

**Worked example.**

```haskell
power b 0 = 1
power b e = b * power b (e - 1)
```

The first equation matches only when the second argument is 0, so it is the base case. Trace `power 3 4`:

```
power 3 4 = 3 * power 3 3
          = 3 * (3 * power 3 2)
          = 3 * (3 * (3 * power 3 1))
          = 3 * (3 * (3 * (3 * power 3 0)))
          = 3 * (3 * (3 * (3 * 1)))
          = 81
```

The brackets in `(e - 1)` are essential. Function application binds more tightly than any operator, so `power b e - 1` would mean `(power b e) - 1`, which calls `power b e` again and never reaches the base case. The same applies to factorial: write `fact n = n * fact (n - 1)`.

The equations must be in the right order. If `power b e` came first, it would match every call, including those with e = 0.

### map

`map` applies a function to every element of a list and returns the list of results.

```haskell
triple x = 3 * x
map triple [4, 0, 7, 11]      -- [12,0,21,33]
```

The result always has the same length as the input.

### filter

`filter` keeps exactly those elements that satisfy a condition.

```haskell
filter odd [12, 7, 30, 5, 9]      -- [7,5,9]
filter (>= 40) [35, 62, 40, 18]   -- [62,40]
```

`(>= 40)` is a function that returns `True` for numbers 40 or more. Order is kept.

### foldl and foldr

A fold reduces a list to a single value, using a combining function and an initial value. Haskell has two:

- `foldl` starts with the **leftmost** item and works forward.
- `foldr` starts with the **rightmost** item and works backward.

Written out in full for a list [x₁, x₂, x₃]:

```
foldl f z [x1, x2, x3] = f (f (f z x1) x2) x3
foldr f z [x1, x2, x3] = f x1 (f x2 (f x3 z))
```

In `foldl` the running value is the **left** operand at each step. In `foldr` each list item is the **left** operand and the running value is on the right.

**Worked example.** With subtraction and initial value 0 on [10, 4, 3]:

```
foldl (-) 0 [10, 4, 3] = ((0 - 10) - 4) - 3 = -17
foldr (-) 0 [10, 4, 3] = 10 - (4 - (3 - 0)) = 10 - 1 = 9
```

For `+` or `*` the two folds give the same answer, because the order of combining makes no difference: `foldr (*) 1 [2, 3, 5]` and `foldl (*) 1 [2, 3, 5]` are both **30**. Use 1, not 0, as the start value for `*`.

### Combining them

Higher-order functions can be nested. Working from the inside out:

```haskell
foldl (+) 0 (map triple (filter odd [12, 7, 30, 5, 9]))
```

`filter` gives [7, 5, 9]; `map triple` gives [21, 15, 27]; the fold adds them to **63**.

## 3.12.3 Lists in functional programming

### Defining lists

A list stores a sequence of values in square brackets. `[]` is the **empty list**.

```haskell
temps = [14, 9, 21, 6]
codes = ["red", "amber"]
```

### Head and tail

Any non-empty list can be written as **head:tail**. The head is one element; the tail is always a list.

```
[14, 9, 21, 6]  =  14 : [9, 21, 6]
```

The tail of a one-item list is the empty list: the tail of `[6]` is `[]`, still written in brackets.

### List operations

| Operation | Haskell | `temps` example | Result |
|---|---|---|---|
| Return head | `head temps` | first element | 14 |
| Return tail | `tail temps` | everything after the head | [9,21,6] |
| Test for empty | `null temps` | is it []? | False |
| Return length | `length temps` | number of elements | 4 |
| Construct empty list | `[]` | | [] |
| Append | `temps ++ [11]` | joins two lists | [14,9,21,6,11] |

`++` joins two lists, so a single item must go in brackets: `temps ++ [11]`, not `temps ++ 11`. `head []` and `tail []` cause a run-time error, so test with `null` (or a `[]` pattern) first.

### Head and tail inside a function

A pattern `(x:xs)` splits a list argument. Inside the function, `x` refers to the head and `xs` to the tail.

**Worked example 1: counting items.**

```haskell
countItems [] = 0
countItems (x:xs) = 1 + countItems xs
```

```
countItems [14, 9, 21, 6] = 1 + countItems [9, 21, 6]
                          = 1 + 1 + countItems [21, 6]
                          = 1 + 1 + 1 + countItems [6]
                          = 1 + 1 + 1 + 1 + countItems []
                          = 4
```

The `[]` pattern is the base case. Each call passes the tail, which is one item shorter.

**Worked example 2: building a new list.**

```haskell
doubleAll [] = []
doubleAll (x:xs) = (2 * x) : doubleAll xs
```

`doubleAll temps` gives [28, 18, 42, 12]: what `map` does, written by hand.

**Worked example 3: a one-item base case.**

```haskell
lastItem [x] = x
lastItem (x:xs) = lastItem xs
```

`[x]` matches only a one-item list. `lastItem temps` keeps dropping the head until `[6]` is left, then returns **6**. Swapping the two equations would break it: `(x:xs)` also matches `[6]`, so the call would carry on to `lastItem []`, which matches neither pattern and fails.

## Common errors

- Writing `f(3, 4)` in Haskell. Application is `f 3 4`.
- Leaving out brackets in a recursive call, such as `power b e - 1`.
- Saying the co-domain is "the outputs". It is the set outputs are chosen from; not every member has to be output.
- Applying g ∘ f with g first. f is applied first.
- Treating the tail as an element. `tail [5, 2]` is `[2]`, not 2.
- Using 0 as the start value for a product fold.
- Expanding `foldr (-)` with the running value on the left.

Next, use the [revision notes](/resources/oxfordaqa-a-level-computer-science-functional-programming-revision-notes/) for recall, then try the [practice questions](/resources/oxfordaqa-a-level-computer-science-functional-programming-practice/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. This page covers section 3.12 Functional programming (3.12.1 to 3.12.3).
