---
resourceId: "mb-ap-physcem-13.6-practice"
title: "Circuits with Capacitors and Inductors (LC Circuits): Practice Questions (Physics C: E&M 13.6)"
description: "Seven original Marlbridge practice questions on LC circuits: frequency, phase, energy, maximum current and charge, an experiment on period and a derivation, with solutions and suggested mark points."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.6"]
resourceType: "practice-questions"
prerequisites:
  - "Energy conservation and simple harmonic motion in an LC circuit"
prerequisiteResources: ["mb-ap-physcem-13.6-study-guide"]
learningObjectives:
  - "Calculate ω, f, T, maximum current and maximum charge in LC circuits"
  - "Relate the charge, current and energies at a given moment in the cycle"
  - "Plan an experiment on the period of an LC circuit and find L from a straight-line graph"
  - "Derive the equation for q(t) from the loop rule and use it to find times in the cycle"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Work in radians. Circuits are ideal (no resistance) unless stated. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-13.6-study-guide", "mb-ap-physcem-13.6-revision-notes", "mb-ap-physcem-13.6-checklist"]
next: "mb-ap-physcem-13.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 5 asks you to plan and analyse an experiment; Question 6 needs calculus."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Every circuit is ideal (no resistance) unless the question says otherwise. Use radians, 1 μF = 10⁻⁶ F and 1 mH = 10⁻³ H. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

A 50 mH inductor is connected across a charged 2.0 μF capacitor. What is the frequency of the oscillation?

- (A) 25 Hz
- (B) 503 Hz
- (C) 3.16 × 10³ Hz
- (D) 1.99 × 10⁴ Hz

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ω = 1/√(LC) = 1/√(0.050 × 2.0 × 10⁻⁶) = 1/√(1.0 × 10⁻⁷) = 3.16 × 10³ rad/s. Then f = ω/(2π) = 503 Hz.

- (A) uses √(L/C) ≈ 158 in place of 1/√(LC), then divides by 2π. √(L/C) is in ohms, not seconds, so it cannot give a frequency.
- (C) is ω, the **angular** frequency, quoted in hertz. You must divide by 2π.
- (D) multiplies ω by 2π instead of dividing.
</details>

## Question 2 (multiple choice · core)

At one instant, the current in an ideal LC circuit has its maximum value. Which statement is true at that instant?

- (A) The charge on the capacitor is at its maximum.
- (B) The potential difference across the inductor is zero.
- (C) The energy is shared equally between the capacitor and the inductor.
- (D) The rate of change of the current is at its maximum.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At a maximum of I, dI/dt = 0, so the inductor's potential difference L dI/dt is zero. By the loop rule the capacitor's potential difference q/C is zero too, so q = 0 and all the energy is in the inductor.

- (A) is a quarter-cycle off: the charge is greatest when the current is **zero**.
- (C) happens at T/8 after full charge, when |I| = I_max/√2, not at I_max.
- (D) is the opposite: |dI/dt| is greatest when |q| is greatest, since L dI/dt = −q/C.
</details>

## Question 3 (multiple choice · core)

In an LC circuit the capacitor starts with charge Q₀. The capacitor is replaced by one with a quarter of the capacitance, and it starts with the **same** charge Q₀. What happens to the maximum current?

- (A) It halves.
- (B) It stays the same.
- (C) It doubles.
- (D) It quadruples.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** I_max = Q₀/√(LC). With Q₀ fixed and C divided by 4, √(LC) halves, so I_max doubles. By energy: Q₀²/(2C) is now 4 times larger, so ½LI_max² is 4 times larger and I_max is 2 times larger.

- (A) treats I_max as proportional to √C. That is true when the **voltage** is fixed (I_max = V√(C/L)), but here the charge is fixed.
- (B) assumes the current depends only on Q₀ and L.
- (D) is the factor for the stored **energy**, not the current.
</details>

## Question 4 (calculation · core)

A 5.0 μF capacitor is charged to 80 V and connected across a 0.20 H inductor at t = 0.

(a) Find the maximum current.
(b) Find the charge on the capacitor at an instant when the current is 0.20 A.
(c) Find the first time after t = 0 at which the current is 0.20 A.

<details>
<summary>Worked solution</summary>

1. (a) Q₀ = CV = (5.0 × 10⁻⁶)(80) = 4.0 × 10⁻⁴ C. ω = 1/√(0.20 × 5.0 × 10⁻⁶) = 1/√(1.0 × 10⁻⁶) = 1.0 × 10³ rad/s. I_max = ωQ₀ = **0.40 A**.
2. (b) Energy conservation: q²/(2C) + ½LI² = Q₀²/(2C). Since I = I_max/2, the inductor holds (1/2)² = 1/4 of the energy, so the capacitor holds 3/4. Then q = Q₀√(3/4) = 4.0 × 10⁻⁴ × 0.866 = **3.5 × 10⁻⁴ C** (the capacitor's voltage is then 69 V).
3. (c) |I| = I_max sin ωt, so sin ωt = 0.20 ÷ 0.40 = 0.5 and ωt = π/6. t = (π/6) ÷ 1000 = **5.2 × 10⁻⁴ s** (0.52 ms), which is T/12.

Suggested mark points (4): 1 for ω = 1.0 × 10³ rad/s; 1 for I_max = 0.40 A; 1 for q from energy conservation; 1 for t = 0.52 ms from sin ωt = 0.5.

Common error: taking q = Q₀/2 when I = I_max/2. Energy depends on the **squares** of q and I, so the charge is Q₀√3/2, not Q₀/2.
</details>

## Question 5 (experimental design · core)

A student has one inductor, of unknown inductance L, and a set of capacitors. She wants to test whether T = 2π√(LC) and to find L.

(a) Describe a procedure she could use, including the equipment and how she would measure the period.
(b) Her results are below. State what she should plot to get a straight line, and describe the scales and units of the axes.

| C (μF) | 1.0 | 2.0 | 4.0 | 6.0 | 8.0 |
|---|---|---|---|---|---|
| T (ms) | 3.15 | 4.43 | 6.30 | 7.68 | 8.90 |

(c) Use the data to find L.
(d) The trace on her oscilloscope shows the amplitude shrinking each cycle. Explain why, and state whether this invalidates her measurement of T.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Charge a capacitor from a battery, then use a two-way switch to disconnect the battery and connect the capacitor across the inductor. Record the capacitor's voltage against time with an oscilloscope or a voltage sensor. Measure the time for several complete cycles and divide by the number of cycles to get T. Repeat for each capacitor, keeping the same inductor.

**(b)** T² = 4π²L × C, so plot **T² (vertical) against C (horizontal)**. The values of T² are 9.92, 19.6, 39.7, 59.0 and 79.2 ms². A sensible scale: C from 0 to 8 μF, T² from 0 to 80 ms², each axis labelled with its quantity and unit. The points should lie on a straight line through the origin.

**(c)** Gradient = 4π²L. Using the end points: (79.2 − 9.92) ms² ÷ (8.0 − 1.0) μF ≈ 9.9 ms²/μF. Since 1 ms²/μF = 10⁻⁶ s² ÷ 10⁻⁶ F = 1 s²/F, the gradient is 9.9 s²/F. L = 9.9 ÷ (4π²) = **0.25 H**. (A best-fit line through all the points gives the same value to 2 significant figures.)

**(d)** Real wires and the coil have resistance, so energy is dissipated as thermal energy each cycle and the amplitude decays. When the resistance is small, the period is still very close to 2π√(LC), so the measurement is still useful. Timing several cycles early in the trace keeps the effect small.

| Point | What earns it |
|---|---|
| 1 | Workable procedure: charge, switch to the inductor, record V against time |
| 1 | Times several cycles and divides, and keeps L fixed while changing C |
| 1 | Plots T² against C with labelled axes, units and a suitable scale |
| 1 | Gradient = 4π²L, with correct unit handling |
| 1 | L ≈ 0.25 H |
| 1 | Amplitude decay explained by resistance; period still valid if resistance is small |

Accept plotting T against √C (gradient 2π√L), which also gives L ≈ 0.25 H.
</details>

## Question 6 (constructed response · core)

A capacitor C with initial charge Q₀ is connected across an inductor L at t = 0, when the current is zero. Let q be the charge on one plate and I = dq/dt.

(a) Apply the loop rule to obtain a differential equation for q.
(b) Show that q = Q₀ cos ωt satisfies the equation and the starting conditions, and find ω.
(c) Find the first time, in terms of the period T, at which the energy in the inductor is three times the energy in the capacitor. Find q and |I| at that time in terms of Q₀ and I_max.
(d) Sketch U_C and U_L against t for one period, marking where they are equal.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The potential changes round the loop add to zero: q/C + L dI/dt = 0. With dI/dt = d²q/dt², **d²q/dt² = −q/(LC)**.

**(b)** q = Q₀ cos ωt gives d²q/dt² = −ω²Q₀ cos ωt = −ω²q. This matches if **ω = 1/√(LC)**. At t = 0, q = Q₀ and I = −ωQ₀ sin 0 = 0, as required.

**(c)** U_C = (Q₀²/2C)cos² ωt and U_L = (Q₀²/2C)sin² ωt. U_L = 3U_C means tan² ωt = 3, so ωt = π/3 and **t = (π/3)/ω = T/6**. Then q = Q₀ cos(π/3) = **Q₀/2** and |I| = I_max sin(π/3) = **(√3/2)I_max**. Check: U_C is (1/2)² = 1/4 of the total and U_L is 3/4.

**(d)** U_C starts at the total energy and follows a cos² curve: zero at T/4, back to the total at T/2, and so on. U_L is the mirror image (sin²). The two curves cross at T/8, 3T/8, 5T/8 and 7T/8, each at half the total energy. Each repeats every T/2.

| Point | What earns it |
|---|---|
| 1 | Loop rule q/C + L dI/dt = 0 with dI/dt = d²q/dt² |
| 1 | Substitution showing ω = 1/√(LC) |
| 1 | Starting conditions q(0) = Q₀ and I(0) = 0 checked |
| 1 | tan² ωt = 3, giving t = T/6 |
| 1 | q = Q₀/2 and current of size (√3/2)I_max |
| 1 | Sketch: complementary cos² and sin² curves, period T/2, crossing at half the total energy |

Accept a sign convention giving q/C − L dI/dt = 0 if I is defined as the rate at which charge leaves the plate; the final equation for q is the same.
</details>

## Question 7 (constructed response · stretch)

A 6.0 V battery, a 12 Ω resistor and a 0.50 H inductor have been connected in series for a long time. At t = 0 a switch removes the battery and resistor and connects the inductor directly across an uncharged 8.0 μF capacitor, without interrupting the inductor current.

(a) Find the current in the inductor at t = 0.
(b) Find the maximum charge on the capacitor and the maximum potential difference across it.
(c) Find the first time at which the capacitor's charge is greatest.
(d) Write expressions for q(t) and I(t).
(e) Sketch I against t for one period, with numbered scales on both axes.
(f) Comment on your answer to (b) compared with the battery emf.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** After a long time the inductor acts as a wire, so I₀ = ℰ/R = 6.0 ÷ 12 = **0.50 A**. The inductor current cannot jump, so it is still 0.50 A just after the switch moves.

**(b)** Energy: ½LI₀² = ½ × 0.50 × (0.50)² = 6.25 × 10⁻² J. When the current is zero, all of it is in the capacitor: Q_max²/(2C) = 0.0625 J. So Q_max = I₀√(LC) = 0.50 × √(0.50 × 8.0 × 10⁻⁶) = 0.50 × 2.0 × 10⁻³ = **1.0 × 10⁻³ C**, and V_max = Q_max/C = **125 V** (equivalently I₀√(L/C) = 0.50 × 250 Ω).

**(c)** ω = 1/√(LC) = 1/(2.0 × 10⁻³ s) = 500 rad/s, so T = 2π/ω = 12.6 ms. The capacitor starts empty with maximum current, so its charge is first greatest at T/4 = **3.1 ms**.

**(d)** **q = Q_max sin ωt = (1.0 × 10⁻³ C) sin(500t)** and **I = I₀ cos ωt = (0.50 A) cos(500t)**, with t in seconds.

**(e)** A cosine curve starting at +0.50 A, crossing zero at 3.1 ms, reaching −0.50 A at 6.3 ms, zero at 9.4 ms and +0.50 A at 12.6 ms. Time axis 0 to about 13 ms; current axis −0.5 A to +0.5 A.

**(f)** 125 V is more than 20 times the 6.0 V emf. That does not break energy conservation: the 0.0625 J came from the battery while the current was building up, and the inductor delivers it to a small capacitor, which needs a large voltage to hold it. (Safety note: switching inductors can produce high voltages.)

| Point | What earns it |
|---|---|
| 1 | I₀ = ℰ/R = 0.50 A, with the reason that the inductor is a wire at steady state |
| 1 | Energy method or I₀√(LC) giving Q_max = 1.0 × 10⁻³ C |
| 1 | V_max = 125 V |
| 1 | ω = 500 rad/s and first maximum of charge at T/4 = 3.1 ms |
| 1 | q ∝ sin ωt and I ∝ cos ωt, consistent with the starting conditions |
| 1 | Sketch with correct shape, amplitude 0.50 A and period 12.6 ms marked |
| 1 | Explains how V_max can exceed ℰ using energy |

Carry forward an error in I₀ into (b)–(e) once.
</details>

## How did you do?

- **Q1 wrong:** re-read "The loop rule gives simple harmonic motion" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-study-guide/), especially ω and f.
- **Q2 or Q6 wrong:** study Figure 1 and "Charge, current and energy against time".
- **Q3 or Q4 wrong:** revisit "The idea: energy passed back and forth" and Worked example 2.
- **Q5 incomplete:** read "Designing an experiment".
- **Q7 incomplete:** combine Topic 13.5's steady-state rule with Worked example 1 here.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-checklist/).
