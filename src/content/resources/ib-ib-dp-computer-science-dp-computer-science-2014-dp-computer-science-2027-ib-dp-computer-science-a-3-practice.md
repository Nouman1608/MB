---
title: "IB DP Computer Science A.3: Databases -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "A.3 -- Databases"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-3"
description: "Twelve original questions on keys, flat files, two-table SQL, updates, and HL aggregates and transactions for IB DP Computer Science A.3, with worked answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-17: New page written from the IB subject brief and the site's Theme A coverage; please check the SQL, the HL labels and the mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [A.3 Databases study guide](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3/)
and [revision notes](/resources/ib-ib-dp-computer-science-dp-computer-science-2014-dp-computer-science-2027-ib-dp-computer-science-a-3-revision-notes/).

## Section A

**1.** Define the terms primary key and foreign key. **[2]**

**2.** State **three** problems caused by storing all of an organisation's data in a single flat
file. **[3]**

**3.** Distinguish between data definition language and data manipulation language, giving an
example statement of each. **[2]**

**4.** State the purpose of the % symbol in a LIKE condition. **[1]**

**5.** State the difference between WHERE and HAVING. **[2]**

**6.** *(HL)* State what is meant by atomicity in a database transaction. **[1]**

## Section B

**7.** Questions 7–11 use these two tables from a gym's database.

**Members**

| MemberID | Name | Level |
|---|---|---|
| 1 | Sara | Gold |
| 2 | Tom | Silver |
| 3 | Uma | Gold |
| 4 | Vik | Bronze |

**Bookings**

| BookingID | MemberID | Class | Day |
|---|---|---|---|
| 101 | 1 | Yoga | Mon |
| 102 | 2 | Spin | Tue |
| 103 | 1 | Spin | Wed |
| 104 | 3 | Yoga | Wed |
| 105 | 4 | Boxing | Fri |
| 106 | 3 | Spin | Fri |
| 107 | 1 | Boxing | Fri |

**(a)** Identify the primary key of each table and the foreign key. **[2]**
**(b)** State the type of relationship between Members and Bookings, and explain how the tables show
it. **[2]**

**8.** Write an SQL query to list the name of each Gold member and the classes they have booked, in
alphabetical order of name. **[4]**

**9.** State the output of this query and explain how you reached it.

```
SELECT DISTINCT Bookings.Class
FROM Members
JOIN Bookings ON Members.MemberID = Bookings.MemberID
WHERE Members.Level <> 'Gold'
ORDER BY Bookings.Class DESC;
```

**[3]**

**10.** Vik moves up to Silver level.
**(a)** Write an SQL statement to make this change. **[2]**
**(b)** Explain what would happen if the WHERE clause were left out. **[1]**

**11.** *(HL)* Write an SQL query to show each class and the number of bookings for it, but only for
classes with more than two bookings. State the result. **[4]**

**12.** *(HL)* A bank moves 200 from account A to account B. Explain how a transaction, the ACID
properties and the commands BEGIN TRANSACTION, COMMIT and ROLLBACK protect the data's integrity. **[6]**

---

## Answers

**1.** Primary key: a field (or fields) whose value uniquely identifies each record in a table [1].
Foreign key: a field in one table that refers to the primary key of another table, linking them [1].

**2.** Any three, [1] each: redundancy, as the same data is repeated; inconsistency when some copies
are updated and others are not; wasted storage; difficulty controlling who sees which data; harder
to search and maintain. Maximum 3.

**3.** DDL defines the structure of the database, e.g. `CREATE TABLE` [1]; DML retrieves or changes
the data, e.g. `SELECT` or `UPDATE` [1].

**4.** It matches any sequence of characters, including none, in a pattern [1].

**5.** WHERE filters individual rows before grouping [1]; HAVING filters groups after aggregate
functions are applied [1].

**6.** All the operations in the transaction take place, or none of them do [1].

**7. (a)** Members: MemberID; Bookings: BookingID [1]. MemberID in Bookings is the foreign key [1].
**(b)** One-to-many [1]: each member can have many bookings, shown by the same MemberID appearing in
several Bookings rows, but each booking belongs to one member [1].

**8.** One mark each for: correct SELECT fields [1]; correct JOIN with ON condition [1]; WHERE
Level = 'Gold' [1]; ORDER BY Name ASC [1].

```
SELECT Members.Name, Bookings.Class
FROM Members
JOIN Bookings ON Members.MemberID = Bookings.MemberID
WHERE Members.Level = 'Gold'
ORDER BY Members.Name ASC;
```

(It returns Sara with Yoga, Spin and Boxing, then Uma with Yoga and Spin; the order of classes for
the same member may vary.)

**9.** Output: Spin, Boxing (in that order) [1]. The members who are not Gold are Tom and Vik [1];
their bookings are Spin and Boxing, DISTINCT removes repeats, and DESC sorts the class names in
reverse alphabetical order [1].

**10. (a)** One mark for UPDATE ... SET, one for the correct WHERE [2]:

```
UPDATE Members
SET Level = 'Silver'
WHERE MemberID = 4;
```

**(b)** Every member's level would be changed to Silver [1].

**11.** One mark each for: SELECT Class and COUNT [1]; GROUP BY Class [1]; HAVING COUNT(*) > 2 [1];
correct result, Spin 3 [1].

```
SELECT Class, COUNT(*)
FROM Bookings
GROUP BY Class
HAVING COUNT(*) > 2;
```

**12.** One mark per point, up to 6:
- The withdrawal from A and the deposit to B are grouped into one transaction, started with
  `BEGIN TRANSACTION` [1].
- Atomicity: both changes happen or neither does, so money is never lost or created [1].
- If an error or failure occurs part-way, `ROLLBACK` undoes the changes made so far [1].
- If both steps succeed, `COMMIT` makes the changes permanent [1].
- Consistency: rules such as "balance cannot fall below zero" are obeyed, so the database stays valid [1].
- Isolation: another transaction reading the accounts at the same time does not see a half-finished
  transfer [1].
- Durability: once committed, the transfer survives a crash or power cut [1].
Maximum 6.

## Where marks are usually lost

- JOINs with no ON condition, or with the wrong key fields.
- Text values written without quotation marks.
- Using WHERE COUNT(*) > 2 instead of HAVING.
- Describing ACID by listing the four words without applying them to the scenario.

## Frequently asked questions

**Will I lose marks for small syntax differences?**
Syntax varies between systems; aim for clear standard SQL with the correct clauses in the correct
order.

**Are these real IB questions?**
No. They are original practice questions.
