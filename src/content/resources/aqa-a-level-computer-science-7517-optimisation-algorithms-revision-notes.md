---
title: "AQA A-Level Computer Science (7517): Optimisation algorithms -- Revision Notes"
seoTitle: "AQA A-Level Computer Science Dijkstra Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.3.6 recall: Dijkstra's shortest path algorithm, how to lay out a trace, reading the route and its applications, with a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Condensed recall for **4.3.6 Optimisation algorithms**, AQA A-Level Computer Science (7517): **understand and trace Dijkstra's shortest path algorithm** and **be aware of applications** of shortest path algorithms. You are **not expected to recall the steps**; the exam will give them. A full worked trace is in the [optimisation algorithms study guide](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms/); exam-style questions are in the [optimisation algorithms practice questions](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-practice/).

## The problem

Given a **weighted graph** (each edge has a cost), find the route from a **start vertex** to each other vertex with the **lowest total weight**. This is an **optimisation** problem.

- Unweighted graph: breadth-first search gives the fewest edges.
- Weighted graph: fewest edges is **not** necessarily cheapest, so use Dijkstra.
- Weights must be **zero or positive**.

## The algorithm in plain steps

1. Give the start vertex distance **0** and every other vertex **infinity**. No vertex is visited. No vertex has a previous vertex.
2. Choose the **unvisited vertex with the smallest distance**. Mark it **visited**; its distance is now final.
3. For each **unvisited neighbour**: calculate **distance of the chosen vertex + edge weight**. If this is **smaller** than the neighbour's current distance, replace it and record the chosen vertex as the neighbour's **previous** vertex.
4. Repeat from step 2 until every vertex (or the target) is visited.
5. To find a route, follow **previous** pointers back from the target to the start, then reverse the list.

## Layout for a trace

| Step | Visited | A | B | C | D | E | F |
|---|---|---|---|---|---|---|---|
| start | none | 0 | ∞ | ∞ | ∞ | ∞ | ∞ |
| 1 | A | 0 | 4 | 2 | ∞ | ∞ | ∞ |
| 2 | C | 0 | 3 | 2 | 10 | 12 | ∞ |
| 3 | B | 0 | 3 | 2 | 8 | 12 | ∞ |
| 4 | D | 0 | 3 | 2 | 8 | 10 | 14 |
| 5 | E | 0 | 3 | 2 | 8 | 10 | 13 |
| 6 | F | 0 | 3 | 2 | 8 | 10 | 13 |

This is for the graph with edges A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6, E-F 3. The shortest distance from A to F is **13**. The previous vertices are F from E, E from D, D from B, B from C, C from A, so the route is **A, C, B, D, E, F**.

**Why it beats the fewest-edges route:** A, B, D, F has only three edges but costs 4 + 5 + 6 = 15.

## Rules to follow while tracing

- Pick the next vertex by **smallest tentative distance**, not by name or position.
- Only update a distance if the new total is **strictly smaller**.
- **Never update a visited vertex.**
- Add the edge weight to the **visited vertex's distance**, not to the neighbour's.
- If two vertices tie, use the rule in the question (for example alphabetical order). The final distances do not change.
- Write the arithmetic, for example `3 + 5 = 8`.

## Why choosing the smallest distance is safe

Any other route to that vertex must pass through a vertex that is at least as far from the start. Because no weight is negative, going further cannot make the total smaller. So the smallest tentative distance is already the true shortest distance. With a **negative** weight this argument fails.

## Applications

| Application | Vertices | Weights |
|---|---|---|
| Satellite navigation | Junctions | Distance or journey time |
| Network routing | Routers | Delay, cost or link speed |
| Robot or game movement | Map positions | Terrain cost or distance |
| Travel planning | Stations or airports | Fare or travel time |
| Delivery planning | Depots and customers | Distance or cost |

Always say what the weights represent and that the algorithm finds the route with the **lowest total weight**.

## What the algorithm gives you

- The shortest distance from the start to **every** other vertex in one run.
- The route to each vertex, if previous vertices are recorded.
- It can stop early once the target has been visited.

## Exam traps

- **Wrong vertex chosen next**: by name, not by smallest distance.
- **Wrong sum**: adding the weight to the neighbour's distance.
- **Updating visited vertices.**
- **Distance without route**, or route without distance: give both if asked.
- **Counting edges** instead of totalling weights.
- **Using BFS** for a weighted graph and claiming it is shortest.

## Key terms

| Term | Definition |
|---|---|
| Weighted graph | A graph in which each edge has a numerical cost |
| Weight | The cost attached to an edge, such as distance or time |
| Shortest path | The route with the smallest total weight |
| Tentative distance | The best distance found so far for a vertex |
| Previous vertex | The vertex from which the best known route reaches a vertex |
| Optimisation | Finding the best solution among many possible solutions |
| Dijkstra's algorithm | An algorithm that finds the shortest path from one vertex to all others in a graph with non-negative weights |

## Self-test

1. What does Dijkstra's algorithm find?
2. What distance does the start vertex begin with?
3. What distance does every other vertex begin with?
4. How is the next vertex to visit chosen?
5. What condition must be true before a distance is updated?
6. Why can Dijkstra's algorithm fail with a negative weight?
7. Edges: S-A 3, S-B 5, A-B 1. What is the shortest distance from S to B, and by what route?
8. Why is breadth-first search not suitable for finding the cheapest route in a weighted graph?
9. Name two applications of shortest path algorithms.
10. How do you recover the route once the algorithm has finished?

**Answers**

1. The shortest (lowest total weight) path from a start vertex to every other vertex.
2. 0.
3. Infinity.
4. It is the unvisited vertex with the smallest tentative distance.
5. The new distance (visited vertex's distance plus the edge weight) must be smaller than the current distance.
6. A negative edge could make a longer-looking route cheaper later, after a vertex's distance has already been fixed.
7. 4, by S to A to B (3 + 1 = 4, which is less than the direct 5).
8. It counts edges and ignores their weights.
9. Any two: satellite navigation; network routing; robot or game path finding; travel or delivery planning.
10. Follow the previous-vertex records back from the target to the start and reverse the list.

## Related resources

- [Optimisation algorithms study guide](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms/)
- [Optimisation algorithms practice questions](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-practice/)
- [Graph-traversal revision notes](/resources/aqa-a-level-computer-science-7517-graph-traversal-revision-notes/)
- [Graphs revision notes for 4.2.4](/resources/aqa-a-level-computer-science-7517-graphs-revision-notes/)
