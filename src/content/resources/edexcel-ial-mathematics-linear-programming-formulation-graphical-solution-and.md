---
title: "Pearson Edexcel International Advanced Level Mathematics: Linear programming: formulation, graphical solution and integer solutions (YMA01)"
seoTitle: "Edexcel IAL Maths D1 Linear Programming Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Linear programming: formulation, graphical solution and integer solutions"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 172
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-d1-decision-mathematics-1-edexcel-alevel-maths"
    subtopic: "d1-linear-programming-edexcel-alevel-maths"
description: "Study guide to formulating linear programs, solving two-variable problems by ruler and vertex methods, and integer solutions for Edexcel IAL Maths D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches linear programming for the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics (YMA01), Specification Issue 3, April 2019. It covers unit D1 (Decision Mathematics 1), section 5, topics 5.1 to 5.3. The specification states that D1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and-practice/). The course page is [Edexcel A Level Mathematics](/boards/edexcel/a-level/mathematics/), the printable list is the [checklist](/checklists/edexcel/a-level/mathematics/), and [all free 10-minute diagnostics](/diagnostics/) help you find weak spots first. The other D1 sections include [critical path analysis](/resources/edexcel-ial-mathematics-critical-path-analysis-activity-networks-floats-gantt/).

## What this unit covers

| Topic | What you must be able to do |
|---|---|
| 5.1 | Formulate a problem as a linear program: variables, objective, constraints |
| 5.2 | Solve a two-variable problem graphically, using the ruler (objective line) method and the vertex method |
| 5.3 | Deal with problems where the solution must have integer values |

The D1 preamble says you must model and interpret situations, including cross-checking between models and reality. So every answer should end by saying what the numbers mean in the context.

## 5.1 Formulating a linear program

A linear program has three parts:
- Decision variables, for example x and y, each with a clear meaning and unit.
- An objective function to maximise or minimise, such as profit P = 6x + 5y.
- Constraints: linear inequalities from the limits in the problem, plus x ≥ 0 and y ≥ 0.

Method:
1. Read the problem and write down what you are choosing. Those are your variables.
2. Write the objective, using the amount per item.
3. Write one inequality for each limit, using the same units on both sides.
4. Add non-negativity, and say if the variables must be integers.

Phrases translate as follows.

| Wording | Inequality |
|---|---|
| at most 40 in total | x + y ≤ 40 |
| at least 5 of type A | x ≥ 5 |
| at least twice as many A as B | x ≥ 2y |
| A is no more than 30% of the total | x ≤ 0.3(x + y), so 7x ≤ 3y |

**Example 1.** A florist makes small bouquets (x per day) and large bouquets (y per day). A small bouquet uses 2 bunches of roses and 3 stems of lily. A large bouquet uses 3 bunches of roses and 1 stem of lily. Each day there are 60 bunches of roses and 54 lily stems. The florist makes at least as many small as large bouquets. Profit is £6 per small and £5 per large bouquet. Formulate the problem.

```
Maximise P = 6x + 5y
subject to  2x + 3y ≤ 60    (roses)
            3x + y ≤ 54     (lilies)
            x ≥ y           (at least as many small as large)
            x ≥ 0, y ≥ 0
```

The wording "at least as many small as large" gives x ≥ y, which is the same as x − y ≥ 0.

**Example 2 (three variables).** A canteen cooks x trays of soup, y of curry and z of pasta. They need 2, 3 and 4 hours of hob time respectively, with 36 hours available, and the cost per tray is £5, £8 and £6. Curry must make up at most a quarter of the trays. Minimise the total cost.

```
Minimise C = 5x + 8y + 6z
subject to  2x + 3y + 4z ≤ 36
            y ≤ 0.25(x + y + z), so 3y ≤ x + z
            x, y, z ≥ 0
```

You cannot draw a three-variable problem on a two-dimensional graph, so the graphical methods below apply to two variables only.

## 5.2 Graphical solution

### Drawing the feasible region

1. Draw each boundary line, using its intercepts where you can. For 2x + 3y = 60 the intercepts are (30, 0) and (0, 20).
2. Test a point, often (0, 0), to see which side satisfies each inequality.
3. Mark the feasible region R clearly. Label which side you have kept, so your diagram can be followed.
4. The vertices of R are where boundary lines meet. Find any unclear vertex by solving two equations simultaneously.

### The vertex method

For a bounded feasible region, the best value of a linear objective occurs at a vertex (or along an edge between two vertices, if the objective line is parallel to it). So list the vertices, evaluate the objective at each one, and pick the largest or smallest.

### The ruler method

1. Pick a convenient value k and draw the objective line. For P = 6x + 5y, take 60, giving intercepts (10, 0) and (0, 12). Its gradient is −6/5.
2. Keep your ruler parallel to that line and slide it across the region.
3. To maximise, move away from the origin. The last point of R the ruler touches is optimal. To minimise, the first point touched is optimal.
4. Read off or calculate the coordinates of that vertex exactly, then find the value of the objective.

**Example 3.** Solve Example 1 graphically.

Boundary lines: 2x + 3y = 60 through (30, 0) and (0, 20); 3x + y = 54 through (18, 0) and (0, 54); y = x through the origin. Testing (10, 5) shows R lies below y = x, below the roses line and below the lilies line. The vertices are:
- (0, 0).
- (18, 0), where the lilies line meets the x-axis.
- The meeting of x = y with 2x + 3y = 60: 5x = 60, giving (12, 12).
- The meeting of the roses and lilies lines: y = 54 − 3x, so 2x + 162 − 9x = 60, giving x = 102/7 and y = 72/7. This is about (14.57, 10.29).

Vertex method:

| Vertex | P = 6x + 5y |
|---|---|
| (0, 0) | 0 |
| (18, 0) | 108 |
| (12, 12) | 132 |
| (102/7, 72/7) | 972/7 ≈ 138.86 |

Ruler method check: the line P = 60 has gradient −6/5. This is less steep than the lilies line (gradient −3) and steeper than the roses line (gradient −2/3), so sliding it outwards, the last point it leaves R is the vertex where those two lines cross.

The maximum is P ≈ 138.86 at x ≈ 14.57, y ≈ 10.29. If bouquets could be fractions, this would be the answer. They cannot, which leads to 5.3.

**Example 4 (minimising).** A farmer mixes feed A (x kg) and feed B (y kg). Each kg of A gives 4 units of protein and 2 units of fibre. Each kg of B gives 2 units of protein and 3 units of fibre. The mix needs at least 40 units of protein and 36 of fibre, and at most 16 kg in total. A costs 30p per kg and B costs 25p per kg. Minimise the cost C = 30x + 25y.

```
4x + 2y ≥ 40,   2x + 3y ≥ 36,   x + y ≤ 16
```

The region is a triangle. Its vertices come from pairs of lines:
- 4x + 2y = 40 with x + y = 16 gives (12, 4).
- 2x + 3y = 36 with x + y = 16 gives (4, 12).
- 4x + 2y = 40 with 2x + 3y = 36 gives (6, 8).

| Vertex | C = 30x + 25y |
|---|---|
| (12, 4) | 460 |
| (4, 12) | 420 |
| (6, 8) | 380 |

Ruler check: the line C = 300 has intercepts (10, 0) and (0, 12). Slide it away from the origin until it first touches R. That happens at (6, 8).

The minimum cost is 380p (£3.80), using 6 kg of A and 8 kg of B. At that point the protein and fibre limits are both exactly met, and the total mass is 14 kg, so 2 kg of capacity is unused.

## 5.3 Integer solutions

Some variables must be whole numbers: bouquets, vans, people. Then the feasible solutions are the lattice points (points with integer coordinates) inside R. The vertex answer is only a guide.

Method:
1. Solve the problem ignoring the integer condition. This gives a bound: no integer solution can beat it.
2. Test integer points near the optimal vertex. Check every constraint for each one.
3. Choose the integer point with the best objective value, and justify why nothing better exists.

Do not simply round. Rounding can leave the region, or land inside it without being the best point.

**Example 5.** Find the best whole-number plan for Example 1.

The best possible value is 138.86, so an integer plan has P ≤ 138 (profit values are whole numbers). The vertex (14.57, 10.29) rounds to (15, 10).

| Point | Check | P |
|---|---|---|
| (15, 10) | 3x + y = 55 > 54, not feasible | – |
| (14, 11) | 2x + 3y = 61 > 60, not feasible | – |
| (14, 10) | 58 ≤ 60 and 52 ≤ 54, feasible | 134 |
| (15, 9) | 57 ≤ 60 and 54 ≤ 54, feasible | 135 |

Ruler version: slide the objective line inwards from the vertex and stop at the first lattice point inside R. Both (15, 10) and (14, 11) lie outside R, and the next lines inwards give (15, 9) with P = 135.

Why nothing better exists: a better plan would need P from 136 to 138, so it must lie on 6x + 5y = 136, 137 or 138. The whole-number points on these lines with x ≥ y, such as (16, 8) on 136 and (13, 12) on 138, all break the lilies limit or the roses limit.

The answer is 15 small and 9 large bouquets, with profit £135. All 54 lily stems are used, and 57 of the 60 bunches of roses. Rounding down would give (14, 10) and £134, which is not the best.

## Common errors

- Defining variables without units or meaning, so the constraints are ambiguous.
- Reversing an inequality, especially "at least twice as many": x ≥ 2y, not 2x ≥ y.
- Forgetting x ≥ 0 and y ≥ 0.
- Reading a vertex off the graph when it is not clearly on a grid line, instead of solving the equations.
- Choosing the nearest integer point without checking every constraint.
- Giving the objective value but not the plan, or the plan without context.

## Next steps

Condense the method with the [revision notes](/resources/edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and-revision-notes/), then test yourself on the [practice questions](/resources/edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and-practice/). Tick topics off on the [checklist](/checklists/edexcel/a-level/mathematics/) and see the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/) for related units.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited. Unit D1, section 5: Linear programming, topics 5.1 to 5.3.
