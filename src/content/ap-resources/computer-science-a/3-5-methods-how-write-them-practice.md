---
resourceId: "mb-ap-csa-3.5-practice"
title: "Methods: How to Write Them: Practice Questions (Computer Science A 3.5)"
description: "Nine original Marlbridge practice questions on writing and tracing Java methods: return types, return flow, accessors and mutators, primitive parameters, preconditions and compile errors."
course: "computer-science-a"
unit: 3
topics: ["3.5"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-3.5-study-guide"]
learningObjectives:
  - "Write void and non-void methods with correct headers and return statements"
  - "Trace a method call, including where a return statement stops execution"
  - "Write accessor and mutator methods and say what each does"
  - "Explain why changing a primitive parameter does not change the argument"
  - "State the initial conditions (preconditions) a method needs to work as described"
  - "Explain why a method does not compile (missing return, unreachable code, wrong type) and correct it"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.5-study-guide", "mb-ap-csa-3.5-revision-notes", "mb-ap-csa-3.5-checklist"]
next: "mb-ap-csa-3.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. Classes named `Wallet`, `Helper` and `Checks` are printed in the [study guide](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/). All code was compiled and run.

## Question 1 (multiple choice · foundation)

Which method header is for a method that returns a `boolean` and may be called from any class?

- (A) `public void isEmpty()`
- (B) `private boolean isEmpty()`
- (C) `public boolean isEmpty()`
- (D) `public isEmpty(boolean)`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `public` allows access from other classes, and `boolean` before the name is the return type.

- (A) is void, so it returns nothing.
- (B) returns a `boolean` but is private, so only its own class can call it.
- (D) has no return type, so it is not a valid method header; `boolean` here is a parameter type.
</details>

## Question 2 (multiple choice · foundation)

Which statement about `return` is correct?

- (A) Statements after a `return` on the same path still execute.
- (B) A `return` inside a loop ends only the current iteration.
- (C) A `return` inside a loop ends the whole method.
- (D) A void method must always end with `return;`.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Executing a return inside a selection or iteration statement halts that statement and exits the method.

- (A) is false: such statements never run, and the compiler reports them as unreachable.
- (B) describes what a different statement (`continue`) does, not `return`.
- (D) is false: a bare `return;` in a void method is optional.
</details>

## Question 3 (multiple choice · core)

A `Wallet` has an `int` instance variable `coins`. `spend(int amount)` returns `false` and changes nothing if `amount > coins`, and otherwise subtracts `amount` and returns `true`. `coinsWithBonus(int percent)` returns `coins + coins * percent / 100` without changing `coins`.

```java
Wallet w = new Wallet(40);
w.addCoins(10);
System.out.println(w.spend(70) + " " + w.spend(30) + " " + w.getCoins() + " " + w.coinsWithBonus(15));
```

What is printed?

- (A) `true true 20 23`
- (B) `false true 20 23`
- (C) `false true 20 3`
- (D) `false false 50 57`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `addCoins(10)` makes 50. `spend(70)` is `false` (70 > 50). `spend(30)` is `true` and leaves 20. `getCoins()` is 20. `coinsWithBonus(15)` is 20 + 20 × 15 ÷ 100 = 20 + 3 = 23. The compiled program printed `false true 20 23`.

- (A) treats the first spend as successful.
- (C) returns only the bonus (3), not the coins plus the bonus.
- (D) assumes both spends fail and that 50 coins remain; that ignores the second spend.
</details>

## Question 4 (multiple choice · core)

```java
Helper h = new Helper();
int n = 5;
h.addTen(n);
System.out.print(n + " ");
n = h.addTenAndReturn(n);
System.out.println(n);
```

`addTen` is `public void addTen(int x) { x = x + 10; }` and `addTenAndReturn` is `public int addTenAndReturn(int x) { x = x + 10; return x; }`. What is printed?

- (A) `15 15`
- (B) `5 5`
- (C) `15 5`
- (D) `5 15`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `addTen` changes only its copy, so `n` prints as 5. `addTenAndReturn` returns the changed copy and the assignment stores 15 in `n`. Output: `5 15`.

- (A) assumes the first call changes `n`.
- (B) forgets that the returned value is stored into `n`.
- (C) reverses the two behaviours.
</details>

## Question 5 (multiple choice · core)

```java
public boolean isPrime(int n)
{
    if (n < 2)
    {
        return false;
    }
    for (int d = 2; d * d <= n; d++)
    {
        if (n % d == 0)
        {
            return false;
        }
    }
    return true;
}
```

What is the value of `isPrime(15) + " " + isPrime(13) + " " + isPrime(2) + " " + isPrime(1)`?

- (A) `false true true false`
- (B) `false false true false`
- (C) `true true true false`
- (D) `false true false false`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For 15, d = 2 gives a remainder of 1, and d = 3 gives 15 % 3 = 0, so it returns `false`. For 13, no d with d × d <= 13 divides it, so it returns `true`. For 2, the loop test 2 × 2 <= 2 is false, so it returns `true`. For 1, the first test returns `false`.

- (B) wrongly makes 13 not prime.
- (C) treats 15 as prime.
- (D) treats 2 as not prime because the loop never runs.
</details>

## Question 6 (multiple choice · core)

Which method does **not** compile?

- (A) `public int sign(int x) { if (x >= 0) { return 1; } return -1; }`
- (B) `public int sign(int x) { if (x > 0) { return 1; } else if (x < 0) { return -1; } }`
- (C) `public int sign(int x) { if (x > 0) { return 1; } else { return -1; } }`
- (D) `public void sign(int x) { if (x > 0) { return; } }`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** When `x` is 0, neither condition is true and the method ends without returning. The compiler reports `missing return statement`.

- (A) has a final `return -1;`, so every path returns.
- (C) returns in both branches.
- (D) is void, so a bare `return;` is legal and there is no need to return a value.
</details>

## Question 7 (constructed response · core)

Write a class `Tank` for a water tank. It has a capacity (set by the constructor, a whole number of litres) and the current number of litres (0 at the start).

- `fill(int amount)` adds the amount but never lets the tank hold more than its capacity.
- `drain(int amount)` removes the amount and returns `true` if the tank has at least that many litres; otherwise it changes nothing and returns `false`.
- `isEmpty()` returns whether there are 0 litres.
- `percentFull()` returns `litres * 100 / capacity` as an `int`.

State what is printed by the code that creates a tank of capacity 100, fills 70, fills 50, prints `percentFull()`, then prints `drain(30)`, `drain(80)`, `isEmpty()` and `percentFull()`.

<details>
<summary>Answer and explanation</summary>

```java
public class Tank
{
    private int litres;
    private int capacity;

    public Tank(int cap)
    {
        capacity = cap;
        litres = 0;
    }

    public void fill(int amount)
    {
        litres += amount;
        if (litres > capacity)
        {
            litres = capacity;
        }
    }

    public boolean drain(int amount)
    {
        if (amount > litres)
        {
            return false;
        }
        litres -= amount;
        return true;
    }

    public boolean isEmpty()
    {
        return litres == 0;
    }

    public int percentFull()
    {
        return litres * 100 / capacity;
    }
}
```

Trace: `fill(70)` gives 70; `fill(50)` would give 120, which is capped at 100; `percentFull()` prints 100; `drain(30)` prints `true` (70 remain); `drain(80)` prints `false` (80 > 70, no change); `isEmpty()` prints `false`; `percentFull()` prints 70. The compiled program printed `100`, `true`, `false`, `false`, `70`.

**Suggested Marlbridge rubric (7 marks).**

| Mark | Requirement |
|---|---|
| 1 | Header and two private `int` instance variables |
| 1 | Constructor sets the capacity from the parameter and litres to 0 |
| 1 | `fill` is void, adds the amount and caps at the capacity |
| 1 | `drain` tests the amount against the litres and returns `false` without changing state |
| 1 | `drain` subtracts and returns `true` otherwise |
| 1 | `isEmpty` and `percentFull` are public, non-void, with correct expressions |
| 1 | The five printed values are correct |
</details>

## Question 8 (constructed response · core)

Each method below fails to compile. Explain why and correct it.

```java
public int twice(int x)
{
    return x * 2;
    System.out.println("done");
}

public int half(double x)
{
    return x / 2;
}

public void show(int x)
{
    return x;
}
```

<details>
<summary>Answer and explanation</summary>

**`twice`:** the `println` follows a `return` in the same block, so it is an unreachable statement. Remove it or put it before the `return`.

**`half`:** `x / 2` is a `double` but the method returns `int`, so the compiler reports a possible lossy conversion. Change the return type to `double` (or cast: `(int) (x / 2)` if truncation is intended).

**`show`:** a void method cannot return a value (`unexpected return value`). Change the header to `public int show(int x)`, or remove the value and use a bare `return;`.

All three compiler messages were confirmed by compiling.

**Suggested Marlbridge rubric (6 marks).** One mark for the correct reason and one for a valid correction, for each of the three methods.
</details>

## Question 9 (constructed response · stretch)

A method is written as follows.

```java
public int average(int total, int count)
{
    return total / count;
}
```

(a) State a precondition that must be true for the method to work as intended.

(b) Describe what happens for `average(10, 4)` and for `average(10, 0)`.

(c) Explain why the result of `average(10, 4)` may not be what a user expects, and say how to return a `double` instead.

<details>
<summary>Answer and explanation</summary>

**(a)** `count` must be greater than 0 (it must not be 0, and a count of items cannot be negative).

**(b)** `average(10, 4)` returns 2 (integer division discards the 0.5). `average(10, 0)` throws an `ArithmeticException` with the message `/ by zero`. Both results were confirmed by running the code.

**(c)** Dividing two `int` values gives an `int`, so the fractional part is lost. Change the return type to `double` and cast one operand before dividing: `return (double) total / count;`, which would give 2.5.

**Suggested Marlbridge rubric (4 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): `count > 0` (or `count != 0` with some justification) |
| 1 | Part (b): 2 and the `ArithmeticException` for a zero count |
| 1 | Part (c): identifies integer division |
| 1 | Part (c): double return type with a cast |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Passing and Returning References study guide](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/).
- Missed Questions 1, 2 or 6: reread "Void and non-void methods" and "What return does to the flow of control" in the [study guide](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-study-guide/).
- Missed Questions 3, 4 or 5: redo Worked examples 1 and 2.
- Missed the writing questions: reread "Reading compile errors in methods", then tick the [topic checklist](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-checklist/).
