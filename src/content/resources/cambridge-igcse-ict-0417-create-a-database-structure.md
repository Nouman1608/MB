---
title: "Cambridge IGCSE ICT (0417): Create a database structure"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.1
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "create-a-database-structure-0417"
description: "Importing data, field types and formats, primary and foreign keys, relationships, flat file versus relational, and form design for IGCSE ICT 0417 section 18.1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 18.1 of Cambridge IGCSE ICT 0417 is **create a database structure**. The practical skills are to import data "from existing files (including .csv, .txt) using specified field names", set data types, numeric sub-types and display formats, "create and edit primary and foreign keys", "create relationships between tables" and create a data entry form. You must also know the "characteristics, uses, advantages and disadvantages of a flat file and a relational database", the characteristics of primary and foreign keys, and the "characteristics of good form design". The [Databases study guide](/resources/cambridge-igcse-ict-databases-study-guide/) introduces the whole topic; this guide works through 18.1 in detail with one invented example.

## The example: a tennis club

An invented tennis club keeps two files of data:

- **members.csv**: one line per member.
- **bookings.txt**: one line per court booking, with the values separated by tab characters.

The first lines of members.csv look like this:

```
MemberID,FirstName,Surname,DateJoined,Phone,MonthlyFee,Discount,Junior
M001,Sara,Okoro,14/02/2025,07700900123,25.00,0.1,TRUE
M002,Dev,Kapoor,03/09/2024,07700900456,32.50,0,FALSE
```

## Importing data

When you import a .csv (comma-separated values) or .txt (text) file, the software asks:

1. **What separates the fields?** A comma for .csv; often a tab for .txt. The wrong delimiter puts a whole line into one field.
2. **Does the first row contain field names?** If it does, tick the option so the first row becomes the field names and not a record. If it does not, or the task gives different names, type the **specified field names** exactly as given, including capitals and no added spaces.
3. **What data type is each field?** Set it during the import or straight afterwards in the table design.

Check the imported table before going further: count the records, look for a phone number that has lost its leading zero, and check that dates have been read as dates, not text.

## Data types, sub-types and display formats

The syllabus names text, numeric (integer, decimal, currency), date/time and Boolean/logical, with numeric sub-types and display formats.

| Field | Data type | Sub-type or display format | Reason |
|---|---|---|---|
| MemberID | Text | n/a | Contains a letter; never used in calculations |
| FirstName, Surname | Text | n/a | Letters |
| DateJoined | Date/time | Display as DD/MM/YYYY, or as 14 February 2025 if the task asks | Sorts and compares as a true date |
| Phone | Text | n/a | Begins with 0, which a number type would drop; never calculated |
| MonthlyFee | Numeric | Currency, 2 decimal places | Money |
| Discount | Numeric | Percentage, 0 decimal places | 0.1 is displayed as 10% |
| Junior | Boolean/logical | Display as Yes/No, True/False or a checkbox | Only two possible values |

Two distinctions matter:

- **The value stored and the way it is displayed are different.** A percentage field holding 0.1 *displays* 10%; a date displayed as 14/02/2025 or 14 February 2025 is the *same* stored date. Changing the display format does not change the data.
- **Integer or decimal?** Integer for whole numbers such as a number of lessons; decimal for values with a fractional part, with the number of decimal places set as the task says. Currency is a numeric sub-type with a currency symbol and fixed decimal places.

Times are date/time fields too: a booking start time of 18:30 can be displayed in 24-hour format.

## Primary and foreign keys

### Characteristics of a primary key

- It holds a **unique** value for every record, so it identifies exactly one record.
- It must **not be left blank**.
- It should **not change** over time; an ID number is better than a name or a phone number.
- There is one primary key per table.

In the Members table, **MemberID** is the primary key.

### Characteristics of a foreign key

- It is a field in one table that is the **primary key of another table**.
- It **links** the two tables.
- Its values **can repeat**: one member can make many bookings, so the same MemberID appears many times in Bookings.
- It must have the **same data type** (and size) as the primary key it matches.

The Bookings table has the fields BookingID (primary key), MemberID (foreign key), CourtNo (integer), BookingDate (date/time), StartTime (date/time) and Paid (Boolean).

### Creating the relationship

In the relationships view, drag MemberID from Members onto MemberID in Bookings. This creates a **one-to-many** relationship: one member, many bookings. Many database packages can also be set to refuse a booking whose MemberID does not exist in Members, which stops "orphan" bookings for members who are not on the system. If the relationship cannot be created, the most common reason is that the two fields have different data types, for example text in one table and number in the other.

## Flat file or relational?

Suppose the club had kept everything in one table, with the member's details repeated on every booking:

| BookingID | MemberID | Surname | Phone | CourtNo | BookingDate |
|---|---|---|---|---|---|
| 1 | M001 | Okoro | 07700900123 | 3 | 02/03/2026 |
| 2 | M001 | Okoro | 07700900123 | 1 | 09/03/2026 |
| 3 | M002 | Kapoor | 07700900456 | 3 | 09/03/2026 |
| 4 | M001 | Okoro | 07700900999 | 2 | 16/03/2026 |

This is a **flat file**: a single table. Sara Okoro's surname and phone number are stored three times (**data redundancy**). When she changed her number, only one record was updated, so the table now holds two different numbers for her (**inconsistent data**).

| | Flat file | Relational database |
|---|---|---|
| Characteristics | One table holding all the data | Two or more tables linked by primary and foreign keys |
| Uses | Simple lists: a contact list, a small stock list | Linked data: members and bookings, customers and orders, students and classes |
| Advantages | Quick and simple to set up and use; needs no knowledge of keys or relationships | Less repeated data, so less storage; details updated once, so data stays consistent; tables can be queried together |
| Disadvantages | Repeated data wastes space; updates must be made in many records, risking inconsistency | Takes longer to design; keys and relationships must be set up correctly; more complex for users |

## Data entry forms

A **data entry form** shows one record at a time with labelled boxes, so users can enter data without seeing the whole table. The syllabus lists what a form should include: the specified fields, appropriate font styles and sizes, appropriate spacing between fields, suitable character spacing (width) for each field, use of white space, and radio buttons, check boxes and drop-down menus.

### Choosing the right control

| Control | Use when | Tennis club example |
|---|---|---|
| Text box | Free text or numbers | Surname, Phone |
| Radio buttons | Exactly one choice from a few options | Membership type: Adult, Junior or Senior |
| Check box | A yes/no value, or several independent options | Junior; Paid |
| Drop-down menu | One choice from a longer list | CourtNo 1 to 8 |

Radio buttons, check boxes and drop-down menus reduce typing, so they reduce errors: a user cannot type a court number of 9 if the drop-down only offers 1 to 8.

### Characteristics of good form design

- A clear **title** saying what the form is for, and short **instructions** if needed.
- Fields in a **logical order**, matching the paper form or the order data is collected.
- A **label** beside each field, using plain words rather than field names such as *DateJoined*.
- Box widths that **suit the data**: a wide box for an address, a short one for a court number.
- **Consistent** fonts and sizes, easy to read, with enough **white space** that the form is not cluttered.
- Appropriate **controls** (radio buttons, check boxes, drop-downs) to limit choices.
- **Navigation** or save buttons, and a clear indication of fields that must be filled in.

## Common mistakes

- Importing with the first row as a record instead of field names.
- Storing phone numbers as numbers, or IDs containing letters as numbers.
- Confusing the display format with the stored value.
- A foreign key with a different data type from the primary key, so the relationship fails.
- Using radio buttons for a yes/no field that suits a check box, or a drop-down for two options.
- Field names in the form typed differently from those specified.

## Exam technique

In the practical paper, follow field names, data types and formats exactly, and take screenshots of the table design and relationships as evidence. On the theory paper, *describe* a key by its characteristics (unique, links tables), *compare* flat file and relational databases point by point, and *explain* form design choices by saying how each one helps the user or reduces errors.

## Next steps

Revise with the [create a database structure revision notes](/resources/cambridge-igcse-ict-0417-create-a-database-structure-revision-notes/), then try the [create a database structure practice questions](/resources/cambridge-igcse-ict-0417-create-a-database-structure-practice/). The next section, searching and calculating, is in the [manipulate data study guide](/resources/cambridge-igcse-ict-0417-manipulate-data/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases", 18.1 Create a database structure.
