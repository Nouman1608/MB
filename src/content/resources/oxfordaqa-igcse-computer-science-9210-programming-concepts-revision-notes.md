---
title: "OxfordAQA IGCSE Computer Science (9210): Programming concepts -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.02
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "programming-concepts-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.2: statement types, constants, loop choice, nesting, identifiers, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.2 Programming concepts** of OxfordAQA International GCSE Computer Science
(9210). The full explanations and traced examples are in the
[programming concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts/).

## What the specification asks

- Use, understand and combine: **variable declaration, constant declaration, assignment, iteration, selection,
  subroutine (procedure/function)**.
- Know **why named constants and variables are used**.
- Use **definite** and **indefinite** iteration, with the condition at the **start** or the **end**.
- Use **nested selection** and **nested iteration**.
- Use **meaningful identifier names** (variables, constants, subroutines) and know why they matter.

## Combining principles

**Sequence** (one statement after another), **iteration/repetition** and **selection/choice** are basic to all
imperative languages. Every program is built from them.

## Statement types at a glance

| Type | Recognise it by | Example |
|---|---|---|
| Variable declaration | A name introduced to hold changing data | `int lives;` in C#, or first use in Python |
| Constant declaration | `CONSTANT` keyword; value fixed while running | `CONSTANT Rounds ← 10` |
| Assignment | `←` (value on the right stored on the left) | `lives ← lives - 1` |
| Iteration | `FOR`, `WHILE`, `REPEAT...UNTIL` | `WHILE lives > 0` |
| Selection | `IF ... THEN ... ELSE ... ENDIF` | `IF lives = 0 THEN` |
| Subroutine | A call by name | `DrawBoard()` |

## Why constants and variables

- **Variables:** hold values that change while the program runs, referred to by a name.
- **Named constants:** change the value in **one place**; code is **easier to read** (`Rounds` not `10`); the
  value **cannot be changed by accident** while running.

## Loops compared

| Loop | Kind | Condition checked | Minimum runs | Repeats while... |
|---|---|---|---|---|
| `FOR i ← 1 TO n` | Definite | Count fixed at the start | 0 if the start value is beyond the end value | counter has not passed `n` |
| `WHILE cond` | Indefinite | Start | 0 | `cond` is **true** |
| `REPEAT ... UNTIL cond` | Indefinite | End | 1 | `cond` is **false** (stops when it becomes true) |

**Converting between them:** `WHILE x < 5` and `UNTIL x ≥ 5` stop at the same point; the conditions are opposites.

**Choosing:**
- Known count → `FOR`.
- May need zero runs → `WHILE`.
- Must run once before testing (ask, then check) → `REPEAT...UNTIL`.

## Nesting

- **Nested iteration:** the inner loop completes **all** its repetitions for **each** outer repetition. An outer
  loop of 4 and inner loop of 3 runs the inner body **12** times.
- **Nested selection:** the inner `IF` is tested **only** when the outer condition allows it.
- Where you put an initialisation matters: inside the outer loop it resets each time; outside it does not.

## Meaningful identifiers

Good: `averageMark`, `MaxPlayers`, `PrintReceipt`. Poor: `x`, `n2`, `stuff`.
Why: easier to **read**, easier to **debug** (wrong logic stands out), easier to **maintain** by other
programmers.

## Key terms

| Term | Meaning |
|---|---|
| Variable | A named storage location whose value can change while the program runs |
| Constant | A named value that cannot change while the program runs |
| Declaration | Introducing a variable or constant's name (and often its type) before use |
| Assignment | Storing a value in a variable |
| Definite iteration | Repetition a known number of times |
| Indefinite iteration | Repetition until a condition is met; count not known in advance |
| Nesting | Placing one selection or iteration structure inside another |
| Identifier | The name of a variable, constant or subroutine |

## Exam traps

- **WHILE does not guarantee one run.** Only the condition-at-the-end loop does.
- **Same condition in WHILE and UNTIL** gives opposite behaviour. Flip the condition when converting.
- **Infinite loops:** a `WHILE` or `REPEAT` whose body never changes the condition variable never ends.
- **FOR for user-controlled repetition** ("until the user types STOP") is wrong; use indefinite iteration.
- **Constant explained as "a variable that stays the same"** misses that it **cannot** be changed.
- **Missing reasons:** "meaningful names are good practice" scores nothing on its own.
- **Counting nested repetitions:** multiply the counts when the inner loop's range is fixed; add them when it
  depends on the outer counter (1 + 2 + 3...).

## Self-test

1. Name the three combining principles of imperative programming.
2. State two reasons for using a named constant.
3. Explain the difference between declaring a variable and assigning to it.
4. State which loop always runs its body at least once.
5. Rewrite `WHILE count < 10` as the condition of a `REPEAT...UNTIL` loop that stops at the same point.
6. An outer `FOR` loop runs 5 times and contains an inner `FOR` loop that runs 4 times. How many times does the
inner body run?
7. `FOR i ← 1 TO 3` contains `FOR j ← 1 TO i`. How many times does the inner body run?
8. Give one situation where a `WHILE` loop is better than a `REPEAT...UNTIL` loop.
9. What is output by `x ← 3`, then `REPEAT x ← x * 2 UNTIL x > 20`, then `OUTPUT x`?
10. Explain why `FOR` is not suitable for "keep asking for a guess until it is correct".
11. Give two reasons for using meaningful identifier names.
12. In nested selection, when is the inner condition tested?

**Answers:**
1. Sequence, iteration (repetition) and selection (choice).
2. Any two: the value is changed in one place only; the code is easier to read; the value cannot be changed by
mistake while the program runs.
3. Declaring introduces the variable's name (and often its type); assigning stores a value in it.
4. `REPEAT...UNTIL` (condition at the end).
5. `UNTIL count ≥ 10`.
6. 20.
7. 6 (1 + 2 + 3).
8. When the body might not need to run at all, for example processing items while any remain, where there may be
none.
9. 24 (x becomes 6, 12, then 24, which is the first value greater than 20).
10. The number of guesses is not known in advance, so indefinite iteration is needed.
11. Any two: code is easier to read and understand; errors are easier to find; the program is easier for others
to maintain.
12. Only when the outer condition is true (or the branch containing it is taken).

## Related resources

- [Programming concepts study guide](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts/)
- [Programming concepts practice questions](/resources/oxfordaqa-igcse-computer-science-9210-programming-concepts-practice/)
- [Programming Fundamentals revision notes](/resources/oxfordaqa-igcse-computer-science-programming-revision-notes/)
