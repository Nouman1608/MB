---
title: "Cambridge A Level Information Technology (9626): Data dictionary -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 10.3: data types, components of a data dictionary, choosing types and validation, and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 10.3 Data dictionary** (Topic 10 Database and file concepts) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Full explanations and a built dictionary are in the [data dictionary study guide](/resources/cambridge-a-level-ict-9626-data-dictionary/); test yourself with the [data dictionary practice questions](/resources/cambridge-a-level-ict-9626-data-dictionary-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Data dictionary | A table that describes the structure of a database or file: its fields and their properties |
| Field | One item of data about each record |
| Data type | The kind of data a field holds |
| Field size | The maximum length of a field |
| Format | How data is displayed or must be entered |
| Validation rule | A rule data must meet before it is accepted |
| Primary key | A field whose value is unique for each record |
| Boolean | A type with only two values, such as Yes/No |

## Data types the syllabus names

| Type | Use for | Example |
|---|---|---|
| Text | Words and characters not used in calculations | Surname |
| Alphanumeric | Letters and digits mixed | Product code `AB1234` |
| Integer | Whole numbers | Quantity in stock |
| Decimal | Numbers with a fraction | Weight 62.5 kg |
| Currency | Money | Price 12.99 |
| Percentage | Parts of a hundred | Discount 15% |
| Date and time | Dates and times of day | Date of birth, 09:30 |
| Boolean / logical | Two values only | Yes/No, True/False |

## Choosing a data type: decision rules

1. Will it be used in **calculations**? If no (phone number, postcode, product code), use **text or alphanumeric**.
2. Is it a whole number or does it have a **fraction**? Integer or decimal.
3. Is it **money**? Currency.
4. Is it a **share** of something? Percentage.
5. Is it a **date or time**? Date and time type, so that it can be sorted and calculated.
6. Are there only **two** possible values? Boolean.

## Components of a data dictionary

| Component | Notes |
|---|---|
| Table name | Which table the field is in |
| Field name | Short, meaningful, no spaces |
| Data type | Use the exact term |
| Field size | A number of characters, or decimal places |
| Format | For example `dd/mm/yyyy` or `AA9999` |
| Validation rule | Name the check: range, length, format, lookup, presence, type |
| Required? | A presence check |
| Default value | Used if nothing is entered |
| Key | Primary or foreign |
| Description or example | Explains the purpose, with a sample |

## Example dictionary extract

| Field | Type | Size/format | Validation | Key |
|---|---|---|---|---|
| StaffID | Alphanumeric | 5, `AA999` | Format and length check | Primary |
| Surname | Text | 25 | Presence check | No |
| StartDate | Date | `dd/mm/yyyy` | Range check: not in the future | No |
| Salary | Currency | 2 decimal places | Range check: more than 0 | No |
| FullTime | Boolean | Yes/No | None needed | No |

## Worked example: building a dictionary from a description

A library stores, for each book: a catalogue number (three letters then four digits), the title (up to 60 characters), the date it was bought, the purchase price in pounds and pence, and whether it is on loan.

| Item | Field name | Type | Size/format | Validation |
|---|---|---|---|---|
| Catalogue number | CatNo | Alphanumeric | 7, `AAA9999` | Format check and length check; primary key |
| Title | Title | Text | 60 | Presence check |
| Date bought | DateBought | Date | `dd/mm/yyyy` | Limit check: not in the future |
| Purchase price | Price | Currency | 2 decimal places | Range check: more than 0 |
| On loan | OnLoan | Boolean | Yes/No | None needed; default No |

Reasoning for each type: the catalogue number mixes letters and digits, so it is alphanumeric; the price is money, so currency; "on loan" has two values only, so Boolean; the date must be sorted and compared, so date type.

## Checking your dictionary

1. Every table has a unique primary key.
2. Each type matches how the data is used.
3. Each size is a number and is large enough for the longest sensible value.
4. Each validation rule names a real check and suits the type.
5. Names are short, clear and consistent.

## Matching data to type and validation

| Data | Type | Validation |
|---|---|---|
| Age | Integer | Range 0 to 120 |
| Email | Text | Format check; presence check |
| Order quantity | Integer | Range, at least 1 |
| Country | Text | Lookup check |
| Delivery date | Date | Limit check: not in the past |

## Why a data dictionary matters

- A single agreed description keeps the database consistent.
- Designers check nothing is missing before building.
- Maintainers understand a database they did not create.
- Testers know what each field should accept.
- It guides data entry and moving data between systems.

## Exam traps

- Numeric type for phone numbers or postcodes.
- Text type for dates, or for yes/no.
- "Number" without integer or decimal.
- A field size written as a word, not a number.
- Naming a validation rule but not the type of check.
- Forgetting to mark the primary key.
- Mixing up the dictionary and the data itself.

## Self-test

1. What does a data dictionary describe?
2. Which type should a telephone number be, and why?
3. Which type holds only two values?
4. Name two data types the syllabus lists for numbers.
5. What is a field size?
6. What does the format `AA9999` mean?
7. Give a suitable validation rule for an age field.
8. Why should dates be stored as a date type?
9. Which component says whether a field must be filled in?
10. Choose a data type for the price of a product.
11. Choose a data type for the discount given to a customer, as a share of the price.
12. Give one reason why a data dictionary is useful.

### Answers

1. The structure of the data: the fields and their properties, not the data values.
2. Text, because it is not used in calculations and can start with 0.
3. Boolean (logical).
4. Any two from: integer, decimal, currency, percentage.
5. The maximum number of characters, or the size of the number, that the field can hold.
6. Two letters followed by four digits.
7. A range check, such as 0 to 120, with the type integer.
8. So that dates can be sorted in time order and used in calculations.
9. Required (a presence check).
10. Currency.
11. Percentage.
12. Any one: gives an agreed description, helps design, aids maintenance, helps testing, guides data entry.
