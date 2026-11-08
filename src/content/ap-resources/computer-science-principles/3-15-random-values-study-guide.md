---
resourceId: "mb-ap-csp-3.15-study-guide"
title: "Random Values: Study Guide (Computer Science Principles 3.15)"
description: "What RANDOM(a, b) returns, how to find every possible result of an expression with random values, why adding two calls changes the odds, and how to pick random list items. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.15"]
resourceType: "study-guide"
prerequisites:
  - "Mathematical expressions (Topic 3.3)"
  - "Conditionals (Topic 3.6)"
  - "Lists (Topic 3.10)"
prerequisiteResources: ["mb-ap-csp-3.10-study-guide"]
learningObjectives:
  - "State what RANDOM(a, b) returns and how many values are possible"
  - "Determine all possible results of an expression using RANDOM"
  - "Write expressions and conditions that give a required range or probability"
  - "Choose a random element of a list safely"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.15-revision-notes", "mb-ap-csp-3.15-practice", "mb-ap-csp-3.15-checklist"]
next: "mb-ap-csp-3.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "RANDOM(a, b) returns a random integer from a to b inclusive; each result is equally likely."
  - "There are b − a + 1 possible values."
  - "Each execution may give a different result, so random code must be tested more than once."
  - "Results of expressions can be found by listing each possible RANDOM value; a single call is uniform but a sum of two calls is not."
  - "To choose from a list use aList[RANDOM(1, LENGTH(aList))]."
faqs:
  - question: "Does RANDOM(1, 6) include 6?"
    answer: "Yes. RANDOM(a, b) returns an integer from a to b inclusive, so both end values can occur."
  - question: "How many different values can RANDOM(a, b) return?"
    answer: "b − a + 1. For example RANDOM(3, 7) can return 5 different integers."
  - question: "Are the totals of two RANDOM(1, 6) calls equally likely?"
    answer: "No. A total of 7 can happen in six ways but a total of 2 in only one, so middle totals are more likely."
  - question: "How do I choose a random item from a list?"
    answer: "Use list[RANDOM(1, LENGTH(list))] so every valid index is possible and none is out of range."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Computers are the most predictable machines ever built: give a program the same input and it does the same thing every time. Yet games roll dice, music apps shuffle songs and weather models add chance. To get variety, programs use **random values**. In the exam notation a single procedure does the job, `RANDOM(a, b)`. This topic explains exactly what it returns, how to work out every *possible* result of an expression that uses it, and how programs turn random numbers into coin flips, dice rolls and random choices from a list.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## What RANDOM(a, b) does

`RANDOM(a, b)` **generates and returns a random integer from `a` to `b`, inclusive**. "Inclusive" means both end values are possible. "Random" here means **each integer in the range is equally likely**. For example, `RANDOM(1, 3)` could return 1, 2 or 3, and each has a one-in-three chance.

Because the value is random, **each execution of a program that uses it may produce a different result**. That has two consequences you must remember.

1. You cannot say *the* value of `RANDOM(1, 6)`. You can only say which values are **possible** and how **likely** each is.
2. Testing a random program is harder: one run does not show that the code always works. You test by running it many times, and by checking that every possible value is handled.

How many values are possible? For `RANDOM(a, b)` there are `b - a + 1` integers. So `RANDOM(1, 6)` has 6 values, `RANDOM(0, 9)` has 10 and `RANDOM(3, 7)` has 5. A frequent slip is to count `b - a`, which misses one.

<figure>
<svg viewBox="0 0 456 138" role="img" aria-labelledby="f315-t f315-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f315-t">The six possible results of RANDOM(1, 6)</title>
<desc id="f315-d">Six equal boxes numbered 1 to 6 holding the possible values 1, 2, 3, 4, 5 and 6, with the note that each value has probability one in six. Both end values 1 and 6 are included.</desc>
<rect x="0" y="0" width="456" height="138" fill="#ffffff"/>
<defs><marker id="f315-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="10" y="28" text-anchor="start" font-size="14" font-weight="bold" fill="#1d2b44">RANDOM(1, 6)</text><text x="108.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">1</text><rect x="80" y="58" width="56" height="38" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="108.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">1</text><text x="108.0" y="112" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">included</text><text x="164.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">2</text><rect x="136" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="164.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">2</text><text x="220.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">3</text><rect x="192" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="220.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">3</text><text x="276.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">4</text><rect x="248" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="276.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">4</text><text x="332.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">5</text><rect x="304" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="332.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">5</text><text x="388.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">6</text><rect x="360" y="58" width="56" height="38" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="388.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">6</text><text x="388.0" y="112" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">included</text><text x="10" y="132" text-anchor="start" font-size="12" font-weight="normal" fill="#1d2b44">Each value has probability 1/6</text>
</svg>
<figcaption>Figure 1. All six integers from 1 to 6 inclusive can result, and each is equally likely (probability 1/6). Counting b − a would give only 5.</figcaption>
</figure>

## Possible results of an expression

A skill the exam tests is to **evaluate expressions to determine the possible results** and to **write expressions to generate possible values**. The method is to list every value `RANDOM` can return, then apply the rest of the expression to each.

| Expression | Values RANDOM can return | Possible results |
|---|---|---|
| `RANDOM(1, 4)` | 1, 2, 3, 4 | 1, 2, 3, 4 |
| `RANDOM(1, 4) * 3` | 1, 2, 3, 4 | 3, 6, 9, 12 |
| `RANDOM(2, 5) MOD 2` | 2, 3, 4, 5 | 0, 1 |
| `2 * RANDOM(1, 3) - 1` | 1, 2, 3 | 1, 3, 5 |
| `RANDOM(0, 9) + 10` | 0 to 9 | 10 to 19 |

Each row was confirmed by a program that tried every value the `RANDOM` call can return. Notice that the *results* of an expression are not always equally likely. Look at `RANDOM(2, 5) MOD 2`: values 2 and 4 give 0, and values 3 and 5 give 1, so here the two results happen to be equally likely. Now consider adding two calls.

## Worked example 1: two calls are not the same as one bigger call

A game rolls two six-sided dice and adds them: `RANDOM(1, 6) + RANDOM(1, 6)`. What results are possible and are they equally likely?

**Step 1. Possible results.** The smallest is 1 + 1 = 2 and the largest is 6 + 6 = 12, so the possible results are the integers 2 to 12: eleven values.

**Step 2. Count the ways.** There are 6 × 6 = 36 equally likely pairs of rolls. Count how many pairs give each total:

| Total | Pairs that give it | Probability |
|---|---|---|
| 2 | 1 | 1/36 |
| 3 | 2 | 2/36 |
| 4 | 3 | 3/36 |
| 5 | 4 | 4/36 |
| 6 | 5 | 5/36 |
| 7 | 6 | 6/36 |
| 8 | 5 | 5/36 |
| 9 | 4 | 4/36 |
| 10 | 3 | 3/36 |
| 11 | 2 | 2/36 |
| 12 | 1 | 1/36 |

**Step 3. Conclude.** The totals are **not** equally likely. A total of 7 can happen in six ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), so its probability is 6/36 = 1/6, but 2 can happen in only one way, a probability of 1/36. A single call `RANDOM(2, 12)` would make all eleven totals equally likely, which is **not** how real dice behave. Only a *single* `RANDOM` call returns equally likely values; combining calls changes the chances.

**Check.** The probabilities add up: 1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = 36 ✓. (This table was generated by running every possible pair through the expression.)

## Worked example 2: random events and random choices

**A chance event.** A weather game says there is a 30% chance of rain each day. The statement `IF(RANDOM(1, 10) ≤ 3) { rain ← true } ELSE { rain ← false }` does this. Ten equally likely integers (1 to 10) are possible, and exactly three of them (1, 2 and 3) satisfy `≤ 3`, so the probability is 3/10 = 30%. To get 25% you would use `RANDOM(1, 4) = 1`, because one of four equally likely values qualifies.

**A random choice from a list.** To pick a random name from a list of any length:

```text
names ← ["Ana", "Bo", "Cy"]
pick ← names[RANDOM(1, LENGTH(names))]
DISPLAY(pick)
```

Output: `Bo`

Here the output is shown for a run in which `RANDOM(1, LENGTH(names))` happened to return 2. Different runs may display `Ana`, `Bo` or `Cy`, each equally likely.

**Step 1. Why `LENGTH(names)`?** The upper limit must be the last valid index, so every element can be chosen and no invalid index is ever produced. If the list grows to four names, the code still works unchanged.

**Step 2. Spot the error.** `names[RANDOM(1, LENGTH(names) + 1)]` can return `LENGTH(names) + 1`, which is past the end; the program then stops with an error message. Likewise `RANDOM(0, ...)` can produce index 0, which does not exist.

**Step 3. Test.** Run the program many times and check that all three names appear, and none ever causes an error. One run proves nothing.

**Random numbers and simulations.** Random values let a program imitate chance in the real world, which is the idea behind simulations (Topic 3.16).

## Why programs want randomness

Random values add variety and imitate chance. A quiz can pick a random question so that no two players see the same order. A game can decide whether a loot box holds a rare item. A simulation of traffic can make cars arrive at unpredictable moments. In each case the program needs two things: a **range** of equally likely integers, and **code that converts those integers into the thing you care about**: a card, a direction, a yes/no event with a given chance.

The conversion is where thinking happens. For a yes/no event, choose a range whose size makes the chance you want and count the qualifying values. For a choice among *k* options, use `RANDOM(1, k)` and map each number to an option, perhaps through a list. Real computers actually produce numbers by a calculation that is designed to look random, which is good enough for games and simulations. For the exam, treat `RANDOM(a, b)` as returning equally likely integers and reason about the possible results rather than the details of how the numbers are generated.

## Common misconceptions

- **"RANDOM(1, 6) never returns 6."** Both end values are included.
- **"RANDOM(1, 6) has 5 possible values."** It has `6 - 1 + 1 = 6`.
- **"Adding two RANDOM calls gives equally likely totals."** Totals near the middle are more likely.
- **"A random program gives the same output each time."** It may give a different result each time it runs.
- **"The probability of `RANDOM(1, 10) ≤ 3` is 3%."** It is 3 out of 10 = 30%.
- **"One run that works shows the code is correct."** Random code must be tested repeatedly and for every possible value.


## Where this leads

Next, Topic 3.16 uses random values to build simulations: abstract models of real situations whose results vary from run to run, so you can learn from them without the real world.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-15-random-values-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-15-random-values-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-15-random-values-checklist/). The next topic is [Topic 3.16, Simulations](/advanced-course-resources/computer-science-principles/3-16-simulations-study-guide/).
