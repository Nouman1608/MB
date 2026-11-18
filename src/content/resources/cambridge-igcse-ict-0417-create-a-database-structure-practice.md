---
title: "Cambridge IGCSE ICT (0417): Create a database structure -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["igcse"]
topic: "Topic 18: Databases"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 18.1
syllabusTopics:
  - qualification: "igcse"
    topic: "databases-0417"
    subtopic: "create-a-database-structure-0417"
description: "Original questions with mark-scheme answers on importing data, field types, keys, relationships, database types and form design for IGCSE ICT 0417."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These questions cover section 18.1 **Create a database structure** of Cambridge IGCSE ICT 0417: importing data, data types and display formats, primary and foreign keys and relationships, flat file and relational databases, and data entry forms.

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available through your school or
> Cambridge directly.

Related: [Create a database structure study guide](/resources/cambridge-igcse-ict-0417-create-a-database-structure/) · [Create a database structure revision notes](/resources/cambridge-igcse-ict-0417-create-a-database-structure-revision-notes/)

---

## Section A: short answers

**1.** State what is meant by a *foreign key*. **[1]**

**2.** Which **one** of the following is the most suitable display format for a Boolean field that records whether a fee has been paid?

A: currency

B: percentage

C: checkbox

D: DD/MM/YYYY

**[1]**

**3.** A .txt file is imported into a database but every record appears in a single field. State the most likely cause. **[1]**

**4.** Give **two** characteristics of a primary key. **[2]**

**5.** A Discount field contains the value 0.15 and is set to display as a percentage with 0 decimal places. State what is displayed. **[1]**

**6.** Give **two** disadvantages of a flat file database. **[2]**

---

## Section B: structured questions

**7.** A vet's surgery imports a file called pets.csv. The first line of the file is:

PetID,PetName,Species,DateOfBirth,Weight,OwnerPhone,Insured

Complete the table by giving the most suitable data type for each field, and a format where appropriate.

| Field | Example value |
|---|---|
| PetID | P0412 |
| DateOfBirth | 21/06/2022 |
| Weight | 4.35 |
| OwnerPhone | 01632960555 |
| Insured | TRUE |

**[5]**

**8.** The surgery also has an Owners table and wants to link each pet to its owner.

**(a)** State the field that should be added to the Pets table and the name of this type of key. **[2]**

**(b)** State the type of relationship between Owners and Pets and explain why. **[2]**

**(c)** The relationship cannot be created. Give the most likely reason. **[1]**

**9.** A library stores all its loans in one table. Each record contains the book title, the borrower's name, address and phone number, and the loan date.

**(a)** Explain **two** problems caused by storing the data this way. **[4]**

**(b)** Describe how a relational database would avoid these problems. **[2]**

**10.** A data entry form is designed for the surgery's receptionist. Name the most suitable control for each of the following and give a reason.

**(a)** Species, chosen from a list of twelve species. **[2]**

**(b)** Whether the pet is insured. **[2]**

**(c)** Appointment type, which is exactly one of *Check-up*, *Vaccination* or *Surgery*. **[2]**

**11.** Describe **four** characteristics of a well-designed data entry form. **[4]**

**12.** A student imports members.csv. The first row contains the field names, but the student does not tick the option *first row contains field names*.

Describe **two** effects on the table. **[2]**

---

## Answers

**1.** A field in one table that is the primary key of another table, used to link the two tables. **[1]**

**2.** C: checkbox. **[1]**

**3.** The wrong delimiter was chosen (for example comma instead of tab), so the fields were not separated. **[1]**

**4.** Any two: holds a unique value for every record (1); cannot be left blank (1); should not change (1); identifies a single record (1). **[2]**

**5.** 15%. **[1]**

**6.** Any two: data is repeated (redundancy), wasting storage (1); a change must be made in many records (1); if some copies are not updated, the data becomes inconsistent (1). **[2]**

**7.** 1 mark each:
- PetID: text (contains a letter) (1).
- DateOfBirth: date/time, displayed DD/MM/YYYY (1).
- Weight: numeric, decimal with 2 decimal places (1).
- OwnerPhone: text, so the leading zero is kept (1).
- Insured: Boolean/logical, displayed as yes/no, true/false or a checkbox (1). **[5]**

**8. (a)** The owner's ID, for example OwnerID (1), which is a foreign key (1). **[2]**

**(b)** One-to-many (1): one owner can have many pets, but each pet has only one owner (1). **[2]**

**(c)** OwnerID has a different data type (or size) in the two tables. **[1]**

**9. (a)** Two problems, each explained:
- Data redundancy (1): a borrower's name, address and phone number are stored again for every book they borrow, which wastes storage (1).
- Inconsistent data (1): if a borrower changes address, every one of their records must be updated; if one is missed, the table holds two different addresses (1). **[4]**

**(b)** Store borrowers in their own table with a primary key such as BorrowerID, so each borrower's details are stored only once (1); the loans table holds BorrowerID as a foreign key, linked to the borrowers table, so a change of address is made in one place only (1). **[2]**

**10. (a)** Drop-down menu (1), because there are many options and the receptionist can only choose one that is in the list, which avoids spelling errors (1). **[2]**

**(b)** Check box (1), because the field has only two values, insured or not, which matches a Boolean field (1). **[2]**

**(c)** Radio buttons (1), because exactly one of a small number of options must be chosen, and all options are visible at once (1). **[2]**

**11.** Any four, 1 mark each: a clear title showing the form's purpose (1); fields in a logical order, matching the source document (1); a clear label next to each field (1); field boxes sized to suit the data (1); consistent, readable fonts and sizes (1); use of white space so the form is not cluttered (1); suitable controls such as drop-down menus, radio buttons and check boxes (1); navigation or save buttons (1); required fields clearly marked (1). **[4]**

**12.** Any two, 1 mark each: the field names become the first record of data (1); the fields are given default names such as Field1, Field2 instead of the specified names (1); data types may be set wrongly (for example a date field becomes text) because the first row contains text (1). **[2]**

## Frequently asked questions

**Do I need to know which database package to use?**
No. The skills apply to any database software that can import files, set field types and keys, create relationships and design forms.

**Is an autonumber field allowed as a primary key?**
A field that automatically gives each record a new number is unique, so it can act as a primary key. In practical tasks, use the field the task specifies.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 18 "Databases", 18.1 Create a database structure.
