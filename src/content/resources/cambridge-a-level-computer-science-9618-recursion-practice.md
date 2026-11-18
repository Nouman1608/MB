---
title: "Cambridge A Level Computer Science (9618): Recursion -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 practice questions with answers on recursion: base cases, traces, recursive strings and trees, writing recursive code and the call stack."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Recursion study guide](/resources/cambridge-a-level-computer-science-9618-recursion/) · [Recursion revision notes](/resources/cambridge-a-level-computer-science-9618-recursion-revision-notes/)

---

## Section A

**1.** State the **three** essential features of a recursive subroutine. **[3]**

**2.** Study this function.

```
FUNCTION Mystery(A : INTEGER, B : INTEGER) RETURNS INTEGER
   IF B = 0 THEN
      RETURN A
   ELSE
      RETURN Mystery(B, A MOD B)
   ENDIF
ENDFUNCTION
```

Identify the base case and the general case. **[2]**

**3.** State **three** items stored in a stack frame when a recursive call is made. **[3]**

**4.** Explain what is meant by a stack overflow and give **one** way a recursive subroutine can cause it. **[2]**

**5.** Explain what is meant by unwinding. **[2]**

## Section B

**6.** Using the function Mystery from Question 2:

**(a)** Trace Mystery(84, 36), showing the parameters of each call and the value returned. **[3]**

**(b)** State what the function calculates. **[1]**

**7.** Study this procedure.

```
PROCEDURE Show(n : INTEGER)
   IF n >= 1 THEN
      Show(n - 2)
      OUTPUT n
   ENDIF
ENDPROCEDURE
```

**(a)** State the output when Show(7) is called. Explain why the values appear in that order. **[3]**

**(b)** State the output when Show(6) is called. **[1]**

**8.** The array Data[1:100] holds integers. Write a recursive pseudocode function CountOf(Target : INTEGER, n : INTEGER) RETURNS INTEGER that returns how many of the first n elements of Data are equal to Target. **[5]**

**9.** This function uses the Cambridge string functions LENGTH, LEFT and RIGHT, and & to join strings.

```
FUNCTION Reverse(S : STRING) RETURNS STRING
   IF LENGTH(S) <= 1 THEN
      RETURN S
   ELSE
      RETURN RIGHT(S, 1) & Reverse(LEFT(S, LENGTH(S) - 1))
   ENDIF
ENDFUNCTION
```

Trace Reverse("CODE"), showing each call and each value returned. **[3]**

**10.** A binary search tree is stored in arrays. RootPtr = 1 and −1 is the null pointer.

| Index | Data | LeftPtr | RightPtr |
|---|---|---|---|
| 1 | 50 | 2 | 3 |
| 2 | 30 | 4 | −1 |
| 3 | 70 | 5 | 6 |
| 4 | 20 | −1 | −1 |
| 5 | 60 | −1 | −1 |
| 6 | 80 | −1 | −1 |

```
PROCEDURE Visit(Ptr : INTEGER)
   IF Ptr <> -1 THEN
      Visit(Tree[Ptr].LeftPtr)
      OUTPUT Tree[Ptr].Data
      Visit(Tree[Ptr].RightPtr)
   ENDIF
ENDPROCEDURE
```

**(a)** State the output of Visit(RootPtr). **[2]**

**(b)** Identify the base case of Visit. **[1]**

**(c)** The OUTPUT statement is moved so it comes before the first recursive call. State the new output. **[1]**

**11.** SumDigits(n) returns n if n < 10, and otherwise returns (n MOD 10) + SumDigits(n DIV 10). It is called with SumDigits(5381).

**(a)** List the parameter value held in each stack frame at the deepest point of the recursion, from the bottom of the stack to the top. **[2]**

**(b)** State the value returned by the original call. **[1]**

**12.** A programmer must choose between a recursive and an iterative solution for two tasks: listing every value in a binary tree in order, and adding up the integers from 1 to 1,000,000. Evaluate the use of recursion for each task. **[4]**

---

## Answers

**1.** A base case, where the subroutine returns without calling itself [1]; a general case, where the subroutine calls itself [1]; each call works on a smaller or simpler problem, moving towards the base case [1].

**2.** Base case: when B = 0, return A [1]. General case: otherwise, call Mystery(B, A MOD B) and return its result [1].

**3.** The return address [1]; the values of the parameters for that call [1]; the local variables of that call [1].

**4.** The call stack runs out of the memory allocated to it because too many frames have been pushed [1]. Cause, any one: there is no base case; the parameter does not move towards the base case; the recursion is valid but too deep for the stack [1].

**5.** When the base case is reached, the calls return one at a time in reverse order of being made [1]; each return pops its frame from the stack and completes the calculation in the call that was waiting for it [1].

**6. (a)** Mystery(84, 36) calls Mystery(36, 12), since 84 MOD 36 = 12 [1]; Mystery(36, 12) calls Mystery(12, 0), since 36 MOD 12 = 0 [1]; Mystery(12, 0) is the base case and returns **12**, which is returned unchanged by each waiting call [1].

**(b)** The highest common factor (greatest common divisor) of A and B [1].

**7. (a)** Output **1, 3, 5, 7** [1]. Show(7) calls Show(5), which calls Show(3), which calls Show(1), which calls Show(−1), the base case, which does nothing [1]. Each OUTPUT comes after the recursive call, so it runs during unwinding, starting with the deepest call, Show(1) [1].

**(b)** **2, 4, 6** [1].

**8.** Example answer:

```
FUNCTION CountOf(Target : INTEGER, n : INTEGER) RETURNS INTEGER
   IF n = 0 THEN
      RETURN 0
   ELSE
      IF Data[n] = Target THEN
         RETURN 1 + CountOf(Target, n - 1)
      ELSE
         RETURN CountOf(Target, n - 1)
      ENDIF
   ENDIF
ENDFUNCTION
```

Function header with both parameters and the return type [1]; base case n = 0 returns 0 [1]; compares Data[n] with Target [1]; recursive call with n − 1 [1]; adds 1 only when the element matches and returns the result [1].

**9.** Reverse("CODE") returns "E" & Reverse("COD") [1]; Reverse("COD") returns "D" & Reverse("CO"); Reverse("CO") returns "O" & Reverse("C"); Reverse("C") is the base case and returns "C" [1]. Unwinding: "OC", then "DOC", then **"EDOC"** [1].

**10. (a)** **20, 30, 50, 60, 70, 80** [2] (1 mark for 20, 30, 50 in order; 1 mark for 60, 70, 80 in order).

**(b)** When Ptr = −1 (an empty subtree), the procedure does nothing and returns [1].

**(c)** **50, 30, 20, 70, 60, 80** [1].

**11. (a)** **5381, 538, 53, 5** [2] (1 mark for the correct values, 1 mark for the correct order with 5 at the top).

**(b)** 1 + 8 + 3 + 5 = **17** [1].

**12.** Tree listing: recursion is a good choice because each subtree is itself a tree, so one short procedure handles every level, with an empty subtree as a simple base case [1]; the depth of recursion is only the height of the tree, so stack use is modest [1]. Adding 1 to 1,000,000: a recursive version would need around a million calls active at once, using a stack frame for each, which risks a stack overflow and is slower [1]; a simple loop does the same job with a fixed amount of memory, so iteration is the better choice here [1].

---

## Where marks are usually lost

- Writing a trace that stops at the base case without showing the values returned.
- Listing outputs in calling order when the OUTPUT comes after the recursive call.
- Missing RETURN in front of a recursive call inside a function.
- A base case that can be stepped over, such as n = 0 when the parameter goes down in steps of 2 from an odd number.
- Leaving the return address out of the stack frame.
- Judging recursion as simply "better" or "worse" without linking it to the task.
