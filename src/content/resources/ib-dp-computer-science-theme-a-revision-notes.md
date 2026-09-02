---
title: "Theme A -- Concepts of Computer Science: Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "Theme A -- Concepts of computer science"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
description: "Condensed recall notes on Theme A -- computer fundamentals, networks, databases and machine learning -- for IB Diploma Programme Computer Science, first assessment 2027."
author: "marlbridge-academic-team"
publishedDate: 2026-09-02
featured: false
---

Condensed for quick recall of **Theme A -- Concepts of computer science**, which covers how
computing systems actually work (SL: 38 hours; HL: 72 hours, including the case study). For the
full two-theme syllabus map, use the
[IB DP Computer Science syllabus guide](/resources/ib-dp-computer-science-syllabus-guide/).
Theme A's Paper 1 questions also draw on the pre-released case study, so revising these four
topics in isolation from the case study leaves a real gap close to the exam.

## What Theme A covers

Theme A has four official sub-topics, all studied by both SL and HL students (unlike Theme B,
where B.4 is HL only).

## A.1 Computer fundamentals

- The hardware layer: CPU components (control unit, ALU, registers), the fetch-execute cycle, and
  primary vs secondary storage.
- How data of every type -- number, text, image, sound -- is ultimately represented as binary, and
  the basic units (bit, byte) used to measure it.
- The role of the operating system in managing hardware resources and mediating between
  applications and the underlying machine.

## A.2 Networks

- Network fundamentals: clients, servers, and the distinction between a LAN and a WAN.
- The layered model of network communication and the role of protocols (e.g. TCP/IP, HTTP) in
  letting different systems exchange data reliably.
- Data transmission concepts -- packet switching, bandwidth, and common causes of transmission
  error -- and why the internet's architecture is described as decentralised.

## A.3 Databases

- Why structured data is organised into databases rather than flat files: reducing redundancy,
  preserving integrity, and controlling access.
- The relational model -- tables, records, fields, primary and foreign keys -- and how
  relationships between tables are represented.
- Querying data (conceptually, independent of any one query language) to retrieve, filter and
  combine information stored across related tables.

## A.4 Machine learning

- The distinction between traditional rule-based programming and machine learning, where a system
  derives its own rules from data.
- Core concepts: training data, features, and the difference between supervised and unsupervised
  learning approaches.
- Real-world applications of machine learning, and the ethical issues they raise -- bias in
  training data, transparency of automated decisions, and the environmental cost of training large
  models -- which the course treats as integral content, not an optional add-on.

## Theme A vs Theme B, and why the split matters for revision

Theme A asks "how does a computing system work?"; Theme B (Computational thinking and
problem-solving) asks "how do we use one to solve a problem?" Concretely, that means Theme A's
four topics are largely descriptive and conceptual -- explaining architecture, protocols, data
models and machine-learning principles -- while Theme B is where programming, algorithm design and
object-oriented programming live. Students sometimes over-invest revision time in Theme B because
it feels more "practical", but Paper 1 is worth an equal share of the external assessment and draws
entirely from Theme A plus the case study, so under-revising A.1-A.4 leaves real marks on the
table independently of programming ability.

## How it's tested

Paper 1 draws its four topic-specific questions from Theme A plus three questions tied to the
pre-released case study, so A.1-A.4 content routinely appears embedded in case-study scenarios
rather than as standalone recall questions. Programming-heavy content lives in Theme B, not Theme
A, so Theme A questions are more conceptual: explaining how something works, evaluating a design
choice, or applying a concept (e.g. normalisation, in A.3) to an unfamiliar scenario, rather than
writing code.

## Common exam pitfalls

- Describing the fetch-execute cycle from memory as a fixed sequence without being able to explain
  what each stage actually does to data in the registers -- examiners reward explanation of
  mechanism, not just naming the stages.
- In A.3, confusing a primary key (uniquely identifies a record within its own table) with a
  foreign key (a field that references a primary key in a different table) -- these are tested as
  a pair, and mixing them up is one of the most common Theme A errors.
- Treating A.4 as purely conceptual and skipping the ethical dimension -- the course syllabus
  brief explicitly frames "raising ethical issues" as one of the course's defining characteristics,
  and Theme A extended-response questions can ask you to evaluate a machine-learning application on
  ethical as well as technical grounds.
- Assuming LAN/WAN terminology from everyday use is precise enough for exam answers -- define terms
  using the syllabus's own vocabulary (client, server, protocol) rather than informal substitutes.

## Self-test

1. What is the difference between primary storage and secondary storage?
2. Why is a relational database preferred over storing all data in a single flat file?
3. Name two ethical issues machine learning applications can raise.
4. What is the fetch-execute cycle, in outline?

**Answers:** 1. Primary storage (e.g. RAM) is directly accessible to the CPU and is typically
volatile and fast but limited in capacity; secondary storage (e.g. an SSD) is non-volatile,
larger-capacity, but slower, and used to hold data and programs when not actively in use. 2. A
relational database reduces data redundancy (data is stored once and referenced via keys rather
than duplicated across records), preserves data integrity when records are updated, and allows
structured, controlled access -- a flat file duplicates and fragments related data with no way to
enforce consistency between copies. 3. Any two of: bias in training data leading to unfair or
discriminatory outputs, lack of transparency in how automated decisions are reached, and the
environmental/energy cost of training large models. 4. The CPU fetches an instruction from memory,
decodes what operation it specifies, and executes that operation (which may read or write data via
the registers), before repeating the cycle for the next instruction.

## Official syllabus

International Baccalaureate Organization, *Diploma Programme Subject Brief -- Sciences: Computer
science*, first assessment 2027, © 2024.
