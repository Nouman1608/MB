---
resourceId: "mb-ap-csp-3.2-revision-notes"
title: "Data Abstraction: Revision Notes (Computer Science Principles 3.2)"
description: "One-page recap of data abstraction and lists: indices from 1, mixed types, index errors, and the four-part pattern for explaining how an abstraction manages complexity."
course: "computer-science-principles"
unit: 3
topics: ["3.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.2-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.2-study-guide", "mb-ap-csp-3.2-practice", "mb-ap-csp-3.2-checklist"]
next: "mb-ap-csp-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A data abstraction names a collection of data without exposing how it is represented."
  - "A list is an ordered sequence of elements; in the exam notation the first index is 1."
  - "An index below 1 or above the list length produces an error and ends the program."
  - "Data abstraction manages complexity: fewer names, code that adapts to more data, easier maintenance."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- A **data abstraction** gives a collection of data a name **without** showing how it is represented.
- A **list** is an ordered sequence of **elements**; each element has an **index**. In the exam notation the first index is **1**.
- `[v1, v2, v3]` creates a list; `[]` creates an empty list. A list is **one value**, so a variable can hold it.
- A list can mix types, for example `["Aroha", 15, true]`.
- An index less than 1 or greater than the length gives an **error** and the program **terminates**.
- Data abstraction **manages complexity**: one name for many values, code that adapts when data grows, easier to develop and maintain.

## Key relationships

| Idea | Notation or rule | Example |
|---|---|---|
| Create a list | `aList ← [value1, value2, ...]` | `scores ← [12, 15, 9]` |
| Read an element | `aList[i]` | `scores[2]` is 15 |
| Last index | `LENGTH(aList)` | `scores[LENGTH(scores)]` is the last element |
| Empty list | `aList ← []` | `LENGTH([])` is 0 |
| Invalid index | Below 1 or above `LENGTH` | Error; program terminates |

## The four-part explanation

When asked how an abstraction manages complexity:

1. **Name** it (the list `playlist`).
2. Say what it **holds** (all the song titles).
3. Point to **where it is used** (the loop that plays each song).
4. Say what the program would need **without** it (a variable and a line of code per song) and why that is worse.

## Mistakes to avoid

- Counting from 0 in exam questions.
- Using `LENGTH(aList) + 1` as an index. The last valid index is `LENGTH(aList)`.
- Writing "it makes the code easier" with nothing specific.
- Forgetting that elements in one list can have different types.
- Treating a list as several variables rather than one value.

## Worked mini-example

```text
colours ← ["red", "green", "blue"]
DISPLAY(LENGTH(colours))
DISPLAY(colours[2])
DISPLAY(colours[LENGTH(colours)])
```

Output: `3 green blue`

`LENGTH` gives 3; `colours[2]` is the second element, green; `colours[LENGTH(colours)]` is `colours[3]`, blue. `colours[4]` would end the program with an error.

## Quick self-check

1. What index does the first element have?
2. What does `LENGTH([5, 6, 7, 8])` evaluate to?
3. Give two ways data abstraction helps manage complexity.

<details>
<summary>Answers</summary>

1. 1.
2. 4.
3. Any two: fewer names to track; code does not change when the amount of data changes; easier to develop and maintain; related data treated as one value.

</details>

## Where marks are won and lost

Two kinds of question dominate. The first gives a list and asks what an index expression evaluates to, or whether the program will stop with an error. The second asks you to explain how a list or other abstraction manages complexity. The explanation earns marks only when it is specific: say what the list holds, where the program uses it, and what would be harder without it. In the Create task, the written response about your list asks for exactly this reasoning, applied to your own code.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/) for worked examples and explanations.
