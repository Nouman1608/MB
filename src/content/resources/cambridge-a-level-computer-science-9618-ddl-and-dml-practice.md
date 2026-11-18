---
title: "Cambridge A Level Computer Science (9618): DDL and DML -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 8: Databases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 8.3
syllabusTopics:
  - qualification: "a-level"
    topic: "databases"
    subtopic: "ddl-and-dml"
description: "Original SQL questions with answers on CREATE TABLE, ALTER TABLE, SELECT, joins, aggregates, INSERT, UPDATE and DELETE for Cambridge 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [DDL and DML study guide](/resources/cambridge-a-level-computer-science-9618-ddl-and-dml/) · [DDL and DML revision notes](/resources/cambridge-a-level-computer-science-9618-ddl-and-dml-revision-notes/) · [Databases practice questions](/resources/a-level-computer-science-databases-practice/)

These questions practise section 8.3 of Cambridge International AS & A Level Computer Science 9618. The cinema and its data are invented. Answers are in mark-scheme style, with [1] for each creditable point.

An invented cinema uses these two tables.

FILM:

| FilmID | Title | Genre | RunningTime |
|---|---|---|---|
| F01 | Northern Lights | Drama | 128 |
| F02 | Gearbox | Action | 104 |
| F03 | Paper Moons | Drama | 96 |
| F04 | Laugh Track | Comedy | 91 |

SCREENING:

| ScreeningID | FilmID | ScreenNo | TicketsSold |
|---|---|---|---|
| 1 | F01 | 1 | 85 |
| 2 | F02 | 2 | 140 |
| 3 | F02 | 1 | 120 |
| 4 | F03 | 3 | 40 |
| 5 | F01 | 2 | 60 |
| 6 | F04 | 3 | 75 |

---

## Section A

**1.** State what is meant by a **data definition language**. **[1]**

**2.** State whether each statement is DDL or DML: (a) ALTER TABLE, (b) UPDATE. **[2]**

**3.** Give a suitable SQL data type for each attribute of SCREENING, and the type for FilmID. **[2]**

**4.** Which statement correctly adds an attribute Rating, of up to 4 characters, to FILM?

A: UPDATE FILM ADD Rating VARCHAR(4);

B: ALTER TABLE FILM ADD Rating VARCHAR(4);

C: INSERT INTO FILM Rating VARCHAR(4);

D: CREATE TABLE FILM ADD Rating VARCHAR(4);

**[1]**

**5.** Explain why the statement `DELETE FROM SCREENING;` would be a serious mistake if the intention was to remove screening 4. **[2]**

**6.** State the output of: `SELECT Title FROM FILM WHERE RunningTime < 100 ORDER BY Title;` **[2]**

## Section B

**7.** Write the SQL to create the table SCREENING, with ScreeningID as the primary key and FilmID as a foreign key referencing FILM. **[5]**

**8.** State the output of each query.

**(a)** `SELECT Title, RunningTime FROM FILM WHERE Genre = 'Drama' ORDER BY RunningTime;` **[2]**

**(b)** `SELECT FilmID, SUM(TicketsSold) FROM SCREENING GROUP BY FilmID;` **[2]**

**9.** Write SQL to output the Title of each film and the ScreenNo of every screening that sold more than 80 tickets. State the output. **[5]**

**10.** Write SQL to output the number of screenings in each screen. **[3]**

**11.** Write SQL statements to

**(a)** add a new screening: ScreeningID 7, film F03, screen 2, 0 tickets sold **[2]**

**(b)** record that screening 4 has now sold 52 tickets **[2]**

**(c)** remove all screenings of film F04. **[2]**

**12.** The manager wants the total tickets sold for each genre.

**(a)** Explain why this query needs both tables. **[1]**

**(b)** Write the SQL query. **[4]**

**(c)** State the output. **[1]**

**13.** Write the SQL to create the database Cinema and the table FILM shown above, with FilmID as the primary key. Title can be up to 40 characters and Genre up to 15. **[5]**

---

## Answers

**1.** The language used by the DBMS to create and change the structure of a database, such as tables and their attributes [1].

**2. (a)** DDL [1].

**(b)** DML [1].

**3.** ScreeningID, ScreenNo and TicketsSold INTEGER [1]; FilmID CHARACTER(3) (or VARCHAR(3)) [1].

**4.** **B** [1].

**5.** There is no WHERE clause, so every row in SCREENING would be deleted [1]; the statement should be `DELETE FROM SCREENING WHERE ScreeningID = 4;` [1].

**6.** Laugh Track [1], then Paper Moons [1] (in alphabetical order).

**7.**

```sql
CREATE TABLE SCREENING(
   ScreeningID INTEGER,
   FilmID      CHARACTER(3),
   ScreenNo    INTEGER,
   TicketsSold INTEGER,
   PRIMARY KEY (ScreeningID),
   FOREIGN KEY (FilmID) REFERENCES FILM(FilmID)
);
```

CREATE TABLE SCREENING with brackets around the definitions [1]; all four attributes with suitable data types [1]; commas separating the definitions [1]; PRIMARY KEY (ScreeningID) [1]; FOREIGN KEY (FilmID) REFERENCES FILM(FilmID) [1].

**8. (a)** Paper Moons, 96 [1]; Northern Lights, 128 [1].

**(b)** F01 145; F02 260 [1]; F03 40; F04 75 [1].

**9.**

```sql
SELECT FILM.Title, SCREENING.ScreenNo
FROM FILM
INNER JOIN SCREENING ON FILM.FilmID = SCREENING.FilmID
WHERE SCREENING.TicketsSold > 80;
```

SELECT Title and ScreenNo [1]; FROM with INNER JOIN of the two tables [1]; ON FILM.FilmID = SCREENING.FilmID [1]; WHERE TicketsSold > 80 [1].
Output: Northern Lights 1; Gearbox 2; Gearbox 1 [1].

**10.**

```sql
SELECT ScreenNo, COUNT(ScreeningID)
FROM SCREENING
GROUP BY ScreenNo;
```

SELECT ScreenNo [1]; COUNT(ScreeningID) or COUNT(*) [1]; GROUP BY ScreenNo [1].

**11. (a)** `INSERT INTO SCREENING (ScreeningID, FilmID, ScreenNo, TicketsSold)` [1] `VALUES (7, 'F03', 2, 0);` with the text value in quotes [1].

**(b)** `UPDATE SCREENING SET TicketsSold = 52` [1] `WHERE ScreeningID = 4;` [1].

**(c)** `DELETE FROM SCREENING` [1] `WHERE FilmID = 'F04';` [1].

**12. (a)** Genre is stored in FILM but TicketsSold is stored in SCREENING [1].

**(b)**

```sql
SELECT FILM.Genre, SUM(SCREENING.TicketsSold)
FROM FILM
INNER JOIN SCREENING ON FILM.FilmID = SCREENING.FilmID
GROUP BY FILM.Genre;
```

SELECT Genre and SUM(TicketsSold) [1]; INNER JOIN of FILM and SCREENING [1]; correct ON condition [1]; GROUP BY Genre [1].

**(c)** Action 260; Comedy 75; Drama 185 [1].

**13.**

```sql
CREATE DATABASE Cinema;

CREATE TABLE FILM(
   FilmID      CHARACTER(3),
   Title       VARCHAR(40),
   Genre       VARCHAR(15),
   RunningTime INTEGER,
   PRIMARY KEY (FilmID)
);
```

CREATE DATABASE Cinema [1]; CREATE TABLE FILM with the definitions in brackets and separated by commas [1]; FilmID CHARACTER(3) [1]; Title VARCHAR(40), Genre VARCHAR(15) and RunningTime INTEGER [1]; PRIMARY KEY (FilmID) [1].

---

## Where marks are usually lost

- Writing text values without single quotes, or putting numbers in quotes.
- Omitting the ON condition, or the table prefixes on FilmID in a join.
- Using UPDATE or INSERT to change the structure of a table.
- Forgetting GROUP BY when an aggregate is calculated per group.
- Leaving out WHERE in UPDATE and DELETE.
