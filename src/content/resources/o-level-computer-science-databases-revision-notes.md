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
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
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

## Checklist: choosing a data type

| If the field holds… | Use |
|---|---|
| A whole number to count or calculate with | Integer |
| A number with decimals (price, mass, time in seconds) | Real |
| A yes/no or true/false value | Boolean |
| One letter or symbol | Character |
| A date or a time | Date/time |
| Anything else, including codes and phone numbers | Text/alphanumeric |

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
