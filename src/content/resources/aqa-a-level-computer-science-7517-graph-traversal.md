---
title: "AQA A-Level Computer Science (7517): Graph-traversal"
seoTitle: "AQA A-Level Computer Science Graph Traversal Guide"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.3.1 Graph-traversal: tracing breadth-first and depth-first search with a queue and a stack, and their typical applications."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide covers **4.3.1 Graph-traversal** in AQA A-Level Computer Science (7517). The specification asks you to **trace breadth-first and depth-first search algorithms** and to **describe typical applications of both**. Its own examples are that breadth-first search finds the shortest path in an unweighted graph and that depth-first search can be used to navigate a maze.

The wider [fundamentals of algorithms study guide](/resources/aqa-a-level-computer-science-fundamentals-of-algorithms/) summarises all of section 4.3. This page goes deeper on one thing: how each traversal works, step by step, what data structure drives it, and how to lay out a trace so that every mark is easy to earn. Condensed notes are in the [graph-traversal revision notes](/resources/aqa-a-level-computer-science-7517-graph-traversal-revision-notes/), and exam-style questions are in the [graph-traversal practice questions](/resources/aqa-a-level-computer-science-7517-graph-traversal-practice/).

## What a traversal is

A **graph** is a set of **vertices** (nodes) joined by **edges**. To **traverse** a graph is to visit every vertex that can be reached from a starting vertex, one at a time, in a systematic order. A traversal does not search for anything in particular. It simply defines an order in which vertices are met, and other algorithms are built on top of that order.

Graphs differ from trees in one important way: they may contain **cycles**. If an algorithm followed edges without remembering where it had been, it could go round a cycle for ever. Both traversals on this page therefore keep a record of **visited** vertices and never process a vertex twice.

Both algorithms need a way of finding the neighbours of a vertex. That is easy from an **adjacency list**, which stores for each vertex the vertices it is joined to. From an **adjacency matrix** you scan the vertex's row for non-zero entries.

## The graph used in the worked examples

Eight vertices, A to H. The graph is undirected and unweighted. Its adjacency list is:

| Vertex | Neighbours |
|---|---|
| A | B, C, D |
| B | A, E |
| C | A, E, F |
| D | A, F |
| E | B, C, G |
| F | C, D, G |
| G | E, F, H |
| H | G |

Unless a question says otherwise, take neighbours **in alphabetical order**. State this rule in your answer. Different rules give different (but equally valid) traversals, so an exam question will always say which order to use or accept any valid one.

## Breadth-first search

Breadth-first search (**BFS**) explores the graph in **layers**. It visits the start vertex, then every vertex one edge away, then every vertex two edges away, and so on. The data structure that produces this behaviour is a **queue**: vertices are removed in the order they were discovered, so older discoveries are processed before newer ones.

```
SUBROUTINE BFS(graph, start)
    visited ← [start]
    queue ← empty queue
    EnQueue(queue, start)
    WHILE queue is not empty
        v ← DeQueue(queue)
        OUTPUT v
        FOR EACH n IN neighbours of v
            IF n is not in visited THEN
                add n to visited
                EnQueue(queue, n)
            ENDIF
        ENDFOR
    ENDWHILE
ENDSUBROUTINE
```

A vertex is marked as visited when it is **added to the queue**, not when it is removed. This stops the same vertex being queued twice.

### Worked example 1: BFS from A

| Vertex removed | New vertices queued | Queue afterwards (front first) |
|---|---|---|
| A | B, C, D | B, C, D |
| B | E | C, D, E |
| C | F | D, E, F |
| D | none (A and F already seen) | E, F |
| E | G | F, G |
| F | none | G |
| G | H | H |
| H | none | empty |

The order in which vertices are removed, and so output, is **A, B, C, D, E, F, G, H**. The layers are: A; then B, C, D; then E, F; then G; then H.

### Why BFS finds the shortest path in an unweighted graph

Because BFS processes all vertices at distance 1 before any at distance 2, the first time it reaches a vertex is by a path with the **fewest edges**. If you record for each vertex the vertex it was discovered from (its **parent**), you can read the shortest path backwards.

In the example: H was found from G, G from E, E from B, B from A. Reading backwards gives the path **A, B, E, G, H**, which has four edges. No path from A to H has fewer. (A, C, E, G, H is another path of the same length. BFS reports the first one it meets, which depends on the neighbour order.)

This is only true when every edge counts the same. In a **weighted** graph the path with the fewest edges is not necessarily the cheapest, and Dijkstra's algorithm (4.3.6) is used instead.

## Depth-first search

Depth-first search (**DFS**) goes as **deep as possible** along one route before backing up. From a vertex it moves to an unvisited neighbour, then to an unvisited neighbour of that, and carries on until it reaches a vertex with no unvisited neighbours. Then it **backtracks** to the most recent vertex that still has an unvisited neighbour.

The data structure that produces this behaviour is a **stack**, which removes the most recently added item first. The stack can be an explicit one, or the call stack of a recursive subroutine.

**Recursive form**

```
SUBROUTINE DFS(graph, v, visited)
    add v to visited
    OUTPUT v
    FOR EACH n IN neighbours of v
        IF n is not in visited THEN
            DFS(graph, n, visited)
        ENDIF
    ENDFOR
ENDSUBROUTINE
```

**Iterative form with an explicit stack**

```
SUBROUTINE DFS(graph, start)
    visited ← empty list
    stack ← empty stack
    Push(stack, start)
    WHILE stack is not empty
        v ← Pop(stack)
        IF v is not in visited THEN
            add v to visited
            OUTPUT v
            FOR EACH n IN neighbours of v, last to first
                IF n is not in visited THEN
                    Push(stack, n)
                ENDIF
            ENDFOR
        ENDIF
    ENDWHILE
ENDSUBROUTINE
```

In this form a vertex is marked as visited when it is **removed**, and the neighbours are pushed in reverse order so that the alphabetically first one is on top and is processed first. A vertex can be on the stack more than once, which is why the test after Pop is needed.

### Worked example 2: DFS from A (iterative)

The stack is shown with the top on the **right**.

| Pop | Action | Stack afterwards |
|---|---|---|
| A | visit; push D, C, B | D, C, B |
| B | visit; push E | D, C, E |
| E | visit; push G, C | D, C, G, C |
| C | visit; push F | D, C, G, F |
| F | visit; push G, D | D, C, G, G, D |
| D | visit; nothing new to push | D, C, G, G |
| G | visit; push H | D, C, G, H |
| H | visit | D, C, G |
| G | already visited, skip | D, C |
| C | already visited, skip | D |
| D | already visited, skip | empty |

The output order is **A, B, E, C, F, D, G, H**. The recursive version gives exactly the same order: A, then B, then E (B's only unvisited neighbour), then C (E's first unvisited neighbour), then F, then D, then back up to F and on to G, then H.

Compare the two outputs. BFS gave A, B, C, D, E, F, G, H, where D (distance 1) comes early. DFS gave A, B, E, C, F, D, G, H, where D (distance 1) is left until nearly the end because the search dived down a long route first.

## Choosing between them

| | Breadth-first | Depth-first |
|---|---|---|
| Data structure | Queue | Stack (or recursion) |
| Order of exploration | Layer by layer | Down one route, then backtrack |
| Typical use | Shortest path in an unweighted graph | Navigating a maze; exploring every route |
| Memory | Holds a whole layer at once | Holds one route at once |

**Maze example.** Treat each junction as a vertex and each corridor as an edge. DFS follows one corridor as far as it goes, and when it hits a dead end it backtracks to the last junction with an unexplored corridor. That is exactly how a person solves a maze with a pencil. BFS would also find the exit, and would find the route with fewest junctions, but it needs to remember a whole frontier of junctions, which is a poorer match for a single walker.

**Shortest route in a network.** A social network where each edge means "is friends with" is unweighted. BFS from one person finds the fewest steps to every other person. A route planner for a game board where every move costs one turn works the same way.

Other uses you may meet in discussion are finding whether a graph is connected, finding all the vertices reachable from a start, and detecting cycles.

## Disconnected graphs

If some vertices cannot be reached from the start vertex, a single traversal will not output them. To visit every vertex of a disconnected graph, run the traversal again from each vertex that is still unvisited. Exam traces normally start at a named vertex and only reach the part of the graph connected to it.

## Common mistakes

- Marking a vertex as visited only when it is removed in BFS, so the same vertex is queued more than once.
- Using a stack in BFS or a queue in DFS. The data structure is what decides the order.
- Forgetting to push neighbours in reverse order in an iterative DFS, which reverses the order of exploration.
- Giving the order of vertices **added** to the queue rather than the order they are **removed**. For BFS these are the same, but write the queue contents to show your working.
- Claiming BFS finds the shortest path in a weighted graph. It only minimises the number of edges.
- Stating the traversal order without saying which neighbour rule you used.

## Exam technique

- **Trace**: use a table with a column for the current vertex, the vertices added, and the queue or stack contents. The contents column is where marks are earned.
- **Describe an application**: name the algorithm, name the problem, then give the reason it fits. For example, "BFS, because it reaches vertices in order of the number of edges from the start, so the first time it reaches the target is by the shortest route."
- **Compare**: always link the behaviour to the data structure, queue for BFS and stack for DFS.
- Check your final order contains each reachable vertex exactly once.

## Related resources

- [Graph-traversal revision notes](/resources/aqa-a-level-computer-science-7517-graph-traversal-revision-notes/)
- [Graph-traversal practice questions](/resources/aqa-a-level-computer-science-7517-graph-traversal-practice/)
- [Graphs study guide for 4.2.4](/resources/aqa-a-level-computer-science-7517-graphs/)
- [Queues study guide](/resources/aqa-a-level-computer-science-7517-queues/)
- [Stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/)

*Written against the AQA A-level Computer Science (7517) specification, 4.3.1 Graph-traversal. Always check the current specification on the AQA website.*
