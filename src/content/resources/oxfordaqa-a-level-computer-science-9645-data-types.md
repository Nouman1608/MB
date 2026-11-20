---
title: "OxfordAQA A-Level Computer Science (9645): Data types"
seoTitle: "OxfordAQA A-Level CS 9645 Data Types Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.1.1 in depth: the six data types, choosing the right one for real data, type conversion traps and date/time values."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.1.1 Data types** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.1 Procedural programming (AS). The specification asks you to "understand the concept of a data type" and to "understand and use" six types appropriately: **integer**, **real/float**, **Boolean**, **character**, **string** and **date/time**. Its additional information adds that Python users could use type hints to become familiar with the idea, but this is not a requirement.

For quick recall, use the [data types revision notes](/resources/oxfordaqa-a-level-computer-science-9645-data-types-revision-notes/), then test yourself with the [data types practice questions](/resources/oxfordaqa-a-level-computer-science-9645-data-types-practice/). The wider [procedural programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/) shows where data types fit among the other building blocks; this page goes deeper on the types themselves.

## What a data type is

A **data type** tells the language three things about a value:

1. what **kind of value** it is (a whole number, a true/false answer, some text);
2. what **operations** make sense on it (you can add two integers, but you cannot sensibly add two Booleans);
3. how much **memory** it needs and how its bits are **interpreted**.

The last point matters because memory holds only bit patterns. The same eight bits `01000001` can be read as the integer 65 or as the character `A`. The data type is the rule that decides which reading applies. This is why a program must declare or infer a type for every variable.

## The six types you must know

| Type | Holds | Typical literal | Typical use |
|---|---|---|---|
| Integer | Whole numbers, positive, negative or zero | `42`, `-7` | Counts, indexes, scores, ages |
| Real / float | Numbers with a fractional part | `3.14`, `-0.5` | Measurements, prices in calculations, averages |
| Boolean | One of two values: True or False | `True` | Flags, results of comparisons |
| Character | A single symbol | `'A'`, `'7'` | A grade letter, a menu choice |
| String | A sequence of characters | `"Hello"` | Names, addresses, messages |
| Date/time | A calendar date, a time of day, or both | 2026-11-20 | Deadlines, timestamps, ages |

### Integer

An integer has no fractional part. Integer arithmetic is exact: the sum of two integers is always another integer with no rounding. Integer division is a separate operation. In Python, `7 / 2` gives `3.5` (a float) but `7 // 2` gives `3` and `7 % 2` gives `1`. The specification calls these DIV and MOD.

### Real / float

A float stores a number with a fractional part, in a form with limited precision. This means some decimal values are stored only approximately. In Python, `0.1 + 0.2` evaluates to `0.30000000000000004`, not `0.3`. The reason is covered in sub-topic 3.5.3.5 (rounding errors): 0.1 cannot be written exactly as a binary fraction. The practical rule is that you should **not test two floats for equality**. Compare their difference with a small tolerance instead.

### Boolean

A Boolean holds only True or False. It is the type produced by every relational operation (`age >= 18`) and consumed by every selection and `while` condition. Booleans make good **flags**, such as `found` in a search. A Boolean needs only one bit of information, although a language will usually store it in a whole byte.

### Character and string

A **character** is a single symbol: a letter, digit, punctuation mark or space. A **string** is a sequence of characters. Python has no separate character type, so a one-character string plays that role. C# has both `char` and `string`. In both cases the digit character `'7'` is **not** the integer 7: one is a symbol with a character code (55 in ASCII), the other a number you can add.

### Date/time

A date/time value represents a point in calendar time. Languages provide a dedicated type because dates are awkward to handle as numbers or strings: months have different lengths, leap years exist, and sorting dates as text gives the wrong order. A date/time type lets the language do the calendar arithmetic for you. In Python, subtracting `datetime.date(2026, 2, 1)` from `datetime.date(2026, 3, 1)` gives 28 days; subtracting `datetime.date(2026, 1, 31)` from the later date gives 29 days.

## Choosing the right type

Choosing a type is a design decision, and the usual exam question is "which data type is most appropriate for this data, and why?". Work through three tests.

1. **Will you do arithmetic on it?** If not, it is probably a string, even if it looks numeric.
2. **Can it have a fractional part?** If yes, use a float; if it is always whole, use an integer.
3. **Does leading zero or format matter?** If yes, use a string.

| Data item | Best type | Reason |
|---|---|---|
| Number of items in a basket | Integer | Whole count; arithmetic needed |
| Telephone number `07700 900123` | String | No arithmetic; leading zero must be kept; spaces and `+` allowed |
| Height in metres, 1.82 | Float | Has a fractional part |
| Whether a user is logged in | Boolean | Exactly two states |
| A single grade, `'B'` | Character | One symbol |
| Postcode `SW1A 1AA` | String | Mixed letters, digits and a space |
| Date of birth | Date/time | Calendar arithmetic and correct ordering |
| Price in whole pence, 1999 | Integer | Avoids float rounding errors in money calculations |

The last row is a good point to make in an extended answer. Storing money as a float risks small errors, so many programs store a whole number of pence and convert only for display.

## Worked example 1: the string comparison trap

A program stores two scores as strings read from the keyboard: `a = "9"` and `b = "12"`. What does `a < b` give?

Strings compare **character by character** using character codes. The first characters are `'9'` (code 57) and `'1'` (code 49). Since 57 is greater than 49, `"9" < "12"` is **False**, even though the integer 9 is less than 12.

Sorting shows the same problem. Sorting the strings `["10", "9", "100"]` gives `['10', '100', '9']`, but sorting the integers `[10, 9, 100]` gives `[9, 10, 100]`. The fix is to convert the input to an integer before comparing: `int(a) < int(b)` is **True**.

*Lesson:* if you want numeric behaviour, store a number. Input from the keyboard arrives as a string, so convert it as soon as it has been read.

## Worked example 2: string plus integer

In Python, `"4" + "2"` gives `"42"` (concatenation), while `int("4") + int("2")` gives `6`. Writing `"Score: " + 42` raises a `TypeError`, because the language will not guess how to combine a string with an integer. You must convert: `"Score: " + str(42)` gives `"Score: 42"`.

Conversions have limits. `int("42")` works, but `int("forty")` and `int("3.7")` both fail with a `ValueError`. Converting a float to an integer **truncates** in most languages: `int(3.99)` gives `3`, not `4`. Rounding is a different operation: Python's `round(3.5)` gives `4` and `round(2.5)` gives `2`, because Python rounds halves to the nearest even number. Test unusual rounding behaviour in your own language before you rely on it.

## Worked example 3: counting values from bits

An unsigned integer stored in *n* bits can hold 2^*n* different values, from 0 to 2^*n* − 1 (sub-topic 3.5.3.1 develops this). For 16 bits, that is 65,536 values, from 0 to 65,535. A type with a fixed size therefore has a **range**, and a result outside the range causes an overflow in languages with fixed-size integers. Python integers grow as needed, but C# `int` does not: its range is −2,147,483,648 to 2,147,483,647.

## Type hints in Python

The specification mentions type hints as an optional way to get used to types. A hint documents what a variable or parameter is expected to hold.

```python
def area(width: float, height: float) -> float:
    return width * height

count: int = 0
name: str = "Asha"
done: bool = False
```

Python does **not** enforce hints while the program runs. They are for readers and tools. In C# and VB.Net the types are declared and enforced by the compiler, so a statement such as `int count = "five";` is rejected before the program runs. You will not be required to use hints in an exam.

## Static and dynamic typing

In a **statically typed** language (C#, VB.Net), each variable has a type fixed at declaration. In a **dynamically typed** language (Python), the type belongs to the value, and a variable can later refer to a value of a different type. Static typing finds many type errors early. Dynamic typing is quicker to write but can hide a type mistake until that line runs. The specification does not require this terminology, but it explains why the same program behaves differently in different languages.

## Exam technique

- **"Choose a data type" questions:** name the type, then give a reason that links to the data. "String, because it is not used in calculations and the leading zero must be kept" earns marks; "String, because it is text" does not.
- **Trace questions:** write the type next to each value. Many traces break at a conversion step.
- **Programming questions:** convert keyboard input immediately, and use the type that matches how the value is used.
- **Distinguish** a character from a string, and the digit `'5'` from the number 5.

## Common mistakes

- Choosing integer for a phone number or postcode.
- Choosing float for a quantity that is always whole.
- Believing `'7'` and `7` are the same value.
- Testing two floats for equality.
- Forgetting that input arrives as a string and comparing it as if it were a number.
- Confusing truncation (dropping the fractional part) with rounding.
- Giving a reason such as "it is a number" for a type choice when the data is never used in arithmetic.

## Next steps

- [Data types revision notes](/resources/oxfordaqa-a-level-computer-science-9645-data-types-revision-notes/)
- [Data types practice questions](/resources/oxfordaqa-a-level-computer-science-9645-data-types-practice/)
- [Procedural programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.1.1 Data types.
