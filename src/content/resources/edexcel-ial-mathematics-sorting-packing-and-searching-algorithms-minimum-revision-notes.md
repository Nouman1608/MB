---
title: "Pearson Edexcel International Advanced Level Mathematics: Sorting, packing, spanning trees, Dijkstra (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths D1 Algorithms Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on bin packing, sorting, binary search, Prim, Kruskal and Dijkstra for Edexcel IAL Mathematics Unit D1, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Unit D1 sections 1 and 2 (topics 1.1, 1.2, 2.1 and 2.2) of Pearson's International Advanced Subsidiary/Advanced Level specification for Mathematics, Further Mathematics and Pure Mathematics (YMA01), Issue 3, April 2019. The specification makes Unit D1 optional for IAS and IAL Mathematics and Further Mathematics. Read the [study guide](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum/) when you need the reasoning or longer examples.

Then try the [practice questions](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-practice/). The [course hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [diagnostics](/diagnostics/) help you plan.

## Key facts

| Item | Rule |
|---|---|
| Middle item, N items | Position (N + 1)/2 if N is odd; (N + 2)/2 if N is even (glossary rule, must be used) |
| Lower bound, bin packing | Total size ÷ capacity, rounded up |
| Spanning tree, n vertices | n − 1 edges, connected, no cycles |
| Minimum spanning tree | Spanning tree of least total weight (minimum connector) |
| Quick sort pivot | The middle item of the list |
| Order of an algorithm | Not expected |

Show how each step of an algorithm was applied. Matrix representation is expected for Prim, but matrix manipulation is not required.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--01-middle-item.webp" width="900" height="830" alt="A row of nine numbered boxes has the 5th highlighted as the middle, from (9 + 1) / 2. A row of six has the 4th highlighted, from (6 + 2) / 2, and the 3rd is marked as not the middle. The same rule is used for every list." loading="lazy">
  <figcaption>For N items the middle is position (N + 1) / 2 if N is odd and (N + 2) / 2 if N is even.</figcaption>
</figure>


## 1.1 Implementing an algorithm

1. Write one column per variable.
2. Follow the steps exactly, adding a row each time a value changes.
3. Note which step asks for output, and what condition ends the loop.

**Reminder.** Set A = 1, B = 1. Repeat four times: C = A + B, A = B, B = C. Output B.

| A | B | C |
|---|---|---|
| 1 | 1 | |
| 1 | 2 | 2 |
| 2 | 3 | 3 |
| 3 | 5 | 5 |
| 5 | 8 | 8 |

Output **8**.

Middle positions: N = 7 gives the 4th; N = 12 gives the 7th; N = 9 gives the 5th; N = 6 gives the 4th.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--02-flow-chart-trace.webp" width="900" height="760" alt="A flow chart tests whether X equals Y, outputting X if so, otherwise subtracting the smaller from the larger and looping back. The trace table for X = 72, Y = 30 runs 72 30, 42 30, 12 30, 12 18, 12 6, 6 6. The output is 6, the highest common factor." loading="lazy">
  <figcaption>A flow chart and its trace table show the same algorithm finding the highest common factor of 72 and 30.</figcaption>
</figure>


## 1.2 Bin packing

- **First-fit:** items in the order given; each goes in the first bin with room.
- **First-fit decreasing:** sort into decreasing order, then first-fit.
- Compare your answer with the lower bound. If they match, you cannot do better.

**Reminder.** Capacity 12; items 7, 4, 9, 5, 6, 3, 8 (total 42, lower bound 4). Sorted: 9, 8, 7, 6, 5, 4, 3.

```
Bin 1: 9, 3    (12)
Bin 2: 8, 4    (12)
Bin 3: 7, 5    (12)
Bin 4: 6
```

Four bins, so it is optimal. First-fit decreasing is not always optimal, so a bound is worth checking.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--03-bin-packing.webp" width="900" height="1020" alt="Items totalling 71 need at least 4 bins of capacity 20. First-fit in the order given needs 5 bins. First-fit decreasing, after sorting, packs 13+7, 12+6, 11+5+4 and 10+3 into 4 bins, which equals the lower bound." loading="lazy">
  <figcaption>Sorting the items first lets first-fit decreasing reach the lower bound of 4 bins where first-fit needed 5.</figcaption>
</figure>


## 1.2 Bubble sort

- Compare neighbours from the left; swap if the pair is the wrong way round.
- Each pass sends the largest remaining item to the end.
- Stop after a pass with no swaps.
- Record the list after every pass, and the swaps.

**Reminder.** Sort 31, 12, 25, 8, 19 into ascending order.

```
Pass 1: 12 25 8 19 31   (4 swaps)
Pass 2: 12 8 19 25 31   (2 swaps)
Pass 3: 8 12 19 25 31   (1 swap)
Pass 4: 8 12 19 25 31   (0 swaps)
```

Comparing every pair each pass, that is 4 × 4 = 16 comparisons and 7 swaps. Questions may use a version that skips items already in place, so check the wording.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--04-bubble-sort.webp" width="900" height="846" alt="Each pass compares adjacent pairs and swaps those out of order, so the largest unsorted item reaches its final place. Passes make 5, 3, 2 and 0 swaps, and the sort stops after the pass with no swaps. That is 24 comparisons and 10 swaps in all." loading="lazy">
  <figcaption>Bubble sort repeats passes until a pass has no swaps: here 4 passes, 24 comparisons and 10 swaps.</figcaption>
</figure>


## 1.2 Quick sort

- Pivot is the middle item of each sublist.
- Smaller items go left and larger items go right, in their original order.
- Pivots are fixed. Stop when every sublist has one item or none.

**Reminder.** Sort 21, 5, 34, 13, 8, 26. N = 6, so the pivot is the 4th item, 13.

```
21 5 34 13 8 26     pivot 13  ->  [5 8] 13 [21 34 26]
[5 8]               pivot 8   ->  [5] 8
[21 34 26]          pivot 34  ->  [21 26] 34
[21 26]             pivot 26  ->  [21] 26
Sorted: 5 8 13 21 26 34
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--05-quick-sort.webp" width="900" height="870" alt="Round 1 uses pivot 55 to split the list into smaller items on the left and larger on the right, keeping original order. Rounds 2 and 3 repeat on each sublist with pivots 29 and 71, then 8 and 36. Every item ends in its final place, giving 8 17 29 36 48 55 63 71." loading="lazy">
  <figcaption>Quick sort fixes one pivot per sublist in each round, always taking the middle item as the pivot.</figcaption>
</figure>


## 1.2 Binary search

- The list must be in order.
- Test the middle item. If the target is larger, keep only the items after it; if smaller, only those before it. The middle item is discarded.
- If the list empties, the target is absent.

**Reminder.** List 3, 8, 14, 20, 27, 31, 36, 42. Search for 31: N = 8, so the 5th item is 27, and 31 is larger. The list is 31, 36, 42, whose 2nd item is 36, and 31 is smaller. The list is 31, which matches. **Found** after three tests. Searching for 29 also reaches the list 31, and 29 is smaller, which leaves nothing, so **29 is not present**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--06-binary-search.webp" width="900" height="950" alt="In an ordered list of ten names, each step picks the middle item and discards the middle and the wrong side. Isle is found in four steps: Hart, Moss, Lark, Isle. Searching for Kern follows the same steps, but after Isle no items remain, so Kern is not in the list." loading="lazy">
  <figcaption>Binary search halves an ordered list each step until the target is found or no items remain.</figcaption>
</figure>


## 2.1 Minimum spanning trees

| | Kruskal | Prim |
|---|---|---|
| Works from | The sorted list of all edges | One start vertex |
| Each step | Take the cheapest edge not forming a cycle | Take the cheapest edge from the tree to a new vertex |
| Intermediate picture | Several pieces that join up | One tree that grows |
| Stop | n − 1 edges | All vertices in the tree |
| Final weight | The same minimum, whichever you use | |

**Prim in matrix form.**

1. Number the start column 1 and cross out its row.
2. In the numbered columns, look at the uncrossed rows and circle the smallest entry.
3. Give the next number to the column of the vertex whose row holds that entry, and cross out that row.
4. Repeat until all rows are crossed out. The circled entries are the tree.

**Network from matrix.** Draw the vertices, then one edge for each entry above the diagonal. **Matrix from network.** Write the weight in both the ij and ji cells, and a dash where there is no edge.

**Reminder.** The rows of a matrix for W, X, Y, Z read: W: –, 5, –, 9; X: 5, –, 3, 6; Y: –, 3, –, 8; Z: 9, 6, 8, –. The edges are WX 5, WZ 9, XY 3, XZ 6 and YZ 8, and there is no edge WY. Kruskal accepts XY 3, WX 5 and XZ 6, then rejects YZ 8 and WZ 9. Prim from W takes WX 5, XY 3, XZ 6. Both give a tree of weight **14** with 3 edges.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--07-minimum-spanning-tree.webp" width="900" height="970" alt="A six-vertex network has a minimum spanning tree shown by thick edges CD 7, EF 8, AC 9, DE 10 and BC 11. Kruskal takes them cheapest first and rejects CE 13 as it closes a cycle. Prim from A adds AC, CD, DE, EF, CB. Both give total weight 45." loading="lazy">
  <figcaption>Kruskal and Prim give the same minimum spanning tree, of total weight 45.</figcaption>
</figure>


## 2.2 Dijkstra's algorithm

1. Start vertex: order 1, final label 0.
2. For each neighbour not yet final, compute (final label + edge). Record it only if it is smaller than the working value there.
3. Make the smallest working value anywhere final; give it the next order number.
4. Stop when the target is final.
5. Work back from the target: an edge belongs to the route if the end label minus the weight equals the start label.

**Reminder.** P is final with label 12, the edge PQ is 7, and Q has working value 21. Then 12 + 7 = 19 < 21, so Q's working value becomes 19.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum--08-dijkstra.webp" width="900" height="880" alt="In the network each vertex box shows its order of labelling and final label: S 1|0, B 2|4, A 3|6, C 4|9, E 5|13, D 6|14, T 7|21. Working back from T gives D, A, S, so the shortest route S, A, D, T is highlighted, with length 21." loading="lazy">
  <figcaption>Dijkstra labels vertices in order of distance from S; working back from T gives the route S, A, D, T of length 21.</figcaption>
</figure>


## Must-know distinctions

- **Tree or graph:** a tree has no cycles and n − 1 edges.
- **Prim or Kruskal:** Prim grows one tree; Kruskal may build separate pieces.
- **Working or final label:** only final labels count in the route.
- **First-fit or first-fit decreasing:** the second sorts first, so it needs a sort before packing.
- **Quick sort or bubble sort:** quick sort fixes a pivot each step; bubble sort fixes the largest item each pass.

## Quick self-test

1. Which position is the middle item of a list of 15 items? Of 18 items?
2. Set S = 0. While N > 0, add N to S and then subtract 2 from N. Input N = 7. What is S at the end?
3. Items total 83 and the bins hold 25. What is the lower bound?
4. Capacity 10; items 6, 5, 4, 7, 3, 2 in that order. Pack them by first-fit.
5. Write the list 9, 4, 7, 2, 8 after one pass of bubble sort.
6. Use the middle-item rule: what is the first pivot for 16, 3, 22, 9, 14, 7, and what are the two sublists?
7. A sorted list has 12 items. Which item does binary search test first, and how many items remain if the target is larger?
8. How many edges does a minimum spanning tree of a network with 9 vertices have?
9. Kruskal on AB 4, BC 6, AC 5, CD 3, BD 8: which edges are chosen, and what is the weight?
10. Why can binary search not be used on 12, 3, 9, 20, 5?

### Answers

1. 8th, then 10th.
2. 7 + 5 + 3 + 1 = **16**.
3. 83 ÷ 25 = 3.32, so **4 bins**.
4. Bin 1: 6, 4. Bin 2: 5, 3, 2. Bin 3: 7. **3 bins**.
5. **4, 7, 2, 8, 9**.
6. N = 6, so the 4th item, **9**. Sublists **[3, 7]** and **[16, 22, 14]**.
7. The 7th item; **5** items remain.
8. **8** edges.
9. CD 3, AB 4, AC 5 are accepted. BC 6 would close a cycle, so BD 8 is rejected too. Weight **12**.
10. The list is not in order.

## Where marks are usually lost

- Taking the wrong middle item when N is even.
- Not showing the list after each pass or each pivot, so a single slip cannot be located.
- Swapping the order of items within a quick-sort sublist.
- Keeping the pivot or tested item in the next binary-search list.
- Starting a new bin in first-fit before checking every earlier bin.
- Forgetting to sort first in first-fit decreasing.
- In Kruskal, accepting an edge that joins two vertices already connected.
- Writing Dijkstra working values without order numbers, or not listing the route.
- Giving a route length without stating the route.

## Frequently asked questions

**What is the difference between Prim's and Kruskal's algorithms?**
Kruskal's algorithm works from a sorted list of all edges, taking the cheapest edge that does not form a cycle. Prim's algorithm grows one tree from a start vertex, adding the cheapest edge to a new vertex each time.

**How many edges does a minimum spanning tree have?**
A spanning tree on n vertices has n − 1 edges and no cycles.

**Why can binary search only be used on an ordered list?**
Binary search discards half of the list at each step by comparing the target with the middle item, which only works if the items are in order.

**How do you find the route after Dijkstra's algorithm?**
Work back from the target: an edge is on the route if the final label at its end minus the edge weight equals the final label at its start.

**Is Prim's algorithm in matrix form required in Edexcel IAL D1?**
Yes. For Unit D1 of the Edexcel IAL Mathematics specification (YMA01), matrix representation is expected for Prim's algorithm.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3, April 2019, published by Pearson Education Limited. Unit D1: Decision Mathematics 1, sections 1 and 2, and the Glossary for D1.
