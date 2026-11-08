---
resourceId: "mb-ap-csp-3.14-revision-notes"
title: "Libraries: Revision Notes (Computer Science Principles 3.14)"
description: "One-page recap of libraries: APIs, documentation, internal and external code, benefits, documented conditions, and a short checklist for choosing and using a library procedure."
course: "computer-science-principles"
unit: 3
topics: ["3.14"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.14-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.14-study-guide", "mb-ap-csp-3.14-practice", "mb-ap-csp-3.14-checklist"]
next: "mb-ap-csp-3.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A software library contains procedures that can be used to create new programs."
  - "An API specifies how the procedures in a library behave and can be used; documentation is needed to understand them."
  - "Existing code may come from internal sources (your own earlier code) or external ones (libraries)."
  - "Libraries simplify the creation of complex programs and reduce development time and testing."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- A **software library** contains procedures that can be used in new programs.
- An **API** is a specification of how the library's procedures behave and are used.
- **Documentation** is necessary: the library code is usually hidden.
- Existing code can be **internal** (your earlier code) or **external** (a library).
- Libraries **simplify complex programs**, saving development time and testing.
- Always check the **conditions** in the documentation (for example "list not empty").

## Key relationships

| Term | Meaning | Example |
|---|---|---|
| Library | Collection of reusable procedures | NumberKit (fictional) |
| API | Specification of how to use them | `clamp(value, low, high)` returns ... |
| Documentation | Description you read to use the API | Parameters, return value, conditions |
| Internal code | Your own earlier code | A `grade` procedure from last project |
| External code | Written by others | A graphics library |
| Condition | What must hold when calling | `list is not empty` |

## Assumptions

- Questions give you the documentation; use only what it says.
- Library procedures are correct if used as documented.
- Calls inside calls are evaluated from the inside out.

## Method for using a library procedure

1. Read the documentation: name, parameters, return value, conditions.
2. Check that your arguments meet the conditions (guard with an IF if needed).
3. Store or use the returned value; the original data is not changed unless stated.
4. Test your call with typical, boundary and special inputs.

## Mistakes to avoid

- Assuming a procedure does more than the documentation says.
- Ignoring a documented condition.
- Forgetting to store the returned value.
- Believing the API is the code itself.
- Skipping testing because the library is "trusted".

## Worked mini-example

```text
DISPLAY(clamp(-8, 0, 100))
DISPLAY(clamp(250, 0, 100))
DISPLAY(clamp(40, 0, 100))
```

Output: `0 100 40`

The first value is below `low`, so `low` (0) is returned; the second is above `high`, so `high` (100) is returned; the third lies between them and is returned unchanged.

## Quick self-check

1. What does an API tell you?
2. Why might `average([])` be unsafe, according to the NumberKit documentation?
3. Give one benefit of using a library.

<details>
<summary>Answers</summary>

1. How the library's procedures behave and how to use them: parameters, return values and conditions.
2. The documentation says the list must not be empty, so an empty list breaks the condition.
3. Any one: saves development time; reduces testing; simplifies complex programs.

</details>

## Where marks are won and lost

Questions describe a library or give a short API listing and ask what a call returns, or which library procedure would solve a stated problem. Others ask why documentation is needed or what benefit a library gives. Use only the information given, respect stated conditions, and evaluate inner calls first. In the Create task, you may use code from a library but must identify code that is not your own in your written responses and show what you personally developed.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/) for worked examples and explanations.
