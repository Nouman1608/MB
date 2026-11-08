---
resourceId: "mb-ap-csp-3.2-study-guide"
title: "Data Abstraction: Study Guide (Computer Science Principles 3.2)"
description: "How lists give a collection of data one name, why data abstraction manages complexity, how to avoid index errors, and how to write the explanation the exam expects. Two worked examples."
course: "computer-science-principles"
unit: 3
topics: ["3.2"]
resourceType: "study-guide"
prerequisites:
  - "Variables and assignment (Topic 3.1)"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Explain what a data abstraction is and how a list provides one"
  - "Use list notation, indexes and mixed-type elements correctly"
  - "Predict when an index causes an error"
  - "Explain how data abstraction manages complexity in a given program"
skills: ["3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.2-revision-notes", "mb-ap-csp-3.2-practice", "mb-ap-csp-3.2-checklist"]
next: "mb-ap-csp-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A data abstraction names a collection of data without exposing how it is represented."
  - "A list is an ordered sequence of elements; in the exam notation the first index is 1."
  - "An index below 1 or above the list length produces an error and ends the program."
  - "Data abstraction manages complexity: fewer names, code that adapts to more data, easier maintenance."
  - "A strong explanation names the abstraction, says what it holds, and states why the program would be harder without it."
faqs:
  - question: "What is the difference between a list and a data abstraction?"
    answer: "A list is a data structure. A data abstraction is the idea of giving a collection of related data one name and hiding the representation details; lists are one way to create one."
  - question: "Where does a list start counting?"
    answer: "In the exam reference notation the first element is at index 1 and the last is at the index equal to the length of the list."
  - question: "What happens if I use an index that does not exist?"
    answer: "The reference notation says an error message is produced and the program terminates."
  - question: "Can one list hold numbers and strings together?"
    answer: "Yes. Elements of a data abstraction often have different types, such as a name, an age and a Boolean."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Abstraction means focusing on what matters and hiding what does not. A map is an abstraction of a town: it leaves out the colour of the doors so you can see the roads. **Data abstraction** applies the same idea to information in a program. Instead of juggling many separate values, you give a whole collection of data one name and work with it as a single thing. In this course the main tool for that is the **list**. This topic explains how lists work, how data abstraction manages complexity, and how to write the kind of explanation the exam (and the Create performance task) asks for.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## What data abstraction is

A **data abstraction** gives a collection of data a name *without* referring to the specific details of how the data is represented. The key phrase from the course is a **separation between the abstract properties of a data type and the concrete details of its representation**.

A concrete example: a quiz has five scores. You could create five variables, `score1` to `score5`. Or you could create one list called `scores` that holds all five. Code that works on `scores` does not care whether there are five items or five thousand. The *abstract* idea ("the scores for this quiz") is separated from the *concrete* detail ("exactly which five numbers are stored, and where").

Data abstraction **manages complexity** in three ways:

- **Fewer names to track.** One name stands for many values, so the code is shorter and easier to read.
- **Code that adapts.** If the amount of data changes, code written against the list name usually does not have to change. Without a list you would have to add a new variable and edit every line that uses it.
- **Easier to develop and maintain.** Programmers can reason about "the scores" as one unit, test it once, and fix it in one place.

## Lists: the abstraction you must know

A **list** is an ordered sequence of **elements**. Each element has a unique **index**, a natural number that refers to its position. In the exam notation the first element is at index **1** and the last is at index `LENGTH(aList)`.

```text
scores ← [12, 15, 9, 18, 14]
empty ← []
```

The first line creates a list with five elements and assigns it to `scores`. The second creates a new empty list. A variable holds one value at a time, and that value can be a whole list, so a list lets multiple related items be treated as **a single value**. Other languages call a list an *array*; linked lists are outside this course.

<figure>
<svg viewBox="0 0 400 120" role="img" aria-labelledby="f32-t f32-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f32-t">The list scores with its indices</title>
<desc id="f32-d">A row of five boxes labelled with indices 1 to 5 holding the values 12, 15, 9, 18 and 14. The box at index 3 is highlighted and labelled scores[3] equals 9.</desc>
<rect x="0" y="0" width="400" height="120" fill="#ffffff"/>
<defs><marker id="f32-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="10" y="28" text-anchor="start" font-size="14" font-weight="bold" fill="#1d2b44">scores</text><text x="108.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">1</text><rect x="80" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="108.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">12</text><text x="164.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">2</text><rect x="136" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="164.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">15</text><text x="220.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">3</text><rect x="192" y="58" width="56" height="38" fill="#fff4d6" stroke="#1d2b44" stroke-width="4"/><text x="220.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">9</text><text x="220.0" y="112" text-anchor="middle" font-size="11" font-weight="normal" fill="#1d2b44">scores[3]</text><text x="276.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">4</text><rect x="248" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="276.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">18</text><text x="332.0" y="50" text-anchor="middle" font-size="12" font-weight="normal" fill="#1d2b44">5</text><rect x="304" y="58" width="56" height="38" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="332.0" y="82" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">14</text>
</svg>
<figcaption>Figure 1. The list <code>scores</code>. Indices start at 1. The highlighted element is <code>scores[3]</code>, which holds 9.</figcaption>
</figure>

**Index errors.** If you use an index smaller than 1 or larger than the length of the list, the reference notation says an error message is produced and the program terminates. With `scores` above, `scores[0]` and `scores[6]` are both errors.

**Mixed types.** A list can hold different kinds of values together. A data abstraction for one student might be:

```text
student ← ["Aroha", 15, true]
DISPLAY(student[1])
DISPLAY(student[2] + 1)
DISPLAY(student[3])
```

Output: `Aroha 16 true`

Here element 1 is a name (string), element 2 is an age (number) and element 3 is a Boolean (for example "has handed in the form"). Treating the three together as `student` is a data abstraction. The price is that the programmer must remember what each position means, so a comment or documentation helps.

## Generalising a data source with a variable

A skill the course names explicitly is to **generalise data sources through variables**. If your program reads a value typed by a user, a sensor reading or a score, you store it in a variable or list instead of writing the specific value into every line. The code then works for *any* data that arrives, not just the example you tested with.

## Worked example 1: the same task with and without a list

A teacher wants the total of five quiz scores: 12, 15, 9, 18 and 14.

**Without a list** the code needs one variable per score and one line per addition:

```text
score1 ← 12
score2 ← 15
score3 ← 9
score4 ← 18
score5 ← 14
total ← score1 + score2 + score3 + score4 + score5
DISPLAY(total)
```

Output: `68`

**With a list** the data has one name and the loop does not mention how many scores there are:

```text
scores ← [12, 15, 9, 18, 14]
total ← 0
FOR EACH score IN scores
{
  total ← total + score
}
DISPLAY(total)
```

Output: `68`

**Step 1. Trace the list version.**

| Pass through loop | score | total |
|---|---|---|
| before the loop | – | 0 |
| 1 | 12 | 12 |
| 2 | 15 | 27 |
| 3 | 9 | 36 |
| 4 | 18 | 54 |
| 5 | 14 | 68 |

**Step 2. Add a sixth score of 10.** In the list version, change one line: `scores ← [12, 15, 9, 18, 14, 10]`. The loop is untouched and displays 78. In the version with variables you must add `score6 ← 10` *and* edit the `total` line. With 30 pupils that is 30 variables and a very long expression.

**Step 3. Check.** 12 + 15 + 9 + 18 + 14 = 68 ✓. Adding 10 gives 78 ✓.

**Why this is data abstraction.** The name `scores` hides the detail of how many values there are. The loop only needs to know "for each element".

## Explaining how an abstraction manages complexity

Exam questions, and the written responses for the Create task, ask you to *explain* the benefit. A strong explanation has three parts: **name** the abstraction, say **what it stores or does**, and say **why the program would be harder or longer without it**. "It makes the program easier" on its own is too vague.

## Worked example 2: writing the explanation

A fictional music app keeps song titles in a list called `playlist`. A loop plays each song with `FOR EACH song IN playlist`. Explain how the list manages complexity.

**Weak response:** "The list is used to store the songs so the program is simpler." This names the list and gives a claim, but never says *what would go wrong without it* or *how* it helps.

**Strong response:** "The list `playlist` stores all the song titles under one name. The loop `FOR EACH song IN playlist` plays every title without the code mentioning how many songs there are, so adding or removing a song only changes the list, not the code. Without the list, the program would need a separate variable for every song and a separate line of code to play each one, which is longer and would have to be edited whenever the number of songs changed."

**Why it scores.** It (1) names the abstraction, (2) says what it holds, (3) links it to a specific line of the program, (4) states the alternative without a list and why it is worse. Use that four-part pattern for any question that asks how an abstraction manages complexity.

**Check yourself.** If you cannot say what the program would look like *without* the abstraction, the explanation is probably too general.

## Choosing what the abstraction hides

Every abstraction hides some details and shows others. A list `temperatures` hides the sensor that took each reading, which is fine if the program only needs the numbers. If the program also needs *when* each reading was taken, the abstraction has hidden something it should have kept, and you would add a second list or store pairs. Good data abstraction keeps exactly the detail the program needs.

## Common misconceptions

- **"A list is the same as several variables."** A list is *one* value that contains many elements, which is what allows a loop to process all of them at once.
- **"The first element is at index 0."** In the exam notation it is index 1. (Several real languages start at 0; do not carry that habit into the exam.)
- **"Abstraction means making things vague."** Abstraction hides *unnecessary* details so that the important structure is clear.
- **"Data abstraction only saves typing."** Saving typing is a small benefit. The larger benefit is code that continues to work when the data changes.
- **"An out-of-range index just gives an empty value."** In the reference notation it produces an error message and the program terminates.
- **"Using a list always manages complexity."** Only if it is used so that the program is simpler than it would be without it. A list that is created but never needed does not.


## Where this leads

In Topic 3.10 you will use list operations (insert, append, remove, length) and traversals in earnest. Data abstraction returns in Topic 3.13 as **procedural abstraction**, which hides what a procedure does internally instead of how data is stored.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-checklist/). The next topic is [Topic 3.3, Mathematical Expressions](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/).
