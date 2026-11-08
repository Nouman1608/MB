---
title: "A Level Computer Science: Databases (Cambridge 9618)"
seoTitle: "Cambridge 9618 Databases Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2027-2029"
stage: "AS"
order: 8
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-concepts"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "database-management-systems-dbms"
  - qualification: "a-level"
    topic: "databases"
    subtopic: "ddl-and-dml"
description: "Study guide to relational databases, keys, E-R diagrams, normalisation to 3NF, DBMS features and SQL for Cambridge AS & A Level Computer Science 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

A relational database stores data in linked tables so that each fact is held once, can be kept consistent, and can be queried in any combination. Topic 8 of Cambridge International AS & A Level Computer Science 9618 asks you to explain why this beats a file-based approach, use the correct terminology, normalise a design to third normal form (3NF), describe what a database management system (DBMS) provides, and read and write SQL.

Related: [Databases revision notes](/resources/a-level-computer-science-databases-revision-notes/) · [Databases practice questions](/resources/a-level-computer-science-databases-practice/)

## Where this fits in 9618

Topic 8 is AS Level content, examined in Paper 1 Theory Fundamentals (1 hour 30 minutes, 75 marks, sections 1 to 8). Database questions usually start from a scenario (a school, a vet, a sports club) and move from terminology to table design to SQL. SQL is written by hand on paper, so the exact syntax matters.

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 8.1 Database Concepts | Show understanding of the limitations of a file-based approach, and the features of a relational database that address them |
| 8.1 | Use the terminology: entity, table, record, field, tuple, attribute, primary key, candidate key, secondary key, foreign key, relationship (one-to-many, one-to-one, many-to-many), referential integrity, indexing |
| 8.1 | Use an entity-relationship (E-R) diagram to document a database design |
| 8.1 | Show understanding of normalisation (1NF, 2NF, 3NF); explain why tables are or are not in 3NF; produce a normalised design |
| 8.2 DBMS | Show understanding of DBMS features: data management including a data dictionary, data modelling, logical schema, data integrity, data security including backup and access rights |
| 8.2 | Show understanding of the developer interface and the query processor |
| 8.3 DDL and DML | Understand that the DBMS uses DDL to create and modify structure and DML to query and maintain data, and that SQL is the industry standard for both |
| 8.3 | Write SQL DDL: CREATE DATABASE, CREATE TABLE (CHARACTER, VARCHAR(n), BOOLEAN, INTEGER, REAL, DATE, TIME), ALTER TABLE, PRIMARY KEY, FOREIGN KEY ... REFERENCES |
| 8.3 | Write SQL DML on at most two tables: SELECT ... FROM, WHERE, ORDER BY, GROUP BY, INNER JOIN, SUM, COUNT, AVG, INSERT INTO, DELETE FROM, UPDATE |

## What is wrong with a file-based approach?

In a file-based system each department or program keeps its own files. A college might have one file of students for the library and another for the exams office. This causes:

- **Data redundancy**: the same data (a student's address) is stored in several files, wasting space.
- **Data inconsistency**: when the address changes in one file but not another, the copies disagree, and nobody knows which is right.
- **Data dependence**: the structure of a file is built into the programs that use it, so changing the file (adding a field) means rewriting every program.
- **Difficult queries**: combining data from separate files needs a new program written for each question.
- **Weak security and integrity controls**: access is usually all-or-nothing for each file, and there is no central way to enforce rules on the data.

A **relational database** answers each point. Data is stored once in tables linked by keys, so redundancy and inconsistency are reduced. The DBMS sits between programs and data, so the structure can change without rewriting programs (**program-data independence**). Any combination of tables can be queried with SQL, and the DBMS enforces access rights and integrity rules centrally. November 2024 examiners noted that answers often repeated the limitations instead of explaining how the relational approach solves them.

## What do the key terms mean?

- An **entity** is a thing about which data is stored (a student, a book). Each entity becomes a **table**.
- A **record** or **tuple** is one row of a table: the data about one instance of the entity.
- A **field** or **attribute** is one column: one item of data stored about each instance.
- A **candidate key** is an attribute, or minimal set of attributes, whose value is unique for every record. A table may have several candidate keys.
- The **primary key** is the candidate key chosen to identify each record uniquely.
- A **secondary key** is a candidate key that was not chosen as the primary key; it can still be indexed and used to search for records.
- A **foreign key** is an attribute in one table that is the primary key of another table, creating the link between them.
- **Referential integrity** means every foreign key value matches an existing primary key value, so a record never refers to a record that does not exist. The DBMS can, for example, refuse to delete a member who still has loans.
- An **index** is a separate data structure holding key values and the positions of their records, which makes searching and sorting on that field faster.

## How are relationships drawn on an E-R diagram?

Each entity is a box; a line joins related entities. In crow's-foot notation the "many" end has three prongs.

- **One-to-one (1:1)**: one record in A links to one record in B, e.g. Employee and ParkingSpace.
- **One-to-many (1:M)**: one record in A links to many in B, e.g. one Customer places many Orders. The foreign key goes in the "many" table (Order holds CustomerID).
- **Many-to-many (M:M)**: e.g. Students and Courses. A relational database cannot hold this directly, so it is resolved with a **link table** (Enrolment) holding both primary keys, giving two 1:M relationships.

## How do you normalise a table to 3NF?

- **First normal form (1NF)**: no repeating groups of attributes; every field holds a single (atomic) value; there is a primary key.
- **Second normal form (2NF)**: in 1NF, and every non-key attribute depends on the **whole** primary key, with no **partial dependencies**. Only tables with a composite key can fail 2NF.
- **Third normal form (3NF)**: in 2NF, and there are no **non-key dependencies** (transitive dependencies): no non-key attribute depends on another non-key attribute.

A useful summary: every non-key attribute depends on the key, the whole key and nothing but the key.

### Worked example: normalising vet clinic visits

Unnormalised data for one owner's visits:

| OwnerID | OwnerName | Phone | PetID, PetName, Species, VisitDate, VetID, VetName (repeated) |
|---|---|---|---|

(Primary key attributes are shown in bold; on paper you would underline them.)

**Step 1, to 1NF.** Remove the repeating group so each row is one visit, with a key that identifies each row:

VISIT(**PetID**, **VisitDate**, PetName, Species, OwnerID, OwnerName, Phone, VetID, VetName)

**Step 2, to 2NF.** The key is (PetID, VisitDate). PetName, Species, OwnerID, OwnerName and Phone depend only on PetID, a partial dependency, so move them out:

PET(**PetID**, PetName, Species, OwnerID, OwnerName, Phone)
VISIT(**PetID**, **VisitDate**, VetID, VetName)

**Step 3, to 3NF.** In PET, OwnerName and Phone depend on OwnerID, a non-key attribute. In VISIT, VetName depends on VetID. Move both out:

OWNER(**OwnerID**, OwnerName, Phone)
PET(**PetID**, PetName, Species, OwnerID)
VET(**VetID**, VetName)
VISIT(**PetID**, **VisitDate**, VetID)

Foreign keys: OwnerID in PET, PetID and VetID in VISIT. Each table is now in 3NF because every non-key attribute depends only on the whole primary key of its own table. The design assumes a pet has at most one visit a day; if not, a VisitID would be a better key.

## What does a DBMS provide?

- **Data management** through a **data dictionary**: metadata describing every table, field, data type, validation rule, key and relationship.
- **Data modelling**: tools for designing tables and relationships (for example, E-R diagrams).
- **Logical schema**: the overall design of the database as seen by its users, independent of how it is physically stored.
- **Data integrity**: validation rules, referential integrity and controlled updates when several users change data at once.
- **Data security**: user accounts and **access rights** for individuals or groups (for example, read-only for some staff), and **backup** procedures so data can be restored.
- The **developer interface** lets developers build tables, forms, queries and reports without writing everything in code. The **query processor** takes a query (such as an SQL statement), works out how to carry it out efficiently, runs it against the tables and returns the result.

## How do you write SQL for Paper 1?

**DDL** defines structure:

```sql
CREATE DATABASE VetClinic;

CREATE TABLE OWNER(
  OwnerID CHARACTER(5),
  OwnerName VARCHAR(40),
  Phone VARCHAR(15),
  PRIMARY KEY (OwnerID)
);

CREATE TABLE PET(
  PetID CHARACTER(6),
  PetName VARCHAR(20),
  Species VARCHAR(15),
  Insured BOOLEAN,
  OwnerID CHARACTER(5),
  PRIMARY KEY (PetID)
);

ALTER TABLE PET ADD FOREIGN KEY (OwnerID) REFERENCES OWNER(OwnerID);
ALTER TABLE PET ADD DateOfBirth DATE;
```

**DML** queries and maintains data:

```sql
SELECT PetName, Species
FROM PET
WHERE Insured = TRUE
ORDER BY PetName;

SELECT Species, COUNT(PetID)
FROM PET
GROUP BY Species;

SELECT OWNER.OwnerName, PET.PetName
FROM OWNER
INNER JOIN PET ON OWNER.OwnerID = PET.OwnerID
WHERE PET.Species = 'Cat';

INSERT INTO OWNER (OwnerID, OwnerName, Phone)
VALUES ('OW017', 'Haddad', '0791234567');

UPDATE PET SET Insured = FALSE WHERE PetID = 'P00342';

DELETE FROM PET WHERE PetID = 'P00342';
```

COUNT counts rows; SUM adds a numeric field; AVG finds its mean. When an aggregate is wanted for each group (each species), GROUP BY is required.

## Common mistakes

- Using SUM where COUNT is needed, or leaving out GROUP BY when aggregating per group (June 2024, November 2024, June 2025 examiner reports).
- Using UPDATE to add a foreign key or field. Structure changes use ALTER TABLE (June 2024).
- Testing a Boolean field against a string such as 'TRUE'. Write `= TRUE` (June 2025).
- Writing "database" when you mean "table".
- Assuming the primary key must be the first field listed, or giving a primary key when a foreign key is asked for (June 2025).
- Saying a table is in 3NF without naming the dependency that was removed.

## Frequently asked questions

**Is a tuple the same as a record?** Yes. "Tuple" is the formal relational term for one row; "attribute" is the formal term for a field.

**Where does the foreign key go in a one-to-many relationship?** In the table on the "many" side. One owner has many pets, so OwnerID is a foreign key in PET.

**Why can't a many-to-many relationship be stored directly?** A field holds a single value, so one record cannot list many linked records without a repeating group. A link table turns the M:M relationship into two 1:M relationships.

**Do I need to write SQL for three tables?** No. The 9618 syllabus limits DML queries to at most two tables.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029 (and the 2026 syllabus, which has the same content), Topic 8 Databases, sections 8.1 to 8.3. Examiner comments are from Cambridge's Principal Examiner Reports, summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
