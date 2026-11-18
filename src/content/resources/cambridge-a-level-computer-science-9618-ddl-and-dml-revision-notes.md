---
title: "Cambridge A Level Computer Science (9618): DDL and DML -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8: Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8.3
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
    subtopic: "ddl-and-dml"
description: "Condensed SQL notes on data types, CREATE, ALTER, keys, SELECT, joins, aggregates and data maintenance for Cambridge AS Computer Science 9618 8.3."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **8.3 Data Definition Language (DDL) and Data Manipulation Language (DML)** (AS content, Paper 1). The [DDL and DML study guide](/resources/cambridge-a-level-computer-science-9618-ddl-and-dml/) builds a full example with results; the [DDL and DML practice questions](/resources/cambridge-a-level-computer-science-9618-ddl-and-dml-practice/) give exam-style practice. Keys and normalisation are in the [Database Concepts revision notes](/resources/cambridge-a-level-computer-science-9618-database-concepts-revision-notes/).

## The big picture

- The DBMS creates and changes **structure** with its **DDL**.
- The DBMS runs **queries** and **maintains data** with its **DML**.
- **SQL** is the industry standard for both.
- Queries in the syllabus use **at most two tables**.

## Syllabus data types

| Type | Holds | Example use |
|---|---|---|
| CHARACTER(n) | Fixed-length text of n characters | Code always 5 characters |
| VARCHAR(n) | Text of up to n characters | Name, address |
| BOOLEAN | TRUE or FALSE | Paid, Member |
| INTEGER | Whole number | Quantity, year |
| REAL | Number with a fractional part | Price, weight |
| DATE | Calendar date | Date of birth |
| TIME | Time of day | Start time |

Phone numbers and codes with leading zeros are text, not INTEGER.

## DDL templates

```sql
CREATE DATABASE Shop;

CREATE TABLE Product(
   ProductID CHARACTER(5),
   Name      VARCHAR(30),
   Price     REAL,
   InStock   BOOLEAN,
   PRIMARY KEY (ProductID)
);

CREATE TABLE Sale(
   SaleID    INTEGER,
   ProductID CHARACTER(5),
   SaleDate  DATE,
   Qty       INTEGER,
   PRIMARY KEY (SaleID),
   FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

ALTER TABLE Product ADD Supplier VARCHAR(25);
ALTER TABLE Sale ADD PRIMARY KEY (SaleID);
ALTER TABLE Sale ADD FOREIGN KEY (ProductID) REFERENCES Product(ProductID);
```

Checklist for CREATE TABLE: brackets round the list; a comma after every line except the last; a type for every attribute; size for CHARACTER and VARCHAR; key clauses with field names in brackets.

## DML query templates

| Need | SQL |
|---|---|
| Some columns, filtered | `SELECT Name, Price FROM Product WHERE Price < 5.00;` |
| Two conditions | `WHERE Price < 5.00 AND InStock = TRUE` |
| Sorted | `ORDER BY Name` (ascending) or `ORDER BY Price DESC` |
| Count per group | `SELECT Supplier, COUNT(ProductID) FROM Product GROUP BY Supplier;` |
| Total per group | `SELECT ProductID, SUM(Qty) FROM Sale GROUP BY ProductID;` |
| Mean | `SELECT AVG(Price) FROM Product;` |
| Two tables | `SELECT Product.Name, Sale.Qty FROM Sale INNER JOIN Product ON Sale.ProductID = Product.ProductID;` |

## DML maintenance templates

```sql
INSERT INTO Product (ProductID, Name, Price, InStock)
VALUES ('P0042', 'Desk lamp', 14.99, TRUE);

UPDATE Product
SET Price = 12.99
WHERE ProductID = 'P0042';

DELETE FROM Product
WHERE InStock = FALSE;
```

## Order to read a query

1. FROM and INNER JOIN ... ON: which rows exist
2. WHERE: which rows are kept
3. GROUP BY: how rows are grouped
4. SELECT: which columns, and the aggregates per group
5. ORDER BY: the order shown

## Reading practice

PRODUCT holds (P01, Pen, 1.20) and (P02, Pad, 2.50). SALE holds (1, P01, Qty 3), (2, P02, Qty 1) and (3, P01, Qty 4).

```sql
SELECT Product.Name, SUM(Sale.Qty)
FROM Sale
INNER JOIN Product ON Sale.ProductID = Product.ProductID
GROUP BY Product.Name
ORDER BY Product.Name;
```

1. The join pairs each sale with its product: Pen 3, Pad 1, Pen 4.
2. GROUP BY puts the two Pen rows together.
3. SUM adds the quantities in each group.
4. ORDER BY sorts by name.

Result: **Pad 1**, then **Pen 7**. Writing out the joined rows first, as in step 1, avoids most reading errors.

## Key terms

| Term | Meaning |
|---|---|
| DDL | Data Definition Language: statements that define or change the structure |
| DML | Data Manipulation Language: statements that query or change the data |
| SQL | Structured Query Language, the industry standard for DDL and DML |
| Aggregate function | Calculates one value from many rows: SUM, COUNT, AVG |
| INNER JOIN | Combines rows from two tables where the ON condition matches |

## Exam traps

- ALTER TABLE is **DDL**, even though it changes something.
- Text and dates in single quotes; numbers and TRUE/FALSE without.
- UPDATE and DELETE without WHERE affect **every** row.
- In a join, prefix shared attribute names with the table name.
- A group with no rows does not appear in GROUP BY output.
- INSERT values must be in the same order as the attribute list.
- Use exactly the table and attribute names the question gives.

## Self-test

1. Is CREATE TABLE part of the DDL or the DML?
2. State the difference between CHARACTER(6) and VARCHAR(6).
3. Choose a data type for (a) a price, (b) whether a fee is paid, (c) a start time.
4. Write the clause that makes StaffID the primary key.
5. Write SQL to add a field Email of up to 40 characters to the table Staff.
6. Write the clause that makes DeptID in Staff a foreign key to Dept.
7. Write SQL to list the Surname of every member of Staff with Salary over 30000, in alphabetical order.
8. Write SQL to count the staff in each DeptID.
9. What is wrong with `SELECT Name FROM Staff WHERE Dept = "Sales";`?
10. Write SQL to delete the staff record with StaffID 'S017'.
11. What happens if `UPDATE Staff SET Salary = 31000;` is run?
12. Name the three DML maintenance statements in the syllabus.

**Answers**

1. DDL.
2. CHARACTER(6) always stores exactly 6 characters; VARCHAR(6) stores up to 6.
3. (a) REAL (b) BOOLEAN (c) TIME.
4. `PRIMARY KEY (StaffID)`
5. `ALTER TABLE Staff ADD Email VARCHAR(40);`
6. `FOREIGN KEY (DeptID) REFERENCES Dept(DeptID)`
7. `SELECT Surname FROM Staff WHERE Salary > 30000 ORDER BY Surname;`
8. `SELECT DeptID, COUNT(StaffID) FROM Staff GROUP BY DeptID;`
9. The text value should be in single quotes: `'Sales'`.
10. `DELETE FROM Staff WHERE StaffID = 'S017';`
11. Every staff record gets a salary of 31000, because there is no WHERE clause.
12. INSERT INTO, UPDATE, DELETE FROM.
