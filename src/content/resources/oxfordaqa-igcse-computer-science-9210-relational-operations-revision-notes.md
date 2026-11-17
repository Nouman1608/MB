---
title: "OxfordAQA IGCSE Computer Science (9210): Relational operations in a programming language -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.04
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "relational-operations-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.4: relational operators, exam symbols, boundary wording, opposites, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.4 Relational operations in a programming language** of OxfordAQA International
GCSE Computer Science (9210). The traced examples are in the [relational operations study
guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations/).

## What the specification asks

- Be familiar with and use: **equal to, not equal to, less than, greater than, less than or equal to, greater
  than or equal to**.
- Use them **in your own programs** and **interpret** them in given algorithms.
- Assessment material uses **=, ≠, <, >, ≤, ≥**; languages may use other symbols.

## Core facts

- A relational operator **compares two values** and gives a **Boolean** (True/False).
- The result drives **selection** (`IF`) and **iteration** (`WHILE`, `REPEAT...UNTIL`).
- When the two values are **equal**, only `=`, `≤`, `≥` are True.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--01-relational-truth-grid.webp" width="900" height="652" alt="A grid of the six relational operators applied to 7 and 7, 5 and 9, and 9 and 5. For equal values only =, ≤ and ≥ are True. For 5 and 9, ≠, &lt; and ≤ are True; for 9 and 5, ≠, > and ≥ are True." loading="lazy">
  <figcaption>Each comparison gives True or False; the equal case is where the operators differ most.</figcaption>
</figure>

## Symbol table

| Meaning | Exam | Python / C# | Visual Basic |
|---|---|---|---|
| equal to | `=` | `==` | `=` |
| not equal to | `≠` | `!=` | `<>` |
| less than | `<` | `<` | `<` |
| greater than | `>` | `>` | `>` |
| less than or equal to | `≤` | `<=` | `<=` |
| greater than or equal to | `≥` | `>=` | `>=` |

Pseudocode uses `←` for assignment, so `=` always means comparison.

## Words to symbols

| Words | Symbol |
|---|---|
| at least, minimum of, no less than | `≥` |
| more than, over, exceeds | `>` |
| at most, maximum of, no more than, up to | `≤` |
| less than, under, below | `<` |
| exactly, matches | `=` |
| different from, except | `≠` |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--02-words-to-operators.webp" width="900" height="710" alt="Six phrases and their conditions on a number line around 50. &quot;At least 50&quot; is mark ≥ 50 and &quot;no more than 50&quot; is mark ≤ 50, both including 50. &quot;More than 50&quot; is mark > 50 and &quot;less than 50&quot; is mark &lt; 50, both excluding 50. &quot;Exactly 50&quot; is mark = 50 and &quot;anything except 50&quot; is mark ≠ 50." loading="lazy">
  <figcaption>The boundary words decide whether 50 itself is included.</figcaption>
</figure>

## Opposites (for converting loops and negating conditions)

| Condition | Opposite |
|---|---|
| `a = b` | `a ≠ b` |
| `a < b` | `a ≥ b` |
| `a > b` | `a ≤ b` |

`WHILE x < 10` stops at the same point as `UNTIL x ≥ 10`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--03-opposite-operators.webp" width="900" height="656" alt="Number lines split at 10. count &lt; 10 covers everything below 10 and its opposite count ≥ 10 covers 10 and above; count ≤ 10 and count > 10 split the line the other way. count = 10 is the opposite of count ≠ 10. So WHILE count &lt; 10 becomes UNTIL count ≥ 10, not UNTIL count > 10." loading="lazy">
  <figcaption>Opposites split the line with no gap: &lt; with ≥, > with ≤, = with ≠.</figcaption>
</figure>

## Loop counts depend on the operator

| Loop | Values of `i` used | Passes |
|---|---|---|
| `i ← 0`, `WHILE i < 5`, `i ← i + 1` | 0 to 4 | 5 |
| `i ← 0`, `WHILE i ≤ 5`, `i ← i + 1` | 0 to 5 | 6 |
| `i ← 1`, `WHILE i < 5`, `i ← i + 1` | 1 to 4 | 4 |
| `i ← 10`, `WHILE i > 0`, `i ← i - 2` | 10, 8, 6, 4, 2 | 5 |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--06-loop-boundary.webp" width="900" height="640" alt="Two WHILE loops start count at 0 and output it before adding 1. With WHILE count &lt; 5 the output is 0, 1, 2, 3, 4: five values. With WHILE count ≤ 5 the output is 0, 1, 2, 3, 4, 5: six values." loading="lazy">
  <figcaption>Changing &lt; to ≤ adds one more pass of the loop.</figcaption>
</figure>

## Selection chains

In `IF ... ELSE IF ... ELSE` chains, tests are checked **in order** and the first True one wins. Later tests can
assume earlier ones were False, so `ELSE IF score ≥ 40` after `IF score ≥ 70` means "40 to 69".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--05-band-boundaries.webp" width="900" height="788" alt="An IF … ELSE IF chain puts times under 20 in Fast, times from 20 up to under 30 in Steady, and 30 or more in Starter. On a number line the boundaries are at 20 and 30. A trace of 18, 20, 29 and 30 gives Fast, Steady, Steady and Starter; 20 and 30 are the boundary values." loading="lazy">
  <figcaption>Tests run in order, and boundary values reveal whether &lt; or ≤ was the right choice.</figcaption>
</figure>

## Strings

- `=` and `≠` compare strings character by character; **case matters** (`"Paris" ≠ "paris"`).
- Compare like with like: convert `"25"` to an integer before comparing it with `25`.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-relational-operations--04-string-comparison-case.webp" width="900" height="651" alt="The strings &quot;yes&quot; and &quot;Yes&quot; are compared character by character; the first characters differ in case, so &quot;yes&quot; = &quot;Yes&quot; is False, while &quot;yes&quot; = &quot;yes&quot; is True. A menu expecting &quot;Y&quot; will not accept &quot;y&quot; unless the condition allows both, and &quot;12&quot; must be converted before it is compared with the integer 12." loading="lazy">
  <figcaption>String comparison checks every character, including case.</figcaption>
</figure>

## Worked mini-trace

```
lowest ← 100
FOR i ← 1 TO 4
  reading ← USERINPUT
  IF reading < lowest THEN
    lowest ← reading
  ENDIF
ENDFOR
```

With inputs 60, 75, 60, 42, `lowest` becomes 60, stays 60, stays 60 (because `60 < 60` is False) and then becomes
42. Using `≤` would give the same final answer here, but it would replace the stored value on a tie, which matters
when the program also records *which* reading was lowest.

## Key terms

| Term | Meaning |
|---|---|
| Relational operator | An operator that compares two values and returns True or False |
| Condition | An expression that evaluates to True or False, used to control selection or iteration |
| Boundary value | A value at the edge of a range, where the choice of `<` or `≤` matters |
| Inclusive | Including the boundary value (`≤`, `≥`) |
| Exclusive | Excluding the boundary value (`<`, `>`) |

## Exam traps

- "At least 18" is `≥ 18`, not `> 18`.
- Opposite of `>` is `≤`, not `<`.
- `1 ≤ x ≤ 10` is maths notation; in code use `x ≥ 1 AND x ≤ 10`.
- Off-by-one loops: count the passes, do not guess.
- Writing `=>` or `=<`: use `≥`/`≤` (or `>=`/`<=`).
- Comparing strings without allowing for upper and lower case.
- Assuming a later `ELSE IF` is tested when an earlier condition was True.

## Self-test

1. State the result of `12 ≥ 12`.
2. State the result of `"Cat" = "cat"`.
3. Write a condition for "the speed is over 70".
4. Write a condition for "the temperature is no more than 5".
5. Give the opposite of `stock < 20`.
6. Rewrite `WHILE attempts ≠ 3` as an `UNTIL` condition that stops at the same point.
7. How many times does the body run? `i ← 2`, `WHILE i ≤ 8`, `i ← i + 2`.
8. Write the Python and Visual Basic symbols for "not equal to".
9. Explain why `IF mark > 50` is wrong for "a pass is 50 or more".
10. Write a condition that is true when `age` is from 13 to 19 inclusive.
11. In `IF t ≥ 30 THEN ... ELSE IF t ≥ 15 THEN ...`, which values of `t` reach the second branch's code?
12. Why does the specification's pseudocode use `←` for assignment?

**Answers:**
1. True.
2. False (case differs).
3. `speed > 70`.
4. `temperature ≤ 5`.
5. `stock ≥ 20`.
6. `UNTIL attempts = 3`.
7. 4 times (`i` = 2, 4, 6, 8).
8. Python `!=`; Visual Basic `<>`.
9. A mark of exactly 50 should pass but `50 > 50` is False; use `mark ≥ 50`.
10. `age ≥ 13 AND age ≤ 19`.
11. Values from 15 up to but not including 30 (15 ≤ t < 30).
12. So that `=` always means "equal to" (comparison) and cannot be confused with storing a value.

## Related resources

- [Relational operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations/)
- [Relational operations practice questions](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations-practice/)
- [Boolean operations revision notes](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations-revision-notes/)
