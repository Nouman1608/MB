---
title: "Cambridge A Level Computer Science (9618): Database Management Systems (DBMS) -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8: Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8.2
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-management-systems-dbms"
description: "Condensed notes on DBMS features, data dictionary, logical schema, access rights, backups, developer interface and query processor for Cambridge 9618 section 8.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **8.2 Database Management Systems (DBMS)** (AS content, Paper 1). The [DBMS study guide](/resources/cambridge-a-level-computer-science-9618-database-management-systems-dbms/) explains each feature with a worked scenario, and the [DBMS practice questions](/resources/a-level-computer-science-dbms-practice/) give exam-style practice. File-based limitations and keys are in the [Database Concepts revision notes](/resources/cambridge-a-level-computer-science-9618-database-concepts-revision-notes/).

## One sentence to remember

All access to the data goes **through the DBMS**, so it can apply one definition, one set of rules and one set of permissions to every user and program. That is how it fixes the file-based problems.

## Features and the problems they address

| DBMS feature | What it is | File-based problem it addresses |
|---|---|---|
| Data management | DBMS controls storage, retrieval and update of all data | Each program handling its own files in its own way |
| Data dictionary | Central store of metadata about every table and field | No shared definition; structure buried in program code |
| Data modelling | Designing entities, attributes and relationships (E-R diagram) before building | Redundancy and poor structure found only in use |
| Logical schema | Overall design of the whole database, independent of physical storage | Data dependence: changing storage meant rewriting programs |
| Data integrity | Types, validation rules, unique keys, referential integrity, single copy of each fact | Inconsistent copies; invalid or orphaned data |
| Data security | User accounts, access rights for individuals/groups, backups | All-or-nothing file access; data lost with no recovery |

## What goes in a data dictionary

- Table names and field names
- Data types and field sizes
- Primary keys and foreign keys
- Relationships between tables
- Validation rules
- Indexes
- Access rights for users and groups

It is **metadata**: data about the data, not the data itself.

## Logical schema versus physical storage

| Logical schema | Physical storage |
|---|---|
| Tables, attributes, data types, keys, relationships | Files, disk locations, storage formats |
| What users and programs work with | Handled by the DBMS |
| Changes rarely | Can be reorganised without changing programs |

## Integrity features

- Data type and size for each field
- Validation rules (range, allowed values, format)
- Primary key must be unique and present
- Referential integrity: foreign key must match an existing primary key; deletion of a referenced record is refused (or handled)
- Each fact stored once

## Access rights

- Each user logs in with their own account.
- Rights are set per table (or field / view) for read, insert, update, delete.
- **Groups** let the same rights be given to everyone in a role; new staff are simply added to the group.
- The DBMS refuses any operation the user's rights do not allow.

## Backup procedure checklist

- **What**: full backup of the whole database; plus incremental backups or a transaction log for changes since.
- **When**: full backup at a quiet time (e.g. overnight); more frequent incremental backups if data changes all day.
- **Where**: off-site or cloud copy, away from the original.
- **Check**: test restores regularly.

## Software tools

| Tool | Use | Purpose |
|---|---|---|
| Developer interface | Create tables, set types and rules, define relationships, build forms, queries and reports | Build and change the database and its applications without writing everything as code; give users suitable forms and reports |
| Query processor | Takes a query (e.g. SQL), checks it, plans how to run it efficiently (e.g. using an index), executes it, returns results | Users say what they want; the query processor works out how to get it |

## Key terms

| Term | Meaning |
|---|---|
| DBMS | Software that manages a database and controls all access to it |
| Metadata | Data that describes other data |
| Data dictionary | Store of metadata for the database |
| Logical schema | Overall logical structure of the whole database |
| Access rights | Permissions defining what a user or group may do with each part of the database |
| Incremental backup | Copy of only the data changed since the previous backup |

## Exam traps

- Data dictionary holds **metadata**, not the records themselves.
- The logical schema is **not** about where data is stored on disk.
- A backup answer needs what, when and where, linked to the scenario.
- The query processor **executes** queries; the developer interface is where they are **built**.
- "Explain how the DBMS addresses..." needs the problem **and** the fix for each feature.
- Access rights for **groups** is named in the syllabus; mention groups when relevant.

## Self-test

1. What is meant by metadata?
2. Give four items stored in a data dictionary.
3. What does the logical schema describe?
4. Which file-based problem does the logical schema help to solve?
5. State the purpose of data modelling.
6. Give two ways a DBMS maintains data integrity.
7. Why are access rights often given to groups rather than individuals?
8. A shop is open 8 am to 8 pm and updates stock all day. Suggest a backup procedure.
9. Why should backups be kept off-site?
10. State two things a developer can build using the developer interface.
11. Describe what the query processor does when a query is run.
12. Explain how storing each fact once improves integrity.

**Answers**

1. Data about data, such as the data type and size of a field.
2. Any four: table names; field names; data types; field sizes; primary/foreign keys; relationships; validation rules; indexes; access rights.
3. The overall design of the whole database: tables, attributes, types, keys and relationships, independent of physical storage.
4. Data dependence: storage can change without rewriting the programs.
5. To model the entities, attributes and relationships (e.g. as an E-R diagram) so that a suitable structure is designed before the database is built.
6. Any two: validation rules; data types; unique primary keys; referential integrity; one copy of each fact.
7. Everyone in a role needs the same rights, so they are set once; new staff are added to the group.
8. Full backup each night after 8 pm; incremental backups or a transaction log during the day; copies stored off-site; restores tested.
9. So that a fire, flood or theft at the shop does not destroy both the database and its backup.
10. Any two: tables; forms; queries; reports; relationships; validation rules.
11. It checks the query against the data dictionary, plans an efficient way to run it, retrieves or changes the data, and returns the results.
12. There is no second copy that could be left un-updated, so the data cannot become inconsistent.
