---
title: "IB DP Computer Science (DP Computer Science): Normalisation to Third Normal Form -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "A.3 -- Databases"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 1.31
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-a"
    subtopic: "ib-dp-computer-science-a-3"
description: "Twelve original questions on normalisation for IB DP Computer Science A.3: anomalies, dependencies and designs in 1NF, 2NF and 3NF, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Written from the public subject brief and the A3.2.5-A3.2.7 label (normalisation); please check the questions and mark allocations against the full DP Computer Science guide."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **A3.2.5 to A3.2.7, normalisation**, in A.3 Databases (SL and HL). Related:
[normalisation study guide](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation/)
and [revision notes](/resources/ib-dp-computer-science-2014-dp-computer-science-2027-a3-normalisation-revision-notes/).
Primary key fields are shown in **bold**.

## Section A

**1.** Define the term *redundancy* in a database. **[1]**

**2.** State the meaning of the functional dependency ProductID → Price. **[1]**

**3.** Outline **two** conditions a table must meet to be in first normal form. **[2]**

**4.** Distinguish between a partial dependency and a transitive dependency. **[2]**

**5.** A table has the fields Club1, Club2 and Club3 to record the clubs each student attends. Explain
why this table is not in first normal form. **[2]**

**6.** State **one** benefit and **one** cost of normalising a database. **[2]**

## Section B

**7.** A vet surgery stores appointments in one table:

| **ApptID** | Date | PetID | PetName | OwnerID | OwnerPhone | VetID | VetName |
|---|---|---|---|---|---|---|---|
| 501 | 03-Mar | P12 | Biscuit | O7 | 0777 111 | V2 | Dr Amin |
| 502 | 03-Mar | P15 | Kiko | O9 | 0777 222 | V2 | Dr Amin |
| 503 | 04-Mar | P12 | Biscuit | O7 | 0777 111 | V1 | Dr Bell |

**(a)** Using the data, describe **one** update anomaly and **one** deletion anomaly. **[4]**
**(b)** Explain why the table is in second normal form. **[1]**
**(c)** Identify **two** transitive dependencies in the table. **[2]**
**(d)** Normalise the table to third normal form, showing primary and foreign keys. **[4]**

**8.** A library records loans in this table, in which one member can borrow many books and one book
can be borrowed many times:

Loan(**MemberID, BookID, LoanDate**, MemberName, BookTitle, Author, ReturnDate)

**(a)** Identify the partial dependencies. **[2]**
**(b)** Normalise the table to third normal form. **[3]**

**9.** Explain how a normalised design prevents an insertion anomaly, using an example. **[2]**

**10.** Write an SQL statement that creates a table Pet(**PetID**, PetName, OwnerID) in which OwnerID
is a foreign key referencing Owner(OwnerID). **[3]**

**11.** A company's analysts run complex reports on sales data every day, but the data is updated only
once each night. Explain why the company might store a denormalised copy of the data for the reports.
**[3]**

**12.** A student claims: "My table is in 3NF because every field contains one value." Evaluate this
claim. **[4]**

---

## Answers

**1.** Storing the same fact more than once in a database [1].

**2.** Each ProductID determines exactly one Price [1].

**3.** Any two, [1] each: every field holds a single atomic value; there are no repeating groups of
fields or values; each record is uniquely identified by a primary key. Maximum 2.

**4.** A partial dependency is where a non-key attribute depends on only part of a composite primary
key [1]; a transitive dependency is where a non-key attribute depends on another non-key attribute
rather than directly on the key [1].

**5.** Club1, Club2 and Club3 are a repeating group of fields [1]; 1NF requires one value per field and
no repeating groups, so each student-club pair should be a separate row (in a separate table) [1].

**6.** Benefit, any one [1]: less redundancy; no update, insertion or deletion anomalies; consistent
data. Cost, any one [1]: queries need joins and more processing; more tables to manage.

**7. (a)** Update anomaly: Biscuit's owner phone number appears in appointments 501 and 503 [1];
if it changes, both rows must be updated, and missing one leaves conflicting numbers [1]. Deletion
anomaly: Kiko appears only in appointment 502 [1]; deleting that appointment would also delete
the only record of Kiko and owner O9's phone number [1]. (Accept equivalent examples using the vet
data.)
**(b)** The primary key ApptID is a single field, so no attribute can depend on part of the key [1].
**(c)** Any two, [1] each: PetID → PetName; PetID → OwnerID; OwnerID → OwnerPhone; VetID → VetName.
Maximum 2.
**(d)** One mark per correct table, with keys shown [4]:
```
Appointment (ApptID, Date, PetID, VetID)      PetID, VetID are foreign keys
Pet         (PetID, PetName, OwnerID)         OwnerID is a foreign key
Owner       (OwnerID, OwnerPhone)
Vet         (VetID, VetName)
```
Primary keys: ApptID, PetID, OwnerID and VetID respectively.

**8. (a)** MemberName depends only on MemberID [1]; BookTitle and Author depend only on BookID [1].
**(b)** One mark per table [3]:
```
Member (MemberID, MemberName)
Book   (BookID, BookTitle, Author)
Loan   (MemberID, BookID, LoanDate, ReturnDate)
```
Loan's primary key is (MemberID, BookID, LoanDate); MemberID and BookID are foreign keys. (If a
scenario stated that Author determines further details, those would move to an Author table; with
the fields given, the three tables are in 3NF.)

**9.** In a normalised design each entity has its own table [1], so, for example, a new vet can be
added to the Vet table before any appointment exists, which was impossible when vet details could
only be stored in an appointment row [1].

**10.** One mark for each element [3]: table and fields with types; PetID as primary key; the foreign
key clause referencing Owner. For example:
```
CREATE TABLE Pet (
    PetID   VARCHAR(5) PRIMARY KEY,
    PetName VARCHAR(30),
    OwnerID VARCHAR(5),
    FOREIGN KEY (OwnerID) REFERENCES Owner(OwnerID)
);
```
Accept other valid syntax.

**11.** Reports on normalised data need many joins across tables, which take processing time [1]. A
denormalised copy stores the joined data together, so reports run faster [1]. Because the data only
changes once a night, the copy can be rebuilt after each update, so the usual risk of anomalies from
redundancy is controlled [1].

**12.** Award up to 4:
- Agrees that one value per field (atomic values) is a requirement of 1NF [1].
- Explains that 3NF also requires 2NF: no non-key attribute may depend on part of a composite key [1].
- Explains that 3NF also requires no transitive dependencies between non-key attributes [1].
- Concludes the claim is unjustified: the table may be in 1NF only; the dependencies must be checked
  before it can be called 3NF [1].

---

## Where marks are usually lost

- Describing anomalies in general terms without using the rows given.
- Splitting tables without keeping foreign keys to link them.
- Leaving primary keys unmarked in a final design.
- Moving an attribute to the wrong table, such as putting OwnerPhone in Pet.

## Frequently asked questions

**Is normalisation HL only?**
It is not among the A.3 statements that the guide marks HL only, so SL and HL students should both
prepare it. Check your school's copy of the guide for the exact wording.

**Are these real IB questions?**
No. They are original practice questions written for revision.
