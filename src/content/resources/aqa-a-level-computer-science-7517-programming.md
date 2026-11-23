---
title: "AQA A-Level Computer Science (7517): Programming"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.1.1 Programming: data types, iteration, operators, strings, exceptions, subroutines, stack frames and recursion."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide works through section **4.1.1 Programming** of AQA A-Level Computer Science (7517), first teaching 2015. Section 4.1.1 has sixteen parts, from 4.1.1.1 Data types to 4.1.1.16 Recursive techniques. The broader [Fundamentals of Programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-programming/) introduces all of Topic 4.1; this page goes further into the parts that are most often examined through code: choosing types, loop structure, the operators, string handling, exceptions, subroutine interfaces, stack frames and recursion.

Condensed notes are in the [Programming revision notes](/resources/aqa-a-level-computer-science-7517-programming-revision-notes/), and exam-style questions are in the [Fundamentals of Programming practice questions](/resources/a-computer-science-programming-practice/).

AQA does not publish a pseudocode standard at A-level, so the pseudocode below uses a common exam style (`←` for assignment, `ENDIF`, `ENDWHILE`). In the on-screen paper you write in the language your centre has chosen, so translate each example into that language as you revise.

## What 4.1.1 covers

| Part | Content |
|---|---|
| 4.1.1.1 | Data types: integer, real/float, Boolean, character, string, date/time, pointer/reference, records, arrays; user-defined types |
| 4.1.1.2 | Statement types (declaration, constant, assignment, iteration, selection, subroutine); definite and indefinite iteration; nesting; meaningful identifiers |
| 4.1.1.3–4.1.1.5 | Arithmetic, relational and Boolean (NOT, AND, OR, XOR) operations |
| 4.1.1.6 | Variables versus named constants |
| 4.1.1.7 | String handling and string conversion |
| 4.1.1.8 | Random number generation |
| 4.1.1.9 | Exception handling |
| 4.1.1.10–4.1.1.14 | Subroutines, parameters, return values, local and global variables |
| 4.1.1.15 | Stack frames: return addresses, parameters, local variables |
| 4.1.1.16 | Recursion: general case, base case, how it is implemented |

## Choosing data types, including the unusual ones

The common types are straightforward; marks are lost on the less familiar ones.

- **Date/time** is a type in its own right. Storing a date as a string prevents correct ordering and arithmetic ("10/02/2026" sorts before "9/01/2026" as text).
- **Pointer/reference**: the specification says variables of this type store **memory addresses of objects created at runtime**, that is, dynamically. In an object-oriented language every object variable is a reference. Two references can point to the same object, so changing the object through one is visible through the other.
- **Records (or equivalent)** group fields of different types under one name.
- **Arrays (or equivalent)** hold elements of one type, accessed by index.

**User-defined data types** are built from the built-in types. For example:

```
RECORD Booking
    bookingID : Integer
    customer  : String
    seats     : Integer
    date      : Date/Time
    paid      : Boolean
ENDRECORD
```

Declaring `Booking` once means every booking in the program has the same structure, and an array of `Booking` can hold them all.

## Iteration: where the condition sits

The specification asks for **definite** iteration (the number of passes is known when the loop starts: `FOR`) and **indefinite** iteration (it repeats until a condition changes), with the condition **at the start** or **at the end**. You need the theory even if your language lacks one form.

```
WHILE guess ≠ target          REPEAT
    guess ← USERINPUT             guess ← USERINPUT
ENDWHILE                      UNTIL guess = target
```

The left loop tests first, so its body may run zero times (if `guess` already equals `target`). The right loop tests last, so its body always runs at least once. That is why input validation is often written with the condition at the end: the user must be asked at least once.

**Nested** structures place one loop or selection inside another. A nested `FOR` loop over rows and columns visits every cell of a grid; a selection nested inside a loop filters items as they are processed. **Meaningful identifiers** (`totalSeats`, not `t`) make code self-documenting and reduce errors during maintenance.

## The operators in practice

**Integer division and remainder** answer "how many whole groups, and what is left?"

- 47 DIV 6 = 7 and 47 MOD 6 = 5, because 7 × 6 + 5 = 47.
- Converting 200 minutes: hours ← 200 DIV 60 = 3; minutes ← 200 MOD 60 = 20.
- `n MOD 10` gives the last digit of n; `n DIV 10` removes it.

Behaviour with negative operands differs between languages, so check yours before relying on it.

**Exponentiation**: 2 ^ 10 = 1024. **Rounding** 3.456 to two decimal places gives 3.46; **truncation** to two places gives 3.45, because the extra digits are simply removed. **Real/float division** 7 / 2 gives 3.5, whereas 7 DIV 2 gives 3.

**Relational operators** (=, ≠, <, >, ≤, ≥) produce Boolean results. **Boolean operators** combine them. XOR is true when exactly one input is true, so `a XOR b` is false when both are true, unlike OR.

## Constants

A **named constant** is given its value once and cannot be changed while the program runs. Advantages: the name explains the value (`MAX_SEATS` rather than 120), the value is changed in one place only, and the program cannot overwrite it by accident.

## String handling: a worked example

The specification lists length, position, substring, concatenation, character → character code, character code → character, and conversions between strings and integers, floats and dates/times.

**Worked example 1: a Caesar shift.** Shift each capital letter forward by k places, wrapping Z round to A. In ASCII and Unicode, 'A' has code 65.

```
SUBROUTINE Shift(word, k)
    result ← ""
    FOR i ← 0 TO LEN(word) - 1
        code ← CHAR_TO_CODE(word[i]) - 65
        code ← (code + k) MOD 26
        result ← result + CODE_TO_CHAR(code + 65)
    ENDFOR
    RETURN result
ENDSUBROUTINE
```

`Shift("CAT", 3)` returns "FDW". `Shift("XYZ", 3)` returns "ABC": for 'X', (23 + 3) MOD 26 = 0, which maps back to 'A'. The example uses length, indexing, both code conversions, concatenation and MOD together, which is typical of how these operations are examined.

**Conversion** matters whenever input arrives as text. `STRING_TO_INT("42")` gives 42, but `STRING_TO_INT("4x2")` fails at run time, which leads to exception handling.

## Random numbers and exceptions

Random number generators in programming languages produce **pseudo-random** numbers from a starting value (a seed), typically scaled to a range, for example an integer from 1 to 6 for a die.

**Exception handling** places code that might fail in a protected block, and passes control to a handler if an exception is raised:

```
TRY
    age ← STRING_TO_INT(USERINPUT)
EXCEPT
    OUTPUT "Please enter a whole number"
ENDTRY
```

Without the handler, the failed conversion would stop the program.

## Subroutines and interfaces

A subroutine is a **named "out of line" block of code** that runs when its name is written in a statement. Its **interface** is its name, its parameters (with their types) and what it returns. Code that calls `Shift(word, k)` needs only the interface, not the body; that is what makes subroutines reusable and testable on their own.

**Local variables** exist only while the subroutine runs and are accessible only within it; **global variables** are accessible throughout the program. Prefer locals: a subroutine that changes only its own locals cannot break other code by accident.

## Stack frames: a worked trace

Each call pushes a **stack frame** holding the **return address**, the **parameters** and the **local variables**; returning pops it.

**Worked example 2: recursion and the stack.** The sum of the digits of n:

```
SUBROUTINE DigitSum(n)
    IF n < 10 THEN
        RETURN n                             # base case
    ELSE
        RETURN (n MOD 10) + DigitSum(n DIV 10)   # general case
    ENDIF
ENDSUBROUTINE
```

Call `DigitSum(4709)`:

| Frame pushed | Parameter n | Waiting to compute |
|---|---|---|
| 1 | 4709 | 9 + DigitSum(470) |
| 2 | 470 | 0 + DigitSum(47) |
| 3 | 47 | 7 + DigitSum(4) |
| 4 | 4 | base case, returns 4 |

Frames are then popped in reverse order: frame 3 returns 7 + 4 = 11, frame 2 returns 0 + 11 = 11, frame 1 returns 9 + 11 = 20. Each frame's return address tells the processor where to resume in the caller. Without the base case, frames would be pushed until the stack ran out of memory (a stack overflow). Each recursive call must move towards the base case; here n gets one digit shorter each time.

## Common mistakes

- Storing dates, phone numbers or postcodes as integers.
- Confusing truncation with rounding.
- Saying a loop with the condition at the start always runs at least once.
- Using XOR as if it were OR.
- Forgetting that string-to-number conversion can fail at run time.
- Saying a stack frame holds "the subroutine's code"; it holds the return address, parameters and local variables.
- Writing a recursive subroutine whose general case does not move towards the base case.

## Exam technique

- **State** or **Identify**: one precise term ("truncation").
- **Describe**: the characteristics of something, such as what a stack frame contains.
- **Explain**: a reason, such as why local variables are good practice.
- **Complete the trace table**: one row per change of a variable, in execution order; recompute each MOD and DIV.
- **Write** a subroutine: show the interface (name, parameters, return), initialise variables, and close every structure.

## Related resources

- [Programming revision notes](/resources/aqa-a-level-computer-science-7517-programming-revision-notes/)
- [Programming paradigms study guide](/resources/aqa-a-level-computer-science-7517-programming-paradigms/)
- [Fundamentals of Programming practice questions](/resources/a-computer-science-programming-practice/)
- [Fundamentals of Programming study guide](/resources/aqa-a-level-computer-science-fundamentals-of-programming/)

*Written against the AQA A-level Computer Science (7517) specification, 4.1.1 Programming. Always check the current specification on the AQA website.*
