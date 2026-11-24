---
title: "OxfordAQA A-Level Computer Science (9645): Graphs -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Graphs Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.10.1 Graphs: terms, adjacency matrix and list, comparing them for dense and sparse graphs, and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.10.1 Graphs** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.10 Advanced data structures). For explanations and worked examples, see the [graphs study guide](/resources/oxfordaqa-a-level-computer-science-9645-graphs/); then practise with the [graphs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graphs-practice/).

## What the specification requires

- Be aware of a graph as a structure for representing **complex relationships**, and know **typical uses**.
- Explain **graph, weighted graph, vertex/node, edge/arc, undirected graph, directed graph**.
- Know how an **adjacency matrix** (weighted and unweighted) and an **adjacency list** represent a graph.
- **Compare** them. A matrix suits frequent adding or removing of edges, frequent edge tests, and **dense** graphs. A list suits **sparse** graphs.

## Key terms

| Term | Meaning |
|---|---|
| Graph | A set of vertices joined by edges |
| Vertex / node | One item in a graph |
| Edge / arc | A link between two vertices |
| Undirected | Edges work in both directions |
| Directed | Each edge has one direction |
| Weighted | Each edge carries a value, such as distance or cost |
| Adjacent | Joined directly by an edge |
| Degree | The number of edges at a vertex (undirected) |
| Path | A sequence of edges between two vertices |
| Dense / sparse | Many / few edges compared with the number of vertices |

## Typical uses

- Road, rail and flight networks (shortest route).
- Computer networks.
- Social networks.
- Web pages and links.
- Task dependencies.
- Game positions and moves.

## Representations

**Adjacency matrix:** an *n* × *n* table.

- Unweighted: 1 = edge, 0 = no edge.
- Weighted: the weight, with a defined value (such as – or ∞) for no edge.
- Undirected: **symmetric**.
- Directed: row = from, column = to; usually not symmetric.

**Adjacency list:** for each vertex, a list of its neighbours (with the weight if weighted).

## Worked reminder: both forms

Undirected graph: edges A-B, A-C, B-D, C-D, D-E.

|   | A | B | C | D | E |
|---|---|---|---|---|---|
| A | 0 | 1 | 1 | 0 | 0 |
| B | 1 | 0 | 0 | 1 | 0 |
| C | 1 | 0 | 0 | 1 | 0 |
| D | 0 | 1 | 1 | 0 | 1 |
| E | 0 | 0 | 0 | 1 | 0 |

List: A: B, C; B: A, D; C: A, D; D: B, C, E; E: D.

Degrees: A 2, B 2, C 2, D 3, E 1; the total is 10, twice the number of edges.

## Directed weighted example

Edges P→Q (4), P→R (2), Q→S (5), R→Q (1), R→S (8). The path P→R→Q→S costs 2 + 1 + 5 = 8; the path P→Q→S costs 4 + 5 = 9.

## Matrix against list

| | Adjacency matrix | Adjacency list |
|---|---|---|
| Space | *n* × *n* cells | About *n* + *e* entries (*n* + 2*e* if undirected) |
| Edge test | One look-up | Search a list |
| Add or remove an edge | Change a cell | Edit a list |
| Neighbours of a vertex | Scan a row | Read the list |
| Best for | Dense graphs; frequent edge tests or changes | Sparse graphs |

Maximum edges in an undirected graph: *n*(*n* − 1) ÷ 2.

*Sparse example.* 1 000 vertices and 2 000 undirected edges: the matrix has 1 000 000 cells; the list has about 5 000 entries.

*Dense example.* 100 vertices and 4 000 edges (about 81% of the possible 4 950): the matrix has 10 000 cells and the list has 8 100 entries, so they are about equal and the matrix is the better choice.

## Reading a representation

- **Edge from X to Y?** Cell (X, Y), or look for Y in X's list.
- **Neighbours of X?** The non-zero cells in row X, or X's list.
- **Degree of X?** Row total (undirected).
- **Out-degree and in-degree (directed).** Row total and column total.
- **Cost of a path.** Add the weights along it.

## Building and reading a matrix in code

```python
V = ["A", "B", "C", "D", "E"]
edges = [("A", "B"), ("A", "C"), ("B", "D"), ("C", "D"), ("D", "E")]
index = {v: i for i, v in enumerate(V)}
M = [[0] * len(V) for _ in V]
for a, b in edges:
    M[index[a]][index[b]] = 1      # one direction
    M[index[b]][index[a]] = 1      # the other direction (undirected only)
```

For a directed graph keep only the first assignment. For a weighted graph store the weight instead of 1. `M[index["D"]]` is row D, which is `[0, 1, 1, 0, 1]`: D is adjacent to B, C and E.

## Choosing: a decision guide

| Situation | Choose | Reason |
|---|---|---|
| Few edges compared with vertices (a road map of a large country) | Adjacency list | A matrix would be almost all empty cells |
| Almost every pair of vertices is joined | Adjacency matrix | The list is no smaller and edge tests are slower |
| The program often asks "is there an edge from X to Y?" | Adjacency matrix | One look-up |
| Edges are often added and removed | Adjacency matrix | Change a single cell |
| The program mostly asks "what are the neighbours of X?" on a sparse graph | Adjacency list | The list is already the answer |

## Words to use in a justification

- "**Sparse**: few edges relative to the number of vertices."
- "**Dense**: many edges relative to the number of vertices."
- "A matrix always needs *n* × *n* cells, however few edges there are."
- "A list stores only the edges that exist."
- "A matrix lets the program test for an edge directly."

## Exam traps

- **One-sided matrix.** An undirected graph needs both halves.
- **Symmetric by mistake.** A directed graph is not symmetric.
- **Weights.** Use the weight in a weighted matrix, not 1.
- **"Lists are always better".** Not for dense graphs.
- **Vertex or edge.** A vertex is a point. An edge is a line between points.
- **Double storage.** An undirected edge appears twice in a list.

## Quick self-test

1. What is a graph used to represent?
2. What is another name for a vertex?
3. What is a weighted graph?
4. Why is the matrix for an undirected graph symmetric?
5. What does a 1 in row C, column D of an unweighted matrix mean?
6. What does an adjacency list store?
7. What is the largest number of edges in an undirected graph with 8 vertices?
8. Give one advantage of an adjacency matrix.
9. Give one advantage of an adjacency list.
10. A graph has 500 vertices and 1 200 undirected edges. How many cells does its matrix have?
11. For the same graph, about how many entries does its adjacency list hold?
12. In a directed graph, how do you find the number of edges arriving at a vertex?

### Answers

1. Complex relationships between items.
2. Node.
3. A graph in which each edge has a value (weight), such as distance or cost.
4. An edge from A to B is also an edge from B to A, so both cells are set.
5. There is an edge from C to D.
6. For each vertex, the vertices it is adjacent to (with weights if weighted).
7. 8 × 7 ÷ 2 = 28.
8. Edge tests are a single look-up (or: simple to add and remove edges; suits dense graphs).
9. It uses less memory for sparse graphs (or: neighbours are listed directly).
10. 500 × 500 = 250 000.
11. 500 + 2 × 1 200 = 2 900.
12. Add up the column for that vertex.

## More on this topic

- [Graphs study guide](/resources/oxfordaqa-a-level-computer-science-9645-graphs/)
- [Graphs practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graphs-practice/)
- [Trees revision notes](/resources/oxfordaqa-a-level-computer-science-9645-trees-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.1 Graphs.
