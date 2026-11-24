---
title: "OxfordAQA IGCSE Computer Science (9210): Boolean operations in a programming language"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.2.5: NOT, AND and OR in loop and IF conditions, evaluation order, and common logic errors."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-17
featured: false
---

This guide covers section **3.2.5 Boolean operations in a programming language** of OxfordAQA International GCSE
Computer Science (9210). You must "be familiar with and be able to use" **NOT, AND and OR**, and the
specification adds that you "should be able to use these operators, and combinations of these operators, within
conditions for iterative and selection structures". The [Programming Fundamentals study
guide](/resources/igcse-oxfordaqa-computer-science-programming-fundamentals/) gives the short version; here the
focus is on building, reading and correcting compound conditions.

## The three operators

Boolean operators combine or reverse **Boolean values**, usually the results of relational comparisons
(see the [relational operations study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-operations/)).

| A | B | `A AND B` | `A OR B` | `NOT A` |
|---|---|---|---|---|
| False | False | False | False | True |
| False | True | False | True | True |
| True | False | False | True | False |
| True | True | True | True | False |

- **AND** is True only when **both** sides are True. Use it when every requirement must be met.
- **OR** is True when **at least one** side is True (including both). Use it when any one requirement is enough.
- **NOT** reverses a single value. Use it to test that something is **not** the case, such as `NOT found`.

Truth tables for logic gates also appear in Topic 4 (Boolean logic), but in this section the same operators are
written inside program conditions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--01-and-or-not-truth-table.webp" width="900" height="652" alt="Logic symbols for AND, OR and NOT beside a truth table for inputs A and B. A AND B is True only in the row where both are True; A OR B is True in every row except False, False; NOT A is True when A is False." loading="lazy">
  <figcaption>AND needs both, OR needs at least one, NOT flips a single value.</figcaption>
</figure>

## Compound conditions in selection

A compound condition joins two or more comparisons. Each side of `AND` or `OR` must be a **complete** comparison:

```
IF temperature > 30 AND humidity > 70 THEN
  OUTPUT "Heat warning"
ENDIF
```

Both conditions must hold for the warning. Changing `AND` to `OR` would warn on every hot day **and** every humid
day, which is a different program. Deciding between AND and OR is about the meaning of the rule in the question,
so read the rule carefully: "a discount for students and pensioners" usually means a person who is **either**,
which needs `OR`, even though the English uses "and".

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--02-and-versus-or.webp" width="900" height="762" alt="Two overlapping circles for temperature > 30 and humidity > 70. With AND only the overlap is shaded, so the warning shows only when both hold; with OR both circles are shaded, so it warns on every hot day and every humid day. A note says &quot;students and pensioners&quot; needs OR." loading="lazy">
  <figcaption>Choose AND or OR from the meaning of the rule; the English word &quot;and&quot; can mean either.</figcaption>
</figure>

## Compound conditions in iteration

Loops often need to stop for more than one reason. A game continues while the player has lives **and** has not
yet won:

```
WHILE lives > 0 AND NOT won
  PlayTurn()
ENDWHILE
```

The loop ends as soon as **either** part becomes False: lives reach 0, or `won` becomes True. To write the same
logic as a condition-at-the-end loop, the simplest safe method is to put `NOT` around the whole `WHILE`
condition:

```
REPEAT
  PlayTurn()
UNTIL NOT (lives > 0 AND NOT won)
```

(Remember the difference: this version always plays at least one turn.) Combined Boolean conditions are also how
a search loop stops either when the item is found or when every item has been checked.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--03-compound-loop-conditions.webp" width="900" height="788" alt="Two flowcharts. WHILE lives > 0 AND NOT won tests before each turn and loops back while True. REPEAT PlayTurn() UNTIL NOT (lives > 0 AND NOT won) plays a turn first, then stops when the reversed condition is True, so it always plays at least one turn." loading="lazy">
  <figcaption>Putting NOT around the whole WHILE condition gives the matching UNTIL condition.</figcaption>
</figure>

## Range checks: AND inside, OR outside

Two patterns appear constantly:

```
IF mark ≥ 0 AND mark ≤ 100 THEN      -- inside the range 0 to 100
IF mark < 0 OR mark > 100 THEN       -- outside the range
```

A value **inside** a range must satisfy both limits, so the limits are joined with `AND`. A value **outside** a
range breaks one limit or the other, so the limits are joined with `OR`. Writing `mark < 0 AND mark > 100` gives a
condition that can never be True, because no number is both below 0 and above 100. This is the logic behind the
range checks in [robust and secure programming](/resources/oxfordaqa-igcse-computer-science-9210-robust-and-secure-programming/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--04-range-checks.webp" width="900" height="622" alt="Three number lines marked 0 and 100. mark ≥ 0 AND mark ≤ 100 shades the range between the limits. mark &lt; 0 OR mark > 100 shades both ends beyond the limits. mark &lt; 0 AND mark > 100 shades nothing, because no number is both below 0 and above 100." loading="lazy">
  <figcaption>Inside a range needs both limits (AND); outside needs either one broken (OR).</figcaption>
</figure>

## Boolean variables as flags

A Boolean variable used to record whether something has happened is often called a **flag**. A flag lets a
program remember the result of a test and use it later in a condition:

```
found ← False
FOR i ← 0 TO 9
  IF codes[i] = target THEN
    found ← True
  ENDIF
ENDFOR
IF NOT found THEN
  OUTPUT "Code not recognised"
ENDIF
```

Here `found` starts False and is only set to True if a match occurs on any pass. After the loop, `NOT found` is
True only when no item matched. Notice that the flag is never set back to False inside the loop: doing so would
mean only the last comparison counted.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--05-boolean-flag.webp" width="900" height="538" alt="Pseudocode that sets found to False, loops through codes[0] to codes[9] setting found to True on a match, then outputs &quot;Code not recognised&quot; if NOT found. Beside it, the flag switches from False to True on any match and is never switched back inside the loop." loading="lazy">
  <figcaption>A flag starts False, can only be switched to True in the loop, and is tested after it.</figcaption>
</figure>

## Order of evaluation

In most languages `NOT` is applied first, then `AND`, then `OR`, in the same way that multiplication comes before
addition. So:

`hasKey OR isAdmin AND isLoggedIn` means `hasKey OR (isAdmin AND isLoggedIn)`.

With `hasKey ← True`, `isAdmin ← False`, `isLoggedIn ← False`, the result is **True** (because `hasKey` is True).
With brackets placed differently, `(hasKey OR isAdmin) AND isLoggedIn` is **False**. Because the two readings give
different answers, always use brackets when a condition mixes `AND` and `OR`. Examiners and other programmers can
then see exactly what you intended.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--06-order-of-evaluation.webp" width="900" height="688" alt="With hasKey True, isAdmin False and isLoggedIn False, two evaluation trees are compared. hasKey OR (isAdmin AND isLoggedIn), the default reading, evaluates the AND to False and the OR to True. (hasKey OR isAdmin) AND isLoggedIn evaluates the OR to True and the AND to False." loading="lazy">
  <figcaption>hasKey OR isAdmin AND isLoggedIn means hasKey OR (isAdmin AND isLoggedIn); brackets remove the doubt.</figcaption>
</figure>

## Worked example: evaluating a condition for several inputs

A cinema lets a customer into a film rated 15 if they are at least 15 years old, **or** they are with an adult and
at least 12. The condition is:

```
IF age ≥ 15 OR (withAdult AND age ≥ 12) THEN
  OUTPUT "Allowed"
ELSE
  OUTPUT "Not allowed"
ENDIF
```

(The rule is invented for the example.)

| age | withAdult | `age ≥ 15` | `withAdult AND age ≥ 12` | Whole condition | Output |
|---|---|---|---|---|---|
| 16 | False | True | False | True | Allowed |
| 13 | True | False | True | True | Allowed |
| 13 | False | False | False | False | Not allowed |
| 10 | True | False | False | False | Not allowed |

Evaluating each part in its own column, then combining, is the most reliable way to answer "state the output for
these inputs" questions. It also shows the examiner your reasoning if one value goes wrong.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-boolean-operations--07-cinema-condition-table.webp" width="900" height="671" alt="The condition age ≥ 15 OR (withAdult AND age ≥ 12) evaluated for four inputs. Age 16 without an adult and age 13 with an adult are Allowed; age 13 without an adult and age 10 with an adult are Not allowed, because neither part is True." loading="lazy">
  <figcaption>Give each part of the condition its own column, then combine them.</figcaption>
</figure>

## Worked example: correcting a broken condition

A student writes:

```
IF answer = "Y" OR "y" THEN
```

intending to accept either capital or lower-case Y. This is wrong: the right-hand side of `OR` is just `"y"`,
not a comparison. Depending on the language it is either an error or always treated as True. The correct version
repeats the comparison:

```
IF answer = "Y" OR answer = "y" THEN
```

## Common mistakes

- **Incomplete comparisons** after `AND` or `OR`, as in the example above, or `age > 12 AND < 18`.
- **AND where OR is needed** for an "out of range" test, producing a condition that is never True.
- **Following the English word "and"** when the rule actually means "either".
- **Mixing AND and OR without brackets**, leaving the order of evaluation unclear.
- **Writing `won = NOT True`** when `NOT won` is all that is needed.
- **Thinking OR means "one but not both".** In programming, `OR` is True when both sides are True.

## Exam technique

- **Write a condition** questions: identify each separate requirement, write each as a full comparison, then decide
  whether they all must hold (`AND`) or any one is enough (`OR`).
- **State the output** questions: build a mini table with a column for each part of the condition.
- **Explain** a logic error: say which input exposes the error, what the program does, and what it should do.
- For loops, check what happens on the pass when each part of the condition changes, since the loop stops when the
  whole condition changes.

## More on this topic

For condensed recall and a self-test, use the [Boolean operations revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations-revision-notes/), and practise with the
[Boolean operations practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-boolean-operations-practice/).
