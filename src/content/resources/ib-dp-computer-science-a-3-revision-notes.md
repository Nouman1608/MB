---
title: "IB DP Computer Science A.3: Databases -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.3 -- Databases"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-3"
description: "Recall notes on IB DP Computer Science A.3 Databases: keys, DDL and DML, an SQL clause sheet, query patterns, and HL views and ACID, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the SQL scope and the SL/HL split against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---

Condensed for quick recall of **A.3 Databases**, the third sub-topic of Theme A in IB DP Computer
Science, first assessment 2027 (11 hours SL / 18 hours HL). SQL queries between two tables are
required at both levels. For explanations and fully worked queries, use the
[A.3 study guide](/resources/ib-dp-computer-science-a-3/).
The exact learning outcomes are in the full DP guide held by your school.

## Key terms

| Term | Meaning |
|---|---|
| Flat file | All data in a single table |
| Redundancy | The same data stored more than once |
| Data integrity | Data is accurate and consistent |
| Relational database | Data in linked tables |
| Primary key | Uniquely identifies each record in its table |
| Foreign key | Field referring to a primary key in another table |
| Composite key | A primary key made of two or more fields |
| Referential integrity | Every foreign key value matches an existing primary key value |
| Normalisation | Organising data into related tables so each fact is stored once |
| DDL | Data definition language: defines structure (e.g. CREATE TABLE) |
| DML | Data manipulation language: works with data (SELECT, INSERT, UPDATE, DELETE) |
| View (HL) | A saved query presented like a table |
| Transaction (HL) | Operations that succeed or fail as one unit |

## Why databases beat flat files

1. **Less redundancy:** each fact stored once.
2. **Integrity:** one update changes the fact everywhere; rules can be enforced.
3. **Access control:** users can be given different permissions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--01-flat-file-problems.webp" width="900" height="612" alt="A flat file built from the school example repeats each student’s surname and house on every result row; one of Khan’s rows shows a different house (illustrative), so the data contradicts itself. The problems are redundancy, inconsistency and weak access control, which a relational database solves by storing each fact once and linking tables with keys." loading="lazy">
  <figcaption>Repeated data wastes space and lets copies disagree; related tables store each fact once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--02-two-related-tables.webp" width="900" height="654" alt="The Students table (StudentID, FirstName, Surname, House) holds four students with StudentID as primary key. The Results table (ResultID, StudentID, Subject, Score) holds six results, with StudentID as a foreign key. One student can have many results, every foreign key must match an existing student, and a change of house is made in one place." loading="lazy">
  <figcaption>The primary key in Students becomes a foreign key in Results, linking one student to many results.</figcaption>
</figure>

## SQL clause sheet

| Clause | Use |
|---|---|
| `SELECT` | Fields to show |
| `DISTINCT` | Remove duplicate rows from the result |
| `FROM` | Table(s) to read |
| `JOIN ... ON` | Combine tables where key values match |
| `WHERE` | Filter rows before grouping |
| `AND` / `OR` / `NOT` | Combine or reverse conditions |
| `BETWEEN x AND y` | Inclusive range |
| `LIKE 'A%'` | Pattern match; % stands for any characters |
| `ORDER BY ... ASC/DESC` | Sort ascending (default) or descending |
| `GROUP BY` | Form groups for aggregate functions |
| `HAVING` | Filter groups after aggregation |
| `UPDATE ... SET ... WHERE` | Change existing data |

**Order of clauses:** SELECT → FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--03-query-step-by-step.webp" width="900" height="664" alt="Query 1 run step by step on the worked tables. JOIN on StudentID gives six rows of surname, house, subject and score. WHERE keeps Maths scores between 70 and 100, leaving Khan 82 and Wu 91. ORDER BY Score DESC gives the result Wu 91, then Khan 82." loading="lazy">
  <figcaption>JOIN, then WHERE, then ORDER BY: the result is Wu 91 and Khan 82.</figcaption>
</figure>

## Query patterns to learn

**Two-table join with filter and sort**
```
SELECT A.field, B.field
FROM A
JOIN B ON A.key = B.key
WHERE condition
ORDER BY field DESC;
```

**Pattern match**
```
SELECT field FROM A WHERE field LIKE 'Mc%';
```

**Update one record**
```
UPDATE A SET field = value WHERE key = 7;
```

**HL: aggregate by group**
```
SELECT field, COUNT(*) FROM A GROUP BY field HAVING COUNT(*) > 1;
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--04-more-queries.webp" width="900" height="738" alt="Three further queries on the worked tables. LIKE ’M%’ OR House = ’Red’ returns Ben Lee and Dara Mills. SELECT DISTINCT Subject returns Maths and Physics. A join keeping Physics results where the house is NOT Blue returns Mills, since Khan and Wu are in Blue house." loading="lazy">
  <figcaption>Each condition narrows the rows: LIKE with %, DISTINCT, and NOT.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--05-update-where.webp" width="900" height="636" alt="Two runs of UPDATE Results SET Score = 68. With WHERE ResultID = 3, only that row changes, from 65 to 68. Without a WHERE clause, every score in the table becomes 68. INSERT INTO adds records and DELETE FROM ... WHERE removes them." loading="lazy">
  <figcaption>Without WHERE, UPDATE changes every row in the table.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--06-group-by-having.webp" width="900" height="758" alt="The joined rows are grouped by house. Blue has four results (82, 74, 91 and 58), so COUNT(*) is 4 and it passes HAVING COUNT(*) >= 2, giving an average of 305 ÷ 4 = 76.25. Red and Green each have one result and are removed by HAVING. WHERE filters rows before grouping; HAVING filters groups after." loading="lazy">
  <figcaption>Only Blue has at least two results, so the query returns Blue 76.25.</figcaption>
</figure>

## HL summaries

**Aggregates:** average (AVG in most systems), COUNT, MAX, MIN, SUM; used with GROUP BY; filter groups
with HAVING.

**Views:**
- Virtual: recalculated each time; always current.
- Materialised (snapshot): stored result; fast to read; must be refreshed.
- Benefits: hide complexity, simplify queries, security (show selected fields only), consistency,
  independence from table changes, performance (materialised); may be read-only or updatable.

**ACID:**
- Atomicity: all or nothing.
- Consistency: valid state to valid state.
- Isolation: concurrent transactions do not interfere.
- Durability: committed changes survive failures.

Commands: `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK`.

**Also HL:** alternative databases and data warehouses; see the full guide for required detail.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3--07-views.webp" width="900" height="584" alt="A virtual view reruns its query against the tables every time it is used, so it is always current. A materialised, or snapshot, view stores the result, so it is faster to read but must be refreshed. Views hide complexity, simplify repeated queries, limit which fields users see and keep applications working when tables change." loading="lazy">
  <figcaption>A virtual view is always current; a materialised view is faster but must be refreshed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--20-transaction-commit-rollback.webp" width="900" height="940" alt="A flowchart for an HL-only topic. BEGIN TRANSACTION starts, then two statements run: A = A − 30 and B = B + 30. If everything succeeded the transaction is committed and the changes are kept, giving A = 70 and B = 80 from a start of A = 100 and B = 50 (illustrative numbers). If a statement failed the transaction is rolled back and the changes are undone, leaving A = 100 and B = 50. Transactions maintain data integrity through atomicity, consistency, isolation and durability, known as ACID." loading="lazy">
  <figcaption>A transaction either commits or rolls back; integrity rests on atomicity, consistency, isolation and durability.</figcaption>
</figure>

## Reading a query before writing one

Paper questions may ask what a query returns. Work in clause order: take the FROM and JOIN tables,
keep only rows that pass WHERE, form groups if there is a GROUP BY, discard groups that fail HAVING,
then pick the SELECT fields and sort with ORDER BY. Writing the intermediate rows down, as in a trace
table, avoids most errors with BETWEEN (inclusive at both ends) and with NOT.

## Exam traps

- **Primary vs foreign key.** The foreign key sits in the "many" table.
- **Missing ON in a JOIN.** Without it, every row is paired with every other row.
- **UPDATE or DELETE without WHERE.** Every record changes.
- **WHERE instead of HAVING** for a condition on an aggregate.
- **Missing quotation marks** around text values; numbers need none.
- **Ambiguous field names** in two-table queries: write Table.Field.

## Self-test

Use these tables: **Customers**(CustomerID, Name, City) and **Orders**(OrderID, CustomerID, Item,
Price), linked by CustomerID.

1. Which field is the primary key of Customers?
2. Which field in Orders is a foreign key?
3. Give one example each of a DDL and a DML statement.
4. Why would storing the customer's city on every order row be a problem?
5. Write a query listing every customer's name and the items they ordered.
6. Change it to show only orders costing between 10 and 50, cheapest first.
7. Write a query listing the names of customers whose city begins with "Lon".
8. Write a statement changing the price of order 15 to 24.99.
9. Write a query listing each city only once.
10. (HL) Write a query giving the number of orders for each customer name, only where it is more than 3.
11. (HL) Explain the difference between a virtual and a materialised view.
12. (HL) Which ACID property ensures that a transfer is never half completed?

**Answers:** 1. CustomerID. 2. CustomerID. 3. DDL: `CREATE TABLE`; DML: `SELECT`, `INSERT`, `UPDATE` or
`DELETE`. 4. Redundancy, and the risk of inconsistency if the city is updated on some rows only.
5. `SELECT Customers.Name, Orders.Item FROM Customers JOIN Orders ON Customers.CustomerID =
Orders.CustomerID;` 6. Add `WHERE Orders.Price BETWEEN 10 AND 50 ORDER BY Orders.Price ASC;`
7. `SELECT Name FROM Customers WHERE City LIKE 'Lon%';` 8. `UPDATE Orders SET Price = 24.99 WHERE
OrderID = 15;` 9. `SELECT DISTINCT City FROM Customers;` 10. `SELECT Customers.Name, COUNT(*) FROM
Customers JOIN Orders ON Customers.CustomerID = Orders.CustomerID GROUP BY Customers.Name HAVING
COUNT(*) > 3;` 11. A virtual view is recalculated each time it is used, so it is always current; a
materialised view stores its result, so it is faster but must be refreshed. 12. Atomicity.

## Related pages

- [A.3 Databases study guide](/resources/ib-dp-computer-science-a-3/)
- [A.3 Databases practice questions](/resources/ib-dp-computer-science-a-3-practice/)
- [Theme A revision notes](/resources/ib-dp-computer-science-theme-a-revision-notes/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
