---
title: "Edexcel International A Level Mathematics (YMA01): Algorithms on graphs"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit D1: Decision Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-on-graphs-edexcel-alevel-maths"
description: "Edexcel IAL Maths D1 algorithms on graphs: Kruskal's and Prim's algorithms, Prim in matrix form, and Dijkstra's algorithm with labelling and route tracing."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2 of **Unit D1: Decision Mathematics 1** in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3: "The minimum spanning tree (minimum connector) problem. Prim's and Kruskal's algorithm" (2.1) and "Dijkstra's algorithm for finding the shortest path" (2.2). The guidance for 2.1 says "Matrix representation for Prim's algorithm is expected" and that "drawing a network from a given matrix and writing down the matrix associated with a network will be involved".

The broader D1 page on [sorting, packing, spanning trees and Dijkstra](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum/) shows one run of each algorithm. This page uses a larger network so you can compare the two spanning tree algorithms on the same problem, sets out exactly what to record for Dijkstra's algorithm, and covers the reasoning questions that follow a run (why an arc is rejected, how a route is traced back, what changes if an arc is altered). The [algorithms on graphs revision notes](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-on-graphs-edexcel-alevel-maths-revision-notes/) condense it, and the [algorithms on graphs practice set](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-on-graphs-edexcel-alevel-maths-practice/) tests it.

## The vocabulary from the D1 glossary

| Term | Meaning |
|---|---|
| Graph | Vertices (nodes) joined by edges (arcs) |
| Network | A graph with a weight on each edge |
| Degree (valency) | Number of edges meeting at a vertex |
| Path | Sequence of edges where no vertex appears more than once |
| Cycle | A closed path |
| Connected graph | Every pair of vertices is joined by a path |
| Tree | A connected graph with no cycles |
| Spanning tree | A subgraph that includes every vertex and is a tree |
| Minimum spanning tree | A spanning tree of least total weight (also called a minimum connector) |
| Complete graph | Every vertex joined to every other vertex |

A spanning tree of a connected graph with n vertices always has **n − 1 edges**: a quick check at the end of either spanning tree algorithm.

## The network used in this guide

The network has seven vertices and twelve arcs:

```
AB 7   AC 5   AD 13   BC 6   BE 8   CD 4
CE 11  CF 12  DF 10   EF 3   EG 9   FG 14
```

## Kruskal's algorithm

1. List the arcs in increasing order of weight.
2. Take the arcs in turn. Accept an arc if it does not form a cycle with the arcs already accepted; otherwise reject it.
3. Stop when n − 1 arcs have been accepted.

## Worked example 1: Kruskal's algorithm

```
EF 3   accept
CD 4   accept
AC 5   accept
BC 6   accept
AB 7   reject  (A–C–B already joined: cycle ABC)
BE 8   accept
EG 9   accept  -> 6 arcs for 7 vertices, stop
```

Minimum spanning tree: EF, CD, AC, BC, BE, EG, of total weight **35**.

Examiners want every arc considered in order, with the word "reject" for those that would form a cycle, up to the point where the tree is complete. Naming the cycle is good practice and is sometimes required.

## Prim's algorithm

1. Choose a starting vertex.
2. Join the vertex not yet in the tree that is nearest to **any** vertex already in the tree, using the shortest such arc.
3. Repeat until every vertex is included.

## Worked example 2: Prim's algorithm on the same network, starting at A

```
tree {A}:            nearest is C (AC 5)
tree {A, C}:         nearest is D (CD 4)
tree {A, C, D}:      nearest is B (CB 6)
tree {A, B, C, D}:   nearest is E (BE 8)
add E:               nearest is F (EF 3)
add F:               nearest is G (EG 9)
```

Order of arcs: AC, CD, CB, BE, EF, EG, total **35**. The tree is the same as Kruskal's, because all the weights are different, but the order in which arcs are added is different. A question asking for "the order in which you selected the arcs" is testing exactly this.

Unlike Kruskal's algorithm, Prim's never needs a cycle check: joining a new vertex can never create one.

## Prim's algorithm in matrix form

This is the version the specification expects you to use with a table.

1. Choose a starting vertex; delete its row and number its column 1.
2. Circle the smallest undeleted entry in the numbered columns. The row of that entry gives the new vertex and the arc.
3. Delete the new vertex's row and number its column with the next number.
4. Repeat until every row is deleted.

## Worked example 3: Prim's algorithm from a matrix

```
      P    Q    R    S    T
P     –   12    8    –   15
Q    12    –    7   10    –
R     8    7    –   11    9
S     –   10   11    –    6
T    15    –    9    6    –
```

Start at P: delete row P, label column P "1".

```
column P: smallest undeleted entry is 8 in row R      -> arc PR; delete row R, label column R "2"
columns P, R: smallest is 7 (row Q, column R)          -> arc RQ; delete row Q, label column Q "3"
columns P, R, Q: smallest is 9 (row T, column R)       -> arc RT; delete row T, label column T "4"
columns P, R, Q, T: smallest is 6 (row S, column T)    -> arc TS; all rows deleted
```

Minimum spanning tree: PR, RQ, RT, TS, total weight **30**.

**Matrix and network.** A dash means there is no direct arc. For an undirected network the matrix is symmetric about the leading diagonal, so to draw the network, read only the entries above the diagonal: this matrix has eight arcs (PQ, PR, PT, QR, QS, RS, RT, ST). To write a matrix from a network, fill each arc's weight in two places.

## Dijkstra's algorithm

Dijkstra's algorithm finds the shortest route from a start vertex to every other vertex. At each vertex, record:

- the **order of labelling** (1 for the start, 2 for the next, and so on);
- the **final value**, the shortest distance from the start;
- the **working values**, every temporary distance written there, in order.

The method:

1. Give the start vertex order 1 and final value 0.
2. For every vertex directly joined to the vertex just labelled and not yet finally labelled, write a working value: the just-labelled final value plus the arc weight. Write it only if it is smaller than the current working value there.
3. Choose the vertex with the smallest working value that is not yet finally labelled, and give it the next order number and that value as its final value.
4. Repeat until the destination has a final value.

## Worked example 4: shortest route from A to G

| Vertex | Order | Final value | Working values |
|---|---|---|---|
| A | 1 | 0 | |
| C | 2 | 5 | 5 |
| B | 3 | 7 | 7 |
| D | 4 | 9 | 13, 9 |
| E | 5 | 15 | 16, 15 |
| F | 6 | 17 | 17 |
| G | 7 | 24 | 24 |

From A: B 7, C 5, D 13. C is smallest, so C is labelled 2 with value 5. From C: D 5 + 4 = 9 (replaces 13), E 5 + 11 = 16, F 5 + 12 = 17 (B's 5 + 6 = 11 is not better than 7, so it is not written). B is labelled 3 with 7; from B, E 7 + 8 = 15 replaces 16. D is labelled 4 with 9; from D, F 9 + 10 = 19 is not better. E is labelled 5 with 15; E to F gives 18, not better; E to G gives 24. F is labelled 6 with 17; F to G gives 31, not better. G is labelled 7 with 24.

**Tracing the route back.** Work backwards from G: an arc XY is on the route if final(X) + weight(XY) = final(Y). G: 15 + 9 = 24, so from E. E: 7 + 8 = 15, so from B. B: 0 + 7 = 7, so from A. The shortest route is **A–B–E–G, length 24**.

Some versions of the method record every working value, including those that are not improvements. Follow the convention your teacher uses; either way, the order of labelling and the final values must be correct.

## Common mistakes

- In Kruskal's algorithm, not listing the rejected arcs, or stopping before n − 1 arcs.
- In Prim's algorithm, only looking at arcs from the most recently added vertex.
- In matrix Prim, reading the smallest entry in a row instead of in the labelled columns.
- In Dijkstra's algorithm, giving a vertex its final label before every smaller working value has been labelled.
- Tracing the route forwards by choosing the shortest arc at each step, which is not the same as the shortest route.
- Reading both halves of a symmetric matrix and drawing each arc twice.

## Exam technique

- **"Use Kruskal's algorithm"**: list arcs in order, with accept or reject for each.
- **"Use Prim's algorithm, starting at"**: state the order in which arcs are added.
- **"Show your working"** in Dijkstra: fill the order, final value and working values at every vertex reached.
- **"State the shortest route"**: give the route as a sequence of vertices and its length.
- **"Explain how you determined"** the route: quote the check final(X) + weight = final(Y).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit D1, section 2 and the D1 glossary —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
