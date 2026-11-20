---
title: "OxfordAQA IGCSE Computer Science (9210): Database design -- Revision Notes"
seoTitle: "OxfordAQA IGCSE CS 9210 Database Design Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 7: Relational databases and structured query language (SQL)"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 7.02
syllabusTopics:
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
  - qualification: "igcse"
    topic: "relational-databases-and-sql"
    subtopic: "database-design-9210"
description: "Revision notes for OxfordAQA IGCSE Computer Science 9210 section 3.7.2: data types and lengths, primary keys, designing up to three tables and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for section **3.7.2 Database design** of OxfordAQA International GCSE Computer Science (9210).
Worked examples are in the [Database design study
guide](/resources/oxfordaqa-igcse-computer-science-9210-database-design/).

## What the specification asks

- Choose appropriate **data types** and (where appropriate) **lengths** for fields.
- Select a suitable **primary key** for a table.
- Produce a **relational database design** from a scenario: **no more than three tables**.
- Write designs as **TableName (Field1, Field2, Field3, ...)** with the **primary key underlined**.

## Notation

**Bike** (<u>BikeID</u>, Type, DailyPrice)

- The table name is first, fields are in brackets.
- The primary key is underlined.
- A foreign key is written as an ordinary field with the same name as the key it links to.

## Data types

| Type | Use for |
|---|---|
| Text (string) | Names, addresses, codes, and numbers not used in calculations (telephone number, postcode) |
| Integer | Whole numbers that are counted or calculated (quantity, days) |
| Real | Numbers with decimals (price, weight) |
| Boolean | True or false |
| Date | A calendar date |

- **Telephone number:** text (may start with 0; not used in arithmetic).
- **Date of birth** is better than **age**, because an age goes out of date.
- **Price:** real. **Yes/no fact:** Boolean.
- A foreign key has the **same data type** as its primary key.

## Lengths (text fields only)

| Field | Typical length |
|---|---|
| Surname | 30 |
| Forename | 20 |
| Telephone | 15 |
| Postcode | 8 |
| One-letter code | 1 |

Choose a length that is long enough for any real value, but not wasteful.

## Choosing a primary key

1. Look for a field whose values are always different.
2. If there is none, **add an ID field** (StudentID, BikeID).
3. Keep it short and unchanging.

Poor keys: names, towns, dates, prices (they can repeat).

## Design steps

1. **Tables:** list the types of thing that data is kept about (no more than three).
2. **Fields:** list the facts about each thing.
3. **Primary keys:** add an ID where needed.
4. **Links:** add foreign keys.
5. **Check:** no repeated data in any table.
6. **Data types and lengths.**
7. **Write it out** with the keys underlined.

## Where the foreign key goes

| Relationship | Example | Foreign key |
|---|---|---|
| One to many | One coach, many swimmers | In the table at the many end (Swimmer holds CoachID) |
| Many to many | Customers hire many bikes; bikes are hired by many customers | A third (link) table, such as Hire, with a foreign key for each |

## Worked designs

**Bike hire.**

- **Bike** (<u>BikeID</u>, Type, DailyPrice)
- **Customer** (<u>CustomerID</u>, Forename, Surname, Telephone)
- **Hire** (<u>HireID</u>, BikeID, CustomerID, HireDate, NumberOfDays)

BikeID and CustomerID in Hire are foreign keys.

**Swimming club.**

- **Coach** (<u>CoachID</u>, CoachName, Telephone)
- **Swimmer** (<u>SwimmerID</u>, SwimmerName, DateOfBirth, CoachID)

CoachID in Swimmer is the foreign key.

**Faulty design to fix.** Loan (<u>LoanID</u>, BorrowerName, BorrowerForm, BookTitle, BookAuthor, DueDate) repeats the
borrower's and the book's details in every loan. Better: Borrower (<u>BorrowerID</u>, BorrowerName, Form), Book
(<u>BookID</u>, Title, Author) and Loan (<u>LoanID</u>, BookID, BorrowerID, DueDate).

## Data types for the bike hire design

| Field | Type | Length |
|---|---|---|
| BikeID | Integer | |
| Type | Text | 20 |
| DailyPrice | Real | |
| Surname | Text | 30 |
| Telephone | Text | 15 |
| HireDate | Date | |
| NumberOfDays | Integer | |

## Model answers

**A school records pupils and the clubs they attend. A pupil may attend one club. Write a design. [4 marks]**

- Club (<u>ClubID</u>, ClubName, Room) [1 for the table with its key underlined]
- Pupil (<u>PupilID</u>, PupilName, Form, ClubID) [1 for the table with its key underlined]
- ClubID in Pupil is the foreign key [1]. The club's name and room are stored once, not for every pupil [1].

**Explain why a made-up ID is often the best primary key. [2 marks]** It is different for every record, so it uniquely
identifies each one, and it never needs to change, unlike a name or an address.

**Choose a data type for a field holding the number of tickets sold, and explain your choice. [2 marks]** Integer,
because it is a whole number that is counted and may be used in calculations.

## Checking a design

| Check | Question to ask |
|---|---|
| Tables | Is there one table for each type of thing, and no more than three? |
| Keys | Does every table have a unique primary key, underlined? |
| Links | Is each foreign key in the table at the many end, with the same name as the key it links to? |
| Repeats | Is any fact stored again and again in one table? |
| Types | Is each data type chosen from how the value is used? |

## Exam traps

- **Non-unique primary key**, such as a surname.
- **Key not underlined**, or the foreign key underlined too.
- **Wrong data type**, such as an integer for a telephone number.
- **Length given to a non-text field.**
- **Foreign key in the wrong table.** It goes at the many end.
- **One big table** that repeats data.
- **Calculated fields** (age, total) stored.
- **More than three tables**, or key fields with different names.
- **No linking table** for a many to many relationship.

## Key terms

| Term | Meaning |
|---|---|
| Design | A list of the tables and fields of a database |
| One to many | One record in a table links to many in another |
| Link table | A table whose foreign keys connect two other tables |
| Length | The maximum number of characters in a text field |

## Self-test

1. Write a design for a table called Pupil with the fields PupilID, Name and Form, using PupilID as the primary key.
2. State the most suitable data type for a telephone number.
3. State the most suitable data type for the price of an item.
4. State a suitable data type for a field that records whether a pupil has paid.
5. Explain why a surname is not a good primary key.
6. State where the foreign key should go for one teacher who teaches many pupils.
7. State why a date of birth is better than an age.
8. A scenario needs customers and products, where a customer buys many products and a product is bought by many customers.
   State what type of table is needed to link them.
9. State the maximum number of tables used in a 9210 examination scenario.
10. State a suitable length for a Postcode field.

**Answers:**
1. Pupil (<u>PupilID</u>, Name, Form).
2. Text.
3. Real.
4. Boolean.
5. Two people can have the same surname, so it is not unique.
6. In the Pupil table (the many end), as TeacherID.
7. An age goes out of date, whereas a date of birth stays correct.
8. A link table (for example Purchase) with a foreign key for each of the two tables.
9. Three.
10. For example 8.

## Related resources

- [Database design study guide](/resources/oxfordaqa-igcse-computer-science-9210-database-design/)
- [Database design practice questions](/resources/oxfordaqa-igcse-computer-science-9210-database-design-practice/)
- [Structured Query Language (SQL) revision notes](/resources/oxfordaqa-igcse-computer-science-9210-structured-query-language-sql-revision-notes/)
