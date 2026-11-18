---
title: "Cambridge A Level Computer Science (9618): Data Definition Language (DDL) and Data Manipulation Language (DML)"
resourceType: "study-guides"
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
description: "SQL DDL and DML for Cambridge AS Computer Science 9618 8.3: CREATE, ALTER, keys, SELECT with joins and aggregates, INSERT, UPDATE and DELETE."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **8.3 Data Definition Language (DDL) and Data Manipulation Language (DML)** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, examined on Paper 1. The [Databases study guide](/resources/a-level-computer-science-databases/) gives an overview of SQL across Topic 8; this page builds one small database from scratch and shows the **result** of every query, so you can check your reading of SQL as well as your writing. Condensed notes are in the [DDL and DML revision notes](/resources/cambridge-a-level-computer-science-9618-ddl-and-dml-revision-notes/), and the [DDL and DML practice questions](/resources/cambridge-a-level-computer-science-9618-ddl-and-dml-practice/) let you test yourself.

## What 8.3 asks you to do

- understand that the DBMS carries out all **creation and modification of the database structure** using its **DDL**
- understand that the DBMS carries out all **queries and maintenance of data** using its **DML**
- understand that **SQL** is the industry standard for both, and understand a given SQL statement
- understand and write simple DDL: CREATE DATABASE; CREATE TABLE with the data types CHARACTER, VARCHAR(n), BOOLEAN, INTEGER, REAL, DATE and TIME; ALTER TABLE; PRIMARY KEY (field); FOREIGN KEY (field) REFERENCES Table (Field)
- write an SQL script to query or modify data stored in **at most two** tables: SELECT ... FROM, WHERE, ORDER BY, GROUP BY, INNER JOIN, SUM, COUNT, AVG; and INSERT INTO, DELETE FROM, UPDATE.

## DDL and DML: the distinction

| | DDL | DML |
|---|---|---|
| Works on | The **structure**: databases, tables, attributes, keys | The **data** held in the tables |
| Statements in the syllabus | CREATE DATABASE, CREATE TABLE, ALTER TABLE, PRIMARY KEY, FOREIGN KEY | SELECT, INSERT INTO, UPDATE, DELETE FROM |
| Example effect | Adds a column called Email to every record | Changes one customer's email address |

A simple test: if the statement would still make sense on an empty database, it is probably DDL.

## Building the database with DDL

An invented bike hire shop needs two tables. BIKE holds each bike; HIRE holds each hire, linked to a bike.

```sql
CREATE DATABASE BikeHire;

CREATE TABLE Bike(
   BikeID    CHARACTER(4),
   Model     VARCHAR(20),
   DailyRate REAL,
   Electric  BOOLEAN,
   PRIMARY KEY (BikeID)
);

CREATE TABLE Hire(
   HireID    INTEGER,
   BikeID    CHARACTER(4),
   Customer  VARCHAR(30),
   HireDate  DATE,
   StartTime TIME,
   Days      INTEGER,
   PRIMARY KEY (HireID),
   FOREIGN KEY (BikeID) REFERENCES Bike(BikeID)
);
```

### Choosing the data types

| Attribute | Type | Reason |
|---|---|---|
| BikeID | CHARACTER(4) | Every code is exactly four characters, such as B101 |
| Model | VARCHAR(20) | Text of varying length, up to 20 characters |
| DailyRate | REAL | Money with a fractional part, such as 12.50 |
| Electric | BOOLEAN | Only TRUE or FALSE |
| HireDate | DATE | A calendar date, so dates can be compared and sorted |
| StartTime | TIME | A time of day |
| Days | INTEGER | A whole number used in calculations |

CHARACTER(n) is fixed length; VARCHAR(n) stores up to n characters. Both foreign key and primary key must have the **same** data type, which is why BikeID is CHARACTER(4) in both tables.

### Changing a table with ALTER TABLE

The shop decides to record each bike's frame size:

```sql
ALTER TABLE Bike ADD FrameSize INTEGER;
```

Keys can also be added after a table has been created:

```sql
ALTER TABLE Hire ADD PRIMARY KEY (HireID);
ALTER TABLE Hire ADD FOREIGN KEY (BikeID) REFERENCES Bike(BikeID);
```

## The data

BIKE:

| BikeID | Model | DailyRate | Electric |
|---|---|---|---|
| B101 | Trail | 18.00 | FALSE |
| B102 | City | 12.50 | FALSE |
| B103 | Volt | 30.00 | TRUE |
| B104 | Volt | 30.00 | TRUE |
| B105 | City | 12.50 | FALSE |

HIRE (StartTime omitted to save space):

| HireID | BikeID | Customer | HireDate | Days |
|---|---|---|---|---|
| 1 | B103 | Okafor | 2026-07-01 | 2 |
| 2 | B101 | Lindqvist | 2026-07-01 | 1 |
| 3 | B103 | Tan | 2026-07-04 | 3 |
| 4 | B102 | Okafor | 2026-07-05 | 5 |
| 5 | B104 | Mensah | 2026-07-05 | 1 |
| 6 | B101 | Tan | 2026-07-06 | 2 |

## Querying with DML

### Worked example 1: SELECT, WHERE and ORDER BY

```sql
SELECT Model, DailyRate
FROM Bike
WHERE Electric = FALSE
ORDER BY DailyRate DESC;
```

Result: Trail 18.00; City 12.50; City 12.50. WHERE filters rows before they are shown; ORDER BY sorts them, ascending unless DESC is written. Text values in conditions go in single quotes (`WHERE Model = 'City'`); numbers and TRUE/FALSE do not.

### Worked example 2: GROUP BY with COUNT and SUM

```sql
SELECT Model, COUNT(BikeID)
FROM Bike
GROUP BY Model;
```

Result: City 2; Trail 1; Volt 2. GROUP BY puts rows with the same Model together, and COUNT counts the rows in each group.

```sql
SELECT BikeID, SUM(Days)
FROM Hire
GROUP BY BikeID;
```

Result: B101 3; B102 5; B103 5; B104 1. B105 does not appear, because it has no rows in HIRE. The aggregate works only on rows that exist.

`SELECT AVG(Days) FROM Hire;` gives (2 + 1 + 3 + 5 + 1 + 2) ÷ 6 = 14 ÷ 6 ≈ **2.33**.

### Worked example 3: INNER JOIN across two tables

Which customers hired electric bikes, and for how long?

```sql
SELECT Hire.Customer, Bike.Model, Hire.Days
FROM Hire
INNER JOIN Bike ON Hire.BikeID = Bike.BikeID
WHERE Bike.Electric = TRUE;
```

Result: Okafor, Volt, 2; Tan, Volt, 3; Mensah, Volt, 1.

The ON clause matches each hire to its bike using the foreign key and the primary key. Writing `Table.Field` makes clear which table each attribute comes from; it is essential for BikeID, which is in both tables.

## Maintaining data with DML

Add a new hire:

```sql
INSERT INTO Hire (HireID, BikeID, Customer, HireDate, StartTime, Days)
VALUES (7, 'B105', 'Mensah', '2026-07-08', '09:30', 4);
```

Raise the rate of every Volt:

```sql
UPDATE Bike
SET DailyRate = 32.00
WHERE Model = 'Volt';
```

Remove hire 2:

```sql
DELETE FROM Hire
WHERE HireID = 2;
```

The **WHERE** clause matters most in UPDATE and DELETE. Without it, `DELETE FROM Hire;` removes every hire, and the UPDATE above would change every bike. The exact format for date and time values varies between database systems, so follow the format used in the question, and keep text, dates and times in quotes.

## Reading a given statement

Questions often show SQL and ask what it outputs, or what is wrong with it. Work clause by clause in this order: FROM (and JOIN) to see which rows exist, WHERE to filter them, GROUP BY to group them, SELECT to choose columns and calculate aggregates, then ORDER BY to sort. Writing the intermediate rows down is quicker than guessing.

## Common mistakes

- Using double quotes or no quotes around text values.
- Forgetting the comma between attribute definitions in CREATE TABLE.
- Writing `FOREIGN KEY BikeID REFERENCES Bike` without brackets around the field names.
- Selecting a column in a GROUP BY query that is neither grouped nor aggregated.
- Leaving out the ON condition, or joining on the wrong attributes.
- Forgetting WHERE in UPDATE or DELETE.
- Calling ALTER TABLE a DML statement. It changes structure, so it is DDL.

## Exam technique

When asked to **write** SQL, end each statement with a semicolon, put each clause on its own line, and use the exact table and attribute names given. When asked to **complete** a statement, copy the given parts exactly and fill only the gaps. When asked to **state the output**, list the rows in the order the ORDER BY gives, with every selected column.
