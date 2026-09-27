---
title: "IB DP Mathematics: Applications and Interpretation -- Graph theory, adjacency matrices and network algorithms (HL) Revision Notes"
seoTitle: "IB Maths AI HL Graph Theory Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Graph theory, adjacency matrices and network algorithms (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 3.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-16"
description: "Condensed IB DP Maths AI HL graph theory revision notes: key definitions, algorithm steps, matrix results and a quick self-test with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, use the [graph theory study guide](/resources/ib-dp-mathematics-ai-hl-graph-theory/).

These notes cover the graph theory unit of IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.14–3.16, and all of the content is HL only (AHL). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

Test yourself afterwards with the [graph theory practice questions](/resources/ib-dp-mathematics-ai-hl-graph-theory-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) list every subtopic. For exam technique across the course, see [AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/).

## Definitions (3.14)

| Term | Meaning |
|---|---|
| Adjacent vertices | joined by an edge |
| Adjacent edges | share a vertex |
| Degree | number of edges at a vertex (a loop counts 2) |
| Simple graph | no loops, no multiple edges |
| Complete graph Kₙ | simple, every pair of vertices joined |
| Weighted graph | edges carry values (distance, cost, time) |
| Directed graph | edges have directions; in degree = arrows in, out degree = arrows out |
| Subgraph | some of the vertices and edges of a graph |
| Tree | connected, no cycles |
| Connected | a route exists between every pair of vertices |
| Strongly connected | directed graph where every vertex can reach every other along the arrows |

## Key results

| Result | Statement |
|---|---|
| Sum of degrees | = 2 × number of edges |
| Odd vertices | always an even number of them |
| Edges in Kₙ | n(n − 1)/2 |
| Edges in a tree with n vertices | n − 1 (so an MST has n − 1 edges) |
| Walks of length k from i to j | (i, j)th entry of Aᵏ |
| Walks of length up to k | (i, j)th entry of A + A² + … + Aᵏ |
| Diagonal of A² (simple undirected graph) | degree of each vertex |
| Directed A | row sum = out degree; column sum = in degree |
| Transition matrix | Tᵢⱼ = P(move from j to i); each column sums to 1 |
| Steady state | Ts = s, entries sum to 1 |

## Walks, trails, paths, circuits, cycles (3.16)

- **Walk:** any sequence of adjacent edges.
- **Trail:** no edge repeated.
- **Path:** no vertex repeated.
- **Circuit:** a trail that returns to its start.
- **Cycle:** a circuit with no vertex repeated except start/end.

## Method in steps

> **Transition matrix of a graph**
> 1. Find the degree (undirected) or out degree (directed) of each vertex j.
> 2. In column j, put 1/degree in the row of each vertex that j leads to; 0 elsewhere.
> 3. Check each column sums to 1.
> 4. Steady state: raise T to a high power on your GDC, or solve (T − I)s = 0 with entries summing to 1.

> **Eulerian test (connected graph)**
> 0 odd vertices → Eulerian circuit. 2 odd vertices → Eulerian trail from one odd vertex to the other. Otherwise → neither.

> **Kruskal's algorithm**
> 1. Order edges by weight. 2. Add the next cheapest edge unless it forms a cycle. 3. Stop at n − 1 edges. Write down the order, including rejected edges.

> **Prim's algorithm (matrix method)**
> 1. Choose a start vertex: delete its row, label its column.
> 2. Find the smallest undeleted entry in all labelled columns. Its row is the new vertex.
> 3. Delete that row, label that column.
> 4. Repeat until every column is labelled.

> **Chinese postman**
> 1. Total weight of all edges.
> 2. Find odd vertices.
> 3. Two odd: add the shortest path between them. Four odd: check all three pairings; add the least total.
> 4. State which edges are repeated.

> **Travelling salesman**
> 1. Make a table of least distances if the graph is not complete or a direct edge is not the shortest route.
> 2. Upper bound: nearest neighbour from a start vertex, then return to the start.
> 3. Lower bound: delete a vertex, find the MST of the rest, add the two shortest edges from the deleted vertex.
> 4. Best interval: largest lower bound ≤ optimal ≤ smallest upper bound.

## Worked reminders

**Walks.** If A³ has entry 5 in position (2, 4), there are five walks of length 3 from vertex 2 to vertex 4. Walks may repeat vertices and edges.

**Transition column.** In an undirected graph, vertex C is adjacent to A, B and D. Column C of T has 1/3 in rows A, B and D and 0 elsewhere.

**Chinese postman with four odd vertices P, Q, R, S.** The three pairings are PQ + RS, PR + QS and PS + QR. Use shortest paths, not only direct edges.

**Walks of length up to k.** If entries (1, 3) of A, A² and A³ are 0, 2 and 3, there are 0 + 2 + 3 = 5 walks of length at most 3 from vertex 1 to vertex 3.

**Table of least distances.** If the edge AB is 12 but A–C–B is 5 + 4 = 9, the table entry for AB is 9. A pair with no direct edge gets its shortest indirect route.

**Nearest neighbour.** Always move to the nearest *unvisited* vertex. After the last vertex, add the edge back to the start; without it the total is not a tour.

**Deleted vertex.** MST of the remaining vertices = 18; two shortest edges from the deleted vertex are 4 and 6. Lower bound = 18 + 4 + 6 = 28.

## Must-know distinctions

- **Eulerian vs Hamiltonian.** Eulerian is about every *edge* once; Hamiltonian is about every *vertex* once.
- **Trail vs path.** A trail may revisit a vertex; a path may not.
- **Connected vs strongly connected.** Strong connection is for directed graphs and must respect the arrows.
- **Chinese postman vs travelling salesman.** Postman covers every edge; salesman visits every vertex.
- **Upper vs lower bound.** Nearest neighbour gives an actual tour, so an upper bound. Deleted vertex gives a value that no tour can beat, so a lower bound.
- **Kruskal vs Prim.** Kruskal picks edges globally by weight and may build separate pieces first; Prim grows one connected tree from a start vertex. Both give an MST of the same weight.
- **Adjacency matrix vs transition matrix.** A counts edges (rows = from). T holds probabilities (columns = from).

## Quick self-test

1. How many edges does K₇ have?
2. A simple graph has 8 vertices, each of degree 3. How many edges does it have?
3. A tree has 15 edges. How many vertices does it have?
4. A connected graph has degrees 2, 4, 4, 6, 2, 2. Does it have an Eulerian circuit?
5. A connected graph has degrees 3, 2, 2, 5, 4. What can you say about Eulerian trails and circuits?
6. In a simple undirected graph, the (2, 2) entry of A² is 5. What does this tell you?
7. In a directed graph's adjacency matrix, what does the sum of column i give?
8. A connected network has 9 vertices. How many edges are in its minimum spanning tree?
9. A network has total weight 84 and exactly two odd vertices, P and Q, whose shortest path is 11. Find the length of the shortest Chinese postman route.
10. A graph has four odd vertices. How many pairings must you check?
11. Nearest neighbour attempts give 52, 47 and 49. Deleted vertex attempts give 38 and 41. State the best interval for the optimal tour length L.
12. Why must a transition matrix have columns summing to 1?

### Answers

1. 7 × 6/2 = **21**.
2. Sum of degrees = 24, so **12** edges.
3. n − 1 = 15, so **16** vertices.
4. **Yes.** Every vertex is even and the graph is connected.
5. Exactly two odd vertices (degrees 3 and 5), so there is an **Eulerian trail** starting at one and ending at the other, but **no Eulerian circuit**.
6. That vertex has **degree 5** (five walks of length 2 go out and straight back).
7. The **in degree** of vertex i.
8. **8** edges.
9. 84 + 11 = **95**.
10. **3** pairings.
11. **41 ≤ L ≤ 47**.
12. Column j lists the probabilities of every possible move from vertex j, and one of them must happen.

## Where marks are usually lost

- Writing a Kruskal or Prim answer as the final tree only. The order of selection (and rejected edges for Kruskal) is what earns the method marks.
- Building a transition matrix with rows as "from", so rows rather than columns sum to 1.
- Answering "walks of length at most k" with only Aᵏ.
- In a Chinese postman problem, pairing odd vertices with the direct edge when an indirect path is shorter.
- With four odd vertices, stating one pairing without showing the other two totals.
- Forgetting to say which edges are repeated when asked to describe the route.
- Running the nearest neighbour algorithm on a table that has not been converted to least distances.
- Adding only one edge from the deleted vertex, or the two edges from the MST, in the deleted vertex method.
- Claiming a graph "has no Hamiltonian cycle" because it fails the Eulerian test; they are different questions.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 — sections AHL 3.14, 3.15 and 3.16.
