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
publishedDate: 2026-10-12
featured: false
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

## Official syllabus

IB *Mathematics guide (for use from September 2020/January 2021)*, MYP Mathematics, first assessment 2022, published by the International Baccalaureate Organization. The notes paraphrase the Thinking with models branch of the framework.
