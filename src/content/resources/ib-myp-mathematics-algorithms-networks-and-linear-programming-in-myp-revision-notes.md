---
title: "IB MYP Mathematics: Algorithms, networks and linear programming in MYP (MYP Mathematics) -- Revision Notes"
seoTitle: "MYP Maths Algorithms & Networks Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed MYP Mathematics revision notes on algorithms, flowcharts, inequalities, linear programming and weighted-network shortest paths, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense the algorithm, network and linear programming content of the Thinking with models branch of the IB *Mathematics guide (for use from September 2020/January 2021)*, MYP Mathematics, first assessment 2022. Algorithms are in the MYP 4-5 standard column (simple flowcharts appear in MYP 1-3 Algebra). Linear programming and networks are in the MYP 4-5 **extended** column. For full explanations, start with the [study guide](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp/), then test yourself on the [practice questions](/resources/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp-practice/).

Also useful: the [MYP Mathematics hub](/boards/ib/ib-myp/mathematics/), the [printable checklist](/checklists/ib/ib-myp/mathematics/) and the [free diagnostics](/diagnostics/).

## Key terms

| Term | Meaning |
|---|---|
| Algorithm | A finite, ordered, well-defined set of steps from input to output |
| Flowchart | A diagram of an algorithm: ovals start/end, rectangles actions, parallelograms input/output, diamonds decisions |
| Trace | Follow an algorithm and record each step, usually in a trace table |
| Constraint | An inequality that limits the variables |
| Objective function | The quantity to maximise or minimise |
| Feasible region | All points that satisfy every constraint |
| Vertex (node) | A point in a network |
| Edge (arc) | A link between two vertices; arc may mean a directed edge, so read the question |
| Path | A route along edges that visits no vertex twice |
| Weighted network | Each edge carries a number such as distance, time or cost |
| Degree | How many edges end at a vertex |

## Algorithms: method

1. Write down every variable and its starting value.
2. Do one pass of the steps in order, recording each variable's new value.
3. Evaluate the decision exactly as written (is it above, at or below the limit?).
4. Repeat until the stopping condition is true.
5. State the output with units.

**Analysing an algorithm:** does it stop, is it correct on a known case, how many steps does it take, and which inputs break it?

**Worked reminder.** Subtract-the-smaller algorithm for a = 105, b = 63: while a ≠ b, replace the larger number by the difference. The pairs are (105, 63), (42, 63), (42, 21), (21, 21). The output is **21**, the highest common factor of 105 and 63.

**Efficiency.** A linear search of n items needs up to n checks. A halving search needs k checks, where 2ᵏ − 1 is at least n, but it needs a sorted list. For 1000 items the figures are 1000 against 10.

**Flowchart reminder.** Read a flowchart by following the arrows from the start oval. At a diamond, choose the arrow labelled with the true answer. Example in words: start with count = 0 and total = 50. Is total below 20? If no, subtract 12 from total, add 1 to count, and ask again. If yes, output count. The totals are 50, 38, 26, 14. Three subtractions were needed, so the output is **3**. A common slip is to count the starting total as a pass.

**Command terms.** Trace means follow and record an algorithm. State and write down need no working. Use means apply a rule or method. Verify means give evidence that a result is right. Suggest means propose a possible answer. Solve allows algebraic, numerical or graphical methods.

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


## Inequalities and linear programming (extended)

| Wording | Symbol |
|---|---|
| at least, no fewer than | ≥ |
| at most, no more than | ≤ |
| fewer than, below | < |
| more than, above | > |

- Boundary included (≤, ≥): solid. Boundary excluded (<, >): dashed.
- Test a point (usually the origin) to choose the side.
- A feasible region is a polygon whose corners are found from pairs of boundary lines.

**Method in steps**

1. Define the variables.
2. Write all constraints, including x ≥ 0 and y ≥ 0 if relevant.
3. Draw the region.
4. Find every corner (solve two equations when the corner is not clear).
5. Evaluate the objective at each corner.
6. Pick the largest or smallest and answer in words.

**Worked reminder (minimise).** Minimise C = 3x + 2y subject to x + y ≥ 6, x + 3y ≥ 10, x ≥ 0 and y ≥ 0.

The corners are where each pair of lines meets, or where a line meets an axis. Solving x + y = 6 with x + 3y = 10 gives 2y = 4, so y = 2 and x = 4.

| Corner | C = 3x + 2y |
|---|---|
| (10, 0) | 30 |
| (4, 2) | 16 |
| (0, 6) | 12 |

The minimum is **12 at (0, 6)**. With only "at least" constraints the region is open on the far side, so a minimum is the question that makes sense.

**Maximise reminder.** For P = ax + by, the lines of constant P are parallel with gradient −a/b. Slide such a line across the region; the last corner it touches gives the maximum. This is a quick check on your table of values.

**Integer variables:** if the best corner is not whole-number, check the nearby whole-number points inside the region. Rounding is not guaranteed to be best.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--02-lp-candle-stall.webp" width="900" height="1090" alt="Graph of candles x against soaps y with the feasible region bounded by the axes, 3x + 2y = 60 and x + y = 25. Corners O(0,0), A(20,0), B(10,15) and C(0,25) give profits 0, 160, 170 and 150. A dashed profit line 8x + 6y = 170 touches the region only at B." loading="lazy">
  <figcaption>The feasible region, its four corners and the best corner B(10, 15) with P = 170.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--09-myp-strict-inequality-region.webp" width="900" height="1140" alt="The triangle with corners (1, 0), (4, 0), (1, 6): x = 1 is solid, the other two edges dashed, and all three corners are open circles because each lies on a strict edge. (2, 2) is inside." loading="lazy">
  <figcaption>Solid edges are included, dashed ones are not, so all three corners are excluded.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/inequalities--05-reading-a-region.webp" width="900" height="970" alt="An unshaded triangle with corners (1, 0), (1, 4) and (5, 4). Its edges give x ⩾ 1 (solid, right), y &lt; 4 (broken, below) and y ⩾ x − 1 (solid, above). The test point (2, 3) satisfies all three." loading="lazy">
  <figcaption>Name each boundary, choose solid or broken, then pick the side that holds the unshaded region.</figcaption>
</figure>


## Networks: method

| Task | How |
|---|---|
| Path length | Add the weights along the path |
| Count routes | List systematically, starting from the start vertex, and never repeat a vertex |
| Degree check | Add all the degrees; the total is twice the number of edges |
| Shortest path | Label with smallest-first; trace back from the destination |

**Adjacency check.** For edges XY, XZ, YZ and ZW the degrees are X 2, Y 2, Z 3 and W 1. The total is 8, which is 2 × 4 edges, so the degrees are consistent.

**Shortest-path steps**

1. Start vertex gets 0.
2. Take the unfinished vertex with the smallest label.
3. For each neighbour, test label + weight; keep it if smaller.
4. Mark the vertex finished.
5. Stop when the destination is finished.
6. Trace back to read off the path.

**Worked reminder (directed).** Arcs: H to J 4, H to K 2, K to J 1, J to L 5, K to L 8, L to M 3, K to M 11, J to M 9. Work from H.

- Finish H (0): J 4, K 2.
- Finish K (2): J becomes 3, L 10, M 13.
- Finish J (3): L becomes 8, M 12.
- Finish L (8): M becomes 11.

M is 11. Tracing back gives **H-K-J-L-M, length 11**. In total there are six paths from H to M.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--03-shortest-path-labelling.webp" width="900" height="940" alt="Six-vertex weighted network with the final label on each vertex (A 0, B 3, C 2, D 8, E 10, F 13). The shortest path A-C-B-D-E-F, length 13, is highlighted. A-B-D-F and A-C-E-F are both 15." loading="lazy">
  <figcaption>Final labels and the shortest path A-C-B-D-E-F = 13.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-myp-mathematics-algorithms-networks-and-linear-programming-in-myp--10-myp-degree-sum-check.webp" width="900" height="910" alt="Network with six vertices and nine edges. Degrees 2, 3, 4, 4, 3, 2 add to 18, which is 9 edges times 2 ends." loading="lazy">
  <figcaption>The degrees add up to twice the number of edges.</figcaption>
</figure>


## Models: applications and limits

| Model | Assumption to state | What could go wrong |
|---|---|---|
| Linear programming | Straight-line costs and profits; quantities divisible | Bulk discounts; whole items only; missing constraints |
| Weighted network | Fixed weights | Traffic, closures, weather |
| Algorithm | Valid input | Unsorted list for a halving search; zero or negative input |

Always say whether the assumption is reasonable and how the answer would change if it failed. Linking this to criterion D, the criterion on applying mathematics to real situations, means naming the real situation, not just the maths.

## Must-know distinctions

- **Edge vs path:** an edge joins two vertices; a path is a chain of edges.
- **Fewest edges vs shortest:** the shortest path has the least total weight, not the fewest edges.
- **Feasible vs optimal:** feasible means every constraint holds; optimal means the objective is best among feasible points.
- **Strict vs inclusive:** < and > use dashed lines and exclude the boundary.
- **Trace vs describe:** tracing means recording values step by step; describing means stating in words what the algorithm does.

## Quick self-test

1. Write "at most 40 items" as an inequality in x.
2. What type of line do you draw for y > 3x?
3. A network has 7 edges. What is the sum of the degrees?
4. An algorithm starts with n = 3 and does "n becomes 2n + 1" three times. What is the output?
5. A path uses edges of weight 4, 5 and 6. What is its length?
6. Find P = 3x + 2y at the point (4, 5).
7. A sorted list has 64 names. What is the largest number of checks for a halving search?
8. Is (6, 3) feasible for x + y ≤ 9 and x + 3y ≤ 15?
9. Name one assumption of a linear programming model.
10. In the directed network above, what is the shortest length from H to M?

### Answers

1. x ≤ 40.
2. Dashed.
3. 14.
4. 7, then 15, then **31**.
5. 15.
6. 3(4) + 2(5) = 22.
7. 7 checks: 2⁶ − 1 = 63 names would need only 6, but 2⁷ − 1 = 127 covers 64 names.
8. Yes. It gives 9 ≤ 9 and 15 ≤ 15, so it lies on both boundaries.
9. For example, profit per item is constant, or items can be split.
10. 11.

## Where marks are usually lost

- Skipping a pass in a trace table, or writing the new value in the wrong row.
- Misreading "at least" and "at most".
- Dashed against solid boundary lines.
- Shading without testing a point, or not saying which side is wanted.
- Checking only some corners of the feasible region.
- Giving the objective value without the point that produced it.
- Choosing the path with the fewest edges instead of the least total weight.
- Stopping a shortest-path search once the destination first receives a label.
- Following an arc against its arrow.
- Calling a model's answer exact without stating an assumption.

## Frequently asked questions

**What is an algorithm in IB MYP Mathematics?**
An algorithm is a well-defined procedure: a finite list of ordered steps that turns an input into an output. A flowchart draws the same procedure, and a trace table records what happens at each step.

**What is a weighted network?**
A weighted network is a set of vertices joined by edges where each edge carries a number, such as a distance, time or cost. The length of a path is the total of the weights along it.

**Are linear programming and networks core MYP Mathematics content?**
In the IB MYP Mathematics framework, linear programming (with inequalities), networks and weighted networks are MYP 4-5 extended content. Flowcharts appear at MYP 1-3, and analysing algorithms is MYP 4-5 standard content.

**When should you stop labelling in a shortest-path method?**
Keep going until the destination's label is final, not as soon as it first receives a label, because a shorter route may still be found through another vertex.

## Official syllabus

IB *Mathematics guide (for use from September 2020/January 2021)*, MYP Mathematics, first assessment 2022, published by the International Baccalaureate Organization. The notes paraphrase the Thinking with models branch of the framework.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--04-inequality-region.webp" width="900" height="890" alt="A graph with a solid line y = 1, a dashed line y = x and a solid line x + y = 6 bounds a shaded triangle with corners (1, 1), (5, 1) and (3, 3). A test point inside satisfies all three inequalities. Solid lines are included; dashed lines are not." loading="lazy">
  <figcaption>The region is where all the inequalities are true at once.</figcaption>
</figure>

