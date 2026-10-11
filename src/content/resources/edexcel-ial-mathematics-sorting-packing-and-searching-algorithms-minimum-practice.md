---
title: "Pearson Edexcel International Advanced Level Mathematics: Sorting, packing, spanning trees, Dijkstra (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths D1 Algorithms Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers on bin packing, sorting, binary search, Prim, Kruskal and Dijkstra for Edexcel IAL Mathematics Unit D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow Unit D1 sections 1 and 2 (algorithms, then algorithms on graphs) in Pearson's International Advanced Subsidiary/Advanced Level specification (YMA01), Issue 3, April 2019. The specification makes Unit D1 optional for IAS and IAL Mathematics and Further Mathematics. Use the middle-item rule from the specification glossary throughout, and a middle-item pivot in quick sort.

Revise first with the [study guide](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum/) or the [revision notes](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-revision-notes/). Links to the [course hub](/boards/edexcel/a-level/mathematics/), the [checklist](/checklists/edexcel/a-level/mathematics/) and the [diagnostics](/diagnostics/) are at the end.

## Questions

**1.** An algorithm: step 1, input x; step 2, set c = 0; step 3, if x is even replace x by x/2, otherwise replace x by 3x + 1; step 4, add 1 to c; step 5, if x = 1 output c and stop, otherwise go to step 3.

**(a)** Trace the algorithm for x = 6, showing x and c after each pass. **[3]**
**(b)** State the output. **[1]**

**2.** An algorithm: step 1, input the numbers a1, a2, ..., an; step 2, set M = a1 and k = 2; step 3, if ak > M replace M by ak; step 4, add 1 to k; step 5, if k ≤ n go to step 3; step 6, output M.

**(a)** Trace it for the list 14, 9, 22, 17, 22, 6. **[3]**
**(b)** State what the algorithm finds. **[1]**

**3.** The sorted list is 12, 19, 23, 31, 38, 44, 52, 58, 63, 71, 85.

**(a)** Use binary search to find 58, showing the list and the item tested at each stage. **[3]**
**(b)** Use binary search to show that 40 is not in the list. **[3]**

**4.** Bins hold 30 units. The items are 10, 6, 17, 5, 9, 21, 14, 8, 19.

**(a)** Find the lower bound for the number of bins. **[2]**
**(b)** Use first-fit, in the order given. **[2]**
**(c)** Use first-fit decreasing, and say whether the result is optimal. **[3]**

**5.** Use bubble sort to put 58, 41, 66, 23, 37, 50 into ascending order. Write the list after each pass, and state the total number of swaps. **[5]**

**6.** Use quick sort, with the middle item as pivot, to put 19, 47, 40, 12, 53, 25, 34, 61, 8 into ascending order. **[5]**

**7.** The table shows the weights of the edges between five vertices. A dash means there is no edge.

| | P | Q | R | S | T |
|---|---|---|---|---|---|
| P | – | 17 | 12 | – | 20 |
| Q | 17 | – | 9 | 15 | – |
| R | 12 | 9 | – | 14 | 11 |
| S | – | 15 | 14 | – | 8 |
| T | 20 | – | 11 | 8 | – |

**(a)** List the edges of the network, with weights. **[2]**
**(b)** Use Prim's algorithm in matrix form, starting at P, and state the order in which the edges are added. **[4]**
**(c)** State the weight of the minimum spanning tree. **[1]**

**8.** A network has edges AB 23, AC 17, BC 12, BD 20, CD 24, CE 26, DE 9, DF 18, EF 14, EG 21 and FG 11.

**(a)** Use Kruskal's algorithm to find a minimum spanning tree. List the edges in the order considered, saying whether each is accepted or rejected. **[5]**
**(b)** State the weight of the tree. **[1]**

**9.** A network has edges AB 7, AC 12, AD 5, BC 4, BE 9, CE 6, CF 11, DB 3, DF 14, EG 8 and FG 7.

**(a)** Use Dijkstra's algorithm to find the shortest distance from A to G, showing order of labelling, final labels and working values. **[5]**
**(b)** State the route and its length. **[2]**
**(c)** The edge BE is closed. Find the shortest route from A to G now, with its length. **[2]**

**10.** A courier has ten parcels weighing 13, 12, 14, 11, 5, 8, 6, 16, 7 and 4 kg. A van carries at most 24 kg.

**(a)** Use quick sort, with the middle item as pivot, to put the weights into descending order. **[5]**
**(b)** Use first-fit decreasing to allocate the parcels to vans. **[2]**
**(c)** Show that the lower bound is 4 vans, and that 4 vans can be enough. **[2]**

## Answers

**1. (a)** x = 6 gives 3 [1], then 10, 5, 16, 8, 4, 2 [1], then 1; c counts 1, 2, 3, 4, 5, 6, 7, 8 [1]
**(b)** The output is **8** [1]
*Examiner insight:* a trace table that shows each variable's new value on every pass lets a slip be found, and the final output should be stated separately from the last row.

**2. (a)** M starts at 14. k = 2: 9 is not larger [1]. k = 3: 22 > 14, so M = 22 [1]. k = 4, 5, 6: 17, 22 and 6 are not larger than 22, so M stays 22 and the loop ends at k = 7 [1]
**(b)** It finds the **largest** of the numbers; the output is 22 [1]
*Examiner insight:* a question asking what an algorithm does wants its purpose in words, not only the value it outputs for one input.

**3. (a)** 11 items, so the 6th item, 44; 58 is larger [1]. List 52, 58, 63, 71, 85: the 3rd item, 63; 58 is smaller [1]. List 52, 58: the 2nd item, 58, found [1]
**(b)** Test 44; 40 is smaller, keep 12, 19, 23, 31, 38 [1]. Test the 3rd item, 23; 40 is larger, keep 31, 38 [1]. Test the 2nd item, 38; 40 is larger, nothing remains, so **40 is not in the list** [1]
*Examiner insight:* write out the remaining list at each stage, and for an absent item say that the search ends because no items remain.

**4. (a)** Total = 109 [1]. 109 ÷ 30 = 3.63, so **4 bins** [1]
**(b)** Bin 1: 10, 6, 5, 9 (30). Bin 2: 17, 8. Bin 3: 21. Bin 4: 14. Bin 5: 19 [1]. That is **5 bins** [1]
**(c)** Sorted: 21, 19, 17, 14, 10, 9, 8, 6, 5 [1]. Bin 1: 21, 9. Bin 2: 19, 10. Bin 3: 17, 8, 5. Bin 4: 14, 6 [1]. This is **4 bins**, which equals the lower bound, so it is optimal [1]
*Examiner insight:* give the lower bound with its calculation and compare it with the packing; "optimal" is only safe when the two numbers match.

**5.** Pass 1: 41, 58, 23, 37, 50, 66 [1]. Pass 2: 41, 23, 37, 50, 58, 66 [1]. Pass 3: 23, 37, 41, 50, 58, 66 [1]. Pass 4: no swaps, so stop [1]. Swaps: 4 + 3 + 2 = **9** [1]
*Examiner insight:* the list after every pass, including the final pass with no swaps, shows that you applied the stopping condition.

**6.** N = 9, pivot the 5th item, 53: 19, 47, 40, 12, 25, 34, 8 | 53 | 61 [1]. N = 7, pivot 12: 8 | 12 | 19, 47, 40, 25, 34 [1]. N = 5, pivot 40: 19, 25, 34 | 40 | 47 [1]. N = 3, pivot 25: 19 | 25 | 34 [1]. Sorted list **8, 12, 19, 25, 34, 40, 47, 53, 61** [1]
*Examiner insight:* name the pivot at each stage and keep sublists in their original order; the middle position is the usual slip.

**7. (a)** PQ 17, PR 12, PT 20, QR 9, QS 15, RS 14, RT 11, ST 8 [2]
**(b)** Number column P as 1 and cross out row P. The smallest entry in column P is 12, in row R [1]. Number column R as 2, cross out row R; the smallest entry in columns P and R is 9 (row Q) [1]. Then 11 (row T) [1]. Then 8 (row S, from column T). The order is PR, RQ, RT, TS [1]
**(c)** 12 + 9 + 11 + 8 = **40** [1]
*Examiner insight:* show the order of selection with numbers above the columns or a clear list; show the method as well as the total, since a bare total gives no evidence of how you reached it.

**8. (a)** DE 9 accept [1]. FG 11 accept, BC 12 accept [1]. EF 14 accept, AC 17 accept [1]. DF 18 reject, since D and F are already connected through E [1]. BD 20 accept, which gives 6 edges for 7 vertices, so stop [1]
**(b)** 9 + 11 + 12 + 14 + 17 + 20 = **83** [1]
*Examiner insight:* give a reason for each rejection (it would form a cycle) and say why you stop; both show the algorithm was understood.

**9. (a)**

| Vertex | Order | Final | Working |
|---|---|---|---|
| A | 1 | 0 | |
| D | 2 | 5 | |
| B | 3 | 7 | |
| C | 4 | 11 | 12, 11 |
| E | 5 | 16 | |
| F | 6 | 19 | |
| G | 7 | 24 | 24 |

Orders and final labels for A, D, B [1]. C improved from 12 to 11 via B [1]. E 16 (via B) and F 19 (via D) [1]. G 24 via E, with 26 via F not used [1]. All seven vertices labelled in the right order [1]
**(b)** Work back: 24 − 8 = 16 (E), 16 − 9 = 7 (B), 7 − 7 = 0 (A). The route is **A, B, E, G** [1], length **24** [1]
**(c)** Without BE, E is 11 + 6 = 17 via C, so G is 17 + 8 = 25. Via F it is 26. The route is **A, B, C, E, G** [1], length **25** [1]
*Examiner insight:* state the route as well as its length, and keep every working value, including those replaced, so the update steps can be followed.

**10. (a)** N = 10, pivot the 6th item, 8: 13, 12, 14, 11, 16 | 8 | 5, 6, 7, 4 [1]. Pivot 14 (3rd): 16 | 14 | 13, 12, 11, and pivot 12: 13 | 12 | 11 [1]. Pivot 7 (3rd): nothing larger | 7 | 5, 6, 4 [1]. Pivot 6, then 4: 5 and 4 follow [1]. Sorted: **16, 14, 13, 12, 11, 8, 7, 6, 5, 4** [1]
**(b)** Van 1: 16, 8. Van 2: 14, 7. Van 3: 13, 11. Van 4: 12, 6, 5. Van 5: 4 [1]. That is **5 vans** [1]
**(c)** Total 96 and 96 ÷ 24 = 4, so the lower bound is **4** [1]. For example 16 + 8, 14 + 6 + 4, 13 + 11, 12 + 7 + 5 each total 24, so **4 vans** can be enough [1]
*Examiner insight:* in a linked question, label which algorithm each part uses, and note that first-fit decreasing can miss the best packing, which a different grouping then shows.

## Where marks are usually lost

- Using the wrong middle item for a list with an even number of items.
- Showing only the final sorted list and not the intermediate lists.
- Keeping the tested item in the next binary-search list.
- Starting a new bin before checking every earlier bin in first-fit.
- Calling a packing optimal without comparing it with the lower bound.
- Rearranging items inside a quick-sort sublist.
- Choosing the cheapest edge of the whole network instead of the cheapest one leaving the tree in Prim.
- Accepting a Kruskal edge that forms a cycle, or not saying why one was rejected.
- Giving a Dijkstra route length without the route.

## Next steps

- Revise from the [revision notes](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum-revision-notes/).
- Reread the [study guide](/resources/edexcel-ial-mathematics-sorting-packing-and-searching-algorithms-minimum/) for any question that went wrong.
- Return to the [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [checklist](/checklists/edexcel/a-level/mathematics/).
- Find gaps with the [diagnostics](/diagnostics/).
- Take a [free trial class](/trial/) with our teachers.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3, April 2019, published by Pearson Education Limited. Unit D1: Decision Mathematics 1, sections 1 and 2, and the Glossary for D1.
