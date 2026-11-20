---
title: "AQA A-Level Computer Science (7517): Relational Databases"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "relational-databases-7517"
description: "Deeper guide to AQA 7517 section 4.10.2: the relational database concept, tables, attributes, primary keys, composite primary keys, foreign keys and referential integrity."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.10.2 Relational databases** in AQA A-Level Computer Science (7517). The specification asks you to **explain the concept of a relational database** and to **define the terms attribute, primary key, composite primary key and foreign key**. These four terms are short, precise definitions that appear in almost every database question, so the aim here is to learn them, to be able to spot them in a table, and to explain why linking tables by keys is useful.

The wider [fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) covers all of section 4.10. This page shows each term in a worked example and explains how keys make the relational model work.

Condensed notes are in the [relational databases revision notes](/resources/aqa-a-level-computer-science-7517-relational-databases-revision-notes/), and exam-style questions are in the [relational databases practice questions](/resources/aqa-a-level-computer-science-7517-relational-databases-practice/).

## What a relational database is

A **relational database** stores data in **tables** (also called relations). Each table holds data about **one kind of thing**. The tables are **linked by shared key values**, so that data in one table can be matched with data in another without being stored twice.

Each table has:

- **columns**, each holding one **attribute** (also called a field);
- **rows**, each holding one **record** (also called a tuple), which is one occurrence of the entity;
- a **name**, usually the entity's name.

The data is organised so that:

- every row has the same attributes;
- each cell holds one value;
- the order of rows does not matter.

A **database management system (DBMS)** is the software that stores the tables and answers queries, using a language such as SQL (4.10.4).

## Terms to define

### Attribute

An **attribute** is a **named property** of an entity, stored as a column of a table, such as `Surname` or `DateOfBirth`. Every record holds one value for each attribute.

### Primary key

A **primary key** is an attribute whose value **uniquely identifies each record** in a table. It must be **unique** for every record and must **never be empty (null)**. Values should not change over time, so that other tables can safely refer to them. Examples: `StudentID`, `ISBN`. A table has only one primary key.

A good primary key is short, simple and stable. Names are poor primary keys because two people can share a name and names can change. When no natural key exists, a designer adds a numbered ID.

### Composite primary key

A **composite primary key** is a primary key made of **two or more attributes** that together identify each record uniquely, while no single one of them does so. It is used mainly in tables that link two other tables.

For example, in `Enrolment (StudentID, CourseID, Grade)` a student takes many courses and a course has many students, so neither StudentID nor CourseID is unique on its own. The pair `(StudentID, CourseID)` is unique, because a student enrols on a course only once. Together they form the composite primary key.

### Foreign key

A **foreign key** is an attribute in one table that is **the primary key of another table**. It creates the **link** between the two tables. The foreign key in the "many" side table holds the key value of the matching record in the "one" side table.

For example, in `Pet (PetID, Name, OwnerID)` the attribute OwnerID is a foreign key because it is the primary key of the `Owner` table. A foreign key value may be repeated (an owner may have several pets), unlike a primary key.

## Worked example 1: identifying keys

Two tables from a school database:

**Teacher**

| TeacherID | Name | DepartmentID |
|---|---|---|
| T01 | A. Rahman | D1 |
| T02 | B. Okoye | D2 |
| T03 | C. Lindqvist | D1 |

**Department**

| DepartmentID | DepartmentName | Room |
|---|---|---|
| D1 | Computing | B12 |
| D2 | Mathematics | C03 |

- **Attributes of Teacher:** TeacherID, Name, DepartmentID.
- **Primary key of Teacher:** TeacherID (unique, never empty).
- **Primary key of Department:** DepartmentID.
- **Foreign key in Teacher:** DepartmentID, because it is the primary key of Department. The values D1 and D2 in Teacher link each teacher to a record in Department.
- The value D1 appears twice in Teacher, which is allowed in a foreign key.
- To find the room where A. Rahman teaches, find T01 in Teacher, read D1, then find D1 in Department: B12.

## Worked example 2: a composite primary key

**Enrolment**

| StudentID | CourseID | Grade |
|---|---|---|
| S101 | C20 | B |
| S101 | C31 | A |
| S102 | C20 | C |
| S103 | C31 | B |

- StudentID alone is not unique (S101 appears twice).
- CourseID alone is not unique (C20 appears twice).
- The pair (StudentID, CourseID) is unique in every row, so it is the **composite primary key**.
- Each part is also a **foreign key**: StudentID refers to the Student table and CourseID to the Course table. A single attribute can be both part of a primary key and a foreign key.
- Grade depends on the pair: it is a grade for one student on one course.

## Worked example 3: following keys across three tables

**Member**

| MemberID | Name |
|---|---|
| 1042 | Priya |
| 1043 | Tomas |

**Book**

| ISBN | Title |
|---|---|
| 9780001 | Sea Maps |
| 9780002 | Night Trains |

**Loan**

| MemberID | ISBN | DateBorrowed |
|---|---|---|
| 1042 | 9780001 | 2026-10-03 |
| 1042 | 9780002 | 2026-10-03 |
| 1043 | 9780001 | 2026-10-10 |

Question: which titles has Priya borrowed?

1. Find Priya in Member: MemberID 1042.
2. Find rows with MemberID 1042 in Loan: ISBN 9780001 and 9780002.
3. Look up each ISBN in Book: Sea Maps and Night Trains.

The primary key of Loan is the composite (MemberID, ISBN, DateBorrowed). It includes the date because the same member could borrow the same book again later. MemberID and ISBN in Loan are foreign keys. Each Loan row says "this member borrowed this book on this date", and the member's name and the book's title are stored only once, in their own tables.

If someone tried to add a Loan row for MemberID 2000, referential integrity would reject it, because no member 2000 exists.

## Why use a relational database?

- **Less duplicated data:** each fact is stored once. The department name is held in one row of Department, not repeated for every teacher.
- **Consistency:** a change is made in one place, so there are no conflicting copies.
- **Flexible queries:** data from several tables can be combined by following the foreign keys.
- **Integrity:** rules on keys help to keep the data valid.
- **Data independence and security:** users can be given access to chosen tables or parts of tables, and the structure can change without rewriting every program.

A single large flat file would repeat the same data in many rows. That wastes storage and makes updates error-prone, which is the problem that normalisation (4.10.3) tackles.

## Referential integrity

**Referential integrity** means that every foreign key value must match an existing primary key value in the table it refers to (or be empty if the design allows it). It is enforced by the database software. It prevents:

- adding a Teacher record with DepartmentID D9 when no Department D9 exists;
- deleting Department D1 while teachers still refer to it (the database refuses the deletion, or the related records must be handled first).

## Common mistakes

- Defining a primary key as "the first column". It is the attribute that **uniquely identifies** a record.
- Saying a foreign key must be **unique**. It can repeat.
- Saying a composite key is "two keys". It is **one key made of two or more attributes**.
- Naming the wrong table: the **foreign key lives in the table that refers**; it is the primary key of the **other** table.
- Using a field like Surname or Postcode as a primary key.
- Confusing **attribute** (a column) with **record** (a row).

## Exam technique

- For a **definition**, include the key idea and a reason or example: "a primary key uniquely identifies each record, so no two records can have the same value and it cannot be empty".
- For **"identify the foreign key"**, say which table's primary key it is.
- For **"explain why a composite key is needed"**, show that each single attribute repeats but the pair does not.
- Refer to data in the question's table; do not use general statements alone.

## Related resources

- [Relational databases revision notes](/resources/aqa-a-level-computer-science-7517-relational-databases-revision-notes/)
- [Relational databases practice questions](/resources/aqa-a-level-computer-science-7517-relational-databases-practice/)
- [Data modelling study guide](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling/)

*Written against the AQA A-level Computer Science (7517) specification, 4.10.2 Relational databases. Always check the current specification on the AQA website.*
