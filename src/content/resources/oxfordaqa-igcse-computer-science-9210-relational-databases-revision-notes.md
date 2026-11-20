---
title: "OxfordAQA IGCSE Computer Science (9210): Relational databases -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Relational Databases Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.01
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "relational-databases-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.7.1: database terms, keys, data types, redundancy and inconsistency, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.7.1 Relational databases** of OxfordAQA International GCSE Computer Science (9210).
Explanations are in the [Relational databases study
guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases/).

## What the specification asks

- Explain the concept of a **database** and of a **relational database**.
- Understand: **table, record, field, data type, primary key, foreign key**.
- Understand that a relational database helps to eliminate **data inconsistency** and **data redundancy**.

## Definitions

| Term | Meaning |
|---|---|
| Database | An organised collection of data, stored so that it can be searched, updated and shared |
| Relational database | A database that stores data in several tables that are linked by key fields |
| Table | Data about one type of thing, in rows and columns |
| Record | One row: all the data about one item |
| Field | One column: one kind of data about every item |
| Data type | The kind of value a field can hold |
| Primary key | A field that uniquely identifies each record in its table |
| Foreign key | A field in one table that is the primary key of another table; it links the two tables |

## Example tables

**Author**

| AuthorID | AuthorName | Country |
|---|---|---|
| 1 | Okafor | Nigeria |
| 2 | Lindqvist | Sweden |
| 3 | Tanaka | Japan |

**Book**

| BookID | Title | AuthorID | Year |
|---|---|---|---|
| B01 | River Road | 1 | 2015 |
| B02 | Cold Harbour | 2 | 2018 |
| B03 | Paper Birds | 3 | 2012 |
| B04 | The Long Dry | 1 | 2019 |

- Primary key of Author: AuthorID. Primary key of Book: BookID.
- AuthorID in Book is a **foreign key**, linking each book to its author.
- A record in Book: B03, Paper Birds, 3, 2012. A field in Book: Title.

## Data types

| Type | Holds | Example |
|---|---|---|
| Text (string) | Characters | "Paper Birds" |
| Integer | Whole numbers | 2012 |
| Real | Numbers with decimals | 7.99 |
| Boolean | True or false | OnLoan |
| Date | A calendar date | 2026-12-04 |

- Choose the type from **how the value is used**.
- A phone number is **text** (it is not used in arithmetic and may begin with 0).
- Text fields may also have a **length**.
- The right type lets the database **reject** wrong values.

## Primary key rules

- Must be **unique** for every record.
- Must **not be empty**.
- Use a number or code made for the purpose (BookID), **not a name**.

## Foreign key rules

- It is the **primary key of another table**.
- Its values must **match** a value in that other table.
- It links the tables.

## Redundancy and inconsistency

| Term | Meaning | Example |
|---|---|---|
| Data redundancy | The same data is stored more than once | An author's name and country repeated for every book |
| Data inconsistency | The same data has different values in different places | Country spelled "Nigeria" in two rows and "Nigera" in the third |

**How a relational database helps:**

- Each fact is stored **once** (in its own table), so there is **no repeated data** (less redundancy).
- Because it is stored once, it is **changed once**, so values cannot disagree (no inconsistency).
- It uses **less storage**.
- It is easier to keep accurate and to search.

| Flat file | Relational database |
|---|---|
| Author data repeated in every book row | Author data stored once |
| Update in many places | Update in one place |
| Risk of missed changes | One value only |

## Worked examples

**Identify the keys.** Tables: Room (RoomID, RoomName, Floor) and Booking (BookingID, RoomID, Teacher, Date). Primary keys:
RoomID and BookingID. Foreign key: RoomID in Booking.

**Choose a data type.** Price: real. Quantity in stock: integer. Is the product on offer: Boolean. Product name: text.

**Explain the benefit.** A room's name is stored once in the Room table, not in every booking. If the name changes it is
changed once, so there is less repeated data and the values cannot disagree.

**Explain why a name is a poor primary key.** Two people could have the same name, so the field might not be unique.

**What if a foreign key value does not exist in the other table?** The record would refer to an item that is not
recorded, so the link is broken.

## Exam traps

- **Records and fields swapped.** Records are rows; fields are columns.
- **Primary key "most important field".** It must uniquely identify records.
- **Foreign key with no mention of another table's primary key.**
- **Redundancy and inconsistency mixed up.**
- **Poor key choices**, such as a name.
- **Wrong data type**, such as an integer for a phone number.
- **"Relationships between people."** The links are between tables.
- **Entity and attribute** used where the specification uses table and field.

## Key terms

| Term | Meaning |
|---|---|
| Flat file | A single table that holds all the data |
| Unique | Different for every record |
| Link | A connection between two tables made with a foreign key |
| Redundant | Repeated unnecessarily |

## Self-test

1. Define a record.
2. Define a field.
3. State what a primary key is.
4. State what a foreign key is.
5. In Book (BookID, Title, AuthorID, Year), name the foreign key if AuthorID is the primary key of Author.
6. Give a suitable data type for a field that holds whether a book is on loan.
7. Explain what is meant by data redundancy.
8. Explain what is meant by data inconsistency.
9. State why a person's name is a poor primary key.
10. Explain how linked tables reduce redundancy.

**Answers:**
1. One row of a table, holding all the data about one item.
2. One column of a table, holding one kind of data about every item.
3. A field that uniquely identifies each record in the table.
4. A field in one table that is the primary key of another table and links the tables.
5. AuthorID.
6. Boolean.
7. The same data is stored more than once.
8. The same data has different values in different places.
9. Two people could have the same name, so it may not be unique.
10. Each fact is stored once in its own table and other tables refer to it with a key, so it is not repeated.

## Related resources

- [Relational databases study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases/)
- [Relational databases practice questions](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases-practice/)
- [Database design revision notes](/resources/oxfordaqa-igcse-computer-science-9210-database-design-revision-notes/)
