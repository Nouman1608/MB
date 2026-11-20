---
title: "OxfordAQA A-Level Computer Science (9645): Graph algorithms -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Graph Algorithms Questions"
resourceType: "practice-questions"
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
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.11.1: tracing breadth-first and depth-first search, coding them, and tracing Dijkstra's algorithm, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.11.1 Graph algorithms** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: breadth-first search, depth-first search, their applications, and Dijkstra's shortest path algorithm. Where there is a choice of neighbours, take them in alphabetical order. Code is Python. Every trace was checked by running the algorithm.

Related pages: [graph algorithms study guide](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms/) ·
[graph algorithms revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graph-algorithms-revision-notes/) ·
[advanced algorithms practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-practice/)

## Section A

**1.** State the data structure used by breadth-first search and the data structure used by depth-first search. **[2]**

**2.** Give one application of breadth-first search and one application of depth-first search. **[2]**

**3.** Explain why a graph search must keep a record of the vertices already visited. **[2]**

## Section B

Questions 4 to 6 use this undirected graph, stored as an adjacency list.

```
P: Q, R
Q: P, S, T
R: P, T
S: Q, U
T: Q, R, U
U: S, T
```

**4.** Trace a breadth-first search starting at P.

**(a)** Complete a table with the vertex removed from the queue, the vertices newly visited and the queue afterwards. **[5]**
**(b)** State the order in which the vertices are visited. **[1]**

**5.** Trace a depth-first search starting at P, using the recursive method. State the order in which the vertices are visited and explain where the search backtracks. **[4]**

**6.** Breadth-first search is used to find a shortest path from P to U.

**(a)** State a shortest path and the number of edges it uses. **[2]**
**(b)** Explain why breadth-first search finds a path with the fewest edges. **[2]**

**7.** The following function is intended to carry out a breadth-first search. Fill in the three missing parts, labelled (a), (b) and (c).

```python
from collections import deque

def bfs(g, start):
    visited = [start]
    queue = deque([start])
    while queue:
        v = queue.(a)                  # take the vertex at the front
        for n in g[v]:
            if n not in (b):
                visited.append(n)
                queue.(c)(n)           # add the neighbour to the back
    return visited
```

**[3]**

Questions 8 and 9 use a weighted, undirected graph with these edges: S-A 3, S-B 6, A-B 2, A-C 4, B-C 1, B-D 7 and C-D 3.

**8.** Trace Dijkstra's shortest path algorithm from vertex S.

**(a)** Complete a table showing the distance to each vertex after each vertex is finished. **[6]**
**(b)** State the shortest distance from S to D and the route that gives it. **[2]**

**9.** State why breadth-first search would not be suitable for finding the cheapest route in this graph, using an example. **[2]**

**10.** Describe two applications of a shortest path algorithm. **[2]**

## Answers

**1.** Breadth-first: a queue [1]. Depth-first: a stack (or recursion, which uses the call stack) [1]. **[2]**

**2.** Breadth-first: finding the shortest path (fewest edges) in an unweighted graph [1]. Depth-first: navigating a maze (accept checking connectivity or exploring all paths) [1]. **[2]**

**3.** A graph can contain cycles [1], so without a record the search could return to a vertex again and again and never finish (or process vertices more than once) [1]. **[2]**

**4. (a)**

| Vertex removed | Newly visited | Queue afterwards |
|---|---|---|
| (start) | P | P |
| P | Q, R | Q, R |
| Q | S, T | R, S, T |
| R | none | S, T |
| S | U | T, U |
| T | none | U |
| U | none | empty |

P placed in the queue to start [1]; P processed giving Q and R [1]; Q processed giving S and T [1]; S processed giving U, with R, T and U handled with no new vertices [1]; queue column correct throughout [1]. **[5]**
**(b)** **P, Q, R, S, T, U** [1]. **[1]**

**5.** Visiting order: **P, Q, S, U, T, R** [2]. Start at P and go to its first neighbour Q, then Q's first unvisited neighbour S, then U [1]. U's neighbours S and T: T is unvisited, so go to T, then to R from T. R's neighbours P and T are visited, so the search backtracks through T, U, S, Q to P, which has no unvisited neighbours left, and finishes [1]. **[4]**

**6. (a)** P, Q, S, U (accept P, Q, T, U or P, R, T, U) [1]; **3 edges** [1]. **[2]**
**(b)** Breadth-first search visits vertices in layers, all those one edge from P, then two edges, then three edges [1], so the first time it reaches a vertex is by a path with the fewest edges [1]. **[2]**

**7.** (a) `popleft()` [1]; (b) `visited` [1]; (c) `append` [1]. **[3]**

**8. (a)**

| Finished | S | A | B | C | D |
|---|---|---|---|---|---|
| start | 0 | ∞ | ∞ | ∞ | ∞ |
| S | **0** | 3 | 6 | ∞ | ∞ |
| A (3) | 0 | **3** | 5 | 7 | ∞ |
| B (5) | 0 | 3 | **5** | 6 | 12 |
| C (6) | 0 | 3 | 5 | **6** | 9 |
| D (9) | 0 | 3 | 5 | 6 | **9** |

Start row [1]; after S: A 3, B 6 [1]; after A: B 5, C 7 [1]; after B: C 6, D 12 [1]; after C: D 9 [1]; vertices finished in the correct order S, A, B, C, D [1]. **[6]**
**(b)** The shortest distance is **9** [1], by the route **S, A, B, C, D** (3 + 2 + 1 + 3) [1]. **[2]**

**9.** Breadth-first search finds the path with the fewest edges, not the lowest total weight [1]. For example, the direct edge S-B has weight 6, but the route S, A, B costs only 3 + 2 = 5, even though it uses more edges [1]. **[2]**

**10.** Any two applications [1 each], for example satellite navigation finding the quickest route between two places, and network routing sending data along the lowest-cost path. **[2]**

## Frequently asked questions

**Do I need to memorise Dijkstra's algorithm?**
No. The specification says you will not be expected to recall its steps or write code for it unless it is given to you on the paper. You must be able to trace it.

**Which neighbour do I visit first?**
The one the question tells you to. If it gives no instruction, take them in alphabetical or numerical order and say so.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.11.1 Graph algorithms.
