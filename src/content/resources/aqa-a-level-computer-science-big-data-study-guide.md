---
title: "AQA A Level Computer Science (7517): Big Data -- Study Guide"
resourceType: "study-guides"
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
description: "AQA A Level Computer Science 7517 Big Data study guide: the three Vs, lack of structure, fact-based models, graph schema and functional programming for scale."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "Check whether the specification lists veracity alongside volume, velocity and variety, and how far it expects fact-based and graph schema modelling to go. 2026-11-08 recheck: checked against spec v1.6 4.11.1 (exactly three Vs; veracity removed); added lack-of-structure point and the three named functional features; please re-review."
publishedDate: 2026-11-08
featured: false
---

Big data is the name given to data sets that are too large, too fast-changing or too varied to handle with traditional tools such as a single relational database on one server. This is a short topic with a clear set of ideas: what makes data big, why it needs different storage and processing methods, and how functional programming helps spread the work across many machines. The challenge in the exam is to explain these ideas using the correct terms and to relate them to a given scenario.

## Where this fits in the specification

Big Data is section 4.11 of AQA 7517 and is assessed on Paper 2. It draws on [Fundamentals of databases](/resources/aqa-a-level-computer-science-fundamentals-of-databases-study-guide/) for the limits of the relational model, and it leads into [Fundamentals of functional programming](/resources/aqa-a-level-computer-science-fundamentals-of-functional-programming-study-guide/), whose higher-order functions are the tools used to process big data in parallel. Questions are typically 2 to 6 marks: define the term, describe a characteristic, or explain why a method suits a large data set.

## What makes data big

The AQA specification calls Big Data "a catch-all term for data that won't fit the usual containers" and describes it in terms of exactly three characteristics:

- **Volume**: too big to fit into a single server.
- **Velocity**: streaming data, where the system must respond in milliseconds to seconds, such as card transactions or sensor readings arriving continuously.
- **Variety**: data in many forms, such as structured, unstructured, text and multimedia.

Other textbooks add further "Vs" such as veracity or value, but these are not in the 7517 specification, so do not offer them in place of the three above.

The specification stresses that although size gets the attention, the **most difficult aspect of Big Data is its lack of structure**. This makes analysing the data significantly more difficult, and means relational databases are not appropriate because they need data to fit a row-and-column format. **Machine learning** techniques are needed to discern patterns in the data and extract useful information. Data from networked sensors, smartphones, video surveillance and mouse clicks is continuously streamed.

A good answer ties each term to the scenario, for example: "A weather service receives readings from thousands of stations every few seconds (velocity), in many formats (variety), adding up to terabytes (volume)."

## Why traditional methods struggle

A **relational database** works best on structured data with a fixed schema, on one server or a small cluster, with strong consistency and transactions. With big data:

- The data is too large for one machine, and scaling up (a bigger server) is expensive and eventually impossible, so the data has to be **distributed** across many machines (scaling out).
- Joins across tables spread over many machines are slow.
- A fixed schema is awkward when the structure of the data keeps changing or is not known in advance, as with **unstructured** data such as free text or images.
- Strict consistency across many machines slows every write.

## The fact-based model

A **fact-based model** records data as a collection of small, individual **facts** that are never changed once stored. Each fact is typically a statement about an entity with a timestamp, for example "customer 17 has the town Leeds, as of 3 October". When something changes, a new fact is added, and the old fact stays as history. This suits data that changes over time and data that is not in a fixed structure, because there is no need to alter a table design to store a new kind of fact. It also removes the risk of an update overwriting good data, since data is only ever appended, and so it can be easily copied between machines.

## Graph schemas

Where the relationships between items are the point, a **graph schema** is a natural way to show the structure. It has:

- **Nodes**, which represent entities (people, products).
- **Edges**, which are the relationships between nodes (follows, bought, is friend of), and may be directed.
- **Properties**, which are the attributes of a node or edge (name, date).

Social networks, recommendation systems and route finding are typical uses. Following relationships such as "friends of friends" is a short walk across edges, whereas in a relational database it would need several joins.

## Processing big data with functional methods

When data is too big to fit on one server, the specification says the **processing must be distributed across more than one machine**, and that **functional programming is a solution** because it makes it easier to write correct and efficient distributed code. The three features of functional languages the specification names are:

- **Immutable data structures**: data is never changed in place, so machines working on copies of the data cannot corrupt each other's work.
- **Statelessness**: a function's result depends only on its inputs, not on stored state, so the same function can run on many machines at once in any order and give correct results.
- **Higher-order functions**: functions such as **map** (apply a function to every item independently), **filter** and **reduce** (fold, combine many items into one result) take other functions as arguments, so the same operation can be sent to every machine.

These features make code easier to write **correctly** (no side effects to reason about) and easier to **distribute** across servers. The worked example below shows the idea; the map-then-reduce pattern is widely known as MapReduce, though the specification does not require that name.

### Worked example 1: counting events with map and reduce

A server cluster stores log lines, and we need the count of each word. Take five lines: "login fail", "login ok", "search ok", "login fail", "search fail".

1. **Map**: turn every word in every line into a pair (word, 1). That gives ten pairs: (login,1), (fail,1), (login,1), (ok,1), (search,1), (ok,1), (login,1), (fail,1), (search,1), (fail,1). Each line can be mapped on a different machine.
2. **Group by key**: collect the values for each word: login [1,1,1], fail [1,1,1], ok [1,1], search [1,1].
3. **Reduce**: add the values for each key: login 3, fail 3, ok 2, search 2.

The total is 3 + 3 + 2 + 2 = 10, which equals the number of words, a useful check. Because the map step handles each line alone and the reduce step handles each key alone, adding more machines makes the job faster.

### Worked example 2: estimating volume

A city has 25,000 sensors, each sending one 12-byte reading every 2 seconds. How much data is that per day?

Readings per sensor per day = 86,400 / 2 = 43,200. Total readings = 25,000 x 43,200 = 1,080,000,000. Data = 1,080,000,000 x 12 = 12,960,000,000 bytes, which is about 12.96 GB per day (decimal units), or roughly 4.7 TB per year. This shows volume and velocity together: no single reading is large, but the rate makes the totals big.

## Issues with big data

Large data sets raise the questions from [Consequences of uses of computing](/resources/aqa-a-level-computer-science-consequences-of-uses-of-computing-study-guide/): privacy when personal data is combined from several sources, bias in models trained on it, security of stored data, and who owns it. Be ready to give a benefit and a risk of using big data in a scenario.

## Common mistakes

- Defining big data as "a lot of data" without velocity or variety.
- Saying a fact-based model "updates" a fact. New facts are added instead.
- Confusing nodes (things) with edges (relationships).
- Saying map and reduce are the same. Map transforms each item; reduce combines items.
- Claiming that more machines always make things faster. The work must be divisible.

## Exam technique

For "explain" questions, give the term, what it means and what it causes in the scenario. A **describe** question wants features; a **justify** question wants a reason that matches the scenario. Use the scenario's own figures and data types in your answer.

## Frequently asked questions

**How many Vs does AQA 7517 require?**
Three: volume, velocity and variety. Veracity and value appear in some textbooks but are not in the specification.

**What is the hardest aspect of Big Data according to AQA?**
Its lack of structure. Unstructured data is hard to analyse and does not fit the row-and-column format a relational database needs, so machine learning is used to find patterns.

**Which features of functional programming help with Big Data?**
Immutable data structures, statelessness and higher-order functions. Together they make it easier to write correct code that can be distributed across more than one server.

**What is a graph schema used for?**
It captures the structure of a data set as nodes (entities), edges (relationships) and properties (attributes), which suits highly connected data such as social networks.

## Check your understanding

1. State three characteristics of big data. *Answer: volume, velocity and variety.*
2. Why might a relational database be unsuitable for big data? *Answer: a fixed schema and joins across many machines make it hard to scale out and to hold varied data.*
3. What is a fact in a fact-based model? *Answer: a small, unchanging, timestamped statement about an entity.*
4. In a graph schema, what do edges represent? *Answer: the relationships between nodes.*
5. Why does statelessness help distributed processing? *Answer: results depend only on inputs, with no side effects, so copies can run at once on different machines in any order.*
6. In worked example 1, how many pairs does the map step produce for "login fail" alone? *Answer: two, (login,1) and (fail,1).*
7. How many readings per day does one sensor send if it reports every 5 seconds? *Answer: 86,400 / 5 = 17,280.*
8. Give one privacy risk of big data. *Answer: combining data sets may identify individuals.*
