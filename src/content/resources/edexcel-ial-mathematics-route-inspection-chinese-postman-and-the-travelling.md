---
title: "Pearson Edexcel International Advanced Level Mathematics: Route inspection and travelling salesman (YMA01)"
seoTitle: "Edexcel IAL Maths D1 Route Inspection and TSP Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Route inspection (Chinese postman) and the travelling salesman problem"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 170
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-on-graphs-ii-edexcel-alevel-maths"
description: "Study guide to route inspection, the travelling salesman problem, bounds and nearest neighbour for Edexcel International A Level D1, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019. It covers Unit D1 (Decision Mathematics 1), section 3, "Algorithms on graphs II", topics 3.1 to 3.4. The specification states that D1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. Check with your teacher whether your course includes it.

For quick recall use the [revision notes](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling-revision-notes/). To test yourself use the [practice set](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling-practice/). The course pages are the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/). For wider exam technique see [IAL Mathematics exam preparation](/resources/edexcel-ial-mathematics-exam-preparation/). When you are ready, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec ref | What you must be able to do |
|---|---|
| 3.1 | Find the shortest route around a network that travels along every edge at least once and ends at the start vertex (route inspection, also called the Chinese postman problem). The network has up to four odd nodes. |
| 3.2 | Distinguish the practical and classical travelling salesman problems. The classical problem uses complete graphs that satisfy the triangle inequality. Use short cuts to improve an upper bound. |
| 3.3 | Find upper and lower bounds with minimum spanning tree methods. Convert a network into a complete network of shortest distances. |
| 3.4 | Apply the nearest neighbour algorithm. |

The specification says you will use inspection to consider all possible pairings of odd nodes. Applying Floyd's algorithm to the odd nodes is not required. It also says to show clearly how an algorithm has been applied, so write every step.

## 3.1 Route inspection

**Degree.** The degree (valency) of a node is the number of edges meeting at it. A node is odd or even by its degree. The degrees add up to twice the number of edges, so a network always has an even number of odd nodes.

**Idea.** A closed route that uses every edge exactly once exists only if every node is even. If some nodes are odd, some edges must be walked twice. Walking a path between two odd nodes a second time makes both of them even. So you pair up the odd nodes and repeat the shortest path between each pair, choosing the pairing with the smallest total.

**Method**

1. List the degree of every node and mark the odd ones.
2. List every way to pair the odd nodes. Two odd nodes give 1 pairing. Four give 3.
3. For each pairing find the shortest path between the two nodes in each pair. It may pass through other nodes.
4. Choose the pairing with the smallest total.
5. Route length = total weight of all edges + that smallest total.

**Example 1 (two odd nodes).** The network has these edges:

| Edge | AB | AC | BC | BD | CD | CE | DE | DF | EF |
|---|---|---|---|---|---|---|---|---|---|
| Weight | 8 | 6 | 5 | 9 | 7 | 10 | 4 | 12 | 6 |

Degrees: A 2, B 3, C 4, D 4, E 3, F 2. The odd nodes are B and E, so there is one pairing.

```
BE directly: there is no edge BE
B-D-E = 9 + 4 = 13
B-C-E = 5 + 10 = 15
shortest path from B to E = 13
total weight = 8+6+5+9+7+10+4+12+6 = 67
route length = 67 + 13 = 80
```

A route that works, starting and ending at A, is A-C-E-F-D-E-D-B-D-C-B-A. It repeats BD and DE, and its length is 80.

**Example 2 (four odd nodes).** Edges: AB 7, AC 5, BC 4, BD 8, CE 6, DE 3, DF 9, EF 5. The total weight is 47. Degrees: A 2, B 3, C 3, D 3, E 3, F 2. The odd nodes are B, C, D, E.

| Pairing | Shortest paths | Total |
|---|---|---|
| BC and DE | 4 and 3 | 7 |
| BD and CE | 8 and 6 | 14 |
| BE and CD | 10 (B-C-E) and 9 (C-E-D) | 19 |

The smallest total is 7, so the route length is 47 + 7 = **54**. You repeat edges BC and DE.

**Starting point.** The route must end where it starts. If you are asked to start at a particular node, the length does not change, because the repeated edges are the same wherever you start.

## 3.2 The travelling salesman problem

The specification glossary gives these definitions. The travelling salesman problem is to find a route of minimum length that visits every vertex in an undirected network. In the **classical** problem each vertex is visited once only. In the **practical** problem a vertex may be revisited. A **tour** is a walk that visits every vertex and returns to its start.

A **complete graph** has every vertex joined to every other. The triangle inequality for vertices A, B, C says that the longest of AB, AC, CB is no more than the sum of the other two. For example, with AB = 14, AC = 5 and CB = 7 the inequality fails, because 14 > 12.

**Turning a network into the classical problem.** Real networks are rarely complete. For every pair of vertices, replace the missing edge by the shortest distance between them. The result is a complete network of shortest distances. It satisfies the triangle inequality, because a direct shortest distance can never exceed a route through a third vertex.

**Example 3 (the network used in 3.3 and 3.4).** Edges: AB 12, AC 9, BC 7, BD 10, CD 11, CE 8, DE 6, AE 15, BE 13. There is no edge AD. The shortest route from A to D is A-C-D = 9 + 11 = 20 (A-E-D is 21 and A-B-D is 22). The table of shortest distances is:

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 12 | 9 | 20 | 15 |
| B | 12 | – | 7 | 10 | 13 |
| C | 9 | 7 | – | 11 | 8 |
| D | 20 | 10 | 11 | – | 6 |
| E | 15 | 13 | 8 | 6 | – |

## 3.3 Upper and lower bounds

The optimal tour length is bounded above by the length of any actual tour, and below by a calculation. You give both and write the interval.

### Upper bound from a minimum spanning tree (double the tree, then short cuts)

1. Find a minimum spanning tree (MST) of the complete network with Prim's or Kruskal's algorithm.
2. Double every edge. This gives a walk through all vertices of length 2 × MST.
3. Write the walk from your start vertex. Wherever it revisits a vertex, take a short cut straight to the next new vertex.
4. The short-cut tour is no longer than the walk, by the triangle inequality. Its length is an upper bound.

**Example 3 continued.** Kruskal on the table: DE 6, BC 7, CE 8, AC 9 are accepted. BD 10 is rejected because B and D are already connected. The MST weighs 6 + 7 + 8 + 9 = 30. Doubling gives a walk of length 60:

```
A-C-B-C-E-D-E-C-A   length 2 x 30 = 60
Short cut B to E directly:  13  (instead of B-C-E = 15)
Short cut D to A directly:  20  (instead of D-E-C-A = 23)
Tour A-C-B-E-D-A = 9 + 7 + 13 + 6 + 20 = 55
```

So 55 is an upper bound. The nearest neighbour method in 3.4 does better here.

### Lower bound (delete a vertex)

1. Choose a vertex and remove it with all its edges.
2. Find the MST of the remaining vertices.
3. Add the two shortest edges that joined the deleted vertex to the network.
4. The total is a lower bound, because a tour must contain a path through all other vertices and two edges at the deleted vertex.
5. Repeat for every vertex. The **largest** lower bound is the best one.

**Example 3 continued, deleting A.** The MST of B, C, D, E is DE 6, BC 7, CE 8 = 21. The two shortest edges at A are AC 9 and AB 12. The lower bound is 21 + 9 + 12 = 42.

| Vertex deleted | A | B | C | D | E |
|---|---|---|---|---|---|
| Lower bound | 42 | 40 | 43 | 40 | 40 |

Deleting C: the MST of A, B, D, E is DE 6, BD 10, AB 12 = 28, and the two shortest edges at C are CB 7 and CE 8, giving 28 + 15 = 43. The best lower bound is 43.

## 3.4 The nearest neighbour algorithm

1. Start at the given vertex.
2. Go to the nearest vertex not yet visited.
3. Repeat until every vertex has been visited.
4. Return to the start.

The method works on a complete network, so convert first if needed. The answer depends on the start vertex, and it is not guaranteed to be the best tour. It gives an upper bound.

**Example 3 continued, starting at A.** From A the nearest is C (9). From C the nearest unvisited is B (7), then from B the nearest unvisited is D (10), then E (6). Return E to A (15). The tour A-C-B-D-E-A has length 9 + 7 + 10 + 6 + 15 = 47. Starting at B instead gives B-C-E-D-A-B = 7 + 8 + 6 + 20 + 12 = 53.

**Conclusion.** The best upper bound is 47 and the best lower bound is 43, so the optimal tour length L satisfies 43 ≤ L ≤ 47. Checking all twelve distinct tours, which you would not do in an exam, gives 45, inside the interval.

**Practical or classical.** The tour above uses only direct distances from the table, so each vertex is visited once. If a table entry came from a longer path, such as A to D through C, then following that path in the original network would revisit C, which only the practical problem allows.

## Common errors

- Pairing odd nodes with a direct edge when a shorter path goes through other nodes. Always compare paths.
- Counting only some pairings. Four odd nodes always give three.
- Forgetting to add the repeated paths to the total weight of the network.
- Running nearest neighbour on a network that is not complete. A nearest unvisited vertex may not be joined by an edge.
- Taking the smallest lower bound. You want the largest, and the smallest upper bound.
- Deleting a vertex but adding the two longest edges, or only one edge, at that vertex.
- Showing only the final tour. Show each choice so the algorithm is visible.
- Using 2 × MST as the upper bound without making short cuts when asked for an improved bound.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics (YMA01), Specification, Issue 3, April 2019, Pearson Education Limited. Unit D1: Decision Mathematics 1, section 3 (topics 3.1 to 3.4) and the Glossary for D1.
