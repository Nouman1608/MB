---
resourceId: "mb-ap-csa-3.5-study-guide"
title: "Methods: How to Write Them: Study Guide (Computer Science A 3.5)"
description: "Learn to write Java methods: void and non-void headers, return by value, how return exits a method, accessors and mutators, primitive parameters passed by copy, preconditions and common compile errors."
course: "computer-science-a"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "Constructors and the anatomy of a class (Topics 3.3 and 3.4)"
  - "if statements and loops (Unit 2)"
prerequisiteResources: ["mb-ap-csa-3.4-study-guide"]
learningObjectives:
  - "Write void and non-void methods with correct headers and return statements"
  - "Trace a method call, including where a return statement stops execution"
  - "Write accessor and mutator methods and say what each does"
  - "Explain why changing a primitive parameter does not change the argument"
  - "State the initial conditions (preconditions) a method needs to work as described"
  - "Explain why a method does not compile (missing return, unreachable code, wrong type) and correct it"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-3.5-revision-notes", "mb-ap-csa-3.5-practice", "mb-ap-csa-3.5-checklist"]
next: "mb-ap-csa-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "A void method does not return a value; a non-void method returns a single value of the type in its header, using return by value."
  - "Executing return sends control back to the caller and ends the method; code after it in the same path never runs, and a return inside a loop or if exits the whole method."
  - "An accessor returns a copy of an attribute's value (non-void); a mutator changes attributes and is often void."
  - "When an argument is a primitive, the parameter is initialised with a copy of its value, so changes to the parameter do not affect the argument."
  - "State the conditions a method needs before it works as intended; calling it outside them can give wrong results or exceptions."
faqs:
  - {"question": "What is the difference between an accessor and a mutator?", "answer": "An accessor lets other classes obtain a copy of the value of an instance variable or class variable, so it is a non-void method. A mutator (modifier) changes the value of an instance variable or class variable and is often void."}
  - {"question": "If I change a parameter inside a method, does the variable I passed in change?", "answer": "Not when the argument is a primitive value. The parameter starts as a copy of the value, so assigning to it changes only the copy. (If the argument is an object reference, the method can alter the object it refers to; see Topic 3.6.)"}
  - {"question": "Why does the compiler say missing return statement?", "answer": "Because a non-void method must return a value on every path through it. If an if or else if might be skipped, add a final return or an else so every path ends in a return."}
  - {"question": "Can a method have more than one return statement?", "answer": "Yes. Several return statements are common, for example one in each branch of a selection or one inside a loop. As soon as one executes, the method ends."}
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## A method is a named behaviour

If a class's instance variables are what an object *knows*, its methods are what it *does*. You have been calling other people's methods since Unit 1, such as `substring` and `Math.abs`. In this topic you write your own, which is what the second free-response question on the exam asks you to do (alongside the class header, private instance variables and constructors).

Every method has a **header** and a **body**. The header says three things: the method's access (`public` or `private`), its **return type** (or `void`), and its name with the **parameter list**. The body is the code that carries out the behaviour.

## Void and non-void methods

- A **void method** does not return a value. Its header has the keyword `void` where the return type would be. It is called for its *effect*, such as changing an instance variable or printing.
- A **non-void method** returns a **single value**. Its header has the return type, such as `int`, `boolean` or `String`, in place of `void`. It is called for its *result*, which can be stored, printed or used in an expression.

In a non-void method, a **return expression** compatible with the return type is evaluated, and the value is returned. This is called **return by value**: the caller receives the value that was computed.

```java
public int getCoins()                 // non-void: returns an int
public void addCoins(int amount)      // void: returns nothing
public boolean spend(int amount)      // non-void: returns a boolean
```

## What `return` does to the flow of control

The `return` keyword returns the flow of control to the point where the method or constructor was called. This has consequences you must be able to trace:

- **Code after a `return` on the same path never executes.** In fact the compiler refuses it as an *unreachable statement*.
- **A `return` inside a selection or a loop halts that statement and exits the whole method.** Execution does not go on to the next iteration, and does not finish the loop.
- A non-void method must return a value on **every** path. If the compiler cannot see that every path ends in a `return`, it reports `missing return statement`.

A void method may also use a bare `return;` to leave early, though that is less common.

## Accessors and mutators

Because instance variables are private, other classes need public methods to read and change them.

- An **accessor** method lets objects of other classes obtain a **copy** of the value of an instance variable (or class variable). It is a non-void method: `getCoins()`.
- A **mutator** (modifier) method **changes** the values of instance variables (or class variables). It is often void: `addCoins(int amount)`. A mutator may also return a value, as `spend` does when it reports success.

## Parameters of primitive type

Methods with parameters receive values through them and use those values to do their job. When an argument is a **primitive value** (`int`, `double`, `boolean`), the parameter is initialised with a **copy** of that value. **Changes to the parameter have no effect on the corresponding argument.**

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="par-title par-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="par-title">A primitive argument is copied into the parameter</title>
<desc id="par-desc">Left box: the caller, with variable n holding 5 before and after the call h.addTen(n). An arrow labelled copy of the value 5 leads to the right box: inside addTen, the parameter x starts as 5 and is then changed to 15 by x = x + 10. A note beneath says x is a separate variable, so n is still 5 when the method ends.</desc>
<rect x="0" y="0" width="640" height="240" fill="#ffffff"/>
<rect x="20" y="30" width="230" height="140" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="390" y="30" width="230" height="140" fill="#dbe4f0" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="14"><text x="32" y="56" font-weight="bold">Caller</text><text x="32" y="88">int n = 5;</text><text x="32" y="112">h.addTen(n);</text><text x="32" y="148">n is still 5 afterwards</text>
<text x="402" y="56" font-weight="bold">Inside addTen</text><text x="402" y="88">x starts as 5 (a copy)</text><text x="402" y="112">x = x + 10;  x is now 15</text><text x="402" y="148">x disappears when it ends</text></g>
<path d="M250 100 L388 100" stroke="#1d2b44" stroke-width="2"/><polygon points="388,100 376,94 376,106" fill="#1d2b44"/>
<text x="319" y="90" text-anchor="middle" font-size="13" fill="#1d2b44">copy of 5</text>
<text x="320" y="205" text-anchor="middle" font-size="13" fill="#1d2b44">x and n are separate variables, so changing x cannot change n.</text>
</svg>
<figcaption>Figure 1. Passing a primitive. The method works on a copy; the caller's variable is untouched. The words in each box carry the meaning, not the colour.</figcaption>
</figure>

## Preconditions: what must be true for a method to work

A method works as described only if certain **initial conditions** hold. These are its **preconditions**. For `average(int total, int count)` that returns `total / count`, a sensible precondition is `count > 0`. If a caller passes `count` of 0, an `int` division by zero throws `ArithmeticException` with the message `/ by zero`. When you read a specification, mark the preconditions (for example, that an object reference is not `null`); they tell you what you do **not** have to check and what the caller is responsible for.

## Worked example 1: writing and tracing methods from a specification

**Task.** A `Wallet` stores a whole number of coins. Write: an accessor `getCoins`; a mutator `addCoins` that adds an amount; a method `spend` that removes an amount only if the wallet holds at least that many, returning whether it did; and `coinsWithBonus(int percent)` that returns the number of coins the wallet would hold with that percentage bonus added (integer arithmetic, the wallet is not changed).

**Step 1: choose each header.** `getCoins` returns an `int`, so `public int getCoins()`. `addCoins` just changes state: `public void addCoins(int amount)`. `spend` must report success: `public boolean spend(int amount)`. `coinsWithBonus` returns an `int` and must not change `coins`: `public int coinsWithBonus(int percent)`.

**Step 2: write the bodies.**

```java
public class Wallet
{
    private int coins;

    public Wallet(int startingCoins)
    {
        coins = startingCoins;
    }

    public int getCoins()
    {
        return coins;
    }

    public void addCoins(int amount)
    {
        coins += amount;
    }

    public boolean spend(int amount)
    {
        if (amount > coins)
        {
            return false;
        }
        coins -= amount;
        return true;
    }

    public int coinsWithBonus(int percent)
    {
        return coins + coins * percent / 100;
    }
}
```

**Step 3: trace.** Start with `Wallet w = new Wallet(40);`.

```java
w.addCoins(10);
System.out.println(w.spend(70));
System.out.println(w.spend(30));
System.out.println(w.getCoins());
System.out.println(w.coinsWithBonus(15));
```

| Call | `coins` before | Test or calculation | `coins` after | Output |
|---|---|---|---|---|
| `addCoins(10)` | 40 | 40 + 10 | 50 | |
| `spend(70)` | 50 | 70 > 50 is true, so `return false` | 50 | `false` |
| `spend(30)` | 50 | 30 > 50 is false; subtract; `return true` | 20 | `true` |
| `getCoins()` | 20 | | 20 | `20` |
| `coinsWithBonus(15)` | 20 | 20 + 20 × 15 ÷ 100 = 20 + 3 | 20 | `23` |

The output of the compiled program was `false`, `true`, `20`, `23`.

**Check.** In `spend`, the first `return false;` ends the method, so the subtraction never runs on the failing path. Without the early return, a failing call would have changed the state. In `coinsWithBonus`, the expression `coins * percent / 100` is evaluated as `(20 * 15) / 100` = `300 / 100` = `3`, using integer division, and `coins` itself was not changed, so `getCoins()` would still be 20.

## Worked example 2: primitive parameters and returns inside loops

**Part A: does the argument change?**

```java
public class Helper
{
    public void addTen(int x)
    {
        x = x + 10;
    }

    public int addTenAndReturn(int x)
    {
        x = x + 10;
        return x;
    }
}
```

```java
Helper h = new Helper();
int n = 5;
h.addTen(n);
System.out.println(n);
n = h.addTenAndReturn(n);
System.out.println(n);
```

`addTen(n)` gets a copy of 5. Its `x = x + 10;` makes the copy 15, and nothing is returned, so `n` stays 5 and the first output is `5`. `addTenAndReturn(n)` also works on a copy, but it returns it with `return x;`. The assignment `n = ...` stores the returned 15 into `n`, so the second output is `15`. The program printed `5` then `15`. The only way for a method to give a primitive result to the caller is to return it.

**Part B: return inside a loop.**

```java
public class Checks
{
    /** Precondition: n >= 0. */
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

    public String grade(int mark)
    {
        if (mark >= 70)
        {
            return "A";
        }
        if (mark >= 50)
        {
            return "B";
        }
        return "C";
    }
}
```

Consider `isPrime`. Trace three calls.

| Call | Early test | Loop trace (d, d × d <= n?, n % d) | Returns |
|---|---|---|---|
| `isPrime(15)` | 15 < 2? no | d=2: 4 <= 15, 15 % 2 = 1; d=3: 9 <= 15, 15 % 3 = 0, so `return false` | `false` |
| `isPrime(13)` | no | d=2: 4 <= 13, 1; d=3: 9 <= 13, 1; d=4: 16 <= 13 is false, loop ends | `true` |
| `isPrime(2)` | no | d=2: 4 <= 2 is false, so the loop body never runs | `true` |
| `isPrime(1)` | 1 < 2: `return false` | not reached | `false` |

The output of `isPrime(15) + " " + isPrime(13) + " " + isPrime(2) + " " + isPrime(1)` was `false true true false`.

**Check.** For `isPrime(15)`, once `return false;` executed at d = 3, the loop did not continue to d = 4. That is the "return exits the whole method" rule in action. The final `return true;` is reached only when the loop finishes without finding a divisor.

## Reading compile errors in methods

Four mistakes appear in questions asking why code does not compile. All four messages below came from the compiler:

- **Missing return on some path.** An `if` / `else if` with no final `else` and no return after it: `missing return statement`. Fix: add a final `return` or make the last branch an `else`.
- **Statement after a return.** `return x * 2;` followed by a `System.out.println` in the same block: `unreachable statement`. Fix: move or remove the statement.
- **Wrong type.** `public int half(double x) { return x / 2; }`: `incompatible types: possible lossy conversion from double to int`. Fix: change the return type, or cast deliberately.
- **Returning a value from a void method.** `public void show(int x) { return x; }`: `incompatible types: unexpected return value`. Fix: change `void` to `int`, or remove the value.

## Common misconceptions

- **"A method that changes its parameter changes the caller's variable."** For a primitive argument, the parameter is a copy, so the caller's variable is unaffected.
- **"`return` just ends the loop."** It ends the whole method.
- **"A void method can give a result back if I name it well."** A void method returns nothing. If the caller needs a value, the method must be non-void.
- **"An accessor should change the object."** An accessor returns a copy of a value and leaves the state unchanged.
- **"If my `if` has a `return`, I do not need one after it."** You do, unless every path returns. The compiler checks all paths.
- **"A call to a non-void method updates the variable automatically."** The returned value is lost unless you store or use it, as in `n = h.addTenAndReturn(n);`.

## Where this leads

Methods are the heart of the class-design free-response question, and they come back in nearly every later topic. [Passing and Returning References of an Object](/advanced-course-resources/computer-science-a/3-6-methods-passing-returning-references-object-study-guide/) covers what changes when the argument is an object rather than a primitive. First, try the [practice questions](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-practice/), review the [revision notes](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-revision-notes/) and tick the [topic checklist](/advanced-course-resources/computer-science-a/3-5-methods-how-write-them-checklist/). To check your constructors, see [Constructors](/advanced-course-resources/computer-science-a/3-4-constructors-study-guide/).
