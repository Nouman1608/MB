---
title: "Cambridge A Level Computer Science (9618): Database Management Systems (DBMS)"
resourceType: "study-guides"
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
description: "Data dictionary, logical schema, integrity, access rights, backups, developer interface and query processor for Cambridge AS Computer Science 9618 8.2."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **8.2 Database Management Systems (DBMS)** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, examined on Paper 1. The [Databases study guide](/resources/a-level-computer-science-databases/) summarises all of Topic 8; this page goes further into 8.2, showing what each DBMS feature looks like in practice and how to tie it to a file-based problem. Use the [DBMS revision notes](/resources/cambridge-a-level-computer-science-9618-database-management-systems-dbms-revision-notes/) for quick recall and the [DBMS practice questions](/resources/a-level-computer-science-dbms-practice/) to test yourself.

## What 8.2 asks you to do

The syllabus has two statements:

- show understanding of the features provided by a DBMS that **address the issues of a file-based approach**, including data management (with maintaining a **data dictionary**), **data modelling**, the **logical schema**, **data integrity**, and **data security** (including **backup procedures** and the use of **access rights** for individuals and groups of users)
- show understanding of how software tools in a DBMS are used in practice, including the use and purpose of the **developer interface** and the **query processor**.

The first statement is written as "features that address the issues", so most marks go to answers that say which problem a feature solves. The problems themselves are in 8.1; see the [Database Concepts study guide](/resources/cambridge-a-level-computer-science-9618-database-concepts/).

## What a DBMS is

A **database management system** is the software that sits between the stored data and everyone who uses it: users, application programs and developers. Nobody reads or writes the data files directly; every request goes through the DBMS. That single point of control is why the DBMS can solve the file-based problems: it can enforce one set of rules, one set of permissions and one description of the data for everybody.

## Data management and the data dictionary

The DBMS manages how data is stored, retrieved and updated, and keeps a **data dictionary**: a store of **metadata**, data about the data. For one table in an invented gym database, the dictionary might hold:

| Item | Example entry |
|---|---|
| Table name | MEMBER |
| Field names | MemberID, Surname, JoinDate, Plan |
| Data types and sizes | MemberID CHARACTER(6); Surname VARCHAR(30); JoinDate DATE; Plan CHARACTER(1) |
| Primary key | MemberID |
| Foreign keys and relationships | Plan in MEMBER references PLAN(PlanCode), one plan to many members |
| Validation rules | Plan must be 'B', 'S' or 'P'; JoinDate cannot be in the future |
| Indexes | Index on Surname |
| Access rights | Reception group: read and update MEMBER; Trainers group: read only |

**How it addresses file-based issues:** in a file-based system, each program has its own idea of what the file contains, written into its code. With a data dictionary there is one central definition, so programs and users share the same, consistent description of the data, and the DBMS uses the dictionary to check every request against the rules.

## Data modelling

**Data modelling** is producing a model of the data to be stored and how items relate, before the database is built: identifying the entities, their attributes and the relationships between them, usually drawn as an **E-R diagram**. A DBMS provides tools to create and view the model and to turn it into tables. Modelling first means redundancy and many-to-many relationships are dealt with at the design stage instead of being discovered in use.

## The logical schema

The **logical schema** is the overall design of the whole database: every table, its attributes and data types, the keys and the relationships between tables. It describes **what** is stored and how it is organised, not **how** it is physically held on disk (file formats, storage locations). Because applications work with the logical schema, the physical storage can be reorganised without rewriting the programs. This is the answer to the file-based problem of **data dependence**.

## Data integrity

A DBMS protects integrity (accurate, consistent data) in several ways, each defined once and applied to every user and program:

- **Data types and field sizes**: a DATE field cannot store "next Tuesday".
- **Validation rules** on fields, such as a range or a list of allowed values, checked whenever data is entered or changed.
- **Primary keys** must be unique and present, so duplicate records cannot be created.
- **Referential integrity**: a foreign key value must match an existing primary key, so a member cannot be linked to a plan that does not exist, and a plan cannot be deleted while members still use it.
- Data is stored **once**, so there are no second copies to become inconsistent.

## Data security: access rights and backups

### Access rights

Users log in with their own accounts, and the DBMS checks every request against the **access rights** set for that individual or for the **group** they belong to. Rights can be granted per table (and in many systems per field or per view) for operations such as read, insert, update and delete. Groups make administration manageable: give the Reception group its rights once, then add each new receptionist to the group.

Using the gym example:

| Group | MEMBER | PAYMENT | PLAN |
|---|---|---|---|
| Manager | Read, insert, update, delete | Read, insert, update, delete | Read, update |
| Reception | Read, insert, update | Read, insert | Read |
| Trainers | Read (no contact details) | No access | Read |

In a file-based system, access is usually to a whole file or nothing; the DBMS can be much more precise, which protects privacy as well as security.

### Backup procedures

A DBMS supports regular **backups** so the database can be restored after hardware failure, corruption or a mistaken deletion. A sound procedure states:

- **what** is copied: a full backup of the whole database, and between full backups either incremental backups (only the changes since the last backup) or a log of transactions
- **when**: for example a full backup each night when the gym is closed, and incremental backups during the day
- **where**: copies kept away from the original, such as off-site or in cloud storage, so one fire or theft cannot destroy both
- **testing**: restoring from a backup now and then to prove it works.

## Software tools: the developer interface and the query processor

### The developer interface

The **developer interface** lets a developer create and modify the database and the applications built on it without writing everything as code: designing tables and setting field types and validation rules, defining relationships, and building **forms** for data entry, **queries**, and **reports**. Purpose: the developer can build a working system quickly, and users get forms and reports suited to their job rather than direct access to the tables.

### The query processor

The **query processor** takes a query, usually written in SQL or built in the developer interface, and carries it out. It checks the query is valid against the data dictionary, works out an efficient way to execute it (for example, using an index instead of reading every row), retrieves or changes the data, and returns the result. Purpose: users state **what** data they want; the query processor decides **how** to get it.

## Worked example: an annotated answer

*A gym moves from separate spreadsheet files to a DBMS. Explain how two features of the DBMS address problems the gym had with its files.* **[4]**

> The DBMS maintains a data dictionary holding one definition of each table, its fields, data types and validation rules [1]. This means every program and user works from the same description of the data, so the structure can change without each spreadsheet or program being rewritten [1].
> The DBMS uses access rights for groups of users [1], so trainers can be allowed to read member records but not see payments, whereas previously anyone who could open a spreadsheet could see all of it [1].

Each feature earns one mark for what it is and one for the file-based problem it solves.

## Common mistakes

- Calling the data dictionary "a list of words". It is metadata about the database.
- Confusing the logical schema with the physical storage of the data.
- Describing a backup as "saving the file". Say what is copied, how often, and where it is kept.
- Saying the query processor "stores queries". It executes them and returns results.
- Listing features with no link to a file-based problem when the question asks how they address them.

## Exam technique

**State** or **identify** needs only the name of the feature. **Describe** needs what the feature is and what it holds or does, with an example from the scenario, such as named groups and the rights each has. **Explain** needs the reason: for 8.2 that is almost always the file-based problem the feature removes. When a question gives a scenario, use its tables, staff roles and working hours in your answer; a backup procedure for a shop open until 10 pm should not schedule full backups at 6 pm.
