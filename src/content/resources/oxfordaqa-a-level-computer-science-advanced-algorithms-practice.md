---
title: "OxfordAQA A-Level Computer Science: Advanced algorithms (9645) -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Advanced Algorithms Practice"
resourceType: "practice-questions"
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
description: "Original questions with marked answers on BFS, DFS, Dijkstra traces and tree traversals for OxfordAQA International A-level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sections **3.11.1 Graph algorithms** and **3.11.2 Tree algorithms** in Version 1.1 of the OxfordAQA 9645 specification for International AS and A-level Computer Science (used for International AS exams in May/June 2025 onwards and International A-level exams in May/June 2026 onwards). Everything tested here is International A-level only, examined in Unit 3: Advanced Programming. Code is Python, one of the three exam languages. Unless told otherwise, take a vertex's neighbours in alphabetical order.

Related pages: [revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-revision-notes/) · [study guide](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms/) · [checklist](/checklists/oxfordaqa/a-level/computer-science/) · [course hub](/boards/oxfordaqa/a-level/computer-science/) · [diagnostics](/diagnostics/)

## Questions

**1.** State the data structure used by breadth-first search and by depth-first search, and give one typical application of each. **[4]**

**2.** An unweighted, undirected graph has this adjacency list:

```
K: M, P        R: M, P, T
M: K, R        S: P, T
P: K, R, S     T: R, S, V
               V: T
```

Trace a breadth-first search from K. Show the queue after each vertex is removed, and give the order in which vertices are visited. **[4]**

**3.** Using the graph in question 2, give the order in which a recursive depth-first search from K visits the vertices, and state the first vertex at which it has to backtrack. **[3]**

**4.** Using your trace from question 2:

**(a)** Give the route from K to V with the fewest edges, showing how you found it. **[2]**
**(b)** Explain why breadth-first search is guaranteed to find a route with the fewest edges. **[1]**

**5.** A weighted, undirected graph has edges A–B 6, A–C 2, B–C 3, B–D 1, C–F 9, D–F 4, D–G 8, F–G 2. Use this version of Dijkstra's algorithm (written in language-neutral pseudo-code), starting at A:

```
Set the distance of A to 0 and of every other vertex to infinity
WHILE there are unvisited vertices
    V ← the unvisited vertex with the smallest distance
    Mark V as visited
    FOR each unvisited neighbour N of V
        IF distance(V) + weight(V, N) < distance(N) THEN
            distance(N) ← distance(V) + weight(V, N)
            previous(N) ← V
        ENDIF
    ENDFOR
ENDWHILE
```

**(a)** Show the distances and previous vertices after each vertex is visited. **[5]**
**(b)** State the shortest route from A to G and its length. **[2]**

**6.** Using the graph in question 5:

**(a)** Give the route from A to G that a breadth-first search would find, and its total weight. **[2]**
**(b)** Explain why breadth-first search is not suitable for finding shortest routes in this graph. **[1]**
**(c)** Describe two applications of shortest path algorithms. **[2]**

**7.** A binary tree is stored in three arrays. −1 means "no child". The root is at index 0.

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| data | M | D | T | A | H | R | X | F |
| left | 1 | 3 | 5 | −1 | 7 | −1 | −1 | −1 |
| right | 2 | 4 | 6 | −1 | −1 | −1 | −1 | −1 |

**(a)** Give the output of a pre-order, an in-order and a post-order traversal. **[6]**
**(b)** State what the in-order output shows about this tree. **[1]**

**8.** An expression is written in infix as (7 + 5) × (6 − 2) / 4, evaluated left to right.

**(a)** Draw the expression tree. **[2]**
**(b)** Give the prefix and postfix expressions. **[2]**
**(c)** Evaluate the postfix expression using a stack, showing the stack after each operator. **[2]**

**9.** A binary search tree of words uses this class:

```python
class WordNode:
    def __init__(self, word):
        self.word = word
        self.left = None
        self.right = None
```

Write a recursive function `in_order(node)` that returns a list of the words in the tree in in-order. The words otter, badger, weasel, crane, lynx, stoat and yak are inserted in that order into an empty tree; state the list your function returns. **[5]**

**10.** A graph is stored as a dictionary of lists, for example `{"K": ["M", "P"], ...}`. Write a function `bfs(graph, start)` that returns a list of the vertices in the order a breadth-first search visits them. **[6]**

**11.** A robot explores a maze. Its junctions and passages are:

```
S: C, F        H: G
C: G, J, S     J: C
F: L, S, X     L: F, N
G: C, H, N     N: G, L
```

S is the start and X is the exit.

**(a)** Trace a recursive depth-first search from S that stops as soon as X is reached. Show the stack of unfinished calls each time it changes direction. **[4]**
**(b)** State the route the robot takes to the exit and the number of passages in it. **[1]**
**(c)** State the route a breadth-first search would give and its number of passages. **[1]**
**(d)** Evaluate the use of depth-first search for this robot. **[3]**

**12.** State which tree traversal should be used to **(a)** copy a tree, **(b)** output a binary search tree in ascending order and **(c)** empty a tree, and **(d)** explain your answer to (c). **[4]**

## Answers

**1.** Breadth-first: a queue [1]; application: finding the shortest path in an unweighted graph [1]. Depth-first: a stack (or recursion) [1]; application: navigating a maze [1].
*Examiner insight:* Each structure needs its own application; a single application for both earns less.

**2.**

| Removed | Queue after |
|---|---|
| K | M, P |
| M | P, R |
| P | R, S |
| R | S, T |
| S | T |
| T | V |
| V | empty |

Rows K and M correct [1]; rows P and R correct [1]; rows S, T and V correct [1]. Visit order **K, M, P, R, S, T, V** [1].
*Examiner insight:* P is already in the queue when R is processed, so it must not be added again.

**3.** K, M, R [1]; P, S [1]; T, V, with the first backtrack at **V** [1]. Order: **K, M, R, P, S, T, V**.
*Examiner insight:* From R the next vertex is P, not T: alphabetical order applies at every vertex.

**4. (a)** Parents: V from T, T from R, R from M, M from K [1]. Route **K → M → R → T → V** (4 edges) [1].
**(b)** It visits all vertices one edge away, then two edges away, and so on, so each vertex is first reached by a route with the fewest edges [1].
*Examiner insight:* A visit order is not a route; build the route from the parents.

**5. (a)**

| Visited | A | B | C | D | F | G |
|---|---|---|---|---|---|---|
| A | **0** | 6 (A) | 2 (A) | ∞ | ∞ | ∞ |
| C | | 5 (C) | **2** | ∞ | 11 (C) | ∞ |
| B | | **5** | | 6 (B) | 11 | ∞ |
| D | | | | **6** | 10 (D) | 14 (D) |
| F | | | | | **10** | 12 (F) |
| G | | | | | | **12** |

C visited second, with B lowered to 5 and F set to 11 [1]; B visited third, D set to 6 [1]; from D, F lowered to 10 and G set to 14 [1]; from F, G lowered to 12 [1]; visiting order A, C, B, D, F, G [1].
**(b)** **A → C → B → D → F → G** [1], length **12** [1].
*Examiner insight:* Show every update, including values later replaced.

**6. (a)** **A → B → D → G** [1], weight 6 + 1 + 8 = **15** [1].
**(b)** It finds the fewest edges and ignores weights; this route weighs 15, but Dijkstra's route weighs 12 [1].
**(c)** Any two, e.g. satellite navigation finding the quickest road route [1]; routers working out lowest-cost paths for data packets [1].
*Examiner insight:* "Finding the shortest path" just restates the algorithm; name a real system.

**7. (a)** Pre-order: M, D, A, H [1], F, T, R, X [1]. In-order: A, D, F, H [1], M, R, T, X [1]. Post-order: A, F, H, D [1], R, X, T, M [1].
**(b)** The output is in alphabetical order, so the tree is a binary search tree [1].
*Examiner insight:* F is the **left** child of H (index 4's left pointer is 7); check pointers rather than guessing from the letters.

**8. (a)**

```
              /
           /     \
          ×       4
        /   \
       +     −
      / \   / \
     7   5 6   2
```

/ at the root with × and 4 as children [1]; + and − subtrees correct [1].
**(b)** Prefix `/ × + 7 5 − 6 2 4` [1]; postfix `7 5 + 6 2 − × 4 /` [1].
**(c)** After + the stack holds 12; after −, 12 and 4; after ×, 48 [1]; after /, 12, so the value is **12** [1].
*Examiner insight:* Pop the second operand first: for − the stack holds 6 then 2, so the result is 6 − 2, not 2 − 6.

**9.**

```python
def in_order(node):
    if node is None:
        return []
    return in_order(node.left) + [node.word] + in_order(node.right)
```

Base case returns an empty list [1]; recursive call on left subtree first [1]; current word placed between [1]; recursive call on right subtree [1]. Returns **['badger', 'crane', 'lynx', 'otter', 'stoat', 'weasel', 'yak']** [1].
*Examiner insight:* The task says "returns", so printing inside the function does not meet it.

**10.**

```python
def bfs(graph, start):
    visited = [start]
    queue = [start]
    while len(queue) > 0:
        current = queue.pop(0)
        for neighbour in graph[current]:
            if neighbour not in visited:
                visited.append(neighbour)
                queue.append(neighbour)
    return visited
```

Correct header and parameters [1]; `visited` and `queue` both start with `start` [1]; loop while the queue is not empty [1]; remove from the **front** of the queue [1]; for each neighbour, test it has not been visited [1]; add it to `visited` and the queue, and return `visited` [1].
*Examiner insight:* `queue.pop()` with no index removes from the end, turning this into a depth-first search.

**11. (a)** [S] → [S, C] → [S, C, G] [1]; [S, C, G, H], then H is a dead end: back to [S, C, G] [1]; [S, C, G, N] → [S, C, G, N, L] → [S, C, G, N, L, F] [1]; [S, C, G, N, L, F, X]: exit found, stop [1].
**(b)** **S → C → G → N → L → F → X, 6 passages** [1].
**(c)** **S → F → X, 2 passages** [1].
**(d)** DFS suits a robot exploring an unknown maze: it only moves to an adjacent junction or back along its path, while BFS would make it switch between distant junctions [1]. It only needs to remember its current path and the junctions visited [1]. However, the route it finds need not be the shortest (6 passages against 2), so once the maze is mapped a BFS should be used to plan the return route [1].
*Examiner insight:* "Evaluate" needs a judgement weighing both sides, using the figures from (b) and (c).

**12. (a)** Pre-order [1]. **(b)** In-order [1]. **(c)** Post-order [1]. **(d)** Both subtrees of a node are dealt with before the node itself, so no node is deleted while its children still depend on it [1].
*Examiner insight:* For (d), explain the deletion order; "it is the last one" is not a reason.

## Where marks are usually lost

- Using a stack for breadth-first or a queue for depth-first.
- Adding a vertex to the BFS queue a second time because it was not marked when first discovered.
- Ignoring the stated neighbour order.
- Giving a visit order when a route is asked for.
- In Dijkstra, picking the vertex at the end of the cheapest single edge instead of the smallest total distance.
- Reading a parallel-array tree from the letters instead of the left and right pointers.
- Reversing the operands when evaluating postfix.

## Next steps

- [Revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-revision-notes/) and the [study guide](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms/) for anything you lost marks on.
- [Advanced data structures questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/).
- Plan what is left with the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) and the [course hub](/boards/oxfordaqa/a-level/computer-science/).
- Use the free 10-minute [diagnostics](/diagnostics/) to find gaps in other topics.
- [Book a free trial class](/trial/).

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA: section 3.11 Advanced algorithms.
