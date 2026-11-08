---
resourceId: "mb-ap-csp-3.7-study-guide"
title: "Nested Conditionals: Study Guide (Computer Science Principles 3.7)"
description: "How nested conditionals ask a second question after a first, how to trace each path, why order matters in chains, and how to flatten nesting into Boolean expressions. Two worked examples including the leap year."
course: "computer-science-principles"
unit: 3
topics: ["3.7"]
resourceType: "study-guide"
prerequisites:
  - "Conditionals (Topic 3.6)"
  - "Boolean expressions (Topic 3.5)"
prerequisiteResources: ["mb-ap-csp-3.6-study-guide"]
learningObjectives:
  - "Describe how a nested conditional is evaluated"
  - "Trace nested conditionals for given inputs, including chains of ranges"
  - "Write a nested conditional for a description and choose test values for each path"
  - "Rewrite a nested conditional as a Boolean expression where possible"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.7-revision-notes", "mb-ap-csp-3.7-practice", "mb-ap-csp-3.7-checklist"]
next: "mb-ap-csp-3.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A nested conditional puts one conditional inside the block of another; the inner one runs only when the outer condition sends control there."
  - "An ELSE belongs to the IF whose block closes just before it; read the braces."
  - "In a chain of ranges the order of tests decides the result."
  - "Two conditions can create up to three paths: test each one."
  - "Nesting with no ELSE can be flattened to AND; with ELSE blocks it often cannot."
faqs:
  - question: "What is a nested conditional?"
    answer: "A conditional statement placed inside a block of another conditional statement, so a second question is asked only after the first has been answered."
  - question: "Does the inner IF always run?"
    answer: "No. It is evaluated only when the outer condition is true (or when it sits inside the outer ELSE and the outer condition is false)."
  - question: "Why does the order of tests matter in a chain?"
    answer: "Each test is only reached if earlier tests failed. If the conditions overlap, the first test that is true decides the outcome."
  - question: "Can I replace a nested IF with AND?"
    answer: "Yes, when there is only one outcome and no ELSE blocks: IF(a) { IF(b) { X } } is the same as IF(a AND b) { X }."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

Some decisions depend on an earlier decision. A website asks "are you logged in?" and only if the answer is yes does it ask "is your account an administrator?". A **nested conditional** puts one conditional statement inside the block of another. The inner conditional is only reached when the outer condition sends the flow of control into that block. Nesting is how a program asks a second question *after* learning the answer to a first one.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## What nesting means

A conditional statement can appear anywhere a statement can appear, including inside the block of another conditional. That gives the general shape below.

```text
IF(outerCondition)
{
  IF(innerCondition)
  {
    <result 1>
  }
  ELSE
  {
    <result 2>
  }
}
ELSE
{
  <result 3>
}
```

<figure>
<svg viewBox="0 0 640 285" role="img" aria-labelledby="f37-t f37-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f37-t">Flow of control for a nested conditional</title>
<desc id="f37-d">A flowchart. Start leads to a diamond labelled outer. If outer is false, an arrow loops around the bottom to Result 3. If outer is true, an arrow leads to a second diamond labelled inner. If inner is true the flow goes to Result 1 and if inner is false it goes to Result 2. The inner question is asked only when the outer question is true.</desc>
<rect x="0" y="0" width="640" height="285" fill="#ffffff"/>
<defs><marker id="f37-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="15" y="110" width="80" height="40" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="55" y="135" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Start</text><line x1="95" y1="130" x2="130" y2="130" stroke="#1d2b44" stroke-width="2" marker-end="url(#f37-a)"/><polygon points="190,85 250,130 190,175 130,130" fill="#fff4d6" stroke="#1d2b44" stroke-width="2"/><text x="190" y="135" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">outer?</text><line x1="250" y1="130" x2="300" y2="130" stroke="#1d2b44" stroke-width="2" marker-end="url(#f37-a)"/><text x="275" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d2b44">true</text><polygon points="360,85 420,130 360,175 300,130" fill="#fff4d6" stroke="#1d2b44" stroke-width="2"/><text x="360" y="135" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">inner?</text><line x1="420" y1="130" x2="470" y2="65" stroke="#1d2b44" stroke-width="2" marker-end="url(#f37-a)"/><text x="463" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d2b44">true</text><line x1="420" y1="130" x2="470" y2="195" stroke="#1d2b44" stroke-width="2" marker-end="url(#f37-a)"/><text x="463" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d2b44">false</text><rect x="470" y="40" width="140" height="50" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="540" y="70" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">Result 1</text><rect x="470" y="170" width="140" height="50" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/><text x="540" y="200" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">Result 2</text><line x1="190" y1="175" x2="190" y2="208" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4" marker-end="url(#f37-a)"/><text x="205" y="196" text-anchor="start" font-size="11" font-weight="bold" fill="#1d2b44">false</text><rect x="120" y="210" width="140" height="50" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/><text x="190" y="240" text-anchor="middle" font-size="13" font-weight="normal" fill="#1d2b44">Result 3</text>
</svg>
<figcaption>Figure 1. The inner condition is evaluated only on the path where the outer condition is true. Three different outcomes are possible.</figcaption>
</figure>

The rules are the same ones you already know, applied twice.

- Evaluate the **outer** condition first.
- If it is true, the first block runs, and inside that block the **inner** conditional is evaluated in the usual way.
- If it is false, the outer ELSE block (if there is one) runs, and the inner conditional is never looked at.
- Braces show which IF each ELSE belongs to: an ELSE pairs with the IF whose block closes just before it.

In the shape above there are **three** possible outcomes from two conditions, and you must test each one.

## Nesting as a chain of ranges

A very common use is to put the *next* IF inside an ELSE. Each test is only reached when all the earlier tests failed, so the conditions can be simple:

```text
IF(score ≥ 80)
{
  grade ← "A"
}
ELSE
{
  IF(score ≥ 60)
  {
    grade ← "B"
  }
  ELSE
  {
    grade ← "C"
  }
}
```

Because the second test sits inside the ELSE of the first, it is only reached when `score < 80`, so there is no need to write `score ≥ 60 AND score < 80`. This also makes **order** matter: if the tests were reversed, a score of 90 would be caught by the `≥ 60` test first and receive a B.

## Worked example 1: tracing a grade chain

Trace the grade chain above for scores 85, 70, 60 and 59.

| score | `score ≥ 80` | `score ≥ 60` (only asked if the first was false) | grade |
|---|---|---|---|
| 85 | true | not asked | A |
| 70 | false | true | B |
| 60 | false | true (boundary) | B |
| 59 | false | false | C |

Walk through 70. The outer test `70 ≥ 80` is false, so control enters the outer ELSE. There the inner conditional asks `70 ≥ 60`, which is true, so `grade` becomes `"B"`. The ELSE of the inner conditional is skipped.

**Check.** The boundary score 60 gives B because `≥` includes 60, and 59 is the highest score that gives C. Each of the three outcomes appears at least once in the table.

**Order matters.** If the code asked `score ≥ 60` first, then 85 would receive B. To see why, trace it: the first test is true, so the block runs and the A test is never reached.

## Worked example 2: the leap year

The rule for a leap year in the calendar is a famous nested decision: a year is a leap year if it is divisible by 4, **except** that years divisible by 100 are not leap years, **unless** they are also divisible by 400. Write it as a nested conditional and then simplify.

**Step 1. Follow the questions in order.**

1. Divisible by 4? If **no**, not a leap year.
2. If yes: divisible by 100? If **no**, it is a leap year.
3. If yes: divisible by 400? If **yes**, leap; if **no**, not leap.

```text
IF(year MOD 4 = 0)
{
  IF(year MOD 100 = 0)
  {
    IF(year MOD 400 = 0)
    {
      leap ← true
    }
    ELSE
    {
      leap ← false
    }
  }
  ELSE
  {
    leap ← true
  }
}
ELSE
{
  leap ← false
}
DISPLAY(leap)
```

**Step 2. Test one value for each path.**

| year | MOD 4 = 0 | MOD 100 = 0 | MOD 400 = 0 | leap |
|---|---|---|---|---|
| 2023 | false | not asked | not asked | false |
| 2024 | true | false | not asked | true |
| 1900 | true | true | false | false |
| 2000 | true | true | true | true |

**Step 3. Flatten it.** The same behaviour can be written as a single Boolean expression:

`(year MOD 4 = 0 AND year MOD 100 ≠ 0) OR year MOD 400 = 0`

Both forms agree on every year from 1 to 3,000 (we checked by running both in a program). The nested version reads like the questions a person would ask; the Boolean version is shorter. Neither is "more correct", but being able to move between them is exactly the skill Topic 3.9 builds on.

**Check.** For 1900 the Boolean version gives `(true AND false) OR false`, which is `false OR false`, or `false` ✓. For 2000 it gives `(true AND false) OR true`, which is `true` ✓.

## When can nesting be flattened?

`IF(a) { IF(b) { X } }` with no ELSE anywhere does the same thing as `IF(a AND b) { X }`: X runs only when both are true. But as soon as the inner conditional has its own ELSE (result 2 in Figure 1) or there is an outer ELSE, the nesting separates *different* outcomes and cannot be replaced by a single condition without extra tests. Use the simplest structure that still produces every required outcome.

## A reliable way to trace a nested conditional

Nested code is easy to misread because the eye jumps between blocks. Use the same routine every time.

1. **Mark the braces.** Draw a line from each opening brace to its matching closing brace. This shows exactly which statements belong to which block, and which IF each ELSE belongs to.
2. **Start at the outside.** Evaluate the outermost condition and write `true` or `false` next to it.
3. **Cross out the block you are not entering.** If the outer condition is true, cross out its ELSE block; if false, cross out its first block. Everything crossed out, including any inner conditionals inside it, is ignored.
4. **Repeat inside the block you entered.** Evaluate the inner condition, again crossing out the unused block.
5. **Write down what ran.** Only then read off the variable values or the displayed text.

This method also helps when you *design* nested code: list the outcomes you need (such as Result 1, Result 2, Result 3 in Figure 1), then ask which question separates them first. That first question becomes the outer condition.

## Common misconceptions

- **"The inner IF is always evaluated."** It is only evaluated when the outer condition sends control into its block.
- **"An ELSE belongs to the nearest IF written above it."** It belongs to the IF whose block closes immediately before it; check the braces, not the layout.
- **"The order of tests in a chain does not matter."** If the tests overlap (≥ 60 and ≥ 80), the order decides which block is chosen.
- **"Two conditions need two test cases."** A nested conditional with two conditions has up to three paths, so you need a test for each.
- **"Nesting is always better than AND."** For two conditions and a single outcome, `a AND b` is shorter and just as clear.
- **"The inner ELSE runs when the outer condition is false."** The inner ELSE runs only when the outer condition is true and the inner condition is false.


## Where this leads

Next comes iteration (Topic 3.8), where a condition decides whether to repeat a block. Equivalent conditionals and Boolean expressions are the main subject of Topic 3.9, where you will compare algorithms that look different but behave the same.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-checklist/). The next topic is [Topic 3.8, Iteration](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/).
