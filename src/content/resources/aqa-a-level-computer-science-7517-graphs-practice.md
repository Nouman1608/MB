---
title: "AQA A-Level Computer Science (7517): Graphs -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.4
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "graphs-7517"
description: "Original AQA 7517 section 4.2.4 questions with mark-scheme answers: graph terms, uses, adjacency matrices and lists, and choosing a representation."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Graphs study guide](/resources/aqa-a-level-computer-science-7517-graphs/) | [Graphs revision notes](/resources/aqa-a-level-computer-science-7517-graphs-revision-notes/)

In adjacency matrices for directed graphs, rows show the vertex an edge comes **from** and columns the vertex it goes **to**.

---

## Section A

**1.** Explain what is meant by a **graph** as a data structure. **[2]**

**2.** Distinguish between a **directed graph** and an **undirected graph**. **[2]**

**3.** State what is meant by a **weighted graph** and give an example of what a weight could represent. **[2]**

**4.** Give **two** typical uses of graphs, stating what the vertices and edges represent in each. **[2]**

**5.** Explain why the adjacency matrix of an undirected graph is symmetric. **[2]**

## Section B

**6.** An undirected weighted graph has vertices A, B, C, D and E, and edges A–B (7), A–D (4), B–C (2), B–E (9), C–D (6) and D–E (3).

**(a)** Draw the adjacency matrix. **[3]**
**(b)** Write the adjacency list entry for vertex B. **[1]**
**(c)** State how many entries the complete adjacency list contains, and why. **[2]**

**7.** A directed graph is represented by this adjacency matrix:

| from \ to | F | G | H | J |
|---|---|---|---|---|
| F | 0 | 1 | 1 | 0 |
| G | 0 | 0 | 0 | 1 |
| H | 1 | 0 | 0 | 1 |
| J | 0 | 0 | 0 | 0 |

**(a)** List every edge in the form X → Y. **[2]**
**(b)** Write the adjacency list for the graph. **[2]**
**(c)** Identify the vertex with the most edges coming into it, and explain how the matrix shows this. **[2]**
**(d)** State what row J of the matrix tells you. **[1]**

**8.** A social network has 500 members. Friendships are mutual, and each member has, on average, 4 friends.

**(a)** Calculate the number of friendship edges. **[1]**
**(b)** Calculate the number of cells in an adjacency matrix and the number of entries in an adjacency list for this graph. **[2]**
**(c)** Recommend a representation and justify it. **[2]**

**9.** An airline's booking program constantly checks whether a direct flight exists between two airports. It serves 300 airports, and most pairs of airports are directly connected. Recommend a representation and justify your choice. **[3]**

**10.** A one-way street system has junctions K, L, M and N. Traffic can go from K to L (2 minutes), L to M (4 minutes), M to K (3 minutes) and K to N (5 minutes). Write the adjacency list, including weights. **[3]**

**11.** Compare an adjacency matrix and an adjacency list in terms of the time taken to:

**(a)** test whether an edge exists between two given vertices; **[2]**
**(b)** list all the neighbours of a given vertex. **[2]**

**12.** Explain why a graph, rather than a tree, is needed to model the links between pages on a website. **[2]**

---

## Answers

**1.** A set of vertices (nodes) connected by edges (arcs) [1], used to represent relationships between items, including more complex relationships than a list or a tree can [1].

**2.** In a directed graph each edge has a direction and can be followed only one way [1]; in an undirected graph each edge can be followed in both directions [1].

**3.** A graph in which each edge has a value (weight) [1]; for example a distance, a travel time or a cost [1].

**4.** Any two [1 each], each naming vertices and edges: road map (towns or junctions; roads); computer network (computers or routers; links); social network (people; friendships or follows); the web (pages; hyperlinks); project plan (tasks; dependencies).

**5.** Each edge can be followed both ways, so if X is connected to Y then Y is connected to X [1]; the same value is entered in row X, column Y and in row Y, column X, which mirrors the matrix about its leading diagonal [1].

**6. (a)**

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 7 | – | 4 | – |
| B | 7 | – | 2 | – | 9 |
| C | – | 2 | – | 6 | – |
| D | 4 | – | 6 | – | 3 |
| E | – | 9 | – | 3 | – |

All five vertices labelled on both axes [1]; all weights in the correct cells [1]; matrix symmetric, with a stated symbol for no edge [1].
**(b)** B: A(7), C(2), E(9) [1].
**(c)** 12 entries [1], because each of the 6 undirected edges is listed under both of its vertices [1].

**7. (a)** F → G, F → H, G → J [1]; H → F, H → J [1].
**(b)** F: G, H; G: J; H: F, J [1]; J: none [1].
**(c)** J [1]: column J contains two 1s (from G and H), more than any other column [1].
**(d)** J has no edges leaving it (row of zeros) [1].

**8. (a)** 500 × 4 ÷ 2 = **1000** edges [1].
**(b)** Matrix: 500 × 500 = **250 000** cells [1]; list: 2 × 1000 = **2000** entries [1].
**(c)** Adjacency list [1]: the graph is sparse, so a matrix would be almost entirely empty cells and waste memory [1].

**9.** Adjacency matrix [1]. Testing whether a direct flight exists needs a single lookup of one cell, which is fast and the same for every pair [1]; most pairs are connected, so the graph is dense and the matrix wastes little memory (300 × 300 = 90 000 cells is small) [1].

**10.** K: L(2), N(5) [1]; L: M(4) [1]; M: K(3); N: none [1].

**11. (a)** Matrix: look up one cell, so the time is the same however many vertices there are [1]; list: search through the first vertex's list, which takes longer for vertices with many neighbours [1].
**(b)** Matrix: scan the whole row, checking all n cells even if few are edges [1]; list: read the vertex's list directly, taking time only in proportion to the number of neighbours [1].

**12.** A tree cannot contain cycles and, when rooted, gives each node one parent [1]; web pages can link to each other in both directions and in cycles, and a page can be linked from many pages, which needs the general structure of a (directed) graph [1].

---

## Where marks are usually lost

- Forgetting to make an undirected matrix symmetric.
- Reading a directed matrix by columns instead of rows for outgoing edges.
- Counting undirected edges once in an adjacency list.
- Recommending a representation without referring to sparse or dense, or to the main operation.
- Giving a use of graphs without saying what the vertices and edges are.
