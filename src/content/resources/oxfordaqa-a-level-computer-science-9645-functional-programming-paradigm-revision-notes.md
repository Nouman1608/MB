---
title: "OxfordAQA A-Level Computer Science (9645): The functional programming paradigm -- Revision Notes"
seoTitle: "OxfordAQA 9645 Functional Paradigm Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.12.1: function types, domain and co-domain, number sets, first-class objects, composition and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.12.1 The functional programming paradigm** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.12, examined in Unit 4). For explanations and worked examples, see the [paradigm study guide](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm/), then practise with the [paradigm practice questions](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-practice/). Exam questions on functional programming use Haskell.

## What the specification requires

- Know that a function f has a **function type** A → B, written f: A → B.
- Know that A is the **domain** and B is the **co-domain**.
- Be familiar with the **natural, integer, rational and real** number systems as domains and co-domains.
- Know that a function is a **first-class object** and what first-class objects can do.
- Know what **function application** means.
- Know what **composition** of functions means.
- Understand what a **higher-order function** is.

## Key terms

| Term | Meaning |
|---|---|
| Function | A rule that gives, for each input from a set A, an output from a set B |
| Domain | The set the function's input values are chosen from (A) |
| Co-domain | The set the function's output values are chosen from (B); not every member need be output |
| ℕ | Natural numbers including zero: 0, 1, 2, 3, … |
| ℤ | Integers: …, −2, −1, 0, 1, 2, … |
| ℚ | Rational numbers: those that can be written as a fraction of integers (includes all integers) |
| ℝ | Real numbers: all possible real-world quantities |
| First-class object | A value that can appear in expressions, be assigned to a variable, be passed as an argument and be returned from a call |
| Function application | Giving a function particular inputs, for example add 3 4 |
| Composition | g ∘ f: apply f first, then g to the result |
| Higher-order function | Takes a function as an argument, returns a function, or both |
| Cartesian product | The set of all ordered groups of inputs, written with × |

## Types at a glance

| Function | Type | Notes |
|---|---|---|
| `double x = x * 2` | ℕ → ℕ | odd numbers never output |
| `isEven` | ℤ → Boolean | uses both truth values |
| `len` | String → ℕ | argument first, result second |
| `halve` | ℤ → ℚ | odd integers give fractions |
| `volume l w h = l * w * h` | ℝ × ℝ × ℝ → ℝ | three inputs, three sets in the product |

Write the arrow from the input type to the output type. If a function takes two arguments, the domain is a Cartesian product, for example `add: integer × integer → integer`.

## Number sets

| Number | ℕ | ℤ | ℚ | ℝ |
|---|---|---|---|---|
| 12 | yes | yes | yes | yes |
| −5 | no | yes | yes | yes |
| 0.75 | no | no | yes | yes |
| √2 | no | no | no | yes |

Sets nest: ℕ inside ℤ inside ℚ inside ℝ. Use the smallest correct set when you choose a type.

## First-class objects: four tests

| Property | Haskell example |
|---|---|
| Appears in an expression | `double 3 + double 4` |
| Assigned to a variable | `twice = double` |
| Passed as an argument | `map double [1, 5, 2]` gives `[2,10,4]` |
| Returned from a call | `adder n = (+ n)`; `adder 5 20` gives 25 |

## Composition

For f: A → B and g: B → C, g ∘ f has type A → C. **f runs first.**

Worked reminder: f(x) = x − 4, g(y) = 3y, input 10.

| Expression | Working | Result |
|---|---|---|
| (g ∘ f)(10) | g(f(10)) = g(6) | 18 |
| (f ∘ g)(10) | f(g(10)) = f(30) | 26 |

Haskell writes composition with a full stop: `(g . f) 10` is 18. The two results differ, so **order matters**.

Type check by writing the types in a row. For isBig ∘ double ∘ len with len: String → ℕ, double: ℕ → ℕ and isBig: ℕ → Boolean, the chain `String → ℕ → ℕ → Boolean` fits, so the type is String → Boolean.

## Higher-order functions

| Function | Higher-order? | Reason |
|---|---|---|
| `double x = x * 2` | No | takes and returns a number |
| `twice f x = f (f x)` | Yes | takes a function f |
| `adder n = (+ n)` | Yes | returns a function |
| `map`, `filter`, `foldl`, `foldr` | Yes | take a function as an argument |

`twice double 5` evaluates to 20: double 5 is 10, then double 10 is 20.

## Exam traps

- **Zero is natural.** ℕ includes 0 in this specification.
- **Co-domain is not the output set.** It is the set outputs are chosen from.
- **Composition order.** In g ∘ f, f is applied first.
- **Reversed type.** Argument type goes before the arrow.
- **Integers are rational.** 7 can be written as 7/1.
- **Higher-order needs a function** as an argument or result. A function that merely handles numbers is not higher-order.
- **First-class needs all four properties named** when you are asked to define the term.

## Quick self-test

1. Write the type of a function g that takes an integer and returns a Boolean.
2. What is the domain of f: ℝ → ℕ?
3. Is −3 in ℕ, ℤ, ℚ or ℝ? List every set that contains it.
4. Give two of the four things a first-class object may do.
5. State the type of `area: ℝ × ℝ → ℝ` in words: how many arguments does it take?
6. If f(x) = x + 2 and g(y) = y × y, evaluate (g ∘ f)(3).
7. Evaluate (f ∘ g)(3) for the same functions.
8. What type does g ∘ f have if f: A → B and g: B → C?
9. Is `map` higher-order? Why?
10. Why can ℕ not be the co-domain of `halve`?
11. Name the operator that Haskell uses for composition.
12. What is function application?

### Answers

1. g: ℤ → Boolean.
2. ℝ, the real numbers.
3. ℤ, ℚ and ℝ. It is not in ℕ.
4. Any two of: appear in expressions; be assigned to a variable; be passed as an argument; be returned from a function call.
5. Two arguments, both real numbers (the domain is a Cartesian product).
6. f(3) = 5, then g(5) = 25.
7. g(3) = 9, then f(9) = 11.
8. A → C.
9. Yes: it takes a function as an argument.
10. Halving an odd integer gives a fraction, and fractions are not natural numbers.
11. The full stop (.).
12. Giving a function particular inputs, such as add 3 4.

## Next steps

- [Paradigm study guide](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm/)
- [Paradigm practice questions](/resources/oxfordaqa-a-level-computer-science-9645-functional-programming-paradigm-practice/)
- [Functional programming revision notes](/resources/oxfordaqa-a-level-computer-science-functional-programming-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.12.1 The functional programming paradigm.
