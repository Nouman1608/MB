---
title: "OxfordAQA A-Level Computer Science (9645): Following and writing algorithms"
seoTitle: "OxfordAQA A-Level CS 9645 Following Algorithms Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 3 – Program design"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 3.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "program-design-9645"
  - qualification: "a-level"
    topic: "program-design-9645"
    subtopic: "following-and-writing-algorithms-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.3.3 in depth: what an algorithm is, reading pseudocode, converting it to code and hand-tracing with trace tables."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.3.3 Following and writing algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.3 Program design (AS). The specification asks you to **understand the term algorithm**, to be **familiar with the use of pseudocode** to express algorithms, to **convert an algorithm from pseudocode into high-level language program code**, and to **hand-trace algorithms**. Its additional information gives the definition: "an algorithm is a sequence of steps that can be followed to complete a task and that always terminates". It also says that students will be expected to *understand* algorithms written in pseudocode but will *not* be expected to *write* pseudocode in the exam.

For quick recall use the [following and writing algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-revision-notes/), then try the [following and writing algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-practice/). The topic-level [program design study guide](/resources/oxfordaqa-a-level-computer-science-program-design/) covers the whole of section 3.3.

**Notation.** The specification does not set out its own pseudocode conventions, so this page uses a plain, language-neutral style: `←` for assignment, `=` for comparison, `DIV` and `MOD` for integer division and remainder, upper-case keywords, and indexes from 0. The code is Python.

## What is an algorithm?

An **algorithm** is a sequence of steps that can be followed to complete a task and that always terminates. Three ideas are packed into that definition.

1. **A sequence of steps.** The order matters. Swapping two steps usually changes the result.
2. **Can be followed.** Each step must be clear and exact enough to carry out without guessing. "Make it bigger" is not a step. "Add 1 to count" is.
3. **Always terminates.** For every valid input the algorithm must finish. A loop that never ends is not an algorithm, however useful the steps inside it.

A recipe, a set of directions and a long-division method are all algorithms. A program is one possible expression of an algorithm in a programming language. The same algorithm can be written in different languages, and also in pseudocode.

### Why termination matters

Consider this loop.

```
n ← 10
WHILE n <> 0
    n ← n - 3
ENDWHILE
```

The value of `n` goes 10, 7, 4, 1, −2, −5 and so on. It never equals 0, so the loop never ends. Changing the condition to `n > 0` fixes it. A hand-trace reveals such faults, and it is the best way to convince yourself that an algorithm terminates.

## Pseudocode

**Pseudocode** expresses an algorithm in structured, English-like statements that are not tied to one language. It uses the same building blocks as a program: assignment, selection, iteration and subroutines. Because it ignores syntax details, you can concentrate on the logic. In this exam you must be able to **read and understand** pseudocode. You will not be asked to write it, but the skill of writing clear step-by-step logic is the same skill used to write code.

A typical pseudocode algorithm looks like this.

```
FUNCTION Gcd(a, b)
    WHILE b <> 0
        t ← b
        b ← a MOD b
        a ← t
    ENDWHILE
    RETURN a
ENDFUNCTION
```

Reading it means working out what each statement does, in order, with real values.

## Hand-tracing

To **hand-trace** an algorithm is to follow it by hand with a given input, recording the value of each variable as it changes. A **trace table** has one column per variable (plus columns for any output or condition tested) and a new row each time something changes.

A good trace follows four habits.

- **Write the starting values** first, in the first row.
- **Do one statement at a time**, in program order, and never skip ahead.
- **Record a value only when it changes**, and carry the other values down unchanged.
- **Check the loop condition** with the new values before each pass.

### Worked example 1: greatest common divisor

Trace `Gcd(84, 36)`.

| Step | a | b | t | Condition `b <> 0` |
|---|---|---|---|---|
| Start | 84 | 36 | | true |
| Pass 1 | 36 | 12 | 36 | true |
| Pass 2 | 12 | 0 | 12 | false |

On pass 1, `t` takes the old `b` (36), `b` becomes 84 MOD 36 = 12, and `a` becomes 36. On pass 2, `t` is 12, `b` becomes 36 MOD 12 = 0 and `a` becomes 12. The loop stops, and the function returns **12**. The order of the three statements matters. If `a ← t` came first, `b ← a MOD b` would use the wrong `a`.

The algorithm terminates because `b` gets strictly smaller on every pass (36, 12, 0) and cannot go below 0.

### Worked example 2: testing for a prime number

```
FUNCTION IsPrime(n)
    IF n < 2 THEN
        RETURN False
    ENDIF
    i ← 2
    WHILE i * i <= n
        IF n MOD i = 0 THEN
            RETURN False
        ENDIF
        i ← i + 1
    ENDWHILE
    RETURN True
ENDFUNCTION
```

Trace `IsPrime(21)`.

| i | i * i | i * i <= 21 | 21 MOD i | Action |
|---|---|---|---|---|
| 2 | 4 | true | 1 | not a factor; i becomes 3 |
| 3 | 9 | true | 0 | factor found: return False |

So 21 is not prime, since 3 × 7 = 21. For `IsPrime(29)` the values 2, 3, 4 and 5 give remainders 1, 2, 1 and 4. After i becomes 6, 36 > 29 and the loop stops, so the function returns **True**. Only values up to the square root need checking, which makes the algorithm quicker.

### Worked example 3: building a string in reverse

```
FUNCTION Reverse(text)
    result ← ""
    FOR EACH ch IN text
        result ← ch + result
    ENDFOR
    RETURN result
ENDFUNCTION
```

Trace `Reverse("stack")`.

| ch | result after |
|---|---|
| s | s |
| t | ts |
| a | ats |
| c | cats |
| k | kcats |

The function returns `"kcats"`. The new character is added at the **front**, which is what reverses the order. Writing `result + ch` instead would simply rebuild the original word.

## Converting pseudocode to program code

Conversion is a translation, statement by statement.

| Pseudocode idea | Python | Note |
|---|---|---|
| `x ← 5` | `x = 5` | Assignment uses one equals sign |
| `IF x = 5 THEN` | `if x == 5:` | Comparison uses two |
| `a DIV b` | `a // b` | Integer division |
| `a MOD b` | `a % b` | Remainder |
| `WHILE cond ... ENDWHILE` | `while cond:` | Indentation replaces the end keyword |
| `FOR EACH ch IN text` | `for ch in text:` | |
| `RETURN x` | `return x` | |
| `<>` | `!=` | Not equal |

The prime test becomes:

```python
def is_prime(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i = i + 1
    return True
```

The structure is unchanged; only the syntax differs. In C# you would add braces, types and a different not-equal symbol, and the logic would stay the same. A useful check is to run the program on the values you traced by hand and compare the results.

## Worked example 4: an algorithm with two passes over data

```
FUNCTION CountAboveMean(data)
    total ← 0
    FOR EACH d IN data
        total ← total + d
    ENDFOR
    mean ← total / LENGTH(data)
    count ← 0
    FOR EACH d IN data
        IF d > mean THEN
            count ← count + 1
        ENDIF
    ENDFOR
    RETURN count
ENDFUNCTION
```

Trace with `data = [14, 9, 21, 6, 18]`. The first loop gives total = 14 + 9 + 21 + 6 + 18 = 68, so mean = 68 / 5 = 13.6. In the second loop, 14 > 13.6 (count 1), 9 is not, 21 > 13.6 (count 2), 6 is not, 18 > 13.6 (count 3). The result is **3**. Two passes are needed because the mean is not known until every item has been added.

## Exam technique

- **Always use a trace table** for a loop. Write the table even if you think you can see the answer.
- **Copy the starting values exactly**, and give output in the form the algorithm produces it (a number, a string, True or False).
- **Watch the boundary conditions:** `<` versus `<=`, and whether a loop runs for the last value.
- **When converting,** keep the structure of the pseudocode and change only syntax. Preserve the order of statements.
- **To show an algorithm terminates,** point to a value that moves towards the stopping condition on every pass.

## Common mistakes

- Skipping a row of the trace table, or updating two variables in one step.
- Using the new value of a variable too early (the `a`, `b` and `t` swap in the Gcd example).
- Confusing `=` as comparison in pseudocode with `=` as assignment in Python.
- Forgetting that `MOD` gives the remainder and `DIV` the whole-number quotient.
- Stopping a trace as soon as the answer looks right, rather than at the end of the algorithm.
- Calling a never-ending loop an algorithm.

## More on this topic

- [Following and writing algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-revision-notes/)
- [Following and writing algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-practice/)
- [Searching and sorting algorithms study guide](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.3 Following and writing algorithms.
