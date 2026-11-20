---
title: "Cambridge A Level Information Technology (9626): Data dictionary"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "data-dictionary"
description: "Cambridge 9626 IT section 10.3 study guide: data types, the components of a data dictionary, and creating a dictionary for a given set of data, with worked examples."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 10.3 Data dictionary** of Topic 10 Database and file concepts in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. It is examined in Paper 1 Theory, where you identify data types and complete or create a dictionary, and it supports the practical database work in section 10.1. The [Database and file concepts overview](/resources/a-level-cambridge-ict-database-and-file-concepts/) introduces the idea; this page explains each data type and each component, and builds a dictionary step by step. Use it with the [data dictionary revision notes](/resources/cambridge-a-level-ict-9626-data-dictionary-revision-notes/) and the [data dictionary practice questions](/resources/cambridge-a-level-ict-9626-data-dictionary-practice/).

## What section 10.3 covers

| Syllabus point | What you must be able to do |
|---|---|
| Identify data types | Text and alphanumeric; numeric (integer, decimal, currency); percentage; date and time; Boolean or logical (yes/no, true/false) |
| Components | Describe what a data dictionary contains |
| Creating a dictionary | Select appropriate data types for a given set of data and situation, and write the dictionary |

## What a data dictionary is

A **data dictionary** is a table that describes the **structure** of a database or file. It lists each **field** with details such as its data type, size, format and validation rule. It does not hold the data itself; it describes the data.

It is used by:
- **Designers**, to plan the structure before building;
- **Programmers and database builders**, to create the tables correctly;
- **Maintainers**, to understand an existing database;
- **Testers**, to know what values each field should accept.

It helps keep the database **consistent**, because every person works from the same description.

## Data types

| Data type | Holds | Examples | Notes |
|---|---|---|---|
| Text | Letters, symbols and digits that are not used in calculations | Surname, address | Free text; a size sets the maximum number of characters |
| Alphanumeric | A mixture of letters and digits | Product code `AB1234`, postcode | Treated as text; not used in calculations |
| Numeric: integer | Whole numbers | Number in stock, age | No decimal part |
| Numeric: decimal | Numbers with a fractional part | Weight 62.5 | Specify the number of decimal places |
| Numeric: currency | Money | Price 12.99 | Fixed decimal places; the currency symbol is applied by format |
| Percentage | A fraction shown as a percentage | Discount 15% | Stored as a decimal (0.15) and displayed as 15% |
| Date and time | Calendar dates and times of day | Date of birth, appointment time | Can be used in calculations such as ages |
| Boolean (logical) | Only two values | Yes/No, True/False | Used for conditions such as "Paid?" |

### Choosing the correct data type

Ask: **is it used in calculations, and what values can it hold?**

- **Telephone numbers** are text, not numbers. They are not added together, and they can start with 0 or include a plus sign and spaces.
- **Postcodes and product codes** are alphanumeric, because they combine letters and digits.
- **Quantities and counts** are integers. A count of tickets cannot be 2.5.
- **Prices** are currency. They need exactly two decimal places in most cases.
- **Percentages** are stored as percentage type so that they can be used in calculations.
- **Yes/no facts** such as "Member is paid up" are Boolean. They use less storage than text and cannot be misspelled.
- **Dates** are date type, not text, so that they can be sorted by time and compared.

## Components of a data dictionary

| Component | Meaning | Example |
|---|---|---|
| Table or file name | The table the fields belong to | Member |
| Field name | A short, meaningful name, usually without spaces | `MemberID` |
| Data type | The type of data held | Alphanumeric |
| Field size (length) | The maximum number of characters, or the size of the number | 6 |
| Format | How the data is displayed or must be entered | `dd/mm/yyyy` or `AA9999` |
| Validation rule | The rule that data must pass | Range: 0 to 100 |
| Required | Whether the field must be filled in (a presence check) | Yes |
| Default value | The value used when nothing is entered | `Yes` |
| Key | Whether the field is a primary or foreign key | Primary key |
| Description or example | A plain explanation or a sample value | "Unique member number", `MB1042` |

Not every component is needed for every field. The syllabus says that a candidate should be able to name the components and select the correct data types, so give the details that the question asks for.

## Creating a data dictionary: worked example

**Situation.** A sports club keeps data about its members. For each member it stores:

- a unique member code of two letters and four digits (such as `MB1042`);
- the surname (up to 25 characters);
- the date of birth;
- the membership type: Junior, Adult or Senior;
- the annual fee in pounds and pence;
- whether the member has paid this year (yes or no);
- the percentage discount (0 to 50 per cent) given to the member;
- the time of the member's usual training session.

### Step 1: choose a field name and data type for each item

| Item | Field name | Data type | Reason |
|---|---|---|---|
| Member code | `MemberCode` | Alphanumeric | Letters and digits together |
| Surname | `Surname` | Text | Letters only; not calculated |
| Date of birth | `DateOfBirth` | Date | Date type so ages can be calculated and dates sorted |
| Membership type | `MemberType` | Text | A word from a short list |
| Annual fee | `AnnualFee` | Currency | Money, with two decimal places |
| Paid this year | `Paid` | Boolean | Only two possible values |
| Discount | `Discount` | Percentage | A share of the fee, from 0 to 50 per cent |
| Training time | `TrainingTime` | Time | A time of day |

### Step 2: add sizes, formats, validation and keys

| Field name | Data type | Size or format | Validation rule | Required | Key |
|---|---|---|---|---|---|
| MemberCode | Alphanumeric | 6 characters, format `AA9999` | Format check and length check | Yes | Primary key |
| Surname | Text | 25 characters | Presence check | Yes | No |
| DateOfBirth | Date | `dd/mm/yyyy` | Range check: not in the future | Yes | No |
| MemberType | Text | 6 characters | Lookup check: Junior, Adult or Senior | Yes | No |
| AnnualFee | Currency | 2 decimal places | Range check: 0 or more | Yes | No |
| Paid | Boolean | Yes/No | None needed (only two values) | Yes | No |
| Discount | Percentage | 0% to 50% | Range check: 0 to 0.5 | No (default 0%) | No |
| TrainingTime | Time | `hh:mm` | Range check: for example 06:00 to 22:00 | No | No |

### Step 3: check the dictionary

- Every table has a **primary key**, and it is unique and always filled in.
- Each data type matches how the data is used.
- Each field size is large enough but not wasteful: a surname of 25 characters is enough for most names.
- Validation rules are suitable for the data and match the types of check (range, lookup, format, length, presence).
- Field names are clear and consistent.

## Data type and validation: matching them

| Field | Sensible data type | Sensible validation |
|---|---|---|
| Age | Integer | Range check 0 to 120 |
| Email address | Text | Format check for `@` and a full stop; presence check |
| Country | Text | Lookup check against a list |
| Quantity ordered | Integer | Range check, at least 1 |
| Date booked | Date | Range or limit check: not in the past |
| Gift wrapped? | Boolean | No validation needed |

## Why a data dictionary is useful

- It provides a **single, agreed description** of the data, so the database is consistent.
- It helps **designers** check that nothing is missing before building.
- It makes **maintenance** easier for people who did not build the database.
- It helps with **testing**, because it states what each field should accept.
- It supports **data entry** by showing the format and rules.
- It helps when **data is moved** between systems.

## Common mistakes

- Choosing numeric for telephone numbers or postcodes.
- Choosing text for a date, so it cannot be sorted or calculated.
- Choosing text for yes/no data instead of Boolean.
- Giving a size such as "text" instead of a number of characters.
- Using "number" without saying whether it is integer or decimal.
- Not stating which field is the primary key.
- Mixing up the **data dictionary** (describes the structure) with the **data** (the values).
- Writing a validation rule without saying which check it is.

## Exam technique

- When asked to **complete a dictionary**, give every column asked for, using the technical word for the data type (for example "Boolean", not "true or false").
- Justify each data type with how the data is used (for example "text, because a phone number is not used in calculations and may start with 0").
- Give a **field size** as a number, linked to the longest sensible value.
- Match each validation rule to a named check: range, length, format, lookup, presence or type.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 10 Database and file concepts, section 10.3 Data dictionary.
