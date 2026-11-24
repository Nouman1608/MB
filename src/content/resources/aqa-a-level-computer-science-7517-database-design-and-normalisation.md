---
title: "AQA A-Level Computer Science (7517): Database Design and Normalisation Techniques"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "database-design-and-normalisation-techniques-7517"
description: "Deeper guide to AQA 7517 section 4.10.3: why databases are normalised, functional dependencies and a full worked normalisation to first, second and third normal form."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.10.3 Database design and normalisation techniques** in AQA A-Level Computer Science (7517). The specification asks you to **normalise relations to third normal form**, to **know what properties are possessed by a relation in third normal form**, and to **understand why databases are normalised**. This is a procedure, so the best way to learn it is to follow one complete example slowly and then repeat the steps on a fresh one.

The wider [fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) covers all of section 4.10. This page defines the ideas that normalisation depends on, walks through a full example, and lists the checks that avoid the usual errors.

Condensed notes are in the [normalisation revision notes](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes/), and exam-style questions are in the [normalisation practice questions](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-practice/).

## Why normalise?

If all the data for a business is kept in one wide table, the same facts are stored over and over. For example, every order line might repeat the customer's name and address. This causes problems called **anomalies**:

- **Update anomaly:** a customer changes address, and every row that holds the old address must be changed. If one is missed, the database contradicts itself.
- **Insertion anomaly:** you cannot record a new customer or product until it appears in an order, because the table needs an order to hold the row.
- **Deletion anomaly:** deleting the only order for a customer also deletes everything known about that customer.
- **Wasted storage:** repeated data takes more space.

**Normalisation** is the process of organising data into tables so that **each fact is stored once, in one place**. The benefits are less redundancy, consistent data, no anomalies, and a design that is easier to extend and maintain. A cost is that queries need to join more tables, which can be slower for some uses.

## Functional dependency

An attribute B is **functionally dependent** on attribute A (written A → B) if each value of A is associated with exactly one value of B. For example `CustomerID → CustomerName`: given a customer ID there is only one customer name.

- A **partial dependency** is where an attribute depends on only part of a composite primary key.
- A **transitive dependency** is where a non-key attribute depends on another non-key attribute, which in turn depends on the key: `A → B → C` where A is the key.

## The normal forms

**First normal form (1NF).**

- There are **no repeating groups** of attributes, and every cell holds a single atomic value.
- The table has a **primary key**.

**Second normal form (2NF).**

- The relation is in 1NF, and
- there are **no partial dependencies**: every non-key attribute depends on the **whole** of the primary key.
- (A table with a single-attribute primary key in 1NF is automatically in 2NF.)

**Third normal form (3NF).**

- The relation is in 2NF, and
- there are **no transitive dependencies**: no non-key attribute depends on another non-key attribute.

A memorable summary of 3NF: *every non-key attribute depends on the key, the whole key, and nothing but the key.*

## Worked example: an order form

A business records orders on this form. Each order has a number, a date, one customer and one or more products.

| OrderNo | OrderDate | CustomerID | CustomerName | CustomerAddress | Products ordered |
|---|---|---|---|---|---|
| 1001 | 2026-03-02 | C7 | Hale Ltd | 12 Mill Lane | P1 Bolt 0.20 qty 100; P2 Nut 0.10 qty 100 |
| 1002 | 2026-03-04 | C9 | Okafor Co | 5 Dock Road | P1 Bolt 0.20 qty 50 |
| 1003 | 2026-03-09 | C7 | Hale Ltd | 12 Mill Lane | P3 Washer 0.05 qty 400 |

**Step 1: first normal form.** The last column holds a repeating group (several products). Give each product its own row, so every cell has a single value, and choose a primary key. An order has several lines, so OrderNo alone is not unique. The key is the composite **(OrderNo, ProductCode)**.

**OrderLine1 (OrderNo, ProductCode, OrderDate, CustomerID, CustomerName, CustomerAddress, ProductName, UnitPrice, Quantity)**

| OrderNo | ProductCode | OrderDate | CustomerID | CustomerName | CustomerAddress | ProductName | UnitPrice | Quantity |
|---|---|---|---|---|---|---|---|---|
| 1001 | P1 | 2026-03-02 | C7 | Hale Ltd | 12 Mill Lane | Bolt | 0.20 | 100 |
| 1001 | P2 | 2026-03-02 | C7 | Hale Ltd | 12 Mill Lane | Nut | 0.10 | 100 |
| 1002 | P1 | 2026-03-04 | C9 | Okafor Co | 5 Dock Road | Bolt | 0.20 | 50 |
| 1003 | P3 | 2026-03-09 | C7 | Hale Ltd | 12 Mill Lane | Washer | 0.05 | 400 |

Notice the repetition: Hale Ltd and its address appear three times, and Bolt appears twice with its price.

**Step 2: second normal form.** List the dependencies on the composite key (OrderNo, ProductCode):

- `OrderNo → OrderDate, CustomerID, CustomerName, CustomerAddress` (depends on **part** of the key).
- `ProductCode → ProductName, UnitPrice` (depends on the **other part** of the key).
- `(OrderNo, ProductCode) → Quantity` (depends on the **whole** key).

Partial dependencies break 2NF, so split the table, with one table for each determinant:

- **Order (OrderNo, OrderDate, CustomerID, CustomerName, CustomerAddress)**
- **Product (ProductCode, ProductName, UnitPrice)**
- **OrderLine (OrderNo, ProductCode, Quantity)**

**Step 3: third normal form.** Look for non-key attributes that depend on other non-key attributes. In Order, `CustomerID → CustomerName, CustomerAddress`, and CustomerID is not the key of Order. This is a **transitive dependency**: OrderNo → CustomerID → CustomerName. Move the dependent attributes to their own table, keeping CustomerID in Order as a foreign key:

- **Customer (CustomerID, CustomerName, CustomerAddress)**
- **Order (OrderNo, OrderDate, CustomerID)**

**Final design in 3NF**

- `Customer (`**`CustomerID`**`, CustomerName, CustomerAddress)`
- `Order (`**`OrderNo`**`, OrderDate, CustomerID)` with CustomerID as a foreign key
- `Product (`**`ProductCode`**`, ProductName, UnitPrice)`
- `OrderLine (`**`OrderNo, ProductCode`**`, Quantity)` with both parts as foreign keys

**Check for anomalies.**

- Update: Hale Ltd's address is stored once, so one change fixes it.
- Insertion: a new customer or product can be added without an order.
- Deletion: deleting order 1002 does not delete the details of Okafor Co or Bolt.

The data has not been lost: joining the four tables on their keys rebuilds the original rows.

## A second example: single-attribute key

A clinic holds one table:

**Appointment (AppointmentID, AppointmentDate, PatientID, PatientName, PatientPhone, DoctorID, DoctorName, DoctorRoom)**

| AppointmentID | AppointmentDate | PatientID | PatientName | PatientPhone | DoctorID | DoctorName | DoctorRoom |
|---|---|---|---|---|---|---|---|
| 301 | 2026-05-04 | PT1 | Ruth Ames | 07700 900201 | D1 | Dr Shah | R4 |
| 302 | 2026-05-04 | PT2 | Lee Wong | 07700 900202 | D1 | Dr Shah | R4 |
| 303 | 2026-05-05 | PT1 | Ruth Ames | 07700 900201 | D2 | Dr Pike | R6 |

- **1NF:** every cell has a single value and there is a primary key, AppointmentID. The table is in 1NF.
- **2NF:** the key is a single attribute, so there are no partial dependencies. The table is in 2NF.
- **3NF:** look at the dependencies. `AppointmentID` determines everything. But `PatientID → PatientName, PatientPhone` and `DoctorID → DoctorName, DoctorRoom`. Patient and doctor details depend on a non-key attribute, so the table has transitive dependencies. Split it:

`Appointment (`**`AppointmentID`**`, AppointmentDate, PatientID, DoctorID)`
`Patient (`**`PatientID`**`, PatientName, PatientPhone)`
`Doctor (`**`DoctorID`**`, DoctorName, DoctorRoom)`

Ruth Ames's name and phone number are now stored once, not in every appointment. If Dr Shah moves to room R5, one row changes.

This example shows a common exam pattern: when the key is a single attribute you can pass 2NF at once, and the real work is finding the transitive dependencies for 3NF.

## A shorter test for each step

| Ask | If yes | Action |
|---|---|---|
| Are there repeating groups or cells with more than one value? | Not in 1NF | Make one row per value; choose a key |
| Does any non-key attribute depend on only part of a composite key? | Not in 2NF | Move it to a table keyed by that part |
| Does any non-key attribute depend on another non-key attribute? | Not in 3NF | Move both to a new table keyed by the determining attribute |

## Common mistakes

- Treating 1NF as "has a key" only. The **repeating groups** must be removed.
- Looking for partial dependencies when the key is a **single attribute**. There cannot be any.
- Moving an attribute to a new table but **forgetting to keep the key** (as a foreign key) in the original.
- Splitting tables so that **data is lost** or cannot be rejoined.
- Writing the final tables without **marking the primary keys**.
- Saying that normalisation "makes the database faster". Its main aims are **less redundancy and avoiding anomalies**.

## Exam technique

- Show each normal form as a **separate step** with the tables written out.
- State the **dependencies** that justify each split.
- Identify and mark **primary and foreign keys** in the final tables.
- For "why normalise", give two problems of the unnormalised table with a data example from the question.

## More resources on this topic

- [Normalisation revision notes](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes/)
- [Normalisation practice questions](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-practice/)
- [Relational databases study guide](/resources/aqa-a-level-computer-science-7517-relational-databases/)

*Written against the AQA A-level Computer Science (7517) specification, 4.10.3 Database design and normalisation techniques. Always check the current specification on the AQA website.*
