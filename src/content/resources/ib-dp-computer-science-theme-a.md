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
description: "Computer fundamentals, networks, databases and machine learning -- the four sub-topics of Theme A for IB Diploma Programme Computer Science, first assessment 2027, and how Theme A is tested through Paper 1 and the pre-released case study."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

This guide covers **Theme A -- Concepts of Computer Science**, for IB
Diploma Programme Computer Science, first assessment 2027 (SL: 38
hours; HL: 72 hours, including the case study). For the full
two-theme syllabus map, see the [IB DP Computer Science syllabus
guide](/resources/ib-dp-computer-science-syllabus-guide/).

## Where this fits in the syllabus

Theme A asks "how does a computing system work?", covered by four
sub-topics studied identically by both SL and HL students (unlike
Theme B, where B.4 is HL only). Theme B, by contrast, asks "how do we
use a computing system to solve a problem?", and is where programming,
algorithm design and object-oriented programming live. Paper 1 draws
its four topic-specific questions from Theme A, plus three further
questions tied to a pre-released case study — so Theme A content
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
versus WAN); the layered model of network communication and the role
of protocols (e.g. TCP/IP, HTTP) in letting different systems exchange
data reliably; data transmission concepts (packet switching,
bandwidth, common causes of transmission error) and the internet's
decentralised architecture
- **A.3 Databases** — why structured data is organised into databases
rather than flat files (reducing redundancy, preserving integrity,
controlling access); the relational model (tables, records, fields,
primary and foreign keys) and how relationships between tables are
represented; querying data conceptually, independent of any one query
language, to retrieve, filter and combine information across related
tables
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
mechanism or evaluation of a design choice, not writing code — a
strong A.1 answer on the fetch-execute cycle explains what each stage
actually does to data in the registers, not just names the stages in
sequence. Students sometimes over-invest revision time in Theme B
because it feels more "practical," but Paper 1 is worth an equal share
of external assessment and draws entirely from Theme A plus the case
study, so under-revising A.1–A.4 leaves real marks on the table
independently of programming ability. Because the case study is
pre-released, practise applying each of the four sub-topics directly
to its specific scenario rather than revising Theme A only in the
abstract, since three of Paper 1's questions are built around that
case study specifically.

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
```

This is the pattern Theme A exam questions typically reward: naming
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
defining characteristics. Using everyday, informal LAN/WAN terminology
rather than the syllabus's own vocabulary (client, server, protocol)
in exam answers.

## Quick revision checklist

- Be able to explain, not just name, each stage of the fetch-execute
  cycle.
- Know the relational model well enough to redesign a flat-file
  scenario into related tables with primary and foreign keys.
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
