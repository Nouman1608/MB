---
title: "Cambridge A Level Information Technology (9626): Normalisation to third normal form (3NF) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Ten original Cambridge 9626 IT section 10.2 questions with answers on UNF, 1NF, 2NF and 3NF, dependencies and normalising given data."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Normalisation study guide](/resources/cambridge-a-level-ict-9626-normalisation-to-3nf/) | [Normalisation revision notes](/resources/cambridge-a-level-ict-9626-normalisation-to-3nf-revision-notes/)

These questions are for **section 10.2 Normalisation to third normal form (3NF)** (Topic 10, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** State what is meant by a repeating group. **[1]**

**2.** State the conditions that a table must meet to be in first normal form (1NF). **[3]**

**3.** Explain the difference between a partial dependency and a transitive dependency. **[3]**

**4.** State what a table in 3NF must not contain, in addition to meeting the conditions for 2NF. **[1]**

## Section B

**5.** Describe **two** problems caused by storing a customer's address on every order in a single table. **[4]**

**6.** A clinic records appointments in one table.

Appointment(**AppointmentNo**, AppointmentDate, PatientID, PatientName, DoctorID, DoctorName, Room)

Each appointment has one patient and one doctor. Each doctor always uses the same room.

**(a)** Explain why the table is already in 2NF. **[2]**

**(b)** Identify **two** transitive dependencies. **[2]**

**(c)** Write the tables in 3NF. Show the primary key of each table and any foreign keys. **[6]**

**7.** A training company records course bookings in this unnormalised form.

| BookingNo | ClientID | ClientName | Courses (CourseCode, CourseTitle, Fee) |
|---|---|---|---|
| 501 | K10 | Aldous Ltd | W1, Welding, 300; S2, Safety, 120 |
| 502 | K11 | Brennan Co | S2, Safety, 120 |

**(a)** Identify the repeating group. **[1]**

**(b)** Show the data in 1NF. State the primary key. **[3]**

**(c)** Identify the partial dependencies. **[2]**

**(d)** Write the tables in 2NF, then in 3NF. **[6]**

**8.** Explain **two** advantages and **one** disadvantage of normalising a database to 3NF. **[5]**

**9.** A pupil says: "A table with a single-field primary key that is in 1NF must also be in 2NF." State whether the pupil is correct and explain why. **[2]**

**10.** A designer is asked to decide whether to leave a reporting table not fully normalised. Discuss the reasons for and against. **[4]**

---

## Answers

**1.** A set of fields that occurs more than once in a single record, for example several products on one order [1]. **[1]**

**2.** Every field holds a single (atomic) value [1]; there are no repeating groups [1]; there is a primary key that identifies each record [1]. **[3]**

**3.** A partial dependency is where a non-key attribute depends on only part of a composite primary key [1]. A transitive dependency is where a non-key attribute depends on another non-key attribute [1]. Partial dependencies are removed to reach 2NF, and transitive dependencies to reach 3NF [1]. **[3]**

**4.** Transitive dependencies (no non-key attribute depends on another non-key attribute) [1]. **[1]**

**5.** Any two, each with a development: the address is repeated, so storage is wasted [1], because the same data is stored many times [1]; if the address changes, every order must be edited [1], and if one is missed the data contradicts itself [1]; a customer with no orders cannot be stored [1], so new customers cannot be recorded before they order [1]; deleting the only order loses the address [1], which is unwanted data loss [1]. **[4]**

**6. (a)** The primary key is a single field, AppointmentNo [1], so no attribute can depend on only part of the key [1].

**(b)** PatientName depends on PatientID, a non-key attribute [1]. DoctorName (and Room) depend on DoctorID, a non-key attribute [1].

**(c)** Patient(**PatientID**, PatientName) [1]. Doctor(**DoctorID**, DoctorName, Room) [1]. Appointment(**AppointmentNo**, AppointmentDate, PatientID, DoctorID) [2]. PatientID and DoctorID are foreign keys in Appointment [2]. **[10]**

**7. (a)** The courses: CourseCode, CourseTitle and Fee occur more than once in a booking [1].

**(b)** One row for each course on a booking, with all the booking details repeated [2]:

| BookingNo | CourseCode | ClientID | ClientName | CourseTitle | Fee |
|---|---|---|---|---|---|
| 501 | W1 | K10 | Aldous Ltd | Welding | 300 |
| 501 | S2 | K10 | Aldous Ltd | Safety | 120 |
| 502 | S2 | K11 | Brennan Co | Safety | 120 |

The primary key is BookingNo and CourseCode together (composite) [1].

**(c)** ClientID and ClientName depend only on BookingNo [1]. CourseTitle and Fee depend only on CourseCode [1].

**(d)** 2NF: Booking(**BookingNo**, ClientID, ClientName) [1]; Course(**CourseCode**, CourseTitle, Fee) [1]; BookingLine(**BookingNo**, **CourseCode**) [1]. 3NF: ClientName depends on ClientID, so Client(**ClientID**, ClientName) [1] and Booking(**BookingNo**, ClientID) [1], with Course and BookingLine unchanged [1]. **[12]**

**8.** Any two advantages, each with a development: less repeated data, so less storage is used [1], because each fact is stored once [1]; data is consistent because a change is made in one place [1], so there are no contradictory copies [1]; no insert, update or delete anomalies [1], so records can be added and removed safely [1]. One disadvantage: more tables, so queries need joins which can be slower and harder to write [1]. Marks: two advantages with one development each, one disadvantage, to a maximum of five. **[5]**

**9.** The pupil is correct [1], because a partial dependency can exist only when the key has more than one field, so with a single-field key no attribute can depend on part of it [1]. **[2]**

**10.** For: reporting needs data from many tables, and joining them each time can be slow [1]; a single table is simpler to query for reports [1]. Against: it repeats data, wasting storage and risking inconsistent data [1]; changes must be made in many places [1]. (Any four points, or two for and two against.) **[4]**

## Where marks are usually lost

- Describing 2NF as "removing repeating groups".
- Confusing partial and transitive dependencies.
- Splitting tables without showing primary and foreign keys.
- Leaving an attribute in the original table after moving it.
- Applying 2NF checks to a table with a single-field key.
