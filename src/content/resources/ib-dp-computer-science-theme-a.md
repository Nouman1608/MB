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
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-1"
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-2"
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-3"
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-4"
description: "Guide to Theme A of IB DP Computer Science, first assessment 2027: computer fundamentals, networks, databases with SQL, machine learning and the case study."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by harris-khan on 2026-09-29; 2026-11-08: reviewed by harris-khan."
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
versus WAN); the function of network devices (gateways, hardware
firewalls, modems, network interface cards, routers, switches and
wireless access points) and how they map to the layers of the TCP/IP
model (A2.1.3, SL and HL); the network protocols used for transport and
application (TCP, UDP, HTTP, HTTPS and DHCP; A2.1.4); and, HL only
(A2.1.5), the function of the TCP/IP model itself -- the role of its
application, transport, internet and network interface layers and how
they interact to ensure reliable data transmission; data transmission concepts (packet switching,
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--18-flat-file-to-relational.webp" width="900" height="1120" alt="An illustrative library example. A single flat table repeats each borrower’s surname and address on every loan row, and when McKay’s address is changed in one row only, the table holds two different addresses for McKay. The fix is two linked tables: Borrowers, with the primary key BorrowerID, and Loans, with BorrowerID as a foreign key pointing to the Borrowers table. Each address is stored once. A primary key identifies a record in its own table; a foreign key refers to a primary key in another table." loading="lazy">
  <figcaption>Splitting a flat file into related tables stores each address once and links rows with a primary and foreign key.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--19-sql-join-steps.webp" width="900" height="1074" alt="An illustrative query over two tables, Borrowers and Loans. Step 1, JOIN: each loan is matched to its borrower through BorrowerID, giving five rows. Step 2, WHERE with LIKE ’Mc%’: only the rows whose surname begins with Mc are kept, which are McKay twice and McDonald once. Step 3, ORDER BY DueDate ASC: the three kept rows are sorted with the earliest due date first, giving Tiny Gardens, Iron Roads and Sea Charts." loading="lazy">
  <figcaption>JOIN matches loans to borrowers, WHERE with LIKE keeps names beginning Mc, and ORDER BY sorts by due date.</figcaption>
</figure>


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

## Frequently asked questions

**How many teaching hours is Theme A in IB Computer Science?**
Theme A is 38 hours at SL and 72 hours at HL. The case study is a separate line in the board's table, with 15 hours at SL and 30 at HL.

**Do you need to write code for Theme A?**
Theme A is mostly descriptive and conceptual, so questions usually ask for explanation or evaluation. The exception is A.3 Databases, where you must be able to construct SQL queries between two tables.

**How is Theme A tested in IB Computer Science?**
Theme A is tested on Paper 1 together with the pre-released case study, which has its own section of short-response questions alongside extended-response questions on Theme A.

**Which database content is HL only in IB Computer Science?**
Aggregate functions on grouped data, database views, transactions and ACID, and alternative databases and data warehouses are HL only. SQL queries between two tables are required at both levels.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject
Brief -- Sciences: Computer science*, first assessment 2027, © 2024.
Verified 2026-09-06.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--14-theme-a-overview.webp" width="900" height="990" alt="Theme A asks how a computing system works and has four sub-topics: A.1 Computer fundamentals, A.2 Networks, A.3 Databases and A.4 Machine learning. Teaching hours: Theme A has 38 hours at SL and 72 at HL; the case study is a separate line with 15 hours at SL and 30 at HL. Paper 1 is set on Theme A together with the pre-released case study." loading="lazy">
  <figcaption>Theme A has four sub-topics and is assessed through Paper 1 with the pre-released case study.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--15-cpu-and-storage.webp" width="900" height="650" alt="A block diagram. The CPU contains a control unit, an ALU and registers, and runs the fetch-execute cycle, shown as a loop. Primary storage is joined to the CPU by a two-way arrow. Secondary storage is shown separately and contrasted with primary storage." loading="lazy">
  <figcaption>The CPU holds the control unit, ALU and registers and repeats the fetch-execute cycle; primary and secondary storage are distinct.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--16-operating-system-layer.webp" width="900" height="740" alt="A three-layer stack. Applications sit at the top, hardware (the CPU, primary storage and secondary storage) at the bottom, and the operating system in the middle, joined to both by two-way arrows. The operating system manages hardware resources and mediates between applications and the machine." loading="lazy">
  <figcaption>The operating system manages hardware resources and mediates between applications and the machine.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--17-tcpip-layers.webp" width="900" height="780" alt="The four layers of the TCP/IP model stacked from top to bottom: application, transport, internet and network interface, with two-way arrows between neighbouring layers showing that they interact to ensure reliable data transmission. Knowing the function of the layers is HL only. Beside the application layer sit the protocols HTTP, HTTPS and DHCP, and beside the transport layer sit TCP and UDP; knowing these protocols is required at SL and HL." loading="lazy">
  <figcaption>The four TCP/IP layers (layer roles are HL only) with the protocols named in the syllabus.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--20-transaction-commit-rollback.webp" width="900" height="940" alt="A flowchart for an HL-only topic. BEGIN TRANSACTION starts, then two statements run: A = A − 30 and B = B + 30. If everything succeeded the transaction is committed and the changes are kept, giving A = 70 and B = 80 from a start of A = 100 and B = 50 (illustrative numbers). If a statement failed the transaction is rolled back and the changes are undone, leaving A = 100 and B = 50. Transactions maintain data integrity through atomicity, consistency, isolation and durability, known as ACID." loading="lazy">
  <figcaption>A transaction either commits or rolls back; integrity rests on atomicity, consistency, isolation and durability.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-theme-a--21-rules-vs-learning.webp" width="900" height="920" alt="Two rows compare traditional rule-based programming with machine learning. In traditional programming, rules written by a person and data go into a program, which produces answers. In machine learning, training data with features goes into a machine learning system, which derives its own rules. Supervised and unsupervised learning are the two kinds named. Below, three ethical issues are shown: bias in training data, transparency of automated decisions, and the environmental cost of training large models." loading="lazy">
  <figcaption>Machine learning derives its own rules from data; ethical issues are part of the topic.</figcaption>
</figure>

