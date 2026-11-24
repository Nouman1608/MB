---
title: "AQA A-Level Computer Science: Fundamentals of Databases — Revision Notes"
seoTitle: "AQA A-Level Computer Science Fundamentals of Databases Notes"
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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-databases-study-guide--08-primary-foreign-keys.webp" width="900" height="840" alt="OrderHeader and Product each have one primary key. OrderLine has a composite primary key of OrderID and ProductID, and each of those is also a foreign key. Arrows run from each foreign key to the primary key it refers to." loading="lazy">
  <figcaption>Foreign keys link tables to primary keys; OrderLine has a composite primary key.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-databases-study-guide--07-many-to-many-link-table.webp" width="900" height="740" alt="Order and Product have a many-to-many relationship, which cannot be stored directly. A link table, OrderLine, carries both foreign keys and makes two one-to-many relationships. A crow’s foot marks the many end and a bar the one end." loading="lazy">
  <figcaption>A link table turns a many-to-many relationship into two one-to-many relationships.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-databases-study-guide--09-normal-form-dependencies.webp" width="900" height="900" alt="The order table has composite key OrderID plus ProductID. Attributes that depend on only one part of the key break 2NF, Quantity depends on the whole key, and CustomerName and Town depend on CustomerID, a transitive dependency that breaks 3NF. Splitting gives Customer, OrderHeader, Product and OrderLine." loading="lazy">
  <figcaption>Partial dependencies break 2NF and transitive dependencies break 3NF.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-databases-study-guide--10-join-total-spend.webp" width="900" height="800" alt="Aldous Wren has orders 100 (14.00) and 102 (23.00), total 37.00. Bina Sethi has order 101 (18.00). Corin Hale has no orders, so the inner join does not return him. Highest first gives Aldous Wren then Bina Sethi." loading="lazy">
  <figcaption>An inner join returns only customers who have orders; totals are sorted highest first.</figcaption>
</figure>

## Client server databases and concurrency

A client server database gives **simultaneous access** to many clients. The danger is the **lost update**:
two clients read the same record, both change it, and the second save overwrites the first.

| Method | How it prevents lost updates |
|---|---|
| **Record locks** | A client locks a record while editing; others cannot change it until it is released. Risk: **deadlock**, when two clients each wait for a record the other has locked |
| **Serialisation** | Transactions are executed one after another (or as if they were), so they cannot overlap on the same data |
| **Timestamp ordering** | Each transaction gets a timestamp; each record stores the timestamps of its last read and write. A transaction that would conflict with a later one is rejected and restarted |
| **Commitment ordering** | Transactions are ordered by when they commit, according to their dependencies, so conflicting transactions are committed in a safe order |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-computer-science-fundamentals-of-databases-study-guide--11-lost-update.webp" width="900" height="1300" alt="Without a lock, A and B both read 10, A writes 9, then B writes 9 and overwrites A’s change. With a record lock, B waits until A writes 9 and unlocks, then B reads 9 and writes 8. Numbers are illustrative." loading="lazy">
  <figcaption>A record lock stops the second save from overwriting the first.</figcaption>
</figure>

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

## More resources on this topic

[Fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) |
[Fundamentals of databases practice questions](/resources/aqa-a-level-computer-science-fundamentals-of-databases-practice/) |
[Big Data revision notes](/resources/aqa-a-level-computer-science-big-data-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.10 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
