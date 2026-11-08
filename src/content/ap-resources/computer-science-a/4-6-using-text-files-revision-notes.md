---
resourceId: "mb-ap-csa-4.6-revision-notes"
title: "Using Text Files: Revision Notes (Computer Science A 4.6)"
description: "A short recap of reading text files in Java: the File and Scanner pattern, the Scanner methods in the Quick Reference, split, exceptions and common slips."
course: "computer-science-a"
unit: 4
topics: ["4.6"]
resourceType: "revision-notes"
prerequisites:
  - "while loops and the hasNext idea of looping until data runs out (Topic 2.7)"
  - "String methods and calling methods on objects (Topics 1.14 and 1.15)"
  - "Parsing a String to a number is new here; the wrapper-class topic (4.7) goes deeper"
learningObjectives:
  - "Recall the standard file-reading pattern"
  - "Recall each Scanner method in the Quick Reference and the exception each can throw"
  - "Avoid the common slips"
skills: ["2", "3", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam. Trace by hand and write the Java Quick Reference method names exactly."
related: ["mb-ap-csa-4.6-study-guide", "mb-ap-csa-4.6-practice", "mb-ap-csa-4.6-checklist"]
next: "mb-ap-csa-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a", "exam-computer-science-a"]
keyPoints:
  - "Pattern: File, Scanner, while (in.hasNext()), read, close."
  - "Header must include throws IOException; imports are java.io.File, java.io.IOException and java.util.Scanner."
  - "next() and the numeric methods read tokens; nextLine() reads the rest of the line."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

Full explanation, traces and examples: [Topic 4.6 study guide](/advanced-course-resources/computer-science-a/4-6-using-text-files-study-guide/).

## Recap

A **file** stores data that persists after the program ends. A program reads it by creating a `File` object from the file name and a `Scanner` from that `File`. The Scanner returns data **forward only**, a token or a line at a time.

```java
Scanner in = new Scanner(new File(fileName));
while (in.hasNext())
{
    // read with in.next(), in.nextInt(), in.nextDouble(), in.nextBoolean() or in.nextLine()
}
in.close();
```

The method that contains this code needs `throws IOException` in its header. `File` and `IOException` come from `java.io`; `Scanner` comes from `java.util`. Both need `import` statements.

## Key relationships

| Item | Meaning | Remember |
|---|---|---|
| `File(String str)` | opens the file named `str` for reading | only creates the link; no reading yet |
| `Scanner(File f)` | Scanner that reads from `f` | needs `throws IOException` |
| `hasNext()` | is there another token? | looks only; does not move the cursor |
| `next()` | next token as `String` | stops at whitespace |
| `nextInt()`, `nextDouble()`, `nextBoolean()` | next token as that type | `InputMismatchException` if the token is the wrong kind |
| `nextLine()` | rest of the line | may return `""` straight after another reading method |
| `close()` | finished with the file | call it after the loop |
| `split(String del)` | `String[]` of pieces around `del` | trailing empty pieces are dropped |

## Assumptions the standard loop makes

- The file exists at the stated path (otherwise the program terminates).
- Every token has the kind the method expects.
- Records are complete: a line has all of its fields before it is split.
- Mixing `nextLine` with other Scanner methods on one source is outside the exam scope.

## Mistakes to avoid

1. Leaving out `throws IOException` or an import.
2. Treating `nextInt()` as reading a whole line.
3. Calling `nextInt()` twice when you meant to reuse one value.
4. Using `>=` instead of `>` when the first of several tied records must win.
5. Using `hasNext()` as if it advanced the cursor.
6. Assuming `"a,b,,".split(",")` has four elements. Trailing empty strings are removed, so it has two (checked by running it).
7. Forgetting that an empty file means the loop body never runs.

## A mini-example to rehearse

A file `rain.txt` holds `12 0 7` / `3 25` / `0 8 1`. The loop `while (in.hasNext()) { total += in.nextInt(); }` runs **eight** times (one per token, not one per line) and leaves `total` at 56. If one token were the word `two`, the third `nextInt()` would throw `InputMismatchException` and `total` would never be returned.

For records such as `Bilal,88` read with `nextLine()`, the pattern is: `String[] parts = in.nextLine().split(",");` then `parts[0]` is the name and `Integer.parseInt(parts[1])` is the score. Keep the best-so-far in two variables and use strict `>` so that the first of two tied records stays.

## How this topic is usually tested

- **Trace a loop** over a file described in words or as a table, and give the final value of a variable.
- **Spot the missing piece**: a missing `throws IOException`, a missing `import`, no `close()`, or a loop that reads two tokens per pass.
- **Predict an exception**: wrong-kind token, no data left, or a missing file.
- **Write a method** that reads numbers or records and returns a total, a count, a maximum or an average.

When you write code, state the loop condition first (`hasNext()`), then decide whether each pass reads a token or a line, and only then write the body.

## Quick self-check

1. A file holds `4 9 2`. A loop adds each `nextInt()` to `total` while `hasNext()`. What is `total`? **15**
2. Which header is needed for a method that builds a `Scanner` from a `File`? **`throws IOException`** (or code that handles it).
3. What does `"Bilal,88".split(",")[1]` return? **`"88"`, a `String`.**
4. A file holds `5 8 two 3`. What is thrown by a `nextInt()` loop? **`InputMismatchException`** when it reaches `two`.
5. How many times does a `next()` loop run for a file with `the cat sat` and `on the mat` on two lines? **6**, one per token.
