---
title: "Cambridge IGCSE Computer Science (0478): Databases -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 9: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 9
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0478"
description: "Single-table databases, fields, records, primary keys, data types and SQL queries using SELECT, FROM, WHERE, ORDER BY, SUM and COUNT for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

A database is an organised collection of data that can be searched, sorted and updated efficiently. In Cambridge IGCSE Computer Science 0478 the topic is deliberately focused: you work with a single table, and you write short SQL queries to get information out of it. It is a good topic for secure marks because the rules are precise and the questions are predictable once you have practised the query pattern.

## Where this fits in the specification

Databases is Topic 9, after programming and before Boolean logic. It uses ideas from earlier topics: the data types here (text, integer, real, Boolean, date) match those you meet in programming, and the idea of a file of records is the same one you use in file handling. Questions usually give you a table of data and ask you to identify fields, choose a key, write a query, or state what a query would output.

## Terms you must know

A **table** holds data about one kind of thing, for example books. Each column is a **field**, which holds one kind of fact (Title, Price). Each row is a **record**, which holds all the facts about one item. A **field name** is the heading of a column.

A **primary key** is a field whose value is unique for every record, so each record can be identified without ambiguity. A person's name is a poor choice because two people can share one; an ID number is a good one. A primary key cannot be left empty. A database that uses one table like this is sometimes called a **flat-file** database.

Each field has a **data type**. The ones you need are:

| Data type | Used for | Example field |
|---|---|---|
| Text (alphanumeric) | Letters, digits and symbols | Title |
| Integer | Whole numbers | Stock |
| Real | Numbers with a decimal part | Price |
| Boolean | Yes/No, TRUE/FALSE | InPrint |
| Date/time | Dates and times | DateAdded |

Choose the type that matches the way the field will be used. A phone number is text, not an integer, since you never calculate with it and a leading zero would be lost. A field such as Stock, which is used in calculations, is an integer.

Good databases also use **validation** to stop bad data entering a field, for example a range check on Stock so it cannot be negative, and a presence check so the primary key is never missing.

## Sample table used in this guide

| BookID | Title | Author | Year | Price | Stock |
|---|---|---|---|---|---|
| 1 | Harbour Lights | N Okafor | 2019 | 8.50 | 12 |
| 2 | The Slow River | L Brandt | 2016 | 6.99 | 0 |
| 3 | Iron Orchard | N Okafor | 2021 | 12.00 | 5 |
| 4 | Paper Moons | S Idris | 2016 | 7.25 | 9 |
| 5 | Cold Station | L Brandt | 2022 | 9.75 | 3 |

The table is called Book. It has six fields and five records. BookID is the primary key.

## Structured Query Language (SQL)

**SQL** is the language used to query a database. The syllabus asks you to read and write queries using these keywords:

- `SELECT` lists the fields you want to see (or `*` for every field);
- `FROM` names the table;
- `WHERE` sets the condition that records must meet;
- `ORDER BY` sorts the results, ascending by default, or descending if you add `DESC`;
- `SUM` adds up the values in a field;
- `COUNT` counts the records.

A query has the pattern:

```
SELECT field1, field2
FROM table
WHERE condition
ORDER BY field ASC
```

Conditions use the comparison operators `=`, `<>`, `<`, `>`, `<=` and `>=`, and can be joined with `AND`, `OR` and `NOT`. Text values go in quotation marks (`'N Okafor'`) and numbers do not. End each statement with a semicolon. Spell field names exactly as they appear in the table.

`SUM` and `COUNT` give one value for the whole selection: `SELECT SUM(Stock) FROM Book;` returns a single number. Remember that `COUNT` counts records, so `SELECT COUNT(*) FROM Book WHERE Stock > 0;` counts the books that are in stock.

## Worked example 1: writing queries

Using the Book table, write the SQL for each task and give the output.

**(a) Titles and prices of books published in 2016, cheapest first.**

```
SELECT Title, Price
FROM Book
WHERE Year = 2016
ORDER BY Price;
```

The records with Year = 2016 are The Slow River (6.99) and Paper Moons (7.25). Output in order: The Slow River 6.99, then Paper Moons 7.25.

**(b) The number of books currently in stock.**

```
SELECT COUNT(*)
FROM Book
WHERE Stock > 0;
```

Four books have a Stock above 0 (The Slow River has 0), so the output is 4.

**(c) The total number of copies held.**

```
SELECT SUM(Stock)
FROM Book;
```

12 + 0 + 5 + 9 + 3 = 29, so the output is 29.

**(d) The title of cheaper books by N Okafor (under 10.00).**

```
SELECT Title
FROM Book
WHERE Author = 'N Okafor' AND Price < 10;
```

N Okafor wrote Harbour Lights (8.50) and Iron Orchard (12.00). Only Harbour Lights satisfies both conditions, so the output is Harbour Lights.

## Worked example 2: reading a query

State the output of:

```
SELECT Author, Title
FROM Book
WHERE Year > 2016
ORDER BY Year DESC;
```

First apply `WHERE`: books with Year above 2016 are Harbour Lights (2019), Iron Orchard (2021) and Cold Station (2022). Then apply `ORDER BY Year DESC`, newest first: Cold Station, Iron Orchard, Harbour Lights. Finally apply `SELECT`, which shows only Author and then Title. The output is therefore three rows: L Brandt, Cold Station; N Okafor, Iron Orchard; N Okafor, Harbour Lights. The Year field is used to sort but is not displayed, because it is not in the SELECT list.

## Choosing a good primary key

When you are asked to suggest a primary key, give the field and a reason. A good answer is "BookID, because it is unique for each record." A weak answer is "Title, because it is important." You can also be asked why a field is unsuitable: Author is not unique because one author can write several books, and Year is shared by many records.

## Common mistakes

- Forgetting quotation marks around text values, or putting them around numbers.
- Putting the fields in `FROM` and the table in `SELECT`.
- Using `ORDER BY` before `WHERE`. The order of the clauses is fixed: SELECT, FROM, WHERE, ORDER BY.
- Writing `AND` when the question needs `OR`: "2016 or 2019" is `Year = 2016 OR Year = 2019`, not `AND`.
- Choosing a field such as a name as a primary key.
- Saying a record is a column, or a field is a row. Fields run down (columns); records run across (rows).
- Giving a trailing explanation when the question only asks for the output.

## Exam technique

The command word **state** wants the output only. **Write** wants the full query, and each clause is usually worth a mark, so lay the query out on separate lines. In "complete the query" questions, read the question first and identify which clause is missing: it is usually the `WHERE` condition or the `ORDER BY`. Check that field names are copied exactly. When you read a query, work in the order the database does: `FROM`, then `WHERE`, then `ORDER BY`, then the fields shown by `SELECT`. For "describe the data type" questions, answer with the type and then justify it from the data.

## Check your understanding

1. What is the difference between a field and a record? *A field is one column holding one kind of fact; a record is one row holding all the facts about one item.*
2. Why is a telephone number stored as text? *It is not used in calculations and may begin with a zero, which would be lost in an integer.*
3. Write a query to show all fields for books by L Brandt. *SELECT * FROM Book WHERE Author = 'L Brandt';*
4. What does `SELECT COUNT(*) FROM Book WHERE Year = 2016;` output for the sample table? *2.*
5. Write a query to list the Title of every book with a Price over 8.00, most expensive first. *SELECT Title FROM Book WHERE Price > 8 ORDER BY Price DESC;* (output: Iron Orchard, Cold Station, Harbour Lights)
6. Give one reason why Author is not suitable as a primary key. *Authors can write more than one book, so the values are not unique.*
7. What does `SELECT SUM(Price) FROM Book WHERE Stock = 0;` return? *6.99.*
8. Name one validation check that could be applied to the Stock field. *A range check to make sure the value is not negative (or a type check to make sure it is an integer).*

## Frequently asked questions

**What is a primary key in IGCSE Computer Science?**
A primary key is a field whose value is unique for every record, so each record can be identified, such as an ID number. A name is a poor choice because two records can share it.

**What SQL do you need for Cambridge IGCSE Computer Science 0478?**
The syllabus uses SELECT, FROM, WHERE, ORDER BY, SUM and COUNT on a single table, with comparison operators and AND, OR and NOT in conditions.

**What is the difference between a field and a record?**
A field is a column holding one kind of fact, such as Title. A record is a row holding all the facts about one item.

**Do text values in SQL need quotation marks?**
Yes. Text values go in quotation marks, such as 'N Okafor', but numbers do not. Getting this wrong is a common mistake.
