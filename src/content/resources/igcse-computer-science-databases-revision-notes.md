---
title: "IGCSE Computer Science: Databases — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 9
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0478"
description: "Revision notes on single-table databases, fields, records, data types, primary keys and SQL SELECT, WHERE, ORDER BY, SUM and COUNT for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 9 Databases is about designing a single-table database and querying it with SQL. In Cambridge IGCSE Computer Science (0478) you must define fields, records and validation from a description of the data, choose data types, pick a primary key, and read, complete or write SQL scripts using a short, fixed list of keywords. It is examined on Paper 2 and is one of the most reliable sources of marks if you learn the SQL layout exactly.

Condensed for the final weeks. For the full explanation, use the
[Databases study guide](/resources/cambridge-igcse-computer-science-databases-study-guide/); to practise, use the
[Databases practice questions](/resources/igcse-computer-science-databases-practice/).

## Syllabus coverage

Learning outcomes from the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028:

| Ref | Learning outcome (summarised) |
|---|---|
| 9.1 | Define a single-table database from given data storage requirements, including fields, records and validation |
| 9.2 | Suggest suitable basic data types: text/alphanumeric, character, Boolean, integer, real, date/time |
| 9.3 | Understand the purpose of a primary key and identify a suitable primary key |
| 9.4 | Read, understand and complete SQL scripts using SELECT, FROM, WHERE, ORDER BY (ascending and descending), SUM, COUNT, AND, OR; identify the output of an SQL statement |

## Key definitions

| Term | Meaning |
|---|---|
| Database | A structured collection of related data that can be searched and sorted |
| Table | Data about one type of thing, arranged in rows and columns |
| Field | One item of data about each record — a column, such as `Surname` |
| Record | All the data about one item — a row, such as one athlete |
| Primary key | A field that holds a unique value for every record, so each record can be identified |
| Validation | Checks applied when data is entered, such as a range check on `Age` |
| SQL | Structured query language, used to query data in the table |

## Choosing data types

| Data type | Use for | Example field |
|---|---|---|
| Text/alphanumeric | Letters, symbols and numbers not used in calculations | `Name`, `PhoneNumber`, `Postcode` |
| Character | Exactly one character | `Grade` ('A') |
| Boolean | Only two values, TRUE/FALSE or Yes/No | `Member` |
| Integer | Whole numbers | `Age`, `Laps` |
| Real | Numbers with decimals | `BestTime` (12.84) |
| Date/time | Dates or times | `JoinDate` |

Phone numbers and ID codes with letters or leading zeros are **text**, not integer.

## Sample table: Athlete

| AthleteID | Name | Event | Age | BestTime | Member |
|---|---|---|---|---|---|
| A01 | R Khan | 100m | 16 | 12.84 | TRUE |
| A02 | M Silva | 200m | 17 | 26.10 | FALSE |
| A03 | T Osei | 100m | 15 | 13.02 | TRUE |
| A04 | J Lee | 400m | 17 | 61.45 | TRUE |
| A05 | S Ahmed | 200m | 16 | 25.77 | TRUE |

The table has **6 fields** and **5 records**. `AthleteID` is the primary key, because names, events and ages can repeat but each ID is unique.

## SQL layout to learn

```
SELECT field1, field2
FROM TableName
WHERE condition
ORDER BY field ASC;
```

- `SELECT` — the fields to show (`*` means all fields)
- `FROM` — the table
- `WHERE` — the condition records must meet; combine with `AND` / `OR`
- `ORDER BY ... ASC` or `ORDER BY ... DESC` — sort the results
- `SUM(field)` — add up a numeric field for the selected records
- `COUNT(*)` — count the selected records
- Text values go in single quotes: `WHERE Event = '100m'`. Numbers and Boolean values do not.

## Worked examples on the Athlete table

**1. Names and best times of 100m athletes, fastest first**

```
SELECT Name, BestTime
FROM Athlete
WHERE Event = '100m'
ORDER BY BestTime ASC;
```

Output: R Khan 12.84; T Osei 13.02.

**2. How many athletes are members aged 16 or over?**

```
SELECT COUNT(*)
FROM Athlete
WHERE Member = TRUE AND Age >= 16;
```

Output: 3 (A01, A04, A05).

**3. Reading a query with OR**

```
SELECT AthleteID, Event
FROM Athlete
WHERE Event = '400m' OR Age = 15
ORDER BY AthleteID DESC;
```

Output, in this order: A04 400m; A03 100m.

**4. SUM**

`SELECT SUM(Age) FROM Athlete WHERE Event = '200m';` returns 33 (17 + 16).

## Defining a table from a description

When a question describes the data to store, give for each field: a **meaningful field name**, a **data type**, and, where sensible, a **validation check** (for example a range check that `Age` is between 11 and 19, or a presence check on `Name`). Then state the primary key and why.

## Common mistakes / exam traps

- Swapping field and record. A field is a column; a record is a row.
- Choosing `Name` or `Surname` as a primary key — values are not guaranteed unique.
- Giving "number" as a data type. Say integer or real.
- Storing a phone number as integer: leading zeros are lost and no calculation is needed.
- Missing quotes round text values in `WHERE`, or putting quotes round numbers.
- Writing `ORDER BY` without `ASC`/`DESC` when the question specifies an order — Cambridge's list names both.
- Using `COUNT(Age)` to add ages. `COUNT` counts records; `SUM` adds values.
- In "identify the output" questions, ignoring the ORDER BY or listing fields that were not in the SELECT.

## Frequently asked questions

**Does 0478 include relational databases with several tables?**
No. Topic 9 is limited to a single-table database, and SQL is limited to querying data stored in one table.

**Which SQL keywords can appear in the 0478 exam?**
SELECT, FROM, WHERE, ORDER BY with ascending or descending, SUM, COUNT, AND and OR. Commands such as INSERT, UPDATE or JOIN are not in the syllabus.

**What makes a good primary key?**
A field whose value is different for every record and will not change, such as an ID number created for the purpose. Fields like names or dates of birth can be repeated.

## Self-test

1. How many fields does the Athlete table have?
2. Suggest a data type for `JoinDate` and for `Member`.
3. Write an SQL query to show all fields for athletes aged 17.
4. What does `SELECT COUNT(*) FROM Athlete WHERE BestTime < 26;` return?
5. Explain why `Event` is not a suitable primary key.

**Answers:** 1. Six. 2. Date/time; Boolean. 3. `SELECT * FROM Athlete WHERE Age = 17;` 4. 3 (12.84, 13.02 and 25.77). 5. More than one athlete can take part in the same event, so values such as '100m' are repeated and cannot identify one record.
