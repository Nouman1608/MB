---
title: "AQA A-Level Computer Science (7517): Structured Query Language (SQL) -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "structured-query-language-sql-7517"
description: "Original AQA 7517 section 4.10.4 questions with answers: writing SQL to retrieve, insert, update and delete data from several tables and to define a table."
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

Related: [SQL study guide](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql/) | [SQL revision notes](/resources/aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes/)

A school library database has these tables. Primary keys are MemberID, ISBN and LoanID. Loan.MemberID and Loan.ISBN are foreign keys. A book that has not been returned has no value (NULL) in DateBack.

**Member**

| MemberID | MemberName | Year |
|---|---|---|
| 1 | Aisha Noor | 12 |
| 2 | Ben Hart | 13 |
| 3 | Chen Wei | 12 |
| 4 | Dina Kos | 11 |

**Book**

| ISBN | Title | Genre | CopiesOwned |
|---|---|---|---|
| B1 | Deep Space | Science fiction | 3 |
| B2 | River Atlas | Geography | 2 |
| B3 | Code Breakers | History | 1 |
| B4 | Star Maps | Science fiction | 2 |

**Loan**

| LoanID | MemberID | ISBN | DateOut | DateBack |
|---|---|---|---|---|
| 1 | 1 | B1 | 2026-09-01 | 2026-09-08 |
| 2 | 1 | B3 | 2026-09-02 | NULL |
| 3 | 2 | B1 | 2026-09-03 | 2026-09-10 |
| 4 | 3 | B4 | 2026-09-04 | NULL |
| 5 | 2 | B2 | 2026-09-05 | 2026-09-12 |
| 6 | 1 | B4 | 2026-09-15 | NULL |

Each question below is separate and refers to the data as shown above.

---

## Section A

**1.** State the purpose of the WHERE clause in a SELECT statement. **[1]**

**2.** State the difference between WHERE and HAVING. **[2]**

**3.** State what the following statement does: `DELETE FROM Loan`. **[2]**

**4.** State the SQL keyword used to sort results into descending order. **[1]**

## Section B

**5.** Write an SQL statement to display the titles of all Science fiction books in alphabetical order. **[3]**

**6.** Write an SQL statement to display the names of all members in Year 12. **[2]**

**7.** Write an SQL statement to find how many books have not yet been returned, and state the result for the data above. **[3]**

**8.** Write an SQL statement to display the name of each member and the title of each book that is currently on loan (not yet returned), in order of member name, then title. **[5]**

**9.** Write an SQL statement to display each member's name and the number of loans they have made, only for members who have made at least two loans. **[5]**

**10.** Write an SQL statement to display each genre and the total number of copies owned for that genre. **[3]**

**11.** Write an SQL statement to add a new member with MemberID 5, name Eli Park and Year 11. **[2]**

**12.** Write an SQL statement to increase CopiesOwned by 1 for every Science fiction book. **[3]**

**13.** Write an SQL statement to record that loan 2 was returned on 2026-09-20. **[2]**

**14.** Write an SQL statement to delete all loans that were returned. **[2]**

**15.** Write an SQL statement to create the Loan table, with LoanID as the primary key, suitable data types, MemberID and ISBN as foreign keys, and DateBack allowed to be empty. **[6]**

**16.** The following statement was written to show members with at least two loans. Identify **three** errors and give the corrected statement.

```
SELECT MemberName, COUNT(*)
FROM Member INNER JOIN Loan
WHERE COUNT(*) > 1
GROUP BY MemberName
```
**[4]**

**17.** A developer runs `UPDATE Book SET CopiesOwned = 0` and notices that every book now shows no copies. Explain what went wrong and how to prevent it. **[2]**

---

## Answers

**1.** It selects only the rows that satisfy a condition [1].

**2.** WHERE filters individual rows before any grouping [1]; HAVING filters groups, after GROUP BY, so it is used with aggregate conditions [1].

**3.** It deletes (removes) all rows from the Loan table [1], because there is no WHERE clause to restrict which rows are removed [1].

**4.** DESC (in an ORDER BY clause) [1].

**5.**
```
SELECT Title
FROM Book
WHERE Genre = 'Science fiction'
ORDER BY Title
```
SELECT Title FROM Book [1]; WHERE condition with Genre in single quotes [1]; ORDER BY Title [1]. Result: Deep Space, Star Maps.

**6.**
```
SELECT MemberName
FROM Member
WHERE Year = 12
```
SELECT and FROM correct [1]; WHERE Year = 12 [1]. Result: Aisha Noor, Chen Wei.

**7.**
```
SELECT COUNT(*)
FROM Loan
WHERE DateBack IS NULL
```
COUNT(*) [1]; WHERE DateBack IS NULL (not `= NULL`) [1]; result 3 [1].

**8.**
```
SELECT Member.MemberName, Book.Title
FROM Member
INNER JOIN Loan ON Member.MemberID = Loan.MemberID
INNER JOIN Book ON Loan.ISBN = Book.ISBN
WHERE Loan.DateBack IS NULL
ORDER BY Member.MemberName, Book.Title
```
SELECT of the two columns [1]; first join on MemberID [1]; second join on ISBN [1]; WHERE DateBack IS NULL [1]; ORDER BY both columns [1]. Result: Aisha Noor with Code Breakers; Aisha Noor with Star Maps; Chen Wei with Star Maps.

**9.**
```
SELECT Member.MemberName, COUNT(*)
FROM Member
INNER JOIN Loan ON Member.MemberID = Loan.MemberID
GROUP BY Member.MemberName
HAVING COUNT(*) >= 2
```
SELECT with COUNT(*) [1]; join with ON condition [1]; GROUP BY the name [1]; HAVING (not WHERE) [1]; condition `>= 2` or `> 1` [1]. Result: Aisha Noor 3, Ben Hart 2.

**10.**
```
SELECT Genre, SUM(CopiesOwned)
FROM Book
GROUP BY Genre
```
SUM(CopiesOwned) [1]; Genre selected [1]; GROUP BY Genre [1]. Result: Geography 2, History 1, Science fiction 5.

**11.**
```
INSERT INTO Member (MemberID, MemberName, Year)
VALUES (5, 'Eli Park', 11)
```
INSERT INTO with the table and columns [1]; VALUES in the same order with the text in single quotes [1].

**12.**
```
UPDATE Book
SET CopiesOwned = CopiesOwned + 1
WHERE Genre = 'Science fiction'
```
UPDATE Book [1]; SET CopiesOwned = CopiesOwned + 1 [1]; WHERE restricting to Science fiction [1].

**13.**
```
UPDATE Loan
SET DateBack = '2026-09-20'
WHERE LoanID = 2
```
SET DateBack with the date in quotes [1]; WHERE LoanID = 2 [1].

**14.**
```
DELETE FROM Loan
WHERE DateBack IS NOT NULL
```
DELETE FROM Loan [1]; WHERE DateBack IS NOT NULL [1].

**15.**
```
CREATE TABLE Loan (
    LoanID   INTEGER    NOT NULL,
    MemberID INTEGER    NOT NULL,
    ISBN     VARCHAR(5) NOT NULL,
    DateOut  DATE       NOT NULL,
    DateBack DATE,
    PRIMARY KEY (LoanID),
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
    FOREIGN KEY (ISBN) REFERENCES Book(ISBN)
)
```
CREATE TABLE with all five columns [1]; suitable data types (INTEGER, text, DATE) [1]; DateBack without NOT NULL [1]; PRIMARY KEY (LoanID) [1]; FOREIGN KEY for MemberID with REFERENCES [1]; FOREIGN KEY for ISBN with REFERENCES [1].

**16.** Errors, any three [1 each]: the join has no ON condition; the aggregate condition is in WHERE and should be in HAVING; the WHERE clause is before GROUP BY, which does not allow an aggregate (HAVING goes after GROUP BY). Corrected statement [1]:
```
SELECT Member.MemberName, COUNT(*)
FROM Member
INNER JOIN Loan ON Member.MemberID = Loan.MemberID
GROUP BY Member.MemberName
HAVING COUNT(*) > 1
```

**17.** The UPDATE has no WHERE clause, so it changed every row [1]. A WHERE clause restricting the update to the intended row(s) prevents this (and checking the condition with a SELECT first helps) [1].

---

## Where marks are usually lost

- Putting an aggregate condition in WHERE instead of HAVING.
- Leaving out the ON condition in a join, or joining on the wrong columns.
- Forgetting WHERE in UPDATE and DELETE statements.
- Using `= NULL` instead of `IS NULL`.
- Forgetting quotes around text and dates.
