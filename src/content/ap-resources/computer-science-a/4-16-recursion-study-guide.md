---
resourceId: "mb-ap-csa-4.16-study-guide"
title: "Recursion: Study Guide (Computer Science A 4.16)"
description: "How to trace recursive Java methods: base case, recursive call, the call stack, results returned in reverse order, printing before and after the call, call counts, missing base cases, and the iteration link."
course: "computer-science-a"
unit: 4
topics: ["4.16"]
resourceType: "study-guide"
prerequisites:
  - "Writing and calling methods with parameters and return values (Topics 1.9 and 3.5)"
  - "Tracing loops and conditionals (Topics 2.3 and 2.7)"
  - "String methods length and substring (Topic 1.15)"
learningObjectives:
  - "Identify the base case and the recursive call in a recursive method and say why both are needed"
  - "Determine the value returned by, or the output printed by, a recursive method by tracing each call"
  - "Explain that each call has its own parameters and local variables and that parameter values show the progress, like a loop counter"
  - "State that any recursive solution can be written iteratively and vice versa, and explain what a missing base case does"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.16-revision-notes", "mb-ap-csa-4.16-practice", "mb-ap-csa-4.16-checklist"]
next: "mb-ap-csa-4.16-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "A recursive method calls itself and has at least one base case, which stops the recursion, and at least one recursive call on a smaller or simpler problem."
  - "Each call has its own parameters and local variables; the parameter values record the progress, much as a loop variable does."
  - "To trace, expand the calls downwards to the base case, then substitute the returned values back up; anything printed before or after the call appears in that order."
  - "Any recursive solution can be written with loops and vice versa. The exam asks you to trace recursive code; writing recursive code is outside the scope."
faqs:
  - question: "Do I have to write recursive methods on the exam?"
    answer: "No. Writing recursive code is outside the scope of the course and exam. You need to determine the result of calling recursive methods: what they return or print, and how many calls they make."
  - question: "What is a base case?"
    answer: "It is a condition for which the method returns a result directly without calling itself, so the recursion halts. A recursive method needs at least one base case, and the recursive calls must move towards it."
  - question: "What happens if there is no base case?"
    answer: "The method keeps calling itself and each call takes space for its own variables. Eventually the program runs out of space and Java throws a StackOverflowError."
  - question: "Is recursion better than a loop?"
    answer: "Neither is always better. Any recursive solution can be written with a loop and any loop with recursion. Recursion can make some problems, such as processing nested or divided data, easier to express."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## A method that calls itself

Most methods you have written call other methods. A **recursive method** is a method that **calls itself**. That sounds circular, but it works because each call is given a **smaller or simpler** version of the problem, until the problem is so simple that it can be answered immediately.

Think of the instruction "to count the people in the queue, ask the person in front how many people are in front of them, and add one". The person at the front has nobody ahead and says 0. Everyone behind then adds one and passes the answer back. The front person is the **base case**; asking the next person is the **recursive call**.

Every correct recursive method has two parts.

- **At least one base case**: a condition for which the method returns a result **without** calling itself. It halts the recursion.
- **At least one recursive call**: the method calls itself with an argument closer to the base case.

Recursion is another form of repetition: the method repeats its own body, as a loop does. The parameter values capture the progress of a recursive process, much as the loop variable captures the progress of a loop.

**Scope note.** For this course you must be able to **determine the result of calling recursive methods**: what they return, what they print, and how many calls they make. Writing recursive code is outside the scope of the course and exam, so this guide concentrates on tracing.

## The first example: factorial

```java
public static int fact(int n)
{
    if (n <= 1)
    {
        return 1;            // base case
    }
    return n * fact(n - 1);  // recursive case
}
```

Compiled and run, `fact(4)` is 24, `fact(5)` is 120, and `fact(1)` and `fact(0)` are both 1.

## The call stack: how a trace really works

When a method calls another (or itself), Java keeps the first call's local variables and its place in the code, starts the new call with its **own** parameters, and comes back later. Each waiting call is a **frame**, and the frames pile up in a **call stack**. The newest call is on top and must finish first.

Figure 1 shows `fact(3)`.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="stk416-t stk416-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="stk416-t">The call stack for fact(3)</title>
<desc id="stk416-d">Two stacks of boxes. The left stack, labelled calls going down, shows three frames from top to bottom: fact(3) with n equal to 3 waiting for fact(2), then fact(2) with n equal to 2 waiting for fact(1), then fact(1) with n equal to 1 which meets the base case. The right stack, labelled returns coming back, shows fact(1) returns 1, fact(2) returns 2 times 1 equals 2, and fact(3) returns 3 times 2 equals 6. Arrows show that the calls go down and the results come back up.</desc>
<rect width="560" height="270" fill="#ffffff"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="20" y="40" width="220" height="48"/><rect x="20" y="88" width="220" height="48"/><rect x="20" y="136" width="220" height="48" stroke-width="4"/>
<rect x="320" y="40" width="220" height="48"/><rect x="320" y="88" width="220" height="48"/><rect x="320" y="136" width="220" height="48" stroke-width="4"/>
<line x1="260" y1="62" x2="260" y2="170"/><path d="M254 162 L260 172 L266 162"/>
<line x1="300" y1="170" x2="300" y2="62"/><path d="M294 70 L300 60 L306 70"/>
</g>
<g fill="#1d2b44" font-size="14" text-anchor="middle">
<text x="130" y="28" font-weight="bold">Calls go down</text>
<text x="430" y="28" font-weight="bold">Results come back up</text>
<text x="130" y="68">fact(3): n = 3, needs fact(2)</text>
<text x="130" y="116">fact(2): n = 2, needs fact(1)</text>
<text x="130" y="164">fact(1): n = 1, base case</text>
<text x="430" y="68">fact(3) = 3 * 2 = 6</text>
<text x="430" y="116">fact(2) = 2 * 1 = 2</text>
<text x="430" y="164">fact(1) returns 1</text>
<text x="280" y="225" font-size="13">Each call has its own n. The heavy-bordered frame is the base case.</text>
<text x="280" y="248" font-size="13">No frame can finish until the frame below it has returned.</text>
</g>
</svg>
<figcaption>Figure 1. Evaluating fact(3). Each recursive call adds a frame with its own copy of n. The base case at the bottom returns 1 and each waiting frame then finishes its multiplication, from the bottom upwards, giving 6.</figcaption>
</figure>

The method for tracing is:

1. **Go down.** Write the call, its argument, and what it is waiting for. Keep going until a call reaches a base case.
2. **Come back up.** The base case returns a value. The call waiting for it finishes its calculation and returns, and so on up to the first call.

Two facts matter every time.

- **Each call has its own variables.** `n` in `fact(3)` is 3 and `n` in `fact(2)` is 2 at the same time. A change in one call never alters another call's `n`.
- **A call cannot finish before the call it made has returned.** The multiplication `n * fact(n - 1)` cannot be done until `fact(n - 1)` has produced a value.

## Where printing goes matters

```java
public static void mystery(int n)
{
    if (n > 0)
    {
        System.out.print(n + " ");
        mystery(n - 1);
        System.out.print(n + " ");
    }
}
```

For `mystery(3)` the order of events is:

| Step | Event |
|---|---|
| 1 | `mystery(3)` prints `3`, calls `mystery(2)` |
| 2 | `mystery(2)` prints `2`, calls `mystery(1)` |
| 3 | `mystery(1)` prints `1`, calls `mystery(0)` |
| 4 | `mystery(0)`: the condition `0 > 0` is false, so nothing happens; it returns |
| 5 | `mystery(1)` resumes and prints `1` |
| 6 | `mystery(2)` resumes and prints `2` |
| 7 | `mystery(3)` resumes and prints `3` |

The output is `3 2 1 1 2 3 ` (confirmed by running). The numbers before the call appear in **descending** order as the stack builds; the numbers after the call appear in **ascending** order as it unwinds. If you move the second `print` before the recursive call, both rounds would count down.

This method has an implicit base case: when `n` is 0 the `if` is false and the method simply returns without calling itself.

## Worked example 1: digits and strings

**Task.** Trace `sumDigits(4729)` and `rev("stop")`.

```java
public static int sumDigits(int n)
{
    if (n < 10)
    {
        return n;
    }
    return n % 10 + sumDigits(n / 10);
}

public static String rev(String s)
{
    if (s.length() <= 1)
    {
        return s;
    }
    return rev(s.substring(1)) + s.substring(0, 1);
}
```

**`sumDigits(4729)`.** `n % 10` is the last digit; `n / 10` removes it (integer division).

| Call | `n` | `n < 10`? | Returns |
|---|---|---|---|
| `sumDigits(4729)` | 4729 | no | `9 + sumDigits(472)` |
| `sumDigits(472)` | 472 | no | `2 + sumDigits(47)` |
| `sumDigits(47)` | 47 | no | `7 + sumDigits(4)` |
| `sumDigits(4)` | 4 | yes | `4` |

Substituting back up: `7 + 4 = 11`; `2 + 11 = 13`; `9 + 13 = 22`. The method returns **22**, which matches 4 + 7 + 2 + 9 and the run.

**`rev("stop")`.** `substring(1)` is the String without its first character; `substring(0, 1)` is the first character.

| Call | `s` | Returns |
|---|---|---|
| `rev("stop")` | stop | `rev("top") + "s"` |
| `rev("top")` | top | `rev("op") + "t"` |
| `rev("op")` | op | `rev("p") + "o"` |
| `rev("p")` | p | `"p"` (base case: length 1) |

Back up: `"p" + "o"` = `"po"`; `"po" + "t"` = `"pot"`; `"pot" + "s"` = `"pots"`. The result is **`"pots"`**, the String reversed (run and confirmed).

**Check.** In both examples the argument gets smaller each call (fewer digits, shorter String), which is why the base case is reached.

## Worked example 2: counting calls, and a missing base case

**Task.** How many times is `fib` called by `fib(4)` and by `fib(5)`?

```java
public static int fib(int n)
{
    if (n <= 1)
    {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
```

This method makes **two** recursive calls. Let `C(n)` be the number of calls made by `fib(n)` including itself. For the base cases, `C(0) = C(1) = 1`. Otherwise `C(n) = 1 + C(n - 1) + C(n - 2)`.

| `n` | `fib(n)` | `C(n)` working | `C(n)` |
|---|---|---|---|
| 0 | 0 | base case | 1 |
| 1 | 1 | base case | 1 |
| 2 | 1 | 1 + 1 + 1 | 3 |
| 3 | 2 | 1 + 3 + 1 | 5 |
| 4 | 3 | 1 + 5 + 3 | 9 |
| 5 | 5 | 1 + 9 + 5 | 15 |

So `fib(4)` makes 9 calls and `fib(5)` makes 15, which matches the counter in the run (`3 calls=9` and `5 calls=15`). Notice how fast the count grows: the same sub-problems (for example `fib(2)`) are recomputed many times. That is a reason to be careful with this style of recursion; the loop version is much faster.

**A missing base case.** Consider

```java
public static int bad(int n)
{
    return n + bad(n - 1);   // never stops
}
```

Each call waits for another call to a smaller `n` and there is no condition that stops the chain. The frames pile up until the program has no space left, and Java throws a **`StackOverflowError`** (the run caught exactly that). Even with a base case, the recursion can fail the same way if the argument never reaches it: a base case `n == 0` is never met by a call sequence 7, 5, 3, 1, -1, ... that steps over 0 by twos.

**A trace with a gap.** For `g(7)`:

```java
public static int g(int n)
{
    if (n <= 0) return 0;
    System.out.print("[" + n + "]");
    return n + g(n - 2);
}
```

The calls are `g(7)`, `g(5)`, `g(3)`, `g(1)`, `g(-1)`. The last meets `n <= 0` and returns 0. The prints happen before each recursive call, so the output is `[7][5][3][1]` and the returns add up to 1 + 0 = 1, 3 + 1 = 4, 5 + 4 = 9, 7 + 9 = 16. The method returns 16 (confirmed by running). The base case uses `<=` rather than `==`, which is why stepping by two over 0 still terminates.

## Recursion and iteration

Any recursive solution can be replicated with an **iterative** approach (loops), and vice versa. The recursive `fact` does the same job as

```java
int r = 1;
for (int i = 2; i <= n; i++) { r *= i; }
```

(and `iterFact(4)` returned 24 in the run). The loop variable `i` plays the role the parameter `n` plays in the recursive version: it records the progress. Likewise `sumTo(n)`, which returns `n + sumTo(n - 1)` with base case 0, matches the loop that adds 1 up to `n`: for 5 both give 15.

Use this link to check a recursive trace: if a recursive method is equivalent to a simple loop, the loop's result is the answer.

## Common misconceptions

- **"Each call shares one `n`."** Each call has its own parameters and local variables.
- **"The method returns when it reaches the base case."** The base case returns to its caller, and then every waiting call finishes in turn.
- **"Printing after the recursive call happens in the same order as printing before it."** After-call output appears in the reverse order of the calls.
- **"A recursive method needs `else`."** The base case may `return`, after which no `else` is needed.
- **"More recursive calls mean a different base case."** A method with two recursive calls, like `fib`, still needs its base case(s).
- **"`StackOverflowError` means the computer is broken."** It means the recursion went too deep, usually because there is no base case or it is never reached.
- **"I must write recursive code on the exam."** Tracing is required; writing recursive code is outside the scope.

## Where this leads

Topic 4.17 uses recursion to traverse Strings, arrays and `ArrayList`s, to describe **binary search** and to describe **merge sort**; there you again trace the calls, this time with a range of indices as the progress parameters. Practise with the [Topic 4.16 practice questions](/advanced-course-resources/computer-science-a/4-16-recursion-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-a/4-16-recursion-revision-notes/) and tick off the [checklist](/advanced-course-resources/computer-science-a/4-16-recursion-checklist/). Next: the [Topic 4.17 study guide on recursive searching and sorting](/advanced-course-resources/computer-science-a/4-17-recursive-searching-sorting-study-guide/).
