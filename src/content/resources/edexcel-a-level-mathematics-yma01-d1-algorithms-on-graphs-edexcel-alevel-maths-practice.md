---
title: "Edexcel International A Level Mathematics (YMA01): Algorithms on graphs -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit D1: Decision Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-algorithms-on-graphs-edexcel-alevel-maths"
description: "Twelve original Edexcel IAL Maths D1 questions on algorithms on graphs with full answers: Kruskal, Prim from a matrix, Dijkstra and minimum spanning tree reasoning."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover Unit D1, section 2: minimum spanning trees by Kruskal's and Prim's algorithms (including Prim's algorithm on a matrix and converting between networks and matrices) and Dijkstra's algorithm for the shortest path.

Related: [algorithms on graphs revision notes](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-on-graphs-edexcel-alevel-maths-revision-notes/) and the [algorithms on graphs study guide](/resources/edexcel-a-level-mathematics-yma01-d1-algorithms-on-graphs-edexcel-alevel-maths/).

---

## Section A

**1.** Explain what is meant by a tree, a spanning tree and a minimum spanning tree. **[3]**

**2.** A connected network has 12 vertices. State the number of arcs in any spanning tree of the network, and explain why. **[2]**

**3.** A network has arcs JK 6, JL 9, KL 4, KM 7 and LM 5, and no other arcs. Write down the matrix that represents the network. **[3]**

**4.** Give two reasons why Prim's algorithm may be preferred to Kruskal's algorithm. **[2]**

## Section B

Questions 5, 7, 10 and 11 use this network, which has eight vertices and fourteen arcs:

```
SA 4    SB 7    SC 16   AB 2    AD 14   BC 3    BD 6
BE 11   CE 5    DE 1    DF 10   EF 12   ET 13   FT 15
```

**5.** Use Kruskal's algorithm to find a minimum spanning tree for the network. List the arcs in the order you consider them, stating whether each is accepted or rejected, and give the total weight. **[5]**

**6.** The matrix below represents a network.

```
      A    B    C    D    E    F
A     –   16    9   21    –   14
B    16    –   11    –   18    –
C     9   11    –   13   20   17
D    21    –   13    –   12   15
E     –   18   20   12    –   19
F    14    –   17   15   19    –
```

**(a)** State the number of arcs in the network. **[1]**

**(b)** Use Prim's algorithm, starting at A, to find a minimum spanning tree. State the order in which you select the arcs and the total weight. **[5]**

**7.** Use Dijkstra's algorithm to find the shortest route from S to T in the network above Question 5. Show the order of labelling, the final value and the working values at each vertex, and state the route and its length. **[6]**

**8.** Explain how the shortest route is found from the final values once the destination vertex has been labelled in Dijkstra's algorithm. **[2]**

**9.** In the network above Question 5, all arc weights are different. Explain why Prim's algorithm starting at S and Kruskal's algorithm give the same minimum spanning tree, and state one way in which the working differs. **[2]**

**10.** The weight of arc BD in the network above Question 5 is changed to x, where x is a positive number different from all the other weights. Find the set of values of x for which BD is in the minimum spanning tree. **[3]**

**11.** Arc DE in the network above Question 5 is closed. Find the new shortest route from S to T and its length. **[3]**

**12.** Use Prim's algorithm, starting at S, on the network above Question 5. State the order in which the arcs are selected. **[3]**

---

## Answers

**1.** A tree is a connected graph with no cycles [1]. A spanning tree of a graph is a subgraph that contains every vertex and is a tree [1]. A minimum spanning tree is a spanning tree whose total arc weight is as small as possible [1].

**2.** **11 arcs** [1]. A tree joining n vertices needs exactly n − 1 arcs: one fewer would leave it disconnected and one more would create a cycle [1].

**3.** Rows and columns J, K, L, M [1]. Row J: –, 6, 9, –; row K: 6, –, 4, 7 [1]. Row L: 9, 4, –, 5; row M: –, 7, 5, – (the matrix is symmetric) [1].

**4.** Prim's algorithm needs no check for cycles [1], and it can be applied directly to a network given as a matrix [1].

**5.** DE 1 accept; AB 2 accept; BC 3 accept; SA 4 accept [1]. CE 5 accept; BD 6 reject (cycle BCED); SB 7 reject (cycle SAB) [1]. DF 10 accept; BE 11 reject; EF 12 reject [1]. ET 13 accept: 7 arcs for 8 vertices, so stop [1]. Total weight = 1 + 2 + 3 + 4 + 5 + 10 + 13 = **38** [1].

**6. (a)** **12 arcs** (count the entries above the leading diagonal) [1].

**(b)** Start at A: smallest in column A is 9, so **AC** [1]. Columns A, C: smallest 11, so **CB** [1]. Columns A, C, B: smallest 13, so **CD** [1]. Columns A, C, B, D: smallest 12, so **DE**; then smallest 14, so **AF** [1]. Total weight = 9 + 11 + 13 + 12 + 14 = **59** [1].

**7.** S: order 1, final 0. A: working 4; order 2, final 4 [1]. B: working 7, 6; order 3, final 6. C: working 16, 9; order 4, final 9 [1]. D: working 18, 12; order 5, final 12. E: working 17, 14, 13; order 6, final 13 [1]. F: working 22; order 7, final 22. T: working 26; order 8, final 26 (F gives 37, which is not better) [1]. Tracing back: T from E (13 + 13 = 26), E from D (12 + 1 = 13), D from B (6 + 6 = 12), B from A (4 + 2 = 6), A from S [1]. Shortest route **S–A–B–D–E–T, length 26** [1].

**8.** Start at the destination and work backwards [1]. An arc XY lies on the shortest route if the final value at X plus the weight of XY equals the final value at Y; repeat from X until the start is reached [1].

**9.** With all weights different the minimum spanning tree is unique, so any correct method must find the same tree [1]. Kruskal's algorithm takes arcs in order of weight from anywhere in the network (DE first), while Prim's grows a single tree outwards from S (SA first) [1].

**10.** Without BD, the minimum spanning tree joins B to D by the path B–C–E–D, whose largest arc is CE (5) [1]. BD would be accepted by Kruskal's algorithm before CE only if x < 5 [1]. So BD is in the minimum spanning tree when **0 < x < 5** [1].

**11.** Without DE: E's working values become 17 (via B) and 14 (via C), so E = 14 [1]. T: via E 14 + 13 = 27; via F, with D = 12 and F = 22, 22 + 15 = 37 [1]. Shortest route **S–A–B–C–E–T, length 27** [1].

**12.** SA, AB, BC [1], CE, ED [1], DF, ET [1].

---

## Where marks are usually lost

- Leaving out rejected arcs in Question 5.
- In Question 6, searching rows instead of the labelled columns.
- Labelling D before C in Question 7, even though C's working value is smaller.
- Giving a length without the route, or the route without the length.
- In Question 10, giving x < 6 by comparing with BD's old weight instead of the largest arc on the cycle.
