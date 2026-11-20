---
title: "Cambridge A Level Information Technology (9626): File and data management"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 10.4 study guide: file types and formats, indexed sequential and direct access, types of DBMS and management information systems, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
reviewNeeded: true
reviewNote: "2026-11-20: check the example file formats classed as proprietary or open, and the hashing example, against the teaching materials used for the course."
---

This guide teaches **section 10.4 File and data management** of Topic 10 Database and file concepts in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [Database and file concepts overview](/resources/a-level-cambridge-ict-database-and-file-concepts/) covers the topic as a whole; this page explains file types and formats, the two ways of finding records in a file, the types of database management system and management information systems. Use it with the [file and data management revision notes](/resources/cambridge-a-level-ict-9626-file-and-data-management-revision-notes/) and the [file and data management practice questions](/resources/cambridge-a-level-ict-9626-file-and-data-management-practice/).

## What section 10.4 covers

| Syllabus point | What you must be able to do |
|---|---|
| File types | Describe different file types and their uses |
| Generic formats | Explain why generic file formats are needed |
| Proprietary and open formats | Compare them, including why open-source formats are needed |
| File access | Explain indexed sequential access and direct file access |
| DBMS types | Describe hierarchical, network, object-oriented and relational database management systems |
| MIS | Describe the features of a management information system and how organisations use it |
| Evaluation | Give advantages and disadvantages of the different DBMS types |

## File types and their uses

A **file type** (or format) tells the computer how the data inside is arranged, and is usually shown by the file extension. Common groups are:

| Group | Examples | Use |
|---|---|---|
| Text and documents | `.txt`, `.rtf`, `.docx`, `.odt`, `.pdf` | Letters, reports; PDF for fixed layouts |
| Data files | `.csv`, `.xlsx`, `.ods` | Tables of data for spreadsheets and databases |
| Database files | `.accdb`, `.sql` | Tables, queries and forms |
| Images | `.jpg`, `.png`, `.gif`, `.svg` | Photographs, graphics; SVG for scalable vector images |
| Audio | `.mp3`, `.wav`, `.flac` | Music and speech |
| Video | `.mp4`, `.avi` | Moving pictures with sound |
| Executable | `.exe` | Programs that run |

## Generic file formats

A **generic file format** can be opened by many different programs, whatever the program that created it. Examples include CSV, TXT, RTF and PDF.

**Why generic formats are needed:**
- **Sharing data between different software**: a CSV file can be exported from one database and imported into a spreadsheet from another supplier.
- **Compatibility across systems**: a PDF looks the same on any device.
- **Long-term access**: the data can still be opened if the original program is no longer available.

**Limits:** generic formats may lose formatting, formulas or features that are special to one program. A CSV file does not keep colours or several sheets.

## Proprietary and open-source file formats

| Feature | Proprietary format | Open-source (open) format |
|---|---|---|
| Owned by | A company, which controls the specification | A public specification that anyone may use |
| Opening and editing | Often needs the company's software, or software licensed from it | Can be read by any software that follows the published specification |
| Cost | May need a licence or paid software | Free to use and implement |
| Changes | The company can change or withdraw support | Changes are agreed openly |
| Examples | Image-editor project files with layers from a particular package | OpenDocument formats, PNG, SVG, FLAC |

**Why open-source formats are needed:**
- Files can be opened **without paying** for a particular program.
- Files remain readable in the **long term**, even if a company stops trading.
- Organisations such as governments and schools avoid **dependence on one supplier**.
- Different software can read and write the same format, so **sharing** is easier.

## Methods of file access

### Sequential access

Records are stored one after another, normally in order of a **key field**. To find a record, the computer reads from the start until it reaches it. It suits **batch processing** such as payroll, where every record is processed.

### Indexed sequential access

Records are stored in **key order**, and a separate **index** holds a table of key values with the position of the record or block in which it is stored. The system looks up the key in the index, jumps to the right position, and then reads on sequentially if necessary.

**Worked example 1.** A file holds customer records in order of customer number from 1000 to 9999. An index has one entry for every 1000 numbers:

| Index key (first record in block) | Block position |
|---|---|
| 1000 | Block 1 |
| 2000 | Block 2 |
| 3000 | Block 3 |
| ... | ... |

To find customer 3250: look in the index and find the largest key not above 3250, which is 3000; go straight to block 3; read the records in that block in order until 3250 is found. This is much quicker than reading from the start of the file.

**Uses:** records that need to be read **both in order** (for example to print a full list) **and individually** (a customer enquiry), such as library catalogues and customer files.

**Advantages:** fast for finding single records; also supports sequential processing; the file stays in order.
**Disadvantages:** the index takes extra storage and must be updated when records are added; inserting records into a sorted file may need reorganisation; slower than direct access for a single lookup.

### Direct (random) file access

The position of a record is **calculated directly from its key**, usually using a **hashing algorithm**, so the record can be read without reading any others. The records do not need to be in order.

**Worked example 2.** A small file has 7 storage positions, numbered 0 to 6. The position is found by the key MOD 7 (the remainder when the key is divided by 7).

| Key | Calculation | Position |
|---|---|---|
| 15 | 15 ÷ 7 = 2 remainder 1 | 1 |
| 22 | 22 ÷ 7 = 3 remainder 1 | 1 (taken) |
| 38 | 38 ÷ 7 = 5 remainder 3 | 3 |

Key 22 produces the same position as key 15. This is a **collision**. One way to handle it is to put the record in the next free position, which is 2. To find key 22 later, the system calculates position 1, finds key 15 there, and then checks the next position, 2, where it finds 22.

**Uses:** systems that need very fast access to single records and have no need for order, such as airline seat reservation, online banking and real-time stock enquiries.

**Advantages:** very fast for one record; no sorting needed; no index to search.
**Disadvantages:** collisions need handling; the file may have unused spaces; the records are not in order, so printing a sorted list needs extra work; the hashing method must be well chosen.

| Method | Fast single lookup? | Fast to process every record in order? |
|---|---|---|
| Sequential | No | Yes |
| Indexed sequential | Yes | Yes |
| Direct | Yes, the fastest | No |

## Database management systems (DBMS)

A **database management system** is the software that creates, stores, protects and gives access to a database. The syllabus names four types, which differ in how data is organised.

### Hierarchical

Data is arranged as a **tree**: each record (a "child") has only **one parent**, and a parent can have many children. To reach a record you move down from the top ("root"). It suits data with a natural one-to-many structure, such as a company organisation chart or a file system.

- **Advantages:** simple; fast access along the paths.
- **Disadvantages:** many-to-many relationships are hard to show; changing the structure is difficult; data may be repeated.

### Network

Data is arranged as a **graph**: a record can have **many parents and many children**, linked by pointers. It can represent many-to-many relationships directly. It was used for complex systems such as telecoms and manufacturing.

- **Advantages:** flexible; supports many-to-many relationships; quicker than hierarchical for complex links; avoids repeating data.
- **Disadvantages:** complex to design and maintain; the pointers must be managed; users need to know the structure.

### Object-oriented

Data is stored as **objects**, which combine data (attributes) and the actions that can be applied to it (methods), in the same way as object-oriented programming. It suits complex data such as images, video, audio and computer-aided design.

- **Advantages:** handles complex, multimedia data; objects can be reused; matches object-oriented programs closely.
- **Disadvantages:** less widely used and understood; no single standard query method; can be slower for simple tabular data.

### Relational

Data is stored in **tables** (relations) of rows and columns, linked using **keys**. Queries select and combine data from several tables. It is the most widely used type.

- **Advantages:** flexible and easy to understand; relationships can be added without changing the stored data; reduces repeated data through normalisation; widely supported with standard query tools; strong integrity through keys and validation.
- **Disadvantages:** joins between many large tables can be slow; not ideal for complex data like multimedia; needs careful design.

| Type | Structure | Relationship strength | Typical use |
|---|---|---|---|
| Hierarchical | Tree | One-to-many | File systems, organisation charts |
| Network | Graph | Many-to-many | Complex linked systems |
| Object-oriented | Objects with methods | Complex data | Multimedia, design |
| Relational | Linked tables | Any, through keys | Most business systems |

## Management information systems (MIS)

A **management information system** collects data from across an organisation, stores and processes it, and produces **information in a form that managers can use to make decisions**.

### Features of an MIS

- **Collects data** from many sources, such as sales, stock, finance and human resources, often from transaction processing.
- **Stores** it in a central database.
- **Processes** it: sorting, summarising, calculating and comparing with targets or past results.
- Produces **reports**: summary reports, exception reports (showing only what is outside normal limits) and trends.
- Provides **query** and **what-if** tools to explore data.
- Controls **access** so that each manager sees only the data they need.

### How organisations use an MIS

| Department | Use |
|---|---|
| Sales | Track sales by product, region and month; compare with targets |
| Stock control | Show stock levels and flag items that need ordering |
| Finance | Monitor spending against budget; forecast cash flow |
| Senior managers | Overview of the whole business for strategic planning |

**Worked example 3.** A supermarket chain's MIS combines daily till data from every store. An exception report shows only the stores whose sales fell more than 10 per cent below target, so the manager can investigate those stores.

**Advantages of an MIS:** better and faster decisions; a single view of the organisation; problems are found early; saves managers' time.
**Disadvantages:** expensive to set up; relies on accurate and complete data; staff need training; managers may rely on it too much; security of the central data must be protected.

## Common mistakes

- Confusing **generic** formats (many programs can open them) with **open-source** formats (the specification is public).
- Mixing up indexed sequential access (index then block) and direct access (calculated position).
- Describing an MIS as "the same as a database". An MIS uses data from databases to produce information for managers.

## Exam technique

- **Describe** an access method with the steps: what is stored, how the record is located and what happens next.
- **Compare** the four DBMS types by structure and the kind of relationships they handle, and link each to a use.
- For **MIS**, name the data input, the processing and the output used for a decision.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 10 Database and file concepts, section 10.4 File and data management.
