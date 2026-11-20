---
title: "OxfordAQA A-Level Computer Science (9645): Big data"
seoTitle: "OxfordAQA 9645 Big Data Study Guide"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.15.2 in depth: volume, velocity and variety, distributed processing, functional programming and map-reduce, fact-based models and graph schemas."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.15.2 Big data** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.15 Databases. It is International A-level content, examined in Unit 4, the written paper. The specification asks you to know that Big Data is a catch-all term for data that cannot be stored or processed using traditional methods, and that it can be described by **volume, velocity and variety**; to know that when data does not fit on one server the processing must be **distributed** and that **functional programming** is a solution; and to be familiar with the **fact-based model**, the **graph schema** and its **nodes, edges and properties**.

The topic-level [databases study guide](/resources/oxfordaqa-a-level-computer-science-databases/) covers all of topic 3.15 in one pass. This page gives big data its own space, with a complete map-reduce example calculated step by step. It follows the [relational databases study guide](/resources/oxfordaqa-a-level-computer-science-9645-relational-databases/) and uses ideas from [functional programming](/resources/oxfordaqa-a-level-computer-science-9645-writing-functional-programs/). Afterwards use the [big data revision notes](/resources/oxfordaqa-a-level-computer-science-9645-big-data-revision-notes/) and the [big data practice questions](/resources/oxfordaqa-a-level-computer-science-9645-big-data-practice/).

## What is Big Data?

**Big Data** is a catch-all term for data that **cannot be stored or processed using traditional methods**, such as a single relational database on a single server. It is described by three properties, often called the three Vs.

| Property | Meaning | Example |
|---|---|---|
| **Volume** | Too big to fit into a single server | Years of records from millions of mobile phone users |
| **Velocity** | Streaming data that needs a response within milliseconds to seconds | Card payments checked for fraud as they arrive |
| **Variety** | Data in many forms: structured, unstructured, text, multimedia | Customer posts, photos, video and sensor readings together |

For a sense of volume, 2 terabytes of data on servers that each hold 500 gigabytes needs at least 4 servers. For velocity, a service receiving 2,500 events every second receives 2,500 × 86,400 = **216,000,000 events per day**.

### Why lack of structure matters

Although size gets most of the attention, the hardest aspect of Big Data is its **lack of structure**. This causes two main problems:

- **Analysing the data is much harder**, because there is no fixed set of fields to query. A video or a free-text review cannot simply be summed or sorted.
- **Relational databases are not appropriate**, because they require the data to fit into a **row-and-column** format with fixed fields.

## Distributed processing

When data is too large for one server:

- the **processing must be distributed** across more than one machine, with each machine working on its own part of the data at the same time;
- this is hard to do correctly with traditional programming, because machines that change shared data can interfere with each other.

**Functional programming is a solution**, because it makes it easier to write **correct and efficient distributed code**. The specification gives three reasons.

| Feature | Why it helps |
|---|---|
| **Immutable data structures** | Data is never changed once created, so machines cannot interfere with each other's data and there is no need to lock it |
| **Statelessness** | A function's result depends only on its inputs, not on a hidden state, so any machine can run it and the same input always gives the same output |
| **Higher-order functions** | Functions such as map and fold can be sent to each server and then used to **combine the results** of processing on different servers (**map-reduce**) |

### Map-reduce

The approach has two stages.

1. **Map:** each server applies the same function to its own part of the data, producing partial results as key-value pairs.
2. **Reduce:** the partial results with the same key are combined (using a fold) into the final answer.

**Worked example 1: counting words.** Three servers each hold some lines of text.

| Server | Lines held | Words |
|---|---|---|
| 1 | "the cat sat" / "the dog sat" | 6 |
| 2 | "a cat and a dog" | 5 |
| 3 | "the dog ran" / "a cat ran away" | 7 |

**Map stage.** Each server counts the words it holds:

- Server 1: cat 1, dog 1, sat 2, the 2
- Server 2: a 2, and 1, cat 1, dog 1
- Server 3: a 1, away 1, cat 1, dog 1, ran 2, the 1

**Reduce stage.** The counts for each word are added together:

- a 3, and 1, away 1, cat 3, dog 3, ran 2, sat 2, the 3

The totals add up to 18 words, matching 6 + 5 + 7. Because the three map stages are independent, they run at the same time; if one server would take 90 minutes for all the data, three servers each handling a third could take about 30 minutes for the map stage, plus a small time to combine.

**Worked example 2: regional sales.** Three servers hold sales records as (region, amount).

| Server | Records | Partial totals after map |
|---|---|---|
| 1 | (North, 120), (South, 80), (North, 40) | North 160, South 80 |
| 2 | (South, 60), (East, 90) | South 60, East 90 |
| 3 | (North, 30), (East, 10), (South, 20) | North 30, East 10, South 20 |

The reduce stage adds the partial totals for each region: North 160 + 30 = **190**, South 80 + 60 + 20 = **160**, East 90 + 10 = **100**. The grand total is 450. The reduction is a fold with addition, and because addition gives the same answer in any order the partial results can be combined as they arrive.

## The fact-based model

In a **fact-based model**, data is stored as a collection of **facts**. Each fact captures a **single piece of information**, and in a common design facts are not overwritten once recorded; new facts are added instead. Facts do not have to fit into rows and columns, so data of different varieties can be stored together.

**Example facts about a music streaming service:**

- Ravi is a user.
- Ravi's country is India.
- Ravi listened to Track "Blue Hour".
- "Blue Hour" is by the artist Nadia Vale.
- "Blue Hour" lasts 214 seconds.

Each line is one fact. In that design, if Ravi later moves country, a new fact is added rather than an old one overwritten. This suits distributed processing, because stored facts do not change underneath the machines that read them.

## Graph schemas

A **graph schema** captures the **structure** of a dataset. In the schema:

| Part | Drawn as | Meaning |
|---|---|---|
| **Node** | An **oval** | An individual entity about which data is stored |
| **Property** | A **rectangle**, attached to its oval by a **dashed line** | A property of the entity, such as a date of birth |
| **Edge** | A **solid line** between nodes, labelled with text | A relationship between entities, and the label describes it |

**Worked example 3.** For the music facts above, the graph schema has:

- an oval node **User Ravi** with a rectangle property **Country: India** joined by a dashed line;
- an oval node **Track "Blue Hour"** with a rectangle property **Length: 214 s**;
- an oval node **Artist Nadia Vale**;
- a solid edge from User Ravi to Track "Blue Hour" labelled **listened to**;
- a solid edge from Track "Blue Hour" to Artist Nadia Vale labelled **performed by**.

Compared with a relational database, the graph schema stores relationships directly as edges and lets different nodes have different properties, which suits varied, loosely structured data.

## Relational tables compared with a graph schema

Suppose a school wants to record students, forms and the clubs they belong to, and later also wants to add photographs, free-text comments and links between friends. A relational design needs a table for each entity, a link table for the many-to-many relationship, and a fixed set of columns for each table; adding a new kind of data means changing the table definitions. A graph schema simply adds a new kind of node or a new labelled edge, and different nodes can carry different properties. That flexibility is why graph-based and fact-based approaches suit Big Data that lacks a fixed structure, while a relational database remains the better choice for regular, well-structured records that need strict rules such as keys and constraints.

## Exam technique

- **Define the three Vs** with a short example of each.
- **Explain functional programming's help** by naming immutability, statelessness and higher-order functions, and saying what each does for distributed code.
- **Map-reduce:** describe both stages and say what is combined.
- **Graph schemas:** use the right shapes: ovals for nodes, rectangles for properties joined by dashed lines, labelled solid lines for edges.

## Common mistakes

- Defining Big Data only as "a lot of data" and ignoring variety and velocity.
- Saying relational databases cannot store any large data. The issue is that unstructured data does not fit rows and columns.
- Describing immutability as data that is never stored.
- Drawing properties as ovals or joining them to nodes with solid lines.
- Forgetting to label the edges.

## Next steps

- [Big data revision notes](/resources/oxfordaqa-a-level-computer-science-9645-big-data-revision-notes/)
- [Big data practice questions](/resources/oxfordaqa-a-level-computer-science-9645-big-data-practice/)
- [Applications of artificial intelligence study guide](/resources/oxfordaqa-a-level-computer-science-9645-applications-of-artificial-intelligence/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.15.2 Big data.
