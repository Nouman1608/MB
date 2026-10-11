---
title: "Pearson Edexcel International Advanced Level Mathematics: Linear programming: formulation, graphical solution and integer solutions (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths D1 Linear Programming Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on writing linear programs, ruler and vertex methods and integer solutions for Pearson Edexcel IAL Maths unit D1."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense linear programming for the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics (YMA01), Specification Issue 3, April 2019. They cover unit D1, section 5, topics 5.1 to 5.3. The specification states that D1 is an optional unit for IAS Mathematics and Further Mathematics and for IAL Mathematics and Further Mathematics.

For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and/). Then try the [practice questions](/resources/edexcel-ial-mathematics-linear-programming-formulation-graphical-solution-and-practice/). Useful links: the [course hub](/boards/edexcel/a-level/mathematics/), the [checklist](/checklists/edexcel/a-level/mathematics/) and [all free 10-minute diagnostics](/diagnostics/).

## Key terms

| Term | Meaning |
|---|---|
| Decision variables | The quantities you choose, such as x and y, with units |
| Objective function | The expression to maximise or minimise |
| Constraints | Linear inequalities from the limits in the problem |
| Feasible region R | The set of points satisfying every constraint |
| Vertex | A corner of R, found where two boundary lines meet |
| Objective line | A line where the objective has a fixed value |
| Integer solution | A feasible point whose coordinates are whole numbers |

## 5.1 Formulation

### Steps

1. Define the variables, with units.
2. Write the objective: maximise or minimise.
3. Write one inequality per limit, with matching units.
4. State x ≥ 0, y ≥ 0, and integers if required.

### Phrases

| Wording | Inequality |
|---|---|
| no more than 50 in total | x + y ≤ 50 |
| at least 8 of A | x ≥ 8 |
| at least three times as many A as B | x ≥ 3y |
| B is at most 40% of the total | y ≤ 0.4(x + y), so 3y ≤ 2x |
| A is at least half of the total | x ≥ 0.5(x + y), so x ≥ y |
| each A takes 3 hours, each B takes 2 hours, 90 hours available | 3x + 2y ≤ 90 |

With three or more variables you still write the program, but only two-variable problems are solved graphically.

**Worked reminder (formulating from a table).** A workshop makes tables (x) and shelves (y). A table needs 4 hours of sawing and 2 hours of sanding. A shelf needs 1 hour of sawing and 1 hour of sanding. There are 40 sawing hours and 28 sanding hours. At least twice as many shelves as tables are wanted. Profit is £30 per table and £12 per shelf.

```
Maximise P = 30x + 12y
subject to  4x + y ≤ 40
            2x + y ≤ 28
            y ≥ 2x
            x ≥ 0, y ≥ 0, x and y integers
```

Check each line against the wording: "at least twice as many shelves as tables" is y ≥ 2x, with the larger quantity on the left.

## 5.2 Graphical solution

### Drawing the region

1. Draw each boundary line from its intercepts.
2. Test (0, 0), or another point, to find the correct side.
3. Mark R and say which side you have kept.
4. Solve simultaneous equations for any vertex not clearly on a grid line.

### Vertex method

1. List the vertices of R.
2. Calculate the objective at each one.
3. Choose the largest value to maximise, the smallest to minimise.

### Ruler (objective line) method

1. Draw the line ax + by = k for a convenient k.
2. Slide a ruler parallel to it across R.
3. To maximise, the last point touched is optimal. To minimise, the first point touched is optimal.
4. Find that vertex exactly, then the objective value.

### Gradient test

The objective line ax + by = k has gradient −a/b. Compare it with the gradients of the boundary lines at a vertex. The optimal vertex lies where the objective gradient sits between the gradients of the two lines meeting there.

**Worked reminder.** Maximise P = 3x + 4y subject to x + 2y ≤ 16, 3x + y ≤ 18, x ≥ 1.

The vertices of R are (1, 0), (1, 7.5), (4, 6) and (6, 0). The point (4, 6) comes from x + 2y = 16 and 3x + y = 18: from the first, x = 16 − 2y, so 48 − 6y + y = 18, giving y = 6 and x = 4.

| Vertex | P |
|---|---|
| (1, 0) | 3 |
| (1, 7.5) | 33 |
| (4, 6) | 36 |
| (6, 0) | 18 |

The maximum is P = 36 at (4, 6). Check: the gradient −3/4 lies between −1/2 and −3, as expected.

**Worked reminder (minimising).** Minimise C = 5x + 4y subject to 2x + y ≥ 12, x + 2y ≥ 9, x + y ≤ 10, x ≥ 0, y ≥ 0.

The vertices are (2, 8), (5, 2), (9, 0) and (10, 0). The point (2, 8) is where 2x + y = 12 meets x + y = 10. The point (5, 2) is where 2x + y = 12 meets x + 2y = 9: from the second, x = 9 − 2y, so 18 − 4y + y = 12, giving y = 2.

| Vertex | C |
|---|---|
| (2, 8) | 42 |
| (5, 2) | 33 |
| (9, 0) | 45 |
| (10, 0) | 50 |

The minimum is C = 33 at (5, 2). This happens to be a whole-number point, so no further work is needed for 5.3.

## 5.3 Integer solutions

### Method

1. Solve ignoring the integer condition. The result is a bound.
2. Check integer points close to the optimal vertex, against every constraint.
3. Pick the best feasible integer point.
4. Justify: no feasible integer point can beat the bound, and the lines between your value and the bound contain no feasible integer points.

Rounding is not a method. It may leave R, or land inside R without being the best point.

**Worked reminder.** Maximise P = 7x + 6y subject to 4x + 5y ≤ 41, 5x + 2y ≤ 32, with x and y non-negative integers.

The vertex is where the two lines meet: x = 78/17 and y = 77/17, about (4.59, 4.53), giving P = 1008/17 ≈ 59.29. So P ≤ 59.

| Point | Check | P |
|---|---|---|
| (5, 5) | 4x + 5y = 45 > 41, not feasible | – |
| (4, 5) | 41 ≤ 41 and 30 ≤ 32, feasible | 58 |
| (4, 4) | feasible | 52 |

The only value between 58 and 59 is 59 itself, and there is no feasible integer point on 7x + 6y = 59 (for example (5, 4) gives 59 but breaks 5x + 2y ≤ 32, since 33 > 32). So the best integer solution is x = 4, y = 5, P = 58.

## Must-know distinctions

- Maximise: the ruler moves away from the origin. Minimise: towards it, and the first point touched is optimal.
- A constraint is binding at a vertex if it holds with equality there. Otherwise there is slack, which you can state as unused resource.
- The continuous optimum is a bound. The integer optimum is never better.
- A vertex of R is a feasible solution. A vertex of the boundary lines outside R is not.

## Layout of a full answer

1. Variables defined, then objective and constraints.
2. Lines and region drawn, with R labelled.
3. Vertices found by solving equations where needed.
4. Objective value at each vertex, or the ruler line and the point it identifies.
5. Integer check, if required, with every constraint tested.
6. A sentence giving the best plan and its value in context, including any resource left unused.

## Quick self-test

1. Write "at least twice as many A as B" as an inequality in x and y.
2. Write "A is at least 40% of the total of A and B" as a simple inequality.
3. State the gradient of the objective line P = 5x + 2y.
4. Find the intersection of 2x + y = 14 and x + 3y = 17.
5. Maximise P = 2x + 3y over the vertices (0, 0), (8, 0), (6, 4) and (0, 7).
6. Does (3, 5) satisfy 2x + 3y ≤ 20?
7. At (5, 4), how much slack is there in x + 2y ≤ 20?
8. In a minimising problem, which point does the sliding ruler give?
9. Why can rounding the vertex solution fail?
10. A continuous maximum is 41.6 with whole-number objective values. What is the largest value an integer solution could have?

### Answers

1. x ≥ 2y.
2. x ≥ 0.4(x + y), so 3x ≥ 2y.
3. −5/2.
4. From the first, y = 14 − 2x, so x + 42 − 6x = 17, giving x = 5 and y = 4. The point is (5, 4).
5. P is 0, 16, 24, 21 respectively. The maximum is 24 at (6, 4).
6. No: 2(3) + 3(5) = 21 > 20.
7. 5 + 2(4) = 13, so the slack is 7.
8. The first point of R it touches.
9. The rounded point may be outside R, or inside R but not the best.
10. 41.

## Where marks are usually lost

- Reversing a ratio inequality, for example x ≥ 2y written as 2x ≥ y.
- Not defining the variables, or leaving out units.
- Omitting non-negativity, or the integer condition.
- Reading vertices from a sketch instead of solving the equations.
- Evaluating the objective at an unclear point, or missing one vertex.
- Moving the ruler the wrong way when minimising.
- Rounding to an integer without checking every constraint.
- Giving numbers without saying what the best plan is in context.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019 (first teaching September 2018), published by Pearson Education Limited. Unit D1, section 5: Linear programming, topics 5.1 to 5.3.
