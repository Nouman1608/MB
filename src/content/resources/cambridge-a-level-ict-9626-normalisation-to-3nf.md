---
title: "Cambridge A Level Information Technology (9626): Normalisation to third normal form (3NF)"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "normalisation-to-third-normal-form-3nf"
description: "Cambridge 9626 IT section 10.2 study guide: unnormalised form, 1NF, 2NF and 3NF, with a fully worked normalisation of an order form and the advantages and disadvantages."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 10.2 Normalisation to third normal form (3NF)** of Topic 10 Database and file concepts in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. It is examined in Paper 1 Theory, where you describe the forms and normalise given data, and it supports the practical database work in section 10.1. The [Database and file concepts overview](/resources/a-level-cambridge-ict-database-and-file-concepts/) introduces the idea; this page defines each form precisely and walks through one example from start to finish. Use it with the [normalisation revision notes](/resources/cambridge-a-level-ict-9626-normalisation-to-3nf-revision-notes/) and the [normalisation practice questions](/resources/cambridge-a-level-ict-9626-normalisation-to-3nf-practice/).

## What section 10.2 covers

| Syllabus point | What you must be able to do |
|---|---|
| Characteristics | Describe data in unnormalised form (UNF), first normal form (1NF), second normal form (2NF) and third normal form (3NF) |
| Normalisation | Explain the process, with its advantages and disadvantages |
| Practical skill | Normalise a database to 1NF, 2NF and 3NF |

## What normalisation is and why it is done

**Normalisation** is the process of organising data into tables so that **each fact is stored once**, in the right place. It removes **redundancy** (repeated data) and the problems that come with it:

- **Update anomaly:** a customer's address is stored on 50 orders. Changing it means editing 50 rows; if one is missed, the data contradicts itself.
- **Insert anomaly:** a new product cannot be stored until someone orders it, if products only exist inside order rows.
- **Delete anomaly:** deleting the only order for a customer also deletes the customer's details.

## Key ideas needed

- A **primary key** uniquely identifies each record. A **composite key** is a primary key of two or more fields.
- An attribute is **functionally dependent** on another if the value of the second decides the value of the first. For example, `ProductName` depends on `ProductID`, because one product ID gives one name.
- A **non-key attribute** is any field that is not part of the primary key.
- A **repeating group** is a set of fields that occurs many times in one record, such as several products on one order.

## The normal forms

### Unnormalised form (UNF)

Data is held as it appears on a form or in a spreadsheet. It typically has **repeating groups** (several values in one record), may have no clear key, and is likely to contain a lot of repeated data.

### First normal form (1NF)

A table is in 1NF when:
1. Every field holds a **single (atomic) value**; no cell contains a list.
2. There are **no repeating groups**.
3. There is a **primary key**, and every record can be identified.

### Second normal form (2NF)

A table is in 2NF when:
1. It is in **1NF**.
2. There are **no partial dependencies**: every non-key attribute depends on the **whole** of the primary key, and not on only part of it.

2NF matters only where the primary key is **composite**. A table in 1NF with a single-field primary key is already in 2NF.

### Third normal form (3NF)

A table is in 3NF when:
1. It is in **2NF**.
2. There are **no transitive dependencies**: no non-key attribute depends on **another non-key attribute**. Every non-key attribute depends on "the key, the whole key and nothing but the key".

## Worked example: normalising an order

A shop records each order on a form. The data in **UNF** is:

| OrderNo | OrderDate | CustomerID | CustomerName | CustomerCity | Products ordered (ProductID, ProductName, UnitPrice, Quantity) |
|---|---|---|---|---|---|
| 1001 | 03/11/2026 | C01 | Ayla Ross | Leeds | P10, Notebook, 2.50, 4; P11, Pen, 0.80, 10 |
| 1002 | 04/11/2026 | C02 | Ben Okoye | York | P10, Notebook, 2.50, 2 |

The last column holds a **repeating group**: more than one product on an order.

### Step 1: reach 1NF

Remove the repeating group by giving each product on an order its own row, and repeat the order details on each row. Choose a primary key that identifies each row: `OrderNo` alone is not unique now, but **OrderNo plus ProductID** is.

**Order1NF** (primary key: `OrderNo`, `ProductID`)

| OrderNo | ProductID | OrderDate | CustomerID | CustomerName | CustomerCity | ProductName | UnitPrice | Quantity |
|---|---|---|---|---|---|---|---|---|
| 1001 | P10 | 03/11/2026 | C01 | Ayla Ross | Leeds | Notebook | 2.50 | 4 |
| 1001 | P11 | 03/11/2026 | C01 | Ayla Ross | Leeds | Pen | 0.80 | 10 |
| 1002 | P10 | 04/11/2026 | C02 | Ben Okoye | York | Notebook | 2.50 | 2 |

All cells are atomic, there is no repeating group and there is a composite key. But the order details are repeated on each line of an order, and the product details are repeated on each order of that product. This is redundancy.

### Step 2: reach 2NF

Check each non-key attribute against the **whole** key (`OrderNo` and `ProductID`).

| Attribute | Depends on | Partial dependency? |
|---|---|---|
| OrderDate | OrderNo only | Yes |
| CustomerID | OrderNo only | Yes |
| CustomerName | OrderNo only (through CustomerID) | Yes |
| CustomerCity | OrderNo only (through CustomerID) | Yes |
| ProductName | ProductID only | Yes |
| UnitPrice | ProductID only | Yes |
| Quantity | Both OrderNo **and** ProductID | No |

Split the table by the part of the key each attribute depends on:

- **Order**(**OrderNo**, OrderDate, CustomerID, CustomerName, CustomerCity)
- **Product**(**ProductID**, ProductName, UnitPrice)
- **OrderLine**(**OrderNo**, **ProductID**, Quantity), with a composite primary key; `OrderNo` and `ProductID` are also foreign keys.

Quantity depends on the whole key because it is the quantity of **that product on that order**.

### Step 3: reach 3NF

Look for non-key attributes that depend on another non-key attribute. In **Order**, `CustomerName` and `CustomerCity` depend on `CustomerID`, which is not the key of the table. This is a **transitive dependency**: OrderNo determines CustomerID, and CustomerID determines CustomerName and CustomerCity.

Remove it by moving them to their own table:

- **Customer**(**CustomerID**, CustomerName, CustomerCity)
- **Order**(**OrderNo**, OrderDate, CustomerID), where `CustomerID` is a foreign key.

`Product` and `OrderLine` have no transitive dependency, so they are already in 3NF.

### The final 3NF design

| Table | Primary key | Other fields | Foreign keys |
|---|---|---|---|
| Customer | CustomerID | CustomerName, CustomerCity | none |
| Order | OrderNo | OrderDate | CustomerID |
| Product | ProductID | ProductName, UnitPrice | none |
| OrderLine | OrderNo, ProductID | Quantity | OrderNo, ProductID |

Each fact is now stored once. Ayla Ross's city is held in one record in Customer; changing it needs one edit. A new product can be added to Product before anyone orders it. Deleting an order does not delete the customer.

The relationships are: Customer to Order is one-to-many; Order to OrderLine is one-to-many; Product to OrderLine is one-to-many. Order and Product have a many-to-many relationship, resolved by OrderLine.

## A quick method to follow

1. Write down the attributes and identify the **repeating groups**.
2. **1NF:** remove repeating groups, make values atomic, and choose a primary key.
3. For a composite key, list which attributes depend on **part** of the key and move them to new tables, each with that part as the key. This is **2NF**.
4. In each table, look for attributes that depend on a **non-key attribute** and move them out with that attribute as the key. This is **3NF**.
5. Check each table has a primary key, and that foreign keys link the tables.

## Advantages and disadvantages of normalisation

**Advantages:**
- **Less redundancy**: data is stored once, so storage is saved.
- **Consistency**: updates are made in one place, which avoids contradictory data.
- No **insert, update or delete anomalies**.
- Smaller tables are **easier to maintain**, and data integrity is easier to enforce with referential integrity.
- A flexible design: new fields or relationships can be added without disturbing the rest.

**Disadvantages:**
- **More tables** and relationships, so the design is more complex.
- Queries need to **join** several tables, which can be slower and harder to write.
- Needs **planning** and skill, and takes longer to design.
- Reports that combine data need the tables to be joined every time.
- Some systems that need very fast reading may choose to **denormalise**, accepting some redundancy for speed.

## Common mistakes

- Saying 2NF is about "removing repeating groups". That is 1NF.
- Applying 2NF to a table whose primary key is a single field.
- Confusing a partial dependency (on part of a composite key) with a transitive dependency (on a non-key attribute).
- Splitting tables without choosing primary keys or foreign keys.
- Leaving a copy of the foreign key's attributes in the original table.
- Putting `Quantity` in the Order table instead of OrderLine.
- Writing "3NF means no redundancy at all". Foreign keys are still repeated.

## Exam technique

- Show each stage separately: the 1NF table, the 2NF tables and the 3NF tables, with the keys marked.
- Name the **type of dependency** you are removing, and the attribute involved.
- Underline or mark **primary keys** and label **foreign keys**.
- In a definition question, state the condition for each form, building on the previous one: 2NF is "1NF and no partial dependencies"; 3NF is "2NF and no transitive dependencies".
- For advantages and disadvantages, give a specific example, such as "a customer's address is changed in one place".

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 10 Database and file concepts, section 10.2 Normalisation to third normal form (3NF).
