---
title: "A Level Computer Science: Databases — Revision Notes (Cambridge 9618)"
seoTitle: "Cambridge 9618 Databases Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-concepts"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-management-systems-dbms"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "ddl-and-dml"
description: "Condensed notes on file-based limits, keys, relationships, 1NF to 3NF, DBMS tools and SQL DDL and DML for Cambridge AS & A Level Computer Science 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Databases (Topic 8) in Cambridge International AS & A Level Computer Science 9618 is about storing data in linked relational tables rather than separate files, designing those tables to third normal form, the features a DBMS provides, and the SQL used to define and query them. It is examined in Paper 1, where marks come from exact terminology, normalised table designs and hand-written SQL in Cambridge's subset.

Related: [Databases study guide](/resources/a-level-computer-science-databases/) · [Databases practice questions](/resources/a-level-computer-science-databases-practice/)

## Syllabus coverage

- **8.1 Database Concepts**: limitations of file-based storage; relational features that address them; terminology (entity, table, record, field, tuple, attribute, primary, candidate, secondary and foreign key, 1:1, 1:M and M:M relationships, referential integrity, indexing); E-R diagrams; normalisation to 1NF, 2NF and 3NF.
- **8.2 Database Management Systems (DBMS)**: data dictionary, data modelling, logical schema, data integrity, data security (backup, access rights); developer interface; query processor.
- **8.3 DDL and DML**: SQL as the industry standard; CREATE DATABASE, CREATE TABLE with the seven named data types, ALTER TABLE, PRIMARY KEY, FOREIGN KEY ... REFERENCES; SELECT ... FROM, WHERE, ORDER BY, GROUP BY, INNER JOIN, SUM, COUNT, AVG; INSERT INTO, DELETE FROM, UPDATE (at most two tables).

## File-based limitation → relational solution

| Limitation of separate files | How a relational database addresses it |
|---|---|
| Data redundancy (same data in many files) | Each item is stored once, in one table, and linked by keys |
| Data inconsistency (copies disagree) | Only one copy to update, so data stays consistent |
| Data dependence (programs tied to file structure) | The DBMS separates programs from storage (program-data independence) |
| Hard to combine data | SQL queries can join any related tables |
| Weak security | The DBMS sets access rights per user or group |
| Weak integrity | Validation rules and referential integrity are enforced centrally |

## Terminology table

| Term | Meaning |
|---|---|
| Entity | A thing about which data is stored; becomes a table |
| Table | A set of records about one entity |
| Record / tuple | One row of a table |
| Field / attribute | One column of a table |
| Candidate key | Attribute(s) that could uniquely identify every record |
| Primary key | The candidate key chosen to identify records |
| Secondary key | A candidate key not chosen as the primary key; may be indexed for searching |
| Foreign key | An attribute that is the primary key of another table, used to link them |
| Composite key | A key made of two or more attributes |
| Referential integrity | Every foreign key value matches an existing primary key value |
| Index | A data structure of key values and record positions that speeds up searching |

## Relationships

| Type | Example | How it is implemented |
|---|---|---|
| One-to-one | Country – CapitalCity | Foreign key in either table |
| One-to-many | Team – Player | Foreign key in the "many" table (Player holds TeamID) |
| Many-to-many | Player – Tournament | Link table, e.g. ENTRY(PlayerID, TournamentID), giving two 1:M relationships |

On an E-R diagram, crow's-foot prongs mark the "many" end.

## Normal forms in one line each

| Form | Rule | Fault removed |
|---|---|---|
| 1NF | No repeating groups; atomic values; a primary key exists | Repeating groups |
| 2NF | 1NF + no non-key attribute depends on only part of a composite key | Partial dependencies |
| 3NF | 2NF + no non-key attribute depends on another non-key attribute | Non-key (transitive) dependencies |

**To explain why a table is not in 3NF**, name the attribute and what it depends on: "CoachName depends on CoachID, which is not the primary key of TEAM, so there is a non-key dependency."

## DBMS features

| Feature | Purpose |
|---|---|
| Data dictionary | Stores metadata: table and field names, data types, validation rules, keys, relationships |
| Data modelling | Tools to design the structure, e.g. E-R diagrams |
| Logical schema | The overall logical design of the database, independent of physical storage |
| Data integrity | Validation, referential integrity, controlled concurrent updates |
| Data security | Access rights for individuals/groups, passwords, backup and restore procedures |
| Developer interface | Lets developers create tables, forms, queries and reports, often without code |
| Query processor | Takes a query, plans how to execute it efficiently, runs it and returns the result |

## SQL quick reference

| Purpose | Syntax pattern |
|---|---|
| New database | `CREATE DATABASE Club;` |
| New table | `CREATE TABLE T(Field1 INTEGER, Field2 VARCHAR(30), PRIMARY KEY (Field1));` |
| Data types | CHARACTER, VARCHAR(n), BOOLEAN, INTEGER, REAL, DATE, TIME |
| Add field | `ALTER TABLE T ADD Field3 DATE;` |
| Add foreign key | `ALTER TABLE T ADD FOREIGN KEY (F) REFERENCES Other(F);` |
| Query | `SELECT fields FROM table WHERE condition ORDER BY field;` (ASC is default, DESC for descending) |
| Aggregate per group | `SELECT field, COUNT(x) FROM table GROUP BY field;` |
| Join two tables | `FROM A INNER JOIN B ON A.Key = B.Key` |
| Insert | `INSERT INTO T (F1, F2) VALUES (1, 'Ana');` |
| Change data | `UPDATE T SET F2 = 'Bea' WHERE F1 = 1;` |
| Delete rows | `DELETE FROM T WHERE F1 = 1;` |

Text and date literals go in single quotes; numbers and Booleans (TRUE/FALSE) do not.

## Worked example: a two-table query with grouping

Tables: TEAM(**TeamID**, TeamName, CoachID) and PLAYER(**PlayerID**, Surname, TeamID, Goals, Registered). Show each team's name and its total goals, highest first, counting only registered players.

```sql
SELECT TEAM.TeamName, SUM(PLAYER.Goals)
FROM TEAM
INNER JOIN PLAYER ON TEAM.TeamID = PLAYER.TeamID
WHERE PLAYER.Registered = TRUE
GROUP BY TEAM.TeamName
ORDER BY SUM(PLAYER.Goals) DESC;
```

Mark-earning points: correct fields, the join condition on the shared key, the Boolean condition without quotes, SUM (not COUNT) because goals are added, GROUP BY because the total is per team, ORDER BY ... DESC. To find how many players each team has, use COUNT(PLAYER.PlayerID) instead.

## Common mistakes and exam traps

- COUNT and SUM confused, and GROUP BY missing (in every series from June 2024 to June 2025).
- UPDATE used to change table structure; ALTER TABLE is needed (June 2024).
- A Boolean field compared with a string, e.g. `= 'Yes'` (June 2025).
- "Database" written when the answer means a table (November 2024).
- File-based limitations repeated when the question asked how a relational database overcomes them (November 2024).
- Not knowing what a candidate key is, or giving a primary key when a foreign key is asked for (June 2025).

## Frequently asked questions

**What is the difference between DDL and DML?** DDL (Data Definition Language) creates and changes the structure, e.g. CREATE TABLE and ALTER TABLE. DML (Data Manipulation Language) queries and maintains the data, e.g. SELECT, INSERT, UPDATE and DELETE.

**Can a table with a single-field primary key fail 2NF?** No. A partial dependency needs a composite key, so a 1NF table with a single-attribute key is automatically in 2NF; check it for non-key dependencies to decide 3NF.

**Does an index change the data in the table?** No. It is a separate structure that stores key values with pointers to records, making searches faster at the cost of extra storage and slower updates.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 8 Databases (8.1 to 8.3). Examiner points are from Cambridge's Principal Examiner Reports, summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
