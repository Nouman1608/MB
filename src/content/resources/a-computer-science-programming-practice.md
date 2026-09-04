---
title: "A Level Computer Science: Fundamentals of Programming — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-programming"
description: "Original exam-style practice questions with full worked answers on data types, control structures, procedures, functions and scope."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Fundamentals of Programming revision notes](/resources/a-computer-science-programming-revision-notes/)

---

## Section A

**1.** Name **five** primitive data types and give an example value of each. **[5]**

**2.** Explain the difference between a variable and a constant, and state one benefit of using constants. **[3]**

## Section B

**3.** Explain the difference between a procedure and a function, and state when each should be used. **[4]**

**4.** Explain the difference between passing a parameter **by value** and **by reference**, and give a situation suited to each. **[6]**

**5.** Write pseudocode for a function that takes an array of integers and returns the largest value. **[6]**

**6.** Explain the difference between local and global scope, and give **two** reasons why global variables should be avoided. **[5]**

**7.** Explain what recursion is, state the two components every recursive routine must have, and give one drawback compared with iteration. **[5]**

---

## Section C

**8.** A program uses both WHILE and REPEAT UNTIL loops.

**(a)** Distinguish between WHILE and REPEAT UNTIL in terms of when the condition is tested. **[2]**

**(b)** Explain the consequence of this difference for how many times the loop body can execute. **[2]**

**9.** Trace the following pseudocode and state the output.

```
total = 0
count = 1
WHILE count <= 4
    total = total + (count * count)
    count = count + 1
ENDWHILE
OUTPUT total
```

Draw a trace table showing the value of `count`, `count*count` and `total` on each pass, then give the output. **[5]**

**10.** A program reads data from a file.

**(a)** State the three-step pattern every file-handling operation follows. **[3]**

**(b)** Explain one consequence of failing to close a file after use. **[2]**

---

## Answers

**1.** **Integer** — 42 [1]. **Real/float** — 3.14 [1]. **Boolean** — TRUE [1]. **Character** — 'A' [1]. **String** — "hello" [1].

**2.** A **variable's value can change during execution**; a **constant's value is fixed at declaration and cannot be changed** [1] [1]. Benefit: the value is **defined in one place**, so changing it — for example a VAT rate — requires only one edit and cannot be accidentally overwritten, which reduces errors and improves readability [1].

**3.** A **procedure carries out a task but does not return a value**; a **function returns a single value to the calling statement** [1] [1]. Use a **procedure** where the purpose is an action, such as printing a report [1]; use a **function** where the purpose is to compute a value used in an expression, such as calculating an average [1].

**4. By value** — a **copy of the data is passed** to the subroutine [1]; any changes made **affect only the copy, so the original is unchanged** [1]. **By reference** — the **memory address of the data is passed** [1], so changes made inside the subroutine **alter the original variable** [1].
By value suits a subroutine that only needs to **read the data**, since it protects the original from accidental modification [1]. By reference suits cases where the subroutine must **modify the caller's data or where the data is large**, since copying a large array wastes memory and time [1].

**5.**
```
FUNCTION FindMax(numbers : ARRAY OF INTEGER) RETURNS INTEGER
    max ← numbers[0]
    FOR i ← 1 TO LENGTH(numbers) - 1
        IF numbers[i] > max THEN
            max ← numbers[i]
        ENDIF
    NEXT i
    RETURN max
ENDFUNCTION
```
Correct function header with parameter and return type [1]; initialising max to the first element rather than to zero [1]; loop covering every remaining element [1]; correct comparison [1]; assignment when a larger value is found [1]; RETURN statement outside the loop [1].

**6.** A **local variable exists only within the subroutine in which it is declared** and is destroyed when that subroutine ends [1]; a **global variable is declared outside all subroutines and is accessible everywhere in the program** [1].
Globals should be avoided because **any part of the program can change them**, so a bug can be introduced anywhere and is very hard to trace [1]; they also **prevent subroutines from being self-contained and reusable**, since the subroutine depends on something outside itself [1]; and they **occupy memory for the whole run** rather than only while needed [1].

**7.** Recursion is a technique in which a **subroutine calls itself** to solve a smaller instance of the same problem [1]. Every recursive routine must have a **base case that stops the recursion** [1] and a **general case that calls itself with a value moving towards the base case** [1].
Drawback: each call **adds a stack frame to the call stack**, so recursion uses **considerably more memory than iteration** and risks a **stack overflow** if the depth is large [1] [1].

**8. (a)** **WHILE** tests its condition **before** the first pass through the loop body [1]; **REPEAT UNTIL** tests its condition **after** the body has executed [1].

**(b)** A WHILE loop's body **may execute zero times** if the condition is false from the start [1]; a REPEAT UNTIL loop's body **always executes at least once**, since the first test happens only after the body has already run [1].

**9.**

| count | count*count | total |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 4 | 5 |
| 3 | 9 | 14 |
| 4 | 16 | 30 |

[4, one per correctly traced row]. The loop then tests count = 5, which fails, so the output is **30** [1] — the sum of the first four square numbers.

**10. (a)** **Open** the file [1]; **read or write** to it [1]; **close** it [1].

**(b)** Any one: the file may remain **locked**, preventing other programs from accessing it [1]; buffered data may **not be flushed to disk**, risking data loss [1]; or system resources allocated to the open file remain **unnecessarily reserved** [1].

---

## Where marks are usually lost

- Initialising the maximum to 0, which fails for arrays of negative numbers.
- Saying a function "does something" without returning a value.
- Confusing pass by reference with returning a value.
- Omitting the base case when describing recursion.
- Confusing which loop type tests its condition before versus after the body.
- Forgetting to close a file after reading or writing to it.
