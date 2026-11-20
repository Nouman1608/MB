---
title: "AQA A-Level Computer Science (7517): Big Data -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.11.1 recall: volume, velocity and variety, lack of structure, distributed processing, functional programming features, fact-based models and graph schema."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.11.1 Big Data**, AQA A-Level Computer Science (7517). Fuller explanations and worked examples are in the [Big Data study guide](/resources/aqa-a-level-computer-science-7517-big-data/); questions are in the [Big Data practice questions](/resources/aqa-a-level-computer-science-7517-big-data-practice/).

## Definition

**Big Data** is a catch-all term for data that **will not fit the usual containers**. "Big" is relative.

| V | Meaning | Examples |
|---|---|---|
| **Volume** | Too big to fit into a single server | Years of transaction records; video archives |
| **Velocity** | Streaming data; a response is needed within milliseconds to seconds | Sensor readings; smartphone data; video surveillance; mouse clicks |
| **Variety** | Many forms: structured, unstructured, text, multimedia | Sales tables, emails, photos, audio, video |

## The real difficulty: lack of structure

- Analysing unstructured data is **significantly harder**.
- **Relational databases are not appropriate**: they need data to fit **rows and columns**, and they **do not scale well across multiple machines**.
- **Machine learning** is needed to find patterns and extract useful information.

## When data will not fit on one server

1. The processing must be **distributed** across more than one machine.
2. **Functional programming** is a solution, because it makes it easier to write **correct** and **efficient** distributed code.

**Calculation check:** 50 TB at 100 MB/s on one machine takes 500,000 s (about 5.8 days). On 100 machines in parallel it takes 5,000 s (about 83 minutes).

## Functional programming features

| Feature | Meaning | Why it helps |
|---|---|---|
| **Immutable data structures** | Data is never changed after creation; operations return new values | No clashes between machines; no lost updates; easy to copy; easier to reason about |
| **Statelessness** | A function depends only on its arguments, with no hidden state or side effects | Can run on any machine, in any order, and repeat after a failure; easy to test |
| **Higher-order functions** | Take or return functions (map, filter, reduce) | Separate what is done to each item from how the work is spread; items can go to different machines |

**Word-count pattern:** each machine counts words in its own lines (map); the counts are then added together (reduce). Order does not matter, so the result is the same.

## Fact-based model

- Data is stored as **facts**; **each fact captures a single piece of information**.
- Facts carry a time and are **never changed or deleted**; new facts are added.
- History is kept: "Ayesha lives in Leeds (January)" and "Ayesha lives in York (September)" are both stored.
- Suits varied data with no fixed row-and-column design; matches immutability.

## Graph schema

| Part | Meaning | Example |
|---|---|---|
| **Node** | An entity | Person, Product |
| **Edge** | A relationship between nodes | bought, friend of |
| **Property** | A detail on a node or edge | name, title, purchase date |

Good for questions that follow relationships ("what did this person's friends buy?").

## Relational versus Big Data approaches

| | Relational database | Big Data approach |
|---|---|---|
| Data shape | Fixed rows and columns | Any form |
| Scaling | Poor across many machines | Spread across many machines |
| Updates | Change records in place | Add new facts |
| Strength | Consistent structured queries | Large, varied, fast data |

## Key terms

| Term | Definition |
|---|---|
| Big Data | Data that will not fit the usual containers |
| Volume | The amount of data |
| Velocity | The speed at which data arrives and must be processed |
| Variety | The range of forms the data takes |
| Unstructured data | Data with no fixed row-and-column format |
| Distributed processing | Spreading work across several machines |
| Immutable | Cannot be changed after creation |
| Stateless | Keeps no hidden information between calls |
| Fact | A single, timestamped piece of information |
| Graph schema | A description of a data set as nodes, edges and properties |

## Exam traps

- **Give all three Vs** and relate each to an example.
- **Include lack of structure** as the main difficulty.
- **Relational databases are "not appropriate"**, with a reason: rows and columns, and poor scaling.
- **Link each functional feature to its benefit.**
- **Immutable means unchangeable,** not unusable.
- **Facts are added, not overwritten.**
- **Nodes, edges, properties:** do not swap them.

## Self-test

1. Define Big Data.
2. Describe volume.
3. Describe velocity and give one source.
4. Describe variety.
5. Why are relational databases not appropriate for Big Data?
6. What is machine learning used for here?
7. Name the three features of functional programming named in the specification.
8. Why does immutability make distributed code easier to get right?
9. What is a fact in a fact-based model?
10. Why does the fact-based model not overwrite old values?
11. What does an edge represent in a graph schema?
12. Give one property for a Person node.

**Answers**

1. Data that will not fit the usual containers.
2. Too big to fit into a single server.
3. Streaming data that must be handled in milliseconds to seconds; for example sensors, smartphones, video surveillance or mouse clicks.
4. Data in many forms, such as structured, unstructured, text and multimedia.
5. They need data in rows and columns, and they do not scale well across multiple machines.
6. To discern patterns and extract useful information from the data.
7. Immutable data structures, statelessness and higher-order functions.
8. Values cannot change, so machines cannot overwrite or clash over shared data.
9. A single piece of information, with the time it was recorded.
10. Facts are kept as history; new facts are added instead.
11. A relationship between two nodes.
12. For example name, date of birth or town.

## Related resources

- [Big Data study guide](/resources/aqa-a-level-computer-science-7517-big-data/)
- [Big Data practice questions](/resources/aqa-a-level-computer-science-7517-big-data-practice/)
- [Functional programming paradigm revision notes](/resources/aqa-a-level-computer-science-7517-functional-programming-paradigm-revision-notes/)
