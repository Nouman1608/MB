---
title: "AQA A-Level Computer Science (7517): Graphs"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.2.4 Graphs: terms, typical uses, building adjacency matrices and lists for directed and weighted graphs, and comparing them."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.4 Graphs** in AQA A-Level Computer Science (7517). The specification asks you to:

- be aware of a graph as a data structure used to **represent more complex relationships**;
- be familiar with **typical uses** for graphs;
- explain the terms **graph, weighted graph, vertex/node, edge/arc, undirected graph and directed graph**;
- know how an **adjacency matrix** and an **adjacency list** may be used to represent a graph;
- **compare** the use of adjacency matrices and adjacency lists.

The [abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/) defines these terms and gives a one-table comparison. This page builds both representations for an undirected weighted graph and for a directed graph, shows how to read information back out of each, and quantifies the memory comparison so that your "compare" answers carry evidence.

Condensed notes are in the [graphs revision notes](/resources/aqa-a-level-computer-science-7517-graphs-revision-notes/), and exam-style questions are in the [graphs practice questions](/resources/aqa-a-level-computer-science-7517-graphs-practice/). Graph traversal (breadth-first and depth-first) and shortest-path algorithms belong to section 4.3, Fundamentals of algorithms.

## The terms

| Term | Meaning |
|---|---|
| Graph | A set of vertices (nodes) connected by edges (arcs), used to represent relationships between items |
| Vertex / node | One item in the graph, such as a town or a person |
| Edge / arc | A connection between two vertices |
| Undirected graph | Edges have no direction: an edge between A and B can be followed either way |
| Directed graph | Each edge has a direction, drawn as an arrow from one vertex to another |
| Weighted graph | Each edge has a value (weight), such as a distance, time or cost |

A graph can be both directed and weighted (one-way streets with travel times) or neither (a friendship network).

## Why graphs represent "more complex relationships"

A list orders items one after another; a tree arranges them in a hierarchy where each item has one parent. A graph has neither restriction: any vertex can connect to any number of others, connections can form cycles, and connections can carry direction and weight. That generality is why graphs model networks.

## Typical uses

| Situation | Vertices | Edges | Type |
|---|---|---|---|
| Road map for a route planner | Junctions or towns | Roads, weighted by distance or time | Weighted; directed where roads are one-way |
| Computer network | Computers, routers | Links, weighted by delay or cost | Weighted, usually undirected |
| Social network (friendship) | People | Friendships | Undirected |
| Social network (following) | Accounts | "Follows" relationships | Directed |
| World Wide Web | Pages | Hyperlinks | Directed |
| Project planning | Tasks | "Must finish before" | Directed |

When asked for a use, name what the vertices and edges represent; "maps" alone is too thin.

## Worked example 1: an undirected weighted graph

Five depots, P, R, S, T and W, joined by roads with travel times in minutes (invented data):

P–R 6, P–S 2, R–S 3, R–T 5, S–W 8, T–W 1

**Adjacency matrix.** One row and one column per vertex. The cell in row X, column Y holds the weight of the edge between X and Y; a dash (or 0 or ∞, by stated convention) means no edge.

| | P | R | S | T | W |
|---|---|---|---|---|---|
| P | – | 6 | 2 | – | – |
| R | 6 | – | 3 | 5 | – |
| S | 2 | 3 | – | – | 8 |
| T | – | 5 | – | – | 1 |
| W | – | – | 8 | 1 | – |

The matrix is **symmetric** about its leading diagonal, because every undirected edge appears twice: row P column R and row R column P both hold 6.

**Adjacency list.** For each vertex, list its neighbours, with the weight:

```
P: R(6), S(2)
R: P(6), S(3), T(5)
S: P(2), R(3), W(8)
T: R(5), W(1)
W: S(8), T(1)
```

Again each undirected edge appears twice, once in each endpoint's list: the 6 edges give 12 entries.

## Worked example 2: a directed graph

Five web pages and their links (no weights): A → B, A → C, B → C, C → A, D → C. Page E has no links in or out.

**Adjacency matrix.** Row = the vertex the edge comes **from**; column = the vertex it goes **to**. A 1 means an edge exists.

| from \ to | A | B | C | D | E |
|---|---|---|---|---|---|
| A | 0 | 1 | 1 | 0 | 0 |
| B | 0 | 0 | 1 | 0 | 0 |
| C | 1 | 0 | 0 | 0 | 0 |
| D | 0 | 0 | 1 | 0 | 0 |
| E | 0 | 0 | 0 | 0 | 0 |

The matrix is **not symmetric**: A → B is 1 but B → A is 0.

**Adjacency list.**

```
A: B, C
B: C
C: A
D: C
E: (none)
```

**Reading information back out.**

- Links **from** a page: read its row in the matrix (A's row has two 1s), or its list (A: B, C).
- Links **to** a page: read its column in the matrix (column C has three 1s, from A, B and D). In the list you must search every vertex's list for C, which is slower.
- An isolated vertex such as E is a row and column of zeros in the matrix and an empty list.

## Comparing the two representations

**Memory.** For a graph with n vertices:

- an adjacency matrix always needs **n × n** cells, whatever the number of edges;
- an adjacency list needs one entry per edge for a directed graph, or two per edge for an undirected graph, plus a small amount of space for each vertex's list.

**Worked example 3: putting numbers on it.** A rail network has 1000 stations and 3000 undirected track links.

- Matrix: 1000 × 1000 = 1 000 000 cells, of which only 6000 are non-empty.
- List: 2 × 3000 = 6000 entries.

This graph is **sparse** (few edges compared with the number of possible edges), so the list is far smaller. For a small **dense** graph, say 10 vertices with 40 undirected edges, the matrix needs 100 cells and the list 80 entries plus the overhead of storing each neighbour's identifier and the links between entries, so the difference disappears and the matrix's speed advantages win.

**Speed of common operations.**

| Operation | Adjacency matrix | Adjacency list |
|---|---|---|
| Is there an edge from X to Y? | One lookup, the same time for any graph | Search X's list |
| List all neighbours of X | Scan the whole row of n cells | Read X's list, only as long as needed |
| Add or remove an edge | Change one cell | Add or remove a list entry |
| Add a vertex | A new row and column (often reallocating the matrix) | Add a new, empty list |
| Memory | n² cells | Proportional to the number of edges |

**Rule of thumb for "justify" questions.** Choose the **matrix** for a **dense** graph, or when the program frequently **tests whether two particular vertices are connected**. Choose the **list** for a **sparse** graph, or when the program frequently **visits all the neighbours** of a vertex, as traversal algorithms do.

## Common mistakes

- Drawing an asymmetric matrix for an undirected graph.
- Drawing a symmetric matrix for a directed graph by entering each edge twice.
- Swapping rows and columns for a directed graph without stating the convention.
- Using 0 to mean "no edge" in a weighted graph where 0 could be a genuine weight; say which symbol you use.
- Counting each undirected edge once in an adjacency list.
- Stating "a matrix uses more memory" without linking it to the graph being sparse.

## Exam technique

- **Explain a term**: a definition plus an example ("a directed graph: edges have a direction, such as hyperlinks from one page to another").
- **Draw a matrix or list**: label every row and column; state the symbol for "no edge"; for undirected graphs check symmetry.
- **Compare**: one point about memory and one about operation speed, each tied to the graph's density or the program's main task.
- **Justify a representation**: quote the scenario's numbers (vertices, edges per vertex) to show whether it is sparse.

## More resources on this topic

- [Graphs revision notes](/resources/aqa-a-level-computer-science-7517-graphs-revision-notes/)
- [Graphs practice questions](/resources/aqa-a-level-computer-science-7517-graphs-practice/)
- [Trees study guide](/resources/aqa-a-level-computer-science-7517-trees/)
- [Abstract data types study guide for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.4 Graphs. Always check the current specification on the AQA website.*
