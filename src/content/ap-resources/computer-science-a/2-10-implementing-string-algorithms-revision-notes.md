---
resourceId: "mb-ap-csa-2.10-revision-notes"
title: "Implementing String Algorithms: Revision Notes (Computer Science A 2.10)"
description: "One-page recap of standard algorithms that process strings with loops: the rules, a key-relationships table, mistakes to avoid and a short self-check with answers."
course: "computer-science-a"
unit: 2
topics: ["2.10"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csa-2.10-study-guide"]
learningObjectives:
  - "Traverse a String with a loop using length and substring(i, i + 1), without going out of range"
  - "Write standard string algorithms: check a property, count matching substrings, and build a reversed string"
skills: ["2", "3"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Java Quick Reference methods are used only as the course defines them."
related: ["mb-ap-csa-2.10-study-guide", "mb-ap-csa-2.10-practice", "mb-ap-csa-2.10-checklist"]
next: "mb-ap-csa-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources:
  - "ced-computer-science-a"
  - "page-computer-science-a"
  - "exam-computer-science-a"
keyPoints:
  - "A String of length n has valid indexes 0 to n - 1. substring(a, b) returns the characters from index a up to, but not including, index b."
  - "To visit every character, loop i from 0 to length() - 1 and use substring(i, i + 1)."
  - "Compare the contents of strings with equals (never ==), and use indexOf to test whether a piece occurs: -1 means not found."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
---

## Recap

String algorithms combine loops with `length`, `substring`, `indexOf`, `equals` and `compareTo`.

| To do this | Write this |
|---|---|
| Visit each character | `for (int i = 0; i < s.length(); i++)` |
| The character at `i` | `s.substring(i, i + 1)` |
| Test a letter | `s.substring(i, i + 1).equals("a")` |
| Test membership in a set of letters | `"aeiou".indexOf(letter) >= 0` |
| A window of length `k` | `s.substring(i, i + k)`, with `i <= s.length() - k` |
| Build a string in order | `result = result + piece;` |
| Build a reversed string | `result = piece + result;` |
| Palindrome | `s.equals(reverse(s))` |

## Key relationships

| Idea | Rule |
|---|---|
| Valid indexes | 0 to `length() - 1` |
| `substring(a, b)` | from `a` up to but not including `b`; length `b - a` |
| `substring(a)` | from `a` to the end; `a` may equal `length()` (empty result) |
| Not found | `indexOf` returns -1 |
| Immutable | methods return new Strings; assign the result |
| Compare contents | `equals`; order with `compareTo` (negative, zero, positive) |

## Assumptions

- Only the Quick Reference String methods are used.
- Characters are handled as one-letter `String` objects.
- Strings are not null.

## Mistakes to avoid

- Running the loop to `i <= s.length()`.
- Using `==` instead of `equals`.
- Calling `substring` without storing the result.
- Using `<` where the last window needs `<=`.
- Reversing by appending instead of prepending.
- Testing `indexOf(...) > 0` when index 0 is valid.

## Worked mini-example

What does this print?

```java
String s = "level up";
int count = 0;
for (int i = 0; i < s.length(); i++) {
    if (s.substring(i, i + 1).equals("l")) {
        count++;
    }
}
System.out.println(count + " " + s.indexOf("up") + " " + s.substring(2, 5));
```

The string is `l e v e l _ u p` with indexes 0 to 7. The letter "l" is at indexes 0 and 4, so `count` is 2. `indexOf("up")` is 6. `substring(2, 5)` takes indexes 2, 3, 4: "vel". The output is `2 6 vel`.

## Window loop checklist

When a loop must examine a **window** of `k` characters at a time, work through these steps before writing code. First, say what the window is: `s.substring(i, i + k)`. Second, find the first start index (0) and the last start index (`s.length() - k`), and write the loop test to include the last one: `i <= s.length() - k`. Third, check the shortest legal input: if `s` is shorter than `k` the loop should simply not run. Fourth, decide what to do with each window (compare it with `equals`, count it, or add part of it to a new String). For single characters, `k` is 1 and the last start index is `s.length() - 1`, which is why `i < s.length()` is the correct test.

## Quick self-check

1. What is `"computer".substring(3, 6)`? *Answer: "put".*
2. Which loop test visits each character exactly once? *Answer: `i < s.length()` (with `i` from 0).*
3. What does `"hello".indexOf("l")` return? *Answer: 2, the first occurrence.*
4. Why does `s.substring(3);` on its own statement not change `s`? *Answer: Strings are immutable, and the result is discarded.*

Full explanations and diagrams are in the [Topic 2.10 study guide](/advanced-course-resources/computer-science-a/2-10-implementing-string-algorithms-study-guide/).
