---
title: "OxfordAQA IGCSE Computer Science (9210): Relational databases and SQL -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
description: "OxfordAQA International GCSE Computer Science 9210 study guide: tables, keys, database design and the SQL SELECT, INSERT INTO, UPDATE and DELETE FROM commands."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "Check the 9210 specification for exactly which SQL commands are required (SELECT, FROM, WHERE, ORDER BY, INSERT, UPDATE, DELETE and joins) and the required form of the join syntax. 2026-11-08 recheck: checked against spec v3.3 section 3.7: SQL limited to SELECT/FROM/WHERE (max two tables), full-record INSERT INTO, UPDATE, DELETE FROM; removed ORDER BY, LIKE and INNER JOIN; added 3.7.2 database design; please re-review; 2026-11-08: reviewed by harris-khan."
publishedDate: 2026-11-08
featured: false
---

A database holds data in a structured way so that it can be searched and kept consistent. A **relational database** stores data in several linked tables instead of one big table, which removes repeated data. **Structured query language (SQL)** is used to retrieve and change the data. In OxfordAQA International GCSE Computer Science (9210), section 3.7 asks you to explain the key database concepts, design a database of up to three tables, and write SQL using a small, fixed set of commands.

## What does the 9210 specification require?

| Spec ref | Content |
|---|---|
| 3.7.1 | Explain a database and a relational database; the concepts table, record, field, data type, primary key, foreign key; how a relational database helps eliminate data inconsistency and data redundancy |
| 3.7.2 | Choose data types and (where appropriate) lengths for fields; select a primary key; design a relational database from a scenario (no more than three tables), written as TableName (Field1, Field2, ...) with the primary key underlined |
| 3.7.3 | SQL: retrieve data with **SELECT**, **FROM** and **WHERE** (no more than two tables in any one query); insert data with **INSERT INTO** (only the form that gives all the values in a record); edit and delete data with **UPDATE** and **DELETE FROM** |

Other SQL clauses, such as ORDER BY, LIKE, JOIN or aggregate functions, are not in the 9210 specification, so this guide does not use them.

## What are tables, records, fields and data types?

A **database** is a structured, persistent store of data. A **table** holds data about one type of thing (for example club members). Each row is a **record**, holding all the data about one item. Each column is a **field**, holding one item of data such as Name or Age. Each field has a **data type**, such as text (string), integer, real, Boolean or date, which controls what can be stored. For text fields you may also give a **length**, such as 20 characters for a name.

## What are primary and foreign keys?

A **primary key** is a field that uniquely identifies each record in a table, so no two records can have the same value. A **foreign key** is a field in one table that is the primary key of another table; it creates the link between the two tables.

**Club**

| ClubID | ClubName | Room |
|---|---|---|
| 1 | Chess | B12 |
| 2 | Robotics | C03 |
| 3 | Drama | Hall |

**Member**

| MemberID | Name | Age | ClubID |
|---|---|---|---|
| 101 | Amira | 14 | 2 |
| 102 | Tomas | 15 | 1 |
| 103 | Priya | 14 | 2 |
| 104 | Kofi | 16 | 3 |
| 105 | Lena | 15 | 2 |
| 106 | Omar | 13 | 1 |

In Club the primary key is ClubID. In Member the primary key is MemberID, and ClubID is a **foreign key** linking each member to a club.

## Why does a relational database reduce redundancy and inconsistency?

If the club name and room were stored in every member's row, they would be repeated (**data redundancy**), wasting storage. If Robotics moved room, every Robotics member's record would need changing; missing one would leave conflicting values (**data inconsistency**). With two linked tables the room is stored once and changed once.

## How do you write a database design?

The specification uses this notation, with the primary key underlined:

- Club (<u>ClubID</u>, ClubName, Room)
- Member (<u>MemberID</u>, Name, Age, ClubID)

For each field you should be able to choose a data type and, where appropriate, a length: ClubID integer; ClubName text, length 20; Room text, length 4; MemberID integer; Name text, length 30; Age integer; ClubID integer. Exam scenarios use no more than three tables.

## How do you retrieve data with SELECT, FROM and WHERE?

```
SELECT field1, field2
FROM table
WHERE condition;
```

- `SELECT` lists the fields to show, or `*` for every field.
- `FROM` names the table or tables.
- `WHERE` keeps only the records that meet the condition. Conditions use `=`, `<>`, `<`, `>`, `<=`, `>=`, and can be combined with `AND` and `OR`.

Text values go in quotation marks; numbers do not.

### How do you query two tables?

A query may use **up to two tables**. List both in `FROM` and use `WHERE` to match the foreign key to the primary key:

```
SELECT Member.Name, Club.ClubName
FROM Member, Club
WHERE Member.ClubID = Club.ClubID;
```

Writing the table name before a field (`Member.ClubID`) removes any doubt when both tables have a field with the same name. Without the matching condition, every member would be paired with every club.

## How do you insert, update and delete data?

- `INSERT INTO table VALUES (value1, value2, ...);` adds a record. You need only the form that gives **all** the values, in the same order as the fields.
- `UPDATE table SET field = value WHERE condition;` changes existing records.
- `DELETE FROM table WHERE condition;` removes records.

An `UPDATE` or `DELETE FROM` without `WHERE` affects every record in the table.

## Worked example 1: one-table queries

(a) Names of members aged 15 or over.

```
SELECT Name
FROM Member
WHERE Age >= 15;
```

Output: Tomas, Kofi, Lena.

(b) Name and age of members of club 2 who are 14.

```
SELECT Name, Age
FROM Member
WHERE ClubID = 2 AND Age = 14;
```

Output: Amira 14, Priya 14.

## Worked example 2: a two-table query

Show the name of every member of the Robotics club, with the room it meets in.

```
SELECT Member.Name, Club.Room
FROM Member, Club
WHERE Member.ClubID = Club.ClubID AND Club.ClubName = 'Robotics';
```

The first condition matches each member to their club; the second keeps only Robotics. Output: Amira C03, Priya C03, Lena C03.

## Worked example 3: changing data

Tomas moves from Chess (club 1) to Drama (club 3), Omar leaves, and a new member Sana (age 13) joins Drama.

```
UPDATE Member SET ClubID = 3 WHERE MemberID = 102;
DELETE FROM Member WHERE MemberID = 106;
INSERT INTO Member VALUES (107, 'Sana', 13, 3);
```

Member now has six records: 101 Amira (2), 102 Tomas (3), 103 Priya (2), 104 Kofi (3), 105 Lena (2), 107 Sana (3). Chess has no members but still exists in Club.

## Common mistakes

- Choosing a non-unique field, such as Name, as a primary key.
- Confusing primary and foreign keys.
- Leaving out `WHERE` in an `UPDATE` or `DELETE FROM` and changing every record.
- Missing quotation marks on text values, or putting them round numbers.
- In a two-table query, forgetting the condition that matches the foreign key to the primary key.
- Giving an `INSERT INTO` with values in a different order from the fields.

## Exam technique

For **explain** questions on why separate tables are used, give two points: data is stored once (less redundancy) and it stays consistent. For **write a query**, put each clause on its own line and spell field and table names exactly as in the question. For **state the output**, work out which records pass the `WHERE` condition, then list only the `SELECT` fields.

## Frequently asked questions

**Is ORDER BY in the 9210 specification?**
No. Retrieval uses only SELECT, FROM and WHERE. Questions will not ask you to sort results.

**How do I join two tables in 9210 SQL?**
List both tables after FROM and add a WHERE condition that matches the foreign key to the primary key. Queries never use more than two tables.

**Which form of INSERT INTO do I need?**
Only the form that supplies a value for every field: `INSERT INTO table VALUES (...)`.

**How many tables can an exam database design have?**
No more than three, written in the form TableName (Field1, Field2, ...) with the primary key underlined.

## Check your understanding

1. What is the difference between a record and a field? *A record is a row with all the data about one item; a field is one item of data (a column).*
2. In the Member table, which field is the foreign key? *ClubID.*
3. Give one benefit of storing the room only in the Club table. *It is stored once, saving space and avoiding inconsistent data when it changes.*
4. Write a query to show the names of all members of club 1. *SELECT Name FROM Member WHERE ClubID = 1; (Tomas and Omar)*
5. How many records does `SELECT * FROM Member WHERE Age = 14;` return? *2 (Amira and Priya).*
6. What happens if you run `DELETE FROM Member;`? *Every record in Member is deleted.*
7. Write a statement to change Kofi's age to 17. *UPDATE Member SET Age = 17 WHERE MemberID = 104;*
8. Write the design for Club in the specification's notation. *Club (ClubID, ClubName, Room) with ClubID underlined.*

## Related pages

- [Relational databases and SQL revision notes](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-revision-notes/)
- [Relational databases and SQL practice questions](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-practice/)

## Official specification

OxfordAQA, *International GCSE Computer Science (9210)*, for exams May/June 2019 onwards, Version 3.3, section 3.7 "Relational databases and structured query language (SQL)".
