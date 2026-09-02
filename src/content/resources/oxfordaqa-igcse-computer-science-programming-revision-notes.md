---
title: "OxfordAQA IGCSE Computer Science: Programming Fundamentals — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "2022-onwards"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
description: "Condensed recall notes on data types, sequence/iteration/selection, and arithmetic, relational and Boolean operators for OxfordAQA International GCSE Computer Science (9210), sections 3.2.1-3.2.5."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Programming Fundamentals study guide](/resources/igcse-oxfordaqa-computer-science-programming-fundamentals/).

## Why pseudocode matters here

Written exams for 9210 **always** present code in OxfordAQA's own pseudocode, regardless of the language actually taught in class (Python, C#, Visual Basic all common). Everything below is genuinely **language-independent** — understand it in pseudocode terms and it applies to any language the exam presents.

## Data types (3.2.1)

| Type | Holds |
|---|---|
| **Integer** | Whole numbers |
| **Real** | Numbers with a fractional part (some languages call this `float`) |
| **Boolean** | True / False |
| **Character** | A single character |
| **String** | A sequence of characters |

Note the specification's own general names are used in exams even when a language uses a different term (e.g. `float` for real).

## Programming concepts (3.2.2)

**Three combining principles — basic to every imperative language:**

```
SEQUENCE   -- statements executed in order
ITERATION  -- repeating a block of statements
SELECTION  -- choosing between branches (IF, CASE)
```

Nearly every algorithm question is really asking you to identify or write some combination of these three. When reading unfamiliar pseudocode, **identify which of the three each block is first**, before tracing what it does.

| Iteration type | Condition checked | Guaranteed to run at least once? |
|---|---|---|
| **FOR** (definite) | Fixed count known in advance | Yes |
| **WHILE** (indefinite) | At the **start** | No |
| **REPEAT...UNTIL** (indefinite) | At the **end** | Yes |

Also: variable/constant declaration, assignment, subroutine (procedure/function) statements, **nested** selection/iteration, and **meaningful identifier names** (the specification explicitly asks candidates to avoid vague names like `x`, `temp1`).

## Arithmetic operations (3.2.3)

```
DIV  -- integer division, returns the whole-number quotient
MOD  -- returns the remainder

11 DIV 2 = 5
11 MOD 2 = 1
```

**Practise both together** — treating them as one combined operation, or mixing up which gives which value, is one of the most frequent errors in this section.

## Relational operations (3.2.4)

```
=   equal to
!=  not equal to
<   less than
>   greater than
<=  less than or equal to
>=  greater than or equal to
```

## Boolean operations (3.2.5)

**NOT, AND, OR** — used to build compound conditions, most often **within** an iterative or selection structure's condition, not as a standalone topic:

```
WHILE score < 100 AND livesLeft > 0
```

**AND** requires **every** part true; **OR** requires **only one** part true — treating them as interchangeable silently changes what the algorithm does.

## Worked example: nested iteration and selection

```
WHILE NotSolved
  FOR i <- 1 TO 5
    IF Score > HighScore THEN
      HighScore <- Score
    ENDIF
  ENDFOR
ENDWHILE
```

This combines **all three constructs at once**: an indefinite loop with condition at the start (`WHILE`), a nested definite loop (`FOR`), and a nested selection (`IF`) inside that. **Read from the outside in** — first the WHILE, then what's inside it, then what's inside that — rather than tracing line by line on a first read.

## Worked example: writing a compound condition

Write a pseudocode condition that is true only when a player's score is at least 50 AND they have more than zero lives remaining.

```
IF Score >= 50 AND LivesLeft > 0 THEN
  OUTPUT "Bonus round unlocked"
ENDIF
```

If the requirement instead were "true when EITHER the score is at least 100, OR the player has more than 3 lives remaining," the same structure uses OR instead:

```
IF Score >= 100 OR LivesLeft > 3 THEN
  OUTPUT "Special bonus"
ENDIF
```

Practising this kind of translation -- from an English requirement into a precise compound condition using the correct relational and Boolean operators -- is a more exam-realistic skill than memorising the operator symbols alone, since exam questions are usually phrased as a requirement to translate, not a bare symbol to define.

## Key terms

**Data type** — the kind of value a variable can hold (integer, real, Boolean, character, string). **Sequence** — statements executed in written order. **Iteration** — repeating a block of statements. **Selection** — choosing between branches based on a condition. **Identifier** — the name given to a variable, constant or subroutine.

## Common mistakes

- Confusing **DIV** and **MOD**, or giving only one when a question asks for both.
- Writing a **FOR** loop where the repeat count isn't actually known in advance, when `WHILE`/`REPEAT...UNTIL` is needed.
- Using vague identifier names (`x`, `temp1`) in written algorithm answers.
- Treating **AND**/**OR** as interchangeable — confusing the two silently changes the algorithm's logic.

## Where the wider topic goes next

Once data types, control structures and operators are secure, the rest of Topic 2 Programming builds on them directly: **data structures** (3.2.6) use these constructs with arrays/records; **input/output and file handling** (3.2.7) use assignment and selection to validate user input; **string handling** (3.2.8) applies the same operator logic to text. Treat this content as the **prerequisite layer** — revise it to fluency before moving on.

## Quick self-test

- Calculate 23 DIV 4 and 23 MOD 4.
- Write a WHILE loop that runs until a variable `total` exceeds 100.
- Trace the worked nested example above with Score values 3, 7, 2, 9, 5 — what is HighScore at the end?
- Explain the difference between a condition using AND and the same condition using OR.
- Explain why FOR is the wrong choice for a loop that repeats "until the user enters -1."

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2025/02/oxfordaqa-international-gcse-computerscience-specification.pdf).
