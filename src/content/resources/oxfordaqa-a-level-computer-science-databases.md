---
title: "OxfordAQA A-Level Computer Science: Databases (9645)"
seoTitle: "OxfordAQA A-Level CS 9645 Databases Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA International A-level Computer Science databases: ER modelling, keys, normalisation, SQL, record locks and Big Data."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This study guide teaches topic 15, Databases, of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. It covers sections 3.15.1.1 to 3.15.1.5 (relational databases) and 3.15.2 (Big Data). Every outcome here is International A-level only, tested in the written Unit 4 paper.

The specification names no SQL dialect, so queries use standard SQL; each was checked in SQLite.

Then test yourself with the [databases practice set](/resources/oxfordaqa-a-level-computer-science-databases-practice/) and recap with the [short notes](/resources/oxfordaqa-a-level-computer-science-databases-revision-notes/). Big Data links to [functional programming](/resources/oxfordaqa-a-level-computer-science-functional-programming/), and client-server ideas with [networking](/resources/oxfordaqa-a-level-computer-science-networking-and-cyber-security/). See also the [9645 hub](/boards/oxfordaqa/a-level/computer-science/), the [topic checklist](/checklists/oxfordaqa/a-level/computer-science/) and our [diagnostics](/diagnostics/).

## What this topic covers

All sections are International A-level only.

| Section | What you must be able to do |
|---|---|
| 3.15.1.1 Data models and ER modelling | Model a scenario; draw ER diagrams; write entity descriptions |
| 3.15.1.2 Key concepts | Explain a relational database; define the key terms |
| 3.15.1.3 Normalisation | Normalise to third normal form; say why we normalise |
| 3.15.1.4 SQL | Query and change data across tables; use aggregates; define a table with keys |
| 3.15.1.5 Client server databases | Concurrent access, lost updates, record locks |
| 3.15.2 Big Data | Volume, velocity, variety; distributed processing; fact-based model; graph schemas |

## The running scenario

Wenlowe Clock Restorers repairs antique clocks:

- a customer may bring in several clocks, but each clock belongs to one customer
- each restorer carries out many services, and each service is done by one restorer
- a clock can be serviced many times, at most once on any day.

## Relational database key concepts (3.15.1.2)

A **relational database** stores data in linked tables. Each table holds data about one entity type, each row is one record, and tables are linked by storing one table's primary key as a field in another.

| Abstract model term | Implemented database term | Meaning |
|---|---|---|
| Attribute | Field | One property of an entity, such as YearMade |
| Entity identifier | Primary key | Attribute(s) whose value is unique for every record |
| Composite entity identifier | Composite primary key | An identifier made from two or more attributes together |
| Relation | Table | A set of records about one entity type |

A **foreign key** links two tables: it is a field holding values of another table's primary key.

## Data models and ER diagrams (3.15.1.1)

### Entity descriptions

You write each entity in the form Entity(Attribute1, Attribute2, ...). The specification allows underlining to mark the identifier; here it is shown in **bold**.

```text
Customer(CustomerID, Name, Town)
Clock(ClockID, ClockType, Maker, YearMade, CustomerID)
Restorer(RestorerID, Name, HourlyRate, Senior)
Service(ClockID, ServiceDate, RestorerID, StartTime, Hours, Paid)
```

Identifiers: Customer(**CustomerID**), Clock(**ClockID**), Restorer(**RestorerID**) and Service(**ClockID**, **ServiceDate**). Service has a composite identifier because one clock gets many services, but never two on the same day. ClockID and RestorerID in Service are foreign keys, as is CustomerID in Clock.

### Drawing the relationships

The specification marks the "many" end of a line with a fork (crow's foot):

```text
One-to-many:    A ────────<  B     (one A, many B)
Many-to-one:    A >────────  B
One-to-one:     A ─────────  B
Many-to-many:   A >───────<  B
```

Restorer to Clock is many-to-many. A relational database cannot store that directly, so a link entity, Service, sits between them:

```text
Customer ─────< Clock ─────< Service >───── Restorer
```

### Worked example: building the model

1. Nouns that need several facts stored become entities.
2. Find each relationship's degree by asking both ways: "clocks per customer?", "customers per clock?".
3. Replace each many-to-many relationship with a link entity.
4. Put the foreign key on the "many" side of each one-to-many relationship.

So CustomerID goes into Clock; ClockID in Customer would need several values in one field.

## Normalisation (3.15.1.3)

Before the business was modelled, it kept one flat service log:

| ClockID | ClockType | Maker | CustID | CustName | Town | ServiceDate | RestorerID | RestorerName | Hours |
|---|---|---|---|---|---|---|---|---|---|
| 7 | Longcase | Aldous | 201 | Kenward | Ashgill | 2026-03-02 | 31 | Lucan Treave | 3.0 |
| 8 | Bracket | Mosk | 201 | Kenward | Ashgill | 2026-03-02 | 32 | Linnea Kettleby | 1.5 |
| 7 | Longcase | Aldous | 201 | Kenward | Ashgill | 2026-04-14 | 32 | Linnea Kettleby | 2.0 |
| 10 | Longcase | Ferrow | 203 | Szabo | Ashgill | 2026-04-14 | 31 | Lucan Treave | 4.0 |

### Why databases are normalised

- **Update problem:** Kenward's town appears in three rows. If Kenward moves and one row is missed, the data becomes inconsistent.
- **Insertion problem:** a newly hired restorer cannot be recorded until they have done a service, because a row needs a ClockID and ServiceDate.
- **Deletion problem:** deleting the only service for clock 10 also deletes every fact about customer Szabo.

Normalising stores each fact once. That removes these problems, keeps data consistent and saves storage.

### Properties of a relation in third normal form

A relation is in third normal form (3NF) when:

1. each field holds one atomic value and there are no repeating groups of fields
2. every non-key attribute depends on the whole of the primary key, not just part of a composite key
3. no non-key attribute depends on another non-key attribute.

You will not be asked to tell first, second and third normal forms apart, so aim for 3NF.

### Worked example: normalising the service log

**Step 1. Find the key.** Neither ClockID nor ServiceDate is unique alone, but the pair is. Key: (ClockID, ServiceDate).

**Step 2. Remove partial dependencies.** ClockType, Maker, CustID, CustName and Town depend only on ClockID, which is part of the key. Move them out with ClockID as their key, leaving ClockID behind as a foreign key.

**Step 3. Remove non-key dependencies.** In the new clock relation, CustName and Town depend on CustID, which is not the key. Move them to a Customer relation. In the service relation, RestorerName depends on RestorerID, so move it to a Restorer relation.

The result is the four 3NF relations listed under entity descriptions above. Attributes missing from the log (YearMade, HourlyRate, Senior, StartTime, Paid) depend only on their relation's key.

Now Kenward's town is stored once, new restorers can be added, and deleting a service keeps the customer.

## SQL (3.15.1.4)

### Defining a table

```sql
CREATE TABLE Service (
  ClockID     INTEGER,
  ServiceDate DATE,
  RestorerID  INTEGER,
  StartTime   TIME,
  Hours       REAL,
  Paid        BOOLEAN,
  PRIMARY KEY (ClockID, ServiceDate),
  FOREIGN KEY (RestorerID) REFERENCES Restorer(RestorerID)
);
```

Types: INTEGER, REAL (FLOAT in some systems), VARCHAR(n) for strings, BOOLEAN, DATE and TIME. Listing two fields in PRIMARY KEY makes a composite key. The FOREIGN KEY constraint rejects any RestorerID not already in Restorer. A single-field key can follow its field: `RestorerID INTEGER PRIMARY KEY`.

### Retrieving data from several tables

The examples use six Service rows: the four logged above (all paid except clock 7 on 2026-04-14), plus two for clock 9, a Carriage clock owned by a Draymoor customer: 2026-03-09 by Olu Yewdale (restorer 33, 2.5 hours, unpaid) and 2026-05-05 by Lucan Treave (1.0 hour, paid).

In the WHERE clause, match each foreign key to the primary key it references, then add the search conditions.

**Example 1.** List the date, clock type and restorer for every unpaid service, oldest first.

```sql
SELECT Service.ServiceDate, Clock.ClockType, Restorer.Name
FROM Service, Clock, Restorer
WHERE Service.ClockID = Clock.ClockID
  AND Service.RestorerID = Restorer.RestorerID
  AND Service.Paid = FALSE
ORDER BY Service.ServiceDate;
```

| ServiceDate | ClockType | Name |
|---|---|---|
| 2026-03-09 | Carriage | Olu Yewdale |
| 2026-04-14 | Longcase | Linnea Kettleby |

Three tables need two join conditions; miss one and rows pair up wrongly. ORDER BY sorts ascending unless you add DESC.

### Aggregate functions and GROUP BY

**Example 2.** For each restorer, give the number of services and the total hours, busiest first.

```sql
SELECT Restorer.Name, COUNT(*) AS Jobs, SUM(Service.Hours) AS TotalHours
FROM Restorer, Service
WHERE Restorer.RestorerID = Service.RestorerID
GROUP BY Restorer.Name
ORDER BY TotalHours DESC;
```

| Name | Jobs | TotalHours |
|---|---|---|
| Lucan Treave | 3 | 8.0 |
| Linnea Kettleby | 2 | 3.5 |
| Olu Yewdale | 1 | 2.5 |

GROUP BY gives one row per restorer, with COUNT and SUM worked out within each group. Without GROUP BY, an aggregate returns one value for all matching rows.

**Example 3.** Shortest, longest and mean service time for clocks owned by customers in Ashgill.

```sql
SELECT MIN(Service.Hours), MAX(Service.Hours), AVG(Service.Hours)
FROM Service, Clock, Customer
WHERE Service.ClockID = Clock.ClockID
  AND Clock.CustomerID = Customer.CustomerID
  AND Customer.Town = 'Ashgill';
```

Four services match (3.0, 1.5, 2.0 and 4.0 hours), so the result is **1.5, 4.0 and 2.625**.

### Changing data

```sql
UPDATE Service SET Paid = TRUE
WHERE ClockID = 9 AND ServiceDate = '2026-03-09';

INSERT INTO Service (ClockID, ServiceDate, RestorerID, StartTime, Hours, Paid)
VALUES (8, '2026-06-01', 33, '10:30', 2.0, FALSE);

DELETE FROM Service
WHERE ClockID = 7 AND ServiceDate = '2026-03-02';
```

Using the whole composite key in WHERE changes exactly one row. Afterwards the table has 6 rows, 4 of them paid. With no WHERE clause, UPDATE and DELETE affect every row.

## Client server databases (3.15.1.5)

In a client server database system, one server holds the database and many clients use it at the same time. This simultaneous use is **concurrent access**.

### The lost update problem

Wenlowe's two workshop terminals share a parts table. The stock of one mainspring is 14.

| Step | Terminal A | Terminal B | Stored value |
|---|---|---|---|
| 1 | reads 14 | | 14 |
| 2 | | reads 14 | 14 |
| 3 | uses 3, saves 11 | | 11 |
| 4 | | uses 5, saves 9 | 9 |

The correct stock is 14 − 3 − 5 = 6, but 9 is stored: A's update was saved first, then overwritten by B.

### Record locks

A **record lock** prevents this. When a client opens a record to change it, the record is locked, and no other client can update it until the change is saved and the lock released. B waits, then reads 11 and saves 6, so integrity is kept.

## Big Data (3.15.2)

"Big Data" is a catch-all term for data that cannot be stored or processed using traditional methods. It is described by:

- **volume**: too big to fit on a single server
- **velocity**: data streams in and responses are needed within milliseconds to seconds
- **variety**: structured and unstructured data, text and multimedia.

The hardest part is often the lack of structure: it makes analysis much harder, and relational databases do not fit because they need rows and columns.

### Distributed processing and functional programming

Data too big for one server must be processed across several machines. Functional programming makes correct, efficient distributed code easier to write:

- **immutable data structures** cannot be changed, so machines never interfere with each other's data
- **statelessness** means a function's result depends only on its inputs, so any machine can run it
- **higher-order functions** combine results from different servers (map-reduce).

Example: parking-bay sensors send 1 (occupied) or 0 (free). The same stateless function is mapped over each server's readings to give partial totals, then a higher-order reduce merges them:

| Zone | Server 1 total | Server 2 total | Combined |
|---|---|---|---|
| Harbour | 1 | 2 | 3 |
| Market | 1 | 0 | 1 |
| North | 1 | 1 | 2 |

### The fact-based model

Each fact captures a single piece of information, for example "bay 118 reported occupied at 08:14:05 on 3 June 2026". Facts are recorded with a timestamp and are added, never overwritten, so the full history is kept.

### Graph schemas

A graph schema captures the structure of a dataset. An entity is an oval **node**; its **properties** are rectangles joined to the node by dashed lines; relationships are solid **edges** between nodes, labelled with text.

```text
 [Permit: Resident]                [Zone: North]
        ┊                                ┊
  ( Driver Pryor ) ───parked in─── ( Bay 118 )
        ┊                                ┊
 [Since: 2024]                     [Type: Short stay]
```

Round brackets stand for ovals, square brackets for rectangles and dotted lines for dashed lines.

## Common errors

- A non-key attribute still depending on another non-key attribute.
- A join condition missing from a multi-table SELECT.
- A non-aggregated field selected but not listed in GROUP BY.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.15 Databases.
