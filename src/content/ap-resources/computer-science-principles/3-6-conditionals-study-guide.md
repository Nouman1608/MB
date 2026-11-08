---
resourceId: "mb-ap-csp-3.6-study-guide"
title: "Conditionals: Study Guide (Computer Science Principles 3.6)"
description: "How selection works with IF and IF/ELSE, how to trace which block runs, the trap of separate IF statements, and how to write and test a conditional from a description. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.6"]
resourceType: "study-guide"
prerequisites:
  - "Boolean expressions (Topic 3.5)"
  - "Variables and assignment (Topic 3.1)"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Explain selection and the flow of control"
  - "Trace IF and IF/ELSE statements and say which block runs"
  - "Write a conditional from a written description"
  - "Choose test values that cover every branch and boundary"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.6-revision-notes", "mb-ap-csp-3.6-practice", "mb-ap-csp-3.6-checklist"]
next: "mb-ap-csp-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Selection chooses which statements run, based on a Boolean condition."
  - "IF runs its block only when the condition is true; IF/ELSE runs exactly one of two blocks."
  - "Two separate IF statements are independent; both, one or neither block may run."
  - "Test every branch and the boundary values."
  - "Every algorithm can be built from sequencing, selection and iteration."
faqs:
  - question: "What is the difference between IF and IF/ELSE?"
    answer: "IF runs its block only when the condition is true and does nothing otherwise. IF/ELSE always runs exactly one of its two blocks."
  - question: "Can the condition be a Boolean variable?"
    answer: "Yes. Any Boolean expression, including a variable holding true or false, can be the condition."
  - question: "Do two IF statements in a row behave like IF/ELSE?"
    answer: "No. Each IF is tested separately, so both blocks can run."
  - question: "How many tests does a conditional need?"
    answer: "At least one for each path, plus boundary values such as exactly 500 when the condition says at least 500."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

So far every program in this unit has run its statements in a fixed order from the first line to the last. Real programs must *respond*: charge a child fare to a child, refuse a wrong password, award a bonus only if the score is high enough. The tool for this is **selection**, written in code as a **conditional statement** (an "if-statement"). A conditional uses a Boolean expression, the topic you have just studied, to decide which statements run. This topic shows how `IF` and `IF ... ELSE` work, how to trace them, and how to write one from a description.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Selection and flow of control

The order in which statements run is the **flow of control**. By default it is **sequential**: top to bottom. **Selection** changes that: it determines which parts of an algorithm are executed *based on a condition being true or false*. Every algorithm can be built from just three ideas: **sequencing**, **selection** and **iteration** (Topic 3.8). Selection is the second.

An algorithm can be described without any programming language. A recipe that says "if the sauce is too thick, add water" is a selection written in plain English, and a flowchart with a diamond is the same idea drawn as a diagram. Programs are just these descriptions written in a language.

## IF and IF ... ELSE

**IF alone.** The block runs only when the condition is `true`; if it is `false`, nothing happens and the program continues after the block.

```text
IF(condition)
{
  <block of statements>
}
```

**IF with ELSE.** Exactly **one** of the two blocks runs: the first if the condition is true, otherwise the second.

```text
IF(condition)
{
  <first block of statements>
}
ELSE
{
  <second block of statements>
}
```

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="f36-t f36-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f36-t">Flow of control for an IF with ELSE</title>
<desc id="f36-d">A flowchart. A start box leads to a diamond holding a condition. An arrow labelled true leads to the first block. An arrow labelled false leads to the second block drawn with a dashed border. Both blocks lead on to the statement after the conditional.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<defs><marker id="f36-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="95" width="90" height="44" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="65" y="114" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Previous</text><text x="65" y="131" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">statement</text><line x1="110" y1="117" x2="168" y2="117" stroke="#1d2b44" stroke-width="2" marker-end="url(#f36-a)"/><polygon points="250,62 330,117 250,172 170,117" fill="#fff4d6" stroke="#1d2b44" stroke-width="2"/><text x="250" y="122" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">condition</text><line x1="330" y1="117" x2="395" y2="55" stroke="#1d2b44" stroke-width="2" marker-end="url(#f36-a)"/><text x="375" y="78" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44">true</text><line x1="330" y1="117" x2="395" y2="195" stroke="#1d2b44" stroke-width="2" marker-end="url(#f36-a)"/><text x="375" y="170" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d2b44">false</text><rect x="395" y="30" width="170" height="50" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="480" y="59" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">first block</text><rect x="395" y="170" width="170" height="50" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/><text x="480" y="199" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">second block</text><line x1="565" y1="55" x2="600" y2="55" stroke="#1d2b44" stroke-width="2"/><line x1="600" y1="55" x2="600" y2="117" stroke="#1d2b44" stroke-width="2"/><line x1="565" y1="195" x2="600" y2="195" stroke="#1d2b44" stroke-width="2"/><line x1="600" y1="195" x2="600" y2="117" stroke="#1d2b44" stroke-width="2"/><text x="612" y="121" font-size="12" fill="#1d2b44">Next statement</text>
</svg>
<figcaption>Figure 1. One condition, two paths. Exactly one block runs, then control continues with the next statement.</figcaption>
</figure>

Notice how the block is chosen by the **value of a Boolean expression** at the moment the IF is reached. The expression can be a comparison (`age < 13`), a logical combination (`score ≥ 500 AND lives > 0`) or simply a Boolean variable (`IF(isOpen)`).

## Worked example 1: tracing an IF/ELSE, and the trap of two IFs

A cinema charges 8 for under-13s and 12 otherwise. Trace the segment for `age` equal to 9, then for `age` equal to 30.

```text
age ← 9
IF(age < 13)
{
  price ← 8
}
ELSE
{
  price ← 12
}
DISPLAY(price)
```

Output: `8`

**Age 9.** `9 < 13` is true, so the first block runs and `price` becomes 8. The ELSE block is skipped completely. Output `8`.

```text
age ← 30
IF(age < 13)
{
  price ← 8
}
ELSE
{
  price ← 12
}
DISPLAY(price)
```

Output: `12`

**Age 30.** `30 < 13` is false, so the ELSE block runs and `price` becomes 12. Output `12`. Exactly one price is ever assigned.

**The trap.** Now compare two separate IF statements with an IF ... ELSE, using `x` equal to 15:

*Two separate conditionals*

```text
x ← 15
IF(x > 10)
{
  DISPLAY("A")
}
IF(x > 5)
{
  DISPLAY("B")
}
ELSE
{
  DISPLAY("C")
}
```

Output: `A B`

The first IF stands alone and is true, so `A` is displayed. The second IF is a *new* test: `15 > 5` is true, so `B` is displayed and the ELSE (`C`) is skipped. Both `A` and `B` appear because independent IF statements do not cancel one another. In contrast, if the second test were attached to the first as an ELSE branch, only one of `A` or `B` could be shown.

**Check.** Count the blocks that can run. After an `IF ... ELSE` exactly one block runs; after two separate `IF` statements zero, one or both can run.

## Worked example 2: writing a conditional from a description

A game awards a bonus of 50 points if the player's score is at least 500 **and** they still have lives left. Otherwise the bonus is 0. The program then displays the score plus the bonus.

**Step 1. Say it in words (an algorithm without a language).** Look at the score and the lives. If both tests pass, the bonus is 50. If not, the bonus is 0. Add the bonus to the score and display the total.

**Step 2. Identify the condition.** Two conditions joined by AND: `score ≥ 500 AND lives > 0`. Use `≥` because exactly 500 qualifies.

**Step 3. Write the code.**

```text
score ← 600
lives ← 2
IF(score ≥ 500 AND lives > 0)
{
  bonus ← 50
}
ELSE
{
  bonus ← 0
}
DISPLAY(score + bonus)
```

Output: `650`

**Step 4. Test every branch.** One test is never enough, because a conditional has more than one path:

| score | lives | Condition | bonus | Displayed |
|---|---|---|---|---|
| 600 | 2 | true AND true = true | 50 | 650 |
| 600 | 0 | true AND false = false | 0 | 600 |
| 400 | 2 | false AND true = false | 0 | 400 |
| 500 | 1 | true AND true = true | 50 | 550 |

The last row tests the **boundary**: a score of exactly 500 must earn the bonus. If you wrote `score > 500` instead, this row would reveal the error.

**Check.** The four rows cover both outcomes of each part of the AND, plus the boundary.

## IF without ELSE

An IF without an ELSE is useful when you only need to *change* something in a special case. The variable keeps its earlier value when the condition is false:

```text
discount ← 0
IF(total ≥ 100)
{
  discount ← 10
}
DISPLAY(total - discount)
```

With `total` equal to 120 the block runs and the display is 110. With `total` equal to 80 the block is skipped, `discount` stays 0 and the display is 80. Setting a default value before the IF is a common, safe pattern.

## Choosing the right structure

When you design a decision, ask two questions before you type anything.

1. **Are the outcomes mutually exclusive?** If exactly one thing should happen (child price *or* adult price), use IF ... ELSE, because it guarantees one block runs. If several things may be true together (add a bonus *and* show a warning), use separate IF statements.
2. **Is there a sensible default?** If most cases do nothing special, set a default value first and use an IF without ELSE to override it in the unusual case.

A useful habit is to read the condition aloud as a sentence: "if the score is at least 500 and the player has lives left, then award the bonus". If the sentence does not match the requirement, the condition is wrong. Finally, think about the **inputs that sit exactly on the boundary** of the condition. Programs fail at the edges far more often than in the middle, so those are the values to choose when you test.

This way of thinking is also what the Create performance task expects: your program must include a selection that uses a condition, and you must be able to say what the selection does and what happens when the condition is true and when it is false.

## Common misconceptions

- **"Both the IF block and the ELSE block run."** Exactly one runs in an IF ... ELSE.
- **"Two IF statements in a row are the same as IF ... ELSE."** They are independent: both, one or neither block can run (see `A B` above).
- **"If the condition is false the program stops."** It simply skips the block and carries on with the next statement.
- **"One test proves the code works."** Each path needs a test, plus boundary values.
- **"The condition has to be a comparison."** A Boolean variable or any Boolean expression is fine.
- **"IF changes the order of the lines in the file."** The lines stay where they are; the *flow of control* skips some of them.


## Where this leads

Next, Topic 3.7 puts conditionals inside conditionals so a program can ask a second question after the first. Conditions also drive loops in Topic 3.8, and equivalent conditionals and Boolean expressions return in Topic 3.9.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-6-conditionals-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-6-conditionals-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-6-conditionals-checklist/). The next topic is [Topic 3.7, Nested Conditionals](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/).
