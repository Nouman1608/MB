---
resourceId: "mb-ap-phys1-5.4-practice"
title: "Rotational Inertia: Practice Questions (Physics 1 5.4)"
description: "Seven original Marlbridge practice questions on rotational inertia, point-mass sums, axis choice, the parallel axis theorem, linearising data and an experiment design, with worked solutions and mark points."
course: "physics-1"
unit: 5
topics: ["5.4"]
resourceType: "practice-questions"
prerequisites:
  - "Finding the centre of mass of a system of objects"
  - "Plotting a graph and finding the slope and intercept of a best-fit line"
prerequisiteResources: ["mb-ap-phys1-5.4-study-guide"]
learningObjectives:
  - "Calculate the rotational inertia of a system of up to five point masses about a stated axis"
  - "Locate the axis that gives the smallest rotational inertia and justify the choice"
  - "Use the parallel axis theorem with a given centre-of-mass value"
  - "Linearise rotational inertia data and interpret the slope and intercept"
  - "Design an experiment that compares the rotational inertias of two objects"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Formulas for extended objects are given in the questions. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-5.4-study-guide", "mb-ap-phys1-5.4-revision-notes", "mb-ap-phys1-5.4-checklist"]
next: "mb-ap-phys1-5.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Measure every r from it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Rotational inertia formulas for extended objects are given where they are needed. Rods and frames described as "light" have negligible mass. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end.

## Question 1 (multiple choice · foundation)

Three small masses are fixed to a light rod: 1.0 kg at 0.20 m, 2.0 kg at 0.50 m and 1.0 kg at 0.80 m, all measured from the left end. What is the rotational inertia of the system about an axis through the **left end**, perpendicular to the rod?

- (A) 1.2 kg·m²
- (B) 2.0 kg·m²
- (C) 1.0 kg·m²
- (D) 0.18 kg·m²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** I = Σmr² = 1.0 × 0.20² + 2.0 × 0.50² + 1.0 × 0.80² = 0.04 + 0.50 + 0.64 = 1.18 kg·m² ≈ **1.2 kg·m²**.

- (B) adds m × r without squaring r: 0.20 + 1.0 + 0.80 = 2.0. The distance must be squared.
- (C) puts the whole 4.0 kg at the centre of mass (0.50 m): 4.0 × 0.50² = 1.0. Rotational inertia is **not** the total mass times the square of the centre-of-mass distance; that leaves out I_cm.
- (D) is I about the 0.50 m point (the centre of mass), not about the left end.
</details>

## Question 2 (multiple choice · foundation)

A thin hoop and a uniform solid disk have the same mass and the same radius. Each can turn about an axis through its centre, perpendicular to its plane. Which statement is correct?

- (A) They have the same rotational inertia, because they have the same mass and radius.
- (B) The hoop has the greater rotational inertia, because all of its mass is at the largest distance from the axis.
- (C) The disk has the greater rotational inertia, because it contains more material.
- (D) The disk has the greater rotational inertia, because its mass is spread over a larger area.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Rotational inertia depends on how far the mass is from the axis. All of the hoop's mass is at distance R. Much of the disk's mass is close to the centre, where it contributes little. (With the given values, MR² for the hoop and ½MR² for the disk, the hoop's is twice as large.)

- (A) ignores the distribution of mass, which is the whole point.
- (C) is wrong: the masses are equal, so neither has "more material".
- (D) confuses spreading over an area with being far from the axis. The disk's extra area is mostly *nearer* the axis.
</details>

## Question 3 (multiple choice · core)

A 3.0 kg mass and a 1.0 kg mass are fixed to the ends of a light rod 0.80 m long. The rod can be pivoted about an axis perpendicular to it at any point along it. Where should the axis be to make the rotational inertia as small as possible?

- (A) At the midpoint of the rod
- (B) 0.20 m from the 3.0 kg mass
- (C) 0.20 m from the 1.0 kg mass
- (D) At the 3.0 kg mass

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The minimum is at the centre of mass. Measured from the 3.0 kg mass: x_cm = (1.0 kg × 0.80 m) ÷ 4.0 kg = 0.20 m. There, I = 3.0 × 0.20² + 1.0 × 0.60² = **0.48 kg·m²**.

- (A) gives 3.0 × 0.40² + 1.0 × 0.40² = 0.64 kg·m². The midpoint is the centre of mass only for equal masses.
- (C) puts the axis near the *lighter* mass, so the heavy mass is 0.60 m away: 1.12 kg·m².
- (D) gives 1.0 × 0.80² = 0.64 kg·m². Putting the heavy mass on the axis helps, but moving the axis to the centre of mass does better. The parallel axis theorem confirms it: 0.48 + 4.0 × 0.20² = 0.64.
</details>

## Question 4 (calculation · core)

A light cross-shaped frame has four arms, each 0.30 m long, at right angles to each other in one plane. A 0.50 kg mass is at the centre, and a 0.25 kg mass is at the end of each arm.

(a) Calculate the rotational inertia about an axis through the centre, perpendicular to the plane of the frame.
(b) Calculate the rotational inertia about a parallel axis through one of the 0.25 kg masses, by adding mr² for each mass.
(c) Check your answer to (b) with the parallel axis theorem.

<details>
<summary>Worked solution</summary>

**(a)** The centre mass has r = 0. Each outer mass has r = 0.30 m. I = 4 × 0.25 × 0.30² = **0.090 kg·m²**.

**(b)** Distances from the chosen outer mass:

| Mass | r (m) | r² (m²) | mr² (kg·m²) |
|---|---|---|---|
| chosen 0.25 kg | 0 | 0 | 0 |
| centre 0.50 kg | 0.30 | 0.090 | 0.045 |
| opposite 0.25 kg | 0.60 | 0.36 | 0.090 |
| two side 0.25 kg | √(0.30² + 0.30²) = 0.42 | 0.18 each | 0.045 each, 0.090 total |

I = 0 + 0.045 + 0.090 + 0.090 = **0.225 kg·m²** ≈ 0.23 kg·m².

**(c)** Total mass M = 0.50 + 4 × 0.25 = 1.5 kg, and the centre of mass is at the centre, so d = 0.30 m. I = I_cm + Md² = 0.090 + 1.5 × 0.30² = 0.225 kg·m². ✓

Suggested mark points (4): 1 for (a); 1 for the side-mass distance squared as 0.18 m² (Pythagoras); 1 for 0.23 kg·m² in (b); 1 for (c) using the **total** mass 1.5 kg.
</details>

## Question 5 (calculation · core)

A uniform solid disk has mass 2.0 kg and radius 0.25 m. About an axis through its centre, perpendicular to the disk, I_cm = ½MR² (given). The disk is to swing as a pendulum about a horizontal axle through a small hole, parallel to the central axis.

(a) Find the rotational inertia about an axle through a hole 0.10 m from the centre.
(b) Find the rotational inertia about an axle at the rim, and express it as a multiple of I_cm.
(c) Explain why no position of the hole can give a rotational inertia smaller than I_cm.

<details>
<summary>Worked solution</summary>

I_cm = ½ × 2.0 kg × (0.25 m)² = 0.0625 kg·m².

**(a)** I = I_cm + Md² = 0.0625 + 2.0 × 0.10² = **0.083 kg·m²** (0.0825).

**(b)** d = R = 0.25 m: I = 0.0625 + 2.0 × 0.25² = 0.0625 + 0.125 = **0.19 kg·m²** (0.1875). This is **3 times** I_cm (equivalently (3/2)MR²).

**(c)** In I = I_cm + Md², the term Md² is never negative, and it is zero only when d = 0. So every parallel axis other than the one through the centre of mass gives a larger rotational inertia.

Suggested mark points (4): 1 for I_cm = 0.0625 kg·m²; 1 for (a); 1 for (b) with the factor of 3; 1 for (c) using Md² ≥ 0.
</details>

## Question 6 (graphing and analysis · stretch)

A rotating platform carries two identical sliders, one on each side of the axis, both at the same distance r from it. Using a method from Topic 5.6, a student measures the total rotational inertia I of the platform with sliders for five values of r:

| r (m) | 0.05 | 0.10 | 0.15 | 0.20 | 0.25 |
|---|---|---|---|---|---|
| I (kg·m²) | 0.0066 | 0.0139 | 0.0266 | 0.0438 | 0.0667 |

Model each slider as a point mass m.

(a) Write an expression for I in terms of r, m and the platform's own rotational inertia I_p. Hence state what to plot to get a straight line.
(b) Process the data, plot the graph (or describe its best-fit line) and find the slope and the vertical intercept, with units.
(c) Use your results to find m and I_p.
(d) Predict I when r = 0.30 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I = I_p + 2mr². This has the form y = c + kx with **y = I** and **x = r²**. Plot I (vertical) against r² (horizontal); the slope is 2m and the intercept is I_p.

**(b)**

| r² (m²) | 0.0025 | 0.0100 | 0.0225 | 0.0400 | 0.0625 |
|---|---|---|---|---|---|
| I (kg·m²) | 0.0066 | 0.0139 | 0.0266 | 0.0438 | 0.0667 |

The points lie close to a straight line. A best-fit line has slope ≈ **1.0 kg** and intercept ≈ **0.0040 kg·m²**. (Using the first and last points: slope = (0.0667 − 0.0066) ÷ (0.0625 − 0.0025) = 1.0 kg; least-squares fitting gives 1.00 kg and 0.0040 kg·m².) The slope's unit is kg·m² ÷ m² = kg.

**(c)** 2m = 1.0 kg, so **m = 0.50 kg**. I_p = **0.0040 kg·m²**: the rotational inertia of the empty platform (the value when r = 0).

**(d)** I = 0.0040 + 1.0 × 0.30² = **0.094 kg·m²**.

| Point | What earns it |
|---|---|
| 1 | Expression I = I_p + 2mr², with both sliders counted |
| 1 | Plots I against r² (states both axes) |
| 1 | Slope ≈ 1.0 kg from a best-fit line using points far apart, with unit |
| 1 | Intercept ≈ 0.0040 kg·m², identified as the platform's own rotational inertia |
| 1 | m = 0.50 kg from slope = 2m |
| 1 | Prediction 0.094 kg·m² |

Plotting I against r gives a curve and earns no credit for (a). A student who forgets that there are two sliders gets m = 1.0 kg; that loses the first and fifth points only.
</details>

## Question 7 (experimental design · stretch)

You are given two cylinders that look identical. They have the same mass and the same outer radius, but one is a hollow tube with a closed, light end cap and the other is solid. Each can be mounted, one at a time, on the same vertical axle of a low-friction turntable. You also have a string, a small hanging mass, a pulley, a stopwatch and a metre rule.

(a) Describe a procedure that would let you decide which cylinder is hollow, without cutting or weighing them. State what you would keep the same and what you would measure.
(b) State which result would show that a cylinder is hollow, and justify your answer using rotational inertia.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Mount the first cylinder centred on the axle. Wind the string round the axle (or a spool of fixed radius on it), pass it over the pulley and attach the hanging mass. Release from rest and time how long the mass takes to fall a measured height, for example 0.80 m. Repeat several times and average. Then replace the cylinder with the other one and repeat with **the same** hanging mass, spool radius, string, drop height and release method. The same hanging mass on the same spool exerts (nearly) the same torque each time.

**(b)** The cylinder that gives the **longer** fall time is the hollow one. Its mass is all near the outer radius, far from the axis, so it has the larger rotational inertia. With about the same torque, a larger rotational inertia gives a smaller angular acceleration, so the system speeds up more slowly and the mass takes longer to fall.

| Point | What earns it |
|---|---|
| 1 | Applies a torque with the falling mass and measures a time (or distance in a fixed time) |
| 1 | Keeps hanging mass, spool radius and drop height the same for both cylinders |
| 1 | Repeats and averages, or another way to reduce timing uncertainty |
| 1 | Longer time (smaller angular acceleration) identifies the hollow cylinder |
| 1 | Justifies with mass farther from the axis giving larger rotational inertia |

A design that rolls the cylinders down a slope can also work, but it uses ideas from Unit 6; credit the last two points if the reasoning about mass distribution is correct.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Several objects: add them up" and Worked example 1 in the [study guide](/advanced-course-resources/physics-1/5-4-rotational-inertia-study-guide/). Square every r.
- **Q2 wrong:** go back to "Extended objects: where is the mass?".
- **Q3 or Q5 wrong:** revisit Figure 1 and "The parallel axis theorem", then Worked example 2.
- **Q6 incomplete:** practise linearising: match your equation to y = c + kx before plotting.
- **Q7 incomplete:** see "How you could test this in the lab". Name what stays the same and what you measure.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/5-4-rotational-inertia-checklist/).
