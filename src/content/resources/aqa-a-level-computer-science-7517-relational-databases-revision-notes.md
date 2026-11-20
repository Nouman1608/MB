---
title: "AQA A-Level Computer Science (7517): Relational Databases -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "relational-databases-7517"
description: "Condensed AQA 7517 section 4.10.2 recall: the relational database concept, attribute, primary key, composite primary key, foreign key and referential integrity."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.10.2 Relational databases**, AQA A-Level Computer Science (7517): **explain the concept of a relational database** and **define attribute, primary key, composite primary key and foreign key**. The worked examples are in the [relational databases study guide](/resources/aqa-a-level-computer-science-7517-relational-databases/); questions are in the [relational databases practice questions](/resources/aqa-a-level-computer-science-7517-relational-databases-practice/).

## The concept

A **relational database** stores data in **tables**. Each table holds data about one kind of thing. Tables are **linked by key values**, so related data can be combined without storing any fact twice.

| Word | Also called | Meaning |
|---|---|---|
| Table | Relation | One entity's data |
| Column | Attribute, field | One property, one value per record |
| Row | Record, tuple | One occurrence of the entity |

## The four definitions to learn

| Term | Definition | Key points |
|---|---|---|
| **Attribute** | A named property of an entity, held as a column | One value per record |
| **Primary key** | An attribute whose value uniquely identifies each record in a table | Unique; never empty (null); stable; only one per table |
| **Composite primary key** | A primary key made of two or more attributes that together identify each record | Used when no single attribute is unique, often in link tables |
| **Foreign key** | An attribute in one table that is the primary key of another table | Creates the link; values can repeat; lives in the table that refers |

## Spotting keys in a table

**Teacher (TeacherID, Name, DepartmentID)** and **Department (DepartmentID, DepartmentName, Room)**

- Primary keys: TeacherID, DepartmentID.
- Foreign key: DepartmentID in Teacher.
- To find a teacher's room: Teacher, then DepartmentID, then Department.

**Enrolment (StudentID, CourseID, Grade)**

- StudentID repeats, CourseID repeats, so neither is unique alone.
- The pair is unique: **composite primary key (StudentID, CourseID)**.
- Each part is also a **foreign key**.

## Referential integrity

- Every foreign key value must match an existing primary key value in the table it refers to.
- The database refuses to add a record that refers to a missing record, or to delete a record that other records still refer to.
- It keeps the links valid.

## Why a relational database?

- **Less duplicated data:** each fact stored once.
- **Consistent:** one place to update.
- **Flexible queries:** combine tables through keys.
- **Integrity:** key rules keep data valid.
- **Access control:** users can see only the tables they need.

## Choosing a primary key

| Candidate | Good key? | Reason |
|---|---|---|
| Student number | Yes | Unique, stable, never empty |
| Surname | No | Different people share it; it can change |
| Date of birth | No | Not unique |
| Email address | Sometimes | Unique but can change |
| Auto-numbered ID | Yes | Unique and stable |

## Question styles to expect

- **Define a term:** give the key idea and what makes it distinct (for example, "unique" for a primary key, "primary key of another table" for a foreign key).
- **Identify keys in given tables:** name the attribute, the table it is in and, for a foreign key, the table it refers to.
- **Explain why a composite key is needed:** show that each attribute repeats on its own but the pair does not.
- **Follow a link:** start from a value in one table, read the foreign key, and find the matching record in the other table.
- **Explain a benefit of linked tables:** less repeated data, one place to update, flexible queries.
- **Referential integrity:** give an example of a record that would be refused, using values from the question.

## Key terms

| Term | Definition |
|---|---|
| Relation | Another name for a table in a relational database |
| Record | A row; one occurrence of the entity |
| Field | A column; one attribute |
| Null | A missing or empty value |
| Referential integrity | The rule that every foreign key value must match an existing primary key value |
| Redundancy | The same data stored more than once |
| DBMS | Database management system: software that stores and queries the database |
| Link table | A table that connects two others, often with a composite primary key |

## Exam traps

- **Primary key** means unique identification, not "first column".
- **Foreign keys can repeat;** primary keys cannot.
- **A composite key is one key with several attributes.**
- **The foreign key is in the table that refers to the other table.**
- **Surnames and dates are poor keys.**
- **Attribute is a column, record is a row.**
- **Refer to the data in the table** when asked to identify keys.

## Self-test

1. Define an attribute.
2. Define a primary key.
3. Can a primary key be empty?
4. Define a composite primary key.
5. Why might a link table need a composite primary key?
6. Define a foreign key.
7. Can a foreign key value appear more than once in its table?
8. What is referential integrity?
9. Why is Surname a poor primary key?
10. Give one benefit of storing data in linked tables instead of one large table.
11. In `Pet (PetID, Name, OwnerID)` which attribute is the foreign key?
12. What is the difference between a record and an attribute?

**Answers**

1. A named property of an entity, stored as a column.
2. An attribute whose value uniquely identifies each record in a table.
3. No, it must never be empty (null).
4. A primary key made of two or more attributes which together identify each record.
5. Neither of the linked attributes is unique alone, but the pair is.
6. An attribute in one table that is the primary key of another table.
7. Yes.
8. Every foreign key value must match an existing primary key value in the table it refers to.
9. Different people can share a surname, and it can change.
10. Any one of: less duplication; easier to keep consistent; flexible queries.
11. OwnerID.
12. A record is a row (one occurrence of the entity); an attribute is a column (one property).

## Related resources

- [Relational databases study guide](/resources/aqa-a-level-computer-science-7517-relational-databases/)
- [Relational databases practice questions](/resources/aqa-a-level-computer-science-7517-relational-databases-practice/)
- [Data modelling revision notes](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes/)
