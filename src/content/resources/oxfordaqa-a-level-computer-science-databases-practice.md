---
title: "OxfordAQA A-Level Computer Science: Databases (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Databases Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers on OxfordAQA A-level Computer Science databases: ER models, 3NF, SQL, record locks and Big Data."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover sections 3.15.1.1 to 3.15.1.5 and 3.15.2 (Databases) of the OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards. Unit 4, the written paper, examines this International A-level only topic. SQL is standard SQL, as the specification names no dialect.

Stuck? Return to the [databases study guide](/resources/oxfordaqa-a-level-computer-science-databases/) or the [condensed notes](/resources/oxfordaqa-a-level-computer-science-databases-revision-notes/). See also the [9645 course page](/boards/oxfordaqa/a-level/computer-science/), [printable topic checklist](/checklists/oxfordaqa/a-level/computer-science/) and [diagnostics](/diagnostics/).

Questions 3 to 10 use Rookhaven Rowing Club. Each outing uses one boat and one coach; a member rows in many outings and an outing has several members, each in a numbered seat.

**Data for questions 6 to 9**

Boat: (BoatID, BoatName, Seats) = (1, Heron, 4), (2, Teal, 4), (3, Grebe, 2)

Coach: (CoachID, CoachName) = (51, Bethan Corbishley), (52, Idris Ostby)

Member (extract): (MemberID, FirstName, Surname) = (601, Neve, Rafferty), (603, Anouk, Halloran), (605, Saskia, Tremlow), (606, Rufus, Farrant)

Outing:

| OutingID | BoatID | CoachID | OutingDate | StartTime | Coxed | DistanceKm |
|---|---|---|---|---|---|---|
| 301 | 1 | 51 | 2026-05-02 | 07:00 | FALSE | 8.0 |
| 302 | 2 | 52 | 2026-05-02 | 17:30 | TRUE | 6.5 |
| 303 | 1 | 52 | 2026-05-09 | 07:00 | TRUE | 10.0 |
| 304 | 3 | 51 | 2026-05-09 | 17:30 | FALSE | 5.0 |
| 305 | 2 | 51 | 2026-05-16 | 07:00 | FALSE | 7.5 |

CrewPlace (extract): (OutingID, MemberID, SeatNumber) = (303, 606, 1), (303, 605, 2), (303, 603, 3), (303, 601, 4), (304, 605, 1), (304, 603, 2)

## Questions

**1.** Define the terms **foreign key** and **composite primary key**. **[2]**

**2.** Explain the concept of a relational database. **[2]**

**3.** Rookhaven Rowing Club wants a database for the scenario described above.

**(a)** State the degree of the relationship between Member and Outing and explain how it is implemented. **[2]**
**(b)** Write entity descriptions for Outing and CrewPlace. Identify each entity identifier and each foreign key. **[4]**
**(c)** Draw an entity relationship diagram for Boat, Coach, Outing, CrewPlace and Member. **[3]**

**4.** The club's boat repairs were kept in one flat table:

| BoatID | BoatName | RepairDate | FaultCode | FaultDescription | RepairerID | RepairerName | RepairerTown | Cost |
|---|---|---|---|---|---|---|---|---|
| 1 | Heron | 2026-03-04 | F2 | Cracked rigger | 8 | Skerne Boatworks | Copley | 85.00 |
| 2 | Teal | 2026-03-04 | F5 | Split seat runner | 8 | Skerne Boatworks | Copley | 40.00 |
| 1 | Heron | 2026-04-11 | F5 | Split seat runner | 9 | Wyvern Oars | Hindmarsh | 45.00 |

A boat is repaired at most once on any day, and each repair fixes one fault. Normalise this data to third normal form. Give your answer as entity descriptions with identifiers and foreign keys identified. **[6]**

**5.** **(a)** State two properties of a relation in third normal form. **[2]**
**(b)** Explain why databases are normalised, using an example from the table in question 4. **[3]**

**6.** Write an SQL statement to create the Outing table. OutingID is the primary key, and BoatID must be a foreign key referencing the Boat table. Use suitable data types for every field shown in the data above. **[5]**

**7.** **(a)** Write an SQL query to list the first name, surname and seat number of every member who rowed in the boat named Heron on 2026-05-09, in alphabetical order of surname. **[4]**
**(b)** State the output of your query. **[2]**

**8.** **(a)** State the output of this query. **[2]**

```sql
SELECT Coach.CoachName, COUNT(*), SUM(Outing.DistanceKm)
FROM Coach, Outing
WHERE Coach.CoachID = Outing.CoachID
GROUP BY Coach.CoachName;
```

**(b)** Write an SQL query to find the mean distance and the greatest distance of outings that start at 07:00. State its output. **[3]**

**9.** **(a)** Outing 305 actually covered 9.0 km. Write an SQL statement to record this. **[2]**
**(b)** Member 603 withdraws from outing 304 and member 601 takes seat 2. Write the SQL statements needed. **[4]**
**(c)** A clerk tries to add an outing with BoatID 9. Explain why the database rejects it. **[1]**

**10.** The treasurer and secretary use the club database from different computers at once. The funds record holds 1250.

**(a)** State the name for this kind of simultaneous use. **[1]**
**(b)** Both users read the funds record. The treasurer adds 180 of subscriptions and saves. The secretary then subtracts a 95 payment from the value they read and saves. State the value stored, the correct value, and explain what has happened. **[3]**
**(c)** Explain how record locks would prevent this problem. **[2]**

**11.** Vantry Estuary Trust's water-level sensors each send a reading every second. The trust also stores photographs, flood-camera video and wardens' written reports.

**(a)** Explain why this is Big Data, referring to volume, velocity and variety. **[3]**
**(b)** Explain why a relational database is not appropriate for much of this data. **[2]**
**(c)** The data is processed on many servers. Explain how three features of functional programming make this easier. **[3]**
**(d)** Write two facts, in the style of a fact-based model, about sensor 44. **[2]**
**(e)** Describe how a graph schema would show that sensor 44, with property Depth 2.5 m, is installed at site Mill Reach. **[2]**

## Answers

**1.** Foreign key: a field whose values must match the primary key of a different table, so the two tables are linked [1]. A composite primary key is a primary key made of two or more attributes whose combined values are unique [1]. **[2]**
*Examiner insight:* Say the attributes are unique together, not each on its own.

**2.** Data is stored in separate tables, each about one entity type, made of records and fields [1]. Tables are linked through common attributes, with foreign keys referencing primary keys [1]. **[2]**
*Examiner insight:* "Data stored in tables" alone describes a spreadsheet; the linking by keys is what makes it relational.

**3. (a)** Many-to-many [1]. It is implemented with the link entity CrewPlace, giving two one-to-many relationships [1].
**(b)** Outing(**OutingID**, BoatID, CoachID, OutingDate, StartTime, Coxed, DistanceKm) with OutingID as identifier [1]; BoatID and CoachID as foreign keys [1]. CrewPlace(**OutingID**, **MemberID**, SeatNumber) with composite identifier OutingID and MemberID [1]; both are also foreign keys [1].
**(c)**

```text
Boat   ──────< Outing    >────── Coach
Outing ──────< CrewPlace >────── Member
```

Boat to Outing and Coach to Outing one-to-many, crow's foot at Outing [1]. Outing to CrewPlace one-to-many [1]. Member to CrewPlace one-to-many, crow's foot at CrewPlace [1].
*Examiner insight:* A direct many-to-many line between Member and Outing does not earn the link-entity mark in (c), even with correct forks.

**4.** Key of the flat table is (BoatID, RepairDate) [1].
Boat(**BoatID**, BoatName) [1]
Fault(**FaultCode**, FaultDescription) [1]
Repairer(**RepairerID**, RepairerName, RepairerTown) [1]
Repair(**BoatID**, **RepairDate**, FaultCode, RepairerID, Cost) with the composite identifier [1], and BoatID, FaultCode and RepairerID as foreign keys [1]. **[6]**
*Examiner insight:* RepairerTown left in Repair depends on RepairerID, not the key, so that relation is not in 3NF.

**5. (a)** Any two from: no repeating groups or non-atomic values [1]; every non-key attribute depends on the whole key [1]; no non-key attribute depends on another non-key attribute.
**(b)** Normalising stores each fact once, reducing redundancy [1]. Skerne Boatworks' town is stored twice, so a change could reach one row and not the other, making data inconsistent [1]. Also, deleting Wyvern Oars' only repair would lose its details, or a new fault code could not be stored until a boat had that fault [1].
*Examiner insight:* Answers that only say "saves space" gain little; tie the reason to a specific update, insertion or deletion problem.

**6.**

```sql
CREATE TABLE Outing (
  OutingID   INTEGER,
  BoatID     INTEGER,
  CoachID    INTEGER,
  OutingDate DATE,
  StartTime  TIME,
  Coxed      BOOLEAN,
  DistanceKm REAL,
  PRIMARY KEY (OutingID),
  FOREIGN KEY (BoatID) REFERENCES Boat(BoatID)
);
```

CREATE TABLE with all seven fields [1]; INTEGER for IDs and REAL for DistanceKm [1]; DATE, TIME and BOOLEAN used correctly [1]; primary key specified [1]; foreign key referencing Boat(BoatID) [1]. **[5]**
*Examiner insight:* DistanceKm as INTEGER would lose 6.5 and 7.5; choose types from the data shown.

**7. (a)**

```sql
SELECT Member.FirstName, Member.Surname, CrewPlace.SeatNumber
FROM Member, CrewPlace, Outing, Boat
WHERE Member.MemberID = CrewPlace.MemberID
  AND CrewPlace.OutingID = Outing.OutingID
  AND Outing.BoatID = Boat.BoatID
  AND Boat.BoatName = 'Heron'
  AND Outing.OutingDate = '2026-05-09'
ORDER BY Member.Surname;
```

Correct SELECT fields and all four tables in FROM [1]; three correct join conditions [1]; both search conditions [1]; ORDER BY Surname [1].
**(b)** Rufus Farrant 1, Anouk Halloran 3, Neve Rafferty 4, Saskia Tremlow 2 [1], in that order [1].
*Examiner insight:* Four tables need three join conditions; check you have them all.

**8. (a)** Bethan Corbishley, 3, 20.5 [1]; Idris Ostby, 2, 16.5 [1].
**(b)** `SELECT AVG(DistanceKm), MAX(DistanceKm) FROM Outing WHERE StartTime = '07:00';` [1] [1] Output: **8.5** and **10.0** [1].
*Examiner insight:* Selecting OutingID beside the aggregates without GROUP BY is an error.

**9. (a)** `UPDATE Outing SET DistanceKm = 9.0` [1] `WHERE OutingID = 305;` [1]
**(b)** `DELETE FROM CrewPlace` [1] `WHERE OutingID = 304 AND MemberID = 603;` [1]
`INSERT INTO CrewPlace (OutingID, MemberID, SeatNumber)` [1] `VALUES (304, 601, 2);` [1]
**(c)** There is no boat with BoatID 9, so the foreign key constraint fails [1].
*Examiner insight:* The DELETE needs both parts of the composite key; WHERE OutingID = 304 alone removes Saskia Tremlow as well.

**10. (a)** Concurrent access [1].
**(b)** Stored value **1155** [1]; correct value 1250 + 180 − 95 = **1335** [1]. Both read 1250, so the secretary's save overwrites the treasurer's, and the 180 update is lost [1].
**(c)** When the treasurer opens the record to update it, it is locked so the secretary cannot update it [1]. After the treasurer saves and the lock is released, the secretary reads 1430 and saves 1335 [1].
*Examiner insight:* Name which update is lost and why; "the data goes wrong" earns nothing on its own.

**11. (a)** Volume: years of readings, photos and video are too big for one server [1]. Velocity: readings stream in every second and flood warnings need fast responses [1]. Variety: numbers, images, video and free text [1].
**(b)** Relational databases need a row-and-column format [1]; photos, video and reports are unstructured and do not fit it [1].
**(c)** Immutable data structures cannot be changed, so servers cannot corrupt each other's data [1]. Stateless functions depend only on their inputs, so any server can run them [1]. Higher-order functions (map-reduce) combine results from different servers [1].
**(d)** For example: "Sensor 44 recorded a level of 3.12 m at 06:00:01 on 2026-09-02" [1]; "Sensor 44 was installed at Mill Reach on 2026-08-30" [1]. Each is one timestamped piece of information.
**(e)** Sensor 44 and Mill Reach are oval nodes joined by a solid edge labelled "installed at" [1]; Depth 2.5 m is in a rectangle joined to the sensor's node by a dashed line [1].
*Examiner insight:* In (d), a "fact" holding level, temperature and battery together is not a single fact.

## Where marks are usually lost

- Leaving a many-to-many relationship in an ER diagram instead of adding a link entity.
- Marking only one part of a composite identifier.
- Leaving an attribute that depends on a non-key attribute in the same relation.
- Giving "saves storage" as the only reason for normalising.
- Writing too few join conditions in a multi-table query.
- Using UPDATE or DELETE with an incomplete WHERE clause.
- Naming volume, velocity and variety without linking each to the scenario.

## Next steps

- [Databases revision notes](/resources/oxfordaqa-a-level-computer-science-databases-revision-notes/)
- [Databases study guide](/resources/oxfordaqa-a-level-computer-science-databases/)
- [OxfordAQA A-level Computer Science hub](/boards/oxfordaqa/a-level/computer-science/)
- [Printable checklist](/checklists/oxfordaqa/a-level/computer-science/)
- [All free 10-minute diagnostics](/diagnostics/)
- [Book a free trial class](/trial/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA. Section 3.15 Databases.
