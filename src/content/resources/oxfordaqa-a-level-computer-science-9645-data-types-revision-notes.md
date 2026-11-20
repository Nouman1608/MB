---
title: "OxfordAQA A-Level Computer Science (9645): Data types -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Data Types Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
  - qualification: "a-level"
    topic: "procedural-programming"
    subtopic: "data-types-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.1.1 Data types: the six types, how to choose one, conversion traps, type hints and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.1.1 Data types** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (AS content in topic 3.1 Procedural programming). For longer explanations and worked examples, see the [data types study guide](/resources/oxfordaqa-a-level-computer-science-9645-data-types/); then practise with the [data types practice questions](/resources/oxfordaqa-a-level-computer-science-9645-data-types-practice/).

## What the specification requires

- Understand the **concept of a data type**.
- Understand and **use appropriately** these types: **integer**, **real/float**, **Boolean**, **character**, **string**, **date/time**.
- Python users may use **type hints** to become familiar with data types, but this is not a requirement.

## Key terms

| Term | Meaning |
|---|---|
| Data type | A definition of the kind of value a variable holds, the operations allowed on it and how it is stored |
| Integer | A whole number, with no fractional part |
| Real / float | A number with a fractional part, stored with limited precision |
| Boolean | A value that is either True or False |
| Character | A single symbol such as a letter, digit or space |
| String | A sequence of characters |
| Date/time | A value representing a calendar date, a time of day, or both |
| Type conversion | Changing a value from one type to another, for example `int("42")` |
| Truncation | Dropping the fractional part, so `int(3.99)` gives 3 |
| Type hint | A Python annotation that documents the expected type; it is not enforced |

## The six types at a glance

| Type | Example values | Typical use | Watch out for |
|---|---|---|---|
| Integer | `42`, `-7`, `0` | Counts, indexes, scores | DIV and MOD behave differently from `/` |
| Float | `3.14`, `-0.5` | Measurements, averages | Rounding errors; do not test for equality |
| Boolean | True, False | Flags, conditions | Results of comparisons are Booleans |
| Character | `'A'`, `'7'` | One symbol | `'7'` is not the number 7 |
| String | `"Hello"` | Names, addresses | `"9" < "12"` is False |
| Date/time | 2026-11-20 | Deadlines, ages | Sort as dates, not as text |

## Choosing a type: three tests

1. **Arithmetic?** If you will not do arithmetic on it, use a string.
2. **Fractional part?** If yes, float. If always whole, integer.
3. **Leading zeros or formatting?** If they matter, use a string.

| Data | Type | One-line reason |
|---|---|---|
| Phone number | String | Leading zero kept; no arithmetic |
| Number of tickets | Integer | Whole count |
| Temperature | Float | Fractional values possible |
| Is the door open? | Boolean | Two states only |
| Single menu choice | Character | One symbol |
| Date of birth | Date/time | Calendar arithmetic |
| Price in pence | Integer | Avoids float rounding in money |

Always give a **reason tied to the data**, not just the type name.

## Worked reminder: converting types

Python results, recomputed:

| Expression | Result | Type of result |
|---|---|---|
| `7 / 2` | `3.5` | float |
| `7 // 2` | `3` | integer |
| `7 % 2` | `1` | integer |
| `int(3.99)` | `3` | integer |
| `"4" + "2"` | `"42"` | string |
| `int("4") + int("2")` | `6` | integer |
| `"Score: " + str(42)` | `"Score: 42"` | string |
| `0.1 + 0.2` | `0.30000000000000004` | float |
| `"9" < "12"` | False | Boolean |
| `int("9") < int("12")` | True | Boolean |

`int("forty")` and `int("3.7")` both raise a `ValueError`.

## Fixed-size values

- *n* bits give 2^*n* different values.
- An unsigned integer in *n* bits runs from 0 to 2^*n* − 1. For 16 bits, that is 0 to 65,535.
- A fixed-size integer type has a limited range. A result outside it overflows. For example, C# `int` runs from −2,147,483,648 to 2,147,483,647, whereas Python integers grow as needed.

## Typing in different languages

| | Static typing (C#, VB.Net) | Dynamic typing (Python) |
|---|---|---|
| Type belongs to | The variable | The value |
| Declared | Yes, at declaration | No |
| Type errors found | Before the program runs | When the line runs |

Python type hints look like `def area(w: float, h: float) -> float:`. Python does not check them while running.

## Exam traps

- **Phone numbers and postcodes** are strings, not integers.
- **Input is a string.** Convert it before comparing or calculating.
- **Character versus string.** A character is one symbol; a string is a sequence of symbols (possibly of length one).
- **`'7'` versus 7.** One has a character code, the other is a number.
- **Truncation versus rounding.** `int(3.99)` is 3; `round(3.99)` is 4.
- **Float equality.** Compare a difference with a tolerance instead of using `==`.
- **Weak reasons.** "Because it is a number" is not enough; say whether arithmetic is performed.

## Quick self-test

1. Name the six data types in the specification.
2. Which type should store the value 1.82 and why?
3. Which type should store `07700 900123` and why?
4. What does `7 // 2` give, and what does `7 / 2` give?
5. What is the result of `"4" + "2"` in Python?
6. Why is `"9" < "12"` False?
7. What does `int(3.99)` give?
8. How many different values can 5 bits represent?
9. What is the largest unsigned integer in 12 bits?
10. Does Python enforce type hints at run time?
11. Why is a date/time type better than a string for a deadline?
12. Why might a program store a price as a whole number of pence?

### Answers

1. Integer, real/float, Boolean, character, string, date/time.
2. Float, because it has a fractional part.
3. String, because it has a leading zero and is not used in arithmetic.
4. 3 (integer division); 3.5 (real division).
5. `"42"`, by concatenation.
6. Strings compare character by character, and the code for `'9'` (57) is larger than the code for `'1'` (49).
7. 3 (truncation).
8. 2^5 = 32.
9. 2^12 − 1 = 4,095.
10. No. Hints document the expected types but are not enforced.
11. It supports calendar arithmetic and sorts in true date order.
12. Floats can store money inexactly; whole pence are exact.

## Next steps

- [Data types study guide](/resources/oxfordaqa-a-level-computer-science-9645-data-types/)
- [Data types practice questions](/resources/oxfordaqa-a-level-computer-science-9645-data-types-practice/)
- [Procedural programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.1.1 Data types.
