---
title: "AQA A Level Computer Science (7517): Fundamentals of databases -- Study Guide"
resourceType: "study-guides"
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
description: "Relational databases, entity-relationship models, normalisation to third normal form, SQL, indexing and concurrency for AQA A Level Computer Science."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

A database stores organised data so that many users and programs can search, update and share it reliably. This topic covers how a relational database is designed (entities, keys, normalisation), how it is queried with SQL, and how a shared database stays consistent when several users change it at once. The design and SQL material is practical, and you should practise both on paper because the written paper expects you to write queries without a computer.

## Where this fits in the specification

Fundamentals of databases is section 4.10 of AQA 7517 and is assessed on Paper 2. It uses ideas from [Fundamentals of communication and networking](/resources/aqa-a-level-computer-science-fundamentals-of-communication-and-networking-study-guide/), because most real databases run on a server accessed by clients. Typical questions are: draw an entity-relationship diagram, normalise a table, write an SQL query, and explain a concurrency problem.

## Why use a database?

A **flat-file** database stores everything in one table. It suffers from **data redundancy** (the same data repeated), **inconsistency** (copies that differ after an update) and **dependency** between data and the programs that read it. A **relational database** splits data into related tables, which reduces redundancy, keeps the data consistent and lets queries combine tables.

## Entity-relationship modelling

An **entity** is a thing about which data is stored (Customer, Product). **Attributes** are its properties. A **relationship** links entities and has a degree: **one-to-one**, **one-to-many** or **many-to-many**. In an entity-relationship (E-R) diagram, entities are boxes and relationships are lines with crow's-foot or numbers showing the many end. A many-to-many relationship, such as Order and Product, cannot be stored directly: it is resolved with a **link table** (here OrderLine) that carries both foreign keys and turns it into two one-to-many relationships.

## Keys and integrity

- A **primary key** uniquely identifies each record. It may be **composite** (two or more fields together).
- A **candidate key** is any field that could serve as a primary key.
- A **secondary key** is a field indexed to speed searching on that field but not unique.
- A **foreign key** is a field in one table that is the primary key of another, which creates the link.
- **Referential integrity** means every foreign key value matches an existing primary key value, so there are no orphan records. A DBMS enforces it by refusing to delete a customer who still has orders, or by deleting the dependent records too.
- An **index** is a separate structure that allows a fast lookup of records by a field, at the cost of extra storage and slower inserts and updates.

## Normalisation

**Normalisation** organises data to remove redundancy and avoid **update, insertion and deletion anomalies**.

- **First normal form (1NF)**: every field holds a single value (no repeating groups), and there is a primary key.
- **Second normal form (2NF)**: 1NF, and every non-key attribute depends on the **whole** primary key. This only matters where the key is composite, since partial dependency cannot occur with a single-field key.
- **Third normal form (3NF)**: 2NF, and no non-key attribute depends on another non-key attribute (no **transitive dependency**). A common summary is that every attribute depends on the key, the whole key and nothing but the key.

### Worked example 1: normalising an order

An unnormalised design stores: OrderID, OrderDate, CustomerID, CustomerName, Town, and for each item ProductID, Description, Price, Quantity.

**1NF:** an order can include several products, so the item details repeat. Make one row per order line, with the primary key (OrderID, ProductID).

**2NF:** OrderDate, CustomerID, CustomerName and Town depend on OrderID alone, and Description and Price depend on ProductID alone. These are partial dependencies. Split into three tables: OrderHeader(OrderID, OrderDate, CustomerID, CustomerName, Town), Product(ProductID, Description, Price) and OrderLine(OrderID, ProductID, Quantity).

**3NF:** in OrderHeader, CustomerName and Town depend on CustomerID, which is not the key. This is a transitive dependency. Move them out: Customer(CustomerID, Name, Town), OrderHeader(OrderID, CustomerID, OrderDate).

Final design: Customer (CustomerID), Product (ProductID), OrderHeader (OrderID, with foreign key CustomerID) and OrderLine (OrderID and ProductID together, both foreign keys). A customer's town is now stored once, so changing it is a single update.

## SQL

SQL is a declarative language. A query names the data wanted, not the steps to find it.

```
SELECT Name, Town
FROM Customer
WHERE Town = 'Leeds'
ORDER BY Name;
```

- `WHERE` filters rows and can use `AND`, `OR`, `NOT`, comparison operators and `LIKE` (with `%` as a wildcard).
- `ORDER BY` sorts; add `DESC` for descending.
- Aggregate functions `COUNT`, `SUM`, `AVG`, `MAX` and `MIN` summarise values; `GROUP BY` forms groups to which they apply.
- `INNER JOIN ... ON` combines tables on matching key values.
- `INSERT INTO table (fields) VALUES (...)` adds a record; `UPDATE table SET field = value WHERE condition` changes records; `DELETE FROM table WHERE condition` removes them. Omitting `WHERE` from `UPDATE` or `DELETE` affects every row.
- `CREATE TABLE` defines a table, its field types and its keys.

### Worked example 2: a join with a total

Using the final design, with these records:

| Customer | Product | OrderLine (OrderID, ProductID, Quantity) |
|---|---|---|
| 1 Aldous Wren, Leeds; 2 Bina Sethi, York; 3 Corin Hale, Leeds | 10 Notebook 2.50; 11 Pen set 4.00; 12 Satchel 18.00 | (100,10,4), (100,11,1), (101,12,1), (102,10,2), (102,12,1) |

OrderHeader links order 100 and 102 to customer 1, and order 101 to customer 2. Find each customer's total spend, highest first.

```
SELECT Customer.Name, SUM(OrderLine.Quantity * Product.Price) AS Total
FROM Customer
INNER JOIN OrderHeader ON Customer.CustomerID = OrderHeader.CustomerID
INNER JOIN OrderLine   ON OrderHeader.OrderID = OrderLine.OrderID
INNER JOIN Product     ON OrderLine.ProductID = Product.ProductID
GROUP BY Customer.Name
ORDER BY Total DESC;
```

Working: Aldous Wren has order 100 (4 x 2.50 + 1 x 4.00 = 14.00) and order 102 (2 x 2.50 + 1 x 18.00 = 23.00), a total of 37.00. Bina Sethi has order 101: 1 x 18.00 = 18.00. Corin Hale has no orders, so the inner join does not return him. The result is Aldous Wren 37.00, then Bina Sethi 18.00.

## Client-server databases and concurrency

In a **client-server** database, the data and the **database management system (DBMS)** sit on a server and many clients send queries to it. This allows central security, backup and control.

When several users edit the same record, a **lost update** can occur: two users read the same value, both change it, and the second save overwrites the first. Methods to prevent this:

- **Record locking**: a record being edited is locked so others cannot change it until it is released. It is safe but can reduce performance, and two users each waiting for a lock the other holds is a **deadlock**.
- **Serialisation**: transactions are arranged so the result is the same as if they were run one at a time.
- **Timestamp ordering**: each transaction gets a timestamp, and conflicting operations are carried out in timestamp order, with a transaction that would break the order rolled back.
- **Commit and rollback**: a transaction's changes become permanent on commit, or are undone on rollback if any part fails, so the database is never left half-updated.

## Common mistakes

- Putting a many-to-many relationship straight into two tables with no link table.
- Saying 2NF is about "no repeating groups" (that is 1NF).
- Forgetting the join condition, which returns every combination of rows.
- Using `WHERE` to filter on an aggregate. Aggregates are not available in `WHERE`.
- Marking a foreign key as if it were the primary key.

## Exam technique

When asked to normalise, state the dependency that breaks each normal form before splitting, because the reason earns the marks. In SQL answers, write each clause on its own line, use the table name before a field where two tables share a field name, and finish with a semicolon.

## Check your understanding

1. What is a foreign key? *Answer: a field in one table that is the primary key of another, creating a link.*
2. Why does a many-to-many relationship need a link table? *Answer: a relational database stores relationships through foreign keys, which need a many end and a one end.*
3. State what referential integrity guarantees. *Answer: every foreign key value matches an existing primary key, so no orphan records.*
4. A table has the key (OrderID, ProductID) and the field Description depends only on ProductID. Which normal form is broken? *Answer: second normal form.*
5. Write SQL to list the descriptions of products costing more than 3.00. *Answer: SELECT Description FROM Product WHERE Price > 3.00;*
6. What happens if `DELETE FROM Customer;` is run? *Answer: every record in Customer is removed.*
7. Describe the lost update problem. *Answer: two users read the same record, and the second save overwrites the first user's change.*
8. Explain the purpose of rollback. *Answer: it undoes a partly completed transaction so the database stays consistent.*
