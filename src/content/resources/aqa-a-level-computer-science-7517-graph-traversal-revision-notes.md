---
title: "AQA A-Level Computer Science (7517): Graph-traversal -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Graph Traversal Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "graph-traversal-7517"
description: "Condensed AQA 7517 section 4.3.1 recall: breadth-first and depth-first search, the queue and stack behind them, trace layouts, applications and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.3.1 Graph-traversal**, AQA A-Level Computer Science (7517): **trace breadth-first and depth-first search** and **describe typical applications of both**. The full algorithms and traces are in the [graph-traversal study guide](/resources/aqa-a-level-computer-science-7517-graph-traversal/); exam-style questions are in the [graph-traversal practice questions](/resources/aqa-a-level-computer-science-7517-graph-traversal-practice/).

## The big idea

A **traversal** visits every vertex reachable from a start vertex, once each, in a systematic order. Graphs can contain **cycles**, so both algorithms keep a **visited** record.

| | Breadth-first search (BFS) | Depth-first search (DFS) |
|---|---|---|
| Idea | Explore layer by layer | Go as deep as possible, then backtrack |
| Data structure | **Queue** (FIFO) | **Stack** (LIFO) or recursion |
| Mark as visited | When **added** to the queue | When **removed** from the stack (iterative) or on entry (recursive) |
| Typical use | Shortest path in an **unweighted** graph | Navigating a **maze** |

## BFS in six lines

1. Mark the start vertex visited and add it to the queue.
2. While the queue is not empty, remove the front vertex and output it.
3. For each neighbour not yet visited: mark it visited and add it to the queue.
4. Repeat from step 2.

The output order is the order of removal, which is also the order of discovery.

## DFS in six lines

1. Push the start vertex.
2. Pop a vertex. If it is already visited, skip it.
3. Otherwise mark it visited and output it.
4. Push each unvisited neighbour (in **reverse** order if you want the first neighbour processed first).
5. Repeat from step 2.
6. Recursive form: visit a vertex, then call DFS on each unvisited neighbour in turn.

## Worked check

Undirected graph with adjacency list: A: B, C, D; B: A, E; C: A, E, F; D: A, F; E: B, C, G; F: C, D, G; G: E, F, H; H: G. Neighbours taken in alphabetical order.

- **BFS from A:** A, B, C, D, E, F, G, H.
- **DFS from A:** A, B, E, C, F, D, G, H.
- **Shortest path A to H** (by parents): H from G, G from E, E from B, B from A. Path A, B, E, G, H: four edges.

## Layout for a BFS trace

| Removed | Queued | Queue (front first) |
|---|---|---|
| A | B, C, D | B, C, D |
| B | E | C, D, E |
| C | F | D, E, F |

Keep a column for the queue contents. Never queue a vertex twice.

## Layout for a DFS trace

| Pop | Action | Stack (top on right) |
|---|---|---|
| A | visit; push D, C, B | D, C, B |
| B | visit; push E | D, C, E |

Skips of already-visited vertices are shown as rows too.

## Why BFS gives the shortest path (unweighted)

All vertices one edge away are processed before any two edges away. The first time a vertex is reached is therefore by a path with the **fewest edges**. Record each vertex's **parent** and read the path backwards from the target.

**Not weighted graphs.** If edges have different costs, fewest edges is not the same as lowest total cost. Use Dijkstra's algorithm (4.3.6).

## Why DFS suits a maze

Junctions are vertices and corridors are edges. DFS follows one corridor to the end and **backtracks** to the last junction with an unexplored corridor, like a walker with a pencil. It only needs to remember the current route.

## Other uses

- Testing whether a graph is **connected** (does a traversal reach every vertex?).
- Listing everything **reachable** from a start vertex.
- Finding a **cycle** (meeting a visited vertex that is not the one you came from).

## Disconnected graphs

A traversal from one start vertex only reaches its own connected part. To cover everything, start again from each unvisited vertex.

## Exam traps

- **Wrong structure**: BFS needs a queue, DFS needs a stack.
- **Visited too late** in BFS, so a vertex is queued twice.
- **Neighbour order** not stated, or not followed.
- **Reverse push** forgotten in iterative DFS.
- **Weighted graph** with BFS used as a shortest-path claim.
- **Trace with no contents column**: you lose the method marks.

## Key terms

| Term | Definition |
|---|---|
| Vertex (node) | A point in a graph |
| Edge (arc) | A connection between two vertices |
| Neighbour | A vertex joined to another by an edge |
| Traversal | Visiting every reachable vertex in a systematic order |
| Breadth-first search | Traversal that visits vertices layer by layer using a queue |
| Depth-first search | Traversal that follows one route as deep as possible, then backtracks, using a stack |
| Backtracking | Returning to the most recent vertex that still has an unvisited neighbour |
| Parent | The vertex from which a vertex was first discovered |
| Cycle | A path that returns to its starting vertex |

## Self-test

1. Which data structure drives BFS?
2. Which data structure drives DFS?
3. Why does a traversal need a visited record?
4. In BFS, when is a vertex marked as visited?
5. State the BFS order from A for the graph: A: B, C; B: A, D; C: A, D; D: B, C (neighbours in alphabetical order).
6. State the DFS order from A for the same graph.
7. Give an application of BFS and explain why it fits.
8. Give an application of DFS and explain why it fits.
9. Why can BFS not be relied on for the cheapest path in a weighted graph?
10. How would you traverse a graph that is not connected?

**Answers**

1. A queue.
2. A stack (or the call stack when recursive).
3. Graphs can contain cycles, so without it a vertex could be processed repeatedly and the algorithm might never end.
4. When it is added to the queue.
5. A, B, C, D.
6. A, B, D, C. (From A to B, then B's unvisited neighbour D, then D's unvisited neighbour C.)
7. Finding the shortest path in an unweighted graph: it reaches vertices in order of the number of edges from the start.
8. Navigating a maze: it follows one route to a dead end, then backtracks to the last junction with an unexplored route.
9. It minimises the number of edges, not the total weight.
10. Repeat the traversal from every vertex that has not yet been visited.

## Related resources

- [Graph-traversal study guide](/resources/aqa-a-level-computer-science-7517-graph-traversal/)
- [Graph-traversal practice questions](/resources/aqa-a-level-computer-science-7517-graph-traversal-practice/)
- [Graphs revision notes for 4.2.4](/resources/aqa-a-level-computer-science-7517-graphs-revision-notes/)
- [Tree-traversal revision notes](/resources/aqa-a-level-computer-science-7517-tree-traversal-revision-notes/)
