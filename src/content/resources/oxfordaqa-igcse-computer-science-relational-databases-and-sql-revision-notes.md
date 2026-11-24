---
title: "OxfordAQA IGCSE Computer Science: Relational Databases and SQL — Revision Notes"
seoTitle: "OxfordAQA IGCSE CS Relational Databases and SQL Notes"
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
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--01-table-terms.webp" width="900" height="640" alt="A Member table with fields MemberID, Name, Age and ClubID. A grey row gives each field its data type. One column is marked as a field, one column of data, and the row for Priya, 103, is marked as a record, all the data about one item." loading="lazy">
  <figcaption>A table is rows (records) and columns (fields); each field has a data type, such as text with a length.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--02-keys-link.webp" width="900" height="900" alt="The Club table has ClubID as its primary key. The Member table has MemberID as its primary key and ClubID as a foreign key. Colours match each member ClubID to the club row it refers to, and an arrow shows the foreign key pointing to the primary key." loading="lazy">
  <figcaption>A primary key is unique in its table; a foreign key matches a primary key in another table and links them.</figcaption>
</figure>

## Why use a relational database?

In a single "flat" table the same data is repeated -- **data redundancy** -- which wastes space. When one copy is
changed and another is not, the data becomes contradictory -- **data inconsistency**. Splitting the data into linked
tables means each fact is stored **once**, which eliminates both problems.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--03-redundancy.webp" width="900" height="1078" alt="One big table repeats Robotics and room C03 in three rows (redundancy). If the room changes and one record is missed, values conflict (inconsistency). With a separate Club table the room is stored once and changed once." loading="lazy">
  <figcaption>Storing the room once in a Club table avoids repeated data and conflicting values.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--04-where-comparison.webp" width="900" height="780" alt="The query SELECT Name FROM Member WHERE Age &gt;= 15 is tested on each of six records. Tomas, Kofi and Lena pass with a tick; Amira, Priya and Omar fail with a cross. The output is Tomas, Kofi, Lena." loading="lazy">
  <figcaption>WHERE tests every record; only those that pass are shown, and SELECT picks the fields.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--05-where-and.webp" width="900" height="780" alt="Each record is tested for ClubID = 2 and for Age = 14. Only Amira and Priya pass both, so the output is Amira 14 and Priya 14." loading="lazy">
  <figcaption>With AND a record must meet both conditions to be kept.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--06-two-table-query.webp" width="900" height="932" alt="Step 1 pairs each of six members with its club using the matching ClubID. Step 2 keeps the three Robotics rows. The output is Amira C03, Priya C03, Lena C03. Without the match there would be 18 pairs." loading="lazy">
  <figcaption>The first WHERE condition matches each member to a club; the second keeps only Robotics; without matching, every member pairs with every club.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide--07-change-data.webp" width="900" height="790" alt="Three statements change Member: Tomas moves to club 3, Omar is deleted, and Sana is inserted in club 3. The table then holds six records." loading="lazy">
  <figcaption>UPDATE edits a record, DELETE FROM removes one, INSERT INTO adds one; Member ends with six records.</figcaption>
</figure>

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

## More resources on this topic

[Relational databases and SQL study guide](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide/) |
[Relational databases and SQL practice questions](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-practice/) |
[Web page design revision notes](/resources/oxfordaqa-igcse-computer-science-web-page-design-revision-notes/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification, Version 3.4, section 3.7 --
[oxfordaqa.com/9210](https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/).
