---
title: "OxfordAQA A-Level Computer Science: Advanced algorithms (9645) -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS Advanced Algorithms Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Advanced algorithms"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 11
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-algorithms"
description: "Condensed revision notes on graph searches, Dijkstra's algorithm and tree traversals for OxfordAQA A-level Computer Science, with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense the [advanced algorithms study guide](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms/), which has the full explanations and longer worked examples. They cover sections 3.11.1 Graph algorithms and 3.11.2 Tree algorithms from the OxfordAQA 9645 specification (International AS and A-level Computer Science, Version 1.1), which is used for International AS exams in May/June 2025 onwards and International A-level exams in May/June 2026 onwards. Section 3.11 sits entirely in the International A-level, examined in Unit 3: Advanced Programming, the on-screen paper in C#, Python or VB.Net.

When you can answer the self-test below without looking, move on to the [practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-practice/). Use the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) to tick off outcomes, the [course hub](/boards/oxfordaqa/a-level/computer-science/) for other topics, and a [free 10-minute diagnostic](/diagnostics/) to find weak spots. Graph and tree terms are in the [advanced data structures notes](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-revision-notes/).

Code fragments are Python, since the specification defines no pseudo-code standard. Neighbours are taken in alphabetical order unless a question says otherwise.

## Key terms

| Term | Meaning |
|---|---|
| Breadth-first search (BFS) | Visits vertices layer by layer outwards from the start; uses a **queue** |
| Depth-first search (DFS) | Follows one branch as far as possible, then backtracks; uses a **stack** (or recursion) |
| Backtracking | Returning to the most recent vertex that still has an unvisited neighbour |
| Dijkstra's algorithm | Finds the shortest (lowest total weight) route from one vertex to all others in a weighted graph |
| Tree traversal | Visiting every node of a binary tree exactly once in a set order |
| Expression tree | Binary tree with operators at internal nodes and operands at leaves |
| Prefix / postfix | Operator written before / after its two operands; neither needs brackets |

## 3.11.1 Graph algorithms

### BFS compared with DFS

| | BFS | DFS |
|---|---|---|
| Data structure | Queue (FIFO) | Stack (LIFO) or recursion |
| Order | Nearest vertices first | Deepest first, then backtrack |
| Typical application (specification) | Shortest path in an **unweighted** graph | Navigating a maze |
| Gives the fewest-edge route? | Yes | Not guaranteed |

> **Method: BFS**
> 1. Mark the start visited; enqueue it.
> 2. Dequeue the front vertex and output it.
> 3. Enqueue each of its unvisited neighbours, marking each visited and noting its parent.
> 4. Repeat from step 2 until the queue is empty.

> **Method: DFS (recursive)**
> 1. Mark the current vertex visited and output it.
> 2. For each unvisited neighbour in turn, call DFS on it.
> 3. When none are left, the call ends: this is the backtrack.

**Worked reminder.** Edges C–F, C–J, F–M, J–M, M–T.

- BFS from C: queue goes [F, J] → [J, M] → [M] → [T] → empty. Order **C, F, J, M, T**.
- DFS from C: C → F → M (M's first unvisited neighbour is J) → J, dead end, back to M → T. Order **C, F, M, J, T**.

**Code shape.** The two loop versions differ in one line: BFS removes from the **front** (`queue.pop(0)` or `deque.popleft()`), DFS removes from the **end** (`stack.pop()`).

```python
def bfs_order(graph, start):
    seen, queue = [start], [start]
    while queue:
        v = queue.pop(0)
        for n in graph[v]:
            if n not in seen:
                seen.append(n)
                queue.append(n)
    return seen
```

### Dijkstra's shortest path algorithm

You must be able to trace it. You are not expected to recall its steps or code it unless the question paper gives you the algorithm.

> **Method: Dijkstra trace**
> 1. Start vertex 0; all others ∞.
> 2. Pick the **unvisited vertex with the smallest total distance**; its distance is now final.
> 3. For each unvisited neighbour: if (distance of picked vertex + edge weight) < neighbour's current distance, update it and record the picked vertex as its previous vertex.
> 4. Repeat until all vertices are final. Read a route by following previous vertices back from the target, then reversing.

**Worked reminder.** Edges P–R 7, P–T 2, T–R 3, R–V 1, T–V 8; start P.

| Picked | P | R | T | V |
|---|---|---|---|---|
| P (0) | **0** | 7 (P) | 2 (P) | ∞ |
| T (2) | | 5 (T) | **2** | 10 (T) |
| R (5) | | **5** | | 6 (R) |
| V (6) | | | | **6** |

Route to V: V ← R ← T ← P, so **P → T → R → V, total 6**. Notice R's distance dropped from 7 to 5, and V's from 10 to 6: a vertex's value can change several times before it is picked.

**Applications:** satellite navigation and route planners; routing data across networks (link-state routing protocols such as OSPF use it); any problem where edge weights are costs, times or distances to minimise.

**Why not BFS for weighted graphs?** BFS counts edges and ignores weights, so a route with fewer edges can still cost more.

## 3.11.2 Tree algorithms

| Traversal | Order | Uses in the specification |
|---|---|---|
| Pre-order | Node, left, right | Copying a tree; prefix expression from an expression tree |
| In-order | Left, node, right | Binary search tree: output contents in ascending order |
| Post-order | Left, right, node | Postfix expression from an expression tree; emptying a tree |

Left is always visited before right. The only change between the three is when the node itself is output.

**Worked reminder: binary search tree.** Inserting 33, 18, 50, 9, 27, 61:

```
        33
       /  \
     18    50
    /  \     \
   9   27     61
```

- Pre-order: 33, 18, 9, 27, 50, 61
- In-order: **9, 18, 27, 33, 50, 61** (ascending, because it is a BST)
- Post-order: 9, 27, 18, 61, 50, 33

**Worked reminder: expression tree** for x − y × (z + w). Root −, left child x, right child × (whose children are y and +, and + has children z and w).

- Prefix (pre-order): `− x × y + z w`
- Postfix (post-order): `x y z w + × −`

**Why these uses?** Pre-order creates a parent before its children, so a copy can be built top-down. Post-order deals with both children before their parent, so emptying never deletes a node that still links to undeleted children.

**Implementation pattern.** A recursive subroutine with base case "node is empty: do nothing" and two recursive calls (left subtree, then right subtree); the output line goes before, between or after those calls.

## Must-know distinctions

- **Queue vs stack:** BFS = queue; DFS = stack.
- **Fewest edges vs lowest weight:** BFS finds the first; Dijkstra finds the second.
- **Visit order vs route:** the BFS visit order is not a route. Build the route from the parent (or previous-vertex) records.
- **In-order vs sorted:** in-order gives ascending order only for a binary search tree.
- **Prefix vs postfix:** pre-order → prefix; post-order → postfix.

## Quick self-test

1. Which data structure does BFS use, and which does DFS use?
2. Edges G–L, G–N, L–P, N–P, N–R, P–V. Give the BFS order from G.
3. For the same graph, give the DFS order from G.
4. Using BFS parents, give the fewest-edge route from G to V.
5. Edges A–B 5, A–C 1, C–B 2. Give the shortest distance and route from A to B.
6. Why would BFS give the wrong answer to question 5?
7. A tree has root 5. Its left child 8 has children 1 (left) and 6 (right). Its right child 3 has only a right child, 7. Give all three traversals.
8. Evaluate the postfix expression `6 2 3 + × 4 −`.
9. Which traversal empties a tree, and why?
10. Which traversal produces a prefix expression from an expression tree?
11. State the base case of a recursive traversal.
12. Give the typical application of DFS named in the specification.

### Answers

1. BFS: queue. DFS: stack (or the call stack, if recursive).
2. **G, L, N, P, R, V**.
3. **G, L, P, N, R, V**. From P, the first unvisited neighbour is N, then from N go to R; backtrack to P for V.
4. **G → L → P → V** (P was discovered from L, V from P).
5. **3**, by **A → C → B** (1 + 2), beating the direct edge of 5.
6. BFS finds the fewest edges, A → B (one edge, weight 5), and ignores the weights.
7. Pre-order **5, 8, 1, 6, 3, 7**; in-order **1, 8, 6, 5, 3, 7**; post-order **1, 6, 8, 7, 3, 5**.
8. 2 + 3 = 5; 6 × 5 = 30; 30 − 4 = **26**.
9. Post-order: both subtrees are deleted before their parent, so no node is deleted while it still links to children.
10. Pre-order.
11. The node (subtree) is empty, so the subroutine returns without doing anything.
12. Navigating a maze.

## Where marks are usually lost

- Swapping queue and stack between BFS and DFS.
- Not following the neighbour order stated in the question, which changes the whole trace.
- In BFS, marking a vertex visited only when it leaves the queue, so it gets queued twice.
- Giving the BFS visit order when the question asks for a route.
- In Dijkstra, choosing the next vertex by the smallest single edge rather than the smallest total distance.
- Updating a vertex that is already final in Dijkstra.
- Not showing the distance table or previous vertices when asked to trace: the final answer alone shows no method.
- Visiting right before left in a traversal.
- Claiming in-order gives ascending output for any binary tree.
- Mixing up which traversal gives prefix and which gives postfix.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA: section 3.11 Advanced algorithms.
