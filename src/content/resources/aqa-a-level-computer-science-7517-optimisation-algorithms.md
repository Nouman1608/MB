---
title: "AQA A-Level Computer Science (7517): Optimisation algorithms"
seoTitle: "AQA A-Level Computer Science Dijkstra Shortest Path Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.6
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "optimisation-algorithms-7517"
description: "Deeper guide to AQA 7517 section 4.3.6 Optimisation algorithms: tracing Dijkstra's shortest path algorithm on a weighted graph and describing its applications."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.3.6 Optimisation algorithms** in AQA A-Level Computer Science (7517). The only content is **4.3.6.1 Dijkstra's shortest path algorithm**. The specification asks you to **understand and be able to trace** the algorithm, and to **be aware of applications** of shortest path algorithms. It adds that students will **not be expected to recall the steps** of Dijkstra's algorithm, so an exam question will print the algorithm or describe it for you. What you must be able to do is follow it accurately on a weighted graph and explain what it achieves.

The wider [fundamentals of algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) summarises section 4.3. This page explains the idea, presents the algorithm, traces it in full on a worked example, and covers applications and common errors. Condensed notes are in the [optimisation algorithms revision notes](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes/), and exam-style questions are in the [optimisation algorithms practice questions](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-practice/).

## What problem does it solve?

An **optimisation** problem asks for the best answer out of many possible ones. In a **weighted graph** each edge has a number attached, its **weight** (or cost), which might be a distance, a time or a price. The **shortest path** between two vertices is the route whose edge weights add up to the smallest total.

This is different from the shortest path in an **unweighted** graph, where a breadth-first search finds the route with the fewest edges (see the [graph-traversal study guide](/resources/aqa-a-level-computer-science-7517-graph-traversal/)). In a weighted graph, the route with the fewest edges is not necessarily the cheapest. Two short roads can be quicker than one long one.

**Dijkstra's algorithm** finds the shortest path from one **start vertex** to every other vertex of the graph. It requires every edge weight to be **zero or positive**.

## The idea

Dijkstra's algorithm builds up a set of vertices whose shortest distance from the start is **known for certain**.

- Every vertex has a **tentative distance**, the best distance found so far. The start is 0 and all others begin at infinity.
- Repeatedly choose the unvisited vertex with the **smallest tentative distance**. That distance cannot be improved, because every other route to it would have to pass through a vertex that is at least as far away, and weights cannot be negative. Mark the vertex as visited.
- From that vertex, look at each unvisited neighbour. If going through the chosen vertex gives a **shorter** distance than the neighbour's current value, update the distance, and record the chosen vertex as the neighbour's **previous** vertex.
- Stop when all vertices are visited (or the target is visited).

The recorded previous vertices let you read the actual route backwards from any vertex to the start.

```
SUBROUTINE Dijkstra(graph, start)
    FOR EACH vertex v IN graph
        distance[v] ← infinity
        previous[v] ← none
        visited[v] ← False
    NEXT
    distance[start] ← 0
    REPEAT
        u ← unvisited vertex with the smallest distance
        visited[u] ← True
        FOR EACH neighbour n of u that is not visited
            newDistance ← distance[u] + weight(u, n)
            IF newDistance < distance[n] THEN
                distance[n] ← newDistance
                previous[n] ← u
            ENDIF
        NEXT
    UNTIL all vertices are visited
ENDSUBROUTINE
```

If two unvisited vertices share the smallest distance, either may be chosen and the final distances are the same. A question will normally say which to take, for example the first in alphabetical order.

## Worked example 1

A weighted, undirected graph has vertices A to F and these edges:

| Edge | Weight |
|---|---|
| A to B | 4 |
| A to C | 2 |
| B to C | 1 |
| B to D | 5 |
| C to D | 8 |
| C to E | 10 |
| D to E | 2 |
| D to F | 6 |
| E to F | 3 |

Find the shortest path from A to F.

**Step by step.** Start with A = 0 and all others infinite (shown ∞).

| Step | Vertex visited | Updates made | A | B | C | D | E | F |
|---|---|---|---|---|---|---|---|---|
| start | none | A set to 0 | 0 | ∞ | ∞ | ∞ | ∞ | ∞ |
| 1 | A (0) | B: 0 + 4 = 4. C: 0 + 2 = 2 | 0 | 4 | 2 | ∞ | ∞ | ∞ |
| 2 | C (2) | B: 2 + 1 = 3 (better than 4). D: 2 + 8 = 10. E: 2 + 10 = 12 | 0 | 3 | 2 | 10 | 12 | ∞ |
| 3 | B (3) | D: 3 + 5 = 8 (better than 10) | 0 | 3 | 2 | 8 | 12 | ∞ |
| 4 | D (8) | E: 8 + 2 = 10 (better than 12). F: 8 + 6 = 14 | 0 | 3 | 2 | 8 | 10 | 14 |
| 5 | E (10) | F: 10 + 3 = 13 (better than 14) | 0 | 3 | 2 | 8 | 10 | 13 |
| 6 | F (13) | none | 0 | 3 | 2 | 8 | 10 | 13 |

Notice the choice at each step. At step 2 the smallest unvisited distance was C (2), not B (4). That is what lets the algorithm discover that A to C to B (total 3) beats the direct A to B (4).

**Reading the route.** The previous vertex of F is E (it gave 13). E's previous is D, D's is B, B's is C and C's is A. Reading backwards gives A, C, B, D, E, F:

A to C (2), C to B (1), B to D (5), D to E (2), E to F (3). Total 2 + 1 + 5 + 2 + 3 = **13**.

The route has five edges. A route with fewer edges, A to B to D to F, costs 4 + 5 + 6 = 15, which is longer. This is the point of the algorithm: fewest edges is not the same as lowest total weight.

## Layout for a trace

Exam questions normally provide a table to complete, with a column for each vertex and a row for each step. Keep these habits:

- Each row shows the **vertex being visited** and its final distance.
- Only values that **change** need rewriting, but make clear which are final.
- When you update a distance, show the sum (distance of visited vertex + edge weight), as in the table above.
- Never update a visited vertex.
- At the end, trace back through the previous vertices to give the route, and quote the total.

## Why it works, and its limits

- **Greedy choice.** Picking the closest unvisited vertex is safe only if there are no negative weights. A negative edge could make a longer-looking route cheaper later, and the algorithm would already have fixed the wrong distance. For graphs with negative weights a different algorithm is needed.
- **Complexity.** The simple version above scans all vertices to find the smallest each time, so the work grows with the square of the number of vertices. Using a priority queue improves this. The specification does not ask for the complexity of Dijkstra's algorithm.
- **One start, all destinations.** The algorithm gives the shortest distance from the start to every other vertex in one run. If only one target matters, it can stop once the target is visited.

## Applications of shortest path algorithms

You need to be aware of applications. Make sure each one is tied to what the weights represent.

- **Route planning and satellite navigation.** Vertices are junctions, edges are road sections and weights are distances or expected journey times. The algorithm finds the quickest or shortest route.
- **Network routing.** Vertices are routers and weights are costs such as delay or link speed. Routing protocols use shortest path calculations to choose how packets travel, so that traffic takes the cheapest path.
- **Robot and game movement.** A map of a game or warehouse is a graph with weights for terrain cost. The algorithm finds the cheapest path for a character or robot.
- **Travel itineraries.** Flights or train connections form a graph with weights of price or travel time.
- **Planning and logistics.** Delivering goods between depots at minimum cost.

For each, say what the vertices, edges and weights represent, and that the algorithm finds the route with the lowest total weight.

## Comparison with other algorithms in this section

| Algorithm | Graph type | What it finds |
|---|---|---|
| Breadth-first search | Unweighted | Path with the fewest edges |
| Depth-first search | Unweighted | A route through the graph, not necessarily the shortest |
| Dijkstra's algorithm | Weighted, non-negative | Lowest total weight from the start to every vertex |

## Common mistakes

- Updating a distance without checking whether the new one is smaller.
- Choosing the next vertex by alphabetical order rather than smallest tentative distance.
- Visiting a vertex before the one with the smallest distance, which gives wrong results.
- Adding the edge weight to the neighbour's distance instead of to the visited vertex's distance.
- Updating vertices that have already been visited.
- Forgetting to record previous vertices, so the route cannot be reconstructed.
- Giving the route's number of edges as the answer when the total weight was asked for.

## Exam technique

- **Trace**: fill the table row by row, writing the arithmetic in the margin if you need it.
- **State the shortest distance** and the **route**, as separate answers.
- **Applications**: link the weights to a real quantity, such as distance or time.
- **Explain why not BFS**: BFS counts edges and ignores their weights.

## More resources on this topic

- [Optimisation algorithms revision notes](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes/)
- [Optimisation algorithms practice questions](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-practice/)
- [Graph-traversal study guide](/resources/aqa-a-level-computer-science-7517-graph-traversal/)
- [Graphs study guide for 4.2.4](/resources/aqa-a-level-computer-science-7517-graphs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.3.6 Optimisation algorithms. Always check the current specification on the AQA website.*
