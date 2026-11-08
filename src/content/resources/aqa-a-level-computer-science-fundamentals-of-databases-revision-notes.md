---
title: "AQA A-Level Computer Science: Fundamentals of Databases — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
description: "Recall notes on ER modelling, keys, normalisation to third normal form, SQL and concurrency in client server databases for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Fundamentals of databases (section 4.10 of AQA A-Level Computer Science 7517) covers designing a relational
database -- entity relationship models, keys and normalisation to third normal form -- writing SQL to define,
query and change tables, and controlling concurrent access in a client server database. Paper 2 asks you to
draw or complete ER diagrams, normalise a table, write SQL by hand and explain how lost updates are prevented.

Condensed for the final weeks. For the full explanation, use the
[Fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/).
Practise with the [Fundamentals of databases practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-databases-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section 4.10, assessed on Paper 2:

- **4.10.1** Conceptual data models and entity relationship modelling
- **4.10.2** Relational databases -- attribute, primary key, composite primary key, foreign key
- **4.10.3** Database design and normalisation techniques -- normalise to third normal form; why normalise
- **4.10.4** Structured Query Language (SQL) -- retrieve, update, insert and delete across multiple tables;
  define a table
- **4.10.5** Client server databases -- simultaneous access; lost updates; record locks, serialisation,
  timestamp ordering, commitment ordering

## Key terms

| Term | Definition |
|---|---|
| **Entity** | A thing about which data is stored, e.g. Student, Course |
| **Attribute** | A property of an entity (a column in a table), e.g. Surname |
| **Relational database** | Data stored in separate tables (relations) linked by keys |
| **Primary key** | An attribute that uniquely identifies each record in a table |
| **Composite primary key** | A primary key made of **two or more** attributes together |
| **Foreign key** | An attribute in one table that is the primary key of another, linking the tables |

**Entity description format** (from the specification): `Entity1 (Attribute1, Attribute2, ...)`, with the
entity identifier **underlined** in the exam. In these notes key attributes are shown in bold:
Student (**StudentID**, FirstName, Surname, TutorGroup).

## Entity relationship diagrams

Relationships are **one-to-one**, **one-to-many** or **many-to-many**, drawn with crow's-foot ends on the
"many" side. A **many-to-many** relationship cannot be implemented directly: break it with a **link
(junction) entity** whose composite key is made of the two foreign keys.

```
Student ----< Enrolment >---- Course
Student (StudentID, Name)
Course (CourseID, Title)
Enrolment (StudentID, CourseID, StartDate)   composite key: StudentID + CourseID
```

## Normalisation to third normal form

**Why normalise?** To remove **data redundancy** (repeated data), which wastes space and causes
**inconsistency** when one copy is updated and another is not; to avoid update, insertion and deletion
problems; and so data is stored once, in one place.

| Normal form | Rule |
|---|---|
| **1NF** | No repeating attributes or groups of attributes; every value is atomic |
| **2NF** | In 1NF, and **no partial key dependencies** (every non-key attribute depends on the **whole** composite key) |
| **3NF** | In 2NF, and **no non-key dependencies** (no non-key attribute depends on another non-key attribute) |

Memory hook for 3NF: every non-key attribute depends on "the key, the whole key, and nothing but the key".

### Worked example

Unnormalised: OrderID, OrderDate, CustomerID, CustomerName, then for each product: ProductID, ProductName,
Price, Quantity.

```
1NF  Remove the repeating product group -> one row per order line.
     Key: (OrderID, ProductID)
2NF  OrderDate, CustomerID, CustomerName depend only on OrderID -> partial dependency
     ProductName, Price depend only on ProductID               -> partial dependency
     Order (OrderID, OrderDate, CustomerID, CustomerName)
     Product (ProductID, ProductName, Price)
     OrderLine (OrderID, ProductID, Quantity)
3NF  CustomerName depends on CustomerID, a non-key attribute  -> non-key dependency
     Customer (CustomerID, CustomerName)
     Order (OrderID, OrderDate, CustomerID)      CustomerID is now a foreign key
```

## SQL you must write by hand

```sql
-- Define a table
CREATE TABLE OrderLine (
  OrderID   INT,
  ProductID INT,
  Quantity  INT NOT NULL,
  PRIMARY KEY (OrderID, ProductID),
  FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

-- Retrieve from multiple tables
SELECT Customer.CustomerName, Orders.OrderDate
FROM Customer, Orders
WHERE Customer.CustomerID = Orders.CustomerID
  AND Orders.OrderDate >= '2026-01-01'
ORDER BY Orders.OrderDate DESC;

-- Insert, update, delete
INSERT INTO Product (ProductID, ProductName, Price) VALUES (17, 'Desk lamp', 24.99);
UPDATE Product SET Price = 22.50 WHERE ProductID = 17;
DELETE FROM Product WHERE ProductID = 17;
```

(The table is named `Orders` in SQL because `ORDER` is a reserved word.) A join can also be written with
`JOIN ... ON`. Always qualify column names with the table name when two tables share a column.

## Client server databases and concurrency

A client server database gives **simultaneous access** to many clients. The danger is the **lost update**:
two clients read the same record, both change it, and the second save overwrites the first.

| Method | How it prevents lost updates |
|---|---|
| **Record locks** | A client locks a record while editing; others cannot change it until it is released. Risk: **deadlock**, when two clients each wait for a record the other has locked |
| **Serialisation** | Transactions are executed one after another (or as if they were), so they cannot overlap on the same data |
| **Timestamp ordering** | Each transaction gets a timestamp; each record stores the timestamps of its last read and write. A transaction that would conflict with a later one is rejected and restarted |
| **Commitment ordering** | Transactions are ordered by when they commit, according to their dependencies, so conflicting transactions are committed in a safe order |

## Common mistakes / exam traps

- Leaving a many-to-many relationship in an ER diagram without a link entity.
- Defining a foreign key as "a key in another table" -- it is an attribute that is the **primary key** of another table.
- Stopping at 2NF: check for non-key attributes that depend on other non-key attributes.
- Forgetting `WHERE` in an `UPDATE` or `DELETE`, which changes every row.
- Joining tables in `FROM` without the matching condition, which pairs every row with every row.
- Putting text values in SQL without quotes, or numbers inside quotes when the field is numeric.

## Frequently asked questions

**What properties does a relation in third normal form have?**
It has no repeating groups, every non-key attribute depends on the whole primary key, and no non-key
attribute depends on another non-key attribute.

**Why are databases normalised?**
To remove redundant data, so each fact is stored once. This saves space and prevents inconsistent data and
update, insertion and deletion problems.

**What is the difference between record locking and serialisation?**
Record locking stops other clients changing a record while one is editing it. Serialisation makes
transactions run one after another so their changes cannot interleave.

## Related resources

[Fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) |
[Fundamentals of databases practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-databases-practice/) |
[Big Data revision notes](/resources/aqa-a-level-computer-science-big-data-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.10 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
