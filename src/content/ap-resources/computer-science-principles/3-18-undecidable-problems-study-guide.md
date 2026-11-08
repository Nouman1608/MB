---
resourceId: "mb-ap-csp-3.18-study-guide"
title: "Undecidable Problems: Study Guide (Computer Science Principles 3.18)"
description: "What decidable and undecidable problems are, why the halting problem has no algorithm that works for every program, and how undecidable differs from merely slow. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.18"]
resourceType: "study-guide"
prerequisites:
  - "Algorithmic efficiency (Topic 3.17)"
  - "Iteration (Topic 3.8)"
prerequisiteResources: ["mb-ap-csp-3.17-study-guide"]
learningObjectives:
  - "Define decidable and undecidable problems"
  - "Describe the halting problem and why no general algorithm can solve it"
  - "Explain that an undecidable problem can have solvable instances"
  - "Distinguish an undecidable problem from one that merely takes unreasonable time"
skills: ["1"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.18-revision-notes", "mb-ap-csp-3.18-practice", "mb-ap-csp-3.18-checklist"]
next: "mb-ap-csp-3.18-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A decidable problem is a decision problem for which an algorithm can produce a correct output for all inputs."
  - "An undecidable problem is one for which no algorithm can always provide a correct yes-or-no answer."
  - "An undecidable problem may have some instances that can be solved, but no algorithm solves every instance."
  - "The halting problem (will a program stop?) is the standard example."
  - "Undecidable (no algorithm exists) is different from unreasonable time (an algorithm exists but is too slow)."
faqs:
  - question: "What is an undecidable problem?"
    answer: "A decision problem for which no algorithm can be constructed that always gives a correct yes-or-no answer for every input."
  - question: "Is undecidable the same as very slow?"
    answer: "No. A very slow problem has an algorithm that takes an unreasonable amount of time. An undecidable problem has no algorithm that always works, however much time is allowed."
  - question: "Can any instance of an undecidable problem be solved?"
    answer: "Yes. An undecidable problem may have some instances with an algorithmic solution, but no algorithm solves all instances."
  - question: "What is the halting problem?"
    answer: "Given any program and its input, decide whether the program eventually stops or runs forever. It is the standard example of an undecidable problem."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

So far this unit has asked how to write algorithms and how fast they run. This last topic asks a stranger question: **are there problems that no algorithm can ever solve?** The surprising answer is yes. It is not that nobody has been clever enough yet; it can be *shown* that for some problems no algorithm exists. Understanding this is a good way to see what computing can and cannot do, and it separates two ideas that are easy to confuse: a problem that takes too long (Topic 3.17) and a problem that cannot be solved at all.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Decidable problems

Recall that a **decision problem** has a yes/no answer. A decision problem is **decidable** if an algorithm can be written that produces a **correct output for all inputs**. "Is the number *n* even?" is decidable: the algorithm `n MOD 2 = 0` answers correctly for every integer. So is "Is this list sorted?", which needs only a loop that compares each item with the next:

```text
PROCEDURE isSorted(aList)
{
  i ← 1
  REPEAT UNTIL(i ≥ LENGTH(aList))
  {
    IF(aList[i] > aList[i + 1])
    {
      RETURN(false)
    }
    i ← i + 1
  }
  RETURN(true)
}
```

This procedure returns the right yes/no answer for **every** list, so the problem is decidable. (We ran it on `[1, 3, 5]`, `[1, 5, 3]`, `[7]` and `[2, 2, 9]` and it gave true, false, true, true as expected.) Most problems you meet in this course are decidable, though some may take too long to solve.

## Undecidable problems

An **undecidable problem** is one for which **no algorithm can be constructed that is always capable of providing a correct yes-or-no answer**. Three points:

1. It is about **all** inputs. An algorithm that gets many inputs right but fails for some does not decide the problem.
2. An undecidable problem **may have some instances that have an algorithmic solution**. You might solve many particular cases, but **no single algorithm solves every instance**.
3. Undecidable is a statement about the existence of algorithms, **not** about speed. The cause is not that the computer is too slow or the program too long.

(Working out whether a *given* problem is undecidable is beyond the course. You need to understand what the idea means and recognise the standard example.)

## The standard example: the halting problem

**The question.** Given any program and an input for it, will the program eventually **stop**, or will it run forever? This is a yes/no question, so it is a decision problem. It is called the **halting problem**, and it is undecidable. It would be wonderfully useful to have a program that checks other programs for endless loops before they are run, but no such program can exist.

**Instances can be easy.** For some programs we can answer by looking. A program with no loops always stops. This program with `n` equal to 5 stops, because `n` counts 4, 3, 2, 1, 0:

```text
REPEAT UNTIL(n = 0)
{
  n ← n - 1
}
```

And with `n` equal to 5 this one never stops, because `n` only grows and can never become negative:

```text
REPEAT UNTIL(n < 0)
{
  n ← n + 1
}
```

So some instances of the halting problem are decidable by inspection. The undecidability is about the **general** case: there is no **one** procedure that answers correctly for **every** program and input.

**Instances can be hard.** Here is a short program with no obvious pattern:

```text
steps ← 0
REPEAT UNTIL(n = 1)
{
  IF(n MOD 2 = 0)
  {
    n ← n / 2
  }
  ELSE
  {
    n ← 3 * n + 1
  }
  steps ← steps + 1
}
DISPLAY(steps)
```

Starting with `n` = 6 it displays `8` (6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1). Starting with `n` = 27 it needs `111` steps before reaching 1. Mathematicians have tried huge starting values and found that every one of them stops, but nobody has found a proof that it stops for *every* starting value. (This is the famous Collatz question. Note that this is an **open question about one particular program**, which is not the same as being proved undecidable; we use it only to show that you cannot always tell by looking whether a program will stop.)

<figure>
<svg viewBox="0 0 730 126" role="img" aria-labelledby="f318-t f318-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f318-t">Why a perfect halting checker cannot exist</title>
<desc id="f318-d">Four boxes in a row. Box 1: suppose a procedure called halts can always correctly answer whether any program stops on a given input. Box 2: build a new program called trouble that asks halts about itself and then does the opposite: it loops forever if halts says yes, and stops if halts says no. Box 3: ask whether trouble stops when run on itself. Box 4: whichever answer halts gives is wrong, a contradiction, so halts cannot exist.</desc>
<rect x="0" y="0" width="730" height="126" fill="#ffffff"/>
<defs><marker id="f318-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="150" height="76" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="95.0" y="52.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Suppose</text><text x="95.0" y="69.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">halts(P) is</text><text x="95.0" y="86.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">always right</text><line x1="170" y1="63.0" x2="197" y2="63.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f318-a)"/><text x="185.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="200" y="25" width="150" height="76" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="275.0" y="52.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Build trouble:</text><text x="275.0" y="69.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">do the opposite</text><text x="275.0" y="86.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">of halts says</text><line x1="350" y1="63.0" x2="377" y2="63.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f318-a)"/><text x="365.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="380" y="25" width="150" height="76" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="455.0" y="60.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Run trouble</text><text x="455.0" y="77.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">on itself</text><line x1="530" y1="63.0" x2="557" y2="63.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f318-a)"/><text x="545.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">so</text><rect x="560" y="25" width="150" height="76" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="635.0" y="52.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Contradiction:</text><text x="635.0" y="69.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">halts cannot</text><text x="635.0" y="86.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">exist</text>
</svg>
<figcaption>Figure 1. The idea behind the proof (not examined in detail): a supposed perfect checker leads to a contradiction.</figcaption>
</figure>

## Worked example 1: decidable, undecidable or just slow?

Classify each problem. The key question each time: **does an algorithm exist that always gives the correct answer, and if so, is it quick?**

| Problem | Decidable? | Reasonable time? | Reason |
|---|---|---|---|
| "Is the whole number *n* even?" | Yes | Yes (one step) | `n MOD 2 = 0` is correct for every integer |
| "Is this list of numbers sorted?" | Yes | Yes (one pass) | The `isSorted` procedure is always correct and takes at most *n* − 1 comparisons |
| "Is there a route of at most 14 km through these five towns?" | Yes | Yes for 5 towns; unreasonable for very many | Try every order (an algorithm exists); the number of orders grows factorially |
| "Given any program and input, does it eventually stop?" | **No: undecidable** | not applicable | No algorithm answers correctly for every program and input |

**Check.** Row 3 is the trap: it can take far too long (Topic 3.17), but an algorithm *does* exist, so it is decidable. Row 4 is different in kind: more time would not help, because no algorithm exists at all. **Unreasonable time** (an algorithm exists but is impractically slow) and **undecidable** (no algorithm exists) are different ideas.

## Worked example 2: why "a perfect bug checker" cannot be built

A student boasts: "I have written `willStop(program, input)`. It reads any program and its input and always correctly says `true` if the program will stop and `false` if it runs forever." Explain why this claim cannot be true.

**Step 1. Take the claim seriously.** Assume `willStop` exists and is *always* right.

**Step 2. Build a troublemaker.** Write a new program `trouble(program)` that asks `willStop(program, program)`. If the answer is `true`, `trouble` deliberately loops forever. If the answer is `false`, `trouble` stops immediately.

**Step 3. Feed `trouble` to itself.** Ask: does `trouble(trouble)` stop?

- If `willStop` says **true** (it stops), then `trouble` does the opposite and loops **forever**. So `willStop` was wrong.
- If `willStop` says **false** (it runs forever), then `trouble` does the opposite and **stops**. So `willStop` was wrong again.

**Step 4. Conclude.** Either answer makes `willStop` wrong for this one input, which contradicts the claim that it is always right. So no such procedure can exist, however clever the programmer.

**What this means in practice.** There is no program that can perfectly check *every* other program for infinite loops. Real tools can still check many programs, or special kinds of program (for example ones with no loops), and can warn about suspicious patterns. But none can be correct for all programs and inputs. This is also why testing a program is never the same as proving that it will always stop.

**Check.** The argument is a proof by contradiction. You are *not* required to reproduce it on the exam; you should be able to say what the halting problem asks, that it is undecidable, and what that means.

## Putting topics 3.17 and 3.18 together

Think of problems in three groups. **Solvable in reasonable time**: an algorithm exists and runs in polynomial time. **Solvable, but not in reasonable time**: an algorithm exists but its running time grows exponentially or factorially; we use heuristics for approximate answers. **Unsolvable by any algorithm**: undecidable problems. Moving a problem from the second group to the first needs a cleverer algorithm. Nothing can move a problem out of the third group, because the barrier is not speed or cleverness: no algorithm exists.

## Common misconceptions

- **"Undecidable means it takes too long."** Undecidable means *no algorithm exists* that always answers correctly. Taking too long is a different idea (unreasonable time).
- **"Undecidable means nobody has solved it yet."** It can be shown that no algorithm exists; more time or smarter programmers will not change that.
- **"An undecidable problem has no solvable instances."** Many instances can be solved; there is just no single algorithm that solves all of them.
- **"A faster computer could decide it."** Speed is not the obstacle.
- **"Decidable means easy."** Decidable only means an algorithm exists. It might still be impractically slow.
- **"Testing a program on many inputs proves that it halts."** It shows only that those runs stopped.


## Where this leads

That completes Unit 3. Next, take the Unit 3 diagnostic to see which topics to revisit, then work through the Unit 3 review, which mixes ideas from every topic in the unit.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-checklist/). After this topic, take the [Unit 3 diagnostic](/advanced-course-resources/computer-science-principles/unit-3-diagnostic/) and the [Unit 3 review](/advanced-course-resources/computer-science-principles/unit-3-review/).
