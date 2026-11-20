---
title: "OxfordAQA IGCSE Computer Science (9210): Relational databases -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 Relational Databases Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.01
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "relational-databases-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on tables, records, fields, keys, data types, redundancy and inconsistency."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Relational databases study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases/) | [Relational databases revision notes](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases-revision-notes/)

These questions cover section 3.7.1 Relational databases of the OxfordAQA International GCSE Computer Science (9210)
specification.

A shop uses a database with two tables.

**Customer**

| CustomerID | Name | Town |
|---|---|---|
| 11 | Ruth Adams | Bolton |
| 12 | Sam Patel | Derby |
| 13 | Lee Chen | Bolton |

**Purchase**

| PurchaseID | CustomerID | Item | Quantity | Delivered |
|---|---|---|---|---|
| 501 | 12 | Lamp | 1 | True |
| 502 | 11 | Desk | 2 | False |
| 503 | 12 | Chair | 4 | True |
| 504 | 13 | Lamp | 2 | False |

---

## Section A

**1.** State what is meant by a database. **[1]**

**2.** State what is meant by a relational database. **[2]**

**3.** Use the Purchase table to give an example of each of the following.

**(a)** a record **[1]**

**(b)** a field **[1]**

**4.** State what is meant by a primary key. **[2]**

**5.** State what is meant by a foreign key. **[2]**

## Section B

**6.** Identify the primary key of each table and the foreign key in the Purchase table. **[3]**

**7.** State the most suitable data type for each field in the Purchase table: Quantity, Item and Delivered. **[3]**

**8.** A designer suggests that the Name field of the Customer table should be the primary key. Explain why this is a poor
choice. **[2]**

**9.** The shop wants to store a customer's telephone number. Choose a suitable data type and explain your choice. **[2]**

**10.** Another designer suggests using one table instead, with the fields PurchaseID, Name, Town, Item, Quantity and
Delivered.

**(a)** Explain how this design would lead to data redundancy. **[2]**

**(b)** Explain how it could lead to data inconsistency. **[2]**

**(c)** Explain how the two table design avoids these problems. **[3]**

**11.** Lee Chen moves from Bolton to Derby. State how many places in each design would need to be changed, and
explain the benefit of the relational design. **[3]**

**12.** A new Purchase record is entered with the CustomerID 19, but there is no customer with the CustomerID 19 in
the Customer table. Explain why this is a problem. **[2]**

**13.** State two advantages, other than reducing redundancy and inconsistency, of storing data in a database
instead of in separate paper lists. **[2]**

---

## Answers

**1.** An organised collection of data that is stored so that it can be searched, updated and shared [1].

**2.** A database in which the data is stored in several tables [1] that are linked together by key fields [1].

**3.** **(a)** Any one whole row, for example 503, 12, Chair, 4, True [1]. **(b)** Any one column name, for example Item
[1].

**4.** A field [1] whose value uniquely identifies each record in the table [1].

**5.** A field in one table [1] that is the primary key of another table, and so links the two tables [1].

**6.** Customer: CustomerID [1]; Purchase: PurchaseID [1]; foreign key: CustomerID in Purchase [1].

**7.** Quantity: integer [1]; Item: text (string) [1]; Delivered: Boolean [1].

**8.** Two customers could have the same name [1], so the field might not uniquely identify each record, which is
required for a primary key [1].

**9.** Text (string) [1]; a telephone number is not used in calculations and may start with a zero, which an integer would
remove [1].

**10.** **(a)** The customer's name and town would be repeated in every purchase that the customer makes [1]; for example
Sam Patel and Derby would appear in both PurchaseID 501 and 503 [1].
**(b)** The same customer could be entered with different spellings or different towns in different rows [1], so the
data would disagree [1].
**(c)** The customer's details are stored once in the Customer table [1]; each purchase holds only the CustomerID [1], so
there is no repeated data and the details cannot differ between records [1].

**11.** In the single table design, every row for Lee Chen would need to be changed (one for each purchase, so one place
here but potentially many) [1]; in the relational design the Town is changed in one place only, in the Customer table [1];
this means that no purchase can be left showing the old town, so the data stays consistent [1].

**12.** The foreign key value does not match any primary key in the Customer table [1], so the purchase refers to a customer
who is not recorded, and the link between the tables is broken [1].

**13.** Any two from: data can be searched and sorted quickly [1]; many users can use the same up-to-date data at once [1];
data is stored in a structured way so it is easier to keep accurate [1]; it takes up less space than separate lists [1].

---

## Where marks are usually lost

- Describing a foreign key without saying that it is the primary key of another table.
- Mixing up redundancy and inconsistency in Question 10.
- Choosing a name as a primary key.
- Writing that a field is a row, or a record is a column.
- Choosing integer for a telephone number.
