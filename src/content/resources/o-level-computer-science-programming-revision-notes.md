---
title: "O Level Computer Science: Programming — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
description: "Topic 8 recall notes for Cambridge O Level Computer Science 2210: choosing data types and loops, string and library drills, scope, arrays and file commands."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 8 of Cambridge O Level Computer Science (2210) is tested on Paper 2 by asking you to read, complete and write pseudocode. Most lost marks come from a few small decisions: the wrong data type, the wrong loop, a misread SUBSTRING, a total reset in the wrong place or a file opened in the wrong mode. These notes are arranged as decision guides and quick drills so you can make each choice correctly under time pressure.

Condensed for the final weeks. For full explanations built around one example program, use the
[Programming study guide](/resources/o-level-computer-science-programming/); for exam questions, use the
[Programming practice questions](/resources/o-level-computer-science-programming-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 8.1.1–8.1.3 | Variables and constants; integer, real, char, string, Boolean; input and output |
| 8.1.4 | Sequence; IF and CASE; count-controlled, pre-condition and post-condition loops; totalling and counting; string handling (length, substring, upper, lower); arithmetic, relational and logical operators |
| 8.1.5 | Nested selection and iteration (up to three levels) |
| 8.1.6 | Procedures, functions, parameters (up to three); local and global variables |
| 8.1.7 | Library routines MOD, DIV, ROUND, RANDOM |
| 8.1.8 | Maintainable programs: meaningful identifiers, comments, subroutines |
| 8.2 | 1D and 2D arrays; variables as indexes; reading and writing with (nested) iteration |
| 8.3 | Purpose of files; open, close, read and write single items and lines of text |

## Decision guide: which data type?

| Ask yourself | Choose |
|---|---|
| Only TRUE/FALSE or yes/no? | BOOLEAN |
| Exactly one character? | CHAR |
| Text, or digits never used in arithmetic (phone number, code with leading zero)? | STRING |
| A count or whole number used in calculations? | INTEGER |
| Money, measurements or anything with decimals? | REAL |

## Decision guide: which loop?

| Situation | Loop |
|---|---|
| You know how many times (30 students, 12 months) | `FOR ... TO ... NEXT` |
| It might not need to run at all | `WHILE ... DO ... ENDWHILE` |
| It must run at least once (menu, input then check) | `REPEAT ... UNTIL` |

## Decision guide: IF or CASE?

Use `CASE OF` when **one** variable is compared with several fixed values; put `OTHERWISE` last. Use `IF` for ranges or conditions combining several variables.

## Drill: string functions

`Code ← "MB-2210-OL"` (10 characters)

| Expression | Value | Why |
|---|---|---|
| `LENGTH(Code)` | 10 | Count every character, including hyphens |
| `SUBSTRING(Code, 4, 4)` | "2210" | Start at position 4, take **4 characters** |
| `SUBSTRING(Code, 9, 2)` | "OL" | Positions 9 and 10 |
| `LCASE(SUBSTRING(Code, 1, 2))` | "mb" | Innermost function first |

## Drill: library routines

| Expression | Value |
|---|---|
| `DIV(250, 60)` | 4 |
| `MOD(250, 60)` | 10 |
| `ROUND(3.14159, 2)` | 3.14 |
| `ROUND(Total / Count, 1)` with Total = 47, Count = 6 | 7.8 |
| `MOD(Number, 2) = 0` | TRUE when Number is even |

Order matters: `ROUND(Total / Count, 1)` divides first, then rounds; `ROUND(Total, 1) / Count` does not round the answer.

## Subroutines in four lines

- **Procedure**: performs a task; run with `CALL Name(arguments)`.
- **Function**: returns a value with `RETURN`; header ends `RETURNS <type>`; used inside an expression.
- **Parameter**: a value passed in, declared with its data type, e.g. `(Width : REAL)`.
- **Local** variable: declared inside a subroutine, exists only there. **Global**: available to the whole program.

## Arrays at a glance

```
DECLARE Rainfall : ARRAY[1:12] OF REAL
DECLARE Grid : ARRAY[1:5, 1:5] OF CHAR
```

- Use the loop counter as the index: `Rainfall[Month]`, not `Rainfall[1]`, inside a loop.
- 2D arrays need nested loops — outer for rows, inner for columns.
- The first index can be 0 or 1; check the declaration in the question.

## File commands at a glance

| Command | Use |
|---|---|
| `OPENFILE "Log.txt" FOR READ` | Open to read existing data |
| `OPENFILE "Log.txt" FOR WRITE` | Create a new file (existing contents are lost) |
| `READFILE "Log.txt", LineOfText` | Read one item or line into a variable |
| `WRITEFILE "Log.txt", LineOfText` | Write one item or line |
| `CLOSEFILE "Log.txt"` | Close the file when finished |

Purpose of files: data is kept after the program ends and can be reused or shared.

## Maintainability checklist

Meaningful identifiers · comments that explain sections · procedures and functions to avoid repeated code · constants for fixed values.

## 2210 and its sibling syllabus

Topic 8 in 2210 has the same content and the same pseudocode guide as Cambridge IGCSE Computer Science (0478).

## Exam traps

Drawn from our [practice page](/resources/o-level-computer-science-programming-practice/), which paraphrases the Cambridge 2210 June 2025 mark schemes and lists where marks are usually lost:

- Writing `ROUND(Total, 2) / 6` so rounding happens before division, or leaving out the number of decimal places.
- Reading the third SUBSTRING parameter as an end position rather than a length, or counting from 0 when the question uses 1.
- Using a fixed index such as `Scores[1]` inside a loop instead of the loop counter.
- Starting a "highest" variable at a large value (or "lowest" at a small one), so it is never replaced.
- Putting the final OUTPUT inside the loop, so it prints on every pass.

## Frequently asked questions

**How many parameters can a 2210 procedure or function have?**
The syllabus says procedures and functions may have up to three parameters in the exam.

**Is RANDOM() a whole number?**
No. In Cambridge pseudocode RANDOM() returns a number between 0 and 1 inclusive; multiply and ROUND it to get a whole number in a range.

**Can I use a WHILE loop for validation?**
Yes. Input once, then `WHILE` the value is invalid, output an error and input again. A REPEAT loop also works, because the input must happen at least once.

## Self-test

1. Choose a data type for a postcode, a temperature in °C to one decimal place and a yes/no answer.
2. State `DIV(77, 10)` and `MOD(77, 10)`.
3. What does `SUBSTRING("Peshawar", 2, 4)` return?
4. Which loop always executes its body at least once?
5. Why should a file be closed after use?

**Answers:** 1. STRING; REAL; BOOLEAN. 2. 7 and 7. 3. "esha". 4. The post-condition loop, REPEAT ... UNTIL. 5. So the data is saved correctly and the file is released for other use; the syllabus pseudocode closes every file once it is no longer needed.
