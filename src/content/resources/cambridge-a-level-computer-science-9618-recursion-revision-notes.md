---
title: "Cambridge A Level Computer Science (9618): Recursion -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 19: Computational thinking and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 19.2
syllabusTopics:
  - qualification: "a-level"
    topic: "computational-thinking-and-problem-solving"
    subtopic: "recursion"
description: "Condensed 9618 notes on recursion: base and general cases, tracing winding and unwinding, stack frames, compiler translation and when recursion helps."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 19.2 "Recursion" of Cambridge International AS & A Level Computer Science 9618: the essential features of recursion, how it is written in code, writing and tracing recursive algorithms, when recursion is beneficial, and what a compiler must do to translate recursive code (the use of stacks and unwinding). It is assessed in Paper 3, and recursive code may be needed in Paper 4.

Related: [Recursion study guide](/resources/cambridge-a-level-computer-science-9618-recursion/) · [Recursion practice questions](/resources/cambridge-a-level-computer-science-9618-recursion-practice/) · [Topic 19 revision notes](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-revision-notes/)

## Key terms

| Term | Meaning |
|---|---|
| Recursion | A subroutine calling itself as part of its own definition |
| Base case | Condition where a result is returned without a further call |
| General (recursive) case | The subroutine calls itself with a smaller or simpler problem |
| Winding | The sequence of calls going deeper towards the base case |
| Unwinding | The calls returning one by one, from the deepest back to the first |
| Call stack | The stack holding a frame for each active subroutine call |
| Stack frame | Return address, parameter values and local variables for one call |
| Stack overflow | The call stack runs out of memory, usually because recursion is too deep or never ends |

## Essential features: check every recursive answer

1. Is there a **base case**?
2. Is there a **general case** that calls the subroutine itself?
3. Does each call move **towards** the base case?

**Template**

```
FUNCTION Solve(n : INTEGER) RETURNS INTEGER
   IF <base case condition> THEN
      RETURN <simple answer>
   ELSE
      RETURN <combine n with Solve(smaller n)>
   ENDIF
ENDFUNCTION
```

Remember RETURN before the recursive call in a function, or the result is lost.

## Tracing method

1. Make a row for each call: the parameter values and what it is waiting for.
2. Stop at the base case and write its value.
3. Work back up, completing each waiting call with the value returned to it.
4. Any instruction **after** the recursive call runs during unwinding, in reverse order of the calls.

**Quick examples**

| Call | Result |
|---|---|
| SumDigits(352): 2 + SumDigits(35) → 5 + SumDigits(3) → 3 | 3 + 5 + 2 = 10 |
| A procedure that OUTPUTs n, calls itself with n − 1 while n > 0, then OUTPUTs n again, run with n = 2 | 2, 1, 1, 2 |
| Highest common factor HCF(A, B): base case B = 0 returns A, otherwise HCF(B, A MOD B); HCF(30, 12) → HCF(12, 6) → HCF(6, 0) | 6 |

## What the compiler does

- **On each call**: push a stack frame (return address, parameters, local variables) and jump to the subroutine.
- **Inside the call**: parameters and local variables are accessed in the current (top) frame, so each call has its own copies.
- **On each return**: pass back the return value, pop the frame, jump to the saved return address.
- **Unwinding**: frames popped in reverse order, so the most recent call finishes first.
- **Limit**: every active call uses stack space; too many gives stack overflow.

## When to use recursion

| Recursion is beneficial | Iteration is better |
|---|---|
| The problem is defined recursively (tree traversal, HCF by remainders) | Very deep recursion is possible (risk of stack overflow) |
| Divide-and-conquer (binary search) | Speed and memory are critical |
| Shorter, clearer code that mirrors the definition | The recursive version would repeat the same work many times |

Any recursive algorithm can be rewritten with a loop, sometimes using an explicit stack.

## Exam traps

- A parameter that moves away from the base case (n + 1 instead of n − 1).
- Two base cases needed (found / range empty in a binary search) but only one written.
- A trace that stops at the base case and never shows the returns.
- Outputs after the recursive call listed in the wrong order.
- Claiming recursion uses less memory than iteration.
- Stack frame described without the return address.

## Self-test

1. State the three essential features of a recursive subroutine.
2. What happens if a recursive function has no base case?
3. List the three things stored in a stack frame.
4. Why does each recursive call have its own copy of its local variables?
5. What is unwinding?
6. Evaluate SumDigits(9106).
7. HCF(B = 0 returns A, otherwise HCF(B, A MOD B)). Evaluate HCF(45, 20).
8. A procedure outputs n after calling itself with n − 1 while n > 0. What does it output when called with 3?
9. Give one problem for which recursion is a natural choice, and why.
10. Give two drawbacks of recursion compared with iteration.
11. In a recursive function, why must the recursive call be preceded by RETURN?
12. How many frames are on the stack at the deepest point of SumDigits(4072)?

### Answers

1. A base case; a general case that calls itself; each call moves towards the base case.
2. It keeps calling itself until the stack runs out of memory (stack overflow).
3. Return address, parameter values, local variables.
4. Each call pushes its own stack frame, and variables are accessed in the current frame.
5. The calls returning in turn from the deepest back to the first, popping their frames and completing each waiting call.
6. 6 + 0 + 1 + 9 = 16.
7. HCF(45, 20) → HCF(20, 5) → HCF(5, 0) = 5.
8. 1, 2, 3 (the outputs happen during unwinding).
9. For example, traversing a binary tree: each subtree is itself a tree, so the same subroutine handles it, with an empty subtree as the base case.
10. Any two: uses more memory (a stack frame per call); slower because of call overhead; risk of stack overflow; may repeat work.
11. So that the value returned by the inner call is passed back to the caller; otherwise it is calculated and then lost.
12. Four (n = 4072, 407, 40, 4).
