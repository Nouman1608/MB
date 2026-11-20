---
title: "Cambridge A Level Information Technology (9626): File and data management -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original Cambridge 9626 IT section 10.4 questions with answers on file formats, indexed sequential and direct access, DBMS types and MIS."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-20: check the example file formats and the hashing calculation in the answers against the teaching materials used for the course."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [File and data management study guide](/resources/cambridge-a-level-ict-9626-file-and-data-management/) | [File and data management revision notes](/resources/cambridge-a-level-ict-9626-file-and-data-management-revision-notes/)

These questions are for **section 10.4 File and data management** (Topic 10, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** State what is meant by a generic file format and give **two** examples. **[3]**

**2.** State **one** difference between a proprietary file format and an open-source file format. **[2]**

**3.** Identify the type of database management system described.

**(a)** Data is stored in a tree, and each record has only one parent. **[1]**

**(b)** Data is stored in tables linked by key fields. **[1]**

**(c)** Data is stored as objects that include both data and the actions that can be applied to it. **[1]**

**4.** State what is meant by a collision when records are stored using direct file access. **[2]**

## Section B

**5.** Describe **two** reasons why a government department might choose open-source file formats for its documents. **[4]**

**6.** Describe how indexed sequential access is used to find a single customer record. **[4]**

**7.** A file has ten storage positions numbered 0 to 9. The position of a record is the remainder when its key is divided by 10. If the position is already taken, the record goes in the next free position (wrapping from 9 to 0).

Records with keys 34, 57, 64 and 84 are stored in that order.

**(a)** State the position first calculated for each key. **[2]**

**(b)** State the final position of each record. **[3]**

**(c)** Explain how the system finds the record with key 84 later. **[3]**

**8.** Compare direct file access with indexed sequential access. **[4]**

**9.** An airline wants to store seat reservations so that any seat can be found immediately while hundreds of agents use the system. State the file access method that is best and justify your answer. **[3]**

**10.** A hospital wants to store patient scans, voice notes and medical reports in one database. Evaluate the use of an object-oriented DBMS rather than a relational DBMS. **[6]**

**11.** Describe **three** features of a management information system (MIS). **[3]**

**12.** A retail chain uses an MIS to monitor its 200 stores.

**(a)** Explain what an exception report is. **[2]**

**(b)** Explain how this report helps a regional manager. **[2]**

**(c)** Describe **two** disadvantages of the retail chain using an MIS. **[4]**

---

## Answers

**1.** A format that many different programs can open or use [1], whichever program created the file [1]. Two examples from: CSV, TXT, RTF, PDF [1]. **[3]**

**2.** A proprietary format is owned and controlled by a company, which may restrict its use or need its software or licence [1], whereas an open-source format has a public specification that anyone may use freely [1]. **[2]**

**3. (a)** Hierarchical [1].

**(b)** Relational [1].

**(c)** Object-oriented [1]. **[3]**

**4.** Two different keys produce the same calculated position [1], so the second record cannot be stored in that position and another must be found [1]. **[2]**

**5.** Any two reasons, each with a development: the files can be opened without paying for particular software [1], which saves public money [1]; documents stay readable in the long term even if a company stops supporting its program [1], so records are not lost [1]; the department does not depend on one supplier [1], so it can change software [1]; citizens can open the documents with any software [1], giving fair access [1]. **[4]**

**6.** The system uses the key of the customer to look up the index [1], which lists key values and the positions of the records or blocks [1]. It goes to the block at the position given [1] and reads the records in that block in order until the required key is found [1]. **[4]**

**7. (a)** 34 gives 4; 57 gives 7; 64 gives 4; 84 gives 4 [2] (one mark if two are correct).

**(b)** 34 is at position 4; 57 at position 7 [1]; 64 is at position 5, since 4 is taken [1]; 84 is at position 6, since 4 and 5 are taken [1].

**(c)** The system calculates position 4 for key 84 [1], finds key 34 there, and checks the next positions [1] until it finds key 84 at position 6 [1]. **[8]**

**8.** Direct access calculates the position of a record from its key, whereas indexed sequential access looks up the key in an index [1]. Direct access is the fastest for one record, whereas indexed sequential is slightly slower [1]. Indexed sequential keeps the records in order and supports reading all records in sequence, whereas direct access does not keep an order [1]. Direct access needs a hashing method and a way to handle collisions, whereas indexed sequential needs an index to be stored and kept up to date [1]. **[4]**

**9.** Direct access [1], because the position of each seat record is calculated from its key, so a seat can be read immediately without searching an index [1], and no ordered processing of all seats is needed [1]. **[3]**

**10.** For: object-oriented databases store images, audio and text as objects together with the methods that handle them [1]; complex data can be kept in one system without converting it [1]; objects can be reused [1]. Against: relational databases are far more widely used, with standard query tools and skilled staff [1]; an object-oriented system may be harder to learn and more expensive [1]; simple patient details such as names and dates fit tables well [1]. Conclusion: object-oriented is justified for the scans and audio, but a hospital might keep records in a relational system and link to the media [1]. Any six marks. **[6]**

**11.** Any three from: collects data from many sources [1]; stores it in a central database [1]; processes it by summarising and comparing with targets [1]; produces reports such as summary and exception reports [1]; allows queries and what-if analysis [1]; controls who can see which data [1]. **[3]**

**12. (a)** A report that shows only the items that are outside normal or expected limits [1], for example stores whose sales are well below target [1].

**(b)** The manager sees at once which stores need attention [1], instead of reading the figures for all 200 stores, so time is saved and problems are dealt with sooner [1].

**(c)** Any two disadvantages, each with a development: it is expensive to set up and maintain [1], because of the hardware, software and staff [1]; the reports are only as good as the data, so errors lead to wrong decisions [1], because managers trust them [1]; staff need training [1], which takes time and money [1]; the central data is a target for security attacks [1], so extra protection is needed [1]. **[8]**

## Where marks are usually lost

- Confusing generic file formats with open-source file formats.
- Saying direct access needs the records to be sorted.
- Describing an index in a direct access method.
- Describing a hierarchical database as tables.
- Defining an MIS as "a database" without mentioning information for managers.
