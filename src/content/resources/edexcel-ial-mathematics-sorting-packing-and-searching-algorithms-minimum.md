---
title: "Pearson Edexcel International Advanced Level Mathematics: Sorting, packing, spanning trees, Dijkstra (YMA01)"
seoTitle: "Edexcel IAL Maths D1 Algorithms and Graphs Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Sorting, packing and searching algorithms, minimum spanning trees and Dijkstra's algorithm"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 169
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-on-graphs-edexcel-alevel-maths"
description: "Study guide to flow charts, bin packing, bubble and quick sort, binary search, Prim, Kruskal and Dijkstra for Edexcel IAL Mathematics Unit D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide is written against Pearson's International Advanced Subsidiary/Advanced Level specification for Mathematics, Further Mathematics and Pure Mathematics (YMA01), Issue 3, April 2019. It covers Unit D1 section 1 (Algorithms, topics 1.1 and 1.2) and section 2 (Algorithms on graphs, topics 2.1 and 2.2). The specification makes Unit D1 optional for IAS Mathematics, IAS Further Mathematics, IAL Mathematics and IAL Further Mathematics.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-practice/). The [course hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) show where the unit sits, and the [diagnostics](/diagnostics/) help you find weak spots. The rest of D1 is not covered here.

## What this unit covers

| Topic | What you must be able to do |
|---|---|
| 1.1 | Follow an algorithm given as a flow chart or as text; use the glossary rule for the middle item |
| 1.2 | Bin packing, bubble sort, quick sort (middle-item pivot), binary search |
| 2.1 | Minimum spanning tree by Prim (network and matrix form) and Kruskal; draw a network from a matrix and write a matrix from a network |
| 2.2 | Dijkstra's algorithm for the shortest path |

The specification does not expect the order of an algorithm, and it requires clear working that shows how each algorithm was applied.

## 1.1 Algorithms

An algorithm is a finite list of unambiguous instructions that ends with an output. A flow chart shows the steps as boxes: a rectangle for an instruction, a diamond for a yes/no decision, arrows for the order. To implement one, keep a **trace table** with a column for each variable and a new row each time a value changes.

**The middle item.** The glossary defines the middle of a list of N items as position (N + 1)/2 if N is odd and (N + 2)/2 if N is even. So N = 9 gives the 5th item and N = 6 gives the 4th. The specification says this method must be used whenever you find the middle of any list.

**Worked example.** Algorithm in text:

```
1. Input X and Y
2. If X = Y, output X and stop
3. If X > Y, replace X by X - Y; otherwise replace Y by Y - X
4. Go to step 2
```

Input X = 72, Y = 30.

| X | Y |
|---|---|
| 72 | 30 |
| 42 | 30 |
| 12 | 30 |
| 12 | 18 |
| 12 | 6 |
| 6 | 6 |

X = Y, so the output is **6**. The algorithm finds the highest common factor of the two inputs.

## 1.2 Bin packing

You have items of given sizes and bins of fixed capacity, and you want few bins. First find the **lower bound**: total size ÷ capacity, rounded up. No packing can use fewer bins.

- **First-fit:** take the items in the order given. Put each in the first bin with room, starting a new bin only when none has room.
- **First-fit decreasing:** sort the items into decreasing order first, then apply first-fit.

The specification does not list bin-packing methods, so use the one the question states.

**Worked example.** Capacity 20; items in order 4, 6, 7, 12, 5, 3, 10, 13, 11. The total is 71 and 71 ÷ 20 = 3.55, so the lower bound is 4 bins.

First-fit: 4, 6, 7 go in bin 1 (17). 12 does not fit there, so bin 2. 5 does not fit bin 1 (22) and goes into bin 2 (17). 3 fits bin 1 (20). 10 fits neither bin, so bin 3. 13 does not fit bin 3 (23), so bin 4. 11 fits none of bins 3 and 4, so bin 5.

```
Bin 1: 4, 6, 7, 3   (20)
Bin 2: 12, 5        (17)
Bin 3: 10
Bin 4: 13
Bin 5: 11
```

That is **5 bins**.

First-fit decreasing: the sorted list is 13, 12, 11, 10, 7, 6, 5, 4, 3.

```
Bin 1: 13, 7        (20)
Bin 2: 12, 6        (18)
Bin 3: 11, 5, 4     (20)
Bin 4: 10, 3        (13)
```

That is **4 bins**, equal to the lower bound, so it cannot be improved.

## 1.2 Bubble sort

Compare adjacent items from the left and swap any pair that is in the wrong order. After a pass, the largest unsorted item has reached its final place. Repeat until a pass has no swaps. (This guide compares every pair in each pass. Some questions stop comparing the items already in place. Follow the version stated.)

**Worked example.** Sort 27, 14, 35, 9, 22, 18, 31 into ascending order.

```
Pass 1: 14 27 9 22 18 31 35    (5 swaps)
Pass 2: 14 9 22 18 27 31 35    (3 swaps)
Pass 3: 9 14 18 22 27 31 35    (2 swaps)
Pass 4: 9 14 18 22 27 31 35    (0 swaps, stop)
```

There were 4 passes of 6 comparisons, so 24 comparisons and 10 swaps in all.

## 1.2 Quick sort

The specification says the pivot should be chosen as the middle item of the list. Method:

1. Choose the middle item as the pivot.
2. Write the items smaller than the pivot to its left and the larger items to its right, keeping each group in its original order.
3. The pivot is now in its final position. Repeat on each sublist with more than one item.

**Worked example.** Sort 48, 17, 63, 29, 55, 8, 36, 71. N = 8, so the pivot is the 5th item, 55.

```
48 17 63 29 55 8 36 71   pivot 55
[48 17 29 8 36] 55 [63 71]
[48 17 29 8 36]  3rd item, pivot 29  ->  [17 8] 29 [48 36]
[17 8]   2nd item, pivot 8   ->  8 [17]
[48 36]  2nd item, pivot 36  ->  36 [48]
[63 71]  2nd item, pivot 71  ->  [63] 71
Sorted: 8 17 29 36 48 55 63 71
```

## 1.2 Binary search

A binary search needs a list that is already in order. Find the middle item. If it is the target, stop. Otherwise discard the middle item and everything on the wrong side, and repeat on what is left. If nothing is left, the target is not in the list.

**Worked example.** The list is Bolt, Cairn, Dune, Fern, Glen, Hart, Isle, Lark, Moss, Pike. Search for Isle. N = 10 gives the 6th item.

```
Bolt ... Pike  (10 items)  6th = Hart.  Isle is after Hart.
Isle Lark Moss Pike        3rd = Moss.   Isle is before Moss.
Isle Lark                  2nd = Lark.   Isle is before Lark.
Isle                       1st = Isle.   Found.
```

Searching for Kern follows the same steps. At the last step Kern is after Isle, so no items remain: **Kern is not in the list**.

## 2.1 Networks, matrices and minimum spanning trees

A graph has vertices joined by edges. A network is a graph whose edges carry weights. A tree is a connected graph with no cycles. A spanning tree includes every vertex, so with n vertices it has n − 1 edges. A **minimum spanning tree** (minimum connector) has the smallest possible total weight.

**Matrix and network.** Row i, column j holds the weight of the edge between vertices i and j, with a dash where there is none. The matrix is symmetric for an undirected network. To draw a network from a matrix, place the vertices and draw one edge for each entry above the diagonal.

| | A | B | C | D | E | F |
|---|---|---|---|---|---|---|
| A | – | 14 | 9 | – | 18 | – |
| B | 14 | – | 11 | 16 | – | – |
| C | 9 | 11 | – | 7 | 13 | – |
| D | – | 16 | 7 | – | 10 | 15 |
| E | 18 | – | 13 | 10 | – | 8 |
| F | – | – | – | 15 | 8 | – |

The edges are AB 14, AC 9, AE 18, BC 11, BD 16, CD 7, CE 13, DE 10, DF 15 and EF 8.

### Kruskal's algorithm

List the edges in increasing order of weight. Take each in turn, rejecting any that completes a cycle. Stop when you have n − 1 edges.

CD 7 accept, EF 8 accept, AC 9 accept, DE 10 accept (joins {A, C, D} to {E, F}), BC 11 accept. That is 5 edges for 6 vertices, so stop. The next edge, CE 13, would close the cycle C, D, E, so it would have been rejected.

Total weight 7 + 8 + 9 + 10 + 11 = **45**.

### Prim's algorithm, matrix form

Prim grows one tree from a start vertex, always adding the cheapest edge from the tree to a vertex not yet in it. In the matrix, start at A:

1. Write 1 above column A and cross out row A.
2. Among the entries in numbered columns and uncrossed rows, choose the smallest. Circle it.
3. Write the next number above the column of the row where you circled, and cross out that row.
4. Repeat until every row is crossed out.

Working: from A the options are B 14, C 9, E 18, so circle 9 (row C). Now columns A and C: the best is D 7. Then the options are B 11, E 10 (from D) and F 15, so choose E 10. Then F 8 (from E). The last vertex is B, joined by 11 to C.

The edges in order are AC 9, CD 7, DE 10, EF 8, CB 11, total **45**, the same tree as Kruskal gave.

## 2.2 Dijkstra's algorithm

Dijkstra finds the shortest path from a start vertex to every other vertex, assuming edge weights are not negative. Give each vertex a box with its order of labelling, its final label and its working values. Start with the start vertex labelled 0 and order 1.

1. From the vertex just labelled, work out (its final label + edge weight) for each neighbour that is not yet final. Write it as a working value only if it is lower than what is already there.
2. Choose the vertex with the smallest working value anywhere. Make it final and give it the next order number.
3. Repeat until the target is final.
4. To find the route, work back from the target: an edge is on the route if final label of end minus the edge weight equals the final label of its start.

**Worked example.** The edges are SA 6, SB 4, SC 10, AB 3, AD 8, BC 5, BE 10, CE 4, DE 2, DT 7 and ET 9. Find the shortest route from S to T.

| Vertex | Order | Final label | Working values |
|---|---|---|---|
| S | 1 | 0 | |
| B | 2 | 4 | |
| A | 3 | 6 | |
| C | 4 | 9 | 10, 9 |
| E | 5 | 13 | 14, 13 |
| D | 6 | 14 | |
| T | 7 | 21 | 22, 21 |

From S the working values are A 6, B 4, C 10. B is smallest, so it is final. From B: C becomes 4 + 5 = 9, E 14. A (6) is next; it offers D 14 only. Then C (9) improves E to 13. E (13) offers D 15, which is no better, and T 22. D (14) improves T to 21. T is final.

Work back: 21 − 7 = 14 is D, 14 − 8 = 6 is A, 6 − 6 = 0 is S. The shortest route is **S, A, D, T**, length **21**.

## Common errors

- Using the lower item in an even-length list as the middle. For N = 6 the middle is the 4th, not the 3rd.
- In first-fit, starting a new bin and then never going back to earlier bins with space left.
- Stopping bubble sort before a pass with no swaps has confirmed the order.
- In quick sort, re-ordering items within a sublist instead of keeping their original order.
- In binary search, keeping the middle item in the next list, or searching an unsorted list.
- Accepting a Kruskal edge that joins two vertices already in the same component.
- In Prim, choosing the smallest edge in the whole network instead of the smallest leaving the current tree.
- In Dijkstra, making a vertex final too early, or overwriting a working value with a larger one.

## Next steps

Condense this with the [revision notes](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-revision-notes/), then try the [practice questions](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-practice/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3, April 2019, published by Pearson Education Limited. Unit D1: Decision Mathematics 1, sections 1 and 2, and the Glossary for D1.
