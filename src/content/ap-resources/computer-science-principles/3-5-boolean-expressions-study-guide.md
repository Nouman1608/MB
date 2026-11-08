---
resourceId: "mb-ap-csp-3.5-study-guide"
title: "Boolean Expressions: Study Guide (Computer Science Principles 3.5)"
description: "How relational and logical operators build and evaluate Boolean expressions, with truth tables, boundary values, range tests and De Morgan equivalences. Two worked examples and misconceptions."
course: "computer-science-principles"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "Variables and assignment (Topic 3.1)"
  - "Mathematical expressions (Topic 3.3)"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Evaluate expressions with =, ≠, >, <, ≥ and ≤"
  - "Evaluate and write expressions with NOT, AND and OR using truth tables"
  - "Translate a requirement such as \"between 13 and 19\" into a correct Boolean expression"
  - "Recognise equivalent Boolean expressions, including De Morgan's laws"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.5-revision-notes", "mb-ap-csp-3.5-practice", "mb-ap-csp-3.5-checklist"]
next: "mb-ap-csp-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A Boolean value is true or false; relational operators compare values and produce Booleans."
  - "NOT flips a value, AND needs both true, OR needs at least one true (inclusive)."
  - "A range such as 13 to 19 inclusive is age ≥ 13 AND age ≤ 19; OR would accept every age."
  - "NOT(p AND q) is equivalent to (NOT p) OR (NOT q); NOT(p OR q) is equivalent to (NOT p) AND (NOT q)."
  - "Use brackets and evaluate the smallest comparisons first."
faqs:
  - question: "Is OR true when both sides are true?"
    answer: "Yes. OR is inclusive: p OR q is true when at least one of p and q is true, including when both are."
  - question: "How do I write \"between 13 and 19\"?"
    answer: "Use AND with two comparisons: age ≥ 13 AND age ≤ 19. Use > and < only if the end values should be excluded."
  - question: "What is the difference between = and ← in the exam notation?"
    answer: "The arrow ← assigns a value to a variable; the equals sign = compares two values and evaluates to true or false."
  - question: "Are NOT(a AND b) and NOT a AND NOT b the same?"
    answer: "No. NOT(a AND b) is equivalent to (NOT a) OR (NOT b). Negating changes AND to OR."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Every decision a program makes comes down to a question with a yes-or-no answer: is the password correct, is the score high enough, has the timer reached zero. In programming the answer is a **Boolean value**, either `true` or `false`. This topic covers how to build and evaluate Boolean expressions with the relational operators (`=`, `≠`, `>`, `<`, `≥`, `≤`) and the logical operators (`NOT`, `AND`, `OR`). Conditionals (Topic 3.6) and loops (Topic 3.8) are driven by these expressions, so accuracy here pays off for the rest of the unit.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Boolean values and relational operators

A **Boolean value** is either `true` or `false`; there is nothing in between. A **relational operator** compares two values and produces a Boolean:

| Operator | Meaning | Example | Value |
|---|---|---|---|
| `a = b` | equal | `4 = 4` | true |
| `a ≠ b` | not equal | `4 ≠ 4` | false |
| `a > b` | greater than | `7 > 3` | true |
| `a < b` | less than | `7 < 3` | false |
| `a ≥ b` | greater than or equal | `5 ≥ 5` | true |
| `a ≤ b` | less than or equal | `6 ≤ 5` | false |

Two cautions. First, `=` is a *test*, not an assignment (Topic 3.1). Second, a comparison is evaluated *before* it is used: in `x ← (5 > 3)`, the variable `x` receives the Boolean `true`.

## Logical operators

Logical operators combine Boolean values. Each operand is a Boolean value or a Boolean expression.

| p | q | `NOT p` | `p AND q` | `p OR q` |
|---|---|---|---|---|
| true | true | false | true | true |
| true | false | false | false | true |
| false | true | true | false | true |
| false | false | true | false | false |

Read the table as follows.

- `NOT p` flips the value.
- `p AND q` is true only when **both** are true.
- `p OR q` is true when **at least one** is true, including when both are. It is *inclusive*.

**Precedence.** Many languages evaluate `NOT` first, then `AND`, then `OR`. Do not rely on memory for this: use **brackets** in your own code so the meaning is obvious, and follow the brackets in exam questions.

<figure>
<svg viewBox="0 0 640 140" role="img" aria-labelledby="f35-t f35-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f35-t">Number line for the expression age at least 13 AND age at most 19</title>
<desc id="f35-d">A number line from 10 to 22. A thick line with filled circles at both ends runs from 13 to 19. Ages in that range make the expression true; ages to the left of 13 or to the right of 19 make it false.</desc>
<rect x="0" y="0" width="640" height="140" fill="#ffffff"/>
<defs><marker id="f35-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="30" y1="70" x2="610" y2="70" stroke="#1d2b44" stroke-width="2"/><line x1="30.0" y1="64" x2="30.0" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="30.0" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">10</text><line x1="78.3" y1="64" x2="78.3" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="78.3" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">11</text><line x1="126.7" y1="64" x2="126.7" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="126.7" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">12</text><line x1="175.0" y1="64" x2="175.0" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="175.0" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">13</text><line x1="223.3" y1="64" x2="223.3" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="223.3" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">14</text><line x1="271.7" y1="64" x2="271.7" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="271.7" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">15</text><line x1="320.0" y1="64" x2="320.0" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="320.0" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">16</text><line x1="368.3" y1="64" x2="368.3" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="368.3" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">17</text><line x1="416.7" y1="64" x2="416.7" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="416.7" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">18</text><line x1="465.0" y1="64" x2="465.0" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="465.0" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">19</text><line x1="513.3" y1="64" x2="513.3" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="513.3" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">20</text><line x1="561.7" y1="64" x2="561.7" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="561.7" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">21</text><line x1="610.0" y1="64" x2="610.0" y2="76" stroke="#1d2b44" stroke-width="2"/><text x="610.0" y="95" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">22</text><line x1="175.0" y1="70" x2="465.0" y2="70" stroke="#1d2b44" stroke-width="8"/><circle cx="175.0" cy="70" r="8" fill="#1d2b44"/><circle cx="465.0" cy="70" r="8" fill="#1d2b44"/><text x="320.0" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d2b44">age ≥ 13 AND age ≤ 19 is true</text><text x="100" y="40" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">false</text><text x="560" y="40" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">false</text><text x="320" y="125" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">Filled circles: the end values 13 and 19 are included</text>
</svg>
<figcaption>Figure 1. AND of two comparisons selects the overlap. Ages 13 to 19 (inclusive) are true; everything outside is false.</figcaption>
</figure>

## Worked example 1: evaluating compound expressions

Let `a` be 7 and `b` be 12. Evaluate (i) `(a < b) AND NOT(b MOD 5 = 0)` and (ii) `(a > 10) OR (b = 12 AND a ≠ 7)`.

```text
a ← 7
b ← 12
DISPLAY((a < b) AND NOT(b MOD 5 = 0))
DISPLAY((a > 10) OR (b = 12 AND a ≠ 7))
```

Output: `true false`

**(i) Step by step.**

| Part | Working | Value |
|---|---|---|
| `a < b` | 7 < 12 | true |
| `b MOD 5` | 12 MOD 5 = 2 | 2 |
| `b MOD 5 = 0` | 2 = 0 | false |
| `NOT(...)` | NOT false | true |
| whole expression | true AND true | **true** |

**(ii) Step by step.**

| Part | Working | Value |
|---|---|---|
| `a > 10` | 7 > 10 | false |
| `b = 12` | 12 = 12 | true |
| `a ≠ 7` | 7 ≠ 7 | false |
| `b = 12 AND a ≠ 7` | true AND false | false |
| whole expression | false OR false | **false** |

**Check.** Evaluate the smallest parts first and work outwards. A single slip, such as reading `a ≠ 7` as true, flips the answer, so always write the value of each small comparison.

## Worked example 2: from English to Boolean expressions

**Task A: "age is between 13 and 19, inclusive".** The expression is `age ≥ 13 AND age ≤ 19`. Both conditions must hold, so `AND` is right. A common wrong version uses `OR`: `age ≥ 13 OR age ≤ 19` is true for *every* age (a 5-year-old satisfies the second part, a 40-year-old the first), so it filters nothing. Test the correct version on four ages:

```text
DISPLAY(5 ≥ 13 AND 5 ≤ 19)
DISPLAY(13 ≥ 13 AND 13 ≤ 19)
DISPLAY(19 ≥ 13 AND 19 ≤ 19)
DISPLAY(40 ≥ 13 AND 40 ≤ 19)
```

Output: `false true true false`

The end values 13 and 19 are **true**, which confirms that `≥` and `≤` include the ends (Figure 1). Using `>` and `<` would wrongly exclude them.

**Task B: "n is divisible by 3 or by 5, but not by both".** Write the two basic facts, then combine: `(n MOD 3 = 0 OR n MOD 5 = 0) AND NOT(n MOD 3 = 0 AND n MOD 5 = 0)`. Test with 3, 5, 15 and 7:

| n | divisible by 3 | divisible by 5 | expression |
|---|---|---|---|
| 3 | true | false | true |
| 5 | false | true | true |
| 15 | true | true | false |
| 7 | false | false | false |

Fifteen is the interesting case: it satisfies "3 or 5" but also "both", so the `NOT(... AND ...)` part removes it.

**Task C: equivalent expressions (De Morgan's laws).** Some Boolean expressions can be written in a different but equivalent form. The pair that matters most is

`NOT(p AND q)` is equivalent to `(NOT p) OR (NOT q)`, and `NOT(p OR q)` is equivalent to `(NOT p) AND (NOT q)`.

Prove one by truth table:

| p | q | `p AND q` | `NOT(p AND q)` | `NOT p` | `NOT q` | `(NOT p) OR (NOT q)` |
|---|---|---|---|---|---|---|
| true | true | true | false | false | false | false |
| true | false | false | true | false | true | true |
| false | true | false | true | true | false | true |
| false | false | false | true | true | true | true |

The two right-hand columns match in all four rows, so the expressions are equivalent. In words: "it is not true that both are open" means "at least one is closed".

## Common misconceptions

- **"OR means exactly one."** `p OR q` is also true when both are true.
- **"`age ≥ 13 OR age ≤ 19` means between."** It is true for every age. A range needs `AND`.
- **"`≥` and `>` are interchangeable."** `5 ≥ 5` is true; `5 > 5` is false. Boundary values are where marks are lost.
- **"`x = 5 OR 6` means x is 5 or 6."** Each side of `OR` must be a Boolean expression: write `x = 5 OR x = 6`.
- **"`NOT(a AND b)` is `NOT a AND NOT b`."** The negation changes `AND` to `OR`: `NOT(a AND b)` equals `(NOT a) OR (NOT b)`.
- **"`=` assigns."** In a Boolean expression `=` compares. Assignment is `←`.


## Where this leads

Boolean expressions are the conditions inside IF statements (Topic 3.6, then nested in Topic 3.7), the stopping tests of REPEAT UNTIL loops (Topic 3.8), and the building blocks of equivalent algorithms in Topic 3.9.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-checklist/). The next topic is [Topic 3.6, Conditionals](/advanced-course-resources/computer-science-principles/3-6-conditionals-study-guide/).
