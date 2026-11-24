---
title: "OxfordAQA IGCSE Computer Science (9210): Boolean operations in a programming language -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.05
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "boolean-operations-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.2.5: NOT, AND and OR, compound conditions, range checks, evaluation order and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.5 Boolean operations in a programming language** of OxfordAQA International
GCSE Computer Science (9210). Worked examples are in the [Boolean operations study
guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations/).

## What the specification asks

- Be familiar with and use **NOT, AND, OR**.
- Use these operators, **and combinations of them**, within conditions for **iterative** and **selection**
  structures.

## Truth table

| A | B | A AND B | A OR B | NOT A |
|---|---|---|---|---|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

- **AND**: all parts True.
- **OR**: at least one part True (both counts).
- **NOT**: reverses one value.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--01-and-or-not-truth-table.webp" width="900" height="652" alt="Logic symbols for AND, OR and NOT beside a truth table for inputs A and B. A AND B is True only in the row where both are True; A OR B is True in every row except False, False; NOT A is True when A is False." loading="lazy">
  <figcaption>AND needs both, OR needs at least one, NOT flips a single value.</figcaption>
</figure>

## Patterns worth memorising

| Purpose | Condition |
|---|---|
| Inside a range (inclusive) | `x ≥ low AND x ≤ high` |
| Outside a range | `x < low OR x > high` |
| Accept either of two answers | `reply = "Y" OR reply = "y"` |
| Keep looping while both hold | `WHILE lives > 0 AND NOT won` |
| Search until found or end reached | `WHILE NOT found AND i < size` |
| Test a Boolean is False | `NOT found` (no need for `= False`) |
| Login succeeds | `user = storedUser AND pass = storedPass` |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--02-and-versus-or.webp" width="900" height="762" alt="Two overlapping circles for temperature > 30 and humidity > 70. With AND only the overlap is shaded, so the warning shows only when both hold; with OR both circles are shaded, so it warns on every hot day and every humid day. A note says &quot;students and pensioners&quot; needs OR." loading="lazy">
  <figcaption>Choose AND or OR from the meaning of the rule; the English word &quot;and&quot; can mean either.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--04-range-checks.webp" width="900" height="622" alt="Three number lines marked 0 and 100. mark ≥ 0 AND mark ≤ 100 shades the range between the limits. mark &lt; 0 OR mark > 100 shades both ends beyond the limits. mark &lt; 0 AND mark > 100 shades nothing, because no number is both below 0 and above 100." loading="lazy">
  <figcaption>Inside a range needs both limits (AND); outside needs either one broken (OR).</figcaption>
</figure>

## Order of evaluation

`NOT` first, then `AND`, then `OR` (in most languages). `a OR b AND c` = `a OR (b AND c)`.
**Use brackets** whenever `AND` and `OR` are mixed.

Example with `a = True`, `b = False`, `c = False`:
- `a OR b AND c` → `True OR False` → **True**
- `(a OR b) AND c` → `True AND False` → **False**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--06-order-of-evaluation.webp" width="900" height="688" alt="With hasKey True, isAdmin False and isLoggedIn False, two evaluation trees are compared. hasKey OR (isAdmin AND isLoggedIn), the default reading, evaluates the AND to False and the OR to True. (hasKey OR isAdmin) AND isLoggedIn evaluates the OR to True and the AND to False." loading="lazy">
  <figcaption>hasKey OR isAdmin AND isLoggedIn means hasKey OR (isAdmin AND isLoggedIn); brackets remove the doubt.</figcaption>
</figure>

## Loops with compound conditions

- `WHILE p AND q` stops as soon as **either** `p` or `q` becomes False.
- `WHILE p OR q` keeps going until **both** are False.
- Converting to `REPEAT...UNTIL`: `UNTIL NOT (p AND q)` stops at the same point (the body still runs at least once).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--03-compound-loop-conditions.webp" width="900" height="788" alt="Two flowcharts. WHILE lives > 0 AND NOT won tests before each turn and loops back while True. REPEAT PlayTurn() UNTIL NOT (lives > 0 AND NOT won) plays a turn first, then stops when the reversed condition is True, so it always plays at least one turn." loading="lazy">
  <figcaption>Putting NOT around the whole WHILE condition gives the matching UNTIL condition.</figcaption>
</figure>

## Evaluating step by step

For `IF score ≥ 50 AND (bonus OR level > 3)` with `score = 60`, `bonus = False`, `level = 2`:
1. `score ≥ 50` → True
2. `bonus OR level > 3` → `False OR False` → False
3. `True AND False` → **False**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--07-cinema-condition-table.webp" width="900" height="671" alt="The condition age ≥ 15 OR (withAdult AND age ≥ 12) evaluated for four inputs. Age 16 without an adult and age 13 with an adult are Allowed; age 13 without an adult and age 10 with an adult are Not allowed, because neither part is True." loading="lazy">
  <figcaption>Give each part of the condition its own column, then combine them.</figcaption>
</figure>

## Mini trace: a loop with two exit conditions

```
total ← 0
count ← 0
WHILE total ≤ 20 AND count < 4
  total ← total + 7
  count ← count + 1
ENDWHILE
```

| Pass | total | count | `total ≤ 20` | `count < 4` | Continue? |
|---|---|---|---|---|---|
| start | 0 | 0 | True | True | Yes |
| 1 | 7 | 1 | True | True | Yes |
| 2 | 14 | 2 | True | True | Yes |
| 3 | 21 | 3 | False | True | No |

The loop stops after three passes because the first part became False, even though `count < 4` was still True.

## Key terms

| Term | Meaning |
|---|---|
| Boolean operator | An operator (NOT, AND, OR) that works on True/False values |
| Compound condition | A condition made from two or more comparisons joined by Boolean operators |
| AND | True only if both operands are True |
| OR | True if at least one operand is True |
| NOT | Gives the opposite of its operand |
| Truth table | A table listing the output for every combination of inputs |

## Exam traps

- **Half-written comparisons**: `age > 12 AND < 18` must be `age > 12 AND age < 18`.
- **`x = "A" OR "B"`** must be `x = "A" OR x = "B"`.
- **"Never true" conditions**: `x < 0 AND x > 100` can never be True; outside a range uses `OR`.
- **"Always true" conditions**: `x ≠ "A" OR x ≠ "B"` is True for every value of `x`; to reject both, use `AND`.
- **English "and" meaning "either"**: "children and over-65s travel free" needs `OR`.
- **No brackets** when mixing `AND` and `OR`.
- **OR treated as exclusive**: True OR True is True.

## Self-test

1. State the value of `True AND False`.
2. State the value of `NOT (5 > 3)`.
3. State the value of `(4 = 4) OR (2 > 9)`.
4. Write a condition that is true when `speed` is from 30 to 50 inclusive.
5. Write a condition that is true when `speed` is outside the range 30 to 50.
6. Correct the condition `IF colour = "red" OR "blue" THEN`.
7. A loop is `WHILE tries < 3 AND NOT correct`. Give the two situations that end it.
8. With `a = False`, `b = True`, `c = True`, evaluate `a AND b OR c`.
9. Evaluate `a AND (b OR c)` with the same values.
10. Explain why `IF n ≠ 0 OR n ≠ 1 THEN` is always true.
11. Write a condition for "free entry for under-5s and over-80s".
12. Write the `UNTIL` condition equivalent to `WHILE NOT finished AND count < 10`.

**Answers:**
1. False.
2. False.
3. True.
4. `speed ≥ 30 AND speed ≤ 50`.
5. `speed < 30 OR speed > 50`.
6. `IF colour = "red" OR colour = "blue" THEN`.
7. `tries` reaches 3, or `correct` becomes True.
8. True (`a AND b` is False; `False OR True` is True).
9. False (`b OR c` is True; `False AND True` is False).
10. Any value of `n` is different from at least one of 0 and 1, so at least one side is always True.
11. `age < 5 OR age > 80`.
12. `UNTIL NOT (NOT finished AND count < 10)`, or equivalently `UNTIL finished OR count ≥ 10`.

## More resources on this topic

- [Boolean operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations/)
- [Boolean operations practice questions](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations-practice/)
- [Relational operations revision notes](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations-revision-notes/)
