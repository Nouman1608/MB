---
resourceId: "mb-ap-csp-3.18-revision-notes"
title: "Undecidable Problems: Revision Notes (Computer Science Principles 3.18)"
description: "One-page recap of undecidable problems: decidable versus undecidable, the halting problem, instances that can be solved, and the difference between unreasonable time and impossibility."
course: "computer-science-principles"
unit: 3
topics: ["3.18"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.18-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["1"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.18-study-guide", "mb-ap-csp-3.18-practice", "mb-ap-csp-3.18-checklist"]
next: "mb-ap-csp-3.18-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A decidable problem is a decision problem for which an algorithm can produce a correct output for all inputs."
  - "An undecidable problem is one for which no algorithm can always provide a correct yes-or-no answer."
  - "An undecidable problem may have some instances that can be solved, but no algorithm solves every instance."
  - "The halting problem (will a program stop?) is the standard example."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- A **decision problem** has a yes/no answer.
- It is **decidable** if an algorithm can produce a **correct output for all inputs** (e.g. "Is the number even?").
- An **undecidable problem** has **no algorithm** that is always capable of a correct yes-or-no answer.
- An undecidable problem **may have some instances** with an algorithmic solution, but **no algorithm solves all instances**.
- The **halting problem** ("does this program stop?") is the standard example.
- **Undecidable ≠ slow.** Unreasonable time means an algorithm exists but is too slow; undecidable means none exists.
- Deciding whether a given problem is undecidable is **outside** the course.

## Key relationships

| Kind of problem | Algorithm exists? | Reasonable time? | Example |
|---|---|---|---|
| Decidable and quick | Yes | Yes | Is *n* even? Is this list sorted? |
| Decidable but unreasonable | Yes | No | Best tour of very many towns |
| Undecidable | No (for all instances) | Not applicable | Does any given program stop? |

| Statement | True or false |
|---|---|
| Some instances of an undecidable problem can be solved | True |
| A faster computer can decide an undecidable problem | False |
| "Does this loop stop?" is decidable for every possible program | False |
| A decidable problem is always fast to solve | False |

## Assumptions

- "Algorithm" means a finite set of instructions that always finishes with an answer.
- A problem is described for **all** inputs, not just one.
- Questions use the definitions above.

## Method for classifying a problem

1. Is it a **decision** (yes/no) problem?
2. Can you describe an algorithm that gives the right answer for **every** input? If yes: decidable.
3. If decidable, is it quick (polynomial) or unreasonable (exponential or factorial)?
4. If no such algorithm can exist (the standard example is the halting problem): undecidable.

## Mistakes to avoid

- Equating undecidable with slow or hard.
- Saying an undecidable problem cannot be solved for any instance.
- Believing better hardware could solve it.
- Treating "no one has found one yet" as the meaning.
- Treating decidable as easy.

## Worked mini-example

"Does this program stop?" for a program that has only assignment statements and no loops: it always stops, so that **instance** is decidable. For the **general** problem of deciding, for any program and input, whether it stops, no algorithm exists: the problem is undecidable.

## Quick self-check

1. Is "Is the number even?" decidable?
2. Can an undecidable problem have instances that are easy to solve?
3. A problem has an algorithm that takes a million years. Is it undecidable?

<details>
<summary>Answers</summary>

1. Yes: `n MOD 2 = 0` is correct for every integer.
2. Yes. It may have some solvable instances, but no algorithm solves all of them.
3. No. An algorithm exists, so it is decidable; it just takes an unreasonable amount of time.

</details>

## Where marks are won and lost

Questions describe a problem and ask whether it is decidable, undecidable or solvable but slow. Others ask what it means for a problem to be undecidable, or give a statement about the halting problem to judge. Use the exact definitions. The course states that determining whether a given problem is undecidable is out of scope, so questions test the idea and the standard example, not proofs. Always check whether the issue is time (3.17) or existence of an algorithm (3.18).


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-18-undecidable-problems-study-guide/) for worked examples and explanations.
