---
title: "Cambridge IGCSE ICT (0417): Databases -- Study Guide"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "create-a-database-structure-0417"
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "manipulate-data-0417"
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "present-data-0417"
description: "Building a database table, setting field types and keys, validating data, running queries and producing reports for Cambridge IGCSE ICT."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

A database is an organised collection of data stored so that it can be searched, sorted and reported on quickly. In the Cambridge IGCSE ICT practical you build a small database from instructions, enter or import data, search it with queries and produce a neat report. This guide follows the three parts of the topic: creating the structure, manipulating the data and presenting it. It includes a full worked example with every result calculated.

## Where this fits in the specification

Topic 18 is one of the practical application topics. Its three subtopics are 18.1 Create a database structure, 18.2 Manipulate data and 18.3 Present data. In the examination you work with database software such as a desktop relational database, following a numbered list of tasks, and you usually print or save evidence of the structure, a query and a report. Questions on the theory paper may also ask you to explain why validation is used or to name suitable data types.

## Create a database structure

### Tables, records and fields

A **table** holds data about one kind of thing, such as books or students. Each row is a **record** (everything about one item) and each column is a **field** (one piece of information, such as Title). Field names should be short, meaningful and free of unnecessary spaces.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-databases-study-guide--01-db-table-anatomy.webp" width="900" height="805" alt="A table called Books with five records (rows) and five fields (columns): BookID, Title, Genre, Price and InStock. One record, Iron Garden, is outlined as a row and the Genre field is outlined as a column. A row under the headings shows each field's data type: Text for Title and Genre, Currency for Price and Integer for InStock, with BookID marked as the primary key." loading="lazy">
  <figcaption>Each row is a record, each column is a field, and each field has a data type; BookID is the primary key.</figcaption>
</figure>


### Data types

Choose the type that fits the data, because it controls what can be typed in and how it is sorted and calculated:

- **Text or alphanumeric**: letters, digits and symbols treated as text. Use it for names and also for telephone numbers and postcodes, which are never added together and may begin with zero.
- **Numeric**: whole numbers (integer) or numbers with decimal places (real). Number fields can be added, averaged and compared.
- **Currency**: money values shown with a currency symbol and fixed decimal places.
- **Date/time**: dates and times stored so that they sort in true calendar order.
- **Boolean (logical)**: yes/no or true/false, commonly shown as a tick box.

### Primary and foreign keys

A **primary key** is a field whose value is unique in every record, so that each record can be identified for certain. A name is a poor choice because two people can share one; an ID number is a good one. A **foreign key** is a field in one table that matches the primary key of another table and so links the two. A database with more than one linked table is a **relational database**. Splitting data into related tables avoids repeating the same details, such as a customer's address, in many records, which saves space and reduces errors.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-databases-study-guide--02-db-keys.webp" width="900" height="908" alt="Two linked tables with illustrative data. The Customers table has CustomerID as its primary key, plus Name and Address. The Orders table has OrderID as its primary key and a CustomerID column marked as a foreign key. An arrow from the foreign key points up to the matching primary key in Customers. Ali's address is stored once even though Ali has two orders." loading="lazy">
  <figcaption>A foreign key holds the value of another table's primary key, so one customer record can serve many orders.</figcaption>
</figure>


### Validation and field properties

**Validation** is an automatic check that data is reasonable. It cannot prove the data is correct, only that it is sensible. Common checks are:

- **Range check**: a number lies between limits, such as a mark between 0 and 100.
- **Length check**: the number of characters is as required.
- **Type check**: the data is the right kind, such as numbers only.
- **Presence check**: a required field is not left blank.
- **Format check**: the data follows a pattern, for example a date format.
- **Lookup check**: the value must come from a list, for example a drop-down.

A **verification** check is different: it confirms that data was copied accurately, for example by entering it twice or visual checking against the source. In the practical you may also set the field size, a default value, a number of decimal places or an input format.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-databases-study-guide--03-db-validation.webp" width="900" height="953" alt="Six validation checks each shown with one accepted and one rejected example value: range (85 accepted, 140 rejected), length (2481 accepted, 248 rejected), type (42 accepted, 4x rejected), presence (Ali accepted, blank rejected), format (05/11/2026 accepted, 5 Nov rejected) and lookup (Fiction accepted, Ficton rejected). Below, verification is shown as two ways of checking data was copied accurately: typing it twice and comparing, or checking it by eye against the source." loading="lazy">
  <figcaption>Validation asks whether data is sensible; verification asks whether it was copied accurately.</figcaption>
</figure>


### Importing data

Data is often imported from a file such as a comma-separated values (CSV) file. When importing, choose the correct delimiter, tell the software whether the first row holds field names, and check that each field was given the right data type. A frequent error is a date or ID imported as text, or a currency column converted wrongly.

## Manipulate data

Manipulating data means selecting, ordering and calculating from the records in the table.

- **Sorting** puts records into ascending or descending order on one or more fields, such as by Genre and then by Price.
- **Searching with criteria** picks out the records that meet a rule. Criteria use comparison operators (=, <>, <, >, <=, >=) and the logical operators AND (both conditions true), OR (either true) and NOT.
- **Wildcards** match part of a text value. In many systems an asterisk stands for any number of characters, so a search for S* finds every entry starting with S. Check the symbol your software uses.
- **Queries** save the search. A query specifies the fields to show, the criteria and the sort order, and can be run again when the data changes.
- **Calculated fields** create a new value in a query from other fields, for example Price multiplied by Quantity. Calculated fields are not stored in the table; they are worked out when the query runs.
- **Summary functions** such as sum, count, average, minimum and maximum work out a value across many records.
- **Editing the data**: adding, changing and deleting records, and changing a field's structure.

### Choosing criteria carefully

Read the question wording. "More than 10" is > 10 and does not include 10, while "at least 10" is >= 10. "Fiction or Science" uses OR on the same field, whereas "Fiction and in stock" uses AND across two fields. Text criteria should be spelt exactly as stored; numbers should be typed without currency symbols if the software rejects them.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-databases-study-guide--04-db-criteria.webp" width="900" height="1170" alt="Top: two rows of whole numbers 8 to 13. For &quot;more than 10&quot; (greater than 10) the numbers 11, 12 and 13 are marked as matching and 10 is not. For &quot;at least 10&quot; (greater than or equal to 10) the numbers 10, 11, 12 and 13 match. Bottom: a two-circle diagram of the five Books records. Fiction contains records 1, 2 and 4; InStock above 0 contains records 1, 3, 4 and 5. AND keeps only the overlap, records 1 and 4. OR keeps every record from either circle, records 1 to 5." loading="lazy">
  <figcaption>Greater than leaves out the boundary value, greater-or-equal keeps it; AND keeps the overlap, OR keeps everything in either circle.</figcaption>
</figure>


## Present data

A **report** is a formatted printout of data, usually based on a query. A good report:

- has a clear **title** and, where useful, a date;
- shows only the **fields required**, in the order asked for;
- uses **column widths** large enough that no data or heading is cut off;
- has **labels** and headings that are readable, with consistent fonts and alignment;
- may **group** records by a field and include **totals** or other summary figures;
- sets the **page orientation** and fits to the page, with headers and footers when asked for.

Reports can also be exported to a spreadsheet or a text file, and **labels** (for example name badges or address labels) can be produced from the table data. Check the printout carefully: a database practical can lose marks simply because a field heading is truncated or the wrong fields appear.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-databases-study-guide--06-db-report-quality.webp" width="900" height="860" alt="Two printouts of the same data. The poor report has no title, an extra BookID column and a StockValue heading that is cut off because the column is too narrow. The good report has the title Fiction books in stock, only the three fields asked for, headings that are fully visible and a total of 173.13 at the bottom." loading="lazy">
  <figcaption>A report loses marks for missing titles, cut-off headings, extra fields or the wrong order; a good one shows only what was asked.</figcaption>
</figure>


## Worked example

A shop keeps a table called Books with these records.

| BookID | Title | Genre | Price (pounds) | InStock |
|---|---|---|---|---|
| 1 | Tidewater | Fiction | 8.99 | 12 |
| 2 | Iron Garden | Fiction | 12.50 | 0 |
| 3 | Cell Walls | Science | 15.00 | 4 |
| 4 | Night Rivers | Fiction | 7.25 | 9 |
| 5 | Star Maps | Science | 18.75 | 3 |

**Task:** produce a query listing the title, price and stock value of all fiction books that are in stock, with the dearest first, and then a report with the total stock value.

1. Choose BookID as the primary key, Text for Title and Genre, Currency for Price and Integer for InStock. Add a range check on InStock so that it must be 0 or more.
2. Criteria: Genre = "Fiction" AND InStock > 0. Record 2 is fiction but has InStock 0, so it is excluded. Records 3 and 5 are not fiction. The matches are records 1 and 4.
3. Add a calculated field StockValue = Price * InStock. For Tidewater, 8.99 * 12 = 107.88. For Night Rivers, 7.25 * 9 = 65.25.
4. Sort on Price in descending order: Tidewater (8.99) comes before Night Rivers (7.25).
5. In the report, add a summary total for StockValue: 107.88 + 65.25 = 173.13. Format StockValue as currency with two decimal places and give the report a title such as "Fiction books in stock".

Final report output: Tidewater, 8.99, 107.88; Night Rivers, 7.25, 65.25; Total 173.13.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-igcse-ict-databases-study-guide--05-db-query-worked.webp" width="900" height="1160" alt="Step 1: the five Books records are tested against Genre equals Fiction AND InStock greater than 0. Records 1 (Tidewater) and 4 (Night Rivers) pass; record 2 fails because stock is 0, and records 3 and 5 fail because they are Science. Step 2: a calculated field StockValue equals Price times InStock gives 107.88 for Tidewater and 65.25 for Night Rivers, sorted with the dearest price first. Step 3: the report titled Fiction books in stock lists both rows with a total of 173.13." loading="lazy">
  <figcaption>Criteria keep records 1 and 4, StockValue is worked out in the query, and the report totals 173.13.</figcaption>
</figure>


## Common mistakes

- Using a name as the primary key, or leaving the table without one.
- Storing phone numbers as numeric and losing the leading zero.
- Mixing up AND and OR, or using > when the question needs >=.
- Typing criteria with the wrong spelling or the wrong case of text.
- Placing a calculated field in the table design instead of the query.
- A report with truncated headings, extra fields or the data not in the order requested.
- Confusing validation (is it sensible) with verification (was it copied correctly).

## Exam technique

Practical tasks use words such as *create*, *import*, *sort*, *search*, *select*, *display* and *print*. Do exactly that; do not add extra fields to a report. Keep screenshots or printouts that show the criteria as well as the result, because the examiner needs both. On the written paper, a *describe* question on validation expects the name of the check and what it does, and an *explain* question expects a reason, such as why a lookup check reduces mistakes. Save before running a query that changes data.

## Check your understanding

1. What is the difference between a record and a field? *A record is one row about one item; a field is one column holding one kind of detail.*
2. Why is a telephone number stored as text? *It is not used in calculations and may start with zero, which a number type would drop.*
3. Name a primary key for a Students table and say why it is suitable. *StudentID, because every value is unique.*
4. Write criteria for books that are Science and cost less than 16. *Genre = "Science" AND Price < 16, which gives Cell Walls only.*
5. Explain the difference between validation and verification. *Validation checks data is sensible and allowed; verification checks it matches the source.*
6. Why is a calculated field usually made in a query? *It is worked out from the current data each time, so it stays correct without being stored.*
7. Give two features of a well-presented report. *A clear title and fully visible column headings (also correct fields, order and totals).*

## Frequently asked questions

**What is the difference between a primary key and a foreign key?**
In Cambridge IGCSE ICT (0417), a primary key is a field whose value is unique in every record, such as an ID number. A foreign key is a field in one table that matches the primary key of another table and links the two tables.

**Why should a telephone number be stored as text in a database?**
A telephone number is never used in calculations and may begin with zero, which a numeric field would drop, so it is stored as a text field.

**What should you do when importing a CSV file into a database?**
Choose the correct delimiter, say whether the first row holds field names, and check that each field was given the right data type. A common error is a date or ID imported as the wrong type.

**What evidence should you keep in the database practical?**
Keep screenshots or printouts that show the query criteria as well as the results, because the examiner needs to see both. Follow the task wording exactly and do not add extra fields to a report.
