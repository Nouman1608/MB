---
title: "A Level Computer Science: Database Management Systems — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
order: 9
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-management-systems-dbms"
description: "Original questions with worked answers on DBMS features, the data dictionary, schema, integrity, security, developer interface and query processor, for 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Databases study guide](/resources/a-level-computer-science-databases/) · [Databases revision notes](/resources/a-level-computer-science-databases-revision-notes/)

---

**What do these questions practise?** Section 8.2 Database Management Systems of the Cambridge
International AS & A Level Computer Science 9618 syllabus (2027–2029): the features of a DBMS that
address the problems of a file-based approach (data management and the data dictionary, data
modelling, the logical schema, data integrity, and data security including backup and access
rights) and how the developer interface and query processor are used.

## Section A

**1.** State **three** problems of storing data using a file-based approach. **[3]**

**2.** Describe what is meant by a *data dictionary* and give **three** items it would contain. **[4]**

**3.** Explain what is meant by the *logical schema* of a database. **[2]**

**4.** State the purpose of *data modelling* in database design. **[2]**

## Section B

**5.** A school stores student details in separate files for the library, the office and the exams
department. Explain how using a DBMS would reduce **two** problems with this approach. **[4]**

**6.** Describe **two** ways in which a DBMS helps to maintain *data integrity*. **[4]**

**7.** Explain how a DBMS uses access rights to protect data, using the school database as an
example. **[3]**

**8.** Describe a suitable backup procedure for a database that is updated throughout the school day. **[3]**

**9.** Describe the purpose of the *developer interface* in a DBMS. **[2]**

**10.** Explain the role of the *query processor* when a user runs a query. **[3]**

## Section C

**11.** A small business is deciding whether to keep using spreadsheets saved as separate files or to
move to a relational database managed by a DBMS. Evaluate the move, referring to the features of a
DBMS. **[6]**

---

## Answers

**1.** Any three: data redundancy (the same data stored in several files) [1]; data inconsistency
when copies are updated differently [1]; data dependence, where changing the file structure means
changing every program that uses it [1]; difficulty sharing data between departments [1]; poor
security, because whole files must be shared [1]; difficulty writing new queries across files [1].

**2.** A data dictionary is a file of metadata, that is, data about the data held in the database [1].
Any three items: table names [1]; field names [1]; data types and field sizes [1]; primary and
foreign keys [1]; validation rules [1]; relationships between tables [1]; access rights [1].

**3.** The logical schema is the overall design or structure of the whole database, independent of
the software and how data is physically stored [1], showing the tables, their fields, keys and the
relationships between them [1].

**4.** To produce a model, such as an entity-relationship diagram, of the data to be stored and the
relationships between data items [1], so that an appropriate database structure can be designed
before it is built [1].

**5.** Any two developed: data is stored once in shared tables, so redundancy is reduced [1] and
storage is saved [1]; because each item is stored once, an update applies everywhere, so
inconsistency between departments' copies is avoided [1–2]; programs access data through the DBMS,
so changing the structure does not require every program to be rewritten (data independence) [1–2].

**6.** Any two: validation rules set in the DBMS check data as it is entered, for example a range
check on a year group [1–2]; referential integrity ensures a foreign key value matches an existing
primary key, so records cannot refer to non-existent records [1–2]; primary keys must be unique, so
duplicate records cannot be created [1–2]; the DBMS controls simultaneous updates so that changes by
two users do not conflict [1–2].

**7.** The DBMS stores which users or groups can read, insert, update or delete data in each table
or view [1]. For example, teachers might be able to read and update exam results, while students can
only read their own timetable [1]. Users must log in, and the DBMS refuses operations they are not
authorised to carry out [1].

**8.** Full backup of the database each night when it is not in use [1]; incremental backups or a
transaction log during the day so that recent changes can be recovered [1]; backups stored off-site
or in the cloud and restoration tested regularly [1].

**9.** It allows a developer to create and modify the database structure, such as tables, queries,
forms and reports, often through a visual interface rather than by writing all the code by hand [1],
so that applications can be built for users without direct access to the underlying data [1].

**10.** The query processor takes the user's query, for example in SQL [1], checks it and works out
the most efficient way to carry it out, using indexes where available [1], then executes it against
the database and returns the results to the user [1].

**11.** For: data is stored once, reducing redundancy and inconsistency [1]; the data dictionary and
validation rules improve integrity [1]; access rights allow different staff to see only what they
need [1]; the query processor makes it easy to combine data from several tables [1]; backup
procedures are built in [1]. Against: cost of the software and of training [1]; time to design the
schema and transfer data [1]; for very small amounts of data a spreadsheet may be sufficient [1]. A
justified conclusion relating to the size and growth of the business is needed for full marks.
Maximum 6.

## Frequently asked questions

**Is the data dictionary visible to ordinary users?** Usually not; it is used by the DBMS and the
database administrator to manage the structure.

**Where do DDL and DML fit?** They are section 8.3; this page focuses on the DBMS features in 8.2,
which use DDL to define structure and DML to query and maintain data.

*Based on the Cambridge International AS & A Level Computer Science 9618 syllabus for 2027, 2028 and
2029, section 8.2 Database Management Systems.*
