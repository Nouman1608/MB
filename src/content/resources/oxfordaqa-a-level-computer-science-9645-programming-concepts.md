---
title: "OxfordAQA A-Level Computer Science (9645): Programming concepts"
seoTitle: "OxfordAQA A-Level CS 9645 Programming Concepts Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1.2
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
  - qualification: "a-level"
    topic: "procedural-programming"
    subtopic: "programming-concepts-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.1.2 in depth: statement types, iteration, operators, string handling, exceptions, subroutines, scope and stack frames."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.1.2 Programming concepts** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.1 Procedural programming (AS). The specification lists five statement types that you must combine in programs: **variable declaration**, **assignment**, **selection**, **iteration** and **subroutine**. It then adds seven numbered areas: arithmetic, relational and Boolean operations (3.1.2.1 to 3.1.2.3), string handling (3.1.2.4), random numbers (3.1.2.5), exception handling (3.1.2.6) and subroutines (3.1.2.7).

Use the [programming concepts practice questions](/resources/oxfordaqa-a-level-computer-science-9645-programming-concepts-practice/) to test yourself. The [procedural programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/) and the [procedural programming revision notes](/resources/a-computer-science-procedural-revision-notes/) give the topic-level overview. Code here is Python and language-neutral pseudocode; indexes start at 0.

## Statement types working together

A program is built from the five statement types.

- A **variable declaration** creates a named location (in Python, the first assignment does this).
- An **assignment** stores a value: `total ← total + price`. The right-hand side is worked out first.
- **Selection** chooses a path: `IF`, `ELIF`/`ELSE IF`, `ELSE`. Selection inside selection is **nested selection**.
- **Iteration** repeats statements. **Definite iteration** runs a known number of times (`for`). **Indefinite iteration** repeats until a condition changes (`while`, or repeat-until), so the count is not known in advance. Iteration inside iteration is **nested iteration**.
- A **subroutine** is a named block that can be called.

The specification also expects **meaningful identifier names** (`total_price`, not `x`) because they make the code understandable and easier to maintain, **comments** that explain *why* code works as it does, and the ability to **display output and obtain input**.

### Worked example 1: nested iteration

```python
for i in range(1, 4):
    for j in range(1, i + 1):
        print(i * j)
```

The outer loop takes i = 1, 2, 3. For each i, the inner loop takes j from 1 to i.

| i | j values | Printed |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 1, 2 | 2, 4 |
| 3 | 1, 2, 3 | 3, 6, 9 |

The output is 1, 2, 4, 3, 6, 9 and the `print` statement runs 6 times. The inner loop restarts from the beginning on each pass of the outer loop.

### Worked example 2: indefinite iteration

This loop adds the digits of 4821 using DIV and MOD.

```
n ← 4821
total ← 0
WHILE n > 0
    total ← total + n MOD 10
    n ← n DIV 10
ENDWHILE
```

| Pass | total after | n after |
|---|---|---|
| 1 | 1 | 482 |
| 2 | 3 | 48 |
| 3 | 11 | 4 |
| 4 | 15 | 0 |

The loop stops when n is 0, with total = 15. A `for` loop would be awkward here because the number of digits is not known in advance, which is the case for indefinite iteration.

## 3.1.2.1 Arithmetic operations

| Operation | Example | Result |
|---|---|---|
| Addition, subtraction, multiplication | `7 * 2` | 14 |
| Real (float) division | `17 / 4` | 4.25 |
| Integer division (DIV) | `17 // 4` | 4 |
| Remainder (MOD) | `17 % 4` | 1 |
| Exponentiation | `7 ** 2` | 49 |
| Rounding | `round(7.5)` | 8 |
| Truncation | `int(-2.7)` | −2 |

Truncation removes the fractional part, moving towards zero. Rounding goes to the nearest whole number, and the treatment of exact halves depends on the language. Python rounds halves to even, so `round(4.5)` is 4 and `round(5.5)` is 6. DIV and MOD with negative numbers also vary by language: Python gives `-17 // 4` as −5 and `-17 % 4` as 3. Typical MOD uses are testing for even numbers (`n % 2 == 0`) and wrapping a counter round a range.

## 3.1.2.2 and 3.1.2.3 Relational and Boolean operations

The six relational operators are equal to, not equal to, less than, greater than, less than or equal to, and greater than or equal to. Each gives a Boolean.

The Boolean operators are **NOT**, **AND**, **OR** and **XOR**. The specification gives the order of precedence between NOT, AND and OR: **NOT highest, then AND, then OR lowest**. It does not require the precedence of XOR, so use brackets whenever XOR appears with other operators.

XOR (exclusive OR) is true when **exactly one** of its inputs is true: false XOR false = false, false XOR true = true, true XOR false = true, true XOR true = false.

### Worked example 3: precedence

Evaluate `NOT a AND b OR c` for every combination, using the order NOT, then AND, then OR. It is read as `((NOT a) AND b) OR c`.

| a | b | c | NOT a AND b OR c |
|---|---|---|---|
| False | False | False | False |
| False | False | True | True |
| False | True | False | True |
| False | True | True | True |
| True | False | False | False |
| True | False | True | True |
| True | True | False | False |
| True | True | True | True |

Compare `NOT (a AND b OR c)`, where the bracket forces the inside to be worked out first. For a = False, b = False, c = False it is True, but the unbracketed expression gave False. Brackets change meaning, so use them to make intent clear.

## 3.1.2.4 String-handling operations

You must be familiar with: **length**, **position**, **substring**, **concatenation**, **character to character code**, **character code to character**, and the conversions string to integer, string to float, integer to string, float to string, date/time to string and string to date/time.

For `s = "Computer"` in Python:

| Operation | Expression | Result |
|---|---|---|
| Length | `len(s)` | 8 |
| Position of "p" | `s.find("p")` | 3 |
| Substring (index 2 up to, not including, 5) | `s[2:5]` | `"mpu"` |
| Concatenation | `s + "!"` | `"Computer!"` |
| Character to code | `ord("a")` | 97 |
| Code to character | `chr(100)` | `"d"` |

The position function in many languages returns −1 when the text is not found; always check for that before using the result as an index. Slice conventions differ between languages (a start and an end index in Python, a start and a length in C#), so read the question's notation.

## 3.1.2.5 Random number generation

Programs use a random number generator for games, simulations and shuffling. The key skill is converting a generator's range to the range you need. In Python, `random.randint(1, 6)` gives a whole number from 1 to 6 **inclusive**, which simulates a die. `random.random()` gives a float from 0 up to, but not including, 1. Multiplying by 10 gives a float from 0 to just under 10. Computer generators are pseudo-random: they follow an algorithm, which is acceptable for games but not for security keys.

## 3.1.2.6 Exception handling

An **exception** is an error detected while the program runs, such as dividing by zero or converting `"forty"` to an integer. Without handling, the program stops. With **exception handling**, the risky code goes in a `try` block and the recovery code in an `except` block.

```python
try:
    age = int(input("Age: "))
    print("Next year you will be", age + 1)
except ValueError:
    print("Please enter a whole number")
```

If the user types `abc`, `int()` raises a `ValueError`, control jumps to the `except` block, and the program carries on. Handling the specific exception you expect is better than catching everything, because a broad handler can hide genuine bugs.

## 3.1.2.7 Subroutines

A **subroutine** is a named "out of line" block of code that runs when its name is written in a statement (it is **called**). Its advantages are: code is written once and reused; large programs are split into manageable parts that can be tested separately; the main program is shorter and easier to read; different programmers can work on different subroutines; and a fix is made in one place. You do not need to use the terms function and procedure.

**Parameters** pass data in. **Return values** pass results back; some languages return more than one value (C# and VB.Net can use tuples).

```python
def average(a, b):
    return (a + b) / 2

mean = average(7, 10)       # 8.5
```

### Local and global variables

A **global variable** is accessible throughout the program. A **local variable** is declared inside a subroutine, exists only while the subroutine executes and is accessible only within it. Good practice is to **limit scope**, because local variables cannot be changed accidentally by other code, names can be reused in different subroutines without clashing, and the subroutine can be tested on its own. Block-scope variables in C# and VB.Net are not examined.

### Stack frames

Each call pushes a **stack frame** holding the **return address** (where to resume after the call), the **parameters** and the **local variables**. Returning pops the frame. Nested calls therefore stack in last-in first-out order. For a recursive function such as factorial (`f(4)` = 24), four frames exist at the deepest point, each holding its own copy of `n`.

## Exam technique

- **Tracing:** make a column for every variable and a row for each pass; note exactly when a condition is checked.
- **Writing code:** state the loop type you chose and the reason (known count, or condition-controlled).
- **Explaining subroutines:** give an advantage and tie it to the situation in the question.
- **Scope questions:** say where the variable exists and when it stops existing.

## Common mistakes

- Using `/` when integer division is needed, or the reverse.
- Treating the end value of `range(1, 4)` as included; it stops at 3.
- Forgetting that the inner loop restarts on every outer pass.
- Mixing up the order of NOT, AND and OR.
- Using `==` for assignment or `=` for comparison.
- Using global variables for values that should be passed as parameters.
- Giving a variable a one-letter name and then failing to explain what it holds.

## Next steps

- [Programming concepts practice questions](/resources/oxfordaqa-a-level-computer-science-9645-programming-concepts-practice/)
- [Procedural programming revision notes](/resources/a-computer-science-procedural-revision-notes/)
- [Stacks study guide](/resources/oxfordaqa-a-level-computer-science-9645-stacks/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.1.2 Programming concepts.
