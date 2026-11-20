---
title: "Cambridge A Level Information Technology (9626): File and data management -- Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Topic 10 – Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
  - qualification: "a-level"
    topic: "database-and-file-concepts"
    subtopic: "file-and-data-management"
description: "Revision notes for Cambridge 9626 IT section 10.4: file formats, indexed sequential and direct access, four DBMS types, MIS features and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
reviewNeeded: true
reviewNote: "2026-11-20: check the example file formats classed as proprietary or open against the teaching materials used for the course."
---

These notes condense **section 10.4 File and data management** (Topic 10 Database and file concepts) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory. Full explanations and worked examples are in the [file and data management study guide](/resources/cambridge-a-level-ict-9626-file-and-data-management/); test yourself with the [file and data management practice questions](/resources/cambridge-a-level-ict-9626-file-and-data-management-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Generic file format | A format many different programs can open, such as CSV, TXT, RTF or PDF |
| Proprietary format | A format owned and controlled by a company |
| Open-source (open) format | A format with a public specification that anyone may use |
| Key field | The field that identifies each record |
| Index | A table of key values and the positions of their records |
| Hashing | Calculating the position of a record from its key |
| Collision | Two keys giving the same position |
| DBMS | Software that creates, stores, protects and gives access to a database |
| MIS | A system that turns organisational data into information for managers |

## File types and uses

Text (TXT, RTF, DOCX, ODT, PDF) · data (CSV, XLSX, ODS) · images (JPG, PNG, GIF, SVG) · audio (MP3, WAV, FLAC) · video (MP4, AVI) · program files · compressed files (ZIP).

## Generic, proprietary and open formats

| | Why it matters |
|---|---|
| Generic formats | Share data between different software; keep files readable on any device; move data when software is replaced |
| Proprietary formats | May have rich features but need the owner's software or licence; the owner can change or end support |
| Open-source formats | Free to use; public specification; files stay readable in the long term; no dependence on one supplier |

Generic formats can lose features: CSV has no formatting, formulas or multiple sheets.

## File access methods

| Method | How a record is found | Good for | Weakness |
|---|---|---|---|
| Sequential | Read from the start | Batch processing of every record | Slow to find one record |
| Indexed sequential | Look up the key in the index, jump to the block, read on | Both ordered processing and single lookups | Index uses space and must be updated |
| Direct | Position calculated from the key by a hashing method | Very fast single lookups, such as seat booking | Collisions; unused space; no order |

### Direct access example

Seven positions (0 to 6) and position = key MOD 7:
- Key 15 gives remainder 1, so position 1.
- Key 22 gives remainder 1, which is a **collision**; it is stored in the next free position, 2.
- Key 38 gives remainder 3, so position 3.

To find 22: go to position 1, see it holds 15, check the next position and find 22.

### Indexed sequential example

Customer numbers 1000 to 9999 are stored in order, with an index entry for every 1000 numbers (1000, 2000, 3000 and so on). To find customer 3250:

1. Find the largest index key not above 3250, which is 3000.
2. Go to the block that the index gives for 3000.
3. Read the records in that block in order until 3250 is reached.

## Choosing an access method

| Scenario | Method | Reason |
|---|---|---|
| Printing every employee's payslip each month | Sequential | Every record is processed in order |
| A library member asks for their loan history and the library also prints full lists | Indexed sequential | Single lookups and ordered lists are both needed |
| Reserving one airline seat while many agents work at once | Direct | The seat record is found at once, with no need for order |

## DBMS types

| Type | Structure | Strength | Weakness |
|---|---|---|---|
| Hierarchical | Tree: each child has one parent | Simple, fast along set paths | Hard to show many-to-many; rigid |
| Network | Graph: many parents and children | Many-to-many relationships; flexible | Complex to design and maintain |
| Object-oriented | Objects with data and methods | Complex and multimedia data | Less widely used; no single standard |
| Relational | Tables linked by keys | Flexible; standard query tools; integrity | Joins can be slow; poor for multimedia |

Comparison tip: say what each structure can show, and give a use.

## Management information system (MIS)

**Features:** collects data from many sources · stores it centrally · processes it · produces summary and exception reports · query and what-if tools · controlled access.

**Uses:** sales by region against targets · stock levels and re-order flags · spending against budget · staff absence reports · overview for senior managers.

**Advantages:** faster, better-informed decisions; a single view of the organisation; problems found early.

**Disadvantages:** expensive; depends on accurate data; training needed; security risks; managers may over-rely on it.

An MIS is not just a database: it **uses** the data to produce **information** for decisions.

## Exam traps

- Mixing up generic and open-source formats.
- Saying direct access needs sorted records.
- Describing the index as part of direct access.
- Saying a hierarchical database stores tables.
- Not linking each DBMS type to a structure.
- Giving an MIS definition that is just "a database".
- Vague advantages such as "it is better".

## Self-test

1. Give two examples of generic file formats.
2. Why are generic formats needed?
3. What is a proprietary format?
4. Give two reasons why open-source formats are needed.
5. Describe how indexed sequential access finds a record.
6. Describe how direct access finds a record.
7. What is a collision?
8. Which access method suits a batch payroll run?
9. How is data arranged in a hierarchical database?
10. Which DBMS type suits multimedia data, and why?
11. Give two features of an MIS.
12. What is an exception report?

### Answers

1. Any two from: CSV, TXT, RTF, PDF.
2. So data can be shared between different programs and stay readable on any system.
3. A format owned and controlled by a company, which may need its software or licence.
4. Any two from: free to use; long-term access; no dependence on one supplier; public specification; easier sharing.
5. It looks up the key in the index, goes to the stored block and reads on until the record is found.
6. It calculates the position from the key, usually by hashing, and goes straight there.
7. When two keys give the same position.
8. Sequential access (every record is processed in order).
9. As a tree, in which each record has one parent and may have many children.
10. Object-oriented, because objects can store complex data with the actions that apply to it.
11. Any two from: collects data from many sources, stores it centrally, produces reports, query tools, controlled access.
12. A report that shows only the items outside normal limits.
