---
title: "AQA A-Level Computer Science: Fundamentals of Algorithms (7517)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of algorithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "First teaching 2015"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-algorithms"
description: "Graph and tree traversal, Reverse Polish notation, searching and sorting algorithms, and Dijkstra's shortest path algorithm, with their time complexities -- the full content of Section 4.3 for AQA A-Level Computer Science (7517)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-09
featured: false
---

This guide covers **4.3 Fundamentals of algorithms**, the third of 14 subject-content sections in the
A-level-only content of AQA Computer Science (7517). It follows directly from 4.1 Fundamentals of
Programming and 4.2 Fundamentals of Data Structures, since every algorithm here operates on the data
structures (arrays, stacks, queues, trees, graphs) introduced in those earlier sections. These notes
complement the site's guides to
[Fundamentals of Programming](/resources/aqa-a-level-computer-science-fundamentals-of-programming/) and
[Data Structures and Arrays](/resources/a-level-aqa-computer-science-data-structures-and-arrays/).

## Where this fits in 7517

This section is examined by tracing algorithms by hand and analysing their time complexity, not by
writing original code -- it is a written-paper topic (Paper 2), distinct from the on-screen programming
content of Paper 1. Expect exam questions to give you an algorithm and a specific input, and ask you to
trace its exact execution step by step.

## Syllabus coverage

**AQA A-LEVEL COMPUTER SCIENCE (7517) -- 4.3 FUNDAMENTALS OF ALGORITHMS**

- **4.3.1 Graph-traversal**: trace breadth-first and depth-first search algorithms and describe typical
  applications (breadth-first: shortest path for an unweighted graph; depth-first: navigating a maze)
- **4.3.2 Tree-traversal**: trace pre-order, post-order and in-order tree-traversal algorithms and
  describe their uses (pre-order: copying a tree; in-order: binary search tree, outputting contents in
  ascending order; post-order: infix-to-RPN conversion, producing a postfix expression, emptying a tree)
- **4.3.3 Reverse Polish**: convert simple expressions between infix and Reverse Polish Notation (RPN)
  form, and understand why RPN is used (eliminates the need for brackets; suitable for stack-based
  evaluation; used in stack-based interpreters such as PostScript and bytecode)
- **4.3.4.1 Linear search**: trace and analyse its time complexity, O(n)
- **4.3.4.2 Binary search**: trace and analyse its time complexity, O(log n)
- **4.3.4.3 Binary tree search**: trace and analyse its time complexity, O(log n)
- **4.3.5.1 Bubble sort**: trace and analyse its time complexity, O(n^2) -- included as an example of a
  particularly inefficient sorting algorithm
- **4.3.5.2 Merge sort**: trace and analyse its time complexity, O(n log n) -- an example of the "divide
  and conquer" approach to problem solving
- **4.3.6.1 Dijkstra's shortest path algorithm**: understand and be able to trace it, and be aware of its
  applications (students are not expected to recall the steps unprompted)

## How to approach it

Every algorithm in this section falls into one of three exam-question types: trace it on a given input,
state its time complexity, or explain when you would use it over an alternative. Build a single
comparison table across all the searching and sorting algorithms -- complexity, best use case, what data
structure it needs (sorted or unsorted, array or tree) -- since "compare X and Y" questions are common
and reward exactly this kind of side-by-side knowledge.

## Official syllabus

AQA A-level Computer Science (7517) specification, first teaching 2015 --
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content/fundamentals-of-algorithms).

## Graph and tree traversal: the same idea, two structures

Breadth-first search explores a graph level by level using a queue, making it the natural choice for
finding the shortest path in an unweighted graph. Depth-first search explores as far as possible along
one branch before backtracking, using a stack, which is why it suits maze-navigation problems. Tree
traversal applies the same underlying idea to a more constrained structure: in-order traversal of a
binary search tree always outputs values in ascending order, which is the single fact most exam
questions on tree traversal are built around.

## Searching and sorting: complexity is the exam's real focus

Linear search checks every element in turn (O(n)) and works on unsorted data; binary search repeatedly
halves the search space (O(log n)) but requires the data to already be sorted. This trade-off -- binary
search is faster but has a precondition linear search does not -- is a frequent short-answer question.
Bubble sort (O(n^2)) is deliberately included as an example of an inefficient algorithm to contrast
against merge sort (O(n log n)), which achieves its better complexity through the divide-and-conquer
principle of repeatedly splitting the problem in half.

## Worked example: converting infix to Reverse Polish Notation

The expression `(3 + 4) * 2` converts to RPN as follows, using a simple stack-based method:

```
Step 1 - scan left to right, output operands immediately:
3, 4 go straight to output.

Step 2 - push operators onto a stack, respecting brackets:
'(' opens a scope; '+' is pushed; ')' closing pops '+' to output.

Step 3 - continue scanning:
'*' is pushed once no higher-priority operator blocks it.

Step 4 - at the end, pop all remaining operators to output:
Result: 3 4 + 2 *
```

Reading `3 4 + 2 *` back: add 3 and 4 (giving 7), then multiply by 2 (giving 14) -- exactly matching
`(3 + 4) * 2`, but with no brackets needed, which is precisely why RPN suits stack-based evaluation.

## Common mistakes

Confusing pre-order, in-order and post-order traversal outputs for the same tree. Stating binary search's
complexity without noting its precondition that the data must already be sorted. Describing bubble sort's
inefficiency without being able to state its actual complexity, O(n^2). Forgetting that Dijkstra's
algorithm's exact steps are not required for recall -- only tracing a worked example and knowing its
applications. Reversing the queue/breadth-first and stack/depth-first pairing.

## Quick revision checklist

- Trace breadth-first and depth-first graph traversal on a given graph, and state a typical use for each.
- Trace pre-order, post-order and in-order tree traversal on a given binary tree.
- Convert an infix expression to RPN and back, and explain why RPN avoids the need for brackets.
- State the time complexity of linear search, binary search, binary tree search, bubble sort and merge
  sort, and explain the trade-offs between them.
- Trace Dijkstra's shortest path algorithm on a given weighted graph and describe an application.
