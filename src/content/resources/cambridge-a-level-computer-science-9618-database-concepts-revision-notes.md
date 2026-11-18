---
title: "Cambridge A Level Computer Science (9618): Database Concepts -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8: Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-concepts"
description: "Condensed notes on file-based limits, keys, relationships, E-R diagrams and 1NF to 3NF for Cambridge AS Computer Science 9618 8.1, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **8.1 Database Concepts** (AS content, Paper 1). The [Database Concepts study guide](/resources/cambridge-a-level-computer-science-9618-database-concepts/) works through a full example; the [Database Concepts practice questions](/resources/cambridge-a-level-computer-science-9618-database-concepts-practice/) give exam-style practice. The DBMS itself is in the [DBMS revision notes](/resources/cambridge-a-level-computer-science-9618-database-management-systems-dbms-revision-notes/).

## File-based limitations and the relational fix

| File-based limitation | What it means | Relational fix |
|---|---|---|
| Data redundancy | Same data stored in several places | Each fact stored once, tables linked by keys |
| Data inconsistency | Copies disagree after an update | One copy, so one update is seen by all |
| Data dependence | Programs built around file layout; change the file, rewrite the programs | Programs use the DBMS, so structure can change independently |
| Hard to combine data | New program needed for each cross-file question | Tables joined in queries |
| Poor security and integrity | Whole file open or closed; no central rules | Access rights and integrity rules enforced centrally |

## Key terms

| Term | Definition |
|---|---|
| Entity | Something about which data is stored, e.g. a pupil |
| Table | Holds the data about one entity, in rows and columns |
| Record / tuple | One row: the data about one instance of the entity |
| Field / attribute | One column: one item of data about each instance |
| Candidate key | Attribute (or minimal set) unique for every record; could be the primary key |
| Primary key | The candidate key chosen to identify each record uniquely |
| Secondary key | A candidate key not chosen as primary key; used for searching, often indexed |
| Foreign key | Attribute in one table that is the primary key of another, forming the link |
| Composite key | Primary key made of two or more attributes |
| Referential integrity | Every foreign key value matches an existing primary key value |
| Index | Ordered list of key values with record locations, for fast searching and sorting |

## Relationships

- **1:1**: one record links to one, e.g. teacher and their own room.
- **1:M**: one record links to many, e.g. one pupil has many lessons. **Foreign key goes in the "many" table.**
- **M:M**: e.g. pupils and teachers. Cannot be stored directly; resolve with a **link table** (e.g. LESSON) holding both keys, giving two 1:M relationships.

**E-R diagram**: entities as labelled rectangles; lines show relationships; crow's foot (three prongs) marks the "many" end.

## Normal forms

| Form | Test | Fix |
|---|---|---|
| 1NF | No repeating groups; atomic values; primary key exists | One row per instance; choose a key |
| 2NF | 1NF, and no non-key attribute depends on only **part** of a composite key | Move partially dependent attributes to a table keyed by that part |
| 3NF | 2NF, and no non-key attribute depends on another **non-key** attribute | Move them to a table keyed by the attribute they depend on |

Memory line: every non-key attribute depends on **the key, the whole key and nothing but the key**.

A table with a single-attribute primary key that is in 1NF is automatically in 2NF.

## Normalising: the routine

1. List all attributes; spot the repeating group.
2. 1NF: one row per occurrence; pick a key (often composite).
3. 2NF: for each non-key attribute, ask "does it depend on the whole key?" If not, move it.
4. 3NF: ask "does it depend on another non-key attribute?" If so, move it.
5. Write each table as NAME(**Key**, ...), mark the primary key, list the foreign keys.

## Indexing: quick facts

- Speeds up searching and sorting on the indexed field.
- Costs extra storage, and slows inserts, updates and deletes because the index must be kept up to date.
- Primary keys are normally indexed; secondary keys are indexed when often searched.

## Exam traps

- A foreign key is the **primary key of another table**, not "any key from another table".
- Only one candidate key becomes the primary key.
- 2NF problems need a **composite** key.
- Name the attributes in a dependency: "CustomerName depends on CustomerID, a non-key attribute".
- When asked how relational databases address limitations, give the fix, not another description of the problem.
- Do not leave M:M relationships in a final design.

## Self-test

1. Define data redundancy and explain how it leads to inconsistency.
2. What is meant by data dependence in a file-based system?
3. Distinguish a candidate key from a secondary key.
4. Define foreign key.
5. A DBMS refuses to delete a customer who still has orders. Which concept is this?
6. Give one benefit and one cost of indexing a field.
7. Customers and products have a M:M relationship through orders. How is it resolved?
8. In a 1:M relationship between DEPARTMENT and EMPLOYEE, where is the foreign key?
9. State the condition for a table to be in 2NF.
10. Why can a table with a single-attribute primary key not fail 2NF (if in 1NF)?
11. EMPLOYEE(**EmpID**, Name, DeptID, DeptName). Is it in 3NF? Explain.
12. Give the 3NF tables for question 11.

**Answers**

1. The same data stored more than once; if one copy is updated and another is not, the copies disagree.
2. Programs are written around the structure of the files, so changing a file's structure means changing the programs.
3. A candidate key is any attribute (set) that could uniquely identify records; a secondary key is a candidate key that was not chosen as primary key.
4. An attribute in one table that is the primary key of another table, used to link them.
5. Referential integrity.
6. Benefit: faster searching/sorting on that field. Cost: extra storage / slower updates.
7. A link table such as ORDERLINE holding both CustomerID/OrderID and ProductID, giving two 1:M relationships.
8. In EMPLOYEE (the "many" end), as DeptID.
9. It is in 1NF and every non-key attribute depends on the whole primary key (no partial dependencies).
10. A partial dependency needs a key with more than one attribute to depend on part of.
11. No: DeptName depends on DeptID, a non-key attribute (non-key dependency).
12. EMPLOYEE(**EmpID**, Name, DeptID) and DEPARTMENT(**DeptID**, DeptName); DeptID is a foreign key in EMPLOYEE.
