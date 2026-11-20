---
title: "Cambridge A Level Information Technology (9626): Creating a database"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "creating-a-database"
description: "Cambridge 9626 IT section 10.1 study guide: data types, keys, relationships, ERDs, validation, queries, forms, reports, switchboards, and importing and exporting."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: check the wording that distinguishes compound and composite keys; the syllabus lists both and the page treats them as keys made of two or more fields."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 10.1 Creating a database** of Topic 10 Database and file concepts in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. It is tested in Paper 1 Theory (explaining concepts and designing structures) and in Paper 2 Practical (building and using a database). The [Database and file concepts overview](/resources/a-level-cambridge-ict-database-and-file-concepts/) covers all of Topic 10; this page goes through section 10.1 with a worked example. Use it with the [creating a database practice questions](/resources/cambridge-a-level-ict-9626-creating-a-database-practice/).

## What section 10.1 covers

| Area | Skills |
|---|---|
| Fields | Assign a data type and a suitable field size |
| Keys and relationships | One-to-one, one-to-many, many-to-many; primary, compound, foreign and composite keys; referential integrity |
| Design | Flat file against relational database; entity relationship diagrams (conceptual, logical and physical) |
| Building | Create a relational database, set key fields and relationships, validate and verify entry |
| Queries | Choose query types; search, calculate, sort, summarise; create, append, delete and update queries |
| Interface | Data entry forms, reports, switchboards |
| Data exchange | Import and export |

## Data types and field sizes

Each field is given a **data type** and a **size**, so that only suitable data is stored and storage is not wasted.

| Data type | Used for | Example |
|---|---|---|
| Text | Names, descriptions | Surname |
| Alphanumeric | Letters and digits mixed | Product code `AB1234` |
| Numeric: integer | Whole numbers | Number in stock |
| Numeric: decimal | Numbers with a fractional part | Price 7.99 |
| Date | Calendar dates | Date of birth |
| Time | Times of day | Appointment time |
| Boolean | Yes/No, True/False | In stock? |

Phone numbers and postcodes are stored as **text**, not numbers, because they are not used in calculations and may start with a zero. The **field size** is the number of characters or the range of numbers: a two-letter country code needs size 2, and a small integer field may only need to hold values up to 255.

## Keys

| Key | Meaning |
|---|---|
| Primary key | A field whose value is **unique** for each record and identifies it, such as `BookID` |
| Compound or composite key | A primary key made of **two or more fields** used together, such as `StudentID` and `ClubID` in a link table. The syllabus lists both terms |
| Foreign key | A field in one table that holds the primary key value of a record in **another** table, linking the two |

A key field should be unique, never empty and unchanging. Where no natural unique field exists, create one (an auto-number).

## Relationships

A **relationship** links records in two tables.

| Relationship | Meaning | Example |
|---|---|---|
| One-to-one | One record in A matches one record in B | One person and their passport record |
| One-to-many | One record in A matches many in B | One form (class) has many students |
| Many-to-many | Many records in A match many in B | Many students belong to many clubs |

A **many-to-many** relationship cannot be stored directly. It is split into two one-to-many relationships using a **link table** whose primary key is the combination of the two foreign keys.

### Referential integrity

**Referential integrity** is a rule that every foreign key value must match an existing primary key value in the related table. It means:
- you cannot add a student with a `FormID` that does not exist in the Form table;
- you cannot delete a form that still has students (unless cascade delete is chosen).

It prevents **orphan records** and keeps the data consistent, so it is important.

## Flat file or relational database?

A **flat file** stores all the data in one table. A **relational database** has several linked tables.

| Feature | Flat file | Relational database |
|---|---|---|
| Structure | One table | Several tables joined by keys |
| Data repeated? | Often, for example a customer's address on every order | Stored once and referenced |
| Errors on update | Must change every copy | Change one record |
| Complexity | Simple to build | More planning needed |
| Storage | Wastes space | Efficient |
| Suited to | Small, simple lists | Large data sets with relationships |

A flat file is more appropriate for a short list that will not grow, such as a one-off address list. A relational database suits a school or shop where the same data is used in many ways.

## Entity relationship diagrams (ERDs)

An **entity** is a thing about which data is stored (Student, Form, Club). An **ERD** shows the entities and the relationships between them.

- **Conceptual ERD:** the highest level. Shows entities and the relationships between them, with no attributes or keys. Written for a non-technical audience.
- **Logical ERD:** adds the **attributes**, the **primary and foreign keys** and the cardinality of each relationship (one-to-many and so on), without a specific database product. Many-to-many relationships are resolved.
- **Physical ERD:** shows the actual **tables, field names, data types and sizes** as they will be built in the chosen software.

### Worked example 1: a school clubs database

**Conceptual:** Student, Form and Club are entities. A Form has many Students. Students join many Clubs and Clubs have many Students.

**Logical:**
- `Form(FormID, Tutor)`: primary key `FormID`.
- `Student(StudentID, Name, FormID)`: primary key `StudentID`, foreign key `FormID`.
- `Club(ClubID, ClubName, Day)`: primary key `ClubID`.
- `Membership(StudentID, ClubID)`: a link table with a **composite key** of both fields. Each is also a foreign key.

Relationships: Form to Student is one-to-many; Student to Membership is one-to-many; Club to Membership is one-to-many. Together, Student and Club have a many-to-many relationship through Membership.

**Physical:** `StudentID` is an integer; `Name` is text of size 40; `FormID` is text of size 3; `ClubName` is text of size 30; `Day` is text of size 9.

## Building the database

1. Create the tables with suitable data types and sizes.
2. Set the **primary key** of each table.
3. Create the **relationships** and tick **enforce referential integrity**.
4. Add **validation rules**, such as a range check on a mark or a lookup list for the day.
5. Enter or import the data, **verifying** it (for example by double entry or proofreading against the source).
6. **Test** the validation with normal, extreme and abnormal data.

## Queries

A **query** asks the database a question. Use the right type for the task.

| Query type | Use | Example |
|---|---|---|
| Simple | One criterion | Genre = Fiction |
| Complex | Several criteria joined with AND, OR, NOT | Genre = Travel AND Price < 11 |
| Static parameter | Value typed into the query design and fixed | Always Genre = Fiction |
| Dynamic parameter | The user is asked for the value each time | Genre = [Enter a genre] |
| Nested | One query uses the results of another | A query on the results of a previous query |
| Summary | Totals, counts, averages by group | Average price by genre |
| Cross-tab | Summary shown as a grid with row and column headings | Count by genre and in stock |

Use a **static** parameter when the criterion never changes, and a **dynamic** parameter when users must search different values.

### Worked example 2: queries on a books table

| BookID | Title | Author | Genre | Price | InStock |
|---|---|---|---|---|---|
| B01 | Tidewater | Orla Finn | Fiction | 7.99 | Yes |
| B02 | Cold Maps | Dev Rao | Travel | 12.50 | Yes |
| B03 | Iron Garden | Orla Finn | Fiction | 9.99 | No |
| B04 | Night Kitchen | Sam Pike | Cookery | 15.00 | Yes |
| B05 | Hill Walks | Dev Rao | Travel | 10.00 | Yes |

- **Simple query:** Genre = "Fiction" returns B01 and B03.
- **Complex query:** Genre = "Travel" AND Price < 11 returns only B05 (B02 costs 12.50).
- **Dynamic parameter query:** Genre = [Enter genre]. The user types Cookery and receives B04.
- **Calculated field:** `PriceWithVAT: [Price]*1.2` gives 9.59 for B01, 15.00 for B02, 11.99 for B03, 18.00 for B04 and 12.00 for B05.
- **Summary query:** group by Genre, count of BookID, average of Price: Fiction 2 books and average 8.99; Travel 2 and 11.25; Cookery 1 and 15.00.
- **Cross-tab query:** rows Genre, columns InStock, values count of BookID. Fiction shows 1 Yes and 1 No; Travel shows 2 Yes and 0 No; Cookery shows 1 Yes.

Other query features: wildcards (`Fi*`), AND/OR/NOT, comparison operators, sorting (ascending or descending, on more than one field), **find duplicate** queries, and **action queries**, which change data: **make-table** (create a new table), **append** (add records), **delete** and **update**. Always check an action query on a copy or with a preview first, because it changes the data.

## Forms, reports and switchboards

### Data entry forms

A good form: uses clear **font styles and sizes**; leaves **spacing between fields**; makes each box wide and tall enough to show its data; uses **white space**; uses **radio buttons** for a few exclusive choices and **drop-down menus** for longer lists; **highlights key fields**; and may include **linked subforms**, such as a form of a Student with a subform of that student's clubs.

### Reports

A **report** is a formatted printout of data. A **grouped report** groups records by a field (for example by genre), with a **calculated control** giving a total or count for each group. Design includes a title, headers, aligned columns and a page number.

### Switchboard (menu)

A **switchboard** is a form with buttons that open forms, run queries and print reports, so users with little training can use the database without opening the design view.

## Importing and exporting

- **Import** from CSV and TXT files; choose the delimiter and the data type of each field.
- **Export** a table, query or report as CSV, TXT or RTF so that other software can use it.

## Common mistakes

- Storing phone numbers as numbers, which drops leading zeros.
- Using a field that can repeat (such as a surname) as a primary key.
- Trying to store a many-to-many relationship without a link table.
- Confusing the **primary key** (in its own table) with the **foreign key** (in the related table).
- Forgetting to enforce referential integrity.
- Using AND where OR is needed in a query.
- Mixing up static and dynamic parameter queries.
- Confusing the conceptual, logical and physical ERDs: the conceptual has no attributes; the physical has data types.

## Exam technique

- When asked to **design** tables, list each field, its data type, its size and its key status.
- State the relationship type and where the foreign key goes. In a one-to-many relationship, it goes in the "many" table.
- For a **query**, state the fields, the criteria and the sort order.
- For a **choose and justify** question, link the choice to the user's needs, for example "a dynamic parameter, because the user searches for a different genre each time".

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 10 Database and file concepts, section 10.1 Creating a database.
