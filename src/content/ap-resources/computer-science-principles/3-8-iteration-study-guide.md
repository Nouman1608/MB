---
resourceId: "mb-ap-csp-3.8-study-guide"
title: "Iteration: Study Guide (Computer Science Principles 3.8)"
description: "How REPEAT n TIMES and REPEAT UNTIL work, how to trace loops with a table, how counters and accumulators behave, and why loops end or fail to. Two worked examples including infinite loops."
course: "computer-science-principles"
unit: 3
topics: ["3.8"]
resourceType: "study-guide"
prerequisites:
  - "Conditionals (Topic 3.6)"
  - "Boolean expressions (Topic 3.5)"
  - "Variables and assignment (Topic 3.1)"
prerequisiteResources: ["mb-ap-csp-3.6-study-guide"]
learningObjectives:
  - "Explain iteration as repetition zero or more times until a stopping condition"
  - "Trace REPEAT n TIMES and REPEAT UNTIL loops with a table"
  - "Identify when a REPEAT UNTIL loop runs zero times or forever"
  - "Write a loop with a counter or an accumulator and check it"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.8-revision-notes", "mb-ap-csp-3.8-practice", "mb-ap-csp-3.8-checklist"]
next: "mb-ap-csp-3.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Iteration repeats a block zero or more times; every algorithm can be built from sequencing, selection and iteration."
  - "REPEAT n TIMES runs the block exactly n times."
  - "REPEAT UNTIL(condition) checks before each pass and stops when the condition becomes true; it may run zero times."
  - "A loop whose condition can never become true is an infinite loop."
  - "Trace loops one pass at a time with a table of variable values."
faqs:
  - question: "What is the difference between REPEAT n TIMES and REPEAT UNTIL?"
    answer: "REPEAT n TIMES runs a block a fixed number of times. REPEAT UNTIL keeps running the block until a condition becomes true, so the number of repetitions depends on the data."
  - question: "Can a REPEAT UNTIL loop run zero times?"
    answer: "Yes. The condition is checked before each pass, so if it is already true at the start the block never runs."
  - question: "What is an infinite loop?"
    answer: "A loop whose stopping condition never becomes true, so the program never finishes. For example, stepping a counter past a value it was meant to equal."
  - question: "Does REPEAT UNTIL stop in the middle of the block?"
    answer: "No. The condition is checked only before each pass. Once the block starts it runs to the end."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Computers are good at one thing humans find tiring: doing the same job again and again without getting bored. **Iteration** is the repetition of a portion of an algorithm. Instead of writing the same statements ten times, you write them once inside a loop and tell the computer how long to keep going: either a fixed number of times or *until* something becomes true. This topic covers the two loop forms in the exam notation, `REPEAT n TIMES` and `REPEAT UNTIL`, how to trace loops, and the classic bug of the loop that never ends.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Three building blocks, third part

Every algorithm can be built from **sequencing** (steps in order), **selection** (choosing, Topics 3.6 and 3.7) and **iteration** (repeating). Iteration statements change the sequential flow of control by repeating a set of statements **zero or more times**, until a stopping condition is met. An algorithm that uses iteration can also be described without any programming language, for example "keep stirring until the sauce thickens".

## REPEAT n TIMES

```text
REPEAT n TIMES
{
  <block of statements>
}
```

The block runs exactly `n` times. The count `n` is worked out once, when the loop starts. This form is ideal when you know in advance how many repetitions you need, such as "add the number ten times". If `n` is 0 the block does not run at all.

## REPEAT UNTIL(condition)

```text
REPEAT UNTIL(condition)
{
  <block of statements>
}
```

The block repeats **until the Boolean condition evaluates to true**. Three facts matter for the exam:

1. The condition is checked **before** each pass. If it is already `true` when the loop is reached, the block runs **zero times**.
2. The loop keeps going while the condition is **false**. (Do not confuse it with a "while" loop in some languages, where the loop runs while the condition is true.)
3. If the condition can never become true, the result is an **infinite loop**: the program never finishes.

<figure>
<svg viewBox="0 0 640 200" role="img" aria-labelledby="f38-t f38-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f38-t">Flow of control in REPEAT UNTIL</title>
<desc id="f38-d">A flowchart. A diamond holds the condition and is checked first. If the condition is false, the flow goes right to a box that runs the block and changes variables, then loops back to check the condition again. If the condition is true, the flow leaves the loop through a dashed box on the right. The check always happens before the block runs.</desc>
<rect x="0" y="0" width="640" height="200" fill="#ffffff"/>
<defs><marker id="f38-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<polygon points="110,40 190,85 110,130 30,85" fill="#fff4d6" stroke="#1d2b44" stroke-width="2"/><text x="110" y="82" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">condition</text><text x="110" y="99" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">true?</text><line x1="190" y1="85" x2="285" y2="85" stroke="#1d2b44" stroke-width="2" marker-end="url(#f38-a)"/><text x="237" y="75" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44">false</text><rect x="290" y="55" width="170" height="60" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="375" y="73" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">run the block;</text><text x="375" y="90" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">variables change</text><path d="M375 115 L375 165 L110 165 L110 135" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#f38-a)"/><text x="245" y="185" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">then check again</text><line x1="110" y1="40" x2="110" y2="20" stroke="#1d2b44" stroke-width="2"/><line x1="110" y1="20" x2="520" y2="20" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4"/><line x1="520" y1="20" x2="520" y2="55" stroke="#1d2b44" stroke-width="2" marker-end="url(#f38-a)"/><text x="315" y="14" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44">true</text><rect x="450" y="58" width="140" height="0" fill="none"/><rect x="470" y="60" width="150" height="50" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/><text x="545" y="90" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">leave the loop</text>
</svg>
<figcaption>Figure 1. The test comes first. While it is false the block runs and the test is repeated; the moment it is true the loop is left.</figcaption>
</figure>

Real loops almost always change a variable inside the block so that the condition eventually becomes true. A **counter** adds one on each pass; an **accumulator** builds up a total. Both patterns come from Topic 3.1: the variable on the left of `←` also appears on the right.

## Worked example 1: a counted loop

Find what this segment displays.

```text
total ← 0
n ← 1
REPEAT 4 TIMES
{
  total ← total + n
  n ← n + 2
}
DISPLAY(total)
```

Output: `16`

**Step 1. Trace table.** One row per pass; the values are those *after* the pass.

| Pass | `total` before | `n` before | `total` after | `n` after |
|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 3 |
| 2 | 1 | 3 | 4 | 5 |
| 3 | 4 | 5 | 9 | 7 |
| 4 | 9 | 7 | 16 | 9 |

**Step 2.** After four passes `total` is 16, so `16` is displayed.

**Check.** The block adds the first four odd numbers: 1 + 3 + 5 + 7 = 16 ✓. (The sum of the first *k* odd numbers is always k², a nice sanity check: 4² = 16.)

**A loop with a decision inside.** Combine iteration with selection to count items. This segment counts how many of the numbers 1 to 10 are multiples of 3:

```text
count ← 0
i ← 1
REPEAT 10 TIMES
{
  IF(i MOD 3 = 0)
  {
    count ← count + 1
  }
  i ← i + 1
}
DISPLAY(count)
```

Output: `3`

The condition is true for i = 3, 6 and 9, so `count` ends at 3 ✓. Note that `i ← i + 1` is **outside** the IF so that it happens on every pass.

## Worked example 2: REPEAT UNTIL, zero passes and infinite loops

A savings account starts with 100 and gains 20 at the end of each year. How many years until the balance is at least 150?

```text
balance ← 100
years ← 0
REPEAT UNTIL(balance ≥ 150)
{
  balance ← balance + 20
  years ← years + 1
}
DISPLAY(years)
DISPLAY(balance)
```

Output: `3 160`

| Check before pass | `balance` | `balance ≥ 150` | Action |
|---|---|---|---|
| 1 | 100 | false | balance 120, years 1 |
| 2 | 120 | false | balance 140, years 2 |
| 3 | 140 | false | balance 160, years 3 |
| 4 | 160 | true | leave the loop |

The condition is checked four times but the block runs only three. Output: `3 160`.

**Zero passes.** If the balance already starts at 200, the first check is true and the block never runs: `years` stays 0.

**Infinite loop.** Consider this loop with `n` equal to 10:

```text
REPEAT UNTIL(n = 0)
{
  n ← n - 3
}
```

`n` goes 10, 7, 4, 1, −2, −5 and so on. It steps *over* 0 without ever equalling it, so the condition is never true and the loop never ends. Starting with `n` equal to 9 would stop after three passes. A safer condition is `n ≤ 0`, which is true for 0 and for everything below it.

**Check.** Before running any REPEAT UNTIL, ask two questions: "Does the block change something the condition depends on?" and "Can the condition become true no matter what the start value is?"

## Iteration with a robot

The exam reference sheet includes a grid robot with the procedures `MOVE_FORWARD()`, `ROTATE_LEFT()`, `ROTATE_RIGHT()` and the test `CAN_MOVE(direction)`. Loops let a short program handle any size of grid. This segment walks a robot along an empty corridor until a wall is in front of it:

```text
REPEAT UNTIL(NOT CAN_MOVE(forward))
{
  MOVE_FORWARD()
}
```

If the robot starts in the leftmost square of a corridor six squares long, facing right, the test is true (it can move) five times, so the block runs five times and the robot ends in the sixth square. Because the condition is checked **before** each move, the robot never tries to move into the wall, and the same code works for a corridor of any length.

## Common misconceptions

- **"REPEAT UNTIL runs while the condition is true."** It runs while the condition is **false** and stops when it becomes true.
- **"The block always runs at least once."** Not for REPEAT UNTIL: if the condition is true at the start, it runs zero times.
- **"A loop condition is checked continuously."** It is checked once before each pass, not in the middle of the block.
- **"`n = 0` is a safe stopping condition."** If `n` skips over 0 the loop never ends; use `n ≤ 0` when stepping down.
- **"The loop variable updates itself."** Unless the block changes it, it stays the same, and an unchanged condition means an infinite loop or a loop that never starts.
- **"Placing the update inside an IF is the same as placing it outside."** Inside, it happens only when the condition is true, so the loop may never advance.


## Where this leads

Iteration is combined with selection and lists in Topic 3.10, where FOR EACH and loops visit every element of a list, and it returns in Topic 3.17 when we compare how many steps different algorithms take.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-8-iteration-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-8-iteration-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-8-iteration-checklist/). The next topic is [Topic 3.9, Developing Algorithms](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/).
