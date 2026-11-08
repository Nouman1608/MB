---
resourceId: "mb-ap-csp-3.13-study-guide"
title: "Developing Procedures: Study Guide (Computer Science Principles 3.13)"
description: "How procedural abstraction manages complexity, how to design procedures with parameters and return values, how to refactor repeated code, and how to explain the benefits. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.13"]
resourceType: "study-guide"
prerequisites:
  - "Calling procedures (Topic 3.12)"
  - "Lists (Topic 3.10)"
  - "Conditionals (Topic 3.6)"
prerequisiteResources: ["mb-ap-csp-3.12-study-guide"]
learningObjectives:
  - "Explain how procedural abstraction manages complexity"
  - "Write procedures with parameters, with and without a returned value"
  - "Refactor repeated code into a general procedure"
  - "Explain, in context, how a procedure reduces complexity or supports reuse"
skills: ["3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.13-revision-notes", "mb-ap-csp-3.13-practice", "mb-ap-csp-3.13-checklist"]
next: "mb-ap-csp-3.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "Procedural abstraction names a process so a procedure can be used knowing what it does, not how."
  - "Parameters generalise a procedure so it can be reused with a range of arguments."
  - "Modularity splits a program into subprograms; shared features are extracted to avoid duplicated code."
  - "The internals of a procedure can change without notifying users as long as what it does is preserved."
  - "A RETURN can appear anywhere in a procedure and causes an immediate return to the caller."
faqs:
  - question: "What is procedural abstraction?"
    answer: "Giving a name to a process so a procedure can be used knowing only what it does, not how it does it. It manages complexity by breaking a large problem into smaller subproblems."
  - question: "Why use parameters?"
    answer: "Parameters let one procedure work with a range of values, so the same code is reused instead of being copied for each case."
  - question: "Can I change how a procedure works without telling people who use it?"
    answer: "Yes, as long as what the procedure does stays the same. Users depend on its behaviour, not its internal steps."
  - question: "Should a procedure display a result or return it?"
    answer: "Usually return it. A returned value can be stored, tested or displayed by the caller; a displayed value cannot be reused by the program."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Large programs are not written as one huge block of code. They are built from small pieces, each with a clear job and a name, so that programmers can understand, test and reuse one piece at a time. A **procedure** is such a piece. In Topic 3.12 you called procedures. Here you write them, and you learn the reason they are one of the most important ideas in computing: **procedural abstraction**, which lets you use a procedure knowing only *what* it does, not *how* it does it. The same reasoning is what the Create performance task asks you to write about your own code.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Procedural abstraction

**Procedural abstraction** provides a **name for a process** and allows a procedure to be used **only knowing what it does, not how it does it**. When you call `sqrt(25)` in a spreadsheet you do not care which algorithm finds the root; you care that the answer is 5.

Procedural abstraction manages complexity in several ways:

- **Subproblems.** A solution to a large problem is built from solutions to smaller subproblems, each solved by a procedure.
- **Modularity.** Dividing a program into separate subprograms is called **modularity**. Each module can be written and tested on its own.
- **Reuse.** A procedure can extract the **shared features** of repeated code, so the code is written once and used many times instead of being duplicated.
- **Generalisation with parameters.** A **parameter** lets the same procedure work for a range of values, because the specific values arrive as arguments.
- **Readability.** A well-named procedure turns several lines into one meaningful call.
- **Changing the inside safely.** Programmers can change the internals of a procedure (to make it faster, use less storage or fix a bug) **without telling its users**, as long as *what it does* is preserved.

## Writing a procedure

```text
PROCEDURE procName(parameter1, parameter2, ...)
{
  <block of statements>
}

PROCEDURE procName(parameter1, parameter2, ...)
{
  <block of statements>
  RETURN(expression)
}
```

The first form defines a procedure that takes zero or more arguments and does something. The second also **returns a value**. A `RETURN` can appear anywhere inside the procedure and causes an **immediate** return to the calling statement. Here is a method for developing one.

1. **Name the job.** What single thing does this procedure do? Pick a verb or a question (`grade`, `isEven`, `countAbove`).
2. **Decide the inputs.** Which values change from call to call? Each becomes a parameter.
3. **Decide the output.** Should it *return* a value to the caller, or only *do* something such as display? Prefer returning a value: the caller can then display it, store it, or combine it.
4. **Write the body**, using only the parameters and its own variables.
5. **Test it** with typical, boundary and special inputs before building anything on top of it.

<figure>
<svg viewBox="0 0 630 120" role="img" aria-labelledby="f313-t f313-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f313-t">Extracting repeated code into a procedure</title>
<desc id="f313-d">Three boxes joined by arrows. Box 1: the same grading code repeated three times, once for each student. Box 2: identify what changes from copy to copy, the score, and make it a parameter. Box 3: one procedure called grade with a parameter score, called three times with different arguments.</desc>
<rect x="0" y="0" width="630" height="120" fill="#ffffff"/>
<defs><marker id="f313-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="170" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="105.0" y="57.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Same code</text><text x="105.0" y="74.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">copied 3 times</text><line x1="190" y1="60.0" x2="227" y2="60.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f313-a)"/><text x="210.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">look for</text><rect x="230" y="25" width="170" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="315.0" y="57.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">What changes?</text><text x="315.0" y="74.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">The score</text><line x1="400" y1="60.0" x2="437" y2="60.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f313-a)"/><text x="420.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">make it a parameter</text><rect x="440" y="25" width="170" height="70" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="525.0" y="49.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">One procedure</text><text x="525.0" y="66.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">grade(score)</text><text x="525.0" y="83.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">called 3 times</text>
</svg>
<figcaption>Figure 1. Refactoring: repeated code becomes one procedure; the part that changes becomes a parameter.</figcaption>
</figure>

## Worked example 1: from repeated code to a procedure

A teacher grades three students: 70 or more is `"A"`, 50 to 69 is `"B"`, below 50 is `"C"`. A first attempt copies the same conditional three times, once per student (shown here for one student; the other two repeat it with different variable names):

```text
IF(score1 ≥ 70)
{
  g1 ← "A"
}
ELSE
{
  IF(score1 ≥ 50)
  {
    g1 ← "B"
  }
  ELSE
  {
    g1 ← "C"
  }
}
```

Repeating this for `score2` and `score3` gives about 40 lines, and a change to the pass mark must be made in three places (and could be made in only two by mistake). Now extract the shared logic:

```text
PROCEDURE grade(score)
{
  IF(score ≥ 70)
  {
    RETURN("A")
  }
  IF(score ≥ 50)
  {
    RETURN("B")
  }
  RETURN("C")
}
DISPLAY(grade(82))
DISPLAY(grade(55))
DISPLAY(grade(31))
```

Output: `A B C`

**Step 1. Trace the calls.**

| Call | `score` | `score ≥ 70` | `score ≥ 50` | Returned |
|---|---|---|---|---|
| `grade(82)` | 82 | true | not reached | "A" |
| `grade(55)` | 55 | false | true | "B" |
| `grade(31)` | 31 | false | false | "C" |

Each `RETURN` leaves the procedure immediately, so no ELSE or nesting is needed. The parameter `score` makes the procedure **general**: it works for any score, now or in future.

**Step 2. Check the boundaries.** `grade(70)` is `"A"`, `grade(50)` is `"B"` and `grade(49)` is `"C"`. A single change to the thresholds inside `grade` fixes all callers at once.

**Step 3. Why this is procedural abstraction.** The caller needs to know only that `grade(score)` returns a letter. If the teacher later adds a new band, say `"A*"` for 90 and over, only the inside of `grade` changes; **nobody who calls it has to be told**, because *what it does* (turn a score into a letter) is preserved.

## Changing the inside without changing the outside

Here are two different internals for a procedure `isEven(n)`:

```text
Version 1:
PROCEDURE isEven(n)
{
  IF(n MOD 2 = 0)
  {
    RETURN(true)
  }
  RETURN(false)
}

Version 2:
PROCEDURE isEven(n)
{
  RETURN(n MOD 2 = 0)
}
```

A program calling `isEven` gets exactly the same answer from either version (we ran both for every whole number from 0 to 24). The second version is shorter, but its users never needed to know the difference. That freedom to improve the inside is a major benefit of abstraction.

## Worked example 2: a procedure with a list parameter, and decomposition

A teacher wants to know the total, the highest mark and the average of a list of marks. Instead of one long block, break the problem into three small procedures and combine them.

```text
PROCEDURE total(aList)
{
  sum ← 0
  FOR EACH item IN aList
  {
    sum ← sum + item
  }
  RETURN(sum)
}
PROCEDURE highest(aList)
{
  best ← aList[1]
  FOR EACH item IN aList
  {
    IF(item > best)
    {
      best ← item
    }
  }
  RETURN(best)
}
PROCEDURE average(aList)
{
  RETURN(total(aList) / LENGTH(aList))
}
marks ← [8, 6, 10, 4, 7]
DISPLAY(total(marks))
DISPLAY(highest(marks))
DISPLAY(average(marks))
```

Output: `35 10 7`

**Step 1. Trace.** `total(marks)` adds 8 + 6 + 10 + 4 + 7 = 35. `highest(marks)` starts with 8 and updates to 10 when it meets 10, so it returns 10. `average(marks)` calls `total(marks)` (35) and divides by `LENGTH(marks)` (5) to get 7. Output `35 10 7`.

**Step 2. Notice the reuse.** `average` did not need its own addition loop; it **reuses** `total`. If `total` is later corrected or made faster, `average` improves automatically.

**Step 3. Notice the parameter.** `aList` lets the same three procedures work for any list of marks: a class of 5, or a school of 500.

**Check.** 35 / 5 = 7 ✓; the largest of 8, 6, 10, 4, 7 is 10 ✓.

**Writing the explanation.** Suppose a question asks how the procedure `total` manages complexity. A strong answer: "`total` gives the process of adding up a list a name, so the code that needs a sum only calls `total(marks)` instead of repeating a loop. Because the list is a parameter, the same code works for any list. Without it the loop would have to be copied wherever a sum was needed, making the program longer and harder to correct." It names the procedure, says what it does, mentions the parameter and states what would be worse without it.

## Common misconceptions

- **"A procedure is just a shortcut for typing."** Saving typing is minor. The big benefits are reuse, testing once, readability and being able to change the inside safely.
- **"Parameters are optional decoration."** Parameters are what let one procedure handle many different values.
- **"A procedure that displays is as useful as one that returns."** A returned value can be stored, combined or displayed by the caller; a displayed value cannot be reused by the program.
- **"If I change a procedure's code, I must tell every programmer who uses it."** Not if what it does is unchanged. That is the point of procedural abstraction.
- **"More procedures always means better code."** A procedure should capture a clear, meaningful job. Splitting one line into five tiny procedures can make code harder to follow.
- **"A procedure remembers values between calls."** Its parameters and local variables are set up anew each time it is called.


## Where this leads

Topic 3.14 adds libraries: collections of procedures other programmers have already written and tested. You will use their documented behaviour exactly as you now use your own procedures.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-13-developing-procedures-checklist/). The next topic is [Topic 3.14, Libraries](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/).
