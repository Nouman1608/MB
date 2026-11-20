---
title: "Cambridge A Level Information Technology (9626): Creating a database -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "creating-a-database"
description: "Thirteen original Cambridge 9626 IT section 10.1 questions with answers on keys, relationships, ERDs, queries, forms, reports and referential integrity."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Creating a database study guide](/resources/cambridge-a-level-ict-9626-creating-a-database/)

These questions are for **section 10.1 Creating a database** (Topic 10, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Questions 8 and 9 use the table below. All organisations are invented.

| BookID | Title | Author | Genre | Price | InStock |
|---|---|---|---|---|---|
| B01 | Tidewater | Orla Finn | Fiction | 7.99 | Yes |
| B02 | Cold Maps | Dev Rao | Travel | 12.50 | Yes |
| B03 | Iron Garden | Orla Finn | Fiction | 9.99 | No |
| B04 | Night Kitchen | Sam Pike | Cookery | 15.00 | Yes |
| B05 | Hill Walks | Dev Rao | Travel | 10.00 | Yes |

---

## Section A

**1.** State the most suitable data type for each field.

**(a)** A telephone number. **[1]**

**(b)** Whether a customer has paid. **[1]**

**(c)** The price of a product in pounds and pence. **[1]**

**2.** Define the term foreign key. **[2]**

**3.** State what is meant by referential integrity. **[2]**

**4.** State the difference between a primary key and a composite key. **[2]**

## Section B

**5.** Describe **two** differences between a flat file and a relational database. **[4]**

**6.** Heron Sports Club has members and teams. A member can play for many teams, and a team has many members.

**(a)** State the type of relationship between members and teams. **[1]**

**(b)** Explain how this relationship is stored in a relational database. **[3]**

**(c)** Write the fields and the primary key of the table you described in part (b). **[2]**

**7.** Describe the difference between a conceptual and a physical entity relationship diagram. **[3]**

**8.** Using the books table, list the BookID values returned by each query.

**(a)** Author = "Dev Rao" **[1]**

**(b)** Genre = "Fiction" AND InStock = Yes **[1]**

**(c)** Genre = "Travel" OR Price > 14 **[2]**

**(d)** Price < 10 OR InStock = No **[2]**

**9.** The books table is used for further queries.

**(a)** A summary query groups books by Genre and shows the average price. State the average for Fiction and for Travel. **[2]**

**(b)** A calculated field adds 20 per cent VAT to each price. Write the expression, and state the result for B04. **[3]**

**(c)** State the difference between a static parameter query and a dynamic parameter query, and say which suits a shop assistant who is asked about different genres each day. **[3]**

**10.** A database has tables Customer(CustomerID, Name) and Order(OrderID, CustomerID, Date).

**(a)** Identify the primary key and the foreign key in the Order table. **[2]**

**(b)** Explain what happens if referential integrity is enforced and a user tries to enter an order for a CustomerID that does not exist. **[2]**

**11.** Describe **four** design features of a good data entry form. **[4]**

**12.** Explain **one** use of a grouped report and **one** use of a switchboard in a school database. **[4]**

**13.** A shop wants to remove every product that has been discontinued from its products table.

**(a)** Name the type of query that should be used. **[1]**

**(b)** Explain why the shop should take care before running it. **[2]**

---

## Answers

**1. (a)** Text (or alphanumeric) [1].

**(b)** Boolean (yes/no) [1].

**(c)** Numeric (decimal) or currency [1]. **[3]**

**2.** A field in one table [1] that holds the primary key value of a record in another table, linking the two tables [1]. **[2]**

**3.** A rule that every foreign key value must match an existing primary key value in the related table [1], which prevents orphan records and keeps the data consistent [1]. **[2]**

**4.** A primary key is a field that is unique for each record [1]; a composite key is a primary key made of two or more fields used together [1]. **[2]**

**5.** A flat file has one table, whereas a relational database has several linked tables [1]. A flat file repeats data, whereas a relational database stores data once and links it [1]. Updating a flat file means changing every copy, whereas in a relational database one record is changed [1]. A flat file is simpler to build, whereas a relational database needs more planning [1]. **[4]**

**6. (a)** Many-to-many [1].

**(b)** A many-to-many relationship cannot be stored directly [1]. It is split into two one-to-many relationships using a link table [1] that holds the primary keys of the Member and Team tables as foreign keys [1].

**(c)** MemberTeam(MemberID, TeamID) [1] with the composite primary key made of MemberID and TeamID [1]. **[6]**

**7.** A conceptual diagram shows the entities and the relationships between them [1], without attributes or keys [1]. A physical diagram shows the actual tables, field names, data types and sizes as they will be built in the chosen software [1]. **[3]**

**8. (a)** B02, B05 [1].

**(b)** B01 [1].

**(c)** B02, B05, B04 [2].

**(d)** B01, B03 [2]. **[6]**

**9. (a)** Fiction: (7.99 + 9.99) / 2 = 8.99 [1]; Travel: (12.50 + 10.00) / 2 = 11.25 [1].

**(b)** `PriceWithVAT: [Price]*1.2` [2]; for B04, 15.00 × 1.2 = 18.00 [1].

**(c)** A static parameter has a fixed criterion written in the query, whereas a dynamic parameter asks the user to enter the value each time the query is run [1]. A dynamic parameter query suits the assistant [1], because the genre changes each day [1]. **[8]**

**10. (a)** Primary key: OrderID [1]. Foreign key: CustomerID [1].

**(b)** The database rejects the order [1], because the CustomerID does not match any primary key in the Customer table [1]. **[4]**

**11.** Any four from: clear font styles and sizes [1]; spacing between fields [1]; boxes wide enough to show the data [1]; white space [1]; radio buttons or drop-down menus for choices [1]; highlighted key fields [1]; linked subforms [1]; clear labels and instructions [1]. **[4]**

**12.** Grouped report: a report grouped by form class [1] lists students of each class together with a total or count for each class [1]. Switchboard: a menu form with buttons [1] lets office staff open forms or print reports without opening the design view [1]. **[4]**

**13. (a)** A delete query [1].

**(b)** A delete query permanently removes the records [1], so the shop should check the criteria first, for example by running a select query to see which records match, and keep a back-up [1]. **[3]**

## Where marks are usually lost

- Storing phone numbers or codes as numbers.
- Putting the foreign key in the wrong table.
- Saying a many-to-many relationship is stored with one foreign key.
- Mixing up AND and OR in queries.
- Confusing conceptual and physical ERDs.
