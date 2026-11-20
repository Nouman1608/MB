---
title: "OxfordAQA IGCSE Computer Science (9210): Database design -- Study Guide"
seoTitle: "OxfordAQA IGCSE CS 9210 Database Design Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA IGCSE Computer Science 9210 section 3.7.2: choosing data types and lengths, selecting primary keys and designing a database of up to three tables."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section **3.7.2 Database design** of OxfordAQA International GCSE Computer Science (9210). You must
be able to **choose appropriate data types and (where appropriate) lengths** for the fields in a table, **select a
suitable primary key** for a table, and **produce a design for a relational database from a description of a
scenario**. The additional information says that "scenarios used in examinations will require the use of no more than
three tables", and that "table designs will be written in the form TableName (Field1, Field2, Field3, ...) with
underlining used to indicate the primary key". The meanings of table, field, key and so on are in the [relational
databases study guide](/resources/oxfordaqa-igcse-computer-science-9210-relational-databases/).

## The notation for a design

A table design is written as the **name of the table** followed by its **fields in brackets**. The **primary key** is
underlined. A foreign key is written as an ordinary field, with the same name as the primary key that it links to.

Example: **Bike** (<u>BikeID</u>, Type, DailyPrice)

This means: a table called Bike with three fields; BikeID is the primary key. You may be asked to write a design in
this form, and you may be asked to say which field is the foreign key.

## Choosing data types and lengths

For each field, ask: *what kind of value will be stored, and how will it be used?*

| Data type | Use for | Examples |
|---|---|---|
| Text (string) | Names, codes, addresses, and numbers that are **not used in calculations** | Surname, Postcode, Telephone |
| Integer | Whole numbers that may be used in calculations or counted | Quantity, NumberOfDays, Age |
| Real | Numbers with a fractional part | Price, Weight |
| Boolean | A yes/no or true/false value | Delivered, Member |
| Date | A calendar date | HireDate, DateOfBirth |

### Rules of thumb

- A **telephone number** is **text**: you do not add telephone numbers together, and the number may begin with 0 or a +
  sign.
- A **postcode** is text, because it contains letters.
- An **ID number** that is only used to identify (and might start with a zero) can be text; one that is created as a
  simple count (1, 2, 3 ...) is normally an integer.
- **Money** (a price) is a real number.
- A **date of birth** is better than an **age**, because an age goes out of date and a date of birth does not.
- A **yes/no** fact is Boolean.

### Lengths for text fields

A **length** is the maximum number of characters that a text field can hold. Choose a length that is **long enough for any real
value**, but not wastefully long.

| Field | Sensible length | Reason |
|---|---|---|
| Surname | 30 | Long enough for most names |
| Telephone number | 15 | Digits, plus spaces or a country code |
| Postcode | 8 | Letters, digits and a space |
| BikeType | 20 | Words such as "Mountain" or "Road" |
| A one-letter code | 1 | Such as M or F, or Y or N |

Lengths apply to **text** fields. Integers, reals, Booleans and dates do not normally need a length in this course.

## Choosing a primary key

A primary key must be **unique** for every record in the table and must not be empty. To choose one:

1. Look for a field whose values are **always different**. A person's name, a date, a town or a price can all be repeated,
   so they are poor choices.
2. If there is no such field, **add a new field**, such as StudentID, BikeID or OrderNumber, and give each record its own
   number or code.
3. Make sure the key is **short and stable**: it should not need to change.

A **made-up ID** is nearly always the best primary key. For example, in a table of cars, the registration number is
unique, so it may serve as the key. In a table of students, a StudentID is better than a name.

## Designing a database from a scenario

Follow these steps in order.

1. **Find the tables.** Read the description and list the **types of thing** that need data stored about them (for example
   bikes, customers). Each becomes a table. The scenario gives no more than three.
2. **List the fields.** Under each table, list the facts about that thing.
3. **Choose each primary key.** Add an ID field if needed.
4. **Find the links.** Decide how the tables are related, and put in a **foreign key** to link them (see the rules below).
5. **Check for repeated data.** If the same fact would be stored again and again in one table, move it to its own table.
6. **Choose data types and lengths** for every field.
7. **Write the design** in the standard form with the primary keys underlined.

### Where to put the foreign key

Most links are **one to many**: one record in one table can be linked to many records in another. For example, one
coach has many swimmers, but each swimmer has only one coach. Put the **foreign key in the table at the "many" end**:
the Swimmer table holds the CoachID.

When two things are related **many to many**, for example customers can hire many bikes and each bike is hired by many
customers over time, you need a **third table** to record each hire. That table holds a foreign key for each of the other
two tables. This is why scenarios need up to three tables.

## Worked example 1: a bike hire shop

**Scenario.** A shop hires out bikes. It records the type and daily price of each bike. It records each customer's name and
telephone number. For every hire, it records which customer hired which bike, the date of the hire and the number of
days.

*Step 1.* The things: bikes, customers and hires. That makes three tables.

*Step 2 to 4.* Fields and keys:

- **Bike** (<u>BikeID</u>, Type, DailyPrice)
- **Customer** (<u>CustomerID</u>, Forename, Surname, Telephone)
- **Hire** (<u>HireID</u>, BikeID, CustomerID, HireDate, NumberOfDays)

In Hire, **BikeID** is a foreign key (it links to Bike) and **CustomerID** is a foreign key (it links to Customer). HireID is
the primary key of Hire, because the same customer may hire the same bike more than once, so neither of the other two
fields is unique on its own.

*Step 5.* Check: the bike's type and price are stored once, in Bike, not repeated in every hire. The customer's name and
telephone number are stored once, in Customer.

*Step 6.* Data types and lengths:

| Table | Field | Data type | Length |
|---|---|---|---|
| Bike | BikeID | Integer | |
| Bike | Type | Text | 20 |
| Bike | DailyPrice | Real | |
| Customer | CustomerID | Integer | |
| Customer | Forename | Text | 20 |
| Customer | Surname | Text | 30 |
| Customer | Telephone | Text | 15 |
| Hire | HireID | Integer | |
| Hire | BikeID | Integer | |
| Hire | CustomerID | Integer | |
| Hire | HireDate | Date | |
| Hire | NumberOfDays | Integer | |

A foreign key has the **same data type** as the primary key that it refers to.

## Worked example 2: a swimming club

**Scenario.** A club records the name and telephone number of each coach. It records each swimmer's name, date of birth
and the coach who trains them. A swimmer has one coach, and a coach trains many swimmers.

- **Coach** (<u>CoachID</u>, CoachName, Telephone)
- **Swimmer** (<u>SwimmerID</u>, SwimmerName, DateOfBirth, CoachID)

One coach to many swimmers, so the foreign key **CoachID** is in the **Swimmer** table, at the many end. DateOfBirth is a
date. Telephone is text with length 15. Notice that the coach's name is not repeated for each swimmer.

## Worked example 3: finding the fault in a design

A student's design for a school library is:

- **Loan** (<u>LoanID</u>, BorrowerName, BorrowerForm, BookTitle, BookAuthor, DueDate)

This design stores the borrower's name and form, and the book's title and author, in every loan. That repeats data
(redundancy) and allows different spellings of the same name (inconsistency). A better design uses three tables:

- **Borrower** (<u>BorrowerID</u>, BorrowerName, Form)
- **Book** (<u>BookID</u>, Title, Author)
- **Loan** (<u>LoanID</u>, BookID, BorrowerID, DueDate)

## Common mistakes

- Choosing a **non-unique** field, such as a surname, as the primary key.
- Forgetting to **underline** the primary key, or underlining the foreign key too.
- Using the **wrong data type**, such as an integer for a telephone number or text for a price.
- Giving a **length** to a field that is not text, or leaving out a length for a text field when the question asks for
  one.
- Putting the foreign key in the **wrong** table. It goes in the table at the **many** end of the link.
- Writing a **single table** that repeats data when the scenario needs several tables.
- Putting **calculated** values (such as age or a total cost) into a table when the data that they come from is already
  stored.
- Using more than **three tables**, or fields with **different names** for the same key, so that the link is not clear.
- Leaving the **linking table** out when a many to many relationship needs one.

## Exam technique

- Read the scenario and **underline the things** that data is kept about. Each becomes a table.
- Write each design on its own line in the form **TableName (Field1, Field2, ...)**, with the key underlined.
- Give each foreign key the **same name** as the primary key that it links to.
- When asked for a data type, write the **type name** and say why, using how the field is used.
- Check each table for **repeated data**.

## Next steps

For a condensed summary and a self-test, use the [Database design revision
notes](/resources/oxfordaqa-igcse-computer-science-9210-database-design-revision-notes/), and practise with the
[Database design practice
questions](/resources/oxfordaqa-igcse-computer-science-9210-database-design-practice/).
