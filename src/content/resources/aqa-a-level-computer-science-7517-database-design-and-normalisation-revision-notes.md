---
title: "AQA A-Level Computer Science (7517): Database Design and Normalisation Techniques -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.10.3 recall: reasons for normalising, anomalies, functional dependency, first, second and third normal form and a method to apply."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.10.3 Database design and normalisation techniques**, AQA A-Level Computer Science (7517): **normalise relations to third normal form**, know the **properties of a relation in third normal form**, and understand **why databases are normalised**. Full worked examples are in the [normalisation study guide](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation/); questions are in the [normalisation practice questions](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-practice/).

## Why normalise?

- Less **redundancy**: each fact stored once.
- **Consistency**: one place to update.
- No **anomalies**:
  - update anomaly: many rows to change, with the risk of missing one;
  - insertion anomaly: cannot record a customer or product until an order exists;
  - deletion anomaly: deleting the last order loses customer or product details.
- Saves storage and eases maintenance.
- Cost: more tables and joins in queries.

## Vocabulary

| Term | Meaning |
|---|---|
| Functional dependency A → B | Each value of A determines exactly one value of B |
| Partial dependency | A non-key attribute depends on only part of a composite key |
| Transitive dependency | A non-key attribute depends on another non-key attribute |
| Repeating group | A set of attributes that occurs several times in one record |
| Atomic value | A single, indivisible value in a cell |

## The normal forms

| Form | Requirements |
|---|---|
| **1NF** | No repeating groups; every cell holds one atomic value; has a primary key |
| **2NF** | In 1NF, and no partial dependencies (every non-key attribute depends on the whole key) |
| **3NF** | In 2NF, and no transitive dependencies (no non-key attribute depends on another non-key attribute) |

**Memory line:** every non-key attribute depends on **the key, the whole key, and nothing but the key**.

A table in 1NF whose key is a **single attribute** is already in 2NF.

## Method

1. **1NF:** one row per repeating item; choose a primary key (composite if needed).
2. **2NF:** write the dependencies; for each attribute that depends on only part of the key, move it to a new table whose key is that part.
3. **3NF:** for each non-key attribute that depends on another non-key attribute, move both to a new table keyed by the determining attribute; keep that attribute as a foreign key.
4. Mark primary and foreign keys in every final table.
5. Check that joining the tables rebuilds the original data.

## Worked recall: orders

Order form: OrderNo, OrderDate, CustomerID, CustomerName, CustomerAddress, plus products (code, name, price, quantity).

- **1NF:** one row per product line; key (OrderNo, ProductCode).
- **2NF:** OrderNo determines date and customer details; ProductCode determines name and price; the pair determines quantity. Split into Order, Product, OrderLine.
- **3NF:** CustomerID determines CustomerName and CustomerAddress, so move them to Customer.

Result:

- `Customer (`**`CustomerID`**`, CustomerName, CustomerAddress)`
- `Order (`**`OrderNo`**`, OrderDate, CustomerID)`
- `Product (`**`ProductCode`**`, ProductName, UnitPrice)`
- `OrderLine (`**`OrderNo, ProductCode`**`, Quantity)`

## Worked recall: clinic

`Appointment (AppointmentID, AppointmentDate, PatientID, PatientName, DoctorID, DoctorName)` has a single-attribute key, so 2NF is automatic. PatientID determines PatientName, and DoctorID determines DoctorName, so these are transitive dependencies.

- `Appointment (`**`AppointmentID`**`, AppointmentDate, PatientID, DoctorID)`
- `Patient (`**`PatientID`**`, PatientName)`
- `Doctor (`**`DoctorID`**`, DoctorName)`

## Identifying the problem

| Symptom in the data | Break in |
|---|---|
| A cell holds "P1, P2" or columns Item1, Item2 | 1NF |
| Attribute depends on part of a composite key | 2NF |
| Attribute fixed by another non-key attribute (name fixed by ID) | 3NF |

## Key terms

| Term | Definition |
|---|---|
| Normalisation | Organising data into tables so that each fact is stored once |
| Redundancy | The same data stored in more than one place |
| Anomaly | An error or inconsistency caused by redundancy when data is changed |
| Determinant | An attribute that determines the value of another |
| Composite key | A key made of more than one attribute |
| Foreign key | An attribute that is the primary key of another table |
| Decomposition | Splitting a table into smaller tables without losing data |

## Exam traps

- **1NF means more than having a key**: remove repeating groups too.
- **Partial dependencies exist only with composite keys.**
- **Keep the linking key** as a foreign key in the original table.
- **Do not lose data** when splitting.
- **Mark every key** in the final answer.
- **Normalisation is about redundancy and anomalies**, not speed.
- **Give a data example** when explaining an anomaly.

## Self-test

1. State two requirements of first normal form.
2. What is a partial dependency?
3. State the extra requirement of 3NF beyond 2NF.
4. What is a transitive dependency?
5. Give one update anomaly.
6. Give one deletion anomaly.
7. Why does a table with a single-attribute key need no 2NF work?
8. A table has columns Phone1, Phone2 and Phone3. Which normal form does it break?
9. In `Order (OrderNo, CustomerID, CustomerName)` what should be moved?
10. What must remain in the original table when attributes are moved?
11. Give one benefit of normalising.
12. Give one cost of normalising.

**Answers**

1. No repeating groups; each cell holds a single value; a primary key exists.
2. A non-key attribute that depends on only part of a composite primary key.
3. No transitive dependencies: non-key attributes depend only on the key.
4. A non-key attribute that depends on another non-key attribute.
5. For example, a customer's address held in many rows must be changed in every one; missing one leaves inconsistent data.
6. For example, deleting the only order for a customer also deletes the customer's details.
7. There is no part of the key for an attribute to depend on, so no partial dependency.
8. First normal form (repeating group).
9. CustomerName, to a Customer table keyed by CustomerID.
10. The key attribute (CustomerID) as a foreign key.
11. Less redundancy, consistency, or no anomalies.
12. More tables, so queries need joins.

## Related resources

- [Normalisation study guide](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation/)
- [Normalisation practice questions](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-practice/)
- [Relational databases revision notes](/resources/aqa-a-level-computer-science-7517-relational-databases-revision-notes/)
