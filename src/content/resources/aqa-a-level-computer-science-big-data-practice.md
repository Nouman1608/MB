---
title: "AQA A-Level Computer Science: Big Data — Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with answers on the three Vs, distributed functional processing, fact-based models and graph schema for AQA A-Level CS 7517."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Big Data study guide](/resources/aqa-a-level-computer-science-big-data-study-guide/) | [Big Data revision notes](/resources/aqa-a-level-computer-science-big-data-revision-notes/)

These questions cover section 4.11.1 of the AQA A-Level Computer Science (7517) specification. Big Data is
assessed on Paper 2. Questions 1-7 use this scenario.

**Scenario.** A city's transport authority collects data from 40,000 road sensors (a reading every second),
from bus GPS trackers, from traffic cameras, from passengers' journey-planner apps and from social media posts
that mention delays. It wants to predict congestion and reroute buses in real time.

---

## Section A: describing Big Data

**1.** Explain how each of **volume**, **velocity** and **variety** applies to the transport authority's data.
**[6]**

**2.** The specification says the most difficult aspect of Big Data is its lack of structure. Give two reasons
why lack of structure is a problem. **[2]**

**3.** Explain why a relational database is not appropriate for storing all of this data. **[3]**

**4.** Explain why machine learning techniques are needed to make use of the data. **[2]**

## Section B: distributed processing

**5.** The data does not fit on a single server.
**(a)** State what must happen to the processing as a result. **[1]**
**(b)** Explain how each of these features of functional programming makes it easier to write correct code that
can be distributed across servers: (i) immutable data structures (ii) statelessness (iii) higher-order
functions. **[6]**

**6.** The authority wants the average speed recorded by each sensor over one day. Describe how `map` and `fold`
(reduce) could be used across several servers to calculate this. **[4]**

## Section C: modelling the data

**7.** **(a)** Explain what is meant by the **fact-based model**. **[2]**
**(b)** Write three separate facts that could be stored about bus 214. **[3]**
**(c)** Explain one advantage of a fact-based model over storing each bus as a single row that is overwritten
when its details change. **[2]**

**8.** A music streaming service stores data about users, songs and artists. Users follow artists and play songs;
each song is by one artist.
**(a)** Draw a graph schema for this data, labelling the nodes and edges. **[4]**
**(b)** Give one property each for a user node and a song node. **[2]**
**(c)** Explain the difference between an edge and a property in a graph schema. **[2]**

---

## Answers

**1.** Volume: readings from 40,000 sensors every second plus video and app data is far too much to fit on a single
server [2]. Velocity: data arrives as a continuous stream and must be processed within milliseconds to seconds to
reroute buses in real time [2]. Variety: the data comes in many forms -- structured sensor readings and GPS
coordinates, unstructured text from social media, and multimedia from cameras [2].

**2.** Analysing the data is made significantly more difficult [1]; it cannot be stored in the row-and-column format
a relational database requires [1].

**3.** Relational databases require data to fit a fixed row-and-column format [1], but camera footage and social
media text do not fit neatly into fields [1]. The volume is too large for one server, and relational databases do
not scale well across multiple machines [1].

**4.** The data is too large and too varied for people, or fixed queries, to find patterns [1]; machine learning can
discern patterns, such as the conditions that lead to congestion, and extract useful information automatically [1].

**5. (a)** It must be **distributed** across more than one machine [1].
**(b)** (i) Immutable data cannot be changed once created [1], so servers working on the same data at the same time
cannot interfere with each other and no locking is needed [1].
(ii) Stateless functions have no side effects and always give the same output for the same input [1], so a task
can run on any server in any order, and a failed task can be re-run with the same result [1].
(iii) Higher-order functions such as map, filter and fold take a function as an argument [1], so the same function
can be sent to every server and applied to that server's portion of the data in parallel [1].

**6.** The readings are split across the servers [1]. On each server, `map` is applied to every reading to turn it
into a pair (sensor ID, (speed, 1)) [1]. `fold` combines pairs with the same sensor ID by adding the speeds and the
counts, first on each server and then across servers [1]. Finally, for each sensor, total speed ÷ count gives the
average [1].

**7. (a)** Data is stored as a collection of **facts** [1], each of which captures a **single piece of information**
[1].
**(b)** Any three single-piece facts, e.g. "bus 214 has registration KX26 ABC"; "bus 214 was at stop 77 at 08:14:05";
"bus 214 is assigned to route 9" [3].
**(c)** New information is added as new facts rather than overwriting old data [1], so the history is kept (e.g. every
past location of the bus) and nothing is lost if a value changes [1].

**8. (a)**
```
(User) --follows--> (Artist)
(User) --plays-->   (Song)
(Song) --by-->      (Artist)
```
Three node types: User, Song, Artist [1]; follows edge [1]; plays edge [1]; by edge with correct direction [1].
**(b)** User: e.g. username, date joined, country [1]. Song: e.g. title, duration, release year [1].
**(c)** An edge represents a **relationship** between two nodes (e.g. a user follows an artist) [1]; a property is a
piece of **information about** a single node (e.g. the artist's name) [1].

---

## Where marks are usually lost

- Defining the three Vs in general terms without applying them to the scenario.
- Saying a relational database "cannot hold that much data" without mentioning its row-and-column format or poor
  scaling across machines.
- Naming functional programming features without explaining how each helps distributed processing.
- Writing a "fact" that contains several pieces of information at once.

## Frequently asked questions

**Is veracity one of the Vs in AQA 7517?**
No. The AQA 7517 specification describes Big Data in terms of volume, velocity and variety only. Answer with those
three unless a question introduces another term.

**Do I need to write map and fold code for Big Data questions?**
Not usually in this section. You need to explain how higher-order functions let the same processing run on many
servers. Writing and evaluating map, filter and fold is tested in functional programming (4.12).
