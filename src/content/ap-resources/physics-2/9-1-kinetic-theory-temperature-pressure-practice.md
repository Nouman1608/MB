---
resourceId: "mb-ap-phys2-9.1-practice"
title: "Kinetic Theory of Temperature and Pressure: Practice Questions (Physics 2 9.1)"
description: "Seven original Marlbridge practice questions on pressure from atomic collisions, rms speed, average kinetic energy and speed distributions, with full solutions and mark points."
course: "physics-2"
unit: 9
topics: ["9.1"]
resourceType: "practice-questions"
prerequisites:
  - "Finding the change in momentum when an atom bounces off a wall"
  - "Using K_avg = (3/2)k_B T = ½m v_rms²"
prerequisiteResources: ["mb-ap-phys2-9.1-study-guide"]
learningObjectives:
  - "Find the momentum change and force when atoms hit a wall, head-on or at an angle"
  - "Calculate pressure from the perpendicular force on a surface"
  - "Relate temperature to average kinetic energy and rms speed"
  - "Read, sketch and compare Maxwell–Boltzmann speed distributions"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k_B = 1.38 × 10⁻²³ J/K. All gases are ideal. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-9.1-study-guide", "mb-ap-phys2-9.1-revision-notes", "mb-ap-phys2-9.1-checklist"]
next: "mb-ap-phys2-9.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "An elastic bounce reverses only the perpendicular velocity component, so Δp = 2m v cos θ."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: k_B = 1.38 × 10⁻²³ J/K; mass of a helium atom = 6.65 × 10⁻²⁷ kg; mass of an argon atom = 6.63 × 10⁻²⁶ kg; every gas is ideal and every collision with a wall is elastic; K_avg = (3/2)k_B T = ½m v_rms² with T in kelvin. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

An atom of mass m moves at speed v perpendicular to the wall of a container. It bounces straight back with the same speed. What is the magnitude of the impulse the atom exerts on the wall?

- (A) 0
- (B) mv
- (C) 2mv
- (D) ½mv²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Take "away from the wall" as positive. The atom's momentum changes from −mv to +mv, so Δp = +2mv. The wall gives the atom this impulse, so by Newton's third law the atom gives the wall an impulse of the same size, 2mv, directed into the wall.

- (A) confuses "same speed" with "no change". Momentum is a vector, and its direction reversed.
- (B) is the change if the atom simply stopped at the wall. It also comes back, which doubles the change.
- (D) is a kinetic energy, not an impulse. The units (J) do not match kg·m/s.
</details>

## Question 2 (multiple choice · core)

A sealed, rigid container of neon is at temperature T. Its atoms have a Maxwell–Boltzmann speed distribution. The neon is then heated to a higher temperature. Compared with the original graph, which statement describes the new speed distribution?

- (A) The peak is at a higher speed and is lower; the area under the curve is unchanged.
- (B) The peak is at a higher speed and is higher; the area under the curve increases.
- (C) The peak stays at the same speed but becomes higher, because more atoms are moving fast.
- (D) The whole curve moves to the right by the same amount and keeps exactly the same shape.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A higher temperature means a higher average kinetic energy, so the distribution shifts to higher speeds and spreads out. The container is sealed, so the number of atoms (the area under the curve) cannot change. A wider curve with the same area must be lower, so the peak falls.

- (B) treats the area as growing. No atoms were added, so the area is fixed.
- (C) keeps the peak in place. The most probable speed rises with temperature.
- (D) ignores the spread. The curve gets wider as well as moving right; it does not keep its shape.
</details>

## Question 3 (multiple choice · core)

A sealed box of gas is in a laboratory. Ignore any effect of gravity on the gas. A very small pressure sensor reads the pressure next to one wall. The sensor is then moved to the centre of the box. What does it read at the centre?

- (A) The same pressure, because atoms collide with any surface placed in the gas and transfer momentum to it.
- (B) Zero, because pressure exists only where atoms collide with the walls of the container.
- (C) A lower pressure, because atoms at the centre collide only with each other.
- (D) A higher pressure, because atoms at the centre can hit the sensor from more directions.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Pressure exists throughout a gas. Any surface placed in the gas, wherever it is, is struck by moving atoms that change momentum, so it feels a perpendicular force per unit area. With the gas uniform and gravity ignored, the reading is the same everywhere.

- (B) is the misconception that pressure is a "wall effect". The wall is just one surface in the gas.
- (C) forgets that the sensor is itself a surface the atoms hit. Atom–atom collisions also carry momentum across every region of the gas.
- (D) mixes up the number of directions with the force on one face. Pressure is the force per unit area on the sensing face. At the wall or at the centre, that face is struck by atoms with the same distribution of speeds and directions.
</details>

## Question 4 (multiple choice · core)

A sample of gas is heated from 27 °C to 327 °C. By what factor does the rms speed of its atoms increase?

- (A) 1.41
- (B) 2.00
- (C) 3.48
- (D) 12.1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Convert to kelvin: 27 °C = 300 K and 327 °C = 600 K. From ½m v_rms² = (3/2)k_B T, v_rms ∝ √T, so the factor is √(600/300) = √2 = 1.41.

- (B) is the factor for the temperature in kelvin, and so for the average kinetic energy, not for the speed.
- (C) is √(327/27): the square root is right but the temperatures are in Celsius.
- (D) is 327/27: Celsius and no square root.
</details>

## Question 5 (calculation · core)

In a computer model of a gas, every atom has mass 3.3 × 10⁻²⁶ kg and strikes a flat wall at 600 m/s, at 30° to the normal. Each atom rebounds elastically.

(a) Find the components of an atom's velocity perpendicular and parallel to the wall, before and after the collision.
(b) Calculate the magnitude of the change in momentum of one atom, and state its direction.
(c) The wall receives 5.0 × 10²⁷ collisions per second on each square metre. Calculate the pressure on the wall.

<details>
<summary>Worked solution</summary>

1. (a) Perpendicular: v cos 30° = 600 × 0.866 = 519.6 m/s ≈ **520 m/s**, towards the wall before and away from it after. Parallel: v sin 30° = **300 m/s**, the same before and after.
2. (b) Only the perpendicular component reverses: Δp = 2m v cos θ = 2(3.3 × 10⁻²⁶ kg)(519.6 m/s) = **3.43 × 10⁻²³ kg·m/s**, directed perpendicular to the wall, away from it.
3. (c) Force on 1 m² = (collisions per second) × (impulse per collision) = (5.0 × 10²⁷ s⁻¹)(3.429 × 10⁻²³ kg·m/s) = 1.71 × 10⁵ N. Over 1 m², P = F⊥/A = **1.71 × 10⁵ Pa**.

Suggested mark points (4): 1 for both components with the perpendicular one reversed and the parallel one unchanged; 1 for Δp = 3.43 × 10⁻²³ kg·m/s; 1 for the direction (perpendicular to the wall, away from it); 1 for P = 1.71 × 10⁵ Pa (allow 1.7 × 10⁵ Pa).

Common errors: using sin 30° for the perpendicular part gives 9.90 × 10⁴ Pa; using the full speed gives 1.98 × 10⁵ Pa. Draw the normal first, then measure θ from it.
</details>

## Question 6 (constructed response · core)

A single helium atom moves back and forth along a straight line between two parallel walls 0.10 m apart. It travels perpendicular to both walls at a constant speed of 1500 m/s and bounces elastically. Ignore gravity.

(a) Calculate the time between two successive hits on the same wall.
(b) Calculate the average force the atom exerts on one wall.
(c) The atom's speed is increased to 1.5 times its original value. By what factor does the average force on a wall change? Give **two** separate reasons for the change.
(d) Each hit gives the wall a tiny force for a very short time. Explain why the gas in a real container exerts a steady pressure.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Between two hits on the same wall the atom travels to the other wall and back: 2 × 0.10 m = 0.20 m. Δt = 0.20 m ÷ 1500 m/s = **1.33 × 10⁻⁴ s** (7500 hits per second on each wall).

**(b)** Impulse per hit: Δp = 2mv = 2(6.65 × 10⁻²⁷ kg)(1500 m/s) = 1.995 × 10⁻²³ kg·m/s. Average force: F = Δp/Δt = 1.995 × 10⁻²³ ÷ 1.333 × 10⁻⁴ = **1.50 × 10⁻¹⁹ N**. (Equivalent form: F = mv²/L.)

**(c)** The force increases by a factor of 1.5 × 1.5 = **2.25** (to 3.37 × 10⁻¹⁹ N). Reason 1: each hit gives 1.5 times the impulse, because Δp = 2mv. Reason 2: the atom crosses the box faster, so it hits each wall 1.5 times as often.

**(d)** A real container holds an enormous number of atoms. The wall receives so many hits each second that the individual impulses merge into a steady average force. For example, about 7 × 10¹⁸ atoms like this one would be needed to give an average force of 1 N. The fluctuations from single hits are far too small to notice.

| Point | What earns it |
|---|---|
| 1 | Δt = 2L/v = 1.33 × 10⁻⁴ s, using the round-trip distance 2L |
| 1 | Impulse per hit 2mv = 1.995 × 10⁻²³ kg·m/s (allow 2.0 × 10⁻²³) |
| 1 | F = 1.50 × 10⁻¹⁹ N (carry forward from (a) if consistent) |
| 1 | Factor 2.25 **with** both reasons: larger impulse per hit **and** more frequent hits |
| 1 | (d) Very large number of atoms → many collisions per second → impulses average to a steady force (pressure = this force per area) |

Do not award the (c) point for "2.25 because F ∝ v²" with no physical reasons.
</details>

## Question 7 (constructed response · stretch)

Three sealed containers hold ideal gases:

- X: argon at 300 K
- Y: helium at 300 K
- Z: argon at 600 K

(a) On one set of axes, sketch the speed distributions for the atoms in X and in Z. Label each curve.
(b) Rank the average kinetic energy of an atom in X, Y and Z, from greatest to least. Justify your ranking.
(c) Calculate the rms speed of the atoms in each container and rank X, Y and Z by rms speed.
(d) A student says: "Every argon atom in Z is moving faster than every argon atom in X." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Both curves start at zero speed, rise to a single peak and fall with a long tail to high speeds. The Z curve has its peak at a higher speed (about 500 m/s, compared with about 353 m/s for X), is wider, and has a **lower** peak. If the vertical axis shows the fraction of atoms per unit speed, the two areas are equal, because each curve represents a whole sample.

**(b)** K_avg = (3/2)k_B T depends only on temperature: **Z > X = Y**. K_X = K_Y = 6.21 × 10⁻²¹ J; K_Z = 1.24 × 10⁻²⁰ J.

**(c)** v_rms = √(3k_B T/m):

| Container | T (K) | m (kg) | v_rms (m/s) |
|---|---|---|---|
| X (argon) | 300 | 6.63 × 10⁻²⁶ | 433 |
| Y (helium) | 300 | 6.65 × 10⁻²⁷ | 1.37 × 10³ |
| Z (argon) | 600 | 6.63 × 10⁻²⁶ | 612 |

Ranking: **Y > Z > X**. Helium has the same average kinetic energy as argon at 300 K but about one-tenth of the mass, so it is about √10 ≈ 3.16 times faster.

**(d)** The claim is wrong. Each sample has a wide range of speeds, and the two distributions overlap. Some atoms in Z are moving slowly (the Z curve starts at zero speed), and some atoms in X are moving faster than the average atom in Z. A higher temperature raises the **average** kinetic energy; it does not make every atom faster.

| Point | What earns it |
|---|---|
| 1 | Sketch: both curves labelled, Z peak at a higher speed **and** lower than X's peak |
| 1 | Sketch: Z wider, both starting at zero, areas roughly equal |
| 1 | Ranking Z > X = Y, justified by K_avg depending only on T |
| 1 | Correct v_rms for all three (433 m/s, 1.37 × 10³ m/s, 612 m/s) |
| 1 | Ranking Y > Z > X, consistent with the values |
| 1 | Rejects the claim, citing the spread/overlap of the distributions |

Accept for (c) a ratio method, for example v_Z = v_X × √2. Do not award the (d) point for "false" with no reference to the distribution of speeds.
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "Pressure from collisions" and Figure 1 in the [study guide](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-study-guide/). Draw the normal and check that only v cos θ reverses.
- **Q3 wrong:** revisit "Pressure is everywhere in the gas".
- **Q4 or Q7(b)–(c) wrong:** work through Worked example 2 again, converting to kelvin first.
- **Q2 or Q7(a), (d) wrong:** compare the two curves in Figure 2 and list what changes and what stays the same.
- **Q6 incomplete:** go through "Going further" and Worked example 1, then redo it.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/9-1-kinetic-theory-temperature-pressure-checklist/).
