---
title: "AQA A-Level Computer Science (7517): Graphs -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.2.4 recall: graph terms, uses, adjacency matrix and list rules, memory and speed comparison, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.4 Graphs**, AQA A-Level Computer Science (7517). Worked matrices and lists for weighted and directed graphs are in the [graphs study guide](/resources/aqa-a-level-computer-science-7517-graphs/); exam-style questions are in the [graphs practice questions](/resources/aqa-a-level-computer-science-7517-graphs-practice/).

## What the specification asks

- A graph is a data structure used to **represent more complex relationships**.
- Know **typical uses**.
- Explain: **graph, weighted graph, vertex/node, edge/arc, undirected graph, directed graph**.
- Know how an **adjacency matrix** and an **adjacency list** represent a graph, and **compare** them.

## Terms

| Term | Meaning |
|---|---|
| Graph | Vertices connected by edges, representing relationships |
| Vertex / node | An item, such as a town |
| Edge / arc | A connection between two vertices |
| Undirected graph | Edges can be followed both ways |
| Directed graph | Edges have a direction (arrows) |
| Weighted graph | Each edge carries a value: distance, time, cost |

## Why a graph and not a list or tree

- A list: one item after another.
- A tree: hierarchy, no cycles, one parent per node when rooted.
- A graph: any vertex may connect to any number of others, with cycles, directions and weights allowed.

## Typical uses (name vertices and edges)

- Route planning: junctions; roads weighted by distance or time.
- Computer networks: devices; links weighted by delay or cost.
- Social networks: people; friendships (undirected) or follows (directed).
- The web: pages; hyperlinks (directed).
- Task planning: tasks; "must come before" (directed).

## Adjacency matrix rules

```
size              n × n for n vertices
cell [X][Y]       1 (or the weight) if there is an edge X → Y
no edge           0, – or ∞: state which
undirected        symmetric about the leading diagonal
directed          row = from, column = to; usually not symmetric
edges out of X    read row X
edges into X      read column X
```

## Adjacency list rules

```
one list per vertex, holding its neighbours
weighted          store neighbour and weight, e.g. R(6)
undirected        each edge appears in BOTH endpoints' lists
directed          each edge appears once, in the list of the vertex it leaves
isolated vertex   empty list
```

**Mini example (undirected, weighted):** edges P–R 6, P–S 2, R–S 3.

```
matrix         P   R   S          list
          P    –   6   2          P: R(6), S(2)
          R    6   –   3          R: P(6), S(3)
          S    2   3   –          S: P(2), R(3)
```

## Comparing the representations

| | Adjacency matrix | Adjacency list |
|---|---|---|
| Memory | Always n² cells | Proportional to edges (2 per undirected edge) |
| Edge X–Y exists? | One cell lookup | Search X's list |
| All neighbours of X | Scan n cells of row X | Read X's list only |
| Add an edge | Change one cell | Add an entry |
| Add a vertex | New row and column | New empty list |
| Best for | Dense graphs; frequent edge tests | Sparse graphs; frequent neighbour visits |

**Number check:** 1000 vertices, 3000 undirected edges → matrix 1 000 000 cells; list 6000 entries. Sparse → list.

## Sparse and dense

- **Sparse:** few edges compared with the number of possible edges.
- **Dense:** many of the possible edges are present.
- Maximum undirected edges among n vertices: n(n − 1) ÷ 2; for 10 vertices, 45.

## Key terms

| Term | Definition |
|---|---|
| Adjacency matrix | 2-D array with a row and column per vertex, recording which pairs are joined (and the weight) |
| Adjacency list | For each vertex, a list of the vertices it is joined to (and the weights) |
| Sparse graph | Graph with relatively few edges |
| Dense graph | Graph with many of its possible edges |
| Symmetric matrix | Matrix where cell [X][Y] equals cell [Y][X] |

## Exam traps

- Undirected matrix not symmetric: lost mark.
- Directed matrix made symmetric by entering edges twice: lost mark.
- 0 for "no edge" when 0 could be a real weight; state the symbol.
- Undirected edges listed once in an adjacency list.
- "Matrices use more memory" without saying the graph is sparse.
- A use of graphs with no vertices and edges named.
- Traversal and shortest-path algorithms are section 4.3, not 4.2.4.

## Self-test

1. What is another name for a vertex? For an edge?
2. Give an example of a directed graph.
3. What could the weights in a weighted graph of a computer network represent?
4. How many cells does the adjacency matrix of a 25-vertex graph have?
5. In a directed graph's matrix, which part shows the edges into vertex X?
6. Why is the matrix of an undirected graph symmetric?
7. A graph has 8 undirected edges. How many entries are in its adjacency list?
8. Which representation tests fastest whether an edge exists between two vertices?
9. Which representation suits a sparse graph, and why?
10. How is an isolated vertex shown in each representation?
11. What is the largest number of undirected edges possible among 6 vertices?
12. Name one reason a tree cannot model the links between web pages.

**Answers**

1. Node; arc.
2. Any one: web pages and hyperlinks; follows on a social network; one-way streets; task dependencies.
3. Any one: delay (latency), cost, or bandwidth of each link.
4. 625.
5. Column X.
6. Every edge goes both ways, so the value at [X][Y] equals the value at [Y][X].
7. 16.
8. The adjacency matrix: a single cell lookup.
9. The adjacency list, because it stores only the edges that exist, whereas a matrix would be mostly empty.
10. Matrix: a row and column of "no edge" values. List: an empty list.
11. 6 × 5 ÷ 2 = 15.
12. Pages can link in cycles and be linked from many pages; a tree has no cycles and a rooted tree gives each node one parent.

## More resources on this topic

- [Graphs study guide](/resources/aqa-a-level-computer-science-7517-graphs/)
- [Graphs practice questions](/resources/aqa-a-level-computer-science-7517-graphs-practice/)
- [Abstract data types revision notes for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-revision-notes/)
