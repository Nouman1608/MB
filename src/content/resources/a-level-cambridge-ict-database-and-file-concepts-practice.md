---
title: "Cambridge A Level Information Technology (ICT): Database and file concepts (9626) -- Practice Questions"
seoTitle: "Cambridge A Level ICT 9626 Databases and Files Practice"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Database and file concepts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "database-and-file-concepts"
description: "Original practice questions with marked answers for Cambridge AS & A Level IT 9626 Database and file concepts: queries, 3NF and file access."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover **topic 10, Database and file concepts**, of Cambridge International AS & A Level Information Technology (9626), following the syllabus for examination in 2025, 2026 and 2027 (version 3), sections 10.1 to 10.4. It is an **AS Level** topic, assessed in **Paper 1 (Theory)** and **Paper 2 (Practical)**; Paper 4 may also include tasks from sections 8–10. Practical skills are tested here on paper. No calculator is needed.

Learn the content in the [study guide](/resources/a-level-cambridge-ict-database-and-file-concepts/) and [revision notes](/resources/a-level-cambridge-ict-database-and-file-concepts-revision-notes/). Course hub: [Cambridge A Level ICT](/boards/cambridge/a-level/ict/). Checklist: [9626 checklist](/checklists/cambridge/a-level/ict/). Key definitions are practised in the [Data Processing practice questions](/resources/a-ict-data-processing-practice/).

Answers show one acceptable response, [1] per creditworthy point. This is indicative marking, not an official mark scheme; other valid points also earn credit.

Questions 5 to 9 use this Ticket table from a theatre box office.

| TicketID | Show | PerfDate | Area | Price | Member |
|---|---|---|---|---|---|
| T01 | Glasshouse | 06/11/2026 | Stalls | 40 | No |
| T02 | Red Kite | 06/11/2026 | Circle | 25 | Yes |
| T03 | Glasshouse | 07/11/2026 | Circle | 25 | No |
| T04 | Tidewater | 07/11/2026 | Stalls | 40 | Yes |
| T05 | Red Kite | 13/11/2026 | Stalls | 40 | No |
| T06 | Glasshouse | 13/11/2026 | Stalls | 40 | Yes |
| T07 | Tidewater | 14/11/2026 | Circle | 25 | Yes |
| T08 | Red Kite | 14/11/2026 | Circle | 25 | No |
| T09 | Glasshouse | 14/11/2026 | Circle | 25 | Yes |
| T10 | Tidewater | 20/11/2026 | Stalls | 40 | No |

## Questions

**1.** A gym stores member data. State a suitable data type and field size or format for each field: MemberID (for example GM0412), DateJoined, MonthlyFee, HasLocker. **[4]**

**2.** A clerk tries to delete a customer from the Customer table while that customer still has records in the Booking table. Explain what referential integrity does here and why it matters. **[3]**

**3.** A book can have several authors.

**(a)** State the relationship between Country and CapitalCity. **[1]**
**(b)** State the relationship between Author and Book. **[1]**
**(c)** Explain how the relationship in (b) is built in a relational database. **[2]**
**(d)** Describe what a designer adds when moving from a conceptual ERD to a logical ERD, and then to a physical ERD. **[3]**

**4.** In the Ticket table, TicketID is always "T" followed by two digits.

**(a)** Describe a validation rule and a suitable error message for TicketID. **[2]**
**(b)** Explain why TicketID entry should also be verified, and name one method. **[2]**

**5.** State the TicketIDs returned by each search.

**(a)** Area = "Stalls" AND Member = Yes **[1]**
**(b)** Show = "Red Kite" OR PerfDate >= 14/11/2026 **[2]**
**(c)** NOT Show = "Glasshouse" AND Price < 40 **[1]**
**(d)** Show like "T*", where * matches any characters **[1]**

**6.** **(a)** The manager wants to type a show name each time a query runs. Name this query type and explain why it suits the task. **[2]**
**(b)** Give one example of a static parameter query on the Ticket table. **[1]**
**(c)** Query 1 selects tickets where Member = Yes. Query 2 is based on Query 1 and selects Area = "Circle". Name this type of query and state the TicketIDs it returns. **[2]**

**7.** Members pay 80% of the Price.

**(a)** Describe a calculated field, Charged, and state its value for T04 and T07. **[3]**
**(b)** A report is grouped by Show with a calculated control in each group footer that totals Charged. State the total for Glasshouse, showing working. **[2]**
**(c)** State one difference between a calculated field and a calculated control. **[1]**

**8.** **(a)** Draw a cross-tab that counts tickets with Show down the side and Area across the top. **[3]**
**(b)** The table is sorted by Show ascending, then Price descending. State the first four TicketIDs. **[2]**

**9.** **(a)** Name the action query for each task: (i) copy all November tickets into a new table; (ii) add December's tickets to that table; (iii) add 5 to every Stalls price; (iv) remove tickets for a cancelled performance. **[4]**
**(b)** Describe how duplicate customer records could be found and removed. **[2]**

**10.** A booking form is being designed.

**(a)** Suggest a suitable control for Area and for Show, with a reason for each. **[2]**
**(b)** Explain what a linked subform would show on a Customer form. **[1]**
**(c)** State the purpose of a switchboard. **[1]**
**(d)** Describe two settings checked when importing bookings from a csv file. **[2]**

**11.** A vet clinic stores data in this unnormalised form:

Visit(VisitID, VisitDate, PetID, PetName, OwnerID, OwnerName, {TreatmentCode, TreatmentName, Cost})

Each treatment has a fixed cost.

**(a)** Explain why the data is in UNF. **[1]**
**(b)** Normalise the data to 3NF, showing 1NF, 2NF and 3NF and marking the primary keys. **[7]**
**(c)** Give one advantage and one disadvantage of normalising this data. **[2]**

**12.** **(a)** Explain why indexed sequential access suits a clinic's monthly billing run and also its customer enquiries. **[2]**
**(b)** A direct access file uses address = key mod 40. State the address for key 2614. **[1]**
**(c)** Explain why generic file formats are needed, and why open-source formats are needed. **[2]**
**(d)** Compare a relational and a hierarchical DBMS for the clinic. **[2]**
**(e)** Describe how a chain of clinics could use a management information system. **[2]**

## Answers

**1.** MemberID: **alphanumeric/text, size 6** [1]. DateJoined: **date, dd/mm/yyyy** [1]. MonthlyFee: **currency** (or decimal, 2 d.p.) [1]. HasLocker: **Boolean, yes/no** [1].
*Examiner insight:* a data type with no size or format, where one is asked for, usually earns nothing for that field.

**2.** Referential integrity means every foreign key value in Booking must match a primary key in Customer [1]. So the database **blocks the deletion** (or, if set to cascade, deletes the bookings too) [1]. This prevents **orphan bookings** linked to no customer, which would make reports wrong [1].
*Examiner insight:* a definition alone caps at one mark; the rest needs what the database does and what that prevents.

**3. (a)** **One-to-one** [1]
**(b)** **Many-to-many** [1]
**(c)** Create a **link table** (AuthorBook) holding AuthorID and BookID as its key [1], giving **two one-to-many** relationships, from Author and from Book [1].
**(d)** Logical adds **attributes and primary/foreign keys** [1]; physical adds **table and field names as built** [1], with **data types and field sizes** [1].
*Examiner insight:* in (c) "add a table" is not enough; name the two one-to-many links.

**4. (a)** Rule: first character "T" and the next two characters are digits (length exactly 3) [1]. Message: "TicketID must be T followed by two digits, e.g. T07" [1].
**(b)** A valid but wrong ID (T01 for T07) passes validation; verification checks it matches the source [1]; method: **visual check** against the document, or **double entry** [1].
*Examiner insight:* an error message must tell the user what valid data looks like; "Invalid entry" alone does not earn the mark.

**5. (a)** **T04, T06** [1]
**(b)** Red Kite: T02, T05, T08 [1]; dates from 14/11 add **T07, T09, T10**, giving six tickets [1].
**(c)** **T02, T07, T08** [1]
**(d)** **T04, T07, T10** [1]
*Examiner insight:* one extra or missing ID loses that mark.

**6. (a)** **Dynamic parameter query** [1]; the user enters a different show each time, so one query serves every show [1].
**(b)** For example, a query with Area = "Circle" fixed in its design [1].
**(c)** A **nested query** [1]; **T02, T07, T09** [1].
*Examiner insight:* "parameter query" alone is too vague in (a); the static or dynamic type must be named.

**7. (a)** Charged = IF Member = Yes, then Price × 0.8, otherwise Price [1]. T04: 40 × 0.8 = **32** [1]. T07: 25 × 0.8 = **20** [1].
**(b)** 40 + 25 + 32 + 20 [1] = **117** [1]
**(c)** A calculated field is created in a **query** for each record; a calculated control is on a **form or report** and displays a result, such as a group total [1].
*Examiner insight:* allow follow-through in (b) from wrong Charged values in (a) if the correct four records are added.

**8. (a)**

| Show | Stalls | Circle |
|---|---|---|
| Glasshouse | 2 | 2 |
| Red Kite | 1 | 2 |
| Tidewater | 2 | 1 |

Layout, Show as rows and Area as columns [1]; Glasshouse and Red Kite rows [1]; Tidewater row [1].
**(b)** **T01 and T06** (either order, both 40) [1], then **T03 and T09** (either order) [1].
*Examiner insight:* a cross-tab with fields swapped can still earn the count marks but not the layout mark.

**9. (a)** (i) **make-table** [1]; (ii) **append** [1]; (iii) **update** [1]; (iv) **delete** [1].
**(b)** Run a find-duplicates query on fields that should be unique together, such as name and date of birth [1]; check each match, then delete the extra record [1].
*Examiner insight:* make-table and append are often swapped; make-table creates a table, append adds to one that exists.

**10. (a)** Area: **radio buttons**, because there are only two fixed options [1]. Show: **drop-down menu**, for a longer list without misspellings [1].
**(b)** All the bookings for the customer currently displayed (the "many" side) [1].
**(c)** To give users a **menu of buttons** that open forms, queries and reports [1].
**(d)** The **delimiter** (comma) separating fields [1]; whether the **first row holds field names**, or each field's data type [1].
*Examiner insight:* "make it look nice" earns nothing; each design mark needs a named feature and a reason.

**11. (a)** It contains a **repeating group**: one visit has several treatments [1].
**(b)** 1NF: Visit(**VisitID**, VisitDate, PetID, PetName, OwnerID, OwnerName) [1]; VisitTreatment(**VisitID, TreatmentCode**, TreatmentName, Cost) [1].
2NF: TreatmentName and Cost depend only on TreatmentCode, part of the key [1], so Treatment(**TreatmentCode**, TreatmentName, Cost) and VisitTreatment(**VisitID, TreatmentCode**) [1].
3NF: PetName and OwnerID depend on PetID, and OwnerName on OwnerID, which are non-key fields in Visit [1]. Pet(**PetID**, PetName, OwnerID) [1]; Owner(**OwnerID**, OwnerName) and Visit(**VisitID**, VisitDate, PetID) [1].
**(c)** Advantage: each owner's name is stored once, so it is updated in one place [1]. Disadvantage: five tables, so queries need joins [1].
*Examiner insight:* tables shown without primary keys, or with a missing foreign key, lose the table mark even if the grouping is right.

**12. (a)** Records are in key order, so the billing run reads every record **sequentially** [1]; the **index** lets an enquiry jump near one record quickly [1].
**(b)** **14** [1]
**(c)** Generic formats open in **many different programs**, so data can be shared [1]; open-source formats have a **public specification**, so files stay readable without one company's software [1].
**(d)** Relational: flexible queries across owners, pets and visits [1]; hierarchical: fast on a fixed owner → pet → visit tree, but many-to-many treatments are hard to model [1].
**(e)** It combines all clinics' data into regular summary reports [1], so managers compare branches over time and plan [1].
*Examiner insight:* in (d) a comparison needs a point about each type; describing only one caps the answer at one mark.

## Where marks are usually lost

- Giving a data type without the size or format asked for.
- Treating many-to-many as a direct link.
- Missing or adding one record when listing query results.
- Writing "parameter query" without static or dynamic.
- Swapping make-table and append.
- Leaving primary keys unmarked in normalised tables.
- Removing a non-key dependency at 2NF, not 3NF.

## Next steps

- Recap with the [revision notes](/resources/a-level-cambridge-ict-database-and-file-concepts-revision-notes/).
- Re-read weak sections in the [study guide](/resources/a-level-cambridge-ict-database-and-file-concepts/).
- Pivot table practice: [Spreadsheets practice questions](/resources/a-level-cambridge-ict-spreadsheets-practice/).
- See the full course on the [course hub](/boards/cambridge/a-level/ict/) and tick off the [9626 checklist](/checklists/cambridge/a-level/ict/).
- Try [all free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 3, Cambridge University Press & Assessment. Topic 10: Database and file concepts (10.1 Creating a database; 10.2 Normalisation to third normal form (3NF); 10.3 Data dictionary; 10.4 File and data management).
