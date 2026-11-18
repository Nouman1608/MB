---
title: "Cambridge A Level Computer Science (9618): Recursion"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 19.2: essential features of recursion, writing and tracing recursive code, when it helps, and how a compiler uses the stack to unwind."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 19.2 "Recursion" of Cambridge International AS & A Level Computer Science 9618 asks you to "show understanding of recursion": its "essential features", "how recursion is expressed in a programming language", to "write and trace recursive algorithms" and to know "when the use of recursion is beneficial". You must also "show awareness of what a compiler has to do to translate recursive programming code", including the "use of stacks and unwinding". It is assessed in Paper 3, and recursive code can be required in Paper 4.

Related: [Recursion revision notes](/resources/cambridge-a-level-computer-science-9618-recursion-revision-notes/) · [Recursion practice questions](/resources/cambridge-a-level-computer-science-9618-recursion-practice/) · [Topic 19 Computational thinking and Problem-solving study guide](/resources/cambridge-a-level-computer-science-computational-thinking-and-problem-solving-study-guide/)

## The essential features

A recursive subroutine is one that is defined in terms of itself: somewhere in its body it calls itself. To work, it needs three features.

1. **A base case**: a condition under which the subroutine returns a result directly, without calling itself.
2. **A general (recursive) case**: the subroutine calls itself with a **smaller or simpler** version of the problem.
3. **Progress towards the base case**: each call must move closer to the base case, so that the base case is certain to be reached.

If the third feature fails, for example a call with n + 1 when the base case is n = 0, the calls never stop and the program eventually fails with a **stack overflow**.

## How recursion is expressed in a programming language

In code, recursion is simply a function or procedure that contains a call to itself, usually inside an IF statement that separates the base case from the general case. In Cambridge pseudocode:

```
FUNCTION SumDigits(n : INTEGER) RETURNS INTEGER
   IF n < 10 THEN
      RETURN n
   ELSE
      RETURN (n MOD 10) + SumDigits(n DIV 10)
   ENDIF
ENDFUNCTION
```

The base case is a one-digit number, which is its own digit sum. The general case takes the last digit (n MOD 10) and adds the digit sum of the rest (n DIV 10). Because n DIV 10 has one fewer digit, every call moves closer to the base case. The same structure is written in Python, Java or Visual Basic with that language's own syntax.

## Worked example 1: tracing a function as it winds and unwinds

Trace SumDigits(4072).

**Winding** (each call waits for the one it makes):

| Call | n | Base case? | Waits to return |
|---|---|---|---|
| 1 | 4072 | No | 2 + SumDigits(407) |
| 2 | 407 | No | 7 + SumDigits(40) |
| 3 | 40 | No | 0 + SumDigits(4) |
| 4 | 4 | Yes | returns 4 |

**Unwinding** (each return completes the waiting call above it):

- Call 3 returns 0 + 4 = 4.
- Call 2 returns 7 + 4 = 11.
- Call 1 returns 2 + 11 = **13**.

Check: 4 + 0 + 7 + 2 = 13. The deepest point had four calls active at once.

## Worked example 2: work done after the recursive call

Where an instruction sits relative to the recursive call decides when it runs.

```
PROCEDURE Echo(n : INTEGER)
   IF n > 0 THEN
      OUTPUT n
      Echo(n - 1)
      OUTPUT n * 10
   ENDIF
ENDPROCEDURE
```

Echo(3) outputs **3, 2, 1, 10, 20, 30**. The first OUTPUT runs on the way down, so it counts 3, 2, 1. Echo(0) does nothing: that is the base case. The second OUTPUT runs only as each call resumes on the way back up, in reverse order, so 10, 20, 30. Students who trace "down" but forget to come back "up" lose the last three values. A trace table with a column for "output after the call returns" prevents this.

## Recursion on a data structure: binary search

Some algorithms are naturally recursive because the problem divides into smaller problems of the same kind. A binary search can be written recursively, where each call searches half of the previous range.

```
FUNCTION BinSearch(Low : INTEGER, High : INTEGER, Target : INTEGER) RETURNS INTEGER
   DECLARE Mid : INTEGER
   IF Low > High THEN
      RETURN -1
   ELSE
      Mid ← (Low + High) DIV 2
      IF Data[Mid] = Target THEN
         RETURN Mid
      ELSE
         IF Target < Data[Mid] THEN
            RETURN BinSearch(Low, Mid - 1, Target)
         ELSE
            RETURN BinSearch(Mid + 1, High, Target)
         ENDIF
      ENDIF
   ENDIF
ENDFUNCTION
```

There are **two** base cases: the target is found, or the range is empty (Low > High). With Data[1:8] = 4, 9, 15, 21, 30, 38, 42, 57 and Target = 10, the calls are BinSearch(1, 8) (Mid 4, value 21), BinSearch(1, 3) (Mid 2, value 9), BinSearch(3, 3) (Mid 3, value 15) and BinSearch(3, 2), which returns −1. That −1 is passed back unchanged through every waiting call.

Tree traversals are the other classic case: an in-order traversal visits the left subtree (a recursive call), then the node, then the right subtree (another recursive call), and the base case is an empty subtree.

## What a compiler has to do to translate recursive code

A recursive call is translated in the same way as any subroutine call, but the method only works because of the **stack**.

When the compiled code makes a call, it pushes a **stack frame** onto the call stack containing:

- the **return address**: where execution continues when this call ends;
- the values of the **parameters** for this call;
- space for the call's **local variables**.

Each call therefore has its own copy of n, Mid and so on; a deeper call cannot overwrite the values a waiting call still needs. When a call returns, the compiled code places the return value where the caller can find it, **pops** that frame, and jumps to the saved return address. Because frames are popped in the reverse order to that in which they were pushed, the waiting calls resume one by one from the deepest upwards: this is **unwinding**.

So the compiler must generate code that pushes a frame on every call, accesses parameters and local variables through the current frame, and on every return passes back the result, pops the frame and returns to the stored address. If the recursion is too deep, the stack runs out of memory: a stack overflow.

## When recursion is beneficial

**Beneficial** when the problem is defined recursively or divides into smaller problems of the same type:

- traversing or searching trees, where each subtree is itself a tree;
- divide-and-conquer algorithms such as binary search;
- mathematical definitions given recursively, such as a highest common factor by repeated remainders.

Here the recursive code is shorter, closer to the definition of the problem, and easier to read and check.

**Less suitable** when the depth could be very large or speed and memory matter: every call costs a stack frame and the time to push and pop it, so an iterative loop is usually faster and uses less memory. Some recursive solutions also repeat work, recalculating the same values many times. Any recursive algorithm can be rewritten iteratively, if necessary with an explicit stack.

## Common mistakes

- A base case that is never reached because the parameter does not move towards it.
- Forgetting RETURN in front of the recursive call in a function, so the result is lost.
- Tracing only the winding phase and omitting work done after the call returns.
- Saying recursion is always more efficient; it uses more memory than iteration.
- Describing the stack frame as holding "the code" rather than return address, parameters and local variables.
- Writing a recursive binary search with only one base case, so an absent item loops for ever.

## Exam technique

- **Identify** the base case: quote the condition and what is returned.
- **Trace**: one row per call on the way down, then show each return on the way up with its value.
- **Write**: state the base case first, then the general case, and check the parameter moves towards the base case.
- **Explain** stack use: name the three contents of a frame, then push on call, pop on return, unwinding.
- **Evaluate** recursion against iteration: give a benefit and a drawback linked to the problem in the question.
