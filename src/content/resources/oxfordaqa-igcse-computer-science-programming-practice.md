---
title: "OxfordAQA IGCSE Computer Science: Programming Fundamentals — Practice Questions (9210)"
resourceType: "practice-questions"
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
description: "Original exam-style practice questions with full worked answers on data types, sequence/iteration/selection, and arithmetic, relational and Boolean operators, for OxfordAQA International GCSE Computer Science (9210)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-03
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Programming fundamentals study guide](/resources/igcse-oxfordaqa-computer-science-programming-fundamentals/)

---

## Section A

**1.** State the data type most appropriate for storing: (a) a person's age (b) whether a light is on
or off (c) a single letter grade. **[3]**

**2.** Evaluate: (a) 17 DIV 5 (b) 17 MOD 5. **[2]**

## Section B

**3.** Identify the three "combining principles" of imperative programming named in the specification,
and give one example construct for each. **[6]**

**4.** Trace through the following pseudocode and state the final value of `Total`.
```
Total <- 0
FOR i <- 1 TO 4
  IF i MOD 2 = 0 THEN
    Total <- Total + i
  ENDIF
ENDFOR
```
**[4]**

**5.** Write a compound condition using a relational and a Boolean operator that is true only when a
variable `Score` is greater than 50 AND a variable `LivesLeft` is greater than 0. **[3]**

**6.** Explain why using meaningful identifier names (e.g. `studentScore` rather than `x`) is good
programming practice. **[3]**

---

## Answers

**(a)** Integer [1]. **(b)** Boolean [1]. **(c)** Character (or string) [1].

**2. (a)** 17 DIV 5 = 3 [1]. **(b)** 17 MOD 5 = 2 [1].

**3.** **Sequence** — statements executed one after another in order, e.g. a series of assignment
statements [1] [1]. **Iteration** — repeating a block of statements, e.g. a `FOR` or `WHILE` loop [1]
[1]. **Selection** — choosing between different paths of execution, e.g. an `IF...THEN...ELSE` statement
[1] [1].

**4.**
```
i = 1: 1 MOD 2 = 1 (not 0)          -- Total stays 0
i = 2: 2 MOD 2 = 0                  -- Total = 0 + 2 = 2
i = 3: 3 MOD 2 = 1 (not 0)          -- Total stays 2
i = 4: 4 MOD 2 = 0                  -- Total = 2 + 4 = 6

Final value of Total = 6
```
[1] mark for correctly tracing each iteration, [1] for correctly identifying which iterations satisfy the
condition, [1] [1] for the correct final value with working shown.

**5.** `Score > 50 AND LivesLeft > 0` [1] [1] [1] (1 mark for each correct relational operator used, 1
mark for correctly combining them with AND rather than OR).

**6.** Meaningful identifier names make the purpose of a variable clear from its name alone, without
needing to trace through the code to work out what it stores [1] [1]. This makes code easier to read,
debug and maintain, both for the original programmer returning to it later and for anyone else working
with the code [1].

---

## Exam technique for this topic

Trace-table questions like Q4 are marked on showing working, not just the final value — set out each
iteration of a loop on its own line, stating the condition being tested and whether it is true or false,
since a correct final answer with no working shown may not earn full marks even though it demonstrates
the right understanding. When identifying whether a loop should be definite (`FOR`) or indefinite
(`WHILE`/`REPEAT...UNTIL`), ask whether the number of repetitions is known in advance — if it depends on
a condition that could change unpredictably, an indefinite loop is required, not a `FOR` loop forced to
approximate it. For compound conditions like Q5, always double-check whether the scenario needs AND
(every part must be true) or OR (only one part needs to be true), since a condition using the wrong
Boolean operator can silently produce working but incorrect code.

## Worked example: writing an algorithm from a description

A question describes a simple program: read five numbers input by the user, and output whether each one
is even or odd. A strong pseudocode answer combines all three constructs correctly:

```
FOR i <- 1 TO 5
  INPUT Number
  IF Number MOD 2 = 0 THEN
    OUTPUT "Even"
  ELSE
    OUTPUT "Odd"
  ENDIF
ENDFOR
```

This uses a definite loop (`FOR`, since exactly five numbers are known in advance), a `MOD` operation to
test evenness (a number is even if it leaves no remainder when divided by 2), and a selection statement
to output the correct result — practising this kind of translate-a-description-into-pseudocode exercise
regularly, rather than only tracing pre-written code, builds the construction skill that longer
algorithm-writing exam questions specifically assess.

## Why pseudocode independence matters

Because 9210's written exams always use OxfordAQA's own pseudocode regardless of which language a
candidate learned in the classroom, practising reading and writing in this specific pseudocode style —
not just understanding the underlying logic in a familiar language like Python — is essential exam
preparation. A candidate fluent in Python but unfamiliar with the exact pseudocode conventions used in
this specification (for example, `<-` for assignment, or `ENDIF`/`ENDFOR` closing keywords) risks losing
time or making translation errors under exam pressure, even when their underlying programming
understanding is otherwise strong.

## Where marks are usually lost

- Confusing DIV and MOD, or giving only one when a question asks for both the quotient and the remainder.
- Writing a definite loop (FOR) where the number of repetitions is not actually known in advance.
- Tracing a loop without showing each iteration's working, losing method marks even with a correct final answer.
- Treating AND and OR as interchangeable, when they produce different results whenever the two conditions being combined disagree.
