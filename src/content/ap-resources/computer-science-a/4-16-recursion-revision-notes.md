---
resourceId: "mb-ap-csa-4.16-revision-notes"
title: "Recursion: Revision Notes (Computer Science A 4.16)"
description: "A short recap of recursion for tracing: base case and recursive case, one set of local variables per call, order of prints, the call-count idea and the link to loops."
course: "computer-science-a"
unit: 4
topics: ["4.16"]
resourceType: "revision-notes"
prerequisites:
  - "Writing and calling methods with parameters and return values (Topics 1.9 and 3.5)"
  - "Tracing loops and conditionals (Topics 2.3 and 2.7)"
  - "String methods length and substring (Topic 1.15)"
learningObjectives:
  - "Recall the structure of a recursive method"
  - "Recall the tracing method"
  - "Avoid the common errors"
skills: ["3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.16-study-guide", "mb-ap-csa-4.16-practice", "mb-ap-csa-4.16-checklist"]
next: "mb-ap-csa-4.16-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Base case stops; recursive case calls with a smaller argument."
  - "Trace down to the base case, then return values back up."
  - "No base case (or one never reached) gives a StackOverflowError."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation, figure and traced examples: [Topic 4.16 study guide](/advanced-course-resources/computer-science-a/4-16-recursion-study-guide/).

## Recap

A **recursive method** calls itself. It has at least one **base case**, which halts the recursion, and at least one **recursive call**. Each call has its **own** parameters and local variables. Parameter values capture progress, like a loop variable. Any recursive solution can be written iteratively and vice versa. Writing recursive code is outside the scope; **tracing** is what you need.

```java
public static int fact(int n)
{
    if (n <= 1) { return 1; }          // base case
    return n * fact(n - 1);            // recursive case
}
// fact(4) -> 4 * fact(3) -> 4 * 3 * fact(2) -> 4 * 3 * 2 * fact(1) -> 4 * 3 * 2 * 1 = 24
```

## Key relationships

| Idea | Rule |
|---|---|
| Base case | returns without calling the method again |
| Recursive case | calls the method on a smaller or simpler argument |
| Tracing | expand calls down to the base case, then substitute returns back up |
| Local variables | one set per call; calls do not share them |
| Print before the call | appears in call order (outermost first) |
| Print after the call | appears in reverse call order (innermost first) |
| Two recursive calls | number of calls can grow very quickly (`fib(5)` makes 15) |
| No reachable base case | `StackOverflowError` |
| Iteration link | loop variable plays the role of the parameter |

## Assumptions

- The argument moves towards the base case on every call.
- The base case condition is actually reachable (use `<=` or `<` when the argument may skip a value).
- Strings are processed with `substring` and `length`.

## A mini-example to rehearse

`fact(4)` is 24. `sumDigits(4729)` is `9 + sumDigits(472)`, which unwinds to 22. `rev("stop")` is `rev("top") + "s"`, which unwinds to `"pots"`. `mystery(3)`, which prints `n` before and after the recursive call, outputs `3 2 1 1 2 3`. `fib(4)` returns 3 after 9 calls; `fib(5)` returns 5 after 15 calls. A method with no reachable base case, such as `bad(n) = n + bad(n - 1)`, ends with a `StackOverflowError`.

## Mistakes to avoid

1. Mixing up the values of `n` in different calls.
2. Stopping the trace when the base case returns instead of continuing back up.
3. Printing the after-call output in the same order as the before-call output.
4. Forgetting that integer division drops the remainder (`472 / 10` is 47).
5. Counting calls without including the base-case calls.
6. Assuming a base case with `==` is reached when the argument steps over the value.

## How this topic is usually tested

- Give the value returned by a call such as `fact(4)` or `sumDigits(4729)`.
- Give the exact output of a recursive method that prints.
- Say how many times a method is called.
- Explain what happens when the base case is missing or never met.
- Choose the loop that does the same as a given recursive method.

## Quick self-check

1. `fact(5)`? **120**
2. Output of `mystery(2)` (prints before and after)? **`2 1 1 2`**
3. What does `rev("abc")` return? **`"cba"`**
4. What error follows from a recursion that never reaches its base case? **`StackOverflowError`**
5. Does each recursive call have its own copy of the parameter? **Yes.**
