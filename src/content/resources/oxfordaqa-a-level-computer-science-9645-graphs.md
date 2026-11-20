---
title: "OxfordAQA A-Level Computer Science (9645): Graphs"
seoTitle: "OxfordAQA A-Level CS 9645 Graphs Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "graphs-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.10.1 in depth: graph terms, weighted and directed graphs, adjacency matrices and lists, and when to use each, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.10.1 Graphs** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.10 Advanced data structures (A-level). The specification asks you to be aware of a graph as a data structure used to represent **complex relationships**; to be familiar with **typical uses** for graphs; to explain the terms **graph, weighted graph, vertex/node, edge/arc, undirected graph and directed graph**; to know how an **adjacency matrix** and an **adjacency list** can represent a graph, including an adjacency matrix for both weighted and unweighted graphs; and to compare the two representations. The specification adds that adjacency matrices are more appropriate when edges must be added or removed often, when the presence or absence of edges is tested often, or when the graph is **dense**, and that adjacency lists are more appropriate when the graph is **sparse**.

For quick recall use the [graphs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graphs-revision-notes/), and test yourself with the [graphs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graphs-practice/). The [advanced data structures study guide](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) covers all of topic 3.10. Searching a graph is covered in the [graph algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms/). Code is Python, and the output shown was produced by running the code.

## What a graph is

A **graph** is a data structure made of **vertices** and the **edges** that connect them. It is used to represent **complex relationships** in which any item may be linked to any number of others, which arrays, lists, stacks and queues cannot show naturally.

- A **vertex** (also called a **node**) is one item, such as a town, a person or a web page.
- An **edge** (also called an **arc**) is a link between two vertices, such as a road, a friendship or a hyperlink.

Typical uses:

- **Road and rail networks**, with towns as vertices and roads as edges. Edges carry distances, so a route-finder can find the shortest path.
- **Computer networks**, with devices as vertices and connections as edges.
- **Social networks**, with people as vertices and friendships as edges.
- **The World Wide Web**, with pages as vertices and hyperlinks as edges.
- **Dependencies**, such as which tasks must be done before others.
- **Games and puzzles**, with positions as vertices and legal moves as edges.

## Types of graph

| Type | Meaning | Example |
|---|---|---|
| Undirected | Edges have no direction; an edge joins two vertices in both ways | A friendship, a two-way road |
| Directed | Each edge has a direction, shown by an arrow | A hyperlink, a one-way street |
| Unweighted | Edges carry no value; they exist or they do not | Who is friends with whom |
| Weighted | Each edge has a value (weight, cost), such as distance or time | A road map with distances |

A graph can be both directed and weighted, such as a one-way road system with journey times.

Two useful ideas: two vertices joined by an edge are **adjacent** (or neighbours), and a **path** is a sequence of edges from one vertex to another. In a weighted graph the **cost** of a path is the sum of the weights of its edges.

## Representing a graph: the adjacency matrix

An **adjacency matrix** is a two-dimensional array with a row and a column for every vertex. The cell at row *i*, column *j* says whether there is an edge from vertex *i* to vertex *j*.

- **Unweighted graph:** the cell holds **1** if there is an edge and **0** if not.
- **Weighted graph:** the cell holds the **weight** of the edge, and a special value (such as a blank, 0 or infinity, whichever the question defines) when there is no edge.
- **Undirected graph:** the matrix is **symmetric**, because an edge from A to B is also an edge from B to A.

**Worked example 1.** An undirected, unweighted graph has vertices A, B, C, D and E, and edges A-B, A-C, B-D, C-D and D-E.

|   | A | B | C | D | E |
|---|---|---|---|---|---|
| **A** | 0 | 1 | 1 | 0 | 0 |
| **B** | 1 | 0 | 0 | 1 | 0 |
| **C** | 1 | 0 | 0 | 1 | 0 |
| **D** | 0 | 1 | 1 | 0 | 1 |
| **E** | 0 | 0 | 0 | 1 | 0 |

Checks: the matrix is symmetric; each edge appears twice (once in each half); the sum of a row is the **degree** (number of edges) of that vertex, so D has degree 3 and E has degree 1.

**Worked example 2.** A directed, weighted graph has vertices P, Q, R and S, and edges P→Q (4), P→R (2), Q→S (5), R→Q (1) and R→S (8). Here a dash means no edge.

|   | P | Q | R | S |
|---|---|---|---|---|
| **P** | – | 4 | 2 | – |
| **Q** | – | – | – | 5 |
| **R** | – | 1 | – | 8 |
| **S** | – | – | – | – |

This matrix is **not** symmetric because the edges are directed. Row P shows the edges leaving P. Column S shows the edges arriving at S. The path P→R→Q→S has a cost of 2 + 1 + 5 = **8**, which is less than the direct-looking route P→Q→S at 4 + 5 = **9**.

## Representing a graph: the adjacency list

An **adjacency list** stores, for each vertex, a list of the vertices it is adjacent to. For a weighted graph each entry also holds the weight.

For example 1:

```
A: B, C
B: A, D
C: A, D
D: B, C, E
E: D
```

For example 2 (directed and weighted, entries are vertex and weight):

```
P: (Q, 4), (R, 2)
Q: (S, 5)
R: (Q, 1), (S, 8)
S: (empty)
```

In Python, a dictionary of lists works well.

```python
L = {"A": ["B", "C"], "B": ["A", "D"], "C": ["A", "D"],
     "D": ["B", "C", "E"], "E": ["D"]}
print({v: len(L[v]) for v in L})
```

This prints the degrees `{'A': 2, 'B': 2, 'C': 2, 'D': 3, 'E': 1}`. The sum of the degrees is 10, which is twice the 5 edges, because each undirected edge is stored once from each end.

## Comparing the two representations

Let *n* be the number of vertices and *e* the number of edges.

| Feature | Adjacency matrix | Adjacency list |
|---|---|---|
| Storage | *n* × *n* cells, whatever the number of edges | About *n* + *e* entries (*n* + 2*e* for an undirected graph) |
| Is there an edge from A to B? | Direct look-up of one cell | Search A's list |
| Add or remove an edge | Change one cell | Insert into or delete from a list |
| List all neighbours of a vertex | Scan the whole row of *n* cells | Read the vertex's list |
| Best for | **Dense** graphs, frequent edge tests, frequent adding or removing of edges | **Sparse** graphs |

A graph is **dense** if it has many edges relative to the number of vertices (the most an undirected graph can have is *n*(*n* − 1) ÷ 2 edges) and **sparse** if it has few.

**Worked example 3: a sparse graph.** A network has 1 000 vertices and 2 000 undirected edges.

- Matrix: 1 000 × 1 000 = **1 000 000 cells**, almost all holding 0.
- List: 1 000 lists plus 2 × 2 000 = 4 000 entries, about **5 000** items.

The list uses a small fraction of the space, so it is more appropriate.

**Worked example 4: a dense graph.** A graph has 100 vertices and 4 000 undirected edges. The most it could have is 100 × 99 ÷ 2 = 4 950, so it is about 81% full.

- Matrix: 100 × 100 = **10 000 cells**.
- List: 100 + 2 × 4 000 = **8 100 entries**, and each entry needs a pointer or index as well.

The two are about the same size, so the matrix, with its instant edge look-up, is more appropriate.

## Building a matrix in code

A program can build the adjacency matrix of example 1 from a list of edges. The vertices are numbered 0 to 4 for A to E, and each undirected edge sets two cells.

```python
V = ["A", "B", "C", "D", "E"]
edges = [("A", "B"), ("A", "C"), ("B", "D"), ("C", "D"), ("D", "E")]
index = {v: i for i, v in enumerate(V)}
n = len(V)
M = [[0] * n for _ in range(n)]
for a, b in edges:
    M[index[a]][index[b]] = 1
    M[index[b]][index[a]] = 1
print(M[index["D"]])
```

The last line prints `[0, 1, 1, 0, 1]`, which is row D: D is adjacent to B, C and E. For a directed graph only the first assignment would be made, and for a weighted graph the value 1 would be replaced by the weight.

The code also shows the cost of a matrix: the program creates 5 × 5 = 25 cells to store 5 edges, and the cost grows with the square of the number of vertices.

## Reading information from a graph

Questions often ask for facts that can be read straight from a representation.

- **Is there an edge from X to Y?** Look at row X, column Y, or search X's list for Y.
- **What are the neighbours of X?** The 1s (or weights) in row X, or the entries of X's list.
- **What is the degree of X in an undirected graph?** The number of 1s in row X, or the length of X's list.
- **In a directed graph,** the number of edges leaving X is the row total, and the number arriving at X is the column total. In example 2, Q has one edge leaving (to S) and two arriving (from P and R).
- **What is the cost of a path?** Add the weights of the edges along it.

## Exam technique

- **Define each term in one line** and give an example: "A directed graph is one in which each edge has a direction, such as a one-way street."
- **Check symmetry** in an undirected matrix. If your matrix is not symmetric, there is a mistake.
- **For weighted graphs, put the weight** in the cell, not 1.
- **Justify the choice.** "The graph is sparse, so a matrix would be mostly empty cells and waste memory. An adjacency list stores only the edges that exist."
- **Compare using both sides.** Mention storage and the speed of the operation that matters.
- **Read the direction.** Row to column means from to to.

## Common mistakes

- Writing only one half of an undirected matrix.
- Treating a directed graph as symmetric.
- Putting the weights in the cell for an unweighted graph, or 1 for a weighted one.
- Saying that adjacency lists are always better. They are better for sparse graphs.
- Confusing "vertex" and "edge".
- Forgetting that the list of an undirected graph stores each edge twice.

## Next steps

- [Graphs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graphs-revision-notes/)
- [Graphs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graphs-practice/)
- [Trees study guide](/resources/oxfordaqa-a-level-computer-science-9645-trees/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.1 Graphs.
