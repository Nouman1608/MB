---
title: "AQA A Level Computer Science (7517): Fundamentals of functional programming -- Study Guide"
resourceType: "study-guides"
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
description: "AQA A Level Computer Science 7517 section 4.12 guide: function types, first-class and higher-order functions, map, filter, fold, composition and lists."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Functional programming treats computation as the evaluation of functions, much as in mathematics, rather than as a sequence of instructions that change variables. It is a different way of thinking from the imperative style you use for most of the course, and the exam tests it with short, precise questions: what is the type of this function, what does this expression evaluate to, and how are map, filter and fold used. This guide uses Python for the examples because it is easy to run and check, and notes where AQA's own notation differs.

## Where this fits in the specification

Fundamentals of functional programming is section 4.12 of AQA 7517 and is assessed on Paper 2, the written paper. The recursion practised in [Fundamentals of algorithms](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) is the main control structure here, and the higher-order functions are the tools described in [Big Data](/resources/aqa-a-level-computer-science-big-data-study-guide/). Questions often use Haskell-style notation, so read the notation carefully, even though you are not expected to write full Haskell programs.

## Functions and their types

A **function** maps each value from a set of inputs to exactly one output. In AQA notation, the **function type** is written f : A -> B, where A is the **argument type** (the **domain**) and B is the **result type** (the **codomain**). A function that takes two integers and returns one integer has type Integer x Integer -> Integer. The domain is the set of allowed inputs, and the **range** is the set of outputs actually produced, which may be smaller than the codomain.

**Function application** means giving a function its argument: for f(x) = x + 3, applying f to 4 gives 7.

## First-class objects

In a language where functions are **first-class objects**, a function can be:

- assigned to a variable,
- passed as an argument to another function,
- returned as the result of another function, and
- stored in a data structure.

A function that takes a function as an argument or returns one is a **higher-order function**.

## Pure functions and immutability

Functional programming favours **pure functions**. A pure function always gives the same result for the same arguments and has **no side effects**: it does not change a global variable, write to a file or read hidden state. Data is **immutable**, so instead of changing a list, a new list is created. Benefits are code that is easier to test and reason about, results that do not depend on call order, and safe use of many processors at once. The cost is that programs that must interact with the world (input, output, state) need extra care and may use more memory because of the copying.

## Partial application and composition

**Partial application** gives a function only some of its arguments and returns a new function that waits for the rest. Starting from a function add of two arguments, applying it to 5 gives a function that adds 5. This is possible because a function of two arguments can be seen as a function of one argument that returns another function. In Python:

```python
add = lambda a: lambda b: a + b
add_five = add(5)
print(add_five(2))   # 7
```

**Function composition** builds a new function by applying one function to the result of another. If f : A -> B and g : B -> C, then the composition g after f has type A -> C, and (g after f)(x) = g(f(x)). Order matters. With add3 and double, double after add3 applied to 4 gives double(7) = 14, but add3 after double applied to 4 gives add3(8) = 11.

## Higher-order functions: map, filter, fold

- **Map** applies a function to every item and returns a list of the results, in the same order and of the same length. map (double) [3, 8, 5, 12, 7] gives [6, 16, 10, 24, 14].
- **Filter** keeps only the items for which a predicate (a function returning true or false) is true. Filtering [3, 8, 5, 12, 7] for even numbers gives [8, 12].
- **Fold** (also called reduce) combines all items into one value using a function and a starting value. A **left fold** works from the start of the list: it applies the function to the starting value and the first item, then to that result and the second item, and so on. Folding with + and a start of 0 sums a list: 3 + 8 + 5 + 12 + 7 = 35.

For an operation that is not commutative the direction matters. Folding subtraction over [10, 3, 2] from 0 from the left gives ((0 - 10) - 3) - 2 = -15, but from the right it gives 10 - (3 - (2 - 0)) = 9.

## Lists

A list is built from an **empty list** and the operation **cons**, which adds an item to the front. Four basic operations are: **head** (the first item), **tail** (the list without its first item), **cons** (add an item to the front), and **length** or an **empty test**. Lists are processed with recursion: handle the empty list as the base case, otherwise do something with the head and recurse on the tail. In Python, with slicing standing in for tail:

```python
def total(l):
    return 0 if not l else l[0] + total(l[1:])

def length(l):
    return 0 if not l else 1 + length(l[1:])
```

For [3, 8, 5, 12, 7], total gives 35 and length gives 5. There is no loop and no variable changes.

## Worked example 1: combining the three functions

Find the sum of the squares of all numbers greater than 4 in [3, 8, 5, 12, 7].

1. **Filter** with "greater than 4": [8, 5, 12, 7] (3 is removed).
2. **Map** with square: [64, 25, 144, 49].
3. **Fold** with + from 0: 64 + 25 + 144 + 49 = 282.

```python
from functools import reduce
xs = [3, 8, 5, 12, 7]
result = reduce(lambda a, x: a + x,
                map(lambda x: x * x,
                    filter(lambda x: x > 4, xs)),
                0)
print(result)   # 282
```

The result is 282, and the original list is unchanged. Each stage is a separate expression that can be tested alone.

## Worked example 2: tracing a recursive map

Define map recursively as: map(f, empty) = empty; map(f, list) = cons(f(head), map(f, tail)). Trace map(double, [3, 8, 5]).

1. map(double, [3, 8, 5]) = cons(6, map(double, [8, 5]))
2. map(double, [8, 5]) = cons(16, map(double, [5]))
3. map(double, [5]) = cons(10, map(double, []))
4. map(double, []) = [] (base case)

Unwinding: cons(10, []) = [10]; cons(16, [10]) = [16, 10]; cons(6, [16, 10]) = [6, 16, 10]. The result is [6, 16, 10], the doubled items in order.

## Common mistakes

- Confusing the domain (inputs) with the codomain (the type of the result).
- Applying composition in the wrong order. g after f means f runs first.
- Saying map "removes" items. Only filter changes the length.
- Forgetting the starting value in a fold, or ignoring the direction for subtraction.
- Writing a recursive list function with no base case for the empty list.
- Describing a function as pure while it changes a global variable.

## Exam technique

In an evaluate question, write out the intermediate lists, one step per line, as in worked example 1, since marks go for each stage. State function types in full, with an arrow between argument and result types. When asked for an advantage of functional programming, name the property (for example, no side effects) and say what it allows (for example, functions can be run in parallel without interfering). **Explain** needs the reason; **state** needs the fact.

## Check your understanding

1. What does the notation f : Integer -> Boolean tell you? *Answer: f takes an integer and returns a Boolean.*
2. What is a first-class object? *Answer: a value that can be stored, passed as an argument and returned from functions, which includes functions themselves.*
3. Why is a pure function easy to test? *Answer: its result depends only on its arguments, so the same inputs always give the same output.*
4. Evaluate map (+1) [2, 4, 6]. *Answer: [3, 5, 7].*
5. Evaluate filter (> 5) [2, 9, 5, 7]. *Answer: [9, 7].*
6. Evaluate a left fold with * and a start of 1 over [2, 3, 4]. *Answer: ((1 x 2) x 3) x 4 = 24.*
7. What is partial application? *Answer: supplying some of a function's arguments to get a new function that takes the rest.*
8. With double and add3, what is double after add3 applied to 1? *Answer: double(add3(1)) = double(4) = 8.*

## Frequently asked questions

**What is the difference between map, filter and fold?**
Map applies a function to every item and returns a list of the same length. Filter keeps only the items for which a predicate is true. Fold combines all the items into a single value using a function and a starting value.

**What is a pure function?**
A pure function always gives the same result for the same arguments and has no side effects, such as changing a global variable or writing to a file.

**What is partial application in functional programming?**
Partial application supplies only some of a function's arguments and returns a new function that takes the rest. For example, applying add to 5 gives a function that adds 5.

**In what order is a function composition applied?**
In g after f, the function f runs first and g is applied to its result, so (g after f)(x) = g(f(x)). Applying composition in the wrong order is a common mistake.
