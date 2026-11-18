---
title: "Cambridge A Level Computer Science (9618): Database Concepts"
resourceType: "study-guides"
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
description: "File-based limits, relational terms and keys, E-R diagrams and normalisation to 3NF with a new worked example, for Cambridge AS Computer Science 9618 section 8.1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **8.1 Database Concepts** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, examined on Paper 1. The [Databases study guide](/resources/a-level-computer-science-databases/) introduces all of Topic 8; this page concentrates on 8.1 and works through a new scenario from the file-based problem to a design in third normal form. Condensed notes are in the [Database Concepts revision notes](/resources/cambridge-a-level-computer-science-9618-database-concepts-revision-notes/) and you can test yourself with the [Database Concepts practice questions](/resources/cambridge-a-level-computer-science-9618-database-concepts-practice/).

## What 8.1 asks you to do

- show understanding of the **limitations of a file-based approach** to storing and retrieving data
- describe the features of a **relational database** that address those limitations
- use the terminology: entity, table, record, field, tuple, attribute, primary key, candidate key, secondary key, foreign key, relationship (one-to-one, one-to-many, many-to-many), referential integrity, indexing
- use an **entity-relationship (E-R) diagram** to document a design
- understand normalisation to **1NF, 2NF and 3NF**, explain why given tables are or are not in 3NF, and produce a normalised design from a description, a set of data or a set of tables.

The software that manages the database is section 8.2, and SQL is 8.3.

## The scenario

An invented music school keeps its data in files. The office keeps a lessons file, and the accounts department keeps its own file of pupils for invoicing. Part of the lessons file:

| PupilName | PupilPhone | Instrument | TeacherName | TeacherRoom | LessonDay |
|---|---|---|---|---|---|
| Ana Costa | 0711 400 221 | Violin | M. Reyes | R4 | Monday |
| Ana Costa | 0711 400 221 | Piano | J. Obi | R2 | Thursday |
| Sam Fell | 0711 902 650 | Piano | J. Obi | R2 | Monday |
| Sam Fell | 0711 902 615 | Guitar | M. Reyes | R4 | Friday |

## Limitations of the file-based approach, shown in the data

- **Data redundancy**: Ana's phone number is stored twice in this file and again in the accounts file; J. Obi's room is stored on every one of his lessons.
- **Data inconsistency**: Sam's phone number differs between two rows. Nobody can tell which is right, and the accounts file may hold a third version.
- **Data dependence**: the programs that read the file are written around its exact layout. Adding an email field means changing every program that uses the file.
- **Difficult retrieval**: a question that needs both files, such as "which pupils who learn piano have unpaid invoices?", needs a new program to be written.
- **Weak control**: whoever can open the file can read or change all of it, and there is no central place to enforce rules such as "every lesson must have a teacher".

## How a relational database addresses them

A relational database stores data in **tables** linked by **keys**, managed by one DBMS that every application uses.

| Limitation | Relational feature that addresses it |
|---|---|
| Redundancy | Each fact (a phone number, a room) is stored once, in one table, and linked by keys |
| Inconsistency | Because a fact is stored once, an update in one place is seen by every user |
| Data dependence | Programs access data through the DBMS, so the structure can change without rewriting every program |
| Difficult retrieval | Any combination of tables can be queried by joining on keys |
| Weak control | The DBMS enforces access rights and integrity rules, including referential integrity, for all users |

In an exam, the mark is for the **link**: say which limitation each feature removes.

## The terminology, applied

After the design below, the school has a table PUPIL(PupilID, PupilName, PupilPhone, Email).

- The **entity** is a pupil, an object the school stores data about; the **table** PUPIL holds it.
- Each row, such as the one for Ana Costa, is a **record**; in relational terms, a **tuple**.
- Each column, such as PupilPhone, is a **field**; in relational terms, an **attribute**.
- PupilID and Email are both unique for each pupil, so both are **candidate keys**. PupilID is chosen as the **primary key**, because it never changes and is short.
- Email, the candidate key not chosen, is a **secondary key**. The school can still search on it, and it may be **indexed** so the search is fast.
- In LESSON, the attribute PupilID is a **foreign key**: it is the primary key of PUPIL, and it links each lesson to one pupil.
- **Referential integrity** means every PupilID in LESSON must match a record in PUPIL. The DBMS would reject a lesson for pupil P999 if no such pupil exists, and would stop a pupil being deleted while lessons still refer to them.

**Indexing**: an index stores key values in order with the location of each matching record, so the DBMS can find a record without reading every row. The trade-off is that the index takes extra storage and must be updated whenever records are added, changed or deleted.

## E-R diagrams and relationships

The school's rules: each pupil can learn several instruments; each lesson is one pupil with one teacher on one instrument; each teacher teaches many lessons and has one room of their own, and each room belongs to one teacher.

- PUPIL to LESSON is **one-to-many**: one pupil, many lessons.
- TEACHER to LESSON is **one-to-many**.
- TEACHER to ROOM is **one-to-one**.
- PUPIL to TEACHER is **many-to-many**: a pupil can have several teachers and a teacher has many pupils. LESSON is the **link entity** that resolves it into two one-to-many relationships.

On an E-R diagram each entity is a rectangle, joined by a line; with crow's-foot notation, the "many" end of the line splits into three. For the school you would draw PUPIL —< LESSON >— TEACHER, with a plain line between TEACHER and ROOM. The foreign key always goes in the table at the "many" end: LESSON holds PupilID and TeacherID.

## Normalisation

Normalisation is the process of organising data into tables so that each fact is stored once and every non-key attribute depends on the key, the whole key and nothing but the key.

| Form | Condition |
|---|---|
| 1NF | No repeating groups; every attribute holds a single value; a primary key identifies each row |
| 2NF | In 1NF, and no **partial dependency**: every non-key attribute depends on the whole of a composite key |
| 3NF | In 2NF, and no **non-key dependency**: no non-key attribute depends on another non-key attribute |

### Worked example: from the lessons file to 3NF

**Unnormalised.** Written per pupil, the data has a repeating group: one pupil, then a list of instrument, teacher, room and day.

**1NF.** Give each pupil and teacher an ID, put one lesson per row, and choose a key that identifies each row. A pupil learns each instrument once, so (PupilID, Instrument) is unique:

LESSON(**PupilID**, **Instrument**, PupilName, PupilPhone, TeacherID, TeacherName, TeacherRoom, LessonDay)

**2NF.** PupilName and PupilPhone depend on PupilID alone, which is only part of the key. That is a partial dependency, so they move to their own table:

PUPIL(**PupilID**, PupilName, PupilPhone)
LESSON(**PupilID**, **Instrument**, TeacherID, TeacherName, TeacherRoom, LessonDay)

**3NF.** In LESSON, TeacherName and TeacherRoom depend on TeacherID, which is a non-key attribute. That is a non-key dependency, so they move out:

PUPIL(**PupilID**, PupilName, PupilPhone)
TEACHER(**TeacherID**, TeacherName, TeacherRoom)
LESSON(**PupilID**, **Instrument**, TeacherID, LessonDay)

Foreign keys: PupilID and TeacherID in LESSON. Sam's phone number is now stored once, so the inconsistency in the file cannot happen again.

### Annotated answer: is a table in 3NF?

*BOOKING(**BookingID**, PupilID, PupilName, RoomNo, Date). Explain why this table is not in 3NF.* **[2]**

> The table has a single-attribute primary key, so it cannot have a partial dependency and is in 2NF. PupilName depends on PupilID, which is not the primary key [1], so there is a non-key (transitive) dependency, and PupilName should be moved to a PUPIL table with PupilID as its primary key [1].

The first sentence earns nothing on its own but shows the examiner your reasoning. The marks come from naming the **specific** attributes involved in the dependency.

## Common mistakes

- Defining a foreign key as "a key in another table". It is an attribute in this table that is the **primary key** of another table.
- Calling every unique attribute a primary key. Only one candidate key is chosen; the others are secondary keys.
- Putting the foreign key at the "one" end of a one-to-many relationship.
- Leaving a many-to-many relationship unresolved in a final design.
- Saying a table with a single-attribute key fails 2NF. Partial dependencies need a composite key.
- Describing limitations of files when asked how a relational database **addresses** them.

## Exam technique

When asked to **produce** a normalised design, write each table as NAME(**Key**, Attribute, ...), mark the primary key clearly (underline it on paper), and list the foreign keys. When asked to **explain why** tables are or are not in 3NF, name the dependency type and the exact attributes. For E-R diagrams, label each entity and check every line has the correct degree at both ends.
