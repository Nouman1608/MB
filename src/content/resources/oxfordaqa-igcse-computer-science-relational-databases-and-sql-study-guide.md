---
title: "OxfordAQA IGCSE Computer Science (9210): Relational databases and SQL -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
description: "Tables, records, fields, primary and foreign keys, relationships between tables and SQL queries for OxfordAQA International GCSE Computer Science 9210."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check the 9210 specification for exactly which SQL commands are required (SELECT, FROM, WHERE, ORDER BY, INSERT, UPDATE, DELETE and joins) and the required form of the join syntax."
publishedDate: 2026-11-08
featured: false
---

A database holds data in a structured way so that it can be searched, sorted and kept consistent. A **relational database** stores data in several linked tables instead of one big table, which avoids repeating data. **Structured query language (SQL)** is the standard language for retrieving and changing the data. In OxfordAQA International GCSE Computer Science (9210) you need to understand how tables are linked and be able to read and write SQL statements.

## Where this fits in the specification

Relational databases and SQL is Topic 7, after cyber security and before web page design. It links back to the cyber security topic, because SQL injection is an attack on exactly the kind of statement written here, and to programming, because the data types and conditions are the same ones used in `IF` statements. Questions usually show a table or two and ask you to name fields, explain keys, or write or interpret a query.

## Tables, records and fields

A database holds one or more **tables**. A table describes one type of thing, called an entity (for example a member of a club). Each row is a **record**, which holds all the data about one item. Each column is a **field**, which holds one attribute, such as Name or Age. Each field has a **data type**, such as text, integer, real, Boolean or date, which controls what can be stored and what operations make sense.

## Keys

A **primary key** is a field that uniquely identifies each record in a table. It must be unique and must never be empty. A **foreign key** is a field in one table that is the primary key of another table. It creates the link between them. Because the foreign key holds only the key value, the details are stored once, in the table where that key is the primary key.

Consider two tables.

**Club**

| ClubID | ClubName | Room |
|---|---|---|
| 1 | Chess | B12 |
| 2 | Robotics | C03 |
| 3 | Drama | Hall |

**Member**

| MemberID | Name | Age | ClubID |
|---|---|---|---|
| 101 | Amira | 14 | 2 |
| 102 | Tomas | 15 | 1 |
| 103 | Priya | 14 | 2 |
| 104 | Kofi | 16 | 3 |
| 105 | Lena | 15 | 2 |
| 106 | Omar | 13 | 1 |

In Club the primary key is ClubID. In Member the primary key is MemberID, and ClubID is a **foreign key** that refers to the Club table. Each club can have many members, but each member is in only one club. This is a **one-to-many** relationship.

### Why use more than one table?

If the room and club name were stored in every member's row, they would be repeated many times. This wastes storage and risks **inconsistency**: if the Robotics club moved room, every one of its member records would need changing, and missing one leaves conflicting data. With two tables, the room is stored once and changed once. This is called reducing **data redundancy**. A relational database also enforces **referential integrity**: a foreign key value must match an existing primary key, so a member cannot be placed in a club that does not exist.

## SQL queries

A query to retrieve data has the form:

```
SELECT field1, field2
FROM table
WHERE condition
ORDER BY field
```

- `SELECT` lists the fields to show, or `*` for all fields.
- `FROM` names the table.
- `WHERE` filters the records. Conditions use `=`, `<>`, `<`, `>`, `<=`, `>=`, and can be combined with `AND`, `OR` and `NOT`.
- `ORDER BY` sorts the results, ascending by default and descending with `DESC`.
- `LIKE` matches text patterns, where `%` stands for any number of characters, for example `Name LIKE 'A%'` for names beginning with A.

Text values are written in quotation marks and numbers are not. SQL statements end with a semicolon.

### Changing data

- `INSERT INTO table VALUES (...)` adds a new record, with values in the same order as the fields.
- `UPDATE table SET field = value WHERE condition` changes data in existing records.
- `DELETE FROM table WHERE condition` removes records.

The `WHERE` clause matters here. An `UPDATE` or `DELETE` without it applies to every record in the table.

### Joining tables

To show data from two linked tables in one result, use a join on the key fields:

```
SELECT Name, ClubName
FROM Member
INNER JOIN Club ON Member.ClubID = Club.ClubID
```

The `ON` part says which fields must match. Prefixing a field with the table name (`Member.ClubID`) removes any ambiguity when both tables have a field with the same name.

## Worked example 1: simple queries

Using the Member table:

(a) Names of members aged 15 or over, in alphabetical order.

```
SELECT Name
FROM Member
WHERE Age >= 15
ORDER BY Name;
```

The matching records are Tomas (15), Kofi (16) and Lena (15). Output: Kofi, Lena, Tomas.

(b) Name and age of members of club 2, oldest first.

```
SELECT Name, Age
FROM Member
WHERE ClubID = 2
ORDER BY Age DESC;
```

Club 2 has Amira (14), Priya (14) and Lena (15). Output: Lena 15, then Amira 14 and Priya 14. The two 14-year-olds can appear in either order unless a second sort field is given.

(c) Members whose names begin with A or L.

```
SELECT Name
FROM Member
WHERE Name LIKE 'A%' OR Name LIKE 'L%';
```

Output: Amira and Lena.

## Worked example 2: join and update

Write a query to show the name of every member of the Robotics club, together with the club name.

```
SELECT Name, ClubName
FROM Member
INNER JOIN Club ON Member.ClubID = Club.ClubID
WHERE ClubName = 'Robotics';
```

The join first matches each member to the club with the same ClubID. The WHERE then keeps only Robotics. The output is Amira, Priya and Lena, each with the club name Robotics.

Now change the data. Tomas moves from Chess (club 1) to Drama (club 3), Omar leaves, and a new member Sana (age 13) joins Drama.

```
UPDATE Member SET ClubID = 3 WHERE MemberID = 102;
DELETE FROM Member WHERE MemberID = 106;
INSERT INTO Member VALUES (107, 'Sana', 13, 3);
```

After these three statements Member has six records: 101 Amira (club 2), 102 Tomas (club 3), 103 Priya (club 2), 104 Kofi (club 3), 105 Lena (club 2) and 107 Sana (club 3). The Chess club now has no members, but it still exists in the Club table, which is fine because a club does not need members to exist.

## Common mistakes

- Using a non-unique field, such as Name, as a primary key.
- Confusing primary and foreign keys: the foreign key is the primary key of another table, used as the link.
- Omitting the `WHERE` clause from an `UPDATE` or `DELETE` and changing every record.
- Missing quotation marks on text values, or adding them around numbers.
- Writing a join without saying which fields must match.
- Saying that a relational database is "a database with relationships between people". The relationships are between tables.
- Mixing up the order of the clauses: SELECT, FROM, WHERE, ORDER BY.

## Exam technique

For **explain** questions on why separate tables are used, give two points: data is stored once (less redundancy) and it is easier to keep consistent. For **write a query**, set it out on separate lines, one clause per line, and check that field and table names are spelled as in the question. For **state the output**, apply the clauses in the order the database does: FROM, then WHERE, then ORDER BY, then SELECT. When asked to identify keys, say which table the key belongs to and give a reason.

## Check your understanding

1. What is the difference between a record and a field? *A record is a row with all the data about one item; a field is a column holding one attribute.*
2. In the Member table, which field is the foreign key? *ClubID.*
3. Give one benefit of storing the club room in the Club table rather than in every Member record. *The room is stored once, which saves space and avoids inconsistent data when it changes.*
4. Write a query to show the names of all members of club 1. *SELECT Name FROM Member WHERE ClubID = 1;* (Tomas and Omar)
5. How many records does `SELECT * FROM Member WHERE Age = 14;` return? *2 (Amira and Priya).*
6. What happens if you run `DELETE FROM Member;` with no WHERE clause? *Every record in the Member table is deleted.*
7. Write a statement to change Kofi's age to 17. *UPDATE Member SET Age = 17 WHERE MemberID = 104;*
8. What does referential integrity prevent? *A foreign key value that does not match any primary key in the linked table, such as a member in a club that does not exist.*
