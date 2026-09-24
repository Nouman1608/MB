---
title: "A Level Computer Science: Databases — Practice Questions (Cambridge 9618)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "AS"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
description: "Original exam-style practice questions with full worked answers on primary, candidate and foreign keys, referential integrity, normalisation and SQL for Cambridge AS & A Level Computer Science (9618) Topic 8."
author: "marlbridge-academic-team"
publishedDate: 2026-09-24
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

---

## Questions

**1.** Define the terms *candidate key* and *foreign key*. **[2]**

**2.** Explain what is meant by *referential integrity*. **[2]**

**3.** State what is meant by a table being in first normal form (1NF). **[1]**

**4.** A table STUDENT has the fields StudentID, Name, Year and Tutor. Write an SQL statement to display the Name of every student in Year 12, in alphabetical order of Name. **[3]**

**5.** Explain the difference between a data definition language (DDL) and a data manipulation language (DML), giving one SQL command for each. **[2]**

## Answers

**1.** A **candidate key** is an attribute (or smallest set of attributes) that could **uniquely identify every record** in a table; one candidate key is chosen as the primary key [1]. A **foreign key** is an attribute in one table that is the **primary key of another table**, used to link the two tables [1].

*Examiner insight (June 2025):* some candidates did not understand what a candidate key is, and a few gave primary keys when foreign keys were asked for. The primary key is also not always the first attribute listed in a table. *Try the real question next:* Cambridge International AS & A Level Computer Science 9618, June 2025, Paper 11, Question 5.

**2.** Every foreign key value must **match an existing primary key value** in the linked table [1], so a record cannot refer to a record that does not exist (for example, it cannot be deleted while records still refer to it) [1].

**3.** There are **no repeating groups** of attributes: every field holds a single (atomic) value and each record is unique [1].

**4.** `SELECT Name` [1] `FROM STUDENT WHERE Year = 12` [1] `ORDER BY Name;` [1]

**5.** DDL is used to **create and change the structure** of a database, for example `CREATE TABLE` [1]; DML is used to **add, change, delete or retrieve the data**, for example `SELECT`, `INSERT` or `UPDATE` [1].

---

## Where marks are usually lost

- Giving the primary key when the question asks for a foreign key.
- Assuming the primary key is the first field in a table.
- Leaving out `ORDER BY` or putting the condition in the wrong clause.
