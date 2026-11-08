---
title: "OxfordAQA IGCSE Computer Science: Relational Databases and SQL — Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes on tables, records, fields, keys, data types, table design and SQL SELECT, INSERT INTO, UPDATE and DELETE FROM for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Relational databases and SQL (topic 3.7 of OxfordAQA International GCSE Computer Science 9210) covers what a
relational database is, the key terms -- table, record, field, data type, primary key, foreign key -- how to
design tables for a scenario, and how to write SQL to retrieve, insert, update and delete data. It is assessed on
Paper 2, where you write table designs and SQL by hand.

Condensed for the final weeks. For the full explanation, use the
[Relational databases and SQL study guide](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide/).
Practise with the [Relational databases and SQL practice questions](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-practice/).

## Syllabus coverage

OxfordAQA 9210 specification (Version 3.4), section 3.7:

- **3.7.1** Relational databases -- database and relational database concepts; table, record, field, data type,
  primary key, foreign key; eliminating data inconsistency and redundancy
- **3.7.2** Database design -- data types and field lengths; choosing a primary key; designing a database for a
  scenario (**no more than three tables**)
- **3.7.3** SQL -- `SELECT`, `FROM`, `WHERE` (data from **no more than two tables** per query); `INSERT INTO`
  (the form that gives every value in the record); `UPDATE`; `DELETE FROM`

## Key terms

| Term | Meaning |
|---|---|
| **Database** | A persistent, organised store of data that can be searched and updated |
| **Relational database** | Data held in separate **tables** that are **linked** by keys |
| **Table** | A set of data about one kind of thing, e.g. Students |
| **Record** | One row of a table -- all the data about one item, e.g. one student |
| **Field** | One column of a table -- one item of data stored for every record, e.g. Surname |
| **Data type** | The kind of data a field holds, e.g. text, integer, real, Boolean, date |
| **Primary key** | A field that **uniquely identifies** each record in a table |
| **Foreign key** | A field in one table that is the **primary key of another table**, creating the link |

9210 uses these terms (not entity/attribute) for both real databases and designs.

## Why use a relational database?

In a single "flat" table the same data is repeated -- **data redundancy** -- which wastes space. When one copy is
changed and another is not, the data becomes contradictory -- **data inconsistency**. Splitting the data into linked
tables means each fact is stored **once**, which eliminates both problems.

## Designing tables

Write designs as `TableName (Field1, Field2, Field3, ...)` with the **primary key underlined** (shown here in bold).

### Worked example: a sports club

"Each member belongs to one team. A team has a name and a coach. The club records each member's name, date of
birth and phone number."

```
Team   (TeamID, TeamName, Coach)
Member (MemberID, FirstName, Surname, DateOfBirth, Phone, TeamID)
```

- **Primary keys**: **TeamID** and **MemberID** -- unique codes, because names can repeat.
- **Foreign key**: TeamID in Member links each member to their team. The team's name and coach are stored once,
  in Team, not repeated for every member.

### Choosing data types and lengths

| Field | Data type | Notes |
|---|---|---|
| MemberID | Integer (or text if it has letters, e.g. "M0042") | Primary key |
| Surname | Text, length 30 | Long enough for real names |
| DateOfBirth | Date | Allows date comparisons |
| Phone | **Text**, length 15 | Not integer: a leading 0 or "+" would be lost, and no arithmetic is done on it |
| SubsPaid | Boolean | True / False |
| Fee | Real (or currency) | Has a decimal part |

## SQL

### Retrieving data: SELECT ... FROM ... WHERE

```sql
SELECT FirstName, Surname
FROM Member
WHERE TeamID = 3;
```

- `SELECT` lists the fields to show (`*` means all fields).
- `FROM` names the table(s).
- `WHERE` gives the condition; combine conditions with `AND` / `OR`. Text values go in quotes:
  `WHERE Surname = 'Okafor'`.

**From two tables:** list both tables and **match the keys** in the `WHERE` clause.

```sql
SELECT Member.Surname, Team.TeamName
FROM Member, Team
WHERE Member.TeamID = Team.TeamID
AND Team.Coach = 'Ms Rahman';
```

### Changing data

```sql
INSERT INTO Team
VALUES (7, 'Juniors B', 'Mr Lee');           -- a value for every field, in order

UPDATE Member
SET Phone = '07700900123'
WHERE MemberID = 42;

DELETE FROM Member
WHERE MemberID = 42;
```

Only the `INSERT INTO` form that gives **all the values** of a record is required.

## Common mistakes / exam traps

- Choosing a name as a primary key -- names are not unique.
- Storing phone numbers as integers (leading zeros are lost).
- Forgetting the matching-key condition when a query uses two tables, so every row of one table is paired with
  every row of the other.
- Leaving out `WHERE` in `UPDATE` or `DELETE FROM`, which changes or deletes **every** record.
- Missing quotes around text values, or putting quotes around numbers stored as integers.
- Writing `DELETE` without `FROM` -- the specification's command is `DELETE FROM`.

## Frequently asked questions

**What SQL commands do I need for 9210?**
SELECT, FROM and WHERE to retrieve data from up to two tables; INSERT INTO with all of a record's values; UPDATE;
and DELETE FROM. ORDER BY and other clauses are not listed in the specification.

**What is the difference between a primary key and a foreign key?**
A primary key uniquely identifies each record in its own table. A foreign key is a field in another table that holds
a primary key value, linking the two tables.

**How do relational databases reduce data redundancy?**
Data about each thing is stored once in its own table and linked by keys, so the same data does not need to be
repeated in many records.

## Related resources

[Relational databases and SQL study guide](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide/) |
[Relational databases and SQL practice questions](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-practice/) |
[Web page design revision notes](/resources/oxfordaqa-igcse-computer-science-web-page-design-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.7 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
