---
title: "OxfordAQA A-Level Computer Science: Advanced algorithms (9645)"
seoTitle: "OxfordAQA A-Level CS Advanced Algorithms Study Guide"
resourceType: "study-guides"
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
description: "Study guide to OxfordAQA A-level Computer Science topic 11: breadth-first, depth-first and Dijkstra traces, tree traversals and their uses."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches topic 11, Advanced algorithms, from the OxfordAQA 9645 specification for International AS and A-level Computer Science, Version 1.1. It is for International AS exams in May/June 2025 onwards and International A-level exams in May/June 2026 onwards. It covers sections 3.11.1 (graph algorithms) and 3.11.2 (tree algorithms). All of this content is International A-level only. It is examined in Unit 3: Advanced Programming, an on-screen exam taken in C#, Python or VB.Net.

The specification sets out no pseudo-code standard, so algorithms below are in Python. You also need the graph and tree vocabulary from [advanced data structures](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures/) and the recursion from [object-oriented and additional programming](/resources/oxfordaqa-a-level-computer-science-object-oriented-and-additional-programming/).

Next, go over the [revision notes](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-revision-notes/) and then attempt the [practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-algorithms-practice/). The [course hub](/boards/oxfordaqa/a-level/computer-science/) has every other topic; the [printable checklist](/checklists/oxfordaqa/a-level/computer-science/) and a [free diagnostic](/diagnostics/) help you plan.

## Coverage of section 3.11

| Section | Outcomes | Status |
|---|---|---|
| 3.11.1 Graph algorithms | Trace breadth-first and depth-first search and describe typical applications; implement both in program code; understand and trace Dijkstra's shortest path algorithm and be aware of its applications | International A-level only |
| 3.11.2 Tree algorithms | Trace pre-order, in-order and post-order traversal; understand how to implement them; describe uses of each | International A-level only |

For Dijkstra's algorithm, the specification says you are not expected to recall its steps or code it unless the algorithm is given on the question paper; you must still be able to trace it.

**Convention on this page:** unvisited neighbours are taken in alphabetical order. If a question gives a different rule, follow that.

## 3.11.1 Breadth-first search

Breadth-first search (BFS) visits the start vertex, then all vertices one edge away, then those two edges away, working outwards in layers.

It uses a **queue** (first in, first out):

1. Mark the start vertex as visited and add it to the queue.
2. While the queue is not empty: remove the vertex at the front; for each of its neighbours that is not yet visited, mark it visited, record which vertex it was discovered from, and add it to the rear.

**Worked example 1.** A campus has eight buildings joined by covered walkways (unweighted, undirected). Adjacency list:

```
B: C, D          H: D, K, M
C: B, G          K: G, H, S
D: B, G, H       M: H, S
G: C, D, K       S: K, M
```

BFS from B:

| Removed from queue | Newly discovered (from) | Queue after (front first) |
|---|---|---|
| B | C (B), D (B) | C, D |
| C | G (C) | D, G |
| D | H (D) | G, H |
| G | K (G) | H, K |
| H | M (H) | K, M |
| K | S (K) | M, S |
| M | none | S |
| S | none | empty |

Visit order: **B, C, D, G, H, K, M, S**.

**Typical application: shortest path in an unweighted graph.** BFS reaches vertices layer by layer, so each vertex is first discovered by a route with the fewest possible edges. Follow the "from" column backwards from the target. For S: S came from K, K from G, G from C, C from B. Reversed, the route is **B → C → G → K → S**, four walkways. For M: **B → D → H → M**, three walkways.

## 3.11.1 Depth-first search

Depth-first search (DFS) follows one branch as far as it can. When it reaches a vertex with no unvisited neighbours, it **backtracks** to the most recent vertex that still has one, then carries on.

It uses a **stack** (last in, first out). Written recursively, the call stack plays this role.

**Typical application: navigating a maze.** In a maze you keep going until you hit a dead end, then return to the last junction with an untried path: that is DFS.

**Worked example 2.** A maze has an entrance N and an exit Z. Junctions and passages:

```
N: P, R          V: P, X
P: N, T, V       W: R, X
R: N, W          X: V, W, Z
T: P             Z: X
```

Recursive DFS from N (the stack is the chain of unfinished calls):

| Action | Stack (bottom to top) |
|---|---|
| Visit N, then P, then T | N, P, T |
| T is a dead end: backtrack | N, P |
| Visit V, X, then W (before Z alphabetically), then R | N, P, V, X, W, R |
| R has no unvisited neighbours: backtrack twice | N, P, V, X |
| Visit Z, the exit | N, P, V, X, Z |

Visit order: **N, P, T, V, X, W, R, Z**. When Z is reached, the stack holds the route through the maze: **N → P → V → X → Z**. Notice that DFS does not promise the shortest route; it gives the first route it finds.

## Implementing BFS and DFS

Store the graph as a dictionary of lists, the Python form of an adjacency list.

```python
from collections import deque

walkways = {"B": ["C", "D"], "C": ["B", "G"], "D": ["B", "G", "H"],
            "G": ["C", "D", "K"], "H": ["D", "K", "M"], "K": ["G", "H", "S"],
            "M": ["H", "S"], "S": ["K", "M"]}

def breadth_first(graph, start):
    found_from = {start: None}      # visited vertices and their parent
    order = []
    waiting = deque([start])
    while waiting:
        vertex = waiting.popleft()
        order.append(vertex)
        for nxt in graph[vertex]:
            if nxt not in found_from:
                found_from[nxt] = vertex
                waiting.append(nxt)
    return order, found_from

def depth_first(graph, vertex, visited=None):
    if visited is None:
        visited = []
    visited.append(vertex)
    for nxt in graph[vertex]:
        if nxt not in visited:
            depth_first(graph, nxt, visited)
    return visited
```

`breadth_first(walkways, "B")[0]` returns `['B', 'C', 'D', 'G', 'H', 'K', 'M', 'S']`, matching worked example 1. `found_from` is both the visited set and the parent record for reading back a route. DFS can also use a loop and a list as a stack: pop a vertex, skip it if visited, otherwise visit it and push its unvisited neighbours.

## 3.11.1 Dijkstra's shortest path algorithm

Dijkstra's algorithm finds the shortest route from a start vertex to every other vertex in a **weighted** graph with no negative weights.

The version traced here:

1. Give the start vertex distance 0 and every other vertex distance ∞.
2. Choose the unvisited vertex with the smallest distance and mark it visited. Its distance is now final.
3. For each unvisited neighbour, work out (chosen vertex's distance + edge weight). If that is smaller than the neighbour's current distance, replace it and record the chosen vertex as the neighbour's previous vertex.
4. Repeat steps 2 and 3 until every vertex is visited.

The specification notes that a priority queue can be used to implement it: the vertex with the smallest distance is the one at the front.

**Worked example 3.** A courier leaves depot D. Road times in minutes: D–F 4, D–H 9, D–L 13, F–H 3, F–R 11, H–L 2, H–R 7, L–W 6, R–W 3.

| Vertex chosen | D | F | H | L | R | W |
|---|---|---|---|---|---|---|
| start | **0** | ∞ | ∞ | ∞ | ∞ | ∞ |
| D (0) | | 4 (D) | 9 (D) | 13 (D) | ∞ | ∞ |
| F (4) | | **4** | 7 (F) | 13 | 15 (F) | ∞ |
| H (7) | | | **7** | 9 (H) | 14 (H) | ∞ |
| L (9) | | | | **9** | 14 | 15 (L) |
| R (14) | | | | | **14** | 15 |
| W (15) | | | | | | **15** |

Key updates: from F, 4 + 3 = 7 beats 9 for H; from H, 7 + 2 = 9 beats 13 for L and 7 + 7 = 14 beats 15 for R; from R, 14 + 3 = 17 does not beat W's 15.

**Reading a route back.** Follow the previous vertices from the target. W came from L, L from H, H from F, F from D: **D → F → H → L → W, 15 minutes**. The direct road D–L (13) is not used, because D → F → H → L takes only 9.

### Applications of shortest path algorithms

- Satellite navigation and journey planners: quickest or shortest routes between places.
- Routing packets across a network: link-state routing protocols such as OSPF use Dijkstra's algorithm to work out the lowest-cost paths to every destination.

## 3.11.2 Tree traversal

A traversal visits every node of a binary tree exactly once. The three orders differ only in **when the current node is output** compared with its two subtrees:

| Traversal | Order at every node |
|---|---|
| Pre-order | node, then left subtree, then right subtree |
| In-order | left subtree, then node, then right subtree |
| Post-order | left subtree, then right subtree, then node |

**Worked example 4.**

```
          K
        /   \
       S     D
      / \     \
     B   N     Y
        /     /
       H     W
```

- Pre-order: **K, S, B, N, H, D, Y, W**
- In-order: **B, S, H, N, K, D, W, Y**
- Post-order: **B, H, N, S, W, Y, D, K**

To check by hand, trace a line round the outside of the tree from the left of the root. Mark each node on its left (pre-order), underneath (in-order) or on its right (post-order), and output nodes as the line passes their marks.

### Implementing the traversals

Each traversal is a short recursive subroutine. The base case is an empty subtree (`None`); the two recursive calls handle the left and right subtrees.

```python
class TreeNode:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

def pre_order(node):
    if node is not None:
        print(node.data, end=" ")
        pre_order(node.left)
        pre_order(node.right)

def in_order(node):
    if node is not None:
        in_order(node.left)
        print(node.data, end=" ")
        in_order(node.right)

def post_order(node):
    if node is not None:
        post_order(node.left)
        post_order(node.right)
        print(node.data, end=" ")
```

Only the `print` line moves. If the tree is held in parallel arrays (data, left pointer, right pointer), pass an index instead of an object and use a rogue value such as −1 for "no child".

## Uses of the traversals

| Traversal | Uses named in the specification |
|---|---|
| Pre-order | Copying a tree; producing a prefix expression from an expression tree |
| In-order | Binary search trees: outputting the contents of a binary search tree in ascending order |
| Post-order | Producing a postfix expression from an expression tree; emptying a tree |

**Worked example 5: expression tree.** The expression (9 − 4) × (2 + 12 / 3) is stored with operators at internal nodes and operands at leaves:

```
            ×
         /     \
        −       +
       / \     / \
      9   4   2   /
                 / \
               12   3
```

- Pre-order gives the **prefix** expression: `× − 9 4 + 2 / 12 3`
- Post-order gives the **postfix** expression: `9 4 − 2 12 3 / + ×`
- In-order gives `9 − 4 × 2 + 12 / 3`: the infix form, but with its brackets lost.

Evaluating the postfix form with a stack: push 9 and 4, then − gives 5; push 2, 12 and 3, then / gives 4, + gives 6; × gives **30**, the same as (9 − 4) × (2 + 4).

**Worked example 6: binary search tree.** Insert kiwi, fig, plum, date, lime, pear and yam into an empty binary search tree:

```
           kiwi
         /      \
       fig       plum
      /         /    \
    date      lime    yam
                 \
                 pear
```

In-order outputs **date, fig, kiwi, lime, pear, plum, yam**: alphabetical order, because every left subtree holds smaller values and every right subtree larger ones.

**Copying** uses pre-order: each parent is created before its children, so inserting kiwi, fig, date, plum, lime, pear, yam into a new tree rebuilds the same shape. **Emptying** uses post-order (date, fig, pear, lime, yam, plum, kiwi): a node is deleted only after both its subtrees, so no node is removed while its children can only be reached through it.

## Common errors

- Swapping the structures: BFS uses a queue, DFS a stack.
- Marking a vertex visited when it is removed from the BFS queue rather than when it is added, so it is queued twice.
- Claiming DFS finds the shortest route. Only BFS does, and only in an unweighted graph.
- In Dijkstra, choosing the next vertex by the smallest edge weight instead of the smallest total distance.
- Writing pre-order as "root, right, left". Left always comes before right in all three traversals.
- Saying in-order sorts any binary tree; it only does so for a binary search tree.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards, published by OxfordAQA: section 3.11 Advanced algorithms (3.11.1 Graph algorithms and 3.11.2 Tree algorithms).
