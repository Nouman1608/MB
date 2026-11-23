---
title: "IB DP Computer Science (DP Computer Science): Normalisation to Third Normal Form"
resourceType: "study-guides"
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
description: "Study guide to normalisation in IB DP Computer Science A.3: anomalies, dependencies, first, second and third normal form, with a full worked example."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A3.2.5-A3.2.7 label (normalisation); the exact learning outcomes were not available, so please check the normal forms required and their wording against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---

**This unit covers statements A3.2.5 to A3.2.7 of A.3 Databases, on normalisation, part of database
design for both SL and HL.** The
[A.3 Databases study guide](/resources/ib-dp-computer-science-a-3/)
defines normalisation in one sentence and shows a two-table design. This page takes the process step
by step through first, second and third normal form, which is what you need to redesign an unfamiliar
table in a Paper 1 case-study question.

> **Scope of this page.** The statement numbers come from the full DP Computer Science guide (first
> assessment 2027), which does not list them among the HL-only statements. The exact wording was not
> available when this page was written, so check your school's copy for the normal forms required and
> how the guide phrases them.

## Why normalise? The three anomalies

A poorly designed table stores the same fact in many rows. That causes three kinds of problem,
called **anomalies**. Consider a single table recording which students take which courses:

| StudentID | StudentName | FormGroup | FormTutor | CourseCode | CourseTitle | Teacher | Grade |
|---|---|---|---|---|---|---|---|
| S01 | Amira Khan | 10B | Mr Shah | CS1 | Programming | Ms Lee | A |
| S01 | Amira Khan | 10B | Mr Shah | MA2 | Statistics | Mr Ode | B |
| S02 | Tom Rees | 10B | Mr Shah | CS1 | Programming | Ms Lee | C |
| S03 | Lina Park | 10C | Ms Hart | AR1 | Ceramics | Mrs Ito | B |

- **Update anomaly.** If 10B's form tutor changes, every row for every 10B student must be changed. Miss
  one and the database contradicts itself.
- **Insertion anomaly.** A new course, say a drama course, cannot be added until a student enrols,
  because every row needs a student.
- **Deletion anomaly.** If Lina Park leaves and her row is deleted, the only record of the Ceramics
  course and its teacher disappears too.

**Normalisation** is the process of organising data into related tables so that each fact is stored
once, removing these anomalies and the redundancy that causes them.

## The key idea: functional dependency

Attribute B is **functionally dependent** on attribute A if each value of A determines exactly one value
of B. We write A → B.

From the table: StudentID → StudentName; StudentID → FormGroup; FormGroup → FormTutor;
CourseCode → CourseTitle; CourseCode → Teacher; and (StudentID, CourseCode) → Grade, because a grade
belongs to one student on one course.

Each normal form removes a particular kind of unwanted dependency.

## First normal form (1NF)

A table is in 1NF when:

1. every field holds a single, **atomic** value (no lists inside a cell);
2. there are **no repeating groups** of fields (no Course1, Course2, Course3 columns);
3. each record is uniquely identified by a **primary key**.

An unnormalised version of the data might store Amira's courses in one cell: "CS1 Programming Ms Lee A;
MA2 Statistics Mr Ode B". Splitting this into one row per student-course pair gives the table above,
which is in 1NF with the **composite primary key** (StudentID, CourseCode).

## Second normal form (2NF)

A table is in 2NF when it is in 1NF and **every non-key attribute depends on the whole primary key**,
not on part of it. A dependency on part of a composite key is a **partial dependency**.

In the 1NF table:

- StudentName, FormGroup and FormTutor depend only on StudentID (part of the key).
- CourseTitle and Teacher depend only on CourseCode (the other part).
- Only Grade depends on the whole key.

Move each group into its own table, keyed by the attribute it depends on:

```
Student   (StudentID, StudentName, FormGroup, FormTutor)
Course    (CourseCode, CourseTitle, Teacher)
Enrolment (StudentID, CourseCode, Grade)
```

In Enrolment, StudentID and CourseCode together form the primary key, and each is also a **foreign
key** linking to Student and Course. A table whose primary key is a single field and that is already in
1NF is automatically in 2NF, because there is no "part" of the key to depend on.

## Third normal form (3NF)

A table is in 3NF when it is in 2NF and **no non-key attribute depends on another non-key attribute**.
Such a chain, key → non-key → non-key, is a **transitive dependency**.

In Student: StudentID → FormGroup, and FormGroup → FormTutor. FormTutor depends on the key only
through FormGroup, so it is transitive. Every student in 10B repeats "Mr Shah", and the update anomaly
survives. Remove it into its own table:

```
Student   (StudentID, StudentName, FormGroup)      -- FormGroup is a foreign key
Form      (FormGroup, FormTutor)
Course    (CourseCode, CourseTitle, Teacher)
Enrolment (StudentID, CourseCode, Grade)
```

Now check each anomaly again:

- Changing 10B's tutor is one update to one row in Form.
- A new drama course can be inserted into Course before anyone enrols.
- Deleting Lina's enrolment removes one Enrolment row; the Ceramics course remains in Course.

A common way to remember 3NF: every non-key attribute depends on **the key, the whole key, and nothing
but the key**.

## Building the design in SQL

The 3NF design can be created with data definition language. Exact syntax varies between database
systems; this is one common form:

```
CREATE TABLE Form (
    FormGroup  VARCHAR(4) PRIMARY KEY,
    FormTutor  VARCHAR(40)
);
CREATE TABLE Student (
    StudentID   VARCHAR(5) PRIMARY KEY,
    StudentName VARCHAR(40),
    FormGroup   VARCHAR(4),
    FOREIGN KEY (FormGroup) REFERENCES Form(FormGroup)
);
CREATE TABLE Course (
    CourseCode  VARCHAR(4) PRIMARY KEY,
    CourseTitle VARCHAR(40),
    Teacher     VARCHAR(40)
);
CREATE TABLE Enrolment (
    StudentID  VARCHAR(5),
    CourseCode VARCHAR(4),
    Grade      CHAR(1),
    PRIMARY KEY (StudentID, CourseCode),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseCode) REFERENCES Course(CourseCode)
);
```

The foreign keys enforce **referential integrity**: an Enrolment row cannot refer to a student or
course that does not exist.

## Is more normalisation always better?

Normalised designs reduce redundancy and anomalies, use less storage for repeated data and keep data
consistent. The cost is that answering a question may need **joins** across several tables, which take
more processing. Some systems that are read far more often than they are updated, such as reporting
systems, deliberately store some data more than once (**denormalisation**) for faster queries. In
exam answers, 3NF is the normal target for a transactional database unless the scenario gives a reason
otherwise.

## Common mistakes

- **Stopping at 1NF** because the table "looks tidy". Check for partial and transitive dependencies.
- **Calling any repeated value redundancy.** Many students in 10B share the value "10B" in Student;
  that is a foreign key, not a problem. The problem is repeating facts *about* 10B.
- **Losing the link.** When you split a table, keep a foreign key so the tables can still be joined.
- **Confusing partial and transitive dependencies.** Partial: on part of a composite key (fixed by
  2NF). Transitive: on another non-key attribute (fixed by 3NF).
- **Not stating keys.** Mark or name the primary key of every table you produce.

## Exam technique for the command words

- **Identify** an anomaly: name its type and give the specific example from the table.
- **Explain** why a table is not in 2NF or 3NF: name the dependency (for example, "CourseTitle depends
  only on CourseCode, which is part of the composite key").
- **Construct** a normalised design: list each table with its fields, underline or label the primary
  key, and label foreign keys.
- **Evaluate** a design: weigh consistency and storage against query complexity.

## Practise and revise

- [Normalisation revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation-revision-notes/)
- [Normalisation practice questions](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation-practice/)
- [A.3 Databases revision notes](/resources/ib-dp-computer-science-a-3-revision-notes/)

## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer
science, first assessment 2027* (© 2024). The complete subject guide is available through the IB
Programme Resource Centre.
