---
title: "OxfordAQA IGCSE Computer Science: Programming Fundamentals — Revision Notes"
seoTitle: "OxfordAQA IGCSE CS Programming Fundamentals Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-types-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "programming-concepts-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "arithmetic-operations-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "relational-operations-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "boolean-operations-9210"
description: "Condensed notes on data types, sequence, selection and iteration, and arithmetic, relational and Boolean operators for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-09-02
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--07-five-data-types.webp" width="900" height="880" alt="Five cards show the data types integer, real, Boolean, character and string, each with an example value and a small picture. A note says some languages call real float." loading="lazy">
  <figcaption>The five data types and their general names used in the exam.</figcaption>
</figure>

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
| **FOR** (definite) | Fixed count known in advance | No — a count below the lower bound runs zero times |
| **WHILE** (indefinite) | At the **start** | No |
| **REPEAT...UNTIL** (indefinite) | At the **end** | Yes |

Also: variable/constant declaration, assignment, subroutine (procedure/function) statements, **nested** selection/iteration, and **meaningful identifier names** (the specification explicitly asks candidates to avoid vague names like `x`, `temp1`).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--08-three-constructs.webp" width="900" height="810" alt="Three small flow diagrams: sequence runs steps in order, selection branches to path A or path B, iteration loops a step back to a test. FOR is for a known count and WHILE for an unknown count." loading="lazy">
  <figcaption>Sequence, selection and iteration are the building blocks of every algorithm.</figcaption>
</figure>

## Arithmetic operations (3.2.3)

```
DIV  -- integer division, returns the whole-number quotient
MOD  -- returns the remainder

11 DIV 2 = 5
11 MOD 2 = 1
```

**Practise both together** — treating them as one combined operation, or mixing up which gives which value, is one of the most frequent errors in this section.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--09-div-mod-groups.webp" width="900" height="680" alt="Eleven counters form five pairs and one single counter. DIV counts the five whole groups, MOD gives the one left over, so 11 = 2 x 5 + 1." loading="lazy">
  <figcaption>DIV gives the whole-number quotient and MOD gives the remainder.</figcaption>
</figure>

## Relational operations (3.2.4)

```
=   equal to
≠   not equal to
<   less than
>   greater than
≤   less than or equal to
≥   greater than or equal to
```

These are the symbols the specification's own assessment material uses; a language you code in day to day may use different ones (e.g. `!=` for not equal), and languages differ, so candidates may answer in whichever suitable format their own language uses.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--01-relational-truth-grid.webp" width="900" height="652" alt="A grid of the six relational operators applied to 7 and 7, 5 and 9, and 9 and 5. For equal values only =, ≤ and ≥ are True. For 5 and 9, ≠, &lt; and ≤ are True; for 9 and 5, ≠, > and ≥ are True." loading="lazy">
  <figcaption>Each comparison gives True or False; the equal case is where the operators differ most.</figcaption>
</figure>

## Boolean operations (3.2.5)

**NOT, AND, OR** — used to build compound conditions, most often **within** an iterative or selection structure's condition, not as a standalone topic:

```
WHILE score < 100 AND livesLeft > 0
```

**AND** requires **every** part true; **OR** requires **only one** part true — treating them as interchangeable silently changes what the algorithm does.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--11-and-or-truth.webp" width="900" height="800" alt="A table evaluates the condition score &lt; 100 AND livesLeft &gt; 0 for four example cases, showing each part and the AND and OR results. AND is True only when both parts are True; OR is True when at least one is." loading="lazy">
  <figcaption>AND requires every part true; OR requires only one.</figcaption>
</figure>

## Worked example: nested iteration and selection

```
HighScore <- 0
Again <- "Y"
WHILE Again = "Y"
  FOR i <- 1 TO 5
    INPUT Score
    IF Score > HighScore THEN
      HighScore <- Score
    ENDIF
  ENDFOR
  OUTPUT HighScore
  INPUT Again
ENDWHILE
```

This combines **all three constructs at once**: an indefinite loop with condition at the start (`WHILE`), a nested definite loop (`FOR`), and a nested selection (`IF`) inside that. **Read from the outside in** — first the WHILE, then what's inside it, then what's inside that — rather than tracing line by line on a first read.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-fundamentals--10-nested-while-for-if.webp" width="900" height="920" alt="The worked example is drawn as nested coloured boxes: a WHILE loop box containing a FOR loop box containing an IF box. Example inputs 3, 9, 4, 7, 2 give a HighScore of 9." loading="lazy">
  <figcaption>Read nested code from the outside in: WHILE, then FOR, then IF.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--02-words-to-operators.webp" width="900" height="710" alt="Six phrases and their conditions on a number line around 50. &quot;At least 50&quot; is mark ≥ 50 and &quot;no more than 50&quot; is mark ≤ 50, both including 50. &quot;More than 50&quot; is mark > 50 and &quot;less than 50&quot; is mark &lt; 50, both excluding 50. &quot;Exactly 50&quot; is mark = 50 and &quot;anything except 50&quot; is mark ≠ 50." loading="lazy">
  <figcaption>The boundary words decide whether 50 itself is included.</figcaption>
</figure>

## Key terms

**Data type** — the kind of value a variable can hold (integer, real, Boolean, character, string). **Sequence** — statements executed in written order. **Iteration** — repeating a block of statements. **Selection** — choosing between branches based on a condition. **Identifier** — the name given to a variable, constant or subroutine.

## Common mistakes

- Confusing **DIV** and **MOD**, or giving only one when a question asks for both.
- Writing a **FOR** loop where the repeat count isn't actually known in advance, when `WHILE`/`REPEAT...UNTIL` is needed.
- Using vague identifier names (`x`, `temp1`) in written algorithm answers.
- Treating **AND**/**OR** as interchangeable — confusing the two silently changes the algorithm's logic.

## Where the wider topic goes next

Once data types, control structures and operators are secure, the rest of Topic 2 Programming builds on them directly: **data structures** (3.2.6) use these constructs with arrays/records; **input/output and file handling** (3.2.7) use assignment and selection to validate user input; **string handling** (3.2.8) applies the same operator logic to text; **random number generation** (3.2.9); **subroutines** (3.2.10); **structured programming** (3.2.11); **robust and secure programming** (3.2.12); and the **classification of programming languages and translators** (3.2.13). Treat this content as the **prerequisite layer** — revise it to fluency before moving on.

## Quick self-test

1. Calculate 23 DIV 4 and 23 MOD 4.
2. Write a WHILE loop that runs until a variable `total` exceeds 100.
3. Trace the worked nested example above with Score values 3, 7, 2, 9, 5, followed by "N" for `Again` — what is HighScore at the end?
4. Explain the difference between a condition using AND and the same condition using OR.
5. Explain why FOR is the wrong choice for a loop that repeats "until the user enters -1."

**Answers:** 1. 23 DIV 4 = 5; 23 MOD 4 = 3. 2. `WHILE total <= 100 ... ENDWHILE` (a REPEAT...UNTIL testing `total > 100` after the body is equally acceptable). 3. The WHILE condition is true on entry, so the FOR loop inputs the five values and compares each in turn: 3 becomes the first HighScore, then 7 replaces it, 2 does not replace it, 9 replaces it, and 5 does not. 9 is output, "N" is input, the WHILE condition is now false and the loop ends — HighScore is **9**. 4. AND requires every part of the condition to be true before the whole condition is true; OR requires only one part to be true — using the wrong one silently changes which cases the code handles. 5. FOR needs a fixed count known in advance; "until the user enters -1" depends on unpredictable user input, so an indefinite loop (WHILE or REPEAT...UNTIL) is needed instead.

## Frequently asked questions

**What are the data types in OxfordAQA International GCSE Computer Science 9210?**
Section 3.2.1 uses integer, real, Boolean, character and string. Exams use the specification's own general names even when a programming language uses a different term, such as float for real.

**What are the three basic programming constructs?**
The three combining principles are sequence, selection and iteration. Nearly every algorithm question asks you to identify or write some combination of these.

**What is the difference between a WHILE loop and a REPEAT...UNTIL loop?**
Both are indefinite loops. A WHILE loop checks its condition at the start, so it may not run at all, while a REPEAT...UNTIL loop checks its condition at the end, so it always runs at least once.

**What is the difference between AND and OR in a condition?**
AND requires every part of the condition to be true, while OR requires only one part to be true. Treating them as interchangeable silently changes the algorithm's logic.

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2025/02/oxfordaqa-international-gcse-computerscience-specification.pdf).
