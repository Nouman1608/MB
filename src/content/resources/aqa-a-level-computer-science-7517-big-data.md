---
title: "AQA A-Level Computer Science (7517): Big Data"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Big Data"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "big-data"
    subtopic: "big-data-7517"
description: "Deeper guide to AQA 7517 section 4.11.1 Big Data: volume, velocity and variety, lack of structure, distributed processing, functional programming features, fact-based models and graph schema."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.11.1 Big Data** in AQA A-Level Computer Science (7517). The specification asks you to know that Big Data is a catch-all term for **data that will not fit the usual containers**, and that it can be described by **volume, velocity and variety**. You must know that when data is too big for a single server, **processing must be distributed across more than one machine** and that **functional programming is a solution**, because it makes it easier to write correct and efficient distributed code. You must know which features of functional programming help, and be familiar with the **fact-based model** for representing data and the **graph schema** (nodes, edges and properties) for capturing the structure of a dataset.

The wider [Big Data study guide](/resources/aqa-a-level-computer-science-big-data-study-guide/) covers the topic at a broader level. This page works through each strand with numbers and small examples.

Condensed notes are in the [Big Data revision notes](/resources/aqa-a-level-computer-science-7517-big-data-revision-notes/), and exam-style questions are in the [Big Data practice questions](/resources/aqa-a-level-computer-science-7517-big-data-practice/).

## What makes data "big"

"Big" is a relative term. The specification defines Big Data in terms of three properties, often called the three Vs.

- **Volume:** the data is **too big to fit into a single server**. It may be many terabytes or petabytes.
- **Velocity:** the data is **streaming**, arriving continuously, and must be dealt with in **milliseconds to seconds**. Sources include networked sensors, smartphones, video surveillance and the mouse clicks of website users.
- **Variety:** the data comes in **many forms**: structured (rows and columns), unstructured text, images, audio, video and multimedia.

**Worked example 1: volume and velocity.** A network of sensors produces 20,000 readings every second.

- Per day: 20,000 × 86,400 = **1,728,000,000** readings (about 1.7 billion).
- If a single machine can process 100 MB per second, a 50 TB (50,000,000 MB) data set takes 50,000,000 ÷ 100 = 500,000 seconds, which is about **5.8 days**.
- If the work is shared evenly across 100 machines, each handles 500 GB and the job takes 5,000 seconds, about **83 minutes**.

That is why very large data sets are spread over many machines.

## The difficulty of lack of structure

Size attracts attention, but the specification points out that the most difficult aspect of Big Data is its **lack of structure**. A relational database needs data to fit into **rows and columns** with fixed attributes. Much Big Data does not fit:

- A web page, a tweet, a photo or a video clip has no fixed set of columns.
- **Analysing** unstructured data is significantly harder, because you cannot simply write an SQL query against it.
- **Relational databases are not appropriate**, because they require the data to fit a row-and-column format, and they **do not scale well across multiple machines**: joins and constraints across many servers are slow and complicated.

**Machine learning** techniques are needed to **discern patterns** in the data and to extract useful information, for example recommending products or detecting fraud from millions of transactions.

## Distributing the processing

When data will not fit on one server:

1. The **data is split** into parts, stored on many machines.
2. The **processing is distributed**: each machine works on its own part, and the results are combined.

Distributed code is harder to write correctly. Several machines may try to change the same data, steps may run in an unpredictable order, and any machine can fail. The specification states that **functional programming** makes it easier to write **correct** and **efficient distributed code**.

## Features of functional programming that help

Functional programming languages support **immutable data structures, statelessness and higher-order functions**.

### Immutable data structures

Once created, a data value is **never changed**: an operation returns a **new** value instead. Consequences:

- Two machines can read the same data at the same time, with no risk that one changes it while the other reads it. There are no lost updates or race conditions.
- Data can be copied freely across machines.
- It is easier to reason about a program, because a value means the same thing wherever it is used.

### Statelessness

A **stateless** function keeps no hidden information between calls. It depends **only on its arguments**, and the same arguments always give the same result, without side effects such as altering global variables or files. Consequences:

- A function can be run on **any machine, in any order, or repeated** after a failure, with the same result.
- Testing is easier, as each function can be checked on its own, so code is more likely to be **correct**.

### Higher-order functions

A **higher-order function** takes a function as an argument or returns one. The standard examples are `map`, `filter` and `reduce` (or `fold`). They separate **what to do to each item** (the function passed in) from **how the work is organised** (the higher-order function). Because `map` treats each item independently, the system can hand different items to different machines.

**Worked example 2: counting words across three machines.** Three lines of text are held on three machines.

| Machine | Line | Map step: counts for that line |
|---|---|---|
| 1 | the cat sat | the 1, cat 1, sat 1 |
| 2 | the dog sat | the 1, dog 1, sat 1 |
| 3 | a cat ran | a 1, cat 1, ran 1 |

Each machine runs the same stateless function on its own data with no coordination. The partial results are then combined by a reduce step that adds counts for the same word:

**the 2, cat 2, sat 2, dog 1, a 1, ran 1.**

Adding the counts gives the same answer in whatever order the machines finish, because the combining function does not depend on order and nothing is changed in place. This pattern is the idea behind large-scale processing systems.

## The fact-based model

In a **fact-based model**, the data is stored as a set of **facts**. **Each fact captures a single piece of information**, and carries the time at which it was known to be true. Facts are **never changed or deleted**: new facts are added.

**Worked example 3.**

| Fact | Time recorded |
|---|---|
| Ayesha lives in Leeds | 2026-01-05 |
| Ayesha lives in York | 2026-09-01 |

The second fact does not overwrite the first. Both are kept, so the system knows where Ayesha lived at each time, and the latest fact gives her current address. Because facts are only added, they are **immutable**, which matches the benefits of functional programming above. A fact-based model can hold facts of many kinds without a fixed row-and-column design, so it suits varied and unstructured data.

## Graph schema

A **graph schema** describes the **structure of the dataset** using a graph. It has:

- **nodes:** the entities, such as people, products or places;
- **edges:** the relationships between nodes, such as "bought" or "is friends with";
- **properties:** information attached to a node or edge, such as a person's name or the date of a purchase.

**Example.** Nodes: `Person` and `Product`. Edge: `Person --bought--> Product`, with the property `date`. Properties of a Person node: `name`. Properties of a Product node: `title`.

A graph schema makes it easy to ask questions that follow relationships (for example, "which products did the friends of this person buy?"), which can be difficult to express with joins in a relational database.

## Common mistakes

- Defining Big Data only as "a lot of data". Include **velocity** and **variety**, and the point about **lack of structure**.
- Saying a relational database **cannot** hold big data at all. The specification says it is **not appropriate** because of the row-and-column requirement and poor scaling across machines.
- Listing functional programming features without saying **why** each helps.
- Describing immutability as "data that cannot be used". It means data that **cannot be changed after creation**.
- Mixing up **nodes** (entities), **edges** (relationships) and **properties** (details).
- Saying that a fact-based model **overwrites** old data.

## Exam technique

- For **"describe"** questions on the three Vs, give a short definition and an example of each.
- For **"explain why functional programming helps"**, link the feature to the distributed setting: immutability means no clashes, statelessness means any machine can do it, higher-order functions allow work to be split.
- For **calculations**, show the conversions (GB to MB, seconds to hours).
- For **graph schema**, name the nodes, edges and properties from the scenario.

## Related resources

- [Big Data revision notes](/resources/aqa-a-level-computer-science-7517-big-data-revision-notes/)
- [Big Data practice questions](/resources/aqa-a-level-computer-science-7517-big-data-practice/)
- [Functional programming paradigm study guide](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm/)

*Written against the AQA A-level Computer Science (7517) specification, 4.11.1 Big Data. Always check the current specification on the AQA website.*
