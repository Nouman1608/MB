---
title: "IGCSE ICT: Databases — Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge IGCSE ICT 0417 Topic 18: data types, primary and foreign keys, flat files vs relational databases, forms, queries and reports."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Databases in Cambridge IGCSE ICT 0417 (Topic 18) cover creating a database structure (importing data, setting field data types, primary and foreign keys and relationships, data entry forms), manipulating data (calculated fields, sorting, and queries with operators and wildcards) and presenting data in reports. The practical skills are tested in Paper 2, and flat-file versus relational databases, keys and form design can be asked in Paper 1.

Condensed for revision. For the full explanation, use the
[databases study guide](/resources/cambridge-igcse-ict-databases-study-guide/), then try the
[databases practice questions](/resources/cambridge-igcse-ict-databases-practice/).

## Syllabus coverage

| Syllabus ref | Content |
|---|---|
| 18.1 Create a database structure | Import data (.csv, .txt) with specified field names; set data types (text, numeric — integer, decimal, currency — date/time, Boolean/logical); numeric sub-types (percentage, decimal places); Boolean display (yes/no, true/false, checkbox); date/time display format; primary and foreign keys; relationships; data entry forms. Know: flat file vs relational; characteristics of keys; good form design |
| 18.2 Manipulate data | Calculated fields and calculated controls; run-time functions (add, subtract, multiply, divide, sum, average, maximum, minimum, count); sort on one or more criteria; queries with AND, OR, NOT, LIKE, >, <, =, >=, <=, <> and wildcards |
| 18.3 Present data | Reports showing all data and labels in full; report header/footer and page header/footer; report titles; tabular or columnar layouts; aligning data (right-align numbers, decimal alignment); numeric display formats (decimal places, currency, percentage) |

## Key definitions

| Term | Meaning |
|---|---|
| Table | Data about one type of thing, made of records and fields |
| Record | All the data about one item (a row) |
| Field | One item of data about each record (a column) |
| Primary key | A field whose value is unique for every record, used to identify it |
| Foreign key | A field in one table that is the primary key of another table, used to link them |
| Relationship | A link between two tables through a primary key and foreign key |
| Flat file | A database with a single table |
| Relational database | A database of two or more linked tables |
| Query | A search that selects records meeting criteria |
| Report | A formatted output of data for printing or display |

## 18.1 Which data type should each field have?

| Data type | Use | Example |
|---|---|---|
| Text (alphanumeric) | Letters, symbols, and numbers not used for calculation (phone numbers, IDs with leading zeros) | Surname, PhoneNumber |
| Numeric — integer | Whole numbers | Quantity |
| Numeric — decimal | Numbers with a decimal part, set number of decimal places | Weight 2.75 |
| Numeric — currency | Money values with a currency symbol | Price $4.99 |
| Numeric — percentage | Proportions | Discount 15% |
| Date/time | Dates and times; set display format such as DD/MM/YYYY | DateOfBirth |
| Boolean/logical | Only two values; display as yes/no, true/false or a checkbox | Paid |

Phone numbers are **text**: they can start with 0 and are never calculated.

### Flat file vs relational database

| | Flat file | Relational database |
|---|---|---|
| Structure | One table | Several linked tables |
| Advantages | Simple to set up and use | Less data duplication (redundancy), so less storage and fewer inconsistencies; data updated in one place; more complex queries |
| Disadvantages | Repeated data; harder to keep consistent | More complex to design and set up |

### Good form design

Specified fields in a logical order; clear labels; appropriate font styles and sizes; sensible spacing between fields and suitable field widths; use of white space; **radio buttons** (choose one of a few options), **check boxes** (yes/no or several options), **drop-down menus** (choose from a list, reducing typing errors); a title and instructions; navigation buttons.

## 18.2 How do you manipulate data?

- **Calculated field** (in a query) or **calculated control** (on a form or report): for example `Total: [Price]*[Quantity]`.
- Run-time functions in reports: sum, average, maximum, minimum, count.
- **Sort** ascending or descending, on one field or several (for example Surname, then FirstName).
- **Queries** using criteria:

| Operator | Meaning | Example criterion |
|---|---|---|
| = | Equal to | ="Paris" |
| <> | Not equal to | <>"Paris" |
| > , < , >= , <= | Comparisons | >=50 |
| AND | Both conditions true | Price >10 AND Stock <5 |
| OR | Either condition true | City ="Paris" OR City ="Rome" |
| NOT | Excludes matching records | NOT "Paris" |
| LIKE with wildcard | Pattern match | `LIKE "S*"` (starts with S); `LIKE "*son"` (ends in son) |

Wildcards: `*` stands for any number of characters; `?` for one character (in some packages `%` and `_`).

### Worked example: building a query

*Find all members who joined after 1 January 2025, whose membership type is Gold or Silver, sorted by surname A–Z.*

| Field | Surname | MemberType | JoinDate |
|---|---|---|---|
| Criteria | | "Gold" Or "Silver" | >01/01/2025 |
| Sort | Ascending | | |

Both conditions on different fields in the same criteria row are joined by AND; the OR is within MemberType.

## 18.3 How should a report be presented?

- Show **all required fields and labels in full** — widen controls so nothing is cut off.
- Use the **report header** (title, once at the start), **page header** (column headings on every page), **page footer** (page numbers) and **report footer** (totals or summary at the end).
- Choose **tabular** (records in rows under column headings) or **columnar** (each record as a block of label: value pairs) layout.
- **Right-align numbers** and use decimal alignment so decimal points line up.
- Set numeric display: decimal places, currency symbol, percentage.

## Common mistakes and exam traps

- Setting a phone number or ID with leading zeros as numeric — the zero is lost.
- Choosing a primary key that can repeat, such as Surname.
- Getting AND and OR the wrong way round in queries.
- Forgetting to apply the sort or to hide fields that should not appear.
- Labels or data cut off in a report; numbers left-aligned.
- Typing criteria with spelling different from the data (for example "Sliver").

## Frequently asked questions

**What is the difference between a primary key and a foreign key?**
A primary key uniquely identifies each record in its own table. A foreign key is a field in another table that holds primary key values, creating the link (relationship) between the tables.

**Why is a relational database better than a flat file?**
Data is stored once in linked tables, so there is less duplication, data is easier to keep consistent and takes less storage. A flat file repeats data such as a customer's address in every order.

**What does `LIKE "B*"` find?**
All records where the field begins with B, followed by any characters, such as Brown and Bello.

**Where should a report's grand total go?**
In the report footer, which appears once at the end of the report.

## Self-test

1. Which data type suits a field recording whether a fee has been paid?
2. Give two features of good form design.
3. Write a criterion to find prices of at least $20.
4. State where column headings that repeat on each page are placed.
5. Give one disadvantage of a flat-file database.

*Answers: 1 Boolean/logical; 2 any two of logical order, clear labels, white space, drop-down menus, radio buttons, check boxes, suitable fonts; 3 >=20; 4 page header; 5 duplicated data / inconsistency / more storage.*

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases" (18.1–18.3).
