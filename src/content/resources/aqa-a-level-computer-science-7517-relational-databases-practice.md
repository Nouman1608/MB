---
title: "AQA A-Level Computer Science (7517): Relational Databases -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "relational-databases-7517"
description: "Original AQA 7517 section 4.10.2 questions with answers: defining attributes and keys, spotting primary, composite and foreign keys, and referential integrity."
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
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Relational databases study guide](/resources/aqa-a-level-computer-science-7517-relational-databases/) | [Relational databases revision notes](/resources/aqa-a-level-computer-science-7517-relational-databases-revision-notes/)

---

## Section A

**1.** Define the term attribute. **[1]**

**2.** Define the term primary key. **[2]**

**3.** Define the term foreign key. **[1]**

**4.** Define the term composite primary key. **[1]**

**5.** State what is meant by a relational database. **[2]**

## Section B

**6.** A database has these two tables.

**Pet**

| PetID | Name | Species | OwnerID |
|---|---|---|---|
| P1 | Biscuit | Dog | O3 |
| P2 | Mochi | Cat | O1 |
| P3 | Rex | Dog | O3 |
| P4 | Pip | Rabbit | O2 |

**Owner**

| OwnerID | Name | Phone |
|---|---|---|
| O1 | Aliyah Khan | 07700 900101 |
| O2 | Ben Carter | 07700 900102 |
| O3 | Chloe Mensah | 07700 900103 |

**(a)** State the primary key of each table. **[2]**
**(b)** Identify the foreign key and the table in which it appears. **[2]**
**(c)** State the name of the owner of Rex, explaining how you found it using the keys. **[2]**
**(d)** Explain why the value O3 can appear twice in Pet but not in Owner. **[2]**

**7.** A table records the sessions that students attend.

**Attendance**

| StudentID | SessionID | Present |
|---|---|---|
| S1 | A4 | Yes |
| S1 | A5 | No |
| S2 | A4 | Yes |
| S3 | A5 | Yes |

**(a)** Explain why neither StudentID nor SessionID is suitable as the primary key alone. **[2]**
**(b)** State a suitable primary key for the table. **[1]**
**(c)** State what name is given to a key of this type. **[1]**
**(d)** Explain why StudentID and SessionID are also foreign keys. **[2]**

**8.** A designer proposes `Surname` as the primary key of a Customer table. Give **two** reasons why this is not suitable. **[2]**

**9.** Explain what is meant by referential integrity, using the tables in Question 6 to give an example of an action that referential integrity would prevent. **[3]**

**10.** Explain **three** advantages of storing the data for a school in several linked tables rather than one large table. **[3]**

**11.** A shop's database has a table `OrderLine (OrderNo, ProductCode, Quantity)`. An order may contain several products and a product may appear in several orders.

**(a)** State the primary key of OrderLine, and explain your choice. **[3]**
**(b)** State which attributes are foreign keys and which tables they refer to. **[2]**

**12.** A database holds a table `Teacher (TeacherID, Name, DepartmentName, DepartmentHead)` in which department names and heads are repeated for every teacher.

Explain the problems this causes, and suggest how the data could be organised in two tables using a foreign key. **[5]**

---

## Answers

**1.** A named property of an entity, held as a column in a table [1].

**2.** An attribute (or field) in a table whose value uniquely identifies each record [1]; it must be unique and never empty (null) [1].

**3.** An attribute in one table that is the primary key of another table, used to link the two [1].

**4.** A primary key made up of two or more attributes which together identify each record uniquely [1].

**5.** Data is stored in tables, each holding data about one kind of entity [1]; tables are linked using keys (primary and foreign keys) so that related data can be combined without repeating it [1].

**6. (a)** Pet: PetID [1]; Owner: OwnerID [1].
**(b)** OwnerID [1] in the Pet table (it is the primary key of Owner) [1].
**(c)** Chloe Mensah [1]; Rex has OwnerID O3 in Pet, and O3 in the Owner table is Chloe Mensah [1].
**(d)** In Pet, OwnerID is a foreign key, and an owner can have several pets, so O3 can repeat [1]; in Owner, OwnerID is the primary key and must be unique, so each value can appear only once [1].

**7. (a)** StudentID repeats (S1 appears twice) [1]; SessionID repeats (A4 appears twice) [1].
**(b)** (StudentID, SessionID) [1].
**(c)** A composite primary key [1].
**(d)** Each is the primary key of another table (Student, Session) [1]; each is used in Attendance to link a row to a record in that table [1].

**8.** Any two from: different customers can have the same surname, so it would not be unique [1]; a surname can change (for example after marriage), and other tables referring to it would have to change [1]; a surname might be missing or spelt differently [1].

**9.** Referential integrity means every foreign key value must match an existing primary key value in the table it refers to [1]. For example, a new Pet record with OwnerID O7 would be rejected because no owner O7 exists in Owner [1]; deleting Owner O3 while Pets P1 and P3 still refer to it would also be rejected [1].

**10.** Any three, each with an explanation [1 each]: less duplicated data, because each fact is stored once, which saves storage; easier to keep data consistent, because a change is made in one place; fewer errors from conflicting copies; queries can combine tables flexibly using keys; access can be restricted to the tables a user needs.

**11. (a)** (OrderNo, ProductCode) [1]; neither attribute alone is unique, because an order has several products and a product appears in several orders [1]; together they identify one product line on one order [1].
**(b)** OrderNo, which refers to the Order table [1]; ProductCode, which refers to the Product table [1].

**12.** Problems: the same department name and head are stored many times, wasting storage [1]; if a head changes, every teacher record in that department must be updated, and missing one gives inconsistent data [1]; a department cannot be recorded until a teacher exists in it, and deleting the last teacher loses the department [1]. Improvement: a Department table `Department (`**`DepartmentName`**`, DepartmentHead)` [1] and `Teacher (`**`TeacherID`**`, Name, DepartmentName)` in which DepartmentName is a foreign key [1].

---

## Where marks are usually lost

- Defining a primary key without saying that it must be unique.
- Saying a foreign key is unique.
- Describing a composite key as two separate keys.
- Naming the wrong table for the foreign key.
- Using general statements instead of the values in the question's tables.
