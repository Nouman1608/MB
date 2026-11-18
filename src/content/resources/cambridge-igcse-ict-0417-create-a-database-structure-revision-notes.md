---
title: "Cambridge IGCSE ICT (0417): Create a database structure -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.1
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "create-a-database-structure-0417"
description: "Condensed notes on importing data, field types and display formats, keys, relationships, flat file versus relational and form design, for IGCSE ICT 0417 section 18.1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes cover section 18.1 **Create a database structure** of Cambridge IGCSE ICT 0417. The [create a database structure study guide](/resources/cambridge-igcse-ict-0417-create-a-database-structure/) works through one example in full; the [create a database structure practice questions](/resources/cambridge-igcse-ict-0417-create-a-database-structure-practice/) test each part.

## Syllabus coverage

| Syllabus statement | Notes and guidance (summarised) |
|---|---|
| Create an appropriate database structure | Import .csv and .txt files using specified field names; set data types (text, numeric: integer, decimal, currency; date/time; Boolean/logical); set numeric sub-types (percentage, decimal places); set Boolean display (yes/no, true/false, checkbox) and date/time display; create and edit primary and foreign keys; create relationships |
| Create and use a data entry form | Specified fields; fonts; spacing between fields; character spacing of fields; white space; radio buttons, check boxes, drop-down menus |
| Types of database | Characteristics, uses, advantages and disadvantages of flat file and relational databases |
| Primary and foreign keys | Their characteristics |
| Form design | Characteristics of good form design |

## Key terms

| Term | Meaning |
|---|---|
| Field | One item of data about each record, a column |
| Record | All the data about one item, a row |
| .csv file | Text file with values separated by commas |
| Delimiter | The character separating values: comma, tab or other |
| Display format | How a stored value is shown, without changing it |
| Primary key | Field with a unique, non-blank value identifying each record |
| Foreign key | Field in one table that is the primary key of another, linking them |
| Relationship | The link between tables through matching key fields |
| Flat file | A database of a single table |
| Relational database | Two or more linked tables |
| Data redundancy | The same data stored more than once |

## Importing: checklist

- Choose the right **delimiter** (comma for .csv; often tab for .txt).
- Tick **first row contains field names** if it does; otherwise type the **specified** names exactly.
- Set each **data type**.
- Check the record count, leading zeros, dates and currency values after import.

## Choosing data types

| Data | Type | Format |
|---|---|---|
| Name, town, code with letters | Text | n/a |
| Phone number, postcode | Text | n/a (leading zeros kept) |
| Count of items | Numeric: integer | 0 decimal places |
| Weight, distance | Numeric: decimal | Places as instructed |
| Price, fee | Numeric: currency | Symbol, 2 decimal places |
| Discount rate | Numeric | Percentage (0.15 shown as 15%) |
| Date, time | Date/time | For example DD/MM/YYYY, 24-hour time |
| Yes/no fact | Boolean/logical | Yes/No, True/False or checkbox |

**Display format changes the look, not the stored value.**

## Keys and relationships

- **Primary key**: unique, never blank, should not change, one per table.
- **Foreign key**: matches a primary key elsewhere, values can repeat, same data type as the primary key.
- **One-to-many**: one record in the first table links to many in the second (one customer, many orders).
- The relationship fails if the key fields have **different data types**.

## Flat file versus relational

| | Flat file | Relational |
|---|---|---|
| Structure | One table | Several linked tables |
| Good for | Simple lists | Linked data, such as customers and orders |
| Advantages | Simple, quick to set up | Less redundancy, consistent updates, less storage |
| Disadvantages | Repeated data, inconsistent updates, more storage | Harder to design; keys and relationships needed |

## Form controls and design

- **Radio buttons**: one choice from a few.
- **Check box**: yes/no, or several independent options.
- **Drop-down menu**: one choice from a longer list.
- Good design: title and instructions, logical order, clear labels, boxes sized to the data, consistent readable fonts, white space, suitable controls, navigation buttons, required fields shown.

## Exam traps

- **Phone numbers** are text, not numbers.
- A **name** is a poor primary key: two people can share one.
- A foreign key's values **can** repeat; a primary key's cannot.
- **Percentage** is a display format: 0.2 is shown as 20%; typing 20 into a percentage field may display 2000%.
- Do not confuse **radio buttons** (one choice) with **check boxes** (any number).
- In a flat file, the problem is **redundancy** and **inconsistency**, not "it is slower" alone.

## Self-test

1. What does a delimiter do in a .csv file?
2. Why should a phone number be a text field?
3. Give the most suitable data type and format for a field holding a monthly fee.
4. A field stores 0.25 with a percentage format. What is displayed?
5. Give three display formats for a Boolean field.
6. State two characteristics of a primary key.
7. State two characteristics of a foreign key.
8. Why might a relationship between two tables fail to be created?
9. Give one advantage of a flat file.
10. Give two advantages of a relational database.
11. Which form control suits choosing one of three membership types?
12. Give three characteristics of good form design.

### Answers

1. It separates the values of different fields on each line.
2. It may begin with zero, which a number type would drop, and it is never used in calculations.
3. Numeric, currency format with 2 decimal places.
4. 25%.
5. Yes/No, True/False, checkbox.
6. Any two: unique for every record; never blank; does not change; identifies one record.
7. Any two: it is the primary key of another table; it links the two tables; its values can repeat; it has the same data type as the primary key.
8. The key fields have different data types (or sizes).
9. Simple and quick to set up and use.
10. Any two: less repeated data; data updated in one place so it stays consistent; less storage; tables can be queried together.
11. Radio buttons (or a drop-down menu).
12. Any three: clear title; logical order; clear labels; boxes sized to the data; consistent fonts; white space; suitable controls; navigation buttons.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases", 18.1 Create a database structure.
