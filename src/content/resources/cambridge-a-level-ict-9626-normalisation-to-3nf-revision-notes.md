---
title: "Cambridge A Level Information Technology (9626): Normalisation to third normal form (3NF) -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.2
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "normalisation-to-third-normal-form-3nf"
description: "Revision notes for Cambridge 9626 IT section 10.2: UNF, 1NF, 2NF and 3NF conditions, a short worked example, advantages and disadvantages, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 10.2 Normalisation to third normal form (3NF)** (Topic 10 Database and file concepts) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. The full worked example is in the [normalisation study guide](/resources/cambridge-a-level-ict-9626-normalisation-to-3nf/); test yourself with the [normalisation practice questions](/resources/cambridge-a-level-ict-9626-normalisation-to-3nf-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Normalisation | Organising data into tables so each fact is stored once |
| Redundancy | Unnecessary repetition of data |
| Primary key | The field(s) that uniquely identify each record |
| Composite key | A primary key made of two or more fields |
| Foreign key | A field that holds a primary key value from another table |
| Repeating group | Fields that occur several times in one record |
| Partial dependency | A non-key attribute depends on only part of a composite key |
| Transitive dependency | A non-key attribute depends on another non-key attribute |
| Anomaly | A fault caused by redundancy when inserting, updating or deleting |

## The four stages

| Form | Conditions |
|---|---|
| UNF | Data as it appears on a form; may have repeating groups and no key |
| 1NF | Atomic values; no repeating groups; a primary key |
| 2NF | In 1NF; no partial dependencies (every non-key attribute depends on the whole key) |
| 3NF | In 2NF; no transitive dependencies (no non-key attribute depends on another non-key attribute) |

Memory aid: every attribute depends on **the key** (1NF), **the whole key** (2NF) and **nothing but the key** (3NF).

## Procedure

1. List the attributes and mark repeating groups.
2. **1NF:** remove repeating groups (one row per item), make values atomic, choose a key.
3. **2NF:** if the key is composite, move attributes that depend on part of it into new tables keyed by that part.
4. **3NF:** move attributes that depend on a non-key attribute into a new table keyed by that attribute.
5. Mark primary keys and foreign keys, and check each table.

If the primary key is a single field, a table in 1NF is already in 2NF.

## Short worked example

An invoice holds InvoiceNo, Date, ClientID, ClientName, and for each item ItemCode, ItemName, Price and Quantity.

- **UNF:** items form a repeating group.
- **1NF:** one row per item; key InvoiceNo + ItemCode.
- **2NF:**
  - Invoice(InvoiceNo, Date, ClientID, ClientName)
  - Item(ItemCode, ItemName, Price)
  - InvoiceLine(InvoiceNo, ItemCode, Quantity)
- **3NF:** ClientName depends on ClientID, so:
  - Client(ClientID, ClientName)
  - Invoice(InvoiceNo, Date, ClientID)
  - Item and InvoiceLine as before.

Four tables: Client, Invoice, Item and InvoiceLine.

## Second worked example: library loans

Unnormalised data: MemberID, MemberName, MemberTown, and for each loan BookID, Title, Author, DateOut.

1. **UNF:** loans are a repeating group inside each member record.
2. **1NF:** one row per loan. Key: MemberID + BookID + DateOut (a member could borrow the same book again on another date).
3. **2NF:** check dependencies on parts of the key.
   - MemberName and MemberTown depend on MemberID only.
   - Title and Author depend on BookID only.
   - Nothing else remains, because the loan is identified by all three key fields.
   - Tables: Member(MemberID, MemberName, MemberTown); Book(BookID, Title, Author); Loan(MemberID, BookID, DateOut).
4. **3NF:** no non-key attribute depends on another non-key attribute in any table, so the design is already in 3NF. (If Author details such as AuthorCountry were added to Book, they would depend on Author, a non-key attribute, and would move to an Author table.)

Notice that a design can reach 3NF without all three steps changing the tables: the checks must still be made.

## Writing the answer in the exam

Give each stage a heading: "1NF", "2NF", "3NF". Under each, write the table name, list its fields and mark the primary key (underline or capital letters) and any foreign key. Add one line explaining the dependency you removed, such as "ClientName depends on ClientID, a non-key attribute, so it moves to a Client table". Finish with a list of the final tables.

## Advantages

- Less redundancy and less storage.
- Changes made in one place, so data stays consistent.
- No insert, update or delete anomalies.
- Easier to maintain and to enforce integrity.

## Disadvantages

- More tables and relationships, so a more complex design.
- Queries need joins, which can be slower.
- Takes more time and skill to design.
- Sometimes denormalised for speed in reporting.

## Anomalies explained

| Anomaly | Example in a single order table |
|---|---|
| Update | A customer's city is stored on many rows, and one is missed when it changes |
| Insert | A new product cannot be stored until it is ordered |
| Delete | Deleting a customer's only order removes the customer's details |

## Exam traps

- Saying 1NF removes partial dependencies (that is 2NF).
- Treating a partial dependency as the same as a transitive dependency.
- Splitting tables with no keys shown.
- Leaving the moved attributes behind in the original table.
- Putting Quantity with the product or order instead of the link table.
- Applying 2NF to a table with a single-field key.

## Self-test

1. Define normalisation.
2. What is a repeating group?
3. Give the two conditions for 1NF besides having a key.
4. What is a partial dependency?
5. When can a table in 1NF be in 2NF automatically?
6. What is a transitive dependency?
7. In Invoice(InvoiceNo, Date, ClientID, ClientName), which attribute is transitively dependent, and on what?
8. What is a foreign key used for?
9. Give one advantage of normalisation.
10. Give one disadvantage of normalisation.
11. What anomaly occurs if a customer's address is stored on every order and one is not updated?
12. Which attributes belong in an order line table with key OrderNo + ProductID, in the example guide?

### Answers

1. Organising data into tables so each fact is stored once.
2. Fields that occur more than once in a record, such as several products on one order.
3. Every field holds a single value, and there are no repeating groups.
4. A non-key attribute that depends on only part of a composite key.
5. When its primary key is a single field.
6. A non-key attribute that depends on another non-key attribute.
7. ClientName depends on ClientID.
8. To link a record to a record in another table.
9. Any one: less redundancy, consistent data, no anomalies, easier maintenance.
10. Any one: more tables, joins needed, slower queries, more design time.
11. An update anomaly (inconsistent data).
12. Quantity, which depends on the order and the product together.
