---
resourceId: "mb-ap-csa-3.5-revision-notes"
title: "Methods: How to Write Them: Revision Notes (Computer Science A 3.5)"
description: "One-page recap of writing methods in Java: void versus non-void, return statements and control flow, accessors and mutators, primitive parameters and preconditions."
course: "computer-science-a"
unit: 3
topics: ["3.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-3.5-study-guide"]
learningObjectives:
  - "Write void and non-void methods with correct headers and return statements"
  - "Trace a method call, including where a return statement stops execution"
  - "Write accessor and mutator methods and say what each does"
  - "Explain why changing a primitive parameter does not change the argument"
  - "State the initial conditions (preconditions) a method needs to work as described"
  - "Explain why a method does not compile (missing return, unreachable code, wrong type) and correct it"
skills: ["2", "3", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.5-study-guide", "mb-ap-csa-3.5-practice", "mb-ap-csa-3.5-checklist"]
next: "mb-ap-csa-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a"]
keyPoints:
  - "A void method does not return a value; a non-void method returns a single value of the type in its header, using return by value."
  - "Executing return sends control back to the caller and ends the method; code after it in the same path never runs, and a return inside a loop or if exits the whole method."
  - "An accessor returns a copy of an attribute's value (non-void); a mutator changes attributes and is often void."
  - "When an argument is a primitive, the parameter is initialised with a copy of its value, so changes to the parameter do not affect the argument."
  - "State the conditions a method needs before it works as intended; calling it outside them can give wrong results or exceptions."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These notes recap Topic 3.5. For the full explanations and worked examples, read the [study guide](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/).

## Recap

- A **void** method returns nothing. A **non-void** method returns a single value whose type is in the header (**return by value**).
- **`return`** hands control back to the caller. Code after it on the same path never runs; a `return` inside an `if` or a loop exits the whole method.
- A non-void method must return on **every** path.
- An **accessor** returns a copy of an attribute's value (non-void). A **mutator** changes attributes (often void).
- For a **primitive** argument the parameter is a **copy**. Changing the parameter does not change the argument.
- **Preconditions** are the initial conditions a method needs to work as described.

## Key relationships

| Method kind | Header pattern | Typical body |
|---|---|---|
| Accessor | `public int getCoins()` | `return coins;` |
| Mutator | `public void addCoins(int amount)` | `coins += amount;` |
| Mutator with result | `public boolean spend(int amount)` | test, change, `return true` / `return false` |
| Calculation | `public int coinsWithBonus(int percent)` | `return coins + coins * percent / 100;` |
| Helper | `private boolean isValid(int p)` | `return p > 0;` |

## Compile errors to recognise

| Message | Cause |
|---|---|
| `missing return statement` | A path through a non-void method has no return |
| `unreachable statement` | Code placed after a return in the same block |
| `incompatible types: possible lossy conversion from double to int` | Returning a `double` from an `int` method |
| `incompatible types: unexpected return value` | `return x;` inside a void method |

## Worked reminder

`Wallet(40)`; `addCoins(10)` makes 50; `spend(70)` returns `false` and leaves 50; `spend(30)` returns `true` and leaves 20; `coinsWithBonus(15)` is `20 + 20 * 15 / 100 = 23` and does not change the 20. With `int n = 5; h.addTen(n);` the value of `n` is still 5; with `n = h.addTenAndReturn(n);` it becomes 15. And `isPrime(15)` returns `false` the moment d reaches 3, without trying d = 4.

## Mistakes to avoid

- Forgetting the final `return` after an `if` / `else if` chain.
- Putting a statement after a `return`.
- Expecting a void method to give back a value.
- Expecting a primitive parameter to alter the caller's variable.
- Using integer division where a decimal was wanted (for example `a / b` with two `int` values).

## Quick self-check

1. What does `public void f(int x) { x = 0; }` do to the caller's argument? *Answer: nothing; x is a copy.*
2. A method contains `for (...) { if (cond) { return 1; } }` then `return 0;`. When does it return 0? *Answer: only if the condition was never true in the loop.*
3. Is `public int getX()` an accessor or a mutator? *Answer: an accessor.*
4. Give a sensible precondition for `int average(int total, int count)`. *Answer: `count > 0`.*
