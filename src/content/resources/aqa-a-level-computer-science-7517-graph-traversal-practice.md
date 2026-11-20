---
title: "AQA A-Level Computer Science (7517): Graph-traversal -- Practice Questions"
seoTitle: "AQA A-Level Computer Science Graph Traversal Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 3.1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
    subtopic: "graph-traversal-7517"
description: "Original AQA 7517 section 4.3.1 questions with answers: tracing breadth-first and depth-first search and describing their applications."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs, because examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Graph-traversal study guide](/resources/aqa-a-level-computer-science-7517-graph-traversal/) | [Graph-traversal revision notes](/resources/aqa-a-level-computer-science-7517-graph-traversal-revision-notes/)

Unless a question says otherwise, take the neighbours of a vertex in **alphabetical (or numerical) order**.

Graph G is undirected and unweighted. Its adjacency list is:

| Vertex | Neighbours |
|---|---|
| S | A, B |
| A | C, D, S |
| B | D, E, S |
| C | A, T |
| D | A, B, T |
| E | B, T |
| T | C, D, E |

---

## Section A

**1.** State the data structure that a breadth-first search uses to hold vertices that are waiting to be processed. **[1]**

**2.** State the data structure that an iterative depth-first search uses. **[1]**

**3.** Explain why a graph traversal algorithm must keep a record of the vertices it has visited. **[2]**

**4.** Describe one typical application of breadth-first search and one of depth-first search. **[2]**

**5.** State what is meant by the parent of a vertex in a breadth-first search. **[1]**

## Section B

**6.** Trace a breadth-first search of graph G starting at S.

**(a)** Complete a table showing, for each vertex removed from the queue, the vertices added and the queue afterwards. **[4]**
**(b)** State the order in which the vertices are visited. **[1]**

**7.** Using the parents recorded in your trace for Question 6, state the shortest path from S to T and the number of edges in it. **[2]**

**8.** State the order in which the vertices of graph G are visited by a depth-first search starting at S. **[2]**

**9.** A directed graph has this adjacency list (an edge points from a vertex to each vertex listed):

1: 2, 3
2: 4
3: 4, 5
4: 6
5: 6
6: none

**(a)** State the order of a breadth-first search from vertex 1. **[1]**
**(b)** State the order of a depth-first search from vertex 1. **[1]**
**(c)** Explain why vertex 1 can be reached from no other vertex in this graph. **[1]**

**10.** A student writes this algorithm for a breadth-first search.

```
queue ← [start]
WHILE queue is not empty
    v ← DeQueue(queue)
    mark v as visited
    FOR EACH n IN neighbours of v
        IF n is not visited THEN
            EnQueue(queue, n)
        ENDIF
    ENDFOR
ENDWHILE
```

**(a)** Identify the fault and describe the effect on a graph with a cycle. **[2]**
**(b)** State the correction. **[1]**

**11.** A game is played on a board where every move from one square to a neighbouring square takes one turn. Explain why a breadth-first search, rather than a depth-first search, should be used to find the fewest turns between two squares. **[3]**

**12.** A road network has distances in kilometres on every road. A programmer proposes using a breadth-first search to find the shortest route in kilometres. Explain why this will not always give the correct answer, and name the algorithm that should be used. **[3]**

**13.** Describe how a depth-first search can be used to find a way through a maze, stating what the vertices and edges represent and what happens at a dead end. **[4]**

---

## Answers

**1.** A queue [1].

**2.** A stack [1].

**3.** A graph may contain cycles [1]; without a record a vertex could be reached again and processed repeatedly, so the algorithm might never terminate (or would repeat work) [1].

**4.** Breadth-first search: finding the shortest path (fewest edges) in an unweighted graph [1]. Depth-first search: navigating a maze (or exploring every route, or testing reachability) [1].

**5.** The vertex from which it was first discovered (the vertex that was being processed when it was added to the queue) [1].

**6. (a)**

| Removed | Added | Queue afterwards |
|---|---|---|
| S | A, B | A, B |
| A | C, D | B, C, D |
| B | E | C, D, E |
| C | T | D, E, T |
| D | none | E, T |
| E | none | T |
| T | none | empty |

One mark for S and A rows correct; one for B row; one for C row; one for D, E and T rows with the queue ending empty [4].
**(b)** S, A, B, C, D, E, T [1].

**7.** T was discovered from C, C from A, A from S, so the path is S, A, C, T [1]; three edges [1].

**8.** S, A, C, T, D, B, E [2]. (From S to A, A's first unvisited neighbour C, then T, then T's first unvisited neighbour D, then D's unvisited neighbour B, then B's unvisited neighbour E. One mark for the first four vertices correct, one for the full order.)

**9. (a)** 1, 2, 3, 4, 5, 6 [1].
**(b)** 1, 2, 4, 6, 3, 5 [1].
**(c)** No vertex lists 1 as a neighbour, so no edge points to it [1].

**10. (a)** The vertex is marked as visited only when it is removed, not when it is added to the queue [1]. A vertex reachable by two routes can be added to the queue more than once, and in a graph with a cycle the same vertex can keep being re-added so the algorithm may never end [1].
**(b)** Mark each vertex as visited when it is added to the queue (and add the start vertex as visited at the beginning) [1].

**11.** BFS visits vertices in layers, in order of the number of moves from the start [1]; the first time it reaches the target square is therefore by a route with the fewest moves [1]; DFS follows one route as deep as it can and the first route it finds to the target may be much longer than the shortest [1].

**12.** BFS minimises the number of roads (edges) used, not the total distance [1]; a route with fewer roads can be longer in kilometres than a route with more, shorter roads [1]; Dijkstra's shortest path algorithm should be used [1].

**13.** Each junction (or dead end or the exit) is a vertex [1]; each corridor between two junctions is an edge [1]; the search follows one corridor from the junction as far as it goes, marking junctions as visited [1]; at a dead end (or a junction with no unvisited neighbour) it backtracks to the most recent junction with an unexplored corridor and continues until the exit is reached [1].

---

## Where marks are usually lost

- Using the wrong data structure to explain BFS or DFS.
- Marking vertices visited too late in BFS.
- Not following the stated neighbour order.
- Saying BFS finds the cheapest path in a weighted graph.
- Showing only the final order and no working, so method marks are not available.
