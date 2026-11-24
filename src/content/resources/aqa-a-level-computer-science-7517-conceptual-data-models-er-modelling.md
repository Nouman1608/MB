---
title: "AQA A-Level Computer Science (7517): Conceptual Data Models and Entity Relationship Modelling"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.10.1: producing a data model from requirements, entity relationship diagrams, relationship types, link entities and entity descriptions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.10.1 Conceptual data models and entity relationship modelling** in AQA A-Level Computer Science (7517). The specification asks you to **produce a data model from given data requirements for a simple scenario involving multiple entities**, and to **produce entity relationship diagrams representing a data model and entity descriptions in the form `Entity1 (Attribute1, Attribute2, ...)`**. It adds that underlining can be used to identify the attribute or attributes that form the entity identifier.

The wider [fundamentals of databases study guide](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) covers all of section 4.10. This page concentrates on the modelling process: how to read a requirement, find the entities, decide on relationships, resolve many-to-many relationships and write the result in the notation that exam questions expect.

Condensed notes are in the [data modelling revision notes](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes/), and exam-style questions are in the [data modelling practice questions](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-practice/).

## What a conceptual data model is

A **conceptual data model** describes the **things a system needs to store information about and how they relate**, without saying how the data will be stored. It is independent of any particular database software. It is produced by analysing the requirements, and it is then used to design the tables of a relational database (4.10.2 and 4.10.3).

## Key terms

- **Entity:** a thing about which data is stored, such as a customer, a book or a booking. In a database an entity becomes a table.
- **Attribute:** a property of an entity, such as a customer's name or a book's title. An attribute becomes a field (column).
- **Entity identifier:** the attribute, or combination of attributes, that uniquely identifies each occurrence of the entity (later called the primary key).
- **Occurrence (instance):** one particular customer, book or booking.
- **Relationship:** an association between two entities, such as "a customer places orders".

## Writing entity descriptions

The form is **Entity (Attribute1, Attribute2, ...)**. The identifier is **underlined**. In this guide identifiers are shown in **bold**; in your own answers, underline them.

Example: `Book (`**`ISBN`**`, Title, Author, Price)`

An entity name is singular (Book, not Books). Each attribute should hold a single item of data (separate FirstName and LastName if both are needed).

## Types of relationship

The **degree** of a relationship says how many occurrences of one entity can be linked to occurrences of the other.

| Type | Meaning | Example |
|---|---|---|
| **One-to-one (1:1)** | Each occurrence of A relates to at most one of B, and the reverse | A country has one capital city, and a capital city belongs to one country |
| **One-to-many (1:M)** | One occurrence of A relates to many of B, but each B relates to one A | One customer places many orders; each order is placed by one customer |
| **Many-to-many (M:M)** | Many of A relate to many of B | A student takes many courses; a course has many students |

In an entity relationship diagram (ERD), entities are drawn as **rectangles** and relationships as **lines** between them. The two ends of the line show the degree. A common notation uses **1** at the "one" end and a **crow's foot** (three-pronged fork) or **M** at the "many" end. In plain text:

```
CUSTOMER 1 ------< ORDER
```

means one customer, many orders. Always check which notation the question uses and follow it.

## Resolving many-to-many relationships

A relational database cannot store a many-to-many relationship directly. It is **resolved** by adding a **link entity** (also called an associative or junction entity) in the middle, which turns it into **two one-to-many relationships**.

Student M:M Course becomes:

```
STUDENT 1 ------< ENROLMENT >------ 1 COURSE
```

The link entity **Enrolment** has one occurrence for each student on each course. Its identifier is usually a **combination** of the two identifiers. It can also hold attributes that belong to the relationship itself, such as the date of enrolment or a grade.

## Method: from requirements to a data model

1. **Read the requirements** and underline the nouns that the system must hold data about. These are candidate entities.
2. **Remove nouns that are not entities**: a noun that is just a property of another (such as "price") is an attribute.
3. **List the attributes** of each entity from the requirements.
4. **Choose an identifier** for each entity. If nothing natural is unique, add an ID attribute (CustomerID).
5. **Find the relationships** using the verbs in the requirements.
6. **Decide the degree** of each relationship by asking two questions: "How many B for one A?" and "How many A for one B?"
7. **Resolve any many-to-many relationship** with a link entity.
8. **Draw the ERD** and **write the entity descriptions**.

## Worked example: a library

*Requirements.* A library keeps details of its members (membership number, name, address). It holds books (ISBN, title, author). A member can borrow many books, and a book can be borrowed by many different members over time. For each loan, the date borrowed and the date returned are recorded.

**Step 1: entities.** Member, Book. Borrowing is the action linking them.

**Step 2: relationship and degree.** One member can borrow many books, and one book can be borrowed by many members (over time). That is **many-to-many**.

**Step 3: resolve.** Add a link entity **Loan**. One member has many loans; one book has many loans; each loan is for one member and one book.

```
MEMBER 1 ------< LOAN >------ 1 BOOK
```

**Step 4: identifiers.** A member and a book can be linked more than once over time (the same member may borrow the same book again), so the pair (MembershipNo, ISBN) is not unique. Adding the date borrowed makes it unique for a single copy and a single day, so the identifier of Loan is (MembershipNo, ISBN, DateBorrowed).

**Step 5: entity descriptions.**

- `Member (`**`MembershipNo`**`, Name, Address)`
- `Book (`**`ISBN`**`, Title, Author)`
- `Loan (`**`MembershipNo, ISBN, DateBorrowed`**`, DateReturned)`

In Loan, MembershipNo and ISBN each also refer to an occurrence in another entity, which will become foreign keys in the tables (4.10.2).

*Check.* Does the model answer a question like "which books has member 1042 borrowed?" Yes: find Loan occurrences with MembershipNo 1042 and follow ISBN to Book. It also holds the date information the requirements asked for.

## A second example: spotting a one-to-many and a one-to-one

*Requirements.* A school records each teacher (staff number, name) and each department (name, head of department). Every teacher belongs to exactly one department. A department has many teachers. Each department has one head of department, who is a teacher.

- Teacher and Department: **one-to-many** (one department, many teachers). Teacher gets a DepartmentName attribute to show which department the teacher belongs to.
- Department and head of department: **one-to-one**, as each department has one head and a teacher heads one department. Either record the head's staff number as an attribute of Department, or a separate one-to-one relationship.

`Department (`**`DepartmentName`**`, HeadStaffNo)` and `Teacher (`**`StaffNo`**`, Name, DepartmentName)`

## A third example: an online shop with four entities

*Requirements.* A shop sells products (product code, description, price). Customers (customer number, name, email) place orders. Each order is placed by one customer on one date and may include several different products, each in a stated quantity. A product may appear in many orders.

1. **Entities:** Customer, Order, Product. "Quantity" and "date" are attributes, not entities.
2. **Customer and Order:** one customer places many orders; each order belongs to one customer. This is **one-to-many**.
3. **Order and Product:** an order contains many products and a product appears in many orders. This is **many-to-many**, so add a link entity **OrderLine**.
4. **OrderLine** holds the quantity, which belongs to the combination of one order and one product. Its identifier is (OrderNo, ProductCode).

```
CUSTOMER 1 ------< ORDER 1 ------< ORDERLINE >------ 1 PRODUCT
```

- `Customer (`**`CustomerNo`**`, Name, Email)`
- `Order (`**`OrderNo`**`, OrderDate, CustomerNo)`
- `OrderLine (`**`OrderNo, ProductCode`**`, Quantity)`
- `Product (`**`ProductCode`**`, Description, Price)`

Notice that the price is held once in Product, not copied into every order line, so a product's current price is not stored many times. (A real shop might also record the price charged at the time of sale in OrderLine, because prices change, but that is a separate fact and is left out to keep the model simple.) The idea of storing each fact once is developed in normalisation (4.10.3).

## Common mistakes

- Making an attribute into an entity (for example Price as an entity).
- Using plural names, or giving an entity the name of a person's role in a different table.
- Leaving a **many-to-many** relationship unresolved.
- Reading the relationship in one direction only. Ask both questions.
- Forgetting an **identifier**, or underlining the wrong attribute.
- Putting **repeating items** in one attribute, such as a list of phone numbers.
- Giving a link entity an identifier that is not unique.

## Exam technique

- Read the scenario twice; mark nouns and verbs.
- Show your **ERD** and your **entity descriptions** when both are asked for.
- Label the degree of each relationship on the diagram.
- Underline identifiers in every entity description.
- State any **assumption** you make (for example that a member borrows the same book on different dates).

## More resources on this topic

- [Data modelling revision notes](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes/)
- [Data modelling practice questions](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-practice/)
- [Relational databases study guide](/resources/aqa-a-level-computer-science-7517-relational-databases/)

*Written against the AQA A-level Computer Science (7517) specification, 4.10.1 Conceptual data models and entity relationship modelling. Always check the current specification on the AQA website.*
