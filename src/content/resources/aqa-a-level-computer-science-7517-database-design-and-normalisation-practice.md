---
title: "AQA A-Level Computer Science (7517): Database Design and Normalisation Techniques -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.10.3 questions with answers: normal forms, anomalies and normalising data to third normal form, step by step."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Normalisation study guide](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation/) | [Normalisation revision notes](/resources/aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes/)

Show the primary key of each table by writing it in bold (in an exam you would underline it).

---

## Section A

**1.** State what is meant by a repeating group. **[1]**

**2.** State the condition that a relation must meet to be in second normal form, given that it is in first normal form. **[1]**

**3.** State the extra condition a relation in second normal form must meet to be in third normal form. **[1]**

**4.** Give **one** reason why a database is normalised. **[1]**

**5.** State what is meant by a transitive dependency. **[1]**

## Section B

**6.** A table `Delivery (DeliveryID, DeliveryDate, CustomerID, CustomerName, CustomerTown)` has the single-attribute primary key DeliveryID, and each CustomerID has one name and one town.

**(a)** Explain why the table is already in second normal form. **[2]**
**(b)** Explain why it is not in third normal form. **[2]**
**(c)** Write the tables that result from normalising it to third normal form. **[3]**

**7.** Explain, using an example, the difference between an update anomaly and a deletion anomaly. **[4]**

**8.** A school records exam entries in a table that is not normalised. Each student appears once with all of their exam entries in a single row.

| StudentID | StudentName | FormGroup | FormTutor | Exams entered |
|---|---|---|---|---|
| 101 | Kim Lee | 10A | Mr Ward | E1 Maths 2026-06-02 mark 71; E2 Physics 2026-06-05 mark 64 |
| 102 | Sam Ortiz | 10B | Ms Dube | E1 Maths 2026-06-02 mark 58 |
| 103 | Ana Petrov | 10A | Mr Ward | E2 Physics 2026-06-05 mark 80 |

**(a)** Identify the repeating group. **[1]**
**(b)** Rewrite the data in first normal form, giving the attributes and a suitable primary key. **[3]**
**(c)** State the functional dependencies that exist in your first normal form table. **[3]**
**(d)** Show the tables in second normal form, with primary keys. **[3]**
**(e)** Show the tables in third normal form, with primary keys and foreign keys. **[3]**

**9.** Explain **two** advantages and **one** disadvantage of storing the school data in the third normal form tables from Question 8 rather than in a single table. **[3]**

**10.** A table `Booking (BookingID, GuestName, GuestEmail, RoomNo, RoomType, RoomPrice)` has the primary key BookingID. Each room has one type and one price, and a room type determines the price.

Normalise this table to third normal form, explaining each dependency that you remove. **[6]**

---

## Answers

**1.** A group of attributes (or values) that occurs more than once within a single record, for example Phone1, Phone2 and Phone3, or a list of items in one cell [1].

**2.** There are no partial dependencies: every non-key attribute depends on the whole of the primary key [1].

**3.** There are no transitive dependencies: no non-key attribute depends on another non-key attribute [1].

**4.** Any one from: to reduce redundant (repeated) data; to avoid update, insertion and deletion anomalies; to keep data consistent; to save storage [1].

**5.** A non-key attribute that depends on another non-key attribute, which in turn depends on the primary key [1].

**6. (a)** The primary key is a single attribute [1], so no attribute can depend on only part of the key, and there are no partial dependencies [1].
**(b)** CustomerName and CustomerTown depend on CustomerID [1], which is a non-key attribute, so there is a transitive dependency (DeliveryID → CustomerID → CustomerName, CustomerTown) [1].
**(c)** `Delivery (`**`DeliveryID`**`, DeliveryDate, CustomerID)` [1]; `Customer (`**`CustomerID`**`, CustomerName, CustomerTown)` [1]; CustomerID remains in Delivery as a foreign key [1].

**7.** An update anomaly: a fact that is stored in many rows (for example a customer's address) has to be changed in all of them [1], and if one row is missed the data becomes inconsistent [1]. A deletion anomaly: deleting a row removes other facts that were stored only in that row [1], for example deleting a customer's only order also deletes the customer's name and address [1].

**8. (a)** The exams entered (exam code, title, date and mark) [1].
**(b)** One row for each student and exam, with every cell holding a single value [1]: attributes StudentID, StudentName, FormGroup, FormTutor, ExamCode, ExamTitle, ExamDate, Mark [1]; primary key (StudentID, ExamCode) [1].
**(c)** StudentID → StudentName, FormGroup [1]; ExamCode → ExamTitle, ExamDate [1]; (StudentID, ExamCode) → Mark [1]. (FormGroup → FormTutor is also valid and is used in part (e).)
**(d)** `Student (`**`StudentID`**`, StudentName, FormGroup, FormTutor)` [1]; `Exam (`**`ExamCode`**`, ExamTitle, ExamDate)` [1]; `Entry (`**`StudentID, ExamCode`**`, Mark)` [1].
**(e)** FormTutor depends on FormGroup, which is a non-key attribute, so it is moved [1]: `Form (`**`FormGroup`**`, FormTutor)` [1] and `Student (`**`StudentID`**`, StudentName, FormGroup)` with FormGroup as a foreign key; Exam and Entry are unchanged, with StudentID and ExamCode as foreign keys in Entry [1].

**9.** Any two advantages from: less repeated data (the tutor's name and exam titles are stored once) [1]; if a tutor changes, only one row needs to be updated, so the data stays consistent [1]; a new exam or form group can be added before any student is entered (no insertion anomaly) [1]. Disadvantage: queries need to join several tables, which is more complex and can be slower [1]. (Maximum 3 marks.)

**10.** The table has a single-attribute key, so it is in 2NF [1]. RoomNo determines RoomType and RoomPrice, but RoomNo is a non-key attribute, so there is a transitive dependency [1]; moving them gives `Room (`**`RoomNo`**`, RoomType, RoomPrice)` [1]. RoomType determines RoomPrice, and RoomType is not the key of Room, so a second transitive dependency remains [1]; moving it gives `RoomType (`**`RoomType`**`, RoomPrice)` and `Room (`**`RoomNo`**`, RoomType)` [1]; the final tables are `Booking (`**`BookingID`**`, GuestName, GuestEmail, RoomNo)`, `Room` and `RoomType`, with foreign keys RoomNo and RoomType [1].

---

## Where marks are usually lost

- Not removing the repeating group when going to first normal form.
- Looking for partial dependencies in a table with a single-attribute key.
- Moving attributes to a new table without leaving the key behind as a foreign key.
- Leaving primary keys unmarked in the final tables.
- Giving "faster" as a reason for normalising.
