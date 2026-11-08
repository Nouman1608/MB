---
resourceId: "mb-ap-csp-3.9-study-guide"
title: "Developing Algorithms: Study Guide (Computer Science Principles 3.9)"
description: "How algorithms are expressed, created, combined and modified, and how to compare two algorithms for equivalence. Worked examples on even tests, look-alike maximum algorithms and largest/smallest/range/average."
course: "computer-science-principles"
unit: 3
topics: ["3.9"]
resourceType: "study-guide"
prerequisites:
  - "Conditionals and nested conditionals (Topics 3.6 and 3.7)"
  - "Iteration (Topic 3.8)"
prerequisiteResources: ["mb-ap-csp-3.8-study-guide"]
learningObjectives:
  - "Describe an algorithm and the ways it can be expressed"
  - "Create algorithms from an idea, by combining and by modifying existing algorithms"
  - "Use standard algorithms for maximum, minimum, sum, average and divisibility"
  - "Decide whether two algorithms give the same result, using tests and reasoning"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.9-revision-notes", "mb-ap-csp-3.9-practice", "mb-ap-csp-3.9-checklist"]
next: "mb-ap-csp-3.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "An algorithm is a finite set of instructions that accomplish a specific task; it can be written as natural language, a diagram, pseudocode or code."
  - "Every algorithm can be built from sequencing, selection and iteration."
  - "Algorithms can be created from an idea, by combining, or by modifying existing ones; reusing correct algorithms reduces development time and testing."
  - "Algorithms that look alike can behave differently: test ties and boundary cases."
  - "Some conditionals are equivalent to Boolean expressions and the reverse."
faqs:
  - question: "What is an algorithm?"
    answer: "A finite set of instructions that accomplish a specific task. It can be expressed in natural language, a diagram, pseudocode or a programming language."
  - question: "How can I tell whether two algorithms are equivalent?"
    answer: "Compare their results across a set of inputs that includes boundary and special cases, and reason about whether any input could make them differ. Agreement on a few examples is not proof."
  - question: "Why reuse existing algorithms?"
    answer: "Using a correct, already tested algorithm reduces development time, reduces testing and makes errors easier to find."
  - question: "Can a conditional be rewritten as a Boolean expression?"
    answer: "Sometimes. IF(a) {r ← true} ELSE {r ← false} is equivalent to r ← a."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

An **algorithm** is a finite set of instructions that accomplish a specific task. A recipe is an algorithm for a meal, and the steps for long division are an algorithm for dividing. Almost everything you have met in this unit, from assignments to loops, is a way of writing algorithms precisely enough for a computer to follow. In this topic you step back and look at algorithms themselves: how to create one, how to combine and modify algorithms you already know, and how to compare two algorithms to decide whether they produce the same result.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## What an algorithm is, and how it can be written

An algorithm must be **finite** (it ends) and must **accomplish a task** (it solves a problem). It does not belong to any language. The same algorithm can be expressed as:

- **natural language**: "Look at each score and remember the biggest one";
- a **diagram**: a flowchart with boxes and diamonds;
- **pseudocode**: structured text like the notation in this pack;
- a **program** in a visual or text-based programming language, which a computer can run.

Whatever the form, every algorithm can be constructed from three kinds of step, as you have seen in Topics 3.6 and 3.8: **sequencing** (steps in order), **selection** (choosing a path with a condition) and **iteration** (repeating). Clarity matters as much as correctness: an algorithm another person cannot read is hard to test and to fix.

## Three ways to create an algorithm

Algorithms rarely start from nothing. The course names three sources:

1. **From an idea.** You invent the steps to solve a new problem.
2. **By combining existing algorithms.** You use two known solutions as parts of a bigger one.
3. **By modifying an existing algorithm.** You change a known solution slightly to solve a related problem.

Knowing a stock of standard algorithms is a big advantage. The ones named in the course include: finding the **maximum or minimum** of two or more numbers, computing the **sum or average** of two or more numbers, testing whether one integer is **evenly divisible** by another, and determining a robot's **path through a maze**. Using an existing, already-correct algorithm as a building block has real benefits: it **reduces development time**, **reduces testing** (the part is already trusted) and **simplifies finding errors** (if the answer is wrong, the fault is probably in the new part).

<figure>
<svg viewBox="0 0 662 114" role="img" aria-labelledby="f39-t f39-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f39-t">Building a new algorithm from known parts</title>
<desc id="f39-d">Four boxes joined left to right. Box 1: find the largest of the three numbers. Box 2: find the smallest of the three numbers. Box 3: subtract the smallest from the largest. Box 4: the range. The first two are existing algorithms reused as building blocks.</desc>
<rect x="0" y="0" width="662" height="114" fill="#ffffff"/>
<defs><marker id="f39-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="85.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Find the</text><text x="85.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">largest</text><line x1="150" y1="57.0" x2="181" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f39-a)"/><text x="167.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="184" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="249.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Find the</text><text x="249.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">smallest</text><line x1="314" y1="57.0" x2="345" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f39-a)"/><text x="331.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">then</text><rect x="348" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="413.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">largest −</text><text x="413.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">smallest</text><line x1="478" y1="57.0" x2="509" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f39-a)"/><text x="495.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">gives</text><rect x="512" y="25" width="130" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="577.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Result:</text><text x="577.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">the range</text>
</svg>
<figcaption>Figure 1. The range of a set of numbers is built by combining two standard algorithms (largest, smallest) with one subtraction.</figcaption>
</figure>

## Comparing algorithms

Two algorithms can be written in different ways and **still accomplish the same task**. Two algorithms can also look almost identical and **produce different results**. To decide, you cannot rely on how they look: you must **test them with inputs** (including boundaries and special cases) or reason about every path.

Two kinds of equivalence are especially important:

- Some **conditional statements can be written as equivalent Boolean expressions**. `IF(n MOD 2 = 0) { r ← true } ELSE { r ← false }` stores in `r` the same value as `r ← (n MOD 2 = 0)`.
- Some **Boolean expressions can be written as equivalent conditionals** (the reverse), often with nested IF statements, as in the leap-year example in Topic 3.7.

When algorithms are equivalent, you may choose the one that is clearer or, later in the unit, the one that runs faster.

## Worked example 1: same task, or look-alike?

**Part A. Two ways to test "n is even".**

Algorithm A uses a conditional; Algorithm B uses a Boolean expression directly.

```text
A:
IF(n MOD 2 = 0)
{
  result ← true
}
ELSE
{
  result ← false
}

B:
result ← (n MOD 2 = 0)
```

| n | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| A and B store | true | false | true | false | true | false |

They agree for every value in the table. They always agree, because the conditional's two branches simply copy the value of the condition into `result`. B is shorter, so it is often preferred.

**Part B. Two look-alike algorithms.** Both aim to store the larger of `x` and `y` in `big`.

```text
C:
IF(x > y)
{
  big ← x
}
ELSE
{
  big ← y
}

D:
IF(x > y)
{
  big ← x
}
IF(y > x)
{
  big ← y
}
```

Test them with `big` starting at 0:

| x | y | C gives | D gives |
|---|---|---|---|
| 7 | 3 | 7 | 7 |
| 3 | 7 | 7 | 7 |
| 4 | 4 | 4 | **0** (neither IF is true, so `big` is never changed) |

C and D agree on every input **except when `x` equals `y`**. When the two numbers are equal neither condition in D is true, so `big` keeps its old value. The algorithms look alike but are **not equivalent**. The lesson: always test the special case where the values are equal.

## Worked example 2: combining and modifying

**Task.** For three numbers `a`, `b`, `c` find the largest, the smallest, the range (largest − smallest) and the average.

**Step 1. Start from a known algorithm.** To find the larger of two numbers we remember one and replace it if the other is bigger. Extend that idea to three: set `big` to `a`, then replace it by `b` if `b` is bigger, then by `c` if `c` is bigger.

```text
a ← 7
b ← 12
c ← 5
big ← a
IF(b > big)
{
  big ← b
}
IF(c > big)
{
  big ← c
}
small ← a
IF(b < small)
{
  small ← b
}
IF(c < small)
{
  small ← c
}
DISPLAY(big)
DISPLAY(small)
DISPLAY(big - small)
DISPLAY((a + b + c) / 3)
```

Output: `12 5 7 8`

**Step 2. Modify to get the smallest.** The code for `small` is the code for `big` with `>` changed to `<`. Modifying an existing algorithm is faster and safer than writing a new one.

**Step 3. Combine.** The range is the difference of the two results, so no new searching is needed: `big - small`.

**Step 4. Trace.**

| Step | Variable change | Value |
|---|---|---|
| `big ← a` | big | 7 |
| `b > big`? 12 > 7 true | big | 12 |
| `c > big`? 5 > 12 false | big | 12 |
| `small ← a` | small | 7 |
| `b < small`? 12 < 7 false | small | 7 |
| `c < small`? 5 < 7 true | small | 5 |

So the largest is 12, the smallest is 5, the range is 12 − 5 = 7, and the average is (7 + 12 + 5) / 3 = 24 / 3 = 8. Output `12 5 7 8`.

**Step 5. Test the special cases.** What if the largest number is the first one (a = 9, b = 2, c = 4)? Then neither IF changes `big` and it stays 9, which is right. What if two numbers tie (a = 6, b = 6, c = 6)? Every comparison is false, `big` and `small` are both 6, the range is 0 and the average is 6, which is correct. Cases that exercise "no change" and "ties" are worth a test each.

## Choosing between algorithms

Different algorithms can be developed to solve the same problem. When you compare options, consider: **correctness** on all inputs (including edge cases), **clarity** (can someone else read it?), **reuse** (can existing tested parts help?) and, as Topic 3.17 explains, **efficiency**. A correct but unreadable algorithm is a poor choice if a clear one is equally correct.

## Common misconceptions

- **"An algorithm has to be written in a programming language."** It can be natural language, a diagram, pseudocode or code.
- **"If two algorithms look similar, they are equivalent."** Small differences such as `>` versus `≥`, or two IFs versus IF/ELSE, change behaviour on boundary and tie cases.
- **"If two algorithms agree on a few tests, they are equivalent."** Tests can show that they *differ*, but only reasoning about every input (or every case) proves they agree.
- **"There is one correct algorithm for each problem."** Many different algorithms can solve the same problem.
- **"Reusing an existing algorithm means copying without understanding."** You must still understand what it does and test how it behaves in your program.
- **"A conditional and a Boolean expression are unrelated."** Some conditionals can be written as an equivalent Boolean expression and vice versa.


## Where this leads

Algorithms are the cargo that procedures carry: in Topics 3.12 and 3.13 you will wrap algorithms such as "largest of three" in procedures with parameters, and in Topic 3.17 you will ask not just whether an algorithm is correct but how long it takes.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-checklist/). The next topic is [Topic 3.10, Lists](/advanced-course-resources/computer-science-principles/3-10-lists-study-guide/).
