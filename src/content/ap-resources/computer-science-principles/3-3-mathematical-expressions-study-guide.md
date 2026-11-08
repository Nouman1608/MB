---
resourceId: "mb-ap-csp-3.3-study-guide"
title: "Mathematical Expressions: Study Guide (Computer Science Principles 3.3)"
description: "How arithmetic expressions are evaluated, how order of operations treats MOD, and how to use MOD for parity, divisibility, digits and wrap-around. Two worked examples and misconceptions."
course: "computer-science-principles"
unit: 3
topics: ["3.3"]
resourceType: "study-guide"
prerequisites:
  - "Order of operations in arithmetic"
  - "Variables and assignment (Topic 3.1)"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Evaluate expressions that use +, -, *, / and MOD in the correct order"
  - "Compute a remainder and explain what MOD means"
  - "Use MOD to test for even, odd and divisible numbers and to wrap values"
  - "Write an expression for a real task and check it with a worked example"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.3-revision-notes", "mb-ap-csp-3.3-practice", "mb-ap-csp-3.3-checklist"]
next: "mb-ap-csp-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "An expression is evaluated to a single value; operators follow the usual order of operations."
  - "MOD has the same precedence as * and /, and equal-precedence operators go left to right."
  - "a MOD b is the remainder after dividing a by b; the result is always between 0 and b − 1."
  - "n MOD 2 = 0 tests for even; n MOD d = 0 tests for divisibility; n MOD 10 gives the last digit."
  - "/ is ordinary division, so 17 / 5 is 3.4."
faqs:
  - question: "What does 17 MOD 5 equal?"
    answer: "It equals 2. Five goes into 17 three whole times (15), and the remainder is 2."
  - question: "Does MOD come before or after multiplication?"
    answer: "MOD has the same precedence as multiplication and division, so they are evaluated together from left to right."
  - question: "How can I test whether a number is even?"
    answer: "Check whether n MOD 2 = 0. An even number leaves no remainder when divided by 2."
  - question: "Is 17 / 5 equal to 3 in the exam pseudocode?"
    answer: "No. It evaluates to 3.4. Use MOD when you need a whole-number split."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Programs compute. A thermostat works out how far the temperature is from the target, a game adds points, a timer converts seconds into minutes and seconds. All of that uses **mathematical expressions**. This topic covers the arithmetic operators in the exam notation, the order in which an expression is evaluated, and the operator that surprises most students, **MOD**, which gives the remainder after division. MOD turns out to be one of the most useful ideas in the whole course: it detects even and odd numbers, tests divisibility, extracts digits and makes values "wrap around" like a clock.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Expressions and how they are evaluated

An **expression** can be a single value, a variable, an operator applied to values, or a procedure call that returns a value. Every expression is **evaluated** to produce a **single value**. For example `7 + 2 * 3` evaluates to 13, and `count + 1` evaluates to whatever `count` holds, plus one.

The arithmetic operators available in the exam notation are:

| Operator | Meaning | Example | Value |
|---|---|---|---|
| `a + b` | addition | `9 + 4` | 13 |
| `a - b` | subtraction | `9 - 4` | 5 |
| `a * b` | multiplication | `9 * 4` | 36 |
| `a / b` | division | `17 / 5` | 3.4 |
| `a MOD b` | remainder when a is divided by b | `17 MOD 5` | 2 |

Notice that `/` is ordinary division, so `17 / 5` is 3.4 and not 3. For `a MOD b` the course assumes **a is an integer greater than or equal to 0 and b is an integer greater than 0**.

**Order of operations.** The usual rules from mathematics apply: brackets first, then `*`, `/` and `MOD`, then `+` and `-`. The important detail is that **MOD has the same precedence as `*` and `/`**. When operators of the same precedence meet, evaluate them from left to right.

<figure>
<svg viewBox="0 0 662 114" role="img" aria-labelledby="f33-t f33-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f33-t">Evaluating 2 + 3 * 4 MOD 5 - 1 step by step</title>
<desc id="f33-d">Five boxes from left to right showing the order of evaluation. First, 3 times 4 gives 12. Second, 12 MOD 5 gives 2 because times and MOD have equal precedence and go left to right. Third, 2 plus 2 gives 4. Fourth, 4 minus 1 gives 3. The final value is 3.</desc>
<rect x="0" y="0" width="662" height="114" fill="#ffffff"/>
<defs><marker id="f33-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="85.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">3 * 4</text><text x="85.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">= 12</text><line x1="150" y1="57.0" x2="181" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f33-a)"/><text x="167.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="184" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="249.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">12 MOD 5</text><text x="249.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">= 2</text><line x1="314" y1="57.0" x2="345" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f33-a)"/><text x="331.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="348" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="413.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">2 + 2</text><text x="413.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">= 4</text><line x1="478" y1="57.0" x2="509" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f33-a)"/><text x="495.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="512" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="577.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">4 - 1</text><text x="577.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">= 3</text>
</svg>
<figcaption>Figure 1. Same-precedence operators run left to right: <code>3 * 4</code> first, then <code>MOD 5</code>, then the addition and subtraction.</figcaption>
</figure>

## MOD from first principles

Divide 17 by 5. Five goes into 17 **three whole times** (15), leaving **2** over. That leftover is the remainder, and `17 MOD 5` is 2. In general, `a MOD b` is the amount left when you take as many whole copies of b out of a as you can.

Some useful facts follow directly:

- If `a` is smaller than `b`, nothing whole fits, so `a MOD b = a`. For example `3 MOD 7 = 3`.
- If `b` divides `a` exactly, the remainder is 0. For example `12 MOD 4 = 0`.
- `a MOD b` is always between 0 and `b − 1`, so it can never reach `b`. That is the "wrap around" property.

| Task | Expression | Why it works |
|---|---|---|
| Is `n` even? | `n MOD 2 = 0` | Even numbers leave remainder 0 when divided by 2 |
| Is `n` odd? | `n MOD 2 = 1` | Odd numbers leave remainder 1 |
| Is `n` divisible by `d`? | `n MOD d = 0` | No remainder means d divides n exactly |
| Last digit of `n` | `n MOD 10` | The remainder on division by 10 is the units digit |
| Hour after adding `k` hours (24-hour clock) | `(h + k) MOD 24` | The result wraps back to 0 after 23 |

## Worked example 1: evaluating an expression with MOD

Find the value of `2 + 3 * 4 MOD 5 - 1`.

```text
result ← 2 + 3 * 4 MOD 5 - 1
DISPLAY(result)
```

Output: `3`

**Step 1. Find the highest-precedence operators.** `*` and `MOD` have equal precedence and sit next to each other, so work left to right.

**Step 2.** `3 * 4 = 12`. The expression is now `2 + 12 MOD 5 - 1`.

**Step 3.** `12 MOD 5`: five goes into 12 twice (10), leaving 2. The expression is now `2 + 2 - 1`.

**Step 4.** `+` and `-` also share precedence: `2 + 2 = 4`, then `4 - 1 = 3`.

**Answer: 3.**

**Check.** A common wrong order is to do `4 MOD 5` first (giving 4), then `3 * 4 = 12`, so `2 + 12 - 1 = 13`. The result changes completely, which shows how much the order matters. Use brackets in your own code when you want to be sure: `2 + ((3 * 4) MOD 5) - 1`.

A second expression, mixing division: `20 - 12 / 4 * 2 + 7 MOD 4`. Here `12 / 4 = 3`, then `3 * 2 = 6`, `7 MOD 4 = 3`, and finally `20 - 6 + 3 = 17`.

```text
DISPLAY(20 - 12 / 4 * 2 + 7 MOD 4)
```

Output: `17`

## Worked example 2: splitting minutes and wrapping the clock

A fitness app records a run of 135 minutes. It must display the time as hours and minutes. A second feature takes a start hour on a 24-hour clock and an elapsed number of hours, and displays the finishing hour.

**Part A: hours and minutes.** The exam notation has no whole-number division, so we use MOD to find the minutes left over and then divide the rest.

```text
total ← 135
minutes ← total MOD 60
hours ← (total - minutes) / 60
DISPLAY(hours)
DISPLAY(minutes)
```

Output: `2 15`

| Line | Variable | Calculation | Value |
|---|---|---|---|
| 2 | minutes | 135 MOD 60: 60 fits twice (120), remainder 15 | 15 |
| 3 | hours | (135 − 15) / 60 = 120 / 60 | 2 |

So 135 minutes is 2 hours 15 minutes. **Check:** 2 × 60 + 15 = 135 ✓.

Why subtract the remainder before dividing? Because `135 / 60` is 2.25, not 2. Removing the leftover minutes first leaves an exact multiple of 60.

**Part B: the clock wrap.** A walk starts at 21:00 and lasts 8 hours.

```text
start ← 21
elapsed ← 8
finish ← (start + elapsed) MOD 24
DISPLAY(finish)
```

Output: `5`

`21 + 8 = 29`. Twenty-four fits once (24), leaving 5, so the walk finishes at 05:00 the next day. Without MOD the program would claim the time was "29:00". MOD keeps the result between 0 and 23.

**Part C: a digit.** The last digit of 4,826 is `4826 MOD 10`, which is 6. To drop the last digit, subtract it and divide by 10: `(4826 - 6) / 10 = 482`.

```text
n ← 4826
last ← n MOD 10
rest ← (n - last) / 10
DISPLAY(last)
DISPLAY(rest)
```

Output: `6 482`

## Using variables and procedure calls in expressions

Anywhere a value can appear, a variable or procedure call can appear instead. If `price` holds 12 and `qty` holds 3, then `price * qty + 4` evaluates to 40. When a procedure that returns a value is called inside an expression (Topic 3.12), the call is replaced by its returned value before the rest of the expression is evaluated.

## Common misconceptions

- **"MOD means divide."** `a MOD b` is the *remainder*, not the quotient. `17 MOD 5` is 2, not 3.
- **"MOD is evaluated after `+`."** It shares precedence with `*` and `/`, so `10 + 7 MOD 4` is 10 + 3 = 13, not 17 MOD 4 = 1.
- **"`/` rounds down."** In the exam notation `17 / 5` is 3.4. Use the MOD pattern when you need the whole part.
- **"Equal precedence means any order."** Same-precedence operators go **left to right**, which matters for division: `12 / 4 * 3` is 9, not 1.
- **"`a MOD b` can equal `b`."** It cannot. The largest possible value is `b − 1`.
- **"`n MOD 2 = 1` is true for negative odd numbers too."** The course only defines MOD for `a ≥ 0` and `b > 0`; do not use it outside that range.


## Where this leads

MOD patterns appear again in conditionals (Topic 3.6, even or odd branches), in the "divisible by" algorithms of Topic 3.9 and in loops that process every digit or every n-th item (Topic 3.8).

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-checklist/). The next topic is [Topic 3.4, Strings](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/).
