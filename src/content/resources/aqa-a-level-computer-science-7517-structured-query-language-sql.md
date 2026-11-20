---
title: "AQA A-Level Computer Science (7517): Structured Query Language (SQL)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "structured-query-language-sql-7517"
description: "Deeper guide to AQA 7517 section 4.10.4: SQL to retrieve, update, insert and delete data from multiple tables and to define a table, with checked worked queries."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.10.4 Structured Query Language (SQL)** in AQA A-Level Computer Science (7517). The specification asks you to **use SQL to retrieve, update, insert and delete data from multiple tables of a relational database**, and to **use SQL to define a database table**. The queries on this page were all run against the sample data below, so the results shown are correct for that data.

The wider [fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) covers all of section 4.10. This page builds up from single-table queries to joins across four tables, and then covers changing data and defining tables.

Condensed notes are in the [SQL revision notes](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes/), and exam-style questions are in the [SQL practice questions](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-practice/).

## The sample database

**Customer**

| CustomerID | CustomerName | Town |
|---|---|---|
| 1 | Hale Ltd | Leeds |
| 2 | Okafor Co | Bristol |
| 3 | Brightside | Leeds |
| 4 | Vance & Sons | York |

**Product**

| ProductCode | ProductName | UnitPrice |
|---|---|---|
| P1 | Bolt | 0.20 |
| P2 | Nut | 0.10 |
| P3 | Washer | 0.05 |
| P4 | Bracket | 1.50 |

**Orders**

| OrderID | OrderDate | CustomerID |
|---|---|---|
| 1001 | 2026-03-02 | 1 |
| 1002 | 2026-03-04 | 2 |
| 1003 | 2026-03-09 | 1 |
| 1004 | 2026-03-11 | 3 |

**OrderLine**

| OrderID | ProductCode | Quantity |
|---|---|---|
| 1001 | P1 | 100 |
| 1001 | P2 | 100 |
| 1002 | P1 | 50 |
| 1003 | P3 | 400 |
| 1004 | P4 | 20 |
| 1004 | P1 | 30 |

Primary keys: Customer(CustomerID), Product(ProductCode), Orders(OrderID), OrderLine(OrderID, ProductCode). Foreign keys: Orders.CustomerID, OrderLine.OrderID and OrderLine.ProductCode. (The table is called Orders because Order is a reserved word in SQL.)

## Retrieving data with SELECT

The pattern is:

```
SELECT   columns
FROM     tables
WHERE    condition
GROUP BY columns
HAVING   condition on groups
ORDER BY columns
```

Only SELECT and FROM are required, and the clauses must appear in this order. SQL keywords are not case sensitive. Text values go in single quotes; numbers do not.

**Query 1: columns, condition, order.**

```
SELECT ProductName, UnitPrice
FROM Product
WHERE UnitPrice > 0.08
ORDER BY UnitPrice DESC
```

Result: Bracket 1.50; Bolt 0.20; Nut 0.10. `DESC` sorts largest first; the default `ASC` sorts smallest first.

**Query 2: text conditions.**

```
SELECT CustomerName
FROM Customer
WHERE Town = 'Leeds'
ORDER BY CustomerName
```

Result: Brightside; Hale Ltd.

`LIKE` matches patterns, where `%` stands for any number of characters. `WHERE CustomerName LIKE 'B%'` returns Brightside. Conditions are joined with `AND`, `OR` and `NOT`, and `<>` means "not equal to". Use brackets when mixing AND and OR, because AND is evaluated first.

**Query 3: aggregate functions.** `COUNT`, `SUM`, `AVG`, `MAX` and `MIN` summarise many rows.

```
SELECT COUNT(*) FROM Orders
```

Result: 4.

```
SELECT AVG(UnitPrice), MAX(UnitPrice), MIN(UnitPrice) FROM Product
```

Result: 0.4625; 1.50; 0.05.

**Query 4: GROUP BY.** `GROUP BY` forms one group for each distinct value and applies the aggregate to each group.

```
SELECT OrderID, SUM(Quantity)
FROM OrderLine
GROUP BY OrderID
```

Result: 1001 200; 1002 50; 1003 400; 1004 50.

`HAVING` filters groups after they are formed (whereas `WHERE` filters rows before):

```
SELECT Town, COUNT(*)
FROM Customer
GROUP BY Town
HAVING COUNT(*) > 1
```

Result: Leeds 2.

## Retrieving from several tables: joins

Data about an order is spread over several tables, so queries **join** tables by matching a foreign key to a primary key. Always qualify column names with the table name when the same name appears in more than one table (`Customer.CustomerID`).

**Query 5: two tables.**

```
SELECT Customer.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customer
INNER JOIN Orders ON Customer.CustomerID = Orders.CustomerID
ORDER BY Orders.OrderID
```

Result: Hale Ltd 1001 2026-03-02; Okafor Co 1002 2026-03-04; Hale Ltd 1003 2026-03-09; Brightside 1004 2026-03-11.

`INNER JOIN ... ON` keeps only rows where the join condition is true. Vance & Sons has no orders, so it does not appear.

**Query 6: four tables.** "For customers in Leeds, list each product ordered and the quantity."

```
SELECT Customer.CustomerName, Product.ProductName, OrderLine.Quantity
FROM Customer
INNER JOIN Orders ON Customer.CustomerID = Orders.CustomerID
INNER JOIN OrderLine ON Orders.OrderID = OrderLine.OrderID
INNER JOIN Product ON OrderLine.ProductCode = Product.ProductCode
WHERE Customer.Town = 'Leeds'
ORDER BY Customer.CustomerName, Product.ProductName
```

Result: Brightside Bolt 30; Brightside Bracket 20; Hale Ltd Bolt 100; Hale Ltd Nut 100; Hale Ltd Washer 400.

To build a multi-table join, follow the foreign keys from one table to the next, adding one `INNER JOIN` for each link.

**Query 7: a calculation with a join and grouping.** The total value of each order:

```
SELECT Orders.OrderID,
       SUM(OrderLine.Quantity * Product.UnitPrice) AS Total
FROM Orders
INNER JOIN OrderLine ON Orders.OrderID = OrderLine.OrderID
INNER JOIN Product ON OrderLine.ProductCode = Product.ProductCode
GROUP BY Orders.OrderID
```

Result: 1001 30.00; 1002 10.00; 1003 20.00; 1004 36.00. Check order 1001 by hand: 100 × 0.20 + 100 × 0.10 = 20 + 10 = 30.

`AS Total` gives the calculated column a name.

## Changing data

**INSERT** adds a record. Naming the columns is safest:

```
INSERT INTO Customer (CustomerID, CustomerName, Town)
VALUES (5, 'Zed Ltd', 'Hull')
```

**UPDATE** changes values in existing rows. Always include a `WHERE`, or every row changes.

```
UPDATE Product
SET UnitPrice = 0.25
WHERE ProductCode = 'P1'
```

After this, Bolt costs 0.25. Several columns can be changed in one statement with commas: `SET UnitPrice = 0.25, ProductName = 'Steel bolt'`.

**DELETE** removes rows. Again, always include a `WHERE`.

```
DELETE FROM Customer
WHERE CustomerID = 4
```

Without `WHERE`, `DELETE FROM Customer` removes every row. A delete or an insert that breaks a key rule (for example, deleting a customer who still has orders, or inserting an order for a customer who does not exist) is rejected when foreign keys are enforced.

## Defining a table: CREATE TABLE

`CREATE TABLE` names the table, lists each column with its **data type**, and states the keys.

```
CREATE TABLE Orders (
    OrderID    INTEGER      NOT NULL,
    OrderDate  DATE         NOT NULL,
    CustomerID INTEGER      NOT NULL,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
)
```

```
CREATE TABLE OrderLine (
    OrderID     INTEGER     NOT NULL,
    ProductCode VARCHAR(5)  NOT NULL,
    Quantity    INTEGER     NOT NULL,
    PRIMARY KEY (OrderID, ProductCode),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductCode) REFERENCES Product(ProductCode)
)
```

- Common data types are `INTEGER`, `VARCHAR(n)` (text up to n characters), `CHAR(n)`, `DATE`, `DECIMAL(p,s)` or `REAL`, and `BOOLEAN`.
- `NOT NULL` means that the value must be supplied.
- A **composite primary key** lists several columns in `PRIMARY KEY (...)`.
- A table referred to by a foreign key must be created first, so create Customer before Orders.

## Common mistakes

- Using `WHERE` with an aggregate such as `COUNT(*) > 1`. That needs `HAVING`.
- Forgetting the `ON` condition in a join, which pairs every row with every row.
- Leaving out `WHERE` from `UPDATE` or `DELETE`.
- Putting text in double quotes or leaving it unquoted; use single quotes.
- Selecting an ungrouped column together with an aggregate, without `GROUP BY`.
- Joining on the wrong columns: match a **foreign key** to its **primary key**.
- Using `=` with `NULL`; use `IS NULL`.

## Exam technique

- Underline the columns needed, the tables they come from, and any condition, then build the query from that.
- List tables by following the foreign key chain. The tables you need to join are those that hold your columns, plus those that connect them.
- Check each clause order: SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY.
- Check by working out the result for two or three rows of the sample data.

## Related resources

- [SQL revision notes](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes/)
- [SQL practice questions](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-practice/)
- [Normalisation study guide](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation/)

*Written against the AQA A-level Computer Science (7517) specification, 4.10.4 Structured Query Language (SQL). Always check the current specification on the AQA website.*
