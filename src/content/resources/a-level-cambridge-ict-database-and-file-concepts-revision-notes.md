---
title: "Cambridge A Level Information Technology (ICT): Database and file concepts (9626) -- Revision Notes"
seoTitle: "Cambridge A Level ICT 9626 Database Concepts Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
description: "Revision notes for Cambridge AS & A Level IT 9626 Database and file concepts: keys, query types, normal forms, data dictionaries and DBMS types."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, use the [Database and file concepts study guide](/resources/a-level-cambridge-ict-database-and-file-concepts/).

These notes cover **topic 10, Database and file concepts**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections 10.1 to 10.4. It is an **AS Level** topic. **Paper 1 (Theory)** is based on sections 1–11 and **Paper 2 (Practical)** on sections 8–11, so expect written questions and practical tasks; **Paper 4 (Advanced Practical)** may also include tasks from sections 8–10. Calculators are not allowed in Paper 1.

Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Practise with the [Database and file concepts practice questions](/resources/a-level-cambridge-ict-database-and-file-concepts-practice/). Validation checks and verification methods: [Data Processing revision notes](/resources/a-ict-data-processing-revision-notes/). Find weak spots with a [free 10-minute diagnostic](/diagnostics/).

## 10.1 Data types and field sizes

| Data type | Use for | Not for |
|---|---|---|
| Text | Names, descriptions | Anything you calculate with |
| Alphanumeric | Codes mixing letters and digits (S104, postcodes) | Pure numbers you add up |
| Integer | Whole counts (seats, minutes) | Money with pence |
| Decimal | Measurements (2.5 kg) | Codes with leading zeros |
| Date / Time | Days, times of day | Durations stored as text |
| Boolean | Two states (Paid yes/no) | Three or more options |

**Field size** = the most characters (text) or the number type and decimal places (numeric). Phone numbers are **text**: no arithmetic, and leading zeros must survive.

## Keys and relationships

| Term | Recall |
|---|---|
| Primary key | Unique value for every record |
| Foreign key | Primary key of another table, stored to make a link; may repeat |
| Composite key | Two or more fields that together are unique |
| Compound key | Usual textbook meaning: a composite key whose fields are each keys of other tables (e.g. StudentID + CourseCode in a link table) |
| Referential integrity | Every foreign key value must match an existing primary key; stops orphan records |

- **One-to-one:** one employee, one parking permit.
- **One-to-many:** one customer, many orders.
- **Many-to-many:** many students, many courses. Build it as **two one-to-many** relationships through a **link table**.

### Method: creating a relational database

1. Create each table, with field names, data types and sizes.
2. Set the primary key in each table.
3. Join each primary key to its foreign key; both fields must have the same data type.
4. Switch on referential integrity.
5. Add validation rules and test them.

## Must-know distinctions

- **Flat file vs relational:** a flat file is one table, simple and fine for a small single list, but repeats data. A relational database links tables, stores each fact once, and stays consistent, but takes longer to design.
- **Conceptual vs logical vs physical ERD:** entities and relationships only → adds attributes and keys → adds real table and field names, data types and sizes.
- **Validation vs verification:** validation checks data is **reasonable** (rule plus error text); verification checks it was **copied accurately** (visual check, double entry).
- **Static vs dynamic parameter:** criterion fixed in the design vs typed by the user each time the query runs.
- **Calculated field vs calculated control:** a new field built in a query vs a box on a form or report that shows a result (e.g. a group total).
- **Summary vs cross-tab:** totals per group vs totals laid out by two fields, rows and columns (like a pivot table).
- **AND vs OR:** AND narrows (both true), OR widens (either true).

## Queries in one table

| Need | Query |
|---|---|
| One condition | Simple |
| Several conditions | Complex (AND, OR, NOT) |
| Same condition every week | Static parameter |
| User chooses the value | Dynamic parameter |
| Search the results of a search | Nested |
| Copy results into a new table | Make-table |
| Add results to an existing table | Append |
| Remove matching records | Delete |
| Change values in matching records | Update |
| Spot repeated records | Find duplicates, check, then delete extras |

Operators: =, >, <, >=, <=, AND, OR, NOT, wildcards (any characters / one character; the symbols depend on the software), date ranges and Boolean criteria. **Sort** ascending or descending, and on a second field to break ties.

### Worked reminder: a calculated field

A product costs 30 before tax and tax is 20%. A calculated field PriceWithTax = Price × 1.2 gives 30 × 1.2 = **36**. A report footer control summing PriceWithTax is a **calculated control**.

## Forms, reports, menus, import and export

- **Form design:** readable font style and size, spacing, white space, boxes sized to the data, key fields highlighted, radio buttons for 2–4 fixed choices, drop-downs for longer lists, buttons as form controls, linked subform for the "many" side.
- **Report:** grouped by a field, with controls and calculated controls (counts, sums) in group and report footers.
- **Switchboard/menu:** buttons that open forms, queries and reports.
- **Import:** csv, txt. Set delimiter, header row and field types.
- **Export:** table, query or report; formats csv, txt, rtf.

## 10.2 Normal forms

| Form | Test |
|---|---|
| UNF | Has repeating groups |
| 1NF | No repeating groups; atomic values; primary key |
| 2NF | 1NF + no partial dependency on part of a composite key |
| 3NF | 2NF + no non-key field depending on another non-key field |

### Worked reminder

UNF: Order(OrderNo, OrderDate, CustomerID, CustomerName, {ItemCode, ItemName, Qty})

- **1NF:** Order(**OrderNo**, OrderDate, CustomerID, CustomerName); OrderItem(**OrderNo, ItemCode**, ItemName, Qty).
- **2NF:** ItemName depends only on ItemCode → Item(**ItemCode**, ItemName); OrderItem(**OrderNo, ItemCode**, Qty).
- **3NF:** CustomerName depends on CustomerID → Customer(**CustomerID**, CustomerName); Order(**OrderNo**, OrderDate, CustomerID).

**For:** less redundancy and storage, fewer update errors, better integrity. **Against:** more tables, more joins, slower and harder queries, longer design.

## 10.3 Data dictionary

Data types listed: text, alphanumeric, numeric (integer, decimal, **currency**), **percentage**, date and time, Boolean/logical (yes/no, true/false).

Components to name: field name, data type, field size, format, key (primary/foreign), validation rule, error text, default value, required or not, description (and the table it belongs to).

## 10.4 File and data management

- **File types:** csv, txt (plain data); rtf (formatted text); pdf (fixed layout); jpg, png (images); mp3 (audio); mp4 (video).
- **Generic formats** let files move between different programs and users.
- **Proprietary** formats belong to one company (psd); **open-source** formats have a public specification, so anyone can read or write them, now and in future.
- **Indexed sequential:** records in key order plus an index; good for both full sequential runs and fairly fast single look-ups.
- **Direct access:** hashing turns the key into an address; fastest single look-up; poor for processing every record in order.

| DBMS | Strength | Weakness |
|---|---|---|
| Hierarchical | Fast on fixed one-to-many trees | Rigid; many-to-many hard |
| Network | Many-to-many links | Complex to design and change |
| Object-oriented | Complex data, multimedia | Less standard |
| Relational | Flexible queries, widely used | Joins slow on huge data |

**MIS:** gathers data from across the organisation into reports and summaries so managers can monitor, compare over time and plan.

## Quick self-test

1. Which data type suits "number of seats booked"?
2. Why should a postcode not be numeric?
3. A table has key OrderNo + ProductCode and a field ProductName. Which normal form does it break?
4. Employee(EmpID, DeptID, DeptName). Which normal form does it break, and why?
5. Direct access uses address = key mod 50. Which address does key 3815 get?
6. A calculated field Total = Price × Quantity. Price 12.50, Quantity 4. What is Total?
7. Ages in five records: R1 15, R2 16, R3 17, R4 18, R5 16. Which records match Age >= 16 AND Age < 18?
8. Which records in question 7 match Age < 16 OR Age > 17?
9. Which query type asks the user to type a surname each time it runs?
10. Which type of ERD shows data types and field sizes?
11. Which action query raises every price in one category?
12. Which DBMS type stores data together with methods?

### Answers

1. **Integer** (numeric).
2. It mixes letters and digits, and is never used in calculations, so it is **alphanumeric/text**.
3. **2NF**: ProductName depends on ProductCode, only part of the key.
4. **3NF**: DeptName depends on DeptID, a non-key field (a transitive dependency).
5. **15**.
6. **50.00**.
7. **R2, R3, R5**.
8. **R1, R4**.
9. A **dynamic parameter** query.
10. A **physical** ERD.
11. An **update** query.
12. **Object-oriented**.

## Where marks are usually lost

- Calling a foreign key "unique"; it repeats on the many side.
- Defining referential integrity without saying what it prevents (orphan records).
- Saying many-to-many links are created directly instead of through a link table.
- Mixing up 2NF (partial dependency) and 3NF (non-key dependency).
- Showing normalised tables without marking the primary keys.
- Choosing integer for phone numbers or codes with leading zeros.
- Writing OR between two limits of a range, so every record matches.
- Naming a query type without saying why it suits the task.
- Listing data dictionary components but missing validation rule or data type.
- Describing direct access as "searching from the start of the file".

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 10: Database and file concepts (10.1 Creating a database; 10.2 Normalisation to third normal form (3NF); 10.3 Data dictionary; 10.4 File and data management).
