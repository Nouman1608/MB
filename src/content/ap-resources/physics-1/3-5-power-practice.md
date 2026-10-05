---
resourceId: "mb-ap-phys1-3.5-practice"
title: "Power: Practice Questions (Physics 1 3.5)"
description: "Seven original Marlbridge practice questions on average and instantaneous power, force components, power–time graphs, top speed and motor data, with worked solutions and suggested mark points."
course: "physics-1"
unit: 3
topics: ["3.5"]
resourceType: "practice-questions"
prerequisites:
  - "Work done by a constant force and changes in kinetic and gravitational potential energy"
prerequisiteResources: ["mb-ap-phys1-3.5-study-guide"]
learningObjectives:
  - "Calculate average power from work or energy change and compare power in two situations"
  - "Use P = F∥v with the correct force component and sign"
  - "Find energy from the area under a power–time graph"
  - "Track where energy goes, and how fast, for a pump and a cyclist on a hill"
  - "Plan a power measurement, process data and evaluate a claim about a motor"
  - "Derive a symbolic expression for average power and compare it with the final instantaneous power"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-3.5-study-guide", "mb-ap-phys1-3.5-revision-notes", "mb-ap-phys1-3.5-checklist"]
next: "mb-ap-phys1-3.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State your system before tracking energy, and use only the force component along the velocity."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine. All people, machines and data are fictional.

## Question 1 (multiple choice · foundation)

Two students run up the same staircase, which rises 4.0 m vertically. Student A has mass 60 kg and takes 5.0 s. Student B has mass 75 kg and takes 7.5 s. Which statement is correct about the energy each gains as gravitational potential energy and the average power each develops for this?

- (A) B gains more energy and develops more power.
- (B) B gains more energy, but A develops more power.
- (C) A gains more energy and develops more power.
- (D) They gain the same energy, because they climb the same height.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Energy: A gains 60 × 9.8 × 4.0 = 2352 J ≈ 2.4 × 10³ J; B gains 75 × 9.8 × 4.0 = 2940 J ≈ 2.9 × 10³ J. Power: A develops 2352 J ÷ 5.0 s ≈ 470 W; B develops 2940 J ÷ 7.5 s = 392 W ≈ 390 W. B does more work, but A does it faster.

- (A) assumes more energy must mean more power. Power also depends on the time taken.
- (C) has the energy comparison the wrong way round: B is heavier, so B gains more.
- (D) forgets that ΔU_g = mgΔy depends on mass as well as height.
</details>

## Question 2 (multiple choice · core)

Take **+x in the direction of motion**. A rope pulls a cart along a level floor at a constant 2.0 m/s. The tension is 50 N, directed 40° above the horizontal. At what rate does the rope transfer energy to the cart?

- (A) 100 W
- (B) 77 W
- (C) 64 W
- (D) 25 W

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Only the tension component along the velocity delivers power: P = Fv cos θ = 50 N × 2.0 m/s × cos 40° ≈ 76.6 W ≈ 77 W.

- (A) multiplies the whole tension by the speed. The vertical component is at 90° to the motion and transfers no energy.
- (C) uses sin 40°, the vertical component, which is the part that does no work.
- (D) divides force by speed. Check units: N ÷ (m/s) is not a watt.
</details>

## Question 3 (multiple choice · core)

A power–time graph for a small motor is made of two straight segments. The power rises steadily from 0 at t = 0 to 300 W at t = 4.0 s, then stays at 300 W until t = 10 s. How much energy does the motor deliver from 0 to 10 s?

- (A) 3000 J
- (B) 2400 J
- (C) 1800 J
- (D) 240 W

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Energy is the area under the power–time graph. Triangle from 0 to 4.0 s: ½ × 4.0 s × 300 W = 600 J. Rectangle from 4.0 to 10 s: 6.0 s × 300 W = 1800 J. Total = 600 + 1800 = **2400 J** (2.4 × 10³ J).

- (A) treats the power as 300 W for the whole 10 s, ignoring the ramp at the start.
- (C) counts only the rectangle and leaves out the triangle.
- (D) is the average power (2400 J ÷ 10 s). It has the wrong unit for an energy.
</details>

## Question 4 (calculation · core)

A pump lifts 1500 kg of water from a well through a vertical height of 8.0 m in 4.0 minutes. The water leaves the pipe slowly, so its kinetic energy can be ignored. The pump takes electrical energy at a steady 700 W.

(a) Calculate the average rate at which the pump increases the gravitational potential energy of the water–Earth system.
(b) At what rate is energy converted to internal (thermal) energy in the pump and pipes? State the principle you use.

<details>
<summary>Worked solution</summary>

**(a)** ΔU_g = mgΔy = 1500 kg × 9.8 m/s² × 8.0 m = 1.176 × 10⁵ J. Time: 4.0 min = 240 s.
P = ΔE / Δt = 1.176 × 10⁵ J ÷ 240 s = **490 W** (4.9 × 10² W).

**(b)** Energy is conserved, so energy in per second = energy stored per second + energy converted to internal energy per second. 700 W − 490 W = **210 W**.

Suggested mark points (3): 1 for ΔU_g = mgΔy with the correct value; 1 for converting minutes to seconds and getting 490 W; 1 for 210 W with energy conservation stated.

Common error: dividing by 4.0 instead of 240 gives 29 400 W, a power much larger than the 700 W input. A useful output can never exceed the input, so that answer should be rejected at once.
</details>

## Question 5 (calculation and reasoning · core)

A cyclist and bicycle have a total mass of 80 kg. The cyclist can keep up a steady 250 W of useful power to the wheels.

(a) On a level road at top speed, the total resistive force is 20 N. Find the top speed.
(b) The cyclist now rides at constant speed up a straight hill that rises 1.0 m for every 20 m travelled along the road. At this lower speed, take the resistive force as 10 N. Find the constant speed.
(c) For part (b), find the rate at which gravitational potential energy increases and the rate at which energy is converted by the resistive forces. Show that they add to the power supplied.

<details>
<summary>Worked solution</summary>

**(a)** At constant speed the driving force equals the resistive force, 20 N. v = P / F = 250 W ÷ 20 N = **12.5 m/s**.

**(b)** The component of the weight along the slope is mg sin θ, with sin θ = 1.0 ÷ 20 = 0.050: 80 × 9.8 × 0.050 = 39.2 N. At constant speed the driving force = 39.2 N + 10 N = 49.2 N. v = 250 W ÷ 49.2 N ≈ **5.1 m/s**.

**(c)** Rate of increase of U_g = 39.2 N × 5.08 m/s ≈ **2.0 × 10² W** (199 W). Rate converted by resistive forces = 10 N × 5.08 m/s ≈ **51 W**. Sum: 199 W + 51 W = 250 W, the power supplied. Kinetic energy is constant, so all the input goes to these two places.

Suggested mark points (5): 1 for (a); 1 for the slope component of the weight; 1 for the speed in (b) using the total opposing force; 1 for both rates in (c); 1 for linking the total to energy conservation with ΔK = 0.

Alternative for (c): the rate of increase of U_g is mg × (vertical speed) = 80 × 9.8 × (5.08 × 0.050) ≈ 199 W. Same answer.
</details>

## Question 6 (experimental · stretch)

A student claims: "This small electric motor delivers the same output power whatever load it lifts." The motor winds a string onto a spool and lifts a hanging mass.

(a) Describe a procedure to test the claim. Say what you would measure, with which instruments, and how you would make the results reliable.

The student lifts different masses through a height of 0.80 m and records the times. The mass rises at constant speed for nearly all of the lift.

| Mass m (kg) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| Time t (s) | 1.6 | 3.1 | 4.7 | 7.0 | 10.5 |

(b) Calculate the output power for each mass.
(c) Describe the graph you would plot to show the result, including the axes, units and a sensible scale.
(d) Evaluate the claim using your results.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Hang a known mass (checked on a balance) from the string. Mark a start line and a finish line a measured height h apart with a metre rule, starting a little above the floor so the mass is already moving at steady speed when it passes the first mark. Time the mass between the lines with a stopwatch, or better, with a light gate at each mark. Repeat each mass three times and average the times. Use at least five different masses. Calculate P = mgh / t for each.

**(b)** P = mgh / t with h = 0.80 m:

| m (kg) | mgh (J) | t (s) | P (W) |
|---|---|---|---|
| 0.10 | 0.784 | 1.6 | 0.49 |
| 0.20 | 1.568 | 3.1 | 0.51 |
| 0.30 | 2.352 | 4.7 | 0.50 |
| 0.40 | 3.136 | 7.0 | 0.45 |
| 0.50 | 3.920 | 10.5 | 0.37 |

**(c)** Plot output power P (vertical axis, W) against mass m (horizontal axis, kg). A suitable scale: P from 0 to 0.60 W in steps of 0.10 W; m from 0 to 0.60 kg in steps of 0.10 kg. If the claim were true, the points would lie on a horizontal line.

**(d)** The claim is **only partly supported**. For loads from 0.10 kg to 0.30 kg the power is about 0.50 W each time (0.49–0.51 W), so a horizontal line fits. For 0.40 kg and 0.50 kg the power falls clearly, to 0.45 W and 0.37 W. The drop (about 25% at 0.50 kg) is much larger than the spread of the first three values, so it is a real trend, not scatter. The motor's output power is roughly constant for light loads but falls for heavy loads.

| Point | What earns it |
|---|---|
| 1 | Measures height (metre rule) and time (stopwatch or light gates), with known masses |
| 1 | Ensures the mass is at steady speed in the timed section, and repeats readings |
| 1 | Correct powers for all five masses using P = mgh / t |
| 1 | Graph of P against m with labelled axes, units and a scale that uses most of the grid |
| 1 | Evaluates the claim: constant for small loads, falls at larger loads, with values quoted as evidence |

**Alternative graph.** Plotting mgh (J) against t (s) gives a straight line through the origin if power is constant, with slope P. Here the first three points lie on a line of slope about 0.50 W and the last two fall below it. This earns full credit for (c) and supports the same conclusion.
</details>

## Question 7 (constructed response · stretch)

A block of mass m rests on a frictionless horizontal surface. A constant horizontal force F pushes it from rest through a distance d.

(a) Derive an expression for the average power delivered by F over this distance, in terms of F, m and d only.
(b) The force is doubled; m and d stay the same. By what factor does the average power change?
(c) A student says: "The force is constant, so the instantaneous power at the end of the push equals the average power." Evaluate this claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Work done: W = Fd. This all becomes kinetic energy: ½mv_f² = Fd, so v_f = √(2Fd / m).
Constant force means constant acceleration, so the average velocity is v_f / 2 and the time is Δt = d ÷ (v_f / 2) = 2d / v_f.
P_avg = W / Δt = Fd × v_f / (2d) = Fv_f / 2 = (F/2)√(2Fd / m), which simplifies to

**P_avg = √(F³d / (2m))**

**(b)** P_avg is proportional to F^(3/2). Doubling F multiplies it by 2^(3/2) = 2√2 ≈ **2.8**. (The work doubles and the time falls by a factor √2.)

**(c)** The claim is **incorrect**. At the end, P = Fv_f. From (a), P_avg = Fv_f / 2, so the final power is **twice** the average. The force is constant but the speed rises, so P = Fv rises steadily from zero during the push.

| Point | What earns it |
|---|---|
| 1 | Uses W = Fd and the work–energy link to find v_f in terms of F, m and d |
| 1 | Finds Δt = 2d / v_f (or uses a = F/m with d = ½a(Δt)²) |
| 1 | Correct final expression in F, m and d only |
| 1 | Factor 2√2 ≈ 2.8 with a reason |
| 1 | States final power = Fv_f = 2 × P_avg, so the claim is wrong because v changes |

**Alternative for (a).** Using a = F/m and d = ½a(Δt)² gives Δt = √(2md / F). Then P_avg = Fd / Δt = √(F³d / (2m)), the same result.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Power is a rate" and "Average power" in the [study guide](/advanced-course-resources/physics-1/3-5-power-study-guide/). Check that time is in seconds.
- **Q2 wrong:** revisit "Instantaneous power: P = F∥v" and Worked example 2.
- **Q3 wrong:** go back to "Reading graphs of energy and power" and Figure 2.
- **Q5 incomplete:** see "Why a vehicle has a top speed" and track every place the energy goes.
- **Q6 or Q7 incomplete:** see "Measuring power in the lab" and Worked example 3. Your evaluation needs numbers as evidence.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/3-5-power-checklist/).
