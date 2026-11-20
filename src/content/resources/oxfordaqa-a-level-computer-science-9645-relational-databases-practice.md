---
title: "OxfordAQA A-Level Computer Science (9645): Relational databases -- Practice Questions"
seoTitle: "OxfordAQA 9645 Relational Databases Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15 – Databases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 15.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases-9645"
  - qualification: "a-level"
    topic: "databases-9645"
    subtopic: "relational-databases-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.15.1 Relational databases: ER models, normalisation, SQL queries and updates, and lost updates."
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
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.15.1 Relational databases** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: entity relationship models, keys, normalisation to third normal form, SQL, and client server databases. Questions 2 and 5 to 9 use these tables from a school clubs database.

Student(**StudentID**, Name, Year): (1, Dina, 12), (2, Emre, 13), (3, Farah, 12), (4, Gus, 13), (5, Hana, 12)

Club(**ClubID**, ClubName, Room): (1, Chess, B4), (2, Robotics, Lab1), (3, Choir, Hall)

Membership(**StudentID**, **ClubID**, Fee): (1, 1, 5.00), (1, 2, 12.00), (2, 2, 12.00), (3, 1, 5.00), (3, 3, 0.00), (4, 2, 12.00), (5, 3, 0.00), (2, 1, 5.00)

Related pages: [relational databases study guide](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases/) ·
[relational databases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-revision-notes/)

## Section A

**1.** State what is meant by a **foreign key**. **[1]**

**2.** State what is meant by a **composite primary key** and identify the composite key in the Membership table above. **[2]**

**3.** A library records members, books and loans. One member can borrow many books over time, and each book can be borrowed by many members over time. State the degree of the relationship between Member and Book and explain how it is represented in a relational database. **[3]**

## Section B

**4.** A teacher stores exam results in one table:

Result(StudentID, StudentName, CourseID, CourseTitle, Teacher, Grade)

The primary key is (StudentID, CourseID). StudentName depends on StudentID alone, and CourseTitle and Teacher depend on CourseID alone.

**(a)** Explain two problems that this design causes. **[2]**
**(b)** Write the relations in third normal form, marking the primary key of each. **[3]**
**(c)** State the properties of a relation in third normal form. **[1]**

**5.** Write an SQL query to list the name of each student in Year 12 together with the name of each club they belong to, sorted by student name and then by club name. State the first three rows of the output. **[5]**

**6.** Write an SQL query to display each club name with the number of members, and state the result. **[4]**

**7.** Write SQL statements to:

**(a)** change the fee for club 1 (Chess) to 6.00 for all members **[2]**
**(b)** add student 4 (Gus) as a member of club 1 with a fee of 6.00 **[2]**
**(c)** remove all memberships of club 3 **[2]**

**8.** Starting from the original data, state the output of

```sql
SELECT AVG(Fee), MIN(Fee), MAX(Fee), COUNT(*)
FROM Membership;
```

**[4]**

**9.** Write an SQL statement to define the table Membership. The fields are StudentID (integer), ClubID (integer) and Fee (real number). The primary key is made of StudentID and ClubID, and ClubID is a foreign key referring to Club. **[4]**

**10.** A stock record for a part holds the value 20. Two warehouse clerks use a client server database at the same time. Clerk A uses 5 parts and clerk B uses 8 parts.

**(a)** Explain how the lost update problem could arise, stating the final stock value that would be stored. **[3]**
**(b)** Describe how record locking prevents the problem and state the final stock value. **[3]**

## Answers

**1.** A field (or attributes) in one table that holds the primary key value of a record in another table, linking the two tables **[1]**.

**2.** A primary key made of two or more fields that together are unique **[1]**. In Membership it is (StudentID, ClubID) **[1]**. **[2]**

**3.** Many-to-many **[1]**. A relational database cannot store a many-to-many relationship directly **[1]**, so a link table (such as Loan) is added with one-to-many relationships to Member and to Book, with foreign keys to each **[1]**. **[3]**

**4. (a)** Any two of: redundancy, since a student's name or a course's title and teacher is repeated in every row for that student or course **[1]**; update anomaly, since a change of teacher must be made in many rows and any missed row leaves inconsistent data **[1]**; insertion anomaly, since a new course cannot be recorded until a student takes it **[1]**; deletion anomaly, since deleting the only result for a course loses the course details **[1]**. **[2]**
**(b)** Student(**StudentID**, StudentName) **[1]**; Course(**CourseID**, CourseTitle, Teacher) **[1]**; Result(**StudentID**, **CourseID**, Grade), with StudentID and CourseID as foreign keys **[1]**. **[3]**
**(c)** Every non-key attribute depends on the key, the whole key and nothing but the key **[1]**.

**5.** Example answer:

```sql
SELECT Name, ClubName
FROM Student, Club, Membership
WHERE Student.StudentID = Membership.StudentID
  AND Club.ClubID = Membership.ClubID
  AND Year = 12
ORDER BY Name, ClubName;
```

Award **[1]** for SELECT and FROM with all three tables, **[1]** for the join condition between Student and Membership, **[1]** for the join condition between Club and Membership, **[1]** for `Year = 12`, and **[1]** for ORDER BY Name then ClubName. **[5]**

Output (first three rows): Dina Chess; Dina Robotics; Farah Chess. (The full output continues Farah Choir; Hana Choir.)

**6.** Example answer:

```sql
SELECT ClubName, COUNT(*)
FROM Club, Membership
WHERE Club.ClubID = Membership.ClubID
GROUP BY ClubName;
```

Award **[1]** for COUNT, **[1]** for the join condition, **[1]** for GROUP BY ClubName. Result: Chess 3, Choir 2, Robotics 3 **[1]**. **[4]**

**7. (a)** `UPDATE Membership SET Fee = 6.00 WHERE ClubID = 1;` Award **[1]** for UPDATE ... SET and **[1]** for the WHERE clause. **[2]**
**(b)** `INSERT INTO Membership VALUES (4, 1, 6.00);` Award **[1]** for INSERT INTO with the table and **[1]** for the correct values. **[2]**
**(c)** `DELETE FROM Membership WHERE ClubID = 3;` Award **[1]** for DELETE FROM and **[1]** for the WHERE clause. **[2]**

**8.** The fees are 5, 12, 12, 5, 0, 12, 0, 5, total 51 over 8 rows. AVG = 51 / 8 = **6.375** **[1]**; MIN = **0.00** **[1]**; MAX = **12.00** **[1]**; COUNT = **8** **[1]**. **[4]**

**9.** Example answer:

```sql
CREATE TABLE Membership (
  StudentID INTEGER,
  ClubID    INTEGER,
  Fee       REAL,
  PRIMARY KEY (StudentID, ClubID),
  FOREIGN KEY (ClubID) REFERENCES Club(ClubID)
);
```

Award **[1]** for CREATE TABLE with the name, **[1]** for the three fields with suitable data types, **[1]** for the composite PRIMARY KEY and **[1]** for the FOREIGN KEY. **[4]**

**10. (a)** Both clerks read the value 20 before either saves **[1]**. A saves 20 − 5 = 15, then B saves 20 − 8 = 12 **[1]**. The final value is **12**, but it should be 7, because A's update has been lost **[1]**. **[3]**
**(b)** When clerk A opens the record to change it, the record is locked **[1]**, so clerk B must wait until A has saved and released the lock **[1]**. B then reads 15 and saves 7, so the final value is **7**, which is correct **[1]**. **[3]**

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.15.1 Relational databases.
