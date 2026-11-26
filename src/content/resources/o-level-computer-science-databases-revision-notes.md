---
title: "O Level Computer Science: Databases — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Databases"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 9
syllabusTopics:
  - qualification: "o-level"
    topic: "databases-2210"
description: "Topic 9 notes for Cambridge O Level Computer Science 2210: fields and records, choosing data types and keys, and a step-by-step method for writing SQL."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

Topic 9 of Cambridge O Level Computer Science (2210) asks four things of you: define a single-table database, choose data types, pick a primary key, and read or write SQL using a fixed set of keywords. These notes reduce each to a checklist, then practise the SQL method on a small table so that the four-line query shape becomes automatic before Paper 2.

Condensed for the final weeks. For worked explanations, use the
[Databases study guide](/resources/o-level-computer-science-databases/); for exam-style questions, use the
[Databases practice questions](/resources/o-level-computer-science-databases-practice/).

## Syllabus coverage (2210, 2026–2028)

| Ref | What you must be able to do |
|---|---|
| 9.1 | Define a single-table database from given data storage requirements: fields, records, validation |
| 9.2 | Suggest data types: text/alphanumeric, character, Boolean, integer, real, date/time |
| 9.3 | Understand the purpose of a primary key and identify a suitable one |
| 9.4 | Read, understand and complete SQL scripts with SELECT, FROM, WHERE, ORDER BY ASC/DESC, SUM, COUNT, AND, OR; identify the output of a query |

## Four terms, one line each

- **Table** — data about one kind of thing, in rows and columns.
- **Field** — a column: one attribute stored for every record.
- **Record** — a row: everything stored about one item.
- **Primary key** — a field with a unique value for each record.

## Checklist: defining a table

- Every item in the description becomes a field with a meaningful name.
- Every field has a data type from the syllabus list.
- At least one sensible validation check (range, presence, format, length, type).
- One primary key, justified as **unique**.

**Checklist: choosing a data type**

| If the field holds… | Use |
|---|---|
| A whole number to count or calculate with | Integer |
| A number with decimals (price, mass, time in seconds) | Real |
| A yes/no or true/false value | Boolean |
| One letter or symbol | Character |
| A date or a time | Date/time |
| Anything else, including codes and phone numbers | Text/alphanumeric |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--08-db-anatomy.webp" width="900" height="820" alt="The five-record, six-field Car table with CarReg marked as the primary key, one row labelled as a record, one column labelled as a field, and the count 6 fields and 5 records." loading="lazy">
  <figcaption>Fields are columns, records are rows, and the primary key is unique.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--09-db-datatypes.webp" width="900" height="860" alt="Each Car field with a sample value points to its data type: CarReg and Make text/alphanumeric, Seats integer, DailyRate real, Electric Boolean, LastService date/time, plus a character example." loading="lazy">
  <figcaption>Choosing a data type for every field.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--10-db-validation.webp" width="900" height="980" alt="For CarReg, Seats, DailyRate and LastService, an accepted and rejected example value is shown against each check: presence, format, range 2 to 9, greater than 0, type and valid date." loading="lazy">
  <figcaption>What each validation check accepts and rejects.</figcaption>
</figure>


## The four-step SQL method

1. **SELECT** — which fields are wanted? (Only those; `*` for all.)
2. **FROM** — which table?
3. **WHERE** — which records? Quote text (`'Drama'`), not numbers or TRUE/FALSE. Join conditions with AND (both true) or OR (either true).
4. **ORDER BY** — sorted how? ASC (A–Z, smallest first) or DESC (Z–A, largest first).

For a single total or count, put `SUM(field)` or `COUNT(*)` after SELECT.

## Practice table: Film

| FilmID | Title | Genre | Minutes | Rating | Subtitled |
|---|---|---|---|---|---|
| F1 | Monsoon Road | Drama | 128 | 7.9 | TRUE |
| F2 | Neon Harbour | Thriller | 104 | 6.8 | FALSE |
| F3 | Paper Kites | Drama | 96 | 8.4 | FALSE |
| F4 | Last Orbit | Sci-fi | 141 | 7.2 | TRUE |
| F5 | Quiet Tide | Thriller | 112 | 8.1 | TRUE |

Primary key: **FilmID**. Genre, Subtitled and even Title could repeat.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--12-db-sql-order.webp" width="900" height="1048" alt="A four-line SELECT query, then three tables: WHERE keeps the three five-seat cars, SELECT keeps CarReg and DailyRate, ORDER BY sorts by DailyRate largest first." loading="lazy">
  <figcaption>How the output of a query is found step by step.</figcaption>
</figure>


## Drills on the Film table

**Write:** titles of thrillers, highest rating first.

```
SELECT Title
FROM Film
WHERE Genre = 'Thriller'
ORDER BY Rating DESC;
```

→ Quiet Tide; Neon Harbour.

**Write:** the total running time of all subtitled films.

```
SELECT SUM(Minutes)
FROM Film
WHERE Subtitled = TRUE;
```

→ 128 + 141 + 112 = 381.

**Read:** `SELECT COUNT(*) FROM Film WHERE Minutes < 110 OR Rating > 8.0;`

Minutes under 110: F2, F3. Rating over 8.0: F3, F5. Unique records: F2, F3, F5 → **3**. (Count F3 once.)

**Read:** `SELECT FilmID, Minutes FROM Film WHERE Genre = 'Drama' AND Subtitled = FALSE;`

→ F3 96.

## 2210 and its sibling syllabus

Topic 9 is identical in 2210 and Cambridge IGCSE Computer Science (0478): a single table and the same nine SQL keywords.

## Exam traps

Drawn from our [practice page](/resources/o-level-computer-science-databases-practice/), which paraphrases the Cambridge 2210 June 2025 mark schemes and lists where marks are usually lost:

- Data-type questions were marked in bands (two marks for all four fields correct, one for two or three). The identifier field was accepted as integer or text, so base your choice on what the values look like — an ID with letters must be text.
- An SQL statement earned separate marks for the fields after SELECT, the keyword FROM, the field in WHERE and the criterion — so a partly right query still earns marks.
- Listing extra fields, or using `SELECT *`, when only some fields were asked for loses the SELECT mark.
- Forgetting `DESC` when the largest value must come first.
- Quoting a number, or not quoting a text value, in the WHERE clause.

## Frequently asked questions

**Why is a phone number stored as text?**
It is never used in calculations, it may start with 0, and it may contain spaces or a plus sign, all of which an integer field would lose or reject.

**In an OR query, can one record be counted twice?**
No. A record is selected once if it meets either condition, so a record meeting both is still counted once.

**Is COUNT(*) the only form of COUNT I need?**
COUNT counts the selected records, and `COUNT(*)` is the clearest way to write it, so it is the safest form to learn.

## Self-test

1. How many fields and records does the Film table have?
2. Suggest a data type for Rating and for Subtitled.
3. Why is Genre unsuitable as a primary key?
4. Write a query to list FilmID and Title of films longer than 120 minutes in title order A–Z.
5. What does `SELECT COUNT(*) FROM Film WHERE Genre = 'Drama' AND Rating > 8.0;` return?

**Answers:** 1. 6 fields, 5 records. 2. Real; Boolean. 3. Its values repeat (two dramas, two thrillers), so it cannot identify one record. 4. `SELECT FilmID, Title FROM Film WHERE Minutes > 120 ORDER BY Title ASC;` → F4 Last Orbit; F1 Monsoon Road. 5. 1 (F3).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--11-db-key.webp" width="900" height="1006" alt="CarReg values are all different, while Toyota repeats twice and Seats 5 repeats three times, so only CarReg can be a key. A club table shows a created MemberID separating two people with the same name and birthday." loading="lazy">
  <figcaption>A primary key must be unique, so create one if no field is.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--13-db-and-or.webp" width="900" height="1050" alt="Two tick-and-cross grids. For AND, only LEA 2041 and LEA 5218 pass both conditions so COUNT(*) gives 2. For OR, KHI 7712 and MUX 6603 pass one condition, so ordered by seats the output is Honda 4, Toyota 7." loading="lazy">
  <figcaption>AND needs both conditions, OR needs at least one.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-computer-science-databases--14-db-sum-count.webp" width="900" height="890" alt="The two Toyota records are selected. COUNT(*) counts two records. SUM(DailyRate) adds 55.50 and 42.25 to give 97.75." loading="lazy">
  <figcaption>COUNT counts the selected records and SUM adds a numeric field.</figcaption>
</figure>

