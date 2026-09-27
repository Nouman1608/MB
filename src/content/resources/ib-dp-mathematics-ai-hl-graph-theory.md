---
title: "IB DP Mathematics: Applications and Interpretation -- Graph theory, adjacency matrices and network algorithms (HL) Study Guide"
seoTitle: "IB Maths AI HL Graph Theory Study Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Graph theory, adjacency matrices and network algorithms (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 3.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-16"
description: "IB DP Maths AI HL graph theory study guide: graph terms, adjacency and transition matrices, MSTs, Chinese postman and TSP, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the graph theory unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.14–3.16, and all of it is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, condense it with the [graph theory revision notes](/resources/ib-dp-mathematics-ai-hl-graph-theory-revision-notes/) and test yourself on the [graph theory practice questions](/resources/ib-dp-mathematics-ai-hl-graph-theory-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where the unit sits. For the SL geometry content in the same topic, see [AI geometry and trigonometry](/resources/ib-dp-mathematics-ai-geometry-trigonometry/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 3.14 | Use graph vocabulary; find degrees; recognise simple, complete, weighted and directed graphs, subgraphs and trees; model real structures as graphs; know "connected" and "strongly connected" | HL only |
| 3.15 | Write adjacency matrices and weighted adjacency tables; count walks of length k (or up to k) with Aᵏ; build the transition matrix of a strongly connected graph (PageRank) | HL only |
| 3.16 | Define walks, trails, paths, circuits and cycles; decide whether Eulerian trails or circuits exist; Hamiltonian paths and cycles; Kruskal's and Prim's algorithms; Chinese postman; travelling salesman bounds | HL only |

## 3.14 Graphs and their vocabulary

A **graph** is a set of **vertices** joined by **edges**. Two vertices are **adjacent** if an edge joins them. Two edges are **adjacent** if they share a vertex. The **degree** of a vertex is the number of edges meeting it (a loop counts 2).

Each edge adds 2 to the total degree, so the sum of the degrees is twice the number of edges. It follows that the number of odd vertices is always even.

- **Simple graph:** no loops and no multiple edges between the same pair of vertices.
- **Complete graph Kₙ:** a simple graph with every pair of its n vertices joined. It has n(n − 1)/2 edges.
- **Weighted graph:** each edge carries a number (distance, cost, time).
- **Directed graph:** each edge has a direction. A vertex has an **in degree** (edges arriving) and an **out degree** (edges leaving).
- **Subgraph:** a graph made from some of the vertices and edges of another.
- **Tree:** a connected graph with no cycles. A tree with n vertices has n − 1 edges.
- **Connected:** there is a route between every pair of vertices. A directed graph is **strongly connected** if you can travel from every vertex to every other vertex following the arrows.

You should be able to turn a real structure into a graph: towns become vertices and roads become weighted edges; web pages become vertices and links become directed edges.

### Worked example 1

A directed graph has edges P→Q, Q→P, Q→R, R→P, R→S and S→Q. Find the in and out degree of each vertex and decide whether the graph is strongly connected.

```
Vertex   in   out
P        2    1
Q        2    2
R        1    2
S        1    1
Totals   6    6   (= number of edges)
```

Route P→Q→R→S reaches every vertex from P. From S: S→Q→P, and Q→R. From R: R→P, R→S, then Q from P. From Q: Q→R→S, Q→P. Every vertex can reach every other, so the graph is **strongly connected**.

## 3.15 Adjacency matrices, walks and transition matrices

The **adjacency matrix** A has entry aᵢⱼ equal to the number of edges from vertex i to vertex j. For an undirected graph A is symmetric. For a directed graph, row sums give out degrees and column sums give in degrees.

A **walk** is any sequence of edges where each starts where the last ended. The key result from the guide:

**The (i, j)th entry of Aᵏ gives the number of walks of length k from i to j.**

For walks of length up to k, add the matrices: A + A² + … + Aᵏ.

### Worked example 2

An undirected graph has edges AB, AC, BC, BD and CD. Find the number of walks of length 3 from A to D, and of length at most 3.

```
      A B C D                   A B C D
A = [ 0 1 1 0 ]          A³ = [ 2 5 5 2 ]
    [ 1 0 1 1 ]               [ 5 4 5 5 ]
    [ 1 1 0 1 ]               [ 5 5 4 5 ]
    [ 0 1 1 0 ]               [ 2 5 5 2 ]
```

Entry (A, D) of A³ is **2** (A–B–C–D and A–C–B–D). Entries (A, D) of A, A² and A³ are 0, 2 and 2, so there are **4** walks of length at most 3.

A **weighted adjacency table** holds the edge weights instead of 1s, with a dash where there is no edge. You need one for Prim's matrix method below.

### Transition matrices and PageRank

For a random walk on a strongly connected graph, the **transition matrix** T has entry Tᵢⱼ = probability of moving from vertex j to vertex i. Each column shares probability equally among the edges leaving that vertex, so every column sums to 1. This matches the Markov chain convention sₙ = Tⁿs₀ (AHL 4.19).

The steady-state vector s satisfies Ts = s with entries summing to 1. In Google's **PageRank** idea, pages are vertices, links are directed edges and pages are ranked by their steady-state probabilities.

### Worked example 3

Use the directed graph from worked example 1. Out degrees: P 1, Q 2, R 2, S 1.

```
        from P  Q    R    S
to P   [ 0    1/2  1/2   0 ]
to Q   [ 1     0    0    1 ]
to R   [ 0    1/2   0    0 ]
to S   [ 0     0   1/2   0 ]
```

Solving Ts = s with p + q + r + s = 1 (or raising T to a high power on your GDC) gives s = (0.3, 0.4, 0.2, 0.1). The ranking is **Q, P, R, S**.

## 3.16 Walks, trails, paths and the classical problems

| Term | Rule |
|---|---|
| Walk | any sequence of adjacent edges |
| Trail | walk with no repeated edge |
| Path | walk with no repeated vertex |
| Circuit | trail that starts and ends at the same vertex |
| Cycle | circuit with no repeated vertex except the start/end |

**Eulerian trail** uses every edge exactly once. **Eulerian circuit** does so and returns to the start. For a connected graph:

- all vertices even → an Eulerian circuit exists;
- exactly two odd vertices → an Eulerian trail exists, starting at one odd vertex and ending at the other;
- otherwise → neither exists.

A **Hamiltonian path** visits every vertex exactly once; a **Hamiltonian cycle** does so and returns to the start. There is no simple degree test, so you show one exists by writing it down.

### Minimum spanning trees

A **spanning tree** is a subgraph that is a tree and includes every vertex. A **minimum spanning tree (MST)** has the least total weight.

**Kruskal's algorithm:** list edges in increasing weight. Add each edge unless it makes a cycle. Stop at n − 1 edges.

**Prim's algorithm:** start at any vertex. Repeatedly add the cheapest edge joining a vertex in the tree to one outside it.

**Prim's matrix method:** delete the start vertex's row and label its column. Find the smallest undeleted entry in the labelled columns; that entry is the next edge and its row is the new vertex. Delete that row, label that column, and repeat.

### Worked example 4

Weighted adjacency table:

| | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | – | 7 | 4 | – | – | – |
| B | 7 | – | 5 | 9 | – | 12 |
| C | 4 | 5 | – | 8 | 6 | – |
| D | – | 9 | 8 | – | 3 | 10 |
| E | – | – | 6 | 3 | – | 11 |
| F | – | 12 | – | 10 | 11 | – |

Kruskal: DE 3 ✓, AC 4 ✓, BC 5 ✓, CE 6 ✓, AB 7 ✗ (cycle A–B–C), CD 8 ✗, BD 9 ✗, DF 10 ✓. Five edges for six vertices, weight **28**.

Prim's matrix method from A: column A gives AC 4. Columns A, C give CB 5. Columns A, B, C give CE 6. Then ED 3, then DF 10. Same tree, weight **28**.

### Chinese postman problem

Find the shortest closed route that travels along every edge at least once.

1. Add up all edge weights.
2. List the odd vertices.
3. Two odd vertices: add the shortest path between them. Four odd vertices: list the three ways to pair them, find the shortest-path total for each pairing, and add the least.
4. Route length = total weight + extra.

**Why it works:** a closed route that uses each edge once needs every vertex to be even, because each visit enters and leaves. Repeating the shortest paths between paired odd vertices makes every degree even at least cost, so an Eulerian circuit then exists.

### Worked example 5

Edges: AB 5, AC 8, AD 6, BC 4, BE 7, CD 3, CE 9, DE 10. Total = **52**. Degrees: A 3, B 3, C 4, D 3, E 3, so the odd vertices are A, B, D, E.

```
AB + DE = 5 + 10       = 15
AD + BE = 6 + 7        = 13   ← least
AE + BD = 12 + 7       = 19   (A–B–E, B–C–D)
```

Repeat AD and BE. Shortest route = 52 + 13 = **65**.

### Travelling salesman problem (TSP)

Find the Hamiltonian cycle of least weight in a weighted complete graph. If the network is not complete, or a direct edge is longer than an indirect route, first complete a **table of least distances**.

- **Nearest neighbour algorithm (upper bound):** from a start vertex, go to the nearest unvisited vertex each time, then return to the start. The total is an upper bound.
- **Deleted vertex algorithm (lower bound):** delete one vertex. Find the MST of what remains. Add the two shortest edges from the deleted vertex. The total is a lower bound.

The best interval uses the smallest upper bound and the largest lower bound found.

### Worked example 6

Least distances between five towns:

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 12 | 9 | 14 | 10 |
| B | 12 | – | 8 | 11 | 15 |
| C | 9 | 8 | – | 7 | 13 |
| D | 14 | 11 | 7 | – | 6 |
| E | 10 | 15 | 13 | 6 | – |

Nearest neighbour from A: A–C 9, C–D 7, D–E 6, E–B 15, B–A 12. Upper bound = **49**.

Delete A. MST of B, C, D, E: DE 6, CD 7, BC 8 = 21. Two shortest edges from A: 9 and 10. Lower bound = 21 + 19 = **40**.

So 40 ≤ optimal length ≤ 49. Starting the nearest neighbour at B gives 43, a better upper bound.

## Using your GDC

A GDC is required on all three HL papers. Use it for matrix powers (Aᵏ, and sums of powers) and for the steady state of a transition matrix, either by a high power of T or by solving the linear system. The algorithms themselves are carried out by hand, and marks go to the order of edges chosen, so write that order down.

## Common errors

- Reading a transition matrix by rows. In the IB convention, columns are "from" and each column sums to 1.
- Using A³ when the question asks for walks of length *at most* 3.
- Stopping Kruskal's algorithm before n − 1 edges, or adding an edge that closes a cycle.
- In the Chinese postman problem, adding the direct edge between odd vertices when a shorter indirect path exists.
- Checking only one pairing when there are four odd vertices; there are always three.
- Calling a nearest neighbour total the "answer" to the TSP. It is only an upper bound.
- Forgetting to convert to a table of least distances before running TSP algorithms.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 — sections AHL 3.14, 3.15 and 3.16.
