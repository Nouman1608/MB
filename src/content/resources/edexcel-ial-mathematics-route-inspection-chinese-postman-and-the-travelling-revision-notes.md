---
title: "Pearson Edexcel International Advanced Level Mathematics: Route inspection and travelling salesman (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths D1 Route Inspection and TSP Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on route inspection, travelling salesman bounds and nearest neighbour for Edexcel International A Level D1, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense Unit D1 (Decision Mathematics 1), section 3, topics 3.1 to 3.4, of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification states that D1 is optional for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics. Full explanations and longer examples are in the [study guide](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling/). Test yourself with the [practice set](/resources/edexcel-ial-mathematics-route-inspection-chinese-postman-and-the-travelling-practice/), and tick off the course on the [printable checklist](/checklists/edexcel/a-level/mathematics/). The course home is the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/). Not sure where you stand? Take a [free 10-minute diagnostic](/diagnostics/).

## Definitions to know

| Term | Meaning |
|---|---|
| Degree (valency) | Number of edges meeting at a node |
| Odd / even node | Node whose degree is odd / even |
| Route inspection | Shortest closed route that uses every edge at least once (Chinese postman) |
| Tour | A walk that visits every vertex and returns to its start |
| Classical TSP | Visit every vertex once only, minimum length |
| Practical TSP | Visit every vertex, revisits allowed, minimum length |
| Complete graph | Every vertex joined to every other |
| Triangle inequality | Longest of AB, AC, CB is at most the sum of the other two |
| Minimum spanning tree (MST) | Spanning tree of least total weight |

## 3.1 Route inspection in steps

1. Find the degree of every node. Write down the odd nodes.
2. List all pairings of the odd nodes (1 pairing for two odd nodes, 3 for four).
3. For each pair, find the shortest path between them. It may pass through other nodes.
4. Add the two path lengths in each pairing. Take the smallest total.
5. Route length = sum of all edge weights + smallest total.
6. Say which edges are repeated. The route starts and ends at the same node.

Facts: the degrees add up to twice the number of edges, so the number of odd nodes is always even. If there are no odd nodes, the route length is just the total weight.

**Worked reminder.** A rectangle ABCD has AB = 6, BC = 4, CD = 6, DA = 4 and a diagonal AC = 8.

```
Degrees: A 3, B 2, C 3, D 2   odd nodes: A and C
Shortest A to C: diagonal 8 (A-B-C is 10)
Total weight = 6+4+6+4+8 = 28
Route length = 28 + 8 = 36
```

## 3.2 Setting up the travelling salesman problem

- Practical problem: work in the original network. Vertices may be revisited.
- Classical problem: needs a complete graph satisfying the triangle inequality.
- To convert a network, replace each missing edge by the shortest distance between that pair of vertices. Write the result as a table of shortest distances.
- A table of shortest distances always satisfies the triangle inequality.
- To test the triangle inequality, take the longest side and compare it with the sum of the other two.

## 3.3 Bounds in steps

| | Upper bound | Lower bound |
|---|---|---|
| Idea | Any real tour is at least as long as the optimum | A calculation that no tour can beat |
| Method | Nearest neighbour, or double the MST and take short cuts | Remove one vertex, build the tree on the others, then add the two cheapest edges that touched the removed vertex |
| Which to keep | The smallest | The largest |

**Double the tree and use short cuts**

1. Find the MST of the complete network (Prim or Kruskal).
2. Double it to give a walk of length 2 × MST that visits every vertex.
3. List the walk from the start vertex.
4. Replace each revisit by a direct edge to the next new vertex. This cannot make the route longer.
5. Return to the start. The tour length is an upper bound.

**Lower bound by deleting a vertex**

1. Remove one vertex, together with every edge at it.
2. Build a minimum spanning tree on the vertices that are left.
3. Put back the two cheapest edges that touched the removed vertex, and add their weights.
4. For the best bound, do this for every vertex in turn and keep the largest result.

**Result.** If the best lower bound is l and the best upper bound is u, then l ≤ optimal tour length ≤ u. If l = u, the tour is optimal.

**Worked reminder.** Distances: PQ 4, PR 9, PS 6, QR 5, QS 8, RS 7.

```
MST: PQ 4, QR 5, PS 6 = 15      doubling gives a walk of length 30
Nearest neighbour from P: P-Q (4), Q-R (5), R-S (7), S-P (6) = 22
Delete P: MST of Q, R, S = QR 5 + RS 7 = 12
          two shortest edges at P = 4 and 6
          lower bound = 12 + 4 + 6 = 22
```

The lower bound and the tour both equal 22, so 22 is the optimal tour length.

## 3.4 Nearest neighbour in steps

1. Start at the given vertex.
2. Move to the nearest unvisited vertex.
3. Repeat until all vertices are visited.
4. Return to the start and add up the length.

Use a complete network. Different start vertices can give different tours. The result is an upper bound only.

## Must-know distinctions

- **Route inspection or travelling salesman?** Route inspection covers every edge. The travelling salesman problem covers every vertex.
- **Upper or lower?** A tour you actually construct is an upper bound. A tree-based calculation is a lower bound.
- **Doubling the MST or the lower bound?** Doubling the MST gives an upper bound walk. The lower bound uses the MST once, after deleting a vertex.
- **Odd nodes or odd edges.** Pairings are of odd nodes. You repeat paths made of edges.

## Quick self-test

1. A network has six nodes with degrees 3, 3, 4, 2, 5 and 3. How many odd nodes does it have, and how many edges?
2. A network has total weight 52. Its odd nodes A, B, C, D have shortest distances AB 9, CD 11, AC 6, BD 17, AD 8, BC 15. Find the route inspection length.
3. How many pairings are there for four odd nodes?
4. Does a triangle with AB = 13, AC = 5 and CB = 7 satisfy the triangle inequality?
5. A complete network has an MST of weight 24. What is the length of the doubled-tree walk?
6. After deleting a vertex, the MST of the rest has weight 31 and the two shortest edges at the deleted vertex are 6 and 9. What is the lower bound?
7. Lower bounds found were 46, 44, 49 and 47. Upper bounds found were 53, 51 and 55. State the interval for the optimal tour length.
8. Distances: PQ 3, PR 8, PS 4, QR 6, QS 9, RS 7. Apply nearest neighbour from P.
9. Which version of the travelling salesman problem allows a vertex to be visited twice?
10. Four odd nodes have shortest distances AB 5, CD 8, AC 6, BD 9, AD 11, BC 9. How much extra length does route inspection add?
11. Why must a network be converted before you use nearest neighbour on it?

### Answers

1. Four odd nodes (3, 3, 5, 3). The degrees sum to 20, so there are 10 edges.
2. Pairings: AB+CD = 20, AC+BD = 23, AD+BC = 23. Smallest 20. Route length = 52 + 20 = **72**.
3. **3**.
4. **No.** The longest side is 13, and 5 + 7 = 12 is smaller.
5. **48**.
6. 31 + 6 + 9 = **46**.
7. Largest lower bound 49, smallest upper bound 51, so **49 ≤ L ≤ 51**.
8. P to Q (3), Q to R (6), R to S (7), S to P (4). Tour P-Q-R-S-P, length **20**.
9. The **practical** problem.
10. AB+CD = 13, AC+BD = 15, AD+BC = 20. The extra length is **13**.
11. Nearest neighbour needs a direct distance between every pair of vertices. Without a complete network, the nearest unvisited vertex may not be joined by an edge.

## Checks before you move on

- Route inspection: is your answer at least as large as the total weight of the network? It must be.
- Pairings: have you written all of them, with the shortest path for each pair?
- Tours: does your list of vertices start and finish at the same vertex, with every other vertex once in a classical tour?
- Upper bound: is it from a tour you can write down vertex by vertex?
- Lower bound: did you remove one vertex, build the tree on the rest, and add exactly two edges?
- Interval: is the lower bound below the upper bound? If not, recheck both calculations.

## Where marks are usually lost

- Writing down only the final route length and not listing the pairings, so the comparison cannot be seen.
- Using a direct edge between odd nodes without checking for a shorter path through other nodes.
- Leaving out the original total weight and quoting only the repeated length.
- Missing a pairing, or pairing a node with itself.
- Using nearest neighbour on a network with missing edges.
- Quoting a lower bound from one deleted vertex when the question asks for the best one.
- Adding the longest edges at the deleted vertex instead of the two shortest.
- Not stating the tour as a list of vertices, or not returning to the start.
- Giving a bound without saying whether it is upper or lower.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics (YMA01), Specification, Issue 3, April 2019, Pearson Education Limited. Unit D1: Decision Mathematics 1, section 3 (topics 3.1 to 3.4) and the Glossary for D1.
