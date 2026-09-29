---
title: "IB DP Mathematics: Applications and Interpretation -- Graph theory, adjacency matrices and network algorithms (HL) Practice Questions"
seoTitle: "IB Maths AI HL Graph Theory Practice Questions"
resourceType: "practice-questions"
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
description: "11 original IB DP Maths AI HL graph theory questions on matrices, spanning trees, Chinese postman and TSP, with mark-by-mark worked answers."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

This practice set covers the graph theory unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.14–3.16, and every question is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

All three HL papers require a GDC, so every question is labelled "(calculator allowed)". Use it for matrix powers and steady states; do the algorithms by hand and show your order of choices.

Learn the methods in the [graph theory study guide](/resources/ib-dp-mathematics-ai-hl-graph-theory/) and the [revision notes](/resources/ib-dp-mathematics-ai-hl-graph-theory-revision-notes/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits.

## Questions

**1.** (HL, calculator allowed) A simple graph has six vertices with degrees 2, 3, 3, 4, 4 and d. The graph has 10 edges.

**(a)** Find d. **[2]**
**(b)** Explain why the graph is not a tree. **[1]**

**2.** (HL, calculator allowed) A directed graph has edges W→X, X→Y, Y→W, Y→Z and W→Z.

**(a)** Write down the in degree and out degree of each vertex. **[2]**
**(b)** Determine whether the graph is strongly connected. **[1]**

**3.** (HL, calculator allowed) A simple graph G has adjacency matrix

```
      1 2 3 4 5
1  [  0 1 1 0 0 ]
2  [  1 0 1 1 1 ]
3  [  1 1 0 0 1 ]
4  [  0 1 0 0 1 ]
5  [  0 1 1 1 0 ]
```

**(a)** Find the number of edges of G. **[1]**
**(b)** Find the number of walks of length 3 from vertex 1 to vertex 4. **[2]**
**(c)** Find the number of walks of length at most 3 from vertex 2 to vertex 5. **[2]**

**4.** (HL, calculator allowed) Four web pages link as follows: A→B, A→C, B→C, B→D, C→A, C→D, D→A. The graph is strongly connected. A visitor clicks a random link on the current page.

**(a)** Write down the transition matrix T, with columns representing the current page. **[2]**
**(b)** Find the steady-state vector. **[3]**
**(c)** Hence rank the pages in order of importance. **[1]**

**5.** (HL, calculator allowed) A connected graph has vertices A, B, C, D, E and edges AB, BC, CD, DE, EA, AC and CE.

**(a)** Explain why the graph has an Eulerian trail but no Eulerian circuit. **[2]**
**(b)** Write down an Eulerian trail. **[1]**
**(c)** Write down a Hamiltonian cycle. **[1]**

**6.** (HL, calculator allowed) A network has edges PQ 14, PR 9, PS 16, QR 11, QT 8, RS 12, RT 10, ST 7, SU 13, TU 15 and QU 17. Use Kruskal's algorithm to find a minimum spanning tree, stating the order in which edges are considered, and its total weight. **[4]**

**7.** (HL, calculator allowed) The weighted adjacency table shows costs in hundreds of dollars.

| | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | – | 6 | 11 | 9 | – | – |
| B | 6 | – | 5 | – | 14 | – |
| C | 11 | 5 | – | 7 | 8 | 12 |
| D | 9 | – | 7 | – | – | 10 |
| E | – | 14 | 8 | – | – | 4 |
| F | – | – | 12 | 10 | 4 | – |

Use Prim's algorithm, starting at A, to find a minimum spanning tree. State the order in which edges are added and the total cost. **[5]**

**8.** (HL, calculator allowed) A park has paths AB 4, BC 6, CD 5, DA 6 and BD 12 (metres ×10). A gardener must walk along every path at least once, starting and finishing at A. Find the length of the shortest route, stating which paths are repeated. **[5]**

**9.** (HL, calculator allowed) A road network has roads AB 8, BC 6, CD 9, DE 5, EF 8, FA 4, BF 10 and CE 3 (km). A gritting lorry must travel every road at least once, starting and finishing at the depot at A.

**(a)** Find the total length of the roads. **[1]**
**(b)** Write down the odd vertices. **[1]**
**(c)** Explain why the odd vertices are paired. **[2]**
**(d)** Find the shortest-path total for each possible pairing of the odd vertices. **[3]**
**(e)** Find the length of the shortest route and state which roads are repeated. **[2]**

**10.** (HL, calculator allowed) Five sites are joined by tracks: AB 8, AC 5, AE 9, BC 6, BD 7, BE 12, CD 13, CE 4 and DE 11 (minutes). An inspector must visit every site and return to the start.

**(a)** Complete a table of least times between all pairs of sites, justifying any entry that is not a direct track time. **[3]**
**(b)** Use the nearest neighbour algorithm, starting at A, to find an upper bound. **[3]**
**(c)** Use the deleted vertex algorithm, deleting A, to find a lower bound. **[3]**
**(d)** Deleting D instead gives a lower bound of 33. State the best interval for the optimal time T. **[1]**

**11.** (HL, calculator allowed) A simple graph H has adjacency matrix

```
      1 2 3 4 5
1  [  0 1 1 0 0 ]
2  [  1 0 1 1 0 ]
3  [  1 1 0 0 1 ]
4  [  0 1 0 0 1 ]
5  [  0 0 1 1 0 ]
```

**(a)** Find the number of edges. **[1]**
**(b)** Explain why each diagonal entry of A² equals the degree of that vertex. **[2]**
**(c)** Find the number of walks of length 4 that start and end at vertex 1. **[1]**
**(d)** State how many edges must be removed from H to leave a spanning tree. **[1]**
**(e)** Construct the transition matrix for a random walk on H and find its steady-state vector. **[3]**

## Answers

**1. (a)** Sum of degrees = 2 × 10 = 20 [1]; 16 + d = 20, so **d = 4** [1]
**(b)** A tree with 6 vertices has 5 edges, but this graph has **10** [1]
*Examiner insight:* The method mark in (a) needs "sum of degrees = 2 × edges" stated or used; the value 4 alone may not earn it.

**2. (a)** In/out: W 1/2, X 1/1 [1]; Y 1/2, Z 2/0 [1]
**(b)** Z has out degree 0, so no vertex can be reached from Z: **not strongly connected** [1]
*Examiner insight:* A reason is required; "no" alone earns nothing on a determine question.

**3. (a)** Sum of entries = 14, so **7** edges [1]
**(b)** A³ from GDC [1]; entry (1, 4) = **3** [1]
**(c)** Entries (2, 5) of A, A², A³ are 1, 2, 7 [1]; total **10** [1]
*Examiner insight:* In (c), A³ alone gives 7 and loses both marks; show the sum of powers.

**4. (a)** Columns: A → B, C (½ each); B → C, D (½ each); C → A, D (½ each); D → A (1) [1]

```
T = [  0    0   1/2   1 ]
    [ 1/2   0    0    0 ]
    [ 1/2  1/2   0    0 ]
    [  0   1/2  1/2   0 ]
```
[1]
**(b)** Solve Ts = s with entries summing to 1, or find Tⁿ for large n [1]; s = (8/23, 4/23, 6/23, 5/23) [1] = **(0.348, 0.174, 0.261, 0.217)** [1]
**(c)** **A, C, D, B** [1]
*Examiner insight:* The IB convention is Tᵢⱼ = probability of moving from j to i, so columns sum to 1; the transpose (rows summing to 1) does not earn the accuracy mark in (a).

**5. (a)** Degrees A 3, B 2, C 4, D 2, E 3 [1]; exactly two odd vertices in a connected graph, so a trail exists but not a circuit [1]
**(b)** e.g. **A–B–C–A–E–C–D–E** [1]
**(c)** e.g. **A–B–C–D–E–A** [1]
*Examiner insight:* The trail must start and end at the two odd vertices; a sequence ending elsewhere cannot be correct.

**6.** Order: ST 7 ✓, QT 8 ✓, PR 9 ✓, RT 10 ✓ [1]; QR 11 ✗ (cycle Q–R–T), RS 12 ✗ (cycle R–S–T) [1]; SU 13 ✓ [1]. Five edges, weight **47** [1]
*Examiner insight:* Rejected edges must appear in the order; listing only the final tree loses the method marks.

**7.** AB 6 [1], BC 5 [1], CD 7 [1], CE 8 then EF 4 [1]; total **30 (3000 dollars)** [1]
*Examiner insight:* EF 4 is the cheapest edge but cannot be chosen before E joins the tree; Prim's order is not weight order.

**8.** Total = 4 + 6 + 5 + 6 + 12 = 33 [1]. Odd vertices: B and D [1]. Shortest B to D: B–A–D = 4 + 6 = 10 [1], shorter than BD 12 [1]. Route = 33 + 10 = **43 (430 m)**, repeating **AB and AD** [1]
*Examiner insight:* Using the direct edge BD gives 45; the accuracy mark is lost and there is no follow-through for the wrong shortest path.

**9. (a)** **53 km** [1]
**(b)** **B, C, E, F** [1]
**(c)** Each pass through a vertex uses two edges, so a closed route using each edge once needs all even degrees [1]; repeating a path between two odd vertices adds 1 to each end's degree, making both even [1]
**(d)** BC + EF = 6 + 8 = 14 [1]; BE + CF = 9 (B–C–E) + 11 (C–E–F) = 20 [1]; BF + CE = 10 + 3 = 13 [1]
**(e)** 53 + 13 = **66 km** [1], repeating **BF and CE** [1]
*Examiner insight:* All three pairings must appear with totals; choosing 13 without the other two shows no justification of the choice.

**10. (a)** AD = 15 via A–B–D [1]; BE = 10 via B–C–E, less than 12 [1]

| | A | B | C | D | E |
|---|---|---|---|---|---|
| A | – | 8 | 5 | 15 | 9 |
| B | 8 | – | 6 | 7 | 10 |
| C | 5 | 6 | – | 13 | 4 |
| D | 15 | 7 | 13 | – | 11 |
| E | 9 | 10 | 4 | 11 | – |

[1]
**(b)** A–C 5, C–E 4, E–B 10 [1]; B–D 7, D–A 15 [1]; upper bound **41 minutes** [1]
**(c)** MST of B, C, D, E: CE 4, BC 6, BD 7 = 17 [1]; two shortest from A: 5 + 8 [1]; lower bound **30 minutes** [1]
**(d)** **33 ≤ T ≤ 41** [1]
*Examiner insight:* Keeping BE = 12 sends the tour E–D instead of E–B and gives 35, not 41; the (a) error then costs accuracy marks in (b), with method marks still available.

**11. (a)** Sum of entries 12, so **6** edges [1]
**(b)** Entry (i, i) of A² counts walks of length 2 from i back to i [1]; in a simple graph each is out and back along one edge, so there is one per edge at i [1]
**(c)** (A⁴)₁₁ = **8** [1]
**(d)** 6 − (5 − 1) = **2** [1]
**(e)** Degrees 2, 3, 3, 2, 2; column j has 1/deg(j) in rows adjacent to j [1]; solve Ts = s with entries summing to 1 [1]; s = **(1/6, 1/4, 1/4, 1/6, 1/6)** [1]
*Examiner insight:* An exact answer is accepted, and 3 s.f. decimals (0.167, 0.25, …) are too; truncated values such as 0.16 lose the accuracy mark.

## Where marks are usually lost

- Kruskal or Prim answers without the order of selection (and Kruskal's rejected edges).
- Transition matrices with rows, not columns, summing to 1.
- Using Aᵏ alone for "walks of length at most k".
- Taking a direct edge as the shortest path between odd vertices.
- Showing only the winning pairing of four odd vertices.
- Skipping the table of least distances before TSP algorithms.
- Deleted vertex: adding only one edge from the deleted vertex.
- Swapping upper and lower bounds in the final interval.

## Next steps

- [Graph theory revision notes](/resources/ib-dp-mathematics-ai-hl-graph-theory-revision-notes/).
- [Graph theory study guide](/resources/ib-dp-mathematics-ai-hl-graph-theory/).
- [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/).
- [Printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/).
- [All free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 — sections AHL 3.14, 3.15 and 3.16.
