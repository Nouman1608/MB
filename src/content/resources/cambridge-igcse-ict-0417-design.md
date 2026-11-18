---
title: "Cambridge IGCSE ICT (0417): Design"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 7: The systems life cycle"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7.2
syllabusTopics:
  - qualification: "igcse"
    topic: "the-systems-life-cycle"
    subtopic: "design-0417"
description: "Designing file structures, data types, coding, validation routines, data capture forms and screen and report layouts for Cambridge IGCSE ICT 0417 section 7.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Design is the stage where the analyst's requirements become a detailed plan that a developer can build from. Section 7.2 of Cambridge IGCSE ICT 0417 names four things to design: **file/data structures**, **input formats**, **output formats** and **validation routines**. The syllabus gives detail for each: field length, field name, data type and coding of data; range, character, length, type, format and presence checks and check digits; data capture forms; and screen and report layouts.

For the place of design in the whole cycle, see the [systems life cycle study guide](/resources/cambridge-igcse-ict-the-systems-life-cycle-study-guide/). Condensed recall is in the [design revision notes](/resources/cambridge-igcse-ict-0417-design-revision-notes/), and you can practise in the [design practice questions](/resources/cambridge-igcse-ict-0417-design-practice/).

## File and data structures

A **file structure** (or table structure in a database) lists every field that will be stored for each record and describes it precisely.

| Element | What it is | Design decision |
|---|---|---|
| **Field name** | The label for the item of data | Short, meaningful, without spaces, such as *MemberID* or *DateJoined* |
| **Data type** | The kind of data the field holds | Text, numeric, date/time, Boolean |
| **Field length** | The maximum number of characters | Long enough for the longest real value, but no longer, to save storage |
| **Coding of data** | Replacing a full value with a short code | For example *M* for male and *F* for female |

### Choosing the data type

- **Text (alphanumeric)**: letters, digits and symbols. Use it for names, postcodes and **telephone numbers**. A phone number is stored as text because it can start with zero, may contain a + or spaces, and is never used in calculations.
- **Numeric**: numbers that may be calculated with. **Integer** for whole numbers, such as a quantity in stock; **real** or **decimal** for numbers with a fractional part, such as a weight of 2.75 kg; **currency** for money.
- **Date/time**: dates and times, so they can be sorted and compared properly, for example to find members who joined before a given date.
- **Boolean (logical)**: only two possible values, such as Yes/No or True/False, for example *FeesPaid*.

### Coding data

Coding stores a short code instead of the full value: *M/F*, *Y/N*, a two-letter country code, or *S, M, L, XL* for sizes.

- **Advantages**: less storage; faster data entry; fewer spelling variations, so searches are reliable; validation is easier because only a short list of codes is allowed.
- **Disadvantages**: users must learn what the codes mean; detail can be lost if the codes are too coarse; a value that does not fit any code cannot be stored accurately; badly chosen codes may be confusing.

## Validation routines

**Validation** is an automatic check, carried out by the software as data is entered, that the data is **reasonable and sensible** and obeys set rules. It cannot prove the data is correct. The syllabus names seven routines.

| Check | What it checks | Example |
|---|---|---|
| **Range check** | Value lies between a lower and upper limit | Exam mark between 0 and 100 |
| **Character check** | Only allowed characters are present | A name contains no digits |
| **Length check** | Number of characters is exactly, at least or at most a set number | A password has at least 8 characters |
| **Type check** | Data is of the right data type | Quantity is a whole number, not text |
| **Format check** | Data follows a set pattern | Student ID is two letters followed by four digits, such as *AB1234* |
| **Presence check** | A required field is not left empty | Surname must be entered |
| **Check digit** | An extra digit calculated from the others is correct | The last digit of a barcode or ISBN |

### Worked example: how a check digit catches an error

One common method, used for 13-digit book numbers (ISBN-13), multiplies the first 12 digits alternately by 1 and 3, adds the results, and chooses a final digit that makes the total a multiple of 10. Take the invented code 978191524836:

| Digit | 9 | 7 | 8 | 1 | 9 | 1 | 5 | 2 | 4 | 8 | 3 | 6 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Weight | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 |
| Product | 9 | 21 | 8 | 3 | 9 | 3 | 5 | 6 | 4 | 24 | 3 | 18 |

The products add up to 113. The next multiple of 10 is 120, so the check digit is 120 − 113 = **7** and the full number is 9781915248367.

If a user swaps two digits when typing, for example entering 9781915**28**4367, the computer recalculates from the first 12 digits: the total is now 105, which gives a check digit of 5. That does not match the 7 typed at the end, so the entry is rejected. Check digits are designed to catch exactly this kind of mistake: transposed digits and single wrong digits.

### Choosing checks for a field

Most fields need more than one check. For a field *Postcode* you might use a presence check (it must be entered), a length check (between 6 and 8 characters including the space) and a format check (letters and digits in the expected pattern). A range check would be meaningless here because a postcode is not a number. When a question asks you to choose a check, make sure it suits the data type.

## Input formats: data capture forms

A **data capture form** collects data, either on paper (later typed in or read by a machine) or on screen. Good design makes data entry fast and accurate.

Features of a well-designed form:

- A clear **title** and short **instructions**, such as "use black ink and capital letters".
- Fields in a **logical order** that matches the source of the data, such as personal details before course details.
- Clear **labels** next to every field.
- **Boxes for each character** on paper forms, so handwriting is clearer.
- **Tick boxes**, **option buttons** and **drop-down lists** where there is a fixed set of answers, which also make validation simpler.
- Enough **space** for the longest likely answer.
- On screen: on-screen **help** or hints, **default values**, error messages that explain the problem, and **buttons** to submit, clear or move between records.
- Indication of which fields are **required**.

## Output formats: screen and report layouts

Output formats are designed so that the information produced meets the information requirements from analysis.

- A **screen layout** shows what the user sees: the position of data, headings, buttons, menus and messages, and colours and fonts that are clear and consistent.
- A **report layout** shows a printed or on-screen report: title, date, column headings, the order of records (sorting), any grouping, totals or averages, page numbering and headers or footers.

The designer sketches each layout and agrees it with the client before development, because changing a layout later costs more.

## Worked example: designing a club membership file

A swimming club wants a computer record for each member.

| Field name | Data type | Length | Validation |
|---|---|---|---|
| MemberID | Text | 6 | Format check: two letters then four digits; presence check |
| Surname | Text | 30 | Presence check; character check (letters, hyphen and apostrophe only) |
| DateOfBirth | Date/time | 10 | Range check: not in the future and no earlier than a set year |
| Gender | Text | 1 | Coded M or F; lookup of allowed values |
| Squad | Text | 1 | Coded A, B or C; lookup of allowed values |
| PhoneNumber | Text | 15 | Length check; character check (digits, spaces and + only) |
| FeesPaid | Boolean | 1 | Yes or No only |

The design shows every syllabus item: field names, data types, lengths, coding and a suitable validation routine for each field.

## Common mistakes

- Choosing *numeric* for phone numbers or ID codes that are never calculated with.
- Saying validation makes sure data is "correct". It checks that data is sensible.
- Confusing a **type check** (is it a number?) with a **format check** (does it follow a pattern?).
- Suggesting a range check for a text field such as a name.
- Describing a form feature with no purpose: "use boxes" is weaker than "use one box per character so handwriting is easier to read".

## Exam technique

**Identify** a validation check: name it. **Describe** it: say what it checks, with an example from the field in the question. **Explain** a design choice: give the reason, such as "stored as text because the leading zero would be lost". For design tasks, set out a table with the headings given in the question and complete every cell.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.2 "Design".
