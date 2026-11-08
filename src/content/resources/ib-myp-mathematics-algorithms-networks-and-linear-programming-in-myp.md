---
title: "IB MYP Mathematics: Algorithms, networks and linear programming in MYP (MYP Mathematics)"
seoTitle: "MYP Maths Algorithms, Networks & Linear Programming"
resourceType: "study-guides"
subject: "mathematics"
level: ["ib"]
topic: "Algorithms, networks and linear programming in MYP"
boards: ["ib"]
qualifications: ["ib-myp"]
syllabusCodes: ["MYP Mathematics"]
syllabusSeries: "From 2020, first assessment 2022"
order: 342
syllabusTopics:
  - qualification: "ib-myp"
    topic: "ib-myp-mathematics-branches-of-mathematical-study"
    subtopic: "ib-myp-mathematics-branches-of-mathematical-study-thinking-with-models"
description: "Study guide to MYP Mathematics algorithms, flowcharts, inequalities, linear programming and weighted networks, with worked examples and common errors."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

This guide follows the IB *Mathematics guide (for use from September 2020/January 2021)*, the MYP Mathematics framework, in the branch called **Thinking with models**. It covers the algorithm, network and linear programming rows of that branch, plus the idea of applying and limiting models. Algorithms sit in the MYP 4-5 standard column, with flowcharts and simple algorithms appearing earlier in the Algebra row for MYP 1-3. Linear programming and networks are listed in the MYP 4-5 **extended** column. MYP has no tiers, and nothing here is an enrichment item.

Related pages: [revision notes](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-revision-notes/), [practice questions](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-practice/), the [MYP Mathematics hub](/boards/ib/ib-myp/mathematics/), the [printable checklist](/checklists/ib/ib-myp/mathematics/), the [criteria in practice guide](/resources/ib-myp-mathematics-criteria-in-practice/) and the [free diagnostics](/diagnostics/).

## What this unit covers

| Topic | Skill you need | Framework column |
|---|---|---|
| Flowcharts and simple algorithms | Read, trace and draw a flowchart for a short procedure | MYP 1-3 (Algebra row) |
| Algorithms | Analyse and use a well-defined procedure to solve a multi-step problem | MYP 4-5 standard |
| Linear programming, including inequalities | Write constraints as inequalities, show the feasible region, find the best value of an objective | MYP 4-5 extended |
| Networks | Use the language of vertices (nodes), edges (arcs) and paths | MYP 4-5 extended |
| Calculating network pathways, weighted networks | Find path lengths, count routes, find the shortest weighted path | MYP 4-5 extended |
| Applications and limitations of models | Say what a model assumes and when its answer should be doubted | Whole branch |

## 1. Algorithms and flowcharts

An **algorithm** is a well-defined procedure: a finite list of ordered steps that turns an input into an output, with no step left to guesswork. 

A flowchart draws the same procedure. Ovals mark start and end, rectangles hold actions, parallelograms hold input and output, and diamonds hold yes/no decisions. A decision with an arrow looping back gives you a **loop**.

The command term **trace** means to follow an algorithm and record what happens at each step. A trace table does this: one column per variable, one row per pass.

### Worked example 1: Euclid's algorithm

This algorithm finds the highest common factor of two whole numbers.

1. Input a and b, with a larger than b.
2. Find r, the remainder when a is divided by b.
3. If r = 0, output b and stop.
4. Otherwise replace a by b, replace b by r, and go to step 2.

Trace it for a = 391 and b = 221.

| a | b | r |
|---|---|---|
| 391 | 221 | 170 |
| 221 | 170 | 51 |
| 170 | 51 | 17 |
| 51 | 17 | 0 |

The output is **17**. Check: 391 = 17 × 23 and 221 = 17 × 13, and 23 and 13 share no factor.

### Worked example 2: a loop with a stopping test

A savings account starts at 500 and grows by 4% each year. The algorithm adds 4% of the balance and then asks whether the balance is above 600. It stops when the answer is yes and outputs the number of years.

| Year | Balance |
|---|---|
| 1 | 520.00 |
| 2 | 540.80 |
| 3 | 562.43 |
| 4 | 584.93 |
| 5 | 608.33 |

After year 5 the test is true, so the output is **5 years**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--06-myp-savings-loop-trace.webp" width="900" height="925" alt="Balances 500, 520.00, 540.80, 562.43, 584.93 and 608.33 plotted against a dashed line at 600. The test is no for years 1 to 4 and yes after year 5, so the output is 5 years." loading="lazy">
  <figcaption>The loop stops in year 5 when the balance first passes 600.</figcaption>
</figure>


### Analysing an algorithm

When you analyse a procedure, ask four questions.

- **Does it stop?** Each pass of Euclid's algorithm makes b smaller, so it must reach a remainder of 0.
- **Is it correct?** Test it on a case where you know the answer.
- **How many steps does it need?** This is its efficiency.
- **When does it fail?** Check unusual inputs such as 0, negative numbers or a very large list.

Take the "halve-and-average" method for a square root. To find √20 start with a guess x = 4 and repeatedly replace x by (x + 20/x) ÷ 2. The values are 4.5, then 4.4722, then 4.47214. The true value is 4.47214 to 5 decimal places, so the sequence settles after three passes. It needs a stopping rule: stop when two successive values agree to the accuracy you need.

To compare efficiency, suppose a sorted list has 1000 names. A **linear search** checks one name at a time and needs up to 1000 checks. A **halving search** checks the middle name, discards half the list, and repeats; it needs at most 10 checks, because 2¹⁰ = 1024 is the first power of 2 above 1001. The halving search only works if the list is sorted, which is a condition on the input.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--01-euclid-flowchart-trace.webp" width="900" height="990" alt="Flowchart of Euclid’s algorithm with start and stop ovals, input and output parallelograms, a remainder process box and an r = 0 decision with a looping no branch. The trace table for a = 391 and b = 221 has four passes ending with r = 0. The output b = 17 is the highest common factor." loading="lazy">
  <figcaption>The same procedure as a flowchart and as a trace table.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--07-myp-halve-average-sqrt.webp" width="900" height="930" alt="Starting from 4, the values 4.5, 4.4722, 4.47214 and 4.47214 are correct to 1, 3, 5 and 5 decimal places; two equal passes trigger the stopping rule." loading="lazy">
  <figcaption>Each pass fixes more decimal places until two passes agree.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--08-myp-search-efficiency.webp" width="900" height="1140" alt="A long bar for up to 1000 linear checks beside a tiny bar for at most 10 halving checks, with the list size 1000, 500, 250, 125, 62, 31, 15, 7, 3, 1 before each halving check." loading="lazy">
  <figcaption>Halving a sorted list needs at most 10 checks for 1000 names.</figcaption>
</figure>


## 2. Inequalities and linear programming (extended)

### Reading and drawing inequalities

| Words | Inequality |
|---|---|
| at least 5 | x ≥ 5 |
| at most 12 | x ≤ 12 |
| fewer than 8 | x < 8 |
| more than twice as many y as x | y > 2x |
| total of x and y no more than 25 | x + y ≤ 25 |

To show an inequality on a graph, draw its boundary line first. Draw a **solid line** when the boundary is included (≤, ≥) and a **dashed line** when it is not (<, >). Then test a point not on the line (the origin is easy when the line misses it) and shade the side that makes the statement true. Say whether you shade the wanted or the unwanted side.

Example: show 2x + y < 8, x ≥ 1 and y > 0. The boundary 2x + y = 8 is dashed. At the origin 0 < 8 is true, so the side containing the origin is wanted. The wanted region is a triangle with corners (1, 0), (4, 0) and (1, 6). The edges 2x + y = 8 and y = 0 are not included because those inequalities are strict; the edge x = 1 is included.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--09-myp-strict-inequality-region.webp" width="900" height="1140" alt="The triangle with corners (1, 0), (4, 0), (1, 6): x = 1 is solid, the other two edges dashed, and all three corners are open circles because each lies on a strict edge. (2, 2) is inside." loading="lazy">
  <figcaption>Solid edges are included, dashed ones are not, so all three corners are excluded.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--04-inequality-region.webp" width="900" height="890" alt="A graph with a solid line y = 1, a dashed line y = x and a solid line x + y = 6 bounds a shaded triangle with corners (1, 1), (5, 1) and (3, 3). A test point inside satisfies all three inequalities. Solid lines are included; dashed lines are not." loading="lazy">
  <figcaption>The region is where all the inequalities are true at once.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--05-reading-a-region.webp" width="900" height="970" alt="An unshaded triangle with corners (1, 0), (1, 4) and (5, 4). Its edges give x ⩾ 1 (solid, right), y &lt; 4 (broken, below) and y ⩾ x − 1 (solid, above). The test point (2, 3) satisfies all three." loading="lazy">
  <figcaption>Name each boundary, choose solid or broken, then pick the side that holds the unshaded region.</figcaption>
</figure>


### Linear programming

A **linear programming** problem asks for the largest or smallest value of an **objective function** while several linear **constraints** are obeyed. The set of points that obey every constraint is the **feasible region**. The best value always occurs at a corner of the feasible region, or along an edge joining two equally good corners.

Method:

1. Define the variables, with units.
2. Write each constraint as an inequality, including x ≥ 0 and y ≥ 0 when negatives make no sense.
3. Draw the lines and find the feasible region.
4. Find the coordinates of each corner, by reading the graph or solving two boundary equations together.
5. Put each corner into the objective function.
6. Choose the best, then answer in the context.

### Worked example 3: a craft stall

<!-- marlbridge-diagram:maths-b33-linear-programming-craft-stall -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b33-linear-programming-craft-stall.svg" aria-label="Open full-size diagram: maths-b33-linear-programming-craft-stall"><img src="/images/learning/mathematics/maths-b33-linear-programming-craft-stall.svg" width="1600" height="1050" alt="The constraints 3x+2y≤60, x+y≤25, x≥0, y≥0 give corners (0,0),(20,0),(10,15),(0,25). Evaluating P=8x+6y gives 0,160,170,150, so the maximum occurs at (10,15)." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>The constraints 3x+2y≤60, x+y≤25, x≥0, y≥0 give corners (0,0),(20,0),(10,15),(0,25). Evaluating P=8x+6y gives 0,160,170,150, so the maximum occurs at (10,15). Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b33-linear-programming-craft-stall -->


A stall makes x candles and y soaps. A candle takes 3 minutes of heating time and a soap takes 2; there are 60 minutes available. The stall has space for at most 25 items. Profit is 8 on each candle and 6 on each soap. Maximise P = 8x + 6y.

Constraints: 3x + 2y ≤ 60, x + y ≤ 25, x ≥ 0, y ≥ 0.

Corners of the feasible region:

- (0, 0) from the axes.
- (20, 0) where 3x + 2y = 60 meets y = 0.
- (0, 25) where x + y = 25 meets x = 0.
- Where the two slanted lines meet: from x + y = 25, y = 25 − x. Then 3x + 2(25 − x) = 60 gives x + 50 = 60, so x = 10 and y = 15.

Each corner must satisfy every constraint: (0, 25) gives 50 ≤ 60, and (20, 0) gives 20 ≤ 25, so both are allowed.

| Corner | P = 8x + 6y |
|---|---|
| (0, 0) | 0 |
| (20, 0) | 160 |
| (10, 15) | 170 |
| (0, 25) | 150 |

The best plan is **10 candles and 15 soaps, giving a profit of 170**. Both slanted constraints are used up there.

If the variables must be whole numbers, check that the best corner has integer coordinates. If it does not, test the whole-number points inside the region near it. Rounding is not guaranteed to give the best answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--02-lp-candle-stall.webp" width="900" height="1090" alt="Graph of candles x against soaps y with the feasible region bounded by the axes, 3x + 2y = 60 and x + y = 25. Corners O(0,0), A(20,0), B(10,15) and C(0,25) give profits 0, 160, 170 and 150. A dashed profit line 8x + 6y = 170 touches the region only at B." loading="lazy">
  <figcaption>The feasible region, its four corners and the best corner B(10, 15) with P = 170.</figcaption>
</figure>


## 3. Networks and weighted networks (extended)

A **network** is a set of **vertices** (also called **nodes**) joined by **edges** (also called **arcs**). Some authors keep "arc" for an edge with a direction; always check which meaning a question uses. A **path** is a sequence of edges that takes you from one vertex to another without passing through any vertex twice. The **degree** of a vertex counts the edges that end there. In a **connected** network every vertex can be reached from every other.

In a **weighted network** each edge carries a number, such as distance, time or cost. The **length** of a path is the sum of the weights along it. In a **directed network** each arc has an arrow and can only be used one way.

A quick check: the degrees in any network add up to twice the number of edges, because each edge touches two vertices.

### Worked example 4: counting and measuring paths

<!-- marlbridge-diagram:maths-b33-weighted-network-shortest-path -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b33-weighted-network-shortest-path.svg" aria-label="Open full-size diagram: maths-b33-weighted-network-shortest-path"><img src="/images/learning/mathematics/maths-b33-weighted-network-shortest-path.svg" width="1600" height="1050" alt="The network has edges AB=4, AC=2, BC=1, BD=5, CD=8, CE=10, DE=2, DF=6, EF=3. Paths A–B–D–F and A–C–E–F each total 15. The highlighted route A–C–B–D–E–F totals 13, the shortest route." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>The network has edges AB=4, AC=2, BC=1, BD=5, CD=8, CE=10, DE=2, DF=6, EF=3. Paths A–B–D–F and A–C–E–F each total 15. The highlighted route A–C–B–D–E–F totals 13, the shortest route. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b33-weighted-network-shortest-path -->


Edges and weights: AB 4, AC 2, BC 1, BD 5, CD 8, CE 10, DE 2, DF 6, EF 3.

Two paths from A to F:

- A-B-D-F has length 4 + 5 + 6 = 15.
- A-C-E-F has length 2 + 10 + 3 = 15.

Both are 15, but neither is shortest. Listing every path (this network has 13) quickly becomes impractical, so you need an algorithm.

### Finding the shortest path by labelling

1. Give the start vertex the label 0 and every other vertex no label yet.
2. From the vertex with the smallest label that is not yet finished, work out label plus edge weight to each neighbour. If that beats the neighbour's current label, replace it.
3. Mark the vertex as finished and repeat until the destination is finished.
4. Trace back from the destination, always going to the vertex that gave each label.

For the network above:

| Step | Finished | Labels after the step (A, B, C, D, E, F) |
|---|---|---|
| 1 | A | 0, 4, 2, -, -, - |
| 2 | C | 0, 3, 2, 10, 12, - |
| 3 | B | 0, 3, 2, 8, 12, - |
| 4 | D | 0, 3, 2, 8, 10, 14 |
| 5 | E | 0, 3, 2, 8, 10, 13 |

Vertex F ends with label 13. Tracing back gives F from E, E from D, D from B, B from C, C from A. The shortest path is **A-C-B-D-E-F, length 13**. It uses the weight-1 edge BC, which a nearest-neighbour approach would miss.

In a directed network the labelling is identical, except that you only follow arcs in the direction of their arrows.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--03-shortest-path-labelling.webp" width="900" height="940" alt="Six-vertex weighted network with the final label on each vertex (A 0, B 3, C 2, D 8, E 10, F 13). The shortest path A-C-B-D-E-F, length 13, is highlighted. A-B-D-F and A-C-E-F are both 15." loading="lazy">
  <figcaption>Final labels and the shortest path A-C-B-D-E-F = 13.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--10-myp-degree-sum-check.webp" width="900" height="910" alt="Network with six vertices and nine edges. Degrees 2, 3, 4, 4, 3, 2 add to 18, which is 9 edges times 2 ends." loading="lazy">
  <figcaption>The degrees add up to twice the number of edges.</figcaption>
</figure>


## 4. Applications and limitations of models

A model replaces a real situation with equations, inequalities or a network, and every model rests on assumptions. When you apply one, state them and test them against the context.

- **Linear programming** assumes that profit and resource use scale in a straight line, that quantities can be split as needed, and that the constraints listed are the only ones. A real stall may offer a discount on bulk sales, or sell only whole items.
- **Network models** assume that weights are fixed. Real travel times change with traffic, weather or closures, so a shortest path is only shortest for the numbers you used.
- **Algorithms** assume their input is valid. A halving search on an unsorted list gives wrong answers with no warning.

A good evaluation names one assumption, says whether it is reasonable, and says how the answer would change if it failed. This kind of reasoning supports criterion D, the criterion on applying mathematics to real situations, and the clear presentation of a method supports criterion C.

## Common errors

- Trace tables that skip a pass, or misjudge a loop test so the loop stops one pass early or late.
- Using a solid line for a strict inequality, or shading the wrong side without testing a point.
- Reading a corner off the graph when it is not a lattice point; solve the two equations instead.
- Checking only some corners, or forgetting the axis corners.
- Stopping the labelling as soon as the destination gets a label, rather than when it is finished.
- Following an arc backwards in a directed network.

## Frequently asked questions

**What does the command term "trace" mean?**
To trace an algorithm means to follow it and record what happens at each step, usually in a trace table with a row for each pass.

**How do you analyse an algorithm?**
Ask four questions: does it stop, is it correct (test it on a case where you know the answer), how many steps does it need, and when does it fail, for example with 0, negative numbers or a very large list.

**What is linear programming?**
Linear programming finds the largest or smallest value of an objective function while several constraints, written as inequalities, must all be satisfied. The best value occurs at a corner of the feasible region.

**When do you use a dashed line for an inequality graph?**
Draw a solid line when the boundary is included (≤ or ≥) and a dashed line when it is not (< or >). Then use a test point such as the origin to decide which side satisfies the inequality.

## Where to go next

Try the practice questions, then condense the unit with the revision notes (both linked at the top). For the course as a whole, read the [syllabus guide](/resources/ib-myp-mathematics-syllabus-guide/).

## Official syllabus

IB *Mathematics guide (for use from September 2020/January 2021)*, MYP Mathematics, first assessment 2022, published by the International Baccalaureate Organization. This page paraphrases the Thinking with models branch of the framework.
