---
title: "OxfordAQA A-Level Computer Science (9645): Relational databases"
seoTitle: "OxfordAQA 9645 Relational Databases Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15 – Databases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 15.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases-9645"
  - qualification: "a-level"
    topic: "databases-9645"
    subtopic: "relational-databases-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.15.1 in depth: entity relationship models, keys, normalisation to third normal form, SQL queries, and concurrent access with record locks."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.15.1 Relational databases** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.15 Databases. It is International A-level content, examined in Unit 4, the written paper. It has five parts: conceptual data models and entity relationship modelling (3.15.1.1), key concepts (3.15.1.2), database design and normalisation (3.15.1.3), Structured Query Language (3.15.1.4) and client server databases (3.15.1.5).

The topic-level [databases study guide](/resources/oxfordaqa-a-level-computer-science-databases/) covers all of topic 3.15 in one pass. This page gives relational databases their own space, using a bicycle-hire business as the running example and showing the output of each query. Afterwards use the [relational databases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-revision-notes/) and the [relational databases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-practice/). Big data, the other half of topic 3.15, has [its own study guide](/resources/oxfordaqa-a-level-computer-science-9645-big-data/).

## 3.15.1.2 Key concepts

A **relational database** stores data in linked tables. Each table holds data about one kind of thing, and tables are linked by matching values.

| Abstract model term | Implemented database term | Meaning |
|---|---|---|
| Relation | Table | A set of records about one entity |
| Attribute | Field | One property, such as DailyRate |
| Entity identifier | Primary key | Attribute whose value is unique for every record |
| Composite entity identifier | Composite primary key | Two or more attributes that together are unique |
| (link between relations) | Foreign key | A field that holds the primary key value of another table |

The terms in the first column are used for abstract models; the terms in the second for implemented databases.

## 3.15.1.1 Entity relationship modelling

An **entity** is a thing about which data is stored. A **data model** shows the entities and how they are related.

**Worked example 1: bicycle hire.** A shop hires out bikes. It records its customers (name and phone), its bikes (type and daily rate) and each hire (which customer, which bike, the start date and the number of days).

Entity descriptions are written Entity(Attribute1, Attribute2, ...), with the identifier marked (underlined in an exam; here in **bold**):

- Customer(**CustomerID**, Name, Phone)
- Bike(**BikeID**, BikeType, DailyRate)
- Hire(**HireID**, CustomerID, BikeID, StartDate, Days)

In Hire, CustomerID and BikeID are **foreign keys**. The relationships are:

```
Customer ─────< Hire >───── Bike
```

One customer can make many hires, and one bike can appear in many hires. So Customer to Bike is **many-to-many**, and a relational database cannot store that directly. The **link entity** Hire sits between them and turns it into two **one-to-many** relationships. The "many" end of a line is shown with a fork. The four degrees are one-to-many, many-to-one, one-to-one and many-to-many, and you must choose the right one for each pair of entities by asking "can one A relate to many Bs, and can one B relate to many As?".

## 3.15.1.3 Normalisation

**Normalisation** organises data into tables so that each fact is stored **once**. Databases are normalised to avoid **redundancy** (repeated data) and the three anomalies it causes:

- **Update anomaly:** a repeated fact must be changed in many rows, and missing one leaves the data inconsistent.
- **Insertion anomaly:** a new fact cannot be stored until an unrelated fact exists.
- **Deletion anomaly:** deleting one record loses unrelated facts.

A relation is in **third normal form (3NF)** when every non-key attribute **depends on the key, the whole key, and nothing but the key**. You do not need to tell first, second and third normal form apart; you need to know these properties and to be able to reach 3NF.

**Worked example 2: from one table to 3NF.** A single log table holds

```
HireLog(HireID, CustomerID, CustomerName, Phone, BikeID, BikeType, DailyRate, StartDate, Days)
```

The key is HireID. But CustomerName and Phone depend on CustomerID (not directly on HireID), and BikeType and DailyRate depend on BikeID. If Ayesha hires three bikes, her name and phone are stored three times, which invites update anomalies. Moving each group of attributes to the table whose key they depend on gives three relations in 3NF:

```
Customer(CustomerID, Name, Phone)
Bike(BikeID, BikeType, DailyRate)
Hire(HireID, CustomerID, BikeID, StartDate, Days)
```

**Worked example 3: a composite key.** The relation Stock(ShopID, ProductID, ShopCity, ProductName, Quantity) has the composite key (ShopID, ProductID). ShopCity depends only on ShopID, and ProductName only on ProductID, which are parts of the key. Splitting gives Shop(ShopID, ShopCity), Product(ProductID, ProductName) and Stock(ShopID, ProductID, Quantity). Now Quantity depends on the whole key and nothing else.

## 3.15.1.4 Structured Query Language (SQL)

The examples use these rows. Customer: (1, Ayesha Khan), (2, Ben Ortiz), (3, Chloe Mensah). Bike: (10, Road, 18.00), (11, Mountain, 22.50), (12, Tandem, 30.00), (13, Road, 20.00). Hire: (101, 1, 10, 2026-06-01, 3), (102, 2, 11, 2026-06-02, 2), (103, 1, 12, 2026-06-05, 1), (104, 3, 10, 2026-06-07, 4), (105, 2, 13, 2026-06-09, 5), (106, 1, 11, 2026-06-12, 2).

### Defining a table

```sql
CREATE TABLE Hire (
  HireID     INTEGER PRIMARY KEY,
  CustomerID INTEGER,
  BikeID     INTEGER,
  StartDate  DATE,
  Days       INTEGER,
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);
```

Data types cover integers, real numbers (such as DailyRate), strings, Boolean values, dates and times. `PRIMARY KEY` sets the key and a simple `FOREIGN KEY` constraint links one field to another table's key.

### Retrieving data from several tables

To use several tables, list them in FROM and match each foreign key to its primary key in WHERE.

```sql
SELECT Name, BikeType, Days
FROM Customer, Hire, Bike
WHERE Customer.CustomerID = Hire.CustomerID
  AND Hire.BikeID = Bike.BikeID
  AND Days >= 3
ORDER BY Days DESC, Name;
```

Result: (Ben Ortiz, Road, 5), (Chloe Mensah, Road, 4), (Ayesha Khan, Road, 3).

### Aggregate functions and GROUP BY

```sql
SELECT BikeType, COUNT(*)
FROM Hire, Bike
WHERE Hire.BikeID = Bike.BikeID
GROUP BY BikeType;
```

Result: Mountain 2, Road 3, Tandem 1.

```sql
SELECT Name, SUM(Days * DailyRate)
FROM Customer, Hire, Bike
WHERE Customer.CustomerID = Hire.CustomerID
  AND Hire.BikeID = Bike.BikeID
GROUP BY Name;
```

Result: Ayesha Khan 129.00 (3 × 18 + 1 × 30 + 2 × 22.5), Ben Ortiz 145.00 (2 × 22.5 + 5 × 20), Chloe Mensah 72.00 (4 × 18).

Aggregates over the whole Hire table: `SELECT AVG(Days), MIN(Days), MAX(Days), SUM(Days), COUNT(*) FROM Hire` gives an average of 17 / 6 = 2.83 days, minimum 1, maximum 5, total 17 and 6 rows.

### Changing data

```sql
UPDATE Bike SET DailyRate = 24.00 WHERE BikeType = 'Mountain';
INSERT INTO Hire VALUES (107, 3, 12, '2026-06-15', 2);
DELETE FROM Hire WHERE HireID = 102;
```

The update changes one row (bike 11). The insert adds a row, so Hire now has 7 rows, and the delete removes one, leaving 6. Always include a WHERE clause on UPDATE and DELETE, or every row is changed or removed.

## 3.15.1.5 Client server databases

In a **client server database**, one server holds the database and many clients use it at the same time. This is **concurrent access**. It is useful because many staff can work together, but it creates a problem.

### The lost update problem

**Worked example 4.** A stock record shows 10 units. Clerk A sells 3 units and clerk B sells 2 units at the same moment.

| Step | Clerk A | Clerk B | Stock in database |
|---|---|---|---|
| 1 | reads 10 | | 10 |
| 2 | | reads 10 | 10 |
| 3 | writes 10 − 3 = 7 | | 7 |
| 4 | | writes 10 − 2 = 8 | 8 |

The final value is 8, but 10 − 3 − 2 = 5. Clerk A's update was **lost** because B overwrote it using an out-of-date value.

### Record locks

A **record lock** prevents this. When a client opens a record to change it, the record is **locked** and no other client can update it until the change is saved and the lock released.

| Step | Clerk A | Clerk B | Stock |
|---|---|---|---|
| 1 | locks record, reads 10 | | 10 |
| 2 | | tries to open record: must wait | 10 |
| 3 | writes 7, unlocks | | 7 |
| 4 | | locks, reads 7, writes 5, unlocks | 5 |

The final value, 5, is correct, so the **integrity** of the database is preserved. The cost is that clients may have to wait.

## Exam technique

- **ER models:** list entities and attributes, mark identifiers, then decide each relationship's degree. Replace many-to-many with a link entity.
- **Normalisation:** find the key, then ask which attributes depend on part of the key or on a non-key attribute, and move them out.
- **SQL:** write SELECT, FROM, WHERE in that order; match foreign keys to primary keys when using several tables.
- **Lost update:** show both clients reading the same old value.

## Common mistakes

- Putting a foreign key in the wrong table of a one-to-many relationship (it goes on the "many" side).
- Leaving a many-to-many relationship in the final design.
- Forgetting the join condition, which pairs every row with every other row.
- Using GROUP BY without an aggregate function, or selecting a field that is not grouped.
- Missing WHERE on UPDATE or DELETE.

## More on this topic

- [Relational databases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-revision-notes/)
- [Relational databases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-practice/)
- [Big data study guide](/resources/oxfordaqa-a-level-computer-science-9645-big-data/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.15.1 Relational databases.
