---
title: "Cambridge A Level Information Technology (ICT): Database and file concepts (9626)"
seoTitle: "Cambridge A Level ICT 9626 Databases and Files Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
description: "Study guide for Cambridge AS & A Level IT 9626 topic 10: keys, relationships, ERDs, queries, forms, reports, normalisation and file access."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide covers **topic 10, Database and file concepts**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections 10.1 to 10.4. Topic 10 is an **AS Level** topic, so it is in both the AS and the full A Level. **Paper 1 (Theory)** is based on sections 1–11 and **Paper 2 (Practical)** on sections 8–11, so you can meet this topic in both. **Paper 4 (Advanced Practical)** may also include tasks from sections 8–10.

This guide teaches ideas and skills, not menus. Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Validation check types are taught with topic 1 in the [Data Processing and Information study guide](/resources/a-level-cambridge-ict-data-processing-and-information/). Find your gaps with a [free 10-minute diagnostic](/diagnostics/).

## What this topic covers

All sections are AS Level.

| Section | What you must be able to do |
|---|---|
| 10.1 | Data types and field sizes; relationships; key fields; referential integrity; flat file vs relational |
| 10.1 | Create relationships, ERDs, tables and keys; validate and verify; queries; calculations; sorting |
| 10.1 | Forms, reports, switchboards; import and export |
| 10.2 | Describe UNF, 1NF, 2NF and 3NF; normalise to 3NF; weigh up normalisation |
| 10.3 | Identify data types; describe and create a data dictionary |
| 10.4 | File types and formats; indexed sequential and direct access; DBMS types; MIS |

## 10.1 Data types and field sizes

| Data type | Holds | Example field | Field size idea |
|---|---|---|---|
| Text | Characters, never calculated with | Surname | Longest likely entry, e.g. 30 |
| Alphanumeric | A mix of letters and digits | Postcode, StudentID | Exact length, e.g. 4 for S104 |
| Numeric: integer | Whole numbers | Minutes | Integer |
| Numeric: decimal | Numbers with a fractional part | Weight (kg) | Set decimal places, e.g. 1 |
| Date | A calendar date | LessonDate | Date format, e.g. dd/mm/yyyy |
| Time | A time of day | StartTime | Time format, e.g. hh:mm |
| Boolean | One of two values | Paid (Yes/No) | Two values only |

Store a phone number as **text**: it is never calculated with, and a leading zero would be lost. Set field sizes to fit every real value but block silly ones.

## Relationships and key fields

- **One-to-one:** one record links to exactly one record in another table (each student has one locker).
- **One-to-many:** one record links to many (one teacher teaches many courses).
- **Many-to-many:** many students take many courses. This cannot be stored directly, so add a **link table** (Enrolment) with a one-to-many relationship to each side.

Key fields:

- **Primary key:** unique for every record, such as StudentID.
- **Foreign key:** the primary key of another table, used to link to it.
- **Composite key:** two or more fields that together form the primary key, because none is unique alone.
- **Compound key:** textbooks use this term in slightly different ways; the usual distinction is a composite key in which each field is a key in its own right in another table, like StudentID + CourseCode in Enrolment.

**Referential integrity** means every foreign key value must match an existing primary key value. The database refuses a lesson for student S999 if S999 is not in the Student table, and refuses to delete a student who still has lessons (unless deletions cascade). This stops **orphan records** that point at nothing and would make queries and reports wrong.

### Flat file or relational database?

A **flat file** holds everything in one table: quick to set up and fine for one small list, such as a club's contact sheet. A **relational database** splits data into linked tables. It suits data about several linked things: each fact is stored once, so there is less **redundancy** and data stays **consistent**. The cost is more design time and more complex queries.

### Entity relationship diagrams (ERDs)

| ERD type | Shows |
|---|---|
| Conceptual | Entities and the relationships between them only |
| Logical | Adds attributes, primary keys and foreign keys |
| Physical | Adds what is built: table and field names, data types and field sizes |

In crow's foot notation, a plain end means one and a forked end means many:

```
TEACHER ──────<  COURSE ──────<  ENROLMENT  >────── STUDENT
```

One teacher teaches many courses; each course and each student has many enrolments. The link table turns Student–Course many-to-many into two one-to-many relationships.

To **create a relational database**: build each table with fields, data types and sizes; **set the primary key**; join each primary key to its matching foreign key (same data type) and switch on referential integrity.

## Validating and verifying data entry

A **validation rule** is checked as data is entered, for example "Minutes is 30, 45 or 60" or "StudentID is S then three digits", with clear **error text**. **Test** it with normal data (accepted), extreme boundary data (accepted) and abnormal data (rejected), recording expected and actual results. **Verification** checks data was entered accurately: a visual check against the source, or double entry compared by the computer.

## Queries, calculations and sorting

### Worked example: predicting query results

The Lesson table of a music school:

| LessonID | StudentID | Instrument | LessonDate | Minutes | Fee | Paid |
|---|---|---|---|---|---|---|
| L01 | S104 | Piano | 03/03/2026 | 30 | 15 | Yes |
| L02 | S117 | Guitar | 03/03/2026 | 60 | 28 | No |
| L03 | S104 | Piano | 10/03/2026 | 30 | 15 | No |
| L04 | S122 | Violin | 11/03/2026 | 45 | 21 | Yes |
| L05 | S117 | Guitar | 17/03/2026 | 60 | 28 | Yes |
| L06 | S131 | Piano | 18/03/2026 | 60 | 30 | No |
| L07 | S122 | Violin | 25/03/2026 | 45 | 21 | No |
| L08 | S131 | Drums | 31/03/2026 | 30 | 14 | Yes |

1. **Simple query:** Instrument = "Piano". Result: **L01, L03, L06**.
2. **Complex query, AND:** Paid = No AND Minutes >= 45. Paid = No gives L02, L03, L06, L07; L03 has only 30 minutes. Result: **L02, L06, L07**.
3. **OR:** Instrument = "Violin" OR "Drums". Result: **L04, L07, L08**.
4. **NOT:** NOT "Piano" AND Paid = Yes. Result: **L04, L05, L08**.
5. **Wildcard:** Instrument like "G*", where * stands for any characters (the wildcard symbol depends on the software). Result: **L02, L05**.
6. **Date range:** LessonDate >= 10/03/2026 AND <= 24/03/2026. Result: **L03, L04, L05, L06**.

### Choosing a query type

| Query type | Use it when |
|---|---|
| Simple | One criterion on one field |
| Complex | Several criteria joined by AND, OR, NOT |
| Static parameter | The criterion is fixed in the design, e.g. Paid = No for a weekly unpaid list |
| Dynamic parameter | The user types the value each run, e.g. a prompt "Enter instrument" |
| Nested | A query uses the results of another query |
| Summary | Totals, counts or averages per group |
| Cross-tab | One field down the side, another across the top, like a pivot table |

A cross-tab of total Fee by Instrument and Paid:

| Instrument | Yes | No |
|---|---|---|
| Drums | 14 | |
| Guitar | 28 | 28 |
| Piano | 15 | 45 |
| Violin | 21 | 21 |

Unpaid total: 28 + 15 + 30 + 21 = **94**. Pivot tables are in the [Spreadsheets study guide](/resources/a-level-cambridge-ict-spreadsheets/).

**Action queries** change data: **make-table** creates a new table from results (an archive of old lessons); **append** adds results to an existing table; **delete** removes matching records; **update** changes values in matching records (raise all Guitar fees). To **remove duplicates**, run a find-duplicates query on fields that should be unique together (name and date of birth), check each pair, then delete the extra copies.

### Calculations and sorting

A **calculated field** is made in a query from other fields: FeePerHour = Fee ÷ Minutes × 60. L01: 15 ÷ 30 × 60 = **30**; L04: 21 ÷ 45 × 60 = **28**. A **calculated control** on a form or report works out a displayed value, such as a sum of Fee in a report footer. Numeric functions (round, integer) and logical functions (IF Paid = No, show "Overdue") also work.

**Sorting** is ascending or descending, on one or more fields. Instrument ascending, then Fee descending, gives L08 (Drums), L02 and L05 (Guitar), then L06 (Piano, 30) before L01 and L03.

## Forms, reports and menus

A good **data entry form** has a clear font style and size, sensible spacing and white space, boxes big enough to show each whole value, and highlighted key fields. Use **radio buttons** for a few fixed choices (Paid) and **drop-down menus** for longer lists (Instrument). **Form controls** include buttons to save or move between records. A **linked subform** shows the "many" records for the current "one" record, such as a student's lessons.

A **grouped report** lists records under group headings (by Instrument), with **controls** for labels and fields and **calculated controls** for group totals. A **switchboard/menu** is a start-up form of buttons opening forms, queries and reports, so users never open tables.

**Import** csv and txt files by stating the delimiter, whether row 1 holds field names, and each field's data type. **Export** a table, query or report, as csv, txt or rtf (rtf keeps basic formatting).

## 10.2 Normalisation to 3NF

| Form | Characteristics |
|---|---|
| UNF | Contains repeating groups of fields |
| 1NF | No repeating groups; each field holds one value; every record has a primary key |
| 2NF | In 1NF, and no non-key field depends on only part of a composite key |
| 3NF | In 2NF, and no non-key field depends on another non-key field |

### Worked example

UNF: Student(StudentID, StudentName, {CourseCode, CourseName, TeacherID, TeacherName, Grade}). The braces mark a repeating group.

1. **1NF:** move the repeating group to its own table, taking the original key. Student(**StudentID**, StudentName); StudentCourse(**StudentID, CourseCode**, CourseName, TeacherID, TeacherName, Grade).
2. **2NF:** CourseName, TeacherID and TeacherName depend on CourseCode alone (part of the key). Grade depends on both. Split: Enrolment(**StudentID, CourseCode**, Grade); Course(**CourseCode**, CourseName, TeacherID, TeacherName).
3. **3NF:** TeacherName depends on TeacherID, a non-key field. Split: Course(**CourseCode**, CourseName, TeacherID); Teacher(**TeacherID**, TeacherName).

Result: four tables, matching the ERD above.

**Advantages:** less redundant data and storage; each fact updated in one place, so fewer inconsistencies. **Disadvantages:** more tables; queries need joins, so they are more complex and can run slower; design takes longer.

## 10.3 Data dictionary

10.3 adds **currency** and **percentage** to the data types above; Boolean may be called logical (yes/no, true/false). A **data dictionary** records, for every field: table, field name, data type, field size, format, key, validation rule, error text, default value, whether required, and a description.

| Field | Type | Size/format | Key | Validation |
|---|---|---|---|---|
| StudentID | Alphanumeric | 4 | Primary | S then three digits |
| Fee | Currency | 2 d.p. | | >= 0 |
| Paid | Boolean | Yes/No | | |

## 10.4 File and data management

**File types** match content: csv and txt for plain data, rtf for formatted text, pdf for fixed documents, jpg and png for images, mp3 for audio, mp4 for video. **Generic formats** (csv, txt, rtf) open in many programs, so data moves between different software. **Proprietary formats** belong to one company, such as Photoshop's psd. **Open-source formats** have a public specification anyone may use, so files stay readable without one company's software.

**Indexed sequential access:** records are stored in key order with an index of key ranges. A program reads every record in order (a payroll run) or uses the index to jump to the right area, then searches sequentially. **Direct file access:** a hashing algorithm turns the key into a storage address, so one record is found at once (key 4527, 100 blocks: 4527 mod 100 = **27**). It suits single lookups such as a booking enquiry.

| DBMS type | Structure | For | Against |
|---|---|---|---|
| Hierarchical | Tree; each child has one parent | Fast on fixed paths | Many-to-many hard; rigid |
| Network | Records may have several parents | Handles many-to-many | Complex to change |
| Object-oriented | Objects hold data and methods | Complex data, e.g. multimedia | Less standard |
| Relational | Linked tables | Flexible queries | Joins slow huge queries |

A **management information system (MIS)** turns data from an organisation's systems into summaries, reports and charts for managers. Features: data from many sources, regular and on-demand reports, comparisons over time. Organisations use it to monitor performance, spot trends and plan.

## Common errors

- Making a phone number numeric.
- Calling 2NF "no transitive dependencies" (that is 3NF).
- Confusing a calculated field (query) with a calculated control (form or report).

## Next steps

Use the [revision notes](/resources/a-level-cambridge-ict-database-and-file-concepts-revision-notes/), then the [practice questions](/resources/a-level-cambridge-ict-database-and-file-concepts-practice/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 10: Database and file concepts (10.1 Creating a database; 10.2 Normalisation to third normal form (3NF); 10.3 Data dictionary; 10.4 File and data management).
