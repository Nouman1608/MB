---
title: "OxfordAQA A-Level Computer Science (9645): Graph algorithms -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Graph Algorithms Revision Notes"
resourceType: "revision-notes"
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
description: "Recall notes for OxfordAQA 9645 sub-topic 3.11.1: breadth-first and depth-first search, their uses, Dijkstra's algorithm, trace methods and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.11.1 Graph algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.11 Advanced algorithms). For explanations, code and full traces, see the [graph algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms/); then practise with the [graph algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-practice/). Code is Python.

## What the specification requires

- **Trace** breadth-first and depth-first search, and describe typical applications. Breadth-first: shortest path for an unweighted graph. Depth-first: navigating a maze.
- **Implement** breadth-first and depth-first search in program code.
- Understand and **trace Dijkstra's shortest path algorithm**. You will not be expected to recall its steps or write code for it unless it is given on the paper.
- Be aware of **applications** of shortest path algorithms.

## Key terms

| Term | Meaning |
|---|---|
| Traversal | Visiting each reachable vertex of a graph once |
| Visited | A vertex already processed; remembered so it is not processed again |
| BFS | Visits layer by layer from the start, using a queue |
| DFS | Goes as deep as possible, then backtracks, using a stack |
| Backtrack | Return to the previous vertex when there is nowhere new to go |
| Shortest path | The path of lowest total weight (or fewest edges if unweighted) |
| Distance | In Dijkstra's algorithm, the best total weight found so far from the start |

## Breadth-first search (queue)

1. Mark the start visited and enqueue it.
2. While the queue is not empty: dequeue a vertex; for each unvisited neighbour, mark it visited and enqueue it.

```python
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

## Depth-first search (stack or recursion)

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

With an explicit stack: pop a vertex; if it is unvisited, mark it and push its unvisited neighbours (in reverse order to visit the first neighbour first).

## Worked reminder: both searches from P

Graph: P: Q, R; Q: P, S, T; R: P, T; S: Q, U; T: Q, R, U; U: S, T.

| Vertex removed | Newly visited | Queue afterwards |
|---|---|---|
| (start) | P | P |
| P | Q, R | Q, R |
| Q | S, T | R, S, T |
| R | none | S, T |
| S | U | T, U |
| T | none | U |
| U | none | empty |

BFS order: **P, Q, R, S, T, U**. DFS order (neighbours in alphabetical order): P, then Q, then S, then U, then T (from U), then R (from T). DFS order: **P, Q, S, U, T, R**.

## Uses

| Algorithm | Typical use | Why |
|---|---|---|
| BFS | Shortest path in an unweighted graph | It reaches vertices in order of the number of edges from the start |
| DFS | Navigating a maze | It follows one passage to the end and backtracks from dead ends |
| Dijkstra | Satnav, network routing, journey planning | It finds the lowest total weight in a weighted graph |

## Dijkstra's algorithm: trace method

1. Start vertex distance 0; all others infinity.
2. Choose the unfinished vertex with the **smallest distance**; mark it finished.
3. For each unfinished neighbour, compare the current distance with (this vertex's distance + edge weight). If smaller, update it and record the route.
4. Repeat until all are finished.

*Worked reminder.* Edges: S-A 3, S-B 6, A-B 2, A-C 4, B-C 1, B-D 7, C-D 3; start S.

| Finished | S | A | B | C | D |
|---|---|---|---|---|---|
| start | 0 | ∞ | ∞ | ∞ | ∞ |
| S | **0** | 3 | 6 | ∞ | ∞ |
| A (3) | 0 | **3** | 5 | 7 | ∞ |
| B (5) | 0 | 3 | **5** | 6 | 12 |
| C (6) | 0 | 3 | 5 | **6** | 9 |
| D (9) | 0 | 3 | 5 | 6 | **9** |

Route to D: S, A, B, C, D, with cost 3 + 2 + 1 + 3 = 9. The route is found by following the "came from" links back from D.

## DFS trace in words (graph from P)

1. Visit P. Its first neighbour is Q: visit Q.
2. Q's neighbours are P (visited), S and T. Go to S.
3. S's neighbours are Q (visited) and U. Go to U.
4. U's neighbours are S (visited) and T. Go to T.
5. T's neighbours are Q and U (visited) and R. Go to R.
6. R's neighbours P and T are both visited. Backtrack through T, U, S and Q to P.
7. P has no unvisited neighbours left. Finished.

Order: P, Q, S, U, T, R. Compare with BFS, which visits R second because it is a direct neighbour of P.

## Explicit stack version of DFS

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

The neighbours are pushed in reverse so that the first neighbour is popped first. The test after `pop` is needed because a vertex can be pushed more than once before it is visited.

## BFS against DFS at a glance

| | BFS | DFS |
|---|---|---|
| Structure | Queue (first in, first out) | Stack (last in, first out) or recursion |
| Visit order | By distance from the start, in layers | Deep along one path first |
| Finds fewest-edge path? | Yes (unweighted graph) | Not guaranteed |
| Memory pattern | Holds a whole layer at once | Holds the current path |

## Choosing the right algorithm

- **Fewest edges between two vertices (unweighted):** BFS.
- **Lowest total weight between two vertices (weighted):** Dijkstra.
- **Explore every route, such as in a maze:** DFS.
- **Is every vertex reachable from the start?** Either BFS or DFS, then check that all vertices were visited.

## Exam traps

- **Wrong structure.** BFS uses a queue and DFS uses a stack.
- **Visiting twice.** Mark vertices as visited when they are added (BFS) or popped (DFS).
- **Order of neighbours.** Use the order the question gives.
- **BFS on a weighted graph.** It counts edges, not weights, so it does not find the cheapest path.
- **Dijkstra: wrong choice.** Always pick the smallest distance among the unfinished vertices.
- **Missing update.** Replace a distance only if the new total is smaller.
- **Distance without route.** Give both if asked.

## Quick self-test

1. Which data structure does BFS use?
2. Which data structure does DFS use?
3. What does DFS do at a dead end?
4. Give one use of BFS.
5. Give one use of DFS.
6. Why must visited vertices be recorded?
7. In the worked example, what is the BFS order from P?
8. What is the DFS order from P?
9. What does Dijkstra's algorithm find?
10. In the Dijkstra table, why did B change from 6 to 5?
11. What is the shortest route from S to D in the example?
12. Give one application of a shortest path algorithm.

### Answers

1. A queue.
2. A stack (or recursion, which uses the call stack).
3. It backtracks to the previous vertex and tries another neighbour.
4. Finding the shortest path (fewest edges) in an unweighted graph.
5. Navigating a maze (or exploring all paths).
6. A graph may contain cycles, so without a record the search could loop forever or process a vertex repeatedly.
7. P, Q, R, S, T, U.
8. P, Q, S, U, T, R.
9. The shortest (lowest total weight) path from a start vertex to every other vertex.
10. Through A the cost is 3 + 2 = 5, which is less than the direct edge of 6.
11. S, A, B, C, D (cost 9).
12. Satellite navigation, network routing or journey planning.

## More on this topic

- [Graph algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms/)
- [Graph algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-practice/)
- [Advanced algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.11.1 Graph algorithms.
