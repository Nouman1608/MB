---
title: "IB DP Computer Science (DP Computer Science): Normalisation to Third Normal Form -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "A.3 -- Databases"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.31
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-3"
description: "Condensed notes on normalisation for IB DP Computer Science A.3: anomalies, functional dependency, 1NF, 2NF and 3NF tests, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A3.2.5-A3.2.7 label (normalisation); the exact learning outcomes were not available, so please check the normal forms required against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **A3.2.5 to A3.2.7, normalisation**, part of database design in A.3 Databases
(IB DP Computer Science, first assessment 2027; SL and HL). For the full worked example, use the
[normalisation study guide](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation/);
for keys, SQL and the relational model, see the
[A.3 Databases revision notes](/resources/ib-dp-computer-science-a-3-revision-notes/).

## Key terms

| Term | Meaning |
|---|---|
| Normalisation | Organising data into related tables so each fact is stored once |
| Redundancy | The same fact stored more than once |
| Update anomaly | A change must be made in many rows; missing one creates inconsistency |
| Insertion anomaly | Data cannot be added without unrelated data |
| Deletion anomaly | Deleting one fact unintentionally deletes another |
| Functional dependency (A → B) | Each value of A determines exactly one value of B |
| Atomic value | A single value that is not divided further in the design |
| Repeating group | A set of fields or values that repeats within one record |
| Composite key | A primary key made of two or more fields |
| Partial dependency | Non-key attribute depends on only part of a composite key |
| Transitive dependency | Non-key attribute depends on another non-key attribute |
| Referential integrity | Every foreign key value matches an existing primary key |
| Denormalisation | Deliberately storing some data more than once to speed up reads |

## The three tests

| Normal form | Test | Fix |
|---|---|---|
| **1NF** | Atomic values; no repeating groups; a primary key | One row per item; choose or create a key |
| **2NF** | 1NF, and no **partial** dependency | Move attributes that depend on part of the key into a table keyed by that part |
| **3NF** | 2NF, and no **transitive** dependency | Move attributes that depend on a non-key attribute into a table keyed by that attribute |

Memory line: **the key, the whole key, and nothing but the key.**

## Shortcut facts

- 1NF with a **single-field** primary key → automatically 2NF.
- Splitting must keep a **foreign key** so tables can be rejoined.
- A link table for a many-to-many relationship often has a composite key made of two foreign keys.
- Each normal form includes all the earlier ones.

## Method for any exam table

1. Write the dependencies you can see (A → B) from the scenario's description.
2. Identify the primary key (composite if needed) and check 1NF.
3. For a composite key, find attributes depending on **part** of it → split (2NF).
4. Find non-key attributes that determine other non-key attributes → split (3NF).
5. List final tables with primary keys marked and foreign keys labelled.
6. Re-check: can each anomaly still happen?

## Mini example (from the study guide)

Unnormalised: student details plus a list of courses per student.
1NF: Enrolment(**StudentID, CourseCode**, StudentName, FormGroup, FormTutor, CourseTitle, Teacher,
Grade).
2NF: Student(**StudentID**, StudentName, FormGroup, FormTutor); Course(**CourseCode**, CourseTitle,
Teacher); Enrolment(**StudentID, CourseCode**, Grade).
3NF: Student(**StudentID**, StudentName, FormGroup); Form(**FormGroup**, FormTutor); Course and
Enrolment unchanged.

## Spotting dependencies from scenario wording

| Scenario says | Dependency | Consequence |
|---|---|---|
| "Each course has one teacher" | CourseCode → Teacher | Teacher belongs in the Course table |
| "A grade is given to each student on each course" | (StudentID, CourseCode) → Grade | Grade stays in the link table |
| "Every form group has one tutor" | FormGroup → FormTutor | Separate Form table for 3NF |
| "A customer can place many orders" | OrderID → CustomerID | CustomerID is a foreign key in Order |
| "A book may have several authors" | No single-value dependency | Needs a link table such as BookAuthor |

## Benefits and costs

- **Benefits:** less redundancy; no update, insertion or deletion anomalies; consistent data; easier
  to maintain.
- **Costs:** more tables; queries need joins, so more processing; design takes more thought.
- Reporting or analysis systems may **denormalise** for read speed.

## Exam traps

- A foreign key value repeated across rows is **not** redundancy.
- 2NF only concerns **composite** keys; 3NF concerns **non-key to non-key** links.
- Do not drop a field when splitting: every attribute must end up in exactly one appropriate table
  (except keys used as links).
- Always state primary keys; examiners cannot credit a design whose keys are unclear.
- Use the scenario's data to name a specific anomaly, not a general definition.

## Self-test

1. Define normalisation.
2. Give an example of an update anomaly.
3. What does A → B mean?
4. State the three conditions for 1NF.
5. When is a 1NF table automatically in 2NF?
6. Define a partial dependency.
7. Define a transitive dependency.
8. Table Order(**OrderID**, CustomerID, CustomerEmail, OrderDate). Which normal form rule does it
   break, and why?
9. Normalise the Order table in question 8 to 3NF.
10. Table Booking(**RoomNo, Date**, RoomType, GuestName). RoomType depends only on RoomNo. Which
    normal form is broken?
11. State one cost of normalisation.
12. What is referential integrity?

**Answers:**
1. Organising data into related tables so each fact is stored once, removing redundancy and anomalies.
2. A tutor's name stored in many rows: changing it requires every row to be updated, and missing one
   leaves conflicting values.
3. Each value of A determines exactly one value of B.
4. Atomic values; no repeating groups; a primary key identifying each record.
5. When its primary key is a single field.
6. A non-key attribute that depends on only part of a composite primary key.
7. A non-key attribute that depends on another non-key attribute rather than directly on the key.
8. 3NF: CustomerEmail depends on CustomerID, a non-key attribute (transitive dependency).
9. Order(**OrderID**, CustomerID, OrderDate) with CustomerID as a foreign key; Customer(**CustomerID**,
   CustomerEmail).
10. 2NF: RoomType depends on part of the composite key (a partial dependency).
11. Any one: queries need joins across tables, taking more processing; more tables to manage.
12. Every foreign key value must match an existing primary key value in the related table.

## Related pages

- [Normalisation practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation-practice/)
- [A.3 Databases study guide](/resources/ib-dp-computer-science-a-3/)

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
