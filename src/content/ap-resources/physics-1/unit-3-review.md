---
resourceId: "mb-ap-phys1-u3-review"
title: "Work, Energy, and Power: Mixed Unit Review (Physics 1 Unit 3)"
description: "Connect all five work, energy and power topics: the big ideas, a one-table summary of key relationships, and seven original exam-style questions that each combine two or more topics."
course: "physics-1"
unit: 3
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have worked through the study guides for Topics 3.1 to 3.5"
prerequisiteResources: ["mb-ap-phys1-u3-diagnostic"]
learningObjectives:
  - "Choose a system and decide which energies it holds and which outside forces do work on it"
  - "Combine the work-energy theorem with conservation of energy, including energy dissipated by friction"
  - "Use spring and gravitational potential energy, including the general form, to find speeds, heights and compressions"
  - "Link power to work, energy change and P = F∥v in multi-step problems"
  - "Use round-trip work and force–position graphs to decide whether a force is conservative"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus; calculator in degree mode. We use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-u3-diagnostic", "mb-ap-phys1-3.1-checklist", "mb-ap-phys1-3.2-checklist", "mb-ap-phys1-3.3-checklist", "mb-ap-phys1-3.4-checklist", "mb-ap-phys1-3.5-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Every energy answer starts with a choice of system. That choice decides which energies are inside and which forces do work from outside."
  - "Work moves energy across the boundary; potential energy and thermal energy hold it inside. The totals must balance."
  - "Kinetic energy is never negative and goes as v². Spring energy goes as Δx². General gravitational energy goes as −1/r."
  - "Power is the rate of the same energy transfers: ΔE ÷ Δt on average, and F∥v at an instant."
  - "Questions 1–3 are multiple choice; Questions 4–7 are multi-part with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review is for the **algebra-based Physics 1 course**, Unit 3 (Work, Energy, and Power). Do the [unit diagnostic](/advanced-course-resources/physics-1/unit-3-diagnostic/) first if you have not yet done it.

## Big ideas of the unit

- **Kinetic energy is a scalar that goes as v².** It is never negative and depends on the frame ([Topic 3.1](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-study-guide/)).
- **Work is energy crossing the system boundary.** Only the force component along the motion counts, and the point where the force acts must move ([Topic 3.2](/advanced-course-resources/physics-1/3-2-work-study-guide/)).
- **Net work equals the change in kinetic energy.** Use it when you know forces and distances, not times ([Topic 3.2](/advanced-course-resources/physics-1/3-2-work-study-guide/)).
- **Conservative forces have potential energy; friction does not.** Their work depends only on the end points; friction's depends on the path length ([Topics 3.2](/advanced-course-resources/physics-1/3-2-work-study-guide/) and [3.3](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/)).
- **Potential energy belongs to pairs of interacting objects.** You choose the zero; only changes matter. Near a surface ΔU_g = mgΔy; far from it, use −Gm₁m₂/r ([Topic 3.3](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/)).
- **Pick the system to make the bookkeeping easy.** With Earth inside, gravity's work becomes ΔU_g; with the rough surface inside, friction's effect becomes thermal energy ([Topic 3.4](/advanced-course-resources/physics-1/3-4-conservation-energy-study-guide/)).
- **Mechanical energy is constant only if no outside force does work and nothing inside is nonconservative.** Total energy is always conserved ([Topic 3.4](/advanced-course-resources/physics-1/3-4-conservation-energy-study-guide/)).
- **Power is how fast these transfers happen.** Constant power with rising speed means a falling force ([Topic 3.5](/advanced-course-resources/physics-1/3-5-power-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method | When it applies |
|---|---|---|
| Kinetic energy | K = ½mv² | any object; speed in one chosen frame |
| Work | W = F∥d = Fd cos θ; area under F–x graph | constant force; graph for a varying force |
| Work-energy theorem | ΔK = W_net | one object, all forces on it |
| Spring energy | U_s = ½kΔx² | ideal spring; Δx from the relaxed length |
| Gravitational energy | U_g = −Gm₁m₂/r; ΔU_g = mgΔy | general form; near-surface changes |
| Energy of a system | ΔE_system = W by outside forces | any system you choose |
| Mechanical energy with friction | K_i + U_i = K_f + U_f + ΔE_thermal | friction inside the system, no outside work |
| Power | P_avg = ΔE ÷ Δt; P = F∥v | average; instantaneous, constant force |

## Practice questions

These are **original Marlbridge practice questions**, not past exam questions. The rubric tables are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s², ignore air resistance, and treat springs as ideal unless a question says otherwise.

## Question 1 (multiple choice · mixed)

Two carts start from rest on a level, frictionless track. Cart X has mass m and cart Y has mass 4m. The same constant horizontal force pushes each cart through the same distance d. Which statement is correct at the end of the push?

- (A) Both carts have the same kinetic energy, and X moves twice as fast as Y.
- (B) Both carts move at the same speed, and Y has four times the kinetic energy.
- (C) Both carts have the same kinetic energy, and X moves four times as fast as Y.
- (D) Y has more kinetic energy, because its larger inertia lets the force act for longer.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each cart receives the same work, Fd, so each gains the same kinetic energy. ½mv_X² = ½(4m)v_Y² gives v_X² = 4v_Y², so v_X = 2v_Y.

- (B) Equal work gives equal K, not equal speed.
- (C) forgets the square root: K ∝ v², so a factor of 4 in mass needs a factor of 2 in speed.
- (D) Y does take longer, but work depends on distance, not time.
</details>

## Question 2 (multiple choice · mixed)

A 0.40 kg ball is dropped from rest 0.50 m above the top of a vertical spring with k = 200 N/m. The ball lands on the spring and compresses it. What is the greatest compression?

- (A) 0.020 m
- (B) 0.12 m
- (C) 0.14 m
- (D) 0.16 m

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** System: ball + spring + Earth, with U_g = 0 at the lowest point. The ball falls 0.50 m **plus** the compression x, and it is at rest at both ends: mg(0.50 + x) = ½kx². So 100x² − 3.92x − 1.96 = 0, giving x = 0.16 m.

- (A) is mg ÷ k, where the ball would hang at rest; the moving ball overshoots it.
- (B) writes the fall as 0.50 − x instead of 0.50 + x.
- (C) uses only the 0.50 m drop and forgets the extra fall while the spring compresses.
</details>

## Question 3 (multiple choice · mixed)

Take **+y up**. A lift car of mass 800 kg is moving upward at 2.0 m/s and speeding up at 1.0 m/s². At this instant, at what rate does the cable transfer energy to the car?

- (A) 1.6 kW
- (B) 17 kW
- (C) 14 kW
- (D) 16 kW

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** On the car, T − mg = ma, so T = 800 × (9.8 + 1.0) = 8640 N, upward. The tension is along the velocity, so P = Tv = 8640 × 2.0 = 17 280 W ≈ 17 kW.

- (A) uses only the net force, ma = 800 N. That is the rate of gain of kinetic energy, not the cable's power.
- (C) uses T = m(g − a), the tension for a car slowing down on the way up.
- (D) uses T = mg, the tension at constant speed.
</details>

## Question 4 (constructed response · mixed)

A child and sled have a combined mass of 25 kg. They start from rest at the top of a straight snowy slope 18 m long, inclined at 20° to the horizontal, then continue onto level snow. The coefficient of kinetic friction is 0.10 everywhere.

(a) Find the work done on the child and sled by gravity, by the normal force and by friction on the slope.
(b) Use the work-energy theorem to find the speed at the bottom of the slope.
(c) Draw energy bar charts for the top and bottom of the slope, for the system child + sled + snow + Earth.
(d) Find how far the sled slides on the level snow before it stops.
(e) A student says: "On a slope twice as long, with the same angle, the speed at the bottom would double." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Height: h = 18 sin 20° = 6.16 m. Gravity: W = mgh = 25 × 9.8 × 6.16 = **+1.5 × 10³ J** (1508 J). Normal force: perpendicular to the motion, so **0 J**. On the slope F_N = mg cos 20° = 230 N, so friction is 0.10 × 230 = 23.0 N and W = −23.0 × 18 = **−4.1 × 10² J** (−414 J).

**(b)** ΔK = W_net = 1508 − 414 = 1094 J. So ½ × 25 × v² = 1094 and v = **9.4 m/s**.

**(c)** Top: U_g = 1508 J, K = 0, thermal = 0. Bottom: U_g = 0, K = 1094 J, ΔE_thermal = 414 J. Both totals are 1508 J: no outside force does work on this system.

**(d)** On level snow F_N = mg, so friction = 0.10 × 25 × 9.8 = 24.5 N. 24.5 × d = 1094, so d = **45 m**.

**(e)** **Incorrect.** Gravity's work and friction's work are both proportional to the slope length, so K at the bottom doubles. Since K ∝ v², the speed rises by √2, to about 13 m/s, not 19 m/s.

| Point | What earns it |
|---|---|
| 1 | Gravity's work from mgh (or mg sin 20° × 18), normal force zero |
| 1 | Friction from μ_k mg cos 20°, not μ_k mg, giving −414 J |
| 1 | 9.4 m/s from ΔK = W_net |
| 1 | Bar charts with equal totals and a thermal bar at the bottom |
| 1 | Uses the new normal force mg on the level |
| 1 | Distance 45 m |
| 1 | Rejects the claim **because** K doubles and v ∝ √K |

**Total: 7 points.**
</details>

## Question 5 (constructed response · mixed)

The fictional airless moon Varda has mass 4.0 × 10²² kg and radius 1.2 × 10⁶ m. A probe is launched straight up from its surface at 1500 m/s. Ignore Varda's rotation.

(a) Choose a system whose mechanical energy stays constant during the flight. Justify your choice.
(b) Derive an expression for the probe's greatest distance r from Varda's centre, in terms of G, M, R and the launch speed v₀.
(c) Evaluate r, and the greatest height above the surface.
(d) A student uses the surface field strength and ½mv₀² = mgh. Find the student's height and explain why it is too small.
(e) Find the smallest launch speed for which the probe would never fall back.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Probe + Varda. Gravity is then internal and conservative. With no air, no outside force does work.

**(b)** At the top, K = 0. ½mv₀² − GMm/R = −GMm/r. The probe's mass cancels:
**1/r = 1/R − v₀² ÷ (2GM)**.

**(c)** GM = 2.67 × 10¹² N·m²/kg. 1/r = 8.33 × 10⁻⁷ − 4.22 × 10⁻⁷ = 4.12 × 10⁻⁷ m⁻¹, so **r = 2.4 × 10⁶ m**. The height is r − R = **1.2 × 10⁶ m**, about one moon radius.

**(d)** g = GM ÷ R² = 1.85 N/kg, so h = v₀² ÷ 2g = **6.1 × 10⁵ m**, about half the true value. mgΔy assumes the surface field everywhere. The real field weakens as 1/r² (to 0.45 N/kg at the top), so the probe climbs higher.

**(e)** Never falling back means reaching very large r with K ≥ 0. With U_g = 0 there: ½mv₀² = GMm/R, so v₀ = √(2GM/R) = **2.1 × 10³ m/s**.

| Point | What earns it |
|---|---|
| 1 | Probe + moon, with no outside work and no nonconservative forces |
| 1 | Energy equation with K and −GMm/r at both points |
| 1 | Correct expression for r, mass cancelled |
| 1 | r ≈ 2.4 × 10⁶ m and height ≈ 1.2 × 10⁶ m |
| 1 | 6.1 × 10⁵ m, too small **because** the real field weakens with distance |
| 1 | 2.1 × 10³ m/s from total energy = 0 |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

A ski tow pulls skiers up a straight slope 300 m long, inclined at 15°, at a constant 2.5 m/s. The tow rope is parallel to the slope. Each skier has mass 70 kg, and kinetic friction between skis and snow has μ_k = 0.050. Eight skiers are on the tow at any moment.

(a) Find the force the rope exerts on one skier.
(b) Find the power the tow delivers to one skier and to all eight.
(c) For one skier, find the rate at which the skier–Earth system gains gravitational potential energy and the rate at which friction converts energy to thermal energy. Show that they account for all of (b).
(d) A manager says: "If we run the tow at twice the speed, it will need twice as much energy to bring each skier to the top." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Constant velocity, so the forces along the slope balance. mg sin 15° = 70 × 9.8 × 0.259 = 177.5 N; friction = 0.050 × 70 × 9.8 × cos 15° = 33.1 N. Rope force = **2.1 × 10² N** (210.7 N).

**(b)** The rope force is along the velocity: P = Fv = 210.7 × 2.5 = **5.3 × 10² W** (527 W) per skier, and 8 × 527 = **4.2 kW** for all eight.

**(c)** Rate of gain of U_g = 177.5 × 2.5 = **4.4 × 10² W** (444 W). Rate of conversion by friction = 33.1 × 2.5 = **83 W**. 444 + 83 = 527 W. With ΔK = 0, every joule from the rope goes to these two places.

**(d)** **Incorrect.** The forces on a skier do not depend on speed, and the distance is still 300 m, so the work per skier is the same: 210.7 × 300 = 6.3 × 10⁴ J. What doubles is the **power** per skier (to about 1.1 kW), because the same energy is delivered in half the time (60 s instead of 120 s).

| Point | What earns it |
|---|---|
| 1 | Rope force = mg sin 15° + μ_k mg cos 15°, about 210 N |
| 1 | P = Fv for one skier and × 8 for all |
| 1 | 444 W to U_g and 83 W to thermal, summing to 527 W with ΔK = 0 |
| 1 | Same work per skier, since force and distance are unchanged |
| 1 | Power doubles **because** the time halves |

**Total: 5 points.**
</details>

## Question 7 (constructed response · mixed)

Take **+x towards the bumper**. A 0.50 kg cart moves at 4.0 m/s on a level, frictionless track and runs into a rubber bumper. The graph of the bumper's force on the cart against the compression x has two straight-line parts:

- **Going in:** the force rises from 0 at x = 0 to F_max at x = 0.10 m, where the cart stops.
- **Coming out:** the force falls from F_max at x = 0.10 m to 0 at x = 0.030 m, where the cart leaves the bumper. (The rubber recovers slowly.)

(a) Use the work-energy theorem to show that F_max = 80 N.
(b) Find the work done on the cart while it moves back out, and its speed as it leaves the bumper.
(c) Find the net work done on the cart by the bumper over the round trip. Use your answer to decide whether the bumper force is conservative.
(d) Where has the missing energy gone? Name a system for which total energy is conserved.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** K₀ = ½ × 0.50 × 4.0² = 4.0 J and the cart stops, so W = −4.0 J. The bumper pushes in −x while the cart moves in +x, and the work is the triangle under the graph: −½ × 0.10 × F_max = −4.0 J, so **F_max = 80 N**.

**(b)** Moving out, force and motion are both in −x, so the work is positive: ½ × (0.10 − 0.030) × 80 = **+2.8 J**. K = 2.8 J, so v = √(2 × 2.8 ÷ 0.50) = **3.3 m/s**.

**(c)** W_net = −4.0 + 2.8 = **−1.2 J**. The cart returns to where it first touched the bumper, yet the bumper's total work on it is not zero. A conservative force does zero work around a closed path, so this force is **nonconservative**. (An ideal spring would retrace the going-in line and return all 4.0 J.)

**(d)** The 1.2 J becomes thermal energy in the rubber, and a little sound. For the system cart + bumper, with the track and its fixed support doing no work, total energy is constant: 4.0 J = 2.8 J + 1.2 J.

| Point | What earns it |
|---|---|
| 1 | Area = ½ × 0.10 × F_max set equal to −ΔK, giving 80 N |
| 1 | +2.8 J from the smaller triangle |
| 1 | 3.3 m/s |
| 1 | −1.2 J, so nonconservative **because** round-trip work is not zero |
| 1 | Thermal energy (and sound) in a system that includes the bumper |

**Total: 5 points.**
</details>

## How did you do?

Questions 4–7 are worth 7, 6, 5 and 5 points on the suggested Marlbridge rubric. Use the points you lost, not the total, to choose what to study.

- **Questions 1 or 4 (kinetic energy, factors of change):** [Topic 3.1 checklist](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-checklist/).
- **Questions 1, 4 or 7 (work, work-energy theorem, graphs):** [Topic 3.2 checklist](/advanced-course-resources/physics-1/3-2-work-checklist/).
- **Questions 2, 5 or 7 (spring and gravitational potential energy):** [Topic 3.3 checklist](/advanced-course-resources/physics-1/3-3-potential-energy-checklist/).
- **Questions 2, 4, 5 or 7 (system choice, friction losses):** [Topic 3.4 checklist](/advanced-course-resources/physics-1/3-4-conservation-energy-checklist/).
- **Questions 3 or 6 (power):** [Topic 3.5 checklist](/advanced-course-resources/physics-1/3-5-power-checklist/).
- **Quick check of every topic:** retake the [unit diagnostic](/advanced-course-resources/physics-1/unit-3-diagnostic/).
