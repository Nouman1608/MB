---
title: "A Level Computer Science: Databases — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-concepts"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-management-systems-dbms"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "ddl-and-dml"
description: "Original Cambridge 9618 Topic 8 practice questions with mark-scheme answers: keys, E-R design, normalisation to 3NF, DBMS features, SQL DDL and DML queries."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08 recheck: expanded from 5 to 13 questions to cover all of 8.1-8.3 (file-based limits, E-R, 3NF design, DBMS features and tools, DDL with keys, DML with INNER JOIN/GROUP BY/COUNT, maintenance); mapped 8.2; please re-review; previously reviewed by harris-khan on 2026-09-29."
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Databases revision notes](/resources/a-level-computer-science-databases-revision-notes/) · [Databases study guide](/resources/a-level-computer-science-databases/)

These questions cover the whole of Topic 8 of Cambridge International AS & A Level Computer Science (9618): 8.1 Database Concepts, 8.2 Database Management Systems and 8.3 DDL and DML. Topic 8 is examined on Paper 1, and the SQL in the syllabus is limited to at most two tables per query.

---

## Section A: database concepts (8.1)

**1.** Define the terms *candidate key* and *foreign key*. **[2]**

**2.** Explain what is meant by *referential integrity*. **[2]**

**3.** State what is meant by a table being in first normal form (1NF). **[1]**

**4.** A sports club keeps every member's details and every booking in one file: MemberID, MemberName, Phone, CourtNo, BookingDate, BookingTime.
**(a)** Describe **two** limitations of this file-based approach. **[4]**
**(b)** Describe **two** features of a relational database that address these limitations. **[2]**

**5.** Explain the purpose of an *index* and of a *secondary key* in a relational database. **[2]**

**6.** A school database has the tables STUDENT and CLASS. Each student belongs to one class; each class has many students. Draw (or describe) the E-R diagram and state where the foreign key goes. **[3]**

**7.** A table is given in this form, with the primary key (OrderID, ProductID):

ORDERLINE(OrderID, ProductID, OrderDate, CustomerID, CustomerName, ProductName, Quantity)

**(a)** Explain why the table is not in 2NF. **[2]**
**(b)** Produce a set of tables in 3NF. Underline or name each primary key and identify each foreign key. **[5]**

## Section B: DBMS (8.2)

**8.** Describe **three** features of a DBMS that address the issues of a file-based approach. **[3]**

**9.** State the purpose of the *developer interface* and of the *query processor* in a DBMS. **[2]**

## Section C: DDL and DML (8.3)

**10.** Explain the difference between a data definition language (DDL) and a data manipulation language (DML), giving one SQL command for each. **[2]**

**11.** Write the SQL (DDL) to create the table CLASS(ClassID, Room, TutorName), where ClassID is a 3-character code and is the primary key, Room is up to 10 characters and TutorName up to 30 characters. **[4]**

**12.** The tables are:

STUDENT(StudentID, Name, Year, ClassID)
CLASS(ClassID, Room, TutorName)

**(a)** Write an SQL statement to display the Name of every student in Year 12, in alphabetical order of Name. **[3]**
**(b)** Write an SQL statement to display each student's Name with the TutorName of their class. **[3]**
**(c)** Write an SQL statement to display each ClassID with the number of students in that class. **[3]**

**13.** Write SQL statements to:
**(a)** add a new student with StudentID 2051, Name 'Ravi Shah', Year 12, ClassID '12B' **[2]**
**(b)** move student 2051 to class '12C' **[2]**
**(c)** remove student 1987 from the database. **[2]**

---

## Answers

**1.** A **candidate key** is an attribute (or smallest set of attributes) that could **uniquely identify every record** in a table; one candidate key is chosen as the primary key [1]. A **foreign key** is an attribute in one table that is the **primary key of another table**, used to link the two tables [1].

*Examiner insight (June 2025):* some candidates did not understand what a candidate key is, and a few gave primary keys when foreign keys were asked for. The primary key is also not always the first attribute listed in a table. *Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 11, Question 5.

**2.** Every foreign key value must **match an existing primary key value** in the linked table [1], so a record cannot refer to a record that does not exist (for example, a member cannot be deleted while bookings still refer to them) [1].

**3.** There are **no repeating groups** of attributes: every field holds a single (atomic) value and each record is unique [1].

**4. (a)** Any two, each identified [1] and explained [1]:
- **Data redundancy**: a member's name and phone are repeated for every booking, wasting storage.
- **Data inconsistency**: if a member changes phone number, some copies may not be updated, so different records disagree.
- **Data dependency / program-data dependence**: programs are written for the file's exact structure, so changing the structure means rewriting the programs.
- **Poor integrity and security**: no central control over who can read or change the data.

**(b)** Any two [1 each]: data is split into linked tables so each fact is stored once (less redundancy, no inconsistency); keys and referential integrity link records correctly; the structure is independent of the programs that use it; a DBMS controls access centrally.

**5.** An **index** is a separate structure that allows records to be found quickly by the value of a field, without searching the whole table [1]. A **secondary key** is a non-unique field that is indexed so that searches on it (for example by surname) are fast [1].

**6.** Two entities, STUDENT and CLASS [1], joined by a one-to-many relationship, with the "many" (crow's foot) end at STUDENT [1]. The foreign key ClassID goes in STUDENT [1].

**7. (a)** OrderDate, CustomerID and CustomerName depend only on OrderID, and ProductName depends only on ProductID [1]; these are **partial dependencies** on part of the composite key, so the table is not in 2NF [1].

**(b)** One mark per correct table with key [4], one for correctly identifying foreign keys [1]:
- ORDER(**OrderID**, OrderDate, CustomerID): foreign key CustomerID
- CUSTOMER(**CustomerID**, CustomerName)
- PRODUCT(**ProductID**, ProductName)
- ORDERLINE(**OrderID, ProductID**, Quantity): OrderID and ProductID are both foreign keys

Moving CustomerName to CUSTOMER removes the **transitive dependency** (CustomerName depends on CustomerID, which is not the key of ORDER), giving 3NF.

**8.** Any three [1 each]:
- **Data management**, including a **data dictionary** that stores metadata about every table, field, data type and relationship.
- **Data modelling** tools to design tables and relationships.
- A **logical schema** describing the overall structure independently of how data is physically stored.
- **Data integrity** enforced by validation rules and referential integrity.
- **Data security**, including **backup procedures** and **access rights** for individuals or groups of users.

**9.** The **developer interface** lets a developer create and manipulate database objects (tables, queries, forms, reports) without writing all the code by hand, for example with drag-and-drop tools [1]. The **query processor** takes a query, checks it, optimises it and executes it against the database, returning the results [1].

**10.** DDL is used to **create and change the structure** of a database, for example `CREATE TABLE` or `ALTER TABLE` [1]; DML is used to **query and maintain the data**, for example `SELECT`, `INSERT INTO` or `UPDATE` [1].

**11.**

```
CREATE TABLE CLASS (
  ClassID CHARACTER(3),
  Room VARCHAR(10),
  TutorName VARCHAR(30),
  PRIMARY KEY (ClassID)
);
```

`CREATE TABLE CLASS` [1]; ClassID with a fixed 3-character type [1]; Room and TutorName as `VARCHAR` with lengths [1]; `PRIMARY KEY (ClassID)` [1]. In STUDENT the link would be added with `FOREIGN KEY (ClassID) REFERENCES CLASS(ClassID)`.

**12. (a)**

```
SELECT Name
FROM STUDENT
WHERE Year = 12
ORDER BY Name;
```

`SELECT Name FROM STUDENT` [1]; `WHERE Year = 12` [1]; `ORDER BY Name` [1].

**(b)**

```
SELECT STUDENT.Name, CLASS.TutorName
FROM STUDENT
INNER JOIN CLASS ON STUDENT.ClassID = CLASS.ClassID;
```

Correct fields [1]; `INNER JOIN CLASS` [1]; correct `ON` condition matching the foreign key to the primary key [1].

**(c)**

```
SELECT ClassID, COUNT(StudentID)
FROM STUDENT
GROUP BY ClassID;
```

`SELECT ClassID` [1]; `COUNT(...)` [1]; `GROUP BY ClassID` [1].

**13. (a)** `INSERT INTO STUDENT (StudentID, Name, Year, ClassID)` [1] `VALUES (2051, 'Ravi Shah', 12, '12B');` [1]

**(b)** `UPDATE STUDENT SET ClassID = '12C'` [1] `WHERE StudentID = 2051;` [1]

**(c)** `DELETE FROM STUDENT` [1] `WHERE StudentID = 1987;` [1]

---

## Where marks are usually lost

- Giving the primary key when the question asks for a foreign key.
- Assuming the primary key is the first field in a table.
- Leaving out `ORDER BY`, or putting the condition in the wrong clause.
- Writing a join with no `ON` condition, which pairs every row with every row.
- Forgetting `GROUP BY` when using `COUNT`, `SUM` or `AVG` with another field.
- Leaving out `WHERE` in `UPDATE` or `DELETE FROM`, which changes or removes every row.
- In normalisation, splitting tables without stating the dependency that breaks the normal form.

## Frequently asked questions

**How many tables can a 9618 SQL query use?**
At most two. Queries may use SELECT ... FROM, WHERE, ORDER BY, GROUP BY, INNER JOIN, SUM, COUNT and AVG; data maintenance uses INSERT INTO, DELETE FROM and UPDATE.

**Which SQL data types are named in the syllabus?**
CHARACTER, VARCHAR(n), BOOLEAN, INTEGER, REAL, DATE and TIME, used in CREATE TABLE.

**Do I need to write DDL as well as DML?**
Yes. You must understand and write simple DDL: CREATE DATABASE, CREATE TABLE, ALTER TABLE, and adding primary and foreign keys.

**What is a data dictionary?**
A store of metadata maintained by the DBMS: the names, data types and lengths of fields, the tables, keys and relationships, and validation rules.
