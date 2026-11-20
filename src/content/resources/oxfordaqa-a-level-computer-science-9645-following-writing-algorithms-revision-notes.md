---
title: "OxfordAQA A-Level Computer Science (9645): Following and writing algorithms -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Algorithms Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.3.3: the definition of an algorithm, reading pseudocode, converting it to code, trace tables and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.3.3 Following and writing algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.3 Program design). For full worked traces, see the [following and writing algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms/); then practise with the [following and writing algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-practice/).

## What the specification requires

- Understand the term **algorithm**: a sequence of steps that can be followed to complete a task and that **always terminates**.
- Be familiar with **pseudocode** to express algorithms. You must **understand** pseudocode, but you will **not be expected to write** it in the exam.
- **Convert** an algorithm from pseudocode into high-level language program code.
- **Hand-trace** algorithms.

## Key terms

| Term | Meaning |
|---|---|
| Algorithm | A sequence of steps that completes a task and always terminates |
| Pseudocode | Structured, English-like description of an algorithm, not tied to a language |
| Terminates | Finishes after a finite number of steps for every valid input |
| Trace table | A table of variable values recorded step by step |
| Hand-trace | Following an algorithm by hand with given data |
| DIV | Integer division (quotient only) |
| MOD | The remainder after integer division |

## Notation used in these notes

`←` assignment, `=` comparison, `<>` not equal, upper-case keywords, indexes from 0. The specification sets no pseudocode style of its own.

## Three features of an algorithm

1. Steps in a **fixed order**.
2. Each step is **clear enough to follow** without guessing.
3. It **always terminates**.

A loop whose condition can never become false is not an algorithm. `n ← 10; WHILE n <> 0: n ← n - 3` gives 10, 7, 4, 1, −2 and never reaches 0.

## How to hand-trace

1. Write one column per variable, plus one for output or conditions.
2. Fill the **starting values** in the first row.
3. Follow statements **in order**, one at a time.
4. Add a row when a value changes; carry unchanged values down.
5. Check the loop condition after every pass.
6. Stop only when the algorithm ends or returns.

## Worked reminders

### Greatest common divisor (84, 36)

```
WHILE b <> 0
    t ← b
    b ← a MOD b
    a ← t
ENDWHILE
RETURN a
```

| Step | a | b | t |
|---|---|---|---|
| Start | 84 | 36 | |
| Pass 1 | 36 | 12 | 36 |
| Pass 2 | 12 | 0 | 12 |

Returns **12**. `b` shrinks each pass, so the loop terminates.

### Prime test (21)

| i | i * i | 21 MOD i | Result |
|---|---|---|---|
| 2 | 4 | 1 | continue |
| 3 | 9 | 0 | return False |

For 29, the values 2 to 5 leave remainders 1, 2, 1 and 4; at i = 6, 36 exceeds 29, so it returns True.

### Count digits of 7305

| Pass | n after | count |
|---|---|---|
| 1 | 730 | 1 |
| 2 | 73 | 2 |
| 3 | 7 | 3 |
| 4 | 0 | 4 |

## Pseudocode to Python

| Pseudocode | Python |
|---|---|
| `x ← 5` | `x = 5` |
| `IF x = 5 THEN` | `if x == 5:` |
| `a DIV b` | `a // b` |
| `a MOD b` | `a % b` |
| `<>` | `!=` |
| `WHILE cond ... ENDWHILE` | `while cond:` |
| `FOR EACH ch IN text` | `for ch in text:` |
| `RETURN x` | `return x` |

Keep the **structure and order** of statements. Change only syntax.

```python
def count_digits(n):
    count = 0
    while n > 0:
        n = n // 10
        count = count + 1
    return count
```

`count_digits(7305)` returns 4. For an input of 0 it returns 0, although 0 has one digit, so check special cases such as 0 when you trace.

## Exam traps

- **Updating in the wrong order** (for example using the new `a` too early in Gcd).
- **Skipping a row** because the answer seems obvious.
- **Off-by-one in conditions** (`<` against `<=`).
- **`=` meaning two things.** In pseudocode it often means comparison; in Python it is assignment.
- **Stopping the trace early.** Complete the algorithm, including the final return or output.
- **Not showing termination.** Point to a value that moves towards the stopping condition.

## Quick self-test

1. Define algorithm.
2. What does "always terminates" mean?
3. Must you write pseudocode in the exam?
4. State what 47 MOD 5 and 47 DIV 5 give.
5. Give the output of this: `x ← 1; WHILE x < 50: x ← x * 3; OUTPUT x`.
6. Trace Gcd(84, 36). What is returned?
7. How many passes does the digit-count loop make for 7305?
8. What is the Python version of `a MOD b`?
9. Why does `n ← n - 3` starting at 10 with `WHILE n <> 0` never end?
10. Name two things a trace table records.
11. In the reverse-string algorithm, why is `result ← ch + result` used rather than `result + ch`?
12. When converting pseudocode, what should stay the same?

### Answers

1. A sequence of steps that can be followed to complete a task and that always terminates.
2. It finishes after a finite number of steps for every valid input.
3. No, you must understand it but not write it.
4. 2 and 9.
5. 81. The values are 3, 9, 27, 81, and then the loop stops.
6. 12.
7. 4.
8. `a % b`
9. The values 10, 7, 4, 1, −2 skip over 0.
10. Variable values (and conditions or output).
11. Putting the new character first reverses the order.
12. The structure and the order of the statements.

## Next steps

- [Following and writing algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms/)
- [Following and writing algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-following-writing-algorithms-practice/)
- [Searching and sorting algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-searching-and-sorting-algorithms-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.3.3 Following and writing algorithms.
