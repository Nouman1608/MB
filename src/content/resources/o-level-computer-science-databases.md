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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--08-db-anatomy.webp" width="900" height="820" alt="The five-record, six-field Car table with CarReg marked as the primary key, one row labelled as a record, one column labelled as a field, and the count 6 fields and 5 records." loading="lazy">
  <figcaption>Fields are columns, records are rows, and the primary key is unique.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--09-db-datatypes.webp" width="900" height="860" alt="Each Car field with a sample value points to its data type: CarReg and Make text/alphanumeric, Seats integer, DailyRate real, Electric Boolean, LastService date/time, plus a character example." loading="lazy">
  <figcaption>Choosing a data type for every field.</figcaption>
</figure>


### Validation for the fields

| Field | Suitable check |
|---|---|
| CarReg | Presence check; format check (three letters, a space, four digits) |
| Seats | Range check, e.g. 2 to 9 |
| DailyRate | Range check, greater than 0; type check (real) |
| LastService | Type check that it is a valid date |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--10-db-validation.webp" width="900" height="980" alt="For CarReg, Seats, DailyRate and LastService, an accepted and rejected example value is shown against each check: presence, format, range 2 to 9, greater than 0, type and valid date." loading="lazy">
  <figcaption>What each validation check accepts and rejects.</figcaption>
</figure>


## Choosing a primary key

A good primary key is unique, always present and unlikely to change. If no natural field is unique — for example a table of club members where two people could share a name and birthday — create one, such as `MemberID`. Exam questions often ask you to explain why a particular field would **not** work: always point out that its values can be repeated.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--11-db-key.webp" width="900" height="1006" alt="CarReg values are all different, while Toyota repeats twice and Seats 5 repeats three times, so only CarReg can be a key. A club table shows a created MemberID separating two people with the same name and birthday." loading="lazy">
  <figcaption>A primary key must be unique, so create one if no field is.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--12-db-sql-order.webp" width="900" height="1048" alt="A four-line SELECT query, then three tables: WHERE keeps the three five-seat cars, SELECT keeps CarReg and DailyRate, ORDER BY sorts by DailyRate largest first." loading="lazy">
  <figcaption>How the output of a query is found step by step.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--13-db-and-or.webp" width="900" height="1050" alt="Two tick-and-cross grids. For AND, only LEA 2041 and LEA 5218 pass both conditions so COUNT(*) gives 2. For OR, KHI 7712 and MUX 6603 pass one condition, so ordered by seats the output is Honda 4, Toyota 7." loading="lazy">
  <figcaption>AND needs both conditions, OR needs at least one.</figcaption>
</figure>


## Worked example 4: SUM

`SELECT SUM(DailyRate) FROM Car WHERE Make = 'Toyota';` returns 55.50 + 42.25 = **97.75** — the cost of hiring both Toyotas for one day.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--14-db-sum-count.webp" width="900" height="890" alt="The two Toyota records are selected. COUNT(*) counts two records. SUM(DailyRate) adds 55.50 and 42.25 to give 97.75." loading="lazy">
  <figcaption>COUNT counts the selected records and SUM adds a numeric field.</figcaption>
</figure>


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
