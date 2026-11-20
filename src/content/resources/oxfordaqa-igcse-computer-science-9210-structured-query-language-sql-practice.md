---
title: "OxfordAQA IGCSE Computer Science (9210): Structured Query Language (SQL) -- Practice Questions"
seoTitle: "OxfordAQA IGCSE CS 9210 SQL Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.03
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "structured-query-language-sql-9210"
description: "Original OxfordAQA IGCSE Computer Science 9210 practice questions with answers on SQL SELECT, FROM, WHERE, INSERT INTO, UPDATE and DELETE FROM."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Structured Query Language (SQL) study guide](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql/) | [Structured Query Language (SQL) revision notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql-revision-notes/)

These questions cover section 3.7.3 Structured Query Language (SQL) of the OxfordAQA International GCSE Computer
Science (9210) specification. A library database has two tables. BookID is the primary key of Book, and AuthorID is the
primary key of Author. AuthorID in Book is a foreign key.

**Author**

| AuthorID | AuthorName | Country |
|---|---|---|
| 1 | Okafor | Nigeria |
| 2 | Lindqvist | Sweden |
| 3 | Tanaka | Japan |

**Book**

| BookID | Title | AuthorID | Year |
|---|---|---|---|
| B01 | River Road | 1 | 2015 |
| B02 | Cold Harbour | 2 | 2018 |
| B03 | Paper Birds | 3 | 2012 |
| B04 | The Long Dry | 1 | 2019 |
| B05 | Northern Lights Club | 2 | 2020 |
| B06 | Salt and Sand | 1 | 2011 |

---

## Section A

**1.** State what each part of this query does.

```
SELECT Title, Year
FROM Book
WHERE AuthorID = 1;
```

**(a)** SELECT Title, Year **[1]**

**(b)** FROM Book **[1]**

**(c)** WHERE AuthorID = 1 **[1]**

**2.** State the output of this query. The order of the records does not matter.

```
SELECT Title
FROM Book
WHERE Year > 2015;
```

**[2]**

**3.** Write an SQL query to show the names of all the authors. **[2]**

**4.** State the output of this query.

```
SELECT AuthorName
FROM Author
WHERE Country = 'Sweden';
```

**[1]**

## Section B

**5.** Write an SQL query to show the titles of all books published between 2012 and 2018 inclusive. **[3]**

**6.** State the output of this query. The order of the records does not matter.

```
SELECT Title
FROM Book
WHERE AuthorID = 2 OR Year < 2012;
```

**[3]**

**7.** State the output of this query.

```
SELECT Title
FROM Book
WHERE AuthorID <> 1 AND Year > 2015;
```

**[2]**

**8.** A query must show the title of every book written by an author from Nigeria.

**(a)** Write the query. **[4]**

**(b)** State the output. The order of the records does not matter. **[2]**

**(c)** Explain what would happen if the condition that matches the AuthorID fields were left out. **[2]**

**9.** Write an SQL query to show the title of each book and the name of its author, for books published before 2013.
**[4]**

**10.** A new book has the BookID B07 and the title Glass Rivers. Its author has the AuthorID 2, and it was published in 2021.
Write an SQL statement to add it to the Book table. **[3]**

**11.** The year of the book Paper Birds was entered wrongly. It should be 2013. Write an SQL statement to correct it. **[3]**

**12.** The library decides to remove every book published before 2012. Write an SQL statement to do this. **[2]**

**13.** A student writes the statement `UPDATE Book SET Year = 2000;` to change the year of one book.

**(a)** State what this statement does to the table. **[1]**

**(b)** Describe how to correct it so that it changes only the book with the BookID B04. **[2]**

**14.** Identify and correct the mistake in each statement.

**(a)** `SELECT Title FROM Book WHERE Year > 2012 AND < 2019;` **[2]**

**(b)** `SELECT Title FROM Book WHERE Title == 'Paper Birds';` **[2]**

**(c)** `SELECT Title FROM Book WHERE Year = 2018 AND Year = 2019;` (the intention is to show books from either year) **[2]**

---

## Answers

**1.** **(a)** It chooses the fields (columns) to display: Title and Year [1]. **(b)** It names the table that the data
comes from [1]. **(c)** It keeps only the records where the AuthorID is 1 [1].

**2.** Cold Harbour, The Long Dry and Northern Lights Club [2] (all three for 2 marks; two correct for 1 mark; no extra
titles).

**3.** `SELECT AuthorName FROM Author;` [2: one mark for SELECT with the correct field, one mark for FROM with the correct
table].

**4.** Lindqvist [1].

**5.** `SELECT Title FROM Book WHERE Year >= 2012 AND Year <= 2018;` [3: SELECT and FROM correct, both comparisons
correct, joined with AND].

**6.** Cold Harbour, Northern Lights Club and Salt and Sand [3] (AuthorID 2 gives Cold Harbour and Northern Lights Club;
Year before 2012 gives Salt and Sand; one mark for each).

**7.** Cold Harbour and Northern Lights Club [2] (they are not by author 1 and were published after 2015).

**8.** **(a)**
```
SELECT Book.Title
FROM Book, Author
WHERE Book.AuthorID = Author.AuthorID
AND Author.Country = 'Nigeria';
```
SELECT with the correct field [1]; FROM with both tables [1]; condition that matches the AuthorID fields [1]; condition
that the country is 'Nigeria', in quotation marks [1].
**(b)** River Road, The Long Dry and Salt and Sand [2] (all three for 2 marks; two correct for 1 mark).
**(c)** Every book would be paired with every author, giving 18 combinations [1]; the condition on the country would then keep the 6
combinations that involve the Nigerian author, so the titles of all six books would be shown, including those by other
authors [1].

**9.**
```
SELECT Book.Title, Author.AuthorName
FROM Book, Author
WHERE Book.AuthorID = Author.AuthorID
AND Book.Year < 2013;
```
Both fields after SELECT [1]; both tables after FROM [1]; matching condition [1]; year condition [1]. The output is Paper
Birds with Tanaka, and Salt and Sand with Okafor.

**10.** `INSERT INTO Book VALUES ('B07', 'Glass Rivers', 2, 2021);` [3: INSERT INTO with the table, VALUES, then the four
values in the correct order with text in quotation marks and numbers without].

**11.** `UPDATE Book SET Year = 2013 WHERE Title = 'Paper Birds';` [3: UPDATE with the table, SET with the correct field
and value, WHERE condition that identifies the record]. Accept `WHERE BookID = 'B03'`.

**12.** `DELETE FROM Book WHERE Year < 2012;` [2: DELETE FROM with the table, WHERE with the correct condition].

**13.** **(a)** It sets the year of every book to 2000 [1]. **(b)** Add a WHERE condition [1] that selects only that book:
`UPDATE Book SET Year = 2000 WHERE BookID = 'B04';` [1].

**14.** **(a)** The second comparison has no field name [1]; it should be `Year > 2012 AND Year < 2019` [1].
**(b)** SQL uses a single equals sign for comparison [1]; it should be `Title = 'Paper Birds'` [1].
**(c)** A year cannot be both 2018 and 2019, so the query returns no records [1]; AND should be replaced by OR: `Year =
2018 OR Year = 2019` [1].

---

## Where marks are usually lost

- Leaving out the matching condition in a two-table query, as in Questions 8 and 9.
- Leaving out WHERE in an UPDATE or DELETE FROM statement, as in Question 13.
- Missing quotation marks around text values.
- Writing half a condition, such as `AND < 2019`.
- Giving the values of INSERT INTO in the wrong order.
