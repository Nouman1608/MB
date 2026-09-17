---
title: "IB DP Computer Science: Theme A -- Concepts of Computer Science"
resourceType: "study-guides"
subject: "computer-science"
level: ["ib"]
topic: "Theme A -- Concepts of computer science"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 2
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
description: "Computer fundamentals, networks, databases (including SQL queries) and machine learning -- the four sub-topics of Theme A for IB Diploma Programme Computer Science, first assessment 2027, and how Theme A is tested through Paper 1 and the pre-released case study."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

This guide covers **Theme A -- Concepts of Computer Science**, for IB
Diploma Programme Computer Science, first assessment 2027 (SL: 38
hours; HL: 72 hours; the case study is a separate line in the board's
table, with 15 hours at SL and 30 at HL). For the full
two-theme syllabus map, see the [IB DP Computer Science syllabus
guide](/resources/ib-dp-computer-science-syllabus-guide/).

## Where this fits in the syllabus

Theme A asks "how does a computing system work?", covered by four
sub-topics studied by both SL and HL students, HL in more hours (unlike
Theme B, where B.4 is HL only). Theme B, by contrast, asks "how do we
use a computing system to solve a problem?", and is where programming,
algorithm design and object-oriented programming live. Paper 1 is set
on Theme A together with a pre-released case study — so Theme A content
routinely appears embedded in case-study scenarios, not just as
standalone recall questions, meaning the case study cannot be revised
separately from A.1–A.4.

## Syllabus coverage

**IB DP COMPUTER SCIENCE — THEME A: CONCEPTS OF COMPUTER SCIENCE**

- **A.1 Computer fundamentals** — the hardware layer (CPU components:
control unit, ALU, registers), the fetch-execute cycle, primary versus
secondary storage; how all data types (number, text, image, sound) are
ultimately represented as binary, measured in bits and bytes; the role
of the operating system in managing hardware resources and mediating
between applications and the machine
- **A.2 Networks** — network fundamentals (clients, servers, LAN
versus WAN); the network protocols used for transport and application
(TCP, UDP, HTTP, HTTPS and DHCP; A2.1.4) and, HL only (A2.1.5), the
function of the TCP/IP model -- its application, transport, internet and
network interface layers and how they interact to ensure reliable data
transmission; data transmission concepts (packet switching,
bandwidth, common causes of transmission error) and the internet's
decentralised architecture
- **A.3 Databases** — why structured data is organised into databases
rather than flat files (reducing redundancy, preserving integrity,
controlling access); the relational model (tables, records, fields,
primary and foreign keys) and how relationships between tables are
represented; and database programming in SQL, which is required
content at both SL and HL -- the difference between SQL's data
definition and data manipulation language types, constructing queries
between two tables (joins, relational operators, filtering, pattern
matching and ordering, using commands such as SELECT, DISTINCT, FROM,
WHERE, BETWEEN, ORDER BY, GROUP BY, HAVING, ASC, DESC, JOIN, LIKE with
the % wildcard, AND, OR and NOT; exact syntax can vary between database
systems), and how SQL is used to update data in a database. HL students
also study three further database-programming statements (A3.3.4-A3.3.6,
HL only): calculations using SQL's aggregate functions on grouped data
(AVERAGE, COUNT, MAX, MIN, SUM); database views, virtual and materialized
(snapshot), and what they offer (hiding data complexity, data
consistency, independence, performance, query simplification, read-only
or updatable data, security); and how transactions maintain data
integrity through atomicity, consistency, isolation and durability
(ACID), with the transaction control commands BEGIN TRANSACTION, COMMIT
and ROLLBACK. A3.4 Alternative databases and data warehouses is also HL
only
- **A.4 Machine learning** — the distinction between traditional
rule-based programming and machine learning, where a system derives
its own rules from data; core concepts including training data,
features, and the difference between supervised and unsupervised
learning; real-world applications and the ethical issues they raise
(bias in training data, transparency of automated decisions, the
environmental cost of training large models), treated as integral
content rather than an optional add-on

## How to approach it

Because Theme A is largely descriptive and conceptual rather than
programming-based, the skill being tested is usually explanation of
mechanism or evaluation of a design choice, not writing code (the
exception is A.3, where you must be able to construct SQL queries) — a
strong A.1 answer on the fetch-execute cycle explains what each stage
actually does to data in the registers, not just names the stages in
sequence. Students sometimes over-invest revision time in Theme B
because it feels more "practical," but Paper 1 is worth an equal share
of external assessment and draws entirely from Theme A plus the case
study, so under-revising A.1–A.4 leaves real marks on the table
independently of programming ability. Because the case study is
pre-released, practise applying each of the four sub-topics directly
to its specific scenario rather than revising Theme A only in the
abstract, since Paper 1 gives the case study its own section (Section
B, short-response questions linked to the pre-seen case study),
alongside Section A's extended-response questions on Theme A.

## Worked example: applying A.3 to an unfamiliar scenario

A case study describes a library that currently stores every loan
record in a single spreadsheet, repeating the borrower's full name and
address on every row.

```
Problem identified:  storing borrower details repeatedly in every
                      loan row duplicates data (redundancy) and risks
                      inconsistency if a borrower's address is
                      updated in one row but not others

Relational fix:       split the data into two related tables --
                      Borrowers (with a primary key, e.g. BorrowerID)
                      and Loans (with a foreign key BorrowerID
                      referencing the Borrowers table)

Result:                borrower details are stored once, referenced
                       by key from each loan record, preserving
                       integrity and reducing redundancy -- the
                       relational model applied directly to the
                       case-study scenario, not just defined in the
                       abstract

Query (SQL):           list each loan for borrowers whose surname
                       begins with "Mc", earliest due date first
                       (Borrowers holds a Surname field; Loans holds
                       BookTitle and DueDate fields)

SELECT Borrowers.Surname, Loans.BookTitle, Loans.DueDate
FROM Borrowers
JOIN Loans ON Borrowers.BorrowerID = Loans.BorrowerID
WHERE Borrowers.Surname LIKE 'Mc%'
ORDER BY Loans.DueDate ASC;
```

The query shows why the key design matters for A.3's SQL content: the
JOIN matches each loan to its borrower through the foreign key, WHERE
with LIKE and the % wildcard filters by a pattern, and ORDER BY ... ASC
sorts the result -- the kind of two-table query A.3 requires you to
construct.

The relational fix is the pattern Theme A exam questions typically reward: naming
the specific concept (here, the relational model and the
primary/foreign key relationship) and applying it to the specific
detail given in the scenario, rather than defining the concept in
isolation.

## Common mistakes

Describing the fetch-execute cycle as a fixed sequence of named stages
without explaining what each stage does to data in the registers.
Confusing a primary key (uniquely identifies a record within its own
table) with a foreign key (a field referencing a primary key in a
different table) — these are tested as a pair, and mixing them up is
one of the most common Theme A errors. Treating A.4 as purely
technical and omitting the ethical dimension, when the course syllabus
brief explicitly frames raising ethical issues as one of the course's
defining characteristics. Defining LAN, WAN and other A.2 terms in
everyday, informal language rather than with the syllabus's own
vocabulary (client, server, protocol) in exam answers.

## Quick revision checklist

- Be able to explain, not just name, each stage of the fetch-execute
  cycle.
- Know the relational model well enough to redesign a flat-file
  scenario into related tables with primary and foreign keys.
- Be able to write SQL queries between two tables (JOIN, WHERE,
  BETWEEN, LIKE with %, ORDER BY) and explain how SQL is used to
  update data.
- Learn at least two ethical issues machine learning applications can
  raise, alongside the technical concepts of A.4.
- Revise A.1–A.4 directly against the pre-released case study, not
  only in the abstract.
- Give Theme A revision time equal to Theme B, since Paper 1 draws
  entirely from Theme A plus the case study.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject
Brief -- Sciences: Computer science*, first assessment 2027, © 2024.
Verified 2026-09-06.
