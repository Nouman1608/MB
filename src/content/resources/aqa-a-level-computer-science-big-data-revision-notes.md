---
title: "AQA A-Level Computer Science: Big Data — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Big Data"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "big-data"
description: "Recall notes on volume, velocity and variety, relational limits, functional distributed processing and graph schema for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Big Data (section 4.11 of AQA A-Level Computer Science 7517) is the catch-all term for data that will not fit
the usual containers. You need to describe it by **volume, velocity and variety**, explain why its lack of
structure makes relational databases unsuitable, explain why functional programming suits processing spread
across many machines, and use the **fact-based model** and **graph schema**. Paper 2 questions on it are short
and scenario based.

Condensed for the final weeks. For the full explanation, use the
[Big Data study guide](/resources/aqa-a-level-computer-science-big-data-study-guide/).
Practise with the [Big Data practice questions](/resources/aqa-a-level-computer-science-big-data-practice/).

## Syllabus coverage

AQA 7517 specification (Version 1.6, 31 July 2023), section **4.11.1 Big Data**:

- Big Data described in terms of **volume**, **velocity** and **variety**
- the lack of structure as the most difficult aspect; why relational databases are not appropriate;
  machine learning to find patterns
- when data will not fit on one server: processing must be **distributed**, and **functional programming**
  is a solution
- the features of functional programming -- **immutable data structures**, **statelessness**,
  **higher-order functions** -- that make it easier to write correct, distributable code
- the **fact-based model**, the **graph schema**, and **nodes, edges and properties**

Note: the specification names exactly three Vs. Do not add "veracity" or "value" as if they were required.

## The three Vs

| Characteristic | Meaning in the specification | Example |
|---|---|---|
| **Volume** | Too big to fit into a single server | Years of transactions from a national retailer |
| **Velocity** | Streaming data, needing a response in milliseconds to seconds | Sensor readings, mouse clicks, card payments checked for fraud |
| **Variety** | Data in many forms: structured, unstructured, text, multimedia | Social media posts with images, video surveillance footage |

Sources named in the specification: **networked sensors, smartphones, video surveillance, mouse clicks** --
all continuously streamed.

## Why is structure the hard part?

The specification says that while size gets the attention, the most difficult aspect is the **lack of
structure**, because:

- **analysing** the data is made significantly more difficult
- **relational databases are not appropriate** -- they require data to fit a **row-and-column** format
- **machine learning** techniques are needed to discern patterns and extract useful information

Size matters too: "big" is relative, but it becomes a problem once the data does not fit on **one server**,
because relational databases **do not scale well across multiple machines**.

## Why functional programming for distributed processing?

When processing must be spread over many machines, each machine works on part of the data at the same time.
Code is then hard to get right if parts can change shared data. Functional programming avoids this:

| Feature | What it means | Why it helps distribution |
|---|---|---|
| **Immutable data structures** | Data is never changed after it is created; new values are made instead | No machine can alter data another is using, so no locking or race conditions |
| **Statelessness** | Functions have no side effects; the same input always gives the same output | Any machine can run any function in any order and get the same result; a failed task can simply be re-run |
| **Higher-order functions** | Functions that take or return functions, e.g. **map**, **filter**, **fold (reduce)** | The same function can be sent to every server: **map** each chunk in parallel, then **fold** the partial results together |

These features make it easier to write code that is **correct** (easier to reason about and test) and code
that can be **distributed** across more than one server.

### Worked example: counting words across servers

```
Data: billions of posts split into chunks on 100 servers
map:    on every server, in parallel, turn each post into (word, 1) pairs
fold:   combine pairs with the same word by adding the counts
        -> partial totals per server, then combined into final totals
No step changes shared data, so the servers never need to coordinate mid-task.
```

## The fact-based model

Each **fact** captures a **single piece of information**, e.g. "user 512 liked post 98" or "user 512's
email is ali@example.org". Instead of one wide row per user that is overwritten when something changes, the
data is a growing collection of small, separate facts. This copes with data that arrives in many forms and
fits the immutable approach of functional processing.

## Graph schema: nodes, edges and properties

A **graph schema** captures the structure of the data set:

- **Nodes** -- the entities, e.g. a Person, a Post, a Page
- **Edges** -- the relationships between nodes, e.g. Person --follows--> Person, Person --likes--> Post
- **Properties** -- information about a node, e.g. a Person's name or age

```
(Person: name = "Ali")  --follows-->  (Person: name = "Bea")
          |
        likes
          v
(Post: text = "Exam tips", posted = 2026-05-03)
```

Draw nodes as shapes, edges as labelled arrows, and attach properties to the nodes.

## Common mistakes / exam traps

- Defining Big Data only as "a lot of data" -- the specification stresses lack of structure and that it will not
  fit a single server.
- Describing velocity as "data growing quickly". It means data **streaming** in and needing a response within
  milliseconds to seconds.
- Saying relational databases "cannot store large data" -- the issues are the row-and-column format and poor
  scaling across machines.
- Listing functional programming features without explaining **why** each helps distribution.
- Putting properties on edges and leaving nodes unlabelled in a graph schema answer.

## Frequently asked questions

**What are the three characteristics of Big Data in AQA 7517?**
Volume (too big for a single server), velocity (streaming data needing a response in milliseconds to seconds) and
variety (structured, unstructured, text and multimedia).

**Why are relational databases not suitable for Big Data?**
They require data to fit a row-and-column format, which unstructured data does not, and they do not scale well
across multiple machines.

**Why does immutability help when processing is distributed?**
If data can never be changed, several machines can work on it at the same time without interfering with each
other, so no locks are needed and results are predictable.

## Related resources

[Big Data study guide](/resources/aqa-a-level-computer-science-big-data-study-guide/) |
[Big Data practice questions](/resources/aqa-a-level-computer-science-big-data-practice/) |
[Fundamentals of functional programming revision notes](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-revision-notes/)

## Official syllabus

AQA AS and A-level Computer Science (7516/7517) specification, Version 1.6 (31 July 2023), section 4.11 --
[aqa.org.uk/7517](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
