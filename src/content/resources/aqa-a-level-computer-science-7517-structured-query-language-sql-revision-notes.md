---
title: "AQA A-Level Computer Science (7517): Structured Query Language (SQL) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.10.4 recall: SELECT, joins, aggregates, GROUP BY, HAVING, INSERT, UPDATE, DELETE and CREATE TABLE, with common errors."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.10.4 Structured Query Language (SQL)**, AQA A-Level Computer Science (7517): use SQL to **retrieve, update, insert and delete** data from **multiple tables** and to **define a table**. Worked queries with checked results are in the [SQL study guide](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql/); questions are in the [SQL practice questions](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-practice/).

## SELECT: clause order

```
SELECT   columns or expressions
FROM     tables (with joins)
WHERE    condition on rows
GROUP BY columns
HAVING   condition on groups
ORDER BY columns [ASC | DESC]
```

- Only SELECT and FROM are compulsory; keep the clauses in this order.
- Text and dates go in **single quotes**; numbers do not.
- `*` means all columns.

## Conditions

| Need | Syntax |
|---|---|
| Comparison | `=`, `<>`, `<`, `>`, `<=`, `>=` |
| Combine | `AND`, `OR`, `NOT` (AND is evaluated before OR; use brackets) |
| Pattern | `LIKE 'B%'` (% = any number of characters) |
| Range or list | `BETWEEN 10 AND 20`, `IN ('Leeds','York')` |
| Empty value | `IS NULL`, `IS NOT NULL` (never `= NULL`) |
| Sub-query | `WHERE ID NOT IN (SELECT ID FROM Other)` |

## Aggregate functions

`COUNT(*)`, `SUM(col)`, `AVG(col)`, `MAX(col)`, `MIN(col)`

- **GROUP BY** gives one result row per distinct value of the group column.
- **WHERE** filters rows before grouping. **HAVING** filters groups after grouping, so aggregate conditions go in HAVING.
- Any column in SELECT that is not inside an aggregate must be in GROUP BY.

## Joins across tables

```
SELECT Member.MemberName, Book.Title
FROM Member
INNER JOIN Loan ON Member.MemberID = Loan.MemberID
INNER JOIN Book ON Loan.ISBN = Book.ISBN
WHERE Loan.DateBack IS NULL
```

- One `INNER JOIN ... ON` per link; match a **foreign key** to the **primary key** it refers to.
- Qualify a column with its table name if the name is not unique.
- Follow the chain of foreign keys to decide which tables are needed.
- Without an ON condition every row pairs with every row.

## Changing data

```
INSERT INTO Member (MemberID, MemberName, Year)
VALUES (5, 'Eli Park', 11)

UPDATE Book
SET CopiesOwned = CopiesOwned + 1
WHERE Genre = 'Science fiction'

DELETE FROM Loan
WHERE DateBack IS NOT NULL
```

- **Always include WHERE** in UPDATE and DELETE, or every row is changed or removed.
- INSERT: columns listed first, values in the same order.
- Key rules (primary key, foreign key) can reject changes that break them.

## Defining a table

```
CREATE TABLE Loan (
    LoanID   INTEGER     NOT NULL,
    MemberID INTEGER     NOT NULL,
    ISBN     VARCHAR(5)  NOT NULL,
    DateOut  DATE        NOT NULL,
    DateBack DATE,
    PRIMARY KEY (LoanID),
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN)
)
```

| Data type | Use |
|---|---|
| `INTEGER` | Whole numbers |
| `VARCHAR(n)` | Text up to n characters |
| `CHAR(n)` | Text of fixed length |
| `DATE` | Dates |
| `DECIMAL(p,s)` or `REAL` | Numbers with decimals |
| `BOOLEAN` | True or false |

- A composite key: `PRIMARY KEY (OrderID, ProductCode)`.
- Create the referenced table first.

## Checked results (library data)

For the practice database (4 members, 4 books, 6 loans, three not returned):

- Loans not yet returned: `SELECT COUNT(*) FROM Loan WHERE DateBack IS NULL` gives 3.
- Total copies owned: 8; average 2.0; maximum 3.

## Building a query step by step

1. Decide which **columns** the answer must show and write the SELECT line.
2. Decide which **tables** hold those columns and any columns used in conditions.
3. If more than one table is needed, add a join for each foreign key link.
4. Write the **WHERE** condition for rows, using quotes for text.
5. If the question asks "how many" or "total" per something, add the aggregate and **GROUP BY**.
6. If the condition is on the aggregate, add **HAVING**.
7. Add **ORDER BY** last, with DESC if largest first.
8. Test the query by hand on two or three rows of the sample data.

## Key terms

| Term | Definition |
|---|---|
| Query | A request to a database to retrieve or change data |
| Join | Combining rows of two tables by matching a key |
| Aggregate function | A function that summarises many rows into one value |
| Alias | A temporary name given with `AS` |
| NULL | The absence of a value |
| Sub-query | A query inside another query |
| Clause | One part of an SQL statement, such as WHERE |
| Reserved word | A word with special meaning in SQL that cannot be used as a table name |
| Data type | The kind of value a column may hold |

## Exam traps

- **Aggregate in WHERE.** Use HAVING.
- **Missing ON** in a join.
- **No WHERE** on UPDATE or DELETE.
- **Double quotes or no quotes** around text.
- **`= NULL`** instead of `IS NULL`.
- **Ungrouped column** beside an aggregate.
- **Wrong clause order** (HAVING before GROUP BY, for example).
- **Joining non-key columns** that do not match primary and foreign keys.

## Self-test

1. What does the WHERE clause do?
2. Which clause sorts the results?
3. When is HAVING used instead of WHERE?
4. Write the condition for names starting with B.
5. How is a record added to a table?
6. What happens if an UPDATE has no WHERE?
7. Why must a join have an ON condition?
8. How do you test for an empty value?
9. What does `SUM(Quantity)` return?
10. In CREATE TABLE, how is a composite primary key written?
11. Which table is created first: the one with the foreign key, or the one it refers to?
12. What does `DESC` do?

**Answers**

1. It selects only the rows that satisfy a condition.
2. ORDER BY.
3. When the condition uses an aggregate or applies to groups after GROUP BY.
4. `LIKE 'B%'`.
5. With `INSERT INTO table (columns) VALUES (values)`.
6. Every row is updated.
7. Otherwise every row of one table is paired with every row of the other.
8. `IS NULL`.
9. The total of the Quantity values in the rows selected (or in each group).
10. `PRIMARY KEY (col1, col2)`.
11. The table it refers to.
12. Sorts the results from largest to smallest.

## Related resources

- [SQL study guide](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql/)
- [SQL practice questions](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-practice/)
- [Relational databases revision notes](/resources/aqa-a-level-computer-science-7517-relational-databases-revision-notes/)
