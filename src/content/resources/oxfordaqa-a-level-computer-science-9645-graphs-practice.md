---
title: "OxfordAQA A-Level Computer Science (9645): Graphs -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Graphs Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "graphs-oxfordaqa-alevel-cs"
description: "Eleven original OxfordAQA 9645 questions on sub-topic 3.10.1 Graphs: terms, adjacency matrices and lists, dense and sparse graphs, with full answers."
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

These questions practise sub-topic **3.10.1 Graphs** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: graph terms, weighted and directed graphs, adjacency matrices and adjacency lists, and choosing between them. In matrices, use a dash for "no edge" in a weighted graph.

Related pages: [graphs study guide](/resources/oxfordaqa-a-level-computer-science-9645-graphs/) ·
[graphs revision notes](/resources/oxfordaqa-a-level-computer-science-9645-graphs-revision-notes/) ·
[advanced data structures practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/)

## Section A

**1.** Explain the terms vertex and edge. **[2]**

**2.** State one difference between a directed graph and an undirected graph. **[1]**

**3.** State two typical uses of graphs, saying what the vertices and edges represent in each. **[4]**

**4.** State what is meant by a weighted graph and give an example of a weight. **[2]**

## Section B

**5.** A weighted, undirected graph represents four towns W, X, Y and Z. The roads and their lengths in kilometres are W-X 7, W-Y 3, X-Z 2 and Y-Z 6.

**(a)** Draw the adjacency matrix for the graph. **[4]**
**(b)** Write the adjacency list for the graph, including the weights. **[3]**
**(c)** Find the length of the shortest route from W to Z by comparing the possible routes, and give the cost of each route that you considered. **[3]**

**6.** A directed, unweighted graph has vertices 1, 2, 3 and 4, and edges 1→2, 1→3, 2→4, 3→4 and 4→1.

**(a)** Draw the adjacency matrix for the graph, with rows as the vertex the edge leaves. **[3]**
**(b)** State the number of edges leaving vertex 4 and the number of edges arriving at vertex 4, and explain how each is found from the matrix. **[3]**

**7.** A graph of a social network has 500 people and 1 200 friendships, which are undirected.

**(a)** Calculate the number of cells in its adjacency matrix. **[1]**
**(b)** Calculate the number of entries in its adjacency list, counting one entry for each neighbour of each vertex plus one entry for each vertex. **[2]**
**(c)** State which representation is more appropriate and explain why. **[2]**

**8.** A graph has 20 vertices and 170 undirected edges.

**(a)** Calculate the largest number of edges that a graph with 20 vertices could have. **[1]**
**(b)** Calculate the number of cells in its adjacency matrix and the number of entries in its adjacency list (using the same counting as question 7). **[2]**
**(c)** Explain why the matrix is the more appropriate choice for this graph if edges are tested often. **[2]**

**9.** A program stores a graph of 40 people. The program is constantly checking whether two given people are friends and adding or removing friendships. State which representation would be most suitable and give two reasons. **[3]**

**10.** The adjacency matrix of an undirected, unweighted graph contains 14 cells with the value 1. State the number of edges in the graph and explain your answer. **[2]**

**11.** A student says: "An adjacency list should always be used because it takes up less space". Evaluate this statement. **[3]**

## Answers

**1.** A vertex (node) is one item in the graph [1]. An edge (arc) is a link between two vertices [1]. **[2]**

**2.** In a directed graph each edge has a direction (one-way), whereas in an undirected graph an edge can be used in both directions [1]. **[1]**

**3.** Any two uses, with 1 mark for each use and 1 mark for what the vertices and edges represent in it. For example, a road network (towns are vertices, roads are edges) and a social network (people are vertices, friendships are edges). **[4]**

**4.** A weighted graph is a graph in which each edge has a value [1], for example a distance, cost or time [1]. **[2]**

**5. (a)**

|   | W | X | Y | Z |
|---|---|---|---|---|
| **W** | – | 7 | 3 | – |
| **X** | 7 | – | – | 2 |
| **Y** | 3 | – | – | 6 |
| **Z** | – | 2 | 6 | – |

Correct 4 × 4 layout [1]; row W and column W correct [1]; weights used in the cells [1]; the matrix is symmetric [1]. **[4]**
**(b)** W: (X, 7), (Y, 3) [1]; X: (W, 7), (Z, 2) [1]; Y: (W, 3), (Z, 6) and Z: (X, 2), (Y, 6) [1]. **[3]**
**(c)** Route W→X→Z costs 7 + 2 = **9** [1]. Route W→Y→Z costs 3 + 6 = **9** [1]. Both routes cost 9 km, so the shortest route is 9 km (either route) [1]. **[3]**
*Examiner insight:* the longer route W→Y→Z→X to reach X costs 11, which is more than the direct road of 7. Always compare every route that you have not ruled out.

**6. (a)**

|   | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 0 | 1 | 1 | 0 |
| **2** | 0 | 0 | 0 | 1 |
| **3** | 0 | 0 | 0 | 1 |
| **4** | 1 | 0 | 0 | 0 |

Correct layout [1]; rows 1 to 2 correct [1]; rows 3 to 4 correct [1]. **[3]**
**(b)** One edge leaves vertex 4 (the total of row 4) [1]; two edges arrive at vertex 4, from 2 and from 3 (the total of column 4) [1]. The matrix is not symmetric because the edges are directed [1]. **[3]**

**7. (a)** 500 × 500 = **250 000** [1]
**(b)** 2 × 1 200 = 2 400 [1]; 500 + 2 400 = **2 900** [1]. **[2]**
**(c)** The adjacency list [1]. The graph is sparse, with very few edges compared with the number of vertices, so most matrix cells would be empty and waste memory, whereas the list stores only the friendships that exist [1]. **[2]**

**8. (a)** 20 × 19 ÷ 2 = **190** [1]
**(b)** Matrix: 20 × 20 = **400** cells [1]. List: 20 + 2 × 170 = **360** entries [1]. **[2]**
**(c)** The graph is dense: 170 of 190 possible edges [1]. The list saves little space, and the matrix allows an edge to be tested with one look-up instead of searching a list [1]. **[2]**

**9.** An adjacency matrix [1]. An edge test is a single look-up of one cell [1]. Adding or removing a friendship changes just one cell (or two, for an undirected graph) [1]. **[3]**

**10.** Each undirected edge appears twice in the matrix, once in each half [1], so there are 14 ÷ 2 = **7** edges [1]. **[2]**

**11.** The statement is not always true [1]. A list uses less space for a sparse graph, because it stores only the edges that exist [1]. But for a dense graph the list is about the same size, and a matrix allows quicker edge tests and simpler adding and removing of edges, so a matrix can be better [1]. **[3]**

## Frequently asked questions

**What do I put in a weighted matrix where there is no edge?**
Use the value that the question defines, for example a dash, 0 or infinity. If it does not say, state your choice clearly.

**Do I need to know how to search a graph?**
That is the next sub-topic, 3.11.1 Graph algorithms, which covers breadth-first and depth-first search and Dijkstra's algorithm.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.1 Graphs.
