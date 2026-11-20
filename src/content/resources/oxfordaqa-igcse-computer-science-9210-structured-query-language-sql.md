---
title: "OxfordAQA IGCSE Computer Science (9210): Structured Query Language (SQL) -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 SQL Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.03
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "structured-query-language-sql-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.7.3: SELECT, FROM, WHERE, INSERT INTO, UPDATE and DELETE FROM, with worked queries and outputs."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.7.3 Structured Query Language (SQL)** of OxfordAQA International GCSE Computer Science
(9210). You must be able to use SQL to **retrieve data** from a relational database using **SELECT, FROM and WHERE**; to
**insert data** using **INSERT INTO**; and to **edit and delete data** using **UPDATE** and **DELETE FROM**. The additional
information limits the work: a query will extract data from **no more than two tables**, and only the form of INSERT
INTO that **specifies all of the values in a record** is required. The meaning of tables, keys and links is in the
[relational databases study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases/).

## The tables used in this guide

A school shop has two tables.

**Supplier**

| SupplierID | SupplierName | Town |
|---|---|---|
| 1 | NorthPens | Leeds |
| 2 | PaperHub | Bristol |
| 3 | BagWorld | Leeds |

**Product**

| ProductID | ProductName | Price | Stock | SupplierID |
|---|---|---|---|---|
| 101 | Gel Pen | 1.20 | 150 | 1 |
| 102 | Notebook | 2.50 | 80 | 2 |
| 103 | Backpack | 18.99 | 12 | 3 |
| 104 | Ruler | 0.80 | 200 | 1 |
| 105 | Highlighter | 1.75 | 60 | 1 |
| 106 | Folder | 1.10 | 0 | 2 |
| 107 | Pencil Case | 4.25 | 35 | 3 |

ProductID and SupplierID are the primary keys. SupplierID in Product is a foreign key.

## SQL basics

SQL is a language for asking questions of a database and for changing its data. Some conventions used here:

- Write SQL **keywords** in capital letters (SELECT, FROM, WHERE). The names of tables and fields are written exactly as
  in the design.
- A statement ends with a **semicolon**.
- **Text values** go inside quotation marks, such as `'Leeds'`. **Numbers** do not, such as `2.50`.
- Use **single quotation marks** for text values in this guide.

## Retrieving data: SELECT, FROM and WHERE

The general form is:

```
SELECT field1, field2
FROM table
WHERE condition;
```

- **SELECT** lists the fields to display. Use `*` to display every field.
- **FROM** names the table (or tables) that the data comes from.
- **WHERE** keeps only the records that satisfy the **condition**. It is optional; without it, every record is returned.

### Selecting fields

```
SELECT ProductName, Price
FROM Product;
```

This returns two columns for every record: Gel Pen 1.20, Notebook 2.50, Backpack 18.99, Ruler 0.80, Highlighter 1.75,
Folder 1.10 and Pencil Case 4.25. The records appear in the order in which they are held in the table.

### Selecting every field

```
SELECT *
FROM Product
WHERE Price > 2;
```

This returns every field of the records whose price is greater than 2. These are 102 Notebook, 103 Backpack and 107
Pencil Case, with all five fields for each.

### Comparison operators

| Operator | Meaning | Example |
|---|---|---|
| `=` | equal to | `Stock = 0` |
| `<>` | not equal to | `SupplierID <> 1` |
| `<` | less than | `Price < 1.5` |
| `>` | greater than | `Price > 2` |
| `<=` | less than or equal to | `Stock <= 35` |
| `>=` | greater than or equal to | `Price >= 1.75` |

```
SELECT ProductName
FROM Product
WHERE Stock = 0;
```

The output is **Folder**, the only product with no stock.

### Combining conditions with AND, OR

`AND` needs **both** conditions to be true. `OR` needs **at least one** to be true.

```
SELECT ProductName
FROM Product
WHERE SupplierID = 1 AND Price < 1.5;
```

Only Gel Pen (supplier 1, price 1.20) and Ruler (supplier 1, price 0.80) meet both conditions. Highlighter has supplier 1,
but its price of 1.75 is not less than 1.5.

```
SELECT ProductName
FROM Product
WHERE Stock < 50 OR Price > 10;
```

The output is **Backpack** (stock 12 and price 18.99), **Folder** (stock 0) and **Pencil Case** (stock 35). A record is
included if either condition holds.

A **range** needs two conditions joined with AND:

```
SELECT ProductName, Stock
FROM Product
WHERE Price >= 1.75 AND Price <= 5;
```

The output is Notebook 80, Highlighter 60 and Pencil Case 35.

## Querying two tables

A query may use **up to two tables**. Name both in FROM, and include a WHERE condition that **matches the foreign key to the
primary key**. Put the **table name and a full stop** before a field name when the name appears in both tables, or to
make the query clear.

```
SELECT Product.ProductName, Supplier.SupplierName
FROM Product, Supplier
WHERE Product.SupplierID = Supplier.SupplierID
AND Supplier.Town = 'Leeds';
```

How it works:

1. `Product.SupplierID = Supplier.SupplierID` pairs each product with its own supplier.
2. `Supplier.Town = 'Leeds'` keeps only suppliers in Leeds.

The output has five records: Gel Pen with NorthPens, Highlighter with NorthPens, Ruler with NorthPens, Backpack with BagWorld
and Pencil Case with BagWorld. **If the matching condition is left out**, every product is paired with every supplier, giving
7 × 3 = 21 meaningless combinations.

Another example: which supplier provides the Folder?

```
SELECT Supplier.SupplierName
FROM Product, Supplier
WHERE Product.SupplierID = Supplier.SupplierID
AND Product.ProductName = 'Folder';
```

The output is **PaperHub**.

## Adding a record: INSERT INTO

The form that you need gives **all of the values** of the record, **in the same order as the fields** in the table:

```
INSERT INTO Product
VALUES (108, 'Eraser', 0.45, 90, 2);
```

This adds a new record: ProductID 108, ProductName Eraser, Price 0.45, Stock 90 and SupplierID 2. Text is in quotation marks;
numbers are not. The foreign key value 2 must be a SupplierID that exists in the Supplier table.

## Changing records: UPDATE

```
UPDATE table
SET field = new value
WHERE condition;
```

Example: change the price of product 101 to 1.30.

```
UPDATE Product
SET Price = 1.30
WHERE ProductID = 101;
```

Only the record with ProductID 101 is changed. **If WHERE is left out, every record is changed**, so every product would
have a price of 1.30. This is a very common and serious mistake.

Example: set the stock of the Folder to 100.

```
UPDATE Product
SET Stock = 100
WHERE ProductName = 'Folder';
```

## Deleting records: DELETE FROM

```
DELETE FROM table
WHERE condition;
```

Example: remove every product with fewer than 20 items in stock.

```
DELETE FROM Product
WHERE Stock < 20;
```

In the original table this removes the Backpack (stock 12) and the Folder (stock 0). **If WHERE is left out, every record
is deleted** and the table is left empty.

## Putting the statements together

Start with the original Product table and carry out these four statements in order:

```
INSERT INTO Product VALUES (108, 'Eraser', 0.45, 90, 2);
UPDATE Product SET Price = 1.30 WHERE ProductID = 101;
UPDATE Product SET Stock = 100 WHERE ProductName = 'Folder';
DELETE FROM Product WHERE Stock < 20;
```

The table afterwards is:

| ProductID | ProductName | Price | Stock | SupplierID |
|---|---|---|---|---|
| 101 | Gel Pen | 1.30 | 150 | 1 |
| 102 | Notebook | 2.50 | 80 | 2 |
| 104 | Ruler | 0.80 | 200 | 1 |
| 105 | Highlighter | 1.75 | 60 | 1 |
| 106 | Folder | 1.10 | 100 | 2 |
| 107 | Pencil Case | 4.25 | 35 | 3 |
| 108 | Eraser | 0.45 | 90 | 2 |

The Folder's stock was raised to 100 before the DELETE ran, so only the Backpack (stock 12) has been deleted. The Gel Pen price is now 1.30, the Folder stock is 100 and the Eraser has been added.

## How to write a query

1. Decide **which fields** to show. These go after SELECT.
2. Decide **which table or tables** hold them. These go after FROM.
3. Decide **which records** are wanted, and write each requirement as a condition after WHERE. Join them with AND or OR.
4. If two tables are used, add the **matching condition** on the foreign key and the primary key.
5. Check **quotation marks** around text, and the **semicolon**.

## Common mistakes

- Leaving out **WHERE** in UPDATE or DELETE FROM, which changes or deletes **every** record.
- Using **double equals** (`==`) or the word "equals". SQL uses a single `=`.
- Forgetting **quotation marks** around text, or putting them around numbers.
- Writing `Price > 2 AND < 5`. Each condition needs its own field: `Price > 2 AND Price < 5`.
- Writing `Town = 'Leeds' OR 'Bristol'`. Repeat the comparison: `Town = 'Leeds' OR Town = 'Bristol'`.
- Using **AND** when **OR** is needed, such as asking for `Town = 'Leeds' AND Town = 'Bristol'`, which no record can satisfy.
- Leaving out the **matching condition** in a two-table query.
- Giving the values of INSERT INTO **in the wrong order**, or missing one.
- Mixing up **SELECT** (which fields to show) and **WHERE** (which records to keep).
- Using commands outside the specification, such as ORDER BY or JOIN, which are not required.

## Exam technique

- Take the **field and table names** from the scenario exactly as they are written.
- Write **SELECT, FROM and WHERE on separate lines**. It is easier to check.
- For "show the names of ... that ..." questions, the field to show is after SELECT and the "that ..." is the WHERE condition.
- For output questions, **test each record** against the condition in turn and list those that pass.
- For UPDATE and DELETE, **always include WHERE** unless every record is meant to change.
- Check your answer by reading it aloud as a sentence.

## Next steps

For a condensed summary and a self-test, use the [Structured Query Language (SQL) revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql-revision-notes/), and practise
with the [Structured Query Language (SQL) practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql-practice/).
