---
title: "Edexcel International A Level Mathematics (YMA01): Algorithms on graphs -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths D1 algorithms on graphs: graph terms, Kruskal, Prim with matrices, Dijkstra labelling, route tracing and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for Unit D1, section 2: the minimum spanning tree (minimum connector) problem with Prim's and Kruskal's algorithms, including Prim's algorithm in matrix form and moving between networks and matrices, and Dijkstra's algorithm for the shortest path. For full worked examples, use the [algorithms on graphs study guide](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-on-graphs-edexcel-alevel-maths/).

## Key terms

| Term | Meaning |
|---|---|
| Vertex (node) | A point of a graph |
| Edge (arc) | A line joining two vertices |
| Weight | Number on an arc (length, cost, time) |
| Network | A weighted graph |
| Degree (valency) | Number of arcs at a vertex; odd or even |
| Subgraph | Its vertices and arcs all belong to the original graph |
| Path | Sequence of arcs with no repeated vertex |
| Cycle | Closed path |
| Tree | Connected, with no cycles |
| Spanning tree | Tree containing every vertex of the graph |
| Minimum spanning tree (MST) | Spanning tree of least total weight; a minimum connector |
| Digraph | Graph whose arcs have directions |

**Check:** an MST of n vertices has n − 1 arcs.

## Kruskal's algorithm

```
1  sort arcs by weight, smallest first
2  accept the next arc unless it makes a cycle; then reject it
3  stop at n − 1 accepted arcs
```

Show the accept/reject decision for every arc until the tree is complete.

## Prim's algorithm (network)

```
1  start at the given vertex
2  add the nearest vertex not in the tree, using the shortest arc from ANY tree vertex
3  repeat until all vertices are in
```

No cycle check needed.

## Prim's algorithm (matrix)

```
1  delete the start vertex's row; label its column 1
2  find the smallest undeleted entry in the labelled columns
3  that entry's row is the new vertex: record the arc, delete its row, label its column
4  repeat until every row is deleted
```

Record the order in which arcs are added.

## Matrix to network and back

- A dash means no direct arc.
- Undirected networks give symmetric matrices: use the entries above the leading diagonal to list each arc once.
- Writing a matrix: each arc's weight goes in two cells, (X, Y) and (Y, X).

## Kruskal versus Prim

| | Kruskal | Prim |
|---|---|---|
| Starts with | Shortest arc anywhere | A chosen vertex |
| Tree during the run | May be in separate pieces | Always one connected tree |
| Cycle check | Needed at every step | Never needed |
| Matrix form | Not convenient | Natural |

With all weights different, both give the same MST, but the order of selection differs.

## Dijkstra's algorithm

Each vertex box records: **order of labelling**, **final value**, **working values**.

```
1  start: order 1, final value 0
2  update working values at neighbours of the vertex just labelled:
   final value + arc weight, written only if smaller than the current working value
3  label the smallest working value not yet final
4  repeat until the destination is labelled
```

**Tracing back:** arc XY is on the route when final(X) + weight(XY) = final(Y). Start at the destination and work back to the start.

## Mini example

Network: WX 5, WY 8, XY 2, XZ 7, YZ 3. From W:

```
W: order 1, final 0
X: working 5           -> order 2, final 5
Y: working 8, 7        -> order 3, final 7
Z: working 12, 10      -> order 4, final 10
route to Z: Z from Y (7 + 3 = 10), Y from X (5 + 2 = 7), X from W
shortest route W–X–Y–Z, length 10
```

## Mini example: Kruskal's algorithm

Arcs PQ 2, QR 3, PR 4, RS 5, QS 6. Accept PQ, accept QR, reject PR (cycle PQR), accept RS: 3 arcs for 4 vertices, total 10.

## Exam traps

- Missing rejected arcs in Kruskal's algorithm.
- In Prim's algorithm, choosing only from the last vertex added.
- Matrix Prim: searching rows instead of labelled columns.
- Drawing each arc twice from a symmetric matrix.
- Dijkstra: labelling a vertex permanently before a smaller working value elsewhere.
- Dijkstra: stating the route by picking the shortest arc at each step from the start.
- Forgetting to state the length of the shortest route.

## Self-test

1. Define a tree.
2. How many arcs are in a spanning tree of a graph with 9 vertices?
3. In Kruskal's algorithm, when is an arc rejected?
4. In Prim's algorithm, from which vertices may the next arc start?
5. Why does Prim's algorithm never create a cycle?
6. In matrix Prim, after labelling a column, which row do you delete?
7. What does a dash in a network matrix mean?
8. A symmetric matrix has 14 entries that are numbers (not dashes). How many arcs does the network have?
9. In Dijkstra's algorithm, what three things are recorded at each vertex?
10. How is the shortest route found once the destination is labelled?
11. In the mini example, what is the final value at Y, and why is 8 not used?
12. Give one advantage of Prim's algorithm over Kruskal's algorithm.

**Answers:** 1. A connected graph with no cycles. 2. 8. 3. When it would form a cycle with arcs already accepted. 4. From any vertex already in the tree. 5. Each new arc joins a vertex not yet in the tree, so it cannot close a loop. 6. The row of the vertex just added (each newly added vertex has its row deleted and its column labelled). 7. There is no direct arc between those two vertices. 8. 7, since each arc appears twice. 9. The order of labelling, the final value and the working values. 10. Work back from the destination, using arcs where final(X) + weight = final(Y). 11. 7, because the route W–X–Y (5 + 2) is shorter than the direct arc WY (8). 12. Either: it needs no cycle check, or it can be applied directly to a matrix.
