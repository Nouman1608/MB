---
resourceId: "mb-ap-csp-3.14-study-guide"
title: "Libraries: Study Guide (Computer Science Principles 3.14)"
description: "What software libraries, APIs and documentation are, how to predict results from an API description, why documented conditions matter, and how to choose existing code. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.14"]
resourceType: "study-guide"
prerequisites:
  - "Calling procedures (Topic 3.12)"
  - "Developing procedures (Topic 3.13)"
prerequisiteResources: ["mb-ap-csp-3.13-study-guide"]
learningObjectives:
  - "Explain what a library and an API are and why documentation is needed"
  - "Predict the result of calling a library procedure from its documentation"
  - "Use documented conditions to guard a call"
  - "Select appropriate libraries or existing code segments for a task"
skills: ["2"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.14-revision-notes", "mb-ap-csp-3.14-practice", "mb-ap-csp-3.14-checklist"]
next: "mb-ap-csp-3.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A software library contains procedures that can be used to create new programs."
  - "An API specifies how the procedures in a library behave and can be used; documentation is needed to understand them."
  - "Existing code may come from internal sources (your own earlier code) or external ones (libraries)."
  - "Libraries simplify the creation of complex programs and reduce development time and testing."
  - "You still test your use of a library, and must respect the conditions stated in its documentation."
faqs:
  - question: "What is the difference between a library and an API?"
    answer: "A library is a collection of procedures. An API is the specification of how those procedures behave and how to use them."
  - question: "Why do I need documentation for a library?"
    answer: "You usually cannot see the library code, so documentation is the only way to know what each procedure does, what arguments it needs and what it returns."
  - question: "Can code I wrote earlier count as a library?"
    answer: "Existing code segments can come from internal sources such as your own previously written code as well as external libraries."
  - question: "Do I still need to test code that uses a library?"
    answer: "Yes. You should test your own use, including boundary cases and any conditions the documentation states."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Nobody writes every part of a program from scratch. A mapping app does not invent the maths for distances, a game does not build its own sound engine, and a school project does not write its own code for reading a date. Programmers use **libraries**: collections of procedures that other people have already written and tested. This topic explains what a library and an API are, why documentation is essential, and how to choose and use existing code sensibly. The skill is practical: given a description of what a library procedure does, you must be able to use it correctly and predict what it returns.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Libraries, APIs and documentation

A **software library** contains procedures that may be used in creating new programs. Libraries simplify the task of creating complex programs: you call a ready-made procedure instead of building and testing it yourself.

Existing code can come from **internal or external sources**: a library supplied with the language or written by someone else (external), or code you or your team wrote earlier (internal, "previously written code"). Using it saves time and benefits from testing that has already been done.

An **application program interface (API)** is a *specification* of how the procedures in a library behave and how they can be used. It describes each procedure's name, its parameters, what it returns, and any conditions that must hold. **Documentation** for an API or library is necessary to understand the behaviours it provides and how to use them. You cannot safely call a procedure whose behaviour you have not read: you do not see its code, only its description.

Notice how this follows from procedural abstraction (Topic 3.13). The library author hides *how* each procedure works; the API tells you *what* it does. Your program depends only on that promise.

## An example API: NumberKit

The exam will describe any library it uses. To practise, here is a **fictional** library, **NumberKit**, invented by Marlbridge for this guide. Its documentation is:

| Procedure | Parameters | Returns | Conditions |
|---|---|---|---|
| `clamp(value, low, high)` | three numbers | `low` if `value < low`; `high` if `value > high`; otherwise `value` | `low ≤ high` |
| `largest(aList)` | a list of numbers | the largest value in the list | list is not empty |
| `average(aList)` | a list of numbers | the mean of the values | list is not empty |
| `repeatText(text, times)` | a string and a whole number | the string joined to itself `times` times | `times ≥ 1` |

<figure>
<svg viewBox="0 0 670 130" role="img" aria-labelledby="f314-t f314-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f314-t">Your program, the API and the library</title>
<desc id="f314-d">Three boxes joined by arrows. Box 1: your program calls clamp of value, 0 and 10. Box 2: the API documentation, which states what clamp does and the conditions. Box 3: the library code, hidden from you, which runs and returns a value to your program. The arrows show that your program relies on the documentation, not on the hidden code.</desc>
<rect x="0" y="0" width="670" height="130" fill="#ffffff"/>
<defs><marker id="f314-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="190" height="80" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="115.0" y="62.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Your program</text><text x="115.0" y="79.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">calls clamp(15, 0, 10)</text><line x1="210" y1="65.0" x2="237" y2="65.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f314-a)"/><text x="225.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">read</text><rect x="240" y="25" width="190" height="80" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="335.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">API documentation</text><text x="335.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">says what clamp does</text><text x="335.0" y="88.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">and its conditions</text><line x1="430" y1="65.0" x2="457" y2="65.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f314-a)"/><text x="445.0" y="18" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">is implemented by</text><rect x="460" y="25" width="190" height="80" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="555.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">Library code</text><text x="555.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">(hidden) runs and</text><text x="555.0" y="88.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">returns 10</text>
</svg>
<figcaption>Figure 1. Your program calls a library procedure through its API. You rely on the documented behaviour; the code inside stays hidden.</figcaption>
</figure>

## Worked example 1: predicting results from documentation

Use only the NumberKit documentation above. Find what this program displays.

```text
DISPLAY(clamp(15, 0, 10))
DISPLAY(clamp(-3, 0, 10))
DISPLAY(clamp(7, 0, 10))
DISPLAY(clamp(largest([4, 17, 9]) - 10, 0, 5))
```

Output: `10 0 7 5`

| Call | Working from the documentation | Returns |
|---|---|---|
| `clamp(15, 0, 10)` | 15 > high (10), so return `high` | 10 |
| `clamp(-3, 0, 10)` | −3 < low (0), so return `low` | 0 |
| `clamp(7, 0, 10)` | between low and high, so return `value` | 7 |
| `clamp(largest([4, 17, 9]) - 10, 0, 5)` | `largest` returns 17; the argument is 17 − 10 = 7; 7 > high (5), so return `high` | 5 |

**Check.** The last line shows that a call can be an argument to another call; the inner one runs first. Never assume more than the documentation promises: it does not say that `clamp` changes the original variable, so it returns a *new* value that you must store if you need it.

**A real use: keeping a value in range.** A volume control must stay between 0 and 10 whatever the user presses:

```text
level ← 9
step ← 3
level ← clamp(level + step, 0, 10)
DISPLAY(level)
```

Output: `10`

Without the library you would write the two-IF logic yourself and test it. With `clamp` the intent is clear in one line.

## Worked example 2: reading the conditions in the documentation

The table says `average(aList)` needs a **non-empty list**. A program collects test marks and must show the class average. Some days no one sits the test, so the list is empty. If the program called `average([])` it would break the documented condition, and the behaviour would be undefined (it could crash). A careful programmer protects the call:

```text
marks ← [8, 6, 10, 4]
IF(LENGTH(marks) > 0)
{
  DISPLAY(average(marks))
}
ELSE
{
  DISPLAY("no marks")
}
```

Output: `7`

```text
marks ← []
IF(LENGTH(marks) > 0)
{
  DISPLAY(average(marks))
}
ELSE
{
  DISPLAY("no marks")
}
```

Output: `no marks`

**Step 1.** With four marks, `LENGTH(marks)` is 4, so the condition is true and `average` returns (8 + 6 + 10 + 4) / 4 = 28 / 4 = 7.

**Step 2.** With an empty list, `LENGTH(marks)` is 0, the condition is false and the message is displayed. The library procedure is never called with a list it cannot handle.

**Step 3. Decide whether to use the library or write your own.** Consider:

| Question | Using `average` | Writing your own loop |
|---|---|---|
| Time to develop | One line | Several lines |
| Testing needed | Only your use of it | Whole procedure |
| Risk | Must respect the conditions | Must write correct code |
| Readability | Clear name | Needs reading the loop |

For a routine task like an average, the library wins on time and clarity. If no library did exactly what you need, you would write your own procedure (Topic 3.13), or combine library procedures with your own code.

## Choosing an appropriate library

When you need to add a feature, ask:

1. **Does a library already do this?** Dates, graphics, sound, statistics and file handling are all well served.
2. **Does its API fit?** Check the parameters, the return value and the conditions.
3. **Can I trust and maintain it?** Prefer widely used libraries with clear documentation. Check any usage terms, which you will meet again under legal and ethical concerns.
4. **Is it more than I need?** Pulling in a very large library for one tiny task can be wasteful.

Using libraries also changes how you test: you must still test **your use** of the library, including boundary cases and the documented conditions, even though you do not test the library's internal code.

## Common misconceptions

- **"I need to see a library's code to use it."** You need its documentation. The code is hidden behind the API.
- **"A library procedure always works for any input."** Documentation lists conditions (such as a non-empty list). Breaking them can cause errors.
- **"An API is a program."** An API is a *specification* of how to use a library's procedures.
- **"Using a library means my program needs no testing."** You must still test your use of it.
- **"Existing code can only come from other people."** It can also be your own earlier code.
- **"Libraries make programs faster by definition."** They make development faster and often more reliable; speed of running depends on the code.


## Where this leads

Libraries are what make random numbers possible in Topic 3.15, where `RANDOM(a, b)` is a ready-made procedure you call without knowing how it generates values, and simulations in Topic 3.16 depend on such libraries.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-14-libraries-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-14-libraries-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-14-libraries-checklist/). The next topic is [Topic 3.15, Random Values](/advanced-course-resources/computer-science-principles/3-15-random-values-study-guide/).
