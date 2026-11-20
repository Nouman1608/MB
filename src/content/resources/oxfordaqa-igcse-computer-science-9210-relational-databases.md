---
title: "OxfordAQA IGCSE Computer Science (9210): Relational databases -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Relational Databases Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.01
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "relational-databases-9210"
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.7.1: databases, relational databases, tables, records, fields, data types, keys, redundancy and inconsistency."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.7.1 Relational databases** of OxfordAQA International GCSE Computer Science (9210). You
must **explain the concept of a database** and **of a relational database**; understand the database concepts **table,
record, field, data type, primary key and foreign key**; and understand that using a relational database **helps to
eliminate data inconsistency and data redundancy**. The specification adds that these terms (rather than entity and
attribute) are used for both real databases and abstract models. How to design a database is in the [database design
study guide](/resources/oxfordaqa-igcse-computer-science-9210-database-design/), and the language used to query one is
in the [SQL study guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql/).

## What is a database?

A **database** is an organised collection of data that is stored so that it can be searched, updated and shared
efficiently. A school library catalogue, an online shop's list of products and a hospital's patient records are all
databases. A database is better than a pile of separate files because the data is kept in one structured place, so many
users and programs can get at the same up-to-date information.

Software that creates and manages a database is called a **database management system**. You do not need that term, but
it explains why different programs can safely use the same data.

## What is a relational database?

A **relational database** stores data in **several tables** that are **linked** together by key fields. Each table holds data
about one kind of thing, and the links show how things are related. For example, one table holds books, another holds
authors, and a field in the book table says which author wrote each book. The word relational comes from these
relationships between tables.

The alternative is a **flat file** database: a single table that holds everything. A flat file is simple, but it
repeats data, as the example below shows.

## The key terms

Here is a small table of books.

**Book**

| BookID | Title | AuthorID | Year |
|---|---|---|---|
| B01 | River Road | 1 | 2015 |
| B02 | Cold Harbour | 2 | 2018 |
| B03 | Paper Birds | 3 | 2012 |
| B04 | The Long Dry | 1 | 2019 |
| B05 | Northern Lights Club | 2 | 2020 |
| B06 | Salt and Sand | 1 | 2011 |

| Term | Meaning | Example from the Book table |
|---|---|---|
| **Table** | A set of data about one type of thing, arranged in rows and columns | The Book table |
| **Record** | One row of a table: all the data about one item | The row B03, Paper Birds, 3, 2012 |
| **Field** | One column of a table: one kind of data about every item | Title |
| **Data type** | The kind of data a field may hold, which controls what can be entered | BookID is text, Year is an integer |
| **Primary key** | A field (or fields) whose value **uniquely identifies** each record in the table | BookID |
| **Foreign key** | A field in one table that is the **primary key of another table**, creating the link between them | AuthorID in the Book table |

### Data types

A field's **data type** says what sort of value it holds. Common types are:

| Data type | Holds | Example |
|---|---|---|
| Text (string) | Letters, digits and symbols treated as characters | Title: "Paper Birds" |
| Integer | Whole numbers | Year: 2012 |
| Real | Numbers with a decimal part | Price: 7.99 |
| Boolean | True or false (yes or no) | OnLoan: True |
| Date | A calendar date | DueDate: 2026-12-04 |

Choosing the right type means the database can **reject** wrong values (a word in a Year field) and can store the data
sensibly. A telephone number is usually text, not an integer, because it is not used in arithmetic and may start with a 0.
For text fields a **length** may also be set, such as 40 characters for a title.

### Primary keys

A **primary key** must be **unique** for every record, and it must **not be empty**. A name is a poor key because two
people may share a name. A number or code created just for the purpose, such as BookID or StudentID, is a good choice.
No two books can have the same BookID, so BookID picks out exactly one record.

### Foreign keys

A **foreign key** is how tables are linked. Here is the second table.

**Author**

| AuthorID | AuthorName | Country |
|---|---|---|
| 1 | Okafor | Nigeria |
| 2 | Lindqvist | Sweden |
| 3 | Tanaka | Japan |

AuthorID is the **primary key** of Author. In Book, AuthorID is a **foreign key**, because its values (1, 2, 3) are
values of the primary key in Author. The book "River Road" has AuthorID 1, which tells us it was written by Okafor, from
Nigeria, without storing that information in the Book table. A foreign key value must match a value that exists in the
table it links to.

## Why relational databases reduce redundancy

**Data redundancy** means the same data is stored **more than once**. Imagine the same information in a **single flat
table**:

| BookID | Title | AuthorName | Country | Year |
|---|---|---|---|---|
| B01 | River Road | Okafor | Nigeria | 2015 |
| B02 | Cold Harbour | Lindqvist | Sweden | 2018 |
| B03 | Paper Birds | Tanaka | Japan | 2012 |
| B04 | The Long Dry | Okafor | Nigeria | 2019 |
| B05 | Northern Lights Club | Lindqvist | Sweden | 2020 |
| B06 | Salt and Sand | Okafor | Nigeria | 2011 |

The author's name and country appear **three times** for Okafor and **twice** for Lindqvist. That is repeated data. In the
relational design, each author's name and country are stored **once**, in the Author table, and each book stores only
a small number, the AuthorID. The repeated data has gone.

Redundancy wastes **storage space**, and it creates the next problem.

## Why relational databases avoid inconsistency

**Data inconsistency** means the same item of data has **different values** in different places. In the flat table, suppose
Okafor's country were entered as "Nigeria" in two rows and mistyped as "Nigera" in the third. The database now disagrees
with itself, and a search for books by authors from Nigeria would miss a book.

Or suppose the author's country needs to be corrected. In the flat table, **every row** for that author has to be changed,
and one missed row leaves the data inconsistent. In the relational design the country is stored **once**, so it is changed
**once**, and every book shows the correct value.

| Flat file | Relational database |
|---|---|
| Author data repeated in every book row | Author data stored once in the Author table |
| An update must be made in many places | An update is made in one place |
| Missed changes and typing slips cause conflicting values | One stored value, so no conflict |
| More storage used | Less storage used |

Other advantages that you may mention are that data is easier to **search** and **keep accurate** (each fact is held in one
place), and that a change to one table does not mean rewriting the others.

## Worked example 1: identifying terms

A table called Pupil has the fields PupilID, Name, Form and OnTrip.

- The table is **Pupil**.
- Each pupil's data, for example 0412, Asha, 9B, True, is a **record**.
- Name is a **field**.
- OnTrip is best given the **Boolean** data type, as the answer is yes or no.
- PupilID is a sensible **primary key**, as each pupil has a different number.

## Worked example 2: choose the keys

A database holds two tables: Room (RoomID, RoomName, Floor) and Booking (BookingID, RoomID, Teacher, Date).

- The primary key of Room is **RoomID**, and the primary key of Booking is **BookingID**.
- **RoomID** in Booking is a **foreign key**, because it is the primary key of Room. It tells us which room each booking is
  for.

## Worked example 3: explain the benefit

**Question: explain how using two linked tables rather than one table reduces data redundancy and inconsistency. [4 marks]**

Answer: "In one table, details such as a room's name would be repeated in every booking for that room, which is data
redundancy [1]. In two linked tables, the room's details are stored once in the Room table [1], and each booking only
holds the RoomID as a foreign key. If a room's name needs to change, it is changed in one place [1], so the data
cannot have different values in different bookings, which avoids inconsistency [1]."

## Common mistakes

- Defining a record as a column or a field as a row. **Records are rows; fields are columns.**
- Saying that a primary key is "the most important field". It must **uniquely identify** each record.
- Choosing a field such as a name as a primary key, when it may not be unique.
- Describing a **foreign key** as a key from another table without saying that it is the **primary key of that other
  table**.
- Mixing up **redundancy** (data repeated) with **inconsistency** (data that disagrees).
- Writing that a relational database "stores less data" without saying that it **avoids repeating** the same data.
- Giving the wrong data type, such as an integer for a phone number or an ID that starts with a zero.
- Describing a relational database as "a database with relationships between people". The links are between **tables**.
- Using **entity** and **attribute** where the specification uses table and field.

## Exam technique

- **Explain a term** questions: give a clear definition, then an example from the scenario.
- **Identify** questions: look at what is repeated in the table to spot the foreign key, and what is unique to find the primary
  key.
- **Benefits** questions: pair each benefit with its reason. Redundancy: data is stored once. Inconsistency: it is
  changed once.
- **Data type** questions: choose the type from how the value will be used, and say why.
- Use the scenario's own field names in your answer.

## Next steps

For a condensed summary and a self-test, use the [Relational databases revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases-revision-notes/), and practise with the
[Relational databases practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases-practice/).
