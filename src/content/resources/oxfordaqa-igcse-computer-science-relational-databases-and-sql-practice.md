---
title: "OxfordAQA IGCSE Computer Science: Relational Databases and SQL — Practice Questions (9210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
description: "Original practice questions with worked answers on database terms, keys, data types, table design and SQL for OxfordAQA International GCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Relational databases and SQL study guide](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-study-guide/) | [Relational databases and SQL revision notes](/resources/oxfordaqa-igcse-computer-science-relational-databases-and-sql-revision-notes/)

These questions cover section 3.7 of the OxfordAQA International GCSE Computer Science (9210) specification,
which is assessed on Paper 2. Primary keys are shown in **bold**; underline them in the exam.

A vet's surgery stores data in two tables:

```
Owner (OwnerID, FirstName, Surname, Phone)
Pet   (PetID, PetName, Species, DateOfBirth, OwnerID)
```

The primary keys are **OwnerID** and **PetID**. Some records:

| OwnerID | FirstName | Surname | Phone |
|---|---|---|---|
| 1 | Amira | Haddad | 07700900111 |
| 2 | Tom | Clarke | 07700900222 |
| 3 | Mei | Chen | 07700900333 |

| PetID | PetName | Species | DateOfBirth | OwnerID |
|---|---|---|---|---|
| 101 | Biscuit | Dog | 2021-04-12 | 1 |
| 102 | Luna | Cat | 2019-09-30 | 3 |
| 103 | Pepper | Rabbit | 2023-01-05 | 1 |
| 104 | Max | Dog | 2018-06-21 | 2 |

---

## Section A: concepts

**1.** Explain the concept of a **relational database**. **[2]**

**2.** Using the vet's tables, give an example of: (a) a record (b) a field (c) a foreign key. **[3]**

**3.** Explain why OwnerID, not Surname, is used as the primary key of Owner. **[2]**

**4.** The surgery used to keep everything in one table, with the owner's name and phone number typed into every pet's
record. Explain the problems this caused, using the terms **data redundancy** and **data inconsistency**. **[4]**

## Section B: design

**5.** State a suitable data type (and length, where appropriate) for: (a) PetName (b) DateOfBirth (c) Phone
(d) a field Insured that records whether the pet is insured. **[4]**

**6.** Explain why Phone should not be stored as an integer. **[2]**

**7.** The surgery also wants to record appointments: each appointment is for one pet, on a date and time, with a
reason. Design a third table, identifying its primary key and any foreign key. **[3]**

## Section C: SQL

**8.** State the result of this query:
```sql
SELECT PetName, Species
FROM Pet
WHERE OwnerID = 1;
```
**[2]**

**9.** Write an SQL query to list the names of all dogs born before 2020-01-01. **[3]**

**10.** Write an SQL query to show the PetName and the owner's Surname for every cat. **[4]**

**11.** Write SQL to:
**(a)** add a new owner: OwnerID 4, Sam Patel, phone 07700900444 **[2]**
**(b)** change Tom Clarke's phone number to 07700900999 **[2]**
**(c)** delete the record for the pet with PetID 103. **[2]**

**12.** A student writes `DELETE FROM Pet;` intending to delete Max. Explain what this statement would actually do and
correct it. **[2]**

---

## Answers

**1.** Data is stored in separate tables, each about one kind of thing [1], and the tables are linked using keys --
a foreign key in one table matches the primary key of another [1].

**2.** (a) Any one complete row, e.g. 102, Luna, Cat, 2019-09-30, 3 [1] (b) Any column, e.g. Species [1]
(c) OwnerID in the Pet table [1].

**3.** A primary key must be unique for every record [1]; two owners could have the same surname, but each OwnerID is
different [1].

**4.** The same owner details were stored many times -- **data redundancy** -- wasting storage [1] and extra typing [1].
If an owner changed their phone number and only some of their pets' records were updated, the records contradicted
each other -- **data inconsistency** [1]. Storing owners once in their own table, linked by OwnerID, removes both
problems [1].

**5.** (a) Text/string, e.g. length 20 [1] (b) Date [1] (c) Text/string, e.g. length 15 [1] (d) Boolean [1].

**6.** A phone number can start with 0 (or +), which would be lost if stored as a number [1]; no arithmetic is
carried out on it, so it should be text [1].

**7.** e.g. `Appointment (AppointmentID, PetID, AppointmentDate, AppointmentTime, Reason)` [1]; primary key
**AppointmentID** [1]; **PetID** is a foreign key linking to the Pet table [1].

**8.** Biscuit, Dog [1]; Pepper, Rabbit [1].

**9.**
```sql
SELECT PetName
FROM Pet
WHERE Species = 'Dog' AND DateOfBirth < '2020-01-01';
```
`SELECT PetName FROM Pet` [1]; species condition [1]; date condition joined with AND [1]. (Result: Max.)

**10.**
```sql
SELECT Pet.PetName, Owner.Surname
FROM Pet, Owner
WHERE Pet.OwnerID = Owner.OwnerID
AND Pet.Species = 'Cat';
```
Correct fields [1]; both tables in `FROM` [1]; matching-key condition [1]; species condition [1]. (Result: Luna, Chen.)

**11. (a)**
```sql
INSERT INTO Owner
VALUES (4, 'Sam', 'Patel', '07700900444');
```
`INSERT INTO Owner` [1]; all four values in the correct order, text in quotes [1].

**(b)**
```sql
UPDATE Owner
SET Phone = '07700900999'
WHERE OwnerID = 2;
```
`UPDATE ... SET` [1]; correct `WHERE` (OwnerID = 2, or FirstName and Surname both given) [1].

**(c)**
```sql
DELETE FROM Pet
WHERE PetID = 103;
```
`DELETE FROM Pet` [1]; `WHERE PetID = 103` [1].

**12.** With no `WHERE` clause it would delete **every** record in the Pet table [1]. Correct version:
`DELETE FROM Pet WHERE PetID = 104;` [1].

---

## Where marks are usually lost

- Leaving out the key-matching condition in a two-table query.
- Using a field name that is not in the table, or misspelling a table name.
- Giving a data type of "number" for a phone number, or "text" for a date.
- Designing a new table without a foreign key to link it to the existing tables.

## Frequently asked questions

**How many tables will exam questions use?**
The 9210 specification says design scenarios will use no more than three tables, and any one query will extract data
from no more than two tables.

**Do I have to list the field names in INSERT INTO?**
No. The specification only requires the form of INSERT INTO that gives all the values in the record, in the same
order as the table's fields.
