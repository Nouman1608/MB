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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-06
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--09-normalise-once.webp" width="900" height="880" alt="A flat service log of four rows repeats the customer name and town: Kenward of Ashgill appears in three rows (for clocks 7, 8 and 7 again) and Szabo of Ashgill in one. After normalising, a Customer table holds each customer once: 201 Kenward Ashgill and 203 Szabo Ashgill. A Clock table links each clock to its customer using the foreign key CustomerID: clock 7 and 8 belong to 201 and clock 10 to 203. Kenward’s town is now stored once, so a change to it is made in one place." loading="lazy">
  <figcaption>Normalising stores Kenward’s town once instead of three times.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--10-sql-join.webp" width="900" height="1018" alt="Two unpaid services are joined to their clock and restorer. For the service of 2026-03-09, its ClockID 9 matches the Clock row for the Carriage clock, and its RestorerID 33 matches the Restorer row for Olu Yewdale, giving the result row 2026-03-09, Carriage, Olu Yewdale. For the service of 2026-04-14, ClockID 7 matches the Longcase clock and RestorerID 32 matches Linnea Kettleby, giving 2026-04-14, Longcase, Linnea Kettleby. A service whose Paid field is TRUE is not selected. Each WHERE condition matches a foreign key to the primary key it references, so three tables need two join conditions." loading="lazy">
  <figcaption>A multi-table SELECT pairs rows whose foreign and primary keys match.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--11-sql-group-by.webp" width="900" height="894" alt="Six Service rows are grouped by restorer. Lucan Treave (restorer 31) has three rows of 3.0, 4.0 and 1.0 hours, giving 3 jobs and 8.0 hours. Linnea Kettleby (restorer 32) has two rows of 1.5 and 2.0 hours, giving 2 jobs and 3.5 hours. Olu Yewdale (restorer 33) has one row of 2.5 hours, giving 1 job and 2.5 hours. The result table, ordered by TotalHours descending, has one row per restorer: Lucan Treave 3 and 8.0, Linnea Kettleby 2 and 3.5, Olu Yewdale 1 and 2.5." loading="lazy">
  <figcaption>GROUP BY gives one row per restorer with its COUNT and SUM.</figcaption>
</figure>


## Client server databases (3.15.1.5)

- **Concurrent access:** many clients use one server's database at the same time.
- **Lost update problem:** two clients read the same record, both change it, and the second save overwrites the first.
- **Record lock:** the record is locked while one client updates it, so others cannot update it until the lock is released. This preserves integrity.

**Worked reminder.** A climbing-wall class has 40 places. Clients A and B both read 40. A books 6 and saves 34; B books 9 and saves 31. The stored value is 31, but the correct value is 40 − 6 − 9 = **25**. A's booking is lost. With a lock, B reads 34 after A finishes and saves 25.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--12-lost-update-lock.webp" width="900" height="1060" alt="Two workshop terminals share a parts table where the stock of a mainspring is 14. Without a record lock: terminal A reads 14, terminal B reads 14, A uses 3 and saves 11, then B uses 5 and saves 9, overwriting A’s change. The stored value is 9 although the correct stock is 14 minus 3 minus 5, which is 6. With a record lock: terminal A reads 14 and locks the record, B has to wait, A saves 11 and releases the lock, then B reads 11, uses 5 and saves 6, so the correct stock of 6 is stored." loading="lazy">
  <figcaption>Without a lock 9 is stored; with a lock the correct 6 is stored.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--08-er-diagram.webp" width="900" height="880" alt="Four entities are drawn as boxes. Customer has identifier CustomerID. Clock has identifier ClockID and a foreign key CustomerID. Restorer has identifier RestorerID. Service, the link entity, has the composite identifier ClockID and ServiceDate, with ClockID and RestorerID as foreign keys. A line from Customer to Clock ends in a crow’s foot at Clock: one customer, many clocks. A line from Clock to Service ends in a crow’s foot at Service: one clock, many services. A line from Restorer to Service ends in a crow’s foot at Service: one restorer, many services. A dashed crossed-out line directly between Restorer and Clock shows a many-to-many relationship that a relational database cannot store directly, which is why the link entity Service is used." loading="lazy">
  <figcaption>Four entities, crow’s foot relationships, and why Service links Restorer and Clock.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--13-map-reduce.webp" width="900" height="830" alt="Parking-bay sensors send 1 for occupied or 0 for free. The same stateless function is mapped over each server’s readings to give partial totals per zone. Server 1 gives Harbour 1, Market 1 and North 1. Server 2 gives Harbour 2, Market 0 and North 1. A higher-order reduce function then merges the partial totals into combined totals: Harbour 3, Market 1 and North 2. Immutable data means the servers never interfere with each other’s data." loading="lazy">
  <figcaption>Partial totals mapped on two servers are merged by a reduce into combined totals.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-a-level-computer-science-databases--14-graph-schema.webp" width="900" height="840" alt="An oval node Driver Pryor and an oval node Bay 118 are joined by a solid edge labelled parked in. Driver Pryor has two properties drawn as rectangles joined by dashed lines: Permit Resident and Since 2024. Bay 118 has two properties: Zone North and Type Short stay. A key shows that ovals are entities, rectangles are properties joined by dashed lines, and solid labelled lines are relationships." loading="lazy">
  <figcaption>A graph schema for a driver parked in a bay, with properties on both nodes.</figcaption>
</figure>


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

## Frequently asked questions

**What is the difference between a primary key and a foreign key?**
A primary key uniquely identifies each record in its own table. A foreign key is a field in one table that holds values of another table's primary key, linking the two tables.

**What are the rules for third normal form in OxfordAQA 9645?**
A relation in 3NF holds atomic values with no repeating groups, every non-key attribute depends on the whole primary key, and no non-key attribute depends on another non-key attribute. The memory hook is "the key, the whole key and nothing but the key".

**How do you handle a many-to-many relationship in an ER diagram?**
A relational database cannot implement a many-to-many relationship directly, so replace it with a link entity that gives two one-to-many relationships. The foreign keys go on the "many" side.

**What is the lost update problem and how does a record lock prevent it?**
Two clients read the same record, both change it, and the second save overwrites the first. A record lock stops other clients updating the record while one client is updating it, until the lock is released.

**What are the three Vs of Big Data?**
Volume means the data is too big to fit on a single server, velocity means data streams in and responses are needed within milliseconds to seconds, and variety means it comes in many forms, structured and unstructured. Explain what each means rather than just naming them.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.15 Databases.
