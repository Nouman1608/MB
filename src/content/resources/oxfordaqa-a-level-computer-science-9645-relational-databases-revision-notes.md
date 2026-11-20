---
title: "OxfordAQA A-Level Computer Science (9645): Relational databases -- Revision Notes"
seoTitle: "OxfordAQA 9645 Relational Databases Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15 – Databases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 15.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases-9645"
  - qualification: "a-level"
    topic: "databases-9645"
    subtopic: "relational-databases-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.15.1: ER models, keys, normalisation to 3NF, SQL commands and functions, lost updates and record locks."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.15.1 Relational databases** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.15, examined in Unit 4). For worked examples, see the [relational databases study guide](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases/), then practise with the [relational databases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-practice/).

## What the specification requires

- **3.15.1.1** Produce a data model from given requirements for a scenario with several entities; produce **entity relationship diagrams** and entity descriptions in the form Entity1(Attribute1, Attribute2, ...).
- **3.15.1.2** Explain a relational database; define attribute/field, entity identifier/primary key, composite primary key, foreign key and relation/table.
- **3.15.1.3** Normalise relations to **third normal form** and know why databases are normalised.
- **3.15.1.4** Use **SQL** to retrieve, update, insert and delete data from several tables; use aggregate functions; define a table, with a primary key and a simple foreign key.
- **3.15.1.5** Client server databases, **concurrent access**, the **lost update** problem and **record locks**.

## Key terms

| Abstract term | Implemented term | Meaning |
|---|---|---|
| Relation | Table | Set of records about one entity |
| Attribute | Field | One property of an entity |
| Entity identifier | Primary key | Value unique for each record |
| Composite entity identifier | Composite primary key | Two or more attributes together unique |
| | Foreign key | A field holding the primary key of another table |

## ER models

- Write entities as Entity(**Identifier**, Attribute, ...).
- Relationship degrees: one-to-many, many-to-one, one-to-one, many-to-many.
- The foreign key goes on the **many** side of a one-to-many relationship.
- **Many-to-many** cannot be stored directly: add a **link entity** whose key contains both identifiers or has its own, giving two one-to-many relationships.

Bike hire model: Customer(**CustomerID**, Name, Phone), Bike(**BikeID**, BikeType, DailyRate), Hire(**HireID**, CustomerID, BikeID, StartDate, Days). Customer to Bike is many-to-many; Hire is the link.

## Normalisation

- **Why:** to avoid redundancy and the **update**, **insertion** and **deletion** anomalies it causes.
- **3NF:** every non-key attribute depends on **the key, the whole key, and nothing but the key**.

| Problem in the table | Fix |
|---|---|
| Attribute depends on only part of a composite key | Move it to a table keyed by that part |
| Non-key attribute depends on another non-key attribute | Move both to a new table keyed by the determining attribute |
| Repeated groups of attributes | Put them in their own rows or table |

Example: HireLog(HireID, CustomerID, CustomerName, Phone, BikeID, BikeType, DailyRate, StartDate, Days) splits into Customer, Bike and Hire.

## SQL reminders

```sql
SELECT Name, BikeType, Days
FROM Customer, Hire, Bike
WHERE Customer.CustomerID = Hire.CustomerID
  AND Hire.BikeID = Bike.BikeID
  AND Days >= 3
ORDER BY Days DESC, Name;
```

| Command or function | Purpose |
|---|---|
| SELECT ... FROM ... WHERE | choose columns, tables and conditions |
| ORDER BY | sort (DESC for descending) |
| GROUP BY | one row per group, used with aggregates |
| COUNT, SUM, AVG, MIN, MAX | aggregate functions |
| UPDATE ... SET ... WHERE | change data |
| INSERT INTO ... VALUES | add a record |
| DELETE FROM ... WHERE | remove records |
| CREATE TABLE | define a table, data types, PRIMARY KEY, FOREIGN KEY |

- Match each foreign key to its primary key in WHERE when using several tables.
- Always add WHERE to UPDATE and DELETE.
- Results for the bike hire data: hires per type are Mountain 2, Road 3, Tandem 1; total spend is Ayesha Khan 129.00, Ben Ortiz 145.00, Chloe Mensah 72.00; the 6 hires have average 2.83 days (total 17).

```sql
CREATE TABLE Hire (
  HireID     INTEGER PRIMARY KEY,
  CustomerID INTEGER,
  BikeID     INTEGER,
  StartDate  DATE,
  Days       INTEGER,
  FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);
```

## Client server databases

- **Concurrent access:** many clients use the database at the same time.
- **Lost update:** two clients read the same value, both change it, and the second save overwrites the first.
- **Record lock:** a client that is changing a record locks it; others must wait until it is saved and unlocked.

| Step | Without locks | With locks |
|---|---|---|
| Stock is 10; A sells 3, B sells 2 | A and B both read 10 | A locks and reads 10 |
| | A writes 7 | B must wait |
| | B writes 8 (A's update lost) | A writes 7 and unlocks |
| Final value | 8 (wrong) | B reads 7 and writes 5 (correct) |

## Exam traps

- **Many-to-many** must be broken down with a link entity.
- **Foreign key placement:** on the many side.
- **3NF wording:** key, whole key, and nothing but the key.
- **Join conditions:** forgetting them pairs every row with every other row.
- **GROUP BY:** use it with an aggregate; each selected plain field must be grouped.
- **Locks cost time:** waiting is the price of integrity.
- **Terms:** use attribute/entity identifier for models, field/primary key for implemented databases.

## Quick self-test

1. What is a foreign key?
2. What is a composite primary key?
3. How is a many-to-many relationship stored?
4. State one anomaly caused by redundancy.
5. State the three parts of the 3NF rule.
6. Which SQL clause sorts results?
7. Write an aggregate function that gives the number of rows.
8. What does `DELETE FROM Hire` with no WHERE do?
9. What is concurrent access?
10. What is the lost update problem?
11. How does a record lock prevent it?
12. For stock 10, A sells 3 and B sells 2 with locks. What is the final stock?

### Answers

1. A field that holds the primary key value of a record in another table.
2. A primary key made of two or more fields that together are unique.
3. With a link table (entity) that has one-to-many relationships to the two original tables.
4. Update, insertion or deletion anomaly.
5. Depends on the key, the whole key, and nothing but the key.
6. ORDER BY.
7. COUNT(*)
8. It deletes every row in the table.
9. Many clients using the database at the same time.
10. Two clients change the same record from the same old value and the second save overwrites the first.
11. It stops other clients updating the record until the first client has saved and released the lock.
12. 5.

## Next steps

- [Relational databases study guide](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases/)
- [Relational databases practice questions](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-practice/)
- [Big data revision notes](/resources/oxfordaqa-a-level-computer-science-9645-big-data-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.15.1 Relational databases.
