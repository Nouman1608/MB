---
title: "OxfordAQA A-Level Computer Science: Databases (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Databases Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Databases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 15
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases-9645"
description: "Condensed revision notes for OxfordAQA A-level Computer Science databases: key terms, 3NF, SQL syntax, lost updates, Big Data and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, read the [Databases study guide](/resources/oxfordaqa-a-level-computer-science-databases/) first.

These notes cover section 3.15 of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: 3.15.1.1 to 3.15.1.5 (relational databases) and 3.15.2 (Big Data). Everything here is International A-level only and belongs to the written Unit 4 paper.

Test yourself afterwards on the [databases practice set](/resources/oxfordaqa-a-level-computer-science-databases-practice/). Track the course with the [9645 hub](/boards/oxfordaqa/a-level/computer-science/) and [printable topic checklist](/checklists/oxfordaqa/a-level/computer-science/), or take one of the [free diagnostics](/diagnostics/). SQL here is standard SQL, since the specification names no dialect.

## Key terms (3.15.1.2)

| Term (model / implemented) | Definition |
|---|---|
| Relational database | Data held in separate tables, one per entity type, linked by common key fields |
| Attribute / field | A single property stored about an entity |
| Entity identifier / primary key | Attribute(s) that uniquely identify each record |
| Composite entity identifier / composite primary key | An identifier made from two or more attributes combined |
| Foreign key | A field matching another table's primary key, which links the two tables |
| Relation / table | A named set of records about one entity type |

"Attribute", "entity identifier" and "relation" belong to abstract models. "Field", "primary key" and "table" belong to implemented databases.

## Entity relationship modelling (3.15.1.1)

**Entity description:** Entity(Attribute1, Attribute2, ...), with the identifier underlined. For a composite identifier, underline every attribute in it.

**Relationship symbols** (the fork, or crow's foot, marks "many"):

| Degree | Line |
|---|---|
| One-to-many | `A ──────< B` |
| Many-to-one | `A >────── B` |
| One-to-one | `A ─────── B` |
| Many-to-many | `A >─────< B` |

**Method in steps: data model from requirements**

1. List the entities (things with several facts to store).
2. For each pair that is related, ask "how many of B per A?" and "how many of A per B?".
3. Replace every many-to-many with a link entity, giving two one-to-many relationships.
4. Put each foreign key on the "many" side.
5. Write each entity description and mark its identifier.

**Worked reminder.** A climbing wall records climbers, routes and ascents. A climber climbs many routes and a route is climbed by many climbers, so:

```text
Climber ──────< Ascent >────── Route
Ascent(ClimberID, RouteID, AscentDate, Attempts)
```

Identifier: (ClimberID, RouteID, AscentDate). ClimberID and RouteID are also foreign keys.

## Normalisation (3.15.1.3)

**A relation in third normal form (3NF):**

- holds atomic values only, with no repeating groups
- has every non-key attribute depending on the whole primary key
- has no non-key attribute depending on another non-key attribute.

Memory hook: each non-key attribute depends on "the key, the whole key and nothing but the key". You will not be asked to separate first, second and third normal forms.

**Method in steps: normalising a flat table**

1. Choose a primary key for the flat table (often composite).
2. Remove repeating groups so every field holds one value.
3. Any attribute that depends on only part of a composite key moves to a new relation keyed by that part.
4. Any attribute that depends on a non-key attribute moves to a new relation keyed by that attribute.
5. Leave a foreign key behind each time, so the tables still link.

**Why normalise?** Redundant copies disappear because every fact lives in one place. Data stays consistent and less storage is used. It avoids:

- update problems (a fact repeated in many rows gets changed in some but not others)
- insertion problems (a fact cannot be added without unrelated data)
- deletion problems (deleting one fact removes another).

## SQL (3.15.1.4)

| Task | Pattern |
|---|---|
| Retrieve | `SELECT fields FROM tables WHERE conditions ORDER BY field [DESC]` |
| Group | `SELECT field, COUNT(*) FROM table GROUP BY field` |
| Update | `UPDATE table SET field = value WHERE condition` |
| Insert | `INSERT INTO table (f1, f2) VALUES (v1, v2)` |
| Delete | `DELETE FROM table WHERE condition` |

| Function | Returns |
|---|---|
| COUNT | Number of rows (or non-empty values) |
| SUM | Total of a numeric field |
| AVG | Mean of a numeric field |
| MIN / MAX | Smallest / largest value |

**Defining a table**

```sql
CREATE TABLE Ascent (
  ClimberID  INTEGER,
  RouteID    INTEGER,
  AscentDate DATE,
  Attempts   INTEGER,
  Roped      BOOLEAN,
  PRIMARY KEY (ClimberID, RouteID, AscentDate),
  FOREIGN KEY (RouteID) REFERENCES Route(RouteID)
);
```

Data types to know: INTEGER, REAL (or FLOAT), VARCHAR(n) or CHAR(n) for strings, BOOLEAN, DATE, TIME, DATETIME. Keywords vary a little between database systems.

**Method in steps: multi-table SELECT**

1. List the fields to output, prefixed with table names.
2. List in FROM every table those fields, or the conditions, need, including any link tables in between.
3. For n tables, write n − 1 join conditions (foreign key = primary key).
4. Add the search conditions with AND.
5. Add GROUP BY for any non-aggregated output field when using aggregates, then ORDER BY.

## Client server databases (3.15.1.5)

- **Concurrent access:** many clients use one server's database at the same time.
- **Lost update problem:** two clients read the same record, both change it, and the second save overwrites the first.
- **Record lock:** the record is locked while one client updates it, so others cannot update it until the lock is released. This preserves integrity.

**Worked reminder.** A climbing-wall class has 40 places. Clients A and B both read 40. A books 6 and saves 34; B books 9 and saves 31. The stored value is 31, but the correct value is 40 − 6 − 9 = **25**. A's booking is lost. With a lock, B reads 34 after A finishes and saves 25.

## Big Data (3.15.2)

| Feature | Meaning |
|---|---|
| Volume | Too big to fit on a single server |
| Velocity | Streaming data, responses needed in milliseconds to seconds |
| Variety | Many forms: structured, unstructured, text, multimedia |

- The lack of structure is usually the hardest part: analysis is harder and relational databases need a row-and-column format.
- Data too big for one server means processing distributed across machines.
- Functional programming helps through immutable data structures, statelessness and higher-order functions such as map-reduce that combine results from different servers.
- **Fact-based model:** each fact captures a single piece of information; facts are timestamped and added, not overwritten.
- **Graph schema:** entity = oval node; property = rectangle attached by a dashed line; relationship = solid labelled edge between nodes.

## Must-know distinctions

- **Primary key vs foreign key:** a primary key identifies records in its own table; a foreign key points to the primary key of another table.
- **WHERE vs GROUP BY:** WHERE picks rows; GROUP BY puts the chosen rows into groups for aggregates.
- **One-to-many vs many-to-many:** a one-to-many relationship is implemented directly with a foreign key; a many-to-many needs a link table.
- **Abstract vs implemented terms:** relation/attribute/entity identifier vs table/field/primary key.
- **Relational vs Big Data storage:** relational tables suit structured data; unstructured, very large data needs other methods.

## Quick self-test

Use these tables for questions 4 to 8.

Route: (RouteID, Colour, Grade, Height) = (1, Red, 3, 9.5), (2, Blue, 5, 12.0), (3, Black, 6, 12.0), (4, Green, 4, 10.5)

Ascent: (ClimberID, RouteID, AscentDate, Attempts) = (71, 2, 2026-02-07, 3), (71, 4, 2026-02-07, 1), (72, 2, 2026-02-08, 5), (73, 3, 2026-02-08, 4), (72, 4, 2026-02-14, 2), (73, 2, 2026-02-14, 2)

1. Define a composite primary key.
2. Why can a many-to-many relationship not be implemented directly?
3. A table Booking(BookingID, CourseID, CourseName, Price) has CourseName depending on CourseID. Is it in 3NF? Explain.
4. Give the output of `SELECT COUNT(*) FROM Ascent WHERE RouteID = 2;`
5. Give the output of `SELECT RouteID, SUM(Attempts) FROM Ascent GROUP BY RouteID ORDER BY RouteID;`
6. Give the output of `SELECT AVG(Attempts) FROM Ascent WHERE ClimberID = 72;`
7. Give the output of `SELECT MAX(Height) FROM Route WHERE Grade < 6;`
8. Write SQL to list the colour of each route climber 73 climbed, with attempts, fewest attempts first.
9. Write SQL to change the grade of route 4 to 5.
10. State what a record lock does.
11. What does the specification describe as usually the hardest aspect of Big Data, and why?
12. In a graph schema, how is a property drawn?

### Answers

1. A primary key made of two or more attributes whose combined values are unique.
2. Each record would need several values in one foreign key field; a link table is needed instead.
3. No. CourseName depends on CourseID, a non-key attribute. Move it to Course(CourseID, CourseName).
4. **3**
5. **(2, 10), (3, 4), (4, 3)**
6. **3.5**
7. **12.0** (routes 1, 2 and 4 qualify).
8. `SELECT Route.Colour, Ascent.Attempts FROM Route, Ascent WHERE Route.RouteID = Ascent.RouteID AND Ascent.ClimberID = 73 ORDER BY Ascent.Attempts;` gives **Blue 2, Black 4**.
9. `UPDATE Route SET Grade = 5 WHERE RouteID = 4;`
10. It stops other clients updating a record while one client is changing it, until the lock is released.
11. Its lack of structure: it makes analysis harder and does not fit a row-and-column relational format.
12. As a rectangle joined to its entity's oval node by a dashed line.

## Where marks are usually lost

- Writing "ID" as the key of a link table when the real identifier is composite.
- Putting the foreign key in the wrong entity of a one-to-many relationship.
- Drawing ER lines with no crow's foot, or with it on the wrong end.
- Explaining normalisation only as "saving space" without mentioning consistency or the update, insertion and deletion problems.
- Stopping normalisation while a non-key attribute still depends on another non-key attribute.
- Missing join conditions, or omitting table names when two tables share a field name.
- Mixing aggregates and plain fields without GROUP BY.
- Writing UPDATE or DELETE without a WHERE clause.
- Describing the lost update problem without the sequence: both read, both change, second save overwrites first.
- Listing the three Vs with no explanation of what each means.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.15 Databases.
