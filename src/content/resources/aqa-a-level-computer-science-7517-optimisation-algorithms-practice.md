---
title: "AQA A-Level Computer Science (7517): Optimisation algorithms -- Practice Questions"
seoTitle: "AQA A-Level Computer Science Dijkstra Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.3.6 questions with answers: tracing Dijkstra's shortest path algorithm on weighted graphs and describing its applications."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Optimisation algorithms study guide](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms/) | [Optimisation algorithms revision notes](/resources/aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes/)

Dijkstra's shortest path algorithm, as used in these questions: give the start vertex distance 0 and all others infinity; repeatedly choose the unvisited vertex with the smallest distance (if two are equal, take the one that comes first alphabetically), mark it visited, and for each unvisited neighbour replace its distance with the chosen vertex's distance plus the edge weight if that is smaller, recording the chosen vertex as the neighbour's previous vertex. All graphs are undirected.

---

## Section A

**1.** State what is meant by the weight of an edge in a weighted graph. **[1]**

**2.** State the distance given to the start vertex and to all other vertices at the beginning of Dijkstra's algorithm. **[2]**

**3.** Give two applications of shortest path algorithms. **[2]**

**4.** State why Dijkstra's algorithm must not be used on a graph that has negative edge weights. **[1]**

**5.** State what a breadth-first search finds when it is used on an unweighted graph. **[1]**

## Section B

**6.** A weighted graph has these edges: S-A 7, S-B 3, A-B 2, A-C 4, B-D 6, C-D 1, C-T 5, D-T 3.

**(a)** Complete a table showing the distance of every vertex after each vertex is visited, starting at S. **[6]**
**(b)** State the shortest distance from S to T. **[1]**
**(c)** State the route from S to T that gives this distance. **[2]**

**7.** A breadth-first search of the graph in Question 6 from S, taking neighbours in alphabetical order, reaches T by the route S, A, C, T. State the total weight of this route and explain why a breadth-first search does not reliably give the lowest-weight route. **[3]**

**8.** A weighted graph has these edges: P-Q 5, P-R 9, Q-R 3, Q-S 8, R-S 2, R-T 7, S-T 4. Use Dijkstra's algorithm from P.

**(a)** State the distance given to each of Q, R, S and T once P has been visited. **[2]**
**(b)** State the shortest distance from P to T. **[1]**
**(c)** State the route. **[2]**

**9.** At one step of Dijkstra's algorithm the vertex M, with distance 6, is being visited. Its unvisited neighbours are N (current distance 11, edge weight from M 3) and O (current distance 8, edge weight from M 4). State the new distance of N and of O and whether the previous vertex of each changes. **[4]**

**10.** Explain why the vertex with the smallest tentative distance can safely be marked as visited, and why this reasoning fails if an edge has a negative weight. **[4]**

**11.** A satellite navigation system models a road network as a weighted graph.

**(a)** State what the vertices, the edges and the weights could represent. **[3]**
**(b)** Explain why the system might find a different best route if the weights are journey times rather than distances. **[2]**

**12.** Describe how the shortest route from the start vertex to the target vertex can be recovered once Dijkstra's algorithm has finished. **[3]**

**13.** A game developer says that breadth-first search is good enough to move a character across a map in which different terrain types take different amounts of time to cross. Evaluate this claim. **[4]**

---

## Answers

**1.** The cost (such as distance, time or price) of using that edge, shown as a number [1].

**2.** Start vertex 0 [1]; all other vertices infinity [1].

**3.** Any two: satellite navigation or route planning; network (packet) routing; robot or game path finding; travel or delivery planning [2].

**4.** A negative weight could make a route that looks longer turn out cheaper after a vertex's distance has already been fixed as final [1].

**5.** The path with the fewest edges (the shortest path in terms of number of edges) [1].

**6. (a)**

| Step | Vertex visited | S | A | B | C | D | T |
|---|---|---|---|---|---|---|---|
| start | none | 0 | ∞ | ∞ | ∞ | ∞ | ∞ |
| 1 | S | 0 | 7 | 3 | ∞ | ∞ | ∞ |
| 2 | B | 0 | 5 | 3 | ∞ | 9 | ∞ |
| 3 | A | 0 | 5 | 3 | 9 | 9 | ∞ |
| 4 | C | 0 | 5 | 3 | 9 | 9 | 14 |
| 5 | D | 0 | 5 | 3 | 9 | 9 | 12 |
| 6 | T | 0 | 5 | 3 | 9 | 9 | 12 |

One mark for each of the steps 1 to 6 correct [6]. (Steps 4 and 5 visit C then D because both have distance 9 and C comes first alphabetically.)
**(b)** 12 [1].
**(c)** T was reached from D, D from B and B from S [1], so the route is S, B, D, T (3 + 6 + 3 = 12) [1].

**7.** S, A, C, T costs 7 + 4 + 5 = 16 [1]; this is more than the 12 found by Dijkstra's algorithm [1]; breadth-first search finds a route with the fewest edges and ignores edge weights (S, A, C, T and S, B, D, T both have three edges), so it can return a route that is not the lowest weight [1].

**8. (a)** Q 5 [1]; R 9, and S and T still infinity [1]. (After P is visited only Q and R are updated.)
**(b)** 14 [1].
**(c)** P, Q, R, S, T [1], with weights 5 + 3 + 2 + 4 = 14 [1].
Working: visit Q (5): R becomes 8, S becomes 13. Visit R (8): S becomes 10, T becomes 15. Visit S (10): T becomes 14. Visit T (14).

**9.** N: 6 + 3 = 9, which is less than 11, so N becomes 9 [1] and its previous vertex becomes M [1]; O: 6 + 4 = 10, which is not less than 8, so O stays 8 [1] and its previous vertex does not change [1].

**10.** Any other route to that vertex must pass through another unvisited vertex whose distance is at least as large [1]; with non-negative weights, adding further edges can only keep the total the same or larger [1]; so no route can be shorter than the smallest tentative distance, and it is final [1]; with a negative edge, a later edge could reduce the total below the smallest tentative distance, so the distance could be improved after it was fixed [1].

**11. (a)** Vertices: junctions (or towns) [1]; edges: road sections between them [1]; weights: distance or journey time of each road section [1].
**(b)** A shorter road may be slower (for example because of a lower speed limit or congestion) [1]; so the route with the lowest total time can differ from the route with the lowest total distance [1].

**12.** Each vertex has a previous vertex recorded when its distance was last updated [1]; start at the target and repeatedly move to the previous vertex until the start vertex is reached [1]; reverse the sequence to give the route from start to target [1].

**13.** Breadth-first search finds the route with the fewest steps [1]; it ignores how long each step takes, so it could pick a short route through slow terrain such as mud or water [1]; Dijkstra's algorithm, with terrain costs as weights, finds the route with the lowest total cost [1]; BFS would only be suitable if every move took the same time [1]. The claim is therefore false for this map.

---

## Where marks are usually lost

- Choosing the next vertex by position or name instead of smallest distance.
- Adding the edge weight to the wrong distance.
- Updating a vertex that has already been visited.
- Giving a distance but not the route, or the route but not the distance.
- Describing BFS as finding the cheapest route in a weighted graph.
