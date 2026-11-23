---
title: "AQA A-Level Computer Science (7517): Big Data -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.11.1 questions with answers: the three Vs, structure, distributed processing, functional programming features, fact-based models and graph schema."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs: examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Big Data study guide](/resources/aqa-a-level-computer-science-7517-big-data/) | [Big Data revision notes](/resources/aqa-a-level-computer-science-big-data-revision-notes/)

---

## Section A

**1.** State what is meant by the term Big Data. **[1]**

**2.** Name the three properties used to describe Big Data. **[3]**

**3.** State what is meant by a stateless function. **[1]**

**4.** Name the three parts of a graph schema. **[3]**

## Section B

**5.** A city places 10,000 air-quality sensors that each send one reading every second.

**(a)** Calculate the number of readings received in one hour. **[2]**
**(b)** Explain which of the three Vs this illustrates. **[2]**

**6.** Explain why a relational database is not an appropriate way to store large amounts of unstructured data such as photographs and video clips. **[3]**

**7.** A data set of 120 TB (120,000,000 MB) must be processed. One machine can process 200 MB per second.

**(a)** Calculate the time, in hours, for one machine to process the whole data set, to one decimal place. **[3]**
**(b)** The work is shared equally between 40 machines working at the same time. Calculate the time, in hours, to one decimal place. **[2]**
**(c)** State **one** reason why the real time might be longer than this. **[1]**

**8.** Explain why machine learning is often used with Big Data. **[2]**

**9.** Explain how each of the following features of functional programming makes it easier to write correct distributed code.

**(a)** Immutable data structures **[2]**
**(b)** Statelessness **[2]**
**(c)** Higher-order functions **[2]**

**10.** Three machines each hold a part of a set of customer comments. Describe how the number of times each word appears across all comments could be found by using a map step and a reduce step. **[4]**

**11.** A customer moves from Leeds to York. A system based on a fact-based model has already stored the fact "Mia lives in Leeds, recorded 2026-02-01".

**(a)** Describe what the system stores when Mia's move is recorded on 2026-08-15. **[2]**
**(b)** Explain one advantage of storing the data this way. **[2]**

**12.** A social network stores people, the photos they post and the people who like each photo as a graph.

**(a)** Identify the nodes and the edges. **[2]**
**(b)** Give **two** properties that could be stored. **[2]**
**(c)** Explain why a graph schema suits the question "which photos were liked by friends of Mia?". **[2]**

**13.** A company says: "Big Data just means we have lots of customer records." Evaluate this claim. **[4]**

---

## Answers

**1.** Data that will not fit the usual containers (for example a single server or a row-and-column database) [1].

**2.** Volume [1]; velocity [1]; variety [1].

**3.** A function that keeps no hidden state between calls, so its result depends only on its arguments, with no side effects [1].

**4.** Nodes [1]; edges [1]; properties [1].

**5. (a)** 10,000 × 3,600 [1] = 36,000,000 readings [1].
**(b)** Velocity [1], because the data is streaming continuously and must be handled as it arrives [1].

**6.** A relational database needs data in a fixed row-and-column format with set attributes [1]; photographs and video clips do not fit that format [1]; relational databases also do not scale well across multiple machines when the data is very large [1].

**7. (a)** 120,000,000 ÷ 200 = 600,000 seconds [1]; 600,000 ÷ 3,600 [1] = 166.7 hours [1].
**(b)** 166.7 ÷ 40 [1] = 4.2 hours [1] (600,000 ÷ 40 = 15,000 seconds).
**(c)** Any one from: time to split the data and combine the results; machines wait for each other or for data to arrive over the network; the work is not shared perfectly evenly; a machine may fail and its work must be repeated [1].

**8.** The data is too large and unstructured to analyse by writing simple queries [1]; machine learning can find patterns in the data and extract useful information from it [1].

**9. (a)** Data cannot be changed after it is created, so a machine cannot alter data another machine is using [1]; there are therefore no lost updates or clashes, and data can be copied between machines safely [1].
**(b)** A stateless function depends only on its arguments, with no hidden state [1]; so it can be run on any machine, in any order, or run again if a machine fails, and give the same result [1].
**(c)** Higher-order functions such as map take a function and apply it to each item [1]; because each item is handled independently, items can be given to different machines, and the results combined with a function such as reduce [1].

**10.** Each machine runs the same function on its own comments and produces a count for each word it finds (map) [1]; the function uses only its own data, so the machines work at the same time without interfering [1]; the partial counts for each word are collected and added together (reduce) [1]; adding is order-independent, so the final totals are correct whichever machine finishes first [1].

**11. (a)** The old fact is kept [1]; a new fact "Mia lives in York, recorded 2026-08-15" is added [1].
**(b)** The history is preserved, so the system can show where Mia lived at any date [1]; nothing is overwritten, so data is never lost by mistake and the data matches the idea of immutability, which helps distributed processing [1].

**12. (a)** Nodes: people and photos [1]; edges: for example "posted" and "likes" (and "is friends with") [1].
**(b)** Any two from: a person's name; a photo's date; a photo's caption; the date a like was made [1 each].
**(c)** The query follows relationships from Mia to her friends to the photos they like [1]; a graph holds the relationships directly, so following edges is simpler than joining several tables in a relational database [1].

**13.** The claim is incomplete [1]. Big Data is data that will not fit the usual containers, such as a single server or a row-and-column format [1]. Volume is only one property; velocity (streaming data processed in milliseconds to seconds) and variety (structured, unstructured, multimedia data) matter too [1]. A company with many customer records in a well-structured database that fits on one server may not have Big Data in this sense [1].

---

## Where marks are usually lost

- Naming only volume as the meaning of Big Data.
- Saying relational databases "cannot store" big data, rather than explaining why they are not appropriate.
- Naming the functional features without linking them to distributed processing.
- Describing facts as being overwritten.
- Mixing nodes, edges and properties.
