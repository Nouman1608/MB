---
title: "AQA A-Level Computer Science: Fundamentals of Databases — Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers on ER diagrams, keys, normalisation to 3NF, SQL and concurrency control for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) | [Fundamentals of databases revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-databases-revision-notes/)

These questions cover section 4.10 of the AQA A-Level Computer Science (7517) specification: entity
relationship modelling (4.10.1), relational databases (4.10.2), normalisation (4.10.3), SQL (4.10.4) and client
server databases (4.10.5). Primary key attributes are shown in **bold** here; underline them in the exam.

A school library database uses these relations:

```
Member (MemberID, FirstName, Surname, Email)
Author (AuthorID, AuthorName)
Book   (ISBN, Title, AuthorID)
Loan   (MemberID, ISBN, LoanDate, ReturnDate)
```

Member's key is **MemberID**, Author's is **AuthorID**, Book's is **ISBN**, and Loan's is the composite key
**MemberID, ISBN, LoanDate**.

---

## Section A: relational databases and ER modelling

**1.** Using the library database, give an example of: (a) an attribute (b) a foreign key (c) a composite
primary key. **[3]**

**2.** Explain why LoanDate is included in the primary key of Loan. **[2]**

**3.** **(a)** State the relationship between Member and Book, and explain how the database implements it. **[3]**
**(b)** Draw an entity relationship diagram for Member, Author, Book and Loan. **[3]**

## Section B: normalisation

**4.** A college stores results in a single relation:

```
StudentResult (StudentID, CourseID, StudentName, TutorID, TutorName, CourseTitle, Grade)
```

The primary key is the composite key StudentID, CourseID. Each student has one tutor.

**(a)** Explain why this relation is not in second normal form. **[2]**
**(b)** Normalise the relation to third normal form, giving each resulting relation in the form
`Entity (Attribute1, Attribute2, ...)` and identifying the keys. **[5]**
**(c)** Give two reasons why databases are normalised. **[2]**

## Section C: SQL

**5.** Write an SQL statement to list the Title of every book and the LoanDate on which it was borrowed by members
with the surname Khan, most recent loan first. **[4]**

**6.** Write SQL statements to:
**(a)** add a new member: MemberID 2045, Priya Shah, priya.shah@example.org **[2]**
**(b)** record that the loan by member 2045 of ISBN 9780141439518 on 2026-10-01 was returned on 2026-10-15 **[2]**
**(c)** remove all loans that were returned before 2025-01-01. **[2]**

**7.** Write an SQL statement to define the Loan table, including its primary key and foreign keys. **[4]**

**8.** Write an SQL statement to list each author's name with the number of books by that author in the library.
**[3]**

## Section D: client server databases

**9.** Two librarians edit the same member's record at the same time from different computers.
**(a)** Explain how an update could be lost. **[3]**
**(b)** Explain how record locking prevents this, and describe a problem record locking can cause. **[3]**
**(c)** Describe how timestamp ordering controls concurrent access. **[3]**

---

## Answers

**1.** (a) Any attribute, e.g. Surname or Title [1] (b) AuthorID in Book, or MemberID or ISBN in Loan [1]
(c) MemberID, ISBN, LoanDate in Loan [1].

**2.** A member may borrow the same book more than once [1], so MemberID and ISBN alone would not uniquely
identify each loan; adding LoanDate makes the key unique [1].

**3. (a)** **Many-to-many**: a member can borrow many books and a book can be borrowed by many members [1]. It is
implemented with the **link entity** Loan [1], which holds MemberID and ISBN as foreign keys, giving two
one-to-many relationships [1].
**(b)**
```
Member ----< Loan >---- Book >---- Author
```
Member one-to-many Loan [1]; Book one-to-many Loan [1]; Author one-to-many Book (crow's foot at Book) [1].

**4. (a)** There are **partial dependencies** [1]: StudentName and TutorID depend only on StudentID, and
CourseTitle depends only on CourseID, not on the whole composite key [1].
**(b)**
```
Student (StudentID, StudentName, TutorID)      key: StudentID; TutorID is a foreign key
Tutor   (TutorID, TutorName)                   key: TutorID
Course  (CourseID, CourseTitle)                key: CourseID
Result  (StudentID, CourseID, Grade)           key: StudentID + CourseID (both foreign keys)
```
Course relation [1]; Result relation with composite key [1]; Student relation separated in 2NF [1]; TutorName
moved to Tutor because it depends on the non-key attribute TutorID (3NF) [1]; keys identified correctly [1].
**(c)** Any two: removes data redundancy, so less storage is used [1]; prevents inconsistent data when one copy is
updated and another is not [1]; avoids insertion, deletion and update problems [1].

**5.**
```sql
SELECT Book.Title, Loan.LoanDate
FROM Member, Loan, Book
WHERE Member.MemberID = Loan.MemberID
  AND Loan.ISBN = Book.ISBN
  AND Member.Surname = 'Khan'
ORDER BY Loan.LoanDate DESC;
```
Correct `SELECT` columns [1]; three tables in `FROM` [1]; both join conditions [1]; surname condition and
`ORDER BY ... DESC` [1].

**6. (a)**
```sql
INSERT INTO Member (MemberID, FirstName, Surname, Email)
VALUES (2045, 'Priya', 'Shah', 'priya.shah@example.org');
```
`INSERT INTO` with table [1]; values in the correct order, text in quotes [1].

**(b)**
```sql
UPDATE Loan
SET ReturnDate = '2026-10-15'
WHERE MemberID = 2045 AND ISBN = '9780141439518' AND LoanDate = '2026-10-01';
```
`UPDATE ... SET` [1]; `WHERE` using the full composite key [1].

**(c)**
```sql
DELETE FROM Loan WHERE ReturnDate < '2025-01-01';
```
`DELETE FROM Loan` [1]; correct condition [1].

**7.**
```sql
CREATE TABLE Loan (
  MemberID   INT,
  ISBN       VARCHAR(13),
  LoanDate   DATE,
  ReturnDate DATE,
  PRIMARY KEY (MemberID, ISBN, LoanDate),
  FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
  FOREIGN KEY (ISBN) REFERENCES Book(ISBN)
);
```
All four fields with suitable data types [1]; composite primary key [1]; each foreign key [1 + 1].

**8.**
```sql
SELECT Author.AuthorName, COUNT(Book.ISBN)
FROM Author, Book
WHERE Author.AuthorID = Book.AuthorID
GROUP BY Author.AuthorName;
```
Join condition [1]; `COUNT` [1]; `GROUP BY` [1]. (Grouping by `Author.AuthorID, Author.AuthorName` is also
correct and handles two authors with the same name.)

**9. (a)** Both librarians read the record into their own computers [1]. Each changes a different field and saves
[1]. The second save writes back the whole record as that librarian read it, overwriting the first librarian's
change, which is lost [1].
**(b)** When the first librarian opens the record it is **locked** [1], so the second cannot edit it until the
first has saved and the lock is released, and then reads the updated version [1]. Problem: **deadlock** -- two
clients each hold a lock on a record the other needs, so both wait forever [1].
**(c)** Each transaction is given a timestamp when it starts [1]. Each record stores the timestamps of the last
transaction to read it and to write it [1]. If a transaction tries to change a record that a later transaction has
already read or written, the conflicting transaction is rejected and restarted, so changes are applied in
timestamp order [1].

---

## Where marks are usually lost

- Joining tables with only one of the needed conditions, so rows are paired incorrectly.
- Using a partial key in an `UPDATE`'s `WHERE` clause, so several loans are changed.
- Normalising correctly but not stating the keys, or not showing which attributes are foreign keys.
- Describing a lost update without saying **why** the second save overwrites the first.

## Frequently asked questions

**Can I use JOIN instead of listing tables in FROM?**
Yes. `FROM Member JOIN Loan ON Member.MemberID = Loan.MemberID` is equally correct, provided every join condition
is present.

**How exact does my SQL have to be?**
Concentrate on what changes the result: the correct keywords, tables, fields and conditions. A missing join or
`WHERE` condition returns or changes the wrong rows, so check every condition before you finish.
