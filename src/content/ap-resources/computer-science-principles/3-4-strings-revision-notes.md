---
resourceId: "mb-ap-csp-3.4-revision-notes"
title: "Strings: Revision Notes (Computer Science Principles 3.4)"
description: "One-page recap of strings, concatenation and substrings: positions from 1, new strings from old, order and spaces matter, with a worked mini-example and common slips."
course: "computer-science-principles"
unit: 3
topics: ["3.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.4-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.4-study-guide", "mb-ap-csp-3.4-practice", "mb-ap-csp-3.4-checklist"]
next: "mb-ap-csp-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A string is an ordered sequence of characters, including spaces and punctuation."
  - "Concatenation joins strings end to end to make a new string; order matters."
  - "A substring is part of an existing string; the original is unchanged."
  - "\"7\" is a string and 7 is a number; joining number-strings gives text."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

## Recap

- A **string** is an ordered sequence of characters: letters, digits, spaces, punctuation.
- `""` is the **empty string** (length 0). `"7"` is a string; `7` is a number.
- **Concatenation** joins strings end to end and makes a **new** string. Order matters.
- A **substring** is a part of an existing string. The original does not change.
- In this pack: positions start at **1**, `substring(text, start, length)` and `concat(a, b)`. On the exam, use the definition the question supplies.

## Key relationships

| Task | Expression | Value |
|---|---|---|
| Join two strings | `concat("sun", "shine")` | `"sunshine"` |
| Join three strings | `concat(concat("a", "b"), "c")` | `"abc"` |
| First character | `substring("Mina", 1, 1)` | `"M"` |
| Last two characters of "2011" | `substring("2011", 3, 2)` | `"11"` |
| Grow a string in a loop | `result ← concat(result, "ab")` | `"ababab"` after three passes |
| Empty string | `""` | length 0 |

## Assumptions

- Strings are not changed by `substring` or `concat`; they return new strings.
- Substring requests in the examples stay inside the string.
- A question may use different names or a different counting convention. Follow the question.

## Method

1. Write the string with each character numbered above it.
2. Work out each `substring` by marking its characters.
3. Evaluate inner `concat` calls first.
4. Count the characters in your answer and compare with the expected length.

## Mistakes to avoid

- Reversing the order of a `concat`.
- Treating the third argument as an end position.
- Ignoring spaces inside quotes.
- Believing `substring` edits the original.
- Treating `"12"` as the number 12.

## Worked mini-example

```text
s ← "banana"
part ← substring(s, 2, 3)
DISPLAY(concat(part, "!"))
```

Output: `ana!`

`"banana"` is b-a-n-a-n-a. Three characters from position 2 are a, n, a, so `part` is `"ana"`, and joining `"!"` gives `"ana!"`.

## A second mini-example: a short code from a name

```text
name ← "Okafor"
tag ← concat(substring(name, 1, 2), substring(name, 5, 2))
DISPLAY(tag)
```

Output: `Okor`

Positions in `"Okafor"`: O-1, k-2, a-3, f-4, o-5, r-6. Two characters from position 1 are `"Ok"`; two characters from position 5 are `"or"`. Joined: `"Okor"`, four characters, which equals 2 + 2 ✓.

## Quick self-check

1. What is `concat("go", "al")`?
2. What is `substring("sunshine", 4, 3)`?
3. Are `"tea"` and `"eat"` the same string?

<details>
<summary>Answers</summary>

1. `"goal"`.
2. `"shi"` (positions 4, 5 and 6 are s, h, i).
3. No. The same characters in a different order are different strings.

</details>

## Where marks are won and lost

String questions are usually short evaluation tasks: given a string variable and one or two procedures defined in the question, state the final string. Marks go to candidates who track positions carefully and who remember that concatenation order matters. A second pattern asks which of four code segments builds a required string. Check the lengths first: if the target has 9 characters, a correct answer must produce 9. In the Create task, strings often appear as messages or labels in your own procedure.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-4-strings-study-guide/) for worked examples and explanations.
