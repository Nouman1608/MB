---
title: "Cambridge IGCSE ICT (0417): Design -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE ICT 0417 7.2 Design: field names, data types, lengths, coding, seven validation checks, input and output formats, self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 7.2 of Cambridge IGCSE ICT 0417 covers designing file and data structures, input formats, output formats and validation routines. These notes are for quick recall. For explanations and a worked check digit, read the [design study guide](/resources/cambridge-igcse-ict-0417-design/); to apply the content, try the [design practice questions](/resources/cambridge-igcse-ict-0417-design-practice/).

## Syllabus coverage

| Syllabus wording | Recall |
|---|---|
| File/data structures | Field name, data type, field length, coding of data (M for male, F for female) |
| Validation routines | Range, character, length, type, format, presence check; check digit |
| Input formats | Data capture forms |
| Output formats | Screen layouts and report layouts |

## File structure decisions

| Decision | Rule of thumb |
|---|---|
| Field name | Meaningful, short, no spaces: *DateJoined* |
| Data type | Text if not calculated with (names, phone numbers, IDs); numeric if calculated; date/time for dates; Boolean for two-value fields |
| Field length | Fits the longest real value without wasting storage |
| Coding | Short codes for a fixed set of values: saves space and entry time, aids validation |

### Data types with examples

| Data type | Example field | Example value |
|---|---|---|
| Text / alphanumeric | Postcode | SW1A 1AA |
| Integer | QuantityInStock | 42 |
| Real / decimal | WeightKg | 2.75 |
| Currency | Price | 12.99 |
| Date/time | DateOfBirth | 14/03/2011 |
| Boolean | FeesPaid | Yes |

### Coding: for and against

- **For**: less storage; faster typing; consistent values; simpler validation (only listed codes accepted).
- **Against**: codes must be learned; detail can be lost; awkward values may not fit any code.

## The seven validation routines

| Check | One-line test | Typical field |
|---|---|---|
| Range | Between limits? | Age 11 to 18 |
| Character | Only allowed characters? | Name with no digits |
| Length | Right number of characters? | PIN of exactly 4 digits |
| Type | Right data type? | Quantity is an integer |
| Format | Matches a pattern? | ID like AB1234; date as DD/MM/YYYY |
| Presence | Not empty? | Surname |
| Check digit | Final digit matches a calculation on the others? | Barcode, ISBN |

**Check digit recall**: calculated from the other digits by a fixed rule and stored as the last digit. On entry the computer recalculates it; a mismatch means a digit was mistyped or two digits were swapped.

**Validation** = automatic check that data is sensible and follows rules. It does **not** prove data is correct.

## Input formats: data capture forms

- Title and instructions.
- Logical order of fields; clear labels.
- One box per character on paper forms.
- Tick boxes, option buttons, drop-down lists for fixed choices.
- Required fields marked.
- On screen: help text, default values, clear error messages, navigation and submit buttons.

## Output formats

- **Screen layout**: position of data, headings, menus, buttons, messages; consistent fonts and colours.
- **Report layout**: title, date, column headings, sort order, grouping, totals, page numbers, headers and footers.

## Key terms

| Term | Meaning |
|---|---|
| File structure | Description of every field in a record: name, type, length |
| Field | One item of data in a record |
| Record | All the data about one person or thing |
| Data type | The kind of data a field holds |
| Field length | Maximum number of characters a field can hold |
| Coding | Representing a value with a shorter code |
| Validation routine | Automatic check that data entered is sensible |
| Check digit | Extra digit calculated from the others to detect input errors |
| Data capture form | Paper or screen form used to collect data |
| Report layout | Planned design of printed or displayed output |

## Exam traps

- **Phone numbers are text**, not numeric: the leading zero would be lost and they are never calculated with.
- **Range checks need numbers or dates.** Do not suggest one for a surname.
- **Type versus format**: "is it an integer?" is a type check; "two letters then four digits" is a format check.
- **Length check** can be exact, minimum or maximum: say which.
- **Presence check** does not check the data is valid, only that something was entered.
- **Validation is not verification.** Verification checks that data was copied accurately; it is not one of the 7.2 routines.

## Self-test

1. Name the four things the syllabus says must be designed in this stage.
2. Why is a telephone number stored as text?
3. Give two advantages of coding data.
4. Give one disadvantage of coding data.
5. Which check would ensure an email address field is not left blank?
6. Which check would reject the value 150 in a field for a percentage?
7. A product code must be three letters followed by two digits. Which check is used?
8. What errors is a check digit designed to detect?
9. State a suitable data type for a field recording whether a library book is on loan.
10. Give two features of a good data capture form.
11. Give two features that should be designed in a report layout.
12. Can a valid date of birth still be wrong? Explain.

## Self-test answers

1. File/data structures, input formats, output formats, validation routines.
2. It may start with zero or contain a + or spaces, and it is never used in calculations.
3. Any two of: less storage; faster entry; consistent values; easier validation.
4. Users must learn the codes, or detail may be lost.
5. Presence check.
6. Range check (0 to 100).
7. Format check.
8. A single digit typed wrongly, or two digits swapped (transposed).
9. Boolean (Yes/No).
10. Any two of: clear title and instructions; logical order; labels; one box per character; tick boxes or drop-down lists; required fields marked.
11. Any two of: title; date; column headings; sort order; grouping; totals; page numbers.
12. Yes. Validation only checks it is sensible; a date in the right range and format can still be the wrong date.

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 7 "The systems life cycle", section 7.2 "Design".
