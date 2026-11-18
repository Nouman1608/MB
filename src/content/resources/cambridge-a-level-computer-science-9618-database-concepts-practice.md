---
title: "Cambridge A Level Computer Science (9618): Database Concepts -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8: Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8.1
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-concepts"
description: "Original questions with mark-scheme answers on keys, relationships, E-R diagrams and normalising to 3NF for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Database Concepts study guide](/resources/cambridge-a-level-computer-science-9618-database-concepts/) · [Database Concepts revision notes](/resources/cambridge-a-level-computer-science-9618-database-concepts-revision-notes/) · [Databases practice questions](/resources/a-level-computer-science-databases-practice/)

These questions practise section 8.1 Database Concepts of Cambridge International AS & A Level Computer Science 9618. All organisations and data are invented. Primary keys are shown in bold; on paper you would underline them. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State what is meant by a **tuple**. **[1]**

**2.** A table CAR has attributes Registration, ChassisNumber, Make and Colour. Registration and ChassisNumber are both unique for every car.

**(a)** Identify the candidate keys. **[1]**

**(b)** Registration is chosen as the primary key. State the term for ChassisNumber. **[1]**

**3.** Explain what is meant by **referential integrity**, using an example. **[2]**

**4.** State **one** advantage and **one** disadvantage of creating an index on a field. **[2]**

**5.** Which of these is the reason a table can fail second normal form?

A: It contains a repeating group.

B: A non-key attribute depends on another non-key attribute.

C: A non-key attribute depends on only part of a composite primary key.

D: It has more than one candidate key.

**[1]**

**6.** A database stores data about flats and the buildings they are in. Each building has many flats; each flat is in one building. State the type of relationship and which table holds the foreign key. **[2]**

## Section B

**7.** A cycle club keeps one spreadsheet file per event. Each file holds the rider's name, address, phone number, club membership number and finishing time.

**(a)** Describe **two** problems caused by storing the data this way. **[4]**

**(b)** Explain how a relational database would solve each problem you described. **[2]**

**8.** A library has these rules: a member can borrow many books over time; each book can be borrowed by many members over time; each loan is of one book by one member.

**(a)** State the relationship between MEMBER and BOOK. **[1]**

**(b)** Describe how this relationship is represented in a relational database, naming the extra table and its keys. **[3]**

**(c)** Describe the E-R diagram for MEMBER, BOOK and the extra table. **[2]**

**9.** A garage stores repairs in this table:

REPAIR(**JobNo**, CarReg, OwnerName, OwnerPhone, MechanicID, MechanicName, DateIn)

Each car has one owner. Each job is for one car and is done by one mechanic.

**(a)** Explain why the table is in 2NF. **[1]**

**(b)** Explain why the table is not in 3NF. **[2]**

**(c)** Produce a design in 3NF. Identify all primary and foreign keys. **[4]**

**10.** A college records results like this, with one row per student:

StudentID, StudentName, TutorGroup, then for each course taken: CourseCode, CourseTitle, Grade

Normalise the data to 3NF. Show the tables at 1NF, 2NF and 3NF, and identify the keys. **[6]**

**11.** Explain the difference between a **primary key** and a **foreign key**, using the tables in your answer to question 10. **[2]**

**12.** A shop has the tables CUSTOMER(**CustID**, Name, Email) and ORDER(**OrderNo**, CustID, OrderDate). Explain what the DBMS should do if a user tries to

**(a)** add an order for CustID C900, when no customer C900 exists **[1]**

**(b)** delete a customer who has orders. **[1]**

---

## Answers

**1.** One row of a table / one record, holding the data about one instance of an entity [1].

**2. (a)** Registration and ChassisNumber [1].

**(b)** Secondary key [1].

**3.** Every foreign key value must match an existing primary key value in the linked table [1]; e.g. a lesson cannot refer to a PupilID that is not in the PUPIL table [1].

**4.** Advantage: searching / sorting on that field is faster [1]. Disadvantage: extra storage is needed / adding, changing and deleting records is slower because the index must be updated [1].

**5.** **C** [1].

**6.** One-to-many (one building, many flats) [1]; the FLAT table holds the foreign key (BuildingID) [1].

**7. (a)** Any two problems, two marks each:

- Data redundancy [1]: a rider's address and phone number are stored again in every event file they enter [1].
- Data inconsistency [1]: if a rider moves, the address may be updated in one file but not the others, so the copies disagree [1].
- Difficult to retrieve combined data [1]: finding a rider's results across all events needs every file to be opened and searched [1].

**(b)** One mark per problem, matched to (a): rider details stored once in a RIDER table, linked by membership number to results [1]; one update of the RIDER record is seen everywhere / results for all events can be retrieved with one query joining the tables [1].

**8. (a)** Many-to-many [1].

**(b)** A link table, e.g. LOAN, is created [1]; it holds MemberID and BookID as foreign keys [1]; its primary key is a LoanID, or a composite such as (MemberID, BookID, LoanDate) [1].

**(c)** MEMBER is joined to LOAN by a one-to-many relationship, with the "many" (crow's foot) at LOAN [1]; BOOK is joined to LOAN by a one-to-many relationship, with the "many" at LOAN [1].

**9. (a)** The primary key is a single attribute (JobNo), so no attribute can depend on only part of it [1].

**(b)** OwnerName and OwnerPhone depend on CarReg, and MechanicName depends on MechanicID [1]; these are non-key attributes, so there are non-key (transitive) dependencies [1].

**(c)** REPAIR(**JobNo**, CarReg, MechanicID, DateIn) [1]; CAR(**CarReg**, OwnerName, OwnerPhone) [1]; MECHANIC(**MechanicID**, MechanicName) [1]; foreign keys CarReg and MechanicID in REPAIR [1].

(An OWNER table with an OwnerID is also acceptable if the student explains that one owner may have several cars.)

**10.** 1NF: RESULT(**StudentID**, **CourseCode**, StudentName, TutorGroup, CourseTitle, Grade), with the repeating group removed so there is one row per student per course [1] and the composite key identified [1].
2NF: StudentName and TutorGroup depend only on StudentID; CourseTitle depends only on CourseCode, so these partial dependencies are removed [1]: STUDENT(**StudentID**, StudentName, TutorGroup); COURSE(**CourseCode**, CourseTitle); RESULT(**StudentID**, **CourseCode**, Grade) [1].
3NF: no non-key attribute depends on another non-key attribute in any of the three tables, so the 2NF tables are already in 3NF [1]. Foreign keys StudentID and CourseCode in RESULT [1].

**11.** A primary key uniquely identifies each record in its own table, e.g. StudentID in STUDENT [1]; a foreign key is an attribute that is the primary key of another table, used to link the tables, e.g. StudentID in RESULT [1].

**12. (a)** Reject the new order, because it would break referential integrity (no matching customer) [1].

**(b)** Refuse the deletion (or delete the orders as well, if the database is set up to cascade deletions), so no order is left referring to a customer who does not exist [1].

---

## Where marks are usually lost

- Leaving the repeating group in place at 1NF, or not identifying the composite key.
- Naming a dependency without saying which attributes are involved.
- Putting the foreign key in the "one" table.
- Writing the limitations of files again in a question that asks how a relational database solves them.
