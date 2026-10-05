---
resourceId: "mb-ap-physcm-7.3-practice"
title: "Representing and Analyzing SHM: Practice Questions (Physics C: Mechanics 7.3)"
description: "Seven original Marlbridge calculus-based practice questions on SHM: phase and initial conditions, velocity and acceleration by differentiation, graphs, derivation and resonance."
course: "physics-c-mechanics"
unit: 7
topics: ["7.3"]
resourceType: "practice-questions"
prerequisites:
  - "Differentiating sine and cosine functions"
  - "Newton's second law and spring forces F_x = −kx"
prerequisiteResources: ["mb-ap-physcm-7.3-study-guide"]
learningObjectives:
  - "Use x = A cos(ωt + φ₀) to find position, velocity and acceleration at a given time"
  - "Find A, φ₀, v_max and a_max from initial conditions or from graphs and data"
  - "Derive the SHM differential equation for a system from Newton's second law"
  - "Explain why the period is independent of amplitude"
  - "Identify the natural frequency of a system and explain resonance"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only, in radian mode. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-7.3-study-guide", "mb-ap-physcm-7.3-revision-notes", "mb-ap-physcm-7.3-checklist"]
next: "mb-ap-physcm-7.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis, with the origin at equilibrium."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, x is in m, v_x in m/s, a_x in m/s² and t in s, and ω is in rad/s. Displacement is always measured from the equilibrium position. Springs are ideal and surfaces frictionless unless stated. Keep your calculator in **radian mode**. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · core)

Take **+x to the right** of equilibrium. An object moves with x(t) = (0.12 m) cos(4.0t). Which statement describes its motion at t = 0.50 s?

- (A) It is moving toward equilibrium and speeding up.
- (B) It is moving away from equilibrium and slowing down.
- (C) It is moving away from equilibrium and speeding up.
- (D) It is momentarily at rest at x ≈ +0.12 m.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At t = 0.50 s the phase is 4.0 × 0.50 = 2.0 rad. x = 0.12 cos 2.0 = −0.050 m; v_x = −0.12 × 4.0 × sin 2.0 = −0.44 m/s; a_x = −16x = +0.80 m/s². The object is left of equilibrium and moving further left, so it is moving away from equilibrium. v_x and a_x have opposite signs, so it is slowing down, on its way to the turning point at −0.12 m.

- (A) reads the positive a_x as "moving toward equilibrium". The acceleration points toward equilibrium, but the velocity points away.
- (C) assumes a large acceleration means speeding up. Compare signs: opposite signs mean slowing down.
- (D) is the degree-mode error: cos(2.0°) ≈ 1.0, so x ≈ +0.12 m. The angle 4.0t is in radians.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right** of equilibrium. Data from a sensor show that a glider's acceleration obeys a_x = −(25 s⁻²)x. Its amplitude is 0.12 m. What is its greatest speed?

- (A) 0.024 m/s
- (B) 0.095 m/s
- (C) 0.60 m/s
- (D) 3.0 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Comparing with a_x = −ω²x gives ω² = 25 s⁻², so ω = 5.0 rad/s. Then v_max = Aω = 0.12 × 5.0 = 0.60 m/s.

- (A) divides by ω: A/ω = 0.024. The unit would be m·s, not m/s.
- (B) multiplies A by the frequency f = ω/2π = 0.80 Hz. The formula needs ω, not f.
- (D) is Aω² = 3.0, the greatest **acceleration** in m/s².
</details>

## Question 3 (multiple choice · core)

A 0.25 kg object is attached to a horizontal spring with k = 100 N/m. A small motor shakes the far end of the spring back and forth sinusoidally. At which driving frequency will the object's amplitude be largest?

- (A) 0.31 Hz
- (B) 3.2 Hz
- (C) 6.4 Hz
- (D) 20 Hz

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Resonance happens when the driving frequency equals the natural frequency. ω = √(k/m) = √(100/0.25) = 20 rad/s, so f₀ = ω/2π = 3.2 Hz.

- (A) is the natural period, 1/f₀ = 0.31 s, written as a frequency.
- (C) is 2f₀. Pushing twice per cycle means every second push opposes the motion, so energy is not added steadily.
- (D) is ω in rad/s used as if it were a frequency in Hz.
</details>

## Question 4 (calculation · core)

Take **+x to the right** of equilibrium. A 0.80 kg block on a spring with k = 20 N/m is at x₀ = −0.060 m at t = 0, moving with v_x0 = +0.40 m/s.

(a) Find ω and the amplitude A.
(b) Find the block's speed and acceleration when it is at x = +0.050 m.
(c) Find v_max and a_max.
(d) Write x(t) in the form A cos(ωt + φ₀), giving φ₀ in radians.
(e) Find the first time after t = 0 at which the block passes through equilibrium.

<details>
<summary>Worked solution</summary>

1. **(a)** ω = √(20/0.80) = **5.0 rad/s**. v_x0/ω = 0.40/5.0 = 0.080 m, so A = √(0.060² + 0.080²) = **0.10 m**.
2. **(b)** |v_x| = ω√(A² − x²) = 5.0 × √(0.010 − 0.0025) = **0.43 m/s**. a_x = −ω²x = −25 × 0.050 = **−1.3 m/s²** (1.25 m/s² toward −x).
3. **(c)** v_max = Aω = **0.50 m/s**; a_max = Aω² = **2.5 m/s²**.
4. **(d)** cos φ₀ = x₀/A = −0.60 and sin φ₀ = −v_x0/(Aω) = −0.40/0.50 = −0.80. Both negative: third quadrant, so **φ₀ = −2.2 rad** (equivalently +4.1 rad). x(t) = **(0.10 m) cos(5.0t − 2.2)**.
5. **(e)** The block is left of equilibrium moving right, so it reaches x = 0 before any turning point. x = 0 when 5.0t − 2.214 = −π/2, so t = (2.214 − 1.571)/5.0 = **0.13 s**. Check: v_x = −Aω sin(−π/2) = +0.50 m/s, moving right at top speed.

Suggested mark points (6): 1 for ω; 1 for A from both x₀ and v_x0; 1 for speed at x = 0.050 m; 1 for the sign of a_x there; 1 for φ₀ in the correct quadrant; 1 for the time in (e).

Common error: φ₀ = tan⁻¹(1.33) = 0.93 rad from the tangent alone. That is π out and puts the block at +0.060 m at t = 0.
</details>

## Question 5 (constructed response · core)

Take **+x to the right**. A puck of mass m sits on a frictionless air table between two walls. Spring 1 (constant k₁) joins the puck to the left wall and spring 2 (constant k₂) joins it to the right wall. At equilibrium, x = 0, both springs are at their natural lengths.

(a) Show that, when the puck is displaced to x, the net force on it is F_x = −(k₁ + k₂)x.
(b) Use Newton's second law to write the differential equation for x(t) and identify ω.
(c) For m = 0.30 kg, k₁ = 18 N/m and k₂ = 12 N/m, find the period. The puck is released from rest at x = +0.025 m: write x(t) and give v_max and a_max.
(d) A student says: "If I release it from 0.050 m instead, it has twice as far to travel, so the period doubles." Explain why the student is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At +x, spring 1 is stretched by x and pulls the puck left: −k₁x. Spring 2 is compressed by x and pushes the puck left: −k₂x. Net force **F_x = −(k₁ + k₂)x**. The same signs appear for negative x, so this holds on both sides.

**(b)** m d²x/dt² = −(k₁ + k₂)x, so **d²x/dt² = −[(k₁ + k₂)/m]x**. This has the SHM form, with **ω = √((k₁ + k₂)/m)**.

**(c)** ω = √(30/0.30) = 10 rad/s, so T = 2π/10 = **0.63 s**. Released from rest at +A: **x = (0.025 m) cos(10t)**. v_max = Aω = **0.25 m/s**; a_max = Aω² = **2.5 m/s²**.

**(d)** ω depends only on k₁ + k₂ and m, not on A, so T = 2π/ω is the same. Doubling A doubles the restoring force at each matching point of the cycle, so the puck moves twice as fast at each matching point (v_max = Aω doubles to 0.50 m/s). Twice the distance at twice the speed takes the same time.

| Point | What earns it |
|---|---|
| 1 | (a) Both springs exert forces toward equilibrium, with correct signs |
| 1 | (b) Writes m d²x/dt² = −(k₁ + k₂)x and identifies ω = √((k₁ + k₂)/m) |
| 1 | (c) T = 0.63 s |
| 1 | (c) Correct x(t) with φ₀ = 0, and v_max and a_max |
| 1 | (d) States T is independent of A because ω contains no A |
| 1 | (d) Explains that speeds scale with A, so twice the distance takes the same time |

An equivalent argument from accelerations scaling with A also earns the (d) points.
</details>

## Question 6 (constructed response · stretch)

Take **+x to the right** of equilibrium. A motion sensor records a 0.40 kg glider attached to a spring:

| t (s) | 0 | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 | 0.60 | 0.70 | 0.80 |
|---|---|---|---|---|---|---|---|---|---|
| x (m) | 0.000 | 0.035 | 0.050 | 0.035 | 0.000 | −0.035 | −0.050 | −0.035 | 0.000 |

(a) State A and T, find ω, and write x(t).
(b) Find v_max and a_max, and state the times in the table at which each occurs, with signs.
(c) Sketch v_x–t and a_x–t graphs for 0 ≤ t ≤ 0.80 s, lined up under an x–t graph. Label the values at t = 0, 0.20, 0.40, 0.60 and 0.80 s.
(d) Find the spring constant.
(e) A student estimates v_x at t = 0.40 s as (x at 0.50 s − x at 0.30 s)/0.20 s. Calculate this estimate and explain why it is smaller in size than your answer from (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A = **0.050 m**, T = **0.80 s**, ω = 2π/0.80 = **7.9 rad/s** (7.85). The glider is at x = 0 moving in +x at t = 0, so **x = (0.050 m) sin(7.85t)**, or equivalently (0.050 m) cos(7.85t − π/2).

**(b)** v_max = Aω = 0.050 × 7.85 = **0.39 m/s**, at equilibrium: +0.39 m/s at t = 0 and 0.80 s, −0.39 m/s at t = 0.40 s. a_max = Aω² = **3.1 m/s²**, at the turning points: −3.1 m/s² at t = 0.20 s (x = +A), +3.1 m/s² at t = 0.60 s (x = −A).

**(c)** v_x = (0.39 m/s) cos(7.85t): +0.39, 0, −0.39, 0, +0.39 m/s at the five times. a_x = −(3.1 m/s²) sin(7.85t): 0, −3.1, 0, +3.1, 0 m/s². The a_x graph is the x graph upside down.

**(d)** k = mω² = 0.40 × 7.85² = **25 N/m**.

**(e)** (−0.035 − 0.035)/0.20 = **−0.35 m/s**. It is a secant slope over 0.20 s. The glider is fastest exactly at t = 0.40 s and slower on either side, so the interval average is smaller than the instantaneous 0.39 m/s.

| Point | What earns it |
|---|---|
| 1 | (a) A, T and ω, with x(t) in a sine form or an equivalent cosine form with correct phase |
| 1 | (b) v_max = 0.39 m/s with correct times and signs |
| 1 | (b) a_max = 3.1 m/s² with correct times and signs |
| 1 | (c) v_x–t and a_x–t sketches with zeros and extremes at the right times |
| 1 | (d) k = 25 N/m (carry forward an incorrect ω) |
| 1 | (e) −0.35 m/s and the secant-versus-tangent explanation |
</details>

## Question 7 (explanation · stretch)

Take **+y upward**. A test vehicle body of mass 1200 kg sits on its suspension, which acts like one spring with k = 6.0 × 10⁴ N/m. It drives at constant speed over a test track with identical low humps every 9.0 m. Model each hump as giving the body one upward push, so the pushes form a roughly periodic driving force.

(a) Find the natural frequency of the body's vertical oscillation.
(b) Find the speed at which the vertical oscillation becomes largest, and explain why in terms of the timing of the pushes.
(c) The driver doubles the speed. Explain why the vertical oscillation becomes much smaller, even though the body is pushed twice as often.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** ω = √(k/m) = √(6.0 × 10⁴/1200) = 7.1 rad/s, so **f₀ = ω/2π = 1.1 Hz** (natural period 0.89 s).

**(b)** Resonance occurs when the pushes arrive at the natural frequency: one hump per natural period. Time between humps = 9.0 m ÷ v = 0.89 s, so **v = 10 m/s**. Each push then arrives at the same point in the cycle, in the direction the body is already moving, so every push adds energy and the amplitude grows from cycle to cycle.

**(c)** At 20 m/s the humps come every 0.45 s, about half the natural period (driving frequency 2.2 Hz, about 2f₀). Successive pushes arrive when the body is moving in opposite directions: one adds energy, the next takes it away. There is no steady build-up, so the amplitude stays small. More pushes does not mean more energy; the timing is what matters.

| Point | What earns it |
|---|---|
| 1 | (a) f₀ = 1.1 Hz from ω = √(k/m) and f = ω/2π |
| 1 | (b) Sets the time between humps equal to the natural period |
| 1 | (b) v = 10 m/s |
| 1 | (b) Explains resonance: pushes in step with the motion add energy every cycle |
| 1 | (c) Explains that pushes at about 2f₀ alternately add and remove energy, so no build-up |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "The solution: x = A cos(ωt + φ₀)" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/). Check radian mode and the quadrant of φ₀.
- **Q2 or Q6 wrong:** revisit "Velocity and acceleration by differentiation", Figure 1 and "Reading SHM from graphs".
- **Q5 incomplete:** go through "From Newton's second law to the SHM equation" and "Amplitude does not change the period".
- **Q3 or Q7 wrong:** re-read "Resonance" and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-checklist/).
