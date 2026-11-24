---
title: "OxfordAQA A-Level Computer Science (9645): Big data -- Revision Notes"
seoTitle: "OxfordAQA 9645 Big Data Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 15 – Databases"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 15.2
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "databases-9645"
  - qualification: "a-level"
    topic: "databases-9645"
    subtopic: "big-data-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.15.2: the three Vs, distributed processing, functional programming, map-reduce, fact-based models and graph schemas."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.15.2 Big data** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (International A-level content in topic 3.15, examined in Unit 4). For worked map-reduce examples, see the [big data study guide](/resources/oxfordaqa-a-level-computer-science-9645-big-data/), then practise with the [big data practice questions](/resources/oxfordaqa-a-level-computer-science-9645-big-data-practice/).

## What the specification requires

- Know that **Big Data** is a catch-all term for data that cannot be stored or processed using traditional methods, described by **volume, velocity and variety**.
- Know that when data is too large for a single server, processing must be **distributed** across more than one machine, and **functional programming** is a solution.
- Be familiar with the **fact-based model**, the **graph schema**, and **nodes, edges and properties** in a graph schema.

## Key terms

| Term | Meaning |
|---|---|
| Big Data | Data that cannot be stored or processed using traditional methods |
| Volume | Too big to fit into a single server |
| Velocity | Streaming data; a response is needed in milliseconds to seconds |
| Variety | Data in many forms: structured, unstructured, text, multimedia |
| Distributed processing | Processing spread across more than one machine |
| Immutable data | Data that cannot be changed once created |
| Stateless | A function's result depends only on its inputs |
| Map-reduce | Map a function over data on each server, then reduce (combine) the results |
| Fact-based model | Data stored as facts; each fact captures one piece of information |
| Graph schema | Diagram of nodes, properties and edges that captures the structure of a dataset |

## The three Vs

| V | Meaning | Example |
|---|---|---|
| Volume | Too big for one server | 2 TB on 500 GB servers needs at least 4 servers |
| Velocity | Streaming; seconds or less to respond | 2,500 events per second is 216,000,000 per day |
| Variety | Structured and unstructured forms | text, photos, video and sensor data together |

**Lack of structure** is the hardest part of Big Data: it makes analysis much harder, and relational databases are not appropriate because they need row-and-column data.

## Functional programming and distributed processing

| Feature | Benefit for distributed code |
|---|---|
| Immutable data structures | Machines cannot interfere with each other's data |
| Statelessness | Any machine can run a function; same input gives same output |
| Higher-order functions | Combine results from different servers (map-reduce) |

## Map-reduce worked reminders

**Word count over three servers**

| Server | Partial counts after map |
|---|---|
| 1 | cat 1, dog 1, sat 2, the 2 |
| 2 | a 2, and 1, cat 1, dog 1 |
| 3 | a 1, away 1, cat 1, dog 1, ran 2, the 1 |

Reduce (add): a 3, and 1, away 1, cat 3, dog 3, ran 2, sat 2, the 3. Total 18 words, equal to 6 + 5 + 7.

**Regional sales**

| Server | Partial totals |
|---|---|
| 1 | North 160, South 80 |
| 2 | South 60, East 90 |
| 3 | North 30, East 10, South 20 |

Reduce: North 190, South 160, East 100, grand total 450.

- Map runs on every server at the same time on its own data.
- Reduce combines the partial results, using a fold function.

## Fact-based model

- Data is a set of **facts**; each fact records **one** piece of information.
- Example facts: Ravi is a user; Ravi's country is India; Ravi listened to "Blue Hour"; "Blue Hour" is by Nadia Vale.
- A common design adds new facts rather than overwriting old ones.

## Graph schema notation

| Part | Drawn as |
|---|---|
| Node (an entity) | Oval |
| Property of an entity | Rectangle joined to its oval by a dashed line |
| Edge (a relationship) | Solid line between two ovals, labelled with text |

Example: oval User Ravi with rectangle Country: India (dashed); solid edge "listened to" to oval Track "Blue Hour"; solid edge "performed by" from the track to oval Artist Nadia Vale.

## Relational versus graph approach

| | Relational database | Graph schema |
|---|---|---|
| Structure | Fixed tables, rows and columns | Nodes, properties and labelled edges |
| Adding a new kind of data | Change the table definition | Add a new node type or edge |
| Suits | Regular, well-structured records | Varied, loosely structured data |
| Relationships | Foreign keys and link tables | Edges drawn directly between nodes |

## Exam traps

- **Three Vs, not one.** Volume alone is not a full description.
- **Why not relational?** Unstructured data does not fit rows and columns.
- **Immutable** means not changed after creation, not "not stored".
- **Map-reduce** needs both stages: map on each server, reduce to combine.
- **Shapes matter** in a graph schema: ovals, rectangles, dashed lines, labelled solid edges.
- **Edges** must carry a label that describes the relationship.
- **Functional programming** helps because of immutability, statelessness and higher-order functions.

## Quick self-test

1. What does velocity mean for Big Data?
2. Give one example of variety.
3. Why are relational databases not appropriate for unstructured data?
4. State the three features of functional programming that help distributed processing.
5. What does the map stage do?
6. What does the reduce stage do?
7. Three servers return North totals of 160, 30 and 0. What is the reduced total?
8. What is a fact in a fact-based model?
9. How is a node drawn in a graph schema?
10. How is a property joined to a node?
11. What must an edge be labelled with?
12. How many servers of 500 GB are needed to hold 1.2 TB?

### Answers

1. Data arrives as a stream and a response is needed within milliseconds to seconds.
2. Any one of: text, photos, video, sensor readings, structured tables.
3. They require data to fit a fixed row-and-column format.
4. Immutable data structures, statelessness, higher-order functions.
5. Each server applies the same function to its own part of the data.
6. It combines the partial results into the final answer.
7. 190
8. A single piece of information.
9. As an oval.
10. By a dashed line (the property is drawn as a rectangle).
11. Text that describes the nature of the relationship.
12. 3 servers (1,200 / 500 = 2.4, rounded up).

## More on this topic

- [Big data study guide](/resources/oxfordaqa-a-level-computer-science-9645-big-data/)
- [Big data practice questions](/resources/oxfordaqa-a-level-computer-science-9645-big-data-practice/)
- [Relational databases revision notes](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.15.2 Big data.
