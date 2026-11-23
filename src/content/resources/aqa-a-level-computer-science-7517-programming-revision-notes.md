---
title: "AQA A-Level Computer Science (7517): Programming -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of programming"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-programming"
    subtopic: "programming-aqa-alevel-cs"
description: "Condensed AQA 7517 section 4.1.1 recall: types, loops, operators, strings, exceptions, subroutines, stack frames and recursion, with traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.1.1 Programming**, AQA A-Level Computer Science (7517). Full explanations and worked traces are in the [Programming study guide](/resources/aqa-a-level-computer-science-7517-programming/); exam-style questions are in the [Fundamentals of Programming practice questions](/resources/a-computer-science-programming-practice/).

## Data types (4.1.1.1)

| Type | Use it for | Watch out |
|---|---|---|
| Integer | Counts, whole quantities | Not for phone numbers or IDs with leading zeros |
| Real/float | Measurements, averages | Rounding errors in comparisons |
| Boolean | Flags, conditions | Only two values |
| Character | A single symbol | Has a numeric character code |
| String | Text | Converting to a number can fail |
| Date/time | Dates and times | Not a string: allows correct ordering and arithmetic |
| Pointer/reference | Memory address of an object created at runtime | Two references can share one object |
| Record | Related fields of different types | Defined once, used many times |
| Array | Many values of one type by index | Fixed size in many languages |

**User-defined type:** a new type built from built-in ones, for example a record type `Booking` with integer, string, date/time and Boolean fields.

## Statements and iteration (4.1.1.2)

- Statement types: variable declaration, constant declaration, assignment, iteration, selection, subroutine.
- Combining principles of imperative languages: **sequence, iteration (repetition), selection (choice)**.
- **Definite** iteration: number of passes fixed at the start (`FOR`).
- **Indefinite** iteration: repeats until a condition changes.
  - Condition **at the start** (`WHILE`): body may run **zero** times.
  - Condition **at the end** (`REPEAT … UNTIL`): body runs **at least once**.
- **Nesting:** loops or selections inside one another (for example, rows then columns of a grid).
- **Meaningful identifiers:** names that explain purpose; easier reading, debugging and maintenance.

## Operators (4.1.1.3 to 4.1.1.5)

```
17 / 4      = 4.25     real/float division
17 DIV 4    = 4        integer division
17 MOD 4    = 1        remainder
2 ^ 5       = 32       exponentiation
ROUND(5.678, 1) = 5.7  rounding
TRUNC(5.678, 1) = 5.6  truncation (digits cut off)
```

Useful patterns: `n MOD 2 = 0` even; `n MOD 10` last digit; `n DIV 10` drops last digit; `mins DIV 60` and `mins MOD 60` give hours and minutes.

Relational: =, ≠, <, >, ≤, ≥. Boolean: NOT, AND, OR, **XOR (true when exactly one input is true)**.

## Constants (4.1.1.6)

- **Variable:** value can change while the program runs.
- **Named constant:** value fixed; cannot be changed by the program.
- Advantages of named constants: readable name, one place to change, cannot be overwritten accidentally.

## Strings (4.1.1.7)

- Operations: **length, position, substring, concatenation, character → code, code → character**.
- Conversions: string ↔ integer, string ↔ float, string ↔ date/time.
- 'A' = 65, 'a' = 97, '0' = 48 in ASCII and Unicode.
- Shift a capital letter by k: `CODE_TO_CHAR((CHAR_TO_CODE(c) - 65 + k) MOD 26 + 65)`.

## Random numbers and exceptions (4.1.1.8 and 4.1.1.9)

- Library generators give **pseudo-random** values, usually scaled to a range.
- **Exception handling:** risky code in a protected (`TRY`) block; if an exception is raised, a handler runs instead of the program crashing. Typical causes: failed conversion, missing file, division by zero.

## Subroutines (4.1.1.10 to 4.1.1.14)

- A subroutine is a **named "out of line" block of code**, run by writing its name in a statement.
- Advantages: reuse, smaller units to test, easier to read, work can be shared between programmers.
- **Parameters** pass data in; the **interface** is the name, parameters and return value.
- A **function** returns a value to the calling routine.
- **Local variables** exist only while the subroutine runs and are accessible only inside it; **global variables** are accessible everywhere.
- Good practice: locals, because they stop subroutines interfering with each other's data.

## Stack frames (4.1.1.15)

Each call pushes a frame holding:

1. the **return address**;
2. the **parameters**;
3. the **local variables**.

On return, the frame is popped and execution continues at the return address.

## Recursion (4.1.1.16)

- **General case:** the subroutine calls itself on a smaller problem.
- **Base case:** stops the recursion without a further call.
- **Mechanism:** each call pushes a new frame; results are passed back as frames pop.
- No base case, or a general case that does not move towards it → **stack overflow**.

## Key terms

| Term | Definition |
|---|---|
| Definite iteration | Loop whose number of repetitions is known when it starts |
| Indefinite iteration | Loop that repeats until a condition is met |
| Truncation | Removing digits beyond a position without rounding |
| Named constant | Identifier whose value cannot change during execution |
| Exception | Run-time error event that can be caught and handled |
| Interface | Name, parameters and return value of a subroutine |
| Local variable | Exists only while its subroutine runs, accessible only inside it |
| Stack frame | Call-stack entry with return address, parameters and local variables |
| Base case | Case in a recursive subroutine that returns without calling itself |

## Exam traps

- WHILE can run zero times; REPEAT … UNTIL runs at least once.
- Truncation is not rounding: TRUNC(9.99, 0) is 9.
- XOR is false when both inputs are true.
- Dates belong in a date/time type, not a string.
- A stack frame does not store the subroutine's code.
- A recursion trace returns values in **reverse** order of the calls.

## Self-test

1. Give one reason for storing a date in a date/time type rather than a string.
2. What does a pointer/reference variable store?
3. Name the three combining principles of imperative programming.
4. Which loop form always executes its body at least once?
5. Evaluate 59 DIV 7 and 59 MOD 7.
6. Truncate and round 8.749 to two decimal places.
7. When is A XOR B true?
8. Give two advantages of a named constant.
9. Name the string operation that joins two strings.
10. List the three items held in a stack frame.
11. What two cases must a recursive subroutine have?
12. Why is it good practice to use local variables?

**Answers**

1. Dates then order and calculate correctly (as text, "10/02" sorts before "9/01").
2. The memory address of an object created at runtime.
3. Sequence, iteration (repetition) and selection (choice).
4. A loop with the condition at the end (REPEAT … UNTIL).
5. 8 and 3 (8 × 7 + 3 = 59).
6. Truncated 8.74; rounded 8.75.
7. When exactly one of A and B is true.
8. Any two: readable name; changed in one place; cannot be changed accidentally while the program runs.
9. Concatenation.
10. Return address, parameters, local variables.
11. A base case and a general (recursive) case.
12. They exist only inside the subroutine, so other parts of the program cannot change them by accident, and the subroutine is self-contained and reusable.

## Related resources

- [Programming study guide](/resources/aqa-a-level-computer-science-7517-programming/)
- [Programming paradigms revision notes](/resources/aqa-a-level-computer-science-7517-programming-paradigms-revision-notes/)
- [Fundamentals of Programming revision notes for all of 4.1](/resources/a-computer-science-programming-revision-notes/)
