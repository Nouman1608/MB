---
title: "OxfordAQA IGCSE Computer Science (9210): Structured Query Language (SQL) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 SQL Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.7.3: SELECT, FROM, WHERE, INSERT INTO, UPDATE and DELETE FROM with worked examples and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.7.3 Structured Query Language (SQL)** of OxfordAQA International GCSE Computer Science
(9210). Worked queries are in the [SQL study
guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql/).

## What the specification asks

- Retrieve data with **SELECT, FROM, WHERE**. A query uses **no more than two tables**.
- Insert data with **INSERT INTO**. Only the form that gives **all of the values** of a record is needed.
- Edit and delete data with **UPDATE** and **DELETE FROM**.

## The commands

| Task | Form |
|---|---|
| Retrieve | `SELECT fields FROM table WHERE condition;` |
| Retrieve every field | `SELECT * FROM table WHERE condition;` |
| Add a record | `INSERT INTO table VALUES (v1, v2, ...);` |
| Change records | `UPDATE table SET field = value WHERE condition;` |
| Delete records | `DELETE FROM table WHERE condition;` |

## Conventions

- Keywords in capitals; statement ends with `;`.
- Text values in quotation marks (`'Leeds'`); numbers without.
- Comparison operators: `=`, `<>`, `<`, `>`, `<=`, `>=`.
- Join conditions with `AND` (both true) and `OR` (at least one true).

## Example tables

**Product**

| ProductID | ProductName | Price | Stock | SupplierID |
|---|---|---|---|---|
| 101 | Gel Pen | 1.20 | 150 | 1 |
| 102 | Notebook | 2.50 | 80 | 2 |
| 103 | Backpack | 18.99 | 12 | 3 |
| 104 | Ruler | 0.80 | 200 | 1 |

**Supplier**

| SupplierID | SupplierName | Town |
|---|---|---|
| 1 | NorthPens | Leeds |
| 2 | PaperHub | Bristol |
| 3 | BagWorld | Leeds |

## Worked queries

| Task | SQL | Output |
|---|---|---|
| Names and prices of all products | `SELECT ProductName, Price FROM Product;` | Gel Pen 1.20, Notebook 2.50, Backpack 18.99, Ruler 0.80 |
| Products costing more than 2 | `SELECT ProductName FROM Product WHERE Price > 2;` | Notebook, Backpack |
| Products with supplier 1 and stock over 100 | `SELECT ProductName FROM Product WHERE SupplierID = 1 AND Stock > 100;` | Gel Pen, Ruler |
| Products with stock under 20 or price under 1 | `SELECT ProductName FROM Product WHERE Stock < 20 OR Price < 1;` | Backpack, Ruler |

## Two-table query

```
SELECT Product.ProductName, Supplier.SupplierName
FROM Product, Supplier
WHERE Product.SupplierID = Supplier.SupplierID
AND Supplier.Town = 'Leeds';
```

- The first condition **matches the foreign key to the primary key**.
- The second condition filters the records.
- Without the matching condition every product is paired with every supplier (4 × 3 = 12 pairs here).

Output (in any order): Gel Pen with NorthPens, Ruler with NorthPens and Backpack with BagWorld.

## INSERT, UPDATE and DELETE

```
INSERT INTO Product VALUES (105, 'Folder', 1.10, 0, 2);
UPDATE Product SET Price = 1.30 WHERE ProductID = 101;
DELETE FROM Product WHERE Stock = 0;
```

- INSERT: values in the **same order as the fields**, all of them.
- UPDATE: only the records that meet the WHERE condition are changed.
- DELETE: only the records that meet the WHERE condition are removed.
- **No WHERE means every record**: `UPDATE Product SET Price = 1.30;` changes every price, and `DELETE FROM Product;`
  empties the table.

After the three statements above (starting from the four-record table): the Folder is added, then deleted because its
stock is 0, and the Gel Pen costs 1.30. The final table holds products 101, 102, 103 and 104.

## Writing a query: steps

1. Fields to show: after **SELECT**.
2. Table or tables: after **FROM**.
3. Conditions for the records wanted: after **WHERE**, joined by AND or OR.
4. Two tables: add the **matching condition**.
5. Check quotation marks and the semicolon.

## Model answers

**Write a query to show the names of all products with fewer than 100 items in stock. [3 marks]**

```
SELECT ProductName
FROM Product
WHERE Stock < 100;
```

SELECT with the correct field [1]; FROM with the correct table [1]; WHERE with the correct condition [1].

**Write a statement to remove product 104. [2 marks]**

```
DELETE FROM Product
WHERE ProductID = 104;
```

**Explain what is wrong with `SELECT ProductName FROM Product, Supplier WHERE Town = 'Leeds';`. [2 marks]** There is no
condition that matches Product.SupplierID with Supplier.SupplierID, so every product is paired with every supplier, and the
result is not the products that come from Leeds suppliers.

## Reading a query aloud

`SELECT ProductName, Price FROM Product WHERE Stock = 0;` reads as: "show the name and price of every product whose stock is
0". Translating a query into a sentence is a quick way of checking that it asks the right question.

## Exam traps

- **No WHERE** in UPDATE or DELETE FROM.
- **`==`** or "equals" instead of `=`.
- **Quotation marks missing** around text, or added around numbers.
- **Half conditions:** `Price > 2 AND < 5` should be `Price > 2 AND Price < 5`.
- **`Town = 'Leeds' OR 'Bristol'`** should repeat the field: `Town = 'Leeds' OR Town = 'Bristol'`.
- **AND instead of OR** (a record cannot be in two towns at once).
- **No matching condition** in a two-table query.
- **INSERT values in the wrong order.**
- **SELECT and WHERE mixed up.** SELECT chooses the fields; WHERE chooses the records.
- **Commands outside the specification**, such as ORDER BY and JOIN.

## Key terms

| Term | Meaning |
|---|---|
| Query | A request for data from a database |
| Condition | A test that a record must pass, written after WHERE |
| Wildcard `*` | Means every field |
| Matching condition | A WHERE condition that links a foreign key to a primary key |

## Self-test

Use the Product table above.

1. Write a query to show the ProductName of every product.
2. Write a query to show all fields of products with a price below 1.
3. State the output of `SELECT ProductName FROM Product WHERE Stock >= 150;`.
4. Write a query to show the names of products with supplier 2 or a price over 10.
5. Write a statement to add product 106, Eraser, price 0.45, stock 90, supplier 2.
6. Write a statement to set the stock of product 103 to 20.
7. Write a statement to delete all products with a price over 10.
8. State what `UPDATE Product SET Stock = 0;` does.
9. State what must be added to a two-table query to link the tables.
10. State the symbol used for "not equal to".

**Answers:**
1. `SELECT ProductName FROM Product;`
2. `SELECT * FROM Product WHERE Price < 1;`
3. Gel Pen and Ruler.
4. `SELECT ProductName FROM Product WHERE SupplierID = 2 OR Price > 10;`
5. `INSERT INTO Product VALUES (106, 'Eraser', 0.45, 90, 2);`
6. `UPDATE Product SET Stock = 20 WHERE ProductID = 103;`
7. `DELETE FROM Product WHERE Price > 10;`
8. It sets the stock of every product to 0, because there is no WHERE.
9. A condition that matches the foreign key to the primary key.
10. `<>`.

## Related resources

- [Structured Query Language (SQL) study guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql/)
- [Structured Query Language (SQL) practice questions](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql-practice/)
- [Database design revision notes](/resources/oxfordaqa-igcse-computer-science-9210-database-design-revision-notes/)
