---
title: "OxfordAQA A-Level Computer Science (9645): Graph algorithms"
seoTitle: "OxfordAQA A-Level CS 9645 Graph Algorithms Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11 – Advanced algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 11.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-algorithms"
  - qualification: "a-level"
    topic: "advanced-algorithms"
    subtopic: "graph-algorithms-oxfordaqa-alevel-cs"
description: "OxfordAQA 9645 sub-topic 3.11.1 in depth: tracing and coding breadth-first and depth-first search, applications, and Dijkstra's shortest path algorithm with traces."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers sub-topic **3.11.1 Graph algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1, in topic 3.11 Advanced algorithms (A-level). The specification asks you to be able to **trace breadth-first and depth-first search** algorithms and describe typical applications of both (breadth-first: shortest path for an unweighted graph; depth-first: navigating a maze); to **implement** breadth-first and depth-first search in program code; to understand and be able to **trace Dijkstra's shortest path algorithm**; and to be aware of applications of the shortest path algorithm. Students will not be expected to recall the steps in Dijkstra's algorithm, or write code for it, unless the algorithm is given to them on the question paper.

For quick recall use the [graph algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-revision-notes/), and test yourself with the [graph algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-practice/). The [advanced algorithms study guide](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms/) covers all of topic 3.11. You need the [graphs study guide](/resources/oxfordaqa-a-level-computer-science-9645-graphs/) first, for adjacency lists and weighted graphs, and the [priority queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues/) is relevant to Dijkstra's algorithm. Code is Python, and every trace in this guide was produced by running the code.

## Searching a graph

A **graph traversal** visits the vertices of a graph one at a time, following edges, so that each reachable vertex is visited **once**. Because a graph can contain cycles, an algorithm must **remember which vertices it has visited**, or it would go round in circles. The two standard traversals differ in the order in which they visit vertices.

The graph used for the examples is undirected and unweighted. It is stored as an adjacency list, with each list in alphabetical order.

```
A: B, C
B: A, D, E
C: A, F
D: B, H
E: B, G
F: C, G
G: E, F
H: D
```

```python
G = {"A": ["B", "C"], "B": ["A", "D", "E"], "C": ["A", "F"],
     "D": ["B", "H"], "E": ["B", "G"], "F": ["C", "G"],
     "G": ["E", "F"], "H": ["D"]}
```

## Breadth-first search (BFS)

**Idea:** visit the start vertex, then all of its neighbours, then all of **their** unvisited neighbours, and so on. The search spreads outward in **layers**, like ripples. It uses a **queue**: vertices are processed in the order in which they were discovered.

**Algorithm:**

1. Mark the start vertex as visited and add it to the queue.
2. While the queue is not empty: remove the vertex at the front; for each neighbour that has not been visited, mark it visited and add it to the queue.

```python
from collections import deque

def bfs(g, start):
    visited = [start]
    queue = deque([start])
    while queue:
        v = queue.popleft()
        for n in g[v]:
            if n not in visited:
                visited.append(n)
                queue.append(n)
    return visited
```

`bfs(G, "A")` returns `['A', 'B', 'C', 'D', 'E', 'F', 'H', 'G']`.

### Tracing BFS

| Vertex removed | Newly visited | Queue afterwards |
|---|---|---|
| (start) | A | A |
| A | B, C | B, C |
| B | D, E | C, D, E |
| C | F | D, E, F |
| D | H | E, F, H |
| E | G | F, H, G |
| F | none | H, G |
| H | none | G |
| G | none | empty |

The visiting order is A, B, C, D, E, F, H, G. Notice the layers: A is at distance 0, B and C at distance 1, D, E and F at distance 2, and H and G at distance 3. BFS finds all vertices at a distance *k* before any at *k* + 1.

### Application: shortest path in an unweighted graph

Because BFS reaches vertices in order of the **number of edges** from the start, the first time it reaches a vertex is by a path with the fewest edges. If each vertex remembers the vertex it was discovered from, the shortest path can be read backwards. Here one shortest path from A to G is A, B, E, G (3 edges) and one shortest path from A to H is A, B, D, H (3 edges). BFS gives a shortest path only when every edge counts the same. For a weighted graph, Dijkstra's algorithm is needed. Other uses include finding the fewest links between two people in a social network.

## Depth-first search (DFS)

**Idea:** go as **deep** as possible along one path before trying alternatives. From the current vertex, move to an unvisited neighbour, and keep going. When a vertex has no unvisited neighbours, **backtrack** to the previous vertex and try its next neighbour. DFS uses a **stack**, which can be the program's call stack in a recursive version.

### Recursive version

```python
def dfs(g, v, visited=None):
    if visited is None:
        visited = []
    visited.append(v)
    for n in g[v]:
        if n not in visited:
            dfs(g, n, visited)
    return visited
```

`dfs(G, "A")` returns `['A', 'B', 'D', 'H', 'E', 'G', 'F', 'C']`.

### Explicit stack version

```python
def dfs_stack(g, start):
    visited = []
    stack = [start]
    while stack:
        v = stack.pop()
        if v not in visited:
            visited.append(v)
            for n in reversed(g[v]):
                if n not in visited:
                    stack.append(n)
    return visited
```

This also returns `['A', 'B', 'D', 'H', 'E', 'G', 'F', 'C']`. The neighbours are pushed in reverse order so that the first neighbour is on top of the stack and is visited first. A vertex can be pushed more than once, so the `if v not in visited` test after popping is needed.

### Tracing DFS

| Step | Action | Visited so far |
|---|---|---|
| 1 | Visit A | A |
| 2 | A's first neighbour B is unvisited; visit B | A, B |
| 3 | B's neighbours A (visited), D (unvisited); visit D | A, B, D |
| 4 | D's neighbours B (visited), H; visit H | A, B, D, H |
| 5 | H has only D, visited: dead end, **backtrack** to D, then B | A, B, D, H |
| 6 | B's next neighbour E is unvisited; visit E | A, B, D, H, E |
| 7 | E's neighbour G is unvisited; visit G | A, B, D, H, E, G |
| 8 | G's neighbours E (visited), F; visit F | A, B, D, H, E, G, F |
| 9 | F's neighbour C is unvisited; visit C | A, B, D, H, E, G, F, C |
| 10 | C's neighbours A and F are visited; backtrack all the way to A. Finished | (all eight) |

The visiting order is A, B, D, H, E, G, F, C. It went deep (A to B to D to H) before trying alternatives, and C, which is a direct neighbour of A, was the **last** vertex visited. That is the clearest difference from BFS.

### Application: navigating a maze

Treat each junction as a vertex and each passage as an edge. A DFS follows one passage as far as it goes. At a dead end it backtracks to the last junction with an unexplored passage. This is exactly how a person explores a maze, and it reaches the exit if the exit is reachable. DFS is also used to check whether a graph is connected and to find cycles.

## BFS or DFS?

| Feature | Breadth-first | Depth-first |
|---|---|---|
| Structure used | Queue | Stack (or recursion) |
| Visits | Layer by layer | One path as deep as possible, then backtracks |
| Typical use | Shortest path in an unweighted graph | Maze navigation, exploring all possibilities |
| Order from A in the example | A, B, C, D, E, F, H, G | A, B, D, H, E, G, F, C |

## Dijkstra's shortest path algorithm

For a **weighted** graph, the path with the fewest edges is not necessarily the cheapest. **Dijkstra's algorithm** finds the shortest (lowest total weight) path from one start vertex to every other vertex. The specification says you must be able to trace it, but you will not be asked to recall it or code it unless it is printed on the paper. These are the steps.

1. Give every vertex a **distance**: 0 for the start vertex and infinity for all others. No vertex is yet *finished*.
2. Choose the **unfinished vertex with the smallest distance**. Mark it finished. Its distance is now final.
3. For each unfinished neighbour of this vertex, calculate the distance **through** this vertex (the vertex's distance plus the edge weight). If it is smaller than the neighbour's current distance, replace it, and note that the neighbour's best route comes from this vertex.
4. Repeat from step 2 until every vertex is finished (or the target vertex is finished).

**Worked example.** The weighted undirected graph has these edges: A-B 4, A-C 2, B-C 1, B-D 5, C-D 8, C-E 10, D-E 2, D-F 6 and E-F 3. The start vertex is A.

| Finished vertex | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| start | 0 | ∞ | ∞ | ∞ | ∞ | ∞ |
| A | **0** | 4 | 2 | ∞ | ∞ | ∞ |
| C (2) | 0 | 3 | **2** | 10 | 12 | ∞ |
| B (3) | 0 | **3** | 2 | 8 | 12 | ∞ |
| D (8) | 0 | 3 | 2 | **8** | 10 | 14 |
| E (10) | 0 | 3 | 2 | 8 | **10** | 13 |
| F (13) | 0 | 3 | 2 | 8 | 10 | **13** |

Explanation of key rows:

- After A is finished, B = 4 and C = 2.
- C has the smallest unfinished distance (2). Through C, B costs 2 + 1 = 3, which beats 4, so B improves to 3. D becomes 2 + 8 = 10 and E becomes 2 + 10 = 12.
- B (3) is next. Through B, D costs 3 + 5 = 8, which beats 10.
- D (8) is next. Through D, E costs 8 + 2 = 10, which beats 12, and F costs 8 + 6 = 14.
- E (10) is next. Through E, F costs 10 + 3 = 13, which beats 14.

The shortest distances from A are B 3, C 2, D 8, E 10 and F 13. To read the **route** to F, follow the "came from" links backwards: F came from E, E from D, D from B, B from C and C from A. The shortest path is **A, C, B, D, E, F**, with a cost of 2 + 1 + 5 + 2 + 3 = 13. Notice that the direct-looking edge A-B (4) is not on the best route, which goes through C.

### Applications of shortest path algorithms

- **Satellite navigation and route planners:** towns are vertices and roads are edges weighted by distance or journey time.
- **Network routing:** routers send data along the lowest-cost path to its destination.
- **Delivery and logistics planning.**
- **Flight and public transport journey planning,** where weights are times or costs.

Dijkstra's algorithm needs the next vertex to be the unfinished one with the smallest distance. Holding the unfinished vertices in a **priority queue**, with distance as the priority, delivers it directly.

## Exam technique

- **Show every step of a trace.** For BFS, show the queue. For DFS, show the stack or the backtracking. For Dijkstra, show the whole table.
- **Visit neighbours in the order the question states** (often alphabetical), as the order changes the result.
- **Record visited vertices** so that none is visited twice.
- **Name the structure:** BFS uses a queue and DFS uses a stack.
- **For Dijkstra, circle or mark the final distance** of each vertex as it is finished, and give the route as well as the distance if asked.
- **Give an application with a reason:** "BFS finds the shortest path in an unweighted graph because it reaches vertices in order of their number of edges from the start."

## Common mistakes

- Using a stack for BFS or a queue for DFS.
- Visiting a vertex twice.
- Using BFS to find the cheapest path in a weighted graph.
- Forgetting to update a distance when a shorter route is found.
- Finishing a vertex that does not have the smallest distance of the unfinished vertices.
- Giving the distance but not the route when the route is asked for.

## More on this topic

- [Graph algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-revision-notes/)
- [Graph algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-practice/)
- [Advanced algorithms study guide](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.11.1 Graph algorithms.
