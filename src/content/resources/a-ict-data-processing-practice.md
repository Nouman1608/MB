---
title: "A Level ICT: Data Processing and Information — Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Section 1 – Data Processing and Information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
description: "Original exam-style practice questions with full worked answers on data vs information, validation, verification, databases and data protection."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Data Processing and Information revision notes](/resources/a-ict-data-processing-revision-notes/)

---

## Section A

**1.** Distinguish between data, information and knowledge, giving an example of each. **[3]**

**2.** State **four** factors that affect the quality of information. **[4]**

## Section B

**3.** Explain the difference between validation and verification.

**(a)** Describe **four** validation checks and give a suitable field for each. **[8]**
**(b)** Describe **two** methods of verification. **[4]**
**(c)** Explain why validation cannot guarantee that data is correct. **[2]**

**4.** Explain the difference between a flat file and a relational database, and give **three** advantages of a relational database. **[7]**

**5.** Explain the terms primary key, foreign key and referential integrity. **[6]**

**6.** Explain **four** principles that data protection legislation typically places on organisations holding personal data. **[8]**

## Section C

**7.** Distinguish between static and dynamic data, giving an example of each. **[2]**

**8.** A researcher can either run their own survey or use existing census data.

**(a)** State whether each is a direct or an indirect data source. **[2]**
**(b)** Explain **one** advantage and **one** disadvantage of using the census data instead of running a new survey. **[4]**

**9.** Explain why payroll processing typically uses batch processing rather than real-time processing, and explain why an autopilot system could not use batch processing instead. **[4]**

---

## Answers

**1. Data** — **raw facts and figures with no context**, e.g. "42" [1]. **Information** — **data given context and meaning**, e.g. "42 students attended" [1]. **Knowledge** — **information applied with understanding to make a decision**, e.g. recognising that 42 is below average attendance and acting on it [1].

**2.** Any four: **accuracy**, **relevance**, **completeness**, **timeliness (up to date)**, **level of detail**, **presentation and clarity of format** [1] [1] [1] [1].

**3. (a)** Any four, 2 marks each: **Range check** — the value must fall between set limits; suitable for **age or a percentage mark** [1] [1]. **Format (picture) check** — the data must match a pattern; suitable for a **postcode or a date** [1] [1]. **Presence check** — the field must not be left blank; suitable for a **surname or student ID** [1] [1]. **Type check** — the data must be of the correct data type; suitable for a **numeric quantity field** [1] [1]. **Length check** — a set number of characters; suitable for a **phone number** [1] [1]. **Check digit** — a calculated digit appended to a code; suitable for a **barcode or ISBN** [1] [1].
**(b)** **Double entry** — the data is entered twice, by the same or different operators, and the two versions are compared by the computer; any difference is flagged [1] [1]. **Visual (proofreading) check** — the operator compares the data on screen against the original source document [1] [1].
**(c)** Validation only checks that data is **sensible and of the right form**, not that it is true [1]; an age of 35 entered for a 34-year-old **passes every check but is still wrong** [1].

**4.** A **flat file** stores all data in a **single table**, so the same information is repeated on many records [1]. A **relational database** stores data in **several linked tables**, related by key fields [1].
Advantages: **reduced data redundancy** — each fact is stored once, saving storage [1]; **improved data consistency** — an update is made in one place, so records cannot disagree with one another [1]; **improved data integrity and security**, since access rights can be granted table by table [1]; **greater flexibility** — new queries and reports can combine tables without restructuring the data [1]; **easier maintenance and expansion** [1].

**5. Primary key** — a field (or combination) that **uniquely identifies each record in a table**; no two records may share it and it cannot be null [1] [1]. **Foreign key** — a field in one table that **refers to the primary key of another table**, creating the relationship between them [1] [1]. **Referential integrity** — the rule that a **foreign key value must always match an existing primary key value** in the related table [1], which prevents "orphan" records such as an order attached to a customer who does not exist [1].

**6.** Any four, 2 marks each: data must be **processed lawfully and fairly**, with the subject informed of how it will be used [1] [1]. It must be collected for **specified, explicit purposes and not used for anything incompatible** with them [1] [1]. It must be **adequate, relevant and limited to what is necessary** — organisations should not collect data "just in case" [1] [1]. It must be **accurate and kept up to date**, with inaccuracies corrected or erased [1] [1]. It must **not be kept longer than necessary** [1] [1]. It must be **kept secure against unauthorised access, loss or damage**, using encryption, access controls and backups [1] [1].

**7. Static** data does not change once recorded, e.g. a date of birth [1]. **Dynamic** data changes automatically as its source updates, e.g. a live share price or a sensor reading [1].

**8. (a)** The researcher's own survey is a **direct** source [1]; the census data is an **indirect** source, since it was collected for a different original purpose [1].
**(b)** Any one advantage: the census data is **cheap and immediately available**, and often covers a very large sample [1] [1]. Any one disadvantage: it **may be out of date, in the wrong format for the researcher's needs, or carry an unknown bias**, since it was not designed for this specific research question [1] [1].

**9.** Payroll involves a **large volume of similar transactions with no urgency**, so it can be collected and processed together in a scheduled batch, e.g. overnight when the system is otherwise idle [2]. An **autopilot is a real-time control system**, where the output (an adjustment to the aircraft's controls) must feed back to influence the very next input **immediately** — a delay of even a few seconds while data is batched would be unsafe, since the system must respond continuously to changing conditions [2].

---

## Where marks are usually lost

- Confusing validation with verification.
- Giving a validation check without a suitable field.
- Saying a primary key "identifies the table" rather than each record.
- Listing data protection principles without explaining the obligation.
