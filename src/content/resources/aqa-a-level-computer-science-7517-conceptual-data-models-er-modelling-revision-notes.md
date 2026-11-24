---
title: "AQA A-Level Computer Science (7517): Conceptual Data Models and Entity Relationship Modelling -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.10.1 recall: entities, attributes, identifiers, relationship types, link entities, entity descriptions and a step-by-step modelling method."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.10.1 Conceptual data models and entity relationship modelling**, AQA A-Level Computer Science (7517): produce a **data model** from given requirements for a simple scenario with several entities, and produce **entity relationship diagrams** and **entity descriptions** in the form `Entity1 (Attribute1, Attribute2, ...)`. Worked scenarios are in the [data modelling study guide](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling/); questions are in the [data modelling practice questions](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-practice/).

## Question styles to expect

- **Draw an ERD from a scenario:** entities as rectangles, relationships as labelled lines, degree at each end.
- **Write entity descriptions:** `Entity (Attribute1, Attribute2, ...)` with the identifier underlined.
- **State the type of a relationship** and justify it by asking the question in both directions.
- **Resolve a many-to-many relationship** by adding and naming a link entity, and giving its identifier.
- **Spot a fault in a model:** repeating attributes, a missing identifier, an unresolved many-to-many, or an attribute treated as an entity.
- **State an assumption:** for example that a member can borrow the same book more than once on different dates.

## Key terms

| Term | Definition |
|---|---|
| Conceptual data model | A description of what data is stored and how it is related, independent of any software |
| Entity | A thing about which data is stored; becomes a table |
| Attribute | A property of an entity; becomes a field |
| Entity identifier | The attribute or combination of attributes that uniquely identifies each occurrence; underlined |
| Occurrence | One particular instance of an entity |
| Relationship | An association between two entities |
| Link entity | An entity added to turn a many-to-many relationship into two one-to-many relationships |

## Notation

- **Entity description:** `Book (`**`ISBN`**`, Title, Author, Price)`. The identifier is underlined (bold here).
- **Entity names** are singular. **Attributes** hold one item of data each.
- **ERD:** rectangle for each entity; a line for each relationship; the degree marked at each end.

```
CUSTOMER 1 ------< ORDER      one customer, many orders
```

## Relationship types

| Type | Test | Example |
|---|---|---|
| One-to-one | One A to at most one B and the reverse | A department and its head |
| One-to-many | One A to many B, each B to one A | A customer and their orders |
| Many-to-many | Many A to many B | Students and courses |

**Ask two questions**: "How many B for one A?" and "How many A for one B?"

## Resolving many-to-many

```
STUDENT >------< COURSE      becomes
STUDENT 1 ------< ENROLMENT >------ 1 COURSE
```

- The link entity has one occurrence per pairing.
- Its identifier is usually the **combination** of the two identifiers (plus a date if pairings can repeat).
- It can hold attributes of the relationship itself (a grade, a quantity, a date).

## Method

1. Mark the nouns in the requirements (candidate entities).
2. Reject nouns that are only properties (they are attributes).
3. List attributes for each entity.
4. Choose an identifier for each entity (add an ID if nothing is unique).
5. Use the verbs to find relationships.
6. Decide the degree of each.
7. Resolve many-to-many relationships with a link entity.
8. Draw the ERD; write the entity descriptions; state assumptions.

## Worked check: a clinic

*Requirements:* an owner (owner number, name, phone) has one or more pets (pet number, name, species). A vet (vet number, name) examines pets, and the date and diagnosis of each visit are recorded.

- Owner 1 ------< Pet (one owner, many pets).
- Pet and Vet are many-to-many, so add the link entity Visit: Pet 1 ------< Visit >------ 1 Vet.
- `Owner (`**`OwnerNo`**`, Name, Phone)`
- `Pet (`**`PetNo`**`, Name, Species, OwnerNo)`
- `Vet (`**`VetNo`**`, Name)`
- `Visit (`**`PetNo, VetNo, VisitDate`**`, Diagnosis)`

## Common patterns

| Statement in the requirements | Likely model |
|---|---|
| "Each X has a Y" (only one) | A one-to-many with X on the "many" side, or one-to-one if the reverse is also single |
| "X can have several Ys" | One-to-many |
| "X and Y can both be linked to many of the other" | Many-to-many; add a link entity |
| "The date/quantity/grade of each pairing is recorded" | Attribute of the link entity |

## Exam traps

- **Unresolved many-to-many** relationships.
- **Attributes shown as entities.**
- **No identifier** or an underline on the wrong attribute.
- **Plural entity names** and attributes that hold lists.
- **Reading the relationship one way.** Ask both questions.
- **Link entity with a non-unique identifier.** Add a date if pairings can repeat.
- **Not following the notation** printed in the question.

## Self-test

1. What is an entity?
2. What does the underline mean in an entity description?
3. State the three relationship types.
4. What is a link entity for?
5. Which entity is added to resolve Student and Course?
6. Why is Price usually an attribute and not an entity?
7. Write an entity description for a Book with ISBN as the identifier.
8. A customer places many orders and each order is placed by one customer. What type is the relationship?
9. Why must a many-to-many relationship be resolved before building tables?
10. What identifier is common for a link entity?
11. Where does a quantity ordered belong, in an order-product model?
12. Why should you ask the relationship question in both directions?

**Answers**

1. A thing about which data is stored.
2. The attribute (or attributes) uniquely identifies each occurrence of the entity.
3. One-to-one, one-to-many, many-to-many.
4. To turn a many-to-many relationship into two one-to-many relationships.
5. A link entity such as Enrolment.
6. It is a property of a product, not a thing in its own right.
7. For example `Book (`**`ISBN`**`, Title, Author)`.
8. One-to-many.
9. A relational database cannot store a many-to-many relationship directly.
10. The combination of the two identifiers it connects.
11. In the link entity (OrderLine), because it belongs to the pairing.
12. The degree depends on how many occurrences are possible at each end.

## More resources on this topic

- [Data modelling study guide](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling/)
- [Data modelling practice questions](/resources/aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-practice/)
- [Relational databases revision notes](/resources/aqa-a-level-computer-science-7517-relational-databases-revision-notes/)
