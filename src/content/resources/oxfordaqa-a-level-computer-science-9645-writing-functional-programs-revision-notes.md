---
title: "OxfordAQA A-Level Computer Science (9645): Writing functional programs -- Revision Notes"
seoTitle: "OxfordAQA 9645 Writing Functional Programs Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.12.2: Haskell syntax, operators, recursion and pattern matching, map, filter, folds and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.12.2 Writing functional programs** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.12, examined in Unit 4). For worked traces, see the [writing functional programs study guide](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/), then practise with the [writing functional programs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-practice/). Exam questions use Haskell.

## What the specification requires

- Show experience of constructing simple programs in a functional language (Haskell in the exam).
- **Define and use a function** with arguments, for example `add a b = a + b`.
- Apply addition, subtraction, multiplication, division and power (`^`).
- Perform **Boolean comparisons** and combine them: `==`, `/=`, `>`, `<`, `&&`, `||`, `not`.
- Define functions using **recursion** with base and recursive cases.
- Use **pattern matching** to choose which case of a recursive function to apply.
- Use the higher-order functions **map**, **filter**, and **foldl / foldr**.

## Key terms

| Term | Meaning |
|---|---|
| Base case | The case that gives an answer without another recursive call |
| Recursive case | The case that calls the function again on a smaller problem |
| Pattern matching | Choosing the equation whose pattern fits the arguments, trying equations from the top |
| map | Applies a function to every item of a list, returning a list of results |
| filter | Keeps exactly the items that satisfy a condition |
| foldl | Reduces a list to one value working from the left, with an initial value |
| foldr | Reduces a list to one value working from the right, with an initial value |
| Section | An operator with one argument in brackets, such as `(* 3)`, used as a function |

## Syntax at a glance

| Task | Haskell |
|---|---|
| Define a function | `add a b = a + b` |
| Apply a function | `add 3 4` (spaces, no commas) |
| Nested application | `add (double 2) 5` |
| Negative argument | `double (-3)` |
| Whole-number division and remainder | `div 7 2` is 3, `mod 7 2` is 1 |
| Real division | `7 / 2` is 3.5 |
| Power | `2 ^ 10` is 1024 |
| Precedence | `^` first, then `*` and `/`, then `+` and `-` |

Check: `2 + 3 * 4 ^ 2` is 50 and `(2 + 3) * 4 ^ 2` is 80.

## Boolean operators

| Operator | Meaning | Operator | Meaning |
|---|---|---|---|
| `==` | equal | `&&` | and |
| `/=` | not equal | `\|\|` | or |
| `>` | greater than | `not` | not |
| `<` | less than | | |

Leap year: `isLeap y = (mod y 4 == 0 && mod y 100 /= 0) || mod y 400 == 0`. It is True for 2024 and 2000, False for 1900 and 2023.

## Recursion template

```haskell
name base-pattern = base-answer
name n            = ... name (smaller n) ...
```

- Put the base case **first**.
- Call the function on a **smaller** value, with brackets: `fact (n - 1)`.
- Use two base cases when the definition looks back two steps (Fibonacci).

### Worked reminder: fact and gcd

```haskell
fact 0 = 1
fact n = n * fact (n - 1)

gcdOf a 0 = a
gcdOf a b = gcdOf b (mod a b)
```

| Call | Substitution | Value |
|---|---|---|
| `fact 4` | 4 * (3 * (2 * (1 * 1))) | 24 |
| `fact 5` | 5 * fact 4 | 120 |
| `gcdOf 84 36` | gcdOf 36 12, then gcdOf 12 0 | 12 |
| `gcdOf 105 45` | gcdOf 45 15, then gcdOf 15 0 | 15 |

Fibonacci values from `fib 0` upward: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.

## map, filter and folds

| Expression | Result |
|---|---|
| `map (* 3) [4, 1, 5]` | `[12,3,15]` |
| `filter (< 10) [15, 8, 20, 3]` | `[8,3]` |
| `filter (> 10) [12, 7, 30, 18, 5, 25]` | `[12,30,18,25]` |
| `foldl (+) 0 [3, 5, 8]` | 16 |
| `foldl (*) 1 [1, 2, 3, 4, 5]` | 120 |
| `foldl (-) 100 [10, 20, 5]` | 65 |
| `foldl (-) 0 [1, 2, 3, 4]` | -10 |
| `foldr (-) 0 [1, 2, 3, 4]` | -2 |
| `map (^ 2) (filter odd [3, 8, 5, 2, 7])` | `[9,25,49]` |

Expansions:

- `foldl f z [a, b, c]` is `f (f (f z a) b) c`.
- `foldr f z [a, b, c]` is `f a (f b (f c z))`.

Use 0 as the initial value for addition and 1 for multiplication.

## Exam traps

- **Missing brackets.** `fact n - 1` is `(fact n) - 1` and never ends.
- **Wrong equation order.** Put the specific pattern (such as `0`) above the general one.
- **Comma syntax.** Haskell uses spaces: `add 3 4`, not `add(3, 4)`.
- **Equality.** Compare with `==`, not `=`.
- **Initial value.** A product fold starting at 0 is always 0.
- **map or filter.** map changes every item and keeps the length; filter keeps some items and may shorten the list.
- **Fold direction.** For `-` the two folds differ, so write out the bracketed expansion.

## Quick self-test

1. Write a Haskell function `square` that squares its argument.
2. Evaluate `div 17 5` and `mod 17 5`.
3. Evaluate `3 + 2 ^ 3 * 2`.
4. Evaluate `not (4 > 9) && (6 == 6)`.
5. Why must the equation `fact 0 = 1` come before `fact n = ...`?
6. Write the base case for a function `power b e` that raises b to the power e.
7. Evaluate `map (+ 5) [10, 0, 7]`.
8. Evaluate `filter (/= 3) [3, 1, 3, 4]`.
9. Evaluate `foldl (+) 0 [10, 20, 30]`.
10. Evaluate `foldl (-) 100 [10, 20, 5]`.
11. Give the expansion of `foldr (+) 0 [1, 2, 3]`.
12. What two things must a recursive definition have?

### Answers

1. `square x = x * x`
2. 3 and 2.
3. 2 ^ 3 = 8, times 2 = 16, plus 3 = 19.
4. `not False && True` = True.
5. Otherwise `fact n` would match 0 first and the base case would never be used, giving endless recursion.
6. `power b 0 = 1`
7. `[15,5,12]`
8. `[1,4]`
9. 60.
10. 65.
11. 1 + (2 + (3 + 0)) = 6.
12. A base case and a recursive case that works on a smaller problem.

## More on this topic

- [Writing functional programs study guide](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/)
- [Writing functional programs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs-practice/)
- [Functional programming revision notes](/resources/oxfordaqa-a-level-computer-science-functional-programming-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.2 Writing functional programs.
