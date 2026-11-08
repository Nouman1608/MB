---
title: "O Level Computer Science: Databases (Cambridge 2210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 9
syllabusTopics:
  - qualification: "o-level"
    topic: "databases-2210"
description: "Topic 9 guide for Cambridge O Level Computer Science 2210: designing a single-table database, data types, validation, primary keys and SQL, with worked answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Topic 9 of Cambridge O Level Computer Science (2210) covers single-table databases: setting one up from a description of the data, choosing data types and validation for its fields, choosing a primary key, and using structured query language (SQL) to get information out of it. The SQL is limited to a short list of keywords, so this is a topic where careful practice quickly turns into reliable marks on Paper 2.

## Where Topic 9 sits in 2210

Topic 9 is part of "Algorithms, programming and logic" and is assessed on Paper 2 (1 hour 45 minutes, 75 marks). Its content matches Topic 9 of Cambridge IGCSE Computer Science (0478). There are no numbered sub-topics: the syllabus lists four learning outcomes — define a single-table database, suggest data types, understand and identify a primary key, and read, understand and complete SQL scripts.

## What a database table is made of

A **database** is an organised store of data that can be searched, sorted and updated. In 2210 every database is a **single table**.

- A **field** is one category of data stored for every item — a column, such as `DailyRate`.
- A **record** is all the data about one item — a row, such as one car.
- A **primary key** is a field whose value is unique for every record, so each record can be identified without confusion.

Here is the table used in this guide. It belongs to a car-hire company and is called **Car**.

| CarReg | Make | Seats | DailyRate | Electric | LastService |
|---|---|---|---|---|---|
| LEA 2041 | Suzuki | 5 | 35.00 | FALSE | 12/03/2026 |
| KHI 7712 | Toyota | 7 | 55.50 | FALSE | 02/05/2026 |
| ISB 3390 | Hyundai | 5 | 48.00 | TRUE | 20/01/2026 |
| LEA 5218 | Toyota | 5 | 42.25 | TRUE | 15/04/2026 |
| MUX 6603 | Honda | 4 | 30.00 | FALSE | 28/02/2026 |

It has **6 fields** and **5 records**. `CarReg` is the primary key: every registration is different, whereas makes, seat counts and rates repeat.

## Defining a table from a description

When a question describes the data an organisation wants to keep, work through the description and for each item decide:

1. a **field name** — short and meaningful, without spaces (`DailyRate`, not `the price per day`);
2. a **data type** from the syllabus list;
3. any sensible **validation** — the syllabus links validation directly to defining the table.

### Data types

| Data type | Use | Field in the Car table |
|---|---|---|
| Text/alphanumeric | Letters and numbers, or digits not used in calculations | `CarReg`, `Make` |
| Character | A single character | (e.g. a fuel code 'P' or 'D') |
| Boolean | Two possible values | `Electric` |
| Integer | Whole numbers | `Seats` |
| Real | Numbers with a fractional part | `DailyRate` |
| Date/time | Dates and times | `LastService` |

### Validation for the fields

| Field | Suitable check |
|---|---|
| CarReg | Presence check; format check (three letters, a space, four digits) |
| Seats | Range check, e.g. 2 to 9 |
| DailyRate | Range check, greater than 0; type check (real) |
| LastService | Type check that it is a valid date |

## Choosing a primary key

A good primary key is unique, always present and unlikely to change. If no natural field is unique — for example a table of club members where two people could share a name and birthday — create one, such as `MemberID`. Exam questions often ask you to explain why a particular field would **not** work: always point out that its values can be repeated.

## SQL in 2210

The syllabus limits SQL to these keywords: `SELECT`, `FROM`, `WHERE`, `ORDER BY ... ASC`, `ORDER BY ... DESC`, `SUM`, `COUNT`, `AND`, `OR`. You must be able to read and complete scripts, and identify the output a statement gives for the data in a table.

The standard shape:

```
SELECT CarReg, DailyRate
FROM Car
WHERE Seats = 5
ORDER BY DailyRate DESC;
```

- After `SELECT`, list only the fields requested, separated by commas (`*` means every field).
- After `FROM`, give the table name.
- `WHERE` filters the records; text values go in single quotes (`Make = 'Toyota'`), numbers and Boolean values do not.
- `ORDER BY` sorts the results: `ASC` for smallest/A first, `DESC` for largest/Z first.
- `SUM(field)` adds a numeric field over the selected records; `COUNT(*)` counts the selected records.

## Worked example 1: writing a query

*List the registration and make of every electric car, in alphabetical order of make.*

```
SELECT CarReg, Make
FROM Car
WHERE Electric = TRUE
ORDER BY Make ASC;
```

Output: ISB 3390 Hyundai; LEA 5218 Toyota.

## Worked example 2: two conditions

*Count the cars with five seats that cost less than 45.00 per day.*

```
SELECT COUNT(*)
FROM Car
WHERE Seats = 5 AND DailyRate < 45.00;
```

Records LEA 2041 (35.00) and LEA 5218 (42.25) meet both conditions; ISB 3390 has five seats but costs 48.00. Output: **2**.

## Worked example 3: identifying the output with OR

```
SELECT Make, Seats
FROM Car
WHERE Make = 'Honda' OR Seats > 5
ORDER BY Seats ASC;
```

Honda gives MUX 6603 (4 seats); more than 5 seats gives KHI 7712 (7 seats). Sorted by seats ascending, the output is: Honda 4; Toyota 7.

## Worked example 4: SUM

`SELECT SUM(DailyRate) FROM Car WHERE Make = 'Toyota';` returns 55.50 + 42.25 = **97.75** — the cost of hiring both Toyotas for one day.

## How to approach it

Learn the four-line SQL shape until you can write it without thinking, then practise "identify the output" questions by first ticking the records that match `WHERE`, then keeping only the `SELECT` fields, then applying `ORDER BY`. In design questions, give a data type for every field and justify the primary key with the word "unique".

## Frequently asked questions

**Does 2210 include databases with more than one table?**
No. Topic 9 is limited to single-table databases, and all SQL queries work on one table.

**Should a car registration be text or integer?**
Text/alphanumeric. It contains letters and spaces, and it is never used in calculations.

**What is the difference between SUM and COUNT?**
SUM adds up the values in a numeric field for the records selected; COUNT counts how many records are selected.

**Can I use SQL commands such as INSERT or UPDATE?**
They are not in the 2210 syllabus. Questions only ask you to query data with the listed keywords.

## Official syllabus

Cambridge International, *Cambridge O Level Computer Science (2210) syllabus for examination in 2026, 2027 and 2028*: [official syllabus PDF](https://www.cambridgeinternational.org/Images/697287-2026-2028-syllabus.pdf), Subject content, section 9 "Databases". Checked 2026-11-08.

Next steps: revise from the [Databases revision notes](/resources/o-level-computer-science-databases-revision-notes/), then practise with the [Databases practice questions](/resources/o-level-computer-science-databases-practice/).
