---
title: "AQA A-Level Computer Science (7517): Conceptual Data Models and Entity Relationship Modelling -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of databases"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-databases"
    subtopic: "conceptual-data-models-and-entity-relationship-modelling-7517"
description: "Original AQA 7517 section 4.10.1 questions with answers: identifying entities and relationships, resolving many-to-many links and writing entity descriptions."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data modelling study guide](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling/) | [Data modelling revision notes](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes/)

In entity descriptions, show the attribute or attributes that form the identifier in bold (in an exam you would underline them). Draw relationships in text as `A 1 ------< B` for one-to-many.

---

## Section A

**1.** State what is meant by an entity in a data model. **[1]**

**2.** State what is meant by an entity identifier. **[1]**

**3.** Name the type of relationship between a customer and the orders they place, if each order is placed by one customer. **[1]**

**4.** State why a many-to-many relationship cannot be stored directly in a relational database. **[1]**

**5.** Explain why Price is more likely to be an attribute than an entity in a model of a shop. **[1]**

## Section B

**6.** A club keeps details of its members (membership number, name, date of birth). Each member belongs to exactly one team. A team (team name, coach) has many members.

**(a)** State the relationship between Team and Member. **[1]**
**(b)** Write entity descriptions for Team and Member, showing identifiers and the attribute that links them. **[3]**

**7.** A university keeps details of students (student number, name) and modules (module code, title). A student takes many modules and a module is taken by many students. For each student on a module, the mark awarded is recorded.

**(a)** State the type of relationship between Student and Module. **[1]**
**(b)** Explain how the relationship should be modelled, naming a new entity. **[2]**
**(c)** Write entity descriptions for all three entities, showing identifiers. **[4]**

**8.** A veterinary clinic keeps details of owners (owner number, name, phone), pets (pet number, name, species) and vets (vet number, name). Each pet has one owner, and an owner can have several pets. A vet can examine many pets and a pet can be examined by many vets. The date and diagnosis of each examination are recorded; a pet may be examined by the same vet more than once, on different dates.

**(a)** Draw an entity relationship diagram for the clinic. **[5]**
**(b)** Write entity descriptions for all four entities, showing identifiers. **[5]**

**9.** A cinema stores films (film number, title, certificate), screens (screen number, number of seats) and showings. A showing is one film shown on one screen at a given date and time. A screen shows many films over time, and a film is shown on many screens. Tickets (ticket number, price) are sold for one showing; a showing has many tickets.

**(a)** Identify the entities, including any link entity. **[3]**
**(b)** Write entity descriptions, with identifiers. **[5]**

**10.** A student's model for a school has the entity `Teacher (TeacherNo, Name, Subject1, Subject2, Subject3)`. Explain what is wrong with this description and suggest an improved model. **[4]**

**11.** Explain why a link entity usually has an identifier made of more than one attribute, and why a date is sometimes needed in the identifier. **[3]**

---

## Answers

**1.** A thing about which data is stored (and which becomes a table in the database) [1].

**2.** An attribute, or combination of attributes, that uniquely identifies each occurrence of the entity [1].

**3.** One-to-many [1].

**4.** A table cannot hold a variable number of links to the other table in a single field (it would need repeating values); the relationship must be resolved with a link entity [1].

**5.** Price is a property of a product, not a thing about which separate data is held [1].

**6. (a)** One-to-many (one team, many members) [1].
**(b)** `Team (`**`TeamName`**`, Coach)` [1]; `Member (`**`MembershipNo`**`, Name, DateOfBirth, TeamName)` [1]; TeamName appears in Member to show which team the member belongs to [1].

**7. (a)** Many-to-many [1].
**(b)** Add a link entity such as Enrolment (Result) [1] with a one-to-many relationship from Student to Enrolment and from Module to Enrolment [1].
**(c)** `Student (`**`StudentNo`**`, Name)` [1]; `Module (`**`ModuleCode`**`, Title)` [1]; `Enrolment (`**`StudentNo, ModuleCode`**`, Mark)` [1]; the identifier of the link entity is the combination of StudentNo and ModuleCode, and Mark is an attribute of the pairing [1].

**8. (a)** Four entities drawn as rectangles: Owner, Pet, Vet, Visit [1]; Owner 1 ------< Pet [1]; Pet 1 ------< Visit [1]; Vet 1 ------< Visit [1]; relationships labelled with the degree at each end [1].

```
OWNER 1 ------< PET 1 ------< VISIT >------ 1 VET
```

**(b)** `Owner (`**`OwnerNo`**`, Name, Phone)` [1]; `Pet (`**`PetNo`**`, Name, Species, OwnerNo)` [1]; `Vet (`**`VetNo`**`, Name)` [1]; `Visit (`**`PetNo, VetNo, VisitDate`**`, Diagnosis)` [1], with the date included because the same pet and vet can meet more than once [1].

**9. (a)** Film, Screen, Showing (the link entity between Film and Screen, with date and time) [2]; Ticket [1].
**(b)** `Film (`**`FilmNo`**`, Title, Certificate)` [1]; `Screen (`**`ScreenNo`**`, NumberOfSeats)` [1]; `Showing (`**`ScreenNo, ShowDateTime`**`, FilmNo)` [1] (a screen shows one film at a time, so screen and date-time identify a showing; other valid identifiers accepted if justified); `Ticket (`**`TicketNo`**`, Price, ScreenNo, ShowDateTime)` [1]; the foreign attributes in Ticket link it to one showing [1].

**10.** The entity has repeating attributes (Subject1, Subject2, Subject3) [1], so a teacher with a fourth subject cannot be recorded, and a teacher with one subject leaves blanks [1]. A better model has a Subject entity and a link entity (or an attribute-based many-to-many resolution): Teacher 1 ------< TeacherSubject >------ 1 Subject [1], with `TeacherSubject (`**`TeacherNo, SubjectCode`**`)` [1].

**11.** A link entity has one occurrence for each pairing of the two entities it connects, so it needs both identifiers to say which pairing it is [1]. If the same pair can be linked more than once (for example the same member borrowing the same book on different days), the two identifiers are not unique on their own [1], so a further attribute such as a date is added to the identifier [1].

---

## Where marks are usually lost

- Leaving a many-to-many relationship unresolved.
- Forgetting to underline (or mark) the identifier.
- Writing repeating attributes (Subject1, Subject2) instead of a separate entity.
- Leaving out the linking attribute that shows a one-to-many relationship.
- Treating a property (such as price or mark) as an entity.
