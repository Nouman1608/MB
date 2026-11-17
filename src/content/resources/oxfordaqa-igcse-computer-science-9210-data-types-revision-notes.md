---
title: "OxfordAQA IGCSE Computer Science (9210): Data types -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.01
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-types-9210"
description: "Revision notes on OxfordAQA IGCSE Computer Science 9210 section 3.2.1: the five data types, choosing them for real data, key terms, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

Condensed notes for section **3.2.1 Data types** of OxfordAQA International GCSE Computer Science (9210). For full
explanations and a worked example, use the [data types study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-types/).

## What the specification asks

- Understand the **concept** of a data type.
- Understand and use **integer, real, Boolean, character, string** appropriately.
- Languages may use other names (real may be called *float*); **exams use the general names**.

## The concept in one line

A data type defines **what kind of value** is held, **which operations** can be done on it and **how it is
stored** in binary.

## The five types

| Type | Holds | Examples | Typical uses |
|---|---|---|---|
| Integer | Whole numbers (positive, negative, zero) | `-4`, `0`, `120` | Counts, ages in years, scores, loop counters, array indexes |
| Real | Numbers with a fractional part | `2.5`, `-0.25`, `19.99` | Prices, lengths, temperatures, averages |
| Boolean | True or False only | `True` | Flags and states: `LoggedIn`, `Found`, `GameOver` |
| Character | Exactly one symbol | `'B'`, `'9'`, `'#'` | Grade letter, menu choice, one-letter code |
| String | A sequence of characters (can be empty) | `"Lahore"`, `""` | Names, postcodes, phone numbers, passwords |

## Decision rules for choosing a type

1. Only two states? → **Boolean**.
2. Exactly one symbol, always? → **character**.
3. Contains letters, spaces or symbols, or has leading zeros? → **string**.
4. A number you never do arithmetic on (an identifier)? → **string**.
5. A number that can have a fractional part (measured, money, averages)? → **real**.
6. A whole number you count or calculate with? → **integer**.

Apply the rules in this order and the awkward cases sort themselves out: a phone number reaches rule 3 or 4
before it reaches rule 6.

## Typical exam data and the right answer

| Data | Type | Key reason |
|---|---|---|
| Number of pupils in a class | Integer | Counted, always whole |
| Average mark of a class | Real | Division usually gives a fractional part |
| Mobile number `07911 123456` | String | Leading zero, space, no arithmetic |
| Whether a book is on loan | Boolean | Two states |
| Shoe size `7.5` | Real | Can be a half size |
| Year group `10` | Integer | Whole number, may be compared |
| Blood group `"AB+"` | String | More than one symbol |
| Answer to a multiple-choice question `'C'` | Character | One symbol |
| Bank account number `00123456` | String | Leading zeros, identifier |

## How type affects operations

- `"12" + "30"` gives `"1230"` (string concatenation); `12 + 30` gives `42`.
- Keyboard input usually arrives as a **string**, so convert it before arithmetic (string conversion is 3.2.8).
- Real division `/` gives a real result, so store it in a real variable even if both inputs are integers.
- A Boolean can be used directly as a condition: `IF Found THEN` needs no `= True`.

## Key terms

| Term | Meaning |
|---|---|
| Data type | The kind of value a variable, constant or field holds, which fixes the allowed values and operations |
| Integer | A whole number with no fractional part |
| Real | A number that may have a fractional part (often called float in languages) |
| Boolean | A type with only the values True and False |
| Character | A single letter, digit, symbol or space |
| String | An ordered sequence of zero or more characters |
| Empty string | A string containing no characters, written `""` |

## Exam traps

- **"Float" in an answer** where the specification name is **real**. Use the exam's names.
- **Phone numbers and IDs as integers.** Leading zeros vanish; arithmetic on them is meaningless.
- **"Integer, because it is a number."** That is not a justification. Say *why* it is whole and why it is
  calculated with.
- **Money as integer.** Unless the question says amounts are stored in whole pence or cents, money is **real**.
- **Character versus string.** `'Y'` is a character; `"Yes"` is a string. If the data could ever be longer than
  one symbol, it is a string.
- **Storing yes/no answers as strings** when a Boolean is more appropriate.
- **Two types for one item.** A table asking for "the most appropriate" type wants one answer, not a list.

## Self-test

1. Define the term data type.
2. State the most appropriate data type for the number of goals scored in a football match.
3. State the most appropriate data type for the distance a runner covers, in kilometres.
4. Explain why a student ID such as `004571` should be stored as a string.
5. Give the value of `c` after `a ← "4"`, `b ← "5"`, `c ← a + b`.
6. State one difference between a character and a string.
7. A variable stores whether an alarm is set. State the data type and give one reason.
8. A program calculates `total / count` where both are integers. State the type the result should be stored in.
9. State the name used in the exam for the type some languages call float.
10. Identify the error in this choice: "A postcode is stored as an integer."
11. Suggest a type for a hotel room number such as `214`, and justify it.
12. Explain why using a Boolean is better than storing the strings "Yes" and "No".

**Answers:**
1. The kind of value a variable or constant can hold, which determines the values allowed, the operations that
can be performed and how the value is stored.
2. Integer.
3. Real.
4. The leading zeros would be lost if it were stored as an integer, and no arithmetic is ever done on an ID.
5. `"45"` (concatenation of two strings).
6. A character holds exactly one symbol; a string holds a sequence of any number of characters, including none.
7. Boolean, because the alarm is either set or not set: there are only two states.
8. Real, because real division can produce a fractional part.
9. Real.
10. Postcodes contain letters and often a space, so an integer cannot hold them; use a string.
11. Either answer can be credited with the right reason: integer if the program compares or calculates with room
numbers (for example, the first digit as the floor); string if it is only an identifier and some rooms might
include letters, such as `"214B"`.
12. A Boolean has only two possible values, so it cannot be misspelt or given an unexpected value such as "yes"
in lower case, and it can be used directly in a condition.

## Related resources

- [Data types study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-types/)
- [Data types practice questions](/resources/oxfordaqa-igcse-computer-science-9210-data-types-practice/)
- [Programming Fundamentals revision notes](/resources/oxfordaqa-igcse-computer-science-programming-revision-notes/) (sections 3.2.1 to 3.2.5 together)
