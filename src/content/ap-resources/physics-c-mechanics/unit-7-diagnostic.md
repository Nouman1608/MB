---
resourceId: "mb-ap-physcm-u7-diagnostic"
title: "Oscillations: Unit Diagnostic (Physics C: Mechanics Unit 7)"
description: "A 30-minute check of calculus-based oscillations: ten original questions on the SHM condition, period, x(t) and phase, energy, and simple, physical and torsion pendulums, each linked to a topic guide."
course: "physics-c-mechanics"
unit: 7
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 7.1 to 7.5"
  - "Torque, rotational inertia and the parallel axis theorem (Unit 5)"
learningObjectives:
  - "Find out which Unit 7 topics you can already handle and which ones to revisit"
  - "Test whether you can recognise SHM from a physical situation and show it with Newton's second law"
  - "Test period formulas, factors of change and the effect of amplitude"
  - "Test phase constants, energy sharing and amplitude found from energy"
  - "Test periods of physical and torsion pendulums using rotational inertia about the axis"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry. Keep the calculator in radian mode for ωt + φ₀. We use g = 9.8 m/s²; answers with g = 10 m/s² are equally acceptable"
related: ["mb-ap-physcm-u7-review", "mb-ap-physcm-7.1-study-guide", "mb-ap-physcm-7.3-study-guide", "mb-ap-physcm-7.4-study-guide", "mb-ap-physcm-7.5-study-guide"]
next: "mb-ap-physcm-u7-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Ten short questions, one or more for every Unit 7 topic. Each answer links to the guide for that topic."
  - "It finds gaps. It is not a past exam, it is not calibrated and it gives no predicted score."
  - "Work without notes for about 30 minutes, then mark yourself and use the table at the end."
  - "Questions 1 to 7 are multiple choice; Questions 8 to 10 need short written working."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic helps you decide which Unit 7 (Oscillations) topics to revisit. It has one to three questions per topic, three of them short written ones. These are **original Marlbridge practice questions**, not past exam questions. It is not calibrated and **gives no predicted score**. Treat each wrong answer as a pointer to one topic, not as a grade.

**How to sit it.** Allow about 30 minutes, without notes. Use a calculator in **radian mode** for arithmetic and trigonometry; do calculus by hand. Use g = 9.8 m/s² (10 m/s² is equally acceptable). Springs are ideal, strings are light and surfaces are frictionless unless stated. Displacement is measured from equilibrium.

## Question 1 (multiple choice · 7.1)

Which of these motions is simple harmonic?

- (A) A ball bouncing up and down on a hard floor with no energy loss
- (B) A puck sliding back and forth between two walls, bouncing off each
- (C) A block hanging from a vertical spring, pulled down and released
- (D) A simple pendulum released from 90° to the vertical

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Measured from the hanging equilibrium, the net force on the block is −ky. Gravity is constant, so it only moves the equilibrium point. A restoring force proportional to displacement is the SHM condition.

- (A) repeats, but between bounces the only force is the constant weight, which does not grow with displacement. Periodic, not SHM.
- (B) has no force between the walls, only a sudden push at each wall. Periodic, not SHM.
- (D) has a restoring torque proportional to sin θ. At 90° sin θ is far from θ, so the small-angle model fails.

**If you missed this:** read "The condition for SHM" and "Constant forces shift the equilibrium" in the [Topic 7.1 study guide](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/).
</details>

## Question 2 (multiple choice · 7.2)

A block hangs at rest from a spring, which is stretched 2.5 cm beyond its natural length. The block is pulled down a little and released. What is the period of its oscillation?

- (A) 0.32 s
- (B) 0.050 s
- (C) 3.2 s
- (D) It cannot be found without the mass and the spring constant.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At equilibrium kd = mg, so m/k = d/g. Then T = 2π√(m/k) = 2π√(d/g) = 2π√(0.025 ÷ 9.8) = 0.32 s.

- (B) is √(d/g) without the 2π. That is 1/ω, not T.
- (C) is the frequency, 3.2 Hz, written as a period.
- (D) misses that only the ratio m/k matters, and the static stretch gives that ratio.

**If you missed this:** read "The object–spring oscillator" in the [Topic 7.2 study guide](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/).
</details>

## Question 3 (multiple choice · 7.3)

Take **+x to the right** of equilibrium. An oscillator obeys x = A cos(ωt + φ₀). At t = 0 it is at x = −A/2 and moving in the **−x** direction. What is φ₀?

- (A) π/3
- (B) 2π/3
- (C) −2π/3
- (D) −π/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** You need cos φ₀ = x₀/A = −½, so φ₀ is 2π/3 or −2π/3. Then v_x(0) = −Aω sin φ₀ must be negative, so sin φ₀ > 0. Only 2π/3 has both.

- (A) gives x₀ = +A/2: the right speed direction but the wrong side.
- (C) puts the object at −A/2 but moving in +x, toward equilibrium. It satisfies the cosine but not the sine.
- (D) is at +A/2 moving in +x: both signs wrong.

**If you missed this:** read "Finding A and φ₀ in general" in the [Topic 7.3 study guide](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/).
</details>

## Question 4 (multiple choice · 7.3)

A glider on a spring oscillates with amplitude 3.0 cm and period 0.50 s. It is stopped, pulled out to 6.0 cm and released. What are the new period and the new greatest speed?

- (A) 0.50 s; 0.38 m/s
- (B) 0.71 s; 0.53 m/s
- (C) 1.0 s; 0.38 m/s
- (D) 0.50 s; 0.75 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** ω = √(k/m) has no A in it, so T stays 0.50 s and ω = 2π ÷ 0.50 = 12.6 rad/s. Then v_max = Aω = 0.060 × 12.6 = 0.75 m/s, twice the old 0.38 m/s.

- (A) keeps the period right but forgets that v_max = Aω grows with A.
- (B) assumes T grows as √A. Nothing in ω depends on A.
- (C) assumes twice the distance takes twice the time. The force doubles too, so the glider moves twice as fast.

**If you missed this:** read "Amplitude does not change the period" in the [Topic 7.3 study guide](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/).
</details>

## Question 5 (multiple choice · 7.4)

A block on a spring of constant k oscillates with amplitude A, maximum speed v and total energy E. The spring is replaced by one with constant 4k. The same block is set oscillating with the **same maximum speed v**. What are the new amplitude and total energy?

- (A) A/2; E
- (B) A; 4E
- (C) A/4; E
- (D) A/2; E/4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At equilibrium all the energy is kinetic: E = ½mv². Same m and same v give the same E. Then ½(4k)A′² = ½kA², so A′ = A/2. (Or: ω doubles, and A = v/ω halves.)

- (B) keeps the amplitude fixed. That would need a larger maximum speed.
- (C) treats A as proportional to 1/k. Energy depends on A², so A ∝ 1/√k at fixed E.
- (D) halves A but then uses E = ½kA² with the **old** k.

**If you missed this:** read "Trading energy back and forth" in the [Topic 7.4 study guide](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/).
</details>

## Question 6 (multiple choice · 7.5)

A uniform disk of radius 0.20 m hangs on a horizontal nail through a small hole **0.10 m from its centre**. It swings in its own plane with small amplitude. What is its period? (I_cm = ½MR².)

- (A) 0.63 s
- (B) 0.90 s
- (C) 1.1 s
- (D) 1.4 s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** d = 0.10 m. Parallel axis: I = ½M(0.20)² + M(0.10)² = (0.030 m²)M. T = 2π√(I/(Mgd)) = 2π√(0.030 ÷ (9.8 × 0.10)) = 1.1 s.

- (A) treats the disk as a simple pendulum of length 0.10 m. The mass is spread out, not at one point.
- (B) uses I_cm and forgets the parallel axis term. The disk turns about the nail.
- (D) uses MR² (a hoop) for I_cm.

**If you missed this:** read Worked example 1 in the [Topic 7.5 study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/).
</details>

## Question 7 (multiple choice · 7.5)

A uniform disk hangs from a vertical wire through its centre and twists back and forth with period 1.6 s. It is replaced by a disk of the **same mass** but **twice the radius**, on the same wire. What is the new period?

- (A) 1.6 s
- (B) 3.2 s
- (C) 2.3 s
- (D) 6.4 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** T = 2π√(I/κ). The wire, and so κ, is unchanged. I = ½MR², so doubling R multiplies I by 4 and T by √4 = 2.

- (A) assumes only mass matters. How far the mass sits from the axis sets I.
- (C) multiplies by √2, as if I ∝ R.
- (D) multiplies T by 4, forgetting the square root.

**If you missed this:** read "The torsion pendulum" in the [Topic 7.5 study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/).
</details>

## Question 8 (short answer · 7.1)

Take **+u down the slope**. A 0.40 kg block rests on a smooth ramp at 30° to the horizontal. It is held by a spring (k = 98 N/m) fixed to the top of the ramp, parallel to the slope.

(a) Find how far the spring is stretched at equilibrium.
(b) Let u be the displacement from equilibrium. Show that the net force along the slope is −ku.
(c) Write the equation of motion and find the period.
(d) A student says: "Tilting the ramp more makes gravity's pull bigger, so the period gets shorter." Explain the error.

<details>
<summary>Answer and explanation</summary>

**(a)** kd = mg sin 30°, so d = (0.40 × 9.8 × 0.50) ÷ 98 = **0.020 m**.

**(b)** At displacement u the stretch is d + u. Net force down the slope = mg sin 30° − k(d + u) = (mg sin 30° − kd) − ku = **−ku**, since the bracket is zero.

**(c)** m d²u/dt² = −ku, so d²u/dt² = −(245 s⁻²)u. ω = 15.7 rad/s and **T = 2π/ω = 0.40 s**.

**(d)** The weight component is constant along the slope, so it only shifts the equilibrium (a steeper ramp gives a larger d). The restoring part is still −ku, so T = 2π√(m/k) for any angle.

**If you missed this:** work through Worked example 2 in the [Topic 7.1 study guide](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/).
</details>

## Question 9 (short answer · 7.4)

Take **+x to the right** of equilibrium. A 0.25 kg glider on a spring with k = 36 N/m passes x = +0.040 m moving at 0.60 m/s.

(a) Find the total energy of the glider–spring system.
(b) Find the amplitude and the greatest speed.
(c) Find the positions where the speed is half the greatest speed.
(d) How often does the kinetic energy repeat its pattern?

<details>
<summary>Answer and explanation</summary>

**(a)** U = ½ × 36 × 0.040² = 0.0288 J and K = ½ × 0.25 × 0.60² = 0.045 J, so **E = 0.074 J** (0.0738 J).

**(b)** ½kA² = E gives **A = 0.064 m**. ½mv_max² = E gives **v_max = 0.77 m/s**.

**(c)** Half the speed means K = E/4, so U = 3E/4 and x² = ¾A². **x = ±0.055 m** (±A√3/2).

**(d)** ω = √(36 ÷ 0.25) = 12 rad/s, so T = 0.52 s. K peaks at every pass through equilibrium, twice per cycle, so it repeats every **T/2 = 0.26 s**.

**If you missed this:** read "Trading energy back and forth" and "Energy against time" in the [Topic 7.4 study guide](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/).
</details>

## Question 10 (short answer · 7.5)

A uniform square plate of side a = 0.30 m hangs from a pivot at one corner and swings in its own plane. About an axis through its centre, perpendicular to the plate, I_cm = Ma²/6. Take counterclockwise as positive.

(a) Write the gravitational torque about the pivot for angular displacement θ.
(b) Use τ = Iα and an approximation to show the motion is SHM, and give ω².
(c) Find the period.
(d) The plate is released from 25°. Is your answer still reliable? Explain.

<details>
<summary>Answer and explanation</summary>

**(a)** d is half the diagonal, a/√2 = 0.21 m. **τ = −Mgd sin θ**; the minus sign makes the torque turn the plate back toward θ = 0.

**(b)** I d²θ/dt² = −Mgd sin θ. For small θ in radians, sin θ ≈ θ, so **d²θ/dt² = −(Mgd/I)θ**: SHM with ω² = Mgd/I.

**(c)** I = Ma²/6 + Ma²/2 = 2Ma²/3 = (0.060 m²)M. T = 2π√(0.060 ÷ (9.8 × 0.212)) = **1.1 s** (1.07 s).

**(d)** Fairly. 25° = 0.436 rad and sin 25° = 0.423, so at release the linear model overstates the torque by about 3%. The true torque is weaker, so the true period is about 1% **longer** (1.08 s, not 1.07 s): still 1.1 s to 2 significant figures.

**If you missed this:** read "From τ = Iα to SHM" and the small-angle table in the [Topic 7.5 study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/).
</details>

## Your next step

Mark each question right or wrong. For short answers, count a question as missed if any part went wrong.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 7.1 Defining Simple Harmonic Motion (SHM) | 1, 8 | [Topic 7.1 study guide](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/) |
| 7.2 Frequency and Period of SHM | 2 | [Topic 7.2 study guide](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/) |
| 7.3 Representing and Analyzing SHM | 3, 4 | [Topic 7.3 study guide](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/) |
| 7.4 Energy of Simple Harmonic Oscillators | 5, 9 | [Topic 7.4 study guide](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/) |
| 7.5 Simple and Physical Pendulums | 6, 7, 10 | [Topic 7.5 study guide](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/) |

## How to use your result

- **Read every explanation, even for questions you got right.** A right answer for a wrong reason is still a gap.
- **Missed one question in a topic?** Read the named section, then try that topic's practice set.
- **Missed two or more in a topic, or most of a short answer?** Work through the whole study guide for that topic, then its practice set and checklist.
- **Missed questions across several topics?** Start with Topic 7.1: writing d²x/dt² = −ω²x underlies every other topic.
- **Got everything right?** Go straight to the [mixed unit review](/advanced-course-resources/physics-c-mechanics/unit-7-review/).

This result guides your study; it does not predict an exam score.
