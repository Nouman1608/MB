---
title: "IGCSE Computer Science: Databases — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
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
description: "Original Paper 2 style database questions with answers on table design, data types, primary keys, and writing, reading and fixing SQL for Cambridge IGCSE 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Databases study guide](/resources/cambridge-igcse-computer-science-databases-study-guide/) and
[revision notes](/resources/igcse-computer-science-databases-revision-notes/)

These questions cover every learning outcome in Topic 9 of the Cambridge IGCSE Computer Science 0478 syllabus (2026–2028): defining a single-table database, data types, primary keys and SQL limited to SELECT, FROM, WHERE, ORDER BY, SUM, COUNT, AND and OR. Topic 9 is assessed on Paper 2.

Questions 1 to 9 use this table, called **Phone**, from a mobile phone shop.

| StockCode | Brand | Model | StorageGB | Price | Quantity | Refurbished |
|---|---|---|---|---|---|---|
| P101 | Nova | X2 | 128 | 249.99 | 14 | FALSE |
| P102 | Orion | S5 | 256 | 399.00 | 6 | FALSE |
| P103 | Nova | X1 | 64 | 149.50 | 0 | TRUE |
| P104 | Kestrel | K9 | 512 | 649.00 | 3 | FALSE |
| P105 | Orion | S4 | 128 | 219.00 | 9 | TRUE |
| P106 | Kestrel | K7 | 256 | 329.99 | 11 | FALSE |

---

## Section A

**1.** State the number of fields and the number of records in the Phone table. **[2]**

**2.** State the most suitable data type for each field: StorageGB, Price, Refurbished and Model. **[4]**

**3.** Identify the most suitable primary key for the table and explain why Brand would not be suitable. **[2]**

**4.** Suggest **one** suitable validation check for the Price field and **one** for the Quantity field. **[2]**

## Section B

**5.** Write an SQL query to show the Brand, Model and Price of every phone with 256 GB of storage or more, with the most expensive phone first. **[4]**

**6.** Write an SQL query to count the refurbished phones that are currently in stock (Quantity greater than 0). State the value your query returns. **[4]**

**7.** State the output of this query: **[2]**

```
SELECT SUM(Quantity)
FROM Phone
WHERE Brand = 'Nova';
```

**8.** State the output of this query, in the order it is displayed: **[3]**

```
SELECT StockCode, Model
FROM Phone
WHERE Price < 300 OR Brand = 'Kestrel'
ORDER BY Model ASC;
```

**9.** Complete this SQL script so that it shows the StockCode and Quantity of Orion phones that are not refurbished. **[3]**

```
SELECT StockCode, ....................
FROM ....................
WHERE Brand = 'Orion' .................... Refurbished = FALSE;
```

**10.** A student wrote this query to list the model and price of every Orion phone from the most to the least expensive:

```
SELECT Model Price
FROM Phone
WHERE Brand = Orion
ORDER Price DESC;
```

Identify **three** errors and write the corrected query. **[4]**

**11.** A gym wants a single-table database called Member. For each member it needs a unique membership number, the member's name, date of joining, the number of classes booked this month (0 to 40), and whether they pay monthly or yearly.

Define the table by giving a suitable field name and data type for each item, **two** suitable validation checks, and the primary key. **[8]**

---

## Answers

**1.** 7 fields [1]; 6 records [1].

**2.** StorageGB: integer [1]. Price: real [1]. Refurbished: Boolean [1]. Model: text/alphanumeric [1].

**3.** StockCode [1]. Brand values are repeated (for example Nova appears twice), so Brand cannot uniquely identify one record [1].

**4.** Price: range check, for example greater than 0 and less than 2000 / type check that it is a real number [1]. Quantity: range check that it is 0 or more / type check that it is an integer / presence check [1].

**5.**

```
SELECT Brand, Model, Price
FROM Phone
WHERE StorageGB >= 256
ORDER BY Price DESC;
```

`SELECT Brand, Model, Price` [1]; `FROM Phone` [1]; `WHERE StorageGB >= 256` [1]; `ORDER BY Price DESC` [1].

(Output would be Kestrel K9 649.00; Orion S5 399.00; Kestrel K7 329.99.)

**6.**

```
SELECT COUNT(*)
FROM Phone
WHERE Refurbished = TRUE AND Quantity > 0;
```

`SELECT COUNT(*)` [1]; `FROM Phone` [1]; both conditions joined with `AND` [1]; returns **1** (only P105) [1].

*Tip:* P103 is refurbished but has a quantity of 0, so it is excluded.

**7.** 14 [2]. (P101 has 14 and P103 has 0; 14 + 0 = 14. 1 mark for identifying both Nova records.)

**8.** Records chosen: Price below 300 gives P101, P103 and P105; Brand Kestrel gives P104 and P106. Sorted by Model in ascending order:

| StockCode | Model |
|---|---|
| P106 | K7 |
| P104 | K9 |
| P105 | S4 |
| P103 | X1 |
| P101 | X2 |

All five correct records [1]; only StockCode and Model shown [1]; correct order [1].

**9.** `Quantity` [1]; `Phone` [1]; `AND` [1].

**10.** Any three errors identified [3], corrected query [1]:
- missing comma between `Model` and `Price`
- `Orion` is text and needs single quotes: `'Orion'`
- `ORDER` must be `ORDER BY`

```
SELECT Model, Price
FROM Phone
WHERE Brand = 'Orion'
ORDER BY Price DESC;
```

**11.** Example answer:

| Field name | Data type |
|---|---|
| MemberNumber | Text/alphanumeric (or integer if purely numeric) |
| MemberName | Text/alphanumeric |
| JoinDate | Date/time |
| ClassesBooked | Integer |
| PaysMonthly | Boolean |

Marks: five meaningful field names [1]; five correct data types [3, one mark lost for each error, minimum 0]; validation — range check on ClassesBooked from 0 to 40 [1]; a second check, such as a presence check on MemberName or a format check on MemberNumber [1]; primary key MemberNumber [1], because it is unique for each member [1]. (Max 8.)

## Where marks are usually lost

- Q2: writing "number" for Price. The data type must be named exactly — real.
- Q6: counting all refurbished phones and forgetting the stock condition.
- Q8: showing every field, or ignoring the ORDER BY and listing records in table order.
- Q11: choosing MemberName as primary key; two members can share a name.

## Frequently asked questions

**Do I need a semicolon at the end of an SQL query?**
It is good practice and appears in Cambridge examples, but the marks go for the correct keywords, fields, conditions and order.

**How do I sort text fields in SQL?**
`ORDER BY Field ASC` sorts text alphabetically from A to Z; `DESC` sorts from Z to A. Values are compared character by character, so K7 comes before K9, and both come before S4.

**Can a primary key be a number?**
Yes, if every value is unique. An ID with letters, such as P101, is stored as text/alphanumeric.
